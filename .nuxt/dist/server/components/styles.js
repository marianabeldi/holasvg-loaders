exports.ids = [8];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Styles.vue?vue&type=template&id=0cc6c59b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"style-bar-box"},[_vm._ssrNode("<h3>Style:</h3> <div>"+(_vm._ssrList((_vm.$state.styles),function(style){return ("<div tabindex=\"0\""+(_vm._ssrClass("loop-container style-option",{ active: _vm.$state.styleActive === style.id }))+"><svg width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" overflow=\"visible\" fill=\"#84c9d2\">"+(_vm._s(style.svg))+"</svg></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Styles.vue?vue&type=template&id=0cc6c59b&

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
/* harmony default export */ var Stylesvue_type_script_lang_js_ = ({
  methods: {
    setStyle(styleid) {
      this.$state.styleActive = styleid;

      for (let i = 0; i < this.$state.styles.length; i++) {
        if (this.$state.styles[i].id === styleid) {
          this.$state.loaderCurrent = this.$state.styles[i].use;
        }
      }

      if (this.$state.codeActive === "SASS") {
        this.$setEffect("opacity");
        this.$setEffect("opacity");

        if (this.$state.styleActive === "inline1") {
          this.$nextTick(() => {
            this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML;
          });
        }

        if (this.$state.styleActive === "spinner1") {
          this.$nextTick(() => {
            this.$state.stylesCode = this.$parent.$refs.stylesSpinner.innerHTML;
          });
        }
      }

      this.$getSmilCode();
    }

  }
});
// CONCATENATED MODULE: ./components/Styles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stylesvue_type_script_lang_js_ = (Stylesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Styles.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Stylesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5fd820d9"
  
)

/* harmony default export */ var Styles = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=styles.js.map