function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paths-home-home-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };
    /** Checks whether an object is a data source. */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** DataSource wrapper for a native array. */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super = _createSuper(ArrayDataSource);

      function ArrayDataSource(_data) {
        var _this;

        _classCallCheck(this, ArrayDataSource);

        _this = _super.call(this);
        _this._data = _data;
        return _this;
      }

      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     */


    var SelectionModel = /*#__PURE__*/function () {
      function SelectionModel() {
        var _this2 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */

        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */

        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */

        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(function (value) {
              return _this2._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /** Selected values. */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         */
        value: function select() {
          var _this3 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this3._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this4 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this4._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /** Emits a change event and clears the records of selected and deselected values. */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /** Selects a value. */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /** Deselects a value. */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /** Clears out the selected values. */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this5 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(function (value) {
              return _this5._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * @docs-private
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher =
    /** @class */
    function () {
      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator = _createForOfIteratorHelper(this._listeners),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this6 = this;

            this._listeners.push(listener);

            return function () {
              _this6._listeners = _this6._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || UniqueSelectionDispatcher)();
      };

      UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      return UniqueSelectionDispatcher;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
    \********************************************************************/

  /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy = /*#__PURE__*/function () {
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /** Blocks page-level scroll while the attached overlay is open. */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            var root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /** Unblocks page-level scroll while the attached overlay is open. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            var html = this._document.documentElement;
            var body = this._document.body;
            var htmlStyle = html.style;
            var bodyStyle = body.style;
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.
          var html = this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }

          var body = this._document.body;

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy = /*#__PURE__*/function () {
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this7 = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /** Detaches the overlay ref and disables the scroll strategy. */

        this._detach = function () {
          _this7.disable();

          if (_this7._overlayRef.hasAttached()) {
            _this7._ngZone.run(function () {
              return _this7._overlayRef.detach();
            });
          }
        };
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /** Enables the closing of the attached overlay on scroll. */

      }, {
        key: "enable",
        value: function enable() {
          var _this8 = this;

          if (this._scrollSubscription) {
            return;
          }

          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
              var scrollPosition = _this8._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this8._initialScrollPosition) > _this8._config.threshold) {
                _this8._detach();
              } else {
                _this8._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /** Disables the closing the attached overlay on scroll. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef = null;
        }
      }]);

      return CloseScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Scroll strategy that doesn't do anything. */


    var NoopScrollStrategy = /*#__PURE__*/function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /** Does nothing, as this scroll strategy is a no-op. */
        value: function enable() {}
        /** Does nothing, as this scroll strategy is a no-op. */

      }, {
        key: "disable",
        value: function disable() {}
        /** Does nothing, as this scroll strategy is a no-op. */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * @param element Dimensions of the element (from getBoundingClientRect)
     * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @returns Whether the element is scrolled out of view
     * @docs-private
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(function (containerBounds) {
        var outsideAbove = element.bottom < containerBounds.top;
        var outsideBelow = element.top > containerBounds.bottom;
        var outsideLeft = element.right < containerBounds.left;
        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * @param element Dimensions of the element (from getBoundingClientRect)
     * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @returns Whether the element is clipped
     * @docs-private
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(function (scrollContainerRect) {
        var clippedAbove = element.top < scrollContainerRect.top;
        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        var clippedLeft = element.left < scrollContainerRect.left;
        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy = /*#__PURE__*/function () {
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /** Enables repositioning of the attached overlay on scroll. */

      }, {
        key: "enable",
        value: function enable() {
          var _this9 = this;

          if (!this._scrollSubscription) {
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
              _this9._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this9._config && _this9._config.autoClose) {
                var overlayRect = _this9._overlayRef.overlayElement.getBoundingClientRect();

                var _this9$_viewportRuler = _this9._viewportRuler.getViewportSize(),
                    width = _this9$_viewportRuler.width,
                    height = _this9$_viewportRuler.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this9.disable();

                  _this9._ngZone.run(function () {
                    return _this9._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /** Disables repositioning of the attached overlay on scroll. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef = null;
        }
      }]);

      return RepositionScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions =
    /** @class */
    function () {
      var ScrollStrategyOptions = function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this10 = this;

        _classCallCheck(this, ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */

        this.noop = function () {
          return new NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close = function (config) {
          return new CloseScrollStrategy(_this10._scrollDispatcher, _this10._ngZone, _this10._viewportRuler, config);
        };
        /** Block scrolling. */


        this.block = function () {
          return new BlockScrollStrategy(_this10._viewportRuler, _this10._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition = function (config) {
          return new RepositionScrollStrategy(_this10._scrollDispatcher, _this10._viewportRuler, _this10._ngZone, config);
        };

        this._document = document;
      };

      ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollStrategyOptions_Factory() {
          return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: ScrollStrategyOptions,
        providedIn: "root"
      });

      ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      return ScrollStrategyOptions;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Initial configuration used when creating an overlay. */


    var OverlayConfig = function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /** Strategy to be used when handling scroll events while the overlay is open. */
      this.scrollStrategy = new NoopScrollStrategy();
      /** Custom class to add to the overlay pane. */

      this.panelClass = '';
      /** Whether the overlay has a backdrop. */

      this.hasBackdrop = false;
      /** Custom class to add to the backdrop */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        var configKeys = Object.keys(config);

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var key = _configKeys[_i];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] = config[key];
          }
        }
      }
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The points of the origin element and the overlay element to connect. */


    var ConnectionPositionPair = function ConnectionPositionPair(origin, overlay,
    /** Offset along the X axis. */
    offsetX,
    /** Offset along the Y axis. */
    offsetY,
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     *  @docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };
    /** The change event emitted by the strategy when a fallback position is used. */


    var ConnectedOverlayPositionChange =
    /** @class */
    function () {
      var ConnectedOverlayPositionChange = function ConnectedOverlayPositionChange(
      /** The position used as a result of this change. */
      connectionPair,
      /** @docs-private */
      scrollableViewProperties) {
        _classCallCheck(this, ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };

      ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: ConnectionPositionPair
        }, {
          type: ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      return ConnectedOverlayPositionChange;
    }();
    /**
     * Validates whether a vertical position property matches the expected values.
     * @param property Name of the property being validated.
     * @param value Value of the property being validated.
     * @docs-private
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * @param property Name of the property being validated.
     * @param value Value of the property being validated.
     * @docs-private
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher =
    /** @class */
    function () {
      var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
        function OverlayKeyboardDispatcher(document) {
          var _this11 = this;

          _classCallCheck(this, OverlayKeyboardDispatcher);

          /** Currently attached overlays in the order they were attached. */
          this._attachedOverlays = [];
          /** Keyboard event listener that will be attached to the body. */

          this._keydownListener = function (event) {
            var overlays = _this11._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEvents.observers.length > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          this._document = document;
        }

        _createClass(OverlayKeyboardDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._detach();
          }
          /** Add a new overlay to the list of attached overlay refs. */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }

            this._attachedOverlays.push(overlayRef);
          }
          /** Remove an overlay from the list of attached overlay refs. */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this._detach();
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "_detach",
          value: function _detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return OverlayKeyboardDispatcher;
      }();

      OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayKeyboardDispatcher,
        providedIn: "root"
      });

      OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      return OverlayKeyboardDispatcher;
    }();
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher], // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Whether we're in a testing environment.
     * TODO(crisbeto): remove this once we have an overlay testing module.
     */

    var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(window.__karma__ || window.jasmine);
    /** Container inside which all overlays will render. */

    var OverlayContainer =
    /** @class */
    function () {
      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        _platform) {
          _classCallCheck(this, OverlayContainer);

          this._platform = _platform;
          this._document = document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var container = this._containerElement;

            if (container && container.parentNode) {
              container.parentNode.removeChild(container);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            // @breaking-change 10.0.0 Remove null check for `_platform`.
            var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
            var containerClass = 'cdk-overlay-container';

            if (isBrowser || isTestEnvironment) {
              var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
              // This can happen when transitioning from the server to the client.


              for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
              }
            }

            var container = this._document.createElement('div');

            container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

            if (isTestEnvironment) {
              container.setAttribute('platform', 'test');
            } else if (!isBrowser) {
              container.setAttribute('platform', 'server');
            }

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();

      return OverlayContainer;
    }();
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
      ],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, // @breaking-change 8.0.0 `_location` parameter to be made required.
      _location) {
        var _this12 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

        this._backdropClickHandler = function (event) {
          return _this12._backdropClick.next(event);
        };
        /** Stream of keydown events dispatched to this overlay. */


        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /** The overlay's HTML element */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param portal Portal instance to which to attach the overlay.
         * @returns The portal attachment result.
         */
        value: function attach(portal) {
          var _this13 = this;

          var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this13.hasAttached()) {
              _this13.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(function () {
              return _this13.dispose();
            });
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @returns The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }

          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe();

          return detachmentResult;
        }
        /** Cleans up the overlay from the DOM. */

      }, {
        key: "dispose",
        value: function dispose() {
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host = null;
          }

          this._previousHostParent = this._pane = null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /** Whether the overlay has attached content. */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /** Gets an observable that emits when the backdrop has been clicked. */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick.asObservable();
        }
        /** Gets an observable that emits when the overlay has been attached. */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments.asObservable();
        }
        /** Gets an observable that emits when the overlay has been detached. */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments.asObservable();
        }
        /** Gets an observable of keydown events targeted to this overlay. */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEvents.asObservable();
        }
        /** Gets the current overlay configuration, which is immutable. */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /** Updates the position of the overlay based on the position strategy. */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /** Switches to a new position strategy and updates the overlay position. */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /** Update the size properties of the overlay. */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

          this._updateElementSize();
        }
        /** Sets the LTR/RTL direction for the overlay. */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign(Object.assign({}, this._config), {
            direction: dir
          });

          this._updateElementDirection();
        }
        /** Add a CSS class or an array of classes to the overlay pane. */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /** Remove a CSS class or an array of classes from the overlay pane. */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /** Switches to a new scroll strategy. */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /** Updates the text direction of the overlay panel. */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /** Updates the size of the overlay element based on the overlay config. */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }

          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /** Toggles the pointer events for the overlay pane element. */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /** Attaches a backdrop for this overlay. */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this14 = this;

          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                if (_this14._backdropElement) {
                  _this14._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
          }
        }
        /** Detaches the backdrop (if any) associated with the overlay. */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this15 = this;

          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }

          var timeoutId;

          var finishDetach = function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this15._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this15._backdropElement == backdropToDetach) {
              _this15._backdropElement = null;
            }

            if (_this15._config.backdropClass) {
              _this15._toggleClasses(backdropToDetach, _this15._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(function () {
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /** Toggles a single CSS class or an array of classes on an element. */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /** Detaches the overlay content next time the zone stabilizes. */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this16 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            var subscription = _this16._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this16._attachments, _this16._detachments))).subscribe(function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this16._pane || !_this16._host || _this16._pane.children.length === 0) {
                if (_this16._pane && _this16._config.panelClass) {
                  _this16._toggleClasses(_this16._pane, _this16._config.panelClass, false);
                }

                if (_this16._host && _this16._host.parentElement) {
                  _this16._previousHostParent = _this16._host.parentElement;

                  _this16._previousHostParent.removeChild(_this16._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /** Disposes of a scroll strategy. */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /** The overlay's backdrop HTML element. */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /** Class to be added to the overlay bounding box. */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /** Regex used to split a string on its CSS units. */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /** Whether the overlay was pushed in a previous positioning. */

        this._isPushed = false;
        /** Whether the overlay can be pushed on-screen on the initial open. */

        this._canPush = true;
        /** Whether the overlay can grow via flexible width/height after the initial open. */

        this._growAfterOpen = false;
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        this._hasFlexibleDimensions = true;
        /** Whether the overlay position is locked. */

        this._positionLocked = false;
        /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

        this._viewportMargin = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */

        this._scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */

        this._preferredPositions = [];
        /** Subject that emits whenever the position changes. */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Subscription to viewport size changes. */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Default offset for the overlay along the x axis. */

        this._offsetX = 0;
        /** Default offset for the overlay along the y axis. */

        this._offsetY = 0;
        /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

        this._appliedPanelClasses = [];
        /** Observable sequence of position changes. */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /** Ordered list of preferred positions, from most to least desirable. */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /** Attaches this position strategy to an overlay. */
        value: function attach(overlayRef) {
          var _this17 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this17._isInitialRender = true;

            _this17.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          var originRect = this._originRect;
          var overlayRect = this._overlayRect;
          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator2 = _createForOfIteratorHelper(this._preferredPositions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var pos = _step2.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (flexibleFits.length) {
            var bestFit = null;
            var bestScore = -1;

            var _iterator3 = _createForOfIteratorHelper(flexibleFits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var fit = _step3.value;
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._isPushed = false;

            this._applyPosition(bestFit.position, bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(fallback.position, fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(fallback.position, fallback.originPoint);
        }
      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /** Cleanup after the element gets destroyed. */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox = null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            var lastPosition = this._lastPosition || this._preferredPositions[0];

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._scrollables = scrollables;
          return this;
        }
        /**
         * Adds new preferred positions.
         * @param positions List of positions options for this overlay.
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
          }

          this._validatePositions();

          return this;
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @param margin Required margin between the overlay and the viewport edge in pixels.
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          this._viewportMargin = margin;
          return this;
        }
        /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._hasFlexibleDimensions = flexibleDimensions;
          return this;
        }
        /** Sets whether the overlay can grow after the initial open via flexible width/height. */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._growAfterOpen = growAfterOpen;
          return this;
        }
        /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._canPush = canPush;
          return this;
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @param isLocked Whether the overlay should locked in.
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._positionLocked = isLocked;
          return this;
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @param origin Reference to the new origin.
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          this._origin = origin;
          return this;
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @param offset New offset in the X axis.
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          this._offsetX = offset;
          return this;
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @param offset New offset in the Y axis.
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          this._offsetY = offset;
          return this;
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @param selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          this._transformOriginSelector = selector;
          return this;
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            var startX = this._isRtl() ? originRect.right : originRect.left;
            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }

          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }

          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /** Gets how well an overlay at the given point will fit within the viewport. */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;

          var offsetX = this._getOffset(position, 'x');

          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.


          var leftOverflow = 0 - x;
          var rightOverflow = x + overlay.width - viewport.width;
          var topOverflow = 0 - y;
          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @param fit How well the overlay fits in the viewport at some position.
         * @param point The (x, y) coordinates of the overlat at some position.
         * @param viewport The geometry of the viewport.
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            var availableHeight = viewport.bottom - point.y;
            var availableWidth = viewport.right - point.x;
            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @param start Starting point from which the overlay is pushed.
         * @param overlay Dimensions of the overlay.
         * @param scrollPosition Current viewport scroll position.
         * @returns The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }

          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
          var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          var pushX = 0;
          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @param position The position preference
         * @param originPoint The point on the origin element where the overlay is connected.
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            var scrollableViewProperties = this._getScrollVisibility();

            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /** Sets the transform origin based on the configured selector and the passed-in position.  */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }

          var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

          var xOrigin;
          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          var viewport = this._viewportRect;

          var isRtl = this._isRtl();

          var height, top, bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          var width, left, right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @param origin The point on the origin element where the overlay is connected.
         * @param position The position preference
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }

          var styles = {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
          } else {
            var maxHeight = this._overlayRef.getConfig().maxHeight;

            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(this._boundingBox.style, styles);
        }
        /** Resets the styles for the bounding box so that a new positioning can be computed. */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /** Resets the styles for the overlay pane so that a new positioning can be computed. */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /** Sets positioning styles to the overlay element. */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          var styles = {};

          var hasExactPosition = this._hasExactPosition();

          var hasFlexibleDimensions = this._hasFlexibleDimensions;

          var config = this._overlayRef.getConfig();

          if (hasExactPosition) {
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.


          var transformString = '';

          var offsetX = this._getOffset(position, 'x');

          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
          // Note that this doesn't apply when we have an exact position, in which case we do want to
          // apply them because they'll be cleared from the bounding box.

          if (config.maxHeight) {
            if (hasExactPosition) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            } else if (hasFlexibleDimensions) {
              styles.maxHeight = '';
            }
          }

          if (config.maxWidth) {
            if (hasExactPosition) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            } else if (hasFlexibleDimensions) {
              styles.maxWidth = '';
            }
          }

          extendStyles(this._pane.style, styles);
        }
        /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.
          var styles = {
            top: '',
            bottom: ''
          };

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }

          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            var documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.
          var styles = {
            left: '',
            right: ''
          };

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            var documentWidth = this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.
          var originBounds = this._getOriginRect();

          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.


          var scrollContainerBounds = this._scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /** Subtracts the amount that an element is overflowing on an axis from its length. */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len3 = arguments.length, overflows = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            overflows[_key3 - 1] = arguments[_key3];
          }

          return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /** Narrows the given viewport rect by the current _viewportMargin. */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.
          var width = this._document.documentElement.clientWidth;
          var height = this._document.documentElement.clientHeight;

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /** Whether the we're dealing with an RTL context */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /** Determines whether the overlay uses exact or flexible positioning. */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /** Retrieves the offset of a position along the x or y axis. */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /** Validates that the current position match the expected values. */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
          } // TODO(crisbeto): remove these once Angular's template type
          // checking is advanced enough to catch these cases.


          this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
          });
        }
        /** Adds a single CSS class or an array of classes on the overlay panel. */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this18 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
              if (cssClass !== '' && _this18._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this18._appliedPanelClasses.push(cssClass);

                _this18._pane.classList.add(cssClass);
              }
            });
          }
        }
        /** Clears the classes that the position strategy has applied from the overlay panel. */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this19 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(function (cssClass) {
              _this19._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /** Returns the ClientRect of the current origin. */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          } // Check for Element so SVG elements are also supported.


          if (origin instanceof Element) {
            return origin.getBoundingClientRect();
          }

          var width = origin.width || 0;
          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();
    /** Shallow-extends a stylesheet object with another stylesheet object. */


    function extendStyles(destination, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }

      return destination;
    }
    /**
     * Extracts the pixel value as a number from a value, if it's a number
     * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
     */


    function getPixelValue(input) {
      if (typeof input !== 'number' && input != null) {
        var _input$split = input.split(cssUnitPattern),
            _input$split2 = _slicedToArray(_input$split, 2),
            value = _input$split2[0],
            units = _input$split2[1];

        return !units || units === 'px' ? parseFloat(value) : null;
      }

      return input || null;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * @breaking-change 8.0.0
     */


    var ConnectedPositionStrategy = /*#__PURE__*/function () {
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /** Whether the we're dealing with an RTL context */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /** Attach this position strategy to an overlay. */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /** Disposes all resources used by the position strategy. */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /** @docs-private */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @param originPos
         * @param overlayPos
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          this._preferredPositions.push(position);

          this._positionStrategy.withPositions(this._preferredPositions);

          return this;
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @param dir New layout direction.
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
          } else {
            this._direction = dir;
          }

          return this;
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @param offset New offset in the X axis.
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          this._positionStrategy.withDefaultOffsetX(offset);

          return this;
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @param  offset New offset in the Y axis.
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          this._positionStrategy.withDefaultOffsetY(offset);

          return this;
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @param isLocked Whether the overlay should locked in.
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          this._positionStrategy.withLockedPosition(isLocked);

          return this;
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @param positions Position pairs to be set on the strategy.
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          this._preferredPositions = positions.slice();

          this._positionStrategy.withPositions(this._preferredPositions);

          return this;
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @param origin Reference to the new origin element.
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          this._positionStrategy.setOrigin(origin);

          return this;
        }
      }, {
        key: "_isRtl",
        get: function get() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /** Emits an event when the connection point changes. */

      }, {
        key: "onPositionChange",
        get: function get() {
          return this._positionStrategy.positionChanges;
        }
        /** Ordered list of preferred positions, from most to least desirable. */

      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Class to be added to the overlay pane wrapper. */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy = /*#__PURE__*/function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }

      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @param value New top offset.
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._bottomOffset = '';
          this._topOffset = value;
          this._alignItems = 'flex-start';
          return this;
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @param value New left offset.
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._rightOffset = '';
          this._leftOffset = value;
          this._justifyContent = 'flex-start';
          return this;
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @param value New bottom offset.
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._topOffset = '';
          this._bottomOffset = value;
          this._alignItems = 'flex-end';
          return this;
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @param value New right offset.
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._leftOffset = '';
          this._rightOffset = value;
          this._justifyContent = 'flex-end';
          return this;
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @param value New width for the overlay
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * @breaking-change 8.0.0
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (this._overlayRef) {
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            this._width = value;
          }

          return this;
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @param value New height for the overlay
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * @breaking-change 8.0.0
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (this._overlayRef) {
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            this._height = value;
          }

          return this;
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @param offset Overlay offset from the horizontal center.
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.left(offset);
          this._justifyContent = 'center';
          return this;
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @param offset Overlay offset from the vertical center.
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.top(offset);
          this._alignItems = 'center';
          return this;
        }
        /**
         * Apply the position to the element.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }

          var styles = this._overlayRef.overlayElement.style;
          var parentStyles = this._overlayRef.hostElement.style;

          var config = this._overlayRef.getConfig();

          var width = config.width,
              height = config.height,
              maxWidth = config.maxWidth,
              maxHeight = config.maxHeight;
          var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
          var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
          styles.position = this._cssPosition;
          styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
          styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * @docs-private
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }

          var styles = this._overlayRef.overlayElement.style;
          var parent = this._overlayRef.hostElement;
          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef = null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Builder for overlay position strategy. */


    var OverlayPositionBuilder =
    /** @class */
    function () {
      var OverlayPositionBuilder = /*#__PURE__*/function () {
        function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */


        _createClass(OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @param elementRef
           * @param originPos
           * @param overlayPos
           * @deprecated Use `flexibleConnectedTo` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param origin Origin relative to which to position the overlay.
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return OverlayPositionBuilder;
      }();

      OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
      };

      OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayPositionBuilder_Factory() {
          return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
        },
        token: OverlayPositionBuilder,
        providedIn: "root"
      });

      OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: OverlayContainer
          }];
        }, null);
      })();

      return OverlayPositionBuilder;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Next overlay unique ID. */


    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
    // which needs to be different depending on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay =
    /** @class */
    function () {
      var Overlay = /*#__PURE__*/function () {
        function Overlay(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location) {
          _classCallCheck(this, Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(config) {
            var host = this._createHostElement();

            var pane = this._createPaneElement(host);

            var portalOutlet = this._createPortalOutlet(pane);

            var overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @returns An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @returns Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal outlet.
           * @returns A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Overlay,
        factory: function factory(t) {
          return Overlay.ɵfac(t);
        }
      });

      Overlay.ctorParameters = function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ScrollStrategyOptions
          }, {
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: OverlayPositionBuilder
          }, {
            type: OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();

      return Overlay;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /** Injection token that determines the scroll handling while the connected overlay is open. */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /** @docs-private @deprecated @breaking-change 8.0.0 */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
      return function (config) {
        return overlay.scrollStrategies.reposition(config);
      };
    }
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */


    var CdkOverlayOrigin =
    /** @class */
    function () {
      var CdkOverlayOrigin = function CdkOverlayOrigin(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });

      CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();

      return CdkOverlayOrigin;
    }();
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay =
    /** @class */
    function () {
      var CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Margin between the overlay and the viewport edges. */

          this.viewportMargin = 0;
          /** Whether the overlay is open. */

          this.open = false;
          /** Event emitted when the backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the position has changed. */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been attached. */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been detached. */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are keyboard events that are targeted at the overlay. */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */


        _createClass(CdkConnectedOverlay, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._overlayRef) {
              this._overlayRef.dispose();
            }

            this._backdropSubscription.unsubscribe();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /** Creates an overlay */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this20 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            this._overlayRef = this._overlay.create(this._buildConfig());

            this._overlayRef.keydownEvents().subscribe(function (event) {
              _this20.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();

                _this20._detachOverlay();
              }
            });
          }
          /** Builds the overlay config based on the directive's inputs */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

            var overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /** Updates the state of a position strategy, based on the values of the directive inputs. */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this21 = this;

            var positions = this.positions.map(function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this21.offsetX,
                offsetY: currentPosition.offsetY || _this21.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
          }
          /** Returns the position strategy of the overlay to be set on the overlay config */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var _this22 = this;

            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            strategy.positionChanges.subscribe(function (p) {
              return _this22.positionChange.emit(p);
            });
            return strategy;
          }
          /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this23 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);

              this.attach.emit();
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this23.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }
          }
          /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();

              this.detach.emit();
            }

            this._backdropSubscription.unsubscribe();
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** The offset in pixels for the overlay connection point on the y-axis */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          },
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** Whether or not the overlay should attach a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether or not the overlay should be locked when scrolling. */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          },
          set: function set(value) {
            this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          },
          set: function set(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          },
          set: function set(value) {
            this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          },
          set: function set(value) {
            this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The associated overlay reference. */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /** The element's layout direction. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }]);

        return CdkConnectedOverlay;
      }();

      CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
          transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOpen']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOrigin']
          }],
          positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositionStrategy']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
          }],
          transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayTransformOriginOn']
          }]
        });
      })();

      return CdkConnectedOverlay;
    }();
    /** @docs-private */


    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.reposition();
      };
    }
    /** @docs-private */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var OverlayModule =
    /** @class */
    function () {
      var OverlayModule = function OverlayModule() {
        _classCallCheck(this, OverlayModule);
      };

      OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OverlayModule
      });
      OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        },
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
          declarations: function declarations() {
            return [CdkConnectedOverlay, CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          },
          exports: function exports() {
            return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
            providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();

      return OverlayModule;
    }();
    /**
     * @deprecated Use `OverlayModule` instead.
     * @breaking-change 8.0.0
     * @docs-private
     */


    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer =
    /** @class */
    function () {
      var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
        _inherits(FullscreenOverlayContainer, _OverlayContainer);

        var _super2 = _createSuper(FullscreenOverlayContainer);

        function FullscreenOverlayContainer(_document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        platform) {
          _classCallCheck(this, FullscreenOverlayContainer);

          return _super2.call(this, _document, platform);
        }

        _createClass(FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this24 = this;

            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(function () {
              return _this24._adjustParentForFullscreenChange();
            });
          }
        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }

            var fullscreenElement = this.getFullscreenElement();
            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              var _document = this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            var _document = this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return FullscreenOverlayContainer;
      }(OverlayContainer);

      FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FullscreenOverlayContainer_Factory() {
          return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: FullscreenOverlayContainer,
        providedIn: "root"
      });

      FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();

      return FullscreenOverlayContainer;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=overlay.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
    \*******************************************************************/

  /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
      return DomPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * @docs-private
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * @docs-private
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * @docs-private
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * @docs-private
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * @docs-private
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * @docs-private
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     */


    var Portal = /*#__PURE__*/function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /** Attach this portal to a host. */
        value: function attach(host) {
          if (host == null) {
            throwNullPortalOutletError();
          }

          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          this._attachedHost = host;
          return host.attach(this);
        }
        /** Detach this portal from its host */

      }, {
        key: "detach",
        value: function detach() {
          var host = this._attachedHost;

          if (host == null) {
            throwNoPortalAttachedError();
          } else {
            this._attachedHost = null;
            host.detach();
          }
        }
        /** Whether this portal is attached to a host. */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     */


    var ComponentPortal = /*#__PURE__*/function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super3 = _createSuper(ComponentPortal);

      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this25;

        _classCallCheck(this, ComponentPortal);

        _this25 = _super3.call(this);
        _this25.component = component;
        _this25.viewContainerRef = viewContainerRef;
        _this25.injector = injector;
        _this25.componentFactoryResolver = componentFactoryResolver;
        return _this25;
      }

      return ComponentPortal;
    }(Portal);
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     */


    var TemplatePortal = /*#__PURE__*/function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super4 = _createSuper(TemplatePortal);

      function TemplatePortal(template, viewContainerRef, context) {
        var _this26;

        _classCallCheck(this, TemplatePortal);

        _this26 = _super4.call(this);
        _this26.templateRef = template;
        _this26.viewContainerRef = viewContainerRef;
        _this26.context = context;
        return _this26;
      }

      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);
    /**
     * A `DomPortal` is a portal whose DOM element will be taken from its current position
     * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
     * will be restored to its original position.
     */


    var DomPortal = /*#__PURE__*/function (_Portal3) {
      _inherits(DomPortal, _Portal3);

      var _super5 = _createSuper(DomPortal);

      function DomPortal(element) {
        var _this27;

        _classCallCheck(this, DomPortal);

        _this27 = _super5.call(this);
        _this27.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
        return _this27;
      }

      return DomPortal;
    }(Portal);
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     */


    var BasePortalOutlet = /*#__PURE__*/function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

        this.attachDomPortal = null;
      }
      /** Whether this host has an attached portal. */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /** Attaches a portal. */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (!portal) {
            throwNullPortalError();
          }

          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
          } else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
          }

          throwUnknownPortalTypeError();
        }
        /** Detaches a previously attached portal. */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /** Permanently dispose of this portal host. */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /** @docs-private */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super6 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super6.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super7 = _createSuper(DomPortalOutlet);

      function DomPortalOutlet(
      /** Element into which the content is projected. */
      outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
      /**
       * @deprecated `_document` Parameter to be made required.
       * @breaking-change 10.0.0
       */
      _document) {
        var _thisSuper, _this28;

        _classCallCheck(this, DomPortalOutlet);

        _this28 = _super7.call(this);
        _this28.outletElement = outletElement;
        _this28._componentFactoryResolver = _componentFactoryResolver;
        _this28._appRef = _appRef;
        _this28._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */

        _this28.attachDomPortal = function (portal) {
          // @breaking-change 10.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this28._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }

          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.


          var anchorNode = _this28._document.createComment('dom-portal');

          element.parentNode.insertBefore(anchorNode, element);

          _this28.outletElement.appendChild(element);

          _get((_thisSuper = _assertThisInitialized(_this28), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
            // We can't use `replaceWith` here because IE doesn't support it.
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this28._document = _document;
        return _this28;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @param portal Portal to be attached
       * @returns Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this29 = this;

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          var componentFactory = resolver.resolveComponentFactory(portal.component);
          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(function () {
              _this29._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @param portal Portal to be attached.
         * @returns Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this30 = this;

          var viewContainer = portal.viewContainerRef;
          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
          viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(function (rootNode) {
            return _this30.outletElement.appendChild(rootNode);
          });
          this.setDisposeFn(function () {
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /** Gets the root HTMLElement for an instantiated component. */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return componentRef.hostView.rootNodes[0];
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super8 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super8.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal =
    /** @class */
    function () {
      var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
        _inherits(CdkPortal, _TemplatePortal);

        var _super9 = _createSuper(CdkPortal);

        function CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, CdkPortal);

          return _super9.call(this, templateRef, viewContainerRef);
        }

        return CdkPortal;
      }(TemplatePortal);

      CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();

      return CdkPortal;
    }();
    /**
     * @deprecated Use `CdkPortal` instead.
     * @breaking-change 9.0.0
     */


    var TemplatePortalDirective =
    /** @class */
    function () {
      var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
        _inherits(TemplatePortalDirective, _CdkPortal);

        var _super10 = _createSuper(TemplatePortalDirective);

        function TemplatePortalDirective() {
          _classCallCheck(this, TemplatePortalDirective);

          return _super10.apply(this, arguments);
        }

        return TemplatePortalDirective;
      }(CdkPortal);

      TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
        return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
      };

      TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: CdkPortal,
              useExisting: TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();

      return TemplatePortalDirective;
    }();
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */


    var CdkPortalOutlet =
    /** @class */
    function () {
      var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(CdkPortalOutlet, _BasePortalOutlet3);

        var _super11 = _createSuper(CdkPortalOutlet);

        function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _thisSuper2, _this31;

          _classCallCheck(this, CdkPortalOutlet);

          _this31 = _super11.call(this);
          _this31._componentFactoryResolver = _componentFactoryResolver;
          _this31._viewContainerRef = _viewContainerRef;
          /** Whether the portal component is initialized. */

          _this31._isInitialized = false;
          /** Emits when a portal is attached to the outlet. */

          _this31.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this31.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this31._document) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this31._document.createComment('dom-portal');

            portal.setAttachedHost(_assertThisInitialized(_this31));
            element.parentNode.insertBefore(anchorNode, element);

            _this31._getRootNode().appendChild(element);

            _get((_thisSuper2 = _assertThisInitialized(_this31), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this31._document = _document;
          return _this31;
        }
        /** Portal associated with the Portal outlet. */


        _createClass(CdkPortalOutlet, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @param portal Portal to be attached to the portal outlet.
           * @returns Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.

            if (viewContainerRef !== this._viewContainerRef) {
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortalHost as an embedded View.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this32 = this;

            portal.setAttachedHost(this);

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return _this32._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
          /** Gets the root node of the portal outlet. */

        }, {
          key: "_getRootNode",
          value: function _getRootNode() {
            var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.

            return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
          }
        }, {
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          },
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /** Component or view reference that is attached to the portal. */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }]);

        return CdkPortalOutlet;
      }(BasePortalOutlet);

      CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      return CdkPortalOutlet;
    }();
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var PortalHostDirective =
    /** @class */
    function () {
      var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
        _inherits(PortalHostDirective, _CdkPortalOutlet);

        var _super12 = _createSuper(PortalHostDirective);

        function PortalHostDirective() {
          _classCallCheck(this, PortalHostDirective);

          return _super12.apply(this, arguments);
        }

        return PortalHostDirective;
      }(CdkPortalOutlet);

      PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
        return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
      };

      PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: CdkPortalOutlet,
              useExisting: PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      return PortalHostDirective;
    }();

    var PortalModule =
    /** @class */
    function () {
      var PortalModule = function PortalModule() {
        _classCallCheck(this, PortalModule);
      };

      PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortalModule
      });
      PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PortalModule_Factory(t) {
          return new (t || PortalModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
          }]
        }], null, null);
      })();

      return PortalModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * @docs-private
     */


    var PortalInjector = /*#__PURE__*/function () {
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }

      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The injection token used to specify the virtual scrolling strategy. */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Virtual scrolling strategy for lists with items of known fixed size. */

    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /** The attached viewport. */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** Detaches this scroll strategy from the currently attached viewport. */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param index The index of the element to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling.
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /** Update the viewport's total content size. */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /** Update the viewport's rendered range. */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }

          var renderedRange = this._viewport.getRenderedRange();

          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };

          var viewportSize = this._viewport.getViewportSize();

          var dataLength = this._viewport.getDataLength();

          var scrollOffset = this._viewport.measureScrollOffset();

          var firstVisibleIndex = scrollOffset / this._itemSize; // If user scrolls to the bottom of the list and data changes to a smaller list

          if (newRange.end > dataLength) {
            // We have to recalculate the first visible index based on new data length and viewport size.
            var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
            var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
            // Current range must also be adjusted to cover the new position (bottom of new list).

            if (firstVisibleIndex != newVisibleIndex) {
              firstVisibleIndex = newVisibleIndex;
              scrollOffset = newVisibleIndex * this._itemSize;
              newRange.start = Math.floor(firstVisibleIndex);
            }

            newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
          }

          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /** A virtual scroll strategy that supports fixed-size items. */


    var CdkFixedSizeVirtualScroll =
    /** @class */
    function () {
      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || CdkFixedSizeVirtualScroll)();
      };

      CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory,
              deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      return CdkFixedSizeVirtualScroll;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the scrolling events by default. */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher =
    /** @class */
    function () {
      var ScrollDispatcher = /*#__PURE__*/function () {
        function ScrollDispatcher(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this33 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this33._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this34 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (!_this34._globalSubscription) {
                _this34._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this34._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this34._scrolled.subscribe(observer);
              _this34._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this34._scrolledCount--;

                if (!_this34._scrolledCount) {
                  _this34._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this35 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this35.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementRef) {
            var _this36 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this36._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementRef) {
            var element = elementRef.nativeElement;
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this37 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this37._getWindow();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
                return _this37._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      return ScrollDispatcher;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable =
    /** @class */
    function () {
      var CdkScrollable = /*#__PURE__*/function () {
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this38 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this38.ngZone.runOutsideAngular(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this38.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this38._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
            /* NORMAL */
            ) {
                if (options.left != null) {
                  options.right = el.scrollWidth - el.clientWidth - options.left;
                }

                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
                /* INVERTED */
                ) {
                    options.left = options.right;
                  } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
                /* NEGATED */
                ) {
                    options.left = options.right ? -options.right : options.right;
                  }
              } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
            /* INVERTED */
            ) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollWidth - el.clientWidth - el.scrollLeft;
                } else {
                  return el.scrollLeft;
                }
              } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
            /* NEGATED */
            ) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollLeft + el.scrollWidth - el.clientWidth;
                } else {
                  return -el.scrollLeft;
                }
              } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
      };

      CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();

      return CdkScrollable;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the resize events by default. */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * @docs-private
     */

    var ViewportRuler =
    /** @class */
    function () {
      var ViewportRuler = /*#__PURE__*/function () {
        function ViewportRuler(_platform, ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          var _this39 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          this._document = document;
          ngZone.runOutsideAngular(function () {
            var window = _this39._getWindow();

            _this39._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.

            _this39._invalidateCache = _this39.change().subscribe(function () {
              return _this39._updateViewportSize();
            });
          });
        }

        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._invalidateCache.unsubscribe();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._getDocument();

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ViewportRuler,
        providedIn: "root"
      });

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      return ViewportRuler;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Checks if the given ranges are equal. */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

    var CdkVirtualScrollViewport =
    /** @class */
    function () {
      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super13 = _createSuper(CdkVirtualScrollViewport);

        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
        /**
         * @deprecated `viewportRuler` parameter to become required.
         * @breaking-change 11.0.0
         */
        viewportRuler) {
          var _this40;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this40 = _super13.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this40.elementRef = elementRef;
          _this40._changeDetectorRef = _changeDetectorRef;
          _this40._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this40._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits when the rendered range changes. */

          _this40._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this40._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this40.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this40._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this40.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this40.renderedRangeStream = _this40._renderedRangeSubject.asObservable();
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this40._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this40._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this40._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this40._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this40._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this40._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this40._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this40._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this40._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this40._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this40._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

          if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


          if (viewportRuler) {
            _this40._viewportChanges = viewportRuler.change().subscribe(function () {
              _this40.checkViewportSize();
            });
          }

          return _this40;
        }
        /** The direction the viewport scrolls. */


        _createClass(CdkVirtualScrollViewport, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this41._measureViewportSize();

                _this41._scrollStrategy.attach(_this41);

                _this41.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this41._scrollStrategy.onContentScrolled();
                });

                _this41._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualForOf` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this42 = this;

            if (this._forOf) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this42._forOf = forOf;

              _this42._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this42._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this42._dataLength) {
                  _this42._dataLength = newLength;

                  _this42._scrollStrategy.onDataLengthChanged();
                }

                _this42._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this43 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this43._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this44 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this44._renderedContentOffsetNeedsRewrite) {
                  _this44._renderedContentOffset -= _this44.measureRenderedContentSize();
                  _this44._renderedContentOffsetNeedsRewrite = false;

                  _this44.setRenderedContentOffset(_this44._renderedContentOffset);
                } else {
                  _this44._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this45 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this45._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this46 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this46._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator4 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var fn = _step4.value;
                fn();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
      };

      CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: CdkScrollable,
              useExisting: CdkVirtualScrollViewport
            }],
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: ScrollDispatcher
          }, {
            type: ViewportRuler,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();

      return CdkVirtualScrollViewport;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Helper to extract size from a DOM Node. */


    function getSize(orientation, node) {
      var el = node;

      if (!el.getBoundingClientRect) {
        return 0;
      }

      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     */


    var CdkVirtualForOf =
    /** @class */
    function () {
      var CdkVirtualForOf = /*#__PURE__*/function () {
        function CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this47 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

          this.cdkVirtualForTemplateCacheSize = 20;
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                prev = _ref2[0],
                cur = _ref2[1];

            return _this47._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /**
           * The template cache used to hold on ot template instancess that have been stamped out, but don't
           * currently need to be rendered. These instances will be reused in the future rather than
           * stamping out brand new ones.
           */

          this._templateCache = [];
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(function (data) {
            _this47._data = data;

            _this47._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this47._renderedRange = range;
            ngZone.run(function () {
              return _this47.viewChange.next(_this47._renderedRange);
            });

            _this47._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(CdkVirtualForOf, [{
          key: "measureRangeSize",

          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

            var totalSize = 0;
            var i = rangeLen;

            while (i--) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              var j = view ? view.rootNodes.length : 0;

              while (j--) {
                totalSize += getSize(orientation, view.rootNodes[j]);
              }
            }

            return totalSize;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next();

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            var _iterator5 = _createForOfIteratorHelper(this._templateCache),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var view = _step5.value;
                view.destroy();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this48 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              if (record.previousIndex == null) {
                // Item added.
                var view = _this48._insertViewForNewItem(currentIndex);

                view.context.$implicit = record.item;
              } else if (currentIndex == null) {
                // Item removed.
                _this48._cacheView(_this48._detachView(adjustedPreviousIndex));
              } else {
                // Item moved.
                var _view = _this48._viewContainerRef.get(adjustedPreviousIndex);

                _this48._viewContainerRef.move(_view, currentIndex);

                _view.context.$implicit = record.item;
              }
            }); // Update $implicit for any items that had an identity change.

            changes.forEachIdentityChange(function (record) {
              var view = _this48._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Cache the given detached view. */

        }, {
          key: "_cacheView",
          value: function _cacheView(view) {
            if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
              this._templateCache.push(view);
            } else {
              var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.


              if (index === -1) {
                view.destroy();
              } else {
                this._viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a view for a new item, either from the cache or by creating a new one. */

        }, {
          key: "_insertViewForNewItem",
          value: function _insertViewForNewItem(index) {
            return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
          /** Creates a new embedded view and moves it to the given index */

        }, {
          key: "_createEmbeddedViewAt",
          value: function _createEmbeddedViewAt(index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return this._viewContainerRef.createEmbeddedView(this._template, {
              $implicit: null,
              // It's guaranteed that the iterable is not "undefined" or "null" because we only
              // generate views for elements if the "cdkVirtualForOf" iterable has elements.
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: false,
              last: false,
              odd: false,
              even: false
            }, index);
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index) {
            var cachedView = this._templateCache.pop();

            if (cachedView) {
              this._viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
          /** Detaches the embedded view at the given index. */

        }, {
          key: "_detachView",
          value: function _detachView(index) {
            return this._viewContainerRef.detach(index);
          }
        }, {
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // Slice the value if its an NgIterable to ensure we're working with an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this49 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this49._renderedRange ? _this49._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate"
        }
      });

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
          }, {
            type: CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      return CdkVirtualForOf;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var CdkScrollableModule =
    /** @class */
    function () {
      var CdkScrollableModule = function CdkScrollableModule() {
        _classCallCheck(this, CdkScrollableModule);
      };

      CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CdkScrollableModule
      });
      CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CdkScrollableModule_Factory(t) {
          return new (t || CdkScrollableModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
          declarations: [CdkScrollable],
          exports: [CdkScrollable]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkScrollable],
            declarations: [CdkScrollable]
          }]
        }], null, null);
      })();

      return CdkScrollableModule;
    }();

    var ScrollingModule =
    /** @class */
    function () {
      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: function declarations() {
            return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
            declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();

      return ScrollingModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
    \********************************************************************/

  /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

  /***/
  function node_modulesAngularForms__ivy_ngcc__Fesm2015FormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
      return AbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
      return AbstractControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
      return AbstractFormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
      return COMPOSITION_BUFFER_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
      return CheckboxControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
      return CheckboxRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
      return ControlContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArray", function () {
      return FormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
      return FormArrayName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
      return FormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControl", function () {
      return FormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
      return FormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
      return FormControlName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
      return FormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
      return FormGroupName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
      return MaxLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
      return MinLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
      return NG_ASYNC_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
      return NG_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
      return NG_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControl", function () {
      return NgControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
      return NgControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
      return NgControlStatusGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForm", function () {
      return NgForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModel", function () {
      return NgModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
      return NgModelGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
      return NgSelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
      return NumberValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
      return PatternValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
      return RadioControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
      return RangeValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
      return ReactiveFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
      return RequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
      return SelectControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
      return SelectMultipleControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
      return SHARED_FORM_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
      return TEMPLATE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
      return CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
      return EMAIL_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
      return MIN_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
      return MAX_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
      return PATTERN_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
      return REACTIVE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
      return DEFAULT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
      return AbstractControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
      return ngControlStatusHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
      return formDirectiveProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
      return formControlBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
      return modelGroupProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
      return NUMBER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
      return RADIO_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
      return RadioControlRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
      return RANGE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
      return NG_MODEL_WITH_FORM_CONTROL_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
      return formControlBinding$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
      return controlNameBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
      return formDirectiveProvider$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
      return formGroupNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
      return formArrayNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
      return SELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
      return SELECT_MULTIPLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
      return REQUIRED_VALIDATOR;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license Angular v10.0.1
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     * @publicApi
     */


    var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return CheckboxControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
     * element.
     *
     * @usageNotes
     *
     * ### Using a checkbox with a reactive form.
     *
     * The following example shows how to use a checkbox with a reactive form.
     *
     * ```ts
     * const rememberLoginControl = new FormControl();
     * ```
     *
     * ```
     * <input type="checkbox" [formControl]="rememberLoginControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var CheckboxControlValueAccessor = /*#__PURE__*/function () {
      function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "checked" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(CheckboxControlValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
      return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
    });

    CheckboxControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
          host: {
            '(change)': 'onChange($event.target.checked)',
            '(blur)': 'onTouched()'
          },
          providers: [CHECKBOX_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return DefaultValueAccessor;
      }),
      multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     */

    function _isAndroid() {
      var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
      return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * @description
     * Provide this token to control if form directives buffer IME input until
     * the "compositionend" event occurs.
     * @publicApi
     */


    var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
    /**
     * @description
     * The default `ControlValueAccessor` for writing a value and listening to changes on input
     * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using the default value accessor
     *
     * The following example shows how to use an input element that activates the default value accessor
     * (in this case, a text field).
     *
     * ```ts
     * const firstNameControl = new FormControl();
     * ```
     *
     * ```
     * <input type="text" [formControl]="firstNameControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var DefaultValueAccessor = /*#__PURE__*/function () {
      function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * @description
         * The registered callback function called when an input event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
        /** Whether the user is creating a composition string (IME events). */


        this._composing = false;

        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_handleInput",
        value: function _handleInput(value) {
          if (!this._compositionMode || this._compositionMode && !this._composing) {
            this.onChange(value);
          }
        }
        /** @internal */

      }, {
        key: "_compositionStart",
        value: function _compositionStart() {
          this._composing = true;
        }
        /** @internal */

      }, {
        key: "_compositionEnd",
        value: function _compositionEnd(value) {
          this._composing = false;
          this._compositionMode && this.onChange(value);
        }
      }]);

      return DefaultValueAccessor;
    }();

    DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
      return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
    };

    DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
    });

    DefaultValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
          // TODO: vsavkin replace the above selector with the one below it once
          // https://github.com/angular/angular/issues/3011 is implemented
          // selector: '[ngModel],[formControl],[formControlName]',
          host: {
            '(input)': '$any(this)._handleInput($event.target.value)',
            '(blur)': 'onTouched()',
            '(compositionstart)': '$any(this)._compositionStart()',
            '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
          },
          providers: [DEFAULT_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [COMPOSITION_BUFFER_MODE]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     * @publicApi
     */


    var AbstractControlDirective = /*#__PURE__*/function () {
      function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
      }

      _createClass(AbstractControlDirective, [{
        key: "reset",

        /**
         * @description
         * Resets the control with the provided value if the control is present.
         */
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.control) this.control.reset(value);
        }
        /**
         * @description
         * Reports whether the control with the given path has the error specified.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @returns whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * @description
         * Reports error data for the control with the given path.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @returns error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          return this.control ? this.control.getError(errorCode, path) : null;
        }
      }, {
        key: "value",

        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */
        get: function get() {
          return this.control ? this.control.value : null;
        }
        /**
         * @description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
        /**
         * @description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
        /**
         * @description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
        /**
         * @description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
        /**
         * @description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
        /**
         * @description
         * Reports the control's validation errors. If the control is not present, null is returned.
         */

      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
        /**
         * @description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         */

      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
        /**
         * @description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         */

      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
        /**
         * @description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */

      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
        /**
         * @description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         */

      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
        /**
         * @description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */

      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
        /**
         * @description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         */

      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
        /**
         * @description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         */

      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return AbstractControlDirective;
    }();

    AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
      return new (t || AbstractControlDirective)();
    };

    AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractControlDirective
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     *
     * @publicApi
     */

    var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
      _inherits(ControlContainer, _AbstractControlDirec);

      var _super14 = _createSuper(ControlContainer);

      function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _super14.apply(this, arguments);
      }

      _createClass(ControlContainer, [{
        key: "formDirective",

        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function get() {
          return null;
        }
        /**
         * @description
         * The path to this group.
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return ControlContainer;
    }(AbstractControlDirective);

    ControlContainer.ɵfac = function ControlContainer_Factory(t) {
      return ɵControlContainer_BaseFactory(t || ControlContainer);
    };

    ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ControlContainer,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵControlContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlContainer);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function unimplemented() {
      throw new Error('unimplemented');
    }
    /**
     * @description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     *
     * @publicApi
     */


    var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
      _inherits(NgControl, _AbstractControlDirec2);

      var _super15 = _createSuper(NgControl);

      function NgControl() {
        var _this50;

        _classCallCheck(this, NgControl);

        _this50 = _super15.apply(this, arguments);
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */

        _this50._parent = null;
        /**
         * @description
         * The name for the control
         */

        _this50.name = null;
        /**
         * @description
         * The value accessor for the control
         */

        _this50.valueAccessor = null;
        /**
         * @description
         * The uncomposed array of synchronous validators for the control
         *
         * @internal
         */

        _this50._rawValidators = [];
        /**
         * @description
         * The uncomposed array of async validators for the control
         *
         * @internal
         */

        _this50._rawAsyncValidators = [];
        return _this50;
      }
      /**
       * @description
       * The registered synchronous validator function for the control
       *
       * @throws An exception that this method is not implemented
       */


      _createClass(NgControl, [{
        key: "validator",
        get: function get() {
          return unimplemented();
        }
        /**
         * @description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return unimplemented();
        }
      }]);

      return NgControl;
    }(AbstractControlDirective);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var AbstractControlStatus = /*#__PURE__*/function () {
      function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
      }

      _createClass(AbstractControlStatus, [{
        key: "ngClassUntouched",
        get: function get() {
          return this._cd.control ? this._cd.control.untouched : false;
        }
      }, {
        key: "ngClassTouched",
        get: function get() {
          return this._cd.control ? this._cd.control.touched : false;
        }
      }, {
        key: "ngClassPristine",
        get: function get() {
          return this._cd.control ? this._cd.control.pristine : false;
        }
      }, {
        key: "ngClassDirty",
        get: function get() {
          return this._cd.control ? this._cd.control.dirty : false;
        }
      }, {
        key: "ngClassValid",
        get: function get() {
          return this._cd.control ? this._cd.control.valid : false;
        }
      }, {
        key: "ngClassInvalid",
        get: function get() {
          return this._cd.control ? this._cd.control.invalid : false;
        }
      }, {
        key: "ngClassPending",
        get: function get() {
          return this._cd.control ? this._cd.control.pending : false;
        }
      }]);

      return AbstractControlStatus;
    }();

    var ngControlStatusHost = {
      '[class.ng-untouched]': 'ngClassUntouched',
      '[class.ng-touched]': 'ngClassTouched',
      '[class.ng-pristine]': 'ngClassPristine',
      '[class.ng-dirty]': 'ngClassDirty',
      '[class.ng-valid]': 'ngClassValid',
      '[class.ng-invalid]': 'ngClassInvalid',
      '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * @description
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status.
     *
     * @usageNotes
     *
     * ### CSS classes applied
     *
     * The following classes are applied as the properties become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
      _inherits(NgControlStatus, _AbstractControlStatu);

      var _super16 = _createSuper(NgControlStatus);

      function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _super16.call(this, cd);
      }

      return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
      return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgControl, 2));
    };

    NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    NgControlStatus.ctorParameters = function () {
      return [{
        type: NgControl,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControlName],[ngModel],[formControl]',
          host: ngControlStatusHost
        }]
      }], function () {
        return [{
          type: NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();
    /**
     * @description
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @see `NgControlStatus`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
      _inherits(NgControlStatusGroup, _AbstractControlStatu2);

      var _super17 = _createSuper(NgControlStatusGroup);

      function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _super17.call(this, cd);
      }

      return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
      return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 2));
    };

    NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    NgControlStatusGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatusGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
          host: ngControlStatusHost
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function isEmptyInputValue(value) {
      // we don't check for string here so it also works with arrays
      return value == null || value.length === 0;
    }

    function hasValidLength(value) {
      // non-strict comparison is intentional, to check for both `null` and `undefined` values
      return value != null && typeof value.length === 'number';
    }
    /**
     * @description
     * An `InjectionToken` for registering additional synchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * @usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * @Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     * @publicApi
     */


    var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
    /**
     * @description
     * An `InjectionToken` for registering additional asynchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     * @publicApi
     */

    var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
    /**
     * A regular expression that matches valid e-mail addresses.
     *
     * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
     * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
     *   punctuation symbols).
     * - `local-part` cannot begin or end with a period (`.`).
     * - `local-part` cannot be longer than 64 characters.
     * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
     *   `foo.com`.
     * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
     *   periods (`.`)).
     * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
     * - A `label` cannot be longer than 63 characters.
     * - The whole address cannot be longer than 254 characters.
     *
     * ## Implementation background
     *
     * This regexp was ported over from AngularJS (see there for git history):
     * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
     * It is based on the
     * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address). The main differences from the WHATWG version are:
     *   - Disallow `local-part` to begin or end with a period (`.`).
     *   - Disallow `local-part` length to exceed 64 characters.
     *   - Disallow total address length to exceed 254 characters.
     *
     * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
     */

    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /**
     * @description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     * @publicApi
     */

    var Validators = /*#__PURE__*/function () {
      function Validators() {
        _classCallCheck(this, Validators);
      }

      _createClass(Validators, null, [{
        key: "min",

        /**
         * @description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */
        value: function min(_min) {
          return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

            return !isNaN(value) && value < _min ? {
              'min': {
                'min': _min,
                'actual': control.value
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "max",
        value: function max(_max) {
          return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

            return !isNaN(value) && value > _max ? {
              'max': {
                'max': _max,
                'actual': control.value
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control have a non-empty value.
         *
         * @usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "required",
        value: function required(control) {
          return isEmptyInputValue(control.value) ? {
            'required': true
          } : null;
        }
        /**
         * @description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * @usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "requiredTrue",
        value: function requiredTrue(control) {
          return control.value === true ? null : {
            'required': true
          };
        }
        /**
         * @description
         * Validator that requires the control's value pass an email validation test.
         *
         * Tests the value using a [regular
         * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
         * pattern suitable for common usecases. The pattern is based on the definition of a valid email
         * address in the [WHATWG HTML
         * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
         * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
         * lengths of different parts of the address).
         *
         * The differences from the WHATWG version include:
         * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
         * - Disallow `local-part` to be longer than 64 characters.
         * - Disallow the whole address to be longer than 254 characters.
         *
         * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
         * validate the value against a different pattern.
         *
         * @usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @returns An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "email",
        value: function email(control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          return EMAIL_REGEXP.test(control.value) ? null : {
            'email': true
          };
        }
        /**
         * @description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays. The
         * `minLength` validator logic is also not invoked for values when their `length` property is 0
         * (for example in case of an empty string or an empty array), to support optional controls. You
         * can use the standard `required` validator if empty values should not be considered valid.
         *
         * @usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "minLength",
        value: function minLength(_minLength) {
          return function (control) {
            if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
              // don't validate empty values to allow optional controls
              // don't validate values without `length` property
              return null;
            }

            return control.value.length < _minLength ? {
              'minlength': {
                'requiredLength': _minLength,
                'actualLength': control.value.length
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays.
         *
         * @usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "maxLength",
        value: function maxLength(_maxLength) {
          return function (control) {
            return hasValidLength(control.value) && control.value.length > _maxLength ? {
              'maxlength': {
                'requiredLength': _maxLength,
                'actualLength': control.value.length
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided by default if you use the HTML5 `pattern` attribute.
         *
         * @usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @param pattern A regular expression to be used as is to test the values, or a string.
         * If a string is passed, the `^` character is prepended and the `$` character is
         * appended to the provided string (if not already present), and the resulting regular
         * expression is used to test the values.
         *
         * @returns A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "pattern",
        value: function pattern(_pattern) {
          if (!_pattern) return Validators.nullValidator;
          var regex;
          var regexStr;

          if (typeof _pattern === 'string') {
            regexStr = '';
            if (_pattern.charAt(0) !== '^') regexStr += '^';
            regexStr += _pattern;
            if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
            regex = new RegExp(regexStr);
          } else {
            regexStr = _pattern.toString();
            regex = _pattern;
          }

          return function (control) {
            if (isEmptyInputValue(control.value)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = control.value;
            return regex.test(value) ? null : {
              'pattern': {
                'requiredPattern': regexStr,
                'actualValue': value
              }
            };
          };
        }
        /**
         * @description
         * Validator that performs no operation.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "nullValidator",
        value: function nullValidator(control) {
          return null;
        }
      }, {
        key: "compose",
        value: function compose(validators) {
          if (!validators) return null;
          var presentValidators = validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
          };
        }
        /**
         * @description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @returns A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "composeAsync",
        value: function composeAsync(validators) {
          if (!validators) return null;
          var presentValidators = validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
          };
        }
      }]);

      return Validators;
    }();

    function isPresent(o) {
      return o != null;
    }

    function toObservable(r) {
      var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) {
        throw new Error("Expected validator to return Promise or Observable.");
      }

      return obs;
    }

    function _executeValidators(control, validators) {
      return validators.map(function (v) {
        return v(control);
      });
    }

    function _executeAsyncValidators(control, validators) {
      return validators.map(function (v) {
        return v(control);
      });
    }

    function _mergeErrors(arrayOfErrors) {
      var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      arrayOfErrors.forEach(function (errors) {
        res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
      });
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function normalizeValidator(validator) {
      if (!!validator.validate) {
        return function (c) {
          return validator.validate(c);
        };
      } else {
        return validator;
      }
    }

    function normalizeAsyncValidator(validator) {
      if (!!validator.validate) {
        return function (c) {
          return validator.validate(c);
        };
      } else {
        return validator;
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NumberValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing a number value and listening to number input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * @usageNotes
     *
     * ### Using a number input with a reactive form.
     *
     * The following example shows how to use a number input with a reactive form.
     *
     * ```ts
     * const totalCountControl = new FormControl();
     * ```
     *
     * ```
     * <input type="number" [formControl]="totalCountControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var NumberValueAccessor = /*#__PURE__*/function () {
      function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(NumberValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return NumberValueAccessor;
    }();

    NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
      return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
    });

    NumberValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
          host: {
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [NUMBER_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RadioControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * Class used by Angular to track radio buttons. For internal use only.
     */

    var RadioControlRegistry = /*#__PURE__*/function () {
      function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
      }
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */


      _createClass(RadioControlRegistry, [{
        key: "add",
        value: function add(control, accessor) {
          this._accessors.push([control, accessor]);
        }
        /**
         * @description
         * Removes a control from the internal registry. For internal use only.
         */

      }, {
        key: "remove",
        value: function remove(accessor) {
          for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
              this._accessors.splice(i, 1);

              return;
            }
          }
        }
        /**
         * @description
         * Selects a radio button. For internal use only.
         */

      }, {
        key: "select",
        value: function select(accessor) {
          var _this51 = this;

          this._accessors.forEach(function (c) {
            if (_this51._isSameGroup(c, accessor) && c[1] !== accessor) {
              c[1].fireUncheck(accessor.value);
            }
          });
        }
      }, {
        key: "_isSameGroup",
        value: function _isSameGroup(controlPair, accessor) {
          if (!controlPair[0].control) return false;
          return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
      }]);

      return RadioControlRegistry;
    }();

    RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
      return new (t || RadioControlRegistry)();
    };

    RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RadioControlRegistry,
      factory: RadioControlRegistry.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @description
     * The `ControlValueAccessor` for writing radio control values and listening to radio control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using radio buttons with reactive form directives
     *
     * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
     * a reactive form, radio buttons in the same group should have the same `formControlName`.
     * Providing a `name` attribute is optional.
     *
     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var RadioControlValueAccessor = /*#__PURE__*/function () {
      function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function () {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * @description
       * A lifecycle method called when the directive is initialized. For internal use only.
       */


      _createClass(RadioControlValueAccessor, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._control = this._injector.get(NgControl);

          this._checkName();

          this._registry.add(this._control, this);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._registry.remove(this);
        }
        /**
         * @description
         * Sets the "checked" property value on the radio input element.
         *
         * @param value The checked value
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._state = value === this.value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this52 = this;

          this._fn = fn;

          this.onChange = function () {
            fn(_this52.value);

            _this52._registry.select(_this52);
          };
        }
        /**
         * Sets the "value" on the radio input element and unchecks it.
         *
         * @param value
         */

      }, {
        key: "fireUncheck",
        value: function fireUncheck(value) {
          this.writeValue(value);
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
          }

          if (!this.name && this.formControlName) this.name = this.formControlName;
        }
      }, {
        key: "_throwNameError",
        value: function _throwNameError() {
          throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        }
      }]);

      return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
      return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
    });

    RadioControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: RadioControlRegistry
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    RadioControlValueAccessor.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
          host: {
            '(change)': 'onChange()',
            '(blur)': 'onTouched()'
          },
          providers: [RADIO_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RangeValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing a range value and listening to range input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * @usageNotes
     *
     * ### Using a range input with a reactive form
     *
     * The following example shows how to use a range input with a reactive form.
     *
     * ```ts
     * const ageControl = new FormControl();
     * ```
     *
     * ```
     * <input type="range" [formControl]="ageControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var RangeValueAccessor = /*#__PURE__*/function () {
      function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(RangeValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the range input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return RangeValueAccessor;
    }();

    RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
      return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
    });

    RangeValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
          host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [RANGE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var FormErrorExamples = {
      formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
      formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
      formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
      ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
      ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var ReactiveErrors = /*#__PURE__*/function () {
      function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
      }

      _createClass(ReactiveErrors, null, [{
        key: "controlParentException",
        value: function controlParentException() {
          throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
        }
      }, {
        key: "ngModelGroupException",
        value: function ngModelGroupException() {
          throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
        }
      }, {
        key: "missingFormException",
        value: function missingFormException() {
          throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
        }
      }, {
        key: "groupParentException",
        value: function groupParentException() {
          throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
        }
      }, {
        key: "arrayParentException",
        value: function arrayParentException() {
          throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
        }
      }, {
        key: "disabledAttrWarning",
        value: function disabledAttrWarning() {
          console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        }
      }, {
        key: "ngModelWarning",
        value: function ngModelWarning(directiveName) {
          console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
        }
      }]);

      return ReactiveErrors;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return SelectControlValueAccessor;
      }),
      multi: true
    };

    function _buildValueString(id, value) {
      if (id == null) return "".concat(value);
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }

    function _extractId(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * @description
     * The `ControlValueAccessor` for writing select control values and listening to select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using select controls in a reactive form
     *
     * The following examples show how to use a select control in a reactive form.
     *
     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Using select controls in a template-driven form
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * ### Customizing option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ```ts
     * const selectedCountriesControl = new FormControl();
     * ```
     *
     * ```
     * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * **Note:** We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var SelectControlValueAccessor = /*#__PURE__*/function () {
      function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */

        this._optionMap = new Map();
        /** @internal */

        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};

        this._compareWith = Object.is;
      }
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */


      _createClass(SelectControlValueAccessor, [{
        key: "writeValue",

        /**
         * Sets the "value" property on the input element. The "selectedIndex"
         * property is also set if an ID is provided on the option element.
         *
         * @param value The checked value
         */
        value: function writeValue(value) {
          this.value = value;

          var id = this._getOptionId(value);

          if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          }

          var valueString = _buildValueString(id, value);

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this53 = this;

          this.onChange = function (valueString) {
            _this53.value = _this53._getOptionValue(valueString);
            fn(_this53.value);
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_registerOption",
        value: function _registerOption() {
          return (this._idCounter++).toString();
        }
        /** @internal */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i2 = 0, _Array$from = Array.from(this._optionMap.keys()); _i2 < _Array$from.length; _i2++) {
            var id = _Array$from[_i2];
            if (this._compareWith(this._optionMap.get(id), value)) return id;
          }

          return null;
        }
        /** @internal */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          var id = _extractId(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
      return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
    });

    SelectControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
          host: {
            '(change)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [SELECT_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectControlValueAccessor`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var NgSelectOption = /*#__PURE__*/function () {
      function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */


      _createClass(NgSelectOption, [{
        key: "_setElementValue",

        /** @internal */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;

          this._select._optionMap.set(this.id, value);

          this._setElementValue(_buildValueString(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */

      }, {
        key: "value",
        set: function set(value) {
          this._setElementValue(value);

          if (this._select) this._select.writeValue(this._select.value);
        }
      }]);

      return NgSelectOption;
    }();

    NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
      return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
    };

    NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });

    NgSelectOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgSelectOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'option'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      }, {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return SelectMultipleControlValueAccessor;
      }),
      multi: true
    };

    function _buildValueString$1(id, value) {
      if (id == null) return "".concat(value);
      if (typeof value === 'string') value = "'".concat(value, "'");
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }

    function _extractId$1(valueString) {
      return valueString.split(':')[0];
    }
    /** Mock interface for HTMLCollection */


    var HTMLCollection = function HTMLCollection() {
      _classCallCheck(this, HTMLCollection);
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
     * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @see `SelectControlValueAccessor`
     *
     * @usageNotes
     *
     * ### Using a multi-select control
     *
     * The follow example shows you how to use a multi-select control with a reactive form.
     *
     * ```ts
     * const countryControl = new FormControl();
     * ```
     *
     * ```
     * <select multiple name="countries" [formControl]="countryControl">
     *   <option *ngFor="let country of countries" [ngValue]="country">
     *     {{ country.name }}
     *   </option>
     * </select>
     * ```
     *
     * ### Customizing option selection
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * See the `SelectControlValueAccessor` for usage.
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
      function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */

        this._optionMap = new Map();
        /** @internal */

        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};

        this._compareWith = Object.is;
      }
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */


      _createClass(SelectMultipleControlValueAccessor, [{
        key: "writeValue",

        /**
         * @description
         * Sets the "value" property on one or of more
         * of the select's options.
         *
         * @param value The value
         */
        value: function writeValue(value) {
          var _this54 = this;

          this.value = value;
          var optionSelectedStateSetter;

          if (Array.isArray(value)) {
            // convert values to ids
            var ids = value.map(function (v) {
              return _this54._getOptionId(v);
            });

            optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
              opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
          } else {
            optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
              opt._setSelected(false);
            };
          }

          this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * @description
         * Registers a function called when the control value changes
         * and writes an array of the selected options.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this55 = this;

          this.onChange = function (_) {
            var selected = [];

            if (_.selectedOptions !== undefined) {
              var options = _.selectedOptions;

              for (var i = 0; i < options.length; i++) {
                var opt = options.item(i);

                var val = _this55._getOptionValue(opt.value);

                selected.push(val);
              }
            } // Degrade on IE
            else {
                var _options = _.options;

                for (var _i3 = 0; _i3 < _options.length; _i3++) {
                  var _opt = _options.item(_i3);

                  if (_opt.selected) {
                    var _val = _this55._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

            _this55.value = selected;
            fn(selected);
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_registerOption",
        value: function _registerOption(value) {
          var id = (this._idCounter++).toString();

          this._optionMap.set(id, value);

          return id;
        }
        /** @internal */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i4 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i4 < _Array$from2.length; _i4++) {
            var id = _Array$from2[_i4];
            if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
          }

          return null;
        }
        /** @internal */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          var id = _extractId$1(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
      return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
    });

    SelectMultipleControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectMultipleControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
          host: {
            '(change)': 'onChange($event.target)',
            '(blur)': 'onTouched()'
          },
          providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectMultipleControlValueAccessor`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
      function ɵNgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, ɵNgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;

        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */


      _createClass(ɵNgSelectMultipleOption, [{
        key: "_setElementValue",

        /** @internal */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /** @internal */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;
          this._value = value;

          this._setElementValue(_buildValueString$1(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */

      }, {
        key: "value",
        set: function set(value) {
          if (this._select) {
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          } else {
            this._setElementValue(value);
          }
        }
      }]);

      return ɵNgSelectMultipleOption;
    }();

    ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
      return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
    };

    ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ɵNgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });

    ɵNgSelectMultipleOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    ɵNgSelectMultipleOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'option'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      }, {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function controlPath(name, parent) {
      return [].concat(_toConsumableArray(parent.path), [name]);
    }

    function setUpControl(control, dir) {
      if (!control) _throwError(dir, 'Cannot find control with');
      if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
      dir.valueAccessor.writeValue(control.value);
      setUpViewChangePipeline(control, dir);
      setUpModelChangePipeline(control, dir);
      setUpBlurPipeline(control, dir);

      if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) {
          dir.valueAccessor.setDisabledState(isDisabled);
        });
      } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


      dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
          return control.updateValueAndValidity();
        });
      });

      dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
          return control.updateValueAndValidity();
        });
      });
    }

    function cleanUpControl(control, dir) {
      dir.valueAccessor.registerOnChange(function () {
        return _noControlError(dir);
      });
      dir.valueAccessor.registerOnTouched(function () {
        return _noControlError(dir);
      });

      dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      if (control) control._clearChangeFns();
    }

    function setUpViewChangePipeline(control, dir) {
      dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change') updateControl(control, dir);
      });
    }

    function setUpBlurPipeline(control, dir) {
      dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
        if (control.updateOn !== 'submit') control.markAsTouched();
      });
    }

    function updateControl(control, dir) {
      if (control._pendingDirty) control.markAsDirty();
      control.setValue(control._pendingValue, {
        emitModelToViewChange: false
      });
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }

    function setUpModelChangePipeline(control, dir) {
      control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue); // control -> ngModel

        if (emitModelEvent) dir.viewToModelUpdate(newValue);
      });
    }

    function setUpFormContainer(control, dir) {
      if (control == null) _throwError(dir, 'Cannot find control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }

    function _noControlError(dir) {
      return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }

    function _throwError(dir, message) {
      var messageEnd;

      if (dir.path.length > 1) {
        messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
      } else if (dir.path[0]) {
        messageEnd = "name: '".concat(dir.path, "'");
      } else {
        messageEnd = 'unspecified name attribute';
      }

      throw new Error("".concat(message, " ").concat(messageEnd));
    }

    function composeValidators(validators) {
      return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }

    function composeAsyncValidators(validators) {
      return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }

    function isPropertyUpdated(changes, viewModel) {
      if (!changes.hasOwnProperty('model')) return false;
      var change = changes['model'];
      if (change.isFirstChange()) return true;
      return !Object.is(viewModel, change.currentValue);
    }

    var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

    function isBuiltInAccessor(valueAccessor) {
      return BUILTIN_ACCESSORS.some(function (a) {
        return valueAccessor.constructor === a;
      });
    }

    function syncPendingControls(form, directives) {
      form._syncPendingControls();

      directives.forEach(function (dir) {
        var control = dir.control;

        if (control.updateOn === 'submit' && control._pendingChange) {
          dir.viewToModelUpdate(control._pendingValue);
          control._pendingChange = false;
        }
      });
    } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


    function selectValueAccessor(dir, valueAccessors) {
      if (!valueAccessors) return null;
      if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
      var defaultAccessor = undefined;
      var builtinAccessor = undefined;
      var customAccessor = undefined;
      valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
          defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
          if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
          builtinAccessor = v;
        } else {
          if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
          customAccessor = v;
        }
      });
      if (customAccessor) return customAccessor;
      if (builtinAccessor) return builtinAccessor;
      if (defaultAccessor) return defaultAccessor;

      _throwError(dir, 'No valid value accessor for form control with');

      return null;
    }

    function removeDir(list, el) {
      var index = list.indexOf(el);
      if (index > -1) list.splice(index, 1);
    } // TODO(kara): remove after deprecation period


    function _ngModelWarning(name, type, instance, warningConfig) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

      if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     */


    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     */

    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     */

    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     */

    var DISABLED = 'DISABLED';

    function _find(control, path, delimiter) {
      if (path == null) return null;

      if (!Array.isArray(path)) {
        path = path.split(delimiter);
      }

      if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var controlToFind = control;
      path.forEach(function (name) {
        if (controlToFind instanceof FormGroup) {
          controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
        } else if (controlToFind instanceof FormArray) {
          controlToFind = controlToFind.at(name) || null;
        } else {
          controlToFind = null;
        }
      });
      return controlToFind;
    }

    function coerceToValidator(validatorOrOpts) {
      var validator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts;
      return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }

    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
      var origAsyncValidator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator;
      return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
    }

    function isOptionsObj(validatorOrOpts) {
      return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     * @publicApi
     */


    var AbstractControl = /*#__PURE__*/function () {
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validator The function that determines the synchronous validity of this control.
       * @param asyncValidator The function that determines the asynchronous validity of this
       * control.
       */
      function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */

        this._onCollectionChange = function () {};
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */


        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */

        this.touched = false;
        /** @internal */

        this._onDisabledChange = [];
      }
      /**
       * The parent control.
       */


      _createClass(AbstractControl, [{
        key: "setValidators",

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */
        value: function setValidators(newValidator) {
          this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(newValidator) {
          this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
        /**
         * Empties out the async validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value.
         *
         * @see `markAsUntouched()`
         * @see `markAsDirty()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = true;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
          }
        }
        /**
         * Marks the control and all its descendant controls as `touched`.
         * @see `markAsTouched()`
         */

      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: true
          });

          this._forEachChild(function (control) {
            return control.markAllAsTouched();
          });
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         * @see `markAsTouched()`
         * @see `markAsDirty()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = false;
          this._pendingTouched = false;

          this._forEachChild(function (control) {
            control.markAsUntouched({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's value is changed through the UI; compare `markAsTouched`.
         *
         * @see `markAsTouched()`
         * @see `markAsUntouched()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = false;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
          }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         * @see `markAsTouched()`
         * @see `markAsUntouched()`
         * @see `markAsDirty()`
         *
         * @param opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = true;
          this._pendingDirty = false;

          this._forEachChild(function (control) {
            control.markAsPristine({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         */

      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.status = PENDING;

          if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
          }
        }
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         */

      }, {
        key: "disable",
        value: function disable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          this.status = DISABLED;
          this.errors = null;

          this._forEachChild(function (control) {
            control.disable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this._updateValue();

          if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(function (changeFn) {
            return changeFn(true);
          });
        }
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         */

      }, {
        key: "enable",
        value: function enable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          this.status = VALID;

          this._forEachChild(function (control) {
            control.enable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(function (changeFn) {
            return changeFn(false);
          });
        }
      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(opts) {
          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);

            if (!opts.skipPristineCheck) {
              this._parent._updatePristine();
            }

            this._parent._updateTouched();
          }
        }
        /**
         * @param parent Sets the parent of the control
         */

      }, {
        key: "setParent",
        value: function setParent(parent) {
          this._parent = parent;
        }
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._setInitialStatus();

          this._updateValue();

          if (this.enabled) {
            this._cancelExistingSubscription();

            this.errors = this._runValidator();
            this.status = this._calculateStatus();

            if (this.status === VALID || this.status === PENDING) {
              this._runAsyncValidator(opts.emitEvent);
            }
          }

          if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
          }
        }
        /** @internal */

      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: true
          };

          this._forEachChild(function (ctrl) {
            return ctrl._updateTreeValidity(opts);
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        }
      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          this.status = this._allControlsDisabled() ? DISABLED : VALID;
        }
      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(emitEvent) {
          var _this56 = this;

          if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe(function (errors) {
              return _this56.setErrors(errors, {
                emitEvent: emitEvent
              });
            });
          }
        }
      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * @usageNotes
         *
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         */

      }, {
        key: "setErrors",
        value: function setErrors(errors) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.errors = errors;

          this._updateControlsErrors(opts.emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * @param path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         */

      }, {
        key: "get",
        value: function get(path) {
          return _find(this, path, '.');
        }
        /**
         * @description
         * Reports error data for the control with the given path.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @returns error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          var control = path ? this.get(path) : this;
          return control && control.errors ? control.errors[errorCode] : null;
        }
        /**
         * @description
         * Reports whether the control with the given path has the error specified.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @returns whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         */

      }, {
        key: "_updateControlsErrors",

        /** @internal */
        value: function _updateControlsErrors(emitEvent) {
          this.status = this._calculateStatus();

          if (emitEvent) {
            this.statusChanges.emit(this.status);
          }

          if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
          }
        }
        /** @internal */

      }, {
        key: "_initObservables",
        value: function _initObservables() {
          this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          if (this._allControlsDisabled()) return DISABLED;
          if (this.errors) return INVALID;
          if (this._anyControlsHaveStatus(PENDING)) return PENDING;
          if (this._anyControlsHaveStatus(INVALID)) return INVALID;
          return VALID;
        }
        /** @internal */

      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(status) {
          return this._anyControls(function (control) {
            return control.status === status;
          });
        }
        /** @internal */

      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(function (control) {
            return control.dirty;
          });
        }
        /** @internal */

      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(function (control) {
            return control.touched;
          });
        }
        /** @internal */

      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = !this._anyControlsDirty();

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /** @internal */

      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = this._anyControlsTouched();

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /** @internal */

      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(formState) {
          return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /** @internal */

      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(fn) {
          this._onCollectionChange = fn;
        }
        /** @internal */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(opts) {
          if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
          }
        }
        /**
         * Check to see if parent has been marked artificially dirty.
         *
         * @internal
         */

      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(onlySelf) {
          var parentDirty = this._parent && this._parent.dirty;
          return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.status === VALID;
        }
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.status === INVALID;
        }
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.status == PENDING;
        }
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if the control is disabled, false otherwise.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         * @see {@link AbstractControl.status}
         *
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.status !== DISABLED;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */

      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */

      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */

      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
      }, {
        key: "root",
        get: function get() {
          var x = this;

          while (x._parent) {
            x = x._parent;
          }

          return x;
        }
      }]);

      return AbstractControl;
    }();
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events. See [usage examples below](#usage-notes).
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * @usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     *```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     * ```
     *
     * @publicApi
     */


    var FormControl = /*#__PURE__*/function (_AbstractControl) {
      _inherits(FormControl, _AbstractControl);

      var _super18 = _createSuper(FormControl);

      /**
       * Creates a new `FormControl` instance.
       *
       * @param formState Initializes the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormControl() {
        var _this57;

        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
        var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, FormControl);

        _this57 = _super18.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /** @internal */

        _this57._onChange = [];

        _this57._applyFormState(formState);

        _this57._setUpdateStrategy(validatorOrOpts);

        _this57.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        _this57._initObservables();

        return _this57;
      }
      /**
       * Sets a new value for the form control.
       *
       * @param value The new value for the control.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
       * `onChange` event to
       * update the view.
       * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
       * `ngModelChange`
       * event to update the model.
       *
       */


      _createClass(FormControl, [{
        key: "setValue",
        value: function setValue(value) {
          var _this58 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.value = this._pendingValue = value;

          if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) {
              return changeFn(_this58.value, options.emitViewToModelChange !== false);
            });
          }

          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(value, options);
        }
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         */

      }, {
        key: "reset",
        value: function reset() {
          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._applyFormState(formState);

          this.markAsPristine(options);
          this.markAsUntouched(options);
          this.setValue(this.value, options);
          this._pendingChange = false;
        }
        /**
         * @internal
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {}
        /**
         * @internal
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return false;
        }
        /**
         * @internal
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
        /**
         * Register a listener for change events.
         *
         * @param fn The method that is called when the value changes
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange.push(fn);
        }
        /**
         * @internal
         */

      }, {
        key: "_clearChangeFns",
        value: function _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];

          this._onCollectionChange = function () {};
        }
        /**
         * Register a listener for disabled events.
         *
         * @param fn The method that is called when the disabled status changes.
         */

      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(fn) {
          this._onDisabledChange.push(fn);
        }
        /**
         * @internal
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {}
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          if (this.updateOn === 'submit') {
            if (this._pendingDirty) this.markAsDirty();
            if (this._pendingTouched) this.markAsTouched();

            if (this._pendingChange) {
              this.setValue(this._pendingValue, {
                onlySelf: true,
                emitModelToViewChange: false
              });
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_applyFormState",
        value: function _applyFormState(formState) {
          if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({
              onlySelf: true,
              emitEvent: false
            }) : this.enable({
              onlySelf: true,
              emitEvent: false
            });
          } else {
            this.value = this._pendingValue = formState;
          }
        }
      }]);

      return FormControl;
    }(AbstractControl);
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * @usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     *
     * @publicApi
     */


    var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
      _inherits(FormGroup, _AbstractControl2);

      var _super19 = _createSuper(FormGroup);

      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this59;

        _classCallCheck(this, FormGroup);

        _this59 = _super19.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this59.controls = controls;

        _this59._initObservables();

        _this59._setUpdateStrategy(validatorOrOpts);

        _this59._setUpControls();

        _this59.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this59;
      }
      /**
       * Registers a control with the group's list of controls.
       *
       * This method does not update the value or validity of the control.
       * Use {@link FormGroup#addControl addControl} instead.
       *
       * @param name The control name to register in the collection
       * @param control Provides the control for the given name
       */


      _createClass(FormGroup, [{
        key: "registerControl",
        value: function registerControl(name, control) {
          if (this.controls[name]) return this.controls[name];
          this.controls[name] = control;
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);

          return control;
        }
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param name The control name to add to the collection
         * @param control Provides the control for the given name
         */

      }, {
        key: "addControl",
        value: function addControl(name, control) {
          this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         *
         * @param name The control name to remove from the collection
         */

      }, {
        key: "removeControl",
        value: function removeControl(name) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
          delete this.controls[name];
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         *
         * @param name The control name to replace in the collection
         * @param control Provides the control for the given name
         */

      }, {
        key: "setControl",
        value: function setControl(name, control) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
          delete this.controls[name];
          if (control) this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {@link AbstractControl#get get} instead.
         *
         * @param controlName The control name to check for existence in the collection
         *
         * @returns false for disabled controls, true otherwise.
         */

      }, {
        key: "contains",
        value: function contains(controlName) {
          return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * @usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you exclude a value of a control that does exist.
         *
         * @param value The new value for the control that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this60 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          Object.keys(value).forEach(function (name) {
            _this60._throwIfControlMissing(name);

            _this60.controls[name].setValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * @usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param value The object that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this61 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object.keys(value).forEach(function (name) {
            if (_this61.controls[name]) {
              _this61.controls[name].patchValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * @param value Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(function (control, name) {
            control.reset(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
          });
        }
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          });

          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /** @internal */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(name) {
          if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: ".concat(name, "."));
          }
        }
        /** @internal */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          var _this62 = this;

          Object.keys(this.controls).forEach(function (k) {
            return cb(_this62.controls[k], k);
          });
        }
        /** @internal */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this63 = this;

          this._forEachChild(function (control) {
            control.setParent(_this63);

            control._registerOnCollectionChange(_this63._onCollectionChange);
          });
        }
        /** @internal */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          this.value = this._reduceValue();
        }
        /** @internal */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          for (var _i5 = 0, _Object$keys = Object.keys(this.controls); _i5 < _Object$keys.length; _i5++) {
            var controlName = _Object$keys[_i5];
            var control = this.controls[controlName];

            if (this.contains(controlName) && condition(control)) {
              return true;
            }
          }

          return false;
        }
        /** @internal */

      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this64 = this;

          return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this64.disabled) {
              acc[name] = control.value;
            }

            return acc;
          });
        }
        /** @internal */

      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(initValue, fn) {
          var res = initValue;

          this._forEachChild(function (control, name) {
            res = fn(res, control, name);
          });

          return res;
        }
        /** @internal */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i6 = 0, _Object$keys2 = Object.keys(this.controls); _i6 < _Object$keys2.length; _i6++) {
            var controlName = _Object$keys2[_i6];

            if (this.controls[controlName].enabled) {
              return false;
            }
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /** @internal */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
              throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
            }
          });
        }
      }]);

      return FormGroup;
    }(AbstractControl);
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * @usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
     * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     * @publicApi
     */


    var FormArray = /*#__PURE__*/function (_AbstractControl3) {
      _inherits(FormArray, _AbstractControl3);

      var _super20 = _createSuper(FormArray);

      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this65;

        _classCallCheck(this, FormArray);

        _this65 = _super20.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this65.controls = controls;

        _this65._initObservables();

        _this65._setUpdateStrategy(validatorOrOpts);

        _this65._setUpControls();

        _this65.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this65;
      }
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control
       */


      _createClass(FormArray, [{
        key: "at",
        value: function at(index) {
          return this.controls[index];
        }
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param control Form control to be inserted
         */

      }, {
        key: "push",
        value: function push(control) {
          this.controls.push(control);

          this._registerControl(control);

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to insert the control
         * @param control Form control to be inserted
         */

      }, {
        key: "insert",
        value: function insert(index, control) {
          this.controls.splice(index, 0, control);

          this._registerControl(control);

          this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param index Index in the array to remove the control
         */

      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
          this.controls.splice(index, 1);
          this.updateValueAndValidity();
        }
        /**
         * Replace an existing control.
         *
         * @param index Index in the array to replace the control
         * @param control The `AbstractControl` control to replace the existing control
         */

      }, {
        key: "setControl",
        value: function setControl(index, control) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
          this.controls.splice(index, 1);

          if (control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);
          }

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Length of the control array.
         */

      }, {
        key: "setValue",

        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * @usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        value: function setValue(value) {
          var _this66 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          value.forEach(function (newValue, index) {
            _this66._throwIfControlMissing(index);

            _this66.at(index).setValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * @usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param value Array of latest values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this67 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          value.forEach(function (newValue, index) {
            if (_this67.at(index)) {
              _this67.at(index).patchValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * @usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(function (control, index) {
            control.reset(value[index], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
          });
        }
        /**
         * Remove all controls in the `FormArray`.
         *
         * @usageNotes
         * ### Remove all elements from a FormArray
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.length);  // 2
         *
         * arr.clear();
         * console.log(arr.length);  // 0
         * ```
         *
         * It's a simpler and more efficient alternative to removing all elements one by one:
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         *
         * while (arr.length) {
         *    arr.removeAt(0);
         * }
         * ```
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this.controls.length < 1) return;

          this._forEachChild(function (control) {
            return control._registerOnCollectionChange(function () {});
          });

          this.controls.splice(0);
          this.updateValueAndValidity();
        }
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          }, false);
          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /** @internal */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(index) {
          if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.at(index)) {
            throw new Error("Cannot find form control at index ".concat(index));
          }
        }
        /** @internal */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          this.controls.forEach(function (control, index) {
            cb(control, index);
          });
        }
        /** @internal */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this68 = this;

          this.value = this.controls.filter(function (control) {
            return control.enabled || _this68.disabled;
          }).map(function (control) {
            return control.value;
          });
        }
        /** @internal */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return this.controls.some(function (control) {
            return control.enabled && condition(control);
          });
        }
        /** @internal */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this69 = this;

          this._forEachChild(function (control) {
            return _this69._registerControl(control);
          });
        }
        /** @internal */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
              throw new Error("Must supply a value for form control at index: ".concat(i, "."));
            }
          });
        }
        /** @internal */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iterator6 = _createForOfIteratorHelper(this.controls),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var control = _step6.value;
              if (control.enabled) return false;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return this.controls.length > 0 || this.disabled;
        }
      }, {
        key: "_registerControl",
        value: function _registerControl(control) {
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }]);

      return FormArray;
    }(AbstractControl);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgForm;
      })
    };

    var ɵ0 = function ɵ0() {
      return Promise.resolve(null);
    };

    var resolvedPromise = ɵ0();
    /**
     * @description
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You optionally export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * gives you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, use `NgModel` with a `name`
     * attribute. You may use `NgModelGroup` to create sub-groups within the form.
     *
     * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event emits the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * To import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * @usageNotes
     *
     * ### Listening for form submission
     *
     * The following example shows how to capture the form values from the "ngSubmit" event.
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Setting the update options
     *
     * The following example shows you how to change the "updateOn" option from its default using
     * ngFormOptions.
     *
     * ```html
     * <form [ngFormOptions]="{updateOn: 'blur'}">
     *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
     * </form>
     * ```
     *
     * ### Native DOM validation UI
     *
     * In order to prevent the native DOM form validation UI from interfering with Angular's form
     * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
     * `FormModule` or `ReactiveFormModule` are imported into the application.
     * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
     * `ngNativeValidate` attribute to the `<form>` element:
     *
     * ```html
     * <form ngNativeValidate>
     *   ...
     * </form>
     * ```
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgForm = /*#__PURE__*/function (_ControlContainer) {
      _inherits(NgForm, _ControlContainer);

      var _super21 = _createSuper(NgForm);

      function NgForm(validators, asyncValidators) {
        var _this70;

        _classCallCheck(this, NgForm);

        _this70 = _super21.call(this);
        /**
         * @description
         * Returns whether the form submission has been triggered.
         */

        _this70.submitted = false;
        _this70._directives = [];
        /**
         * @description
         * Event emitter for the "ngSubmit" event
         */

        _this70.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this70.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this70;
      }
      /**
       * @description
       * Lifecycle method called after the view is initialized. For internal use only.
       */


      _createClass(NgForm, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        /**
         * @description
         * The directive instance.
         */

      }, {
        key: "addControl",

        /**
         * @description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param dir The `NgModel` directive instance.
         */
        value: function addControl(dir) {
          var _this71 = this;

          resolvedPromise.then(function () {
            var container = _this71._findContainer(dir.path);

            dir.control = container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({
              emitEvent: false
            });

            _this71._directives.push(dir);
          });
        }
        /**
         * @description
         * Retrieves the `FormControl` instance from the provided `NgModel` directive.
         *
         * @param dir The `NgModel` directive instance.
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return this.form.get(dir.path);
        }
        /**
         * @description
         * Removes the `NgModel` instance from the internal list of directives
         *
         * @param dir The `NgModel` directive instance.
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          var _this72 = this;

          resolvedPromise.then(function () {
            var container = _this72._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }

            removeDir(_this72._directives, dir);
          });
        }
        /**
         * @description
         * Adds a new `NgModelGroup` directive instance to the form.
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var _this73 = this;

          resolvedPromise.then(function () {
            var container = _this73._findContainer(dir.path);

            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({
              emitEvent: false
            });
          });
        }
        /**
         * @description
         * Removes the `NgModelGroup` directive instance from the form.
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {
          var _this74 = this;

          resolvedPromise.then(function () {
            var container = _this74._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }
          });
        }
        /**
         * @description
         * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Sets the new value for the provided `NgControl` directive.
         *
         * @param dir The `NgControl` directive instance.
         * @param value The new value for the directive's control.
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var _this75 = this;

          resolvedPromise.then(function () {
            var ctrl = _this75.form.get(dir.path);

            ctrl.setValue(value);
          });
        }
        /**
         * @description
         * Sets the value for this `FormGroup`.
         *
         * @param value The new value
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
        }
        /**
         * @description
         * Method called when the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param $event The "submit" event object
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          this.submitted = true;
          syncPendingControls(this.form, this._directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * @description
         * Method called when the "reset" event is triggered on the form.
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * @description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param value The new value for the form.
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);
          this.submitted = false;
        }
      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        /** @internal */

      }, {
        key: "_findContainer",
        value: function _findContainer(path) {
          path.pop();
          return path.length ? this.form.get(path) : this.form;
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * @description
         * The internal `FormGroup` instance.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * @description
         * Returns a map of the controls in this group.
         */

      }, {
        key: "controls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return NgForm;
    }(ControlContainer);

    NgForm.ɵfac = function NgForm_Factory(t) {
      return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: ["ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    NgForm.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgForm.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngFormOptions']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
          providers: [formDirectiveProvider],
          host: {
            '(submit)': 'onSubmit($event)',
            '(reset)': 'onReset()'
          },
          outputs: ['ngSubmit'],
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngFormOptions']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     * @publicApi
     */


    var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
      _inherits(AbstractFormGroupDirective, _ControlContainer2);

      var _super22 = _createSuper(AbstractFormGroupDirective);

      function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _super22.apply(this, arguments);
      }

      _createClass(AbstractFormGroupDirective, [{
        key: "ngOnInit",

        /**
         * @description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         */
        value: function ngOnInit() {
          this._checkParentType();

          this.formDirective.addFormGroup(this);
        }
        /**
         * @description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */

      }, {
        key: "_checkParentType",

        /** @internal */
        value: function _checkParentType() {}
      }, {
        key: "control",
        get: function get() {
          return this.formDirective.getFormGroup(this);
        }
        /**
         * @description
         * The path to this group from the top-level directive.
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * The synchronous validators registered with this group.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * @description
         * The async validators registered with this group.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return AbstractFormGroupDirective;
    }(ControlContainer);

    AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
      return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
    };

    AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractFormGroupDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAbstractFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var TemplateDrivenErrors = /*#__PURE__*/function () {
      function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
      }

      _createClass(TemplateDrivenErrors, null, [{
        key: "modelParentException",
        value: function modelParentException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
        }
      }, {
        key: "formGroupNameException",
        value: function formGroupNameException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
      }, {
        key: "missingNameException",
        value: function missingNameException() {
          throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        }
      }, {
        key: "modelGroupParentException",
        value: function modelGroupParentException() {
          throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
      }]);

      return TemplateDrivenErrors;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var modelGroupProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgModelGroup;
      })
    };
    /**
     * @description
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (within `<form>` tags).
     *
     * Use this directive to validate a sub-group of your form separately from the
     * rest of your form, or if some values in your domain model make more sense
     * to consume together in a nested object.
     *
     * Provide a name for the sub-group and it will become the key
     * for the sub-group in the form's full value. If you need direct access, export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * @usageNotes
     *
     * ### Consuming controls in a grouping
     *
     * The following example shows you how to combine controls together in a sub-group
     * of the form.
     *
     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
      _inherits(NgModelGroup, _AbstractFormGroupDir);

      var _super23 = _createSuper(NgModelGroup);

      function NgModelGroup(parent, validators, asyncValidators) {
        var _this76;

        _classCallCheck(this, NgModelGroup);

        _this76 = _super23.call(this);
        _this76._parent = parent;
        _this76._validators = validators;
        _this76._asyncValidators = asyncValidators;
        return _this76;
      }
      /** @internal */


      _createClass(NgModelGroup, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
          }
        }
      }]);

      return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
      return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: ["ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    NgModelGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgModelGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelGroup']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModelGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngModelGroup]',
          providers: [modelGroupProvider],
          exportAs: 'ngModelGroup'
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelGroup']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var formControlBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgModel;
      })
    };

    var ɵ0$1 = function ɵ0$1() {
      return Promise.resolve(null);
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */


    var resolvedPromise$1 = ɵ0$1();
    /**
     * @description
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance tracks the value, user interaction, and
     * validation status of the control and keeps the view synced with the model. If used
     * within a parent form, the directive also registers itself with the form as a child
     * control.
     *
     * This directive is used by itself or as part of a larger form. Use the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class sets the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI always syncs back to
     * the domain model in your class.
     *
     * To inspect the properties of the associated `FormControl` (like validity state),
     * export the directive into a local template variable using `ngModel` as the key (ex:
     * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
     * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
     * access. See a full list of properties directly available in `AbstractControlDirective`.
     *
     * @see `RadioControlValueAccessor`
     * @see `SelectControlValueAccessor`
     *
     * @usageNotes
     *
     * ### Using ngModel on a standalone control
     *
     * The following examples show a simple standalone control using `ngModel`:
     *
     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
     * as the parent form syncs the value for you. You access its properties by exporting it into a
     * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
     * needed on form submission.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * ### Using ngModel within a form
     *
     * The following example shows controls using `ngModel` within a form:
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Using a standalone ngModel within a group
     *
     * The following example shows you how to use a standalone ngModel control
     * within a form. This controls the display of the form, but doesn't contain form data.
     *
     * ```html
     * <form>
     *   <input name="login" ngModel placeholder="Login">
     *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
     * </form>
     * <!-- form value: {login: ''} -->
     * ```
     *
     * ### Setting the ngModel name attribute through options
     *
     * The following example shows you an alternate way to set the name attribute. The name attribute is
     * used within a custom form component, and the name `@Input` property serves a different purpose.
     *
     * ```html
     * <form>
     *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
     *   </my-person-control>
     * </form>
     * <!-- form value: {user: ''} -->
     * ```
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgModel = /*#__PURE__*/function (_NgControl) {
      _inherits(NgModel, _NgControl);

      var _super24 = _createSuper(NgModel);

      function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this77;

        _classCallCheck(this, NgModel);

        _this77 = _super24.call(this);
        _this77.control = new FormControl();
        /** @internal */

        _this77._registered = false;
        /**
         * @description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */

        _this77.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this77._parent = parent;
        _this77._rawValidators = validators || [];
        _this77._rawAsyncValidators = asyncValidators || [];
        _this77.valueAccessor = selectValueAccessor(_assertThisInitialized(_this77), valueAccessors);
        return _this77;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs change. For internal use
       * only.
       *
       * @param changes A object of key/value pairs for the set of changed inputs.
       */


      _createClass(NgModel, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkForErrors();

          if (!this._registered) this._setUpControl();

          if ('isDisabled' in changes) {
            this._updateDisabled(changes);
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);

            this.viewModel = this.model;
          }
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal
         * use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value emitted by `ngModelChange`.
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._setUpdateStrategy();

          this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
          this._registered = true;
        }
      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
      }, {
        key: "_isStandalone",
        value: function _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
      }, {
        key: "_setUpStandalone",
        value: function _setUpStandalone() {
          setUpControl(this.control, this);
          this.control.updateValueAndValidity({
            emitEvent: false
          });
        }
      }, {
        key: "_checkForErrors",
        value: function _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }

          this._checkName();
        }
      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
          } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
          }
        }
      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.options && this.options.name) this.name = this.options.name;

          if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
          }
        }
      }, {
        key: "_updateValue",
        value: function _updateValue(value) {
          var _this78 = this;

          resolvedPromise$1.then(function () {
            _this78.control.setValue(value, {
              emitViewToModelChange: false
            });
          });
        }
      }, {
        key: "_updateDisabled",
        value: function _updateDisabled(changes) {
          var _this79 = this;

          var disabledValue = changes['isDisabled'].currentValue;
          var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
          resolvedPromise$1.then(function () {
            if (isDisabled && !_this79.control.disabled) {
              _this79.control.disable();
            } else if (!isDisabled && _this79.control.disabled) {
              _this79.control.enable();
            }
          });
        }
      }, {
        key: "path",
        get: function get() {
          return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * @description
         * The top-level directive for this control if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return NgModel;
    }(NgControl);

    NgModel.ɵfac = function NgModel_Factory(t) {
      return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
    };

    NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"],
        options: ["ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });

    NgModel.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }];
    };

    NgModel.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelOptions']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngModel]:not([formControlName]):not([formControl])',
          providers: [formControlBinding],
          exportAs: 'ngModel'
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelOptions']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * @publicApi
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     */


    var ɵNgNoValidate = function ɵNgNoValidate() {
      _classCallCheck(this, ɵNgNoValidate);
    };

    ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
      return new (t || ɵNgNoValidate)();
    };

    ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ɵNgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgNoValidate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
          host: {
            'novalidate': ''
          }
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     */


    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
    var formControlBinding$1 = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormControlDirective;
      })
    };
    /**
     * @description
     * Synchronizes a standalone `FormControl` instance to a form control element.
     *
     * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives was deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * The following example shows how to register a standalone control and set its value.
     *
     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
      _inherits(FormControlDirective, _NgControl2);

      var _super25 = _createSuper(FormControlDirective);

      function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this80;

        _classCallCheck(this, FormControlDirective);

        _this80 = _super25.call(this);
        _this80._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */

        _this80.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */

        _this80._ngModelWarningSent = false;
        _this80._rawValidators = validators || [];
        _this80._rawAsyncValidators = asyncValidators || [];
        _this80.valueAccessor = selectValueAccessor(_assertThisInitialized(_this80), valueAccessors);
        return _this80;
      }
      /**
       * @description
       * Triggers a warning that this input should not be used with reactive forms.
       */


      _createClass(FormControlDirective, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this.form.updateValueAndValidity({
              emitEvent: false
            });
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

            this.form.setValue(this.model);
            this.viewModel = this.model;
          }
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value for the view model.
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
      }, {
        key: "_isControlChanged",
        value: function _isControlChanged(changes) {
          return changes.hasOwnProperty('form');
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * @description
         * The `FormControl` bound to this directive.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
      }]);

      return FormControlDirective;
    }(NgControl);

    FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
      return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };

    FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        form: ["formControl", "form"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */

    FormControlDirective._ngModelWarningSentOnce = false;

    FormControlDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControl']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControl]',
          providers: [formControlBinding$1],
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControl']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormGroupDirective;
      })
    };
    /**
     * @description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * ### Register Form Group
     *
     * The following example registers a `FormGroup` with first name and last name controls,
     * and listens for the *ngSubmit* event when the button is clicked.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
      _inherits(FormGroupDirective, _ControlContainer3);

      var _super26 = _createSuper(FormGroupDirective);

      function FormGroupDirective(_validators, _asyncValidators) {
        var _this81;

        _classCallCheck(this, FormGroupDirective);

        _this81 = _super26.call(this);
        _this81._validators = _validators;
        _this81._asyncValidators = _asyncValidators;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */

        _this81.submitted = false;
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */

        _this81.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */

        _this81.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */

        _this81.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this81;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs change. For internal use only.
       *
       * @param changes A object of key/value pairs for the set of changed inputs.
       */


      _createClass(FormGroupDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkFormPresent();

          if (changes.hasOwnProperty('form')) {
            this._updateValidators();

            this._updateDomValue();

            this._updateRegistrations();
          }
        }
        /**
         * @description
         * Returns this directive's instance.
         */

      }, {
        key: "addControl",

        /**
         * @description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param dir The `FormControlName` directive instance.
         */
        value: function addControl(dir) {
          var ctrl = this.form.get(dir.path);
          setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
          this.directives.push(dir);
          return ctrl;
        }
        /**
         * @description
         * Retrieves the `FormControl` instance from the provided `FormControlName` directive
         *
         * @param dir The `FormControlName` directive instance.
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return this.form.get(dir.path);
        }
        /**
         * @description
         * Removes the `FormControlName` instance from the internal list of directives
         *
         * @param dir The `FormControlName` directive instance.
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          removeDir(this.directives, dir);
        }
        /**
         * Adds a new `FormGroupName` directive instance to the form.
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form group.
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {}
        /**
         * @description
         * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Adds a new `FormArrayName` directive instance to the form.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "addFormArray",
        value: function addFormArray(dir) {
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form array.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "removeFormArray",
        value: function removeFormArray(dir) {}
        /**
         * @description
         * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "getFormArray",
        value: function getFormArray(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Sets the new value for the provided `FormControlName` directive.
         *
         * @param dir The `FormControlName` directive instance.
         * @param value The new value for the directive's control.
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        }
        /**
         * @description
         * Method called with the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param $event The "submit" event object
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          this.submitted = true;
          syncPendingControls(this.form, this.directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * @description
         * Method called when the "reset" event is triggered on the form.
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * @description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param value The new value for the form.
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);
          this.submitted = false;
        }
        /** @internal */

      }, {
        key: "_updateDomValue",
        value: function _updateDomValue() {
          var _this82 = this;

          this.directives.forEach(function (dir) {
            var newCtrl = _this82.form.get(dir.path);

            if (dir.control !== newCtrl) {
              cleanUpControl(dir.control, dir);
              if (newCtrl) setUpControl(newCtrl, dir);
              dir.control = newCtrl;
            }
          });

          this.form._updateTreeValidity({
            emitEvent: false
          });
        }
      }, {
        key: "_updateRegistrations",
        value: function _updateRegistrations() {
          var _this83 = this;

          this.form._registerOnCollectionChange(function () {
            return _this83._updateDomValue();
          });

          if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
          this._oldForm = this.form;
        }
      }, {
        key: "_updateValidators",
        value: function _updateValidators() {
          var sync = composeValidators(this._validators);
          this.form.validator = Validators.compose([this.form.validator, sync]);
          var async = composeAsyncValidators(this._asyncValidators);
          this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        }
      }, {
        key: "_checkFormPresent",
        value: function _checkFormPresent() {
          if (!this.form) {
            ReactiveErrors.missingFormException();
          }
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * @description
         * Returns the `FormGroup` bound to this directive.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
      }]);

      return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
      return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });

    FormGroupDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroup']
      }],
      ngSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroup]',
          providers: [formDirectiveProvider$1],
          host: {
            '(submit)': 'onSubmit($event)',
            '(reset)': 'onReset()'
          },
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormGroupName;
      })
    };
    /**
     * @description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective`.
     *
     * It accepts the string name of the nested `FormGroup` to link, and
     * looks for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Use nested form groups to validate a sub-group of a
     * form separately from the rest or to group the values of certain
     * controls into their own nested object.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * @usageNotes
     *
     * ### Access the group by name
     *
     * The following example uses the {@link AbstractControl#get get} method to access the
     * associated `FormGroup`
     *
     * ```ts
     *   this.form.get('name');
     * ```
     *
     * ### Access individual controls in the group
     *
     * The following example uses the {@link AbstractControl#get get} method to access
     * individual controls within the group using dot syntax.
     *
     * ```ts
     *   this.form.get('name.first');
     * ```
     *
     * ### Register a nested `FormGroup`.
     *
     * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
     * and provides methods to retrieve the nested `FormGroup` and individual controls.
     *
     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
      _inherits(FormGroupName, _AbstractFormGroupDir2);

      var _super27 = _createSuper(FormGroupName);

      function FormGroupName(parent, validators, asyncValidators) {
        var _this84;

        _classCallCheck(this, FormGroupName);

        _this84 = _super27.call(this);
        _this84._parent = parent;
        _this84._validators = validators;
        _this84._asyncValidators = asyncValidators;
        return _this84;
      }
      /** @internal */


      _createClass(FormGroupName, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
          }
        }
      }]);

      return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.ɵfac = function FormGroupName_Factory(t) {
      return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    FormGroupName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroupName']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroupName]',
          providers: [formGroupNameProvider]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroupName']
        }]
      });
    })();

    var formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormArrayName;
      })
    };
    /**
     * @description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
      _inherits(FormArrayName, _ControlContainer4);

      var _super28 = _createSuper(FormArrayName);

      function FormArrayName(parent, validators, asyncValidators) {
        var _this85;

        _classCallCheck(this, FormArrayName);

        _this85 = _super28.call(this);
        _this85._parent = parent;
        _this85._validators = validators;
        _this85._asyncValidators = asyncValidators;
        return _this85;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       *
       * @throws If the directive does not have a valid parent.
       */


      _createClass(FormArrayName, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkParentType();

          this.formDirective.addFormArray(this);
        }
        /**
         * @description
         * A lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormArray(this);
          }
        }
        /**
         * @description
         * The `FormArray` bound to this directive.
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
          }
        }
      }, {
        key: "control",
        get: function get() {
          return this.formDirective.getFormArray(this);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return FormArrayName;
    }(ControlContainer);

    FormArrayName.ɵfac = function FormArrayName_Factory(t) {
      return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    FormArrayName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormArrayName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formArrayName']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormArrayName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formArrayName]',
          providers: [formArrayNameProvider]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formArrayName']
        }]
      });
    })();

    function _hasInvalidParent(parent) {
      return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var controlNameBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormControlName;
      })
    };
    /**
     * @description
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * ### Register `FormControl` within a group
     *
     * The following example shows how to register multiple form controls within a form group
     * and set their value.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel is deprecated
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     *
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormControlName = /*#__PURE__*/function (_NgControl3) {
      _inherits(FormControlName, _NgControl3);

      var _super29 = _createSuper(FormControlName);

      function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this86;

        _classCallCheck(this, FormControlName);

        _this86 = _super29.call(this);
        _this86._ngModelWarningConfig = _ngModelWarningConfig;
        _this86._added = false;
        /** @deprecated as of v6 */

        _this86.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */

        _this86._ngModelWarningSent = false;
        _this86._parent = parent;
        _this86._rawValidators = validators || [];
        _this86._rawAsyncValidators = asyncValidators || [];
        _this86.valueAccessor = selectValueAccessor(_assertThisInitialized(_this86), valueAccessors);
        return _this86;
      }
      /**
       * @description
       * Triggers a warning that this input should not be used with reactive forms.
       */


      _createClass(FormControlName, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if (!this._added) this._setUpControl();

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
          }
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value for the view model.
         */

      }, {
        key: "viewToModelUpdate",
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
          } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
          }
        }
      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._checkParentType();

          this.control = this.formDirective.addControl(this);

          if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
          }

          this._added = true;
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return FormControlName;
    }(NgControl);

    FormControlName.ɵfac = function FormControlName_Factory(t) {
      return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };

    FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        name: ["formControlName", "name"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */

    FormControlName._ngModelWarningSentOnce = false;

    FormControlName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControlName']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControlName]',
          providers: [controlNameBinding]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControlName']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     */


    var REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RequiredValidator;
      }),
      multi: true
    };
    /**
     * @description
     * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return CheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * @description
     * A directive that adds the `required` validator to any controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a required validator using template-driven forms
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var RequiredValidator = /*#__PURE__*/function () {
      function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
      }

      _createClass(RequiredValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether the control is empty.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this.required ? Validators.required(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "required",

        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */
        get: function get() {
          return this._required;
        },
        set: function set(value) {
          this._required = value != null && value !== false && "".concat(value) !== 'false';
          if (this._onChange) this._onChange();
        }
      }]);

      return RequiredValidator;
    }();

    RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
      return new (t || RequiredValidator)();
    };

    RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
    });
    RequiredValidator.propDecorators = {
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
          providers: [REQUIRED_VALIDATOR],
          host: {
            '[attr.required]': 'required ? "" : null'
          }
        }]
      }], null, {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a required checkbox validator using template-driven forms
     *
     * The following example shows how to add a checkbox required validator to an input attached to an
     * ngModel binding.
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * @publicApi
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */


    var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
      _inherits(CheckboxRequiredValidator, _RequiredValidator);

      var _super30 = _createSuper(CheckboxRequiredValidator);

      function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _super30.apply(this, arguments);
      }

      _createClass(CheckboxRequiredValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether or not the checkbox has been checked.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this.required ? Validators.requiredTrue(control) : null;
        }
      }]);

      return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
      return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
    };

    CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
          providers: [CHECKBOX_REQUIRED_VALIDATOR],
          host: {
            '[attr.required]': 'required ? "" : null'
          }
        }]
      }], null, null);
    })();
    /**
     * @description
     * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
     */


    var EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return EmailValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds the `email` validator to controls marked with the
     * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding an email validator
     *
     * The following example shows how to add an email validator to an input attached to an ngModel
     * binding.
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * @publicApi
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether an email address is valid.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this._enabled ? Validators.email(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "email",

        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */
        set: function set(value) {
          this._enabled = value === '' || value === true || value === 'true';
          if (this._onChange) this._onChange();
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.ɵfac = function EmailValidator_Factory(t) {
      return new (t || EmailValidator)();
    };

    EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
    });
    EmailValidator.propDecorators = {
      email: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[email][formControlName],[email][formControl],[email][ngModel]',
          providers: [EMAIL_VALIDATOR]
        }]
      }], null, {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @description
     * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     */


    var MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return MinLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds minimum length validation to controls marked with the
     * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a minimum length validator
     *
     * The following example shows how to add a minimum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel minlength="4">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var MinLengthValidator = /*#__PURE__*/function () {
      function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
      }

      _createClass(MinLengthValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('minlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value meets a minimum length
         * requirement. Returns the validation result if enabled, otherwise null.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.minlength == null ? null : this._validator(control);
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
        }
      }]);

      return MinLengthValidator;
    }();

    MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
      return new (t || MinLengthValidator)();
    };

    MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    MinLengthValidator.propDecorators = {
      minlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
          providers: [MIN_LENGTH_VALIDATOR],
          host: {
            '[attr.minlength]': 'minlength ? minlength : null'
          }
        }]
      }], null, {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @description
     * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     */


    var MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return MaxLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds max length validation to controls marked with the
     * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a maximum length validator
     *
     * The following example shows how to add a maximum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel maxlength="25">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var MaxLengthValidator = /*#__PURE__*/function () {
      function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
      }

      _createClass(MaxLengthValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('maxlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value exceeds
         * the maximum length requirement.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.maxlength != null ? this._validator(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
        }
      }]);

      return MaxLengthValidator;
    }();

    MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
      return new (t || MaxLengthValidator)();
    };

    MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    MaxLengthValidator.propDecorators = {
      maxlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
          providers: [MAX_LENGTH_VALIDATOR],
          host: {
            '[attr.maxlength]': 'maxlength ? maxlength : null'
          }
        }]
      }], null, {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @description
     * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
     */


    var PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return PatternValidator;
      }),
      multi: true
    };
    /**
     * @description
     * A directive that adds regex pattern validation to controls marked with the
     * `pattern` attribute. The regex must match the entire control value.
     * The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a pattern validator
     *
     * The following example shows how to add a pattern validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var PatternValidator = /*#__PURE__*/function () {
      function PatternValidator() {
        _classCallCheck(this, PatternValidator);
      }

      _createClass(PatternValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('pattern' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value matches the
         * the pattern requirement.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this._validator(control);
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.pattern(this.pattern);
        }
      }]);

      return PatternValidator;
    }();

    PatternValidator.ɵfac = function PatternValidator_Factory(t) {
      return new (t || PatternValidator)();
    };

    PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    PatternValidator.propDecorators = {
      pattern: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
          providers: [PATTERN_VALIDATOR],
          host: {
            '[attr.pattern]': 'pattern ? pattern : null'
          }
        }]
      }], null, {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
      _classCallCheck(this, ɵInternalFormsSharedModule);
    };

    ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ɵInternalFormsSharedModule
    });
    ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ɵInternalFormsSharedModule_Factory(t) {
        return new (t || ɵInternalFormsSharedModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
        declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
        exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: SHARED_FORM_DIRECTIVES,
          exports: SHARED_FORM_DIRECTIVES
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function isAbstractControlOptions(options) {
      return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
    }
    /**
     * @description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * @publicApi
     */


    var FormBuilder = /*#__PURE__*/function () {
      function FormBuilder() {
        _classCallCheck(this, FormBuilder);
      }

      _createClass(FormBuilder, [{
        key: "group",

        /**
         * @description
         * Construct a new `FormGroup` instance.
         *
         * @param controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param options Configuration options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy configuration object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         */
        value: function group(controlsConfig) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var controls = this._reduceControls(controlsConfig);

          var validators = null;
          var asyncValidators = null;
          var updateOn = undefined;

          if (options != null) {
            if (isAbstractControlOptions(options)) {
              // `options` are `AbstractControlOptions`
              validators = options.validators != null ? options.validators : null;
              asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
              updateOn = options.updateOn != null ? options.updateOn : undefined;
            } else {
              // `options` are legacy form group options
              validators = options['validator'] != null ? options['validator'] : null;
              asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
          }

          return new FormGroup(controls, {
            asyncValidators: asyncValidators,
            updateOn: updateOn,
            validators: validators
          });
        }
        /**
         * @description
         * Construct a new `FormControl` with the given state, validators and options.
         *
         * @param formState Initializes the control with an initial state value, or
         * with an object that contains both a value and a disabled status.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         *
         * @usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
         * </code-example>
         */

      }, {
        key: "control",
        value: function control(formState, validatorOrOpts, asyncValidator) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         */

      }, {
        key: "array",
        value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
          var _this87 = this;

          var controls = controlsConfig.map(function (c) {
            return _this87._createControl(c);
          });
          return new FormArray(controls, validatorOrOpts, asyncValidator);
        }
        /** @internal */

      }, {
        key: "_reduceControls",
        value: function _reduceControls(controlsConfig) {
          var _this88 = this;

          var controls = {};
          Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this88._createControl(controlsConfig[controlName]);
          });
          return controls;
        }
        /** @internal */

      }, {
        key: "_createControl",
        value: function _createControl(controlConfig) {
          if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
            return controlConfig;
          } else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
          } else {
            return this.control(controlConfig);
          }
        }
      }]);

      return FormBuilder;
    }();

    FormBuilder.ɵfac = function FormBuilder_Factory(t) {
      return new (t || FormBuilder)();
    };

    FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormBuilder,
      factory: FormBuilder.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @publicApi
     */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.0.1');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](/guide/forms-overview)
     * @see [Template-driven Forms Guide](/guide/forms)
     *
     * @publicApi
     */

    var FormsModule = function FormsModule() {
      _classCallCheck(this, FormsModule);
    };

    FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormsModule
    });
    FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormsModule_Factory(t) {
        return new (t || FormsModule)();
      },
      providers: [RadioControlRegistry],
      imports: [ɵInternalFormsSharedModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
        declarations: [NgModel, NgModelGroup, NgForm],
        exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: TEMPLATE_DRIVEN_DIRECTIVES,
          providers: [RadioControlRegistry],
          exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        }]
      }], null, null);
    })();
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](guide/forms-overview)
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * @publicApi
     */


    var ReactiveFormsModule = /*#__PURE__*/function () {
      function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
      }

      _createClass(ReactiveFormsModule, null, [{
        key: "withConfig",

        /**
         * @description
         * Provides options for configuring the reactive forms module.
         *
         * @param opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         */
        value: function withConfig(opts) {
          return {
            ngModule: ReactiveFormsModule,
            providers: [{
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl
            }]
          };
        }
      }]);

      return ReactiveFormsModule;
    }();

    ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReactiveFormsModule
    });
    ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReactiveFormsModule_Factory(t) {
        return new (t || ReactiveFormsModule)();
      },
      providers: [FormBuilder, RadioControlRegistry],
      imports: [ɵInternalFormsSharedModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
        declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
        exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [REACTIVE_DRIVEN_DIRECTIVES],
          providers: [FormBuilder, RadioControlRegistry],
          exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=forms.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
    \*************************************************************************/

  /*! exports provided: MatDivider, MatDividerModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DividerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
      return MatDivider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
      return MatDividerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatDivider =
    /** @class */
    function () {
      var MatDivider = /*#__PURE__*/function () {
        function MatDivider() {
          _classCallCheck(this, MatDivider);

          this._vertical = false;
          this._inset = false;
        }
        /** Whether the divider is vertically aligned. */


        _createClass(MatDivider, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the divider is an inset divider. */

        }, {
          key: "inset",
          get: function get() {
            return this._inset;
          },
          set: function set(value) {
            this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatDivider;
      }();

      MatDivider.ɵfac = function MatDivider_Factory(t) {
        return new (t || MatDivider)();
      };

      MatDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDivider,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function MatDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        decls: 0,
        vars: 0,
        template: function MatDivider_Template(rf, ctx) {},
        styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatDivider.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-divider',
            host: {
              'role': 'separator',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-divider-vertical]': 'vertical',
              '[class.mat-divider-horizontal]': '!vertical',
              '[class.mat-divider-inset]': 'inset',
              'class': 'mat-divider'
            },
            template: '',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
          }]
        }], function () {
          return [];
        }, {
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return MatDivider;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatDividerModule =
    /** @class */
    function () {
      var MatDividerModule = function MatDividerModule() {
        _classCallCheck(this, MatDividerModule);
      };

      MatDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatDividerModule
      });
      MatDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatDividerModule_Factory(t) {
          return new (t || MatDividerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
          declarations: function declarations() {
            return [MatDivider];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatDivider]
          }]
        }], null, null);
      })();

      return MatDividerModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=divider.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
    \****************************************************************************/

  /*! exports provided: MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
      return MAT_FORM_FIELD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var _c0 = ["underline"];
    var _c1 = ["connectionContainer"];
    var _c2 = ["inputContainer"];
    var _c3 = ["label"];

    function MatFormField_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
    }

    function MatFormField_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
      }
    }

    function MatFormField_label_9_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
      }
    }

    function MatFormField_label_9_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r13.updateOutlineGap();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_3_Template, 1, 0, undefined, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
      }
    }

    function MatFormField_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
      }
    }

    function MatFormField_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
      }
    }

    function MatFormField_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
      }
    }

    function MatFormField_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
      }
    }

    var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
    var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
    var nextUniqueId = 0;
    /** Single error message to be shown underneath the form field. */

    var MatError =
    /** @class */
    function () {
      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        }
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            }
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      return MatError;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Animations used by the MatFormField.
     * @docs-private
     */


    var matFormFieldAnimations = {
      /** Animation that transitions the form field's error and hint messages. */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** An interface which allows a control to work inside of a `MatFormField`. */

    var MatFormFieldControl =
    /** @class */
    function () {
      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();

      return MatFormFieldControl;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @docs-private */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /** @docs-private */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /** @docs-private */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var nextUniqueId$1 = 0;
    /** Hint text to be shown underneath the form field control. */

    var MatHint =
    /** @class */
    function () {
      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-right", ctx.align == "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        }
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-right]': 'align == "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      return MatHint;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The floating label for a `mat-form-field`. */


    var MatLabel =
    /** @class */
    function () {
      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();

      return MatLabel;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * @breaking-change 8.0.0
     */


    var MatPlaceholder =
    /** @class */
    function () {
      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();

      return MatPlaceholder;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Prefix to be placed in front of the form field. */


    var MatPrefix =
    /** @class */
    function () {
      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]'
          }]
        }], null, null);
      })();

      return MatPrefix;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Suffix to be placed at the end of the form field. */


    var MatSuffix =
    /** @class */
    function () {
      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]'
          }]
        }], null, null);
      })();

      return MatSuffix;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var nextUniqueId$2 = 0;
    var floatingLabelScale = 0.75;
    var outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * @docs-private
     */

    var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
      _classCallCheck(this, MatFormFieldBase);

      this._elementRef = _elementRef;
    };
    /**
     * Base class to which we're applying the form field mixins.
     * @docs-private
     */


    var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     */


    var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Injection token that can be used to inject an instances of `MatFormField`. It serves
     * as alternative token to the actual `MatFormField` class which would cause unnecessary
     * retention of the `MatFormField` class and its component metadata.
     */

    var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
    /** Container for form controls that applies Material Design styling and behavior. */

    var MatFormField =
    /** @class */
    function () {
      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super31 = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this89;

          _classCallCheck(this, MatFormField);

          _this89 = _super31.call(this, _elementRef);
          _this89._elementRef = _elementRef;
          _this89._changeDetectorRef = _changeDetectorRef;
          _this89._dir = _dir;
          _this89._defaults = _defaults;
          _this89._platform = _platform;
          _this89._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this89._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this89._outlineGapCalculationNeededOnStable = false;
          _this89._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this89._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this89._subscriptAnimationState = '';
          _this89._hintLabel = ''; // Unique id for the hint label.

          _this89._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

          _this89._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this89._labelOptions = labelOptions ? labelOptions : {};
          _this89.floatLabel = _this89._getDefaultFloatLabelState();
          _this89._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this89.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this89._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this89;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "getConnectedOverlayOrigin",

          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this90 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this90._validatePlaceholders();

              _this90._syncDescribedByIds();

              _this90._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this90._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this90._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this90._destroyed)).subscribe(function () {
                if (_this90._outlineGapCalculationNeededOnStable) {
                  _this90.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this90._outlineGapCalculationNeededOnStable = true;

              _this90._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this90._processHints();

              _this90._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this90._syncDescribedByIds();

              _this90._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this90._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this90.updateOutlineGap();
                    });
                  });
                } else {
                  _this90.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!this._labelChild;
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this91 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this91._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this92 = this;

            if (this._hintChildren) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this92.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = [];

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids = this._errorChildren.map(function (error) {
                  return error.id;
                });
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i7 = 0; _i7 < startEls.length; _i7++) {
              startEls[_i7].style.width = "".concat(startWidth, "px");
            }

            for (var _i8 = 0; _i8 < gapEls.length; _i8++) {
              gapEls[_i8].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the floating label should always float or not. */

        }, {
          key: "_shouldAlwaysFloat",
          get: function get() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          get: function get() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
        }, {
          key: "_labelChild",
          get: function get() {
            return this._labelChildNonStatic || this._labelChildStatic;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatError, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatHint, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPrefix, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatSuffix, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat)("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatError, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatHint, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatPrefix, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatSuffix, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatError, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatHint, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatPrefix, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatSuffix, {
              descendants: true
            }]
          }]
        });
      })();

      return MatFormField;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatFormFieldModule =
    /** @class */
    function () {
      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();

      return MatFormFieldModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=form-field.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
    \************************************************************************/

  /*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function () {
      return MAT_SELECT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return MAT_SELECT_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return MatSelectChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return MatSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return MatSelectTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return SELECT_ITEM_HEIGHT_EM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return SELECT_MULTIPLE_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return SELECT_PANEL_INDENT_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return SELECT_PANEL_MAX_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return SELECT_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return SELECT_PANEL_VIEWPORT_PADDING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return matSelectAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * The following are all the animations for the mat-select component, with each
     * const containing the metadata for one animation.
     *
     * The values below match the implementation of the AngularJS Material mat-select animation.
     * @docs-private
     */


    var _c0 = ["trigger"];
    var _c1 = ["panel"];

    function MatSelect_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
      }
    }

    function MatSelect_span_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
      }
    }

    function MatSelect_span_5_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
      }
    }

    function MatSelect_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_2_Template, 1, 0, undefined, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
      }
    }

    function MatSelect_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8._panelDoneAnimatingStream.next($event.toState);
        })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10._handleKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel");
      }
    }

    var _c2 = [[["mat-select-trigger"]], "*"];
    var _c3 = ["mat-select-trigger", "*"];
    var matSelectAnimations = {
      /**
       * This animation ensures the select's overlay panel animation (transformPanel) is called when
       * closing the select.
       * This is needed due to https://github.com/angular/angular/issues/23302
       */
      transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], {
        optional: true
      }))]),

      /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        transform: 'scaleY(0.8)',
        minWidth: '100%',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 64px)',
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an exception to be thrown when attempting to change a select's `multiple` option
     * after initialization.
     * @docs-private
     */

    function getMatSelectDynamicMultipleError() {
      return Error('Cannot change `multiple` mode of select after initialization.');
    }
    /**
     * Returns an exception to be thrown when attempting to assign a non-array value to a select
     * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
     * resetting the value.
     * @docs-private
     */


    function getMatSelectNonArrayValueError() {
      return Error('Value must be an array in multiple-selection mode.');
    }
    /**
     * Returns an exception to be thrown when assigning a non-function value to the comparator
     * used to determine if a value corresponds to an option. Note that whether the function
     * actually takes two values and returns a boolean is not checked.
     */


    function getMatSelectNonFunctionValueError() {
      return Error('`compareWith` must be a function.');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var nextUniqueId = 0;
    /**
     * The following style constants are necessary to save here in order
     * to properly calculate the alignment of the selected option over
     * the trigger element.
     */

    /** The max height of the select's overlay panel */

    var SELECT_PANEL_MAX_HEIGHT = 256;
    /** The panel's padding on the x-axis */

    var SELECT_PANEL_PADDING_X = 16;
    /** The panel's x axis padding if it is indented (e.g. there is an option group). */

    var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
    /** The height of the select items in `em` units. */

    var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

    /**
     * Distance between the panel edge and the option text in
     * multi-selection mode.
     *
     * Calculated as:
     * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
     * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
     * The checkbox width is 16px.
     */

    var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
    /**
     * The select panel will only "fit" inside the viewport if it is positioned at
     * this value or more away from the viewport boundary.
     */

    var SELECT_PANEL_VIEWPORT_PADDING = 8;
    /** Injection token that determines the scroll handling while a select is open. */

    var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
    /** @docs-private */

    function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.reposition();
      };
    }
    /** Injection token that can be used to provide the default options the select module. */


    var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
    /** @docs-private */

    var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /** Change event object that is emitted when the select value has changed. */

    var MatSelectChange = function MatSelectChange(
    /** Reference to the select that emitted the change event. */
    source,
    /** Current value of the select that emitted the event. */
    value) {
      _classCallCheck(this, MatSelectChange);

      this.source = source;
      this.value = value;
    }; // Boilerplate for applying mixins to MatSelect.

    /** @docs-private */


    var MatSelectBase = function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatSelectBase);

      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
    /**
     * Allows the user to customize the trigger that is displayed when the select has a value.
     */


    var MatSelectTrigger =
    /** @class */
    function () {
      var MatSelectTrigger = function MatSelectTrigger() {
        _classCallCheck(this, MatSelectTrigger);
      };

      MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
        return new (t || MatSelectTrigger)();
      };

      MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSelectTrigger,
        selectors: [["mat-select-trigger"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-select-trigger'
          }]
        }], null, null);
      })();

      return MatSelectTrigger;
    }();

    var MatSelect =
    /** @class */
    function () {
      var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
        _inherits(MatSelect, _MatSelectMixinBase2);

        var _super32 = _createSuper(MatSelect);

        function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
          var _this93;

          _classCallCheck(this, MatSelect);

          _this93 = _super32.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this93._viewportRuler = _viewportRuler;
          _this93._changeDetectorRef = _changeDetectorRef;
          _this93._ngZone = _ngZone;
          _this93._dir = _dir;
          _this93._parentFormField = _parentFormField;
          _this93.ngControl = ngControl;
          _this93._liveAnnouncer = _liveAnnouncer;
          /** Whether or not the overlay panel is open. */

          _this93._panelOpen = false;
          /** Whether filling out the select is required in the form. */

          _this93._required = false;
          /** The scroll position of the overlay panel, calculated to center the selected option. */

          _this93._scrollTop = 0;
          /** Whether the component is in multiple selection mode. */

          _this93._multiple = false;
          /** Comparison function to specify which option is displayed. Defaults to object equality. */

          _this93._compareWith = function (o1, o2) {
            return o1 === o2;
          };
          /** Unique id for this input. */


          _this93._uid = "mat-select-".concat(nextUniqueId++);
          /** Emits whenever the component is destroyed. */

          _this93._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /** The cached font-size of the trigger element. */

          _this93._triggerFontSize = 0;
          /** `View -> model callback called when value changes` */

          _this93._onChange = function () {};
          /** `View -> model callback called when select has been touched` */


          _this93._onTouched = function () {};
          /** The IDs of child options to be passed to the aria-owns attribute. */


          _this93._optionIds = '';
          /** The value of the select panel's transform-origin property. */

          _this93._transformOrigin = 'top';
          /** Emits when the panel element is finished transforming in. */

          _this93._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /**
           * The y-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text.
           * when the panel opens. Will change based on the y-position of the selected option.
           */

          _this93._offsetY = 0;
          /**
           * This position config ensures that the top "start" corner of the overlay
           * is aligned with with the top "start" of the origin by default (overlapping
           * the trigger completely). If the panel cannot fit below the trigger, it
           * will fall back to a position above the trigger.
           */

          _this93._positions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'bottom'
          }];
          /** Whether the component is disabling centering of the active option over the trigger. */

          _this93._disableOptionCentering = false;
          _this93._focused = false;
          /** A name for this control that can be used by `mat-form-field`. */

          _this93.controlType = 'mat-select';
          /** Aria label of the select. If not specified, the placeholder will be used as label. */

          _this93.ariaLabel = '';
          /** Combined stream of all of the child options' change events. */

          _this93.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(function () {
            var options = _this93.options;

            if (options) {
              return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(function (option) {
                  return option.onSelectionChange;
                })));
              }));
            }

            return _this93._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
              return _this93.optionSelectionChanges;
            }));
          });
          /** Event emitted when the select panel has been toggled. */

          _this93.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event emitted when the select has been opened. */

          _this93._openedStream = _this93.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the select has been closed. */

          _this93._closedStream = _this93.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the selected value has been changed by the user. */

          _this93.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the select changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this93.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

          if (_this93.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this93.ngControl.valueAccessor = _assertThisInitialized(_this93);
          }

          _this93._scrollStrategyFactory = scrollStrategyFactory;
          _this93._scrollStrategy = _this93._scrollStrategyFactory();
          _this93.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

          _this93.id = _this93.id;

          if (defaults) {
            if (defaults.disableOptionCentering != null) {
              _this93.disableOptionCentering = defaults.disableOptionCentering;
            }

            if (defaults.typeaheadDebounceInterval != null) {
              _this93.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
            }
          }

          return _this93;
        }
        /** Whether the select is focused. */


        _createClass(MatSelect, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this94 = this;

            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
            this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
            // fire the animation end event twice for the same animation. See:
            // https://github.com/angular/angular/issues/24084

            this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this94.panelOpen) {
                _this94._scrollTop = 0;

                _this94.openedChange.emit(true);
              } else {
                _this94.openedChange.emit(false);

                _this94.overlayDir.offsetX = 0;

                _this94._changeDetectorRef.markForCheck();
              }
            });

            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this94._panelOpen) {
                _this94._triggerRect = _this94.trigger.nativeElement.getBoundingClientRect();

                _this94._changeDetectorRef.markForCheck();
              }
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this95 = this;

            this._initKeyManager();

            this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function (event) {
              event.added.forEach(function (option) {
                return option.select();
              });
              event.removed.forEach(function (option) {
                return option.deselect();
              });
            });

            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              _this95._resetOptions();

              _this95._initializeSelection();
            });
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              this.updateErrorState();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
            // the parent form field know to run change detection when the disabled state changes.
            if (changes['disabled']) {
              this.stateChanges.next();
            }

            if (changes['typeaheadDebounceInterval'] && this._keyManager) {
              this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy.next();

            this._destroy.complete();

            this.stateChanges.complete();
          }
          /** Toggles the overlay panel open or closed. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.panelOpen ? this.close() : this.open();
          }
          /** Opens the overlay panel. */

        }, {
          key: "open",
          value: function open() {
            var _this96 = this;

            if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
              return;
            }

            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.

            this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
            this._panelOpen = true;

            this._keyManager.withHorizontalOrientation(null);

            this._calculateOverlayPosition();

            this._highlightCorrectOption();

            this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
              if (_this96._triggerFontSize && _this96.overlayDir.overlayRef && _this96.overlayDir.overlayRef.overlayElement) {
                _this96.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this96._triggerFontSize, "px");
              }
            });
          }
          /** Closes the overlay panel and focuses the host element. */

        }, {
          key: "close",
          value: function close() {
            if (this._panelOpen) {
              this._panelOpen = false;

              this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

              this._changeDetectorRef.markForCheck();

              this._onTouched();
            }
          }
          /**
           * Sets the select's value. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param value New value to be written to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.options) {
              this._setSelectionByValue(value);
            }
          }
          /**
           * Saves a callback function to be invoked when the select's value
           * changes from user input. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the value changes.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /**
           * Saves a callback function to be invoked when the select is blurred
           * by the user. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the component has been touched.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * Disables the select. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param isDisabled Sets whether the component is disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /** Whether or not the overlay panel is open. */

        }, {
          key: "_isRtl",

          /** Whether the element is in RTL mode. */
          value: function _isRtl() {
            return this._dir ? this._dir.value === 'rtl' : false;
          }
          /** Handles all keydown events on the select. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this.disabled) {
              this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
            }
          }
          /** Handles keyboard events while the select is closed. */

        }, {
          key: "_handleClosedKeydown",
          value: function _handleClosedKeydown(event) {
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
            var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
            var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

            if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
              event.preventDefault(); // prevents the page from scrolling down when pressing space

              this.open();
            } else if (!this.multiple) {
              var previouslySelectedOption = this.selected;

              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              } else {
                manager.onKeydown(event);
              }

              var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

              if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
              }
            }
          }
          /** Handles keyboard events when the selected is open. */

        }, {
          key: "_handleOpenKeydown",
          value: function _handleOpenKeydown(event) {
            var manager = this._keyManager;
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            var isTyping = manager.isTyping();

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
              event.preventDefault();
              keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
            } else if (isArrowKey && event.altKey) {
              // Close the select on ALT + arrow key to match the native <select>
              event.preventDefault();
              this.close(); // Don't do anything in this case if the user is typing,
              // because the typing sequence can include the space key.
            } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              event.preventDefault();

              manager.activeItem._selectViaInteraction();
            } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
              event.preventDefault();
              var hasDeselectedOptions = this.options.some(function (opt) {
                return !opt.disabled && !opt.selected;
              });
              this.options.forEach(function (option) {
                if (!option.disabled) {
                  hasDeselectedOptions ? option.select() : option.deselect();
                }
              });
            } else {
              var previouslyFocusedIndex = manager.activeItemIndex;
              manager.onKeydown(event);

              if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
              }
            }
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            if (!this.disabled) {
              this._focused = true;
              this.stateChanges.next();
            }
          }
          /**
           * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
           * "blur" to the panel when it opens, causing a false positive.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this._focused = false;

            if (!this.disabled && !this.panelOpen) {
              this._onTouched();

              this._changeDetectorRef.markForCheck();

              this.stateChanges.next();
            }
          }
          /**
           * Callback that is invoked when the overlay panel has been attached.
           */

        }, {
          key: "_onAttached",
          value: function _onAttached() {
            var _this97 = this;

            this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
              _this97._changeDetectorRef.detectChanges();

              _this97._calculateOverlayOffsetX();

              _this97.panel.nativeElement.scrollTop = _this97._scrollTop;
            });
          }
          /** Returns the theme to be used on the panel. */

        }, {
          key: "_getPanelTheme",
          value: function _getPanelTheme() {
            return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
          }
          /** Whether the select has a value. */

        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this98 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              _this98._setSelectionByValue(_this98.ngControl ? _this98.ngControl.value : _this98._value);

              _this98.stateChanges.next();
            });
          }
          /**
           * Sets the selected option based on a value. If no option can be
           * found with the designated value, the select trigger is cleared.
           */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this99 = this;

            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
              }

              this._selectionModel.clear();

              value.forEach(function (currentValue) {
                return _this99._selectValue(currentValue);
              });

              this._sortValues();
            } else {
              this._selectionModel.clear();

              var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what option the user interacted with last.


              if (correspondingOption) {
                this._keyManager.setActiveItem(correspondingOption);
              } else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.setActiveItem(-1);
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Finds and selects and option based on its value.
           * @returns Option that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this100 = this;

            var correspondingOption = this.options.find(function (option) {
              try {
                // Treat null as a special reset value.
                return option.value != null && _this100._compareWith(option.value, value);
              } catch (error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
                  // Notify developers of errors in their comparator.
                  console.warn(error);
                }

                return false;
              }
            });

            if (correspondingOption) {
              this._selectionModel.select(correspondingOption);
            }

            return correspondingOption;
          }
          /** Sets up a key manager to listen to keyboard events on the overlay panel. */

        }, {
          key: "_initKeyManager",
          value: function _initKeyManager() {
            var _this101 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this101.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!_this101.multiple && _this101._keyManager.activeItem) {
                  _this101._keyManager.activeItem._selectViaInteraction();
                } // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.


                _this101.focus();

                _this101.close();
              }
            });

            this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this101._panelOpen && _this101.panel) {
                _this101._scrollActiveOptionIntoView();
              } else if (!_this101._panelOpen && !_this101.multiple && _this101._keyManager.activeItem) {
                _this101._keyManager.activeItem._selectViaInteraction();
              }
            });
          }
          /** Drops current option subscriptions and IDs and resets from scratch. */

        }, {
          key: "_resetOptions",
          value: function _resetOptions() {
            var _this102 = this;

            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
            this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
              _this102._onSelect(event.source, event.isUserInput);

              if (event.isUserInput && !_this102.multiple && _this102._panelOpen) {
                _this102.close();

                _this102.focus();
              }
            }); // Listen to changes in the internal state of the options and react accordingly.
            // Handles cases like the labels of the selected options changing.

            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(function (option) {
              return option._stateChanges;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
              _this102._changeDetectorRef.markForCheck();

              _this102.stateChanges.next();
            });

            this._setOptionIds();
          }
          /** Invoked when an option is clicked. */

        }, {
          key: "_onSelect",
          value: function _onSelect(option, isUserInput) {
            var wasSelected = this._selectionModel.isSelected(option);

            if (option.value == null && !this._multiple) {
              option.deselect();

              this._selectionModel.clear();

              this._propagateChanges(option.value);
            } else {
              if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
              }

              if (isUserInput) {
                this._keyManager.setActiveItem(option);
              }

              if (this.multiple) {
                this._sortValues();

                if (isUserInput) {
                  // In case the user selected the option with their mouse, we
                  // want to restore focus back to the trigger, in order to
                  // prevent the select keyboard controls from clashing with
                  // the ones from `mat-option`.
                  this.focus();
                }
              }
            }

            if (wasSelected !== this._selectionModel.isSelected(option)) {
              this._propagateChanges();
            }

            this.stateChanges.next();
          }
          /** Sorts the selected values in the selected based on their order in the panel. */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this103 = this;

            if (this.multiple) {
              var options = this.options.toArray();

              this._selectionModel.sort(function (a, b) {
                return _this103.sortComparator ? _this103.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
              });

              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (this.multiple) {
              valueToEmit = this.selected.map(function (option) {
                return option.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

            this._changeDetectorRef.markForCheck();
          }
          /** Records option IDs to pass to the aria-owns property. */

        }, {
          key: "_setOptionIds",
          value: function _setOptionIds() {
            this._optionIds = this.options.map(function (option) {
              return option.id;
            }).join(' ');
          }
          /**
           * Highlights the selected item. If no option is selected, it will highlight
           * the first item instead.
           */

        }, {
          key: "_highlightCorrectOption",
          value: function _highlightCorrectOption() {
            if (this._keyManager) {
              if (this.empty) {
                this._keyManager.setFirstItemActive();
              } else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
              }
            }
          }
          /** Scrolls the active option into view. */

        }, {
          key: "_scrollActiveOptionIntoView",
          value: function _scrollActiveOptionIntoView() {
            var activeOptionIndex = this._keyManager.activeItemIndex || 0;
            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
            this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
          }
          /** Focuses the select element. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Gets the index of the provided option in the option list. */

        }, {
          key: "_getOptionIndex",
          value: function _getOptionIndex(option) {
            return this.options.reduce(function (result, current, index) {
              if (result !== undefined) {
                return result;
              }

              return option === current ? index : undefined;
            }, undefined);
          }
          /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

        }, {
          key: "_calculateOverlayPosition",
          value: function _calculateOverlayPosition() {
            var itemHeight = this._getItemHeight();

            var items = this._getItemCount();

            var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

            var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

            var selectedOptionOffset = this.empty ? 0 : this._getOptionIndex(this._selectionModel.selected[0]);
            selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.

            var scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

            this._checkOverlayWithinViewport(maxScroll);
          }
          /**
           * Calculates the scroll position of the select's overlay panel.
           *
           * Attempts to center the selected option in the panel. If the option is
           * too high or too low in the panel to be scrolled to the center, it clamps the
           * scroll position to the min or max scroll positions respectively.
           */

        }, {
          key: "_calculateOverlayScroll",
          value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionOffsetFromScrollTop = itemHeight * selectedIndex;
            var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
            // scroll container, then subtracts the scroll buffer to scroll the option down to
            // the center of the overlay panel. Half the option height must be re-added to the
            // scrollTop so the option is centered based on its middle, not its top edge.

            var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
            return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
          }
          /** Returns the aria-label of the select component. */

        }, {
          key: "_getAriaLabel",
          value: function _getAriaLabel() {
            // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
            // `aria-labelledby` value by setting the ariaLabel to the placeholder.
            return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
          }
          /** Returns the aria-labelledby of the select component. */

        }, {
          key: "_getAriaLabelledby",
          value: function _getAriaLabelledby() {
            if (this.ariaLabelledby) {
              return this.ariaLabelledby;
            } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
            // computed label. `this.ariaLabel` is only the user-specified label.


            if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
              return null;
            }

            return this._parentFormField._labelId || null;
          }
          /** Determines the `aria-activedescendant` to be set on the host. */

        }, {
          key: "_getAriaActiveDescendant",
          value: function _getAriaActiveDescendant() {
            if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
              return this._keyManager.activeItem.id;
            }

            return null;
          }
          /**
           * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text when
           * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
           * can't be calculated until the panel has been attached, because we need to know the
           * content width in order to constrain the panel within the viewport.
           */

        }, {
          key: "_calculateOverlayOffsetX",
          value: function _calculateOverlayOffsetX() {
            var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

            var viewportSize = this._viewportRuler.getViewportSize();

            var isRtl = this._isRtl();

            var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
            var offsetX; // Adjust the offset, depending on the option padding.

            if (this.multiple) {
              offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
            } else {
              var selected = this._selectionModel.selected[0] || this.options.first;
              offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
            } // Invert the offset in LTR.


            if (!isRtl) {
              offsetX *= -1;
            } // Determine how much the select overflows on each side.


            var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
            var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

            if (leftOverflow > 0) {
              offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } else if (rightOverflow > 0) {
              offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } // Set the offset directly in order to avoid having to go through change detection and
            // potentially triggering "changed after it was checked" errors. Round the value to avoid
            // blurry content in some browsers.


            this.overlayDir.offsetX = Math.round(offsetX);
            this.overlayDir.overlayRef.updatePosition();
          }
          /**
           * Calculates the y-offset of the select's overlay panel in relation to the
           * top start corner of the trigger. It has to be adjusted in order for the
           * selected option to be aligned over the trigger when the panel opens.
           */

        }, {
          key: "_calculateOverlayOffsetY",
          value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
            var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

            if (this._disableOptionCentering) {
              return 0;
            }

            if (this._scrollTop === 0) {
              optionOffsetFromPanelTop = selectedIndex * itemHeight;
            } else if (this._scrollTop === maxScroll) {
              var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
              var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
              // portion of it is shown in the viewport and account for it in our offset.

              var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
              // there is always extra padding at the top or bottom of the panel. When
              // scrolled to the very bottom, this padding is at the top of the panel and
              // must be added to the offset.

              optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
            } else {
              // If the option was scrolled to the middle of the panel using a scroll buffer,
              // its offset will be the scroll buffer minus the half height that was added to
              // center it.
              optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
            } // The final offset is the option's offset from the top, adjusted for the height difference,
            // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
            // The value is rounded to prevent some browsers from blurring the content.


            return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
          }
          /**
           * Checks that the attempted overlay position will fit within the viewport.
           * If it will not fit, tries to adjust the scroll position and the associated
           * y-offset so the panel can open fully on-screen. If it still won't fit,
           * sets the offset back to 0 to allow the fallback position to take over.
           */

        }, {
          key: "_checkOverlayWithinViewport",
          value: function _checkOverlayWithinViewport(maxScroll) {
            var itemHeight = this._getItemHeight();

            var viewportSize = this._viewportRuler.getViewportSize();

            var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
            var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
            var panelHeightTop = Math.abs(this._offsetY);
            var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

            if (panelHeightBottom > bottomSpaceAvailable) {
              this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
            } else if (panelHeightTop > topSpaceAvailable) {
              this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
            } else {
              this._transformOrigin = this._getOriginBasedOnOption();
            }
          }
          /** Adjusts the overlay panel up to fit in the viewport. */

        }, {
          key: "_adjustPanelUp",
          value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel up into the viewport.

            this._scrollTop -= distanceBelowViewport;
            this._offsetY -= distanceBelowViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
            // by scrolling, so set the offset to 0 to allow the fallback position to take
            // effect.

            if (this._scrollTop <= 0) {
              this._scrollTop = 0;
              this._offsetY = 0;
              this._transformOrigin = "50% bottom 0px";
            }
          }
          /** Adjusts the overlay panel down to fit in the viewport. */

        }, {
          key: "_adjustPanelDown",
          value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel down into the viewport.

            this._scrollTop += distanceAboveViewport;
            this._offsetY += distanceAboveViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
            // panel by scrolling, so set the offset to 0 to allow the fallback position
            // to take effect.

            if (this._scrollTop >= maxScroll) {
              this._scrollTop = maxScroll;
              this._offsetY = 0;
              this._transformOrigin = "50% top 0px";
              return;
            }
          }
          /** Sets the transform origin point based on the selected option. */

        }, {
          key: "_getOriginBasedOnOption",
          value: function _getOriginBasedOnOption() {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
            return "50% ".concat(originY, "px 0px");
          }
          /** Calculates the amount of items in the select. This includes options and group labels. */

        }, {
          key: "_getItemCount",
          value: function _getItemCount() {
            return this.options.length + this.optionGroups.length;
          }
          /** Calculates the height of the select's options. */

        }, {
          key: "_getItemHeight",
          value: function _getItemHeight() {
            return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
            this.open();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "focused",
          get: function get() {
            return this._focused || this._panelOpen;
          }
          /** Placeholder to be shown if no value has been selected. */

        }, {
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether the component is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /** Whether the user should be allowed to select multiple options. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            if (this._selectionModel) {
              throw getMatSelectDynamicMultipleError();
            }

            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /** Whether to center the active option over the trigger. */

        }, {
          key: "disableOptionCentering",
          get: function get() {
            return this._disableOptionCentering;
          },
          set: function set(value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /**
           * Function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            if (typeof fn !== 'function') {
              throw getMatSelectNonFunctionValueError();
            }

            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /** Value of the select control. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (newValue !== this._value) {
              this.writeValue(newValue);
              this._value = newValue;
            }
          }
          /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

        }, {
          key: "typeaheadDebounceInterval",
          get: function get() {
            return this._typeaheadDebounceInterval;
          },
          set: function set(value) {
            this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
          }
          /** Unique id of the element. */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
            this.stateChanges.next();
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._panelOpen;
          }
          /** The currently selected option. */

        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The value displayed in the trigger. */

        }, {
          key: "triggerValue",
          get: function get() {
            if (this.empty) {
              return '';
            }

            if (this._multiple) {
              var selectedOptions = this._selectionModel.selected.map(function (option) {
                return option.viewValue;
              });

              if (this._isRtl()) {
                selectedOptions.reverse();
              } // TODO(crisbeto): delimiter should be configurable for proper localization.


              return selectedOptions.join(', ');
            }

            return this._selectionModel.selected[0].viewValue;
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._selectionModel || this._selectionModel.isEmpty();
          }
        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this._panelOpen || !this.empty;
          }
        }]);

        return MatSelect;
      }(_MatSelectMixinBase);

      MatSelect.ɵfac = function MatSelect_Factory(t) {
        return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
      };

      MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatSelect,
        selectors: [["mat-select"]],
        contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatSelectTrigger, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        viewQuery: function MatSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
          }
        },
        hostAttrs: ["role", "listbox", 1, "mat-select"],
        hostVars: 19,
        hostBindings: function MatSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatSelect_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSelect_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-label", ctx._getAriaLabel())("aria-labelledby", ctx._getAriaLabelledby())("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-owns", ctx.panelOpen ? ctx._optionIds : null)("aria-multiselectable", ctx.multiple)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          ariaLabel: ["aria-label", "ariaLabel"],
          id: "id",
          disableOptionCentering: "disableOptionCentering",
          typeaheadDebounceInterval: "typeaheadDebounceInterval",
          placeholder: "placeholder",
          required: "required",
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          panelClass: "panelClass",
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          errorStateMatcher: "errorStateMatcher",
          sortComparator: "sortComparator"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          _closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange"
        },
        exportAs: ["matSelect"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatSelect
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 9,
        vars: 9,
        consts: [["cdk-overlay-origin", "", "aria-hidden", "true", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], [3, "ngClass", "keydown"], ["panel", ""]],
        template: function MatSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 11, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
              return ctx.close();
            })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
              return ctx._onAttached();
            })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
              return ctx.close();
            });
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
          }
        },
        directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
        encapsulation: 2,
        data: {
          animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
        },
        changeDetection: 0
      });

      MatSelect.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_CONFIG]
          }]
        }];
      };

      MatSelect.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatSelectTrigger]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disableOptionCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        typeaheadDebounceInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-select',
            exportAs: 'matSelect',
            template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     aria-hidden=\"true\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      [attr.id]=\"id + '-panel'\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
              'role': 'listbox',
              '[attr.id]': 'id',
              '[attr.tabindex]': 'tabIndex',
              '[attr.aria-label]': '_getAriaLabel()',
              '[attr.aria-labelledby]': '_getAriaLabelledby()',
              '[attr.aria-required]': 'required.toString()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
              '[class.mat-select-disabled]': 'disabled',
              '[class.mat-select-invalid]': 'errorState',
              '[class.mat-select-required]': 'required',
              '[class.mat-select-empty]': 'empty',
              'class': 'mat-select',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()'
            },
            animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
              useExisting: MatSelect
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatSelect
            }],
            styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_CONFIG]
            }]
          }];
        }, {
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
          }],
          _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger']
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }],
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
              descendants: true
            }]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatSelectTrigger]
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      return MatSelect;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatSelectModule =
    /** @class */
    function () {
      var MatSelectModule = function MatSelectModule() {
        _classCallCheck(this, MatSelectModule);
      };

      MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatSelectModule
      });
      MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatSelectModule_Factory(t) {
          return new (t || MatSelectModule)();
        },
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, {
          declarations: function declarations() {
            return [MatSelect, MatSelectTrigger];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatSelect, MatSelectTrigger],
            providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();

      return MatSelectModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=select.js.map

    /***/

  },

  /***/
  "./src/app/components/model-display/model-display.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/model-display/model-display.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ModelDisplayComponent */

  /***/
  function srcAppComponentsModelDisplayModelDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelDisplayComponent", function () {
      return ModelDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_warhammer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/warhammer-service */
    "./src/app/services/warhammer-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ModelDisplayComponent_mat_card_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelDisplayComponent_mat_card_0_div_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.changeUnitSize.emit({
            type: ctx_r3.unitType,
            value: unit_r1,
            direction: true
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelDisplayComponent_mat_card_0_div_9_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.changeUnitSize.emit({
            type: ctx_r6.unitType,
            value: unit_r1,
            direction: false
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", unit_r1.squadSize === unit_r1.maxSquadSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", unit_r1.squadSize === unit_r1.minSquadSize);
      }
    }

    function ModelDisplayComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModelDisplayComponent_mat_card_0_div_9_Template, 5, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelDisplayComponent_mat_card_0_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var unit_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.removeUnit.emit({
            type: ctx_r9.unitType,
            value: unit_r1
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var unit_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Points: ", ctx_r0.warhammerService.getTotalPoints(unit_r1), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Squad Size: ", unit_r1.squadSize, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", unit_r1.maxSquadSize !== unit_r1.minSquadSize);
      }
    }

    var ModelDisplayComponent = function ModelDisplayComponent(warhammerService) {
      _classCallCheck(this, ModelDisplayComponent);

      this.warhammerService = warhammerService;
      this.removeUnit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.changeUnitSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ModelDisplayComponent.ɵfac = function ModelDisplayComponent_Factory(t) {
      return new (t || ModelDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warhammer_service__WEBPACK_IMPORTED_MODULE_1__["WarHammerService"]));
    };

    ModelDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModelDisplayComponent,
      selectors: [["model-display-component"]],
      inputs: {
        unitList: "unitList",
        unitType: "unitType"
      },
      outputs: {
        removeUnit: "removeUnit",
        changeUnitSize: "changeUnitSize"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "unit-display", 4, "ngFor", "ngForOf"], [1, "unit-display"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function ModelDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelDisplayComponent_mat_card_0_Template, 12, 4, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unitList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".unit-display[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbC1kaXNwbGF5L21vZGVsLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWwtZGlzcGxheS9tb2RlbC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaXQtZGlzcGxheSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'model-display-component',
          templateUrl: './model-display.component.html',
          styleUrls: ['./model-display.component.scss']
        }]
      }], function () {
        return [{
          type: _services_warhammer_service__WEBPACK_IMPORTED_MODULE_1__["WarHammerService"]
        }];
      }, {
        unitList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeUnit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeUnitSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/paths/home/home-component/home.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/paths/home/home-component/home.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPathsHomeHomeComponentHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_warhammer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/warhammer-service */
    "./src/app/services/warhammer-service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_model_display_model_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/model-display/model-display.component */
    "./src/app/components/model-display/model-display.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function HomeComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hqUnit_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hqUnit_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hqUnit_r4.name);
      }
    }

    function HomeComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var troopUnit_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", troopUnit_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](troopUnit_r5.name);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http, warhammerService) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.warhammerService = warhammerService;
        this.armyList = {
          hqChoices: [],
          eliteChoices: [],
          troopChoices: [],
          fastAttackChoices: [],
          heavyChoices: [],
          flyerChoices: [],
          transportChoices: []
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this104 = this;

          var join = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.http.get('/assets/points-lists/ranged-weapons.json'), this.http.get('/assets/points-lists/melee-weapons.json'), this.http.get('/assets/points-lists/equipment.json'), this.http.get('/assets/points-lists/space-marine-hq.json'), this.http.get('/assets/points-lists/space-marine-troops.json')]);
          join.subscribe(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 5),
                rangedWeapons = _ref4[0],
                meleeWeapons = _ref4[1],
                equipment = _ref4[2],
                spaceMarineHq = _ref4[3],
                spaceMarineTroops = _ref4[4];

            _this104.rangedWeapons = rangedWeapons;
            _this104.meleeWeapons = meleeWeapons;
            _this104.equipment = equipment;
            _this104.spaceMarineHq = _this104.getData(spaceMarineHq);
            _this104.spaceMarineTroops = _this104.getData(spaceMarineTroops);
          });
        }
      }, {
        key: "getData",
        value: function getData(unitType) {
          var _this105 = this;

          return unitType.map(function (model) {
            var gearOptions = ['rangedGear', 'meleeGear', 'equipment'];
            var dataOptions = ['rangedWeapons', 'meleeWeapons', 'equipment'];
            gearOptions.forEach(function (option, index) {
              if (model[option].length) {
                model[option] = model[option].map(function (potentialItem) {
                  potentialItem.data = _this105[dataOptions[index]].find(function (item) {
                    return item.id === potentialItem.id;
                  });
                  return potentialItem;
                });
              }
            });
            return model;
          }).sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "addUnit",
        value: function addUnit(type, value) {
          // give each item in the armylist  unique ID so that when an item is removed
          // the correct one is removed instead of which ever comes first in the array
          var newValue = Object.assign({}, value);
          newValue.listId = this.armyList[type].length > 0 ? this.armyList[type][this.armyList[type].length - 1].listId + 1 : 1;
          this.armyList[type].push(newValue);
          this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
        }
      }, {
        key: "removeUnit",
        value: function removeUnit(event) {
          var type = event.type,
              value = event.value;
          var oldIndex = this.armyList[type].findIndex(function (item) {
            return item.listId === value.listId;
          });
          this.armyList[type].splice(oldIndex, 1);
          this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
        }
      }, {
        key: "changeUnitSize",
        value: function changeUnitSize(event) {
          var type = event.type,
              value = event.value,
              direction = event.direction;
          this.armyList[type].forEach(function (item) {
            if (item.listId === value.listId) {
              direction ? item.squadSize++ : item.squadSize--;
              return;
            }
          });
          this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warhammer_service__WEBPACK_IMPORTED_MODULE_3__["WarHammerService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home-component"]],
      decls: 28,
      vars: 9,
      consts: [["appearance", "fill"], ["hqSelector", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "unitList", "unitType", "removeUnit", "changeUnitSize"], ["troopSelector", ""], [3, "value"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HQ Choices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HQ Choices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_mat_option_10_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.addUnit("hqChoices", _r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "model-display-component", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeUnit", function HomeComponent_Template_model_display_component_removeUnit_13_listener($event) {
            return ctx.removeUnit($event);
          })("changeUnitSize", function HomeComponent_Template_model_display_component_changeUnitSize_13_listener($event) {
            return ctx.changeUnitSize($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Troop Choices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Troop Choices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_mat_option_24_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return ctx.addUnit("troopChoices", _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "model-display-component", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeUnit", function HomeComponent_Template_model_display_component_removeUnit_27_listener($event) {
            return ctx.removeUnit($event);
          })("changeUnitSize", function HomeComponent_Template_model_display_component_changeUnitSize_27_listener($event) {
            return ctx.changeUnitSize($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Army: ", ctx.totalArmyPoints, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.value == null ? null : _r0.value.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spaceMarineHq);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitList", ctx.armyList.hqChoices)("unitType", "hqChoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r2.value == null ? null : _r2.value.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spaceMarineTroops);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitList", ctx.armyList.troopChoices)("unitType", "troopChoices");
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _components_model_display_model_display_component__WEBPACK_IMPORTED_MODULE_8__["ModelDisplayComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: [".unit-display[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvaG9tZS9ob21lLWNvbXBvbmVudC9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9ob21lL2hvbWUtY29tcG9uZW50L2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5pdC1kaXNwbGF5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home-component',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_warhammer_service__WEBPACK_IMPORTED_MODULE_3__["WarHammerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/paths/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/paths/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppPathsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-component/home.component */
    "./src/app/paths/home/home-component/home.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_model_display_model_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/model-display/model-display.component */
    "./src/app/components/model-display/model-display.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_model_display_model_display_component__WEBPACK_IMPORTED_MODULE_9__["ModelDisplayComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
          }])],
          declarations: [_home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_model_display_model_display_component__WEBPACK_IMPORTED_MODULE_9__["ModelDisplayComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=paths-home-home-module-es5.js.map