import React from 'react'

export default props => (
    <div>
        <h2>Familia Santiago</h2>
        {React.cloneElement(props.children, props)}
    </div>
)