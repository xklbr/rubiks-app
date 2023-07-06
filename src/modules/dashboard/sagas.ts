import { put, takeLatest, call, StrictEffect } from 'redux-saga/effects';

import { SDK } from 'utils/sdk';

import { messageError } from 'components/toast-messages';
import { getUsersStats } from './actions';

export function* getUsersStatsSaga(): Generator<StrictEffect, void, unknown> {
  try {
    yield put(getUsersStats.request());
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call([api.dashboard, 'getUsersStats']);
    yield put(getUsersStats.success(body));
  } catch (error: any) {
    yield put(getUsersStats.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(getUsersStats.fulfill());
  }
}

export default function* dashboardWatch(): Generator<StrictEffect> {
  yield takeLatest(getUsersStats.TRIGGER, getUsersStatsSaga);
}
