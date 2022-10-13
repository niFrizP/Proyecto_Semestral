(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills-dom"],{

/***/ 3314:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/polyfills/dom.js ***!
  \************************************************************/
/***/ (() => {

(function () {
  /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

  function g(a) {
    var b = aa.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }

  function l(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;

    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);

    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }

  function n(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;

    return b && b !== a ? b.nextSibling : null;
  }

  function p(a, b, d) {
    d = void 0 === d ? new Set() : d;

    for (var c = a; c;) {
      if (c.nodeType === Node.ELEMENT_NODE) {
        var e = c;
        b(e);
        var f = e.localName;

        if ("link" === f && "import" === e.getAttribute("rel")) {
          c = e.import;
          if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) p(c, b, d);
          c = n(a, e);
          continue;
        } else if ("template" === f) {
          c = n(a, e);
          continue;
        }

        if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) p(e, b, d);
      }

      c = c.firstChild ? c.firstChild : n(a, c);
    }
  }

  function r(a, b, d) {
    a[b] = d;
  }

  ;

  function u() {
    this.a = new Map();
    this.g = new Map();
    this.c = [];
    this.f = [];
    this.b = !1;
  }

  function ba(a, b, d) {
    a.a.set(b, d);
    a.g.set(d.constructorFunction, d);
  }

  function ca(a, b) {
    a.b = !0;
    a.c.push(b);
  }

  function da(a, b) {
    a.b = !0;
    a.f.push(b);
  }

  function v(a, b) {
    a.b && p(b, function (b) {
      return w(a, b);
    });
  }

  function w(a, b) {
    if (a.b && !b.__CE_patched) {
      b.__CE_patched = !0;

      for (var d = 0; d < a.c.length; d++) a.c[d](b);

      for (d = 0; d < a.f.length; d++) a.f[d](b);
    }
  }

  function x(a, b) {
    var d = [];
    p(b, function (b) {
      return d.push(b);
    });

    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
    }
  }

  function z(a, b) {
    var d = [];
    p(b, function (b) {
      return d.push(b);
    });

    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state && a.disconnectedCallback(c);
    }
  }

  function A(a, b, d) {
    d = void 0 === d ? {} : d;

    var c = d.u || new Set(),
        e = d.i || function (b) {
      return y(a, b);
    },
        f = [];

    p(b, function (b) {
      if ("link" === b.localName && "import" === b.getAttribute("rel")) {
        var d = b.import;
        d instanceof Node && (d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0);
        d && "complete" === d.readyState ? d.__CE_documentLoadHandled = !0 : b.addEventListener("load", function () {
          var d = b.import;

          if (!d.__CE_documentLoadHandled) {
            d.__CE_documentLoadHandled = !0;
            var f = new Set(c);
            f.delete(d);
            A(a, d, {
              u: f,
              i: e
            });
          }
        });
      } else f.push(b);
    }, c);
    if (a.b) for (b = 0; b < f.length; b++) w(a, f[b]);

    for (b = 0; b < f.length; b++) e(f[b]);
  }

  function y(a, b) {
    if (void 0 === b.__CE_state) {
      var d = b.ownerDocument;
      if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) if (d = a.a.get(b.localName)) {
        d.constructionStack.push(b);
        var c = d.constructorFunction;

        try {
          try {
            if (new c() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            d.constructionStack.pop();
          }
        } catch (t) {
          throw b.__CE_state = 2, t;
        }

        b.__CE_state = 1;
        b.__CE_definition = d;
        if (d.attributeChangedCallback) for (d = d.observedAttributes, c = 0; c < d.length; c++) {
          var e = d[c],
              f = b.getAttribute(e);
          null !== f && a.attributeChangedCallback(b, e, null, f, null);
        }
        l(b) && a.connectedCallback(b);
      }
    }
  }

  u.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };

  u.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };

  u.prototype.attributeChangedCallback = function (a, b, d, c, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
  };

  function B(a) {
    var b = document;
    this.c = a;
    this.a = b;
    this.b = void 0;
    A(this.c, this.a);
    "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
      childList: !0,
      subtree: !0
    }));
  }

  function C(a) {
    a.b && a.b.disconnect();
  }

  B.prototype.f = function (a) {
    var b = this.a.readyState;
    "interactive" !== b && "complete" !== b || C(this);

    for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, c = 0; c < d.length; c++) A(this.c, d[c]);
  };

  function ea() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function (b) {
      a.b = b;
      a.a && b(a.a);
    });
  }

  function D(a) {
    if (a.a) throw Error("Already resolved.");
    a.a = void 0;
    a.b && a.b(void 0);
  }

  ;

  function E(a) {
    this.c = !1;
    this.a = a;
    this.j = new Map();

    this.f = function (b) {
      return b();
    };

    this.b = !1;
    this.g = [];
    this.o = new B(a);
  }

  E.prototype.l = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    if (!g(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
    if (this.c) throw Error("A custom element is already being defined.");
    this.c = !0;

    try {
      var c = function (b) {
        var a = e[b];
        if (void 0 !== a && !(a instanceof Function)) throw Error("The '" + b + "' callback must be a function.");
        return a;
      },
          e = b.prototype;

      if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = c("connectedCallback");
      var t = c("disconnectedCallback");
      var k = c("adoptedCallback");
      var h = c("attributeChangedCallback");
      var m = b.observedAttributes || [];
    } catch (q) {
      return;
    } finally {
      this.c = !1;
    }

    b = {
      localName: a,
      constructorFunction: b,
      connectedCallback: f,
      disconnectedCallback: t,
      adoptedCallback: k,
      attributeChangedCallback: h,
      observedAttributes: m,
      constructionStack: []
    };
    ba(this.a, a, b);
    this.g.push(b);
    this.b || (this.b = !0, this.f(function () {
      return fa(d);
    }));
  };

  E.prototype.i = function (a) {
    A(this.a, a);
  };

  function fa(a) {
    if (!1 !== a.b) {
      a.b = !1;

      for (var b = a.g, d = [], c = new Map(), e = 0; e < b.length; e++) c.set(b[e].localName, []);

      A(a.a, document, {
        i: function (b) {
          if (void 0 === b.__CE_state) {
            var e = b.localName,
                f = c.get(e);
            f ? f.push(b) : a.a.a.get(e) && d.push(b);
          }
        }
      });

      for (e = 0; e < d.length; e++) y(a.a, d[e]);

      for (; 0 < b.length;) {
        var f = b.shift();
        e = f.localName;
        f = c.get(f.localName);

        for (var t = 0; t < f.length; t++) y(a.a, f[t]);

        (e = a.j.get(e)) && D(e);
      }
    }
  }

  E.prototype.get = function (a) {
    if (a = this.a.a.get(a)) return a.constructorFunction;
  };

  E.prototype.m = function (a) {
    if (!g(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.j.get(a);
    if (b) return b.c;
    b = new ea();
    this.j.set(a, b);
    this.a.a.get(a) && !this.g.some(function (b) {
      return b.localName === a;
    }) && D(b);
    return b.c;
  };

  E.prototype.s = function (a) {
    C(this.o);
    var b = this.f;

    this.f = function (d) {
      return a(function () {
        return b(d);
      });
    };
  };

  window.CustomElementRegistry = E;
  E.prototype.define = E.prototype.l;
  E.prototype.upgrade = E.prototype.i;
  E.prototype.get = E.prototype.get;
  E.prototype.whenDefined = E.prototype.m;
  E.prototype.polyfillWrapFlushCallback = E.prototype.s;
  var F = window.Document.prototype.createElement,
      G = window.Document.prototype.createElementNS,
      ha = window.Document.prototype.importNode,
      ia = window.Document.prototype.prepend,
      ja = window.Document.prototype.append,
      ka = window.DocumentFragment.prototype.prepend,
      la = window.DocumentFragment.prototype.append,
      H = window.Node.prototype.cloneNode,
      I = window.Node.prototype.appendChild,
      J = window.Node.prototype.insertBefore,
      K = window.Node.prototype.removeChild,
      L = window.Node.prototype.replaceChild,
      M = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      N = window.Element.prototype.attachShadow,
      O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      P = window.Element.prototype.getAttribute,
      Q = window.Element.prototype.setAttribute,
      R = window.Element.prototype.removeAttribute,
      S = window.Element.prototype.getAttributeNS,
      T = window.Element.prototype.setAttributeNS,
      U = window.Element.prototype.removeAttributeNS,
      ma = window.Element.prototype.insertAdjacentElement,
      na = window.Element.prototype.insertAdjacentHTML,
      oa = window.Element.prototype.prepend,
      pa = window.Element.prototype.append,
      V = window.Element.prototype.before,
      qa = window.Element.prototype.after,
      ra = window.Element.prototype.replaceWith,
      sa = window.Element.prototype.remove,
      ta = window.HTMLElement,
      W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      ua = window.HTMLElement.prototype.insertAdjacentElement,
      va = window.HTMLElement.prototype.insertAdjacentHTML;
  var wa = new function () {}();

  function xa() {
    var a = X;

    window.HTMLElement = function () {
      function b() {
        var b = this.constructor,
            c = a.g.get(b);
        if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
        var e = c.constructionStack;
        if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
        c = e.length - 1;
        var f = e[c];
        if (f === wa) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[c] = wa;
        Object.setPrototypeOf(f, b.prototype);
        w(a, f);
        return f;
      }

      b.prototype = ta.prototype;
      Object.defineProperty(b.prototype, "constructor", {
        writable: !0,
        configurable: !0,
        enumerable: !1,
        value: b
      });
      return b;
    }();
  }

  ;

  function Y(a, b, d) {
    function c(b) {
      return function (d) {
        for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];

        c = [];

        for (var f = [], m = 0; m < e.length; m++) {
          var q = e[m];
          q instanceof Element && l(q) && f.push(q);
          if (q instanceof DocumentFragment) for (q = q.firstChild; q; q = q.nextSibling) c.push(q);else c.push(q);
        }

        b.apply(this, e);

        for (e = 0; e < f.length; e++) z(a, f[e]);

        if (l(this)) for (e = 0; e < c.length; e++) f = c[e], f instanceof Element && x(a, f);
      };
    }

    void 0 !== d.h && (b.prepend = c(d.h));
    void 0 !== d.append && (b.append = c(d.append));
  }

  ;

  function ya() {
    var a = X;
    r(Document.prototype, "createElement", function (b) {
      if (this.__CE_hasRegistry) {
        var d = a.a.get(b);
        if (d) return new d.constructorFunction();
      }

      b = F.call(this, b);
      w(a, b);
      return b;
    });
    r(Document.prototype, "importNode", function (b, d) {
      b = ha.call(this, b, !!d);
      this.__CE_hasRegistry ? A(a, b) : v(a, b);
      return b;
    });
    r(Document.prototype, "createElementNS", function (b, d) {
      if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
        var c = a.a.get(d);
        if (c) return new c.constructorFunction();
      }

      b = G.call(this, b, d);
      w(a, b);
      return b;
    });
    Y(a, Document.prototype, {
      h: ia,
      append: ja
    });
  }

  ;

  function za() {
    function a(a, c) {
      Object.defineProperty(a, "textContent", {
        enumerable: c.enumerable,
        configurable: !0,
        get: c.get,
        set: function (a) {
          if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);else {
            var d = void 0;

            if (this.firstChild) {
              var e = this.childNodes,
                  k = e.length;

              if (0 < k && l(this)) {
                d = Array(k);

                for (var h = 0; h < k; h++) d[h] = e[h];
              }
            }

            c.set.call(this, a);
            if (d) for (a = 0; a < d.length; a++) z(b, d[a]);
          }
        }
      });
    }

    var b = X;
    r(Node.prototype, "insertBefore", function (a, c) {
      if (a instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a.childNodes);
        a = J.call(this, a, c);
        if (l(this)) for (c = 0; c < e.length; c++) x(b, e[c]);
        return a;
      }

      e = l(a);
      c = J.call(this, a, c);
      e && z(b, a);
      l(this) && x(b, a);
      return c;
    });
    r(Node.prototype, "appendChild", function (a) {
      if (a instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a.childNodes);
        a = I.call(this, a);
        if (l(this)) for (var e = 0; e < c.length; e++) x(b, c[e]);
        return a;
      }

      c = l(a);
      e = I.call(this, a);
      c && z(b, a);
      l(this) && x(b, a);
      return e;
    });
    r(Node.prototype, "cloneNode", function (a) {
      a = H.call(this, !!a);
      this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);
      return a;
    });
    r(Node.prototype, "removeChild", function (a) {
      var c = l(a),
          e = K.call(this, a);
      c && z(b, a);
      return e;
    });
    r(Node.prototype, "replaceChild", function (a, c) {
      if (a instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a.childNodes);
        a = L.call(this, a, c);
        if (l(this)) for (z(b, c), c = 0; c < e.length; c++) x(b, e[c]);
        return a;
      }

      e = l(a);
      var f = L.call(this, a, c),
          d = l(this);
      d && z(b, c);
      e && z(b, a);
      d && x(b, a);
      return f;
    });
    M && M.get ? a(Node.prototype, M) : ca(b, function (b) {
      a(b, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var a = [], b = 0; b < this.childNodes.length; b++) {
            var f = this.childNodes[b];
            f.nodeType !== Node.COMMENT_NODE && a.push(f.textContent);
          }

          return a.join("");
        },
        set: function (a) {
          for (; this.firstChild;) K.call(this, this.firstChild);

          null != a && "" !== a && I.call(this, document.createTextNode(a));
        }
      });
    });
  }

  ;

  function Aa(a) {
    function b(b) {
      return function (e) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];

        d = [];

        for (var k = [], h = 0; h < c.length; h++) {
          var m = c[h];
          m instanceof Element && l(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) d.push(m);else d.push(m);
        }

        b.apply(this, c);

        for (c = 0; c < k.length; c++) z(a, k[c]);

        if (l(this)) for (c = 0; c < d.length; c++) k = d[c], k instanceof Element && x(a, k);
      };
    }

    var d = Element.prototype;
    void 0 !== V && (d.before = b(V));
    void 0 !== V && (d.after = b(qa));
    void 0 !== ra && r(d, "replaceWith", function (b) {
      for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];

      c = [];

      for (var d = [], k = 0; k < e.length; k++) {
        var h = e[k];
        h instanceof Element && l(h) && d.push(h);
        if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) c.push(h);else c.push(h);
      }

      k = l(this);
      ra.apply(this, e);

      for (e = 0; e < d.length; e++) z(a, d[e]);

      if (k) for (z(a, this), e = 0; e < c.length; e++) d = c[e], d instanceof Element && x(a, d);
    });
    void 0 !== sa && r(d, "remove", function () {
      var b = l(this);
      sa.call(this);
      b && z(a, this);
    });
  }

  ;

  function Ba() {
    function a(a, b) {
      Object.defineProperty(a, "innerHTML", {
        enumerable: b.enumerable,
        configurable: !0,
        get: b.get,
        set: function (a) {
          var e = this,
              d = void 0;
          l(this) && (d = [], p(this, function (a) {
            a !== e && d.push(a);
          }));
          b.set.call(this, a);
          if (d) for (var f = 0; f < d.length; f++) {
            var t = d[f];
            1 === t.__CE_state && c.disconnectedCallback(t);
          }
          this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
          return a;
        }
      });
    }

    function b(a, b) {
      r(a, "insertAdjacentElement", function (a, e) {
        var d = l(e);
        a = b.call(this, a, e);
        d && z(c, e);
        l(a) && x(c, e);
        return a;
      });
    }

    function d(a, b) {
      function e(a, b) {
        for (var e = []; a !== b; a = a.nextSibling) e.push(a);

        for (b = 0; b < e.length; b++) A(c, e[b]);
      }

      r(a, "insertAdjacentHTML", function (a, c) {
        a = a.toLowerCase();

        if ("beforebegin" === a) {
          var d = this.previousSibling;
          b.call(this, a, c);
          e(d || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a) d = this.firstChild, b.call(this, a, c), e(this.firstChild, d);else if ("beforeend" === a) d = this.lastChild, b.call(this, a, c), e(d || this.firstChild, null);else if ("afterend" === a) d = this.nextSibling, b.call(this, a, c), e(this.nextSibling, d);else throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }

    var c = X;
    N && r(Element.prototype, "attachShadow", function (a) {
      a = N.call(this, a);
      var b = c;

      if (b.b && !a.__CE_patched) {
        a.__CE_patched = !0;

        for (var e = 0; e < b.c.length; e++) b.c[e](a);
      }

      return this.__CE_shadowRoot = a;
    });
    O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function (b) {
      a(b, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return H.call(this, !0).innerHTML;
        },
        set: function (a) {
          var b = "template" === this.localName,
              c = b ? this.content : this,
              e = G.call(document, this.namespaceURI, this.localName);

          for (e.innerHTML = a; 0 < c.childNodes.length;) K.call(c, c.childNodes[0]);

          for (a = b ? e.content : e; 0 < a.childNodes.length;) I.call(c, a.childNodes[0]);
        }
      });
    });
    r(Element.prototype, "setAttribute", function (a, b) {
      if (1 !== this.__CE_state) return Q.call(this, a, b);
      var e = P.call(this, a);
      Q.call(this, a, b);
      b = P.call(this, a);
      c.attributeChangedCallback(this, a, e, b, null);
    });
    r(Element.prototype, "setAttributeNS", function (a, b, d) {
      if (1 !== this.__CE_state) return T.call(this, a, b, d);
      var e = S.call(this, a, b);
      T.call(this, a, b, d);
      d = S.call(this, a, b);
      c.attributeChangedCallback(this, b, e, d, a);
    });
    r(Element.prototype, "removeAttribute", function (a) {
      if (1 !== this.__CE_state) return R.call(this, a);
      var b = P.call(this, a);
      R.call(this, a);
      null !== b && c.attributeChangedCallback(this, a, b, null, null);
    });
    r(Element.prototype, "removeAttributeNS", function (a, b) {
      if (1 !== this.__CE_state) return U.call(this, a, b);
      var d = S.call(this, a, b);
      U.call(this, a, b);
      var e = S.call(this, a, b);
      d !== e && c.attributeChangedCallback(this, b, d, e, a);
    });
    ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
    va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
    Y(c, Element.prototype, {
      h: oa,
      append: pa
    });
    Aa(c);
  }

  ;
  var Z = window.customElements;

  if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
    var X = new u();
    xa();
    ya();
    Y(X, DocumentFragment.prototype, {
      h: ka,
      append: la
    });
    za();
    Ba();
    document.__CE_hasRegistry = !0;
    var customElements = new E(X);
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: customElements
    });
  }

  ;
}).call(self); // Polyfill document.baseURI

