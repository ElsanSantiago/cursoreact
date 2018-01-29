import React from 'react';
const ReactDOM = require('react-dom');
import Family from './family';
import Member from './member';

ReactDOM.render(
   <Family lastName='Santiago' >
        <Member name='Valdete' />
        <Member name='Ariosvaldo' />
        <Member name='Edson'  />
        <Member name='Elza Maria' />
        <Member name='Teresinha' />
        <Member name='Juraci'/>
        <Member name='Jurandir' />
        <Member name='Carlos Antonio' />
        <Member name='Edvaldo' />
        <Member name='Carlos Alberto' /> 
    </Family>,
 document.getElementById('app'))
