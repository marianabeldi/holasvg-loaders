exports.ids = [2];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7cf1e411", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Effects_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Effects_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Effects_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Effects_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Effects_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkmark-container{cursor:pointer;align-items:center;display:flex;position:relative;text-transform:capitalize}.checkmark-container input[type=checkbox]{cursor:pointer;opacity:0;position:absolute;left:-3px;top:-3px;height:2rem;width:2rem}.checkmark-container input[type=checkbox]:hover+svg .checkmark-bg{fill:var(--siteLightblue)}.checkmark-container input[type=checkbox]:checked+svg .checkmark-bg{fill:var(--siteBlue)}.checkmark-container input[type=checkbox]:checked+svg .checkmark{stroke:#fff}.checkmark-container input[type=checkbox]:focus+svg{outline:1px auto -webkit-focus-ring-color}.checkmark-container svg{margin-right:.8rem;stroke:var(--borderColor);width:2rem;height:2rem}.checkmark-container svg *{transition:all .1s linear}@media screen and (-ms-high-contrast:active){.checkmark-container svg rect{stroke:windowText}}@media screen and (-ms-high-contrast:active){.checkmark-container input[type=checkbox]:checked~svg rect{fill:windowText}.checkmark-container input[type=checkbox]:checked~svg polyline{stroke:highlight}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Effects.vue?vue&type=template&id=c6f7be98&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"style-bar-box effects"},[_vm._ssrNode("<h3>Effects:</h3> <div>"+(_vm._ssrList((_vm.$state.effects),function(effect){return ("<div><label"+(_vm._ssrAttr("for",effect.id))+" class=\"checkmark-container\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",effect.value))+"> <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"1\" y=\"1\" width=\"30\" height=\"30\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1\" rx=\"2\" ry=\"2\" class=\"checkmark-bg\"></rect> <polyline points=\"8,17 14,23 25,8\" stroke=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" fill=\"none\" class=\"checkmark\"></polyline></svg>"+_vm._ssrEscape("\n            "+_vm._s(effect.id)+"\n            ")+"</label></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Effects.vue?vue&type=template&id=c6f7be98&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Effects.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
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
  "2ca1c50f"
  
)

/* harmony default export */ var Effects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=effects.js.map