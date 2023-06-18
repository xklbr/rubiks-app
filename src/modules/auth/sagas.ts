import { put, takeLatest, call, StrictEffect } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ReduxFormPayload } from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';

import { SDK } from 'utils/sdk';
import { authLogin, authLogout, clearSession } from './actions';

export function* authLoginSaga({
  payload: { values: requestBody },
}: Action<ReduxFormPayload<any, any>>): Generator<StrictEffect> {
  try {
    yield put(authLogin.request());
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call(
      [api.auth, 'loginUser'],
      {},
      { requestBody },
    );
    // eslint-disable-next-line no-console
    console.log('requestBody', requestBody);
    yield call([SDK, 'setToken'], body.accessToken);
    yield put(authLogin.success(body.accessToken));
  } catch (error: any) {
    yield put(
      authLogin.failure(
        new SubmissionError({ _error: error?.response?.body?.message }),
      ),
    );
  } finally {
    yield put(authLogin.fulfill());
  }
}

export function* authLogoutSaga(): Generator<StrictEffect> {
  try {
    yield put(authLogout.request());
    yield put(clearSession());
    yield put(authLogout.success());
  } catch (error) {
    yield put(authLogout.failure(error));
  } finally {
    yield put(authLogout.fulfill());
  }
}

export default function* authWatch(): Generator<StrictEffect> {
  yield takeLatest(authLogin.TRIGGER, authLoginSaga);
  yield takeLatest(authLogout.TRIGGER, authLogoutSaga);
}
