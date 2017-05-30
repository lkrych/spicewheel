import React from 'react';

class SpiceWheelDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className={this.props.style.li}>
        <div className={this.props.style.row}>
          <img
            src={this.props.SpiceRow.image}
            className={this.props.style.img}
            data-overlay-text={this.props.style.data}>
          </img>
          <p
            className={this.props.style.p}>
            {this.props.SpiceRow.label}</p>
        </div>
      </li>
    );
  }
}


export default SpiceWheelDetail;
