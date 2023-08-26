"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47506],{51285:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",position:"relative",overflow:"visible",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar","activeAI"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.sm":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.md":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar","activeAI"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-stage.activeAI":{add:[["dyte-ai",{view:"sidebar"}]]},"dyte-stage.activeAI.sm":{remove:["dyte-ai"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":["dyte-name-tag","dyte-network-indicator"],"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-more-toggle":{states:["activeMoreMenu"],children:[]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-more-toggle.activeMoreMenu":[["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-recording-toggle",{variant:"horizontal",slot:"more-elements"}]],"dyte-more-toggle.activeMoreMenu.sm":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.md":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#controlbar-left":["dyte-settings-toggle","dyte-screen-share-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-more-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle","dyte-ai-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},47506:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_waiting_list:()=>s});var a=i(65733),n=i(51285),o=(i(21237),i(24555),i(96633)),r=i(20336);i(60804);const s=class{constructor(e){(0,a.r)(this,e),this.acceptWaitingRoomRequest=async e=>{await this.meeting.participants.acceptWaitingRoomRequest(e)},this.acceptAllWaitingRoomRequests=async()=>{const e=this.waitlistedParticipants.map((e=>this.meeting.participants.acceptWaitingRoomRequest(e.id)));await Promise.all(e)},this.rejectWaitingRoomRequest=async e=>{await this.meeting.participants.rejectWaitingRoomRequest(e)},this.shouldShowWaitlist=()=>"LIVESTREAM"!==this.meeting.meta.viewType&&(this.meeting.self.permissions.acceptWaitingRequests&&0!==this.waitlistedParticipants.length),this.meeting=void 0,this.config=n.d,this.size=void 0,this.iconPack=o.d,this.view="sidebar",this.t=(0,r.u)(),this.waitlistedParticipants=[]}disconnectedCallback(){const{participants:e}=this.meeting;this.waitlistedParticipantJoinedListener&&e.waitlisted.removeListener("participantJoined",this.waitlistedParticipantJoinedListener),this.waitlistedParticipantLeftListener&&e.waitlisted.removeListener("participantLeft",this.waitlistedParticipantLeftListener)}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(e){null!=e&&(this.waitlistedParticipants=e.participants.waitlisted.toArray(),this.waitlistedParticipantJoinedListener=e=>{this.waitlistedParticipants.some((t=>t.id===e.id))||(this.waitlistedParticipants=[...this.waitlistedParticipants,e])},this.waitlistedParticipantLeftListener=e=>{this.waitlistedParticipants=this.waitlistedParticipants.filter((t=>t.id!==e.id))},e.participants.waitlisted.addListener("participantJoined",this.waitlistedParticipantJoinedListener),e.participants.waitlisted.addListener("participantLeft",this.waitlistedParticipantLeftListener))}render(){if("sidebar"===this.view&&this.shouldShowWaitlist())return(0,a.h)("div",{class:"waiting-participants"},(0,a.h)("div",{class:"heading-count",part:"waitlisted-heading-count"},this.t("waitlist.header_title")," (",this.waitlistedParticipants.length,")"),(0,a.h)("ul",{class:"participants",part:"waitlisted-participants"},this.waitlistedParticipants.map((e=>(0,a.h)("li",{class:"waiting-participant",key:e.id},(0,a.h)("div",{class:"participant-details"},(0,a.h)("dyte-avatar",{participant:e,size:"sm",iconPack:this.iconPack,t:this.t}),(0,a.h)("p",{class:"name",title:e.name},e.name)),(0,a.h)("div",{class:"waitlist-controls"},(0,a.h)("dyte-tooltip",{label:this.t("waitlist.deny_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>this.rejectWaitingRoomRequest(e.id)},(0,a.h)("dyte-icon",{class:"deny",icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t}))),(0,a.h)("dyte-tooltip",{label:this.t("waitlist.accept_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>this.acceptWaitingRoomRequest(e.id)},(0,a.h)("dyte-icon",{class:"accept",icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t})))))))),(0,a.h)("dyte-button",{class:"accept-all-button",variant:"secondary",kind:"wide",iconPack:this.iconPack,t:this.t,onClick:this.acceptAllWaitingRoomRequests},this.t("waitlist.accept_all")))}static get watchers(){return{meeting:["meetingChanged"]}}};s.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-4, 16px);margin-bottom:calc(var(--dyte-space-2, 8px) * -1);display:flex;width:100%;flex-direction:column;font-size:14px}.waiting-participants{margin-bottom:var(--dyte-space-8, 32px)}.waiting-participants .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},60804:(e,t,i)=>{i.d(t,{g:()=>o});const a={get:(e,t,i)=>(...a)=>{try{return Reflect.get(e,t,i).apply(e,a)}catch(n){return null}}};let n;try{n=new Proxy(localStorage,a)}catch(r){n=new Proxy({},a)}const o=n},24555:(e,t,i)=>{i.d(t,{P:()=>r,a:()=>a,b:()=>g,c:()=>c,d:()=>s,e:()=>d,f:()=>l,i:()=>n,s:()=>o});const a=e=>!!o(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),n=e=>{var t;return!!o(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},o=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,s;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(s||(s={}));const d=[s.TIME_UPDATE,s.BUFFER_UPDATE,s.TEXT_METADATA_CUE,s.PLAYER_METADATA],l=[s.REBUFFERING,s.AUDIO_BLOCKED,s.PLAYBACK_BLOCKED,s.ERROR,s.RECOVERABLE_ERROR,s.WORKER_ERROR,s.NETWORK_UNAVAILABLE,s.ANALYTICS_EVENT,s.PLAYBACK_RATE_CHANGED,s.QUALITY_CHANGED,s.INITIALIZED],c=e=>{var t,i,a,n,r,s;return!!o(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(n=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===n?void 0:n.canProduceScreenshare)||"ALLOWED"===(null===(s=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===s?void 0:s.canProduceVideo))},g=e=>{var t,i,a,n,r,s,d,l;return!!o(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(n=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===n?void 0:n.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(s=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===s?void 0:s.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,t,i)=>{i.d(t,{P:()=>r,s:()=>s});const a=720,n=1280,o=(e,t,i,a,n,o)=>{const r=n,s=o,d=Math.min(i/r,a/s);let l,c,g,p,m=r*d,v=s*d,h=1;return m<i&&(h=i/m),Math.abs(h-1)<1e-14&&v<a&&(h=a/v),m*=h,v*=h,g=r/(m/i),p=s/(v/a),l=.5*(r-g),c=.5*(s-p),l<0&&(l=0),c<0&&(c=0),g>r&&(g=r),p>s&&(p=s),[l,c,g,p,e,t,i,a]};var r;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(r||(r={}));const s=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=n,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(r.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(r.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(r.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const r=this.canvas.getContext("2d");r.fillStyle="#000000",r.fillRect(0,0,n,a);let s=0,d=0;for(;s<715;){let a=0;for(;a<1275&&d<i;){const i=this.tracks[d],[n,l,c,g,p,m,v,h]=o(a,s,e,t,i.videoWidth,i.videoHeight);r.drawImage(i,n,l,c,g,p,m,v,h),d+=1,a+=e}s+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[n,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const o=document.createElement("video");o.height=a,o.width=n,o.autoplay=!0,o.srcObject=this.canvas.captureStream(24),this.video=o,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===r.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===r.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);