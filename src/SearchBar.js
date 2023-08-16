import React from 'react';
import styles from './SearchBar.module.css';


function SearchBar () {
    return (
      <div className={styles.SearchBar}>
        <input type="text" placeholder="Search for Songs" />
        <button>Search</button>
      </div>
    );
  };


  export default SearchBar;