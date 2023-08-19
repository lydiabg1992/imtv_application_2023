
import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist'
import Spotify from './Spotify';
import PlaylistList from './PlaylistList';





class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist Name",
      playlistTracks: [],
      playlists: [], //array of objects to store each playlists id and name
    };
    this.addTrack = this.addTrack.bind(this);
    this.RemoveTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.getUserPlaylists = this.getUserPlaylists.bind(this);
  }

  componentDidMount() {
    this.getUserPlaylists();
  }

  getUserPlaylists() {
    Spotify.getUserPlaylists().then((playlists) => {
      this.setState({ playlists });
    });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(
      (currentTrack) => track.id !== currentTrack.id
    );
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    let trackUris = this.state.playlistTracks.map((track) => track.uri);
    if (trackUris && trackUris.length) {
      Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
        this.getUserPlaylists();
        this.setState({
          playlistName: "New Playlist Name",
          playlistTracks: [],
        });
      });
    } else {
      alert("Your playlist is empty! Add tracks now to create a bumpin' playlist.");
    }
  }

  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

render() {
return (
  <div id="App">
      
        <div className="App-container">
            <SearchBar onSearch={this.search} />
          <div className="TwoColumns">
            <div className="ColumnOne">
          <SearchResults 
          searchResults={this.state.searchResults} 
          onSearch={this.search}
          onAdd={this.addTrack} />
          </div>
          <div className="ColumnTwo">
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onNameChange={this.updatePlaylistName}
            onRemove={this.removeTrack}
            onSave={this.savePlaylist}
          />
          <PlaylistList 
          playlists={this.state.playlists}
          />
       
        </div>
      </div>
    </div>
  </div>
);
}
};

export default App;



/*
API CALL

curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=d58246cf6f224d91884fa4d060690d9e&client_secret=584282957af64bf9a9cf369765e99a7f"




https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m?si=JyIt9OnnSxSpD8UDXN07sw

     */





/*OLD CODE 

const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]
  );
  
*/