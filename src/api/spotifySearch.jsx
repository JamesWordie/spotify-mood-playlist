import axios from 'axios';

export default axios.create({
  baseURL: "https://api.spotify.com/v1/search",
  params: {
    type: 'track',
    limit: '10'
  }
});
