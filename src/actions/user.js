/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const { userLogin: login, userLogout: logOut, updateData: updateUserData } = createActions({
  [ActionTypes.USER_LOGIN]: payload => payload,
  [ActionTypes.USER_LOGOUT]: () => ({}),
});
