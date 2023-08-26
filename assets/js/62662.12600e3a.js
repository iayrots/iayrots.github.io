"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[62662,64902],{62662:(e,a,t)=>{t.r(a),t.d(a,{dyte_channel_details:()=>s});var i=t(65733),r=(t(21237),t(24555),t(96633)),o=t(20336);t(60804);const s=class{constructor(e){(0,i.r)(this,e),this.channel=void 0,this.t=(0,o.u)(),this.iconPack=r.d,this.members=[]}renderMembers(){return(0,i.h)("ul",{class:"scrollbar"},this.members.map((e=>(0,i.h)("li",null,(0,i.h)("dyte-avatar",{participant:{name:e.name,picture:e.picture},size:"sm"}),(0,i.h)("span",null,e.name)))))}render(){return(0,i.h)(i.H,null,(0,i.h)("header",null,this.t("chat.channel_members")),this.renderMembers())}};s.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-72, 288px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px)}header{font-size:20px}dyte-spinner{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);margin-left:auto;margin-right:auto}ul{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-6, 24px);margin-bottom:var(--dyte-space-4, 16px);height:var(--dyte-space-48, 192px);padding:var(--dyte-space-0, 0px);overflow-y:auto;list-style-type:none;display:flex;flex-direction:column;gap:var(--dyte-space-2, 8px)}ul li{margin-right:var(--dyte-space-2, 8px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}ul li:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}ul li dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}"},60804:(e,a,t)=>{t.d(a,{g:()=>o});const i={get:(e,a,t)=>(...i)=>{try{return Reflect.get(e,a,t).apply(e,i)}catch(r){return null}}};let r;try{r=new Proxy(localStorage,i)}catch(s){r=new Proxy({},i)}const o=r},24555:(e,a,t)=>{t.d(a,{P:()=>s,a:()=>i,b:()=>v,c:()=>c,d:()=>n,e:()=>d,f:()=>l,i:()=>r,s:()=>o});const i=e=>!!o(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),r=e=>{var a;return!!o(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions.canLivestream))},o=e=>{var a;return(null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions.isV2)&&(null==e?void 0:e.livestream)};var s,n;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(s||(s={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(n||(n={}));const d=[n.TIME_UPDATE,n.BUFFER_UPDATE,n.TEXT_METADATA_CUE,n.PLAYER_METADATA],l=[n.REBUFFERING,n.AUDIO_BLOCKED,n.PLAYBACK_BLOCKED,n.ERROR,n.RECOVERABLE_ERROR,n.WORKER_ERROR,n.NETWORK_UNAVAILABLE,n.ANALYTICS_EVENT,n.PLAYBACK_RATE_CHANGED,n.QUALITY_CHANGED,n.INITIALIZED],c=e=>{var a,t,i,r,s,n;return!!o(e)&&("ALLOWED"===(null===(t=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===t?void 0:t.canProduceAudio)||"ALLOWED"===(null===(r=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===r?void 0:r.canProduceScreenshare)||"ALLOWED"===(null===(n=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===n?void 0:n.canProduceVideo))},v=e=>{var a,t,i,r,s,n,d,l;return!!o(e)&&("NOT_ALLOWED"!==(null===(t=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===t?void 0:t.canProduceAudio)||"NOT_ALLOWED"!==(null===(r=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===r?void 0:r.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(n=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===n?void 0:n.canProduceVideo)||(null===(l=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===l?void 0:l.canLivestream))}},21237:(e,a,t)=>{t.d(a,{P:()=>s,s:()=>n});const i=720,r=1280,o=(e,a,t,i,r,o)=>{const s=r,n=o,d=Math.min(t/s,i/n);let l,c,v,u,p=s*d,h=n*d,m=1;return p<t&&(m=t/p),Math.abs(m-1)<1e-14&&h<i&&(m=i/h),p*=m,h*=m,v=s/(p/t),u=n/(h/i),l=.5*(s-v),c=.5*(n-u),l<0&&(l=0),c<0&&(c=0),v>s&&(v=s),u>n&&(u=n),[l,c,v,u,e,a,t,i]};var s;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(s||(s={}));const n=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=i,e.width=r,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(s.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(s.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(s.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,a,t){if(void 0===this.canvas)return;const s=this.canvas.getContext("2d");s.fillStyle="#000000",s.fillRect(0,0,r,i);let n=0,d=0;for(;n<715;){let i=0;for(;i<1275&&d<t;){const t=this.tracks[d],[r,l,c,v,u,p,h,m]=o(i,n,e,a,t.videoWidth,t.videoHeight);s.drawImage(t,r,l,c,v,u,p,h,m),d+=1,i+=e}n+=a}}paintCanvas(){const e=this.tracks.length,[a,t]=(e=>{switch(e){case 0:case 1:return[r,i];case 2:return[Math.floor(640),i];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(a,t,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,a,t){this.cleanup(),this.createCanvas(),this.setupEvents(t);const o=document.createElement("video");o.height=i,o.width=r,o.autoplay=!0,o.srcObject=this.canvas.captureStream(24),this.video=o,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{a()}}catch(t){a(t.getMessage())}},this.paintCanvas()}updateMediaSession(e,a){void 0!==navigator.mediaSession&&(e===s.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(a),e===s.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(a))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),a=[];e.map((e=>{a.push(e.element)})),this.tracks=a}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,a,t){this.sources[e]={element:a,enabled:t}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);