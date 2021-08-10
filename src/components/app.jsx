import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/SearchBar';
import Navbar from './Navbar';
import Banner from './Banner';
import SongsGrid from '../containers/SongsGrid';
import SelectedSong from '../containers/SelectedSong';

class App extends React.Component {
  render() {
    console.log(this.props.selectedSong)
    return (
      <>
        <Navbar />
        <div className="container">
          {!this.props.search.songs.length > 0 &&
          <Banner />}
          {this.props.auth.isSignedIn &&
          <SearchBar />}
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
