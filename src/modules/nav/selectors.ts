import { RouterState } from 'connected-react-router';
import { createSelector } from 'reselect';
import { RootState } from 'store/types';
import { NavState } from './reducer';

export const getRouter = (state: RootState): RouterState => state.router;
export const getNav = (state: RootState): NavState => state.nav;

export const getCurrentLocation = createSelector(
  getRouter,
  (router) => router.location,
);

export const getFilters = createSelector(getNav, (nav) => nav.filters);
