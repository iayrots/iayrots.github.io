(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27531],{53538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DyteAi:()=>u,DyteAiCaption:()=>p,DyteAiChat:()=>g,DyteAiHome:()=>m,DyteAiToggle:()=>f,DyteAiTranscriptions:()=>h,DyteAudioVisualizer:()=>D,DyteAvatar:()=>v,DyteBreakoutRoomManager:()=>b,DyteBreakoutRoomParticipants:()=>k,DyteBreakoutRoomsManager:()=>T,DyteBreakoutRoomsToggle:()=>w,DyteBroadcastMessageModal:()=>C,DyteButton:()=>S,DyteCameraToggle:()=>P,DyteChannelCreator:()=>O,DyteChannelDetails:()=>j,DyteChannelHeader:()=>L,DyteChannelSelectorUi:()=>N,DyteChat:()=>M,DyteChatComposerUi:()=>E,DyteChatMessage:()=>A,DyteChatMessagesUi:()=>x,DyteChatMessagesUiPaginated:()=>I,DyteChatSearchResults:()=>_,DyteChatSelectorUi:()=>R,DyteChatToggle:()=>U,DyteClock:()=>z,DyteConfirmationModal:()=>B,DyteControlbar:()=>F,DyteControlbarButton:()=>J,DyteCounter:()=>V,DyteDialog:()=>G,DyteDialogManager:()=>W,DyteEmojiPicker:()=>Z,DyteEndedScreen:()=>H,DyteFileMessage:()=>q,DyteFullscreenToggle:()=>Q,DyteGrid:()=>$,DyteGridPagination:()=>K,DyteHeader:()=>X,DyteIcon:()=>Y,DyteIdleScreen:()=>ee,DyteImageMessage:()=>te,DyteImageViewer:()=>ne,DyteJoinStage:()=>oe,DyteLeaveButton:()=>ie,DyteLeaveMeeting:()=>re,DyteLivestreamIndicator:()=>ae,DyteLivestreamPlayer:()=>se,DyteLivestreamToggle:()=>ce,DyteLogo:()=>le,DyteMeeting:()=>ye,DyteMeetingTitle:()=>de,DyteMenu:()=>ue,DyteMenuItem:()=>pe,DyteMenuList:()=>ge,DyteMicToggle:()=>me,DyteMixedGrid:()=>fe,DyteMoreToggle:()=>he,DyteMuteAllButton:()=>De,DyteMuteAllConfirmation:()=>ve,DyteNameTag:()=>be,DyteNetworkIndicator:()=>ke,DyteNotification:()=>Te,DyteNotifications:()=>we,DyteNotificationsAudio:()=>Tt.D,DyteOverlayModal:()=>Ce,DytePaginatedList:()=>Se,DyteParticipant:()=>Pe,DyteParticipantCount:()=>Oe,DyteParticipantSetup:()=>je,DyteParticipantTile:()=>Le,DyteParticipants:()=>Ne,DyteParticipantsAudio:()=>Me,DyteParticipantsStageList:()=>Ee,DyteParticipantsStageQueue:()=>Ae,DyteParticipantsToggle:()=>xe,DyteParticipantsViewerList:()=>Ie,DyteParticipantsWaitingList:()=>_e,DytePermissionsMessage:()=>Re,DytePipToggle:()=>Ue,DytePluginMain:()=>ze,DytePlugins:()=>Be,DytePluginsToggle:()=>Fe,DytePoll:()=>Je,DytePollForm:()=>Ve,DytePolls:()=>Ge,DytePollsToggle:()=>We,DyteRecordingIndicator:()=>Ze,DyteRecordingToggle:()=>He,DyteRemoteAccessManager:()=>qe,DyteScreenShareToggle:()=>Qe,DyteScreenshareView:()=>$e,DyteSettings:()=>Ke,DyteSettingsAudio:()=>Xe,DyteSettingsToggle:()=>Ye,DyteSettingsVideo:()=>et,DyteSetupScreen:()=>tt,DyteSidebar:()=>nt,DyteSimpleGrid:()=>ot,DyteSpinner:()=>it,DyteSpotlightGrid:()=>rt,DyteSpotlightIndicator:()=>at,DyteStage:()=>st,DyteStageToggle:()=>ct,DyteSwitch:()=>lt,DyteTabBar:()=>yt,DyteTextField:()=>dt,DyteTextMessage:()=>ut,DyteTooltip:()=>pt,DyteUiProvider:()=>gt,DyteViewerCount:()=>mt,DyteWaitingScreen:()=>ft,DyteWebinarStageToggle:()=>ht,defaultConfig:()=>vt.d,defaultIconPack:()=>bt.d,defaultLanguage:()=>kt.d,extendConfig:()=>Dt.e,generateConfig:()=>Dt.g,provideDyteDesignSystem:()=>Dt.p,sendNotification:()=>wt});var o=n(67294);const i=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),r=(e,t,n)=>{const o=t.className||t.class,i=n.className||n.class,r=c(e),a=c(o?o.split(" "):[]),s=c(i?i.split(" "):[]),l=[];return r.forEach((e=>{a.has(e)?(l.push(e),a.delete(e)):s.has(e)||l.push(e)})),a.forEach((e=>l.push(e))),l.join(" ")},a=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let n=t in document;if(!n){const e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},s=(e,t,n)=>{const o=e.__events||(e.__events={}),i=o[t];i&&e.removeEventListener(t,i),e.addEventListener(t,o[t]=function(e){n&&n.call(this,e)})},c=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},l=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))};var y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};const d=(e,t,n,c)=>{void 0!==c&&c();const d=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const u=class extends o.Component{constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){((e,t,n={})=>{if(e instanceof Element){const o=r(e.classList,t,n);""!==o&&(e.className=o),Object.keys(t).forEach((n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const o=n.substring(2),i=o[0].toLowerCase()+o.substring(1);a(i)||s(e,i,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(i(n),t[n])}))}})(this.componentEl,this.props,e)}render(){const t=this.props,{children:r,forwardedRef:s,style:c,className:d,ref:u}=t,p=y(t,["children","forwardedRef","style","className","ref"]);let g=Object.keys(p).reduce(((e,t)=>{const n=p[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const o=t.substring(2).toLowerCase();"undefined"!=typeof document&&a(o)&&(e[t]=n)}else{const o=typeof n;"string"!==o&&"boolean"!==o&&"number"!==o||(e[i(t)]=n)}return e}),{});n&&(g=n(this.props,g));const m=Object.assign(Object.assign({},g),{ref:l(s,this.setComponentElRef),style:c});return(0,o.createElement)(e,m,r)}static get displayName(){return d}};return t&&(u.contextType=t),((e,t)=>{const n=(t,n)=>o.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,o.forwardRef(n)})(u,d)};n(73935);(0,n(55604).q)();const u=d("dyte-ai"),p=d("dyte-ai-caption"),g=d("dyte-ai-chat"),m=d("dyte-ai-home"),f=d("dyte-ai-toggle"),h=d("dyte-ai-transcriptions"),D=d("dyte-audio-visualizer"),v=d("dyte-avatar"),b=d("dyte-breakout-room-manager"),k=d("dyte-breakout-room-participants"),T=d("dyte-breakout-rooms-manager"),w=d("dyte-breakout-rooms-toggle"),C=d("dyte-broadcast-message-modal"),S=d("dyte-button"),P=d("dyte-camera-toggle"),O=d("dyte-channel-creator"),j=d("dyte-channel-details"),L=d("dyte-channel-header"),N=d("dyte-channel-selector-ui"),M=d("dyte-chat"),E=d("dyte-chat-composer-ui"),A=d("dyte-chat-message"),x=d("dyte-chat-messages-ui"),I=d("dyte-chat-messages-ui-paginated"),_=d("dyte-chat-search-results"),R=d("dyte-chat-selector-ui"),U=d("dyte-chat-toggle"),z=d("dyte-clock"),B=d("dyte-confirmation-modal"),F=d("dyte-controlbar"),J=d("dyte-controlbar-button"),V=d("dyte-counter"),G=d("dyte-dialog"),W=d("dyte-dialog-manager"),Z=d("dyte-emoji-picker"),H=d("dyte-ended-screen"),q=d("dyte-file-message"),Q=d("dyte-fullscreen-toggle"),$=d("dyte-grid"),K=d("dyte-grid-pagination"),X=d("dyte-header"),Y=d("dyte-icon"),ee=d("dyte-idle-screen"),te=d("dyte-image-message"),ne=d("dyte-image-viewer"),oe=d("dyte-join-stage"),ie=d("dyte-leave-button"),re=d("dyte-leave-meeting"),ae=d("dyte-livestream-indicator"),se=d("dyte-livestream-player"),ce=d("dyte-livestream-toggle"),le=d("dyte-logo"),ye=d("dyte-meeting"),de=d("dyte-meeting-title"),ue=d("dyte-menu"),pe=d("dyte-menu-item"),ge=d("dyte-menu-list"),me=d("dyte-mic-toggle"),fe=d("dyte-mixed-grid"),he=d("dyte-more-toggle"),De=d("dyte-mute-all-button"),ve=d("dyte-mute-all-confirmation"),be=d("dyte-name-tag"),ke=d("dyte-network-indicator"),Te=d("dyte-notification"),we=d("dyte-notifications"),Ce=d("dyte-overlay-modal"),Se=d("dyte-paginated-list"),Pe=d("dyte-participant"),Oe=d("dyte-participant-count"),je=d("dyte-participant-setup"),Le=d("dyte-participant-tile"),Ne=d("dyte-participants"),Me=d("dyte-participants-audio"),Ee=d("dyte-participants-stage-list"),Ae=d("dyte-participants-stage-queue"),xe=d("dyte-participants-toggle"),Ie=d("dyte-participants-viewer-list"),_e=d("dyte-participants-waiting-list"),Re=d("dyte-permissions-message"),Ue=d("dyte-pip-toggle"),ze=d("dyte-plugin-main"),Be=d("dyte-plugins"),Fe=d("dyte-plugins-toggle"),Je=d("dyte-poll"),Ve=d("dyte-poll-form"),Ge=d("dyte-polls"),We=d("dyte-polls-toggle"),Ze=d("dyte-recording-indicator"),He=d("dyte-recording-toggle"),qe=d("dyte-remote-access-manager"),Qe=d("dyte-screen-share-toggle"),$e=d("dyte-screenshare-view"),Ke=d("dyte-settings"),Xe=d("dyte-settings-audio"),Ye=d("dyte-settings-toggle"),et=d("dyte-settings-video"),tt=d("dyte-setup-screen"),nt=d("dyte-sidebar"),ot=d("dyte-simple-grid"),it=d("dyte-spinner"),rt=d("dyte-spotlight-grid"),at=d("dyte-spotlight-indicator"),st=d("dyte-stage"),ct=d("dyte-stage-toggle"),lt=d("dyte-switch"),yt=d("dyte-tab-bar"),dt=d("dyte-text-field"),ut=d("dyte-text-message"),pt=d("dyte-tooltip"),gt=d("dyte-ui-provider"),mt=d("dyte-viewer-count"),ft=d("dyte-waiting-screen"),ht=d("dyte-webinar-stage-toggle");var Dt=n(59489),vt=n(51285),bt=n(96633),kt=n(20336),Tt=n(91007);n(57037),n(49797),n(21237),n(19656),n(27637),n(24555),n(86386),n(85114),n(60804);const wt=(e,t)=>{if("undefined"==typeof document)return!1;const n=new CustomEvent("dyteNotification",{detail:Object.assign(Object.assign({},e),{playSound:t}),composed:!0});return document.dispatchEvent(n)}},57037:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,d:()=>i,e:()=>l,g:()=>r,h:()=>a,i:()=>c,p:()=>o,r:()=>y});n(85114);const o=e=>{let t=null;try{const n=JSON.parse(e.message),{target:o,message:i}=n;t=void 0===o||void 0===i?e:Object.assign(Object.assign({},e),{targetUserIds:o,message:i})}catch(n){t=e}return t};function i(e,t){return e.localeCompare(t)}function r(e){return e.sort(((e,t)=>e.localeCompare(t))).join("_")}function a(e,t){if(null!=e)for(const n of e)if("file"===n.kind){const e=n.getAsFile();n.type.startsWith("image/")?t("image",e):t("file",e)}}const s="dm__";function c(e){return e.isDirectMessage}function l(e){return[...new Set(e)].sort(i).join("<>")}function y(e){return e.split("").reverse().join("")}},86386:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});const o=console},91007:(e,t,n)=>{"use strict";n.d(t,{D:()=>r});var o=n(86386);const i={joined:"https://dyte-uploads.s3.ap-south-1.amazonaws.com/notification_join.mp3",left:"https://dyte-uploads.s3.ap-south-1.amazonaws.com/notification_join.mp3",message:"https://dyte-uploads.s3.ap-south-1.amazonaws.com/notification_message.mp3"};class r{constructor(){this.audio=document.createElement("audio"),this.audio.volume=.3}play(e,t=3e3){var n;this.playing||(this.playing=!0,this.audio.src=i[e],this.audio.volume=.3,null===(n=this.audio.play())||void 0===n||n.catch((n=>{o.l.error("[dyte-notifications] play() failed\n",{sound:e,duration:t},n)})),setTimeout((()=>{this.playing=!1}),t))}async setDevice(e){var t,n,i;await(null===(i=null===(n=null===(t=this.audio)||void 0===t?void 0:t.setSinkId)||void 0===n?void 0:n.call(t,e))||void 0===i?void 0:i.catch((e=>{o.l.error("[dyte-notifications] setSinkId() error\n",e)})))}}},85114:(e,t,n)=>{"use strict";n.d(t,{a:()=>a,c:()=>c,g:()=>s,s:()=>r});var o=n(60804);const i="dyte-prefs",r=(e,t)=>{const n=JSON.parse(o.g.getItem(i)||"{}");n[e]=JSON.stringify(t),o.g.setItem("dyte-prefs",JSON.stringify(n))},a=e=>JSON.parse(o.g.getItem(i)||"{}")[e],s=()=>{const e=JSON.parse(o.g.getItem(i)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},c={}},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g,lG:()=>a});var o=n(87410);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=n(67294),a={Prism:o.Z,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}var l=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,o=Object.create(null),i=e.styles.reduce((function(e,n){var o=n.languages,i=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],i);e[t]=n})),e}),o);return i.root=n,i.plain=c({},n,{backgroundColor:null}),i};function p(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,i=e.style,r=c({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(r.style=a.plain),void 0!==i&&(r.style=void 0!==r.style?c({},r.style,i):i),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,i=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===i&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===i&&!o)return r[n[0]];var a=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[a].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,i=e.style,r=e.token,a=c({},p(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==i&&(a.style=void 0!==a.style?c({},a.style,i):i),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"tokenize",(function(e,t,n,o){var i={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",i);var r=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,i=e.children,r=this.getThemeDict(this.props),a=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],o=[0],i=[e.length],r=0,a=0,s=[],c=[s];a>-1;){for(;(r=o[a]++)<i[a];){var u=void 0,p=t[a],g=n[a][r];if("string"==typeof g?(p=a>0?p:["plain"],u=g):(p=d(p,g.type),g.alias&&(p=d(p,g.alias)),u=g.content),"string"==typeof u){var m=u.split(l),f=m.length;s.push({types:p,content:m[0]});for(var h=1;h<f;h++)y(s),c.push(s=[]),s.push({types:p,content:m[h]})}else a++,t.push(p),n.push(u),o.push(0),i.push(u.length)}a--,t.pop(),n.pop(),o.pop(),i.pop()}return y(s),c}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)},34155:e=>{var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:r}catch(e){n=r}}();var s,c=[],l=!1,y=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):y=-1,c.length&&u())}function u(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++y<t;)s&&s[y].run();y=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(u)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},30950:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(67294),i=n(30358);function r({children:e,fallback:t}){return(0,i.Z)()?o.createElement(o.Fragment,null,null==e?void 0:e()):null!=t?t:null}}}]);