import {
  CHANGE_SELECTED_REQUEST_TYPE
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequestType(boxType) {
  return (
    {
      type: CHANGE_SELECTED_REQUEST_TYPE,
      payload: boxType
    }
  );
}

export function createNewRequest(userID, formData, success) {
  const token = window.localStorage.getItem('token');
  console.log('userID: ', userID);
  console.log('formData: ', formData);
  return function() {
    axios.post(`${ROOT_URL}/requests/new`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: token
      }
    })
      .then(response => {
        console.log(response.data);
        // success();
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchRequests() {
  const token = window.localStorage.getItem('token');
  return () => {
    axios.get(`${ROOT_URL}/requests`, {
      headers: { authorization: token }
    })
    .then(response => {
      console.log(response.data);
      
    })
    .catch(err => console.log(err));
  };
}