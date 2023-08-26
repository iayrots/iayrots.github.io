"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47200],{51285:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",position:"relative",overflow:"visible",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar","activeAI"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.sm":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.md":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar","activeAI"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-stage.activeAI":{add:[["dyte-ai",{view:"sidebar"}]]},"dyte-stage.activeAI.sm":{remove:["dyte-ai"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":["dyte-name-tag","dyte-network-indicator"],"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-more-toggle":{states:["activeMoreMenu"],children:[]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-more-toggle.activeMoreMenu":[["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-recording-toggle",{variant:"horizontal",slot:"more-elements"}]],"dyte-more-toggle.activeMoreMenu.sm":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.md":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#controlbar-left":["dyte-settings-toggle","dyte-screen-share-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-more-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle","dyte-ai-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},47200:(e,t,i)=>{i.r(t),i.d(t,{dyte_ended_screen:()=>d});var a=i(65733),o=i(20336),r=i(96633),n=i(46503),s=i(51285);i(21237),i(24555),i(60804);const d=class{constructor(e){(0,a.r)(this,e),this.config=s.d,this.size=void 0,this.icon=r.d,this.states=void 0,this.t=(0,o.u)(),this.iconPack=r.d,this.message="",this.meeting=void 0}connectedCallback(){this.statesChanged(this.states),(0,n.o)("roomLeftState",(()=>this.statesChanged()))}getBreakoutRoomsMessage(e){var t;let i;return"connected-meeting"===(null==e?void 0:e.roomLeftState)&&(i=(null===(t=n.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)===this.meeting.connectedMeetings.parentMeeting.id?"breakout_rooms.move_reason.switch_main_room":"breakout_rooms.move_reason.switch_room"),i}statesChanged(e){const t=e||n.s;if(null!=t)switch(null==t?void 0:t.roomLeftState){case"left":this.message="ended.left";break;case"kicked":this.message="ended.kicked";break;case"disconnected":this.message="ended.disconnected";break;case"rejected":this.message="ended.rejected";break;case"connected-meeting":this.message=this.getBreakoutRoomsMessage(t);break;default:this.message="ended"}}renderBreakoutRoomScreen(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr",part:"container"},(0,a.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,a.h)("p",{part:"message",class:"breakout"},this.t(this.message))))}render(){const e=this.states||n.s;return"connected-meeting"===e.roomLeftState?this.renderBreakoutRoomScreen():(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr",part:"container"},(0,a.h)("dyte-logo",{meeting:this.meeting,config:this.config,part:"logo",t:this.t}),(0,a.h)("p",{part:"message"},this.t(this.message)),"disconnected"===(null==e?void 0:e.roomLeftState)&&(0,a.h)("span",{part:"description"},this.t("ended.network"))))}static get watchers(){return{states:["statesChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p.breakout{font-size:20px;display:flex;flex-direction:column;align-items:center}p.breakout span{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}"},60804:(e,t,i)=>{i.d(t,{g:()=>r});const a={get:(e,t,i)=>(...a)=>{try{return Reflect.get(e,t,i).apply(e,a)}catch(o){return null}}};let o;try{o=new Proxy(localStorage,a)}catch(n){o=new Proxy({},a)}const r=o},24555:(e,t,i)=>{i.d(t,{P:()=>n,a:()=>a,b:()=>g,c:()=>c,d:()=>s,e:()=>d,f:()=>l,i:()=>o,s:()=>r});const a=e=>!!r(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),o=e=>{var t;return!!r(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},r=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var n,s;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(n||(n={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(s||(s={}));const d=[s.TIME_UPDATE,s.BUFFER_UPDATE,s.TEXT_METADATA_CUE,s.PLAYER_METADATA],l=[s.REBUFFERING,s.AUDIO_BLOCKED,s.PLAYBACK_BLOCKED,s.ERROR,s.RECOVERABLE_ERROR,s.WORKER_ERROR,s.NETWORK_UNAVAILABLE,s.ANALYTICS_EVENT,s.PLAYBACK_RATE_CHANGED,s.QUALITY_CHANGED,s.INITIALIZED],c=e=>{var t,i,a,o,n,s;return!!r(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(o=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===o?void 0:o.canProduceScreenshare)||"ALLOWED"===(null===(s=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===s?void 0:s.canProduceVideo))},g=e=>{var t,i,a,o,n,s,d,l;return!!r(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(o=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===o?void 0:o.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(s=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===s?void 0:s.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,t,i)=>{i.d(t,{P:()=>n,s:()=>s});const a=720,o=1280,r=(e,t,i,a,o,r)=>{const n=o,s=r,d=Math.min(i/n,a/s);let l,c,g,m,v=n*d,u=s*d,y=1;return v<i&&(y=i/v),Math.abs(y-1)<1e-14&&u<a&&(y=a/u),v*=y,u*=y,g=n/(v/i),m=s/(u/a),l=.5*(n-g),c=.5*(s-m),l<0&&(l=0),c<0&&(c=0),g>n&&(g=n),m>s&&(m=s),[l,c,g,m,e,t,i,a]};var n;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(n||(n={}));const s=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=o,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(n.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(n.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(n.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const n=this.canvas.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,o,a);let s=0,d=0;for(;s<715;){let a=0;for(;a<1275&&d<i;){const i=this.tracks[d],[o,l,c,g,m,v,u,y]=r(a,s,e,t,i.videoWidth,i.videoHeight);n.drawImage(i,o,l,c,g,m,v,u,y),d+=1,a+=e}s+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[o,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const r=document.createElement("video");r.height=a,r.width=o,r.autoplay=!0,r.srcObject=this.canvas.captureStream(24),this.video=r,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===n.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===n.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}},46503:(e,t,i)=>{i.d(t,{o:()=>l,s:()=>d});var a=i(65733);const o=e=>!("isConnected"in e)||e.isConnected,r=((e,t)=>{let i;return(...a)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...a)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),n=e=>"function"==typeof e?e():e,s=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:d,onChange:l}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=n(e);let a=new Map(Object.entries(null!=i?i:{}));const o={dispose:[],get:[],set:[],reset:[]},r=()=>{var t;a=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},d=e=>(o.get.forEach((t=>t(e))),a.get(e)),l=(e,i)=>{const r=a.get(e);t(i,r,e)&&(a.set(e,i),o.set.forEach((t=>t(e,i,r))))},c="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>d(t),ownKeys:e=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>a.has(t),set:(e,t,i)=>(l(t,i),!0)}),g=(e,t)=>(o[e].push(t),()=>{s(o[e],t)});return{state:c,get:d,set:l,on:g,onChange:(t,i)=>{const a=g("set",((e,a)=>{e===t&&i(a)})),o=g("reset",(()=>i(n(e)[t])));return()=>{a(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(g("set",t.set)),t.get&&e.push(g("get",t.get)),t.reset&&e.push(g("reset",t.reset)),t.dispose&&e.push(g("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),r()},reset:r,forceUpdate:e=>{const t=a.get(e);o.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof a.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,a.a)();i&&((e,t,i)=>{const a=e.get(t);a?a.includes(i)||a.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(a.f)),r(e)},reset:()=>{e.forEach((e=>e.forEach(a.f))),r(e)}}})()),i})({})}}]);