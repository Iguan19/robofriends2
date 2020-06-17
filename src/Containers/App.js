import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ScrollComponent from '../Components/ScrollComponent';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users });
			});
	}

	onInputChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const {searchField, robots} = this.state;

		let filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return (
	    <div className="App tc">
	      <h1 className='tc'>Robofriends</h1>
	      <SearchBox onInputChange={this.onInputChange}/>
	      <ScrollComponent>
	      	<CardList robots={filteredRobots} />
	      </ScrollComponent>
	    </div>
	  );
	} 
}

export default App;
