"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[41030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var i=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Quickstart",description:"Quickstart guide for iOS mobile core.",sidebar_position:1,tags:["mobile-core","quickstart"],slug:"/"},s="iOS Core SDK Quickstart",p={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Quickstart guide for iOS mobile core.",source:"@site/docs/ios-core/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/ios-core/",draft:!1,tags:[{label:"mobile-core",permalink:"/ios-core/tags/mobile-core"},{label:"quickstart",permalink:"/ios-core/tags/quickstart"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{title:"Quickstart",description:"Quickstart guide for iOS mobile core.",sidebar_position:1,tags:["mobile-core","quickstart"],slug:"/"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/ios-core/local-user/introduction"}},c={},u=[{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:2},{value:"Step 3: Set the properties in the DyteMeetingInfo class",id:"step-3-set-the-properties-in-the-dytemeetinginfo-class",level:2},{value:"Step 4: Initialize the connection request",id:"step-4-initialize-the-connection-request",level:2},{value:"Step 5: Connect to the meeting",id:"step-5-connect-to-the-meeting",level:2},{value:"Join the room",id:"join-the-room",level:3},{value:"Leave the room",id:"leave-the-room",level:3}],m={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios-core-sdk-quickstart"},"iOS Core SDK Quickstart"),(0,i.kt)("p",null,"This quickstart shows how to use Dyte's iOS Core SDK to add live video and audio\nto your iOS applications."),(0,i.kt)("p",null,"For getting started quickly, you can use our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dyte-in/mobile-core-sample-ios"},"sample code"),". You can clone\nand run a sample application from the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dyte-in/mobile-core-sample-ios"},"iOS Core SDK GitHub repository"),"."),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"You\u2019ll learn how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the Dyte SDK"),(0,i.kt)("li",{parentName:"ul"},"Initialize the SDK"),(0,i.kt)("li",{parentName:"ul"},"Configure a Dyte meeting"),(0,i.kt)("li",{parentName:"ul"},"Initialize the Dyte meeting"),(0,i.kt)("li",{parentName:"ul"},"Go live with your Dyte meeting!")),(0,i.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you've read the\n",(0,i.kt)("a",{parentName:"li",href:"https://iayrots.github.io/getting-started"},"Getting Started with Dyte")," topic and\ncompleted the steps in the\n",(0,i.kt)("a",{parentName:"li",href:"https://iayrots.github.io/getting-started#integrate-dyte"},"Integrate Dyte")," section.\nYou must complete the following steps:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("a",{parentName:"li",href:"https://dev.dyte.io/"},"Dyte Developer Account")),(0,i.kt)("li",{parentName:"ul"},"Create ",(0,i.kt)("a",{parentName:"li",href:"https://dev.dyte.io/roles-presets"},"Presets")),(0,i.kt)("li",{parentName:"ul"},"Create a\n",(0,i.kt)("a",{parentName:"li",href:"https://iayrots.github.io/api/?v=v2#/operations/create_meeting"},"Dyte Meeting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://iayrots.github.io/api/?v=v2#/operations/add_participant"},"Add Participant"),"\nto the meeting"))),(0,i.kt)("li",{parentName:"ul"},"Install\n",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin55bqodH8AhUVQXwKHaR-DAsQFnoECA0QAQ&url=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fxcode%2Fid497799835%3Fmt%3D12&usg=AOvVaw2fEvMbfRtGhB4SPHYB54NX"},"Xcode")),(0,i.kt)("li",{parentName:"ul"},"Ensure that Rosetta is installed with Xcode on Mac computers with Apple\nsilicon."),(0,i.kt)("li",{parentName:"ul"},"Make sure your Mac computers are running macOS version 12.0 Monterey or\nhigher.")),(0,i.kt)("h2",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set your platform to iOS 13.0 or above in your Podfile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '13.0'\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add 'DyteiOSCore' to your Podfile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'DyteiOSCore' , '0.6.7'\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install the client SDK from pod.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pod install\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Add the following entries to the info.plist file. This gives permission to\nyour app to access the camera and microphone, access photos, install the\nrequired fonts and icons.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n")),(0,i.kt)("h2",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DyteMobileClient")," is the main class of the SDK. It is the main entry\npoint of the SDK. It is the only class that you need to instantiate in order\nto use the SDK. To instantiate DyteMobileClient, you should use\n",(0,i.kt)("inlineCode",{parentName:"li"},"DyteiOSClientBuilder().build()"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let meeting = DyteiOSClientBuilder().build()\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add listeners and implement callback stubs.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"meeting.addMeetingRoomEventsListener(meetingRoomEventsListener: self)\nmeeting.addParticipantEventsListener(participantEventsListener: self)\nmeeting.addSelfEventsListener(selfEventsListener: self)\nmeeting.addParticipantEventsListener(participantEventsListener: self)\nmeeting.addChatEventsListener(chatEventsListener: self)\nmeeting.addPollEventsListener(pollEventsListener: self)\nmeeting.addRecordingEventsListener(recordingEventsListener: self)\nmeeting.addWaitlistEventListener(waitlistEventListener: self)\nmeeting.addLiveStreamEventsListener(liveStreamEventsListener: self)\n")),(0,i.kt)("h2",{id:"step-3-set-the-properties-in-the-dytemeetinginfo-class"},"Step 3: Set the properties in the DyteMeetingInfo class"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," that you got from the REST API to constructor of DyteMeetingInfoV2 - ",(0,i.kt)("a",{parentName:"p",href:"https://iayrots.github.io/api#/operations/addParticipant"},"Add Participant API")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authToken")),(0,i.kt)("td",{parentName:"tr",align:null},"Token from ",(0,i.kt)("a",{parentName:"td",href:"https://iayrots.github.io/api?v=v2#/operations/add_participant"},"Add Participant API"),(0,i.kt)("br",null)," (The presetName created earlier ",(0,i.kt)("br",null)," must be passed in the body ",(0,i.kt)("br",null)," of the Add Participant API request) ",(0,i.kt)("br",null)," The API response contains the ",(0,i.kt)("inlineCode",{parentName:"td"},"authToken"),".")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let meetingInfo = DyteMeetingInfoV2(authToken: authToken,\n                                  enableAudio: true,\n                                  enableVideo: true,\n                                  baseUrl: Constants.BASE_URL)\n")),(0,i.kt)("h2",{id:"step-4-initialize-the-connection-request"},"Step 4: Initialize the connection request"),(0,i.kt)("p",null,"To initialize the connection request, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"doInit()")," method obtained on\n",(0,i.kt)("inlineCode",{parentName:"p"},"meeting")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"meetingInfo")," argument. This will establish the connection\nwith the Dyte meeting server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"meeting.doInit(dyteMeetingInfo_: meetingInfo)\n")),(0,i.kt)("h2",{id:"step-5-connect-to-the-meeting"},"Step 5: Connect to the meeting"),(0,i.kt)("p",null,"Now, you have established the connection with the Dyte meeting server\nsuccessfully. Once ",(0,i.kt)("inlineCode",{parentName:"p"},"onMeetingInitCompleted()")," is triggered, next step is to join\nthe room."),(0,i.kt)("h3",{id:"join-the-room"},"Join the room"),(0,i.kt)("p",null,"To join the meeting room, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"meeting.joinRoom()\n")),(0,i.kt)("p",null,"Join room event listeners: Once you call ",(0,i.kt)("inlineCode",{parentName:"p"},"joinRoom()"),", you can listen to\ncallbacks for this action on meeting object if you have done\n",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.addSelfEventsListener(selfEventsListener: self)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"extension MeetingViewModel: DyteSelfEventsListener {\n  func onMeetingRoomJoinStarted() {\n    // meeting join started\n  }\n\n  func onMeetingRoomJoined() {\n    // meeting room joined successfully\n  }\n\n  func onMeetingRoomJoinFailed(exception: KotlinException) {\n    // error in joining meeting room.\n  }\n}\n")),(0,i.kt)("h3",{id:"leave-the-room"},"Leave the room"),(0,i.kt)("p",null,"Once the meeting is over, you can leave the meeting room. To leave the meeting\ncall ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveRoom()")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"meeting.leaveRoom()\n")),(0,i.kt)("p",null,"Leave room event listeners: You can listen to ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveRoom()")," callbacks by\nregistering obsever on meeting object as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"extension MeetingViewModel: DyteSelfEventsListener {\n  func onMeetingRoomLeaveStarted() {\n    // meeting room leave started\n  }\n\n  func onMeetingRoomLeft() {\n    // meeting room leave completed\n  }\n}\n")))}d.isMDXComponent=!0}}]);