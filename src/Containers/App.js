import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ScrollComponent from '../Components/ScrollComponent';
import { setSearchField, requestRobots } from '../actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onInputChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots()
	}
	
	render() {
		const { searchField, onInputChange, robots, isPending } = this.props;

		let filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return isPending ?
			<h1> Loading </h1> :
		(
	    <div className="App tc">
	      <h1 className='f1 tc'>ROBOFRIENDS</h1>
	      <SearchBox onInputChange={onInputChange}/>
	      <ScrollComponent>
	      	<CardList robots={filteredRobots} />
	      </ScrollComponent>
	    </div>
	  );
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);