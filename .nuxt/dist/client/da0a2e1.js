(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(t,e,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("6ce5f915",content,!0,{sourceMap:!1})},209:function(t,e,r){"use strict";r(199)},210:function(t,e,r){var o=r(45)(!1);o.push([t.i,".custom-shape{background-color:var(--bgColor);border:1px solid;color:var(--textColor);display:none;margin-top:.5rem;min-height:4rem;padding:.2rem .5rem;width:100%}.custom-shape.active{display:block}.custom-shape-btn{background-color:var(--siteLightblue);color:var(--bgColor);display:none;margin-top:.5rem;width:100%}.custom-shape-btn.active{display:block}.custom-shape-btn:hover{background-color:var(--siteGreen)}.custom-shape-btn:disabled{cursor:not-allowed;opacity:.5}.custom-shape-btn:disabled:hover{background-color:var(--siteLightblue)}.btn-custom{background-color:transparent;border-color:var(--siteLightblue);color:var(--textColor);margin:.5rem 0}.btn-custom:hover{background-color:var(--siteLightblue);color:var(--bgColor)}",""]),t.exports=o},224:function(t,e,r){"use strict";r.r(e);r(137),r(47),r(71),r(38),r(14),r(15),r(19),r(35),r(36),r(37);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,h=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){h=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(h)throw c}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c={methods:{setShape:function(t){var e=this;this.$state.shapeActive=t;for(var i=0;i<this.$state.shapes.length;i++)if(this.$state.shapes[i].id===t&&(this.$state.loaderCurrentDef=this.$state.shapes[i].svgspinner,"inline1"===this.$state.styleActive&&(this.$state.loaderCurrentDef=this.$state.shapes[i].svginline),"custom"===t)){var r=this.$state.customShape;if(!(this.$state.idAlreadyAdded||/\bid="loader"\b/.test(r))){var n,c=o(["<path","<text","<svg","<rect","<circle","<polyline","<ellipse","<line","<polygon"]);try{for(c.s();!(n=c.n()).done;){var l=n.value,h=new RegExp("^".concat(l));if(h.test(r)){r=r.replace(h,"".concat(l,' id="loader"'));break}}}catch(t){c.e(t)}finally{c.f()}this.$state.customShape=r,this.$state.loaderCurrentDef=r,this.$state.idAlreadyAdded=!0}}this.$state.renderComponent=!1,this.$nextTick((function(){e.$state.renderComponent=!0}))},disabledOp:function(){this.$state.customShape.startsWith("<path")||this.$state.customShape.startsWith("<text")||this.$state.customShape.startsWith("<svg")||this.$state.customShape.startsWith("<rect")||this.$state.customShape.startsWith("<circle")||this.$state.customShape.startsWith("<polyline")||this.$state.customShape.startsWith("<ellipse")||this.$state.customShape.startsWith("<line")||this.$state.customShape.startsWith("<polygon")?this.$state.disabledSave=!1:this.$state.disabledSave=!0}}},l=(r(209),r(34)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"style-bar-box"},[r("h3",[t._v("Shapes:")]),t._v(" "),r("div",[t._l(t.$state.shapes,(function(e){return r("div",{key:e.id,staticClass:"loop-container shape-option",class:{active:t.$state.shapeActive===e.id},attrs:{tabindex:"0"},on:{click:function(r){return t.setShape(e.id)}}},[r("svg",{attrs:{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",overflow:"visible",fill:"#84c9d2"},domProps:{innerHTML:t._s(e.menu)}})])})),t._v(" "),r("button",{staticClass:"btn btn-custom",on:{click:function(e){t.$state.isActiveCustom=!t.$state.isActiveCustom}}},[t._v("Custom")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$state.customShape,expression:"$state.customShape"}],staticClass:"custom-shape",class:{active:t.$state.isActiveCustom},attrs:{placeholder:"paste your svg! or shape, <path> or <text>..",title:'💡 TRY: <text y="20">💩</text>',required:""},domProps:{value:t.$state.customShape},on:{input:[function(e){e.target.composing||t.$set(t.$state,"customShape",e.target.value)},function(e){return t.disabledOp()}]}}),t._v(" "),r("button",{staticClass:"btn custom-shape-btn",class:{active:t.$state.isActiveCustom},attrs:{type:"submit",disabled:t.$state.disabledSave},on:{click:function(e){return t.setShape("custom")}}},[t._v("Save")])],2)])}),[],!1,null,null,null);e.default=component.exports}}]);