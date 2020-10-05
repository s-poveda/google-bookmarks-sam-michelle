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
			<form>
				<input type="text" placeholder="Title of the book" onChange={(e) => this.onQueryChange(e.target.value)} required/>
			</form>
		)
	}
}
