import React from 'react';
import PlaylistItem from './PlaylistItem';
import './PlaylistList.module.css';

export default class PlaylistList extends React.Component {
    render() {
        return (
            <div className="PlaylistList">
                <h2>Your Playlist</h2>
                <>
                {this.props.playlists && this.props.playlists.map((playlist) => {
                    return (
                        <PlaylistItem
                        name={playlist.playlistName}
                        key={playlist.playlistId}
                        />
                    );
                    })}
                    </>
                    </div>
        );
    }
}
        