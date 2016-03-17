import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {Room} from './Room';
import {Amenities} from './Amenities';
import {List} from 'immutable';
import '../stylesheets/style.scss';


export const Hotel = React.createClass({
  getInitialState: function(){
    return {
      edit: false
    }
  },
  handleRoomChoice: function(event, room, idx){
    this.props.chooseRoom(room,idx);
  },
  editRoom: function(room, idx){
    this.setState({
      edit: !this.state.edit
    })
  },
  handleSubmitChanges: function(){
    this.setState({
      edit: !this.state.edit
    })
  },
  render: function(){
    return(
      <div>
        <div className="col-xs-8">
          <h3 className='my-red'>I am the hotel component</h3>
          <pre>{this.props.hotelName}</pre>
          <p>{this.props.address}</p>
          {this.props.virtuosoAmenities ?
            <Amenities amenities={this.props.virtuosoAmenities} title="Virtuoso Amenities"></Amenities> :
            null
          }
          {this.props.skylarkAmenities ?
            <Amenities amenities={this.props.skylarkAmenities} title="Skylark Amenities"></Amenities> :
            null
          }
          {this.props.rooms ?
            this.props.rooms.map( (room, idx) =>
                <div key={idx}>
                  <Room
                    room={room}
                    {...this.props}
                    edit={this.state.edit}
                    onRoomChoice={() => this.handleRoomChoice(event, room, idx)}
                    onNameChange={this.handleSubmitChanges}/>
                  <button className="btn btn-primary my-btn" onClick={() => this.props.changePrice(room,idx)}>Change Room Name</button>
                  <button className="btn btn-danger my-btn" onClick={() => this.props.deleteHotel(room,idx)}>Delete Room</button>
                  <button className="btn btn-success my-btn" onClick={() => this.editRoom(room, idx)}>Edit Room Info</button>
                </div>
            ) :
            null
          }
          <br />
          <br />
          <img src={this.props.heroImage} />
        </div>
        <div className="col-xs-4">
          <h2>CHOSEN ROOM</h2>
          <h4>{this.props.chosenHotel}</h4>
          <h4>{this.props.chosenPrice}</h4>
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  console.log('MAPSTATETOPROPS', state.httpReducer.toJS())
  return {
    checkIn: state.reducer.get('check_in_at'),
    checkOut: state.reducer.get('check_out_at'),
    hotelName: `${state.reducer.getIn(['hotel', 'name'])} - ${state.reducer.getIn(['hotel', 'subtitle'])}`,
    heroImage: state.reducer.getIn(['hotel', 'hero_image']),
    address: `${state.reducer.getIn(['hotel', 'address'])},
              ${state.reducer.getIn(['hotel', 'city'])},
              ${state.reducer.getIn(['hotel', 'country_code'])}`,
    virtuosoAmenities: state.reducer.getIn(['hotel', 'virtuoso_amenities']),
    skylarkAmenities: state.reducer.getIn(['hotel', 'skylark_amenities']),
    rooms: List(state.reducer.get('rooms')),
    chosenHotel: state.reducer.get('chosenHotel'),
    chosenPrice: state.reducer.get('chosenPrice')
  };

}


connect(mapStateToProps)(Hotel)

export const HotelContainer = connect(
  mapStateToProps,
  actionCreators
)(Hotel)

/*
{() => this.props.changePrice(room)} - doesn't invoke function right away
{this.props.changePrice(room)} - invokes function right away
*/

/* For Later
<button onClick={this.props.changeDate}>Get Check In</button>
<button onClick={this.props.changeDate}>Get check Out</button>
*/

/*
- can't put onClick events on Child Components
  - instead you need to pass in a handler
- you communicate between component with event handlers
*/