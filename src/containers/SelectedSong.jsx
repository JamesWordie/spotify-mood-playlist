import React from 'react';
import { connect } from 'react-redux';

class SelectedSong extends React.Component {
  render() {
    return (
      // <iframe
      //   title="player"
      //   src={`https://open.spotify.com/embed/track/${this.props.selectedSong.id}`}
      //   frameBorder="0"
      //   allowTransparency="true"
      //   allow="encrypted-media"
      // >
      // </iframe>
      <div className="col-md-4 align-self-start mt-4">
        <div className="card">
          <div className="card-title">HEY SELECTED SONG TO ADD</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong }
}

export default connect(null, {})(SelectedSong);
