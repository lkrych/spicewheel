import React from 'react';
import ReactDOM from 'react-dom';

import TechGrid from './tech-grid';
import GenericGrid from './example';

document.addEventListener('DOMContentLoaded', () => {
  const techgrid = document.getElementById('spicewheel-example');
  const root = document.getElementById('main');
  ReactDOM.render(<TechGrid />, techgrid);
  ReactDOM.render(<GenericGrid />, root);

});
