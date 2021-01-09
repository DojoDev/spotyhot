import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import ListPlaylist from '../ListPlaylist/ListPlaylist';

import Spotify from '../../util/Spotify';


class App extends React.Component {

  constructor(props) {
      super(props);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.listPlaylist = this.listPlaylist.bind(this);
      this.search = this.search.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.updateTemp = this.updateTemp.bind(this);
      
      this.state = {
          searchResults: [],
          playlistName: 'Nova Playlist',
          playlistTracks: [],
          listPlaylistName: [],
          resultCesius: 20
      }
  }

  addTrack(track) {
      let currentPlaylist = this.state.playlistTracks;
      if (currentPlaylist.find(savedTrack => savedTrack.id === track.id)) {
          return;
      }
      currentPlaylist.push(track);
      this.setState({ playlistTracks: currentPlaylist  })
  }

  removeTrack(track) {
      let currentPlaylist = this.state.playlistTracks;
      currentPlaylist = currentPlaylist.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({ playlistTracks: currentPlaylist });
  }

  listPlaylist() {
    const ative = true;
    Spotify.listPlaylist(ative);
}

  savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, trackURIs, this.state.resultCesius)
          .then(() => {
              this.setState({
                  playlistName: 'Nova Playlist',
                  playlistTracks: [],
                  resultCesius: 20
              });
          });
  }

  search(term) {
     Spotify.search(term)
         .then(searchResults => this.setState({ searchResults: searchResults }));
  }

  updatePlaylistName(name) {
      this.setState({ playlistName: name });
  }

  updateTemp(val) {
    this.setState({ resultCesius: val });
}

  render() {
    return (
        <div>
          <Header />
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist onSave={this.savePlaylist} onSaveTemp={this.updateTemp} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} resultCesius={this.state.resultCesius} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
              <ListPlaylist onList={this.listPlaylist} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
