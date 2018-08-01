import axios from 'axios';

import { ROOT_URL } from '../config';

import {
  AUTHENTICATE_USER
} from './types';

export function signUp(fields, success) {
  // let newFields = {
  //   ...fields,
  //   admin: true
  // };
  
  // console.log(newFields);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, fields) // may have to change
    .then(response => {
      const { token } = response.data;
      setToken(token);
      
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

export function signIn(fields, success) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, fields)
      .then(response => {
        const { token } = response.data;
        setToken(token);
        
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

function setToken(token) {
  window.localStorage.setItem('token', token); // can omit window, but kept for specificity
}