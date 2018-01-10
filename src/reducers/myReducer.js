import {
  INCREMENT_COUNT,
  AVAILABLE_FEATURES
} from '../actions/types';

const DEFAULT_STATE = {
  count: 0,
  fireabaseAvailableFeatures: []
};

export default function(state = DEFAULT_STATE, action){
  switch(action.type){
    case INCREMENT_COUNT:
      return {...state, count: state.count+1};
    case AVAILABLE_FEATURES:
      return {...state, fireabaseAvailableFeatures: action.payload};
    default:
      return state;
  }
}
