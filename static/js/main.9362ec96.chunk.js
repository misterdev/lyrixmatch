(this.webpackJsonplyrixmatch=this.webpackJsonplyrixmatch||[]).push([[0],{46:function(e,n,t){e.exports=t(58)},51:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(20),l=t.n(c),o=(t(51),t(5)),u=t(21),i=t(9),s=t(6),m=t(83),f=t(84),d=t(85),b=t(86),h=t(87),g=t(43),p=t.n(g),E=t(41),v=t.n(E),x=t(42),O=t.n(x),j=t(78),y=t(40),w=t.n(y),k=t(75),S=t(76);function I(){var e=Object(o.a)(["\n  background-color: #bbb !important;\n"]);return I=function(){return e},e}function _(){var e=Object(o.a)(["\n  max-height: 40vh;\n"]);return _=function(){return e},e}function L(){var e=Object(o.a)(["\n  padding: 40px;\n  border-radius: 8px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 5px 15px 0px #333;\n"]);return L=function(){return e},e}function R(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 7vh 10vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n"]);return R=function(){return e},e}var A=s.a.div(R()),M=s.a.div(L()),P=Object(s.a)(k.a)(_()),z=Object(s.a)(S.a)(I()),C=t(18),Y=t(77);function D(){var e=Object(o.a)(["\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1em;\n"]);return D=function(){return e},e}function T(){var e=Object(o.a)(["\n  flex-grow: 1;\n"]);return T=function(){return e},e}function J(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // border: 1px solid #666;\n  padding: 10px;\n"]);return J=function(){return e},e}function W(){var e=Object(o.a)(["\n  text-align: center;\n"]);return W=function(){return e},e}function q(){var e=Object(o.a)(["\n  text-align: center;\n  color: #333;\n"]);return q=function(){return e},e}function B(){var e=Object(o.a)(["\n  background-color: white;\n  background-size: auto 85%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 45vh;\n  max-width: 300px;\n  height: 85vh;\n  max-height: 570px;\n  will-change: transform;\n  border-radius: 10px;\n  padding: 30px;\n  box-sizing: borer-box;\n  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),\n    0 10px 10px -10px rgba(50, 50, 73, 0.3);\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return e},e}function F(){var e=Object(o.a)(["\n  position: absolute;\n  will-change: transform;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return F=function(){return e},e}var G=function(e,n){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(n,")")},H=Object(s.a)(C.a.div)(F()),N=Object(s.a)(C.a.div)(B()),U=s.a.h2(q()),X=s.a.h1(W()),Z=s.a.div(J()),K=Object(s.a)(Y.a)(T()),Q=s.a.div(D()),V=function(e){var n=e.rot,t=e.scale,c=e.card,l=e.onResult,o=e.index,u=e.style,s=c.quote,m=c.options,f=c.answer,d=c.track,b=Object(r.useState)(null),h=Object(i.a)(b,2),g=h[0],p=h[1];return a.a.createElement(H,{style:u},a.a.createElement(N,{style:{transform:Object(C.b)([n,t],G)}},a.a.createElement(U,null,"(",o,") Who sings..."),a.a.createElement(X,null,'"',s,'"'),a.a.createElement("br",null),m.map((function(e,n){return a.a.createElement(Z,{key:n},a.a.createElement(K,{variant:null===g||n!==f?"outlined":"contained",color:null===g||g===f?"primary":"secondary",onClick:function(){return e=n,void(null===g&&(p(e),l(e===f)));var e}},a.a.createElement("h3",null,e)))})),null!==g&&a.a.createElement(Q,null,a.a.createElement("span",null,"\ud83c\udfb5")," ",a.a.createElement("b",null,d))))};function $(){var e=Object(o.a)(["\n  padding: 0px 30px;\n  margin: 0px 10px;\n  box-sizing: border-box;\n  background-color: rgba(176, 95, 25);\n  color: white;\n"]);return $=function(){return e},e}function ee(){var e=Object(o.a)(["\n  padding: 0px 30px;\n  margin: 0px 10px;\n  box-sizing: border-box;\n  background-color: rgba(63, 130, 38);\n  color: white;\n"]);return ee=function(){return e},e}function ne(){var e=Object(o.a)(["\n  z-index: 100;\n  position: fixed;\n  top: 80px;\n  height: 60px;\n  display: flex;\n"]);return ne=function(){return e},e}function te(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return te=function(){return e},e}var re=s.a.div(te()),ae=s.a.div(ne()),ce=Object(s.a)(M)(ee()),le=Object(s.a)(M)($()),oe=function(e){var n=e.cards,t=e.setLastScore,c=Object(r.useState)(0),l=Object(i.a)(c,2),o=l[0],s=l[1],m=Object(r.useState)(0),f=Object(i.a)(m,2),d=f[0],b=f[1],h=Object(r.useState)(null),g=Object(i.a)(h,2),p=g[0],E=g[1],v=Object(r.useState)(null),x=Object(i.a)(v,2),O=x[0],j=x[1],y=Object(C.c)(n.length,(function(e){return Object(u.a)({},function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e,opacity:1}}(e),{from:{x:0,rot:0,scale:1.5,y:-1e3,opacity:1}})})),w=Object(i.a)(y,2),k=w[0],S=w[1],I=function(){b((function(e){return e+1})),setTimeout((function(){S((function(e){return d===L(e)?{x:1e3,opacity:0}:null})),_()}),1500)},_=function(){clearInterval(O),j(null),E(20)},L=function(e){return n.length-1-e};return Object(r.useEffect)((function(){if(null===p)_();else if(!O&&p>0){var e=setInterval((function(){E((function(e){return e-1}))}),1e3);j(e)}else O&&0===p&&d!==n.length?(clearInterval(O),j(null),I()):d===n.length&&(clearInterval(O),setTimeout((function(){return t({score:o,date:(new Date).toLocaleString()})}),1500))}),[p,d]),a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement(le,null,a.a.createElement("h3",null,p,"s")),a.a.createElement(ce,null,a.a.createElement("h3",null,"Your score: ",o,"/",d))),k.map((function(e,t){var r=e.x,c=e.y,l=e.rot,o=e.scale,u=e.opacity;return a.a.createElement(V,{key:t,index:L(t)+1,rot:l,scale:o,card:n[t],onResult:function(e){return n=e,void(p>0&&(n&&s((function(e){return e+1})),clearInterval(O),I()));var n},style:{opacity:u,transform:Object(C.b)([r,c],(function(e,n){return"translate3d(".concat(e,"px,").concat(n,"px,0)")}))}})})))},ue=t(31),ie=t.n(ue),se=t(39),me=t.n(se),fe=function(e,n){return"https://api.musixmatch.com/ws/1.1/".concat(e,"?format=jsonp&callback=callback&").concat(n,"&apikey=").concat("ba86ae56dbd085f1a001ee4739a8e45b")},de=function(e){return me()(e).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e.message.body)}))},be=null;de(fe("chart.artists.get","page=1&page_size=80&country=it")).then((function(e){var n=e.artist_list;return be=n.map((function(e){return e.artist.artist_name}))}));var he=function(e){return function(e){return de(fe("chart.tracks.get","page=".concat(e,"&page_size=10&country=it&f_has_lyrics=1"))).then((function(e){var n=e.track_list;return Promise.resolve(n.map((function(e){var n=e.track;return{commontrack_id:n.commontrack_id,artist_name:n.artist_name,track_name:n.track_name}})))}))}(e).then((function(e){return Promise.all(e.map((function(e){return ie.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=u.a,n.t1={},n.t2=e,n.next=5,ie.a.awrap((t=e.commontrack_id,de(fe("track.lyrics.get","commontrack_id=".concat(t))).then((function(e){var n=e.lyrics;return Promise.resolve(n.lyrics_body.split("\n").filter((function(e){return e&&""!==e&&e.length>20&&e.length<50}))[0])}))));case 5:return n.t3=n.sent,n.t4={quote:n.t3},n.abrupt("return",(0,n.t0)(n.t1,n.t2,n.t4));case 8:case"end":return n.stop()}var t}))})))})).then((function(e){return Promise.resolve(e.map((function(e){for(var n=e.artist_name,t=e.track_name,r=e.quote,a=Math.floor(2*Math.random()),c=[];c.length<3;)if(c.length===a)c.push(n);else{var l=Math.floor(Math.random()*be.length-1),o=be[l];o&&""!==o&&o!==n&&c.push(o)}return{quote:r,options:c,answer:a,track:t}})))}))};function ge(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ge=function(){return e},e}var pe=s.a.div(ge()),Ee=function(e){var n=e.saveScore,t=Object(r.useState)(!1),c=Object(i.a)(t,2),l=c[0],o=c[1],u=Object(r.useState)(null),s=Object(i.a)(u,2),m=s[0],f=s[1],d=Object(r.useState)(null),b=Object(i.a)(d,2),h=b[0],g=b[1];return Object(r.useEffect)((function(){null!==m&&(n(m),o(!1))}),[m]),a.a.createElement(pe,null,l?a.a.createElement(oe,{cards:h,setLastScore:f}):a.a.createElement(M,null,a.a.createElement("h3",null,"\ud83e\udd47 ",null===m?"Get Ready!":"Play Again!"," \ud83e\udd47"),a.a.createElement("br",null),a.a.createElement(j.a,{color:"primary",onClick:function(){var e;he((e=18,Math.floor(Math.random()*Math.floor(e)))).then((function(e){g(e),o(!0)}))}},a.a.createElement(w.a,null)),a.a.createElement("h4",null,null!==m&&"Last Score: ".concat(m.score))))},ve=t(60),xe=t(79),Oe=t(80),je=t(81),ye=t(82),we=function(e){var n=e.scores||[];return n&&(n=n.sort((function(e,n){return n.score-e.score}))),a.a.createElement(A,null,a.a.createElement(M,null,a.a.createElement("h3",null,"\ud83c\udfc6 LEADERBOARD \ud83c\udfc6"),a.a.createElement("br",null),a.a.createElement(P,{component:ve.a},a.a.createElement(xe.a,{stickyHeader:!0},a.a.createElement(Oe.a,null,a.a.createElement(je.a,null,0===n.length?a.a.createElement(S.a,{align:"center"},"IF YOU PLAY NOW YOU WILL BE #1!"):a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{align:"center"},"#"),a.a.createElement(z,{align:"center"},"PLAYER"),a.a.createElement(z,{align:"center"},"SCORE"),a.a.createElement(z,{align:"center"},"DATE")))),a.a.createElement(ye.a,null,n.map((function(e,n){return a.a.createElement(je.a,{key:n},a.a.createElement(S.a,{align:"center"},n+1),a.a.createElement(S.a,{align:"center"},e.userId),a.a.createElement(S.a,{align:"center"},e.score),a.a.createElement(S.a,{align:"center"},e.date))})))))))},ke=t(88),Se=function(e){var n=e.user,t=e.login,c=e.logout,l=Object(r.useState)(""),o=Object(i.a)(l,2),u=o[0],s=o[1];return a.a.createElement(A,null,n?a.a.createElement(M,null,a.a.createElement("h3",null,"\u2b50 Welcome ",a.a.createElement("u",null,n.name)," \u2b50"),a.a.createElement("br",null),a.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:function(){return c()}},"LOGOUT"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(P,{component:ve.a},a.a.createElement(xe.a,{stickyHeader:!0},a.a.createElement(Oe.a,null,a.a.createElement(je.a,null,0===n.scores.length?a.a.createElement(z,{align:"center"},"PLAY THE GAME TO SEE YOUR SCORES HERE!"):a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{align:"center"},"SCORE"),a.a.createElement(z,{align:"center"},"DATE")))),a.a.createElement(ye.a,null,n.scores.map((function(e,n){return a.a.createElement(je.a,{key:n},a.a.createElement(S.a,{align:"center"},e.score),a.a.createElement(S.a,{align:"center"},e.date))})))))):a.a.createElement(M,null,a.a.createElement("h2",null,"What's your name?"),a.a.createElement("form",{onSubmit:function(){return u.length>0?t(u):null}},a.a.createElement(ke.a,{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Elon, Mark, Steve,..."}," "),"\xa0\xa0",a.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",disabled:0===u.length},"LOGIN"))))},Ie=[{userId:"elon",score:8,date:"28/08/2019, 11:25:11"},{userId:"elon",score:9,date:"28/08/2019, 10:05:22"},{userId:"mark",score:2,date:"02/09/2017, 08:30:24"},{userId:"steve",score:7,date:"17/11/2016, 21:07:56"},{userId:"steve",score:3,date:"29/09/2004, 01:43:56"}],_e={elon:{id:"elon",name:"Elon Musk"},mark:{id:"mark",name:"Mark Zuck"},steve:{id:"steve",name:"Steve Jobs"}},Le=t(19),Re=function(e,n){return localStorage.setItem(e,JSON.stringify(n))},Ae=function(e){return JSON.parse(localStorage.getItem(e))},Me=function(e){return Re("authId",e)},Pe=function(e){var n,t=Ae("users");return t&&(n=t[e]),n&&(n.scores=ze(e)),n},ze=function(e){return Ae("scores").filter((function(n){var t=n.userId;n._;return t===e}))};function Ce(){var e=Object(o.a)(["\n  height: calc(100vh - 120px);\n  width: 100%;\n  position: absolute;\n"]);return Ce=function(){return e},e}function Ye(){var e=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  background-color: #85aded;\n"]);return Ye=function(){return e},e}function De(){var e=Object(o.a)(["\n  width: 100%;\n  text-align: center;\n"]);return De=function(){return e},e}function Te(){var e=Object(o.a)(["\n  background-color: white;\n  color: #666;\n"]);return Te=function(){return e},e}function Je(){var e=Object(o.a)(["\n  bottom: 0;\n  width: 100%;\n  z-index: 10;\n"]);return Je=function(){return e},e}function We(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return We=function(){return e},e}var qe=function(e,n){switch(n.type){case"login":return Me(n.user.id),n.user;case"logout":return Me(null),null;case"newScore":return e.scores.push(n.newScore),e;default:return e}},Be=function(e){var n=e.children,t=e.page,r=e.index;return a.a.createElement(Xe,{hidden:t!==r},n)},Fe=s.a.div(We()),Ge=Object(s.a)(d.a)(Je()),He=Object(s.a)(b.a)(Te()),Ne=Object(s.a)(h.a)(De()),Ue=s.a.div(Ye()),Xe=s.a.div(Ce()),Ze=function(){!function(e,n){Ae("scores")||Re("scores",e),Ae("users")||Re("users",n)}(Ie,_e);var e=Ae("authId"),n=Object(r.useReducer)(qe,Pe(e)),t=Object(i.a)(n,2),c=t[0],l=t[1],o=Object(r.useState)(Ae("scores")),s=Object(i.a)(o,2),d=s[0],b=s[1],h=Object(r.useState)(1),g=Object(i.a)(h,2),E=g[0],x=g[1],j=function(e){var n=e.toLowerCase(),t=Pe(n),r=ze(n);t||(t=function(e,n){var t=Ae("users");return t[e]={id:e,name:n},Re("users",t),t[e]}(n,e)),t.scores=r,l({type:"login",user:t})};return a.a.createElement(Fe,null,a.a.createElement(m.a,{position:"static"},a.a.createElement(He,null,a.a.createElement(Ne,{variant:"h6"},"LyriXmatch"))),a.a.createElement(Ue,null,a.a.createElement(Be,{page:E,index:0},a.a.createElement(we,{scores:d})),a.a.createElement(Be,{page:E,index:1},c?a.a.createElement(Ee,{saveScore:function(n){var t=Object(u.a)({},n,{userId:e});b((function(e){return e.push(t),e})),l({type:"newScore",newScore:t}),function(e){var n=Ae("scores");Re("scores",[].concat(Object(Le.a)(n),[e]))}(t)}}):a.a.createElement(Se,{user:c,login:j,logout:function(){return l({type:"logout"})}})),a.a.createElement(Be,{page:E,index:2},a.a.createElement(Se,{user:c,login:j,logout:function(){return l({type:"logout"})}}))),a.a.createElement(Ge,{value:E,onChange:function(e,n){x(n)},showLabels:!0},a.a.createElement(f.a,{label:"LEADERBOARD",icon:a.a.createElement(v.a,null)}),a.a.createElement(f.a,{label:"PLAY",icon:a.a.createElement(O.a,null)}),a.a.createElement(f.a,{label:"PROFILE",icon:a.a.createElement(p.a,null)})))};console={log:function(){},warn:function(){},error:function(){}},l.a.render(a.a.createElement(Ze,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9362ec96.chunk.js.map