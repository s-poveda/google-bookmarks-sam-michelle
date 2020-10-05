import API_KEY from '../key.json'
const URL = 'https://www.googleapis.com/books/v1/volumes';

function fetchHandler (...args) {
	return fetch(...args)
	.then(res => {
		console.log(res);
		if (!res.ok) {
			console.log(res);
			return Promise.reject(res)
		}
		return res.json();
	}).then( data => data);
}

function getBooks(q, filters = null) {
	const { bookType, printType } = filters;
	let printTypeString = '';
	let bookTypeString = '';

	if (printType === 'all') {}
	else {
			printTypeString = `printType=${printType}&`
	}
	if (bookType === 'all') {}
	else {
		bookTypeString = `filter=${bookType}&`
	}

	const fullURL = `${URL}?q=${encodeURIComponent(q)}&${printTypeString + bookTypeString}key=${API_KEY.key}`;
	console.log(fullURL);
	return fetchHandler(fullURL);
}

export default {
	getBooks,
}
