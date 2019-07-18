/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { ActionTypes } from '../constants';
import history from '../modules/history';

/**
 * Login
 */
export function* login(action) {
  const { values, meta: { setSubmitting }} = action.payload;
  try {
    const response = yield axios.post('http://localhost:3000/login', values);
    if (response.data.message === "ok") {
      yield put({
        type: ActionTypes.USER_LOGIN_SUCCESS,
      });
    };
    history.push("/");
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  } finally {
    setSubmitting(false);
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield delay(200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
  ]);
}
