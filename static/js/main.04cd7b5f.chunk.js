(this["webpackJsonpspotify-mood-playlist"]=this["webpackJsonpspotify-mood-playlist"]||[]).push([[0],{227:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(40),c=n.n(r),i=n(11),o=n(26),l=n(89),u=(n(100),n(2)),d=n(3),j=n(5),p=n(4),b=n(8),h=n(59),f=n(1),m=function(e){var t=function(e){var t=e.input,a=e.meta,s=e.label;return Object(f.jsxs)("div",{className:"search-bar",children:[Object(f.jsx)("input",Object(b.a)({placeholder:s,className:"form-control"},t)),n(a)]})},n=function(e){var t=e.error;if(e.touched&&t)return Object(f.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:Object(f.jsx)("p",{className:"text-muted my-0",children:t})})};return Object(f.jsx)(h.b,{initialValues:e.initialValues,onSubmit:function(t){e.onSubmit(t)},validate:function(e){var t={};return e.search||(t.search="You need to make a search."),t},render:function(e){var n=e.handleSubmit;return Object(f.jsx)("form",{onSubmit:n,children:Object(f.jsx)(h.a,{name:"search",component:t,label:"Enter a search term..."})})}})},O=n(14),y=n.n(O),g=n(27),v=n(19),x=n.n(v),S=x.a.create({baseURL:"https://api.spotify.com/v1/me"}),N=x.a.create({baseURL:"https://api.spotify.com/v1/search",params:{type:"track",limit:"10"}}),k=(x.a.create({baseURL:"https://api.spotify.com/v1/users/"}),x.a.create({baseURL:"https://api.spotify.com/v1/audio-features"})),w="SIGN_IN",I="SIGN_OUT",T="GET_DATA",C="SEARCH",D="SEARCH_TERM",_="SELECTED_SONG",A="CREATE_PLAYLIST",E="FETCH_ANALYSIS",R=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(n){var a,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get("",{headers:{Authorization:"Bearer "+e}});case 2:a=t.sent,s={id:a.data.id,profileURL:a.data.external_urls.spotify,username:a.data.display_name},n({type:T,payload:s});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(t){e.props.spotifySearchTerm(t),e.props.searchTerm(t)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"row justify-content-center mt-3",children:Object(f.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(f.jsx)(m,{onSubmit:this.onSubmit}),Object(f.jsx)("p",{className:"text-light text-center mt-2",children:"Search for a song based on your mood to generate a playlist"})]})})}}]),n}(s.a.Component),U=Object(i.b)(null,{spotifySearchTerm:function(e){return function(){var t=Object(g.a)(y.a.mark((function t(n,a){var s,r,c,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.spotifyToken,t.next=3,N.get("?q=".concat(e.search),{headers:{Authorization:"Bearer "+s}});case 3:r=t.sent,c=r.data.tracks.items,i=c.map((function(e){return{title:e.name,id:e.id,previewURL:e.preview_url,artist:e.album.artists[0].name,image:e.album.images[1].url,url:e.external_urls.spotify,albumTitle:e.album.name,uri:e.uri}})),n({type:C,payload:i});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},searchTerm:function(e){return{type:D,payload:e}}})(L),B=n(16),G=n(20),F=n(57),z=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSignInClick=function(){e.logIn()},e.onSignOutClick=function(){e.props.signOut()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token;e&&this.props.signIn(e)}},{key:"logIn",value:function(){var e=window.location.origin,t="http://localhost:3000"===e?e:"https://jameswordie.github.io/spotify-mood-playlist/",n=["user-read-private","playlist-modify-private","user-read-email","streaming","user-read-currently-playing","playlist-modify-public"].join("%20"),a="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("99c62832a2bb495889864467a498427d","&redirect_uri=").concat(t,"&scopes=").concat(n,"&").concat("response_type=token&show_dialog=true");window.open(a,"_self")}},{key:"renderAuthButton",value:function(){return this.props.isSignedIn?Object(f.jsxs)("button",{onClick:this.onSignOutClick,className:"btn btn-success",children:[Object(f.jsx)(B.a,{icon:F.a,style:{marginRight:"5px"}}),"Sign Out"]}):Object(f.jsxs)("button",{onClick:this.onSignInClick,className:"btn btn-success",children:[Object(f.jsx)(B.a,{icon:F.a,style:{marginRight:"5px"}}),"Sign In"]})}},{key:"renderProfile",value:function(){var e=this;if(this.props.userData)return Object(f.jsxs)("div",{className:"profile",onClick:function(){return window.open(e.props.userData.profileURL)},children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(B.a,{icon:G.c,style:{fontSize:"20px",lineHeight:"40px"}})}),Object(f.jsx)("span",{children:this.props.userData.username})]})}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("span",{className:"d-inline-flex",children:[this.renderProfile(),this.renderAuthButton()]})})}}]),n}(s.a.Component),P=Object(i.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userData:e.auth.userData,spotifyToken:e.auth.spotifyToken}}),{signIn:function(e){return function(){var t=Object(g.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(R(e));case 2:n({type:w,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},signOut:function(){return{type:I}}})(z),H=function(){return Object(f.jsx)("div",{className:"navbar",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsxs)("span",{className:"d-inline-flex logo",children:[Object(f.jsx)(B.a,{icon:G.a}),Object(f.jsx)("h3",{className:"first-title",children:"Tune"}),Object(f.jsx)("h3",{className:"second-title",children:"Sense"})]}),Object(f.jsx)(P,{})]})})},M=function(){return Object(f.jsx)("div",{className:"banner row",children:Object(f.jsx)("div",{className:"col-6",children:Object(f.jsxs)("span",{className:"d-inline-flex",children:[Object(f.jsx)(B.a,{icon:G.a}),Object(f.jsx)("h1",{className:"first-title",children:"Tune"}),Object(f.jsx)("h1",{className:"second-title",children:"Sense"})]})})})},V=function(e){var t=e.song;return Object(f.jsxs)("div",{className:"card m-2 song-card",onClick:function(){return function(t){e.onSubmit(t)}(t)},children:[Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title",children:t.artist}),Object(f.jsx)("p",{className:"card-subtitle",children:t.title})]}),Object(f.jsx)("img",{src:t.image,alt:"album cover",className:"song-image"}),Object(f.jsx)("span",{className:"play",children:Object(f.jsx)(B.a,{icon:G.b})})]})},Y=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(t){e.props.selectedSong(t)},e}return Object(d.a)(n,[{key:"renderSongs",value:function(){var e=this;return this.props.songs.map((function(t){return Object(f.jsx)(V,{song:t,onSubmit:e.onSubmit},t.id)}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"col-xl-9 col-lg-6 col-md-12",children:Object(f.jsx)("div",{className:"d-flex flex-wrap justify-content-center mt-4",children:this.renderSongs()})})}}]),n}(s.a.Component),J=Object(i.b)((function(e){return{songs:e.search.songs}}),{selectedSong:function(e){return{type:_,payload:e}}})(Y),X=n(92),q=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onClick=function(){e.props.fetchAnalysis(e.props.selectedSong.id)},e}return Object(d.a)(n,[{key:"renderData",value:function(){var e=this.props.songData;return Object.keys(e).map((function(t,n){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:t}),Object(f.jsx)("td",{className:"text-right",children:e[t].toFixed(3)})]},n)}))}},{key:"renderDataTable",value:function(){return this.props.songData?Object(f.jsxs)("div",{className:"info-div",children:[Object(f.jsx)("p",{className:"more-info text-muted m-0",children:"Detailed Info"}),Object(f.jsx)("div",{className:"table-data table-responsive-md",children:Object(f.jsx)("table",{className:"table table-striped",children:Object(f.jsx)("tbody",{children:this.renderData()})})})]}):null}},{key:"renderGraph",value:function(){var e=this.props.songData;if(!e)return null;var t={labels:["acousticness","danceability","energy","liveness","speechiness","valence"],datasets:[{label:"Analysis",data:[e.acousticness,e.danceability,e.energy,e.liveness,e.speechiness,e.valence],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1.5}]};return Object(f.jsx)("div",{className:"graph",children:Object(f.jsx)(X.a,{data:t,options:{scale:{ticks:{beginAtZero:!0}}}})})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:"btn btn-success song-analysis",onClick:function(){return e.onClick()},children:"Get Song Analysis"}),this.renderGraph(),this.renderDataTable()]})}}]),n}(s.a.Component),W=Object(i.b)((function(e){return{songData:e.selectedSongInfo.songData,selectedSong:e.selectedSongInfo.selectedSong}}),{fetchAnalysis:function(e){return function(){var t=Object(g.a)(y.a.mark((function t(n,a){var s,r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.spotifyToken,t.next=3,k.get("/".concat(e),{headers:{Authorization:"Bearer "+s}});case 3:r=t.sent,c={acousticness:r.data.acousticness,danceability:r.data.danceability,energy:r.data.energy,instrumentalness:r.data.instrumentalness,liveness:r.data.liveness,speechiness:r.data.speechiness,tempo:r.data.tempo,valence:r.data.valence},n({type:E,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(q),Z=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.selectedSong,t=null===e?"d-none":"";return e?Object(f.jsxs)("div",{className:"col-xl-3 col-lg-6 col-md-12 align-self-start mt-4 d-flex flex-column",children:[Object(f.jsx)("div",{className:"d-flex selected-song justify-content-center mt-2 ".concat(t),children:Object(f.jsx)("iframe",{title:"player",src:"https://open.spotify.com/embed/track/".concat(e.id),frameBorder:"0",width:"300",height:"380",allowtransparency:"true",allow:"encrypted-media"})}),"d-none"!==t&&Object(f.jsx)(W,{})]}):null}}]),n}(s.a.Component),K=Object(i.b)((function(e){return{selectedSong:e.selectedSongInfo.selectedSong}}),{})(Z),Q=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(H,{}),Object(f.jsxs)("div",{className:"container",children:[!this.props.search.songs.length>0&&Object(f.jsx)(M,{}),this.props.auth.isSignedIn&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(U,{})}),Object(f.jsx)("div",{className:"row justify-content-center",children:this.props.search.songs&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(K,{}),Object(f.jsx)(J,{})]})})]})]})}}]),n}(s.a.Component),$=Object(i.b)((function(e){return{auth:e.auth,search:e.search,selectedSong:e.selectedSong}}),{})(Q),ee={isSignedIn:null,spotifyToken:null,userData:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!0,spotifyToken:t.payload});case I:return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!1,spotifyToken:null,userData:null});case T:return Object(b.a)(Object(b.a)({},e),{},{userData:t.payload});default:return e}},ne={songs:[],searchTerm:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(b.a)(Object(b.a)({},e),{},{searchTerm:t.payload});case C:return Object(b.a)(Object(b.a)({},e),{},{songs:t.payload});default:return e}},se={selectedSong:null,songData:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(b.a)(Object(b.a)({},e),{},{selectedSong:t.payload,songData:null});case E:return Object(b.a)(Object(b.a)({},e),{},{songData:t.payload});default:return e}},ce={playListInfo:{}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(b.a)(Object(b.a)({},e),{},{playListInfo:t.payload});default:return e}},oe=Object(o.b)({auth:te,search:ae,selectedSongInfo:re,createPlaylist:ie}),le=(n(227),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c),ue=Object(o.d)(oe,le(Object(o.a)(l.a)));c.a.render(Object(f.jsx)(i.a,{store:ue,children:Object(f.jsx)($,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.04cd7b5f.chunk.js.map