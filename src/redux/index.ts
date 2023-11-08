import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
import ApiReducer from './reducers/ApisReducer';

export const reducer = combineReducers({
  ApiReducer,
  UserReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
