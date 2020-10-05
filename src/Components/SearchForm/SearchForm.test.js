import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';

describe('Search form test', () => {
	it('search form renders without error', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SearchForm />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
