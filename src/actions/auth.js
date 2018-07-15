import axios from 'axios';

import { ROOT_URL } from '../config';

import {
  AUTHENTICATE_USER
} from './types';

export function signUp(fields, success) {
  //console.log(fields);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signUp`, fields) // may have to change
    .then(response => {
      const { token } = response.data;
      window.localStorage.setItem('token', token); // can omit window, but kept for specificity
      
      dispatch({
        type: AUTHENTICATE_USER,
        payload: response.data
      });
      success();
    })
    .catch(err => {
      if(err) {
        console.log(err);
      }
    });
  };
}