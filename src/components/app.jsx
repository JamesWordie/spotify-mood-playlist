import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/searchBar';
import Navbar from './navbar';
import Banner from './banner';
import SongsGrid from '../containers/songsGrid';
import SelectedSong from '../containers/selectedSong';
// import CreatePlaylist from '../containers/CreatePlaylist';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          {!this.props.search.songs.length > 0 &&
          <Banner />}
          {this.props.auth.isSignedIn &&
          <>
            <SearchBar />
            {/* <CreatePlaylist /> */}
          </>}
          {/* button to add playlist to spotify account */}
          <div className="row justify-content-center">
            {/* Selected Song Player && Tempo Animation ?? */}
            {this.props.search.songs &&
            <>
              <SelectedSong />
              <SongsGrid />
            </>}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    search: state.search,
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps, {})(App);
