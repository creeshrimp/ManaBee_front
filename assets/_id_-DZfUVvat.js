import{r as n}from"./vue-advanced-chat.es-CvazeTci.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as d,j as i,o as g}from"./index-Bspives2.js";n();const u={data(){return{currentUserId:"1234",rooms:[{roomId:"1",roomName:"Room 1",avatar:"https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",users:[{_id:"1234",username:"John Doe"},{_id:"4321",username:"John Snow"}]},{roomId:"2",roomName:"Room 1",avatar:"https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",users:[{_id:"1234",username:"John Doe"},{_id:"4321",username:"John Snow"}]}],messages:[],messagesLoaded:!1}},methods:{fetchMessages({options:e={}}){setTimeout(()=>{e.reset?this.messages=this.addMessages(!0):(this.messages=[...this.addMessages(),...this.messages],this.messagesLoaded=!0)})},addMessages(e){const s=[];for(let t=0;t<30;t++)s.push({_id:e?t:this.messages.length+t,content:`${e?"":"paginated"} message ${t+1}`,senderId:"4321",username:"John Doe",date:"13 November",timestamp:"10:20"});return s},sendMessage(e){this.messages=[...this.messages,{_id:this.messages.length,content:e.content,senderId:this.currentUserId,timestamp:new Date().toString().substring(16,21),date:new Date().toDateString()}]},addNewMessage(){setTimeout(()=>{this.messages=[...this.messages,{_id:this.messages.length,content:"NEW MESSAGE",senderId:"1234",timestamp:new Date().toString().substring(16,21),date:new Date().toDateString()}]},2e3)}}},h=["current-user-id","rooms","messages","messages-loaded"];function c(e,s,t,l,a,o){return g(),d("div",null,[i("vue-advanced-chat",{height:"calc(100vh - 20px)","current-user-id":a.currentUserId,rooms:JSON.stringify(a.rooms),"rooms-loaded":!0,messages:JSON.stringify(a.messages),"messages-loaded":a.messagesLoaded,"dark-mode":"",onSendMessage:s[0]||(s[0]=r=>o.sendMessage(r.detail[0])),onFetchMessages:s[1]||(s[1]=r=>o.fetchMessages(r.detail[0]))},null,40,h)])}const M=m(u,[["render",c]]);export{M as default};
