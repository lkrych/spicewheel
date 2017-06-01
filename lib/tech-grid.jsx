import React from 'react';
import { spiceWheel } from './components/spicewheel';
import { fetchLogos } from './util/example_util';

class TechGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {sampleJSON: []};
  }

  componentDidMount(){
    this.setState({
      sampleJSON: fetchLogos()
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
                                "basic",
                                4);
    return(
      <div>
        {SpiceWheel}
      </div>
    );
  }
}

export default TechGrid;
