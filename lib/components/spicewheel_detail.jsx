import React from 'react';

class SpiceWheelDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.SpiceRow);
    return(
      <li>
        <img src={this.props.SpiceRow.image}>
        </img>
        <p>{this.props.SpiceRow.label}</p>
      </li>
    );
  }
}


export default SpiceWheelDetail;
