import axios from './axios';

import { ROOT_URL } from '../config';

export function signUp(fields, success) {
  console.log(fields);
  return function(dipatch) {
    axios.post(`${ROOT_URL}/signUp`, fields) // may have to change
    .then(response => {
      // do something with data
    })
    .catch(err => {
      if(err) {
        console.log(err);
      }
    });
  };
}