import API_KEY from '../key.json'
const URL = 'https://www.googleapis.com/books/v1/volumes';

function fetchHandler (...args) {
	return fetch(...args)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.status)
		}
		return res.json();
	}).then( data => data);
}

function getBooks(q, filters = null) {
	// TODO: rework filter to work
	// filter = filters ?
	const fullURL = `${URL}?q=${encodeURIComponent(q)}&key=${API_KEY.key}`;
	return fetchHandler(fullURL)
}

export default {
	getBooks,
}
