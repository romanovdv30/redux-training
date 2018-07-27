import * as actionTypes from './actionTypes';
import { createAction } from 'redux-actions';
import { createLogic } from 'redux-logic';

export const addSong = createAction(actionTypes.ADD_SONG);
export const deleteSong = createAction(actionTypes.DELETE_SONG);
export const fetchMusic = createAction(actionTypes.FETCH_MUSIC);
export const fetchMusicSuccess = createAction(actionTypes.FETCH_MUSIC_SUCCESS);

export const fetchMusicLogic = createLogic({
  type: actionTypes.FETCH_MUSIC,
  process({ getState, action }, dispatch, done) {
    const timeoutId = setTimeout(() => {
      const mockPayload = [{
        id: 1,
        title: 'Memo',
        length: '5m 25s'
      }, {
        id: 2,
        title: 'Little',
        length: '2m 25s'
      }, {
        id: 3,
        title: 'Desert',
        length: '3m 35s'
      }];

      dispatch(fetchMusicSuccess(mockPayload));
      clearTimeout(timeoutId);
      done();
    }, 1000);
  }
});
