exports.ids = [6];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ce5f915", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shapes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shapes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shapes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shapes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shapes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".custom-shape{background-color:var(--bgColor);border:1px solid;color:var(--textColor);display:none;margin-top:.5rem;min-height:4rem;padding:.2rem .5rem;width:100%}.custom-shape.active{display:block}.custom-shape-btn{background-color:var(--siteLightblue);border:1px solid var(--siteLightblue);color:var(--bgColor);display:none;margin-top:.5rem;width:100%}.custom-shape-btn.active{display:block}.custom-shape-btn:hover{background-color:var(--siteGreen)}.custom-shape-btn:disabled{background-color:#49727c;border:1px solid #49727c;cursor:not-allowed;position:relative}.custom-shape-btn:disabled:hover{background-color:#49727c;border:1px solid #49727c}.custom-shape-btn:disabled:hover:after{background:var(--siteYellow);border:1px solid var(--siteYellow);content:\"invalid svg code\";color:var(--bgColor);font-size:.9rem;display:block;opacity:1;position:absolute;top:-50%;left:-1px;width:calc(100% + 2px);z-index:2}.info-text{display:none;background:var(--bgLighter);border:1px solid var(--siteYellow);border-radius:2px;color:var(--textColor);font-size:.9rem;font-weight:500;letter-spacing:-.02em;line-height:1.4;padding:6px 10px 7px;z-index:1}.info-text b{color:var(--siteYellow);font-weight:500}.info-text.active{display:block}.btn-custom{background-color:transparent;border-color:var(--siteLightblue);color:var(--textColor);margin:.5rem 0}.btn-custom:hover{background-color:var(--siteLightblue);color:var(--bgColor)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Shapes.vue?vue&type=template&id=65a384a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"style-bar-box"},[_vm._ssrNode("<h3>Shapes:</h3> <div>"+(_vm._ssrList((_vm.$state.shapes),function(shape){return ("<div tabindex=\"0\""+(_vm._ssrClass("loop-container shape-option",{ active: _vm.$state.shapeActive === shape.id }))+"><svg width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" overflow=\"visible\" fill=\"#84c9d2\">"+(_vm._s(shape.menu))+"</svg></div>")}))+" <button class=\"btn btn-custom\">Custom</button> <textarea placeholder=\"paste your svg! or shape, <path> or <text>..\" title=\"💡 TRY: <text y=\"20\">💩</text>\" required=\"required\""+(_vm._ssrClass("custom-shape",{ active: _vm.$state.isActiveCustom }))+">"+_vm._ssrEscape(_vm._s(_vm.$state.customShape))+"</textarea> <button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.$state.disabledSave))+(_vm._ssrClass("btn custom-shape-btn",{ active: _vm.$state.isActiveCustom }))+">Save</button> <p type=\"submit\""+(_vm._ssrClass("info-text",{ active: !_vm.$state.disabledSave }))+">💡 If your text gets cropped, try adding <b>y=&quot;20&quot;</b> or <b>alignment-baseline=&quot;before-edge&quot;</b></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Shapes.vue?vue&type=template&id=65a384a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Shapes.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var Shapesvue_type_script_lang_js_ = ({
  methods: {
    setShape(shapeid) {
      this.$state.shapeActive = shapeid;

      for (let i = 0; i < this.$state.shapes.length; i++) {
        if (this.$state.shapes[i].id === shapeid) {
          this.$state.loaderCurrentDef = this.$state.shapes[i].svgspinner;

          if (this.$state.styleActive === "inline1") {
            this.$state.loaderCurrentDef = this.$state.shapes[i].svginline;
          }

          if (shapeid === "custom") {
            const shapes = ["<path", "<text", "<svg", "<rect", "<circle", "<polyline", "<ellipse", "<line", "<polygon"];
            let customShape = this.$state.customShape;
            const idAlreadyAdded = this.$state.idAlreadyAdded || /\bid="loader"\b/.test(customShape);

            if (!idAlreadyAdded) {
              for (const shape of shapes) {
                const regex = new RegExp(`^${shape}`);

                if (regex.test(customShape)) {
                  customShape = customShape.replace(regex, `${shape} id="loader"`);
                  break; // stop checking once a match is found
                }
              }

              this.$state.customShape = customShape;
              this.$state.loaderCurrentDef = customShape;
              this.$state.idAlreadyAdded = true;
            }
          }
        }
      }

      this.$state.renderComponent = false;
      this.$nextTick(() => {
        this.$state.renderComponent = true;
      });
    },

    disabledOp() {
      if (this.$state.customShape.startsWith("<path") || this.$state.customShape.startsWith("<text") || this.$state.customShape.startsWith("<svg") || this.$state.customShape.startsWith("<rect") || this.$state.customShape.startsWith("<circle") || this.$state.customShape.startsWith("<polyline") || this.$state.customShape.startsWith("<ellipse") || this.$state.customShape.startsWith("<line") || this.$state.customShape.startsWith("<polygon")) {
        this.$state.disabledSave = false;
      } else {
        this.$state.disabledSave = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Shapes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Shapesvue_type_script_lang_js_ = (Shapesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Shapes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Shapesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d670175"
  
)

/* harmony default export */ var Shapes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shapes.js.map