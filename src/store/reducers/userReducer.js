import * as actionTypes from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
  users: [],
  isFetching: false
};

const userReducer = handleActions({
  [actionTypes.ADD_USER]: (state, action) => ({
    ...state,
    users: state.users.concat(action.payload)
  }),
  [actionTypes.DELETE_USER]: (state, action) => ({
    ...state,
    users: state.users.filter((item) => item.id !== action.payload)
  }),
  [actionTypes.FETCH_USERS]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actionTypes.FETCH_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload,
    isFetching: false
  })
}, initialState);

export default userReducer;