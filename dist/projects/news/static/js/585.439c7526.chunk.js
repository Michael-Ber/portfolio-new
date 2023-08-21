"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[585],{5276:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(8683),s=function(t){var e=new Date(t),n=new Date;return{utcMonth:e.getUTCMonth(),utcDate:e.getUTCDate(),utcHours:e.getUTCHours(),utcMinutes:e.getUTCMinutes(),utcNowMonth:n.getUTCMonth(),utcNowDate:n.getUTCDate(),utcNowHours:n.getUTCHours(),utcNowMinutes:n.getUTCMinutes()}},r=n(184),c={0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"},u=function(t,e){var n=s(e.publishedAt),u=n.utcMonth,i=n.utcDate,o=n.utcHours,l=(n.utcMinutes,n.utcNowMonth),p=n.utcNowDate,m=n.utcNowHours,h=(n.utcNowMinutes,u!==l&&i<p?(0,r.jsxs)("span",{className:"item-app-latest__time",children:[l-u>1&&l-u," ","".concat(l-u>4?"\u043c\u0435\u0441\u044f\u0446\u0435\u0432":l-u===1?"\u043c\u0435\u0441\u044f\u0446":"\u043c\u0435\u0441\u044f\u0446\u0430")," \u043d\u0430\u0437\u0430\u0434"]}):u===l&&i!==p?(0,r.jsxs)("span",{className:"item-app-latest__time",children:[p-i>1&&p-i," ","".concat(p-i>4?"\u0434\u043d\u0435\u0439":p-i===1?"\u0432\u0447\u0435\u0440\u0430":"\u0434\u043d\u044f")," ",p-i>1&&"\u043d\u0430\u0437\u0430\u0434"]}):u===l&&i===p&&o!==m?(0,r.jsxs)("span",{className:"item-app-latest__time",children:[m-o>1&&m-o," ","".concat(p-i>4?"\u0447\u0430\u0441\u043e\u0432":p-i===1?"\u0447\u0430\u0441":"\u0447\u0430\u0441\u0430")," ",p-i>1&&"\u043d\u0430\u0437\u0430\u0434"]}):u!==l&&i>p?(0,r.jsxs)("span",{className:"item-app-latest__time",children:[i," ",c[u]]}):void 0);return function(){return(0,r.jsx)(t,(0,a.Z)({date:h},e))}}},3321:function(t,e,n){var a=n(9434),s=n(3598),r=n(184);e.Z=function(t){return function(){var e=(0,a.v9)((function(t){return t.news})).loadingStatus,n=(0,a.v9)((function(t){return t.news})).category,c=(0,a.v9)((function(t){return t.news.articles}));return"loading"===e?(0,r.jsx)(s.Z,{}):0===c.length?(0,r.jsx)("h2",{children:"\u0421\u0442\u0430\u0442\u0435\u0439 \u043d\u0435\u0442"}):(0,r.jsx)(t,{news:c,category:n})}}},3585:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var a=n(8683),s=n(4165),r=n(3433),c=n(5861),u=n(9439),i=n(3321),o=n(2791),l=n(9434),p=n(9829),m=n(3987),h=n(9512),d=n(1087),f=n(1259),g=n(184),_=function(t){var e=t.category,n=t.title,a=t.author,s=t.url,r=t.urlToImage,c=t.date,u=n.length>50?n.slice(0,50)+" ...":n,i=a||"\u041e\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438",o=r||f;return(0,g.jsx)("li",{className:"app-latest__item item-app-latest",children:(0,g.jsxs)(d.rU,{to:s,className:"item-app-latest__link",children:[(0,g.jsxs)("div",{className:"item-app-latest__img",children:[(0,g.jsx)("img",{onError:function(t){return"error"===t.type?t.target.src=f:null},src:o,alt:"author"}),(0,g.jsx)("div",{className:"item-app-latest__category",children:e.toUpperCase()})]}),(0,g.jsx)("h2",{className:"item-app-latest__title",children:u}),(0,g.jsxs)("div",{className:"item-app-latest__footer",children:[(0,g.jsx)("span",{className:"item-app-latest__author",children:i}),c]})]})})},j=n(5276),x=(0,o.memo)((function(t){var e=t.news,n=t.category,i=(0,o.useState)([]),d=(0,u.Z)(i,2),f=d[0],x=d[1],N=(0,o.useState)(2),v=(0,u.Z)(N,2),w=v[0],y=v[1],Z=(0,o.useState)(8),b=(0,u.Z)(Z,2),C=b[0],M=(b[1],(0,l.v9)((function(t){return t.news})).country),T=(0,m.i)().request,U=(0,h.Q)().apiUrlHeadlines,D=(0,o.useRef)(null),k=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D.current.disabled=!0,t.next=3,T(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({country:M,category:n,pageSize:C,page:w})});case 3:e=t.sent,y((function(t){return t+1})),x((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e.articles))})),(0===e.articles.length||e.articles.length<C)&&(D.current.style.display="none"),D.current.disabled=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H=e?e.map((function(t,e){var s=(0,j.Z)(_,(0,a.Z)((0,a.Z)({},t),{},{category:n}));return(0,g.jsx)(s,{},(0,p.x0)())})):(0,g.jsx)("h2",{children:"\u0421\u0442\u0430\u0442\u0435\u0439 \u043d\u0435\u0442"}),S=f&&f.map((function(t,e){var s=(0,j.Z)(_,(0,a.Z)((0,a.Z)({},t),{},{category:n}));return(0,g.jsx)(s,{},(0,p.x0)())})),O=0===e.length?{gridTemplateRows:"auto"}:{};return(0,g.jsxs)("div",{className:"app-latest",children:[(0,g.jsx)("h1",{className:"app-latest__title",children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),(0,g.jsxs)("ul",{style:O,className:"app-latest__list",children:[H,S]}),(0,g.jsx)("button",{ref:D,onClick:k,className:"btn btn-more app-latest__more",children:"\u0415\u0449\u0435"})]})})),N=(0,i.Z)(x)},1259:function(t,e,n){t.exports=n.p+"static/media/no_image.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=585.439c7526.chunk.js.map