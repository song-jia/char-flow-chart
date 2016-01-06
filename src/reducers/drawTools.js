import {Map} from 'immutable';

const initialState = Map({});

export default function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
}
