import{n as E,p as N,r as C,q as P,s as w,v as _,x as R,y as u,z as F,A as M,B as L,C as T,D as z,E as D,G as U,a as e,H as j,u as H,c as y,w as o,F as h,h as $,b as G,o as m,f as k,e as x,i as I,g as d,m as q,j as O,k as Q,l as X}from"./index-BDH8iWJ7.js";import{V as J,a as K}from"./VAppBarNavIcon-BOKtGM_d.js";import{V as W}from"./VNavigationDrawer-CzGPPEUS.js";import{V as Y}from"./VMain-kt3OdnIq.js";import{u as Z,a as ee,b as te,c as ae,m as oe,d as se,e as re,f as le,V as ne,g as ie}from"./index-xAJpoQmD.js";import{V as ue}from"./VSpacer-BiHpIoKg.js";import{V as i}from"./forwardRefs-VwF6uVcR.js";import{V as me}from"./VMenu-DnK0XLWb.js";import{V as A}from"./VList-Dv5ReMbj.js";import{V as c,a as de}from"./scopeId-C8WInEEY.js";import"./VToolbar-CwiGtCN7.js";/* empty css              */const ce="/ManaBee_front/assets/IMG_5218-DQjLSXkV.png",pe=N({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...le(),...U(),...re(),...D(),...se(),...oe({tag:"footer"}),...z()},"VFooter"),fe=E()({name:"VFooter",props:pe(),setup(t,s){let{slots:v}=s;const p=C(),{themeClasses:g}=P(t),{backgroundColorClasses:r,backgroundColorStyles:l}=Z(w(t,"color")),{borderClasses:a}=ee(t),{elevationClasses:V}=te(t),{roundedClasses:n}=ae(t),b=_(32),{resizeRef:S}=R(f=>{f.length&&(b.value=f[0].target.clientHeight)}),B=u(()=>t.height==="auto"?b.value:parseInt(t.height,10));return F(()=>t.app,()=>{const f=M({id:t.name,order:u(()=>parseInt(t.order,10)),position:u(()=>"bottom"),layoutSize:B,elementSize:u(()=>t.height==="auto"?void 0:B.value),active:u(()=>t.app),absolute:w(t,"absolute")});L(()=>{p.value=f.layoutItemStyles.value})}),T(()=>e(t.tag,{ref:S,class:["v-footer",g.value,r.value,a.value,V.value,n.value,t.class],style:[l.value,t.app?p.value:{height:j(t.height)},t.style]},v)),{}}}),Ae={__name:"default",setup(t){const s=H(),{apiAuth:v}=X(),p=$();async function g(){try{await v.delete("/user/logout")}catch(l){console.log(l)}s.logout(),alert("登出成功"),p.push("/")}const r=C(!1);return C(!1),(l,a)=>{const V=G("router-view");return m(),y(h,null,[e(J,{color:"primary",height:60,rounded:0,tile:!1,density:"default","scroll-behavior":"hide"},{prepend:o(()=>[l.$vuetify.display.smAndDown?(m(),x(K,{key:0,class:"mr-n4",variant:"text",onClick:a[0]||(a[0]=O(n=>r.value=!r.value,["stop"]))})):I("",!0),e(i,{variant:"plain",class:"text-h6",to:"/"},{default:o(()=>[e(ne,{class:"mr-1"},{default:o(()=>a[2]||(a[2]=[d("mdi-bee")])),_:1}),a[3]||(a[3]=Q("span",null,"MANABEE",-1))]),_:1})]),default:o(()=>[e(ue),k(s).isLoggedIn?(m(),y(h,{key:0},[l.$vuetify.display.mdAndUp?(m(),x(i,{key:0,"prepend-icon":"mdi-message-text",variant:"plain",to:"/chatroom",rounded:"0",class:"h-100"},{default:o(()=>a[4]||(a[4]=[d("聊天室")])),_:1})):I("",!0),e(me,null,{activator:o(({props:n})=>[e(i,q({icon:"mdi-account",variant:"text"},n),null,16)]),default:o(()=>[e(A,null,{default:o(()=>[e(c,{"prepend-icon":"mdi-account",title:"個人資料",to:"/profile"}),e(c,{"prepend-icon":"mdi-logout",title:"登出",onClick:g})]),_:1})]),_:1})],64)):(m(),y(h,{key:1},[e(i,{variant:"flat",color:"success",to:"/login"},{default:o(()=>a[5]||(a[5]=[d("登入")])),_:1}),e(i,{variant:"outlined",color:"",class:"ml-2",to:"/register"},{default:o(()=>a[6]||(a[6]=[d("註冊")])),_:1})],64)),e(i,{icon:"mdi-dots-vertical",variant:"text"})]),_:1}),e(W,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=n=>r.value=n),location:"start",mobile:"",temporary:""},{prepend:o(()=>[e(c,{lines:"two","prepend-avatar":k(s).avatar,title:k(s).username},null,8,["prepend-avatar","title"])]),default:o(()=>[e(de),e(A,{density:"compact",nav:""},{default:o(()=>[e(c,{"prepend-icon":"mdi-home-city",title:"首頁",to:"/"}),e(c,{"prepend-icon":"mdi-message-text",title:"聊天室",to:"/chatroom/chat"})]),_:1})]),_:1},8,["modelValue"]),e(Y,{class:"bg-bee"},{default:o(()=>[e(V)]),_:1}),e(fe,{color:"secondary-lighten-1",app:!1,class:"d-flex justify-center"},{default:o(()=>[a[7]||(a[7]=d(" Copyright © 2025 MANABEE ")),e(ie,{class:"","max-width":"80",cover:"",src:ce})]),_:1})],64)}}};export{Ae as default};
