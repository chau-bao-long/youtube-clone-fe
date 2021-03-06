import { all, delay, put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL
} from './constants';

export function* login() {
  try {
    yield delay(400);

    yield put({ type: LOGIN_SUCCESS });
  } catch (err) {
    yield put({ type: LOGIN_FAIL, payload: err });
  }
}

export function* logout() {
  try {
    yield delay(200);

    yield put({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    yield put({
      type: USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
  ]);
}
