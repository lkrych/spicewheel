import React from 'react';
import {spiceWheel} from './components/spicewheel';

//Roll your own React Component for holding the SpiceRack
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
          <td>{"http://res.cloudinary.com/heab4q3lg/image/upload/v1496122122/ostrich.jpg"}</td>
          <td>{"a gross ostrich"}</td>
        </tr>
        <tr>
          <td>{"https://res.cloudinary.com/heab4q3lg/image/upload/v1496122169/warthog.jpg"}</td>
          <td>{"a hairy warthog"}</td>
        </tr>
        <tr>
          <td>{"https://res.cloudinary.com/heab4q3lg/image/upload/v1496122168/lion.jpg"}</td>
          <td>{"a glorious lion"}</td>
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
      <div>
        <h2>SpiceWheel Demo</h2>
        <p>Welcome to the SpiceWheel demo, choose the number of images you
           want in your grid, your style and the number of images you want
            in your row.</p>
          {SpiceRack}
      </div>
    );
  }
}
export default GenericGrid;
