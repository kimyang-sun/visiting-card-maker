(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{14:function(e,a,t){e.exports={form:"card_add_form_form__wOfaV",input:"card_add_form_input__1pLce",textarea:"card_add_form_textarea__3DYtA",editFoot:"card_add_form_editFoot__2JJRY",select:"card_add_form_select__3KWLB"}},15:function(e,a,t){e.exports={form:"card_edit_form_form__37yhF",input:"card_edit_form_input__3uHCs",textarea:"card_edit_form_textarea__2hP82",editFoot:"card_edit_form_editFoot__xTSLy",select:"card_edit_form_select__259ET"}},21:function(e,a,t){e.exports={container:"image_file_input_container__2Qn_p",uploaded:"image_file_input_uploaded__1kAu0",button:"image_file_input_button__vpf1J",input:"image_file_input_input__3Ul3l",icon:"image_file_input_icon__1ypTk",loading:"image_file_input_loading__15vUd",spin:"image_file_input_spin__1ql1C"}},24:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",header:"header_header__Q_w-W",title:"header_title__21mNe",card:"header_card__285yd",logout:"header_logout__x1HP2"}},25:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",makerOrange:"orange",container:"login_container__14BVq",login:"login_login__3-jiH",title:"login_title__2RimC",list:"login_list__3T1BG"}},38:function(e,a,t){e.exports={makerBlack:"#2b2d39",mediaQuery:"992px",container:"maker_container__1xqMf",maker:"maker_maker__1CEMH"}},39:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",makerOrange:"orange",makerLightGray:"#ddd",mediaQuery:"992px",editor:"editor_editor__-hJEu",forms:"editor_forms__YLLpU"}},40:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",makerOrange:"orange",makerLightGray:"#ddd",mediaQuery:"992px",preview:"preview_preview__2vYcZ",cards:"preview_cards__289y_"}},41:function(e,a,t){e.exports={button:"card_download_button__tyb7z",icon:"card_download_icon__3XMDT"}},44:function(e,a,t){e.exports={app:"app_app__3ItPe"}},45:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",footer:"footer_footer__2rtPB"}},47:function(e,a,t){e.exports={makerBlack:"#2b2d39",button:"button_button__1i-em"}},54:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(1),r=t(2),i=t.n(r),o=t(43),l=t.n(o),s=(t(54),t(44)),u=t.n(s),d=t(18),m=t(24),j=t.n(m),f=function(e){var a=e.onLogout,t=Object(r.useMemo)((function(){return Object(c.jsx)(d.a,{icon:"address-card",className:j.a.card})}),[]),n=Object(r.useMemo)((function(){return Object(c.jsx)(d.a,{icon:"unlock-alt"})}),[]);return Object(c.jsx)("header",{className:j.a.header,children:Object(c.jsxs)("h1",{className:j.a.title,children:[t,"Visiting Card Maker",a&&Object(c.jsx)("button",{onClick:a,className:j.a.logout,children:n})]})})},p=i.a.memo(f),b=t(45),_=t.n(b),h=function(){return Object(c.jsx)("footer",{className:_.a.footer,children:"Register your card"})},O=i.a.memo(h),x=t(25),g=t.n(x),v=t(8),k=function(e){var a=e.authService,t=Object(v.f)(),n=function(e){t.push({pathname:"/maker",state:{id:e}})},i=function(e){a.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){a.onAuthChange((function(e){e&&n(e.uid)}))})),Object(c.jsxs)("section",{className:g.a.container,children:[Object(c.jsx)(p,{}),Object(c.jsxs)("div",{className:g.a.login,children:[Object(c.jsx)("h2",{className:g.a.title,children:"Login"}),Object(c.jsxs)("ul",{className:g.a.list,children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:i,children:"Google"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:i,children:"Facebook"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:i,children:"Github"})})]})]}),Object(c.jsx)(O,{})]})},y=t(28),C=t(19),N=t(38),w=t.n(N),R=t(47),F=t.n(R),B=function(e){var a=e.name,t=e.onClick;return Object(c.jsx)("button",{className:F.a.button,onClick:t,children:a})},I=i.a.memo(B),L=t(14),D=t.n(L),T=function(e){var a=e.onAddCard,t=e.FileInput,n=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null),l=Object(r.useRef)(null),s=Object(r.useRef)(null),u=Object(r.useRef)(null),d=Object(r.useRef)(null),m=Object(r.useState)({fileName:null,fileURL:null}),j=Object(C.a)(m,2),f=j[0],p=j[1];return Object(c.jsxs)("form",{ref:n,className:D.a.form,children:[Object(c.jsx)("input",{ref:i,className:D.a.input,type:"text",name:"name",placeholder:"Name"}),Object(c.jsx)("input",{ref:o,className:D.a.input,type:"text",name:"company",placeholder:"Company"}),Object(c.jsx)("input",{ref:l,className:D.a.input,type:"text",name:"title",placeholder:"Title"}),Object(c.jsx)("input",{ref:s,className:D.a.input,type:"text",name:"email",placeholder:"Email"}),Object(c.jsx)("textarea",{ref:u,className:D.a.textarea,name:"message",placeholder:"Comment"}),Object(c.jsxs)("div",{className:D.a.editFoot,children:[Object(c.jsxs)("select",{ref:d,className:D.a.select,name:"theme",defaultValue:"light",children:[Object(c.jsx)("option",{value:"light",children:"light"}),Object(c.jsx)("option",{value:"dark",children:"dark"}),Object(c.jsx)("option",{value:"sky",children:"sky"}),Object(c.jsx)("option",{value:"orange",children:"orange"})]}),Object(c.jsx)(t,{name:f.fileName,onFileChange:function(e){p({fileName:e.name,fileURL:e.url})}}),Object(c.jsx)(I,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:i.current.value||"",company:o.current.value||"",title:l.current.value||"",email:s.current.value||"",message:u.current.value||"",theme:d.current.value||"",fileName:f.fileName||"",fileURL:f.fileURL||""};n.current.reset(),p({fileName:null,fileURL:null}),a(t)}})]})]})},A=i.a.memo(T),E=t(29),S=t(15),P=t.n(S),U=function(e){var a=e.card,t=e.updateCard,r=e.deleteCard,i=e.FileInput,o=e.Download,l=e.downloadCard,s=a.name,u=a.company,d=a.theme,m=a.title,j=a.email,f=a.message,p=a.fileName,b=function(e){null!=e.currentTarget&&(e.preventDefault(),t(Object(n.a)(Object(n.a)({},a),{},Object(E.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(c.jsxs)("form",{className:P.a.form,children:[Object(c.jsx)(o,{card:a,downloadCard:l}),Object(c.jsx)("input",{className:P.a.input,type:"text",name:"name",value:s,placeholder:"Name",onChange:b}),Object(c.jsx)("input",{className:P.a.input,type:"text",name:"company",value:u,placeholder:"Company",onChange:b}),Object(c.jsx)("input",{className:P.a.input,type:"text",name:"title",value:m,placeholder:"Title",onChange:b}),Object(c.jsx)("input",{className:P.a.input,type:"text",name:"email",value:j,placeholder:"Email",onChange:b}),Object(c.jsx)("textarea",{className:P.a.textarea,name:"message",value:f,onChange:b,placeholder:"Comment"}),Object(c.jsxs)("div",{className:P.a.editFoot,children:[Object(c.jsxs)("select",{className:P.a.select,name:"theme",value:d,onChange:b,children:[Object(c.jsx)("option",{value:"light",children:"light"}),Object(c.jsx)("option",{value:"dark",children:"dark"}),Object(c.jsx)("option",{value:"sky",children:"sky"}),Object(c.jsx)("option",{value:"orange",children:"orange"})]}),Object(c.jsx)(i,{name:p,onFileChange:function(e){t(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}}),Object(c.jsx)(I,{name:"Delete",onClick:function(){return r(a)}})]})]})},G=i.a.memo(U),M=t(39),H=t.n(M),J=function(e){var a=e.cards,t=e.onAddCard,n=e.updateCard,r=e.deleteCard,i=e.FileInput,o=e.Download,l=e.downloadCard;return Object(c.jsxs)("div",{className:H.a.editor,children:[Object(c.jsx)("h2",{children:"Card Edit"}),Object(c.jsxs)("div",{className:H.a.forms,children:[Object.keys(a).map((function(e){return Object(c.jsx)(G,{card:a[e],updateCard:n,deleteCard:r,FileInput:i,Download:o,downloadCard:l},e)})),Object(c.jsx)(A,{onAddCard:t,FileInput:i})]})]})},Q=t(9),z=t.n(Q),K=Object(r.forwardRef)((function(e,a){var t=e.card,n=t.name,r=t.company,i=t.theme,o=t.title,l=t.email,s=t.message,u=t.fileName,d=t.fileURL,m=t.id,j=d||"/images/default.png";return Object(c.jsxs)("li",{ref:a,id:m,className:"".concat(z.a.card," ").concat(V(i)),children:[Object(c.jsxs)("div",{className:z.a.cardHead,children:[Object(c.jsx)("img",{src:j,alt:u,className:z.a.headImg}),Object(c.jsxs)("div",{className:z.a.headText,children:[Object(c.jsx)("p",{className:z.a.name,children:n}),Object(c.jsx)("p",{className:z.a.company,children:r})]})]}),Object(c.jsxs)("div",{className:z.a.cardBody,children:[Object(c.jsx)("p",{className:z.a.title,children:o}),Object(c.jsx)("p",{className:z.a.email,children:l}),Object(c.jsx)("p",{className:z.a.message,children:'"'.concat(s,'"')})]})]})}));function V(e){switch(e){case"light":return z.a.light;case"dark":return z.a.dark;case"sky":return z.a.sky;case"orange":return z.a.orange;default:throw new Error("not theme ".concat(e))}}var W=i.a.memo(K),Y=t(40),q=t.n(Y),X=Object(r.forwardRef)((function(e,a){var t=e.cards;return Object(c.jsxs)("div",{className:q.a.preview,children:[Object(c.jsx)("h2",{children:"Card Preview"}),Object(c.jsx)("ul",{className:q.a.cards,children:Object.keys(t).map((function(e,n){return Object(c.jsx)(W,{ref:function(e){return a.current[n]=e},card:t[e]},e)}))})]})})),Z=t(31),$=t(48),ee=t.n($),ae=function(e){var a=e.authService,t=e.FileInput,i=e.cardRepository,o=e.Download,l=Object(v.f)().state,s=Object(r.useState)({}),u=Object(C.a)(s,2),d=u[0],m=u[1],j=Object(r.useState)(l&&l.id),f=Object(C.a)(j,2),b=f[0],_=f[1],h=Object(r.useRef)([]);Object(r.useEffect)((function(){h.current=h.current.slice(0,Object.keys(d).length)}),[d]);var x=Object(v.f)(),g=Object(r.useCallback)((function(){a.logout()}),[a]);Object(r.useEffect)((function(){if(b){var e=i.syncCards(b,(function(e){m(e)}));return function(){return e()}}}),[i,b]),Object(r.useEffect)((function(){var e=a.onAuthChange((function(e){e?_(e.uid):x.push("/")}));return function(){return e()}}),[a,b,x]);var k=function(e){m((function(a){var t=Object(n.a)({},a);return t[e.id]=e,t})),i.saveCard(b,e)};return Object(c.jsxs)("section",{className:w.a.container,children:[Object(c.jsx)(p,{onLogout:g}),Object(c.jsxs)("div",{className:w.a.maker,children:[Object(c.jsx)(J,{cards:d,onAddCard:k,updateCard:k,deleteCard:function(e){m((function(a){var t=Object(n.a)({},a);return delete t[e.id],t})),i.removeCard(b,e)},FileInput:t,Download:o,downloadCard:function(e){var a=h.current.find((function(a){var t=a.getAttribute("id");return parseInt(t)===e}));Z.a(a).then((function(e){ee()(e,"card.png")}))}}),Object(c.jsx)(X,{cards:d,ref:h})]}),Object(c.jsx)(O,{})]})},te=t(26);t(23).b.add(te.a,te.c,te.d,te.b);var ne=function(e){var a=e.authService,t=e.FileInput,n=e.cardRepository,r=e.Download;return Object(c.jsx)("div",{className:u.a.app,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(k,{authService:a})}),Object(c.jsx)(v.a,{path:"/maker",children:Object(c.jsx)(ae,{authService:a,FileInput:t,cardRepository:n,Download:r})})]})})})},ce=t(16),re=t(17),ie=t(27),oe=(t(62),t(64),ie.a.initializeApp({apiKey:"AIzaSyB35u86_irCXMzGEhCv_--dhawgpOwu254",authDomain:"visiting-card-maker-21ca6.firebaseapp.com",databaseURL:"https://visiting-card-maker-21ca6.firebaseio.com",projectId:"visiting-card-maker-21ca6"})),le=oe.auth(),se=oe.database(),ue=new ie.a.auth.GoogleAuthProvider,de=new ie.a.auth.FacebookAuthProvider,me=new ie.a.auth.GithubAuthProvider,je=function(){function e(){Object(ce.a)(this,e)}return Object(re.a)(e,[{key:"login",value:function(e){var a=this.getProvider(e);return le.signInWithPopup(a)}},{key:"logout",value:function(){le.signOut()}},{key:"onAuthChange",value:function(e){var a=le.onAuthStateChanged((function(a){return e(a)}));return function(){return a()}}},{key:"getProvider",value:function(e){switch(e){case"Google":return ue;case"Facebook":return de;case"Github":return me;default:throw new Error("not supported provider ".concat(e))}}}]),e}(),fe=t(4),pe=t.n(fe),be=t(30),_e=function(){function e(){Object(ce.a)(this,e)}return Object(re.a)(e,[{key:"upload",value:function(){var e=Object(be.a)(pe.a.mark((function e(a){var t,n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","kimexample"),e.next=5,fetch("https://api.cloudinary.com/v1_1/kimsunyang/upload",{method:"POST",body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}(),he=t(21),Oe=t.n(he),xe=function(e){var a=e.imageUploader,t=e.name,n=e.onFileChange,i=Object(r.useMemo)((function(){return Object(c.jsxs)("span",{children:["No Image",Object(c.jsx)(d.a,{icon:"upload",className:Oe.a.icon})]})}),[]),o=Object(r.useState)(!1),l=Object(C.a)(o,2),s=l[0],u=l[1],m=Object(r.useRef)("null"),j=function(){var e=Object(be.a)(pe.a.mark((function e(t){var c;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,a.upload(t.target.files[0]);case 3:c=e.sent,u(!1),n({name:c.original_filename,url:c.url});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:Oe.a.container,children:[Object(c.jsx)("input",{ref:m,className:Oe.a.input,type:"file",accept:"image/*",name:"file",onChange:j}),!s&&Object(c.jsx)("button",{className:"".concat(Oe.a.button," ").concat(t&&Oe.a.uploaded),onClick:function(e){e.preventDefault(),m.current.click()},children:t||i}),s&&Object(c.jsx)("div",{className:Oe.a.loading})]})},ge=i.a.memo(xe),ve=function(){function e(){Object(ce.a)(this,e)}return Object(re.a)(e,[{key:"syncCards",value:function(e,a){var t=se.ref("".concat(e,"/cards"));return t.on("value",(function(e){var t=e.val();t&&a(t)})),function(){return t.off()}}},{key:"saveCard",value:function(e,a){se.ref("".concat(e,"/cards/").concat(a.id)).set(a)}},{key:"removeCard",value:function(e,a){se.ref("".concat(e,"/cards/").concat(a.id)).remove()}}]),e}(),ke=function(){function e(){Object(ce.a)(this,e)}return Object(re.a)(e,[{key:"urlPng",value:function(e){Z.a(e).then((function(e){var a=new Image;a.src=e,document.body.appendChild(a)})).catch((function(e){console.error("oops, something went wrong!",e)}))}}]),e}(),ye=t(41),Ce=t.n(ye),Ne=function(e){e.htmlToImage;var a=e.card,t=e.downloadCard,n=Object(r.useMemo)((function(){return Object(c.jsxs)("span",{children:["Download",Object(c.jsx)(d.a,{icon:"download",className:Ce.a.icon})]})}),[]);return Object(c.jsx)("button",{className:Ce.a.button,onClick:function(e){e.preventDefault(),t(a.id)},children:n})},we=i.a.memo(Ne),Re=new je,Fe=new ve,Be=new _e,Ie=new ke,Le=i.a.memo((function(e){return Object(c.jsx)(ge,Object(n.a)(Object(n.a)({},e),{},{imageUploader:Be}))})),De=i.a.memo((function(e){return Object(c.jsx)(we,Object(n.a)(Object(n.a)({},e),{},{htmlToImage:Ie}))}));l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ne,{authService:Re,FileInput:Le,cardRepository:Fe,Download:De})}),document.getElementById("root"))},9:function(e,a,t){e.exports={makerBlue:"#08aeec",makerBlack:"#2b2d39",makerOrange:"orange",makerLight:"lightyellow",light:"card_light__3miQK",dark:"card_dark__3KBCF",sky:"card_sky__MFiag",orange:"card_orange__2g6_I",card:"card_card__VGUkh",cardHead:"card_cardHead__1HTKt",headImg:"card_headImg__1JETl",headText:"card_headText__1uHjh",name:"card_name__2Loiz",cardBody:"card_cardBody__12t27",title:"card_title__1h-3c",email:"card_email__3dWRP"}}},[[67,1,2]]]);
//# sourceMappingURL=main.8fd95240.chunk.js.map