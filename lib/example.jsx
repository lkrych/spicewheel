import React from 'react';
import { spiceWheel } from './components/spicewheel';
import { fetchJSON } from './util/example_util';

//Roll your own React Component for holding the SpiceRack
class GenericGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {imageNumber: 6,
                  style: "modern",
                  imagesPerRow: 3,
                  sampleJSON: [{ image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496085887/giraffe.jpg",
                                 label: "A majestic giraffe" } ,
                                {image: "http://res.cloudinary.com/heab4q3lg/image/upload/v1496122122/ostrich.jpg",
                                label: "A curious ostrich"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496122169/warthog.jpg",
                                label: "A hairy warthog"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496122168/lion.jpg",
                                label: "A royal lion"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496085888/hyena.jpg",
                                label: "A confident hyena"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496085949/elephant.jpg",
                                label: "An elegant elephant"}]
                              };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectInput = this.handleSelectInput.bind(this);
  }

  handleSubmit(e){
    e.prevent_default();
    this.setState({
      sampleJSON: fetchJSON(this.state)
    });
  }

  handleSelectInput(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name + " " + value);

    this.setState({
      [name]: value
    });
  }

  render(){
    const tableRows = this.state.sampleJSON.map(jsonObject => (
      <tr>
        <td>{jsonObject.image}</td>
        <td>{jsonObject.label}</td>
      </tr>)
    );
    const SpiceRack =
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>;
    //const spicy = spiceWheel(SpiceRack, "modern", 2);
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
            onChange={this.handleSelectInput}>
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>

          <p>Style</p>
          <select className="form-control"
            value={this.state.style}
            name="style"
            onChange={this.handleSelectInput}>
            <option value={"modern"}>Modern</option>
            <option value={"classic"}>Classic</option>

          </select>

          <p>Number of images</p>
          <select className="form-control"
            value={this.state.imagesPerRow}
            name="imagesPerRow"
            onChange={this.handleSelectInput}>
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
