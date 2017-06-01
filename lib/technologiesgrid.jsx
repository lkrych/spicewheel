import React from 'react';
import { spiceWheel } from './components/spicewheel';
import { fetchLogos } from './util/example_util';

class techGrid extends React.Component {
  render(){
    const tableRows = fetchLogos.map((jsonObject,idx) => (
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
                                2);
    return(SpiceWheel);
  }
}

export default techGrid;
