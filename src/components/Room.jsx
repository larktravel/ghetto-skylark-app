import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
var PropTypes = React.PropTypes;
import '../stylesheets/style.scss'

export const Room = React.createClass({
  getRoom: function(){
    return this.props.room || [];
  },
  submitChanges: function(e, roomId){
    // this is triggering two function.  One that is on the handler thats calling the Room componenet
    // and the other is within the component itself
    this.props.onNameChange();
    var newValue = this.refs.room.value
    this.props.editRoom(roomId, newValue)
    this.setState({
      edit: !this.props.edit
    })
  },
  render: function(){
    const room = this.props.room.toJS();
    return (
      <div style={{borderStyle: 'solid', cursor:'pointer'}}>
        <h1> I am Room component </h1>
        {this.props.edit ?
          <div>
            <input
              className="my-input"
              type='text'
              ref="room"
              placeholder={room.name}
              defaultValue={room.name} />
            <button className="btn btn-submit my-submit" onClick={() => this.submitChanges(event, room.id)}>Submit Changes</button>
          </div> :
          <p>{room.name} = {room.published_price}</p>
        }
      </div>
    )
  }
})

Room.PropTypes= {
  edit: PropTypes.bool
}

//onClick={this.props.onRoomChoice}