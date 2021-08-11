import React from 'react';
import { connect } from 'react-redux';

// import Speaker from '../components/Speaker';
import SongData from './SongData';

class SelectedSong extends React.Component {
  render() {
    const { selectedSong } = this.props;

    let iframeClass = selectedSong === null ? 'd-none' : "";
    if (!selectedSong) {
      return null;
    }

    return (
      <div className="col-md-3 align-self-start mt-4">
        <div className={`d-flex justify-content-center mt-2 ${iframeClass}`}>
          <iframe
            title="player"
            src={`https://open.spotify.com/embed/track/${selectedSong.id}`}
            frameBorder="0"
            width="300" height="380"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
        {/* {this.props.selectedSong &&
        <Speaker selectedSong={this.props.selectedSong} />} */}
        {iframeClass !== 'd-none' && <SongData />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { selectedSong: state.selectedSongInfo.selectedSong }
}

export default connect(mapStateToProps, {})(SelectedSong);
