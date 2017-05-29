import React from 'react';
import { Spicewheel } from 'spicewheel';

class GenericGrid extends React.Component {
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
        <td>"giraffe.jpg"</td>
        <td>{"a majestic giraffe"}</td>
      </tr>
      <tr>
        <td>"hyena.jpg"</td>
        <td>{"a mischevious hyena"}</td>
      </tr>
      <tr>
        <td>"elephant.jpg"</td>
        <td>{"an elegant elephant"}</td>
      </tr>
    </table>;
    return(
      SpiceRack
    );
  }
}
export default GenericGrid;
