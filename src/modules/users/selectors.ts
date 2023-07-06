import { createSelector } from 'reselect';

import { RootState } from 'store/types';
import { UsersState } from './reducer';

export const getUsers = ({ users }: RootState): UsersState => users;

export const isUserLoading = createSelector(getUsers, ({ loading }) => loading);
export const getUsersError = createSelector(getUsers, ({ error }) => error);
export const getUsersItems = createSelector(getUsers, ({ items }) => items);
export const getUserItem = createSelector(getUsers, ({ item }) => item);
export const getDisableModalShow = createSelector(
  getUsers,
  ({ disableModalShow }) => disableModalShow,
);
export const isDisabledLoading = createSelector(
  getUsers,
  ({ disabledLoading }) => disabledLoading,
);
export const getDisabledUser = createSelector(
  getUsers,
  ({ disabledUser }) => disabledUser,
);
