(function(t){function e(e){for(var r,o,l=e[0],u=e[1],s=e[2],b=0,O=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&O.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);i&&i(e);while(O.length)O.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var i=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container-fluid"},a={class:"row-justify-contnet-center"},o={class:"col-md-10 col-lg-7"};function l(t,e,n,l,u,s){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",c,[Object(r["g"])("div",a,[Object(r["g"])("div",o,[Object(r["i"])(b)])])])],64)}var u=function(t){return Object(r["u"])("data-v-0cd3a58a"),t=t(),Object(r["s"])(),t},s={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Navbar"),O=u((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),j={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav ms-auto"},g={class:"nav-item"},d=Object(r["h"])("Pictures"),m={class:"nav-item"},f=Object(r["h"])("My Account"),h={class:"nav-item"},v=u((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={class:"nav-item"},w=u((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign up ",-1)})),P=u((function(){return Object(r["g"])("li",{class:"nav-item"},[Object(r["g"])("button",{class:"btn btn-warning"},"Logout")],-1)}));function k(t,e){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",s,[Object(r["g"])("div",i,[Object(r["i"])(n,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),O,Object(r["g"])("div",j,[Object(r["g"])("ul",p,[Object(r["g"])("li",g,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/pictures"},{default:Object(r["E"])((function(){return[d]})),_:1})]),Object(r["g"])("li",m,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[f]})),_:1})]),Object(r["g"])("li",h,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})]),Object(r["g"])("li",y,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[w]})),_:1})]),P])])])])}n("93fc");var A=n("6b0d"),x=n.n(A);const S={},E=x()(S,[["render",k],["__scopeId","data-v-0cd3a58a"]]);var U=E,N={name:"App",components:{"my-header":U},created:function(){this.$store.dispatch("getPictures"),this.$store.dispatch("tryAutoLogin")}};n("9c3f");const C=x()(N,[["render",l]]);var I=C,_=n("bc3a"),$=n.n(_),D=n("6c02"),L=Object(r["g"])("h1",null,"Home",-1),T=[L];function F(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,T)}var q={};const M=x()(q,[["render",F]]);var B=M,V=Object(r["g"])("h1",null,"Login",-1),K={key:0,class:"alert alert-success"},z={class:"mb-3"},H=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),G={class:"mb-3"},J=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),R=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[V,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",K," Thanks for signin up, please log in now. ")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",z,[H,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.email=t})},null,512),[[r["C"],a.email]])]),Object(r["g"])("div",G,[J,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),R,a.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," Invalid credentials ")):Object(r["e"])("",!0),a.loginError?(Object(r["r"])(),Object(r["f"])("p",W," Could not log you in, please try again later ")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};$.a.post("/person/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),localStorage.setItem("token",e.data.token);var n=new Date,r=new Date(n.getTime()+36e5);localStorage.setItem("expiration",r),t.$store.dispatch("setLogoutTimer"),t.$router.replace("/account")})).catch((function(e){console.log("error in /person/login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=x()(Y,[["render",X]]);var tt=Z,et=(n("a4d3"),n("e01a"),{class:"card"}),nt={class:"card-body"},rt={class:"text-primary"},ct={class:"text-primary"},at=Object(r["g"])("br",null,null,-1),ot=Object(r["h"])(" Picture Placeholder: "),lt=Object(r["g"])("br",null,null,-1),ut=Object(r["h"])(" Description: "),st=Object(r["g"])("br",null,null,-1),it=Object(r["h"])(" Location: "),bt=Object(r["g"])("br",null,null,-1),Ot=Object(r["h"])(" Date Posted: "),jt=Object(r["g"])("br",null,null,-1),pt=Object(r["h"])(" Hashtag: "),gt=Object(r["g"])("br",null,null,-1),dt=Object(r["g"])("br",null,null,-1),mt=Object(r["g"])("button",{class:"btn btn-success"},"Add a Comment",-1),ft=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Comment ",-1),ht=Object(r["g"])("br",null,null,-1),vt=Object(r["g"])("br",null,null,-1);function yt(t,e,n,c,a,o){var l=Object(r["y"])("router-link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",et,[Object(r["g"])("div",nt,[Object(r["g"])("h2",rt,Object(r["A"])(o.picture.title),1),Object(r["g"])("h4",ct,Object(r["A"])(o.picture.username),1),at,Object(r["g"])("p",null,[ot,lt,Object(r["g"])("strong",null,Object(r["A"])(o.picture.heightInPixels),1)]),Object(r["g"])("p",null,[ut,st,Object(r["g"])("strong",null,Object(r["A"])(o.picture.description),1)]),Object(r["g"])("p",null,[it,bt,Object(r["g"])("strong",null,Object(r["A"])(o.picture.location),1)]),Object(r["g"])("p",null,[Ot,jt,Object(r["g"])("strong",null,Object(r["A"])(o.picture.datePosted),1)]),Object(r["g"])("p",null,[pt,gt,Object(r["g"])("strong",null,Object(r["A"])(o.picture.hashtag),1)])])]),dt,o.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/picture/".concat(this.$route.params.pk,"/comment")},{default:Object(r["E"])((function(){return[mt]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[ft]})),_:1})),ht,vt,Object(r["i"])(u)])}n("7db0"),n("d3b7");var wt={computed:{picture:function(){var t=this,e=this.$store.state.pictures,n=e.find((function(e){return e.PicturePK==t.$route.params.pk}));return n},auth:function(){return this.$store.state.token}}};const Pt=x()(wt,[["render",yt]]);var kt=Pt,At=Object(r["g"])("h1",null,"Pictures",-1),xt=Object(r["g"])("hr",null,null,-1),St={class:"table"},Et=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Username"),Object(r["g"])("th",null,"Title"),Object(r["g"])("th",null,"Description"),Object(r["g"])("th",null,"Picture Placeholder"),Object(r["g"])("th",null,"Picture Placeholder"),Object(r["g"])("th",null,"Location"),Object(r["g"])("th",null,"Date Posted"),Object(r["g"])("th",null,"Hashtag"),Object(r["g"])("th",null,"Details")])],-1),Ut=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1),Nt=Object(r["g"])("tbody",null,null,-1);function Ct(t,e,n,c,a,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[At,xt,Object(r["g"])("table",St,[Et,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.thePictures,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.PicturePK},[Object(r["g"])("th",null,Object(r["A"])(t.username),1),Object(r["g"])("th",null,Object(r["A"])(t.title),1),Object(r["g"])("th",null,Object(r["A"])(t.description),1),Object(r["g"])("th",null,Object(r["A"])(t.widthInPixels),1),Object(r["g"])("th",null,Object(r["A"])(t.heightInPixels),1),Object(r["g"])("th",null,Object(r["A"])(t.location),1),Object(r["g"])("th",null,Object(r["A"])(t.datePosted),1),Object(r["g"])("th",null,Object(r["A"])(t.hashtag),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/picture/".concat(t.PicturePK)},{default:Object(r["E"])((function(){return[Ut]})),_:2},1032,["to"])])])})),128))]),Nt])])}var It={computed:{thePictures:function(){return this.$store.state.pictures}}};const _t=x()(It,[["render",Ct]]);var $t=_t,Dt=Object(r["g"])("h1",null,"Not Found",-1),Lt=Object(r["g"])("h4",null,"Sorry, this page can't be found",-1),Tt=[Dt,Lt];function Ft(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,Tt)}var qt={};const Mt=x()(qt,[["render",Ft]]);var Bt=Mt,Vt=Object(r["g"])("h1",null,"Create a Comment",-1),Kt=[Vt];function zt(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,Kt)}var Ht={};const Gt=x()(Ht,[["render",zt]]);var Jt=Gt,Rt=Object(r["g"])("h1",null,"Sign Up",-1),Qt={class:"mb-3"},Wt=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Xt={class:"mb-3"},Yt=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Zt={class:"mb-3"},te=Object(r["g"])("label",{for:"Uname-input",class:"form-label"},"Username",-1),ee={class:"mb-3"},ne=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),re={key:0,class:"text-danger"},ce={class:"mb-3"},ae=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),oe=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),le={id:"error-signup",class:"text-danger"};function ue(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",null,[Rt,Object(r["g"])("form",{onSubmit:e[5]||(e[5]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",Qt,[Wt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.firstName=t})},null,512),[[r["C"],a.firstName]])]),Object(r["g"])("div",Xt,[Yt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.lastName=t})},null,512),[[r["C"],a.lastName]])]),Object(r["g"])("div",Zt,[te,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"Uname-input",required:"",placeholder:"Username","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.username=t})},null,512),[[r["C"],a.username]])]),Object(r["g"])("div",ee,[ne,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.email=t})},null,512),[[r["C"],a.email]]),a.dupEmail?(Object(r["r"])(),Object(r["f"])("small",re,"Please chose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ce,[ae,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),oe,Object(r["g"])("p",le,Object(r["A"])(a.errorMessage),1)],32)])])}var se={data:function(){return{firstName:"",lastName:"",username:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={firstName:this.firstName,lastName:this.lastName,username:this.username,email:this.email,password:this.password};console.log(e),$.a.post("/person",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up, please try again later"}))}}};const ie=x()(se,[["render",ue]]);var be=ie,Oe=Object(r["g"])("h1",null,"Account",-1),je=Object(r["g"])("hr",null,null,-1),pe={key:0,class:"text-danger"},ge={key:1,class:"table"},de=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Comment"),Object(r["g"])("th",null,"Date")],-1);function me(t,e,n,c,a,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[Oe,je,Object(r["g"])("h3",null,Object(r["A"])(o.firstName)+"'s Comments",1),a.accountError?(Object(r["r"])(),Object(r["f"])("p",pe," Cannot get your account information, please try again later. ")):Object(r["e"])("",!0),a.commentsByUser?(Object(r["r"])(),Object(r["f"])("table",ge,[de,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.commentsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.CommentPK},[Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/picture/".concat(t.PicturePK[0])},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(t.text),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(t.date),1)])})),128))])])):Object(r["e"])("",!0)])}var fe={data:function(){return{commentsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("here is the store so far",this.$store.state),this.$store.state.user.NameFirst}},created:function(){var t=this;$.a.get("/comments/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("here is the response",e),t.commentsByUser=e.data})).catch((function(){t.accountError=!0}))}};const he=x()(fe,[["render",me]]);var ve=he,ye=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",component:B},{path:"/account",component:ve},{path:"/login",component:tt},{path:"/pictures",component:$t},{path:"/picture/:pk",component:kt,children:[{path:"comment",component:Jt}]},{path:"/signup",component:be},{path:"/:invalidroute(.*)",component:Bt}]}),we=ye,Pe=n("5502"),ke=Object(Pe["a"])({state:{token:null,user:null,pictures:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storePictures:function(t,e){t.pictures=e},clearAuthData:function(t){t.token=null,t.user=null}},actions:{getPictures:function(t){var e=t.commit;$.a.get("/pictures").then((function(t){console.log("response in /pictures",t),e("storePictures",t.data[0])}))},logout:function(t){var e=t.commit,n=t.state;$.a.post("/person/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){e("clearAuthData"),localStorage.clear("token"),localStorage.clear("expiration"),we.replace("/")})).catch((function(){console.log("error in loggins out")}))},tryAutoLogin:function(t){var e=this,n=t.commit,r=localStorage.getItem("token");if(r){var c=new Date(localStorage.getItem("expiration")),a=new Date;a>=c||$.a.get("/comments/me",{headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){n("storeUserInApp",t.data),n("storeTokenInApp",r),e.dispatch("setLogoutTimer")})).catch((function(){we.replace("/")}))}},setLogoutTimer:function(t){var e=t.dispatch,n=new Date(localStorage.getItem("expiration")),r=new Date,c=n-r;setTimeout((function(){e("logout")}),c)}}});$.a.defaults.baseURL="https://cis410-fa21-daniels-api.azurewebsites.net";var Ae=Object(r["c"])(I);Ae.use(we),Ae.use(ke),Ae.mount("#app")},"59ba":function(t,e,n){},"76ed":function(t,e,n){},"93fc":function(t,e,n){"use strict";n("76ed")},"9c3f":function(t,e,n){"use strict";n("59ba")}});
//# sourceMappingURL=app.1d55d273.js.map