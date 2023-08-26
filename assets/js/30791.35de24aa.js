"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[30791],{51285:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",position:"relative",overflow:"visible",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar","activeAI"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.sm":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.md":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar","activeAI"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-stage.activeAI":{add:[["dyte-ai",{view:"sidebar"}]]},"dyte-stage.activeAI.sm":{remove:["dyte-ai"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":["dyte-name-tag","dyte-network-indicator"],"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-more-toggle":{states:["activeMoreMenu"],children:[]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-more-toggle.activeMoreMenu":[["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-recording-toggle",{variant:"horizontal",slot:"more-elements"}]],"dyte-more-toggle.activeMoreMenu.sm":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.md":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#controlbar-left":["dyte-settings-toggle","dyte-screen-share-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-more-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle","dyte-ai-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},30791:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_stage_list:()=>o});var a=i(65733),r=i(96633),n=i(20336),s=i(51285);i(21237),i(24555),i(60804);const o=class{constructor(e){(0,a.r)(this,e),this.updateParticipants=()=>{this.getParticipants(this.search)},this.shouldShowStageList=()=>{var e,t,i;"LIVESTREAM"===(null===(e=this.meeting)||void 0===e?void 0:e.meta.viewType)?this.showStageList="ON_STAGE"===(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===i?void 0:i.status):this.showStageList=!0},this.meeting=void 0,this.config=s.d,this.size=void 0,this.iconPack=r.d,this.view="sidebar",this.t=(0,n.u)(),this.search="",this.participants=[],this.showStageList=!1}connectedCallback(){this.meetingChanged(this.meeting),this.searchChanged(this.search)}disconnectedCallback(){var e,t;const{participants:i,self:a}=this.meeting;null!=this.meeting&&(this.participantJoinedListener&&this.meeting.participants.joined.removeListener("participantJoined",this.participantJoinedListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),i.joined.removeListener("peerStartedPresenting",this.updateParticipants),i.joined.removeListener("peerStoppedPresenting",this.updateParticipants),a.removeListener("stageJoined",this.updateParticipants),a.removeListener("stageLeft",this.updateParticipants),a.removeListener("removedFromStage",this.updateParticipants),null===(t=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.shouldShowStageList))}meetingChanged(e){var t;null!=e&&(this.participantJoinedListener=e=>{if("WEBINAR"===this.meeting.meta.viewType&&"ON_STAGE"!==e.webinarStageStatus)return;const t=this.search.toLowerCase();e.name.toLowerCase().includes(t)&&e.id.toLowerCase().includes(t)&&(this.participants=[...this.participants.filter((t=>t.id!==e.id)),e])},this.participantLeftListener=e=>{this.participants=this.participants.filter((t=>t.id!==e.id))},e.participants.joined.addListener("participantJoined",this.participantJoinedListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.participants.joined.addListener("peerStartedPresenting",this.updateParticipants),e.participants.joined.addListener("peerStoppedPresenting",this.updateParticipants),e.self.addListener("stageJoined",this.updateParticipants),e.self.addListener("stageLeft",this.updateParticipants),e.self.addListener("removedFromStage",this.updateParticipants),this.shouldShowStageList(),null===(t=null==e?void 0:e.stage)||void 0===t||t.on("stageStatusUpdate",this.shouldShowStageList))}searchChanged(e){this.getParticipants(e)}getParticipants(e){let t=[this.meeting.self,...this.meeting.participants.joined.toArray()];"WEBINAR"===this.meeting.meta.viewType&&(t=t.filter((e=>"ON_STAGE"===e.webinarStageStatus))),this.participants=""===e?t:t.filter((t=>{var i;return(null!==(i=t.name)&&void 0!==i?i:t.id).toLowerCase().includes(e.toLowerCase())}))}render(){if(this.showStageList)return(0,a.h)(a.H,null,(0,a.h)("div",{class:"participants-container"},(0,a.h)("div",{class:"heading-count",part:"heading-count"},this.t("participants")," (",this.participants.length,")"),(0,a.h)("ul",{class:"participants",part:"participants"},this.participants.map((e=>(0,a.h)("dyte-participant",{role:"listitem",key:e.id,meeting:this.meeting,participant:e,view:this.view,t:this.t,iconPack:this.iconPack}))),0===this.participants.length&&(0,a.h)("div",{class:"empty-message",part:"empty-message"},this.search.length>0?this.t("search.could_not_find"):this.t("search.empty")))))}static get watchers(){return{meeting:["meetingChanged"],search:["searchChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column;font-size:14px}.participants-container{margin-bottom:var(--dyte-space-4, 16px);width:100%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}dyte-participant{width:100%}"},60804:(e,t,i)=>{i.d(t,{g:()=>n});const a={get:(e,t,i)=>(...a)=>{try{return Reflect.get(e,t,i).apply(e,a)}catch(r){return null}}};let r;try{r=new Proxy(localStorage,a)}catch(s){r=new Proxy({},a)}const n=r},24555:(e,t,i)=>{i.d(t,{P:()=>s,a:()=>a,b:()=>g,c:()=>c,d:()=>o,e:()=>d,f:()=>l,i:()=>r,s:()=>n});const a=e=>!!n(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),r=e=>{var t;return!!n(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},n=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var s,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(s||(s={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const d=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],l=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED],c=e=>{var t,i,a,r,s,o;return!!n(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(r=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===r?void 0:r.canProduceScreenshare)||"ALLOWED"===(null===(o=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===o?void 0:o.canProduceVideo))},g=e=>{var t,i,a,r,s,o,d,l;return!!n(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(r=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===r?void 0:r.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(o=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===o?void 0:o.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,t,i)=>{i.d(t,{P:()=>s,s:()=>o});const a=720,r=1280,n=(e,t,i,a,r,n)=>{const s=r,o=n,d=Math.min(i/s,a/o);let l,c,g,m,v=s*d,p=o*d,h=1;return v<i&&(h=i/v),Math.abs(h-1)<1e-14&&p<a&&(h=a/p),v*=h,p*=h,g=s/(v/i),m=o/(p/a),l=.5*(s-g),c=.5*(o-m),l<0&&(l=0),c<0&&(c=0),g>s&&(g=s),m>o&&(m=o),[l,c,g,m,e,t,i,a]};var s;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(s||(s={}));const o=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=r,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(s.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(s.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(s.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const s=this.canvas.getContext("2d");s.fillStyle="#000000",s.fillRect(0,0,r,a);let o=0,d=0;for(;o<715;){let a=0;for(;a<1275&&d<i;){const i=this.tracks[d],[r,l,c,g,m,v,p,h]=n(a,o,e,t,i.videoWidth,i.videoHeight);s.drawImage(i,r,l,c,g,m,v,p,h),d+=1,a+=e}o+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[r,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const n=document.createElement("video");n.height=a,n.width=r,n.autoplay=!0,n.srcObject=this.canvas.captureStream(24),this.video=n,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===s.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===s.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);