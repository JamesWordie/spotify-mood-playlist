import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class SpotifyLogin extends React.Component {
  // after component mounts, check the url for the token and parses it to obtain the access token from spotify to be used later
  componentDidMount() {
    const response = window.location.hash
      .substring(1)
      .split('&')
      .reduce((sum, current) => {
        if (current) {
          const block = current.split("=")
          sum[block[0]] = decodeURIComponent(block[1])
        }
        return sum
      }, {});

    const spotifyToken = response.access_token;
    if (spotifyToken) {
      this.props.signIn(spotifyToken);
    }
  }

  // function that connects to spotify oauth, accessing via window.load
  logIn() {
    const baseURL = "https://accounts.spotify.com/authorize";
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const origin = window.location.origin;
    const redirectURI = origin === "http://localhost:3000" ? origin : origin + '/';
    const scopes = ["user-read-private", "playlist-modify-private", "user-read-email", "streaming", "user-read-currently-playing", "playlist-modify-public"].join("%20")
    const params = "response_type=token&show_dialog=true";
    const request = `${baseURL}?client_id=${clientId}&redirect_uri=${redirectURI}&scopes=${scopes}&${params}`;
    window.open(request, "_self");
  }

  onSignInClick = () => {
    this.logIn();
  }

  onSignOutClick = () => {
    this.props.signOut();
  }

  // renders either a log in or log out button depending on the state
  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="btn btn-success"
        >
          <FontAwesomeIcon icon={faSpotify} style={{ marginRight: "5px" }} />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="btn btn-success"
        >
          <FontAwesomeIcon icon={faSpotify} style={{ marginRight: "5px" }} />
          Sign In
        </button>
      )
    }
  }

  renderProfile() {
    if (this.props.userData) {
      return (
        <div className="profile" onClick={() => window.open(this.props.userData.profileURL)}>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', lineHeight: '40px' }}/>
          </div>
          <span>{this.props.userData.username}</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <span className="d-inline-flex">
          {this.renderProfile()}
          {this.renderAuthButton()}
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userData: state.auth.userData,
    spotifyToken: state.auth.spotifyToken
  }
};

export default connect(mapStateToProps, { signIn, signOut })(SpotifyLogin);
