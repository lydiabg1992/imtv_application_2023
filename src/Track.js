import React from 'react';
import styles from './Track.module.css';


const Track = ({ title, artist, album }) => {
    return (
      <div className={styles.Track}>
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{album}</p>
      </div>
    );
  };


  export default Track;