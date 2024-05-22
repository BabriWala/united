window.Userback = window.Userback || {};
Userback.access_token =
  "9670|60837|Gw5qPv96AfBgPO1y8PxUO0QkGEDhs01IdajajYQcjg3QabbjNp";
(function (d) {
  var s = d.createElement("script");
  s.async = !0;
  s.src = "https://static.userback.io/widget/v1.js";
  (d.head || d.body).appendChild(s);
})(document);
window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://www.united.com.bd/wp-includes/js/wp-emoji-release.min.js?ver=7559c08869f357cc192eb3f196fe7955",
  },
};
/*! This file is auto-generated */
!(function (i, n) {
  var o, s, e;
  function c(e) {
    try {
      var t = {
        supportTests: e,
        timestamp: new Date().valueOf(),
      };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }
  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === r[t];
    });
  }
  function u(e, t, n) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\uddfa\ud83c\uddf3",
              "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b");
    }
    return !1;
  }
  function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : i.createElement("canvas"),
      a = r.getContext("2d", {
        willReadFrequently: !0,
      }),
      o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        o[e] = t(a, e, n);
      }),
      o
    );
  }
  function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = {
      everything: !0,
      everythingExceptFlag: !0,
    }),
    (e = new Promise(function (e) {
      i.addEventListener("DOMContentLoaded", e, {
        once: !0,
      });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(",") +
                "));",
              r = new Blob([e], {
                type: "text/javascript",
              }),
              a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
              });
            return void (a.onmessage = function (e) {
              c((n = e.data)), a.terminate(), t(n);
            });
          } catch (e) {}
        c((n = f(s, u, p)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+o[a] < +n[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    (s.migrateDisablePatches = function () {
      for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
    }),
      (s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
      }),
      (s.migrateIsPatchEnabled = function (e) {
        return !t[e];
      }),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0") && !e("5.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var o = {};
    function u(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + " [" + e + "]"),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n, o), r;
        },
        set: function (e) {
          u(n, o), (r = e);
        },
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && u(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function c(e, t, r, n, o) {
      if (!o) throw new Error("No warning message provided");
      return a(e, t, r, n, o), 0;
    }
    function i(e, t, r, n) {
      return a(e, t, r, n), 0;
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("quirks", "jQuery is not compatible with Quirks Mode");
    var d,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in (i(
      s.fn,
      "init",
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled("selector-empty-id") &&
            "string" == typeof e &&
            "#" === e &&
            (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      "selector-empty-id"
    ),
    (s.fn.init.prototype = s.fn),
    i(
      s,
      "find",
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                u(
                  "selector-hash",
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              u(
                "selector-hash",
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      "selector-hash"
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "size",
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      c(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "parseJSON",
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      c(
        s,
        "holdReady",
        s.holdReady,
        "holdReady",
        "jQuery.holdReady is deprecated"
      ),
      c(
        s,
        "unique",
        s.uniqueSort,
        "unique",
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      r(
        s.expr,
        "filters",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      r(
        s.expr,
        ":",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        c(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(v, "$1");
          },
          "trim",
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (c(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "nodeName",
          "jQuery.nodeName is deprecated"
        ),
        c(
          s,
          "isArray",
          Array.isArray,
          "isArray",
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (c(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "isNumeric",
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        c(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "type",
          "jQuery.type is deprecated"
        ),
        c(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "isFunction",
          "jQuery.isFunction() is deprecated"
        ),
        c(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "isWindow",
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        i(
          s,
          "ajax",
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (c(
                  e,
                  "success",
                  e.done,
                  "jqXHR-methods",
                  "jQXHR.success is deprecated and removed"
                ),
                c(
                  e,
                  "error",
                  e.fail,
                  "jqXHR-methods",
                  "jQXHR.error is deprecated and removed"
                ),
                c(
                  e,
                  "complete",
                  e.always,
                  "jqXHR-methods",
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          },
          "jqXHR-methods"
        ),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  p.test(e.data))) &&
              u(
                "jsonp-promotion",
                "JSON-to-JSONP auto-promotion is deprecated"
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function x(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    i(
      s.fn,
      "removeAttr",
      function (e) {
        var r = this,
          n = !1;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              r.each(function () {
                if (!1 !== s(this).prop(t)) return !(n = !0);
              }),
              n &&
                (u(
                  "removeAttr-bool",
                  "jQuery.fn.removeAttr no longer sets boolean properties: " + t
                ),
                r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      "removeAttr-bool"
    ),
      i(
        s.fn,
        "toggleClass",
        function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? b.apply(this, arguments)
            : (u(
                "toggleClass-bool",
                "jQuery.fn.toggleClass( boolean ) is deprecated"
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        },
        "toggleClass-bool"
      );
    var Q,
      A,
      R = !1,
      C = /^[a-z]/,
      N =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (R = !0), (e = r.apply(this, arguments)), (R = !1), e;
          });
      }),
      i(
        s,
        "swap",
        function (e, t, r, n) {
          var o,
            a,
            i = {};
          for (a in (R ||
            u("swap", "jQuery.swap() is undocumented and deprecated"),
          t))
            (i[a] = e.style[a]), (e.style[a] = t[a]);
          for (a in ((o = r.apply(e, n || [])), t)) e.style[a] = i[a];
          return o;
        },
        "swap"
      ),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("cssProps", "jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      e("4.0.0")
        ? ((A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          }),
          "undefined" != typeof Proxy
            ? (s.cssNumber = new Proxy(A, {
                get: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.get.apply(this, arguments)
                  );
                },
                set: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.set.apply(this, arguments)
                  );
                },
              }))
            : (s.cssNumber = A))
        : (A = s.cssNumber),
      (Q = s.fn.css),
      i(
        s.fn,
        "css",
        function (e, t) {
          var r,
            n,
            o = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((r = x(e)),
                (n = r),
                (C.test(n) && N.test(n[0].toUpperCase() + n.slice(1))) ||
                  A[r] ||
                  u(
                    "css-number",
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              Q.apply(this, arguments));
        },
        "css-number"
      );
    var S,
      P,
      k,
      H,
      E = s.data;
    i(
      s,
      "data",
      function (e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
          for (a in ((n = s.hasData(e) && E.call(this, e)), (o = {}), t))
            a !== x(a)
              ? (u(
                  "data-camelCase",
                  "jQuery.data() always sets/gets camelCased names: " + a
                ),
                (n[a] = t[a]))
              : (o[a] = t[a]);
          return E.call(this, e, o), t;
        }
        return t &&
          "string" == typeof t &&
          t !== x(t) &&
          (n = s.hasData(e) && E.call(this, e)) &&
          t in n
          ? (u(
              "data-camelCase",
              "jQuery.data() always sets/gets camelCased names: " + t
            ),
            2 < arguments.length && (n[t] = r),
            n[t])
          : E.apply(this, arguments);
      },
      "data-camelCase"
    ),
      s.fx &&
        ((k = s.Tween.prototype.run),
        (H = function (e) {
          return e;
        }),
        i(
          s.Tween.prototype,
          "run",
          function () {
            1 < s.easing[this.easing].length &&
              (u(
                "easing-one-arg",
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = H)),
              k.apply(this, arguments);
          },
          "easing-one-arg"
        ),
        (S = s.fx.interval),
        (P = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                n.document.hidden || u("fx-interval", P),
                s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
              );
            },
            set: function (e) {
              u("fx-interval", P), (S = e);
            },
          }));
    var M = s.fn.load,
      q = s.event.add,
      O = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      r(
        s.event.props,
        "concat",
        s.event.props.concat,
        "event-old-patch",
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      i(
        s.event,
        "fix",
        function (e) {
          var t,
            r = e.type,
            n = this.fixHooks[r],
            o = s.event.props;
          if (o.length) {
            u(
              "event-old-patch",
              "jQuery.event.props are deprecated and removed: " + o.join()
            );
            while (o.length) s.event.addProp(o.pop());
          }
          if (
            n &&
            !n._migrated_ &&
            ((n._migrated_ = !0),
            u(
              "event-old-patch",
              "jQuery.event.fixHooks are deprecated and removed: " + r
            ),
            (o = n.props) && o.length)
          )
            while (o.length) s.event.addProp(o.pop());
          return (t = O.call(this, e)), n && n.filter ? n.filter(t, e) : t;
        },
        "event-old-patch"
      ),
      i(
        s.event,
        "add",
        function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              u(
                "load-after-event",
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            q.apply(this, arguments)
          );
        },
        "load-after-event"
      ),
      s.each(["load", "unload", "error"], function (e, t) {
        i(
          s.fn,
          t,
          function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? M.apply(this, e)
              : (u(
                  "shorthand-removed-v3",
                  "jQuery.fn." + t + "() is deprecated"
                ),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          },
          "shorthand-removed-v3"
        );
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          c(
            s.fn,
            r,
            function (e, t) {
              return 0 < arguments.length
                ? this.on(r, null, e, t)
                : this.trigger(r);
            },
            "shorthand-deprecated-v3",
            "jQuery.fn." + r + "() event shorthand is deprecated"
          );
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document &&
            u("ready-event", "'ready' event is deprecated");
        },
      }),
      c(
        s.fn,
        "bind",
        function (e, t, r) {
          return this.on(e, null, t, r);
        },
        "pre-on-methods",
        "jQuery.fn.bind() is deprecated"
      ),
      c(
        s.fn,
        "unbind",
        function (e, t) {
          return this.off(e, null, t);
        },
        "pre-on-methods",
        "jQuery.fn.unbind() is deprecated"
      ),
      c(
        s.fn,
        "delegate",
        function (e, t, r, n) {
          return this.on(t, e, r, n);
        },
        "pre-on-methods",
        "jQuery.fn.delegate() is deprecated"
      ),
      c(
        s.fn,
        "undelegate",
        function (e, t, r) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", r);
        },
        "pre-on-methods",
        "jQuery.fn.undelegate() is deprecated"
      ),
      c(
        s.fn,
        "hover",
        function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
        "pre-on-methods",
        "jQuery.fn.hover() is deprecated"
      );
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var F =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.migrateEnablePatches("self-closed-tags");
    }),
      i(
        s,
        "htmlPrefilter",
        function (e) {
          var t, r;
          return (
            (r = (t = e).replace(F, "<$1></$2>")) !== t &&
              T(t) !== T(r) &&
              u(
                "self-closed-tags",
                "HTML tags must be properly nested and closed: " + t
              ),
            e.replace(F, "<$1></$2>")
          );
        },
        "self-closed-tags"
      ),
      s.migrateDisablePatches("self-closed-tags");
    var D,
      W,
      _,
      I = s.fn.offset;
    return (
      i(
        s.fn,
        "offset",
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? I.apply(this, arguments)
            : (u(
                "offset-valid-elem",
                "jQuery.fn.offset() requires a valid DOM element"
              ),
              arguments.length ? this : void 0);
        },
        "offset-valid-elem"
      ),
      s.ajax &&
        ((D = s.param),
        i(
          s,
          "param",
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (u(
                  "param-ajax-traditional",
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              D.call(this, e, t)
            );
          },
          "param-ajax-traditional"
        )),
      c(
        s.fn,
        "andSelf",
        s.fn.addBack,
        "andSelf",
        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
      ),
      s.Deferred &&
        ((W = s.Deferred),
        (_ = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        i(
          s,
          "Deferred",
          function (e) {
            var a = W(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(_, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              e && e.call(a, a),
              a
            );
          },
          "deferred-pipe"
        ),
        (s.Deferred.exceptionHook = W.exceptionHook)),
      s
    );
  });
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
(function ($, window, document, undefined) {
  (function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  })();
  function Parallax(element, options) {
    var self = this;
    if (typeof options == "object") {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }
    this.$element = $(element);
    if (!this.imageSrc && this.$element.is("img")) {
      this.imageSrc = this.$element.attr("src");
    }
    var positions = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (positions.length < 1) {
      positions.push("center");
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }
    if (
      positions[0] == "top" ||
      positions[0] == "bottom" ||
      positions[1] == "left" ||
      positions[1] == "right"
    ) {
      positions = [positions[1], positions[0]];
    }
    if (this.positionX !== undefined)
      positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined)
      positions[1] = this.positionY.toLowerCase();
    self.positionX = positions[0];
    self.positionY = positions[1];
    if (this.positionX != "left" && this.positionX != "right") {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = "center";
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }
    if (this.positionY != "top" && this.positionY != "bottom") {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = "center";
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }
    this.position =
      this.positionX +
      (isNaN(this.positionX) ? "" : "px") +
      " " +
      this.positionY +
      (isNaN(this.positionY) ? "" : "px");
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is("img")) {
        this.$element.css({
          backgroundImage: "url(" + this.imageSrc + ")",
          backgroundSize: "cover",
          backgroundPosition: this.position,
        });
      }
      return this;
    }
    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is("img")) {
        this.$element.css({
          backgroundImage: "url(" + this.imageSrc + ")",
          backgroundSize: "cover",
          backgroundPosition: this.position,
        });
      }
      return this;
    }
    this.$mirror = $("<div />").prependTo(this.mirrorContainer);
    var slider = this.$element.find(">.parallax-slider");
    var sliderExisted = !1;
    if (slider.length == 0) this.$slider = $("<img />").prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror);
      sliderExisted = !0;
    }
    this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden",
    });
    this.$slider.addClass("parallax-slider").one("load", function () {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth = this.naturalWidth || this.width || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;
      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = !1;
      Parallax.requestRender();
    });
    if (!sliderExisted) this.$slider[0].src = this.imageSrc;
    if (
      (this.naturalHeight && this.naturalWidth) ||
      this.$slider[0].complete ||
      slider.length > 0
    ) {
      this.$slider.trigger("load");
    }
  }
  $.extend(Parallax.prototype, {
    speed: 0.2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    mirrorContainer: "body",
    refresh: function () {
      this.boxWidth = this.$element.outerWidth();
      this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(
        this.boxOffsetTop + this.boxHeight - winHeight,
        0
      );
      var imageHeightMin =
        (this.boxHeight + (maxOffset - minOffset) * (1 - this.speed)) | 0;
      var imageOffsetMin =
        ((this.boxOffsetTop - maxOffset) * (1 - this.speed)) | 0;
      var margin;
      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = (imageHeightMin * this.aspectRatio) | 0;
        this.imageHeight = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;
        margin = this.imageWidth - this.boxWidth;
        if (this.positionX == "left") {
          this.offsetLeft = 0;
        } else if (this.positionX == "right") {
          this.offsetLeft = -margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, -margin);
        } else {
          this.offsetLeft = (-margin / 2) | 0;
        }
      } else {
        this.imageWidth = this.boxWidth;
        this.imageHeight = (this.boxWidth / this.aspectRatio) | 0;
        this.offsetLeft = 0;
        margin = this.imageHeight - imageHeightMin;
        if (this.positionY == "top") {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == "bottom") {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop =
            imageOffsetMin + Math.max(this.positionY, -margin);
        } else {
          this.offsetBaseTop = (imageOffsetMin - margin / 2) | 0;
        }
      }
    },
    render: function () {
      var scrollTop = Parallax.scrollTop;
      var scrollLeft = Parallax.scrollLeft;
      var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;
      if (
        this.boxOffsetBottom > scrollTop &&
        this.boxOffsetTop <= scrollBottom
      ) {
        this.visibility = "visible";
        this.mirrorTop = this.boxOffsetTop - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = "hidden";
      }
      this.$mirror.css({
        transform:
          "translate3d(" +
          this.mirrorLeft +
          "px, " +
          (this.mirrorTop - overScroll) +
          "px, 0px)",
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth,
      });
      this.$slider.css({
        transform:
          "translate3d(" +
          this.offsetLeft +
          "px, " +
          this.offsetTop +
          "px, 0px)",
        position: "absolute",
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none",
      });
    },
  });
  $.extend(Parallax, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function () {
      if (this.isReady) return;
      var self = this;
      var $doc = $(document),
        $win = $(window);
      var loadDimensions = function () {
        Parallax.winHeight = $win.height();
        Parallax.winWidth = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth = $doc.width();
      };
      var loadScrollPosition = function () {
        var winScrollTop = $win.scrollTop();
        var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
        Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
        Parallax.scrollLeft = Math.max(
          0,
          Math.min(scrollLeftMax, $win.scrollLeft())
        );
        Parallax.overScroll = Math.max(
          winScrollTop - scrollTopMax,
          Math.min(winScrollTop, 0)
        );
      };
      $win
        .on("resize.px.parallax load.px.parallax", function () {
          loadDimensions();
          self.refresh();
          Parallax.isFresh = !1;
          Parallax.requestRender();
        })
        .on("scroll.px.parallax load.px.parallax", function () {
          loadScrollPosition();
          Parallax.requestRender();
        });
      loadDimensions();
      loadScrollPosition();
      this.isReady = !0;
      var lastPosition = -1;
      function frameLoop() {
        if (lastPosition == window.pageYOffset) {
          window.requestAnimationFrame(frameLoop);
          return !1;
        } else lastPosition = window.pageYOffset;
        self.render();
        window.requestAnimationFrame(frameLoop);
      }
      frameLoop();
    },
    configure: function (options) {
      if (typeof options == "object") {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },
    refresh: function () {
      $.each(this.sliders, function () {
        this.refresh();
      });
      this.isFresh = !0;
    },
    render: function () {
      this.isFresh || this.refresh();
      $.each(this.sliders, function () {
        this.render();
      });
    },
    requestRender: function () {
      var self = this;
      self.render();
      self.isBusy = !1;
    },
    destroy: function (el) {
      var i,
        parallaxElement = $(el).data("px.parallax");
      parallaxElement.$mirror.remove();
      for (i = 0; i < this.sliders.length; i += 1) {
        if (this.sliders[i] == parallaxElement) {
          this.sliders.splice(i, 1);
        }
      }
      $(el).data("px.parallax", !1);
      if (this.sliders.length === 0) {
        $(window).off("scroll.px.parallax resize.px.parallax load.px.parallax");
        this.isReady = !1;
        Parallax.isSetup = !1;
      }
    },
  });
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == "object" && option;
      if (this == window || this == document || $this.is("body")) {
        Parallax.configure(options);
      } else if (!$this.data("px.parallax")) {
        options = $.extend({}, $this.data(), options);
        $this.data("px.parallax", new Parallax(this, options));
      } else if (typeof option == "object") {
        $.extend($this.data("px.parallax"), options);
      }
      if (typeof option == "string") {
        if (option == "destroy") {
          Parallax.destroy(this);
        } else {
          Parallax[option]();
        }
      }
    });
  }
  var old = $.fn.parallax;
  $.fn.parallax = Plugin;
  $.fn.parallax.Constructor = Parallax;
  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };
  $(function () {
    $('[data-parallax="scroll"]').parallax();
  });
})(jQuery, window, document);
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = {
      exports: {},
    };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", {
    value: !0,
  });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return (
            n(a, [
              {
                key: "observe",
                value: function () {},
              },
            ]),
            a
          );
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, {
                  childList: !0,
                  subtree: !0,
                });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c &&
                  this.vendorSet(a.style, {
                    animationDuration: c,
                  }),
                d &&
                  this.vendorSet(a.style, {
                    animationDelay: d,
                  }),
                e &&
                  this.vendorSet(a.style, {
                    animationIterationCount: e,
                  }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});

var urls = {
  siteRoot: "https://www.united.com.bd/",
  adminAjax: "https://www.united.com.bd/wp-admin/admin-ajax.php",
};
(() => {
  var __webpack_modules__ = {
    /*!***************************************************!*\
  !*** ./node_modules/headroom.js/dist/headroom.js ***!
  \***************************************************/
    "./node_modules/headroom.js/dist/headroom.js": function (module) {
      eval(
        '/*!\n * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it\n * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js\n * License: MIT\n */\n\n(function (global, factory) {\n   true ? module.exports = factory() : 0;\n})(this, function () {\n  \'use strict\';\n\n  function isBrowser() {\n    return typeof window !== "undefined";\n  }\n\n  /**\n   * Used to detect browser support for adding an event listener with options\n   * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener\n   */\n  function passiveEventsSupported() {\n    var supported = false;\n    try {\n      var options = {\n        // eslint-disable-next-line getter-return\n        get passive() {\n          supported = true;\n        }\n      };\n      window.addEventListener("test", options, options);\n      window.removeEventListener("test", options, options);\n    } catch (err) {\n      supported = false;\n    }\n    return supported;\n  }\n  function isSupported() {\n    return !!(isBrowser() && function () {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame);\n  }\n  function isDocument(obj) {\n    return obj.nodeType === 9; // Node.DOCUMENT_NODE === 9\n  }\n\n  function isWindow(obj) {\n    // `obj === window` or `obj instanceof Window` is not sufficient,\n    // as the obj may be the window of an iframe.\n    return obj && obj.document && isDocument(obj.document);\n  }\n  function windowScroller(win) {\n    var doc = win.document;\n    var body = doc.body;\n    var html = doc.documentElement;\n    return {\n      /**\n       * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/\n       * @return {Number} the scroll height of the document in pixels\n       */\n      scrollHeight: function () {\n        return Math.max(body.scrollHeight, html.scrollHeight, body.offsetHeight, html.offsetHeight, body.clientHeight, html.clientHeight);\n      },\n      /**\n       * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript\n       * @return {Number} the height of the viewport in pixels\n       */\n      height: function () {\n        return win.innerHeight || html.clientHeight || body.clientHeight;\n      },\n      /**\n       * Gets the Y scroll position\n       * @return {Number} pixels the page has scrolled along the Y-axis\n       */\n      scrollY: function () {\n        if (win.pageYOffset !== undefined) {\n          return win.pageYOffset;\n        }\n        return (html || body.parentNode || body).scrollTop;\n      }\n    };\n  }\n  function elementScroller(element) {\n    return {\n      /**\n       * @return {Number} the scroll height of the element in pixels\n       */\n      scrollHeight: function () {\n        return Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);\n      },\n      /**\n       * @return {Number} the height of the element in pixels\n       */\n      height: function () {\n        return Math.max(element.offsetHeight, element.clientHeight);\n      },\n      /**\n       * Gets the Y scroll position\n       * @return {Number} pixels the element has scrolled along the Y-axis\n       */\n      scrollY: function () {\n        return element.scrollTop;\n      }\n    };\n  }\n  function createScroller(element) {\n    return isWindow(element) ? windowScroller(element) : elementScroller(element);\n  }\n\n  /**\n   * @param element EventTarget\n   */\n  function trackScroll(element, options, callback) {\n    var isPassiveSupported = passiveEventsSupported();\n    var rafId;\n    var scrolled = false;\n    var scroller = createScroller(element);\n    var lastScrollY = scroller.scrollY();\n    var details = {};\n    function update() {\n      var scrollY = Math.round(scroller.scrollY());\n      var height = scroller.height();\n      var scrollHeight = scroller.scrollHeight();\n\n      // reuse object for less memory churn\n      details.scrollY = scrollY;\n      details.lastScrollY = lastScrollY;\n      details.direction = scrollY > lastScrollY ? "down" : "up";\n      details.distance = Math.abs(scrollY - lastScrollY);\n      details.isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;\n      details.top = scrollY <= options.offset[details.direction];\n      details.bottom = scrollY + height >= scrollHeight;\n      details.toleranceExceeded = details.distance > options.tolerance[details.direction];\n      callback(details);\n      lastScrollY = scrollY;\n      scrolled = false;\n    }\n    function handleScroll() {\n      if (!scrolled) {\n        scrolled = true;\n        rafId = requestAnimationFrame(update);\n      }\n    }\n    var eventOptions = isPassiveSupported ? {\n      passive: true,\n      capture: false\n    } : false;\n    element.addEventListener("scroll", handleScroll, eventOptions);\n    update();\n    return {\n      destroy: function () {\n        cancelAnimationFrame(rafId);\n        element.removeEventListener("scroll", handleScroll, eventOptions);\n      }\n    };\n  }\n  function normalizeUpDown(t) {\n    return t === Object(t) ? t : {\n      down: t,\n      up: t\n    };\n  }\n\n  /**\n   * UI enhancement for fixed headers.\n   * Hides header when scrolling down\n   * Shows header when scrolling up\n   * @constructor\n   * @param {DOMElement} elem the header element\n   * @param {Object} options options for the widget\n   */\n  function Headroom(elem, options) {\n    options = options || {};\n    Object.assign(this, Headroom.options, options);\n    this.classes = Object.assign({}, Headroom.options.classes, options.classes);\n    this.elem = elem;\n    this.tolerance = normalizeUpDown(this.tolerance);\n    this.offset = normalizeUpDown(this.offset);\n    this.initialised = false;\n    this.frozen = false;\n  }\n  Headroom.prototype = {\n    constructor: Headroom,\n    /**\n     * Start listening to scrolling\n     * @public\n     */\n    init: function () {\n      if (Headroom.cutsTheMustard && !this.initialised) {\n        this.addClass("initial");\n        this.initialised = true;\n\n        // defer event registration to handle browser\n        // potentially restoring previous scroll position\n        setTimeout(function (self) {\n          self.scrollTracker = trackScroll(self.scroller, {\n            offset: self.offset,\n            tolerance: self.tolerance\n          }, self.update.bind(self));\n        }, 100, this);\n      }\n      return this;\n    },\n    /**\n     * Destroy the widget, clearing up after itself\n     * @public\n     */\n    destroy: function () {\n      this.initialised = false;\n      Object.keys(this.classes).forEach(this.removeClass, this);\n      this.scrollTracker.destroy();\n    },\n    /**\n     * Unpin the element\n     * @public\n     */\n    unpin: function () {\n      if (this.hasClass("pinned") || !this.hasClass("unpinned")) {\n        this.addClass("unpinned");\n        this.removeClass("pinned");\n        if (this.onUnpin) {\n          this.onUnpin.call(this);\n        }\n      }\n    },\n    /**\n     * Pin the element\n     * @public\n     */\n    pin: function () {\n      if (this.hasClass("unpinned")) {\n        this.addClass("pinned");\n        this.removeClass("unpinned");\n        if (this.onPin) {\n          this.onPin.call(this);\n        }\n      }\n    },\n    /**\n     * Freezes the current state of the widget\n     * @public\n     */\n    freeze: function () {\n      this.frozen = true;\n      this.addClass("frozen");\n    },\n    /**\n     * Re-enables the default behaviour of the widget\n     * @public\n     */\n    unfreeze: function () {\n      this.frozen = false;\n      this.removeClass("frozen");\n    },\n    top: function () {\n      if (!this.hasClass("top")) {\n        this.addClass("top");\n        this.removeClass("notTop");\n        if (this.onTop) {\n          this.onTop.call(this);\n        }\n      }\n    },\n    notTop: function () {\n      if (!this.hasClass("notTop")) {\n        this.addClass("notTop");\n        this.removeClass("top");\n        if (this.onNotTop) {\n          this.onNotTop.call(this);\n        }\n      }\n    },\n    bottom: function () {\n      if (!this.hasClass("bottom")) {\n        this.addClass("bottom");\n        this.removeClass("notBottom");\n        if (this.onBottom) {\n          this.onBottom.call(this);\n        }\n      }\n    },\n    notBottom: function () {\n      if (!this.hasClass("notBottom")) {\n        this.addClass("notBottom");\n        this.removeClass("bottom");\n        if (this.onNotBottom) {\n          this.onNotBottom.call(this);\n        }\n      }\n    },\n    shouldUnpin: function (details) {\n      var scrollingDown = details.direction === "down";\n      return scrollingDown && !details.top && details.toleranceExceeded;\n    },\n    shouldPin: function (details) {\n      var scrollingUp = details.direction === "up";\n      return scrollingUp && details.toleranceExceeded || details.top;\n    },\n    addClass: function (className) {\n      this.elem.classList.add.apply(this.elem.classList, this.classes[className].split(" "));\n    },\n    removeClass: function (className) {\n      this.elem.classList.remove.apply(this.elem.classList, this.classes[className].split(" "));\n    },\n    hasClass: function (className) {\n      return this.classes[className].split(" ").every(function (cls) {\n        return this.classList.contains(cls);\n      }, this.elem);\n    },\n    update: function (details) {\n      if (details.isOutOfBounds) {\n        // Ignore bouncy scrolling in OSX\n        return;\n      }\n      if (this.frozen === true) {\n        return;\n      }\n      if (details.top) {\n        this.top();\n      } else {\n        this.notTop();\n      }\n      if (details.bottom) {\n        this.bottom();\n      } else {\n        this.notBottom();\n      }\n      if (this.shouldUnpin(details)) {\n        this.unpin();\n      } else if (this.shouldPin(details)) {\n        this.pin();\n      }\n    }\n  };\n\n  /**\n   * Default options\n   * @type {Object}\n   */\n  Headroom.options = {\n    tolerance: {\n      up: 0,\n      down: 0\n    },\n    offset: 0,\n    scroller: isBrowser() ? window : null,\n    classes: {\n      frozen: "headroom--frozen",\n      pinned: "headroom--pinned",\n      unpinned: "headroom--unpinned",\n      top: "headroom--top",\n      notTop: "headroom--not-top",\n      bottom: "headroom--bottom",\n      notBottom: "headroom--not-bottom",\n      initial: "headroom"\n    }\n  };\n  Headroom.cutsTheMustard = isSupported();\n  return Headroom;\n});\n\n//# sourceURL=webpack://united-group/./node_modules/headroom.js/dist/headroom.js?'
      );
    },
    /*!**********************************************!*\
  !*** ./src/scripts/imagesloaded.pkgd.min.js ***!
  \**********************************************/
    "./src/scripts/imagesloaded.pkgd.min.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      eval(
        'var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\r\n * imagesLoaded PACKAGED v4.1.1\r\n * JavaScript is all like "You images are done yet or what?"\r\n * MIT License\r\n */\n\n!function (t, e) {\n   true ? !(__WEBPACK_LOCAL_MODULE_0__factory = (e), (typeof __WEBPACK_LOCAL_MODULE_0__factory === \'function\' ? ((__WEBPACK_LOCAL_MODULE_0__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)) : __WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__factory)) : 0;\n}("undefined" != typeof window ? window : this, function () {\n  function t() {}\n  var e = t.prototype;\n  return e.on = function (t, e) {\n    if (t && e) {\n      var i = this._events = this._events || {},\n        n = i[t] = i[t] || [];\n      return -1 == n.indexOf(e) && n.push(e), this;\n    }\n  }, e.once = function (t, e) {\n    if (t && e) {\n      this.on(t, e);\n      var i = this._onceEvents = this._onceEvents || {},\n        n = i[t] = i[t] || {};\n      return n[e] = !0, this;\n    }\n  }, e.off = function (t, e) {\n    var i = this._events && this._events[t];\n    if (i && i.length) {\n      var n = i.indexOf(e);\n      return -1 != n && i.splice(n, 1), this;\n    }\n  }, e.emitEvent = function (t, e) {\n    var i = this._events && this._events[t];\n    if (i && i.length) {\n      var n = 0,\n        o = i[n];\n      e = e || [];\n      for (var r = this._onceEvents && this._onceEvents[t]; o;) {\n        var s = r && r[o];\n        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];\n      }\n      return this;\n    }\n  }, t;\n}), function (t, e) {\n  "use strict";\n\n   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i) {\n    return e(t, i);\n  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(window, function (t, e) {\n  function i(t, e) {\n    for (var i in e) t[i] = e[i];\n    return t;\n  }\n  function n(t) {\n    var e = [];\n    if (Array.isArray(t)) e = t;else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);else e.push(t);\n    return e;\n  }\n  function o(t, e, r) {\n    return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(function () {\n      this.check();\n    }.bind(this))) : new o(t, e, r);\n  }\n  function r(t) {\n    this.img = t;\n  }\n  function s(t, e) {\n    this.url = t, this.element = e, this.img = new Image();\n  }\n  var h = t.jQuery,\n    a = t.console;\n  o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {\n    this.images = [], this.elements.forEach(this.addElementImages, this);\n  }, o.prototype.addElementImages = function (t) {\n    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);\n    var e = t.nodeType;\n    if (e && d[e]) {\n      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {\n        var o = i[n];\n        this.addImage(o);\n      }\n      if ("string" == typeof this.options.background) {\n        var r = t.querySelectorAll(this.options.background);\n        for (n = 0; n < r.length; n++) {\n          var s = r[n];\n          this.addElementBackgroundImages(s);\n        }\n      }\n    }\n  };\n  var d = {\n    1: !0,\n    9: !0,\n    11: !0\n  };\n  return o.prototype.addElementBackgroundImages = function (t) {\n    var e = getComputedStyle(t);\n    if (e) for (var i = /url\\(([\'"])?(.*?)\\1\\)/gi, n = i.exec(e.backgroundImage); null !== n;) {\n      var o = n && n[2];\n      o && this.addBackground(o, t), n = i.exec(e.backgroundImage);\n    }\n  }, o.prototype.addImage = function (t) {\n    var e = new r(t);\n    this.images.push(e);\n  }, o.prototype.addBackground = function (t, e) {\n    var i = new s(t, e);\n    this.images.push(i);\n  }, o.prototype.check = function () {\n    function t(t, i, n) {\n      setTimeout(function () {\n        e.progress(t, i, n);\n      });\n    }\n    var e = this;\n    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {\n      e.once("progress", t), e.check();\n    }) : void this.complete();\n  }, o.prototype.progress = function (t, e, i) {\n    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e);\n  }, o.prototype.complete = function () {\n    var t = this.hasAnyBroken ? "fail" : "done";\n    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {\n      var e = this.hasAnyBroken ? "reject" : "resolve";\n      this.jqDeferred[e](this);\n    }\n  }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {\n    var t = this.getIsImageComplete();\n    return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));\n  }, r.prototype.getIsImageComplete = function () {\n    return this.img.complete && void 0 !== this.img.naturalWidth;\n  }, r.prototype.confirm = function (t, e) {\n    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);\n  }, r.prototype.handleEvent = function (t) {\n    var e = "on" + t.type;\n    this[e] && this[e](t);\n  }, r.prototype.onload = function () {\n    this.confirm(!0, "onload"), this.unbindEvents();\n  }, r.prototype.onerror = function () {\n    this.confirm(!1, "onerror"), this.unbindEvents();\n  }, r.prototype.unbindEvents = function () {\n    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);\n  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {\n    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;\n    var t = this.getIsImageComplete();\n    t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());\n  }, s.prototype.unbindEvents = function () {\n    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);\n  }, s.prototype.confirm = function (t, e) {\n    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);\n  }, o.makeJQueryPlugin = function (e) {\n    e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {\n      var i = new o(this, t, e);\n      return i.jqDeferred.promise(h(this));\n    });\n  }, o.makeJQueryPlugin(), o;\n});\n\n//# sourceURL=webpack://united-group/./src/scripts/imagesloaded.pkgd.min.js?'
      );
    },
    /*!*********************************************!*\
  !*** ./src/scripts/jquery.counterup.min.js ***!
  \*********************************************/
    "./src/scripts/jquery.counterup.min.js": () => {
      eval(
        '/*!\r\n * jquery.counterup.js 1.0\r\n *\r\n * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal\r\n * Released under the GPL v2 License\r\n *\r\n * Date: Nov 26, 2013\r\n */(function (e) {\n  "use strict";\n\n  e.fn.counterUp = function (t) {\n    var n = e.extend({\n      time: 400,\n      delay: 10\n    }, t);\n    return this.each(function () {\n      var t = e(this),\n        r = n,\n        i = function () {\n          var e = [],\n            n = r.time / r.delay,\n            i = t.text(),\n            s = /[0-9]+,[0-9]+/.test(i);\n          i = i.replace(/,/g, "");\n          var o = /^[0-9]+$/.test(i),\n            u = /^[0-9]+\\.[0-9]+$/.test(i),\n            a = u ? (i.split(".")[1] || []).length : 0;\n          for (var f = n; f >= 1; f--) {\n            var l = parseInt(i / n * f);\n            u && (l = parseFloat(i / n * f).toFixed(a));\n            if (s) while (/(\\d+)(\\d{3})/.test(l.toString())) l = l.toString().replace(/(\\d+)(\\d{3})/, "$1,$2");\n            e.unshift(l);\n          }\n          t.data("counterup-nums", e);\n          t.text("0");\n          var c = function () {\n            t.text(t.data("counterup-nums").shift());\n            if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);else {\n              delete t.data("counterup-nums");\n              t.data("counterup-nums", null);\n              t.data("counterup-func", null);\n            }\n          };\n          t.data("counterup-func", c);\n          setTimeout(t.data("counterup-func"), r.delay);\n        };\n      t.waypoint(i, {\n        offset: "100%",\n        triggerOnce: !0\n      });\n    });\n  };\n})(jQuery);\n\n//# sourceURL=webpack://united-group/./src/scripts/jquery.counterup.min.js?'
      );
    },
    /*!**********************************!*\
  !*** ./src/scripts/lightcase.js ***!
  \**********************************/
    "./src/scripts/lightcase.js": () => {
      eval(
        "/*\r\n * Lightcase - jQuery Plugin\r\n * The smart and flexible Lightbox Plugin.\r\n *\r\n * @author\t\tCornel Boppart <cornel@bopp-art.com>\r\n * @copyright\tAuthor\r\n *\r\n * @version\t\t2.5.0 (11/03/2018)\r\n */\n\n;\n(function ($) {\n  'use strict';\n\n  var _self = {\n    cache: {},\n    support: {},\n    objects: {},\n    /**\r\n     * Initializes the plugin\r\n     *\r\n     * @param\t{object}\toptions\r\n     * @return\t{object}\r\n     */\n    init: function (options) {\n      return this.each(function () {\n        $(this).unbind('click.lightcase').bind('click.lightcase', function (event) {\n          event.preventDefault();\n          $(this).lightcase('start', options);\n        });\n      });\n    },\n    /**\r\n     * Starts the plugin\r\n     *\r\n     * @param\t{object}\toptions\r\n     * @return\t{void}\r\n     */\n    start: function (options) {\n      _self.origin = lightcase.origin = this;\n      _self.settings = lightcase.settings = $.extend(true, {\n        idPrefix: 'lightcase-',\n        classPrefix: 'lightcase-',\n        attrPrefix: 'lc-',\n        transition: 'elastic',\n        transitionOpen: null,\n        transitionClose: null,\n        transitionIn: null,\n        transitionOut: null,\n        cssTransitions: true,\n        speedIn: 250,\n        speedOut: 250,\n        width: null,\n        height: null,\n        maxWidth: 800,\n        maxHeight: 500,\n        forceWidth: false,\n        forceHeight: false,\n        liveResize: true,\n        fullScreenModeForMobile: true,\n        mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,\n        disableShrink: false,\n        fixedRatio: true,\n        shrinkFactor: .75,\n        overlayOpacity: .9,\n        slideshow: false,\n        slideshowAutoStart: true,\n        breakBeforeShow: false,\n        timeout: 5000,\n        swipe: true,\n        useKeys: true,\n        useCategories: true,\n        useAsCollection: false,\n        navigateEndless: true,\n        closeOnOverlayClick: true,\n        title: null,\n        caption: null,\n        showTitle: true,\n        showCaption: true,\n        showSequenceInfo: true,\n        inline: {\n          width: 'auto',\n          height: 'auto'\n        },\n        ajax: {\n          width: 'auto',\n          height: 'auto',\n          type: 'get',\n          dataType: 'html',\n          data: {}\n        },\n        iframe: {\n          width: 800,\n          height: 500,\n          frameborder: 0\n        },\n        flash: {\n          width: 400,\n          height: 205,\n          wmode: 'transparent'\n        },\n        video: {\n          width: 400,\n          height: 225,\n          poster: '',\n          preload: 'auto',\n          controls: true,\n          autobuffer: true,\n          autoplay: true,\n          loop: false\n        },\n        attr: 'data-rel',\n        href: null,\n        type: null,\n        typeMapping: {\n          'image': 'jpg,jpeg,gif,png,bmp',\n          'flash': 'swf',\n          'video': 'mp4,mov,ogv,ogg,webm',\n          'iframe': 'html,php',\n          'ajax': 'json,txt',\n          'inline': '#'\n        },\n        errorMessage: function () {\n          return '<p class=\"' + _self.settings.classPrefix + 'error\">' + _self.settings.labels['errorMessage'] + '</p>';\n        },\n        labels: {\n          'errorMessage': 'Source could not be found...',\n          'sequenceInfo.of': ' of ',\n          'close': 'Close',\n          'navigator.prev': 'Prev',\n          'navigator.next': 'Next',\n          'navigator.play': 'Play',\n          'navigator.pause': 'Pause'\n        },\n        markup: function () {\n          _self.objects.body.append(_self.objects.overlay = $('<div id=\"' + _self.settings.idPrefix + 'overlay\"></div>'), _self.objects.loading = $('<div id=\"' + _self.settings.idPrefix + 'loading\" class=\"' + _self.settings.classPrefix + 'icon-spin\"></div>'), _self.objects.case = $('<div id=\"' + _self.settings.idPrefix + 'case\" aria-hidden=\"true\" role=\"dialog\"></div>'));\n          _self.objects.case.after(_self.objects.close = $('<a href=\"#\" class=\"' + _self.settings.classPrefix + 'icon-close\"><span>' + _self.settings.labels['close'] + '</span></a>'), _self.objects.nav = $('<div id=\"' + _self.settings.idPrefix + 'nav\"></div>'));\n          _self.objects.nav.append(_self.objects.prev = $('<a href=\"#\" class=\"' + _self.settings.classPrefix + 'icon-prev\"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(), _self.objects.next = $('<a href=\"#\" class=\"' + _self.settings.classPrefix + 'icon-next\"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(), _self.objects.play = $('<a href=\"#\" class=\"' + _self.settings.classPrefix + 'icon-play\"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(), _self.objects.pause = $('<a href=\"#\" class=\"' + _self.settings.classPrefix + 'icon-pause\"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide());\n          _self.objects.case.append(_self.objects.content = $('<div id=\"' + _self.settings.idPrefix + 'content\"></div>'), _self.objects.info = $('<div id=\"' + _self.settings.idPrefix + 'info\"></div>'));\n          _self.objects.content.append(_self.objects.contentInner = $('<div class=\"' + _self.settings.classPrefix + 'contentInner\"></div>'));\n          _self.objects.info.append(_self.objects.sequenceInfo = $('<div id=\"' + _self.settings.idPrefix + 'sequenceInfo\"></div>'), _self.objects.title = $('<h4 id=\"' + _self.settings.idPrefix + 'title\"></h4>'), _self.objects.caption = $('<p id=\"' + _self.settings.idPrefix + 'caption\"></p>'));\n        },\n        onInit: {},\n        onStart: {},\n        onBeforeCalculateDimensions: {},\n        onAfterCalculateDimensions: {},\n        onBeforeShow: {},\n        onFinish: {},\n        onResize: {},\n        onClose: {},\n        onCleanup: {}\n      }, options,\n      // Load options from data-lc-options attribute\n      _self.origin.data ? _self.origin.data('lc-options') : {});\n      _self.objects.document = $('html');\n      _self.objects.body = $('body');\n\n      // Call onInit hook functions\n      _self._callHooks(_self.settings.onInit);\n      _self.objectData = _self._setObjectData(this);\n      _self._addElements();\n      _self._open();\n      _self.dimensions = _self.getViewportDimensions();\n    },\n    /**\r\n     * Getter method for objects\r\n     *\r\n     * @param\t{string}\tname\r\n     * @return\t{object}\r\n     */\n    get: function (name) {\n      return _self.objects[name];\n    },\n    /**\r\n     * Getter method for objectData\r\n     *\r\n     * @return\t{object}\r\n     */\n    getObjectData: function () {\n      return _self.objectData;\n    },\n    /**\r\n     * Sets the object data\r\n     *\r\n     * @param\t{object}\tobject\r\n     * @return\t{object}\tobjectData\r\n     */\n    _setObjectData: function (object) {\n      var $object = $(object),\n        objectData = {\n          this: $(object),\n          title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),\n          caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),\n          url: _self._determineUrl(),\n          requestType: _self.settings.ajax.type,\n          requestData: _self.settings.ajax.data,\n          requestDataType: _self.settings.ajax.dataType,\n          rel: $object.attr(_self._determineAttributeSelector()),\n          type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),\n          isPartOfSequence: _self.settings.useAsCollection || _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),\n          isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),\n          currentIndex: $(_self._determineAttributeSelector()).index($object),\n          sequenceLength: $(_self._determineAttributeSelector()).length\n        };\n\n      // Add sequence info to objectData\n      objectData.sequenceInfo = objectData.currentIndex + 1 + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength;\n\n      // Add next/prev index\n      objectData.prevIndex = objectData.currentIndex - 1;\n      objectData.nextIndex = objectData.currentIndex + 1;\n      return objectData;\n    },\n    /**\r\n     * Prefixes a data attribute name with defined name from 'settings.attrPrefix'\r\n     * to ensure more uniqueness for all lightcase related/used attributes.\r\n     *\r\n     * @param\t{string}\tname\r\n     * @return\t{string}\r\n     */\n    _prefixAttributeName: function (name) {\n      return 'data-' + _self.settings.attrPrefix + name;\n    },\n    /**\r\n     * Determines the link target considering 'settings.href' and data attributes\r\n     * but also with a fallback to the default 'href' value.\r\n     *\r\n     * @return\t{string}\r\n     */\n    _determineLinkTarget: function () {\n      return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href');\n    },\n    /**\r\n     * Determines the attribute selector to use, depending on\r\n     * whether categorized collections are beeing used or not.\r\n     *\r\n     * @return\t{string}\tselector\r\n     */\n    _determineAttributeSelector: function () {\n      var $origin = $(_self.origin),\n        selector = '';\n      if (typeof _self.cache.selector !== 'undefined') {\n        selector = _self.cache.selector;\n      } else if (_self.settings.useCategories === true && $origin.attr(_self._prefixAttributeName('categories'))) {\n        var categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');\n        $.each(categories, function (index, category) {\n          if (index > 0) {\n            selector += ',';\n          }\n          selector += '[' + _self._prefixAttributeName('categories') + '~=\"' + category + '\"]';\n        });\n      } else {\n        selector = '[' + _self.settings.attr + '=\"' + $origin.attr(_self.settings.attr) + '\"]';\n      }\n      _self.cache.selector = selector;\n      return selector;\n    },\n    /**\r\n     * Determines the correct resource according to the\r\n     * current viewport and density.\r\n     *\r\n     * @return\t{string}\turl\r\n     */\n    _determineUrl: function () {\n      var dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),\n        width = 0,\n        density = 0,\n        supportLevel = '',\n        url;\n      $.each(dataUrl, function (index, src) {\n        switch (_self._verifyDataType(src.url)) {\n          case 'video':\n            var video = document.createElement('video'),\n              videoType = _self._verifyDataType(src.url) + '/' + _self._getFileUrlSuffix(src.url);\n\n            // Check if browser can play this type of video format\n            if (supportLevel !== 'probably' && supportLevel !== video.canPlayType(videoType) && video.canPlayType(videoType) !== '') {\n              supportLevel = video.canPlayType(videoType);\n              url = src.url;\n            }\n            break;\n          default:\n            if (\n            // Check density\n            _self._devicePixelRatio() >= src.density && src.density >= density &&\n            // Check viewport width\n            _self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches && src.width >= width) {\n              width = src.width;\n              density = src.density;\n              url = src.url;\n            }\n            break;\n        }\n      });\n      return url;\n    },\n    /**\r\n     * Normalizes an url and returns information about the resource path,\r\n     * the viewport width as well as density if defined.\r\n     *\r\n     * @param\t{string}\turl\tPath to resource in format of an url or srcset\r\n     * @return\t{object}\r\n     */\n    _normalizeUrl: function (url) {\n      var srcExp = /^\\d+$/;\n      return url.split(',').map(function (str) {\n        var src = {\n          width: 0,\n          density: 0\n        };\n        str.trim().split(/\\s+/).forEach(function (url, i) {\n          if (i === 0) {\n            return src.url = url;\n          }\n          var value = url.substring(0, url.length - 1),\n            lastChar = url[url.length - 1],\n            intVal = parseInt(value, 10),\n            floatVal = parseFloat(value);\n          if (lastChar === 'w' && srcExp.test(value)) {\n            src.width = intVal;\n          } else if (lastChar === 'h' && srcExp.test(value)) {\n            src.height = intVal;\n          } else if (lastChar === 'x' && !isNaN(floatVal)) {\n            src.density = floatVal;\n          }\n        });\n        return src;\n      });\n    },\n    /**\r\n     * Verifies if the link is part of a sequence\r\n     *\r\n     * @param\t{string}\trel\r\n     * @param\t{string}\texpression\r\n     * @return\t{boolean}\r\n     */\n    _isPartOfSequence: function (rel, expression) {\n      var getSimilarLinks = $('[' + _self.settings.attr + '=\"' + rel + '\"]'),\n        regexp = new RegExp(expression);\n      return regexp.test(rel) && getSimilarLinks.length > 1;\n    },\n    /**\r\n     * Verifies if the slideshow should be enabled\r\n     *\r\n     * @return\t{boolean}\r\n     */\n    isSlideshowEnabled: function () {\n      return _self.objectData.isPartOfSequence && (_self.settings.slideshow === true || _self.objectData.isPartOfSequenceWithSlideshow === true);\n    },\n    /**\r\n     * Loads the new content to show\r\n     *\r\n     * @return\t{void}\r\n     */\n    _loadContent: function () {\n      if (_self.cache.originalObject) {\n        _self._restoreObject();\n      }\n      _self._createObject();\n    },\n    /**\r\n     * Creates a new object\r\n     *\r\n     * @return\t{void}\r\n     */\n    _createObject: function () {\n      var $object;\n\n      // Create object\n      switch (_self.objectData.type) {\n        case 'image':\n          $object = $(new Image());\n          $object.attr({\n            // The time expression is required to prevent the binding of an image load\n            'src': _self.objectData.url,\n            'alt': _self.objectData.title\n          });\n          break;\n        case 'inline':\n          $object = $('<div class=\"' + _self.settings.classPrefix + 'inlineWrap\"></div>');\n          $object.html(_self._cloneObject($(_self.objectData.url)));\n\n          // Add custom attributes from _self.settings\n          $.each(_self.settings.inline, function (name, value) {\n            $object.attr(_self._prefixAttributeName(name), value);\n          });\n          break;\n        case 'ajax':\n          $object = $('<div class=\"' + _self.settings.classPrefix + 'inlineWrap\"></div>');\n\n          // Add custom attributes from _self.settings\n          $.each(_self.settings.ajax, function (name, value) {\n            if (name !== 'data') {\n              $object.attr(_self._prefixAttributeName(name), value);\n            }\n          });\n          break;\n        case 'flash':\n          $object = $('<embed src=\"' + _self.objectData.url + '\" type=\"application/x-shockwave-flash\"></embed>');\n\n          // Add custom attributes from _self.settings\n          $.each(_self.settings.flash, function (name, value) {\n            $object.attr(name, value);\n          });\n          break;\n        case 'video':\n          $object = $('<video></video>');\n          $object.attr('src', _self.objectData.url);\n\n          // Add custom attributes from _self.settings\n          $.each(_self.settings.video, function (name, value) {\n            $object.attr(name, value);\n          });\n          break;\n        default:\n          $object = $('<iframe></iframe>');\n          $object.attr({\n            'src': _self.objectData.url\n          });\n\n          // Add custom attributes from _self.settings\n          $.each(_self.settings.iframe, function (name, value) {\n            $object.attr(name, value);\n          });\n          break;\n      }\n      _self._addObject($object);\n      _self._loadObject($object);\n    },\n    /**\r\n     * Adds the new object to the markup\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{void}\r\n     */\n    _addObject: function ($object) {\n      // Add object to content holder\n      _self.objects.contentInner.html($object);\n\n      // Start loading\n      _self._loading('start');\n\n      // Call onStart hook functions\n      _self._callHooks(_self.settings.onStart);\n\n      // Add sequenceInfo to the content holder or hide if its empty\n      if (_self.settings.showSequenceInfo === true && _self.objectData.isPartOfSequence) {\n        _self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);\n        _self.objects.sequenceInfo.show();\n      } else {\n        _self.objects.sequenceInfo.empty();\n        _self.objects.sequenceInfo.hide();\n      }\n      // Add title to the content holder or hide if its empty\n      if (_self.settings.showTitle === true && _self.objectData.title !== undefined && _self.objectData.title !== '') {\n        _self.objects.title.html(_self.objectData.title);\n        _self.objects.title.show();\n      } else {\n        _self.objects.title.empty();\n        _self.objects.title.hide();\n      }\n      // Add caption to the content holder or hide if its empty\n      if (_self.settings.showCaption === true && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {\n        _self.objects.caption.html(_self.objectData.caption);\n        _self.objects.caption.show();\n      } else {\n        _self.objects.caption.empty();\n        _self.objects.caption.hide();\n      }\n    },\n    /**\r\n     * Loads the new object\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{void}\r\n     */\n    _loadObject: function ($object) {\n      // Load the object\n      switch (_self.objectData.type) {\n        case 'inline':\n          if ($(_self.objectData.url)) {\n            _self._showContent($object);\n          } else {\n            _self.error();\n          }\n          break;\n        case 'ajax':\n          $.ajax($.extend({}, _self.settings.ajax, {\n            url: _self.objectData.url,\n            type: _self.objectData.requestType,\n            dataType: _self.objectData.requestDataType,\n            data: _self.objectData.requestData,\n            success: function (data, textStatus, jqXHR) {\n              // Check for X-Ajax-Location\n              if (jqXHR.getResponseHeader('X-Ajax-Location')) {\n                _self.objectData.url = jqXHR.getResponseHeader('X-Ajax-Location');\n                _self._loadObject($object);\n              } else {\n                // Unserialize if data is transferred as json\n                if (_self.objectData.requestDataType === 'json') {\n                  _self.objectData.data = data;\n                } else {\n                  $object.html(data);\n                }\n                _self._showContent($object);\n              }\n            },\n            error: function (jqXHR, textStatus, errorThrown) {\n              _self.error();\n            }\n          }));\n          break;\n        case 'flash':\n          _self._showContent($object);\n          break;\n        case 'video':\n          if (typeof $object.get(0).canPlayType === 'function' || _self.objects.case.find('video').length === 0) {\n            _self._showContent($object);\n          } else {\n            _self.error();\n          }\n          break;\n        default:\n          if (_self.objectData.url) {\n            $object.on('load', function () {\n              _self._showContent($object);\n            });\n            $object.on('error', function () {\n              _self.error();\n            });\n          } else {\n            _self.error();\n          }\n          break;\n      }\n    },\n    /**\r\n     * Throws an error message if something went wrong\r\n     *\r\n     * @return\t{void}\r\n     */\n    error: function () {\n      _self.objectData.type = 'error';\n      var $object = $('<div class=\"' + _self.settings.classPrefix + 'inlineWrap\"></div>');\n      $object.html(_self.settings.errorMessage);\n      _self.objects.contentInner.html($object);\n      _self._showContent(_self.objects.contentInner);\n    },\n    /**\r\n     * Calculates the dimensions to fit content\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{void}\r\n     */\n    _calculateDimensions: function ($object) {\n      _self._cleanupDimensions();\n      if (!$object) return;\n\n      // Set default dimensions\n      var dimensions = {\n        ratio: 1,\n        objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),\n        objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))\n      };\n      if (!_self.settings.disableShrink) {\n        // Add calculated maximum width/height to dimensions\n        dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);\n        dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor);\n\n        // If the auto calculated maxWidth/maxHeight greather than the user-defined one, use that.\n        if (dimensions.maxWidth > _self.settings.maxWidth) {\n          dimensions.maxWidth = _self.settings.maxWidth;\n        }\n        if (dimensions.maxHeight > _self.settings.maxHeight) {\n          dimensions.maxHeight = _self.settings.maxHeight;\n        }\n\n        // Calculate the difference between screen width/height and image width/height\n        dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);\n        dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);\n        switch (_self.objectData.type) {\n          case 'image':\n          case 'flash':\n          case 'video':\n          case 'iframe':\n          case 'ajax':\n          case 'inline':\n            if (_self.objectData.type === 'image' || _self.settings.fixedRatio === true) {\n              if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {\n                dimensions.objectWidth = dimensions.maxWidth;\n                dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);\n              }\n              if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {\n                dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);\n                dimensions.objectHeight = dimensions.maxHeight;\n              }\n              if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {\n                dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);\n                dimensions.objectHeight = dimensions.maxHeight;\n              }\n              break;\n            }\n          case 'error':\n            if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {\n              dimensions.objectWidth = dimensions.maxWidth;\n            }\n            break;\n          default:\n            if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {\n              dimensions.objectWidth = dimensions.maxWidth;\n            }\n            if ((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto' || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {\n              dimensions.objectHeight = dimensions.maxHeight;\n            }\n            break;\n        }\n      }\n      if (_self.settings.forceWidth) {\n        try {\n          dimensions.objectWidth = _self.settings[_self.objectData.type].width;\n        } catch (e) {\n          dimensions.objectWidth = _self.settings.width || dimensions.objectWidth;\n        }\n        dimensions.maxWidth = null;\n      }\n      if ($object.attr(_self._prefixAttributeName('max-width'))) {\n        dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'));\n      }\n      if (_self.settings.forceHeight) {\n        try {\n          dimensions.objectHeight = _self.settings[_self.objectData.type].height;\n        } catch (e) {\n          dimensions.objectHeight = _self.settings.height || dimensions.objectHeight;\n        }\n        dimensions.maxHeight = null;\n      }\n      if ($object.attr(_self._prefixAttributeName('max-height'))) {\n        dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'));\n      }\n      _self._adjustDimensions($object, dimensions);\n    },\n    /**\r\n     * Adjusts the dimensions\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @param\t{object}\tdimensions\r\n     * @return\t{void}\r\n     */\n    _adjustDimensions: function ($object, dimensions) {\n      // Adjust width and height\n      $object.css({\n        'width': dimensions.objectWidth,\n        'height': dimensions.objectHeight,\n        'max-width': dimensions.maxWidth,\n        'max-height': dimensions.maxHeight\n      });\n      _self.objects.contentInner.css({\n        'width': $object.outerWidth(),\n        'height': $object.outerHeight(),\n        'max-width': '100%'\n      });\n      _self.objects.case.css({\n        'width': _self.objects.contentInner.outerWidth(),\n        'max-width': '100%'\n      });\n\n      // Adjust margin\n      _self.objects.case.css({\n        'margin-top': parseInt(-(_self.objects.case.outerHeight() / 2)),\n        'margin-left': parseInt(-(_self.objects.case.outerWidth() / 2))\n      });\n    },\n    /**\r\n     * Handles the _loading\r\n     *\r\n     * @param\t{string}\tprocess\r\n     * @return\t{void}\r\n     */\n    _loading: function (process) {\n      if (process === 'start') {\n        _self.objects.case.addClass(_self.settings.classPrefix + 'loading');\n        _self.objects.loading.show();\n      } else if (process === 'end') {\n        _self.objects.case.removeClass(_self.settings.classPrefix + 'loading');\n        _self.objects.loading.hide();\n      }\n    },\n    /**\r\n     * Gets the client screen dimensions\r\n     *\r\n     * @return\t{object}\tdimensions\r\n     */\n    getViewportDimensions: function () {\n      return {\n        windowWidth: $(window).innerWidth(),\n        windowHeight: $(window).innerHeight()\n      };\n    },\n    /**\r\n     * Verifies the url\r\n     *\r\n     * @param\t{string}\tdataUrl\r\n     * @return\t{object}\tdataUrl\tClean url for processing content\r\n     */\n    _verifyDataUrl: function (dataUrl) {\n      if (!dataUrl || dataUrl === undefined || dataUrl === '') {\n        return false;\n      }\n      if (dataUrl.indexOf('#') > -1) {\n        dataUrl = dataUrl.split('#');\n        dataUrl = '#' + dataUrl[dataUrl.length - 1];\n      }\n      return _self._normalizeUrl(dataUrl.toString());\n    },\n    //\n    /**\r\n     * Tries to get the (file) suffix of an url\r\n     *\r\n     * @param\t{string}\turl\r\n     * @return\t{string}\r\n     */\n    _getFileUrlSuffix: function (url) {\n      var re = /(?:\\.([^.]+))?$/;\n      return re.exec(url.toLowerCase())[1];\n    },\n    /**\r\n     * Verifies the data type of the content to load\r\n     *\r\n     * @param\t{string}\t\t\turl\r\n     * @return\t{string|boolean}\tArray key if expression matched, else false\r\n     */\n    _verifyDataType: function (url) {\n      var typeMapping = _self.settings.typeMapping;\n\n      // Early abort if dataUrl couldn't be verified\n      if (!url) {\n        return false;\n      }\n\n      // Verify the dataType of url according to typeMapping which\n      // has been defined in settings.\n      for (var key in typeMapping) {\n        if (typeMapping.hasOwnProperty(key)) {\n          var suffixArr = typeMapping[key].split(',');\n          for (var i = 0; i < suffixArr.length; i++) {\n            var suffix = suffixArr[i].toLowerCase(),\n              regexp = new RegExp('\\.(' + suffix + ')$', 'i'),\n              str = url.toLowerCase().split('?')[0].substr(-5);\n            if (regexp.test(str) === true || key === 'inline' && url.indexOf(suffix) > -1) {\n              return key;\n            }\n          }\n        }\n      }\n\n      // If no expression matched, return 'iframe'.\n      return 'iframe';\n    },\n    /**\r\n     * Extends html markup with the essential tags\r\n     *\r\n     * @return\t{void}\r\n     */\n    _addElements: function () {\n      if (typeof _self.objects.case !== 'undefined' && $('#' + _self.objects.case.attr('id')).length) {\n        return;\n      }\n      _self.settings.markup();\n    },\n    /**\r\n     * Shows the loaded content\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{void}\r\n     */\n    _showContent: function ($object) {\n      // Add data attribute with the object type\n      _self.objects.document.attr(_self._prefixAttributeName('type'), _self.objectData.type);\n      _self.cache.object = $object;\n\n      // Call onBeforeShow hook functions\n      _self._callHooks(_self.settings.onBeforeShow);\n      if (_self.settings.breakBeforeShow) return;\n      _self.show();\n    },\n    /**\r\n     * Starts the 'inTransition'\r\n     * @return\t{void}\r\n     */\n    _startInTransition: function () {\n      switch (_self.transition.in()) {\n        case 'scrollTop':\n        case 'scrollRight':\n        case 'scrollBottom':\n        case 'scrollLeft':\n        case 'scrollHorizontal':\n        case 'scrollVertical':\n          _self.transition.scroll(_self.objects.case, 'in', _self.settings.speedIn);\n          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);\n          break;\n        case 'elastic':\n          if (_self.objects.case.css('opacity') < 1) {\n            _self.transition.zoom(_self.objects.case, 'in', _self.settings.speedIn);\n            _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);\n          }\n        case 'fade':\n        case 'fadeInline':\n          _self.transition.fade(_self.objects.case, 'in', _self.settings.speedIn);\n          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);\n          break;\n        default:\n          _self.transition.fade(_self.objects.case, 'in', 0);\n          break;\n      }\n\n      // End loading.\n      _self._loading('end');\n      _self.isBusy = false;\n\n      // Set index of the first item opened\n      if (!_self.cache.firstOpened) {\n        _self.cache.firstOpened = _self.objectData.this;\n      }\n\n      // Fade in the info with delay\n      _self.objects.info.hide();\n      setTimeout(function () {\n        _self.transition.fade(_self.objects.info, 'in', _self.settings.speedIn);\n      }, _self.settings.speedIn);\n\n      // Call onFinish hook functions\n      _self._callHooks(_self.settings.onFinish);\n    },\n    /**\r\n     * Processes the content to show\r\n     *\r\n     * @return\t{void}\r\n     */\n    _processContent: function () {\n      _self.isBusy = true;\n\n      // Fade out the info at first\n      _self.transition.fade(_self.objects.info, 'out', 0);\n      switch (_self.settings.transitionOut) {\n        case 'scrollTop':\n        case 'scrollRight':\n        case 'scrollBottom':\n        case 'scrollLeft':\n        case 'scrollVertical':\n        case 'scrollHorizontal':\n          if (_self.objects.case.is(':hidden')) {\n            _self.transition.fade(_self.objects.contentInner, 'out', 0);\n            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {\n              _self._loadContent();\n            });\n          } else {\n            _self.transition.scroll(_self.objects.case, 'out', _self.settings.speedOut, function () {\n              _self._loadContent();\n            });\n          }\n          break;\n        case 'fade':\n          if (_self.objects.case.is(':hidden')) {\n            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {\n              _self._loadContent();\n            });\n          } else {\n            _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {\n              _self._loadContent();\n            });\n          }\n          break;\n        case 'fadeInline':\n        case 'elastic':\n          if (_self.objects.case.is(':hidden')) {\n            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {\n              _self._loadContent();\n            });\n          } else {\n            _self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function () {\n              _self._loadContent();\n            });\n          }\n          break;\n        default:\n          _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {\n            _self._loadContent();\n          });\n          break;\n      }\n    },\n    /**\r\n     * Handles events for gallery buttons\r\n     *\r\n     * @return\t{void}\r\n     */\n    _handleEvents: function () {\n      _self._unbindEvents();\n      _self.objects.nav.children().not(_self.objects.close).hide();\n\n      // If slideshow is enabled, show play/pause and start timeout.\n      if (_self.isSlideshowEnabled()) {\n        // Only start the timeout if slideshow autostart is enabled and slideshow is not pausing\n        if ((_self.settings.slideshowAutoStart === true || _self.isSlideshowStarted) && !_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')) {\n          _self._startTimeout();\n        } else {\n          _self._stopTimeout();\n        }\n      }\n      if (_self.settings.liveResize) {\n        _self._watchResizeInteraction();\n      }\n      _self.objects.close.click(function (event) {\n        event.preventDefault();\n        _self.close();\n      });\n      if (_self.settings.closeOnOverlayClick === true) {\n        _self.objects.overlay.css('cursor', 'pointer').click(function (event) {\n          event.preventDefault();\n          _self.close();\n        });\n      }\n      if (_self.settings.useKeys === true) {\n        _self._addKeyEvents();\n      }\n      if (_self.objectData.isPartOfSequence) {\n        _self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), true);\n        _self.objects.nav.data('items', _self._setNavigation());\n        _self.objects.prev.click(function (event) {\n          event.preventDefault();\n          if (_self.settings.navigateEndless === true || !_self.item.isFirst()) {\n            _self.objects.prev.unbind('click');\n            _self.cache.action = 'prev';\n            _self.objects.nav.data('items').prev.click();\n            if (_self.isSlideshowEnabled()) {\n              _self._stopTimeout();\n            }\n          }\n        });\n        _self.objects.next.click(function (event) {\n          event.preventDefault();\n          if (_self.settings.navigateEndless === true || !_self.item.isLast()) {\n            _self.objects.next.unbind('click');\n            _self.cache.action = 'next';\n            _self.objects.nav.data('items').next.click();\n            if (_self.isSlideshowEnabled()) {\n              _self._stopTimeout();\n            }\n          }\n        });\n        if (_self.isSlideshowEnabled()) {\n          _self.objects.play.click(function (event) {\n            event.preventDefault();\n            _self._startTimeout();\n          });\n          _self.objects.pause.click(function (event) {\n            event.preventDefault();\n            _self._stopTimeout();\n          });\n        }\n\n        // Enable swiping if activated\n        if (_self.settings.swipe === true) {\n          if ($.isPlainObject($.event.special.swipeleft)) {\n            _self.objects.case.on('swipeleft', function (event) {\n              event.preventDefault();\n              _self.objects.next.click();\n              if (_self.isSlideshowEnabled()) {\n                _self._stopTimeout();\n              }\n            });\n          }\n          if ($.isPlainObject($.event.special.swiperight)) {\n            _self.objects.case.on('swiperight', function (event) {\n              event.preventDefault();\n              _self.objects.prev.click();\n              if (_self.isSlideshowEnabled()) {\n                _self._stopTimeout();\n              }\n            });\n          }\n        }\n      }\n    },\n    /**\r\n     * Adds the key events\r\n     *\r\n     * @return\t{void}\r\n     */\n    _addKeyEvents: function () {\n      $(document).bind('keyup.lightcase', function (event) {\n        // Do nothing if lightcase is in process\n        if (_self.isBusy) {\n          return;\n        }\n        switch (event.keyCode) {\n          // Escape key\n          case 27:\n            _self.objects.close.click();\n            break;\n          // Backward key\n          case 37:\n            if (_self.objectData.isPartOfSequence) {\n              _self.objects.prev.click();\n            }\n            break;\n          // Forward key\n          case 39:\n            if (_self.objectData.isPartOfSequence) {\n              _self.objects.next.click();\n            }\n            break;\n        }\n      });\n    },\n    /**\r\n     * Starts the slideshow timeout\r\n     *\r\n     * @return\t{void}\r\n     */\n    _startTimeout: function () {\n      _self.isSlideshowStarted = true;\n      _self.objects.play.hide();\n      _self.objects.pause.show();\n      _self.cache.action = 'next';\n      _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');\n      _self.timeout = setTimeout(function () {\n        _self.objects.nav.data('items').next.click();\n      }, _self.settings.timeout);\n    },\n    /**\r\n     * Stops the slideshow timeout\r\n     *\r\n     * @return\t{void}\r\n     */\n    _stopTimeout: function () {\n      _self.objects.play.show();\n      _self.objects.pause.hide();\n      _self.objects.nav.addClass(_self.settings.classPrefix + 'paused');\n      clearTimeout(_self.timeout);\n    },\n    /**\r\n     * Sets the navigator buttons (prev/next)\r\n     *\r\n     * @return\t{object}\titems\r\n     */\n    _setNavigation: function () {\n      var $links = $(_self.cache.selector || _self.settings.attr),\n        sequenceLength = _self.objectData.sequenceLength - 1,\n        items = {\n          prev: $links.eq(_self.objectData.prevIndex),\n          next: $links.eq(_self.objectData.nextIndex)\n        };\n      if (_self.objectData.currentIndex > 0) {\n        _self.objects.prev.show();\n      } else {\n        items.prevItem = $links.eq(sequenceLength);\n      }\n      if (_self.objectData.nextIndex <= sequenceLength) {\n        _self.objects.next.show();\n      } else {\n        items.next = $links.eq(0);\n      }\n      if (_self.settings.navigateEndless === true) {\n        _self.objects.prev.show();\n        _self.objects.next.show();\n      }\n      return items;\n    },\n    /**\r\n     * Item information/status\r\n     *\r\n     */\n    item: {\n      /**\r\n       * Verifies if the current item is first item.\r\n       *\r\n       * @return\t{boolean}\r\n       */\n      isFirst: function () {\n        return _self.objectData.currentIndex === 0;\n      },\n      /**\r\n       * Verifies if the current item is first item opened.\r\n       *\r\n       * @return\t{boolean}\r\n       */\n      isFirstOpened: function () {\n        return _self.objectData.this.is(_self.cache.firstOpened);\n      },\n      /**\r\n       * Verifies if the current item is last item.\r\n       *\r\n       * @return\t{boolean}\r\n       */\n      isLast: function () {\n        return _self.objectData.currentIndex === _self.objectData.sequenceLength - 1;\n      }\n    },\n    /**\r\n     * Clones the object for inline elements\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{object}\t$clone\r\n     */\n    _cloneObject: function ($object) {\n      var $clone = $object.clone(),\n        objectId = $object.attr('id');\n\n      // If element is hidden, cache the object and remove\n      if ($object.is(':hidden')) {\n        _self._cacheObjectData($object);\n        $object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty();\n      } else {\n        // Prevent duplicated id's\n        $clone.removeAttr('id');\n      }\n      return $clone.show();\n    },\n    /**\r\n     * Verifies if it is a mobile device\r\n     *\r\n     * @return\t{boolean}\r\n     */\n    isMobileDevice: function () {\n      var deviceAgent = navigator.userAgent.toLowerCase(),\n        agentId = deviceAgent.match(_self.settings.mobileMatchExpression);\n      return agentId ? true : false;\n    },\n    /**\r\n     * Verifies if css transitions are supported\r\n     *\r\n     * @return\t{string|boolean}\tThe transition prefix if supported, else false.\r\n     */\n    isTransitionSupported: function () {\n      var body = _self.objects.body.get(0),\n        isTransitionSupported = false,\n        transitionMapping = {\n          'transition': '',\n          'WebkitTransition': '-webkit-',\n          'MozTransition': '-moz-',\n          'OTransition': '-o-',\n          'MsTransition': '-ms-'\n        };\n      for (var key in transitionMapping) {\n        if (transitionMapping.hasOwnProperty(key) && key in body.style) {\n          _self.support.transition = transitionMapping[key];\n          isTransitionSupported = true;\n        }\n      }\n      return isTransitionSupported;\n    },\n    /**\r\n     * Transition types\r\n     *\r\n     */\n    transition: {\n      /**\r\n       * Returns the correct transition type according to the status of interaction.\r\n       *\r\n       * @return\t{string}\tTransition type\r\n       */\n      in: function () {\n        if (_self.settings.transitionOpen && !_self.cache.firstOpened) {\n          return _self.settings.transitionOpen;\n        }\n        return _self.settings.transitionIn;\n      },\n      /**\r\n       * Fades in/out the object\r\n       *\r\n       * @param\t{object}\t$object\r\n       * @param\t{string}\ttype\r\n       * @param\t{number}\tspeed\r\n       * @param\t{number}\topacity\r\n       * @param\t{function}\tcallback\r\n       * @return\t{void}\t\tAnimates an object\r\n       */\n      fade: function ($object, type, speed, opacity, callback) {\n        var isInTransition = type === 'in',\n          startTransition = {},\n          startOpacity = $object.css('opacity'),\n          endTransition = {},\n          endOpacity = opacity ? opacity : isInTransition ? 1 : 0;\n        if (!_self.isOpen && isInTransition) return;\n        startTransition['opacity'] = startOpacity;\n        endTransition['opacity'] = endOpacity;\n        $object.css(_self.support.transition + 'transition', 'none');\n        $object.css(startTransition).show();\n\n        // Css transition\n        if (_self.support.transitions) {\n          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';\n          setTimeout(function () {\n            $object.css(endTransition);\n            setTimeout(function () {\n              $object.css(_self.support.transition + 'transition', '');\n              if (callback && (_self.isOpen || !isInTransition)) {\n                callback();\n              }\n            }, speed);\n          }, 15);\n        } else {\n          // Fallback to js transition\n          $object.stop();\n          $object.animate(endTransition, speed, callback);\n        }\n      },\n      /**\r\n       * Scrolls in/out the object\r\n       *\r\n       * @param\t{object}\t$object\r\n       * @param\t{string}\ttype\r\n       * @param\t{number}\tspeed\r\n       * @param\t{function}\tcallback\r\n       * @return\t{void}\t\tAnimates an object\r\n       */\n      scroll: function ($object, type, speed, callback) {\n        var isInTransition = type === 'in',\n          transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,\n          direction = 'left',\n          startTransition = {},\n          startOpacity = isInTransition ? 0 : 1,\n          startOffset = isInTransition ? '-50%' : '50%',\n          endTransition = {},\n          endOpacity = isInTransition ? 1 : 0,\n          endOffset = isInTransition ? '50%' : '-50%';\n        if (!_self.isOpen && isInTransition) return;\n        switch (transition) {\n          case 'scrollTop':\n            direction = 'top';\n            break;\n          case 'scrollRight':\n            startOffset = isInTransition ? '150%' : '50%';\n            endOffset = isInTransition ? '50%' : '150%';\n            break;\n          case 'scrollBottom':\n            direction = 'top';\n            startOffset = isInTransition ? '150%' : '50%';\n            endOffset = isInTransition ? '50%' : '150%';\n            break;\n          case 'scrollHorizontal':\n            startOffset = isInTransition ? '150%' : '50%';\n            endOffset = isInTransition ? '50%' : '-50%';\n            break;\n          case 'scrollVertical':\n            direction = 'top';\n            startOffset = isInTransition ? '-50%' : '50%';\n            endOffset = isInTransition ? '50%' : '150%';\n            break;\n        }\n        if (_self.cache.action === 'prev') {\n          switch (transition) {\n            case 'scrollHorizontal':\n              startOffset = isInTransition ? '-50%' : '50%';\n              endOffset = isInTransition ? '50%' : '150%';\n              break;\n            case 'scrollVertical':\n              startOffset = isInTransition ? '150%' : '50%';\n              endOffset = isInTransition ? '50%' : '-50%';\n              break;\n          }\n        }\n        startTransition['opacity'] = startOpacity;\n        startTransition[direction] = startOffset;\n        endTransition['opacity'] = endOpacity;\n        endTransition[direction] = endOffset;\n        $object.css(_self.support.transition + 'transition', 'none');\n        $object.css(startTransition).show();\n\n        // Css transition\n        if (_self.support.transitions) {\n          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';\n          setTimeout(function () {\n            $object.css(endTransition);\n            setTimeout(function () {\n              $object.css(_self.support.transition + 'transition', '');\n              if (callback && (_self.isOpen || !isInTransition)) {\n                callback();\n              }\n            }, speed);\n          }, 15);\n        } else {\n          // Fallback to js transition\n          $object.stop();\n          $object.animate(endTransition, speed, callback);\n        }\n      },\n      /**\r\n       * Zooms in/out the object\r\n       *\r\n       * @param\t{object}\t$object\r\n       * @param\t{string}\ttype\r\n       * @param\t{number}\tspeed\r\n       * @param\t{function}\tcallback\r\n       * @return\t{void}\t\tAnimates an object\r\n       */\n      zoom: function ($object, type, speed, callback) {\n        var isInTransition = type === 'in',\n          startTransition = {},\n          startOpacity = $object.css('opacity'),\n          startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',\n          endTransition = {},\n          endOpacity = isInTransition ? 1 : 0,\n          endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';\n        if (!_self.isOpen && isInTransition) return;\n        startTransition['opacity'] = startOpacity;\n        startTransition[_self.support.transition + 'transform'] = startScale;\n        endTransition['opacity'] = endOpacity;\n        $object.css(_self.support.transition + 'transition', 'none');\n        $object.css(startTransition).show();\n\n        // Css transition\n        if (_self.support.transitions) {\n          endTransition[_self.support.transition + 'transform'] = endScale;\n          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';\n          setTimeout(function () {\n            $object.css(endTransition);\n            setTimeout(function () {\n              $object.css(_self.support.transition + 'transform', '');\n              $object.css(_self.support.transition + 'transition', '');\n              if (callback && (_self.isOpen || !isInTransition)) {\n                callback();\n              }\n            }, speed);\n          }, 15);\n        } else {\n          // Fallback to js transition\n          $object.stop();\n          $object.animate(endTransition, speed, callback);\n        }\n      }\n    },\n    /**\r\n     * Calls all the registered functions of a specific hook\r\n     *\r\n     * @param\t{object}\thooks\r\n     * @return\t{void}\r\n     */\n    _callHooks: function (hooks) {\n      if (typeof hooks === 'object') {\n        $.each(hooks, function (index, hook) {\n          if (typeof hook === 'function') {\n            hook.call(_self.origin);\n          }\n        });\n      }\n    },\n    /**\r\n     * Caches the object data\r\n     *\r\n     * @param\t{object}\t$object\r\n     * @return\t{void}\r\n     */\n    _cacheObjectData: function ($object) {\n      $.data($object, 'cache', {\n        id: $object.attr('id'),\n        content: $object.html()\n      });\n      _self.cache.originalObject = $object;\n    },\n    /**\r\n     * Restores the object from cache\r\n     *\r\n     * @return\tvoid\r\n     */\n    _restoreObject: function () {\n      var $object = $('[id^=\"' + _self.settings.idPrefix + 'temp-\"]');\n      $object.attr('id', $.data(_self.cache.originalObject, 'cache').id);\n      $object.html($.data(_self.cache.originalObject, 'cache').content);\n    },\n    /**\r\n     * Executes functions for a window resize.\r\n     * It stops an eventual timeout and recalculates dimensions.\r\n     *\r\n     * @param\t{object}\tdimensions\r\n     * @return\t{void}\r\n     */\n    resize: function (event, dimensions) {\n      if (!_self.isOpen) return;\n      if (_self.isSlideshowEnabled()) {\n        _self._stopTimeout();\n      }\n      if (typeof dimensions === 'object' && dimensions !== null) {\n        if (dimensions.width) {\n          _self.cache.object.attr(_self._prefixAttributeName('width'), dimensions.width);\n        }\n        if (dimensions.maxWidth) {\n          _self.cache.object.attr(_self._prefixAttributeName('max-width'), dimensions.maxWidth);\n        }\n        if (dimensions.height) {\n          _self.cache.object.attr(_self._prefixAttributeName('height'), dimensions.height);\n        }\n        if (dimensions.maxHeight) {\n          _self.cache.object.attr(_self._prefixAttributeName('max-height'), dimensions.maxHeight);\n        }\n      }\n      _self.dimensions = _self.getViewportDimensions();\n      _self._calculateDimensions(_self.cache.object);\n\n      // Call onResize hook functions\n      _self._callHooks(_self.settings.onResize);\n    },\n    /**\r\n     * Watches for any resize interaction and caches the new sizes.\r\n     *\r\n     * @return\t{void}\r\n     */\n    _watchResizeInteraction: function () {\n      $(window).resize(_self.resize);\n    },\n    /**\r\n     * Stop watching any resize interaction related to _self.\r\n     *\r\n     * @return\t{void}\r\n     */\n    _unwatchResizeInteraction: function () {\n      $(window).off('resize', _self.resize);\n    },\n    /**\r\n     * Switches to the fullscreen mode\r\n     *\r\n     * @return\t{void}\r\n     */\n    _switchToFullScreenMode: function () {\n      _self.settings.shrinkFactor = 1;\n      _self.settings.overlayOpacity = 1;\n      $('html').addClass(_self.settings.classPrefix + 'fullScreenMode');\n    },\n    /**\r\n     * Enters into the lightcase view\r\n     *\r\n     * @return\t{void}\r\n     */\n    _open: function () {\n      _self.isOpen = true;\n      _self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : false;\n      _self.support.mobileDevice = _self.isMobileDevice();\n      if (_self.support.mobileDevice) {\n        $('html').addClass(_self.settings.classPrefix + 'isMobileDevice');\n        if (_self.settings.fullScreenModeForMobile) {\n          _self._switchToFullScreenMode();\n        }\n      }\n      if (!_self.settings.transitionIn) {\n        _self.settings.transitionIn = _self.settings.transition;\n      }\n      if (!_self.settings.transitionOut) {\n        _self.settings.transitionOut = _self.settings.transition;\n      }\n      switch (_self.transition.in()) {\n        case 'fade':\n        case 'fadeInline':\n        case 'elastic':\n        case 'scrollTop':\n        case 'scrollRight':\n        case 'scrollBottom':\n        case 'scrollLeft':\n        case 'scrollVertical':\n        case 'scrollHorizontal':\n          if (_self.objects.case.is(':hidden')) {\n            _self.objects.close.css('opacity', 0);\n            _self.objects.overlay.css('opacity', 0);\n            _self.objects.case.css('opacity', 0);\n            _self.objects.contentInner.css('opacity', 0);\n          }\n          _self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function () {\n            _self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);\n            _self._handleEvents();\n            _self._processContent();\n          });\n          break;\n        default:\n          _self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function () {\n            _self.transition.fade(_self.objects.close, 'in', 0);\n            _self._handleEvents();\n            _self._processContent();\n          });\n          break;\n      }\n      _self.objects.document.addClass(_self.settings.classPrefix + 'open');\n      _self.objects.case.attr('aria-hidden', 'false');\n    },\n    /**\r\n     * Shows the lightcase by starting the transition\r\n     */\n    show: function () {\n      // Call onCalculateDimensions hook functions\n      _self._callHooks(_self.settings.onBeforeCalculateDimensions);\n      _self._calculateDimensions(_self.cache.object);\n\n      // Call onAfterCalculateDimensions hook functions\n      _self._callHooks(_self.settings.onAfterCalculateDimensions);\n      _self._startInTransition();\n    },\n    /**\r\n     * Escapes from the lightcase view\r\n     *\r\n     * @return\t{void}\r\n     */\n    close: function () {\n      _self.isOpen = false;\n      if (_self.isSlideshowEnabled()) {\n        _self._stopTimeout();\n        _self.isSlideshowStarted = false;\n        _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');\n      }\n      _self.objects.loading.hide();\n      _self._unbindEvents();\n      _self._unwatchResizeInteraction();\n      $('html').removeClass(_self.settings.classPrefix + 'open');\n      _self.objects.case.attr('aria-hidden', 'true');\n      _self.objects.nav.children().hide();\n      _self.objects.close.hide();\n\n      // Call onClose hook functions\n      _self._callHooks(_self.settings.onClose);\n\n      // Fade out the info at first\n      _self.transition.fade(_self.objects.info, 'out', 0);\n      switch (_self.settings.transitionClose || _self.settings.transitionOut) {\n        case 'fade':\n        case 'fadeInline':\n        case 'scrollTop':\n        case 'scrollRight':\n        case 'scrollBottom':\n        case 'scrollLeft':\n        case 'scrollHorizontal':\n        case 'scrollVertical':\n          _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {\n            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {\n              _self.cleanup();\n            });\n          });\n          break;\n        case 'elastic':\n          _self.transition.zoom(_self.objects.case, 'out', _self.settings.speedOut, function () {\n            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {\n              _self.cleanup();\n            });\n          });\n          break;\n        default:\n          _self.cleanup();\n          break;\n      }\n    },\n    /**\r\n     * Unbinds all given events\r\n     *\r\n     * @return\t{void}\r\n     */\n    _unbindEvents: function () {\n      // Unbind overlay event\n      _self.objects.overlay.unbind('click');\n\n      // Unbind key events\n      $(document).unbind('keyup.lightcase');\n\n      // Unbind swipe events\n      _self.objects.case.unbind('swipeleft').unbind('swiperight');\n\n      // Unbind navigator events\n      _self.objects.prev.unbind('click');\n      _self.objects.next.unbind('click');\n      _self.objects.play.unbind('click');\n      _self.objects.pause.unbind('click');\n\n      // Unbind close event\n      _self.objects.close.unbind('click');\n    },\n    /**\r\n     * Cleans up the dimensions\r\n     *\r\n     * @return\t{void}\r\n     */\n    _cleanupDimensions: function () {\n      var opacity = _self.objects.contentInner.css('opacity');\n      _self.objects.case.css({\n        'width': '',\n        'height': '',\n        'top': '',\n        'left': '',\n        'margin-top': '',\n        'margin-left': ''\n      });\n      _self.objects.contentInner.removeAttr('style').css('opacity', opacity);\n      _self.objects.contentInner.children().removeAttr('style');\n    },\n    /**\r\n     * Cleanup after aborting lightcase\r\n     *\r\n     * @return\t{void}\r\n     */\n    cleanup: function () {\n      _self._cleanupDimensions();\n      _self.objects.loading.hide();\n      _self.objects.overlay.hide();\n      _self.objects.case.hide();\n      _self.objects.prev.hide();\n      _self.objects.next.hide();\n      _self.objects.play.hide();\n      _self.objects.pause.hide();\n      _self.objects.document.removeAttr(_self._prefixAttributeName('type'));\n      _self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));\n      _self.objects.contentInner.empty().hide();\n      _self.objects.info.children().empty();\n      if (_self.cache.originalObject) {\n        _self._restoreObject();\n      }\n\n      // Call onCleanup hook functions\n      _self._callHooks(_self.settings.onCleanup);\n\n      // Restore cache\n      _self.cache = {};\n    },\n    /**\r\n     * Returns the supported match media or undefined if the browser\r\n     * doesn't support match media.\r\n     *\r\n     * @return\t{mixed}\r\n     */\n    _matchMedia: function () {\n      return window.matchMedia || window.msMatchMedia;\n    },\n    /**\r\n     * Returns the devicePixelRatio if supported. Else, it simply returns\r\n     * 1 as the default.\r\n     *\r\n     * @return\t{number}\r\n     */\n    _devicePixelRatio: function () {\n      return window.devicePixelRatio || 1;\n    },\n    /**\r\n     * Checks if method is public\r\n     *\r\n     * @return\t{boolean}\r\n     */\n    _isPublicMethod: function (method) {\n      return typeof _self[method] === 'function' && method.charAt(0) !== '_';\n    },\n    /**\r\n     * Exports all public methods to be accessible, callable\r\n     * from global scope.\r\n     *\r\n     * @return\t{void}\r\n     */\n    _export: function () {\n      window.lightcase = {};\n      $.each(_self, function (property) {\n        if (_self._isPublicMethod(property)) {\n          lightcase[property] = _self[property];\n        }\n      });\n    }\n  };\n  _self._export();\n  $.fn.lightcase = function (method) {\n    // Method calling logic (only public methods are applied)\n    if (_self._isPublicMethod(method)) {\n      return _self[method].apply(this, Array.prototype.slice.call(arguments, 1));\n    } else if (typeof method === 'object' || !method) {\n      return _self.init.apply(this, arguments);\n    } else {\n      $.error('Method ' + method + ' does not exist on jQuery.lightcase');\n    }\n  };\n})(jQuery);\n\n//# sourceURL=webpack://united-group/./src/scripts/lightcase.js?"
      );
    },
    /*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
    "./src/scripts/theme.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/theme.scss */ "./src/styles/theme.scss");\n/* harmony import */ var _scripts_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/imagesloaded.pkgd.min.js */ "./src/scripts/imagesloaded.pkgd.min.js");\n/* harmony import */ var _scripts_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_lightcase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/lightcase.js */ "./src/scripts/lightcase.js");\n/* harmony import */ var _scripts_lightcase_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_lightcase_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_jquery_counterup_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/jquery.counterup.min.js */ "./src/scripts/jquery.counterup.min.js");\n/* harmony import */ var _scripts_jquery_counterup_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_jquery_counterup_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");\n\n// import "../scripts/anime.min.js";\n\n\n\n\n\n(function ($) {\n  "use strict";\n\n  $(document).ready(function () {\n    (function () {\n      const UG_APPLICATION_SUBMITS = document.querySelectorAll(".ug-application-submit");\n      UG_APPLICATION_SUBMITS.forEach(submit => {\n        const ug_input = submit.querySelector("input");\n        const ug_button = submit.querySelector("button");\n        ug_button.addEventListener("click", e => {\n          e.preventDefault();\n          ug_input.click();\n        });\n      });\n    })();\n    $("a[data-rel^=lightcase]").lightcase({\n      maxWidth: 1920,\n      maxHeight: 1080\n    });\n    var wow = new WOW({\n      boxClass: "wow",\n      // animated element css class (default is wow)\n      animateClass: "animated",\n      // animation css class (default is animated)\n      offset: 0,\n      // distance to the element when triggering the animation (default is 0)\n      mobile: true,\n      // trigger animations on mobile devices (default is true)\n      live: true,\n      // act on asynchronously loaded content (default is true)\n      callback: function (box) {\n        // the callback is fired every time an animation is started\n        // the argument that is passed in is the DOM node being animated\n      },\n      scrollContainer: null // optional scroll container selector, otherwise use window\n    });\n\n    wow.init();\n    $(".animated-countdown").counterUp({\n      delay: 10,\n      time: 1000\n    });\n\n    // Banner Hero Slider\n    const hero = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".hero--banner-slider", {\n      slidesPerView: 1,\n      effect: "fade",\n      loop: true,\n      autoplay: {\n        delay: 5500,\n        disableOnInteraction: false\n      },\n      pagination: {\n        el: ".swiper-pagination",\n        type: "fraction"\n      },\n      navigation: {\n        nextEl: ".banner-slide-next-btn",\n        prevEl: ".banner-slide-prev-btn"\n      }\n    });\n\n    // Operation Section Slider\n    const operation = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".operation-slider", {\n      slidesPerView: 1,\n      autoHeight: true,\n      //enable auto height\n      loop: true,\n      effect: "fade",\n      fadeEffect: {\n        crossFade: true\n      },\n      virtualTranslate: true,\n      navigation: {\n        nextEl: "#operation .navigation .next",\n        prevEl: "#operation .navigation .prev"\n      }\n    });\n\n    // Blog Section Slider\n    const blog = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".blog-container", {\n      slidesPerView: 2,\n      loop: true,\n      spaceBetween: 30,\n      navigation: {\n        nextEl: "#blog-slider .navigation .next",\n        prevEl: "#blog-slider .navigation .prev"\n      },\n      breakpoints: {\n        // when window width is >= 320px\n        200: {\n          slidesPerView: 1,\n          spaceBetween: 15\n        },\n        // when window width is >= 480px\n        480: {\n          slidesPerView: 1,\n          spaceBetween: 15\n        },\n        // when window width is >= 640px\n        640: {\n          slidesPerView: 3,\n          spaceBetween: 25\n        }\n      }\n    });\n\n    // Awrds Section Slider\n    const awrds = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".awards-main", {\n      slidesPerView: 3,\n      loop: true,\n      spaceBetween: 30,\n      navigation: {\n        nextEl: "#awards .navigation .next",\n        prevEl: "#awards .navigation .prev"\n      },\n      breakpoints: {\n        // when window width is >= 320px\n        200: {\n          slidesPerView: 1,\n          spaceBetween: 15\n        },\n        // when window width is >= 480px\n        480: {\n          slidesPerView: 1,\n          spaceBetween: 15\n        },\n        // when window width is >= 640px\n        640: {\n          slidesPerView: 2,\n          spaceBetween: 25\n        },\n        1200: {\n          slidesPerView: 3,\n          spaceBetween: 30\n        }\n      }\n    });\n    awrds.pagination.destroy();\n    // Image carosel Slider\n\n    const imageCarousel = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".myCarouselSwiper", {\n      slidesPerView: "auto",\n      autoplay: true,\n      loop: true,\n      navigation: {\n        nextEl: "#carousel-image-slider .navigation .next",\n        prevEl: "#carousel-image-slider .navigation .prev"\n      }\n    });\n    const fullWidthImage = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"]("#full-single-image .mySwiper", {\n      navigation: {\n        nextEl: "#full-single-image .banner-slide-next-btn",\n        prevEl: "#full-single-image .banner-slide-prev-btn"\n      }\n    });\n\n    // Timeline Slder\n    // For Mobile Alternative Slide Config\n    var mobileLg = window.matchMedia("(max-width: 1200px)");\n    if (mobileLg.matches) {\n      var mswiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".m-slider-archive", {\n        slidesPerView: 3,\n        observer: true,\n        observeParents: true,\n        centeredSlides: true,\n        slideToClickedSlide: true,\n        loop: true,\n        autoplay: {\n          delay: 3000,\n          disableOnInteraction: true\n        }\n      });\n      mswiper.on("slideChangeTransitionStart", function (swipe) {\n        //  mobile config\n        mswiper.autoplay.stop(); // autoplay stop event\n        var id = $("#slider-archive .m-slider-archive .swiper-slide-active .item-of-year").attr("data-year");\n        const itemYear = id;\n        console.log("<<< item year " + itemYear);\n        -slideItem(mswiper.activeIndex);\n        swiper2.removeAllSlides();\n        $.ajax({\n          method: "POST",\n          url: urls.adminAjax,\n          // dataType: "json",\n          data: {\n            method: "POST",\n            action: "get_slider_body",\n            id: itemYear\n          },\n          beforeSend: function () {},\n          success: function (res) {\n            swiper2.appendSlide(res);\n            var item = $(".carousel_container2 .swiper-slide").length;\n            console.log("slider lenth >> " + item);\n            if (item == 1) {\n              $("#slider-archive .navigation").css("opacity", 0);\n            } else {\n              $("#slider-archive .navigation").css("opacity", 1);\n              // var timelineContentHeight = $(\n              // \t\'#slider-archive .content\'\n              // ).outerHeight();\n              // console.log(timelineContentHeight);\n              // $(\'#slider-archive .navigation\').css(\n              // \t\'top\',\n              // \ttimelineContentHeight + 40\n              // );\n            }\n          },\n\n          error: function (res) {}\n        });\n        return false;\n      });\n      // Content Box Slide Config\n      var swiper2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".carousel-two", {\n        effect: "slide",\n        centeredSlides: true,\n        simulateTouch: false,\n        allowTouchMove: false,\n        navigation: {\n          nextEl: "#slider-archive .for-mobile .navigation .next",\n          prevEl: "#slider-archive .for-mobile .navigation .prev"\n        }\n      });\n    }\n\n    // A $( document ).ready() block.\n    $(document).ready(function () {\n      // Desktop Dial Slider Config\n      const mq2 = window.matchMedia("(min-width: 1200px)");\n      if (mq2) {\n        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".carousel", {\n          effect: "coverflow",\n          spaceBetween: 0,\n          speed: 1000,\n          coverflowEffect: {\n            rotate: 0,\n            // Slide rotate in degrees\n            stretch: 0,\n            // Stretch space between slides (in px)\n            depth: 100,\n            // Depth offset in px (slides translate in Z axis)\n            modifier: 1,\n            // Effect multipler\n            slideShadows: false // Enables slides shadows\n          },\n\n          direction: "vertical",\n          slidesPerView: 4,\n          loop: true,\n          centeredSlides: true,\n          slideToClickedSlide: true,\n          mousewheel: {\n            invert: true\n          },\n          allowTouchMove: false,\n          autoplay: {\n            delay: 3000,\n            disableOnInteraction: false\n          },\n          breakpoints: {\n            // when window width is >= 640px\n          },\n          on: {\n            init: function (index) {\n              var activeId = index.activeIndex; // autoplay stop event\n              index.slideTo(activeId - 1);\n            }\n          }\n        });\n        swiper.on("slideChangeTransitionStart", function () {\n          swiper.autoplay.stop(); // autoplay stop event\n          var id = $(".carousel .swiper-slide-active").attr("data-year");\n          const itemYear = id;\n          -slideItem(swiper.activeIndex);\n          console.log("<<< item year Desktop " + itemYear);\n          swiper2.removeAllSlides();\n          clearTimeout();\n          setTimeout(function () {\n            $.ajax({\n              method: "POST",\n              cache: true,\n              url: urls.adminAjax,\n              // dataType: "json",\n              data: {\n                method: "POST",\n                action: "get_slider_body",\n                id: itemYear\n              },\n              beforeSend: function () {},\n              success: function (res) {\n                swiper2.appendSlide(res);\n                var item = $(".carousel_container2 .swiper-slide").length;\n                if (item == 1) {\n                  $("#slider-archive .navigation").css("opacity", 0);\n                } else {\n                  $("#slider-archive .navigation").css("opacity", 1);\n                }\n              },\n              error: function (res) {}\n            });\n          }, 500);\n        });\n      }\n\n      // Content Box Slide Config\n      var swiper2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".carousel-two", {\n        effect: "slide",\n        centeredSlides: true,\n        simulateTouch: false,\n        allowTouchMove: false,\n        navigation: {\n          nextEl: "#slider-archive .navigation .next",\n          prevEl: "#slider-archive .navigation .prev"\n        }\n      });\n    });\n\n    // Check Media\n    var x = window.matchMedia("(max-width: 520px)");\n    if (x.matches) {\n      $("br").remove();\n    }\n\n    // On hover mouse effect\n    $(".life-at .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".life-at .next").removeClass("active");\n    });\n    $(".life-at .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".life-at .prev").removeClass("active");\n    });\n    $(".carousel-slider-nav .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".carousel-slider-nav .next").removeClass("active");\n    });\n    $(".carousel-slider-nav .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".carousel-slider-nav .prev").removeClass("active");\n    });\n    $(".operation-nav .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".operation-nav .next").removeClass("active");\n    });\n    $(".operation-nav .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".operation-nav .prev").removeClass("active");\n    });\n    $(".banner-slide-prev-btn").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".banner-slide-next-btn").removeClass("active");\n    });\n    $(".banner-slide-next-btn").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".banner-slide-prev-btn").removeClass("active");\n    });\n    $(".with-items .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".with-items .next").removeClass("active");\n    });\n    $(".with-items .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".with-items .prev").removeClass("active");\n    });\n    $(".without-items .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".without-items .next").removeClass("active");\n    });\n    $(".without-items .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".without-items .prev").removeClass("active");\n    });\n    $(".carousel-two .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".carousel-two .next").removeClass("active");\n    });\n    $(".carousel-two .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $(".carousel-two .prev").removeClass("active");\n    });\n    $("#awards .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $("#awards .next").removeClass("active");\n    });\n    $("#awards .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $("#awards .prev").removeClass("active");\n    });\n    $("#slider-archive .prev").on("mouseover", function () {\n      $(this).addClass("active");\n      $("#slider-archive .next").removeClass("active");\n    });\n    $("#slider-archive .next").on("mouseover", function () {\n      $(this).addClass("active");\n      $("#slider-archive .prev").removeClass("active");\n    });\n    const mq = window.matchMedia("(min-width: 1200px)");\n    if (mq.matches) {\n      if ($("#operation h2").length !== 0) {\n        alignOffsetLeft("#operation h2", ".operation-slider");\n      }\n      // if ($("#blog-slider h2").length !== 0) {\n      //   alignOffsetLeft("#blog-slider h2", ".blog-container");\n      // }\n      if ($(".site-footer .row").length !== 0) {\n        alignOffsetLeft(".site-footer .row", ".custom-container");\n      }\n      if ($(".site-footer .row").length !== 0) {\n        alignOffsetLeft(".site-footer .row", ".residential-project .left-part .content");\n      }\n      if ($(".archive-year").length !== 0) {\n        alignOffsetLeft(".archive-year", ".circular-image");\n      }\n      if ($(".site-footer .row").length !== 0) {\n        alignOffsetLeft(".site-footer .row", "#generic-service .service-card");\n      }\n      if ($(".team h2").length !== 0) {\n        alignOffsetRight(".team h2", "#slider-archive .carousel-two");\n      }\n    }\n\n    // Get element postion left of body\n    function alignOffsetLeft(el, p) {\n      let element = $(el);\n      let elpostion = element.position().left;\n      // console.log(elpostion);\n      $(p).css("margin-left", elpostion);\n    }\n    function alignOffsetRight(el, p) {\n      let element = $(el);\n      let elpostion = element.position().left;\n      $(p).css("margin-right", elpostion);\n    }\n    const slideItem = sliderIndex => {\n      let itemContainer = document.querySelectorAll(".carousel_container");\n      let item = document.querySelectorAll(".carousel_slide");\n      clearEffects(item);\n      item.forEach((element, index) => {\n        let effect1 = sliderIndex - 3;\n        if (index === effect1) {\n          item[effect1].classList.add("effect1");\n        }\n        let effect2 = sliderIndex - 2;\n        if (index === effect2) {\n          item[effect2].classList.add("effect2");\n        }\n        let effect3 = sliderIndex - 1;\n        if (index === effect3) {\n          item[effect3].classList.add("effect3");\n        }\n        let effect4 = sliderIndex;\n        if (index === effect4) {\n          item[effect4].classList.add("effect4");\n        }\n        let effect5 = sliderIndex + 1;\n        if (index === effect5) {\n          item[effect5].classList.add("effect5");\n        }\n        let effect6 = sliderIndex + 2;\n        if (index === effect6) {\n          item[effect6].classList.add("effect6");\n        }\n        let effect7 = sliderIndex + 3;\n        if (index === effect7) {\n          item[effect7].classList.add("effect7");\n        }\n      });\n    };\n    const clearEffects = slides => {\n      for (let i = 0; i < slides.length; i++) {\n        slides[i].classList.remove("focus", "effect1", "effect2", "effect3", "effect4", "effect5", "effect6", "effect7", "effect7", "effect8", "effect9", "effect_hide", "animateTop", "animateBottom");\n      }\n    };\n\n    // Gallery Section\n\n    // Photo Gallery\n    const photogalleryNav = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".photo-gallery-nav-mobile .swiper", {\n      slidesPerView: "auto",\n      spaceBetween: 30,\n      loop: true,\n      slideToClickedSlide: true\n    });\n    photogalleryNav.on("slideChangeTransitionStart", function () {\n      const slug = $(".photo-gallery-nav-mobile .swiper-slide-active a").attr("data-category");\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        // dataType: "json",\n        data: {\n          method: "POST",\n          action: "get_cateogories_gallery",\n          slug: slug\n        },\n        beforeSend: function () {\n          $(".gallery").html("<p> Loading ..... </p>");\n        },\n        success: function (res) {\n          $(".gallery").html();\n          $(".gallery").html(res);\n        },\n        error: function (res) {}\n      });\n    });\n    const mediaCat = $(".photo-gallery-nav a");\n    mediaCat.on("click", function (e) {\n      e.preventDefault();\n      let that = $(this),\n        slug = that.attr("data-category");\n\n      // remove other item active and current item action\n      that.parent("li").siblings().find("a").removeClass("active");\n      that.addClass("active");\n\n      // remove other item active and current item action\n      that.parent(".swiper-slide").siblings().removeClass("swiper-slide-active");\n      that.parent(".swiper-slide").addClass("swiper-slide-active");\n      $(".gallery .row").remove(); // remove items\n\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        // dataType: "json",\n        data: {\n          method: "POST",\n          action: "get_cateogories_gallery",\n          slug: slug\n        },\n        beforeSend: function () {\n          $(".gallery").html("<p> Loading ..... </p>");\n        },\n        success: function (res) {\n          $(".gallery").html();\n          $(".gallery").html(res);\n        },\n        error: function (res) {}\n      });\n    });\n    $(".gallery").on("click", ".single-gallery-item", function (e) {\n      e.preventDefault();\n      let that = $(this),\n        id = that.attr("data-id");\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        // dataType: "json",\n        data: {\n          method: "POST",\n          action: "gallery_item",\n          id: id\n        },\n        beforeSend: function () {},\n        success: function (res) {\n          $("#animated-thumbnails").html(res);\n          $("#animated-thumbnails").lightGallery({\n            closable: false,\n            escKey: false\n          });\n          $("#animated-thumbnails a").trigger("click");\n          $(".lg-close").on("click", function (e) {\n            $("#animated-thumbnails").data("lightGallery").destroy(true);\n          });\n        },\n        error: function (res) {}\n      });\n    });\n    $("#animated-thumbnails").on("lgBeforeClose", function () {\n      console.log("close");\n    });\n    // Research & investor Cateories Tab\n    $(".research-nav-mobile").on("click", "a", function (e) {\n      e.preventDefault();\n      console.log("event");\n    });\n    const researchMobileNav = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".research-nav-mobile .swiper", {\n      slidesPerView: "auto",\n      spaceBetween: 30,\n      loop: true,\n      slideToClickedSlide: true\n    });\n    researchMobileNav.on("slideChangeTransitionStart", function () {\n      const activeItem = $(".research-nav-mobile .swiper-slide-active a").attr("data-target");\n      $(".accordion-item").each(function (index) {\n        var that = $(this);\n        var allIitem = that.attr("data-target");\n        if (activeItem !== allIitem) {\n          that.css("display", "none");\n        } else {\n          that.css("display", "block");\n        }\n      });\n    });\n    const ResearchCat = $(".research-nav-menu a");\n    ResearchCat.on("click", function (e) {\n      e.preventDefault();\n      let that = $(this),\n        activeItem = that.attr("data-target");\n      $(".accordion-item").each(function () {\n        var that = $(this);\n        var allIitem = that.attr("data-target");\n        if (activeItem !== allIitem) {\n          that.css("display", "none");\n        } else {\n          that.css("display", "block");\n        }\n      });\n\n      // remove other item active and current item action\n      that.parent("li").siblings().find("a").removeClass("active");\n      that.addClass("active");\n    });\n\n    // Accordion research investor\n\n    var activeItem = $(".research-nav-menu a.active").attr("data-target");\n    $(".accordion-item").each(function (index) {\n      var that = $(this);\n      var allIitem = that.attr("data-target");\n      if (activeItem !== allIitem) {\n        that.css("display", "none");\n      }\n    });\n    $("#research-accordion").on("click", ".accordion-item button", function (e) {\n      e.preventDefault();\n      console.log("event fire");\n      let that = $(this),\n        parent = that.parents(".accordion-item"),\n        button = parent.find(".accordion-button"),\n        collapse = parent.find(".accordion-collapse"),\n        accordionBody = parent.find(".accordion-body");\n      console.log({\n        parent\n      });\n\n      // Siblings\n      parent.siblings().find(".accordion-button").addClass("collapsed");\n      parent.siblings().find(".accordion-collapse").removeClass("show");\n      parent.siblings().find(".accordion-body").removeClass("animated fadeIn");\n      if (button.hasClass("collapsed") && collapse.not(".show")) {\n        button.removeClass("collapsed");\n        collapse.addClass("show");\n        accordionBody.addClass("animated fadeIn");\n      } else {\n        button.addClass("collapsed");\n        collapse.removeClass("show");\n        accordionBody.addClass("animated fadeIn");\n      }\n    });\n\n    // Cheif\n\n    const cheif = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".cheif-message-archive", {\n      slidesPerView: 1,\n      loop: true,\n      grabCursor: true,\n      paginationClickable: true,\n      slideToClickedSlide: true,\n      spaceBetween: 30,\n      breakpoints: {\n        // when window width is >= 640px\n        1200: {\n          slidesPerView: 1,\n          spaceBetween: 60\n        }\n      },\n      navigation: {\n        nextEl: ".cheif-button-next",\n        prevEl: ".cheif-button-prev"\n      }\n    });\n\n    // Service Slider\n    const genericSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".service-card", {\n      slidesPerView: "auto",\n      loop: true,\n      spaceBetween: 15,\n      pagination: {\n        el: ".swiper-pagination",\n        type: "progressbar"\n      },\n      navigation: {\n        nextEl: "#generic-service .icon-group .icon-next",\n        prevEl: "#generic-service .icon-group .icon-prev"\n      }\n    });\n    const cheif_content = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".cheif-message-content", {\n      effect: "fade",\n      simulateTouch: false,\n      allowTouchMove: false,\n      autoHeight: true,\n      fadeEffect: {\n        crossFade: true\n      },\n      on: {\n        init: function (el) {\n          const id = $(".cheif-message-archive .swiper-slide-active").attr("data-year");\n          const realIndex = $(".cheif-message-content .swiper-slide[data-target=" + id + "]").index();\n          el.slideTo(realIndex);\n        }\n      }\n    });\n    cheif.on("slideChangeTransitionStart", function () {\n      const id = $(".cheif-message-archive .swiper-slide-active").attr("data-year");\n      const realIndex = $(".cheif-message-content .swiper-slide[data-target=" + id + "]").index();\n      cheif_content.slideTo(realIndex);\n    });\n\n    // fixed menu\n    $(window).on("scroll", function () {\n      var scroll = $(window).scrollTop();\n      if (scroll >= 500) {\n        $(".to-top").addClass("fixed-totop");\n      } else {\n        $(".to-top").removeClass("fixed-totop");\n      }\n    });\n\n    // Image Slider\n    const IdSlider = $("#image-slider");\n    const isLoop = IdSlider.attr("data-loop");\n    var settingsImageSlider = {\n      // autoplay: {\n      // \tdelay: 5000,\n      // },\n      effect: "fade",\n      fadeEffect: {\n        crossFade: true\n      },\n      slidesPerView: 1,\n      speed: 1000,\n      navigation: {\n        nextEl: "#image-slider .banner-slide-next-btn",\n        prevEl: "#image-slider .banner-slide-prev-btn"\n      }\n    };\n    if (isLoop == "true") {\n      settingsImageSlider["loop"] = true;\n      settingsImageSlider["autoplay"] = {\n        autoplay: 5000\n      };\n    }\n    console.log(settingsImageSlider);\n    const imageSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"]("#image-slider .mySwiper", settingsImageSlider);\n    const foundationDay = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".foundation__day .mySwiper", {\n      slidesPerView: 1,\n      effect: "fade",\n      loop: true,\n      navigation: {\n        nextEl: ".banner-slide-next-btn",\n        prevEl: ".banner-slide-prev-btn"\n      }\n    });\n    // Project Slider\n    const projectSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_5__["default"](".residential-project .mySwiper", {\n      effect: "fade",\n      fadeEffect: {\n        crossFade: true\n      },\n      loop: false,\n      navigation: {\n        nextEl: ".residential-project .next",\n        prevEl: ".residential-project .prev"\n      },\n      breakpoints: {\n        // when window width is >= 640px\n        1200: {\n          autoHeight: true\n        }\n      }\n    });\n    var container = $(".container").css("max-width");\n    if ($(".swiper-pagination-progressbar").length !== 0) {\n      $(".swiper-pagination-progressbar").css("max-width", container);\n    }\n\n    // Mobile Menu Dropdown\n\n    const mobileMenuContainer = $(".mobile-menu .nav-menu li");\n    mobileMenuContainer.on("click", function (e) {\n      var that = $(this);\n      that.children("ul").stop().slideToggle("slow", function () {\n        that.toggleClass("toogle-open", $(this).is(":visible"));\n      });\n    });\n    const hamBurger = $(".menu-bar");\n    hamBurger.on("click", function (e) {\n      e.preventDefault();\n      $("body").addClass("open-mobile-menu");\n      $(".concerns .grid .column .thumb h4").css("zIndex", 9);\n      $(".concerns .grid .column .thumb a.learn-more").css("zIndex", 9);\n    });\n    const closehamBurger = $(".close-menu");\n    closehamBurger.on("click", function (e) {\n      e.preventDefault();\n      $("body").removeClass("open-mobile-menu");\n      $(".concerns .grid .column .thumb h4").css("zIndex", 9999);\n      $(".concerns .grid .column .thumb a.learn-more").css("zIndex", 9999);\n    });\n\n    // Career\n    const selectDepartment = $("#select-department");\n    selectDepartment.on("change", findingDepartment);\n    const searchJob = $("#find-job");\n    searchJob.on("keyup", findingSearch);\n    function findingDepartment() {\n      $(".search-bar").attr("data-slug", $(this).val());\n      findingQuery();\n    }\n    function findingSearch() {\n      $(".search-bar").attr("data-keyword", $(this).val());\n      findingQuery();\n    }\n    function findingQuery() {\n      let slug = $(".search-bar").attr("data-slug");\n      let keyword = $(".search-bar").attr("data-keyword");\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        data: {\n          method: "POST",\n          action: "get_job_item",\n          slug: slug,\n          keyword: keyword\n        },\n        beforeSend: function () {},\n        success: function (res) {\n          $(".job-post").html(res);\n        },\n        error: function (res) {\n          alert("Something went wrong!");\n        }\n      });\n    }\n\n    // Carrer\n    // Step 1\n    const verifyEmail = $("#verify-email-btn");\n    verifyEmail.on("click", function (e) {\n      e.preventDefault();\n      const email = $("#Email").val();\n      const job_title = $("#job_title").val();\n      if (validateEmail(email) === false) {\n        $(".alert").addClass("alert-warning").html("Invalid Email Address.");\n        return false;\n      }\n      if (email == "") {\n        $(".alert").addClass("alert-warning").html("Fill out the form correctly.");\n        return false;\n      }\n      $(".alert").removeClass("alert-warning").html("");\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        data: {\n          method: "POST",\n          email,\n          submission_submit: true,\n          job_title,\n          action: "verify_email_handle_form"\n        },\n        beforeSend: function () {},\n        success: function (res) {\n          // console.log(res);\n          if (res.status === 0) {\n            $(".alert").addClass("alert-warning").html(res.message);\n          }\n          if (res.status === 1) {\n            $(".alert").addClass("alert-success").html(res.message);\n            $("#applicate-form-resume").removeClass("disible");\n            $("#Email").attr("disabled", "disabled");\n            $("#applicate-form-resume").find("input, select").removeAttr("disabled");\n            $("#applicate-form-resume").find("input[type=\'text\'], select").attr("required", "required");\n          }\n        },\n        error: function (res) {}\n      });\n    });\n    // Step 2\n    const verify_sent_resume = $(".verify_sent_resume");\n    verify_sent_resume.on("click", function (e) {\n      e.preventDefault();\n      const nonce = $("#cpt_nonce_field").val();\n      const verifyCode = $("#verifyCode").val();\n      const name = $("#Name").val();\n      const email = $("#Email").val();\n      const phone = $("#Phone").val();\n      const interestDepartment = $("#interestDepartment").val();\n      const currentCompany = $("#currentCompany").val();\n      const job_title = $("#job_title").val();\n      var fd = new FormData();\n      const files = $("#pdf_file")[0].files[0];\n\n      // Check empty wheather\n      var fieldsObj = {\n        verifyCode: "Verification code is required",\n        Name: "Name is required",\n        Phone: "Phone is required",\n        Division: "Division is required",\n        interestDepartment: "Interest department is required",\n        currentCompany: "Current Company is required"\n      };\n      console.log(fieldsObj);\n      VaildationInput(fieldsObj);\n      console.log(files);\n      if (files === undefined) {\n        console.log("empty files");\n        $(".alert").removeClass("alert-warning").html("");\n        $(".alert").addClass("alert-warning").html(`File is required fields!`);\n        return false;\n      }\n      fd.append("resume", files);\n      fd.append("verification_code", verifyCode);\n      fd.append("name", name);\n      fd.append("email", email);\n      fd.append("phone", phone);\n      fd.append("interest_department", interestDepartment);\n      fd.append("current_company", currentCompany);\n      fd.append("cpt_nonce_field", nonce);\n      fd.append("submit", true);\n      fd.append("action", "verify_email_handle_form");\n      fd.append("job_title", job_title);\n      $.ajax({\n        method: "POST",\n        url: urls.adminAjax,\n        type: "post",\n        data: fd,\n        contentType: false,\n        processData: false,\n        beforeSend: function () {},\n        success: function (res) {\n          if (res.status === 0) {\n            $(".alert").removeClass("alert-success");\n            $(".alert").addClass("alert-warning").html(res.message);\n          }\n          if (res.status === 1) {\n            $(".alert").removeClass("alert-warning");\n            $(".alert").addClass("alert-success").html(res.message);\n            $("#submit").attr("disabled", "disabled");\n          }\n        },\n        error: function (res) {}\n      });\n    });\n    const validateEmail = email => {\n      var re = /\\S+@\\S+\\.\\S+/;\n      return re.test(email);\n    };\n\n    /*\r\n     * Input vaildation function\r\n     */\n    const VaildationInput = Input => {\n      $.each(Input, (index, value) => {\n        console.log(index);\n        console.log(value);\n        let inputVal = $(`#${index}`).val();\n        console.log(inputVal);\n        console.log(`Vaildation callded`);\n        if (inputVal == "") {\n          console.log("has error");\n          $(".alert").removeClass("alert-warning").html("");\n          $(".alert").addClass("alert-warning").html(`${value}`);\n          return false;\n        }\n        return true;\n      });\n      // return true;\n    };\n    // Add File name\n    $("#pdf_file").on("change", function (e) {\n      const files = $("#pdf_file")[0].files[0];\n      $(".filename").html(files.name);\n    });\n\n    // Team Modal\n    // MModal Close\n\n    const TeamModalClose = $(".close-modal");\n    TeamModalClose.on("click", function (e) {\n      e.preventDefault();\n      $(".modal").removeClass("slideInDown");\n      $(".modal").addClass("fadeOutUp");\n      setTimeout(() => {\n        $(".modal").removeClass("open");\n        $(".modal").removeClass("fadeOutUp");\n        $("body").css("overflow-y", "auto");\n        $("body").removeClass("modal-open-window");\n      }, 1000);\n    });\n\n    // Moodal Open\n    $(".member").on("click", ".modal-learn-more", function (e) {\n      e.preventDefault();\n      var that = $(this),\n        prentdiv = that.parents(".member");\n      prentdiv.find(".modal").addClass("open slideInDown");\n      $("body").css("overflow-y", "hidden");\n      $("body").addClass("modal-open-window");\n      const modalText = window.matchMedia("(max-width: 960px)");\n      if (modalText.matches) {\n        var windowHeight = $(window).height();\n        console.log(windowHeight);\n        var imageHeight = $(".team .modal.open .modal-dialog .modal-content .custom-row .left").innerHeight();\n        var calcHeight = windowHeight - imageHeight;\n        $(".modal-content .overview").css("max-height", calcHeight + 40);\n      }\n      console.log(calcHeight);\n    });\n\n    // About\n    $(".tilter").on("click", function (e) {\n      e.preventDefault();\n    });\n\n    // sticky Nav\n    $(document).ready(function () {\n      var previousScroll = 0,\n        headerOrgOffset = $(".main-menu-area").offset().top;\n      $(window).scroll(function () {\n        var currentScroll = $(this).scrollTop();\n        if (currentScroll > headerOrgOffset) {\n          if (currentScroll > previousScroll) {\n            $(".main-menu-area").fadeOut();\n          } else {\n            $(".main-menu-area").fadeIn();\n            $(".main-menu-area").addClass("fixed-menu");\n          }\n        } else {\n          $(".main-menu-area").removeClass("fixed-menu");\n        }\n        previousScroll = currentScroll;\n      });\n    });\n    $("body").find(".cta").on("click", function () {\n      $(this).children()[0].click();\n    });\n    const appHeight = () => {\n      const doc = document.documentElement;\n      console.log(window.innerHeight);\n      doc.style.setProperty("--app-height", `${window.innerHeight}px`);\n    };\n    window.addEventListener("resize", appHeight);\n    appHeight();\n  });\n})(jQuery);\n\n//# sourceURL=webpack://united-group/./src/scripts/theme.js?'
      );
    },
    /*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
    "./src/styles/theme.scss": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://united-group/./src/styles/theme.scss?"
      );
    },
    /*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
    "./node_modules/dom7/dom7.esm.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"animationEnd\": () => (/* binding */ animationEnd),\n/* harmony export */   \"append\": () => (/* binding */ append),\n/* harmony export */   \"appendTo\": () => (/* binding */ appendTo),\n/* harmony export */   \"attr\": () => (/* binding */ attr),\n/* harmony export */   \"blur\": () => (/* binding */ blur),\n/* harmony export */   \"change\": () => (/* binding */ change),\n/* harmony export */   \"children\": () => (/* binding */ children),\n/* harmony export */   \"click\": () => (/* binding */ click),\n/* harmony export */   \"closest\": () => (/* binding */ closest),\n/* harmony export */   \"css\": () => (/* binding */ css),\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"dataset\": () => (/* binding */ dataset),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"detach\": () => (/* binding */ detach),\n/* harmony export */   \"each\": () => (/* binding */ each),\n/* harmony export */   \"empty\": () => (/* binding */ empty),\n/* harmony export */   \"eq\": () => (/* binding */ eq),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"focus\": () => (/* binding */ focus),\n/* harmony export */   \"focusin\": () => (/* binding */ focusin),\n/* harmony export */   \"focusout\": () => (/* binding */ focusout),\n/* harmony export */   \"hasClass\": () => (/* binding */ hasClass),\n/* harmony export */   \"height\": () => (/* binding */ height),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"html\": () => (/* binding */ html),\n/* harmony export */   \"index\": () => (/* binding */ index),\n/* harmony export */   \"insertAfter\": () => (/* binding */ insertAfter),\n/* harmony export */   \"insertBefore\": () => (/* binding */ insertBefore),\n/* harmony export */   \"is\": () => (/* binding */ is),\n/* harmony export */   \"keydown\": () => (/* binding */ keydown),\n/* harmony export */   \"keypress\": () => (/* binding */ keypress),\n/* harmony export */   \"keyup\": () => (/* binding */ keyup),\n/* harmony export */   \"mousedown\": () => (/* binding */ mousedown),\n/* harmony export */   \"mouseenter\": () => (/* binding */ mouseenter),\n/* harmony export */   \"mouseleave\": () => (/* binding */ mouseleave),\n/* harmony export */   \"mousemove\": () => (/* binding */ mousemove),\n/* harmony export */   \"mouseout\": () => (/* binding */ mouseout),\n/* harmony export */   \"mouseover\": () => (/* binding */ mouseover),\n/* harmony export */   \"mouseup\": () => (/* binding */ mouseup),\n/* harmony export */   \"next\": () => (/* binding */ next),\n/* harmony export */   \"nextAll\": () => (/* binding */ nextAll),\n/* harmony export */   \"off\": () => (/* binding */ off),\n/* harmony export */   \"offset\": () => (/* binding */ offset),\n/* harmony export */   \"on\": () => (/* binding */ on),\n/* harmony export */   \"once\": () => (/* binding */ once),\n/* harmony export */   \"outerHeight\": () => (/* binding */ outerHeight),\n/* harmony export */   \"outerWidth\": () => (/* binding */ outerWidth),\n/* harmony export */   \"parent\": () => (/* binding */ parent),\n/* harmony export */   \"parents\": () => (/* binding */ parents),\n/* harmony export */   \"prepend\": () => (/* binding */ prepend),\n/* harmony export */   \"prependTo\": () => (/* binding */ prependTo),\n/* harmony export */   \"prev\": () => (/* binding */ prev),\n/* harmony export */   \"prevAll\": () => (/* binding */ prevAll),\n/* harmony export */   \"prop\": () => (/* binding */ prop),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"removeAttr\": () => (/* binding */ removeAttr),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass),\n/* harmony export */   \"removeData\": () => (/* binding */ removeData),\n/* harmony export */   \"resize\": () => (/* binding */ resize),\n/* harmony export */   \"scroll\": () => (/* binding */ scroll),\n/* harmony export */   \"scrollLeft\": () => (/* binding */ scrollLeft),\n/* harmony export */   \"scrollTo\": () => (/* binding */ scrollTo),\n/* harmony export */   \"scrollTop\": () => (/* binding */ scrollTop),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"siblings\": () => (/* binding */ siblings),\n/* harmony export */   \"stop\": () => (/* binding */ stop),\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"submit\": () => (/* binding */ submit),\n/* harmony export */   \"text\": () => (/* binding */ text),\n/* harmony export */   \"toggleClass\": () => (/* binding */ toggleClass),\n/* harmony export */   \"touchend\": () => (/* binding */ touchend),\n/* harmony export */   \"touchmove\": () => (/* binding */ touchmove),\n/* harmony export */   \"touchstart\": () => (/* binding */ touchstart),\n/* harmony export */   \"transform\": () => (/* binding */ transform),\n/* harmony export */   \"transition\": () => (/* binding */ transition),\n/* harmony export */   \"transitionEnd\": () => (/* binding */ transitionEnd),\n/* harmony export */   \"trigger\": () => (/* binding */ trigger),\n/* harmony export */   \"val\": () => (/* binding */ val),\n/* harmony export */   \"value\": () => (/* binding */ value),\n/* harmony export */   \"width\": () => (/* binding */ width)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/**\n * Dom7 4.0.4\n * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API\n * https://framework7.io/docs/dom7.html\n *\n * Copyright 2022, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: January 11, 2022\n */\n\n\n/* eslint-disable no-proto */\nfunction makeReactive(obj) {\n  const proto = obj.__proto__;\n  Object.defineProperty(obj, '__proto__', {\n    get() {\n      return proto;\n    },\n    set(value) {\n      proto.__proto__ = value;\n    }\n  });\n}\nclass Dom7 extends Array {\n  constructor(items) {\n    if (typeof items === 'number') {\n      super(items);\n    } else {\n      super(...(items || []));\n      makeReactive(this);\n    }\n  }\n}\nfunction arrayFlat(arr = []) {\n  const res = [];\n  arr.forEach(el => {\n    if (Array.isArray(el)) {\n      res.push(...arrayFlat(el));\n    } else {\n      res.push(el);\n    }\n  });\n  return res;\n}\nfunction arrayFilter(arr, callback) {\n  return Array.prototype.filter.call(arr, callback);\n}\nfunction arrayUnique(arr) {\n  const uniqueArray = [];\n  for (let i = 0; i < arr.length; i += 1) {\n    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);\n  }\n  return uniqueArray;\n}\nfunction toCamelCase(string) {\n  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());\n}\n\n// eslint-disable-next-line\n\nfunction qsa(selector, context) {\n  if (typeof selector !== 'string') {\n    return [selector];\n  }\n  const a = [];\n  const res = context.querySelectorAll(selector);\n  for (let i = 0; i < res.length; i += 1) {\n    a.push(res[i]);\n  }\n  return a;\n}\nfunction $(selector, context) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let arr = [];\n  if (!context && selector instanceof Dom7) {\n    return selector;\n  }\n  if (!selector) {\n    return new Dom7(arr);\n  }\n  if (typeof selector === 'string') {\n    const html = selector.trim();\n    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {\n      let toCreate = 'div';\n      if (html.indexOf('<li') === 0) toCreate = 'ul';\n      if (html.indexOf('<tr') === 0) toCreate = 'tbody';\n      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';\n      if (html.indexOf('<tbody') === 0) toCreate = 'table';\n      if (html.indexOf('<option') === 0) toCreate = 'select';\n      const tempParent = document.createElement(toCreate);\n      tempParent.innerHTML = html;\n      for (let i = 0; i < tempParent.childNodes.length; i += 1) {\n        arr.push(tempParent.childNodes[i]);\n      }\n    } else {\n      arr = qsa(selector.trim(), context || document);\n    } // arr = qsa(selector, document);\n  } else if (selector.nodeType || selector === window || selector === document) {\n    arr.push(selector);\n  } else if (Array.isArray(selector)) {\n    if (selector instanceof Dom7) return selector;\n    arr = selector;\n  }\n  return new Dom7(arrayUnique(arr));\n}\n$.fn = Dom7.prototype;\n\n// eslint-disable-next-line\n\nfunction addClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    el.classList.add(...classNames);\n  });\n  return this;\n}\nfunction removeClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    el.classList.remove(...classNames);\n  });\n  return this;\n}\nfunction toggleClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    classNames.forEach(className => {\n      el.classList.toggle(className);\n    });\n  });\n}\nfunction hasClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  return arrayFilter(this, el => {\n    return classNames.filter(className => el.classList.contains(className)).length > 0;\n  }).length > 0;\n}\nfunction attr(attrs, value) {\n  if (arguments.length === 1 && typeof attrs === 'string') {\n    // Get attr\n    if (this[0]) return this[0].getAttribute(attrs);\n    return undefined;\n  } // Set attrs\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (arguments.length === 2) {\n      // String\n      this[i].setAttribute(attrs, value);\n    } else {\n      // Object\n      for (const attrName in attrs) {\n        this[i][attrName] = attrs[attrName];\n        this[i].setAttribute(attrName, attrs[attrName]);\n      }\n    }\n  }\n  return this;\n}\nfunction removeAttr(attr) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].removeAttribute(attr);\n  }\n  return this;\n}\nfunction prop(props, value) {\n  if (arguments.length === 1 && typeof props === 'string') {\n    // Get prop\n    if (this[0]) return this[0][props];\n  } else {\n    // Set props\n    for (let i = 0; i < this.length; i += 1) {\n      if (arguments.length === 2) {\n        // String\n        this[i][props] = value;\n      } else {\n        // Object\n        for (const propName in props) {\n          this[i][propName] = props[propName];\n        }\n      }\n    }\n    return this;\n  }\n  return this;\n}\nfunction data(key, value) {\n  let el;\n  if (typeof value === 'undefined') {\n    el = this[0];\n    if (!el) return undefined; // Get value\n\n    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {\n      return el.dom7ElementDataStorage[key];\n    }\n    const dataKey = el.getAttribute(`data-${key}`);\n    if (dataKey) {\n      return dataKey;\n    }\n    return undefined;\n  } // Set value\n\n  for (let i = 0; i < this.length; i += 1) {\n    el = this[i];\n    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};\n    el.dom7ElementDataStorage[key] = value;\n  }\n  return this;\n}\nfunction removeData(key) {\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {\n      el.dom7ElementDataStorage[key] = null;\n      delete el.dom7ElementDataStorage[key];\n    }\n  }\n}\nfunction dataset() {\n  const el = this[0];\n  if (!el) return undefined;\n  const dataset = {}; // eslint-disable-line\n\n  if (el.dataset) {\n    for (const dataKey in el.dataset) {\n      dataset[dataKey] = el.dataset[dataKey];\n    }\n  } else {\n    for (let i = 0; i < el.attributes.length; i += 1) {\n      const attr = el.attributes[i];\n      if (attr.name.indexOf('data-') >= 0) {\n        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;\n      }\n    }\n  }\n  for (const key in dataset) {\n    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;\n  }\n  return dataset;\n}\nfunction val(value) {\n  if (typeof value === 'undefined') {\n    // get value\n    const el = this[0];\n    if (!el) return undefined;\n    if (el.multiple && el.nodeName.toLowerCase() === 'select') {\n      const values = [];\n      for (let i = 0; i < el.selectedOptions.length; i += 1) {\n        values.push(el.selectedOptions[i].value);\n      }\n      return values;\n    }\n    return el.value;\n  } // set value\n\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {\n      for (let j = 0; j < el.options.length; j += 1) {\n        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;\n      }\n    } else {\n      el.value = value;\n    }\n  }\n  return this;\n}\nfunction value(value) {\n  return this.val(value);\n}\nfunction transform(transform) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.transform = transform;\n  }\n  return this;\n}\nfunction transition(duration) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;\n  }\n  return this;\n}\nfunction on(...args) {\n  let [eventType, targetSelector, listener, capture] = args;\n  if (typeof args[1] === 'function') {\n    [eventType, listener, capture] = args;\n    targetSelector = undefined;\n  }\n  if (!capture) capture = false;\n  function handleLiveEvent(e) {\n    const target = e.target;\n    if (!target) return;\n    const eventData = e.target.dom7EventData || [];\n    if (eventData.indexOf(e) < 0) {\n      eventData.unshift(e);\n    }\n    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {\n      const parents = $(target).parents(); // eslint-disable-line\n\n      for (let k = 0; k < parents.length; k += 1) {\n        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);\n      }\n    }\n  }\n  function handleEvent(e) {\n    const eventData = e && e.target ? e.target.dom7EventData || [] : [];\n    if (eventData.indexOf(e) < 0) {\n      eventData.unshift(e);\n    }\n    listener.apply(this, eventData);\n  }\n  const events = eventType.split(' ');\n  let j;\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n    if (!targetSelector) {\n      for (j = 0; j < events.length; j += 1) {\n        const event = events[j];\n        if (!el.dom7Listeners) el.dom7Listeners = {};\n        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];\n        el.dom7Listeners[event].push({\n          listener,\n          proxyListener: handleEvent\n        });\n        el.addEventListener(event, handleEvent, capture);\n      }\n    } else {\n      // Live events\n      for (j = 0; j < events.length; j += 1) {\n        const event = events[j];\n        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};\n        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];\n        el.dom7LiveListeners[event].push({\n          listener,\n          proxyListener: handleLiveEvent\n        });\n        el.addEventListener(event, handleLiveEvent, capture);\n      }\n    }\n  }\n  return this;\n}\nfunction off(...args) {\n  let [eventType, targetSelector, listener, capture] = args;\n  if (typeof args[1] === 'function') {\n    [eventType, listener, capture] = args;\n    targetSelector = undefined;\n  }\n  if (!capture) capture = false;\n  const events = eventType.split(' ');\n  for (let i = 0; i < events.length; i += 1) {\n    const event = events[i];\n    for (let j = 0; j < this.length; j += 1) {\n      const el = this[j];\n      let handlers;\n      if (!targetSelector && el.dom7Listeners) {\n        handlers = el.dom7Listeners[event];\n      } else if (targetSelector && el.dom7LiveListeners) {\n        handlers = el.dom7LiveListeners[event];\n      }\n      if (handlers && handlers.length) {\n        for (let k = handlers.length - 1; k >= 0; k -= 1) {\n          const handler = handlers[k];\n          if (listener && handler.listener === listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          } else if (!listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          }\n        }\n      }\n    }\n  }\n  return this;\n}\nfunction once(...args) {\n  const dom = this;\n  let [eventName, targetSelector, listener, capture] = args;\n  if (typeof args[1] === 'function') {\n    [eventName, listener, capture] = args;\n    targetSelector = undefined;\n  }\n  function onceHandler(...eventArgs) {\n    listener.apply(this, eventArgs);\n    dom.off(eventName, targetSelector, onceHandler, capture);\n    if (onceHandler.dom7proxy) {\n      delete onceHandler.dom7proxy;\n    }\n  }\n  onceHandler.dom7proxy = listener;\n  return dom.on(eventName, targetSelector, onceHandler, capture);\n}\nfunction trigger(...args) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const events = args[0].split(' ');\n  const eventData = args[1];\n  for (let i = 0; i < events.length; i += 1) {\n    const event = events[i];\n    for (let j = 0; j < this.length; j += 1) {\n      const el = this[j];\n      if (window.CustomEvent) {\n        const evt = new window.CustomEvent(event, {\n          detail: eventData,\n          bubbles: true,\n          cancelable: true\n        });\n        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);\n        el.dispatchEvent(evt);\n        el.dom7EventData = [];\n        delete el.dom7EventData;\n      }\n    }\n  }\n  return this;\n}\nfunction transitionEnd(callback) {\n  const dom = this;\n  function fireCallBack(e) {\n    if (e.target !== this) return;\n    callback.call(this, e);\n    dom.off('transitionend', fireCallBack);\n  }\n  if (callback) {\n    dom.on('transitionend', fireCallBack);\n  }\n  return this;\n}\nfunction animationEnd(callback) {\n  const dom = this;\n  function fireCallBack(e) {\n    if (e.target !== this) return;\n    callback.call(this, e);\n    dom.off('animationend', fireCallBack);\n  }\n  if (callback) {\n    dom.on('animationend', fireCallBack);\n  }\n  return this;\n}\nfunction width() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  if (this[0] === window) {\n    return window.innerWidth;\n  }\n  if (this.length > 0) {\n    return parseFloat(this.css('width'));\n  }\n  return null;\n}\nfunction outerWidth(includeMargins) {\n  if (this.length > 0) {\n    if (includeMargins) {\n      const styles = this.styles();\n      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));\n    }\n    return this[0].offsetWidth;\n  }\n  return null;\n}\nfunction height() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  if (this[0] === window) {\n    return window.innerHeight;\n  }\n  if (this.length > 0) {\n    return parseFloat(this.css('height'));\n  }\n  return null;\n}\nfunction outerHeight(includeMargins) {\n  if (this.length > 0) {\n    if (includeMargins) {\n      const styles = this.styles();\n      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));\n    }\n    return this[0].offsetHeight;\n  }\n  return null;\n}\nfunction offset() {\n  if (this.length > 0) {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n    const el = this[0];\n    const box = el.getBoundingClientRect();\n    const body = document.body;\n    const clientTop = el.clientTop || body.clientTop || 0;\n    const clientLeft = el.clientLeft || body.clientLeft || 0;\n    const scrollTop = el === window ? window.scrollY : el.scrollTop;\n    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;\n    return {\n      top: box.top + scrollTop - clientTop,\n      left: box.left + scrollLeft - clientLeft\n    };\n  }\n  return null;\n}\nfunction hide() {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.display = 'none';\n  }\n  return this;\n}\nfunction show() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n    if (el.style.display === 'none') {\n      el.style.display = '';\n    }\n    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {\n      // Still not visible\n      el.style.display = 'block';\n    }\n  }\n  return this;\n}\nfunction styles() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  if (this[0]) return window.getComputedStyle(this[0], null);\n  return {};\n}\nfunction css(props, value) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let i;\n  if (arguments.length === 1) {\n    if (typeof props === 'string') {\n      // .css('width')\n      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);\n    } else {\n      // .css({ width: '100px' })\n      for (i = 0; i < this.length; i += 1) {\n        for (const prop in props) {\n          this[i].style[prop] = props[prop];\n        }\n      }\n      return this;\n    }\n  }\n  if (arguments.length === 2 && typeof props === 'string') {\n    // .css('width', '100px')\n    for (i = 0; i < this.length; i += 1) {\n      this[i].style[props] = value;\n    }\n    return this;\n  }\n  return this;\n}\nfunction each(callback) {\n  if (!callback) return this;\n  this.forEach((el, index) => {\n    callback.apply(el, [el, index]);\n  });\n  return this;\n}\nfunction filter(callback) {\n  const result = arrayFilter(this, callback);\n  return $(result);\n}\nfunction html(html) {\n  if (typeof html === 'undefined') {\n    return this[0] ? this[0].innerHTML : null;\n  }\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].innerHTML = html;\n  }\n  return this;\n}\nfunction text(text) {\n  if (typeof text === 'undefined') {\n    return this[0] ? this[0].textContent.trim() : null;\n  }\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].textContent = text;\n  }\n  return this;\n}\nfunction is(selector) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const el = this[0];\n  let compareWith;\n  let i;\n  if (!el || typeof selector === 'undefined') return false;\n  if (typeof selector === 'string') {\n    if (el.matches) return el.matches(selector);\n    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);\n    if (el.msMatchesSelector) return el.msMatchesSelector(selector);\n    compareWith = $(selector);\n    for (i = 0; i < compareWith.length; i += 1) {\n      if (compareWith[i] === el) return true;\n    }\n    return false;\n  }\n  if (selector === document) {\n    return el === document;\n  }\n  if (selector === window) {\n    return el === window;\n  }\n  if (selector.nodeType || selector instanceof Dom7) {\n    compareWith = selector.nodeType ? [selector] : selector;\n    for (i = 0; i < compareWith.length; i += 1) {\n      if (compareWith[i] === el) return true;\n    }\n    return false;\n  }\n  return false;\n}\nfunction index() {\n  let child = this[0];\n  let i;\n  if (child) {\n    i = 0; // eslint-disable-next-line\n\n    while ((child = child.previousSibling) !== null) {\n      if (child.nodeType === 1) i += 1;\n    }\n    return i;\n  }\n  return undefined;\n}\nfunction eq(index) {\n  if (typeof index === 'undefined') return this;\n  const length = this.length;\n  if (index > length - 1) {\n    return $([]);\n  }\n  if (index < 0) {\n    const returnIndex = length + index;\n    if (returnIndex < 0) return $([]);\n    return $([this[returnIndex]]);\n  }\n  return $([this[index]]);\n}\nfunction append(...els) {\n  let newChild;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  for (let k = 0; k < els.length; k += 1) {\n    newChild = els[k];\n    for (let i = 0; i < this.length; i += 1) {\n      if (typeof newChild === 'string') {\n        const tempDiv = document.createElement('div');\n        tempDiv.innerHTML = newChild;\n        while (tempDiv.firstChild) {\n          this[i].appendChild(tempDiv.firstChild);\n        }\n      } else if (newChild instanceof Dom7) {\n        for (let j = 0; j < newChild.length; j += 1) {\n          this[i].appendChild(newChild[j]);\n        }\n      } else {\n        this[i].appendChild(newChild);\n      }\n    }\n  }\n  return this;\n}\nfunction appendTo(parent) {\n  $(parent).append(this);\n  return this;\n}\nfunction prepend(newChild) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let i;\n  let j;\n  for (i = 0; i < this.length; i += 1) {\n    if (typeof newChild === 'string') {\n      const tempDiv = document.createElement('div');\n      tempDiv.innerHTML = newChild;\n      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {\n        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);\n      }\n    } else if (newChild instanceof Dom7) {\n      for (j = 0; j < newChild.length; j += 1) {\n        this[i].insertBefore(newChild[j], this[i].childNodes[0]);\n      }\n    } else {\n      this[i].insertBefore(newChild, this[i].childNodes[0]);\n    }\n  }\n  return this;\n}\nfunction prependTo(parent) {\n  $(parent).prepend(this);\n  return this;\n}\nfunction insertBefore(selector) {\n  const before = $(selector);\n  for (let i = 0; i < this.length; i += 1) {\n    if (before.length === 1) {\n      before[0].parentNode.insertBefore(this[i], before[0]);\n    } else if (before.length > 1) {\n      for (let j = 0; j < before.length; j += 1) {\n        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);\n      }\n    }\n  }\n}\nfunction insertAfter(selector) {\n  const after = $(selector);\n  for (let i = 0; i < this.length; i += 1) {\n    if (after.length === 1) {\n      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);\n    } else if (after.length > 1) {\n      for (let j = 0; j < after.length; j += 1) {\n        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);\n      }\n    }\n  }\n}\nfunction next(selector) {\n  if (this.length > 0) {\n    if (selector) {\n      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {\n        return $([this[0].nextElementSibling]);\n      }\n      return $([]);\n    }\n    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);\n    return $([]);\n  }\n  return $([]);\n}\nfunction nextAll(selector) {\n  const nextEls = [];\n  let el = this[0];\n  if (!el) return $([]);\n  while (el.nextElementSibling) {\n    const next = el.nextElementSibling; // eslint-disable-line\n\n    if (selector) {\n      if ($(next).is(selector)) nextEls.push(next);\n    } else nextEls.push(next);\n    el = next;\n  }\n  return $(nextEls);\n}\nfunction prev(selector) {\n  if (this.length > 0) {\n    const el = this[0];\n    if (selector) {\n      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {\n        return $([el.previousElementSibling]);\n      }\n      return $([]);\n    }\n    if (el.previousElementSibling) return $([el.previousElementSibling]);\n    return $([]);\n  }\n  return $([]);\n}\nfunction prevAll(selector) {\n  const prevEls = [];\n  let el = this[0];\n  if (!el) return $([]);\n  while (el.previousElementSibling) {\n    const prev = el.previousElementSibling; // eslint-disable-line\n\n    if (selector) {\n      if ($(prev).is(selector)) prevEls.push(prev);\n    } else prevEls.push(prev);\n    el = prev;\n  }\n  return $(prevEls);\n}\nfunction siblings(selector) {\n  return this.nextAll(selector).add(this.prevAll(selector));\n}\nfunction parent(selector) {\n  const parents = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (this[i].parentNode !== null) {\n      if (selector) {\n        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);\n      } else {\n        parents.push(this[i].parentNode);\n      }\n    }\n  }\n  return $(parents);\n}\nfunction parents(selector) {\n  const parents = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    let parent = this[i].parentNode; // eslint-disable-line\n\n    while (parent) {\n      if (selector) {\n        if ($(parent).is(selector)) parents.push(parent);\n      } else {\n        parents.push(parent);\n      }\n      parent = parent.parentNode;\n    }\n  }\n  return $(parents);\n}\nfunction closest(selector) {\n  let closest = this; // eslint-disable-line\n\n  if (typeof selector === 'undefined') {\n    return $([]);\n  }\n  if (!closest.is(selector)) {\n    closest = closest.parents(selector).eq(0);\n  }\n  return closest;\n}\nfunction find(selector) {\n  const foundElements = [];\n  for (let i = 0; i < this.length; i += 1) {\n    const found = this[i].querySelectorAll(selector);\n    for (let j = 0; j < found.length; j += 1) {\n      foundElements.push(found[j]);\n    }\n  }\n  return $(foundElements);\n}\nfunction children(selector) {\n  const children = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    const childNodes = this[i].children;\n    for (let j = 0; j < childNodes.length; j += 1) {\n      if (!selector || $(childNodes[j]).is(selector)) {\n        children.push(childNodes[j]);\n      }\n    }\n  }\n  return $(children);\n}\nfunction remove() {\n  for (let i = 0; i < this.length; i += 1) {\n    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);\n  }\n  return this;\n}\nfunction detach() {\n  return this.remove();\n}\nfunction add(...els) {\n  const dom = this;\n  let i;\n  let j;\n  for (i = 0; i < els.length; i += 1) {\n    const toAdd = $(els[i]);\n    for (j = 0; j < toAdd.length; j += 1) {\n      dom.push(toAdd[j]);\n    }\n  }\n  return dom;\n}\nfunction empty() {\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n    if (el.nodeType === 1) {\n      for (let j = 0; j < el.childNodes.length; j += 1) {\n        if (el.childNodes[j].parentNode) {\n          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);\n        }\n      }\n      el.textContent = '';\n    }\n  }\n  return this;\n}\n\n// eslint-disable-next-line\n\nfunction scrollTo(...args) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let [left, top, duration, easing, callback] = args;\n  if (args.length === 4 && typeof easing === 'function') {\n    callback = easing;\n    [left, top, duration, callback, easing] = args;\n  }\n  if (typeof easing === 'undefined') easing = 'swing';\n  return this.each(function animate() {\n    const el = this;\n    let currentTop;\n    let currentLeft;\n    let maxTop;\n    let maxLeft;\n    let newTop;\n    let newLeft;\n    let scrollTop; // eslint-disable-line\n\n    let scrollLeft; // eslint-disable-line\n\n    let animateTop = top > 0 || top === 0;\n    let animateLeft = left > 0 || left === 0;\n    if (typeof easing === 'undefined') {\n      easing = 'swing';\n    }\n    if (animateTop) {\n      currentTop = el.scrollTop;\n      if (!duration) {\n        el.scrollTop = top;\n      }\n    }\n    if (animateLeft) {\n      currentLeft = el.scrollLeft;\n      if (!duration) {\n        el.scrollLeft = left;\n      }\n    }\n    if (!duration) return;\n    if (animateTop) {\n      maxTop = el.scrollHeight - el.offsetHeight;\n      newTop = Math.max(Math.min(top, maxTop), 0);\n    }\n    if (animateLeft) {\n      maxLeft = el.scrollWidth - el.offsetWidth;\n      newLeft = Math.max(Math.min(left, maxLeft), 0);\n    }\n    let startTime = null;\n    if (animateTop && newTop === currentTop) animateTop = false;\n    if (animateLeft && newLeft === currentLeft) animateLeft = false;\n    function render(time = new Date().getTime()) {\n      if (startTime === null) {\n        startTime = time;\n      }\n      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);\n      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;\n      let done;\n      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);\n      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);\n      if (animateTop && newTop > currentTop && scrollTop >= newTop) {\n        el.scrollTop = newTop;\n        done = true;\n      }\n      if (animateTop && newTop < currentTop && scrollTop <= newTop) {\n        el.scrollTop = newTop;\n        done = true;\n      }\n      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {\n        el.scrollLeft = newLeft;\n        done = true;\n      }\n      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {\n        el.scrollLeft = newLeft;\n        done = true;\n      }\n      if (done) {\n        if (callback) callback();\n        return;\n      }\n      if (animateTop) el.scrollTop = scrollTop;\n      if (animateLeft) el.scrollLeft = scrollLeft;\n      window.requestAnimationFrame(render);\n    }\n    window.requestAnimationFrame(render);\n  });\n} // scrollTop(top, duration, easing, callback) {\n\nfunction scrollTop(...args) {\n  let [top, duration, easing, callback] = args;\n  if (args.length === 3 && typeof easing === 'function') {\n    [top, duration, callback, easing] = args;\n  }\n  const dom = this;\n  if (typeof top === 'undefined') {\n    if (dom.length > 0) return dom[0].scrollTop;\n    return null;\n  }\n  return dom.scrollTo(undefined, top, duration, easing, callback);\n}\nfunction scrollLeft(...args) {\n  let [left, duration, easing, callback] = args;\n  if (args.length === 3 && typeof easing === 'function') {\n    [left, duration, callback, easing] = args;\n  }\n  const dom = this;\n  if (typeof left === 'undefined') {\n    if (dom.length > 0) return dom[0].scrollLeft;\n    return null;\n  }\n  return dom.scrollTo(left, undefined, duration, easing, callback);\n}\n\n// eslint-disable-next-line\n\nfunction animate(initialProps, initialParams) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const els = this;\n  const a = {\n    props: Object.assign({}, initialProps),\n    params: Object.assign({\n      duration: 300,\n      easing: 'swing' // or 'linear'\n\n      /* Callbacks\n      begin(elements)\n      complete(elements)\n      progress(elements, complete, remaining, start, tweenValue)\n      */\n    }, initialParams),\n    elements: els,\n    animating: false,\n    que: [],\n    easingProgress(easing, progress) {\n      if (easing === 'swing') {\n        return 0.5 - Math.cos(progress * Math.PI) / 2;\n      }\n      if (typeof easing === 'function') {\n        return easing(progress);\n      }\n      return progress;\n    },\n    stop() {\n      if (a.frameId) {\n        window.cancelAnimationFrame(a.frameId);\n      }\n      a.animating = false;\n      a.elements.each(el => {\n        const element = el;\n        delete element.dom7AnimateInstance;\n      });\n      a.que = [];\n    },\n    done(complete) {\n      a.animating = false;\n      a.elements.each(el => {\n        const element = el;\n        delete element.dom7AnimateInstance;\n      });\n      if (complete) complete(els);\n      if (a.que.length > 0) {\n        const que = a.que.shift();\n        a.animate(que[0], que[1]);\n      }\n    },\n    animate(props, params) {\n      if (a.animating) {\n        a.que.push([props, params]);\n        return a;\n      }\n      const elements = []; // Define & Cache Initials & Units\n\n      a.elements.each((el, index) => {\n        let initialFullValue;\n        let initialValue;\n        let unit;\n        let finalValue;\n        let finalFullValue;\n        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;\n        elements[index] = {\n          container: el\n        };\n        Object.keys(props).forEach(prop => {\n          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');\n          initialValue = parseFloat(initialFullValue);\n          unit = initialFullValue.replace(initialValue, '');\n          finalValue = parseFloat(props[prop]);\n          finalFullValue = props[prop] + unit;\n          elements[index][prop] = {\n            initialFullValue,\n            initialValue,\n            unit,\n            finalValue,\n            finalFullValue,\n            currentValue: initialValue\n          };\n        });\n      });\n      let startTime = null;\n      let time;\n      let elementsDone = 0;\n      let propsDone = 0;\n      let done;\n      let began = false;\n      a.animating = true;\n      function render() {\n        time = new Date().getTime();\n        let progress;\n        let easeProgress; // let el;\n\n        if (!began) {\n          began = true;\n          if (params.begin) params.begin(els);\n        }\n        if (startTime === null) {\n          startTime = time;\n        }\n        if (params.progress) {\n          // eslint-disable-next-line\n          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);\n        }\n        elements.forEach(element => {\n          const el = element;\n          if (done || el.done) return;\n          Object.keys(props).forEach(prop => {\n            if (done || el.done) return;\n            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);\n            easeProgress = a.easingProgress(params.easing, progress);\n            const {\n              initialValue,\n              finalValue,\n              unit\n            } = el[prop];\n            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);\n            const currentValue = el[prop].currentValue;\n            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {\n              el.container.style[prop] = finalValue + unit;\n              propsDone += 1;\n              if (propsDone === Object.keys(props).length) {\n                el.done = true;\n                elementsDone += 1;\n              }\n              if (elementsDone === elements.length) {\n                done = true;\n              }\n            }\n            if (done) {\n              a.done(params.complete);\n              return;\n            }\n            el.container.style[prop] = currentValue + unit;\n          });\n        });\n        if (done) return; // Then call\n\n        a.frameId = window.requestAnimationFrame(render);\n      }\n      a.frameId = window.requestAnimationFrame(render);\n      return a;\n    }\n  };\n  if (a.elements.length === 0) {\n    return els;\n  }\n  let animateInstance;\n  for (let i = 0; i < a.elements.length; i += 1) {\n    if (a.elements[i].dom7AnimateInstance) {\n      animateInstance = a.elements[i].dom7AnimateInstance;\n    } else a.elements[i].dom7AnimateInstance = a;\n  }\n  if (!animateInstance) {\n    animateInstance = a;\n  }\n  if (initialProps === 'stop') {\n    animateInstance.stop();\n  } else {\n    animateInstance.animate(a.props, a.params);\n  }\n  return els;\n}\nfunction stop() {\n  const els = this;\n  for (let i = 0; i < els.length; i += 1) {\n    if (els[i].dom7AnimateInstance) {\n      els[i].dom7AnimateInstance.stop();\n    }\n  }\n}\nconst noTrigger = 'resize scroll'.split(' ');\nfunction shortcut(name) {\n  function eventHandler(...args) {\n    if (typeof args[0] === 'undefined') {\n      for (let i = 0; i < this.length; i += 1) {\n        if (noTrigger.indexOf(name) < 0) {\n          if (name in this[i]) this[i][name]();else {\n            $(this[i]).trigger(name);\n          }\n        }\n      }\n      return this;\n    }\n    return this.on(name, ...args);\n  }\n  return eventHandler;\n}\nconst click = shortcut('click');\nconst blur = shortcut('blur');\nconst focus = shortcut('focus');\nconst focusin = shortcut('focusin');\nconst focusout = shortcut('focusout');\nconst keyup = shortcut('keyup');\nconst keydown = shortcut('keydown');\nconst keypress = shortcut('keypress');\nconst submit = shortcut('submit');\nconst change = shortcut('change');\nconst mousedown = shortcut('mousedown');\nconst mousemove = shortcut('mousemove');\nconst mouseup = shortcut('mouseup');\nconst mouseenter = shortcut('mouseenter');\nconst mouseleave = shortcut('mouseleave');\nconst mouseout = shortcut('mouseout');\nconst mouseover = shortcut('mouseover');\nconst touchstart = shortcut('touchstart');\nconst touchend = shortcut('touchend');\nconst touchmove = shortcut('touchmove');\nconst resize = shortcut('resize');\nconst scroll = shortcut('scroll');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);\n\n\n//# sourceURL=webpack://united-group/./node_modules/dom7/dom7.esm.js?"
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
    "./node_modules/ssr-window/ssr-window.esm.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": () => (/* binding */ extend),\n/* harmony export */   \"getDocument\": () => (/* binding */ getDocument),\n/* harmony export */   \"getWindow\": () => (/* binding */ getWindow),\n/* harmony export */   \"ssrDocument\": () => (/* binding */ ssrDocument),\n/* harmony export */   \"ssrWindow\": () => (/* binding */ ssrWindow)\n/* harmony export */ });\n/**\n * SSR Window 4.0.2\n * Better handling for window object in SSR environment\n * https://github.com/nolimits4web/ssr-window\n *\n * Copyright 2021, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: December 13, 2021\n */\n/* eslint-disable no-param-reassign */\nfunction isObject(obj) {\n  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;\n}\nfunction extend(target = {}, src = {}) {\n  Object.keys(src).forEach(key => {\n    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {\n      extend(target[key], src[key]);\n    }\n  });\n}\nconst ssrDocument = {\n  body: {},\n  addEventListener() {},\n  removeEventListener() {},\n  activeElement: {\n    blur() {},\n    nodeName: ''\n  },\n  querySelector() {\n    return null;\n  },\n  querySelectorAll() {\n    return [];\n  },\n  getElementById() {\n    return null;\n  },\n  createEvent() {\n    return {\n      initEvent() {}\n    };\n  },\n  createElement() {\n    return {\n      children: [],\n      childNodes: [],\n      style: {},\n      setAttribute() {},\n      getElementsByTagName() {\n        return [];\n      }\n    };\n  },\n  createElementNS() {\n    return {};\n  },\n  importNode() {\n    return null;\n  },\n  location: {\n    hash: '',\n    host: '',\n    hostname: '',\n    href: '',\n    origin: '',\n    pathname: '',\n    protocol: '',\n    search: ''\n  }\n};\nfunction getDocument() {\n  const doc = typeof document !== 'undefined' ? document : {};\n  extend(doc, ssrDocument);\n  return doc;\n}\nconst ssrWindow = {\n  document: ssrDocument,\n  navigator: {\n    userAgent: ''\n  },\n  location: {\n    hash: '',\n    host: '',\n    hostname: '',\n    href: '',\n    origin: '',\n    pathname: '',\n    protocol: '',\n    search: ''\n  },\n  history: {\n    replaceState() {},\n    pushState() {},\n    go() {},\n    back() {}\n  },\n  CustomEvent: function CustomEvent() {\n    return this;\n  },\n  addEventListener() {},\n  removeEventListener() {},\n  getComputedStyle() {\n    return {\n      getPropertyValue() {\n        return '';\n      }\n    };\n  },\n  Image() {},\n  Date() {},\n  screen: {},\n  setTimeout() {},\n  clearTimeout() {},\n  matchMedia() {\n    return {};\n  },\n  requestAnimationFrame(callback) {\n    if (typeof setTimeout === 'undefined') {\n      callback();\n      return null;\n    }\n    return setTimeout(callback, 0);\n  },\n  cancelAnimationFrame(id) {\n    if (typeof setTimeout === 'undefined') {\n      return;\n    }\n    clearTimeout(id);\n  }\n};\nfunction getWindow() {\n  const win = typeof window !== 'undefined' ? window : {};\n  extend(win, ssrWindow);\n  return win;\n}\n\n\n//# sourceURL=webpack://united-group/./node_modules/ssr-window/ssr-window.esm.js?"
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/breakpoints/getBreakpoint.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getBreakpoint)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction getBreakpoint(breakpoints, base, containerEl) {\n  if (base === void 0) {\n    base = 'window';\n  }\n  if (!breakpoints || base === 'container' && !containerEl) return undefined;\n  let breakpoint = false;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;\n  const points = Object.keys(breakpoints).map(point => {\n    if (typeof point === 'string' && point.indexOf('@') === 0) {\n      const minRatio = parseFloat(point.substr(1));\n      const value = currentHeight * minRatio;\n      return {\n        value,\n        point\n      };\n    }\n    return {\n      value: point,\n      point\n    };\n  });\n  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));\n  for (let i = 0; i < points.length; i += 1) {\n    const {\n      point,\n      value\n    } = points[i];\n    if (base === 'window') {\n      if (window.matchMedia(`(min-width: ${value}px)`).matches) {\n        breakpoint = point;\n      }\n    } else if (value <= containerEl.clientWidth) {\n      breakpoint = point;\n    }\n  }\n  return breakpoint || 'max';\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/breakpoints/getBreakpoint.js?"
      );
    },
    /*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
    "./node_modules/swiper/core/breakpoints/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");\n/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/breakpoints/index.js?'
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/breakpoints/setBreakpoint.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setBreakpoint)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nconst isGridEnabled = (swiper, params) => {\n  return swiper.grid && params.grid && params.grid.rows > 1;\n};\nfunction setBreakpoint() {\n  const swiper = this;\n  const {\n    activeIndex,\n    initialized,\n    loopedSlides = 0,\n    params,\n    $el\n  } = swiper;\n  const breakpoints = params.breakpoints;\n  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters\n\n  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);\n  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;\n  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;\n  const breakpointParams = breakpointOnlyParams || swiper.originalParams;\n  const wasMultiRow = isGridEnabled(swiper, params);\n  const isMultiRow = isGridEnabled(swiper, breakpointParams);\n  const wasEnabled = params.enabled;\n  if (wasMultiRow && !isMultiRow) {\n    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);\n    swiper.emitContainerClasses();\n  } else if (!wasMultiRow && isMultiRow) {\n    $el.addClass(`${params.containerModifierClass}grid`);\n    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {\n      $el.addClass(`${params.containerModifierClass}grid-column`);\n    }\n    swiper.emitContainerClasses();\n  }\n  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;\n  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);\n  if (directionChanged && initialized) {\n    swiper.changeDirection();\n  }\n  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);\n  const isEnabled = swiper.params.enabled;\n  Object.assign(swiper, {\n    allowTouchMove: swiper.params.allowTouchMove,\n    allowSlideNext: swiper.params.allowSlideNext,\n    allowSlidePrev: swiper.params.allowSlidePrev\n  });\n  if (wasEnabled && !isEnabled) {\n    swiper.disable();\n  } else if (!wasEnabled && isEnabled) {\n    swiper.enable();\n  }\n  swiper.currentBreakpoint = breakpoint;\n  swiper.emit('_beforeBreakpoint', breakpointParams);\n  if (needsReLoop && initialized) {\n    swiper.loopDestroy();\n    swiper.loopCreate();\n    swiper.updateSlides();\n    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);\n  }\n  swiper.emit('breakpoint', breakpointParams);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/breakpoints/setBreakpoint.js?"
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
    "./node_modules/swiper/core/check-overflow/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkOverflow() {\n  const swiper = this;\n  const {\n    isLocked: wasLocked,\n    params\n  } = swiper;\n  const {\n    slidesOffsetBefore\n  } = params;\n  if (slidesOffsetBefore) {\n    const lastSlideIndex = swiper.slides.length - 1;\n    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;\n    swiper.isLocked = swiper.size > lastSlideRightEdge;\n  } else {\n    swiper.isLocked = swiper.snapGrid.length === 1;\n  }\n  if (params.allowSlideNext === true) {\n    swiper.allowSlideNext = !swiper.isLocked;\n  }\n  if (params.allowSlidePrev === true) {\n    swiper.allowSlidePrev = !swiper.isLocked;\n  }\n  if (wasLocked && wasLocked !== swiper.isLocked) {\n    swiper.isEnd = false;\n  }\n  if (wasLocked !== swiper.isLocked) {\n    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  checkOverflow\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/check-overflow/index.js?"
      );
    },
    /*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
    "./node_modules/swiper/core/classes/addClasses.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addClasses)\n/* harmony export */ });\nfunction prepareClasses(entries, prefix) {\n  const resultClasses = [];\n  entries.forEach(item => {\n    if (typeof item === 'object') {\n      Object.keys(item).forEach(classNames => {\n        if (item[classNames]) {\n          resultClasses.push(prefix + classNames);\n        }\n      });\n    } else if (typeof item === 'string') {\n      resultClasses.push(prefix + item);\n    }\n  });\n  return resultClasses;\n}\nfunction addClasses() {\n  const swiper = this;\n  const {\n    classNames,\n    params,\n    rtl,\n    $el,\n    device,\n    support\n  } = swiper; // prettier-ignore\n\n  const suffixes = prepareClasses(['initialized', params.direction, {\n    'pointer-events': !support.touch\n  }, {\n    'free-mode': swiper.params.freeMode && params.freeMode.enabled\n  }, {\n    'autoheight': params.autoHeight\n  }, {\n    'rtl': rtl\n  }, {\n    'grid': params.grid && params.grid.rows > 1\n  }, {\n    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'\n  }, {\n    'android': device.android\n  }, {\n    'ios': device.ios\n  }, {\n    'css-mode': params.cssMode\n  }, {\n    'centered': params.cssMode && params.centeredSlides\n  }], params.containerModifierClass);\n  classNames.push(...suffixes);\n  $el.addClass([...classNames].join(' '));\n  swiper.emitContainerClasses();\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/classes/addClasses.js?"
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
    "./node_modules/swiper/core/classes/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");\n/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/classes/index.js?'
      );
    },
    /*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
    "./node_modules/swiper/core/classes/removeClasses.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeClasses)\n/* harmony export */ });\nfunction removeClasses() {\n  const swiper = this;\n  const {\n    $el,\n    classNames\n  } = swiper;\n  $el.removeClass(classNames.join(' '));\n  swiper.emitContainerClasses();\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/classes/removeClasses.js?"
      );
    },
    /*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
    "./node_modules/swiper/core/core.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ \"./node_modules/swiper/shared/get-support.js\");\n/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ \"./node_modules/swiper/shared/get-device.js\");\n/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ \"./node_modules/swiper/shared/get-browser.js\");\n/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ \"./node_modules/swiper/core/modules/resize/resize.js\");\n/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ \"./node_modules/swiper/core/modules/observer/observer.js\");\n/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ \"./node_modules/swiper/core/events-emitter.js\");\n/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ \"./node_modules/swiper/core/update/index.js\");\n/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ \"./node_modules/swiper/core/translate/index.js\");\n/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ \"./node_modules/swiper/core/transition/index.js\");\n/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ \"./node_modules/swiper/core/slide/index.js\");\n/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ \"./node_modules/swiper/core/loop/index.js\");\n/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ \"./node_modules/swiper/core/grab-cursor/index.js\");\n/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ \"./node_modules/swiper/core/events/index.js\");\n/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ \"./node_modules/swiper/core/breakpoints/index.js\");\n/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ \"./node_modules/swiper/core/classes/index.js\");\n/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ \"./node_modules/swiper/core/images/index.js\");\n/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ \"./node_modules/swiper/core/check-overflow/index.js\");\n/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ \"./node_modules/swiper/core/defaults.js\");\n/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ \"./node_modules/swiper/core/moduleExtendParams.js\");\n/* eslint no-param-reassign: \"off\" */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst prototypes = {\n  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n};\nconst extendedDefaults = {};\nclass Swiper {\n  constructor() {\n    let el;\n    let params;\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {\n      params = args[0];\n    } else {\n      [el, params] = args;\n    }\n    if (!params) params = {};\n    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);\n    if (el && !params.el) params.el = el;\n    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el).length > 1) {\n      const swipers = [];\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el).each(containerEl => {\n        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {\n          el: containerEl\n        });\n        swipers.push(new Swiper(newParams));\n      });\n      return swipers;\n    } // Swiper Instance\n\n    const swiper = this;\n    swiper.__swiper__ = true;\n    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();\n    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({\n      userAgent: params.userAgent\n    });\n    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();\n    swiper.eventsListeners = {};\n    swiper.eventsAnyListeners = [];\n    swiper.modules = [...swiper.__modules__];\n    if (params.modules && Array.isArray(params.modules)) {\n      swiper.modules.push(...params.modules);\n    }\n    const allModulesParams = {};\n    swiper.modules.forEach(mod => {\n      mod({\n        swiper,\n        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(params, allModulesParams),\n        on: swiper.on.bind(swiper),\n        once: swiper.once.bind(swiper),\n        off: swiper.off.bind(swiper),\n        emit: swiper.emit.bind(swiper)\n      });\n    }); // Extend defaults with modules params\n\n    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"], allModulesParams); // Extend defaults with passed params\n\n    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);\n    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);\n    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners\n\n    if (swiper.params && swiper.params.on) {\n      Object.keys(swiper.params.on).forEach(eventName => {\n        swiper.on(eventName, swiper.params.on[eventName]);\n      });\n    }\n    if (swiper.params && swiper.params.onAny) {\n      swiper.onAny(swiper.params.onAny);\n    } // Save Dom lib\n\n    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // Extend Swiper\n\n    Object.assign(swiper, {\n      enabled: swiper.params.enabled,\n      el,\n      // Classes\n      classNames: [],\n      // Slides\n      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      slidesGrid: [],\n      snapGrid: [],\n      slidesSizesGrid: [],\n      // isDirection\n      isHorizontal() {\n        return swiper.params.direction === 'horizontal';\n      },\n      isVertical() {\n        return swiper.params.direction === 'vertical';\n      },\n      // Indexes\n      activeIndex: 0,\n      realIndex: 0,\n      //\n      isBeginning: true,\n      isEnd: false,\n      // Props\n      translate: 0,\n      previousTranslate: 0,\n      progress: 0,\n      velocity: 0,\n      animating: false,\n      // Locks\n      allowSlideNext: swiper.params.allowSlideNext,\n      allowSlidePrev: swiper.params.allowSlidePrev,\n      // Touch Events\n      touchEvents: function touchEvents() {\n        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];\n        const desktop = ['pointerdown', 'pointermove', 'pointerup'];\n        swiper.touchEventsTouch = {\n          start: touch[0],\n          move: touch[1],\n          end: touch[2],\n          cancel: touch[3]\n        };\n        swiper.touchEventsDesktop = {\n          start: desktop[0],\n          move: desktop[1],\n          end: desktop[2]\n        };\n        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;\n      }(),\n      touchEventsData: {\n        isTouched: undefined,\n        isMoved: undefined,\n        allowTouchCallbacks: undefined,\n        touchStartTime: undefined,\n        isScrolling: undefined,\n        currentTranslate: undefined,\n        startTranslate: undefined,\n        allowThresholdMove: undefined,\n        // Form elements to match\n        focusableElements: swiper.params.focusableElements,\n        // Last click time\n        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        clickTimeout: undefined,\n        // Velocities\n        velocities: [],\n        allowMomentumBounce: undefined,\n        isTouchEvent: undefined,\n        startMoving: undefined\n      },\n      // Clicks\n      allowClick: true,\n      // Touches\n      allowTouchMove: swiper.params.allowTouchMove,\n      touches: {\n        startX: 0,\n        startY: 0,\n        currentX: 0,\n        currentY: 0,\n        diff: 0\n      },\n      // Images\n      imagesToLoad: [],\n      imagesLoaded: 0\n    });\n    swiper.emit('_swiper'); // Init\n\n    if (swiper.params.init) {\n      swiper.init();\n    } // Return app instance\n\n    return swiper;\n  }\n  enable() {\n    const swiper = this;\n    if (swiper.enabled) return;\n    swiper.enabled = true;\n    if (swiper.params.grabCursor) {\n      swiper.setGrabCursor();\n    }\n    swiper.emit('enable');\n  }\n  disable() {\n    const swiper = this;\n    if (!swiper.enabled) return;\n    swiper.enabled = false;\n    if (swiper.params.grabCursor) {\n      swiper.unsetGrabCursor();\n    }\n    swiper.emit('disable');\n  }\n  setProgress(progress, speed) {\n    const swiper = this;\n    progress = Math.min(Math.max(progress, 0), 1);\n    const min = swiper.minTranslate();\n    const max = swiper.maxTranslate();\n    const current = (max - min) * progress + min;\n    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n  emitContainerClasses() {\n    const swiper = this;\n    if (!swiper.params._emitClasses || !swiper.el) return;\n    const cls = swiper.el.className.split(' ').filter(className => {\n      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;\n    });\n    swiper.emit('_containerClasses', cls.join(' '));\n  }\n  getSlideClasses(slideEl) {\n    const swiper = this;\n    return slideEl.className.split(' ').filter(className => {\n      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;\n    }).join(' ');\n  }\n  emitSlidesClasses() {\n    const swiper = this;\n    if (!swiper.params._emitClasses || !swiper.el) return;\n    const updates = [];\n    swiper.slides.each(slideEl => {\n      const classNames = swiper.getSlideClasses(slideEl);\n      updates.push({\n        slideEl,\n        classNames\n      });\n      swiper.emit('_slideClass', slideEl, classNames);\n    });\n    swiper.emit('_slideClasses', updates);\n  }\n  slidesPerViewDynamic(view, exact) {\n    if (view === void 0) {\n      view = 'current';\n    }\n    if (exact === void 0) {\n      exact = false;\n    }\n    const swiper = this;\n    const {\n      params,\n      slides,\n      slidesGrid,\n      slidesSizesGrid,\n      size: swiperSize,\n      activeIndex\n    } = swiper;\n    let spv = 1;\n    if (params.centeredSlides) {\n      let slideSize = slides[activeIndex].swiperSlideSize;\n      let breakLoop;\n      for (let i = activeIndex + 1; i < slides.length; i += 1) {\n        if (slides[i] && !breakLoop) {\n          slideSize += slides[i].swiperSlideSize;\n          spv += 1;\n          if (slideSize > swiperSize) breakLoop = true;\n        }\n      }\n      for (let i = activeIndex - 1; i >= 0; i -= 1) {\n        if (slides[i] && !breakLoop) {\n          slideSize += slides[i].swiperSlideSize;\n          spv += 1;\n          if (slideSize > swiperSize) breakLoop = true;\n        }\n      }\n    } else {\n      // eslint-disable-next-line\n      if (view === 'current') {\n        for (let i = activeIndex + 1; i < slides.length; i += 1) {\n          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;\n          if (slideInView) {\n            spv += 1;\n          }\n        }\n      } else {\n        // previous\n        for (let i = activeIndex - 1; i >= 0; i -= 1) {\n          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;\n          if (slideInView) {\n            spv += 1;\n          }\n        }\n      }\n    }\n    return spv;\n  }\n  update() {\n    const swiper = this;\n    if (!swiper || swiper.destroyed) return;\n    const {\n      snapGrid,\n      params\n    } = swiper; // Breakpoints\n\n    if (params.breakpoints) {\n      swiper.setBreakpoint();\n    }\n    swiper.updateSize();\n    swiper.updateSlides();\n    swiper.updateProgress();\n    swiper.updateSlidesClasses();\n    function setTranslate() {\n      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;\n      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());\n      swiper.setTranslate(newTranslate);\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    }\n    let translated;\n    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {\n      setTranslate();\n      if (swiper.params.autoHeight) {\n        swiper.updateAutoHeight();\n      }\n    } else {\n      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {\n        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);\n      } else {\n        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);\n      }\n      if (!translated) {\n        setTranslate();\n      }\n    }\n    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {\n      swiper.checkOverflow();\n    }\n    swiper.emit('update');\n  }\n  changeDirection(newDirection, needUpdate) {\n    if (needUpdate === void 0) {\n      needUpdate = true;\n    }\n    const swiper = this;\n    const currentDirection = swiper.params.direction;\n    if (!newDirection) {\n      // eslint-disable-next-line\n      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';\n    }\n    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {\n      return swiper;\n    }\n    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);\n    swiper.emitContainerClasses();\n    swiper.params.direction = newDirection;\n    swiper.slides.each(slideEl => {\n      if (newDirection === 'vertical') {\n        slideEl.style.width = '';\n      } else {\n        slideEl.style.height = '';\n      }\n    });\n    swiper.emit('changeDirection');\n    if (needUpdate) swiper.update();\n    return swiper;\n  }\n  mount(el) {\n    const swiper = this;\n    if (swiper.mounted) return true; // Find el\n\n    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el || swiper.params.el);\n    el = $el[0];\n    if (!el) {\n      return false;\n    }\n    el.swiper = swiper;\n    const getWrapperSelector = () => {\n      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;\n    };\n    const getWrapper = () => {\n      if (el && el.shadowRoot && el.shadowRoot.querySelector) {\n        const res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items\n\n        res.children = options => $el.children(options);\n        return res;\n      }\n      return $el.children(getWrapperSelector());\n    }; // Find Wrapper\n\n    let $wrapperEl = getWrapper();\n    if ($wrapperEl.length === 0 && swiper.params.createElements) {\n      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n      const wrapper = document.createElement('div');\n      $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(wrapper);\n      wrapper.className = swiper.params.wrapperClass;\n      $el.append(wrapper);\n      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {\n        $wrapperEl.append(slideEl);\n      });\n    }\n    Object.assign(swiper, {\n      $el,\n      el,\n      $wrapperEl,\n      wrapperEl: $wrapperEl[0],\n      mounted: true,\n      // RTL\n      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',\n      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),\n      wrongRTL: $wrapperEl.css('display') === '-webkit-box'\n    });\n    return true;\n  }\n  init(el) {\n    const swiper = this;\n    if (swiper.initialized) return swiper;\n    const mounted = swiper.mount(el);\n    if (mounted === false) return swiper;\n    swiper.emit('beforeInit'); // Set breakpoint\n\n    if (swiper.params.breakpoints) {\n      swiper.setBreakpoint();\n    } // Add Classes\n\n    swiper.addClasses(); // Create loop\n\n    if (swiper.params.loop) {\n      swiper.loopCreate();\n    } // Update size\n\n    swiper.updateSize(); // Update slides\n\n    swiper.updateSlides();\n    if (swiper.params.watchOverflow) {\n      swiper.checkOverflow();\n    } // Set Grab Cursor\n\n    if (swiper.params.grabCursor && swiper.enabled) {\n      swiper.setGrabCursor();\n    }\n    if (swiper.params.preloadImages) {\n      swiper.preloadImages();\n    } // Slide To Initial Slide\n\n    if (swiper.params.loop) {\n      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);\n    } else {\n      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);\n    } // Attach events\n\n    swiper.attachEvents(); // Init Flag\n\n    swiper.initialized = true; // Emit\n\n    swiper.emit('init');\n    swiper.emit('afterInit');\n    return swiper;\n  }\n  destroy(deleteInstance, cleanStyles) {\n    if (deleteInstance === void 0) {\n      deleteInstance = true;\n    }\n    if (cleanStyles === void 0) {\n      cleanStyles = true;\n    }\n    const swiper = this;\n    const {\n      params,\n      $el,\n      $wrapperEl,\n      slides\n    } = swiper;\n    if (typeof swiper.params === 'undefined' || swiper.destroyed) {\n      return null;\n    }\n    swiper.emit('beforeDestroy'); // Init Flag\n\n    swiper.initialized = false; // Detach events\n\n    swiper.detachEvents(); // Destroy loop\n\n    if (params.loop) {\n      swiper.loopDestroy();\n    } // Cleanup styles\n\n    if (cleanStyles) {\n      swiper.removeClasses();\n      $el.removeAttr('style');\n      $wrapperEl.removeAttr('style');\n      if (slides && slides.length) {\n        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');\n      }\n    }\n    swiper.emit('destroy'); // Detach emitter events\n\n    Object.keys(swiper.eventsListeners).forEach(eventName => {\n      swiper.off(eventName);\n    });\n    if (deleteInstance !== false) {\n      swiper.$el[0].swiper = null;\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);\n    }\n    swiper.destroyed = true;\n    return null;\n  }\n  static extendDefaults(newDefaults) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);\n  }\n  static get extendedDefaults() {\n    return extendedDefaults;\n  }\n  static get defaults() {\n    return _defaults_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\n  }\n  static installModule(mod) {\n    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];\n    const modules = Swiper.prototype.__modules__;\n    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {\n      modules.push(mod);\n    }\n  }\n  static use(module) {\n    if (Array.isArray(module)) {\n      module.forEach(m => Swiper.installModule(m));\n      return Swiper;\n    }\n    Swiper.installModule(module);\n    return Swiper;\n  }\n}\nObject.keys(prototypes).forEach(prototypeGroup => {\n  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {\n    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];\n  });\n});\nSwiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/core.js?"
      );
    },
    /*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
    "./node_modules/swiper/core/defaults.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init: true,\n  direction: 'horizontal',\n  touchEventsTarget: 'wrapper',\n  initialSlide: 0,\n  speed: 300,\n  cssMode: false,\n  updateOnWindowResize: true,\n  resizeObserver: true,\n  nested: false,\n  createElements: false,\n  enabled: true,\n  focusableElements: 'input, select, option, textarea, button, video, label',\n  // Overrides\n  width: null,\n  height: null,\n  //\n  preventInteractionOnTransition: false,\n  // ssr\n  userAgent: null,\n  url: null,\n  // To support iOS's swipe-to-go-back gesture (when being used in-app).\n  edgeSwipeDetection: false,\n  edgeSwipeThreshold: 20,\n  // Autoheight\n  autoHeight: false,\n  // Set wrapper width\n  setWrapperSize: false,\n  // Virtual Translate\n  virtualTranslate: false,\n  // Effects\n  effect: 'slide',\n  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'\n  // Breakpoints\n  breakpoints: undefined,\n  breakpointsBase: 'window',\n  // Slides grid\n  spaceBetween: 0,\n  slidesPerView: 1,\n  slidesPerGroup: 1,\n  slidesPerGroupSkip: 0,\n  slidesPerGroupAuto: false,\n  centeredSlides: false,\n  centeredSlidesBounds: false,\n  slidesOffsetBefore: 0,\n  // in px\n  slidesOffsetAfter: 0,\n  // in px\n  normalizeSlideIndex: true,\n  centerInsufficientSlides: false,\n  // Disable swiper and hide navigation when container not overflow\n  watchOverflow: true,\n  // Round length\n  roundLengths: false,\n  // Touches\n  touchRatio: 1,\n  touchAngle: 45,\n  simulateTouch: true,\n  shortSwipes: true,\n  longSwipes: true,\n  longSwipesRatio: 0.5,\n  longSwipesMs: 300,\n  followFinger: true,\n  allowTouchMove: true,\n  threshold: 0,\n  touchMoveStopPropagation: false,\n  touchStartPreventDefault: true,\n  touchStartForcePreventDefault: false,\n  touchReleaseOnEdges: false,\n  // Unique Navigation Elements\n  uniqueNavElements: true,\n  // Resistance\n  resistance: true,\n  resistanceRatio: 0.85,\n  // Progress\n  watchSlidesProgress: false,\n  // Cursor\n  grabCursor: false,\n  // Clicks\n  preventClicks: true,\n  preventClicksPropagation: true,\n  slideToClickedSlide: false,\n  // Images\n  preloadImages: true,\n  updateOnImagesReady: true,\n  // loop\n  loop: false,\n  loopAdditionalSlides: 0,\n  loopedSlides: null,\n  loopFillGroupWithBlank: false,\n  loopPreventsSlide: true,\n  // rewind\n  rewind: false,\n  // Swiping/no swiping\n  allowSlidePrev: true,\n  allowSlideNext: true,\n  swipeHandler: null,\n  // '.swipe-handler',\n  noSwiping: true,\n  noSwipingClass: 'swiper-no-swiping',\n  noSwipingSelector: null,\n  // Passive Listeners\n  passiveListeners: true,\n  maxBackfaceHiddenSlides: 10,\n  // NS\n  containerModifierClass: 'swiper-',\n  // NEW\n  slideClass: 'swiper-slide',\n  slideBlankClass: 'swiper-slide-invisible-blank',\n  slideActiveClass: 'swiper-slide-active',\n  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',\n  slideVisibleClass: 'swiper-slide-visible',\n  slideDuplicateClass: 'swiper-slide-duplicate',\n  slideNextClass: 'swiper-slide-next',\n  slideDuplicateNextClass: 'swiper-slide-duplicate-next',\n  slidePrevClass: 'swiper-slide-prev',\n  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',\n  wrapperClass: 'swiper-wrapper',\n  // Callbacks\n  runCallbacksOnInit: true,\n  // Internals\n  _emitClasses: false\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/defaults.js?"
      );
    },
    /*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
    "./node_modules/swiper/core/events-emitter.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-underscore-dangle */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  on(events, handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n    const method = priority ? 'unshift' : 'push';\n    events.split(' ').forEach(event => {\n      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];\n      self.eventsListeners[event][method](handler);\n    });\n    return self;\n  },\n  once(events, handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n    function onceHandler() {\n      self.off(events, onceHandler);\n      if (onceHandler.__emitterProxy) {\n        delete onceHandler.__emitterProxy;\n      }\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      handler.apply(self, args);\n    }\n    onceHandler.__emitterProxy = handler;\n    return self.on(events, onceHandler, priority);\n  },\n  onAny(handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n    const method = priority ? 'unshift' : 'push';\n    if (self.eventsAnyListeners.indexOf(handler) < 0) {\n      self.eventsAnyListeners[method](handler);\n    }\n    return self;\n  },\n  offAny(handler) {\n    const self = this;\n    if (!self.eventsAnyListeners) return self;\n    const index = self.eventsAnyListeners.indexOf(handler);\n    if (index >= 0) {\n      self.eventsAnyListeners.splice(index, 1);\n    }\n    return self;\n  },\n  off(events, handler) {\n    const self = this;\n    if (!self.eventsListeners) return self;\n    events.split(' ').forEach(event => {\n      if (typeof handler === 'undefined') {\n        self.eventsListeners[event] = [];\n      } else if (self.eventsListeners[event]) {\n        self.eventsListeners[event].forEach((eventHandler, index) => {\n          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {\n            self.eventsListeners[event].splice(index, 1);\n          }\n        });\n      }\n    });\n    return self;\n  },\n  emit() {\n    const self = this;\n    if (!self.eventsListeners) return self;\n    let events;\n    let data;\n    let context;\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n    if (typeof args[0] === 'string' || Array.isArray(args[0])) {\n      events = args[0];\n      data = args.slice(1, args.length);\n      context = self;\n    } else {\n      events = args[0].events;\n      data = args[0].data;\n      context = args[0].context || self;\n    }\n    data.unshift(context);\n    const eventsArray = Array.isArray(events) ? events : events.split(' ');\n    eventsArray.forEach(event => {\n      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {\n        self.eventsAnyListeners.forEach(eventHandler => {\n          eventHandler.apply(context, [event, ...data]);\n        });\n      }\n      if (self.eventsListeners && self.eventsListeners[event]) {\n        self.eventsListeners[event].forEach(eventHandler => {\n          eventHandler.apply(context, data);\n        });\n      }\n    });\n    return self;\n  }\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events-emitter.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
    "./node_modules/swiper/core/events/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");\n/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");\n/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");\n/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");\n/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");\n/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");\n\n\n\n\n\n\n\nlet dummyEventAttached = false;\nfunction dummyEventListener() {}\nconst events = (swiper, method) => {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    touchEvents,\n    el,\n    wrapperEl,\n    device,\n    support\n  } = swiper;\n  const capture = !!params.nested;\n  const domMethod = method === \'on\' ? \'addEventListener\' : \'removeEventListener\';\n  const swiperMethod = method; // Touch Events\n\n  if (!support.touch) {\n    el[domMethod](touchEvents.start, swiper.onTouchStart, false);\n    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);\n    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);\n  } else {\n    const passiveListener = touchEvents.start === \'touchstart\' && support.passiveListener && params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);\n    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {\n      passive: false,\n      capture\n    } : capture);\n    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);\n    if (touchEvents.cancel) {\n      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);\n    }\n  } // Prevent Links Clicks\n\n  if (params.preventClicks || params.preventClicksPropagation) {\n    el[domMethod](\'click\', swiper.onClick, true);\n  }\n  if (params.cssMode) {\n    wrapperEl[domMethod](\'scroll\', swiper.onScroll);\n  } // Resize handler\n\n  if (params.updateOnWindowResize) {\n    swiper[swiperMethod](device.ios || device.android ? \'resize orientationchange observerUpdate\' : \'resize observerUpdate\', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);\n  } else {\n    swiper[swiperMethod](\'observerUpdate\', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);\n  }\n};\nfunction attachEvents() {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    support\n  } = swiper;\n  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);\n  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);\n  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);\n  if (params.cssMode) {\n    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);\n  }\n  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);\n  if (support.touch && !dummyEventAttached) {\n    document.addEventListener(\'touchstart\', dummyEventListener);\n    dummyEventAttached = true;\n  }\n  events(swiper, \'on\');\n}\nfunction detachEvents() {\n  const swiper = this;\n  events(swiper, \'off\');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  attachEvents,\n  detachEvents\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/index.js?'
      );
    },
    /*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
    "./node_modules/swiper/core/events/onClick.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ onClick)\n/* harmony export */ });\nfunction onClick(e) {\n  const swiper = this;\n  if (!swiper.enabled) return;\n  if (!swiper.allowClick) {\n    if (swiper.params.preventClicks) e.preventDefault();\n    if (swiper.params.preventClicksPropagation && swiper.animating) {\n      e.stopPropagation();\n      e.stopImmediatePropagation();\n    }\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onClick.js?'
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/events/onResize.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onResize)\n/* harmony export */ });\nfunction onResize() {\n  const swiper = this;\n  const {\n    params,\n    el\n  } = swiper;\n  if (el && el.offsetWidth === 0) return; // Breakpoints\n\n  if (params.breakpoints) {\n    swiper.setBreakpoint();\n  } // Save locks\n\n  const {\n    allowSlideNext,\n    allowSlidePrev,\n    snapGrid\n  } = swiper; // Disable locks on resize\n\n  swiper.allowSlideNext = true;\n  swiper.allowSlidePrev = true;\n  swiper.updateSize();\n  swiper.updateSlides();\n  swiper.updateSlidesClasses();\n  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {\n    swiper.slideTo(swiper.slides.length - 1, 0, false, true);\n  } else {\n    swiper.slideTo(swiper.activeIndex, 0, false, true);\n  }\n  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {\n    swiper.autoplay.run();\n  } // Return locks after resize\n\n  swiper.allowSlidePrev = allowSlidePrev;\n  swiper.allowSlideNext = allowSlideNext;\n  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {\n    swiper.checkOverflow();\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onResize.js?"
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/events/onScroll.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onScroll)\n/* harmony export */ });\nfunction onScroll() {\n  const swiper = this;\n  const {\n    wrapperEl,\n    rtlTranslate,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  swiper.previousTranslate = swiper.translate;\n  if (swiper.isHorizontal()) {\n    swiper.translate = -wrapperEl.scrollLeft;\n  } else {\n    swiper.translate = -wrapperEl.scrollTop;\n  } // eslint-disable-next-line\n\n  if (swiper.translate === -0) swiper.translate = 0;\n  swiper.updateActiveIndex();\n  swiper.updateSlidesClasses();\n  let newProgress;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n  if (translatesDiff === 0) {\n    newProgress = 0;\n  } else {\n    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;\n  }\n  if (newProgress !== swiper.progress) {\n    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);\n  }\n  swiper.emit('setTranslate', swiper.translate, false);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onScroll.js?"
      );
    },
    /*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
    "./node_modules/swiper/core/events/onTouchEnd.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onTouchEnd)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction onTouchEnd(event) {\n  const swiper = this;\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    rtlTranslate: rtl,\n    slidesGrid,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n  if (data.allowTouchCallbacks) {\n    swiper.emit('touchEnd', e);\n  }\n  data.allowTouchCallbacks = false;\n  if (!data.isTouched) {\n    if (data.isMoved && params.grabCursor) {\n      swiper.setGrabCursor(false);\n    }\n    data.isMoved = false;\n    data.startMoving = false;\n    return;\n  } // Return Grab Cursor\n\n  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {\n    swiper.setGrabCursor(false);\n  } // Time diff\n\n  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click\n\n  if (swiper.allowClick) {\n    const pathTree = e.path || e.composedPath && e.composedPath();\n    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);\n    swiper.emit('tap click', e);\n    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {\n      swiper.emit('doubleTap doubleClick', e);\n    }\n  }\n  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {\n    if (!swiper.destroyed) swiper.allowClick = true;\n  });\n  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {\n    data.isTouched = false;\n    data.isMoved = false;\n    data.startMoving = false;\n    return;\n  }\n  data.isTouched = false;\n  data.isMoved = false;\n  data.startMoving = false;\n  let currentPos;\n  if (params.followFinger) {\n    currentPos = rtl ? swiper.translate : -swiper.translate;\n  } else {\n    currentPos = -data.currentTranslate;\n  }\n  if (params.cssMode) {\n    return;\n  }\n  if (swiper.params.freeMode && params.freeMode.enabled) {\n    swiper.freeMode.onTouchEnd({\n      currentPos\n    });\n    return;\n  } // Find current slide\n\n  let stopIndex = 0;\n  let groupSize = swiper.slidesSizesGrid[0];\n  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {\n    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;\n    if (typeof slidesGrid[i + increment] !== 'undefined') {\n      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {\n        stopIndex = i;\n        groupSize = slidesGrid[i + increment] - slidesGrid[i];\n      }\n    } else if (currentPos >= slidesGrid[i]) {\n      stopIndex = i;\n      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];\n    }\n  }\n  let rewindFirstIndex = null;\n  let rewindLastIndex = null;\n  if (params.rewind) {\n    if (swiper.isBeginning) {\n      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;\n    } else if (swiper.isEnd) {\n      rewindFirstIndex = 0;\n    }\n  } // Find current slide size\n\n  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;\n  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;\n  if (timeDiff > params.longSwipesMs) {\n    // Long touches\n    if (!params.longSwipes) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n    if (swiper.swipeDirection === 'next') {\n      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);\n    }\n    if (swiper.swipeDirection === 'prev') {\n      if (ratio > 1 - params.longSwipesRatio) {\n        swiper.slideTo(stopIndex + increment);\n      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {\n        swiper.slideTo(rewindLastIndex);\n      } else {\n        swiper.slideTo(stopIndex);\n      }\n    }\n  } else {\n    // Short swipes\n    if (!params.shortSwipes) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);\n    if (!isNavButtonTarget) {\n      if (swiper.swipeDirection === 'next') {\n        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);\n      }\n      if (swiper.swipeDirection === 'prev') {\n        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);\n      }\n    } else if (e.target === swiper.navigation.nextEl) {\n      swiper.slideTo(stopIndex + increment);\n    } else {\n      swiper.slideTo(stopIndex);\n    }\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onTouchEnd.js?"
      );
    },
    /*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
    "./node_modules/swiper/core/events/onTouchMove.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onTouchMove)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n\nfunction onTouchMove(event) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const swiper = this;\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    rtlTranslate: rtl,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n  if (!data.isTouched) {\n    if (data.startMoving && data.isScrolling) {\n      swiper.emit('touchMoveOpposite', e);\n    }\n    return;\n  }\n  if (data.isTouchEvent && e.type !== 'touchmove') return;\n  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);\n  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;\n  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;\n  if (e.preventedByNestedSwiper) {\n    touches.startX = pageX;\n    touches.startY = pageY;\n    return;\n  }\n  if (!swiper.allowTouchMove) {\n    if (!(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).is(data.focusableElements)) {\n      swiper.allowClick = false;\n    }\n    if (data.isTouched) {\n      Object.assign(touches, {\n        startX: pageX,\n        startY: pageY,\n        currentX: pageX,\n        currentY: pageY\n      });\n      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n    }\n    return;\n  }\n  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {\n    if (swiper.isVertical()) {\n      // Vertical\n      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {\n        data.isTouched = false;\n        data.isMoved = false;\n        return;\n      }\n    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {\n      return;\n    }\n  }\n  if (data.isTouchEvent && document.activeElement) {\n    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).is(data.focusableElements)) {\n      data.isMoved = true;\n      swiper.allowClick = false;\n      return;\n    }\n  }\n  if (data.allowTouchCallbacks) {\n    swiper.emit('touchMove', e);\n  }\n  if (e.targetTouches && e.targetTouches.length > 1) return;\n  touches.currentX = pageX;\n  touches.currentY = pageY;\n  const diffX = touches.currentX - touches.startX;\n  const diffY = touches.currentY - touches.startY;\n  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;\n  if (typeof data.isScrolling === 'undefined') {\n    let touchAngle;\n    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {\n      data.isScrolling = false;\n    } else {\n      // eslint-disable-next-line\n      if (diffX * diffX + diffY * diffY >= 25) {\n        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;\n        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;\n      }\n    }\n  }\n  if (data.isScrolling) {\n    swiper.emit('touchMoveOpposite', e);\n  }\n  if (typeof data.startMoving === 'undefined') {\n    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {\n      data.startMoving = true;\n    }\n  }\n  if (data.isScrolling) {\n    data.isTouched = false;\n    return;\n  }\n  if (!data.startMoving) {\n    return;\n  }\n  swiper.allowClick = false;\n  if (!params.cssMode && e.cancelable) {\n    e.preventDefault();\n  }\n  if (params.touchMoveStopPropagation && !params.nested) {\n    e.stopPropagation();\n  }\n  if (!data.isMoved) {\n    if (params.loop && !params.cssMode) {\n      swiper.loopFix();\n    }\n    data.startTranslate = swiper.getTranslate();\n    swiper.setTransition(0);\n    if (swiper.animating) {\n      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');\n    }\n    data.allowMomentumBounce = false; // Grab Cursor\n\n    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {\n      swiper.setGrabCursor(true);\n    }\n    swiper.emit('sliderFirstMove', e);\n  }\n  swiper.emit('sliderMove', e);\n  data.isMoved = true;\n  let diff = swiper.isHorizontal() ? diffX : diffY;\n  touches.diff = diff;\n  diff *= params.touchRatio;\n  if (rtl) diff = -diff;\n  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';\n  data.currentTranslate = diff + data.startTranslate;\n  let disableParentSwiper = true;\n  let resistanceRatio = params.resistanceRatio;\n  if (params.touchReleaseOnEdges) {\n    resistanceRatio = 0;\n  }\n  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {\n    disableParentSwiper = false;\n    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;\n  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {\n    disableParentSwiper = false;\n    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;\n  }\n  if (disableParentSwiper) {\n    e.preventedByNestedSwiper = true;\n  } // Directions locks\n\n  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {\n    data.currentTranslate = data.startTranslate;\n  }\n  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {\n    data.currentTranslate = data.startTranslate;\n  }\n  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {\n    data.currentTranslate = data.startTranslate;\n  } // Threshold\n\n  if (params.threshold > 0) {\n    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {\n      if (!data.allowThresholdMove) {\n        data.allowThresholdMove = true;\n        touches.startX = touches.currentX;\n        touches.startY = touches.currentY;\n        data.currentTranslate = data.startTranslate;\n        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;\n        return;\n      }\n    } else {\n      data.currentTranslate = data.startTranslate;\n      return;\n    }\n  }\n  if (!params.followFinger || params.cssMode) return; // Update active index in free mode\n\n  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {\n    swiper.freeMode.onTouchMove();\n  } // Update progress\n\n  swiper.updateProgress(data.currentTranslate); // Update translate\n\n  swiper.setTranslate(data.currentTranslate);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onTouchMove.js?"
      );
    },
    /*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
    "./node_modules/swiper/core/events/onTouchStart.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onTouchStart)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd\n\nfunction closestElement(selector, base) {\n  if (base === void 0) {\n    base = this;\n  }\n  function __closestFrom(el) {\n    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;\n    if (el.assignedSlot) el = el.assignedSlot;\n    const found = el.closest(selector);\n    return found || __closestFrom(el.getRootNode().host);\n  }\n  return __closestFrom(base);\n}\nfunction onTouchStart(event) {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  if (swiper.animating && params.preventInteractionOnTransition) {\n    return;\n  }\n  if (!swiper.animating && params.cssMode && params.loop) {\n    swiper.loopFix();\n  }\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n  let $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target);\n  if (params.touchEventsTarget === 'wrapper') {\n    if (!$targetEl.closest(swiper.wrapperEl).length) return;\n  }\n  data.isTouchEvent = e.type === 'touchstart';\n  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;\n  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;\n  if (data.isTouched && data.isMoved) return; // change target el for shadow root component\n\n  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';\n  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {\n    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.path[0]);\n  }\n  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;\n  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element\n\n  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {\n    swiper.allowClick = true;\n    return;\n  }\n  if (params.swipeHandler) {\n    if (!$targetEl.closest(params.swipeHandler)[0]) return;\n  }\n  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;\n  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;\n  const startX = touches.currentX;\n  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore\n\n  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;\n  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;\n  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {\n    if (edgeSwipeDetection === 'prevent') {\n      event.preventDefault();\n    } else {\n      return;\n    }\n  }\n  Object.assign(data, {\n    isTouched: true,\n    isMoved: false,\n    allowTouchCallbacks: true,\n    isScrolling: undefined,\n    startMoving: undefined\n  });\n  touches.startX = startX;\n  touches.startY = startY;\n  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n  swiper.allowClick = true;\n  swiper.updateSize();\n  swiper.swipeDirection = undefined;\n  if (params.threshold > 0) data.allowThresholdMove = false;\n  if (e.type !== 'touchstart') {\n    let preventDefault = true;\n    if ($targetEl.is(data.focusableElements)) {\n      preventDefault = false;\n      if ($targetEl[0].nodeName === 'SELECT') {\n        data.isTouched = false;\n      }\n    }\n    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {\n      document.activeElement.blur();\n    }\n    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;\n    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {\n      e.preventDefault();\n    }\n  }\n  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {\n    swiper.freeMode.onTouchStart();\n  }\n  swiper.emit('touchStart', e);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/events/onTouchStart.js?"
      );
    },
    /*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
    "./node_modules/swiper/core/grab-cursor/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");\n/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/grab-cursor/index.js?'
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/grab-cursor/setGrabCursor.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setGrabCursor)\n/* harmony export */ });\nfunction setGrabCursor(moving) {\n  const swiper = this;\n  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;\n  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;\n  el.style.cursor = 'move';\n  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';\n  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';\n  el.style.cursor = moving ? 'grabbing' : 'grab';\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/grab-cursor/setGrabCursor.js?"
      );
    },
    /*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
    "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unsetGrabCursor)\n/* harmony export */ });\nfunction unsetGrabCursor() {\n  const swiper = this;\n  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {\n    return;\n  }\n  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
    "./node_modules/swiper/core/images/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./node_modules/swiper/core/images/loadImage.js");\n/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "./node_modules/swiper/core/images/preloadImages.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/images/index.js?'
      );
    },
    /*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
    "./node_modules/swiper/core/images/loadImage.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ loadImage)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");\n\n\nfunction loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let image;\n  function onReady() {\n    if (callback) callback();\n  }\n  const isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent(\'picture\')[0];\n  if (!isPicture && (!imageEl.complete || !checkForComplete)) {\n    if (src) {\n      image = new window.Image();\n      image.onload = onReady;\n      image.onerror = onReady;\n      if (sizes) {\n        image.sizes = sizes;\n      }\n      if (srcset) {\n        image.srcset = srcset;\n      }\n      if (src) {\n        image.src = src;\n      }\n    } else {\n      onReady();\n    }\n  } else {\n    // image already loaded...\n    onReady();\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/images/loadImage.js?'
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
    "./node_modules/swiper/core/images/preloadImages.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ preloadImages)\n/* harmony export */ });\nfunction preloadImages() {\n  const swiper = this;\n  swiper.imagesToLoad = swiper.$el.find('img');\n  function onReady() {\n    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;\n    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;\n    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {\n      if (swiper.params.updateOnImagesReady) swiper.update();\n      swiper.emit('imagesReady');\n    }\n  }\n  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {\n    const imageEl = swiper.imagesToLoad[i];\n    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/images/preloadImages.js?"
      );
    },
    /*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
    "./node_modules/swiper/core/loop/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");\n/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");\n/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/loop/index.js?'
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/loop/loopCreate.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ loopCreate)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");\n\n\nfunction loopCreate() {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    $wrapperEl\n  } = swiper; // Remove duplicated slides\n\n  const $selector = $wrapperEl.children().length > 0 ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($wrapperEl.children()[0].parentNode) : $wrapperEl;\n  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();\n  let slides = $selector.children(`.${params.slideClass}`);\n  if (params.loopFillGroupWithBlank) {\n    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;\n    if (blankSlidesNum !== params.slidesPerGroup) {\n      for (let i = 0; i < blankSlidesNum; i += 1) {\n        const blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement(\'div\')).addClass(`${params.slideClass} ${params.slideBlankClass}`);\n        $selector.append(blankNode);\n      }\n      slides = $selector.children(`.${params.slideClass}`);\n    }\n  }\n  if (params.slidesPerView === \'auto\' && !params.loopedSlides) params.loopedSlides = slides.length;\n  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));\n  swiper.loopedSlides += params.loopAdditionalSlides;\n  if (swiper.loopedSlides > slides.length) {\n    swiper.loopedSlides = slides.length;\n  }\n  const prependSlides = [];\n  const appendSlides = [];\n  slides.each((el, index) => {\n    const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);\n    if (index < swiper.loopedSlides) {\n      appendSlides.push(el);\n    }\n    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {\n      prependSlides.push(el);\n    }\n    slide.attr(\'data-swiper-slide-index\', index);\n  });\n  for (let i = 0; i < appendSlides.length; i += 1) {\n    $selector.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));\n  }\n  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {\n    $selector.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/loop/loopCreate.js?'
      );
    },
    /*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
    "./node_modules/swiper/core/loop/loopDestroy.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loopDestroy)\n/* harmony export */ });\nfunction loopDestroy() {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params,\n    slides\n  } = swiper;\n  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();\n  slides.removeAttr('data-swiper-slide-index');\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/loop/loopDestroy.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
    "./node_modules/swiper/core/loop/loopFix.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loopFix)\n/* harmony export */ });\nfunction loopFix() {\n  const swiper = this;\n  swiper.emit('beforeLoopFix');\n  const {\n    activeIndex,\n    slides,\n    loopedSlides,\n    allowSlidePrev,\n    allowSlideNext,\n    snapGrid,\n    rtlTranslate: rtl\n  } = swiper;\n  let newIndex;\n  swiper.allowSlidePrev = true;\n  swiper.allowSlideNext = true;\n  const snapTranslate = -snapGrid[activeIndex];\n  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding\n\n  if (activeIndex < loopedSlides) {\n    newIndex = slides.length - loopedSlides * 3 + activeIndex;\n    newIndex += loopedSlides;\n    const slideChanged = swiper.slideTo(newIndex, 0, false, true);\n    if (slideChanged && diff !== 0) {\n      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);\n    }\n  } else if (activeIndex >= slides.length - loopedSlides) {\n    // Fix For Positive Oversliding\n    newIndex = -slides.length + activeIndex + loopedSlides;\n    newIndex += loopedSlides;\n    const slideChanged = swiper.slideTo(newIndex, 0, false, true);\n    if (slideChanged && diff !== 0) {\n      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);\n    }\n  }\n  swiper.allowSlidePrev = allowSlidePrev;\n  swiper.allowSlideNext = allowSlideNext;\n  swiper.emit('loopFix');\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/loop/loopFix.js?"
      );
    },
    /*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
    "./node_modules/swiper/core/moduleExtendParams.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ moduleExtendParams)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction moduleExtendParams(params, allModulesParams) {\n  return function extendParams(obj) {\n    if (obj === void 0) {\n      obj = {};\n    }\n    const moduleParamName = Object.keys(obj)[0];\n    const moduleParams = obj[moduleParamName];\n    if (typeof moduleParams !== 'object' || moduleParams === null) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n      return;\n    }\n    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {\n      params[moduleParamName] = {\n        auto: true\n      };\n    }\n    if (!(moduleParamName in params && 'enabled' in moduleParams)) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n      return;\n    }\n    if (params[moduleParamName] === true) {\n      params[moduleParamName] = {\n        enabled: true\n      };\n    }\n    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {\n      params[moduleParamName].enabled = true;\n    }\n    if (!params[moduleParamName]) params[moduleParamName] = {\n      enabled: false\n    };\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n  };\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/moduleExtendParams.js?"
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/modules/observer/observer.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observer)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction Observer(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const observers = [];\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const attach = function (target, options) {\n    if (options === void 0) {\n      options = {};\n    }\n    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;\n    const observer = new ObserverFunc(mutations => {\n      // The observerUpdate event should only be triggered\n      // once despite the number of mutations.  Additional\n      // triggers are redundant and are very costly\n      if (mutations.length === 1) {\n        emit('observerUpdate', mutations[0]);\n        return;\n      }\n      const observerUpdate = function observerUpdate() {\n        emit('observerUpdate', mutations[0]);\n      };\n      if (window.requestAnimationFrame) {\n        window.requestAnimationFrame(observerUpdate);\n      } else {\n        window.setTimeout(observerUpdate, 0);\n      }\n    });\n    observer.observe(target, {\n      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,\n      childList: typeof options.childList === 'undefined' ? true : options.childList,\n      characterData: typeof options.characterData === 'undefined' ? true : options.characterData\n    });\n    observers.push(observer);\n  };\n  const init = () => {\n    if (!swiper.params.observer) return;\n    if (swiper.params.observeParents) {\n      const containerParents = swiper.$el.parents();\n      for (let i = 0; i < containerParents.length; i += 1) {\n        attach(containerParents[i]);\n      }\n    } // Observe container\n\n    attach(swiper.$el[0], {\n      childList: swiper.params.observeSlideChildren\n    }); // Observe wrapper\n\n    attach(swiper.$wrapperEl[0], {\n      attributes: false\n    });\n  };\n  const destroy = () => {\n    observers.forEach(observer => {\n      observer.disconnect();\n    });\n    observers.splice(0, observers.length);\n  };\n  extendParams({\n    observer: false,\n    observeParents: false,\n    observeSlideChildren: false\n  });\n  on('init', init);\n  on('destroy', destroy);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/modules/observer/observer.js?"
      );
    },
    /*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
    "./node_modules/swiper/core/modules/resize/resize.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Resize)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction Resize(_ref) {\n  let {\n    swiper,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let observer = null;\n  let animationFrame = null;\n  const resizeHandler = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    emit('beforeResize');\n    emit('resize');\n  };\n  const createObserver = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    observer = new ResizeObserver(entries => {\n      animationFrame = window.requestAnimationFrame(() => {\n        const {\n          width,\n          height\n        } = swiper;\n        let newWidth = width;\n        let newHeight = height;\n        entries.forEach(_ref2 => {\n          let {\n            contentBoxSize,\n            contentRect,\n            target\n          } = _ref2;\n          if (target && target !== swiper.el) return;\n          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;\n          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;\n        });\n        if (newWidth !== width || newHeight !== height) {\n          resizeHandler();\n        }\n      });\n    });\n    observer.observe(swiper.el);\n  };\n  const removeObserver = () => {\n    if (animationFrame) {\n      window.cancelAnimationFrame(animationFrame);\n    }\n    if (observer && observer.unobserve && swiper.el) {\n      observer.unobserve(swiper.el);\n      observer = null;\n    }\n  };\n  const orientationChangeHandler = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    emit('orientationchange');\n  };\n  on('init', () => {\n    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {\n      createObserver();\n      return;\n    }\n    window.addEventListener('resize', resizeHandler);\n    window.addEventListener('orientationchange', orientationChangeHandler);\n  });\n  on('destroy', () => {\n    removeObserver();\n    window.removeEventListener('resize', resizeHandler);\n    window.removeEventListener('orientationchange', orientationChangeHandler);\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/modules/resize/resize.js?"
      );
    },
    /*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
    "./node_modules/swiper/core/slide/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");\n/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");\n/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");\n/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");\n/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");\n/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");\n/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__["default"],\n  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/index.js?'
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/slide/slideNext.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slideNext)\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slideNext(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  const {\n    animating,\n    enabled,\n    params\n  } = swiper;\n  if (!enabled) return swiper;\n  let perGroup = params.slidesPerGroup;\n  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {\n    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);\n  }\n  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;\n  if (params.loop) {\n    if (animating && params.loopPreventsSlide) return false;\n    swiper.loopFix(); // eslint-disable-next-line\n\n    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n  }\n  if (params.rewind && swiper.isEnd) {\n    return swiper.slideTo(0, speed, runCallbacks, internal);\n  }\n  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideNext.js?"
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/slide/slidePrev.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slidePrev)\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slidePrev(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  const {\n    params,\n    animating,\n    snapGrid,\n    slidesGrid,\n    rtlTranslate,\n    enabled\n  } = swiper;\n  if (!enabled) return swiper;\n  if (params.loop) {\n    if (animating && params.loopPreventsSlide) return false;\n    swiper.loopFix(); // eslint-disable-next-line\n\n    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n  }\n  const translate = rtlTranslate ? swiper.translate : -swiper.translate;\n  function normalize(val) {\n    if (val < 0) return -Math.floor(Math.abs(val));\n    return Math.floor(val);\n  }\n  const normalizedTranslate = normalize(translate);\n  const normalizedSnapGrid = snapGrid.map(val => normalize(val));\n  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];\n  if (typeof prevSnap === 'undefined' && params.cssMode) {\n    let prevSnapIndex;\n    snapGrid.forEach((snap, snapIndex) => {\n      if (normalizedTranslate >= snap) {\n        // prevSnap = snap;\n        prevSnapIndex = snapIndex;\n      }\n    });\n    if (typeof prevSnapIndex !== 'undefined') {\n      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];\n    }\n  }\n  let prevIndex = 0;\n  if (typeof prevSnap !== 'undefined') {\n    prevIndex = slidesGrid.indexOf(prevSnap);\n    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;\n    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {\n      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;\n      prevIndex = Math.max(prevIndex, 0);\n    }\n  }\n  if (params.rewind && swiper.isBeginning) {\n    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;\n    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);\n  }\n  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slidePrev.js?"
      );
    },
    /*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
    "./node_modules/swiper/core/slide/slideReset.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ slideReset)\n/* harmony export */ });\n/* eslint no-unused-vars: "off" */\nfunction slideReset(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideReset.js?'
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
    "./node_modules/swiper/core/slide/slideTo.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slideTo)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction slideTo(index, speed, runCallbacks, internal, initial) {\n  if (index === void 0) {\n    index = 0;\n  }\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  if (typeof index !== 'number' && typeof index !== 'string') {\n    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);\n  }\n  if (typeof index === 'string') {\n    /**\n     * The `index` argument converted from `string` to `number`.\n     * @type {number}\n     */\n    const indexAsNumber = parseInt(index, 10);\n    /**\n     * Determines whether the `index` argument is a valid `number`\n     * after being converted from the `string` type.\n     * @type {boolean}\n     */\n\n    const isValidNumber = isFinite(indexAsNumber);\n    if (!isValidNumber) {\n      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);\n    } // Knowing that the converted `index` is a valid number,\n    // we can update the original argument's value.\n\n    index = indexAsNumber;\n  }\n  const swiper = this;\n  let slideIndex = index;\n  if (slideIndex < 0) slideIndex = 0;\n  const {\n    params,\n    snapGrid,\n    slidesGrid,\n    previousIndex,\n    activeIndex,\n    rtlTranslate: rtl,\n    wrapperEl,\n    enabled\n  } = swiper;\n  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {\n    return false;\n  }\n  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);\n  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);\n  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;\n  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {\n    swiper.emit('beforeSlideChangeStart');\n  }\n  const translate = -snapGrid[snapIndex]; // Update progress\n\n  swiper.updateProgress(translate); // Normalize slideIndex\n\n  if (params.normalizeSlideIndex) {\n    for (let i = 0; i < slidesGrid.length; i += 1) {\n      const normalizedTranslate = -Math.floor(translate * 100);\n      const normalizedGrid = Math.floor(slidesGrid[i] * 100);\n      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);\n      if (typeof slidesGrid[i + 1] !== 'undefined') {\n        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {\n          slideIndex = i;\n        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {\n          slideIndex = i + 1;\n        }\n      } else if (normalizedTranslate >= normalizedGrid) {\n        slideIndex = i;\n      }\n    }\n  } // Directions locks\n\n  if (swiper.initialized && slideIndex !== activeIndex) {\n    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {\n      return false;\n    }\n    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {\n      if ((activeIndex || 0) !== slideIndex) return false;\n    }\n  }\n  let direction;\n  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index\n\n  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {\n    swiper.updateActiveIndex(slideIndex); // Update Height\n\n    if (params.autoHeight) {\n      swiper.updateAutoHeight();\n    }\n    swiper.updateSlidesClasses();\n    if (params.effect !== 'slide') {\n      swiper.setTranslate(translate);\n    }\n    if (direction !== 'reset') {\n      swiper.transitionStart(runCallbacks, direction);\n      swiper.transitionEnd(runCallbacks, direction);\n    }\n    return false;\n  }\n  if (params.cssMode) {\n    const isH = swiper.isHorizontal();\n    const t = rtl ? translate : -translate;\n    if (speed === 0) {\n      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n      if (isVirtual) {\n        swiper.wrapperEl.style.scrollSnapType = 'none';\n        swiper._immediateVirtual = true;\n      }\n      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;\n      if (isVirtual) {\n        requestAnimationFrame(() => {\n          swiper.wrapperEl.style.scrollSnapType = '';\n          swiper._swiperImmediateVirtual = false;\n        });\n      }\n    } else {\n      if (!swiper.support.smoothScroll) {\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({\n          swiper,\n          targetPosition: t,\n          side: isH ? 'left' : 'top'\n        });\n        return true;\n      }\n      wrapperEl.scrollTo({\n        [isH ? 'left' : 'top']: t,\n        behavior: 'smooth'\n      });\n    }\n    return true;\n  }\n  swiper.setTransition(speed);\n  swiper.setTranslate(translate);\n  swiper.updateActiveIndex(slideIndex);\n  swiper.updateSlidesClasses();\n  swiper.emit('beforeTransitionStart', speed, internal);\n  swiper.transitionStart(runCallbacks, direction);\n  if (speed === 0) {\n    swiper.transitionEnd(runCallbacks, direction);\n  } else if (!swiper.animating) {\n    swiper.animating = true;\n    if (!swiper.onSlideToWrapperTransitionEnd) {\n      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {\n        if (!swiper || swiper.destroyed) return;\n        if (e.target !== this) return;\n        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);\n        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);\n        swiper.onSlideToWrapperTransitionEnd = null;\n        delete swiper.onSlideToWrapperTransitionEnd;\n        swiper.transitionEnd(runCallbacks, direction);\n      };\n    }\n    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);\n    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);\n  }\n  return true;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideTo.js?"
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/slide/slideToClickedSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");\n\n\nfunction slideToClickedSlide() {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl\n  } = swiper;\n  const slidesPerView = params.slidesPerView === \'auto\' ? swiper.slidesPerViewDynamic() : params.slidesPerView;\n  let slideToIndex = swiper.clickedIndex;\n  let realIndex;\n  if (params.loop) {\n    if (swiper.animating) return;\n    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr(\'data-swiper-slide-index\'), 10);\n    if (params.centeredSlides) {\n      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {\n        swiper.loopFix();\n        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n          swiper.slideTo(slideToIndex);\n        });\n      } else {\n        swiper.slideTo(slideToIndex);\n      }\n    } else if (slideToIndex > swiper.slides.length - slidesPerView) {\n      swiper.loopFix();\n      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n        swiper.slideTo(slideToIndex);\n      });\n    } else {\n      swiper.slideTo(slideToIndex);\n    }\n  } else {\n    swiper.slideTo(slideToIndex);\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideToClickedSlide.js?'
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
    "./node_modules/swiper/core/slide/slideToClosest.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ slideToClosest)\n/* harmony export */ });\n/* eslint no-unused-vars: "off" */\nfunction slideToClosest(speed, runCallbacks, internal, threshold) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  if (threshold === void 0) {\n    threshold = 0.5;\n  }\n  const swiper = this;\n  let index = swiper.activeIndex;\n  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);\n  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);\n  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;\n  if (translate >= swiper.snapGrid[snapIndex]) {\n    // The current translate is on or after the current snap index, so the choice\n    // is between the current index and the one after it.\n    const currentSnap = swiper.snapGrid[snapIndex];\n    const nextSnap = swiper.snapGrid[snapIndex + 1];\n    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {\n      index += swiper.params.slidesPerGroup;\n    }\n  } else {\n    // The current translate is before the current snap index, so the choice\n    // is between the current index and the one before it.\n    const prevSnap = swiper.snapGrid[snapIndex - 1];\n    const currentSnap = swiper.snapGrid[snapIndex];\n    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {\n      index -= swiper.params.slidesPerGroup;\n    }\n  }\n  index = Math.max(index, 0);\n  index = Math.min(index, swiper.slidesGrid.length - 1);\n  return swiper.slideTo(index, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideToClosest.js?'
      );
    },
    /*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
    "./node_modules/swiper/core/slide/slideToLoop.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ slideToLoop)\n/* harmony export */ });\nfunction slideToLoop(index, speed, runCallbacks, internal) {\n  if (index === void 0) {\n    index = 0;\n  }\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  let newIndex = index;\n  if (swiper.params.loop) {\n    newIndex += swiper.loopedSlides;\n  }\n  return swiper.slideTo(newIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/slide/slideToLoop.js?'
      );
    },
    /*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
    "./node_modules/swiper/core/transition/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");\n/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");\n/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/transition/index.js?'
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
    "./node_modules/swiper/core/transition/setTransition.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setTransition)\n/* harmony export */ });\nfunction setTransition(duration, byController) {\n  const swiper = this;\n  if (!swiper.params.cssMode) {\n    swiper.$wrapperEl.transition(duration);\n  }\n  swiper.emit('setTransition', duration, byController);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/transition/setTransition.js?"
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/transition/transitionEmit.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transitionEmit)\n/* harmony export */ });\nfunction transitionEmit(_ref) {\n  let {\n    swiper,\n    runCallbacks,\n    direction,\n    step\n  } = _ref;\n  const {\n    activeIndex,\n    previousIndex\n  } = swiper;\n  let dir = direction;\n  if (!dir) {\n    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';\n  }\n  swiper.emit(`transition${step}`);\n  if (runCallbacks && activeIndex !== previousIndex) {\n    if (dir === 'reset') {\n      swiper.emit(`slideResetTransition${step}`);\n      return;\n    }\n    swiper.emit(`slideChangeTransition${step}`);\n    if (dir === 'next') {\n      swiper.emit(`slideNextTransition${step}`);\n    } else {\n      swiper.emit(`slidePrevTransition${step}`);\n    }\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/transition/transitionEmit.js?"
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
    "./node_modules/swiper/core/transition/transitionEnd.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ transitionEnd)\n/* harmony export */ });\n/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");\n\nfunction transitionEnd(runCallbacks, direction) {\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  const {\n    params\n  } = swiper;\n  swiper.animating = false;\n  if (params.cssMode) return;\n  swiper.setTransition(0);\n  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({\n    swiper,\n    runCallbacks,\n    direction,\n    step: \'End\'\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/transition/transitionEnd.js?'
      );
    },
    /*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
    "./node_modules/swiper/core/transition/transitionStart.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ transitionStart)\n/* harmony export */ });\n/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");\n\nfunction transitionStart(runCallbacks, direction) {\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  const swiper = this;\n  const {\n    params\n  } = swiper;\n  if (params.cssMode) return;\n  if (params.autoHeight) {\n    swiper.updateAutoHeight();\n  }\n  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({\n    swiper,\n    runCallbacks,\n    direction,\n    step: \'Start\'\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/transition/transitionStart.js?'
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
    "./node_modules/swiper/core/translate/getTranslate.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSwiperTranslate)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction getSwiperTranslate(axis) {\n  if (axis === void 0) {\n    axis = this.isHorizontal() ? 'x' : 'y';\n  }\n  const swiper = this;\n  const {\n    params,\n    rtlTranslate: rtl,\n    translate,\n    $wrapperEl\n  } = swiper;\n  if (params.virtualTranslate) {\n    return rtl ? -translate : translate;\n  }\n  if (params.cssMode) {\n    return translate;\n  }\n  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);\n  if (rtl) currentTranslate = -currentTranslate;\n  return currentTranslate || 0;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/getTranslate.js?"
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
    "./node_modules/swiper/core/translate/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");\n/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");\n/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");\n/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");\n/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/index.js?'
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
    "./node_modules/swiper/core/translate/maxTranslate.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ maxTranslate)\n/* harmony export */ });\nfunction maxTranslate() {\n  return -this.snapGrid[this.snapGrid.length - 1];\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/maxTranslate.js?'
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
    "./node_modules/swiper/core/translate/minTranslate.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ minTranslate)\n/* harmony export */ });\nfunction minTranslate() {\n  return -this.snapGrid[0];\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/minTranslate.js?'
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
    "./node_modules/swiper/core/translate/setTranslate.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setTranslate)\n/* harmony export */ });\nfunction setTranslate(translate, byController) {\n  const swiper = this;\n  const {\n    rtlTranslate: rtl,\n    params,\n    $wrapperEl,\n    wrapperEl,\n    progress\n  } = swiper;\n  let x = 0;\n  let y = 0;\n  const z = 0;\n  if (swiper.isHorizontal()) {\n    x = rtl ? -translate : translate;\n  } else {\n    y = translate;\n  }\n  if (params.roundLengths) {\n    x = Math.floor(x);\n    y = Math.floor(y);\n  }\n  if (params.cssMode) {\n    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;\n  } else if (!params.virtualTranslate) {\n    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);\n  }\n  swiper.previousTranslate = swiper.translate;\n  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress\n\n  let newProgress;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n  if (translatesDiff === 0) {\n    newProgress = 0;\n  } else {\n    newProgress = (translate - swiper.minTranslate()) / translatesDiff;\n  }\n  if (newProgress !== progress) {\n    swiper.updateProgress(translate);\n  }\n  swiper.emit('setTranslate', swiper.translate, byController);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/setTranslate.js?"
      );
    },
    /*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
    "./node_modules/swiper/core/translate/translateTo.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ translateTo)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction translateTo(translate, speed, runCallbacks, translateBounds, internal) {\n  if (translate === void 0) {\n    translate = 0;\n  }\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n  if (translateBounds === void 0) {\n    translateBounds = true;\n  }\n  const swiper = this;\n  const {\n    params,\n    wrapperEl\n  } = swiper;\n  if (swiper.animating && params.preventInteractionOnTransition) {\n    return false;\n  }\n  const minTranslate = swiper.minTranslate();\n  const maxTranslate = swiper.maxTranslate();\n  let newTranslate;\n  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress\n\n  swiper.updateProgress(newTranslate);\n  if (params.cssMode) {\n    const isH = swiper.isHorizontal();\n    if (speed === 0) {\n      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;\n    } else {\n      if (!swiper.support.smoothScroll) {\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({\n          swiper,\n          targetPosition: -newTranslate,\n          side: isH ? 'left' : 'top'\n        });\n        return true;\n      }\n      wrapperEl.scrollTo({\n        [isH ? 'left' : 'top']: -newTranslate,\n        behavior: 'smooth'\n      });\n    }\n    return true;\n  }\n  if (speed === 0) {\n    swiper.setTransition(0);\n    swiper.setTranslate(newTranslate);\n    if (runCallbacks) {\n      swiper.emit('beforeTransitionStart', speed, internal);\n      swiper.emit('transitionEnd');\n    }\n  } else {\n    swiper.setTransition(speed);\n    swiper.setTranslate(newTranslate);\n    if (runCallbacks) {\n      swiper.emit('beforeTransitionStart', speed, internal);\n      swiper.emit('transitionStart');\n    }\n    if (!swiper.animating) {\n      swiper.animating = true;\n      if (!swiper.onTranslateToWrapperTransitionEnd) {\n        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {\n          if (!swiper || swiper.destroyed) return;\n          if (e.target !== this) return;\n          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);\n          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);\n          swiper.onTranslateToWrapperTransitionEnd = null;\n          delete swiper.onTranslateToWrapperTransitionEnd;\n          if (runCallbacks) {\n            swiper.emit('transitionEnd');\n          }\n        };\n      }\n      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);\n      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);\n    }\n  }\n  return true;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/translate/translateTo.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
    "./node_modules/swiper/core/update/index.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");\n/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");\n/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");\n/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");\n/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");\n/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");\n/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");\n/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");\n/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__["default"],\n  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__["default"],\n  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"],\n  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__["default"]\n});\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/index.js?'
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
    "./node_modules/swiper/core/update/updateActiveIndex.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateActiveIndex)\n/* harmony export */ });\nfunction updateActiveIndex(newActiveIndex) {\n  const swiper = this;\n  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;\n  const {\n    slidesGrid,\n    snapGrid,\n    params,\n    activeIndex: previousIndex,\n    realIndex: previousRealIndex,\n    snapIndex: previousSnapIndex\n  } = swiper;\n  let activeIndex = newActiveIndex;\n  let snapIndex;\n  if (typeof activeIndex === 'undefined') {\n    for (let i = 0; i < slidesGrid.length; i += 1) {\n      if (typeof slidesGrid[i + 1] !== 'undefined') {\n        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {\n          activeIndex = i;\n        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {\n          activeIndex = i + 1;\n        }\n      } else if (translate >= slidesGrid[i]) {\n        activeIndex = i;\n      }\n    } // Normalize slideIndex\n\n    if (params.normalizeSlideIndex) {\n      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;\n    }\n  }\n  if (snapGrid.indexOf(translate) >= 0) {\n    snapIndex = snapGrid.indexOf(translate);\n  } else {\n    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);\n    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);\n  }\n  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;\n  if (activeIndex === previousIndex) {\n    if (snapIndex !== previousSnapIndex) {\n      swiper.snapIndex = snapIndex;\n      swiper.emit('snapIndexChange');\n    }\n    return;\n  } // Get real index\n\n  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);\n  Object.assign(swiper, {\n    snapIndex,\n    realIndex,\n    previousIndex,\n    activeIndex\n  });\n  swiper.emit('activeIndexChange');\n  swiper.emit('snapIndexChange');\n  if (previousRealIndex !== realIndex) {\n    swiper.emit('realIndexChange');\n  }\n  if (swiper.initialized || swiper.params.runCallbacksOnInit) {\n    swiper.emit('slideChange');\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateActiveIndex.js?"
      );
    },
    /*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
    "./node_modules/swiper/core/update/updateAutoHeight.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateAutoHeight)\n/* harmony export */ });\nfunction updateAutoHeight(speed) {\n  const swiper = this;\n  const activeSlides = [];\n  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n  let newHeight = 0;\n  let i;\n  if (typeof speed === 'number') {\n    swiper.setTransition(speed);\n  } else if (speed === true) {\n    swiper.setTransition(swiper.params.speed);\n  }\n  const getSlideByIndex = index => {\n    if (isVirtual) {\n      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];\n    }\n    return swiper.slides.eq(index)[0];\n  }; // Find slides currently in view\n\n  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {\n    if (swiper.params.centeredSlides) {\n      swiper.visibleSlides.each(slide => {\n        activeSlides.push(slide);\n      });\n    } else {\n      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {\n        const index = swiper.activeIndex + i;\n        if (index > swiper.slides.length && !isVirtual) break;\n        activeSlides.push(getSlideByIndex(index));\n      }\n    }\n  } else {\n    activeSlides.push(getSlideByIndex(swiper.activeIndex));\n  } // Find new height from highest slide in view\n\n  for (i = 0; i < activeSlides.length; i += 1) {\n    if (typeof activeSlides[i] !== 'undefined') {\n      const height = activeSlides[i].offsetHeight;\n      newHeight = height > newHeight ? height : newHeight;\n    }\n  } // Update Height\n\n  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateAutoHeight.js?"
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/update/updateClickedSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ updateClickedSlide)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");\n\nfunction updateClickedSlide(e) {\n  const swiper = this;\n  const params = swiper.params;\n  const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e).closest(`.${params.slideClass}`)[0];\n  let slideFound = false;\n  let slideIndex;\n  if (slide) {\n    for (let i = 0; i < swiper.slides.length; i += 1) {\n      if (swiper.slides[i] === slide) {\n        slideFound = true;\n        slideIndex = i;\n        break;\n      }\n    }\n  }\n  if (slide && slideFound) {\n    swiper.clickedSlide = slide;\n    if (swiper.virtual && swiper.params.virtual.enabled) {\n      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr(\'data-swiper-slide-index\'), 10);\n    } else {\n      swiper.clickedIndex = slideIndex;\n    }\n  } else {\n    swiper.clickedSlide = undefined;\n    swiper.clickedIndex = undefined;\n    return;\n  }\n  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {\n    swiper.slideToClickedSlide();\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateClickedSlide.js?'
      );
    },
    /*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
    "./node_modules/swiper/core/update/updateProgress.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateProgress)\n/* harmony export */ });\nfunction updateProgress(translate) {\n  const swiper = this;\n  if (typeof translate === 'undefined') {\n    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line\n\n    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;\n  }\n  const params = swiper.params;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n  let {\n    progress,\n    isBeginning,\n    isEnd\n  } = swiper;\n  const wasBeginning = isBeginning;\n  const wasEnd = isEnd;\n  if (translatesDiff === 0) {\n    progress = 0;\n    isBeginning = true;\n    isEnd = true;\n  } else {\n    progress = (translate - swiper.minTranslate()) / translatesDiff;\n    isBeginning = progress <= 0;\n    isEnd = progress >= 1;\n  }\n  Object.assign(swiper, {\n    progress,\n    isBeginning,\n    isEnd\n  });\n  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);\n  if (isBeginning && !wasBeginning) {\n    swiper.emit('reachBeginning toEdge');\n  }\n  if (isEnd && !wasEnd) {\n    swiper.emit('reachEnd toEdge');\n  }\n  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {\n    swiper.emit('fromEdge');\n  }\n  swiper.emit('progress', progress);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateProgress.js?"
      );
    },
    /*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
    "./node_modules/swiper/core/update/updateSize.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateSize)\n/* harmony export */ });\nfunction updateSize() {\n  const swiper = this;\n  let width;\n  let height;\n  const $el = swiper.$el;\n  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {\n    width = swiper.params.width;\n  } else {\n    width = $el[0].clientWidth;\n  }\n  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {\n    height = swiper.params.height;\n  } else {\n    height = $el[0].clientHeight;\n  }\n  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {\n    return;\n  } // Subtract paddings\n\n  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);\n  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);\n  if (Number.isNaN(width)) width = 0;\n  if (Number.isNaN(height)) height = 0;\n  Object.assign(swiper, {\n    width,\n    height,\n    size: swiper.isHorizontal() ? width : height\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateSize.js?"
      );
    },
    /*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
    "./node_modules/swiper/core/update/updateSlides.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateSlides)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction updateSlides() {\n  const swiper = this;\n  function getDirectionLabel(property) {\n    if (swiper.isHorizontal()) {\n      return property;\n    } // prettier-ignore\n\n    return {\n      'width': 'height',\n      'margin-top': 'margin-left',\n      'margin-bottom ': 'margin-right',\n      'margin-left': 'margin-top',\n      'margin-right': 'margin-bottom',\n      'padding-left': 'padding-top',\n      'padding-right': 'padding-bottom',\n      'marginRight': 'marginBottom'\n    }[property];\n  }\n  function getDirectionPropertyValue(node, label) {\n    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);\n  }\n  const params = swiper.params;\n  const {\n    $wrapperEl,\n    size: swiperSize,\n    rtlTranslate: rtl,\n    wrongRTL\n  } = swiper;\n  const isVirtual = swiper.virtual && params.virtual.enabled;\n  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;\n  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);\n  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;\n  let snapGrid = [];\n  const slidesGrid = [];\n  const slidesSizesGrid = [];\n  let offsetBefore = params.slidesOffsetBefore;\n  if (typeof offsetBefore === 'function') {\n    offsetBefore = params.slidesOffsetBefore.call(swiper);\n  }\n  let offsetAfter = params.slidesOffsetAfter;\n  if (typeof offsetAfter === 'function') {\n    offsetAfter = params.slidesOffsetAfter.call(swiper);\n  }\n  const previousSnapGridLength = swiper.snapGrid.length;\n  const previousSlidesGridLength = swiper.slidesGrid.length;\n  let spaceBetween = params.spaceBetween;\n  let slidePosition = -offsetBefore;\n  let prevSlideSize = 0;\n  let index = 0;\n  if (typeof swiperSize === 'undefined') {\n    return;\n  }\n  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {\n    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;\n  }\n  swiper.virtualSize = -spaceBetween; // reset margins\n\n  if (rtl) slides.css({\n    marginLeft: '',\n    marginBottom: '',\n    marginTop: ''\n  });else slides.css({\n    marginRight: '',\n    marginBottom: '',\n    marginTop: ''\n  }); // reset cssMode offsets\n\n  if (params.centeredSlides && params.cssMode) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');\n  }\n  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;\n  if (gridEnabled) {\n    swiper.grid.initSlides(slidesLength);\n  } // Calc slides\n\n  let slideSize;\n  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {\n    return typeof params.breakpoints[key].slidesPerView !== 'undefined';\n  }).length > 0;\n  for (let i = 0; i < slidesLength; i += 1) {\n    slideSize = 0;\n    const slide = slides.eq(i);\n    if (gridEnabled) {\n      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);\n    }\n    if (slide.css('display') === 'none') continue; // eslint-disable-line\n\n    if (params.slidesPerView === 'auto') {\n      if (shouldResetSlideSize) {\n        slides[i].style[getDirectionLabel('width')] = ``;\n      }\n      const slideStyles = getComputedStyle(slide[0]);\n      const currentTransform = slide[0].style.transform;\n      const currentWebKitTransform = slide[0].style.webkitTransform;\n      if (currentTransform) {\n        slide[0].style.transform = 'none';\n      }\n      if (currentWebKitTransform) {\n        slide[0].style.webkitTransform = 'none';\n      }\n      if (params.roundLengths) {\n        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);\n      } else {\n        // eslint-disable-next-line\n        const width = getDirectionPropertyValue(slideStyles, 'width');\n        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');\n        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');\n        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');\n        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');\n        const boxSizing = slideStyles.getPropertyValue('box-sizing');\n        if (boxSizing && boxSizing === 'border-box') {\n          slideSize = width + marginLeft + marginRight;\n        } else {\n          const {\n            clientWidth,\n            offsetWidth\n          } = slide[0];\n          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);\n        }\n      }\n      if (currentTransform) {\n        slide[0].style.transform = currentTransform;\n      }\n      if (currentWebKitTransform) {\n        slide[0].style.webkitTransform = currentWebKitTransform;\n      }\n      if (params.roundLengths) slideSize = Math.floor(slideSize);\n    } else {\n      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;\n      if (params.roundLengths) slideSize = Math.floor(slideSize);\n      if (slides[i]) {\n        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;\n      }\n    }\n    if (slides[i]) {\n      slides[i].swiperSlideSize = slideSize;\n    }\n    slidesSizesGrid.push(slideSize);\n    if (params.centeredSlides) {\n      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;\n      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;\n      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;\n      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;\n      if (params.roundLengths) slidePosition = Math.floor(slidePosition);\n      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);\n      slidesGrid.push(slidePosition);\n    } else {\n      if (params.roundLengths) slidePosition = Math.floor(slidePosition);\n      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);\n      slidesGrid.push(slidePosition);\n      slidePosition = slidePosition + slideSize + spaceBetween;\n    }\n    swiper.virtualSize += slideSize + spaceBetween;\n    prevSlideSize = slideSize;\n    index += 1;\n  }\n  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;\n  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {\n    $wrapperEl.css({\n      width: `${swiper.virtualSize + params.spaceBetween}px`\n    });\n  }\n  if (params.setWrapperSize) {\n    $wrapperEl.css({\n      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`\n    });\n  }\n  if (gridEnabled) {\n    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);\n  } // Remove last grid elements depending on width\n\n  if (!params.centeredSlides) {\n    const newSlidesGrid = [];\n    for (let i = 0; i < snapGrid.length; i += 1) {\n      let slidesGridItem = snapGrid[i];\n      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);\n      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {\n        newSlidesGrid.push(slidesGridItem);\n      }\n    }\n    snapGrid = newSlidesGrid;\n    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {\n      snapGrid.push(swiper.virtualSize - swiperSize);\n    }\n  }\n  if (snapGrid.length === 0) snapGrid = [0];\n  if (params.spaceBetween !== 0) {\n    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');\n    slides.filter((_, slideIndex) => {\n      if (!params.cssMode) return true;\n      if (slideIndex === slides.length - 1) {\n        return false;\n      }\n      return true;\n    }).css({\n      [key]: `${spaceBetween}px`\n    });\n  }\n  if (params.centeredSlides && params.centeredSlidesBounds) {\n    let allSlidesSize = 0;\n    slidesSizesGrid.forEach(slideSizeValue => {\n      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);\n    });\n    allSlidesSize -= params.spaceBetween;\n    const maxSnap = allSlidesSize - swiperSize;\n    snapGrid = snapGrid.map(snap => {\n      if (snap < 0) return -offsetBefore;\n      if (snap > maxSnap) return maxSnap + offsetAfter;\n      return snap;\n    });\n  }\n  if (params.centerInsufficientSlides) {\n    let allSlidesSize = 0;\n    slidesSizesGrid.forEach(slideSizeValue => {\n      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);\n    });\n    allSlidesSize -= params.spaceBetween;\n    if (allSlidesSize < swiperSize) {\n      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;\n      snapGrid.forEach((snap, snapIndex) => {\n        snapGrid[snapIndex] = snap - allSlidesOffset;\n      });\n      slidesGrid.forEach((snap, snapIndex) => {\n        slidesGrid[snapIndex] = snap + allSlidesOffset;\n      });\n    }\n  }\n  Object.assign(swiper, {\n    slides,\n    snapGrid,\n    slidesGrid,\n    slidesSizesGrid\n  });\n  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);\n    const addToSnapGrid = -swiper.snapGrid[0];\n    const addToSlidesGrid = -swiper.slidesGrid[0];\n    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);\n    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);\n  }\n  if (slidesLength !== previousSlidesLength) {\n    swiper.emit('slidesLengthChange');\n  }\n  if (snapGrid.length !== previousSnapGridLength) {\n    if (swiper.params.watchOverflow) swiper.checkOverflow();\n    swiper.emit('snapGridLengthChange');\n  }\n  if (slidesGrid.length !== previousSlidesGridLength) {\n    swiper.emit('slidesGridLengthChange');\n  }\n  if (params.watchSlidesProgress) {\n    swiper.updateSlidesOffset();\n  }\n  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {\n    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;\n    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);\n    if (slidesLength <= params.maxBackfaceHiddenSlides) {\n      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);\n    } else if (hasClassBackfaceClassAdded) {\n      swiper.$el.removeClass(backFaceHiddenClass);\n    }\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateSlides.js?"
      );
    },
    /*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
    "./node_modules/swiper/core/update/updateSlidesClasses.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)\n/* harmony export */ });\nfunction updateSlidesClasses() {\n  const swiper = this;\n  const {\n    slides,\n    params,\n    $wrapperEl,\n    activeIndex,\n    realIndex\n  } = swiper;\n  const isVirtual = swiper.virtual && params.virtual.enabled;\n  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);\n  let activeSlide;\n  if (isVirtual) {\n    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);\n  } else {\n    activeSlide = slides.eq(activeIndex);\n  } // Active classes\n\n  activeSlide.addClass(params.slideActiveClass);\n  if (params.loop) {\n    // Duplicate to all looped slides\n    if (activeSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);\n    }\n  } // Next Slide\n\n  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);\n  if (params.loop && nextSlide.length === 0) {\n    nextSlide = slides.eq(0);\n    nextSlide.addClass(params.slideNextClass);\n  } // Prev Slide\n\n  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);\n  if (params.loop && prevSlide.length === 0) {\n    prevSlide = slides.eq(-1);\n    prevSlide.addClass(params.slidePrevClass);\n  }\n  if (params.loop) {\n    // Duplicate to all looped slides\n    if (nextSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr(\'data-swiper-slide-index\')}"]`).addClass(params.slideDuplicateNextClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr(\'data-swiper-slide-index\')}"]`).addClass(params.slideDuplicateNextClass);\n    }\n    if (prevSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr(\'data-swiper-slide-index\')}"]`).addClass(params.slideDuplicatePrevClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr(\'data-swiper-slide-index\')}"]`).addClass(params.slideDuplicatePrevClass);\n    }\n  }\n  swiper.emitSlidesClasses();\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateSlidesClasses.js?'
      );
    },
    /*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
    "./node_modules/swiper/core/update/updateSlidesOffset.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)\n/* harmony export */ });\nfunction updateSlidesOffset() {\n  const swiper = this;\n  const slides = swiper.slides;\n  for (let i = 0; i < slides.length; i += 1) {\n    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateSlidesOffset.js?'
      );
    },
    /*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
    "./node_modules/swiper/core/update/updateSlidesProgress.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");\n\nfunction updateSlidesProgress(translate) {\n  if (translate === void 0) {\n    translate = this && this.translate || 0;\n  }\n  const swiper = this;\n  const params = swiper.params;\n  const {\n    slides,\n    rtlTranslate: rtl,\n    snapGrid\n  } = swiper;\n  if (slides.length === 0) return;\n  if (typeof slides[0].swiperSlideOffset === \'undefined\') swiper.updateSlidesOffset();\n  let offsetCenter = -translate;\n  if (rtl) offsetCenter = translate; // Visible Slides\n\n  slides.removeClass(params.slideVisibleClass);\n  swiper.visibleSlidesIndexes = [];\n  swiper.visibleSlides = [];\n  for (let i = 0; i < slides.length; i += 1) {\n    const slide = slides[i];\n    let slideOffset = slide.swiperSlideOffset;\n    if (params.cssMode && params.centeredSlides) {\n      slideOffset -= slides[0].swiperSlideOffset;\n    }\n    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);\n    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);\n    const slideBefore = -(offsetCenter - slideOffset);\n    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];\n    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;\n    if (isVisible) {\n      swiper.visibleSlides.push(slide);\n      swiper.visibleSlidesIndexes.push(i);\n      slides.eq(i).addClass(params.slideVisibleClass);\n    }\n    slide.progress = rtl ? -slideProgress : slideProgress;\n    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;\n  }\n  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/core/update/updateSlidesProgress.js?'
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
    "./node_modules/swiper/modules/a11y/a11y.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ A11y)\n/* harmony export */ });\n/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ \"./node_modules/swiper/shared/classes-to-selector.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction A11y(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    a11y: {\n      enabled: true,\n      notificationClass: 'swiper-notification',\n      prevSlideMessage: 'Previous slide',\n      nextSlideMessage: 'Next slide',\n      firstSlideMessage: 'This is the first slide',\n      lastSlideMessage: 'This is the last slide',\n      paginationBulletMessage: 'Go to slide {{index}}',\n      slideLabelMessage: '{{index}} / {{slidesLength}}',\n      containerMessage: null,\n      containerRoleDescriptionMessage: null,\n      itemRoleDescriptionMessage: null,\n      slideRole: 'group'\n    }\n  });\n  let liveRegion = null;\n  function notify(message) {\n    const notification = liveRegion;\n    if (notification.length === 0) return;\n    notification.html('');\n    notification.html(message);\n  }\n  function getRandomNumber(size) {\n    if (size === void 0) {\n      size = 16;\n    }\n    const randomChar = () => Math.round(16 * Math.random()).toString(16);\n    return 'x'.repeat(size).replace(/x/g, randomChar);\n  }\n  function makeElFocusable($el) {\n    $el.attr('tabIndex', '0');\n  }\n  function makeElNotFocusable($el) {\n    $el.attr('tabIndex', '-1');\n  }\n  function addElRole($el, role) {\n    $el.attr('role', role);\n  }\n  function addElRoleDescription($el, description) {\n    $el.attr('aria-roledescription', description);\n  }\n  function addElControls($el, controls) {\n    $el.attr('aria-controls', controls);\n  }\n  function addElLabel($el, label) {\n    $el.attr('aria-label', label);\n  }\n  function addElId($el, id) {\n    $el.attr('id', id);\n  }\n  function addElLive($el, live) {\n    $el.attr('aria-live', live);\n  }\n  function disableEl($el) {\n    $el.attr('aria-disabled', true);\n  }\n  function enableEl($el) {\n    $el.attr('aria-disabled', false);\n  }\n  function onEnterOrSpaceKey(e) {\n    if (e.keyCode !== 13 && e.keyCode !== 32) return;\n    const params = swiper.params.a11y;\n    const $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target);\n    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {\n      if (!(swiper.isEnd && !swiper.params.loop)) {\n        swiper.slideNext();\n      }\n      if (swiper.isEnd) {\n        notify(params.lastSlideMessage);\n      } else {\n        notify(params.nextSlideMessage);\n      }\n    }\n    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {\n      if (!(swiper.isBeginning && !swiper.params.loop)) {\n        swiper.slidePrev();\n      }\n      if (swiper.isBeginning) {\n        notify(params.firstSlideMessage);\n      } else {\n        notify(params.prevSlideMessage);\n      }\n    }\n    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass))) {\n      $targetEl[0].click();\n    }\n  }\n  function updateNavigation() {\n    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    if ($prevEl && $prevEl.length > 0) {\n      if (swiper.isBeginning) {\n        disableEl($prevEl);\n        makeElNotFocusable($prevEl);\n      } else {\n        enableEl($prevEl);\n        makeElFocusable($prevEl);\n      }\n    }\n    if ($nextEl && $nextEl.length > 0) {\n      if (swiper.isEnd) {\n        disableEl($nextEl);\n        makeElNotFocusable($nextEl);\n      } else {\n        enableEl($nextEl);\n        makeElFocusable($nextEl);\n      }\n    }\n  }\n  function hasPagination() {\n    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;\n  }\n  function hasClickablePagination() {\n    return hasPagination() && swiper.params.pagination.clickable;\n  }\n  function updatePagination() {\n    const params = swiper.params.a11y;\n    if (!hasPagination()) return;\n    swiper.pagination.bullets.each(bulletEl => {\n      const $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bulletEl);\n      if (swiper.params.pagination.clickable) {\n        makeElFocusable($bulletEl);\n        if (!swiper.params.pagination.renderBullet) {\n          addElRole($bulletEl, 'button');\n          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\\{\\{index\\}\\}/, $bulletEl.index() + 1));\n        }\n      }\n      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {\n        $bulletEl.attr('aria-current', 'true');\n      } else {\n        $bulletEl.removeAttr('aria-current');\n      }\n    });\n  }\n  const initNavEl = ($el, wrapperId, message) => {\n    makeElFocusable($el);\n    if ($el[0].tagName !== 'BUTTON') {\n      addElRole($el, 'button');\n      $el.on('keydown', onEnterOrSpaceKey);\n    }\n    addElLabel($el, message);\n    addElControls($el, wrapperId);\n  };\n  const handleFocus = e => {\n    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);\n    if (!slideEl || !swiper.slides.includes(slideEl)) return;\n    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;\n    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);\n    if (isActive || isVisible) return;\n    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);\n  };\n  function init() {\n    const params = swiper.params.a11y;\n    swiper.$el.append(liveRegion); // Container\n\n    const $containerEl = swiper.$el;\n    if (params.containerRoleDescriptionMessage) {\n      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);\n    }\n    if (params.containerMessage) {\n      addElLabel($containerEl, params.containerMessage);\n    } // Wrapper\n\n    const $wrapperEl = swiper.$wrapperEl;\n    const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;\n    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';\n    addElId($wrapperEl, wrapperId);\n    addElLive($wrapperEl, live); // Slide\n\n    if (params.itemRoleDescriptionMessage) {\n      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.slides), params.itemRoleDescriptionMessage);\n    }\n    addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.slides), params.slideRole);\n    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;\n    swiper.slides.each((slideEl, index) => {\n      const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl);\n      const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;\n      const ariaLabelMessage = params.slideLabelMessage.replace(/\\{\\{index\\}\\}/, slideIndex + 1).replace(/\\{\\{slidesLength\\}\\}/, slidesLength);\n      addElLabel($slideEl, ariaLabelMessage);\n    }); // Navigation\n\n    let $nextEl;\n    let $prevEl;\n    if (swiper.navigation && swiper.navigation.$nextEl) {\n      $nextEl = swiper.navigation.$nextEl;\n    }\n    if (swiper.navigation && swiper.navigation.$prevEl) {\n      $prevEl = swiper.navigation.$prevEl;\n    }\n    if ($nextEl && $nextEl.length) {\n      initNavEl($nextEl, wrapperId, params.nextSlideMessage);\n    }\n    if ($prevEl && $prevEl.length) {\n      initNavEl($prevEl, wrapperId, params.prevSlideMessage);\n    } // Pagination\n\n    if (hasClickablePagination()) {\n      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);\n    } // Tab focus\n\n    swiper.$el.on('focus', handleFocus, true);\n  }\n  function destroy() {\n    if (liveRegion && liveRegion.length > 0) liveRegion.remove();\n    let $nextEl;\n    let $prevEl;\n    if (swiper.navigation && swiper.navigation.$nextEl) {\n      $nextEl = swiper.navigation.$nextEl;\n    }\n    if (swiper.navigation && swiper.navigation.$prevEl) {\n      $prevEl = swiper.navigation.$prevEl;\n    }\n    if ($nextEl) {\n      $nextEl.off('keydown', onEnterOrSpaceKey);\n    }\n    if ($prevEl) {\n      $prevEl.off('keydown', onEnterOrSpaceKey);\n    } // Pagination\n\n    if (hasClickablePagination()) {\n      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);\n    } // Tab focus\n\n    swiper.$el.off('focus', handleFocus, true);\n  }\n  on('beforeInit', () => {\n    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`<span class=\"${swiper.params.a11y.notificationClass}\" aria-live=\"assertive\" aria-atomic=\"true\"></span>`);\n  });\n  on('afterInit', () => {\n    if (!swiper.params.a11y.enabled) return;\n    init();\n  });\n  on('fromEdge toEdge afterInit lock unlock', () => {\n    if (!swiper.params.a11y.enabled) return;\n    updateNavigation();\n  });\n  on('paginationUpdate', () => {\n    if (!swiper.params.a11y.enabled) return;\n    updatePagination();\n  });\n  on('destroy', () => {\n    if (!swiper.params.a11y.enabled) return;\n    destroy();\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/a11y/a11y.js?"
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
    "./node_modules/swiper/modules/autoplay/autoplay.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint no-underscore-dangle: \"off\" */\n\n/* eslint no-use-before-define: \"off\" */\n\n\nfunction Autoplay(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  let timeout;\n  swiper.autoplay = {\n    running: false,\n    paused: false\n  };\n  extendParams({\n    autoplay: {\n      enabled: false,\n      delay: 3000,\n      waitForTransition: true,\n      disableOnInteraction: true,\n      stopOnLastSlide: false,\n      reverseDirection: false,\n      pauseOnMouseEnter: false\n    }\n  });\n  function run() {\n    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);\n    let delay = swiper.params.autoplay.delay;\n    if ($activeSlideEl.attr('data-swiper-autoplay')) {\n      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;\n    }\n    clearTimeout(timeout);\n    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n      let autoplayResult;\n      if (swiper.params.autoplay.reverseDirection) {\n        if (swiper.params.loop) {\n          swiper.loopFix();\n          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);\n          emit('autoplay');\n        } else if (!swiper.isBeginning) {\n          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);\n          emit('autoplay');\n        } else if (!swiper.params.autoplay.stopOnLastSlide) {\n          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);\n          emit('autoplay');\n        } else {\n          stop();\n        }\n      } else if (swiper.params.loop) {\n        swiper.loopFix();\n        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);\n        emit('autoplay');\n      } else if (!swiper.isEnd) {\n        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);\n        emit('autoplay');\n      } else if (!swiper.params.autoplay.stopOnLastSlide) {\n        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);\n        emit('autoplay');\n      } else {\n        stop();\n      }\n      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {\n        run();\n      }\n    }, delay);\n  }\n  function start() {\n    if (typeof timeout !== 'undefined') return false;\n    if (swiper.autoplay.running) return false;\n    swiper.autoplay.running = true;\n    emit('autoplayStart');\n    run();\n    return true;\n  }\n  function stop() {\n    if (!swiper.autoplay.running) return false;\n    if (typeof timeout === 'undefined') return false;\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = undefined;\n    }\n    swiper.autoplay.running = false;\n    emit('autoplayStop');\n    return true;\n  }\n  function pause(speed) {\n    if (!swiper.autoplay.running) return;\n    if (swiper.autoplay.paused) return;\n    if (timeout) clearTimeout(timeout);\n    swiper.autoplay.paused = true;\n    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {\n      swiper.autoplay.paused = false;\n      run();\n    } else {\n      ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);\n      });\n    }\n  }\n  function onVisibilityChange() {\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {\n      pause();\n    }\n    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {\n      run();\n      swiper.autoplay.paused = false;\n    }\n  }\n  function onTransitionEnd(e) {\n    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;\n    if (e.target !== swiper.$wrapperEl[0]) return;\n    ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);\n    });\n    swiper.autoplay.paused = false;\n    if (!swiper.autoplay.running) {\n      stop();\n    } else {\n      run();\n    }\n  }\n  function onMouseEnter() {\n    if (swiper.params.autoplay.disableOnInteraction) {\n      stop();\n    } else {\n      emit('autoplayPause');\n      pause();\n    }\n    ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);\n    });\n  }\n  function onMouseLeave() {\n    if (swiper.params.autoplay.disableOnInteraction) {\n      return;\n    }\n    swiper.autoplay.paused = false;\n    emit('autoplayResume');\n    run();\n  }\n  function attachMouseEvents() {\n    if (swiper.params.autoplay.pauseOnMouseEnter) {\n      swiper.$el.on('mouseenter', onMouseEnter);\n      swiper.$el.on('mouseleave', onMouseLeave);\n    }\n  }\n  function detachMouseEvents() {\n    swiper.$el.off('mouseenter', onMouseEnter);\n    swiper.$el.off('mouseleave', onMouseLeave);\n  }\n  on('init', () => {\n    if (swiper.params.autoplay.enabled) {\n      start();\n      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n      document.addEventListener('visibilitychange', onVisibilityChange);\n      attachMouseEvents();\n    }\n  });\n  on('beforeTransitionStart', (_s, speed, internal) => {\n    if (swiper.autoplay.running) {\n      if (internal || !swiper.params.autoplay.disableOnInteraction) {\n        swiper.autoplay.pause(speed);\n      } else {\n        stop();\n      }\n    }\n  });\n  on('sliderFirstMove', () => {\n    if (swiper.autoplay.running) {\n      if (swiper.params.autoplay.disableOnInteraction) {\n        stop();\n      } else {\n        pause();\n      }\n    }\n  });\n  on('touchEnd', () => {\n    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {\n      run();\n    }\n  });\n  on('destroy', () => {\n    detachMouseEvents();\n    if (swiper.autoplay.running) {\n      stop();\n    }\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n    document.removeEventListener('visibilitychange', onVisibilityChange);\n  });\n  Object.assign(swiper.autoplay, {\n    pause,\n    run,\n    start,\n    stop\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/autoplay/autoplay.js?"
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
    "./node_modules/swiper/modules/controller/controller.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint no-bitwise: [\"error\", { \"allow\": [\">>\"] }] */\n\nfunction Controller(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    controller: {\n      control: undefined,\n      inverse: false,\n      by: 'slide' // or 'container'\n    }\n  });\n\n  swiper.controller = {\n    control: undefined\n  };\n  function LinearSpline(x, y) {\n    const binarySearch = function search() {\n      let maxIndex;\n      let minIndex;\n      let guess;\n      return (array, val) => {\n        minIndex = -1;\n        maxIndex = array.length;\n        while (maxIndex - minIndex > 1) {\n          guess = maxIndex + minIndex >> 1;\n          if (array[guess] <= val) {\n            minIndex = guess;\n          } else {\n            maxIndex = guess;\n          }\n        }\n        return maxIndex;\n      };\n    }();\n    this.x = x;\n    this.y = y;\n    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:\n    // (x1,y1) is the known point before given value,\n    // (x3,y3) is the known point after given value.\n\n    let i1;\n    let i3;\n    this.interpolate = function interpolate(x2) {\n      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):\n\n      i3 = binarySearch(this.x, x2);\n      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:\n      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1\n\n      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];\n    };\n    return this;\n  } // xxx: for now i will just save one spline function to to\n\n  function getInterpolateFunction(c) {\n    if (!swiper.controller.spline) {\n      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);\n    }\n  }\n  function setTranslate(_t, byController) {\n    const controlled = swiper.controller.control;\n    let multiplier;\n    let controlledTranslate;\n    const Swiper = swiper.constructor;\n    function setControlledTranslate(c) {\n      // this will create an Interpolate function based on the snapGrids\n      // x is the Grid of the scrolled scroller and y will be the controlled scroller\n      // it makes sense to create this only once and recall it for the interpolation\n      // the function does a lot of value caching for performance\n      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;\n      if (swiper.params.controller.by === 'slide') {\n        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid\n        // but it did not work out\n\n        controlledTranslate = -swiper.controller.spline.interpolate(-translate);\n      }\n      if (!controlledTranslate || swiper.params.controller.by === 'container') {\n        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());\n        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();\n      }\n      if (swiper.params.controller.inverse) {\n        controlledTranslate = c.maxTranslate() - controlledTranslate;\n      }\n      c.updateProgress(controlledTranslate);\n      c.setTranslate(controlledTranslate, swiper);\n      c.updateActiveIndex();\n      c.updateSlidesClasses();\n    }\n    if (Array.isArray(controlled)) {\n      for (let i = 0; i < controlled.length; i += 1) {\n        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {\n          setControlledTranslate(controlled[i]);\n        }\n      }\n    } else if (controlled instanceof Swiper && byController !== controlled) {\n      setControlledTranslate(controlled);\n    }\n  }\n  function setTransition(duration, byController) {\n    const Swiper = swiper.constructor;\n    const controlled = swiper.controller.control;\n    let i;\n    function setControlledTransition(c) {\n      c.setTransition(duration, swiper);\n      if (duration !== 0) {\n        c.transitionStart();\n        if (c.params.autoHeight) {\n          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {\n            c.updateAutoHeight();\n          });\n        }\n        c.$wrapperEl.transitionEnd(() => {\n          if (!controlled) return;\n          if (c.params.loop && swiper.params.controller.by === 'slide') {\n            c.loopFix();\n          }\n          c.transitionEnd();\n        });\n      }\n    }\n    if (Array.isArray(controlled)) {\n      for (i = 0; i < controlled.length; i += 1) {\n        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {\n          setControlledTransition(controlled[i]);\n        }\n      }\n    } else if (controlled instanceof Swiper && byController !== controlled) {\n      setControlledTransition(controlled);\n    }\n  }\n  function removeSpline() {\n    if (!swiper.controller.control) return;\n    if (swiper.controller.spline) {\n      swiper.controller.spline = undefined;\n      delete swiper.controller.spline;\n    }\n  }\n  on('beforeInit', () => {\n    swiper.controller.control = swiper.params.controller.control;\n  });\n  on('update', () => {\n    removeSpline();\n  });\n  on('resize', () => {\n    removeSpline();\n  });\n  on('observerUpdate', () => {\n    removeSpline();\n  });\n  on('setTranslate', (_s, translate, byController) => {\n    if (!swiper.controller.control) return;\n    swiper.controller.setTranslate(translate, byController);\n  });\n  on('setTransition', (_s, duration, byController) => {\n    if (!swiper.controller.control) return;\n    swiper.controller.setTransition(duration, byController);\n  });\n  Object.assign(swiper.controller, {\n    setTranslate,\n    setTransition\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/controller/controller.js?"
      );
    },
    /*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
    "./node_modules/swiper/modules/effect-cards/effect-cards.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ EffectCards)\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");\n\n\n\n\nfunction EffectCards(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    cardsEffect: {\n      slideShadows: true,\n      transformEl: null\n    }\n  });\n  const setTranslate = () => {\n    const {\n      slides,\n      activeIndex\n    } = swiper;\n    const params = swiper.params.cardsEffect;\n    const {\n      startTranslate,\n      isTouched\n    } = swiper.touchEventsData;\n    const currentTranslate = swiper.translate;\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideProgress = $slideEl[0].progress;\n      const progress = Math.min(Math.max(slideProgress, -4), 4);\n      let offset = $slideEl[0].swiperSlideOffset;\n      if (swiper.params.centeredSlides && !swiper.params.cssMode) {\n        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);\n      }\n      if (swiper.params.centeredSlides && swiper.params.cssMode) {\n        offset -= slides[0].swiperSlideOffset;\n      }\n      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;\n      let tY = 0;\n      const tZ = -100 * Math.abs(progress);\n      let scale = 1;\n      let rotate = -2 * progress;\n      let tXAdd = 8 - Math.abs(progress) * 0.75;\n      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;\n      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;\n      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;\n      if (isSwipeToNext || isSwipeToPrev) {\n        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;\n        rotate += -28 * progress * subProgress;\n        scale += -0.5 * subProgress;\n        tXAdd += 96 * subProgress;\n        tY = `${-25 * subProgress * Math.abs(progress)}%`;\n      }\n      if (progress < 0) {\n        // next\n        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;\n      } else if (progress > 0) {\n        // prev\n        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;\n      } else {\n        tX = `${tX}px`;\n      }\n      if (!swiper.isHorizontal()) {\n        const prevY = tY;\n        tY = tX;\n        tX = prevY;\n      }\n      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;\n      const transform = `\n        translate3d(${tX}, ${tY}, ${tZ}px)\n        rotateZ(${rotate}deg)\n        scale(${scaleString})\n      `;\n      if (params.slideShadows) {\n        // Set shadows\n        let $shadowEl = $slideEl.find(\'.swiper-slide-shadow\');\n        if ($shadowEl.length === 0) {\n          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);\n        }\n        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);\n      }\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);\n      $targetEl.transform(transform);\n    }\n  };\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.cardsEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find(\'.swiper-slide-shadow\').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({\n      swiper,\n      duration,\n      transformEl\n    });\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({\n    effect: \'cards\',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      watchSlidesProgress: true,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-cards/effect-cards.js?'
      );
    },
    /*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
    "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EffectCoverflow)\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n\n\n\nfunction EffectCoverflow(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    coverflowEffect: {\n      rotate: 50,\n      stretch: 0,\n      depth: 100,\n      scale: 1,\n      modifier: 1,\n      slideShadows: true,\n      transformEl: null\n    }\n  });\n  const setTranslate = () => {\n    const {\n      width: swiperWidth,\n      height: swiperHeight,\n      slides,\n      slidesSizesGrid\n    } = swiper;\n    const params = swiper.params.coverflowEffect;\n    const isHorizontal = swiper.isHorizontal();\n    const transform = swiper.translate;\n    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;\n    const rotate = isHorizontal ? params.rotate : -params.rotate;\n    const translate = params.depth; // Each slide offset from center\n\n    for (let i = 0, length = slides.length; i < length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideSize = slidesSizesGrid[i];\n      const slideOffset = $slideEl[0].swiperSlideOffset;\n      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;\n      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;\n      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;\n      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0\n\n      let translateZ = -translate * Math.abs(offsetMultiplier);\n      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders\n\n      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {\n        stretch = parseFloat(params.stretch) / 100 * slideSize;\n      }\n      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;\n      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;\n      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values\n\n      if (Math.abs(translateX) < 0.001) translateX = 0;\n      if (Math.abs(translateY) < 0.001) translateY = 0;\n      if (Math.abs(translateZ) < 0.001) translateZ = 0;\n      if (Math.abs(rotateY) < 0.001) rotateY = 0;\n      if (Math.abs(rotateX) < 0.001) rotateX = 0;\n      if (Math.abs(scale) < 0.001) scale = 0;\n      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(slideTransform);\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;\n      if (params.slideShadows) {\n        // Set shadows\n        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n        if ($shadowBeforeEl.length === 0) {\n          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, isHorizontal ? 'left' : 'top');\n        }\n        if ($shadowAfterEl.length === 0) {\n          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, isHorizontal ? 'right' : 'bottom');\n        }\n        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;\n        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;\n      }\n    }\n  };\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.coverflowEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'coverflow',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      watchSlidesProgress: true\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js?"
      );
    },
    /*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
    "./node_modules/swiper/modules/effect-creative/effect-creative.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ EffectCreative)\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");\n\n\n\n\nfunction EffectCreative(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    creativeEffect: {\n      transformEl: null,\n      limitProgress: 1,\n      shadowPerProgress: false,\n      progressMultiplier: 1,\n      perspective: true,\n      prev: {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        opacity: 1,\n        scale: 1\n      },\n      next: {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        opacity: 1,\n        scale: 1\n      }\n    }\n  });\n  const getTranslateValue = value => {\n    if (typeof value === \'string\') return value;\n    return `${value}px`;\n  };\n  const setTranslate = () => {\n    const {\n      slides,\n      $wrapperEl,\n      slidesSizesGrid\n    } = swiper;\n    const params = swiper.params.creativeEffect;\n    const {\n      progressMultiplier: multiplier\n    } = params;\n    const isCenteredSlides = swiper.params.centeredSlides;\n    if (isCenteredSlides) {\n      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;\n      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);\n    }\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideProgress = $slideEl[0].progress;\n      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);\n      let originalProgress = progress;\n      if (!isCenteredSlides) {\n        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);\n      }\n      const offset = $slideEl[0].swiperSlideOffset;\n      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];\n      const r = [0, 0, 0];\n      let custom = false;\n      if (!swiper.isHorizontal()) {\n        t[1] = t[0];\n        t[0] = 0;\n      }\n      let data = {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        scale: 1,\n        opacity: 1\n      };\n      if (progress < 0) {\n        data = params.next;\n        custom = true;\n      } else if (progress > 0) {\n        data = params.prev;\n        custom = true;\n      } // set translate\n\n      t.forEach((value, index) => {\n        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;\n      }); // set rotates\n\n      r.forEach((value, index) => {\n        r[index] = data.rotate[index] * Math.abs(progress * multiplier);\n      });\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;\n      const translateString = t.join(\', \');\n      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;\n      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;\n      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;\n      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows\n\n      if (custom && data.shadow || !custom) {\n        let $shadowEl = $slideEl.children(\'.swiper-slide-shadow\');\n        if ($shadowEl.length === 0 && data.shadow) {\n          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);\n        }\n        if ($shadowEl.length) {\n          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;\n          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);\n        }\n      }\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);\n      $targetEl.transform(transform).css({\n        opacity: opacityString\n      });\n      if (data.origin) {\n        $targetEl.css(\'transform-origin\', data.origin);\n      }\n    }\n  };\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.creativeEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find(\'.swiper-slide-shadow\').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({\n      swiper,\n      duration,\n      transformEl,\n      allSlides: true\n    });\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({\n    effect: \'creative\',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => swiper.params.creativeEffect.perspective,\n    overwriteParams: () => ({\n      watchSlidesProgress: true,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-creative/effect-creative.js?'
      );
    },
    /*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
    "./node_modules/swiper/modules/effect-cube/effect-cube.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EffectCube)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n\n\nfunction EffectCube(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    cubeEffect: {\n      slideShadows: true,\n      shadow: true,\n      shadowOffset: 20,\n      shadowScale: 0.94\n    }\n  });\n  const setTranslate = () => {\n    const {\n      $el,\n      $wrapperEl,\n      slides,\n      width: swiperWidth,\n      height: swiperHeight,\n      rtlTranslate: rtl,\n      size: swiperSize,\n      browser\n    } = swiper;\n    const params = swiper.params.cubeEffect;\n    const isHorizontal = swiper.isHorizontal();\n    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n    let wrapperRotate = 0;\n    let $cubeShadowEl;\n    if (params.shadow) {\n      if (isHorizontal) {\n        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');\n        if ($cubeShadowEl.length === 0) {\n          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('<div class=\"swiper-cube-shadow\"></div>');\n          $wrapperEl.append($cubeShadowEl);\n        }\n        $cubeShadowEl.css({\n          height: `${swiperWidth}px`\n        });\n      } else {\n        $cubeShadowEl = $el.find('.swiper-cube-shadow');\n        if ($cubeShadowEl.length === 0) {\n          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('<div class=\"swiper-cube-shadow\"></div>');\n          $el.append($cubeShadowEl);\n        }\n      }\n    }\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      let slideIndex = i;\n      if (isVirtual) {\n        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);\n      }\n      let slideAngle = slideIndex * 90;\n      let round = Math.floor(slideAngle / 360);\n      if (rtl) {\n        slideAngle = -slideAngle;\n        round = Math.floor(-slideAngle / 360);\n      }\n      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);\n      let tx = 0;\n      let ty = 0;\n      let tz = 0;\n      if (slideIndex % 4 === 0) {\n        tx = -round * 4 * swiperSize;\n        tz = 0;\n      } else if ((slideIndex - 1) % 4 === 0) {\n        tx = 0;\n        tz = -round * 4 * swiperSize;\n      } else if ((slideIndex - 2) % 4 === 0) {\n        tx = swiperSize + round * 4 * swiperSize;\n        tz = swiperSize;\n      } else if ((slideIndex - 3) % 4 === 0) {\n        tx = -swiperSize;\n        tz = 3 * swiperSize + swiperSize * 4 * round;\n      }\n      if (rtl) {\n        tx = -tx;\n      }\n      if (!isHorizontal) {\n        ty = tx;\n        tx = 0;\n      }\n      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;\n      if (progress <= 1 && progress > -1) {\n        wrapperRotate = slideIndex * 90 + progress * 90;\n        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;\n      }\n      $slideEl.transform(transform);\n      if (params.slideShadows) {\n        // Set shadows\n        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n        if (shadowBefore.length === 0) {\n          shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}\"></div>`);\n          $slideEl.append(shadowBefore);\n        }\n        if (shadowAfter.length === 0) {\n          shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}\"></div>`);\n          $slideEl.append(shadowAfter);\n        }\n        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);\n        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);\n      }\n    }\n    $wrapperEl.css({\n      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,\n      'transform-origin': `50% 50% -${swiperSize / 2}px`\n    });\n    if (params.shadow) {\n      if (isHorizontal) {\n        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);\n      } else {\n        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;\n        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);\n        const scale1 = params.shadowScale;\n        const scale2 = params.shadowScale / multiplier;\n        const offset = params.shadowOffset;\n        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);\n      }\n    }\n    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;\n    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);\n  };\n  const setTransition = duration => {\n    const {\n      $el,\n      slides\n    } = swiper;\n    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {\n      $el.find('.swiper-cube-shadow').transition(duration);\n    }\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'cube',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      resistanceRatio: 0,\n      spaceBetween: 0,\n      centeredSlides: false,\n      virtualTranslate: true\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-cube/effect-cube.js?"
      );
    },
    /*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
    "./node_modules/swiper/modules/effect-fade/effect-fade.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ EffectFade)\n/* harmony export */ });\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");\n\n\n\nfunction EffectFade(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    fadeEffect: {\n      crossFade: false,\n      transformEl: null\n    }\n  });\n  const setTranslate = () => {\n    const {\n      slides\n    } = swiper;\n    const params = swiper.params.fadeEffect;\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = swiper.slides.eq(i);\n      const offset = $slideEl[0].swiperSlideOffset;\n      let tx = -offset;\n      if (!swiper.params.virtualTranslate) tx -= swiper.translate;\n      let ty = 0;\n      if (!swiper.isHorizontal()) {\n        ty = tx;\n        tx = 0;\n      }\n      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl);\n      $targetEl.css({\n        opacity: slideOpacity\n      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);\n    }\n  };\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.fadeEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__["default"])({\n      swiper,\n      duration,\n      transformEl,\n      allSlides: true\n    });\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({\n    effect: \'fade\',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      spaceBetween: 0,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-fade/effect-fade.js?'
      );
    },
    /*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
    "./node_modules/swiper/modules/effect-flip/effect-flip.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EffectFlip)\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ \"./node_modules/swiper/shared/effect-virtual-transition-end.js\");\n\n\n\n\nfunction EffectFlip(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    flipEffect: {\n      slideShadows: true,\n      limitRotation: true,\n      transformEl: null\n    }\n  });\n  const setTranslate = () => {\n    const {\n      slides,\n      rtlTranslate: rtl\n    } = swiper;\n    const params = swiper.params.flipEffect;\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      let progress = $slideEl[0].progress;\n      if (swiper.params.flipEffect.limitRotation) {\n        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);\n      }\n      const offset = $slideEl[0].swiperSlideOffset;\n      const rotate = -180 * progress;\n      let rotateY = rotate;\n      let rotateX = 0;\n      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;\n      let ty = 0;\n      if (!swiper.isHorizontal()) {\n        ty = tx;\n        tx = 0;\n        rotateX = -rotateY;\n        rotateY = 0;\n      } else if (rtl) {\n        rotateY = -rotateY;\n      }\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;\n      if (params.slideShadows) {\n        // Set shadows\n        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n        if (shadowBefore.length === 0) {\n          shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');\n        }\n        if (shadowAfter.length === 0) {\n          shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');\n        }\n        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);\n        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);\n      }\n      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(transform);\n    }\n  };\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.flipEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      swiper,\n      duration,\n      transformEl\n    });\n  };\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'flip',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      spaceBetween: 0,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/effect-flip/effect-flip.js?"
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
    "./node_modules/swiper/modules/free-mode/free-mode.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ freeMode)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction freeMode(_ref) {\n  let {\n    swiper,\n    extendParams,\n    emit,\n    once\n  } = _ref;\n  extendParams({\n    freeMode: {\n      enabled: false,\n      momentum: true,\n      momentumRatio: 1,\n      momentumBounce: true,\n      momentumBounceRatio: 1,\n      momentumVelocityRatio: 1,\n      sticky: false,\n      minimumVelocity: 0.02\n    }\n  });\n  function onTouchStart() {\n    const translate = swiper.getTranslate();\n    swiper.setTranslate(translate);\n    swiper.setTransition(0);\n    swiper.touchEventsData.velocities.length = 0;\n    swiper.freeMode.onTouchEnd({\n      currentPos: swiper.rtl ? swiper.translate : -swiper.translate\n    });\n  }\n  function onTouchMove() {\n    const {\n      touchEventsData: data,\n      touches\n    } = swiper; // Velocity\n\n    if (data.velocities.length === 0) {\n      data.velocities.push({\n        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],\n        time: data.touchStartTime\n      });\n    }\n    data.velocities.push({\n      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],\n      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()\n    });\n  }\n  function onTouchEnd(_ref2) {\n    let {\n      currentPos\n    } = _ref2;\n    const {\n      params,\n      $wrapperEl,\n      rtlTranslate: rtl,\n      snapGrid,\n      touchEventsData: data\n    } = swiper; // Time diff\n\n    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n    const timeDiff = touchEndTime - data.touchStartTime;\n    if (currentPos < -swiper.minTranslate()) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n    if (currentPos > -swiper.maxTranslate()) {\n      if (swiper.slides.length < snapGrid.length) {\n        swiper.slideTo(snapGrid.length - 1);\n      } else {\n        swiper.slideTo(swiper.slides.length - 1);\n      }\n      return;\n    }\n    if (params.freeMode.momentum) {\n      if (data.velocities.length > 1) {\n        const lastMoveEvent = data.velocities.pop();\n        const velocityEvent = data.velocities.pop();\n        const distance = lastMoveEvent.position - velocityEvent.position;\n        const time = lastMoveEvent.time - velocityEvent.time;\n        swiper.velocity = distance / time;\n        swiper.velocity /= 2;\n        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {\n          swiper.velocity = 0;\n        } // this implies that the user stopped moving a finger then released.\n        // There would be no events with distance zero, so the last event is stale.\n\n        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {\n          swiper.velocity = 0;\n        }\n      } else {\n        swiper.velocity = 0;\n      }\n      swiper.velocity *= params.freeMode.momentumVelocityRatio;\n      data.velocities.length = 0;\n      let momentumDuration = 1000 * params.freeMode.momentumRatio;\n      const momentumDistance = swiper.velocity * momentumDuration;\n      let newPosition = swiper.translate + momentumDistance;\n      if (rtl) newPosition = -newPosition;\n      let doBounce = false;\n      let afterBouncePosition;\n      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;\n      let needsLoopFix;\n      if (newPosition < swiper.maxTranslate()) {\n        if (params.freeMode.momentumBounce) {\n          if (newPosition + swiper.maxTranslate() < -bounceAmount) {\n            newPosition = swiper.maxTranslate() - bounceAmount;\n          }\n          afterBouncePosition = swiper.maxTranslate();\n          doBounce = true;\n          data.allowMomentumBounce = true;\n        } else {\n          newPosition = swiper.maxTranslate();\n        }\n        if (params.loop && params.centeredSlides) needsLoopFix = true;\n      } else if (newPosition > swiper.minTranslate()) {\n        if (params.freeMode.momentumBounce) {\n          if (newPosition - swiper.minTranslate() > bounceAmount) {\n            newPosition = swiper.minTranslate() + bounceAmount;\n          }\n          afterBouncePosition = swiper.minTranslate();\n          doBounce = true;\n          data.allowMomentumBounce = true;\n        } else {\n          newPosition = swiper.minTranslate();\n        }\n        if (params.loop && params.centeredSlides) needsLoopFix = true;\n      } else if (params.freeMode.sticky) {\n        let nextSlide;\n        for (let j = 0; j < snapGrid.length; j += 1) {\n          if (snapGrid[j] > -newPosition) {\n            nextSlide = j;\n            break;\n          }\n        }\n        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {\n          newPosition = snapGrid[nextSlide];\n        } else {\n          newPosition = snapGrid[nextSlide - 1];\n        }\n        newPosition = -newPosition;\n      }\n      if (needsLoopFix) {\n        once('transitionEnd', () => {\n          swiper.loopFix();\n        });\n      } // Fix duration\n\n      if (swiper.velocity !== 0) {\n        if (rtl) {\n          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);\n        } else {\n          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);\n        }\n        if (params.freeMode.sticky) {\n          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity\n          // event, then durations can be 20+ seconds to slide one (or zero!) slides.\n          // It's easy to see this when simulating touch with mouse events. To fix this,\n          // limit single-slide swipes to the default slide duration. This also has the\n          // nice side effect of matching slide speed if the user stopped moving before\n          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.\n          // For faster swipes, also apply limits (albeit higher ones).\n          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);\n          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];\n          if (moveDistance < currentSlideSize) {\n            momentumDuration = params.speed;\n          } else if (moveDistance < 2 * currentSlideSize) {\n            momentumDuration = params.speed * 1.5;\n          } else {\n            momentumDuration = params.speed * 2.5;\n          }\n        }\n      } else if (params.freeMode.sticky) {\n        swiper.slideToClosest();\n        return;\n      }\n      if (params.freeMode.momentumBounce && doBounce) {\n        swiper.updateProgress(afterBouncePosition);\n        swiper.setTransition(momentumDuration);\n        swiper.setTranslate(newPosition);\n        swiper.transitionStart(true, swiper.swipeDirection);\n        swiper.animating = true;\n        $wrapperEl.transitionEnd(() => {\n          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;\n          emit('momentumBounce');\n          swiper.setTransition(params.speed);\n          setTimeout(() => {\n            swiper.setTranslate(afterBouncePosition);\n            $wrapperEl.transitionEnd(() => {\n              if (!swiper || swiper.destroyed) return;\n              swiper.transitionEnd();\n            });\n          }, 0);\n        });\n      } else if (swiper.velocity) {\n        emit('_freeModeNoMomentumRelease');\n        swiper.updateProgress(newPosition);\n        swiper.setTransition(momentumDuration);\n        swiper.setTranslate(newPosition);\n        swiper.transitionStart(true, swiper.swipeDirection);\n        if (!swiper.animating) {\n          swiper.animating = true;\n          $wrapperEl.transitionEnd(() => {\n            if (!swiper || swiper.destroyed) return;\n            swiper.transitionEnd();\n          });\n        }\n      } else {\n        swiper.updateProgress(newPosition);\n      }\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    } else if (params.freeMode.sticky) {\n      swiper.slideToClosest();\n      return;\n    } else if (params.freeMode) {\n      emit('_freeModeNoMomentumRelease');\n    }\n    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {\n      swiper.updateProgress();\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    }\n  }\n  Object.assign(swiper, {\n    freeMode: {\n      onTouchStart,\n      onTouchMove,\n      onTouchEnd\n    }\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/free-mode/free-mode.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
    "./node_modules/swiper/modules/grid/grid.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grid)\n/* harmony export */ });\nfunction Grid(_ref) {\n  let {\n    swiper,\n    extendParams\n  } = _ref;\n  extendParams({\n    grid: {\n      rows: 1,\n      fill: 'column'\n    }\n  });\n  let slidesNumberEvenToRows;\n  let slidesPerRow;\n  let numFullColumns;\n  const initSlides = slidesLength => {\n    const {\n      slidesPerView\n    } = swiper.params;\n    const {\n      rows,\n      fill\n    } = swiper.params.grid;\n    slidesPerRow = slidesNumberEvenToRows / rows;\n    numFullColumns = Math.floor(slidesLength / rows);\n    if (Math.floor(slidesLength / rows) === slidesLength / rows) {\n      slidesNumberEvenToRows = slidesLength;\n    } else {\n      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;\n    }\n    if (slidesPerView !== 'auto' && fill === 'row') {\n      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);\n    }\n  };\n  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {\n    const {\n      slidesPerGroup,\n      spaceBetween\n    } = swiper.params;\n    const {\n      rows,\n      fill\n    } = swiper.params.grid; // Set slides order\n\n    let newSlideOrderIndex;\n    let column;\n    let row;\n    if (fill === 'row' && slidesPerGroup > 1) {\n      const groupIndex = Math.floor(i / (slidesPerGroup * rows));\n      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;\n      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);\n      row = Math.floor(slideIndexInGroup / columnsInGroup);\n      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;\n      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;\n      slide.css({\n        '-webkit-order': newSlideOrderIndex,\n        order: newSlideOrderIndex\n      });\n    } else if (fill === 'column') {\n      column = Math.floor(i / rows);\n      row = i - column * rows;\n      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {\n        row += 1;\n        if (row >= rows) {\n          row = 0;\n          column += 1;\n        }\n      }\n    } else {\n      row = Math.floor(i / slidesPerRow);\n      column = i - row * slidesPerRow;\n    }\n    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');\n  };\n  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {\n    const {\n      spaceBetween,\n      centeredSlides,\n      roundLengths\n    } = swiper.params;\n    const {\n      rows\n    } = swiper.params.grid;\n    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;\n    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;\n    swiper.$wrapperEl.css({\n      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`\n    });\n    if (centeredSlides) {\n      snapGrid.splice(0, snapGrid.length);\n      const newSlidesGrid = [];\n      for (let i = 0; i < snapGrid.length; i += 1) {\n        let slidesGridItem = snapGrid[i];\n        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);\n        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);\n      }\n      snapGrid.push(...newSlidesGrid);\n    }\n  };\n  swiper.grid = {\n    initSlides,\n    updateSlide,\n    updateWrapperSize\n  };\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/grid/grid.js?"
      );
    },
    /*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
    "./node_modules/swiper/modules/hash-navigation/hash-navigation.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HashNavigation)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction HashNavigation(_ref) {\n  let {\n    swiper,\n    extendParams,\n    emit,\n    on\n  } = _ref;\n  let initialized = false;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    hashNavigation: {\n      enabled: false,\n      replaceState: false,\n      watchState: false\n    }\n  });\n  const onHashChange = () => {\n    emit('hashChange');\n    const newHash = document.location.hash.replace('#', '');\n    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');\n    if (newHash !== activeSlideHash) {\n      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash=\"${newHash}\"]`).index();\n      if (typeof newIndex === 'undefined') return;\n      swiper.slideTo(newIndex);\n    }\n  };\n  const setHash = () => {\n    if (!initialized || !swiper.params.hashNavigation.enabled) return;\n    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {\n      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');\n      emit('hashSet');\n    } else {\n      const slide = swiper.slides.eq(swiper.activeIndex);\n      const hash = slide.attr('data-hash') || slide.attr('data-history');\n      document.location.hash = hash || '';\n      emit('hashSet');\n    }\n  };\n  const init = () => {\n    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;\n    initialized = true;\n    const hash = document.location.hash.replace('#', '');\n    if (hash) {\n      const speed = 0;\n      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {\n        const slide = swiper.slides.eq(i);\n        const slideHash = slide.attr('data-hash') || slide.attr('data-history');\n        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {\n          const index = slide.index();\n          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);\n        }\n      }\n    }\n    if (swiper.params.hashNavigation.watchState) {\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window).on('hashchange', onHashChange);\n    }\n  };\n  const destroy = () => {\n    if (swiper.params.hashNavigation.watchState) {\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window).off('hashchange', onHashChange);\n    }\n  };\n  on('init', () => {\n    if (swiper.params.hashNavigation.enabled) {\n      init();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.params.hashNavigation.enabled) {\n      destroy();\n    }\n  });\n  on('transitionEnd _freeModeNoMomentumRelease', () => {\n    if (initialized) {\n      setHash();\n    }\n  });\n  on('slideChange', () => {\n    if (initialized && swiper.params.cssMode) {\n      setHash();\n    }\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/hash-navigation/hash-navigation.js?"
      );
    },
    /*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
    "./node_modules/swiper/modules/history/history.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ History)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction History(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    history: {\n      enabled: false,\n      root: '',\n      replaceState: false,\n      key: 'slides'\n    }\n  });\n  let initialized = false;\n  let paths = {};\n  const slugify = text => {\n    return text.toString().replace(/\\s+/g, '-').replace(/[^\\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');\n  };\n  const getPathValues = urlOverride => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    let location;\n    if (urlOverride) {\n      location = new URL(urlOverride);\n    } else {\n      location = window.location;\n    }\n    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');\n    const total = pathArray.length;\n    const key = pathArray[total - 2];\n    const value = pathArray[total - 1];\n    return {\n      key,\n      value\n    };\n  };\n  const setHistory = (key, index) => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!initialized || !swiper.params.history.enabled) return;\n    let location;\n    if (swiper.params.url) {\n      location = new URL(swiper.params.url);\n    } else {\n      location = window.location;\n    }\n    const slide = swiper.slides.eq(index);\n    let value = slugify(slide.attr('data-history'));\n    if (swiper.params.history.root.length > 0) {\n      let root = swiper.params.history.root;\n      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);\n      value = `${root}/${key}/${value}`;\n    } else if (!location.pathname.includes(key)) {\n      value = `${key}/${value}`;\n    }\n    const currentState = window.history.state;\n    if (currentState && currentState.value === value) {\n      return;\n    }\n    if (swiper.params.history.replaceState) {\n      window.history.replaceState({\n        value\n      }, null, value);\n    } else {\n      window.history.pushState({\n        value\n      }, null, value);\n    }\n  };\n  const scrollToSlide = (speed, value, runCallbacks) => {\n    if (value) {\n      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {\n        const slide = swiper.slides.eq(i);\n        const slideHistory = slugify(slide.attr('data-history'));\n        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {\n          const index = slide.index();\n          swiper.slideTo(index, speed, runCallbacks);\n        }\n      }\n    } else {\n      swiper.slideTo(0, speed, runCallbacks);\n    }\n  };\n  const setHistoryPopState = () => {\n    paths = getPathValues(swiper.params.url);\n    scrollToSlide(swiper.params.speed, swiper.paths.value, false);\n  };\n  const init = () => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!swiper.params.history) return;\n    if (!window.history || !window.history.pushState) {\n      swiper.params.history.enabled = false;\n      swiper.params.hashNavigation.enabled = true;\n      return;\n    }\n    initialized = true;\n    paths = getPathValues(swiper.params.url);\n    if (!paths.key && !paths.value) return;\n    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);\n    if (!swiper.params.history.replaceState) {\n      window.addEventListener('popstate', setHistoryPopState);\n    }\n  };\n  const destroy = () => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!swiper.params.history.replaceState) {\n      window.removeEventListener('popstate', setHistoryPopState);\n    }\n  };\n  on('init', () => {\n    if (swiper.params.history.enabled) {\n      init();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.params.history.enabled) {\n      destroy();\n    }\n  });\n  on('transitionEnd _freeModeNoMomentumRelease', () => {\n    if (initialized) {\n      setHistory(swiper.params.history.key, swiper.activeIndex);\n    }\n  });\n  on('slideChange', () => {\n    if (initialized && swiper.params.cssMode) {\n      setHistory(swiper.params.history.key, swiper.activeIndex);\n    }\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/history/history.js?"
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
    "./node_modules/swiper/modules/keyboard/keyboard.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* eslint-disable consistent-return */\n\n\nfunction Keyboard(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  swiper.keyboard = {\n    enabled: false\n  };\n  extendParams({\n    keyboard: {\n      enabled: false,\n      onlyInViewport: true,\n      pageUpDown: true\n    }\n  });\n  function handle(event) {\n    if (!swiper.enabled) return;\n    const {\n      rtlTranslate: rtl\n    } = swiper;\n    let e = event;\n    if (e.originalEvent) e = e.originalEvent; // jquery fix\n\n    const kc = e.keyCode || e.charCode;\n    const pageUpDown = swiper.params.keyboard.pageUpDown;\n    const isPageUp = pageUpDown && kc === 33;\n    const isPageDown = pageUpDown && kc === 34;\n    const isArrowLeft = kc === 37;\n    const isArrowRight = kc === 39;\n    const isArrowUp = kc === 38;\n    const isArrowDown = kc === 40; // Directions locks\n\n    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {\n      return false;\n    }\n    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {\n      return false;\n    }\n    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {\n      return undefined;\n    }\n    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {\n      return undefined;\n    }\n    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {\n      let inView = false; // Check that swiper should be inside of visible area of window\n\n      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {\n        return undefined;\n      }\n      const $el = swiper.$el;\n      const swiperWidth = $el[0].clientWidth;\n      const swiperHeight = $el[0].clientHeight;\n      const windowWidth = window.innerWidth;\n      const windowHeight = window.innerHeight;\n      const swiperOffset = swiper.$el.offset();\n      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;\n      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];\n      for (let i = 0; i < swiperCoord.length; i += 1) {\n        const point = swiperCoord[i];\n        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {\n          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line\n\n          inView = true;\n        }\n      }\n      if (!inView) return undefined;\n    }\n    if (swiper.isHorizontal()) {\n      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {\n        if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n      }\n      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();\n      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();\n    } else {\n      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {\n        if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n      }\n      if (isPageDown || isArrowDown) swiper.slideNext();\n      if (isPageUp || isArrowUp) swiper.slidePrev();\n    }\n    emit('keyPress', kc);\n    return undefined;\n  }\n  function enable() {\n    if (swiper.keyboard.enabled) return;\n    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document).on('keydown', handle);\n    swiper.keyboard.enabled = true;\n  }\n  function disable() {\n    if (!swiper.keyboard.enabled) return;\n    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document).off('keydown', handle);\n    swiper.keyboard.enabled = false;\n  }\n  on('init', () => {\n    if (swiper.params.keyboard.enabled) {\n      enable();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.keyboard.enabled) {\n      disable();\n    }\n  });\n  Object.assign(swiper.keyboard, {\n    enable,\n    disable\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/keyboard/keyboard.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
    "./node_modules/swiper/modules/lazy/lazy.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Lazy)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Lazy(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  extendParams({\n    lazy: {\n      checkInView: false,\n      enabled: false,\n      loadPrevNext: false,\n      loadPrevNextAmount: 1,\n      loadOnTransitionStart: false,\n      scrollingElement: '',\n      elementClass: 'swiper-lazy',\n      loadingClass: 'swiper-lazy-loading',\n      loadedClass: 'swiper-lazy-loaded',\n      preloaderClass: 'swiper-lazy-preloader'\n    }\n  });\n  swiper.lazy = {};\n  let scrollHandlerAttached = false;\n  let initialImageLoaded = false;\n  function loadInSlide(index, loadInDuplicate) {\n    if (loadInDuplicate === void 0) {\n      loadInDuplicate = true;\n    }\n    const params = swiper.params.lazy;\n    if (typeof index === 'undefined') return;\n    if (swiper.slides.length === 0) return;\n    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index=\"${index}\"]`) : swiper.slides.eq(index);\n    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);\n    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {\n      $images.push($slideEl[0]);\n    }\n    if ($images.length === 0) return;\n    $images.each(imageEl => {\n      const $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(imageEl);\n      $imageEl.addClass(params.loadingClass);\n      const background = $imageEl.attr('data-background');\n      const src = $imageEl.attr('data-src');\n      const srcset = $imageEl.attr('data-srcset');\n      const sizes = $imageEl.attr('data-sizes');\n      const $pictureEl = $imageEl.parent('picture');\n      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {\n        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;\n        if (background) {\n          $imageEl.css('background-image', `url(\"${background}\")`);\n          $imageEl.removeAttr('data-background');\n        } else {\n          if (srcset) {\n            $imageEl.attr('srcset', srcset);\n            $imageEl.removeAttr('data-srcset');\n          }\n          if (sizes) {\n            $imageEl.attr('sizes', sizes);\n            $imageEl.removeAttr('data-sizes');\n          }\n          if ($pictureEl.length) {\n            $pictureEl.children('source').each(sourceEl => {\n              const $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sourceEl);\n              if ($source.attr('data-srcset')) {\n                $source.attr('srcset', $source.attr('data-srcset'));\n                $source.removeAttr('data-srcset');\n              }\n            });\n          }\n          if (src) {\n            $imageEl.attr('src', src);\n            $imageEl.removeAttr('data-src');\n          }\n        }\n        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);\n        $slideEl.find(`.${params.preloaderClass}`).remove();\n        if (swiper.params.loop && loadInDuplicate) {\n          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');\n          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {\n            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index=\"${slideOriginalIndex}\"]:not(.${swiper.params.slideDuplicateClass})`);\n            loadInSlide(originalSlide.index(), false);\n          } else {\n            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index=\"${slideOriginalIndex}\"]`);\n            loadInSlide(duplicatedSlide.index(), false);\n          }\n        }\n        emit('lazyImageReady', $slideEl[0], $imageEl[0]);\n        if (swiper.params.autoHeight) {\n          swiper.updateAutoHeight();\n        }\n      });\n      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);\n    });\n  }\n  function load() {\n    const {\n      $wrapperEl,\n      params: swiperParams,\n      slides,\n      activeIndex\n    } = swiper;\n    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;\n    const params = swiperParams.lazy;\n    let slidesPerView = swiperParams.slidesPerView;\n    if (slidesPerView === 'auto') {\n      slidesPerView = 0;\n    }\n    function slideExist(index) {\n      if (isVirtual) {\n        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index=\"${index}\"]`).length) {\n          return true;\n        }\n      } else if (slides[index]) return true;\n      return false;\n    }\n    function slideIndex(slideEl) {\n      if (isVirtual) {\n        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).attr('data-swiper-slide-index');\n      }\n      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).index();\n    }\n    if (!initialImageLoaded) initialImageLoaded = true;\n    if (swiper.params.watchSlidesProgress) {\n      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {\n        const index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).index();\n        loadInSlide(index);\n      });\n    } else if (slidesPerView > 1) {\n      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {\n        if (slideExist(i)) loadInSlide(i);\n      }\n    } else {\n      loadInSlide(activeIndex);\n    }\n    if (params.loadPrevNext) {\n      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {\n        const amount = params.loadPrevNextAmount;\n        const spv = slidesPerView;\n        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);\n        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides\n\n        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {\n          if (slideExist(i)) loadInSlide(i);\n        } // Prev Slides\n\n        for (let i = minIndex; i < activeIndex; i += 1) {\n          if (slideExist(i)) loadInSlide(i);\n        }\n      } else {\n        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);\n        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));\n        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);\n        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));\n      }\n    }\n  }\n  function checkInViewOnLoad() {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!swiper || swiper.destroyed) return;\n    const $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window);\n    const isWindow = $scrollElement[0] === window;\n    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;\n    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;\n    const swiperOffset = swiper.$el.offset();\n    const {\n      rtlTranslate: rtl\n    } = swiper;\n    let inView = false;\n    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;\n    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];\n    for (let i = 0; i < swiperCoord.length; i += 1) {\n      const point = swiperCoord[i];\n      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {\n        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line\n\n        inView = true;\n      }\n    }\n    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    if (inView) {\n      load();\n      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);\n    } else if (!scrollHandlerAttached) {\n      scrollHandlerAttached = true;\n      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);\n    }\n  }\n  on('beforeInit', () => {\n    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {\n      swiper.params.preloadImages = false;\n    }\n  });\n  on('init', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('scroll', () => {\n    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {\n      load();\n    }\n  });\n  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('transitionStart', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {\n        if (swiper.params.lazy.checkInView) {\n          checkInViewOnLoad();\n        } else {\n          load();\n        }\n      }\n    }\n  });\n  on('transitionEnd', () => {\n    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('slideChange', () => {\n    const {\n      lazy,\n      cssMode,\n      watchSlidesProgress,\n      touchReleaseOnEdges,\n      resistanceRatio\n    } = swiper.params;\n    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {\n      load();\n    }\n  });\n  Object.assign(swiper.lazy, {\n    load,\n    loadInSlide\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/lazy/lazy.js?"
      );
    },
    /*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
    "./node_modules/swiper/modules/manipulation/manipulation.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Manipulation)\n/* harmony export */ });\n/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");\n/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");\n/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");\n/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");\n/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");\n\n\n\n\n\nfunction Manipulation(_ref) {\n  let {\n    swiper\n  } = _ref;\n  Object.assign(swiper, {\n    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__["default"].bind(swiper),\n    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper),\n    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper),\n    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper),\n    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper)\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/manipulation.js?'
      );
    },
    /*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
    "./node_modules/swiper/modules/manipulation/methods/addSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addSlide)\n/* harmony export */ });\nfunction addSlide(index, slides) {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params,\n    activeIndex\n  } = swiper;\n  let activeIndexBuffer = activeIndex;\n  if (params.loop) {\n    activeIndexBuffer -= swiper.loopedSlides;\n    swiper.loopDestroy();\n    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);\n  }\n  const baseLength = swiper.slides.length;\n  if (index <= 0) {\n    swiper.prependSlide(slides);\n    return;\n  }\n  if (index >= baseLength) {\n    swiper.appendSlide(slides);\n    return;\n  }\n  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;\n  const slidesBuffer = [];\n  for (let i = baseLength - 1; i >= index; i -= 1) {\n    const currentSlide = swiper.slides.eq(i);\n    currentSlide.remove();\n    slidesBuffer.unshift(currentSlide);\n  }\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.append(slides[i]);\n    }\n    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;\n  } else {\n    $wrapperEl.append(slides);\n  }\n  for (let i = 0; i < slidesBuffer.length; i += 1) {\n    $wrapperEl.append(slidesBuffer[i]);\n  }\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n  if (!params.observer) {\n    swiper.update();\n  }\n  if (params.loop) {\n    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);\n  } else {\n    swiper.slideTo(newActiveIndex, 0, false);\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/methods/addSlide.js?"
      );
    },
    /*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
    "./node_modules/swiper/modules/manipulation/methods/appendSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendSlide)\n/* harmony export */ });\nfunction appendSlide(slides) {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params\n  } = swiper;\n  if (params.loop) {\n    swiper.loopDestroy();\n  }\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.append(slides[i]);\n    }\n  } else {\n    $wrapperEl.append(slides);\n  }\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n  if (!params.observer) {\n    swiper.update();\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/methods/appendSlide.js?"
      );
    },
    /*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
    "./node_modules/swiper/modules/manipulation/methods/prependSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prependSlide)\n/* harmony export */ });\nfunction prependSlide(slides) {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl,\n    activeIndex\n  } = swiper;\n  if (params.loop) {\n    swiper.loopDestroy();\n  }\n  let newActiveIndex = activeIndex + 1;\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.prepend(slides[i]);\n    }\n    newActiveIndex = activeIndex + slides.length;\n  } else {\n    $wrapperEl.prepend(slides);\n  }\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n  if (!params.observer) {\n    swiper.update();\n  }\n  swiper.slideTo(newActiveIndex, 0, false);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/methods/prependSlide.js?"
      );
    },
    /*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
    "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ removeAllSlides)\n/* harmony export */ });\nfunction removeAllSlides() {\n  const swiper = this;\n  const slidesIndexes = [];\n  for (let i = 0; i < swiper.slides.length; i += 1) {\n    slidesIndexes.push(i);\n  }\n  swiper.removeSlide(slidesIndexes);\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js?'
      );
    },
    /*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
    "./node_modules/swiper/modules/manipulation/methods/removeSlide.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeSlide)\n/* harmony export */ });\nfunction removeSlide(slidesIndexes) {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl,\n    activeIndex\n  } = swiper;\n  let activeIndexBuffer = activeIndex;\n  if (params.loop) {\n    activeIndexBuffer -= swiper.loopedSlides;\n    swiper.loopDestroy();\n    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);\n  }\n  let newActiveIndex = activeIndexBuffer;\n  let indexToRemove;\n  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {\n    for (let i = 0; i < slidesIndexes.length; i += 1) {\n      indexToRemove = slidesIndexes[i];\n      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();\n      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;\n    }\n    newActiveIndex = Math.max(newActiveIndex, 0);\n  } else {\n    indexToRemove = slidesIndexes;\n    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();\n    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;\n    newActiveIndex = Math.max(newActiveIndex, 0);\n  }\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n  if (!params.observer) {\n    swiper.update();\n  }\n  if (params.loop) {\n    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);\n  } else {\n    swiper.slideTo(newActiveIndex, 0, false);\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/manipulation/methods/removeSlide.js?"
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
    "./node_modules/swiper/modules/mousewheel/mousewheel.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mousewheel)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint-disable consistent-return */\n\n\n\nfunction Mousewheel(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    mousewheel: {\n      enabled: false,\n      releaseOnEdges: false,\n      invert: false,\n      forceToAxis: false,\n      sensitivity: 1,\n      eventsTarget: 'container',\n      thresholdDelta: null,\n      thresholdTime: null\n    }\n  });\n  swiper.mousewheel = {\n    enabled: false\n  };\n  let timeout;\n  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n  let lastEventBeforeSnap;\n  const recentWheelEvents = [];\n  function normalize(e) {\n    // Reasonable defaults\n    const PIXEL_STEP = 10;\n    const LINE_HEIGHT = 40;\n    const PAGE_HEIGHT = 800;\n    let sX = 0;\n    let sY = 0; // spinX, spinY\n\n    let pX = 0;\n    let pY = 0; // pixelX, pixelY\n    // Legacy\n\n    if ('detail' in e) {\n      sY = e.detail;\n    }\n    if ('wheelDelta' in e) {\n      sY = -e.wheelDelta / 120;\n    }\n    if ('wheelDeltaY' in e) {\n      sY = -e.wheelDeltaY / 120;\n    }\n    if ('wheelDeltaX' in e) {\n      sX = -e.wheelDeltaX / 120;\n    } // side scrolling on FF with DOMMouseScroll\n\n    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {\n      sX = sY;\n      sY = 0;\n    }\n    pX = sX * PIXEL_STEP;\n    pY = sY * PIXEL_STEP;\n    if ('deltaY' in e) {\n      pY = e.deltaY;\n    }\n    if ('deltaX' in e) {\n      pX = e.deltaX;\n    }\n    if (e.shiftKey && !pX) {\n      // if user scrolls with shift he wants horizontal scroll\n      pX = pY;\n      pY = 0;\n    }\n    if ((pX || pY) && e.deltaMode) {\n      if (e.deltaMode === 1) {\n        // delta in LINE units\n        pX *= LINE_HEIGHT;\n        pY *= LINE_HEIGHT;\n      } else {\n        // delta in PAGE units\n        pX *= PAGE_HEIGHT;\n        pY *= PAGE_HEIGHT;\n      }\n    } // Fall-back if spin cannot be determined\n\n    if (pX && !sX) {\n      sX = pX < 1 ? -1 : 1;\n    }\n    if (pY && !sY) {\n      sY = pY < 1 ? -1 : 1;\n    }\n    return {\n      spinX: sX,\n      spinY: sY,\n      pixelX: pX,\n      pixelY: pY\n    };\n  }\n  function handleMouseEnter() {\n    if (!swiper.enabled) return;\n    swiper.mouseEntered = true;\n  }\n  function handleMouseLeave() {\n    if (!swiper.enabled) return;\n    swiper.mouseEntered = false;\n  }\n  function animateSlider(newEvent) {\n    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {\n      // Prevent if delta of wheel scroll delta is below configured threshold\n      return false;\n    }\n    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {\n      // Prevent if time between scrolls is below configured threshold\n      return false;\n    } // If the movement is NOT big enough and\n    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):\n    //   Don't go any further (avoid insignificant scroll movement).\n\n    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {\n      // Return false as a default\n      return true;\n    } // If user is scrolling towards the end:\n    //   If the slider hasn't hit the latest slide or\n    //   if the slider is a loop and\n    //   if the slider isn't moving right now:\n    //     Go to next slide and\n    //     emit a scroll event.\n    // Else (the user is scrolling towards the beginning) and\n    // if the slider hasn't hit the first slide or\n    // if the slider is a loop and\n    // if the slider isn't moving right now:\n    //   Go to prev slide and\n    //   emit a scroll event.\n\n    if (newEvent.direction < 0) {\n      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {\n        swiper.slideNext();\n        emit('scroll', newEvent.raw);\n      }\n    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {\n      swiper.slidePrev();\n      emit('scroll', newEvent.raw);\n    } // If you got here is because an animation has been triggered so store the current time\n\n    lastScrollTime = new window.Date().getTime(); // Return false as a default\n\n    return false;\n  }\n  function releaseScroll(newEvent) {\n    const params = swiper.params.mousewheel;\n    if (newEvent.direction < 0) {\n      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {\n        // Return true to animate scroll on edges\n        return true;\n      }\n    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {\n      // Return true to animate scroll on edges\n      return true;\n    }\n    return false;\n  }\n  function handle(event) {\n    let e = event;\n    let disableParentSwiper = true;\n    if (!swiper.enabled) return;\n    const params = swiper.params.mousewheel;\n    if (swiper.params.cssMode) {\n      e.preventDefault();\n    }\n    let target = swiper.$el;\n    if (swiper.params.mousewheel.eventsTarget !== 'container') {\n      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.mousewheel.eventsTarget);\n    }\n    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;\n    if (e.originalEvent) e = e.originalEvent; // jquery fix\n\n    let delta = 0;\n    const rtlFactor = swiper.rtlTranslate ? -1 : 1;\n    const data = normalize(e);\n    if (params.forceToAxis) {\n      if (swiper.isHorizontal()) {\n        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;\n      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;\n    } else {\n      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;\n    }\n    if (delta === 0) return true;\n    if (params.invert) delta = -delta; // Get the scroll positions\n\n    let positions = swiper.getTranslate() + delta * params.sensitivity;\n    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();\n    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:\n    //     the disableParentSwiper will be true.\n    // When loop is false:\n    //     if the scroll positions is not on edge,\n    //     then the disableParentSwiper will be true.\n    //     if the scroll on edge positions,\n    //     then the disableParentSwiper will be false.\n\n    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());\n    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();\n    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {\n      // Register the new event in a variable which stores the relevant data\n      const newEvent = {\n        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        delta: Math.abs(delta),\n        direction: Math.sign(delta),\n        raw: event\n      }; // Keep the most recent events\n\n      if (recentWheelEvents.length >= 2) {\n        recentWheelEvents.shift(); // only store the last N events\n      }\n\n      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;\n      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:\n      //   If direction has changed or\n      //   if the scroll is quicker than the previous one:\n      //     Animate the slider.\n      // Else (this is the first time the wheel is moved):\n      //     Animate the slider.\n\n      if (prevEvent) {\n        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {\n          animateSlider(newEvent);\n        }\n      } else {\n        animateSlider(newEvent);\n      } // If it's time to release the scroll:\n      //   Return now so you don't hit the preventDefault.\n\n      if (releaseScroll(newEvent)) {\n        return true;\n      }\n    } else {\n      // Freemode or scrollContainer:\n      // If we recently snapped after a momentum scroll, then ignore wheel events\n      // to give time for the deceleration to finish. Stop ignoring after 500 msecs\n      // or if it's a new scroll (larger delta or inverse sign as last event before\n      // an end-of-momentum snap).\n      const newEvent = {\n        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        delta: Math.abs(delta),\n        direction: Math.sign(delta)\n      };\n      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;\n      if (!ignoreWheelEvents) {\n        lastEventBeforeSnap = undefined;\n        if (swiper.params.loop) {\n          swiper.loopFix();\n        }\n        let position = swiper.getTranslate() + delta * params.sensitivity;\n        const wasBeginning = swiper.isBeginning;\n        const wasEnd = swiper.isEnd;\n        if (position >= swiper.minTranslate()) position = swiper.minTranslate();\n        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();\n        swiper.setTransition(0);\n        swiper.setTranslate(position);\n        swiper.updateProgress();\n        swiper.updateActiveIndex();\n        swiper.updateSlidesClasses();\n        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {\n          swiper.updateSlidesClasses();\n        }\n        if (swiper.params.freeMode.sticky) {\n          // When wheel scrolling starts with sticky (aka snap) enabled, then detect\n          // the end of a momentum scroll by storing recent (N=15?) wheel events.\n          // 1. do all N events have decreasing or same (absolute value) delta?\n          // 2. did all N events arrive in the last M (M=500?) msecs?\n          // 3. does the earliest event have an (absolute value) delta that's\n          //    at least P (P=1?) larger than the most recent event's delta?\n          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?\n          // If 1-4 are \"yes\" then we're near the end of a momentum scroll deceleration.\n          // Snap immediately and ignore remaining wheel events in this scroll.\n          // See comment above for \"remaining wheel events in this scroll\" determination.\n          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.\n          clearTimeout(timeout);\n          timeout = undefined;\n          if (recentWheelEvents.length >= 15) {\n            recentWheelEvents.shift(); // only store the last N events\n          }\n\n          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;\n          const firstEvent = recentWheelEvents[0];\n          recentWheelEvents.push(newEvent);\n          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {\n            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.\n            recentWheelEvents.splice(0);\n          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {\n            // We're at the end of the deceleration of a momentum scroll, so there's no need\n            // to wait for more events. Snap ASAP on the next tick.\n            // Also, because there's some remaining momentum we'll bias the snap in the\n            // direction of the ongoing scroll because it's better UX for the scroll to snap\n            // in the same direction as the scroll instead of reversing to snap.  Therefore,\n            // if it's already scrolled more than 20% in the current direction, keep going.\n            const snapToThreshold = delta > 0 ? 0.8 : 0.2;\n            lastEventBeforeSnap = newEvent;\n            recentWheelEvents.splice(0);\n            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);\n            }, 0); // no delay; move on next tick\n          }\n\n          if (!timeout) {\n            // if we get here, then we haven't detected the end of a momentum scroll, so\n            // we'll consider a scroll \"complete\" when there haven't been any wheel events\n            // for 500ms.\n            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n              const snapToThreshold = 0.5;\n              lastEventBeforeSnap = newEvent;\n              recentWheelEvents.splice(0);\n              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);\n            }, 500);\n          }\n        } // Emit event\n\n        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay\n\n        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions\n\n        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;\n      }\n    }\n    if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n    return false;\n  }\n  function events(method) {\n    let target = swiper.$el;\n    if (swiper.params.mousewheel.eventsTarget !== 'container') {\n      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.mousewheel.eventsTarget);\n    }\n    target[method]('mouseenter', handleMouseEnter);\n    target[method]('mouseleave', handleMouseLeave);\n    target[method]('wheel', handle);\n  }\n  function enable() {\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.removeEventListener('wheel', handle);\n      return true;\n    }\n    if (swiper.mousewheel.enabled) return false;\n    events('on');\n    swiper.mousewheel.enabled = true;\n    return true;\n  }\n  function disable() {\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.addEventListener(event, handle);\n      return true;\n    }\n    if (!swiper.mousewheel.enabled) return false;\n    events('off');\n    swiper.mousewheel.enabled = false;\n    return true;\n  }\n  on('init', () => {\n    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {\n      disable();\n    }\n    if (swiper.params.mousewheel.enabled) enable();\n  });\n  on('destroy', () => {\n    if (swiper.params.cssMode) {\n      enable();\n    }\n    if (swiper.mousewheel.enabled) disable();\n  });\n  Object.assign(swiper.mousewheel, {\n    enable,\n    disable\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/mousewheel/mousewheel.js?"
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
    "./node_modules/swiper/modules/navigation/navigation.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Navigation(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  extendParams({\n    navigation: {\n      nextEl: null,\n      prevEl: null,\n      hideOnClick: false,\n      disabledClass: 'swiper-button-disabled',\n      hiddenClass: 'swiper-button-hidden',\n      lockClass: 'swiper-button-lock'\n    }\n  });\n  swiper.navigation = {\n    nextEl: null,\n    $nextEl: null,\n    prevEl: null,\n    $prevEl: null\n  };\n  function getEl(el) {\n    let $el;\n    if (el) {\n      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el);\n      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {\n        $el = swiper.$el.find(el);\n      }\n    }\n    return $el;\n  }\n  function toggleEl($el, disabled) {\n    const params = swiper.params.navigation;\n    if ($el && $el.length > 0) {\n      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);\n      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;\n      if (swiper.params.watchOverflow && swiper.enabled) {\n        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);\n      }\n    }\n  }\n  function update() {\n    // Update Navigation Buttons\n    if (swiper.params.loop) return;\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);\n    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);\n  }\n  function onPrevClick(e) {\n    e.preventDefault();\n    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;\n    swiper.slidePrev();\n  }\n  function onNextClick(e) {\n    e.preventDefault();\n    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;\n    swiper.slideNext();\n  }\n  function init() {\n    const params = swiper.params.navigation;\n    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {\n      nextEl: 'swiper-button-next',\n      prevEl: 'swiper-button-prev'\n    });\n    if (!(params.nextEl || params.prevEl)) return;\n    const $nextEl = getEl(params.nextEl);\n    const $prevEl = getEl(params.prevEl);\n    if ($nextEl && $nextEl.length > 0) {\n      $nextEl.on('click', onNextClick);\n    }\n    if ($prevEl && $prevEl.length > 0) {\n      $prevEl.on('click', onPrevClick);\n    }\n    Object.assign(swiper.navigation, {\n      $nextEl,\n      nextEl: $nextEl && $nextEl[0],\n      $prevEl,\n      prevEl: $prevEl && $prevEl[0]\n    });\n    if (!swiper.enabled) {\n      if ($nextEl) $nextEl.addClass(params.lockClass);\n      if ($prevEl) $prevEl.addClass(params.lockClass);\n    }\n  }\n  function destroy() {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    if ($nextEl && $nextEl.length) {\n      $nextEl.off('click', onNextClick);\n      $nextEl.removeClass(swiper.params.navigation.disabledClass);\n    }\n    if ($prevEl && $prevEl.length) {\n      $prevEl.off('click', onPrevClick);\n      $prevEl.removeClass(swiper.params.navigation.disabledClass);\n    }\n  }\n  on('init', () => {\n    init();\n    update();\n  });\n  on('toEdge fromEdge lock unlock', () => {\n    update();\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  on('enable disable', () => {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    if ($nextEl) {\n      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);\n    }\n    if ($prevEl) {\n      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);\n    }\n  });\n  on('click', (_s, e) => {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    const targetEl = e.target;\n    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetEl).is($nextEl)) {\n      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;\n      let isHidden;\n      if ($nextEl) {\n        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);\n      } else if ($prevEl) {\n        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);\n      }\n      if (isHidden === true) {\n        emit('navigationShow');\n      } else {\n        emit('navigationHide');\n      }\n      if ($nextEl) {\n        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);\n      }\n      if ($prevEl) {\n        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);\n      }\n    }\n  });\n  Object.assign(swiper.navigation, {\n    update,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/navigation/navigation.js?"
      );
    },
    /*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
    "./node_modules/swiper/modules/pagination/pagination.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pagination)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ \"./node_modules/swiper/shared/classes-to-selector.js\");\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n\n\n\nfunction Pagination(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const pfx = 'swiper-pagination';\n  extendParams({\n    pagination: {\n      el: null,\n      bulletElement: 'span',\n      clickable: false,\n      hideOnClick: false,\n      renderBullet: null,\n      renderProgressbar: null,\n      renderFraction: null,\n      renderCustom: null,\n      progressbarOpposite: false,\n      type: 'bullets',\n      // 'bullets' or 'progressbar' or 'fraction' or 'custom'\n      dynamicBullets: false,\n      dynamicMainBullets: 1,\n      formatFractionCurrent: number => number,\n      formatFractionTotal: number => number,\n      bulletClass: `${pfx}-bullet`,\n      bulletActiveClass: `${pfx}-bullet-active`,\n      modifierClass: `${pfx}-`,\n      currentClass: `${pfx}-current`,\n      totalClass: `${pfx}-total`,\n      hiddenClass: `${pfx}-hidden`,\n      progressbarFillClass: `${pfx}-progressbar-fill`,\n      progressbarOppositeClass: `${pfx}-progressbar-opposite`,\n      clickableClass: `${pfx}-clickable`,\n      lockClass: `${pfx}-lock`,\n      horizontalClass: `${pfx}-horizontal`,\n      verticalClass: `${pfx}-vertical`\n    }\n  });\n  swiper.pagination = {\n    el: null,\n    $el: null,\n    bullets: []\n  };\n  let bulletSize;\n  let dynamicBulletIndex = 0;\n  function isPaginationDisabled() {\n    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;\n  }\n  function setSideBullets($bulletEl, position) {\n    const {\n      bulletActiveClass\n    } = swiper.params.pagination;\n    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);\n  }\n  function update() {\n    // Render || Update Pagination bullets/items\n    const rtl = swiper.rtl;\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;\n    const $el = swiper.pagination.$el; // Current/Total\n\n    let current;\n    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;\n    if (swiper.params.loop) {\n      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);\n      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {\n        current -= slidesLength - swiper.loopedSlides * 2;\n      }\n      if (current > total - 1) current -= total;\n      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;\n    } else if (typeof swiper.snapIndex !== 'undefined') {\n      current = swiper.snapIndex;\n    } else {\n      current = swiper.activeIndex || 0;\n    } // Types\n\n    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {\n      const bullets = swiper.pagination.bullets;\n      let firstIndex;\n      let lastIndex;\n      let midIndex;\n      if (params.dynamicBullets) {\n        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);\n        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);\n        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {\n          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);\n          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {\n            dynamicBulletIndex = params.dynamicMainBullets - 1;\n          } else if (dynamicBulletIndex < 0) {\n            dynamicBulletIndex = 0;\n          }\n        }\n        firstIndex = Math.max(current - dynamicBulletIndex, 0);\n        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);\n        midIndex = (lastIndex + firstIndex) / 2;\n      }\n      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));\n      if ($el.length > 1) {\n        bullets.each(bullet => {\n          const $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bullet);\n          const bulletIndex = $bullet.index();\n          if (bulletIndex === current) {\n            $bullet.addClass(params.bulletActiveClass);\n          }\n          if (params.dynamicBullets) {\n            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {\n              $bullet.addClass(`${params.bulletActiveClass}-main`);\n            }\n            if (bulletIndex === firstIndex) {\n              setSideBullets($bullet, 'prev');\n            }\n            if (bulletIndex === lastIndex) {\n              setSideBullets($bullet, 'next');\n            }\n          }\n        });\n      } else {\n        const $bullet = bullets.eq(current);\n        const bulletIndex = $bullet.index();\n        $bullet.addClass(params.bulletActiveClass);\n        if (params.dynamicBullets) {\n          const $firstDisplayedBullet = bullets.eq(firstIndex);\n          const $lastDisplayedBullet = bullets.eq(lastIndex);\n          for (let i = firstIndex; i <= lastIndex; i += 1) {\n            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);\n          }\n          if (swiper.params.loop) {\n            if (bulletIndex >= bullets.length) {\n              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {\n                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);\n              }\n              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);\n            } else {\n              setSideBullets($firstDisplayedBullet, 'prev');\n              setSideBullets($lastDisplayedBullet, 'next');\n            }\n          } else {\n            setSideBullets($firstDisplayedBullet, 'prev');\n            setSideBullets($lastDisplayedBullet, 'next');\n          }\n        }\n      }\n      if (params.dynamicBullets) {\n        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);\n        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;\n        const offsetProp = rtl ? 'right' : 'left';\n        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);\n      }\n    }\n    if (params.type === 'fraction') {\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.totalClass)).text(params.formatFractionTotal(total));\n    }\n    if (params.type === 'progressbar') {\n      let progressbarDirection;\n      if (params.progressbarOpposite) {\n        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';\n      } else {\n        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';\n      }\n      const scale = (current + 1) / total;\n      let scaleX = 1;\n      let scaleY = 1;\n      if (progressbarDirection === 'horizontal') {\n        scaleX = scale;\n      } else {\n        scaleY = scale;\n      }\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);\n    }\n    if (params.type === 'custom' && params.renderCustom) {\n      $el.html(params.renderCustom(swiper, current + 1, total));\n      emit('paginationRender', $el[0]);\n    } else {\n      emit('paginationUpdate', $el[0]);\n    }\n    if (swiper.params.watchOverflow && swiper.enabled) {\n      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);\n    }\n  }\n  function render() {\n    // Render Container\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;\n    const $el = swiper.pagination.$el;\n    let paginationHTML = '';\n    if (params.type === 'bullets') {\n      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;\n      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {\n        numberOfBullets = slidesLength;\n      }\n      for (let i = 0; i < numberOfBullets; i += 1) {\n        if (params.renderBullet) {\n          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);\n        } else {\n          paginationHTML += `<${params.bulletElement} class=\"${params.bulletClass}\"></${params.bulletElement}>`;\n        }\n      }\n      $el.html(paginationHTML);\n      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass));\n    }\n    if (params.type === 'fraction') {\n      if (params.renderFraction) {\n        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);\n      } else {\n        paginationHTML = `<span class=\"${params.currentClass}\"></span>` + ' / ' + `<span class=\"${params.totalClass}\"></span>`;\n      }\n      $el.html(paginationHTML);\n    }\n    if (params.type === 'progressbar') {\n      if (params.renderProgressbar) {\n        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);\n      } else {\n        paginationHTML = `<span class=\"${params.progressbarFillClass}\"></span>`;\n      }\n      $el.html(paginationHTML);\n    }\n    if (params.type !== 'custom') {\n      emit('paginationRender', swiper.pagination.$el[0]);\n    }\n  }\n  function init() {\n    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {\n      el: 'swiper-pagination'\n    });\n    const params = swiper.params.pagination;\n    if (!params.el) return;\n    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params.el);\n    if ($el.length === 0) return;\n    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {\n      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper\n\n      if ($el.length > 1) {\n        $el = $el.filter(el => {\n          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el).parents('.swiper')[0] !== swiper.el) return false;\n          return true;\n        });\n      }\n    }\n    if (params.type === 'bullets' && params.clickable) {\n      $el.addClass(params.clickableClass);\n    }\n    $el.addClass(params.modifierClass + params.type);\n    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);\n    if (params.type === 'bullets' && params.dynamicBullets) {\n      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);\n      dynamicBulletIndex = 0;\n      if (params.dynamicMainBullets < 1) {\n        params.dynamicMainBullets = 1;\n      }\n    }\n    if (params.type === 'progressbar' && params.progressbarOpposite) {\n      $el.addClass(params.progressbarOppositeClass);\n    }\n    if (params.clickable) {\n      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass), function onClick(e) {\n        e.preventDefault();\n        let index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).index() * swiper.params.slidesPerGroup;\n        if (swiper.params.loop) index += swiper.loopedSlides;\n        swiper.slideTo(index);\n      });\n    }\n    Object.assign(swiper.pagination, {\n      $el,\n      el: $el[0]\n    });\n    if (!swiper.enabled) {\n      $el.addClass(params.lockClass);\n    }\n  }\n  function destroy() {\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const $el = swiper.pagination.$el;\n    $el.removeClass(params.hiddenClass);\n    $el.removeClass(params.modifierClass + params.type);\n    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);\n    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);\n    if (params.clickable) {\n      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass));\n    }\n  }\n  on('init', () => {\n    init();\n    render();\n    update();\n  });\n  on('activeIndexChange', () => {\n    if (swiper.params.loop) {\n      update();\n    } else if (typeof swiper.snapIndex === 'undefined') {\n      update();\n    }\n  });\n  on('snapIndexChange', () => {\n    if (!swiper.params.loop) {\n      update();\n    }\n  });\n  on('slidesLengthChange', () => {\n    if (swiper.params.loop) {\n      render();\n      update();\n    }\n  });\n  on('snapGridLengthChange', () => {\n    if (!swiper.params.loop) {\n      render();\n      update();\n    }\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  on('enable disable', () => {\n    const {\n      $el\n    } = swiper.pagination;\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);\n    }\n  });\n  on('lock unlock', () => {\n    update();\n  });\n  on('click', (_s, e) => {\n    const targetEl = e.target;\n    const {\n      $el\n    } = swiper.pagination;\n    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {\n      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;\n      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);\n      if (isHidden === true) {\n        emit('paginationShow');\n      } else {\n        emit('paginationHide');\n      }\n      $el.toggleClass(swiper.params.pagination.hiddenClass);\n    }\n  });\n  Object.assign(swiper.pagination, {\n    render,\n    update,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/pagination/pagination.js?"
      );
    },
    /*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
    "./node_modules/swiper/modules/parallax/parallax.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Parallax)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\nfunction Parallax(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    parallax: {\n      enabled: false\n    }\n  });\n  const setTransform = (el, progress) => {\n    const {\n      rtl\n    } = swiper;\n    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el);\n    const rtlFactor = rtl ? -1 : 1;\n    const p = $el.attr('data-swiper-parallax') || '0';\n    let x = $el.attr('data-swiper-parallax-x');\n    let y = $el.attr('data-swiper-parallax-y');\n    const scale = $el.attr('data-swiper-parallax-scale');\n    const opacity = $el.attr('data-swiper-parallax-opacity');\n    if (x || y) {\n      x = x || '0';\n      y = y || '0';\n    } else if (swiper.isHorizontal()) {\n      x = p;\n      y = '0';\n    } else {\n      y = p;\n      x = '0';\n    }\n    if (x.indexOf('%') >= 0) {\n      x = `${parseInt(x, 10) * progress * rtlFactor}%`;\n    } else {\n      x = `${x * progress * rtlFactor}px`;\n    }\n    if (y.indexOf('%') >= 0) {\n      y = `${parseInt(y, 10) * progress}%`;\n    } else {\n      y = `${y * progress}px`;\n    }\n    if (typeof opacity !== 'undefined' && opacity !== null) {\n      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));\n      $el[0].style.opacity = currentOpacity;\n    }\n    if (typeof scale === 'undefined' || scale === null) {\n      $el.transform(`translate3d(${x}, ${y}, 0px)`);\n    } else {\n      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));\n      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);\n    }\n  };\n  const setTranslate = () => {\n    const {\n      $el,\n      slides,\n      progress,\n      snapGrid\n    } = swiper;\n    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {\n      setTransform(el, progress);\n    });\n    slides.each((slideEl, slideIndex) => {\n      let slideProgress = slideEl.progress;\n      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {\n        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);\n      }\n      slideProgress = Math.min(Math.max(slideProgress, -1), 1);\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {\n        setTransform(el, slideProgress);\n      });\n    });\n  };\n  const setTransition = function (duration) {\n    if (duration === void 0) {\n      duration = swiper.params.speed;\n    }\n    const {\n      $el\n    } = swiper;\n    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {\n      const $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parallaxEl);\n      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;\n      if (duration === 0) parallaxDuration = 0;\n      $parallaxEl.transition(parallaxDuration);\n    });\n  };\n  on('beforeInit', () => {\n    if (!swiper.params.parallax.enabled) return;\n    swiper.params.watchSlidesProgress = true;\n    swiper.originalParams.watchSlidesProgress = true;\n  });\n  on('init', () => {\n    if (!swiper.params.parallax.enabled) return;\n    setTranslate();\n  });\n  on('setTranslate', () => {\n    if (!swiper.params.parallax.enabled) return;\n    setTranslate();\n  });\n  on('setTransition', (_swiper, duration) => {\n    if (!swiper.params.parallax.enabled) return;\n    setTransition(duration);\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/parallax/parallax.js?"
      );
    },
    /*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
    "./node_modules/swiper/modules/scrollbar/scrollbar.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scrollbar)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n\n\n\n\nfunction Scrollbar(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let isTouched = false;\n  let timeout = null;\n  let dragTimeout = null;\n  let dragStartPos;\n  let dragSize;\n  let trackSize;\n  let divider;\n  extendParams({\n    scrollbar: {\n      el: null,\n      dragSize: 'auto',\n      hide: false,\n      draggable: false,\n      snapOnRelease: true,\n      lockClass: 'swiper-scrollbar-lock',\n      dragClass: 'swiper-scrollbar-drag'\n    }\n  });\n  swiper.scrollbar = {\n    el: null,\n    dragEl: null,\n    $el: null,\n    $dragEl: null\n  };\n  function setTranslate() {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    const {\n      scrollbar,\n      rtlTranslate: rtl,\n      progress\n    } = swiper;\n    const {\n      $dragEl,\n      $el\n    } = scrollbar;\n    const params = swiper.params.scrollbar;\n    let newSize = dragSize;\n    let newPos = (trackSize - dragSize) * progress;\n    if (rtl) {\n      newPos = -newPos;\n      if (newPos > 0) {\n        newSize = dragSize - newPos;\n        newPos = 0;\n      } else if (-newPos + dragSize > trackSize) {\n        newSize = trackSize + newPos;\n      }\n    } else if (newPos < 0) {\n      newSize = dragSize + newPos;\n      newPos = 0;\n    } else if (newPos + dragSize > trackSize) {\n      newSize = trackSize - newPos;\n    }\n    if (swiper.isHorizontal()) {\n      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);\n      $dragEl[0].style.width = `${newSize}px`;\n    } else {\n      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);\n      $dragEl[0].style.height = `${newSize}px`;\n    }\n    if (params.hide) {\n      clearTimeout(timeout);\n      $el[0].style.opacity = 1;\n      timeout = setTimeout(() => {\n        $el[0].style.opacity = 0;\n        $el.transition(400);\n      }, 1000);\n    }\n  }\n  function setTransition(duration) {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    swiper.scrollbar.$dragEl.transition(duration);\n  }\n  function updateSize() {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    const {\n      scrollbar\n    } = swiper;\n    const {\n      $dragEl,\n      $el\n    } = scrollbar;\n    $dragEl[0].style.width = '';\n    $dragEl[0].style.height = '';\n    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;\n    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));\n    if (swiper.params.scrollbar.dragSize === 'auto') {\n      dragSize = trackSize * divider;\n    } else {\n      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);\n    }\n    if (swiper.isHorizontal()) {\n      $dragEl[0].style.width = `${dragSize}px`;\n    } else {\n      $dragEl[0].style.height = `${dragSize}px`;\n    }\n    if (divider >= 1) {\n      $el[0].style.display = 'none';\n    } else {\n      $el[0].style.display = '';\n    }\n    if (swiper.params.scrollbar.hide) {\n      $el[0].style.opacity = 0;\n    }\n    if (swiper.params.watchOverflow && swiper.enabled) {\n      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);\n    }\n  }\n  function getPointerPosition(e) {\n    if (swiper.isHorizontal()) {\n      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;\n    }\n    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;\n  }\n  function setDragPosition(e) {\n    const {\n      scrollbar,\n      rtlTranslate: rtl\n    } = swiper;\n    const {\n      $el\n    } = scrollbar;\n    let positionRatio;\n    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);\n    positionRatio = Math.max(Math.min(positionRatio, 1), 0);\n    if (rtl) {\n      positionRatio = 1 - positionRatio;\n    }\n    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;\n    swiper.updateProgress(position);\n    swiper.setTranslate(position);\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n  function onDragStart(e) {\n    const params = swiper.params.scrollbar;\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el,\n      $dragEl\n    } = scrollbar;\n    isTouched = true;\n    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;\n    e.preventDefault();\n    e.stopPropagation();\n    $wrapperEl.transition(100);\n    $dragEl.transition(100);\n    setDragPosition(e);\n    clearTimeout(dragTimeout);\n    $el.transition(0);\n    if (params.hide) {\n      $el.css('opacity', 1);\n    }\n    if (swiper.params.cssMode) {\n      swiper.$wrapperEl.css('scroll-snap-type', 'none');\n    }\n    emit('scrollbarDragStart', e);\n  }\n  function onDragMove(e) {\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el,\n      $dragEl\n    } = scrollbar;\n    if (!isTouched) return;\n    if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n    setDragPosition(e);\n    $wrapperEl.transition(0);\n    $el.transition(0);\n    $dragEl.transition(0);\n    emit('scrollbarDragMove', e);\n  }\n  function onDragEnd(e) {\n    const params = swiper.params.scrollbar;\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el\n    } = scrollbar;\n    if (!isTouched) return;\n    isTouched = false;\n    if (swiper.params.cssMode) {\n      swiper.$wrapperEl.css('scroll-snap-type', '');\n      $wrapperEl.transition('');\n    }\n    if (params.hide) {\n      clearTimeout(dragTimeout);\n      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n        $el.css('opacity', 0);\n        $el.transition(400);\n      }, 1000);\n    }\n    emit('scrollbarDragEnd', e);\n    if (params.snapOnRelease) {\n      swiper.slideToClosest();\n    }\n  }\n  function events(method) {\n    const {\n      scrollbar,\n      touchEventsTouch,\n      touchEventsDesktop,\n      params,\n      support\n    } = swiper;\n    const $el = scrollbar.$el;\n    const target = $el[0];\n    const activeListener = support.passiveListener && params.passiveListeners ? {\n      passive: false,\n      capture: false\n    } : false;\n    const passiveListener = support.passiveListener && params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    if (!target) return;\n    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';\n    if (!support.touch) {\n      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);\n      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);\n      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);\n    } else {\n      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);\n      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);\n      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);\n    }\n  }\n  function enableDraggable() {\n    if (!swiper.params.scrollbar.el) return;\n    events('on');\n  }\n  function disableDraggable() {\n    if (!swiper.params.scrollbar.el) return;\n    events('off');\n  }\n  function init() {\n    const {\n      scrollbar,\n      $el: $swiperEl\n    } = swiper;\n    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {\n      el: 'swiper-scrollbar'\n    });\n    const params = swiper.params.scrollbar;\n    if (!params.el) return;\n    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el);\n    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {\n      $el = $swiperEl.find(params.el);\n    }\n    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);\n    if ($dragEl.length === 0) {\n      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`<div class=\"${swiper.params.scrollbar.dragClass}\"></div>`);\n      $el.append($dragEl);\n    }\n    Object.assign(scrollbar, {\n      $el,\n      el: $el[0],\n      $dragEl,\n      dragEl: $dragEl[0]\n    });\n    if (params.draggable) {\n      enableDraggable();\n    }\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);\n    }\n  }\n  function destroy() {\n    disableDraggable();\n  }\n  on('init', () => {\n    init();\n    updateSize();\n    setTranslate();\n  });\n  on('update resize observerUpdate lock unlock', () => {\n    updateSize();\n  });\n  on('setTranslate', () => {\n    setTranslate();\n  });\n  on('setTransition', (_s, duration) => {\n    setTransition(duration);\n  });\n  on('enable disable', () => {\n    const {\n      $el\n    } = swiper.scrollbar;\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);\n    }\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  Object.assign(swiper.scrollbar, {\n    updateSize,\n    setTranslate,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/scrollbar/scrollbar.js?"
      );
    },
    /*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
    "./node_modules/swiper/modules/thumbs/thumbs.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Thumb)\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Thumb(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    thumbs: {\n      swiper: null,\n      multipleActiveThumbs: true,\n      autoScrollOffset: 0,\n      slideThumbActiveClass: 'swiper-slide-thumb-active',\n      thumbsContainerClass: 'swiper-thumbs'\n    }\n  });\n  let initialized = false;\n  let swiperCreated = false;\n  swiper.thumbs = {\n    swiper: null\n  };\n  function onThumbClick() {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    const clickedIndex = thumbsSwiper.clickedIndex;\n    const clickedSlide = thumbsSwiper.clickedSlide;\n    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;\n    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;\n    let slideToIndex;\n    if (thumbsSwiper.params.loop) {\n      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);\n    } else {\n      slideToIndex = clickedIndex;\n    }\n    if (swiper.params.loop) {\n      let currentIndex = swiper.activeIndex;\n      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {\n        swiper.loopFix(); // eslint-disable-next-line\n\n        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n        currentIndex = swiper.activeIndex;\n      }\n      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index=\"${slideToIndex}\"]`).eq(0).index();\n      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index=\"${slideToIndex}\"]`).eq(0).index();\n      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;\n    }\n    swiper.slideTo(slideToIndex);\n  }\n  function init() {\n    const {\n      thumbs: thumbsParams\n    } = swiper.params;\n    if (initialized) return false;\n    initialized = true;\n    const SwiperClass = swiper.constructor;\n    if (thumbsParams.swiper instanceof SwiperClass) {\n      swiper.thumbs.swiper = thumbsParams.swiper;\n      Object.assign(swiper.thumbs.swiper.originalParams, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n      Object.assign(swiper.thumbs.swiper.params, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {\n      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);\n      Object.assign(thumbsSwiperParams, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);\n      swiperCreated = true;\n    }\n    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);\n    swiper.thumbs.swiper.on('tap', onThumbClick);\n    return true;\n  }\n  function update(initial) {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;\n    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;\n    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;\n    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {\n      let currentThumbsIndex = thumbsSwiper.activeIndex;\n      let newThumbsIndex;\n      let direction;\n      if (thumbsSwiper.params.loop) {\n        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {\n          thumbsSwiper.loopFix(); // eslint-disable-next-line\n\n          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;\n          currentThumbsIndex = thumbsSwiper.activeIndex;\n        } // Find actual thumbs index to slide to\n\n        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index=\"${swiper.realIndex}\"]`).eq(0).index();\n        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index=\"${swiper.realIndex}\"]`).eq(0).index();\n        if (typeof prevThumbsIndex === 'undefined') {\n          newThumbsIndex = nextThumbsIndex;\n        } else if (typeof nextThumbsIndex === 'undefined') {\n          newThumbsIndex = prevThumbsIndex;\n        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {\n          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;\n        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {\n          newThumbsIndex = nextThumbsIndex;\n        } else {\n          newThumbsIndex = prevThumbsIndex;\n        }\n        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';\n      } else {\n        newThumbsIndex = swiper.realIndex;\n        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';\n      }\n      if (useOffset) {\n        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;\n      }\n      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {\n        if (thumbsSwiper.params.centeredSlides) {\n          if (newThumbsIndex > currentThumbsIndex) {\n            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;\n          } else {\n            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;\n          }\n        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;\n        }\n        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);\n      }\n    } // Activate thumbs\n\n    let thumbsToActivate = 1;\n    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;\n    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {\n      thumbsToActivate = swiper.params.slidesPerView;\n    }\n    if (!swiper.params.thumbs.multipleActiveThumbs) {\n      thumbsToActivate = 1;\n    }\n    thumbsToActivate = Math.floor(thumbsToActivate);\n    thumbsSwiper.slides.removeClass(thumbActiveClass);\n    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {\n      for (let i = 0; i < thumbsToActivate; i += 1) {\n        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index=\"${swiper.realIndex + i}\"]`).addClass(thumbActiveClass);\n      }\n    } else {\n      for (let i = 0; i < thumbsToActivate; i += 1) {\n        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);\n      }\n    }\n  }\n  on('beforeInit', () => {\n    const {\n      thumbs\n    } = swiper.params;\n    if (!thumbs || !thumbs.swiper) return;\n    init();\n    update(true);\n  });\n  on('slideChange update resize observerUpdate', () => {\n    if (!swiper.thumbs.swiper) return;\n    update();\n  });\n  on('setTransition', (_s, duration) => {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    thumbsSwiper.setTransition(duration);\n  });\n  on('beforeDestroy', () => {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    if (swiperCreated && thumbsSwiper) {\n      thumbsSwiper.destroy();\n    }\n  });\n  Object.assign(swiper.thumbs, {\n    init,\n    update\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/thumbs/thumbs.js?"
      );
    },
    /*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
    "./node_modules/swiper/modules/virtual/virtual.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Virtual)\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\nfunction Virtual(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  extendParams({\n    virtual: {\n      enabled: false,\n      slides: [],\n      cache: true,\n      renderSlide: null,\n      renderExternal: null,\n      renderExternalUpdate: true,\n      addSlidesBefore: 0,\n      addSlidesAfter: 0\n    }\n  });\n  let cssModeTimeout;\n  swiper.virtual = {\n    cache: {},\n    from: undefined,\n    to: undefined,\n    slides: [],\n    offset: 0,\n    slidesGrid: []\n  };\n  function renderSlide(slide, index) {\n    const params = swiper.params.virtual;\n    if (params.cache && swiper.virtual.cache[index]) {\n      return swiper.virtual.cache[index];\n    }\n    const $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"${swiper.params.slideClass}\" data-swiper-slide-index=\"${index}\">${slide}</div>`);\n    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);\n    if (params.cache) swiper.virtual.cache[index] = $slideEl;\n    return $slideEl;\n  }\n  function update(force) {\n    const {\n      slidesPerView,\n      slidesPerGroup,\n      centeredSlides\n    } = swiper.params;\n    const {\n      addSlidesBefore,\n      addSlidesAfter\n    } = swiper.params.virtual;\n    const {\n      from: previousFrom,\n      to: previousTo,\n      slides,\n      slidesGrid: previousSlidesGrid,\n      offset: previousOffset\n    } = swiper.virtual;\n    if (!swiper.params.cssMode) {\n      swiper.updateActiveIndex();\n    }\n    const activeIndex = swiper.activeIndex || 0;\n    let offsetProp;\n    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';\n    let slidesAfter;\n    let slidesBefore;\n    if (centeredSlides) {\n      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;\n      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;\n    } else {\n      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;\n      slidesBefore = slidesPerGroup + addSlidesBefore;\n    }\n    const from = Math.max((activeIndex || 0) - slidesBefore, 0);\n    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);\n    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);\n    Object.assign(swiper.virtual, {\n      from,\n      to,\n      offset,\n      slidesGrid: swiper.slidesGrid\n    });\n    function onRendered() {\n      swiper.updateSlides();\n      swiper.updateProgress();\n      swiper.updateSlidesClasses();\n      if (swiper.lazy && swiper.params.lazy.enabled) {\n        swiper.lazy.load();\n      }\n      emit('virtualUpdate');\n    }\n    if (previousFrom === from && previousTo === to && !force) {\n      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {\n        swiper.slides.css(offsetProp, `${offset}px`);\n      }\n      swiper.updateProgress();\n      emit('virtualUpdate');\n      return;\n    }\n    if (swiper.params.virtual.renderExternal) {\n      swiper.params.virtual.renderExternal.call(swiper, {\n        offset,\n        from,\n        to,\n        slides: function getSlides() {\n          const slidesToRender = [];\n          for (let i = from; i <= to; i += 1) {\n            slidesToRender.push(slides[i]);\n          }\n          return slidesToRender;\n        }()\n      });\n      if (swiper.params.virtual.renderExternalUpdate) {\n        onRendered();\n      } else {\n        emit('virtualUpdate');\n      }\n      return;\n    }\n    const prependIndexes = [];\n    const appendIndexes = [];\n    if (force) {\n      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();\n    } else {\n      for (let i = previousFrom; i <= previousTo; i += 1) {\n        if (i < from || i > to) {\n          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index=\"${i}\"]`).remove();\n        }\n      }\n    }\n    for (let i = 0; i < slides.length; i += 1) {\n      if (i >= from && i <= to) {\n        if (typeof previousTo === 'undefined' || force) {\n          appendIndexes.push(i);\n        } else {\n          if (i > previousTo) appendIndexes.push(i);\n          if (i < previousFrom) prependIndexes.push(i);\n        }\n      }\n    }\n    appendIndexes.forEach(index => {\n      swiper.$wrapperEl.append(renderSlide(slides[index], index));\n    });\n    prependIndexes.sort((a, b) => b - a).forEach(index => {\n      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));\n    });\n    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);\n    onRendered();\n  }\n  function appendSlide(slides) {\n    if (typeof slides === 'object' && 'length' in slides) {\n      for (let i = 0; i < slides.length; i += 1) {\n        if (slides[i]) swiper.virtual.slides.push(slides[i]);\n      }\n    } else {\n      swiper.virtual.slides.push(slides);\n    }\n    update(true);\n  }\n  function prependSlide(slides) {\n    const activeIndex = swiper.activeIndex;\n    let newActiveIndex = activeIndex + 1;\n    let numberOfNewSlides = 1;\n    if (Array.isArray(slides)) {\n      for (let i = 0; i < slides.length; i += 1) {\n        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);\n      }\n      newActiveIndex = activeIndex + slides.length;\n      numberOfNewSlides = slides.length;\n    } else {\n      swiper.virtual.slides.unshift(slides);\n    }\n    if (swiper.params.virtual.cache) {\n      const cache = swiper.virtual.cache;\n      const newCache = {};\n      Object.keys(cache).forEach(cachedIndex => {\n        const $cachedEl = cache[cachedIndex];\n        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');\n        if (cachedElIndex) {\n          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);\n        }\n        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;\n      });\n      swiper.virtual.cache = newCache;\n    }\n    update(true);\n    swiper.slideTo(newActiveIndex, 0);\n  }\n  function removeSlide(slidesIndexes) {\n    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;\n    let activeIndex = swiper.activeIndex;\n    if (Array.isArray(slidesIndexes)) {\n      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {\n        swiper.virtual.slides.splice(slidesIndexes[i], 1);\n        if (swiper.params.virtual.cache) {\n          delete swiper.virtual.cache[slidesIndexes[i]];\n        }\n        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;\n        activeIndex = Math.max(activeIndex, 0);\n      }\n    } else {\n      swiper.virtual.slides.splice(slidesIndexes, 1);\n      if (swiper.params.virtual.cache) {\n        delete swiper.virtual.cache[slidesIndexes];\n      }\n      if (slidesIndexes < activeIndex) activeIndex -= 1;\n      activeIndex = Math.max(activeIndex, 0);\n    }\n    update(true);\n    swiper.slideTo(activeIndex, 0);\n  }\n  function removeAllSlides() {\n    swiper.virtual.slides = [];\n    if (swiper.params.virtual.cache) {\n      swiper.virtual.cache = {};\n    }\n    update(true);\n    swiper.slideTo(0, 0);\n  }\n  on('beforeInit', () => {\n    if (!swiper.params.virtual.enabled) return;\n    swiper.virtual.slides = swiper.params.virtual.slides;\n    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);\n    swiper.params.watchSlidesProgress = true;\n    swiper.originalParams.watchSlidesProgress = true;\n    if (!swiper.params.initialSlide) {\n      update();\n    }\n  });\n  on('setTranslate', () => {\n    if (!swiper.params.virtual.enabled) return;\n    if (swiper.params.cssMode && !swiper._immediateVirtual) {\n      clearTimeout(cssModeTimeout);\n      cssModeTimeout = setTimeout(() => {\n        update();\n      }, 100);\n    } else {\n      update();\n    }\n  });\n  on('init update resize', () => {\n    if (!swiper.params.virtual.enabled) return;\n    if (swiper.params.cssMode) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);\n    }\n  });\n  Object.assign(swiper.virtual, {\n    appendSlide,\n    prependSlide,\n    removeSlide,\n    removeAllSlides,\n    update\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/virtual/virtual.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
    "./node_modules/swiper/modules/zoom/zoom.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Zoom)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n\nfunction Zoom(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    zoom: {\n      enabled: false,\n      maxRatio: 3,\n      minRatio: 1,\n      toggle: true,\n      containerClass: 'swiper-zoom-container',\n      zoomedSlideClass: 'swiper-slide-zoomed'\n    }\n  });\n  swiper.zoom = {\n    enabled: false\n  };\n  let currentScale = 1;\n  let isScaling = false;\n  let gesturesEnabled;\n  let fakeGestureTouched;\n  let fakeGestureMoved;\n  const gesture = {\n    $slideEl: undefined,\n    slideWidth: undefined,\n    slideHeight: undefined,\n    $imageEl: undefined,\n    $imageWrapEl: undefined,\n    maxRatio: 3\n  };\n  const image = {\n    isTouched: undefined,\n    isMoved: undefined,\n    currentX: undefined,\n    currentY: undefined,\n    minX: undefined,\n    minY: undefined,\n    maxX: undefined,\n    maxY: undefined,\n    width: undefined,\n    height: undefined,\n    startX: undefined,\n    startY: undefined,\n    touchesStart: {},\n    touchesCurrent: {}\n  };\n  const velocity = {\n    x: undefined,\n    y: undefined,\n    prevPositionX: undefined,\n    prevPositionY: undefined,\n    prevTime: undefined\n  };\n  let scale = 1;\n  Object.defineProperty(swiper.zoom, 'scale', {\n    get() {\n      return scale;\n    },\n    set(value) {\n      if (scale !== value) {\n        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;\n        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;\n        emit('zoomChange', value, imageEl, slideEl);\n      }\n      scale = value;\n    }\n  });\n  function getDistanceBetweenTouches(e) {\n    if (e.targetTouches.length < 2) return 1;\n    const x1 = e.targetTouches[0].pageX;\n    const y1 = e.targetTouches[0].pageY;\n    const x2 = e.targetTouches[1].pageX;\n    const y2 = e.targetTouches[1].pageY;\n    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);\n    return distance;\n  } // Events\n\n  function onGestureStart(e) {\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    fakeGestureTouched = false;\n    fakeGestureMoved = false;\n    if (!support.gestures) {\n      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {\n        return;\n      }\n      fakeGestureTouched = true;\n      gesture.scaleStart = getDistanceBetweenTouches(e);\n    }\n    if (!gesture.$slideEl || !gesture.$slideEl.length) {\n      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).closest(`.${swiper.params.slideClass}`);\n      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n      if (gesture.$imageWrapEl.length === 0) {\n        gesture.$imageEl = undefined;\n        return;\n      }\n    }\n    if (gesture.$imageEl) {\n      gesture.$imageEl.transition(0);\n    }\n    isScaling = true;\n  }\n  function onGestureChange(e) {\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    const zoom = swiper.zoom;\n    if (!support.gestures) {\n      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {\n        return;\n      }\n      fakeGestureMoved = true;\n      gesture.scaleMove = getDistanceBetweenTouches(e);\n    }\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {\n      if (e.type === 'gesturechange') onGestureStart(e);\n      return;\n    }\n    if (support.gestures) {\n      zoom.scale = e.scale * currentScale;\n    } else {\n      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;\n    }\n    if (zoom.scale > gesture.maxRatio) {\n      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;\n    }\n    if (zoom.scale < params.minRatio) {\n      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;\n    }\n    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n  }\n  function onGestureEnd(e) {\n    const device = swiper.device;\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    const zoom = swiper.zoom;\n    if (!support.gestures) {\n      if (!fakeGestureTouched || !fakeGestureMoved) {\n        return;\n      }\n      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {\n        return;\n      }\n      fakeGestureTouched = false;\n      fakeGestureMoved = false;\n    }\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);\n    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n    currentScale = zoom.scale;\n    isScaling = false;\n    if (zoom.scale === 1) gesture.$slideEl = undefined;\n  }\n  function onTouchStart(e) {\n    const device = swiper.device;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    if (image.isTouched) return;\n    if (device.android && e.cancelable) e.preventDefault();\n    image.isTouched = true;\n    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;\n    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;\n  }\n  function onTouchMove(e) {\n    const zoom = swiper.zoom;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    swiper.allowClick = false;\n    if (!image.isTouched || !gesture.$slideEl) return;\n    if (!image.isMoved) {\n      image.width = gesture.$imageEl[0].offsetWidth;\n      image.height = gesture.$imageEl[0].offsetHeight;\n      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;\n      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;\n      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;\n      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;\n      gesture.$imageWrapEl.transition(0);\n    } // Define if we need image drag\n\n    const scaledWidth = image.width * zoom.scale;\n    const scaledHeight = image.height * zoom.scale;\n    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;\n    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);\n    image.maxX = -image.minX;\n    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);\n    image.maxY = -image.minY;\n    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;\n    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;\n    if (!image.isMoved && !isScaling) {\n      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {\n        image.isTouched = false;\n        return;\n      }\n      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {\n        image.isTouched = false;\n        return;\n      }\n    }\n    if (e.cancelable) {\n      e.preventDefault();\n    }\n    e.stopPropagation();\n    image.isMoved = true;\n    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;\n    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;\n    if (image.currentX < image.minX) {\n      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;\n    }\n    if (image.currentX > image.maxX) {\n      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;\n    }\n    if (image.currentY < image.minY) {\n      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;\n    }\n    if (image.currentY > image.maxY) {\n      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;\n    } // Velocity\n\n    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;\n    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;\n    if (!velocity.prevTime) velocity.prevTime = Date.now();\n    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;\n    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;\n    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;\n    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;\n    velocity.prevPositionX = image.touchesCurrent.x;\n    velocity.prevPositionY = image.touchesCurrent.y;\n    velocity.prevTime = Date.now();\n    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);\n  }\n  function onTouchEnd() {\n    const zoom = swiper.zoom;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    if (!image.isTouched || !image.isMoved) {\n      image.isTouched = false;\n      image.isMoved = false;\n      return;\n    }\n    image.isTouched = false;\n    image.isMoved = false;\n    let momentumDurationX = 300;\n    let momentumDurationY = 300;\n    const momentumDistanceX = velocity.x * momentumDurationX;\n    const newPositionX = image.currentX + momentumDistanceX;\n    const momentumDistanceY = velocity.y * momentumDurationY;\n    const newPositionY = image.currentY + momentumDistanceY; // Fix duration\n\n    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);\n    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);\n    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);\n    image.currentX = newPositionX;\n    image.currentY = newPositionY; // Define if we need image drag\n\n    const scaledWidth = image.width * zoom.scale;\n    const scaledHeight = image.height * zoom.scale;\n    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);\n    image.maxX = -image.minX;\n    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);\n    image.maxY = -image.minY;\n    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);\n    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);\n    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);\n  }\n  function onTransitionEnd() {\n    const zoom = swiper.zoom;\n    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {\n      if (gesture.$imageEl) {\n        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');\n      }\n      if (gesture.$imageWrapEl) {\n        gesture.$imageWrapEl.transform('translate3d(0,0,0)');\n      }\n      zoom.scale = 1;\n      currentScale = 1;\n      gesture.$slideEl = undefined;\n      gesture.$imageEl = undefined;\n      gesture.$imageWrapEl = undefined;\n    }\n  }\n  function zoomIn(e) {\n    const zoom = swiper.zoom;\n    const params = swiper.params.zoom;\n    if (!gesture.$slideEl) {\n      if (e && e.target) {\n        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).closest(`.${swiper.params.slideClass}`);\n      }\n      if (!gesture.$slideEl) {\n        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {\n          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);\n        } else {\n          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n        }\n      }\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n    }\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.style.overflow = 'hidden';\n      swiper.wrapperEl.style.touchAction = 'none';\n    }\n    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);\n    let touchX;\n    let touchY;\n    let offsetX;\n    let offsetY;\n    let diffX;\n    let diffY;\n    let translateX;\n    let translateY;\n    let imageWidth;\n    let imageHeight;\n    let scaledWidth;\n    let scaledHeight;\n    let translateMinX;\n    let translateMinY;\n    let translateMaxX;\n    let translateMaxY;\n    let slideWidth;\n    let slideHeight;\n    if (typeof image.touchesStart.x === 'undefined' && e) {\n      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;\n      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;\n    } else {\n      touchX = image.touchesStart.x;\n      touchY = image.touchesStart.y;\n    }\n    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n    if (e) {\n      slideWidth = gesture.$slideEl[0].offsetWidth;\n      slideHeight = gesture.$slideEl[0].offsetHeight;\n      offsetX = gesture.$slideEl.offset().left + window.scrollX;\n      offsetY = gesture.$slideEl.offset().top + window.scrollY;\n      diffX = offsetX + slideWidth / 2 - touchX;\n      diffY = offsetY + slideHeight / 2 - touchY;\n      imageWidth = gesture.$imageEl[0].offsetWidth;\n      imageHeight = gesture.$imageEl[0].offsetHeight;\n      scaledWidth = imageWidth * zoom.scale;\n      scaledHeight = imageHeight * zoom.scale;\n      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);\n      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);\n      translateMaxX = -translateMinX;\n      translateMaxY = -translateMinY;\n      translateX = diffX * zoom.scale;\n      translateY = diffY * zoom.scale;\n      if (translateX < translateMinX) {\n        translateX = translateMinX;\n      }\n      if (translateX > translateMaxX) {\n        translateX = translateMaxX;\n      }\n      if (translateY < translateMinY) {\n        translateY = translateMinY;\n      }\n      if (translateY > translateMaxY) {\n        translateY = translateMaxY;\n      }\n    } else {\n      translateX = 0;\n      translateY = 0;\n    }\n    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);\n    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n  }\n  function zoomOut() {\n    const zoom = swiper.zoom;\n    const params = swiper.params.zoom;\n    if (!gesture.$slideEl) {\n      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {\n        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);\n      } else {\n        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n      }\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n    }\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.style.overflow = '';\n      swiper.wrapperEl.style.touchAction = '';\n    }\n    zoom.scale = 1;\n    currentScale = 1;\n    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');\n    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');\n    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);\n    gesture.$slideEl = undefined;\n  } // Toggle Zoom\n\n  function zoomToggle(e) {\n    const zoom = swiper.zoom;\n    if (zoom.scale && zoom.scale !== 1) {\n      // Zoom Out\n      zoomOut();\n    } else {\n      // Zoom In\n      zoomIn(e);\n    }\n  }\n  function getListeners() {\n    const support = swiper.support;\n    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    const activeListenerWithCapture = support.passiveListener ? {\n      passive: false,\n      capture: true\n    } : true;\n    return {\n      passiveListener,\n      activeListenerWithCapture\n    };\n  }\n  function getSlideSelector() {\n    return `.${swiper.params.slideClass}`;\n  }\n  function toggleGestures(method) {\n    const {\n      passiveListener\n    } = getListeners();\n    const slideSelector = getSlideSelector();\n    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);\n    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);\n    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);\n  }\n  function enableGestures() {\n    if (gesturesEnabled) return;\n    gesturesEnabled = true;\n    toggleGestures('on');\n  }\n  function disableGestures() {\n    if (!gesturesEnabled) return;\n    gesturesEnabled = false;\n    toggleGestures('off');\n  } // Attach/Detach Events\n\n  function enable() {\n    const zoom = swiper.zoom;\n    if (zoom.enabled) return;\n    zoom.enabled = true;\n    const support = swiper.support;\n    const {\n      passiveListener,\n      activeListenerWithCapture\n    } = getListeners();\n    const slideSelector = getSlideSelector(); // Scale image\n\n    if (support.gestures) {\n      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);\n      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);\n    } else if (swiper.touchEvents.start === 'touchstart') {\n      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);\n      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);\n      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);\n      if (swiper.touchEvents.cancel) {\n        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);\n      }\n    } // Move image\n\n    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);\n  }\n  function disable() {\n    const zoom = swiper.zoom;\n    if (!zoom.enabled) return;\n    const support = swiper.support;\n    zoom.enabled = false;\n    const {\n      passiveListener,\n      activeListenerWithCapture\n    } = getListeners();\n    const slideSelector = getSlideSelector(); // Scale image\n\n    if (support.gestures) {\n      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);\n      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);\n    } else if (swiper.touchEvents.start === 'touchstart') {\n      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);\n      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);\n      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);\n      if (swiper.touchEvents.cancel) {\n        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);\n      }\n    } // Move image\n\n    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);\n  }\n  on('init', () => {\n    if (swiper.params.zoom.enabled) {\n      enable();\n    }\n  });\n  on('destroy', () => {\n    disable();\n  });\n  on('touchStart', (_s, e) => {\n    if (!swiper.zoom.enabled) return;\n    onTouchStart(e);\n  });\n  on('touchEnd', (_s, e) => {\n    if (!swiper.zoom.enabled) return;\n    onTouchEnd(e);\n  });\n  on('doubleTap', (_s, e) => {\n    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {\n      zoomToggle(e);\n    }\n  });\n  on('transitionEnd', () => {\n    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {\n      onTransitionEnd();\n    }\n  });\n  on('slideChange', () => {\n    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {\n      onTransitionEnd();\n    }\n  });\n  Object.assign(swiper.zoom, {\n    enable,\n    disable,\n    in: zoomIn,\n    out: zoomOut,\n    toggle: zoomToggle\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/modules/zoom/zoom.js?"
      );
    },
    /*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
    "./node_modules/swiper/shared/classes-to-selector.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ classesToSelector)\n/* harmony export */ });\nfunction classesToSelector(classes) {\n  if (classes === void 0) {\n    classes = '';\n  }\n  return `.${classes.trim().replace(/([\\.:!\\/])/g, '\\\\$1') // eslint-disable-line\n  .replace(/ /g, '.')}`;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/classes-to-selector.js?"
      );
    },
    /*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
    "./node_modules/swiper/shared/create-element-if-not-defined.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ createElementIfNotDefined)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");\n\nfunction createElementIfNotDefined(swiper, originalParams, params, checkProps) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  if (swiper.params.createElements) {\n    Object.keys(checkProps).forEach(key => {\n      if (!params[key] && params.auto === true) {\n        let element = swiper.$el.children(`.${checkProps[key]}`)[0];\n        if (!element) {\n          element = document.createElement(\'div\');\n          element.className = checkProps[key];\n          swiper.$el.append(element);\n        }\n        params[key] = element;\n        originalParams[key] = element;\n      }\n    });\n  }\n  return params;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/create-element-if-not-defined.js?'
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
    "./node_modules/swiper/shared/create-shadow.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ createShadow)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/swiper/shared/dom.js");\n\nfunction createShadow(params, $slideEl, side) {\n  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : \'\'}`;\n  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;\n  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);\n  if (!$shadowEl.length) {\n    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow${side ? `-${side}` : \'\'}"></div>`);\n    $shadowContainer.append($shadowEl);\n  }\n  return $shadowEl;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/create-shadow.js?'
      );
    },
    /*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
    "./node_modules/swiper/shared/dom.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");\n\nconst Methods = {\n  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,\n  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,\n  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,\n  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,\n  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,\n  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,\n  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,\n  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,\n  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,\n  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,\n  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,\n  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,\n  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,\n  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,\n  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,\n  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,\n  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,\n  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,\n  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,\n  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,\n  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,\n  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,\n  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,\n  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,\n  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,\n  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,\n  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,\n  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,\n  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,\n  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,\n  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,\n  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,\n  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,\n  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,\n  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,\n  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove\n};\nObject.keys(Methods).forEach(methodName => {\n  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {\n    value: Methods[methodName],\n    writable: true\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/dom.js?'
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
    "./node_modules/swiper/shared/effect-init.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ effectInit)\n/* harmony export */ });\nfunction effectInit(params) {\n  const {\n    effect,\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    overwriteParams,\n    perspective\n  } = params;\n  on('beforeInit', () => {\n    if (swiper.params.effect !== effect) return;\n    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);\n    if (perspective && perspective()) {\n      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);\n    }\n    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};\n    Object.assign(swiper.params, overwriteParamsResult);\n    Object.assign(swiper.originalParams, overwriteParamsResult);\n  });\n  on('setTranslate', () => {\n    if (swiper.params.effect !== effect) return;\n    setTranslate();\n  });\n  on('setTransition', (_s, duration) => {\n    if (swiper.params.effect !== effect) return;\n    setTransition(duration);\n  });\n  let requireUpdateOnVirtual;\n  on('virtualUpdate', () => {\n    if (!swiper.slides.length) {\n      requireUpdateOnVirtual = true;\n    }\n    requestAnimationFrame(() => {\n      if (requireUpdateOnVirtual && swiper.slides.length) {\n        setTranslate();\n        requireUpdateOnVirtual = false;\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/effect-init.js?"
      );
    },
    /*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
    "./node_modules/swiper/shared/effect-target.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ effectTarget)\n/* harmony export */ });\nfunction effectTarget(effectParams, $slideEl) {\n  if (effectParams.transformEl) {\n    return $slideEl.find(effectParams.transformEl).css({\n      'backface-visibility': 'hidden',\n      '-webkit-backface-visibility': 'hidden'\n    });\n  }\n  return $slideEl;\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/effect-target.js?"
      );
    },
    /*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
    "./node_modules/swiper/shared/effect-virtual-transition-end.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ effectVirtualTransitionEnd)\n/* harmony export */ });\nfunction effectVirtualTransitionEnd(_ref) {\n  let {\n    swiper,\n    duration,\n    transformEl,\n    allSlides\n  } = _ref;\n  const {\n    slides,\n    activeIndex,\n    $wrapperEl\n  } = swiper;\n  if (swiper.params.virtualTranslate && duration !== 0) {\n    let eventTriggered = false;\n    let $transitionEndTarget;\n    if (allSlides) {\n      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;\n    } else {\n      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);\n    }\n    $transitionEndTarget.transitionEnd(() => {\n      if (eventTriggered) return;\n      if (!swiper || swiper.destroyed) return;\n      eventTriggered = true;\n      swiper.animating = false;\n      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];\n      for (let i = 0; i < triggerEvents.length; i += 1) {\n        $wrapperEl.trigger(triggerEvents[i]);\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/effect-virtual-transition-end.js?"
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
    "./node_modules/swiper/shared/get-browser.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBrowser\": () => (/* binding */ getBrowser)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nlet browser;\nfunction calcBrowser() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  function isSafari() {\n    const ua = window.navigator.userAgent.toLowerCase();\n    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;\n  }\n  return {\n    isSafari: isSafari(),\n    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)\n  };\n}\nfunction getBrowser() {\n  if (!browser) {\n    browser = calcBrowser();\n  }\n  return browser;\n}\n\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/get-browser.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
    "./node_modules/swiper/shared/get-device.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDevice\": () => (/* binding */ getDevice)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ \"./node_modules/swiper/shared/get-support.js\");\n\n\nlet deviceCached;\nfunction calcDevice(_temp) {\n  let {\n    userAgent\n  } = _temp === void 0 ? {} : _temp;\n  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const platform = window.navigator.platform;\n  const ua = userAgent || window.navigator.userAgent;\n  const device = {\n    ios: false,\n    android: false\n  };\n  const screenWidth = window.screen.width;\n  const screenHeight = window.screen.height;\n  const android = ua.match(/(Android);?[\\s\\/]+([\\d.]+)?/); // eslint-disable-line\n\n  let ipad = ua.match(/(iPad).*OS\\s([\\d_]+)/);\n  const ipod = ua.match(/(iPod)(.*OS\\s([\\d_]+))?/);\n  const iphone = !ipad && ua.match(/(iPhone\\sOS|iOS)\\s([\\d_]+)/);\n  const windows = platform === 'Win32';\n  let macos = platform === 'MacIntel'; // iPadOs 13 fix\n\n  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];\n  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {\n    ipad = ua.match(/(Version)\\/([\\d.]+)/);\n    if (!ipad) ipad = [0, 1, '13_0_0'];\n    macos = false;\n  } // Android\n\n  if (android && !windows) {\n    device.os = 'android';\n    device.android = true;\n  }\n  if (ipad || iphone || ipod) {\n    device.os = 'ios';\n    device.ios = true;\n  } // Export object\n\n  return device;\n}\nfunction getDevice(overrides) {\n  if (overrides === void 0) {\n    overrides = {};\n  }\n  if (!deviceCached) {\n    deviceCached = calcDevice(overrides);\n  }\n  return deviceCached;\n}\n\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/get-device.js?"
      );
    },
    /*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
    "./node_modules/swiper/shared/get-support.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSupport\": () => (/* binding */ getSupport)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nlet support;\nfunction calcSupport() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  return {\n    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,\n    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),\n    passiveListener: function checkPassiveListener() {\n      let supportsPassive = false;\n      try {\n        const opts = Object.defineProperty({}, 'passive', {\n          // eslint-disable-next-line\n          get() {\n            supportsPassive = true;\n          }\n        });\n        window.addEventListener('testPassiveListener', null, opts);\n      } catch (e) {// No support\n      }\n      return supportsPassive;\n    }(),\n    gestures: function checkGestures() {\n      return 'ongesturestart' in window;\n    }()\n  };\n}\nfunction getSupport() {\n  if (!support) {\n    support = calcSupport();\n  }\n  return support;\n}\n\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/get-support.js?"
      );
    },
    /*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
    "./node_modules/swiper/shared/utils.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateCSSModeScroll\": () => (/* binding */ animateCSSModeScroll),\n/* harmony export */   \"deleteProps\": () => (/* binding */ deleteProps),\n/* harmony export */   \"extend\": () => (/* binding */ extend),\n/* harmony export */   \"getComputedStyle\": () => (/* binding */ getComputedStyle),\n/* harmony export */   \"getTranslate\": () => (/* binding */ getTranslate),\n/* harmony export */   \"isObject\": () => (/* binding */ isObject),\n/* harmony export */   \"nextTick\": () => (/* binding */ nextTick),\n/* harmony export */   \"now\": () => (/* binding */ now),\n/* harmony export */   \"setCSSProperty\": () => (/* binding */ setCSSProperty)\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction deleteProps(obj) {\n  const object = obj;\n  Object.keys(object).forEach(key => {\n    try {\n      object[key] = null;\n    } catch (e) {// no getter for object\n    }\n    try {\n      delete object[key];\n    } catch (e) {// something got wrong\n    }\n  });\n}\nfunction nextTick(callback, delay) {\n  if (delay === void 0) {\n    delay = 0;\n  }\n  return setTimeout(callback, delay);\n}\nfunction now() {\n  return Date.now();\n}\nfunction getComputedStyle(el) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let style;\n  if (window.getComputedStyle) {\n    style = window.getComputedStyle(el, null);\n  }\n  if (!style && el.currentStyle) {\n    style = el.currentStyle;\n  }\n  if (!style) {\n    style = el.style;\n  }\n  return style;\n}\nfunction getTranslate(el, axis) {\n  if (axis === void 0) {\n    axis = 'x';\n  }\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let matrix;\n  let curTransform;\n  let transformMatrix;\n  const curStyle = getComputedStyle(el, null);\n  if (window.WebKitCSSMatrix) {\n    curTransform = curStyle.transform || curStyle.webkitTransform;\n    if (curTransform.split(',').length > 6) {\n      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');\n    } // Some old versions of Webkit choke when 'none' is passed; pass\n    // empty string instead in this case\n\n    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);\n  } else {\n    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');\n    matrix = transformMatrix.toString().split(',');\n  }\n  if (axis === 'x') {\n    // Latest Chrome and webkits Fix\n    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix\n    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers\n    else curTransform = parseFloat(matrix[4]);\n  }\n  if (axis === 'y') {\n    // Latest Chrome and webkits Fix\n    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix\n    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers\n    else curTransform = parseFloat(matrix[5]);\n  }\n  return curTransform || 0;\n}\nfunction isObject(o) {\n  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';\n}\nfunction isNode(node) {\n  // eslint-disable-next-line\n  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {\n    return node instanceof HTMLElement;\n  }\n  return node && (node.nodeType === 1 || node.nodeType === 11);\n}\nfunction extend() {\n  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);\n  const noExtend = ['__proto__', 'constructor', 'prototype'];\n  for (let i = 1; i < arguments.length; i += 1) {\n    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];\n    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {\n      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);\n      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {\n        const nextKey = keysArray[nextIndex];\n        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);\n        if (desc !== undefined && desc.enumerable) {\n          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {\n            if (nextSource[nextKey].__swiper__) {\n              to[nextKey] = nextSource[nextKey];\n            } else {\n              extend(to[nextKey], nextSource[nextKey]);\n            }\n          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {\n            to[nextKey] = {};\n            if (nextSource[nextKey].__swiper__) {\n              to[nextKey] = nextSource[nextKey];\n            } else {\n              extend(to[nextKey], nextSource[nextKey]);\n            }\n          } else {\n            to[nextKey] = nextSource[nextKey];\n          }\n        }\n      }\n    }\n  }\n  return to;\n}\nfunction setCSSProperty(el, varName, varValue) {\n  el.style.setProperty(varName, varValue);\n}\nfunction animateCSSModeScroll(_ref) {\n  let {\n    swiper,\n    targetPosition,\n    side\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const startPosition = -swiper.translate;\n  let startTime = null;\n  let time;\n  const duration = swiper.params.speed;\n  swiper.wrapperEl.style.scrollSnapType = 'none';\n  window.cancelAnimationFrame(swiper.cssModeFrameID);\n  const dir = targetPosition > startPosition ? 'next' : 'prev';\n  const isOutOfBound = (current, target) => {\n    return dir === 'next' && current >= target || dir === 'prev' && current <= target;\n  };\n  const animate = () => {\n    time = new Date().getTime();\n    if (startTime === null) {\n      startTime = time;\n    }\n    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);\n    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;\n    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);\n    if (isOutOfBound(currentPosition, targetPosition)) {\n      currentPosition = targetPosition;\n    }\n    swiper.wrapperEl.scrollTo({\n      [side]: currentPosition\n    });\n    if (isOutOfBound(currentPosition, targetPosition)) {\n      swiper.wrapperEl.style.overflow = 'hidden';\n      swiper.wrapperEl.style.scrollSnapType = '';\n      setTimeout(() => {\n        swiper.wrapperEl.style.overflow = '';\n        swiper.wrapperEl.scrollTo({\n          [side]: currentPosition\n        });\n      });\n      window.cancelAnimationFrame(swiper.cssModeFrameID);\n      return;\n    }\n    swiper.cssModeFrameID = window.requestAnimationFrame(animate);\n  };\n  animate();\n}\n\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/shared/utils.js?"
      );
    },
    /*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.esm.js ***!
  \**************************************************/
    "./node_modules/swiper/swiper-bundle.esm.js": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Swiper": () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]),\n/* harmony export */   "default": () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])\n/* harmony export */ });\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");\n/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");\n/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");\n/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");\n/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");\n/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");\n/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");\n/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");\n/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");\n/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "./node_modules/swiper/modules/lazy/lazy.js");\n/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");\n/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");\n/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");\n/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");\n/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");\n/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");\n/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");\n/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");\n/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");\n/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");\n/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");\n/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");\n/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");\n/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");\n/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");\n/**\n * Swiper 8.0.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: March 4, 2022\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Swiper Class\nconst modules = [_modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"], _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__["default"], _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__["default"], _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__["default"], _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__["default"], _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__["default"], _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__["default"], _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__["default"], _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__["default"], _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__["default"], _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__["default"]];\n_core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(modules);\n\n//# sourceURL=webpack://united-group/./node_modules/swiper/swiper-bundle.esm.js?'
      );
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    return module.exports;
  }
  (() => {
    __webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter,
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", {
        value: !0,
      });
    };
  })();
  var __webpack_exports__ = __webpack_require__("./src/scripts/theme.js");
})();
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(window, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {},
    };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = !1;
        this.didScroll = !1;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop(),
        };
        this.waypoints = {
          horizontal: {},
          vertical: {},
        };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = !0;
            t = function () {
              e.doScroll();
              return (e.didScroll = !1);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = !0;
            t = function () {
              n[m]("refresh");
              return (e.didResize = !1);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i;
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = !1);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = !0);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = t[w];
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        e = n.extend({}, n.fn[g].defaults, e);
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke.call(this, "disable");
      },
      enable: function () {
        return d._invoke.call(this, "enable");
      },
      destroy: function () {
        return d._invoke.call(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t) {
        this.each(function () {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function (e, n) {
            n[t]();
            return !0;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: !0,
      enabled: !0,
      horizontal: !1,
      offset: 0,
      triggerOnce: !1,
    };
    h = {
      refresh: function () {
        return n.each(c, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = {
          horizontal: [],
          vertical: [],
        };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return !0;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30,
    };
    return i.on("load.waypoints", function () {
      return n[m]("refresh");
    });
  });
}).call(this);
(() => {
  "use strict";
  var t = {
      d: (e, s) => {
        for (var i in s)
          t.o(s, i) &&
            !t.o(e, i) &&
            Object.defineProperty(e, i, {
              enumerable: !0,
              get: s[i],
            });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      },
    },
    e = {};
  function s(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, s) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, s);
        }),
        t
      );
    };
    this.tree = e();
    const s =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, i] of this.formData) {
      const o = t.match(s);
      if (o)
        if ("" === o.groups.array) this.tree.set(o.groups.name, i);
        else {
          const t = [
            ...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(o.groups.name);
          const s = t.pop();
          t.reduce((t, s) => {
            if (
              (/^[0-9]+$/.test(s) && (s = parseInt(s)), t.get(s) instanceof Map)
            )
              return t.get(s);
            const i = e();
            return t.set(s, i), i;
          }, this.tree).set(s, i);
        }
    }
  }
  t.r(e),
    t.d(e, {
      date: () => d,
      email: () => r,
      file: () => m,
      maxdate: () => x,
      maxfilesize: () => w,
      maxlength: () => h,
      maxnumber: () => v,
      mindate: () => g,
      minlength: () => f,
      minnumber: () => u,
      number: () => c,
      required: () => n,
      requiredfile: () => a,
      tel: () => l,
      url: () => p,
    }),
    (s.prototype.entries = function () {
      return this.tree.entries();
    }),
    (s.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (s.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const s = [];
        if (t instanceof Map) for (const [i, o] of t) s.push(...e(o));
        else "" !== t && s.push(t);
        return s;
      };
      return e(this.get(t));
    }),
    (s.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (s.prototype.keys = function () {
      return this.tree.keys();
    }),
    (s.prototype.values = function () {
      return this.tree.values();
    });
  const i = s;
  function o({ rule: t, field: e, error: s, ...i }) {
    (this.rule = t), (this.field = e), (this.error = s), (this.properties = i);
  }
  const n = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, s] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(s)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s)) return !1;
          const i = s.split(".");
          if (i.length < 2) return !1;
          for (const t of i) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new o(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    d = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))
      )
        throw new o(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      s = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (s) {
                      const t = s.groups.toplevel.toLowerCase(),
                        i = s.groups.sub.toLowerCase();
                      for (const [o, n] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === i && n.startsWith(t + "/")) || n === s[0]) &&
                          e.push(...o.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new o(this);
    },
    f = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        0 !== s && s < parseInt(this.threshold))
      )
        throw new o(this);
    },
    h = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    },
    u = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new o(this);
    },
    v = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new o(this);
    },
    g = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new o(this);
    },
    x = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new o(this);
    },
    w = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    };
  var b;
  window.swv = {
    validators: e,
    validate: (t, s, n = {}) => {
      const a = (t.rules ?? []).filter(
        ({ rule: t, ...s }) =>
          "function" == typeof e[t] &&
          ("function" != typeof e[t].matches || e[t].matches(s, n))
      );
      if (!a.length) return new Map();
      const r = new i(s);
      return a.reduce((t, s) => {
        const { rule: i, ...n } = s;
        if (t.get(n.field)?.error) return t;
        try {
          e[i].call(
            {
              rule: i,
              ...n,
            },
            r
          );
        } catch (e) {
          if (e instanceof o) return t.set(n.field, e);
        }
        return t.set(n.field, {});
      }, new Map());
    },
    ...(null !== (b = window.swv) && void 0 !== b ? b : {}),
  };
})();
var wpcf7 = {
  api: {
    root: "https://www.united.com.bd/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: "1",
};
(() => {
  "use strict";
  const e = (e) => Math.abs(parseInt(e, 10)),
    t = (e, t) => {
      const a = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      a.has(t) && (t = a.get(t)),
        Array.from(a.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      const r = e.getAttribute("data-status");
      return (
        (e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t && e.classList.remove(r),
        t
      );
    },
    a = (e, t, a) => {
      const r = new CustomEvent(`wpcf7${t}`, {
        bubbles: !0,
        detail: a,
      });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(r);
    },
    r = (e) => {
      const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
      return n.reduceRight(
        (e, t) => (a) => t(a, e),
        (e) => {
          let r,
            n,
            {
              url: o,
              path: c,
              endpoint: i,
              headers: s,
              body: l,
              data: d,
              ...u
            } = e;
          "string" == typeof i &&
            ((r = a.replace(/^\/|\/$/g, "")),
            (n = i.replace(/^\//, "")),
            (c = n ? r + "/" + n : r)),
            "string" == typeof c &&
              (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
              (c = c.replace(/^\//, "")),
              (o = t + c)),
            (s = {
              Accept: "application/json, */*;q=0.1",
              ...s,
            }),
            delete s["X-WP-Nonce"],
            d &&
              ((l = JSON.stringify(d)),
              (s["Content-Type"] = "application/json"));
          const p = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            f = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(o || c || window.location.href, {
              ...u,
              headers: s,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw f;
                      });
                    throw f;
                  }),
              () => {
                throw p;
              }
            );
        }
      )(e);
    },
    n = [];
  function o(e) {
    var a, r, n, o;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const l = e,
      d = null === (a = e.wpcf7) || void 0 === a ? void 0 : a.schema;
    if (void 0 === d) return;
    if (
      null === (r = s.target) ||
      void 0 === r ||
      !r.closest(".wpcf7-form-control-wrap[data-name]")
    )
      return;
    if (null !== (n = s.target) && void 0 !== n && n.closest(".novalidate"))
      return;
    const u = new FormData(),
      p = [];
    for (const e of l.querySelectorAll(".wpcf7-form-control-wrap"))
      if (
        !e.closest(".novalidate") &&
        (e
          .querySelectorAll(":where( input, textarea, select ):enabled")
          .forEach((e) => {
            if (e.name)
              switch (e.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                  break;
                case "checkbox":
                case "radio":
                  e.checked && u.append(e.name, e.value);
                  break;
                case "select-multiple":
                  for (const t of e.selectedOptions) u.append(e.name, t.value);
                  break;
                case "file":
                  for (const t of e.files) u.append(e.name, t);
                  break;
                default:
                  u.append(e.name, e.value);
              }
          }),
        e.dataset.name &&
          (p.push(e.dataset.name),
          e.setAttribute("data-under-validation", "1"),
          e.dataset.name === s.target.name.replace(/\[.*\]$/, "")))
      )
        break;
    d.rules = (null !== (o = d.rules) && void 0 !== o ? o : []).filter((e) => {
      let { field: t } = e;
      return p.includes(t);
    });
    const f = e.getAttribute("data-status");
    Promise.resolve(t(e, "validating"))
      .then((t) => {
        if (void 0 !== swv) {
          const t = swv.validate(d, u, s);
          for (const [a, { error: r }] of t)
            i(e, a), void 0 !== r && c(e, a, r);
        }
      })
      .finally(() => {
        t(e, f),
          e
            .querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]")
            .forEach((e) => {
              e.removeAttribute("data-under-validation");
            });
      });
  }
  r.use = (e) => {
    n.unshift(e);
  };
  const c = (e, t, a) => {
      var r;
      const n = `${
          null === (r = e.wpcf7) || void 0 === r ? void 0 : r.unitTag
        }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        o = e.querySelector(
          `.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`
        );
      (() => {
        const t = document.createElement("li");
        t.setAttribute("id", n),
          o && o.id
            ? t.insertAdjacentHTML("beforeend", `<a href="#${o.id}">${a}</a>`)
            : t.insertAdjacentText("beforeend", a),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(t);
      })(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((t) => {
            if (
              "validating" === e.getAttribute("data-status") &&
              !t.dataset.underValidation
            )
              return;
            const r = document.createElement("span");
            r.classList.add("wpcf7-not-valid-tip"),
              r.setAttribute("aria-hidden", "true"),
              r.insertAdjacentText("beforeend", a),
              t.appendChild(r),
              t.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              t.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", n),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      r.setAttribute("style", "display: none");
                    }),
                    r.addEventListener("click", (e) => {
                      r.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    i = (e, t) => {
      var a, r;
      const n = `${
        null === (a = e.wpcf7) || void 0 === a ? void 0 : a.unitTag
      }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      null ===
        (r = e.wpcf7.parent.querySelector(
          `.screen-reader-response ul li#${n}`
        )) ||
        void 0 === r ||
        r.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            var t;
            null === (t = e.querySelector(".wpcf7-not-valid-tip")) ||
              void 0 === t ||
              t.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    };
  function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (wpcf7.blocked) return l(e), void t(e, "submitting");
    const o = new FormData(e);
    n.submitter &&
      n.submitter.name &&
      o.append(n.submitter.name, n.submitter.value);
    const i = {
      contactFormId: e.wpcf7.id,
      pluginVersion: e.wpcf7.pluginVersion,
      contactFormLocale: e.wpcf7.locale,
      unitTag: e.wpcf7.unitTag,
      containerPostId: e.wpcf7.containerPost,
      status: e.wpcf7.status,
      inputs: Array.from(o, (e) => {
        const t = e[0],
          a = e[1];
        return (
          !t.match(/^_/) && {
            name: t,
            value: a,
          }
        );
      }).filter((e) => !1 !== e),
      formData: o,
    };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: o,
      wpcf7: {
        endpoint: "feedback",
        form: e,
        detail: i,
      },
    })
      .then((r) => {
        const n = t(e, r.status);
        return (
          (i.status = r.status),
          (i.apiResponse = r),
          ["invalid", "unaccepted", "spam", "aborted"].includes(n)
            ? a(e, n, i)
            : ["sent", "failed"].includes(n) && a(e, `mail${n}`, i),
          a(e, "submit", i),
          r
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((t) => {
              c(e, t.field, t.message);
            }),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  r.use((e, r) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: r, detail: n } = e.wpcf7;
      l(r), a(r, "beforesubmit", n), t(r, "submitting");
    }
    return r(e);
  });
  const l = (e) => {
    e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t) => {
      t.dataset.name && i(e, t.dataset.name);
    }),
      (e.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]'
      ).innerText = ""),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function d(e) {
    const n = new FormData(e),
      o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(n, (e) => {
          const t = e[0],
            a = e[1];
          return (
            !t.match(/^_/) && {
              name: t,
              value: a,
            }
          );
        }).filter((e) => !1 !== e),
        formData: n,
      };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: {
        endpoint: "refill",
        form: e,
        detail: o,
      },
    })
      .then((r) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
          : t(e, "init"),
          (o.apiResponse = r),
          a(e, "reset", o);
      })
      .catch((e) => console.error(e));
  }
  r.use((e, a) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: a, detail: r } = e.wpcf7;
      l(a), t(a, "resetting");
    }
    return a(e);
  });
  const u = (e, t) => {
      for (const a in t) {
        const r = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", r);
            });
        const n = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
        n &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = n[1];
            });
      }
    },
    p = (e, t) => {
      for (const a in t) {
        const r = t[a][0],
          n = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = r),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              n);
        });
      }
    };
  function f(t) {
    const a = new FormData(t);
    (t.wpcf7 = {
      id: e(a.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: a.get("_wpcf7_version"),
      locale: a.get("_wpcf7_locale"),
      unitTag: a.get("_wpcf7_unit_tag"),
      containerPost: e(a.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
      schema: {},
    }),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const a = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              }
            );
          });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const a = t.querySelector("input.wpcf7-free-text"),
            r = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (a.disabled = !r.checked),
            e.addEventListener("change", (e) => {
              (a.disabled = !r.checked),
                e.target === r && r.checked && a.focus();
            });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let a = e.value.trim();
            a &&
              !a.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== a.indexOf(".") &&
              ((a = a.replace(/^\/+/, "")), (a = "http://" + a)),
              (e.value = a);
          });
        });
      })(t),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const a = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && a.checked) ||
              (!e.classList.contains("invert") && !a.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      ((t) => {
        const a = (t, a) => {
            const r = e(t.getAttribute("data-starting-value")),
              n = e(t.getAttribute("data-maximum-value")),
              o = e(t.getAttribute("data-minimum-value")),
              c = t.classList.contains("down")
                ? r - a.value.length
                : a.value.length;
            t.setAttribute("data-current-value", c),
              (t.innerText = c),
              n && n < a.value.length
                ? t.classList.add("too-long")
                : t.classList.remove("too-long"),
              o && a.value.length < o
                ? t.classList.add("too-short")
                : t.classList.remove("too-short");
          },
          r = (e) => {
            (e = {
              init: !1,
              ...e,
            }),
              t.querySelectorAll(".wpcf7-character-count").forEach((r) => {
                const n = r.getAttribute("data-target-name"),
                  o = t.querySelector(`[name="${n}"]`);
                o &&
                  ((o.value = o.defaultValue),
                  a(r, o),
                  e.init &&
                    o.addEventListener("keyup", (e) => {
                      a(r, o);
                    }));
              });
          };
        r({
          init: !0,
        }),
          t.addEventListener("wpcf7reset", (e) => {
            r();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        wpcf7.submit(t, {
          submitter: e.submitter,
        }),
          e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz);
      }),
      r({
        endpoint: `contact-forms/${t.wpcf7.id}/feedback/schema`,
        method: "GET",
      }).then((e) => {
        t.wpcf7.schema = e;
      }),
      t.addEventListener("change", (e) => {
        e.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(t, {
            target: e.target,
          });
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    if ("undefined" == typeof wpcf7)
      return void console.error("wpcf7 is not defined.");
    if (void 0 === wpcf7.api)
      return void console.error("wpcf7.api is not defined.");
    if ("function" != typeof window.fetch)
      return void console.error(
        "Your browser does not support window.fetch()."
      );
    if ("function" != typeof window.FormData)
      return void console.error(
        "Your browser does not support window.FormData()."
      );
    const a = document.querySelectorAll(".wpcf7 > form");
    "function" == typeof a.forEach
      ? ((wpcf7 = {
          init: f,
          submit: s,
          reset: d,
          validate: o,
          ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
        }),
        a.forEach((e) => wpcf7.init(e)))
      : console.error("Your browser does not support NodeList.forEach().");
  });
})();
