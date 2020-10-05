import React from 'react';
import BookCard from '../BookCard/BookCard';

export default function BookDisplay (props) {

	const bookCards = props.books.map( book =>
		<BookCard key={book.id} book={book.volumeInfo}/>);
	return (
		<div>
			{bookCards}
		</div>
	);
}
