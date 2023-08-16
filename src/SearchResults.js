import React from 'react';
import Tracklist from './Tracklist';
import styles from './SearchResults.module.css';



function SearchResults () {
    return (
      <div className={styles.SearchResults}>
        <h2>Search Results</h2>
        <Tracklist />
      </div>
    )
  };


  export default SearchResults;