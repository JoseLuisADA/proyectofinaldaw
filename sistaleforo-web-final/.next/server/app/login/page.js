(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8517:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),t(974),t(3658),t(5866);var r=t(3191),a=t(8716),n=t(7922),i=t.n(n),l=t(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,974)),"C:\\Users\\selut\\Documents\\GitHub\\proyectofinaldaw\\sistaleforo-web-final\\src\\app\\login\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3658)),"C:\\Users\\selut\\Documents\\GitHub\\proyectofinaldaw\\sistaleforo-web-final\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\selut\\Documents\\GitHub\\proyectofinaldaw\\sistaleforo-web-final\\src\\app\\login\\page.tsx"],u="/login/page",h={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7771:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},9028:(e,s,t)=>{Promise.resolve().then(t.bind(t,8417))},6322:(e,s,t)=>{Promise.resolve().then(t.bind(t,7378))},8417:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>R});var r=t(326),a=t(6237),n=t.n(a);t(3824);var i=t(7577),l=t(8439),o=t.n(l),d=t(3107),c=t(9865),u=t(7486),h=t(1967),x=t(7864),m=t(9222),p=t(1772),b=t(6111),g=t(8788),f=t(2979),j=t(5299),v=t(6318),y=t(434),w=t(5047),N=t(9497);let P=({children:e,href:s,className:t,icon:a,tabIndex:n,testId:i})=>{let l=(0,w.usePathname)(),o="navbar-item-active",d=t?`${t} ${o}`:o;return(0,r.jsxs)("span",{className:"d-inline-flex align-items-center navbar-item",children:[a&&r.jsx(N.G,{icon:a,className:"mr-3"}),r.jsx("span",{className:l===s?d:t,tabIndex:n,"data-testid":i,children:e})]})};P.propTypes={children:o().node.isRequired,href:o().string.isRequired,className:o().string,icon:o().node,tabIndex:o().number,testId:o().string.isRequired};let q=({children:e,href:s,className:t,icon:a,tabIndex:n,testId:i})=>r.jsx(y.default,{legacyBehavior:!0,href:s,children:r.jsx("a",{children:r.jsx(P,{href:s,className:t,icon:a,tabIndex:n,testId:i,children:e})})});q.propTypes={children:o().node.isRequired,href:o().string.isRequired,className:o().string,icon:o().node,tabIndex:o().number,testId:o().string.isRequired};let C=({children:e,href:s,className:t,icon:a,tabIndex:n,testId:i})=>r.jsx("a",{href:s,children:r.jsx(P,{href:s,className:t,icon:a,tabIndex:n,testId:i,children:e})});C.propTypes={children:o().node.isRequired,href:o().string.isRequired,className:o().string,icon:o().node,tabIndex:o().number,testId:o().string};let I=()=>{let[e,s]=(0,i.useState)(!1),{user:t}=(0,v.S)();return r.jsx("div",{className:"nav-container","data-testid":"navbar",children:r.jsx(d.Z,{color:"light",light:!0,expand:"md",children:(0,r.jsxs)(c.Z,{children:[r.jsx(u.Z,{className:"logo"}),r.jsx(h.Z,{onClick:()=>s(!e),"data-testid":"navbar-toggle"}),(0,r.jsxs)(x.Z,{isOpen:e,navbar:!0,children:[(0,r.jsxs)(m.Z,{className:"mr-auto",navbar:!0,"data-testid":"navbar-items",children:[r.jsx(p.Z,{children:r.jsx(q,{href:"/",className:"nav-link",testId:"navbar-home",children:"Inicio"})}),t.username&&r.jsx(r.Fragment,{children:r.jsx(p.Z,{children:r.jsx(q,{href:"",className:"nav-link",testId:"navbar-csr",children:"Crear art\xedculo"})})})]}),(0,r.jsxs)(m.Z,{className:"d-none d-md-block",navbar:!0,children:[!t.username&&(0,r.jsxs)(p.Z,{id:"qsLoginBtn",children:[r.jsx(C,{href:"/login",className:"btn btn-primary btn-margin mr-1",tabIndex:0,testId:"navbar-login-desktop",children:"Iniciar sesi\xf3n"}),r.jsx(C,{href:"/register",className:"btn btn-primary btn-margin",tabIndex:0,testId:"navbar-login-desktop",children:"Reg\xedstrarse"})]}),t.username&&(0,r.jsxs)(b.Z,{nav:!0,inNavbar:!0,"data-testid":"navbar-menu-desktop",children:[r.jsx(g.Z,{nav:!0,caret:!0,id:"profileDropDown",children:r.jsx("p",{children:t.username})}),(0,r.jsxs)(f.Z,{children:[r.jsx(j.Z,{header:!0,"data-testid":"navbar-user-desktop",children:t.name}),r.jsx(j.Z,{id:"qsLogoutBtn",children:r.jsx(C,{href:"/",icon:"power-off",testId:"navbar-logout-desktop",children:"Cerrar sesi\xf3n"})})]})]})]})]})]})})})},S=()=>(0,r.jsxs)("header",{className:"bg-light p-3 text-center","data-testid":"header",children:[r.jsx("h1",{"data-testid":"header-text",children:"Sistale"}),r.jsx(I,{})]}),_=()=>(0,r.jsxs)("footer",{className:"bg-light p-3 text-center","data-testid":"footer",children:[r.jsx("div",{className:"logo","data-testid":"footer-logo"}),r.jsx("p",{"data-testid":"footer-text",children:"Sistale \xa9 2024"})]}),k=({children:e})=>r.jsx("div",{className:"flex flex-col min-h-screen",children:(0,r.jsxs)(v.d,{children:[r.jsx(S,{}),r.jsx("main",{className:"flex-1",children:e}),r.jsx(_,{})]})});function R({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"})}),r.jsx("body",{className:`${n().className} h-full`,children:r.jsx(k,{children:e})})]})}R.propTypes={children:o().node.isRequired}},7378:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var r=t(326),a=t(7577),n=t(5047),i=t(434),l=t(6318);let o=()=>{let[e,s]=(0,a.useState)(!1),[t,r]=(0,a.useState)(null),i=(0,n.useRouter)(),{handleSetUserUsername:o}=(0,l.S)();return{login:async(e,t)=>{s(!0),r(null);try{let s=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t}),credentials:"include"}),r=await s.json();if(!s.ok)throw Error(r.message||"Error al iniciar sesi\xf3n");o(e),i.push("/")}catch(e){r(e.message)}finally{s(!1)}},isLoading:e,error:t}},d=()=>{let[e,s]=(0,a.useState)(""),[t,l]=(0,a.useState)(""),{login:d,isLoading:c,error:u}=o(),h=(0,n.useRouter)();(0,a.useEffect)(()=>{document.cookie.split("; ").find(e=>e.startsWith("session="))&&h.push("/")},[h]);let x=async s=>{s.preventDefault(),await d(e,t)};return(0,r.jsxs)("div",{className:"flex mt-32 justify-center",children:[(0,r.jsxs)("form",{className:"bg-white shadow-md w-[50rem] rounded px-8 pt-6 pb-8",onSubmit:x,children:[(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Usuario"}),r.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Usuario",value:e,onChange:e=>s(e.target.value)})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Contrase\xf1a"}),r.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"*********",value:t,onChange:e=>l(e.target.value)})]}),r.jsx("div",{className:"flex items-center justify-between",children:r.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",disabled:c,children:c?"Cargando...":"Entrar"})}),u&&r.jsx("p",{className:"text-red-500 text-center font-bold italic",children:u})]}),r.jsx("div",{className:"ml-3 mr-3"}),(0,r.jsxs)("div",{className:"p-4 text-center content-center bg-white shadow-md rounded",children:[r.jsx("h2",{className:"text-lg",children:"\xbfNuevo aqu\xed?"}),r.jsx("p",{className:"mb-6",children:"\xdanete a nosotros hoy y explora m\xe1s!"}),r.jsx(i.default,{href:"/register",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Reg\xedstrate"})]})]})}},6318:(e,s,t)=>{"use strict";t.d(s,{S:()=>l,d:()=>i});var r=t(326),a=t(7577);let n=(0,a.createContext)(void 0),i=({children:e})=>{let[s,t]=(0,a.useState)({username:""});return r.jsx(n.Provider,{value:{user:s,setUser:t,handleSetUserUsername:e=>{t(s=>({...s,username:e}))}},children:e})},l=()=>{let e=(0,a.useContext)(n);if(!e)throw Error("useUser must be used within a UserProvider");return e}},3658:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=t(8570);let a=(0,r.createProxy)(String.raw`C:\Users\selut\Documents\GitHub\proyectofinaldaw\sistaleforo-web-final\src\app\layout.jsx`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,r.createProxy)(String.raw`C:\Users\selut\Documents\GitHub\proyectofinaldaw\sistaleforo-web-final\src\app\layout.jsx#default`)},974:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=t(8570);let a=(0,r.createProxy)(String.raw`C:\Users\selut\Documents\GitHub\proyectofinaldaw\sistaleforo-web-final\src\app\login\page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,r.createProxy)(String.raw`C:\Users\selut\Documents\GitHub\proyectofinaldaw\sistaleforo-web-final\src\app\login\page.tsx#default`)},3824:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[724,37],()=>t(8517));module.exports=r})();