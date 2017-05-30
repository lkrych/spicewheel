import React from 'react';

class SpiceWheelDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.cssStyle === "modern"){
      return (
        <li className={this.props.style.detail.li}
            data-overlay-text={this.props.SpiceRow.label}>
          <img
            src={this.props.SpiceRow.image}
            className={this.props.style.detail.img + " " + this.props.row}
            />

        </li>
      );
    } else

    return(
      <li className={this.props.style.detail.li}>
        <img
          src={this.props.SpiceRow.image}
          className={this.props.style.detail.img + " " + this.props.row}/>
        <p
          className={this.props.style.detail.p}>
          {this.props.SpiceRow.label}</p>

      </li>
    );
  }
}


export default SpiceWheelDetail;
