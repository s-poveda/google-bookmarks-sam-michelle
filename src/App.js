import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
  			<h1>Google Booksearch</h1>
      </header>
			<SearchForm />
    </div>
  );
}

export default App;
