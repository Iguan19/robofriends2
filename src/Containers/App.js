import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ScrollComponent from '../Components/ScrollComponent';
import { setSearchField } from '../actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onInputChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: []
			//searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users });
			});
	}
	/**
	onInputChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	**/
	render() {
		const {/**searchfield,**/ robots} = this.state;
		const { searchField, onInputChange } = this.props;

		let filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return (
	    <div className="App tc">
	      <h1 className='tc'>Robofriends</h1>
	      <SearchBox onInputChange={onInputChange}/>
	      <ScrollComponent>
	      	<CardList robots={filteredRobots} />
	      </ScrollComponent>
	    </div>
	  );
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);