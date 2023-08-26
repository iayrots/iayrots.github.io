"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[78915,319],{78915:(e,i,t)=>{t.r(i),t.d(i,{dyte_participant_count:()=>o});var n=t(65733),a=t(96633),r=t(20336),s=t(24555);const o=class{constructor(e){(0,n.r)(this,e),this.disconnectMeeting=e=>{null!=e&&null!=this.countListener&&(e.participants.joined.removeListener("participantJoined",this.countListener),e.participants.joined.removeListener("participantLeft",this.countListener))},this.meeting=void 0,this.iconPack=a.d,this.t=(0,r.u)(),this.participantCount=0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,i){this.disconnectMeeting(i),null!=e&&(this.countListener=()=>{this.participantCount=e.participants.joined.size+(e.self.roomJoined?1:0)},this.countListener(),e.participants.joined.addListener("participantJoined",this.countListener),e.participants.joined.addListener("participantLeft",this.countListener))}render(){return(0,s.a)(this.meeting)?null:(0,n.h)(n.H,{tabIndex:0,role:"log","aria-label":`${this.participantCount} ${this.t("participants")}`},(0,n.h)("dyte-icon",{icon:this.iconPack.people,tabIndex:-1,"aria-hidden":!0,part:"icon",iconPack:this.iconPack,t:this.t}),this.participantCount)}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"},24555:(e,i,t)=>{t.d(i,{P:()=>s,a:()=>n,b:()=>E,c:()=>c,d:()=>o,e:()=>l,f:()=>d,i:()=>a,s:()=>r});const n=e=>!!r(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),a=e=>{var i;return!!r(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.canLivestream))},r=e=>{var i;return(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.isV2)&&(null==e?void 0:e.livestream)};var s,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(s||(s={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const l=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],d=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED],c=e=>{var i,t,n,a,s,o;return!!r(e)&&("ALLOWED"===(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"ALLOWED"===(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"ALLOWED"===(null===(o=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===o?void 0:o.canProduceVideo))},E=e=>{var i,t,n,a,s,o,l,d;return!!r(e)&&("NOT_ALLOWED"!==(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"NOT_ALLOWED"!==(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(o=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===o?void 0:o.canProduceVideo)||(null===(d=null===(l=null==e?void 0:e.self)||void 0===l?void 0:l.permissions)||void 0===d?void 0:d.canLivestream))}}}]);