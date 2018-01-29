import React from 'react';
const ReactDOM = require('react-dom');
import Primeiro, { Segundo } from './component';

ReactDOM.render(
   <div>
       <Primeiro />
       <Segundo /> 
    </div>,
 document.getElementById('app'))
