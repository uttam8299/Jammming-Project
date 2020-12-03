import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'searchResults' : [],
      'playlistName' : 'New Playlist',
      'playlistTracks' : []
    }
    this.addTracks = this.addTracks.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  //Adding tracks
   addTracks(track) {
     let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks : tracks});
  }

  // Removing Tracks
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks : tracks});
  }

  //Updating Playlist Method
  updatePlaylistName(name){
    this.setState({playlistName : name});
  }

  //Creating method savePlaylist to save the songs 
  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then( () => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  //creating search method
  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }


  render(){
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
   
    <div className="App-playlist">
    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTracks}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
        onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
