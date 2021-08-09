import React from 'react';

import SearchBar from '../containers/SearchBar';
// import Header from '../containers/Header';
import SpotifyLogin from '../containers/SpotifyLogin';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <SpotifyLogin />
        <SearchBar />
      </div>
    </>
  );
}

export default App;
