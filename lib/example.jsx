import React from 'react';
import { Spicewheel } from 'spicewheel';

class genericGrid extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const SpiceRack =
      <table>
        <tr>
          <th>Image</th>
          <th>Label</th>
        </tr>
        <tr>
          <td>{this.props.image_urls}</td>
          <td>{this.props.image_labels}</td>
        </tr>
      </table>;
    return(
      Spicewheel(SpiceRack, "modern", 3)
    );
  }
}
