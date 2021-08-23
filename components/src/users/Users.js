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
			// To prevent ages from becoming negative
			if (tempUser.age <= 0) {
				tempUser.age += 10;
			}
			return tempUser;
		});
		
		this.setState({
			newState
		});
	}
	
    render() {
        return (<div>
        <button onClick={this.makeMeYounger}>Make us 10 years younger</button> <br/>
        <h1>{this.state.title}</h1>
        {
        	this.state.users.map((user) => {
        		return <User age={user.age}>{user.name}</User>
        	})
        }
        </div>)
    }
}

// Exporting the class component
export default Users;
