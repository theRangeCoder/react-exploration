// Class-based component
import React, {Component} from 'react';
import User from './User'

class Users extends Component {
    render() {
        return (<div>
        <User>John</User>
        <User age="24">James</User>
        </div>)
    }
}

// Exporting the class component
export default Users;