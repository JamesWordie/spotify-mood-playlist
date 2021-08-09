import axios from 'axios';

export default axios.create({
  baseURL: "https://accounts.spotify.com/authorize",
  params: {
    client_id: process.env.REACT_APP_CLIENT_ID,
    response_type: "token",
    redirect_uri: "http://localhost:3000/",
    scopes: ["user-read-private, user-read-email"], //"streaming", "user-read-currently-playing", "user-read-private", "playlist-modify-public"
    show_dialog: true
  }
});
