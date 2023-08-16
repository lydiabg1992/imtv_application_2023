
import React from 'react';
import Tracklist from './Tracklist';
import styles from './Playlist.module.css';

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <h2>My Playlist</h2>
      <Tracklist />
      <button className={styles.SaveButton}>Save Playlist</button>
    </div>
  )
    
  };



  export default Playlist;

