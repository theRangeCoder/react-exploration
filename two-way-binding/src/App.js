import React, {Component} from 'react';
import './App.css';

class App extends Component {

	state = {
		name: "Shuva"
	}
	
	changeName() {
		this.setState({
			state = {
				name: "Shuv"
			}
		})
	}
	
	render() {
		return (
			<div className="App">
				<br/> 
				<br/>
				<button>Change state</button>
				<br/>
				<br/>
				<div>{this.state.name}</div>
			</div>
		);
	}
}

export default App;
