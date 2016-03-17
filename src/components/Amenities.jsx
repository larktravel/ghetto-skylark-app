import React from 'react';
import '../stylesheets/style.scss';

export const Amenities = React.createClass({
  render: function(){
    return (
      <div className='my-div'>
        <b><p>{this.props.title}</p></b>
        <ul>
          { this.props.amenities.map( (amen, idx) =>
            <li key={idx}>{amen}</li>
          ) }
        </ul>
      </div>
    )
  }
})