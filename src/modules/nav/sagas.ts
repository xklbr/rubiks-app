/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import {
  createMatchSelector,
  LOCATION_CHANGE,
  push,
  RouterLocation,
} from 'connected-react-router';
import {
  put,
  select,
  takeEvery,
  StrictEffect,
  cancel,
  call,
} from 'redux-saga/effects';
import { match, matchPath } from 'react-router-dom';
import { Action } from 'redux-actions';
import queryString from 'qs';
// @ts-ignore
import cloneDeep from 'clone-deep';

import { routes } from 'routes/config';
import RoutesType from 'routes/interface';
import { authIsLoggedIn } from 'modules/auth/selectors';
import { getCurrentLocation, getFilters } from './selectors';
import { setNavError, setUrlFilters, updateFiltersFromUrl } from './actions';

export const flatRoutes = (data: RoutesType[]): RoutesType[] =>
  data.reduce((previous: RoutesType[], element) => {
    const innerRoutes = element?.routes;
    // eslint-disable-next-line no-param-reassign
    delete element.routes;
    previous.push(element);
    innerRoutes && previous.push(...flatRoutes(innerRoutes));
    return previous;
  }, []);

export function* locationChangeSaga(): Generator<StrictEffect> {
  try {
    const paths = flatRoutes(cloneDeep(routes));
    const currentLocation = yield select(getCurrentLocation);
    /** OPTION 1 -  Filter just one route */

    // const matches = paths
    //   .filter((path) => path.path && path.path !== '*')
    //   .find((path) =>
    //     matchPath((currentLocation as RouterLocation<unknown>).pathname, {
    //       path: path.path,
    //       exact: true,
    //       strict: false,
    //     }),
    //   );

    // if (!matches) {
    //   yield cancel();
    // }

    /** OPTION 2 - Filter routes including parents */
    const matches = paths
      .filter(({ path }) => path && path !== '*')
      .filter(({ path }) =>
        matchPath((currentLocation as RouterLocation<unknown>).pathname, {
          path,
          exact: true,
        }),
      );

    if (!matches || matches.length === 0) {
      yield cancel();
    }

    yield call(checkURLPermissions, matches);
    const search: any = yield call(
      setURLFilter,
      matches,
      currentLocation as RouterLocation<unknown>,
    );
    yield call(runURLActions, matches, search);
  } catch (error) {
    yield put(setNavError(error));
  }
}

export function* setUrlFiltersSaga({
  payload,
}: Action<Record<string, unknown>>): Generator<StrictEffect> {
  try {
    const currentLocation: any = yield select(getCurrentLocation);
    const filters: any = yield select(getFilters);
    const nextFilters = { ...filters, ...payload };

    const qs = queryString.stringify(nextFilters);
    let path = currentLocation.pathname;

    if (qs) {
      path += `?${qs}`;
    }
    yield put(push(path));
  } catch (error) {
    yield put(setNavError(error));
  }
}

export function* checkURLPermissions(matches: RoutesType[]): Generator<any> {
  const isLoggedIn = yield select(authIsLoggedIn);

  const isPrivated = matches.some(({ privated }) => privated);
  const isPublic = matches.some(({ published }) => published);

  if (isPrivated && !isLoggedIn) {
    yield put(push('/'));
    yield cancel();
  } else if (isPublic && isLoggedIn) {
    yield put(push('/app'));
    yield cancel();
  }
}

export function* setURLFilter(
  matches: RoutesType[],
  currentLocation: RouterLocation<unknown>,
) {
  const initialSearch = queryString.parse(currentLocation.search, {
    ignoreQueryPrefix: true,
  });
  const filters = matches
    .filter(({ defaultFilters }) => defaultFilters)
    .reduce((accumulator, current) => {
      Object.assign(accumulator, current.defaultFilters);
      return accumulator;
    }, {});

  const search = { ...filters, ...initialSearch };
  yield put(updateFiltersFromUrl(search));
  return search;
}

export function* runURLActions(
  matches: RoutesType[],
  search: Record<string, any>,
): Generator<any> {
  for (const singleMatch of matches) {
    const matchSelector = createMatchSelector(singleMatch.path);
    const parametersMatch = yield select(matchSelector);
    if (singleMatch.actions) {
      for (const action of singleMatch.actions) {
        yield put(action({ ...(parametersMatch as match)?.params, ...search }));
      }
    }
  }
}

export default function* navWatch(): Generator<StrictEffect> {
  yield takeEvery(LOCATION_CHANGE, locationChangeSaga);
  yield takeEvery(setUrlFilters.toString(), setUrlFiltersSaga);
}
