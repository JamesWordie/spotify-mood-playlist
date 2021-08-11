(this["webpackJsonpspotify-mood-playlist"]=this["webpackJsonpspotify-mood-playlist"]||[]).push([[0],{227:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(40),c=n.n(r),i=n(11),o=n(26),l=n(89),u=(n(100),n(2)),d=n(3),j=n(5),p=n(4),b=n(14),h=n(17),f=n(8),m=n(59),O=n(1),y=function(e){var t=function(e){var t=e.input,a=e.meta,s=e.label;return Object(O.jsxs)("div",{className:"search-bar",children:[Object(O.jsx)("input",Object(f.a)({placeholder:s,className:"form-control"},t)),n(a)]})},n=function(e){var t=e.error;if(e.touched&&t)return Object(O.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:Object(O.jsx)("p",{className:"text-muted my-0",children:t})})};return Object(O.jsx)(m.b,{initialValues:e.initialValues,onSubmit:function(t){e.onSubmit(t)},validate:function(e){var t={};return e.search||(t.search="You need to make a search."),t},render:function(e){var n=e.handleSubmit;return Object(O.jsx)("form",{onSubmit:n,children:Object(O.jsx)(m.a,{name:"search",component:t,label:"Enter a search term..."})})}})},g=n(15),v=n.n(g),x=n(27),S=n(20),N=n.n(S),k=N.a.create({baseURL:"https://api.spotify.com/v1/me"}),w=N.a.create({baseURL:"https://api.spotify.com/v1/search",params:{type:"track",limit:"10"}}),I=(N.a.create({baseURL:"https://api.spotify.com/v1/users/"}),N.a.create({baseURL:"https://api.spotify.com/v1/audio-features"})),T="SIGN_IN",C="SIGN_OUT",D="GET_DATA",_="SEARCH",A="SEARCH_TERM",E="SELECTED_SONG",R="CREATE_PLAYLIST",L="FETCH_ANALYSIS",U=function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var a,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("",{headers:{Authorization:"Bearer "+e}});case 2:a=t.sent,s={id:a.data.id,profileURL:a.data.external_urls.spotify,username:a.data.display_name},n({type:D,payload:s});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(t){e.props.spotifySearchTerm(t),e.props.searchTerm(t)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"row justify-content-center mt-3",children:Object(O.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(O.jsx)(y,{onSubmit:this.onSubmit}),Object(O.jsxs)("span",{className:"info w-100 mt-2",children:[Object(O.jsx)(b.a,{icon:h.b}),Object(O.jsx)("p",{className:"text-light text-center m-0",children:"Search for a song based on your mood to generate a playlist"})]})]})})}}]),n}(s.a.Component),G=Object(i.b)(null,{spotifySearchTerm:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n,a){var s,r,c,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.spotifyToken,t.next=3,w.get("?q=".concat(e.search),{headers:{Authorization:"Bearer "+s}});case 3:r=t.sent,c=r.data.tracks.items,i=c.map((function(e){return{title:e.name,id:e.id,previewURL:e.preview_url,artist:e.album.artists[0].name,image:e.album.images[1].url,url:e.external_urls.spotify,albumTitle:e.album.name,uri:e.uri}})),n({type:_,payload:i});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},searchTerm:function(e){return{type:A,payload:e}}})(B),F=n(57),z=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSignInClick=function(){e.logIn()},e.onSignOutClick=function(){e.props.signOut()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token;e&&this.props.signIn(e)}},{key:"logIn",value:function(){var e=window.location.origin,t="http://localhost:3000"===e?e:"https://jameswordie.github.io/spotify-mood-playlist/",n=["user-read-private","playlist-modify-private","user-read-email","streaming","user-read-currently-playing","playlist-modify-public"].join("%20"),a="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("99c62832a2bb495889864467a498427d","&redirect_uri=").concat(t,"&scopes=").concat(n,"&").concat("response_type=token&show_dialog=true");window.open(a,"_self")}},{key:"renderAuthButton",value:function(){return this.props.isSignedIn?Object(O.jsxs)("button",{onClick:this.onSignOutClick,className:"btn btn-success",children:[Object(O.jsx)(b.a,{icon:F.a,style:{marginRight:"5px"}}),"Sign Out"]}):Object(O.jsxs)("button",{onClick:this.onSignInClick,className:"btn btn-success",children:[Object(O.jsx)(b.a,{icon:F.a,style:{marginRight:"5px"}}),"Sign In"]})}},{key:"renderProfile",value:function(){var e=this;if(this.props.userData)return Object(O.jsxs)("div",{className:"profile",onClick:function(){return window.open(e.props.userData.profileURL)},children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(b.a,{icon:h.d,style:{fontSize:"20px",lineHeight:"40px"}})}),Object(O.jsx)("span",{children:this.props.userData.username})]})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("span",{className:"d-inline-flex",children:[this.renderProfile(),this.renderAuthButton()]})})}}]),n}(s.a.Component),P=Object(i.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userData:e.auth.userData,spotifyToken:e.auth.spotifyToken}}),{signIn:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(U(e));case 2:n({type:T,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},signOut:function(){return{type:C}}})(z),H=function(){return Object(O.jsx)("div",{className:"navbar",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsxs)("span",{className:"d-inline-flex logo",children:[Object(O.jsx)(b.a,{icon:h.a}),Object(O.jsx)("h3",{className:"first-title",children:"Tune"}),Object(O.jsx)("h3",{className:"second-title",children:"Sense"})]}),Object(O.jsx)(P,{})]})})},M=function(){return Object(O.jsx)("div",{className:"banner row",children:Object(O.jsxs)("div",{className:"col-6",children:[Object(O.jsxs)("span",{className:"d-inline-flex",children:[Object(O.jsx)(b.a,{icon:h.a}),Object(O.jsx)("h1",{className:"first-title",children:"Tune"}),Object(O.jsx)("h1",{className:"second-title",children:"Sense"})]}),Object(O.jsx)("p",{className:"text-light",children:"Search for a song based on your mood to generate a playlist"})]})})},V=function(e){var t=e.song;return Object(O.jsxs)("div",{className:"card m-2 song-card",onClick:function(){return function(t){e.onSubmit(t)}(t)},children:[Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.artist}),Object(O.jsx)("p",{className:"card-subtitle",children:t.title})]}),Object(O.jsx)("img",{src:t.image,alt:"album cover",className:"song-image"}),Object(O.jsx)("span",{className:"play",children:Object(O.jsx)(b.a,{icon:h.c})})]})},Y=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(t){e.props.selectedSong(t)},e}return Object(d.a)(n,[{key:"renderSongs",value:function(){var e=this;return this.props.songs.map((function(t){return Object(O.jsx)(V,{song:t,onSubmit:e.onSubmit},t.id)}))}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"col-xl-9 col-lg-6 col-md-12",children:Object(O.jsx)("div",{className:"d-flex flex-wrap justify-content-center mt-4",children:this.renderSongs()})})}}]),n}(s.a.Component),J=Object(i.b)((function(e){return{songs:e.search.songs}}),{selectedSong:function(e){return{type:E,payload:e}}})(Y),X=n(92),q=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onClick=function(){e.props.fetchAnalysis(e.props.selectedSong.id)},e}return Object(d.a)(n,[{key:"renderData",value:function(){var e=this.props.songData;return Object.keys(e).map((function(t,n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:t}),Object(O.jsx)("td",{className:"text-right",children:e[t].toFixed(3)})]},n)}))}},{key:"renderDataTable",value:function(){return this.props.songData?Object(O.jsxs)("div",{className:"info-div",children:[Object(O.jsx)("p",{className:"more-info text-muted m-0",children:"Detailed Info"}),Object(O.jsx)("div",{className:"table-data table-responsive-md",children:Object(O.jsx)("table",{className:"table table-striped",children:Object(O.jsx)("tbody",{children:this.renderData()})})})]}):null}},{key:"renderGraph",value:function(){var e=this.props.songData;if(!e)return null;var t={labels:["acousticness","danceability","energy","liveness","speechiness","valence"],datasets:[{label:"Analysis",data:[e.acousticness,e.danceability,e.energy,e.liveness,e.speechiness,e.valence],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1.5}]};return Object(O.jsx)("div",{className:"graph",children:Object(O.jsx)(X.a,{data:t,options:{scale:{ticks:{beginAtZero:!0}}}})})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"btn btn-success song-analysis",onClick:function(){return e.onClick()},children:"Get Song Analysis"}),this.renderGraph(),this.renderDataTable()]})}}]),n}(s.a.Component),W=Object(i.b)((function(e){return{songData:e.selectedSongInfo.songData,selectedSong:e.selectedSongInfo.selectedSong}}),{fetchAnalysis:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n,a){var s,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.spotifyToken,t.next=3,I.get("/".concat(e),{headers:{Authorization:"Bearer "+s}});case 3:r=t.sent,c={acousticness:r.data.acousticness,danceability:r.data.danceability,energy:r.data.energy,instrumentalness:r.data.instrumentalness,liveness:r.data.liveness,speechiness:r.data.speechiness,tempo:r.data.tempo,valence:r.data.valence},n({type:L,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(q),Z=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.selectedSong,t=null===e?"d-none":"";return e?Object(O.jsxs)("div",{className:"col-xl-3 col-lg-6 col-md-12 align-self-start mt-4 d-flex flex-column",children:[Object(O.jsx)("div",{className:"d-flex selected-song justify-content-center mt-2 ".concat(t),children:Object(O.jsx)("iframe",{title:"player",src:"https://open.spotify.com/embed/track/".concat(e.id),frameBorder:"0",width:"300",height:"380",allowtransparency:"true",allow:"encrypted-media"})}),"d-none"!==t&&Object(O.jsx)(W,{})]}):null}}]),n}(s.a.Component),K=Object(i.b)((function(e){return{selectedSong:e.selectedSongInfo.selectedSong}}),{})(Z),Q=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:"container",children:[!this.props.search.songs.length>0&&Object(O.jsx)(M,{}),this.props.auth.isSignedIn&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(G,{})}),Object(O.jsx)("div",{className:"row justify-content-center",children:this.props.search.songs&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsx)(J,{})]})})]})]})}}]),n}(s.a.Component),$=Object(i.b)((function(e){return{auth:e.auth,search:e.search,selectedSong:e.selectedSong}}),{})(Q),ee={isSignedIn:null,spotifyToken:null,userData:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!0,spotifyToken:t.payload});case C:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!1,spotifyToken:null,userData:null});case D:return Object(f.a)(Object(f.a)({},e),{},{userData:t.payload});default:return e}},ne={songs:[],searchTerm:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(f.a)(Object(f.a)({},e),{},{searchTerm:t.payload});case _:return Object(f.a)(Object(f.a)({},e),{},{songs:t.payload});default:return e}},se={selectedSong:null,songData:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(f.a)(Object(f.a)({},e),{},{selectedSong:t.payload,songData:null});case L:return Object(f.a)(Object(f.a)({},e),{},{songData:t.payload});default:return e}},ce={playListInfo:{}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(f.a)(Object(f.a)({},e),{},{playListInfo:t.payload});default:return e}},oe=Object(o.b)({auth:te,search:ae,selectedSongInfo:re,createPlaylist:ie}),le=(n(227),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c),ue=Object(o.d)(oe,le(Object(o.a)(l.a)));c.a.render(Object(O.jsx)(i.a,{store:ue,children:Object(O.jsx)($,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.c5bd6652.chunk.js.map