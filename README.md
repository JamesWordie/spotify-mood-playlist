# 🎧 TuneSense

##### TuneSense is a ReactJS and Redux App that allows you to search for 20 songs based on a search term, such as your mood.
##### You can view the project [here](https://jameswordie.github.io/spotify-mood-playlist/).

## User Journey
1. User lands on homepage and log's in with their spotify account **authentication**.
2. Once authenticated, a user is able to search for term, ie their current mood **Spotify Search API**.
3. 20 results are returned from the API request, they are displayed with the album image, artist's name and song title.
4. A user can then select a certain song, and this will allow the embedded iframe to appear and they can play the chosen song.
5. A user can then request further information/analysis on the song, which renders a spider graph and table **Spotify Track Analysis API**.
6. A user can continue to search as frequently as possible.
## Future Features & Improvements
* A key feature that is currently not enabled is the ability to create a playlist on your account with the returned songs **Spotify Create Playlist and Add Songs to Playlist API's**.
* Test coverage over the app, using sypress or another testing framework **Testing**.
* A visualizer for the tempo possibly, so when the user plays a song, you can visualize the BPM.
* Better error handling and smoother functionality around the app.
* Commenting and notes to the app for future reference.
* Cleaner CSS files as currently all in one file.

Thanks.
