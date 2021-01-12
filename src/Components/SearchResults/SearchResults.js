import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Resultados</h2>
                <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;