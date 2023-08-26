"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[90220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,v=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(v,p(p({ref:t},s),{},{components:n})):a.createElement(v,p({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Participant Events",description:"Event handling for participants.",sidebar_position:3,tags:["flutter-core","participants","self"]},c=void 0,l={unversionedId:"participants/events",id:"participants/events",title:"Participant Events",description:"Event handling for participants.",source:"@site/docs/flutter-core/participants/events.mdx",sourceDirName:"participants",slug:"/participants/events",permalink:"/flutter-core/participants/events",draft:!1,tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"participants",permalink:"/flutter-core/tags/participants"},{label:"self",permalink:"/flutter-core/tags/self"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:3,frontMatter:{title:"Participant Events",description:"Event handling for participants.",sidebar_position:3,tags:["flutter-core","participants","self"]},sidebar:"tutorialSidebar",previous:{title:"The participant object",permalink:"/flutter-core/participants/participant-object"},next:{title:"Introducing chat",permalink:"/flutter-core/chat/introduction"}},s={},d=[{value:"Participant joined",id:"participant-joined",level:2},{value:"Participant updated",id:"participant-updated",level:2},{value:"Participant left",id:"participant-left",level:2},{value:"Video update",id:"video-update",level:2},{value:"Video view",id:"video-view",level:2},{value:"Audio update",id:"audio-update",level:2},{value:"Screen share update",id:"screen-share-update",level:2},{value:"Screen share participants list",id:"screen-share-participants-list",level:2},{value:"Screen share view",id:"screen-share-view",level:2},{value:"Active Participants changed",id:"active-participants-changed",level:2}],u={toc:d};function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"participant-joined"},"Participant joined"),(0,a.kt)("p",null,"Trigger an event when any participant joins the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class ParticipantsEventListener extends DytePartcipantEventsListener {\n  ...\n  @override\n  void onParticipantJoin(DyteMeetingParticipant participant) {\n    // your code here to handle new participant\n  }\n  ...\n}\n")),(0,a.kt)("h2",{id:"participant-updated"},"Participant updated"),(0,a.kt)("p",null,"Trigger an event when any participant update in meeting. For example, when a participant changes their name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onParticipantUpdated(DyteMeetingParticipant participant) {\n         // your code here to handle new participant\n}\n\n...\n")),(0,a.kt)("h2",{id:"participant-left"},"Participant left"),(0,a.kt)("p",null,"Trigger an event when any participant leaves the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onParticipantLeave(DyteMeetingParticipant participant) {\n         // your code here to handle participant left from meeting\n}\n\n...\n")),(0,a.kt)("h2",{id:"video-update"},"Video update"),(0,a.kt)("p",null,"Trigger an event when any participant starts or stops the video."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onVideoUpdate({\n required bool videoEnabled,\n required DyteMeetingParticipant participant,\n}) {\n         // your code here to handle participant video toggle update\n}\n\n...\n")),(0,a.kt)("h2",{id:"video-view"},"Video view"),(0,a.kt)("p",null,"To access the video view of a participant, create an object of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VideoView")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// To show the video of a participant\nfinal videoView = VideoView(meetingParticipant: participant);\n// To get video view for a local user\nfinal selfVideoView = VideoView(isSelfTrue: true);\n")),(0,a.kt)("h2",{id:"audio-update"},"Audio update"),(0,a.kt)("p",null,"Triggers an event when a participant starts or stops the audio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onAudioUpdate({\n required bool audioEnabled,\n required DyteMeetingParticipant participant,\n}) {\n    // your code here to handle participant audio toggle update\n}\n\n...\n")),(0,a.kt)("h2",{id:"screen-share-update"},"Screen share update"),(0,a.kt)("p",null,"Triggers an event when a participant starts or stops screen share."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onScreenShareStarted(DyteMeetingParticipant participant) {\n  /// handle screen share started of `DyteMeetingParticipant` participant\n}\n\n@override\nvoid onScreenShareEnded(DyteMeetingParticipant participant) {\n  /// handle screen share ended of `DyteMeetingParticipant` participant\n}\n\n...\n")),(0,a.kt)("h2",{id:"screen-share-participants-list"},"Screen share participants list"),(0,a.kt)("p",null,"Obtain the list of the screenshare participants, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"participants.screenshares")," function which returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteRoomParticipants")," object that maintains a record of participants who have joined, pinned, and screenshared. This object updates with each ",(0,a.kt)("inlineCode",{parentName:"p"},"onUpdate")," call."),(0,a.kt)("h2",{id:"screen-share-view"},"Screen share view"),(0,a.kt)("p",null,"To get the screenshare widget, create an object of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScreenshareView")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// To show screenshare of a participant\nfinal screenshareView = ScreenShareView(meetingParticipant);\n")),(0,a.kt)("h2",{id:"active-participants-changed"},"Active Participants changed"),(0,a.kt)("p",null,"This event is triggered when the active participant changes, for example, when the user moves to the next page of participants. It provides the list of participants on the current page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"...\n\n@override\nvoid onActiveParticipantsChanged(List<DyteMeetingParticipant> active) {\n  /// handle active participants changed\n}\n\n...\n")),(0,a.kt)("p",null,"Other callbacks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{fontSize:"1em",fontWeight:"bold"}},"onActiveSpeakerChanged(DyteMeetingParticipant participant)"),": Triggered when active speaker is changed to ",(0,a.kt)("code",null,"participant"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{fontSize:"1em",fontWeight:"bold"}},"onNoActiveSpeaker()"),": Triggered when there is no active participant."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{fontSize:"1em",fontWeight:"bold"}},"onParticipantPinned(DyteMeetingParticipant participant)"),": Triggered when the ",(0,a.kt)("code",null,"participant")," is pinned."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{fontSize:"1em",fontWeight:"bold"}},"onParticipantUnpinned(DyteMeetingParticipant participant)"),": Trigerred when participant is unpinned.")))}h.isMDXComponent=!0}}]);