import {
  CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INITIAL_STATE = {
  requests: [],
  selectedRequests: 'pending'
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_SELECTED_REQUEST_TYPE:
      const selectedRequests = action.payload;
      return {
        ...state,
        selectedRequests
      };

    default: return state;
  }
}