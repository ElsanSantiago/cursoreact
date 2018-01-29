import React from 'react';
const ReactDOM = require('react-dom');
import Family from './family';
import Member from './member';

ReactDOM.render(
   <Family>
       <Member name='Elza Maria' lastName='Santiago' />
    </Family>,
 document.getElementById('app'))
