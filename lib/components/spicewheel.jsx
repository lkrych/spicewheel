import React from 'react';
import SpiceWheelDetail from './spicewheel_detail';
import {fetchCSS} from '../util/spice_wheel_styles';
import "../styles/spicesheet.scss";

const deconstruct = (table) => {
  const headers = table.props.children[0].props.children.props.children.map(tr => tr.props.children.toLowerCase());
  const rows = table.props.children[1].props.children.map(tr => tr.props.children);
  const rowInfo = rows.map(row => row.map(td => td.props.children));
  const SpiceRackArray = rowInfo.map(row => {
    return {
      [headers[0]]: row[0],
      [headers[1]]: row[1]
    };
  });

  return SpiceRackArray;

};

const construct = (list, cssStyle, rows) => {
  const style = fetchCSS(cssStyle, rows);
  const SpiceRows = list.map((spicerow,idx) => {
    return <SpiceWheelDetail
      style={style.detail}
      row={style.row}
      SpiceRow={spicerow}
      key={idx}/>;
  });

 const SpiceWheel =
  <div className="container">
    <ul className={ `${cssStyle}`+ " " + style.detail.ul }>
      {SpiceRows}
    </ul>
  </div>;

return SpiceWheel;
};

export const spiceWheel = (table, style, rows) => {
  const list = deconstruct(table);
  return construct(list, style, rows);
};
