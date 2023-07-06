import { createSelector } from 'reselect';

import { RootState } from 'store/types';
import { DashboardState } from './reducer';

export const getDashboard = ({ dashboard }: RootState): DashboardState =>
  dashboard;

export const isDashboardLoading = createSelector(
  getDashboard,
  ({ loading }) => loading,
);
export const getDashboardError = createSelector(
  getDashboard,
  ({ error }) => error,
);
export const getDashboardItems = createSelector(
  getDashboard,
  ({ items }) => items,
);
