import React from 'react';
import { connect } from 'react-redux';

import SongCard from '../components/SongCard';

class SongsGrid extends React.Component {
  renderSongs() {
    return this.props.songs.map((song) => {
      return (
        <SongCard song={song} key={song.id} />
      )
    })
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="d-flex flex-wrap justify-content-end mt-4">
          {this.renderSongs()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.search.songs }
}

export default connect(mapStateToProps, {})(SongsGrid);
