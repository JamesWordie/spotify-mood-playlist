import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/searchForm';
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
          <p className="text-light text-center mt-2">Search for a song based on your mood to generate a playlist</p>
        </div>
      </div>
    )
  }
}


export default connect(null, { spotifySearchTerm, searchTerm })(SearchBar);
