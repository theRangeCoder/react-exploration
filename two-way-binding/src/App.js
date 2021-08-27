import React, {Component} from 'react';
import './App.css';

class App extends Component {

	state = {
		name: "Shuva"
	}
	
	changeName = () => {
		this.setState({
			name: "Shuv"
		})
	}
	
	removeName = () => {
		this.setState({
			name: ""
		})
	}
	
	render() {
		return (
			<div className="App">
				<br/> 
				<br/>
				<button onClick={this.changeName}>Change name</button>
				<br/>
				<br/>
				<button onClick={this.removeName}>Remove name</button>
				<br/>
				<br/>
				<div>{this.state.name}</div>
			</div>
		);
	}
}

export default App;
