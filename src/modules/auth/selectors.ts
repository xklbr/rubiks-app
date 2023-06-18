import { createSelector } from 'reselect';
import { RootState } from 'store/types';
import { AuthState } from './reducer';

export const getAuth = (state: RootState): AuthState => state.auth;
export const isAuthLoading = createSelector(getAuth, ({ loading }) => loading);
export const getAuthToken = createSelector(getAuth, ({ token }) => token);
export const authIsLoggedIn = createSelector(
  getAuth,
  (auth) => auth.isLoggedIn,
);
