import 'whatwg-fetch'

const HOTEL_API = "http://api.skylark.com/v2/hotel_stays/0025697?check_in=2016-05-11&check_out=2016-05-16&passenger_count=2&room_count=1";

export function getHotel(){
  return fetch(HOTEL_API)
  // .then(function(response) {
  //   console.log('am i getting a response?', response)
  //   return response.json()
  // }).then(function(json) {
  //   console.log('parsed json', json)
  // }).catch(function(ex) {
  //   console.log('parsing failed', ex)
  // })
}