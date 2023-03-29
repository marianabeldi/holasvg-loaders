exports.ids = [5];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bb7e2ade", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loader-container{background-color:var(--bgColor);border:4px solid var(--borderColor);display:grid;flex:1 1 50%;padding:1em;position:relative;transition:all .2s}.loader-container svg.single-loader{align-self:center;max-height:50vh;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoaderContainer.vue?vue&type=template&id=366b4ea4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loader-container"},[_vm._ssrNode(((!_vm.$state.codeActive && !_vm.$state.styleActive && !_vm.$state.shapeActive)?("<p>Select a language to start</p>"):"<!---->")+" "+((_vm.$state.codeActive && !_vm.$state.styleActive)?("<p>Select a style to start</p>"):"<!---->")+" "+((_vm.$state.codeActive && _vm.$state.styleActive && !_vm.$state.shapeActive)?("<p>Select a shape to start</p>"):"<!---->")+" "),(_vm.$state.styleActive === 'spinner1')?[_vm._ssrNode("<svg id=\"spinnerLoaderRef\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" overflow=\"visible\""+(_vm._ssrAttr("fill",_vm.$state.fillColor))+(_vm._ssrAttr("stroke",_vm.$state.strokeColor))+" class=\"single-loader\""+(_vm._ssrStyle(null,null, { display: (_vm.$state.renderComponent) ? '' : 'none' }))+">","</svg>",[_vm._ssrNode("<defs>"+((_vm.$state.shapeActive === 'custom')?("<svg id=\"spinner\">"+(_vm._s(_vm.$state.customShape))+"</svg>"):"<!---->")+" "+((_vm.$state.shapeActive === 'circle')?("<circle id=\"spinner\" r=\"4\" cx=\"50\" cy=\"50\" transform=\"translate(0 -30)\"></circle>"):"<!---->")+" "+((_vm.$state.shapeActive === 'square')?("<rect id=\"spinner\" x=\"15\" y=\"45\" width=\"10\" height=\"10\"></rect>"):"<!---->")+" "+((_vm.$state.shapeActive === 'triangle')?("<polygon id=\"spinner\" points=\"20,40 28,55 12,55\"></polygon>"):"<!---->")+" "+((_vm.$state.shapeActive === 'rect')?("<rect id=\"spinner\" x=\"15\" y=\"40\" width=\"10\" height=\"20\" rx=\"2\" ry=\"2\"></rect>"):"<!---->")+" "+((_vm.$state.shapeActive === 'bar')?("<rect id=\"spinner\" x=\"46.5\" y=\"40\" width=\"7\" height=\"20\" rx=\"2\" ry=\"2\" transform=\"translate(0 -30)\"></rect>"):"<!---->")+"</defs> "),(_vm.$state.codeActive === 'SMIL')?_vm._l((12),function(singleSpinner,i){return _vm._ssrNode("<use xlink:href=\"#spinner\""+(_vm._ssrAttr("transform",("rotate(" + (i * 30) + " 50 50)")))+">","</use>",[_vm._ssrNode(((_vm.$state.effectActive.includes('opacity'))?("<animate attributeName=\"opacity\" values=\"0;1;0\" dur=\"1s\""+(_vm._ssrAttr("begin",((i * 0.08) + "s")))+" repeatCount=\"indefinite\"></animate>"):"<!---->")+" "),(_vm.$state.effectActive.includes('translate'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"translate","additive":"sum","dur":"1s","begin":((i * 0.08) + "s"),"repeatCount":"indefinite","from":"0 0","to":"10"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('rotate'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","additive":"sum","dur":"1s","begin":((i * 0.08) + "s"),"repeatCount":"indefinite","from":"0 50 50","to":"360 0 0"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('scale'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"scale","additive":"sum","dur":"1s","begin":((i * 0.08) + "s"),"repeatCount":"indefinite","from":"0","to":"1.2"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('skew'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"skewX","additive":"sum","dur":"1s","begin":((i * 0.08) + "s"),"repeatCount":"indefinite","from":"0","to":"20"}})]:_vm._e()],2)}):_vm._e(),_vm._ssrNode(" "+((_vm.$state.codeActive === 'SASS' && _vm.$state.computedAnimationBoth.length > 0)?((_vm._ssrList((12),function(singleSpinner,i){return ("<g"+(_vm._ssrAttr("transform",("rotate(" + (i * 30) + " 50 50)")))+"><use xlink:href=\"#spinner\""+(_vm._ssrStyle(null,{ animation: _vm.$state.computedAnimationBoth[i].join(',') }, null))+"></use></g>")}))):"<!---->"))],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.styleActive === 'inline1')?[_vm._ssrNode("<svg id=\"inlineLoaderRef\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" overflow=\"visible\""+(_vm._ssrAttr("fill",_vm.$state.fillColor))+(_vm._ssrAttr("stroke",_vm.$state.strokeColor))+" class=\"single-loader\""+(_vm._ssrStyle(null,null, { display: (_vm.$state.renderComponent) ? '' : 'none' }))+">","</svg>",[_vm._ssrNode("<defs>"+((_vm.$state.shapeActive === 'custom')?("<svg id=\"inline\">"+(_vm._s(_vm.$state.customShape))+"</svg>"):"<!---->")+" "+((_vm.$state.shapeActive === 'circle')?("<circle id=\"inline\" cx=\"20\" cy=\"50\" r=\"6\"></circle>"):"<!---->")+" "+((_vm.$state.shapeActive === 'square')?("<rect id=\"inline\" x=\"15\" y=\"45\" width=\"10\" height=\"10\"></rect>"):"<!---->")+" "+((_vm.$state.shapeActive === 'triangle')?("<polygon id=\"inline\" points=\"20,40 28,55 12,55\"></polygon>"):"<!---->")+" "+((_vm.$state.shapeActive === 'rect')?("<rect id=\"inline\" x=\"10\" y=\"45\" width=\"16\" height=\"10\" rx=\"2\" ry=\"2\"></rect>"):"<!---->")+" "+((_vm.$state.shapeActive === 'bar')?("<rect id=\"inline\" x=\"15\" y=\"40\" width=\"10\" height=\"20\" rx=\"2\" ry=\"2\"></rect>"):"<!---->")+"</defs> "),(_vm.$state.codeActive === 'SMIL')?_vm._l((4),function(singleInline,i){return _vm._ssrNode("<use xlink:href=\"#inline\""+(_vm._ssrAttr("x",("" + (i * 20))))+">","</use>",[_vm._ssrNode(((_vm.$state.effectActive.includes('opacity'))?("<animate attributeName=\"opacity\" values=\"0;1;0\" dur=\"1s\""+(_vm._ssrAttr("begin",((i * 0.25) + "s")))+" repeatCount=\"indefinite\"></animate>"):"<!---->")+" "),(_vm.$state.effectActive.includes('translate'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"translate","additive":"sum","dur":"1s","begin":((i * 0.25) + "s"),"repeatCount":"indefinite","from":"0 0","to":"10"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('rotate'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","additive":"sum","dur":"1s","begin":((i * 0.25) + "s"),"repeatCount":"indefinite","from":"0 50 50","to":"360 0 0"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('scale'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"scale","additive":"sum","dur":"1s","begin":((i * 0.25) + "s"),"repeatCount":"indefinite","from":"0","to":"1.2"}})]:_vm._e(),_vm._ssrNode(" "),(_vm.$state.effectActive.includes('skew'))?[_c('animateTransform',{attrs:{"attributeName":"transform","type":"skewX","additive":"sum","dur":"1s","begin":((i * 0.25) + "s"),"repeatCount":"indefinite","from":"0","to":"20"}})]:_vm._e()],2)}):_vm._e(),_vm._ssrNode(" "+((_vm.$state.codeActive === 'SASS' && _vm.$state.computedAnimationBoth.length > 0)?((_vm._ssrList((4),function(singleInline,i){return ("<use xlink:href=\"#inline\""+(_vm._ssrAttr("x",("" + (i * 20))))+(_vm._ssrStyle(null,{ animation: _vm.$state.computedAnimationBoth[i].join(',') }, null))+"></use>")}))):"<!---->"))],2)]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoaderContainer.vue?vue&type=template&id=366b4ea4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoaderContainer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9e0d1a8a"
  
)

/* harmony default export */ var LoaderContainer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loader-container.js.map