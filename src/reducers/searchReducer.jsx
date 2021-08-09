import { SEARCH, SEARCH_TERM } from "../actions";

const INITIAL_STATE = {
  songs: [],
  searchTerm: ""
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SEARCH:
      return { ...state, songs: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
