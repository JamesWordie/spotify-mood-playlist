import React from 'react';
import { connect } from 'react-redux';
import { fetchAnalysis } from '../actions';
import { Radar } from 'react-chartjs-2';

class SongData extends React.Component {
  onClick = () => {
    this.props.fetchAnalysis(this.props.selectedSong.id);
  }

  renderGraph() {
    const { songData } = this.props
    if (!songData) {
      return null;
    }

    const data = {
      labels: ['acousticness', 'danceability', 'energy', 'liveness', 'speechiness', 'valence'],
      datasets: [
        {
          label: 'Song Analysis',
          data: [
            songData.acousticness,
            songData.danceability,
            songData.energy,
            songData.liveness,
            songData.speechiness,
            songData.valence
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1.5
        }
      ]
    };

    const options = {
      scale: {
        ticks: { beginAtZero: true }
      }
    }

    return (
      <div className="graph">
        <Radar data={data} options={options} />
      </div>
    )
  }

  render() {
    return (
      <>
        <button
          className="btn btn-success song-analysis"
          onClick={() => this.onClick()}
        >
          Get Song Analysis
        </button>
        {this.renderGraph()}
      </>
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
