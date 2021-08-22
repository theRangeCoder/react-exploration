// Class-based component
import React, {Component} from 'react';
import User from './User'

class Users extends Component {

	state = {
		users: [
			{
				name: "John",
				age: 26
			},
			{
				name: "James",
				age: 24
			}
		],
		title: "Users list"
	};
			
	
    render() {
        return (<div>
        {this.state.title}
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        </div>)
    }
}

// Exporting the class component
export default Users;
