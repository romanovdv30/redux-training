import * as actionTypes from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
  year: 2016,
  isFetching: false,
  songs: [{
    id: 1,
    title: 'Weee',
    length: '2m 30s'
  }]
};

const musicReducer = handleActions({
  [actionTypes.ADD_SONG]: (state, action) => ({
    ...state,
    songs: state.songs.concat(action.payload)
  }),
  [actionTypes.DELETE_SONG]: (state, action) => ({
    ...state,
    songs: state.songs.filter((item) => item.id !== action.payload)
  }),
  [actionTypes.FETCH_MUSIC]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actionTypes.FETCH_MUSIC_SUCCESS]: (state, action) => ({
    ...state,
    songs: action.payload,
    isFetching: false
  })
}, initialState);

export default musicReducer;
