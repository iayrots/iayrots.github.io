"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,v=u["".concat(p,".").concat(g)]||u[g]||c[g]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(67294);var a=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={sidebar_position:6},p="Events",l={unversionedId:"events",id:"events",title:"Events",description:"Local User - Events",source:"@site/docs/android/events.mdx",sourceDirName:".",slug:"/events",permalink:"/android/events",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/android/advanced-usage"},next:{title:"Sample app",permalink:"/android/sample-app"}},d={},c=[{value:"Local User - Events",id:"local-user---events",level:2},{value:"Room joined",id:"room-joined",level:3},{value:"Video update",id:"video-update",level:3},{value:"Audio update",id:"audio-update",level:3},{value:"Room disconnected update",id:"room-disconnected-update",level:3},{value:"Proximity changed",id:"proximity-changed",level:3},{value:"Waitlist status",id:"waitlist-status",level:3},{value:"Participants list events",id:"participants-list-events",level:2},{value:"Participant joined",id:"participant-joined",level:3},{value:"Participant left",id:"participant-left",level:3},{value:"Screenshare updates",id:"screenshare-updates",level:3},{value:"Grid change",id:"grid-change",level:3},{value:"Video update",id:"video-update-1",level:3},{value:"Audio update",id:"audio-update-1",level:3},{value:"Active speaker",id:"active-speaker",level:3},{value:"Pinned participant",id:"pinned-participant",level:3},{value:"Active participants list change",id:"active-participants-list-change",level:3},{value:"Receiving chat messages",id:"receiving-chat-messages",level:2},{value:"Listening to new polls in a meeting",id:"listening-to-new-polls-in-a-meeting",level:2},{value:"Recording",id:"recording",level:2},{value:"Start a recording",id:"start-a-recording",level:3},{value:"Stop a recording",id:"stop-a-recording",level:3},{value:"Get active recording state",id:"get-active-recording-state",level:3},{value:"Listen to recording state changes",id:"listen-to-recording-state-changes",level:3}],u={toc:c};function g(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"local-user---events"},"Local User - Events"),(0,a.kt)("p",null,"You can subscribe to various events on the local user by implementing\n",(0,a.kt)("inlineCode",{parentName:"p"},"DyteSelfEventsListener")," and passing the object to\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.addSelfEventsListener(dyteSelfEventsListener)"),"."),(0,a.kt)("h3",{id:"room-joined"},"Room joined"),(0,a.kt)("p",null,"Triggered when the room join event completes and now the meeting is ready to\nproduce and consume media."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onRoomJoined() {\n      super.onRoomJoined()\n    }\n});\n")),(0,a.kt)("h3",{id:"video-update"},"Video update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the video using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableVideo")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"disableVideo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onVideoUpdate(videoEnabled: Boolean) {\n      super.onVideoUpdate(videoEnabled)\n      if (videoEnabled) {\n        // video is enabled, and other participants in room can see local user\n      } else {\n        // video is disabled, and other participants in room can not see local user.\n      }\n    }\n})\n")),(0,a.kt)("h3",{id:"audio-update"},"Audio update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the audio using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableAudio")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"disableAudio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onAudioUpdate(audioEnabled: Boolean) {\n      super.onAudioUpdate(videoEnabled)\n      if (audioEnabled) {\n        // audio is enabled, and other participants in room can hear local user\n      } else {\n        // audio is disabled, and other participants in room can not hear local user.\n      }\n    }\n})\n")),(0,a.kt)("h3",{id:"room-disconnected-update"},"Room disconnected update"),(0,a.kt)("p",null,"Triggered when the user is disconnected due to media/network errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onMeetingRoomDisconnected() {\n      super.onMeetingRoomDisconnected()\n    }\n})\n")),(0,a.kt)("h3",{id:"proximity-changed"},"Proximity changed"),(0,a.kt)("p",null,"Triggered when there is any change in proximity. Meaning if device is near ear\npiece which triggers display on/off."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onProximityChanged(isNear: Boolean) {\n      super.onProximityChanged(isNear)\n      // isNear\n      // if true, display should be turned off, as user might be speaking through earpiece\n      // if false, display should be turned on, as user might be looking at display and listening through speaker/earphones.\n    }\n})\n")),(0,a.kt)("h3",{id:"waitlist-status"},"Waitlist status"),(0,a.kt)("p",null,"For meetings whose waiting room is enabled:"),(0,a.kt)("p",null,"To get status of localUser in waiting room we can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val waitListStatus = meeting.localUser.waitListStatus\n")),(0,a.kt)("p",null,"Developers can listen to those changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"onWaitListStatusUpdate()")," callbacks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onWaitListStatusUpdate(waitListStatus: WaitListStatus) {\n      super.onWaitListStatusUpdate(waitListStatus)\n    }\n});\n")),(0,a.kt)("h2",{id:"participants-list-events"},"Participants list events"),(0,a.kt)("p",null,"You can subscribe to events for all participants by implementing\n",(0,a.kt)("inlineCode",{parentName:"p"},"DyteParticipantEventsListener")," callback and then passing that object to\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.addParticipantEventsListener(dyteParticipantEventsListener)")," method.\nHere are the supported methods:"),(0,a.kt)("h3",{id:"participant-joined"},"Participant joined"),(0,a.kt)("p",null,"Triggers an event when any participant joins the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onParticipantJoin(participant: DyteMeetingParticipant) {\n            super.onParticipantJoin(participant)\n            // your code here to handle new participant\n        }\n    }\n")),(0,a.kt)("h3",{id:"participant-left"},"Participant left"),(0,a.kt)("p",null,"Triggers an event when any participant leaves the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onParticipantLeave(participant: DyteMeetingParticipant) {\n            super.onParticipantLeave(participant)\n            // your code here to handle participant left from meeting\n        }\n    }\n")),(0,a.kt)("h3",{id:"screenshare-updates"},"Screenshare updates"),(0,a.kt)("p",null,"Triggers an event when there is any change in screenshares in a meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onScreenSharesUpdated() {\n            super.onScreenSharesUpdated()\n            // your code here to handle screenshares from meeting\n            // you can use `meeting.participants.screenshares` to get latest screenshare participants\n        }\n    }\n")),(0,a.kt)("h3",{id:"grid-change"},"Grid change"),(0,a.kt)("p",null,"Whenever there is any change in ",(0,a.kt)("inlineCode",{parentName:"p"},"GridInfo")," for the room following method is\ncalled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onGridUpdated(gridInfo: GridInfo) {\n            super.onGridUpdated(gridInfo)\n            // your code here to handle grid changes.\n        }\n    }\n")),(0,a.kt)("h3",{id:"video-update-1"},"Video update"),(0,a.kt)("p",null,"Trigger an event when any participant starts / stops video."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onVideoUpdate(videoEnabled: Boolean, participant: DyteMeetingParticipant) {\n            super.onVideoUpdate(videoEnabled, participant)\n            // your code here to handle participant video toggle update\n        }\n    }\n")),(0,a.kt)("h3",{id:"audio-update-1"},"Audio update"),(0,a.kt)("p",null,"Trigger an event when any participant starts / stops audio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onAudioUpdate(audioEnabled: Boolean, participant: DyteMeetingParticipant) {\n            super.onAudioUpdate(audioEnabled, participant)\n            // your code here to handle participant audio toggle update\n        }\n    }\n")),(0,a.kt)("h3",{id:"active-speaker"},"Active speaker"),(0,a.kt)("p",null,"Trigger an event when any is change in active speaker in the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onActiveSpeakerChanged(participant: DyteMeetingParticipant) {\n            super.onActiveSpeakerChanged(participant)\n            // your code here to handle active speaker\n        }\n\n        override fun onNoActiveSpeaker() {\n            super.onNoActiveSpeaker()\n            // your code here to handle no active speaker\n        }\n    }\n")),(0,a.kt)("h3",{id:"pinned-participant"},"Pinned participant"),(0,a.kt)("p",null,"Trigger an event when any is change in pinned participant in the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onParticipantPinned(participant: DyteMeetingParticipant) {\n            super.onParticipantPinned(participant)\n            // your code here to show pinned participant\n        }\n\n        override fun onParticipantUnpinned() {\n            super.onParticipantUnpinned()\n            // your code here to remove pinned participant\n        }\n    }\n")),(0,a.kt)("h3",{id:"active-participants-list-change"},"Active participants list change"),(0,a.kt)("p",null,"Triggers an event when any is change in active participants list in the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    private val participantEventsListener = object : DyteParticipantEventsListener {\n        override fun onActiveParticipantsChanged(active: List<DyteMeetingParticipant>) {\n            super.onActiveParticipantsChanged(active)\n            // your code here to refresh active participants\n        }\n    }\n")),(0,a.kt)("h2",{id:"receiving-chat-messages"},"Receiving chat messages"),(0,a.kt)("p",null,"To be able to receive chat messages you need to implement a method\n",(0,a.kt)("inlineCode",{parentName:"p"},"onChatUpdates()")," method from callback ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeetingRoomEventsListener"),". You can\nsubscribe to this events by calling\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.addMeetingEventsListener(dyteMeetingRoomEventsListener)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    meeting.addMeetingRoomEventsListener(object :\n      DyteMeetingRoomEventsListener {\n      override fun onChatUpdates(\n        messages: List<DyteChatMessage>\n      ) {\n        super.onChatUpdates(messages)\n        // any update in chat messages\n      }\n\n      override fun onNewChatMessage(message: DyteChatMessage) {\n        super.onNewChatMessage(message)\n        // updates for new chat messages only\n      }\n    })\n")),(0,a.kt)("h2",{id:"listening-to-new-polls-in-a-meeting"},"Listening to new polls in a meeting"),(0,a.kt)("p",null,"To be able to receive new poll messages you need to implement a method\n",(0,a.kt)("inlineCode",{parentName:"p"},"onPollUpdates()")," method from callback ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeetingRoomEventsListener"),". You can\nsubscribe to this events by calling\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.addMeetingEventsListener(dyteMeetingRoomEventsListener)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"    meeting.addMeetingRoomEventsListener(object :\n      DyteMeetingRoomEventsListener {\n      override fun onNewPoll(poll: DytePollMessage) {\n        super.onNewPoll(poll)\n        // code to handle new poll\n      }\n\n      override fun onPollUpdates(pollMessages: List<DytePollMessage>) {\n        super.onPollUpdates(pollMessages)\n        // code to handle polls and their vote updates.\n      }\n    })\n")),(0,a.kt)("h2",{id:"recording"},"Recording"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording")," object can be used start and stop recordings in a\nmeeting. You can also get the current status of a recording using this API."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording")," object has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recordingState"),": Indicates the current recording state of the meeting.")),(0,a.kt)("h3",{id:"start-a-recording"},"Start a recording"),(0,a.kt)("p",null,"To start a recording, you can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording"),"\nobject. The valid states are ",(0,a.kt)("inlineCode",{parentName:"p"},"IDLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"STARTING"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RECORDING"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"STOPPING"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.recording.start();\n")),(0,a.kt)("h3",{id:"stop-a-recording"},"Stop a recording"),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording.stop()")," to stop the active recording."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.recording.stop();\n")),(0,a.kt)("h3",{id:"get-active-recording-state"},"Get active recording state"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording.recordingState")," property describes the current state of\nthe recording. The valid states are ",(0,a.kt)("inlineCode",{parentName:"p"},"IDLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"STARTING"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RECORDING"),", and\n",(0,a.kt)("inlineCode",{parentName:"p"},"STOPPING"),"."),(0,a.kt)("h3",{id:"listen-to-recording-state-changes"},"Listen to recording state changes"),(0,a.kt)("p",null,"The changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.recording.recordingState")," can be listened by\nimplementing ",(0,a.kt)("inlineCode",{parentName:"p"},"onMeetingRecordingStateUpdated")," from\n",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeetingRoomEventsListener"),". You can attach this observer by calling\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.addMeetingRoomEventsListener(listener)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addMeetingRoomEventsListener(object : DyteMeetingRoomEventsListener {\n    override fun onMeetingRecordingStarted() {\n      super.onMeetingRecordingStarted()\n      // on recording started\n    }\n\n    override fun onMeetingRecordingEnded() {\n      super.onMeetingRecordingEnded()\n      // on recording ended\n    }\n\n    override fun onMeetingRecordingStateUpdated(state: DyteRecordingState) {\n      super.onMeetingRecordingStateUpdated(state)\n      // on recording state update\n    }\n\n    override fun onMeetingRecordingStopError(e: Exception) {\n      super.onMeetingRecordingStopError(e)\n      // when local user tried to end recording but it fails\n    }\n  })\n")))}g.isMDXComponent=!0}}]);