import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/SearchBar';
import Navbar from './Navbar';
import Banner from './Banner';
import SongsGrid from '../containers/SongsGrid';
import SelectedSong from '../containers/SelectedSong';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Banner />
          {this.props.auth.isSignedIn &&
          <SearchBar />}
          {/* button to add playlist to spotify account */}
          <div className="row justify-content-center">
            {/* Selected Song Player && Tempo Animation ?? */}
            {/* Grid of Cards with image, details or tracks, etc */}
            <SelectedSong />
            <SongsGrid />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    search: state.search
  }
}

export default connect(mapStateToProps, {})(App);
