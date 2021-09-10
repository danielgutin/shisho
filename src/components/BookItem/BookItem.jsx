import React from 'react';
import PropTypes from 'prop-types';

import './BookItem.scss';
import cover_placeholder from 'assets/cover_placeholder.jpeg';


const BookItem = ({ 
  title,
  coverImg,
  description
}) => {
  return (
    <div className="book-item">
      <img src={coverImg ?? cover_placeholder } alt={title} className="book-cover" />
      <div className="book-content">
        <div title={title} className="book-title">{title}</div>
        <div title={description} className="book-description">{description}</div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  /** Book׳s cover images, defaults to cover_placeholder */
  coverImg: PropTypes.string,
  description: PropTypes.string
};

export default BookItem;
