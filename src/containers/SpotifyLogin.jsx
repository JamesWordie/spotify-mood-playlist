import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class SpotifyLogin extends React.Component {
  onSignInClick = () => {
    this.props.signIn();
  }

  onSignOutClick = () => {
    this.props.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this,props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="btn btn-sm btn-success"
        >
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="btn btn-sm btn-success"
        >
          Sign In
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(SpotifyLogin);
