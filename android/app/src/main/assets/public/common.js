"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4975dbd0.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-1a99aeb7.js */ 4895);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 634);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 9013:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-5ad6825d.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 2668:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-ce4f806c.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        // If there is no component, then we need to create a new parent
        // element to apply the css classes to.
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 634:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-683b3b3c.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    return !!this.getEngine();
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 2286:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-33ffec25.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * When accessing the window, it is important
 * to account for SSR applications where the
 * window is not available. Code that accesses
 * window when it is not available will crash.
 * Even checking if `window === undefined` will cause
 * apps to crash in SSR.
 *
 * Use win below to access an SSR-safe version
 * of the window.
 *
 * Example 1:
 * Before:
 * if (window.innerWidth > 768) { ... }
 *
 * After:
 * import { win } from 'path/to/this/file';
 * if (win?.innerWidth > 768) { ... }
 *
 * Note: Code inside of this if-block will
 * not run in an SSR environment.
 */
const win = typeof window !== 'undefined' ? window : undefined;


/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3413f7be.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el && el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 2002:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-40bb69ee.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 1812:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-fa30a130.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 607);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU1FLE9BQU8sR0FBR0QsY0FBYyxHQUFHLElBQUlILFNBQVAsR0FBbUJBLFNBQWpEO0lBQ0EsTUFBTUssZUFBZSxHQUFHRCxPQUFPLEdBQUdyRSxLQUFsQztJQUNBLElBQUl1RSxPQUFPLEdBQUcsQ0FBZDs7SUFDQSxJQUFJRCxlQUFlLEdBQUcsQ0FBdEIsRUFBeUI7TUFDdkIsTUFBTWhELEdBQUcsR0FBR2dELGVBQWUsR0FBRy9ELElBQUksQ0FBQ2lFLEdBQUwsQ0FBU04sUUFBVCxDQUE5QjtNQUNBSyxPQUFPLEdBQUdoRSxJQUFJLENBQUNrRSxHQUFMLENBQVNuRCxHQUFULEVBQWMsR0FBZCxDQUFWO0lBQ0Q7SUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7SUFDSStCLFlBQVksQ0FBQ2UsY0FBRCxFQUFpQkgsU0FBUyxJQUFJLENBQWIsR0FBaUIsSUFBakIsR0FBd0JqQix1REFBSyxDQUFDLENBQUQsRUFBSWlCLFNBQUosRUFBZSxNQUFmLENBQTlDLEVBQXNFTSxPQUF0RSxDQUFaO0VBQ0QsQ0FyQkQ7O0VBc0JBLE9BQU90UyxpRUFBYSxDQUFDO0lBQ25CRSxFQURtQjtJQUVuQnFCLFdBQVcsRUFBRSxjQUZNO0lBR25Ca1IsZUFBZSxFQUFFLEVBSEU7SUFJbkJqUixTQUFTLEVBQUUsRUFKUTtJQUtuQnNRLFFBTG1CO0lBTW5CclEsT0FBTyxFQUFFeVAsY0FOVTtJQU9uQnJQLE1BUG1CO0lBUW5CQztFQVJtQixDQUFELENBQXBCO0FBVUQsQ0EvREQiLCJzb3VyY2VzIjpbIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2J1dHRvbi1hY3RpdmUtNDk3NWRiZDAuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9kaXItZThiNzY3YTguanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9mb2N1cy12aXNpYmxlLTVhZDY4MjVkLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZnJhbWV3b3JrLWRlbGVnYXRlLWNlNGY4MDZjLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaGFwdGljLTY4M2IzYjNjLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtMzNmZmVjMjUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC0zNDEzZjdiZS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTQwYmI2OWVlLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtNGQ1NTQ0YTAuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9rZXlib2FyZC1jb250cm9sbGVyLTczYWY2MmIyLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3Bpbm5lci1jb25maWdzLTVkNmI2ZmU3LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3dpcGUtYmFjay1mYTMwYTEzMC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2luZGV4LTFhOTlhZWI3LmpzJztcbmltcG9ydCB7IGggYXMgaGFwdGljU2VsZWN0aW9uRW5kLCBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgfSBmcm9tICcuL2hhcHRpYy02ODNiM2IzYy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zZjFhN2Q5NS5qcyc7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgPSAoZWwsIGlzQnV0dG9uKSA9PiB7XG4gIGxldCBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgbGV0IGluaXRpYWxUb3VjaGVkQnV0dG9uO1xuICBjb25zdCBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQgPSAoeCwgeSwgaGFwdGljRmVlZGJhY2tGbikgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWlzQnV0dG9uKHRhcmdldCkpIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQgIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKHRhcmdldCwgaGFwdGljRmVlZGJhY2tGbik7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uLCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgY3VycmVudFRvdWNoZWRCdXR0b24gPSBidXR0b247XG4gICAgaWYgKCFpbml0aWFsVG91Y2hlZEJ1dHRvbikge1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LmFkZCgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICBoYXB0aWNGZWVkYmFja0ZuKCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyQWN0aXZlQnV0dG9uID0gKGRpc3BhdGNoQ2xpY2sgPSBmYWxzZSkgPT4ge1xuICAgIGlmICghY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICAvKipcbiAgICAgKiBDbGlja2luZyBvbiBvbmUgYnV0dG9uLCBidXQgcmVsZWFzaW5nIG9uIGFub3RoZXIgYnV0dG9uXG4gICAgICogZG9lcyBub3QgZGlzcGF0Y2ggYSBjbGljayBldmVudCBpbiBicm93c2Vycywgc28gd2VcbiAgICAgKiBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5IGhlcmUuIFNvbWUgYnJvd3NlcnMgd2lsbFxuICAgICAqIGRpc3BhdGNoIGEgY2xpY2sgaWYgY2xpY2tpbmcgb24gb25lIGJ1dHRvbiwgZHJhZ2dpbmcgb3ZlclxuICAgICAqIGFub3RoZXIgYnV0dG9uLCBhbmQgcmVsZWFzaW5nIG9uIHRoZSBvcmlnaW5hbCBidXR0b24uIEluIHRoYXRcbiAgICAgKiBjYXNlLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgY2F1c2UgYSBkb3VibGUgY2xpY2sgdGhlcmUuXG4gICAgICovXG4gICAgaWYgKGRpc3BhdGNoQ2xpY2sgJiYgaW5pdGlhbFRvdWNoZWRCdXR0b24gIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnYnV0dG9uQWN0aXZlRHJhZycsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIG9uU3RhcnQ6IChldikgPT4gYWN0aXZhdGVCdXR0b25BdFBvaW50KGV2LmN1cnJlbnRYLCBldi5jdXJyZW50WSwgaGFwdGljU2VsZWN0aW9uU3RhcnQpLFxuICAgIG9uTW92ZTogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKSxcbiAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24odHJ1ZSk7XG4gICAgICBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gKGhvc3RFbCkgPT4ge1xuICBpZiAoaG9zdEVsKSB7XG4gICAgaWYgKGhvc3RFbC5kaXIgIT09ICcnKSB7XG4gICAgICByZXR1cm4gaG9zdEVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQuZGlyLnRvTG93ZXJDYXNlKCkpID09PSAncnRsJztcbn07XG5cbmV4cG9ydCB7IGlzUlRMIGFzIGkgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBJT05fRk9DVVNFRCA9ICdpb24tZm9jdXNlZCc7XG5jb25zdCBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xuY29uc3QgRk9DVVNfS0VZUyA9IFtcbiAgJ1RhYicsXG4gICdBcnJvd0Rvd24nLFxuICAnU3BhY2UnLFxuICAnRXNjYXBlJyxcbiAgJyAnLFxuICAnU2hpZnQnLFxuICAnRW50ZXInLFxuICAnQXJyb3dMZWZ0JyxcbiAgJ0Fycm93UmlnaHQnLFxuICAnQXJyb3dVcCcsXG4gICdIb21lJyxcbiAgJ0VuZCcsXG5dO1xuY29uc3Qgc3RhcnRGb2N1c1Zpc2libGUgPSAocm9vdEVsKSA9PiB7XG4gIGxldCBjdXJyZW50Rm9jdXMgPSBbXTtcbiAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XG4gIGNvbnN0IHJlZiA9IHJvb3RFbCA/IHJvb3RFbC5zaGFkb3dSb290IDogZG9jdW1lbnQ7XG4gIGNvbnN0IHJvb3QgPSByb290RWwgPyByb290RWwgOiBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBzZXRGb2N1cyA9IChlbGVtZW50cykgPT4ge1xuICAgIGN1cnJlbnRGb2N1cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShJT05fRk9DVVNFRCkpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKElPTl9GT0NVU0VEKSk7XG4gICAgY3VycmVudEZvY3VzID0gZWxlbWVudHM7XG4gIH07XG4gIGNvbnN0IHBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xuICAgIHNldEZvY3VzKFtdKTtcbiAgfTtcbiAgY29uc3Qgb25LZXlkb3duID0gKGV2KSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gRk9DVVNfS0VZUy5pbmNsdWRlcyhldi5rZXkpO1xuICAgIGlmICgha2V5Ym9hcmRNb2RlKSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3VzaW4gPSAoZXYpID0+IHtcbiAgICBpZiAoa2V5Ym9hcmRNb2RlICYmIGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgY29uc3QgdG9Gb2N1cyA9IGV2LmNvbXBvc2VkUGF0aCgpLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoSU9OX0ZPQ1VTQUJMRSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBzZXRGb2N1cyh0b0ZvY3VzKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNvdXQgPSAoKSA9PiB7XG4gICAgaWYgKHJlZi5hY3RpdmVFbGVtZW50ID09PSByb290KSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwb2ludGVyRG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95LFxuICAgIHNldEZvY3VzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgc3RhcnRGb2N1c1Zpc2libGUgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudE9uUmVhZHkgfSBmcm9tICcuL2hlbHBlcnMtNGQyNzIzNjAuanMnO1xuXG5jb25zdCBhdHRhY2hDb21wb25lbnQgPSBhc3luYyAoZGVsZWdhdGUsIGNvbnRhaW5lciwgY29tcG9uZW50LCBjc3NDbGFzc2VzLCBjb21wb25lbnRQcm9wcywgaW5saW5lKSA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKGRlbGVnYXRlKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlLmF0dGFjaFZpZXdUb0RvbShjb250YWluZXIsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIGNzc0NsYXNzZXMpO1xuICB9XG4gIGlmICghaW5saW5lICYmIHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnICYmICEoY29tcG9uZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmcmFtZXdvcmsgZGVsZWdhdGUgaXMgbWlzc2luZycpO1xuICB9XG4gIGNvbnN0IGVsID0gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycgPyAoX2EgPSBjb250YWluZXIub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudDtcbiAgaWYgKGNzc0NsYXNzZXMpIHtcbiAgICBjc3NDbGFzc2VzLmZvckVhY2goKGMpID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICB9XG4gIGlmIChjb21wb25lbnRQcm9wcykge1xuICAgIE9iamVjdC5hc3NpZ24oZWwsIGNvbXBvbmVudFByb3BzKTtcbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICByZXR1cm4gZWw7XG59O1xuY29uc3QgZGV0YWNoQ29tcG9uZW50ID0gKGRlbGVnYXRlLCBlbGVtZW50KSA9PiB7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4gZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20oY29udGFpbmVyLCBlbGVtZW50KTtcbiAgICB9XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuY29uc3QgQ29yZURlbGVnYXRlID0gKCkgPT4ge1xuICBsZXQgQmFzZUNvbXBvbmVudDtcbiAgbGV0IFJlZmVyZW5jZTtcbiAgY29uc3QgYXR0YWNoVmlld1RvRG9tID0gYXN5bmMgKHBhcmVudEVsZW1lbnQsIHVzZXJDb21wb25lbnQsIHVzZXJDb21wb25lbnRQcm9wcyA9IHt9LCBjc3NDbGFzc2VzID0gW10pID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIEJhc2VDb21wb25lbnQgPSBwYXJlbnRFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIElmIHBhc3NpbmcgaW4gYSBjb21wb25lbnQgdmlhIHRoZSBgY29tcG9uZW50YCBwcm9wc1xuICAgICAqIHdlIG5lZWQgdG8gYXBwZW5kIGl0IGluc2lkZSBvZiBvdXIgb3ZlcmxheSBjb21wb25lbnQuXG4gICAgICovXG4gICAgaWYgKHVzZXJDb21wb25lbnQpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgcGFzc2luZyBpbiB0aGUgdGFnIG5hbWUsIGNyZWF0ZVxuICAgICAgICogdGhlIGVsZW1lbnQgb3RoZXJ3aXNlIGp1c3QgZ2V0IGEgcmVmZXJlbmNlXG4gICAgICAgKiB0byB0aGUgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBjb25zdCBlbCA9IHR5cGVvZiB1c2VyQ29tcG9uZW50ID09PSAnc3RyaW5nJyA/IChfYSA9IEJhc2VDb21wb25lbnQub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNyZWF0ZUVsZW1lbnQodXNlckNvbXBvbmVudCkgOiB1c2VyQ29tcG9uZW50O1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYW55IGNzcyBjbGFzc2VzIHBhc3NlZCBpblxuICAgICAgICogdmlhIHRoZSBjc3NDbGFzc2VzIHByb3Agb24gdGhlIG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoYykgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBhbnkgcHJvcHMgcGFzc2VkIGluXG4gICAgICAgKiB2aWEgdGhlIGNvbXBvbmVudFByb3BzIHByb3Agb24gdGhlIG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIE9iamVjdC5hc3NpZ24oZWwsIHVzZXJDb21wb25lbnRQcm9wcyk7XG4gICAgICAvKipcbiAgICAgICAqIEZpbmFsbHksIGFwcGVuZCB0aGUgY29tcG9uZW50XG4gICAgICAgKiBpbnNpZGUgb2YgdGhlIG92ZXJsYXkgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBCYXNlQ29tcG9uZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnRPblJlYWR5KGVsLCByZXNvbHZlKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJhc2VDb21wb25lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY29tcG9uZW50LCB0aGVuIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IHBhcmVudFxuICAgICAgLy8gZWxlbWVudCB0byBhcHBseSB0aGUgY3NzIGNsYXNzZXMgdG8uXG4gICAgICBjb25zdCBlbCA9IChfYiA9IEJhc2VDb21wb25lbnQub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIC8vIE1vdmUgZWFjaCBjaGlsZCBmcm9tIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0byB0aGUgbmV3IHBhcmVudCBlbGVtZW50LlxuICAgICAgZWwuYXBwZW5kKC4uLkJhc2VDb21wb25lbnQuY2hpbGRyZW4pO1xuICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcGFyZW50IGVsZW1lbnQgdG8gdGhlIG9yaWdpbmFsIHBhcmVudCBlbGVtZW50LlxuICAgICAgQmFzZUNvbXBvbmVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcm9vdCBvZiB0aGUgYXBwIGFuZFxuICAgICAqIGFkZCB0aGUgb3ZlcmxheSB0aGVyZS5cbiAgICAgKi9cbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwbGFjZWhvbGRlciBjb21tZW50IHNvIHRoYXRcbiAgICAgKiB3ZSBjYW4gcmV0dXJuIHRoaXMgY29tcG9uZW50IHRvIHdoZXJlXG4gICAgICogaXQgd2FzIHByZXZpb3VzbHkuXG4gICAgICovXG4gICAgUmVmZXJlbmNlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnaW9uaWMgdGVsZXBvcnQnKTtcbiAgICBCYXNlQ29tcG9uZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFJlZmVyZW5jZSwgQmFzZUNvbXBvbmVudCk7XG4gICAgYXBwLmFwcGVuZENoaWxkKEJhc2VDb21wb25lbnQpO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xuICB9O1xuICBjb25zdCByZW1vdmVWaWV3RnJvbURvbSA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY29tcG9uZW50IHRvIHdoZXJlIGl0IHdhcyBwcmV2aW91c2x5IGluIHRoZSBET00uXG4gICAgICovXG4gICAgaWYgKEJhc2VDb21wb25lbnQgJiYgUmVmZXJlbmNlKSB7XG4gICAgICBSZWZlcmVuY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoQmFzZUNvbXBvbmVudCwgUmVmZXJlbmNlKTtcbiAgICAgIFJlZmVyZW5jZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuICByZXR1cm4geyBhdHRhY2hWaWV3VG9Eb20sIHJlbW92ZVZpZXdGcm9tRG9tIH07XG59O1xuXG5leHBvcnQgeyBDb3JlRGVsZWdhdGUgYXMgQywgYXR0YWNoQ29tcG9uZW50IGFzIGEsIGRldGFjaENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgSGFwdGljRW5naW5lID0ge1xuICBnZXRFbmdpbmUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICByZXR1cm4gd2luLlRhcHRpY0VuZ2luZSB8fCAoKChfYSA9IHdpbi5DYXBhY2l0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc1BsdWdpbkF2YWlsYWJsZSgnSGFwdGljcycpKSAmJiB3aW4uQ2FwYWNpdG9yLlBsdWdpbnMuSGFwdGljcyk7XG4gIH0sXG4gIGF2YWlsYWJsZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmdldEVuZ2luZSgpO1xuICB9LFxuICBpc0NvcmRvdmEoKSB7XG4gICAgcmV0dXJuICEhd2luZG93LlRhcHRpY0VuZ2luZTtcbiAgfSxcbiAgaXNDYXBhY2l0b3IoKSB7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIHJldHVybiAhIXdpbi5DYXBhY2l0b3I7XG4gIH0sXG4gIGltcGFjdChvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLmltcGFjdCh7IHN0eWxlIH0pO1xuICB9LFxuICBub3RpZmljYXRpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmlzQ2FwYWNpdG9yKCkgPyBvcHRpb25zLnN0eWxlLnRvVXBwZXJDYXNlKCkgOiBvcHRpb25zLnN0eWxlO1xuICAgIGVuZ2luZS5ub3RpZmljYXRpb24oeyBzdHlsZSB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uKCkge1xuICAgIHRoaXMuaW1wYWN0KHsgc3R5bGU6ICdsaWdodCcgfSk7XG4gIH0sXG4gIHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbiAgfSxcbiAgc2VsZWN0aW9uQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25FbmQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gIH0sXG59O1xuLyoqXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcbiAqIChub3QgZm9yIGdlc3R1cmVzKVxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb24gPSAoKSA9PiB7XG4gIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb24oKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSAoKSA9PiB7XG4gIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25TdGFydCgpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgd2UgYXJlIGRvbmUgd2l0aCBhIGdlc3R1cmUuIFRoaXMgbmVlZHMgdG8gYmVcbiAqIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25FbmQgPSAoKSA9PiB7XG4gIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbn07XG4vKipcbiAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxuICogb3B0aW9ucyBzaG91bGQgYmUgb2YgdGhlIHR5cGUgYHsgc3R5bGU6ICdsaWdodCcgfWAgKG9yIGBtZWRpdW1gL2BoZWF2eWApXG4gKi9cbmNvbnN0IGhhcHRpY0ltcGFjdCA9IChvcHRpb25zKSA9PiB7XG4gIEhhcHRpY0VuZ2luZS5pbXBhY3Qob3B0aW9ucyk7XG59O1xuXG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbiBhcyBjLCBoYXB0aWNJbXBhY3QgYXMgZCwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGggfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIFdoZW4gYWNjZXNzaW5nIHRoZSB3aW5kb3csIGl0IGlzIGltcG9ydGFudFxuICogdG8gYWNjb3VudCBmb3IgU1NSIGFwcGxpY2F0aW9ucyB3aGVyZSB0aGVcbiAqIHdpbmRvdyBpcyBub3QgYXZhaWxhYmxlLiBDb2RlIHRoYXQgYWNjZXNzZXNcbiAqIHdpbmRvdyB3aGVuIGl0IGlzIG5vdCBhdmFpbGFibGUgd2lsbCBjcmFzaC5cbiAqIEV2ZW4gY2hlY2tpbmcgaWYgYHdpbmRvdyA9PT0gdW5kZWZpbmVkYCB3aWxsIGNhdXNlXG4gKiBhcHBzIHRvIGNyYXNoIGluIFNTUi5cbiAqXG4gKiBVc2Ugd2luIGJlbG93IHRvIGFjY2VzcyBhbiBTU1Itc2FmZSB2ZXJzaW9uXG4gKiBvZiB0aGUgd2luZG93LlxuICpcbiAqIEV4YW1wbGUgMTpcbiAqIEJlZm9yZTpcbiAqIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkgeyAuLi4gfVxuICpcbiAqIEFmdGVyOlxuICogaW1wb3J0IHsgd2luIH0gZnJvbSAncGF0aC90by90aGlzL2ZpbGUnO1xuICogaWYgKHdpbj8uaW5uZXJXaWR0aCA+IDc2OCkgeyAuLi4gfVxuICpcbiAqIE5vdGU6IENvZGUgaW5zaWRlIG9mIHRoaXMgaWYtYmxvY2sgd2lsbFxuICogbm90IHJ1biBpbiBhbiBTU1IgZW52aXJvbm1lbnQuXG4gKi9cbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG5leHBvcnQgeyB3aW4gYXMgdyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy00ZDI3MjM2MC5qcyc7XG5pbXBvcnQgeyBhIGFzIHByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IgfSBmcm9tICcuL2luZGV4LWM0YjExNjc2LmpzJztcblxuY29uc3QgSU9OX0NPTlRFTlRfVEFHX05BTUUgPSAnSU9OLUNPTlRFTlQnO1xuY29uc3QgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiA9ICdpb24tY29udGVudCc7XG5jb25zdCBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiA9ICcuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3QnO1xuLyoqXG4gKiBTZWxlY3RvciB1c2VkIGZvciBpbXBsZW1lbnRhdGlvbnMgcmVsaWFudCBvbiBgPGlvbi1jb250ZW50PmAgZm9yIHNjcm9sbCBldmVudCBjaGFuZ2VzLlxuICpcbiAqIERldmVsb3BlcnMgc2hvdWxkIHVzZSB0aGUgYC5pb24tY29udGVudC1zY3JvbGwtaG9zdGAgc2VsZWN0b3IgdG8gdGFyZ2V0IHRoZSBlbGVtZW50IGVtaXR0aW5nXG4gKiBzY3JvbGwgZXZlbnRzLiBXaXRoIHZpcnR1YWwgc2Nyb2xsIGltcGxlbWVudGF0aW9ucyB0aGlzIHdpbGwgYmUgdGhlIGhvc3QgZWxlbWVudCBmb3JcbiAqIHRoZSBzY3JvbGwgdmlld3BvcnQuXG4gKi9cbmNvbnN0IElPTl9DT05URU5UX1NFTEVDVE9SID0gYCR7SU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUn0sICR7SU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1J9YDtcbmNvbnN0IGlzSW9uQ29udGVudCA9IChlbCkgPT4gZWwgJiYgZWwudGFnTmFtZSA9PT0gSU9OX0NPTlRFTlRfVEFHX05BTUU7XG4vKipcbiAqIFdhaXRzIGZvciB0aGUgZWxlbWVudCBob3N0IGZ1bGx5IGluaXRpYWxpemUgYmVmb3JlXG4gKiByZXR1cm5pbmcgdGhlIGlubmVyIHNjcm9sbCBlbGVtZW50LlxuICpcbiAqIEZvciBgaW9uLWNvbnRlbnRgIHRoZSBzY3JvbGwgdGFyZ2V0IHdpbGwgYmUgdGhlIHJlc3VsdFxuICogb2YgdGhlIGBnZXRTY3JvbGxFbGVtZW50YCBmdW5jdGlvbi5cbiAqXG4gKiBGb3IgY3VzdG9tIGltcGxlbWVudGF0aW9ucyBpdCB3aWxsIGJlIHRoZSBlbGVtZW50IGhvc3RcbiAqIG9yIGEgc2VsZWN0b3Igd2l0aGluIHRoZSBob3N0LCBpZiBzdXBwbGllZCB0aHJvdWdoIGBzY3JvbGxUYXJnZXRgLlxuICovXG5jb25zdCBnZXRTY3JvbGxFbGVtZW50ID0gYXN5bmMgKGVsKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgICByZXR1cm4gZWwuZ2V0U2Nyb2xsRWxlbWVudCgpO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG4vKipcbiAqIFF1ZXJpZXMgdGhlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICogU2VlIElPTl9DT05URU5UX1NFTEVDVE9SIGZvciB0aGUgc2VsZWN0b3IgdXNlZC5cbiAqL1xuY29uc3QgZmluZElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgLyoqXG4gICAqIEZpcnN0IHdlIHRyeSB0byBxdWVyeSB0aGUgY3VzdG9tIHNjcm9sbCBob3N0IHNlbGVjdG9yIGluIGNhc2VzIHdoZXJlXG4gICAqIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyB1c2luZyBhbiBvdXRlciBgaW9uLWNvbnRlbnRgIHdpdGggYW4gaW5uZXIgY3VzdG9tXG4gICAqIHNjcm9sbCBjb250YWluZXIuXG4gICAqL1xuICBjb25zdCBjdXN0b21Db250ZW50SG9zdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IpO1xuICBpZiAoY3VzdG9tQ29udGVudEhvc3QpIHtcbiAgICByZXR1cm4gY3VzdG9tQ29udGVudEhvc3Q7XG4gIH1cbiAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3IoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgY2xvc2VzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmb3IgSW9uQ29udGVudC5cbiAqL1xuY29uc3QgZmluZENsb3Nlc3RJb25Db250ZW50ID0gKGVsKSA9PiB7XG4gIHJldHVybiBlbC5jbG9zZXN0KElPTl9DT05URU5UX1NFTEVDVE9SKTtcbn07XG4vKipcbiAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgZWxlbWVudC4gSWYgYW4gYGlvbi1jb250ZW50YCBpcyBmb3VuZCwgaXQgd2lsbCBzY3JvbGxcbiAqIHVzaW5nIHRoZSBwdWJsaWMgQVBJIGBzY3JvbGxUb1RvcGAgd2l0aCBhIGR1cmF0aW9uLlxuICovXG5jb25zdCBzY3JvbGxUb1RvcCA9IChlbCwgZHVyYXRpb25NcykgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICByZXR1cm4gY29udGVudC5zY3JvbGxUb1RvcChkdXJhdGlvbk1zKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsLnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiZWhhdmlvcjogZHVyYXRpb25NcyA+IDAgPyAnc21vb3RoJyA6ICdhdXRvJyxcbiAgfSkpO1xufTtcbi8qKlxuICogU2Nyb2xscyBieSBhIHNwZWNpZmllZCBYL1kgZGlzdGFuY2UgaW4gdGhlIGNvbXBvbmVudC4gSWYgYW4gYGlvbi1jb250ZW50YCBpcyBmb3VuZCwgaXQgd2lsbCBzY3JvbGxcbiAqIHVzaW5nIHRoZSBwdWJsaWMgQVBJIGBzY3JvbGxCeVBvaW50YCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbmNvbnN0IHNjcm9sbEJ5UG9pbnQgPSAoZWwsIHgsIHksIGR1cmF0aW9uTXMpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWw7XG4gICAgcmV0dXJuIGNvbnRlbnQuc2Nyb2xsQnlQb2ludCh4LCB5LCBkdXJhdGlvbk1zKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsLnNjcm9sbEJ5KHtcbiAgICB0b3A6IHksXG4gICAgbGVmdDogeCxcbiAgICBiZWhhdmlvcjogZHVyYXRpb25NcyA+IDAgPyAnc21vb3RoJyA6ICdhdXRvJyxcbiAgfSkpO1xufTtcbi8qKlxuICogUHJpbnRzIGFuIGVycm9yIGluZm9ybWluZyBkZXZlbG9wZXJzIHRoYXQgYW4gaW1wbGVtZW50YXRpb24gcmVxdWlyZXMgYW4gZWxlbWVudCB0byBiZSB1c2VkXG4gKiB3aXRoaW4gZWl0aGVyIHRoZSBgaW9uLWNvbnRlbnRgIHNlbGVjdG9yIG9yIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBjbGFzcy5cbiAqL1xuY29uc3QgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgPSAoZWwpID0+IHtcbiAgcmV0dXJuIHByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IoZWwsIElPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2V2ZXJhbCBjb21wb25lbnRzIGluIElvbmljIG5lZWQgdG8gcHJldmVudCBzY3JvbGxpbmdcbiAqIGR1cmluZyBhIGdlc3R1cmUgKGNhcmQgbW9kYWwsIHJhbmdlLCBpdGVtIHNsaWRpbmcsIGV0YykuXG4gKiBVc2UgdGhpcyB1dGlsaXR5IHRvIGFjY291bnQgZm9yIGlvbi1jb250ZW50IGFuZCBjdXN0b20gY29udGVudCBob3N0cy5cbiAqL1xuY29uc3QgZGlzYWJsZUNvbnRlbnRTY3JvbGxZID0gKGNvbnRlbnRFbCkgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGNvbnRlbnRFbCkpIHtcbiAgICBjb25zdCBpb25Db250ZW50ID0gY29udGVudEVsO1xuICAgIGNvbnN0IGluaXRpYWxTY3JvbGxZID0gaW9uQ29udGVudC5zY3JvbGxZO1xuICAgIGlvbkNvbnRlbnQuc2Nyb2xsWSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIHJlc2V0Q29udGVudFNjcm9sbFlcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiByZXZlcnQgaW9uLWNvbnRlbnQncyBzY3JvbGxZIHRvIHRoZVxuICAgICAqIGNvcnJlY3Qgc3RhdGUuIEZvciBleGFtcGxlLCBpZiBzY3JvbGxZID0gZmFsc2VcbiAgICAgKiBpbml0aWFsbHksIHdlIGRvIG5vdCB3YW50IHRvIGVuYWJsZSBzY3JvbGxpbmdcbiAgICAgKiB3aGVuIHdlIGNhbGwgcmVzZXRDb250ZW50U2Nyb2xsWS5cbiAgICAgKi9cbiAgICByZXR1cm4gaW5pdGlhbFNjcm9sbFk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbmNvbnN0IHJlc2V0Q29udGVudFNjcm9sbFkgPSAoY29udGVudEVsLCBpbml0aWFsU2Nyb2xsWSkgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGNvbnRlbnRFbCkpIHtcbiAgICBjb250ZW50RWwuc2Nyb2xsWSA9IGluaXRpYWxTY3JvbGxZO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnRlbnRFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiBhcyBJLCBmaW5kSW9uQ29udGVudCBhcyBhLCBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiBhcyBiLCBzY3JvbGxCeVBvaW50IGFzIGMsIGRpc2FibGVDb250ZW50U2Nyb2xsWSBhcyBkLCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgYXMgZiwgZ2V0U2Nyb2xsRWxlbWVudCBhcyBnLCBpc0lvbkNvbnRlbnQgYXMgaSwgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgYXMgcCwgcmVzZXRDb250ZW50U2Nyb2xsWSBhcyByLCBzY3JvbGxUb1RvcCBhcyBzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyogSW9uaWNvbnMgdjYuMC4zLCBFUyBNb2R1bGVzICovXG5jb25zdCBhcnJvd0JhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkFycm93IEJhY2s8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTI0NCA0MDBMMTAwIDI1NmwxNDQtMTQ0TTEyMCAyNTZoMjkyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGFycm93RG93biA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkFycm93IERvd248L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAyNjhsMTQ0IDE0NCAxNDQtMTQ0TTI1NiAzOTJWMTAwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2FyZXQgQmFjazwvdGl0bGU+PHBhdGggZD0nTTM2OCA2NEwxNDQgMjU2bDIyNCAxOTJWNjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldERvd25TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNhcmV0IERvd248L3RpdGxlPjxwYXRoIGQ9J002NCAxNDRsMTkyIDIyNCAxOTItMjI0SDY0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRVcFNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2FyZXQgVXA8L3RpdGxlPjxwYXRoIGQ9J000NDggMzY4TDI1NiAxNDQgNjQgMzY4aDM4NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNoZWNrbWFya091dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGVja21hcms8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQxNiAxMjhMMTkyIDM4NGwtOTYtOTYnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkJhY2sgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIEJhY2s8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTMyOCAxMTJMMTg0IDI1NmwxNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Eb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBEb3duPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMTg0bDE0NCAxNDQgMTQ0LTE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gRm9yd2FyZDwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTg0IDExMmwxNDQgMTQ0LTE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkZvcndhcmRPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBGb3J3YXJkPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlPC90aXRsZT48cGF0aCBkPSdNMjg5Ljk0IDI1Nmw5NS05NUEyNCAyNCAwIDAwMzUxIDEyN2wtOTUgOTUtOTUtOTVhMjQgMjQgMCAwMC0zNCAzNGw5NSA5NS05NSA5NWEyNCAyNCAwIDEwMzQgMzRsOTUtOTUgOTUgOTVhMjQgMjQgMCAwMDM0LTM0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VDaXJjbGUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DbG9zZSBDaXJjbGU8L3RpdGxlPjxwYXRoIGQ9J00yNTYgNDhDMTQxLjMxIDQ4IDQ4IDE0MS4zMSA0OCAyNTZzOTMuMzEgMjA4IDIwOCAyMDggMjA4LTkzLjMxIDIwOC0yMDhTMzcwLjY5IDQ4IDI1NiA0OHptNzUuMzEgMjYwLjY5YTE2IDE2IDAgMTEtMjIuNjIgMjIuNjJMMjU2IDI3OC42M2wtNTIuNjkgNTIuNjhhMTYgMTYgMCAwMS0yMi42Mi0yMi42MkwyMzMuMzcgMjU2bC01Mi42OC01Mi42OWExNiAxNiAwIDAxMjIuNjItMjIuNjJMMjU2IDIzMy4zN2w1Mi42OS01Mi42OGExNiAxNiAwIDAxMjIuNjIgMjIuNjJMMjc4LjYzIDI1NnonLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHBhdGggZD0nTTQwMCAxNDUuNDlMMzY2LjUxIDExMiAyNTYgMjIyLjUxIDE0NS40OSAxMTIgMTEyIDE0NS40OSAyMjIuNTEgMjU2IDExMiAzNjYuNTEgMTQ1LjQ5IDQwMCAyNTYgMjg5LjQ5IDM2Ni41MSA0MDAgNDAwIDM2Ni41MSAyODkuNDkgMjU2IDQwMCAxNDUuNDl6Jy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkVsbGlwc2U8L3RpdGxlPjxjaXJjbGUgY3g9JzI1NicgY3k9JzI1Nicgcj0nMTkyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgZWxsaXBzaXNIb3Jpem9udGFsID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+RWxsaXBzaXMgSG9yaXpvbnRhbDwvdGl0bGU+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9JzQxNicgY3k9JzI1Nicgcj0nNDgnLz48Y2lyY2xlIGN4PSc5NicgY3k9JzI1Nicgcj0nNDgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J004MCAxNjBoMzUyTTgwIDI1NmgzNTJNODAgMzUyaDM1MicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBtZW51U2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPSdNNjQgMzg0aDM4NHYtNDIuNjdINjR6bTAtMTA2LjY3aDM4NHYtNDIuNjZINjR6TTY0IDEyOHY0Mi42N2gzODRWMTI4eicvPjwvc3ZnPlwiO1xuY29uc3QgcmVtb3ZlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPlJlbW92ZTwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDAwIDI1NkgxMTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclRocmVlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPlJlb3JkZXIgVGhyZWU8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTk2IDI1NmgzMjBNOTYgMTc2aDMyME05NiAzMzZoMzIwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUd29TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPlJlb3JkZXIgVHdvPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ0JyBkPSdNMTE4IDMwNGgyNzZNMTE4IDIwOGgyNzYnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPlNlYXJjaDwvdGl0bGU+PHBhdGggZD0nTTIyMS4wOSA2NGExNTcuMDkgMTU3LjA5IDAgMTAxNTcuMDkgMTU3LjA5QTE1Ny4xIDE1Ny4xIDAgMDAyMjEuMDkgNjR6JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNMzM4LjI5IDMzOC4yOUw0NDggNDQ4JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHNlYXJjaFNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+U2VhcmNoPC90aXRsZT48cGF0aCBkPSdNNDY0IDQyOEwzMzkuOTIgMzAzLjlhMTYwLjQ4IDE2MC40OCAwIDAwMzAuNzItOTQuNThDMzcwLjY0IDEyMC4zNyAyOTguMjcgNDggMjA5LjMyIDQ4UzQ4IDEyMC4zNyA0OCAyMDkuMzJzNzIuMzcgMTYxLjMyIDE2MS4zMiAxNjEuMzJhMTYwLjQ4IDE2MC40OCAwIDAwOTQuNTgtMzAuNzJMNDI4IDQ2NHpNMjA5LjMyIDMxOS42OWExMTAuMzggMTEwLjM4IDAgMTExMTAuMzctMTEwLjM3IDExMC41IDExMC41IDAgMDEtMTEwLjM3IDExMC4zN3onLz48L3N2Zz5cIjtcblxuZXhwb3J0IHsgYXJyb3dCYWNrU2hhcnAgYXMgYSwgY2xvc2VDaXJjbGUgYXMgYiwgY2hldnJvbkJhY2sgYXMgYywgY2xvc2VTaGFycCBhcyBkLCBzZWFyY2hTaGFycCBhcyBlLCBjaGVja21hcmtPdXRsaW5lIGFzIGYsIGVsbGlwc2VPdXRsaW5lIGFzIGcsIGNhcmV0QmFja1NoYXJwIGFzIGgsIGFycm93RG93biBhcyBpLCByZW9yZGVyVGhyZWVPdXRsaW5lIGFzIGosIHJlb3JkZXJUd29TaGFycCBhcyBrLCBjaGV2cm9uRG93biBhcyBsLCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgYXMgbSwgZWxsaXBzaXNIb3Jpem9udGFsIGFzIG4sIGNoZXZyb25Gb3J3YXJkIGFzIG8sIGNhcmV0VXBTaGFycCBhcyBwLCBjYXJldERvd25TaGFycCBhcyBxLCByZW1vdmVPdXRsaW5lIGFzIHIsIHNlYXJjaE91dGxpbmUgYXMgcywgY2xvc2UgYXMgdCwgbWVudU91dGxpbmUgYXMgdSwgbWVudVNoYXJwIGFzIHYgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBLRVlCT0FSRF9ESURfT1BFTiA9ICdpb25LZXlib2FyZERpZFNob3cnO1xuY29uc3QgS0VZQk9BUkRfRElEX0NMT1NFID0gJ2lvbktleWJvYXJkRGlkSGlkZSc7XG5jb25zdCBLRVlCT0FSRF9USFJFU0hPTEQgPSAxNTA7XG5sZXQgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xubGV0IGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xubGV0IGtleWJvYXJkT3BlbiA9IGZhbHNlO1xuLyoqXG4gKiBUaGlzIGlzIG9ubHkgdXNlZCBmb3IgdGVzdHNcbiAqL1xuY29uc3QgcmVzZXRLZXlib2FyZEFzc2lzdCA9ICgpID0+IHtcbiAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbiAga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG59O1xuY29uc3Qgc3RhcnRLZXlib2FyZEFzc2lzdCA9ICh3aW4pID0+IHtcbiAgc3RhcnROYXRpdmVMaXN0ZW5lcnMod2luKTtcbiAgaWYgKCF3aW4udmlzdWFsVmlld3BvcnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG4gIHdpbi52aXN1YWxWaWV3cG9ydC5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICB0cmFja1ZpZXdwb3J0Q2hhbmdlcyh3aW4pO1xuICAgIGlmIChrZXlib2FyZERpZE9wZW4oKSB8fCBrZXlib2FyZERpZFJlc2l6ZSh3aW4pKSB7XG4gICAgICBzZXRLZXlib2FyZE9wZW4od2luKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5Ym9hcmREaWRDbG9zZSh3aW4pKSB7XG4gICAgICBzZXRLZXlib2FyZENsb3NlKHdpbik7XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogTGlzdGVuIGZvciBldmVudHMgZmlyZWQgYnkgbmF0aXZlIGtleWJvYXJkIHBsdWdpblxuICogaW4gQ2FwYWNpdG9yL0NvcmRvdmEgc28gZGV2cyBvbmx5IG5lZWQgdG8gbGlzdGVuXG4gKiBpbiBvbmUgcGxhY2UuXG4gKi9cbmNvbnN0IHN0YXJ0TmF0aXZlTGlzdGVuZXJzID0gKHdpbikgPT4ge1xuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmREaWRTaG93JywgKGV2KSA9PiBzZXRLZXlib2FyZE9wZW4od2luLCBldikpO1xuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmREaWRIaWRlJywgKCkgPT4gc2V0S2V5Ym9hcmRDbG9zZSh3aW4pKTtcbn07XG5jb25zdCBzZXRLZXlib2FyZE9wZW4gPSAod2luLCBldikgPT4ge1xuICBmaXJlS2V5Ym9hcmRPcGVuRXZlbnQod2luLCBldik7XG4gIGtleWJvYXJkT3BlbiA9IHRydWU7XG59O1xuY29uc3Qgc2V0S2V5Ym9hcmRDbG9zZSA9ICh3aW4pID0+IHtcbiAgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCh3aW4pO1xuICBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbn07XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBga2V5Ym9hcmRPcGVuYCBmbGFnIGlzIG5vdFxuICogc2V0LCB0aGUgcHJldmlvdXMgdmlzdWFsIHZpZXdwb3J0IHdpZHRoIGVxdWFsIHRoZSBjdXJyZW50XG4gKiB2aXN1YWwgdmlld3BvcnQgd2lkdGgsIGFuZCBpZiB0aGUgc2NhbGVkIGRpZmZlcmVuY2VcbiAqIG9mIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IG1pbnVzIHRoZSBjdXJyZW50XG4gKiB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiBLRVlCT0FSRF9USFJFU0hPTERcbiAqXG4gKiBXZSBuZWVkIHRvIGJlIGFibGUgdG8gYWNjb21tb2RhdGUgdXNlcnMgd2hvIGhhdmUgem9vbWluZ1xuICogZW5hYmxlZCBpbiB0aGVpciBicm93c2VyIChvciBoYXZlIHpvb21lZCBpbiBtYW51YWxseSkgd2hpY2hcbiAqIGlzIHdoeSB3ZSB0YWtlIGludG8gYWNjb3VudCB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQnc1xuICogc2NhbGUgdmFsdWUuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkT3BlbiA9ICgpID0+IHtcbiAgY29uc3Qgc2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSA9IChwcmV2aW91c1Zpc3VhbFZpZXdwb3J0LmhlaWdodCAtIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQpICogY3VycmVudFZpc3VhbFZpZXdwb3J0LnNjYWxlO1xuICByZXR1cm4gKCFrZXlib2FyZE9wZW4gJiZcbiAgICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0LndpZHRoID09PSBjdXJyZW50VmlzdWFsVmlld3BvcnQud2lkdGggJiZcbiAgICBzY2FsZWRIZWlnaHREaWZmZXJlbmNlID4gS0VZQk9BUkRfVEhSRVNIT0xEKTtcbn07XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBrZXlib2FyZCBpcyBvcGVuLFxuICogYnV0IHRoZSBrZXlib2FyZCBkaWQgbm90IGNsb3NlXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkUmVzaXplID0gKHdpbikgPT4ge1xuICByZXR1cm4ga2V5Ym9hcmRPcGVuICYmICFrZXlib2FyZERpZENsb3NlKHdpbik7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIGtleWJvYXJkIHdhcyBjbG9zZWRcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBga2V5Ym9hcmRPcGVuYCBmbGFnIGlzIHNldCBhbmRcbiAqIHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgZXF1YWxzIHRoZVxuICogbGF5b3V0IHZpZXdwb3J0IGhlaWdodC5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRDbG9zZSA9ICh3aW4pID0+IHtcbiAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0ID09PSB3aW4uaW5uZXJIZWlnaHQ7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIG9wZW4gZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkT3BlbkV2ZW50ID0gKHdpbiwgbmF0aXZlRXYpID0+IHtcbiAgY29uc3Qga2V5Ym9hcmRIZWlnaHQgPSBuYXRpdmVFdiA/IG5hdGl2ZUV2LmtleWJvYXJkSGVpZ2h0IDogd2luLmlubmVySGVpZ2h0IC0gY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoS0VZQk9BUkRfRElEX09QRU4sIHtcbiAgICBkZXRhaWw6IHsga2V5Ym9hcmRIZWlnaHQgfSxcbiAgfSk7XG4gIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgY2xvc2UgZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCA9ICh3aW4pID0+IHtcbiAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoS0VZQk9BUkRfRElEX0NMT1NFKTtcbiAgd2luLmRpc3BhdGNoRXZlbnQoZXYpO1xufTtcbi8qKlxuICogR2l2ZW4gYSB3aW5kb3cgb2JqZWN0LCBjcmVhdGUgYSBjb3B5IG9mXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgYW5kIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqIHdoaWxlIGFsc28gcHJlc2VydmluZyB0aGUgcHJldmlvdXMgdmlzdWFsIGFuZFxuICogbGF5b3V0IHZpZXdwb3J0IHN0YXRlc1xuICovXG5jb25zdCB0cmFja1ZpZXdwb3J0Q2hhbmdlcyA9ICh3aW4pID0+IHtcbiAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCk7XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IGNvcHlWaXN1YWxWaWV3cG9ydCh3aW4udmlzdWFsVmlld3BvcnQpO1xufTtcbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgdmlzdWFsIHZpZXdwb3J0XG4gKiBhdCBhIGdpdmVuIHN0YXRlXG4gKi9cbmNvbnN0IGNvcHlWaXN1YWxWaWV3cG9ydCA9ICh2aXN1YWxWaWV3cG9ydCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBNYXRoLnJvdW5kKHZpc3VhbFZpZXdwb3J0LndpZHRoKSxcbiAgICBoZWlnaHQ6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQuaGVpZ2h0KSxcbiAgICBvZmZzZXRUb3A6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCxcbiAgICBvZmZzZXRMZWZ0OiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0LFxuICAgIHBhZ2VUb3A6IHZpc3VhbFZpZXdwb3J0LnBhZ2VUb3AsXG4gICAgcGFnZUxlZnQ6IHZpc3VhbFZpZXdwb3J0LnBhZ2VMZWZ0LFxuICAgIHNjYWxlOiB2aXN1YWxWaWV3cG9ydC5zY2FsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEtFWUJPQVJEX0RJRF9DTE9TRSwgS0VZQk9BUkRfRElEX09QRU4sIGNvcHlWaXN1YWxWaWV3cG9ydCwga2V5Ym9hcmREaWRDbG9zZSwga2V5Ym9hcmREaWRPcGVuLCBrZXlib2FyZERpZFJlc2l6ZSwgcmVzZXRLZXlib2FyZEFzc2lzdCwgc2V0S2V5Ym9hcmRDbG9zZSwgc2V0S2V5Ym9hcmRPcGVuLCBzdGFydEtleWJvYXJkQXNzaXN0LCB0cmFja1ZpZXdwb3J0Q2hhbmdlcyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd2luIH0gZnJvbSAnLi9pbmRleC0zM2ZmZWMyNS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbnRyb2xsZXIgdGhhdCB0cmFja3MgYW5kIHJlYWN0cyB0byBvcGVuaW5nIG9yIGNsb3NpbmcgdGhlIGtleWJvYXJkLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2sgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGtleWJvYXJkIG9wZW5zIG9yIGNsb3Nlcy5cbiAqL1xuY29uc3QgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyID0gKGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2spID0+IHtcbiAgbGV0IGtleWJvYXJkV2lsbFNob3dIYW5kbGVyO1xuICBsZXQga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXI7XG4gIGxldCBrZXlib2FyZFZpc2libGU7XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBrZXlib2FyZFZpc2libGUgPSB0cnVlO1xuICAgICAgaWYgKGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2spXG4gICAgICAgIGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2sodHJ1ZSk7XG4gICAgfTtcbiAgICBrZXlib2FyZFdpbGxIaWRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGtleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2spXG4gICAgICAgIGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2soZmFsc2UpO1xuICAgIH07XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbFNob3cnLCBrZXlib2FyZFdpbGxTaG93SGFuZGxlcik7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbEhpZGUnLCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcik7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbFNob3cnLCBrZXlib2FyZFdpbGxTaG93SGFuZGxlcik7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbEhpZGUnLCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcik7XG4gICAga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIgPSBrZXlib2FyZFdpbGxIaWRlSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgfTtcbiAgY29uc3QgaXNLZXlib2FyZFZpc2libGUgPSAoKSA9PiBrZXlib2FyZFZpc2libGU7XG4gIGluaXQoKTtcbiAgcmV0dXJuIHsgaW5pdCwgZGVzdHJveSwgaXNLZXlib2FyZFZpc2libGUgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3Qgc3Bpbm5lcnMgPSB7XG4gIGJ1YmJsZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgY2lyY2xlczogOSxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICBjb25zdCBhbmdsZSA9ICgyICogTWF0aC5QSSAqIGluZGV4KSAvIHRvdGFsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogNSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0b3A6IGAkezkgKiBNYXRoLnNpbihhbmdsZSl9cHhgLFxuICAgICAgICAgIGxlZnQ6IGAkezkgKiBNYXRoLmNvcyhhbmdsZSl9cHhgLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgY2lyY2xlczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBjaXJjbGVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBpbmRleCAvIHRvdGFsO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHtkdXIgKiBzdGVwIC0gZHVyfW1zYDtcbiAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiBzdGVwO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogNSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0b3A6IGAkezkgKiBNYXRoLnNpbihhbmdsZSl9cHhgLFxuICAgICAgICAgIGxlZnQ6IGAkezkgKiBNYXRoLmNvcyhhbmdsZSl9cHhgLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgY2lyY3VsYXI6IHtcbiAgICBkdXI6IDE0MDAsXG4gICAgZWxtRHVyYXRpb246IHRydWUsXG4gICAgY2lyY2xlczogMSxcbiAgICBmbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogMjAsXG4gICAgICAgIGN4OiA0OCxcbiAgICAgICAgY3k6IDQ4LFxuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHZpZXdCb3g6ICcyNCAyNCA0OCA0OCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLDApJyxcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjcmVzY2VudDoge1xuICAgIGR1cjogNzUwLFxuICAgIGNpcmNsZXM6IDEsXG4gICAgZm46ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDI2LFxuICAgICAgICBzdHlsZToge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGRvdHM6IHtcbiAgICBkdXI6IDc1MCxcbiAgICBjaXJjbGVzOiAzLFxuICAgIGZuOiAoXywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gLSgxMTAgKiBpbmRleCkgKyAnbXMnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBsZWZ0OiBgJHs5IC0gOSAqIGluZGV4fXB4YCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGxpbmVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHsoMzYwIC8gdG90YWwpICogaW5kZXggKyAoaW5kZXggPCB0b3RhbCAvIDIgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxNCxcbiAgICAgICAgeTI6IDI2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNtYWxsJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTIsXG4gICAgICAgIHkyOiAyMCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zaGFycCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDEyLFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHszMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDE3LFxuICAgICAgICB5MjogMjksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc2hhcnAtc21hbGwnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiAxMixcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxMixcbiAgICAgICAgeTI6IDIwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn07XG5jb25zdCBTUElOTkVSUyA9IHNwaW5uZXJzO1xuXG5leHBvcnQgeyBTUElOTkVSUyBhcyBTIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgbCBhcyBjbGFtcCB9IGZyb20gJy4vaGVscGVycy00ZDI3MjM2MC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzUlRMIH0gZnJvbSAnLi9kaXItZThiNzY3YTguanMnO1xuaW1wb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtM2YxYTdkOTUuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci0xN2U4MjAwNi5qcyc7XG5cbmNvbnN0IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgPSAoZWwsIGNhblN0YXJ0SGFuZGxlciwgb25TdGFydEhhbmRsZXIsIG9uTW92ZUhhbmRsZXIsIG9uRW5kSGFuZGxlcikgPT4ge1xuICBjb25zdCB3aW4gPSBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBydGwgPSBpc1JUTChlbCk7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYSBnZXN0dXJlIGlzIG5lYXIgdGhlIGVkZ2VcbiAgICogb2YgdGhlIHNjcmVlbi4gSWYgdHJ1ZSwgdGhlbiB0aGUgc3dpcGVcbiAgICogdG8gZ28gYmFjayBnZXN0dXJlIHNob3VsZCBwcm9jZWVkLlxuICAgKi9cbiAgY29uc3QgaXNBdEVkZ2UgPSAoZGV0YWlsKSA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gNTA7XG4gICAgY29uc3QgeyBzdGFydFggfSA9IGRldGFpbDtcbiAgICBpZiAocnRsKSB7XG4gICAgICByZXR1cm4gc3RhcnRYID49IHdpbi5pbm5lcldpZHRoIC0gdGhyZXNob2xkO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRYIDw9IHRocmVzaG9sZDtcbiAgfTtcbiAgY29uc3QgZ2V0RGVsdGFYID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLmRlbHRhWCA6IGRldGFpbC5kZWx0YVg7XG4gIH07XG4gIGNvbnN0IGdldFZlbG9jaXR5WCA9IChkZXRhaWwpID0+IHtcbiAgICByZXR1cm4gcnRsID8gLWRldGFpbC52ZWxvY2l0eVggOiBkZXRhaWwudmVsb2NpdHlYO1xuICB9O1xuICBjb25zdCBjYW5TdGFydCA9IChkZXRhaWwpID0+IHtcbiAgICByZXR1cm4gaXNBdEVkZ2UoZGV0YWlsKSAmJiBjYW5TdGFydEhhbmRsZXIoKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlID0gKGRldGFpbCkgPT4ge1xuICAgIC8vIHNldCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24ncyBwcm9ncmVzc1xuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aW4uaW5uZXJXaWR0aDtcbiAgICBvbk1vdmVIYW5kbGVyKHN0ZXBWYWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gKGRldGFpbCkgPT4ge1xuICAgIC8vIHRoZSBzd2lwZSBiYWNrIGdlc3R1cmUgaGFzIGVuZGVkXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBnZXRWZWxvY2l0eVgoZGV0YWlsKTtcbiAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZWx0YSA+IHopO1xuICAgIGNvbnN0IG1pc3NpbmcgPSBzaG91bGRDb21wbGV0ZSA/IDEgLSBzdGVwVmFsdWUgOiBzdGVwVmFsdWU7XG4gICAgY29uc3QgbWlzc2luZ0Rpc3RhbmNlID0gbWlzc2luZyAqIHdpZHRoO1xuICAgIGxldCByZWFsRHVyID0gMDtcbiAgICBpZiAobWlzc2luZ0Rpc3RhbmNlID4gNSkge1xuICAgICAgY29uc3QgZHVyID0gbWlzc2luZ0Rpc3RhbmNlIC8gTWF0aC5hYnModmVsb2NpdHkpO1xuICAgICAgcmVhbER1ciA9IE1hdGgubWluKGR1ciwgNTQwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVE9ETzogc3RlcFZhbHVlIGNhbiBzb21ldGltZXMgcmV0dXJuIG5lZ2F0aXZlIHZhbHVlc1xuICAgICAqIG9yIHZhbHVlcyBncmVhdGVyIHRoYW4gMSB3aGljaCBzaG91bGQgbm90IGJlIHBvc3NpYmxlLlxuICAgICAqIE5lZWQgdG8gaW52ZXN0aWdhdGUgbW9yZSB0byBmaW5kIHdoZXJlIHRoZSBpc3N1ZSBpcy5cbiAgICAgKi9cbiAgICBvbkVuZEhhbmRsZXIoc2hvdWxkQ29tcGxldGUsIHN0ZXBWYWx1ZSA8PSAwID8gMC4wMSA6IGNsYW1wKDAsIHN0ZXBWYWx1ZSwgMC45OTk5KSwgcmVhbER1cik7XG4gIH07XG4gIHJldHVybiBjcmVhdGVHZXN0dXJlKHtcbiAgICBlbCxcbiAgICBnZXN0dXJlTmFtZTogJ2dvYmFjay1zd2lwZScsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiA0MCxcbiAgICB0aHJlc2hvbGQ6IDEwLFxuICAgIGNhblN0YXJ0LFxuICAgIG9uU3RhcnQ6IG9uU3RhcnRIYW5kbGVyLFxuICAgIG9uTW92ZSxcbiAgICBvbkVuZCxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlIH07XG4iXSwibmFtZXMiOlsiYyIsIndyaXRlVGFzayIsImgiLCJoYXB0aWNTZWxlY3Rpb25FbmQiLCJhIiwiaGFwdGljU2VsZWN0aW9uU3RhcnQiLCJiIiwiaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCIsImNyZWF0ZUdlc3R1cmUiLCJjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIiwiZWwiLCJpc0J1dHRvbiIsImN1cnJlbnRUb3VjaGVkQnV0dG9uIiwiaW5pdGlhbFRvdWNoZWRCdXR0b24iLCJhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQiLCJ4IiwieSIsImhhcHRpY0ZlZWRiYWNrRm4iLCJkb2N1bWVudCIsInRhcmdldCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGVhckFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvblRvTW9kaWZ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2hDbGljayIsInJlbW92ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiZ2VzdHVyZU5hbWUiLCJ0aHJlc2hvbGQiLCJvblN0YXJ0IiwiZXYiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwib25Nb3ZlIiwib25FbmQiLCJpc1JUTCIsImhvc3RFbCIsImRpciIsInRvTG93ZXJDYXNlIiwiaSIsIklPTl9GT0NVU0VEIiwiSU9OX0ZPQ1VTQUJMRSIsIkZPQ1VTX0tFWVMiLCJzdGFydEZvY3VzVmlzaWJsZSIsInJvb3RFbCIsImN1cnJlbnRGb2N1cyIsImtleWJvYXJkTW9kZSIsInJlZiIsInNoYWRvd1Jvb3QiLCJyb290IiwiYm9keSIsInNldEZvY3VzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwicG9pbnRlckRvd24iLCJvbktleWRvd24iLCJpbmNsdWRlcyIsImtleSIsIm9uRm9jdXNpbiIsImNvbXBvc2VkUGF0aCIsInRvRm9jdXMiLCJmaWx0ZXIiLCJjb250YWlucyIsIm9uRm9jdXNvdXQiLCJhY3RpdmVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29tcG9uZW50T25SZWFkeSIsImF0dGFjaENvbXBvbmVudCIsImRlbGVnYXRlIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwiY3NzQ2xhc3NlcyIsImNvbXBvbmVudFByb3BzIiwiaW5saW5lIiwiX2EiLCJhdHRhY2hWaWV3VG9Eb20iLCJIVE1MRWxlbWVudCIsIkVycm9yIiwib3duZXJEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJhcHBlbmRDaGlsZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGV0YWNoQ29tcG9uZW50IiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVWaWV3RnJvbURvbSIsIkNvcmVEZWxlZ2F0ZSIsIkJhc2VDb21wb25lbnQiLCJSZWZlcmVuY2UiLCJ1c2VyQ29tcG9uZW50IiwidXNlckNvbXBvbmVudFByb3BzIiwiX2IiLCJjaGlsZHJlbiIsImxlbmd0aCIsImFwcGVuZCIsImFwcCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDb21tZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIkMiLCJkIiwiSGFwdGljRW5naW5lIiwiZ2V0RW5naW5lIiwid2luIiwid2luZG93IiwiVGFwdGljRW5naW5lIiwiQ2FwYWNpdG9yIiwiaXNQbHVnaW5BdmFpbGFibGUiLCJQbHVnaW5zIiwiSGFwdGljcyIsImF2YWlsYWJsZSIsImlzQ29yZG92YSIsImlzQ2FwYWNpdG9yIiwiaW1wYWN0Iiwib3B0aW9ucyIsImVuZ2luZSIsInN0eWxlIiwidG9VcHBlckNhc2UiLCJub3RpZmljYXRpb24iLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsImdlc3R1cmVTZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkNoYW5nZWQiLCJnZXN0dXJlU2VsZWN0aW9uQ2hhbmdlZCIsInNlbGVjdGlvbkVuZCIsImdlc3R1cmVTZWxlY3Rpb25FbmQiLCJoYXB0aWNTZWxlY3Rpb24iLCJoYXB0aWNJbXBhY3QiLCJ3IiwicHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciIsIklPTl9DT05URU5UX1RBR19OQU1FIiwiSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiIsIklPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SIiwiSU9OX0NPTlRFTlRfU0VMRUNUT1IiLCJpc0lvbkNvbnRlbnQiLCJ0YWdOYW1lIiwiZ2V0U2Nyb2xsRWxlbWVudCIsImZpbmRJb25Db250ZW50IiwiY3VzdG9tQ29udGVudEhvc3QiLCJmaW5kQ2xvc2VzdElvbkNvbnRlbnQiLCJjbG9zZXN0Iiwic2Nyb2xsVG9Ub3AiLCJkdXJhdGlvbk1zIiwiY29udGVudCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic2Nyb2xsQnlQb2ludCIsInNjcm9sbEJ5IiwicHJpbnRJb25Db250ZW50RXJyb3JNc2ciLCJkaXNhYmxlQ29udGVudFNjcm9sbFkiLCJjb250ZW50RWwiLCJpb25Db250ZW50IiwiaW5pdGlhbFNjcm9sbFkiLCJzY3JvbGxZIiwic2V0UHJvcGVydHkiLCJyZXNldENvbnRlbnRTY3JvbGxZIiwicmVtb3ZlUHJvcGVydHkiLCJJIiwiZiIsImciLCJwIiwiciIsInMiLCJhcnJvd0JhY2tTaGFycCIsImFycm93RG93biIsImNhcmV0QmFja1NoYXJwIiwiY2FyZXREb3duU2hhcnAiLCJjYXJldFVwU2hhcnAiLCJjaGVja21hcmtPdXRsaW5lIiwiY2hldnJvbkJhY2siLCJjaGV2cm9uRG93biIsImNoZXZyb25Gb3J3YXJkIiwiY2hldnJvbkZvcndhcmRPdXRsaW5lIiwiY2xvc2UiLCJjbG9zZUNpcmNsZSIsImNsb3NlU2hhcnAiLCJlbGxpcHNlT3V0bGluZSIsImVsbGlwc2lzSG9yaXpvbnRhbCIsIm1lbnVPdXRsaW5lIiwibWVudVNoYXJwIiwicmVtb3ZlT3V0bGluZSIsInJlb3JkZXJUaHJlZU91dGxpbmUiLCJyZW9yZGVyVHdvU2hhcnAiLCJzZWFyY2hPdXRsaW5lIiwic2VhcmNoU2hhcnAiLCJlIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicSIsInQiLCJ1IiwidiIsIktFWUJPQVJEX0RJRF9PUEVOIiwiS0VZQk9BUkRfRElEX0NMT1NFIiwiS0VZQk9BUkRfVEhSRVNIT0xEIiwicHJldmlvdXNWaXN1YWxWaWV3cG9ydCIsImN1cnJlbnRWaXN1YWxWaWV3cG9ydCIsImtleWJvYXJkT3BlbiIsInJlc2V0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydEtleWJvYXJkQXNzaXN0Iiwic3RhcnROYXRpdmVMaXN0ZW5lcnMiLCJ2aXN1YWxWaWV3cG9ydCIsImNvcHlWaXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwidHJhY2tWaWV3cG9ydENoYW5nZXMiLCJrZXlib2FyZERpZE9wZW4iLCJrZXlib2FyZERpZFJlc2l6ZSIsInNldEtleWJvYXJkT3BlbiIsImtleWJvYXJkRGlkQ2xvc2UiLCJzZXRLZXlib2FyZENsb3NlIiwiZmlyZUtleWJvYXJkT3BlbkV2ZW50IiwiZmlyZUtleWJvYXJkQ2xvc2VFdmVudCIsInNjYWxlZEhlaWdodERpZmZlcmVuY2UiLCJoZWlnaHQiLCJzY2FsZSIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJuYXRpdmVFdiIsImtleWJvYXJkSGVpZ2h0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInBhZ2VUb3AiLCJwYWdlTGVmdCIsImNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciIsImtleWJvYXJkQ2hhbmdlQ2FsbGJhY2siLCJrZXlib2FyZFdpbGxTaG93SGFuZGxlciIsImtleWJvYXJkV2lsbEhpZGVIYW5kbGVyIiwia2V5Ym9hcmRWaXNpYmxlIiwiaW5pdCIsImlzS2V5Ym9hcmRWaXNpYmxlIiwic3Bpbm5lcnMiLCJidWJibGVzIiwiZHVyIiwiY2lyY2xlcyIsImZuIiwiaW5kZXgiLCJ0b3RhbCIsImFuaW1hdGlvbkRlbGF5IiwiYW5nbGUiLCJQSSIsInNpbiIsImNvcyIsInN0ZXAiLCJjaXJjdWxhciIsImVsbUR1cmF0aW9uIiwiY3giLCJjeSIsImZpbGwiLCJ2aWV3Qm94IiwidHJhbnNmb3JtIiwiY3Jlc2NlbnQiLCJkb3RzIiwiXyIsImxpbmVzIiwieTEiLCJ5MiIsIlNQSU5ORVJTIiwiUyIsImNsYW1wIiwiY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSIsImNhblN0YXJ0SGFuZGxlciIsIm9uU3RhcnRIYW5kbGVyIiwib25Nb3ZlSGFuZGxlciIsIm9uRW5kSGFuZGxlciIsImRlZmF1bHRWaWV3IiwicnRsIiwiaXNBdEVkZ2UiLCJzdGFydFgiLCJpbm5lcldpZHRoIiwiZ2V0RGVsdGFYIiwiZGVsdGFYIiwiZ2V0VmVsb2NpdHlYIiwidmVsb2NpdHlYIiwiY2FuU3RhcnQiLCJkZWx0YSIsInN0ZXBWYWx1ZSIsInZlbG9jaXR5IiwieiIsInNob3VsZENvbXBsZXRlIiwibWlzc2luZyIsIm1pc3NpbmdEaXN0YW5jZSIsInJlYWxEdXIiLCJhYnMiLCJtaW4iLCJnZXN0dXJlUHJpb3JpdHkiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdfQ==