import React from 'react';
import Track from './Track';
import './Tracklist.module.css';

 export default class Tracklist extends React.Component {
    render() {
      return (
      <div className="Tracklist">
        {this.props.tracks.map((track) => {
          return (
            <Track 
            track={track}
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  };
 };




