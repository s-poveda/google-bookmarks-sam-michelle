import React, { Component } from 'react';
import PrintType from '../FilterMenuPrintType/PrintType';
import BookType from '../FilterMenuBookType/BookType';

export default class FilterMenu extends Component {
	state = {
		bookType: null,
		printType: null
	}

	render() {
	return (
	<div>
		<BookType onBookTypeFilterChange={this.props.onBookTypeFilterChange}/>
		<PrintType onPrintTypeFilterChange={this.props.onPrintTypeFilterChange}/>
	</div>)

	}
}
