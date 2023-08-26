"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[26991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Introduction",description:"Create, receive and interact with polls in a meeting.",sidebar_position:1,tags:["mobile-core","polls"]},s="Introduction",c={unversionedId:"polls/introduction",id:"polls/introduction",title:"Introduction",description:"Create, receive and interact with polls in a meeting.",source:"@site/docs/android-core/polls/introduction.mdx",sourceDirName:"polls",slug:"/polls/introduction",permalink:"/android-core/polls/introduction",draft:!1,tags:[{label:"mobile-core",permalink:"/android-core/tags/mobile-core"},{label:"polls",permalink:"/android-core/tags/polls"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Create, receive and interact with polls in a meeting.",sidebar_position:1,tags:["mobile-core","polls"]},sidebar:"tutorialSidebar",previous:{title:"Livestream event listeners",permalink:"/android-core/livestream/dyte-livestream-listener"},next:{title:"Creating a poll",permalink:"/android-core/polls/creating-a-poll"}},p={},d=[{value:"Listening to new polls in a meeting",id:"listening-to-new-polls-in-a-meeting",level:2}],u={toc:d};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The meetings polls object can be accessed using ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.polls"),". It provides\nmethods to create polls, vote, and more."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"meeting.polls.polls")," returns an array of all polls created in a meeting, where\neach element is an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DytePollMessage"),"."),(0,r.kt)("p",null,"The type ",(0,r.kt)("inlineCode",{parentName:"p"},"DytePollMessage")," is the main class for any poll in Dyte. It also\ncontains list of ",(0,r.kt)("inlineCode",{parentName:"p"},"DytePollOption")," which are options for a given poll. And every\n",(0,r.kt)("inlineCode",{parentName:"p"},"DytePollOption")," has list of votes inside of it. Votes are objects of class\n",(0,r.kt)("inlineCode",{parentName:"p"},"DytePollVote")," which internally has id and name of the vote."),(0,r.kt)("p",null,"One can easily create, vote and view polls by listening to callbacks on\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting")," object."),(0,r.kt)("h2",{id:"listening-to-new-polls-in-a-meeting"},"Listening to new polls in a meeting"),(0,r.kt)("p",null,"To be able to receive new poll messages you need to implement a method\n",(0,r.kt)("inlineCode",{parentName:"p"},"onPollUpdates()")," method from callback ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingRoomEventsListener"),". You can\nsubscribe to this events by calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.addMeetingEventsListener(dyteMeetingRoomEventsListener)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"    meeting.addMeetingRoomEventsListener(object :\n      DyteMeetingRoomEventsListener {\n      override fun onNewPoll(poll: DytePollMessage) {\n        super.onNewPoll(poll)\n        // code to handle new poll\n      }\n\n      override fun onPollUpdates(pollMessages: List<DytePollMessage>) {\n        super.onPollUpdates(pollMessages)\n        // code to handle polls and their vote updates.\n      }\n    })\n")))}m.isMDXComponent=!0}}]);