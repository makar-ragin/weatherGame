(function(e){function t(t){for(var r,c,a=t[0],u=t[1],s=t[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/weatherGame/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2794:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("WeatherGame",{attrs:{apiKey:"8656d71fb5e84f328c9134151211204"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weatherGame"},[n("p",[e._v("Hiscore: "+e._s(e.hiscore))]),e.fetched?e._e():n("div",[e._m(0)]),e.fetched&&e.continueGame?n("div",[n("p",[e._v("Score: "+e._s(e.score))]),n("img",{attrs:{src:e.icon,alt:"weather"}}),n("p",[e._v(e._s(e.locationName)+": "+e._s(e.temp)+" °C")]),e._m(1)]):e._e(),e.fetched&&!e.continueGame?n("div",[n("p",[e._v("Game over!")]),n("p",[e._v("Final score: "+e._s(e.score))])]):e._e(),e.continueGame?n("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],staticClass:"SearchInput",attrs:{type:"text",placeholder:"CITY NAME"},domProps:{value:e.q},on:{input:function(t){t.target.composing||(e.q=t.target.value)}}}):e._e(),e.continueGame?n("button",{on:{click:e.fetchAPI}},[e._v("Enter")]):e._e(),e.continueGame?n("button",{on:{click:e.reset}},[e._v("Restart")]):e._e(),e.continueGame?e._e():n("button",{on:{click:e.retry}},[e._v("Retry")]),e.error?n("p",{attrs:{id:"err"}},[e._v(" Неизвестный город "),n("br"),e._v(" Unknown city")]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Введите любой город "),n("br"),e._v(" Enter any city")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Введите город с большей температурой "),n("br"),e._v(" Enter a city a with higher temperature ")])}],u=(n("b0c0"),n("bc3a")),s=n.n(u),l={name:"WeatherGame",props:{apiKey:String,q:String},data:function(){return{locationName:null,icon:null,temp:null,max_temp:null,score:0,hiscore:0,error:!1}},methods:{fetchAPI:function(){var e=this;s.a.get("https://api.weatherapi.com/v1/current.json?key="+this.apiKey+"&q="+this.q).then((function(t){return e.locationName=t.data.location.name,e.icon=t.data.current.condition.icon,e.temp=t.data.current.temp_c,e.error=!1})).catch((function(){return e.error=!0}))},reset:function(){this.locationName=null,this.temp=null,this.max_temp=null,this.score=0,this.icon=null},retry:function(){this.score>this.hiscore&&(this.hiscore=this.score),this.reset()},increaseScore:function(){this.score+=1},newMaxTemp:function(){this.max_temp=this.temp}},computed:{fetched:function(){return!!(this.locationName&&this.icon&&this.temp)},continueGame:function(){return null==this.max_temp?(this.newMaxTemp(),!0):this.temp>this.max_temp&&(this.increaseScore(),this.newMaxTemp(),!0)}}},p=l,f=(n("f79d"),n("2877")),h=Object(f["a"])(p,c,a,!1,null,"274a06ed",null),m=h.exports,d={name:"App",components:{WeatherGame:m}},_=d,v=(n("034f"),Object(f["a"])(_,o,i,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)},data:{}}).$mount("#app")},"85ec":function(e,t,n){},f79d:function(e,t,n){"use strict";n("2794")}});
//# sourceMappingURL=app.55ae8615.js.map