import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class ResultPlaylist extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results Playlist</h2>
                <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default ResultPlaylist;