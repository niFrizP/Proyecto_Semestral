(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills"],{

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone-flags */ 8270);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zone_flags__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ 3484);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 8270:
/*!***************************!*\
  !*** ./src/zone-flags.ts ***!
  \***************************/
/***/ (() => {

/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */
// eslint-disable-next-line no-underscore-dangle
window.__Zone_disable_customElements = true;


/***/ }),

/***/ 3484:
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */


(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function () {
  'use strict';
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  (function (global) {
    var performance = global['performance'];

    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }

    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }

    mark('Zone'); // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.

    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

    if (global['Zone']) {
      // if global['Zone'] already exists (maybe zone.js was already loaded or
      // some other lib also registered a global object named Zone), we may need
      // to throw an error, but sometimes user may not want this error.
      // For example,
      // we have two web pages, page1 includes zone.js, page2 doesn't.
      // and the 1st time user load page1 and page2, everything work fine,
      // but when user load page2 again, error occurs because global['Zone'] already exists.
      // so we add a flag to let user choose whether to throw this error or not.
      // By default, if existing Zone is from zone.js, we will not throw the error.
      if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
        throw new Error('Zone already loaded.');
      } else {
        return global['Zone'];
      }
    }

    var Zone =
    /** @class */
    function () {
      function Zone(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }

      Zone.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };

      Object.defineProperty(Zone, "root", {
        get: function () {
          var zone = Zone.current;

          while (zone.parent) {
            zone = zone.parent;
          }

          return zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "current", {
        get: function () {
          return _currentZoneFrame.zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function () {
          return _currentTask;
        },
        enumerable: false,
        configurable: true
      }); // tslint:disable-next-line:require-internal-with-underscore

      Zone.__load_patch = function (name, fn, ignoreDuplicate) {
        if (ignoreDuplicate === void 0) {
          ignoreDuplicate = false;
        }

        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      };

      Object.defineProperty(Zone.prototype, "parent", {
        get: function () {
          return this._parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function () {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });

      Zone.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };

      Zone.prototype.getZoneWith = function (key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      };

      Zone.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };

      Zone.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };

      Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }

        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };

      Zone.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      };

      Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };

      Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      };

      Zone.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };

      return Zone;
    }(); // tslint:disable-next-line:require-internal-with-underscore


    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function (delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function (delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function (delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };

    var _ZoneDelegate =
    /** @class */
    function () {
      function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = zone;

          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this.zone;
          }
        }
      }

      _ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };

      _ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };

      _ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };

      _ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      };

      _ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      };

      _ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      }; // tslint:disable-next-line:require-internal-with-underscore


      _ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      };

      return _ZoneDelegate;
    }();

    var ZoneTask =
    /** @class */
    function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

        this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;

        if (!callback) {
          throw new Error('callback is not defined');
        }

        this.callback = callback;
        var self = this; // TODO: @JiaLiPassion options should have interface

        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }

      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      };

      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function () {
          return this._zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function () {
          return this._state;
        },
        enumerable: false,
        configurable: true
      });

      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
        }
      };

      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      }; // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)


      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };

      return ZoneTask;
    }(); //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var symbolSetTimeout = __symbol__('setTimeout');

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;

    function nativeScheduleMicroTask(func) {
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }

      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }

        nativeThen.call(nativeMicroTaskQueuePromise, func);
      } else {
        global[symbolSetTimeout](func, 0);
      }
    }

    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        nativeScheduleMicroTask(drainMicroTaskQueue);
      }

      task && _microTaskQueue.push(task);
    }

    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;

        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];

          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];

            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }

        _api.microtaskDrainDone();

        _isDrainingMicrotaskQueue = false;
      }
    } //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
    var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function () {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function () {
        return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function () {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function () {
        return noop;
      },
      bindArguments: function () {
        return [];
      },
      patchThen: function () {
        return noop;
      },
      patchMacroTask: function () {
        return noop;
      },
      patchEventPrototype: function () {
        return noop;
      },
      isIEOrEdge: function () {
        return false;
      },
      getGlobalObjects: function () {
        return undefined;
      },
      ObjectDefineProperty: function () {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function () {
        return undefined;
      },
      ObjectCreate: function () {
        return undefined;
      },
      ArraySlice: function () {
        return [];
      },
      patchClass: function () {
        return noop;
      },
      wrapWithCurrentZone: function () {
        return noop;
      },
      filterProperties: function () {
        return [];
      },
      attachOriginToPatched: function () {
        return noop;
      },
      _redefineProperty: function () {
        return noop;
      },
      patchCallbacks: function () {
        return noop;
      },
      nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new Zone(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;

    function noop() {}

    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
  })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  /// <reference types="node"/>
  // issue #989, to reduce bundle size, use short name

  /** Object.getOwnPropertyDescriptor */


  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */

  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */

  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */

  var ObjectCreate = Object.create;
  /** Array.prototype.slice */

  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */

  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */

  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */

  var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */


  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */


  var TRUE_STR = 'true';
  /** false string const */

  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */

  var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }

  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }

  var zoneSymbol$1 = Zone.__symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;

  var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

  var REMOVE_ATTRIBUTE = 'removeAttribute';

  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }

    return args;
  }

  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];

    var _loop_1 = function (i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];

      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);

        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }

        prototype[name_1] = function (delegate) {
          var patched = function () {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };

          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };

    for (var i = 0; i < fnNames.length; i++) {
      _loop_1(i);
    }
  }

  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }

  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames$1 = {};

  var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    }

    var eventNameSymbol = zoneSymbolEventNames$1[event.type];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol$1('ON_PROPERTY' + event.type);
    }

    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;

    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signature
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);

      if (result != undefined && !result) {
        event.preventDefault();
      }
    }

    return result;
  };

  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    } // if the descriptor not exists or is not configurable
    // just return


    if (!desc || !desc.configurable) {
      return;
    }

    var onPropPatchedSymbol = zoneSymbol$1('on' + prop + 'patched');

    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    } // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified


    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set; // slice(2) cuz 'onclick' -> 'click', etc

    var eventName = prop.slice(2);
    var eventNameSymbol = zoneSymbolEventNames$1[eventName];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol$1('ON_PROPERTY' + eventName);
    }

    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return;
      }

      var previousValue = target[eventNameSymbol];

      if (typeof previousValue === 'function') {
        target.removeEventListener(eventName, wrapFn);
      } // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet


      originalDescSet && originalDescSet.call(target, null);
      target[eventNameSymbol] = newValue;

      if (typeof newValue === 'function') {
        target.addEventListener(eventName, wrapFn, false);
      }
    }; // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null


    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return null;
      }

      var listener = target[eventNameSymbol];

      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet.call(this);

        if (value) {
          desc.set.call(this, value);

          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }

          return value;
        }
      }

      return null;
    };

    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }

  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];

      for (var prop in obj) {
        if (prop.slice(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }

      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }

  var originalInstanceKey = zoneSymbol$1('originalInstance'); // wrap some native API on `window`

  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return; // keep original class in global

    _global[zoneSymbol$1(className)] = OriginalClass;

    _global[className] = function () {
      var a = bindArguments(arguments, className);

      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;

        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;

        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;

        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;

        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;

        default:
          throw new Error('Arg list too long.');
      }
    }; // attach original delegate to patched function


    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;

    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function (fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.

                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function () {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }

    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }

  function patchMethod(target, name, patchFn) {
    var proto = target;

    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }

    var delegateName = zoneSymbol$1(name);
    var delegate = null;

    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
      delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);

        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };

        attachOriginToPatched(proto[name], delegate);
      }
    }

    return delegate;
  } // TODO: @JiaLiPassion, support cancel task later if necessary


  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;

    function scheduleTask(task) {
      var data = task.data;

      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };

      setNative.apply(data.target, data.args);
      return task;
    }

    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);

        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }

  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol$1('OriginalDelegate')] = original;
  }

  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;

  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}

    return false;
  }

  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }

    isDetectedIEOrEdge = true;

    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}

    return ieOrEdge;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;

    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        var className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }

      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }

    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var creationTrace = '__creationTrace__';

    api.onUnhandledError = function (e) {
      if (api.showUncaughtError()) {
        var rejection = e && e.rejection;

        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };

    api.microtaskDrainDone = function () {
      var _loop_2 = function () {
        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

        try {
          uncaughtPromiseError.zone.runGuarded(function () {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }

            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      };

      while (_uncaughtPromiseErrors.length) {
        _loop_2();
      }
    };

    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);

      try {
        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }

    function isThenable(value) {
      return value && value.then;
    }

    function forwardResolution(value) {
      return value;
    }

    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }

    var symbolState = __symbol__('state');

    var symbolValue = __symbol__('value');

    var symbolFinally = __symbol__('finally');

    var symbolParentPromiseValue = __symbol__('parentPromiseValue');

    var symbolParentPromiseState = __symbol__('parentPromiseState');

    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;

    function makeResolver(promise, state) {
      return function (v) {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        } // Do not return value or you will break the Promise spec.

      };
    }

    var once = function () {
      var wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }

          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };

    var TYPE_ERROR = 'Promise resolved with itself';

    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


    function resolvePromise(promise, state, value) {
      var onceWrapper = once();

      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }

      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        var then = null;

        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
          return promise;
        } // if (value instanceof ZoneAwarePromise) {


        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;

          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          } // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace


          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }

          for (var i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }

          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            var uncaughtPromiseError = value;

            try {
              // Here we throws a new Error to print more readable error log
              // and if the value is not an error, zone.js builds an `Error`
              // Object here to attach the stack information.
              throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
            } catch (err) {
              uncaughtPromiseError = err;
            }

            if (isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // use the value instead of wrapping it.
              uncaughtPromiseError.throwOriginal = true;
            }

            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;

            _uncaughtPromiseErrors.push(uncaughtPromiseError);

            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      } // Resolving an already resolved promise is a noop.


      return promise;
    }

    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          var handler = Zone[REJECTION_HANDLED_HANDLER];

          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}

        promise[symbolState] = REJECTED;

        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }

    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var promiseState = promise[symbolState];
      var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, function () {
        try {
          var parentPromiseValue = promise[symbolValue];
          var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          } // should not pass value to finally callback


          var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }

    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

    var noop = function () {};

    var AggregateError = global.AggregateError;

    var ZoneAwarePromise =
    /** @class */
    function () {
      function ZoneAwarePromise(executor) {
        var promise = this;

        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }

        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;

        try {
          var onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }

      ZoneAwarePromise.toString = function () {
        return ZONE_AWARE_PROMISE_TO_STRING;
      };

      ZoneAwarePromise.resolve = function (value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };

      ZoneAwarePromise.reject = function (error) {
        return resolvePromise(new this(null), REJECTED, error);
      };

      ZoneAwarePromise.any = function (values) {
        if (!values || typeof values[Symbol.iterator] !== 'function') {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var promises = [];
        var count = 0;

        try {
          for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        if (count === 0) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var finished = false;
        var errors = [];
        return new ZoneAwarePromise(function (resolve, reject) {
          for (var i = 0; i < promises.length; i++) {
            promises[i].then(function (v) {
              if (finished) {
                return;
              }

              finished = true;
              resolve(v);
            }, function (err) {
              errors.push(err);
              count--;

              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, 'All promises were rejected'));
              }
            });
          }
        });
      };

      ;

      ZoneAwarePromise.race = function (values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];

          if (!isThenable(value)) {
            value = this.resolve(value);
          }

          value.then(onResolve, onReject);
        }

        return promise;
      };

      ZoneAwarePromise.all = function (values) {
        return ZoneAwarePromise.allWithCallback(values);
      };

      ZoneAwarePromise.allSettled = function (values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function (value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function (err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      };

      ZoneAwarePromise.allWithCallback = function (values, callback) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _loop_3 = function (value) {
          if (!isThenable(value)) {
            value = this_1.resolve(value);
          }

          var curValueIndex = valueIndex;

          try {
            value.then(function (value) {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, function (err) {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }

          unresolvedCount++;
          valueIndex++;
        };

        var this_1 = this;

        for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
          var value = values_3[_i];

          _loop_3(value);
        } // Make the unresolvedCount zero-based again.


        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      };

      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
        get: function () {
          return 'Promise';
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
        get: function () {
          return ZoneAwarePromise;
        },
        enumerable: false,
        configurable: true
      });

      ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
        var _a; // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
        // may be an object without a prototype (created through `Object.create(null)`); thus
        // `this.constructor` will be undefined. One of the use cases is SystemJS creating
        // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
        // object and copies promise properties into that object (within the `getOrCreateLoad`
        // function). The zone.js then checks if the resolved value has the `then` method and invokes
        // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
        // properties of undefined (reading 'Symbol(Symbol.species)')`.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      };

      ZoneAwarePromise.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
      };

      ZoneAwarePromise.prototype.finally = function (onFinally) {
        var _a; // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      };

      return ZoneAwarePromise;
    }(); // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.


    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;

    var symbolThenPatched = __symbol__('thenPatched');

    function patchThen(Ctor) {
      var proto = Ctor.prototype;
      var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }

      var originalThen = proto.then; // Keep a reference to the original method.

      proto[symbolThen] = originalThen;

      Ctor.prototype.then = function (onResolve, onReject) {
        var _this = this;

        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
          originalThen.call(_this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };

      Ctor[symbolThenPatched] = true;
    }

    api.patchThen = patchThen;

    function zoneify(fn) {
      return function (self, args) {
        var resultPromise = fn.apply(self, args);

        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }

        var ctor = resultPromise.constructor;

        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }

        return resultPromise;
      };
    }

    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global, 'fetch', function (delegate) {
        return zoneify(delegate);
      });
    } // This is not part of public API, but it is useful for tests, so we expose it.


    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // override Function.prototype.toString to make zone.js patched function
  // look like native function


  Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol$1('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol$1('Promise');
    var ERROR_SYMBOL = zoneSymbol$1('Error');

    var newFunctionToString = function toString() {
      if (typeof this === 'function') {
        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }

        if (this === Promise) {
          var nativePromise = global[PROMISE_SYMBOL];

          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }

        if (this === Error) {
          var nativeError = global[ERROR_SYMBOL];

          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }

      return originalFunctionToString.call(this);
    };

    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';

    Object.prototype.toString = function () {
      if (typeof Promise === 'function' && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }

      return originalObjectToString.call(this);
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var passiveSupported = false;

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function () {
          passiveSupported = true;
        }
      }); // Note: We pass the `options` object as the event handler too. This is not compatible with the
      // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
      // without an actual handler.

      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  } // an identifier to tell ZoneTask do not create a new invoke closure


  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol$1('propagationStopped');

  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  function patchEventTarget(_global, api, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol$1(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

    var invokeTask = function (task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }

      var delegate = task.callback;

      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };

        task.originalDelegate = delegate;
      } // invoke static task.invoke
      // need to try/catch error here, otherwise, the error in one event listener
      // will break the executions of the other event listeners. Also error will
      // not remove the event listener when `once` options is true.


      var error;

      try {
        task.invoke(task, target, [event]);
      } catch (err) {
        error = err;
      }

      var options = task.options;

      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }

      return error;
    };

    function globalCallback(context, event, isCapture) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = context || event.target || _global;
      var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];

      if (tasks) {
        var errors = []; // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke

        if (tasks.length === 1) {
          var err = invokeTask(tasks[0], target, event);
          err && errors.push(err);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            var err = invokeTask(copyTasks[i], target, event);
            err && errors.push(err);
          }
        } // Since there is only one error, we don't need to schedule microTask
        // to throw the error.


        if (errors.length === 1) {
          throw errors[0];
        } else {
          var _loop_4 = function (i) {
            var err = errors[i];
            api.nativeScheduleMicroTask(function () {
              throw err;
            });
          };

          for (var i = 0; i < errors.length; i++) {
            _loop_4(i);
          }
        }
      }
    } // global shared zoneAwareCallback to handle all event callback with capture = false


    var globalZoneAwareCallback = function (event) {
      return globalCallback(this, event, false);
    }; // global shared zoneAwareCallback to handle all event callback with capture = true


    var globalZoneAwareCaptureCallback = function (event) {
      return globalCallback(this, event, true);
    };

    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }

      var useGlobalCallback = true;

      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }

      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;

      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }

      var returnTarget = false;

      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }

      var proto = obj;

      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }

      if (!proto) {
        return false;
      }

      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }

      var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
      // so we do not need to create a new object just for pass some data

      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol$1(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol$1(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol$1(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;

      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol$1(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */


      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }

        if (!passiveSupported || !passive) {
          return options;
        }

        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }

        if (!options) {
          return {
            passive: true
          };
        }

        if (typeof options === 'object' && options.passive !== false) {
          return Object.assign(Object.assign({}, options), {
            passive: true
          });
        }

        return options;
      }

      var customScheduleGlobal = function (task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }

        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };

      var customCancelGlobal = function (task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames[task.eventName];
          var symbolEventName = void 0;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && task.target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (existingTask === task) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                task.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }

                break;
              }
            }
          }
        } // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return


        if (!task.allRemoved) {
          return;
        }

        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };

      var customScheduleNonGlobal = function (task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customSchedulePrepend = function (task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customCancelNonGlobal = function (task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };

      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

      var compareTaskCallbackVsDelegate = function (task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };

      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var unpatchedEvents = Zone[zoneSymbol$1('UNPATCHED_EVENTS')];

      var passiveEvents = _global[zoneSymbol$1('PASSIVE_EVENTS')];

      var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }

        if (prepend === void 0) {
          prepend = false;
        }

        return function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }

          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          } // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke


          var isHandleEvent = false;

          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }

            isHandleEvent = true;
          }

          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }

          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = buildEventListenerOptions(arguments[2], passive);

          if (unpatchedEvents) {
            // check unpatched list
            for (var i = 0; i < unpatchedEvents.length; i++) {
              if (eventName === unpatchedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }

          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames[eventName];
          }

          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;

          if (existingTasks) {
            // already have task registered
            isExisting = true;

            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }

          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];

          if (targetSource) {
            source = targetSource[eventName];
          }

          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          } // do not create a new object as task.data to pass those things
          // just use the global shared one


          taskData.options = options;

          if (once) {
            // if addEventListener with once options, we don't pass it to
            // native addEventListener, instead we keep the once setting
            // and handle ourselves.
            taskData.options.once = false;
          }

          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

          if (data) {
            data.taskData = taskData;
          }

          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442

          taskData.target = null; // need to clear up taskData because it is a global object

          if (data) {
            data.taskData = null;
          } // have to save those information to task in case
          // application may call task.zone.cancelTask() directly


          if (once) {
            options.once = true;
          }

          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }

          task.target = target;
          task.capture = capture;
          task.eventName = eventName;

          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }

          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }

          if (returnTarget) {
            return target;
          }
        };
      };

      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }

      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];

        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }

        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }

        var symbolEventNames = zoneSymbolEventNames[eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              existingTask.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates all removed

                if (typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }

              existingTask.zone.cancelTask(existingTask);

              if (returnTarget) {
                return target;
              }

              return;
            }
          }
        } // issue 930, didn't find the event name or callback
        // from zone kept existingTasks, the callback maybe
        // added outside of zone, we need to call native removeEventListener
        // to try to remove it.


        return nativeRemoveEventListener.apply(this, arguments);
      };

      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }

        return listeners;
      };

      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (!eventName) {
          var keys = Object.keys(target);

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed

            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          } // remove removeListener listener finally


          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];

            if (tasks) {
              var removeTasks = tasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }

            if (captureTasks) {
              var removeTasks = captureTasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }

        if (returnTarget) {
          return this;
        }
      }; // for native toString patch


      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }

      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }

      return true;
    }

    var results = [];

    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }

    return results;
  }

  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    var symbolEventName = zoneSymbolEventNames[eventName];

    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames[eventName];
    }

    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];

    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }

  function patchEventPrototype(global, api) {
    var Event = global['Event'];

    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not

          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);

    if (target[symbol]) {
      return;
    }

    var nativeDelegate = target[symbol] = target[method];

    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = "".concat(targetName, ".").concat(method, "::") + callback;
          var prototype = opts.prototype; // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
          // `customElements.define`. We explicitly wrap the patching code into try-catch since
          // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
          // make those properties non-writable. This means that patching callback will throw an error
          // `cannot assign to read-only property`. See this code as an example:
          // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
          // We don't want to stop the application rendering if we couldn't patch some
          // callback, e.g. `attributeChangedCallback`.

          try {
            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } catch (_a) {// Note: we leave the catch block empty since there's no way to handle the error related
            // to non-writable property.
          }
        });
      }

      return nativeDelegate.call(target, name, opts, options);
    };

    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }

    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });

    if (!tip || tip.length === 0) {
      return onProperties;
    }

    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }

  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }

    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }
  /**
   * Get all event name properties which the event name startsWith `on`
   * from the target object itself, inherited properties are not considered.
   */


  function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target).filter(function (name) {
      return name.startsWith('on') && name.length > 2;
    }).map(function (name) {
      return name.substring(2);
    });
  }

  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }

    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }

    var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

    var patchTargets = [];

    if (isBrowser) {
      var internalWindow_1 = window;
      patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
      var ignoreErrorProperties = isIE() ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not

      patchFilteredProperties(internalWindow_1, getOnEventNames(internalWindow_1), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
    }

    patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);

    for (var i = 0; i < patchTargets.length; i++) {
      var target = _global[patchTargets[i]];
      target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('util', function (global, Zone, api) {
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    var eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.

    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }

    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }

    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;

    api.getGlobalObjects = function () {
      return {
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
      };
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /*
   * This is necessary for Chrome and Chrome mobile, to enable
   * things like redefining `createdCallback` on an element.
   */


  var zoneSymbol;

  var _defineProperty;

  var _getOwnPropertyDescriptor;

  var _create;

  var unconfigurablesKey;

  function propertyPatch() {
    zoneSymbol = Zone.__symbol__;
    _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
    _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    _create = Object.create;
    unconfigurablesKey = zoneSymbol('unconfigurables');

    Object.defineProperty = function (obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }

      var originalConfigurableFlag = desc.configurable;

      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }

      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };

    Object.defineProperties = function (obj, props) {
      Object.keys(props).forEach(function (prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });

      for (var _i = 0, _b = Object.getOwnPropertySymbols(props); _i < _b.length; _i++) {
        var sym = _b[_i];
        var desc = Object.getOwnPropertyDescriptor(props, sym); // Since `Object.getOwnPropertySymbols` returns *all* symbols,
        // including non-enumerable ones, retrieve property descriptor and check
        // enumerability there. Proceed with the rewrite only when a property is
        // enumerable to make the logic consistent with the way regular
        // properties are retrieved (via `Object.keys`, which respects
        // `enumerable: false` flag). More information:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#retrieval

        if (desc === null || desc === void 0 ? void 0 : desc.enumerable) {
          Object.defineProperty(obj, sym, props[sym]);
        }
      }

      return obj;
    };

    Object.create = function (proto, propertiesObject) {
      if (typeof propertiesObject === 'object' && !Object.isFrozen(propertiesObject)) {
        Object.keys(propertiesObject).forEach(function (prop) {
          propertiesObject[prop] = rewriteDescriptor(proto, prop, propertiesObject[prop]);
        });
      }

      return _create(proto, propertiesObject);
    };

    Object.getOwnPropertyDescriptor = function (obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);

      if (desc && isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }

      return desc;
    };
  }

  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }

  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }

  function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
      desc.configurable = true;
    }

    if (!desc.configurable) {
      // issue-927, if the obj is frozen, don't try to set the desc to obj
      if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }

      if (obj[unconfigurablesKey]) {
        obj[unconfigurablesKey][prop] = true;
      }
    }

    return desc;
  }

  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (error) {
      if (desc.configurable) {
        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(),
        // let's retry with the original flag value
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }

        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          var swallowError = false;

          if (prop === 'createdCallback' || prop === 'attachedCallback' || prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
            // We only swallow the error in registerElement patch
            // this is the work around since some applications
            // fail if we throw the error
            swallowError = true;
          }

          if (!swallowError) {
            throw error;
          } // TODO: @JiaLiPassion, Some application such as `registerElement` patch
          // still need to swallow the error, in the future after these applications
          // are updated, the following logic can be removed.


          var descJson = null;

          try {
            descJson = JSON.stringify(desc);
          } catch (error) {
            descJson = desc.toString();
          }

          console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
        }
      } else {
        throw error;
      }
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetLegacyPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        globalSources = _b.globalSources,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX;

    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

    if (isWtf) {
      // Workaround for: https://github.com/google/tracing-framework/issues/555
      apis = WTF_ISSUE_555_ARRAY.map(function (v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      // Note: EventTarget is not available in all browsers,
      // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
      apis = NO_EVENT_TARGET;
    }

    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    var pointerEventsMap = {
      'MSPointerCancel': 'pointercancel',
      'MSPointerDown': 'pointerdown',
      'MSPointerEnter': 'pointerenter',
      'MSPointerHover': 'pointerhover',
      'MSPointerLeave': 'pointerleave',
      'MSPointerMove': 'pointermove',
      'MSPointerOut': 'pointerout',
      'MSPointerOver': 'pointerover',
      'MSPointerUp': 'pointerup'
    }; //  predefine all __zone_symbol__ + eventName + true/false string

    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    } //  predefine all task.source string


    for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
      var target = WTF_ISSUE_555_ARRAY[i];
      var targets = globalSources[target] = {};

      for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
      }
    }

    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
      if (!isDisableIECheck && ieOrEdge) {
        if (isEnableCrossContextCheck) {
          try {
            var testString = delegate.toString();

            if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
              nativeDelegate.apply(target, args);
              return false;
            }
          } catch (error) {
            nativeDelegate.apply(target, args);
            return false;
          }
        } else {
          var testString = delegate.toString();

          if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
            nativeDelegate.apply(target, args);
            return false;
          }
        }
      } else if (isEnableCrossContextCheck) {
        try {
          delegate.toString();
        } catch (error) {
          nativeDelegate.apply(target, args);
          return false;
        }
      }

      return true;
    };

    var apiTypes = [];

    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      apiTypes.push(type && type.prototype);
    } // vh is validateHandler to check event handler
    // is valid or not(for security check)


    api.patchEventTarget(_global, api, apiTypes, {
      vh: checkIEAndCrossContext,
      transferEventName: function (eventName) {
        var pointerEventName = pointerEventsMap[eventName];
        return pointerEventName || eventName;
      }
    });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // we have to patch the instance since the proto is non-configurable


  function apply(api, _global) {
    var _b = api.getGlobalObjects(),
        ADD_EVENT_LISTENER_STR = _b.ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR = _b.REMOVE_EVENT_LISTENER_STR;

    var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched

    if (!_global.EventTarget) {
      api.patchEventTarget(_global, api, [WS.prototype]);
    }

    _global.WebSocket = function (x, y) {
      var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
      var proxySocket;
      var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

      var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
        // but proxySocket not, so we will keep socket as prototype and pass it to
        // patchOnProperties method

        proxySocketProto = socket;
        [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
          proxySocket[propName] = function () {
            var args = api.ArraySlice.call(arguments);

            if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
              var eventName = args.length > 0 ? args[0] : undefined;

              if (eventName) {
                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                socket[propertySymbol] = proxySocket[propertySymbol];
              }
            }

            return socket[propName].apply(socket, args);
          };
        });
      } else {
        // we can patch the real socket
        proxySocket = socket;
      }

      api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
      return proxySocket;
    };

    var globalWebSocket = _global['WebSocket'];

    for (var prop in WS) {
      globalWebSocket[prop] = WS[prop];
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function propertyDescriptorLegacyPatch(api, _global) {
    var _b = api.getGlobalObjects(),
        isNode = _b.isNode,
        isMix = _b.isMix;

    if (isNode && !isMix) {
      return;
    }

    if (!canPatchViaPropertyDescriptor(api, _global)) {
      var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

      patchViaCapturingAllTheEvents(api);
      api.patchClass('XMLHttpRequest');

      if (supportsWebSocket) {
        apply(api, _global);
      }

      Zone[api.symbol('patchEvents')] = true;
    }
  }

  function canPatchViaPropertyDescriptor(api, _global) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
      // IDL interface attributes are not configurable
      var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
      // because XMLHttpRequest is not available in service worker

      if (desc) {
        api.ObjectDefineProperty(Element.prototype, 'onclick', {
          enumerable: true,
          configurable: true,
          get: function () {
            return true;
          }
        });
        var div = document.createElement('div');
        var result = !!div.onclick;
        api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
        return result;
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return false;
    }

    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one

    if (xhrDesc) {
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return true;
        }
      });
      var req = new XMLHttpRequest();
      var result = !!req.onreadystatechange; // restore original desc

      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
      return result;
    } else {
      var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
        },
        set: function (value) {
          this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
        }
      });
      var req = new XMLHttpRequest();

      var detectFunc = function () {};

      req.onreadystatechange = detectFunc;
      var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
      req.onreadystatechange = null;
      return result;
    }
  }

  var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
  var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
  var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
  var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
  var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
  var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
  var formEventNames = ['autocomplete', 'autocompleteerror'];
  var detailEventNames = ['toggle'];

  var eventNames = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], globalEventHandlersEventNames, true), webglEventNames, true), formEventNames, true), detailEventNames, true), documentEventNames, true), windowEventNames, true), htmlElementEventNames, true), ieElementEventNames, true); // Whenever any eventListener fires, we check the eventListener target and all parents
  // for `onwhatever` properties and replace them with zone-bound functions
  // - Chrome (for now)


  function patchViaCapturingAllTheEvents(api) {
    var unboundKey = api.symbol('unbound');

    var _loop_5 = function (i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function (event) {
        var elt = event.target,
            bound,
            source;

        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }

        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = api.wrapWithCurrentZone(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }

          elt = elt.parentElement;
        }
      }, true);
    };

    for (var i = 0; i < eventNames.length; i++) {
      _loop_5(i);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function registerElementPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
      return;
    }

    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  (function (_global) {
    var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    _global[__symbol__('legacyPatch')] = function () {
      var Zone = _global['Zone'];

      Zone.__load_patch('defineProperty', function (global, Zone, api) {
        api._redefineProperty = _redefineProperty;
        propertyPatch();
      });

      Zone.__load_patch('registerElement', function (global, Zone, api) {
        registerElementPatch(global, api);
      });

      Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
        eventTargetLegacyPatch(global, api);
        propertyDescriptorLegacyPatch(api, global);
      });
    };
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var taskSymbol = zoneSymbol$1('zoneTask');

  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};

    function scheduleTask(task) {
      var data = task.data;

      data.args[0] = function () {
        return task.invoke.apply(this, arguments);
      };

      data.handleId = setNative.apply(window, data.args);
      return task;
    }

    function clearTask(task) {
      return clearNative.call(window, task.data.handleId);
    }

    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        if (typeof args[0] === 'function') {
          var options_1 = {
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var callback_1 = args[0];

          args[0] = function timer() {
            try {
              return callback_1.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              // https://github.com/angular/angular/issues/40387
              // Cleanup tasksByHandleId should be handled before scheduleTask
              // Since some zoneSpec may intercept and doesn't trigger
              // scheduleFn(scheduleTask) provided here.
              if (!options_1.isPeriodic) {
                if (typeof options_1.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[options_1.handleId];
                } else if (options_1.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  options_1.handleId[taskSymbol] = null;
                }
              }
            }
          };

          var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options_1, scheduleTask, clearTask);

          if (!task) {
            return task;
          } // Node.js must additionally support the ref and unref functions.


          var handle = task.data.handleId;

          if (typeof handle === 'number') {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handle] = task;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task;
          } // check whether handle is null, because some polyfill or browser
          // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


          if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }

          if (typeof handle === 'number' || handle) {
            return handle;
          }

          return task;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;

        if (typeof id === 'number') {
          // non nodejs env.
          task = tasksByHandleId[id];
        } else {
          // nodejs env.
          task = id && id[taskSymbol]; // other environments.

          if (!task) {
            task = id;
          }
        }

        if (task && typeof task.type === 'string') {
          if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
            if (typeof id === 'number') {
              delete tasksByHandleId[id];
            } else if (id) {
              id[taskSymbol] = null;
            } // Do not cancel already canceled functions


            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCustomElements(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }

    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }

    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }

    var EVENT_TARGET = _global['EventTarget'];

    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }

    api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }

  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];

    if (legacyPatch) {
      legacyPatch();
    }
  });

  Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
    api.patchMethod(global, 'queueMicrotask', function (delegate) {
      return function (self, args) {
        Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
      };
    });
  });

  Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });

  Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });

  Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];

    for (var i = 0; i < blockingMethods.length; i++) {
      var name_2 = blockingMethods[i];
      patchMethod(global, name_2, function (delegate, symbol, name) {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });

  Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent(global, api);
    eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });

  Zone.__load_patch('MutationObserver', function (global, Zone, api) {
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
  });

  Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
    patchClass('IntersectionObserver');
  });

  Zone.__load_patch('FileReader', function (global, Zone, api) {
    patchClass('FileReader');
  });

  Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
  });

  Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
  });

  Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol$1('xhrTask');
    var XHR_SYNC = zoneSymbol$1('xhrSync');
    var XHR_LISTENER = zoneSymbol$1('xhrListener');
    var XHR_SCHEDULED = zoneSymbol$1('xhrScheduled');
    var XHR_URL = zoneSymbol$1('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol$1('xhrErrorBeforeScheduled');

    function patchXHR(window) {
      var XMLHttpRequest = window['XMLHttpRequest'];

      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }

      var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

      function findPendingTask(target) {
        return target[XHR_TASK];
      }

      var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

      if (!oriAddListener) {
        var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget_1) {
          var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }

      var READY_STATE_CHANGE = 'readystatechange';
      var SCHEDULED = 'scheduled';

      function scheduleTask(task) {
        var data = task.data;
        var target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

        var listener = target[XHR_LISTENER];

        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }

        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }

        var newListener = target[XHR_LISTENER] = function () {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              // Also if the request failed without response (status = 0), the load event handler
              // will not be triggered, in that case, we should also invoke the placeholder callback
              // to close the XMLHttpRequest::send macroTask.
              // https://github.com/angular/angular/issues/38795
              var loadTasks = target[Zone.__symbol__('loadfalse')];

              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                var oriInvoke_1 = task.invoke;

                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  for (var i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }

                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke_1.call(task);
                  }
                };

                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };

        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        var storedTask = target[XHR_TASK];

        if (!storedTask) {
          target[XHR_TASK] = task;
        }

        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }

      function placeholderCallback() {}

      function clearTask(task) {
        var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.

        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }

      var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
        return function (self, args) {
          self[XHR_SYNC] = args[2] == false;
          self[XHR_URL] = args[1];
          return openNative.apply(self, args);
        };
      });
      var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      var fetchTaskAborting = zoneSymbol$1('fetchTaskAborting');
      var fetchTaskScheduling = zoneSymbol$1('fetchTaskScheduling');
      var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
        return function (self, args) {
          if (Zone.current[fetchTaskScheduling] === true) {
            // a fetch is scheduling, so we are using xhr to polyfill fetch
            // and because we already schedule macroTask for fetch, we should
            // not schedule a macroTask for xhr again
            return sendNative.apply(self, args);
          }

          if (self[XHR_SYNC]) {
            // if the XHR is sync there is no task to schedule, just execute the code.
            return sendNative.apply(self, args);
          } else {
            var options = {
              target: self,
              url: self[XHR_URL],
              isPeriodic: false,
              args: args,
              aborted: false
            };
            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
              // xhr request throw error when send
              // we should invoke task instead of leaving a scheduled
              // pending macroTask
              task.invoke();
            }
          }
        };
      });
      var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
        return function (self, args) {
          var task = findPendingTask(self);

          if (task && typeof task.type == 'string') {
            // If the XHR has already completed, do nothing.
            // If the XHR has already been aborted, do nothing.
            // Fix #569, call abort multiple times before done will cause
            // macroTask task count be negative number
            if (task.cancelFn == null || task.data && task.data.aborted) {
              return;
            }

            task.zone.cancelTask(task);
          } else if (Zone.current[fetchTaskAborting] === true) {
            // the abort is called from fetch polyfill, we need to call native abort of XHR.
            return abortNative.apply(self, args);
          } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
          // task
          // to cancel. Do nothing.

        };
      });
    }
  });

  Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });

  Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        var eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(function (eventTask) {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          var PromiseRejectionEvent = global['PromiseRejectionEvent'];

          if (PromiseRejectionEvent) {
            var evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }

    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol$1('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol$1('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQztNQUNqQ1UsSUFBSSxDQUFDcU0sWUFBWSxDQUFDLGtDQUFELENBQWIsQ0FBSixHQUNJcWMsMkJBQTJCLENBQUMsb0JBQUQsQ0FEL0I7TUFFQTFvQixJQUFJLENBQUNxTSxZQUFZLENBQUMseUJBQUQsQ0FBYixDQUFKLEdBQ0lxYywyQkFBMkIsQ0FBQyxrQkFBRCxDQUQvQjtJQUVIO0VBQ0osQ0F0QkQ7QUF1QkgsQ0E1OEdEIiwic291cmNlcyI6WyIuL3NyYy9wb2x5ZmlsbHMudHMiLCIuL3NyYy96b25lLWZsYWdzLnRzIiwiLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBkaXZpZGVkIGludG8gMiBzZWN0aW9uczpcbiAqICAgMS4gQnJvd3NlciBwb2x5ZmlsbHMuIFRoZXNlIGFyZSBhcHBsaWVkIGJlZm9yZSBsb2FkaW5nIFpvbmVKUyBhbmQgYXJlIHNvcnRlZCBieSBicm93c2Vycy5cbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXG4gKiAgICAgIGZpbGUuXG4gKlxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGVtc2VsdmVzLiBUaGlzIGluY2x1ZGVzIFNhZmFyaSA+PSAxMCwgQ2hyb21lID49IDU1IChpbmNsdWRpbmcgT3BlcmEpLFxuICogRWRnZSA+PSAxMyBvbiB0aGUgZGVza3RvcCwgYW5kIGlPUyAxMCBhbmQgQ2hyb21lIG9uIG1vYmlsZS5cbiAqXG4gKiBMZWFybiBtb3JlIGluIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9icm93c2VyLXN1cHBvcnRcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xuICovXG5cbi8qKiBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIE5nQ2xhc3Mgc3VwcG9ydCBvbiBTVkcgZWxlbWVudHMgKi9cbi8vIGltcG9ydCAnY2xhc3NsaXN0LmpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGNsYXNzbGlzdC5qc2AuXG5cbi8qKlxuICogV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2BcbiAqIE9ubHkgcmVxdWlyZWQgaWYgQW5pbWF0aW9uQnVpbGRlciBpcyB1c2VkIHdpdGhpbiB0aGUgYXBwbGljYXRpb24gYW5kIHVzaW5nIElFL0VkZ2Ugb3IgU2FmYXJpLlxuICogU3RhbmRhcmQgYW5pbWF0aW9uIHN1cHBvcnQgaW4gQW5ndWxhciBET0VTIE5PVCByZXF1aXJlIGFueSBwb2x5ZmlsbHMgKGFzIG9mIEFuZ3VsYXIgNi4wKS5cbiAqL1xuLy8gaW1wb3J0ICd3ZWItYW5pbWF0aW9ucy1qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSB3ZWItYW5pbWF0aW9ucy1qc2AuXG5cbi8qKlxuICogQnkgZGVmYXVsdCwgem9uZS5qcyB3aWxsIHBhdGNoIGFsbCBwb3NzaWJsZSBtYWNyb1Rhc2sgYW5kIERvbUV2ZW50c1xuICogdXNlciBjYW4gZGlzYWJsZSBwYXJ0cyBvZiBtYWNyb1Rhc2svRG9tRXZlbnRzIHBhdGNoIGJ5IHNldHRpbmcgZm9sbG93aW5nIGZsYWdzXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xuICogd2lsbCBwdXQgaW1wb3J0IGluIHRoZSB0b3Agb2YgYnVuZGxlLCBzbyB1c2VyIG5lZWQgdG8gY3JlYXRlIGEgc2VwYXJhdGUgZmlsZVxuICogaW4gdGhpcyBkaXJlY3RvcnkgKGZvciBleGFtcGxlOiB6b25lLWZsYWdzLnRzKSwgYW5kIHB1dCB0aGUgZm9sbG93aW5nIGZsYWdzXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXG4gKiBpbXBvcnQgJy4vem9uZS1mbGFncyc7XG4gKlxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXG4gKlxuICogVGhlIGZvbGxvd2luZyBmbGFncyB3aWxsIHdvcmsgZm9yIGFsbCBicm93c2Vycy5cbiAqXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9vbl9wcm9wZXJ0eSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggb25Qcm9wZXJ0eSBzdWNoIGFzIG9uY2xpY2tcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcbiAqXG4gKiAgaW4gSUUvRWRnZSBkZXZlbG9wZXIgdG9vbHMsIHRoZSBhZGRFdmVudExpc3RlbmVyIHdpbGwgYWxzbyBiZSB3cmFwcGVkIGJ5IHpvbmUuanNcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXG4gKlxuICogICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2sgPSB0cnVlO1xuICpcbiAqL1xuXG5pbXBvcnQgJy4vem9uZS1mbGFncyc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFpvbmUgSlMgaXMgcmVxdWlyZWQgYnkgZGVmYXVsdCBmb3IgQW5ndWxhciBpdHNlbGYuXG4gKi9cbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBBUFBMSUNBVElPTiBJTVBPUlRTXG4gKi9cbiIsIi8qKlxuICogUHJldmVudHMgQW5ndWxhciBjaGFuZ2UgZGV0ZWN0aW9uIGZyb21cbiAqIHJ1bm5pbmcgd2l0aCBjZXJ0YWluIFdlYiBDb21wb25lbnQgY2FsbGJhY2tzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX2N1c3RvbUVsZW1lbnRzID0gdHJ1ZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2MTQuMi4wLW5leHQuMFxuICogKGMpIDIwMTAtMjAyMiBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAgICAgZmFjdG9yeSgpO1xufSkoKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgKChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbFsncGVyZm9ybWFuY2UnXTtcbiAgICAgICAgZnVuY3Rpb24gbWFyayhuYW1lKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWFyayddICYmIHBlcmZvcm1hbmNlWydtYXJrJ10obmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybWFuY2VNZWFzdXJlKG5hbWUsIGxhYmVsKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddICYmIHBlcmZvcm1hbmNlWydtZWFzdXJlJ10obmFtZSwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIG1hcmsoJ1pvbmUnKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBiZWZvcmUgaXQncyBhY2Nlc3NlZCBiZWxvdy5cbiAgICAgICAgLy8gX19ab25lX3N5bWJvbF9wcmVmaXggZ2xvYmFsIGNhbiBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHpvbmVcbiAgICAgICAgLy8gc3ltYm9sIHByZWZpeCB3aXRoIGEgY3VzdG9tIG9uZSBpZiBuZWVkZWQuXG4gICAgICAgIHZhciBzeW1ib2xQcmVmaXggPSBnbG9iYWxbJ19fWm9uZV9zeW1ib2xfcHJlZml4J10gfHwgJ19fem9uZV9zeW1ib2xfXyc7XG4gICAgICAgIGZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbFByZWZpeCArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoZWNrRHVwbGljYXRlID0gZ2xvYmFsW19fc3ltYm9sX18oJ2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICAgICAgICBpZiAoZ2xvYmFsWydab25lJ10pIHtcbiAgICAgICAgICAgIC8vIGlmIGdsb2JhbFsnWm9uZSddIGFscmVhZHkgZXhpc3RzIChtYXliZSB6b25lLmpzIHdhcyBhbHJlYWR5IGxvYWRlZCBvclxuICAgICAgICAgICAgLy8gc29tZSBvdGhlciBsaWIgYWxzbyByZWdpc3RlcmVkIGEgZ2xvYmFsIG9iamVjdCBuYW1lZCBab25lKSwgd2UgbWF5IG5lZWRcbiAgICAgICAgICAgIC8vIHRvIHRocm93IGFuIGVycm9yLCBidXQgc29tZXRpbWVzIHVzZXIgbWF5IG5vdCB3YW50IHRoaXMgZXJyb3IuXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSxcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdHdvIHdlYiBwYWdlcywgcGFnZTEgaW5jbHVkZXMgem9uZS5qcywgcGFnZTIgZG9lc24ndC5cbiAgICAgICAgICAgIC8vIGFuZCB0aGUgMXN0IHRpbWUgdXNlciBsb2FkIHBhZ2UxIGFuZCBwYWdlMiwgZXZlcnl0aGluZyB3b3JrIGZpbmUsXG4gICAgICAgICAgICAvLyBidXQgd2hlbiB1c2VyIGxvYWQgcGFnZTIgYWdhaW4sIGVycm9yIG9jY3VycyBiZWNhdXNlIGdsb2JhbFsnWm9uZSddIGFscmVhZHkgZXhpc3RzLlxuICAgICAgICAgICAgLy8gc28gd2UgYWRkIGEgZmxhZyB0byBsZXQgdXNlciBjaG9vc2Ugd2hldGhlciB0byB0aHJvdyB0aGlzIGVycm9yIG9yIG5vdC5cbiAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQsIGlmIGV4aXN0aW5nIFpvbmUgaXMgZnJvbSB6b25lLmpzLCB3ZSB3aWxsIG5vdCB0aHJvdyB0aGUgZXJyb3IuXG4gICAgICAgICAgICBpZiAoY2hlY2tEdXBsaWNhdGUgfHwgdHlwZW9mIGdsb2JhbFsnWm9uZSddLl9fc3ltYm9sX18gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgYWxyZWFkeSBsb2FkZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsWydab25lJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFpvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBab25lKHBhcmVudCwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gem9uZVNwZWMgJiYgem9uZVNwZWMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUgPVxuICAgICAgICAgICAgICAgICAgICBuZXcgX1pvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFsnUHJvbWlzZSddICE9PSBwYXRjaGVzWydab25lQXdhcmVQcm9taXNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lLmpzIGhhcyBkZXRlY3RlZCB0aGF0IFpvbmVBd2FyZVByb21pc2UgYCh3aW5kb3d8Z2xvYmFsKS5Qcm9taXNlYCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdNb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IGEgUHJvbWlzZSBwb2x5ZmlsbCBoYXMgYmVlbiBsb2FkZWQgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWZ0ZXIgWm9uZS5qcyAoUG9seWZpbGxpbmcgUHJvbWlzZSBhcGkgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIHpvbmUuanMgaXMgbG9hZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY3VycmVudFpvbmVGcmFtZS56b25lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRUYXNrXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBpZ25vcmVEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlRHVwbGljYXRlID09PSB2b2lkIDApIHsgaWdub3JlRHVwbGljYXRlID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgY2hlY2tEdXBsaWNhdGVgIG9wdGlvbiBpcyBkZWZpbmVkIGZyb20gZ2xvYmFsIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gYGlnbm9yZUR1cGxpY2F0ZWAgY2FuIHdvcmsgZm9yIHRoZSBzcGVjaWZpZWQgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlRHVwbGljYXRlICYmIGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmZOYW1lID0gJ1pvbmU6JyArIG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmsocGVyZk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzW25hbWVdID0gZm4oZ2xvYmFsLCBab25lLCBfYXBpKTtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2VNZWFzdXJlKHBlcmZOYW1lLCBwZXJmTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgICAgICAgICAgIGlmICh6b25lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLmdldFpvbmVXaXRoID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5fcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lU3BlYyByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1bkd1YXJkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5ydW5UYXNrID0gZnVuY3Rpb24gKHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgICAgICAgICAgIC8vIHdpbGwgcnVuIGluIG5vdFNjaGVkdWxlZChjYW5jZWxlZCkgc3RhdGUsIHdlIHNob3VsZCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gcnVuIHN1Y2gga2luZCBvZiB0YXNrIGJ1dCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQgJiYgKHRhc2sudHlwZSA9PT0gZXZlbnRUYXNrIHx8IHRhc2sudHlwZSA9PT0gbWFjcm9UYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhydW5uaW5nLCBzY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IG1hY3JvVGFzayAmJiB0YXNrLmRhdGEgJiYgIXRhc2suZGF0YS5pc1BlcmlvZGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhc2sncyBzdGF0ZSBpcyBub3RTY2hlZHVsZWQgb3IgdW5rbm93biwgdGhlbiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgIT09IG5vdFNjaGVkdWxlZCAmJiB0YXNrLnN0YXRlICE9PSB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IGV2ZW50VGFzayB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHByZXZpb3VzVGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay56b25lICYmIHRhc2suem9uZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFzayB3YXMgcmVzY2hlZHVsZWQsIHRoZSBuZXdab25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBub3QgYmUgdGhlIGNoaWxkcmVuIG9mIHRoZSBvcmlnaW5hbCB6b25lXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdab25lID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld1pvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdab25lID09PSB0YXNrLnpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImNhbiBub3QgcmVzY2hlZHVsZSB0YXNrIHRvIFwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiIHdoaWNoIGlzIGRlc2NlbmRhbnRzIG9mIHRoZSBvcmlnaW5hbCB6b25lIFwiKS5jb25jYXQodGFzay56b25lLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1pvbmUgPSBuZXdab25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICB2YXIgem9uZURlbGVnYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSB6b25lRGVsZWdhdGVzO1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0aGlzLl96b25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBzZXQgdGFzaydzIHN0YXRlIHRvIHVua25vd24gd2hlbiBzY2hlZHVsZVRhc2sgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXJyIG1heSBmcm9tIHJlc2NoZWR1bGUsIHNvIHRoZSBmcm9tU3RhdGUgbWF5YmUgbm90U2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBzaG91bGQgd2UgY2hlY2sgdGhlIHJlc3VsdCBmcm9tIGhhbmRsZUVycm9yP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFzay5fem9uZURlbGVnYXRlcyA9PT0gem9uZURlbGVnYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIGNoZWNrIGJlY2F1c2UgaW50ZXJuYWxseSB0aGUgZGVsZWdhdGUgY2FuIHJlc2NoZWR1bGUgdGhlIHRhc2suXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgPT0gc2NoZWR1bGluZykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb1Rhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKG1pY3JvVGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWFjcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKG1hY3JvVGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlRXZlbnRUYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKGV2ZW50VGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRhc2sgY2FuIG9ubHkgYmUgY2FuY2VsbGVkIGluIHRoZSB6b25lIG9mIGNyZWF0aW9uISAoQ3JlYXRpb246ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oY2FuY2VsaW5nLCBzY2hlZHVsZWQsIHJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIGNhbmNlbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAtMSk7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICB0YXNrLnJ1bkNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5fdXBkYXRlVGFza0NvdW50ID0gZnVuY3Rpb24gKHRhc2ssIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmVEZWxlZ2F0ZXMgPSB0YXNrLl96b25lRGVsZWdhdGVzO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6b25lRGVsZWdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHpvbmVEZWxlZ2F0ZXNbaV0uX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIGNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFpvbmU7XG4gICAgICAgIH0oKSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICBab25lLl9fc3ltYm9sX18gPSBfX3N5bWJvbF9fO1xuICAgICAgICB2YXIgREVMRUdBVEVfWlMgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIG9uSGFzVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIGhhc1Rhc2tTdGF0ZSkgeyByZXR1cm4gZGVsZWdhdGUuaGFzVGFzayh0YXJnZXQsIGhhc1Rhc2tTdGF0ZSk7IH0sXG4gICAgICAgICAgICBvblNjaGVkdWxlVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spIHsgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spOyB9LFxuICAgICAgICAgICAgb25JbnZva2VUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHsgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7IH0sXG4gICAgICAgICAgICBvbkNhbmNlbFRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSB7IHJldHVybiBkZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldCwgdGFzayk7IH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9ab25lRGVsZWdhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBfWm9uZURlbGVnYXRlKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rhc2tDb3VudHMgPSB7ICdtaWNyb1Rhc2snOiAwLCAnbWFjcm9UYXNrJzogMCwgJ2V2ZW50VGFzayc6IDAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUgPSB6b25lO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ya1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uRm9yayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtaUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ya0RsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya0RsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmtDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya0N1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUyA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdFpTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0RGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0Q3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZURsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JEbGd0ID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckRsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckN1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX3NjaGVkdWxlVGFza1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiZcbiAgICAgICAgICAgICAgICAgICAgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0RsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrQ3VyclpvbmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB6b25lU3BlY0hhc1Rhc2sgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5vbkhhc1Rhc2s7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudEhhc1Rhc2sgPSBwYXJlbnREZWxlZ2F0ZSAmJiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza1pTO1xuICAgICAgICAgICAgICAgIGlmICh6b25lU3BlY0hhc1Rhc2sgfHwgcGFyZW50SGFzVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIHJlcG9ydCBoYXNUYXNrLCB0aGFuIHRoaXMgWlMgbmVlZHMgdG8gZG8gcmVmIGNvdW50aW5nIG9uIHRhc2tzLiBJbiBzdWNoXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgY2FzZSBhbGwgdGFzayByZWxhdGVkIGludGVyY2VwdG9ycyBtdXN0IGdvIHRocm91Z2ggdGhpcyBaRC4gV2UgY2FuJ3Qgc2hvcnQgY2lyY3VpdCBpdC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWNIYXNUYXNrID8gem9uZVNwZWMgOiBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3RPd25lciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMub25TY2hlZHVsZVRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMub25DYW5jZWxUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPSB0aGlzLnpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmtaUyA/IHRoaXMuX2ZvcmtaUy5vbkZvcmsodGhpcy5fZm9ya0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgem9uZVNwZWMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFpvbmUodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID8gdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy5faW52b2tlQ3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUy5vbkhhbmRsZUVycm9yKHRoaXMuX2hhbmRsZUVycm9yRGxndCwgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDpcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1Rhc2taUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYW5nLWZvcm1hdCBvZmZcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRoaXMuX3NjaGVkdWxlVGFza1pTLm9uU2NoZWR1bGVUYXNrKHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QsIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9uXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmV0dXJuVGFzaylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc2NoZWR1bGVGbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PSBtaWNyb1Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/IHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuY2FuY2VsVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWxUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9jYW5jZWxUYXNrWlMub25DYW5jZWxUYXNrKHRoaXMuX2NhbmNlbFRhc2tEbGd0LCB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXNrLmNhbmNlbEZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGFzay5jYW5jZWxGbih0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmhhc1Rhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIC8vIGhhc1Rhc2sgc2hvdWxkIG5vdCB0aHJvdyBlcnJvciBzbyBvdGhlciBab25lRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLl9oYXNUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5fdXBkYXRlVGFza0NvdW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICAgICAgICAgICAgdmFyIHByZXYgPSBjb3VudHNbdHlwZV07XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBjb3VudHNbdHlwZV0gPSBwcmV2ICsgY291bnQ7XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9yZSB0YXNrcyBleGVjdXRlZCB0aGVuIHdlcmUgc2NoZWR1bGVkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNFbXB0eSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzWydtaWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50c1snbWFjcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXNrOiBjb3VudHNbJ2V2ZW50VGFzayddID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1Rhc2sodGhpcy56b25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIF9ab25lRGVsZWdhdGU7XG4gICAgICAgIH0oKSk7XG4gICAgICAgIHZhciBab25lVGFzayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIFpvbmVUYXNrKHR5cGUsIHNvdXJjZSwgY2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlRm4sIGNhbmNlbEZuKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnbm90U2NoZWR1bGVkJztcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZuID0gc2NoZWR1bGVGbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEZuID0gY2FuY2VsRm47XG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBldmVudFRhc2sgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnVzZUcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZva2UgPSBab25lVGFzay5pbnZva2VUYXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBab25lVGFzay5pbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhc2ssIHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcysrO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFpbk1pY3JvVGFza1F1ZXVlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZVRhc2sucHJvdG90eXBlLCBcInpvbmVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZVRhc2sucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS5jYW5jZWxTY2hlZHVsZVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUuX3RyYW5zaXRpb25UbyA9IGZ1bmN0aW9uICh0b1N0YXRlLCBmcm9tU3RhdGUxLCBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvU3RhdGUgPT0gbm90U2NoZWR1bGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHRoaXMudHlwZSwgXCIgJ1wiKS5jb25jYXQodGhpcy5zb3VyY2UsIFwiJzogY2FuIG5vdCB0cmFuc2l0aW9uIHRvICdcIikuY29uY2F0KHRvU3RhdGUsIFwiJywgZXhwZWN0aW5nIHN0YXRlICdcIikuY29uY2F0KGZyb21TdGF0ZTEsIFwiJ1wiKS5jb25jYXQoZnJvbVN0YXRlMiA/ICcgb3IgXFwnJyArIGZyb21TdGF0ZTIgKyAnXFwnJyA6ICcnLCBcIiwgd2FzICdcIikuY29uY2F0KHRoaXMuX3N0YXRlLCBcIicuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYW5kbGVJZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gYWRkIHRvSlNPTiBtZXRob2QgdG8gcHJldmVudCBjeWNsaWMgZXJyb3Igd2hlblxuICAgICAgICAgICAgLy8gY2FsbCBKU09OLnN0cmluZ2lmeSh6b25lVGFzaylcbiAgICAgICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgem9uZTogdGhpcy56b25lLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJ1bkNvdW50OiB0aGlzLnJ1bkNvdW50XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWm9uZVRhc2s7XG4gICAgICAgIH0oKSk7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vICBNSUNST1RBU0sgUVVFVUVcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB2YXIgc3ltYm9sU2V0VGltZW91dCA9IF9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKTtcbiAgICAgICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgICAgIHZhciBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgICAgICB2YXIgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgICAgIHZhciBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgICAgIHZhciBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2U7XG4gICAgICAgIGZ1bmN0aW9uIG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmICghbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0ucmVzb2x2ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2Vbc3ltYm9sVGhlbl07XG4gICAgICAgICAgICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBwYXRjaGFibGUsIHdlIG5lZWQgdG8gdXNlIGB0aGVuYCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSAxMDc4XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSwgZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZnVuYywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2sodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5vdCBydW5uaW5nIGluIGFueSB0YXNrLCBhbmQgdGhlcmUgaGFzIG5vdCBiZWVuIGFueXRoaW5nIHNjaGVkdWxlZFxuICAgICAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT09IDAgJiYgX21pY3JvVGFza1F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgICAgIG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrKGRyYWluTWljcm9UYXNrUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkcmFpbk1pY3JvVGFza1F1ZXVlKCkge1xuICAgICAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICAgICAgICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLnJ1blRhc2sodGFzaywgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXBpLm9uVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcGkubWljcm90YXNrRHJhaW5Eb25lKCk7XG4gICAgICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vICBCT09UU1RSQVBcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB2YXIgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgICAgIHZhciBub3RTY2hlZHVsZWQgPSAnbm90U2NoZWR1bGVkJywgc2NoZWR1bGluZyA9ICdzY2hlZHVsaW5nJywgc2NoZWR1bGVkID0gJ3NjaGVkdWxlZCcsIHJ1bm5pbmcgPSAncnVubmluZycsIGNhbmNlbGluZyA9ICdjYW5jZWxpbmcnLCB1bmtub3duID0gJ3Vua25vd24nO1xuICAgICAgICB2YXIgbWljcm9UYXNrID0gJ21pY3JvVGFzaycsIG1hY3JvVGFzayA9ICdtYWNyb1Rhc2snLCBldmVudFRhc2sgPSAnZXZlbnRUYXNrJztcbiAgICAgICAgdmFyIHBhdGNoZXMgPSB7fTtcbiAgICAgICAgdmFyIF9hcGkgPSB7XG4gICAgICAgICAgICBzeW1ib2w6IF9fc3ltYm9sX18sXG4gICAgICAgICAgICBjdXJyZW50Wm9uZUZyYW1lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY3VycmVudFpvbmVGcmFtZTsgfSxcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXJyb3I6IG5vb3AsXG4gICAgICAgICAgICBtaWNyb3Rhc2tEcmFpbkRvbmU6IG5vb3AsXG4gICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzazogc2NoZWR1bGVNaWNyb1Rhc2ssXG4gICAgICAgICAgICBzaG93VW5jYXVnaHRFcnJvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gIVpvbmVbX19zeW1ib2xfXygnaWdub3JlQ29uc29sZUVycm9yVW5jYXVnaHRFcnJvcicpXTsgfSxcbiAgICAgICAgICAgIHBhdGNoRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXM6IG5vb3AsXG4gICAgICAgICAgICBwYXRjaE1ldGhvZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIGJpbmRBcmd1bWVudHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgcGF0Y2hUaGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgcGF0Y2hNYWNyb1Rhc2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBwYXRjaEV2ZW50UHJvdG90eXBlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgaXNJRU9yRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICBnZXRHbG9iYWxPYmplY3RzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgT2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICBBcnJheVNsaWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIHBhdGNoQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICB3cmFwV2l0aEN1cnJlbnRab25lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgZmlsdGVyUHJvcGVydGllczogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBfcmVkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIHBhdGNoQ2FsbGJhY2tzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2s6IG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrXG4gICAgICAgIH07XG4gICAgICAgIHZhciBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBudWxsLCB6b25lOiBuZXcgWm9uZShudWxsLCBudWxsKSB9O1xuICAgICAgICB2YXIgX2N1cnJlbnRUYXNrID0gbnVsbDtcbiAgICAgICAgdmFyIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPSAwO1xuICAgICAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgICAgIHBlcmZvcm1hbmNlTWVhc3VyZSgnWm9uZScsICdab25lJyk7XG4gICAgICAgIHJldHVybiBnbG9iYWxbJ1pvbmUnXSA9IFpvbmU7XG4gICAgfSkpKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiB8fCBnbG9iYWwpO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFN1cHByZXNzIGNsb3N1cmUgY29tcGlsZXIgZXJyb3JzIGFib3V0IHVua25vd24gJ1pvbmUnIHZhcmlhYmxlXG4gICAgICogQGZpbGVvdmVydmlld1xuICAgICAqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFycyxnbG9iYWxUaGlzLG1pc3NpbmdSZXF1aXJlfVxuICAgICAqL1xuICAgIC8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiLz5cbiAgICAvLyBpc3N1ZSAjOTg5LCB0byByZWR1Y2UgYnVuZGxlIHNpemUsIHVzZSBzaG9ydCBuYW1lXG4gICAgLyoqIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKi9cbiAgICB2YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAvKiogT2JqZWN0LmRlZmluZVByb3BlcnR5ICovXG4gICAgdmFyIE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIC8qKiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgKi9cbiAgICB2YXIgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gICAgLyoqIE9iamVjdC5jcmVhdGUgKi9cbiAgICB2YXIgT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgICAvKiogQXJyYXkucHJvdG90eXBlLnNsaWNlICovXG4gICAgdmFyIEFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgLyoqIGFkZEV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG4gICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG4gICAgLyoqIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG4gICAgdmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgLyoqIHpvbmVTeW1ib2wgYWRkRXZlbnRMaXN0ZW5lciAqL1xuICAgIHZhciBaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIgPSBab25lLl9fc3ltYm9sX18oQUREX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4gICAgLyoqIHpvbmVTeW1ib2wgcmVtb3ZlRXZlbnRMaXN0ZW5lciAqL1xuICAgIHZhciBaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIgPSBab25lLl9fc3ltYm9sX18oUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4gICAgLyoqIHRydWUgc3RyaW5nIGNvbnN0ICovXG4gICAgdmFyIFRSVUVfU1RSID0gJ3RydWUnO1xuICAgIC8qKiBmYWxzZSBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgRkFMU0VfU1RSID0gJ2ZhbHNlJztcbiAgICAvKiogWm9uZSBzeW1ib2wgcHJlZml4IHN0cmluZyBjb25zdC4gKi9cbiAgICB2YXIgWk9ORV9TWU1CT0xfUFJFRklYID0gWm9uZS5fX3N5bWJvbF9fKCcnKTtcbiAgICBmdW5jdGlvbiB3cmFwV2l0aEN1cnJlbnRab25lKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC53cmFwKGNhbGxiYWNrLCBzb3VyY2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCk7XG4gICAgfVxuICAgIHZhciB6b25lU3ltYm9sJDEgPSBab25lLl9fc3ltYm9sX187XG4gICAgdmFyIGlzV2luZG93RXhpc3RzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGludGVybmFsV2luZG93ID0gaXNXaW5kb3dFeGlzdHMgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIF9nbG9iYWwgPSBpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvdyB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZiB8fCBnbG9iYWw7XG4gICAgdmFyIFJFTU9WRV9BVFRSSUJVVEUgPSAncmVtb3ZlQXR0cmlidXRlJztcbiAgICBmdW5jdGlvbiBiaW5kQXJndW1lbnRzKGFyZ3MsIHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuICAgICAgICB2YXIgc291cmNlID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yWyduYW1lJ107XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSBmbk5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvdG90eXBlW25hbWVfMV07XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIG5hbWVfMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Byb3BlcnR5V3JpdGFibGUocHJvdG90eXBlRGVzYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvdG90eXBlW25hbWVfMV0gPSAoZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHRoaXMsIGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBzb3VyY2UgKyAnLicgKyBuYW1lXzEpKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIGRlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGNoZWQ7XG4gICAgICAgICAgICAgICAgfSkoZGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3BlcnR5RGVzYykge1xuICAgICAgICBpZiAoIXByb3BlcnR5RGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5RGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISh0eXBlb2YgcHJvcGVydHlEZXNjLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvcGVydHlEZXNjLnNldCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB2YXIgaXNXZWJXb3JrZXIgPSAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGFsbHkgYnJvd3NlcmlmeVxuICAgIC8vIHRoaXMgY29kZS5cbiAgICB2YXIgaXNOb2RlID0gKCEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB7fS50b1N0cmluZy5jYWxsKF9nbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyk7XG4gICAgdmFyIGlzQnJvd3NlciA9ICFpc05vZGUgJiYgIWlzV2ViV29ya2VyICYmICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbiAgICAvLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuICAgIC8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGFsbHkgYnJvd3NlcmlmeVxuICAgIC8vIHRoaXMgY29kZS5cbiAgICB2YXIgaXNNaXggPSB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB7fS50b1N0cmluZy5jYWxsKF9nbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyAmJiAhaXNXZWJXb3JrZXIgJiZcbiAgICAgICAgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuICAgIHZhciB6b25lU3ltYm9sRXZlbnROYW1lcyQxID0ge307XG4gICAgdmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXTtcbiAgICAgICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnQudHlwZV0gPSB6b25lU3ltYm9sJDEoJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB0YXJnZXQgPT09IGludGVybmFsV2luZG93ICYmIGV2ZW50LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25hdHVyZVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0dsb2JhbEV2ZW50SGFuZGxlcnMvb25lcnJvciN3aW5kb3cub25lcnJvclxuICAgICAgICAgICAgLy8gYW5kIG9uZXJyb3IgY2FsbGJhY2sgd2lsbCBwcmV2ZW50IGRlZmF1bHQgd2hlbiBjYWxsYmFjayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBlcnJvckV2ZW50Lm1lc3NhZ2UsIGVycm9yRXZlbnQuZmlsZW5hbWUsIGVycm9yRXZlbnQubGluZW5vLCBlcnJvckV2ZW50LmNvbG5vLCBlcnJvckV2ZW50LmVycm9yKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiYgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgIGlmICghZGVzYyAmJiBwcm90b3R5cGUpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICAgICAgdmFyIHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wKTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVEZXNjKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGRlc2NyaXB0b3Igbm90IGV4aXN0cyBvciBpcyBub3QgY29uZmlndXJhYmxlXG4gICAgICAgIC8vIGp1c3QgcmV0dXJuXG4gICAgICAgIGlmICghZGVzYyB8fCAhZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25Qcm9wUGF0Y2hlZFN5bWJvbCA9IHpvbmVTeW1ib2wkMSgnb24nICsgcHJvcCArICdwYXRjaGVkJyk7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob25Qcm9wUGF0Y2hlZFN5bWJvbCkgJiYgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGNhbm5vdCBoYXZlIGdldHRlci9zZXR0ZXIgYW5kIGJlIHdyaXRhYmxlXG4gICAgICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gVHlwZUVycm9yOiBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBtdXN0IG5vdCBzcGVjaWZ5IGEgdmFsdWUgb3IgYmUgd3JpdGFibGUgd2hlbiBhXG4gICAgICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICAgIGRlbGV0ZSBkZXNjLndyaXRhYmxlO1xuICAgICAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAgICAgdmFyIG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICAgICAgICB2YXIgb3JpZ2luYWxEZXNjU2V0ID0gZGVzYy5zZXQ7XG4gICAgICAgIC8vIHNsaWNlKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gICAgICAgIHZhciBldmVudE5hbWUgPSBwcm9wLnNsaWNlKDIpO1xuICAgICAgICB2YXIgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgICAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdID0gem9uZVN5bWJvbCQxKCdPTl9QUk9QRVJUWScgKyBldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXNzdWUgIzk3OCwgd2hlbiBvbmxvYWQgaGFuZGxlciB3YXMgYWRkZWQgYmVmb3JlIGxvYWRpbmcgem9uZS5qc1xuICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIHJlbW92ZSBpdCB3aXRoIG9yaWdpbmFsRGVzY1NldFxuICAgICAgICAgICAgb3JpZ2luYWxEZXNjU2V0ICYmIG9yaWdpbmFsRGVzY1NldC5jYWxsKHRhcmdldCwgbnVsbCk7XG4gICAgICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgICAgICAvLyB1bmFzc2lnbmVkIHByb3BlcnR5IGlzIG51bGxcbiAgICAgICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZ2luYWxEZXNjR2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0IHdpbGwgYmUgbnVsbCB3aGVuIHVzZSBpbmxpbmUgZXZlbnQgYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgb25jbGljayBmdW5jdGlvbiBpcyBpbnRlcm5hbCByYXcgdW5jb21waWxlZCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9uY2xpY2sgd2lsbCBiZSBldmFsdWF0ZWQgd2hlbiBmaXJzdCB0aW1lIGV2ZW50IHdhcyB0cmlnZ2VyZWQgb3JcbiAgICAgICAgICAgICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCB1c2Ugb3JpZ2luYWwgbmF0aXZlIGdldCB0byByZXRyaWV2ZSB0aGUgaGFuZGxlclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9yaWdpbmFsRGVzY0dldC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbUkVNT1ZFX0FUVFJJQlVURV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICBvYmpbb25Qcm9wUGF0Y2hlZFN5bWJvbF0gPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMsIHByb3RvdHlwZSkge1xuICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldLCBwcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9uUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcC5zbGljZSgwLCAyKSA9PSAnb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIG9uUHJvcGVydGllc1tqXSwgcHJvdG90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3JpZ2luYWxJbnN0YW5jZUtleSA9IHpvbmVTeW1ib2wkMSgnb3JpZ2luYWxJbnN0YW5jZScpO1xuICAgIC8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG4gICAgZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIE9yaWdpbmFsQ2xhc3MgPSBfZ2xvYmFsW2NsYXNzTmFtZV07XG4gICAgICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8ga2VlcCBvcmlnaW5hbCBjbGFzcyBpbiBnbG9iYWxcbiAgICAgICAgX2dsb2JhbFt6b25lU3ltYm9sJDEoY2xhc3NOYW1lKV0gPSBPcmlnaW5hbENsYXNzO1xuICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBhdHRhY2ggb3JpZ2luYWwgZGVsZWdhdGUgdG8gcGF0Y2hlZCBmdW5jdGlvblxuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQoX2dsb2JhbFtjbGFzc05hbWVdLCBPcmlnaW5hbENsYXNzKTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgdmFyIHByb3A7XG4gICAgICAgIGZvciAocHJvcCBpbiBpbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTQ0NzIxXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlW3Byb3BdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gd3JhcFdpdGhDdXJyZW50Wm9uZShmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgY2FsbGJhY2sgaW4gd3JhcHBlZCBmdW5jdGlvbiBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlIGl0IGluIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyB0byByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLCBmbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KHByb3ApKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnICYmIE9yaWdpbmFsQ2xhc3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoTWV0aG9kKHRhcmdldCwgbmFtZSwgcGF0Y2hGbikge1xuICAgICAgICB2YXIgcHJvdG8gPSB0YXJnZXQ7XG4gICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHByb3RvID0gT2JqZWN0R2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvdG8gJiYgdGFyZ2V0W25hbWVdKSB7XG4gICAgICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgICAgICBwcm90byA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsZWdhdGVOYW1lID0gem9uZVN5bWJvbCQxKG5hbWUpO1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICBpZiAocHJvdG8gJiYgKCEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSB8fCAhcHJvdG8uaGFzT3duUHJvcGVydHkoZGVsZWdhdGVOYW1lKSkpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSA9IHByb3RvW25hbWVdO1xuICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBwcm90b1tuYW1lXSBpcyB3cml0YWJsZVxuICAgICAgICAgICAgLy8gc29tZSBwcm9wZXJ0eSBpcyByZWFkb25seSBpbiBzYWZhcmksIHN1Y2ggYXMgSHRtbENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYlxuICAgICAgICAgICAgdmFyIGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlXcml0YWJsZShkZXNjKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRjaERlbGVnYXRlXzEgPSBwYXRjaEZuKGRlbGVnYXRlLCBkZWxlZ2F0ZU5hbWUsIG5hbWUpO1xuICAgICAgICAgICAgICAgIHByb3RvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hEZWxlZ2F0ZV8xKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZWdhdGU7XG4gICAgfVxuICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHN1cHBvcnQgY2FuY2VsIHRhc2sgbGF0ZXIgaWYgbmVjZXNzYXJ5XG4gICAgZnVuY3Rpb24gcGF0Y2hNYWNyb1Rhc2sob2JqLCBmdW5jTmFtZSwgbWV0YUNyZWF0b3IpIHtcbiAgICAgICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgICAgIGRhdGEuYXJnc1tkYXRhLmNiSWR4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmludm9rZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKG9iaiwgZnVuY05hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBtZXRhID0gbWV0YUNyZWF0b3Ioc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBpZiAobWV0YS5jYklkeCA+PSAwICYmIHR5cGVvZiBhcmdzW21ldGEuY2JJZHhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKG1ldGEubmFtZSwgYXJnc1ttZXRhLmNiSWR4XSwgbWV0YSwgc2NoZWR1bGVUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gICAgICAgIHBhdGNoZWRbem9uZVN5bWJvbCQxKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG4gICAgfVxuICAgIHZhciBpc0RldGVjdGVkSUVPckVkZ2UgPSBmYWxzZTtcbiAgICB2YXIgaWVPckVkZ2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBpc0lFKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcbiAgICAgICAgaWYgKGlzRGV0ZWN0ZWRJRU9yRWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGllT3JFZGdlO1xuICAgICAgICB9XG4gICAgICAgIGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWVPckVkZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZU9yRWRnZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgdmFyIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICAgIHZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgZnVuY3Rpb24gcmVhZGFibGVPYmplY3RUb1N0cmluZyhvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iaiA/IG9iai50b1N0cmluZygpIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fc3ltYm9sX18gPSBhcGkuc3ltYm9sO1xuICAgICAgICB2YXIgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IFtdO1xuICAgICAgICB2YXIgaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24gPSBnbG9iYWxbX19zeW1ib2xfXygnRElTQUJMRV9XUkFQUElOR19VTkNBVUdIVF9QUk9NSVNFX1JFSkVDVElPTicpXSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgICAgIHZhciBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgICAgICB2YXIgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChhcGkuc2hvd1VuY2F1Z2h0RXJyb3IoKSkge1xuICAgICAgICAgICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChyZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLm1lc3NhZ2UgOiByZWplY3Rpb24sICc7IFpvbmU6JywgZS56b25lLm5hbWUsICc7IFRhc2s6JywgZS50YXNrICYmIGUudGFzay5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbiwgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24uc3RhY2sgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3IucmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MID0gX19zeW1ib2xfXygndW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbkhhbmRsZXInKTtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IFpvbmVbVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkUmVzb2x1dGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRSZWplY3Rpb24ocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3ltYm9sU3RhdGUgPSBfX3N5bWJvbF9fKCdzdGF0ZScpO1xuICAgICAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgICAgICB2YXIgc3ltYm9sRmluYWxseSA9IF9fc3ltYm9sX18oJ2ZpbmFsbHknKTtcbiAgICAgICAgdmFyIHN5bWJvbFBhcmVudFByb21pc2VWYWx1ZSA9IF9fc3ltYm9sX18oJ3BhcmVudFByb21pc2VWYWx1ZScpO1xuICAgICAgICB2YXIgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgICAgIHZhciBzb3VyY2UgPSAnUHJvbWlzZS50aGVuJztcbiAgICAgICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuICAgICAgICB2YXIgUkVTT0xWRUQgPSB0cnVlO1xuICAgICAgICB2YXIgUkVKRUNURUQgPSBmYWxzZTtcbiAgICAgICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICAgICAgZnVuY3Rpb24gbWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcih3cmFwcGVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2FzQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlZEZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBUWVBFX0VSUk9SID0gJ1Byb21pc2UgcmVzb2x2ZWQgd2l0aCBpdHNlbGYnO1xuICAgICAgICB2YXIgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCA9IF9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKTtcbiAgICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihUWVBFX0VSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvbmx5IGdldCB2YWx1ZS50aGVuIG9uY2UgYmFzZWQgb24gcHJvbWlzZSBzcGVjLlxuICAgICAgICAgICAgICAgIHZhciB0aGVuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZVdyYXBwZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sU3RhdGUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFZhbHVlKSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCB2YWx1ZVtzeW1ib2xTdGF0ZV0sIHZhbHVlW3N5bWJvbFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGJ5IFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHVzZSBwYXJlbnQgcHJvbWlzZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0YXNrIGluZm9ybWF0aW9uIGluIHZhbHVlIHdoZW4gZXJyb3Igb2NjdXJzLCBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gc29tZSBhZGRpdGlvbmFsIHdvcmsgc3VjaCBhcyByZW5kZXIgbG9uZ1N0YWNrVHJhY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNlID0gWm9uZS5jdXJyZW50VGFzayAmJiBab25lLmN1cnJlbnRUYXNrLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBab25lLmN1cnJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGxvbmcgc3RhY2sgdHJhY2UgaW50byBlcnJvciB3aGVuIGluIGxvbmdTdGFja1RyYWNlWm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHZhbHVlLCBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdHJhY2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSB3ZSB0aHJvd3MgYSBuZXcgRXJyb3IgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaWYgdGhlIHZhbHVlIGlzIG5vdCBhbiBlcnJvciwgem9uZS5qcyBidWlsZHMgYW4gYEVycm9yYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBoZXJlIHRvIGF0dGFjaCB0aGUgc3RhY2sgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSk6ICcgKyByZWFkYWJsZU9iamVjdFRvU3RyaW5nKHZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgZGlzYWJsZSB3cmFwcGluZyB1bmNhdWdodCBwcm9taXNlIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW5zdGVhZCBvZiB3cmFwcGluZyBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnB1c2godW5jYXVnaHRQcm9taXNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFJFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVIgPSBfX3N5bWJvbF9fKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpO1xuICAgICAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgbm8gY2F0Y2ggc3RhdHVzXG4gICAgICAgICAgICAgICAgLy8gYW5kIHF1ZXVlLmxlbmd0aCA+IDAsIG1lYW5zIHRoZXJlIGlzIGEgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgIC8vIGhlcmUgdG8gaGFuZGxlIHRoZSByZWplY3RlZCBwcm9taXNlLCB3ZSBzaG91bGQgdHJpZ2dlclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvd3MucmVqZWN0aW9uaGFuZGxlZCBldmVudEhhbmRsZXIgb3Igbm9kZWpzIHJlamVjdGlvbkhhbmRsZWRcbiAgICAgICAgICAgICAgICAvLyBldmVudEhhbmRsZXJcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IFpvbmVbUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgeyByZWplY3Rpb246IHByb21pc2Vbc3ltYm9sVmFsdWVdLCBwcm9taXNlOiBwcm9taXNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZVN0YXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV07XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBwcm9taXNlU3RhdGUgP1xuICAgICAgICAgICAgICAgICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSA/IG9uUmVqZWN0ZWQgOlxuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVqZWN0aW9uO1xuICAgICAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50UHJvbWlzZVZhbHVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsbHlQcm9taXNlID0gISFjaGFpblByb21pc2UgJiYgc3ltYm9sRmluYWxseSA9PT0gY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaW5hbGx5UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlXSA9IHBhcmVudFByb21pc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdID0gcHJvbWlzZVN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBub3QgcGFzcyB2YWx1ZSB0byBmaW5hbGx5IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHpvbmUucnVuKGRlbGVnYXRlLCB1bmRlZmluZWQsIGlzRmluYWxseVByb21pc2UgJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZWplY3Rpb24gJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZXNvbHV0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFtdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRQcm9taXNlVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMsIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoaXMgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNoYWluUHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkcgPSAnZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZSgpIHsgW25hdGl2ZSBjb2RlXSB9JztcbiAgICAgICAgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHZhciBBZ2dyZWdhdGVFcnJvciA9IGdsb2JhbC5BZ2dyZWdhdGVFcnJvcjtcbiAgICAgICAgdmFyIFpvbmVBd2FyZVByb21pc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFVOUkVTT0xWRUQ7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBbXTsgLy8gcXVldWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0b3Iob25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIFJFU09MVkVEKSksIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFU09MVkVELCB2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFSkVDVEVELCBlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5hbnkgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMgfHwgdHlwZW9mIHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoW10sICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChab25lQXdhcmVQcm9taXNlLnJlc29sdmUodikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab25lQXdhcmVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXNbaV0udGhlbihmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycywgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHZhciByZWplY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0ID0gcmVqO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMiA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UuYWxsV2l0aENhbGxiYWNrKHZhbHVlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5hbGxTZXR0bGVkID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHZhciBQID0gdGhpcyAmJiB0aGlzLnByb3RvdHlwZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgPyB0aGlzIDogWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUC5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW5DYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAoeyBzdGF0dXM6ICdmdWxmaWxsZWQnLCB2YWx1ZTogdmFsdWUgfSk7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuICh7IHN0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlcnIgfSk7IH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbFdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgYXQgMiB0byBwcmV2ZW50IHByZW1hdHVyZWx5IHJlc29sdmluZyBpZiAudGhlbiBpcyBjYWxsZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgdmFyIHVucmVzb2x2ZWRDb3VudCA9IDI7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8zID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpc18xLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJWYWx1ZUluZGV4ID0gdmFsdWVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSBjYWxsYmFjayA/IGNhbGxiYWNrLnRoZW5DYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSBjYWxsYmFjay5lcnJvckNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoICh0aGVuRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhlbkVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzMgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc18zW19pXTtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2UgdGhlIHVucmVzb2x2ZWRDb3VudCB6ZXJvLWJhc2VkIGFnYWluLlxuICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudCAtPSAyO1xuICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnUHJvbWlzZSc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIFdlIG11c3QgcmVhZCBgU3ltYm9sLnNwZWNpZXNgIHNhZmVseSBiZWNhdXNlIGB0aGlzYCBtYXkgYmUgYW55dGhpbmcuIEZvciBpbnN0YW5jZSwgYHRoaXNgXG4gICAgICAgICAgICAgICAgLy8gbWF5IGJlIGFuIG9iamVjdCB3aXRob3V0IGEgcHJvdG90eXBlIChjcmVhdGVkIHRocm91Z2ggYE9iamVjdC5jcmVhdGUobnVsbClgKTsgdGh1c1xuICAgICAgICAgICAgICAgIC8vIGB0aGlzLmNvbnN0cnVjdG9yYCB3aWxsIGJlIHVuZGVmaW5lZC4gT25lIG9mIHRoZSB1c2UgY2FzZXMgaXMgU3lzdGVtSlMgY3JlYXRpbmdcbiAgICAgICAgICAgICAgICAvLyBwcm90b3R5cGUtbGVzcyBvYmplY3RzIChtb2R1bGVzKSB2aWEgYE9iamVjdC5jcmVhdGUobnVsbClgLiBUaGUgU3lzdGVtSlMgY3JlYXRlcyBhbiBlbXB0eVxuICAgICAgICAgICAgICAgIC8vIG9iamVjdCBhbmQgY29waWVzIHByb21pc2UgcHJvcGVydGllcyBpbnRvIHRoYXQgb2JqZWN0ICh3aXRoaW4gdGhlIGBnZXRPckNyZWF0ZUxvYWRgXG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24pLiBUaGUgem9uZS5qcyB0aGVuIGNoZWNrcyBpZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaGFzIHRoZSBgdGhlbmAgbWV0aG9kIGFuZCBpbnZva2VzXG4gICAgICAgICAgICAgICAgLy8gaXQgd2l0aCB0aGUgYHZhbHVlYCBjb250ZXh0LiBPdGhlcndpc2UsIHRoaXMgd2lsbCB0aHJvdyBhbiBlcnJvcjogYFR5cGVFcnJvcjogQ2Fubm90IHJlYWRcbiAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAnU3ltYm9sKFN5bWJvbC5zcGVjaWVzKScpYC5cbiAgICAgICAgICAgICAgICB2YXIgQyA9IChfYSA9IHRoaXMuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtTeW1ib2wuc3BlY2llc107XG4gICAgICAgICAgICAgICAgaWYgKCFDIHx8IHR5cGVvZiBDICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIEMgPSB0aGlzLmNvbnN0cnVjdG9yIHx8IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N5bWJvbFZhbHVlXS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgb24gdGhlIGNhbGwgdG8gYHRoZW5gIGFib3V0IHdoeSB0aGVlIGBTeW1ib2wuc3BlY2llc2AgaXMgc2FmZWx5IGFjY2Vzc2VkLlxuICAgICAgICAgICAgICAgIHZhciBDID0gKF9hID0gdGhpcy5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5zcGVjaWVzXTtcbiAgICAgICAgICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgQyA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV0gPSBzeW1ib2xGaW5hbGx5O1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgfSgpKTtcbiAgICAgICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgICAgIC8vIEUuZy4gQ2xvc3VyZSBDb21waWxlciBpbiBhZHZhbmNlZCBtb2RlLlxuICAgICAgICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ3JhY2UnXSA9IFpvbmVBd2FyZVByb21pc2UucmFjZTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcbiAgICAgICAgdmFyIE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0gPSBnbG9iYWxbJ1Byb21pc2UnXTtcbiAgICAgICAgZ2xvYmFsWydQcm9taXNlJ10gPSBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB2YXIgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgICAgICBmdW5jdGlvbiBwYXRjaFRoZW4oQ3Rvcikge1xuICAgICAgICAgICAgdmFyIHByb3RvID0gQ3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgICAgICAgIGlmIChwcm9wICYmIChwcm9wLndyaXRhYmxlID09PSBmYWxzZSB8fCAhcHJvcC5jb25maWd1cmFibGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgQ3Rvci5wcm90b3R5cGUudGhlbiBwcm9wZXJ0eURlc2NyaXB0b3IgaXMgd3JpdGFibGUgb3Igbm90XG4gICAgICAgICAgICAgICAgLy8gaW4gbWV0ZW9yIGVudiwgd3JpdGFibGUgaXMgZmFsc2UsIHdlIHNob3VsZCBpZ25vcmUgc3VjaCBjYXNlXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgICAgICBwcm90b1tzeW1ib2xUaGVuXSA9IG9yaWdpbmFsVGhlbjtcbiAgICAgICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWQgPSBuZXcgWm9uZUF3YXJlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKF90aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgICAgIGZ1bmN0aW9uIHpvbmVpZnkoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3RvciA9IHJlc3VsdFByb21pc2UuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKCFjdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFRoZW4oY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCAnZmV0Y2gnLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIHpvbmVpZnkoZGVsZWdhdGUpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvLyBvdmVycmlkZSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gbWFrZSB6b25lLmpzIHBhdGNoZWQgZnVuY3Rpb25cbiAgICAvLyBsb29rIGxpa2UgbmF0aXZlIGZ1bmN0aW9uXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3RvU3RyaW5nJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAvLyBwYXRjaCBGdW5jLnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBPUklHSU5BTF9ERUxFR0FURV9TWU1CT0wgPSB6b25lU3ltYm9sJDEoJ09yaWdpbmFsRGVsZWdhdGUnKTtcbiAgICAgICAgdmFyIFBST01JU0VfU1lNQk9MID0gem9uZVN5bWJvbCQxKCdQcm9taXNlJyk7XG4gICAgICAgIHZhciBFUlJPUl9TWU1CT0wgPSB6b25lU3ltYm9sJDEoJ0Vycm9yJyk7XG4gICAgICAgIHZhciBuZXdGdW5jdGlvblRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxEZWxlZ2F0ZSA9IHRoaXNbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsRGVsZWdhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT09IFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV9TWU1CT0xdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG5hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF0aXZlRXJyb3IgPSBnbG9iYWxbRVJST1JfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdGl2ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBuZXdGdW5jdGlvblRvU3RyaW5nW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF0gPSBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmc7XG4gICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG4gICAgICAgIC8vIHBhdGNoIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgICAgICB2YXIgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBQUk9NSVNFX09CSkVDVF9UT19TVFJJTkcgPSAnW29iamVjdCBQcm9taXNlXSc7XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0VG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIE5vdGU6IFdlIHBhc3MgdGhlIGBvcHRpb25zYCBvYmplY3QgYXMgdGhlIGV2ZW50IGhhbmRsZXIgdG9vLiBUaGlzIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlXG4gICAgICAgICAgICAvLyBzaWduYXR1cmUgb2YgYGFkZEV2ZW50TGlzdGVuZXJgIG9yIGByZW1vdmVFdmVudExpc3RlbmVyYCBidXQgZW5hYmxlcyB1cyB0byByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIHdpdGhvdXQgYW4gYWN0dWFsIGhhbmRsZXIuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYW4gaWRlbnRpZmllciB0byB0ZWxsIFpvbmVUYXNrIGRvIG5vdCBjcmVhdGUgYSBuZXcgaW52b2tlIGNsb3N1cmVcbiAgICB2YXIgT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBID0ge1xuICAgICAgICB1c2VHOiB0cnVlXG4gICAgfTtcbiAgICB2YXIgem9uZVN5bWJvbEV2ZW50TmFtZXMgPSB7fTtcbiAgICB2YXIgZ2xvYmFsU291cmNlcyA9IHt9O1xuICAgIHZhciBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYID0gbmV3IFJlZ0V4cCgnXicgKyBaT05FX1NZTUJPTF9QUkVGSVggKyAnKFxcXFx3KykodHJ1ZXxmYWxzZSkkJyk7XG4gICAgdmFyIElNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0wgPSB6b25lU3ltYm9sJDEoJ3Byb3BhZ2F0aW9uU3RvcHBlZCcpO1xuICAgIGZ1bmN0aW9uIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSwgZXZlbnROYW1lVG9TdHJpbmcpIHtcbiAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBUUlVFX1NUUjtcbiAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBhcGlzLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmFkZCkgfHwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICAgICAgdmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgICAgICB2YXIgTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMubGlzdGVuZXJzKSB8fCAnZXZlbnRMaXN0ZW5lcnMnO1xuICAgICAgICB2YXIgUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ybUFsbCkgfHwgJ3JlbW92ZUFsbExpc3RlbmVycyc7XG4gICAgICAgIHZhciB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2wkMShBRERfRVZFTlRfTElTVEVORVIpO1xuICAgICAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIEFERF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgICAgICAgdmFyIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgPSAncHJlcGVuZExpc3RlbmVyJztcbiAgICAgICAgdmFyIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgUFJFUEVORF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgICAgICAgdmFyIGludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBldmVudCkge1xuICAgICAgICAgICAgLy8gZm9yIGJldHRlciBwZXJmb3JtYW5jZSwgY2hlY2sgaXNSZW1vdmVkIHdoaWNoIGlzIHNldFxuICAgICAgICAgICAgLy8gYnkgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgaWYgKHRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdvYmplY3QnICYmIGRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBiaW5kIHZlcnNpb24gb2YgaGFuZGxlRXZlbnQgd2hlbiBpbnZva2VcbiAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBkZWxlZ2F0ZS5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnZva2Ugc3RhdGljIHRhc2suaW52b2tlXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHRyeS9jYXRjaCBlcnJvciBoZXJlLCBvdGhlcndpc2UsIHRoZSBlcnJvciBpbiBvbmUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIC8vIHdpbGwgYnJlYWsgdGhlIGV4ZWN1dGlvbnMgb2YgdGhlIG90aGVyIGV2ZW50IGxpc3RlbmVycy4gQWxzbyBlcnJvciB3aWxsXG4gICAgICAgICAgICAvLyBub3QgcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIGBvbmNlYCBvcHRpb25zIGlzIHRydWUuXG4gICAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKHRhc2ssIHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHRhc2sub3B0aW9ucztcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLm9uY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBvcHRpb25zLm9uY2UgaXMgdHJ1ZSwgYWZ0ZXIgaW52b2tlIG9uY2UgcmVtb3ZlIGxpc3RlbmVyIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGJyb3dzZXIgbmVlZCB0byBkbyB0aGlzLCBub2RlanMgZXZlbnRFbWl0dGVyIHdpbGwgY2FsIHJlbW92ZUxpc3RlbmVyXG4gICAgICAgICAgICAgICAgLy8gaW5zaWRlIEV2ZW50RW1pdHRlci5vbmNlXG4gICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlXzEgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRhcmdldFtSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGFyZ2V0LCBldmVudC50eXBlLCBkZWxlZ2F0ZV8xLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gZ2xvYmFsQ2FsbGJhY2soY29udGV4dCwgZXZlbnQsIGlzQ2FwdHVyZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgICAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgICAgICAvLyB8fCBnbG9iYWwgaXMgbmVlZGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNvbnRleHQgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnQudHlwZV1baXNDYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdXTtcbiAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIGNvbmNlcm4sIGlmIHRhc2subGVuZ3RoID09PSAxLCBqdXN0IGludm9rZVxuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcnIgJiYgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzgzNlxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IHRoZSB0YXNrcyBhcnJheSBiZWZvcmUgaW52b2tlLCB0byBhdm9pZFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY2FsbGJhY2sgd2lsbCByZW1vdmUgaXRzZWxmIG9yIG90aGVyIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3B5VGFza3MgPSB0YXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcHlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50W0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gaW52b2tlVGFzayhjb3B5VGFza3NbaV0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlcmUgaXMgb25seSBvbmUgZXJyb3IsIHdlIGRvbid0IG5lZWQgdG8gc2NoZWR1bGUgbWljcm9UYXNrXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF80ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkubmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfNChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgICAgICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IHRydWVcbiAgICAgICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbENhbGxiYWNrKHRoaXMsIGV2ZW50LCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVzZUdsb2JhbENhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVzZUdsb2JhbENhbGxiYWNrID0gcGF0Y2hPcHRpb25zLnVzZUc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5jaGtEdXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXR1cm5UYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5UYXJnZXQgPSBwYXRjaE9wdGlvbnMucnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBvYmo7XG4gICAgICAgICAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KEFERF9FVkVOVF9MSVNURU5FUikpIHtcbiAgICAgICAgICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcHJvdG8gJiYgb2JqW0FERF9FVkVOVF9MSVNURU5FUl0pIHtcbiAgICAgICAgICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXByb3RvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudE5hbWVUb1N0cmluZyA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZXZlbnROYW1lVG9TdHJpbmc7XG4gICAgICAgICAgICAvLyBhIHNoYXJlZCBnbG9iYWwgdGFza0RhdGEgdG8gcGFzcyBkYXRhIGZvciBzY2hlZHVsZUV2ZW50VGFza1xuICAgICAgICAgICAgLy8gc28gd2UgZG8gbm90IG5lZWQgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBqdXN0IGZvciBwYXNzIHNvbWUgZGF0YVxuICAgICAgICAgICAgdmFyIHRhc2tEYXRhID0ge307XG4gICAgICAgICAgICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wkMShSRU1PVkVfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVMaXN0ZW5lcnMgPSBwcm90b1t6b25lU3ltYm9sJDEoTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbCQxKFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcjtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnByZXBlbmQpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wkMShwYXRjaE9wdGlvbnMucHJlcGVuZCldID1cbiAgICAgICAgICAgICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGlzIHV0aWwgZnVuY3Rpb24gd2lsbCBidWlsZCBhbiBvcHRpb24gb2JqZWN0IHdpdGggcGFzc2l2ZSBvcHRpb25cbiAgICAgICAgICAgICAqIHRvIGhhbmRsZSBhbGwgcG9zc2libGUgaW5wdXQgZnJvbSB0aGUgdXNlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhvcHRpb25zLCBwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvZXNuJ3Qgc3VwcG9ydCBwYXNzaXZlIGJ1dCB1c2VyIHdhbnQgdG8gcGFzcyBhbiBvYmplY3QgYXMgb3B0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG5vdCB3b3JrIG9uIHNvbWUgb2xkIGJyb3dzZXIsIHNvIHdlIGp1c3QgcGFzcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgdXNlQ2FwdHVyZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXBhc3NpdmVTdXBwb3J0ZWQgfHwgIXBhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNhcHR1cmU6IG9wdGlvbnMsIHBhc3NpdmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHBhc3NpdmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLnBhc3NpdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgdGFzayBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUsXG4gICAgICAgICAgICAgICAgLy8ganVzdCByZXR1cm4sIGJlY2F1c2Ugd2UgdXNlIHRoZSBzaGFyZWQgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgaGVyZS5cbiAgICAgICAgICAgICAgICBpZiAodGFza0RhdGEuaXNFeGlzdGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2tEYXRhLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbUNhbmNlbEdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGFzayBpcyBub3QgbWFya2VkIGFzIGlzUmVtb3ZlZCwgdGhpcyBjYWxsIGlzIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgLy8gZnJvbSBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSB0YXNrXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB0YXNrc0xpc3Qgb2YgdGFyZ2V0IGZpcnN0XG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrLmlzUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW3Rhc2suZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbdGFzay5jYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmFsbFJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgcmVhbGx5IHJlbW92ZSB0aGUgZ2xvYmFsIGV2ZW50IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCwgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrLmFsbFJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlUHJlcGVuZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21TY2hlZHVsZUdsb2JhbCA6IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUNhbmNlbCA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tQ2FuY2VsR2xvYmFsIDogY3VzdG9tQ2FuY2VsTm9uR2xvYmFsO1xuICAgICAgICAgICAgdmFyIGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlID0gZnVuY3Rpb24gKHRhc2ssIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGVPZkRlbGVnYXRlID0gdHlwZW9mIGRlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZU9mRGVsZWdhdGUgPT09ICdmdW5jdGlvbicgJiYgdGFzay5jYWxsYmFjayA9PT0gZGVsZWdhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNvbXBhcmUgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5kaWZmKSA/IHBhdGNoT3B0aW9ucy5kaWZmIDogY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGU7XG4gICAgICAgICAgICB2YXIgdW5wYXRjaGVkRXZlbnRzID0gWm9uZVt6b25lU3ltYm9sJDEoJ1VOUEFUQ0hFRF9FVkVOVFMnKV07XG4gICAgICAgICAgICB2YXIgcGFzc2l2ZUV2ZW50cyA9IF9nbG9iYWxbem9uZVN5bWJvbCQxKCdQQVNTSVZFX0VWRU5UUycpXTtcbiAgICAgICAgICAgIHZhciBtYWtlQWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAobmF0aXZlTGlzdGVuZXIsIGFkZFNvdXJjZSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4sIHJldHVyblRhcmdldCwgcHJlcGVuZCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQgPT09IHZvaWQgMCkgeyByZXR1cm5UYXJnZXQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgICAgIGlmIChwcmVwZW5kID09PSB2b2lkIDApIHsgcHJlcGVuZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTm9kZSAmJiBldmVudE5hbWUgPT09ICd1bmNhdWdodEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHBhdGNoIHVuY2F1Z2h0RXhjZXB0aW9uIG9mIG5vZGVqcyB0byBwcmV2ZW50IGVuZGxlc3MgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIGZ1bmN0aW9uIGZvciBoYW5kbGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIGhlcmUgdG8gaW1wcm92ZSBhZGRFdmVudExpc3RlbmVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIHdoZW4gaW52b2tlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0hhbmRsZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUhhbmRsZXIgJiYgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXNzaXZlID0gcGFzc2l2ZVN1cHBvcnRlZCAmJiAhIXBhc3NpdmVFdmVudHMgJiYgcGFzc2l2ZUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMoYXJndW1lbnRzWzJdLCBwYXNzaXZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVucGF0Y2hlZEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdW5wYXRjaGVkIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5wYXRjaGVkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gdW5wYXRjaGVkRXZlbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbmNlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLm9uY2UgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0V4aXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGFzayByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2tzW2ldLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IHRhcmdldC5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSB0YXJnZXRTb3VyY2VbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gY29uc3RydWN0b3JOYW1lICsgYWRkU291cmNlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgY3JlYXRlIGEgbmV3IG9iamVjdCBhcyB0YXNrLmRhdGEgdG8gcGFzcyB0aG9zZSB0aGluZ3NcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCB1c2UgdGhlIGdsb2JhbCBzaGFyZWQgb25lXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIG9uY2Ugb3B0aW9ucywgd2UgZG9uJ3QgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmF0aXZlIGFkZEV2ZW50TGlzdGVuZXIsIGluc3RlYWQgd2Uga2VlcCB0aGUgb25jZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaGFuZGxlIG91cnNlbHZlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEuaXNFeGlzdGluZyA9IGlzRXhpc3Rpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGFza0RhdGEgaW50byBkYXRhIHRvIGFsbG93IG9uU2NoZWR1bGVFdmVudFRhc2sgdG8gYWNjZXNzIHRoZSB0YXNrIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSB6b25lLnNjaGVkdWxlRXZlbnRUYXNrKHNvdXJjZSwgZGVsZWdhdGUsIGRhdGEsIGN1c3RvbVNjaGVkdWxlRm4sIGN1c3RvbUNhbmNlbEZuKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGNsZWFyIHRhc2tEYXRhLnRhcmdldCB0byBhdm9pZCBtZW1vcnkgbGVha1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA0NDJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBjbGVhciB1cCB0YXNrRGF0YSBiZWNhdXNlIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50YXNrRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBzYXZlIHRob3NlIGluZm9ybWF0aW9uIHRvIHRhc2sgaW4gY2FzZVxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiBtYXkgY2FsbCB0YXNrLnpvbmUuY2FuY2VsVGFzaygpIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBzdXBwb3J0IHBhc3NpdmUsIGFuZCB3ZSBwYXNzIGFuIG9wdGlvbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGFkZEV2ZW50TGlzdGVuZXIsIHdlIHNob3VsZCBzYXZlIHRoZSBvcHRpb25zIHRvIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBkZWxlZ2F0ZSBmb3IgY29tcGFyZSB0byBjaGVjayBkdXBsaWNhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJlcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlQWRkRXZlbnRMaXN0ZW5lciwgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHByb3RvW1BSRVBFTkRfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSwgY3VzdG9tU2NoZWR1bGVQcmVwZW5kLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJlxuICAgICAgICAgICAgICAgICAgICAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFzayA9IGV4aXN0aW5nVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2ssIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgdGFyZ2V0LCB3ZSBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIHdoaWNoIGlzIGFkZGVkIGJ5IG9uX3Byb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgdGFyZ2V0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHt9LCBzbyB3ZSBuZWVkIHRvIGNsZWFyIHRoaXMgaW50ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG9vIGlmIGFsbCBkZWxlZ2F0ZXMgYWxsIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25Qcm9wZXJ0eVN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArICdPTl9QUk9QRVJUWScgKyBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbb25Qcm9wZXJ0eVN5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay56b25lLmNhbmNlbFRhc2soZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpc3N1ZSA5MzAsIGRpZG4ndCBmaW5kIHRoZSBldmVudCBuYW1lIG9yIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB6b25lIGtlcHQgZXhpc3RpbmdUYXNrcywgdGhlIGNhbGxiYWNrIG1heWJlXG4gICAgICAgICAgICAgICAgLy8gYWRkZWQgb3V0c2lkZSBvZiB6b25lLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0byB0cnkgdG8gcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFza3MgPSBmaW5kRXZlbnRUYXNrcyh0YXJnZXQsIGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChkZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3AgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2dE5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG5vZGVqcyBFdmVudEVtaXR0ZXIsIHJlbW92ZUxpc3RlbmVyIGV2ZW50IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VkIGZvciBtb25pdG9yaW5nIHRoZSByZW1vdmVMaXN0ZW5lciBjYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28ganVzdCBrZWVwIHJlbW92ZUxpc3RlbmVyIGV2ZW50TGlzdGVuZXIgdW50aWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBldmVudExpc3RlbmVycyBhcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dE5hbWUgJiYgZXZ0TmFtZSAhPT0gJ3JlbW92ZUxpc3RlbmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZ0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHJlbW92ZUxpc3RlbmVyIGxpc3RlbmVyIGZpbmFsbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbENhcHR1cmVFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW1RSVUVfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVUYXNrcyA9IHRhcmdldFtzeW1ib2xDYXB0dXJlRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlVGFza3MgPSBjYXB0dXJlVGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tBRERfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVBZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVMaXN0ZW5lcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRzW2ldID0gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMoYXBpc1tpXSwgcGF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZFRhc2tzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICAgICAgICB2YXIgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIGlmIChldnROYW1lICYmICghZXZlbnROYW1lIHx8IGV2dE5hbWUgPT09IGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFRhc2tzLnB1c2godGFza3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kVGFza3M7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghc3ltYm9sRXZlbnROYW1lKSB7XG4gICAgICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUpO1xuICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FwdHVyZUZhbHNlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW0ZBTFNFX1NUUl1dO1xuICAgICAgICB2YXIgY2FwdHVyZVRydWVUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbVFJVRV9TVFJdXTtcbiAgICAgICAgaWYgKCFjYXB0dXJlRmFsc2VUYXNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNhcHR1cmVUcnVlVGFza3MgPyBjYXB0dXJlVHJ1ZVRhc2tzLnNsaWNlKCkgOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZUZhbHNlVGFza3MuY29uY2F0KGNhcHR1cmVUcnVlVGFza3MpIDpcbiAgICAgICAgICAgICAgICBjYXB0dXJlRmFsc2VUYXNrcy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgdmFyIEV2ZW50ID0gZ2xvYmFsWydFdmVudCddO1xuICAgICAgICBpZiAoRXZlbnQgJiYgRXZlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBhcGkucGF0Y2hNZXRob2QoRXZlbnQucHJvdG90eXBlLCAnc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJywgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHNlbGZbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2FsbCB0aGUgbmF0aXZlIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxuICAgICAgICAgICAgICAgIC8vIGluIGNhc2UgaW4gc29tZSBoeWJyaWQgYXBwbGljYXRpb24sIHNvbWUgcGFydCBvZlxuICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIHdpbGwgYmUgY29udHJvbGxlZCBieSB6b25lLCBzb21lIGFyZSBub3RcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICAgICAgICB2YXIgc3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fKG1ldGhvZCk7XG4gICAgICAgIGlmICh0YXJnZXRbc3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYXRpdmVEZWxlZ2F0ZSA9IHRhcmdldFtzeW1ib2xdID0gdGFyZ2V0W21ldGhvZF07XG4gICAgICAgIHRhcmdldFttZXRob2RdID0gZnVuY3Rpb24gKG5hbWUsIG9wdHMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBcIlwiLmNvbmNhdCh0YXJnZXROYW1lLCBcIi5cIikuY29uY2F0KG1ldGhvZCwgXCI6OlwiKSArIGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gb3B0cy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoZSBgcGF0Y2hDYWxsYmFja3NgIGlzIHVzZWQgZm9yIHBhdGNoaW5nIHRoZSBgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50YCBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gYGN1c3RvbUVsZW1lbnRzLmRlZmluZWAuIFdlIGV4cGxpY2l0bHkgd3JhcCB0aGUgcGF0Y2hpbmcgY29kZSBpbnRvIHRyeS1jYXRjaCBzaW5jZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFja3MgbWF5IGJlIGFscmVhZHkgcGF0Y2hlZCBieSBvdGhlciB3ZWIgY29tcG9uZW50cyBmcmFtZXdvcmtzIChlLmcuIExXQyksIGFuZCB0aGV5XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhvc2UgcHJvcGVydGllcyBub24td3JpdGFibGUuIFRoaXMgbWVhbnMgdGhhdCBwYXRjaGluZyBjYWxsYmFjayB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGBjYW5ub3QgYXNzaWduIHRvIHJlYWQtb25seSBwcm9wZXJ0eWAuIFNlZSB0aGlzIGNvZGUgYXMgYW4gZXhhbXBsZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3NhbGVzZm9yY2UvbHdjL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL0Bsd2MvZW5naW5lLWNvcmUvc3JjL2ZyYW1ld29yay9iYXNlLWJyaWRnZS1lbGVtZW50LnRzI0wxODAtTDE4NlxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHN0b3AgdGhlIGFwcGxpY2F0aW9uIHJlbmRlcmluZyBpZiB3ZSBjb3VsZG4ndCBwYXRjaCBzb21lXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrLCBlLmcuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLlxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpLl9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlW2NhbGxiYWNrXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogd2UgbGVhdmUgdGhlIGNhdGNoIGJsb2NrIGVtcHR5IHNpbmNlIHRoZXJlJ3Mgbm8gd2F5IHRvIGhhbmRsZSB0aGUgZXJyb3IgcmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbm9uLXdyaXRhYmxlIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlRGVsZWdhdGUuY2FsbCh0YXJnZXQsIG5hbWUsIG9wdHMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRhcmdldFttZXRob2RdLCBuYXRpdmVEZWxlZ2F0ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbHRlclByb3BlcnRpZXModGFyZ2V0LCBvblByb3BlcnRpZXMsIGlnbm9yZVByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzIHx8IGlnbm9yZVByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gb25Qcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aXAgPSBpZ25vcmVQcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAoaXApIHsgcmV0dXJuIGlwLnRhcmdldCA9PT0gdGFyZ2V0OyB9KTtcbiAgICAgICAgaWYgKCF0aXAgfHwgdGlwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uUHJvcGVydGllcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0SWdub3JlUHJvcGVydGllcyA9IHRpcFswXS5pZ25vcmVQcm9wZXJ0aWVzO1xuICAgICAgICByZXR1cm4gb25Qcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAob3ApIHsgcmV0dXJuIHRhcmdldElnbm9yZVByb3BlcnRpZXMuaW5kZXhPZihvcCkgPT09IC0xOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXModGFyZ2V0LCBvblByb3BlcnRpZXMsIGlnbm9yZVByb3BlcnRpZXMsIHByb3RvdHlwZSkge1xuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRhcmdldCBpcyBhdmFpbGFibGUsIHNvbWV0aW1lcyB0YXJnZXQgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbHRlcmVkUHJvcGVydGllcyA9IGZpbHRlclByb3BlcnRpZXModGFyZ2V0LCBvblByb3BlcnRpZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyh0YXJnZXQsIGZpbHRlcmVkUHJvcGVydGllcywgcHJvdG90eXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBldmVudCBuYW1lIHByb3BlcnRpZXMgd2hpY2ggdGhlIGV2ZW50IG5hbWUgc3RhcnRzV2l0aCBgb25gXG4gICAgICogZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCBpdHNlbGYsIGluaGVyaXRlZCBwcm9wZXJ0aWVzIGFyZSBub3QgY29uc2lkZXJlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPbkV2ZW50TmFtZXModGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lLnN0YXJ0c1dpdGgoJ29uJykgJiYgbmFtZS5sZW5ndGggPiAyOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZS5zdWJzdHJpbmcoMik7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgaWYgKGlzTm9kZSAmJiAhaXNNaXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50cycpXSkge1xuICAgICAgICAgICAgLy8gZXZlbnRzIGFyZSBhbHJlYWR5IGJlZW4gcGF0Y2hlZCBieSBsZWdhY3kgcGF0Y2guXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlnbm9yZVByb3BlcnRpZXMgPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICAgICAgICB2YXIgcGF0Y2hUYXJnZXRzID0gW107XG4gICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcm5hbFdpbmRvd18xID0gd2luZG93O1xuICAgICAgICAgICAgcGF0Y2hUYXJnZXRzID0gcGF0Y2hUYXJnZXRzLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgJ0RvY3VtZW50JywgJ1NWR0VsZW1lbnQnLCAnRWxlbWVudCcsICdIVE1MRWxlbWVudCcsICdIVE1MQm9keUVsZW1lbnQnLCAnSFRNTE1lZGlhRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgJ0hUTUxGcmFtZVNldEVsZW1lbnQnLCAnSFRNTEZyYW1lRWxlbWVudCcsICdIVE1MSUZyYW1lRWxlbWVudCcsICdIVE1MTWFycXVlZUVsZW1lbnQnLCAnV29ya2VyJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB2YXIgaWdub3JlRXJyb3JQcm9wZXJ0aWVzID0gaXNJRSgpID8gW3sgdGFyZ2V0OiBpbnRlcm5hbFdpbmRvd18xLCBpZ25vcmVQcm9wZXJ0aWVzOiBbJ2Vycm9yJ10gfV0gOiBbXTtcbiAgICAgICAgICAgIC8vIGluIElFL0VkZ2UsIG9uUHJvcCBub3QgZXhpc3QgaW4gd2luZG93IG9iamVjdCwgYnV0IGluIFdpbmRvd1Byb3RvdHlwZVxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBwYXNzIFdpbmRvd1Byb3RvdHlwZSB0byBjaGVjayBvblByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvd18xLCBnZXRPbkV2ZW50TmFtZXMoaW50ZXJuYWxXaW5kb3dfMSksIGlnbm9yZVByb3BlcnRpZXMgPyBpZ25vcmVQcm9wZXJ0aWVzLmNvbmNhdChpZ25vcmVFcnJvclByb3BlcnRpZXMpIDogaWdub3JlUHJvcGVydGllcywgT2JqZWN0R2V0UHJvdG90eXBlT2YoaW50ZXJuYWxXaW5kb3dfMSkpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoVGFyZ2V0cyA9IHBhdGNoVGFyZ2V0cy5jb25jYXQoW1xuICAgICAgICAgICAgJ1hNTEh0dHBSZXF1ZXN0JywgJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnLCAnSURCSW5kZXgnLCAnSURCUmVxdWVzdCcsICdJREJPcGVuREJSZXF1ZXN0JyxcbiAgICAgICAgICAgICdJREJEYXRhYmFzZScsICdJREJUcmFuc2FjdGlvbicsICdJREJDdXJzb3InLCAnV2ViU29ja2V0J1xuICAgICAgICBdKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfZ2xvYmFsW3BhdGNoVGFyZ2V0c1tpXV07XG4gICAgICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKHRhcmdldC5wcm90b3R5cGUsIGdldE9uRXZlbnROYW1lcyh0YXJnZXQucHJvdG90eXBlKSwgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3V0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBuYXRpdmUgZXZlbnQgbmFtZXMgYnkgbG9va2luZyBhdCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIG9uIHRoZSBnbG9iYWwgbmFtZXNwYWNlLCBlLmcuICdvbmNsaWNrJy5cbiAgICAgICAgdmFyIGV2ZW50TmFtZXMgPSBnZXRPbkV2ZW50TmFtZXMoZ2xvYmFsKTtcbiAgICAgICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzID0gcGF0Y2hPblByb3BlcnRpZXM7XG4gICAgICAgIGFwaS5wYXRjaE1ldGhvZCA9IHBhdGNoTWV0aG9kO1xuICAgICAgICBhcGkuYmluZEFyZ3VtZW50cyA9IGJpbmRBcmd1bWVudHM7XG4gICAgICAgIGFwaS5wYXRjaE1hY3JvVGFzayA9IHBhdGNoTWFjcm9UYXNrO1xuICAgICAgICAvLyBJbiBlYXJsaWVyIHZlcnNpb24gb2Ygem9uZS5qcyAoPDAuOS4wKSwgd2UgdXNlIGVudiBuYW1lIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCB0b1xuICAgICAgICAvLyBkZWZpbmUgd2hpY2ggZXZlbnRzIHdpbGwgbm90IGJlIHBhdGNoZWQgYnkgYFpvbmUuanNgLlxuICAgICAgICAvLyBJbiBuZXdlciB2ZXJzaW9uICg+PTAuOS4wKSwgd2UgY2hhbmdlIHRoZSBlbnYgbmFtZSB0byBgX196b25lX3N5bWJvbF9fVU5QQVRDSEVEX0VWRU5UU2AgdG8ga2VlcFxuICAgICAgICAvLyB0aGUgbmFtZSBjb25zaXN0ZW50IHdpdGggYW5ndWxhciByZXBvLlxuICAgICAgICAvLyBUaGUgIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCBpcyBkZXByZWNhdGVkLCBidXQgaXQgaXMgc3RpbGwgYmUgc3VwcG9ydGVkIGZvclxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgdmFyIFNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdCTEFDS19MSVNURURfRVZFTlRTJyk7XG4gICAgICAgIHZhciBTWU1CT0xfVU5QQVRDSEVEX0VWRU5UUyA9IFpvbmUuX19zeW1ib2xfXygnVU5QQVRDSEVEX0VWRU5UUycpO1xuICAgICAgICBpZiAoZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSkge1xuICAgICAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10pIHtcbiAgICAgICAgICAgIFpvbmVbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gWm9uZVtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10gPVxuICAgICAgICAgICAgICAgIGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU107XG4gICAgICAgIH1cbiAgICAgICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUgPSBwYXRjaEV2ZW50UHJvdG90eXBlO1xuICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldCA9IHBhdGNoRXZlbnRUYXJnZXQ7XG4gICAgICAgIGFwaS5pc0lFT3JFZGdlID0gaXNJRU9yRWRnZTtcbiAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0RGVmaW5lUHJvcGVydHk7XG4gICAgICAgIGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICAgIGFwaS5PYmplY3RDcmVhdGUgPSBPYmplY3RDcmVhdGU7XG4gICAgICAgIGFwaS5BcnJheVNsaWNlID0gQXJyYXlTbGljZTtcbiAgICAgICAgYXBpLnBhdGNoQ2xhc3MgPSBwYXRjaENsYXNzO1xuICAgICAgICBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZSA9IHdyYXBXaXRoQ3VycmVudFpvbmU7XG4gICAgICAgIGFwaS5maWx0ZXJQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcztcbiAgICAgICAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCA9IGF0dGFjaE9yaWdpblRvUGF0Y2hlZDtcbiAgICAgICAgYXBpLl9yZWRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgICAgICBhcGkucGF0Y2hDYWxsYmFja3MgPSBwYXRjaENhbGxiYWNrcztcbiAgICAgICAgYXBpLmdldEdsb2JhbE9iamVjdHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgZ2xvYmFsU291cmNlczogZ2xvYmFsU291cmNlcyxcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzOiB6b25lU3ltYm9sRXZlbnROYW1lcyxcbiAgICAgICAgICAgIGV2ZW50TmFtZXM6IGV2ZW50TmFtZXMsXG4gICAgICAgICAgICBpc0Jyb3dzZXI6IGlzQnJvd3NlcixcbiAgICAgICAgICAgIGlzTWl4OiBpc01peCxcbiAgICAgICAgICAgIGlzTm9kZTogaXNOb2RlLFxuICAgICAgICAgICAgVFJVRV9TVFI6IFRSVUVfU1RSLFxuICAgICAgICAgICAgRkFMU0VfU1RSOiBGQUxTRV9TVFIsXG4gICAgICAgICAgICBaT05FX1NZTUJPTF9QUkVGSVg6IFpPTkVfU1lNQk9MX1BSRUZJWCxcbiAgICAgICAgICAgIEFERF9FVkVOVF9MSVNURU5FUl9TVFI6IEFERF9FVkVOVF9MSVNURU5FUl9TVFIsXG4gICAgICAgICAgICBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSOiBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSXG4gICAgICAgIH0pOyB9O1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qXG4gICAgICogVGhpcyBpcyBuZWNlc3NhcnkgZm9yIENocm9tZSBhbmQgQ2hyb21lIG1vYmlsZSwgdG8gZW5hYmxlXG4gICAgICogdGhpbmdzIGxpa2UgcmVkZWZpbmluZyBgY3JlYXRlZENhbGxiYWNrYCBvbiBhbiBlbGVtZW50LlxuICAgICAqL1xuICAgIHZhciB6b25lU3ltYm9sO1xuICAgIHZhciBfZGVmaW5lUHJvcGVydHk7XG4gICAgdmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgdmFyIF9jcmVhdGU7XG4gICAgdmFyIHVuY29uZmlndXJhYmxlc0tleTtcbiAgICBmdW5jdGlvbiBwcm9wZXJ0eVBhdGNoKCkge1xuICAgICAgICB6b25lU3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fO1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkgPSBPYmplY3Rbem9uZVN5bWJvbCgnZGVmaW5lUHJvcGVydHknKV0gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgICAgIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3Rbem9uZVN5bWJvbCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyldID1cbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICAgIF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgICAgICB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB6b25lU3ltYm9sKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5IFxcJycgKyBwcm9wICsgJ1xcJyBvZiAnICsgb2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJykge1xuICAgICAgICAgICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyk7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bSA9IF9iW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcHMsIHN5bSk7XG4gICAgICAgICAgICAgICAgLy8gU2luY2UgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIHJldHVybnMgKmFsbCogc3ltYm9scyxcbiAgICAgICAgICAgICAgICAvLyBpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgb25lcywgcmV0cmlldmUgcHJvcGVydHkgZGVzY3JpcHRvciBhbmQgY2hlY2tcbiAgICAgICAgICAgICAgICAvLyBlbnVtZXJhYmlsaXR5IHRoZXJlLiBQcm9jZWVkIHdpdGggdGhlIHJld3JpdGUgb25seSB3aGVuIGEgcHJvcGVydHkgaXNcbiAgICAgICAgICAgICAgICAvLyBlbnVtZXJhYmxlIHRvIG1ha2UgdGhlIGxvZ2ljIGNvbnNpc3RlbnQgd2l0aCB0aGUgd2F5IHJlZ3VsYXJcbiAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIGFyZSByZXRyaWV2ZWQgKHZpYSBgT2JqZWN0LmtleXNgLCB3aGljaCByZXNwZWN0c1xuICAgICAgICAgICAgICAgIC8vIGBlbnVtZXJhYmxlOiBmYWxzZWAgZmxhZykuIE1vcmUgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9FbnVtZXJhYmlsaXR5X2FuZF9vd25lcnNoaXBfb2ZfcHJvcGVydGllcyNyZXRyaWV2YWxcbiAgICAgICAgICAgICAgICBpZiAoZGVzYyA9PT0gbnVsbCB8fCBkZXNjID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgc3ltLCBwcm9wc1tzeW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKHByb3RvLCBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNPYmplY3QgPT09ICdvYmplY3QnICYmICFPYmplY3QuaXNGcm96ZW4ocHJvcGVydGllc09iamVjdCkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNPYmplY3RbcHJvcF0gPSByZXdyaXRlRGVzY3JpcHRvcihwcm90bywgcHJvcCwgcHJvcGVydGllc09iamVjdFtwcm9wXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2NyZWF0ZShwcm90bywgcHJvcGVydGllc09iamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgICAgIGlmIChkZXNjICYmIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpIHtcbiAgICAgICAgLy8gaXNzdWUtOTI3LCBpZiB0aGUgZGVzYyBpcyBmcm96ZW4sIGRvbid0IHRyeSB0byBjaGFuZ2UgdGhlIGRlc2NcbiAgICAgICAgaWYgKCFPYmplY3QuaXNGcm96ZW4oZGVzYykpIHtcbiAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBvYmogaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gc2V0IHRoZSBkZXNjIHRvIG9ialxuICAgICAgICAgICAgaWYgKCFvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiAhT2JqZWN0LmlzRnJvemVuKG9iaikpIHtcbiAgICAgICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkob2JqLCB1bmNvbmZpZ3VyYWJsZXNLZXksIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmpbdW5jb25maWd1cmFibGVzS2V5XSkge1xuICAgICAgICAgICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzYztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIG9mIGVycm9ycywgd2hlbiB0aGUgY29uZmlndXJhYmxlIGZsYWcgd2FzIGxpa2VseSBzZXQgYnkgcmV3cml0ZURlc2NyaXB0b3IoKSxcbiAgICAgICAgICAgICAgICAvLyBsZXQncyByZXRyeSB3aXRoIHRoZSBvcmlnaW5hbCBmbGFnIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzd2FsbG93RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdjcmVhdGVkQ2FsbGJhY2snIHx8IHByb3AgPT09ICdhdHRhY2hlZENhbGxiYWNrJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9PT0gJ2RldGFjaGVkQ2FsbGJhY2snIHx8IHByb3AgPT09ICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHN3YWxsb3cgdGhlIGVycm9yIGluIHJlZ2lzdGVyRWxlbWVudCBwYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgd29yayBhcm91bmQgc2luY2Ugc29tZSBhcHBsaWNhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwgaWYgd2UgdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FsbG93RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3dhbGxvd0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBTb21lIGFwcGxpY2F0aW9uIHN1Y2ggYXMgYHJlZ2lzdGVyRWxlbWVudGAgcGF0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgbmVlZCB0byBzd2FsbG93IHRoZSBlcnJvciwgaW4gdGhlIGZ1dHVyZSBhZnRlciB0aGVzZSBhcHBsaWNhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJlIHVwZGF0ZWQsIHRoZSBmb2xsb3dpbmcgbG9naWMgY2FuIGJlIHJlbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjSnNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbmZpZ3VyZSAnXCIuY29uY2F0KHByb3AsIFwiJyB3aXRoIGRlc2NyaXB0b3IgJ1wiKS5jb25jYXQoZGVzY0pzb24sIFwiJyBvbiBvYmplY3QgJ1wiKS5jb25jYXQob2JqLCBcIicgYW5kIGdvdCBlcnJvciwgZ2l2aW5nIHVwOiBcIikuY29uY2F0KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgZXZlbnROYW1lcyA9IF9iLmV2ZW50TmFtZXMsIGdsb2JhbFNvdXJjZXMgPSBfYi5nbG9iYWxTb3VyY2VzLCB6b25lU3ltYm9sRXZlbnROYW1lcyA9IF9iLnpvbmVTeW1ib2xFdmVudE5hbWVzLCBUUlVFX1NUUiA9IF9iLlRSVUVfU1RSLCBGQUxTRV9TVFIgPSBfYi5GQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCA9IF9iLlpPTkVfU1lNQk9MX1BSRUZJWDtcbiAgICAgICAgdmFyIFdURl9JU1NVRV81NTUgPSAnQW5jaG9yLEFyZWEsQXVkaW8sQlIsQmFzZSxCYXNlRm9udCxCb2R5LEJ1dHRvbixDYW52YXMsQ29udGVudCxETGlzdCxEaXJlY3RvcnksRGl2LEVtYmVkLEZpZWxkU2V0LEZvbnQsRm9ybSxGcmFtZSxGcmFtZVNldCxIUixIZWFkLEhlYWRpbmcsSHRtbCxJRnJhbWUsSW1hZ2UsSW5wdXQsS2V5Z2VuLExJLExhYmVsLExlZ2VuZCxMaW5rLE1hcCxNYXJxdWVlLE1lZGlhLE1lbnUsTWV0YSxNZXRlcixNb2QsT0xpc3QsT2JqZWN0LE9wdEdyb3VwLE9wdGlvbixPdXRwdXQsUGFyYWdyYXBoLFByZSxQcm9ncmVzcyxRdW90ZSxTY3JpcHQsU2VsZWN0LFNvdXJjZSxTcGFuLFN0eWxlLFRhYmxlQ2FwdGlvbixUYWJsZUNlbGwsVGFibGVDb2wsVGFibGUsVGFibGVSb3csVGFibGVTZWN0aW9uLFRleHRBcmVhLFRpdGxlLFRyYWNrLFVMaXN0LFVua25vd24sVmlkZW8nO1xuICAgICAgICB2YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgsV2ViU29ja2V0J1xuICAgICAgICAgICAgLnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciBFVkVOVF9UQVJHRVQgPSAnRXZlbnRUYXJnZXQnO1xuICAgICAgICB2YXIgYXBpcyA9IFtdO1xuICAgICAgICB2YXIgaXNXdGYgPSBfZ2xvYmFsWyd3dGYnXTtcbiAgICAgICAgdmFyIFdURl9JU1NVRV81NTVfQVJSQVkgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChpc1d0Zikge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2luZy1mcmFtZXdvcmsvaXNzdWVzLzU1NVxuICAgICAgICAgICAgYXBpcyA9IFdURl9JU1NVRV81NTVfQVJSQVkubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfZ2xvYmFsW0VWRU5UX1RBUkdFVF0pIHtcbiAgICAgICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUsIHdlIGluc3RlYWQgcGF0Y2ggdGhlIEFQSXMgaW4gdGhlIElETCB0aGF0IGluaGVyaXQgZnJvbSBFdmVudFRhcmdldFxuICAgICAgICAgICAgYXBpcyA9IE5PX0VWRU5UX1RBUkdFVDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNEaXNhYmxlSUVDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9kaXNhYmxlX0lFX2NoZWNrJ10gfHwgZmFsc2U7XG4gICAgICAgIHZhciBpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrID0gX2dsb2JhbFsnX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrJ10gfHwgZmFsc2U7XG4gICAgICAgIHZhciBpZU9yRWRnZSA9IGFwaS5pc0lFT3JFZGdlKCk7XG4gICAgICAgIHZhciBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy5hZGRFdmVudExpc3RlbmVyOic7XG4gICAgICAgIHZhciBGVU5DVElPTl9XUkFQUEVSID0gJ1tvYmplY3QgRnVuY3Rpb25XcmFwcGVyXSc7XG4gICAgICAgIHZhciBCUk9XU0VSX1RPT0xTID0gJ2Z1bmN0aW9uIF9fQlJPV1NFUlRPT0xTX0NPTlNPTEVfU0FGRUZVTkMoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgICAgIHZhciBwb2ludGVyRXZlbnRzTWFwID0ge1xuICAgICAgICAgICAgJ01TUG9pbnRlckNhbmNlbCc6ICdwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJEb3duJzogJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJFbnRlcic6ICdwb2ludGVyZW50ZXInLFxuICAgICAgICAgICAgJ01TUG9pbnRlckhvdmVyJzogJ3BvaW50ZXJob3ZlcicsXG4gICAgICAgICAgICAnTVNQb2ludGVyTGVhdmUnOiAncG9pbnRlcmxlYXZlJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJNb3ZlJzogJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJPdXQnOiAncG9pbnRlcm91dCcsXG4gICAgICAgICAgICAnTVNQb2ludGVyT3Zlcic6ICdwb2ludGVyb3ZlcicsXG4gICAgICAgICAgICAnTVNQb2ludGVyVXAnOiAncG9pbnRlcnVwJ1xuICAgICAgICB9O1xuICAgICAgICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gZXZlbnROYW1lICsgRkFMU0VfU1RSO1xuICAgICAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgcHJlZGVmaW5lIGFsbCB0YXNrLnNvdXJjZSBzdHJpbmdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBXVEZfSVNTVUVfNTU1X0FSUkFZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gV1RGX0lTU1VFXzU1NV9BUlJBWVtpXTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gZ2xvYmFsU291cmNlc1t0YXJnZXRdID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV2ZW50TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tqXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRzW2V2ZW50TmFtZV0gPSB0YXJnZXQgKyBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjaGVja0lFQW5kQ3Jvc3NDb250ZXh0ID0gZnVuY3Rpb24gKG5hdGl2ZURlbGVnYXRlLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRGlzYWJsZUlFQ2hlY2sgJiYgaWVPckVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RTdHJpbmcgPSBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFwaVR5cGVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfZ2xvYmFsW2FwaXNbaV1dO1xuICAgICAgICAgICAgYXBpVHlwZXMucHVzaCh0eXBlICYmIHR5cGUucHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB2aCBpcyB2YWxpZGF0ZUhhbmRsZXIgdG8gY2hlY2sgZXZlbnQgaGFuZGxlclxuICAgICAgICAvLyBpcyB2YWxpZCBvciBub3QoZm9yIHNlY3VyaXR5IGNoZWNrKVxuICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIGFwaVR5cGVzLCB7XG4gICAgICAgICAgICB2aDogY2hlY2tJRUFuZENyb3NzQ29udGV4dCxcbiAgICAgICAgICAgIHRyYW5zZmVyRXZlbnROYW1lOiBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ZXJFdmVudE5hbWUgPSBwb2ludGVyRXZlbnRzTWFwW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXJFdmVudE5hbWUgfHwgZXZlbnROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldID0gISFfZ2xvYmFsW0VWRU5UX1RBUkdFVF07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvLyB3ZSBoYXZlIHRvIHBhdGNoIHRoZSBpbnN0YW5jZSBzaW5jZSB0aGUgcHJvdG8gaXMgbm9uLWNvbmZpZ3VyYWJsZVxuICAgIGZ1bmN0aW9uIGFwcGx5KGFwaSwgX2dsb2JhbCkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gX2IuQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiA9IF9iLlJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFI7XG4gICAgICAgIHZhciBXUyA9IF9nbG9iYWwuV2ViU29ja2V0O1xuICAgICAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAvLyBPbiBvbGRlciBDaHJvbWUsIG5vIG5lZWQgc2luY2UgRXZlbnRUYXJnZXQgd2FzIGFscmVhZHkgcGF0Y2hlZFxuICAgICAgICBpZiAoIV9nbG9iYWwuRXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgW1dTLnByb3RvdHlwZV0pO1xuICAgICAgICB9XG4gICAgICAgIF9nbG9iYWwuV2ViU29ja2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHZhciBzb2NrZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IG5ldyBXUyh4LCB5KSA6IG5ldyBXUyh4KTtcbiAgICAgICAgICAgIHZhciBwcm94eVNvY2tldDtcbiAgICAgICAgICAgIHZhciBwcm94eVNvY2tldFByb3RvO1xuICAgICAgICAgICAgLy8gU2FmYXJpIDcuMCBoYXMgbm9uLWNvbmZpZ3VyYWJsZSBvd24gJ29ubWVzc2FnZScgYW5kIGZyaWVuZHMgcHJvcGVydGllcyBvbiB0aGUgc29ja2V0IGluc3RhbmNlXG4gICAgICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgICAgICBpZiAob25tZXNzYWdlRGVzYyAmJiBvbm1lc3NhZ2VEZXNjLmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldCA9IGFwaS5PYmplY3RDcmVhdGUoc29ja2V0KTtcbiAgICAgICAgICAgICAgICAvLyBzb2NrZXQgaGF2ZSBvd24gcHJvcGVydHkgZGVzY3JpcHRvciAnb25vcGVuJywgJ29ubWVzc2FnZScsICdvbmNsb3NlJywgJ29uZXJyb3InXG4gICAgICAgICAgICAgICAgLy8gYnV0IHByb3h5U29ja2V0IG5vdCwgc28gd2Ugd2lsbCBrZWVwIHNvY2tldCBhcyBwcm90b3R5cGUgYW5kIHBhc3MgaXQgdG9cbiAgICAgICAgICAgICAgICAvLyBwYXRjaE9uUHJvcGVydGllcyBtZXRob2RcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFByb3RvID0gc29ja2V0O1xuICAgICAgICAgICAgICAgIFtBRERfRVZFTlRfTElTVEVORVJfU1RSLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSLCAnc2VuZCcsICdjbG9zZSddLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5U29ja2V0W3Byb3BOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXBpLkFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BOYW1lID09PSBBRERfRVZFTlRfTElTVEVORVJfU1RSIHx8IHByb3BOYW1lID09PSBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3MubGVuZ3RoID4gMCA/IGFyZ3NbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlTeW1ib2wgPSBab25lLl9fc3ltYm9sX18oJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldFtwcm9wZXJ0eVN5bWJvbF0gPSBwcm94eVNvY2tldFtwcm9wZXJ0eVN5bWJvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvY2tldFtwcm9wTmFtZV0uYXBwbHkoc29ja2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBwYXRjaCB0aGUgcmVhbCBzb2NrZXRcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwaS5wYXRjaE9uUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydjbG9zZScsICdlcnJvcicsICdtZXNzYWdlJywgJ29wZW4nXSwgcHJveHlTb2NrZXRQcm90byk7XG4gICAgICAgICAgICByZXR1cm4gcHJveHlTb2NrZXQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnbG9iYWxXZWJTb2NrZXQgPSBfZ2xvYmFsWydXZWJTb2NrZXQnXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBXUykge1xuICAgICAgICAgICAgZ2xvYmFsV2ViU29ja2V0W3Byb3BdID0gV1NbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzTm9kZSA9IF9iLmlzTm9kZSwgaXNNaXggPSBfYi5pc01peDtcbiAgICAgICAgaWYgKGlzTm9kZSAmJiAhaXNNaXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKGFwaSwgX2dsb2JhbCkpIHtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgLy8gU2FmYXJpLCBBbmRyb2lkIGJyb3dzZXJzIChKZWxseSBCZWFuKVxuICAgICAgICAgICAgcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoYXBpKTtcbiAgICAgICAgICAgIGFwaS5wYXRjaENsYXNzKCdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAgICAgYXBwbHkoYXBpLCBfZ2xvYmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmVbYXBpLnN5bWJvbCgncGF0Y2hFdmVudHMnKV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKGFwaSwgX2dsb2JhbCkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYi5pc0Jyb3dzZXIsIGlzTWl4ID0gX2IuaXNNaXg7XG4gICAgICAgIGlmICgoaXNCcm93c2VyIHx8IGlzTWl4KSAmJlxuICAgICAgICAgICAgIWFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpICYmXG4gICAgICAgICAgICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFdlYktpdCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0MzY0XG4gICAgICAgICAgICAvLyBJREwgaW50ZXJmYWNlIGF0dHJpYnV0ZXMgYXJlIG5vdCBjb25maWd1cmFibGVcbiAgICAgICAgICAgIHZhciBkZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcbiAgICAgICAgICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyB0cnkgdG8gdXNlIG9uY2xpY2sgdG8gZGV0ZWN0IHdoZXRoZXIgd2UgY2FuIHBhdGNoIHZpYSBwcm9wZXJ0eURlc2NyaXB0b3JcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgWE1MSHR0cFJlcXVlc3QgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICEhZGl2Lm9uY2xpY2s7XG4gICAgICAgICAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycsIGRlc2MpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gX2dsb2JhbFsnWE1MSHR0cFJlcXVlc3QnXTtcbiAgICAgICAgaWYgKCFYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gWE1MSHR0cFJlcXVlc3QgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBPTl9SRUFEWV9TVEFURV9DSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgICB2YXIgeGhyRGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSk7XG4gICAgICAgIC8vIGFkZCBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgaGVyZSBiZWNhdXNlIGluIG9wZXJhXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gd2l0aG91dCBhZGRpbmcgZW51bWVyYWJsZSBhbmQgY29uZmlndXJhYmxlIHdpbGwgY2F1c2Ugb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGVcbiAgICAgICAgLy8gYW5kIGlmIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vbnJlYWR5c3RhdGVjaGFuZ2UgaXMgdW5kZWZpbmVkLFxuICAgICAgICAvLyB3ZSBzaG91bGQgc2V0IGEgcmVhbCBkZXNjIGluc3RlYWQgYSBmYWtlIG9uZVxuICAgICAgICBpZiAoeGhyRGVzYykge1xuICAgICAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gISFyZXEub25yZWFkeXN0YXRlY2hhbmdlO1xuICAgICAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkZXNjXG4gICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwgeGhyRGVzYyB8fCB7fSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIFNZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xID0gYXBpLnN5bWJvbCgnZmFrZScpO1xuICAgICAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHZhciBkZXRlY3RGdW5jID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGRldGVjdEZ1bmM7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVxW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXSA9PT0gZGV0ZWN0RnVuYztcbiAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMgPSBbXG4gICAgICAgICdhYm9ydCcsXG4gICAgICAgICdhbmltYXRpb25jYW5jZWwnLFxuICAgICAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAgICAgJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgICAgICdhdXhjbGljaycsXG4gICAgICAgICdiZWZvcmVpbnB1dCcsXG4gICAgICAgICdibHVyJyxcbiAgICAgICAgJ2NhbmNlbCcsXG4gICAgICAgICdjYW5wbGF5JyxcbiAgICAgICAgJ2NhbnBsYXl0aHJvdWdoJyxcbiAgICAgICAgJ2NoYW5nZScsXG4gICAgICAgICdjb21wb3NpdGlvbnN0YXJ0JyxcbiAgICAgICAgJ2NvbXBvc2l0aW9udXBkYXRlJyxcbiAgICAgICAgJ2NvbXBvc2l0aW9uZW5kJyxcbiAgICAgICAgJ2N1ZWNoYW5nZScsXG4gICAgICAgICdjbGljaycsXG4gICAgICAgICdjbG9zZScsXG4gICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICdjdXJlY2hhbmdlJyxcbiAgICAgICAgJ2RibGNsaWNrJyxcbiAgICAgICAgJ2RyYWcnLFxuICAgICAgICAnZHJhZ2VuZCcsXG4gICAgICAgICdkcmFnZW50ZXInLFxuICAgICAgICAnZHJhZ2V4aXQnLFxuICAgICAgICAnZHJhZ2xlYXZlJyxcbiAgICAgICAgJ2RyYWdvdmVyJyxcbiAgICAgICAgJ2Ryb3AnLFxuICAgICAgICAnZHVyYXRpb25jaGFuZ2UnLFxuICAgICAgICAnZW1wdGllZCcsXG4gICAgICAgICdlbmRlZCcsXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgICdmb2N1c2luJyxcbiAgICAgICAgJ2ZvY3Vzb3V0JyxcbiAgICAgICAgJ2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2ludmFsaWQnLFxuICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICdrZXlwcmVzcycsXG4gICAgICAgICdrZXl1cCcsXG4gICAgICAgICdsb2FkJyxcbiAgICAgICAgJ2xvYWRzdGFydCcsXG4gICAgICAgICdsb2FkZWRkYXRhJyxcbiAgICAgICAgJ2xvYWRlZG1ldGFkYXRhJyxcbiAgICAgICAgJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgICdtb3VzZW91dCcsXG4gICAgICAgICdtb3VzZW92ZXInLFxuICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICdtb3VzZXdoZWVsJyxcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICAgICAgJ3BhdXNlJyxcbiAgICAgICAgJ3BsYXknLFxuICAgICAgICAncGxheWluZycsXG4gICAgICAgICdwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgJ3BvaW50ZXJlbnRlcicsXG4gICAgICAgICdwb2ludGVybGVhdmUnLFxuICAgICAgICAncG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICAgICAnbW96cG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICAgICAnd2Via2l0cG9pbnRlcmxvY2tlcmNoYW5nZScsXG4gICAgICAgICdwb2ludGVybG9ja2Vycm9yJyxcbiAgICAgICAgJ21venBvaW50ZXJsb2NrZXJyb3InLFxuICAgICAgICAnd2Via2l0cG9pbnRlcmxvY2tlcnJvcicsXG4gICAgICAgICdwb2ludGVybW92ZScsXG4gICAgICAgICdwb2ludG91dCcsXG4gICAgICAgICdwb2ludGVyb3ZlcicsXG4gICAgICAgICdwb2ludGVydXAnLFxuICAgICAgICAncHJvZ3Jlc3MnLFxuICAgICAgICAncmF0ZWNoYW5nZScsXG4gICAgICAgICdyZXNldCcsXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgJ3NlZWtlZCcsXG4gICAgICAgICdzZWVraW5nJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdzZWxlY3Rpb25jaGFuZ2UnLFxuICAgICAgICAnc2VsZWN0c3RhcnQnLFxuICAgICAgICAnc2hvdycsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJ3N0YWxsZWQnLFxuICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgJ3N1c3BlbmQnLFxuICAgICAgICAndGltZXVwZGF0ZScsXG4gICAgICAgICd2b2x1bWVjaGFuZ2UnLFxuICAgICAgICAndG91Y2hjYW5jZWwnLFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAndHJhbnNpdGlvbmNhbmNlbCcsXG4gICAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgJ3dhaXRpbmcnLFxuICAgICAgICAnd2hlZWwnXG4gICAgXTtcbiAgICB2YXIgZG9jdW1lbnRFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWZ0ZXJzY3JpcHRleGVjdXRlJywgJ2JlZm9yZXNjcmlwdGV4ZWN1dGUnLCAnRE9NQ29udGVudExvYWRlZCcsICdmcmVlemUnLCAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAnbXNmdWxsc2NyZWVuY2hhbmdlJywgJ2Z1bGxzY3JlZW5lcnJvcicsXG4gICAgICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLCAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJywgJ21zZnVsbHNjcmVlbmVycm9yJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAgICAgICAndmlzaWJpbGl0eWNoYW5nZScsICdyZXN1bWUnXG4gICAgXTtcbiAgICB2YXIgd2luZG93RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2Fic29sdXRlZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICAgICAnYWZ0ZXJpbnB1dCcsXG4gICAgICAgICdhZnRlcnByaW50JyxcbiAgICAgICAgJ2FwcGluc3RhbGxlZCcsXG4gICAgICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAgICAgJ2JlZm9yZXByaW50JyxcbiAgICAgICAgJ2JlZm9yZXVubG9hZCcsXG4gICAgICAgICdkZXZpY2VsaWdodCcsXG4gICAgICAgICdkZXZpY2Vtb3Rpb24nLFxuICAgICAgICAnZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICAgICAnZGV2aWNlb3JpZW50YXRpb25hYnNvbHV0ZScsXG4gICAgICAgICdkZXZpY2Vwcm94aW1pdHknLFxuICAgICAgICAnaGFzaGNoYW5nZScsXG4gICAgICAgICdsYW5ndWFnZWNoYW5nZScsXG4gICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgJ21vemJlZm9yZXBhaW50JyxcbiAgICAgICAgJ29mZmxpbmUnLFxuICAgICAgICAnb25saW5lJyxcbiAgICAgICAgJ3BhaW50JyxcbiAgICAgICAgJ3BhZ2VzaG93JyxcbiAgICAgICAgJ3BhZ2VoaWRlJyxcbiAgICAgICAgJ3BvcHN0YXRlJyxcbiAgICAgICAgJ3JlamVjdGlvbmhhbmRsZWQnLFxuICAgICAgICAnc3RvcmFnZScsXG4gICAgICAgICd1bmhhbmRsZWRyZWplY3Rpb24nLFxuICAgICAgICAndW5sb2FkJyxcbiAgICAgICAgJ3VzZXJwcm94aW1pdHknLFxuICAgICAgICAndnJkaXNwbGF5Y29ubmVjdGVkJyxcbiAgICAgICAgJ3ZyZGlzcGxheWRpc2Nvbm5lY3RlZCcsXG4gICAgICAgICd2cmRpc3BsYXlwcmVzZW50Y2hhbmdlJ1xuICAgIF07XG4gICAgdmFyIGh0bWxFbGVtZW50RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2JlZm9yZWNvcHknLCAnYmVmb3JlY3V0JywgJ2JlZm9yZXBhc3RlJywgJ2NvcHknLCAnY3V0JywgJ3Bhc3RlJywgJ2RyYWdzdGFydCcsICdsb2FkZW5kJyxcbiAgICAgICAgJ2FuaW1hdGlvbnN0YXJ0JywgJ3NlYXJjaCcsICd0cmFuc2l0aW9ucnVuJywgJ3RyYW5zaXRpb25zdGFydCcsICd3ZWJraXRhbmltYXRpb25lbmQnLFxuICAgICAgICAnd2Via2l0YW5pbWF0aW9uaXRlcmF0aW9uJywgJ3dlYmtpdGFuaW1hdGlvbnN0YXJ0JywgJ3dlYmtpdHRyYW5zaXRpb25lbmQnXG4gICAgXTtcbiAgICB2YXIgaWVFbGVtZW50RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2FjdGl2YXRlJyxcbiAgICAgICAgJ2FmdGVydXBkYXRlJyxcbiAgICAgICAgJ2FyaWFyZXF1ZXN0JyxcbiAgICAgICAgJ2JlZm9yZWFjdGl2YXRlJyxcbiAgICAgICAgJ2JlZm9yZWRlYWN0aXZhdGUnLFxuICAgICAgICAnYmVmb3JlZWRpdGZvY3VzJyxcbiAgICAgICAgJ2JlZm9yZXVwZGF0ZScsXG4gICAgICAgICdjZWxsY2hhbmdlJyxcbiAgICAgICAgJ2NvbnRyb2xzZWxlY3QnLFxuICAgICAgICAnZGF0YWF2YWlsYWJsZScsXG4gICAgICAgICdkYXRhc2V0Y2hhbmdlZCcsXG4gICAgICAgICdkYXRhc2V0Y29tcGxldGUnLFxuICAgICAgICAnZXJyb3J1cGRhdGUnLFxuICAgICAgICAnZmlsdGVyY2hhbmdlJyxcbiAgICAgICAgJ2xheW91dGNvbXBsZXRlJyxcbiAgICAgICAgJ2xvc2VjYXB0dXJlJyxcbiAgICAgICAgJ21vdmUnLFxuICAgICAgICAnbW92ZWVuZCcsXG4gICAgICAgICdtb3Zlc3RhcnQnLFxuICAgICAgICAncHJvcGVydHljaGFuZ2UnLFxuICAgICAgICAncmVzaXplZW5kJyxcbiAgICAgICAgJ3Jlc2l6ZXN0YXJ0JyxcbiAgICAgICAgJ3Jvd2VudGVyJyxcbiAgICAgICAgJ3Jvd2V4aXQnLFxuICAgICAgICAncm93c2RlbGV0ZScsXG4gICAgICAgICdyb3dzaW5zZXJ0ZWQnLFxuICAgICAgICAnY29tbWFuZCcsXG4gICAgICAgICdjb21wYXNzbmVlZHNjYWxpYnJhdGlvbicsXG4gICAgICAgICdkZWFjdGl2YXRlJyxcbiAgICAgICAgJ2hlbHAnLFxuICAgICAgICAnbXNjb250ZW50em9vbScsXG4gICAgICAgICdtc21hbmlwdWxhdGlvbnN0YXRlY2hhbmdlZCcsXG4gICAgICAgICdtc2dlc3R1cmVjaGFuZ2UnLFxuICAgICAgICAnbXNnZXN0dXJlZG91YmxldGFwJyxcbiAgICAgICAgJ21zZ2VzdHVyZWVuZCcsXG4gICAgICAgICdtc2dlc3R1cmVob2xkJyxcbiAgICAgICAgJ21zZ2VzdHVyZXN0YXJ0JyxcbiAgICAgICAgJ21zZ2VzdHVyZXRhcCcsXG4gICAgICAgICdtc2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAgICAgJ21zaW5lcnRpYXN0YXJ0JyxcbiAgICAgICAgJ21zbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAgICAgJ21zcG9pbnRlcmNhbmNlbCcsXG4gICAgICAgICdtc3BvaW50ZXJkb3duJyxcbiAgICAgICAgJ21zcG9pbnRlcmVudGVyJyxcbiAgICAgICAgJ21zcG9pbnRlcmhvdmVyJyxcbiAgICAgICAgJ21zcG9pbnRlcmxlYXZlJyxcbiAgICAgICAgJ21zcG9pbnRlcm1vdmUnLFxuICAgICAgICAnbXNwb2ludGVyb3V0JyxcbiAgICAgICAgJ21zcG9pbnRlcm92ZXInLFxuICAgICAgICAnbXNwb2ludGVydXAnLFxuICAgICAgICAncG9pbnRlcm91dCcsXG4gICAgICAgICdtc3NpdGVtb2RlanVtcGxpc3RpdGVtcmVtb3ZlZCcsXG4gICAgICAgICdtc3RodW1ibmFpbGNsaWNrJyxcbiAgICAgICAgJ3N0b3AnLFxuICAgICAgICAnc3RvcmFnZWNvbW1pdCdcbiAgICBdO1xuICAgIHZhciB3ZWJnbEV2ZW50TmFtZXMgPSBbJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgJ3dlYmdsY29udGV4dGxvc3QnLCAnd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvciddO1xuICAgIHZhciBmb3JtRXZlbnROYW1lcyA9IFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb21wbGV0ZWVycm9yJ107XG4gICAgdmFyIGRldGFpbEV2ZW50TmFtZXMgPSBbJ3RvZ2dsZSddO1xuICAgIHZhciBldmVudE5hbWVzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcywgdHJ1ZSksIHdlYmdsRXZlbnROYW1lcywgdHJ1ZSksIGZvcm1FdmVudE5hbWVzLCB0cnVlKSwgZGV0YWlsRXZlbnROYW1lcywgdHJ1ZSksIGRvY3VtZW50RXZlbnROYW1lcywgdHJ1ZSksIHdpbmRvd0V2ZW50TmFtZXMsIHRydWUpLCBodG1sRWxlbWVudEV2ZW50TmFtZXMsIHRydWUpLCBpZUVsZW1lbnRFdmVudE5hbWVzLCB0cnVlKTtcbiAgICAvLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuICAgIC8vIGZvciBgb253aGF0ZXZlcmAgcHJvcGVydGllcyBhbmQgcmVwbGFjZSB0aGVtIHdpdGggem9uZS1ib3VuZCBmdW5jdGlvbnNcbiAgICAvLyAtIENocm9tZSAoZm9yIG5vdylcbiAgICBmdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpIHtcbiAgICAgICAgdmFyIHVuYm91bmRLZXkgPSBhcGkuc3ltYm9sKCd1bmJvdW5kJyk7XG4gICAgICAgIHZhciBfbG9vcF81ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb25wcm9wZXJ0eSA9ICdvbicgKyBwcm9wZXJ0eTtcbiAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsdCA9IGV2ZW50LnRhcmdldCwgYm91bmQsIHNvdXJjZTtcbiAgICAgICAgICAgICAgICBpZiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVsdC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9ICd1bmtub3duLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmQgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShlbHRbb25wcm9wZXJ0eV0sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZFt1bmJvdW5kS2V5XSA9IGVsdFtvbnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzUoaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9iLmlzQnJvd3NlciwgaXNNaXggPSBfYi5pc01peDtcbiAgICAgICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgISgncmVnaXN0ZXJFbGVtZW50JyBpbiBfZ2xvYmFsLmRvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBbJ2NyZWF0ZWRDYWxsYmFjaycsICdhdHRhY2hlZENhbGxiYWNrJywgJ2RldGFjaGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgICAgIGFwaS5wYXRjaENhbGxiYWNrcyhhcGksIGRvY3VtZW50LCAnRG9jdW1lbnQnLCAncmVnaXN0ZXJFbGVtZW50JywgY2FsbGJhY2tzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgKGZ1bmN0aW9uIChfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBzeW1ib2xQcmVmaXggPSBfZ2xvYmFsWydfX1pvbmVfc3ltYm9sX3ByZWZpeCddIHx8ICdfX3pvbmVfc3ltYm9sX18nO1xuICAgICAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIF9nbG9iYWxbX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgWm9uZSA9IF9nbG9iYWxbJ1pvbmUnXTtcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoKCdkZWZpbmVQcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAgICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIHByb3BlcnR5UGF0Y2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3JlZ2lzdGVyRWxlbWVudCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRWxlbWVudFBhdGNoKGdsb2JhbCwgYXBpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0TGVnYWN5JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB3aW5kb3cgOlxuICAgICAgICB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fSk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sJDEoJ3pvbmVUYXNrJyk7XG4gICAgZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICAgICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgICAgIHZhciBjbGVhck5hdGl2ZSA9IG51bGw7XG4gICAgICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICAgICAgY2FuY2VsTmFtZSArPSBuYW1lU3VmZml4O1xuICAgICAgICB2YXIgdGFza3NCeUhhbmRsZUlkID0ge307XG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgICAgIGRhdGEuYXJnc1swXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkYXRhLmhhbmRsZUlkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUuY2FsbCh3aW5kb3csIHRhc2suZGF0YS5oYW5kbGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TmF0aXZlID1cbiAgICAgICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgc2V0TmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uc18xID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQZXJpb2RpYzogbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja18xID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1swXSA9IGZ1bmN0aW9uIHRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tfMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUtOTM0LCB0YXNrIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiBpdCBpcyBhIHBlcmlvZGljIHRhc2sgc3VjaCBhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldEludGVydmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNDAzODdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbnVwIHRhc2tzQnlIYW5kbGVJZCBzaG91bGQgYmUgaGFuZGxlZCBiZWZvcmUgc2NoZWR1bGVUYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2Ugc29tZSB6b25lU3BlYyBtYXkgaW50ZXJjZXB0IGFuZCBkb2Vzbid0IHRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZUZuKHNjaGVkdWxlVGFzaykgcHJvdmlkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShvcHRpb25zXzEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zXzEuaGFuZGxlSWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBub24tbm9kZWpzIGVudiwgd2UgcmVtb3ZlIHRpbWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gbG9jYWwgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbb3B0aW9uc18xLmhhbmRsZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zXzEuaGFuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGFzayByZWZlcmVuY2UgZnJvbSB0aW1lciBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNfMS5oYW5kbGVJZFt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc2V0TmFtZSwgYXJnc1swXSwgb3B0aW9uc18xLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gTm9kZS5qcyBtdXN0IGFkZGl0aW9uYWxseSBzdXBwb3J0IHRoZSByZWYgYW5kIHVucmVmIGZ1bmN0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHRhc2suZGF0YS5oYW5kbGVJZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9uIG5vZGVqcyBlbnYsIHdlIHNhdmUgaGFuZGxlSWQ6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcHBpbmcgaW4gbG9jYWwgY2FjaGUgZm9yIGNsZWFyVGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NCeUhhbmRsZUlkW2hhbmRsZV0gPSB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIG5vZGVqcyBlbnYsIHdlIHNhdmUgdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVt0YXNrU3ltYm9sXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF5IHJldHVybiB1bmRlZmluZWQgZnJvbSBzZXRUaW1lb3V0L3NldEludGVydmFsL3NldEltbWVkaWF0ZS9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZSAmJiBoYW5kbGUucmVmICYmIGhhbmRsZS51bnJlZiAmJiB0eXBlb2YgaGFuZGxlLnJlZiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZWYgPSBoYW5kbGUucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudW5yZWYgPSBoYW5kbGUudW5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJyB8fCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgY2xlYXJOYXRpdmUgPVxuICAgICAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFzaztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBub24gbm9kZWpzIGVudi5cbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgICAgICB0YXNrID0gaWQgJiYgaWRbdGFza1N5bWJvbF07XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyIGVudmlyb25tZW50cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrID0gaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgIT09ICdub3RTY2hlZHVsZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzay5jYW5jZWxGbiAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYyB8fCB0YXNrLnJ1bkNvdW50ID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGNhbmNlbCBhbHJlYWR5IGNhbmNlbGVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHBhdGNoQ3VzdG9tRWxlbWVudHMoX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9iLmlzQnJvd3NlciwgaXNNaXggPSBfYi5pc01peDtcbiAgICAgICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgIV9nbG9iYWxbJ2N1c3RvbUVsZW1lbnRzJ10gfHwgISgnY3VzdG9tRWxlbWVudHMnIGluIF9nbG9iYWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IFsnY29ubmVjdGVkQ2FsbGJhY2snLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snLCAnYWRvcHRlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddO1xuICAgICAgICBhcGkucGF0Y2hDYWxsYmFja3MoYXBpLCBfZ2xvYmFsLmN1c3RvbUVsZW1lbnRzLCAnY3VzdG9tRWxlbWVudHMnLCAnZGVmaW5lJywgY2FsbGJhY2tzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXZlbnRUYXJnZXRQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgaWYgKFpvbmVbYXBpLnN5bWJvbCgncGF0Y2hFdmVudFRhcmdldCcpXSkge1xuICAgICAgICAgICAgLy8gRXZlbnRUYXJnZXQgaXMgYWxyZWFkeSBwYXRjaGVkLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGV2ZW50TmFtZXMgPSBfYi5ldmVudE5hbWVzLCB6b25lU3ltYm9sRXZlbnROYW1lcyA9IF9iLnpvbmVTeW1ib2xFdmVudE5hbWVzLCBUUlVFX1NUUiA9IF9iLlRSVUVfU1RSLCBGQUxTRV9TVFIgPSBfYi5GQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCA9IF9iLlpPTkVfU1lNQk9MX1BSRUZJWDtcbiAgICAgICAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICAgICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gZXZlbnROYW1lICsgVFJVRV9TVFI7XG4gICAgICAgICAgICB2YXIgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW0ZBTFNFX1NUUl0gPSBzeW1ib2w7XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEVWRU5UX1RBUkdFVCA9IF9nbG9iYWxbJ0V2ZW50VGFyZ2V0J107XG4gICAgICAgIGlmICghRVZFTlRfVEFSR0VUIHx8ICFFVkVOVF9UQVJHRVQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBbRVZFTlRfVEFSR0VUICYmIEVWRU5UX1RBUkdFVC5wcm90b3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBab25lLl9fbG9hZF9wYXRjaCgnbGVnYWN5JywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICB2YXIgbGVnYWN5UGF0Y2ggPSBnbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdsZWdhY3lQYXRjaCcpXTtcbiAgICAgICAgaWYgKGxlZ2FjeVBhdGNoKSB7XG4gICAgICAgICAgICBsZWdhY3lQYXRjaCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3F1ZXVlTWljcm90YXNrJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIGFwaS5wYXRjaE1ldGhvZChnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgWm9uZS5jdXJyZW50LnNjaGVkdWxlTWljcm9UYXNrKCdxdWV1ZU1pY3JvdGFzaycsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3RpbWVycycsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIHNldCA9ICdzZXQnO1xuICAgICAgICB2YXIgY2xlYXIgPSAnY2xlYXInO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ1RpbWVvdXQnKTtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbnRlcnZhbCcpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAncmVxdWVzdCcsICdjYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsICdtb3pSZXF1ZXN0JywgJ21vekNhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3dlYmtpdFJlcXVlc3QnLCAnd2Via2l0Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2Jsb2NraW5nJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgICAgICB2YXIgYmxvY2tpbmdNZXRob2RzID0gWydhbGVydCcsICdwcm9tcHQnLCAnY29uZmlybSddO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWVfMiA9IGJsb2NraW5nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHBhdGNoTWV0aG9kKGdsb2JhbCwgbmFtZV8yLCBmdW5jdGlvbiAoZGVsZWdhdGUsIHN5bWJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocywgYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgZ2xvYmFsLCBhcmdzLCBuYW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hFdmVudChnbG9iYWwsIGFwaSk7XG4gICAgICAgIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgICAvLyBwYXRjaCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J3MgYWRkRXZlbnRMaXN0ZW5lci9yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChnbG9iYWwsIGFwaSwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnTXV0YXRpb25PYnNlcnZlcicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ1dlYktpdE11dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDbGFzcygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnRmlsZVJlYWRlcicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ29uX3Byb3BlcnR5JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGFwaSwgZ2xvYmFsKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnY3VzdG9tRWxlbWVudHMnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDdXN0b21FbGVtZW50cyhnbG9iYWwsIGFwaSk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ1hIUicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUpIHtcbiAgICAgICAgLy8gVHJlYXQgWE1MSHR0cFJlcXVlc3QgYXMgYSBtYWNyb3Rhc2suXG4gICAgICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgICAgIHZhciBYSFJfVEFTSyA9IHpvbmVTeW1ib2wkMSgneGhyVGFzaycpO1xuICAgICAgICB2YXIgWEhSX1NZTkMgPSB6b25lU3ltYm9sJDEoJ3hoclN5bmMnKTtcbiAgICAgICAgdmFyIFhIUl9MSVNURU5FUiA9IHpvbmVTeW1ib2wkMSgneGhyTGlzdGVuZXInKTtcbiAgICAgICAgdmFyIFhIUl9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sJDEoJ3hoclNjaGVkdWxlZCcpO1xuICAgICAgICB2YXIgWEhSX1VSTCA9IHpvbmVTeW1ib2wkMSgneGhyVVJMJyk7XG4gICAgICAgIHZhciBYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2wkMSgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICAgICAgZnVuY3Rpb24gcGF0Y2hYSFIod2luZG93KSB7XG4gICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0J107XG4gICAgICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gWE1MSHR0cFJlcXVlc3QgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRQZW5kaW5nVGFzayh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICAgICAgICB2YXIgU0NIRURVTEVEID0gJ3NjaGVkdWxlZCc7XG4gICAgICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBvcmlBZGRMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbmV3TGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5yZWFkeVN0YXRlID09PSB0YXJnZXQuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWFkeVN0YXRlPTQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGFzayBzdGF0ZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoYXQgaXMgdGhlIGNhc2UsIHRoZSB0YXNrIHNob3VsZCBpbnZva2UgYWZ0ZXIgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25sb2FkIGxpc3RlbmVycyBmaW5pc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgcmVxdWVzdCBmYWlsZWQgd2l0aG91dCByZXNwb25zZSAoc3RhdHVzID0gMCksIHRoZSBsb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQsIGluIHRoYXQgY2FzZSwgd2Ugc2hvdWxkIGFsc28gaW52b2tlIHRoZSBwbGFjZWhvbGRlciBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGNsb3NlIHRoZSBYTUxIdHRwUmVxdWVzdDo6c2VuZCBtYWNyb1Rhc2suXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzg3OTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuc3RhdHVzICE9PSAwICYmIGxvYWRUYXNrcyAmJiBsb2FkVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpSW52b2tlXzEgPSB0YXNrLmludm9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGxvYWQgdGhlIHRhc2tzIGFnYWluLCBiZWNhdXNlIGluIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIGxpc3RlbmVyLCB0aGV5IG1heSByZW1vdmUgdGhlbXNlbHZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRUYXNrc1tpXSA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaUludm9rZV8xLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBvY2N1cnMgd2hlbiB4aHIuc2VuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVkVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgICAgICAgICAgaWYgKCFzdG9yZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KHRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAgICAgLy8gdG8gcHJldmVudCBpdCBmcm9tIGZpcmluZy4gU28gaW5zdGVhZCwgd2Ugc3RvcmUgaW5mbyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIGRhdGEuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9wZW5OYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmW1hIUl9VUkxdID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICAgICAgdmFyIFhNTEhUVFBSRVFVRVNUX1NPVVJDRSA9ICdYTUxIdHRwUmVxdWVzdC5zZW5kJztcbiAgICAgICAgICAgIHZhciBmZXRjaFRhc2tBYm9ydGluZyA9IHpvbmVTeW1ib2wkMSgnZmV0Y2hUYXNrQWJvcnRpbmcnKTtcbiAgICAgICAgICAgIHZhciBmZXRjaFRhc2tTY2hlZHVsaW5nID0gem9uZVN5bWJvbCQxKCdmZXRjaFRhc2tTY2hlZHVsaW5nJyk7XG4gICAgICAgICAgICB2YXIgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnc2VuZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFpvbmUuY3VycmVudFtmZXRjaFRhc2tTY2hlZHVsaW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhIGZldGNoIGlzIHNjaGVkdWxpbmcsIHNvIHdlIGFyZSB1c2luZyB4aHIgdG8gcG9seWZpbGwgZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGJlY2F1c2Ugd2UgYWxyZWFkeSBzY2hlZHVsZSBtYWNyb1Rhc2sgZm9yIGZldGNoLCB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHNjaGVkdWxlIGEgbWFjcm9UYXNrIGZvciB4aHIgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgWEhSIGlzIHN5bmMgdGhlcmUgaXMgbm8gdGFzayB0byBzY2hlZHVsZSwganVzdCBleGVjdXRlIHRoZSBjb2RlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB0YXJnZXQ6IHNlbGYsIHVybDogc2VsZltYSFJfVVJMXSwgaXNQZXJpb2RpYzogZmFsc2UsIGFyZ3M6IGFyZ3MsIGFib3J0ZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoWE1MSFRUUFJFUVVFU1RfU09VUkNFLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmICYmIHNlbGZbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID09PSB0cnVlICYmICFvcHRpb25zLmFib3J0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8geGhyIHJlcXVlc3QgdGhyb3cgZXJyb3Igd2hlbiBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgaW52b2tlIHRhc2sgaW5zdGVhZCBvZiBsZWF2aW5nIGEgc2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZW5kaW5nIG1hY3JvVGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICAgICAgdmFyIGFib3J0TmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdhYm9ydCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBmaW5kUGVuZGluZ1Rhc2soc2VsZik7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIFhIUiBoYXMgYWxyZWFkeSBiZWVuIGFib3J0ZWQsIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFjcm9UYXNrIHRhc2sgY291bnQgYmUgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmNhbmNlbEZuID09IG51bGwgfHwgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuYWJvcnRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza0Fib3J0aW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWJvcnQgaXMgY2FsbGVkIGZyb20gZmV0Y2ggcG9seWZpbGwsIHdlIG5lZWQgdG8gY2FsbCBuYXRpdmUgYWJvcnQgb2YgWEhSLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHRyeWluZyB0byBhYm9ydCBhbiBYSFIgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBzZW50LCBzbyB0aGVyZSBpcyBub1xuICAgICAgICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAgICAgICAvLyB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdnZW9sb2NhdGlvbicsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgLy8vIEdFT19MT0NBVElPTlxuICAgICAgICBpZiAoZ2xvYmFsWyduYXZpZ2F0b3InXSAmJiBnbG9iYWxbJ25hdmlnYXRvciddLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBwYXRjaFByb3RvdHlwZShnbG9iYWxbJ25hdmlnYXRvciddLmdlb2xvY2F0aW9uLCBbJ2dldEN1cnJlbnRQb3NpdGlvbicsICd3YXRjaFBvc2l0aW9uJ10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ1Byb21pc2VSZWplY3Rpb25FdmVudCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUpIHtcbiAgICAgICAgLy8gaGFuZGxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblxuICAgICAgICBmdW5jdGlvbiBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoZXZ0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VGFza3MgPSBmaW5kRXZlbnRUYXNrcyhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFza3MuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvd3MgaGFzIGFkZGVkIHVuaGFuZGxlZHJlamVjdGlvbiBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICB2YXIgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID0gZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwgeyBwcm9taXNlOiBlLnByb21pc2UsIHJlYXNvbjogZS5yZWplY3Rpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhc2suaW52b2tlKGV2dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J10pIHtcbiAgICAgICAgICAgIFpvbmVbem9uZVN5bWJvbCQxKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgICAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCd1bmhhbmRsZWRyZWplY3Rpb24nKTtcbiAgICAgICAgICAgIFpvbmVbem9uZVN5bWJvbCQxKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpXSA9XG4gICAgICAgICAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCdyZWplY3Rpb25oYW5kbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKTtcbiJdLCJuYW1lcyI6WyJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJsIiwiYXIiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNvbmNhdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWwiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJuYW1lIiwicGVyZm9ybWFuY2VNZWFzdXJlIiwibGFiZWwiLCJzeW1ib2xQcmVmaXgiLCJfX3N5bWJvbF9fIiwiY2hlY2tEdXBsaWNhdGUiLCJFcnJvciIsIlpvbmUiLCJwYXJlbnQiLCJ6b25lU3BlYyIsIl9wYXJlbnQiLCJfbmFtZSIsIl9wcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIl96b25lRGVsZWdhdGUiLCJfWm9uZURlbGVnYXRlIiwiYXNzZXJ0Wm9uZVBhdGNoZWQiLCJwYXRjaGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJ6b25lIiwiY3VycmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJfY3VycmVudFpvbmVGcmFtZSIsIl9jdXJyZW50VGFzayIsIl9fbG9hZF9wYXRjaCIsImZuIiwiaWdub3JlRHVwbGljYXRlIiwiaGFzT3duUHJvcGVydHkiLCJwZXJmTmFtZSIsIl9hcGkiLCJrZXkiLCJnZXRab25lV2l0aCIsImZvcmsiLCJ3cmFwIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJfY2FsbGJhY2siLCJpbnRlcmNlcHQiLCJydW5HdWFyZGVkIiwicnVuIiwiYXBwbHlUaGlzIiwiYXBwbHlBcmdzIiwiaW52b2tlIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsInJ1blRhc2siLCJ0YXNrIiwiTk9fWk9ORSIsInN0YXRlIiwibm90U2NoZWR1bGVkIiwidHlwZSIsImV2ZW50VGFzayIsIm1hY3JvVGFzayIsInJlRW50cnlHdWFyZCIsInJ1bm5pbmciLCJfdHJhbnNpdGlvblRvIiwic2NoZWR1bGVkIiwicnVuQ291bnQiLCJwcmV2aW91c1Rhc2siLCJkYXRhIiwiaXNQZXJpb2RpYyIsImNhbmNlbEZuIiwidW5kZWZpbmVkIiwiaW52b2tlVGFzayIsInVua25vd24iLCJfdXBkYXRlVGFza0NvdW50Iiwic2NoZWR1bGVUYXNrIiwibmV3Wm9uZSIsInNjaGVkdWxpbmciLCJ6b25lRGVsZWdhdGVzIiwiX3pvbmVEZWxlZ2F0ZXMiLCJfem9uZSIsImVyciIsInNjaGVkdWxlTWljcm9UYXNrIiwiY3VzdG9tU2NoZWR1bGUiLCJab25lVGFzayIsIm1pY3JvVGFzayIsInNjaGVkdWxlTWFjcm9UYXNrIiwiY3VzdG9tQ2FuY2VsIiwic2NoZWR1bGVFdmVudFRhc2siLCJjYW5jZWxUYXNrIiwiY2FuY2VsaW5nIiwiY291bnQiLCJERUxFR0FURV9aUyIsIm9uSGFzVGFzayIsImRlbGVnYXRlIiwiXyIsInRhcmdldCIsImhhc1Rhc2tTdGF0ZSIsImhhc1Rhc2siLCJvblNjaGVkdWxlVGFzayIsIm9uSW52b2tlVGFzayIsIm9uQ2FuY2VsVGFzayIsInBhcmVudERlbGVnYXRlIiwiX3Rhc2tDb3VudHMiLCJfcGFyZW50RGVsZWdhdGUiLCJfZm9ya1pTIiwib25Gb3JrIiwiX2ZvcmtEbGd0IiwiX2ZvcmtDdXJyWm9uZSIsIl9pbnRlcmNlcHRaUyIsIm9uSW50ZXJjZXB0IiwiX2ludGVyY2VwdERsZ3QiLCJfaW50ZXJjZXB0Q3VyclpvbmUiLCJfaW52b2tlWlMiLCJvbkludm9rZSIsIl9pbnZva2VEbGd0IiwiX2ludm9rZUN1cnJab25lIiwiX2hhbmRsZUVycm9yWlMiLCJvbkhhbmRsZUVycm9yIiwiX2hhbmRsZUVycm9yRGxndCIsIl9oYW5kbGVFcnJvckN1cnJab25lIiwiX3NjaGVkdWxlVGFza1pTIiwiX3NjaGVkdWxlVGFza0RsZ3QiLCJfc2NoZWR1bGVUYXNrQ3VyclpvbmUiLCJfaW52b2tlVGFza1pTIiwiX2ludm9rZVRhc2tEbGd0IiwiX2ludm9rZVRhc2tDdXJyWm9uZSIsIl9jYW5jZWxUYXNrWlMiLCJfY2FuY2VsVGFza0RsZ3QiLCJfY2FuY2VsVGFza0N1cnJab25lIiwiX2hhc1Rhc2taUyIsIl9oYXNUYXNrRGxndCIsIl9oYXNUYXNrRGxndE93bmVyIiwiX2hhc1Rhc2tDdXJyWm9uZSIsInpvbmVTcGVjSGFzVGFzayIsInBhcmVudEhhc1Rhc2siLCJ0YXJnZXRab25lIiwiYXBwbHkiLCJyZXR1cm5UYXNrIiwicHVzaCIsInNjaGVkdWxlRm4iLCJ2YWx1ZSIsImlzRW1wdHkiLCJjb3VudHMiLCJwcmV2IiwibmV4dCIsImNoYW5nZSIsIm9wdGlvbnMiLCJfc3RhdGUiLCJzZWxmIiwidXNlRyIsImFyZ3MiLCJfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzIiwiZHJhaW5NaWNyb1Rhc2tRdWV1ZSIsImNhbmNlbFNjaGVkdWxlUmVxdWVzdCIsInRvU3RhdGUiLCJmcm9tU3RhdGUxIiwiZnJvbVN0YXRlMiIsInRvU3RyaW5nIiwiaGFuZGxlSWQiLCJ0b0pTT04iLCJzeW1ib2xTZXRUaW1lb3V0Iiwic3ltYm9sUHJvbWlzZSIsInN5bWJvbFRoZW4iLCJfbWljcm9UYXNrUXVldWUiLCJfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlIiwibmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlIiwibmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2siLCJmdW5jIiwicmVzb2x2ZSIsIm5hdGl2ZVRoZW4iLCJxdWV1ZSIsIm9uVW5oYW5kbGVkRXJyb3IiLCJtaWNyb3Rhc2tEcmFpbkRvbmUiLCJzeW1ib2wiLCJjdXJyZW50Wm9uZUZyYW1lIiwibm9vcCIsInNob3dVbmNhdWdodEVycm9yIiwicGF0Y2hFdmVudFRhcmdldCIsInBhdGNoT25Qcm9wZXJ0aWVzIiwicGF0Y2hNZXRob2QiLCJiaW5kQXJndW1lbnRzIiwicGF0Y2hUaGVuIiwicGF0Y2hNYWNyb1Rhc2siLCJwYXRjaEV2ZW50UHJvdG90eXBlIiwiaXNJRU9yRWRnZSIsImdldEdsb2JhbE9iamVjdHMiLCJPYmplY3REZWZpbmVQcm9wZXJ0eSIsIk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdENyZWF0ZSIsIkFycmF5U2xpY2UiLCJwYXRjaENsYXNzIiwid3JhcFdpdGhDdXJyZW50Wm9uZSIsImZpbHRlclByb3BlcnRpZXMiLCJhdHRhY2hPcmlnaW5Ub1BhdGNoZWQiLCJfcmVkZWZpbmVQcm9wZXJ0eSIsInBhdGNoQ2FsbGJhY2tzIiwid2luZG93IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0R2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsImNyZWF0ZSIsIkFERF9FVkVOVF9MSVNURU5FUl9TVFIiLCJSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSIiwiWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSIiwiWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSIiwiVFJVRV9TVFIiLCJGQUxTRV9TVFIiLCJaT05FX1NZTUJPTF9QUkVGSVgiLCJzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZSIsInpvbmVTeW1ib2wkMSIsImlzV2luZG93RXhpc3RzIiwiaW50ZXJuYWxXaW5kb3ciLCJfZ2xvYmFsIiwiUkVNT1ZFX0FUVFJJQlVURSIsInBhdGNoUHJvdG90eXBlIiwiZm5OYW1lcyIsImNvbnN0cnVjdG9yIiwiX2xvb3BfMSIsIm5hbWVfMSIsInByb3RvdHlwZURlc2MiLCJpc1Byb3BlcnR5V3JpdGFibGUiLCJwYXRjaGVkIiwicHJvcGVydHlEZXNjIiwid3JpdGFibGUiLCJzZXQiLCJpc1dlYldvcmtlciIsIldvcmtlckdsb2JhbFNjb3BlIiwiaXNOb2RlIiwicHJvY2VzcyIsImlzQnJvd3NlciIsImlzTWl4Iiwiem9uZVN5bWJvbEV2ZW50TmFtZXMkMSIsIndyYXBGbiIsImV2ZW50IiwiZXZlbnROYW1lU3ltYm9sIiwibGlzdGVuZXIiLCJyZXN1bHQiLCJlcnJvckV2ZW50IiwibWVzc2FnZSIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJwcmV2ZW50RGVmYXVsdCIsInBhdGNoUHJvcGVydHkiLCJvYmoiLCJwcm9wIiwiZGVzYyIsIm9uUHJvcFBhdGNoZWRTeW1ib2wiLCJvcmlnaW5hbERlc2NHZXQiLCJvcmlnaW5hbERlc2NTZXQiLCJldmVudE5hbWUiLCJuZXdWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uUHJvcGVydGllcyIsImoiLCJvcmlnaW5hbEluc3RhbmNlS2V5IiwiY2xhc3NOYW1lIiwiT3JpZ2luYWxDbGFzcyIsImEiLCJpbnN0YW5jZSIsInBhdGNoRm4iLCJwcm90byIsImRlbGVnYXRlTmFtZSIsInBhdGNoRGVsZWdhdGVfMSIsImZ1bmNOYW1lIiwibWV0YUNyZWF0b3IiLCJzZXROYXRpdmUiLCJjYklkeCIsIm1ldGEiLCJvcmlnaW5hbCIsImlzRGV0ZWN0ZWRJRU9yRWRnZSIsImllT3JFZGdlIiwiaXNJRSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImFwaSIsInJlYWRhYmxlT2JqZWN0VG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyIsImlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uIiwiY3JlYXRpb25UcmFjZSIsImUiLCJyZWplY3Rpb24iLCJjb25zb2xlIiwic3RhY2siLCJfbG9vcF8yIiwidW5jYXVnaHRQcm9taXNlRXJyb3IiLCJzaGlmdCIsInRocm93T3JpZ2luYWwiLCJoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24iLCJVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wiLCJoYW5kbGVyIiwiaXNUaGVuYWJsZSIsInRoZW4iLCJmb3J3YXJkUmVzb2x1dGlvbiIsImZvcndhcmRSZWplY3Rpb24iLCJab25lQXdhcmVQcm9taXNlIiwicmVqZWN0Iiwic3ltYm9sU3RhdGUiLCJzeW1ib2xWYWx1ZSIsInN5bWJvbEZpbmFsbHkiLCJzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWUiLCJzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGUiLCJVTlJFU09MVkVEIiwiUkVTT0xWRUQiLCJSRUpFQ1RFRCIsIlJFSkVDVEVEX05PX0NBVENIIiwibWFrZVJlc29sdmVyIiwicHJvbWlzZSIsInYiLCJyZXNvbHZlUHJvbWlzZSIsIm9uY2UiLCJ3YXNDYWxsZWQiLCJ3cmFwcGVyIiwid3JhcHBlZEZ1bmN0aW9uIiwiVFlQRV9FUlJPUiIsIkNVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wiLCJvbmNlV3JhcHBlciIsIlR5cGVFcnJvciIsImNsZWFyUmVqZWN0ZWROb0NhdGNoIiwidHJhY2UiLCJjdXJyZW50VGFzayIsInNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0IiwiUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUiIsInNwbGljZSIsImNoYWluUHJvbWlzZSIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInByb21pc2VTdGF0ZSIsInBhcmVudFByb21pc2VWYWx1ZSIsImlzRmluYWxseVByb21pc2UiLCJaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HIiwiQWdncmVnYXRlRXJyb3IiLCJleGVjdXRvciIsImFueSIsInZhbHVlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiUHJvbWlzZSIsInByb21pc2VzIiwiX2kiLCJ2YWx1ZXNfMSIsImZpbmlzaGVkIiwiZXJyb3JzIiwicmFjZSIsInJlcyIsInJlaiIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwidmFsdWVzXzIiLCJhbGwiLCJhbGxXaXRoQ2FsbGJhY2siLCJhbGxTZXR0bGVkIiwiUCIsInRoZW5DYWxsYmFjayIsInN0YXR1cyIsImVycm9yQ2FsbGJhY2siLCJyZWFzb24iLCJ1bnJlc29sdmVkQ291bnQiLCJ2YWx1ZUluZGV4IiwicmVzb2x2ZWRWYWx1ZXMiLCJfbG9vcF8zIiwidGhpc18xIiwiY3VyVmFsdWVJbmRleCIsInRoZW5FcnIiLCJ2YWx1ZXNfMyIsInRvU3RyaW5nVGFnIiwic3BlY2llcyIsIl9hIiwiQyIsImNhdGNoIiwiZmluYWxseSIsIm9uRmluYWxseSIsIk5hdGl2ZVByb21pc2UiLCJzeW1ib2xUaGVuUGF0Y2hlZCIsIkN0b3IiLCJvcmlnaW5hbFRoZW4iLCJfdGhpcyIsIndyYXBwZWQiLCJ6b25laWZ5IiwicmVzdWx0UHJvbWlzZSIsImN0b3IiLCJvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmciLCJGdW5jdGlvbiIsIk9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCIsIlBST01JU0VfU1lNQk9MIiwiRVJST1JfU1lNQk9MIiwibmV3RnVuY3Rpb25Ub1N0cmluZyIsIm9yaWdpbmFsRGVsZWdhdGUiLCJuYXRpdmVQcm9taXNlIiwibmF0aXZlRXJyb3IiLCJvcmlnaW5hbE9iamVjdFRvU3RyaW5nIiwiUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HIiwicGFzc2l2ZVN1cHBvcnRlZCIsIk9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSIsInpvbmVTeW1ib2xFdmVudE5hbWVzIiwiZ2xvYmFsU291cmNlcyIsIkVWRU5UX05BTUVfU1lNQk9MX1JFR1giLCJSZWdFeHAiLCJJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MIiwicHJlcGFyZUV2ZW50TmFtZXMiLCJldmVudE5hbWVUb1N0cmluZyIsImZhbHNlRXZlbnROYW1lIiwidHJ1ZUV2ZW50TmFtZSIsInN5bWJvbENhcHR1cmUiLCJhcGlzIiwicGF0Y2hPcHRpb25zIiwiQUREX0VWRU5UX0xJU1RFTkVSIiwiYWRkIiwiUkVNT1ZFX0VWRU5UX0xJU1RFTkVSIiwicm0iLCJMSVNURU5FUlNfRVZFTlRfTElTVEVORVIiLCJsaXN0ZW5lcnMiLCJSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiIsInJtQWxsIiwiem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXIiLCJBRERfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiUFJFUEVORF9FVkVOVF9MSVNURU5FUiIsIlBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiaXNSZW1vdmVkIiwiaGFuZGxlRXZlbnQiLCJkZWxlZ2F0ZV8xIiwiZ2xvYmFsQ2FsbGJhY2siLCJjb250ZXh0IiwiaXNDYXB0dXJlIiwidGFza3MiLCJjb3B5VGFza3MiLCJfbG9vcF80IiwiZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2siLCJnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2siLCJwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyIsInVzZUdsb2JhbENhbGxiYWNrIiwidmFsaWRhdGVIYW5kbGVyIiwidmgiLCJjaGtEdXAiLCJyZXR1cm5UYXJnZXQiLCJydCIsInRhc2tEYXRhIiwibmF0aXZlQWRkRXZlbnRMaXN0ZW5lciIsIm5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXRpdmVMaXN0ZW5lcnMiLCJuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMiLCJuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciIsInByZXBlbmQiLCJidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJhc3NpZ24iLCJjdXN0b21TY2hlZHVsZUdsb2JhbCIsImlzRXhpc3RpbmciLCJjdXN0b21DYW5jZWxHbG9iYWwiLCJzeW1ib2xFdmVudE5hbWVzIiwic3ltYm9sRXZlbnROYW1lIiwiZXhpc3RpbmdUYXNrcyIsImV4aXN0aW5nVGFzayIsImFsbFJlbW92ZWQiLCJjdXN0b21TY2hlZHVsZU5vbkdsb2JhbCIsImN1c3RvbVNjaGVkdWxlUHJlcGVuZCIsImN1c3RvbUNhbmNlbE5vbkdsb2JhbCIsImNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlIiwidHlwZU9mRGVsZWdhdGUiLCJjb21wYXJlIiwiZGlmZiIsInVucGF0Y2hlZEV2ZW50cyIsInBhc3NpdmVFdmVudHMiLCJtYWtlQWRkTGlzdGVuZXIiLCJuYXRpdmVMaXN0ZW5lciIsImFkZFNvdXJjZSIsImN1c3RvbVNjaGVkdWxlRm4iLCJjdXN0b21DYW5jZWxGbiIsInRyYW5zZmVyRXZlbnROYW1lIiwiaXNIYW5kbGVFdmVudCIsImNvbnN0cnVjdG9yTmFtZSIsInRhcmdldFNvdXJjZSIsInVuc2hpZnQiLCJvblByb3BlcnR5U3ltYm9sIiwiZmluZEV2ZW50VGFza3MiLCJrZXlzIiwibWF0Y2giLCJleGVjIiwiZXZ0TmFtZSIsInN5bWJvbENhcHR1cmVFdmVudE5hbWUiLCJjYXB0dXJlVGFza3MiLCJyZW1vdmVUYXNrcyIsInJlc3VsdHMiLCJmb3VuZFRhc2tzIiwiY2FwdHVyZUZhbHNlVGFza3MiLCJjYXB0dXJlVHJ1ZVRhc2tzIiwiRXZlbnQiLCJ0YXJnZXROYW1lIiwibWV0aG9kIiwiY2FsbGJhY2tzIiwibmF0aXZlRGVsZWdhdGUiLCJvcHRzIiwiZm9yRWFjaCIsImRlc2NyaXB0b3IiLCJpZ25vcmVQcm9wZXJ0aWVzIiwidGlwIiwiZmlsdGVyIiwiaXAiLCJ0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzIiwib3AiLCJwYXRjaEZpbHRlcmVkUHJvcGVydGllcyIsImZpbHRlcmVkUHJvcGVydGllcyIsImdldE9uRXZlbnROYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJzdGFydHNXaXRoIiwibWFwIiwic3Vic3RyaW5nIiwicHJvcGVydHlEZXNjcmlwdG9yUGF0Y2giLCJwYXRjaFRhcmdldHMiLCJpbnRlcm5hbFdpbmRvd18xIiwiaWdub3JlRXJyb3JQcm9wZXJ0aWVzIiwiZXZlbnROYW1lcyIsIlNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTIiwiU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFMiLCJ6b25lU3ltYm9sIiwiX2RlZmluZVByb3BlcnR5IiwiX2dldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jcmVhdGUiLCJ1bmNvbmZpZ3VyYWJsZXNLZXkiLCJwcm9wZXJ0eVBhdGNoIiwiaXNVbmNvbmZpZ3VyYWJsZSIsIm9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyIsInJld3JpdGVEZXNjcmlwdG9yIiwiX3RyeURlZmluZVByb3BlcnR5IiwiZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiX2IiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJwcm9wZXJ0aWVzT2JqZWN0IiwiaXNGcm96ZW4iLCJzd2FsbG93RXJyb3IiLCJkZXNjSnNvbiIsImxvZyIsImV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2giLCJXVEZfSVNTVUVfNTU1IiwiTk9fRVZFTlRfVEFSR0VUIiwic3BsaXQiLCJFVkVOVF9UQVJHRVQiLCJpc1d0ZiIsIldURl9JU1NVRV81NTVfQVJSQVkiLCJpc0Rpc2FibGVJRUNoZWNrIiwiaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjayIsIkZVTkNUSU9OX1dSQVBQRVIiLCJCUk9XU0VSX1RPT0xTIiwicG9pbnRlckV2ZW50c01hcCIsInRhcmdldHMiLCJjaGVja0lFQW5kQ3Jvc3NDb250ZXh0IiwidGVzdFN0cmluZyIsImFwaVR5cGVzIiwicG9pbnRlckV2ZW50TmFtZSIsIldTIiwiV2ViU29ja2V0IiwiRXZlbnRUYXJnZXQiLCJ4IiwieSIsInNvY2tldCIsInByb3h5U29ja2V0IiwicHJveHlTb2NrZXRQcm90byIsIm9ubWVzc2FnZURlc2MiLCJwcm9wTmFtZSIsInByb3BlcnR5U3ltYm9sIiwiZ2xvYmFsV2ViU29ja2V0IiwicHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2giLCJjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvciIsInN1cHBvcnRzV2ViU29ja2V0IiwicGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMiLCJIVE1MRWxlbWVudCIsIkVsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmNsaWNrIiwiWE1MSHR0cFJlcXVlc3QiLCJPTl9SRUFEWV9TVEFURV9DSEFOR0UiLCJYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSIsInhockRlc2MiLCJyZXEiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMSIsImRldGVjdEZ1bmMiLCJnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcyIsImRvY3VtZW50RXZlbnROYW1lcyIsIndpbmRvd0V2ZW50TmFtZXMiLCJodG1sRWxlbWVudEV2ZW50TmFtZXMiLCJpZUVsZW1lbnRFdmVudE5hbWVzIiwid2ViZ2xFdmVudE5hbWVzIiwiZm9ybUV2ZW50TmFtZXMiLCJkZXRhaWxFdmVudE5hbWVzIiwidW5ib3VuZEtleSIsIl9sb29wXzUiLCJwcm9wZXJ0eSIsIm9ucHJvcGVydHkiLCJlbHQiLCJib3VuZCIsInBhcmVudEVsZW1lbnQiLCJyZWdpc3RlckVsZW1lbnRQYXRjaCIsInRhc2tTeW1ib2wiLCJwYXRjaFRpbWVyIiwic2V0TmFtZSIsImNhbmNlbE5hbWUiLCJuYW1lU3VmZml4IiwiY2xlYXJOYXRpdmUiLCJ0YXNrc0J5SGFuZGxlSWQiLCJjbGVhclRhc2siLCJvcHRpb25zXzEiLCJkZWxheSIsImNhbGxiYWNrXzEiLCJ0aW1lciIsImhhbmRsZSIsInJlZiIsInVucmVmIiwiYmluZCIsImlkIiwicGF0Y2hDdXN0b21FbGVtZW50cyIsImN1c3RvbUVsZW1lbnRzIiwiZXZlbnRUYXJnZXRQYXRjaCIsInBhdGNoRXZlbnQiLCJsZWdhY3lQYXRjaCIsImNsZWFyIiwiYmxvY2tpbmdNZXRob2RzIiwibmFtZV8yIiwicyIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQiLCJwYXRjaFhIUiIsIlhIUl9UQVNLIiwiWEhSX1NZTkMiLCJYSFJfTElTVEVORVIiLCJYSFJfU0NIRURVTEVEIiwiWEhSX1VSTCIsIlhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEIiwiZmluZFBlbmRpbmdUYXNrIiwib3JpQWRkTGlzdGVuZXIiLCJvcmlSZW1vdmVMaXN0ZW5lciIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRfMSIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGUiLCJSRUFEWV9TVEFURV9DSEFOR0UiLCJTQ0hFRFVMRUQiLCJuZXdMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJET05FIiwiYWJvcnRlZCIsImxvYWRUYXNrcyIsIm9yaUludm9rZV8xIiwic3RvcmVkVGFzayIsInNlbmROYXRpdmUiLCJwbGFjZWhvbGRlckNhbGxiYWNrIiwiYWJvcnROYXRpdmUiLCJvcGVuTmF0aXZlIiwiWE1MSFRUUFJFUVVFU1RfU09VUkNFIiwiZmV0Y2hUYXNrQWJvcnRpbmciLCJmZXRjaFRhc2tTY2hlZHVsaW5nIiwidXJsIiwiZ2VvbG9jYXRpb24iLCJmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIiLCJldmVudFRhc2tzIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwiZXZ0Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsyXX0=