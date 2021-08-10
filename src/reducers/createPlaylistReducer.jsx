import { CREATE_PLAYLIST } from "../actions";

const INITIAL_STATE = {
  playListInfo: {}
}

const createPlaylistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return { ...state, playListInfo: action.payload};
    default:
      return state;
  }
}

export default createPlaylistReducer;
