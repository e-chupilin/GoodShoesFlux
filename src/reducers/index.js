import { combineReducers } from 'redux';
import goods from '../reducers/goods';
import userAuth from '../reducers/userAuth';

export default combineReducers({
  goods,
  userAuth
});
