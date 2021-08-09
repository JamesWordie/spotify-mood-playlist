import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import { spotifySearchTerm } from '../actions';

class SearchBar extends React.Component {
  onSubmit = formValues => {
    this.props.spotifySearchTerm(formValues);
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <SearchForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}


export default connect(null, { spotifySearchTerm })(SearchBar);
