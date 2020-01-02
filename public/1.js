(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin/components/AdminNav.vue */ "./resources/js/admin/components/AdminNav.vue");
/* harmony import */ var _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Spinner.vue */ "./resources/js/components/Spinner.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PhotographyGroupStore',
  components: {
    AdminNav: _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Spinner: _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      photographyGroup: null,
      form: {
        name: ''
      },
      displaySpinner: false,
      errorVisible: false,
      isProcessing: false,
      action: 0,
      id: ''
    };
  },
  created: function created() {
    var _this = this;

    if (typeof this.$route.params.id === 'undefined') {
      this.displaySpinner = false;
      this.action = 0;
    } else {
      this.displaySpinner = true;
      this.id = this.$route.params.id;
      this.action = 1;
      this.$store.dispatch('getPhotographyGroup', {
        id: this.$route.params.id
      }).then(function (resp) {
        _this.form.name = resp.data.name;
        _this.displaySpinner = false;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  methods: {
    submit: function submit(e) {
      var _this2 = this;

      e.preventDefault();
      this.isProcessing = true;
      var url = this.action === 0 ? 'createPhotographyGroup' : 'updatePhotographyGroup';
      this.$store.dispatch(url, {
        name: this.form.name,
        id: this.id
      }).then(function (resp) {
        _this2.$router.push({
          name: 'home'
        });
      })["catch"](function (err) {
        _this2.errorVisible = true;
        _this2.isProcessing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.displaySpinner ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("AdminNav"),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "form-holder", attrs: { md: "12", lg: "4" } },
                [
                  _c(
                    "b-form",
                    { staticClass: "custom-form", on: { submit: _vm.submit } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "name-group",
                            label: "Nazwa:",
                            "label-for": "name"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "name",
                              type: "text",
                              required: "",
                              placeholder: "Nazwa"
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.errorVisible
                        ? _c(
                            "b-alert",
                            { attrs: { variant: "danger", show: "" } },
                            [
                              _vm._v(
                                "Coś poszło nie tak. Spróbuj ponownie teraz lub później."
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.action === 0
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                variant: "outline-primary",
                                disabled: _vm.isProcessing
                              }
                            },
                            [_vm._v("Stwórz")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.action === 1
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                variant: "outline-primary",
                                disabled: _vm.isProcessing
                              }
                            },
                            [_vm._v("Edytuj")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/PhotographyGroupStore.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/views/PhotographyGroupStore.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotographyGroupStore.vue?vue&type=template&id=5c37fc60& */ "./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60&");
/* harmony import */ var _PhotographyGroupStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotographyGroupStore.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotographyGroupStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/PhotographyGroupStore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyGroupStore.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyGroupStore.vue?vue&type=template&id=5c37fc60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/PhotographyGroupStore.vue?vue&type=template&id=5c37fc60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupStore_vue_vue_type_template_id_5c37fc60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);