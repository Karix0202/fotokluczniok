(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin/components/AdminNav.vue */ "./resources/js/admin/components/AdminNav.vue");
/* harmony import */ var _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Spinner.vue */ "./resources/js/components/Spinner.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__);
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
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Gallery',
  components: {
    AdminNav: _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Spinner: _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vue2Dropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      displaySpinner: true,
      gallery: null,
      dropzoneOptions: {
        url: '/',
        dictDefaultMessage: 'Upuść lub kliknij',
        maxFiles: 500,
        autoProcessQueue: true,
        thumbnailWidth: 100,
        thumbnailHeight: 100
      },
      images: [],
      selectedImages: []
    };
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('getGallery', {
      id: this.$route.params.id
    }).then(function (resp) {
      _this.displaySpinner = false;
      _this.gallery = resp.data;
      _this.dropzoneOptions.url = _this.$store.getters.getApiUrl + "image/create/".concat(_this.gallery.id);
      resp.data.images.forEach(function (image) {
        image['newName'] = image.name.replace(image.name.substr(6, 20), '...');

        _this.images.push(image);
      });
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    deleteImages: function deleteImages(e) {
      var _this2 = this;

      e.preventDefault();
      this.$store.dispatch('deleteImages', {
        images: this.selectedImages
      }).then(function (resp) {
        console.log(resp);
        resp.data.forEach(function (deletedEl) {
          for (var i = 0; i < _this2.images.length; i++) {
            if (_this2.images[i].id === deletedEl) _this2.images.splice(i, 1);
          }
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    dropzoneSuccess: function dropzoneSuccess(file, resp) {
      resp['newName'] = resp.name.replace(resp.name.substr(6, 20), '...');
      this.images.push(resp);
    },
    handleChange: function handleChange(e) {
      var id = e.target.value;

      if (e.target.checked) {
        this.selectedImages.push(id);
      } else {
        for (var i = 0; i < this.selectedImages.length; i++) {
          if (this.selectedImages[i] === id) this.selectedImages.splice(i, 1);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-holder {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.vue-dropzone {\n  border-color: #000;\n  color: #000;\n}\n.vue-dropzone .dz-image:hover {\n  background-color: #000;\n}\n.image-holder {\n  margin-top: 26px;\n}\n.delete-selected-images {\n  margin-bottom: 8px;\n  background-color: white;\n  color: #000;\n  border: 1px solid #E53935;\n  border-radius: 0;\n}\n.delete-selected-images:hover {\n  color: #fff;\n  background-color: #E53935;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _vm.gallery !== null
        ? _c(
            "b-container",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "content-holder",
                      attrs: { lg: "8", md: "12" }
                    },
                    [
                      _c("h2", [_vm._v(_vm._s(_vm.gallery.name))]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("vue2Dropzone", {
                                ref: "myVueDropzone",
                                attrs: {
                                  id: "dropzone",
                                  options: _vm.dropzoneOptions
                                },
                                on: { "vdropzone-success": _vm.dropzoneSuccess }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "image-holder",
                              attrs: { lg: "6", md: "12" }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn delete-selected-images",
                                  attrs: {
                                    disabled: _vm.selectedImages.length === 0
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteImages($event)
                                    }
                                  }
                                },
                                [_vm._v("Usuń zaznaczone")]
                              ),
                              _vm._v(" "),
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-striped custom-table"
                                },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("#")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Nazwa")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Akcja")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "transition-group",
                                    { attrs: { tag: "tbody", name: "fade" } },
                                    _vm._l(_vm.images, function(item, i) {
                                      return _c("tr", { key: item.id }, [
                                        _c("th", { attrs: { scope: "row" } }, [
                                          _vm._v(_vm._s(i + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "single-gallery-link",
                                              attrs: {
                                                href: item.full_path,
                                                "data-lightbox": "image",
                                                "data-title": item.name
                                              }
                                            },
                                            [_vm._v(_vm._s(item.newName))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "delete-checkbox-label"
                                            },
                                            [
                                              _c("input", {
                                                staticClass: "delete-checkbox",
                                                attrs: { type: "checkbox" },
                                                domProps: { value: item.id },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.handleChange(
                                                      $event
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(
                                                "\n                      Usuń\n                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            ]
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Gallery.vue":
/*!**********************************************!*\
  !*** ./resources/js/admin/views/Gallery.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=10073843& */ "./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=10073843& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Gallery.vue?vue&type=template&id=10073843&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_10073843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);