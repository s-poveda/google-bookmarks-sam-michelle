import React, { Component } from 'react';
import './App.css';
import api from './api/api';
import SearchForm from './Components/SearchForm/SearchForm';
import BookDisplay from './Components/BookDisplay/BookDisplay';
import FilterMenu from './Components/FilterMenu/FilterMenu';

class App extends Component {
	state = {
		q: '',
		filters: {
			bookType: 'all',
			printType: 'all'
		},
		books: []
	}

	onPrintTypeFilterChange = (val) => {
		const state = Object.assign({}, this.state);
		state.filters.printType = val;
		this.setState(state);
		api.getBooks(this.state.q, this.state.filters).then(res => {
			this.setState({books: res.items});
		});
	}

		onBookTypeFilterChange = (val) => {
		console.log('value book',val);
		const state = Object.assign({}, this.state);
		state.filters.bookType = val;
		this.setState(state);
		api.getBooks(this.state.q, this.state.filters).then(res => {
			this.setState({books: res.items});
		});
	}

	submitSearch = (value) => {
		api.getBooks(value, this.state.filters).then(res => {
			this.setState({books: res.items, q: value});
		});
	}

	updateQ = (val) => {
		this.setState({ q: val })
	}

  render () {
			return (
    	<div className="App">
      	<header className="App-header">
  				<h1>Google Booksearch</h1>
      	</header>
				<SearchForm onSearchSubmit={this.submitSearch} updateQ={this.updateQ}/>
				<FilterMenu onPrintTypeFilterChange={this.onPrintTypeFilterChange} onBookTypeFilterChange={this.onBookTypeFilterChange} />
				<BookDisplay books={this.state.books}/>
    	</div>
  	);
	}
}

export default App;
