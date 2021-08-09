export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (spotifyToken) => {
  return {
    type: SIGN_IN,
    payload: spotifyToken
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

