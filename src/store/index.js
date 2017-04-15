import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import logger from '../dev/logger';
import initialState from './data';

const isProduction = process.env.NODE_ENV === 'production';
let store = null;

if (isProduction) {
  const middleware = applyMiddleware(thunk);

  store = createStore(rootReducer, initialState, middleware);

} else {
  const middleware = applyMiddleware(thunk, logger);
  const enhancer = compose(middleware);

  store = createStore(rootReducer, initialState, enhancer);
}

export default store;
