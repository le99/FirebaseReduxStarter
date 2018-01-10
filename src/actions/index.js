"use strict";

import {
  INCREMENT_COUNT,
  AVAILABLE_FEATURES
} from './types';

// Async function
export function incrementCount(payload){
  return (dispatch) => {

    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        dispatch({type: INCREMENT_COUNT, payload: payload});
        resolve();
      }, 100);

    });
  };
}
