import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const SongCard = (props) => {
  const { song } = props;

  const handleSubmit = (song) => {
    props.onSubmit(song);
  }

  return (
    <div className="card m-2 song-card" onClick={() => handleSubmit(song)}>
      <div className="card-body">
        <h5 className="card-title">{song.artist}</h5>
        <p className="card-subtitle">{song.title}</p>
      </div>
      <img src={song.image} alt="album cover" className="song-image" />
      <span className="play">
        <FontAwesomeIcon icon={faPlayCircle} />
      </span>
    </div>
  )
}

export default SongCard;
