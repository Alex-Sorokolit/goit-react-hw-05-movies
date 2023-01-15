"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[793],{793:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,o,i,a,c,l,s,u,p,d=e(433),h=e(861),f=e(439),g=e(757),x=e.n(g),m=e(899),b=e(168),v=e(444),Z=v.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #0d1117;\n"]))),y=v.ZP.form(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 50%;\n  max-width: 200px;\n  background-color: #fff;\n  border-radius: 3px;\n  height: 30px;\n  margin-bottom: 20px;\n"]))),w=v.ZP.button(i||(i=(0,b.Z)(["\n  width: 30px;\n  height: 30px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: 0;\n  opacity: 0.6;\n  cursor: pointer;\n  outline: none;\n  color: black;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),j=v.ZP.input(a||(a=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),k=e(184),S=function(n){var t=n.value,e=n.onSubmit,r=n.onChange;return(0,k.jsx)(Z,{children:(0,k.jsxs)(y,{onSubmit:e,children:[(0,k.jsx)(j,{type:"text",value:t,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){return r(n.target.value)}}),(0,k.jsx)(w,{type:"submit",onClick:e,children:(0,k.jsx)("span",{children:(0,k.jsx)(m.lnn,{})})})]})})},_=e(791),P=e(306),C=e(221),z=e(431),A=e(87),M=e(689),N=e(14),q=v.ZP.button(c||(c=(0,b.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background: #0d1117;\n  font-size: 20px;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  min-width: 80px;\n  padding: 10px;\n  &:hover {\n    background: orangered;\n    color: white;\n  }\n"]))),F=function(n){var t=n.loadMore;return(0,k.jsx)(q,{className:"Button",onClick:t,children:"Load More"})},H=v.ZP.div(l||(l=(0,b.Z)(["\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),I=(v.ZP.li(s||(s=(0,b.Z)(["\n  width: 200px;\n  height: 300px;\n  background-color: grey;\n"]))),v.ZP.div(u||(u=(0,b.Z)(["\n  width: 200px;\n  height: 300px;\n"])))),J=v.ZP.img(p||(p=(0,b.Z)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  object-fit: cover;\n"]))),O=function(){var n,t=function(n){try{var t=localStorage.getItem(n);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error: ",e.message)}}("movies"),e=(0,_.useState)(t||[]),r=(0,f.Z)(e,2),o=r[0],i=r[1],a=(0,_.useState)(""),c=(0,f.Z)(a,2),l=c[0],s=c[1],u=(0,_.useState)(1),p=(0,f.Z)(u,2),g=p[0],m=p[1],b=(0,A.lr)(),v=(0,f.Z)(b,2),Z=v[0],y=v[1],w=null!==(n=Z.get("query"))&&void 0!==n?n:"",j=(0,_.useState)(0),q=(0,f.Z)(j,2),O=q[0],B=q[1],D=(0,M.TH)();(0,_.useEffect)((function(){function n(){return n=(0,h.Z)(x().mark((function n(t,e){var r,o,a;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,P.gH)(t,e);case 3:if(r=n.sent,o=r.results,a=r.total_results,0!==o){n.next=8;break}return N.Am.error("\u0417\u0430 \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432"),n.abrupt("return");case 8:i((function(n){return[].concat((0,d.Z)(n),(0,d.Z)(o))})),B(a),1===e&&N.Am.success("\u0417\u043d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(a," \u0444\u0456\u043b\u044c\u043c\u0456\u0432")),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])}))),n.apply(this,arguments)}""!==l&&function(t,e){n.apply(this,arguments)}(l,g)}),[l,g]);return o!==[]&&function(n,t){try{var e=JSON.stringify(t);localStorage.setItem(n,e)}catch(r){console.log("Set state error: ",r.message)}}("movies",o),o?(0,k.jsxs)(H,{children:[(0,k.jsx)(S,{onSubmit:function(n){n.preventDefault(),""!==w?w!==l?(s(w),i([]),m(1)):N.Am.error("\u041f\u0440\u043e\u044f\u0432\u043b\u044f\u0439\u0442\u0435 \u043a\u0440\u0435\u0430\u0442\u0438\u0432, \u043f\u0440\u0438\u0448\u0456\u0442\u044c \u0440\u0456\u0437\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0438"):N.Am.error("\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443 \u0432 \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443")},value:w,onChange:function(n){y(""!==n?{query:n}:{})}}),(0,k.jsx)(z.o,{children:o.map((function(n){return(0,k.jsx)(z.S,{children:(0,k.jsx)(C.F,{to:"".concat(n.id),state:{from:D},children:(0,k.jsx)(I,{children:(0,k.jsx)(J,{src:null!==n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://cdn.pixabay.com/photo/2013/07/12/12/01/film-145099_960_720.png",width:"200",alt:n.original_title})})})},n.id)}))}),o.length>0&&O>o.length&&(0,k.jsx)(F,{type:"button",loadMore:function(){m((function(n){return n+1}))}})]}):null}}}]);
//# sourceMappingURL=793.a8292905.chunk.js.map