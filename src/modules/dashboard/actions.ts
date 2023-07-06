/* eslint-disable import/prefer-default-export */
import { createRoutine } from 'redux-saga-routines';

import { GET_USERS_STATS } from './types';

export const getUsersStats = createRoutine(GET_USERS_STATS);
