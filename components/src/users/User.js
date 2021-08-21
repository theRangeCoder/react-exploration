// Functional component
import React from 'react';

const User = (props) => {
    return (
        // JSX
        <div>Name: {props.children} | Age: {props.age}</div>
    )
}

export default User;