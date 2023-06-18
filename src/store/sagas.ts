/* eslint-disable @typescript-eslint/ban-ts-comment */
import { all, call, spawn, StrictEffect } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import navWatch from 'modules/nav/sagas';
// @ts-ignore
import authWatch from 'modules/auth/sagas';

function* rootSaga(): Generator<StrictEffect> {
  yield all([
    // external
    call(routinePromiseWatcherSaga),
    spawn(navWatch),
    call(authWatch),
  ]);
}

export default rootSaga;
