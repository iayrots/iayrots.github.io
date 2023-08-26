"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[84509,16545],{19656:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>E,g:()=>u,i:()=>l,p:()=>c,r:()=>o,s:()=>d});var n=i(27637);let a=0;function o(){a=0}const s="temp-";function r(){return{id:`temp-${Math.random().toString(36)}`,title:"Room "+ ++a,participants:[]}}function l(e){return e.includes(s)}function d(e,t){const i=e.length,n=Math.ceil(i/t),a=new Array(t);let o=0;for(let s=0;s<t;s++)a[s]=e.slice(o,o+n),o+=n;return a.filter((e=>e.length))}function c(e){var t;return null!==(t=e.customParticipantId)&&void 0!==t?t:e.clientSpecificId}function u(e){const t=new Map;return[e.self,...e.participants.joined.toArray()].map((e=>{t.set(c(e),e.picture)})),[e.connectedMeetings.parentMeeting,...e.connectedMeetings.meetings].flatMap((e=>e.participants)).map((e=>({id:e.id,customParticipantId:c(e),displayName:e.displayName,displayPictureUrl:""!==e.displayPictureUrl?e.displayPictureUrl:t.get(c(e))})))}const E=e=>{const t=e.self.permissions.connectedMeetings;return!(!t.canAlterConnectedMeetings&&!e.connectedMeetings.isActive)&&(!(!t.canSwitchConnectedMeetings&&!t.canSwitchToParentMeeting)&&!!(0,n.i)(e))}},16545:(e,t,i)=>{i.r(t),i.d(t,{dyte_breakout_rooms_toggle:()=>l});var n=i(65733),a=i(96633),o=i(20336),s=i(46503),r=i(19656);i(27637),i(24555);const l=class{constructor(e){(0,n.r)(this,e),this.stateUpdate=(0,n.c)(this,"dyteStateUpdate",7),this.breakoutRoomToggle=()=>{var e,t,i;const n=this.meeting.connectedMeetings.isActive?"view":"create";this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(t=null===(e=this.states)||void 0===e?void 0:e.activeBreakoutRoomsManager)||void 0===t?void 0:t.active),mode:n}}),s.s.activeBreakoutRoomsManager={active:!(null===(i=s.s.activeBreakoutRoomsManager)||void 0===i?void 0:i.active),mode:n}},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,o.u)()}render(){if((0,r.c)(this.meeting))return(0,n.h)(n.H,{title:this.t("breakout_rooms")},(0,n.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.breakoutRoomToggle,icon:this.iconPack.breakout_rooms,label:this.t("breakout_rooms"),variant:this.variant}))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},27637:(e,t,i)=>{i.d(t,{F:()=>a,i:()=>o,u:()=>s});var n=i(24555);const a={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures",FEAT_CHANNEL_CHAT:"feat_channel_chat"},o=e=>e.connectedMeetings.supportsConnectedMeetings,s=e=>{var t;return"CHAT"===(null==e?void 0:e.meta.viewType)||(0,n.s)(e)||(null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature("feat_paginated_chat"))}},24555:(e,t,i)=>{i.d(t,{P:()=>s,a:()=>n,b:()=>u,c:()=>c,d:()=>r,e:()=>l,f:()=>d,i:()=>a,s:()=>o});const n=e=>!!o(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),a=e=>{var t;return!!o(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},o=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var s,r;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(s||(s={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(r||(r={}));const l=[r.TIME_UPDATE,r.BUFFER_UPDATE,r.TEXT_METADATA_CUE,r.PLAYER_METADATA],d=[r.REBUFFERING,r.AUDIO_BLOCKED,r.PLAYBACK_BLOCKED,r.ERROR,r.RECOVERABLE_ERROR,r.WORKER_ERROR,r.NETWORK_UNAVAILABLE,r.ANALYTICS_EVENT,r.PLAYBACK_RATE_CHANGED,r.QUALITY_CHANGED,r.INITIALIZED],c=e=>{var t,i,n,a,s,r;return!!o(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"ALLOWED"===(null===(r=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===r?void 0:r.canProduceVideo))},u=e=>{var t,i,n,a,s,r,l,d;return!!o(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(r=null===(s=null==e?void 0:e.self)||void 0===s?void 0:s.permissions)||void 0===r?void 0:r.canProduceVideo)||(null===(d=null===(l=null==e?void 0:e.self)||void 0===l?void 0:l.permissions)||void 0===d?void 0:d.canLivestream))}},46503:(e,t,i)=>{i.d(t,{o:()=>d,s:()=>l});var n=i(65733);const a=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let i;return(...n)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...n)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),s=e=>"function"==typeof e?e():e,r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:l,onChange:d}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=s(e);let n=new Map(Object.entries(null!=i?i:{}));const a={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;n=new Map(Object.entries(null!==(t=s(e))&&void 0!==t?t:{})),a.reset.forEach((e=>e()))},l=e=>(a.get.forEach((t=>t(e))),n.get(e)),d=(e,i)=>{const o=n.get(e);t(i,o,e)&&(n.set(e,i),a.set.forEach((t=>t(e,i,o))))},c="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>l(t),ownKeys:e=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>n.has(t),set:(e,t,i)=>(d(t,i),!0)}),u=(e,t)=>(a[e].push(t),()=>{r(a[e],t)});return{state:c,get:l,set:d,on:u,onChange:(t,i)=>{const n=u("set",((e,n)=>{e===t&&i(n)})),a=u("reset",(()=>i(s(e)[t])));return()=>{n(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{a.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=n.get(e);a.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof n.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,n.a)();i&&((e,t,i)=>{const n=e.get(t);n?n.includes(i)||n.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(n.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(n.f))),o(e)}}})()),i})({})}}]);