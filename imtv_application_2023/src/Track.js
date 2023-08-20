import React from 'react';
import styles from './Track.module.css';



class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onclick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  addTrack(props) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(props) {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist}</p>
        <p>{this.props.track.album}</p>
        <p>{this.props.track.uri}</p>
      </div>
      {this.renderAction()}
      </div>
    );
    
  }
}



export default Track;


/* OLD CODE JUSTINCASE
const Track = (props) => {
const { track, onAdd, onRemove, isRemoval } = props;

  const addTrack = useCallback( () => {
    onAdd(track); 
  },
    [onAdd, track]
  );

  const removeTrack = useCallback(() => {
    onRemove(track);
    }, 
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
        -
        </button>
      );
    }
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
  };

  */