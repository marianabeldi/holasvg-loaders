(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{201:function(t,e,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("bb7e2ade",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";n(201)},214:function(t,e,n){var r=n(45)(!1);r.push([t.i,".loader-container{background-color:var(--bgColor);border:4px solid var(--borderColor);display:grid;flex:1 1 50%;padding:1em;position:relative;transition:all .2s}.loader-container svg.single-loader{align-self:center;max-height:50vh;width:100%}",""]),t.exports=r},225:function(t,e,n){"use strict";n.r(e);var r={methods:{},updated:function(){}},o=(n(213),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-container"},[t.$state.codeActive||t.$state.styleActive||t.$state.shapeActive?t._e():[n("p",[t._v("Select a language to start")])],t._v(" "),t.$state.codeActive&&!t.$state.styleActive?[n("p",[t._v("Select a style to start")])]:t._e(),t._v(" "),t.$state.codeActive&&t.$state.styleActive&&!t.$state.shapeActive?[n("p",[t._v("Select a shape to start")])]:t._e(),t._v(" "),"spinner1"===t.$state.styleActive?[n("svg",{directives:[{name:"show",rawName:"v-show",value:t.$state.renderComponent,expression:"$state.renderComponent"}],ref:"spinnerLoaderRef",staticClass:"single-loader",attrs:{id:"spinnerLoaderRef",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",overflow:"visible",fill:t.$state.fillColor,stroke:t.$state.strokeColor}},[n("defs",["custom"===t.$state.shapeActive?[n("svg",{attrs:{id:"spinner"},domProps:{innerHTML:t._s(t.$state.customShape)}})]:t._e(),t._v(" "),"circle"===t.$state.shapeActive?[n("circle",{attrs:{id:"spinner",r:"4",cx:"50",cy:"50",transform:"translate(0 -30)"}})]:t._e(),t._v(" "),"square"===t.$state.shapeActive?[n("rect",{attrs:{id:"spinner",x:"15",y:"45",width:"8",height:"8"}})]:t._e(),t._v(" "),"triangle"===t.$state.shapeActive?[n("polygon",{attrs:{id:"spinner",points:"20,44 25,53 15,53"}})]:t._e(),t._v(" "),"rect"===t.$state.shapeActive?[n("rect",{attrs:{id:"spinner",x:"15",y:"45",width:"6",height:"14",rx:"2",ry:"2"}})]:t._e(),t._v(" "),"bar"===t.$state.shapeActive?[n("rect",{attrs:{id:"spinner",x:"46.5",y:"45",width:"6",height:"14",rx:"2",ry:"2",transform:"translate(0 -30)"}})]:t._e()],2),t._v(" "),"SMIL"===t.$state.codeActive?t._l(t.$state.amount,(function(e,i){return n("use",{key:"smilSpinner"+i,attrs:{"xlink:href":"#spinner",transform:"rotate("+360*i/t.$state.amount+" 50 50)"}},[t.$state.effectActive.includes("opacity")?[n("animate",{attrs:{attributeName:"opacity",values:"0;1;0",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("translate")?[n("animateTransform",{attrs:{attributeName:"transform",type:"translate",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0 0",to:"10"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("rotate")?[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0 50 50",to:"360 0 0"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("scale")?[n("animateTransform",{attrs:{attributeName:"transform",type:"scale",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0",to:"1.2"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("skewX")?[n("animateTransform",{attrs:{attributeName:"transform",type:"skewX",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0",to:"20"}})]:t._e()],2)})):t._e(),t._v(" "),"SASS"===t.$state.codeActive?t._l(t.$state.amount,(function(i){return n("g",{key:"sassSpinner"+i,attrs:{transform:"rotate("+360*i/t.$state.amount+" 50 50)"}},[n("use",{style:{animation:t.$state.computedAnimation[i-1].join(",")},attrs:{"xlink:href":"#spinner"}})])})):t._e()],2)]:t._e(),t._v(" "),"inline1"===t.$state.styleActive?[n("svg",{directives:[{name:"show",rawName:"v-show",value:t.$state.renderComponent,expression:"$state.renderComponent"}],ref:"inlineLoaderRef",staticClass:"single-loader",attrs:{id:"inlineLoaderRef",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",overflow:"visible",fill:t.$state.fillColor,stroke:t.$state.strokeColor}},[n("defs",["custom"===t.$state.shapeActive?[n("svg",{attrs:{id:"inline"},domProps:{innerHTML:t._s(t.$state.customShape)}})]:t._e(),t._v(" "),"circle"===t.$state.shapeActive?[n("circle",{attrs:{id:"inline",cx:"20",cy:"50",r:"4"}})]:t._e(),t._v(" "),"square"===t.$state.shapeActive?[n("rect",{attrs:{id:"inline",x:"15",y:"45",width:"8",height:"8"}})]:t._e(),t._v(" "),"triangle"===t.$state.shapeActive?[n("polygon",{attrs:{id:"inline",points:"20,44 25,53 15,53"}})]:t._e(),t._v(" "),"rect"===t.$state.shapeActive?[n("rect",{attrs:{id:"inline",x:"10",y:"45",width:"14",height:"6",rx:"2",ry:"2"}})]:t._e(),t._v(" "),"bar"===t.$state.shapeActive?[n("rect",{attrs:{id:"inline",x:"15",y:"45",width:"6",height:"14",rx:"2",ry:"2"}})]:t._e()],2),t._v(" "),"SMIL"===t.$state.codeActive?t._l(t.$state.amount,(function(i){return n("use",{key:"smilInline"+i,attrs:{"xlink:href":"#inline",x:""+(50-16*(t.$state.amount-1)/2+16*(i-1)-20)}},[t.$state.effectActive.includes("opacity")?[n("animate",{attrs:{attributeName:"opacity",values:"0;1;0",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("translate")?[n("animateTransform",{attrs:{attributeName:"transform",type:"translate",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0 0",to:"10"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("rotate")?[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0 50 50",to:"360 0 0"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("scale")?[n("animateTransform",{attrs:{attributeName:"transform",type:"scale",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0",to:"1.2"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("skewX")?[n("animateTransform",{attrs:{attributeName:"transform",type:"skewX",additive:"sum",dur:t.$state.duration+"s",begin:1*i/t.$state.amount*t.$state.duration+"s",repeatCount:"indefinite",from:"0",to:"20"}})]:t._e()],2)})):t._e(),t._v(" "),"SASS"===t.$state.codeActive?t._l(t.$state.amount,(function(i){return n("use",{key:"sassSpinner"+i,style:{animation:t.$state.computedAnimation[i-1].join(",")},attrs:{"xlink:href":"#inline",x:""+(50-16*(t.$state.amount-1)/2+16*(i-1)-20)}})})):t._e()],2)]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);