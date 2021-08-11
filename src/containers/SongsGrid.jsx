import React from 'react';
import { connect } from 'react-redux';

import SongCard from '../components/songCard.jsx';
import { selectedSong } from '../actions';

class SongsGrid extends React.Component {
  renderSongs() {
    return this.props.songs.map((song) => {
      return (
        <SongCard song={song} key={song.id} onSubmit={this.onSubmit} />
      )
    })
  }

  onSubmit = (song) => {
    this.props.selectedSong(song);
  }

  render() {
    return (
      <div className="col-xl-9 col-lg-6 col-md-12">
        <div className="d-flex flex-wrap justify-content-center mt-4">
          {this.renderSongs()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.search.songs }
}

export default connect(mapStateToProps, { selectedSong })(SongsGrid);
