import { createAction } from 'redux-actions';
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

import {
  DISABLED_USER,
  LIST_USERS,
  RETRIEVE_USER,
  UPDATE_USER,
  TOGGLE_MODAL_DISABLED_USER,
  CREATE_USER,
} from './types';

export const listUsers = createRoutine(LIST_USERS);
export const retrieveUser = createRoutine(RETRIEVE_USER);
export const createUser = createRoutine(CREATE_USER);
export const updateUser = createRoutine(UPDATE_USER);
export const disabledUser = createRoutine(DISABLED_USER);

export const toggleModalDisabledUser = createAction(TOGGLE_MODAL_DISABLED_USER);

export const bindedCreateUser = bindRoutineToReduxForm(createUser);
export const bindedUpdateUser = bindRoutineToReduxForm(updateUser);
