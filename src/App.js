import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm/SearchForm'

class App extends Component {
	state = {
		filter: null,
		books: []
	}

  render () {
			return (
    	<div className="App">
      	<header className="App-header">
  				<h1>Google Booksearch</h1>
      	</header>
				<SearchForm />
    	</div>
  	);
	}
}

export default App;
