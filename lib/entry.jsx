import React from 'react';
import ReactDOM from 'react-dom';
require("./styles/spicesheet.scss"); 

import GenericGrid from './example';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDOM.render(<GenericGrid />, root);
});
