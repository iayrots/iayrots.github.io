"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5358],{2515:(e,t,i)=>{i.d(t,{T:()=>o});var s=i(65733);function a(e){const t=/\*([^*]*)\*/g,i=/_([^_]*)_/g,s=/~([^~]*)~/g,a=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;let o=t.exec(e);for(;o;)e=e.replace(o[0],`<b>${o[1]}</b>`),o=t.exec(e);let n=i.exec(e);for(;n;)e=e.replace(n[0],`<i>${n[1]}</i>`),n=i.exec(e);let r=s.exec(e);for(;r;)e=e.replace(r[0],`<s>${r[1]}</s>`),r=s.exec(e);return e=(e=(e=e.split(" ").map((e=>{if(a.test(e)){const t=a.exec(e);return e.replace(t[0],`<a class="link" href="${t[0]}" target="_blank" rel="noopener noreferrer">${t[0]}</a>`)}return e})).join(" ")).split("\n").map((e=>e.split(" ").map(((e,t)=>">"!==e||0!==t&&">"!==e[t-1]?e:'<span class="block-quote"></span>')).join(" "))).join("\n")).split("\n").map((e=>`<p>${e}</p>`)).join("\n")}const o=({message:e})=>(0,s.h)("p",{innerHTML:a(e)})},60804:(e,t,i)=>{i.d(t,{g:()=>o});const s={get:(e,t,i)=>(...s)=>{try{return Reflect.get(e,t,i).apply(e,s)}catch(a){return null}}};let a;try{a=new Proxy(localStorage,s)}catch(n){a=new Proxy({},s)}const o=a},24555:(e,t,i)=>{i.d(t,{P:()=>n,a:()=>s,b:()=>u,c:()=>l,d:()=>r,e:()=>d,f:()=>c,i:()=>a,s:()=>o});const s=e=>!!o(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),a=e=>{var t;return!!o(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},o=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var n,r;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(n||(n={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(r||(r={}));const d=[r.TIME_UPDATE,r.BUFFER_UPDATE,r.TEXT_METADATA_CUE,r.PLAYER_METADATA],c=[r.REBUFFERING,r.AUDIO_BLOCKED,r.PLAYBACK_BLOCKED,r.ERROR,r.RECOVERABLE_ERROR,r.WORKER_ERROR,r.NETWORK_UNAVAILABLE,r.ANALYTICS_EVENT,r.PLAYBACK_RATE_CHANGED,r.QUALITY_CHANGED,r.INITIALIZED],l=e=>{var t,i,s,a,n,r;return!!o(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(a=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"ALLOWED"===(null===(r=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===r?void 0:r.canProduceVideo))},u=e=>{var t,i,s,a,n,r,d,c;return!!o(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(a=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(r=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===r?void 0:r.canProduceVideo)||(null===(c=null===(d=null==e?void 0:e.self)||void 0===d?void 0:d.permissions)||void 0===c?void 0:c.canLivestream))}},21237:(e,t,i)=>{i.d(t,{P:()=>n,s:()=>r});const s=720,a=1280,o=(e,t,i,s,a,o)=>{const n=a,r=o,d=Math.min(i/n,s/r);let c,l,u,v,E=n*d,A=r*d,h=1;return E<i&&(h=i/E),Math.abs(h-1)<1e-14&&A<s&&(h=s/A),E*=h,A*=h,u=n/(E/i),v=r/(A/s),c=.5*(n-u),l=.5*(r-v),c<0&&(c=0),l<0&&(l=0),u>n&&(u=n),v>r&&(v=r),[c,l,u,v,e,t,i,s]};var n;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(n||(n={}));const r=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=s,e.width=a,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(n.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(n.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(n.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const n=this.canvas.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,a,s);let r=0,d=0;for(;r<715;){let s=0;for(;s<1275&&d<i;){const i=this.tracks[d],[a,c,l,u,v,E,A,h]=o(s,r,e,t,i.videoWidth,i.videoHeight);n.drawImage(i,a,c,l,u,v,E,A,h),d+=1,s+=e}r+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[a,s];case 2:return[Math.floor(640),s];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const o=document.createElement("video");o.height=s,o.width=a,o.autoplay=!0,o.srcObject=this.canvas.captureStream(24),this.video=o,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===n.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===n.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}},46503:(e,t,i)=>{i.d(t,{o:()=>c,s:()=>d});var s=i(65733);const a=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),n=e=>"function"==typeof e?e():e,r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:d,onChange:c}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=n(e);let s=new Map(Object.entries(null!=i?i:{}));const a={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;s=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),a.reset.forEach((e=>e()))},d=e=>(a.get.forEach((t=>t(e))),s.get(e)),c=(e,i)=>{const o=s.get(e);t(i,o,e)&&(s.set(e,i),a.set.forEach((t=>t(e,i,o))))},l="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>d(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(c(t,i),!0)}),u=(e,t)=>(a[e].push(t),()=>{r(a[e],t)});return{state:l,get:d,set:c,on:u,onChange:(t,i)=>{const s=u("set",((e,s)=>{e===t&&i(s)})),a=u("reset",(()=>i(n(e)[t])));return()=>{s(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{a.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=s.get(e);a.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.a)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),o(e)}}})()),i})({})}}]);