(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,e,n){t.exports=n.p+"fonts/5c3ad70.ttf"},287:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("390ad722",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";var o=n(287);n.n(o).a},295:function(t,e,n){var o=n(56),r=n(174),l=n(285),c=n(296);e=o(!1);var d=r(l),f=r(c);e.push([t.i,"@font-face{font-family:Garamond,cursive;src:url("+d+') format("truetype");font-weight:400;font-style:normal}.next-button{display:flex;font-family:Garamond;font-size:30px;width:120px;height:120px;color:#000;justify-content:center;align-items:center}.next-button:hover{background-image:url('+f+");background-size:120% 120%;background-position:50% 50%;background-repeat:no-repeat;background-color:none}a,a:link,a:visited{color:#000;text-decoration:none}a:hover{border-bottom-width:3px;border-bottom-style:solid;padding-bottom:4px}",""]),t.exports=e},296:function(t,e,n){t.exports=n.p+"img/cc987ac.gif"},298:function(t,e,n){"use strict";var o={name:"NextButton",props:["routerLink"]},r=(n(294),n(27)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"next-button"},[e("div",{attrs:{id:"text-container"}},[this._v("\n  [ "),e("n-link",{attrs:{to:this.routerLink}},[this._v("next")]),this._v(" ]\n  ")],1)])}),[],!1,null,null,null);e.a=component.exports},320:function(t,e,n){var content=n(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("6759f5ab",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";var o=n(320);n.n(o).a},410:function(t,e,n){var o=n(56),r=n(174),l=n(285),c=n(411);e=o(!1);var d=r(l),f=r(c);e.push([t.i,"@font-face{font-family:Garamond,cursive;src:url("+d+') format("truetype");font-weight:400;font-style:normal}body{overflow:hidden;font-family:Garamond;background-repeat:no-repeat}#stroke-container{position:absolute;width:100vw;height:100vh;z-index:5}.next-button{z-index:4}.bg-f{position:absolute;width:100vw;height:56.25vw;background-image:url('+f+");background-size:contain;background-position:50% 0;background-repeat:no-repeat}.click-hint{position:absolute;z-index:3;background-color:#fff;margin-left:80vw;margin-top:60vh;font-size:40px}#stroke-container svg polyline{fill:none;stroke:#fbdd4a;stroke-width:200;stroke-dasharray:20000;stroke-dashoffset:0;transition:all 3s ease-out}.mask{width:100vw;height:100vh}.title{position:absolute;font-family:Garamond;display:block;font-weight:600;font-size:8vw;color:#000;letter-spacing:1px;line-height:.8;z-index:1;margin-top:25.3vw}#title-line1{display:grid;grid-template-columns:1fr 1fr;grid-gap:4px}#title-unmask{width:50vw;text-align:right}#title-ing,#title-masks{width:50vw;text-align:left}#title-masks{margin-left:50vw;padding-left:4px}",""]),t.exports=e},411:function(t,e,n){t.exports=n.p+"img/9e841ac.png"},416:function(t,e,n){"use strict";n.r(e);var o={components:{NextButton:n(298).a},data:function(){return{slideLeft:!1,strokeRevealed:!1,maskStyle:{marginLeft:"50vw",transition:"2s"}}},watch:{},methods:{revealStroke:function(){this.$refs.strokeLine.style.strokeDashoffset=2e4,this.strokeRevealed=!0}}},r=(n(409),n(27)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-f"},[t._m(0),t._v(" "),n("div",{attrs:{id:"stroke-container"},on:{click:t.revealStroke}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1400 1062"}},[n("defs",[n("clipPath",{attrs:{id:"cut-off"}},[n("path",{attrs:{id:"Exclusion_1","data-name":"Exclusion 1",d:"M1920.5,1080.5H.5V.5h1920v1080ZM437.834,508.259V611.384H960.5V490.061l-32.482,18.2-41.341-33.364L848.29,508.259H437.834Z",transform:"scale(0.73 0.73) translate(-2 0)",fill:"#fff",stroke:"none"}})])]),t._v(" "),n("polyline",{ref:"strokeLine",attrs:{points:"0,154 131,0 0,348 269,0 0,562 437,0\n\t0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830",onclick:"this.style.strokeDashoffset=20000","clip-path":"url(#cut-off)"}}),t._v(" "),n("g",{directives:[{name:"show",rawName:"v-show",value:!t.strokeRevealed,expression:"!strokeRevealed"}]},[n("rect",{attrs:{x:"1130",y:"485",width:"100",height:"20",fill:"white"}}),t._v(" "),n("text",{staticClass:"click hint",attrs:{x:"1000",y:"500","font-size":"30"}},[t._v("[ click any yellow area ]")])])])]),t._v(" "),n("transition",{attrs:{name:"appear",duration:18e3}},[n("NextButton",{directives:[{name:"show",rawName:"v-show",value:t.strokeRevealed,expression:"strokeRevealed"}],attrs:{routerLink:"/trend"}})],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[e("div",{attrs:{id:"title-line1"}},[e("div",{attrs:{id:"title-unmask"}},[this._v("unmask")]),this._v(" "),e("div",{attrs:{id:"title-ing"}},[this._v("ing")])]),this._v(" "),e("div",{attrs:{id:"title-masks"}},[this._v("masks")])])}],!1,null,null,null);e.default=component.exports}}]);