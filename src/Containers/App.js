import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';

class App extends Component {

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => console.log(users));
	}

	render() {
		return (
	    <div className="App">
	      <h1 className='tc'>Robofriends</h1>
	      <CardList />
	    </div>
	  );
	} 
}

export default App;
