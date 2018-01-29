import React from 'react'

"use strict";
function childrenWithProps(children, props) {
    return  React.Children.map(props.children,
             child => React.cloneElement(child, {...props})) 
}

export { childrenWithProps }
