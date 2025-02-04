/*! highlight.js v9.4.0 | BSD3 License | git.io/hljslicense */
/*! highlight.js v9.4.0 | BSD3 License | git.io/hljslicense */
!function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return n.hljs
    }))
}(function(e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index
    }
    function a(e) {
        return /^(no-?highlight|plain|text)$/i.test(e)
    }
    function i(e) {
        var n,
            t,
            r,
            i = e.className + " ";
        if (i += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/i.exec(i))
            return w(t[1]) ? t[1] : "no-highlight";
        for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++)
            if (w(i[n]) || a(i[n]))
                return i[n]
    }
    function o(e, n) {
        var t,
            r = {};
        for (t in e)
            r[t] = e[t];
        if (n)
            for (t in n)
                r[t] = n[t];
        return r
    }
    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling)
                3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
                    event: "start",
                    offset: a,
                    node: i
                }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
                    event: "stop",
                    offset: a,
                    node: i
                }));
            return a
        }(e, 0), n
    }
    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
        }
        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }
            f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }
        function u(e) {
            f += "</" + t(e) + ">"
        }
        function c(e) {
            ("start" == e.event ? o : u)(e.node)
        }
        for (var s = 0, f = "", l = []; e.length || r.length;) {
            var g = i();
            if (f += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
                l.reverse().forEach(u);
                do c(g.splice(0, 1)[0]),
                    g = i();
                while (g == e && g.length && g[0].offset == s);
                l.reverse().forEach(o)
            } else
                "start" == g[0].event ? l.push(g[0].node) : l.pop(),
                    c(g.splice(0, 1)[0])
        }
        return f + n(a.substr(s))
    }
    function s(e) {
        function n(e) {
            return e && e.source || e
        }
        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }
        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {},
                        c = function(n, t) {
                            e.cI && (t = t.toLowerCase()),
                                t.split(" ").forEach(function(e) {
                                    var t = e.split("|");
                                    u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                                })
                        };
                    "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                        c(e, a.k[e])
                    }),
                        a.k = u
                }
                a.lR = t(a.l || /\w+/, !0),
                i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)),
                a.i && (a.iR = t(a.i)),
                void 0 === a.r && (a.r = 1),
                a.c || (a.c = []);
                var s = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(n) {
                        s.push(o(e, n))
                    }) : s.push("self" == e ? a : e)
                }),
                    a.c = s,
                    a.c.forEach(function(e) {
                        r(e, a)
                    }),
                a.starts && r(a.starts, i);
                var f = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = f.length ? t(f.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }
    function f(e, t, a, i) {
        function o(e, n) {
            for (var t = 0; t < n.c.length; t++)
                if (r(n.c[t].bR, e))
                    return n.c[t]
        }
        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;)
                    e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }
        function c(e, n) {
            return !a && r(n.iR, e)
        }
        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }
        function p(e, n, t, r) {
            var a = r ? "" : E.classPrefix,
                i = '<span class="' + a,
                o = t ? "" : "</span>";
            return i += e + '">', i + n + o
        }
        function h() {
            if (!k.k)
                return n(M);
            var e = "",
                t = 0;
            k.lR.lastIndex = 0;
            for (var r = k.lR.exec(M); r;) {
                e += n(M.substr(t, r.index - t));
                var a = g(k, r);
                a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]),
                    t = k.lR.lastIndex,
                    r = k.lR.exec(M)
            }
            return e + n(M.substr(t))
        }
        function d() {
            var e = "string" == typeof k.sL;
            if (e && !R[k.sL])
                return n(M);
            var t = e ? f(k.sL, M, !0, y[k.sL]) : l(M, k.sL.length ? k.sL : void 0);
            return k.r > 0 && (B += t.r), e && (y[k.sL] = t.top), p(t.language, t.value, !1, !0)
        }
        function b() {
            L += void 0 !== k.sL ? d() : h(),
                M = ""
        }
        function v(e, n) {
            L += e.cN ? p(e.cN, "", !0) : "",
                k = Object.create(e, {
                    parent: {
                        value: k
                    }
                })
        }
        function m(e, n) {
            if (M += e, void 0 === n)
                return b(), 0;
            var t = o(n, k);
            if (t)
                return t.skip ? M += n : (t.eB && (M += n), b(), t.rB || t.eB || (M = n)), v(t, n), t.rB ? 0 : n.length;
            var r = u(k, n);
            if (r) {
                var a = k;
                a.skip ? M += n : (a.rE || a.eE || (M += n), b(), a.eE && (M = n));
                do k.cN && (L += "</span>"),
                k.skip || (B += k.r),
                    k = k.parent;
                while (k != r.parent);
                return r.starts && v(r.starts, ""), a.rE ? 0 : n.length
            }
            if (c(n, k))
                throw new Error('Illegal lexeme "' + n + '" for mode "' + (k.cN || "<unnamed>") + '"');
            return M += n, n.length || 1
        }
        var N = w(e);
        if (!N)
            throw new Error('Unknown language: "' + e + '"');
        s(N);
        var x,
            k = i || N,
            y = {},
            L = "";
        for (x = k; x != N; x = x.parent)
            x.cN && (L = p(x.cN, "", !0) + L);
        var M = "",
            B = 0;
        try {
            for (var C, j, I = 0;;) {
                if (k.t.lastIndex = I, C = k.t.exec(t), !C)
                    break;
                j = m(t.substr(I, C.index - I), C[0]),
                    I = C.index + j
            }
            for (m(t.substr(I)), x = k; x.parent; x = x.parent)
                x.cN && (L += "</span>");
            return {
                r: B,
                value: L,
                language: e,
                top: k
            }
        } catch (O) {
            if (-1 != O.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: n(t)
                };
            throw O
        }
    }
    function l(e, t) {
        t = t || E.languages || Object.keys(R);
        var r = {
                r: 0,
                value: n(e)
            },
            a = r;
        return t.filter(w).forEach(function(n) {
            var t = f(n, e, !1);
            t.language = n,
            t.r > a.r && (a = t),
            t.r > r.r && (a = r, r = t)
        }), a.language && (r.second_best = a), r
    }
    function g(e) {
        return E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
            return n.replace(/\t/g, E.tabReplace)
        })), E.useBR && (e = e.replace(/\n/g, "<br>")), e
    }
    function p(e, n, t) {
        var r = n ? x[n] : t,
            a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
    }
    function h(e) {
        var n = i(e);
        if (!a(n)) {
            var t;
            E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent,
                o = n ? f(n, r, !0) : l(r),
                s = u(t);
            if (s.length) {
                var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                h.innerHTML = o.value,
                    o.value = c(s, u(h), r)
            }
            o.value = g(o.value),
                e.innerHTML = o.value,
                e.className = p(e.className, n, o.language),
                e.result = {
                    language: o.language,
                    re: o.r
                },
            o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.r
            })
        }
    }
    function d(e) {
        E = o(E, e)
    }
    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, h)
        }
    }
    function v() {
        addEventListener("DOMContentLoaded", b, !1),
            addEventListener("load", b, !1)
    }
    function m(n, t) {
        var r = R[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            x[e] = n
        })
    }
    function N() {
        return Object.keys(R)
    }
    function w(e) {
        return e = (e || "").toLowerCase(), R[e] || R[x[e]]
    }
    var E = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        R = {},
        x = {};
    return e.highlight = f, e.highlightAuto = l, e.fixMarkup = g, e.highlightBlock = h, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = w, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    }, e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        }, r || {});
        return a.c.push(e.PWM), a.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), a
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e.METHOD_GUARD = {
        b: "\\.\\s*" + e.UIR,
        r: 0
    }, e
});
hljs.registerLanguage("swift", function(e) {
    var t = {
            keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
            literal: "true false nil",
            built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
        },
        i = {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        },
        n = e.C("/\\*", "\\*/", {
            c: ["self"]
        }),
        r = {
            cN: "subst",
            b: /\\\(/,
            e: "\\)",
            k: t,
            c: []
        },
        a = {
            cN: "number",
            b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
            r: 0
        },
        o = e.inherit(e.QSM, {
            c: [r, e.BE]
        });
    return r.c = [a], {
        k: t,
        c: [o, e.CLCM, n, i, a, {
            cN: "function",
            bK: "func",
            e: "{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                b: /</,
                e: />/
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                endsParent: !0,
                k: t,
                c: ["self", a, o, e.CBCM, {
                    b: ":"
                }],
                i: /["']/
            }],
            i: /\[|%/
        }, {
            cN: "class",
            bK: "struct protocol class extension enum",
            k: t,
            e: "\\{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            })]
        }, {
            cN: "meta",
            b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
        }, {
            bK: "import",
            e: /$/,
            c: [e.CLCM, n]
        }]
    }
});
hljs.registerLanguage("kotlin", function(e) {
    var t = {
            keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline interface annotation data sealed internal infix operator out by constructor super trait volatile transient native default",
            built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
            literal: "true false null"
        },
        r = {
            cN: "keyword",
            b: /\b(break|continue|return|this)\b/,
            starts: {
                c: [{
                    cN: "symbol",
                    b: /@\w+/
                }]
            }
        },
        n = {
            cN: "symbol",
            b: e.UIR + "@"
        },
        i = {
            cN: "subst",
            v: [{
                b: "\\$" + e.UIR
            }, {
                b: "\\${",
                e: "}",
                c: [e.ASM, e.CNM]
            }]
        },
        a = {
            cN: "string",
            v: [{
                b: '"""',
                e: '"""',
                c: [i]
            }, {
                b: "'",
                e: "'",
                i: /\n/,
                c: [e.BE]
            }, {
                b: '"',
                e: '"',
                i: /\n/,
                c: [e.BE, i]
            }]
        },
        c = {
            cN: "meta",
            b: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UIR + ")?"
        },
        s = {
            cN: "meta",
            b: "@" + e.UIR,
            c: [{
                b: /\(/,
                e: /\)/,
                c: [e.inherit(a, {
                    cN: "meta-string"
                })]
            }]
        };
    return {
        k: t,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, r, n, c, s, {
            cN: "function",
            bK: "fun",
            e: "[(]|$",
            rB: !0,
            eE: !0,
            k: t,
            i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
            r: 5,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "type",
                b: /</,
                e: />/,
                k: "reified",
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                endsParent: !0,
                k: t,
                r: 0,
                c: [{
                    b: /:/,
                    e: /[=,\/]/,
                    eW: !0,
                    c: [{
                        cN: "type",
                        b: e.UIR
                    }, e.CLCM, e.CBCM],
                    r: 0
                }, e.CLCM, e.CBCM, c, s, a, e.CNM]
            }, e.CBCM]
        }, {
            cN: "class",
            bK: "class interface trait",
            e: /[:\{(]|$/,
            eE: !0,
            i: "extends implements",
            c: [{
                bK: "public protected internal private constructor"
            }, e.UTM, {
                cN: "type",
                b: /</,
                e: />/,
                eB: !0,
                eE: !0,
                r: 0
            }, {
                cN: "type",
                b: /[,:]\s*/,
                e: /[<\(,]|$/,
                eB: !0,
                rE: !0
            }, c, s]
        }, a, {
            cN: "meta",
            b: "^#!/usr/bin/env",
            e: "$",
            i: "\n"
        }, e.CNM]
    }
});