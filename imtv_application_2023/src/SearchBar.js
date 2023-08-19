import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends React.Domponent {
constructor(props) {
  super(props);
  this.state = {
    term: ""
  };
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input 
        placeholder="Search for a Song, Album or Artist"
        onChange={this.handleTermChange}
      />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
  </div>
    );
  }
}




