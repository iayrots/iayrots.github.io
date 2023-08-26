"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[60969,94167],{60969:(e,i,t)=>{t.r(i),t.d(i,{dyte_livestream_indicator:()=>r});var a=t(65733),s=(t(21237),t(24555)),n=t(96633),o=t(20336);t(60804);const r=class{constructor(e){(0,a.r)(this,e),this.setIsLivestreaming=e=>{this.isLivestreaming="LIVESTREAMING"===e},this.meeting=void 0,this.size=void 0,this.t=(0,o.u)(),this.isLivestreaming=void 0,this.iconPack=n.d}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,i;null===(i=null===(e=this.meeting)||void 0===e?void 0:e.livestream)||void 0===i||i.removeListener("livestreamUpdate",this.setIsLivestreaming)}meetingChanged(e){var i,t;null!=e&&(this.setIsLivestreaming(null===(i=this.meeting.livestream)||void 0===i?void 0:i.state),null===(t=this.meeting.livestream)||void 0===t||t.on("livestreamUpdate",this.setIsLivestreaming))}render(){if((0,s.s)(this.meeting)&&this.isLivestreaming)return(0,a.h)(a.H,null,(0,a.h)("div",{class:"indicator","aria-label":this.t("livestream.indicator"),part:"indicator"},(0,a.h)("dyte-icon",{icon:this.iconPack.start_livestream}),"LIVE"))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:block}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;min-width:var(--dyte-space-14, 56px) !important;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}"},60804:(e,i,t)=>{t.d(i,{g:()=>n});const a={get:(e,i,t)=>(...a)=>{try{return Reflect.get(e,i,t).apply(e,a)}catch(s){return null}}};let s;try{s=new Proxy(localStorage,a)}catch(o){s=new Proxy({},a)}const n=s},24555:(e,i,t)=>{t.d(i,{P:()=>o,a:()=>a,b:()=>v,c:()=>c,d:()=>r,e:()=>d,f:()=>l,i:()=>s,s:()=>n});const a=e=>!!n(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),s=e=>{var i;return!!n(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.canLivestream))},n=e=>{var i;return(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.isV2)&&(null==e?void 0:e.livestream)};var o,r;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(o||(o={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(r||(r={}));const d=[r.TIME_UPDATE,r.BUFFER_UPDATE,r.TEXT_METADATA_CUE,r.PLAYER_METADATA],l=[r.REBUFFERING,r.AUDIO_BLOCKED,r.PLAYBACK_BLOCKED,r.ERROR,r.RECOVERABLE_ERROR,r.WORKER_ERROR,r.NETWORK_UNAVAILABLE,r.ANALYTICS_EVENT,r.PLAYBACK_RATE_CHANGED,r.QUALITY_CHANGED,r.INITIALIZED],c=e=>{var i,t,a,s,o,r;return!!n(e)&&("ALLOWED"===(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"ALLOWED"===(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"ALLOWED"===(null===(r=null===(o=null==e?void 0:e.self)||void 0===o?void 0:o.permissions)||void 0===r?void 0:r.canProduceVideo))},v=e=>{var i,t,a,s,o,r,d,l;return!!n(e)&&("NOT_ALLOWED"!==(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"NOT_ALLOWED"!==(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(r=null===(o=null==e?void 0:e.self)||void 0===o?void 0:o.permissions)||void 0===r?void 0:r.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,i,t)=>{t.d(i,{P:()=>o,s:()=>r});const a=720,s=1280,n=(e,i,t,a,s,n)=>{const o=s,r=n,d=Math.min(t/o,a/r);let l,c,v,u,m=o*d,h=r*d,E=1;return m<t&&(E=t/m),Math.abs(E-1)<1e-14&&h<a&&(E=a/h),m*=E,h*=E,v=o/(m/t),u=r/(h/a),l=.5*(o-v),c=.5*(r-u),l<0&&(l=0),c<0&&(c=0),v>o&&(v=o),u>r&&(u=r),[l,c,v,u,e,i,t,a]};var o;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(o||(o={}));const r=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=s,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(o.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(o.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(o.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,i,t){if(void 0===this.canvas)return;const o=this.canvas.getContext("2d");o.fillStyle="#000000",o.fillRect(0,0,s,a);let r=0,d=0;for(;r<715;){let a=0;for(;a<1275&&d<t;){const t=this.tracks[d],[s,l,c,v,u,m,h,E]=n(a,r,e,i,t.videoWidth,t.videoHeight);o.drawImage(t,s,l,c,v,u,m,h,E),d+=1,a+=e}r+=i}}paintCanvas(){const e=this.tracks.length,[i,t]=(e=>{switch(e){case 0:case 1:return[s,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(i,t,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,i,t){this.cleanup(),this.createCanvas(),this.setupEvents(t);const n=document.createElement("video");n.height=a,n.width=s,n.autoplay=!0,n.srcObject=this.canvas.captureStream(24),this.video=n,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{i()}}catch(t){i(t.getMessage())}},this.paintCanvas()}updateMediaSession(e,i){void 0!==navigator.mediaSession&&(e===o.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(i),e===o.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(i))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),i=[];e.map((e=>{i.push(e.element)})),this.tracks=i}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,i,t){this.sources[e]={element:i,enabled:t}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);