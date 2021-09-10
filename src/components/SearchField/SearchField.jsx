import React from 'react';
import PropTypes from 'prop-types';

import './SearchField.scss';

const SearchField = ({
  value,
  onChange,
  placeholder = ''
}) => {
  return (
    <div className="search-field-container">
      <input 
        className="search-field-input" 
        name="searh-field" 
        type="text" 
        placeholder=" " 
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
      <label 
        className="search-field-placeholder" 
        htmlFor="searh-field">
        {placeholder}
      </label>
    </div>

  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchField;
