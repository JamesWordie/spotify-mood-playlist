import { FETCH_ANALYSIS, SELECTED_SONG } from "../actions";

const INITIAL_STATE = {
  selectedSong: null,
  songData: null
}

const selectedSongReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return { ...state, selectedSong: action.payload, songData: null };
    case FETCH_ANALYSIS:
      return { ...state, songData: action.payload };
    default:
      return state;
  }
}

export default selectedSongReducer;
