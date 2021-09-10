import React from 'react';
import loading_books from 'assets/loading_books.gif';
import './Loader.scss';

export default function Loader() {
  return (
    <div className='loader'>
      <img src={loading_books} alt="Searching for Books" />
      <p>Granny is searching for your book, she׳s pretty old, that might take a while...</p>
    </div>
  );
}
