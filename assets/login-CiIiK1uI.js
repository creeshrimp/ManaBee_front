import{u as w,H as _,G as h,e as y,w as t,o as S,a,j as i,i as A,f as s,g as B}from"./index-Bspives2.js";import{c as C,a as m,v as F,u as M,b as d}from"./index-DmMofUtD.js";import{V as N}from"./VContainer-DhNlOD9X.js";import{V as k,a as c}from"./VRow-BklW2vwk.js";import{V as T,b as U}from"./VCard-CY565gmq.js";import{V as j}from"./VForm-Dg9rw3uZ.js";import{V as p}from"./VTextField-DwNcs7EH.js";import{V as q}from"./forwardRefs-BoHyr2Kr.js";/* empty css              */import"./index-BDweA3nG.js";const E={class:"text-center"},P={__name:"login",setup(R){const{api:f}=_(),V=h(),g=w(),v=C({username:m().required("帳號必填").min(4,"帳號過短").max(20,"帳號過長").test("isAlphanumeric","請輸入英數字",r=>F.isAlphanumeric(r)),password:m().required("密碼必填").min(4,"密碼過短").max(20,"密碼過長")}),{handleSubmit:x,isSubmitting:u}=M({validationSchema:v}),o=d("username"),l=d("password"),b=x(async r=>{try{const{data:e}=await f.post("/user/login",{username:r.username,password:r.password});g.login(e.result),console.log("登入成功:",e.result),V.push("/")}catch(e){console.log(e)}});return(r,e)=>(S(),y(N,null,{default:t(()=>[a(k,{class:"d-flex justify-center align-center"},{default:t(()=>[a(c,{cols:"12"},{default:t(()=>e[2]||(e[2]=[i("h1",{class:"text-center text-secondary opacity-80"},"登入 MANABEE",-1)])),_:1}),a(c,{cols:"12",md:"8"},{default:t(()=>[a(T,{flat:""},{default:t(()=>[a(U,null,{default:t(()=>[a(j,{disabled:s(u),onSubmit:A(s(b),["prevent"])},{default:t(()=>[a(p,{modelValue:s(o).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).value.value=n),variant:"outlined","error-messages":s(o).errorMessage.value,label:"帳號",minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages"]),a(p,{modelValue:s(l).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s(l).value.value=n),variant:"outlined",type:"password","error-messages":s(l).errorMessage.value,label:"密碼",minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages"]),i("div",E,[a(q,{loading:s(u),type:"submit",color:"secondary",flat:"",block:"",size:"large"},{default:t(()=>e[3]||(e[3]=[B("登入")])),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{P as default};
