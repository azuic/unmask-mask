(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{284:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("390ad722",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var o=n(284);n.n(o).a},290:function(t,e,n){(e=n(56)(!1)).push([t.i,'@font-face{font-family:Garamond,cursive;src:url(/Garamond.ttf) format("truetype");font-weight:400;font-style:normal}.next-button{display:flex;font-family:Garamond;font-size:30px;width:120px;height:120px;color:#000;justify-content:center;align-items:center}.next-button:hover{background-image:url(/turnRight.gif);background-size:120% 120%;background-position:50% 50%;background-repeat:no-repeat;background-color:none}a,a:link,a:visited{color:#000;text-decoration:none}a:hover{border-bottom-width:3px;border-bottom-style:solid;padding-bottom:4px}',""]),t.exports=e},292:function(t,e,n){"use strict";var o={name:"NextButton",props:["routerLink"]},r=(n(289),n(27)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"next-button"},[e("div",{attrs:{id:"text-container"}},[this._v("\n  [ "),e("n-link",{attrs:{to:this.routerLink}},[this._v("next")]),this._v(" ]\n  ")],1)])}),[],!1,null,null,null);e.a=component.exports},313:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("6759f5ab",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var o=n(313);n.n(o).a},382:function(t,e,n){(e=n(56)(!1)).push([t.i,'@font-face{font-family:Garamond,cursive;src:url(/Garamond.ttf) format("truetype");font-weight:400;font-style:normal}body{overflow:hidden;font-family:Garamond}.bg,body{background-repeat:no-repeat}.bg{position:absolute;width:100vw;height:100vh;background-image:url(/mask-front.png);background-size:contain;background-position:50%;z-index:0}.bg .click-hint{position:absolute;z-index:3;background-color:#fff;margin-left:80vw;margin-top:60vh;font-size:40px}.bg svg{position:absolute;z-index:2}.bg svg polyline{fill:none;stroke:#fbdd4a;stroke-width:200;stroke-dasharray:20000;stroke-dashoffset:0;transition:all 3s ease-out}.mask{width:100vw;height:100vh}.slide-cover{width:50vw;height:100vh;background:#fbdd4a;z-index:5;transform:scaleX(1);transform-origin:100% 100%;-webkit-animation:maskout 2s ease-in-out 1s infinite alternate;animation:maskout 2s ease-in-out 1s infinite alternate}.slide-arrow,.slide-cover{position:absolute;display:block}.slide-arrow{width:50px;height:50px;background-image:url(/direction.png);background-size:contain;background-repeat:no-repeat;margin-left:50vw;margin-top:80vh;-webkit-animation:wiggle 1s ease-in-out 0s infinite alternate;animation:wiggle 1s ease-in-out 0s infinite alternate}@-webkit-keyframes wiggle{0%{transform:translateX(-60px) scaleX(-1)}to{transform:translateX(-30px) scaleX(-1)}}@keyframes wiggle{0%{transform:translateX(-60px) scaleX(-1)}to{transform:translateX(-30px) scaleX(-1)}}@-webkit-keyframes maskout{0%{transform:scaleX(1)}to{transform:scaleX(.5)}}@keyframes maskout{0%{transform:scaleX(1)}to{transform:scaleX(.5)}}.title{position:absolute;font-family:Garamond;display:block;font-weight:600;font-size:8vw;color:#000;letter-spacing:1px;line-height:.8;z-index:1;margin-top:45vh}#title-line1{display:grid;grid-template-columns:1fr 1fr;grid-gap:4px}#title-unmask{width:50vw;text-align:right}#title-ing,#title-masks{width:50vw;text-align:left}#title-masks{margin-left:50vw;padding-left:4px}',""]),t.exports=e},386:function(t,e,n){"use strict";n.r(e);var o={components:{NextButton:n(292).a},data:function(){return{slideLeft:!1,maskStyle:{marginLeft:"50vw",transition:"2s"}}},watch:{slideLeft:function(t,e){this.slideLeft?this.maskStyle.marginLeft="100vw":this.maskStyle.marginLeft="50vw"}},method:{revealStroke:function(){this.$refs.strokeLine.style.strokeDashoffset=2e4}}},r=(n(381),n(27)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1400 1062"}},[n("defs",[n("clipPath",{attrs:{id:"cut-off"}},[n("path",{attrs:{id:"Exclusion_1","data-name":"Exclusion 1",d:"M1920.5,1080.5H.5V.5h1920v1080ZM437.834,508.259V611.384H960.5V490.061l-32.482,18.2-41.341-33.364L848.29,508.259H437.834Z",transform:"scale(0.73 0.73) translate(-2 0)",fill:"#fff",stroke:"none"}})])]),t._v(" "),n("polyline",{ref:"strokeLine",attrs:{points:"0,154 131,0 0,348 269,0 0,562 437,0\n\t0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830",onclick:"this.style.strokeDashoffset=20000","clip-path":"url(#cut-off)"}})]),t._v(" "),n("h1",{staticClass:"title"},[n("div",{attrs:{id:"title-line1"}},[n("div",{attrs:{id:"title-unmask"},on:{click:t.revealStroke}},[t._v("unmask")]),t._v(" "),n("div",{attrs:{id:"title-ing"}},[t._v("ing")])]),t._v(" "),n("div",{attrs:{id:"title-masks"}},[t._v("masks")])])]),t._v(" "),n("NextButton",{attrs:{routerLink:"/trend"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);