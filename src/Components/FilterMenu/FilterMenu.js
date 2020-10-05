import React from 'react';
import ReactDOM from 'react-dom';
import FilterMenu from './FilterMenu';

describe('Filter menu tests', () => {
	it('smoke test: renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FilterMenu />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
