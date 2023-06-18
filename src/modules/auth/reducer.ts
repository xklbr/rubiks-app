import produce, { Draft, Immutable } from 'immer';

import { authLogin, authLogout } from './actions';

export type AuthState = Immutable<{
  loading: boolean;
  token: string | null;
  isLoggedIn: boolean;
  error: any;
}>;

const initialState: AuthState = {
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

export default produce((draft: Draft<AuthState>, { type, payload }) => {
  switch (type) {
    // REQUEST
    case authLogin.REQUEST:
    case authLogout.REQUEST:
      draft.loading = true;
      break;

    // SUCCESS
    case authLogin.SUCCESS:
      draft.token = payload;
      draft.error = null;
      draft.isLoggedIn = true;
      break;
    case authLogout.SUCCESS:
      draft.token = null;
      draft.isLoggedIn = false;
      break;

    // FAILURE
    case authLogin.FAILURE:
    case authLogout.FAILURE:
      draft.error = payload;
      draft.loading = true;
      break;

    // FULFILL
    case authLogin.FULFILL:
    case authLogout.FULFILL:
      draft.loading = false;
      break;
  }
}, initialState);
