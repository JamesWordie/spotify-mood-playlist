import React from 'react';

import SearchBar from '../containers/SearchBar';
import Header from '../components/Header';
// import SpotifyLogin from '../containers/SpotifyLogin';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
