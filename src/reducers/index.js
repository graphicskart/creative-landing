import { combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import common from './Common';

export default combineReducers({
  router: routerReducer,
  common: common
});
