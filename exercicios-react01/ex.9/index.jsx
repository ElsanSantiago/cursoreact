import React from 'react';
const ReactDOM = require('react-dom');
import Family from './family';
import Member from './member';

ReactDOM.render(
   <Family lastName='Santiago' >
       <Member name='Elza Maria' />
    </Family>,
 document.getElementById('app'))
