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
          <td>"http://giraffe.jpeg"</td>
          <td>"A nice giraffe"</td>
        </tr>
        <tr>
          <td>"http://elephant.jpeg"</td>
          <td>"A lovely elephant"</td>
        </tr>
      </table>;
    return(
      Spicewheel(SpiceRack, "modern", 3)
    );
  }
}
