(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(t,o,e){var content=e(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("d0895a22",content,!0,{sourceMap:!1})},287:function(t,o,e){"use strict";var n=e(283);e.n(n).a},288:function(t,o,e){(o=e(56)(!1)).push([t.i,'@font-face{font-family:Garamond,cursive;src:url(/Garamond.ttf) format("truetype");font-weight:400;font-style:normal}.back-button{display:flex;font-family:Garamond;font-size:30px;width:120px;height:120px;color:#000;justify-content:center;align-items:center}.back-button:hover{background-image:url(/turnLeft.gif);background-size:120% 120%;background-position:50% 50%;background-repeat:no-repeat;background-color:none}a,a:link,a:visited{color:#000;text-decoration:none}a:hover{border-bottom-width:3px;border-bottom-style:solid;padding-bottom:4px}',""]),t.exports=o},291:function(t,o,e){"use strict";var n={name:"BackButton",props:["routerLink"]},r=(e(287),e(27)),component=Object(r.a)(n,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"back-button"},[o("div",{attrs:{id:"text-container"}},[this._v("\n  [ "),o("n-link",{attrs:{to:this.routerLink}},[this._v("back")]),this._v(" ]\n  ")],1)])}),[],!1,null,null,null);o.a=component.exports},308:function(t,o,e){var content=e(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("03e8ff03",content,!0,{sourceMap:!1})},367:function(t,o,e){"use strict";var n=e(308);e.n(n).a},368:function(t,o,e){(o=e(56)(!1)).push([t.i,'@font-face{font-family:Garamond,cursive;src:url(/Garamond.ttf) format("truetype");font-weight:400;font-style:normal}body{overflow-x:hidden;font-family:Garamond;background-repeat:no-repeat}.back-button{position:absolute;z-index:55;margin-top:5vh;margin-left:44vw}.row-section{display:block;background-color:#fbdd4a;color:#000;width:100vw;height:20vh}.row-section:hover{width:0;transition:1s}.bg{width:100vw;height:100vh;background-image:url(/b.png);background-size:150% auto;background-repeat:no-repeat;background-position:50% 50%;z-index:0}.bg,.title{position:absolute}.title{font-family:Garamond;display:block;font-weight:600;font-size:8vw;color:#000;letter-spacing:1px;line-height:.8;z-index:1}#title-line1{display:grid;grid-template-columns:1fr 1fr;grid-gap:4px}#title-unmask{width:50vw;text-align:right}#title-ing,#title-masks{width:50vw;text-align:left}#title-masks{margin-left:50vw;padding-left:4px}',""]),t.exports=o},384:function(t,o,e){"use strict";e.r(o);var n={components:{BackButton:e(291).a},data:function(){return{slideLeft:!1,revealStyle:{backgroundColor:"#FBDD4A",transition:"2s"},isHover:!1,info:[],sections:["","social firewall","fashion statement","pop culture","..."]}},method:{revealText:function(){this.revealStyle.backgroundColor="none",this.info=["privacy and safety zone","marine serre and smog couture","BTS etc."]},coverText:function(){this.revealStyle.backgroundColor="#FBDD4A",this.info=["social firewall","fashion statement","pop culture"]}}},r=(e(367),e(27)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"bg"}),t._v(" "),e("h1",{staticClass:"title"},t._l(t.sections,(function(o,n){return e("div",{key:n,staticClass:"row-section"},[t._v(t._s(o))])})),0),t._v(" "),e("BackButton",{attrs:{routerLink:"/timeline"}})],1)}),[],!1,null,null,null);o.default=component.exports}}]);