import { SELECTED_SONG } from "../actions";

const INITIAL_STATE = {
  selectedSong: null
}

const selectedSongReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return action.payload;
    default:
      return state;
  }
}

export default selectedSongReducer;
