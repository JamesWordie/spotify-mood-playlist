import { SEARCH } from "../actions";

const INITIAL_STATE = {
  songs: []
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, songs: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
