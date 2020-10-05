import React, { Component } from 'react';

export default class SearchForm extends Component {

	state: {
		q: null
	}

	onQueryChange (currentQuery) {
		this.setState({ q: currentQuery});
	}

	render() {
		return (
			<form onSubmit={(e) => {e.preventDefault(); this.props.onSearchSubmit(this.state.q)}}>
			<label htmlFor="search-term">Search Books</label>
			<input type="text" id="search-term" name="search-term" placeholder="Title of the book" onChange={(e) => this.onQueryChange(e.target.value)} required/>
			</form>
		)
	}
}
