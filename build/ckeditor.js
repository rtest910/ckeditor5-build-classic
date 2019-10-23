/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
! function(t) {
    t.en = Object.assign(t.en || {}, {
        a: "Cannot upload file:",
        b: "Bold",
        c: "Block quote",
        d: "Italic",
        e: "image widget",
        f: "Choose heading",
        g: "Heading",
        h: "Insert image or file",
        i: "Full size image",
        j: "Side image",
        k: "Left aligned image",
        l: "Centered image",
        m: "Right aligned image",
        n: "Insert image",
        o: "Numbered List",
        p: "Bulleted List",
        q: "Insert table",
        r: "Header column",
        s: "Insert column left",
        t: "Insert column right",
        u: "Delete column",
        v: "Column",
        w: "Header row",
        x: "Insert row below",
        y: "Insert row above",
        z: "Delete row",
        aa: "Row",
        ab: "Merge cell up",
        ac: "Merge cell right",
        ad: "Merge cell down",
        ae: "Merge cell left",
        af: "Split cell vertically",
        ag: "Split cell horizontally",
        ah: "Merge cells",
        ai: "Enter image caption",
        aj: "Upload failed",
        ak: "media widget",
        al: "Insert media",
        am: "The URL must not be empty.",
        an: "This media URL is not supported.",
        ao: "Link",
        ap: "Upload in progress",
        aq: "Unlink",
        ar: "Edit link",
        as: "Open link in new tab",
        at: "This link has no URL",
        au: "Save",
        av: "Cancel",
        aw: "Link URL",
        ax: "Paste the media URL in the input.",
        ay: "Tip: Paste the URL into the content to embed faster.",
        az: "Media URL",
        ba: "Undo",
        bb: "Redo",
        bc: "Rich Text Editor",
        bd: "Rich Text Editor, %0",
        be: "Could not obtain resized image URL.",
        bf: "Selecting resized image failed",
        bg: "Could not insert image at the current position.",
        bh: "Inserting image failed",
        bi: "Paragraph",
        bj: "Heading 1",
        bk: "Heading 2",
        bl: "Heading 3",
        bm: "Heading 4",
        bn: "Heading 5",
        bo: "Heading 6",
        bp: "Change image text alternative",
        bq: "Text alternative"
    })
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClassicEditor = e() : t.ClassicEditor = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(i, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 117)
    }([function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o
        }), n.d(e, "a", function() {
            return r
        });
        const i = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";
        class o extends Error {
            constructor(t, e) {
                t = r(t), e && (t += " " + JSON.stringify(e)), super(t), this.name = "CKEditorError", this.data = e
            }
            static isCKEditorError(t) {
                return t instanceof o
            }
        }

        function r(t) {
            const e = t.match(/^([^:]+):/);
            return e ? t + ` Read more: ${i}#error-${e[1]}\n` : t
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(0);
        const o = {
            error(t, e) {
                console.error(Object(i.a)(t), e)
            }, warn(t, e) {
                console.warn(Object(i.a)(t), e)
            }
        };
        e.a = o
    }, function(t, e, n) {
        var i = {},
            o = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = t.apply(this, arguments)), e
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            r = function(t) {
                var e = {};
                return function(t, n) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var i = function(t, e) {
                            return e ? e.querySelector(t) : document.querySelector(t)
                        }.call(this, t, n);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        e[t] = i
                    }
                    return e[t]
                }
            }(),
            s = null,
            a = 0,
            c = [],
            l = n(45);

        function d(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                    r = i[o.id];
                if (r) {
                    r.refs++;
                    for (var s = 0; s < r.parts.length; s++) r.parts[s](o.parts[s]);
                    for (; s < o.parts.length; s++) r.parts.push(g(o.parts[s], e))
                } else {
                    var a = [];
                    for (s = 0; s < o.parts.length; s++) a.push(g(o.parts[s], e));
                    i[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function u(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o],
                    s = e.base ? r[0] + e.base : r[0],
                    a = {
                        css: r[1],
                        media: r[2],
                        sourceMap: r[3]
                    };
                i[s] ? i[s].parts.push(a) : n.push(i[s] = {
                    id: s,
                    parts: [a]
                })
            }
            return n
        }

        function h(t, e) {
            var n = r(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = c[c.length - 1];
            if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling == undefined ? null : i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild == undefined ? null : n.firstChild), c.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = r(t.insertAt.before, n);
                n.insertBefore(e, o == undefined ? null : o)
            }
        }

        function f(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = c.indexOf(t);
            e >= 0 && c.splice(e, 1)
        }

        function m(t) {
            var e = document.createElement("style");
            if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                var i = function() {
                    0;
                    return n.nc
                }();
                i && (t.attrs.nonce = i)
            }
            return p(e, t.attrs), h(t, e), e
        }

        function p(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }

        function g(t, e) {
            var n, i, o, r;
            if (e.transform && t.css) {
                if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
                t.css = r
            }
            if (e.singleton) {
                var c = a++;
                n = s || (s = m(e)), i = w.bind(null, n, c, !1), o = w.bind(null, n, c, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", p(e, t.attrs), h(t, e), e
            }(e), i = function(t, e, n) {
                var i = n.css,
                    o = n.sourceMap,
                    r = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || r) && (i = l(i));
                o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var s = new Blob([i], {
                        type: "text/css"
                    }),
                    a = t.href;
                t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
            }.bind(null, n, e), o = function() {
                f(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = m(e), i = function(t, e) {
                var n = e.css,
                    i = e.media;
                i && t.setAttribute("media", i);
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function() {
                f(n)
            });
            return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i(t = e)
                    } else o()
                }
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = u(t, e);
            return d(n, e),
                function(t) {
                    for (var o = [], r = 0; r < n.length; r++) {
                        var s = n[r];
                        (a = i[s.id]).refs--, o.push(a)
                    }
                    t && d(u(t, e), e);
                    for (r = 0; r < o.length; r++) {
                        var a;
                        if (0 === (a = o[r]).refs) {
                            for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                            delete i[a.id]
                        }
                    }
                }
        };
        var b = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }();

        function w(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = b(e, o);
            else {
                var r = document.createTextNode(o),
                    s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e] == undefined ? null : s[e]) : t.appendChild(r)
            }
        }
    }, , function(t, e, n) {
        "use strict";
        var i = n(9),
            o = "object" == typeof self && self && self.Object === Object && self,
            r = i.a || o || Function("return this")();
        e.a = r
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var i = n(9),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t,
                s = r && r.exports === o && i.a.process,
                a = function() {
                    try {
                        var t = r && r.require && r.require("util").types;
                        return t || s && s.binding && s.binding("util")
                    } catch (t) {}
                }();
            e.a = a
        }).call(this, n(11)(t))
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var i = n(4),
                o = n(18),
                r = "object" == typeof exports && exports && !exports.nodeType && exports,
                s = r && "object" == typeof t && t && !t.nodeType && t,
                a = s && s.exports === r ? i.a.Buffer : void 0,
                c = (a ? a.isBuffer : void 0) || o.a;
            e.a = c
        }).call(this, n(11)(t))
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>'
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n
        }).call(this, n(16))
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>'
    }, function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    }, function(t) {
        t.exports = {
            a: "12.0.0"
        }
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>'
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        var i = n(94);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        "use strict";
        e.a = function() {
            return !1
        }
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var i = n(4),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t,
                s = r && r.exports === o ? i.a.Buffer : void 0,
                a = s ? s.allocUnsafe : void 0;
            e.a = function(t, e) {
                if (e) return t.slice();
                var n = t.length,
                    i = a ? a(n) : new t.constructor(n);
                return t.copy(i), i
            }
        }).call(this, n(11)(t))
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5a3.496 3.496 0 0 1 0 0zm5.873-.196a3.484 3.484 0 0 1 0 0zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>\n'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>\n'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></g></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></g></svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></g></svg>'
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n(1),
                i = n(12);
            const o = "object" == typeof window ? window : t;
            o.CKEDITOR_VERSION ? e.a.error("ckeditor-version-collision: The global CKEDITOR_VERSION constant has already been set.", {
                collidingVersion: o.CKEDITOR_VERSION,
                version: i.a
            }) : o.CKEDITOR_VERSION = i.a
        }).call(this, n(16))
    }, function(t, e, n) {
        var i = n(44);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"
    }, function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function(t, e, n) {
        var i = n(47);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,0.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"
    }, function(t, e, n) {
        var i = n(49);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"
    }, function(t, e, n) {
        var i = n(51);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"
    }, function(t, e, n) {
        var i = n(53);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"
    }, function(t, e, n) {
        var i = n(55);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"
    }, function(t, e, n) {
        var i = n(57);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"
    }, function(t, e, n) {
        var i = n(59);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"
    }, function(t, e, n) {
        var i = n(61);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = '.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'
    }, function(t, e, n) {
        var i = n(63);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"
    }, function(t, e, n) {
        var i = n(65);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}"
    }, function(t, e, n) {
        var i = n(67);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck .ck-widget.ck-widget_with-selection-handler{position:relative}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{visibility:hidden;position:absolute}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{visibility:visible}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handler:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handler:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"
    }, function(t, e, n) {
        var i = n(69);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"
    }, function(t, e, n) {
        var i = n(71);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"
    }, function(t, e, n) {
        var i = n(73);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function(t, e, n) {
        var i = n(75);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'
    }, function(t, e, n) {
        var i = n(77);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content .image{clear:both;text-align:center;margin:1em 0}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}"
    }, function(t, e, n) {
        var i = n(79);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content .image{position:relative;overflow:hidden}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:fadeIn .7s}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
    }, function(t, e, n) {
        var i = n(81);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = '.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'
    }, function(t, e, n) {
        var i = n(83);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = '.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'
    }, function(t, e, n) {
        var i = n(85);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size);margin-left:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"
    }, function(t, e, n) {
        var i = n(87);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"
    }, function(t, e, n) {
        var i = n(89);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px}.ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto;transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:transform .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(1.3846153847em)}"
    }, function(t, e, n) {
        var i = n(91);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"
    }, function(t, e, n) {
        var i = n(93);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"
    }, function(t, e) {
        t.exports = ".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"
    }, function(t, e, n) {
        var i = n(96);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"
    }, function(t, e, n) {
        var i = n(98);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"
    }, function(t, e, n) {
        var i = n(100);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"
    }, function(t, e, n) {
        var i = n(102);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-link-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function(t, e, n) {
        var i = n(104);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function(t, e, n) {
        var i = n(106);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = '.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder){pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjEyLjk4MyAyNDguNDk1bC0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwIDAtMi43NjQtMy45IDM3LjU3NSAzNy41NzUgMCAwIDAtLjk4OS0xLjQ0IDM1LjEyNyAzNS4xMjcgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM5LTUuMjM4di0xLjA0NXoiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'
    }, function(t, e, n) {
        var i = n(108);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}.ck.ck-media-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function(t, e, n) {
        var i = n(110);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"
    }, function(t, e, n) {
        var i = n(112);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"
    }, function(t, e, n) {
        var i = n(114);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"
    }, function(t, e, n) {
        var i = n(116);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(2)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e) {
        t.exports = ".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            o = i.a.Symbol,
            r = Object.prototype,
            s = r.hasOwnProperty,
            a = r.toString,
            c = o ? o.toStringTag : void 0;
        var l = function(t) {
                var e = s.call(t, c),
                    n = t[c];
                try {
                    t[c] = void 0;
                    var i = !0
                } catch (t) {}
                var o = a.call(t);
                return i && (e ? t[c] = n : delete t[c]), o
            },
            d = Object.prototype.toString;
        var u = function(t) {
                return d.call(t)
            },
            h = "[object Null]",
            f = "[object Undefined]",
            m = o ? o.toStringTag : void 0;
        var p = function(t) {
            return null == t ? void 0 === t ? f : h : m && m in Object(t) ? l(t) : u(t)
        };
        var g = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            },
            b = g(Object.getPrototypeOf, Object);
        var w = function(t) {
                return null != t && "object" == typeof t
            },
            _ = "[object Object]",
            k = Function.prototype,
            v = Object.prototype,
            y = k.toString,
            x = v.hasOwnProperty,
            A = y.call(Object);
        var C = function(t) {
            if (!w(t) || p(t) != _) return !1;
            var e = b(t);
            if (null === e) return !0;
            var n = x.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && y.call(n) == A
        };
        var T = function() {
            this.__data__ = [], this.size = 0
        };
        var P = function(t, e) {
            return t === e || t != t && e != e
        };
        var M = function(t, e) {
                for (var n = t.length; n--;)
                    if (P(t[n][0], e)) return n;
                return -1
            },
            E = Array.prototype.splice;
        var S = function(t) {
            var e = this.__data__,
                n = M(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : E.call(e, n, 1), --this.size, 0))
        };
        var I = function(t) {
            var e = this.__data__,
                n = M(e, t);
            return n < 0 ? void 0 : e[n][1]
        };
        var N = function(t) {
            return M(this.__data__, t) > -1
        };
        var O = function(t, e) {
            var n = this.__data__,
                i = M(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
        };

        function R(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        R.prototype.clear = T, R.prototype.delete = S, R.prototype.get = I, R.prototype.has = N, R.prototype.set = O;
        var D = R;
        var L = function() {
            this.__data__ = new D, this.size = 0
        };
        var j = function(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        };
        var V = function(t) {
            return this.__data__.get(t)
        };
        var B = function(t) {
            return this.__data__.has(t)
        };
        var z = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            },
            F = "[object AsyncFunction]",
            U = "[object Function]",
            H = "[object GeneratorFunction]",
            q = "[object Proxy]";
        var W = function(t) {
                if (!z(t)) return !1;
                var e = p(t);
                return e == U || e == H || e == F || e == q
            },
            Y = i.a["__core-js_shared__"],
            $ = function() {
                var t = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }();
        var G = function(t) {
                return !!$ && $ in t
            },
            Q = Function.prototype.toString;
        var J = function(t) {
                if (null != t) {
                    try {
                        return Q.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            },
            K = /^\[object .+?Constructor\]$/,
            Z = Function.prototype,
            X = Object.prototype,
            tt = Z.toString,
            et = X.hasOwnProperty,
            nt = RegExp("^" + tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var it = function(t) {
            return !(!z(t) || G(t)) && (W(t) ? nt : K).test(J(t))
        };
        var ot = function(t, e) {
            return null == t ? void 0 : t[e]
        };
        var rt = function(t, e) {
                var n = ot(t, e);
                return it(n) ? n : void 0
            },
            st = rt(i.a, "Map"),
            at = rt(Object, "create");
        var ct = function() {
            this.__data__ = at ? at(null) : {}, this.size = 0
        };
        var lt = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            },
            dt = "__lodash_hash_undefined__",
            ut = Object.prototype.hasOwnProperty;
        var ht = function(t) {
                var e = this.__data__;
                if (at) {
                    var n = e[t];
                    return n === dt ? void 0 : n
                }
                return ut.call(e, t) ? e[t] : void 0
            },
            ft = Object.prototype.hasOwnProperty;
        var mt = function(t) {
                var e = this.__data__;
                return at ? void 0 !== e[t] : ft.call(e, t)
            },
            pt = "__lodash_hash_undefined__";
        var gt = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = at && void 0 === e ? pt : e, this
        };

        function bt(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        bt.prototype.clear = ct, bt.prototype.delete = lt, bt.prototype.get = ht, bt.prototype.has = mt, bt.prototype.set = gt;
        var wt = bt;
        var _t = function() {
            this.size = 0, this.__data__ = {
                hash: new wt,
                map: new(st || D),
                string: new wt
            }
        };
        var kt = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        };
        var vt = function(t, e) {
            var n = t.__data__;
            return kt(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        };
        var yt = function(t) {
            var e = vt(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        };
        var xt = function(t) {
            return vt(this, t).get(t)
        };
        var At = function(t) {
            return vt(this, t).has(t)
        };
        var Ct = function(t, e) {
            var n = vt(this, t),
                i = n.size;
            return n.set(t, e), this.size += n.size == i ? 0 : 1, this
        };

        function Tt(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        Tt.prototype.clear = _t, Tt.prototype.delete = yt, Tt.prototype.get = xt, Tt.prototype.has = At, Tt.prototype.set = Ct;
        var Pt = Tt,
            Mt = 200;
        var Et = function(t, e) {
            var n = this.__data__;
            if (n instanceof D) {
                var i = n.__data__;
                if (!st || i.length < Mt - 1) return i.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new Pt(i)
            }
            return n.set(t, e), this.size = n.size, this
        };

        function St(t) {
            var e = this.__data__ = new D(t);
            this.size = e.size
        }
        St.prototype.clear = L, St.prototype.delete = j, St.prototype.get = V, St.prototype.has = B, St.prototype.set = Et;
        var It = St;
        var Nt = function(t, e) {
                for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
                return t
            },
            Ot = function() {
                try {
                    var t = rt(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
        var Rt = function(t, e, n) {
                "__proto__" == e && Ot ? Ot(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            },
            Dt = Object.prototype.hasOwnProperty;
        var Lt = function(t, e, n) {
            var i = t[e];
            Dt.call(t, e) && P(i, n) && (void 0 !== n || e in t) || Rt(t, e, n)
        };
        var jt = function(t, e, n, i) {
            var o = !n;
            n || (n = {});
            for (var r = -1, s = e.length; ++r < s;) {
                var a = e[r],
                    c = i ? i(n[a], t[a], a, n, t) : void 0;
                void 0 === c && (c = t[a]), o ? Rt(n, a, c) : Lt(n, a, c)
            }
            return n
        };
        var Vt = function(t, e) {
                for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
                return i
            },
            Bt = "[object Arguments]";
        var zt = function(t) {
                return w(t) && p(t) == Bt
            },
            Ft = Object.prototype,
            Ut = Ft.hasOwnProperty,
            Ht = Ft.propertyIsEnumerable,
            qt = zt(function() {
                return arguments
            }()) ? zt : function(t) {
                return w(t) && Ut.call(t, "callee") && !Ht.call(t, "callee")
            },
            Wt = Array.isArray,
            Yt = n(6),
            $t = 9007199254740991,
            Gt = /^(?:0|[1-9]\d*)$/;
        var Qt = function(t, e) {
                var n = typeof t;
                return !!(e = null == e ? $t : e) && ("number" == n || "symbol" != n && Gt.test(t)) && t > -1 && t % 1 == 0 && t < e
            },
            Jt = 9007199254740991;
        var Kt = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Jt
            },
            Zt = {};
        Zt["[object Float32Array]"] = Zt["[object Float64Array]"] = Zt["[object Int8Array]"] = Zt["[object Int16Array]"] = Zt["[object Int32Array]"] = Zt["[object Uint8Array]"] = Zt["[object Uint8ClampedArray]"] = Zt["[object Uint16Array]"] = Zt["[object Uint32Array]"] = !0, Zt["[object Arguments]"] = Zt["[object Array]"] = Zt["[object ArrayBuffer]"] = Zt["[object Boolean]"] = Zt["[object DataView]"] = Zt["[object Date]"] = Zt["[object Error]"] = Zt["[object Function]"] = Zt["[object Map]"] = Zt["[object Number]"] = Zt["[object Object]"] = Zt["[object RegExp]"] = Zt["[object Set]"] = Zt["[object String]"] = Zt["[object WeakMap]"] = !1;
        var Xt = function(t) {
            return w(t) && Kt(t.length) && !!Zt[p(t)]
        };
        var te = function(t) {
                return function(e) {
                    return t(e)
                }
            },
            ee = n(5),
            ne = ee.a && ee.a.isTypedArray,
            ie = ne ? te(ne) : Xt,
            oe = Object.prototype.hasOwnProperty;
        var re = function(t, e) {
                var n = Wt(t),
                    i = !n && qt(t),
                    o = !n && !i && Object(Yt.a)(t),
                    r = !n && !i && !o && ie(t),
                    s = n || i || o || r,
                    a = s ? Vt(t.length, String) : [],
                    c = a.length;
                for (var l in t) !e && !oe.call(t, l) || s && ("length" == l || o && ("offset" == l || "parent" == l) || r && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Qt(l, c)) || a.push(l);
                return a
            },
            se = Object.prototype;
        var ae = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || se)
            },
            ce = g(Object.keys, Object),
            le = Object.prototype.hasOwnProperty;
        var de = function(t) {
            if (!ae(t)) return ce(t);
            var e = [];
            for (var n in Object(t)) le.call(t, n) && "constructor" != n && e.push(n);
            return e
        };
        var ue = function(t) {
            return null != t && Kt(t.length) && !W(t)
        };
        var he = function(t) {
            return ue(t) ? re(t) : de(t)
        };
        var fe = function(t, e) {
            return t && jt(e, he(e), t)
        };
        var me = function(t) {
                var e = [];
                if (null != t)
                    for (var n in Object(t)) e.push(n);
                return e
            },
            pe = Object.prototype.hasOwnProperty;
        var ge = function(t) {
            if (!z(t)) return me(t);
            var e = ae(t),
                n = [];
            for (var i in t)("constructor" != i || !e && pe.call(t, i)) && n.push(i);
            return n
        };
        var be = function(t) {
            return ue(t) ? re(t, !0) : ge(t)
        };
        var we = function(t, e) {
                return t && jt(e, be(e), t)
            },
            _e = n(19);
        var ke = function(t, e) {
            var n = -1,
                i = t.length;
            for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
            return e
        };
        var ve = function(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i;) {
                var s = t[n];
                e(s, n, t) && (r[o++] = s)
            }
            return r
        };
        var ye = function() {
                return []
            },
            xe = Object.prototype.propertyIsEnumerable,
            Ae = Object.getOwnPropertySymbols,
            Ce = Ae ? function(t) {
                return null == t ? [] : (t = Object(t), ve(Ae(t), function(e) {
                    return xe.call(t, e)
                }))
            } : ye;
        var Te = function(t, e) {
            return jt(t, Ce(t), e)
        };
        var Pe = function(t, e) {
                for (var n = -1, i = e.length, o = t.length; ++n < i;) t[o + n] = e[n];
                return t
            },
            Me = Object.getOwnPropertySymbols ? function(t) {
                for (var e = []; t;) Pe(e, Ce(t)), t = b(t);
                return e
            } : ye;
        var Ee = function(t, e) {
            return jt(t, Me(t), e)
        };
        var Se = function(t, e, n) {
            var i = e(t);
            return Wt(t) ? i : Pe(i, n(t))
        };
        var Ie = function(t) {
            return Se(t, he, Ce)
        };
        var Ne = function(t) {
                return Se(t, be, Me)
            },
            Oe = rt(i.a, "DataView"),
            Re = rt(i.a, "Promise"),
            De = rt(i.a, "Set"),
            Le = rt(i.a, "WeakMap"),
            je = J(Oe),
            Ve = J(st),
            Be = J(Re),
            ze = J(De),
            Fe = J(Le),
            Ue = p;
        (Oe && "[object DataView]" != Ue(new Oe(new ArrayBuffer(1))) || st && "[object Map]" != Ue(new st) || Re && "[object Promise]" != Ue(Re.resolve()) || De && "[object Set]" != Ue(new De) || Le && "[object WeakMap]" != Ue(new Le)) && (Ue = function(t) {
            var e = p(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                i = n ? J(n) : "";
            if (i) switch (i) {
                case je:
                    return "[object DataView]";
                case Ve:
                    return "[object Map]";
                case Be:
                    return "[object Promise]";
                case ze:
                    return "[object Set]";
                case Fe:
                    return "[object WeakMap]"
            }
            return e
        });
        var He = Ue,
            qe = Object.prototype.hasOwnProperty;
        var We = function(t) {
                var e = t.length,
                    n = new t.constructor(e);
                return e && "string" == typeof t[0] && qe.call(t, "index") && (n.index = t.index, n.input = t.input), n
            },
            Ye = i.a.Uint8Array;
        var $e = function(t) {
            var e = new t.constructor(t.byteLength);
            return new Ye(e).set(new Ye(t)), e
        };
        var Ge = function(t, e) {
                var n = e ? $e(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.byteLength)
            },
            Qe = /\w*$/;
        var Je = function(t) {
                var e = new t.constructor(t.source, Qe.exec(t));
                return e.lastIndex = t.lastIndex, e
            },
            Ke = o ? o.prototype : void 0,
            Ze = Ke ? Ke.valueOf : void 0;
        var Xe = function(t) {
            return Ze ? Object(Ze.call(t)) : {}
        };
        var tn = function(t, e) {
                var n = e ? $e(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length)
            },
            en = "[object Boolean]",
            nn = "[object Date]",
            on = "[object Map]",
            rn = "[object Number]",
            sn = "[object RegExp]",
            an = "[object Set]",
            cn = "[object String]",
            ln = "[object Symbol]",
            dn = "[object ArrayBuffer]",
            un = "[object DataView]",
            hn = "[object Float32Array]",
            fn = "[object Float64Array]",
            mn = "[object Int8Array]",
            pn = "[object Int16Array]",
            gn = "[object Int32Array]",
            bn = "[object Uint8Array]",
            wn = "[object Uint8ClampedArray]",
            _n = "[object Uint16Array]",
            kn = "[object Uint32Array]";
        var vn = function(t, e, n) {
                var i = t.constructor;
                switch (e) {
                    case dn:
                        return $e(t);
                    case en:
                    case nn:
                        return new i(+t);
                    case un:
                        return Ge(t, n);
                    case hn:
                    case fn:
                    case mn:
                    case pn:
                    case gn:
                    case bn:
                    case wn:
                    case _n:
                    case kn:
                        return tn(t, n);
                    case on:
                        return new i;
                    case rn:
                    case cn:
                        return new i(t);
                    case sn:
                        return Je(t);
                    case an:
                        return new i;
                    case ln:
                        return Xe(t)
                }
            },
            yn = Object.create,
            xn = function() {
                function t() {}
                return function(e) {
                    if (!z(e)) return {};
                    if (yn) return yn(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
        var An = function(t) {
                return "function" != typeof t.constructor || ae(t) ? {} : xn(b(t))
            },
            Cn = "[object Map]";
        var Tn = function(t) {
                return w(t) && He(t) == Cn
            },
            Pn = ee.a && ee.a.isMap,
            Mn = Pn ? te(Pn) : Tn,
            En = "[object Set]";
        var Sn = function(t) {
                return w(t) && He(t) == En
            },
            In = ee.a && ee.a.isSet,
            Nn = In ? te(In) : Sn,
            On = 1,
            Rn = 2,
            Dn = 4,
            Ln = "[object Arguments]",
            jn = "[object Function]",
            Vn = "[object GeneratorFunction]",
            Bn = "[object Object]",
            zn = {};
        zn[Ln] = zn["[object Array]"] = zn["[object ArrayBuffer]"] = zn["[object DataView]"] = zn["[object Boolean]"] = zn["[object Date]"] = zn["[object Float32Array]"] = zn["[object Float64Array]"] = zn["[object Int8Array]"] = zn["[object Int16Array]"] = zn["[object Int32Array]"] = zn["[object Map]"] = zn["[object Number]"] = zn[Bn] = zn["[object RegExp]"] = zn["[object Set]"] = zn["[object String]"] = zn["[object Symbol]"] = zn["[object Uint8Array]"] = zn["[object Uint8ClampedArray]"] = zn["[object Uint16Array]"] = zn["[object Uint32Array]"] = !0, zn["[object Error]"] = zn[jn] = zn["[object WeakMap]"] = !1;
        var Fn = function t(e, n, i, o, r, s) {
                var a, c = n & On,
                    l = n & Rn,
                    d = n & Dn;
                if (i && (a = r ? i(e, o, r, s) : i(e)), void 0 !== a) return a;
                if (!z(e)) return e;
                var u = Wt(e);
                if (u) {
                    if (a = We(e), !c) return ke(e, a)
                } else {
                    var h = He(e),
                        f = h == jn || h == Vn;
                    if (Object(Yt.a)(e)) return Object(_e.a)(e, c);
                    if (h == Bn || h == Ln || f && !r) {
                        if (a = l || f ? {} : An(e), !c) return l ? Ee(e, we(a, e)) : Te(e, fe(a, e))
                    } else {
                        if (!zn[h]) return r ? e : {};
                        a = vn(e, h, c)
                    }
                }
                s || (s = new It);
                var m = s.get(e);
                if (m) return m;
                if (s.set(e, a), Nn(e)) return e.forEach(function(o) {
                    a.add(t(o, n, i, o, e, s))
                }), a;
                if (Mn(e)) return e.forEach(function(o, r) {
                    a.set(r, t(o, n, i, r, e, s))
                }), a;
                var p = d ? l ? Ne : Ie : l ? keysIn : he,
                    g = u ? void 0 : p(e);
                return Nt(g || e, function(o, r) {
                    g && (o = e[r = o]), Lt(a, r, t(o, n, i, r, e, s))
                }), a
            },
            Un = 1,
            Hn = 4;
        var qn = function(t, e) {
            return Fn(t, Un | Hn, e = "function" == typeof e ? e : void 0)
        };
        var Wn = function(t) {
            return w(t) && 1 === t.nodeType && !C(t)
        };
        class Yn {
            constructor(t, e) {
                this._config = {}, e && this.define(e), t && this._setObjectToTarget(this._config, t)
            }
            set(t, e) {
                this._setToTarget(this._config, t, e)
            }
            define(t, e) {
                this._setToTarget(this._config, t, e, !0)
            }
            get(t) {
                return this._getFromSource(this._config, t)
            }
            _setToTarget(t, e, n, i = !1) {
                if (C(e)) return void this._setObjectToTarget(t, e, i);
                const o = e.split(".");
                e = o.pop();
                for (const e of o) C(t[e]) || (t[e] = {}), t = t[e];
                if (C(n)) return C(t[e]) || (t[e] = {}), t = t[e], void this._setObjectToTarget(t, n, i);
                i && void 0 !== t[e] || (t[e] = n)
            }
            _getFromSource(t, e) {
                const n = e.split(".");
                e = n.pop();
                for (const e of n) {
                    if (!C(t[e])) {
                        t = null;
                        break
                    }
                    t = t[e]
                }
                return t ? function(t) {
                    return qn(t, $n)
                }(t[e]) : void 0
            }
            _setObjectToTarget(t, e, n) {
                Object.keys(e).forEach(i => {
                    this._setToTarget(t, i, e[i], n)
                })
            }
        }

        function $n(t) {
            return Wn(t) ? t : void 0
        }
        var Gn = n(0);
        var Qn = function() {
            return function t() {
                t.called = !0
            }
        };
        class Jn {
            constructor(t, e) {
                this.source = t, this.name = e, this.path = [], this.stop = Qn(), this.off = Qn()
            }
        }

        function Kn() {
            let t = "e";
            for (let e = 0; e < 8; e++) t += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            return t
        }
        var Zn = {
            get(t) {
                return "number" != typeof t ? this[t] || this.normal : t
            }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5
        };
        const Xn = Symbol("listeningTo"),
            ti = Symbol("emitterId");
        var ei = {
            on(t, e, n = {}) {
                this.listenTo(this, t, e, n)
            }, once(t, e, n) {
                let i = !1;
                this.listenTo(this, t, function(t, ...n) {
                    i || (i = !0, t.off(), e.call(this, t, ...n))
                }, n)
            }, off(t, e) {
                this.stopListening(this, t, e)
            }, listenTo(t, e, n, i = {}) {
                let o, r;
                this[Xn] || (this[Xn] = {});
                const s = this[Xn];
                ii(t) || ni(t);
                const a = ii(t);
                (o = s[a]) || (o = s[a] = {
                    emitter: t,
                    callbacks: {}
                }), (r = o.callbacks[e]) || (r = o.callbacks[e] = []), r.push(n),
                    function(t, e) {
                        const n = oi(t);
                        if (n[e]) return;
                        let i = e,
                            o = null;
                        const r = [];
                        for (;
                            "" !== i && !n[i];) n[i] = {
                            callbacks: [],
                            childEvents: []
                        }, r.push(n[i]), o && n[i].childEvents.push(o), o = i, i = i.substr(0, i.lastIndexOf(":"));
                        if ("" !== i) {
                            for (const t of r) t.callbacks = n[i].callbacks.slice();
                            n[i].childEvents.push(o)
                        }
                    }(t, e);
                const c = ri(t, e),
                    l = Zn.get(i.priority),
                    d = {
                        callback: n,
                        priority: l
                    };
                for (const t of c) {
                    let e = !1;
                    for (let n = 0; n < t.length; n++)
                        if (t[n].priority < l) {
                            t.splice(n, 0, d), e = !0;
                            break
                        }
                    e || t.push(d)
                }
            }, stopListening(t, e, n) {
                const i = this[Xn];
                let o = t && ii(t);
                const r = i && o && i[o],
                    s = r && e && r.callbacks[e];
                if (!(!i || t && !r || e && !s))
                    if (n) ai(t, e, n);
                    else if (s) {
                    for (; n = s.pop();) ai(t, e, n);
                    delete r.callbacks[e]
                } else if (r) {
                    for (e in r.callbacks) this.stopListening(t, e);
                    delete i[o]
                } else {
                    for (o in i) this.stopListening(i[o].emitter);
                    delete this[Xn]
                }
            }, fire(t, ...e) {
                const n = t instanceof Jn ? t : new Jn(this, t),
                    i = n.name;
                let o = function t(e, n) {
                    let i;
                    if (!e._events || !(i = e._events[n]) || !i.callbacks.length) return n.indexOf(":") > -1 ? t(e, n.substr(0, n.lastIndexOf(":"))) : null;
                    return i.callbacks
                }(this, i);
                if (n.path.push(this), o) {
                    const t = [n, ...e];
                    o = Array.from(o);
                    for (let e = 0; e < o.length && (o[e].callback.apply(this, t), n.off.called && (delete n.off.called, ai(this, i, o[e].callback)), !n.stop.called); e++);
                }
                if (this._delegations) {
                    const t = this._delegations.get(i),
                        o = this._delegations.get("*");
                    t && si(t, n, e), o && si(o, n, e)
                }
                return n.return
            }, delegate(...t) {
                return {
                    to: (e, n) => {
                        this._delegations || (this._delegations = new Map), t.forEach(t => {
                            const i = this._delegations.get(t);
                            i ? i.set(e, n) : this._delegations.set(t, new Map([
                                [e, n]
                            ]))
                        })
                    }
                }
            }, stopDelegating(t, e) {
                if (this._delegations)
                    if (t)
                        if (e) {
                            const n = this._delegations.get(t);
                            n && n.delete(e)
                        } else this._delegations.delete(t);
                else this._delegations.clear()
            }
        };

        function ni(t, e) {
            t[ti] || (t[ti] = e || Kn())
        }

        function ii(t) {
            return t[ti]
        }

        function oi(t) {
            return t._events || Object.defineProperty(t, "_events", {
                value: {}
            }), t._events
        }

        function ri(t, e) {
            const n = oi(t)[e];
            if (!n) return [];
            let i = [n.callbacks];
            for (let e = 0; e < n.childEvents.length; e++) {
                const o = ri(t, n.childEvents[e]);
                i = i.concat(o)
            }
            return i
        }

        function si(t, e, n) {
            for (let [i, o] of t) {
                o ? "function" == typeof o && (o = o(e.name)) : o = e.name;
                const t = new Jn(e.source, o);
                t.path = [...e.path], i.fire(t, ...n)
            }
        }

        function ai(t, e, n) {
            const i = ri(t, e);
            for (const t of i)
                for (let e = 0; e < t.length; e++) t[e].callback == n && (t.splice(e, 1), e--)
        }

        function ci(t, ...e) {
            e.forEach(e => {
                Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n => {
                    if (n in t.prototype) return;
                    const i = Object.getOwnPropertyDescriptor(e, n);
                    i.enumerable = !1, Object.defineProperty(t.prototype, n, i)
                })
            })
        }

        function li(t, e) {
            const n = Math.min(t.length, e.length);
            for (let i = 0; i < n; i++)
                if (t[i] != e[i]) return i;
            return t.length == e.length ? "same" : t.length < e.length ? "prefix" : "extension"
        }
        var di = 4;
        var ui = function(t) {
            return Fn(t, di)
        };
        class hi {
            constructor() {
                this.parent = null
            }
            get index() {
                let t;
                if (!this.parent) return null;
                if (-1 == (t = this.parent.getChildIndex(this))) throw new Gn.b("view-node-not-found-in-parent: The node's parent does not contain this node.");
                return t
            }
            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }
            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }
            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }
            get document() {
                return this.parent instanceof hi ? this.parent.document : null
            }
            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.index), e = e.parent;
                return t
            }
            getAncestors(t = {
                includeSelf: !1,
                parentFirst: !1
            }) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }
            getCommonAncestor(t, e = {}) {
                const n = this.getAncestors(e),
                    i = t.getAncestors(e);
                let o = 0;
                for (; n[o] == i[o] && n[o];) o++;
                return 0 === o ? null : n[o - 1]
            }
            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(),
                    n = t.getPath(),
                    i = li(e, n);
                switch (i) {
                    case "prefix":
                        return !0;
                    case "extension":
                        return !1;
                    default:
                        return e[i] < n[i]
                }
            }
            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }
            _remove() {
                this.parent._removeChildren(this.index)
            }
            _fireChange(t, e) {
                this.fire("change:" + t, e), this.parent && this.parent._fireChange(t, e)
            }
            toJSON() {
                const t = ui(this);
                return delete t.parent, t
            }
            is(t) {
                return "node" == t
            }
        }
        ci(hi, ei);
        class fi extends hi {
            constructor(t) {
                super(), this._textData = t
            }
            is(t) {
                return "text" == t || super.is(t)
            }
            get data() {
                return this._textData
            }
            get _data() {
                return this.data
            }
            set _data(t) {
                this._fireChange("text", this), this._textData = t
            }
            isSimilar(t) {
                return t instanceof fi && (this === t || this.data === t.data)
            }
            _clone() {
                return new fi(this.data)
            }
        }
        class mi {
            constructor(t, e, n) {
                if (this.textNode = t, e < 0 || e > t.data.length) throw new Gn.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");
                if (n < 0 || e + n > t.data.length) throw new Gn.b("view-textproxy-wrong-length: Given length value is incorrect.");
                this.data = t.data.substring(e, e + n), this.offsetInText = e
            }
            get offsetSize() {
                return this.data.length
            }
            get isPartial() {
                return this.data.length !== this.textNode.data.length
            }
            get parent() {
                return this.textNode.parent
            }
            get root() {
                return this.textNode.root
            }
            get document() {
                return this.textNode.document
            }
            is(t) {
                return "textProxy" == t
            }
            getAncestors(t = {
                includeSelf: !1,
                parentFirst: !1
            }) {
                const e = [];
                let n = t.includeSelf ? this.textNode : this.parent;
                for (; null !== n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }
        }

        function pi(t) {
            const e = new Map;
            for (const n in t) e.set(n, t[n]);
            return e
        }

        function gi(t) {
            return !(!t || !t[Symbol.iterator])
        }
        class bi {
            constructor(...t) {
                this._patterns = [], this.add(...t)
            }
            add(...t) {
                for (let e of t)("string" == typeof e || e instanceof RegExp) && (e = {
                    name: e
                }), e.classes && ("string" == typeof e.classes || e.classes instanceof RegExp) && (e.classes = [e.classes]), this._patterns.push(e)
            }
            match(...t) {
                for (const e of t)
                    for (const t of this._patterns) {
                        const n = wi(e, t);
                        if (n) return {
                            element: e,
                            pattern: t,
                            match: n
                        }
                    }
                return null
            }
            matchAll(...t) {
                const e = [];
                for (const n of t)
                    for (const t of this._patterns) {
                        const i = wi(n, t);
                        i && e.push({
                            element: n,
                            pattern: t,
                            match: i
                        })
                    }
                return e.length > 0 ? e : null
            }
            getElementName() {
                if (1 !== this._patterns.length) return null;
                const t = this._patterns[0],
                    e = t.name;
                return "function" == typeof t || !e || e instanceof RegExp ? null : e
            }
        }

        function wi(t, e) {
            if ("function" == typeof e) return e(t);
            const n = {};
            return e.name && (n.name = function(t, e) {
                if (t instanceof RegExp) return t.test(e);
                return t === e
            }(e.name, t.name), !n.name) ? null : e.attributes && (n.attributes = function(t, e) {
                const n = [];
                for (const i in t) {
                    const o = t[i];
                    if (!e.hasAttribute(i)) return null; {
                        const t = e.getAttribute(i);
                        if (!0 === o) n.push(i);
                        else if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            n.push(i)
                        } else {
                            if (t !== o) return null;
                            n.push(i)
                        }
                    }
                }
                return n
            }(e.attributes, t), !n.attributes) ? null : !(e.classes && (n.classes = function(t, e) {
                const n = [];
                for (const i of t)
                    if (i instanceof RegExp) {
                        const t = e.getClassNames();
                        for (const e of t) i.test(e) && n.push(e);
                        if (0 === n.length) return null
                    } else {
                        if (!e.hasClass(i)) return null;
                        n.push(i)
                    }
                return n
            }(e.classes, t), !n.classes)) && (!(e.styles && (n.styles = function(t, e) {
                const n = [];
                for (const i in t) {
                    const o = t[i];
                    if (!e.hasStyle(i)) return null; {
                        const t = e.getStyle(i);
                        if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            n.push(i)
                        } else {
                            if (t !== o) return null;
                            n.push(i)
                        }
                    }
                }
                return n
            }(e.styles, t), !n.styles)) && n)
        }
        class _i extends hi {
            constructor(t, e, n) {
                if (super(), this.name = t, this._attrs = function(t) {
                        t = C(t) ? pi(t) : new Map(t);
                        for (const [e, n] of t) null === n ? t.delete(e) : "string" != typeof n && t.set(e, String(n));
                        return t
                    }(e), this._children = [], n && this._insertChild(0, n), this._classes = new Set, this._attrs.has("class")) {
                    const t = this._attrs.get("class");
                    vi(this._classes, t), this._attrs.delete("class")
                }
                this._styles = new Map, this._attrs.has("style") && (ki(this._styles, this._attrs.get("style")), this._attrs.delete("style")), this._customProperties = new Map
            }
            get childCount() {
                return this._children.length
            }
            get isEmpty() {
                return 0 === this._children.length
            }
            is(t, e = null) {
                return e ? "element" == t && e == this.name : "element" == t || t == this.name || super.is(t)
            }
            getChild(t) {
                return this._children[t]
            }
            getChildIndex(t) {
                return this._children.indexOf(t)
            }
            getChildren() {
                return this._children[Symbol.iterator]()
            } * getAttributeKeys() {
                this._classes.size > 0 && (yield "class"), this._styles.size > 0 && (yield "style"), yield * this._attrs.keys()
            } * getAttributes() {
                yield * this._attrs.entries(), this._classes.size > 0 && (yield ["class", this.getAttribute("class")]), this._styles.size > 0 && (yield ["style", this.getAttribute("style")])
            }
            getAttribute(t) {
                if ("class" == t) return this._classes.size > 0 ? [...this._classes].join(" ") : void 0;
                if ("style" != t) return this._attrs.get(t);
                if (this._styles.size > 0) {
                    let t = "";
                    for (const [e, n] of this._styles) t += `${e}:${n};`;
                    return t
                }
            }
            hasAttribute(t) {
                return "class" == t ? this._classes.size > 0 : "style" == t ? this._styles.size > 0 : this._attrs.has(t)
            }
            isSimilar(t) {
                if (!(t instanceof _i)) return !1;
                if (this === t) return !0;
                if (this.name != t.name) return !1;
                if (this._attrs.size !== t._attrs.size || this._classes.size !== t._classes.size || this._styles.size !== t._styles.size) return !1;
                for (const [e, n] of this._attrs)
                    if (!t._attrs.has(e) || t._attrs.get(e) !== n) return !1;
                for (const e of this._classes)
                    if (!t._classes.has(e)) return !1;
                for (const [e, n] of this._styles)
                    if (!t._styles.has(e) || t._styles.get(e) !== n) return !1;
                return !0
            }
            hasClass(...t) {
                for (const e of t)
                    if (!this._classes.has(e)) return !1;
                return !0
            }
            getClassNames() {
                return this._classes.keys()
            }
            getStyle(t) {
                return this._styles.get(t)
            }
            getStyleNames() {
                return this._styles.keys()
            }
            hasStyle(...t) {
                for (const e of t)
                    if (!this._styles.has(e)) return !1;
                return !0
            }
            findAncestor(...t) {
                const e = new bi(...t);
                let n = this.parent;
                for (; n;) {
                    if (e.match(n)) return n;
                    n = n.parent
                }
                return null
            }
            getCustomProperty(t) {
                return this._customProperties.get(t)
            } * getCustomProperties() {
                yield * this._customProperties.entries()
            }
            getIdentity() {
                const t = Array.from(this._classes).sort().join(","),
                    e = Array.from(this._styles).map(t => `${t[0]}:${t[1]}`).sort().join(";"),
                    n = Array.from(this._attrs).map(t => `${t[0]}="${t[1]}"`).sort().join(" ");
                return this.name + ("" == t ? "" : ` class="${t}"`) + ("" == e ? "" : ` style="${e}"`) + ("" == n ? "" : ` ${n}`)
            }
            _clone(t = !1) {
                const e = [];
                if (t)
                    for (const n of this.getChildren()) e.push(n._clone(t));
                const n = new this.constructor(this.name, this._attrs, e);
                return n._classes = new Set(this._classes), n._styles = new Map(this._styles), n._customProperties = new Map(this._customProperties), n.getFillerOffset = this.getFillerOffset, n
            }
            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }
            _insertChild(t, e) {
                this._fireChange("children", this);
                let n = 0;
                const i = function(t) {
                    if ("string" == typeof t) return [new fi(t)];
                    gi(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new fi(t) : t instanceof mi ? new fi(t.data) : t)
                }(e);
                for (const e of i) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, n++;
                return n
            }
            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let n = t; n < t + e; n++) this._children[n].parent = null;
                return this._children.splice(t, e)
            }
            _setAttribute(t, e) {
                e = String(e), this._fireChange("attributes", this), "class" == t ? vi(this._classes, e) : "style" == t ? ki(this._styles, e) : this._attrs.set(t, e)
            }
            _removeAttribute(t) {
                return this._fireChange("attributes", this), "class" == t ? this._classes.size > 0 && (this._classes.clear(), !0) : "style" == t ? this._styles.size > 0 && (this._styles.clear(), !0) : this._attrs.delete(t)
            }
            _addClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.add(t))
            }
            _removeClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.delete(t))
            }
            _setStyle(t, e) {
                if (this._fireChange("attributes", this), C(t)) {
                    const e = Object.keys(t);
                    for (const n of e) this._styles.set(n, t[n])
                } else this._styles.set(t, e)
            }
            _removeStyle(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._styles.delete(t))
            }
            _setCustomProperty(t, e) {
                this._customProperties.set(t, e)
            }
            _removeCustomProperty(t) {
                return this._customProperties.delete(t)
            }
        }

        function ki(t, e) {
            let n = null,
                i = 0,
                o = 0,
                r = null;
            if (t.clear(), "" !== e) {
                ";" != e.charAt(e.length - 1) && (e += ";");
                for (let s = 0; s < e.length; s++) {
                    const a = e.charAt(s);
                    if (null === n) switch (a) {
                        case ":":
                            r || (r = e.substr(i, s - i), o = s + 1);
                            break;
                        case '"':
                        case "'":
                            n = a;
                            break;
                        case ";":
                            {
                                const n = e.substr(o, s - o);
                                r && t.set(r.trim(), n.trim()), r = null, i = s + 1;
                                break
                            }
                    } else a === n && (n = null)
                }
            }
        }

        function vi(t, e) {
            const n = e.split(/\s+/);
            t.clear(), n.forEach(e => t.add(e))
        }
        class yi extends _i {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = xi
            }
            is(t, e = null) {
                return e ? "containerElement" == t && e == this.name || super.is(t, e) : "containerElement" == t || super.is(t)
            }
        }

        function xi() {
            const t = [...this.getChildren()],
                e = t[this.childCount - 1];
            if (e && e.is("element", "br")) return this.childCount;
            for (const e of t)
                if (!e.is("uiElement")) return null;
            return this.childCount
        }
        var Ai = function(t) {
            return t
        };
        var Ci = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            },
            Ti = Math.max;
        var Pi = function(t, e, n) {
            return e = Ti(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var i = arguments, o = -1, r = Ti(i.length - e, 0), s = Array(r); ++o < r;) s[o] = i[e + o];
                    o = -1;
                    for (var a = Array(e + 1); ++o < e;) a[o] = i[o];
                    return a[e] = n(s), Ci(t, this, a)
                }
        };
        var Mi = function(t) {
                return function() {
                    return t
                }
            },
            Ei = Ot ? function(t, e) {
                return Ot(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Mi(e),
                    writable: !0
                })
            } : Ai,
            Si = 800,
            Ii = 16,
            Ni = Date.now;
        var Oi = function(t) {
            var e = 0,
                n = 0;
            return function() {
                var i = Ni(),
                    o = Ii - (i - n);
                if (n = i, o > 0) {
                    if (++e >= Si) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }(Ei);
        var Ri = function(t, e) {
            return Oi(Pi(t, e, Ai), t + "")
        };
        var Di = function(t, e, n) {
            if (!z(n)) return !1;
            var i = typeof e;
            return !!("number" == i ? ue(n) && Qt(e, n.length) : "string" == i && e in n) && P(n[e], t)
        };
        var Li = function(t) {
            return Ri(function(e, n) {
                var i = -1,
                    o = n.length,
                    r = o > 1 ? n[o - 1] : void 0,
                    s = o > 2 ? n[2] : void 0;
                for (r = t.length > 3 && "function" == typeof r ? (o--, r) : void 0, s && Di(n[0], n[1], s) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++i < o;) {
                    var a = n[i];
                    a && t(e, a, i, r)
                }
                return e
            })
        }(function(t, e) {
            jt(e, be(e), t)
        });
        const ji = Symbol("observableProperties"),
            Vi = Symbol("boundObservables"),
            Bi = Symbol("boundProperties"),
            zi = {
                set(t, e) {
                    if (z(t)) return void Object.keys(t).forEach(e => {
                        this.set(e, t[e])
                    }, this);
                    Ui(this);
                    const n = this[ji];
                    if (t in this && !n.has(t)) throw new Gn.b("observable-set-cannot-override: Cannot override an existing property.");
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: () => n.get(t),
                        set(e) {
                            const i = n.get(t);
                            let o = this.fire("set:" + t, t, e, i);
                            void 0 === o && (o = e), i === o && n.has(t) || (n.set(t, o), this.fire("change:" + t, t, o, i))
                        }
                    }), this[t] = e
                }, bind(...t) {
                    if (!t.length || !Wi(t)) throw new Gn.b("observable-bind-wrong-properties: All properties must be strings.");
                    if (new Set(t).size !== t.length) throw new Gn.b("observable-bind-duplicate-properties: Properties must be unique.");
                    Ui(this);
                    const e = this[Bi];
                    t.forEach(t => {
                        if (e.has(t)) throw new Gn.b("observable-bind-rebind: Cannot bind the same property more that once.")
                    });
                    const n = new Map;
                    return t.forEach(t => {
                        const i = {
                            property: t,
                            to: []
                        };
                        e.set(t, i), n.set(t, i)
                    }), {
                        to: Hi,
                        toMany: qi,
                        _observable: this,
                        _bindProperties: t,
                        _to: [],
                        _bindings: n
                    }
                }, unbind(...t) {
                    if (!(ji in this)) return;
                    const e = this[Bi],
                        n = this[Vi];
                    if (t.length) {
                        if (!Wi(t)) throw new Gn.b("observable-unbind-wrong-properties: Properties must be strings.");
                        t.forEach(t => {
                            const i = e.get(t);
                            if (!i) return;
                            let o, r, s, a;
                            i.to.forEach(t => {
                                o = t[0], r = t[1], s = n.get(o), (a = s[r]).delete(i), a.size || delete s[r], Object.keys(s).length || (n.delete(o), this.stopListening(o, "change"))
                            }), e.delete(t)
                        })
                    } else n.forEach((t, e) => {
                        this.stopListening(e, "change")
                    }), n.clear(), e.clear()
                }, decorate(t) {
                    const e = this[t];
                    if (!e) throw new Gn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.", {
                        object: this,
                        methodName: t
                    });
                    this.on(t, (t, n) => {
                        t.return = e.apply(this, n)
                    }), this[t] = function(...e) {
                        return this.fire(t, e)
                    }
                }
            };
        Li(zi, ei);
        var Fi = zi;

        function Ui(t) {
            ji in t || (Object.defineProperty(t, ji, {
                value: new Map
            }), Object.defineProperty(t, Vi, {
                value: new Map
            }), Object.defineProperty(t, Bi, {
                value: new Map
            }))
        }

        function Hi(...t) {
            const e = function(...t) {
                    if (!t.length) throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");
                    const e = {
                        to: []
                    };
                    let n;
                    "function" == typeof t[t.length - 1] && (e.callback = t.pop());
                    return t.forEach(t => {
                        if ("string" == typeof t) n.properties.push(t);
                        else {
                            if ("object" != typeof t) throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");
                            n = {
                                observable: t,
                                properties: []
                            }, e.to.push(n)
                        }
                    }), e
                }(...t),
                n = Array.from(this._bindings.keys()),
                i = n.length;
            if (!e.callback && e.to.length > 1) throw new Gn.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.");
            if (i > 1 && e.callback) throw new Gn.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.");
            e.to.forEach(t => {
                    if (t.properties.length && t.properties.length !== i) throw new Gn.b("observable-bind-to-properties-length: The number of properties must match.");
                    t.properties.length || (t.properties = this._bindProperties)
                }), this._to = e.to, e.callback && (this._bindings.get(n[0]).callback = e.callback),
                function(t, e) {
                    e.forEach(e => {
                        const n = t[Vi];
                        let i;
                        n.get(e.observable) || t.listenTo(e.observable, "change", (o, r) => {
                            (i = n.get(e.observable)[r]) && i.forEach(e => {
                                Yi(t, e.property)
                            })
                        })
                    })
                }(this._observable, this._to),
                function(t) {
                    let e;
                    t._bindings.forEach((n, i) => {
                        t._to.forEach(o => {
                            e = o.properties[n.callback ? 0 : t._bindProperties.indexOf(i)], n.to.push([o.observable, e]),
                                function(t, e, n, i) {
                                    const o = t[Vi],
                                        r = o.get(n),
                                        s = r || {};
                                    s[i] || (s[i] = new Set);
                                    s[i].add(e), r || o.set(n, s)
                                }(t._observable, n, o.observable, e)
                        })
                    })
                }(this), this._bindProperties.forEach(t => {
                    Yi(this._observable, t)
                })
        }

        function qi(t, e, n) {
            if (this._bindings.size > 1) throw new Gn.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().");
            this.to(...function(t, e) {
                const n = t.map(t => [t, e]);
                return Array.prototype.concat.apply([], n)
            }(t, e), n)
        }

        function Wi(t) {
            return t.every(t => "string" == typeof t)
        }

        function Yi(t, e) {
            const n = t[Bi].get(e);
            let i;
            i = n.callback ? n.callback.apply(t, n.to.map(t => t[0][t[1]])) : (i = n.to[0])[0][i[1]], t.hasOwnProperty(e) ? t[e] = i : t.set(e, i)
        }
        const $i = Symbol("document");
        class Gi extends yi {
            constructor(t, e, n) {
                super(t, e, n), this.set("isReadOnly", !1), this.set("isFocused", !1)
            }
            is(t, e = null) {
                return e ? "editableElement" == t && e == this.name || super.is(t, e) : "editableElement" == t || super.is(t)
            }
            destroy() {
                this.stopListening()
            }
            get document() {
                return this.getCustomProperty($i)
            }
            set _document(t) {
                if (this.getCustomProperty($i)) throw new Gn.b("view-editableelement-document-already-set: View document is already set.");
                this._setCustomProperty($i, t), this.bind("isReadOnly").to(t), this.bind("isFocused").to(t, "isFocused", e => e && t.selection.editableElement == this), this.listenTo(t.selection, "change", () => {
                    this.isFocused = t.isFocused && t.selection.editableElement == this
                })
            }
        }
        ci(Gi, Fi);
        const Qi = Symbol("rootName");
        class Ji extends Gi {
            constructor(t) {
                super(t), this.rootName = "main"
            }
            is(t, e = null) {
                return e ? "rootElement" == t && e == this.name || super.is(t, e) : "rootElement" == t || super.is(t)
            }
            get rootName() {
                return this.getCustomProperty(Qi)
            }
            set rootName(t) {
                this._setCustomProperty(Qi, t)
            }
            set _name(t) {
                this.name = t
            }
        }
        class Ki {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new Gn.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");
                if (t.direction && "forward" != t.direction && "backward" != t.direction) throw new Gn.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", {
                    direction: t.direction
                });
                this.boundaries = t.boundaries || null, t.startPosition ? this.position = Zi._createAt(t.startPosition) : this.position = Zi._createAt(t.boundaries["backward" == t.direction ? "end" : "start"]), this.direction = t.direction || "forward", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
            }[Symbol.iterator]() {
                return this
            }
            skip(t) {
                let e, n, i;
                do {
                    i = this.position, ({
                        done: e,
                        value: n
                    } = this.next())
                } while (!e && t(n));
                e || (this.position = i)
            }
            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }
            _next() {
                let t = this.position.clone();
                const e = this.position,
                    n = t.parent;
                if (null === n.parent && t.offset === n.childCount) return {
                    done: !0
                };
                if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {
                    done: !0
                };
                let i;
                if (n instanceof fi) {
                    if (t.isAtEnd) return this.position = Zi._createAfter(n), this._next();
                    i = n.data[t.offset]
                } else i = n.getChild(t.offset);
                if (i instanceof _i) return this.shallow ? t.offset++ : t = new Zi(i, 0), this.position = t, this._formatReturnValue("elementStart", i, e, t, 1);
                if (i instanceof fi) {
                    if (this.singleCharacters) return t = new Zi(i, 0), this.position = t, this._next(); {
                        let n, o = i.data.length;
                        return i == this._boundaryEndParent ? (o = this.boundaries.end.offset, n = new mi(i, 0, o), t = Zi._createAfter(n)) : (n = new mi(i, 0, i.data.length), t.offset++), this.position = t, this._formatReturnValue("text", n, e, t, o)
                    }
                }
                if ("string" == typeof i) {
                    let i;
                    if (this.singleCharacters) i = 1;
                    else {
                        i = (n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length) - t.offset
                    }
                    const o = new mi(n, t.offset, i);
                    return t.offset += i, this.position = t, this._formatReturnValue("text", o, e, t, i)
                }
                return t = Zi._createAfter(n), this.position = t, this.ignoreElementEnd ? this._next() : this._formatReturnValue("elementEnd", n, e, t)
            }
            _previous() {
                let t = this.position.clone();
                const e = this.position,
                    n = t.parent;
                if (null === n.parent && 0 === t.offset) return {
                    done: !0
                };
                if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {
                    done: !0
                };
                let i;
                if (n instanceof fi) {
                    if (t.isAtStart) return this.position = Zi._createBefore(n), this._previous();
                    i = n.data[t.offset - 1]
                } else i = n.getChild(t.offset - 1);
                if (i instanceof _i) return this.shallow ? (t.offset--, this.position = t, this._formatReturnValue("elementStart", i, e, t, 1)) : (t = new Zi(i, i.childCount), this.position = t, this.ignoreElementEnd ? this._previous() : this._formatReturnValue("elementEnd", i, e, t));
                if (i instanceof fi) {
                    if (this.singleCharacters) return t = new Zi(i, i.data.length), this.position = t, this._previous(); {
                        let n, o = i.data.length;
                        if (i == this._boundaryStartParent) {
                            const e = this.boundaries.start.offset;
                            o = (n = new mi(i, e, i.data.length - e)).data.length, t = Zi._createBefore(n)
                        } else n = new mi(i, 0, i.data.length), t.offset--;
                        return this.position = t, this._formatReturnValue("text", n, e, t, o)
                    }
                }
                if ("string" == typeof i) {
                    let i;
                    if (this.singleCharacters) i = 1;
                    else {
                        const e = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                        i = t.offset - e
                    }
                    t.offset -= i;
                    const o = new mi(n, t.offset, i);
                    return this.position = t, this._formatReturnValue("text", o, e, t, i)
                }
                return t = Zi._createBefore(n), this.position = t, this._formatReturnValue("elementStart", n, e, t, 1)
            }
            _formatReturnValue(t, e, n, i, o) {
                return e instanceof mi && (e.offsetInText + e.data.length == e.textNode.data.length && ("forward" != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? n = Zi._createAfter(e.textNode) : (i = Zi._createAfter(e.textNode), this.position = i)), 0 === e.offsetInText && ("backward" != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? n = Zi._createBefore(e.textNode) : (i = Zi._createBefore(e.textNode), this.position = i))), {
                    done: !1,
                    value: {
                        type: t,
                        item: e,
                        previousPosition: n,
                        nextPosition: i,
                        length: o
                    }
                }
            }
        }
        class Zi {
            constructor(t, e) {
                this.parent = t, this.offset = e
            }
            get nodeAfter() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset) || null
            }
            get nodeBefore() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset - 1) || null
            }
            get isAtStart() {
                return 0 === this.offset
            }
            get isAtEnd() {
                const t = this.parent.is("text") ? this.parent.data.length : this.parent.childCount;
                return this.offset === t
            }
            get root() {
                return this.parent.root
            }
            get editableElement() {
                let t = this.parent;
                for (; !(t instanceof Gi);) {
                    if (!t.parent) return null;
                    t = t.parent
                }
                return t
            }
            getShiftedBy(t) {
                const e = Zi._createAt(this),
                    n = e.offset + t;
                return e.offset = n < 0 ? 0 : n, e
            }
            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const n = new Ki(e);
                return n.skip(t), n.position
            }
            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({
                    includeSelf: !0
                })
            }
            getCommonAncestor(t) {
                const e = this.getAncestors(),
                    n = t.getAncestors();
                let i = 0;
                for (; e[i] == n[i] && e[i];) i++;
                return 0 === i ? null : e[i - 1]
            }
            isEqual(t) {
                return this.parent == t.parent && this.offset == t.offset
            }
            isBefore(t) {
                return "before" == this.compareWith(t)
            }
            isAfter(t) {
                return "after" == this.compareWith(t)
            }
            compareWith(t) {
                if (this.root !== t.root) return "different";
                if (this.isEqual(t)) return "same";
                const e = this.parent.is("node") ? this.parent.getPath() : [],
                    n = t.parent.is("node") ? t.parent.getPath() : [];
                e.push(this.offset), n.push(t.offset);
                const i = li(e, n);
                switch (i) {
                    case "prefix":
                        return "before";
                    case "extension":
                        return "after";
                    default:
                        return e[i] < n[i] ? "before" : "after"
                }
            }
            getWalker(t = {}) {
                return t.startPosition = this, new Ki(t)
            }
            clone() {
                return new Zi(this.parent, this.offset)
            }
            static _createAt(t, e) {
                if (t instanceof Zi) return new this(t.parent, t.offset); {
                    const n = t;
                    if ("end" == e) e = n.is("text") ? n.data.length : n.childCount;
                    else {
                        if ("before" == e) return this._createBefore(n);
                        if ("after" == e) return this._createAfter(n);
                        if (0 !== e && !e) throw new Gn.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.")
                    }
                    return new Zi(n, e)
                }
            }
            static _createAfter(t) {
                if (t.is("textProxy")) return new Zi(t.textNode, t.offsetInText + t.data.length);
                if (!t.parent) throw new Gn.b("view-position-after-root: You can not make position after root.", {
                    root: t
                });
                return new Zi(t.parent, t.index + 1)
            }
            static _createBefore(t) {
                if (t.is("textProxy")) return new Zi(t.textNode, t.offsetInText);
                if (!t.parent) throw new Gn.b("view-position-before-root: You can not make position before root.", {
                    root: t
                });
                return new Zi(t.parent, t.index)
            }
        }
        class Xi {
            constructor(t, e = null) {
                this.start = t.clone(), this.end = e ? e.clone() : t.clone()
            } * [Symbol.iterator]() {
                yield * new Ki({
                    boundaries: this,
                    ignoreElementEnd: !0
                })
            }
            get isCollapsed() {
                return this.start.isEqual(this.end)
            }
            get isFlat() {
                return this.start.parent === this.end.parent
            }
            get root() {
                return this.start.root
            }
            getEnlarged() {
                let t = this.start.getLastMatchingPosition(to, {
                        direction: "backward"
                    }),
                    e = this.end.getLastMatchingPosition(to);
                return t.parent.is("text") && t.isAtStart && (t = Zi._createBefore(t.parent)), e.parent.is("text") && e.isAtEnd && (e = Zi._createAfter(e.parent)), new Xi(t, e)
            }
            getTrimmed() {
                let t = this.start.getLastMatchingPosition(to);
                if (t.isAfter(this.end) || t.isEqual(this.end)) return new Xi(t, t);
                let e = this.end.getLastMatchingPosition(to, {
                    direction: "backward"
                });
                const n = t.nodeAfter,
                    i = e.nodeBefore;
                return n && n.is("text") && (t = new Zi(n, 0)), i && i.is("text") && (e = new Zi(i, i.data.length)), new Xi(t, e)
            }
            isEqual(t) {
                return this == t || this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }
            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }
            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    i = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return n && i
            }
            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new Xi(this.start, t.start)), this.containsPosition(t.end) && e.push(new Xi(t.end, this.end))) : e.push(this.clone()), e
            }
            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start,
                        n = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new Xi(e, n)
                }
                return null
            }
            getWalker(t = {}) {
                return t.boundaries = this, new Ki(t)
            }
            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }
            clone() {
                return new Xi(this.start, this.end)
            } * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new Ki(t);
                for (const t of e) yield t.item
            } * getPositions(t = {}) {
                t.boundaries = this;
                const e = new Ki(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }
            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }
            static _createFromParentsAndOffsets(t, e, n, i) {
                return new this(new Zi(t, e), new Zi(n, i))
            }
            static _createFromPositionAndShift(t, e) {
                const n = t,
                    i = t.getShiftedBy(e);
                return e > 0 ? new this(n, i) : new this(i, n)
            }
            static _createIn(t) {
                return this._createFromParentsAndOffsets(t, 0, t, t.childCount)
            }
            static _createOn(t) {
                const e = t.is("textProxy") ? t.offsetSize : 1;
                return this._createFromPositionAndShift(Zi._createBefore(t), e)
            }
        }

        function to(t) {
            return !(!t.item.is("attributeElement") && !t.item.is("uiElement"))
        }

        function eo(t) {
            let e = 0;
            for (const n of t) e++;
            return e
        }
        class no {
            constructor(t = null, e, n) {
                this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = "", this.setTo(t, e, n)
            }
            get isFake() {
                return this._isFake
            }
            get fakeSelectionLabel() {
                return this._fakeSelectionLabel
            }
            get anchor() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.end : t.start).clone()
            }
            get focus() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.start : t.end).clone()
            }
            get isCollapsed() {
                return 1 === this.rangeCount && this._ranges[0].isCollapsed
            }
            get rangeCount() {
                return this._ranges.length
            }
            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }
            get editableElement() {
                return this.anchor ? this.anchor.editableElement : null
            } * getRanges() {
                for (const t of this._ranges) yield t.clone()
            }
            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? t.clone() : null
            }
            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? t.clone() : null
            }
            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }
            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }
            isEqual(t) {
                if (this.isFake != t.isFake) return !1;
                if (this.isFake && this.fakeSelectionLabel != t.fakeSelectionLabel) return !1;
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let n = !1;
                    for (const i of t._ranges)
                        if (e.isEqual(i)) {
                            n = !0;
                            break
                        }
                    if (!n) return !1
                }
                return !0
            }
            isSimilar(t) {
                if (this.isBackward != t.isBackward) return !1;
                const e = eo(this.getRanges());
                if (e != eo(t.getRanges())) return !1;
                if (0 == e) return !0;
                for (let e of this.getRanges()) {
                    e = e.getTrimmed();
                    let n = !1;
                    for (let i of t.getRanges())
                        if (i = i.getTrimmed(), e.start.isEqual(i.start) && e.end.isEqual(i.end)) {
                            n = !0;
                            break
                        }
                    if (!n) return !1
                }
                return !0
            }
            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange();
                let e = t.start.nodeAfter,
                    n = t.end.nodeBefore;
                return t.start.parent.is("text") && t.start.isAtEnd && t.start.parent.nextSibling && (e = t.start.parent.nextSibling), t.end.parent.is("text") && t.end.isAtStart && t.end.parent.previousSibling && (n = t.end.parent.previousSibling), e instanceof _i && e == n ? e : null
            }
            setTo(t, e, n) {
                if (null === t) this._setRanges([]), this._setFakeOptions(e);
                else if (t instanceof no || t instanceof io) this._setRanges(t.getRanges(), t.isBackward), this._setFakeOptions({
                    fake: t.isFake,
                    label: t.fakeSelectionLabel
                });
                else if (t instanceof Xi) this._setRanges([t], e && e.backward), this._setFakeOptions(e);
                else if (t instanceof Zi) this._setRanges([new Xi(t)]), this._setFakeOptions(e);
                else if (t instanceof hi) {
                    const i = !!n && !!n.backward;
                    let o;
                    if (void 0 === e) throw new Gn.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");
                    o = "in" == e ? Xi._createIn(t) : "on" == e ? Xi._createOn(t) : new Xi(Zi._createAt(t, e)), this._setRanges([o], i), this._setFakeOptions(n)
                } else {
                    if (!gi(t)) throw new Gn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.");
                    this._setRanges(t, e && e.backward), this._setFakeOptions(e)
                }
                this.fire("change")
            }
            setFocus(t, e) {
                if (null === this.anchor) throw new Gn.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");
                const n = Zi._createAt(t, e);
                if ("same" == n.compareWith(this.focus)) return;
                const i = this.anchor;
                this._ranges.pop(), "before" == n.compareWith(i) ? this._addRange(new Xi(n, i), !0) : this._addRange(new Xi(i, n)), this.fire("change")
            }
            is(t) {
                return "selection" == t
            }
            _setRanges(t, e = !1) {
                t = Array.from(t), this._ranges = [];
                for (const e of t) this._addRange(e);
                this._lastRangeBackward = !!e
            }
            _setFakeOptions(t = {}) {
                this._isFake = !!t.fake, this._fakeSelectionLabel = t.fake && t.label || ""
            }
            _addRange(t, e = !1) {
                if (!(t instanceof Xi)) throw new Gn.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range");
                this._pushRange(t), this._lastRangeBackward = !!e
            }
            _pushRange(t) {
                for (const e of this._ranges)
                    if (t.isIntersecting(e)) throw new Gn.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.", {
                        addedRange: t,
                        intersectingRange: e
                    });
                this._ranges.push(new Xi(t.start, t.end))
            }
        }
        ci(no, ei);
        class io {
            constructor(t = null, e, n) {
                this._selection = new no, this._selection.delegate("change").to(this), this._selection.setTo(t, e, n)
            }
            get isFake() {
                return this._selection.isFake
            }
            get fakeSelectionLabel() {
                return this._selection.fakeSelectionLabel
            }
            get anchor() {
                return this._selection.anchor
            }
            get focus() {
                return this._selection.focus
            }
            get isCollapsed() {
                return this._selection.isCollapsed
            }
            get rangeCount() {
                return this._selection.rangeCount
            }
            get isBackward() {
                return this._selection.isBackward
            }
            get editableElement() {
                return this._selection.editableElement
            }
            get _ranges() {
                return this._selection._ranges
            } * getRanges() {
                yield * this._selection.getRanges()
            }
            getFirstRange() {
                return this._selection.getFirstRange()
            }
            getLastRange() {
                return this._selection.getLastRange()
            }
            getFirstPosition() {
                return this._selection.getFirstPosition()
            }
            getLastPosition() {
                return this._selection.getLastPosition()
            }
            getSelectedElement() {
                return this._selection.getSelectedElement()
            }
            isEqual(t) {
                return this._selection.isEqual(t)
            }
            isSimilar(t) {
                return this._selection.isSimilar(t)
            }
            is(t) {
                return "selection" == t || "documentSelection" == t
            }
            _setTo(t, e, n) {
                this._selection.setTo(t, e, n)
            }
            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }
        }
        ci(io, ei);
        class oo {
            constructor(t = {}) {
                this._items = [], this._itemMap = new Map, this._idProperty = t.idProperty || "id", this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap, this._skippedIndexesFromExternal = []
            }
            get length() {
                return this._items.length
            }
            get first() {
                return this._items[0] || null
            }
            get last() {
                return this._items[this.length - 1] || null
            }
            add(t, e) {
                let n;
                const i = this._idProperty;
                if (i in t) {
                    if ("string" != typeof(n = t[i])) throw new Gn.b("collection-add-invalid-id");
                    if (this.get(n)) throw new Gn.b("collection-add-item-already-exists")
                } else t[i] = n = Kn();
                if (void 0 === e) e = this._items.length;
                else if (e > this._items.length || e < 0) throw new Gn.b("collection-add-item-invalid-index");
                return this._items.splice(e, 0, t), this._itemMap.set(n, t), this.fire("add", t, e), this
            }
            get(t) {
                let e;
                if ("string" == typeof t) e = this._itemMap.get(t);
                else {
                    if ("number" != typeof t) throw new Gn.b("collection-get-invalid-arg: Index or id must be given.");
                    e = this._items[t]
                }
                return e || null
            }
            has(t) {
                if ("string" == typeof t) return this._itemMap.has(t); {
                    const e = t[this._idProperty];
                    return this._itemMap.has(e)
                }
            }
            getIndex(t) {
                let e;
                return e = "string" == typeof t ? this._itemMap.get(t) : t, this._items.indexOf(e)
            }
            remove(t) {
                let e, n, i, o = !1;
                const r = this._idProperty;
                if ("string" == typeof t ? (n = t, o = !(i = this._itemMap.get(n)), i && (e = this._items.indexOf(i))) : "number" == typeof t ? (e = t, o = !(i = this._items[e]), i && (n = i[r])) : (n = (i = t)[r], o = -1 == (e = this._items.indexOf(i)) || !this._itemMap.get(n)), o) throw new Gn.b("collection-remove-404: Item not found.");
                this._items.splice(e, 1), this._itemMap.delete(n);
                const s = this._bindToInternalToExternalMap.get(i);
                return this._bindToInternalToExternalMap.delete(i), this._bindToExternalToInternalMap.delete(s), this.fire("remove", i, e), i
            }
            map(t, e) {
                return this._items.map(t, e)
            }
            find(t, e) {
                return this._items.find(t, e)
            }
            filter(t, e) {
                return this._items.filter(t, e)
            }
            clear() {
                for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
            }
            bindTo(t) {
                if (this._bindToCollection) throw new Gn.b("collection-bind-to-rebind: The collection cannot be bound more than once.");
                return this._bindToCollection = t, {
                    as: t => {
                        this._setUpBindToBinding(e => new t(e))
                    },
                    using: t => {
                        "function" == typeof t ? this._setUpBindToBinding(e => t(e)) : this._setUpBindToBinding(e => e[t])
                    }
                }
            }
            _setUpBindToBinding(t) {
                const e = this._bindToCollection,
                    n = (n, i, o) => {
                        const r = e._bindToCollection == this,
                            s = e._bindToInternalToExternalMap.get(i);
                        if (r && s) this._bindToExternalToInternalMap.set(i, s), this._bindToInternalToExternalMap.set(s, i);
                        else {
                            const n = t(i);
                            if (!n) return void this._skippedIndexesFromExternal.push(o);
                            let r = o;
                            for (const t of this._skippedIndexesFromExternal) o > t && r--;
                            for (const t of e._skippedIndexesFromExternal) r >= t && r++;
                            this._bindToExternalToInternalMap.set(i, n), this._bindToInternalToExternalMap.set(n, i), this.add(n, r);
                            for (let t = 0; t < e._skippedIndexesFromExternal.length; t++) r <= e._skippedIndexesFromExternal[t] && e._skippedIndexesFromExternal[t]++
                        }
                    };
                for (const t of e) n(0, t, e.getIndex(t));
                this.listenTo(e, "add", n), this.listenTo(e, "remove", (t, e, n) => {
                    const i = this._bindToExternalToInternalMap.get(e);
                    i && this.remove(i), this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((t, e) => (n < e && t.push(e - 1), n > e && t.push(e), t), [])
                })
            }[Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }
        }
        ci(oo, ei);
        class ro {
            constructor() {
                this.selection = new io, this.roots = new oo({
                    idProperty: "rootName"
                }), this.set("isReadOnly", !1), this.set("isFocused", !1), this.set("isComposing", !1), this._postFixers = new Set
            }
            getRoot(t = "main") {
                return this.roots.get(t)
            }
            registerPostFixer(t) {
                this._postFixers.add(t)
            }
            destroy() {
                this.roots.map(t => t.destroy()), this.stopListening()
            }
            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const n of this._postFixers)
                        if (e = n(t)) break
                } while (e)
            }
        }
        ci(ro, Fi);
        const so = 10;
        class ao extends _i {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = co, this._priority = so, this._id = null, this._clonesGroup = null
            }
            get priority() {
                return this._priority
            }
            get id() {
                return this._id
            }
            getElementsWithSameId() {
                if (null === this.id) throw new Gn.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.");
                return new Set(this._clonesGroup)
            }
            is(t, e = null) {
                return e ? "attributeElement" == t && e == this.name || super.is(t, e) : "attributeElement" == t || super.is(t)
            }
            isSimilar(t) {
                return null !== this.id || null !== t.id ? this.id === t.id : super.isSimilar(t) && this.priority == t.priority
            }
            _clone(t) {
                const e = super._clone(t);
                return e._priority = this._priority, e._id = this._id, e
            }
        }

        function co() {
            if (lo(this)) return null;
            let t = this.parent;
            for (; t && t.is("attributeElement");) {
                if (lo(t) > 1) return null;
                t = t.parent
            }
            return !t || lo(t) > 1 ? null : this.childCount
        }

        function lo(t) {
            return Array.from(t.getChildren()).filter(t => !t.is("uiElement")).length
        }
        ao.DEFAULT_PRIORITY = so;
        class uo extends _i {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = ho
            }
            is(t, e = null) {
                return e ? "emptyElement" == t && e == this.name || super.is(t, e) : "emptyElement" == t || super.is(t)
            }
            _insertChild(t, e) {
                if (e && (e instanceof hi || Array.from(e).length > 0)) throw new Gn.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.")
            }
        }

        function ho() {
            return null
        }
        const fo = navigator.userAgent.toLowerCase();
        var mo = {
            isMac: function(t) {
                return t.indexOf("macintosh") > -1
            }(fo),
            isEdge: function(t) {
                return !!t.match(/edge\/(\d+.?\d*)/)
            }(fo),
            isGecko: function(t) {
                return !!t.match(/gecko\/\d+/)
            }(fo)
        };
        const po = {
                "⌘": "ctrl",
                "⇧": "shift",
                "⌥": "alt"
            },
            go = {
                ctrl: "⌘",
                shift: "⇧",
                alt: "⌥"
            },
            bo = function() {
                const t = {
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    backspace: 8,
                    delete: 46,
                    enter: 13,
                    space: 32,
                    esc: 27,
                    tab: 9,
                    ctrl: 1114112,
                    cmd: 1114112,
                    shift: 2228224,
                    alt: 4456448
                };
                for (let e = 65; e <= 90; e++) {
                    const n = String.fromCharCode(e);
                    t[n.toLowerCase()] = e
                }
                for (let e = 48; e <= 57; e++) t[e - 48] = e;
                for (let e = 112; e <= 123; e++) t["f" + (e - 111)] = e;
                return t
            }();

        function wo(t) {
            let e;
            if ("string" == typeof t) {
                if (!(e = bo[t.toLowerCase()])) throw new Gn.b("keyboard-unknown-key: Unknown key name.", {
                    key: t
                })
            } else e = t.keyCode + (t.altKey ? bo.alt : 0) + (t.ctrlKey ? bo.ctrl : 0) + (t.shiftKey ? bo.shift : 0);
            return e
        }

        function _o(t) {
            return "string" == typeof t && (t = ko(t)), t.map(t => "string" == typeof t ? wo(t) : t).reduce((t, e) => e + t, 0)
        }

        function ko(t) {
            return t.split(/\s*\+\s*/)
        }
        class vo extends _i {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = xo
            }
            is(t, e = null) {
                return e ? "uiElement" == t && e == this.name || super.is(t, e) : "uiElement" == t || super.is(t)
            }
            _insertChild(t, e) {
                if (e && (e instanceof hi || Array.from(e).length > 0)) throw new Gn.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.")
            }
            render(t) {
                return this.toDomElement(t)
            }
            toDomElement(t) {
                const e = t.createElement(this.name);
                for (const t of this.getAttributeKeys()) e.setAttribute(t, this.getAttribute(t));
                return e
            }
        }

        function yo(t) {
            t.document.on("keydown", (e, n) => (function(t, e, n) {
                if (e.keyCode == bo.arrowright) {
                    const t = e.domTarget.ownerDocument.defaultView.getSelection(),
                        i = 1 == t.rangeCount && t.getRangeAt(0).collapsed;
                    if (i || e.shiftKey) {
                        const e = t.focusNode,
                            o = t.focusOffset,
                            r = n.domPositionToView(e, o);
                        if (null === r) return;
                        let s = !1;
                        const a = r.getLastMatchingPosition(t => (t.item.is("uiElement") && (s = !0), !(!t.item.is("uiElement") && !t.item.is("attributeElement"))));
                        if (s) {
                            const e = n.viewPositionToDom(a);
                            i ? t.collapse(e.parent, e.offset) : t.extend(e.parent, e.offset)
                        }
                    }
                }
            })(0, n, t.domConverter))
        }

        function xo() {
            return null
        }
        class Ao {
            constructor(t) {
                this._children = [], t && this._insertChild(0, t)
            }[Symbol.iterator]() {
                return this._children[Symbol.iterator]()
            }
            get childCount() {
                return this._children.length
            }
            get isEmpty() {
                return 0 === this.childCount
            }
            get root() {
                return this
            }
            get parent() {
                return null
            }
            is(t) {
                return "documentFragment" == t
            }
            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }
            getChild(t) {
                return this._children[t]
            }
            getChildIndex(t) {
                return this._children.indexOf(t)
            }
            getChildren() {
                return this._children[Symbol.iterator]()
            }
            _insertChild(t, e) {
                this._fireChange("children", this);
                let n = 0;
                const i = function(t) {
                    if ("string" == typeof t) return [new fi(t)];
                    gi(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new fi(t) : t instanceof mi ? new fi(t.data) : t)
                }(e);
                for (const e of i) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, n++;
                return n
            }
            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let n = t; n < t + e; n++) this._children[n].parent = null;
                return this._children.splice(t, e)
            }
            _fireChange(t, e) {
                this.fire("change:" + t, e)
            }
        }
        ci(Ao, ei);
        class Co {
            constructor(t) {
                this.document = t, this._cloneGroups = new Map
            }
            setSelection(t, e, n) {
                this.document.selection._setTo(t, e, n)
            }
            setSelectionFocus(t, e) {
                this.document.selection._setFocus(t, e)
            }
            createText(t) {
                return new fi(t)
            }
            createAttributeElement(t, e, n = {}) {
                const i = new ao(t, e);
                return n.priority && (i._priority = n.priority), n.id && (i._id = n.id), i
            }
            createContainerElement(t, e) {
                return new yi(t, e)
            }
            createEditableElement(t, e) {
                const n = new Gi(t, e);
                return n._document = this.document, n
            }
            createEmptyElement(t, e) {
                return new uo(t, e)
            }
            createUIElement(t, e, n) {
                const i = new vo(t, e);
                return n && (i.render = n), i
            }
            setAttribute(t, e, n) {
                n._setAttribute(t, e)
            }
            removeAttribute(t, e) {
                e._removeAttribute(t)
            }
            addClass(t, e) {
                e._addClass(t)
            }
            removeClass(t, e) {
                e._removeClass(t)
            }
            setStyle(t, e, n) {
                C(t) && void 0 === n && (n = e), n._setStyle(t, e)
            }
            removeStyle(t, e) {
                e._removeStyle(t)
            }
            setCustomProperty(t, e, n) {
                n._setCustomProperty(t, e)
            }
            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }
            breakAttributes(t) {
                return t instanceof Zi ? this._breakAttributes(t) : this._breakAttributesRange(t)
            }
            breakContainer(t) {
                const e = t.parent;
                if (!e.is("containerElement")) throw new Gn.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.");
                if (!e.parent) throw new Gn.b("view-writer-break-root: Trying to break root element.");
                if (t.isAtStart) return Zi._createBefore(e);
                if (!t.isAtEnd) {
                    const n = e._clone(!1);
                    this.insert(Zi._createAfter(e), n);
                    const i = new Xi(t, Zi._createAt(e, "end")),
                        o = new Zi(n, 0);
                    this.move(i, o)
                }
                return Zi._createAfter(e)
            }
            mergeAttributes(t) {
                const e = t.offset,
                    n = t.parent;
                if (n.is("text")) return t;
                if (n.is("attributeElement") && 0 === n.childCount) {
                    const t = n.parent,
                        e = n.index;
                    return n._remove(), this._removeFromClonedElementsGroup(n), this.mergeAttributes(new Zi(t, e))
                }
                const i = n.getChild(e - 1),
                    o = n.getChild(e);
                if (!i || !o) return t;
                if (i.is("text") && o.is("text")) return So(i, o);
                if (i.is("attributeElement") && o.is("attributeElement") && i.isSimilar(o)) {
                    const t = i.childCount;
                    return i._appendChild(o.getChildren()), o._remove(), this._removeFromClonedElementsGroup(o), this.mergeAttributes(new Zi(i, t))
                }
                return t
            }
            mergeContainers(t) {
                const e = t.nodeBefore,
                    n = t.nodeAfter;
                if (!(e && n && e.is("containerElement") && n.is("containerElement"))) throw new Gn.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.");
                const i = e.getChild(e.childCount - 1),
                    o = i instanceof fi ? Zi._createAt(i, "end") : Zi._createAt(e, "end");
                return this.move(Xi._createIn(n), Zi._createAt(e, "end")), this.remove(Xi._createOn(n)), o
            }
            insert(t, e) {
                (function t(e) {
                    for (const n of e) {
                        if (!Io.some(t => n instanceof t)) throw new Gn.b("view-writer-insert-invalid-node");
                        n.is("text") || t(n.getChildren())
                    }
                })(e = gi(e) ? [...e] : [e]);
                const n = To(t);
                if (!n) throw new Gn.b("view-writer-invalid-position-container");
                const i = this._breakAttributes(t, !0),
                    o = n._insertChild(i.offset, e);
                for (const t of e) this._addToClonedElementsGroup(t);
                const r = i.getShiftedBy(o),
                    s = this.mergeAttributes(i);
                if (0 === o) return new Xi(s, s); {
                    s.isEqual(i) || r.offset--;
                    const t = this.mergeAttributes(r);
                    return new Xi(s, t)
                }
            }
            remove(t) {
                const e = t instanceof Xi ? t : Xi._createOn(t);
                if (Oo(e), e.isCollapsed) return new Ao;
                const {
                    start: n,
                    end: i
                } = this._breakAttributesRange(e, !0), o = n.parent, r = i.offset - n.offset, s = o._removeChildren(n.offset, r);
                for (const t of s) this._removeFromClonedElementsGroup(t);
                const a = this.mergeAttributes(n);
                return e.start = a, e.end = a.clone(), new Ao(s)
            }
            clear(t, e) {
                Oo(t);
                const n = t.getWalker({
                    direction: "backward",
                    ignoreElementEnd: !0
                });
                for (const i of n) {
                    const n = i.item;
                    let o;
                    if (n.is("element") && e.isSimilar(n)) o = Xi._createOn(n);
                    else if (!i.nextPosition.isAfter(t.start) && n.is("textProxy")) {
                        const t = n.getAncestors().find(t => t.is("element") && e.isSimilar(t));
                        t && (o = Xi._createIn(t))
                    }
                    o && (o.end.isAfter(t.end) && (o.end = t.end), o.start.isBefore(t.start) && (o.start = t.start), this.remove(o))
                }
            }
            move(t, e) {
                let n;
                if (e.isAfter(t.end)) {
                    const i = (e = this._breakAttributes(e, !0)).parent,
                        o = i.childCount;
                    t = this._breakAttributesRange(t, !0), n = this.remove(t), e.offset += i.childCount - o
                } else n = this.remove(t);
                return this.insert(e, n)
            }
            wrap(t, e) {
                if (!(e instanceof ao)) throw new Gn.b("view-writer-wrap-invalid-attribute");
                if (Oo(t), t.isCollapsed) {
                    let n = t.start;
                    n.parent.is("element") && ! function(t) {
                        return Array.from(t.getChildren()).some(t => !t.is("uiElement"))
                    }(n.parent) && (n = n.getLastMatchingPosition(t => t.item.is("uiElement"))), n = this._wrapPosition(n, e);
                    const i = this.document.selection;
                    return i.isCollapsed && i.getFirstPosition().isEqual(t.start) && this.setSelection(n), new Xi(n)
                }
                return this._wrapRange(t, e)
            }
            unwrap(t, e) {
                if (!(e instanceof ao)) throw new Gn.b("view-writer-unwrap-invalid-attribute");
                if (Oo(t), t.isCollapsed) return t;
                const {
                    start: n,
                    end: i
                } = this._breakAttributesRange(t, !0);
                if (i.isEqual(n.getShiftedBy(1))) {
                    const t = n.nodeAfter;
                    if (!e.isSimilar(t) && t instanceof ao && this._unwrapAttributeElement(e, t)) {
                        const t = this.mergeAttributes(n);
                        t.isEqual(n) || i.offset--;
                        const e = this.mergeAttributes(i);
                        return new Xi(t, e)
                    }
                }
                const o = n.parent,
                    r = this._unwrapChildren(o, n.offset, i.offset, e),
                    s = this.mergeAttributes(r.start);
                s.isEqual(r.start) || r.end.offset--;
                const a = this.mergeAttributes(r.end);
                return new Xi(s, a)
            }
            rename(t, e) {
                const n = new yi(t, e.getAttributes());
                return this.insert(Zi._createAfter(e), n), this.move(Xi._createIn(e), Zi._createAt(n, 0)), this.remove(Xi._createOn(e)), n
            }
            clearClonedElementsGroup(t) {
                this._cloneGroups.delete(t)
            }
            createPositionAt(t, e) {
                return Zi._createAt(t, e)
            }
            createPositionAfter(t) {
                return Zi._createAfter(t)
            }
            createPositionBefore(t) {
                return Zi._createBefore(t)
            }
            createRange(t, e) {
                return new Xi(t, e)
            }
            createRangeOn(t) {
                return Xi._createOn(t)
            }
            createRangeIn(t) {
                return Xi._createIn(t)
            }
            createSelection(t, e, n) {
                return new no(t, e, n)
            }
            _wrapChildren(t, e, n, i) {
                let o = e;
                const r = [];
                for (; o < n;) {
                    const e = t.getChild(o),
                        n = e.is("text"),
                        s = e.is("attributeElement"),
                        a = e.is("emptyElement"),
                        c = e.is("uiElement");
                    if (n || a || c || s && Po(i, e)) {
                        const n = i._clone();
                        e._remove(), n._appendChild(e), t._insertChild(o, n), this._addToClonedElementsGroup(n), r.push(new Zi(t, o))
                    } else s && this._wrapChildren(e, 0, e.childCount, i);
                    o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, n--)
                }
                return Xi._createFromParentsAndOffsets(t, e, t, n)
            }
            _unwrapChildren(t, e, n, i) {
                let o = e;
                const r = [];
                for (; o < n;) {
                    const e = t.getChild(o);
                    if (e.isSimilar(i)) {
                        const i = e.getChildren(),
                            s = e.childCount;
                        e._remove(), t._insertChild(o, i), this._removeFromClonedElementsGroup(e), r.push(new Zi(t, o), new Zi(t, o + s)), o += s, n += s - 1
                    } else e.is("attributeElement") && this._unwrapChildren(e, 0, e.childCount, i), o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e || t.offset == n) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, n--)
                }
                return Xi._createFromParentsAndOffsets(t, e, t, n)
            }
            _wrapRange(t, e) {
                if (function(t) {
                        return t.start.parent == t.end.parent && t.start.parent.is("attributeElement") && 0 === t.start.offset && t.end.offset === t.start.parent.childCount
                    }(t) && this._wrapAttributeElement(e, t.start.parent)) {
                    const e = t.start.parent,
                        n = this.mergeAttributes(Zi._createAfter(e)),
                        i = this.mergeAttributes(Zi._createBefore(e));
                    return new Xi(i, n)
                }
                const {
                    start: n,
                    end: i
                } = this._breakAttributesRange(t, !0);
                if (i.isEqual(n.getShiftedBy(1))) {
                    const t = n.nodeAfter;
                    if (t instanceof ao && this._wrapAttributeElement(e, t)) {
                        const t = this.mergeAttributes(n);
                        t.isEqual(n) || i.offset--;
                        const e = this.mergeAttributes(i);
                        return new Xi(t, e)
                    }
                }
                const o = n.parent,
                    r = this._unwrapChildren(o, n.offset, i.offset, e),
                    s = this._wrapChildren(o, r.start.offset, r.end.offset, e),
                    a = this.mergeAttributes(s.start);
                a.isEqual(s.start) || s.end.offset--;
                const c = this.mergeAttributes(s.end);
                return new Xi(a, c)
            }
            _wrapPosition(t, e) {
                if (e.isSimilar(t.parent)) return Mo(t.clone());
                t.parent.is("text") && (t = Eo(t));
                const n = this.createAttributeElement();
                n._priority = Number.POSITIVE_INFINITY, n.isSimilar = (() => !1), t.parent._insertChild(t.offset, n);
                const i = new Xi(t, t.getShiftedBy(1));
                this.wrap(i, e);
                const o = new Zi(n.parent, n.index);
                n._remove();
                const r = o.nodeBefore,
                    s = o.nodeAfter;
                return r instanceof fi && s instanceof fi ? So(r, s) : Mo(o)
            }
            _wrapAttributeElement(t, e) {
                if (!Ro(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const n of t.getAttributeKeys())
                    if ("class" !== n && "style" !== n && e.hasAttribute(n) && e.getAttribute(n) !== t.getAttribute(n)) return !1;
                for (const n of t.getStyleNames())
                    if (e.hasStyle(n) && e.getStyle(n) !== t.getStyle(n)) return !1;
                for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && (e.hasAttribute(n) || this.setAttribute(n, t.getAttribute(n), e));
                for (const n of t.getStyleNames()) e.hasStyle(n) || this.setStyle(n, t.getStyle(n), e);
                for (const n of t.getClassNames()) e.hasClass(n) || this.addClass(n, e);
                return !0
            }
            _unwrapAttributeElement(t, e) {
                if (!Ro(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const n of t.getAttributeKeys())
                    if ("class" !== n && "style" !== n && (!e.hasAttribute(n) || e.getAttribute(n) !== t.getAttribute(n))) return !1;
                if (!e.hasClass(...t.getClassNames())) return !1;
                for (const n of t.getStyleNames())
                    if (!e.hasStyle(n) || e.getStyle(n) !== t.getStyle(n)) return !1;
                for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && this.removeAttribute(n, e);
                return this.removeClass(Array.from(t.getClassNames()), e), this.removeStyle(Array.from(t.getStyleNames()), e), !0
            }
            _breakAttributesRange(t, e = !1) {
                const n = t.start,
                    i = t.end;
                if (Oo(t), t.isCollapsed) {
                    const n = this._breakAttributes(t.start, e);
                    return new Xi(n, n)
                }
                const o = this._breakAttributes(i, e),
                    r = o.parent.childCount,
                    s = this._breakAttributes(n, e);
                return o.offset += o.parent.childCount - r, new Xi(s, o)
            }
            _breakAttributes(t, e = !1) {
                const n = t.offset,
                    i = t.parent;
                if (t.parent.is("emptyElement")) throw new Gn.b("view-writer-cannot-break-empty-element");
                if (t.parent.is("uiElement")) throw new Gn.b("view-writer-cannot-break-ui-element");
                if (!e && i.is("text") && No(i.parent)) return t.clone();
                if (No(i)) return t.clone();
                if (i.is("text")) return this._breakAttributes(Eo(t), e);
                if (n == i.childCount) {
                    const t = new Zi(i.parent, i.index + 1);
                    return this._breakAttributes(t, e)
                }
                if (0 === n) {
                    const t = new Zi(i.parent, i.index);
                    return this._breakAttributes(t, e)
                } {
                    const t = i.index + 1,
                        o = i._clone();
                    i.parent._insertChild(t, o), this._addToClonedElementsGroup(o);
                    const r = i.childCount - n,
                        s = i._removeChildren(n, r);
                    o._appendChild(s);
                    const a = new Zi(i.parent, t);
                    return this._breakAttributes(a, e)
                }
            }
            _addToClonedElementsGroup(t) {
                if (!t.root.is("rootElement")) return;
                if (t.is("element"))
                    for (const e of t.getChildren()) this._addToClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                let n = this._cloneGroups.get(e);
                n || (n = new Set, this._cloneGroups.set(e, n)), n.add(t), t._clonesGroup = n
            }
            _removeFromClonedElementsGroup(t) {
                if (t.is("element"))
                    for (const e of t.getChildren()) this._removeFromClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                const n = this._cloneGroups.get(e);
                n && n.delete(t)
            }
        }

        function To(t) {
            let e = t.parent;
            for (; !No(e);) {
                if (!e) return;
                e = e.parent
            }
            return e
        }

        function Po(t, e) {
            return t.priority < e.priority || !(t.priority > e.priority) && t.getIdentity() < e.getIdentity()
        }

        function Mo(t) {
            const e = t.nodeBefore;
            if (e && e.is("text")) return new Zi(e, e.data.length);
            const n = t.nodeAfter;
            return n && n.is("text") ? new Zi(n, 0) : t
        }

        function Eo(t) {
            if (t.offset == t.parent.data.length) return new Zi(t.parent.parent, t.parent.index + 1);
            if (0 === t.offset) return new Zi(t.parent.parent, t.parent.index);
            const e = t.parent.data.slice(t.offset);
            return t.parent._data = t.parent.data.slice(0, t.offset), t.parent.parent._insertChild(t.parent.index + 1, new fi(e)), new Zi(t.parent.parent, t.parent.index + 1)
        }

        function So(t, e) {
            const n = t.data.length;
            return t._data += e.data, e._remove(), new Zi(t, n)
        }
        const Io = [fi, ao, yi, uo, vo];

        function No(t) {
            return t && (t.is("containerElement") || t.is("documentFragment"))
        }

        function Oo(t) {
            const e = To(t.start),
                n = To(t.end);
            if (!e || !n || e !== n) throw new Gn.b("view-writer-invalid-range-container")
        }

        function Ro(t, e) {
            return null === t.id && null === e.id
        }

        function Do(t) {
            return "[object Text]" == Object.prototype.toString.call(t)
        }
        const Lo = t => {
                const e = t.createElement("br");
                return e.dataset.ckeFiller = !0, e
            },
            jo = t => t.createTextNode(" "),
            Vo = 7;
        let Bo = "";
        for (let t = 0; t < Vo; t++) Bo += "​";

        function zo(t) {
            return Do(t) && t.data.substr(0, Vo) === Bo
        }

        function Fo(t) {
            return t.data.length == Vo && zo(t)
        }

        function Uo(t) {
            return zo(t) ? t.data.slice(Vo) : t.data
        }
        const Ho = new WeakMap;

        function qo(t, e) {
            let n = Ho.get(e);
            return n || (n = e(window.document), Ho.set(e, n)), t.isEqualNode(n)
        }

        function Wo(t, e) {
            if (e.keyCode == bo.arrowleft) {
                const t = e.domTarget.ownerDocument.defaultView.getSelection();
                if (1 == t.rangeCount && t.getRangeAt(0).collapsed) {
                    const e = t.getRangeAt(0).startContainer,
                        n = t.getRangeAt(0).startOffset;
                    zo(e) && n <= Vo && t.collapse(e, 0)
                }
            }
        }

        function Yo(t, e, n, i = !1) {
            n = n || function(t, e) {
                return t === e
            }, Array.isArray(t) || (t = Array.from(t)), Array.isArray(e) || (e = Array.from(e));
            const o = function(t, e, n) {
                const i = $o(t, e, n);
                if (-1 === i) return {
                    firstIndex: -1,
                    lastIndexOld: -1,
                    lastIndexNew: -1
                };
                const o = Go(t, i),
                    r = Go(e, i),
                    s = $o(o, r, n),
                    a = t.length - s,
                    c = e.length - s;
                return {
                    firstIndex: i,
                    lastIndexOld: a,
                    lastIndexNew: c
                }
            }(t, e, n);
            return i ? function(t, e) {
                const {
                    firstIndex: n,
                    lastIndexOld: i,
                    lastIndexNew: o
                } = t;
                if (-1 === n) return Array(e).fill("equal");
                let r = [];
                n > 0 && (r = r.concat(Array(n).fill("equal")));
                o - n > 0 && (r = r.concat(Array(o - n).fill("insert")));
                i - n > 0 && (r = r.concat(Array(i - n).fill("delete")));
                o < e && (r = r.concat(Array(e - o).fill("equal")));
                return r
            }(o, e.length) : function(t, e) {
                const n = [],
                    {
                        firstIndex: i,
                        lastIndexOld: o,
                        lastIndexNew: r
                    } = e;
                r - i > 0 && n.push({
                    index: i,
                    type: "insert",
                    values: t.slice(i, r)
                });
                o - i > 0 && n.push({
                    index: i + (r - i),
                    type: "delete",
                    howMany: o - i
                });
                return n
            }(e, o)
        }

        function $o(t, e, n) {
            for (let i = 0; i < Math.max(t.length, e.length); i++)
                if (void 0 === t[i] || void 0 === e[i] || !n(t[i], e[i])) return i;
            return -1
        }

        function Go(t, e) {
            return t.slice(e).reverse()
        }

        function Qo(t, e, n) {
            n = n || function(t, e) {
                return t === e
            };
            const i = t.length,
                o = e.length;
            if (i > 200 || o > 200 || i + o > 300) return Qo.fastDiff(t, e, n, !0);
            let r, s;
            if (o < i) {
                const n = t;
                t = e, e = n, r = "delete", s = "insert"
            } else r = "insert", s = "delete";
            const a = t.length,
                c = e.length,
                l = c - a,
                d = {},
                u = {};

            function h(i) {
                const o = (void 0 !== u[i - 1] ? u[i - 1] : -1) + 1,
                    l = void 0 !== u[i + 1] ? u[i + 1] : -1,
                    h = o > l ? -1 : 1;
                d[i + h] && (d[i] = d[i + h].slice(0)), d[i] || (d[i] = []), d[i].push(o > l ? r : s);
                let f = Math.max(o, l),
                    m = f - i;
                for (; m < a && f < c && n(t[m], e[f]);) m++, f++, d[i].push("equal");
                return f
            }
            let f, m = 0;
            do {
                for (f = -m; f < l; f++) u[f] = h(f);
                for (f = l + m; f > l; f--) u[f] = h(f);
                u[l] = h(l), m++
            } while (u[l] !== c);
            return d[l].slice(1)
        }

        function Jo(t, e, n) {
            t.insertBefore(n, t.childNodes[e] == undefined ? null : t.childNodes[e])
        }

        function Ko(t) {
            const e = t.parentNode;
            e && e.removeChild(t)
        }

        function Zo(t) {
            if (t) {
                if (t.defaultView) return t instanceof t.defaultView.Document;
                if (t.ownerDocument && t.ownerDocument.defaultView) return t instanceof t.ownerDocument.defaultView.Node
            }
            return !1
        }
        Qo.fastDiff = Yo;
        class Xo {
            constructor(t, e) {
                this.domDocuments = new Set, this.domConverter = t, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = e, this.isFocused = !1, this._inlineFiller = null, this._fakeSelectionContainer = null
            }
            markToSync(t, e) {
                if ("text" === t) this.domConverter.mapViewToDom(e.parent) && this.markedTexts.add(e);
                else {
                    if (!this.domConverter.mapViewToDom(e)) return;
                    if ("attributes" === t) this.markedAttributes.add(e);
                    else {
                        if ("children" !== t) throw new Gn.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.");
                        this.markedChildren.add(e)
                    }
                }
            }
            render() {
                let t;
                for (const t of this.markedChildren) this._updateChildrenMappings(t);
                this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? t = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (t = this.selection.getFirstPosition(), this.markedChildren.add(t.parent));
                for (const t of this.markedAttributes) this._updateAttrs(t);
                for (const e of this.markedChildren) this._updateChildren(e, {
                    inlineFillerPosition: t
                });
                for (const e of this.markedTexts) !this.markedChildren.has(e.parent) && this.domConverter.mapViewToDom(e.parent) && this._updateText(e, {
                    inlineFillerPosition: t
                });
                if (t) {
                    const e = this.domConverter.viewPositionToDom(t),
                        n = e.parent.ownerDocument;
                    zo(e.parent) ? this._inlineFiller = e.parent : this._inlineFiller = tr(n, e.parent, e.offset)
                } else this._inlineFiller = null;
                this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
            }
            _updateChildrenMappings(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const n = this.domConverter.mapViewToDom(t).childNodes,
                    i = Array.from(this.domConverter.viewChildrenToDom(t, e.ownerDocument, {
                        withChildren: !1
                    })),
                    o = this._diffNodeLists(n, i),
                    r = this._findReplaceActions(o, n, i);
                if (-1 !== r.indexOf("replace")) {
                    const e = {
                        equal: 0,
                        insert: 0,
                        delete: 0
                    };
                    for (const o of r)
                        if ("replace" === o) {
                            const o = e.equal + e.insert,
                                r = e.equal + e.delete,
                                s = t.getChild(o);
                            s && !s.is("uiElement") && this._updateElementMappings(s, n[r]), Ko(i[o]), e.equal++
                        } else e[o]++
                }
            }
            _updateElementMappings(t, e) {
                this.domConverter.unbindDomElement(e), this.domConverter.bindElements(e, t), this.markedChildren.add(t), this.markedAttributes.add(t)
            }
            _getInlineFillerPosition() {
                const t = this.selection.getFirstPosition();
                return t.parent.is("text") ? Zi._createBefore(this.selection.getFirstPosition().parent) : t
            }
            _isSelectionInInlineFiller() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(),
                    e = this.domConverter.viewPositionToDom(t);
                return !!(e && Do(e.parent) && zo(e.parent))
            }
            _removeInlineFiller() {
                const t = this._inlineFiller;
                if (!zo(t)) throw new Gn.b("view-renderer-filler-was-lost: The inline filler node was lost.");
                Fo(t) ? t.parentNode.removeChild(t) : t.data = t.data.substr(Vo), this._inlineFiller = null
            }
            _needsInlineFillerAtSelection() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(),
                    e = t.parent,
                    n = t.offset;
                if (!this.domConverter.mapViewToDom(e.root)) return !1;
                if (!e.is("element")) return !1;
                if (! function(t) {
                        if ("false" == t.getAttribute("contenteditable")) return !1;
                        const e = t.findAncestor(t => t.hasAttribute("contenteditable"));
                        return !e || "true" == e.getAttribute("contenteditable")
                    }(e)) return !1;
                if (n === e.getFillerOffset()) return !1;
                const i = t.nodeBefore,
                    o = t.nodeAfter;
                return !(i instanceof fi || o instanceof fi)
            }
            _updateText(t, e) {
                const n = this.domConverter.findCorrespondingDomText(t),
                    i = this.domConverter.viewToDom(t, n.ownerDocument),
                    o = n.data;
                let r = i.data;
                const s = e.inlineFillerPosition;
                if (s && s.parent == t.parent && s.offset == t.index && (r = Bo + r), o != r) {
                    const t = Yo(o, r);
                    for (const e of t) "insert" === e.type ? n.insertData(e.index, e.values.join("")) : n.deleteData(e.index, e.howMany)
                }
            }
            _updateAttrs(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const n = Array.from(e.attributes).map(t => t.name),
                    i = t.getAttributeKeys();
                for (const n of i) e.setAttribute(n, t.getAttribute(n));
                for (const i of n) t.hasAttribute(i) || e.removeAttribute(i)
            }
            _updateChildren(t, e) {
                const n = this.domConverter.mapViewToDom(t);
                if (!n) return;
                const i = e.inlineFillerPosition,
                    o = this.domConverter.mapViewToDom(t).childNodes,
                    r = Array.from(this.domConverter.viewChildrenToDom(t, n.ownerDocument, {
                        bind: !0,
                        inlineFillerPosition: i
                    }));
                i && i.parent === t && tr(n.ownerDocument, r, i.offset);
                const s = this._diffNodeLists(o, r);
                let a = 0;
                const c = new Set;
                for (const t of s) "insert" === t ? (Jo(n, a, r[a]), a++) : "delete" === t ? (c.add(o[a]), Ko(o[a])) : (this._markDescendantTextToSync(this.domConverter.domToView(r[a])), a++);
                for (const t of c) t.parentNode || this.domConverter.unbindDomElement(t)
            }
            _diffNodeLists(t, e) {
                return Qo(t = function(t, e) {
                    const n = Array.from(t);
                    if (0 == n.length || !e) return n;
                    n[n.length - 1] == e && n.pop();
                    return n
                }(t, this._fakeSelectionContainer), e, function(t, e, n) {
                    if (e === n) return !0;
                    if (Do(e) && Do(n)) return e.data === n.data;
                    if (qo(e, t) && qo(n, t)) return !0;
                    return !1
                }.bind(null, this.domConverter.blockFiller))
            }
            _findReplaceActions(t, e, n) {
                if (-1 === t.indexOf("insert") || -1 === t.indexOf("delete")) return t;
                let i = [],
                    o = [],
                    r = [];
                const s = {
                    equal: 0,
                    insert: 0,
                    delete: 0
                };
                for (const a of t) "insert" === a ? r.push(n[s.equal + s.insert]) : "delete" === a ? o.push(e[s.equal + s.delete]) : ((i = i.concat(Qo(o, r, er).map(t => "equal" === t ? "replace" : t))).push("equal"), o = [], r = []), s[a]++;
                return i.concat(Qo(o, r, er).map(t => "equal" === t ? "replace" : t))
            }
            _markDescendantTextToSync(t) {
                if (t)
                    if (t.is("text")) this.markedTexts.add(t);
                    else if (t.is("element"))
                    for (const e of t.getChildren()) this._markDescendantTextToSync(e)
            }
            _updateSelection() {
                if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
                const t = this.domConverter.mapViewToDom(this.selection.editableElement);
                this.isFocused && t && (this.selection.isFake ? this._updateFakeSelection(t) : (this._removeFakeSelection(), this._updateDomSelection(t)))
            }
            _updateFakeSelection(t) {
                const e = t.ownerDocument;
                let n = this._fakeSelectionContainer;
                n || (this._fakeSelectionContainer = n = e.createElement("div"), Object.assign(n.style, {
                    position: "fixed",
                    top: 0,
                    left: "-9999px",
                    width: "42px"
                }), n.appendChild(e.createTextNode(" "))), n.parentElement && n.parentElement == t || t.appendChild(n), n.firstChild.data = this.selection.fakeSelectionLabel || " ";
                const i = e.getSelection(),
                    o = e.createRange();
                i.removeAllRanges(), o.selectNodeContents(n), i.addRange(o), this.domConverter.bindFakeSelection(n, this.selection)
            }
            _updateDomSelection(t) {
                const e = t.ownerDocument.defaultView.getSelection();
                if (!this._domSelectionNeedsUpdate(e)) return;
                const n = this.domConverter.viewPositionToDom(this.selection.anchor),
                    i = this.domConverter.viewPositionToDom(this.selection.focus);
                t.focus(), e.collapse(n.parent, n.offset), e.extend(i.parent, i.offset), mo.isGecko && function(t, e) {
                    const n = t.parent;
                    if (n.nodeType != Node.ELEMENT_NODE || t.offset != n.childNodes.length - 1) return;
                    const i = n.childNodes[t.offset];
                    i && "BR" == i.tagName && e.addRange(e.getRangeAt(0))
                }(i, e)
            }
            _domSelectionNeedsUpdate(t) {
                if (!this.domConverter.isDomSelectionCorrect(t)) return !0;
                const e = t && this.domConverter.domSelectionToView(t);
                return (!e || !this.selection.isEqual(e)) && !(!this.selection.isCollapsed && this.selection.isSimilar(e))
            }
            _removeDomSelection() {
                for (const t of this.domDocuments) {
                    if (t.getSelection().rangeCount) {
                        const e = t.activeElement,
                            n = this.domConverter.mapDomToView(e);
                        e && n && t.getSelection().removeAllRanges()
                    }
                }
            }
            _removeFakeSelection() {
                const t = this._fakeSelectionContainer;
                t && t.remove()
            }
            _updateFocus() {
                if (this.isFocused) {
                    const t = this.selection.editableElement;
                    t && this.domConverter.focus(t)
                }
            }
        }

        function tr(t, e, n) {
            const i = e instanceof Array ? e : e.childNodes,
                o = i[n];
            if (Do(o)) return o.data = Bo + o.data, o; {
                const o = t.createTextNode(Bo);
                return Array.isArray(e) ? i.splice(n, 0, o) : Jo(e, n, o), o
            }
        }

        function er(t, e) {
            return Zo(t) && Zo(e) && !Do(t) && !Do(e) && t.tagName.toLowerCase() === e.tagName.toLowerCase()
        }
        ci(Xo, Fi);
        var nr = {
            window: window,
            document: document
        };

        function ir(t) {
            let e = 0;
            for (; t.previousSibling;) t = t.previousSibling, e++;
            return e
        }

        function or(t) {
            const e = [];
            for (; t && t.nodeType != Node.DOCUMENT_NODE;) e.unshift(t), t = t.parentNode;
            return e
        }
        class rr {
            constructor(t = {}) {
                this.blockFiller = t.blockFiller || Lo, this.preElements = ["pre"], this.blockElements = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"], this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
            }
            bindFakeSelection(t, e) {
                this._fakeSelectionMapping.set(t, new no(e))
            }
            fakeSelectionToView(t) {
                return this._fakeSelectionMapping.get(t)
            }
            bindElements(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }
            unbindDomElement(t) {
                const e = this._domToViewMapping.get(t);
                if (e) {
                    this._domToViewMapping.delete(t), this._viewToDomMapping.delete(e);
                    for (const e of Array.from(t.childNodes)) this.unbindDomElement(e)
                }
            }
            bindDocumentFragments(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }
            viewToDom(t, e, n = {}) {
                if (t.is("text")) {
                    const n = this._processDataFromViewText(t);
                    return e.createTextNode(n)
                } {
                    if (this.mapViewToDom(t)) return this.mapViewToDom(t);
                    let i;
                    if (t.is("documentFragment")) i = e.createDocumentFragment(), n.bind && this.bindDocumentFragments(i, t);
                    else {
                        if (t.is("uiElement")) return i = t.render(e), n.bind && this.bindElements(i, t), i;
                        i = e.createElement(t.name), n.bind && this.bindElements(i, t);
                        for (const e of t.getAttributeKeys()) i.setAttribute(e, t.getAttribute(e))
                    }
                    if (n.withChildren || void 0 === n.withChildren)
                        for (const o of this.viewChildrenToDom(t, e, n)) i.appendChild(o);
                    return i
                }
            } * viewChildrenToDom(t, e, n = {}) {
                const i = t.getFillerOffset && t.getFillerOffset();
                let o = 0;
                for (const r of t.getChildren()) i === o && (yield this.blockFiller(e)), yield this.viewToDom(r, e, n), o++;
                i === o && (yield this.blockFiller(e))
            }
            viewRangeToDom(t) {
                const e = this.viewPositionToDom(t.start),
                    n = this.viewPositionToDom(t.end),
                    i = document.createRange();
                return i.setStart(e.parent, e.offset), i.setEnd(n.parent, n.offset), i
            }
            viewPositionToDom(t) {
                const e = t.parent;
                if (e.is("text")) {
                    const n = this.findCorrespondingDomText(e);
                    if (!n) return null;
                    let i = t.offset;
                    return zo(n) && (i += Vo), {
                        parent: n,
                        offset: i
                    }
                } {
                    let n, i, o;
                    if (0 === t.offset) {
                        if (!(n = this.mapViewToDom(e))) return null;
                        o = n.childNodes[0]
                    } else {
                        const e = t.nodeBefore;
                        if (!(i = e.is("text") ? this.findCorrespondingDomText(e) : this.mapViewToDom(t.nodeBefore))) return null;
                        n = i.parentNode, o = i.nextSibling
                    }
                    if (Do(o) && zo(o)) return {
                        parent: o,
                        offset: Vo
                    };
                    return {
                        parent: n,
                        offset: i ? ir(i) + 1 : 0
                    }
                }
            }
            domToView(t, e = {}) {
                if (qo(t, this.blockFiller)) return null;
                const n = this.getParentUIElement(t, this._domToViewMapping);
                if (n) return n;
                if (Do(t)) {
                    if (Fo(t)) return null; {
                        const e = this._processDataFromDomText(t);
                        return "" === e ? null : new fi(e)
                    }
                }
                if (this.isComment(t)) return null; {
                    if (this.mapDomToView(t)) return this.mapDomToView(t);
                    let n;
                    if (this.isDocumentFragment(t)) n = new Ao, e.bind && this.bindDocumentFragments(t, n);
                    else {
                        const i = e.keepOriginalCase ? t.tagName : t.tagName.toLowerCase();
                        n = new _i(i), e.bind && this.bindElements(t, n);
                        const o = t.attributes;
                        for (let t = o.length - 1; t >= 0; t--) n._setAttribute(o[t].name, o[t].value)
                    }
                    if (e.withChildren || void 0 === e.withChildren)
                        for (const i of this.domChildrenToView(t, e)) n._appendChild(i);
                    return n
                }
            } * domChildrenToView(t, e = {}) {
                for (let n = 0; n < t.childNodes.length; n++) {
                    const i = t.childNodes[n],
                        o = this.domToView(i, e);
                    null !== o && (yield o)
                }
            }
            domSelectionToView(t) {
                if (1 === t.rangeCount) {
                    let e = t.getRangeAt(0).startContainer;
                    Do(e) && (e = e.parentNode);
                    const n = this.fakeSelectionToView(e);
                    if (n) return n
                }
                const e = this.isDomSelectionBackward(t),
                    n = [];
                for (let e = 0; e < t.rangeCount; e++) {
                    const i = t.getRangeAt(e),
                        o = this.domRangeToView(i);
                    o && n.push(o)
                }
                return new no(n, {
                    backward: e
                })
            }
            domRangeToView(t) {
                const e = this.domPositionToView(t.startContainer, t.startOffset),
                    n = this.domPositionToView(t.endContainer, t.endOffset);
                return e && n ? new Xi(e, n) : null
            }
            domPositionToView(t, e) {
                if (qo(t, this.blockFiller)) return this.domPositionToView(t.parentNode, ir(t));
                const n = this.mapDomToView(t);
                if (n && n.is("uiElement")) return Zi._createBefore(n);
                if (Do(t)) {
                    if (Fo(t)) return this.domPositionToView(t.parentNode, ir(t));
                    const n = this.findCorrespondingViewText(t);
                    let i = e;
                    return n ? (zo(t) && (i = (i -= Vo) < 0 ? 0 : i), new Zi(n, i)) : null
                }
                if (0 === e) {
                    const e = this.mapDomToView(t);
                    if (e) return new Zi(e, 0)
                } else {
                    const n = t.childNodes[e - 1],
                        i = Do(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n);
                    if (i && i.parent) return new Zi(i.parent, i.index + 1)
                }
                return null
            }
            mapDomToView(t) {
                return this.getParentUIElement(t) || this._domToViewMapping.get(t)
            }
            findCorrespondingViewText(t) {
                if (Fo(t)) return null;
                const e = this.getParentUIElement(t);
                if (e) return e;
                const n = t.previousSibling;
                if (n) {
                    if (!this.isElement(n)) return null;
                    const t = this.mapDomToView(n);
                    if (t) {
                        return t.nextSibling instanceof fi ? t.nextSibling : null
                    }
                } else {
                    const e = this.mapDomToView(t.parentNode);
                    if (e) {
                        const t = e.getChild(0);
                        return t instanceof fi ? t : null
                    }
                }
                return null
            }
            mapViewToDom(t) {
                return this._viewToDomMapping.get(t)
            }
            findCorrespondingDomText(t) {
                const e = t.previousSibling;
                return e && this.mapViewToDom(e) ? this.mapViewToDom(e).nextSibling : !e && t.parent && this.mapViewToDom(t.parent) ? this.mapViewToDom(t.parent).childNodes[0] : null
            }
            focus(t) {
                const e = this.mapViewToDom(t);
                if (e && e.ownerDocument.activeElement !== e) {
                    const {
                        scrollX: t,
                        scrollY: n
                    } = nr.window, i = [];
                    ar(e, t => {
                        const {
                            scrollLeft: e,
                            scrollTop: n
                        } = t;
                        i.push([e, n])
                    }), e.focus(), ar(e, t => {
                        const [e, n] = i.shift();
                        t.scrollLeft = e, t.scrollTop = n
                    }), nr.window.scrollTo(t, n)
                }
            }
            isElement(t) {
                return t && t.nodeType == Node.ELEMENT_NODE
            }
            isDocumentFragment(t) {
                return t && t.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            }
            isComment(t) {
                return t && t.nodeType == Node.COMMENT_NODE
            }
            isDomSelectionBackward(t) {
                if (t.isCollapsed) return !1;
                const e = document.createRange();
                e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset);
                const n = e.collapsed;
                return e.detach(), n
            }
            getParentUIElement(t) {
                const e = or(t);
                for (e.pop(); e.length;) {
                    const t = e.pop(),
                        n = this._domToViewMapping.get(t);
                    if (n && n.is("uiElement")) return n
                }
                return null
            }
            isDomSelectionCorrect(t) {
                return this._isDomSelectionPositionCorrect(t.anchorNode, t.anchorOffset) && this._isDomSelectionPositionCorrect(t.focusNode, t.focusOffset)
            }
            _isDomSelectionPositionCorrect(t, e) {
                if (Do(t) && zo(t) && e < Vo) return !1;
                if (this.isElement(t) && zo(t.childNodes[e])) return !1;
                const n = this.mapDomToView(t);
                return !n || !n.is("uiElement")
            }
            _processDataFromViewText(t) {
                let e = t.data;
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return e;
                if (" " == e.charAt(0)) {
                    const n = this._getTouchingViewTextNode(t, !1);
                    !(n && this._nodeEndsWithSpace(n)) && n || (e = " " + e.substr(1))
                }
                if (" " == e.charAt(e.length - 1)) {
                    this._getTouchingViewTextNode(t, !0) || (e = e.substr(0, e.length - 1) + " ")
                }
                return e.replace(/ {2}/g, "  ")
            }
            _nodeEndsWithSpace(t) {
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return !1;
                const e = this._processDataFromViewText(t);
                return " " == e.charAt(e.length - 1)
            }
            _processDataFromDomText(t) {
                let e = t.data;
                if (sr(t, this.preElements)) return Uo(t);
                e = e.replace(/[ \n\t\r]{1,}/g, " ");
                const n = this._getTouchingInlineDomNode(t, !1),
                    i = this._getTouchingInlineDomNode(t, !0),
                    o = this._checkShouldLeftTrimDomText(n),
                    r = this._checkShouldRightTrimDomText(t, i);
                return o && (e = e.replace(/^ /, "")), r && (e = e.replace(/ $/, "")), e = (e = Uo(new Text(e))).replace(/ \u00A0/g, "  "), o && (e = e.replace(/^\u00A0/, " ")), Do(i) && " " != i.data.charAt(0) || (e = e.replace(/\u00A0( *)$/, " $1")), e
            }
            _checkShouldLeftTrimDomText(t) {
                return !t || (!!Wn(t) || /[^\S\u00A0]/.test(t.data.charAt(t.data.length - 1)))
            }
            _checkShouldRightTrimDomText(t, e) {
                return !e && !zo(t)
            }
            _getTouchingViewTextNode(t, e) {
                const n = new Ki({
                    startPosition: e ? Zi._createAfter(t) : Zi._createBefore(t),
                    direction: e ? "forward" : "backward"
                });
                for (const t of n) {
                    if (t.item.is("containerElement")) return null;
                    if (t.item.is("br")) return null;
                    if (t.item.is("textProxy")) return t.item
                }
                return null
            }
            _getTouchingInlineDomNode(t, e) {
                if (!t.parentNode) return null;
                const n = e ? "nextNode" : "previousNode",
                    i = t.ownerDocument,
                    o = or(t)[0],
                    r = i.createTreeWalker(o, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t => Do(t) ? NodeFilter.FILTER_ACCEPT : "BR" == t.tagName ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    });
                r.currentNode = t;
                const s = r[n]();
                if (null !== s) {
                    const e = function(t, e) {
                        const n = or(t),
                            i = or(e);
                        let o = 0;
                        for (; n[o] == i[o] && n[o];) o++;
                        return 0 === o ? null : n[o - 1]
                    }(t, s);
                    if (e && !sr(t, this.blockElements, e) && !sr(s, this.blockElements, e)) return s
                }
                return null
            }
        }

        function sr(t, e, n) {
            let i = or(t);
            return n && (i = i.slice(i.indexOf(n) + 1)), i.some(t => t.tagName && e.includes(t.tagName.toLowerCase()))
        }

        function ar(t, e) {
            for (; t && t != nr.document;) e(t), t = t.parentNode
        }

        function cr(t) {
            const e = Object.prototype.toString.apply(t);
            return "[object Window]" == e || "[object global]" == e
        }
        var lr = Li({}, ei, {
            listenTo(t, ...e) {
                if (Zo(t) || cr(t)) {
                    const n = this._getProxyEmitter(t) || new dr(t);
                    n.attach(...e), t = n
                }
                ei.listenTo.call(this, t, ...e)
            }, stopListening(t, e, n) {
                if (Zo(t) || cr(t)) {
                    const e = this._getProxyEmitter(t);
                    if (!e) return;
                    t = e
                }
                ei.stopListening.call(this, t, e, n), t instanceof dr && t.detach(e)
            }, _getProxyEmitter(t) {
                return function(t, e) {
                    return t[Xn] && t[Xn][e] ? t[Xn][e].emitter : null
                }(this, ur(t))
            }
        });
        class dr {
            constructor(t) {
                ni(this, ur(t)), this._domNode = t
            }
        }

        function ur(t) {
            return t["data-ck-expando"] || (t["data-ck-expando"] = Kn())
        }
        Li(dr.prototype, ei, {
            attach(t, e, n = {}) {
                if (this._domListeners && this._domListeners[t]) return;
                const i = this._createDomListener(t, !!n.useCapture);
                this._domNode.addEventListener(t, i, !!n.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[t] = i
            }, detach(t) {
                let e;
                !this._domListeners[t] || (e = this._events[t]) && e.callbacks.length || this._domListeners[t].removeListener()
            }, _createDomListener(t, e) {
                const n = e => {
                    this.fire(t, e)
                };
                return n.removeListener = (() => {
                    this._domNode.removeEventListener(t, n, e), delete this._domListeners[t]
                }), n
            }
        });
        class hr {
            constructor(t) {
                this.view = t, this.document = t.document, this.isEnabled = !1
            }
            enable() {
                this.isEnabled = !0
            }
            disable() {
                this.isEnabled = !1
            }
            destroy() {
                this.disable(), this.stopListening()
            }
        }
        ci(hr, lr);
        var fr = "__lodash_hash_undefined__";
        var mr = function(t) {
            return this.__data__.set(t, fr), this
        };
        var pr = function(t) {
            return this.__data__.has(t)
        };

        function gr(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new Pt; ++e < n;) this.add(t[e])
        }
        gr.prototype.add = gr.prototype.push = mr, gr.prototype.has = pr;
        var br = gr;
        var wr = function(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
                if (e(t[n], n, t)) return !0;
            return !1
        };
        var _r = function(t, e) {
                return t.has(e)
            },
            kr = 1,
            vr = 2;
        var yr = function(t, e, n, i, o, r) {
            var s = n & kr,
                a = t.length,
                c = e.length;
            if (a != c && !(s && c > a)) return !1;
            var l = r.get(t);
            if (l && r.get(e)) return l == e;
            var d = -1,
                u = !0,
                h = n & vr ? new br : void 0;
            for (r.set(t, e), r.set(e, t); ++d < a;) {
                var f = t[d],
                    m = e[d];
                if (i) var p = s ? i(m, f, d, e, t, r) : i(f, m, d, t, e, r);
                if (void 0 !== p) {
                    if (p) continue;
                    u = !1;
                    break
                }
                if (h) {
                    if (!wr(e, function(t, e) {
                            if (!_r(h, e) && (f === t || o(f, t, n, i, r))) return h.push(e)
                        })) {
                        u = !1;
                        break
                    }
                } else if (f !== m && !o(f, m, n, i, r)) {
                    u = !1;
                    break
                }
            }
            return r.delete(t), r.delete(e), u
        };
        var xr = function(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach(function(t, i) {
                n[++e] = [i, t]
            }), n
        };
        var Ar = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = t
                }), n
            },
            Cr = 1,
            Tr = 2,
            Pr = "[object Boolean]",
            Mr = "[object Date]",
            Er = "[object Error]",
            Sr = "[object Map]",
            Ir = "[object Number]",
            Nr = "[object RegExp]",
            Or = "[object Set]",
            Rr = "[object String]",
            Dr = "[object Symbol]",
            Lr = "[object ArrayBuffer]",
            jr = "[object DataView]",
            Vr = o ? o.prototype : void 0,
            Br = Vr ? Vr.valueOf : void 0;
        var zr = function(t, e, n, i, o, r, s) {
                switch (n) {
                    case jr:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case Lr:
                        return !(t.byteLength != e.byteLength || !r(new Ye(t), new Ye(e)));
                    case Pr:
                    case Mr:
                    case Ir:
                        return P(+t, +e);
                    case Er:
                        return t.name == e.name && t.message == e.message;
                    case Nr:
                    case Rr:
                        return t == e + "";
                    case Sr:
                        var a = xr;
                    case Or:
                        var c = i & Cr;
                        if (a || (a = Ar), t.size != e.size && !c) return !1;
                        var l = s.get(t);
                        if (l) return l == e;
                        i |= Tr, s.set(t, e);
                        var d = yr(a(t), a(e), i, o, r, s);
                        return s.delete(t), d;
                    case Dr:
                        if (Br) return Br.call(t) == Br.call(e)
                }
                return !1
            },
            Fr = 1,
            Ur = Object.prototype.hasOwnProperty;
        var Hr = function(t, e, n, i, o, r) {
                var s = n & Fr,
                    a = Ie(t),
                    c = a.length;
                if (c != Ie(e).length && !s) return !1;
                for (var l = c; l--;) {
                    var d = a[l];
                    if (!(s ? d in e : Ur.call(e, d))) return !1
                }
                var u = r.get(t);
                if (u && r.get(e)) return u == e;
                var h = !0;
                r.set(t, e), r.set(e, t);
                for (var f = s; ++l < c;) {
                    var m = t[d = a[l]],
                        p = e[d];
                    if (i) var g = s ? i(p, m, d, e, t, r) : i(m, p, d, t, e, r);
                    if (!(void 0 === g ? m === p || o(m, p, n, i, r) : g)) {
                        h = !1;
                        break
                    }
                    f || (f = "constructor" == d)
                }
                if (h && !f) {
                    var b = t.constructor,
                        w = e.constructor;
                    b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (h = !1)
                }
                return r.delete(t), r.delete(e), h
            },
            qr = 1,
            Wr = "[object Arguments]",
            Yr = "[object Array]",
            $r = "[object Object]",
            Gr = Object.prototype.hasOwnProperty;
        var Qr = function(t, e, n, i, o, r) {
            var s = Wt(t),
                a = Wt(e),
                c = s ? Yr : He(t),
                l = a ? Yr : He(e),
                d = (c = c == Wr ? $r : c) == $r,
                u = (l = l == Wr ? $r : l) == $r,
                h = c == l;
            if (h && Object(Yt.a)(t)) {
                if (!Object(Yt.a)(e)) return !1;
                s = !0, d = !1
            }
            if (h && !d) return r || (r = new It), s || ie(t) ? yr(t, e, n, i, o, r) : zr(t, e, c, n, i, o, r);
            if (!(n & qr)) {
                var f = d && Gr.call(t, "__wrapped__"),
                    m = u && Gr.call(e, "__wrapped__");
                if (f || m) {
                    var p = f ? t.value() : t,
                        g = m ? e.value() : e;
                    return r || (r = new It), o(p, g, n, i, r)
                }
            }
            return !!h && (r || (r = new It), Hr(t, e, n, i, o, r))
        };
        var Jr = function t(e, n, i, o, r) {
            return e === n || (null == e || null == n || !w(e) && !w(n) ? e != e && n != n : Qr(e, n, i, o, t, r))
        };
        var Kr = function(t, e, n) {
            var i = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
            return void 0 === i ? Jr(t, e, void 0, n) : !!i
        };
        class Zr extends hr {
            constructor(t) {
                super(t), this._config = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    subtree: !0
                }, this.domConverter = t.domConverter, this.renderer = t._renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
            }
            flush() {
                this._onMutations(this._mutationObserver.takeRecords())
            }
            observe(t) {
                this._domElements.push(t), this.isEnabled && this._mutationObserver.observe(t, this._config)
            }
            enable() {
                super.enable();
                for (const t of this._domElements) this._mutationObserver.observe(t, this._config)
            }
            disable() {
                super.disable(), this._mutationObserver.disconnect()
            }
            destroy() {
                super.destroy(), this._mutationObserver.disconnect()
            }
            _onMutations(t) {
                if (0 === t.length) return;
                const e = this.domConverter,
                    n = new Map,
                    i = new Set;
                for (const n of t)
                    if ("childList" === n.type) {
                        const t = e.mapDomToView(n.target);
                        if (t && t.is("uiElement")) continue;
                        t && !this._isBogusBrMutation(n) && i.add(t)
                    }
                for (const o of t) {
                    const t = e.mapDomToView(o.target);
                    if ((!t || !t.is("uiElement")) && "characterData" === o.type) {
                        const t = e.findCorrespondingViewText(o.target);
                        t && !i.has(t.parent) ? n.set(t, {
                            type: "text",
                            oldText: t.data,
                            newText: Uo(o.target),
                            node: t
                        }) : !t && zo(o.target) && i.add(e.mapDomToView(o.target.parentNode))
                    }
                }
                const o = [];
                for (const t of n.values()) this.renderer.markToSync("text", t.node), o.push(t);
                for (const t of i) {
                    const n = e.mapViewToDom(t),
                        i = Array.from(t.getChildren()),
                        r = Array.from(e.domChildrenToView(n, {
                            withChildren: !1
                        }));
                    Kr(i, r, a) || (this.renderer.markToSync("children", t), o.push({
                        type: "children",
                        oldChildren: i,
                        newChildren: r,
                        node: t
                    }))
                }
                const r = t[0].target.ownerDocument.getSelection();
                let s = null;
                if (r && r.anchorNode) {
                    const t = e.domPositionToView(r.anchorNode, r.anchorOffset),
                        n = e.domPositionToView(r.focusNode, r.focusOffset);
                    t && n && (s = new no(t)).setFocus(n)
                }

                function a(t, e) {
                    if (!Array.isArray(t)) return t === e || !(!t.is("text") || !e.is("text")) && t.data === e.data
                }
                this.document.fire("mutations", o, s), this.view.forceRender()
            }
            _isBogusBrMutation(t) {
                let e = null;
                return null === t.nextSibling && 0 === t.removedNodes.length && 1 == t.addedNodes.length && (e = this.domConverter.domToView(t.addedNodes[0], {
                    withChildren: !1
                })), e && e.is("element", "br")
            }
        }
        class Xr {
            constructor(t, e, n) {
                this.view = t, this.document = t.document, this.domEvent = e, this.domTarget = e.target, Li(this, n)
            }
            get target() {
                return this.view.domConverter.mapDomToView(this.domTarget)
            }
            preventDefault() {
                this.domEvent.preventDefault()
            }
            stopPropagation() {
                this.domEvent.stopPropagation()
            }
        }
        class ts extends hr {
            constructor(t) {
                super(t), this.useCapture = !1
            }
            observe(t) {
                ("string" == typeof this.domEventType ? [this.domEventType] : this.domEventType).forEach(e => {
                    this.listenTo(t, e, (t, e) => {
                        this.isEnabled && this.onDomEvent(e)
                    }, {
                        useCapture: this.useCapture
                    })
                })
            }
            fire(t, e, n) {
                this.isEnabled && this.document.fire(t, new Xr(this.view, e, n))
            }
        }
        class es extends ts {
            constructor(t) {
                super(t), this.domEventType = ["keydown", "keyup"]
            }
            onDomEvent(t) {
                this.fire(t.type, t, {
                    keyCode: t.keyCode,
                    altKey: t.altKey,
                    ctrlKey: t.ctrlKey || t.metaKey,
                    shiftKey: t.shiftKey,
                    get keystroke() {
                        return wo(this)
                    }
                })
            }
        }
        var ns = function() {
                return i.a.Date.now()
            },
            is = "[object Symbol]";
        var os = function(t) {
                return "symbol" == typeof t || w(t) && p(t) == is
            },
            rs = NaN,
            ss = /^\s+|\s+$/g,
            as = /^[-+]0x[0-9a-f]+$/i,
            cs = /^0b[01]+$/i,
            ls = /^0o[0-7]+$/i,
            ds = parseInt;
        var us = function(t) {
                if ("number" == typeof t) return t;
                if (os(t)) return rs;
                if (z(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = z(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(ss, "");
                var n = cs.test(t);
                return n || ls.test(t) ? ds(t.slice(2), n ? 2 : 8) : as.test(t) ? rs : +t
            },
            hs = "Expected a function",
            fs = Math.max,
            ms = Math.min;
        var ps = function(t, e, n) {
            var i, o, r, s, a, c, l = 0,
                d = !1,
                u = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(hs);

            function f(e) {
                var n = i,
                    r = o;
                return i = o = void 0, l = e, s = t.apply(r, n)
            }

            function m(t) {
                var n = t - c;
                return void 0 === c || n >= e || n < 0 || u && t - l >= r
            }

            function p() {
                var t = ns();
                if (m(t)) return g(t);
                a = setTimeout(p, function(t) {
                    var n = e - (t - c);
                    return u ? ms(n, r - (t - l)) : n
                }(t))
            }

            function g(t) {
                return a = void 0, h && i ? f(t) : (i = o = void 0, s)
            }

            function b() {
                var t = ns(),
                    n = m(t);
                if (i = arguments, o = this, c = t, n) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(p, e), d ? f(t) : s
                    }(c);
                    if (u) return a = setTimeout(p, e), f(c)
                }
                return void 0 === a && (a = setTimeout(p, e)), s
            }
            return e = us(e) || 0, z(n) && (d = !!n.leading, r = (u = "maxWait" in n) ? fs(us(n.maxWait) || 0, e) : r, h = "trailing" in n ? !!n.trailing : h), b.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, i = c = o = a = void 0
            }, b.flush = function() {
                return void 0 === a ? s : g(ns())
            }, b
        };
        class gs extends hr {
            constructor(t) {
                super(t), this._fireSelectionChangeDoneDebounced = ps(t => this.document.fire("selectionChangeDone", t), 200)
            }
            observe() {
                const t = this.document;
                t.on("keydown", (e, n) => {
                    t.selection.isFake && function(t) {
                        return t == bo.arrowright || t == bo.arrowleft || t == bo.arrowup || t == bo.arrowdown
                    }(n.keyCode) && this.isEnabled && (n.preventDefault(), this._handleSelectionMove(n.keyCode))
                }, {
                    priority: "lowest"
                })
            }
            destroy() {
                super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
            }
            _handleSelectionMove(t) {
                const e = this.document.selection,
                    n = new no(e.getRanges(), {
                        backward: e.isBackward,
                        fake: !1
                    });
                t != bo.arrowleft && t != bo.arrowup || n.setTo(n.getFirstPosition()), t != bo.arrowright && t != bo.arrowdown || n.setTo(n.getLastPosition());
                const i = {
                    oldSelection: e,
                    newSelection: n,
                    domSelection: null
                };
                this.document.fire("selectionChange", i), this._fireSelectionChangeDoneDebounced(i)
            }
        }
        var bs = n(1);
        class ws extends hr {
            constructor(t) {
                super(t), this.mutationObserver = t.getObserver(Zr), this.selection = this.document.selection, this.domConverter = t.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = ps(t => this.document.fire("selectionChangeDone", t), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3), this._loopbackCounter = 0
            }
            observe(t) {
                const e = t.ownerDocument;
                this._documents.has(e) || (this.listenTo(e, "selectionchange", () => {
                    this._handleSelectionChange(e)
                }), this._documents.add(e))
            }
            destroy() {
                super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
            }
            _handleSelectionChange(t) {
                if (!this.isEnabled || !this.document.isFocused && !this.document.isReadOnly) return;
                this.mutationObserver.flush();
                const e = t.defaultView.getSelection(),
                    n = this.domConverter.domSelectionToView(e);
                if (!this.selection.isEqual(n) || !this.domConverter.isDomSelectionCorrect(e))
                    if (++this._loopbackCounter > 60) bs.a.warn("selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.");
                    else if (this.selection.isSimilar(n)) this.view.forceRender();
                else {
                    const t = {
                        oldSelection: this.selection,
                        newSelection: n,
                        domSelection: e
                    };
                    this.document.fire("selectionChange", t), this._fireSelectionChangeDoneDebounced(t)
                }
            }
            _clearInfiniteLoop() {
                this._loopbackCounter = 0
            }
        }
        class _s extends ts {
            constructor(t) {
                super(t), this.domEventType = ["focus", "blur"], this.useCapture = !0;
                const e = this.document;
                e.on("focus", () => {
                    e.isFocused = !0, this._renderTimeoutId = setTimeout(() => t.forceRender(), 50)
                }), e.on("blur", (n, i) => {
                    const o = e.selection.editableElement;
                    null !== o && o !== i.target || (e.isFocused = !1, t.forceRender())
                })
            }
            onDomEvent(t) {
                this.fire(t.type, t)
            }
            destroy() {
                this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
            }
        }
        class ks extends ts {
            constructor(t) {
                super(t), this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
                const e = this.document;
                e.on("compositionstart", () => {
                    e.isComposing = !0
                }), e.on("compositionend", () => {
                    e.isComposing = !1
                })
            }
            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        function vs(t) {
            return "[object Range]" == Object.prototype.toString.apply(t)
        }

        function ys(t) {
            const e = t.ownerDocument.defaultView.getComputedStyle(t);
            return {
                top: parseInt(e.borderTopWidth, 10),
                right: parseInt(e.borderRightWidth, 10),
                bottom: parseInt(e.borderBottomWidth, 10),
                left: parseInt(e.borderLeftWidth, 10)
            }
        }
        const xs = ["top", "right", "bottom", "left", "width", "height"];
        class As {
            constructor(t) {
                const e = vs(t);
                if (Object.defineProperty(this, "_source", {
                        value: t._source || t,
                        writable: !0,
                        enumerable: !1
                    }), Wn(t) || e) {
                    const n = e ? t.startContainer : t;
                    n.ownerDocument && n.ownerDocument.body.contains(n) || bs.a.warn("rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.", {
                        source: t
                    }), Cs(this, e ? As.getDomRangeRects(t)[0] : t.getBoundingClientRect())
                } else if (cr(t)) {
                    const {
                        innerWidth: e,
                        innerHeight: n
                    } = t;
                    Cs(this, {
                        top: 0,
                        right: e,
                        bottom: n,
                        left: 0,
                        width: e,
                        height: n
                    })
                } else Cs(this, t)
            }
            clone() {
                return new As(this)
            }
            moveTo(t, e) {
                return this.top = e, this.right = t + this.width, this.bottom = e + this.height, this.left = t, this
            }
            moveBy(t, e) {
                return this.top += e, this.right += t, this.left += t, this.bottom += e, this
            }
            getIntersection(t) {
                const e = {
                    top: Math.max(this.top, t.top),
                    right: Math.min(this.right, t.right),
                    bottom: Math.min(this.bottom, t.bottom),
                    left: Math.max(this.left, t.left)
                };
                return e.width = e.right - e.left, e.height = e.bottom - e.top, e.width < 0 || e.height < 0 ? null : new As(e)
            }
            getIntersectionArea(t) {
                const e = this.getIntersection(t);
                return e ? e.getArea() : 0
            }
            getArea() {
                return this.width * this.height
            }
            getVisible() {
                const t = this._source;
                let e = this.clone();
                if (!Ts(t)) {
                    let n = t.parentNode || t.commonAncestorContainer;
                    for (; n && !Ts(n);) {
                        const t = new As(n),
                            i = e.getIntersection(t);
                        if (!i) return null;
                        i.getArea() < e.getArea() && (e = i), n = n.parentNode
                    }
                }
                return e
            }
            isEqual(t) {
                for (const e of xs)
                    if (this[e] !== t[e]) return !1;
                return !0
            }
            contains(t) {
                const e = this.getIntersection(t);
                return !(!e || !e.isEqual(t))
            }
            excludeScrollbarsAndBorders() {
                const t = this._source;
                let e, n;
                if (cr(t)) e = t.innerWidth - t.document.documentElement.clientWidth, n = t.innerHeight - t.document.documentElement.clientHeight;
                else {
                    const i = ys(this._source);
                    e = t.offsetWidth - t.clientWidth, n = t.offsetHeight - t.clientHeight, this.moveBy(i.left, i.top)
                }
                return this.width -= e, this.right -= e, this.height -= n, this.bottom -= n, this
            }
            static getDomRangeRects(t) {
                const e = [],
                    n = Array.from(t.getClientRects());
                if (n.length)
                    for (const t of n) e.push(new As(t));
                else {
                    let n = t.startContainer;
                    Do(n) && (n = n.parentNode);
                    const i = new As(n.getBoundingClientRect());
                    i.right = i.left, i.width = 0, e.push(i)
                }
                return e
            }
        }

        function Cs(t, e) {
            for (const n of xs) t[n] = e[n]
        }

        function Ts(t) {
            return !!Wn(t) && t === t.ownerDocument.body
        }

        function Ps({
            target: t,
            viewportOffset: e = 0
        }) {
            const n = Rs(t);
            let i = n,
                o = null;
            for (; i;) {
                let r;
                Es(r = Ds(i == n ? t : o), () => Ls(t, i));
                const s = Ls(t, i);
                if (Ms(i, s, e), i.parent != i) {
                    if (o = i.frameElement, i = i.parent, !o) return
                } else i = null
            }
        }

        function Ms(t, e, n) {
            const i = e.clone().moveBy(0, n),
                o = e.clone().moveBy(0, -n),
                r = new As(t).excludeScrollbarsAndBorders();
            if (![o, i].every(t => r.contains(t))) {
                let {
                    scrollX: s,
                    scrollY: a
                } = t;
                Is(o, r) ? a -= r.top - e.top + n : Ss(i, r) && (a += e.bottom - r.bottom + n), Ns(e, r) ? s -= r.left - e.left + n : Os(e, r) && (s += e.right - r.right + n), t.scrollTo(s, a)
            }
        }

        function Es(t, e) {
            const n = Rs(t);
            let i, o;
            for (; t != n.document.body;) o = e(), (i = new As(t).excludeScrollbarsAndBorders()).contains(o) || (Is(o, i) ? t.scrollTop -= i.top - o.top : Ss(o, i) && (t.scrollTop += o.bottom - i.bottom), Ns(o, i) ? t.scrollLeft -= i.left - o.left : Os(o, i) && (t.scrollLeft += o.right - i.right)), t = t.parentNode
        }

        function Ss(t, e) {
            return t.bottom > e.bottom
        }

        function Is(t, e) {
            return t.top < e.top
        }

        function Ns(t, e) {
            return t.left < e.left
        }

        function Os(t, e) {
            return t.right > e.right
        }

        function Rs(t) {
            return vs(t) ? t.startContainer.ownerDocument.defaultView : t.ownerDocument.defaultView
        }

        function Ds(t) {
            if (vs(t)) {
                let e = t.commonAncestorContainer;
                return Do(e) && (e = e.parentNode), e
            }
            return t.parentNode
        }

        function Ls(t, e) {
            const n = Rs(t),
                i = new As(t);
            if (n === e) return i; {
                let t = n;
                for (; t != e;) {
                    const e = t.frameElement,
                        n = new As(e).excludeScrollbarsAndBorders();
                    i.moveBy(n.left, n.top), t = t.parent
                }
            }
            return i
        }
        Object.assign({}, {
            scrollViewportToShowTarget: Ps,
            scrollAncestorsToShowTarget: function(t) {
                Es(Ds(t), () => new As(t))
            }
        });
        class js {
            constructor() {
                this.document = new ro, this.domConverter = new rr, this.domRoots = new Map, this.set("isRenderingInProgress", !1), this._renderer = new Xo(this.domConverter, this.document.selection), this._renderer.bind("isFocused").to(this.document), this._initialDomRootAttributes = new WeakMap, this._observers = new Map, this._ongoingChange = !1, this._postFixersInProgress = !1, this._renderingDisabled = !1, this._hasChangedSinceTheLastRendering = !1, this._writer = new Co(this.document), this.addObserver(Zr), this.addObserver(ws), this.addObserver(_s), this.addObserver(es), this.addObserver(gs), this.addObserver(ks),
                    function(t) {
                        t.document.on("keydown", Wo)
                    }(this), yo(this), this.on("render", () => {
                        this._render(), this.document.fire("layoutChanged"), this._hasChangedSinceTheLastRendering = !1
                    }), this.listenTo(this.document.selection, "change", () => {
                        this._hasChangedSinceTheLastRendering = !0
                    })
            }
            attachDomRoot(t, e = "main") {
                const n = this.document.getRoot(e);
                n._name = t.tagName.toLowerCase();
                const i = {};
                for (const {
                        name: e,
                        value: o
                    }
                    of Array.from(t.attributes)) i[e] = o, "class" === e ? this._writer.addClass(o.split(" "), n) : this._writer.setAttribute(e, o, n);
                this._initialDomRootAttributes.set(t, i);
                const o = () => {
                    this._writer.setAttribute("contenteditable", !n.isReadOnly, n), n.isReadOnly ? this._writer.addClass("ck-read-only", n) : this._writer.removeClass("ck-read-only", n)
                };
                o(), this.domRoots.set(e, t), this.domConverter.bindElements(t, n), this._renderer.markToSync("children", n), this._renderer.markToSync("attributes", n), this._renderer.domDocuments.add(t.ownerDocument), n.on("change:children", (t, e) => this._renderer.markToSync("children", e)), n.on("change:attributes", (t, e) => this._renderer.markToSync("attributes", e)), n.on("change:text", (t, e) => this._renderer.markToSync("text", e)), n.on("change:isReadOnly", () => this.change(o)), n.on("change", () => {
                    this._hasChangedSinceTheLastRendering = !0
                });
                for (const n of this._observers.values()) n.observe(t, e)
            }
            detachDomRoot(t) {
                const e = this.domRoots.get(t);
                Array.from(e.attributes).forEach(({
                    name: t
                }) => e.removeAttribute(t));
                const n = this._initialDomRootAttributes.get(e);
                for (const t in n) e.setAttribute(t, n[t]);
                this.domRoots.delete(t), this.domConverter.unbindDomElement(e)
            }
            getDomRoot(t = "main") {
                return this.domRoots.get(t)
            }
            addObserver(t) {
                let e = this._observers.get(t);
                if (e) return e;
                e = new t(this), this._observers.set(t, e);
                for (const [t, n] of this.domRoots) e.observe(n, t);
                return e.enable(), e
            }
            getObserver(t) {
                return this._observers.get(t)
            }
            disableObservers() {
                for (const t of this._observers.values()) t.disable()
            }
            enableObservers() {
                for (const t of this._observers.values()) t.enable()
            }
            scrollToTheSelection() {
                const t = this.document.selection.getFirstRange();
                t && Ps({
                    target: this.domConverter.viewRangeToDom(t),
                    viewportOffset: 20
                })
            }
            focus() {
                if (!this.document.isFocused) {
                    const t = this.document.selection.editableElement;
                    t ? (this.domConverter.focus(t), this.forceRender()) : bs.a.warn("view-focus-no-selection: There is no selection in any editable to focus.")
                }
            }
            change(t) {
                if (this.isRenderingInProgress || this._postFixersInProgress) throw new Gn.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.");
                if (this._ongoingChange) return t(this._writer);
                this._ongoingChange = !0;
                const e = t(this._writer);
                return this._ongoingChange = !1, !this._renderingDisabled && this._hasChangedSinceTheLastRendering && (this._postFixersInProgress = !0, this.document._callPostFixers(this._writer), this._postFixersInProgress = !1, this.fire("render")), e
            }
            forceRender() {
                this._hasChangedSinceTheLastRendering = !0, this.change(() => {})
            }
            destroy() {
                for (const t of this._observers.values()) t.destroy();
                this.document.destroy(), this.stopListening()
            }
            createPositionAt(t, e) {
                return Zi._createAt(t, e)
            }
            createPositionAfter(t) {
                return Zi._createAfter(t)
            }
            createPositionBefore(t) {
                return Zi._createBefore(t)
            }
            createRange(t, e) {
                return new Xi(t, e)
            }
            createRangeOn(t) {
                return Xi._createOn(t)
            }
            createRangeIn(t) {
                return Xi._createIn(t)
            }
            createSelection(t, e, n) {
                return new no(t, e, n)
            }
            _disableRendering(t) {
                this._renderingDisabled = t, 0 == t && this.change(() => {})
            }
            _render() {
                this.isRenderingInProgress = !0, this.disableObservers(), this._renderer.render(), this.enableObservers(), this.isRenderingInProgress = !1
            }
        }

        function Vs(t) {
            return C(t) ? pi(t) : new Map(t)
        }
        ci(js, Fi);
        class Bs {
            constructor(t) {
                this.parent = null, this._attrs = Vs(t)
            }
            get index() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildIndex(this))) throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.");
                return t
            }
            get startOffset() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildStartOffset(this))) throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.");
                return t
            }
            get offsetSize() {
                return 1
            }
            get endOffset() {
                return this.parent ? this.startOffset + this.offsetSize : null
            }
            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }
            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }
            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }
            get document() {
                return this.root == this ? null : this.root.document || null
            }
            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.startOffset), e = e.parent;
                return t
            }
            getAncestors(t = {
                includeSelf: !1,
                parentFirst: !1
            }) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }
            getCommonAncestor(t, e = {}) {
                const n = this.getAncestors(e),
                    i = t.getAncestors(e);
                let o = 0;
                for (; n[o] == i[o] && n[o];) o++;
                return 0 === o ? null : n[o - 1]
            }
            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(),
                    n = t.getPath(),
                    i = li(e, n);
                switch (i) {
                    case "prefix":
                        return !0;
                    case "extension":
                        return !1;
                    default:
                        return e[i] < n[i]
                }
            }
            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }
            hasAttribute(t) {
                return this._attrs.has(t)
            }
            getAttribute(t) {
                return this._attrs.get(t)
            }
            getAttributes() {
                return this._attrs.entries()
            }
            getAttributeKeys() {
                return this._attrs.keys()
            }
            toJSON() {
                const t = {};
                return this._attrs.size && (t.attributes = Array.from(this._attrs).reduce((t, e) => (t[e[0]] = e[1], t), {})), t
            }
            _clone() {
                return new Bs(this._attrs)
            }
            _remove() {
                this.parent._removeChildren(this.index)
            }
            _setAttribute(t, e) {
                this._attrs.set(t, e)
            }
            _setAttributesTo(t) {
                this._attrs = Vs(t)
            }
            _removeAttribute(t) {
                return this._attrs.delete(t)
            }
            _clearAttributes() {
                this._attrs.clear()
            }
            is(t) {
                return "node" == t
            }
        }
        class zs extends Bs {
            constructor(t, e) {
                super(e), this._data = t || ""
            }
            get offsetSize() {
                return this.data.length
            }
            get data() {
                return this._data
            }
            is(t) {
                return "text" == t || super.is(t)
            }
            toJSON() {
                const t = super.toJSON();
                return t.data = this.data, t
            }
            _clone() {
                return new zs(this.data, this.getAttributes())
            }
            static fromJSON(t) {
                return new zs(t.data, t.attributes)
            }
        }
        class Fs {
            constructor(t, e, n) {
                if (this.textNode = t, e < 0 || e > t.offsetSize) throw new Gn.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");
                if (n < 0 || e + n > t.offsetSize) throw new Gn.b("model-textproxy-wrong-length: Given length value is incorrect.");
                this.data = t.data.substring(e, e + n), this.offsetInText = e
            }
            get startOffset() {
                return null !== this.textNode.startOffset ? this.textNode.startOffset + this.offsetInText : null
            }
            get offsetSize() {
                return this.data.length
            }
            get endOffset() {
                return null !== this.startOffset ? this.startOffset + this.offsetSize : null
            }
            get isPartial() {
                return this.offsetSize !== this.textNode.offsetSize
            }
            get parent() {
                return this.textNode.parent
            }
            get root() {
                return this.textNode.root
            }
            get document() {
                return this.textNode.document
            }
            is(t) {
                return "textProxy" == t
            }
            getPath() {
                const t = this.textNode.getPath();
                return t.length > 0 && (t[t.length - 1] += this.offsetInText), t
            }
            getAncestors(t = {
                includeSelf: !1,
                parentFirst: !1
            }) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }
            hasAttribute(t) {
                return this.textNode.hasAttribute(t)
            }
            getAttribute(t) {
                return this.textNode.getAttribute(t)
            }
            getAttributes() {
                return this.textNode.getAttributes()
            }
            getAttributeKeys() {
                return this.textNode.getAttributeKeys()
            }
        }
        class Us {
            constructor(t) {
                this._nodes = [], t && this._insertNodes(0, t)
            }[Symbol.iterator]() {
                return this._nodes[Symbol.iterator]()
            }
            get length() {
                return this._nodes.length
            }
            get maxOffset() {
                return this._nodes.reduce((t, e) => t + e.offsetSize, 0)
            }
            getNode(t) {
                return this._nodes[t] || null
            }
            getNodeIndex(t) {
                const e = this._nodes.indexOf(t);
                return -1 == e ? null : e
            }
            getNodeStartOffset(t) {
                const e = this.getNodeIndex(t);
                return null === e ? null : this._nodes.slice(0, e).reduce((t, e) => t + e.offsetSize, 0)
            }
            indexToOffset(t) {
                if (t == this._nodes.length) return this.maxOffset;
                const e = this._nodes[t];
                if (!e) throw new Gn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.");
                return this.getNodeStartOffset(e)
            }
            offsetToIndex(t) {
                let e = 0;
                for (const n of this._nodes) {
                    if (t >= e && t < e + n.offsetSize) return this.getNodeIndex(n);
                    e += n.offsetSize
                }
                if (e != t) throw new Gn.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.", {
                    offset: t,
                    nodeList: this
                });
                return this.length
            }
            _insertNodes(t, e) {
                for (const t of e)
                    if (!(t instanceof Bs)) throw new Gn.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.");
                this._nodes.splice(t, 0, ...e)
            }
            _removeNodes(t, e = 1) {
                return this._nodes.splice(t, e)
            }
            toJSON() {
                return this._nodes.map(t => t.toJSON())
            }
        }
        class Hs extends Bs {
            constructor(t, e, n) {
                super(e), this.name = t, this._children = new Us, n && this._insertChild(0, n)
            }
            get childCount() {
                return this._children.length
            }
            get maxOffset() {
                return this._children.maxOffset
            }
            get isEmpty() {
                return 0 === this.childCount
            }
            is(t, e = null) {
                return e ? "element" == t && e == this.name : "element" == t || t == this.name || super.is(t)
            }
            getChild(t) {
                return this._children.getNode(t)
            }
            getChildren() {
                return this._children[Symbol.iterator]()
            }
            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }
            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }
            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }
            getNodeByPath(t) {
                let e = this;
                for (const n of t) e = e.getChild(e.offsetToIndex(n));
                return e
            }
            toJSON() {
                const t = super.toJSON();
                if (t.name = this.name, this._children.length > 0) {
                    t.children = [];
                    for (const e of this._children) t.children.push(e.toJSON())
                }
                return t
            }
            _clone(t = !1) {
                const e = t ? Array.from(this._children).map(t => t._clone(!0)) : null;
                return new Hs(this.name, this.getAttributes(), e)
            }
            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }
            _insertChild(t, e) {
                const n = function(t) {
                    if ("string" == typeof t) return [new zs(t)];
                    gi(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new zs(t) : t instanceof Fs ? new zs(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of n) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, n)
            }
            _removeChildren(t, e = 1) {
                const n = this._children._removeNodes(t, e);
                for (const t of n) t.parent = null;
                return n
            }
            static fromJSON(t) {
                let e = null;
                if (t.children) {
                    e = [];
                    for (const n of t.children) n.name ? e.push(Hs.fromJSON(n)) : e.push(zs.fromJSON(n))
                }
                return new Hs(t.name, t.attributes, e)
            }
        }
        class qs {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new Gn.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");
                const e = t.direction || "forward";
                if ("forward" != e && "backward" != e) throw new Gn.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", {
                    direction: e
                });
                this.direction = e, this.boundaries = t.boundaries || null, t.startPosition ? this.position = t.startPosition.clone() : this.position = $s._createAt(this.boundaries["backward" == this.direction ? "end" : "start"]), this.position.stickiness = "toNone", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
            }[Symbol.iterator]() {
                return this
            }
            skip(t) {
                let e, n, i, o;
                do {
                    i = this.position, o = this._visitedParent, ({
                        done: e,
                        value: n
                    } = this.next())
                } while (!e && t(n));
                e || (this.position = i, this._visitedParent = o)
            }
            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }
            _next() {
                const t = this.position,
                    e = this.position.clone(),
                    n = this._visitedParent;
                if (null === n.parent && e.offset === n.maxOffset) return {
                    done: !0
                };
                if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {
                    done: !0
                };
                const i = e.textNode ? e.textNode : e.nodeAfter;
                if (i instanceof Hs) return this.shallow ? e.offset++ : (e.path.push(0), this._visitedParent = i), this.position = e, Ws("elementStart", i, t, e, 1);
                if (i instanceof zs) {
                    let o;
                    if (this.singleCharacters) o = 1;
                    else {
                        let t = i.endOffset;
                        this._boundaryEndParent == n && this.boundaries.end.offset < t && (t = this.boundaries.end.offset), o = t - e.offset
                    }
                    const r = e.offset - i.startOffset,
                        s = new Fs(i, r, o);
                    return e.offset += o, this.position = e, Ws("text", s, t, e, o)
                }
                return e.path.pop(), e.offset++, this.position = e, this._visitedParent = n.parent, this.ignoreElementEnd ? this._next() : Ws("elementEnd", n, t, e)
            }
            _previous() {
                const t = this.position,
                    e = this.position.clone(),
                    n = this._visitedParent;
                if (null === n.parent && 0 === e.offset) return {
                    done: !0
                };
                if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {
                    done: !0
                };
                const i = e.textNode ? e.textNode : e.nodeBefore;
                if (i instanceof Hs) return e.offset--, this.shallow ? (this.position = e, Ws("elementStart", i, t, e, 1)) : (e.path.push(i.maxOffset), this.position = e, this._visitedParent = i, this.ignoreElementEnd ? this._previous() : Ws("elementEnd", i, t, e));
                if (i instanceof zs) {
                    let o;
                    if (this.singleCharacters) o = 1;
                    else {
                        let t = i.startOffset;
                        this._boundaryStartParent == n && this.boundaries.start.offset > t && (t = this.boundaries.start.offset), o = e.offset - t
                    }
                    const r = e.offset - i.startOffset,
                        s = new Fs(i, r - o, o);
                    return e.offset -= o, this.position = e, Ws("text", s, t, e, o)
                }
                return e.path.pop(), this.position = e, this._visitedParent = n.parent, Ws("elementStart", n, t, e, 1)
            }
        }

        function Ws(t, e, n, i, o) {
            return {
                done: !1,
                value: {
                    type: t,
                    item: e,
                    previousPosition: n,
                    nextPosition: i,
                    length: o
                }
            }
        }
        var Ys = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0
        };
        class $s {
            constructor(t, e, n = "toNone") {
                if (!t.is("element") && !t.is("documentFragment")) throw new Gn.b("model-position-root-invalid: Position root invalid.");
                if (!(e instanceof Array) || 0 === e.length) throw new Gn.b("model-position-path-incorrect: Position path must be an array with at least one item.", {
                    path: e
                });
                e = t.getPath().concat(e), t = t.root, this.root = t, this.path = e, this.stickiness = n
            }
            get offset() {
                return Ys(this.path)
            }
            set offset(t) {
                this.path[this.path.length - 1] = t
            }
            get parent() {
                let t = this.root;
                for (let e = 0; e < this.path.length - 1; e++) t = t.getChild(t.offsetToIndex(this.path[e]));
                return t
            }
            get index() {
                return this.parent.offsetToIndex(this.offset)
            }
            get textNode() {
                const t = this.parent.getChild(this.index);
                return t instanceof zs && t.startOffset < this.offset ? t : null
            }
            get nodeAfter() {
                return null === this.textNode ? this.parent.getChild(this.index) : null
            }
            get nodeBefore() {
                return null === this.textNode ? this.parent.getChild(this.index - 1) : null
            }
            get isAtStart() {
                return 0 === this.offset
            }
            get isAtEnd() {
                return this.offset == this.parent.maxOffset
            }
            compareWith(t) {
                if (this.root != t.root) return "different";
                const e = li(this.path, t.path);
                switch (e) {
                    case "same":
                        return "same";
                    case "prefix":
                        return "before";
                    case "extension":
                        return "after";
                    default:
                        return this.path[e] < t.path[e] ? "before" : "after"
                }
            }
            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const n = new qs(e);
                return n.skip(t), n.position
            }
            getParentPath() {
                return this.path.slice(0, -1)
            }
            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({
                    includeSelf: !0
                })
            }
            getCommonPath(t) {
                if (this.root != t.root) return [];
                const e = li(this.path, t.path),
                    n = "string" == typeof e ? Math.min(this.path.length, t.path.length) : e;
                return this.path.slice(0, n)
            }
            getCommonAncestor(t) {
                const e = this.getAncestors(),
                    n = t.getAncestors();
                let i = 0;
                for (; e[i] == n[i] && e[i];) i++;
                return 0 === i ? null : e[i - 1]
            }
            getShiftedBy(t) {
                const e = this.clone(),
                    n = e.offset + t;
                return e.offset = n < 0 ? 0 : n, e
            }
            isAfter(t) {
                return "after" == this.compareWith(t)
            }
            isBefore(t) {
                return "before" == this.compareWith(t)
            }
            isEqual(t) {
                return "same" == this.compareWith(t)
            }
            isTouching(t) {
                let e = null,
                    n = null;
                switch (this.compareWith(t)) {
                    case "same":
                        return !0;
                    case "before":
                        e = $s._createAt(this), n = $s._createAt(t);
                        break;
                    case "after":
                        e = $s._createAt(t), n = $s._createAt(this);
                        break;
                    default:
                        return !1
                }
                let i = e.parent;
                for (; e.path.length + n.path.length;) {
                    if (e.isEqual(n)) return !0;
                    if (e.path.length > n.path.length) {
                        if (e.offset !== i.maxOffset) return !1;
                        e.path = e.path.slice(0, -1), i = i.parent, e.offset++
                    } else {
                        if (0 !== n.offset) return !1;
                        n.path = n.path.slice(0, -1)
                    }
                }
            }
            hasSameParentAs(t) {
                if (this.root !== t.root) return !1;
                return "same" == li(this.getParentPath(), t.getParentPath())
            }
            getTransformedByOperation(t) {
                let e;
                switch (t.type) {
                    case "insert":
                        e = this._getTransformedByInsertOperation(t);
                        break;
                    case "move":
                    case "remove":
                    case "reinsert":
                        e = this._getTransformedByMoveOperation(t);
                        break;
                    case "split":
                        e = this._getTransformedBySplitOperation(t);
                        break;
                    case "merge":
                        e = this._getTransformedByMergeOperation(t);
                        break;
                    default:
                        e = $s._createAt(this)
                }
                return e
            }
            _getTransformedByInsertOperation(t) {
                return this._getTransformedByInsertion(t.position, t.howMany)
            }
            _getTransformedByMoveOperation(t) {
                return this._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany)
            }
            _getTransformedBySplitOperation(t) {
                const e = t.movedRange;
                return e.containsPosition(this) || e.start.isEqual(this) && "toNext" == this.stickiness ? this._getCombined(t.splitPosition, t.moveTargetPosition) : t.graveyardPosition ? this._getTransformedByMove(t.graveyardPosition, t.insertionPosition, 1) : this._getTransformedByInsertion(t.insertionPosition, 1)
            }
            _getTransformedByMergeOperation(t) {
                const e = t.movedRange;
                let n;
                return e.containsPosition(this) || e.start.isEqual(this) ? (n = this._getCombined(t.sourcePosition, t.targetPosition), t.sourcePosition.isBefore(t.targetPosition) && (n = n._getTransformedByDeletion(t.deletionPosition, 1))) : n = this.isEqual(t.deletionPosition) ? $s._createAt(t.deletionPosition) : this._getTransformedByMove(t.deletionPosition, t.graveyardPosition, 1), n
            }
            _getTransformedByDeletion(t, e) {
                const n = $s._createAt(this);
                if (this.root != t.root) return n;
                if ("same" == li(t.getParentPath(), this.getParentPath())) {
                    if (t.offset < this.offset) {
                        if (t.offset + e > this.offset) return null;
                        n.offset -= e
                    }
                } else if ("prefix" == li(t.getParentPath(), this.getParentPath())) {
                    const i = t.path.length - 1;
                    if (t.offset <= this.path[i]) {
                        if (t.offset + e > this.path[i]) return null;
                        n.path[i] -= e
                    }
                }
                return n
            }
            _getTransformedByInsertion(t, e) {
                const n = $s._createAt(this);
                if (this.root != t.root) return n;
                if ("same" == li(t.getParentPath(), this.getParentPath()))(t.offset < this.offset || t.offset == this.offset && "toPrevious" != this.stickiness) && (n.offset += e);
                else if ("prefix" == li(t.getParentPath(), this.getParentPath())) {
                    const i = t.path.length - 1;
                    t.offset <= this.path[i] && (n.path[i] += e)
                }
                return n
            }
            _getTransformedByMove(t, e, n) {
                if (e = e._getTransformedByDeletion(t, n), t.isEqual(e)) return $s._createAt(this);
                const i = this._getTransformedByDeletion(t, n);
                return null === i || t.isEqual(this) && "toNext" == this.stickiness || t.getShiftedBy(n).isEqual(this) && "toPrevious" == this.stickiness ? this._getCombined(t, e) : i._getTransformedByInsertion(e, n)
            }
            _getCombined(t, e) {
                const n = t.path.length - 1,
                    i = $s._createAt(e);
                return i.stickiness = this.stickiness, i.offset = i.offset + this.path[n] - t.offset, i.path = i.path.concat(this.path.slice(n + 1)), i
            }
            toJSON() {
                return {
                    root: this.root.toJSON(),
                    path: Array.from(this.path),
                    stickiness: this.stickiness
                }
            }
            clone() {
                return new this.constructor(this.root, this.path, this.stickiness)
            }
            static _createAt(t, e) {
                if (t instanceof $s) return new $s(t.root, t.path, t.stickiness); {
                    const n = t;
                    if ("end" == e) e = n.maxOffset;
                    else {
                        if ("before" == e) return this._createBefore(n);
                        if ("after" == e) return this._createAfter(n);
                        if (0 !== e && !e) throw new Gn.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.")
                    }
                    if (!n.is("element") && !n.is("documentFragment")) throw new Gn.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.");
                    const i = n.getPath();
                    return i.push(e), new this(n.root, i)
                }
            }
            static _createAfter(t) {
                if (!t.parent) throw new Gn.b("model-position-after-root: You cannot make a position after root.", {
                    root: t
                });
                return this._createAt(t.parent, t.endOffset)
            }
            static _createBefore(t) {
                if (!t.parent) throw new Gn.b("model-position-before-root: You cannot make a position before root.", {
                    root: t
                });
                return this._createAt(t.parent, t.startOffset)
            }
            static fromJSON(t, e) {
                if ("$graveyard" === t.root) {
                    const n = new $s(e.graveyard, t.path);
                    return n.stickiness = t.stickiness, n
                }
                if (!e.getRoot(t.root)) throw new Gn.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.", {
                    rootName: t.root
                });
                const n = new $s(e.getRoot(t.root), t.path);
                return n.stickiness = t.stickiness, n
            }
        }
        class Gs {
            constructor(t, e = null) {
                this.start = $s._createAt(t), this.end = e ? $s._createAt(e) : $s._createAt(t), this.start.stickiness = this.isCollapsed ? "toNone" : "toNext", this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious"
            } * [Symbol.iterator]() {
                yield * new qs({
                    boundaries: this,
                    ignoreElementEnd: !0
                })
            }
            get isCollapsed() {
                return this.start.isEqual(this.end)
            }
            get isFlat() {
                return "same" == li(this.start.getParentPath(), this.end.getParentPath())
            }
            get root() {
                return this.start.root
            }
            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }
            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    i = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return n && i
            }
            containsItem(t) {
                const e = $s._createBefore(t);
                return this.containsPosition(e) || this.start.isEqual(e)
            }
            isEqual(t) {
                return this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }
            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }
            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new Gs(this.start, t.start)), this.containsPosition(t.end) && e.push(new Gs(t.end, this.end))) : e.push(new Gs(this.start, this.end)), e
            }
            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start,
                        n = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new Gs(e, n)
                }
                return null
            }
            getMinimalFlatRanges() {
                const t = [],
                    e = this.start.getCommonPath(this.end).length,
                    n = $s._createAt(this.start);
                let i = n.parent;
                for (; n.path.length > e + 1;) {
                    const e = i.maxOffset - n.offset;
                    0 !== e && t.push(new Gs(n, n.getShiftedBy(e))), n.path = n.path.slice(0, -1), n.offset++, i = i.parent
                }
                for (; n.path.length <= this.end.path.length;) {
                    const e = this.end.path[n.path.length - 1],
                        i = e - n.offset;
                    0 !== i && t.push(new Gs(n, n.getShiftedBy(i))), n.offset = e, n.path.push(0)
                }
                return t
            }
            getWalker(t = {}) {
                return t.boundaries = this, new qs(t)
            } * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new qs(t);
                for (const t of e) yield t.item
            } * getPositions(t = {}) {
                t.boundaries = this;
                const e = new qs(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }
            getTransformedByOperation(t) {
                switch (t.type) {
                    case "insert":
                        return this._getTransformedByInsertOperation(t);
                    case "move":
                    case "remove":
                    case "reinsert":
                        return this._getTransformedByMoveOperation(t);
                    case "split":
                        return [this._getTransformedBySplitOperation(t)];
                    case "merge":
                        return [this._getTransformedByMergeOperation(t)]
                }
                return [new Gs(this.start, this.end)]
            }
            getTransformedByOperations(t) {
                const e = [new Gs(this.start, this.end)];
                for (const n of t)
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t].getTransformedByOperation(n);
                        e.splice(t, 1, ...i), t += i.length - 1
                    }
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    for (let i = t + 1; i < e.length; i++) {
                        const t = e[i];
                        (n.containsRange(t) || t.containsRange(n) || n.isEqual(t)) && e.splice(i, 1)
                    }
                }
                return e
            }
            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }
            toJSON() {
                return {
                    start: this.start.toJSON(),
                    end: this.end.toJSON()
                }
            }
            clone() {
                return new this.constructor(this.start, this.end)
            }
            _getTransformedByInsertOperation(t, e = !1) {
                return this._getTransformedByInsertion(t.position, t.howMany, e)
            }
            _getTransformedByMoveOperation(t, e = !1) {
                const n = t.sourcePosition,
                    i = t.howMany,
                    o = t.targetPosition;
                return this._getTransformedByMove(n, o, i, e)
            }
            _getTransformedBySplitOperation(t) {
                const e = this.start._getTransformedBySplitOperation(t);
                let n = this.end._getTransformedBySplitOperation(t);
                return this.end.isEqual(t.insertionPosition) && (n = this.end.getShiftedBy(1)), e.root != n.root && (n = this.end.getShiftedBy(-1)), new Gs(e, n)
            }
            _getTransformedByMergeOperation(t) {
                if (this.start.isEqual(t.targetPosition) && this.end.isEqual(t.deletionPosition)) return new Gs(this.start);
                let e = this.start._getTransformedByMergeOperation(t),
                    n = this.end._getTransformedByMergeOperation(t);
                return e.root != n.root && (n = this.end.getShiftedBy(-1)), e.isAfter(n) ? (t.sourcePosition.isBefore(t.targetPosition) ? (e = $s._createAt(n)).offset = 0 : (t.deletionPosition.isEqual(e) || (n = t.deletionPosition), e = t.targetPosition), new Gs(e, n)) : new Gs(e, n)
            }
            _getTransformedByInsertion(t, e, n = !1) {
                if (n && this.containsPosition(t)) return [new Gs(this.start, t), new Gs(t.getShiftedBy(e), this.end._getTransformedByInsertion(t, e))]; {
                    const n = new Gs(this.start, this.end);
                    return n.start = n.start._getTransformedByInsertion(t, e), n.end = n.end._getTransformedByInsertion(t, e), [n]
                }
            }
            _getTransformedByMove(t, e, n, i = !1) {
                if (this.isCollapsed) {
                    const i = this.start._getTransformedByMove(t, e, n);
                    return [new Gs(i)]
                }
                const o = Gs._createFromPositionAndShift(t, n),
                    r = e._getTransformedByDeletion(t, n);
                if (this.containsPosition(e) && !i && (o.containsPosition(this.start) || o.containsPosition(this.end))) {
                    const i = this.start._getTransformedByMove(t, e, n),
                        o = this.end._getTransformedByMove(t, e, n);
                    return [new Gs(i, o)]
                }
                let s;
                const a = this.getDifference(o);
                let c = null;
                const l = this.getIntersection(o);
                if (1 == a.length ? c = new Gs(a[0].start._getTransformedByDeletion(t, n), a[0].end._getTransformedByDeletion(t, n)) : 2 == a.length && (c = new Gs(this.start, this.end._getTransformedByDeletion(t, n))), s = c ? c._getTransformedByInsertion(r, n, null !== l || i) : [], l) {
                    const t = new Gs(l.start._getCombined(o.start, r), l.end._getCombined(o.start, r));
                    2 == s.length ? s.splice(1, 0, t) : s.push(t)
                }
                return s
            }
            _getTransformedByDeletion(t, e) {
                let n = this.start._getTransformedByDeletion(t, e),
                    i = this.end._getTransformedByDeletion(t, e);
                return null == n && null == i ? null : (null == n && (n = t), null == i && (i = t), new Gs(n, i))
            }
            static _createFromPositionAndShift(t, e) {
                const n = t,
                    i = t.getShiftedBy(e);
                return e > 0 ? new this(n, i) : new this(i, n)
            }
            static _createIn(t) {
                return new this($s._createAt(t, 0), $s._createAt(t, t.maxOffset))
            }
            static _createOn(t) {
                return this._createFromPositionAndShift($s._createBefore(t), t.offsetSize)
            }
            static _createFromRanges(t) {
                if (0 === t.length) throw new Gn.b("range-create-from-ranges-empty-array: At least one range has to be passed.");
                if (1 == t.length) return t[0].clone();
                const e = t[0];
                t.sort((t, e) => t.start.isAfter(e.start) ? 1 : -1);
                const n = t.indexOf(e),
                    i = new this(e.start, e.end);
                if (n > 0)
                    for (let e = n - 1; t[e].end.isEqual(i.start); e++) i.start = $s._createAt(t[e].start);
                for (let e = n + 1; e < t.length && t[e].start.isEqual(i.end); e++) i.end = $s._createAt(t[e].end);
                return i
            }
            static fromJSON(t, e) {
                return new this($s.fromJSON(t.start, e), $s.fromJSON(t.end, e))
            }
        }
        class Qs {
            constructor() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this._markerNameToElements = new Map, this.on("modelToViewPosition", (t, e) => {
                    if (e.viewPosition) return;
                    const n = this._modelToViewMapping.get(e.modelPosition.parent);
                    e.viewPosition = this._findPositionIn(n, e.modelPosition.offset)
                }, {
                    priority: "low"
                }), this.on("viewToModelPosition", (t, e) => {
                    if (e.modelPosition) return;
                    const n = this.findMappedViewAncestor(e.viewPosition),
                        i = this._viewToModelMapping.get(n),
                        o = this._toModelOffset(e.viewPosition.parent, e.viewPosition.offset, n);
                    e.modelPosition = $s._createAt(i, o)
                }, {
                    priority: "low"
                })
            }
            bindElements(t, e) {
                this._modelToViewMapping.set(t, e), this._viewToModelMapping.set(e, t)
            }
            unbindViewElement(t) {
                const e = this.toModelElement(t);
                this._viewToModelMapping.delete(t), this._modelToViewMapping.get(e) == t && this._modelToViewMapping.delete(e)
            }
            unbindModelElement(t) {
                const e = this.toViewElement(t);
                this._modelToViewMapping.delete(t), this._viewToModelMapping.get(e) == t && this._viewToModelMapping.delete(e)
            }
            bindElementToMarker(t, e) {
                const n = this._markerNameToElements.get(e) || new Set;
                n.add(t), this._markerNameToElements.set(e, n)
            }
            unbindElementsFromMarkerName(t) {
                this._markerNameToElements.delete(t)
            }
            clearBindings() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._markerNameToElements = new Map
            }
            toModelElement(t) {
                return this._viewToModelMapping.get(t)
            }
            toViewElement(t) {
                return this._modelToViewMapping.get(t)
            }
            toModelRange(t) {
                return new Gs(this.toModelPosition(t.start), this.toModelPosition(t.end))
            }
            toViewRange(t) {
                return new Xi(this.toViewPosition(t.start), this.toViewPosition(t.end))
            }
            toModelPosition(t) {
                const e = {
                    viewPosition: t,
                    mapper: this
                };
                return this.fire("viewToModelPosition", e), e.modelPosition
            }
            toViewPosition(t, e = {
                isPhantom: !1
            }) {
                const n = {
                    modelPosition: t,
                    mapper: this,
                    isPhantom: e.isPhantom
                };
                return this.fire("modelToViewPosition", n), n.viewPosition
            }
            markerNameToElements(t) {
                const e = this._markerNameToElements.get(t);
                if (!e) return null;
                const n = new Set;
                for (const t of e)
                    if (t.is("attributeElement"))
                        for (const e of t.getElementsWithSameId()) n.add(e);
                    else n.add(t);
                return n
            }
            registerViewToModelLength(t, e) {
                this._viewToModelLengthCallbacks.set(t, e)
            }
            findMappedViewAncestor(t) {
                let e = t.parent;
                for (; !this._viewToModelMapping.has(e);) e = e.parent;
                return e
            }
            _toModelOffset(t, e, n) {
                if (n != t) {
                    return this._toModelOffset(t.parent, t.index, n) + this._toModelOffset(t, e, t)
                }
                if (t.is("text")) return e;
                let i = 0;
                for (let n = 0; n < e; n++) i += this.getModelLength(t.getChild(n));
                return i
            }
            getModelLength(t) {
                if (this._viewToModelLengthCallbacks.get(t.name)) {
                    return this._viewToModelLengthCallbacks.get(t.name)(t)
                }
                if (this._viewToModelMapping.has(t)) return 1;
                if (t.is("text")) return t.data.length;
                if (t.is("uiElement")) return 0; {
                    let e = 0;
                    for (const n of t.getChildren()) e += this.getModelLength(n);
                    return e
                }
            }
            _findPositionIn(t, e) {
                let n, i = 0,
                    o = 0,
                    r = 0;
                if (t.is("text")) return new Zi(t, e);
                for (; o < e;) n = t.getChild(r), o += i = this.getModelLength(n), r++;
                return o == e ? this._moveViewPositionToTextNode(new Zi(t, r)) : this._findPositionIn(n, e - (o - i))
            }
            _moveViewPositionToTextNode(t) {
                const e = t.nodeBefore,
                    n = t.nodeAfter;
                return e instanceof fi ? new Zi(e, e.data.length) : n instanceof fi ? new Zi(n, 0) : t
            }
        }
        ci(Qs, ei);
        class Js {
            constructor() {
                this._consumable = new Map, this._textProxyRegistry = new Map
            }
            add(t, e) {
                e = Ks(e), t instanceof Fs && (t = this._getSymbolForTextProxy(t)), this._consumable.has(t) || this._consumable.set(t, new Map), this._consumable.get(t).set(e, !0)
            }
            consume(t, e) {
                return e = Ks(e), t instanceof Fs && (t = this._getSymbolForTextProxy(t)), !!this.test(t, e) && (this._consumable.get(t).set(e, !1), !0)
            }
            test(t, e) {
                e = Ks(e), t instanceof Fs && (t = this._getSymbolForTextProxy(t));
                const n = this._consumable.get(t);
                if (void 0 === n) return null;
                const i = n.get(e);
                return void 0 === i ? null : i
            }
            revert(t, e) {
                e = Ks(e), t instanceof Fs && (t = this._getSymbolForTextProxy(t));
                const n = this.test(t, e);
                return !1 === n ? (this._consumable.get(t).set(e, !0), !0) : !0 !== n && null
            }
            _getSymbolForTextProxy(t) {
                let e = null;
                const n = this._textProxyRegistry.get(t.startOffset);
                if (n) {
                    const i = n.get(t.endOffset);
                    i && (e = i.get(t.parent))
                }
                return e || (e = this._addSymbolForTextProxy(t.startOffset, t.endOffset, t.parent)), e
            }
            _addSymbolForTextProxy(t, e, n) {
                const i = Symbol("textProxySymbol");
                let o, r;
                return (o = this._textProxyRegistry.get(t)) || (o = new Map, this._textProxyRegistry.set(t, o)), (r = o.get(e)) || (r = new Map, o.set(e, r)), r.set(n, i), i
            }
        }

        function Ks(t) {
            const e = t.split(":");
            return e.length > 1 ? e[0] + ":" + e[1] : e[0]
        }
        class Zs {
            constructor(t = {}) {
                this.conversionApi = Li({
                    dispatcher: this
                }, t)
            }
            convertChanges(t, e) {
                for (const n of t.getMarkersToRemove()) this.convertMarkerRemove(n.name, n.range, e);
                for (const n of t.getChanges()) "insert" == n.type ? this.convertInsert(Gs._createFromPositionAndShift(n.position, n.length), e) : "remove" == n.type ? this.convertRemove(n.position, n.length, n.name, e) : this.convertAttribute(n.range, n.attributeKey, n.attributeOldValue, n.attributeNewValue, e);
                for (const n of t.getMarkersToAdd()) this.convertMarkerAdd(n.name, n.range, e)
            }
            convertInsert(t, e) {
                this.conversionApi.writer = e, this.conversionApi.consumable = this._createInsertConsumable(t);
                for (const e of t) {
                    const t = e.item,
                        n = {
                            item: t,
                            range: Gs._createFromPositionAndShift(e.previousPosition, e.length)
                        };
                    this._testAndFire("insert", n);
                    for (const e of t.getAttributeKeys()) n.attributeKey = e, n.attributeOldValue = null, n.attributeNewValue = t.getAttribute(e), this._testAndFire(`attribute:${e}`, n)
                }
                this._clearConversionApi()
            }
            convertRemove(t, e, n, i) {
                this.conversionApi.writer = i, this.fire("remove:" + n, {
                    position: t,
                    length: e
                }, this.conversionApi), this._clearConversionApi()
            }
            convertAttribute(t, e, n, i, o) {
                this.conversionApi.writer = o, this.conversionApi.consumable = this._createConsumableForRange(t, `attribute:${e}`);
                for (const o of t) {
                    const t = {
                        item: o.item,
                        range: Gs._createFromPositionAndShift(o.previousPosition, o.length),
                        attributeKey: e,
                        attributeOldValue: n,
                        attributeNewValue: i
                    };
                    this._testAndFire(`attribute:${e}`, t)
                }
                this._clearConversionApi()
            }
            convertSelection(t, e, n) {
                const i = Array.from(e.getMarkersAtPosition(t.getFirstPosition()));
                if (this.conversionApi.writer = n, this.conversionApi.consumable = this._createSelectionConsumable(t, i), this.fire("selection", {
                        selection: t
                    }, this.conversionApi), t.isCollapsed) {
                    for (const e of i) {
                        const n = e.getRange();
                        if (!Xs(t.getFirstPosition(), e, this.conversionApi.mapper)) continue;
                        const i = {
                            item: t,
                            markerName: e.name,
                            markerRange: n
                        };
                        this.conversionApi.consumable.test(t, "addMarker:" + e.name) && this.fire("addMarker:" + e.name, i, this.conversionApi)
                    }
                    for (const e of t.getAttributeKeys()) {
                        const n = {
                            item: t,
                            range: t.getFirstRange(),
                            attributeKey: e,
                            attributeOldValue: null,
                            attributeNewValue: t.getAttribute(e)
                        };
                        this.conversionApi.consumable.test(t, "attribute:" + n.attributeKey) && this.fire("attribute:" + n.attributeKey + ":$text", n, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }
            convertMarkerAdd(t, e, n) {
                if (!e.root.document || "$graveyard" == e.root.rootName) return;
                this.conversionApi.writer = n;
                const i = "addMarker:" + t,
                    o = new Js;
                if (o.add(e, i), this.conversionApi.consumable = o, this.fire(i, {
                        markerName: t,
                        markerRange: e
                    }, this.conversionApi), o.test(e, i)) {
                    this.conversionApi.consumable = this._createConsumableForRange(e, i);
                    for (const n of e.getItems()) {
                        if (!this.conversionApi.consumable.test(n, i)) continue;
                        const o = {
                            item: n,
                            range: Gs._createOn(n),
                            markerName: t,
                            markerRange: e
                        };
                        this.fire(i, o, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }
            convertMarkerRemove(t, e, n) {
                e.root.document && "$graveyard" != e.root.rootName && (this.conversionApi.writer = n, this.fire("removeMarker:" + t, {
                    markerName: t,
                    markerRange: e
                }, this.conversionApi), this._clearConversionApi())
            }
            _createInsertConsumable(t) {
                const e = new Js;
                for (const n of t) {
                    const t = n.item;
                    e.add(t, "insert");
                    for (const n of t.getAttributeKeys()) e.add(t, "attribute:" + n)
                }
                return e
            }
            _createConsumableForRange(t, e) {
                const n = new Js;
                for (const i of t.getItems()) n.add(i, e);
                return n
            }
            _createSelectionConsumable(t, e) {
                const n = new Js;
                n.add(t, "selection");
                for (const i of e) n.add(t, "addMarker:" + i.name);
                for (const e of t.getAttributeKeys()) n.add(t, "attribute:" + e);
                return n
            }
            _testAndFire(t, e) {
                if (!this.conversionApi.consumable.test(e.item, t)) return;
                const n = e.item.name || "$text";
                this.fire(t + ":" + n, e, this.conversionApi)
            }
            _clearConversionApi() {
                delete this.conversionApi.writer, delete this.conversionApi.consumable
            }
        }

        function Xs(t, e, n) {
            const i = e.getRange(),
                o = Array.from(t.getAncestors());
            return o.shift(), o.reverse(), !o.some(t => {
                if (i.containsItem(t)) {
                    return !!n.toViewElement(t).getCustomProperty("addHighlight")
                }
            })
        }
        ci(Zs, ei);
        class ta {
            constructor(t, e, n) {
                this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, t && this.setTo(t, e, n)
            }
            get anchor() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.end : t.start
                }
                return null
            }
            get focus() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.start : t.end
                }
                return null
            }
            get isCollapsed() {
                return 1 === this._ranges.length && this._ranges[0].isCollapsed
            }
            get rangeCount() {
                return this._ranges.length
            }
            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }
            isEqual(t) {
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let n = !1;
                    for (const i of t._ranges)
                        if (e.isEqual(i)) {
                            n = !0;
                            break
                        }
                    if (!n) return !1
                }
                return !0
            } * getRanges() {
                for (const t of this._ranges) yield new Gs(t.start, t.end)
            }
            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? new Gs(t.start, t.end) : null
            }
            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? new Gs(t.start, t.end) : null
            }
            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }
            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }
            setTo(t, e, n) {
                if (null === t) this._setRanges([]);
                else if (t instanceof ta) this._setRanges(t.getRanges(), t.isBackward);
                else if (t && "function" == typeof t.getRanges) this._setRanges(t.getRanges(), t.isBackward);
                else if (t instanceof Gs) this._setRanges([t], !!e && !!e.backward);
                else if (t instanceof $s) this._setRanges([new Gs(t)]);
                else if (t instanceof Bs) {
                    const i = !!n && !!n.backward;
                    let o;
                    if ("in" == e) o = Gs._createIn(t);
                    else if ("on" == e) o = Gs._createOn(t);
                    else {
                        if (void 0 === e) throw new Gn.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");
                        o = new Gs($s._createAt(t, e))
                    }
                    this._setRanges([o], i)
                } else {
                    if (!gi(t)) throw new Gn.b("model-selection-setTo-not-selectable: Cannot set selection to given place.");
                    this._setRanges(t, e && !!e.backward)
                }
            }
            _setRanges(t, e = !1) {
                const n = (t = Array.from(t)).some(t => {
                    if (!(t instanceof Gs)) throw new Gn.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.");
                    return this._ranges.every(e => !e.isEqual(t))
                });
                if (t.length !== this._ranges.length || n) {
                    this._removeAllRanges();
                    for (const e of t) this._pushRange(e);
                    this._lastRangeBackward = !!e, this.fire("change:range", {
                        directChange: !0
                    })
                }
            }
            setFocus(t, e) {
                if (null === this.anchor) throw new Gn.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");
                const n = $s._createAt(t, e);
                if ("same" == n.compareWith(this.focus)) return;
                const i = this.anchor;
                this._ranges.length && this._popRange(), "before" == n.compareWith(i) ? (this._pushRange(new Gs(n, i)), this._lastRangeBackward = !0) : (this._pushRange(new Gs(i, n)), this._lastRangeBackward = !1), this.fire("change:range", {
                    directChange: !0
                })
            }
            getAttribute(t) {
                return this._attrs.get(t)
            }
            getAttributes() {
                return this._attrs.entries()
            }
            getAttributeKeys() {
                return this._attrs.keys()
            }
            hasAttribute(t) {
                return this._attrs.has(t)
            }
            removeAttribute(t) {
                this.hasAttribute(t) && (this._attrs.delete(t), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }
            setAttribute(t, e) {
                this.getAttribute(t) !== e && (this._attrs.set(t, e), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }
            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange(),
                    e = t.start.nodeAfter,
                    n = t.end.nodeBefore;
                return e instanceof Hs && e == n ? e : null
            }
            is(t) {
                return "selection" == t
            } * getSelectedBlocks() {
                const t = new WeakSet;
                for (const e of this.getRanges()) {
                    const n = na(e.start, t);
                    n && (yield n);
                    for (const n of e.getWalker()) "elementEnd" == n.type && ea(n.item, t) && (yield n.item);
                    const i = na(e.end, t);
                    i && !e.end.isTouching($s._createAt(i, 0)) && (yield i)
                }
            } * getTopMostBlocks() {
                const t = Array.from(this.getSelectedBlocks());
                for (const e of t) {
                    const n = ia(e);
                    n && t.includes(n) || (yield e)
                }
            }
            containsEntireContent(t = this.anchor.root) {
                const e = $s._createAt(t, 0),
                    n = $s._createAt(t, "end");
                return e.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition())
            }
            _pushRange(t) {
                this._checkRange(t), this._ranges.push(new Gs(t.start, t.end))
            }
            _checkRange(t) {
                for (let e = 0; e < this._ranges.length; e++)
                    if (t.isIntersecting(this._ranges[e])) throw new Gn.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.", {
                        addedRange: t,
                        intersectingRange: this._ranges[e]
                    })
            }
            _removeAllRanges() {
                for (; this._ranges.length > 0;) this._popRange()
            }
            _popRange() {
                this._ranges.pop()
            }
        }

        function ea(t, e) {
            return !e.has(t) && (e.add(t), t.document.model.schema.isBlock(t) && t.parent)
        }

        function na(t, e) {
            const n = t.parent.document.model.schema,
                i = t.parent.getAncestors({
                    parentFirst: !0,
                    includeSelf: !0
                });
            let o = !1;
            const r = i.find(t => !o && (!(o = n.isLimit(t)) && ea(t, e)));
            return i.forEach(t => e.add(t)), r
        }

        function ia(t) {
            const e = t.document.model.schema;
            let n = t.parent;
            for (; n;) {
                if (e.isBlock(n)) return n;
                n = n.parent
            }
        }
        ci(ta, ei);
        class oa extends Gs {
            constructor(t, e) {
                super(t, e),
                    function() {
                        this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                            const n = e[0];
                            n.isDocumentOperation && function(t) {
                                const e = this.getTransformedByOperation(t),
                                    n = Gs._createFromRanges(e),
                                    i = !n.isEqual(this),
                                    o = function(t, e) {
                                        switch (e.type) {
                                            case "insert":
                                                return t.containsPosition(e.position);
                                            case "move":
                                            case "remove":
                                            case "reinsert":
                                            case "merge":
                                                return t.containsPosition(e.sourcePosition) || t.start.isEqual(e.sourcePosition) || t.containsPosition(e.targetPosition);
                                            case "split":
                                                return t.containsPosition(e.splitPosition) || t.containsPosition(e.insertionPosition)
                                        }
                                        return !1
                                    }(this, t);
                                let r = null;
                                if (i) {
                                    "$graveyard" == n.root.rootName && (r = "remove" == t.type ? t.sourcePosition : t.deletionPosition);
                                    const e = this.toRange();
                                    this.start = n.start, this.end = n.end, this.fire("change:range", e, {
                                        deletionPosition: r
                                    })
                                } else o && this.fire("change:content", this.toRange(), {
                                    deletionPosition: r
                                })
                            }.call(this, n)
                        }, {
                            priority: "low"
                        })
                    }.call(this)
            }
            detach() {
                this.stopListening()
            }
            toRange() {
                return new Gs(this.start, this.end)
            }
            static fromRange(t) {
                return new oa(t.start, t.end)
            }
        }
        ci(oa, ei);
        const ra = "selection:";
        class sa {
            constructor(t) {
                this._selection = new aa(t), this._selection.delegate("change:range").to(this), this._selection.delegate("change:attribute").to(this)
            }
            get isCollapsed() {
                return this._selection.isCollapsed
            }
            get anchor() {
                return this._selection.anchor
            }
            get focus() {
                return this._selection.focus
            }
            get rangeCount() {
                return this._selection.rangeCount
            }
            get hasOwnRange() {
                return this._selection.hasOwnRange
            }
            get isBackward() {
                return this._selection.isBackward
            }
            get isGravityOverridden() {
                return this._selection.isGravityOverridden
            }
            get markers() {
                return this._selection.markers
            }
            get _ranges() {
                return this._selection._ranges
            }
            getRanges() {
                return this._selection.getRanges()
            }
            getFirstPosition() {
                return this._selection.getFirstPosition()
            }
            getLastPosition() {
                return this._selection.getLastPosition()
            }
            getFirstRange() {
                return this._selection.getFirstRange()
            }
            getLastRange() {
                return this._selection.getLastRange()
            }
            getSelectedBlocks() {
                return this._selection.getSelectedBlocks()
            }
            getTopMostBlocks() {
                return this._selection.getTopMostBlocks()
            }
            getSelectedElement() {
                return this._selection.getSelectedElement()
            }
            containsEntireContent(t) {
                return this._selection.containsEntireContent(t)
            }
            destroy() {
                this._selection.destroy()
            }
            getAttributeKeys() {
                return this._selection.getAttributeKeys()
            }
            getAttributes() {
                return this._selection.getAttributes()
            }
            getAttribute(t) {
                return this._selection.getAttribute(t)
            }
            hasAttribute(t) {
                return this._selection.hasAttribute(t)
            }
            is(t) {
                return "selection" == t || "documentSelection" == t
            }
            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }
            _setTo(t, e, n) {
                this._selection.setTo(t, e, n)
            }
            _setAttribute(t, e) {
                this._selection.setAttribute(t, e)
            }
            _removeAttribute(t) {
                this._selection.removeAttribute(t)
            }
            _getStoredAttributes() {
                return this._selection._getStoredAttributes()
            }
            _overrideGravity() {
                return this._selection.overrideGravity()
            }
            _restoreGravity(t) {
                this._selection.restoreGravity(t)
            }
            static _getStoreAttributeKey(t) {
                return ra + t
            }
            static _isStoreAttributeKey(t) {
                return t.startsWith(ra)
            }
        }
        ci(sa, ei);
        class aa extends ta {
            constructor(t) {
                super(), this.markers = new oo({
                    idProperty: "name"
                }), this._model = t.model, this._document = t, this._attributePriority = new Map, this._fixGraveyardRangesData = [], this._hasChangedRange = !1, this._overriddenGravityRegister = new Set, this.on("change:range", () => {
                    for (const t of this.getRanges())
                        if (!this._document._validateSelectionRange(t)) throw new Gn.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.", {
                            range: t
                        });
                    this._updateMarkers(), this._updateAttributes(!1)
                }), this.listenTo(this._model.markers, "update", () => this._updateMarkers()), this.listenTo(this._model, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (n.isDocumentOperation && "marker" != n.type && "rename" != n.type && "noop" != n.type) {
                        for (; this._fixGraveyardRangesData.length;) {
                            const {
                                liveRange: t,
                                sourcePosition: e
                            } = this._fixGraveyardRangesData.shift();
                            this._fixGraveyardSelection(t, e)
                        }
                        this._hasChangedRange && (this._hasChangedRange = !1, this.fire("change:range", {
                            directChange: !1
                        })), this._updateMarkers(), this._updateAttributes(!1)
                    }
                }, {
                    priority: "lowest"
                }), this.listenTo(this._document, "change", (t, e) => {
                    ! function(t, e) {
                        const n = t.document.differ;
                        for (const i of n.getChanges()) {
                            if ("insert" != i.type) continue;
                            const n = i.position.parent,
                                o = i.length === n.maxOffset;
                            o && t.enqueueChange(e, t => {
                                const e = Array.from(n.getAttributeKeys()).filter(t => t.startsWith(ra));
                                for (const i of e) t.removeAttribute(i, n)
                            })
                        }
                    }(this._model, e)
                })
            }
            get isCollapsed() {
                return 0 === this._ranges.length ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
            }
            get anchor() {
                return super.anchor || this._document._getDefaultRange().start
            }
            get focus() {
                return super.focus || this._document._getDefaultRange().end
            }
            get rangeCount() {
                return this._ranges.length ? this._ranges.length : 1
            }
            get hasOwnRange() {
                return this._ranges.length > 0
            }
            get isGravityOverridden() {
                return !!this._overriddenGravityRegister.size
            }
            destroy() {
                for (let t = 0; t < this._ranges.length; t++) this._ranges[t].detach();
                this.stopListening()
            } * getRanges() {
                this._ranges.length ? yield * super.getRanges() : yield this._document._getDefaultRange()
            }
            getFirstRange() {
                return super.getFirstRange() || this._document._getDefaultRange()
            }
            getLastRange() {
                return super.getLastRange() || this._document._getDefaultRange()
            }
            setTo(t, e, n) {
                super.setTo(t, e, n), this._refreshAttributes()
            }
            setFocus(t, e) {
                super.setFocus(t, e), this._refreshAttributes()
            }
            setAttribute(t, e) {
                if (this._setAttribute(t, e)) {
                    const e = [t];
                    this.fire("change:attribute", {
                        attributeKeys: e,
                        directChange: !0
                    })
                }
            }
            removeAttribute(t) {
                if (this._removeAttribute(t)) {
                    const e = [t];
                    this.fire("change:attribute", {
                        attributeKeys: e,
                        directChange: !0
                    })
                }
            }
            overrideGravity() {
                const t = Kn();
                return this._overriddenGravityRegister.add(t), 1 === this._overriddenGravityRegister.size && this._refreshAttributes(), t
            }
            restoreGravity(t) {
                if (!this._overriddenGravityRegister.has(t)) throw new Gn.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.", {
                    uid: t
                });
                this._overriddenGravityRegister.delete(t), this.isGravityOverridden || this._refreshAttributes()
            }
            _refreshAttributes() {
                this._updateAttributes(!0)
            }
            _popRange() {
                this._ranges.pop().detach()
            }
            _pushRange(t) {
                const e = this._prepareRange(t);
                e && this._ranges.push(e)
            }
            _prepareRange(t) {
                if (this._checkRange(t), t.root == this._document.graveyard) return void bs.a.warn("model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.");
                const e = oa.fromRange(t);
                return e.on("change:range", (t, n, i) => {
                    this._hasChangedRange = !0, e.root == this._document.graveyard && this._fixGraveyardRangesData.push({
                        liveRange: e,
                        sourcePosition: i.deletionPosition
                    })
                }), e
            }
            _updateMarkers() {
                const t = [];
                for (const e of this._model.markers) {
                    const n = e.getRange();
                    for (const i of this.getRanges()) n.containsRange(i, !i.isCollapsed) && t.push(e)
                }
                for (const e of t) this.markers.has(e) || this.markers.add(e);
                for (const e of Array.from(this.markers)) t.includes(e) || this.markers.remove(e)
            }
            _updateAttributes(t) {
                const e = Vs(this._getSurroundingAttributes()),
                    n = Vs(this.getAttributes());
                if (t) this._attributePriority = new Map, this._attrs = new Map;
                else
                    for (const [t, e] of this._attributePriority) "low" == e && (this._attrs.delete(t), this._attributePriority.delete(t));
                this._setAttributesTo(e);
                const i = [];
                for (const [t, e] of this.getAttributes()) n.has(t) && n.get(t) === e || i.push(t);
                for (const [t] of n) this.hasAttribute(t) || i.push(t);
                i.length > 0 && this.fire("change:attribute", {
                    attributeKeys: i,
                    directChange: !1
                })
            }
            _setAttribute(t, e, n = !0) {
                const i = n ? "normal" : "low";
                return ("low" != i || "normal" != this._attributePriority.get(t)) && (super.getAttribute(t) !== e && (this._attrs.set(t, e), this._attributePriority.set(t, i), !0))
            }
            _removeAttribute(t, e = !0) {
                const n = e ? "normal" : "low";
                return ("low" != n || "normal" != this._attributePriority.get(t)) && (this._attributePriority.set(t, n), !!super.hasAttribute(t) && (this._attrs.delete(t), !0))
            }
            _setAttributesTo(t) {
                const e = new Set;
                for (const [e, n] of this.getAttributes()) t.get(e) !== n && this._removeAttribute(e, !1);
                for (const [n, i] of t) {
                    this._setAttribute(n, i, !1) && e.add(n)
                }
                return e
            } * _getStoredAttributes() {
                const t = this.getFirstPosition().parent;
                if (this.isCollapsed && t.isEmpty)
                    for (const e of t.getAttributeKeys())
                        if (e.startsWith(ra)) {
                            yield [e.substr(ra.length), t.getAttribute(e)]
                        }
            }
            _getSurroundingAttributes() {
                const t = this.getFirstPosition(),
                    e = this._model.schema;
                let n = null;
                if (this.isCollapsed) {
                    const e = t.textNode ? t.textNode : t.nodeBefore,
                        i = t.textNode ? t.textNode : t.nodeAfter;
                    if (this.isGravityOverridden || (n = ca(e)), n || (n = ca(i)), !this.isGravityOverridden && !n) {
                        let t = e;
                        for (; t && !n;) n = ca(t = t.previousSibling)
                    }
                    if (!n) {
                        let t = i;
                        for (; t && !n;) n = ca(t = t.nextSibling)
                    }
                    n || (n = this._getStoredAttributes())
                } else {
                    const t = this.getFirstRange();
                    for (const i of t) {
                        if (i.item.is("element") && e.isObject(i.item)) break;
                        if ("text" == i.type) {
                            n = i.item.getAttributes();
                            break
                        }
                    }
                }
                return n
            }
            _fixGraveyardSelection(t, e) {
                const n = e.clone(),
                    i = this._model.schema.getNearestSelectionRange(n),
                    o = this._ranges.indexOf(t);
                if (this._ranges.splice(o, 1), t.detach(), i) {
                    const t = this._prepareRange(i);
                    this._ranges.splice(o, 0, t)
                }
            }
        }

        function ca(t) {
            return t instanceof Fs || t instanceof zs ? t.getAttributes() : null
        }
        class la {
            constructor(t) {
                this._dispatchers = t
            }
            add(t) {
                for (const e of this._dispatchers) t(e);
                return this
            }
        }
        var da = 1,
            ua = 4;
        var ha = function(t) {
            return Fn(t, da | ua)
        };
        class fa extends la {
            elementToElement(t) {
                return this.add(function(t) {
                    return (t = ha(t)).view = pa(t.view, "container"), e => {
                        e.on("insert:" + t.model, function(t) {
                            return (e, n, i) => {
                                const o = t(n.item, i.writer);
                                if (!o) return;
                                if (!i.consumable.consume(n.item, "insert")) return;
                                const r = i.mapper.toViewPosition(n.range.start);
                                i.mapper.bindElements(n.item, o), i.writer.insert(r, o)
                            }
                        }(t.view), {
                            priority: t.converterPriority || "normal"
                        })
                    }
                }(t))
            }
            attributeToElement(t) {
                return this.add(function(t) {
                    let e = "attribute:" + ((t = ha(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values)
                        for (const e of t.model.values) t.view[e] = pa(t.view[e], "attribute");
                    else t.view = pa(t.view, "attribute");
                    const n = ga(t);
                    return i => {
                        i.on(e, function(t) {
                            return (e, n, i) => {
                                const o = t(n.attributeOldValue, i.writer),
                                    r = t(n.attributeNewValue, i.writer);
                                if (!o && !r) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const s = i.writer,
                                    a = s.document.selection;
                                if (n.item instanceof ta || n.item instanceof sa) s.wrap(a.getFirstRange(), r);
                                else {
                                    let t = i.mapper.toViewRange(n.range);
                                    null !== n.attributeOldValue && o && (t = s.unwrap(t, o)), null !== n.attributeNewValue && r && s.wrap(t, r)
                                }
                            }
                        }(n), {
                            priority: t.converterPriority || "normal"
                        })
                    }
                }(t))
            }
            attributeToAttribute(t) {
                return this.add(function(t) {
                    let e = "attribute:" + ((t = ha(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values)
                        for (const e of t.model.values) t.view[e] = ba(t.view[e]);
                    else t.view = ba(t.view);
                    const n = ga(t);
                    return i => {
                        i.on(e, function(t) {
                            return (e, n, i) => {
                                const o = t(n.attributeOldValue, n),
                                    r = t(n.attributeNewValue, n);
                                if (!o && !r) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const s = i.mapper.toViewElement(n.item),
                                    a = i.writer;
                                if (s) {
                                    if (null !== n.attributeOldValue && o)
                                        if ("class" == o.key) {
                                            const t = Array.isArray(o.value) ? o.value : [o.value];
                                            for (const e of t) a.removeClass(e, s)
                                        } else if ("style" == o.key) {
                                        const t = Object.keys(o.value);
                                        for (const e of t) a.removeStyle(e, s)
                                    } else a.removeAttribute(o.key, s);
                                    if (null !== n.attributeNewValue && r)
                                        if ("class" == r.key) {
                                            const t = Array.isArray(r.value) ? r.value : [r.value];
                                            for (const e of t) a.addClass(e, s)
                                        } else if ("style" == r.key) {
                                        const t = Object.keys(r.value);
                                        for (const e of t) a.setStyle(e, r.value[e], s)
                                    } else a.setAttribute(r.key, r.value, s)
                                } else bs.a.warn("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.")
                            }
                        }(n), {
                            priority: t.converterPriority || "normal"
                        })
                    }
                }(t))
            }
            markerToElement(t) {
                return this.add(function(t) {
                    return (t = ha(t)).view = pa(t.view, "ui"), e => {
                        e.on("addMarker:" + t.model, function(t) {
                            return (e, n, i) => {
                                n.isOpening = !0;
                                const o = t(n, i.writer);
                                n.isOpening = !1;
                                const r = t(n, i.writer);
                                if (!o || !r) return;
                                const s = n.markerRange;
                                if (s.isCollapsed && !i.consumable.consume(s, e.name)) return;
                                for (const t of s)
                                    if (!i.consumable.consume(t.item, e.name)) return;
                                const a = i.mapper,
                                    c = i.writer;
                                c.insert(a.toViewPosition(s.start), o), i.mapper.bindElementToMarker(o, n.markerName), s.isCollapsed || (c.insert(a.toViewPosition(s.end), r), i.mapper.bindElementToMarker(r, n.markerName)), e.stop()
                            }
                        }(t.view), {
                            priority: t.converterPriority || "normal"
                        }), e.on("removeMarker:" + t.model, (t.view, (t, e, n) => {
                            const i = n.mapper.markerNameToElements(e.markerName);
                            if (i) {
                                n.mapper.unbindElementsFromMarkerName(e.markerName);
                                for (const t of i) n.writer.clear(n.writer.createRangeOn(t), t);
                                n.writer.clearClonedElementsGroup(e.markerName), t.stop()
                            }
                        }), {
                            priority: t.converterPriority || "normal"
                        })
                    }
                }(t))
            }
            markerToHighlight(t) {
                return this.add(function(t) {
                    return e => {
                        e.on("addMarker:" + t.model, function(t) {
                            return (e, n, i) => {
                                if (!n.item) return;
                                if (!(n.item instanceof ta || n.item instanceof sa || n.item.is("textProxy"))) return;
                                const o = wa(t, n, i);
                                if (!o) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const r = ma(o),
                                    s = i.writer,
                                    a = s.document.selection;
                                if (n.item instanceof ta || n.item instanceof sa) s.wrap(a.getFirstRange(), r, a);
                                else {
                                    const t = i.mapper.toViewRange(n.range),
                                        e = s.wrap(t, r);
                                    for (const t of e.getItems())
                                        if (t.is("attributeElement") && t.isSimilar(r)) {
                                            i.mapper.bindElementToMarker(t, n.markerName);
                                            break
                                        }
                                }
                            }
                        }(t.view), {
                            priority: t.converterPriority || "normal"
                        }), e.on("addMarker:" + t.model, function(t) {
                            return (e, n, i) => {
                                if (!n.item) return;
                                if (!(n.item instanceof Hs)) return;
                                const o = wa(t, n, i);
                                if (!o) return;
                                if (!i.consumable.test(n.item, e.name)) return;
                                const r = i.mapper.toViewElement(n.item);
                                if (r && r.getCustomProperty("addHighlight")) {
                                    i.consumable.consume(n.item, e.name);
                                    for (const t of Gs._createIn(n.item)) i.consumable.consume(t.item, e.name);
                                    r.getCustomProperty("addHighlight")(r, o, i.writer), i.mapper.bindElementToMarker(r, n.markerName)
                                }
                            }
                        }(t.view), {
                            priority: t.converterPriority || "normal"
                        }), e.on("removeMarker:" + t.model, function(t) {
                            return (e, n, i) => {
                                if (n.markerRange.isCollapsed) return;
                                const o = wa(t, n, i);
                                if (!o) return;
                                const r = ma(o),
                                    s = i.mapper.markerNameToElements(n.markerName);
                                if (s) {
                                    i.mapper.unbindElementsFromMarkerName(n.markerName);
                                    for (const t of s) t.is("attributeElement") ? i.writer.unwrap(i.writer.createRangeOn(t), r) : t.getCustomProperty("removeHighlight")(t, o.id, i.writer);
                                    i.writer.clearClonedElementsGroup(n.markerName), e.stop()
                                }
                            }
                        }(t.view), {
                            priority: t.converterPriority || "normal"
                        })
                    }
                }(t))
            }
        }

        function ma(t) {
            const e = new ao("span", t.attributes);
            return t.classes && e._addClass(t.classes), t.priority && (e._priority = t.priority), e._id = t.id, e
        }

        function pa(t, e) {
            return "function" == typeof t ? t : (n, i) => (function(t, e, n) {
                "string" == typeof t && (t = {
                    name: t
                });
                let i;
                const o = Object.assign({}, t.attributes);
                if ("container" == n) i = e.createContainerElement(t.name, o);
                else if ("attribute" == n) {
                    const n = {
                        priority: t.priority || ao.DEFAULT_PRIORITY
                    };
                    i = e.createAttributeElement(t.name, o, n)
                } else i = e.createUIElement(t.name, o);
                if (t.styles) {
                    const n = Object.keys(t.styles);
                    for (const o of n) e.setStyle(o, t.styles[o], i)
                }
                if (t.classes) {
                    const n = t.classes;
                    if ("string" == typeof n) e.addClass(n, i);
                    else
                        for (const t of n) e.addClass(t, i)
                }
                return i
            })(t, i, e)
        }

        function ga(t) {
            return t.model.values ? (e, n) => {
                const i = t.view[e];
                return i ? i(e, n) : null
            } : t.view
        }

        function ba(t) {
            return "string" == typeof t ? e => ({
                key: t,
                value: e
            }) : "object" == typeof t ? t.value ? () => t : e => ({
                key: t.key,
                value: e
            }) : t
        }

        function wa(t, e, n) {
            const i = "function" == typeof t ? t(e, n) : t;
            return i ? (i.priority || (i.priority = 10), i.id || (i.id = e.markerName), i) : null
        }
        class _a extends la {
            elementToElement(t) {
                return this.add(ka(t))
            }
            elementToAttribute(t) {
                return this.add(function(t) {
                    ya(t = ha(t));
                    const e = xa(t, !1),
                        n = va(t),
                        i = n ? "element:" + n : "element";
                    return n => {
                        n.on(i, e, {
                            priority: t.converterPriority || "low"
                        })
                    }
                }(t))
            }
            attributeToAttribute(t) {
                return this.add(function(t) {
                    let e = null;
                    ("string" == typeof(t = ha(t)).view || t.view.key) && (e = function(t) {
                        "string" == typeof t.view && (t.view = {
                            key: t.view
                        });
                        const e = t.view.key;
                        let n;
                        if ("class" == e || "style" == e) {
                            const i = "class" == e ? "classes" : "styles";
                            n = {
                                [i]: t.view.value
                            }
                        } else {
                            const i = void 0 === t.view.value ? /[\s\S]*/ : t.view.value;
                            n = {
                                attributes: {
                                    [e]: i
                                }
                            }
                        }
                        t.view.name && (n.name = t.view.name);
                        return t.view = n, e
                    }(t));
                    ya(t, e);
                    const n = xa(t, !0);
                    return e => {
                        e.on("element", n, {
                            priority: t.converterPriority || "low"
                        })
                    }
                }(t))
            }
            elementToMarker(t) {
                return this.add(function(t) {
                    return function(t) {
                        const e = t.model;
                        t.model = ((t, n) => {
                            const i = "string" == typeof e ? e : e(t);
                            return n.createElement("$marker", {
                                "data-name": i
                            })
                        })
                    }(t = ha(t)), ka(t)
                }(t))
            }
        }

        function ka(t) {
            const e = function(t) {
                    const e = new bi(t.view);
                    return (n, i, o) => {
                        const r = e.match(i.viewItem);
                        if (!r) return;
                        r.match.name = !0;
                        const s = function(t, e, n) {
                            return t instanceof Function ? t(e, n) : n.createElement(t)
                        }(t.model, i.viewItem, o.writer);
                        if (!s) return;
                        if (!o.consumable.test(i.viewItem, r.match)) return;
                        const a = o.splitToAllowedParent(s, i.modelCursor);
                        if (!a) return;
                        o.writer.insert(s, a.position);
                        const c = o.convertChildren(i.viewItem, o.writer.createPositionAt(s, 0));
                        o.consumable.consume(i.viewItem, r.match), i.modelRange = new Gs(o.writer.createPositionBefore(s), o.writer.createPositionAfter(c.modelCursor.parent)), a.cursorParent ? i.modelCursor = o.writer.createPositionAt(a.cursorParent, 0) : i.modelCursor = i.modelRange.end
                    }
                }(t = ha(t)),
                n = va(t),
                i = n ? "element:" + n : "element";
            return n => {
                n.on(i, e, {
                    priority: t.converterPriority || "normal"
                })
            }
        }

        function va(t) {
            return "string" == typeof t.view ? t.view : "object" == typeof t.view && "string" == typeof t.view.name ? t.view.name : null
        }

        function ya(t, e = null) {
            const n = null === e || (t => t.getAttribute(e)),
                i = "object" != typeof t.model ? t.model : t.model.key,
                o = "object" != typeof t.model || void 0 === t.model.value ? n : t.model.value;
            t.model = {
                key: i,
                value: o
            }
        }

        function xa(t, e) {
            const n = new bi(t.view);
            return (i, o, r) => {
                const s = n.match(o.viewItem);
                if (!s) return;
                const a = t.model.key,
                    c = "function" == typeof t.model.value ? t.model.value(o.viewItem) : t.model.value;
                null !== c && (! function(t) {
                    if ("object" == typeof t.view && !va(t)) return !1;
                    return !t.view.classes && !t.view.attributes && !t.view.styles
                }(t) ? delete s.match.name : s.match.name = !0, r.consumable.test(o.viewItem, s.match) && (o.modelRange || (o = Object.assign(o, r.convertChildren(o.viewItem, o.modelCursor))), function(t, e, n, i) {
                    let o = !1;
                    for (const r of Array.from(t.getItems({
                            shallow: n
                        }))) i.schema.checkAttribute(r, e.key) && (i.writer.setAttribute(e.key, e.value, r), o = !0);
                    return o
                }(o.modelRange, {
                    key: a,
                    value: c
                }, e, r) && r.consumable.consume(o.viewItem, s.match)))
            }
        }
        class Aa {
            constructor(t) {
                this.model = t, this.view = new js, this.mapper = new Qs, this.downcastDispatcher = new Zs({
                    mapper: this.mapper
                });
                const e = this.model.document,
                    n = e.selection,
                    i = this.model.markers;
                this.listenTo(this.model, "_beforeChanges", () => {
                    this.view._disableRendering(!0)
                }, {
                    priority: "highest"
                }), this.listenTo(this.model, "_afterChanges", () => {
                    this.view._disableRendering(!1)
                }, {
                    priority: "lowest"
                }), this.listenTo(e, "change", () => {
                    this.view.change(t => {
                        this.downcastDispatcher.convertChanges(e.differ, t), this.downcastDispatcher.convertSelection(n, i, t)
                    })
                }, {
                    priority: "low"
                }), this.listenTo(this.view.document, "selectionChange", function(t, e) {
                    return (n, i) => {
                        const o = i.newSelection,
                            r = new ta,
                            s = [];
                        for (const t of o.getRanges()) s.push(e.toModelRange(t));
                        r.setTo(s, {
                            backward: o.isBackward
                        }), r.isEqual(t.document.selection) || t.change(t => {
                            t.setSelection(r)
                        })
                    }
                }(this.model, this.mapper)), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
                    if (!n.consumable.consume(e.item, "insert")) return;
                    const i = n.writer,
                        o = n.mapper.toViewPosition(e.range.start),
                        r = i.createText(e.item.data);
                    i.insert(o, r)
                }, {
                    priority: "lowest"
                }), this.downcastDispatcher.on("remove", (t, e, n) => {
                    const i = n.mapper.toViewPosition(e.position),
                        o = e.position.getShiftedBy(e.length),
                        r = n.mapper.toViewPosition(o, {
                            isPhantom: !0
                        }),
                        s = n.writer.createRange(i, r),
                        a = n.writer.remove(s.getTrimmed());
                    for (const t of n.writer.createRangeIn(a).getItems()) n.mapper.unbindViewElement(t)
                }, {
                    priority: "low"
                }), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = n.writer,
                        o = i.document.selection;
                    for (const t of o.getRanges()) t.isCollapsed && t.end.parent.document && n.writer.mergeAttributes(t.start);
                    i.setSelection(null)
                }, {
                    priority: "low"
                }), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = e.selection;
                    if (i.isCollapsed) return;
                    if (!n.consumable.consume(i, "selection")) return;
                    const o = [];
                    for (const t of i.getRanges()) {
                        const e = n.mapper.toViewRange(t);
                        o.push(e)
                    }
                    n.writer.setSelection(o, {
                        backward: i.isBackward
                    })
                }, {
                    priority: "low"
                }), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = e.selection;
                    if (!i.isCollapsed) return;
                    if (!n.consumable.consume(i, "selection")) return;
                    const o = n.writer,
                        r = i.getFirstPosition(),
                        s = n.mapper.toViewPosition(r),
                        a = o.breakAttributes(s);
                    o.setSelection(a)
                }, {
                    priority: "low"
                }), this.view.document.roots.bindTo(this.model.document.roots).using(t => {
                    if ("$graveyard" == t.rootName) return null;
                    const e = new Ji(t.name);
                    return e.rootName = t.rootName, e._document = this.view.document, this.mapper.bindElements(t, e), e
                })
            }
            destroy() {
                this.view.destroy(), this.stopListening()
            }
        }
        ci(Aa, Fi);
        class Ca {
            constructor(t, e = []) {
                this._editor = t, this._availablePlugins = new Map, this._plugins = new Map;
                for (const t of e) this._availablePlugins.set(t, t), t.pluginName && this._availablePlugins.set(t.pluginName, t)
            } * [Symbol.iterator]() {
                for (const t of this._plugins) "function" == typeof t[0] && (yield t)
            }
            get(t) {
                const e = this._plugins.get(t);
                if (!e) {
                    const e = "plugincollection-plugin-not-loaded: The requested plugin is not loaded.";
                    let n = t;
                    throw "function" == typeof t && (n = t.pluginName || t.name), new Gn.b(e, {
                        plugin: n
                    })
                }
                return e
            }
            has(t) {
                return this._plugins.has(t)
            }
            init(t, e = []) {
                const n = this,
                    i = this._editor,
                    o = new Set,
                    r = [],
                    s = h(t),
                    a = h(e),
                    c = function(t) {
                        const e = [];
                        for (const n of t) u(n) || e.push(n);
                        return e.length ? e : null
                    }(t);
                if (c) {
                    const t = "plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";
                    return bs.a.error(t, {
                        plugins: c
                    }), Promise.reject(new Gn.b(t, {
                        plugins: c
                    }))
                }
                return Promise.all(s.map(l)).then(() => d(r, "init")).then(() => d(r, "afterInit")).then(() => r);

                function l(t) {
                    if (!a.includes(t) && !n._plugins.has(t) && !o.has(t)) return function(t) {
                        return new Promise(s => {
                            o.add(t), t.requires && t.requires.forEach(n => {
                                const i = u(n);
                                if (e.includes(i)) throw new Gn.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.", {
                                    plugin: i,
                                    requiredBy: t
                                });
                                l(i)
                            });
                            const a = new t(i);
                            n._add(t, a), r.push(a), s()
                        })
                    }(t).catch(e => {
                        throw bs.a.error("plugincollection-load: It was not possible to load the plugin.", {
                            plugin: t
                        }), e
                    })
                }

                function d(t, e) {
                    return t.reduce((t, n) => n[e] ? t.then(n[e].bind(n)) : t, Promise.resolve())
                }

                function u(t) {
                    return "function" == typeof t ? t : n._availablePlugins.get(t)
                }

                function h(t) {
                    return t.map(t => u(t)).filter(t => !!t)
                }
            }
            destroy() {
                const t = Array.from(this).map(([, t]) => t).filter(t => "function" == typeof t.destroy).map(t => t.destroy());
                return Promise.all(t)
            }
            _add(t, e) {
                this._plugins.set(t, e);
                const n = t.pluginName;
                n && (this._plugins.has(n) ? bs.a.warn("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.", {
                    pluginName: n,
                    plugin1: this._plugins.get(n).constructor,
                    plugin2: t
                }) : this._plugins.set(n, e))
            }
        }
        ci(Ca, ei);
        class Ta {
            constructor() {
                this._commands = new Map
            }
            add(t, e) {
                this._commands.set(t, e)
            }
            get(t) {
                return this._commands.get(t)
            }
            execute(t, ...e) {
                const n = this.get(t);
                if (!n) throw new Gn.b("commandcollection-command-not-found: Command does not exist.", {
                    commandName: t
                });
                n.execute(...e)
            } * names() {
                yield * this._commands.keys()
            } * commands() {
                yield * this._commands.values()
            }[Symbol.iterator]() {
                return this._commands[Symbol.iterator]()
            }
            destroy() {
                for (const t of this.commands()) t.destroy()
            }
        }

        function Pa(t, e) {
            const n = Object.keys(window.CKEDITOR_TRANSLATIONS).length;
            return 1 === n && (t = Object.keys(window.CKEDITOR_TRANSLATIONS)[0]), 0 !== n && function(t, e) {
                return t in window.CKEDITOR_TRANSLATIONS && e in window.CKEDITOR_TRANSLATIONS[t]
            }(t, e) ? window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/, "") : e.replace(/ \[context: [^\]]+\]$/, "")
        }
        window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {});
        class Ma {
            constructor(t) {
                this.language = t || "en", this.t = ((...t) => this._t(...t))
            }
            _t(t, e) {
                let n = Pa(this.language, t);
                return e && (n = n.replace(/%(\d+)/g, (t, n) => n < e.length ? e[n] : t)), n
            }
        }
        class Ea {
            constructor() {
                this._consumables = new Map
            }
            add(t, e) {
                let n;
                t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : (this._consumables.has(t) ? n = this._consumables.get(t) : (n = new Sa, this._consumables.set(t, n)), n.add(e))
            }
            test(t, e) {
                const n = this._consumables.get(t);
                return void 0 === n ? null : t.is("text") || t.is("documentFragment") ? n : n.test(e)
            }
            consume(t, e) {
                return !!this.test(t, e) && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !1) : this._consumables.get(t).consume(e), !0)
            }
            revert(t, e) {
                const n = this._consumables.get(t);
                void 0 !== n && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : n.revert(e))
            }
            static consumablesFromElement(t) {
                const e = {
                        name: !0,
                        attributes: [],
                        classes: [],
                        styles: []
                    },
                    n = t.getAttributeKeys();
                for (const t of n) "style" != t && "class" != t && e.attributes.push(t);
                const i = t.getClassNames();
                for (const t of i) e.classes.push(t);
                const o = t.getStyleNames();
                for (const t of o) e.styles.push(t);
                return e
            }
            static createFrom(t, e) {
                if (e || (e = new Ea), t.is("text")) return e.add(t), e;
                t.is("element") && e.add(t, Ea.consumablesFromElement(t)), t.is("documentFragment") && e.add(t);
                for (const n of t.getChildren()) e = Ea.createFrom(n, e);
                return e
            }
        }
        class Sa {
            constructor() {
                this._canConsumeName = null, this._consumables = {
                    attributes: new Map,
                    styles: new Map,
                    classes: new Map
                }
            }
            add(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._add(e, t[e])
            }
            test(t) {
                if (t.name && !this._canConsumeName) return this._canConsumeName;
                for (const e in this._consumables)
                    if (e in t) {
                        const n = this._test(e, t[e]);
                        if (!0 !== n) return n
                    }
                return !0
            }
            consume(t) {
                t.name && (this._canConsumeName = !1);
                for (const e in this._consumables) e in t && this._consume(e, t[e])
            }
            revert(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._revert(e, t[e])
            }
            _add(t, e) {
                const n = Wt(e) ? e : [e],
                    i = this._consumables[t];
                for (const e of n) {
                    if ("attributes" === t && ("class" === e || "style" === e)) throw new Gn.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.");
                    i.set(e, !0)
                }
            }
            _test(t, e) {
                const n = Wt(e) ? e : [e],
                    i = this._consumables[t];
                for (const e of n)
                    if ("attributes" !== t || "class" !== e && "style" !== e) {
                        const t = i.get(e);
                        if (void 0 === t) return null;
                        if (!t) return !1
                    } else {
                        const t = "class" == e ? "classes" : "styles",
                            n = this._test(t, [...this._consumables[t].keys()]);
                        if (!0 !== n) return n
                    }
                return !0
            }
            _consume(t, e) {
                const n = Wt(e) ? e : [e],
                    i = this._consumables[t];
                for (const e of n)
                    if ("attributes" !== t || "class" !== e && "style" !== e) i.set(e, !1);
                    else {
                        const t = "class" == e ? "classes" : "styles";
                        this._consume(t, [...this._consumables[t].keys()])
                    }
            }
            _revert(t, e) {
                const n = Wt(e) ? e : [e],
                    i = this._consumables[t];
                for (const e of n)
                    if ("attributes" !== t || "class" !== e && "style" !== e) {
                        !1 === i.get(e) && i.set(e, !0)
                    } else {
                        const t = "class" == e ? "classes" : "styles";
                        this._revert(t, [...this._consumables[t].keys()])
                    }
            }
        }
        class Ia {
            constructor() {
                this._sourceDefinitions = {}, this.decorate("checkChild"), this.decorate("checkAttribute"), this.on("checkAttribute", (t, e) => {
                    e[0] = new Na(e[0])
                }, {
                    priority: "highest"
                }), this.on("checkChild", (t, e) => {
                    e[0] = new Na(e[0]), e[1] = this.getDefinition(e[1])
                }, {
                    priority: "highest"
                })
            }
            register(t, e) {
                if (this._sourceDefinitions[t]) throw new Gn.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.", {
                    itemName: t
                });
                this._sourceDefinitions[t] = [Object.assign({}, e)], this._clearCache()
            }
            extend(t, e) {
                if (!this._sourceDefinitions[t]) throw new Gn.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.", {
                    itemName: t
                });
                this._sourceDefinitions[t].push(Object.assign({}, e)), this._clearCache()
            }
            getDefinitions() {
                return this._compiledDefinitions || this._compile(), this._compiledDefinitions
            }
            getDefinition(t) {
                let e;
                return e = "string" == typeof t ? t : t.is && (t.is("text") || t.is("textProxy")) ? "$text" : t.name, this.getDefinitions()[e]
            }
            isRegistered(t) {
                return !!this.getDefinition(t)
            }
            isBlock(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isBlock)
            }
            isLimit(t) {
                const e = this.getDefinition(t);
                return !!e && !(!e.isLimit && !e.isObject)
            }
            isObject(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isObject)
            }
            isInline(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isInline)
            }
            checkChild(t, e) {
                return !!e && this._checkContextMatch(e, t)
            }
            checkAttribute(t, e) {
                const n = this.getDefinition(t.last);
                return !!n && n.allowAttributes.includes(e)
            }
            checkMerge(t, e = null) {
                if (t instanceof $s) {
                    const e = t.nodeBefore,
                        n = t.nodeAfter;
                    if (!(e instanceof Hs)) throw new Gn.b("schema-check-merge-no-element-before: The node before the merge position must be an element.");
                    if (!(n instanceof Hs)) throw new Gn.b("schema-check-merge-no-element-after: The node after the merge position must be an element.");
                    return this.checkMerge(e, n)
                }
                for (const n of e.getChildren())
                    if (!this.checkChild(t, n)) return !1;
                return !0
            }
            addChildCheck(t) {
                this.on("checkChild", (e, [n, i]) => {
                    if (!i) return;
                    const o = t(n, i);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {
                    priority: "high"
                })
            }
            addAttributeCheck(t) {
                this.on("checkAttribute", (e, [n, i]) => {
                    const o = t(n, i);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {
                    priority: "high"
                })
            }
            getLimitElement(t) {
                let e;
                if (t instanceof $s) e = t.parent;
                else {
                    e = (t instanceof Gs ? [t] : Array.from(t.getRanges())).reduce((t, e) => {
                        const n = e.getCommonAncestor();
                        return t ? t.getCommonAncestor(n, {
                            includeSelf: !0
                        }) : n
                    }, null)
                }
                for (; !this.isLimit(e) && e.parent;) e = e.parent;
                return e
            }
            checkAttributeInSelection(t, e) {
                if (t.isCollapsed) {
                    const n = [...t.getFirstPosition().getAncestors(), new zs("", t.getAttributes())];
                    return this.checkAttribute(n, e)
                } {
                    const n = t.getRanges();
                    for (const t of n)
                        for (const n of t)
                            if (this.checkAttribute(n.item, e)) return !0
                }
                return !1
            } * getValidRanges(t, e) {
                t = function*(t) {
                    for (const e of t) yield * e.getMinimalFlatRanges()
                }(t);
                for (const n of t) yield * this._getValidRangesForRange(n, e)
            }
            getNearestSelectionRange(t, e = "both") {
                if (this.checkChild(t, "$text")) return new Gs(t);
                let n, i;
                "both" != e && "backward" != e || (n = new qs({
                    startPosition: t,
                    direction: "backward"
                })), "both" != e && "forward" != e || (i = new qs({
                    startPosition: t
                }));
                for (const t of
                    function*(t, e) {
                        let n = !1;
                        for (; !n;) {
                            if (n = !0, t) {
                                const e = t.next();
                                e.done || (n = !1, yield {
                                    walker: t,
                                    value: e.value
                                })
                            }
                            if (e) {
                                const t = e.next();
                                t.done || (n = !1, yield {
                                    walker: e,
                                    value: t.value
                                })
                            }
                        }
                    }(n, i)) {
                    const e = t.walker == n ? "elementEnd" : "elementStart",
                        i = t.value;
                    if (i.type == e && this.isObject(i.item)) return Gs._createOn(i.item);
                    if (this.checkChild(i.nextPosition, "$text")) return new Gs(i.nextPosition)
                }
                return null
            }
            findAllowedParent(t, e) {
                let n = t.parent;
                for (; n;) {
                    if (this.checkChild(n, e)) return n;
                    if (this.isLimit(n)) return null;
                    n = n.parent
                }
                return null
            }
            removeDisallowedAttributes(t, e) {
                for (const n of t) {
                    for (const t of n.getAttributeKeys()) this.checkAttribute(n, t) || e.removeAttribute(t, n);
                    n.is("element") && this.removeDisallowedAttributes(n.getChildren(), e)
                }
            }
            createContext(t) {
                return new Na(t)
            }
            _clearCache() {
                this._compiledDefinitions = null
            }
            _compile() {
                const t = {},
                    e = this._sourceDefinitions,
                    n = Object.keys(e);
                for (const i of n) t[i] = Oa(e[i], i);
                for (const e of n) Ra(t, e);
                for (const e of n) Da(t, e);
                for (const e of n) La(t, e), ja(t, e);
                for (const e of n) Va(t, e), Ba(t, e);
                this._compiledDefinitions = t
            }
            _checkContextMatch(t, e, n = e.length - 1) {
                const i = e.getItem(n);
                if (t.allowIn.includes(i.name)) {
                    if (0 == n) return !0; {
                        const t = this.getDefinition(i);
                        return this._checkContextMatch(t, e, n - 1)
                    }
                }
                return !1
            } * _getValidRangesForRange(t, e) {
                let n = t.start,
                    i = t.start;
                for (const o of t.getItems({
                        shallow: !0
                    })) o.is("element") && (yield * this._getValidRangesForRange(Gs._createIn(o), e)), this.checkAttribute(o, e) || (n.isEqual(i) || (yield new Gs(n, i)), n = $s._createAfter(o)), i = $s._createAfter(o);
                n.isEqual(i) || (yield new Gs(n, i))
            }
        }
        ci(Ia, Fi);
        class Na {
            constructor(t) {
                if (t instanceof Na) return t;
                "string" == typeof t ? t = [t] : Array.isArray(t) || (t = t.getAncestors({
                    includeSelf: !0
                })), t[0] && "string" != typeof t[0] && t[0].is("documentFragment") && t.shift(), this._items = t.map(Ua)
            }
            get length() {
                return this._items.length
            }
            get last() {
                return this._items[this._items.length - 1]
            }[Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }
            push(t) {
                const e = new Na([t]);
                return e._items = [...this._items, ...e._items], e
            }
            getItem(t) {
                return this._items[t]
            } * getNames() {
                yield * this._items.map(t => t.name)
            }
            endsWith(t) {
                return Array.from(this.getNames()).join(" ").endsWith(t)
            }
        }

        function Oa(t, e) {
            const n = {
                name: e,
                allowIn: [],
                allowContentOf: [],
                allowWhere: [],
                allowAttributes: [],
                allowAttributesOf: [],
                inheritTypesFrom: []
            };
            return function(t, e) {
                    for (const n of t) {
                        const t = Object.keys(n).filter(t => t.startsWith("is"));
                        for (const i of t) e[i] = n[i]
                    }
                }(t, n), za(t, n, "allowIn"), za(t, n, "allowContentOf"), za(t, n, "allowWhere"), za(t, n, "allowAttributes"), za(t, n, "allowAttributesOf"), za(t, n, "inheritTypesFrom"),
                function(t, e) {
                    for (const n of t) {
                        const t = n.inheritAllFrom;
                        t && (e.allowContentOf.push(t), e.allowWhere.push(t), e.allowAttributesOf.push(t), e.inheritTypesFrom.push(t))
                    }
                }(t, n), n
        }

        function Ra(t, e) {
            for (const n of t[e].allowContentOf)
                if (t[n]) {
                    Fa(t, n).forEach(t => {
                        t.allowIn.push(e)
                    })
                }
            delete t[e].allowContentOf
        }

        function Da(t, e) {
            for (const n of t[e].allowWhere) {
                const i = t[n];
                if (i) {
                    const n = i.allowIn;
                    t[e].allowIn.push(...n)
                }
            }
            delete t[e].allowWhere
        }

        function La(t, e) {
            for (const n of t[e].allowAttributesOf) {
                const i = t[n];
                if (i) {
                    const n = i.allowAttributes;
                    t[e].allowAttributes.push(...n)
                }
            }
            delete t[e].allowAttributesOf
        }

        function ja(t, e) {
            const n = t[e];
            for (const e of n.inheritTypesFrom) {
                const i = t[e];
                if (i) {
                    const t = Object.keys(i).filter(t => t.startsWith("is"));
                    for (const e of t) e in n || (n[e] = i[e])
                }
            }
            delete n.inheritTypesFrom
        }

        function Va(t, e) {
            const n = t[e],
                i = n.allowIn.filter(e => t[e]);
            n.allowIn = Array.from(new Set(i))
        }

        function Ba(t, e) {
            const n = t[e];
            n.allowAttributes = Array.from(new Set(n.allowAttributes))
        }

        function za(t, e, n) {
            for (const i of t) "string" == typeof i[n] ? e[n].push(i[n]) : Array.isArray(i[n]) && e[n].push(...i[n])
        }

        function Fa(t, e) {
            const n = t[e];
            return function(t) {
                return Object.keys(t).map(e => t[e])
            }(t).filter(t => t.allowIn.includes(n.name))
        }

        function Ua(t) {
            return "string" == typeof t ? {
                name: t,
                * getAttributeKeys() {},
                getAttribute() {}
            } : {
                name: t.is("element") ? t.name : "$text",
                * getAttributeKeys() {
                    yield * t.getAttributeKeys()
                },
                getAttribute: e => t.getAttribute(e)
            }
        }
        class Ha {
            constructor(t = {}) {
                this._removeIfEmpty = new Set, this._modelCursor = null, this.conversionApi = Object.assign({}, t), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this), this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this)
            }
            convert(t, e, n = ["$root"]) {
                this.fire("viewCleanup", t), this._modelCursor = function(t, e) {
                    let n;
                    for (const i of new Na(t)) {
                        const t = {};
                        for (const e of i.getAttributeKeys()) t[e] = i.getAttribute(e);
                        const o = e.createElement(i.name, t);
                        n && e.append(o, n), n = $s._createAt(o, 0)
                    }
                    return n
                }(n, e), this.conversionApi.writer = e, this.conversionApi.consumable = Ea.createFrom(t), this.conversionApi.store = {};
                const {
                    modelRange: i
                } = this._convertItem(t, this._modelCursor), o = e.createDocumentFragment();
                if (i) {
                    this._removeEmptyElements();
                    for (const t of Array.from(this._modelCursor.parent.getChildren())) e.append(t, o);
                    o.markers = function(t, e) {
                        const n = new Set,
                            i = new Map,
                            o = Gs._createIn(t).getItems();
                        for (const t of o) "$marker" == t.name && n.add(t);
                        for (const t of n) {
                            const n = t.getAttribute("data-name"),
                                o = e.createPositionBefore(t);
                            i.has(n) ? i.get(n).end = o.clone() : i.set(n, new Gs(o.clone())), e.remove(t)
                        }
                        return i
                    }(o, e)
                }
                return this._modelCursor = null, this._removeIfEmpty.clear(), this.conversionApi.writer = null, this.conversionApi.store = null, o
            }
            _convertItem(t, e) {
                const n = Object.assign({
                    viewItem: t,
                    modelCursor: e,
                    modelRange: null
                });
                if (t.is("element") ? this.fire("element:" + t.name, n, this.conversionApi) : t.is("text") ? this.fire("text", n, this.conversionApi) : this.fire("documentFragment", n, this.conversionApi), n.modelRange && !(n.modelRange instanceof Gs)) throw new Gn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.");
                return {
                    modelRange: n.modelRange,
                    modelCursor: n.modelCursor
                }
            }
            _convertChildren(t, e) {
                const n = new Gs(e);
                let i = e;
                for (const e of Array.from(t.getChildren())) {
                    const t = this._convertItem(e, i);
                    t.modelRange instanceof Gs && (n.end = t.modelRange.end, i = t.modelCursor)
                }
                return {
                    modelRange: n,
                    modelCursor: i
                }
            }
            _splitToAllowedParent(t, e) {
                const n = this.conversionApi.schema.findAllowedParent(e, t);
                if (!n) return null;
                if (n === e.parent) return {
                    position: e
                };
                if (this._modelCursor.parent.getAncestors().includes(n)) return null;
                const i = this.conversionApi.writer.split(e, n);
                for (const t of i.range.getPositions()) t.isEqual(i.position) || this._removeIfEmpty.add(t.parent);
                return {
                    position: i.position,
                    cursorParent: i.range.end.parent
                }
            }
            _removeEmptyElements() {
                let t = !1;
                for (const e of this._removeIfEmpty) e.isEmpty && (this.conversionApi.writer.remove(e), this._removeIfEmpty.delete(e), t = !0);
                t && this._removeEmptyElements()
            }
        }
        ci(Ha, ei);
        class qa {
            constructor(t, e) {
                this.model = t, this.processor = e, this.mapper = new Qs, this.downcastDispatcher = new Zs({
                    mapper: this.mapper
                }), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
                    if (!n.consumable.consume(e.item, "insert")) return;
                    const i = n.writer,
                        o = n.mapper.toViewPosition(e.range.start),
                        r = i.createText(e.item.data);
                    i.insert(o, r)
                }, {
                    priority: "lowest"
                }), this.upcastDispatcher = new Ha({
                    schema: t.schema
                }), this.upcastDispatcher.on("text", (t, e, n) => {
                    if (n.schema.checkChild(e.modelCursor, "$text") && n.consumable.consume(e.viewItem)) {
                        const t = n.writer.createText(e.viewItem.data);
                        n.writer.insert(t, e.modelCursor), e.modelRange = Gs._createFromPositionAndShift(e.modelCursor, t.offsetSize), e.modelCursor = e.modelRange.end
                    }
                }, {
                    priority: "lowest"
                }), this.upcastDispatcher.on("element", (t, e, n) => {
                    if (!e.modelRange && n.consumable.consume(e.viewItem, {
                            name: !0
                        })) {
                        const {
                            modelRange: t,
                            modelCursor: i
                        } = n.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = i
                    }
                }, {
                    priority: "lowest"
                }), this.upcastDispatcher.on("documentFragment", (t, e, n) => {
                    if (!e.modelRange && n.consumable.consume(e.viewItem, {
                            name: !0
                        })) {
                        const {
                            modelRange: t,
                            modelCursor: i
                        } = n.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = i
                    }
                }, {
                    priority: "lowest"
                }), this.decorate("init"), this.on("init", () => {
                    this.fire("ready")
                }, {
                    priority: "lowest"
                })
            }
            get(t) {
                const {
                    rootName: e = "main",
                    trim: n = "empty"
                } = t || {};
                if (!this._checkIfRootsExists([e])) throw new Gn.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.");
                const i = this.model.document.getRoot(e);
                return "empty" !== n || this.model.hasContent(i, {
                    ignoreWhitespaces: !0
                }) ? this.stringify(i) : ""
            }
            stringify(t) {
                const e = this.toView(t);
                return this.processor.toData(e)
            }
            toView(t) {
                this.mapper.clearBindings();
                const e = Gs._createIn(t),
                    n = new Ao,
                    i = new Co(new ro);
                if (this.mapper.bindElements(t, n), this.downcastDispatcher.convertInsert(e, i), !t.is("documentFragment")) {
                    const e = function(t) {
                        const e = [],
                            n = t.root.document;
                        if (!n) return [];
                        const i = Gs._createIn(t);
                        for (const t of n.model.markers) {
                            const n = i.getIntersection(t.getRange());
                            n && e.push([t.name, n])
                        }
                        return e
                    }(t);
                    for (const [t, n] of e) this.downcastDispatcher.convertMarkerAdd(t, n, i)
                }
                return n
            }
            init(t) {
                if (this.model.document.version) throw new Gn.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.");
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new Gn.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.");
                return this.model.enqueueChange("transparent", t => {
                    for (const n of Object.keys(e)) {
                        const i = this.model.document.getRoot(n);
                        t.insert(this.parse(e[n], i), i, 0)
                    }
                }), Promise.resolve()
            }
            set(t) {
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new Gn.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.");
                this.model.enqueueChange("transparent", t => {
                    t.setSelection(null), t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
                    for (const n of Object.keys(e)) {
                        const i = this.model.document.getRoot(n);
                        t.remove(t.createRangeIn(i)), t.insert(this.parse(e[n], i), i, 0)
                    }
                })
            }
            parse(t, e = "$root") {
                const n = this.processor.toView(t);
                return this.toModel(n, e)
            }
            toModel(t, e = "$root") {
                return this.model.change(n => this.upcastDispatcher.convert(t, n, e))
            }
            destroy() {
                this.stopListening()
            }
            _checkIfRootsExists(t) {
                for (const e of t)
                    if (!this.model.document.getRootNames().includes(e)) return !1;
                return !0
            }
        }
        ci(qa, Fi);
        class Wa {
            constructor(t, e) {
                this._helpers = new Map, this._downcast = Array.isArray(t) ? t : [t], this._createConversionHelpers({
                    name: "downcast",
                    dispatchers: this._downcast,
                    isDowncast: !0
                }), this._upcast = Array.isArray(e) ? e : [e], this._createConversionHelpers({
                    name: "upcast",
                    dispatchers: this._upcast,
                    isDowncast: !1
                })
            }
            addAlias(t, e) {
                const n = this._downcast.includes(e);
                if (!this._upcast.includes(e) && !n) throw new Gn.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.");
                this._createConversionHelpers({
                    name: t,
                    dispatchers: [e],
                    isDowncast: n
                })
            }
            for (t) {
                if (!this._helpers.has(t)) throw new Gn.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.");
                return this._helpers.get(t)
            }
            elementToElement(t) {
                this.for("downcast").elementToElement(t);
                for (const {
                        model: e,
                        view: n
                    }
                    of Ya(t)) this.for("upcast").elementToElement({
                    model: e,
                    view: n,
                    converterPriority: t.converterPriority
                })
            }
            attributeToElement(t) {
                this.for("downcast").attributeToElement(t);
                for (const {
                        model: e,
                        view: n
                    }
                    of Ya(t)) this.for("upcast").elementToAttribute({
                    view: n,
                    model: e,
                    converterPriority: t.converterPriority
                })
            }
            attributeToAttribute(t) {
                this.for("downcast").attributeToAttribute(t);
                for (const {
                        model: e,
                        view: n
                    }
                    of Ya(t)) this.for("upcast").attributeToAttribute({
                    view: n,
                    model: e
                })
            }
            _createConversionHelpers({
                name: t,
                dispatchers: e,
                isDowncast: n
            }) {
                if (this._helpers.has(t)) throw new Gn.b("conversion-group-exists: Trying to register a group name that has already been registered.");
                const i = n ? new fa(e) : new _a(e);
                this._helpers.set(t, i)
            }
        }

        function* Ya(t) {
            if (t.model.values)
                for (const e of t.model.values) {
                    yield * $a({
                        key: t.model.key,
                        value: e
                    }, t.view[e], t.upcastAlso ? t.upcastAlso[e] : void 0)
                } else yield * $a(t.model, t.view, t.upcastAlso)
        }

        function* $a(t, e, n) {
            if (yield {
                    model: t,
                    view: e
                }, n) {
                n = Array.isArray(n) ? n : [n];
                for (const e of n) yield {
                    model: t,
                    view: e
                }
            }
        }
        class Ga {
            constructor(t = "default") {
                this.operations = [], this.type = t
            }
            get baseVersion() {
                for (const t of this.operations)
                    if (null !== t.baseVersion) return t.baseVersion;
                return null
            }
            addOperation(t) {
                return t.batch = this, this.operations.push(t), t
            }
        }
        class Qa {
            constructor(t) {
                this.baseVersion = t, this.isDocumentOperation = null !== this.baseVersion, this.batch = null
            }
            _validate() {}
            toJSON() {
                const t = Object.assign({}, this);
                return t.__className = this.constructor.className, delete t.batch, delete t.isDocumentOperation, t
            }
            static get className() {
                return "Operation"
            }
            static fromJSON(t) {
                return new this(t.baseVersion)
            }
        }
        class Ja {
            constructor(t) {
                this.markers = new Map, this._children = new Us, t && this._insertChild(0, t)
            }[Symbol.iterator]() {
                return this.getChildren()
            }
            get childCount() {
                return this._children.length
            }
            get maxOffset() {
                return this._children.maxOffset
            }
            get isEmpty() {
                return 0 === this.childCount
            }
            get root() {
                return this
            }
            get parent() {
                return null
            }
            is(t) {
                return "documentFragment" == t
            }
            getChild(t) {
                return this._children.getNode(t)
            }
            getChildren() {
                return this._children[Symbol.iterator]()
            }
            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }
            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }
            getPath() {
                return []
            }
            getNodeByPath(t) {
                let e = this;
                for (const n of t) e = e.getChild(e.offsetToIndex(n));
                return e
            }
            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }
            toJSON() {
                const t = [];
                for (const e of this._children) t.push(e.toJSON());
                return t
            }
            static fromJSON(t) {
                const e = [];
                for (const n of t) n.name ? e.push(Hs.fromJSON(n)) : e.push(zs.fromJSON(n));
                return new Ja(e)
            }
            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }
            _insertChild(t, e) {
                const n = function(t) {
                    if ("string" == typeof t) return [new zs(t)];
                    gi(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new zs(t) : t instanceof Fs ? new zs(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of n) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, n)
            }
            _removeChildren(t, e = 1) {
                const n = this._children._removeNodes(t, e);
                for (const t of n) t.parent = null;
                return n
            }
        }

        function Ka(t, e) {
            const n = (e = tc(e)).reduce((t, e) => t + e.offsetSize, 0),
                i = t.parent;
            nc(t);
            const o = t.index;
            return i._insertChild(o, e), ec(i, o + e.length), ec(i, o), new Gs(t, t.getShiftedBy(n))
        }

        function Za(t) {
            if (!t.isFlat) throw new Gn.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.");
            const e = t.start.parent;
            nc(t.start), nc(t.end);
            const n = e._removeChildren(t.start.index, t.end.index - t.start.index);
            return ec(e, t.start.index), n
        }

        function Xa(t, e) {
            if (!t.isFlat) throw new Gn.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.");
            const n = Za(t);
            return Ka(e = e._getTransformedByDeletion(t.start, t.end.offset - t.start.offset), n)
        }

        function tc(t) {
            const e = [];
            t instanceof Array || (t = [t]);
            for (let n = 0; n < t.length; n++)
                if ("string" == typeof t[n]) e.push(new zs(t[n]));
                else if (t[n] instanceof Fs) e.push(new zs(t[n].data, t[n].getAttributes()));
            else if (t[n] instanceof Ja || t[n] instanceof Us)
                for (const i of t[n]) e.push(i);
            else t[n] instanceof Bs && e.push(t[n]);
            for (let t = 1; t < e.length; t++) {
                const n = e[t],
                    i = e[t - 1];
                n instanceof zs && i instanceof zs && ic(n, i) && (e.splice(t - 1, 2, new zs(i.data + n.data, i.getAttributes())), t--)
            }
            return e
        }

        function ec(t, e) {
            const n = t.getChild(e - 1),
                i = t.getChild(e);
            if (n && i && n.is("text") && i.is("text") && ic(n, i)) {
                const o = new zs(n.data + i.data, n.getAttributes());
                t._removeChildren(e - 1, 2), t._insertChild(e - 1, o)
            }
        }

        function nc(t) {
            const e = t.textNode,
                n = t.parent;
            if (e) {
                const i = t.offset - e.startOffset,
                    o = e.index;
                n._removeChildren(o, 1);
                const r = new zs(e.data.substr(0, i), e.getAttributes()),
                    s = new zs(e.data.substr(i), e.getAttributes());
                n._insertChild(o, [r, s])
            }
        }

        function ic(t, e) {
            const n = t.getAttributes(),
                i = e.getAttributes();
            for (const t of n) {
                if (t[1] !== e.getAttribute(t[0])) return !1;
                i.next()
            }
            return i.next().done
        }
        var oc = function(t, e) {
            return Jr(t, e)
        };
        class rc extends Qa {
            constructor(t, e, n, i, o) {
                super(o), this.range = t.clone(), this.key = e, this.oldValue = void 0 === n ? null : n, this.newValue = void 0 === i ? null : i
            }
            get type() {
                return null === this.oldValue ? "addAttribute" : null === this.newValue ? "removeAttribute" : "changeAttribute"
            }
            clone() {
                return new rc(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
            }
            getReversed() {
                return new rc(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }
            toJSON() {
                const t = super.toJSON();
                return t.range = this.range.toJSON(), t
            }
            _validate() {
                if (!this.range.isFlat) throw new Gn.b("attribute-operation-range-not-flat: The range to change is not flat.");
                for (const t of this.range.getItems({
                        shallow: !0
                    })) {
                    if (null !== this.oldValue && !oc(t.getAttribute(this.key), this.oldValue)) throw new Gn.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", {
                        item: t,
                        key: this.key,
                        value: this.oldValue
                    });
                    if (null === this.oldValue && null !== this.newValue && t.hasAttribute(this.key)) throw new Gn.b("attribute-operation-attribute-exists: The attribute with given key already exists.", {
                        node: t,
                        key: this.key
                    })
                }
            }
            _execute() {
                oc(this.oldValue, this.newValue) || function(t, e, n) {
                    nc(t.start), nc(t.end);
                    for (const i of t.getItems({
                            shallow: !0
                        })) {
                        const t = i.is("textProxy") ? i.textNode : i;
                        null !== n ? t._setAttribute(e, n) : t._removeAttribute(e), ec(t.parent, t.index)
                    }
                    ec(t.end.parent, t.end.index)
                }(this.range, this.key, this.newValue)
            }
            static get className() {
                return "AttributeOperation"
            }
            static fromJSON(t, e) {
                return new rc(Gs.fromJSON(t.range, e), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }
        class sc extends Qa {
            constructor(t, e) {
                super(null), this.sourcePosition = t.clone(), this.howMany = e
            }
            get type() {
                return "detach"
            }
            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t
            }
            _validate() {
                if (this.sourcePosition.root.document) throw new Gn.b("detach-operation-on-document-node: Cannot detach document node.")
            }
            _execute() {
                Za(Gs._createFromPositionAndShift(this.sourcePosition, this.howMany))
            }
            static get className() {
                return "DetachOperation"
            }
        }
        class ac extends Qa {
            constructor(t, e, n, i) {
                super(i), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toNext", this.howMany = e, this.targetPosition = n.clone(), this.targetPosition.stickiness = "toNone"
            }
            get type() {
                return "$graveyard" == this.targetPosition.root.rootName ? "remove" : "$graveyard" == this.sourcePosition.root.rootName ? "reinsert" : "move"
            }
            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion)
            }
            getMovedRangeStart() {
                return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
            }
            getReversed() {
                const t = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
                return new this.constructor(this.getMovedRangeStart(), this.howMany, t, this.baseVersion + 1)
            }
            _validate() {
                const t = this.sourcePosition.parent,
                    e = this.targetPosition.parent,
                    n = this.sourcePosition.offset,
                    i = this.targetPosition.offset;
                if (!t || !e) throw new Gn.b("move-operation-position-invalid: Source position or target position is invalid.");
                if (n + this.howMany > t.maxOffset) throw new Gn.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.");
                if (t === e && n < i && i < n + this.howMany) throw new Gn.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.");
                if (this.sourcePosition.root == this.targetPosition.root && "prefix" == li(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
                    const t = this.sourcePosition.path.length - 1;
                    if (this.targetPosition.path[t] >= n && this.targetPosition.path[t] < n + this.howMany) throw new Gn.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.")
                }
            }
            _execute() {
                Xa(Gs._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition)
            }
            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t.targetPosition = this.targetPosition.toJSON(), t
            }
            static get className() {
                return "MoveOperation"
            }
            static fromJSON(t, e) {
                const n = $s.fromJSON(t.sourcePosition, e),
                    i = $s.fromJSON(t.targetPosition, e);
                return new this(n, t.howMany, i, t.baseVersion)
            }
        }
        class cc extends Qa {
            constructor(t, e, n) {
                super(n), this.position = t.clone(), this.position.stickiness = "toNone", this.nodes = new Us(tc(e)), this.shouldReceiveAttributes = !1
            }
            get type() {
                return "insert"
            }
            get howMany() {
                return this.nodes.maxOffset
            }
            clone() {
                const t = new Us([...this.nodes].map(t => t._clone(!0))),
                    e = new cc(this.position, t, this.baseVersion);
                return e.shouldReceiveAttributes = this.shouldReceiveAttributes, e
            }
            getReversed() {
                const t = this.position.root.document.graveyard,
                    e = new $s(t, [0]);
                return new ac(this.position, this.nodes.maxOffset, e, this.baseVersion + 1)
            }
            _validate() {
                const t = this.position.parent;
                if (!t || t.maxOffset < this.position.offset) throw new Gn.b("insert-operation-position-invalid: Insertion position is invalid.")
            }
            _execute() {
                const t = this.nodes;
                this.nodes = new Us([...t].map(t => t._clone(!0))), Ka(this.position, t)
            }
            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t.nodes = this.nodes.toJSON(), t
            }
            static get className() {
                return "InsertOperation"
            }
            static fromJSON(t, e) {
                const n = [];
                for (const e of t.nodes) e.name ? n.push(Hs.fromJSON(e)) : n.push(zs.fromJSON(e));
                const i = new cc($s.fromJSON(t.position, e), n, t.baseVersion);
                return i.shouldReceiveAttributes = t.shouldReceiveAttributes, i
            }
        }
        class lc extends Qa {
            constructor(t, e, n, i, o, r) {
                super(r), this.name = t, this.oldRange = e ? e.clone() : null, this.newRange = n ? n.clone() : null, this.affectsData = o, this._markers = i
            }
            get type() {
                return "marker"
            }
            clone() {
                return new lc(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion)
            }
            getReversed() {
                return new lc(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1)
            }
            _execute() {
                const t = this.newRange ? "_set" : "_remove";
                this._markers[t](this.name, this.newRange, !0, this.affectsData)
            }
            toJSON() {
                const t = super.toJSON();
                return this.oldRange && (t.oldRange = this.oldRange.toJSON()), this.newRange && (t.newRange = this.newRange.toJSON()), delete t._markers, t
            }
            static get className() {
                return "MarkerOperation"
            }
            static fromJSON(t, e) {
                return new lc(t.name, t.oldRange ? Gs.fromJSON(t.oldRange, e) : null, t.newRange ? Gs.fromJSON(t.newRange, e) : null, e.model.markers, t.affectsData, t.baseVersion)
            }
        }
        class dc extends Qa {
            constructor(t, e, n, i) {
                super(i), this.position = t, this.position.stickiness = "toNext", this.oldName = e, this.newName = n
            }
            get type() {
                return "rename"
            }
            clone() {
                return new dc(this.position.clone(), this.oldName, this.newName, this.baseVersion)
            }
            getReversed() {
                return new dc(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1)
            }
            _validate() {
                const t = this.position.nodeAfter;
                if (!(t instanceof Hs)) throw new Gn.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.");
                if (t.name !== this.oldName) throw new Gn.b("rename-operation-wrong-name: Element to change has different name than operation's old name.")
            }
            _execute() {
                this.position.nodeAfter.name = this.newName
            }
            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t
            }
            static get className() {
                return "RenameOperation"
            }
            static fromJSON(t, e) {
                return new dc($s.fromJSON(t.position, e), t.oldName, t.newName, t.baseVersion)
            }
        }
        class uc extends Qa {
            constructor(t, e, n, i, o) {
                super(o), this.root = t, this.key = e, this.oldValue = n, this.newValue = i
            }
            get type() {
                return null === this.oldValue ? "addRootAttribute" : null === this.newValue ? "removeRootAttribute" : "changeRootAttribute"
            }
            clone() {
                return new uc(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
            }
            getReversed() {
                return new uc(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }
            _validate() {
                if (this.root != this.root.root || this.root.is("documentFragment")) throw new Gn.b("rootattribute-operation-not-a-root: The element to change is not a root element.", {
                    root: this.root,
                    key: this.key
                });
                if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new Gn.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", {
                    root: this.root,
                    key: this.key
                });
                if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new Gn.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.", {
                    root: this.root,
                    key: this.key
                })
            }
            _execute() {
                null !== this.newValue ? this.root._setAttribute(this.key, this.newValue) : this.root._removeAttribute(this.key)
            }
            toJSON() {
                const t = super.toJSON();
                return t.root = this.root.toJSON(), t
            }
            static get className() {
                return "RootAttributeOperation"
            }
            static fromJSON(t, e) {
                if (!e.getRoot(t.root)) throw new Gn.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.", {
                    rootName: t.root
                });
                return new uc(e.getRoot(t.root), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }
        class hc extends Qa {
            constructor(t, e, n, i, o) {
                super(o), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toPrevious", this.howMany = e, this.targetPosition = n.clone(), this.targetPosition.stickiness = "toNext", this.graveyardPosition = i.clone()
            }
            get type() {
                return "merge"
            }
            get deletionPosition() {
                return new $s(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1))
            }
            get movedRange() {
                const t = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new Gs(this.sourcePosition, t)
            }
            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition, this.baseVersion)
            }
            getReversed() {
                const t = this.targetPosition._getTransformedByMergeOperation(this),
                    e = this.sourcePosition.path.slice(0, -1),
                    n = new $s(this.sourcePosition.root, e)._getTransformedByMergeOperation(this),
                    i = new fc(t, this.howMany, this.graveyardPosition, this.baseVersion + 1);
                return i.insertionPosition = n, i
            }
            _validate() {
                const t = this.sourcePosition.parent,
                    e = this.targetPosition.parent;
                if (!(t && t.is("element") && t.parent)) throw new Gn.b("merge-operation-source-position-invalid: Merge source position is invalid.");
                if (!(e && e.is("element") && e.parent)) throw new Gn.b("merge-operation-target-position-invalid: Merge target position is invalid.");
                if (this.howMany != t.maxOffset) throw new Gn.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.")
            }
            _execute() {
                const t = this.sourcePosition.parent;
                Xa(Gs._createIn(t), this.targetPosition), Xa(Gs._createOn(t), this.graveyardPosition)
            }
            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = t.sourcePosition.toJSON(), t.targetPosition = t.targetPosition.toJSON(), t.graveyardPosition = t.graveyardPosition.toJSON(), t
            }
            static get className() {
                return "MergeOperation"
            }
            static fromJSON(t, e) {
                const n = $s.fromJSON(t.sourcePosition, e),
                    i = $s.fromJSON(t.targetPosition, e),
                    o = $s.fromJSON(t.graveyardPosition, e);
                return new this(n, t.howMany, i, o, t.baseVersion)
            }
        }
        class fc extends Qa {
            constructor(t, e, n, i) {
                super(i), this.splitPosition = t.clone(), this.splitPosition.stickiness = "toNext", this.howMany = e, this.insertionPosition = fc.getInsertionPosition(t), this.insertionPosition.stickiness = "toNone", this.graveyardPosition = n ? n.clone() : null, this.graveyardPosition && (this.graveyardPosition.stickiness = "toNext")
            }
            get type() {
                return "split"
            }
            get moveTargetPosition() {
                const t = this.insertionPosition.path.slice();
                return t.push(0), new $s(this.insertionPosition.root, t)
            }
            get movedRange() {
                const t = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new Gs(this.splitPosition, t)
            }
            clone() {
                const t = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
                return t.insertionPosition = this.insertionPosition, t
            }
            getReversed() {
                const t = this.splitPosition.root.document.graveyard,
                    e = new $s(t, [0]);
                return new hc(this.moveTargetPosition, this.howMany, this.splitPosition, e, this.baseVersion + 1)
            }
            _validate() {
                const t = this.splitPosition.parent,
                    e = this.splitPosition.offset;
                if (!t || t.maxOffset < e) throw new Gn.b("split-operation-position-invalid: Split position is invalid.");
                if (!t.parent) throw new Gn.b("split-operation-split-in-root: Cannot split root element.");
                if (this.howMany != t.maxOffset - this.splitPosition.offset) throw new Gn.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.");
                if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) throw new Gn.b("split-operation-graveyard-position-invalid: Graveyard position invalid.")
            }
            _execute() {
                const t = this.splitPosition.parent;
                if (this.graveyardPosition) Xa(Gs._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition);
                else {
                    const e = t._clone();
                    Ka(this.insertionPosition, e)
                }
                Xa(new Gs($s._createAt(t, this.splitPosition.offset), $s._createAt(t, t.maxOffset)), this.moveTargetPosition)
            }
            toJSON() {
                const t = super.toJSON();
                return t.splitPosition = this.splitPosition.toJSON(), t.insertionPosition = this.insertionPosition.toJSON(), this.graveyardPosition && (t.graveyardPosition = this.graveyardPosition.toJSON()), t
            }
            static get className() {
                return "SplitOperation"
            }
            static getInsertionPosition(t) {
                const e = t.path.slice(0, -1);
                return e[e.length - 1]++, new $s(t.root, e)
            }
            static fromJSON(t, e) {
                const n = $s.fromJSON(t.splitPosition, e),
                    i = $s.fromJSON(t.insertionPosition, e),
                    o = t.graveyardPosition ? $s.fromJSON(t.graveyardPosition, e) : null,
                    r = new this(n, t.howMany, o, t.baseVersion);
                return r.insertionPosition = i, r
            }
        }
        class mc extends Hs {
            constructor(t, e, n = "main") {
                super(e), this._doc = t, this.rootName = n
            }
            get document() {
                return this._doc
            }
            is(t, e) {
                return e ? "rootElement" == t && e == this.name || super.is(t, e) : "rootElement" == t || super.is(t)
            }
            toJSON() {
                return this.rootName
            }
        }
        class pc {
            constructor(t, e) {
                this.model = t, this.batch = e
            }
            createText(t, e) {
                return new zs(t, e)
            }
            createElement(t, e) {
                return new Hs(t, e)
            }
            createDocumentFragment() {
                return new Ja
            }
            insert(t, e, n = 0) {
                if (this._assertWriterUsedCorrectly(), t instanceof zs && "" == t.data) return;
                const i = $s._createAt(e, n);
                if (t.parent) {
                    if (kc(t.root, i.root)) return void this.move(Gs._createOn(t), i);
                    if (t.root.document) throw new Error("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.");
                    this.remove(t)
                }
                const o = i.root.document ? i.root.document.version : null,
                    r = new cc(i, t, o);
                if (t instanceof zs && (r.shouldReceiveAttributes = !0), this.batch.addOperation(r), this.model.applyOperation(r), t instanceof Ja)
                    for (const [e, n] of t.markers) {
                        const t = $s._createAt(n.root, 0),
                            o = new Gs(n.start._getCombined(t, i), n.end._getCombined(t, i));
                        this.addMarker(e, {
                            range: o,
                            usingOperation: !0,
                            affectsData: !0
                        })
                    }
            }
            insertText(t, e, n, i) {
                e instanceof Ja || e instanceof Hs || e instanceof $s ? this.insert(this.createText(t), e, n) : this.insert(this.createText(t, e), n, i)
            }
            insertElement(t, e, n, i) {
                e instanceof Ja || e instanceof Hs || e instanceof $s ? this.insert(this.createElement(t), e, n) : this.insert(this.createElement(t, e), n, i)
            }
            append(t, e) {
                this.insert(t, e, "end")
            }
            appendText(t, e, n) {
                e instanceof Ja || e instanceof Hs ? this.insert(this.createText(t), e, "end") : this.insert(this.createText(t, e), n, "end")
            }
            appendElement(t, e, n) {
                e instanceof Ja || e instanceof Hs ? this.insert(this.createElement(t), e, "end") : this.insert(this.createElement(t, e), n, "end")
            }
            setAttribute(t, e, n) {
                if (this._assertWriterUsedCorrectly(), n instanceof Gs) {
                    const i = n.getMinimalFlatRanges();
                    for (const n of i) gc(this, t, e, n)
                } else bc(this, t, e, n)
            }
            setAttributes(t, e) {
                for (const [n, i] of Vs(t)) this.setAttribute(n, i, e)
            }
            removeAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), e instanceof Gs) {
                    const n = e.getMinimalFlatRanges();
                    for (const e of n) gc(this, t, null, e)
                } else bc(this, t, null, e)
            }
            clearAttributes(t) {
                this._assertWriterUsedCorrectly();
                const e = t => {
                    for (const e of t.getAttributeKeys()) this.removeAttribute(e, t)
                };
                if (t instanceof Gs)
                    for (const n of t.getItems()) e(n);
                else e(t)
            }
            move(t, e, n) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof Gs)) throw new Gn.b("writer-move-invalid-range: Invalid range to move.");
                if (!t.isFlat) throw new Gn.b("writer-move-range-not-flat: Range to move is not flat.");
                const i = $s._createAt(e, n);
                if (i.isEqual(t.start)) return;
                if (this._addOperationForAffectedMarkers("move", t), !kc(t.root, i.root)) throw new Gn.b("writer-move-different-document: Range is going to be moved between different documents.");
                const o = t.root.document ? t.root.document.version : null,
                    r = new ac(t.start, t.end.offset - t.start.offset, i, o);
                this.batch.addOperation(r), this.model.applyOperation(r)
            }
            remove(t) {
                this._assertWriterUsedCorrectly();
                const e = (t instanceof Gs ? t : Gs._createOn(t)).getMinimalFlatRanges().reverse();
                for (const t of e) this._addOperationForAffectedMarkers("move", t), _c(t.start, t.end.offset - t.start.offset, this.batch, this.model)
            }
            merge(t) {
                this._assertWriterUsedCorrectly();
                const e = t.nodeBefore,
                    n = t.nodeAfter;
                if (this._addOperationForAffectedMarkers("merge", t), !(e instanceof Hs)) throw new Gn.b("writer-merge-no-element-before: Node before merge position must be an element.");
                if (!(n instanceof Hs)) throw new Gn.b("writer-merge-no-element-after: Node after merge position must be an element.");
                t.root.document ? this._merge(t) : this._mergeDetached(t)
            }
            createPositionFromPath(t, e, n) {
                return this.model.createPositionFromPath(t, e, n)
            }
            createPositionAt(t, e) {
                return this.model.createPositionAt(t, e)
            }
            createPositionAfter(t) {
                return this.model.createPositionAfter(t)
            }
            createPositionBefore(t) {
                return this.model.createPositionBefore(t)
            }
            createRange(t, e) {
                return this.model.createRange(t, e)
            }
            createRangeIn(t) {
                return this.model.createRangeIn(t)
            }
            createRangeOn(t) {
                return this.model.createRangeOn(t)
            }
            createSelection(t, e, n) {
                return this.model.createSelection(t, e, n)
            }
            _mergeDetached(t) {
                const e = t.nodeBefore,
                    n = t.nodeAfter;
                this.move(Gs._createIn(n), $s._createAt(e, "end")), this.remove(n)
            }
            _merge(t) {
                const e = $s._createAt(t.nodeBefore, "end"),
                    n = $s._createAt(t.nodeAfter, 0),
                    i = t.root.document.graveyard,
                    o = new $s(i, [0]),
                    r = t.root.document.version,
                    s = new hc(n, t.nodeAfter.maxOffset, e, o, r);
                this.batch.addOperation(s), this.model.applyOperation(s)
            }
            rename(t, e) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof Hs)) throw new Gn.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.");
                const n = t.root.document ? t.root.document.version : null,
                    i = new dc($s._createBefore(t), t.name, e, n);
                this.batch.addOperation(i), this.model.applyOperation(i)
            }
            split(t, e) {
                this._assertWriterUsedCorrectly();
                let n, i, o = t.parent;
                if (!o.parent) throw new Gn.b("writer-split-element-no-parent: Element with no parent can not be split.");
                if (e || (e = o.parent), !t.parent.getAncestors({
                        includeSelf: !0
                    }).includes(e)) throw new Gn.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.");
                do {
                    const e = o.root.document ? o.root.document.version : null,
                        r = o.maxOffset - t.offset,
                        s = new fc(t, r, null, e);
                    this.batch.addOperation(s), this.model.applyOperation(s), n || i || (n = o, i = t.parent.nextSibling), o = (t = this.createPositionAfter(t.parent)).parent
                } while (o !== e);
                return {
                    position: t,
                    range: new Gs($s._createAt(n, "end"), $s._createAt(i, 0))
                }
            }
            wrap(t, e) {
                if (this._assertWriterUsedCorrectly(), !t.isFlat) throw new Gn.b("writer-wrap-range-not-flat: Range to wrap is not flat.");
                const n = e instanceof Hs ? e : new Hs(e);
                if (n.childCount > 0) throw new Gn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.");
                if (null !== n.parent) throw new Gn.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.");
                const i = t.root.document ? t.root.document.version : null,
                    o = new cc(t.start, n, i);
                this.batch.addOperation(o), this.model.applyOperation(o);
                const r = new ac(t.start.getShiftedBy(1), t.end.offset - t.start.offset, $s._createAt(n, 0), null === i ? null : i + 1);
                this.batch.addOperation(r), this.model.applyOperation(r)
            }
            unwrap(t) {
                if (this._assertWriterUsedCorrectly(), null === t.parent) throw new Gn.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.");
                this.move(Gs._createIn(t), this.createPositionAfter(t)), this.remove(t)
            }
            addMarker(t, e) {
                if (this._assertWriterUsedCorrectly(), !e || "boolean" != typeof e.usingOperation) throw new Gn.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.");
                const n = e.usingOperation,
                    i = e.range,
                    o = void 0 !== e.affectsData && e.affectsData;
                if (this.model.markers.has(t)) throw new Gn.b("writer-addMarker-marker-exists: Marker with provided name already exists.");
                if (!i) throw new Gn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.");
                return n ? (wc(this, t, null, i, o), this.model.markers.get(t)) : this.model.markers._set(t, i, n, o)
            }
            updateMarker(t, e = {}) {
                this._assertWriterUsedCorrectly();
                const n = "string" == typeof t ? t : t.name,
                    i = this.model.markers.get(n);
                if (!i) throw new Gn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.");
                const o = "boolean" == typeof e.usingOperation,
                    r = "boolean" == typeof e.affectsData,
                    s = r ? e.affectsData : i.affectsData;
                if (!o && !e.range && !r) throw new Gn.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.");
                const a = i.getRange(),
                    c = e.range ? e.range : a;
                o && e.usingOperation !== i.managedUsingOperations ? e.usingOperation ? wc(this, n, null, c, s) : (wc(this, n, a, null, s), this.model.markers._set(n, c, void 0, s)) : i.managedUsingOperations ? wc(this, n, a, c, s) : this.model.markers._set(n, c, void 0, s)
            }
            removeMarker(t) {
                this._assertWriterUsedCorrectly();
                const e = "string" == typeof t ? t : t.name;
                if (!this.model.markers.has(e)) throw new Gn.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.");
                const n = this.model.markers.get(e);
                n.managedUsingOperations ? wc(this, e, n.getRange(), null, n.affectsData) : this.model.markers._remove(e)
            }
            setSelection(t, e, n) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setTo(t, e, n)
            }
            setSelectionFocus(t, e) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setFocus(t, e)
            }
            setSelectionAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._setSelectionAttribute(t, e);
                else
                    for (const [e, n] of Vs(t)) this._setSelectionAttribute(e, n)
            }
            removeSelectionAttribute(t) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._removeSelectionAttribute(t);
                else
                    for (const e of t) this._removeSelectionAttribute(e)
            }
            overrideSelectionGravity() {
                return this.model.document.selection._overrideGravity()
            }
            restoreSelectionGravity(t) {
                this.model.document.selection._restoreGravity(t)
            }
            _setSelectionAttribute(t, e) {
                const n = this.model.document.selection;
                if (n.isCollapsed && n.anchor.parent.isEmpty) {
                    const i = sa._getStoreAttributeKey(t);
                    this.setAttribute(i, e, n.anchor.parent)
                }
                n._setAttribute(t, e)
            }
            _removeSelectionAttribute(t) {
                const e = this.model.document.selection;
                if (e.isCollapsed && e.anchor.parent.isEmpty) {
                    const n = sa._getStoreAttributeKey(t);
                    this.removeAttribute(n, e.anchor.parent)
                }
                e._removeAttribute(t)
            }
            _assertWriterUsedCorrectly() {
                if (this.model._currentWriter !== this) throw new Gn.b("writer-incorrect-use: Trying to use a writer outside the change() block.")
            }
            _addOperationForAffectedMarkers(t, e) {
                for (const n of this.model.markers) {
                    if (!n.managedUsingOperations) continue;
                    const i = n.getRange();
                    let o = !1;
                    if ("move" == t) o = e.containsPosition(i.start) || e.start.isEqual(i.start) || e.containsPosition(i.end) || e.end.isEqual(i.end);
                    else {
                        const t = e.nodeBefore,
                            n = e.nodeAfter,
                            r = i.start.parent == t && i.start.isAtEnd,
                            s = i.end.parent == n && 0 == i.end.offset;
                        o = r || s
                    }
                    o && this.updateMarker(n.name, {
                        range: i
                    })
                }
            }
        }

        function gc(t, e, n, i) {
            const o = t.model,
                r = o.document;
            let s, a, c, l = i.start;
            for (const t of i.getWalker({
                    shallow: !0
                })) c = t.item.getAttribute(e), s && a != c && (a != n && d(), l = s), s = t.nextPosition, a = c;

            function d() {
                const i = new Gs(l, s),
                    c = i.root.document ? r.version : null,
                    d = new rc(i, e, a, n, c);
                t.batch.addOperation(d), o.applyOperation(d)
            }
            s instanceof $s && s != l && a != n && d()
        }

        function bc(t, e, n, i) {
            const o = t.model,
                r = o.document,
                s = i.getAttribute(e);
            let a, c;
            if (s != n) {
                if (i.root === i) {
                    const t = i.document ? r.version : null;
                    c = new uc(i, e, s, n, t)
                } else {
                    const o = (a = new Gs($s._createBefore(i), t.createPositionAfter(i))).root.document ? r.version : null;
                    c = new rc(a, e, s, n, o)
                }
                t.batch.addOperation(c), o.applyOperation(c)
            }
        }

        function wc(t, e, n, i, o) {
            const r = t.model,
                s = r.document,
                a = new lc(e, n, i, r.markers, o, s.version);
            t.batch.addOperation(a), r.applyOperation(a)
        }

        function _c(t, e, n, i) {
            let o;
            if (t.root.document) {
                const n = i.document,
                    r = new $s(n.graveyard, [0]);
                o = new ac(t, e, r, n.version)
            } else o = new sc(t, e);
            n.addOperation(o), i.applyOperation(o)
        }

        function kc(t, e) {
            return t === e || t instanceof mc && e instanceof mc
        }
        class vc {
            constructor(t) {
                this._markerCollection = t, this._changesInElement = new Map, this._elementSnapshots = new Map, this._changedMarkers = new Map, this._changeCount = 0, this._cachedChanges = null, this._cachedChangesWithGraveyard = null
            }
            get isEmpty() {
                return 0 == this._changesInElement.size && 0 == this._changedMarkers.size
            }
            bufferOperation(t) {
                switch (t.type) {
                    case "insert":
                        if (this._isInInsertedElement(t.position.parent)) return;
                        this._markInsert(t.position.parent, t.position.offset, t.nodes.maxOffset);
                        break;
                    case "addAttribute":
                    case "removeAttribute":
                    case "changeAttribute":
                        for (const e of t.range.getItems()) this._isInInsertedElement(e.parent) || this._markAttribute(e);
                        break;
                    case "remove":
                    case "move":
                    case "reinsert":
                        {
                            if (t.sourcePosition.isEqual(t.targetPosition) || t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition)) return;
                            const e = this._isInInsertedElement(t.sourcePosition.parent),
                                n = this._isInInsertedElement(t.targetPosition.parent);
                            e || this._markRemove(t.sourcePosition.parent, t.sourcePosition.offset, t.howMany), n || this._markInsert(t.targetPosition.parent, t.getMovedRangeStart().offset, t.howMany);
                            break
                        }
                    case "rename":
                        {
                            if (this._isInInsertedElement(t.position.parent)) return;
                            this._markRemove(t.position.parent, t.position.offset, 1), this._markInsert(t.position.parent, t.position.offset, 1);
                            const e = Gs._createFromPositionAndShift(t.position, 1);
                            for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                                const e = t.getRange();
                                this.bufferMarkerChange(t.name, e, e, t.affectsData)
                            }
                            break
                        }
                    case "split":
                        {
                            const e = t.splitPosition.parent;
                            this._isInInsertedElement(e) || this._markRemove(e, t.splitPosition.offset, t.howMany), this._isInInsertedElement(t.insertionPosition.parent) || this._markInsert(t.insertionPosition.parent, t.insertionPosition.offset, 1), t.graveyardPosition && this._markRemove(t.graveyardPosition.parent, t.graveyardPosition.offset, 1);
                            break
                        }
                    case "merge":
                        {
                            const e = t.sourcePosition.parent;
                            this._isInInsertedElement(e.parent) || this._markRemove(e.parent, e.startOffset, 1);
                            const n = t.graveyardPosition.parent;
                            this._markInsert(n, t.graveyardPosition.offset, 1);
                            const i = t.targetPosition.parent;
                            this._isInInsertedElement(i) || this._markInsert(i, t.targetPosition.offset, e.maxOffset);
                            break
                        }
                }
                this._cachedChanges = null
            }
            bufferMarkerChange(t, e, n, i) {
                const o = this._changedMarkers.get(t);
                o ? (o.newRange = n, o.affectsData = i, null == o.oldRange && null == o.newRange && this._changedMarkers.delete(t)) : this._changedMarkers.set(t, {
                    oldRange: e,
                    newRange: n,
                    affectsData: i
                })
            }
            getMarkersToRemove() {
                const t = [];
                for (const [e, n] of this._changedMarkers) null != n.oldRange && t.push({
                    name: e,
                    range: n.oldRange
                });
                return t
            }
            getMarkersToAdd() {
                const t = [];
                for (const [e, n] of this._changedMarkers) null != n.newRange && t.push({
                    name: e,
                    range: n.newRange
                });
                return t
            }
            getChangedMarkers() {
                return Array.from(this._changedMarkers).map(t => ({
                    name: t[0],
                    data: {
                        oldRange: t[1].oldRange,
                        newRange: t[1].newRange
                    }
                }))
            }
            hasDataChanges() {
                for (const [, t] of this._changedMarkers)
                    if (t.affectsData) return !0;
                return this._changesInElement.size > 0
            }
            getChanges(t = {
                includeChangesInGraveyard: !1
            }) {
                if (this._cachedChanges) return t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard.slice() : this._cachedChanges.slice();
                const e = [];
                for (const t of this._changesInElement.keys()) {
                    const n = this._changesInElement.get(t).sort((t, e) => t.offset === e.offset ? t.type != e.type ? "remove" == t.type ? -1 : 1 : 0 : t.offset < e.offset ? -1 : 1),
                        i = this._elementSnapshots.get(t),
                        o = yc(t.getChildren()),
                        r = xc(i.length, n);
                    let s = 0,
                        a = 0;
                    for (const n of r)
                        if ("i" === n) e.push(this._getInsertDiff(t, s, o[s].name)), s++;
                        else if ("r" === n) e.push(this._getRemoveDiff(t, s, i[a].name)), a++;
                    else if ("a" === n) {
                        const n = o[s].attributes,
                            r = i[a].attributes;
                        let c;
                        if ("$text" == o[s].name) c = new Gs($s._createAt(t, s), $s._createAt(t, s + 1));
                        else {
                            const e = t.offsetToIndex(s);
                            c = new Gs($s._createAt(t, s), $s._createAt(t.getChild(e), 0))
                        }
                        e.push(...this._getAttributesDiff(c, r, n)), s++, a++
                    } else s++, a++
                }
                e.sort((t, e) => t.position.root != e.position.root ? t.position.root.rootName < e.position.root.rootName ? -1 : 1 : t.position.isEqual(e.position) ? t.changeCount - e.changeCount : t.position.isBefore(e.position) ? -1 : 1);
                for (let t = 1; t < e.length; t++) {
                    const n = e[t - 1],
                        i = e[t],
                        o = "remove" == n.type && "remove" == i.type && "$text" == n.name && "$text" == i.name && n.position.isEqual(i.position),
                        r = "insert" == n.type && "insert" == i.type && "$text" == n.name && "$text" == i.name && n.position.parent == i.position.parent && n.position.offset + n.length == i.position.offset,
                        s = "attribute" == n.type && "attribute" == i.type && n.position.parent == i.position.parent && n.range.isFlat && i.range.isFlat && n.position.offset + n.length == i.position.offset && n.attributeKey == i.attributeKey && n.attributeOldValue == i.attributeOldValue && n.attributeNewValue == i.attributeNewValue;
                    (o || r || s) && (e[t - 1].length++, s && (e[t - 1].range.end = e[t - 1].range.end.getShiftedBy(1)), e.splice(t, 1), t--)
                }
                for (const t of e) delete t.changeCount, "attribute" == t.type && (delete t.position, delete t.length);
                return this._changeCount = 0, this._cachedChangesWithGraveyard = e.slice(), this._cachedChanges = e.slice().filter(Ac), t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard : this._cachedChanges
            }
            reset() {
                this._changesInElement.clear(), this._elementSnapshots.clear(), this._changedMarkers.clear(), this._cachedChanges = null
            }
            _markInsert(t, e, n) {
                const i = {
                    type: "insert",
                    offset: e,
                    howMany: n,
                    count: this._changeCount++
                };
                this._markChange(t, i)
            }
            _markRemove(t, e, n) {
                const i = {
                    type: "remove",
                    offset: e,
                    howMany: n,
                    count: this._changeCount++
                };
                this._markChange(t, i), this._removeAllNestedChanges(t, e, n)
            }
            _markAttribute(t) {
                const e = {
                    type: "attribute",
                    offset: t.startOffset,
                    howMany: t.offsetSize,
                    count: this._changeCount++
                };
                this._markChange(t.parent, e)
            }
            _markChange(t, e) {
                this._makeSnapshot(t);
                const n = this._getChangesForElement(t);
                this._handleChange(e, n), n.push(e);
                for (let t = 0; t < n.length; t++) n[t].howMany < 1 && (n.splice(t, 1), t--)
            }
            _getChangesForElement(t) {
                let e;
                return this._changesInElement.has(t) ? e = this._changesInElement.get(t) : (e = [], this._changesInElement.set(t, e)), e
            }
            _makeSnapshot(t) {
                this._elementSnapshots.has(t) || this._elementSnapshots.set(t, yc(t.getChildren()))
            }
            _handleChange(t, e) {
                t.nodesToHandle = t.howMany;
                for (const n of e) {
                    const i = t.offset + t.howMany,
                        o = n.offset + n.howMany;
                    if ("insert" == t.type && ("insert" == n.type && (t.offset <= n.offset ? n.offset += t.howMany : t.offset < o && (n.howMany += t.nodesToHandle, t.nodesToHandle = 0)), "remove" == n.type && t.offset < n.offset && (n.offset += t.howMany), "attribute" == n.type))
                        if (t.offset <= n.offset) n.offset += t.howMany;
                        else if (t.offset < o) {
                        const o = n.howMany;
                        n.howMany = t.offset - n.offset, e.unshift({
                            type: "attribute",
                            offset: i,
                            howMany: o - n.howMany,
                            count: this._changeCount++
                        })
                    }
                    if ("remove" == t.type) {
                        if ("insert" == n.type)
                            if (i <= n.offset) n.offset -= t.howMany;
                            else if (i <= o)
                            if (t.offset < n.offset) {
                                const e = i - n.offset;
                                n.offset = t.offset, n.howMany -= e, t.nodesToHandle -= e
                            } else n.howMany -= t.nodesToHandle, t.nodesToHandle = 0;
                        else if (t.offset <= n.offset) t.nodesToHandle -= n.howMany, n.howMany = 0;
                        else if (t.offset < o) {
                            const e = o - t.offset;
                            n.howMany -= e, t.nodesToHandle -= e
                        }
                        if ("remove" == n.type && (i <= n.offset ? n.offset -= t.howMany : t.offset < n.offset && (t.nodesToHandle += n.howMany, n.howMany = 0)), "attribute" == n.type)
                            if (i <= n.offset) n.offset -= t.howMany;
                            else if (t.offset < n.offset) {
                            const e = i - n.offset;
                            n.offset = t.offset, n.howMany -= e
                        } else if (t.offset < o)
                            if (i <= o) {
                                const i = n.howMany;
                                n.howMany = t.offset - n.offset;
                                const o = i - n.howMany - t.nodesToHandle;
                                e.unshift({
                                    type: "attribute",
                                    offset: t.offset,
                                    howMany: o,
                                    count: this._changeCount++
                                })
                            } else n.howMany -= o - t.offset
                    }
                    if ("attribute" == t.type) {
                        if ("insert" == n.type)
                            if (t.offset < n.offset && i > n.offset) {
                                if (i > o) {
                                    const t = {
                                        type: "attribute",
                                        offset: o,
                                        howMany: i - o,
                                        count: this._changeCount++
                                    };
                                    this._handleChange(t, e), e.push(t)
                                }
                                t.nodesToHandle = n.offset - t.offset, t.howMany = t.nodesToHandle
                            } else t.offset >= n.offset && t.offset < o && (i > o ? (t.nodesToHandle = i - o, t.offset = o) : t.nodesToHandle = 0);
                            "attribute" == n.type && (t.offset >= n.offset && i <= o ? (t.nodesToHandle = 0, t.howMany = 0, t.offset = 0) : t.offset <= n.offset && i >= o && (n.howMany = 0))
                    }
                }
                t.howMany = t.nodesToHandle, delete t.nodesToHandle
            }
            _getInsertDiff(t, e, n) {
                return {
                    type: "insert",
                    position: $s._createAt(t, e),
                    name: n,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }
            _getRemoveDiff(t, e, n) {
                return {
                    type: "remove",
                    position: $s._createAt(t, e),
                    name: n,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }
            _getAttributesDiff(t, e, n) {
                const i = [];
                n = new Map(n);
                for (const [o, r] of e) {
                    const e = n.has(o) ? n.get(o) : null;
                    e !== r && i.push({
                        type: "attribute",
                        position: t.start,
                        range: t.clone(),
                        length: 1,
                        attributeKey: o,
                        attributeOldValue: r,
                        attributeNewValue: e,
                        changeCount: this._changeCount++
                    }), n.delete(o)
                }
                for (const [e, o] of n) i.push({
                    type: "attribute",
                    position: t.start,
                    range: t.clone(),
                    length: 1,
                    attributeKey: e,
                    attributeOldValue: null,
                    attributeNewValue: o,
                    changeCount: this._changeCount++
                });
                return i
            }
            _isInInsertedElement(t) {
                const e = t.parent;
                if (!e) return !1;
                const n = this._changesInElement.get(e),
                    i = t.startOffset;
                if (n)
                    for (const t of n)
                        if ("insert" == t.type && i >= t.offset && i < t.offset + t.howMany) return !0;
                return this._isInInsertedElement(e)
            }
            _removeAllNestedChanges(t, e, n) {
                const i = new Gs($s._createAt(t, e), $s._createAt(t, e + n));
                for (const t of i.getItems({
                        shallow: !0
                    })) t.is("element") && (this._elementSnapshots.delete(t), this._changesInElement.delete(t), this._removeAllNestedChanges(t, 0, t.maxOffset))
            }
        }

        function yc(t) {
            const e = [];
            for (const n of t)
                if (n.is("text"))
                    for (let t = 0; t < n.data.length; t++) e.push({
                        name: "$text",
                        attributes: new Map(n.getAttributes())
                    });
                else e.push({
                    name: n.name,
                    attributes: new Map(n.getAttributes())
                });
            return e
        }

        function xc(t, e) {
            const n = [];
            let i = 0,
                o = 0;
            for (const t of e) t.offset > i && (n.push(...
                "e".repeat(t.offset - i).split("")), o += t.offset - i), "insert" == t.type ? (n.push(...
                "i".repeat(t.howMany).split("")), i = t.offset + t.howMany) : "remove" == t.type ? (n.push(...
                "r".repeat(t.howMany).split("")), i = t.offset, o += t.howMany) : (n.push(...
                "a".repeat(t.howMany).split("")), i = t.offset + t.howMany, o += t.howMany);
            return o < t && n.push(...
                "e".repeat(t - o).split("")), n
        }

        function Ac(t) {
            const e = t.position && "$graveyard" == t.position.root.rootName,
                n = t.range && "$graveyard" == t.range.root.rootName;
            return !e && !n
        }
        class Cc {
            constructor() {
                this._operations = [], this._undoPairs = new Map, this._undoneOperations = new Set
            }
            addOperation(t) {
                this._operations.includes(t) || this._operations.push(t)
            }
            getOperations(t = 0, e = Number.POSITIVE_INFINITY) {
                return t < 0 ? [] : this._operations.slice(t, e)
            }
            getOperation(t) {
                return this._operations[t]
            }
            setOperationAsUndone(t, e) {
                this._undoPairs.set(e, t), this._undoneOperations.add(t)
            }
            isUndoingOperation(t) {
                return this._undoPairs.has(t)
            }
            isUndoneOperation(t) {
                return this._undoneOperations.has(t)
            }
            getUndoneOperation(t) {
                return this._undoPairs.get(t)
            }
        }

        function Tc(t, e) {
            return function(t) {
                return !!t && 1 == t.length && /[\ud800-\udbff]/.test(t)
            }(t.charAt(e - 1)) && function(t) {
                return !!t && 1 == t.length && /[\udc00-\udfff]/.test(t)
            }(t.charAt(e))
        }

        function Pc(t, e) {
            return function(t) {
                return !!t && 1 == t.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)
            }(t.charAt(e))
        }
        const Mc = "$graveyard";
        class Ec {
            constructor(t) {
                this.model = t, this.version = 0, this.history = new Cc(this), this.selection = new sa(this), this.roots = new oo({
                    idProperty: "rootName"
                }), this.differ = new vc(t.markers), this._postFixers = new Set, this._hasSelectionChangedFromTheLastChangeBlock = !1, this.createRoot("$root", Mc), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (n.isDocumentOperation && n.baseVersion !== this.version) throw new Gn.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.", {
                        operation: n
                    })
                }, {
                    priority: "highest"
                }), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    n.isDocumentOperation && this.differ.bufferOperation(n)
                }, {
                    priority: "high"
                }), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    n.isDocumentOperation && (this.version++, this.history.addOperation(n))
                }, {
                    priority: "low"
                }), this.listenTo(this.selection, "change", () => {
                    this._hasSelectionChangedFromTheLastChangeBlock = !0
                }), this.listenTo(t.markers, "update", (t, e, n, i) => {
                    this.differ.bufferMarkerChange(e.name, n, i, e.affectsData), null === n && e.on("change", (t, n) => {
                        this.differ.bufferMarkerChange(e.name, n, e.getRange(), e.affectsData)
                    })
                })
            }
            get graveyard() {
                return this.getRoot(Mc)
            }
            createRoot(t = "$root", e = "main") {
                if (this.roots.get(e)) throw new Gn.b("model-document-createRoot-name-exists: Root with specified name already exists.", {
                    name: e
                });
                const n = new mc(this, t, e);
                return this.roots.add(n), n
            }
            destroy() {
                this.selection.destroy(), this.stopListening()
            }
            getRoot(t = "main") {
                return this.roots.get(t)
            }
            getRootNames() {
                return Array.from(this.roots, t => t.rootName).filter(t => t != Mc)
            }
            registerPostFixer(t) {
                this._postFixers.add(t)
            }
            toJSON() {
                const t = ui(this);
                return t.selection = "[engine.model.DocumentSelection]", t.model = "[engine.model.Model]", t
            }
            _handleChangeBlock(t) {
                this._hasDocumentChangedFromTheLastChangeBlock() && (this._callPostFixers(t), this.differ.hasDataChanges() ? this.fire("change:data", t.batch) : this.fire("change", t.batch), this.differ.reset()), this._hasSelectionChangedFromTheLastChangeBlock = !1
            }
            _hasDocumentChangedFromTheLastChangeBlock() {
                return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock
            }
            _getDefaultRoot() {
                for (const t of this.roots)
                    if (t !== this.graveyard) return t;
                return this.graveyard
            }
            _getDefaultRange() {
                const t = this._getDefaultRoot(),
                    e = this.model,
                    n = e.schema,
                    i = e.createPositionFromPath(t, [0]);
                return n.getNearestSelectionRange(i) || e.createRange(i)
            }
            _validateSelectionRange(t) {
                return Sc(t.start) && Sc(t.end)
            }
            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const n of this._postFixers)
                        if (e = n(t)) break
                } while (e)
            }
        }

        function Sc(t) {
            const e = t.textNode;
            if (e) {
                const n = e.data,
                    i = t.offset - e.startOffset;
                return !Tc(n, i) && !Pc(n, i)
            }
            return !0
        }
        ci(Ec, ei);
        class Ic {
            constructor() {
                this._markers = new Map
            }[Symbol.iterator]() {
                return this._markers.values()
            }
            has(t) {
                return this._markers.has(t)
            }
            get(t) {
                return this._markers.get(t) || null
            }
            _set(t, e, n = !1, i = !1) {
                const o = t instanceof Nc ? t.name : t,
                    r = this._markers.get(o);
                if (r) {
                    const t = r.getRange();
                    let s = !1;
                    return t.isEqual(e) || (r._attachLiveRange(oa.fromRange(e)), s = !0), n != r.managedUsingOperations && (r._managedUsingOperations = n, s = !0), "boolean" == typeof i && i != r.affectsData && (r._affectsData = i, s = !0), s && this.fire("update:" + o, r, t, e), r
                }
                const s = oa.fromRange(e),
                    a = new Nc(o, s, n, i);
                return this._markers.set(o, a), this.fire("update:" + o, a, null, e), a
            }
            _remove(t) {
                const e = t instanceof Nc ? t.name : t,
                    n = this._markers.get(e);
                return !!n && (this._markers.delete(e), this.fire("update:" + e, n, n.getRange(), null), this._destroyMarker(n), !0)
            } * getMarkersAtPosition(t) {
                for (const e of this) e.getRange().containsPosition(t) && (yield e)
            } * getMarkersIntersectingRange(t) {
                for (const e of this) null !== e.getRange().getIntersection(t) && (yield e)
            }
            destroy() {
                for (const t of this._markers.values()) this._destroyMarker(t);
                this._markers = null, this.stopListening()
            } * getMarkersGroup(t) {
                for (const e of this._markers.values()) e.name.startsWith(t + ":") && (yield e)
            }
            _destroyMarker(t) {
                t.stopListening(), t._detachLiveRange()
            }
        }
        ci(Ic, ei);
        class Nc {
            constructor(t, e, n, i) {
                this.name = t, this._liveRange = this._attachLiveRange(e), this._managedUsingOperations = n, this._affectsData = i
            }
            get managedUsingOperations() {
                if (!this._liveRange) throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");
                return this._managedUsingOperations
            }
            get affectsData() {
                if (!this._liveRange) throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");
                return this._affectsData
            }
            getStart() {
                if (!this._liveRange) throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");
                return this._liveRange.start.clone()
            }
            getEnd() {
                if (!this._liveRange) throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");
                return this._liveRange.end.clone()
            }
            getRange() {
                if (!this._liveRange) throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");
                return this._liveRange.toRange()
            }
            _attachLiveRange(t) {
                return this._liveRange && this._detachLiveRange(), t.delegate("change:range").to(this), t.delegate("change:content").to(this), this._liveRange = t, t
            }
            _detachLiveRange() {
                this._liveRange.stopDelegating("change:range", this), this._liveRange.stopDelegating("change:content", this), this._liveRange.detach(), this._liveRange = null
            }
        }
        ci(Nc, ei);
        class Oc extends $s {
            constructor(t, e, n = "toNone") {
                if (super(t, e, n), !this.root.is("rootElement")) throw new Gn.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.");
                (function() {
                    this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                        const n = e[0];
                        n.isDocumentOperation && function(t) {
                            const e = this.getTransformedByOperation(t);
                            if (!this.isEqual(e)) {
                                const t = this.toPosition();
                                this.path = e.path, this.root = e.root, this.fire("change", t)
                            }
                        }.call(this, n)
                    }, {
                        priority: "low"
                    })
                }).call(this)
            }
            detach() {
                this.stopListening()
            }
            toPosition() {
                return new $s(this.root, this.path.slice(), this.stickiness)
            }
            static fromPosition(t, e) {
                return new this(t.root, t.path.slice(), e || t.stickiness)
            }
        }
        ci(Oc, ei);
        class Rc {
            constructor(t, e, n) {
                this.model = t, this.writer = e, this.position = n, this.canMergeWith = new Set([this.position.parent]), this.schema = t.schema, this._filterAttributesOf = []
            }
            handleNodes(t, e) {
                t = Array.from(t);
                for (let n = 0; n < t.length; n++) {
                    const i = t[n];
                    this._handleNode(i, {
                        isFirst: 0 === n && e.isFirst,
                        isLast: n === t.length - 1 && e.isLast
                    })
                }
                this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer), this._filterAttributesOf = []
            }
            getSelectionRange() {
                return this.nodeToSelect ? Gs._createOn(this.nodeToSelect) : this.model.schema.getNearestSelectionRange(this.position)
            }
            _handleNode(t, e) {
                if (this.schema.isObject(t)) return void this._handleObject(t, e);
                this._checkAndSplitToAllowedPosition(t, e) ? (this._insert(t), this._mergeSiblingsOf(t, e)) : this._handleDisallowedNode(t, e)
            }
            _handleObject(t, e) {
                this._checkAndSplitToAllowedPosition(t) ? this._insert(t) : this._tryAutoparagraphing(t, e)
            }
            _handleDisallowedNode(t, e) {
                t.is("element") ? this.handleNodes(t.getChildren(), e) : this._tryAutoparagraphing(t, e)
            }
            _insert(t) {
                if (!this.schema.checkChild(this.position, t)) return void bs.a.error("insertcontent-wrong-position: The node cannot be inserted on the given position.", {
                    node: t,
                    position: this.position
                });
                const e = Oc.fromPosition(this.position, "toNext");
                this.writer.insert(t, this.position), this.position = e.toPosition(), e.detach(), this.schema.isObject(t) && !this.schema.checkChild(this.position, "$text") ? this.nodeToSelect = t : this.nodeToSelect = null, this._filterAttributesOf.push(t)
            }
            _mergeSiblingsOf(t, e) {
                if (!(t instanceof Hs)) return;
                const n = this._canMergeLeft(t, e),
                    i = this._canMergeRight(t, e),
                    o = Oc._createBefore(t);
                o.stickiness = "toNext";
                const r = Oc._createAfter(t);
                if (r.stickiness = "toNext", n) {
                    const t = Oc.fromPosition(this.position);
                    t.stickiness = "toNext", this.writer.merge(o), this.position = t.toPosition(), t.detach()
                }
                if (i) {
                    this.position.isEqual(r) || bs.a.error("insertcontent-wrong-position-on-merge: The insertion position should equal the merge position"), this.position = $s._createAt(r.nodeBefore, "end");
                    const t = new Oc(this.position.root, this.position.path, "toPrevious");
                    this.writer.merge(r), this.position = t.toPosition(), t.detach()
                }(n || i) && this._filterAttributesOf.push(this.position.parent), o.detach(), r.detach()
            }
            _canMergeLeft(t, e) {
                const n = t.previousSibling;
                return e.isFirst && n instanceof Hs && this.canMergeWith.has(n) && this.model.schema.checkMerge(n, t)
            }
            _canMergeRight(t, e) {
                const n = t.nextSibling;
                return e.isLast && n instanceof Hs && this.canMergeWith.has(n) && this.model.schema.checkMerge(t, n)
            }
            _tryAutoparagraphing(t, e) {
                const n = this.writer.createElement("paragraph");
                this._getAllowedIn(n, this.position.parent) && this.schema.checkChild(n, t) && (n._appendChild(t), this._handleNode(n, e))
            }
            _checkAndSplitToAllowedPosition(t) {
                const e = this._getAllowedIn(t, this.position.parent);
                if (!e) return !1;
                for (; e != this.position.parent;) {
                    if (this.schema.isLimit(this.position.parent)) return !1;
                    if (this.position.isAtStart) {
                        const t = this.position.parent;
                        this.position = this.writer.createPositionBefore(t), t.isEmpty && this.writer.remove(t)
                    } else if (this.position.isAtEnd) this.position = this.writer.createPositionAfter(this.position.parent);
                    else {
                        const t = this.writer.createPositionAfter(this.position.parent);
                        this.writer.split(this.position), this.position = t, this.canMergeWith.add(this.position.nodeAfter)
                    }
                }
                return !0
            }
            _getAllowedIn(t, e) {
                return this.schema.checkChild(e, t) ? e : e.parent ? this._getAllowedIn(t, e.parent) : null
            }
        }

        function Dc(t, e, n = {}) {
            if (e.isCollapsed) return;
            const i = t.schema;
            t.change(t => {
                if (!n.doNotResetEntireContent && function(t, e) {
                        const n = t.getLimitElement(e);
                        if (!e.containsEntireContent(n)) return !1;
                        const i = e.getFirstRange();
                        if (i.start.parent == i.end.parent) return !1;
                        return t.checkChild(n, "paragraph")
                    }(i, e)) return void
                function(t, e) {
                    const n = t.model.schema.getLimitElement(e);
                    t.remove(t.createRangeIn(n)), Lc(t, t.createPositionAt(n, 0), e)
                }(t, e);
                const o = e.getFirstRange(),
                    r = o.start,
                    s = Oc.fromPosition(o.end, "toNext");
                o.start.isTouching(o.end) || t.remove(o), n.leaveUnmerged || (! function t(e, n, i) {
                        const o = n.parent;
                        const r = i.parent;
                        if (o == r) return;
                        if (e.model.schema.isLimit(o) || e.model.schema.isLimit(r)) return;
                        if (! function(t, e, n) {
                                const i = new Gs(t, e);
                                for (const t of i.getWalker())
                                    if (n.isLimit(t.item)) return !1;
                                return !0
                            }(n, i, e.model.schema)) return;
                        n = e.createPositionAfter(o);
                        i = e.createPositionBefore(r);
                        i.isEqual(n) || e.insert(r, n);
                        e.merge(n);
                        for (; i.parent.isEmpty;) {
                            const t = i.parent;
                            i = e.createPositionBefore(t), e.remove(t)
                        }
                        t(e, n, i)
                    }(t, r, s), i.removeDisallowedAttributes(r.parent.getChildren(), t)), e instanceof sa ? t.setSelection(r) : e.setTo(r),
                    function(t, e) {
                        const n = t.checkChild(e, "$text"),
                            i = t.checkChild(e, "paragraph");
                        return !n && i
                    }(i, r) && Lc(t, r, e), s.detach()
            })
        }

        function Lc(t, e, n) {
            const i = t.createElement("paragraph");
            t.insert(i, e), n instanceof sa ? t.setSelection(i, 0) : n.setTo(i, 0)
        }
        const jc = ' ,.?!:;"-()';

        function Vc(t, e, n = {}) {
            const i = t.schema,
                o = "backward" != n.direction,
                r = n.unit ? n.unit : "character",
                s = e.focus,
                a = new qs({
                    boundaries: function(t, e) {
                        const n = t.root,
                            i = $s._createAt(n, e ? "end" : 0);
                        return e ? new Gs(t, i) : new Gs(i, t)
                    }(s, o),
                    singleCharacters: !0,
                    direction: o ? "forward" : "backward"
                }),
                c = {
                    walker: a,
                    schema: i,
                    isForward: o,
                    unit: r
                };
            let l;
            for (; l = a.next();) {
                if (l.done) return;
                const n = Bc(c, l.value);
                if (n) return void(e instanceof sa ? t.change(t => {
                    t.setSelectionFocus(n)
                }) : e.setFocus(n))
            }
        }

        function Bc(t, e) {
            if ("text" == e.type) return "word" === t.unit ? function(t, e) {
                let n = t.position.textNode;
                if (n) {
                    let i = t.position.offset - n.startOffset;
                    for (; !zc(n.data, i, e) && !Fc(n, i, e);) {
                        t.next();
                        const o = e ? t.position.nodeAfter : t.position.nodeBefore;
                        if (o && o.is("text")) {
                            const i = o.data.charAt(e ? 0 : o.data.length - 1);
                            jc.includes(i) || (t.next(), n = t.position.textNode)
                        }
                        i = t.position.offset - n.startOffset
                    }
                }
                return t.position
            }(t.walker, t.isForward) : function(t, e) {
                const n = t.position.textNode;
                if (n) {
                    const i = n.data;
                    let o = t.position.offset - n.startOffset;
                    for (; Tc(i, o) || "character" == e && Pc(i, o);) t.next(), o = t.position.offset - n.startOffset
                }
                return t.position
            }(t.walker, t.unit, t.isForward);
            if (e.type == (t.isForward ? "elementStart" : "elementEnd")) {
                if (t.schema.isObject(e.item)) return $s._createAt(e.item, t.isForward ? "after" : "before");
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            } else {
                if (t.schema.isLimit(e.item)) return void t.walker.skip(() => !0);
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            }
        }

        function zc(t, e, n) {
            const i = e + (n ? 0 : -1);
            return jc.includes(t.charAt(i))
        }

        function Fc(t, e, n) {
            return e === (n ? t.endOffset : 0)
        }

        function Uc(t, e) {
            const n = [];
            Array.from(t.getItems({
                direction: "backward"
            })).map(t => e.createRangeOn(t)).filter(e => {
                return (e.start.isAfter(t.start) || e.start.isEqual(t.start)) && (e.end.isBefore(t.end) || e.end.isEqual(t.end))
            }).forEach(t => {
                n.push(t.start.parent), e.remove(t)
            }), n.forEach(t => {
                let n = t;
                for (; n.parent && n.isEmpty;) {
                    const t = e.createRangeOn(n);
                    n = n.parent, e.remove(t)
                }
            })
        }

        function Hc(t) {
            t.document.registerPostFixer(e => (function(t, e) {
                const n = e.document.selection,
                    i = e.schema,
                    o = [];
                let r = !1;
                for (const t of n.getRanges()) {
                    const e = qc(t, i);
                    e ? (o.push(e), r = !0) : o.push(t)
                }
                if (r) {
                    let e = o;
                    if (o.length > 1) {
                        const t = o[0].start,
                            n = o[o.length - 1].end;
                        e = [new Gs(t, n)]
                    }
                    t.setSelection(e, {
                        backward: n.isBackward
                    })
                }
            })(e, t))
        }

        function qc(t, e) {
            return t.isCollapsed ? function(t, e) {
                const n = t.start,
                    i = e.getNearestSelectionRange(n);
                if (!i) return null;
                const o = i.start;
                if (n.isEqual(o)) return null;
                if (o.nodeAfter && e.isLimit(o.nodeAfter)) return new Gs(o, $s._createAfter(o.nodeAfter));
                return new Gs(o)
            }(t, e) : function(t, e) {
                const n = t.start,
                    i = t.end,
                    o = e.checkChild(n, "$text"),
                    r = e.checkChild(i, "$text"),
                    s = e.getLimitElement(n),
                    a = e.getLimitElement(i);
                if (s === a) {
                    if (o && r) return null;
                    if (function(t, e, n) {
                            const i = t.nodeAfter && !n.isLimit(t.nodeAfter) || n.checkChild(t, "$text"),
                                o = e.nodeBefore && !n.isLimit(e.nodeBefore) || n.checkChild(e, "$text");
                            return i || o
                        }(n, i, e)) {
                        const t = n.nodeAfter && e.isObject(n.nodeAfter),
                            o = t ? null : e.getNearestSelectionRange(n, "forward"),
                            r = i.nodeBefore && e.isObject(i.nodeBefore),
                            s = r ? null : e.getNearestSelectionRange(i, "backward"),
                            a = o ? o.start : n,
                            c = s ? s.start : i;
                        return new Gs(a, c)
                    }
                }
                const c = s && !s.is("rootElement"),
                    l = a && !a.is("rootElement");
                if (c || l) {
                    const t = n.nodeAfter && i.nodeBefore && n.nodeAfter.parent === i.nodeBefore.parent,
                        o = c && (!t || !Yc(n.nodeAfter, e)),
                        r = l && (!t || !Yc(i.nodeBefore, e));
                    let d = n,
                        u = i;
                    return o && (d = $s._createBefore(Wc(s, e))), r && (u = $s._createAfter(Wc(a, e))), new Gs(d, u)
                }
                return null
            }(t, e)
        }

        function Wc(t, e) {
            let n = t,
                i = n;
            for (; e.isLimit(i) && i.parent;) n = i, i = i.parent;
            return n
        }

        function Yc(t, e) {
            return t && e.isObject(t)
        }
        class $c {
            constructor() {
                this.markers = new Ic, this.document = new Ec(this), this.schema = new Ia, this._pendingChanges = [], this._currentWriter = null, ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach(t => this.decorate(t)), this.on("applyOperation", (t, e) => {
                    e[0]._validate()
                }, {
                    priority: "highest"
                }), this.schema.register("$root", {
                    isLimit: !0
                }), this.schema.register("$block", {
                    allowIn: "$root",
                    isBlock: !0
                }), this.schema.register("$text", {
                    allowIn: "$block",
                    isInline: !0
                }), this.schema.register("$clipboardHolder", {
                    allowContentOf: "$root",
                    isLimit: !0
                }), this.schema.extend("$text", {
                    allowIn: "$clipboardHolder"
                }), this.schema.register("$marker", {
                    allowIn: ["$root", "$block"]
                }), Hc(this)
            }
            change(t) {
                return 0 === this._pendingChanges.length ? (this._pendingChanges.push({
                    batch: new Ga,
                    callback: t
                }), this._runPendingChanges()[0]) : t(this._currentWriter)
            }
            enqueueChange(t, e) {
                "string" == typeof t ? t = new Ga(t) : "function" == typeof t && (e = t, t = new Ga), this._pendingChanges.push({
                    batch: t,
                    callback: e
                }), 1 == this._pendingChanges.length && this._runPendingChanges()
            }
            applyOperation(t) {
                t._execute()
            }
            insertContent(t, e, n) {
                ! function(t, e, n, i) {
                    t.change(o => {
                        let r;
                        (r = n ? n instanceof ta || n instanceof sa ? n : o.createSelection(n, i) : t.document.selection).isCollapsed || t.deleteContent(r);
                        const s = new Rc(t, o, r.anchor);
                        let a;
                        a = e.is("documentFragment") ? e.getChildren() : [e], s.handleNodes(a, {
                            isFirst: !0,
                            isLast: !0
                        });
                        const c = s.getSelectionRange();
                        c ? r instanceof sa ? o.setSelection(c) : r.setTo(c) : bs.a.warn("insertcontent-no-range: Cannot determine a proper selection range after insertion.")
                    })
                }(this, t, e, n)
            }
            deleteContent(t, e) {
                Dc(this, t, e)
            }
            modifySelection(t, e) {
                Vc(this, t, e)
            }
            getSelectedContent(t) {
                return function(t, e) {
                    return t.change(t => {
                        const n = t.createDocumentFragment(),
                            i = e.getFirstRange();
                        if (!i || i.isCollapsed) return n;
                        const o = i.start.root,
                            r = i.start.getCommonPath(i.end),
                            s = o.getNodeByPath(r);
                        let a;
                        const c = (a = i.start.parent == i.end.parent ? i : t.createRange(t.createPositionAt(s, i.start.path[r.length]), t.createPositionAt(s, i.end.path[r.length] + 1))).end.offset - a.start.offset;
                        for (const e of a.getItems({
                                shallow: !0
                            })) e.is("textProxy") ? t.appendText(e.data, e.getAttributes(), n) : t.append(e._clone(!0), n);
                        if (a != i) {
                            const e = i._getTransformedByMove(a.start, t.createPositionAt(n, 0), c)[0],
                                o = t.createRange(t.createPositionAt(n, 0), e.start);
                            Uc(t.createRange(e.end, t.createPositionAt(n, "end")), t), Uc(o, t)
                        }
                        return n
                    })
                }(this, t)
            }
            hasContent(t, e) {
                const n = t instanceof Hs ? Gs._createIn(t) : t;
                if (n.isCollapsed) return !1;
                for (const t of this.markers.getMarkersIntersectingRange(n))
                    if (t.affectsData) return !0;
                const {
                    ignoreWhitespaces: i = !1
                } = e || {};
                for (const t of n.getItems())
                    if (t.is("textProxy")) {
                        if (!i) return !0;
                        if (-1 !== t.data.search(/\S/)) return !0
                    } else if (this.schema.isObject(t)) return !0;
                return !1
            }
            createPositionFromPath(t, e, n) {
                return new $s(t, e, n)
            }
            createPositionAt(t, e) {
                return $s._createAt(t, e)
            }
            createPositionAfter(t) {
                return $s._createAfter(t)
            }
            createPositionBefore(t) {
                return $s._createBefore(t)
            }
            createRange(t, e) {
                return new Gs(t, e)
            }
            createRangeIn(t) {
                return Gs._createIn(t)
            }
            createRangeOn(t) {
                return Gs._createOn(t)
            }
            createSelection(t, e, n) {
                return new ta(t, e, n)
            }
            createBatch() {
                return new Ga
            }
            destroy() {
                this.document.destroy(), this.stopListening()
            }
            _runPendingChanges() {
                const t = [];
                for (this.fire("_beforeChanges"); this._pendingChanges.length;) {
                    const e = this._pendingChanges[0].batch;
                    this._currentWriter = new pc(this, e);
                    const n = this._pendingChanges[0].callback(this._currentWriter);
                    t.push(n), this.fire("_change", this._currentWriter), this.document._handleChangeBlock(this._currentWriter), this._pendingChanges.shift(), this._currentWriter = null
                }
                return this.fire("_afterChanges"), t
            }
        }
        ci($c, Fi);
        class Gc {
            constructor() {
                this._listener = Object.create(lr)
            }
            listenTo(t) {
                this._listener.listenTo(t, "keydown", (t, e) => {
                    this._listener.fire("_keydown:" + wo(e), e)
                })
            }
            set(t, e, n = {}) {
                const i = _o(t),
                    o = n.priority;
                this._listener.listenTo(this._listener, "_keydown:" + i, (t, n) => {
                    e(n, () => {
                        n.preventDefault(), n.stopPropagation(), t.stop()
                    }), t.return = !0
                }, {
                    priority: o
                })
            }
            press(t) {
                return !!this._listener.fire("_keydown:" + wo(t), t)
            }
            destroy() {
                this._listener.stopListening()
            }
        }
        class Qc extends Gc {
            constructor(t) {
                super(), this.editor = t
            }
            set(t, e, n = {}) {
                if ("string" == typeof e) {
                    const t = e;
                    e = ((e, n) => {
                        this.editor.execute(t), n()
                    })
                }
                super.set(t, e, n)
            }
        }
        n(42);
        class Jc {
            constructor(t) {
                const e = this.constructor.builtinPlugins;
                this.config = new Yn(t, this.constructor.defaultConfig), this.config.define("plugins", e), this.plugins = new Ca(this, e), this.commands = new Ta, this.locale = new Ma(this.config.get("language")), this.t = this.locale.t, this.set("state", "initializing"), this.once("ready", () => this.state = "ready", {
                    priority: "high"
                }), this.once("destroy", () => this.state = "destroyed", {
                    priority: "high"
                }), this.set("isReadOnly", !1), this.model = new $c, this.data = new qa(this.model), this.editing = new Aa(this.model), this.editing.view.document.bind("isReadOnly").to(this), this.conversion = new Wa([this.editing.downcastDispatcher, this.data.downcastDispatcher], this.data.upcastDispatcher), this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher), this.conversion.addAlias("editingDowncast", this.editing.downcastDispatcher), this.keystrokes = new Qc(this), this.keystrokes.listenTo(this.editing.view.document)
            }
            initPlugins() {
                const t = this.config,
                    e = t.get("plugins") || [],
                    n = t.get("removePlugins") || [],
                    i = t.get("extraPlugins") || [];
                return this.plugins.init(e.concat(i), n)
            }
            destroy() {
                let t = Promise.resolve();
                return "initializing" == this.state && (t = new Promise(t => this.once("ready", t))), t.then(() => {
                    this.fire("destroy"), this.stopListening(), this.commands.destroy()
                }).then(() => this.plugins.destroy()).then(() => {
                    this.model.destroy(), this.data.destroy(), this.editing.destroy(), this.keystrokes.destroy()
                })
            }
            execute(...t) {
                this.commands.execute(...t)
            }
        }
        ci(Jc, Fi);
        var Kc = {
            setData(t) {
                this.data.set(t)
            }, getData(t) {
                return this.data.get(t)
            }
        };
        var Zc = {
            updateSourceElement() {
                if (!this.sourceElement) throw new Gn.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.");
                ! function(t, e) {
                    t instanceof HTMLTextAreaElement && (t.value = e), t.innerHTML = e
                }(this.sourceElement, this.data.get())
            }
        };
        class Xc {
            getHtml(t) {
                const e = document.implementation.createHTMLDocument("").createElement("div");
                return e.appendChild(t), e.innerHTML
            }
        }
        class tl {
            constructor() {
                this._domParser = new DOMParser, this._domConverter = new rr({
                    blockFiller: jo
                }), this._htmlWriter = new Xc
            }
            toData(t) {
                const e = this._domConverter.viewToDom(t, document);
                return this._htmlWriter.getHtml(e)
            }
            toView(t) {
                const e = this._toDom(t);
                return this._domConverter.domToView(e)
            }
            _toDom(t) {
                const e = this._domParser.parseFromString(t, "text/html"),
                    n = e.createDocumentFragment(),
                    i = e.body.childNodes;
                for (; i.length > 0;) n.appendChild(i[0]);
                return n
            }
        }
        class el {
            constructor(t) {
                this.editor = t, this._components = new Map
            } * names() {
                for (const t of this._components.values()) yield t.originalName
            }
            add(t, e) {
                if (this.has(t)) throw new Gn.b("componentfactory-item-exists: The item already exists in the component factory.", {
                    name: t
                });
                this._components.set(nl(t), {
                    callback: e,
                    originalName: t
                })
            }
            create(t) {
                if (!this.has(t)) throw new Gn.b("componentfactory-item-missing: The required component is not registered in the factory.", {
                    name: t
                });
                return this._components.get(nl(t)).callback(this.editor.locale)
            }
            has(t) {
                return this._components.has(nl(t))
            }
        }

        function nl(t) {
            return String(t).toLowerCase()
        }
        class il {
            constructor() {
                this.set("isFocused", !1), this.focusedElement = null, this._elements = new Set, this._nextEventLoopTimeout = null
            }
            add(t) {
                if (this._elements.has(t)) throw new Gn.b("focusTracker-add-element-already-exist");
                this.listenTo(t, "focus", () => this._focus(t), {
                    useCapture: !0
                }), this.listenTo(t, "blur", () => this._blur(), {
                    useCapture: !0
                }), this._elements.add(t)
            }
            remove(t) {
                t === this.focusedElement && this._blur(t), this._elements.has(t) && (this.stopListening(t), this._elements.delete(t))
            }
            destroy() {
                this.stopListening()
            }
            _focus(t) {
                clearTimeout(this._nextEventLoopTimeout), this.focusedElement = t, this.isFocused = !0
            }
            _blur() {
                clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
                    this.focusedElement = null, this.isFocused = !1
                }, 0)
            }
        }
        ci(il, lr), ci(il, Fi);
        class ol {
            constructor(t) {
                this.editor = t, this.componentFactory = new el(t), this.focusTracker = new il, this._editableElements = new Map, this.listenTo(t.editing.view.document, "layoutChanged", () => this.update())
            }
            get element() {
                return null
            }
            update() {
                this.fire("update")
            }
            destroy() {
                this.stopListening(), this.focusTracker.destroy(), this._editableElements = new Map
            }
            getEditableElement(t = "main") {
                return this._editableElements.get(t)
            }
            getEditableElementsNames() {
                return this._editableElements.keys()
            }
        }
        ci(ol, ei);
        n(43);
        const rl = new WeakMap;

        function sl(t) {
            const {
                view: e,
                element: n,
                text: i,
                isDirectHost: o = !0
            } = t, r = e.document;
            rl.has(r) || (rl.set(r, new Map), r.registerPostFixer(t => cl(r, t))), rl.get(r).set(n, {
                text: i,
                isDirectHost: o
            }), e.change(t => cl(r, t))
        }

        function al(t, e) {
            return !!e.hasClass("ck-placeholder") && (t.removeClass("ck-placeholder", e), !0)
        }

        function cl(t, e) {
            const n = rl.get(t);
            let i = !1;
            for (const [t, o] of n) ll(e, t, o) && (i = !0);
            return i
        }

        function ll(t, e, n) {
            const {
                text: i,
                isDirectHost: o
            } = n, r = o ? e : function(t) {
                if (1 === t.childCount) {
                    const e = t.getChild(0);
                    if (e.is("element") && !e.is("uiElement")) return e
                }
                return null
            }(e);
            let s = !1;
            return !!r && (n.hostElement = r, r.getAttribute("data-placeholder") !== i && (t.setAttribute("data-placeholder", i, r), s = !0), ! function(t) {
                const e = t.document;
                if (!e) return !1;
                const n = !Array.from(t.getChildren()).some(t => !t.is("uiElement"));
                if (!e.isFocused && n) return !0;
                const i = e.selection.anchor;
                return !(!n || !i || i.parent === t)
            }(r) ? al(t, r) && (s = !0) : function(t, e) {
                return !e.hasClass("ck-placeholder") && (t.addClass("ck-placeholder", e), !0)
            }(t, r) && (s = !0), s)
        }
        class dl {
            constructor() {
                this._replacedElements = []
            }
            replace(t, e) {
                this._replacedElements.push({
                    element: t,
                    newElement: e
                }), t.style.display = "none", e && t.parentNode.insertBefore(e, t.nextSibling == undefined ? null : t.nextSibling)
            }
            restore() {
                this._replacedElements.forEach(({
                    element: t,
                    newElement: e
                }) => {
                    t.style.display = "", e && e.remove()
                }), this._replacedElements = []
            }
        }
        class ul extends ol {
            constructor(t, e) {
                super(t), this.view = e, this._toolbarConfig = function(t) {
                    return Array.isArray(t) ? {
                        items: t
                    } : t ? Object.assign({
                        items: []
                    }, t) : {
                        items: []
                    }
                }(t.config.get("toolbar")), this._elementReplacer = new dl
            }
            get element() {
                return this.view.element
            }
            init(t) {
                const e = this.editor,
                    n = this.view,
                    i = e.editing.view,
                    o = n.editable,
                    r = i.document.getRoot();
                o.name = r.rootName, n.render();
                const s = o.element;
                this._editableElements.set(o.name, s), this.focusTracker.add(s), n.editable.bind("isFocused").to(this.focusTracker), i.attachDomRoot(s), t && this._elementReplacer.replace(t, this.element), this._initPlaceholder(), this._initToolbar(), this.fire("ready")
            }
            destroy() {
                const t = this.view,
                    e = this.editor.editing.view;
                this._elementReplacer.restore(), e.detachDomRoot(t.editable.name), t.destroy(), super.destroy()
            }
            _initToolbar() {
                const t = this.editor,
                    e = this.view,
                    n = t.editing.view;
                e.stickyPanel.bind("isActive").to(this.focusTracker, "isFocused"), e.stickyPanel.limiterElement = e.element, this._toolbarConfig.viewportTopOffset && (e.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset), e.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory),
                    function({
                        origin: t,
                        originKeystrokeHandler: e,
                        originFocusTracker: n,
                        toolbar: i,
                        beforeFocus: o,
                        afterBlur: r
                    }) {
                        n.add(i.element), e.set("Alt+F10", (t, e) => {
                            n.isFocused && !i.focusTracker.isFocused && (o && o(), i.focus(), e())
                        }), i.keystrokes.set("Esc", (e, n) => {
                            i.focusTracker.isFocused && (t.focus(), r && r(), n())
                        })
                    }({
                        origin: n,
                        originFocusTracker: this.focusTracker,
                        originKeystrokeHandler: t.keystrokes,
                        toolbar: e.toolbar
                    })
            }
            _initPlaceholder() {
                const t = this.editor,
                    e = t.editing.view,
                    n = e.document.getRoot(),
                    i = t.sourceElement,
                    o = t.config.get("placeholder") || i && "textarea" === i.tagName.toLowerCase() && i.getAttribute("placeholder");
                o && sl({
                    view: e,
                    element: n,
                    text: o,
                    isDirectHost: !1
                })
            }
        }
        class hl extends oo {
            constructor(t) {
                super({
                    idProperty: "viewUid"
                }), this.on("add", (t, e, n) => {
                    e.isRendered || e.render(), e.element && this._parentElement && this._parentElement.insertBefore(e.element, this._parentElement.children[n] == undefined ? null : this._parentElement.children[n])
                }), this.on("remove", (t, e) => {
                    e.element && this._parentElement && e.element.remove()
                }), this.locale = t, this._parentElement = null
            }
            destroy() {
                this.map(t => t.destroy())
            }
            setParent(t) {
                this._parentElement = t
            }
            delegate(...t) {
                if (!t.length || ! function(t) {
                        return t.every(t => "string" == typeof t)
                    }(t)) throw new Gn.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.");
                return {
                    to: e => {
                        for (const n of this)
                            for (const i of t) n.delegate(i).to(e);
                        this.on("add", (n, i) => {
                            for (const n of t) i.delegate(n).to(e)
                        }), this.on("remove", (n, i) => {
                            for (const n of t) i.stopDelegating(n, e)
                        })
                    }
                }
            }
        }
        ci(oo, Fi);
        const fl = "http://www.w3.org/1999/xhtml";
        class ml {
            constructor(t) {
                Object.assign(this, xl(yl(t))), this._isRendered = !1, this._revertData = null
            }
            render() {
                const t = this._renderNode({
                    intoFragment: !0
                });
                return this._isRendered = !0, t
            }
            apply(t) {
                return this._revertData = {
                    children: [],
                    bindings: [],
                    attributes: {}
                }, this._renderNode({
                    node: t,
                    isApplying: !0,
                    revertData: this._revertData
                }), t
            }
            revert(t) {
                if (!this._revertData) throw new Gn.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.");
                this._revertTemplateFromNode(t, this._revertData)
            } * getViews() {
                yield * function* t(e) {
                    if (e.children)
                        for (const n of e.children) Ml(n) ? yield n : El(n) && (yield * t(n))
                }(this)
            }
            static bind(t, e) {
                return {
                    to: (n, i) => new gl({
                        eventNameOrFunction: n,
                        attribute: n,
                        observable: t,
                        emitter: e,
                        callback: i
                    }),
                    if: (n, i, o) => new bl({
                        observable: t,
                        emitter: e,
                        attribute: n,
                        valueIfTrue: i,
                        callback: o
                    })
                }
            }
            static extend(t, e) {
                t._isRendered && bs.a.warn("template-extend-render: Attempting to extend a template which has already been rendered."),
                    function t(e, n) {
                        n.attributes && (e.attributes || (e.attributes = {}), Tl(e.attributes, n.attributes));
                        n.eventListeners && (e.eventListeners || (e.eventListeners = {}), Tl(e.eventListeners, n.eventListeners));
                        n.text && e.text.push(...n.text);
                        if (n.children && n.children.length) {
                            if (e.children.length != n.children.length) throw new Gn.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.");
                            let i = 0;
                            for (const o of n.children) t(e.children[i++], o)
                        }
                    }(t, xl(yl(e)))
            }
            _renderNode(t) {
                let e;
                if (e = t.node ? this.tag && this.text : this.tag ? this.text : !this.text) throw new Gn.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');
                return this.text ? this._renderText(t) : this._renderElement(t)
            }
            _renderElement(t) {
                let e = t.node;
                return e || (e = t.node = document.createElementNS(this.ns || fl, this.tag)), this._renderAttributes(t), this._renderElementChildren(t), this._setUpListeners(t), e
            }
            _renderText(t) {
                let e = t.node;
                return e ? t.revertData.text = e.textContent : e = t.node = document.createTextNode(""), wl(this.text) ? this._bindToObservable({
                    schema: this.text,
                    updater: function(t) {
                        return {
                            set(e) {
                                t.textContent = e
                            }, remove() {
                                t.textContent = ""
                            }
                        }
                    }(e),
                    data: t
                }) : e.textContent = this.text.join(""), e
            }
            _renderAttributes(t) {
                let e, n, i, o;
                if (!this.attributes) return;
                const r = t.node,
                    s = t.revertData;
                for (e in this.attributes)
                    if (i = r.getAttribute(e), n = this.attributes[e], s && (s.attributes[e] = i), o = z(n[0]) && n[0].ns ? n[0].ns : null, wl(n)) {
                        const a = o ? n[0].value : n;
                        s && Il(e) && a.unshift(i), this._bindToObservable({
                            schema: a,
                            updater: kl(r, e, o),
                            data: t
                        })
                    } else "style" == e && "string" != typeof n[0] ? this._renderStyleAttribute(n[0], t) : (s && i && Il(e) && n.unshift(i), Pl(n = n.map(t => t && t.value || t).reduce((t, e) => t.concat(e), []).reduce(Cl, "")) || r.setAttributeNS(o, e, n))
            }
            _renderStyleAttribute(t, e) {
                const n = e.node;
                for (const i in t) {
                    const o = t[i];
                    wl(o) ? this._bindToObservable({
                        schema: [o],
                        updater: vl(n, i),
                        data: e
                    }) : n.style[i] = o
                }
            }
            _renderElementChildren(t) {
                const e = t.node,
                    n = t.intoFragment ? document.createDocumentFragment() : e,
                    i = t.isApplying;
                let o = 0;
                for (const r of this.children)
                    if (Sl(r)) {
                        if (!i) {
                            r.setParent(e);
                            for (const t of r) n.appendChild(t.element)
                        }
                    } else if (Ml(r)) i || (r.isRendered || r.render(), n.appendChild(r.element));
                else if (Zo(r)) n.appendChild(r);
                else if (i) {
                    const e = {
                        children: [],
                        bindings: [],
                        attributes: {}
                    };
                    t.revertData.children.push(e), r._renderNode({
                        node: n.childNodes[o++],
                        isApplying: !0,
                        revertData: e
                    })
                } else n.appendChild(r.render());
                t.intoFragment && e.appendChild(n)
            }
            _setUpListeners(t) {
                if (this.eventListeners)
                    for (const e in this.eventListeners) {
                        const n = this.eventListeners[e].map(n => {
                            const [i, o] = e.split("@");
                            return n.activateDomEventListener(i, o, t)
                        });
                        t.revertData && t.revertData.bindings.push(n)
                    }
            }
            _bindToObservable({
                schema: t,
                updater: e,
                data: n
            }) {
                const i = n.revertData;
                _l(t, e, n);
                const o = t.filter(t => !Pl(t)).filter(t => t.observable).map(i => i.activateAttributeListener(t, e, n));
                i && i.bindings.push(o)
            }
            _revertTemplateFromNode(t, e) {
                for (const t of e.bindings)
                    for (const e of t) e();
                if (e.text) t.textContent = e.text;
                else {
                    for (const n in e.attributes) {
                        const i = e.attributes[n];
                        null === i ? t.removeAttribute(n) : t.setAttribute(n, i)
                    }
                    for (let n = 0; n < e.children.length; ++n) this._revertTemplateFromNode(t.childNodes[n], e.children[n])
                }
            }
        }
        ci(ml, ei);
        class pl {
            constructor(t) {
                Object.assign(this, t)
            }
            getValue(t) {
                const e = this.observable[this.attribute];
                return this.callback ? this.callback(e, t) : e
            }
            activateAttributeListener(t, e, n) {
                const i = () => _l(t, e, n);
                return this.emitter.listenTo(this.observable, "change:" + this.attribute, i), () => {
                    this.emitter.stopListening(this.observable, "change:" + this.attribute, i)
                }
            }
        }
        class gl extends pl {
            activateDomEventListener(t, e, n) {
                const i = (t, n) => {
                    e && !n.target.matches(e) || ("function" == typeof this.eventNameOrFunction ? this.eventNameOrFunction(n) : this.observable.fire(this.eventNameOrFunction, n))
                };
                return this.emitter.listenTo(n.node, t, i), () => {
                    this.emitter.stopListening(n.node, t, i)
                }
            }
        }
        class bl extends pl {
            getValue(t) {
                return !Pl(super.getValue(t)) && (this.valueIfTrue || !0)
            }
        }

        function wl(t) {
            return !!t && (t.value && (t = t.value), Array.isArray(t) ? t.some(wl) : t instanceof pl)
        }

        function _l(t, e, {
            node: n
        }) {
            let i = function(t, e) {
                return t.map(t => t instanceof pl ? t.getValue(e) : t)
            }(t, n);
            Pl(i = 1 == t.length && t[0] instanceof bl ? i[0] : i.reduce(Cl, "")) ? e.remove() : e.set(i)
        }

        function kl(t, e, n) {
            return {
                set(i) {
                    t.setAttributeNS(n, e, i)
                }, remove() {
                    t.removeAttributeNS(n, e)
                }
            }
        }

        function vl(t, e) {
            return {
                set(n) {
                    t.style[e] = n
                }, remove() {
                    t.style[e] = null
                }
            }
        }

        function yl(t) {
            return qn(t, t => {
                if (t && (t instanceof pl || El(t) || Ml(t) || Sl(t))) return t
            })
        }

        function xl(t) {
            if ("string" == typeof t ? t = function(t) {
                    return {
                        text: [t]
                    }
                }(t) : t.text && function(t) {
                    Array.isArray(t.text) || (t.text = [t.text])
                }(t), t.on && (t.eventListeners = function(t) {
                    for (const e in t) Al(t, e);
                    return t
                }(t.on), delete t.on), !t.text) {
                t.attributes && function(t) {
                    for (const e in t) t[e].value && (t[e].value = [].concat(t[e].value)), Al(t, e)
                }(t.attributes);
                const e = [];
                if (t.children)
                    if (Sl(t.children)) e.push(t.children);
                    else
                        for (const n of t.children) El(n) || Ml(n) || Zo(n) ? e.push(n) : e.push(new ml(n));
                t.children = e
            }
            return t
        }

        function Al(t, e) {
            Array.isArray(t[e]) || (t[e] = [t[e]])
        }

        function Cl(t, e) {
            return Pl(e) ? t : Pl(t) ? e : `${t} ${e}`
        }

        function Tl(t, e) {
            for (const n in e) t[n] ? t[n].push(...e[n]) : t[n] = e[n]
        }

        function Pl(t) {
            return !t && 0 !== t
        }

        function Ml(t) {
            return t instanceof Nl
        }

        function El(t) {
            return t instanceof ml
        }

        function Sl(t) {
            return t instanceof hl
        }

        function Il(t) {
            return "class" == t || "style" == t
        }
        n(46);
        class Nl {
            constructor(t) {
                this.element = null, this.isRendered = !1, this.locale = t, this.t = t && t.t, this._viewCollections = new oo, this._unboundChildren = this.createCollection(), this._viewCollections.on("add", (e, n) => {
                    n.locale = t
                }), this.decorate("render")
            }
            get bindTemplate() {
                return this._bindTemplate ? this._bindTemplate : this._bindTemplate = ml.bind(this, this)
            }
            createCollection() {
                const t = new hl;
                return this._viewCollections.add(t), t
            }
            registerChild(t) {
                gi(t) || (t = [t]);
                for (const e of t) this._unboundChildren.add(e)
            }
            deregisterChild(t) {
                gi(t) || (t = [t]);
                for (const e of t) this._unboundChildren.remove(e)
            }
            setTemplate(t) {
                this.template = new ml(t)
            }
            extendTemplate(t) {
                ml.extend(this.template, t)
            }
            render() {
                if (this.isRendered) throw new Gn.b("ui-view-render-already-rendered: This View has already been rendered.");
                this.template && (this.element = this.template.render(), this.registerChild(this.template.getViews())), this.isRendered = !0
            }
            destroy() {
                this.stopListening(), this._viewCollections.map(t => t.destroy()), this.template && this.template._revertData && this.template.revert(this.element)
            }
        }
        ci(Nl, lr), ci(Nl, Fi);
        n(48);
        class Ol extends Nl {
            constructor(t) {
                super(t), this.body = this.createCollection()
            }
            render() {
                super.render(), this._renderBodyCollection()
            }
            destroy() {
                return this._bodyCollectionContainer.remove(), super.destroy()
            }
            _renderBodyCollection() {
                const t = this._bodyCollectionContainer = new ml({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset_all", "ck-body", "ck-rounded-corners"]
                    },
                    children: this.body
                }).render();
                document.body.appendChild(t)
            }
        }
        n(50);
        class Rl extends Nl {
            constructor(t) {
                super(t), this.set("text"), this.set("for");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "label",
                    attributes: {
                        class: ["ck", "ck-label"],
                        for: e.to("for")
                    },
                    children: [{
                        text: e.to("text")
                    }]
                })
            }
        }
        class Dl extends Ol {
            constructor(t) {
                super(t);
                const e = Kn();
                this.top = this.createCollection(), this.main = this.createCollection(), this._voiceLabelView = this._createVoiceLabel(e), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset", "ck-editor", "ck-rounded-corners"],
                        role: "application",
                        dir: "ltr",
                        lang: t.language,
                        "aria-labelledby": `ck-editor__aria-label_${e}`
                    },
                    children: [this._voiceLabelView, {
                        tag: "div",
                        attributes: {
                            class: ["ck", "ck-editor__top", "ck-reset_all"],
                            role: "presentation"
                        },
                        children: this.top
                    }, {
                        tag: "div",
                        attributes: {
                            class: ["ck", "ck-editor__main"],
                            role: "presentation"
                        },
                        children: this.main
                    }]
                })
            }
            _createVoiceLabel(t) {
                const e = this.t,
                    n = new Rl;
                return n.text = e("bc"), n.extendTemplate({
                    attributes: {
                        id: `ck-editor__aria-label_${t}`,
                        class: "ck-voice-label"
                    }
                }), n
            }
        }
        class Ll extends Nl {
            constructor(t, e, n) {
                super(t), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-content", "ck-editor__editable", "ck-rounded-corners"]
                    }
                }), this.name = null, this.set("isFocused", !1), this._editableElement = n, this._hasExternalElement = !!this._editableElement, this._editingView = e
            }
            render() {
                super.render(), this._hasExternalElement ? this.template.apply(this.element = this._editableElement) : this._editableElement = this.element, this.on("change:isFocused", () => this._updateIsFocusedClasses()), this._updateIsFocusedClasses()
            }
            destroy() {
                this._hasExternalElement && this.template.revert(this._editableElement), super.destroy()
            }
            _updateIsFocusedClasses() {
                const t = this._editingView;

                function e(e) {
                    t.change(n => {
                        const i = t.document.getRoot(e.name);
                        n.addClass(e.isFocused ? "ck-focused" : "ck-blurred", i), n.removeClass(e.isFocused ? "ck-blurred" : "ck-focused", i)
                    })
                }
                t.isRenderingInProgress ? t.once("change:isRenderingInProgress", () => e(this)) : e(this)
            }
        }
        class jl extends Ll {
            constructor(t, e, n) {
                super(t, e, n), this.extendTemplate({
                    attributes: {
                        role: "textbox",
                        class: "ck-editor__editable_inline"
                    }
                })
            }
            render() {
                super.render();
                const t = this._editingView,
                    e = this.t;
                t.change(n => {
                    const i = t.document.getRoot(this.name);
                    n.setAttribute("aria-label", e("bd", [this.name]), i)
                })
            }
        }

        function Vl(t) {
            return e => e + t
        }
        n(52);
        const Bl = Vl("px");
        class zl extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isActive", !1), this.set("isSticky", !1), this.set("limiterElement", null), this.set("limiterBottomOffset", 50), this.set("viewportTopOffset", 0), this.set("_marginLeft", null), this.set("_isStickyToTheLimiter", !1), this.set("_hasViewportTopOffset", !1), this.content = this.createCollection(), this._contentPanelPlaceholder = new ml({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__placeholder"],
                        style: {
                            display: e.to("isSticky", t => t ? "block" : "none"),
                            height: e.to("isSticky", t => t ? Bl(this._panelRect.height) : null)
                        }
                    }
                }).render(), this._contentPanel = new ml({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__content", e.if("isSticky", "ck-sticky-panel__content_sticky"), e.if("_isStickyToTheLimiter", "ck-sticky-panel__content_sticky_bottom-limit")],
                        style: {
                            width: e.to("isSticky", t => t ? Bl(this._contentPanelPlaceholder.getBoundingClientRect().width) : null),
                            top: e.to("_hasViewportTopOffset", t => t ? Bl(this.viewportTopOffset) : null),
                            bottom: e.to("_isStickyToTheLimiter", t => t ? Bl(this.limiterBottomOffset) : null),
                            marginLeft: e.to("_marginLeft")
                        }
                    },
                    children: this.content
                }).render(), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel"]
                    },
                    children: [this._contentPanelPlaceholder, this._contentPanel]
                })
            }
            render() {
                super.render(), this._checkIfShouldBeSticky(), this.listenTo(nr.window, "scroll", () => {
                    this._checkIfShouldBeSticky()
                }), this.listenTo(this, "change:isActive", () => {
                    this._checkIfShouldBeSticky()
                })
            }
            _checkIfShouldBeSticky() {
                const t = this._panelRect = this._contentPanel.getBoundingClientRect();
                let e;
                this.limiterElement ? (e = this._limiterRect = this.limiterElement.getBoundingClientRect(), this.isSticky = this.isActive && e.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < e.height) : this.isSticky = !1, this.isSticky ? (this._isStickyToTheLimiter = e.bottom < t.height + this.limiterBottomOffset + this.viewportTopOffset, this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset, this._marginLeft = this._isStickyToTheLimiter ? null : Bl(-nr.window.scrollX)) : (this._isStickyToTheLimiter = !1, this._hasViewportTopOffset = !1, this._marginLeft = null)
            }
        }
        class Fl {
            constructor(t) {
                if (Object.assign(this, t), t.actions && t.keystrokeHandler)
                    for (const e in t.actions) {
                        let n = t.actions[e];
                        "string" == typeof n && (n = [n]);
                        for (const i of n) t.keystrokeHandler.set(i, (t, n) => {
                            this[e](), n()
                        })
                    }
            }
            get first() {
                return this.focusables.find(Ul) || null
            }
            get last() {
                return this.focusables.filter(Ul).slice(-1)[0] || null
            }
            get next() {
                return this._getFocusableItem(1)
            }
            get previous() {
                return this._getFocusableItem(-1)
            }
            get current() {
                let t = null;
                return null === this.focusTracker.focusedElement ? null : (this.focusables.find((e, n) => {
                    const i = e.element === this.focusTracker.focusedElement;
                    return i && (t = n), i
                }), t)
            }
            focusFirst() {
                this._focus(this.first)
            }
            focusLast() {
                this._focus(this.last)
            }
            focusNext() {
                this._focus(this.next)
            }
            focusPrevious() {
                this._focus(this.previous)
            }
            _focus(t) {
                t && t.focus()
            }
            _getFocusableItem(t) {
                const e = this.current,
                    n = this.focusables.length;
                if (!n) return null;
                if (null === e) return this[1 === t ? "first" : "last"];
                let i = (e + n + t) % n;
                do {
                    const e = this.focusables.get(i);
                    if (Ul(e)) return e;
                    i = (i + n + t) % n
                } while (i !== e);
                return null
            }
        }

        function Ul(t) {
            return !(!t.focus || "none" == nr.window.getComputedStyle(t.element).display)
        }
        class Hl extends Nl {
            constructor(t) {
                super(t), this.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-toolbar__separator"]
                    }
                })
            }
        }
        n(54);
        class ql extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.items = this.createCollection(), this.focusTracker = new il, this.keystrokes = new Gc, this.set("isVertical", !1), this.set("class"), this._focusCycler = new Fl({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: ["arrowleft", "arrowup"],
                        focusNext: ["arrowright", "arrowdown"]
                    }
                }), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-toolbar", e.if("isVertical", "ck-toolbar_vertical"), e.to("class")]
                    },
                    children: this.items,
                    on: {
                        mousedown: function(t) {
                            return t.bindTemplate.to(e => {
                                e.target === t.element && e.preventDefault()
                            })
                        }(this)
                    }
                })
            }
            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element)
            }
            focus() {
                this._focusCycler.focusFirst()
            }
            focusLast() {
                this._focusCycler.focusLast()
            }
            fillFromConfig(t, e) {
                t.map(t => {
                    "|" == t ? this.items.add(new Hl) : e.has(t) ? this.items.add(e.create(t)) : bs.a.warn("toolbarview-item-unavailable: The requested toolbar item is unavailable.", {
                        name: t
                    })
                })
            }
        }
        n(56);
        class Wl extends Dl {
            constructor(t, e) {
                super(t), this.stickyPanel = new zl(t), this.toolbar = new ql(t), this.editable = new jl(t, e)
            }
            render() {
                super.render(), this.stickyPanel.content.add(this.toolbar), this.top.add(this.stickyPanel), this.main.add(this.editable)
            }
        }
        class Yl extends Jc {
            constructor(t, e) {
                super(e), Wn(t) && (this.sourceElement = t), this.data.processor = new tl, this.model.document.createRoot(), this.ui = new ul(this, new Wl(this.locale, this.editing.view)),
                    function(t) {
                        if (!W(t.updateSourceElement)) throw new Gn.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.");
                        const e = t.sourceElement;
                        if (e && "textarea" === e.tagName.toLowerCase() && e.form) {
                            let n;
                            const i = e.form,
                                o = () => t.updateSourceElement();
                            W(i.submit) && (n = i.submit, i.submit = (() => {
                                o(), n.apply(i)
                            })), i.addEventListener("submit", o), t.on("destroy", () => {
                                i.removeEventListener("submit", o), n && (i.submit = n)
                            })
                        }
                    }(this)
            }
            destroy() {
                return this.sourceElement && this.updateSourceElement(), this.ui.destroy(), super.destroy()
            }
            static create(t, e) {
                return new Promise(n => {
                    const i = new this(t, e);
                    n(i.initPlugins().then(() => i.ui.init(Wn(t) ? t : null)).then(() => {
                        const e = Wn(t) ? function(t) {
                            return t instanceof HTMLTextAreaElement ? t.value : t.innerHTML
                        }(t) : t;
                        return i.data.init(e)
                    }).then(() => i.fire("ready")).then(() => i))
                })
            }
        }
        ci(Yl, Kc), ci(Yl, Zc);
        class $l {
            constructor(t) {
                this.editor = t
            }
            destroy() {
                this.stopListening()
            }
        }
        ci($l, Fi);
        class Gl {
            constructor(t) {
                this.files = function(t) {
                    const e = t.files ? Array.from(t.files) : [],
                        n = t.items ? Array.from(t.items) : [];
                    if (e.length) return e;
                    return n.filter(t => "file" === t.kind).map(t => t.getAsFile())
                }(t), this._native = t
            }
            get types() {
                return this._native.types
            }
            getData(t) {
                return this._native.getData(t)
            }
            setData(t, e) {
                this._native.setData(t, e)
            }
        }
        class Ql extends ts {
            constructor(t) {
                super(t);
                const e = this.document;

                function n(t, n) {
                    n.preventDefault();
                    const i = n.dropRange ? [n.dropRange] : Array.from(e.selection.getRanges());
                    e.fire("clipboardInput", {
                        dataTransfer: n.dataTransfer,
                        targetRanges: i
                    })
                }
                this.domEventType = ["paste", "copy", "cut", "drop", "dragover"], this.listenTo(e, "paste", n, {
                    priority: "low"
                }), this.listenTo(e, "drop", n, {
                    priority: "low"
                })
            }
            onDomEvent(t) {
                const e = {
                    dataTransfer: new Gl(t.clipboardData ? t.clipboardData : t.dataTransfer)
                };
                "drop" == t.type && (e.dropRange = function(t, e) {
                    const n = e.target.ownerDocument,
                        i = e.clientX,
                        o = e.clientY;
                    let r;
                    n.caretRangeFromPoint && n.caretRangeFromPoint(i, o) ? r = n.caretRangeFromPoint(i, o) : e.rangeParent && ((r = n.createRange()).setStart(e.rangeParent, e.rangeOffset), r.collapse(!0));
                    return r ? t.domConverter.domRangeToView(r) : t.document.selection.getFirstRange()
                }(this.view, t)), this.fire(t.type, t, e)
            }
        }
        const Jl = ["figcaption", "li"];
        class Kl extends $l {
            static get pluginName() {
                return "Clipboard"
            }
            init() {
                const t = this.editor,
                    e = t.model.document,
                    n = t.editing.view,
                    i = n.document;

                function o(n, o) {
                    const r = o.dataTransfer;
                    o.preventDefault();
                    const s = t.data.toView(t.model.getSelectedContent(e.selection));
                    i.fire("clipboardOutput", {
                        dataTransfer: r,
                        content: s,
                        method: n.name
                    })
                }
                this._htmlDataProcessor = new tl, n.addObserver(Ql), this.listenTo(i, "clipboardInput", e => {
                    t.isReadOnly && e.stop()
                }, {
                    priority: "highest"
                }), this.listenTo(i, "clipboardInput", (t, e) => {
                    const i = e.dataTransfer;
                    let o = "";
                    i.getData("text/html") ? o = function(t) {
                        return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 == e.length ? " " : e)
                    }(i.getData("text/html")) : i.getData("text/plain") && (o = function(t) {
                        return (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>").replace(/^\s/, "&nbsp;").replace(/\s$/, "&nbsp;").replace(/\s\s/g, " &nbsp;")).indexOf("</p><p>") > -1 && (t = `<p>${t}</p>`), t
                    }(i.getData("text/plain"))), o = this._htmlDataProcessor.toView(o), this.fire("inputTransformation", {
                        content: o,
                        dataTransfer: i
                    }), n.scrollToTheSelection()
                }, {
                    priority: "low"
                }), this.listenTo(this, "inputTransformation", (t, e) => {
                    if (!e.content.isEmpty) {
                        const t = this.editor.data,
                            n = this.editor.model,
                            i = t.toModel(e.content, "$clipboardHolder");
                        if (0 == i.childCount) return;
                        n.insertContent(i)
                    }
                }, {
                    priority: "low"
                }), this.listenTo(i, "copy", o, {
                    priority: "low"
                }), this.listenTo(i, "cut", (e, n) => {
                    t.isReadOnly ? n.preventDefault() : o(e, n)
                }, {
                    priority: "low"
                }), this.listenTo(i, "clipboardOutput", (n, i) => {
                    i.content.isEmpty || (i.dataTransfer.setData("text/html", this._htmlDataProcessor.toData(i.content)), i.dataTransfer.setData("text/plain", function t(e) {
                        let n = "";
                        if (e.is("text") || e.is("textProxy")) n = e.data;
                        else if (e.is("img") && e.hasAttribute("alt")) n = e.getAttribute("alt");
                        else {
                            let i = null;
                            for (const o of e.getChildren()) {
                                const e = t(o);
                                i && (i.is("containerElement") || o.is("containerElement")) && (Jl.includes(i.name) || Jl.includes(o.name) ? n += "\n" : n += "\n\n"), n += e, i = o
                            }
                        }
                        return n
                    }(i.content))), "cut" == i.method && t.model.deleteContent(e.selection)
                }, {
                    priority: "low"
                })
            }
        }
        class Zl {
            constructor(t) {
                this.editor = t, this.set("value", void 0), this.set("isEnabled", !1), this.decorate("execute"), this.listenTo(this.editor.model.document, "change", () => {
                    this.refresh()
                }), this.on("execute", t => {
                    this.isEnabled || t.stop()
                }, {
                    priority: "high"
                }), this.listenTo(t, "change:isReadOnly", (t, e, n) => {
                    n ? (this.on("set:isEnabled", Xl, {
                        priority: "highest"
                    }), this.isEnabled = !1) : (this.off("set:isEnabled", Xl), this.refresh())
                })
            }
            refresh() {
                this.isEnabled = !0
            }
            execute() {}
            destroy() {
                this.stopListening()
            }
        }

        function Xl(t) {
            t.return = !1, t.stop()
        }
        ci(Zl, Fi);
        class td extends Zl {
            execute() {
                const t = this.editor.model,
                    e = t.document;
                t.change(n => {
                    ! function(t, e, n, i) {
                        const o = n.isCollapsed,
                            r = n.getFirstRange(),
                            s = r.start.parent,
                            a = r.end.parent;
                        if (i.isLimit(s) || i.isLimit(a)) return void(o || s != a || t.deleteContent(n));
                        if (o) ed(e, r.start);
                        else {
                            const i = !(r.start.isAtStart && r.end.isAtEnd),
                                o = s == a;
                            t.deleteContent(n, {
                                leaveUnmerged: i
                            }), i && (o ? ed(e, n.focus) : e.setSelection(a, 0))
                        }
                    }(this.editor.model, n, e.selection, t.schema), this.fire("afterExecute", {
                        writer: n
                    })
                })
            }
        }

        function ed(t, e) {
            t.split(e), t.setSelection(e.parent.nextSibling, 0)
        }
        class nd extends hr {
            constructor(t) {
                super(t);
                const e = this.document;
                e.on("keydown", (t, n) => {
                    if (this.isEnabled && n.keyCode == bo.enter) {
                        let i;
                        e.once("enter", t => i = t, {
                            priority: "highest"
                        }), e.fire("enter", new Xr(e, n.domEvent, {
                            isSoft: n.shiftKey
                        })), i && i.stop.called && t.stop()
                    }
                })
            }
            observe() {}
        }
        class id extends $l {
            static get pluginName() {
                return "Enter"
            }
            init() {
                const t = this.editor,
                    e = t.editing.view,
                    n = e.document;
                e.addObserver(nd), t.commands.add("enter", new td(t)), this.listenTo(n, "enter", (n, i) => {
                    i.preventDefault(), i.isSoft || (t.execute("enter"), e.scrollToTheSelection())
                }, {
                    priority: "low"
                })
            }
        }
        class od extends Zl {
            execute() {
                const t = this.editor.model,
                    e = t.document;
                t.change(n => {
                    ! function(t, e, n) {
                        const i = n.isCollapsed,
                            o = n.getFirstRange(),
                            r = o.start.parent,
                            s = o.end.parent,
                            a = r == s;
                        if (i) rd(e, o.end);
                        else {
                            const i = !(o.start.isAtStart && o.end.isAtEnd);
                            t.deleteContent(n, {
                                leaveUnmerged: i
                            }), a ? rd(e, n.focus) : i && e.setSelection(s, 0)
                        }
                    }(t, n, e.selection), this.fire("afterExecute", {
                        writer: n
                    })
                })
            }
            refresh() {
                const t = this.editor.model,
                    e = t.document;
                this.isEnabled = function(t, e) {
                    if (e.rangeCount > 1) return !1;
                    const n = e.anchor;
                    if (!n || !t.checkChild(n, "softBreak")) return !1;
                    const i = e.getFirstRange(),
                        o = i.start.parent,
                        r = i.end.parent;
                    if ((sd(o, t) || sd(r, t)) && o !== r) return !1;
                    return !0
                }(t.schema, e.selection)
            }
        }

        function rd(t, e) {
            const n = t.createElement("softBreak");
            t.insert(n, e), t.setSelection(n, "after")
        }

        function sd(t, e) {
            return !t.is("rootElement") && (e.isLimit(t) || sd(t.parent, e))
        }
        class ad extends $l {
            static get pluginName() {
                return "ShiftEnter"
            }
            init() {
                const t = this.editor,
                    e = t.model.schema,
                    n = t.conversion,
                    i = t.editing.view,
                    o = i.document;
                e.register("softBreak", {
                    allowWhere: "$text",
                    isInline: !0
                }), n.for("upcast").elementToElement({
                    model: "softBreak",
                    view: "br"
                }), n.for("downcast").elementToElement({
                    model: "softBreak",
                    view: (t, e) => e.createEmptyElement("br")
                }), i.addObserver(nd), t.commands.add("shiftEnter", new od(t)), this.listenTo(o, "enter", (e, n) => {
                    n.preventDefault(), n.isSoft && (t.execute("shiftEnter"), i.scrollToTheSelection())
                }, {
                    priority: "low"
                })
            }
        }
        class cd {
            constructor(t, e = 20) {
                this.model = t, this.size = 0, this.limit = e, this.isLocked = !1, this._changeCallback = ((t, e) => {
                    "transparent" != e.type && e !== this._batch && this._reset(!0)
                }), this._selectionChangeCallback = (() => {
                    this._reset()
                }), this.model.document.on("change", this._changeCallback), this.model.document.selection.on("change:range", this._selectionChangeCallback), this.model.document.selection.on("change:attribute", this._selectionChangeCallback)
            }
            get batch() {
                return this._batch || (this._batch = this.model.createBatch()), this._batch
            }
            input(t) {
                this.size += t, this.size >= this.limit && this._reset(!0)
            }
            lock() {
                this.isLocked = !0
            }
            unlock() {
                this.isLocked = !1
            }
            destroy() {
                this.model.document.off("change", this._changeCallback), this.model.document.selection.off("change:range", this._selectionChangeCallback), this.model.document.selection.off("change:attribute", this._selectionChangeCallback)
            }
            _reset(t) {
                this.isLocked && !t || (this._batch = null, this.size = 0)
            }
        }
        class ld extends Zl {
            constructor(t, e) {
                super(t), this._buffer = new cd(t.model, e)
            }
            get buffer() {
                return this._buffer
            }
            destroy() {
                super.destroy(), this._buffer.destroy()
            }
            execute(t = {}) {
                const e = this.editor.model,
                    n = e.document,
                    i = t.text || "",
                    o = i.length,
                    r = t.range || n.selection.getFirstRange(),
                    s = t.resultRange;
                e.enqueueChange(this._buffer.batch, t => {
                    const a = r.isCollapsed;
                    this._buffer.lock(), a || e.deleteContent(e.createSelection(r)), i && t.insertText(i, n.selection.getAttributes(), r.start), s ? t.setSelection(s) : a && t.setSelection(r.start.getShiftedBy(o)), this._buffer.unlock(), this._buffer.input(o)
                })
            }
        }

        function dd(t) {
            let e = null;
            const n = t.model,
                i = t.editing.view,
                o = t.commands.get("input");

            function r() {
                const t = o.buffer;
                t.lock(), n.enqueueChange(t.batch, () => {
                    n.deleteContent(n.document.selection)
                }), t.unlock()
            }
            i.document.on("keydown", (t, s) => (function(t) {
                const s = n.document,
                    a = i.document.isComposing,
                    c = e && e.isEqual(s.selection);
                if (e = null, !o.isEnabled) return;
                if (function(t) {
                        if (t.ctrlKey) return !0;
                        return ud.includes(t.keyCode)
                    }(t) || s.selection.isCollapsed) return;
                if (a && 229 === t.keyCode) return;
                if (!a && 229 === t.keyCode && c) return;
                r()
            })(s), {
                priority: "lowest"
            }), i.document.on("compositionstart", function() {
                const t = n.document,
                    e = 1 !== t.selection.rangeCount || t.selection.getFirstRange().isFlat;
                if (t.selection.isCollapsed || e) return;
                r()
            }, {
                priority: "lowest"
            }), i.document.on("compositionend", () => {
                e = n.createSelection(n.document.selection)
            }, {
                priority: "lowest"
            })
        }
        const ud = [wo("arrowUp"), wo("arrowRight"), wo("arrowDown"), wo("arrowLeft"), 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 45, 91, 93, 144, 145, 173, 174, 175, 176, 177, 178, 179, 255];
        for (let t = 112; t <= 135; t++) ud.push(t);

        function hd(t) {
            if (0 == t.length) return !1;
            for (const e of t)
                if ("children" === e.type && !fd(e)) return !0;
            return !1
        }

        function fd(t) {
            if (t.newChildren.length - t.oldChildren.length != 1) return;
            const e = function(t, e) {
                const n = [];
                let i, o = 0;
                return t.forEach(t => {
                    "equal" == t ? (r(), o++) : "insert" == t ? (s("insert") ? i.values.push(e[o]) : (r(), i = {
                        type: "insert",
                        index: o,
                        values: [e[o]]
                    }), o++) : s("delete") ? i.howMany++ : (r(), i = {
                        type: "delete",
                        index: o,
                        howMany: 1
                    })
                }), r(), n;

                function r() {
                    i && (n.push(i), i = null)
                }

                function s(t) {
                    return i && i.type == t
                }
            }(Qo(t.oldChildren, t.newChildren, md), t.newChildren);
            if (e.length > 1) return;
            const n = e[0];
            return n.values[0] && n.values[0].is("text") ? n : void 0
        }

        function md(t, e) {
            return t && t.is("text") && e && e.is("text") ? t.data === e.data : t === e
        }
        class pd {
            constructor(t) {
                this.editor = t, this.editing = this.editor.editing
            }
            handle(t, e) {
                if (hd(t)) this._handleContainerChildrenMutations(t, e);
                else
                    for (const n of t) this._handleTextMutation(n, e), this._handleTextNodeInsertion(n)
            }
            _handleContainerChildrenMutations(t, e) {
                const n = function(t) {
                    const e = t.map(t => t.node).reduce((t, e) => t.getCommonAncestor(e, {
                        includeSelf: !0
                    }));
                    if (!e) return;
                    return e.getAncestors({
                        includeSelf: !0,
                        parentFirst: !0
                    }).find(t => t.is("containerElement") || t.is("rootElement"))
                }(t);
                if (!n) return;
                const i = this.editor.editing.view.domConverter.mapViewToDom(n),
                    o = new rr,
                    r = this.editor.data.toModel(o.domToView(i)).getChild(0),
                    s = this.editor.editing.mapper.toModelElement(n);
                if (!s) return;
                const a = Array.from(r.getChildren()),
                    c = Array.from(s.getChildren()),
                    l = a[a.length - 1],
                    d = c[c.length - 1];
                l && l.is("softBreak") && d && !d.is("softBreak") && a.pop();
                const u = this.editor.model.schema;
                if (!gd(a, u) || !gd(c, u)) return;
                const h = a.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " "),
                    f = c.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " ");
                if (f === h) return;
                const m = Qo(f, h),
                    {
                        firstChangeAt: p,
                        insertions: g,
                        deletions: b
                    } = bd(m);
                let w = null;
                e && (w = this.editing.mapper.toModelRange(e.getFirstRange()));
                const _ = h.substr(p, g),
                    k = this.editor.model.createRange(this.editor.model.createPositionAt(s, p), this.editor.model.createPositionAt(s, p + b));
                this.editor.execute("input", {
                    text: _,
                    range: k,
                    resultRange: w
                })
            }
            _handleTextMutation(t, e) {
                if ("text" != t.type) return;
                const n = t.newText.replace(/\u00A0/g, " "),
                    i = t.oldText.replace(/\u00A0/g, " ");
                if (i === n) return;
                const o = Qo(i, n),
                    {
                        firstChangeAt: r,
                        insertions: s,
                        deletions: a
                    } = bd(o);
                let c = null;
                e && (c = this.editing.mapper.toModelRange(e.getFirstRange()));
                const l = this.editing.view.createPositionAt(t.node, r),
                    d = this.editing.mapper.toModelPosition(l),
                    u = this.editor.model.createRange(d, d.getShiftedBy(a)),
                    h = n.substr(r, s);
                this.editor.execute("input", {
                    text: h,
                    range: u,
                    resultRange: c
                })
            }
            _handleTextNodeInsertion(t) {
                if ("children" != t.type) return;
                const e = fd(t),
                    n = this.editing.view.createPositionAt(t.node, e.index),
                    i = this.editing.mapper.toModelPosition(n),
                    o = e.values[0].data;
                this.editor.execute("input", {
                    text: o.replace(/\u00A0/g, " "),
                    range: this.editor.model.createRange(i)
                })
            }
        }

        function gd(t, e) {
            return t.every(t => e.isInline(t))
        }

        function bd(t) {
            let e = null,
                n = null;
            for (let i = 0; i < t.length; i++) {
                "equal" != t[i] && (e = null === e ? i : e, n = i)
            }
            let i = 0,
                o = 0;
            for (let r = e; r <= n; r++) "insert" != t[r] && i++, "delete" != t[r] && o++;
            return {
                insertions: o,
                deletions: i,
                firstChangeAt: e
            }
        }
        class wd extends $l {
            static get pluginName() {
                return "Input"
            }
            init() {
                const t = this.editor,
                    e = new ld(t, t.config.get("typing.undoStep") || 20);
                t.commands.add("input", e), dd(t),
                    function(t) {
                        t.editing.view.document.on("mutations", (e, n, i) => {
                            new pd(t).handle(n, i)
                        })
                    }(t)
            }
        }
        class _d extends Zl {
            constructor(t, e) {
                super(t), this.direction = e, this._buffer = new cd(t.model, t.config.get("typing.undoStep"))
            }
            get buffer() {
                return this._buffer
            }
            execute(t = {}) {
                const e = this.editor.model,
                    n = e.document;
                e.enqueueChange(this._buffer.batch, i => {
                    this._buffer.lock();
                    const o = i.createSelection(n.selection),
                        r = o.isCollapsed;
                    if (o.isCollapsed && e.modifySelection(o, {
                            direction: this.direction,
                            unit: t.unit
                        }), this._shouldEntireContentBeReplacedWithParagraph(t.sequence || 1)) return void this._replaceEntireContentWithParagraph(i);
                    if (o.isCollapsed) return;
                    let s = 0;
                    o.getFirstRange().getMinimalFlatRanges().forEach(t => {
                        s += eo(t.getWalker({
                            singleCharacters: !0,
                            ignoreElementEnd: !0,
                            shallow: !0
                        }))
                    }), e.deleteContent(o, {
                        doNotResetEntireContent: r
                    }), this._buffer.input(s), i.setSelection(o), this._buffer.unlock()
                })
            }
            _shouldEntireContentBeReplacedWithParagraph(t) {
                if (t > 1) return !1;
                const e = this.editor.model,
                    n = e.document.selection,
                    i = e.schema.getLimitElement(n);
                if (!(n.isCollapsed && n.containsEntireContent(i))) return !1;
                if (!e.schema.checkChild(i, "paragraph")) return !1;
                const o = i.getChild(0);
                return !o || "paragraph" !== o.name
            }
            _replaceEntireContentWithParagraph(t) {
                const e = this.editor.model,
                    n = e.document.selection,
                    i = e.schema.getLimitElement(n),
                    o = t.createElement("paragraph");
                t.remove(t.createRangeIn(i)), t.insert(o, i), t.setSelection(o, 0)
            }
        }
        class kd extends hr {
            constructor(t) {
                super(t);
                const e = t.document;
                let n = 0;
                e.on("keyup", (t, e) => {
                    e.keyCode != bo.delete && e.keyCode != bo.backspace || (n = 0)
                }), e.on("keydown", (t, i) => {
                    const o = {};
                    if (i.keyCode == bo.delete) o.direction = "forward", o.unit = "character";
                    else {
                        if (i.keyCode != bo.backspace) return;
                        o.direction = "backward", o.unit = "codePoint"
                    }
                    const r = mo.isMac ? i.altKey : i.ctrlKey;
                    let s;
                    o.unit = r ? "word" : o.unit, o.sequence = ++n, e.once("delete", t => s = t, {
                        priority: "highest"
                    }), e.fire("delete", new Xr(e, i.domEvent, o)), s && s.stop.called && t.stop()
                })
            }
            observe() {}
        }

        function vd(t) {
            const e = t.model,
                n = t.editing.view,
                i = 200;
            let o = null,
                r = e.createSelection(e.document.selection),
                s = Date.now();
            e.document.selection.on("change", function(t) {
                const n = e.createSelection(t.source);
                r.isEqual(n) || (o = r, r = n, s = Date.now())
            }), n.document.on("mutations", function(n, a) {
                hd(a) && function(t) {
                    for (const e of t) {
                        if ("children" !== e.type) continue;
                        const t = e.oldChildren,
                            n = e.newChildren;
                        if (!yd(t)) continue;
                        const i = Qo(t, n),
                            o = i.some(t => "delete" === t),
                            r = i.some(t => "insert" === t);
                        if (o && !r) return !0
                    }
                    return !1
                }(a) && (! function() {
                    Date.now() - s < i && o && !o.isCollapsed && r.isCollapsed && r.getLastPosition().isEqual(o.getLastPosition()) && e.enqueueChange(t => {
                        t.setSelection(o)
                    });
                    t.execute("delete")
                }(), n.stop())
            }, {
                priority: "highest"
            })
        }

        function yd(t) {
            return t.every(t => t.is("containerElement"))
        }
        class xd extends $l {
            static get pluginName() {
                return "Delete"
            }
            init() {
                const t = this.editor,
                    e = t.editing.view,
                    n = e.document;
                e.addObserver(kd), t.commands.add("forwardDelete", new _d(t, "forward")), t.commands.add("delete", new _d(t, "backward")), this.listenTo(n, "delete", (n, i) => {
                    t.execute("forward" == i.direction ? "forwardDelete" : "delete", {
                        unit: i.unit,
                        sequence: i.sequence
                    }), i.preventDefault(), e.scrollToTheSelection()
                }), vd(t)
            }
        }
        class Ad extends $l {
            static get requires() {
                return [wd, xd]
            }
            static get pluginName() {
                return "Typing"
            }
        }
        class Cd extends Qa {get type() {
                return "noop"
            }
            clone() {
                return new Cd(this.baseVersion)
            }
            getReversed() {
                return new Cd(this.baseVersion + 1)
            }
            _execute() {}
            static get className() {
                return "NoOperation"
            }
        }
        const Td = new Map;

        function Pd(t, e, n) {
            let i = Td.get(t);
            i || (i = new Map, Td.set(t, i)), i.set(e, n)
        }

        function Md(t) {
            return [t]
        }

        function Ed(t, e, n = {}) {
            const i = function(t, e) {
                const n = Td.get(t);
                return n && n.has(e) ? n.get(e) : Md
            }(t.constructor, e.constructor);
            try {
                return i(t = t.clone(), e, n)
            } catch (i) {
                throw bs.a.error("Error during operation transformation!", i.message), bs.a.error("Transformed operation", t), bs.a.error("Operation transformed by", e), bs.a.error("context.aIsStrong", n.aIsStrong), bs.a.error("context.aWasUndone", n.aWasUndone), bs.a.error("context.bWasUndone", n.bWasUndone), bs.a.error("context.abRelation", n.abRelation), bs.a.error("context.baRelation", n.baRelation), i
            }
        }

        function Sd(t, e, n) {
            if (t = t.slice(), e = e.slice(), 0 == t.length || 0 == e.length) return {
                operationsA: t,
                operationsB: e
            };
            const i = new WeakMap;
            for (const e of t) i.set(e, 0);
            const o = {
                    nextBaseVersionA: t[t.length - 1].baseVersion + 1,
                    nextBaseVersionB: e[e.length - 1].baseVersion + 1,
                    originalOperationsACount: t.length,
                    originalOperationsBCount: e.length
                },
                r = new Id(n.document, n.useRelations, n.forceWeakRemove);
            r.setOriginalOperations(t), r.setOriginalOperations(e);
            let s = 0;
            for (; s < t.length;) {
                const n = t[s],
                    o = i.get(n);
                if (o == e.length) {
                    s++;
                    continue
                }
                const a = e[o],
                    c = Ed(n, a, r.getContext(n, a, !0)),
                    l = Ed(a, n, r.getContext(a, n, !1));
                r.updateRelation(n, a), r.setOriginalOperations(c, n), r.setOriginalOperations(l, a);
                for (const t of c) i.set(t, o + l.length);
                t.splice(s, 1, ...c), e.splice(o, 1, ...l)
            }
            if (n.padWithNoOps) {
                const n = t.length - o.originalOperationsACount,
                    i = e.length - o.originalOperationsBCount;
                Od(t, i - n), Od(e, n - i)
            }
            return Nd(t, o.nextBaseVersionB), Nd(e, o.nextBaseVersionA), {
                operationsA: t,
                operationsB: e
            }
        }
        class Id {
            constructor(t, e, n = !1) {
                this._history = t.history, this._useRelations = e, this._forceWeakRemove = !!n, this._originalOperations = new Map, this._relations = new Map
            }
            setOriginalOperations(t, e = null) {
                const n = e ? this._originalOperations.get(e) : null;
                for (const e of t) this._originalOperations.set(e, n || e)
            }
            updateRelation(t, e) {
                switch (t.constructor) {
                    case ac:
                        switch (e.constructor) {
                            case hc:
                                t.targetPosition.isEqual(e.sourcePosition) || e.movedRange.containsPosition(t.targetPosition) ? this._setRelation(t, e, "insertAtSource") : t.targetPosition.isEqual(e.deletionPosition) ? this._setRelation(t, e, "insertBetween") : t.targetPosition.isAfter(e.sourcePosition) && this._setRelation(t, e, "moveTargetAfter");
                                break;
                            case ac:
                                t.targetPosition.isEqual(e.sourcePosition) || t.targetPosition.isBefore(e.sourcePosition) ? this._setRelation(t, e, "insertBefore") : this._setRelation(t, e, "insertAfter")
                        }
                        break;
                    case fc:
                        switch (e.constructor) {
                            case hc:
                                t.splitPosition.isBefore(e.sourcePosition) && this._setRelation(t, e, "splitBefore");
                                break;
                            case ac:
                                (t.splitPosition.isEqual(e.sourcePosition) || t.splitPosition.isBefore(e.sourcePosition)) && this._setRelation(t, e, "splitBefore")
                        }
                        break;
                    case hc:
                        switch (e.constructor) {
                            case hc:
                                t.targetPosition.isEqual(e.sourcePosition) || this._setRelation(t, e, "mergeTargetNotMoved"), t.sourcePosition.isEqual(e.sourcePosition) && this._setRelation(t, e, "mergeSameElement");
                                break;
                            case fc:
                                t.sourcePosition.isEqual(e.splitPosition) && this._setRelation(t, e, "splitAtSource")
                        }
                        break;
                    case lc:
                        {
                            const n = t.newRange;
                            if (!n) return;
                            switch (e.constructor) {
                                case ac:
                                    {
                                        const i = Gs._createFromPositionAndShift(e.sourcePosition, e.howMany),
                                            o = i.containsPosition(n.start) || i.start.isEqual(n.start),
                                            r = i.containsPosition(n.end) || i.end.isEqual(n.end);
                                        !o && !r || i.containsRange(n) || this._setRelation(t, e, {
                                            side: o ? "left" : "right",
                                            path: o ? n.start.path.slice() : n.end.path.slice()
                                        });
                                        break
                                    }
                                case hc:
                                    {
                                        const i = n.start.isEqual(e.targetPosition),
                                            o = n.start.isEqual(e.deletionPosition),
                                            r = n.end.isEqual(e.deletionPosition),
                                            s = n.end.isEqual(e.sourcePosition);
                                        (i || o || r || s) && this._setRelation(t, e, {
                                            wasInLeftElement: i,
                                            wasStartBeforeMergedElement: o,
                                            wasEndBeforeMergedElement: r,
                                            wasInRightElement: s
                                        });
                                        break
                                    }
                            }
                            break
                        }
                }
            }
            getContext(t, e, n) {
                return {
                    aIsStrong: n,
                    aWasUndone: this._wasUndone(t),
                    bWasUndone: this._wasUndone(e),
                    abRelation: this._useRelations ? this._getRelation(t, e) : null,
                    baRelation: this._useRelations ? this._getRelation(e, t) : null,
                    forceWeakRemove: this._forceWeakRemove
                }
            }
            _wasUndone(t) {
                const e = this._originalOperations.get(t);
                return e.wasUndone || this._history.isUndoneOperation(e)
            }
            _getRelation(t, e) {
                const n = this._originalOperations.get(e),
                    i = this._history.getUndoneOperation(n);
                if (!i) return null;
                const o = this._originalOperations.get(t),
                    r = this._relations.get(o);
                return r && r.get(i) || null
            }
            _setRelation(t, e, n) {
                const i = this._originalOperations.get(t),
                    o = this._originalOperations.get(e);
                let r = this._relations.get(i);
                r || (r = new Map, this._relations.set(i, r)), r.set(o, n)
            }
        }

        function Nd(t, e) {
            for (const n of t) n.baseVersion = e++
        }

        function Od(t, e) {
            for (let n = 0; n < e; n++) t.push(new Cd(0))
        }

        function Rd(t, e, n) {
            const i = t.nodes.getNode(0).getAttribute(e);
            if (i == n) return null;
            const o = new Gs(t.position, t.position.getShiftedBy(t.howMany));
            return new rc(o, e, i, n, 0)
        }

        function Dd(t, e) {
            return null === t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany)
        }

        function Ld(t, e) {
            const n = [];
            for (let i = 0; i < t.length; i++) {
                const o = t[i],
                    r = new ac(o.start, o.end.offset - o.start.offset, e, 0);
                n.push(r);
                for (let e = i + 1; e < t.length; e++) t[e] = t[e]._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)[0];
                e = e._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)
            }
            return n
        }
        Pd(rc, rc, (t, e, n) => {
            if (t.key === e.key) {
                const i = t.range.getDifference(e.range).map(e => new rc(e, t.key, t.oldValue, t.newValue, 0)),
                    o = t.range.getIntersection(e.range);
                return o && n.aIsStrong && i.push(new rc(o, e.key, e.newValue, t.newValue, 0)), 0 == i.length ? [new Cd(0)] : i
            }
            return [t]
        }), Pd(rc, cc, (t, e) => {
            if (t.range.start.hasSameParentAs(e.position) && t.range.containsPosition(e.position)) {
                const n = t.range._getTransformedByInsertion(e.position, e.howMany, !e.shouldReceiveAttributes).map(e => new rc(e, t.key, t.oldValue, t.newValue, t.baseVersion));
                if (e.shouldReceiveAttributes) {
                    const i = Rd(e, t.key, t.oldValue);
                    i && n.unshift(i)
                }
                return n
            }
            return t.range = t.range._getTransformedByInsertion(e.position, e.howMany, !1)[0], [t]
        }), Pd(rc, hc, (t, e) => {
            const n = [];
            t.range.start.hasSameParentAs(e.deletionPosition) && (t.range.containsPosition(e.deletionPosition) || t.range.start.isEqual(e.deletionPosition)) && n.push(Gs._createFromPositionAndShift(e.graveyardPosition, 1));
            const i = t.range._getTransformedByMergeOperation(e);
            return i.isCollapsed || n.push(i), n.map(e => new rc(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), Pd(rc, ac, (t, e) => {
            return function(t, e) {
                const n = Gs._createFromPositionAndShift(e.sourcePosition, e.howMany);
                let i = null,
                    o = [];
                n.containsRange(t, !0) ? i = t : t.start.hasSameParentAs(n.start) ? (o = t.getDifference(n), i = t.getIntersection(n)) : o = [t];
                const r = [];
                for (let t of o) {
                    t = t._getTransformedByDeletion(e.sourcePosition, e.howMany);
                    const n = e.getMovedRangeStart(),
                        i = t.start.hasSameParentAs(n);
                    t = t._getTransformedByInsertion(n, e.howMany, i), r.push(...t)
                }
                i && r.push(i._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany, !1)[0]);
                return r
            }(t.range, e).map(e => new rc(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), Pd(rc, fc, (t, e) => {
            if (t.range.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.range.end.offset++, [t];
            if (t.range.start.hasSameParentAs(e.splitPosition) && t.range.containsPosition(e.splitPosition)) {
                const n = t.clone();
                return n.range = new Gs(e.moveTargetPosition.clone(), t.range.end._getCombined(e.splitPosition, e.moveTargetPosition)), t.range.end = e.splitPosition.clone(), t.range.end.stickiness = "toPrevious", [t, n]
            }
            return t.range = t.range._getTransformedBySplitOperation(e), [t]
        }), Pd(cc, rc, (t, e) => {
            const n = [t];
            if (t.shouldReceiveAttributes && t.position.hasSameParentAs(e.range.start) && e.range.containsPosition(t.position)) {
                const i = Rd(t, e.key, e.newValue);
                i && n.push(i)
            }
            return n
        }), Pd(cc, cc, (t, e, n) => t.position.isEqual(e.position) && n.aIsStrong ? [t] : (t.position = t.position._getTransformedByInsertOperation(e), [t])), Pd(cc, ac, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), Pd(cc, fc, (t, e) => (t.position = t.position._getTransformedBySplitOperation(e), [t])), Pd(cc, hc, (t, e) => (t.position = t.position._getTransformedByMergeOperation(e), [t])), Pd(lc, cc, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByInsertOperation(e)[0]), t.newRange && (t.newRange = t.newRange._getTransformedByInsertOperation(e)[0]), [t])), Pd(lc, lc, (t, e, n) => {
            if (t.name == e.name) {
                if (!n.aIsStrong) return [new Cd(0)];
                t.oldRange = e.newRange ? e.newRange.clone() : null
            }
            return [t]
        }), Pd(lc, hc, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByMergeOperation(e)), t.newRange && (t.newRange = t.newRange._getTransformedByMergeOperation(e)), [t])), Pd(lc, ac, (t, e, n) => {
            if (t.oldRange && (t.oldRange = Gs._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))), t.newRange) {
                if (n.abRelation) {
                    const i = Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e));
                    if ("left" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.start)) return t.newRange.start.path = n.abRelation.path, t.newRange.end = i.end, [t];
                    if ("right" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.end)) return t.newRange.start = i.start, t.newRange.end.path = n.abRelation.path, [t]
                }
                t.newRange = Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e))
            }
            return [t]
        }), Pd(lc, fc, (t, e, n) => {
            if (t.oldRange && (t.oldRange = t.oldRange._getTransformedBySplitOperation(e)), t.newRange) {
                if (n.abRelation) {
                    const i = t.newRange._getTransformedBySplitOperation(e);
                    return t.newRange.start.isEqual(e.splitPosition) && n.abRelation.wasStartBeforeMergedElement ? t.newRange.start = $s._createAt(e.insertionPosition) : t.newRange.start.isEqual(e.splitPosition) && !n.abRelation.wasInLeftElement && (t.newRange.start = $s._createAt(e.moveTargetPosition)), t.newRange.end.isEqual(e.splitPosition) && n.abRelation.wasInRightElement ? t.newRange.end = $s._createAt(e.moveTargetPosition) : t.newRange.end.isEqual(e.splitPosition) && n.abRelation.wasEndBeforeMergedElement ? t.newRange.end = $s._createAt(e.insertionPosition) : t.newRange.end = i.end, [t]
                }
                t.newRange = t.newRange._getTransformedBySplitOperation(e)
            }
            return [t]
        }), Pd(hc, cc, (t, e) => (t.sourcePosition.hasSameParentAs(e.position) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByInsertOperation(e), t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e), [t])), Pd(hc, hc, (t, e, n) => {
            if (t.sourcePosition.isEqual(e.sourcePosition) && t.targetPosition.isEqual(e.targetPosition)) {
                if (n.bWasUndone) {
                    const n = e.graveyardPosition.path.slice();
                    return n.push(0), t.sourcePosition = new $s(e.graveyardPosition.root, n), t.howMany = 0, [t]
                }
                return [new Cd(0)]
            }
            if (t.sourcePosition.isEqual(e.sourcePosition) && !t.targetPosition.isEqual(e.targetPosition) && !n.bWasUndone && "splitAtSource" != n.abRelation) {
                const i = "$graveyard" == t.targetPosition.root.rootName,
                    o = "$graveyard" == e.targetPosition.root.rootName;
                if (o && !i || !(i && !o) && n.aIsStrong) {
                    const n = e.targetPosition._getTransformedByMergeOperation(e),
                        i = t.targetPosition._getTransformedByMergeOperation(e);
                    return [new ac(n, t.howMany, i, 0)]
                }
                return [new Cd(0)]
            }
            return t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMergeOperation(e), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), t.graveyardPosition.isEqual(e.graveyardPosition) && n.aIsStrong || (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), Pd(hc, ac, (t, e, n) => {
            const i = Gs._createFromPositionAndShift(e.sourcePosition, e.howMany);
            return "remove" == e.type && !n.bWasUndone && !n.forceWeakRemove && t.deletionPosition.hasSameParentAs(e.sourcePosition) && i.containsPosition(t.sourcePosition) ? [new Cd(0)] : (t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition.hasSameParentAs(e.sourcePosition) && (t.howMany -= e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMoveOperation(e), t.targetPosition = t.targetPosition._getTransformedByMoveOperation(e), t.graveyardPosition.isEqual(e.targetPosition) || (t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)), [t])
        }), Pd(hc, fc, (t, e, n) => {
            if (e.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition, 1), t.deletionPosition.isEqual(e.graveyardPosition) && (t.howMany = e.howMany)), t.targetPosition.isEqual(e.splitPosition)) {
                const i = 0 != e.howMany,
                    o = e.graveyardPosition && t.deletionPosition.isEqual(e.graveyardPosition);
                if (i || o || "mergeTargetNotMoved" == n.abRelation) return t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), [t]
            }
            return t.sourcePosition.isEqual(e.splitPosition) && ("mergeSameElement" == n.abRelation || t.sourcePosition.offset > 0) ? (t.sourcePosition = e.moveTargetPosition.clone(), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]) : (t.sourcePosition.hasSameParentAs(e.splitPosition) && (t.howMany = e.splitPosition.offset), t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t])
        }), Pd(ac, cc, (t, e) => {
            const n = Gs._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByInsertOperation(e, !1)[0];
            return t.sourcePosition = n.start, t.howMany = n.end.offset - n.start.offset, t.targetPosition.isEqual(e.position) || (t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e)), [t]
        }), Pd(ac, ac, (t, e, n) => {
            const i = Gs._createFromPositionAndShift(t.sourcePosition, t.howMany),
                o = Gs._createFromPositionAndShift(e.sourcePosition, e.howMany);
            let r, s = n.aIsStrong,
                a = !n.aIsStrong;
            if ("insertBefore" == n.abRelation || "insertAfter" == n.baRelation ? a = !0 : "insertAfter" != n.abRelation && "insertBefore" != n.baRelation || (a = !1), r = t.targetPosition.isEqual(e.targetPosition) && a ? t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany) : t.targetPosition._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), Dd(t, e) && Dd(e, t)) return [e.getReversed()];
            if (i.containsPosition(e.targetPosition) && i.containsRange(o, !0)) return i.start = i.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), i.end = i.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), Ld([i], r);
            if (o.containsPosition(t.targetPosition) && o.containsRange(i, !0)) return i.start = i.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), i.end = i.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), Ld([i], r);
            const c = li(t.sourcePosition.getParentPath(), e.sourcePosition.getParentPath());
            if ("prefix" == c || "extension" == c) return i.start = i.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), i.end = i.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), Ld([i], r);
            "remove" != t.type || "remove" == e.type || n.aWasUndone || n.forceWeakRemove ? "remove" == t.type || "remove" != e.type || n.bWasUndone || n.forceWeakRemove || (s = !1) : s = !0;
            const l = [],
                d = i.getDifference(o);
            for (const t of d) {
                t.start = t.start._getTransformedByDeletion(e.sourcePosition, e.howMany), t.end = t.end._getTransformedByDeletion(e.sourcePosition, e.howMany);
                const n = "same" == li(t.start.getParentPath(), e.getMovedRangeStart().getParentPath()),
                    i = t._getTransformedByInsertion(e.getMovedRangeStart(), e.howMany, n);
                l.push(...i)
            }
            const u = i.getIntersection(o);
            return null !== u && s && (u.start = u.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), u.end = u.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), 0 === l.length ? l.push(u) : 1 == l.length ? o.start.isBefore(i.start) || o.start.isEqual(i.start) ? l.unshift(u) : l.push(u) : l.splice(1, 0, u)), 0 === l.length ? [new Cd(t.baseVersion)] : Ld(l, r)
        }), Pd(ac, fc, (t, e, n) => {
            let i = t.targetPosition.clone();
            t.targetPosition.isEqual(e.insertionPosition) && e.graveyardPosition && "moveTargetAfter" != n.abRelation || (i = t.targetPosition._getTransformedBySplitOperation(e));
            const o = Gs._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (o.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.howMany++, t.targetPosition = i, [t];
            if (o.start.hasSameParentAs(e.splitPosition) && o.containsPosition(e.splitPosition)) {
                let t = new Gs(e.splitPosition, o.end);
                return t = t._getTransformedBySplitOperation(e), Ld([new Gs(o.start, e.splitPosition), t], i)
            }
            t.targetPosition.isEqual(e.splitPosition) && "insertAtSource" == n.abRelation && (i = e.moveTargetPosition), t.targetPosition.isEqual(e.insertionPosition) && "insertBetween" == n.abRelation && (i = t.targetPosition);
            const r = [o._getTransformedBySplitOperation(e)];
            if (e.graveyardPosition) {
                const i = o.start.isEqual(e.graveyardPosition) || o.containsPosition(e.graveyardPosition);
                t.howMany > 1 && i && !n.aWasUndone && r.push(Gs._createFromPositionAndShift(e.insertionPosition, 1))
            }
            return Ld(r, i)
        }), Pd(ac, hc, (t, e, n) => {
            const i = Gs._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (e.deletionPosition.hasSameParentAs(t.sourcePosition) && i.containsPosition(e.sourcePosition))
                if ("remove" != t.type || n.forceWeakRemove) {
                    if (1 == t.howMany) return n.bWasUndone ? (t.sourcePosition = e.graveyardPosition.clone(), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]) : [new Cd(0)]
                } else if (!n.aWasUndone) {
                const n = [];
                let i = e.graveyardPosition.clone(),
                    o = e.targetPosition._getTransformedByMergeOperation(e);
                t.howMany > 1 && (n.push(new ac(t.sourcePosition, t.howMany - 1, t.targetPosition, 0)), i = i._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1), o = o._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1));
                const r = e.deletionPosition._getCombined(t.sourcePosition, t.targetPosition),
                    s = new ac(i, 1, r, 0),
                    a = s.getMovedRangeStart().path.slice();
                a.push(0);
                const c = new $s(s.targetPosition.root, a);
                o = o._getTransformedByMove(i, r, 1);
                const l = new ac(o, e.howMany, c, 0);
                return n.push(s), n.push(l), n
            }
            const o = Gs._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByMergeOperation(e);
            return t.sourcePosition = o.start, t.howMany = o.end.offset - o.start.offset, t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]
        }), Pd(dc, cc, (t, e) => (t.position = t.position._getTransformedByInsertOperation(e), [t])), Pd(dc, hc, (t, e) => t.position.isEqual(e.deletionPosition) ? (t.position = e.graveyardPosition.clone(), t.position.stickiness = "toNext", [t]) : (t.position = t.position._getTransformedByMergeOperation(e), [t])), Pd(dc, ac, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), Pd(dc, dc, (t, e, n) => {
            if (t.position.isEqual(e.position)) {
                if (!n.aIsStrong) return [new Cd(0)];
                t.oldName = e.newName
            }
            return [t]
        }), Pd(dc, fc, (t, e) => {
            if ("same" == li(t.position.path, e.splitPosition.getParentPath()) && !e.graveyardPosition) {
                return [t, new dc(t.position.getShiftedBy(1), t.oldName, t.newName, 0)]
            }
            return t.position = t.position._getTransformedBySplitOperation(e), [t]
        }), Pd(uc, uc, (t, e, n) => {
            if (t.root === e.root && t.key === e.key) {
                if (!n.aIsStrong || t.newValue === e.newValue) return [new Cd(0)];
                t.oldValue = e.newValue
            }
            return [t]
        }), Pd(fc, cc, (t, e) => (t.splitPosition.hasSameParentAs(e.position) && t.splitPosition.offset < e.position.offset && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByInsertOperation(e), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), [t])), Pd(fc, hc, (t, e, n) => {
            if (!t.graveyardPosition && !n.bWasUndone && t.splitPosition.hasSameParentAs(e.sourcePosition)) {
                const n = e.graveyardPosition.path.slice();
                n.push(0);
                const i = new $s(e.graveyardPosition.root, n),
                    o = fc.getInsertionPosition(new $s(e.graveyardPosition.root, n)),
                    r = new fc(i, 0, null, 0);
                return r.insertionPosition = o, t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), t.graveyardPosition = r.insertionPosition.clone(), t.graveyardPosition.stickiness = "toNext", [r, t]
            }
            return t.splitPosition.hasSameParentAs(e.deletionPosition) && !t.splitPosition.isAfter(e.deletionPosition) && t.howMany--, t.splitPosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), Pd(fc, ac, (t, e, n) => {
            const i = Gs._createFromPositionAndShift(e.sourcePosition, e.howMany);
            if (t.graveyardPosition) {
                const o = i.start.isEqual(t.graveyardPosition) || i.containsPosition(t.graveyardPosition);
                if (!n.bWasUndone && o) {
                    const n = t.splitPosition._getTransformedByMoveOperation(e),
                        i = t.graveyardPosition._getTransformedByMoveOperation(e),
                        o = i.path.slice();
                    o.push(0);
                    const r = new $s(i.root, o);
                    return [new ac(n, t.howMany, r, 0)]
                }
                t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)
            }
            if (t.splitPosition.hasSameParentAs(e.sourcePosition) && i.containsPosition(t.splitPosition)) {
                const n = e.howMany - (t.splitPosition.offset - e.sourcePosition.offset);
                return t.howMany -= n, t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany), t.splitPosition = e.sourcePosition.clone(), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), [t]
            }
            return !t.splitPosition.isEqual(e.targetPosition) || "insertAtSource" != n.baRelation && "splitBefore" != n.abRelation ? (e.sourcePosition.isEqual(e.targetPosition) || (t.splitPosition.hasSameParentAs(e.sourcePosition) && t.splitPosition.offset <= e.sourcePosition.offset && (t.howMany -= e.howMany), t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany)), t.splitPosition.stickiness = "toNone", t.splitPosition = t.splitPosition._getTransformedByMoveOperation(e), t.splitPosition.stickiness = "toNext", t.graveyardPosition ? t.insertionPosition = t.insertionPosition._getTransformedByMoveOperation(e) : t.insertionPosition = fc.getInsertionPosition(t.splitPosition), [t]) : (t.howMany += e.howMany, t.splitPosition = t.splitPosition._getTransformedByDeletion(e.sourcePosition, e.howMany), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), [t])
        }), Pd(fc, fc, (t, e, n) => {
            if (t.splitPosition.isEqual(e.splitPosition)) {
                if (!t.graveyardPosition && !e.graveyardPosition) return [new Cd(0)];
                if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) return [new Cd(0)]
            }
            if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) {
                const i = "$graveyard" == t.splitPosition.root.rootName,
                    o = "$graveyard" == e.splitPosition.root.rootName;
                if (o && !i || !(i && !o) && n.aIsStrong) {
                    const n = [];
                    return e.howMany && n.push(new ac(e.moveTargetPosition, e.howMany, e.splitPosition, 0)), t.howMany && n.push(new ac(t.splitPosition, t.howMany, t.moveTargetPosition, 0)), n
                }
                return [new Cd(0)]
            }
            if (t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e)), t.splitPosition.isEqual(e.insertionPosition) && "splitBefore" == n.abRelation) return t.howMany++, [t];
            if (e.splitPosition.isEqual(t.insertionPosition) && "splitBefore" == n.baRelation) {
                const n = e.insertionPosition.path.slice();
                n.push(0);
                const i = new $s(e.insertionPosition.root, n);
                return [t, new ac(t.insertionPosition, 1, i, 0)]
            }
            return t.splitPosition.hasSameParentAs(e.splitPosition) && t.splitPosition.offset < e.splitPosition.offset && (t.howMany -= e.howMany), t.splitPosition = t.splitPosition._getTransformedBySplitOperation(e), t.insertionPosition = fc.getInsertionPosition(t.splitPosition), [t]
        });
        class jd extends Zl {
            constructor(t) {
                super(t), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
            }
            refresh() {
                this.isEnabled = this._stack.length > 0
            }
            addBatch(t) {
                const e = this.editor.model.document.selection,
                    n = {
                        ranges: e.hasOwnRange ? Array.from(e.getRanges()) : [],
                        isBackward: e.isBackward
                    };
                this._stack.push({
                    batch: t,
                    selection: n
                }), this.refresh()
            }
            clearStack() {
                this._stack = [], this.refresh()
            }
            _restoreSelection(t, e, n) {
                const i = this.editor.model,
                    o = i.document,
                    r = [];
                for (const e of t) {
                    const t = Vd(e, n).find(t => t.start.root != o.graveyard);
                    t && r.push(t)
                }
                r.length && i.change(t => {
                    t.setSelection(r, {
                        backward: e
                    })
                })
            }
            _undo(t, e) {
                const n = this.editor.model,
                    i = n.document;
                this._createdBatches.add(e);
                const o = t.operations.slice().filter(t => t.isDocumentOperation);
                o.reverse();
                for (const t of o) {
                    const o = t.baseVersion + 1,
                        r = Array.from(i.history.getOperations(o)),
                        s = Sd([t.getReversed()], r, {
                            useRelations: !0,
                            document: this.editor.model.document,
                            padWithNoOps: !1,
                            forceWeakRemove: !0
                        }).operationsA;
                    for (const o of s) e.addOperation(o), n.applyOperation(o), i.history.setOperationAsUndone(t, o)
                }
            }
        }

        function Vd(t, e) {
            const n = t.getTransformedByOperations(e);
            n.sort((t, e) => t.start.isBefore(e.start) ? -1 : 1);
            for (let t = 1; t < n.length; t++) {
                const e = n[t - 1],
                    i = n[t];
                e.end.isTouching(i.start) && (e.end = i.end, n.splice(t, 1), t--)
            }
            return n
        }
        class Bd extends jd {
            execute(t = null) {
                const e = t ? this._stack.findIndex(e => e.batch == t) : this._stack.length - 1,
                    n = this._stack.splice(e, 1)[0],
                    i = this.editor.model.createBatch();
                this.editor.model.enqueueChange(i, () => {
                    this._undo(n.batch, i);
                    const t = this.editor.model.document.history.getOperations(n.batch.baseVersion);
                    this._restoreSelection(n.selection.ranges, n.selection.isBackward, t), this.fire("revert", n.batch, i)
                }), this.refresh()
            }
        }
        class zd extends jd {
            execute() {
                const t = this._stack.pop(),
                    e = this.editor.model.createBatch();
                this.editor.model.enqueueChange(e, () => {
                    const n = t.batch.operations[t.batch.operations.length - 1].baseVersion + 1,
                        i = this.editor.model.document.history.getOperations(n);
                    this._restoreSelection(t.selection.ranges, t.selection.isBackward, i), this._undo(t.batch, e)
                }), this.refresh()
            }
        }
        class Fd extends $l {
            constructor(t) {
                super(t), this._batchRegistry = new WeakSet
            }
            init() {
                const t = this.editor;
                this._undoCommand = new Bd(t), this._redoCommand = new zd(t), t.commands.add("undo", this._undoCommand), t.commands.add("redo", this._redoCommand), this.listenTo(t.model, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (!n.isDocumentOperation) return;
                    const i = n.batch;
                    this._batchRegistry.has(i) || "transparent" == i.type || (this._redoCommand._createdBatches.has(i) ? this._undoCommand.addBatch(i) : this._undoCommand._createdBatches.has(i) || (this._undoCommand.addBatch(i), this._redoCommand.clearStack()), this._batchRegistry.add(i))
                }, {
                    priority: "highest"
                }), this.listenTo(this._undoCommand, "revert", (t, e, n) => {
                    this._redoCommand.addBatch(n)
                }), t.keystrokes.set("CTRL+Z", "undo"), t.keystrokes.set("CTRL+Y", "redo"), t.keystrokes.set("CTRL+SHIFT+Z", "redo")
            }
        }
        n(58);
        class Ud extends Nl {
            constructor() {
                super();
                const t = this.bindTemplate;
                this.set("content", ""), this.set("viewBox", "0 0 20 20"), this.set("fillColor", ""), this.setTemplate({
                    tag: "svg",
                    ns: "http://www.w3.org/2000/svg",
                    attributes: {
                        class: ["ck", "ck-icon"],
                        viewBox: t.to("viewBox")
                    }
                })
            }
            render() {
                super.render(), this._updateXMLContent(), this._colorFillPaths(), this.on("change:content", () => {
                    this._updateXMLContent(), this._colorFillPaths()
                }), this.on("change:fillColor", () => {
                    this._colorFillPaths()
                })
            }
            _updateXMLContent() {
                if (this.content) {
                    const t = (new DOMParser).parseFromString(this.content.trim(), "image/svg+xml").querySelector("svg"),
                        e = t.getAttribute("viewBox");
                    for (e && (this.viewBox = e), this.element.innerHTML = ""; t.childNodes.length > 0;) this.element.appendChild(t.childNodes[0])
                }
            }
            _colorFillPaths() {
                this.fillColor && this.element.querySelectorAll(".ck-icon__fill").forEach(t => {
                    t.style.fill = this.fillColor
                })
            }
        }
        n(60);
        class Hd extends Nl {
            constructor(t) {
                super(t), this.set("text", ""), this.set("position", "s");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-tooltip", e.to("position", t => "ck-tooltip_" + t), e.if("text", "ck-hidden", t => !t.trim())]
                    },
                    children: [{
                        tag: "span",
                        attributes: {
                            class: ["ck", "ck-tooltip__text"]
                        },
                        children: [{
                            text: e.to("text")
                        }]
                    }]
                })
            }
        }
        n(62);
        class qd extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate,
                    n = Kn();
                this.set("class"), this.set("labelStyle"), this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1), this.set("isVisible", !0), this.set("keystroke"), this.set("label"), this.set("tabindex", -1), this.set("tooltip"), this.set("tooltipPosition", "s"), this.set("type", "button"), this.set("withText", !1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(n), this.iconView = new Ud, this.iconView.extendTemplate({
                    attributes: {
                        class: "ck-button__icon"
                    }
                }), this.bind("_tooltipString").to(this, "tooltip", this, "label", this, "keystroke", this._getTooltipString.bind(this)), this.setTemplate({
                    tag: "button",
                    attributes: {
                        class: ["ck", "ck-button", e.to("class"), e.if("isEnabled", "ck-disabled", t => !t), e.if("isVisible", "ck-hidden", t => !t), e.to("isOn", t => t ? "ck-on" : "ck-off"), e.if("withText", "ck-button_with-text")],
                        type: e.to("type", t => t || "button"),
                        tabindex: e.to("tabindex"),
                        "aria-labelledby": `ck-editor__aria-label_${n}`,
                        "aria-disabled": e.if("isEnabled", !0, t => !t),
                        "aria-pressed": e.if("isOn", !0)
                    },
                    children: this.children,
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }),
                        click: e.to(t => {
                            this.isEnabled ? this.fire("execute") : t.preventDefault()
                        })
                    }
                })
            }
            render() {
                super.render(), this.icon && (this.iconView.bind("content").to(this, "icon"), this.children.add(this.iconView)), this.children.add(this.tooltipView), this.children.add(this.labelView)
            }
            focus() {
                this.element.focus()
            }
            _createTooltipView() {
                const t = new Hd;
                return t.bind("text").to(this, "_tooltipString"), t.bind("position").to(this, "tooltipPosition"), t
            }
            _createLabelView(t) {
                const e = new Nl,
                    n = this.bindTemplate;
                return e.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-button__label"],
                        style: n.to("labelStyle"),
                        id: `ck-editor__aria-label_${t}`
                    },
                    children: [{
                        text: this.bindTemplate.to("label")
                    }]
                }), e
            }
            _getTooltipString(t, e, n) {
                return t ? "string" == typeof t ? t : (n && (n = function(t) {
                        return mo.isMac ? ko(t).map(t => go[t.toLowerCase()] || t).reduce((t, e) => t.slice(-1) in po ? t + e : t + "+" + e) : t
                    }(n)), t instanceof Function ? t(e, n) : `${e}${n?` ($ {
                        n
                    })
                    `:""}`) : ""
            }
        }
        var Wd = n(20),
            Yd = n.n(Wd),
            $d = n(21),
            Gd = n.n($d);
        class Qd extends $l {
            init() {
                const t = this.editor.t;
                this._addButton("undo", t("ba"), "CTRL+Z", Yd.a), this._addButton("redo", t("bb"), "CTRL+Y", Gd.a)
            }
            _addButton(t, e, n, i) {
                const o = this.editor;
                o.ui.componentFactory.add(t, r => {
                    const s = o.commands.get(t),
                        a = new qd(r);
                    return a.set({
                        label: e,
                        icon: i,
                        keystroke: n,
                        tooltip: !0
                    }), a.bind("isEnabled").to(s, "isEnabled"), this.listenTo(a, "execute", () => o.execute(t)), a
                })
            }
        }
        class Jd extends $l {
            static get requires() {
                return [Fd, Qd]
            }
            static get pluginName() {
                return "Undo"
            }
        }
        class Kd extends $l {
            static get pluginName() {
                return "PendingActions"
            }
            init() {
                this.set("hasAny", !1), this._actions = new oo({
                    idProperty: "_id"
                }), this._actions.delegate("add", "remove").to(this)
            }
            add(t) {
                if ("string" != typeof t) throw new Gn.b("pendingactions-add-invalid-message: The message must be a string.");
                const e = Object.create(Fi);
                return e.set("message", t), this._actions.add(e), this.hasAny = !0, e
            }
            remove(t) {
                this._actions.remove(t), this.hasAny = !!this._actions.length
            }
            get first() {
                return this._actions.get(0)
            }[Symbol.iterator]() {
                return this._actions[Symbol.iterator]()
            }
        }
        class Zd {
            constructor() {
                const t = new window.FileReader;
                this._reader = t, this.set("loaded", 0), t.onprogress = (t => {
                    this.loaded = t.loaded
                })
            }
            get error() {
                return this._reader.error
            }
            read(t) {
                const e = this._reader;
                return this.total = t.size, new Promise((n, i) => {
                    e.onload = (() => {
                        n(e.result)
                    }), e.onerror = (() => {
                        i("error")
                    }), e.onabort = (() => {
                        i("aborted")
                    }), this._reader.readAsDataURL(t)
                })
            }
            abort() {
                this._reader.abort()
            }
        }
        ci(Zd, Fi);
        class Xd extends $l {
            static get pluginName() {
                return "FileRepository"
            }
            static get requires() {
                return [Kd]
            }
            init() {
                this.loaders = new oo, this.loaders.on("add", () => this._updatePendingAction()), this.loaders.on("remove", () => this._updatePendingAction()), this._loadersMap = new Map, this._pendingAction = null, this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0)
            }
            getLoader(t) {
                return this._loadersMap.get(t) || null
            }
            createLoader(t) {
                if (!this.createUploadAdapter) return bs.a.error("filerepository-no-upload-adapter: Upload adapter is not defined."), null;
                const e = new tu(Promise.resolve(t), this.createUploadAdapter);
                return this.loaders.add(e), this._loadersMap.set(t, e), t instanceof Promise && e.file.then(t => {
                    this._loadersMap.set(t, e)
                }), e.file.catch(() => {}), e.on("change:uploaded", () => {
                    let t = 0;
                    for (const e of this.loaders) t += e.uploaded;
                    this.uploaded = t
                }), e.on("change:uploadTotal", () => {
                    let t = 0;
                    for (const e of this.loaders) e.uploadTotal && (t += e.uploadTotal);
                    this.uploadTotal = t
                }), e
            }
            destroyLoader(t) {
                const e = t instanceof tu ? t : this.getLoader(t);
                e._destroy(), this.loaders.remove(e), this._loadersMap.forEach((t, n) => {
                    t === e && this._loadersMap.delete(n)
                })
            }
            _updatePendingAction() {
                const t = this.editor.plugins.get(Kd);
                if (this.loaders.length) {
                    if (!this._pendingAction) {
                        const e = this.editor.t,
                            n = t => `${e("ap")} ${parseInt(t)}%.`;
                        this._pendingAction = t.add(n(this.uploadedPercent)), this._pendingAction.bind("message").to(this, "uploadedPercent", n)
                    }
                } else t.remove(this._pendingAction), this._pendingAction = null
            }
        }
        ci(Xd, Fi);
        class tu {
            constructor(t, e) {
                this.id = Kn(), this._filePromiseWrapper = this._createFilePromiseWrapper(t), this._adapter = e(this), this._reader = new Zd, this.set("status", "idle"), this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0), this.set("uploadResponse", null)
            }
            get file() {
                return this._filePromiseWrapper ? this._filePromiseWrapper.promise.then(t => this._filePromiseWrapper ? t : null) : Promise.resolve(null)
            }
            read() {
                if ("idle" != this.status) throw new Gn.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.");
                return this.status = "reading", this._filePromiseWrapper.promise.then(t => this._reader.read(t)).then(t => (this.status = "idle", t)).catch(t => {
                    if ("aborted" === t) throw this.status = "aborted", "aborted";
                    throw this.status = "error", this._reader.error ? this._reader.error : t
                })
            }
            upload() {
                if ("idle" != this.status) throw new Gn.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.");
                return this.status = "uploading", this._filePromiseWrapper.promise.then(() => this._adapter.upload()).then(t => (this.uploadResponse = t, this.status = "idle", t)).catch(t => {
                    if ("aborted" === this.status) throw "aborted";
                    throw this.status = "error", t
                })
            }
            abort() {
                const t = this.status;
                this.status = "aborted", this._filePromiseWrapper.isFulfilled ? "reading" == t ? this._reader.abort() : "uploading" == t && this._adapter.abort && this._adapter.abort() : this._filePromiseWrapper.rejecter("aborted"), this._destroy()
            }
            _destroy() {
                this._filePromiseWrapper = void 0, this._reader = void 0, this._adapter = void 0, this.data = void 0, this.uploadResponse = void 0
            }
            _createFilePromiseWrapper(t) {
                const e = {};
                return e.promise = new Promise((n, i) => {
                    e.resolver = n, e.rejecter = i, e.isFulfilled = !1, t.then(t => {
                        e.isFulfilled = !0, n(t)
                    }).catch(t => {
                        e.isFulfilled = !0, i(t)
                    })
                }), e
            }
        }
        ci(tu, Fi);
        const eu = "ckCsrfToken",
            nu = 40,
            iu = "abcdefghijklmnopqrstuvwxyz0123456789";

        function ou() {
            let t = function(t) {
                t = t.toLowerCase();
                const e = document.cookie.split(";");
                for (const n of e) {
                    const e = n.split("="),
                        i = decodeURIComponent(e[0].trim().toLowerCase());
                    if (i === t) return decodeURIComponent(e[1])
                }
                return null
            }(eu);
            return t && t.length == nu || (t = function(t) {
                let e = "";
                const n = new Uint8Array(t);
                window.crypto.getRandomValues(n);
                for (let t = 0; t < n.length; t++) {
                    const i = iu.charAt(n[t] % iu.length);
                    e += Math.random() > .5 ? i.toUpperCase() : i
                }
                return e
            }(nu), function(t, e) {
                document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=/"
            }(eu, t)), t
        }
        class ru extends $l {
            static get requires() {
                return [Xd]
            }
            static get pluginName() {
                return "CKFinderUploadAdapter"
            }
            init() {
                const t = this.editor.config.get("ckfinder.uploadUrl");
                t && (this.editor.plugins.get(Xd).createUploadAdapter = (e => new su(e, t, this.editor.t)))
            }
        }
        class su {
            constructor(t, e, n) {
                this.loader = t, this.url = e, this.t = n
            }
            upload() {
                return this.loader.file.then(t => new Promise((e, n) => {
                    this._initRequest(), this._initListeners(e, n, t), this._sendRequest(t)
                }))
            }
            abort() {
                this.xhr && this.xhr.abort()
            }
            _initRequest() {
                const t = this.xhr = new XMLHttpRequest;
                t.open("POST", this.url, !0), t.responseType = "json"
            }
            _initListeners(t, e, n) {
                const i = this.xhr,
                    o = this.loader,
                    r = (0, this.t)("a") + ` ${n.name}.`;
                i.addEventListener("error", () => e(r)), i.addEventListener("abort", () => e()), i.addEventListener("load", () => {
                    const n = i.response;
                    if (!n || !n.uploaded) return e(n && n.error && n.error.message ? n.error.message : r);
                    t({
                        default: n.url
                    })
                }), i.upload && i.upload.addEventListener("progress", t => {
                    t.lengthComputable && (o.uploadTotal = t.total, o.uploaded = t.loaded)
                })
            }
            _sendRequest(t) {
                const e = new FormData;
                e.append("upload", t), e.append("ckCsrfToken", ou()), this.xhr.send(e)
            }
        }
        class au {
            constructor(t, e, n) {
                let i, o = null;
                "function" == typeof n ? i = n : (o = t.commands.get(n), i = (() => {
                    t.execute(n)
                })), t.model.document.on("change", (n, r) => {
                    if (o && !o.isEnabled) return;
                    if ("transparent" == r.type) return;
                    const s = Array.from(t.model.document.differ.getChanges()),
                        a = s[0];
                    if (1 != s.length || "insert" !== a.type || "$text" != a.name || 1 != a.length) return;
                    const c = a.position.textNode || a.position.nodeAfter;
                    if (!c.parent.is("paragraph")) return;
                    const l = e.exec(c.data);
                    l && t.model.enqueueChange(t => {
                        const e = t.createPositionAt(c.parent, 0),
                            n = t.createPositionAt(c.parent, l[0].length),
                            o = new oa(e, n);
                        !1 !== i({
                            match: l
                        }) && t.remove(o), o.detach()
                    })
                })
            }
        }
        class cu {
            constructor(t, e, n) {
                let i, o, r, s;
                e instanceof RegExp ? i = e : r = e, "string" == typeof n ? o = n : s = n, r = r || (t => {
                    let e;
                    const n = [],
                        o = [];
                    for (; null !== (e = i.exec(t)) && !(e && e.length < 4);) {
                        let {
                            index: t,
                            1: i,
                            2: r,
                            3: s
                        } = e;
                        const a = i + r + s,
                            c = [t += e[0].length - a.length, t + i.length],
                            l = [t + i.length + r.length, t + i.length + r.length + s.length];
                        n.push(c), n.push(l), o.push([t + i.length, t + i.length + r.length])
                    }
                    return {
                        remove: n,
                        format: o
                    }
                }), s = s || ((e, n) => {
                    const i = t.model.schema.getValidRanges(n, o);
                    for (const t of i) e.setAttribute(o, !0, t);
                    e.removeSelectionAttribute(o)
                }), t.model.document.on("change", (e, n) => {
                    if ("transparent" == n.type) return;
                    const i = t.model.document.selection;
                    if (!i.isCollapsed) return;
                    const o = Array.from(t.model.document.differ.getChanges()),
                        a = o[0];
                    if (1 != o.length || "insert" !== a.type || "$text" != a.name || 1 != a.length) return;
                    const c = i.focus.parent,
                        l = function(t) {
                            return Array.from(t.getChildren()).reduce((t, e) => t + e.data, "")
                        }(c).slice(0, i.focus.offset),
                        d = r(l),
                        u = lu(c, d.format, t.model),
                        h = lu(c, d.remove, t.model);
                    u.length && h.length && t.model.enqueueChange(t => {
                        if (!1 !== s(t, u))
                            for (const e of h.reverse()) t.remove(e)
                    })
                })
            }
        }

        function lu(t, e, n) {
            return e.filter(t => void 0 !== t[0] && void 0 !== t[1]).map(e => n.createRange(n.createPositionAt(t, e[0]), n.createPositionAt(t, e[1])))
        }

        function du(t, e) {
            return (n, i) => {
                if (!t.commands.get(e).isEnabled) return !1;
                const o = t.model.schema.getValidRanges(i, e);
                for (const t of o) n.setAttribute(e, !0, t);
                n.removeSelectionAttribute(e)
            }
        }
        class uu extends Zl {
            constructor(t, e) {
                super(t), this.attributeKey = e
            }
            refresh() {
                const t = this.editor.model,
                    e = t.document;
                this.value = this._getValueFromFirstAllowedNode(), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, this.attributeKey)
            }
            execute(t = {}) {
                const e = this.editor.model,
                    n = e.document.selection,
                    i = void 0 === t.forceValue ? !this.value : t.forceValue;
                e.change(t => {
                    if (n.isCollapsed) i ? t.setSelectionAttribute(this.attributeKey, !0) : t.removeSelectionAttribute(this.attributeKey);
                    else {
                        const o = e.schema.getValidRanges(n.getRanges(), this.attributeKey);
                        for (const e of o) i ? t.setAttribute(this.attributeKey, i, e) : t.removeAttribute(this.attributeKey, e)
                    }
                })
            }
            _getValueFromFirstAllowedNode() {
                const t = this.editor.model,
                    e = t.schema,
                    n = t.document.selection;
                if (n.isCollapsed) return n.hasAttribute(this.attributeKey);
                for (const t of n.getRanges())
                    for (const n of t.getItems())
                        if (e.checkAttribute(n, this.attributeKey)) return n.hasAttribute(this.attributeKey);
                return !1
            }
        }
        const hu = "bold";
        class fu extends $l {
            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {
                    allowAttributes: hu
                }), t.conversion.attributeToElement({
                    model: hu,
                    view: "strong",
                    upcastAlso: ["b", {
                        styles: {
                            "font-weight": "bold"
                        }
                    }]
                }), t.commands.add(hu, new uu(t, hu)), t.keystrokes.set("CTRL+B", hu)
            }
        }
        var mu = n(22),
            pu = n.n(mu);
        const gu = "bold";
        class bu extends $l {
            init() {
                const t = this.editor,
                    e = t.t;
                t.ui.componentFactory.add(gu, n => {
                    const i = t.commands.get(gu),
                        o = new qd(n);
                    return o.set({
                        label: e("b"),
                        icon: pu.a,
                        keystroke: "CTRL+B",
                        tooltip: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(gu)), o
                })
            }
        }
        const wu = "italic";
        class _u extends $l {
            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {
                    allowAttributes: wu
                }), t.conversion.attributeToElement({
                    model: wu,
                    view: "i",
                    upcastAlso: ["em", {
                        styles: {
                            "font-style": "italic"
                        }
                    }]
                }), t.commands.add(wu, new uu(t, wu)), t.keystrokes.set("CTRL+I", wu)
            }
        }
        var ku = n(23),
            vu = n.n(ku);
        const yu = "italic";
        class xu extends $l {
            init() {
                const t = this.editor,
                    e = t.t;
                t.ui.componentFactory.add(yu, n => {
                    const i = t.commands.get(yu),
                        o = new qd(n);
                    return o.set({
                        label: e("d"),
                        icon: vu.a,
                        keystroke: "CTRL+I",
                        tooltip: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(yu)), o
                })
            }
        }

        function Au(t) {
            const e = t.next();
            return e.done ? null : e.value
        }
        class Cu extends Zl {
            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }
            execute() {
                const t = this.editor.model,
                    e = t.schema,
                    n = t.document.selection,
                    i = Array.from(n.getTopMostBlocks());
                t.change(t => {
                    if (this.value) this._removeQuote(t, i.filter(Tu));
                    else {
                        const n = i.filter(t => Tu(t) || Mu(e, t));
                        this._applyQuote(t, n)
                    }
                })
            }
            _getValue() {
                const t = Au(this.editor.model.document.selection.getTopMostBlocks());
                return !(!t || !Tu(t))
            }
            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection,
                    e = this.editor.model.schema,
                    n = Au(t.getSelectedBlocks());
                return !!n && Mu(e, n)
            }
            _removeQuote(t, e) {
                Pu(t, e).reverse().forEach(e => {
                    if (e.start.isAtStart && e.end.isAtEnd) return void t.unwrap(e.start.parent);
                    if (e.start.isAtStart) {
                        const n = t.createPositionBefore(e.start.parent);
                        return void t.move(e, n)
                    }
                    e.end.isAtEnd || t.split(e.end);
                    const n = t.createPositionAfter(e.end.parent);
                    t.move(e, n)
                })
            }
            _applyQuote(t, e) {
                const n = [];
                Pu(t, e).reverse().forEach(e => {
                    let i = Tu(e.start);
                    i || (i = t.createElement("blockQuote"), t.wrap(e, i)), n.push(i)
                }), n.reverse().reduce((e, n) => e.nextSibling == n ? (t.merge(t.createPositionAfter(e)), e) : n)
            }
        }

        function Tu(t) {
            return "blockQuote" == t.parent.name ? t.parent : null
        }

        function Pu(t, e) {
            let n, i = 0;
            const o = [];
            for (; i < e.length;) {
                const r = e[i],
                    s = e[i + 1];
                n || (n = t.createPositionBefore(r)), s && r.nextSibling == s || (o.push(t.createRange(n, t.createPositionAfter(r))), n = null), i++
            }
            return o
        }

        function Mu(t, e) {
            const n = t.checkChild(e.parent, "blockQuote"),
                i = t.checkChild(["$root", "blockQuote"], e);
            return n && i
        }
        class Eu extends $l {
            init() {
                const t = this.editor,
                    e = t.model.schema;
                t.commands.add("blockQuote", new Cu(t)), e.register("blockQuote", {
                    allowWhere: "$block",
                    allowContentOf: "$root"
                }), e.addChildCheck((t, e) => {
                    if (t.endsWith("blockQuote") && "blockQuote" == e.name) return !1
                }), t.conversion.elementToElement({
                    model: "blockQuote",
                    view: "blockquote"
                }), t.model.document.registerPostFixer(n => {
                    const i = t.model.document.differ.getChanges();
                    for (const t of i)
                        if ("insert" == t.type) {
                            const i = t.position.nodeAfter;
                            if (!i) continue;
                            if (i.is("blockQuote") && i.isEmpty) return n.remove(i), !0;
                            if (i.is("blockQuote") && !e.checkChild(t.position, i)) return n.unwrap(i), !0;
                            if (i.is("element")) {
                                const t = n.createRangeIn(i);
                                for (const i of t.getItems())
                                    if (i.is("blockQuote") && !e.checkChild(n.createPositionBefore(i), i)) return n.unwrap(i), !0
                            }
                        } else if ("remove" == t.type) {
                        const e = t.position.parent;
                        if (e.is("blockQuote") && e.isEmpty) return n.remove(e), !0
                    }
                    return !1
                })
            }
            afterInit() {
                const t = this.editor.commands.get("blockQuote");
                this.listenTo(this.editor.editing.view.document, "enter", (e, n) => {
                    const i = this.editor.model.document,
                        o = i.selection.getLastPosition().parent;
                    i.selection.isCollapsed && o.isEmpty && t.value && (this.editor.execute("blockQuote"), this.editor.editing.view.scrollToTheSelection(), n.preventDefault(), e.stop())
                })
            }
        }
        var Su = n(24),
            Iu = n.n(Su);
        n(64);
        class Nu extends $l {
            init() {
                const t = this.editor,
                    e = t.t;
                t.ui.componentFactory.add("blockQuote", n => {
                    const i = t.commands.get("blockQuote"),
                        o = new qd(n);
                    return o.set({
                        label: e("c"),
                        icon: Iu.a,
                        tooltip: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute("blockQuote")), o
                })
            }
        }
        var Ou = n(25),
            Ru = n.n(Ou);
        class Du extends $l {
            static get pluginName() {
                return "CKFinderUI"
            }
            init() {
                const t = this.editor,
                    e = t.ui.componentFactory,
                    n = t.t;
                e.add("ckfinder", e => {
                    const i = t.commands.get("ckfinder"),
                        o = new qd(e);
                    return o.set({
                        label: n("h"),
                        icon: Ru.a,
                        tooltip: !0
                    }), o.bind("isEnabled").to(i), o.on("execute", () => {
                        t.execute("ckfinder"), t.editing.view.focus()
                    }), o
                })
            }
        }
        class Lu extends $l {
            static get pluginName() {
                return "Notification"
            }
            init() {
                this.on("show:warning", (t, e) => {
                    window.alert(e.message)
                }, {
                    priority: "lowest"
                })
            }
            showSuccess(t, e = {}) {
                this._showNotification({
                    message: t,
                    type: "success",
                    namespace: e.namespace,
                    title: e.title
                })
            }
            showInfo(t, e = {}) {
                this._showNotification({
                    message: t,
                    type: "info",
                    namespace: e.namespace,
                    title: e.title
                })
            }
            showWarning(t, e = {}) {
                this._showNotification({
                    message: t,
                    type: "warning",
                    namespace: e.namespace,
                    title: e.title
                })
            }
            _showNotification(t) {
                const e = `show:${t.type}` + (t.namespace ? `:${t.namespace}` : "");
                this.fire(e, {
                    message: t.message,
                    type: t.type,
                    title: t.title || ""
                })
            }
        }
        class ju extends Zl {
            constructor(t) {
                super(t), this.stopListening(this.editor.model.document, "change"), this.listenTo(this.editor.model.document, "change", () => this.refresh(), {
                    priority: "low"
                })
            }
            refresh() {
                const t = this.editor.commands.get("imageUpload"),
                    e = this.editor.commands.get("link");
                this.isEnabled = t && e && (t.isEnabled || e.isEnabled)
            }
            execute() {
                const t = this.editor,
                    e = this.editor.config.get("ckfinder.openerMethod") || "modal";
                if ("popup" != e && "modal" != e) throw new Gn.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".');
                const n = this.editor.config.get("ckfinder.options") || {};
                n.chooseFiles = !0;
                const i = n.onInit;
                n.language || (n.language = t.locale.language), n.onInit = (e => {
                    i && i(), e.on("files:choose", n => {
                        const i = n.data.files.toArray(),
                            o = i.filter(t => !t.isImage()),
                            r = i.filter(t => t.isImage());
                        for (const e of o) t.execute("link", e.getUrl());
                        const s = [];
                        for (const t of r) {
                            const n = t.getUrl();
                            s.push(n || e.request("file:getProxyUrl", {
                                file: t
                            }))
                        }
                        s.length && Vu(t, s)
                    }), e.on("file:choose:resizedImage", e => {
                        const n = e.data.resizedUrl;
                        if (n) Vu(t, [n]);
                        else {
                            const e = t.plugins.get("Notification"),
                                n = t.locale.t;
                            e.showWarning(n("be"), {
                                title: n("bf"),
                                namespace: "ckfinder"
                            })
                        }
                    })
                }), window.CKFinder[e](n)
            }
        }

        function Vu(t, e) {
            if (t.commands.get("imageUpload").isEnabled) t.execute("imageInsert", {
                source: e
            });
            else {
                const e = t.plugins.get("Notification"),
                    n = t.locale.t;
                e.showWarning(n("bg"), {
                    title: n("bh"),
                    namespace: "ckfinder"
                })
            }
        }
        class Bu extends $l {
            static get pluginName() {
                return "CKFinderEditing"
            }
            static get requires() {
                return [Lu]
            }
            init() {
                const t = this.editor;
                t.commands.add("ckfinder", new ju(t))
            }
        }
        const zu = /^data:(\S*?);base64,/;
        class Fu {
            constructor(t, e, n) {
                if (!t) throw new Error("File must be provided");
                if (!e) throw new Error("Token must be provided");
                if (!n) throw new Error("Api address must be provided");
                this.file = function(t) {
                    if ("string" != typeof t) return !1;
                    const e = t.match(zu);
                    return !(!e || !e.length)
                }(t) ? function(t, e = 512) {
                    try {
                        const n = t.match(zu)[1],
                            i = atob(t.replace(zu, "")),
                            o = [];
                        for (let t = 0; t < i.length; t += e) {
                            const n = i.slice(t, t + e),
                                r = new Array(n.length);
                            for (let t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
                            o.push(new Uint8Array(r))
                        }
                        return new Blob(o, {
                            type: n
                        })
                    } catch (t) {
                        throw new Error("Problem with decoding Base64 image data.")
                    }
                }(t) : t, this._token = e, this._apiAddress = n
            }
            onProgress(t) {
                return this.on("progress", (e, n) => t(n)), this
            }
            onError(t) {
                return this.once("error", (e, n) => t(n)), this
            }
            abort() {
                this.xhr.abort()
            }
            send() {
                return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
            }
            _prepareRequest() {
                const t = new XMLHttpRequest;
                t.open("POST", this._apiAddress), t.setRequestHeader("Authorization", this._token.value), t.responseType = "json", this.xhr = t
            }
            _attachXHRListeners() {
                const t = this,
                    e = this.xhr;

                function n(e) {
                    return () => t.fire("error", e)
                }
                e.addEventListener("error", n("Network Error")), e.addEventListener("abort", n("Abort")), e.upload && e.upload.addEventListener("progress", t => {
                    t.lengthComputable && this.fire("progress", {
                        total: t.total,
                        uploaded: t.loaded
                    })
                }), e.addEventListener("load", () => {
                    const t = e.status,
                        n = e.response;
                    if (t < 200 || t > 299) return this.fire("error", n.message || n.error)
                })
            }
            _sendRequest() {
                const t = new FormData,
                    e = this.xhr;
                return t.append("file", this.file), new Promise((n, i) => {
                    e.addEventListener("load", () => {
                        const t = e.status,
                            o = e.response;
                        return t < 200 || t > 299 ? o.message ? i(new Error(o.message)) : i(o.error) : n(o)
                    }), e.addEventListener("error", () => i(new Error("Network Error"))), e.addEventListener("abort", () => i(new Error("Abort"))), e.send(t)
                })
            }
        }
        ci(Fu, ei);
        var Uu = Fu;
        const Hu = {
            refreshInterval: 36e5,
            autoRefresh: !0
        };
        class qu {
            constructor(t, e = Hu) {
                if (!t) throw new Error("A `tokenUrl` must be provided as the first constructor argument.");
                this.set("value", e.initValue), this._refresh = "function" == typeof t ? t : () => (function(t) {
                    return new Promise((e, n) => {
                        const i = new XMLHttpRequest;
                        i.open("GET", t), i.addEventListener("load", () => {
                            const t = i.status,
                                o = i.response;
                            return t < 200 || t > 299 ? n(new Error("Cannot download new token!")) : e(o)
                        }), i.addEventListener("error", () => n(new Error("Network Error"))), i.addEventListener("abort", () => n(new Error("Abort"))), i.send()
                    })
                })(t), this._options = Object.assign({}, Hu, e)
            }
            init() {
                return new Promise((t, e) => {
                    this._options.autoRefresh && this._startRefreshing(), this.value ? t(this) : this._refreshToken().then(t).catch(e)
                })
            }
            _refreshToken() {
                return this._refresh().then(t => this.set("value", t)).then(() => this)
            }
            destroy() {
                this._stopRefreshing()
            }
            _startRefreshing() {
                this._refreshInterval = setInterval(() => this._refreshToken(), this._options.refreshInterval)
            }
            _stopRefreshing() {
                clearInterval(this._refreshInterval)
            }
            static create(t, e = Hu) {
                return new qu(t, e).init()
            }
        }
        ci(qu, Fi);
        var Wu = qu;
        class Yu extends $l {
            static get pluginName() {
                return "CloudServices"
            }
            init() {
                const t = this.editor.config.get("cloudServices") || {};
                for (const e in t) this[e] = t[e];
                if (this.tokenUrl) return this.token = new Yu.Token(this.tokenUrl), this.token.init();
                this.token = null
            }
        }
        Yu.Token = Wu;
        class $u extends $l {
            static get requires() {
                return [Xd, Yu]
            }
            init() {
                const t = this.editor,
                    e = t.plugins.get(Yu),
                    n = e.token,
                    i = e.uploadUrl;
                n && (this._uploadGateway = new $u._UploadGateway(n, i), t.plugins.get(Xd).createUploadAdapter = (t => new Gu(this._uploadGateway, t)))
            }
        }
        class Gu {
            constructor(t, e) {
                this.uploadGateway = t, this.loader = e
            }
            upload() {
                return this.loader.file.then(t => (this.fileUploader = this.uploadGateway.upload(t), this.fileUploader.on("progress", (t, e) => {
                    this.loader.uploadTotal = e.total, this.loader.uploaded = e.uploaded
                }), this.fileUploader.send()))
            }
            abort() {
                this.fileUploader.abort()
            }
        }
        $u._UploadGateway = class {
            constructor(t, e) {
                if (!t) throw new Error("Token must be provided");
                if (!e) throw new Error("Api address must be provided");
                this._token = t, this._apiAddress = e
            }
            upload(t) {
                return new Uu(t, this._token, this._apiAddress)
            }
        };
        class Qu extends hr {
            constructor(t) {
                super(t), this._observedElements = new Set
            }
            observe(t, e) {
                this.document.getRoot(e).on("change:children", (e, n) => {
                    this.view.once("render", () => this._updateObservedElements(t, n))
                })
            }
            _updateObservedElements(t, e) {
                if (!e.is("element") || e.is("attributeElement")) return;
                const n = this.view.domConverter.mapViewToDom(e);
                if (n) {
                    for (const t of n.querySelectorAll("img")) this._observedElements.has(t) || (this.listenTo(t, "load", (t, e) => this._fireEvents(e)), this._observedElements.add(t));
                    for (const e of this._observedElements) t.contains(e) || (this.stopListening(e), this._observedElements.delete(e))
                }
            }
            _fireEvents(t) {
                this.isEnabled && (this.document.fire("layoutChanged"), this.document.fire("imageLoaded", t))
            }
            destroy() {
                this._observedElements.clear(), super.destroy()
            }
        }

        function Ju(t) {
            return n => {
                n.on(`attribute:${t}:image`, e)
            };

            function e(t, e, n) {
                if (!n.consumable.consume(e.item, t.name)) return;
                const i = n.writer,
                    o = n.mapper.toViewElement(e.item).getChild(0);
                null !== e.attributeNewValue ? i.setAttribute(e.attributeKey, e.attributeNewValue, o) : i.removeAttribute(e.attributeKey, o)
            }
        }
        class Ku {
            constructor() {
                this._stack = []
            }
            add(t, e) {
                const n = this._stack,
                    i = n[0];
                this._insertDescriptor(t);
                const o = n[0];
                i === o || Zu(i, o) || this.fire("change:top", {
                    oldDescriptor: i,
                    newDescriptor: o,
                    writer: e
                })
            }
            remove(t, e) {
                const n = this._stack,
                    i = n[0];
                this._removeDescriptor(t);
                const o = n[0];
                i === o || Zu(i, o) || this.fire("change:top", {
                    oldDescriptor: i,
                    newDescriptor: o,
                    writer: e
                })
            }
            _insertDescriptor(t) {
                const e = this._stack,
                    n = e.findIndex(e => e.id === t.id);
                if (Zu(t, e[n])) return;
                n > -1 && e.splice(n, 1);
                let i = 0;
                for (; e[i] && Xu(e[i], t);) i++;
                e.splice(i, 0, t)
            }
            _removeDescriptor(t) {
                const e = this._stack,
                    n = e.findIndex(e => e.id === t);
                n > -1 && e.splice(n, 1)
            }
        }

        function Zu(t, e) {
            return t && e && t.priority == e.priority && th(t.classes) == th(e.classes)
        }

        function Xu(t, e) {
            return t.priority > e.priority || !(t.priority < e.priority) && th(t.classes) > th(e.classes)
        }

        function th(t) {
            return Array.isArray(t) ? t.sort().join(",") : t
        }
        ci(Ku, ei);
        var eh = n(26),
            nh = n.n(eh);
        const ih = "ck-widget",
            oh = "ck-widget_selected";

        function rh(t) {
            return !!t.is("element") && !!t.getCustomProperty("widget")
        }

        function sh(t, e, n = {}) {
            return mo.isEdge || e.setAttribute("contenteditable", "false", t), e.addClass(ih, t), e.setCustomProperty("widget", !0, t), t.getFillerOffset = dh, n.label && function(t, e, n) {
                    n.setCustomProperty("widgetLabel", e, t)
                }(t, n.label, e), n.hasSelectionHandler && function(t, e) {
                    const n = e.createUIElement("div", {
                        class: "ck ck-widget__selection-handler"
                    }, function(t) {
                        const e = this.toDomElement(t),
                            n = new Ud;
                        return n.set("content", nh.a), n.render(), e.appendChild(n.element), e
                    });
                    e.insert(e.createPositionAt(t, 0), n), e.addClass(["ck-widget_with-selection-handler"], t)
                }(t, e),
                function(t, e, n, i) {
                    const o = new Ku;
                    o.on("change:top", (e, o) => {
                        o.oldDescriptor && i(t, o.oldDescriptor, o.writer), o.newDescriptor && n(t, o.newDescriptor, o.writer)
                    }), e.setCustomProperty("addHighlight", (t, e, n) => o.add(e, n), t), e.setCustomProperty("removeHighlight", (t, e, n) => o.remove(e, n), t)
                }(t, e, (t, e, n) => n.addClass(i(e.classes), t), (t, e, n) => n.removeClass(i(e.classes), t)), t;

            function i(t) {
                return Array.isArray(t) ? t : [t]
            }
        }

        function ah(t) {
            const e = t.getCustomProperty("widgetLabel");
            return e ? "function" == typeof e ? e() : e : ""
        }

        function ch(t, e) {
            return e.addClass(["ck-editor__editable", "ck-editor__nested-editable"], t), mo.isEdge || (e.setAttribute("contenteditable", t.isReadOnly ? "false" : "true", t), t.on("change:isReadOnly", (n, i, o) => {
                e.setAttribute("contenteditable", o ? "false" : "true", t)
            })), t.on("change:isFocused", (n, i, o) => {
                o ? e.addClass("ck-editor__nested-editable_focused", t) : e.removeClass("ck-editor__nested-editable_focused", t)
            }), t
        }

        function lh(t, e) {
            const n = t.getSelectedElement();
            if (n && e.schema.isBlock(n)) return e.createPositionAfter(n);
            const i = t.getSelectedBlocks().next().value;
            if (i) {
                if (i.isEmpty) return e.createPositionAt(i, 0);
                const n = e.createPositionAfter(i);
                return t.focus.isTouching(n) ? n : e.createPositionBefore(i)
            }
            return t.focus
        }

        function dh() {
            return null
        }

        function uh(t) {
            const e = t.getSelectedElement();
            return e && function(t) {
                return !!t.getCustomProperty("image") && rh(t)
            }(e) ? e : null
        }

        function hh(t) {
            return !!t && t.is("image")
        }

        function fh(t, e, n = {}) {
            const i = t.createElement("image", n),
                o = lh(e.document.selection, e);
            e.insertContent(i, o), i.parent && t.setSelection(i, "on")
        }

        function mh(t) {
            const e = t.schema,
                n = t.document.selection;
            return function(t, e, n) {
                const i = function(t, e) {
                    const n = lh(t, e).parent;
                    if (n.isEmpty && !n.is("$root")) return n.parent;
                    return n
                }(t, n);
                return e.checkChild(i, "image")
            }(n, e, t) && ! function(t, e) {
                const n = t.getSelectedElement();
                return n && e.isObject(n)
            }(n, e) && function(t) {
                return [...t.focus.getAncestors()].every(t => !t.is("image"))
            }(n)
        }
        class ph extends Zl {
            refresh() {
                this.isEnabled = mh(this.editor.model)
            }
            execute(t) {
                const e = this.editor.model;
                e.change(n => {
                    const i = Array.isArray(t.source) ? t.source : [t.source];
                    for (const t of i) fh(n, e, {
                        src: t
                    })
                })
            }
        }
        class gh extends $l {
            init() {
                const t = this.editor,
                    e = t.model.schema,
                    n = t.t,
                    i = t.conversion;
                t.editing.view.addObserver(Qu), e.register("image", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["alt", "src", "srcset"]
                }), i.for("dataDowncast").elementToElement({
                    model: "image",
                    view: (t, e) => bh(e)
                }), i.for("editingDowncast").elementToElement({
                    model: "image",
                    view: (t, e) => (function(t, e, n) {
                        return e.setCustomProperty("image", !0, t), sh(t, e, {
                            label: function() {
                                const e = t.getChild(0).getAttribute("alt");
                                return e ? `${e} ${n}` : n
                            }
                        })
                    })(bh(e), e, n("e"))
                }), i.for("downcast").add(Ju("src")).add(Ju("alt")).add(function() {
                    return e => {
                        e.on("attribute:srcset:image", t)
                    };

                    function t(t, e, n) {
                        if (!n.consumable.consume(e.item, t.name)) return;
                        const i = n.writer,
                            o = n.mapper.toViewElement(e.item).getChild(0);
                        if (null === e.attributeNewValue) {
                            const t = e.attributeOldValue;
                            t.data && (i.removeAttribute("srcset", o), i.removeAttribute("sizes", o), t.width && i.removeAttribute("width", o))
                        } else {
                            const t = e.attributeNewValue;
                            t.data && (i.setAttribute("srcset", t.data, o), i.setAttribute("sizes", "100vw", o), t.width && i.setAttribute("width", t.width, o))
                        }
                    }
                }()), i.for("upcast").elementToElement({
                    view: {
                        name: "img",
                        attributes: {
                            src: !0
                        }
                    },
                    model: (t, e) => e.createElement("image", {
                        src: t.getAttribute("src")
                    })
                }).attributeToAttribute({
                    view: {
                        name: "img",
                        key: "alt"
                    },
                    model: "alt"
                }).attributeToAttribute({
                    view: {
                        name: "img",
                        key: "srcset"
                    },
                    model: {
                        key: "srcset",
                        value: t => {
                            const e = {
                                data: t.getAttribute("srcset")
                            };
                            return t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
                        }
                    }
                }).add(function() {
                    return e => {
                        e.on("element:figure", t)
                    };

                    function t(t, e, n) {
                        if (!n.consumable.test(e.viewItem, {
                                name: !0,
                                classes: "image"
                            })) return;
                        const i = Array.from(e.viewItem.getChildren()).find(t => t.is("img"));
                        if (!i || !i.hasAttribute("src") || !n.consumable.test(i, {
                                name: !0
                            })) return;
                        const o = n.convertItem(i, e.modelCursor),
                            r = Au(o.modelRange.getItems());
                        r && (n.convertChildren(e.viewItem, n.writer.createPositionAt(r, 0)), e.modelRange = o.modelRange, e.modelCursor = o.modelCursor)
                    }
                }()), t.commands.add("imageInsert", new ph(t))
            }
        }

        function bh(t) {
            const e = t.createEmptyElement("img"),
                n = t.createContainerElement("figure", {
                    class: "image"
                });
            return t.insert(t.createPositionAt(n, 0), e), n
        }
        class wh extends ts {
            constructor(t) {
                super(t), this.domEventType = "mousedown"
            }
            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }
        n(66);
        const _h = _o("Ctrl+A");
        class kh extends $l {
            static get pluginName() {
                return "Widget"
            }
            init() {
                const t = this.editor.editing.view,
                    e = t.document;
                this._previouslySelected = new Set, this.editor.editing.downcastDispatcher.on("selection", (t, e, n) => {
                    this._clearPreviouslySelectedWidgets(n.writer);
                    const i = n.writer,
                        o = i.document.selection,
                        r = o.getSelectedElement();
                    let s = null;
                    for (const t of o.getRanges())
                        for (const e of t) {
                            const t = e.item;
                            rh(t) && !vh(t, s) && (i.addClass(oh, t), this._previouslySelected.add(t), s = t, t == r && i.setSelection(o.getRanges(), {
                                fake: !0,
                                label: ah(r)
                            }))
                        }
                }, {
                    priority: "low"
                }), t.addObserver(wh), this.listenTo(e, "mousedown", (...t) => this._onMousedown(...t)), this.listenTo(e, "keydown", (...t) => this._onKeydown(...t), {
                    priority: "high"
                }), this.listenTo(e, "delete", (t, e) => {
                    this._handleDelete("forward" == e.direction) && (e.preventDefault(), t.stop())
                }, {
                    priority: "high"
                })
            }
            _onMousedown(t, e) {
                const n = this.editor,
                    i = n.editing.view,
                    o = i.document;
                let r = e.target;
                if (function(t) {
                        for (; t;) {
                            if (t.is("editableElement") && !t.is("rootElement")) return !0;
                            if (rh(t)) return !1;
                            t = t.parent
                        }
                        return !1
                    }(r)) return;
                if (!rh(r) && !(r = r.findAncestor(rh))) return;
                e.preventDefault(), o.isFocused || i.focus();
                const s = n.editing.mapper.toModelElement(r);
                this._setSelectionOverElement(s)
            }
            _onKeydown(t, e) {
                const n = e.keyCode,
                    i = n == bo.arrowdown || n == bo.arrowright;
                let o = !1;
                ! function(t) {
                    return t == bo.arrowright || t == bo.arrowleft || t == bo.arrowup || t == bo.arrowdown
                }(n) ? ! function(t) {
                    return wo(t) == _h
                }(e) ? n === bo.enter && (o = this._handleEnterKey(e.shiftKey)): o = this._selectAllNestedEditableContent() || this._selectAllContent(): o = this._handleArrowKeys(i), o && (e.preventDefault(), t.stop())
            }
            _handleDelete(t) {
                if (this.editor.isReadOnly) return;
                const e = this.editor.model.document.selection;
                if (!e.isCollapsed) return;
                const n = this._getObjectElementNextToSelection(t);
                return n ? (this.editor.model.change(t => {
                    let i = e.anchor.parent;
                    for (; i.isEmpty;) {
                        const e = i;
                        i = e.parent, t.remove(e)
                    }
                    this._setSelectionOverElement(n)
                }), !0) : void 0
            }
            _handleArrowKeys(t) {
                const e = this.editor.model,
                    n = e.schema,
                    i = e.document.selection,
                    o = i.getSelectedElement();
                if (o && n.isObject(o)) {
                    const o = t ? i.getLastPosition() : i.getFirstPosition(),
                        r = n.getNearestSelectionRange(o, t ? "forward" : "backward");
                    return r && e.change(t => {
                        t.setSelection(r)
                    }), !0
                }
                if (!i.isCollapsed) return;
                const r = this._getObjectElementNextToSelection(t);
                return r && n.isObject(r) ? (this._setSelectionOverElement(r), !0) : void 0
            }
            _handleEnterKey(t) {
                const e = this.editor.model,
                    n = e.document.selection.getSelectedElement();
                if (function(t, e) {
                        return t && e.isObject(t) && !e.isInline(t)
                    }(n, e.schema)) return e.change(i => {
                    let o = i.createPositionAt(n, t ? "before" : "after");
                    const r = i.createElement("paragraph");
                    if (e.schema.isBlock(n.parent)) {
                        const t = e.schema.findAllowedParent(o, r);
                        o = i.split(o, t).position
                    }
                    i.insert(r, o), i.setSelection(r, "in")
                }), !0
            }
            _selectAllNestedEditableContent() {
                const t = this.editor.model,
                    e = t.document.selection,
                    n = t.schema.getLimitElement(e);
                return e.getFirstRange().root != n && (t.change(t => {
                    t.setSelection(t.createRangeIn(n))
                }), !0)
            }
            _selectAllContent() {
                const t = this.editor.model,
                    e = this.editor.editing,
                    n = e.view.document.selection.getSelectedElement();
                if (n && rh(n)) {
                    const i = e.mapper.toModelElement(n.parent);
                    return t.change(t => {
                        t.setSelection(t.createRangeIn(i))
                    }), !0
                }
                return !1
            }
            _setSelectionOverElement(t) {
                this.editor.model.change(e => {
                    e.setSelection(e.createRangeOn(t))
                })
            }
            _getObjectElementNextToSelection(t) {
                const e = this.editor.model,
                    n = e.schema,
                    i = e.document.selection,
                    o = e.createSelection(i);
                e.modifySelection(o, {
                    direction: t ? "forward" : "backward"
                });
                const r = t ? o.focus.nodeBefore : o.focus.nodeAfter;
                return r && n.isObject(r) ? r : null
            }
            _clearPreviouslySelectedWidgets(t) {
                for (const e of this._previouslySelected) t.removeClass(oh, e);
                this._previouslySelected.clear()
            }
        }

        function vh(t, e) {
            return !!e && Array.from(t.getAncestors()).includes(e)
        }
        class yh extends Zl {
            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                this.isEnabled = hh(t), hh(t) && t.hasAttribute("alt") ? this.value = t.getAttribute("alt") : this.value = !1
            }
            execute(t) {
                const e = this.editor.model,
                    n = e.document.selection.getSelectedElement();
                e.change(e => {
                    e.setAttribute("alt", t.newValue, n)
                })
            }
        }
        class xh extends $l {
            init() {
                this.editor.commands.add("imageTextAlternative", new yh(this.editor))
            }
        }

        function Ah({
            emitter: t,
            activator: e,
            callback: n,
            contextElements: i
        }) {
            t.listenTo(document, "mousedown", (t, {
                target: o
            }) => {
                if (e()) {
                    for (const t of i)
                        if (t.contains(o)) return;
                    n()
                }
            })
        }
        n(68);
        class Ch extends Nl {
            constructor(t, e) {
                super(t);
                const n = `ck-input-${Kn()}`,
                    i = `ck-status-${Kn()}`;
                this.set("label"), this.set("value"), this.set("isReadOnly", !1), this.set("errorText", null), this.set("infoText", null), this.labelView = this._createLabelView(n), this.inputView = this._createInputView(e, n, i), this.statusView = this._createStatusView(i), this.bind("_statusText").to(this, "errorText", this, "infoText", (t, e) => t || e);
                const o = this.bindTemplate;
                this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-labeled-input", o.if("isReadOnly", "ck-disabled")]
                    },
                    children: [this.labelView, this.inputView, this.statusView]
                })
            }
            _createLabelView(t) {
                const e = new Rl(this.locale);
                return e.for = t, e.bind("text").to(this, "label"), e
            }
            _createInputView(t, e, n) {
                const i = new t(this.locale, n);
                return i.id = e, i.ariaDesribedById = n, i.bind("value").to(this), i.bind("isReadOnly").to(this), i.bind("hasError").to(this, "errorText", t => !!t), i.on("input", () => {
                    this.errorText = null
                }), i
            }
            _createStatusView(t) {
                const e = new Nl(this.locale),
                    n = this.bindTemplate;
                return e.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-labeled-input__status", n.if("errorText", "ck-labeled-input__status_error"), n.if("_statusText", "ck-hidden", t => !t)],
                        id: t
                    },
                    children: [{
                        text: n.to("_statusText")
                    }]
                }), e
            }
            select() {
                this.inputView.select()
            }
            focus() {
                this.inputView.focus()
            }
        }
        n(70);
        class Th extends Nl {
            constructor(t) {
                super(t), this.set("value"), this.set("id"), this.set("placeholder"), this.set("isReadOnly", !1), this.set("hasError", !1), this.set("ariaDesribedById");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        type: "text",
                        class: ["ck", "ck-input", "ck-input-text", e.if("hasError", "ck-error")],
                        id: e.to("id"),
                        placeholder: e.to("placeholder"),
                        readonly: e.to("isReadOnly"),
                        "aria-invalid": e.if("hasError", !0),
                        "aria-describedby": e.to("ariaDesribedById")
                    },
                    on: {
                        input: e.to("input")
                    }
                })
            }
            render() {
                super.render();
                const t = t => {
                    this.element.value = t || 0 === t ? t : ""
                };
                t(this.value), this.on("change:value", (e, n, i) => {
                    t(i)
                })
            }
            select() {
                this.element.select()
            }
            focus() {
                this.element.focus()
            }
        }

        function Ph({
            view: t
        }) {
            t.listenTo(t.element, "submit", (e, n) => {
                n.preventDefault(), t.fire("submit")
            }, {
                useCapture: !0
            })
        }
        var Mh = n(7),
            Eh = n.n(Mh),
            Sh = n(8),
            Ih = n.n(Sh);
        n(72);
        class Nh extends Nl {
            constructor(t) {
                super(t);
                const e = this.locale.t;
                this.focusTracker = new il, this.keystrokes = new Gc, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(e("au"), Eh.a, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(e("av"), Ih.a, "ck-button-cancel", "cancel"), this._focusables = new hl, this._focusCycler = new Fl({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: "shift + tab",
                        focusNext: "tab"
                    }
                }), this.setTemplate({
                    tag: "form",
                    attributes: {
                        class: ["ck", "ck-text-alternative-form"],
                        tabindex: "-1"
                    },
                    children: [this.labeledInput, this.saveButtonView, this.cancelButtonView]
                })
            }
            render() {
                super.render(), this.keystrokes.listenTo(this.element), Ph({
                    view: this
                }), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                })
            }
            _createButton(t, e, n, i) {
                const o = new qd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({
                    attributes: {
                        class: n
                    }
                }), i && o.delegate("execute").to(this, i), o
            }
            _createLabeledInputView() {
                const t = this.locale.t,
                    e = new Ch(this.locale, Th);
                return e.label = t("bq"), e.inputView.placeholder = t("bq"), e
            }
        }

        function Oh({
            element: t,
            target: e,
            positions: n,
            limiter: i,
            fitInViewport: o
        }) {
            W(e) && (e = e()), W(i) && (i = i());
            const r = function(t) {
                    for (; t && "html" != t.tagName.toLowerCase();) {
                        if ("static" != nr.window.getComputedStyle(t).position) return t;
                        t = t.parentElement
                    }
                    return null
                }(t.parentElement),
                s = new As(t),
                a = new As(e);
            let c, l;
            if (i || o) {
                const t = i && new As(i).getVisible(),
                    e = o && new As(nr.window);
                [l, c] = function(t, e, n, i, o) {
                    let r, s, a = 0,
                        c = 0;
                    const l = n.getArea();
                    return t.some(t => {
                        const [d, u] = Rh(t, e, n);
                        let h, f;
                        if (i)
                            if (o) {
                                const t = i.getIntersection(o);
                                h = t ? t.getIntersectionArea(u) : 0
                            } else h = i.getIntersectionArea(u);
                        function m() {
                            c = f, a = h, r = u, s = d
                        }
                        return o && (f = o.getIntersectionArea(u)), o && !i ? f > c && m() : !o && i ? h > a && m() : f > c && h >= a ? m() : f >= c && h > a && m(), h === l
                    }), r ? [s, r] : null
                }(n, a, s, t, e) || Rh(n[0], a, s)
            } else [l, c] = Rh(n[0], a, s);
            let {
                left: d,
                top: u
            } = Dh(c);
            if (r) {
                const t = Dh(new As(r)),
                    e = ys(r);
                d -= t.left, u -= t.top, d += r.scrollLeft, u += r.scrollTop, d -= e.left, u -= e.top
            }
            return {
                left: d,
                top: u,
                name: l
            }
        }

        function Rh(t, e, n) {
            const {
                left: i,
                top: o,
                name: r
            } = t(e, n);
            return [r, n.clone().moveTo(i, o)]
        }

        function Dh({
            left: t,
            top: e
        }) {
            const {
                scrollX: n,
                scrollY: i
            } = nr.window;
            return {
                left: t + n,
                top: e + i
            }
        }
        n(74);
        const Lh = Vl("px"),
            jh = nr.document.body;
        class Vh extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("top", 0), this.set("left", 0), this.set("position", "arrow_nw"), this.set("isVisible", !1), this.set("withArrow", !0), this.set("class"), this.content = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-balloon-panel", e.to("position", t => `ck-balloon-panel_${t}`), e.if("isVisible", "ck-balloon-panel_visible"), e.if("withArrow", "ck-balloon-panel_with-arrow"), e.to("class")],
                        style: {
                            top: e.to("top", Lh),
                            left: e.to("left", Lh)
                        }
                    },
                    children: this.content
                })
            }
            show() {
                this.isVisible = !0
            }
            hide() {
                this.isVisible = !1
            }
            attachTo(t) {
                this.show();
                const e = Vh.defaultPositions,
                    n = Object.assign({}, {
                        element: this.element,
                        positions: [e.southArrowNorth, e.southArrowNorthWest, e.southArrowNorthEast, e.northArrowSouth, e.northArrowSouthWest, e.northArrowSouthEast],
                        limiter: jh,
                        fitInViewport: !0
                    }, t),
                    {
                        top: i,
                        left: o,
                        name: r
                    } = Vh._getOptimalPosition(n);
                Object.assign(this, {
                    top: i,
                    left: o,
                    position: r
                })
            }
            pin(t) {
                this.unpin(), this._pinWhenIsVisibleCallback = (() => {
                    this.isVisible ? this._startPinning(t) : this._stopPinning()
                }), this._startPinning(t), this.listenTo(this, "change:isVisible", this._pinWhenIsVisibleCallback)
            }
            unpin() {
                this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, "change:isVisible", this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
            }
            _startPinning(t) {
                this.attachTo(t);
                const e = Bh(t.target),
                    n = t.limiter ? Bh(t.limiter) : jh;
                this.listenTo(nr.document, "scroll", (i, o) => {
                    const r = o.target,
                        s = e && r.contains(e),
                        a = n && r.contains(n);
                    !s && !a && e && n || this.attachTo(t)
                }, {
                    useCapture: !0
                }), this.listenTo(nr.window, "resize", () => {
                    this.attachTo(t)
                })
            }
            _stopPinning() {
                this.stopListening(nr.document, "scroll"), this.stopListening(nr.window, "resize")
            }
        }

        function Bh(t) {
            return Wn(t) ? t : vs(t) ? t.commonAncestorContainer : "function" == typeof t ? Bh(t()) : null
        }

        function zh(t, e) {
            return t.top - e.height - Vh.arrowVerticalOffset
        }

        function Fh(t) {
            return t.bottom + Vh.arrowVerticalOffset
        }
        Vh.arrowHorizontalOffset = 25, Vh.arrowVerticalOffset = 10, Vh._getOptimalPosition = Oh, Vh.defaultPositions = {
            northArrowSouth: (t, e) => ({
                top: zh(t, e),
                left: t.left + t.width / 2 - e.width / 2,
                name: "arrow_s"
            }),
            northArrowSouthEast: (t, e) => ({
                top: zh(t, e),
                left: t.left + t.width / 2 - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northArrowSouthWest: (t, e) => ({
                top: zh(t, e),
                left: t.left + t.width / 2 - Vh.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouth: (t, e) => ({
                top: zh(t, e),
                left: t.left - e.width / 2,
                name: "arrow_s"
            }),
            northWestArrowSouthWest: (t, e) => ({
                top: zh(t, e),
                left: t.left - Vh.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouthEast: (t, e) => ({
                top: zh(t, e),
                left: t.left - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouth: (t, e) => ({
                top: zh(t, e),
                left: t.right - e.width / 2,
                name: "arrow_s"
            }),
            northEastArrowSouthEast: (t, e) => ({
                top: zh(t, e),
                left: t.right - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouthWest: (t, e) => ({
                top: zh(t, e),
                left: t.right - Vh.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            southArrowNorth: (t, e) => ({
                top: Fh(t),
                left: t.left + t.width / 2 - e.width / 2,
                name: "arrow_n"
            }),
            southArrowNorthEast: (t, e) => ({
                top: Fh(t),
                left: t.left + t.width / 2 - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southArrowNorthWest: (t, e) => ({
                top: Fh(t),
                left: t.left + t.width / 2 - Vh.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorth: (t, e) => ({
                top: Fh(t),
                left: t.left - e.width / 2,
                name: "arrow_n"
            }),
            southWestArrowNorthWest: (t, e) => ({
                top: Fh(t),
                left: t.left - Vh.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorthEast: (t, e) => ({
                top: Fh(t),
                left: t.left - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorth: (t, e) => ({
                top: Fh(t),
                left: t.right - e.width / 2,
                name: "arrow_n"
            }),
            southEastArrowNorthEast: (t, e) => ({
                top: Fh(t),
                left: t.right - e.width + Vh.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorthWest: (t, e) => ({
                top: Fh(t),
                left: t.right - Vh.arrowHorizontalOffset,
                name: "arrow_nw"
            })
        };
        class Uh extends $l {
            static get pluginName() {
                return "ContextualBalloon"
            }
            init() {
                this.view = new Vh, this.positionLimiter = (() => {
                    const t = this.editor.editing.view,
                        e = t.document.selection.editableElement;
                    return e ? t.domConverter.mapViewToDom(e.root) : null
                }), this._stack = new Map, this.editor.ui.view.body.add(this.view), this.editor.ui.focusTracker.add(this.view.element)
            }
            get visibleView() {
                const t = this._stack.get(this.view.content.get(0));
                return t ? t.view : null
            }
            hasView(t) {
                return this._stack.has(t)
            }
            add(t) {
                if (this.hasView(t.view)) throw new Gn.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.");
                this.visibleView && this.view.content.remove(this.visibleView), this._stack.set(t.view, t), this._show(t)
            }
            remove(t) {
                if (!this.hasView(t)) throw new Gn.b("contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.");
                if (this.visibleView === t) {
                    this.view.content.remove(t), this._stack.delete(t);
                    const e = Array.from(this._stack.values()).pop();
                    e ? this._show(e) : this.view.hide()
                } else this._stack.delete(t)
            }
            updatePosition(t) {
                t && (this._stack.get(this.visibleView).position = t), this.view.pin(this._getBalloonPosition())
            }
            _show({
                view: t,
                balloonClassName: e = ""
            }) {
                this.view.class = e, this.view.content.add(t), this.view.pin(this._getBalloonPosition())
            }
            _getBalloonPosition() {
                let t = Array.from(this._stack.values()).pop().position;
                return t && !t.limiter && (t = Object.assign({}, t, {
                    limiter: this.positionLimiter
                })), t
            }
        }
        var Hh = n(27),
            qh = n.n(Hh);

        function Wh(t) {
            const e = t.editing.view,
                n = Vh.defaultPositions;
            return {
                target: e.domConverter.viewToDom(e.document.selection.getSelectedElement()),
                positions: [n.northArrowSouth, n.northArrowSouthWest, n.northArrowSouthEast, n.southArrowNorth, n.southArrowNorthWest, n.southArrowNorthEast]
            }
        }
        class Yh extends $l {
            static get requires() {
                return [Uh]
            }
            static get pluginName() {
                return "ImageTextAlternativeUI"
            }
            init() {
                this._createButton(), this._createForm()
            }
            destroy() {
                super.destroy(), this._form.destroy()
            }
            _createButton() {
                const t = this.editor,
                    e = t.t;
                t.ui.componentFactory.add("imageTextAlternative", n => {
                    const i = t.commands.get("imageTextAlternative"),
                        o = new qd(n);
                    return o.set({
                        label: e("bp"),
                        icon: qh.a,
                        tooltip: !0
                    }), o.bind("isEnabled").to(i, "isEnabled"), this.listenTo(o, "execute", () => this._showForm()), o
                })
            }
            _createForm() {
                const t = this.editor,
                    e = t.editing.view.document;
                this._balloon = this.editor.plugins.get("ContextualBalloon"), this._form = new Nh(t.locale), this._form.render(), this.listenTo(this._form, "submit", () => {
                    t.execute("imageTextAlternative", {
                        newValue: this._form.labeledInput.inputView.element.value
                    }), this._hideForm(!0)
                }), this.listenTo(this._form, "cancel", () => {
                    this._hideForm(!0)
                }), this._form.keystrokes.set("Esc", (t, e) => {
                    this._hideForm(!0), e()
                }), this.listenTo(t.ui, "update", () => {
                    uh(e.selection) ? this._isVisible && function(t) {
                        const e = t.plugins.get("ContextualBalloon");
                        if (uh(t.editing.view.document.selection)) {
                            const n = Wh(t);
                            e.updatePosition(n)
                        }
                    }(t) : this._hideForm(!0)
                }), Ah({
                    emitter: this._form,
                    activator: () => this._isVisible,
                    contextElements: [this._form.element],
                    callback: () => this._hideForm()
                })
            }
            _showForm() {
                if (this._isVisible) return;
                const t = this.editor,
                    e = t.commands.get("imageTextAlternative"),
                    n = this._form.labeledInput;
                this._balloon.hasView(this._form) || this._balloon.add({
                    view: this._form,
                    position: Wh(t)
                }), n.value = n.inputView.element.value = e.value || "", this._form.labeledInput.select()
            }
            _hideForm(t) {
                this._isVisible && (this._form.saveButtonView.focus(), this._balloon.remove(this._form), t && this.editor.editing.view.focus())
            }
            get _isVisible() {
                return this._balloon.visibleView == this._form
            }
        }
        class $h extends $l {
            static get requires() {
                return [xh, Yh]
            }
            static get pluginName() {
                return "ImageTextAlternative"
            }
        }
        n(76);
        class Gh extends $l {
            static get requires() {
                return [gh, kh, $h]
            }
            static get pluginName() {
                return "Image"
            }
        }
        class Qh extends Nl {
            constructor(t) {
                super(t), this.buttonView = new qd(t), this._fileInputView = new Jh(t), this._fileInputView.bind("acceptedType").to(this), this._fileInputView.bind("allowMultipleFiles").to(this), this._fileInputView.delegate("done").to(this), this.setTemplate({
                    tag: "span",
                    attributes: {
                        class: "ck-file-dialog-button"
                    },
                    children: [this.buttonView, this._fileInputView]
                }), this.buttonView.on("execute", () => {
                    this._fileInputView.open()
                })
            }
            focus() {
                this.buttonView.focus()
            }
        }
        class Jh extends Nl {
            constructor(t) {
                super(t), this.set("acceptedType"), this.set("allowMultipleFiles", !1);
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        class: ["ck-hidden"],
                        type: "file",
                        tabindex: "-1",
                        accept: e.to("acceptedType"),
                        multiple: e.to("allowMultipleFiles")
                    },
                    on: {
                        change: e.to(() => {
                            this.element && this.element.files && this.element.files.length && this.fire("done", this.element.files), this.element.value = ""
                        })
                    }
                })
            }
            open() {
                this.element.click()
            }
        }
        var Kh = n(28),
            Zh = n.n(Kh);

        function Xh(t) {
            return /^image\/(jpeg|png|gif|bmp)$/.test(t.type)
        }

        function tf(t) {
            return new Promise((e, n) => {
                const i = t.getAttribute("src");
                fetch(i).then(t => t.blob()).then(t => {
                    const o = function(t, e) {
                            return t.type ? t.type : e.match(/data:(image\/\w+);base64/) ? e.match(/data:(image\/\w+);base64/)[1].toLowerCase() : "image/jpeg"
                        }(t, i),
                        r = function(t, e, n) {
                            try {
                                return new File([t], e, {
                                    type: n
                                })
                            } catch (t) {
                                return null
                            }
                        }(t, `image.${o.replace("image/","")}`, o);
                    r ? e(r) : n()
                }).catch(n)
            })
        }
        class ef extends $l {
            init() {
                const t = this.editor,
                    e = t.t;
                t.ui.componentFactory.add("imageUpload", n => {
                    const i = new Qh(n),
                        o = t.commands.get("imageUpload");
                    return i.set({
                        acceptedType: "image/*",
                        allowMultipleFiles: !0
                    }), i.buttonView.set({
                        label: e("n"),
                        icon: Zh.a,
                        tooltip: !0
                    }), i.buttonView.bind("isEnabled").to(o), i.on("done", (e, n) => {
                        const i = Array.from(n).filter(Xh);
                        i.length && t.execute("imageUpload", {
                            file: i
                        })
                    }), i
                })
            }
        }
        var nf = n(29),
            of = n.n(nf);
        n(78), n(80), n(82);
        class rf extends $l {
            constructor(t) {
                super(t), this.placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(of.a)
            }
            init() {
                this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image", (...t) => this.uploadStatusChange(...t))
            }
            uploadStatusChange(t, e, n) {
                const i = this.editor,
                    o = e.item,
                    r = o.getAttribute("uploadId");
                if (!n.consumable.consume(e.item, t.name)) return;
                const s = i.plugins.get(Xd),
                    a = r ? e.attributeNewValue : null,
                    c = this.placeholder,
                    l = i.editing.mapper.toViewElement(o),
                    d = n.writer;
                if ("reading" == a) return sf(l, d), void af(c, l, d);
                if ("uploading" == a) {
                    const t = s.loaders.get(r);
                    return sf(l, d), void(t ? (cf(l, d), function(t, e, n, i) {
                        const o = function(t) {
                            const e = t.createUIElement("div", {
                                class: "ck-progress-bar"
                            });
                            return t.setCustomProperty("progressBar", !0, e), e
                        }(e);
                        e.insert(e.createPositionAt(t, "end"), o), n.on("change:uploadedPercent", (t, e, n) => {
                            i.change(t => {
                                t.setStyle("width", n + "%", o)
                            })
                        })
                    }(l, d, t, i.editing.view)) : af(c, l, d))
                }
                "complete" == a && s.loaders.get(r) && !mo.isEdge && function(t, e, n) {
                        const i = e.createUIElement("div", {
                            class: "ck-image-upload-complete-icon"
                        });
                        e.insert(e.createPositionAt(t, "end"), i), setTimeout(() => {
                            n.change(t => t.remove(t.createRangeOn(i)))
                        }, 3e3)
                    }(l, d, i.editing.view),
                    function(t, e) {
                        df(t, e, "progressBar")
                    }(l, d), cf(l, d),
                    function(t, e) {
                        e.removeClass("ck-appear", t)
                    }(l, d)
            }
        }

        function sf(t, e) {
            t.hasClass("ck-appear") || e.addClass("ck-appear", t)
        }

        function af(t, e, n) {
            e.hasClass("ck-image-upload-placeholder") || n.addClass("ck-image-upload-placeholder", e);
            const i = e.getChild(0);
            i.getAttribute("src") !== t && n.setAttribute("src", t, i), lf(e, "placeholder") || n.insert(n.createPositionAfter(i), function(t) {
                const e = t.createUIElement("div", {
                    class: "ck-upload-placeholder-loader"
                });
                return t.setCustomProperty("placeholder", !0, e), e
            }(n))
        }

        function cf(t, e) {
            t.hasClass("ck-image-upload-placeholder") && e.removeClass("ck-image-upload-placeholder", t), df(t, e, "placeholder")
        }

        function lf(t, e) {
            for (const n of t.getChildren())
                if (n.getCustomProperty(e)) return n
        }

        function df(t, e, n) {
            const i = lf(t, n);
            i && e.remove(e.createRangeOn(i))
        }
        class uf {
            createDocumentFragment(t) {
                return new Ao(t)
            }
            createElement(t, e, n) {
                return new _i(t, e, n)
            }
            createText(t) {
                return new fi(t)
            }
            clone(t, e = !1) {
                return t._clone(e)
            }
            appendChild(t, e) {
                return e._appendChild(t)
            }
            insertChild(t, e, n) {
                return n._insertChild(t, e)
            }
            removeChildren(t, e, n) {
                return n._removeChildren(t, e)
            }
            remove(t) {
                const e = t.parent;
                return e ? this.removeChildren(e.getChildIndex(t), 1, e) : []
            }
            replace(t, e) {
                const n = t.parent;
                if (n) {
                    const i = n.getChildIndex(t);
                    return this.removeChildren(i, 1, n), this.insertChild(i, e, n), !0
                }
                return !1
            }
            rename(t, e) {
                const n = new _i(t, e.getAttributes(), e.getChildren());
                return this.replace(e, n) ? n : null
            }
            setAttribute(t, e, n) {
                n._setAttribute(t, e)
            }
            removeAttribute(t, e) {
                e._removeAttribute(t)
            }
            addClass(t, e) {
                e._addClass(t)
            }
            removeClass(t, e) {
                e._removeClass(t)
            }
            setStyle(t, e, n) {
                C(t) && void 0 === n && (n = e), n._setStyle(t, e)
            }
            removeStyle(t, e) {
                e._removeStyle(t)
            }
            setCustomProperty(t, e, n) {
                n._setCustomProperty(t, e)
            }
            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }
            createPositionAt(t, e) {
                return Zi._createAt(t, e)
            }
            createPositionAfter(t) {
                return Zi._createAfter(t)
            }
            createPositionBefore(t) {
                return Zi._createBefore(t)
            }
            createRange(t, e) {
                return new Xi(t, e)
            }
            createRangeOn(t) {
                return Xi._createOn(t)
            }
            createRangeIn(t) {
                return Xi._createIn(t)
            }
            createSelection(t, e, n) {
                return new no(t, e, n)
            }
        }
        class hf extends Zl {
            refresh() {
                this.isEnabled = mh(this.editor.model)
            }
            execute(t) {
                const e = this.editor,
                    n = e.model,
                    i = e.plugins.get(Xd);
                n.change(e => {
                    const o = Array.isArray(t.file) ? t.file : [t.file];
                    for (const t of o) ff(e, n, i, t)
                })
            }
        }

        function ff(t, e, n, i) {
            const o = n.createLoader(i);
            o && fh(t, e, {
                uploadId: o.id
            })
        }
        class mf extends $l {
            static get requires() {
                return [Xd, Lu]
            }
            init() {
                const t = this.editor,
                    e = t.model.document,
                    n = t.model.schema,
                    i = t.conversion,
                    o = t.plugins.get(Xd);
                n.extend("image", {
                    allowAttributes: ["uploadId", "uploadStatus"]
                }), t.commands.add("imageUpload", new hf(t)), i.for("upcast").attributeToAttribute({
                    view: {
                        name: "img",
                        key: "uploadId"
                    },
                    model: "uploadId"
                }), this.listenTo(t.editing.view.document, "clipboardInput", (e, n) => {
                    if (function(t) {
                            return Array.from(t.types).includes("text/html") && "" !== t.getData("text/html")
                        }(n.dataTransfer)) return;
                    const i = Array.from(n.dataTransfer.files).filter(t => !!t && Xh(t)),
                        o = n.targetRanges.map(e => t.editing.mapper.toModelRange(e));
                    t.model.change(n => {
                        n.setSelection(o), i.length && (e.stop(), t.model.enqueueChange("default", () => {
                            t.execute("imageUpload", {
                                file: i
                            })
                        }))
                    })
                }), t.plugins.has("Clipboard") && this.listenTo(t.plugins.get("Clipboard"), "inputTransformation", (e, n) => {
                    const i = Array.from(t.editing.view.createRangeIn(n.content)).filter(t => (function(t) {
                        return !(!t.is("element", "img") || !t.getAttribute("src")) && (t.getAttribute("src").match(/^data:image\/\w+;base64,/g) || t.getAttribute("src").match(/^blob:/g))
                    })(t.item) && !t.item.getAttribute("uploadProcessed")).map(t => ({
                        promise: tf(t.item),
                        imageElement: t.item
                    }));
                    if (!i.length) return;
                    const r = new uf;
                    for (const t of i) {
                        r.setAttribute("uploadProcessed", !0, t.imageElement);
                        const e = o.createLoader(t.promise);
                        e && (r.setAttribute("src", "", t.imageElement), r.setAttribute("uploadId", e.id, t.imageElement))
                    }
                }), t.editing.view.document.on("dragover", (t, e) => {
                    e.preventDefault()
                }), e.on("change", () => {
                    const t = e.differ.getChanges({
                        includeChangesInGraveyard: !0
                    });
                    for (const e of t)
                        if ("insert" == e.type && "image" == e.name) {
                            const t = e.position.nodeAfter,
                                n = "$graveyard" == e.position.root.rootName,
                                i = t.getAttribute("uploadId");
                            if (!i) continue;
                            const r = o.loaders.get(i);
                            if (!r) continue;
                            n ? r.abort() : "idle" == r.status && this._readAndUpload(r, t)
                        }
                })
            }
            _readAndUpload(t, e) {
                const n = this.editor,
                    i = n.model,
                    o = n.locale.t,
                    r = n.plugins.get(Xd),
                    s = n.plugins.get(Lu);
                return i.enqueueChange("transparent", t => {
                    t.setAttribute("uploadStatus", "reading", e)
                }), t.read().then(o => {
                    const r = n.editing.mapper.toViewElement(e).getChild(0),
                        s = t.upload();
                    return n.editing.view.change(t => {
                        t.setAttribute("src", o, r)
                    }), i.enqueueChange("transparent", t => {
                        t.setAttribute("uploadStatus", "uploading", e)
                    }), s
                }).then(t => {
                    i.enqueueChange("transparent", n => {
                        n.setAttributes({
                            uploadStatus: "complete",
                            src: t.default
                        }, e), this._parseAndSetSrcsetAttributeOnImage(t, e, n)
                    }), a()
                }).catch(n => {
                    if ("error" !== t.status && "aborted" !== t.status) throw n;
                    "error" == t.status && n && s.showWarning(n, {
                        title: o("aj"),
                        namespace: "upload"
                    }), a(), i.enqueueChange("transparent", t => {
                        t.remove(e)
                    })
                });

                function a() {
                    i.enqueueChange("transparent", t => {
                        t.removeAttribute("uploadId", e), t.removeAttribute("uploadStatus", e)
                    }), r.destroyLoader(t)
                }
            }
            _parseAndSetSrcsetAttributeOnImage(t, e, n) {
                let i = 0;
                const o = Object.keys(t).filter(t => {
                    const e = parseInt(t, 10);
                    if (!isNaN(e)) return i = Math.max(i, e), !0
                }).map(e => `${t[e]} ${e}w`).join(", ");
                "" != o && n.setAttribute("srcset", {
                    data: o,
                    width: i
                }, e)
            }
        }
        class pf extends $l {
            static get pluginName() {
                return "ImageUpload"
            }
            static get requires() {
                return [mf, ef, rf]
            }
        }
        class gf extends Zl {
            refresh() {
                const t = this.editor.model,
                    e = Au(t.document.selection.getSelectedBlocks());
                this.value = !!e && e.is("paragraph"), this.isEnabled = !!e && bf(e, t.schema)
            }
            execute(t = {}) {
                const e = this.editor.model,
                    n = e.document;
                e.change(i => {
                    const o = (t.selection || n.selection).getSelectedBlocks();
                    for (const t of o) !t.is("paragraph") && bf(t, e.schema) && i.rename(t, "paragraph")
                })
            }
        }

        function bf(t, e) {
            return e.checkChild(t.parent, "paragraph") && !e.isObject(t)
        }
        class wf extends $l {
            static get pluginName() {
                return "Paragraph"
            }
            init() {
                const t = this.editor,
                    e = t.model,
                    n = t.data;
                t.commands.add("paragraph", new gf(t)), e.schema.register("paragraph", {
                    inheritAllFrom: "$block"
                }), t.conversion.elementToElement({
                    model: "paragraph",
                    view: "p"
                }), n.upcastDispatcher.on("element", (t, e, n) => {
                    const i = n.writer;
                    if (n.consumable.test(e.viewItem, {
                            name: e.viewItem.name
                        }))
                        if (wf.paragraphLikeElements.has(e.viewItem.name)) {
                            if (e.viewItem.isEmpty) return;
                            const t = i.createElement("paragraph"),
                                o = n.splitToAllowedParent(t, e.modelCursor);
                            if (!o) return;
                            i.insert(t, o.position);
                            const {
                                modelRange: r
                            } = n.convertChildren(e.viewItem, i.createPositionAt(t, 0));
                            e.modelRange = i.createRange(i.createPositionBefore(t), r.end), e.modelCursor = e.modelRange.end
                        } else kf(e.viewItem, e.modelCursor, n.schema) && (e = Object.assign(e, _f(e.viewItem, e.modelCursor, n)))
                }, {
                    priority: "low"
                }), n.upcastDispatcher.on("text", (t, e, n) => {
                    e.modelRange || kf(e.viewItem, e.modelCursor, n.schema) && (e = Object.assign(e, _f(e.viewItem, e.modelCursor, n)))
                }, {
                    priority: "lowest"
                }), e.document.registerPostFixer(t => this._autoparagraphEmptyRoots(t)), t.data.on("ready", () => {
                    e.enqueueChange("transparent", t => this._autoparagraphEmptyRoots(t))
                }, {
                    priority: "lowest"
                })
            }
            _autoparagraphEmptyRoots(t) {
                const e = this.editor.model;
                for (const n of e.document.getRootNames()) {
                    const i = e.document.getRoot(n);
                    if (i.isEmpty && "$graveyard" != i.rootName && e.schema.checkChild(i, "paragraph")) return t.insertElement("paragraph", i), !0
                }
            }
        }

        function _f(t, e, n) {
            const i = n.writer.createElement("paragraph");
            return n.writer.insert(i, e), n.convertItem(t, n.writer.createPositionAt(i, 0))
        }

        function kf(t, e, n) {
            const i = n.createContext(e);
            return !!n.checkChild(i, "paragraph") && !!n.checkChild(i.push("paragraph"), t)
        }
        wf.paragraphLikeElements = new Set(["blockquote", "dd", "div", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "td"]);
        class vf extends Zl {
            constructor(t, e) {
                super(t), this.modelElements = e
            }
            refresh() {
                const t = Au(this.editor.model.document.selection.getSelectedBlocks());
                this.value = !!t && this.modelElements.includes(t.name) && t.name, this.isEnabled = !!t && this.modelElements.some(e => yf(t, e, this.editor.model.schema))
            }
            execute(t) {
                const e = this.editor.model,
                    n = e.document,
                    i = t.value;
                e.change(t => {
                    const o = Array.from(n.selection.getSelectedBlocks()).filter(t => yf(t, i, e.schema));
                    for (const e of o) e.is(i) || t.rename(e, i)
                })
            }
        }

        function yf(t, e, n) {
            return n.checkChild(t.parent, e) && !n.isObject(t)
        }
        const xf = "paragraph";
        class Af extends $l {
            constructor(t) {
                super(t), t.config.define("heading", {
                    options: [{
                        model: "paragraph",
                        title: "Paragraph",
                        class: "ck-heading_paragraph"
                    }, {
                        model: "heading1",
                        view: "h2",
                        title: "Heading 1",
                        class: "ck-heading_heading1"
                    }, {
                        model: "heading2",
                        view: "h3",
                        title: "Heading 2",
                        class: "ck-heading_heading2"
                    }, {
                        model: "heading3",
                        view: "h4",
                        title: "Heading 3",
                        class: "ck-heading_heading3"
                    }]
                })
            }
            static get requires() {
                return [wf]
            }
            init() {
                const t = this.editor,
                    e = t.config.get("heading.options"),
                    n = [];
                for (const i of e) i.model !== xf && (t.model.schema.register(i.model, {
                    inheritAllFrom: "$block"
                }), t.conversion.elementToElement(i), n.push(i.model));
                this._addDefaultH1Conversion(t), t.commands.add("heading", new vf(t, n))
            }
            afterInit() {
                const t = this.editor,
                    e = t.commands.get("enter"),
                    n = t.config.get("heading.options");
                e && this.listenTo(e, "afterExecute", (e, i) => {
                    const o = t.model.document.selection.getFirstPosition().parent;
                    n.some(t => o.is(t.model)) && !o.is(xf) && 0 === o.childCount && i.writer.rename(o, xf)
                })
            }
            _addDefaultH1Conversion(t) {
                t.conversion.for("upcast").elementToElement({
                    model: "heading1",
                    view: "h1",
                    converterPriority: Zn.get("low") + 1
                })
            }
        }
        class Cf {
            constructor(t, e) {
                e && Li(this, e), t && this.set(t)
            }
        }
        ci(Cf, Fi);
        class Tf extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isVisible", !1), this.set("position", "se"), this.children = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset", "ck-dropdown__panel", e.to("position", t => `ck-dropdown__panel_${t}`), e.if("isVisible", "ck-dropdown__panel-visible")]
                    },
                    children: this.children,
                    on: {
                        selectstart: e.to(t => t.preventDefault())
                    }
                })
            }
            focus() {
                this.children.length && this.children.first.focus()
            }
            focusLast() {
                if (this.children.length) {
                    const t = this.children.last;
                    "function" == typeof t.focusLast ? t.focusLast() : t.focus()
                }
            }
        }
        n(84);
        class Pf extends Nl {
            constructor(t, e, n) {
                super(t);
                const i = this.bindTemplate;
                this.buttonView = e, this.panelView = n, this.set("isOpen", !1), this.set("isEnabled", !0), this.set("class"), this.set("panelPosition", "auto"), this.focusTracker = new il, this.keystrokes = new Gc, this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-dropdown", i.to("class"), i.if("isEnabled", "ck-disabled", t => !t)]
                    },
                    children: [e, n]
                }), e.extendTemplate({
                    attributes: {
                        class: ["ck-dropdown__button"]
                    }
                })
            }
            render() {
                super.render(), this.listenTo(this.buttonView, "open", () => {
                    this.isOpen = !this.isOpen
                }), this.panelView.bind("isVisible").to(this, "isOpen"), this.on("change:isOpen", () => {
                    if (this.isOpen)
                        if ("auto" === this.panelPosition) {
                            const t = Pf.defaultPanelPositions;
                            this.panelView.position = Oh({
                                element: this.panelView.element,
                                target: this.buttonView.element,
                                fitInViewport: !0,
                                positions: [t.southEast, t.southWest, t.northEast, t.northWest]
                            }).name
                        } else this.panelView.position = this.panelPosition
                }), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
                const t = (t, e) => {
                    this.isOpen && (this.buttonView.focus(), this.isOpen = !1, e())
                };
                this.keystrokes.set("arrowdown", (t, e) => {
                    this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, e())
                }), this.keystrokes.set("arrowright", (t, e) => {
                    this.isOpen && e()
                }), this.keystrokes.set("arrowleft", t), this.keystrokes.set("esc", t)
            }
            focus() {
                this.buttonView.focus()
            }
        }
        Pf.defaultPanelPositions = {
            southEast: t => ({
                top: t.bottom,
                left: t.left,
                name: "se"
            }),
            southWest: (t, e) => ({
                top: t.bottom,
                left: t.left - e.width + t.width,
                name: "sw"
            }),
            northEast: (t, e) => ({
                top: t.top - e.height,
                left: t.left,
                name: "ne"
            }),
            northWest: (t, e) => ({
                top: t.bottom - e.height,
                left: t.left - e.width + t.width,
                name: "nw"
            })
        };
        var Mf = n(30),
            Ef = n.n(Mf);
        class Sf extends qd {
            constructor(t) {
                super(t), this.arrowView = this._createArrowView(), this.extendTemplate({
                    attributes: {
                        "aria-haspopup": !0
                    }
                }), this.delegate("execute").to(this, "open")
            }
            render() {
                super.render(), this.children.add(this.arrowView)
            }
            _createArrowView() {
                const t = new Ud;
                return t.content = Ef.a, t.extendTemplate({
                    attributes: {
                        class: "ck-dropdown__arrow"
                    }
                }), t
            }
        }
        n(86);
        class If extends Nl {
            constructor() {
                super(), this.items = this.createCollection(), this.focusTracker = new il, this.keystrokes = new Gc, this._focusCycler = new Fl({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: "arrowup",
                        focusNext: "arrowdown"
                    }
                }), this.setTemplate({
                    tag: "ul",
                    attributes: {
                        class: ["ck", "ck-reset", "ck-list"]
                    },
                    children: this.items
                })
            }
            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element)
            }
            focus() {
                this._focusCycler.focusFirst()
            }
            focusLast() {
                this._focusCycler.focusLast()
            }
        }
        class Nf extends Nl {
            constructor(t) {
                super(t), this.children = this.createCollection(), this.setTemplate({
                    tag: "li",
                    attributes: {
                        class: ["ck", "ck-list__item"]
                    },
                    children: this.children
                })
            }
            focus() {
                this.children.first.focus()
            }
        }
        class Of extends Nl {
            constructor(t) {
                super(t), this.setTemplate({
                    tag: "li",
                    attributes: {
                        class: ["ck", "ck-list__separator"]
                    }
                })
            }
        }
        n(88);
        class Rf extends qd {
            constructor(t) {
                super(t), this.toggleSwitchView = this._createToggleView(), this.extendTemplate({
                    attributes: {
                        class: "ck-switchbutton"
                    }
                })
            }
            render() {
                super.render(), this.children.add(this.toggleSwitchView)
            }
            _createToggleView() {
                const t = new Nl;
                return t.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-button__toggle"]
                    },
                    children: [{
                        tag: "span",
                        attributes: {
                            class: ["ck", "ck-button__toggle__inner"]
                        }
                    }]
                }), t
            }
        }
        n(90), n(92);

        function Df(t, e = Sf) {
            const n = new e(t),
                i = new Tf(t),
                o = new Pf(t, n, i);
            return n.bind("isEnabled").to(o), n instanceof Sf ? n.bind("isOn").to(o, "isOpen") : n.arrowView.bind("isOn").to(o, "isOpen"),
                function(t) {
                    (function(t) {
                        t.on("render", () => {
                            Ah({
                                emitter: t,
                                activator: () => t.isOpen,
                                callback: () => {
                                    t.isOpen = !1
                                },
                                contextElements: [t.element]
                            })
                        })
                    })(t),
                    function(t) {
                        t.on("execute", e => {
                            e.source instanceof Rf || (t.isOpen = !1)
                        })
                    }(t),
                    function(t) {
                        t.keystrokes.set("arrowdown", (e, n) => {
                            t.isOpen && (t.panelView.focus(), n())
                        }), t.keystrokes.set("arrowup", (e, n) => {
                            t.isOpen && (t.panelView.focusLast(), n())
                        })
                    }(t)
                }(o), o
        }

        function Lf(t, e) {
            const n = t.locale,
                i = t.listView = new If(n);
            i.items.bindTo(e).using(({
                type: t,
                model: e
            }) => {
                if ("separator" === t) return new Of(n);
                if ("button" === t || "switchbutton" === t) {
                    const i = new Nf(n);
                    let o;
                    return (o = "button" === t ? new qd(n) : new Rf(n)).bind(...Object.keys(e)).to(e), o.delegate("execute").to(i), i.children.add(o), i
                }
            }), t.panelView.children.add(i), i.items.delegate("execute").to(t)
        }
        n(17);
        class jf extends $l {
            init() {
                const t = this.editor,
                    e = t.t,
                    n = function(t) {
                        const e = t.t,
                            n = {
                                Paragraph: e("bi"),
                                "Heading 1": e("bj"),
                                "Heading 2": e("bk"),
                                "Heading 3": e("bl"),
                                "Heading 4": e("bm"),
                                "Heading 5": e("bn"),
                                "Heading 6": e("bo")
                            };
                        return t.config.get("heading.options").map(t => {
                            const e = n[t.title];
                            return e && e != t.title && (t.title = e), t
                        })
                    }(t),
                    i = e("f"),
                    o = e("g");
                t.ui.componentFactory.add("heading", e => {
                    const r = {},
                        s = new oo,
                        a = t.commands.get("heading"),
                        c = t.commands.get("paragraph"),
                        l = [a];
                    for (const t of n) {
                        const e = {
                            type: "button",
                            model: new Cf({
                                label: t.title,
                                class: t.class,
                                withText: !0
                            })
                        };
                        "paragraph" === t.model ? (e.model.bind("isOn").to(c, "value"), e.model.set("commandName", "paragraph"), l.push(c)) : (e.model.bind("isOn").to(a, "value", e => e === t.model), e.model.set({
                            commandName: "heading",
                            commandValue: t.model
                        })), s.add(e), r[t.model] = t.title
                    }
                    const d = Df(e);
                    return Lf(d, s), d.buttonView.set({
                        isOn: !1,
                        withText: !0,
                        tooltip: o
                    }), d.extendTemplate({
                        attributes: {
                            class: ["ck-heading-dropdown"]
                        }
                    }), d.bind("isEnabled").toMany(l, "isEnabled", (...t) => t.some(t => t)), d.buttonView.bind("label").to(a, "value", c, "value", (t, e) => {
                        const n = t || e && "paragraph";
                        return r[n] ? r[n] : i
                    }), this.listenTo(d, "execute", e => {
                        t.execute(e.source.commandName, e.source.commandValue ? {
                            value: e.source.commandValue
                        } : void 0), t.editing.view.focus()
                    }), d
                })
            }
        }

        function Vf(t) {
            for (const e of t.getChildren())
                if (e && e.is("caption")) return e;
            return null
        }

        function Bf(t) {
            const e = t.parent;
            return "figcaption" == t.name && e && "figure" == e.name && e.hasClass("image") ? {
                name: !0
            } : null
        }
        class zf extends $l {
            init() {
                const t = this.editor,
                    e = t.editing.view,
                    n = t.model.schema,
                    i = t.data,
                    o = t.editing,
                    r = t.t;
                n.register("caption", {
                    allowIn: "image",
                    allowContentOf: "$block",
                    isLimit: !0
                }), t.model.document.registerPostFixer(t => this._insertMissingModelCaptionElement(t)), t.conversion.for("upcast").elementToElement({
                    view: Bf,
                    model: "caption"
                });
                i.downcastDispatcher.on("insert:caption", Ff(t => t.createContainerElement("figcaption"), !1));
                const s = function(t, e) {
                    return n => {
                        const i = n.createEditableElement("figcaption");
                        return n.setCustomProperty("imageCaption", !0, i), sl({
                            view: t,
                            element: i,
                            text: e
                        }), ch(i, n)
                    }
                }(e, r("ai"));
                o.downcastDispatcher.on("insert:caption", Ff(s)), o.downcastDispatcher.on("insert", this._fixCaptionVisibility(t => t.item), {
                    priority: "high"
                }), o.downcastDispatcher.on("remove", this._fixCaptionVisibility(t => t.position.parent), {
                    priority: "high"
                }), e.document.registerPostFixer(t => this._updateCaptionVisibility(t))
            }
            _updateCaptionVisibility(t) {
                const e = this.editor.editing.mapper,
                    n = this._lastSelectedCaption;
                let i;
                const o = this.editor.model.document.selection,
                    r = o.getSelectedElement();
                if (r && r.is("image")) {
                    const t = Vf(r);
                    i = e.toViewElement(t)
                }
                const s = Uf(o.getFirstPosition().parent);
                if (s && (i = e.toViewElement(s)), i) return n ? n === i ? qf(i, t) : (Hf(n, t), this._lastSelectedCaption = i, qf(i, t)) : (this._lastSelectedCaption = i, qf(i, t));
                if (n) {
                    const e = Hf(n, t);
                    return this._lastSelectedCaption = null, e
                }
                return !1
            }
            _fixCaptionVisibility(t) {
                return (e, n, i) => {
                    const o = Uf(t(n)),
                        r = this.editor.editing.mapper,
                        s = i.writer;
                    if (o) {
                        const t = r.toViewElement(o);
                        t && (o.childCount ? s.removeClass("ck-hidden", t) : s.addClass("ck-hidden", t))
                    }
                }
            }
            _insertMissingModelCaptionElement(t) {
                const e = this.editor.model,
                    n = e.document.differ.getChanges(),
                    i = [];
                for (const t of n)
                    if ("insert" == t.type && "$text" != t.name) {
                        const n = t.position.nodeAfter;
                        if (n.is("image") && !Vf(n) && i.push(n), !n.is("image") && n.childCount)
                            for (const t of e.createRangeIn(n).getItems()) t.is("image") && !Vf(t) && i.push(t)
                    }
                for (const e of i) t.appendElement("caption", e);
                return !!i.length
            }
        }

        function Ff(t, e = !0) {
            return (n, i, o) => {
                const r = i.item;
                if ((r.childCount || e) && hh(r.parent)) {
                    if (!o.consumable.consume(i.item, "insert")) return;
                    const e = o.mapper.toViewElement(i.range.start.parent),
                        n = t(o.writer),
                        s = o.writer;
                    r.childCount || s.addClass("ck-hidden", n),
                        function(t, e, n, i) {
                            const o = i.writer.createPositionAt(n, "end");
                            i.writer.insert(o, t), i.mapper.bindElements(e, t)
                        }(n, i.item, e, o)
                }
            }
        }

        function Uf(t) {
            const e = t.getAncestors({
                includeSelf: !0
            }).find(t => "caption" == t.name);
            return e && e.parent && "image" == e.parent.name ? e : null
        }

        function Hf(t, e) {
            return !t.childCount && !t.hasClass("ck-hidden") && (e.addClass("ck-hidden", t), !0)
        }

        function qf(t, e) {
            return !!t.hasClass("ck-hidden") && (e.removeClass("ck-hidden", t), !0)
        }
        n(95);
        class Wf extends Zl {
            constructor(t, e) {
                super(t), this._defaultStyle = !1, this.styles = e.reduce((t, e) => (t[e.name] = e, e.isDefault && (this._defaultStyle = e.name), t), {})
            }
            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                if (this.isEnabled = hh(t), t)
                    if (t.hasAttribute("imageStyle")) {
                        const e = t.getAttribute("imageStyle");
                        this.value = !!this.styles[e] && e
                    } else this.value = this._defaultStyle;
                else this.value = !1
            }
            execute(t) {
                const e = t.value,
                    n = this.editor.model,
                    i = n.document.selection.getSelectedElement();
                n.change(t => {
                    this.styles[e].isDefault ? t.removeAttribute("imageStyle", i) : t.setAttribute("imageStyle", e, i)
                })
            }
        }

        function Yf(t, e) {
            for (const n of e)
                if (n.name === t) return n
        }
        var $f = n(13),
            Gf = n.n($f),
            Qf = n(14),
            Jf = n.n(Qf),
            Kf = n(15),
            Zf = n.n(Kf),
            Xf = n(10),
            tm = n.n(Xf);
        const em = {
                full: {
                    name: "full",
                    title: "Full size image",
                    icon: Gf.a,
                    isDefault: !0
                },
                side: {
                    name: "side",
                    title: "Side image",
                    icon: tm.a,
                    className: "image-style-side"
                },
                alignLeft: {
                    name: "alignLeft",
                    title: "Left aligned image",
                    icon: Jf.a,
                    className: "image-style-align-left"
                },
                alignCenter: {
                    name: "alignCenter",
                    title: "Centered image",
                    icon: Zf.a,
                    className: "image-style-align-center"
                },
                alignRight: {
                    name: "alignRight",
                    title: "Right aligned image",
                    icon: tm.a,
                    className: "image-style-align-right"
                }
            },
            nm = {
                full: Gf.a,
                left: Jf.a,
                right: tm.a,
                center: Zf.a
            };

        function im(t = []) {
            return t.map(om)
        }

        function om(t) {
            if ("string" == typeof t) {
                const e = t;
                em[e] ? t = Object.assign({}, em[e]) : (bs.a.warn("image-style-not-found: There is no such image style of given name.", {
                    name: e
                }), t = {
                    name: e
                })
            } else if (em[t.name]) {
                const e = em[t.name],
                    n = Object.assign({}, t);
                for (const i in e) t.hasOwnProperty(i) || (n[i] = e[i]);
                t = n
            }
            return "string" == typeof t.icon && nm[t.icon] && (t.icon = nm[t.icon]), t
        }
        class rm extends $l {
            static get pluginName() {
                return "ImageStyleEditing"
            }
            init() {
                const t = this.editor,
                    e = t.model.schema,
                    n = t.data,
                    i = t.editing;
                t.config.define("image.styles", ["full", "side"]);
                const o = im(t.config.get("image.styles"));
                e.extend("image", {
                    allowAttributes: "imageStyle"
                });
                const r = function(t) {
                    return (e, n, i) => {
                        if (!i.consumable.consume(n.item, e.name)) return;
                        const o = Yf(n.attributeNewValue, t),
                            r = Yf(n.attributeOldValue, t),
                            s = i.mapper.toViewElement(n.item),
                            a = i.writer;
                        r && a.removeClass(r.className, s), o && a.addClass(o.className, s)
                    }
                }(o);
                i.downcastDispatcher.on("attribute:imageStyle:image", r), n.downcastDispatcher.on("attribute:imageStyle:image", r), n.upcastDispatcher.on("element:figure", function(t) {
                    const e = t.filter(t => !t.isDefault);
                    return (t, n, i) => {
                        if (!n.modelRange) return;
                        const o = n.viewItem,
                            r = Au(n.modelRange.getItems());
                        if (i.schema.checkAttribute(r, "imageStyle"))
                            for (const t of e) i.consumable.consume(o, {
                                classes: t.className
                            }) && i.writer.setAttribute("imageStyle", t.name, r)
                    }
                }(o), {
                    priority: "low"
                }), t.commands.add("imageStyle", new Wf(t, o))
            }
        }
        n(97);
        class sm extends $l {
            static get pluginName() {
                return "ImageStyleUI"
            }
            get localizedDefaultStylesTitles() {
                const t = this.editor.t;
                return {
                    "Full size image": t("i"),
                    "Side image": t("j"),
                    "Left aligned image": t("k"),
                    "Centered image": t("l"),
                    "Right aligned image": t("m")
                }
            }
            init() {
                const t = function(t, e) {
                    for (const n of t) e[n.title] && (n.title = e[n.title]);
                    return t
                }(im(this.editor.config.get("image.styles")), this.localizedDefaultStylesTitles);
                for (const e of t) this._createButton(e)
            }
            _createButton(t) {
                const e = this.editor,
                    n = `imageStyle:${t.name}`;
                e.ui.componentFactory.add(n, n => {
                    const i = e.commands.get("imageStyle"),
                        o = new qd(n);
                    return o.set({
                        label: t.title,
                        icon: t.icon,
                        tooltip: !0
                    }), o.bind("isEnabled").to(i, "isEnabled"), o.bind("isOn").to(i, "value", e => e === t.name), this.listenTo(o, "execute", () => e.execute("imageStyle", {
                        value: t.name
                    })), o
                })
            }
        }
        class am extends $l {
            static get requires() {
                return [Uh]
            }
            static get pluginName() {
                return "WidgetToolbarRepository"
            }
            init() {
                const t = this.editor;
                if (t.plugins.has("BalloonToolbar")) {
                    const e = t.plugins.get("BalloonToolbar");
                    this.listenTo(e, "show", e => {
                        (function(t) {
                            const e = t.getSelectedElement();
                            return !(!e || !rh(e))
                        })(t.editing.view.document.selection) && e.stop()
                    }, {
                        priority: "high"
                    })
                }
                this._toolbarDefinitions = new Map, this._balloon = this.editor.plugins.get("ContextualBalloon"), this.listenTo(t.ui, "update", () => {
                    this._updateToolbarsVisibility()
                }), this.listenTo(t.ui.focusTracker, "change:isFocused", () => {
                    this._updateToolbarsVisibility()
                }, {
                    priority: "low"
                })
            }
            destroy() {
                super.destroy();
                for (const t of this._toolbarDefinitions.values()) t.view.destroy()
            }
            register(t, {
                items: e,
                getRelatedElement: n,
                balloonClassName: i = "ck-toolbar-container"
            }) {
                const o = this.editor,
                    r = new ql;
                if (this._toolbarDefinitions.has(t)) throw new Gn.b("widget-toolbar-duplicated: Toolbar with the given id was already added.", {
                    toolbarId: t
                });
                r.fillFromConfig(e, o.ui.componentFactory), this._toolbarDefinitions.set(t, {
                    view: r,
                    getRelatedElement: n,
                    balloonClassName: i
                })
            }
            _updateToolbarsVisibility() {
                let t = 0,
                    e = null,
                    n = null;
                for (const i of this._toolbarDefinitions.values()) {
                    const o = i.getRelatedElement(this.editor.editing.view.document.selection);
                    if (this.editor.ui.focusTracker.isFocused && o) {
                        const r = o.getAncestors().length;
                        r > t && (t = r, e = o, n = i)
                    } else this._hideToolbar(i)
                }
                n && this._showToolbar(n, e)
            }
            _hideToolbar(t) {
                this._isToolbarVisible(t) && this._balloon.remove(t.view)
            }
            _showToolbar(t, e) {
                this._isToolbarVisible(t) ? function(t, e) {
                    const n = t.plugins.get("ContextualBalloon"),
                        i = cm(t, e);
                    n.updatePosition(i)
                }(this.editor, e) : this._balloon.hasView(t.view) || this._balloon.add({
                    view: t.view,
                    position: cm(this.editor, e),
                    balloonClassName: t.balloonClassName
                })
            }
            _isToolbarVisible(t) {
                return this._balloon.visibleView == t.view
            }
        }

        function cm(t, e) {
            const n = t.editing.view,
                i = Vh.defaultPositions;
            return {
                target: n.domConverter.viewToDom(e),
                positions: [i.northArrowSouth, i.northArrowSouthWest, i.northArrowSouthEast, i.southArrowNorth, i.southArrowNorthWest, i.southArrowNorthEast]
            }
        }

        function lm(t, e, n) {
            return n.createRange(dm(t, e, !0, n), dm(t, e, !1, n))
        }

        function dm(t, e, n, i) {
            let o = t.textNode || (n ? t.nodeBefore : t.nodeAfter),
                r = null;
            for (; o && o.getAttribute("linkHref") == e;) r = o, o = n ? o.previousSibling : o.nextSibling;
            return r ? i.createPositionAt(r, n ? "before" : "after") : t
        }
        class um extends Zl {
            refresh() {
                const t = this.editor.model,
                    e = t.document;
                this.value = e.selection.getAttribute("linkHref"), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "linkHref")
            }
            execute(t) {
                const e = this.editor.model,
                    n = e.document.selection;
                e.change(i => {
                    if (n.isCollapsed) {
                        const o = n.getFirstPosition();
                        if (n.hasAttribute("linkHref")) {
                            const o = lm(n.getFirstPosition(), n.getAttribute("linkHref"), e);
                            i.setAttribute("linkHref", t, o), i.setSelection(o)
                        } else if ("" !== t) {
                            const e = Vs(n.getAttributes());
                            e.set("linkHref", t);
                            const r = i.createText(t, e);
                            i.insert(r, o), i.setSelection(i.createRangeOn(r))
                        }
                    } else {
                        const o = e.schema.getValidRanges(n.getRanges(), "linkHref");
                        for (const e of o) i.setAttribute("linkHref", t, e)
                    }
                })
            }
        }
        class hm extends Zl {
            refresh() {
                this.isEnabled = this.editor.model.document.selection.hasAttribute("linkHref")
            }
            execute() {
                const t = this.editor.model,
                    e = t.document.selection;
                t.change(n => {
                    const i = e.isCollapsed ? [lm(e.getFirstPosition(), e.getAttribute("linkHref"), t)] : e.getRanges();
                    for (const t of i) n.removeAttribute("linkHref", t)
                })
            }
        }
        const fm = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            mm = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;

        function pm(t, e) {
            const n = e.createAttributeElement("a", {
                href: t
            }, {
                priority: 5
            });
            return e.setCustomProperty("link", !0, n), n
        }

        function gm(t) {
            return function(t) {
                return t.replace(fm, "").match(mm)
            }(t = String(t)) ? t : "#"
        }
        class bm {
            constructor(t, e, n) {
                this.model = t, this.attribute = n, this._modelSelection = t.document.selection, this._overrideUid = null, this._isNextGravityRestorationSkipped = !1, e.listenTo(this._modelSelection, "change:range", (t, e) => {
                    this._isNextGravityRestorationSkipped ? this._isNextGravityRestorationSkipped = !1 : this._isGravityOverridden && (!e.directChange && wm(this._modelSelection.getFirstPosition(), n) || this._restoreGravity())
                })
            }
            handleForwardMovement(t, e) {
                const n = this.attribute;
                if (!(this._isGravityOverridden || t.isAtStart && this._hasSelectionAttribute)) return vm(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._removeSelectionAttribute(), !0) : _m(t, n) ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : km(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : void 0
            }
            handleBackwardMovement(t, e) {
                const n = this.attribute;
                return this._isGravityOverridden ? vm(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._restoreGravity(), this._removeSelectionAttribute(), !0) : (this._preventCaretMovement(e), this._restoreGravity(), t.isAtStart && this._removeSelectionAttribute(), !0) : vm(t, n) && !this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtEnd && km(t, n) ? this._hasSelectionAttribute ? void(ym(t, n) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity())) : (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtStart ? this._hasSelectionAttribute ? (this._removeSelectionAttribute(), this._preventCaretMovement(e), !0) : void 0 : void(ym(t, n) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity()))
            }
            get _isGravityOverridden() {
                return !!this._overrideUid
            }
            get _hasSelectionAttribute() {
                return this._modelSelection.hasAttribute(this.attribute)
            }
            _overrideGravity() {
                this._overrideUid = this.model.change(t => t.overrideSelectionGravity())
            }
            _restoreGravity() {
                this.model.change(t => {
                    t.restoreSelectionGravity(this._overrideUid), this._overrideUid = null
                })
            }
            _preventCaretMovement(t) {
                t.preventDefault()
            }
            _removeSelectionAttribute() {
                this.model.change(t => {
                    t.removeSelectionAttribute(this.attribute)
                })
            }
            _setSelectionAttributeFromTheNodeBefore(t) {
                const e = this.attribute;
                this.model.change(n => {
                    n.setSelectionAttribute(this.attribute, t.nodeBefore.getAttribute(e))
                })
            }
            _skipNextAutomaticGravityRestoration() {
                this._isNextGravityRestorationSkipped = !0
            }
        }

        function wm(t, e) {
            return _m(t, e) || km(t, e)
        }

        function _m(t, e) {
            const {
                nodeBefore: n,
                nodeAfter: i
            } = t, o = !!n && n.hasAttribute(e);
            return !!i && i.hasAttribute(e) && (!o || n.getAttribute(e) !== i.getAttribute(e))
        }

        function km(t, e) {
            const {
                nodeBefore: n,
                nodeAfter: i
            } = t, o = !!n && n.hasAttribute(e), r = !!i && i.hasAttribute(e);
            return o && (!r || n.getAttribute(e) !== i.getAttribute(e))
        }

        function vm(t, e) {
            const {
                nodeBefore: n,
                nodeAfter: i
            } = t, o = !!n && n.hasAttribute(e);
            if (!!i && i.hasAttribute(e) && o) return i.getAttribute(e) !== n.getAttribute(e)
        }

        function ym(t, e) {
            return wm(t.getShiftedBy(-1), e)
        }
        n(99);
        const xm = "ck-link_selected";
        class Am extends $l {
            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {
                        allowAttributes: "linkHref"
                    }), t.conversion.for("dataDowncast").attributeToElement({
                        model: "linkHref",
                        view: pm
                    }), t.conversion.for("editingDowncast").attributeToElement({
                        model: "linkHref",
                        view: (t, e) => pm(gm(t), e)
                    }), t.conversion.for("upcast").elementToAttribute({
                        view: {
                            name: "a",
                            attributes: {
                                href: !0
                            }
                        },
                        model: {
                            key: "linkHref",
                            value: t => t.getAttribute("href")
                        }
                    }), t.commands.add("link", new um(t)), t.commands.add("unlink", new hm(t)),
                    function(t, e, n, i) {
                        const o = new bm(e, n, i),
                            r = e.document.selection;
                        n.listenTo(t.document, "keydown", (t, e) => {
                            if (!r.isCollapsed) return;
                            if (e.shiftKey || e.altKey || e.ctrlKey) return;
                            const n = e.keyCode == bo.arrowright,
                                i = e.keyCode == bo.arrowleft;
                            if (!n && !i) return;
                            const s = r.getFirstPosition();
                            let a;
                            (a = n ? o.handleForwardMovement(s, e) : o.handleBackwardMovement(s, e)) && t.stop()
                        }, {
                            priority: Zn.get("high") + 1
                        })
                    }(t.editing.view, t.model, this, "linkHref"), this._setupLinkHighlight()
            }
            _setupLinkHighlight() {
                const t = this.editor,
                    e = t.editing.view,
                    n = new Set;
                e.document.registerPostFixer(e => {
                    const i = t.model.document.selection;
                    if (i.hasAttribute("linkHref")) {
                        const o = lm(i.getFirstPosition(), i.getAttribute("linkHref"), t.model),
                            r = t.editing.mapper.toViewRange(o);
                        for (const t of r.getItems()) t.is("a") && (e.addClass(xm, t), n.add(t))
                    }
                }), t.conversion.for("editingDowncast").add(t => {
                    function i() {
                        e.change(t => {
                            for (const e of n.values()) t.removeClass(xm, e), n.delete(e)
                        })
                    }
                    t.on("insert", i, {
                        priority: "highest"
                    }), t.on("remove", i, {
                        priority: "highest"
                    }), t.on("attribute", i, {
                        priority: "highest"
                    }), t.on("selection", i, {
                        priority: "highest"
                    })
                })
            }
        }
        class Cm extends ts {
            constructor(t) {
                super(t), this.domEventType = "click"
            }
            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }
        n(101);
        class Tm extends Nl {
            constructor(t) {
                super(t);
                const e = t.t;
                this.focusTracker = new il, this.keystrokes = new Gc, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(e("au"), Eh.a, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(e("av"), Ih.a, "ck-button-cancel", "cancel"), this._focusables = new hl, this._focusCycler = new Fl({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: "shift + tab",
                        focusNext: "tab"
                    }
                }), this.setTemplate({
                    tag: "form",
                    attributes: {
                        class: ["ck", "ck-link-form"],
                        tabindex: "-1"
                    },
                    children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
                })
            }
            render() {
                super.render(), Ph({
                    view: this
                }), [this.urlInputView, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }
            focus() {
                this._focusCycler.focusFirst()
            }
            _createUrlInput() {
                const t = this.locale.t,
                    e = new Ch(this.locale, Th);
                return e.label = t("aw"), e.inputView.placeholder = "https://example.com", e
            }
            _createButton(t, e, n, i) {
                const o = new qd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({
                    attributes: {
                        class: n
                    }
                }), i && o.delegate("execute").to(this, i), o
            }
        }
        var Pm = n(31),
            Mm = n.n(Pm),
            Em = n(32),
            Sm = n.n(Em);
        n(103);
        class Im extends Nl {
            constructor(t) {
                super(t);
                const e = t.t;
                this.focusTracker = new il, this.keystrokes = new Gc, this.previewButtonView = this._createPreviewButton(), this.unlinkButtonView = this._createButton(e("aq"), Mm.a, "unlink"), this.editButtonView = this._createButton(e("ar"), Sm.a, "edit"), this.set("href"), this._focusables = new hl, this._focusCycler = new Fl({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: "shift + tab",
                        focusNext: "tab"
                    }
                }), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-link-actions"],
                        tabindex: "-1"
                    },
                    children: [this.previewButtonView, this.editButtonView, this.unlinkButtonView]
                })
            }
            render() {
                super.render(), [this.previewButtonView, this.editButtonView, this.unlinkButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }
            focus() {
                this._focusCycler.focusFirst()
            }
            _createButton(t, e, n) {
                const i = new qd(this.locale);
                return i.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), i.delegate("execute").to(this, n), i
            }
            _createPreviewButton() {
                const t = new qd(this.locale),
                    e = this.bindTemplate,
                    n = this.t;
                return t.set({
                    withText: !0,
                    tooltip: n("as")
                }), t.extendTemplate({
                    attributes: {
                        class: ["ck", "ck-link-actions__preview"],
                        href: e.to("href", t => t && gm(t)),
                        target: "_blank"
                    }
                }), t.bind("label").to(this, "href", t => t || n("at")), t.bind("isEnabled").to(this, "href", t => !!t), t.template.tag = "a", t.template.eventListeners = {}, t
            }
        }
        var Nm = n(33),
            Om = n.n(Nm);
        const Rm = "Ctrl+K";
        class Dm extends $l {
            static get requires() {
                return [Uh]
            }
            static get pluginName() {
                return "LinkUI"
            }
            init() {
                const t = this.editor;
                t.editing.view.addObserver(Cm), this.actionsView = this._createActionsView(), this.formView = this._createFormView(), this._balloon = t.plugins.get(Uh), this._createToolbarLinkButton(), this._enableUserBalloonInteractions()
            }
            destroy() {
                super.destroy(), this.formView.destroy()
            }
            _createActionsView() {
                const t = this.editor,
                    e = new Im(t.locale),
                    n = t.commands.get("link"),
                    i = t.commands.get("unlink");
                return e.bind("href").to(n, "value"), e.editButtonView.bind("isEnabled").to(n), e.unlinkButtonView.bind("isEnabled").to(i), this.listenTo(e, "edit", () => {
                    this._addFormView()
                }), this.listenTo(e, "unlink", () => {
                    t.execute("unlink"), this._hideUI()
                }), e.keystrokes.set("Esc", (t, e) => {
                    this._hideUI(), e()
                }), e.keystrokes.set(Rm, (t, e) => {
                    this._addFormView(), e()
                }), e
            }
            _createFormView() {
                const t = this.editor,
                    e = new Tm(t.locale),
                    n = t.commands.get("link");
                return e.urlInputView.bind("value").to(n, "value"), e.urlInputView.bind("isReadOnly").to(n, "isEnabled", t => !t), e.saveButtonView.bind("isEnabled").to(n), this.listenTo(e, "submit", () => {
                    t.execute("link", e.urlInputView.inputView.element.value), this._removeFormView()
                }), this.listenTo(e, "cancel", () => {
                    this._removeFormView()
                }), e.keystrokes.set("Esc", (t, e) => {
                    this._removeFormView(), e()
                }), e
            }
            _createToolbarLinkButton() {
                const t = this.editor,
                    e = t.commands.get("link"),
                    n = t.t;
                t.keystrokes.set(Rm, (t, n) => {
                    n(), e.isEnabled && this._showUI()
                }), t.ui.componentFactory.add("link", t => {
                    const i = new qd(t);
                    return i.isEnabled = !0, i.label = n("ao"), i.icon = Om.a, i.keystroke = Rm, i.tooltip = !0, i.bind("isOn", "isEnabled").to(e, "value", "isEnabled"), this.listenTo(i, "execute", () => this._showUI()), i
                })
            }
            _enableUserBalloonInteractions() {
                const t = this.editor.editing.view.document;
                this.listenTo(t, "click", () => {
                    this._getSelectedLinkElement() && this._showUI()
                }), this.editor.keystrokes.set("Tab", (t, e) => {
                    this._areActionsVisible && !this.actionsView.focusTracker.isFocused && (this.actionsView.focus(), e())
                }, {
                    priority: "high"
                }), this.editor.keystrokes.set("Esc", (t, e) => {
                    this._isUIVisible && (this._hideUI(), e())
                }), Ah({
                    emitter: this.formView,
                    activator: () => this._isUIVisible,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideUI()
                })
            }
            _addActionsView() {
                this._areActionsInPanel || this._balloon.add({
                    view: this.actionsView,
                    position: this._getBalloonPositionData()
                })
            }
            _addFormView() {
                if (this._isFormInPanel) return;
                const t = this.editor.commands.get("link");
                this._balloon.add({
                    view: this.formView,
                    position: this._getBalloonPositionData()
                }), this.formView.urlInputView.select(), this.formView.urlInputView.inputView.element.value = t.value || ""
            }
            _removeFormView() {
                this._isFormInPanel && (this.formView.saveButtonView.focus(), this._balloon.remove(this.formView), this.editor.editing.view.focus())
            }
            _showUI() {
                this.editor.commands.get("link").isEnabled && (this._getSelectedLinkElement() ? this._areActionsVisible ? this._addFormView() : this._addActionsView() : (this._addActionsView(), this._addFormView()), this._startUpdatingUI())
            }
            _hideUI() {
                if (!this._isUIInPanel) return;
                const t = this.editor;
                this.stopListening(t.ui, "update"), t.editing.view.focus(), this._removeFormView(), this._balloon.remove(this.actionsView)
            }
            _startUpdatingUI() {
                const t = this.editor,
                    e = t.editing.view.document;
                let n = this._getSelectedLinkElement(),
                    i = o();

                function o() {
                    return e.selection.focus.getAncestors().reverse().find(t => t.is("element"))
                }
                this.listenTo(t.ui, "update", () => {
                    const t = this._getSelectedLinkElement(),
                        e = o();
                    n && !t || !n && e !== i ? this._hideUI() : this._balloon.updatePosition(this._getBalloonPositionData()), n = t, i = e
                })
            }
            get _isFormInPanel() {
                return this._balloon.hasView(this.formView)
            }
            get _areActionsInPanel() {
                return this._balloon.hasView(this.actionsView)
            }
            get _areActionsVisible() {
                return this._balloon.visibleView === this.actionsView
            }
            get _isUIInPanel() {
                return this._isFormInPanel || this._areActionsInPanel
            }
            get _isUIVisible() {
                return this._balloon.visibleView == this.formView || this._areActionsVisible
            }
            _getBalloonPositionData() {
                const t = this.editor.editing.view,
                    e = t.document,
                    n = this._getSelectedLinkElement();
                return {
                    target: n ? t.domConverter.mapViewToDom(n) : t.domConverter.viewRangeToDom(e.selection.getFirstRange())
                }
            }
            _getSelectedLinkElement() {
                const t = this.editor.editing.view,
                    e = t.document.selection;
                if (e.isCollapsed) return Lm(e.getFirstPosition()); {
                    const n = e.getFirstRange().getTrimmed(),
                        i = Lm(n.start),
                        o = Lm(n.end);
                    return i && i == o && t.createRangeIn(i).getTrimmed().isEqual(n) ? i : null
                }
            }
        }

        function Lm(t) {
            return t.getAncestors().find(t => (function(t) {
                return t.is("attributeElement") && !!t.getCustomProperty("link")
            })(t))
        }
        class jm extends Zl {
            constructor(t, e) {
                super(t), this.type = "bulleted" == e ? "bulleted" : "numbered"
            }
            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }
            execute() {
                const t = this.editor.model,
                    e = t.document,
                    n = Array.from(e.selection.getSelectedBlocks()).filter(e => Bm(e, t.schema)),
                    i = !0 === this.value;
                t.change(t => {
                    if (i) {
                        let e = n[n.length - 1].nextSibling,
                            i = Number.POSITIVE_INFINITY,
                            o = [];
                        for (; e && "listItem" == e.name && 0 !== e.getAttribute("listIndent");) {
                            const t = e.getAttribute("listIndent");
                            t < i && (i = t);
                            const n = t - i;
                            o.push({
                                element: e,
                                listIndent: n
                            }), e = e.nextSibling
                        }
                        o = o.reverse();
                        for (const e of o) t.setAttribute("listIndent", e.listIndent, e.element)
                    }
                    if (!i) {
                        let t = Number.POSITIVE_INFINITY;
                        for (const e of n) e.is("listItem") && e.getAttribute("listIndent") < t && (t = e.getAttribute("listIndent"));
                        Vm(n, !0, t = 0 === t ? 1 : t), Vm(n, !1, t)
                    }
                    for (const e of n.reverse()) i && "listItem" == e.name ? t.rename(e, "paragraph") : i || "listItem" == e.name ? i || "listItem" != e.name || e.getAttribute("listType") == this.type || t.setAttribute("listType", this.type, e) : (t.setAttributes({
                        listType: this.type,
                        listIndent: 0
                    }, e), t.rename(e, "listItem"))
                })
            }
            _getValue() {
                const t = Au(this.editor.model.document.selection.getSelectedBlocks());
                return !!t && t.is("listItem") && t.getAttribute("listType") == this.type
            }
            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection,
                    e = this.editor.model.schema,
                    n = Au(t.getSelectedBlocks());
                return !!n && Bm(n, e)
            }
        }

        function Vm(t, e, n) {
            const i = e ? t[0] : t[t.length - 1];
            if (i.is("listItem")) {
                let o = i[e ? "previousSibling" : "nextSibling"],
                    r = i.getAttribute("listIndent");
                for (; o && o.is("listItem") && o.getAttribute("listIndent") >= n;) r > o.getAttribute("listIndent") && (r = o.getAttribute("listIndent")), o.getAttribute("listIndent") == r && t[e ? "unshift" : "push"](o), o = o[e ? "previousSibling" : "nextSibling"]
            }
        }

        function Bm(t, e) {
            return e.checkChild(t.parent, "listItem") && !e.isObject(t)
        }
        class zm extends Zl {
            constructor(t, e) {
                super(t), this._indentBy = "forward" == e ? 1 : -1
            }
            refresh() {
                this.isEnabled = this._checkEnabled()
            }
            execute() {
                const t = this.editor.model,
                    e = t.document;
                let n = Array.from(e.selection.getSelectedBlocks());
                t.change(t => {
                    const e = n[n.length - 1];
                    let i = e.nextSibling;
                    for (; i && "listItem" == i.name && i.getAttribute("listIndent") > e.getAttribute("listIndent");) n.push(i), i = i.nextSibling;
                    this._indentBy < 0 && (n = n.reverse());
                    for (const e of n) {
                        const n = e.getAttribute("listIndent") + this._indentBy;
                        n < 0 ? t.rename(e, "paragraph") : t.setAttribute("listIndent", n, e)
                    }
                })
            }
            _checkEnabled() {
                const t = Au(this.editor.model.document.selection.getSelectedBlocks());
                if (!t || !t.is("listItem")) return !1;
                if (this._indentBy > 0) {
                    const e = t.getAttribute("listIndent"),
                        n = t.getAttribute("listType");
                    let i = t.previousSibling;
                    for (; i && i.is("listItem") && i.getAttribute("listIndent") >= e;) {
                        if (i.getAttribute("listIndent") == e) return i.getAttribute("listType") == n;
                        i = i.previousSibling
                    }
                    return !1
                }
                return !0
            }
        }

        function Fm() {
            const t = !this.isEmpty && ("ul" == this.getChild(0).name || "ol" == this.getChild(0).name);
            return this.isEmpty || t ? 0 : xi.call(this)
        }

        function Um(t) {
            return (e, n, i) => {
                const o = i.consumable;
                if (!o.test(n.item, "insert") || !o.test(n.item, "attribute:listType") || !o.test(n.item, "attribute:listIndent")) return;
                o.consume(n.item, "insert"), o.consume(n.item, "attribute:listType"), o.consume(n.item, "attribute:listIndent");
                const r = n.item;
                np(r, function(t, e) {
                    const n = e.mapper,
                        i = e.writer,
                        o = "numbered" == t.getAttribute("listType") ? "ol" : "ul",
                        r = function(t) {
                            const e = t.createContainerElement("li");
                            return e.getFillerOffset = Fm, e
                        }(i),
                        s = i.createContainerElement(o, null);
                    return i.insert(i.createPositionAt(s, 0), r), n.bindElements(t, r), r
                }(r, i), i, t)
            }
        }

        function Hm(t) {
            return (e, n, i) => {
                const o = i.mapper.toViewPosition(n.position).getLastMatchingPosition(t => !t.item.is("li")).nodeAfter,
                    r = i.writer;
                r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                const s = o.parent,
                    a = s.previousSibling,
                    c = r.createRangeOn(s),
                    l = r.remove(c);
                a && a.nextSibling && ep(r, a, a.nextSibling), ip(i.mapper.toModelElement(o).getAttribute("listIndent") + 1, n.position, c.start, o, i, t);
                for (const t of r.createRangeIn(l).getItems()) i.mapper.unbindViewElement(t);
                e.stop()
            }
        }

        function qm(t, e, n) {
            if (!n.consumable.consume(e.item, "attribute:listType")) return;
            const i = n.mapper.toViewElement(e.item),
                o = n.writer;
            o.breakContainer(o.createPositionBefore(i)), o.breakContainer(o.createPositionAfter(i));
            let r = i.parent;
            const s = "numbered" == e.attributeNewValue ? "ol" : "ul";
            ep(o, r = o.rename(s, r), r.nextSibling), ep(o, r.previousSibling, r);
            for (const t of e.item.getChildren()) n.consumable.consume(t, "insert")
        }

        function Wm(t) {
            return (e, n, i) => {
                if (!i.consumable.consume(n.item, "attribute:listIndent")) return;
                const o = i.mapper.toViewElement(n.item),
                    r = i.writer;
                r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                const s = o.parent,
                    a = s.previousSibling,
                    c = r.createRangeOn(s);
                r.remove(c), a && a.nextSibling && ep(r, a, a.nextSibling), ip(n.attributeOldValue + 1, n.range.start, c.start, o, i, t), np(n.item, o, i, t);
                for (const t of n.item.getChildren()) i.consumable.consume(t, "insert")
            }
        }

        function Ym(t, e, n) {
            if ("listItem" != e.item.name) {
                let t = n.mapper.toViewPosition(e.range.start);
                const i = n.writer,
                    o = [];
                for (;
                    ("ul" == t.parent.name || "ol" == t.parent.name) && "li" == (t = i.breakContainer(t)).parent.name;) {
                    const e = t,
                        n = i.createPositionAt(t.parent, "end");
                    if (!e.isEqual(n)) {
                        const t = i.remove(i.createRange(e, n));
                        o.push(t)
                    }
                    t = i.createPositionAfter(t.parent)
                }
                if (o.length > 0) {
                    for (let e = 0; e < o.length; e++) {
                        const n = t.nodeBefore;
                        if (t = i.insert(t, o[e]).end, e > 0) {
                            const e = ep(i, n, n.nextSibling);
                            e && e.parent == n && t.offset--
                        }
                    }
                    ep(i, t.nodeBefore, t.nodeAfter)
                }
            }
        }

        function $m(t, e, n) {
            const i = n.mapper.toViewPosition(e.position),
                o = i.nodeBefore,
                r = i.nodeAfter;
            ep(n.writer, o, r)
        }

        function Gm(t, e, n) {
            if (n.consumable.consume(e.viewItem, {
                    name: !0
                })) {
                const t = n.writer,
                    i = this.conversionApi.store,
                    o = t.createElement("listItem");
                i.indent = i.indent || 0, t.setAttribute("listIndent", i.indent, o);
                const r = e.viewItem.parent && "ol" == e.viewItem.parent.name ? "numbered" : "bulleted";
                t.setAttribute("listType", r, o), i.indent++;
                const s = n.splitToAllowedParent(o, e.modelCursor);
                if (!s) return;
                t.insert(o, s.position);
                const a = function(t, e, n) {
                    const {
                        writer: i,
                        schema: o
                    } = n;
                    let r = i.createPositionAfter(t);
                    for (const s of e)
                        if ("ul" == s.name || "ol" == s.name) r = n.convertItem(s, r).modelCursor;
                        else {
                            const e = n.convertItem(s, i.createPositionAt(t, "end")),
                                a = e.modelRange.start.nodeAfter,
                                c = a && a.is("element") && !o.checkChild(t, a.name);
                            c && (t = e.modelCursor.parent.is("listItem") ? e.modelCursor.parent : Xm(e.modelCursor), r = i.createPositionAfter(t))
                        }
                    return r
                }(o, e.viewItem.getChildren(), n);
                i.indent--, e.modelRange = t.createRange(e.modelCursor, a), s.cursorParent ? e.modelCursor = t.createPositionAt(s.cursorParent, 0) : e.modelCursor = e.modelRange.end
            }
        }

        function Qm(t, e, n) {
            if (n.consumable.test(e.viewItem, {
                    name: !0
                })) {
                const t = Array.from(e.viewItem.getChildren());
                for (const e of t) e.is("li") || e._remove()
            }
        }

        function Jm(t, e, n) {
            if (n.consumable.test(e.viewItem, {
                    name: !0
                })) {
                if (0 === e.viewItem.childCount) return;
                const t = [...e.viewItem.getChildren()];
                let n = !1,
                    i = !0;
                for (const e of t) !n || e.is("ul") || e.is("ol") || e._remove(), e.is("text") ? (i && (e._data = e.data.replace(/^\s+/, "")), (!e.nextSibling || e.nextSibling.is("ul") || e.nextSibling.is("ol")) && (e._data = e.data.replace(/\s+$/, ""))) : (e.is("ul") || e.is("ol")) && (n = !0), i = !1
            }
        }

        function Km(t) {
            return (e, n) => {
                if (n.isPhantom) return;
                const i = n.modelPosition.nodeBefore;
                if (i && i.is("listItem")) {
                    const e = n.mapper.toViewElement(i),
                        o = e.getAncestors().find(t => t.is("ul") || t.is("ol")),
                        r = t.createPositionAt(e, 0).getWalker();
                    for (const t of r) {
                        if ("elementStart" == t.type && t.item.is("li")) {
                            n.viewPosition = t.previousPosition;
                            break
                        }
                        if ("elementEnd" == t.type && t.item == o) {
                            n.viewPosition = t.nextPosition;
                            break
                        }
                    }
                }
            }
        }

        function Zm(t, [e, n]) {
            let i, o = e.is("documentFragment") ? e.getChild(0) : e;
            if (i = n ? this.createSelection(n) : this.document.selection, o && o.is("listItem")) {
                const t = i.getFirstPosition();
                let e = null;
                if (t.parent.is("listItem") ? e = t.parent : t.nodeBefore && t.nodeBefore.is("listItem") && (e = t.nodeBefore), e) {
                    const t = e.getAttribute("listIndent");
                    if (t > 0)
                        for (; o && o.is("listItem");) o._setAttribute("listIndent", o.getAttribute("listIndent") + t), o = o.nextSibling
                }
            }
        }

        function Xm(t) {
            const e = new qs({
                startPosition: t
            });
            let n;
            do {
                n = e.next()
            } while (!n.value.item.is("listItem"));
            return n.value.item
        }

        function tp(t, e) {
            const n = !!e.sameIndent,
                i = !!e.smallerIndent,
                o = e.listIndent;
            let r = t;
            for (; r && "listItem" == r.name;) {
                const t = r.getAttribute("listIndent");
                if (n && o == t || i && o > t) return r;
                r = r.previousSibling
            }
            return null
        }

        function ep(t, e, n) {
            return e && n && ("ul" == e.name || "ol" == e.name) && e.name == n.name ? t.mergeContainers(t.createPositionAfter(e)) : null
        }

        function np(t, e, n, i) {
            const o = e.parent,
                r = n.mapper,
                s = n.writer;
            let a = r.toViewPosition(i.createPositionBefore(t));
            const c = tp(t.previousSibling, {
                    sameIndent: !0,
                    smallerIndent: !0,
                    listIndent: t.getAttribute("listIndent")
                }),
                l = t.previousSibling;
            if (c && c.getAttribute("listIndent") == t.getAttribute("listIndent")) {
                const t = r.toViewElement(c);
                a = s.breakContainer(s.createPositionAfter(t))
            } else a = l && "listItem" == l.name ? r.toViewPosition(i.createPositionAt(l, "end")) : r.toViewPosition(i.createPositionBefore(t));
            if (a = op(a), s.insert(a, o), l && "listItem" == l.name) {
                const t = r.toViewElement(l),
                    n = s.createRange(s.createPositionAt(t, 0), a).getWalker({
                        ignoreElementEnd: !0
                    });
                for (const t of n)
                    if (t.item.is("li")) {
                        const i = s.breakContainer(s.createPositionBefore(t.item)),
                            o = t.item.parent,
                            r = s.createPositionAt(e, "end");
                        ep(s, r.nodeBefore, r.nodeAfter), s.move(s.createRangeOn(o), r), n.position = i
                    }
            } else {
                const n = o.nextSibling;
                if (n && (n.is("ul") || n.is("ol"))) {
                    let i = null;
                    for (const e of n.getChildren()) {
                        const n = r.toModelElement(e);
                        if (!(n && n.getAttribute("listIndent") > t.getAttribute("listIndent"))) break;
                        i = e
                    }
                    i && (s.breakContainer(s.createPositionAfter(i)), s.move(s.createRangeOn(i.parent), s.createPositionAt(e, "end")))
                }
            }
            ep(s, o, o.nextSibling), ep(s, o.previousSibling, o)
        }

        function ip(t, e, n, i, o, r) {
            const s = tp(e.nodeBefore, {
                    sameIndent: !0,
                    smallerIndent: !0,
                    listIndent: t,
                    foo: "b"
                }),
                a = o.mapper,
                c = o.writer,
                l = s ? s.getAttribute("listIndent") : null;
            let d;
            if (s)
                if (l == t) {
                    const t = a.toViewElement(s).parent;
                    d = c.createPositionAfter(t)
                } else {
                    const t = r.createPositionAt(s, "end");
                    d = a.toViewPosition(t)
                } else d = n;
            d = op(d);
            for (const t of[...i.getChildren()])(t.is("ul") || t.is("ol")) && (d = c.move(c.createRangeOn(t), d).end, ep(c, t, t.nextSibling), ep(c, t.previousSibling, t))
        }

        function op(t) {
            return t.getLastMatchingPosition(t => t.item.is("uiElement"))
        }
        class rp extends $l {
            static get requires() {
                return [wf]
            }
            init() {
                const t = this.editor;
                t.model.schema.register("listItem", {
                    inheritAllFrom: "$block",
                    allowAttributes: ["listType", "listIndent"]
                });
                const e = t.data,
                    n = t.editing;
                t.model.document.registerPostFixer(e => (function(t, e) {
                    const n = t.document.differ.getChanges(),
                        i = new Map;
                    let o = !1;
                    for (const t of n)
                        if ("insert" == t.type && "listItem" == t.name) r(t.position);
                        else if ("insert" == t.type && "listItem" != t.name) {
                        if ("$text" != t.name) {
                            const n = t.position.nodeAfter;
                            n.hasAttribute("listIndent") && (e.removeAttribute("listIndent", n), o = !0), n.hasAttribute("listType") && (e.removeAttribute("listType", n), o = !0)
                        }
                        r(t.position.getShiftedBy(t.length))
                    } else "remove" == t.type && "listItem" == t.name ? r(t.position) : "attribute" == t.type && "listIndent" == t.attributeKey ? r(t.range.start) : "attribute" == t.type && "listType" == t.attributeKey && r(t.range.start);
                    for (const t of i.values()) s(t), a(t);
                    return o;

                    function r(t) {
                        const e = t.nodeBefore;
                        if (e && e.is("listItem")) {
                            let n = e;
                            if (i.has(n)) return;
                            for (; n.previousSibling && n.previousSibling.is("listItem");)
                                if (n = n.previousSibling, i.has(n)) return;
                            i.set(t.nodeBefore, n)
                        } else {
                            const e = t.nodeAfter;
                            e && e.is("listItem") && i.set(e, e)
                        }
                    }

                    function s(t) {
                        let n = 0,
                            i = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (r > n) {
                                let s;
                                null === i ? (i = r - n, s = n) : (i > r && (i = r), s = r - i), e.setAttribute("listIndent", s, t), o = !0
                            } else i = null, n = t.getAttribute("listIndent") + 1;
                            t = t.nextSibling
                        }
                    }

                    function a(t) {
                        let n = [],
                            i = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (i && i.getAttribute("listIndent") > r && (n = n.slice(0, r + 1)), 0 != r)
                                if (n[r]) {
                                    const i = n[r];
                                    t.getAttribute("listType") != i && (e.setAttribute("listType", i, t), o = !0)
                                } else n[r] = t.getAttribute("listType");
                            i = t, t = t.nextSibling
                        }
                    }
                })(t.model, e)), n.mapper.registerViewToModelLength("li", sp), e.mapper.registerViewToModelLength("li", sp), n.mapper.on("modelToViewPosition", Km(n.view)), n.mapper.on("viewToModelPosition", function(t) {
                    return (e, n) => {
                        const i = n.viewPosition,
                            o = i.parent,
                            r = n.mapper;
                        if ("ul" == o.name || "ol" == o.name) {
                            if (i.isAtEnd) {
                                const e = r.toModelElement(i.nodeBefore),
                                    o = r.getModelLength(i.nodeBefore);
                                n.modelPosition = t.createPositionBefore(e).getShiftedBy(o)
                            } else {
                                const e = r.toModelElement(i.nodeAfter);
                                n.modelPosition = t.createPositionBefore(e)
                            }
                            e.stop()
                        } else if ("li" == o.name && i.nodeBefore && ("ul" == i.nodeBefore.name || "ol" == i.nodeBefore.name)) {
                            const s = r.toModelElement(o);
                            let a = 1,
                                c = i.nodeBefore;
                            for (; c && (c.is("ul") || c.is("ol"));) a += r.getModelLength(c), c = c.previousSibling;
                            n.modelPosition = t.createPositionBefore(s).getShiftedBy(a), e.stop()
                        }
                    }
                }(t.model)), e.mapper.on("modelToViewPosition", Km(n.view)), n.downcastDispatcher.on("insert", Ym, {
                    priority: "high"
                }), n.downcastDispatcher.on("insert:listItem", Um(t.model)), e.downcastDispatcher.on("insert", Ym, {
                    priority: "high"
                }), e.downcastDispatcher.on("insert:listItem", Um(t.model)), n.downcastDispatcher.on("attribute:listType:listItem", qm), e.downcastDispatcher.on("attribute:listType:listItem", qm), n.downcastDispatcher.on("attribute:listIndent:listItem", Wm(t.model)), e.downcastDispatcher.on("attribute:listIndent:listItem", Wm(t.model)), n.downcastDispatcher.on("remove:listItem", Hm(t.model)), n.downcastDispatcher.on("remove", $m, {
                    priority: "low"
                }), e.downcastDispatcher.on("remove:listItem", Hm(t.model)), e.downcastDispatcher.on("remove", $m, {
                    priority: "low"
                }), e.upcastDispatcher.on("element:ul", Qm, {
                    priority: "high"
                }), e.upcastDispatcher.on("element:ol", Qm, {
                    priority: "high"
                }), e.upcastDispatcher.on("element:li", Jm, {
                    priority: "high"
                }), e.upcastDispatcher.on("element:li", Gm), t.model.on("insertContent", Zm, {
                    priority: "high"
                }), t.commands.add("numberedList", new jm(t, "numbered")), t.commands.add("bulletedList", new jm(t, "bulleted")), t.commands.add("indentList", new zm(t, "forward")), t.commands.add("outdentList", new zm(t, "backward"));
                const i = this.editor.editing.view.document;
                this.listenTo(i, "enter", (t, e) => {
                    const n = this.editor.model.document,
                        i = n.selection.getLastPosition().parent;
                    n.selection.isCollapsed && "listItem" == i.name && i.isEmpty && (this.editor.execute("outdentList"), e.preventDefault(), t.stop())
                }), this.listenTo(i, "delete", (t, e) => {
                    if ("backward" !== e.direction) return;
                    const n = this.editor.model.document.selection;
                    if (!n.isCollapsed) return;
                    const i = n.getFirstPosition();
                    if (!i.isAtStart) return;
                    const o = i.parent;
                    "listItem" === o.name && (o.previousSibling && "listItem" === o.previousSibling.name || (this.editor.execute("outdentList"), e.preventDefault(), t.stop()))
                }, {
                    priority: "high"
                });
                const o = t => (e, n) => {
                    this.editor.commands.get(t).isEnabled && (this.editor.execute(t), n())
                };
                this.editor.keystrokes.set("Tab", o("indentList")), this.editor.keystrokes.set("Shift+Tab", o("outdentList"))
            }
        }

        function sp(t) {
            let e = 1;
            for (const n of t.getChildren())
                if ("ul" == n.name || "ol" == n.name)
                    for (const t of n.getChildren()) e += sp(t);
            return e
        }
        var ap = n(34),
            cp = n.n(ap),
            lp = n(35),
            dp = n.n(lp);
        class up extends $l {
            init() {
                const t = this.editor.t;
                this._addButton("numberedList", t("o"), cp.a), this._addButton("bulletedList", t("p"), dp.a)
            }
            _addButton(t, e, n) {
                const i = this.editor;
                i.ui.componentFactory.add(t, o => {
                    const r = i.commands.get(t),
                        s = new qd(o);
                    return s.set({
                        label: e,
                        icon: n,
                        tooltip: !0
                    }), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), this.listenTo(s, "execute", () => i.execute(t)), s
                })
            }
        }

        function hp(t, e) {
            return t => {
                t.on("attribute:url:media", n)
            };

            function n(n, i, o) {
                if (!o.consumable.consume(i.item, n.name)) return;
                const r = i.attributeNewValue,
                    s = o.writer,
                    a = o.mapper.toViewElement(i.item);
                s.remove(s.createRangeIn(a));
                const c = t.getMediaViewElement(s, r, e);
                s.insert(s.createPositionAt(a, 0), c)
            }
        }

        function fp(t, e, n, i) {
            const o = t.createContainerElement("figure", {
                class: "media"
            });
            return o.getFillerOffset = gp, t.insert(t.createPositionAt(o, 0), e.getMediaViewElement(t, n, i)), o
        }

        function mp(t) {
            const e = t.getSelectedElement();
            return e && e.is("media") ? e : null
        }

        function pp(t, e, n) {
            t.change(i => {
                const o = i.createElement("media", {
                    url: e
                });
                t.insertContent(o, n), i.setSelection(o, "on")
            })
        }

        function gp() {
            return null
        }
        class bp extends Zl {
            refresh() {
                const t = this.editor.model,
                    e = t.document.selection,
                    n = t.schema,
                    i = e.getFirstPosition(),
                    o = mp(e);
                let r = i.parent;
                r != r.root && (r = r.parent), this.value = o ? o.getAttribute("url") : null, this.isEnabled = n.checkChild(r, "media")
            }
            execute(t) {
                const e = this.editor.model,
                    n = e.document.selection,
                    i = mp(n);
                if (i) e.change(e => {
                    e.setAttribute("url", t, i)
                });
                else {
                    const i = lh(n, e);
                    pp(e, t, i)
                }
            }
        }
        var wp = n(36),
            _p = n.n(wp);
        const kp = "0 0 64 42";
        class vp {
            constructor(t, e) {
                const n = e.providers,
                    i = e.extraProviders || [],
                    o = new Set(e.removeProviders),
                    r = n.concat(i).filter(t => {
                        const e = t.name;
                        return e ? !o.has(e) : (bs.a.warn("media-embed-no-provider-name: The configured media provider has no name and cannot be used.", {
                            provider: t
                        }), !1)
                    });
                this.locale = t, this.providerDefinitions = r
            }
            hasMedia(t) {
                return !!this._getMedia(t)
            }
            getMediaViewElement(t, e, n) {
                return this._getMedia(e).getViewElement(t, n)
            }
            _getMedia(t) {
                if (!t) return new yp(this.locale);
                t = t.trim();
                for (const e of this.providerDefinitions) {
                    const n = e.html;
                    let i = e.url;
                    Array.isArray(i) || (i = [i]);
                    for (const e of i) {
                        const i = this._getUrlMatches(t, e);
                        if (i) return new yp(this.locale, t, i, n)
                    }
                }
                return null
            }
            _getUrlMatches(t, e) {
                let n = t.match(e);
                if (n) return n;
                let i = t.replace(/^https?:\/\//, "");
                return (n = i.match(e)) ? n : (n = (i = i.replace(/^www\./, "")).match(e)) || null
            }
        }
        class yp {
            constructor(t, e, n, i) {
                this.url = this._getValidUrl(e), this._t = t.t, this._match = n, this._previewRenderer = i
            }
            getViewElement(t, e) {
                const n = {};
                if (e.renderForEditingView || e.renderMediaPreview && this.url && this._previewRenderer) {
                    this.url && (n["data-oembed-url"] = this.url), e.renderForEditingView && (n.class = "ck-media__wrapper");
                    const i = this._getPreviewHtml(e);
                    return t.createUIElement("div", n, function(t) {
                        const e = this.toDomElement(t);
                        return e.innerHTML = i, e
                    })
                }
                return this.url && (n.url = this.url), t.createEmptyElement("oembed", n)
            }
            _getPreviewHtml(t) {
                return this._previewRenderer ? this._previewRenderer(this._match) : this.url && t.renderForEditingView ? this._getPlaceholderHtml() : ""
            }
            _getPlaceholderHtml() {
                const t = new Hd,
                    e = new Ud;
                return t.text = this._t("Open media in new tab"), e.content = _p.a, e.viewBox = kp, new ml({
                    tag: "div",
                    attributes: {
                        class: "ck ck-reset_all ck-media__placeholder"
                    },
                    children: [{
                        tag: "div",
                        attributes: {
                            class: "ck-media__placeholder__icon"
                        },
                        children: [e]
                    }, {
                        tag: "a",
                        attributes: {
                            class: "ck-media__placeholder__url",
                            target: "new",
                            href: this.url
                        },
                        children: [{
                            tag: "span",
                            attributes: {
                                class: "ck-media__placeholder__url__text"
                            },
                            children: [this.url]
                        }, t]
                    }]
                }).render().outerHTML
            }
            _getValidUrl(t) {
                return t ? t.match(/^https?/) ? t : "https://" + t : null
            }
        }
        n(105);
        class xp extends $l {
            static get pluginName() {
                return "MediaEmbedEditing"
            }
            constructor(t) {
                super(t), t.config.define("mediaEmbed", {
                    providers: [{
                        name: "dailymotion",
                        url: /^dailymotion\.com\/video\/(\w+)/,
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; ">' + `<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'
                        }
                    }, {
                        name: "spotify",
                        url: [/^open\.spotify\.com\/(artist\/\w+)/, /^open\.spotify\.com\/(album\/\w+)/, /^open\.spotify\.com\/(track\/\w+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' + `<iframe src="https://open.spotify.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'
                        }
                    }, {
                        name: "youtube",
                        url: [/^youtube\.com\/watch\?v=([\w-]+)/, /^youtube\.com\/v\/([\w-]+)/, /^youtube\.com\/embed\/([\w-]+)/, /^youtu\.be\/([\w-]+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://www.youtube.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
                        }
                    }, {
                        name: "vimeo",
                        url: [/^vimeo\.com\/(\d+)/, /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/channels\/[^/]+\/(\d+)/, /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/, /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/, /^player\.vimeo\.com\/video\/(\d+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://player.vimeo.com/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
                        }
                    }, {
                        name: "instagram",
                        url: /^instagram\.com\/p\/(\w+)/
                    }, {
                        name: "twitter",
                        url: /^twitter\.com/
                    }, {
                        name: "googleMaps",
                        url: /^google\.com\/maps/
                    }, {
                        name: "flickr",
                        url: /^flickr\.com/
                    }, {
                        name: "facebook",
                        url: /^facebook\.com/
                    }]
                }), this.registry = new vp(t.locale, t.config.get("mediaEmbed"))
            }
            init() {
                const t = this.editor,
                    e = t.model.schema,
                    n = t.t,
                    i = t.conversion,
                    o = t.config.get("mediaEmbed.previewsInData"),
                    r = this.registry;
                t.commands.add("mediaEmbed", new bp(t)), e.register("media", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["url"]
                }), i.for("dataDowncast").elementToElement({
                    model: "media",
                    view: (t, e) => {
                        const n = t.getAttribute("url");
                        return fp(e, r, n, {
                            renderMediaPreview: n && o
                        })
                    }
                }), i.for("dataDowncast").add(hp(r, {
                    renderMediaPreview: o
                })), i.for("editingDowncast").elementToElement({
                    model: "media",
                    view: (t, e) => {
                        const i = t.getAttribute("url");
                        return function(t, e, n) {
                            return e.setCustomProperty("media", !0, t), sh(t, e, {
                                label: n
                            })
                        }(fp(e, r, i, {
                            renderForEditingView: !0
                        }), e, n("ak"))
                    }
                }), i.for("editingDowncast").add(hp(r, {
                    renderForEditingView: !0
                })), i.for("upcast").elementToElement({
                    view: {
                        name: "oembed",
                        attributes: {
                            url: !0
                        }
                    },
                    model: (t, e) => {
                        const n = t.getAttribute("url");
                        if (r.hasMedia(n)) return e.createElement("media", {
                            url: n
                        })
                    }
                }).elementToElement({
                    view: {
                        name: "div",
                        attributes: {
                            "data-oembed-url": !0
                        }
                    },
                    model: (t, e) => {
                        const n = t.getAttribute("data-oembed-url");
                        if (r.hasMedia(n)) return e.createElement("media", {
                            url: n
                        })
                    }
                })
            }
        }
        const Ap = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;
        class Cp extends $l {
            static get requires() {
                return [Kl, Jd]
            }
            static get pluginName() {
                return "AutoMediaEmbed"
            }
            constructor(t) {
                super(t), this._timeoutId = null, this._positionToInsert = null
            }
            init() {
                const t = this.editor,
                    e = t.model.document;
                this.listenTo(t.plugins.get(Kl), "inputTransformation", () => {
                    const t = e.selection.getFirstRange(),
                        n = Oc.fromPosition(t.start);
                    n.stickiness = "toPrevious";
                    const i = Oc.fromPosition(t.end);
                    i.stickiness = "toNext", e.once("change:data", () => {
                        this._embedMediaBetweenPositions(n, i), n.detach(), i.detach()
                    }, {
                        priority: "high"
                    })
                }), t.commands.get("undo").on("execute", () => {
                    this._timeoutId && (nr.window.clearTimeout(this._timeoutId), this._positionToInsert.detach(), this._timeoutId = null, this._positionToInsert = null)
                }, {
                    priority: "high"
                })
            }
            _embedMediaBetweenPositions(t, e) {
                const n = this.editor,
                    i = n.plugins.get(xp).registry,
                    o = new oa(t, e),
                    r = o.getWalker({
                        ignoreElementEnd: !0
                    });
                let s = "";
                for (const t of r) t.item.is("textProxy") && (s += t.item.data);
                if (!(s = s.trim()).match(Ap)) return;
                if (!i.hasMedia(s)) return;
                n.commands.get("mediaEmbed").isEnabled && (this._positionToInsert = Oc.fromPosition(t), this._timeoutId = nr.window.setTimeout(() => {
                    n.model.change(t => {
                        let e;
                        this._timeoutId = null, t.remove(o), "$graveyard" !== this._positionToInsert.root.rootName && (e = this._positionToInsert), pp(n.model, s, e), this._positionToInsert.detach(), this._positionToInsert = null
                    })
                }, 100))
            }
        }
        n(107);
        class Tp extends Nl {
            constructor(t, e) {
                super(e);
                const n = e.t;
                this.focusTracker = new il, this.keystrokes = new Gc, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(n("au"), Eh.a, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(n("av"), Ih.a, "ck-button-cancel", "cancel"), this._focusables = new hl, this._focusCycler = new Fl({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {
                        focusPrevious: "shift + tab",
                        focusNext: "tab"
                    }
                }), this._validators = t, this.setTemplate({
                    tag: "form",
                    attributes: {
                        class: ["ck", "ck-media-form"],
                        tabindex: "-1"
                    },
                    children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
                })
            }
            render() {
                super.render(), Ph({
                    view: this
                }), [this.urlInputView, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element);
                const t = t => t.stopPropagation();
                this.keystrokes.set("arrowright", t), this.keystrokes.set("arrowleft", t), this.keystrokes.set("arrowup", t), this.keystrokes.set("arrowdown", t), this.listenTo(this.urlInputView.element, "selectstart", (t, e) => {
                    e.stopPropagation()
                }, {
                    priority: "high"
                })
            }
            focus() {
                this._focusCycler.focusFirst()
            }
            get url() {
                return this.urlInputView.inputView.element.value.trim()
            }
            set url(t) {
                this.urlInputView.inputView.element.value = t.trim()
            }
            isValid() {
                this.resetFormStatus();
                for (const t of this._validators) {
                    const e = t(this);
                    if (e) return this.urlInputView.errorText = e, !1
                }
                return !0
            }
            resetFormStatus() {
                this.urlInputView.errorText = null, this.urlInputView.infoText = this._urlInputViewInfoDefault
            }
            _createUrlInput() {
                const t = this.locale.t,
                    e = new Ch(this.locale, Th),
                    n = e.inputView;
                return this._urlInputViewInfoDefault = t("ax"), this._urlInputViewInfoTip = t("ay"), e.label = t("az"), e.infoText = this._urlInputViewInfoDefault, n.placeholder = "https://example.com", n.on("input", () => {
                    e.infoText = n.element.value ? this._urlInputViewInfoTip : this._urlInputViewInfoDefault
                }), e
            }
            _createButton(t, e, n, i) {
                const o = new qd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({
                    attributes: {
                        class: n
                    }
                }), i && o.delegate("execute").to(this, i), o
            }
        }
        var Pp = n(37),
            Mp = n.n(Pp);
        class Ep extends $l {
            static get requires() {
                return [xp]
            }
            static get pluginName() {
                return "MediaEmbedUI"
            }
            init() {
                const t = this.editor,
                    e = t.commands.get("mediaEmbed"),
                    n = t.plugins.get(xp).registry;
                this.form = new Tp(function(t, e) {
                    return [e => {
                        if (!e.url.length) return t("am")
                    }, n => {
                        if (!e.hasMedia(n.url)) return t("an")
                    }]
                }(t.t, n), t.locale), t.ui.componentFactory.add("mediaEmbed", n => {
                    const i = Df(n);
                    return this._setUpDropdown(i, this.form, e, t), this._setUpForm(this.form, i, e), i
                })
            }
            _setUpDropdown(t, e, n) {
                const i = this.editor,
                    o = i.t,
                    r = t.buttonView;

                function s() {
                    i.editing.view.focus(), t.isOpen = !1
                }
                t.bind("isEnabled").to(n), t.panelView.children.add(e), r.set({
                    label: o("al"),
                    icon: Mp.a,
                    tooltip: !0
                }), r.on("open", () => {
                    e.url = n.value || "", e.urlInputView.select(), e.focus()
                }, {
                    priority: "low"
                }), t.on("submit", () => {
                    e.isValid() && (i.execute("mediaEmbed", e.url), s())
                }), t.on("change:isOpen", () => e.resetFormStatus()), t.on("cancel", () => s())
            }
            _setUpForm(t, e, n) {
                t.delegate("submit", "cancel").to(e), t.urlInputView.bind("value").to(n, "value"), t.urlInputView.bind("isReadOnly").to(n, "isEnabled", t => !t), t.saveButtonView.bind("isEnabled").to(n)
            }
        }
        n(109);

        function Sp(t) {
            return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 === e.length ? " " : Array(e.length + 1).join("  ").substr(0, e.length))
        }

        function Ip(t) {
            const e = new DOMParser,
                n = function(t) {
                    return Sp(Sp(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g, "$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g, "").replace(/ <\//g, " </").replace(/ <o:p><\/o:p>/g, " <o:p></o:p>").replace(/>(\s*[\r\n]\s*)</g, "><")
                }(function(t) {
                    const e = t.match(/<\/body>(.*?)(<\/html>|$)/);
                    e && e[1] && (t = t.slice(0, e.index) + t.slice(e.index).replace(e[1], ""));
                    return t
                }(t = t.replace(/<!--\[if gte vml 1]>/g, ""))),
                i = e.parseFromString(n, "text/html");
            ! function(t) {
                t.querySelectorAll("span[style*=spacerun]").forEach(t => {
                    const e = t.childNodes[0].data.length;
                    t.innerHTML = Array(e + 1).join("  ").substr(0, e)
                })
            }(i);
            const o = i.body.innerHTML,
                r = function(t) {
                    const e = new rr({
                            blockFiller: jo
                        }),
                        n = t.createDocumentFragment(),
                        i = t.body.childNodes;
                    for (; i.length > 0;) n.appendChild(i[0]);
                    return e.domToView(n)
                }(i),
                s = function(t) {
                    const e = [],
                        n = [],
                        i = Array.from(t.getElementsByTagName("style"));
                    for (const t of i) t.sheet && t.sheet.cssRules && t.sheet.cssRules.length && (e.push(t.sheet), n.push(t.innerHTML));
                    return {
                        styles: e,
                        stylesString: n.join(" ")
                    }
                }(i);
            return {
                body: r,
                bodyString: o,
                styles: s.styles,
                stylesString: s.stylesString
            }
        }

        function Np(t, e) {
            if (!t.childCount) return;
            const n = new uf,
                i = function(t, e) {
                    const n = e.createRangeIn(t),
                        i = new bi({
                            name: /^p|h\d+$/,
                            styles: {
                                "mso-list": /.*/
                            }
                        }),
                        o = [];
                    for (const t of n)
                        if ("elementStart" === t.type && i.match(t.item)) {
                            const e = Op(t.item);
                            o.push({
                                element: t.item,
                                id: e.id,
                                order: e.order,
                                indent: e.indent
                            })
                        }
                    return o
                }(t, n);
            if (!i.length) return;
            let o = null;
            i.forEach((t, r) => {
                if (!o || function(t, e) {
                        if (t.id !== e.id) return !0;
                        const n = e.element.previousSibling;
                        if (!n) return !0;
                        return !n.is("ul") && !n.is("ol")
                    }(i[r - 1], t)) {
                    const i = function(t, e) {
                        const n = /mso-level-number-format:([^;]*);/gi,
                            i = new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`, "gi").exec(e);
                        let o = "decimal";
                        if (i && i[1]) {
                            const t = n.exec(i[1]);
                            t && t[1] && (o = t[1].trim())
                        }
                        return {
                            type: "bullet" !== o && "image" !== o ? "ol" : "ul",
                            style: o
                        }
                    }(t, e);
                    o = function(t, e, n) {
                        const i = new _i(t.type),
                            o = e.parent.getChildIndex(e);
                        return n.insertChild(o, i, e.parent), i
                    }(i, t.element, n)
                }
                const s = function(t, e) {
                    return function(t, e) {
                        const n = new bi({
                                name: "span",
                                styles: {
                                    "mso-list": "Ignore"
                                }
                            }),
                            i = e.createRangeIn(t);
                        for (const t of i) "elementStart" === t.type && n.match(t.item) && e.remove(t.item)
                    }(t, e), e.rename("li", t)
                }(t.element, n);
                n.appendChild(s, o)
            })
        }

        function Op(t) {
            const e = {},
                n = t.getStyle("mso-list");
            return n && (e.id = parseInt(n.match(/(^|\s+)l(\d+)/i)[2]), e.order = parseInt(n.match(/\s*lfo(\d+)/i)[1]), e.indent = parseInt(n.match(/\s*level(\d+)/i)[1])), e
        }

        function Rp(t, e) {
            if (!t.childCount) return;
            const n = new uf;
            ! function(t, e, n) {
                const i = n.createRangeIn(e),
                    o = new bi({
                        name: "img"
                    }),
                    r = [];
                for (const e of i)
                    if (o.match(e.item)) {
                        const n = e.item,
                            i = n.getAttribute("v:shapes") ? n.getAttribute("v:shapes").split(" ") : [];
                        i.length && i.every(e => t.indexOf(e) > -1) ? r.push(n) : n.getAttribute("src") || r.push(n)
                    }
                for (const t of r) n.remove(t)
            }(function(t, e) {
                const n = e.createRangeIn(t),
                    i = new bi({
                        name: /v:(.+)/
                    }),
                    o = [];
                for (const t of n) {
                    const e = t.item,
                        n = e.previousSibling && e.previousSibling.name || null;
                    i.match(e) && e.getAttribute("o:gfxdata") && "v:shapetype" !== n && o.push(t.item.getAttribute("id"))
                }
                return o
            }(t, n), t, n),
            function(t, e) {
                const n = e.createRangeIn(t),
                    i = new bi({
                        name: /v:(.+)/
                    }),
                    o = [];
                for (const t of n) i.match(t.item) && o.push(t.item);
                for (const t of o) e.remove(t)
            }(t, n);
            const i = function(t, e) {
                const n = e.createRangeIn(t),
                    i = new bi({
                        name: "img"
                    }),
                    o = [];
                for (const t of n) i.match(t.item) && t.item.getAttribute("src").startsWith("file://") && o.push(t.item);
                return o
            }(t, n);
            i.length && function(t, e, n) {
                if (t.length === e.length)
                    for (let i = 0; i < t.length; i++) {
                        const o = `data:${e[i].type};base64,${Dp(e[i].hex)}`;
                        n.setAttribute("src", o, t[i])
                    }
            }(i, function(t) {
                if (!t) return [];
                const e = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,
                    n = new RegExp("(?:(" + e.source + "))([\\da-fA-F\\s]+)\\}", "g"),
                    i = t.match(n),
                    o = [];
                if (i)
                    for (const t of i) {
                        let n = !1;
                        t.includes("\\pngblip") ? n = "image/png" : t.includes("\\jpegblip") && (n = "image/jpeg"), n && o.push({
                            hex: t.replace(e, "").replace(/[^\da-fA-F]/g, ""),
                            type: n
                        })
                    }
                return o
            }(e), n)
        }

        function Dp(t) {
            return btoa(t.match(/\w{2}/g).map(t => String.fromCharCode(parseInt(t, 16))).join(""))
        }

        function Lp(t, e) {
            let n = e.parent;
            for (; n;) {
                if (n.name === t) return n;
                n = n.parent
            }
        }

        function jp(t, e, n, i, o = 1) {
            e > o ? i.setAttribute(t, e, n) : i.removeAttribute(t, n)
        }

        function Vp(t, e, n = {}) {
            const i = t.createElement("tableCell", n);
            t.insertElement("paragraph", i), t.insert(i, e)
        }

        function Bp() {
            return t => {
                t.on("element:table", (t, e, n) => {
                    const i = e.viewItem;
                    if (!n.consumable.test(i, {
                            name: !0
                        })) return;
                    const {
                        rows: o,
                        headingRows: r,
                        headingColumns: s
                    } = function(t) {
                        const e = {
                                headingRows: 0,
                                headingColumns: 0
                            },
                            n = [],
                            i = [];
                        let o;
                        for (const r of Array.from(t.getChildren()))
                            if ("tbody" === r.name || "thead" === r.name || "tfoot" === r.name) {
                                "thead" !== r.name || o || (o = r);
                                const t = Array.from(r.getChildren()).filter(t => t.is("element", "tr"));
                                for (const r of t)
                                    if ("thead" === r.parent.name && r.parent === o) e.headingRows++, n.push(r);
                                    else {
                                        i.push(r);
                                        const t = Fp(r);
                                        t > e.headingColumns && (e.headingColumns = t)
                                    }
                            }
                        return e.rows = [...n, ...i], e
                    }(i), a = {};
                    s && (a.headingColumns = s), r && (a.headingRows = r);
                    const c = n.writer.createElement("table", a),
                        l = n.splitToAllowedParent(c, e.modelCursor);
                    if (l) {
                        if (n.writer.insert(c, l.position), n.consumable.consume(i, {
                                name: !0
                            }), o.length) o.forEach(t => n.convertItem(t, n.writer.createPositionAt(c, "end")));
                        else {
                            const t = n.writer.createElement("tableRow");
                            n.writer.insert(t, n.writer.createPositionAt(c, "end")), Vp(n.writer, n.writer.createPositionAt(t, "end"))
                        }
                        e.modelRange = n.writer.createRange(n.writer.createPositionBefore(c), n.writer.createPositionAfter(c)), l.cursorParent ? e.modelCursor = n.writer.createPositionAt(l.cursorParent, 0) : e.modelCursor = e.modelRange.end
                    }
                })
            }
        }

        function zp(t) {
            return e => {
                e.on(`element:${t}`, (t, e, n) => {
                    const i = e.viewItem;
                    if (!n.consumable.test(i, {
                            name: !0
                        })) return;
                    const o = n.writer.createElement("tableCell"),
                        r = n.splitToAllowedParent(o, e.modelCursor);
                    if (!r) return;
                    n.writer.insert(o, r.position), n.consumable.consume(i, {
                        name: !0
                    });
                    const s = n.writer.createPositionAt(o, 0);
                    n.convertChildren(i, s), o.childCount || n.writer.insertElement("paragraph", s), e.modelRange = n.writer.createRange(n.writer.createPositionBefore(o), n.writer.createPositionAfter(o)), e.modelCursor = e.modelRange.end
                })
            }
        }

        function Fp(t) {
            let e = 0,
                n = 0;
            const i = Array.from(t.getChildren()).filter(t => "th" === t.name || "td" === t.name);
            for (; n < i.length && "th" === i[n].name;) {
                const t = i[n];
                e += parseInt(t.getAttribute("colspan") || 1), n++
            }
            return e
        }
        class Up {
            constructor(t, e = {}) {
                this.table = t, this.startRow = e.startRow || 0, this.endRow = "number" == typeof e.endRow ? e.endRow : void 0, this.includeSpanned = !!e.includeSpanned, this.column = "number" == typeof e.column ? e.column : void 0, this._skipRows = new Set, this._row = 0, this._column = 0, this._cell = 0, this._spannedCells = new Map
            }[Symbol.iterator]() {
                return this
            }
            next() {
                const t = this.table.getChild(this._row);
                if (!t || this._isOverEndRow()) return {
                    done: !0
                };
                if (this._isSpanned(this._row, this._column)) {
                    const t = this._column,
                        e = this._formatOutValue(void 0, t);
                    return this._column++, !this.includeSpanned || this._shouldSkipRow() || this._shouldSkipColumn(t, 1) ? this.next() : e
                }
                const e = t.getChild(this._cell);
                if (!e) return this._row++, this._column = 0, this._cell = 0, this.next();
                const n = parseInt(e.getAttribute("colspan") || 1),
                    i = parseInt(e.getAttribute("rowspan") || 1);
                (n > 1 || i > 1) && this._recordSpans(this._row, this._column, i, n);
                const o = this._column,
                    r = this._formatOutValue(e, o, i, n);
                return this._column++, this._cell++, this._shouldSkipRow() || this._shouldSkipColumn(o, n) ? this.next() : r
            }
            skipRow(t) {
                this._skipRows.add(t)
            }
            _isOverEndRow() {
                return void 0 !== this.endRow && this._row > this.endRow
            }
            _formatOutValue(t, e, n = 1, i = 1) {
                return {
                    done: !1,
                    value: {
                        cell: t,
                        row: this._row,
                        column: e,
                        rowspan: n,
                        colspan: i,
                        cellIndex: this._cell
                    }
                }
            }
            _shouldSkipRow() {
                const t = this._row < this.startRow,
                    e = this._skipRows.has(this._row);
                return t || e
            }
            _shouldSkipColumn(t, e) {
                if (void 0 === this.column) return !1;
                const n = t === this.column,
                    i = t < this.column && t + e > this.column;
                return !n && !i
            }
            _isSpanned(t, e) {
                if (!this._spannedCells.has(t)) return !1;
                return this._spannedCells.get(t).has(e)
            }
            _recordSpans(t, e, n, i) {
                for (let n = e + 1; n <= e + i - 1; n++) this._markSpannedCell(t, n);
                for (let o = t + 1; o < t + n; o++)
                    for (let t = e; t <= e + i - 1; t++) this._markSpannedCell(o, t)
            }
            _markSpannedCell(t, e) {
                this._spannedCells.has(t) || this._spannedCells.set(t, new Map), this._spannedCells.get(t).set(e, !0)
            }
        }

        function Hp(t) {
            return !!t.getCustomProperty("table") && rh(t)
        }

        function qp(t) {
            const e = t.getSelectedElement();
            return e && Hp(e) ? e : null
        }

        function Wp(t) {
            const e = Lp("table", t.getFirstPosition());
            return e && Hp(e.parent) ? e.parent : null
        }

        function Yp(t = {}) {
            return e => e.on("insert:table", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                i.consumable.consume(o, "attribute:headingRows:table"), i.consumable.consume(o, "attribute:headingColumns:table");
                const r = t && t.asWidget,
                    s = i.writer.createContainerElement("figure", {
                        class: "table"
                    }),
                    a = i.writer.createContainerElement("table");
                let c;
                i.writer.insert(i.writer.createPositionAt(s, 0), a), r && (c = function(t, e) {
                    return e.setCustomProperty("table", !0, t), sh(t, e, {
                        hasSelectionHandler: !0
                    })
                }(s, i.writer));
                const l = new Up(o),
                    d = {
                        headingRows: o.getAttribute("headingRows") || 0,
                        headingColumns: o.getAttribute("headingColumns") || 0
                    },
                    u = new Map;
                for (const e of l) {
                    const {
                        row: n,
                        cell: r
                    } = e, s = ig(ng(n, d), a, i), c = o.getChild(n), l = u.get(n) || tg(c, n, s, i);
                    u.set(n, l), i.consumable.consume(r, "insert"), Xp(e, d, i.writer.createPositionAt(l, "end"), i, t)
                }
                const h = i.mapper.toViewPosition(n.range.start);
                i.mapper.bindElements(o, r ? c : s), i.writer.insert(h, r ? c : s)
            })
        }

        function $p(t = {}) {
            return e => e.on("insert:tableRow", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                const r = o.parent,
                    s = ag(i.mapper.toViewElement(r)),
                    a = r.getChildIndex(o),
                    c = new Up(r, {
                        startRow: a,
                        endRow: a
                    }),
                    l = {
                        headingRows: r.getAttribute("headingRows") || 0,
                        headingColumns: r.getAttribute("headingColumns") || 0
                    },
                    d = new Map;
                for (const e of c) {
                    const n = ig(ng(a, l), s, i),
                        r = d.get(a) || tg(o, a, n, i);
                    d.set(a, r), i.consumable.consume(e.cell, "insert"), Xp(e, l, i.writer.createPositionAt(r, "end"), i, t)
                }
            })
        }

        function Gp(t = {}) {
            return e => e.on("insert:tableCell", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                const r = o.parent,
                    s = r.parent,
                    a = s.getChildIndex(r),
                    c = new Up(s, {
                        startRow: a,
                        endRow: a
                    }),
                    l = {
                        headingRows: s.getAttribute("headingRows") || 0,
                        headingColumns: s.getAttribute("headingColumns") || 0
                    };
                for (const e of c)
                    if (e.cell === o) {
                        const n = i.mapper.toViewElement(r);
                        return void Xp(e, l, i.writer.createPositionAt(n, r.getChildIndex(o)), i, t)
                    }
            })
        }

        function Qp(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingRows:table", (t, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(n.item, t.name)) return;
                const r = ag(i.mapper.toViewElement(o)),
                    s = n.attributeOldValue,
                    a = n.attributeNewValue;
                if (a > s) {
                    const t = Array.from(o.getChildren()).filter(({
                        index: t
                    }) => c(t, s - 1, a));
                    sg(t, ig("thead", r, i), i, "end");
                    for (const n of t)
                        for (const t of n.getChildren()) Kp(t, "th", i, e);
                    rg("tbody", r, i)
                } else {
                    sg(Array.from(o.getChildren()).filter(({
                        index: t
                    }) => c(t, a - 1, s)).reverse(), ig("tbody", r, i), i, 0);
                    const t = new Up(o, {
                            startRow: a ? a - 1 : a,
                            endRow: s - 1
                        }),
                        n = {
                            headingRows: o.getAttribute("headingRows") || 0,
                            headingColumns: o.getAttribute("headingColumns") || 0
                        };
                    for (const o of t) Zp(o, n, i, e);
                    rg("thead", r, i)
                }

                function c(t, e, n) {
                    return t > e && t < n
                }
            })
        }

        function Jp(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingColumns:table", (t, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(n.item, t.name)) return;
                const r = {
                        headingRows: o.getAttribute("headingRows") || 0,
                        headingColumns: o.getAttribute("headingColumns") || 0
                    },
                    s = n.attributeOldValue,
                    a = n.attributeNewValue,
                    c = (s > a ? s : a) - 1;
                for (const t of new Up(o)) t.column > c || Zp(t, r, i, e)
            })
        }

        function Kp(t, e, n, i) {
            const o = n.writer,
                r = n.mapper.toViewElement(t);
            if (!r) return;
            let s;
            if (i) {
                s = ch(o.createEditableElement(e, r.getAttributes()), o), o.insert(o.createPositionAfter(r), s), o.move(o.createRangeIn(r), o.createPositionAt(s, 0)), o.remove(o.createRangeOn(r))
            } else s = o.rename(e, r);
            n.mapper.bindElements(t, s)
        }

        function Zp(t, e, n, i) {
            const {
                cell: o
            } = t, r = eg(t, e), s = n.mapper.toViewElement(o);
            s && s.name !== r && Kp(o, r, n, i)
        }

        function Xp(t, e, n, i, o) {
            const r = o && o.asWidget,
                s = eg(t, e),
                a = r ? ch(i.writer.createEditableElement(s), i.writer) : i.writer.createContainerElement(s),
                c = t.cell,
                l = 1 === c.childCount && "paragraph" === c.getChild(0).name;
            if (i.writer.insert(n, a), l) {
                const t = c.getChild(0),
                    e = i.writer.createPositionAt(a, "end");
                if (i.consumable.consume(t, "insert"), o.asWidget) {
                    const n = [...t.getAttributeKeys()].length ? "p" : "span",
                        o = i.writer.createContainerElement(n);
                    i.mapper.bindElements(t, o), i.writer.insert(e, o), i.mapper.bindElements(c, a)
                } else i.mapper.bindElements(c, a), i.mapper.bindElements(t, a)
            } else i.mapper.bindElements(c, a)
        }

        function tg(t, e, n, i) {
            i.consumable.consume(t, "insert");
            const o = i.writer.createContainerElement("tr");
            i.mapper.bindElements(t, o);
            const r = t.parent.getAttribute("headingRows") || 0,
                s = r > 0 && e >= r ? e - r : e,
                a = i.writer.createPositionAt(n, s);
            return i.writer.insert(a, o), o
        }

        function eg(t, e) {
            const {
                row: n,
                column: i
            } = t, {
                headingColumns: o,
                headingRows: r
            } = e;
            return r && r > n ? "th" : o && o > i ? "th" : "td"
        }

        function ng(t, e) {
            return t < e.headingRows ? "thead" : "tbody"
        }

        function ig(t, e, n) {
            const i = og(t, e);
            return i || function(t, e, n) {
                const i = n.writer.createContainerElement(t),
                    o = n.writer.createPositionAt(e, "tbody" == t ? "end" : 0);
                return n.writer.insert(o, i), i
            }(t, e, n)
        }

        function og(t, e) {
            for (const n of e.getChildren())
                if (n.name == t) return n
        }

        function rg(t, e, n) {
            const i = og(t, e);
            i && 0 === i.childCount && n.writer.remove(n.writer.createRangeOn(i))
        }

        function sg(t, e, n, i) {
            for (const o of t) {
                const t = n.mapper.toViewElement(o);
                t && n.writer.move(n.writer.createRangeOn(t), n.writer.createPositionAt(e, i))
            }
        }

        function ag(t) {
            for (const e of t.getChildren())
                if ("table" === e.name) return e
        }
        class cg extends Zl {
            refresh() {
                const t = this.editor.model,
                    e = t.document.selection,
                    n = t.schema,
                    i = function(t) {
                        const e = t.parent;
                        return e === e.root ? e : e.parent
                    }(e.getFirstPosition());
                this.isEnabled = n.checkChild(i, "table")
            }
            execute(t = {}) {
                const e = this.editor.model,
                    n = e.document.selection,
                    i = this.editor.plugins.get("TableUtils"),
                    o = parseInt(t.rows) || 2,
                    r = parseInt(t.columns) || 2,
                    s = lh(n, e);
                e.change(t => {
                    const n = i.createTable(t, o, r);
                    e.insertContent(n, s), t.setSelection(t.createPositionAt(n.getNodeByPath([0, 0, 0]), 0))
                })
            }
        }
        class lg extends Zl {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "below"
            }
            refresh() {
                const t = Lp("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }
            execute() {
                const t = this.editor,
                    e = t.model.document.selection,
                    n = t.plugins.get("TableUtils"),
                    i = Lp("tableCell", e.getFirstPosition()).parent,
                    o = i.parent,
                    r = o.getChildIndex(i),
                    s = "below" === this.order ? r + 1 : r;
                n.insertRows(o, {
                    rows: 1,
                    at: s
                })
            }
        }
        class dg extends Zl {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "right"
            }
            refresh() {
                const t = Lp("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }
            execute() {
                const t = this.editor,
                    e = t.model.document.selection,
                    n = t.plugins.get("TableUtils"),
                    i = Lp("tableCell", e.getFirstPosition()),
                    o = i.parent.parent,
                    {
                        column: r
                    } = n.getCellLocation(i),
                    s = "right" === this.order ? r + 1 : r;
                n.insertColumns(o, {
                    columns: 1,
                    at: s
                })
            }
        }
        class ug extends Zl {
            constructor(t, e = {}) {
                super(t), this.direction = e.direction || "horizontally"
            }
            refresh() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }
            execute() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition()),
                    e = "horizontally" === this.direction,
                    n = this.editor.plugins.get("TableUtils");
                e ? n.splitCellHorizontally(t, 2) : n.splitCellVertically(t, 2)
            }
        }
        class hg extends Zl {
            constructor(t, e) {
                super(t), this.direction = e.direction, this.isHorizontal = "right" == this.direction || "left" == this.direction
            }
            refresh() {
                const t = this._getMergeableCell();
                this.isEnabled = !!t, this.value = t
            }
            execute() {
                const t = this.editor.model,
                    e = Lp("tableCell", t.document.selection.getFirstPosition()),
                    n = this.value,
                    i = this.direction;
                t.change(t => {
                    const o = "right" == i || "down" == i,
                        r = o ? e : n,
                        s = o ? n : e,
                        a = s.parent;
                    ! function(t, e, n) {
                        fg(t) || (fg(e) && n.remove(n.createRangeIn(e)), n.move(n.createRangeIn(t), n.createPositionAt(e, "end")));
                        n.remove(t)
                    }(s, r, t);
                    const c = this.isHorizontal ? "colspan" : "rowspan",
                        l = parseInt(e.getAttribute(c) || 1),
                        d = parseInt(n.getAttribute(c) || 1);
                    t.setAttribute(c, l + d, r), t.setSelection(t.createRangeIn(r)), a.childCount || function(t, e) {
                        const n = t.parent,
                            i = n.getChildIndex(t);
                        for (const {
                                cell: t,
                                row: o,
                                rowspan: r
                            }
                            of new Up(n, {
                                endRow: i
                            })) {
                            const n = o + r - 1 >= i;
                            n && jp("rowspan", r - 1, t, e)
                        }
                        e.remove(t)
                    }(a, t)
                })
            }
            _getMergeableCell() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition());
                if (!t) return;
                const e = this.editor.plugins.get("TableUtils"),
                    n = this.isHorizontal ? function(t, e, n) {
                        const i = "right" == e ? t.nextSibling : t.previousSibling;
                        if (!i) return;
                        const o = "right" == e ? t : i,
                            r = "right" == e ? i : t,
                            {
                                column: s
                            } = n.getCellLocation(o),
                            {
                                column: a
                            } = n.getCellLocation(r),
                            c = parseInt(o.getAttribute("colspan") || 1);
                        return s + c === a ? i : void 0
                    }(t, this.direction, e) : function(t, e) {
                        const n = t.parent,
                            i = n.parent,
                            o = i.getChildIndex(n);
                        if ("down" == e && o === i.childCount - 1 || "up" == e && 0 === o) return;
                        const r = parseInt(t.getAttribute("rowspan") || 1),
                            s = i.getAttribute("headingRows") || 0;
                        if (s && ("down" == e && o + r === s || "up" == e && o === s)) return;
                        const a = parseInt(t.getAttribute("rowspan") || 1),
                            c = "down" == e ? o + a : o,
                            l = [...new Up(i, {
                                endRow: c
                            })],
                            d = l.find(e => e.cell === t).column,
                            u = l.find(({
                                row: t,
                                rowspan: n,
                                column: i
                            }) => i === d && ("down" == e ? t === c : c === t + n));
                        return u && u.cell
                    }(t, this.direction);
                if (!n) return;
                const i = this.isHorizontal ? "rowspan" : "colspan",
                    o = parseInt(t.getAttribute(i) || 1);
                return parseInt(n.getAttribute(i) || 1) === o ? n : void 0
            }
        }

        function fg(t) {
            return 1 == t.childCount && t.getChild(0).is("paragraph") && t.getChild(0).isEmpty
        }
        class mg extends Zl {
            refresh() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t && t.parent.parent.childCount > 1
            }
            execute() {
                const t = this.editor.model,
                    e = Lp("tableCell", t.document.selection.getFirstPosition()).parent,
                    n = e.parent,
                    i = n.getChildIndex(e),
                    o = n.getAttribute("headingRows") || 0;
                t.change(t => {
                    o && i <= o && jp("headingRows", o - 1, n, t, 0);
                    const r = [...new Up(n, {
                            endRow: i
                        })],
                        s = new Map;
                    r.filter(({
                        row: t,
                        rowspan: e
                    }) => t === i && e > 1).forEach(({
                        column: t,
                        cell: e,
                        rowspan: n
                    }) => s.set(t, {
                        cell: e,
                        rowspanToSet: n - 1
                    })), r.filter(({
                        row: t,
                        rowspan: e
                    }) => t <= i - 1 && t + e > i).forEach(({
                        cell: e,
                        rowspan: n
                    }) => jp("rowspan", n - 1, e, t));
                    const a = i + 1,
                        c = new Up(n, {
                            includeSpanned: !0,
                            startRow: a,
                            endRow: a
                        });
                    let l;
                    for (const {
                            row: e,
                            column: i,
                            cell: o
                        }
                        of[...c])
                        if (s.has(i)) {
                            const {
                                cell: o,
                                rowspanToSet: r
                            } = s.get(i), a = l ? t.createPositionAfter(l) : t.createPositionAt(n.getChild(e), 0);
                            t.move(t.createRangeOn(o), a), jp("rowspan", r, o, t), l = o
                        } else l = o;
                    t.remove(e)
                })
            }
        }
        class pg extends Zl {
            refresh() {
                const t = this.editor,
                    e = t.model.document.selection,
                    n = t.plugins.get("TableUtils"),
                    i = Lp("tableCell", e.getFirstPosition());
                this.isEnabled = !!i && n.getColumns(i.parent.parent) > 1
            }
            execute() {
                const t = this.editor.model,
                    e = Lp("tableCell", t.document.selection.getFirstPosition()),
                    n = e.parent,
                    i = n.parent,
                    o = i.getAttribute("headingColumns") || 0,
                    r = i.getChildIndex(n),
                    s = [...new Up(i)],
                    a = s.find(t => t.cell === e).column;
                t.change(t => {
                    o && r <= o && t.setAttribute("headingColumns", o - 1, i);
                    for (const {
                            cell: e,
                            column: n,
                            colspan: i
                        }
                        of s) n <= a && i > 1 && n + i > a ? jp("colspan", i - 1, e, t) : n === a && t.remove(e)
                })
            }
        }
        class gg extends Zl {
            refresh() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition()),
                    e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }
            execute() {
                const t = this.editor.model,
                    e = Lp("tableCell", t.document.selection.getFirstPosition()).parent,
                    n = e.parent,
                    i = n.getAttribute("headingRows") || 0,
                    o = e.index,
                    r = i > o ? o : o + 1;
                t.change(t => {
                    if (r) {
                        const e = function(t, e, n) {
                            const i = [],
                                o = new Up(t, {
                                    startRow: e > n ? n : 0,
                                    endRow: e - 1
                                });
                            for (const {
                                    row: t,
                                    rowspan: n,
                                    cell: r
                                }
                                of o) n > 1 && t + n > e && i.push(r);
                            return i
                        }(n, r, i);
                        for (const n of e) bg(n, r, t)
                    }
                    jp("headingRows", r, n, t, 0)
                })
            }
            _isInHeading(t, e) {
                const n = parseInt(e.getAttribute("headingRows") || 0);
                return !!n && t.parent.index < n
            }
        }

        function bg(t, e, n) {
            const i = t.parent,
                o = i.parent,
                r = e - i.index,
                s = {},
                a = parseInt(t.getAttribute("rowspan")) - r;
            a > 1 && (s.rowspan = a);
            const c = o.getChildIndex(i),
                l = c + r,
                d = [...new Up(o, {
                    startRow: c,
                    endRow: l,
                    includeSpanned: !0
                })];
            let u;
            for (const {
                    row: e,
                    column: i,
                    cell: r,
                    colspan: a,
                    cellIndex: c
                }
                of d)
                if (r === t && (u = i, a > 1 && (s.colspan = a)), void 0 !== u && u === i && e === l) {
                    const t = o.getChild(e);
                    Vp(n, n.createPositionAt(t, c), s)
                }
            jp("rowspan", r, t, n)
        }
        class wg extends Zl {
            refresh() {
                const t = Lp("tableCell", this.editor.model.document.selection.getFirstPosition()),
                    e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }
            execute() {
                const t = this.editor.model,
                    e = t.document.selection,
                    n = this.editor.plugins.get("TableUtils"),
                    i = Lp("tableCell", e.getFirstPosition().parent),
                    o = i.parent.parent,
                    r = parseInt(o.getAttribute("headingColumns") || 0),
                    {
                        column: s
                    } = n.getCellLocation(i),
                    a = r > s ? s : s + 1;
                t.change(t => {
                    jp("headingColumns", a, o, t, 0)
                })
            }
            _isInHeading(t, e) {
                const n = parseInt(e.getAttribute("headingColumns") || 0),
                    i = this.editor.plugins.get("TableUtils"),
                    {
                        column: o
                    } = i.getCellLocation(t);
                return !!n && o < n
            }
        }
        class _g extends $l {
            static get pluginName() {
                return "TableUtils"
            }
            getCellLocation(t) {
                const e = t.parent,
                    n = e.parent,
                    i = n.getChildIndex(e),
                    o = new Up(n, {
                        startRow: i,
                        endRow: i
                    });
                for (const {
                        cell: e,
                        row: n,
                        column: i
                    }
                    of o)
                    if (e === t) return {
                        row: n,
                        column: i
                    }
            }
            createTable(t, e, n) {
                const i = t.createElement("table");
                return kg(t, i, 0, e, n), i
            }
            insertRows(t, e = {}) {
                const n = this.editor.model,
                    i = e.at || 0,
                    o = e.rows || 1;
                n.change(e => {
                    const n = t.getAttribute("headingRows") || 0;
                    if (n > i && e.setAttribute("headingRows", n + o, t), 0 === i || i === t.childCount) return void kg(e, t, i, o, this.getColumns(t));
                    const r = new Up(t, {
                        endRow: i
                    });
                    let s = 0;
                    for (const {
                            row: t,
                            rowspan: n,
                            colspan: a,
                            cell: c
                        }
                        of r) {
                        t < i && t + n > i && e.setAttribute("rowspan", n + o, c), t === i && (s += a)
                    }
                    kg(e, t, i, o, s)
                })
            }
            insertColumns(t, e = {}) {
                const n = this.editor.model,
                    i = e.at || 0,
                    o = e.columns || 1;
                n.change(e => {
                    const n = t.getAttribute("headingColumns");
                    i < n && e.setAttribute("headingColumns", n + o, t);
                    const r = this.getColumns(t);
                    if (0 === i || r === i) {
                        for (const n of t.getChildren()) vg(o, e, e.createPositionAt(n, i ? "end" : 0));
                        return
                    }
                    const s = new Up(t, {
                        column: i,
                        includeSpanned: !0
                    });
                    for (const {
                            row: n,
                            column: r,
                            cell: a,
                            colspan: c,
                            rowspan: l,
                            cellIndex: d
                        }
                        of s)
                        if (r !== i) {
                            if (e.setAttribute("colspan", c + o, a), s.skipRow(n), l > 1)
                                for (let t = n + 1; t < n + l; t++) s.skipRow(t)
                        } else {
                            const i = e.createPositionAt(t.getChild(n), d);
                            vg(o, e, i)
                        }
                })
            }
            splitCellVertically(t, e = 2) {
                const n = this.editor.model,
                    i = t.parent.parent,
                    o = parseInt(t.getAttribute("rowspan") || 1),
                    r = parseInt(t.getAttribute("colspan") || 1);
                n.change(n => {
                    if (r > 1) {
                        const {
                            newCellsSpan: i,
                            updatedSpan: s
                        } = yg(r, e);
                        jp("colspan", s, t, n);
                        const a = {};
                        i > 1 && (a.colspan = i), o > 1 && (a.rowspan = o), vg(r > e ? e - 1 : r - 1, n, n.createPositionAfter(t), a)
                    }
                    if (r < e) {
                        const s = e - r,
                            a = [...new Up(i)],
                            {
                                column: c
                            } = a.find(({
                                cell: e
                            }) => e === t),
                            l = a.filter(({
                                cell: e,
                                colspan: n,
                                column: i
                            }) => {
                                return e !== t && i === c || i < c && i + n > c
                            });
                        for (const {
                                cell: t,
                                colspan: e
                            }
                            of l) n.setAttribute("colspan", e + s, t);
                        const d = {};
                        o > 1 && (d.rowspan = o), vg(s, n, n.createPositionAfter(t), d);
                        const u = i.getAttribute("headingColumns") || 0;
                        u > c && jp("headingColumns", u + s, i, n)
                    }
                })
            }
            splitCellHorizontally(t, e = 2) {
                const n = this.editor.model,
                    i = t.parent,
                    o = i.parent,
                    r = o.getChildIndex(i),
                    s = parseInt(t.getAttribute("rowspan") || 1),
                    a = parseInt(t.getAttribute("colspan") || 1);
                n.change(n => {
                    if (s > 1) {
                        const i = [...new Up(o, {
                                startRow: r,
                                endRow: r + s - 1,
                                includeSpanned: !0
                            })],
                            {
                                newCellsSpan: c,
                                updatedSpan: l
                            } = yg(s, e);
                        jp("rowspan", l, t, n);
                        const {
                            column: d
                        } = i.find(({
                            cell: e
                        }) => e === t), u = {};
                        c > 1 && (u.rowspan = c), a > 1 && (u.colspan = a);
                        for (const {
                                column: t,
                                row: e,
                                cellIndex: s
                            }
                            of i) {
                            if (e >= r + l && t === d && (e + r + l) % c == 0) {
                                vg(1, n, n.createPositionAt(o.getChild(e), s), u)
                            }
                        }
                    }
                    if (s < e) {
                        const i = e - s,
                            c = [...new Up(o, {
                                startRow: 0,
                                endRow: r
                            })];
                        for (const {
                                cell: e,
                                rowspan: o,
                                row: s
                            }
                            of c)
                            if (e !== t && s + o > r) {
                                const t = o + i;
                                n.setAttribute("rowspan", t, e)
                            }
                        const l = {};
                        a > 1 && (l.colspan = a), kg(n, o, r + 1, i, 1, l);
                        const d = o.getAttribute("headingRows") || 0;
                        d > r && jp("headingRows", d + i, o, n)
                    }
                })
            }
            getColumns(t) {
                return [...t.getChild(0).getChildren()].reduce((t, e) => {
                    return t + parseInt(e.getAttribute("colspan") || 1)
                }, 0)
            }
        }

        function kg(t, e, n, i, o, r = {}) {
            for (let s = 0; s < i; s++) {
                const i = t.createElement("tableRow");
                t.insert(i, e, n), vg(o, t, t.createPositionAt(i, "end"), r)
            }
        }

        function vg(t, e, n, i = {}) {
            for (let o = 0; o < t; o++) Vp(e, n, i)
        }

        function yg(t, e) {
            if (t < e) return {
                newCellsSpan: 1,
                updatedSpan: 1
            };
            const n = Math.floor(t / e);
            return {
                newCellsSpan: n,
                updatedSpan: t - n * e + n
            }
        }

        function xg(t) {
            t.document.registerPostFixer(e => (function(t, e) {
                const n = e.document.differ.getChanges();
                let i = !1;
                const o = new Set;
                for (const e of n) {
                    let n;
                    "table" == e.name && "insert" == e.type && (n = e.position.nodeAfter), "tableRow" != e.name && "tableCell" != e.name || (n = Lp("table", e.position)), Tg(e) && (n = Lp("table", e.range.start)), n && !o.has(n) && (i = Ag(n, t) || i, i = Cg(n, t) || i, o.add(n))
                }
                return i
            })(e, t))
        }

        function Ag(t, e) {
            let n = !1;
            const i = function(t) {
                const e = parseInt(t.getAttribute("headingRows") || 0),
                    n = t.childCount,
                    i = [];
                for (const {
                        row: o,
                        rowspan: r,
                        cell: s
                    }
                    of new Up(t)) {
                    if (r < 2) continue;
                    const t = o < e,
                        a = t ? e : n;
                    if (o + r > a) {
                        const t = a - o;
                        i.push({
                            cell: s,
                            rowspan: t
                        })
                    }
                }
                return i
            }(t);
            if (i.length) {
                n = !0;
                for (const t of i) jp("rowspan", t.rowspan, t.cell, e, 1)
            }
            return n
        }

        function Cg(t, e) {
            let n = !1;
            const i = function(t) {
                    const e = {};
                    for (const {
                            row: n
                        }
                        of new Up(t, {
                            includeSpanned: !0
                        })) e[n] || (e[n] = 0), e[n] += 1;
                    return e
                }(t),
                o = i[0];
            if (!Object.values(i).every(t => t === o)) {
                const o = Object.values(i).reduce((t, e) => e > t ? e : t, 0);
                for (const [r, s] of Object.entries(i)) {
                    const i = o - s;
                    if (i) {
                        for (let n = 0; n < i; n++) Vp(e, e.createPositionAt(t.getChild(r), "end"));
                        n = !0
                    }
                }
            }
            return n
        }

        function Tg(t) {
            const e = "attribute" === t.type,
                n = t.attributeKey;
            return e && ("headingRows" === n || "colspan" === n || "rowspan" === n)
        }

        function Pg(t) {
            t.document.registerPostFixer(e => (function(t, e) {
                const n = e.document.differ.getChanges();
                let i = !1;
                for (const e of n) "remove" == e.type && e.position.parent.is("tableCell") && (i = Sg(e.position.parent, t) || i), "insert" == e.type && ("table" == e.name && (i = Mg(e.position.nodeAfter, t) || i), "tableRow" == e.name && (i = Eg(e.position.nodeAfter, t) || i), "tableCell" == e.name && (i = Sg(e.position.nodeAfter, t) || i));
                return i
            })(e, t))
        }

        function Mg(t, e) {
            let n = !1;
            for (const i of t.getChildren()) n = Eg(i, e) || n;
            return n
        }

        function Eg(t, e) {
            let n = !1;
            for (const i of t.getChildren()) n = Sg(i, e) || n;
            return n
        }

        function Sg(t, e) {
            if (0 == t.childCount) return e.insertElement("paragraph", t), !0;
            const n = Array.from(t.getChildren()).filter(t => t.is("text"));
            for (const t of n) e.wrap(e.createRangeOn(t), "paragraph");
            return !!n.length
        }

        function Ig(t, e) {
            e.view.document.registerPostFixer(n => (function(t, e, n, i) {
                let o = !1;
                const r = function(t) {
                    const e = Array.from(t._renderer.markedAttributes).filter(t => !!t.parent).filter(Og).filter(t => Rg(t.parent)),
                        n = Array.from(t._renderer.markedChildren).filter(t => !!t.parent).filter(Rg).reduce((t, e) => {
                            const n = Array.from(e.getChildren()).filter(Og);
                            return [...t, ...n]
                        }, []);
                    return [...e, ...n]
                }(i);
                for (const e of r) o = Ng(e, n, t) || o;
                o && function(t, e, n) {
                    const i = Array.from(t.getRanges()).map(t => e.toViewRange(t));
                    n.setSelection(i, {
                        backward: t.isBackward
                    })
                }(e.document.selection, n, t);
                return o
            })(n, t, e.mapper, e.view))
        }

        function Ng(t, e, n) {
            const i = e.toModelElement(t),
                o = function(t, e) {
                    const n = t.childCount > 1,
                        i = !![...e.getAttributes()].length;
                    return n || i ? "p" : "span"
                }(i.parent, i);
            if (t.name !== o) {
                e.unbindViewElement(t);
                const r = n.rename(o, t);
                return e.bindElements(i, r), !0
            }
            return !1
        }

        function Og(t) {
            return t.is("p") || t.is("span")
        }

        function Rg(t) {
            return t.is("td") || t.is("th")
        }
        n(111);
        class Dg extends $l {
            init() {
                const t = this.editor,
                    e = t.model,
                    n = e.schema,
                    i = t.conversion;
                n.register("table", {
                    allowWhere: "$block",
                    allowAttributes: ["headingRows", "headingColumns"],
                    isLimit: !0,
                    isObject: !0,
                    isBlock: !0
                }), n.register("tableRow", {
                    allowIn: "table",
                    isLimit: !0
                }), n.register("tableCell", {
                    allowIn: "tableRow",
                    allowAttributes: ["colspan", "rowspan"],
                    isLimit: !0
                }), n.extend("$block", {
                    allowIn: "tableCell"
                }), n.addChildCheck((t, e) => {
                    if ("table" == e.name && Array.from(t.getNames()).includes("table")) return !1
                }), i.for("upcast").add(Bp()), i.for("editingDowncast").add(Yp({
                    asWidget: !0
                })), i.for("dataDowncast").add(Yp()), i.for("upcast").elementToElement({
                    model: "tableRow",
                    view: "tr"
                }), i.for("editingDowncast").add($p({
                    asWidget: !0
                })), i.for("dataDowncast").add($p()), i.for("downcast").add(t => t.on("remove:tableRow", (t, e, n) => {
                    t.stop();
                    const i = n.writer,
                        o = n.mapper,
                        r = o.toViewPosition(e.position).getLastMatchingPosition(t => !t.item.is("tr")).nodeAfter,
                        s = r.parent,
                        a = i.createRangeOn(r),
                        c = i.remove(a);
                    for (const t of i.createRangeIn(c).getItems()) o.unbindViewElement(t);
                    s.childCount || i.remove(i.createRangeOn(s))
                }, {
                    priority: "higher"
                })), i.for("upcast").add(zp("td")), i.for("upcast").add(zp("th")), i.for("editingDowncast").add(Gp({
                    asWidget: !0
                })), i.for("dataDowncast").add(Gp()), i.attributeToAttribute({
                    model: "colspan",
                    view: "colspan"
                }), i.attributeToAttribute({
                    model: "rowspan",
                    view: "rowspan"
                }), i.for("editingDowncast").add(Jp({
                    asWidget: !0
                })), i.for("dataDowncast").add(Jp()), i.for("editingDowncast").add(Qp({
                    asWidget: !0
                })), i.for("dataDowncast").add(Qp()), Ig(t.model, t.editing), t.commands.add("insertTable", new cg(t)), t.commands.add("insertTableRowAbove", new lg(t, {
                    order: "above"
                })), t.commands.add("insertTableRowBelow", new lg(t, {
                    order: "below"
                })), t.commands.add("insertTableColumnLeft", new dg(t, {
                    order: "left"
                })), t.commands.add("insertTableColumnRight", new dg(t, {
                    order: "right"
                })), t.commands.add("removeTableRow", new mg(t)), t.commands.add("removeTableColumn", new pg(t)), t.commands.add("splitTableCellVertically", new ug(t, {
                    direction: "vertically"
                })), t.commands.add("splitTableCellHorizontally", new ug(t, {
                    direction: "horizontally"
                })), t.commands.add("mergeTableCellRight", new hg(t, {
                    direction: "right"
                })), t.commands.add("mergeTableCellLeft", new hg(t, {
                    direction: "left"
                })), t.commands.add("mergeTableCellDown", new hg(t, {
                    direction: "down"
                })), t.commands.add("mergeTableCellUp", new hg(t, {
                    direction: "up"
                })), t.commands.add("setTableColumnHeader", new wg(t)), t.commands.add("setTableRowHeader", new gg(t)), xg(e), Pg(e), this.editor.keystrokes.set("Tab", (...t) => this._handleTabOnSelectedTable(...t), {
                    priority: "low"
                }), this.editor.keystrokes.set("Tab", this._getTabHandler(!0), {
                    priority: "low"
                }), this.editor.keystrokes.set("Shift+Tab", this._getTabHandler(!1), {
                    priority: "low"
                })
            }
            static get requires() {
                return [_g]
            }
            _handleTabOnSelectedTable(t, e) {
                const n = this.editor,
                    i = n.model.document.selection;
                if (!i.isCollapsed && 1 === i.rangeCount && i.getFirstRange().isFlat) {
                    const t = i.getSelectedElement();
                    if (!t || !t.is("table")) return;
                    e(), n.model.change(e => {
                        e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))
                    })
                }
            }
            _getTabHandler(t) {
                const e = this.editor;
                return (n, i) => {
                    const o = Lp("tableCell", e.model.document.selection.getFirstPosition());
                    if (!o) return;
                    i();
                    const r = o.parent,
                        s = r.parent,
                        a = s.getChildIndex(r),
                        c = r.getChildIndex(o),
                        l = 0 === c;
                    if (!t && l && 0 === a) return;
                    const d = c === r.childCount - 1,
                        u = a === s.childCount - 1;
                    let h;
                    if (t && u && d && e.plugins.get("TableUtils").insertRows(s, {
                            at: s.childCount
                        }), t && d) {
                        const t = s.getChild(a + 1);
                        h = t.getChild(0)
                    } else if (!t && l) {
                        const t = s.getChild(a - 1);
                        h = t.getChild(t.childCount - 1)
                    } else h = r.getChild(c + (t ? 1 : -1));
                    e.model.change(t => {
                        t.setSelection(t.createRangeIn(h))
                    })
                }
            }
        }
        n(113);
        class Lg extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.items = this.createCollection(), this.set("rows", 0), this.set("columns", 0), this.bind("label").to(this, "columns", this, "rows", (t, e) => `${e} x ${t}`), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck"]
                    },
                    children: [{
                        tag: "div",
                        attributes: {
                            class: ["ck-insert-table-dropdown__grid"]
                        },
                        children: this.items
                    }, {
                        tag: "div",
                        attributes: {
                            class: ["ck-insert-table-dropdown__label"]
                        },
                        children: [{
                            text: e.to("label")
                        }]
                    }],
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }),
                        click: e.to(() => {
                            this.fire("execute")
                        })
                    }
                });
                for (let t = 0; t < 100; t++) {
                    const e = new jg;
                    e.on("over", () => {
                        const e = Math.floor(t / 10),
                            n = t % 10;
                        this.set("rows", e + 1), this.set("columns", n + 1)
                    }), this.items.add(e)
                }
                this.on("change:columns", () => {
                    this._highlightGridBoxes()
                }), this.on("change:rows", () => {
                    this._highlightGridBoxes()
                })
            }
            focus() {}
            focusLast() {}
            _highlightGridBoxes() {
                const t = this.rows,
                    e = this.columns;
                this.items.map((n, i) => {
                    const o = Math.floor(i / 10) < t && i % 10 < e;
                    n.set("isOn", o)
                })
            }
        }
        class jg extends Nl {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isOn", !1), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck-insert-table-dropdown-grid-box", e.if("isOn", "ck-on")]
                    },
                    on: {
                        mouseover: e.to("over")
                    }
                })
            }
        }
        var Vg = n(38),
            Bg = n.n(Vg),
            zg = n(39),
            Fg = n.n(zg),
            Ug = n(40),
            Hg = n.n(Ug),
            qg = n(41),
            Wg = n.n(qg);
        class Yg extends $l {
            init() {
                const t = this.editor,
                    e = this.editor.t;
                t.ui.componentFactory.add("insertTable", n => {
                    const i = t.commands.get("insertTable"),
                        o = Df(n);
                    o.bind("isEnabled").to(i), o.buttonView.set({
                        icon: Bg.a,
                        label: e("q"),
                        tooltip: !0
                    });
                    const r = new Lg(n);
                    return o.panelView.children.add(r), r.delegate("execute").to(o), o.buttonView.on("open", () => {
                        r.rows = 0, r.columns = 0
                    }), o.on("execute", () => {
                        t.execute("insertTable", {
                            rows: r.rows,
                            columns: r.columns
                        }), t.editing.view.focus()
                    }), o
                }), t.ui.componentFactory.add("tableColumn", t => {
                    const n = [{
                        type: "switchbutton",
                        model: {
                            commandName: "setTableColumnHeader",
                            label: e("r"),
                            bindIsOn: !0
                        }
                    }, {
                        type: "separator"
                    }, {
                        type: "button",
                        model: {
                            commandName: "insertTableColumnLeft",
                            label: e("s")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "insertTableColumnRight",
                            label: e("t")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "removeTableColumn",
                            label: e("u")
                        }
                    }];
                    return this._prepareDropdown(e("v"), Fg.a, n, t)
                }), t.ui.componentFactory.add("tableRow", t => {
                    const n = [{
                        type: "switchbutton",
                        model: {
                            commandName: "setTableRowHeader",
                            label: e("w"),
                            bindIsOn: !0
                        }
                    }, {
                        type: "separator"
                    }, {
                        type: "button",
                        model: {
                            commandName: "insertTableRowBelow",
                            label: e("x")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "insertTableRowAbove",
                            label: e("y")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "removeTableRow",
                            label: e("z")
                        }
                    }];
                    return this._prepareDropdown(e("aa"), Hg.a, n, t)
                }), t.ui.componentFactory.add("mergeTableCells", t => {
                    const n = [{
                        type: "button",
                        model: {
                            commandName: "mergeTableCellUp",
                            label: e("ab")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "mergeTableCellRight",
                            label: e("ac")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "mergeTableCellDown",
                            label: e("ad")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "mergeTableCellLeft",
                            label: e("ae")
                        }
                    }, {
                        type: "separator"
                    }, {
                        type: "button",
                        model: {
                            commandName: "splitTableCellVertically",
                            label: e("af")
                        }
                    }, {
                        type: "button",
                        model: {
                            commandName: "splitTableCellHorizontally",
                            label: e("ag")
                        }
                    }];
                    return this._prepareDropdown(e("ah"), Wg.a, n, t)
                })
            }
            _prepareDropdown(t, e, n, i) {
                const o = this.editor,
                    r = Df(i),
                    s = [],
                    a = new oo;
                for (const t of n) $g(t, o, s, a);
                return Lf(r, a), r.buttonView.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), r.bind("isEnabled").toMany(s, "isEnabled", (...t) => t.some(t => t)), this.listenTo(r, "execute", t => {
                    o.execute(t.source.commandName), o.editing.view.focus()
                }), r
            }
        }

        function $g(t, e, n, i) {
            const o = t.model = new Cf(t.model),
                {
                    commandName: r,
                    bindIsOn: s
                } = t.model;
            if ("separator" !== t.type) {
                const t = e.commands.get(r);
                n.push(t), o.set({
                    commandName: r
                }), o.bind("isEnabled").to(t), s && o.bind("isOn").to(t, "value")
            }
            o.set({
                withText: !0
            }), i.add(t)
        }
        n(115);
        n.d(e, "default", function() {
            return Gg
        });
        class Gg extends Yl {}
        Gg.builtinPlugins = [class extends $l {
            static get requires() {
                return [Kl, id, ad, Ad, Jd]
            }
            static get pluginName() {
                return "Essentials"
            }
        }, ru, class extends $l {
            static get pluginName() {
                return "Autoformat"
            }
            afterInit() {
                this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
            }
            _addListAutoformats() {
                const t = this.editor.commands;
                t.get("bulletedList") && new au(this.editor, /^[*-]\s$/, "bulletedList"), t.get("numberedList") && new au(this.editor, /^\d+[.|)]\s$/, "numberedList")
            }
            _addBasicStylesAutoformats() {
                const t = this.editor.commands;
                if (t.get("bold")) {
                    const t = du(this.editor, "bold");
                    new cu(this.editor, /(\*\*)([^*]+)(\*\*)$/g, t), new cu(this.editor, /(__)([^_]+)(__)$/g, t)
                }
                if (t.get("italic")) {
                    const t = du(this.editor, "italic");
                    new cu(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, t), new cu(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, t)
                }
                if (t.get("code")) {
                    const t = du(this.editor, "code");
                    new cu(this.editor, /(`)([^`]+)(`)$/g, t)
                }
            }
            _addHeadingAutoformats() {
                const t = this.editor.commands.get("heading");
                t && t.modelElements.filter(t => t.match(/^heading[1-6]$/)).forEach(e => {
                    const n = e[7],
                        i = new RegExp(`^(#{${n}})\\s$`);
                    new au(this.editor, i, () => {
                        if (!t.isEnabled) return !1;
                        this.editor.execute("heading", {
                            value: e
                        })
                    })
                })
            }
            _addBlockQuoteAutoformats() {
                this.editor.commands.get("blockQuote") && new au(this.editor, /^>\s$/, "blockQuote")
            }
        }, class extends $l {
            static get requires() {
                return [fu, bu]
            }
            static get pluginName() {
                return "Bold"
            }
        }, class extends $l {
            static get requires() {
                return [_u, xu]
            }
            static get pluginName() {
                return "Italic"
            }
        }, class extends $l {
            static get requires() {
                return [Eu, Nu]
            }
            static get pluginName() {
                return "BlockQuote"
            }
        }, class extends $l {
            static get pluginName() {
                return "CKFinder"
            }
            static get requires() {
                return [Bu, Du, ru]
            }
        }, class extends $l {
            static get requires() {
                return [$u, Gh, pf]
            }
            static get pluginName() {
                return "EasyImage"
            }
        }, class extends $l {
            static get requires() {
                return [Af, jf]
            }
            static get pluginName() {
                return "Heading"
            }
        }, Gh, class extends $l {
            static get requires() {
                return [zf]
            }
            static get pluginName() {
                return "ImageCaption"
            }
        }, class extends $l {
            static get requires() {
                return [rm, sm]
            }
            static get pluginName() {
                return "ImageStyle"
            }
        }, class extends $l {
            static get requires() {
                return [am]
            }
            static get pluginName() {
                return "ImageToolbar"
            }
            afterInit() {
                const t = this.editor;
                t.plugins.get(am).register("image", {
                    items: t.config.get("image.toolbar") || [],
                    getRelatedElement: uh
                })
            }
        }, pf, class extends $l {
            static get requires() {
                return [Am, Dm]
            }
            static get pluginName() {
                return "Link"
            }
        }, class extends $l {
            static get requires() {
                return [rp, up]
            }
            static get pluginName() {
                return "List"
            }
        }, class extends $l {
            static get requires() {
                return [xp, Ep, Cp, kh]
            }
            static get pluginName() {
                return "MediaEmbed"
            }
        }, wf, class extends $l {
            static get pluginName() {
                return "PasteFromOffice"
            }
            init() {
                const t = this.editor;
                this.listenTo(t.plugins.get(Kl), "inputTransformation", (t, e) => {
                    const n = e.dataTransfer.getData("text/html");
                    !0 !== e.pasteFromOfficeProcessed && function(t) {
                        return !(!t || !t.match(/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/gi) && !t.match(/xmlns:o="urn:schemas-microsoft-com/gi))
                    }(n) && (e.content = this._normalizeWordInput(n, e.dataTransfer), e.pasteFromOfficeProcessed = !0)
                }, {
                    priority: "high"
                })
            }
            _normalizeWordInput(t, e) {
                const {
                    body: n,
                    stylesString: i
                } = Ip(t);
                return Np(n, i), Rp(n, e.getData("text/rtf")), n
            }
        }, class extends $l {
            static get requires() {
                return [Dg, Yg, kh]
            }
            static get pluginName() {
                return "Table"
            }
        }, class extends $l {
            static get requires() {
                return [am]
            }
            static get pluginName() {
                return "TableToolbar"
            }
            afterInit() {
                const t = this.editor,
                    e = t.plugins.get(am),
                    n = t.config.get("table.contentToolbar"),
                    i = t.config.get("table.toolbar"),
                    o = t.config.get("table.tableToolbar");
                i && console.warn("`config.table.toolbar` is deprecated and will be removed in the next major release. Use `config.table.contentToolbar` instead."), (n || i) && e.register("tableContent", {
                    items: n || i,
                    getRelatedElement: Wp
                }), o && e.register("table", {
                    items: o,
                    getRelatedElement: qp
                })
            }
        }], Gg.defaultConfig = {
            toolbar: {
                items: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "imageUpload", "blockQuote", "insertTable", "mediaEmbed", "undo", "redo"]
            },
            image: {
                toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"]
            },
            table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
            },
            language: "en"
        }
    }]).default
});
//# sourceMappingURL=ckeditor.js.map