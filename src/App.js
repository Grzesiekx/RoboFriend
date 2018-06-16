import React, {Component} from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import {robots} from'./robots';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state={
				robots: robots,
				searchfield:''
			}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})

	}
	render(){
		const filteredRobots = this.state.robots.filter(robots => {
		//this.setState({searchfield: event.target.value})
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		} )
	return(
<div className= 'tc'>
	<h1 className = 'f1'>Robo Friendsss</h1>
	<SearchBox searchCheange={this.onSearchChange} />
		<CardArray robots={filteredRobots} />
		</div>
		);
}
}
export default App;