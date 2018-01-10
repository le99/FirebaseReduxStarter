import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myState: myReducer
});

export default rootReducer;
