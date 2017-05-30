import React from 'react';

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
          <td>"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085887/giraffe.jpg"</td>
          <td>{"a majestic giraffe"}</td>
        </tr>
        <tr>
          <td>"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085888/hyena.jpg"</td>
          <td>{"a mischevious hyena"}</td>
        </tr>
        <tr>
          <td>"https://res.cloudinary.com/heab4q3lg/image/upload/v1496085949/elephant.jpg"</td>
          <td>{"an elegant elephant"}</td>
        </tr>
      </tbody>
    </table>;
    const headers = SpiceRack.props.children[0].props.children.props.children.map(tr => tr.props.children);
    const rows = SpiceRack.props.children[1].props.children.map(tr => tr.props.children);
    const rowInfo = rows.map(row => row.map(td => td.props.children));
    const SpiceRackObject = rowInfo.map(row => {
      return {
        [headers[0]]: row[0].replace(/""/,/"/),
        [headers[1]]: row[1]
      };
    });
    debugger;
    const SpiceWheel =
      <ul>
        <li>
          <img src={SpiceRackObject.Image}>
          </img>
          <p>{SpiceRackObject.Label}</p>
        </li>
      </ul>;

    return(
      SpiceRack
    );
  }
}
export default GenericGrid;
