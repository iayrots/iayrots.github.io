"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[61074,74259],{61074:(t,o,r)=>{r.r(o),r.d(o,{dyte_poll:()=>l,dyte_poll_form:()=>d});var e=r(65733),a=r(96633),i=r(20336),s=r(22906);const l=class{constructor(t){(0,e.r)(this,t),this.onVote=(0,e.c)(this,"dyteVotePoll",7),this.poll=void 0,this.self=void 0,this.permissions=void 0,this.iconPack=a.d,this.t=(0,i.u)()}vote(t,o){this.poll.voted.includes(this.self)?t.preventDefault():this.onVote.emit({id:this.poll.id,index:o})}render(){return(0,e.h)(e.H,null,(0,e.h)("div",{class:"ctr"},(0,e.h)("p",{class:"poll-title"},this.t("polls.by")," ",(0,s.s)((0,s.f)(this.poll.createdBy),20)),(0,e.h)("div",{class:"poll"},(0,e.h)("p",{class:"poll-question"},this.poll.question),this.poll.options.map(((t,o)=>(0,e.h)("div",{class:{active:t.votes.some((t=>t.id===this.self)),"poll-option":!0}},(0,e.h)("div",{class:"poll-option-header"},(0,e.h)("label",null,(0,e.h)("input",{disabled:!this.permissions.polls.canVote,type:"checkbox",checked:t.votes.some((t=>t.id===this.self)),onClick:t=>this.vote(t,o)}),(0,e.h)("p",null,t.text," (",t.count,")"))),(0,e.h)("div",{class:"votes"},t.votes.map((t=>{if(!this.poll.anonymous||this.self===this.poll.createdByUserId)return(0,e.h)("dyte-tooltip",{label:t.name,iconPack:this.iconPack,t:this.t},(0,e.h)("div",{class:"vote"},(0,s.g)(t.name)))})))))))))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.ctr{margin-bottom:var(--dyte-space-3, 12px);display:flex;width:83.333333%;flex-direction:column;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.poll-title{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.poll{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));display:flex;flex-direction:column;padding:var(--dyte-space-3, 12px)}.poll p{margin:var(--dyte-space-0, 0px)}.poll-question{font-size:12px;font-weight:700;overflow-wrap:break-word}.poll-option{display:flex;flex-direction:column;margin-top:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);word-break:break-word}.poll-option label{display:flex;flex-direction:row}.poll-option-header{display:flex;flex-direction:row;justify-content:space-between}.votes{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;flex-wrap:wrap}.vote{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);display:flex;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-none, 0);-webkit-clip-path:circle();clip-path:circle()}.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}";const d=class{constructor(t){(0,e.r)(this,t),this.onCreate=(0,e.c)(this,"dyteCreatePoll",7),this.iconPack=a.d,this.t=(0,i.u)(),this.options=["",""],this.anonymous=!1,this.hideVotes=!0,this.error=void 0}removeOption(t){var o;this.options=this.options.filter(((o,r)=>r!==t)),1===(null===(o=this.error)||void 0===o?void 0:o.code)&&(this.error=void 0)}addOption(){this.options=[...this.options,""]}updateOption(t,o){var r;this.options[o]=t.target.value,1===(null===(r=this.error)||void 0===r?void 0:r.code)&&(this.error=void 0)}handleSubmit(){const t={question:this.question.value,options:this.options,anonymous:this.anonymous,hideVotes:!!this.anonymous||this.hideVotes};t.question?this.options.filter((t=>""===t.trim())).length>0?this.error={code:1,message:this.t("polls.errors.empty_opt")}:this.onCreate.emit(t):this.error={code:0,message:this.t("polls.errors.question_required")}}render(){return(0,e.h)(e.H,null,(0,e.h)("div",{class:"create-poll"},(0,e.h)("p",null,this.t("polls.question")),(0,e.h)("textarea",{onInput:()=>{this.error&&0===this.error.code&&(this.error=void 0)},ref:t=>this.question=t,placeholder:this.t("polls.question.placeholder")}),this.options.map(((t,o)=>(0,e.h)("div",{class:"option"},(0,e.h)("input",{placeholder:this.t("polls.option.placeholder"),value:t,onInput:t=>this.updateOption(t,o)}),o>1&&(0,e.h)("dyte-button",{kind:"icon",class:"auto remove-option",variant:"secondary",onClick:()=>this.removeOption(o),iconPack:this.iconPack,t:this.t},(0,e.h)("dyte-icon",{icon:this.iconPack.subtract,iconPack:this.iconPack,t:this.t}))))),(0,e.h)("dyte-button",{class:"add-option",variant:"secondary",onClick:()=>this.addOption(),iconPack:this.iconPack,t:this.t},this.t("polls.option")),(0,e.h)("label",null,(0,e.h)("input",{id:"anonymous",type:"checkbox",onChange:t=>this.anonymous=t.target.checked}),this.t("polls.results.anon")),(0,e.h)("label",null,(0,e.h)("input",{id:"hideVotes",type:"checkbox",disabled:this.anonymous,checked:!!this.anonymous||this.hideVotes,onChange:t=>this.hideVotes=t.target.checked}),this.t("polls.results.hide")),(0,e.h)("dyte-button",{kind:"wide",onClick:()=>this.handleSubmit(),iconPack:this.iconPack,t:this.t},this.t("polls.create")),this.error&&(0,e.h)("span",{class:"error-text"},this.error.message)))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.create-poll{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);display:flex;flex:1 1 0%;flex-direction:column;padding:var(--dyte-space-3, 12px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.create-poll p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);text-align:center}.create-poll textarea{display:flex;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);border-width:var(--dyte-border-width-none, 0);border-style:none;font-weight:500;outline:2px solid transparent;outline-offset:2px;margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);resize:vertical;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.create-poll textarea:focus{outline-style:solid;outline-offset:2px;outline-color:rgb(var(--dyte-colors-background-600, 60 60 60))}.option{display:flex;flex-direction:row;align-items:center;margin-bottom:var(--dyte-space-3, 12px);width:100%}.option input{width:100%;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.remove-option{margin-left:var(--dyte-space-2, 8px);width:var(--dyte-space-10, 40px);border-radius:var(--dyte-border-radius-sm, 4px)}.add-option{margin-bottom:var(--dyte-space-3, 12px)}label{margin-bottom:var(--dyte-space-3, 12px)}.error-text{margin-top:var(--dyte-space-3, 12px);text-align:center;font-size:12px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},22906:(t,o,r)=>{r.d(o,{a:()=>i,f:()=>s,g:()=>l,h:()=>a,s:()=>e});const e=(t,o=20)=>null==t?"":t.length>o?`${t.substring(0,o)}...`:t,a=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),i=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,s=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function l(t,o=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,o).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);