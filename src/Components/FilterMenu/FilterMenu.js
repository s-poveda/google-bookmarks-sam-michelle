import React, { Component } from 'react';
import PrintType from '../FilterMenuPrintType/PrintType';
import BookType from '../FilterMenuBookType/BookType';

export default class FilterMenu extends Component {
	render() {
	return (
	<div>  
	<BookType/> <PrintType/>
	</div>)
		
	}
}
