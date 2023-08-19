
import React, { useCallback } from 'react';
import styles from './Playlist.module.css';
import Tracklist from './Tracklist';
import PlaylistItem from './PlaylistItem';

export default class Playlist extends React.Component {
constructor(props) {
  super(props);
  this.handleNameChange = this.handleNameChange.bind(this);
}
handleNameChange(event) {
  this.props.onNameChange(event.target.value);
}
  render() {
  return (
    <div className="Playlist">
     <input 
     value={this.props.playlistName}
     onChange={this.handleNameChange}
     />
     <Tracklist
     tracks={this.props.playlistTracks}
     onRemove={this.props.onRemove}
     isRemoval={true}
     />
     <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY
     </button>
    
 </div>
);
};
};