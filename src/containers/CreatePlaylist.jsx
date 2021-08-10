import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../actions';

class CreatePlaylist extends React.Component {
  onClick = () => {
    this.props.createPlaylist();
  }

  render() {
    return (
      <button
        className="btn btn-success create-playlist"
        onClick={() => this.onClick()}
      >
        Save Playlist
      </button>
    )
  }
}

export default connect(null, { createPlaylist })(CreatePlaylist);
