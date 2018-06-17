import React, {Component} from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state={
				robots: [],
				searchfield:''
			}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
		
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})

	}
	render(){
		const {robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		} )
	return !robots.length ?
	<h1>LOADING</h1>:
	(
<div className= 'tc'>
	<h1 className = 'f1'>Robo Friends</h1>
	<SearchBox searchCheange={this.onSearchChange} />
	<Scroll>
		<CardArray robots={filteredRobots} />
		</Scroll>
		</div>
		);
}
}
export default App;