import React, { useState, useEffect } from "react";
import './App.scss';
import shisho_logo from './assets/shisho.png';

// --- utils 
import { parseBookListForDisplay } from "utils/books.util";
// --- components
import BookList from 'components/BookList';
import SearchField from 'components/SearchField';
import Loader from "components/Loader";

export default function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch books only when query is provided
    if (query) {
      setLoading(true);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then((data) => {
          // validate books were found for search query
          if (data?.items?.length) {
            const booksForDisplay = parseBookListForDisplay(data.items);
            setBooks(booksForDisplay);
          }
        })
        // in any case, success / failure, stop the loader
        .finally(() => setLoading(false));
    // in case of empty query reset the list of books
    // this condition is met on first render & when search query is cleared 
    } else {
      setBooks([]);
    }
  }, [query]);

  return <>
    <header className='shisho-header'>
      <img className='shisho-header-logo' src={shisho_logo} alt="Shisho Application" />
      <p className='shisho-header-subhead'>
        Let Granny find books for you, tell me what book exactly you are looking for 
      </p>
      <SearchField 
        value={query}
        onChange={setQuery}
        placeholder="Search for a book"
      />
    </header>
    <main className='shisho-main'>
      {
        loading 
          ? <Loader />
          : <BookList books={books} />
      }
    </main>
  </>;
}
