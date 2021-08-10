import React from 'react';
import { connect } from 'react-redux';

import Speaker from '../components/Speaker';

class SelectedSong extends React.Component {
  render() {
    const { selectedSong } = this.props.selectedSong;

    let iframeClass = selectedSong === null ? 'd-none' : "";
    return (
      <div className="col-md-3 align-self-start mt-4">
        <div className={`d-flex justify-content-center mt-2 ${iframeClass}`}>
          <iframe
            title="player"
            src={`https://open.spotify.com/embed/track/${this.props.selectedSong.id}`}
            frameBorder="0"
            width="300" height="380"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
        {this.props.selectedSong &&
        <Speaker selectedSong={this.props.selectedSong} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps, {})(SelectedSong);
