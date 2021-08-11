import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/SearchBar';
import Navbar from './Navbar';
import Banner from './Banner';
import SongsGrid from '../containers/SongsGrid';
import SelectedSong from '../containers/SelectedSong';
// import CreatePlaylist from '../containers/CreatePlaylist';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          {!this.props.search.songs.length > 0 &&
          <Banner />}
          {!this.props.auth.isSignedIn &&
          <>
            <span className="login-alert">
              <h4 className="text-danger">Spotify Credentials for Login</h4>
              <p className="m-0">REQUIRED To Allow You To View The App.</p>
              <p className="m-0">Email - jamesw.testing@gmail.com</p>
              <p className="m-0">Password - webdevtest</p>
            </span>
          </>}
          {this.props.auth.isSignedIn &&
          <>
            <SearchBar />
            {/* <CreatePlaylist /> */}
          </>}
          {this.props.auth.isSignedIn &&
          <div className="row justify-content-center">
            {this.props.search.songs &&
            <>
              <SelectedSong />
              <SongsGrid />
            </>}
          </div>}
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
