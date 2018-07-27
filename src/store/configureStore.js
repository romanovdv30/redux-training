import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';
import {fetchUsersLogic} from './actions/userActions';
import {fetchMusicLogic} from './actions/musicActions';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  const logger = createLogger();
  const logicMiddleware = createLogicMiddleware([fetchUsersLogic, fetchMusicLogic]);
  const middlewares = [logger, logicMiddleware, thunkMiddleware];

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/index', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store
};