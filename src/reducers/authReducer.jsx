import { SIGN_IN, SIGN_OUT } from '../actions/index';

const INITIAL_STATE = {
  isSignedIn: null,
  spotifyToken: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, spotifyToken: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, spotifyToken: null };
    default:
      return state;
  }
}

export default authReducer;
