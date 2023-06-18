import { createAction } from 'redux-actions';
import { bindRoutineToReduxForm, createRoutine } from 'redux-saga-routines';

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CLEAR_SESSION } from './types';

export const authLogin = createRoutine(AUTH_LOGIN);
export const bindedAuthLogin = bindRoutineToReduxForm(authLogin);

export const authLogout = createRoutine(AUTH_LOGOUT);
export const clearSession = createAction(AUTH_CLEAR_SESSION);
