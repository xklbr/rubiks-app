/* eslint-disable no-param-reassign */
import { put, takeLatest, call, StrictEffect } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ReduxFormPayload } from 'redux-saga-routines';
import { push } from 'connected-react-router';

import { SDK } from 'utils/sdk';

import { messageError, messageSuccess } from 'components/toast-messages';
import { MESSAGES } from 'utils/messages';

import {
  createUser,
  disabledUser,
  listUsers,
  retrieveUser,
  updateUser,
} from './actions';

export function* listUsersSaga(): Generator<StrictEffect, void, unknown> {
  try {
    yield put(listUsers.request());
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call([api.users, 'listUsers']);
    yield put(listUsers.success(body));
  } catch (error: any) {
    yield put(listUsers.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(listUsers.fulfill());
  }
}

export function* retrieveUserSaga({
  payload,
}: any): Generator<StrictEffect, void, unknown> {
  try {
    yield put(retrieveUser.request());
    const parameters = { id: payload.id };
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call([api.users, 'retrieveUser'], parameters);
    yield put(retrieveUser.success(body));
  } catch (error: any) {
    yield put(retrieveUser.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(retrieveUser.fulfill());
  }
}

export function* createUserSaga({
  payload: { values },
}: any): Generator<StrictEffect> {
  try {
    yield put(createUser.request());
    const api: any = yield call([SDK, 'getApi']);
    const { body }: any = yield call(
      [api.users, 'newUser'],
      {},
      {
        requestBody: values,
      },
    );

    yield put(createUser.success(body));
    messageSuccess(MESSAGES.USER_CREATE);
  } catch (error: any) {
    yield put(createUser.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(createUser.fulfill());
  }
}

export function* updateUserSaga({
  payload: { values: requestBody },
}: Action<ReduxFormPayload<any, any>>): Generator<StrictEffect> {
  try {
    delete requestBody.createdAt;
    delete requestBody.updatedAt;
    delete requestBody.deletedAt;
    yield put(updateUser.request());
    const api: any = yield call([SDK, 'getApi']);
    const body: any = yield call(
      [api.users, 'updateUser'],
      { id: requestBody.id },
      { requestBody },
    );
    yield put(updateUser.success(body));
    messageSuccess(MESSAGES.USER_UPDATE);
  } catch (error: any) {
    yield put(updateUser.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(updateUser.fulfill());
  }
}

export function* deleteUserSaga({
  payload: { userId },
}: any): Generator<StrictEffect, void, unknown> {
  try {
    yield put(disabledUser.request());
    const api: any = yield call([SDK, 'getApi']);
    const body: any = yield call([api.users, 'disabledUser'], {
      id: userId,
    });
    if (body) {
      yield put(disabledUser.success(true));
      yield put(push('/admin/users'));
      messageSuccess(MESSAGES.USER_DISABLED);
    } else {
      yield put(disabledUser.success(false));
    }
  } catch (error: any) {
    yield put(disabledUser.failure(error));
    messageError(error?.response?.body?.message);
  } finally {
    yield put(disabledUser.fulfill());
  }
}

export default function* usersWatch(): Generator<StrictEffect> {
  yield takeLatest(listUsers.TRIGGER, listUsersSaga);
  yield takeLatest(retrieveUser.TRIGGER, retrieveUserSaga);
  yield takeLatest(createUser.TRIGGER, createUserSaga);
  yield takeLatest(updateUser.TRIGGER, updateUserSaga);
  yield takeLatest(disabledUser.TRIGGER, deleteUserSaga);
}
