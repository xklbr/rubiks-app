/* eslint-disable @typescript-eslint/ban-ts-comment */
import { all, call, spawn, StrictEffect } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

import navWatch from 'modules/nav/sagas';
import authWatch from 'modules/auth/sagas';
import usersWatch from 'modules/users/sagas';
import dashboardWatch from '../modules/dashboard/sagas';

function* rootSaga(): Generator<StrictEffect> {
  yield all([
    // external
    call(routinePromiseWatcherSaga),
    spawn(navWatch),
    call(authWatch),
    call(usersWatch),
    call(dashboardWatch),
  ]);
}

export default rootSaga;
