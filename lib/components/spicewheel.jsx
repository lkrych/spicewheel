import React from 'react';

const SpiceRack =
  <table>
    <tr>
      <th>Image</th>
      <th>Label</th>
    </tr>
    <tr>
      <td>"giraffe.jpg"</td>
      <td>{"a majestic giraffe"}</td>
    </tr>
  </table>;

const deconstruct = (table) => {
  const headers = new RegExp(/<th>.+<\/th>/);
  const rows = new RegExp(/<td>.+<\/td>/);
};


const construct = (list, style, rows) => {

};

export const spiceWheel = (table, style, rows) => {
  const list = deconstruct(table);
  return construct(list, style, rows);
};
