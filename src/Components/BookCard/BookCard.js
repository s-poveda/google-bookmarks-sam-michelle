import React from 'react';

export default function BookCard (props) {

	const { title, authors, description, imageLinks } = props.book;

	return (
		<div>
			<img src={imageLinks.thumbnail} alt={`${title} thumbnail`} />
			<h2>{title}</h2>
			<h3>{authors.join(', ')}</h3>
			<p>{description}</p>
		</div>
	)
}
