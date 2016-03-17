export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function changeDate() {
  return {
    type: 'CHANGE_DATE'
  };
}

export function changePrice(room, idx) {
  return {
    type: 'CHANGE_PRICE',
    room: room,
    idx: idx
  };
}

export function chooseRoom(room, idx){
  return {
    type: 'CHOOSE_ROOM',
    room: room,
    idx: idx
  }
}

export function deleteHotel(room, idx){
  return {
    type: 'DELETE_ROOM',
    room: room,
    idx: idx
  }
}

export function editRoom(roomId, roomName){
  return {
    type: 'EDIT_ROOM',
    roomId: roomId,
    roomName: roomName
  }
}
