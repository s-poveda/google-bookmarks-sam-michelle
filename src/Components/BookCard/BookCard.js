import React from 'react';

export default function BookCard (props) {

	const { title, authors, description, imageLinks } = props.book;
	console.log(props.book);
	return (
		<div>
			<img src={imageLinks.thumbnail} alt={`${title} thumbnail`} />
			<h2>{title}</h2>
			<h3>{authors? authors.join(', '): 'No author found'}</h3>
			<p>{description}</p>
		</div>
	)
}
