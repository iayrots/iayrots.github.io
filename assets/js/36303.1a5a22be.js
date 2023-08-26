"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[36303],{51285:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",position:"relative",overflow:"visible",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar","activeAI"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.sm":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.md":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar","activeAI"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-stage.activeAI":{add:[["dyte-ai",{view:"sidebar"}]]},"dyte-stage.activeAI.sm":{remove:["dyte-ai"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":["dyte-name-tag","dyte-network-indicator"],"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-more-toggle":{states:["activeMoreMenu"],children:[]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-more-toggle.activeMoreMenu":[["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-recording-toggle",{variant:"horizontal",slot:"more-elements"}]],"dyte-more-toggle.activeMoreMenu.sm":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.md":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}]],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#controlbar-left":["dyte-settings-toggle","dyte-screen-share-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-more-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle","dyte-ai-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},36303:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_stage_queue:()=>o});var a=i(65733),s=i(51285),n=(i(21237),i(24555),i(96633)),r=i(20336);i(60804);const o=class{constructor(e){(0,a.r)(this,e),this.peerPresentingUpdateListener=()=>{this.stageRequestedParticipants=[this.meeting.self,...this.meeting.participants.joined.toArray()].filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus))},this.updateStageRequestedParticipants=()=>{this.stageRequestedParticipants=this.meeting.participants.joined.toArray().filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus))},this.acceptStageRequest=async e=>{if("WEBINAR"===this.meeting.meta.viewType){const{id:t}=e,i=this.meeting.participants.joined.get(t);void 0!==i&&await i.acceptJoinStageRequest(),this.updateStageRequestedParticipants()}else if("LIVESTREAM"===this.meeting.meta.viewType){const{userId:t}=e;await this.meeting.stage.grantAccess([t])}},this.rejectStageRequest=async e=>{if("WEBINAR"===this.meeting.meta.viewType){const{id:t}=e,i=this.meeting.participants.joined.get(t);void 0!==i&&await i.rejectRequestToJoinStage(),this.updateStageRequestedParticipants()}else if("LIVESTREAM"===this.meeting.meta.viewType){const{userId:t}=e;await this.meeting.stage.denyAccess([t])}},this.acceptAllStageRequest=async()=>{if("WEBINAR"===this.meeting.meta.viewType){const e=this.meeting.participants.joined.toArray().filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus)).map((e=>({id:e.id,requestToJoinType:"REQUEST_TO_PRESENT"})));await this.meeting.participants.acceptAllRequestToJoinStageRequests(e),this.updateStageRequestedParticipants()}else"LIVESTREAM"===this.meeting.meta.viewType&&await this.meeting.stage.grantAccess(this.stageRequestedParticipants.map((e=>e.userId)))},this.denyAllStageRequest=async()=>{var e;if("WEBINAR"===this.meeting.meta.viewType){const e=this.meeting.participants.joined.toArray().filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus));await Promise.all(e.map((async e=>await e.rejectRequestToJoinStage()))),this.updateStageRequestedParticipants()}else"LIVESTREAM"===this.meeting.meta.viewType&&await(null===(e=this.meeting.stage)||void 0===e?void 0:e.denyAccess(this.stageRequestedParticipants.map((e=>e.userId))))},this.shouldShowStageRequests=()=>this.meeting.self.permissions.acceptPresentRequests&&this.stageRequestedParticipants.length>0,this.updateRequestList=async e=>{var t,i,a,s;"WEBINAR"===this.meeting.meta.viewType?this.stageRequestedParticipants=null===(t=[this.meeting.self,...this.meeting.participants.joined.toArray()])||void 0===t?void 0:t.filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus)):"LIVESTREAM"===this.meeting.meta.viewType&&(e||(e=null!==(s=null===(a=await(null===(i=this.meeting.stage)||void 0===i?void 0:i.getAccessRequests()))||void 0===a?void 0:a.stageRequests)&&void 0!==s?s:[]),this.stageRequestedParticipants=e.map((e=>Object.assign(Object.assign({},e),{name:e.displayName}))))},this.meeting=void 0,this.config=s.d,this.size=void 0,this.iconPack=n.d,this.view="sidebar",this.t=(0,r.u)(),this.stageRequestedParticipants=[]}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){const{participants:e,self:t}=this.meeting;this.participantLeftListener&&e.joined.removeListener("participantLeft",this.participantLeftListener),this.peerRequestToJoinStageListener&&e.joined.removeListener("peerRequestToJoinStage",this.peerRequestToJoinStageListener),this.peerAcceptedToJoinStageListener&&e.joined.removeListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),this.peerRejectedToJoinStageListener&&e.joined.removeListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener),e.joined.removeListener("peerStartedPresenting",this.peerPresentingUpdateListener),e.joined.removeListener("peerStoppedPresenting",this.peerPresentingUpdateListener),t.removeListener("stageJoined",this.peerPresentingUpdateListener),t.removeListener("stageLeft",this.peerPresentingUpdateListener),t.removeListener("removedFromStage",this.peerPresentingUpdateListener)}meetingChanged(e){var t;null!=e&&(this.participantLeftListener=e=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!==e.id))},this.peerRequestToJoinStageListener=({id:t})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((e=>e.id!=t));const i=e.participants.joined.get(t);void 0!==i&&(this.stageRequestedParticipants=[...this.stageRequestedParticipants,i])},this.peerAcceptedToJoinStageListener=({id:e})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!=e))},this.peerRejectedToJoinStageListener=({id:e})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!=e))},this.updateRequestList(),e.participants.joined.addListener("peerRequestToJoinStage",this.peerRequestToJoinStageListener),e.participants.joined.addListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),e.participants.joined.addListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener),e.participants.joined.addListener("peerStartedPresenting",this.peerPresentingUpdateListener),e.participants.joined.addListener("peerStoppedPresenting",this.peerPresentingUpdateListener),null===(t=e.stage)||void 0===t||t.on("stageAccessRequestUpdate",this.updateRequestList),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.self.addListener("stageJoined",this.peerPresentingUpdateListener),e.self.addListener("stageLeft",this.peerPresentingUpdateListener),e.self.addListener("removedFromStage",this.peerPresentingUpdateListener))}render(){if("sidebar"===this.view&&this.shouldShowStageRequests())return(0,a.h)("div",{class:"stage-requested-participants"},(0,a.h)("div",{class:"heading-count",part:"staged-heading-count"},this.t("stage_request.header_title")," (",this.stageRequestedParticipants.length,")"),(0,a.h)("ul",{class:"participants",part:"staged-participants"},this.stageRequestedParticipants.map((e=>(0,a.h)("li",{class:"waiting-participant",key:e.id},(0,a.h)("div",{class:"participant-details"},(0,a.h)("dyte-avatar",{participant:e,size:"sm",iconPack:this.iconPack,t:this.t}),(0,a.h)("p",{class:"name",title:e.name},e.name)),(0,a.h)("div",{class:"waitlist-controls"},(0,a.h)("dyte-tooltip",{label:this.t("stage_request.deny_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>this.rejectStageRequest(e),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{class:"deny",icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t}))),(0,a.h)("dyte-tooltip",{label:this.t("stage_request.accept_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>this.acceptStageRequest(e)},(0,a.h)("dyte-icon",{class:"accept",icon:this.iconPack.checkmark})))))))),(0,a.h)("div",{class:"bulk-actions"},(0,a.h)("dyte-button",{class:"accept-all-button",variant:"secondary",iconPack:this.iconPack,t:this.t,onClick:this.acceptAllStageRequest},this.t("stage_request.accept_all")),(0,a.h)("dyte-button",{class:"deny-all-button",variant:"danger",iconPack:this.iconPack,t:this.t,onClick:this.denyAllStageRequest},this.t("stage_request.deny_all"))))}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:column;font-size:14px}.stage-requested-participants{margin-bottom:var(--dyte-space-8, 32px)}.stage-requested-participants .bulk-actions{display:flex;gap:var(--dyte-space-2, 8px)}.stage-requested-participants .bulk-actions .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.stage-requested-participants .bulk-actions dyte-button{flex:1 1 0%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},60804:(e,t,i)=>{i.d(t,{g:()=>n});const a={get:(e,t,i)=>(...a)=>{try{return Reflect.get(e,t,i).apply(e,a)}catch(s){return null}}};let s;try{s=new Proxy(localStorage,a)}catch(r){s=new Proxy({},a)}const n=s},24555:(e,t,i)=>{i.d(t,{P:()=>r,a:()=>a,b:()=>g,c:()=>c,d:()=>o,e:()=>d,f:()=>l,i:()=>s,s:()=>n});const a=e=>!!n(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),s=e=>{var t;return!!n(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},n=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const d=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],l=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED],c=e=>{var t,i,a,s,r,o;return!!n(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"ALLOWED"===(null===(o=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===o?void 0:o.canProduceVideo))},g=e=>{var t,i,a,s,r,o,d,l;return!!n(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(o=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===o?void 0:o.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,t,i)=>{i.d(t,{P:()=>r,s:()=>o});const a=720,s=1280,n=(e,t,i,a,s,n)=>{const r=s,o=n,d=Math.min(i/r,a/o);let l,c,g,p,h=r*d,m=o*d,v=1;return h<i&&(v=i/h),Math.abs(v-1)<1e-14&&m<a&&(v=a/m),h*=v,m*=v,g=r/(h/i),p=o/(m/a),l=.5*(r-g),c=.5*(o-p),l<0&&(l=0),c<0&&(c=0),g>r&&(g=r),p>o&&(p=o),[l,c,g,p,e,t,i,a]};var r;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(r||(r={}));const o=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=s,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(r.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(r.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(r.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const r=this.canvas.getContext("2d");r.fillStyle="#000000",r.fillRect(0,0,s,a);let o=0,d=0;for(;o<715;){let a=0;for(;a<1275&&d<i;){const i=this.tracks[d],[s,l,c,g,p,h,m,v]=n(a,o,e,t,i.videoWidth,i.videoHeight);r.drawImage(i,s,l,c,g,p,h,m,v),d+=1,a+=e}o+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[s,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const n=document.createElement("video");n.height=a,n.width=s,n.autoplay=!0,n.srcObject=this.canvas.captureStream(24),this.video=n,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===r.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===r.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);