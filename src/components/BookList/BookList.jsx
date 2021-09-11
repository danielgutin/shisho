import React from 'react';
import PropTypes from 'prop-types';
import './BookList.scss';
import empty_box from 'assets/empty_box.png';
// --- components
import BookItem from 'components/BookItem';

const BookList = ({ 
  books = [] 
}) => {
  return (
    <div className={`booklist ${ !books?.length ? 'booklist-empty' : ''}` }>
      {/* When book list is populated, show list of BookItems */}
      {
        !!books?.length && books.map(({ 
          title,
          coverImg,
          description 
        }, index) => 
          <BookItem 
            key={`${title}-${index}`} 
            title={title} 
            coverImg={coverImg} 
            description={description} 
          />)
      }
      {/* When book list is empty show empty box with guiding text */}
      { 
        !books?.length && 
        <div className='booklist-empty-container'>
          <img src={empty_box} alt="Empty box" />
          <p className='book-list-empty-desc'>
            Start typing in order to fill the book׳s box
          </p>        
        </div>
      }
    </div>
  );
};

BookList.propTypes = {
  /** List of books for display */
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string,
    description: PropTypes.string.isRequired
  }))
};

export default BookList;
