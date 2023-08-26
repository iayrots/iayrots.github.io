"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[70217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={title:"Livestream event listeners",description:"Livestream events to listen to for triggering",sidebar_position:3,tags:["flutter-core","livestream"]},l=void 0,p={unversionedId:"livestream/dyte-livestream-listener",id:"livestream/dyte-livestream-listener",title:"Livestream event listeners",description:"Livestream events to listen to for triggering",source:"@site/docs/android-core/livestream/dyte-livestream-listener.mdx",sourceDirName:"livestream",slug:"/livestream/dyte-livestream-listener",permalink:"/android-core/livestream/dyte-livestream-listener",draft:!1,tags:[{label:"flutter-core",permalink:"/android-core/tags/flutter-core"},{label:"livestream",permalink:"/android-core/tags/livestream"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:3,frontMatter:{title:"Livestream event listeners",description:"Livestream events to listen to for triggering",sidebar_position:3,tags:["flutter-core","livestream"]},sidebar:"tutorialSidebar",previous:{title:"Livestream objects & methods",permalink:"/android-core/livestream/dyte-livestream-object"},next:{title:"Introduction",permalink:"/android-core/polls/introduction"}},d={},c=[{value:"Livestream events",id:"livestream-events",level:2}],u={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can listen to livestream events by attaching a listener by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"addLivestreamEventsListener")," on ",(0,n.kt)("inlineCode",{parentName:"p"},"dyteMobileClient")," object where ",(0,n.kt)("inlineCode",{parentName:"p"},"dyteMobileClient")," is an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"DyteMobileClient()"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val dyteLiveStreamEventsListener = object : DyteLiveStreamEventsListener {\n  override fun onLiveStreamStarting() {\n    // when livestream is starting\n  }\n\n  override fun onLiveStreamStarted() {\n    // when livestream is started\n  }\n\n  override fun onLiveStreamEnding() {\n    // when livestream is ending\n  }\n\n  override fun onLiveStreamEnded() {\n    // when livestream is ended\n  }\n\n  override fun onLiveStreamErrored() {\n    // errored livestream\n  }\n\n  override fun onViewerCountUpdated(count: Int) {\n    // when viewer count updates in livestream\n  }\n\n  override fun onStageCountUpdated(count: Int) {\n    // when stage count updates in livestream\n  }\n\n  override fun onStageRequestsUpdated(requests: List<LiveStreamStageRequestPeer>) {\n    // when there are updates in stage requests\n  }\n\n  override fun onJoinRequestAccepted(peer: LiveStreamStagePeer) {\n    // when localUser's join request is accepted by host\n  }\n\n  override fun onJoinRequestRejected(peer: LiveStreamStagePeer) {\n    // when localUser's join request is rejected by host\n  }\n\n  override fun onLiveStreamStateUpdate(data: DyteLivestreamData) {\n    // when there is an update in state of the livestream\n  }\n}\nmeeting.addLiveStreamEventsListener(dyteLiveStreamEventsListener)\n")),(0,n.kt)("h2",{id:"livestream-events"},"Livestream events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamstarting"},"onLiveStreamStarting"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the livestream is about to start.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamstarted"},"onLiveStreamStarted"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the livestream has started.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamstateupdate"},"onLiveStreamStateUpdate"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the livestream state is updated. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onviewercountupdated"},"onViewerCountUpdated"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the viewer count is updated. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamending"},"onLiveStreamEnding"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the livestream is about to end.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamended"},"onLiveStreamEnded"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the livestream has ended.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onlivestreamerrored"},"onLiveStreamErrored"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when their is an error while starting/stopping the livestream.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onstagecountupdated"},"onStageCountUpdated"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the number of users on stage is updated. The ",(0,n.kt)("inlineCode",{parentName:"p"},"count")," object contains the updated stage count.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onstagerequestsupdated"},"onStageRequestsUpdated"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when the stage requests are updated. The ",(0,n.kt)("inlineCode",{parentName:"p"},"requests")," object contains the updated list of stage requests. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onjoinrequestaccepted"},"onJoinRequestAccepted"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when a stage request is accepted. The ",(0,n.kt)("inlineCode",{parentName:"p"},"peer")," object contains the peer whose request is accepted."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"  void onJoinRequestAccepted(DyteLiveStreamStagePeer peer) {}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"onjoinrequestrejected"},"onJoinRequestRejected"),(0,n.kt)("p",{parentName:"li"},"This event is triggered when a stage request is rejected. The ",(0,n.kt)("inlineCode",{parentName:"p"},"peer")," object contains the peer whose request is rejected."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"  void onJoinRequestRejected(DyteLiveStreamStagePeer peer) {}\n")))))}m.isMDXComponent=!0}}]);