import { Action, combineReducers, EmptyObject } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import { FormStateMap, reducer as formReducer } from 'redux-form';
import nav, { NavState } from 'modules/nav/reducer';
import auth, { AuthState } from 'modules/auth/reducer';
import users, { UsersState } from 'modules/users/reducer';
import dashboard, { DashboardState } from 'modules/dashboard/reducer';

import { AUTH_CLEAR_SESSION } from 'modules/auth/types';
import { history } from './history';
import { authPersistConfig, rootPersistConfig } from './persistor';

export type ReducerType = {
  form: FormStateMap;
  router: RouterState;
  nav: NavState;
  auth: AuthState;
  users: UsersState;
  dashboard: DashboardState;
};

const appReducer = combineReducers<ReducerType | undefined>({
  // external
  router: connectRouter(history),
  form: formReducer,

  // app
  nav,
  auth: persistReducer(authPersistConfig, auth),
  users,
  dashboard,
});

// Actions to empty the reducer. i.e LOGOUT
const actions: Set<string> = new Set([AUTH_CLEAR_SESSION]);

const rootReducer = (state: ReducerType | undefined, action: Action) => {
  if (actions.has(action.type)) {
    return appReducer({} as EmptyObject & ReducerType, action);
  }

  return appReducer(state, action);
};

export default persistReducer<ReducerType>(rootPersistConfig, rootReducer);
export { appReducer };
