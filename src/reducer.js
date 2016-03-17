import {List, Map, fromJS} from 'immutable';

function setState(state, newState){
  console.log('setting state beech', state.toJS())
  const mergedState = state.merge(newState).set('isLoading', false);
  return mergedState;
}

function changeDate(state){
  return state.set('check_in_at', 'HOOOOOLIHAN')
}

function changePrice(state, room, idx){
  // update room
  var k = room.update('name', name => name="WOW I CHANGED")
  // update rooms[]
  var roomz = state.get('rooms').update(idx, roomState => roomState.merge(k))
  // update state
  return state.set('rooms', roomz)
}

function chooseRoom(state, room, idx){
  var newState = state.set('chosenHotel', room.get('name')).set('chosenPrice', room.get('published_price'))
  return newState;
}

function deleteRoom(state, chosenRoom, idx){
  let hi = state.get('rooms').filter(function(room){
    return chosenRoom.get('id') !== room.get('id')
  })
  return state.set('rooms', hi);
}

function editRoom(state, roomId, roomName){
  let hi = state.get('rooms').map(function(room){
    if (roomId === room.get('id')){
      return room.set('name', roomName)
    } else  {
      return room
    }
  })
  return state.set('rooms', hi);
}
function requestHotel(state){
  console.log('HOTEL HAS BEEN REQUESTED')
  return state;
}

export default function(state = Map(), action) {
  console.log('intial reducer', state)
  switch (action.type) {
  case 'HOTEL_RECEIVED':
    return setState(state, action.state);
  case 'REQUEST_HOTEL':
    return requestHotel(state)
  case 'CHANGE_DATE':
    return changeDate(state)
  case 'CHANGE_PRICE':
    return changePrice(state, action.room, action.idx)
  case 'CHOOSE_ROOM':
    return  chooseRoom(state, action.room, action.idx)
  case 'DELETE_ROOM':
    return deleteRoom(state, action.room, action.idx)
  case 'EDIT_ROOM':
    return editRoom(state, action.roomId, action.roomName)
  }
  return state;
}