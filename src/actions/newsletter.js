import {
  SET_NEWSLETTERS,
  FETCH_NEWSLETTER_ID
} from './types';

import { ROOT_URL } from '../config';

import axios from 'axios';

export function fetchNewsletters() {
  
  return function(dispatch) {
    const token = window.localStorage.getItem('token');
    const headers = { headers: {
      authorization: token
    }};
    
    axios.get(`${ROOT_URL}/newsletters`, headers)
      .then(response => {
        dispatch({
            type: SET_NEWSLETTERS,
            payload: response.data
          });
      })
      .catch(err => console.log(err));
  };
}

export function fetchNewsletterWithId(id) {
  return {
    type: FETCH_NEWSLETTER_ID,
    payload: id
  };
}