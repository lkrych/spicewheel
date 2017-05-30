import React from 'react';
import {spiceWheel} from './components/spicewheel';
class GenericGrid extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const SpiceRack =
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085887/giraffe.jpg"}</td>
          <td>{"a majestic giraffe"}</td>
        </tr>
        <tr>
          <td>{"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085888/hyena.jpg"}</td>
          <td>{"a mischevious hyena"}</td>
        </tr>
        <tr>
          <td>{"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085949/elephant.jpg"}</td>
          <td>{"an elegant elephant"}</td>
        </tr>
      </tbody>
    </table>;

    const spicy = spiceWheel(SpiceRack, "modern", 3);
    return(
      spicy
    );
  }
}
export default GenericGrid;
