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
                  formSubmitted: false,
                  sampleJSON: [{image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496085888/hyena.jpg",
                                label: "A confident hyena"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496122169/warthog.jpg",
                                label: "A hairy warthog"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496122168/lion.jpg",
                                label: "A royal lion"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496085949/elephant.jpg",
                                label: "An elegant elephant"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496191630/bluewildebeest_nzdedf.jpg",
                                label: "A lachrymose wildebeest"},
                                {image: "https://res.cloudinary.com/heab4q3lg/image/upload/v1496191625/mandrill_tcuqme.jpg",
                                label: "An impetuous mandrill"}]
                              };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectInput = this.handleSelectInput.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    $('.spice-function').toggleClass('spice-function-submit');
    $('.spice-function').toggleClass('spicerack-submit');
    setTimeout(this.setState({formSubmitted: true}),
      2000);
  }

  handleSelectInput(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.name === "imageNumber"){
      this.setState({
        [name]: value,
        sampleJSON: fetchJSON(parseInt(value))
      });
    } else {
      $('.spice-function').toggleClass('spice-function-active');
      this.setState({
        [name]: value
      });
    }
  }

  resetForm(e){
    e.preventDefault();
    this.setState({
      formSubmitted: false
    });
  }

  render(){
    const tableRows = this.state.sampleJSON.map((jsonObject,idx) => (
      <tr key={idx}>
        <td>{jsonObject.image}</td>
        <td>{jsonObject.label}</td>
      </tr>)
    );
    const SpiceRack =
    <table className="spicerack">
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
    let SpiceWheel = spiceWheel(SpiceRack,
                                this.state.style,
                                this.state.imagesPerRow);
    if (this.state.formSubmitted){
      return (
        <div className="new-spicewheel">
          <div className="new-spicewheel-text">
            <h2>Your new SpiceWheel</h2>
            <p>rendered with the {this.state.style} template!</p>
            <a onClick={this.resetForm}><p>Create another SpiceWheel</p></a>
          </div>
          {SpiceWheel}

        </div>
      );
    } else {
      return(
        <div className="demo">
          <div className="demo-text">
            <h2>SpiceWheel Demo</h2>
            <p>
              Welcome to the SpiceWheel demo, choose the number of images you
              want in your grid, your style and the number of images you want
              per row.
            </p>

            <form onSubmit={this.handleSubmit} className="edit-spicerack-form">

              <p>Total number of images in grid</p>
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
                <option value={"minimalist"}>Minimalist</option>
                <option value={"basic"}>Basic</option>

              </select>

              <p>Number of images per row</p>
              <select className="form-control"
                value={this.state.imagesPerRow}
                name="imagesPerRow"
                onChange={this.handleSelectInput}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <br></br>

              <button className="spice-button">Spice up this table</button>
              <span></span>
            </form>
          </div>
          <div className="demo-table-and-function">
            <h3 className="spice-function-title">SpiceWheel function visualizer </h3>
            <p>This is the code you need to put in your React component!</p>
            <p className="spice-function">
              {`spiceWheel(SpiceRack,
                "${this.state.style}",
                ${this.state.imagesPerRow})`}
            </p>
            <span className="spice-function-separator"> </span>
            <h3>SpiceRack aka HTML table </h3>
            {SpiceRack}
          </div>
        </div>
      );
    }
  }
}
export default GenericGrid;