"string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
  enumerable: !0,
  configurable: !0,
  get: function () {
    var a = document.querySelector("base");
    return a && a.href ? a.href : document.URL;
  }
}); // Polyfill CustomEvent

"function" !== typeof window.CustomEvent && (window.CustomEvent = function (c, a) {
  a = a || {
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  };
  var b = document.createEvent("CustomEvent");
  b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
  return b;
}, window.CustomEvent.prototype = window.Event.prototype); // Event.composedPath

(function (b, c, d) {
  b.composedPath || (b.composedPath = function () {
    if (this.path) return this.path;
    var a = this.target;

    for (this.path = []; null !== a.parentNode;) this.path.push(a), a = a.parentNode;

    this.path.push(c, d);
    return this.path;
  });
})(Event.prototype, document, window);
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/


(function (a) {
  "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a) {
    a = (this.document || this.ownerDocument).querySelectorAll(a);

    for (var b = 0; a[b] && a[b] !== this;) ++b;

    return !!a[b];
  });
  "function" !== typeof a.closest && (a.closest = function (a) {
    for (var b = this; b && 1 === b.nodeType;) {
      if (b.matches(a)) return b;
      b = b.parentNode;
    }

    return null;
  });
})(window.Element.prototype);
/*!
Element.getRootNode()
*/


