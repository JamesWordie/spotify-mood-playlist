import { combineReducers } from "redux";
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import selectedSongReducer from "./selectedSongReducer";
import createPlaylistReducer from './createPlaylistReducer';

export default combineReducers({
  auth: authReducer,
  search: searchReducer,
  selectedSongInfo: selectedSongReducer,
  createPlaylist: createPlaylistReducer
})
