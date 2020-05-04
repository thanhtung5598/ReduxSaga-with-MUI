import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './../reducer';

const composeEnhance =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const configStore = () => {
  const middlewares = [thunk]; // List middleware
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducers, composeEnhance(...enhancers));
  return store;
};

export default configStore;
