import React from 'react';
import ReactDOM from 'react-dom';


import GenericGrid from './example';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDOM.render(<GenericGrid />, root);
});
