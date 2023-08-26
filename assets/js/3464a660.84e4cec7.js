"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[83454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Participant Events",description:"Event handling for participants.",sidebar_position:3,tags:["web-core","participants","self"]},c=void 0,l={unversionedId:"participants/events",id:"participants/events",title:"Participant Events",description:"Event handling for participants.",source:"@site/docs/web-core/participants/events.mdx",sourceDirName:"participants",slug:"/participants/events",permalink:"/web-core/participants/events",draft:!1,tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"participants",permalink:"/web-core/tags/participants"},{label:"self",permalink:"/web-core/tags/self"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:3,frontMatter:{title:"Participant Events",description:"Event handling for participants.",sidebar_position:3,tags:["web-core","participants","self"]},sidebar:"tutorialSidebar",previous:{title:"The participant object",permalink:"/web-core/participants/participant-object"},next:{title:"Introducing chat",permalink:"/web-core/chat/introduction"}},s={},d=[{value:"Events",id:"events",level:2},{value:"View mode change",id:"view-mode-change",level:3},{value:"Page change",id:"page-change",level:3},{value:"Active speaker",id:"active-speaker",level:3},{value:"Events on all participants",id:"events-on-all-participants",level:2},{value:"Participant joined",id:"participant-joined",level:3},{value:"Participant left",id:"participant-left",level:3},{value:"Participant pinned",id:"participant-pinned",level:3},{value:"Participant unpinned",id:"participant-unpinned",level:3},{value:"Video update",id:"video-update",level:3},{value:"Audio update",id:"audio-update",level:3},{value:"Screen share update",id:"screen-share-update",level:3},{value:"Network quality score",id:"network-quality-score",level:2},{value:"Events for specific participant",id:"events-for-specific-participant",level:2},{value:"Webinar events",id:"webinar-events",level:3}],u={toc:d};function g(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"You can subscribe to events for all participants using\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.participants.on()")," method. Here are the supported events:"),(0,a.kt)("h3",{id:"view-mode-change"},"View mode change"),(0,a.kt)("p",null,"Triggered when the View mode changes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on(\n  'viewModeChanged',\n  ({ viewMode, currentPage, pageCount }) => {\n    console.log('view mode changed', viewMode);\n  }\n);\n")),(0,a.kt)("h3",{id:"page-change"},"Page change"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on(\n  'pageChanged',\n  ({ viewMode, currentPage, pageCount }) => {\n    console.log('page changed', currentPage);\n  }\n);\n")),(0,a.kt)("h3",{id:"active-speaker"},"Active speaker"),(0,a.kt)("p",null,"This event is triggered when a participant becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," when they starts to\nspeak."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on('activeSpeaker', (participant) => {\n  console.log(`${participant.id} is currently speaking`);\n});\n")),(0,a.kt)("h2",{id:"events-on-all-participants"},"Events on all participants"),(0,a.kt)("p",null,"Instead of subscribing to individual participant events, you can subscribe to a\nparticipant map, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"joined")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," and get updated when any of the\nparticipant emits an event."),(0,a.kt)("p",null,"If you want to subscribe to participants when they become ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", you can do\nso by subscribing to ",(0,a.kt)("inlineCode",{parentName:"p"},"meetings.participants.active.on('participantJoined')")),(0,a.kt)("h3",{id:"participant-joined"},"Participant joined"),(0,a.kt)("p",null,"Trigger an event when any participant joins the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('participantJoined', (participant) => {\n  console.log(`A participant with id \"${participant.id}\" has joined`);\n});\n")),(0,a.kt)("h3",{id:"participant-left"},"Participant left"),(0,a.kt)("p",null,"Trigger an event when any participant leaves the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('participantLeft', (participant) => {\n  console.log(`A participant with id \"${participant.id}\" has left the meeting`);\n});\n")),(0,a.kt)("h3",{id:"participant-pinned"},"Participant pinned"),(0,a.kt)("p",null,"Trigger an event when a participant is pinned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('pinned', (participant) => {\n  console.log(`Participant with id \"${participant.id}\" was pinned`);\n});\n")),(0,a.kt)("h3",{id:"participant-unpinned"},"Participant unpinned"),(0,a.kt)("p",null,"Trigger an event when a participant is unpinned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('unpinned', (participant) => {\n  console.log(`Participant with id \"${participant.id}\" was unpinned`);\n});\n")),(0,a.kt)("h3",{id:"video-update"},"Video update"),(0,a.kt)("p",null,"Trigger an event when any participant starts / stops video."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('videoUpdate', (participant) => {\n  console.log(\n    `A participant with id \"${participant.id}\" updated their video track in the meeting`\n  );\n  // Use the video track if it exists\n  if (participant.videoEnabled) {\n    // participant.videoTrack\n  } else {\n    // handle stop video\n  }\n});\n")),(0,a.kt)("h3",{id:"audio-update"},"Audio update"),(0,a.kt)("p",null,"Trigger an event when any participant starts / stops audio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('audioUpdate', (participant) => {\n  console.log(\n    `A participant with id \"${participant.id}\" updated their audio track in the meeting`\n  );\n  // Use the audio track if it exists\n  if (participant.audioEnabled) {\n    // participant.audioTrack\n  } else {\n    // handle stop audio\n  }\n});\n")),(0,a.kt)("h3",{id:"screen-share-update"},"Screen share update"),(0,a.kt)("p",null,"Trigger an event when any participant starts / stops screen share."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('screenShareUpdate', (participant) => {\n  console.log(\n    `A participant with id \"${participant.id}\" updated their screen share in the meeting`\n  );\n  // Use the screen share track if it exists\n  if (participant.screenShareEnabled) {\n    // participant.screenShareTrack\n  } else {\n    // handle stop screen share\n  }\n});\n")),(0,a.kt)("h2",{id:"network-quality-score"},"Network quality score"),(0,a.kt)("p",null,"Subscribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaScoreUpdate")," event to monitor network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on(\n  'mediaScoreUpdate',\n  ({ participantId, kind, isScreenshare, score }) => {\n    if (kind === 'video') {\n      console.log(\n        `Participant ${participantId}'s ${\n          isScreenshare ? 'screenshare' : 'video'\n        } quality score is `,\n        score\n      );\n    }\n\n    if (kind === 'audio') {\n      console.log(\n        `Participant ${participantId}'s audio quality score is `,\n        score\n      );\n    }\n\n    if (score < 5) {\n      console.log(`Participant ${participantId}'s media quality is poor`);\n    }\n  }\n);\n")),(0,a.kt)("h2",{id:"events-for-specific-participant"},"Events for specific participant"),(0,a.kt)("p",null,"If you want to subscribe to above events but for a specific participant only,\nyou can do so by binding event to ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.participants.joined.get(peerId).on()"),"\nmethod. where the ",(0,a.kt)("inlineCode",{parentName:"p"},"peerId")," is the id of the participant that you want to watch."),(0,a.kt)("h3",{id:"webinar-events"},"Webinar events"),(0,a.kt)("p",null,"Here is a list of events that can are emitted for a participants in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBINAR"),"\nsetup."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Event")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerRequestToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a user has requested to join the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerRejectedToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been rejected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerAcceptedToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been accepted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerStoppedPresenting")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a participant stops presenting in the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerStartedPresenting")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a participant starts presenting in the webinar meeting.")))))}g.isMDXComponent=!0}}]);