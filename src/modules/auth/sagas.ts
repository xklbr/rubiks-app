import { put, takeLatest, call, StrictEffect } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Action } from 'redux-actions';
import { ReduxFormPayload } from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';

import { SDK } from 'utils/sdk';

import ROLE from 'utils/enums/roles';
import STATUS from 'utils/enums/status';

import { authLogin, authLogout, clearSession } from './actions';

export function* authLoginSaga({
  payload: { values: requestBody },
}: Action<ReduxFormPayload<any, any>>): Generator<StrictEffect> {
  try {
    yield put(authLogin.request());
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call(
      [api.auth, 'loginUser'],
      {},
      { requestBody },
    );
    if (body) {
      const { roles, status, accessToken } = body;
      yield call([SDK, 'setToken'], accessToken);
      yield put(authLogin.success(accessToken));
      yield roles.includes(ROLE.ADMIN) && status === STATUS.ACTIVE
        ? put(push('/admin/dashboard'))
        : put(push('/'));
    }
  } catch (error: any) {
    yield put(
      authLogin.failure(
        new SubmissionError({ _error: error?.response?.body?.message }),
      ),
    );
  } finally {
    yield put(authLogin.fulfill());
  }
}

export function* authLogoutSaga(): Generator<StrictEffect> {
  try {
    yield put(authLogout.request());
    yield put(clearSession());
    yield put(authLogout.success());
  } catch (error) {
    yield put(authLogout.failure(error));
  } finally {
    yield put(authLogout.fulfill());
  }
}

export default function* authWatch(): Generator<StrictEffect> {
  yield takeLatest(authLogin.TRIGGER, authLoginSaga);
  yield takeLatest(authLogout.TRIGGER, authLogoutSaga);
}
