(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,n){var content=n(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("2d0a1691",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n(197)},206:function(t,e,n){var o=n(45)(!1);o.push([t.i,".options-btn{display:flex;flex:1 1 100%}",""]),t.exports=o},222:function(t,e,n){"use strict";n.r(e);var o={methods:{setCode:function(t){var e=this;this.$state.codeActive=t,"SMIL"===t?(this.$state.loaderSmilActive=!0,this.$loaderCurrentFunction(),this.$loaderSmilFunction()):this.$state.loaderSmilActive=!1,this.$nextTick((function(){"SASS"===t&&(e.$state.stylesCode=e.$parent.$refs.stylesLoaderSass.innerHTML)}))}}},c=(n(205),n(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-btn"},t._l(t.$state.codes,(function(code){return n("button",{key:code.id,staticClass:"btn",class:{active:t.$state.codeActive===code.id},on:{click:function(e){return t.setCode(code.id)}}},[t._v("\n    "+t._s(code.id)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);