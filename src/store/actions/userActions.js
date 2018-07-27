import * as actionTypes from './actionTypes'
import { createAction } from 'redux-actions';
import { createLogic } from 'redux-logic';

export const addUser = createAction(actionTypes.ADD_USER);
export const deleteUser = createAction(actionTypes.DELETE_USER);
export const fetchUsers = createAction(actionTypes.FETCH_USERS);
export const fetchUsersSuccess = createAction(actionTypes.FETCH_USERS_SUCCESS);


export const fetchUsersLogic = createLogic({
  type: actionTypes.FETCH_USERS,
  process({ getState, action }, dispatch, done) {
    const timeoutId = setTimeout(() => {

      const mockPayload = [{
        id: 1,
        name: 'Denis',
        age: '32'
      }, {
        id: 2,
        name: 'Deonisios',
        age: '35'
      }, {
        id: 3,
        name: 'Deonisimus',
        age: '37'
      }];

      dispatch(fetchUsersSuccess(mockPayload));
      clearTimeout(timeoutId);
      done();
    }, 1000);
  }
});
