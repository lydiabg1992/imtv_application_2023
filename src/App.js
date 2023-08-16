
import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults.js';
import Playlist from './Playlist.js';
import Track from './Track';
import Header from './Header';
import './script.js';

const App = () => {
 
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
        <div className="App-container">
          <Header />
          <div className="SearchBarDiv">
            <SearchBar />
            </div>
            <div className="TwoColumns">
            <div className="ColumnOne"><SearchResults /></div>
            <div className="ColumnTwo"><Playlist /></div>
            </div>
            
        </div>
    </div>
  );



  
  



  const fetchSearchResults = async () => {
    const accessToken = '';
    const searchQuery = '';
    const searchUrl = ''; 

    try {
      const response = await fetch(searchUrl, {
        
        method:'GET',
        headers: {
          Authorization: `Bearer <Access Token>`,
        },
      });

      if (response.ok) {
        const data = await response.json(); 
        const tracks = data.tracks.items;

        setSearchResults(tracks);
          } else {
            console.error('API call failed');
          }
    } catch(error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchSearchResults}>Fetch Results</button>
      {searchResults.map(track => (
        <Track 
        key={track.id}
        title={track.title}
        artist={track.artist}
        album={track.album}
        />

      ))}
    </div>
  );
};

export default App;

