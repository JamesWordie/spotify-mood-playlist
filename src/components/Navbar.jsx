import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

import SpotifyLogin from '../containers/SpotifyLogin';

const Navbar = () => {
  const renderInput = () => {
    return (
      <div className="container-fluid">
        <span className="d-inline-flex logo">
          <FontAwesomeIcon icon={faHeadphones} />
          <h3 className="first-title">Tune</h3><h3 className="second-title">Sense</h3>
        </span>
        <SpotifyLogin />
      </div>
    )
  }

  return (
    <div className="navbar">
      {renderInput()}
    </div>
  )
}

export default Navbar;
