import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="banner row">
      <div className="col-6">
        <span className="d-inline-flex">
          <FontAwesomeIcon icon={faHeadphones} />
          <h1 className="first-title">Tune</h1><h1 className="second-title">Sense</h1>
        </span>
        {/* <p className="text-light">Search for a song based on your mood to generate a playlist</p> */}
      </div>
    </div>
  )
}

export default Banner;
