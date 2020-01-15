(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'GalleryTable',
  props: {
    items: Array
  },
  methods: {
    deleteGallery: function deleteGallery(elId) {
      var _this = this;

      this.$store.dispatch('deleteGallery', {
        id: elId
      }).then(function (resp) {
        for (var i = 0; i < _this.items.length; i++) {
          if (_this.items[i].id === elId) {
            _this.items.splice(i, 1);
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'PhotographyGroupTable',
  props: {
    items: Array
  },
  methods: {
    deleteRow: function deleteRow(elId) {
      var _this = this;

      this.$store.dispatch('deletePhotographyGroup', {
        id: elId
      }).then(function (resp) {
        _this.$parent.deleteRow(_this.$parent.photographyGroups, {
          id: elId
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'PhotographyTable',
  props: {
    items: Array
  },
  methods: {
    deletePhotography: function deletePhotography(elId) {
      var _this = this;

      this.$store.dispatch('deletePhotographies', {
        id: elId
      }).then(function (resp) {
        for (var i = 0; i < _this.items.length; i++) {
          if (_this.items[i].id === elId) {
            _this.items.splice(i, 1);
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin/components/AdminNav.vue */ "./resources/js/admin/components/AdminNav.vue");
/* harmony import */ var _admin_components_PhotographyGroupTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/components/PhotographyGroupTable.vue */ "./resources/js/admin/components/PhotographyGroupTable.vue");
/* harmony import */ var _admin_components_PhotographyTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/components/PhotographyTable.vue */ "./resources/js/admin/components/PhotographyTable.vue");
/* harmony import */ var _admin_components_GalleryTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/components/GalleryTable.vue */ "./resources/js/admin/components/GalleryTable.vue");
/* harmony import */ var _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Spinner.vue */ "./resources/js/components/Spinner.vue");
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
  name: 'Home',
  components: {
    AdminNav: _admin_components_AdminNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PhotographyGroupTable: _admin_components_PhotographyGroupTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    GalleryTable: _admin_components_GalleryTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    PhotographyTable: _admin_components_PhotographyTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Spinner: _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      photographyGroups: [],
      galleries: [],
      photographies: [],
      displaySpinner: true,
      loaded: false
    };
  },
  created: function created() {
    this.changeSection(this.$store.getters.getLastSectionId);
  },
  methods: {
    changeSection: function changeSection(id) {
      var _this = this;

      if (id !== this.$store.getters.getLastSectionId || !this.loaded) {
        var oldId = this.$store.getters.getLastSectionId;
        if (!this.loaded) this.loaded = true;
        this.$store.dispatch('changeLastSectionId', {
          id: id
        }).then(function (resp) {
          if (_this.getLastId === 0) _this.getPhotographyGroups();
          if (_this.getLastId === 1) _this.getPhotographies();
          if (_this.getLastId === 2) _this.getGalleries();
          $("div[section-id='".concat(oldId, "']")).removeClass('active');
          $("div[section-id=".concat(id, "]")).addClass('active');
        });
      }
    },
    deleteRow: function deleteRow(arr, el) {
      for (var i = 0; i < arr.length; i += 1) {
        if (arr[i].id === el.id) {
          arr.splice(i, 1);
        }
      }
    },
    checkElements: function checkElements(oldArr, newArr) {
      var _this2 = this;

      oldArr.forEach(function (el) {
        var count = 0;
        newArr.forEach(function (newEl) {
          if (newEl.id === el.id) count += 1;
        });
        if (count === 0) _this2.deleteRow(oldArr, el);
      });
    },
    addNewElementsToArr: function addNewElementsToArr(oldArr, newArr) {
      newArr.forEach(function (newEl) {
        var count = 0;
        oldArr.forEach(function (el) {
          if (el.id === newEl.id) count += 1;
        });
        if (count === 0) oldArr.push(newEl);
      });
    },
    getPhotographyGroups: function getPhotographyGroups() {
      var _this3 = this;

      this.$store.dispatch('getPhotographyGroups').then(function (resp) {
        _this3.addNewElementsToArr(_this3.photographyGroups, resp.data);

        _this3.checkElements(_this3.photographyGroups, resp.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getGalleries: function getGalleries() {
      var _this4 = this;

      this.$store.dispatch('getGalleries').then(function (resp) {
        _this4.addNewElementsToArr(_this4.galleries, resp.data);

        _this4.checkElements(_this4.galleries, resp.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPhotographies: function getPhotographies() {
      var _this5 = this;

      this.$store.dispatch('getPhotographies').then(function (resp) {
        _this5.addNewElementsToArr(_this5.photographies, resp.data);

        _this5.checkElements(_this5.photographies, resp.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    getLastId: function getLastId() {
      return parseInt(this.$store.getters.getLastSectionId);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-holder {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.section-picker-holder {\n  border-right: 1px solid #000;\n}\n@media (max-width: 991px) {\n.section-picker-holder {\n    border-right: none;\n    margin-bottom: 16px;\n}\n}\n.list-group-item {\n  cursor: pointer;\n  border: 1px solid #000;\n  -webkit-transition: all 0.1s ease-out;\n  transition: all 0.1s ease-out;\n}\n.list-group-item:hover {\n  background-color: #000 !important;\n  color: #fff;\n  border-color: #000 !important;\n  box-shadow: none !important;\n}\n.active {\n  background-color: #000 !important;\n  border-color: #000 !important;\n  box-shadow: none !important;\n}\n.custom-table {\n  border-top: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [_vm._v("\n          Galerie\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "section-add-btn",
                          attrs: { to: { name: "galleryCreate" } }
                        },
                        [_vm._v("Dodaj")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { lg: "12", md: "12" } }, [
            _c(
              "table",
              { staticClass: "table table-striped custom-table" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Nazwa")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Prywatna")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Akcja")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "transition-group",
                  { attrs: { tag: "tbody", name: "fade" } },
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: item.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c(
                        "th",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "single-gallery-link",
                              attrs: {
                                to: {
                                  name: "singleGallery",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.name))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(item.private ? "tak" : "nie"))]),
                      _vm._v(" "),
                      _c(
                        "th",
                        [
                          _c(
                            "button",
                            {
                              staticClass: "delete-row",
                              on: {
                                click: function($event) {
                                  return _vm.deleteGallery(item.id)
                                }
                              }
                            },
                            [_vm._v("Usuń")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "edit-row",
                              attrs: {
                                to: {
                                  name: "editGallery",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [_vm._v("Edytuj")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [_vm._v("\n          Nagłówki\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "section-add-btn",
                          attrs: { to: { name: "photographyGroupCreate" } }
                        },
                        [_vm._v("Dodaj")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { lg: "12", md: "12" } }, [
            _c(
              "table",
              { staticClass: "table table-striped custom-table" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Nazwa")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Akcja")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "transition-group",
                  { attrs: { tag: "tbody", name: "fade" } },
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: item.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c(
                        "th",
                        [
                          _c(
                            "button",
                            {
                              staticClass: "delete-row",
                              on: {
                                click: function($event) {
                                  return _vm.deleteRow(item.id)
                                }
                              }
                            },
                            [_vm._v("Usuń")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "edit-row",
                              attrs: {
                                to: {
                                  name: "photographyGroupEdit",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [_vm._v("Edytuj")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc& ***!
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
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [_vm._v("\n          Fotografie\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "section-header",
                      attrs: { lg: "6", md: "6", sm: "6", cols: "6" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "section-add-btn",
                          attrs: { to: { name: "photographyCreate" } }
                        },
                        [_vm._v("Dodaj")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { lg: "12", md: "12" } }, [
            _c(
              "table",
              { staticClass: "table table-striped custom-table" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Nazwa")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Akcja")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "transition-group",
                  { attrs: { tag: "tbody", name: "fade" } },
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: item.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "button",
                          {
                            staticClass: "delete-row",
                            on: {
                              click: function($event) {
                                return _vm.deletePhotography(item.id)
                              }
                            }
                          },
                          [_vm._v("Usuń")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=template&id=87400184&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Home.vue?vue&type=template&id=87400184& ***!
  \********************************************************************************************************************************************************************************************************/
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
                { staticClass: "content-holder", attrs: { md: "12", lg: "8" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "section-picker-holder",
                          attrs: { lg: "3", md: "12" }
                        },
                        [
                          _c(
                            "b-list-group",
                            [
                              _c(
                                "b-list-group-item",
                                {
                                  attrs: { "section-id": "0" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeSection(0)
                                    }
                                  }
                                },
                                [_vm._v("Nagłówki")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-list-group-item",
                                {
                                  attrs: { "section-id": "1" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeSection(1)
                                    }
                                  }
                                },
                                [_vm._v("Fotogrfia")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-list-group-item",
                                {
                                  attrs: { "section-id": "2" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeSection(2)
                                    }
                                  }
                                },
                                [_vm._v("Galerie")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "9", md: "12" } },
                        [
                          _vm.getLastId === 0
                            ? _c("PhotographyGroupTable", {
                                attrs: { items: _vm.photographyGroups }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getLastId === 1
                            ? _c("PhotographyTable", {
                                attrs: { items: _vm.photographies }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getLastId === 2
                            ? _c("GalleryTable", {
                                attrs: { items: _vm.galleries }
                              })
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/GalleryTable.vue":
/*!********************************************************!*\
  !*** ./resources/js/admin/components/GalleryTable.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryTable.vue?vue&type=template&id=ddb85972& */ "./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972&");
/* harmony import */ var _GalleryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryTable.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/GalleryTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/GalleryTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryTable.vue?vue&type=template&id=ddb85972& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/GalleryTable.vue?vue&type=template&id=ddb85972&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryTable_vue_vue_type_template_id_ddb85972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/components/PhotographyGroupTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyGroupTable.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotographyGroupTable.vue?vue&type=template&id=dcd0461e& */ "./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e&");
/* harmony import */ var _PhotographyGroupTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotographyGroupTable.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotographyGroupTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/PhotographyGroupTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyGroupTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyGroupTable.vue?vue&type=template&id=dcd0461e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyGroupTable.vue?vue&type=template&id=dcd0461e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyGroupTable_vue_vue_type_template_id_dcd0461e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/components/PhotographyTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotographyTable.vue?vue&type=template&id=63b333dc& */ "./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc&");
/* harmony import */ var _PhotographyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotographyTable.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotographyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/PhotographyTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotographyTable.vue?vue&type=template&id=63b333dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/PhotographyTable.vue?vue&type=template&id=63b333dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotographyTable_vue_vue_type_template_id_63b333dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/Home.vue":
/*!*******************************************!*\
  !*** ./resources/js/admin/views/Home.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=87400184& */ "./resources/js/admin/views/Home.vue?vue&type=template&id=87400184&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/admin/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/views/Home.vue?vue&type=template&id=87400184&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/views/Home.vue?vue&type=template&id=87400184& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=87400184& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Home.vue?vue&type=template&id=87400184&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_87400184___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);