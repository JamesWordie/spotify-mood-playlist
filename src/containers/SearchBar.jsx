import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import { spotifySearchTerm, searchTerm } from '../actions';

class SearchBar extends React.Component {
  onSubmit = formValues => {
    this.props.spotifySearchTerm(formValues);
    this.props.searchTerm(formValues);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <SearchForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}


export default connect(null, { spotifySearchTerm, searchTerm })(SearchBar);
