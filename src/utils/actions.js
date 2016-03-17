import 'whatwg-fetch'

const HOTEL_API = "http://api.skylark.com/v2/hotel_stays/0025697?check_in=2016-05-11&check_out=2016-05-16&passenger_count=2&room_count=1";

function getHotel(){
  return fetch(HOTEL_API)
}

function requestHotel() {
  console.log('requesting hotel')
  return {
    type: 'REQUEST_HOTEL'
  };
}


function receiveHotel(json) {
  console.log('payload, json', json)
  return {
    type: 'HOTEL_RECEIVED',
    state: json
  };
}

export function fetchHotel() {
  return dispatch => {
    dispatch(requestHotel())
    return fetch(HOTEL_API)
      .then(response => response.json())
      .then(json => dispatch(receiveHotel(json)))
  }
}