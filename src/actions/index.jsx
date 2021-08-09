import spotifyAuth from '../api/spotifyAuth';
import spotifySearch from '../api/spotifySearch';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const GET_DATA = 'GET_DATA';
export const SEARCH = "SEARCH";
export const SEARCH_TERM = "SEARCH_TERM";

export const signIn = (spotifyToken) => async dispatch => {
  await dispatch(getUserData(spotifyToken));

  dispatch({
    type: SIGN_IN,
    payload: spotifyToken
  });
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

export const getUserData = (spotifyToken) => async dispatch => {
  const response = await spotifyAuth.get("", {
    headers: {
      "Authorization": "Bearer " + spotifyToken
    }
  })

  const spotifyData = {
    id: response.data.id,
    profileURL: response.data.external_urls.spotify,
    username: response.data.display_name
  };

  dispatch({ type: GET_DATA, payload: spotifyData })
}

export const searchTerm = formValues => {
  return {
    type: SEARCH_TERM,
    payload: formValues
  }
}

export const spotifySearchTerm = formValues => async (dispatch, getState) => {
  const { spotifyToken } = getState().auth;
  const response = await spotifySearch.get(`?q=${formValues}`, {
    headers: {
      "Authorization": "Bearer " + spotifyToken
    }
  });

  const tracks = response.data.tracks.items;
  const trackInfo = tracks.map((track) => {
    return {
      title: track.name,
      id: track.id,
      previewURL: track.preview_url,
      artist: track.album.artists[0].name,
      image: track.album.images[0].url,
      url: track.external_urls.spotify,
      albumTitle: track.album.name,
      uri: track.uri
    }
  });

  dispatch({ type: SEARCH, payload: trackInfo })
}
