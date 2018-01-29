import React from 'react';
const ReactDOM = require('react-dom');
import ClassComponent from './classComponent' 

ReactDOM.render(
   <ClassComponent label='Contador'initialValue={10} />, 
   document.getElementById('app'))
 