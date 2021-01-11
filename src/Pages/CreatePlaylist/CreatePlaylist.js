import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults';
import Playlist from '../../Components/Playlist/Playlist';
import ListPlaylist from '../../Components/ListPlaylist/ListPlaylist';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import Spotify from '../../Sources/Spotify';



class CreatePlaylist extends React.Component {

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
            <Header/>
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist onSave={this.savePlaylist} onSaveTemp={this.updateTemp} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} resultCesius={this.state.resultCesius} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
              <ListPlaylist onList={this.listPlaylist} />
            </div>
            <Footer />
        </div>
    );
  }
}

export default CreatePlaylist;
