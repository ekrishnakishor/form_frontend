import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-bar"
    />
  );
};

export default SearchBar;