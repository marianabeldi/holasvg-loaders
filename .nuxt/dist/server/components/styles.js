exports.ids = [8];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7f6dacf5", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "input[type=color]{aspect-ratio:1;background:transparent;border:none;border:1px solid var(--textColor);border-radius:4px;height:32px;padding:0;width:32px}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-webkit-color-swatch{border-color:currentColor;border-radius:3px}.range-input{margin-bottom:.8rem}.range-input label{display:inline-block;line-height:1}input[type=range]{border:1px solid;border-radius:10px;height:12px;-webkit-appearance:none;outline:none;background:none}input[type=range]::-webkit-slider-runnable-track{background-color:#475a73;height:10px}input[type=range]::-webkit-slider-runnable-track:focus,input[type=range]::-webkit-slider-runnable-track:hover{background:#5c7698}input[type=range]::-webkit-slider-thumb{background:var(--siteLightblue);border-radius:2px;cursor:ew-resize;margin-top:-7px;width:10px;height:24px;-webkit-appearance:none;vertical-align:middle}input[type=range]::-webkit-slider-thumb:focus,input[type=range]::-webkit-slider-thumb:hover{background:#ff5463;background:#84c9d2}.duration-input input{border-radius:4px;border:0;border:1px solid var(--bgLighter);font-size:1.1rem;margin-right:2px;min-height:40px;padding:0 0 0 6px}.duration-input input:focus{background-color:var(--siteYellow)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Styles.vue?vue&type=template&id=7d99f181&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"style-bar-box"},[_vm._ssrNode("<h3>Style:</h3> <div>"+(_vm._ssrList((_vm.$state.styles),function(style){return ("<div tabindex=\"0\""+(_vm._ssrClass("loop-container style-option",{ active: _vm.$state.styleActive === style.id }))+"><svg width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" overflow=\"visible\" fill=\"#84c9d2\">"+(_vm._s(style.svg))+"</svg></div>")}))+" <div class=\"range-input\"><label for=\"amount\">Amount:</label> <input type=\"range\" id=\"inputAmount\" name=\"inputAmount\" min=\"1\" max=\"12\""+(_vm._ssrAttr("value",(_vm.$state.amount)))+"></div> <div class=\"duration-input\"><label for=\"duration\">Duration:</label> <input type=\"number\" id=\"inputDuration\" name=\"inputDuration\" min=\"0\" max=\"99\""+(_vm._ssrAttr("value",(_vm.$state.duration)))+">s\n    </div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Styles.vue?vue&type=template&id=7d99f181&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Styles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Stylesvue_type_script_lang_js_ = ({
  methods: {
    changeAmount(e) {
      this.$state.amount = 0;
      this.$state.amount = parseInt(e.target.value);
      this.$computedAnimationFunction();
      this.$loaderCurrentFunction();
      this.$loaderSmilFunction();
      this.$loaderSassFunction();
    },

    changeDuration(e) {
      this.$state.duration = 0;
      this.$state.duration = parseInt(e.target.value);
      this.$computedAnimationFunction();
      this.$loaderCurrentFunction();
      this.$loaderSmilFunction();
      this.$loaderSassFunction();
    },

    setStyle(styleid) {
      this.$state.styleActive = styleid;

      for (let i = 0; i < this.$state.styles.length; i++) {
        if (this.$state.styles[i].id === styleid) {
          this.$state.loaderCurrent = this.$state.styles[i].use;
        }
      }

      if (this.$state.codeActive === "SASS") {
        this.$setEffect("opacity");
        this.$setEffect("opacity"); // if (this.$state.styleActive === "inline1") {
        //   this.$nextTick(() => {
        //     this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML;
        //   });
        // }
        // if (this.$state.styleActive === "spinner1") {
        //   this.$nextTick(() => {
        //     this.$state.stylesCode = this.$parent.$refs.stylesSpinner.innerHTML;
        //   });
        // }
      }

      this.$loaderCurrentFunction();
      this.$loaderSmilFunction(); // this.$getSmilCode();
    }

  }
});
// CONCATENATED MODULE: ./components/Styles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stylesvue_type_script_lang_js_ = (Stylesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Styles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Stylesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5a1f7d65"
  
)

/* harmony default export */ var Styles = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=styles.js.map