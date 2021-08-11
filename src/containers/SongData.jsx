import React from 'react';
import { connect } from 'react-redux';
import { fetchAnalysis } from '../actions';

class SongData extends React.Component {
  onClick = () => {
    this.props.fetchAnalysis(this.props.selectedSong.id);
  }

  render() {
    return (
      <button
        className="btn btn-success"
        onClick={() => this.onClick()}
      >
        Get Song Analysis
      </button>
    )
  }
}

const mapStateToProps = state => {
  return {
    songData: state.selectedSongInfo.songData,
    selectedSong: state.selectedSongInfo.selectedSong
  };
}

export default connect(mapStateToProps, { fetchAnalysis })(SongData);
