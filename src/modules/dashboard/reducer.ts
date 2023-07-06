import produce, { Draft } from 'immer';

import { UserType } from 'types/user';
import { getUsersStats } from './actions';

export type DashboardState = {
  loading: boolean;
  error: string | null;
  items: UserType[];
};

const initialState: DashboardState = {
  loading: false,
  error: null,
  items: [],
};

const reducer = produce((draft: Draft<DashboardState>, { type, payload }) => {
  switch (type) {
    // TRIGGER
    case getUsersStats.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;

    // SUCCESS
    case getUsersStats.SUCCESS:
      draft.items = payload;
      break;

    // FAILURE
    case getUsersStats.FAILURE:
      draft.error = payload;
      break;

    // FULFILL
    case getUsersStats.FULFILL:
      draft.loading = false;
      break;

    // no default
  }
}, initialState);

export default reducer;
