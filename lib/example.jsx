import React from 'react';
import {spiceWheel} from './components/spicewheel';

//Roll your own React Component for holding the SpiceRack
class GenericGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {imageNumber: 6,
                  modern: "checked",
                  classic: "",
                  imagesPerRow: 3};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){}

  handleSelectInput(e){
    e.prevent_default();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
      <div className="demo">
        <h2>SpiceWheel Demo</h2>
        <p>
          Welcome to the SpiceWheel demo, choose the number of images you
          want in your grid, your style and the number of images you want
          in your row.
        </p>

        <form onSubmit={this.handleSubmit} className="edit-spicerack-form">

          <p>Number of images</p>
          <select className="form-control"
            value={this.state.imageNumber}
            name="imageNumber"
            onChange={this.handleNumImages}>
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>

          <p>Style</p>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={this.state.modern}
                />
                Modern
            </label>
          </div>
          <div className="checkbox ">
            <label>
              <input
                type="checkbox"
                checked={this.state.classic}
                />
                Classic
            </label>
          </div>

          <p>Number of images</p>
          <select className="form-control"
            value={this.state.imagesPerRow}
            name="imagesPerRow"
            onChange={this.handleImagesPerRow}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>


          <button className="btn btn-primary">Spice up this Safari</button>
          <span></span>
        </form>
        {SpiceRack}
      </div>
    );
  }
}
export default GenericGrid;
