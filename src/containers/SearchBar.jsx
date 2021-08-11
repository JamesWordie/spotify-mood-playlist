import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import SearchForm from '../components/searchForm.jsx';
import { spotifySearchTerm, searchTerm } from '../actions';

class SearchBar extends React.Component {
  onSubmit = formValues => {
    this.props.spotifySearchTerm(formValues);
    this.props.searchTerm(formValues);
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-sm-6">
          <SearchForm onSubmit={this.onSubmit} />
          <span className="info w-100 mt-2">
            <FontAwesomeIcon icon={faInfo} />
            <p className="text-light text-center m-0">Search for a song based on your mood to generate a playlist</p>
          </span>
        </div>
      </div>
    )
  }
}


export default connect(null, { spotifySearchTerm, searchTerm })(SearchBar);
