import React from 'react';
import Tracklist from './Tracklist';
import './SearchResults.module.css';


export default class SearchResults extends React.Component {
  render() {
    return (
    <div className="SearchResults">
      <h2>Search Results</h2>
    <Tracklist 
    tracks={this.props.searchResults} 
    onAdd={this.props.onAdd}
    isRemoval={false}
     />
  
      </div>
    );
  }
};




