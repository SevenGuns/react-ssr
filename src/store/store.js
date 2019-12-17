import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';
import userReducer from './user';

const reducer = combineReducers({
  index: indexReducer,
  user: userReducer
});

export const getClientStore = () => {
  const defaultState = window.__context ? window.__context : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
export const getServerStore = () =>
  createStore(reducer, applyMiddleware(thunk));
