import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h2>Familia Santiago</h2>
        {childrenWithProps(props.children, props)}
    </div>
)