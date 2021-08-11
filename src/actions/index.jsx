import spotifyAuth from '../api/spotifyAuth';
import spotifySearch from '../api/spotifySearch';
import spotifyCreate from '../api/spotifyCreate';
import spotifySongData from '../api/spotifySongData';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const GET_DATA = 'GET_DATA';
export const SEARCH = "SEARCH";
export const SEARCH_TERM = "SEARCH_TERM";
export const SELECTED_SONG = "SELECTED_SONG";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const FETCH_ANALYSIS = "FETCH_ANALYSIS";

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
  const response = await spotifySearch.get(`?q=${formValues.search}`, {
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
      image: track.album.images[1].url,
      url: track.external_urls.spotify,
      albumTitle: track.album.name,
      uri: track.uri
    }
  });

  dispatch({ type: SEARCH, payload: trackInfo })
}

export const selectedSong = (song) => {
  return {
    type: SELECTED_SONG,
    payload: song
  }
}

export const createPlaylist = () => async (dispatch, getState) => {
  const { spotifyToken } = getState().auth;
  const { id } = getState().auth.userData;
  const { search } = getState().search.searchTerm;
  const description = "A playlist created by TuneSense";

  const body = {
    "name": `${search} songs`,
    "description": description,
    "public": true
  };

  try {
    const response = await spotifyCreate.post(`${id}/playlists`, body, {
      headers: {
        "Authorization": "Bearer " + spotifyToken,
        "Content-Type": "application/json"
      }
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const fetchAnalysis = (song_id) => async (dispatch, getState) => {
  const { spotifyToken } = getState().auth;

  const response = await spotifySongData.get(`/${song_id}`, {
    headers: {
      "Authorization": "Bearer " + spotifyToken
    }
  });

  const data = {
    acousticness: response.data.acousticness,
    danceability: response.data.danceability,
    energy: response.data.energy,
    instrumentalness: response.data.instrumentalness,
    liveness: response.data.liveness,
    speechiness: response.data.speechiness,
    tempo: response.data.tempo,
    valence: response.data.valence
  };

  dispatch({ type: FETCH_ANALYSIS, payload: data });
}
