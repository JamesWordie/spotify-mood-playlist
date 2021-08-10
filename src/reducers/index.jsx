import { combineReducers } from "redux";
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import selectedSongReducer from "./selectedSongReducer";

export default combineReducers({
  auth: authReducer,
  search: searchReducer,
  selectedSong: selectedSongReducer
})
