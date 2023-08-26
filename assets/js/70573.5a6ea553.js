"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[70573],{70573:(e,t,s)=>{s.r(t),s.d(t,{dyte_chat_toggle:()=>d});var a=s(65733),i=s(96633),n=s(20336),r=s(46503),o=s(27637),l=s(64734);s(24555);const d=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onChatUpdate=({action:e,message:t})=>{var s;this.chatActive||"add"===e&&t.userId!==(null===(s=this.meeting)||void 0===s?void 0:s.self.userId)&&(this.hasNewMessages=!0,this.unreadMessageCount+=1)},this.toggleChat=()=>{const e=this.states||r.s;this.chatActive=!((null==e?void 0:e.activeSidebar)&&"chat"===(null==e?void 0:e.sidebar)),this.chatActive&&(this.unreadMessageCount=0,this.hasNewMessages=!1),r.s.activeSidebar=this.chatActive,r.s.activeMoreMenu=!1,r.s.sidebar=this.chatActive?"chat":"none",this.stateUpdate.emit({activeSidebar:this.chatActive,sidebar:this.chatActive?"chat":"none",activeMoreMenu:!1,activeAI:!1})},this.updateCanView=()=>{this.canViewChat=(0,l.c)(this.meeting)},this.unreadMessageCount=0,this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,n.u)(),this.chatActive=!1,this.canViewChat=!1,this.hasNewMessages=!1}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,r.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var e,t,s,a;null===(t=null===(e=this.meeting)||void 0===e?void 0:e.chat)||void 0===t||t.removeListener("chatUpdate",this.onChatUpdate),null===(a=null===(s=this.meeting)||void 0===s?void 0:s.stage)||void 0===a||a.removeListener("stageStatusUpdate",this.updateCanView)}meetingChanged(e){var t,s,a,i;null!=e&&((0,o.u)(e)&&(null===(t=e.chat)||void 0===t||t.getMessages((new Date).getTime(),1,!0).then((e=>{var t;(null===(t=null==e?void 0:e.messages)||void 0===t?void 0:t.length)&&(this.hasNewMessages=!0)}))),this.unreadMessageCount=(null===(s=e.chat)||void 0===s?void 0:s.messages.length)||0,null===(a=e.chat)||void 0===a||a.addListener("chatUpdate",this.onChatUpdate),this.canViewChat=(0,l.c)(e),null===(i=null==e?void 0:e.stage)||void 0===i||i.on("stageStatusUpdate",this.updateCanView))}statesChanged(e){const t=e||r.s;null!=t&&(this.chatActive=!0===t.activeSidebar&&"chat"===t.sidebar)}render(){if(this.canViewChat)return(0,a.h)(a.H,{title:this.t("chat")},(0,o.u)(this.meeting)?this.hasNewMessages&&(0,a.h)("div",{class:"unread-count-dot",part:"unread-count-dot"}):0!==this.unreadMessageCount&&!this.chatActive&&(0,a.h)("div",{class:"unread-count",part:"unread-count"},(0,a.h)("span",null,this.unreadMessageCount<=100?this.unreadMessageCount:"99+")),(0,a.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.chatActive},onClick:this.toggleChat,icon:this.iconPack.chat,label:this.t("chat"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}.unread-count-dot{position:absolute;right:var(--dyte-space-3, 12px);z-index:10;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));border-radius:50%;display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}"},27637:(e,t,s)=>{s.d(t,{F:()=>i,i:()=>n,u:()=>r});var a=s(24555);const i={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures",FEAT_CHANNEL_CHAT:"feat_channel_chat"},n=e=>e.connectedMeetings.supportsConnectedMeetings,r=e=>{var t;return"CHAT"===(null==e?void 0:e.meta.viewType)||(0,a.s)(e)||(null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature("feat_paginated_chat"))}},24555:(e,t,s)=>{s.d(t,{P:()=>r,a:()=>a,b:()=>u,c:()=>c,d:()=>o,e:()=>l,f:()=>d,i:()=>i,s:()=>n});const a=e=>!!n(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),i=e=>{var t;return!!n(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},n=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const l=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],d=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED],c=e=>{var t,s,a,i,r,o;return!!n(e)&&("ALLOWED"===(null===(s=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===s?void 0:s.canProduceAudio)||"ALLOWED"===(null===(i=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===i?void 0:i.canProduceScreenshare)||"ALLOWED"===(null===(o=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===o?void 0:o.canProduceVideo))},u=e=>{var t,s,a,i,r,o,l,d;return!!n(e)&&("NOT_ALLOWED"!==(null===(s=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===s?void 0:s.canProduceAudio)||"NOT_ALLOWED"!==(null===(i=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===i?void 0:i.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(o=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===o?void 0:o.canProduceVideo)||(null===(d=null===(l=null==e?void 0:e.self)||void 0===l?void 0:l.permissions)||void 0===d?void 0:d.canLivestream))}},64734:(e,t,s)=>{s.d(t,{a:()=>r,b:()=>o,c:()=>i,d:()=>n});var a=s(24555);const i=e=>{if(e&&!e.chat)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:a}=e.self.permissions;return s.canSend||s.text||s.files||a.canSend||a.canReceive||a.files||a.text},n=e=>{if(e&&!e.polls)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.polls)return!1;const{polls:s}=e.self.permissions;return s.canCreate||s.canView||s.canVote},r=e=>{var t,s;if((0,a.s)(e)&&!(null===(t=e.self.permissions)||void 0===t?void 0:t.acceptPresentRequests))return!1;if(e&&!e.participants)return!1;if("LIVESTREAM"===e.meta.viewType)return e.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(s=null==e?void 0:e.stage)||void 0===s?void 0:s.status);const i=null==e?void 0:e.self.config;return!(i&&!i.controlBar.elements.participants)},o=e=>{if((0,a.a)(e))return!1;if(e&&!e.plugins)return!1;if("LIVESTREAM"===e.meta.viewType)return"ON_STAGE"===e.stage.status;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.plugins)return!1;const{plugins:s}=e.self.permissions;return s.canClose||s.canStart}},46503:(e,t,s)=>{s.d(t,{o:()=>d,s:()=>l});var a=s(65733);const i=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...a)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...a)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(i))}),2e3),r=e=>"function"==typeof e?e():e,o=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:l,onChange:d}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=r(e);let a=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{var t;a=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),i.reset.forEach((e=>e()))},l=e=>(i.get.forEach((t=>t(e))),a.get(e)),d=(e,s)=>{const n=a.get(e);t(s,n,e)&&(a.set(e,s),i.set.forEach((t=>t(e,s,n))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>a.has(t),set:(e,t,s)=>(d(t,s),!0)}),u=(e,t)=>(i[e].push(t),()=>{o(i[e],t)});return{state:c,get:l,set:d,on:u,onChange:(t,s)=>{const a=u("set",((e,a)=>{e===t&&s(a)})),i=u("reset",(()=>s(r(e)[t])));return()=>{a(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=a.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof a.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,a.a)();s&&((e,t,s)=>{const a=e.get(t);a?a.includes(s)||a.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(a.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(a.f))),n(e)}}})()),s})({})}}]);