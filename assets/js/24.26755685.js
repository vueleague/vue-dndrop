(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{347:function(t,e,n){var o=n(6),r=n(7),a=n(85);t.exports=function(t,e,n){var i,s;return a&&o(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},368:function(t,e,n){},387:function(t,e,n){"use strict";n(368)},429:function(t,e,n){"use strict";n.r(e);var o=n(355),r=n(341),a={name:"Table",components:{Container:o.a,Draggable:o.b},data:function(){return{items:Object(r.b)(10,(function(t){return{id:t,data:"Draggable "+t}}))}},methods:{getGhostParent:function(){return document.querySelector("tbody")},onDrop:function(t){this.items=Object(r.a)(this.items,t)},onDropReady:function(t){console.log("drop ready",t)}}},i=(n(387),n(53)),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wide-page"},[n("table",{staticStyle:{"border-spacing":"0"}},[t._m(0),t._v(" "),n("Container",{attrs:{tag:"tbody","lock-axis":"y"},on:{drop:t.onDrop,"drop-ready":t.onDropReady}},t._l(t.items,(function(e){return n("Draggable",{key:e.id,staticStyle:{height:"30px"},attrs:{tag:"tr"}},[n("td",[t._v("Row "+t._s(e.data)+" Column 1")]),t._v(" "),n("td",[t._v("Row "+t._s(e.data)+" Column 2")]),t._v(" "),n("td",[t._v("Row "+t._s(e.data)+" Column 3")])])})),1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Lorem")]),this._v(" "),e("th",[this._v("Ipsum")]),this._v(" "),e("th",[this._v("Sit")])])])}],!1,null,"f7fd5f36",null);e.default=s.exports}}]);