(function (c) {
  function d(a) {
    a = b(a);
    return a && 11 === a.nodeType ? d(a.host) : a;
  }

  function b(a) {
    return a && a.parentNode ? b(a.parentNode) : a;
  }

  "function" !== typeof c.getRootNode && (c.getRootNode = function (a) {
    return a && a.composed ? d(this) : b(this);
  });
})(Element.prototype);
/*!
Element.isConnected()
*/


(function (a) {
  "isConnected" in a || Object.defineProperty(a, "isConnected", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      var a = this.getRootNode({
        composed: !0
      });
      return a && 9 === a.nodeType;
    }
  });
})(Element.prototype);
/*!
Element.remove()
*/


(function (b) {
  b.forEach(function (a) {
    a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: function () {
        null !== this.parentNode && this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/*!
Element.classList
*/


!function (e) {
  'classList' in e || Object.defineProperty(e, "classList", {
    get: function () {
      var e = this,
          t = (e.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);

      function n() {
        t.length > 0 ? e.setAttribute("class", t.join(" ")) : e.removeAttribute("class");
      }

      return "" === t[0] && t.splice(0, 1), t.toggle = function (e, i) {
        void 0 !== i ? i ? t.add(e) : t.remove(e) : -1 !== t.indexOf(e) ? t.splice(t.indexOf(e), 1) : t.push(e), n();
      }, t.add = function () {
        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) -1 === t.indexOf(e[i]) && t.push(e[i]);

        n();
      }, t.remove = function () {
        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) -1 !== t.indexOf(e[i]) && t.splice(t.indexOf(e[i]), 1);

        n();
      }, t.item = function (e) {
        return t[e];
      }, t.contains = function (e) {
        return -1 !== t.indexOf(e);
      }, t.replace = function (e, i) {
        -1 !== t.indexOf(e) && t.splice(t.indexOf(e), 1, i), n();
      }, t.value = e.getAttribute("class") || "", t;
    }
  });
}(Element.prototype);
/*!
DOMTokenList
*/

(function (b) {
  try {
    document.body.classList.add();
  } catch (e) {
    var c = b.add,
        d = b.remove;

    b.add = function () {
      for (var a = 0; a < arguments.length; a++) c.call(this, arguments[a]);
    };

    b.remove = function () {
      for (var a = 0; a < arguments.length; a++) d.call(this, arguments[a]);
    };
  }
})(DOMTokenList.prototype);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTixFQUFRO0lBQUMsSUFBSUosQ0FBQyxHQUFDZixDQUFDLENBQUN3QixHQUFSO0lBQUEsSUFBWVYsQ0FBQyxHQUFDZCxDQUFDLENBQUMwSixNQUFoQjs7SUFBdUIxSixDQUFDLENBQUN3QixHQUFGLEdBQU0sWUFBVTtNQUFDLEtBQUksSUFBSXpCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQzRLLFNBQVMsQ0FBQ3BJLE1BQXhCLEVBQStCeEMsQ0FBQyxFQUFoQyxFQUFtQ2dCLENBQUMsQ0FBQ2lELElBQUYsQ0FBTyxJQUFQLEVBQVkyRyxTQUFTLENBQUM1SyxDQUFELENBQXJCO0lBQTBCLENBQTlFOztJQUErRUMsQ0FBQyxDQUFDMEosTUFBRixHQUFTLFlBQVU7TUFBQyxLQUFJLElBQUkzSixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM0SyxTQUFTLENBQUNwSSxNQUF4QixFQUErQnhDLENBQUMsRUFBaEMsRUFBbUNlLENBQUMsQ0FBQ2tELElBQUYsQ0FBTyxJQUFQLEVBQVkyRyxTQUFTLENBQUM1SyxDQUFELENBQXJCO0lBQTBCLENBQWpGO0VBQWtGO0FBQUMsQ0FBalAsRUFBbVB3TyxZQUFZLENBQUN4SyxTQUFoUSIsInNvdXJjZXMiOlsiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vcG9seWZpbGxzL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiAgLypcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAgICBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICAgIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICAgIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gICAgc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAgKi9cbiAgJ3VzZSBzdHJpY3QnO3ZhciBhYT1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7ZnVuY3Rpb24gZyhhKXt2YXIgYj1hYS5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIGwoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9XG4gIGZ1bmN0aW9uIG4oYSxiKXtmb3IoO2ImJmIhPT1hJiYhYi5uZXh0U2libGluZzspYj1iLnBhcmVudE5vZGU7cmV0dXJuIGImJmIhPT1hP2IubmV4dFNpYmxpbmc6bnVsbH1cbiAgZnVuY3Rpb24gcChhLGIsZCl7ZD12b2lkIDA9PT1kP25ldyBTZXQ6ZDtmb3IodmFyIGM9YTtjOyl7aWYoYy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZT1jO2IoZSk7dmFyIGY9ZS5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1mJiZcImltcG9ydFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2M9ZS5pbXBvcnQ7aWYoYyBpbnN0YW5jZW9mIE5vZGUmJiFkLmhhcyhjKSlmb3IoZC5hZGQoYyksYz1jLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpcChjLGIsZCk7Yz1uKGEsZSk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1mKXtjPW4oYSxlKTtjb250aW51ZX1pZihlPWUuX19DRV9zaGFkb3dSb290KWZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylwKGUsYixkKX1jPWMuZmlyc3RDaGlsZD9jLmZpcnN0Q2hpbGQ6bihhLGMpfX1mdW5jdGlvbiByKGEsYixkKXthW2JdPWR9O2Z1bmN0aW9uIHUoKXt0aGlzLmE9bmV3IE1hcDt0aGlzLmc9bmV3IE1hcDt0aGlzLmM9W107dGhpcy5mPVtdO3RoaXMuYj0hMX1mdW5jdGlvbiBiYShhLGIsZCl7YS5hLnNldChiLGQpO2EuZy5zZXQoZC5jb25zdHJ1Y3RvckZ1bmN0aW9uLGQpfWZ1bmN0aW9uIGNhKGEsYil7YS5iPSEwO2EuYy5wdXNoKGIpfWZ1bmN0aW9uIGRhKGEsYil7YS5iPSEwO2EuZi5wdXNoKGIpfWZ1bmN0aW9uIHYoYSxiKXthLmImJnAoYixmdW5jdGlvbihiKXtyZXR1cm4gdyhhLGIpfSl9ZnVuY3Rpb24gdyhhLGIpe2lmKGEuYiYmIWIuX19DRV9wYXRjaGVkKXtiLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGQ9MDtkPGEuYy5sZW5ndGg7ZCsrKWEuY1tkXShiKTtmb3IoZD0wO2Q8YS5mLmxlbmd0aDtkKyspYS5mW2RdKGIpfX1cbiAgZnVuY3Rpb24geChhLGIpe3ZhciBkPVtdO3AoYixmdW5jdGlvbihiKXtyZXR1cm4gZC5wdXNoKGIpfSk7Zm9yKGI9MDtiPGQubGVuZ3RoO2IrKyl7dmFyIGM9ZFtiXTsxPT09Yy5fX0NFX3N0YXRlP2EuY29ubmVjdGVkQ2FsbGJhY2soYyk6eShhLGMpfX1mdW5jdGlvbiB6KGEsYil7dmFyIGQ9W107cChiLGZ1bmN0aW9uKGIpe3JldHVybiBkLnB1c2goYil9KTtmb3IoYj0wO2I8ZC5sZW5ndGg7YisrKXt2YXIgYz1kW2JdOzE9PT1jLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soYyl9fVxuICBmdW5jdGlvbiBBKGEsYixkKXtkPXZvaWQgMD09PWQ/e306ZDt2YXIgYz1kLnV8fG5ldyBTZXQsZT1kLml8fGZ1bmN0aW9uKGIpe3JldHVybiB5KGEsYil9LGY9W107cChiLGZ1bmN0aW9uKGIpe2lmKFwibGlua1wiPT09Yi5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1iLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGQ9Yi5pbXBvcnQ7ZCBpbnN0YW5jZW9mIE5vZGUmJihkLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxkLl9fQ0VfaGFzUmVnaXN0cnk9ITApO2QmJlwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZT9kLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDpiLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgZD1iLmltcG9ydDtpZighZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2QuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO3ZhciBmPW5ldyBTZXQoYyk7Zi5kZWxldGUoZCk7QShhLGQse3U6ZixpOmV9KX19KX1lbHNlIGYucHVzaChiKX0sYyk7aWYoYS5iKWZvcihiPVxuICAwO2I8Zi5sZW5ndGg7YisrKXcoYSxmW2JdKTtmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWUoZltiXSl9XG4gIGZ1bmN0aW9uIHkoYSxiKXtpZih2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe3ZhciBkPWIub3duZXJEb2N1bWVudDtpZihkLmRlZmF1bHRWaWV3fHxkLl9fQ0VfaXNJbXBvcnREb2N1bWVudCYmZC5fX0NFX2hhc1JlZ2lzdHJ5KWlmKGQ9YS5hLmdldChiLmxvY2FsTmFtZSkpe2QuY29uc3RydWN0aW9uU3RhY2sucHVzaChiKTt2YXIgYz1kLmNvbnN0cnVjdG9yRnVuY3Rpb247dHJ5e3RyeXtpZihuZXcgYyE9PWIpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTt9ZmluYWxseXtkLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaCh0KXt0aHJvdyBiLl9fQ0Vfc3RhdGU9Mix0O31iLl9fQ0Vfc3RhdGU9MTtiLl9fQ0VfZGVmaW5pdGlvbj1kO2lmKGQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihkPWQub2JzZXJ2ZWRBdHRyaWJ1dGVzLGM9MDtjPGQubGVuZ3RoO2MrKyl7dmFyIGU9XG4gIGRbY10sZj1iLmdldEF0dHJpYnV0ZShlKTtudWxsIT09ZiYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYixlLG51bGwsZixudWxsKX1sKGIpJiZhLmNvbm5lY3RlZENhbGxiYWNrKGIpfX19dS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5jb25uZWN0ZWRDYWxsYmFjayYmYi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTt1LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O1xuICB1LnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGQsYyxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsZCxjLGUpfTtmdW5jdGlvbiBCKGEpe3ZhciBiPWRvY3VtZW50O3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuYj12b2lkIDA7QSh0aGlzLmMsdGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5iPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSx0aGlzLmIub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEMoYSl7YS5iJiZhLmIuZGlzY29ubmVjdCgpfUIucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8Qyh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgZD1hW2JdLmFkZGVkTm9kZXMsYz0wO2M8ZC5sZW5ndGg7YysrKUEodGhpcy5jLGRbY10pfTtmdW5jdGlvbiBlYSgpe3ZhciBhPXRoaXM7dGhpcy5iPXRoaXMuYT12b2lkIDA7dGhpcy5jPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYj1iO2EuYSYmYihhLmEpfSl9ZnVuY3Rpb24gRChhKXtpZihhLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTthLmE9dm9pZCAwO2EuYiYmYS5iKHZvaWQgMCl9O2Z1bmN0aW9uIEUoYSl7dGhpcy5jPSExO3RoaXMuYT1hO3RoaXMuaj1uZXcgTWFwO3RoaXMuZj1mdW5jdGlvbihiKXtyZXR1cm4gYigpfTt0aGlzLmI9ITE7dGhpcy5nPVtdO3RoaXMubz1uZXcgQihhKX1cbiAgRS5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIpe3ZhciBkPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCFnKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmEuZ2V0KGEpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7aWYodGhpcy5jKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO3RoaXMuYz0hMDt0cnl7dmFyIGM9ZnVuY3Rpb24oYil7dmFyIGE9ZVtiXTtpZih2b2lkIDAhPT1hJiYhKGEgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgRXJyb3IoXCJUaGUgJ1wiK2IrXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG4gIHJldHVybiBhfSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1jKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIHQ9YyhcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBrPWMoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGg9YyhcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbT1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gocSl7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yRnVuY3Rpb246Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOnQsYWRvcHRlZENhbGxiYWNrOmssYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmgsb2JzZXJ2ZWRBdHRyaWJ1dGVzOm0sY29uc3RydWN0aW9uU3RhY2s6W119O2JhKHRoaXMuYSxcbiAgYSxiKTt0aGlzLmcucHVzaChiKTt0aGlzLmJ8fCh0aGlzLmI9ITAsdGhpcy5mKGZ1bmN0aW9uKCl7cmV0dXJuIGZhKGQpfSkpfTtFLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0EodGhpcy5hLGEpfTtcbiAgZnVuY3Rpb24gZmEoYSl7aWYoITEhPT1hLmIpe2EuYj0hMTtmb3IodmFyIGI9YS5nLGQ9W10sYz1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKyljLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7QShhLmEsZG9jdW1lbnQse2k6ZnVuY3Rpb24oYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZT1iLmxvY2FsTmFtZSxmPWMuZ2V0KGUpO2Y/Zi5wdXNoKGIpOmEuYS5hLmdldChlKSYmZC5wdXNoKGIpfX19KTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKXkoYS5hLGRbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9Yy5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgdD0wO3Q8Zi5sZW5ndGg7dCsrKXkoYS5hLGZbdF0pOyhlPWEuai5nZXQoZSkpJiZEKGUpfX19RS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5hLmEuZ2V0KGEpKXJldHVybiBhLmNvbnN0cnVjdG9yRnVuY3Rpb259O1xuICBFLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEpe2lmKCFnKGEpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIrYStcIicgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5cIikpO3ZhciBiPXRoaXMuai5nZXQoYSk7aWYoYilyZXR1cm4gYi5jO2I9bmV3IGVhO3RoaXMuai5zZXQoYSxiKTt0aGlzLmEuYS5nZXQoYSkmJiF0aGlzLmcuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5sb2NhbE5hbWU9PT1hfSkmJkQoYik7cmV0dXJuIGIuY307RS5wcm90b3R5cGUucz1mdW5jdGlvbihhKXtDKHRoaXMubyk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihkKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGQpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PUU7RS5wcm90b3R5cGUuZGVmaW5lPUUucHJvdG90eXBlLmw7RS5wcm90b3R5cGUudXBncmFkZT1FLnByb3RvdHlwZS5pO0UucHJvdG90eXBlLmdldD1FLnByb3RvdHlwZS5nZXQ7XG4gIEUucHJvdG90eXBlLndoZW5EZWZpbmVkPUUucHJvdG90eXBlLm07RS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1FLnByb3RvdHlwZS5zO3ZhciBGPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxHPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLGhhPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxpYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsamE9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsa2E9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsbGE9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxIPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsST13aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsSj13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLEs9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLEw9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxNPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuICBcInRleHRDb250ZW50XCIpLE49d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyxPPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLFA9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxRPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsUj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLFQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLG1hPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsbmE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTCxvYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxcbiAgcGE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxWPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUscWE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLHJhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxzYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLHRhPXdpbmRvdy5IVE1MRWxlbWVudCxXPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSx1YT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCx2YT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTDt2YXIgd2E9bmV3IGZ1bmN0aW9uKCl7fTtmdW5jdGlvbiB4YSgpe3ZhciBhPVg7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3ZhciBiPXRoaXMuY29uc3RydWN0b3IsYz1hLmcuZ2V0KGIpO2lmKCFjKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWMuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUYuY2FsbChkb2N1bWVudCxjLmxvY2FsTmFtZSksT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsYi5wcm90b3R5cGUpLGUuX19DRV9zdGF0ZT0xLGUuX19DRV9kZWZpbml0aW9uPWMsdyhhLGUpLGU7Yz1lLmxlbmd0aC0xO3ZhciBmPWVbY107aWYoZj09PXdhKXRocm93IEVycm9yKFwiVGhlIEhUTUxFbGVtZW50IGNvbnN0cnVjdG9yIHdhcyBlaXRoZXIgY2FsbGVkIHJlZW50cmFudGx5IGZvciB0aGlzIGNvbnN0cnVjdG9yIG9yIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cIik7XG4gIGVbY109d2E7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO3coYSxmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT10YS5wcm90b3R5cGU7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwiY29uc3RydWN0b3JcIix7d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6Yn0pO3JldHVybiBifSgpfTtmdW5jdGlvbiBZKGEsYixkKXtmdW5jdGlvbiBjKGIpe3JldHVybiBmdW5jdGlvbihkKXtmb3IodmFyIGU9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDsrK2MpZVtjXT1hcmd1bWVudHNbY107Yz1bXTtmb3IodmFyIGY9W10sbT0wO208ZS5sZW5ndGg7bSsrKXt2YXIgcT1lW21dO3EgaW5zdGFuY2VvZiBFbGVtZW50JiZsKHEpJiZmLnB1c2gocSk7aWYocSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKHE9cS5maXJzdENoaWxkO3E7cT1xLm5leHRTaWJsaW5nKWMucHVzaChxKTtlbHNlIGMucHVzaChxKX1iLmFwcGx5KHRoaXMsZSk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrKyl6KGEsZltlXSk7aWYobCh0aGlzKSlmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKWY9Y1tlXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGYpfX12b2lkIDAhPT1kLmgmJihiLnByZXBlbmQ9YyhkLmgpKTt2b2lkIDAhPT1kLmFwcGVuZCYmKGIuYXBwZW5kPWMoZC5hcHBlbmQpKX07ZnVuY3Rpb24geWEoKXt2YXIgYT1YO3IoRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudFwiLGZ1bmN0aW9uKGIpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSl7dmFyIGQ9YS5hLmdldChiKTtpZihkKXJldHVybiBuZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9ufWI9Ri5jYWxsKHRoaXMsYik7dyhhLGIpO3JldHVybiBifSk7cihEb2N1bWVudC5wcm90b3R5cGUsXCJpbXBvcnROb2RlXCIsZnVuY3Rpb24oYixkKXtiPWhhLmNhbGwodGhpcyxiLCEhZCk7dGhpcy5fX0NFX2hhc1JlZ2lzdHJ5P0EoYSxiKTp2KGEsYik7cmV0dXJuIGJ9KTtyKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsZCl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBjPWEuYS5nZXQoZCk7aWYoYylyZXR1cm4gbmV3IGMuY29uc3RydWN0b3JGdW5jdGlvbn1iPUcuY2FsbCh0aGlzLGIsXG4gIGQpO3coYSxiKTtyZXR1cm4gYn0pO1koYSxEb2N1bWVudC5wcm90b3R5cGUse2g6aWEsYXBwZW5kOmphfSl9O2Z1bmN0aW9uIHphKCl7ZnVuY3Rpb24gYShhLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpjLmdldCxzZXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWMuc2V0LmNhbGwodGhpcyxhKTtlbHNle3ZhciBkPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxrPWUubGVuZ3RoO2lmKDA8ayYmbCh0aGlzKSl7ZD1BcnJheShrKTtmb3IodmFyIGg9MDtoPGs7aCsrKWRbaF09ZVtoXX19Yy5zZXQuY2FsbCh0aGlzLGEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl6KGIsZFthXSl9fX0pfXZhciBiPVg7cihOb2RlLnByb3RvdHlwZSxcImluc2VydEJlZm9yZVwiLGZ1bmN0aW9uKGEsYyl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO1xuICBhPUouY2FsbCh0aGlzLGEsYyk7aWYobCh0aGlzKSlmb3IoYz0wO2M8ZS5sZW5ndGg7YysrKXgoYixlW2NdKTtyZXR1cm4gYX1lPWwoYSk7Yz1KLmNhbGwodGhpcyxhLGMpO2UmJnooYixhKTtsKHRoaXMpJiZ4KGIsYSk7cmV0dXJuIGN9KTtyKE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT1JLmNhbGwodGhpcyxhKTtpZihsKHRoaXMpKWZvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKXgoYixjW2VdKTtyZXR1cm4gYX1jPWwoYSk7ZT1JLmNhbGwodGhpcyxhKTtjJiZ6KGIsYSk7bCh0aGlzKSYmeChiLGEpO3JldHVybiBlfSk7cihOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGEpe2E9SC5jYWxsKHRoaXMsISFhKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9BKGIsYSk6dihiLFxuICBhKTtyZXR1cm4gYX0pO3IoTm9kZS5wcm90b3R5cGUsXCJyZW1vdmVDaGlsZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPWwoYSksZT1LLmNhbGwodGhpcyxhKTtjJiZ6KGIsYSk7cmV0dXJuIGV9KTtyKE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYSxjKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT1MLmNhbGwodGhpcyxhLGMpO2lmKGwodGhpcykpZm9yKHooYixjKSxjPTA7YzxlLmxlbmd0aDtjKyspeChiLGVbY10pO3JldHVybiBhfWU9bChhKTt2YXIgZj1MLmNhbGwodGhpcyxhLGMpLGQ9bCh0aGlzKTtkJiZ6KGIsYyk7ZSYmeihiLGEpO2QmJngoYixhKTtyZXR1cm4gZn0pO00mJk0uZ2V0P2EoTm9kZS5wcm90b3R5cGUsTSk6Y2EoYixmdW5jdGlvbihiKXthKGIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxcbiAgYj0wO2I8dGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtiKyspe3ZhciBmPXRoaXMuY2hpbGROb2Rlc1tiXTtmLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChmLnRleHRDb250ZW50KX1yZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KUsuY2FsbCh0aGlzLHRoaXMuZmlyc3RDaGlsZCk7bnVsbCE9YSYmXCJcIiE9PWEmJkkuY2FsbCh0aGlzLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKX19KX0pfTtmdW5jdGlvbiBBYShhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIGM9W10sZD0wO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkXT1hcmd1bWVudHNbZF07ZD1bXTtmb3IodmFyIGs9W10saD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgbT1jW2hdO20gaW5zdGFuY2VvZiBFbGVtZW50JiZsKG0pJiZrLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWQucHVzaChtKTtlbHNlIGQucHVzaChtKX1iLmFwcGx5KHRoaXMsYyk7Zm9yKGM9MDtjPGsubGVuZ3RoO2MrKyl6KGEsa1tjXSk7aWYobCh0aGlzKSlmb3IoYz0wO2M8ZC5sZW5ndGg7YysrKWs9ZFtjXSxrIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGspfX12YXIgZD1FbGVtZW50LnByb3RvdHlwZTt2b2lkIDAhPT1WJiYoZC5iZWZvcmU9YihWKSk7dm9pZCAwIT09ViYmKGQuYWZ0ZXI9YihxYSkpO3ZvaWQgMCE9PXJhJiZcbiAgcihkLFwicmVwbGFjZVdpdGhcIixmdW5jdGlvbihiKXtmb3IodmFyIGU9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDsrK2MpZVtjXT1hcmd1bWVudHNbY107Yz1bXTtmb3IodmFyIGQ9W10saz0wO2s8ZS5sZW5ndGg7aysrKXt2YXIgaD1lW2tdO2ggaW5zdGFuY2VvZiBFbGVtZW50JiZsKGgpJiZkLnB1c2goaCk7aWYoaCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGg9aC5maXJzdENoaWxkO2g7aD1oLm5leHRTaWJsaW5nKWMucHVzaChoKTtlbHNlIGMucHVzaChoKX1rPWwodGhpcyk7cmEuYXBwbHkodGhpcyxlKTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKXooYSxkW2VdKTtpZihrKWZvcih6KGEsdGhpcyksZT0wO2U8Yy5sZW5ndGg7ZSsrKWQ9Y1tlXSxkIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGQpfSk7dm9pZCAwIT09c2EmJnIoZCxcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGI9bCh0aGlzKTtzYS5jYWxsKHRoaXMpO2ImJnooYSx0aGlzKX0pfTtmdW5jdGlvbiBCYSgpe2Z1bmN0aW9uIGEoYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImlubmVySFRNTFwiLHtlbnVtZXJhYmxlOmIuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmIuZ2V0LHNldDpmdW5jdGlvbihhKXt2YXIgZT10aGlzLGQ9dm9pZCAwO2wodGhpcykmJihkPVtdLHAodGhpcyxmdW5jdGlvbihhKXthIT09ZSYmZC5wdXNoKGEpfSkpO2Iuc2V0LmNhbGwodGhpcyxhKTtpZihkKWZvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7ZisrKXt2YXIgdD1kW2ZdOzE9PT10Ll9fQ0Vfc3RhdGUmJmMuZGlzY29ubmVjdGVkQ2FsbGJhY2sodCl9dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/QShjLHRoaXMpOnYoYyx0aGlzKTtyZXR1cm4gYX19KX1mdW5jdGlvbiBiKGEsYil7cihhLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYSxlKXt2YXIgZD1sKGUpO2E9Yi5jYWxsKHRoaXMsYSxlKTtkJiZ6KGMsZSk7bChhKSYmeChjLGUpO3JldHVybiBhfSl9XG4gIGZ1bmN0aW9uIGQoYSxiKXtmdW5jdGlvbiBlKGEsYil7Zm9yKHZhciBlPVtdO2EhPT1iO2E9YS5uZXh0U2libGluZyllLnB1c2goYSk7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylBKGMsZVtiXSl9cihhLFwiaW5zZXJ0QWRqYWNlbnRIVE1MXCIsZnVuY3Rpb24oYSxjKXthPWEudG9Mb3dlckNhc2UoKTtpZihcImJlZm9yZWJlZ2luXCI9PT1hKXt2YXIgZD10aGlzLnByZXZpb3VzU2libGluZztiLmNhbGwodGhpcyxhLGMpO2UoZHx8dGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsdGhpcyl9ZWxzZSBpZihcImFmdGVyYmVnaW5cIj09PWEpZD10aGlzLmZpcnN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxjKSxlKHRoaXMuZmlyc3RDaGlsZCxkKTtlbHNlIGlmKFwiYmVmb3JlZW5kXCI9PT1hKWQ9dGhpcy5sYXN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxjKSxlKGR8fHRoaXMuZmlyc3RDaGlsZCxudWxsKTtlbHNlIGlmKFwiYWZ0ZXJlbmRcIj09PWEpZD10aGlzLm5leHRTaWJsaW5nLGIuY2FsbCh0aGlzLGEsYyksZSh0aGlzLm5leHRTaWJsaW5nLFxuICBkKTtlbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSB2YWx1ZSBwcm92aWRlZCAoXCIrU3RyaW5nKGEpK1wiKSBpcyBub3Qgb25lIG9mICdiZWZvcmViZWdpbicsICdhZnRlcmJlZ2luJywgJ2JlZm9yZWVuZCcsIG9yICdhZnRlcmVuZCcuXCIpO30pfXZhciBjPVg7TiYmcihFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe2E9Ti5jYWxsKHRoaXMsYSk7dmFyIGI9YztpZihiLmImJiFhLl9fQ0VfcGF0Y2hlZCl7YS5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBlPTA7ZTxiLmMubGVuZ3RoO2UrKyliLmNbZV0oYSl9cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWF9KTtPJiZPLmdldD9hKEVsZW1lbnQucHJvdG90eXBlLE8pOlcmJlcuZ2V0P2EoSFRNTEVsZW1lbnQucHJvdG90eXBlLFcpOmRhKGMsZnVuY3Rpb24oYil7YShiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSC5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sXG4gIHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZSxjPWI/dGhpcy5jb250ZW50OnRoaXMsZT1HLmNhbGwoZG9jdW1lbnQsdGhpcy5uYW1lc3BhY2VVUkksdGhpcy5sb2NhbE5hbWUpO2ZvcihlLmlubmVySFRNTD1hOzA8Yy5jaGlsZE5vZGVzLmxlbmd0aDspSy5jYWxsKGMsYy5jaGlsZE5vZGVzWzBdKTtmb3IoYT1iP2UuY29udGVudDplOzA8YS5jaGlsZE5vZGVzLmxlbmd0aDspSS5jYWxsKGMsYS5jaGlsZE5vZGVzWzBdKX19KX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVcIixmdW5jdGlvbihhLGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFEuY2FsbCh0aGlzLGEsYik7dmFyIGU9UC5jYWxsKHRoaXMsYSk7US5jYWxsKHRoaXMsYSxiKTtiPVAuY2FsbCh0aGlzLGEpO2MuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYSxlLGIsbnVsbCl9KTtyKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihhLFxuICBiLGQpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFQuY2FsbCh0aGlzLGEsYixkKTt2YXIgZT1TLmNhbGwodGhpcyxhLGIpO1QuY2FsbCh0aGlzLGEsYixkKTtkPVMuY2FsbCh0aGlzLGEsYik7Yy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGUsZCxhKX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVcIixmdW5jdGlvbihhKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBSLmNhbGwodGhpcyxhKTt2YXIgYj1QLmNhbGwodGhpcyxhKTtSLmNhbGwodGhpcyxhKTtudWxsIT09YiYmYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxhLGIsbnVsbCxudWxsKX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGEsYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gVS5jYWxsKHRoaXMsYSxiKTt2YXIgZD1TLmNhbGwodGhpcyxhLGIpO1UuY2FsbCh0aGlzLGEsYik7dmFyIGU9Uy5jYWxsKHRoaXMsXG4gIGEsYik7ZCE9PWUmJmMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixkLGUsYSl9KTt1YT9iKEhUTUxFbGVtZW50LnByb3RvdHlwZSx1YSk6bWE/YihFbGVtZW50LnByb3RvdHlwZSxtYSk6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC5cIik7dmE/ZChIVE1MRWxlbWVudC5wcm90b3R5cGUsdmEpOm5hP2QoRWxlbWVudC5wcm90b3R5cGUsbmEpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRIVE1MYCB3YXMgbm90IHBhdGNoZWQuXCIpO1koYyxFbGVtZW50LnByb3RvdHlwZSx7aDpvYSxhcHBlbmQ6cGF9KTtBYShjKX07dmFyIFo9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKCFafHxaLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFouZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBaLmdldCl7dmFyIFg9bmV3IHU7eGEoKTt5YSgpO1koWCxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7aDprYSxhcHBlbmQ6bGF9KTt6YSgpO0JhKCk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgY3VzdG9tRWxlbWVudHM9bmV3IEUoWCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmN1c3RvbUVsZW1lbnRzfSl9O1xufSkuY2FsbChzZWxmKTtcblxuLy8gUG9seWZpbGwgZG9jdW1lbnQuYmFzZVVSSVxuXCJzdHJpbmdcIiE9PXR5cGVvZiBkb2N1bWVudC5iYXNlVVJJJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9jdW1lbnQucHJvdG90eXBlLFwiYmFzZVVSSVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtyZXR1cm4gYSYmYS5ocmVmP2EuaHJlZjpkb2N1bWVudC5VUkx9fSk7XG5cbi8vIFBvbHlmaWxsIEN1c3RvbUV2ZW50XG5cImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYod2luZG93LkN1c3RvbUV2ZW50PWZ1bmN0aW9uKGMsYSl7YT1hfHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7Yi5pbml0Q3VzdG9tRXZlbnQoYyxhLmJ1YmJsZXMsYS5jYW5jZWxhYmxlLGEuZGV0YWlsKTtyZXR1cm4gYn0sd2luZG93LkN1c3RvbUV2ZW50LnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlKTtcblxuLy8gRXZlbnQuY29tcG9zZWRQYXRoXG4oZnVuY3Rpb24oYixjLGQpe2IuY29tcG9zZWRQYXRofHwoYi5jb21wb3NlZFBhdGg9ZnVuY3Rpb24oKXtpZih0aGlzLnBhdGgpcmV0dXJuIHRoaXMucGF0aDt2YXIgYT10aGlzLnRhcmdldDtmb3IodGhpcy5wYXRoPVtdO251bGwhPT1hLnBhcmVudE5vZGU7KXRoaXMucGF0aC5wdXNoKGEpLGE9YS5wYXJlbnROb2RlO3RoaXMucGF0aC5wdXNoKGMsZCk7cmV0dXJuIHRoaXMucGF0aH0pfSkoRXZlbnQucHJvdG90eXBlLGRvY3VtZW50LHdpbmRvdyk7XG5cbi8qIVxuRWxlbWVudC5jbG9zZXN0IGFuZCBFbGVtZW50Lm1hdGNoZXNcbmh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcbkNyZWF0aXZlIENvbW1vbnMgWmVybyB2MS4wIFVuaXZlcnNhbFxuKi9cbihmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYS5tYXRjaGVzJiYoYS5tYXRjaGVzPWEubXNNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZnVuY3Rpb24oYSl7YT0odGhpcy5kb2N1bWVudHx8dGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGEpO2Zvcih2YXIgYj0wO2FbYl0mJmFbYl0hPT10aGlzOykrK2I7cmV0dXJuISFhW2JdfSk7XCJmdW5jdGlvblwiIT09dHlwZW9mIGEuY2xvc2VzdCYmKGEuY2xvc2VzdD1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcztiJiYxPT09Yi5ub2RlVHlwZTspe2lmKGIubWF0Y2hlcyhhKSlyZXR1cm4gYjtiPWIucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH0pfSkod2luZG93LkVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LmdldFJvb3ROb2RlKClcbiovXG4oZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXthPWIoYSk7cmV0dXJuIGEmJjExPT09YS5ub2RlVHlwZT9kKGEuaG9zdCk6YX1mdW5jdGlvbiBiKGEpe3JldHVybiBhJiZhLnBhcmVudE5vZGU/YihhLnBhcmVudE5vZGUpOmF9XCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0Um9vdE5vZGUmJihjLmdldFJvb3ROb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLmNvbXBvc2VkP2QodGhpcyk6Yih0aGlzKX0pfSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQuaXNDb25uZWN0ZWQoKVxuKi9cbihmdW5jdGlvbihhKXtcImlzQ29ubmVjdGVkXCJpbiBhfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImlzQ29ubmVjdGVkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0Um9vdE5vZGUoe2NvbXBvc2VkOiEwfSk7cmV0dXJuIGEmJjk9PT1hLm5vZGVUeXBlfX0pfSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQucmVtb3ZlKClcbiovXG4oZnVuY3Rpb24oYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuaGFzT3duUHJvcGVydHkoXCJyZW1vdmVcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwicmVtb3ZlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfX0pfSl9KShbRWxlbWVudC5wcm90b3R5cGUsQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pO1xuXG4vKiFcbkVsZW1lbnQuY2xhc3NMaXN0XG4qL1xuIWZ1bmN0aW9uKGUpeydjbGFzc0xpc3QnaW4gZXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjbGFzc0xpc3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PShlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMkL2csXCJcIikuc3BsaXQoL1xccysvZyk7ZnVuY3Rpb24gbigpe3QubGVuZ3RoPjA/ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHQuam9pbihcIiBcIikpOmUucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9cmV0dXJuXCJcIj09PXRbMF0mJnQuc3BsaWNlKDAsMSksdC50b2dnbGU9ZnVuY3Rpb24oZSxpKXt2b2lkIDAhPT1pP2k/dC5hZGQoZSk6dC5yZW1vdmUoZSk6LTEhPT10LmluZGV4T2YoZSk/dC5zcGxpY2UodC5pbmRleE9mKGUpLDEpOnQucHVzaChlKSxuKCl9LHQuYWRkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxpPTAscz1lLmxlbmd0aDtpPHM7aSsrKS0xPT09dC5pbmRleE9mKGVbaV0pJiZ0LnB1c2goZVtpXSk7bigpfSx0LnJlbW92ZT1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT0wLHM9ZS5sZW5ndGg7aTxzO2krKyktMSE9PXQuaW5kZXhPZihlW2ldKSYmdC5zcGxpY2UodC5pbmRleE9mKGVbaV0pLDEpO24oKX0sdC5pdGVtPWZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfSx0LmNvbnRhaW5zPWZ1bmN0aW9uKGUpe3JldHVybi0xIT09dC5pbmRleE9mKGUpfSx0LnJlcGxhY2U9ZnVuY3Rpb24oZSxpKXstMSE9PXQuaW5kZXhPZihlKSYmdC5zcGxpY2UodC5pbmRleE9mKGUpLDEsaSksbigpfSx0LnZhbHVlPWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsdH19KX0oRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkRPTVRva2VuTGlzdFxuKi9cbihmdW5jdGlvbihiKXt0cnl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCl9Y2F0Y2goZSl7dmFyIGM9Yi5hZGQsZD1iLnJlbW92ZTtiLmFkZD1mdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspYy5jYWxsKHRoaXMsYXJndW1lbnRzW2FdKX07Yi5yZW1vdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKWQuY2FsbCh0aGlzLGFyZ3VtZW50c1thXSl9fX0pKERPTVRva2VuTGlzdC5wcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImFhIiwiU2V0Iiwic3BsaXQiLCJnIiwiYSIsImIiLCJoYXMiLCJ0ZXN0IiwibCIsImlzQ29ubmVjdGVkIiwiX19DRV9pc0ltcG9ydERvY3VtZW50IiwiRG9jdW1lbnQiLCJwYXJlbnROb2RlIiwid2luZG93IiwiU2hhZG93Um9vdCIsImhvc3QiLCJuIiwibmV4dFNpYmxpbmciLCJwIiwiZCIsImMiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJlIiwiZiIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsImltcG9ydCIsImFkZCIsImZpcnN0Q2hpbGQiLCJfX0NFX3NoYWRvd1Jvb3QiLCJyIiwidSIsIk1hcCIsImJhIiwic2V0IiwiY29uc3RydWN0b3JGdW5jdGlvbiIsImNhIiwicHVzaCIsImRhIiwidiIsInciLCJfX0NFX3BhdGNoZWQiLCJsZW5ndGgiLCJ4IiwiX19DRV9zdGF0ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwieSIsInoiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsIkEiLCJpIiwiX19DRV9oYXNSZWdpc3RyeSIsInJlYWR5U3RhdGUiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsZXRlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZ2V0IiwiY29uc3RydWN0aW9uU3RhY2siLCJFcnJvciIsInBvcCIsInQiLCJfX0NFX2RlZmluaXRpb24iLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJwcm90b3R5cGUiLCJjYWxsIiwiaW5kZXhPZiIsIkIiLCJkb2N1bWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJDIiwiZGlzY29ubmVjdCIsImFkZGVkTm9kZXMiLCJlYSIsIlByb21pc2UiLCJEIiwiRSIsImoiLCJvIiwiRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJTeW50YXhFcnJvciIsIk9iamVjdCIsImsiLCJoIiwibSIsInEiLCJhZG9wdGVkQ2FsbGJhY2siLCJmYSIsInNoaWZ0IiwicmVqZWN0Iiwic29tZSIsInMiLCJDdXN0b21FbGVtZW50UmVnaXN0cnkiLCJkZWZpbmUiLCJ1cGdyYWRlIiwid2hlbkRlZmluZWQiLCJwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrIiwiRiIsImNyZWF0ZUVsZW1lbnQiLCJHIiwiY3JlYXRlRWxlbWVudE5TIiwiaGEiLCJpbXBvcnROb2RlIiwiaWEiLCJwcmVwZW5kIiwiamEiLCJhcHBlbmQiLCJrYSIsIkRvY3VtZW50RnJhZ21lbnQiLCJsYSIsIkgiLCJjbG9uZU5vZGUiLCJJIiwiYXBwZW5kQ2hpbGQiLCJKIiwiaW5zZXJ0QmVmb3JlIiwiSyIsInJlbW92ZUNoaWxkIiwiTCIsInJlcGxhY2VDaGlsZCIsIk0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJOIiwiRWxlbWVudCIsImF0dGFjaFNoYWRvdyIsIk8iLCJQIiwiUSIsInNldEF0dHJpYnV0ZSIsIlIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTIiwiZ2V0QXR0cmlidXRlTlMiLCJUIiwic2V0QXR0cmlidXRlTlMiLCJVIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJtYSIsImluc2VydEFkamFjZW50RWxlbWVudCIsIm5hIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib2EiLCJwYSIsIlYiLCJiZWZvcmUiLCJxYSIsImFmdGVyIiwicmEiLCJyZXBsYWNlV2l0aCIsInNhIiwicmVtb3ZlIiwidGEiLCJIVE1MRWxlbWVudCIsIlciLCJ1YSIsInZhIiwid2EiLCJ4YSIsIlgiLCJjb25zdHJ1Y3RvciIsInNldFByb3RvdHlwZU9mIiwiZGVmaW5lUHJvcGVydHkiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIlkiLCJhcmd1bWVudHMiLCJhcHBseSIsInlhIiwiemEiLCJURVhUX05PREUiLCJjaGlsZE5vZGVzIiwiQXJyYXkiLCJzbGljZSIsIkNPTU1FTlRfTk9ERSIsInRleHRDb250ZW50Iiwiam9pbiIsImNyZWF0ZVRleHROb2RlIiwiQWEiLCJCYSIsInRvTG93ZXJDYXNlIiwicHJldmlvdXNTaWJsaW5nIiwibGFzdENoaWxkIiwiU3RyaW5nIiwiaW5uZXJIVE1MIiwiY29udGVudCIsIm5hbWVzcGFjZVVSSSIsImNvbnNvbGUiLCJ3YXJuIiwiWiIsImN1c3RvbUVsZW1lbnRzIiwiZm9yY2VQb2x5ZmlsbCIsInNlbGYiLCJiYXNlVVJJIiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJVUkwiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJFdmVudCIsImNvbXBvc2VkUGF0aCIsInBhdGgiLCJ0YXJnZXQiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImdldFJvb3ROb2RlIiwiY29tcG9zZWQiLCJmb3JFYWNoIiwiaGFzT3duUHJvcGVydHkiLCJDaGFyYWN0ZXJEYXRhIiwiRG9jdW1lbnRUeXBlIiwicmVwbGFjZSIsInNwbGljZSIsInRvZ2dsZSIsIml0ZW0iLCJjb250YWlucyIsImJvZHkiLCJjbGFzc0xpc3QiLCJET01Ub2tlbkxpc3QiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==