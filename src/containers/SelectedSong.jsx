import React from 'react';
import { connect } from 'react-redux';

class SelectedSong extends React.Component {
  // renderPlayer() {
  //   return (
  //     <iframe
  //       title="player"
  //       src={`https://open.spotify.com/embed/track/${this.props.selectedSong.id}`}
  //       frameBorder="0"
  //       width="300" height="380"
  //       allowtransparency="true"
  //       allow="encrypted-media"
  //     >
  //     </iframe>
  //   )
  // }

  render() {
    const { selectedSong } = this.props.selectedSong;

    console.log(selectedSong === null)
    let iframeClass = selectedSong === null ? 'd-none' : "";
    return (
      <div className="col-md-4 align-self-start mt-4">
        <div className={`d-flex justify-content-center mt-2 ${iframeClass}`}>
          {/* {this.renderPlayer()} */}
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps, {})(SelectedSong);
