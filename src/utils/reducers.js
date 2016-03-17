import {List, Map, fromJS} from 'immutable';

function setHotel(state){
  return state.set('isLoading', true)
}

function showHotel(state, hotel){
  return state.set('isLoading', false)
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'REQUEST_HOTEL':
    return setHotel(state)
  case 'HOTEL_RECEIVED':
    return showHotel(state, action.hotel)
  }
  return state;
}