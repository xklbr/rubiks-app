import produce, { Draft } from 'immer';

import { UserType } from 'types/user';
import {
  listUsers,
  retrieveUser,
  updateUser,
  disabledUser,
  toggleModalDisabledUser,
  createUser,
} from './actions';

export type UsersState = {
  loading: boolean;
  error: string | null;
  item: UserType | null;
  items: UserType[];
  disabledLoading: boolean;
  disableModalShow: boolean;
  disabledUser: boolean;
};

const initialState: UsersState = {
  loading: false,
  error: null,
  item: null,
  items: [],
  disableModalShow: false,
  disabledLoading: false,
  disabledUser: false,
};

const reducer = produce((draft: Draft<UsersState>, { type, payload }) => {
  switch (type) {
    // TRIGGER
    case listUsers.TRIGGER:
    case retrieveUser.TRIGGER:
    case createUser.TRIGGER:
    case updateUser.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;

    case disabledUser.TRIGGER:
      draft.disabledLoading = true;
      draft.error = null;
      break;

    // SUCCESS
    case listUsers.SUCCESS:
      draft.items = payload;
      break;
    case retrieveUser.SUCCESS:
    case createUser.SUCCESS:
    case updateUser.SUCCESS:
      draft.item = payload;
      break;

    case disabledUser.SUCCESS:
      draft.disabledUser = payload;
      break;

    // FAILURE
    case listUsers.FAILURE:
    case retrieveUser.FAILURE:
    case createUser.FAILURE:
    case updateUser.FAILURE:
      draft.error = payload;
      break;
    case disabledUser.FAILURE:
      draft.error = payload;
      draft.disabledUser = false;
      break;

    // FULFILL
    case listUsers.FULFILL:
    case retrieveUser.FULFILL:
    case createUser.FULFILL:
    case updateUser.FULFILL:
      draft.loading = false;
      break;
    case disabledUser.FULFILL:
      draft.disabledLoading = false;
      break;

    // ToString
    case toggleModalDisabledUser.toString():
      draft.item = payload;
      break;

    // no default
  }
}, initialState);

export default reducer;
