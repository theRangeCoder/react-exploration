// Functional component (stateless components)
import React from 'react';

const User = (props) => {
    return (
        // JSX
        // To get the text content, we use: props.children
        <div>Name: {props.children} | Age: {props.age}</div>
    )
}

export default User;
