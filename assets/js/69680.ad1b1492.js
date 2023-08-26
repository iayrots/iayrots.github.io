"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69680],{19656:(t,e,a)=>{a.d(e,{a:()=>r,c:()=>g,g:()=>h,i:()=>c,p:()=>l,r:()=>o,s:()=>d});var i=a(27637);let s=0;function o(){s=0}const n="temp-";function r(){return{id:`temp-${Math.random().toString(36)}`,title:"Room "+ ++s,participants:[]}}function c(t){return t.includes(n)}function d(t,e){const a=t.length,i=Math.ceil(a/e),s=new Array(e);let o=0;for(let n=0;n<e;n++)s[n]=t.slice(o,o+i),o+=i;return s.filter((t=>t.length))}function l(t){var e;return null!==(e=t.customParticipantId)&&void 0!==e?e:t.clientSpecificId}function h(t){const e=new Map;return[t.self,...t.participants.joined.toArray()].map((t=>{e.set(l(t),t.picture)})),[t.connectedMeetings.parentMeeting,...t.connectedMeetings.meetings].flatMap((t=>t.participants)).map((t=>({id:t.id,customParticipantId:l(t),displayName:t.displayName,displayPictureUrl:""!==t.displayPictureUrl?t.displayPictureUrl:e.get(l(t))})))}const g=t=>{const e=t.self.permissions.connectedMeetings;return!(!e.canAlterConnectedMeetings&&!t.connectedMeetings.isActive)&&(!(!e.canSwitchConnectedMeetings&&!e.canSwitchToParentMeeting)&&!!(0,i.i)(t))}},69680:(t,e,a)=>{a.r(e),a.d(e,{dyte_breakout_rooms_manager:()=>E});var i,s,o,n,r,c,d,l,h,g,p,u,m,f,b,y=a(65733),v=a(20336),k=a(96633),M=a(46503),P=a(19656),w=(a(27637),a(24555),function(t,e,a,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,a):s?s.value=a:e.set(t,a),a}),x=function(t,e,a,i){if("a"===a&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?i:"a"===a?i.call(t):i?i.value:e.get(t)},C=function(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(a[i[s]]=t[i[s]])}return a};class _{constructor(){i.add(this),s.set(this,!1),o.set(this,void 0),n.set(this,void 0),r.set(this,void 0),c.set(this,void 0),d.set(this,void 0),l.set(this,void 0),h.set(this,void 0),g.set(this,void 0)}get hasLocalChanges(){return x(this,s,"f")}get currentState(){let t,e=[];return Array.from(x(this,c,"f").keys()).forEach((a=>{const s=x(this,l,"f").get(a);s.isParent?t=Object.assign(Object.assign({},s),{participants:x(this,i,"m",b).call(this,a)}):e.push(Object.assign(Object.assign({},s),{participants:x(this,i,"m",b).call(this,a)}))})),{parentMeeting:t,meetings:e}}get allConnectedMeetings(){return this.currentState.meetings.sort(((t,e)=>t.title.localeCompare(e.title)))}get allParticipants(){return Array.from(x(this,d,"f").values())}get unassignedParticipants(){return x(this,i,"m",b).call(this,x(this,o,"f").parentMeeting.id)}getParticipantsForMeeting(t){return x(this,i,"m",b).call(this,t)}addNewMeeting(){w(this,s,!0,"f");const t=(0,P.a)(),e=C(t,["participants"]);return x(this,i,"m",u).call(this,Object.assign(Object.assign({},e),{isParent:!1})),e}addNewMeetings(t){return Array.from({length:t}).map((()=>this.addNewMeeting()))}updateMeetingTitle(t,e){x(this,l,"f").get(t).title=e,(0,P.i)(t)||x(this,h,"f").add(t)}deleteMeeting(t){w(this,s,!0,"f");const e=x(this,l,"f").get(t),a=x(this,i,"m",b).call(this,e.id).map(P.p);this.assignParticipantsToMeeting(a,x(this,o,"f").parentMeeting.id),x(this,l,"f").delete(e.id),x(this,c,"f").delete(e.id),(0,P.i)(e.id)||x(this,g,"f").add(e.id)}assignParticipantsToMeeting(t,e){return w(this,s,!0,"f"),t.forEach((t=>{const a=x(this,n,"f").get(t);x(this,c,"f").get(a).delete(t),x(this,c,"f").get(e).add(t),x(this,n,"f").set(t,e)})),this.currentState}assignParticipantsRandomly(){const t=(0,P.s)(this.unassignedParticipants,this.allConnectedMeetings.length);return this.allConnectedMeetings.forEach(((e,a)=>{const i=t[a];i&&0!==i.length&&this.assignParticipantsToMeeting(i.map((t=>t.customParticipantId)),e.id)})),this.currentState}unassignParticipants(t){const e=x(this,o,"f").parentMeeting.id;return this.assignParticipantsToMeeting(t,e)}unassignAllParticipants(){const t=x(this,o,"f").parentMeeting.id,e=this.allParticipants.map(P.p);return this.assignParticipantsToMeeting(e,t)}updateCurrentState(t){x(this,s,"f")||x(this,i,"m",p).call(this,t),[t.parentMeeting,...t.meetings].forEach(((t,e)=>{const a=Object.assign(Object.assign({},t),{isParent:0===e});x(this,i,"m",u).call(this,a),t.participants.forEach((t=>{x(this,i,"m",m).call(this,t,a)}))}))}get meetingsToCreate(){return this.allConnectedMeetings.filter((t=>(0,P.i)(t.id))).map((({id:t,title:e})=>({id:t,title:e})))}get meetingsToUpdate(){return this.allConnectedMeetings.filter((t=>x(this,h,"f").has(t.id))).map((({id:t,title:e})=>({id:t,title:e})))}get meetingsToDelete(){return Array.from(x(this,g,"f"))}get participantsToMove(){const t=new Map;return Array.from(x(this,n,"f").keys()).forEach((e=>{const a=x(this,r,"f").get(e),i=x(this,n,"f").get(e);if(a===i)return;const s=`${a}__${i}`;t.has(s)||t.set(s,[]);const o=x(this,d,"f").get(e);t.get(s).push(o.id)})),Array.from(t.keys()).map((e=>{const[a,i]=e.split("__");return{sourceMeetingId:a,destinationMeetingId:i,participantIds:t.get(e)}}))}async applyChanges(t){const e=0!==this.meetingsToCreate.length?t.connectedMeetings.createMeetings(this.meetingsToCreate):Promise.resolve([]),a=0!==this.meetingsToUpdate.length?t.connectedMeetings.updateMeetings(this.meetingsToUpdate):Promise.resolve(),[s]=await Promise.all([e,a]);s&&s.forEach((t=>{this.meetingsToCreate.forEach((e=>{e.title===t.title&&x(this,i,"m",f).call(this,x(this,l,"f").get(e.id),t.id)}))})),0!==this.participantsToMove.length&&this.participantsToMove.forEach((({sourceMeetingId:e,destinationMeetingId:a,participantIds:i})=>{t.connectedMeetings.moveParticipants(e,a,i)})),0!==this.meetingsToDelete.length&&t.connectedMeetings.deleteMeetings(this.meetingsToDelete)}discardChanges(){return w(this,s,!1,"f"),this.updateCurrentState(x(this,o,"f")),this.currentState}}s=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,c=new WeakMap,d=new WeakMap,l=new WeakMap,h=new WeakMap,g=new WeakMap,i=new WeakSet,p=function(t){w(this,o,t,"f"),w(this,l,new Map,"f"),w(this,d,new Map,"f"),w(this,h,new Set,"f"),w(this,g,new Set,"f"),w(this,c,new Map,"f"),w(this,n,new Map,"f"),w(this,r,new Map,"f"),w(this,r,new Map,"f"),x(this,o,"f").parentMeeting.participants.forEach((t=>{x(this,r,"f").set((0,P.p)(t),x(this,o,"f").parentMeeting.id)})),x(this,o,"f").meetings.forEach((t=>{t.participants.forEach((e=>{x(this,r,"f").set((0,P.p)(e),t.id)}))}))},u=function(t){x(this,l,"f").has(t.id)||(x(this,l,"f").set(t.id,t),x(this,c,"f").set(t.id,new Set))},m=function(t,e){x(this,d,"f").has((0,P.p)(t))||(x(this,d,"f").set((0,P.p)(t),t),x(this,n,"f").set((0,P.p)(t),e.id),x(this,c,"f").get(e.id).add((0,P.p)(t)))},f=function(t,e){const a=t.id;x(this,i,"m",u).call(this,Object.assign(Object.assign({},t),{id:e})),x(this,l,"f").delete(a);const s=x(this,c,"f").get(a);x(this,c,"f").set(e,s),x(this,c,"f").delete(a),Array.from(x(this,n,"f").keys()).forEach((t=>{x(this,n,"f").get(t)===a&&x(this,n,"f").set(t,e)}))},b=function(t){return Array.from(x(this,c,"f").get(t)).map((t=>x(this,d,"f").get(t)))};const E=class{constructor(t){(0,y.r)(this,t),this.stateUpdate=(0,y.c)(this,"dyteStateUpdate",7),this.updateLocalState=t=>{this.stateManager.updateCurrentState(t),this.draftState=this.stateManager.currentState,this.meeting.connectedMeetings.isActive&&(this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{mode:"edit"})),"create"!==this.roomConfig.mode||this.meeting.connectedMeetings.isActive||(0,P.r)(),["edit","view"].includes(this.roomConfig.mode)&&(this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:t.meetings.length,step:"participants-config"}),this.selectedParticipants=[])},this.onAddNewRoom=()=>{this.stateManager.addNewMeeting(),this.draftState=this.stateManager.currentState,this.selectorRef.scrollTo({top:this.selectorRef.scrollHeight,behavior:"smooth"})},this.onRoomUpdate=t=>{const{detail:e}=t;this.stateManager.updateMeetingTitle(e.id,e.title),this.draftState=this.stateManager.currentState},this.onRoomDelete=t=>{this.stateManager.allConnectedMeetings.find((e=>e.id===t))&&(this.stateManager.deleteMeeting(t),this.draftState=this.stateManager.currentState)},this.unassignParticipant=t=>{this.stateManager.unassignParticipants([t]),this.draftState=this.stateManager.currentState},this.onUnassignAll=()=>{this.stateManager.unassignAllParticipants(),this.draftState=this.stateManager.currentState},this.assignParticipantsToRoom=t=>{0!==this.selectedParticipants.length&&0!=this.assigningParticipants&&(this.stateManager.assignParticipantsToMeeting(this.selectedParticipants,t),this.draftState=this.stateManager.currentState,this.selectedParticipants=[],this.assigningParticipants=!1,this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.participants_assigned")))},this.handleClose=(t,e)=>{t.emit({activeBreakoutRoomsManager:{active:!0}}),e.activeBreakoutRoomsManager={active:!0}},this.enableConfirmationModal=(t="start-breakout")=>{let e={active:!0,header:"breakout_rooms.confirm_modal.start_breakout.header",content:"breakout_rooms.confirm_modal.start_breakout.content",variant:"primary",cancelText:"breakout_rooms.confirm_modal.start_breakout.cancelText",ctaText:"breakout_rooms.confirm_modal.start_breakout.ctaText",onClick:()=>this.applyChanges(),onClose:this.handleClose};"close-breakout"===t&&(e={active:!0,header:"breakout_rooms.confirm_modal.close_breakout.header",content:"breakout_rooms.confirm_modal.close_breakout.content",variant:"danger",cancelText:"cancel",ctaText:"breakout_rooms.confirm_modal.close_breakout.ctaText",onClick:()=>this.closeBreakout(),onClose:this.handleClose}),this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!1},activeConfirmationModal:e}),M.s.activeBreakoutRoomsManager={active:!1},M.s.activeConfirmationModal=e},this.close=()=>{var t;this.stateManager.discardChanges(),null===(t=this.stateUpdate)||void 0===t||t.emit({activeBreakoutRoomsManager:{active:!1}}),M.s.activeBreakoutRoomsManager={active:!1}},this.applyChanges=async()=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!0}),await this.stateManager.applyChanges(this.meeting),this.close(),this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!1})},this.loading=!1,this.roomConfig={rooms:2,step:"room-config",mode:"create",applyingChanges:!1},this.draftState=void 0,this.assigningParticipants=!1,this.selectedParticipants=[],this.ephemeralStatusText="",this.isDragMode=!1,this.meeting=void 0,this.states=void 0,this.iconPack=k.d,this.t=(0,v.u)()}onSelectedParticipantsChanged(t){t.length>0?this.assigningParticipants=!0:this.assigningParticipants=!1}connectedCallback(){this.permissions=this.meeting.self.permissions.connectedMeetings,this.meeting.connectedMeetings.on("stateUpdate",this.updateLocalState),this.meeting.connectedMeetings.on("changingMeeting",this.close),this.stateManager=new _,this.fetchRoomState()}disconnectedCallback(){this.meeting.connectedMeetings.off("stateUpdate",this.updateLocalState),this.meeting.connectedMeetings.off("changingMeeting",this.close)}async fetchRoomState(){this.loading=!0,await this.meeting.connectedMeetings.getConnectedMeetings(),this.loading=!1}setEphemeralStatus(t){this.ephemeralStatusText=t,setTimeout((()=>{this.ephemeralStatusText=""}),3e3)}onCreateRooms(){this.selectedParticipants=[],this.stateManager.addNewMeetings(this.roomConfig.rooms),this.draftState=this.stateManager.currentState,this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{step:"participants-config"})}onParticipantDelete(t){const{detail:e}=t,a=(0,P.p)(e);null!=a&&this.unassignParticipant(a)}toggleDragMode(t){this.isDragMode=t.detail}assignParticipantsRandomly(){0!==this.stateManager.unassignedParticipants.length&&(this.stateManager.assignParticipantsRandomly(),this.draftState=this.stateManager.currentState,this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.participants_assigned_randomly")))}async joinRoom(t){const e=(0,P.p)(this.meeting.self);this.stateManager.assignParticipantsToMeeting([e],t),await this.applyChanges()}async closeBreakout(){this.stateManager.allConnectedMeetings.forEach((t=>this.stateManager.deleteMeeting(t.id))),await this.applyChanges()}updateSelectedParticipants(t){this.selectedParticipants=t.detail}updateAllParticipants(t){this.selectedParticipants=t.detail}getStatusText(){if(""!==this.ephemeralStatusText)return this.ephemeralStatusText;let t="";return"create"===this.roomConfig.mode&&(t=this.t("breakout_rooms.status.assign_multiple"),0!==this.selectedParticipants.length&&(t=this.t("breakout_rooms.status.select_room"))),t}getApproxDistribution(){const t=this.stateManager.unassignedParticipants.length/(this.roomConfig.rooms||1);return Math.max(1,Math.round(t))}deselectAll(){this.selectedParticipants=[]}async discardChanges(){this.stateManager.discardChanges(),await this.fetchRoomState(),this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.changes_discarded"))}shouldShowOnlyRoomSwitcher(){return!1===this.permissions.canAlterConnectedMeetings}getPermittedRooms(){return this.permissions.canAlterConnectedMeetings||this.permissions.canSwitchConnectedMeetings?this.stateManager.allConnectedMeetings:this.stateManager.allConnectedMeetings.filter((t=>t.id===this.meeting.meta.roomName))}renderMainRoomMaybe(){return this.meeting.connectedMeetings.isActive&&this.permissions.canSwitchToParentMeeting?(0,y.h)("dyte-breakout-room-manager",{key:this.stateManager.currentState.parentMeeting.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,meeting:this.meeting,mode:this.roomConfig.mode,onParticipantsAdd:()=>this.assignParticipantsToRoom(this.stateManager.currentState.parentMeeting.id),onRoomJoin:()=>this.joinRoom(this.stateManager.currentState.parentMeeting.id),onUpdate:this.onRoomUpdate,states:this.states,room:Object.assign({},this.stateManager.currentState.parentMeeting),iconPack:this.iconPack,t:this.t}):null}renderRoomSwitcher(){return(0,y.h)(y.H,null,(0,y.h)("div",{class:"room-switcher-container"},(0,y.h)("header",null,(0,y.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,y.h)("span",null,this.t("breakout_rooms.join_breakout_header"))),(0,y.h)("div",{class:"rooms",ref:t=>this.selectorRef=t},this.renderMainRoomMaybe(),this.getPermittedRooms().map(((t,e)=>(0,y.h)("dyte-breakout-room-manager",{key:t.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,defaultExpanded:0===e,meeting:this.meeting,mode:this.roomConfig.mode,onDelete:()=>this.onRoomDelete(t.id),onParticipantsAdd:()=>this.assignParticipantsToRoom(t.id),onRoomJoin:()=>this.joinRoom(t.id),states:this.states,room:Object.assign({},t),iconPack:this.iconPack,t:this.t,allowDelete:!1}))))))}renderLoading(){return(0,y.h)(y.H,null,(0,y.h)("div",{class:"loading-content"},(0,y.h)("dyte-spinner",{size:"xl"})))}renderRoomConfig(){return(0,y.h)(y.H,null,(0,y.h)("div",{class:"room-config"},(0,y.h)("header",null,(0,y.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,y.h)("span",null,this.t("breakout_rooms.room_config_header"))),(0,y.h)("div",{class:"create-room"},(0,y.h)("p",null,this.t("breakout_rooms.num_of_rooms")),(0,y.h)("dyte-counter",{value:this.roomConfig.rooms,minValue:1,iconPack:this.iconPack,t:this.t,onValueChange:t=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:Math.max(+t.detail,1)})}})),(0,y.h)("span",{class:"distribution-hint"},`${this.t("breakout_rooms.approx")} `," ",(0,y.h)("em",null,this.getApproxDistribution()," ",this.t("breakout_rooms.participants_per_room"))," ",this.t("breakout_rooms.division_text")),(0,y.h)("footer",null,(0,y.h)("dyte-button",{kind:"button",iconPack:this.iconPack,t:this.t,size:"lg",title:this.t("create"),disabled:0===this.roomConfig.rooms,onClick:()=>this.onCreateRooms()},this.t("create")))))}render(){return this.loading?this.renderLoading():this.shouldShowOnlyRoomSwitcher()?this.renderRoomSwitcher():"room-config"===this.roomConfig.step?this.renderRoomConfig():(0,y.h)(y.H,null,(0,y.h)("div",{class:"participant-config-wrapper"},(0,y.h)("div",{class:"participant-config"},(0,y.h)("aside",{part:"menu"},(0,y.h)("header",null,this.t("breakout_rooms.assign_participants")),(0,y.h)("dyte-breakout-room-participants",{meeting:this.meeting,iconPack:this.iconPack,t:this.t,participantIds:this.stateManager.unassignedParticipants.map(P.p),selectedParticipantIds:this.selectedParticipants},(0,y.h)("dyte-tooltip",{label:this.t("breakout_rooms.shuffle_participants"),iconPack:this.iconPack,t:this.t,slot:"shuffle-button"},(0,y.h)("dyte-button",{disabled:"edit"===this.roomConfig.mode||0===this.stateManager.unassignedParticipants.length,iconPack:this.iconPack,t:this.t,kind:"button",variant:"secondary",size:"md",onClick:()=>this.assignParticipantsRandomly(),class:"shuffle-button br-primary-btn"},(0,y.h)("dyte-icon",{icon:this.iconPack.shuffle,iconPack:this.iconPack,t:this.t})))),0!==this.selectedParticipants.length&&(0,y.h)("div",{class:"participants-assign-actions"},(0,y.h)("span",null,`${this.selectedParticipants.length} ${this.t("breakout_rooms.selected")}`),(0,y.h)("dyte-button",{disabled:"edit"===this.roomConfig.mode,iconPack:this.iconPack,t:this.t,kind:"button",variant:"ghost",size:"md",onClick:()=>this.deselectAll(),class:"deselect-button color-danger"},this.t("breakout_rooms.deselect")))),(0,y.h)("div",{class:"assign-rooms"},(0,y.h)("div",{class:"row"},(0,y.h)("p",{class:"row-header"},this.t("breakout_rooms.rooms")," (",this.stateManager.allConnectedMeetings.length,")"),!this.assigningParticipants&&(0,y.h)("div",{class:"cta-buttons"},(0,y.h)("dyte-button",{kind:"button",variant:"secondary",iconPack:this.iconPack,t:this.t,class:"br-primary-btn"},(0,y.h)("div",{onClick:this.onAddNewRoom},(0,y.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t}),this.t("breakout_rooms.add_room"))),0!==this.stateManager.allConnectedMeetings.flatMap((t=>t.participants)).length&&(0,y.h)("dyte-button",{kind:"button",variant:"ghost",onClick:this.onUnassignAll,iconPack:this.iconPack,t:this.t},this.t("breakout_rooms.unassign_all")))),(0,y.h)("div",{class:"rooms",ref:t=>this.selectorRef=t},this.renderMainRoomMaybe(),this.getPermittedRooms().map(((t,e)=>(0,y.h)("dyte-breakout-room-manager",{key:t.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,defaultExpanded:0===e,meeting:this.meeting,mode:this.roomConfig.mode,onDelete:()=>this.onRoomDelete(t.id),onParticipantsAdd:()=>this.assignParticipantsToRoom(t.id),onRoomJoin:()=>this.joinRoom(t.id),onUpdate:this.onRoomUpdate,states:this.states,room:Object.assign({},t),iconPack:this.iconPack,t:this.t,allowDelete:this.stateManager.allConnectedMeetings.length>1}))),(0,y.h)("dyte-button",{kind:"button",variant:"secondary",iconPack:this.iconPack,t:this.t,onClick:this.onAddNewRoom,class:"add-room-jumbo-btn br-secondary-btn"},(0,y.h)("div",null,(0,y.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t}),(0,y.h)("span",null,this.t("breakout_rooms.add_room_brief"))))))),(0,y.h)("div",{class:"participant-config-actions"},(0,y.h)("div",{class:{"status-bar":!0,"ephemeral-status":""!==this.ephemeralStatusText}},""!==this.ephemeralStatusText&&(0,y.h)("dyte-icon",{icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t}),this.getStatusText()),(0,y.h)("div",{class:"breakout-actions"},"create"===this.roomConfig.mode&&this.permissions.canAlterConnectedMeetings&&(0,y.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"start-breakout-button",onClick:()=>this.enableConfirmationModal("start-breakout")},this.t("breakout_rooms.start_breakout")),"edit"===this.roomConfig.mode&&this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,y.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"color-danger",variant:"ghost",onClick:()=>this.discardChanges()},this.t("breakout_rooms.discard_changes")),"edit"===this.roomConfig.mode&&this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,y.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"update-breakout-button",onClick:this.applyChanges},this.t("breakout_rooms.update_breakout")),"edit"===this.roomConfig.mode&&!this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,y.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"close-breakout-button",onClick:()=>this.enableConfirmationModal("close-breakout")},this.t("breakout_rooms.close_breakout"))))))}static get watchers(){return{selectedParticipants:["onSelectedParticipantsChanged"]}}};E.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.color-brand{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.color-danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.loading-content{height:var(--dyte-space-60, 240px);width:var(--dyte-space-96, 384px);padding:var(--dyte-space-9, 36px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center}.room-config{overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}header dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.create-room{margin-bottom:var(--dyte-space-4, 16px);display:flex;align-items:center;gap:var(--dyte-space-3, 12px);width:100%}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px}.distribution-hint{margin-bottom:var(--dyte-space-8, 32px);font-size:14px;font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.distribution-hint em{font-style:normal;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:center}footer dyte-button{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config-wrapper{width:850px;height:595px;max-width:100%;max-height:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column}.participant-config-actions{display:flex;justify-content:space-between;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden}aside{box-sizing:border-box;display:flex;width:var(--dyte-space-96, 384px);flex-grow:1;flex-direction:column;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-4, 16px);border-right-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}aside header{margin-bottom:var(--dyte-space-4, 16px);width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-8, 32px);font-size:20px;font-weight:500;line-height:2rem}.shuffle-button{display:flex;flex-direction:row;align-items:center}.shuffle-button dyte-icon{height:var(--dyte-space-8, 32px)}.participants-assign-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-2, 8px);margin-left:calc(var(--dyte-space-8, 32px) * -1);margin-right:calc(var(--dyte-space-4, 16px) * -1);padding-top:var(--dyte-space-0\\.5, 2px);padding-bottom:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.participants-assign-actions .deselect-button{height:var(--dyte-space-6, 24px)}.participants-assign-actions .deselect-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.assign-rooms{padding:var(--dyte-space-8, 32px);display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}.assign-rooms .row-header{margin:var(--dyte-space-0, 0px);font-size:16px;line-height:2rem}.assign-rooms .cta-buttons{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px)}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.rooms{margin-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-1, 4px);display:flex;flex-grow:1;flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;max-height:500px}.rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.breakout-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}.breakout-actions .start-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.breakout-actions .close-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.breakout-actions .update-breakout-button{background-color:transparent;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}.status-bar{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));width:var(--dyte-space-80, 320px)}.ephemeral-status{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.ephemeral-status dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.room-switcher-container{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));width:468px;padding:var(--dyte-space-8, 32px)}.add-room-jumbo-btn div{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.add-room-jumbo-btn div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.br-primary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-primary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"},27637:(t,e,a)=>{a.d(e,{F:()=>s,i:()=>o,u:()=>n});var i=a(24555);const s={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures",FEAT_CHANNEL_CHAT:"feat_channel_chat"},o=t=>t.connectedMeetings.supportsConnectedMeetings,n=t=>{var e;return"CHAT"===(null==t?void 0:t.meta.viewType)||(0,i.s)(t)||(null===(e=null==t?void 0:t.__internals__)||void 0===e?void 0:e.features.hasFeature("feat_paginated_chat"))}},24555:(t,e,a)=>{a.d(e,{P:()=>n,a:()=>i,b:()=>h,c:()=>l,d:()=>r,e:()=>c,f:()=>d,i:()=>s,s:()=>o});const i=t=>!!o(t)&&("LIVESTREAM"===t.meta.viewType&&"ON_STAGE"!==t.stage.status),s=t=>{var e;return!!o(t)&&("LIVESTREAM"===t.meta.viewType&&(null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions.canLivestream))},o=t=>{var e;return(null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions.isV2)&&(null==t?void 0:t.livestream)};var n,r;!function(t){t.BUFFERING="Buffering",t.ENDED="Ended",t.IDLE="Idle",t.PLAYING="Playing",t.READY="Ready"}(n||(n={})),function(t){t.INITIALIZED="PlayerInitialized",t.QUALITY_CHANGED="PlayerQualityChanged",t.DURATION_CHANGED="PlayerDurationChanged",t.VOLUME_CHANGED="PlayerVolumeChanged",t.MUTED_CHANGED="PlayerMutedChanged",t.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",t.REBUFFERING="PlayerRebuffering",t.AUDIO_BLOCKED="PlayerAudioBlocked",t.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",t.ERROR="PlayerError",t.RECOVERABLE_ERROR="PlayerRecoverableError",t.ANALYTICS_EVENT="PlayerAnalyticsEvent",t.TIME_UPDATE="PlayerTimeUpdate",t.BUFFER_UPDATE="PlayerBufferUpdate",t.SEEK_COMPLETED="PlayerSeekCompleted",t.SESSION_DATA="PlayerSessionData",t.STATE_CHANGED="PlayerStateChanged",t.WORKER_ERROR="PlayerWorkerError",t.METADATA="PlayerMetadata",t.TEXT_CUE="PlayerTextCue",t.TEXT_METADATA_CUE="PlayerTextMetadataCue",t.AD_CUE="PlayerAdCue",t.STREAM_SOURCE_CUE="PlayerStreamSourceCue",t.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",t.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",t.SEGMENT_METADATA="PlayerSegmentMetadata",t.PLAYER_METADATA="PlayerMetadata"}(r||(r={}));const c=[r.TIME_UPDATE,r.BUFFER_UPDATE,r.TEXT_METADATA_CUE,r.PLAYER_METADATA],d=[r.REBUFFERING,r.AUDIO_BLOCKED,r.PLAYBACK_BLOCKED,r.ERROR,r.RECOVERABLE_ERROR,r.WORKER_ERROR,r.NETWORK_UNAVAILABLE,r.ANALYTICS_EVENT,r.PLAYBACK_RATE_CHANGED,r.QUALITY_CHANGED,r.INITIALIZED],l=t=>{var e,a,i,s,n,r;return!!o(t)&&("ALLOWED"===(null===(a=null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions)||void 0===a?void 0:a.canProduceAudio)||"ALLOWED"===(null===(s=null===(i=null==t?void 0:t.self)||void 0===i?void 0:i.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"ALLOWED"===(null===(r=null===(n=null==t?void 0:t.self)||void 0===n?void 0:n.permissions)||void 0===r?void 0:r.canProduceVideo))},h=t=>{var e,a,i,s,n,r,c,d;return!!o(t)&&("NOT_ALLOWED"!==(null===(a=null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions)||void 0===a?void 0:a.canProduceAudio)||"NOT_ALLOWED"!==(null===(s=null===(i=null==t?void 0:t.self)||void 0===i?void 0:i.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(r=null===(n=null==t?void 0:t.self)||void 0===n?void 0:n.permissions)||void 0===r?void 0:r.canProduceVideo)||(null===(d=null===(c=null==t?void 0:t.self)||void 0===c?void 0:c.permissions)||void 0===d?void 0:d.canLivestream))}},46503:(t,e,a)=>{a.d(e,{o:()=>d,s:()=>c});var i=a(65733);const s=t=>!("isConnected"in t)||t.isConnected,o=((t,e)=>{let a;return(...i)=>{a&&clearTimeout(a),a=setTimeout((()=>{a=0,t(...i)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(s))}),2e3),n=t=>"function"==typeof t?t():t,r=(t,e)=>{const a=t.indexOf(e);a>=0&&(t[a]=t[t.length-1],t.length--)},{state:c,onChange:d}=((t,e)=>{const a=((t,e=((t,e)=>t!==e))=>{const a=n(t);let i=new Map(Object.entries(null!=a?a:{}));const s={dispose:[],get:[],set:[],reset:[]},o=()=>{var e;i=new Map(Object.entries(null!==(e=n(t))&&void 0!==e?e:{})),s.reset.forEach((t=>t()))},c=t=>(s.get.forEach((e=>e(t))),i.get(t)),d=(t,a)=>{const o=i.get(t);e(a,o,t)&&(i.set(t,a),s.set.forEach((e=>e(t,a,o))))},l="undefined"==typeof Proxy?{}:new Proxy(a,{get:(t,e)=>c(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,a)=>(d(e,a),!0)}),h=(t,e)=>(s[t].push(e),()=>{r(s[t],e)});return{state:l,get:c,set:d,on:h,onChange:(e,a)=>{const i=h("set",((t,i)=>{t===e&&a(i)})),s=h("reset",(()=>a(n(t)[e])));return()=>{i(),s()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(h("set",e.set)),e.get&&t.push(h("get",e.get)),e.reset&&t.push(h("reset",e.reset)),e.dispose&&t.push(h("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{s.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=i.get(t);s.set.forEach((a=>a(t,e,e)))}}})(t,e);return a.use((()=>{if("function"!=typeof i.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const a=(0,i.a)();a&&((t,e,a)=>{const i=t.get(e);i?i.includes(a)||i.push(a):t.set(e,[a])})(t,e,a)},set:e=>{const a=t.get(e);a&&t.set(e,a.filter(i.f)),o(t)},reset:()=>{t.forEach((t=>t.forEach(i.f))),o(t)}}})()),a})({})}}]);