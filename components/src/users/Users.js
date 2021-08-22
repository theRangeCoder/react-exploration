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
		
	makeMeYounger = () => {
		const newState = this.state.users.map((user) => {
			const tempUser = user;
			tempUser.age -= 10;
			return tempUser;
		})
		
		
	}
	
    render() {
        return (<div>
        <button onClick={this.makeMeYounger}>Make us 10 years younger</button> <br/>
        {this.state.title}
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        </div>)
    }
}

// Exporting the class component
export default Users;
