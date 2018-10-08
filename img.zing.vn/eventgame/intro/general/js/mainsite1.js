/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) {
                    cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close()
                }
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && b != null && typeof b == "object") {
                for (var e in b) {
                    ca(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)))
        }
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bx : by, g = 0, h = e.length;
        if (d > 0) {
            if (c !== "border") {
                for (; g < h; g++) {
                    c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) {
            d = a.style[b] || 0
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; g < h; g++) {
                d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0)
            }
        }
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({url: b.src, async: !1, dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") {
                b.outerHTML = a.outerHTML
            } else {
                if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option") {
                        b.selected = a.defaultSelected
                    } else {
                        if (c === "input" || c === "textarea") {
                            b.defaultValue = a.defaultValue
                        }
                    }
                } else {
                    a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)
                }
            }
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return(b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {constructor: e, init: function (a, d, f) {
            var g, h, j, k;
            if (!a) {
                return this
            }
            if (a.nodeType) {
                this.context = this[0] = a, this.length = 1;
                return this
            }
            if (a === "body" && !d && c.body) {
                this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                return this
            }
            if (typeof a == "string") {
                a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                if (g && (g[1] || !d)) {
                    if (g[1]) {
                        d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                        return e.merge(this, a)
                    }
                    h = c.getElementById(g[2]);
                    if (h && h.parentNode) {
                        if (h.id !== g[2]) {
                            return f.find(a)
                        }
                        this.length = 1, this[0] = h
                    }
                    this.context = c, this.selector = a;
                    return this
                }
                return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
            }
            if (e.isFunction(a)) {
                return f.ready(a)
            }
            a.selector !== b && (this.selector = a.selector, this.context = a.context);
            return e.makeArray(a, this)
        }, selector: "", jquery: "1.7.1", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return F.call(this, 0)
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = this.constructor();
            e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d
        }, each: function (a, b) {
            return e.each(this, a, b)
        }, ready: function (a) {
            e.bindReady(), A.add(a);
            return this
        }, eq: function (a) {
            a = +a;
            return a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(e.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: E, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) {
                if ((a = arguments[j]) != null) {
                    for (c in a) {
                        d = i[c], f = a[c];
                        if (i === f) {
                            continue
                        }
                        l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                    }
                }
            }
            return i
        }, e.extend({noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        }, ready: function (a) {
            if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                if (!c.body) {
                    return setTimeout(e.ready, 1)
                }
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0) {
                    return
                }
                A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
            }
        }, bindReady: function () {
            if (!A) {
                A = e.Callbacks("once memory");
                if (c.readyState === "complete") {
                    return setTimeout(e.ready, 1)
                }
                if (c.addEventListener) {
                    c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                } else {
                    if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && J()
                    }
                }
            }
        }, isFunction: function (a) {
            return e.type(a) === "function"
        }, isArray: Array.isArray || function (a) {
            return e.type(a) === "array"
        }, isWindow: function (a) {
            return a && typeof a == "object" && "setInterval" in a
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            var d;
            for (d in a) {
            }
            return d === b || D.call(a, d)
        }, isEmptyObject: function (a) {
            for (var b in a) {
                return !1
            }
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseJSON: function (b) {
            if (typeof b != "string" || !b) {
                return null
            }
            b = e.trim(b);
            if (a.JSON && a.JSON.parse) {
                return a.JSON.parse(b)
            }
            if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                return(new Function("return " + b))()
            }
            e.error("Invalid JSON: " + b)
        }, parseXML: function (c) {
            var d, f;
            try {
                a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (g) {
                d = b
            }
            (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
            return d
        }, noop: function () {
        }, globalEval: function (b) {
            b && j.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(w, "ms-").replace(v, x)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
            if (d) {
                if (i) {
                    for (f in a) {
                        if (c.apply(a[f], d) === !1) {
                            break
                        }
                    }
                } else {
                    for (; g < h;) {
                        if (c.apply(a[g++], d) === !1) {
                            break
                        }
                    }
                }
            } else {
                if (i) {
                    for (f in a) {
                        if (c.call(a[f], f, a[f]) === !1) {
                            break
                        }
                    }
                } else {
                    for (; g < h;) {
                        if (c.call(a[g], g, a[g++]) === !1) {
                            break
                        }
                    }
                }
            }
            return a
        }, trim: G ? function (a) {
            return a == null ? "" : G.call(a)
        } : function (a) {
            return a == null ? "" : (a + "").replace(k, "").replace(l, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                var d = e.type(a);
                a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
            }
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (H) {
                    return H.call(b, a, c)
                }
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        }, merge: function (a, c) {
            var d = a.length, e = 0;
            if (typeof c.length == "number") {
                for (var f = c.length; e < f; e++) {
                    a[d++] = c[e]
                }
            } else {
                while (c[e] !== b) {
                    a[d++] = c[e++]
                }
            }
            a.length = d;
            return a
        }, grep: function (a, b, c) {
            var d = [], e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++) {
                e = !!b(a[f], f), c !== e && d.push(a[f])
            }
            return d
        }, map: function (a, c, d) {
            var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
            if (k) {
                for (; i < j; i++) {
                    f = c(a[i], i, d), f != null && (h[h.length] = f)
                }
            } else {
                for (g in a) {
                    f = c(a[g], g, d), f != null && (h[h.length] = f)
                }
            }
            return h.concat.apply([], h)
        }, guid: 1, proxy: function (a, c) {
            if (typeof c == "string") {
                var d = a[c];
                c = a, a = d
            }
            if (!e.isFunction(a)) {
                return b
            }
            var f = F.call(arguments, 2), g = function () {
                return a.apply(c, f.concat(F.call(arguments)))
            };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g
        }, access: function (a, c, d, f, g, h) {
            var i = a.length;
            if (typeof c == "object") {
                for (var j in c) {
                    e.access(a, j, c[j], f, g, d)
                }
                return a
            }
            if (d !== b) {
                f = !h && f && e.isFunction(d);
                for (var k = 0; k < i; k++) {
                    g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
                }
                return a
            }
            return i ? g(a[0], c) : b
        }, now: function () {
            return(new Date).getTime()
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(c);
            return a
        }, browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) {
                g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            }
        }, n = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
            for (; c && l < k; l++) {
                if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
            }
            i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
        }, o = {add: function () {
            if (c) {
                var a = c.length;
                m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
            }
            return this
        }, remove: function () {
            if (c) {
                var b = arguments, d = 0, e = b.length;
                for (; d < e; d++) {
                    for (var f = 0; f < c.length; f++) {
                        if (b[d] === c[f]) {
                            i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                            if (a.unique) {
                                break
                            }
                        }
                    }
                }
            }
            return this
        }, has: function (a) {
            if (c) {
                var b = 0, d = c.length;
                for (; b < d; b++) {
                    if (a === c[b]) {
                        return !0
                    }
                }
            }
            return !1
        }, empty: function () {
            c = [];
            return this
        }, disable: function () {
            c = d = e = b;
            return this
        }, disabled: function () {
            return !c
        }, lock: function () {
            d = b, (!e || e === !0) && o.disable();
            return this
        }, locked: function () {
            return !d
        }, fireWith: function (b, c) {
            d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
            return this
        }, fire: function () {
            o.fireWith(this, arguments);
            return this
        }, fired: function () {
            return !!e
        }};
        return o
    };
    var i = [].slice;
    f.extend({Deferred: function (a) {
        var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () {
            return e
        }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this
        }, always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this
        }, pipe: function (a, b, c) {
            return f.Deferred(function (d) {
                f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                    var c = b[0], e = b[1], g;
                    f.isFunction(c) ? i[a](function () {
                        g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                    }) : i[a](d[e])
                })
            }).promise()
        }, promise: function (a) {
            if (a == null) {
                a = h
            } else {
                for (var b in h) {
                    a[b] = h[b]
                }
            }
            return a
        }}, i = h.promise({}), j;
        for (j in g) {
            i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
        }
        i.done(function () {
            e = "resolved"
        }, c.disable, d.lock).fail(function () {
            e = "rejected"
        }, b.disable, d.lock), a && a.call(i, i);
        return i
    }, when: function (a) {
        function m(a) {
            return function (b) {
                e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
            }
        }

        function l(a) {
            return function (c) {
                b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
            }
        }

        var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
        if (d > 1) {
            for (; c < d; c++) {
                b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
            }
            g || j.resolveWith(j, b)
        } else {
            j !== a && j.resolveWith(j, d ? [a] : [])
        }
        return k
    }}), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"), r = c.documentElement;
        q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return{}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {leadingWhitespace: q.firstChild.nodeType === 3, tbody: !q.getElementsByTagName("tbody").length, htmlSerialize: !!q.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: q.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0}, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }
        !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {marginRight: 0}).marginRight, 10) || 0) === 0);
        if (q.attachEvent) {
            for (o in {submit: 1, change: 1, focusin: 1}) {
                n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p
            }
        }
        k.removeChild(q), k = g = h = j = q = i = null, f(function () {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div><table " + n + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {doesNotAddBorder: e.offsetTop !== 5, doesAddBorderForTableAndCells: h.offsetTop === 5}, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
        return !!a && !m(a)
    }, data: function (a, c, d, e) {
        if (!!f.acceptData(a)) {
            var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                return
            }
            n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function") {
                e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
            }
            g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
            if (o && !h[c]) {
                return g.events
            }
            k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
            return i
        }
    }, removeData: function (a, b, c) {
        if (!!f.acceptData(a)) {
            var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
            if (!j[k]) {
                return
            }
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, g = b.length; e < g; e++) {
                        delete d[b[e]]
                    }
                    if (!(c ? m : f.isEmptyObject)(d)) {
                        return
                    }
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k])) {
                    return
                }
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
        }
    }, _data: function (a, b, c) {
        return f.data(a, b, c, !0)
    }, acceptData: function (a) {
        if (a.nodeName) {
            var b = f.noData[a.nodeName.toLowerCase()];
            if (b) {
                return b !== !0 && a.getAttribute("classid") === b
            }
        }
        return !0
    }}), f.fn.extend({data: function (a, c) {
        var d, e, g, h = null;
        if (typeof a == "undefined") {
            if (this.length) {
                h = f.data(this[0]);
                if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                    e = this[0].attributes;
                    for (var i = 0, j = e.length; i < j; i++) {
                        g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]))
                    }
                    f._data(this[0], "parsedAttrs", !0)
                }
            }
            return h
        }
        if (typeof a == "object") {
            return this.each(function () {
                f.data(this, a)
            })
        }
        d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
        if (c === b) {
            h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
            return h === b && d[1] ? this.data(d[0]) : h
        }
        return this.each(function () {
            var b = f(this), e = [d[0], c];
            b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
        })
    }, removeData: function (a) {
        return this.each(function () {
            f.removeData(this, a)
        })
    }}), f.extend({_mark: function (a, b) {
        a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
    }, _unmark: function (a, b, c) {
        a !== !0 && (c = b, b = a, a = !1);
        if (b) {
            c = c || "fx";
            var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
        }
    }, queue: function (a, b, c) {
        var d;
        if (a) {
            b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
            return d || []
        }
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b), d = c.shift(), e = {};
        d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
            f.dequeue(a, b)
        }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
    }}), f.fn.extend({queue: function (a, c) {
        typeof a != "string" && (c = a, a = "fx");
        if (c === b) {
            return f.queue(this[0], a)
        }
        return this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            f.dequeue(this, a)
        })
    }, delay: function (a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
        return this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        function m() {
            --h || d.resolveWith(e, [e])
        }

        typeof a != "string" && (c = a, a = b), a = a || "fx";
        var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
        while (g--) {
            if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                h++, l.add(m)
            }
        }
        m();
        return d.promise()
    }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function (a, b) {
        return f.access(this, a, b, !0, f.attr)
    }, removeAttr: function (a) {
        return this.each(function () {
            f.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return f.access(this, a, b, !0, f.prop)
    }, removeProp: function (a) {
        a = f.propFix[a] || a;
        return this.each(function () {
            try {
                this[a] = b, delete this[a]
            } catch (c) {
            }
        })
    }, addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            })
        }
        if (a && typeof a == "string") {
            b = a.split(p);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1) {
                    if (!e.className && b.length === 1) {
                        e.className = a
                    } else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) {
                            ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                        }
                        e.className = f.trim(g)
                    }
                }
            }
        }
        return this
    }, removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            })
        }
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(p);
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className) {
                    if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) {
                            h = h.replace(" " + c[i] + " ", " ")
                        }
                        g.className = f.trim(h)
                    } else {
                        g.className = ""
                    }
                }
            }
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        if (f.isFunction(a)) {
            return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            })
        }
        return this.each(function () {
            if (c === "string") {
                var e, g = 0, h = f(this), i = b, j = a.split(p);
                while (e = j[g++]) {
                    i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                }
            } else {
                if (c === "undefined" || c === "boolean") {
                    this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                }
            }
        })
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++) {
            if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                return !0
            }
        }
        return !1
    }, val: function (a) {
        var c, d, e, g = this[0];
        if (!!arguments.length) {
            e = f.isFunction(a);
            return this.each(function (d) {
                var g = f(this), h;
                if (this.nodeType === 1) {
                    e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                        this.value = h
                    }
                }
            })
        }
        if (g) {
            c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
            if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                return d
            }
            d = g.value;
            return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
        }
    }}), f.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return !b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
        if (g < 0) {
            return null
        }
        c = j ? g : 0, d = j ? g + 1 : i.length;
        for (; c < d; c++) {
            e = i[c];
            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                b = f(e).val();
                if (j) {
                    return b
                }
                h.push(b)
            }
        }
        if (j && !h.length && i.length) {
            return f(i[g]).val()
        }
        return h
    }, set: function (a, b) {
        var c = f.makeArray(b);
        f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0
        }), c.length || (a.selectedIndex = -1);
        return c
    }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) {
        var g, h, i, j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
            if (e && c in f.attrFn) {
                return f(a)[c](d)
            }
            if (typeof a.getAttribute == "undefined") {
                return f.prop(a, c, d)
            }
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return
                }
                if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                    return g
                }
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                return g
            }
            g = a.getAttribute(c);
            return g === null ? b : g
        }
    }, removeAttr: function (a, b) {
        var c, d, e, g, h = 0;
        if (b && a.nodeType === 1) {
            d = b.toLowerCase().split(p), g = d.length;
            for (; h < g; h++) {
                e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
            }
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (r.test(a.nodeName) && a.parentNode) {
            f.error("type property can't be changed")
        } else {
            if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                var c = a.value;
                a.setAttribute("type", b), c && (a.value = c);
                return b
            }
        }
    }}, value: {get: function (a, b) {
        if (w && f.nodeName(a, "button")) {
            return w.get(a, b)
        }
        return b in a ? a.value : null
    }, set: function (a, b, c) {
        if (w && f.nodeName(a, "button")) {
            return w.set(a, b, c)
        }
        a.value = b
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, g, h, i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        }
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
    }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) {
        var d, e = f.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function (a, b, c) {
        var d;
        b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
        return c
    }}, v || (y = {name: !0, id: !0}, w = f.valHooks.button = {get: function (a, c) {
        var d;
        d = a.getAttributeNode(c);
        return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
    }, set: function (a, b, d) {
        var e = a.getAttributeNode(d);
        e || (e = c.createAttribute(d), a.setAttributeNode(e));
        return e.nodeValue = b + ""
    }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) {
            if (c === "") {
                a.setAttribute(b, "auto");
                return c
            }
        }})
    }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) {
        b === "" && (b = "false"), w.set(a, b, c)
    }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d
        }})
    }), f.support.style || (f.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b
    }, set: function (a, b) {
        return a.style.cssText = "" + b
    }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        return null
    }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }}
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) {
            if (f.isArray(b)) {
                return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        }})
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /\bhover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
            d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
            }, i.elem = a), c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: G(g), namespace: n.join(".")}, p), r = j[m];
                if (!r) {
                    r = j[m] = [], r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                        a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
            }
            a = null
        }
    }, global: {}, remove: function (a, b, c, d, e) {
        var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
        if (!!g && !!(o = g.events)) {
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                if (!j) {
                    for (j in o) {
                        f.event.remove(a, j + b[h], c, d, !0)
                    }
                    continue
                }
                p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++) {
                    s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                }
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) {
        if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
            var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
            if (E.test(h + f.event.triggered)) {
                return
            }
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                return
            }
            c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
            if (!e) {
                j = f.cache;
                for (l in j) {
                    j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                }
                return
            }
            c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
            if (p.trigger && p.trigger.apply(e, d) === !1) {
                return
            }
            r = [
                [e, p.bindType || h]
            ];
            if (!g && !p.noBubble && !f.isWindow(e)) {
                s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                for (; m; m = m.parentNode) {
                    r.push([m, s]), n = m
                }
                n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
            }
            for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
            }
            c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
            return c.result
        }
    }, dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
        g[0] = c, c.delegateTarget = this;
        if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
            m = f(this), m.context = this.ownerDocument || this;
            for (l = c.target; l != this; l = l.parentNode || this) {
                o = {}, q = [], m[0] = l;
                for (j = 0; j < e; j++) {
                    r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r)
                }
                q.length && i.push({elem: l, matches: q})
            }
        }
        d.length > e && i.push({elem: this, matches: d.slice(e)});
        for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
            p = i[j], c.currentTarget = p.elem;
            for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                r = p.matches[k];
                if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) {
                    c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
        }
        return c.result
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) {
        var e, f, g, h = d.button, i = d.fromElement;
        a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a
    }}, fix: function (a) {
        if (a[f.expando]) {
            return a
        }
        var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d;) {
            e = i[--d], a[e] = g[e]
        }
        a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
        return h.filter ? h.filter(a, g) : a
    }, special: {ready: {setup: f.bindReady}, load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, c) {
        f.isWindow(this) && (this.onbeforeunload = c)
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null)
    }}}, simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) {
            return new f.Event(a, b)
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }, stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = K, this.stopPropagation()
    }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J}, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
            if (!d || d !== c && !f.contains(c, d)) {
                a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
            }
            return h
        }}
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function () {
        if (f.nodeName(this, "form")) {
            return !1
        }
        f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
            }), d._submit_attached = !0)
        })
    }, teardown: function () {
        if (f.nodeName(this, "form")) {
            return !1
        }
        f.event.remove(this, "._submit")
    }}), f.support.changeBubbles || (f.event.special.change = {setup: function () {
        if (z.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio") {
                f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                })
            }
            return !1
        }
        f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
            }), b._change_attached = !0)
        })
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
            return a.handleObj.handler.apply(this, arguments)
        }
    }, teardown: function () {
        f.event.remove(this, "._change");
        return z.test(this.nodeName)
    }}), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0)
        }, teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0)
        }}
    }), f.fn.extend({on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
            typeof c != "string" && (d = c, c = b);
            for (i in a) {
                this.on(i, c, d, a[i], g)
            }
            return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1) {
            e = J
        } else {
            if (!e) {
                return this
            }
        }
        g === 1 && (h = e, e = function (a) {
            f().off(a);
            return h.apply(this, arguments)
        }, e.guid = h.guid || (h.guid = f.guid++));
        return this.each(function () {
            f.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on.call(this, a, b, c, d, 1)
    }, off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
            return this
        }
        if (typeof a == "object") {
            for (var g in a) {
                this.off(g, c, a[g])
            }
            return this
        }
        if (c === !1 || typeof c == "function") {
            d = c, c = b
        }
        d === !1 && (d = J);
        return this.each(function () {
            f.event.remove(this, a, d, c)
        })
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this
    }, die: function (a, b) {
        f(this.context).off(a, this.selector || "**", b);
        return this
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
    }, trigger: function (a, b) {
        return this.each(function () {
            f.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        if (this[0]) {
            return f.event.trigger(a, b, this[0], !0)
        }
    }, toggle: function (a) {
        var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1
        };
        e.guid = c;
        while (d < b.length) {
            b[d++].guid = c
        }
        return this.click(e)
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else {
                                if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) {
                return[]
            }
            if (!b || typeof b != "string") {
                return e
            }
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) {
                if (w.length === 2 && o.relative[w[0]]) {
                    j = y(w[0] + w[1], d, f)
                } else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) {
                        b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                }
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) {
                        q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    }
                } else {
                    k = w = []
                }
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") {
                if (!u) {
                    e.push.apply(e, k)
                } else {
                    if (d && d.nodeType === 1) {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                        }
                    } else {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && k[t].nodeType === 1 && e.push(j[t])
                        }
                    }
                }
            } else {
                s(k, e)
            }
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1)
                    }
                }
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) {
                return[]
            }
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return{set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) {
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") {
                            continue
                        }
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) {
                                g = i = !0
                            } else {
                                if (f === !0) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (n = 0; (j = s[n]) != null; n++) {
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                            }
                        }
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) {
                                return[]
                            }
                            break
                        }
                    }
                }
                if (a === q) {
                    if (g == null) {
                        m.error(a)
                    } else {
                        break
                    }
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9) {
                    if (typeof a.textContent == "string") {
                        return a.textContent
                    }
                    if (typeof a.innerText == "string") {
                        return a.innerText.replace(k, "")
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        e += n(a)
                    }
                } else {
                    if (d === 3 || d === 4) {
                        return a.nodeValue
                    }
                }
            } else {
                for (b = 0; c = a[b]; b++) {
                    c.nodeType !== 8 && (e += n(c))
                }
            }
            return e
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a) {
            return a.getAttribute("href")
        }, type: function (a) {
            return a.getAttribute("type")
        }}, relative: {"+": function (a, b) {
            var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
            d && (b = b.toLowerCase());
            for (var f = 0, g = a.length, h; f < g; f++) {
                if (h = a[f]) {
                    while ((h = h.previousSibling) && h.nodeType !== 1) {
                    }
                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                }
            }
            e && m.filter(b, a, !0)
        }, ">": function (a, b) {
            var c, d = typeof b == "string", e = 0, f = a.length;
            if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                        var g = c.parentNode;
                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                    }
                }
            } else {
                for (; e < f; e++) {
                    c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                }
                d && m.filter(b, a, !0)
            }
        }, "": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
        }, "~": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
        }}, find: {ID: function (a, b, c) {
            if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : []
            }
        }, NAME: function (a, b) {
            if (typeof b.getElementsByName != "undefined") {
                var c = [], d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++) {
                    d[e].getAttribute("name") === a[1] && c.push(d[e])
                }
                return c.length === 0 ? null : c
            }
        }, TAG: function (a, b) {
            if (typeof b.getElementsByTagName != "undefined") {
                return b.getElementsByTagName(a[1])
            }
        }}, preFilter: {CLASS: function (a, b, c, d, e, f) {
            a = " " + a[1].replace(j, "") + " ";
            if (f) {
                return a
            }
            for (var g = 0, h; (h = b[g]) != null; g++) {
                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
            }
            return !1
        }, ID: function (a) {
            return a[1].replace(j, "")
        }, TAG: function (a, b) {
            return a[1].replace(j, "").toLowerCase()
        }, CHILD: function (a) {
            if (a[1] === "nth") {
                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
            } else {
                a[2] && m.error(a[0])
            }
            a[0] = e++;
            return a
        }, ATTR: function (a, b, c, d, e, f) {
            var g = a[1] = a[1].replace(j, "");
            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
            return a
        }, PSEUDO: function (b, c, d, e, f) {
            if (b[1] === "not") {
                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                    b[3] = m(b[3], null, null, c)
                } else {
                    var g = m.filter(b[3], c, d, !0 ^ f);
                    d || e.push.apply(e, g);
                    return !1
                }
            } else {
                if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                    return !0
                }
            }
            return b
        }, POS: function (a) {
            a.unshift(!0);
            return a
        }}, filters: {enabled: function (a) {
            return a.disabled === !1 && a.type !== "hidden"
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            return a.checked === !0
        }, selected: function (a) {
            a.parentNode && a.parentNode.selectedIndex;
            return a.selected === !0
        }, parent: function (a) {
            return !!a.firstChild
        }, empty: function (a) {
            return !a.firstChild
        }, has: function (a, b, c) {
            return !!m(c[3], a).length
        }, header: function (a) {
            return/h\d/i.test(a.nodeName)
        }, text: function (a) {
            var b = a.getAttribute("type"), c = a.type;
            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
        }, radio: function (a) {
            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
        }, checkbox: function (a) {
            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
        }, file: function (a) {
            return a.nodeName.toLowerCase() === "input" && "file" === a.type
        }, password: function (a) {
            return a.nodeName.toLowerCase() === "input" && "password" === a.type
        }, submit: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "submit" === a.type
        }, image: function (a) {
            return a.nodeName.toLowerCase() === "input" && "image" === a.type
        }, reset: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "reset" === a.type
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && "button" === a.type || b === "button"
        }, input: function (a) {
            return/input|select|textarea|button/i.test(a.nodeName)
        }, focus: function (a) {
            return a === a.ownerDocument.activeElement
        }}, setFilters: {first: function (a, b) {
            return b === 0
        }, last: function (a, b, c, d) {
            return b === d.length - 1
        }, even: function (a, b) {
            return b % 2 === 0
        }, odd: function (a, b) {
            return b % 2 === 1
        }, lt: function (a, b, c) {
            return b < c[3] - 0
        }, gt: function (a, b, c) {
            return b > c[3] - 0
        }, nth: function (a, b, c) {
            return c[3] - 0 === b
        }, eq: function (a, b, c) {
            return c[3] - 0 === b
        }}, filter: {PSEUDO: function (a, b, c, d) {
            var e = b[1], f = o.filters[e];
            if (f) {
                return f(a, c, b, d)
            }
            if (e === "contains") {
                return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
            }
            if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++) {
                    if (g[h] === a) {
                        return !1
                    }
                }
                return !0
            }
            m.error(e)
        }, CHILD: function (a, b) {
            var c, e, f, g, h, i, j, k = b[1], l = a;
            switch (k) {
                case"only":
                case"first":
                    while (l = l.previousSibling) {
                        if (l.nodeType === 1) {
                            return !1
                        }
                    }
                    if (k === "first") {
                        return !0
                    }
                    l = a;
                case"last":
                    while (l = l.nextSibling) {
                        if (l.nodeType === 1) {
                            return !1
                        }
                    }
                    return !0;
                case"nth":
                    c = b[2], e = b[3];
                    if (c === 1 && e === 0) {
                        return !0
                    }
                    f = b[0], g = a.parentNode;
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                        i = 0;
                        for (l = g.firstChild; l; l = l.nextSibling) {
                            l.nodeType === 1 && (l.nodeIndex = ++i)
                        }
                        g[d] = f
                    }
                    j = a.nodeIndex - e;
                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
            }
        }, ID: function (a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b
        }, TAG: function (a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
        }, CLASS: function (a, b) {
            return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        }, ATTR: function (a, b) {
            var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
        }, POS: function (a, b, c, d) {
            var e = b[2], f = o.setFilters[e];
            if (f) {
                return f(a, c, b, d)
            }
        }}}, p = o.match.POS, q = function (a, b) {
            return"\\" + (b - 0 + 1)
        };
        for (var r in o.match) {
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
        }
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a)
                } else {
                    if (typeof a.length == "number") {
                        for (var e = a.length; c < e; c++) {
                            d.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c])
                        }
                    }
                }
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) {
                return v(a, b)
            }
            if (!g) {
                return -1
            }
            if (!i) {
                return 1
            }
            while (j) {
                e.unshift(j), j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return v(e[k], f[k])
                }
            }
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e])
                    }
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return s(e.getElementsByTagName(b), f)
                            }
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                return s(e.getElementsByClassName(h[2]), f)
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return s([e.body], f)
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return s([], f)
                                }
                                if (i.id === h[3]) {
                                    return s([i], f)
                                }
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) {
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    }
                                } catch (r) {
                                } finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) {
                    m[e] = a[e]
                }
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) {
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f
                                }
                            }
                        } catch (g) {
                        }
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return
                }
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1])
                    }
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) {
                f += d[0], a = a.replace(o.match.PSEUDO, "")
            }
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) {
                m(a, g[h], e, c)
            }
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.POS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({find: function (a) {
        var b = this, c, d;
        if (typeof a != "string") {
            return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) {
                    if (f.contains(b[c], this)) {
                        return !0
                    }
                }
            })
        }
        var e = this.pushStack("", "find", a), g, h, i;
        for (c = 0, d = this.length; c < d; c++) {
            g = e.length, f.find(a, this[c], e);
            if (c > 0) {
                for (h = g; h < e.length; h++) {
                    for (i = 0; i < g; i++) {
                        if (e[i] === e[h]) {
                            e.splice(h--, 1);
                            break
                        }
                    }
                }
            }
        }
        return e
    }, has: function (a) {
        var b = f(a);
        return this.filter(function () {
            for (var a = 0, c = b.length; a < c; a++) {
                if (f.contains(this, b[a])) {
                    return !0
                }
            }
        })
    }, not: function (a) {
        return this.pushStack(T(this, a, !1), "not", a)
    }, filter: function (a) {
        return this.pushStack(T(this, a, !0), "filter", a)
    }, is: function (a) {
        return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function (a, b) {
        var c = [], d, e, g = this[0];
        if (f.isArray(a)) {
            var h = 1;
            while (g && g.ownerDocument && g !== b) {
                for (d = 0; d < a.length; d++) {
                    f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h})
                }
                g = g.parentNode, h++
            }
            return c
        }
        var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            while (g) {
                if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                    break
                }
            }
        }
        c = c.length > 1 ? f.unique(c) : c;
        return this.pushStack(c, "closest", a)
    }, index: function (a) {
        if (!a) {
            return this[0] && this[0].parentNode ? this.prevAll().length : -1
        }
        if (typeof a == "string") {
            return f.inArray(this[0], f(a))
        }
        return f.inArray(a.jquery ? a[0] : a, this)
    }, add: function (a, b) {
        var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
        return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }}), f.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null
    }, parents: function (a) {
        return f.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return f.dir(a, "parentNode", c)
    }, next: function (a) {
        return f.nth(a, 2, "nextSibling")
    }, prev: function (a) {
        return f.nth(a, 2, "previousSibling")
    }, nextAll: function (a) {
        return f.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return f.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return f.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return f.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return f.sibling(a.parentNode.firstChild, a)
    }, children: function (a) {
        return f.sibling(a.firstChild)
    }, contents: function (a) {
        return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
    }}, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({filter: function (a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
    }, dir: function (a, c, d) {
        var e = [], g = a[c];
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
            g.nodeType === 1 && e.push(g), g = g[c]
        }
        return e
    }, nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c]) {
            if (a.nodeType === 1 && ++e === b) {
                break
            }
        }
        return a
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) {
            a.nodeType === 1 && a !== b && c.push(a)
        }
        return c
    }});
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            })
        }
        if (typeof a != "object" && a !== b) {
            return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
        }
        return f.text(this)
    }, wrapAll: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            })
        }
        if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1) {
                    a = a.firstChild
                }
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            })
        }
        return this.each(function () {
            var b = f(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
            f(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    }, before: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            })
        }
        if (arguments.length) {
            var a = f.clean(arguments);
            a.push.apply(a, this.toArray());
            return this.pushStack(a, "before", arguments)
        }
    }, after: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            })
        }
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, f.clean(arguments));
            return a
        }
    }, remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++) {
            if (!a || f.filter(a, [d]).length) {
                !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
            }
        }
        return this
    }, empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild) {
                b.removeChild(b.firstChild)
            }
        }
        return this
    }, clone: function (a, b) {
        a = a == null ? !1 : a, b = b == null ? a : b;
        return this.map(function () {
            return f.clone(this, a, b)
        })
    }, html: function (a) {
        if (a === b) {
            return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null
        }
        if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(Y, "<$1></$2>");
            try {
                for (var c = 0, d = this.length; c < d; c++) {
                    this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                }
            } catch (e) {
                this.empty().append(a)
            }
        } else {
            f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a)
        }
        return this
    }, replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                })
            }
            typeof a != "string" && (a = f(a).detach());
            return this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a)
            })
        }
        return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, c, d) {
        var e, g, h, i, j = a[0], k = [];
        if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
            return this.each(function () {
                f(this).domManip(a, c, d, !0)
            })
        }
        if (f.isFunction(j)) {
            return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            })
        }
        if (this[0]) {
            i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
            if (g) {
                c = c && f.nodeName(g, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                    d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
            }
            k.length && f.each(k, bp)
        }
        return this
    }}), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return{fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({clone: function (a, b, c) {
        var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            bk(a, h), d = bl(a), e = bl(h);
            for (g = 0; d[g]; ++g) {
                e[g] && bk(d[g], e[g])
            }
        }
        if (b) {
            bj(a, h);
            if (c) {
                d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    bj(d[g], e[g])
                }
            }
        }
        d = e = null;
        return h
    }, clean: function (a, b, d, e) {
        var g;
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        var h = [], i;
        for (var j = 0, k; (k = a[j]) != null; j++) {
            typeof k == "number" && (k += "");
            if (!k) {
                continue
            }
            if (typeof k == "string") {
                if (!_.test(k)) {
                    k = b.createTextNode(k)
                } else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = bg[l] || bg._default, n = m[0], o = b.createElement("div");
                    b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) {
                        o = o.lastChild
                    }
                    if (!f.support.tbody) {
                        var p = $.test(k), q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) {
                            f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }
                    }
                    !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                }
            }
            var r;
            if (!f.support.appendChecked) {
                if (k[0] && typeof(r = k.length) == "number") {
                    for (i = 0; i < r; i++) {
                        bn(k[i])
                    }
                } else {
                    bn(k)
                }
            }
            k.nodeType ? h.push(k) : h = f.merge(h, k)
        }
        if (d) {
            g = function (a) {
                return !a.type || be.test(a.type)
            };
            for (j = 0; h[j]; j++) {
                if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
                    e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
                } else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
        }
        return h
    }, cleanData: function (a) {
        var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                continue
            }
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events) {
                        e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                    }
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
            }
        }
    }});
    var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/, bv = /^([\-+])=([\-+.\de]+)/, bw = {position: "absolute", visibility: "hidden", display: "block"}, bx = ["Left", "Right"], by = ["Top", "Bottom"], bz, bA, bB;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) {
            return this
        }
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = bz(a, "opacity", "opacity");
            return c === "" ? "1" : c
        }
        return a.style.opacity
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
                if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                    return g
                }
                return j[c]
            }
            h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d)) {
                return
            }
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                try {
                    j[c] = d
                } catch (l) {
                }
            }
        }
    }, css: function (a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
            return e
        }
        if (bz) {
            return bz(a, c)
        }
    }, swap: function (a, b, c) {
        var d = {};
        for (var e in b) {
            d[e] = a.style[e], a.style[e] = b[e]
        }
        c.call(a);
        for (e in b) {
            a.style[e] = d[e]
        }
    }}), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {get: function (a, c, d) {
            var e;
            if (c) {
                if (a.offsetWidth !== 0) {
                    return bC(a, b, d)
                }
                f.swap(a, bw, function () {
                    e = bC(a, b, d)
                });
                return e
            }
        }, set: function (a, b) {
            if (!bt.test(b)) {
                return b
            }
            b = parseFloat(b);
            if (b >= 0) {
                return b + "px"
            }
        }}
    }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) {
        return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter) {
                return
            }
        }
        c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
    }}), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) {
            var c;
            f.swap(a, {display: "inline-block"}, function () {
                b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
            });
            return c
        }})
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function (a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) {
        if (typeof a != "string" && bS) {
            return bS.apply(this, arguments)
        }
        if (!this.length) {
            return this
        }
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e)
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        f.ajax({url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
            c = a.responseText, a.isResolved() && (a.done(function (a) {
                c = a
            }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
        }});
        return this
    }, serialize: function () {
        return f.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
        }).map(function (a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                return{name: b.name, value: a.replace(bF, "\r\n")}
            }) : {name: b.name, value: c.replace(bF, "\r\n")}
        }).get()
    }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({getScript: function (a, c) {
        return f.get(a, b, c, "script")
    }, getJSON: function (a, b, c) {
        return f.get(a, b, c, "json")
    }, ajaxSetup: function (a, b) {
        b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
        return a
    }, ajaxSettings: {url: bV, isLocal: bJ.test(bW[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bX}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: bZ(bT), ajaxTransport: bZ(bU), ajax: function (a, c) {
        function w(a, c, l, m) {
            if (s !== 2) {
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified")) {
                            f.lastModified[k] = y
                        }
                        if (z = v.getResponseHeader("Etag")) {
                            f.etag[k] = z
                        }
                    }
                    if (a === 304) {
                        w = "notmodified", o = !0
                    } else {
                        try {
                            r = cc(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    }
                } else {
                    u = w;
                    if (!w || a) {
                        w = "error", a < 0 && (a = 0)
                    }
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) {
            if (!s) {
                var c = a.toLowerCase();
                a = m[c] = m[c] || a, l[a] = b
            }
            return this
        }, getAllResponseHeaders: function () {
            return s === 2 ? n : null
        }, getResponseHeader: function (a) {
            var c;
            if (s === 2) {
                if (!o) {
                    o = {};
                    while (c = bH.exec(n)) {
                        o[c[1].toLowerCase()] = c[2]
                    }
                }
                c = o[a.toLowerCase()]
            }
            return c === b ? null : c
        }, overrideMimeType: function (a) {
            s || (d.mimeType = a);
            return this
        }, abort: function (a) {
            a = a || "abort", p && p.abort(a), w(0, a);
            return this
        }};
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
            if (a) {
                var b;
                if (s < 2) {
                    for (b in a) {
                        j[b] = [j[b], a[b]]
                    }
                } else {
                    b = a[v.status], v.then(b, b)
                }
            }
            return this
        }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
        if (s === 2) {
            return !1
        }
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(), y = d.url.replace(bQ, "$1_=" + x);
                d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
        }
        (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers) {
            v.setRequestHeader(u, d.headers[u])
        }
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return !1
        }
        for (u in {success: 1, error: 1, complete: 1}) {
            v[u](d[u])
        }
        p = b$(bU, d, c, v);
        if (!p) {
            w(-1, "No Transport")
        } else {
            v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                v.abort("timeout")
            }, d.timeout));
            try {
                s = 1, p.send(l, w)
            } catch (z) {
                if (s < 2) {
                    w(-1, z)
                } else {
                    throw z
                }
            }
        }
        return v
    }, param: function (a, c) {
        var d = [], e = function (a, b) {
            b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
            f.each(a, function () {
                e(this.name, this.value)
            })
        } else {
            for (var g in a) {
                ca(g, a[g], c, e)
            }
        }
        return d.join("&").replace(bD, "+")
    }}), f.extend({active: 0, lastModified: {}, etag: {}});
    var cd = f.now(), ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return f.expando + "_" + cd++
    }}), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return"script"
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        f.globalEval(a);
        return a
    }}}), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function (f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                        d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }
                }, e.insertBefore(d, e.firstChild)
            }, abort: function () {
                d && d.onload(0, 1)
            }}
        }
    });
    var cf = a.ActiveXObject ? function () {
        for (var a in ch) {
            ch[a](0, 1)
        }
    } : !1, cg = 0, ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ci() || cj()
    } : ci, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return{send: function (e, g) {
                var h = c.xhr(), i, j;
                c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                if (c.xhrFields) {
                    for (j in c.xhrFields) {
                        h[j] = c.xhrFields[j]
                    }
                }
                c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (j in e) {
                        h.setRequestHeader(j, e[j])
                    }
                } catch (k) {
                }
                h.send(c.hasContent && c.data || null), d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                        if (d && (e || h.readyState === 4)) {
                            d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                            if (e) {
                                h.readyState !== 4 && h.abort()
                            } else {
                                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                try {
                                    k = h.statusText
                                } catch (o) {
                                    k = ""
                                }
                                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                            }
                        }
                    } catch (p) {
                        e || g(-1, p)
                    }
                    m && g(j, k, m, l)
                }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
            }, abort: function () {
                d && d(0, 1)
            }}
        }
    });
    var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], cr;
    f.fn.extend({show: function (a, b, c) {
        var d, e;
        if (a || a === 0) {
            return this.animate(cu("show", 3), a, b, c)
        }
        for (var g = 0, h = this.length; g < h; g++) {
            d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)))
        }
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none") {
                    d.style.display = f._data(d, "olddisplay") || ""
                }
            }
        }
        return this
    }, hide: function (a, b, c) {
        if (a || a === 0) {
            return this.animate(cu("hide", 3), a, b, c)
        }
        var d, e, g = 0, h = this.length;
        for (; g < h; g++) {
            d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
        }
        for (g = 0; g < h; g++) {
            this[g].style && (this[g].style.display = "none")
        }
        return this
    }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]()
        }) : this.animate(cu("toggle", 3), a, b, c);
        return this
    }, fadeTo: function (a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d) {
                    return b.complete.call(this)
                }
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a) {
                j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""))
            }
            return !0
        }

        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a)) {
            return this.each(e.complete, [!1])
        }
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
    }, stop: function (a, c, d) {
        typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d)
            }

            var b, c = !1, e = f.timers, g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null) {
                for (b in g) {
                    g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                }
            } else {
                g[b = a + ".run"] && g[b].stop && h(this, g, b)
            }
            for (b = e.length; b--;) {
                e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
            }
            (!d || !c) && f.dequeue(this, a)
        })
    }}), f.each({slideDown: cu("show", 1), slideUp: cu("hide", 1), slideToggle: cu("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({speed: function (a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b};
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) {
            d.queue = "fx"
        }
        d.old = d.complete, d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
        };
        return d
    }, easing: {linear: function (a, b, c, d) {
        return c + d * a
    }, swing: function (a, b, c, d) {
        return(-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
    }}, timers: [], fx: function (a, b, c) {
        this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
    }}), f.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
    }, cur: function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop]
        }
        var a, b = f.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
    }, custom: function (a, c, d) {
        function h(a) {
            return e.step(a)
        }

        var e = this, g = f.fx;
        this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
            e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
        }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
    }, show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step: function (a) {
        var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties) {
                i.animatedProperties[b] !== !0 && (g = !1)
            }
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                    h.style["overflow" + b] = i.overflow[a]
                }), i.hide && f(h).hide();
                if (i.hide || i.show) {
                    for (b in i.animatedProperties) {
                        f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                    }
                }
                d = i.complete, d && (i.complete = !1, d.call(h))
            }
            return !1
        }
        i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
        return !0
    }}, f.extend(f.fx, {tick: function () {
        var a, b = f.timers, c = 0;
        for (; c < b.length; c++) {
            a = b[c], !a() && b[c] === a && b.splice(c--, 1)
        }
        b.length || f.fx.stop()
    }, interval: 13, stop: function () {
        clearInterval(cp), cp = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) {
        f.style(a.elem, "opacity", a.now)
    }, _default: function (a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
    }}}), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers,function (b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b)) {
            return c ? {top: c.top, left: c.left} : {top: 0, left: 0}
        }
        var h = e.body, i = cy(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k;
        return{top: n, left: o}
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") {
                break
            }
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") {
            l += i.offsetTop, m += i.offsetLeft
        }
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return{top: l, left: m}
    }, f.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
        return{top: b, left: c}
    }, setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
        j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
    }}, f.fn.extend({position: function () {
        if (!this[0]) {
            return null
        }
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
        return{top: c.top - d.top, left: c.left - d.left}
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || c.body;
            while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                a = a.offsetParent
            }
            return a
        })
    }}), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) {
                    return null
                }
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) {
                return a == null ? null : this
            }
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                })
            }
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c], h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) {
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c])
            }
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
jQuery(document).ready(function () {
    TrackingMAS()
});
function TrackingMAS() {
    var a = window.location.search.substring(1);
    if (a.indexOf("utm_source") > -1 && a.indexOf("utm_medium") > -1 && a.indexOf("utm_term") > -1 && a.indexOf("utm_content") > -1 && a.indexOf("utm_campaign") > -1) {
        if (jQuery("#trackingMAS img").length > 0) {
            jQuery("#trackingMAS img").attr("src", "http://mas.zing.vn/m.php?" + a)
        } else {
            jQuery("body").append('<div id="trackingMAS" style="width:0px;height:0px;overflow:hidden"><img src="http://mas.zing.vn/m.php?' + a + '" width="0" height="0" alt="mas" /></div>')
        }
    }
};
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (b, f) {
    var a = 0, e = /^ui-id-\d+$/;
    b.ui = b.ui || {};
    b.extend(b.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}});
    b.fn.extend({focus: (function (g) {
        return function (h, i) {
            return typeof h === "number" ? this.each(function () {
                var j = this;
                setTimeout(function () {
                    b(j).focus();
                    if (i) {
                        i.call(j)
                    }
                }, h)
            }) : g.apply(this, arguments)
        }
    })(b.fn.focus), scrollParent: function () {
        var g;
        if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
            g = this.parents().filter(function () {
                return(/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
            }).eq(0)
        } else {
            g = this.parents().filter(function () {
                return(/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
            }).eq(0)
        }
        return(/fixed/).test(this.css("position")) || !g.length ? b(document) : g
    }, zIndex: function (j) {
        if (j !== f) {
            return this.css("zIndex", j)
        }
        if (this.length) {
            var h = b(this[0]), g, i;
            while (h.length && h[0] !== document) {
                g = h.css("position");
                if (g === "absolute" || g === "relative" || g === "fixed") {
                    i = parseInt(h.css("zIndex"), 10);
                    if (!isNaN(i) && i !== 0) {
                        return i
                    }
                }
                h = h.parent()
            }
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            if (!this.id) {
                this.id = "ui-id-" + (++a)
            }
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            if (e.test(this.id)) {
                b(this).removeAttr("id")
            }
        })
    }});
    function d(i, g) {
        var k, j, h, l = i.nodeName.toLowerCase();
        if ("area" === l) {
            k = i.parentNode;
            j = k.name;
            if (!i.href || !j || k.nodeName.toLowerCase() !== "map") {
                return false
            }
            h = b("img[usemap=#" + j + "]")[0];
            return !!h && c(h)
        }
        return(/input|select|textarea|button|object/.test(l) ? !i.disabled : "a" === l ? i.href || g : g) && c(i)
    }

    function c(g) {
        return b.expr.filters.visible(g) && !b(g).parents().addBack().filter(function () {
            return b.css(this, "visibility") === "hidden"
        }).length
    }

    b.extend(b.expr[":"], {data: b.expr.createPseudo ? b.expr.createPseudo(function (g) {
        return function (h) {
            return !!b.data(h, g)
        }
    }) : function (j, h, g) {
        return !!b.data(j, g[3])
    }, focusable: function (g) {
        return d(g, !isNaN(b.attr(g, "tabindex")))
    }, tabbable: function (i) {
        var g = b.attr(i, "tabindex"), h = isNaN(g);
        return(h || g >= 0) && d(i, !h)
    }});
    if (!b("<a>").outerWidth(1).jquery) {
        b.each(["Width", "Height"], function (j, g) {
            var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], k = g.toLowerCase(), m = {innerWidth: b.fn.innerWidth, innerHeight: b.fn.innerHeight, outerWidth: b.fn.outerWidth, outerHeight: b.fn.outerHeight};

            function l(o, n, i, p) {
                b.each(h, function () {
                    n -= parseFloat(b.css(o, "padding" + this)) || 0;
                    if (i) {
                        n -= parseFloat(b.css(o, "border" + this + "Width")) || 0
                    }
                    if (p) {
                        n -= parseFloat(b.css(o, "margin" + this)) || 0
                    }
                });
                return n
            }

            b.fn["inner" + g] = function (i) {
                if (i === f) {
                    return m["inner" + g].call(this)
                }
                return this.each(function () {
                    b(this).css(k, l(this, i) + "px")
                })
            };
            b.fn["outer" + g] = function (i, n) {
                if (typeof i !== "number") {
                    return m["outer" + g].call(this, i)
                }
                return this.each(function () {
                    b(this).css(k, l(this, i, true, n) + "px")
                })
            }
        })
    }
    if (!b.fn.addBack) {
        b.fn.addBack = function (g) {
            return this.add(g == null ? this.prevObject : this.prevObject.filter(g))
        }
    }
    if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        b.fn.removeData = (function (g) {
            return function (h) {
                if (arguments.length) {
                    return g.call(this, b.camelCase(h))
                } else {
                    return g.call(this)
                }
            }
        })(b.fn.removeData)
    }
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.support.selectstart = "onselectstart" in document.createElement("div");
    b.fn.extend({disableSelection: function () {
        return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (g) {
            g.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }});
    b.extend(b.ui, {plugin: {add: function (h, j, l) {
        var g, k = b.ui[h].prototype;
        for (g in l) {
            k.plugins[g] = k.plugins[g] || [];
            k.plugins[g].push([j, l[g]])
        }
    }, call: function (g, j, h) {
        var k, l = g.plugins[j];
        if (!l || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
            return
        }
        for (k = 0; k < l.length; k++) {
            if (g.options[l[k][0]]) {
                l[k][1].apply(g.element, h)
            }
        }
    }}, hasScroll: function (j, h) {
        if (b(j).css("overflow") === "hidden") {
            return false
        }
        var g = (h && h === "left") ? "scrollLeft" : "scrollTop", i = false;
        if (j[g] > 0) {
            return true
        }
        j[g] = 1;
        i = (j[g] > 0);
        j[g] = 0;
        return i
    }})
})(jQuery);
(function (b, e) {
    var a = 0, d = Array.prototype.slice, c = b.cleanData;
    b.cleanData = function (f) {
        for (var g = 0, h; (h = f[g]) != null; g++) {
            try {
                b(h).triggerHandler("remove")
            } catch (j) {
            }
        }
        c(f)
    };
    b.widget = function (f, g, n) {
        var k, l, i, m, h = {}, j = f.split(".")[0];
        f = f.split(".")[1];
        k = j + "-" + f;
        if (!n) {
            n = g;
            g = b.Widget
        }
        b.expr[":"][k.toLowerCase()] = function (o) {
            return !!b.data(o, k)
        };
        b[j] = b[j] || {};
        l = b[j][f];
        i = b[j][f] = function (o, p) {
            if (!this._createWidget) {
                return new i(o, p)
            }
            if (arguments.length) {
                this._createWidget(o, p)
            }
        };
        b.extend(i, l, {version: n.version, _proto: b.extend({}, n), _childConstructors: []});
        m = new g();
        m.options = b.widget.extend({}, m.options);
        b.each(n, function (p, o) {
            if (!b.isFunction(o)) {
                h[p] = o;
                return
            }
            h[p] = (function () {
                var q = function () {
                    return g.prototype[p].apply(this, arguments)
                }, r = function (s) {
                    return g.prototype[p].apply(this, s)
                };
                return function () {
                    var u = this._super, s = this._superApply, t;
                    this._super = q;
                    this._superApply = r;
                    t = o.apply(this, arguments);
                    this._super = u;
                    this._superApply = s;
                    return t
                }
            })()
        });
        i.prototype = b.widget.extend(m, {widgetEventPrefix: l ? m.widgetEventPrefix : f}, h, {constructor: i, namespace: j, widgetName: f, widgetFullName: k});
        if (l) {
            b.each(l._childConstructors, function (p, q) {
                var o = q.prototype;
                b.widget(o.namespace + "." + o.widgetName, i, q._proto)
            });
            delete l._childConstructors
        } else {
            g._childConstructors.push(i)
        }
        b.widget.bridge(f, i)
    };
    b.widget.extend = function (k) {
        var g = d.call(arguments, 1), j = 0, f = g.length, h, i;
        for (; j < f; j++) {
            for (h in g[j]) {
                i = g[j][h];
                if (g[j].hasOwnProperty(h) && i !== e) {
                    if (b.isPlainObject(i)) {
                        k[h] = b.isPlainObject(k[h]) ? b.widget.extend({}, k[h], i) : b.widget.extend({}, i)
                    } else {
                        k[h] = i
                    }
                }
            }
        }
        return k
    };
    b.widget.bridge = function (g, f) {
        var h = f.prototype.widgetFullName || g;
        b.fn[g] = function (k) {
            var i = typeof k === "string", j = d.call(arguments, 1), l = this;
            k = !i && j.length ? b.widget.extend.apply(null, [k].concat(j)) : k;
            if (i) {
                this.each(function () {
                    var n, m = b.data(this, h);
                    if (!m) {
                        return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + k + "'")
                    }
                    if (!b.isFunction(m[k]) || k.charAt(0) === "_") {
                        return b.error("no such method '" + k + "' for " + g + " widget instance")
                    }
                    n = m[k].apply(m, j);
                    if (n !== m && n !== e) {
                        l = n && n.jquery ? l.pushStack(n.get()) : n;
                        return false
                    }
                })
            } else {
                this.each(function () {
                    var m = b.data(this, h);
                    if (m) {
                        m.option(k || {})._init()
                    } else {
                        b.data(this, h, new f(k, this))
                    }
                })
            }
            return l
        }
    };
    b.Widget = function () {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: false, create: null}, _createWidget: function (f, g) {
        g = b(g || this.defaultElement || this)[0];
        this.element = b(g);
        this.uuid = a++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.options = b.widget.extend({}, this.options, this._getCreateOptions(), f);
        this.bindings = b();
        this.hoverable = b();
        this.focusable = b();
        if (g !== this) {
            b.data(g, this.widgetFullName, this);
            this._on(true, this.element, {remove: function (h) {
                if (h.target === g) {
                    this.destroy()
                }
            }});
            this.document = b(g.style ? g.ownerDocument : g.document || g);
            this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
        }
        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init()
    }, _getCreateOptions: b.noop, _getCreateEventData: b.noop, _create: b.noop, _init: b.noop, destroy: function () {
        this._destroy();
        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
    }, _destroy: b.noop, widget: function () {
        return this.element
    }, option: function (j, k) {
        var f = j, l, h, g;
        if (arguments.length === 0) {
            return b.widget.extend({}, this.options)
        }
        if (typeof j === "string") {
            f = {};
            l = j.split(".");
            j = l.shift();
            if (l.length) {
                h = f[j] = b.widget.extend({}, this.options[j]);
                for (g = 0; g < l.length - 1; g++) {
                    h[l[g]] = h[l[g]] || {};
                    h = h[l[g]]
                }
                j = l.pop();
                if (k === e) {
                    return h[j] === e ? null : h[j]
                }
                h[j] = k
            } else {
                if (k === e) {
                    return this.options[j] === e ? null : this.options[j]
                }
                f[j] = k
            }
        }
        this._setOptions(f);
        return this
    }, _setOptions: function (f) {
        var g;
        for (g in f) {
            this._setOption(g, f[g])
        }
        return this
    }, _setOption: function (f, g) {
        this.options[f] = g;
        if (f === "disabled") {
            this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        }
        return this
    }, enable: function () {
        return this._setOption("disabled", false)
    }, disable: function () {
        return this._setOption("disabled", true)
    }, _on: function (i, h, g) {
        var j, f = this;
        if (typeof i !== "boolean") {
            g = h;
            h = i;
            i = false
        }
        if (!g) {
            g = h;
            h = this.element;
            j = this.widget()
        } else {
            h = j = b(h);
            this.bindings = this.bindings.add(h)
        }
        b.each(g, function (p, o) {
            function m() {
                if (!i && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
                    return
                }
                return(typeof o === "string" ? f[o] : o).apply(f, arguments)
            }

            if (typeof o !== "string") {
                m.guid = o.guid = o.guid || m.guid || b.guid++
            }
            var n = p.match(/^(\w+)\s*(.*)$/), l = n[1] + f.eventNamespace, k = n[2];
            if (k) {
                j.delegate(k, l, m)
            } else {
                h.bind(l, m)
            }
        })
    }, _off: function (g, f) {
        f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
        g.unbind(f).undelegate(f)
    }, _delay: function (i, h) {
        function g() {
            return(typeof i === "string" ? f[i] : i).apply(f, arguments)
        }

        var f = this;
        return setTimeout(g, h || 0)
    }, _hoverable: function (f) {
        this.hoverable = this.hoverable.add(f);
        this._on(f, {mouseenter: function (g) {
            b(g.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (g) {
            b(g.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (f) {
        this.focusable = this.focusable.add(f);
        this._on(f, {focusin: function (g) {
            b(g.currentTarget).addClass("ui-state-focus")
        }, focusout: function (g) {
            b(g.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (f, g, h) {
        var k, j, i = this.options[f];
        h = h || {};
        g = b.Event(g);
        g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
        g.target = this.element[0];
        j = g.originalEvent;
        if (j) {
            for (k in j) {
                if (!(k in g)) {
                    g[k] = j[k]
                }
            }
        }
        this.element.trigger(g, h);
        return !(b.isFunction(i) && i.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
    }};
    b.each({show: "fadeIn", hide: "fadeOut"}, function (g, f) {
        b.Widget.prototype["_" + g] = function (j, i, l) {
            if (typeof i === "string") {
                i = {effect: i}
            }
            var k, h = !i ? g : i === true || typeof i === "number" ? f : i.effect || f;
            i = i || {};
            if (typeof i === "number") {
                i = {duration: i}
            }
            k = !b.isEmptyObject(i);
            i.complete = l;
            if (i.delay) {
                j.delay(i.delay)
            }
            if (k && b.effects && b.effects.effect[h]) {
                j[g](i)
            } else {
                if (h !== g && j[h]) {
                    j[h](i.duration, i.easing, l)
                } else {
                    j.queue(function (m) {
                        b(this)[g]();
                        if (l) {
                            l.call(j[0])
                        }
                        m()
                    })
                }
            }
        }
    })
})(jQuery);
(function (b, c) {
    var a = false;
    b(document).mouseup(function () {
        a = false
    });
    b.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var d = this;
        this.element.bind("mousedown." + this.widgetName,function (e) {
            return d._mouseDown(e)
        }).bind("click." + this.widgetName, function (e) {
            if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                b.removeData(e.target, d.widgetName + ".preventClickEvent");
                e.stopImmediatePropagation();
                return false
            }
        });
        this.started = false
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName);
        if (this._mouseMoveDelegate) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        }
    }, _mouseDown: function (f) {
        if (a) {
            return
        }
        (this._mouseStarted && this._mouseUp(f));
        this._mouseDownEvent = f;
        var e = this, g = (f.which === 1), d = (typeof this.options.cancel === "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
        if (!g || d || !this._mouseCapture(f)) {
            return true
        }
        this.mouseDelayMet = !this.options.delay;
        if (!this.mouseDelayMet) {
            this._mouseDelayTimer = setTimeout(function () {
                e.mouseDelayMet = true
            }, this.options.delay)
        }
        if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
            this._mouseStarted = (this._mouseStart(f) !== false);
            if (!this._mouseStarted) {
                f.preventDefault();
                return true
            }
        }
        if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
            b.removeData(f.target, this.widgetName + ".preventClickEvent")
        }
        this._mouseMoveDelegate = function (h) {
            return e._mouseMove(h)
        };
        this._mouseUpDelegate = function (h) {
            return e._mouseUp(h)
        };
        b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
        f.preventDefault();
        a = true;
        return true
    }, _mouseMove: function (d) {
        if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
            return this._mouseUp(d)
        }
        if (this._mouseStarted) {
            this._mouseDrag(d);
            return d.preventDefault()
        }
        if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
            this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
            (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
        }
        return !this._mouseStarted
    }, _mouseUp: function (d) {
        b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        if (this._mouseStarted) {
            this._mouseStarted = false;
            if (d.target === this._mouseDownEvent.target) {
                b.data(d.target, this.widgetName + ".preventClickEvent", true)
            }
            this._mouseStop(d)
        }
        return false
    }, _mouseDistanceMet: function (d) {
        return(Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return true
    }})
})(jQuery);
(function (a, b) {
    a.widget("ui.draggable", a.ui.mouse, {version: "1.10.3", widgetEventPrefix: "drag", options: {addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null}, _create: function () {
        if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
            this.element[0].style.position = "relative"
        }
        if (this.options.addClasses) {
            this.element.addClass("ui-draggable")
        }
        if (this.options.disabled) {
            this.element.addClass("ui-draggable-disabled")
        }
        this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
        this._mouseDestroy()
    }, _mouseCapture: function (c) {
        var d = this.options;
        if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
            return false
        }
        this.handle = this._getHandle(c);
        if (!this.handle) {
            return false
        }
        a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function () {
            a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1000}).css(a(this).offset()).appendTo("body")
        });
        return true
    }, _mouseStart: function (c) {
        var d = this.options;
        this.helper = this._createHelper(c);
        this.helper.addClass("ui-draggable-dragging");
        this._cacheHelperProportions();
        if (a.ui.ddmanager) {
            a.ui.ddmanager.current = this
        }
        this._cacheMargins();
        this.cssPosition = this.helper.css("position");
        this.scrollParent = this.helper.scrollParent();
        this.offsetParent = this.helper.offsetParent();
        this.offsetParentCssPosition = this.offsetParent.css("position");
        this.offset = this.positionAbs = this.element.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        this.offset.scroll = false;
        a.extend(this.offset, {click: {left: c.pageX - this.offset.left, top: c.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.originalPosition = this.position = this._generatePosition(c);
        this.originalPageX = c.pageX;
        this.originalPageY = c.pageY;
        (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
        this._setContainment();
        if (this._trigger("start", c) === false) {
            this._clear();
            return false
        }
        this._cacheHelperProportions();
        if (a.ui.ddmanager && !d.dropBehaviour) {
            a.ui.ddmanager.prepareOffsets(this, c)
        }
        this._mouseDrag(c, true);
        if (a.ui.ddmanager) {
            a.ui.ddmanager.dragStart(this, c)
        }
        return true
    }, _mouseDrag: function (c, e) {
        if (this.offsetParentCssPosition === "fixed") {
            this.offset.parent = this._getParentOffset()
        }
        this.position = this._generatePosition(c);
        this.positionAbs = this._convertPositionTo("absolute");
        if (!e) {
            var d = this._uiHash();
            if (this._trigger("drag", c, d) === false) {
                this._mouseUp({});
                return false
            }
            this.position = d.position
        }
        if (!this.options.axis || this.options.axis !== "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis !== "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        if (a.ui.ddmanager) {
            a.ui.ddmanager.drag(this, c)
        }
        return false
    }, _mouseStop: function (d) {
        var c = this, e = false;
        if (a.ui.ddmanager && !this.options.dropBehaviour) {
            e = a.ui.ddmanager.drop(this, d)
        }
        if (this.dropped) {
            e = this.dropped;
            this.dropped = false
        }
        if (this.options.helper === "original" && !a.contains(this.element[0].ownerDocument, this.element[0])) {
            return false
        }
        if ((this.options.revert === "invalid" && !e) || (this.options.revert === "valid" && e) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, e))) {
            a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                if (c._trigger("stop", d) !== false) {
                    c._clear()
                }
            })
        } else {
            if (this._trigger("stop", d) !== false) {
                this._clear()
            }
        }
        return false
    }, _mouseUp: function (c) {
        a("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        });
        if (a.ui.ddmanager) {
            a.ui.ddmanager.dragStop(this, c)
        }
        return a.ui.mouse.prototype._mouseUp.call(this, c)
    }, cancel: function () {
        if (this.helper.is(".ui-draggable-dragging")) {
            this._mouseUp({})
        } else {
            this._clear()
        }
        return this
    }, _getHandle: function (c) {
        return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
    }, _createHelper: function (d) {
        var e = this.options, c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
        if (!c.parents("body").length) {
            c.appendTo((e.appendTo === "parent" ? this.element[0].parentNode : e.appendTo))
        }
        if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
            c.css("position", "absolute")
        }
        return c
    }, _adjustOffsetFromHelper: function (c) {
        if (typeof c === "string") {
            c = c.split(" ")
        }
        if (a.isArray(c)) {
            c = {left: +c[0], top: +c[1] || 0}
        }
        if ("left" in c) {
            this.offset.click.left = c.left + this.margins.left
        }
        if ("right" in c) {
            this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
        }
        if ("top" in c) {
            this.offset.click.top = c.top + this.margins.top
        }
        if ("bottom" in c) {
            this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
        }
    }, _getParentOffset: function () {
        var c = this.offsetParent.offset();
        if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
            c.left += this.scrollParent.scrollLeft();
            c.top += this.scrollParent.scrollTop()
        }
        if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
            c = {top: 0, left: 0}
        }
        return{top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if (this.cssPosition === "relative") {
            var c = this.element.position();
            return{top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        } else {
            return{top: 0, left: 0}
        }
    }, _cacheMargins: function () {
        this.margins = {left: (parseInt(this.element.css("marginLeft"), 10) || 0), top: (parseInt(this.element.css("marginTop"), 10) || 0), right: (parseInt(this.element.css("marginRight"), 10) || 0), bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, g, d, f = this.options;
        if (!f.containment) {
            this.containment = null;
            return
        }
        if (f.containment === "window") {
            this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            return
        }
        if (f.containment === "document") {
            this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            return
        }
        if (f.containment.constructor === Array) {
            this.containment = f.containment;
            return
        }
        if (f.containment === "parent") {
            f.containment = this.helper[0].parentNode
        }
        g = a(f.containment);
        d = g[0];
        if (!d) {
            return
        }
        e = g.css("overflow") !== "hidden";
        this.containment = [(parseInt(g.css("borderLeftWidth"), 10) || 0) + (parseInt(g.css("paddingLeft"), 10) || 0), (parseInt(g.css("borderTopWidth"), 10) || 0) + (parseInt(g.css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(g.css("borderRightWidth"), 10) || 0) - (parseInt(g.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(g.css("borderBottomWidth"), 10) || 0) - (parseInt(g.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
        this.relative_container = g
    }, _convertPositionTo: function (f, g) {
        if (!g) {
            g = this.position
        }
        var e = f === "absolute" ? 1 : -1, c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
        if (!this.offset.scroll) {
            this.offset.scroll = {top: c.scrollTop(), left: c.scrollLeft()}
        }
        return{top: (g.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * e)), left: (g.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * e))}
    }, _generatePosition: function (d) {
        var c, i, j, f, e = this.options, k = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = d.pageX, g = d.pageY;
        if (!this.offset.scroll) {
            this.offset.scroll = {top: k.scrollTop(), left: k.scrollLeft()}
        }
        if (this.originalPosition) {
            if (this.containment) {
                if (this.relative_container) {
                    i = this.relative_container.offset();
                    c = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                } else {
                    c = this.containment
                }
                if (d.pageX - this.offset.click.left < c[0]) {
                    h = c[0] + this.offset.click.left
                }
                if (d.pageY - this.offset.click.top < c[1]) {
                    g = c[1] + this.offset.click.top
                }
                if (d.pageX - this.offset.click.left > c[2]) {
                    h = c[2] + this.offset.click.left
                }
                if (d.pageY - this.offset.click.top > c[3]) {
                    g = c[3] + this.offset.click.top
                }
            }
            if (e.grid) {
                j = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                g = c ? ((j - this.offset.click.top >= c[1] || j - this.offset.click.top > c[3]) ? j : ((j - this.offset.click.top >= c[1]) ? j - e.grid[1] : j + e.grid[1])) : j;
                f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                h = c ? ((f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]) ? f : ((f - this.offset.click.left >= c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
            }
        }
        return{top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)), left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging");
        if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
            this.helper.remove()
        }
        this.helper = null;
        this.cancelHelperRemoval = false
    }, _trigger: function (c, d, e) {
        e = e || this._uiHash();
        a.ui.plugin.call(this, c, [d, e]);
        if (c === "drag") {
            this.positionAbs = this._convertPositionTo("absolute")
        }
        return a.Widget.prototype._trigger.call(this, c, d, e)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }});
    a.ui.plugin.add("draggable", "connectToSortable", {start: function (d, f) {
        var e = a(this).data("ui-draggable"), g = e.options, c = a.extend({}, f, {item: e.element});
        e.sortables = [];
        a(g.connectToSortable).each(function () {
            var h = a.data(this, "ui-sortable");
            if (h && !h.options.disabled) {
                e.sortables.push({instance: h, shouldRevert: h.options.revert});
                h.refreshPositions();
                h._trigger("activate", d, c)
            }
        })
    }, stop: function (d, f) {
        var e = a(this).data("ui-draggable"), c = a.extend({}, f, {item: e.element});
        a.each(e.sortables, function () {
            if (this.instance.isOver) {
                this.instance.isOver = 0;
                e.cancelHelperRemoval = true;
                this.instance.cancelHelperRemoval = false;
                if (this.shouldRevert) {
                    this.instance.options.revert = this.shouldRevert
                }
                this.instance._mouseStop(d);
                this.instance.options.helper = this.instance.options._helper;
                if (e.options.helper === "original") {
                    this.instance.currentItem.css({top: "auto", left: "auto"})
                }
            } else {
                this.instance.cancelHelperRemoval = false;
                this.instance._trigger("deactivate", d, c)
            }
        })
    }, drag: function (d, f) {
        var e = a(this).data("ui-draggable"), c = this;
        a.each(e.sortables, function () {
            var g = false, h = this;
            this.instance.positionAbs = e.positionAbs;
            this.instance.helperProportions = e.helperProportions;
            this.instance.offset.click = e.offset.click;
            if (this.instance._intersectsWith(this.instance.containerCache)) {
                g = true;
                a.each(e.sortables, function () {
                    this.instance.positionAbs = e.positionAbs;
                    this.instance.helperProportions = e.helperProportions;
                    this.instance.offset.click = e.offset.click;
                    if (this !== h && this.instance._intersectsWith(this.instance.containerCache) && a.contains(h.instance.element[0], this.instance.element[0])) {
                        g = false
                    }
                    return g
                })
            }
            if (g) {
                if (!this.instance.isOver) {
                    this.instance.isOver = 1;
                    this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                    this.instance.options._helper = this.instance.options.helper;
                    this.instance.options.helper = function () {
                        return f.helper[0]
                    };
                    d.target = this.instance.currentItem[0];
                    this.instance._mouseCapture(d, true);
                    this.instance._mouseStart(d, true, true);
                    this.instance.offset.click.top = e.offset.click.top;
                    this.instance.offset.click.left = e.offset.click.left;
                    this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
                    this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                    e._trigger("toSortable", d);
                    e.dropped = this.instance.element;
                    e.currentItem = e.element;
                    this.instance.fromOutside = e
                }
                if (this.instance.currentItem) {
                    this.instance._mouseDrag(d)
                }
            } else {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    this.instance.cancelHelperRemoval = true;
                    this.instance.options.revert = false;
                    this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                    this.instance._mouseStop(d, true);
                    this.instance.options.helper = this.instance.options._helper;
                    this.instance.currentItem.remove();
                    if (this.instance.placeholder) {
                        this.instance.placeholder.remove()
                    }
                    e._trigger("fromSortable", d);
                    e.dropped = false
                }
            }
        })
    }});
    a.ui.plugin.add("draggable", "cursor", {start: function () {
        var c = a("body"), d = a(this).data("ui-draggable").options;
        if (c.css("cursor")) {
            d._cursor = c.css("cursor")
        }
        c.css("cursor", d.cursor)
    }, stop: function () {
        var c = a(this).data("ui-draggable").options;
        if (c._cursor) {
            a("body").css("cursor", c._cursor)
        }
    }});
    a.ui.plugin.add("draggable", "opacity", {start: function (d, e) {
        var c = a(e.helper), f = a(this).data("ui-draggable").options;
        if (c.css("opacity")) {
            f._opacity = c.css("opacity")
        }
        c.css("opacity", f.opacity)
    }, stop: function (c, d) {
        var e = a(this).data("ui-draggable").options;
        if (e._opacity) {
            a(d.helper).css("opacity", e._opacity)
        }
    }});
    a.ui.plugin.add("draggable", "scroll", {start: function () {
        var c = a(this).data("ui-draggable");
        if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
            c.overflowOffset = c.scrollParent.offset()
        }
    }, drag: function (e) {
        var d = a(this).data("ui-draggable"), f = d.options, c = false;
        if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
            if (!f.axis || f.axis !== "x") {
                if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < f.scrollSensitivity) {
                    d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + f.scrollSpeed
                } else {
                    if (e.pageY - d.overflowOffset.top < f.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - f.scrollSpeed
                    }
                }
            }
            if (!f.axis || f.axis !== "y") {
                if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < f.scrollSensitivity) {
                    d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + f.scrollSpeed
                } else {
                    if (e.pageX - d.overflowOffset.left < f.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - f.scrollSpeed
                    }
                }
            }
        } else {
            if (!f.axis || f.axis !== "x") {
                if (e.pageY - a(document).scrollTop() < f.scrollSensitivity) {
                    c = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
                } else {
                    if (a(window).height() - (e.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
                    }
                }
            }
            if (!f.axis || f.axis !== "y") {
                if (e.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
                    c = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
                } else {
                    if (a(window).width() - (e.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
                    }
                }
            }
        }
        if (c !== false && a.ui.ddmanager && !f.dropBehaviour) {
            a.ui.ddmanager.prepareOffsets(d, e)
        }
    }});
    a.ui.plugin.add("draggable", "snap", {start: function () {
        var c = a(this).data("ui-draggable"), d = c.options;
        c.snapElements = [];
        a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function () {
            var f = a(this), e = f.offset();
            if (this !== c.element[0]) {
                c.snapElements.push({item: this, width: f.outerWidth(), height: f.outerHeight(), top: e.top, left: e.left})
            }
        })
    }, drag: function (u, p) {
        var c, z, j, k, s, n, m, A, v, h, g = a(this).data("ui-draggable"), q = g.options, y = q.snapTolerance, x = p.offset.left, w = x + g.helperProportions.width, f = p.offset.top, e = f + g.helperProportions.height;
        for (v = g.snapElements.length - 1; v >= 0; v--) {
            s = g.snapElements[v].left;
            n = s + g.snapElements[v].width;
            m = g.snapElements[v].top;
            A = m + g.snapElements[v].height;
            if (w < s - y || x > n + y || e < m - y || f > A + y || !a.contains(g.snapElements[v].item.ownerDocument, g.snapElements[v].item)) {
                if (g.snapElements[v].snapping) {
                    (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                }
                g.snapElements[v].snapping = false;
                continue
            }
            if (q.snapMode !== "inner") {
                c = Math.abs(m - e) <= y;
                z = Math.abs(A - f) <= y;
                j = Math.abs(s - w) <= y;
                k = Math.abs(n - x) <= y;
                if (c) {
                    p.position.top = g._convertPositionTo("relative", {top: m - g.helperProportions.height, left: 0}).top - g.margins.top
                }
                if (z) {
                    p.position.top = g._convertPositionTo("relative", {top: A, left: 0}).top - g.margins.top
                }
                if (j) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: s - g.helperProportions.width}).left - g.margins.left
                }
                if (k) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: n}).left - g.margins.left
                }
            }
            h = (c || z || j || k);
            if (q.snapMode !== "outer") {
                c = Math.abs(m - f) <= y;
                z = Math.abs(A - e) <= y;
                j = Math.abs(s - x) <= y;
                k = Math.abs(n - w) <= y;
                if (c) {
                    p.position.top = g._convertPositionTo("relative", {top: m, left: 0}).top - g.margins.top
                }
                if (z) {
                    p.position.top = g._convertPositionTo("relative", {top: A - g.helperProportions.height, left: 0}).top - g.margins.top
                }
                if (j) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: s}).left - g.margins.left
                }
                if (k) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: n - g.helperProportions.width}).left - g.margins.left
                }
            }
            if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
            }
            g.snapElements[v].snapping = (c || z || j || k || h)
        }
    }});
    a.ui.plugin.add("draggable", "stack", {start: function () {
        var c, e = this.data("ui-draggable").options, d = a.makeArray(a(e.stack)).sort(function (g, f) {
            return(parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
        });
        if (!d.length) {
            return
        }
        c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
        a(d).each(function (f) {
            a(this).css("zIndex", c + f)
        });
        this.css("zIndex", (c + d.length))
    }});
    a.ui.plugin.add("draggable", "zIndex", {start: function (d, e) {
        var c = a(e.helper), f = a(this).data("ui-draggable").options;
        if (c.css("zIndex")) {
            f._zIndex = c.css("zIndex")
        }
        c.css("zIndex", f.zIndex)
    }, stop: function (c, d) {
        var e = a(this).data("ui-draggable").options;
        if (e._zIndex) {
            a(d.helper).css("zIndex", e._zIndex)
        }
    }})
})(jQuery);
(function (b, c) {
    function a(e, d, f) {
        return(e > d) && (e < (d + f))
    }

    b.widget("ui.droppable", {version: "1.10.3", widgetEventPrefix: "drop", options: {accept: "*", activeClass: false, addClasses: true, greedy: false, hoverClass: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
        var e = this.options, d = e.accept;
        this.isover = false;
        this.isout = true;
        this.accept = b.isFunction(d) ? d : function (f) {
            return f.is(d)
        };
        this.proportions = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight};
        b.ui.ddmanager.droppables[e.scope] = b.ui.ddmanager.droppables[e.scope] || [];
        b.ui.ddmanager.droppables[e.scope].push(this);
        (e.addClasses && this.element.addClass("ui-droppable"))
    }, _destroy: function () {
        var e = 0, d = b.ui.ddmanager.droppables[this.options.scope];
        for (; e < d.length; e++) {
            if (d[e] === this) {
                d.splice(e, 1)
            }
        }
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    }, _setOption: function (d, e) {
        if (d === "accept") {
            this.accept = b.isFunction(e) ? e : function (f) {
                return f.is(e)
            }
        }
        b.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (e) {
        var d = b.ui.ddmanager.current;
        if (this.options.activeClass) {
            this.element.addClass(this.options.activeClass)
        }
        if (d) {
            this._trigger("activate", e, this.ui(d))
        }
    }, _deactivate: function (e) {
        var d = b.ui.ddmanager.current;
        if (this.options.activeClass) {
            this.element.removeClass(this.options.activeClass)
        }
        if (d) {
            this._trigger("deactivate", e, this.ui(d))
        }
    }, _over: function (e) {
        var d = b.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
            return
        }
        if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
            if (this.options.hoverClass) {
                this.element.addClass(this.options.hoverClass)
            }
            this._trigger("over", e, this.ui(d))
        }
    }, _out: function (e) {
        var d = b.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
            return
        }
        if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
            if (this.options.hoverClass) {
                this.element.removeClass(this.options.hoverClass)
            }
            this._trigger("out", e, this.ui(d))
        }
    }, _drop: function (e, f) {
        var d = f || b.ui.ddmanager.current, g = false;
        if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
            return false
        }
        this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
            var h = b.data(this, "ui-droppable");
            if (h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(h, {offset: h.element.offset()}), h.options.tolerance)) {
                g = true;
                return false
            }
        });
        if (g) {
            return false
        }
        if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }
            if (this.options.hoverClass) {
                this.element.removeClass(this.options.hoverClass)
            }
            this._trigger("drop", e, this.ui(d));
            return this.element
        }
        return false
    }, ui: function (d) {
        return{draggable: (d.currentItem || d.element), helper: d.helper, position: d.position, offset: d.positionAbs}
    }});
    b.ui.intersect = function (q, j, o) {
        if (!j.offset) {
            return false
        }
        var h, i, f = (q.positionAbs || q.position.absolute).left, e = f + q.helperProportions.width, n = (q.positionAbs || q.position.absolute).top, m = n + q.helperProportions.height, g = j.offset.left, d = g + j.proportions.width, p = j.offset.top, k = p + j.proportions.height;
        switch (o) {
            case"fit":
                return(g <= f && e <= d && p <= n && m <= k);
            case"intersect":
                return(g < f + (q.helperProportions.width / 2) && e - (q.helperProportions.width / 2) < d && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
            case"pointer":
                h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left);
                i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top);
                return a(i, p, j.proportions.height) && a(h, g, j.proportions.width);
            case"touch":
                return((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((f >= g && f <= d) || (e >= g && e <= d) || (f < g && e > d));
            default:
                return false
        }
    };
    b.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (g, k) {
        var f, e, d = b.ui.ddmanager.droppables[g.options.scope] || [], h = k ? k.type : null, l = (g.currentItem || g.element).find(":data(ui-droppable)").addBack();
        droppablesLoop:for (f = 0; f < d.length; f++) {
            if (d[f].options.disabled || (g && !d[f].accept.call(d[f].element[0], (g.currentItem || g.element)))) {
                continue
            }
            for (e = 0; e < l.length; e++) {
                if (l[e] === d[f].element[0]) {
                    d[f].proportions.height = 0;
                    continue droppablesLoop
                }
            }
            d[f].visible = d[f].element.css("display") !== "none";
            if (!d[f].visible) {
                continue
            }
            if (h === "mousedown") {
                d[f]._activate.call(d[f], k)
            }
            d[f].offset = d[f].element.offset();
            d[f].proportions = {width: d[f].element[0].offsetWidth, height: d[f].element[0].offsetHeight}
        }
    }, drop: function (d, e) {
        var f = false;
        b.each((b.ui.ddmanager.droppables[d.options.scope] || []).slice(), function () {
            if (!this.options) {
                return
            }
            if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
                f = this._drop.call(this, e) || f
            }
            if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
                this.isout = true;
                this.isover = false;
                this._deactivate.call(this, e)
            }
        });
        return f
    }, dragStart: function (d, e) {
        d.element.parentsUntil("body").bind("scroll.droppable", function () {
            if (!d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
        })
    }, drag: function (d, e) {
        if (d.options.refreshPositions) {
            b.ui.ddmanager.prepareOffsets(d, e)
        }
        b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function () {
            if (this.options.disabled || this.greedyChild || !this.visible) {
                return
            }
            var i, g, f, h = b.ui.intersect(d, this, this.options.tolerance), j = !h && this.isover ? "isout" : (h && !this.isover ? "isover" : null);
            if (!j) {
                return
            }
            if (this.options.greedy) {
                g = this.options.scope;
                f = this.element.parents(":data(ui-droppable)").filter(function () {
                    return b.data(this, "ui-droppable").options.scope === g
                });
                if (f.length) {
                    i = b.data(f[0], "ui-droppable");
                    i.greedyChild = (j === "isover")
                }
            }
            if (i && j === "isover") {
                i.isover = false;
                i.isout = true;
                i._out.call(i, e)
            }
            this[j] = true;
            this[j === "isout" ? "isover" : "isout"] = false;
            this[j === "isover" ? "_over" : "_out"].call(this, e);
            if (i && j === "isout") {
                i.isout = false;
                i.isover = true;
                i._over.call(i, e)
            }
        })
    }, dragStop: function (d, e) {
        d.element.parentsUntil("body").unbind("scroll.droppable");
        if (!d.options.refreshPositions) {
            b.ui.ddmanager.prepareOffsets(d, e)
        }
    }}
})(jQuery);
(function (c, d) {
    function b(e) {
        return parseInt(e, 10) || 0
    }

    function a(e) {
        return !isNaN(parseInt(e, 10))
    }

    c.widget("ui.resizable", c.ui.mouse, {version: "1.10.3", widgetEventPrefix: "resize", options: {alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function () {
        var l, f, j, g, e, h = this, k = this.options;
        this.element.addClass("ui-resizable");
        c.extend(this, {_aspectRatio: !!(k.aspectRatio), aspectRatio: k.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null});
        if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
            this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")}));
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
            this.elementIsWrapper = true;
            this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")});
            this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});
            this.originalResizeStyle = this.originalElement.css("resize");
            this.originalElement.css("resize", "none");
            this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"}));
            this.originalElement.css({margin: this.originalElement.css("margin")});
            this._proportionallyResize()
        }
        this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"});
        if (this.handles.constructor === String) {
            if (this.handles === "all") {
                this.handles = "n,e,s,w,se,sw,ne,nw"
            }
            l = this.handles.split(",");
            this.handles = {};
            for (f = 0; f < l.length; f++) {
                j = c.trim(l[f]);
                e = "ui-resizable-" + j;
                g = c("<div class='ui-resizable-handle " + e + "'></div>");
                g.css({zIndex: k.zIndex});
                if ("se" === j) {
                    g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                }
                this.handles[j] = ".ui-resizable-" + j;
                this.element.append(g)
            }
        }
        this._renderAxis = function (q) {
            var n, o, m, p;
            q = q || this.element;
            for (n in this.handles) {
                if (this.handles[n].constructor === String) {
                    this.handles[n] = c(this.handles[n], this.element).show()
                }
                if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                    o = c(this.handles[n], this.element);
                    p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
                    m = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                    q.css(m, p);
                    this._proportionallyResize()
                }
                if (!c(this.handles[n]).length) {
                    continue
                }
            }
        };
        this._renderAxis(this.element);
        this._handles = c(".ui-resizable-handle", this.element).disableSelection();
        this._handles.mouseover(function () {
            if (!h.resizing) {
                if (this.className) {
                    g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                }
                h.axis = g && g[1] ? g[1] : "se"
            }
        });
        if (k.autoHide) {
            this._handles.hide();
            c(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                if (k.disabled) {
                    return
                }
                c(this).removeClass("ui-resizable-autohide");
                h._handles.show()
            }).mouseleave(function () {
                if (k.disabled) {
                    return
                }
                if (!h.resizing) {
                    c(this).addClass("ui-resizable-autohide");
                    h._handles.hide()
                }
            })
        }
        this._mouseInit()
    }, _destroy: function () {
        this._mouseDestroy();
        var f, e = function (g) {
            c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        if (this.elementIsWrapper) {
            e(this.element);
            f = this.element;
            this.originalElement.css({position: f.css("position"), width: f.outerWidth(), height: f.outerHeight(), top: f.css("top"), left: f.css("left")}).insertAfter(f);
            f.remove()
        }
        this.originalElement.css("resize", this.originalResizeStyle);
        e(this.originalElement);
        return this
    }, _mouseCapture: function (g) {
        var f, h, e = false;
        for (f in this.handles) {
            h = c(this.handles[f])[0];
            if (h === g.target || c.contains(h, g.target)) {
                e = true
            }
        }
        return !this.options.disabled && e
    }, _mouseStart: function (g) {
        var k, h, j, i = this.options, f = this.element.position(), e = this.element;
        this.resizing = true;
        if ((/absolute/).test(e.css("position"))) {
            e.css({position: "absolute", top: e.css("top"), left: e.css("left")})
        } else {
            if (e.is(".ui-draggable")) {
                e.css({position: "absolute", top: f.top, left: f.left})
            }
        }
        this._renderProxy();
        k = b(this.helper.css("left"));
        h = b(this.helper.css("top"));
        if (i.containment) {
            k += c(i.containment).scrollLeft() || 0;
            h += c(i.containment).scrollTop() || 0
        }
        this.offset = this.helper.offset();
        this.position = {left: k, top: h};
        this.size = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()};
        this.originalSize = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()};
        this.originalPosition = {left: k, top: h};
        this.sizeDiff = {width: e.outerWidth() - e.width(), height: e.outerHeight() - e.height()};
        this.originalMousePosition = {left: g.pageX, top: g.pageY};
        this.aspectRatio = (typeof i.aspectRatio === "number") ? i.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
        j = c(".ui-resizable-" + this.axis).css("cursor");
        c("body").css("cursor", j === "auto" ? this.axis + "-resize" : j);
        e.addClass("ui-resizable-resizing");
        this._propagate("start", g);
        return true
    }, _mouseDrag: function (e) {
        var k, g = this.helper, l = {}, i = this.originalMousePosition, m = this.axis, o = this.position.top, f = this.position.left, n = this.size.width, j = this.size.height, q = (e.pageX - i.left) || 0, p = (e.pageY - i.top) || 0, h = this._change[m];
        if (!h) {
            return false
        }
        k = h.apply(this, [e, q, p]);
        this._updateVirtualBoundaries(e.shiftKey);
        if (this._aspectRatio || e.shiftKey) {
            k = this._updateRatio(k, e)
        }
        k = this._respectSize(k, e);
        this._updateCache(k);
        this._propagate("resize", e);
        if (this.position.top !== o) {
            l.top = this.position.top + "px"
        }
        if (this.position.left !== f) {
            l.left = this.position.left + "px"
        }
        if (this.size.width !== n) {
            l.width = this.size.width + "px"
        }
        if (this.size.height !== j) {
            l.height = this.size.height + "px"
        }
        g.css(l);
        if (!this._helper && this._proportionallyResizeElements.length) {
            this._proportionallyResize()
        }
        if (!c.isEmptyObject(l)) {
            this._trigger("resize", e, this.ui())
        }
        return false
    }, _mouseStop: function (h) {
        this.resizing = false;
        var g, e, f, k, n, j, m, i = this.options, l = this;
        if (this._helper) {
            g = this._proportionallyResizeElements;
            e = g.length && (/textarea/i).test(g[0].nodeName);
            f = e && c.ui.hasScroll(g[0], "left") ? 0 : l.sizeDiff.height;
            k = e ? 0 : l.sizeDiff.width;
            n = {width: (l.helper.width() - k), height: (l.helper.height() - f)};
            j = (parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left)) || null;
            m = (parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top)) || null;
            if (!i.animate) {
                this.element.css(c.extend(n, {top: m, left: j}))
            }
            l.helper.height(l.size.height);
            l.helper.width(l.size.width);
            if (this._helper && !i.animate) {
                this._proportionallyResize()
            }
        }
        c("body").css("cursor", "auto");
        this.element.removeClass("ui-resizable-resizing");
        this._propagate("stop", h);
        if (this._helper) {
            this.helper.remove()
        }
        return false
    }, _updateVirtualBoundaries: function (g) {
        var i, h, f, k, e, j = this.options;
        e = {minWidth: a(j.minWidth) ? j.minWidth : 0, maxWidth: a(j.maxWidth) ? j.maxWidth : Infinity, minHeight: a(j.minHeight) ? j.minHeight : 0, maxHeight: a(j.maxHeight) ? j.maxHeight : Infinity};
        if (this._aspectRatio || g) {
            i = e.minHeight * this.aspectRatio;
            f = e.minWidth / this.aspectRatio;
            h = e.maxHeight * this.aspectRatio;
            k = e.maxWidth / this.aspectRatio;
            if (i > e.minWidth) {
                e.minWidth = i
            }
            if (f > e.minHeight) {
                e.minHeight = f
            }
            if (h < e.maxWidth) {
                e.maxWidth = h
            }
            if (k < e.maxHeight) {
                e.maxHeight = k
            }
        }
        this._vBoundaries = e
    }, _updateCache: function (e) {
        this.offset = this.helper.offset();
        if (a(e.left)) {
            this.position.left = e.left
        }
        if (a(e.top)) {
            this.position.top = e.top
        }
        if (a(e.height)) {
            this.size.height = e.height
        }
        if (a(e.width)) {
            this.size.width = e.width
        }
    }, _updateRatio: function (g) {
        var h = this.position, f = this.size, e = this.axis;
        if (a(g.height)) {
            g.width = (g.height * this.aspectRatio)
        } else {
            if (a(g.width)) {
                g.height = (g.width / this.aspectRatio)
            }
        }
        if (e === "sw") {
            g.left = h.left + (f.width - g.width);
            g.top = null
        }
        if (e === "nw") {
            g.top = h.top + (f.height - g.height);
            g.left = h.left + (f.width - g.width)
        }
        return g
    }, _respectSize: function (j) {
        var g = this._vBoundaries, m = this.axis, p = a(j.width) && g.maxWidth && (g.maxWidth < j.width), k = a(j.height) && g.maxHeight && (g.maxHeight < j.height), h = a(j.width) && g.minWidth && (g.minWidth > j.width), n = a(j.height) && g.minHeight && (g.minHeight > j.height), f = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, i = /sw|nw|w/.test(m), e = /nw|ne|n/.test(m);
        if (h) {
            j.width = g.minWidth
        }
        if (n) {
            j.height = g.minHeight
        }
        if (p) {
            j.width = g.maxWidth
        }
        if (k) {
            j.height = g.maxHeight
        }
        if (h && i) {
            j.left = f - g.minWidth
        }
        if (p && i) {
            j.left = f - g.maxWidth
        }
        if (n && e) {
            j.top = l - g.minHeight
        }
        if (k && e) {
            j.top = l - g.maxHeight
        }
        if (!j.width && !j.height && !j.left && j.top) {
            j.top = null
        } else {
            if (!j.width && !j.height && !j.top && j.left) {
                j.left = null
            }
        }
        return j
    }, _proportionallyResize: function () {
        if (!this._proportionallyResizeElements.length) {
            return
        }
        var h, f, l, e, k, g = this.helper || this.element;
        for (h = 0; h < this._proportionallyResizeElements.length; h++) {
            k = this._proportionallyResizeElements[h];
            if (!this.borderDif) {
                this.borderDif = [];
                l = [k.css("borderTopWidth"), k.css("borderRightWidth"), k.css("borderBottomWidth"), k.css("borderLeftWidth")];
                e = [k.css("paddingTop"), k.css("paddingRight"), k.css("paddingBottom"), k.css("paddingLeft")];
                for (f = 0; f < l.length; f++) {
                    this.borderDif[f] = (parseInt(l[f], 10) || 0) + (parseInt(e[f], 10) || 0)
                }
            }
            k.css({height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0, width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0})
        }
    }, _renderProxy: function () {
        var e = this.element, f = this.options;
        this.elementOffset = e.offset();
        if (this._helper) {
            this.helper = this.helper || c("<div style='overflow:hidden;'></div>");
            this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++f.zIndex});
            this.helper.appendTo("body").disableSelection()
        } else {
            this.helper = this.element
        }
    }, _change: {e: function (f, e) {
        return{width: this.originalSize.width + e}
    }, w: function (g, e) {
        var f = this.originalSize, h = this.originalPosition;
        return{left: h.left + e, width: f.width - e}
    }, n: function (h, f, e) {
        var g = this.originalSize, i = this.originalPosition;
        return{top: i.top + e, height: g.height - e}
    }, s: function (g, f, e) {
        return{height: this.originalSize.height + e}
    }, se: function (g, f, e) {
        return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
    }, sw: function (g, f, e) {
        return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
    }, ne: function (g, f, e) {
        return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
    }, nw: function (g, f, e) {
        return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
    }}, _propagate: function (f, e) {
        c.ui.plugin.call(this, f, [e, this.ui()]);
        (f !== "resize" && this._trigger(f, e, this.ui()))
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }});
    c.ui.plugin.add("resizable", "animate", {stop: function (h) {
        var m = c(this).data("ui-resizable"), j = m.options, g = m._proportionallyResizeElements, e = g.length && (/textarea/i).test(g[0].nodeName), f = e && c.ui.hasScroll(g[0], "left") ? 0 : m.sizeDiff.height, l = e ? 0 : m.sizeDiff.width, i = {width: (m.size.width - l), height: (m.size.height - f)}, k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null, n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
        m.element.animate(c.extend(i, n && k ? {top: n, left: k} : {}), {duration: j.animateDuration, easing: j.animateEasing, step: function () {
            var o = {width: parseInt(m.element.css("width"), 10), height: parseInt(m.element.css("height"), 10), top: parseInt(m.element.css("top"), 10), left: parseInt(m.element.css("left"), 10)};
            if (g && g.length) {
                c(g[0]).css({width: o.width, height: o.height})
            }
            m._updateCache(o);
            m._propagate("resize", h)
        }})
    }});
    c.ui.plugin.add("resizable", "containment", {start: function () {
        var m, g, q, e, l, h, r, n = c(this).data("ui-resizable"), k = n.options, j = n.element, f = k.containment, i = (f instanceof c) ? f.get(0) : (/parent/.test(f)) ? j.parent().get(0) : f;
        if (!i) {
            return
        }
        n.containerElement = c(i);
        if (/document/.test(f) || f === document) {
            n.containerOffset = {left: 0, top: 0};
            n.containerPosition = {left: 0, top: 0};
            n.parentData = {element: c(document), left: 0, top: 0, width: c(document).width(), height: c(document).height() || document.body.parentNode.scrollHeight}
        } else {
            m = c(i);
            g = [];
            c(["Top", "Right", "Left", "Bottom"]).each(function (p, o) {
                g[p] = b(m.css("padding" + o))
            });
            n.containerOffset = m.offset();
            n.containerPosition = m.position();
            n.containerSize = {height: (m.innerHeight() - g[3]), width: (m.innerWidth() - g[1])};
            q = n.containerOffset;
            e = n.containerSize.height;
            l = n.containerSize.width;
            h = (c.ui.hasScroll(i, "left") ? i.scrollWidth : l);
            r = (c.ui.hasScroll(i) ? i.scrollHeight : e);
            n.parentData = {element: i, left: q.left, top: q.top, width: h, height: r}
        }
    }, resize: function (f) {
        var k, q, j, i, l = c(this).data("ui-resizable"), h = l.options, n = l.containerOffset, m = l.position, p = l._aspectRatio || f.shiftKey, e = {top: 0, left: 0}, g = l.containerElement;
        if (g[0] !== document && (/static/).test(g.css("position"))) {
            e = n
        }
        if (m.left < (l._helper ? n.left : 0)) {
            l.size.width = l.size.width + (l._helper ? (l.position.left - n.left) : (l.position.left - e.left));
            if (p) {
                l.size.height = l.size.width / l.aspectRatio
            }
            l.position.left = h.helper ? n.left : 0
        }
        if (m.top < (l._helper ? n.top : 0)) {
            l.size.height = l.size.height + (l._helper ? (l.position.top - n.top) : l.position.top);
            if (p) {
                l.size.width = l.size.height * l.aspectRatio
            }
            l.position.top = l._helper ? n.top : 0
        }
        l.offset.left = l.parentData.left + l.position.left;
        l.offset.top = l.parentData.top + l.position.top;
        k = Math.abs((l._helper ? l.offset.left - e.left : (l.offset.left - e.left)) + l.sizeDiff.width);
        q = Math.abs((l._helper ? l.offset.top - e.top : (l.offset.top - n.top)) + l.sizeDiff.height);
        j = l.containerElement.get(0) === l.element.parent().get(0);
        i = /relative|absolute/.test(l.containerElement.css("position"));
        if (j && i) {
            k -= l.parentData.left
        }
        if (k + l.size.width >= l.parentData.width) {
            l.size.width = l.parentData.width - k;
            if (p) {
                l.size.height = l.size.width / l.aspectRatio
            }
        }
        if (q + l.size.height >= l.parentData.height) {
            l.size.height = l.parentData.height - q;
            if (p) {
                l.size.width = l.size.height * l.aspectRatio
            }
        }
    }, stop: function () {
        var k = c(this).data("ui-resizable"), f = k.options, l = k.containerOffset, e = k.containerPosition, g = k.containerElement, i = c(k.helper), n = i.offset(), m = i.outerWidth() - k.sizeDiff.width, j = i.outerHeight() - k.sizeDiff.height;
        if (k._helper && !f.animate && (/relative/).test(g.css("position"))) {
            c(this).css({left: n.left - e.left - l.left, width: m, height: j})
        }
        if (k._helper && !f.animate && (/static/).test(g.css("position"))) {
            c(this).css({left: n.left - e.left - l.left, width: m, height: j})
        }
    }});
    c.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var e = c(this).data("ui-resizable"), g = e.options, f = function (h) {
            c(h).each(function () {
                var i = c(this);
                i.data("ui-resizable-alsoresize", {width: parseInt(i.width(), 10), height: parseInt(i.height(), 10), left: parseInt(i.css("left"), 10), top: parseInt(i.css("top"), 10)})
            })
        };
        if (typeof(g.alsoResize) === "object" && !g.alsoResize.parentNode) {
            if (g.alsoResize.length) {
                g.alsoResize = g.alsoResize[0];
                f(g.alsoResize)
            } else {
                c.each(g.alsoResize, function (h) {
                    f(h)
                })
            }
        } else {
            f(g.alsoResize)
        }
    }, resize: function (g, i) {
        var f = c(this).data("ui-resizable"), j = f.options, h = f.originalSize, l = f.originalPosition, k = {height: (f.size.height - h.height) || 0, width: (f.size.width - h.width) || 0, top: (f.position.top - l.top) || 0, left: (f.position.left - l.left) || 0}, e = function (m, n) {
            c(m).each(function () {
                var q = c(this), r = c(this).data("ui-resizable-alsoresize"), p = {}, o = n && n.length ? n : q.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                c.each(o, function (s, u) {
                    var t = (r[u] || 0) + (k[u] || 0);
                    if (t && t >= 0) {
                        p[u] = t || null
                    }
                });
                q.css(p)
            })
        };
        if (typeof(j.alsoResize) === "object" && !j.alsoResize.nodeType) {
            c.each(j.alsoResize, function (m, n) {
                e(m, n)
            })
        } else {
            e(j.alsoResize)
        }
    }, stop: function () {
        c(this).removeData("resizable-alsoresize")
    }});
    c.ui.plugin.add("resizable", "ghost", {start: function () {
        var f = c(this).data("ui-resizable"), g = f.options, e = f.size;
        f.ghost = f.originalElement.clone();
        f.ghost.css({opacity: 0.25, display: "block", position: "relative", height: e.height, width: e.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost === "string" ? g.ghost : "");
        f.ghost.appendTo(f.helper)
    }, resize: function () {
        var e = c(this).data("ui-resizable");
        if (e.ghost) {
            e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
        }
    }, stop: function () {
        var e = c(this).data("ui-resizable");
        if (e.ghost && e.helper) {
            e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }});
    c.ui.plugin.add("resizable", "grid", {resize: function () {
        var r = c(this).data("ui-resizable"), i = r.options, s = r.size, k = r.originalSize, n = r.originalPosition, t = r.axis, f = typeof i.grid === "number" ? [i.grid, i.grid] : i.grid, p = (f[0] || 1), m = (f[1] || 1), h = Math.round((s.width - k.width) / p) * p, g = Math.round((s.height - k.height) / m) * m, l = k.width + h, e = k.height + g, j = i.maxWidth && (i.maxWidth < l), u = i.maxHeight && (i.maxHeight < e), q = i.minWidth && (i.minWidth > l), v = i.minHeight && (i.minHeight > e);
        i.grid = f;
        if (q) {
            l = l + p
        }
        if (v) {
            e = e + m
        }
        if (j) {
            l = l - p
        }
        if (u) {
            e = e - m
        }
        if (/^(se|s|e)$/.test(t)) {
            r.size.width = l;
            r.size.height = e
        } else {
            if (/^(ne)$/.test(t)) {
                r.size.width = l;
                r.size.height = e;
                r.position.top = n.top - g
            } else {
                if (/^(sw)$/.test(t)) {
                    r.size.width = l;
                    r.size.height = e;
                    r.position.left = n.left - h
                } else {
                    r.size.width = l;
                    r.size.height = e;
                    r.position.top = n.top - g;
                    r.position.left = n.left - h
                }
            }
        }
    }})
})(jQuery);
(function (a, b) {
    a.widget("ui.selectable", a.ui.mouse, {version: "1.10.3", options: {appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
        var d, c = this;
        this.element.addClass("ui-selectable");
        this.dragged = false;
        this.refresh = function () {
            d = a(c.options.filter, c.element[0]);
            d.addClass("ui-selectee");
            d.each(function () {
                var e = a(this), f = e.offset();
                a.data(this, "selectable-item", {element: this, $element: e, left: f.left, top: f.top, right: f.left + e.outerWidth(), bottom: f.top + e.outerHeight(), startselected: false, selected: e.hasClass("ui-selected"), selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting")})
            })
        };
        this.refresh();
        this.selectees = d.addClass("ui-selectee");
        this._mouseInit();
        this.helper = a("<div class='ui-selectable-helper'></div>")
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item");
        this.element.removeClass("ui-selectable ui-selectable-disabled");
        this._mouseDestroy()
    }, _mouseStart: function (e) {
        var d = this, c = this.options;
        this.opos = [e.pageX, e.pageY];
        if (this.options.disabled) {
            return
        }
        this.selectees = a(c.filter, this.element[0]);
        this._trigger("start", e);
        a(c.appendTo).append(this.helper);
        this.helper.css({left: e.pageX, top: e.pageY, width: 0, height: 0});
        if (c.autoRefresh) {
            this.refresh()
        }
        this.selectees.filter(".ui-selected").each(function () {
            var f = a.data(this, "selectable-item");
            f.startselected = true;
            if (!e.metaKey && !e.ctrlKey) {
                f.$element.removeClass("ui-selected");
                f.selected = false;
                f.$element.addClass("ui-unselecting");
                f.unselecting = true;
                d._trigger("unselecting", e, {unselecting: f.element})
            }
        });
        a(e.target).parents().addBack().each(function () {
            var f, g = a.data(this, "selectable-item");
            if (g) {
                f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
                g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
                g.unselecting = !f;
                g.selecting = f;
                g.selected = f;
                if (f) {
                    d._trigger("selecting", e, {selecting: g.element})
                } else {
                    d._trigger("unselecting", e, {unselecting: g.element})
                }
                return false
            }
        })
    }, _mouseDrag: function (j) {
        this.dragged = true;
        if (this.options.disabled) {
            return
        }
        var g, i = this, e = this.options, d = this.opos[0], h = this.opos[1], c = j.pageX, f = j.pageY;
        if (d > c) {
            g = c;
            c = d;
            d = g
        }
        if (h > f) {
            g = f;
            f = h;
            h = g
        }
        this.helper.css({left: d, top: h, width: c - d, height: f - h});
        this.selectees.each(function () {
            var k = a.data(this, "selectable-item"), l = false;
            if (!k || k.element === i.element[0]) {
                return
            }
            if (e.tolerance === "touch") {
                l = (!(k.left > c || k.right < d || k.top > f || k.bottom < h))
            } else {
                if (e.tolerance === "fit") {
                    l = (k.left > d && k.right < c && k.top > h && k.bottom < f)
                }
            }
            if (l) {
                if (k.selected) {
                    k.$element.removeClass("ui-selected");
                    k.selected = false
                }
                if (k.unselecting) {
                    k.$element.removeClass("ui-unselecting");
                    k.unselecting = false
                }
                if (!k.selecting) {
                    k.$element.addClass("ui-selecting");
                    k.selecting = true;
                    i._trigger("selecting", j, {selecting: k.element})
                }
            } else {
                if (k.selecting) {
                    if ((j.metaKey || j.ctrlKey) && k.startselected) {
                        k.$element.removeClass("ui-selecting");
                        k.selecting = false;
                        k.$element.addClass("ui-selected");
                        k.selected = true
                    } else {
                        k.$element.removeClass("ui-selecting");
                        k.selecting = false;
                        if (k.startselected) {
                            k.$element.addClass("ui-unselecting");
                            k.unselecting = true
                        }
                        i._trigger("unselecting", j, {unselecting: k.element})
                    }
                }
                if (k.selected) {
                    if (!j.metaKey && !j.ctrlKey && !k.startselected) {
                        k.$element.removeClass("ui-selected");
                        k.selected = false;
                        k.$element.addClass("ui-unselecting");
                        k.unselecting = true;
                        i._trigger("unselecting", j, {unselecting: k.element})
                    }
                }
            }
        });
        return false
    }, _mouseStop: function (d) {
        var c = this;
        this.dragged = false;
        a(".ui-unselecting", this.element[0]).each(function () {
            var e = a.data(this, "selectable-item");
            e.$element.removeClass("ui-unselecting");
            e.unselecting = false;
            e.startselected = false;
            c._trigger("unselected", d, {unselected: e.element})
        });
        a(".ui-selecting", this.element[0]).each(function () {
            var e = a.data(this, "selectable-item");
            e.$element.removeClass("ui-selecting").addClass("ui-selected");
            e.selecting = false;
            e.selected = true;
            e.startselected = true;
            c._trigger("selected", d, {selected: e.element})
        });
        this._trigger("stop", d);
        this.helper.remove();
        return false
    }})
})(jQuery);
(function (b, d) {
    function a(f, e, g) {
        return(f > e) && (f < (e + g))
    }

    function c(e) {
        return(/left|right/).test(e.css("float")) || (/inline|table-cell/).test(e.css("display"))
    }

    b.widget("ui.sortable", b.ui.mouse, {version: "1.10.3", widgetEventPrefix: "sort", ready: false, options: {appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
        var e = this.options;
        this.containerCache = {};
        this.element.addClass("ui-sortable");
        this.refresh();
        this.floating = this.items.length ? e.axis === "x" || c(this.items[0].item) : false;
        this.offset = this.element.offset();
        this._mouseInit();
        this.ready = true
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled");
        this._mouseDestroy();
        for (var e = this.items.length - 1; e >= 0; e--) {
            this.items[e].item.removeData(this.widgetName + "-item")
        }
        return this
    }, _setOption: function (e, f) {
        if (e === "disabled") {
            this.options[e] = f;
            this.widget().toggleClass("ui-sortable-disabled", !!f)
        } else {
            b.Widget.prototype._setOption.apply(this, arguments)
        }
    }, _mouseCapture: function (g, h) {
        var e = null, i = false, f = this;
        if (this.reverting) {
            return false
        }
        if (this.options.disabled || this.options.type === "static") {
            return false
        }
        this._refreshItems(g);
        b(g.target).parents().each(function () {
            if (b.data(this, f.widgetName + "-item") === f) {
                e = b(this);
                return false
            }
        });
        if (b.data(g.target, f.widgetName + "-item") === f) {
            e = b(g.target)
        }
        if (!e) {
            return false
        }
        if (this.options.handle && !h) {
            b(this.options.handle, e).find("*").addBack().each(function () {
                if (this === g.target) {
                    i = true
                }
            });
            if (!i) {
                return false
            }
        }
        this.currentItem = e;
        this._removeCurrentsFromItems();
        return true
    }, _mouseStart: function (h, j, f) {
        var g, e, k = this.options;
        this.currentContainer = this;
        this.refreshPositions();
        this.helper = this._createHelper(h);
        this._cacheHelperProportions();
        this._cacheMargins();
        this.scrollParent = this.helper.scrollParent();
        this.offset = this.currentItem.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        b.extend(this.offset, {click: {left: h.pageX - this.offset.left, top: h.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.helper.css("position", "absolute");
        this.cssPosition = this.helper.css("position");
        this.originalPosition = this._generatePosition(h);
        this.originalPageX = h.pageX;
        this.originalPageY = h.pageY;
        (k.cursorAt && this._adjustOffsetFromHelper(k.cursorAt));
        this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]};
        if (this.helper[0] !== this.currentItem[0]) {
            this.currentItem.hide()
        }
        this._createPlaceholder();
        if (k.containment) {
            this._setContainment()
        }
        if (k.cursor && k.cursor !== "auto") {
            e = this.document.find("body");
            this.storedCursor = e.css("cursor");
            e.css("cursor", k.cursor);
            this.storedStylesheet = b("<style>*{ cursor: " + k.cursor + " !important; }</style>").appendTo(e)
        }
        if (k.opacity) {
            if (this.helper.css("opacity")) {
                this._storedOpacity = this.helper.css("opacity")
            }
            this.helper.css("opacity", k.opacity)
        }
        if (k.zIndex) {
            if (this.helper.css("zIndex")) {
                this._storedZIndex = this.helper.css("zIndex")
            }
            this.helper.css("zIndex", k.zIndex)
        }
        if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
            this.overflowOffset = this.scrollParent.offset()
        }
        this._trigger("start", h, this._uiHash());
        if (!this._preserveHelperProportions) {
            this._cacheHelperProportions()
        }
        if (!f) {
            for (g = this.containers.length - 1; g >= 0; g--) {
                this.containers[g]._trigger("activate", h, this._uiHash(this))
            }
        }
        if (b.ui.ddmanager) {
            b.ui.ddmanager.current = this
        }
        if (b.ui.ddmanager && !k.dropBehaviour) {
            b.ui.ddmanager.prepareOffsets(this, h)
        }
        this.dragging = true;
        this.helper.addClass("ui-sortable-helper");
        this._mouseDrag(h);
        return true
    }, _mouseDrag: function (j) {
        var g, h, f, l, k = this.options, e = false;
        this.position = this._generatePosition(j);
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.lastPositionAbs) {
            this.lastPositionAbs = this.positionAbs
        }
        if (this.options.scroll) {
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - j.pageY < k.scrollSensitivity) {
                    this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + k.scrollSpeed
                } else {
                    if (j.pageY - this.overflowOffset.top < k.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - k.scrollSpeed
                    }
                }
                if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - j.pageX < k.scrollSensitivity) {
                    this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + k.scrollSpeed
                } else {
                    if (j.pageX - this.overflowOffset.left < k.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - k.scrollSpeed
                    }
                }
            } else {
                if (j.pageY - b(document).scrollTop() < k.scrollSensitivity) {
                    e = b(document).scrollTop(b(document).scrollTop() - k.scrollSpeed)
                } else {
                    if (b(window).height() - (j.pageY - b(document).scrollTop()) < k.scrollSensitivity) {
                        e = b(document).scrollTop(b(document).scrollTop() + k.scrollSpeed)
                    }
                }
                if (j.pageX - b(document).scrollLeft() < k.scrollSensitivity) {
                    e = b(document).scrollLeft(b(document).scrollLeft() - k.scrollSpeed)
                } else {
                    if (b(window).width() - (j.pageX - b(document).scrollLeft()) < k.scrollSensitivity) {
                        e = b(document).scrollLeft(b(document).scrollLeft() + k.scrollSpeed)
                    }
                }
            }
            if (e !== false && b.ui.ddmanager && !k.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, j)
            }
        }
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.options.axis || this.options.axis !== "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis !== "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        for (g = this.items.length - 1; g >= 0; g--) {
            h = this.items[g];
            f = h.item[0];
            l = this._intersectsWithPointer(h);
            if (!l) {
                continue
            }
            if (h.instance !== this.currentContainer) {
                continue
            }
            if (f !== this.currentItem[0] && this.placeholder[l === 1 ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], f) : true)) {
                this.direction = l === 1 ? "down" : "up";
                if (this.options.tolerance === "pointer" || this._intersectsWithSides(h)) {
                    this._rearrange(j, h)
                } else {
                    break
                }
                this._trigger("change", j, this._uiHash());
                break
            }
        }
        this._contactContainers(j);
        if (b.ui.ddmanager) {
            b.ui.ddmanager.drag(this, j)
        }
        this._trigger("sort", j, this._uiHash());
        this.lastPositionAbs = this.positionAbs;
        return false
    }, _mouseStop: function (g, i) {
        if (!g) {
            return
        }
        if (b.ui.ddmanager && !this.options.dropBehaviour) {
            b.ui.ddmanager.drop(this, g)
        }
        if (this.options.revert) {
            var f = this, j = this.placeholder.offset(), e = this.options.axis, h = {};
            if (!e || e === "x") {
                h.left = j.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
            }
            if (!e || e === "y") {
                h.top = j.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
            }
            this.reverting = true;
            b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function () {
                f._clear(g)
            })
        } else {
            this._clear(g, i)
        }
        return false
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null});
            if (this.options.helper === "original") {
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            for (var e = this.containers.length - 1; e >= 0; e--) {
                this.containers[e]._trigger("deactivate", null, this._uiHash(this));
                if (this.containers[e].containerCache.over) {
                    this.containers[e]._trigger("out", null, this._uiHash(this));
                    this.containers[e].containerCache.over = 0
                }
            }
        }
        if (this.placeholder) {
            if (this.placeholder[0].parentNode) {
                this.placeholder[0].parentNode.removeChild(this.placeholder[0])
            }
            if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                this.helper.remove()
            }
            b.extend(this, {helper: null, dragging: false, reverting: false, _noFinalSort: null});
            if (this.domPosition.prev) {
                b(this.domPosition.prev).after(this.currentItem)
            } else {
                b(this.domPosition.parent).prepend(this.currentItem)
            }
        }
        return this
    }, serialize: function (g) {
        var e = this._getItemsAsjQuery(g && g.connected), f = [];
        g = g || {};
        b(e).each(function () {
            var h = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || (/(.+)[\-=_](.+)/));
            if (h) {
                f.push((g.key || h[1] + "[]") + "=" + (g.key && g.expression ? h[1] : h[2]))
            }
        });
        if (!f.length && g.key) {
            f.push(g.key + "=")
        }
        return f.join("&")
    }, toArray: function (g) {
        var e = this._getItemsAsjQuery(g && g.connected), f = [];
        g = g || {};
        e.each(function () {
            f.push(b(g.item || this).attr(g.attribute || "id") || "")
        });
        return f
    }, _intersectsWith: function (q) {
        var g = this.positionAbs.left, f = g + this.helperProportions.width, o = this.positionAbs.top, n = o + this.helperProportions.height, h = q.left, e = h + q.width, s = q.top, m = s + q.height, u = this.offset.click.top, k = this.offset.click.left, j = (this.options.axis === "x") || ((o + u) > s && (o + u) < m), p = (this.options.axis === "y") || ((g + k) > h && (g + k) < e), i = j && p;
        if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > q[this.floating ? "width" : "height"])) {
            return i
        } else {
            return(h < g + (this.helperProportions.width / 2) && f - (this.helperProportions.width / 2) < e && s < o + (this.helperProportions.height / 2) && n - (this.helperProportions.height / 2) < m)
        }
    }, _intersectsWithPointer: function (g) {
        var h = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, g.top, g.height), f = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, g.left, g.width), j = h && f, e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        if (!j) {
            return false
        }
        return this.floating ? (((i && i === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
    }, _intersectsWithSides: function (h) {
        var f = a(this.positionAbs.top + this.offset.click.top, h.top + (h.height / 2), h.height), g = a(this.positionAbs.left + this.offset.click.left, h.left + (h.width / 2), h.width), e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        if (this.floating && i) {
            return((i === "right" && g) || (i === "left" && !g))
        } else {
            return e && ((e === "down" && f) || (e === "up" && !f))
        }
    }, _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return e !== 0 && (e > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return e !== 0 && (e > 0 ? "right" : "left")
    }, refresh: function (e) {
        this._refreshItems(e);
        this.refreshPositions();
        return this
    }, _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
    }, _getItemsAsjQuery: function (l) {
        var h, g, n, m, e = [], f = [], k = this._connectWith();
        if (k && l) {
            for (h = k.length - 1; h >= 0; h--) {
                n = b(k[h]);
                for (g = n.length - 1; g >= 0; g--) {
                    m = b.data(n[g], this.widgetFullName);
                    if (m && m !== this && !m.options.disabled) {
                        f.push([b.isFunction(m.options.items) ? m.options.items.call(m.element) : b(m.options.items, m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), m])
                    }
                }
            }
        }
        f.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (h = f.length - 1; h >= 0; h--) {
            f[h][0].each(function () {
                e.push(this)
            })
        }
        return b(e)
    }, _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = b.grep(this.items, function (g) {
            for (var f = 0; f < e.length; f++) {
                if (e[f] === g.item[0]) {
                    return false
                }
            }
            return true
        })
    }, _refreshItems: function (e) {
        this.items = [];
        this.containers = [this];
        var k, g, p, l, o, f, r, q, m = this.items, h = [
            [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : b(this.options.items, this.element), this]
        ], n = this._connectWith();
        if (n && this.ready) {
            for (k = n.length - 1; k >= 0; k--) {
                p = b(n[k]);
                for (g = p.length - 1; g >= 0; g--) {
                    l = b.data(p[g], this.widgetFullName);
                    if (l && l !== this && !l.options.disabled) {
                        h.push([b.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {item: this.currentItem}) : b(l.options.items, l.element), l]);
                        this.containers.push(l)
                    }
                }
            }
        }
        for (k = h.length - 1; k >= 0; k--) {
            o = h[k][1];
            f = h[k][0];
            for (g = 0, q = f.length; g < q; g++) {
                r = b(f[g]);
                r.data(this.widgetName + "-item", o);
                m.push({item: r, instance: o, width: 0, height: 0, left: 0, top: 0})
            }
        }
    }, refreshPositions: function (e) {
        if (this.offsetParent && this.helper) {
            this.offset.parent = this._getParentOffset()
        }
        var g, h, f, j;
        for (g = this.items.length - 1; g >= 0; g--) {
            h = this.items[g];
            if (h.instance !== this.currentContainer && this.currentContainer && h.item[0] !== this.currentItem[0]) {
                continue
            }
            f = this.options.toleranceElement ? b(this.options.toleranceElement, h.item) : h.item;
            if (!e) {
                h.width = f.outerWidth();
                h.height = f.outerHeight()
            }
            j = f.offset();
            h.left = j.left;
            h.top = j.top
        }
        if (this.options.custom && this.options.custom.refreshContainers) {
            this.options.custom.refreshContainers.call(this)
        } else {
            for (g = this.containers.length - 1; g >= 0; g--) {
                j = this.containers[g].element.offset();
                this.containers[g].containerCache.left = j.left;
                this.containers[g].containerCache.top = j.top;
                this.containers[g].containerCache.width = this.containers[g].element.outerWidth();
                this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
            }
        }
        return this
    }, _createPlaceholder: function (f) {
        f = f || this;
        var e, g = f.options;
        if (!g.placeholder || g.placeholder.constructor === String) {
            e = g.placeholder;
            g.placeholder = {element: function () {
                var i = f.currentItem[0].nodeName.toLowerCase(), h = b("<" + i + ">", f.document[0]).addClass(e || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                if (i === "tr") {
                    f.currentItem.children().each(function () {
                        b("<td>&#160;</td>", f.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(h)
                    })
                } else {
                    if (i === "img") {
                        h.attr("src", f.currentItem.attr("src"))
                    }
                }
                if (!e) {
                    h.css("visibility", "hidden")
                }
                return h
            }, update: function (h, i) {
                if (e && !g.forcePlaceholderSize) {
                    return
                }
                if (!i.height()) {
                    i.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10))
                }
                if (!i.width()) {
                    i.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
                }
            }}
        }
        f.placeholder = b(g.placeholder.element.call(f.element, f.currentItem));
        f.currentItem.after(f.placeholder);
        g.placeholder.update(f, f.placeholder)
    }, _contactContainers: function (e) {
        var l, h, p, m, n, r, f, s, k, o, g = null, q = null;
        for (l = this.containers.length - 1; l >= 0; l--) {
            if (b.contains(this.currentItem[0], this.containers[l].element[0])) {
                continue
            }
            if (this._intersectsWith(this.containers[l].containerCache)) {
                if (g && b.contains(this.containers[l].element[0], g.element[0])) {
                    continue
                }
                g = this.containers[l];
                q = l
            } else {
                if (this.containers[l].containerCache.over) {
                    this.containers[l]._trigger("out", e, this._uiHash(this));
                    this.containers[l].containerCache.over = 0
                }
            }
        }
        if (!g) {
            return
        }
        if (this.containers.length === 1) {
            if (!this.containers[q].containerCache.over) {
                this.containers[q]._trigger("over", e, this._uiHash(this));
                this.containers[q].containerCache.over = 1
            }
        } else {
            p = 10000;
            m = null;
            o = g.floating || c(this.currentItem);
            n = o ? "left" : "top";
            r = o ? "width" : "height";
            f = this.positionAbs[n] + this.offset.click[n];
            for (h = this.items.length - 1; h >= 0; h--) {
                if (!b.contains(this.containers[q].element[0], this.items[h].item[0])) {
                    continue
                }
                if (this.items[h].item[0] === this.currentItem[0]) {
                    continue
                }
                if (o && !a(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height)) {
                    continue
                }
                s = this.items[h].item.offset()[n];
                k = false;
                if (Math.abs(s - f) > Math.abs(s + this.items[h][r] - f)) {
                    k = true;
                    s += this.items[h][r]
                }
                if (Math.abs(s - f) < p) {
                    p = Math.abs(s - f);
                    m = this.items[h];
                    this.direction = k ? "up" : "down"
                }
            }
            if (!m && !this.options.dropOnEmpty) {
                return
            }
            if (this.currentContainer === this.containers[q]) {
                return
            }
            m ? this._rearrange(e, m, null, true) : this._rearrange(e, null, this.containers[q].element, true);
            this._trigger("change", e, this._uiHash());
            this.containers[q]._trigger("change", e, this._uiHash(this));
            this.currentContainer = this.containers[q];
            this.options.placeholder.update(this.currentContainer, this.placeholder);
            this.containers[q]._trigger("over", e, this._uiHash(this));
            this.containers[q].containerCache.over = 1
        }
    }, _createHelper: function (f) {
        var g = this.options, e = b.isFunction(g.helper) ? b(g.helper.apply(this.element[0], [f, this.currentItem])) : (g.helper === "clone" ? this.currentItem.clone() : this.currentItem);
        if (!e.parents("body").length) {
            b(g.appendTo !== "parent" ? g.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0])
        }
        if (e[0] === this.currentItem[0]) {
            this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}
        }
        if (!e[0].style.width || g.forceHelperSize) {
            e.width(this.currentItem.width())
        }
        if (!e[0].style.height || g.forceHelperSize) {
            e.height(this.currentItem.height())
        }
        return e
    }, _adjustOffsetFromHelper: function (e) {
        if (typeof e === "string") {
            e = e.split(" ")
        }
        if (b.isArray(e)) {
            e = {left: +e[0], top: +e[1] || 0}
        }
        if ("left" in e) {
            this.offset.click.left = e.left + this.margins.left
        }
        if ("right" in e) {
            this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
        }
        if ("top" in e) {
            this.offset.click.top = e.top + this.margins.top
        }
        if ("bottom" in e) {
            this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
        }
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
            e.left += this.scrollParent.scrollLeft();
            e.top += this.scrollParent.scrollTop()
        }
        if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
            e = {top: 0, left: 0}
        }
        return{top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if (this.cssPosition === "relative") {
            var e = this.currentItem.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        } else {
            return{top: 0, left: 0}
        }
    }, _cacheMargins: function () {
        this.margins = {left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0), top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var f, h, e, g = this.options;
        if (g.containment === "parent") {
            g.containment = this.helper[0].parentNode
        }
        if (g.containment === "document" || g.containment === "window") {
            this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
        }
        if (!(/^(document|window|parent)$/).test(g.containment)) {
            f = b(g.containment)[0];
            h = b(g.containment).offset();
            e = (b(f).css("overflow") !== "hidden");
            this.containment = [h.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, h.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, h.left + (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, h.top + (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
        }
    }, _convertPositionTo: function (g, i) {
        if (!i) {
            i = this.position
        }
        var f = g === "absolute" ? 1 : -1, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = (/(html|body)/i).test(e[0].tagName);
        return{top: (i.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : e.scrollTop())) * f)), left: (i.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * f))}
    }, _generatePosition: function (h) {
        var j, i, k = this.options, g = h.pageX, f = h.pageY, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, l = (/(html|body)/i).test(e[0].tagName);
        if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
            this.offset.relative = this._getRelativeOffset()
        }
        if (this.originalPosition) {
            if (this.containment) {
                if (h.pageX - this.offset.click.left < this.containment[0]) {
                    g = this.containment[0] + this.offset.click.left
                }
                if (h.pageY - this.offset.click.top < this.containment[1]) {
                    f = this.containment[1] + this.offset.click.top
                }
                if (h.pageX - this.offset.click.left > this.containment[2]) {
                    g = this.containment[2] + this.offset.click.left
                }
                if (h.pageY - this.offset.click.top > this.containment[3]) {
                    f = this.containment[3] + this.offset.click.top
                }
            }
            if (k.grid) {
                j = this.originalPageY + Math.round((f - this.originalPageY) / k.grid[1]) * k.grid[1];
                f = this.containment ? ((j - this.offset.click.top >= this.containment[1] && j - this.offset.click.top <= this.containment[3]) ? j : ((j - this.offset.click.top >= this.containment[1]) ? j - k.grid[1] : j + k.grid[1])) : j;
                i = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                g = this.containment ? ((i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2]) ? i : ((i - this.offset.click.left >= this.containment[0]) ? i - k.grid[0] : i + k.grid[0])) : i
            }
        }
        return{top: (f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (l ? 0 : e.scrollTop())))), left: (g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : e.scrollLeft())))}
    }, _rearrange: function (j, h, f, g) {
        f ? f[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? h.item[0] : h.item[0].nextSibling));
        this.counter = this.counter ? ++this.counter : 1;
        var e = this.counter;
        this._delay(function () {
            if (e === this.counter) {
                this.refreshPositions(!g)
            }
        })
    }, _clear: function (f, g) {
        this.reverting = false;
        var e, h = [];
        if (!this._noFinalSort && this.currentItem.parent().length) {
            this.placeholder.before(this.currentItem)
        }
        this._noFinalSort = null;
        if (this.helper[0] === this.currentItem[0]) {
            for (e in this._storedCSS) {
                if (this._storedCSS[e] === "auto" || this._storedCSS[e] === "static") {
                    this._storedCSS[e] = ""
                }
            }
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else {
            this.currentItem.show()
        }
        if (this.fromOutside && !g) {
            h.push(function (i) {
                this._trigger("receive", i, this._uiHash(this.fromOutside))
            })
        }
        if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !g) {
            h.push(function (i) {
                this._trigger("update", i, this._uiHash())
            })
        }
        if (this !== this.currentContainer) {
            if (!g) {
                h.push(function (i) {
                    this._trigger("remove", i, this._uiHash())
                });
                h.push((function (i) {
                    return function (j) {
                        i._trigger("receive", j, this._uiHash(this))
                    }
                }).call(this, this.currentContainer));
                h.push((function (i) {
                    return function (j) {
                        i._trigger("update", j, this._uiHash(this))
                    }
                }).call(this, this.currentContainer))
            }
        }
        for (e = this.containers.length - 1; e >= 0; e--) {
            if (!g) {
                h.push((function (i) {
                    return function (j) {
                        i._trigger("deactivate", j, this._uiHash(this))
                    }
                }).call(this, this.containers[e]))
            }
            if (this.containers[e].containerCache.over) {
                h.push((function (i) {
                    return function (j) {
                        i._trigger("out", j, this._uiHash(this))
                    }
                }).call(this, this.containers[e]));
                this.containers[e].containerCache.over = 0
            }
        }
        if (this.storedCursor) {
            this.document.find("body").css("cursor", this.storedCursor);
            this.storedStylesheet.remove()
        }
        if (this._storedOpacity) {
            this.helper.css("opacity", this._storedOpacity)
        }
        if (this._storedZIndex) {
            this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
        }
        this.dragging = false;
        if (this.cancelHelperRemoval) {
            if (!g) {
                this._trigger("beforeStop", f, this._uiHash());
                for (e = 0; e < h.length; e++) {
                    h[e].call(this, f)
                }
                this._trigger("stop", f, this._uiHash())
            }
            this.fromOutside = false;
            return false
        }
        if (!g) {
            this._trigger("beforeStop", f, this._uiHash())
        }
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
        if (this.helper[0] !== this.currentItem[0]) {
            this.helper.remove()
        }
        this.helper = null;
        if (!g) {
            for (e = 0; e < h.length; e++) {
                h[e].call(this, f)
            }
            this._trigger("stop", f, this._uiHash())
        }
        this.fromOutside = false;
        return true
    }, _trigger: function () {
        if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
            this.cancel()
        }
    }, _uiHash: function (e) {
        var f = e || this;
        return{helper: f.helper, placeholder: f.placeholder || b([]), position: f.position, originalPosition: f.originalPosition, offset: f.positionAbs, item: f.currentItem, sender: e ? e.element : null}
    }})
})(jQuery);
(function (a, c) {
    var b = "ui-effects-";
    a.effects = {effect: {}};
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function (r, g) {
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", k = /^([\-+])=\s*(\d+\.?\d*)/, j = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (s) {
                return[s[1], s[2], s[3], s[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (s) {
                return[s[1] * 2.55, s[2] * 2.55, s[3] * 2.55, s[4]]
            }},
            {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (s) {
                return[parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16)]
            }},
            {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (s) {
                return[parseInt(s[1] + s[1], 16), parseInt(s[2] + s[2], 16), parseInt(s[3] + s[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (s) {
                return[s[1], s[2] / 100, s[3] / 100, s[4]]
            }}
        ], h = r.Color = function (t, u, s, v) {
            return new r.Color.fn.parse(t, u, s, v)
        }, m = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, q = {"byte": {floor: true, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: true}}, p = h.support = {}, e = r("<p>")[0], d, o = r.each;
        e.style.cssText = "background-color:rgba(1,1,1,.5)";
        p.rgba = e.style.backgroundColor.indexOf("rgba") > -1;
        o(m, function (s, t) {
            t.cache = "_" + s;
            t.props.alpha = {idx: 3, type: "percent", def: 1}
        });
        function l(t, v, u) {
            var s = q[v.type] || {};
            if (t == null) {
                return(u || !v.def) ? null : v.def
            }
            t = s.floor ? ~~t : parseFloat(t);
            if (isNaN(t)) {
                return v.def
            }
            if (s.mod) {
                return(t + s.mod) % s.mod
            }
            return 0 > t ? 0 : s.max < t ? s.max : t
        }

        function i(s) {
            var u = h(), t = u._rgba = [];
            s = s.toLowerCase();
            o(j, function (z, A) {
                var x, y = A.re.exec(s), w = y && A.parse(y), v = A.space || "rgba";
                if (w) {
                    x = u[v](w);
                    u[m[v].cache] = x[m[v].cache];
                    t = u._rgba = x._rgba;
                    return false
                }
            });
            if (t.length) {
                if (t.join() === "0,0,0,0") {
                    r.extend(t, d.transparent)
                }
                return u
            }
            return d[s]
        }

        h.fn = r.extend(h.prototype, {parse: function (y, w, s, x) {
            if (y === g) {
                this._rgba = [null, null, null, null];
                return this
            }
            if (y.jquery || y.nodeType) {
                y = r(y).css(w);
                w = g
            }
            var v = this, u = r.type(y), t = this._rgba = [];
            if (w !== g) {
                y = [y, w, s, x];
                u = "array"
            }
            if (u === "string") {
                return this.parse(i(y) || d._default)
            }
            if (u === "array") {
                o(m.rgba.props, function (z, A) {
                    t[A.idx] = l(y[A.idx], A)
                });
                return this
            }
            if (u === "object") {
                if (y instanceof h) {
                    o(m, function (z, A) {
                        if (y[A.cache]) {
                            v[A.cache] = y[A.cache].slice()
                        }
                    })
                } else {
                    o(m, function (A, B) {
                        var z = B.cache;
                        o(B.props, function (C, D) {
                            if (!v[z] && B.to) {
                                if (C === "alpha" || y[C] == null) {
                                    return
                                }
                                v[z] = B.to(v._rgba)
                            }
                            v[z][D.idx] = l(y[C], D, true)
                        });
                        if (v[z] && r.inArray(null, v[z].slice(0, 3)) < 0) {
                            v[z][3] = 1;
                            if (B.from) {
                                v._rgba = B.from(v[z])
                            }
                        }
                    })
                }
                return this
            }
        }, is: function (u) {
            var s = h(u), v = true, t = this;
            o(m, function (w, y) {
                var z, x = s[y.cache];
                if (x) {
                    z = t[y.cache] || y.to && y.to(t._rgba) || [];
                    o(y.props, function (A, B) {
                        if (x[B.idx] != null) {
                            v = (x[B.idx] === z[B.idx]);
                            return v
                        }
                    })
                }
                return v
            });
            return v
        }, _space: function () {
            var s = [], t = this;
            o(m, function (u, v) {
                if (t[v.cache]) {
                    s.push(u)
                }
            });
            return s.pop()
        }, transition: function (t, z) {
            var u = h(t), v = u._space(), w = m[v], x = this.alpha() === 0 ? h("transparent") : this, y = x[w.cache] || w.to(x._rgba), s = y.slice();
            u = u[w.cache];
            o(w.props, function (D, F) {
                var C = F.idx, B = y[C], A = u[C], E = q[F.type] || {};
                if (A === null) {
                    return
                }
                if (B === null) {
                    s[C] = A
                } else {
                    if (E.mod) {
                        if (A - B > E.mod / 2) {
                            B += E.mod
                        } else {
                            if (B - A > E.mod / 2) {
                                B -= E.mod
                            }
                        }
                    }
                    s[C] = l((A - B) * z + B, F)
                }
            });
            return this[v](s)
        }, blend: function (v) {
            if (this._rgba[3] === 1) {
                return this
            }
            var u = this._rgba.slice(), t = u.pop(), s = h(v)._rgba;
            return h(r.map(u, function (w, x) {
                return(1 - t) * s[x] + t * w
            }))
        }, toRgbaString: function () {
            var t = "rgba(", s = r.map(this._rgba, function (u, w) {
                return u == null ? (w > 2 ? 1 : 0) : u
            });
            if (s[3] === 1) {
                s.pop();
                t = "rgb("
            }
            return t + s.join() + ")"
        }, toHslaString: function () {
            var t = "hsla(", s = r.map(this.hsla(), function (u, w) {
                if (u == null) {
                    u = w > 2 ? 1 : 0
                }
                if (w && w < 3) {
                    u = Math.round(u * 100) + "%"
                }
                return u
            });
            if (s[3] === 1) {
                s.pop();
                t = "hsl("
            }
            return t + s.join() + ")"
        }, toHexString: function (s) {
            var t = this._rgba.slice(), u = t.pop();
            if (s) {
                t.push(~~(u * 255))
            }
            return"#" + r.map(t,function (w) {
                w = (w || 0).toString(16);
                return w.length === 1 ? "0" + w : w
            }).join("")
        }, toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }});
        h.fn.parse.prototype = h.fn;
        function f(u, t, s) {
            s = (s + 1) % 1;
            if (s * 6 < 1) {
                return u + (t - u) * s * 6
            }
            if (s * 2 < 1) {
                return t
            }
            if (s * 3 < 2) {
                return u + (t - u) * ((2 / 3) - s) * 6
            }
            return u
        }

        m.hsla.to = function (v) {
            if (v[0] == null || v[1] == null || v[2] == null) {
                return[null, null, null, v[3]]
            }
            var t = v[0] / 255, y = v[1] / 255, z = v[2] / 255, B = v[3], A = Math.max(t, y, z), w = Math.min(t, y, z), C = A - w, D = A + w, u = D * 0.5, x, E;
            if (w === A) {
                x = 0
            } else {
                if (t === A) {
                    x = (60 * (y - z) / C) + 360
                } else {
                    if (y === A) {
                        x = (60 * (z - t) / C) + 120
                    } else {
                        x = (60 * (t - y) / C) + 240
                    }
                }
            }
            if (C === 0) {
                E = 0
            } else {
                if (u <= 0.5) {
                    E = C / D
                } else {
                    E = C / (2 - D)
                }
            }
            return[Math.round(x) % 360, E, u, B == null ? 1 : B]
        };
        m.hsla.from = function (x) {
            if (x[0] == null || x[1] == null || x[2] == null) {
                return[null, null, null, x[3]]
            }
            var w = x[0] / 360, v = x[1], u = x[2], t = x[3], y = u <= 0.5 ? u * (1 + v) : u + v - u * v, z = 2 * u - y;
            return[Math.round(f(z, y, w + (1 / 3)) * 255), Math.round(f(z, y, w) * 255), Math.round(f(z, y, w - (1 / 3)) * 255), t]
        };
        o(m, function (t, v) {
            var u = v.props, s = v.cache, x = v.to, w = v.from;
            h.fn[t] = function (C) {
                if (x && !this[s]) {
                    this[s] = x(this._rgba)
                }
                if (C === g) {
                    return this[s].slice()
                }
                var z, B = r.type(C), y = (B === "array" || B === "object") ? C : arguments, A = this[s].slice();
                o(u, function (D, F) {
                    var E = y[B === "object" ? D : F.idx];
                    if (E == null) {
                        E = A[F.idx]
                    }
                    A[F.idx] = l(E, F)
                });
                if (w) {
                    z = h(w(A));
                    z[s] = A;
                    return z
                } else {
                    return h(A)
                }
            };
            o(u, function (y, z) {
                if (h.fn[y]) {
                    return
                }
                h.fn[y] = function (D) {
                    var F = r.type(D), C = (y === "alpha" ? (this._hsla ? "hsla" : "rgba") : t), B = this[C](), E = B[z.idx], A;
                    if (F === "undefined") {
                        return E
                    }
                    if (F === "function") {
                        D = D.call(this, E);
                        F = r.type(D)
                    }
                    if (D == null && z.empty) {
                        return this
                    }
                    if (F === "string") {
                        A = k.exec(D);
                        if (A) {
                            D = E + parseFloat(A[2]) * (A[1] === "+" ? 1 : -1)
                        }
                    }
                    B[z.idx] = D;
                    return this[C](B)
                }
            })
        });
        h.hook = function (t) {
            var s = t.split(" ");
            o(s, function (u, v) {
                r.cssHooks[v] = {set: function (z, A) {
                    var x, y, w = "";
                    if (A !== "transparent" && (r.type(A) !== "string" || (x = i(A)))) {
                        A = h(x || A);
                        if (!p.rgba && A._rgba[3] !== 1) {
                            y = v === "backgroundColor" ? z.parentNode : z;
                            while ((w === "" || w === "transparent") && y && y.style) {
                                try {
                                    w = r.css(y, "backgroundColor");
                                    y = y.parentNode
                                } catch (B) {
                                }
                            }
                            A = A.blend(w && w !== "transparent" ? w : "_default")
                        }
                        A = A.toRgbaString()
                    }
                    try {
                        z.style[v] = A
                    } catch (B) {
                    }
                }};
                r.fx.step[v] = function (w) {
                    if (!w.colorInit) {
                        w.start = h(w.elem, v);
                        w.end = h(w.end);
                        w.colorInit = true
                    }
                    r.cssHooks[v].set(w.elem, w.start.transition(w.end, w.pos))
                }
            })
        };
        h.hook(n);
        r.cssHooks.borderColor = {expand: function (t) {
            var s = {};
            o(["Top", "Right", "Bottom", "Left"], function (v, u) {
                s["border" + u + "Color"] = t
            });
            return s
        }};
        d = r.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    })(jQuery);
    (function () {
        var e = ["add", "remove", "toggle"], f = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (h, i) {
            a.fx.step[i] = function (j) {
                if (j.end !== "none" && !j.setAttr || j.pos === 1 && !j.setAttr) {
                    jQuery.style(j.elem, i, j.end);
                    j.setAttr = true
                }
            }
        });
        function g(l) {
            var i, h, j = l.ownerDocument.defaultView ? l.ownerDocument.defaultView.getComputedStyle(l, null) : l.currentStyle, k = {};
            if (j && j.length && j[0] && j[j[0]]) {
                h = j.length;
                while (h--) {
                    i = j[h];
                    if (typeof j[i] === "string") {
                        k[a.camelCase(i)] = j[i]
                    }
                }
            } else {
                for (i in j) {
                    if (typeof j[i] === "string") {
                        k[i] = j[i]
                    }
                }
            }
            return k
        }

        function d(h, j) {
            var l = {}, i, k;
            for (i in j) {
                k = j[i];
                if (h[i] !== k) {
                    if (!f[i]) {
                        if (a.fx.step[i] || !isNaN(parseFloat(k))) {
                            l[i] = k
                        }
                    }
                }
            }
            return l
        }

        if (!a.fn.addBack) {
            a.fn.addBack = function (h) {
                return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
            }
        }
        a.effects.animateClass = function (h, i, l, k) {
            var j = a.speed(i, l, k);
            return this.queue(function () {
                var o = a(this), m = o.attr("class") || "", n, p = j.children ? o.find("*").addBack() : o;
                p = p.map(function () {
                    var q = a(this);
                    return{el: q, start: g(this)}
                });
                n = function () {
                    a.each(e, function (q, r) {
                        if (h[r]) {
                            o[r + "Class"](h[r])
                        }
                    })
                };
                n();
                p = p.map(function () {
                    this.end = g(this.el[0]);
                    this.diff = d(this.start, this.end);
                    return this
                });
                o.attr("class", m);
                p = p.map(function () {
                    var s = this, q = a.Deferred(), r = a.extend({}, j, {queue: false, complete: function () {
                        q.resolve(s)
                    }});
                    this.el.animate(this.diff, r);
                    return q.promise()
                });
                a.when.apply(a, p.get()).done(function () {
                    n();
                    a.each(arguments, function () {
                        var q = this.el;
                        a.each(this.diff, function (r) {
                            q.css(r, "")
                        })
                    });
                    j.complete.call(o[0])
                })
            })
        };
        a.fn.extend({addClass: (function (h) {
            return function (j, i, l, k) {
                return i ? a.effects.animateClass.call(this, {add: j}, i, l, k) : h.apply(this, arguments)
            }
        })(a.fn.addClass), removeClass: (function (h) {
            return function (j, i, l, k) {
                return arguments.length > 1 ? a.effects.animateClass.call(this, {remove: j}, i, l, k) : h.apply(this, arguments)
            }
        })(a.fn.removeClass), toggleClass: (function (h) {
            return function (k, j, i, m, l) {
                if (typeof j === "boolean" || j === c) {
                    if (!i) {
                        return h.apply(this, arguments)
                    } else {
                        return a.effects.animateClass.call(this, (j ? {add: k} : {remove: k}), i, m, l)
                    }
                } else {
                    return a.effects.animateClass.call(this, {toggle: k}, j, i, m)
                }
            }
        })(a.fn.toggleClass), switchClass: function (h, j, i, l, k) {
            return a.effects.animateClass.call(this, {add: j, remove: h}, i, l, k)
        }})
    })();
    (function () {
        a.extend(a.effects, {version: "1.10.3", save: function (g, h) {
            for (var f = 0; f < h.length; f++) {
                if (h[f] !== null) {
                    g.data(b + h[f], g[0].style[h[f]])
                }
            }
        }, restore: function (g, j) {
            var h, f;
            for (f = 0; f < j.length; f++) {
                if (j[f] !== null) {
                    h = g.data(b + j[f]);
                    if (h === c) {
                        h = ""
                    }
                    g.css(j[f], h)
                }
            }
        }, setMode: function (f, g) {
            if (g === "toggle") {
                g = f.is(":hidden") ? "show" : "hide"
            }
            return g
        }, getBaseline: function (g, h) {
            var i, f;
            switch (g[0]) {
                case"top":
                    i = 0;
                    break;
                case"middle":
                    i = 0.5;
                    break;
                case"bottom":
                    i = 1;
                    break;
                default:
                    i = g[0] / h.height
            }
            switch (g[1]) {
                case"left":
                    f = 0;
                    break;
                case"center":
                    f = 0.5;
                    break;
                case"right":
                    f = 1;
                    break;
                default:
                    f = g[1] / h.width
            }
            return{x: f, y: i}
        }, createWrapper: function (g) {
            if (g.parent().is(".ui-effects-wrapper")) {
                return g.parent()
            }
            var h = {width: g.outerWidth(true), height: g.outerHeight(true), "float": g.css("float")}, k = a("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), f = {width: g.width(), height: g.height()}, j = document.activeElement;
            try {
                j.id
            } catch (i) {
                j = document.body
            }
            g.wrap(k);
            if (g[0] === j || a.contains(g[0], j)) {
                a(j).focus()
            }
            k = g.parent();
            if (g.css("position") === "static") {
                k.css({position: "relative"});
                g.css({position: "relative"})
            } else {
                a.extend(h, {position: g.css("position"), zIndex: g.css("z-index")});
                a.each(["top", "left", "bottom", "right"], function (l, m) {
                    h[m] = g.css(m);
                    if (isNaN(parseInt(h[m], 10))) {
                        h[m] = "auto"
                    }
                });
                g.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})
            }
            g.css(f);
            return k.css(h).show()
        }, removeWrapper: function (f) {
            var g = document.activeElement;
            if (f.parent().is(".ui-effects-wrapper")) {
                f.parent().replaceWith(f);
                if (f[0] === g || a.contains(f[0], g)) {
                    a(g).focus()
                }
            }
            return f
        }, setTransition: function (g, i, f, h) {
            h = h || {};
            a.each(i, function (k, j) {
                var l = g.cssUnit(j);
                if (l[0] > 0) {
                    h[j] = l[0] * f + l[1]
                }
            });
            return h
        }});
        function d(g, f, h, i) {
            if (a.isPlainObject(g)) {
                f = g;
                g = g.effect
            }
            g = {effect: g};
            if (f == null) {
                f = {}
            }
            if (a.isFunction(f)) {
                i = f;
                h = null;
                f = {}
            }
            if (typeof f === "number" || a.fx.speeds[f]) {
                i = h;
                h = f;
                f = {}
            }
            if (a.isFunction(h)) {
                i = h;
                h = null
            }
            if (f) {
                a.extend(g, f)
            }
            h = h || f.duration;
            g.duration = a.fx.off ? 0 : typeof h === "number" ? h : h in a.fx.speeds ? a.fx.speeds[h] : a.fx.speeds._default;
            g.complete = i || f.complete;
            return g
        }

        function e(f) {
            if (!f || typeof f === "number" || a.fx.speeds[f]) {
                return true
            }
            if (typeof f === "string" && !a.effects.effect[f]) {
                return true
            }
            if (a.isFunction(f)) {
                return true
            }
            if (typeof f === "object" && !f.effect) {
                return true
            }
            return false
        }

        a.fn.extend({effect: function () {
            var h = d.apply(this, arguments), j = h.mode, f = h.queue, g = a.effects.effect[h.effect];
            if (a.fx.off || !g) {
                if (j) {
                    return this[j](h.duration, h.complete)
                } else {
                    return this.each(function () {
                        if (h.complete) {
                            h.complete.call(this)
                        }
                    })
                }
            }
            function i(m) {
                var n = a(this), l = h.complete, o = h.mode;

                function k() {
                    if (a.isFunction(l)) {
                        l.call(n[0])
                    }
                    if (a.isFunction(m)) {
                        m()
                    }
                }

                if (n.is(":hidden") ? o === "hide" : o === "show") {
                    n[o]();
                    k()
                } else {
                    g.call(n[0], h, k)
                }
            }

            return f === false ? this.each(i) : this.queue(f || "fx", i)
        }, show: (function (f) {
            return function (h) {
                if (e(h)) {
                    return f.apply(this, arguments)
                } else {
                    var g = d.apply(this, arguments);
                    g.mode = "show";
                    return this.effect.call(this, g)
                }
            }
        })(a.fn.show), hide: (function (f) {
            return function (h) {
                if (e(h)) {
                    return f.apply(this, arguments)
                } else {
                    var g = d.apply(this, arguments);
                    g.mode = "hide";
                    return this.effect.call(this, g)
                }
            }
        })(a.fn.hide), toggle: (function (f) {
            return function (h) {
                if (e(h) || typeof h === "boolean") {
                    return f.apply(this, arguments)
                } else {
                    var g = d.apply(this, arguments);
                    g.mode = "toggle";
                    return this.effect.call(this, g)
                }
            }
        })(a.fn.toggle), cssUnit: function (f) {
            var g = this.css(f), h = [];
            a.each(["em", "px", "%", "pt"], function (j, k) {
                if (g.indexOf(k) > 0) {
                    h = [parseFloat(g), k]
                }
            });
            return h
        }})
    })();
    (function () {
        var d = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (f, e) {
            d[e] = function (g) {
                return Math.pow(g, f + 2)
            }
        });
        a.extend(d, {Sine: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e)
        }, Elastic: function (e) {
            return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
        }, Back: function (e) {
            return e * e * (3 * e - 2)
        }, Bounce: function (g) {
            var e, f = 4;
            while (g < ((e = Math.pow(2, --f)) - 1) / 11) {
            }
            return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((e * 3 - 2) / 22 - g, 2)
        }});
        a.each(d, function (f, e) {
            a.easing["easeIn" + f] = e;
            a.easing["easeOut" + f] = function (g) {
                return 1 - e(1 - g)
            };
            a.easing["easeInOut" + f] = function (g) {
                return g < 0.5 ? e(g * 2) / 2 : 1 - e(g * -2 + 2) / 2
            }
        })
    })()
})(jQuery);
(function (d, e) {
    var b = 0, c = {}, a = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
    a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show";
    d.widget("ui.accordion", {version: "1.10.3", options: {active: 0, animate: {}, collapsible: false, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, _create: function () {
        var f = this.options;
        this.prevShow = this.prevHide = d();
        this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
        if (!f.collapsible && (f.active === false || f.active == null)) {
            f.active = 0
        }
        this._processPanels();
        if (f.active < 0) {
            f.active += this.headers.length
        }
        this._refresh()
    }, _getCreateEventData: function () {
        return{header: this.active, panel: !this.active.length ? d() : this.active.next(), content: !this.active.length ? d() : this.active.next()}
    }, _createIcons: function () {
        var f = this.options.icons;
        if (f) {
            d("<span>").addClass("ui-accordion-header-icon ui-icon " + f.header).prependTo(this.headers);
            this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
            this.headers.addClass("ui-accordion-icons")
        }
    }, _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    }, _destroy: function () {
        var f;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
        this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
            if (/^ui-accordion/.test(this.id)) {
                this.removeAttribute("id")
            }
        });
        this._destroyIcons();
        f = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
            if (/^ui-accordion/.test(this.id)) {
                this.removeAttribute("id")
            }
        });
        if (this.options.heightStyle !== "content") {
            f.css("height", "")
        }
    }, _setOption: function (f, g) {
        if (f === "active") {
            this._activate(g);
            return
        }
        if (f === "event") {
            if (this.options.event) {
                this._off(this.headers, this.options.event)
            }
            this._setupEvents(g)
        }
        this._super(f, g);
        if (f === "collapsible" && !g && this.options.active === false) {
            this._activate(0)
        }
        if (f === "icons") {
            this._destroyIcons();
            if (g) {
                this._createIcons()
            }
        }
        if (f === "disabled") {
            this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!g)
        }
    }, _keydown: function (i) {
        if (i.altKey || i.ctrlKey) {
            return
        }
        var j = d.ui.keyCode, h = this.headers.length, f = this.headers.index(i.target), g = false;
        switch (i.keyCode) {
            case j.RIGHT:
            case j.DOWN:
                g = this.headers[(f + 1) % h];
                break;
            case j.LEFT:
            case j.UP:
                g = this.headers[(f - 1 + h) % h];
                break;
            case j.SPACE:
            case j.ENTER:
                this._eventHandler(i);
                break;
            case j.HOME:
                g = this.headers[0];
                break;
            case j.END:
                g = this.headers[h - 1];
                break
        }
        if (g) {
            d(i.target).attr("tabIndex", -1);
            d(g).attr("tabIndex", 0);
            g.focus();
            i.preventDefault()
        }
    }, _panelKeyDown: function (f) {
        if (f.keyCode === d.ui.keyCode.UP && f.ctrlKey) {
            d(f.currentTarget).prev().focus()
        }
    }, refresh: function () {
        var f = this.options;
        this._processPanels();
        if ((f.active === false && f.collapsible === true) || !this.headers.length) {
            f.active = false;
            this.active = d()
        } else {
            if (f.active === false) {
                this._activate(0)
            } else {
                if (this.active.length && !d.contains(this.element[0], this.active[0])) {
                    if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                        f.active = false;
                        this.active = d()
                    } else {
                        this._activate(Math.max(0, f.active - 1))
                    }
                } else {
                    f.active = this.headers.index(this.active)
                }
            }
        }
        this._destroyIcons();
        this._refresh()
    }, _processPanels: function () {
        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
        this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
    }, _refresh: function () {
        var j, h = this.options, g = h.heightStyle, i = this.element.parent(), f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
        this.active = this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
        this.active.next().addClass("ui-accordion-content-active").show();
        this.headers.attr("role", "tab").each(function (n) {
            var o = d(this), m = o.attr("id"), k = o.next(), l = k.attr("id");
            if (!m) {
                m = f + "-header-" + n;
                o.attr("id", m)
            }
            if (!l) {
                l = f + "-panel-" + n;
                k.attr("id", l)
            }
            o.attr("aria-controls", l);
            k.attr("aria-labelledby", m)
        }).next().attr("role", "tabpanel");
        this.headers.not(this.active).attr({"aria-selected": "false", tabIndex: -1}).next().attr({"aria-expanded": "false", "aria-hidden": "true"}).hide();
        if (!this.active.length) {
            this.headers.eq(0).attr("tabIndex", 0)
        } else {
            this.active.attr({"aria-selected": "true", tabIndex: 0}).next().attr({"aria-expanded": "true", "aria-hidden": "false"})
        }
        this._createIcons();
        this._setupEvents(h.event);
        if (g === "fill") {
            j = i.height();
            this.element.siblings(":visible").each(function () {
                var l = d(this), k = l.css("position");
                if (k === "absolute" || k === "fixed") {
                    return
                }
                j -= l.outerHeight(true)
            });
            this.headers.each(function () {
                j -= d(this).outerHeight(true)
            });
            this.headers.next().each(function () {
                d(this).height(Math.max(0, j - d(this).innerHeight() + d(this).height()))
            }).css("overflow", "auto")
        } else {
            if (g === "auto") {
                j = 0;
                this.headers.next().each(function () {
                    j = Math.max(j, d(this).css("height", "").height())
                }).height(j)
            }
        }
    }, _activate: function (f) {
        var g = this._findActive(f)[0];
        if (g === this.active[0]) {
            return
        }
        g = g || this.active[0];
        this._eventHandler({target: g, currentTarget: g, preventDefault: d.noop})
    }, _findActive: function (f) {
        return typeof f === "number" ? this.headers.eq(f) : d()
    }, _setupEvents: function (g) {
        var f = {keydown: "_keydown"};
        if (g) {
            d.each(g.split(" "), function (i, h) {
                f[h] = "_eventHandler"
            })
        }
        this._off(this.headers.add(this.headers.next()));
        this._on(this.headers, f);
        this._on(this.headers.next(), {keydown: "_panelKeyDown"});
        this._hoverable(this.headers);
        this._focusable(this.headers)
    }, _eventHandler: function (f) {
        var n = this.options, i = this.active, j = d(f.currentTarget), l = j[0] === i[0], g = l && n.collapsible, h = g ? d() : j.next(), k = i.next(), m = {oldHeader: i, oldPanel: k, newHeader: g ? d() : j, newPanel: h};
        f.preventDefault();
        if ((l && !n.collapsible) || (this._trigger("beforeActivate", f, m) === false)) {
            return
        }
        n.active = g ? false : this.headers.index(j);
        this.active = l ? d() : j;
        this._toggle(m);
        i.removeClass("ui-accordion-header-active ui-state-active");
        if (n.icons) {
            i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
        }
        if (!l) {
            j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
            if (n.icons) {
                j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
            }
            j.next().addClass("ui-accordion-content-active")
        }
    }, _toggle: function (h) {
        var f = h.newPanel, g = this.prevShow.length ? this.prevShow : h.oldPanel;
        this.prevShow.add(this.prevHide).stop(true, true);
        this.prevShow = f;
        this.prevHide = g;
        if (this.options.animate) {
            this._animate(f, g, h)
        } else {
            g.hide();
            f.show();
            this._toggleComplete(h)
        }
        g.attr({"aria-expanded": "false", "aria-hidden": "true"});
        g.prev().attr("aria-selected", "false");
        if (f.length && g.length) {
            g.prev().attr("tabIndex", -1)
        } else {
            if (f.length) {
                this.headers.filter(function () {
                    return d(this).attr("tabIndex") === 0
                }).attr("tabIndex", -1)
            }
        }
        f.attr({"aria-expanded": "true", "aria-hidden": "false"}).prev().attr({"aria-selected": "true", tabIndex: 0})
    }, _animate: function (f, n, j) {
        var m, l, i, k = this, o = 0, p = f.length && (!n.length || (f.index() < n.index())), h = this.options.animate || {}, q = p && h.down || h, g = function () {
            k._toggleComplete(j)
        };
        if (typeof q === "number") {
            i = q
        }
        if (typeof q === "string") {
            l = q
        }
        l = l || q.easing || h.easing;
        i = i || q.duration || h.duration;
        if (!n.length) {
            return f.animate(a, i, l, g)
        }
        if (!f.length) {
            return n.animate(c, i, l, g)
        }
        m = f.show().outerHeight();
        n.animate(c, {duration: i, easing: l, step: function (r, s) {
            s.now = Math.round(r)
        }});
        f.hide().animate(a, {duration: i, easing: l, complete: g, step: function (r, s) {
            s.now = Math.round(r);
            if (s.prop !== "height") {
                o += s.now
            } else {
                if (k.options.heightStyle !== "content") {
                    s.now = Math.round(m - n.outerHeight() - o);
                    o = 0
                }
            }
        }})
    }, _toggleComplete: function (g) {
        var f = g.oldPanel;
        f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
        if (f.length) {
            f.parent()[0].className = f.parent()[0].className
        }
        this._trigger("activate", null, g)
    }})
})(jQuery);
(function (a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {version: "1.10.3", defaultElement: "<input>", options: {appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, pending: 0, _create: function () {
        var f, d, g, i = this.element[0].nodeName.toLowerCase(), h = i === "textarea", e = i === "input";
        this.isMultiLine = h ? true : e ? false : this.element.prop("isContentEditable");
        this.valueMethod = this.element[h || e ? "val" : "text"];
        this.isNewMenu = true;
        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
        this._on(this.element, {keydown: function (j) {
            if (this.element.prop("readOnly")) {
                f = true;
                g = true;
                d = true;
                return
            }
            f = false;
            g = false;
            d = false;
            var k = a.ui.keyCode;
            switch (j.keyCode) {
                case k.PAGE_UP:
                    f = true;
                    this._move("previousPage", j);
                    break;
                case k.PAGE_DOWN:
                    f = true;
                    this._move("nextPage", j);
                    break;
                case k.UP:
                    f = true;
                    this._keyEvent("previous", j);
                    break;
                case k.DOWN:
                    f = true;
                    this._keyEvent("next", j);
                    break;
                case k.ENTER:
                case k.NUMPAD_ENTER:
                    if (this.menu.active) {
                        f = true;
                        j.preventDefault();
                        this.menu.select(j)
                    }
                    break;
                case k.TAB:
                    if (this.menu.active) {
                        this.menu.select(j)
                    }
                    break;
                case k.ESCAPE:
                    if (this.menu.element.is(":visible")) {
                        this._value(this.term);
                        this.close(j);
                        j.preventDefault()
                    }
                    break;
                default:
                    d = true;
                    this._searchTimeout(j);
                    break
            }
        }, keypress: function (j) {
            if (f) {
                f = false;
                if (!this.isMultiLine || this.menu.element.is(":visible")) {
                    j.preventDefault()
                }
                return
            }
            if (d) {
                return
            }
            var k = a.ui.keyCode;
            switch (j.keyCode) {
                case k.PAGE_UP:
                    this._move("previousPage", j);
                    break;
                case k.PAGE_DOWN:
                    this._move("nextPage", j);
                    break;
                case k.UP:
                    this._keyEvent("previous", j);
                    break;
                case k.DOWN:
                    this._keyEvent("next", j);
                    break
            }
        }, input: function (j) {
            if (g) {
                g = false;
                j.preventDefault();
                return
            }
            this._searchTimeout(j)
        }, focus: function () {
            this.selectedItem = null;
            this.previous = this._value()
        }, blur: function (j) {
            if (this.cancelBlur) {
                delete this.cancelBlur;
                return
            }
            clearTimeout(this.searching);
            this.close(j);
            this._change(j)
        }});
        this._initSource();
        this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(a("#suggess")).menu({role: null}).hide().data("ui-menu");
        this._on(this.menu.element, {mousedown: function (j) {
            j.preventDefault();
            this.cancelBlur = true;
            this._delay(function () {
                delete this.cancelBlur
            });
            var k = this.menu.element[0];
            if (!a(j.target).closest(".ui-menu-item").length) {
                this._delay(function () {
                    var l = this;
                    this.document.one("mousedown", function (m) {
                        if (m.target !== l.element[0] && m.target !== k && !a.contains(k, m.target)) {
                            l.close()
                        }
                    })
                })
            }
        }, menufocus: function (k, l) {
            if (this.isNewMenu) {
                this.isNewMenu = false;
                if (k.originalEvent && /^mouse/.test(k.originalEvent.type)) {
                    this.menu.blur();
                    this.document.one("mousemove", function () {
                        a(k.target).trigger(k.originalEvent)
                    });
                    return
                }
            }
            var j = l.item.data("ui-autocomplete-item");
            if (false !== this._trigger("focus", k, {item: j})) {
                if (k.originalEvent && /^key/.test(k.originalEvent.type)) {
                    this._value(j.value)
                }
            } else {
                this.liveRegion.text(j.value)
            }
        }, menuselect: function (l, m) {
            var k = m.item.data("ui-autocomplete-item"), j = this.previous;
            if (this.element[0] !== this.document[0].activeElement) {
                this.element.focus();
                this.previous = j;
                this._delay(function () {
                    this.previous = j;
                    this.selectedItem = k
                })
            }
            if (false !== this._trigger("select", l, {item: k})) {
                this._value(k.value)
            }
            this.term = this._value();
            this.close(l);
            this.selectedItem = k
        }});
        this.liveRegion = a("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
        this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _destroy: function () {
        clearTimeout(this.searching);
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
        this.menu.element.remove();
        this.liveRegion.remove()
    }, _setOption: function (d, e) {
        this._super(d, e);
        if (d === "source") {
            this._initSource()
        }
        if (d === "appendTo") {
            this.menu.element.appendTo(this._appendTo())
        }
        if (d === "disabled" && e && this.xhr) {
            this.xhr.abort()
        }
    }, _appendTo: function () {
        var d = this.options.appendTo;
        if (d) {
            d = d.jquery || d.nodeType ? a(d) : this.document.find(d).eq(0)
        }
        if (!d) {
            d = this.element.closest(".ui-front")
        }
        if (!d.length) {
            d = this.document[0].body
        }
        return d
    }, _initSource: function () {
        var f, d, e = this;
        if (a.isArray(this.options.source)) {
            f = this.options.source;
            this.source = function (h, g) {
                g(a.ui.autocomplete.filter(f, h.term))
            }
        } else {
            if (typeof this.options.source === "string") {
                d = this.options.source;
                this.source = function (h, g) {
                    if (e.xhr) {
                        e.xhr.abort()
                    }
                    e.xhr = a.ajax({url: d, data: h, dataType: "json", success: function (i) {
                        g(i)
                    }, error: function () {
                        g([])
                    }})
                }
            } else {
                this.source = this.options.source
            }
        }
    }, _searchTimeout: function (d) {
        clearTimeout(this.searching);
        this.searching = this._delay(function () {
            if (this.term !== this._value()) {
                this.selectedItem = null;
                this.search(null, d)
            }
        }, this.options.delay)
    }, search: function (e, d) {
        e = e != null ? e : this._value();
        this.term = this._value();
        if (e.length < this.options.minLength) {
            return this.close(d)
        }
        if (this._trigger("search", d) === false) {
            return
        }
        return this._search(e)
    }, _search: function (d) {
        this.pending++;
        this.element.addClass("ui-autocomplete-loading");
        this.cancelSearch = false;
        this.source({term: d}, this._response())
    }, _response: function () {
        var e = this, d = ++c;
        return function (f) {
            if (d === c) {
                e.__response(f)
            }
            e.pending--;
            if (!e.pending) {
                e.element.removeClass("ui-autocomplete-loading")
            }
        }
    }, __response: function (d) {
        if (d) {
            d = this._normalize(d)
        }
        this._trigger("response", null, {content: d});
        if (!this.options.disabled && d && d.length && !this.cancelSearch) {
            this._suggest(d);
            this._trigger("open")
        } else {
            this._close()
        }
    }, close: function (d) {
        this.cancelSearch = true;
        this._close(d)
    }, _close: function (d) {
        if (this.menu.element.is(":visible")) {
            this.menu.element.hide();
            this.menu.blur();
            this.isNewMenu = true;
            this._trigger("close", d)
        }
    }, _change: function (d) {
        if (this.previous !== this._value()) {
            this._trigger("change", d, {item: this.selectedItem})
        }
    }, _normalize: function (d) {
        if (d.length && d[0].label && d[0].value) {
            return d
        }
        return a.map(d, function (e) {
            if (typeof e === "string") {
                return{label: e, value: e}
            }
            return a.extend({label: e.label || e.value, value: e.value || e.label}, e)
        })
    }, _suggest: function (d) {
        var e = this.menu.element.empty();
        e.append("<span id='title_autocomplete'>Một vài gợi ý cho tài khoản của bạn:</span>");
        this._renderMenu(e, d);
        this.isNewMenu = true;
        this.menu.refresh();
        e.show();
        this._resizeMenu();
        e.position(a.extend({of: this.element}, this.options.position));
        if (this.options.autoFocus) {
            this.menu.next()
        }
    }, _resizeMenu: function () {
        var d = this.menu.element;
        d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (e, d) {
        var f = this;
        a.each(d, function (g, h) {
            f._renderItemData(e, h)
        })
    }, _renderItemData: function (d, e) {
        return this._renderItem(d, e).data("ui-autocomplete-item", e)
    }, _renderItem: function (d, e) {
        return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
    }, _move: function (e, d) {
        if (!this.menu.element.is(":visible")) {
            this.search(null, d);
            return
        }
        if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
            this._value(this.term);
            this.menu.blur();
            return
        }
        this.menu[e](d)
    }, widget: function () {
        return this.menu.element
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments)
    }, _keyEvent: function (e, d) {
        if (!this.isMultiLine || this.menu.element.is(":visible")) {
            this._move(e, d);
            d.preventDefault()
        }
    }});
    a.extend(a.ui.autocomplete, {escapeRegex: function (d) {
        return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (f, d) {
        var e = new RegExp(a.ui.autocomplete.escapeRegex(d), "i");
        return a.grep(f, function (g) {
            return e.test(g.label || g.value || g)
        })
    }});
    a.widget("ui.autocomplete", a.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (d) {
        return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}}, __response: function (e) {
        var d;
        this._superApply(arguments);
        if (this.options.disabled || this.cancelSearch) {
            return
        }
        if (e && e.length) {
            d = this.options.messages.results(e.length)
        } else {
            d = this.options.messages.noResults
        }
        this.liveRegion.text(d)
    }})
}(jQuery));
(function (f, b) {
    var k, e, a, h, i = "ui-button ui-widget ui-state-default ui-corner-all", c = "ui-state-hover ui-state-active ", g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function () {
        var l = f(this);
        setTimeout(function () {
            l.find(":ui-button").button("refresh")
        }, 1)
    }, d = function (m) {
        var l = m.name, n = m.form, o = f([]);
        if (l) {
            l = l.replace(/'/g, "\\'");
            if (n) {
                o = f(n).find("[name='" + l + "']")
            } else {
                o = f("[name='" + l + "']", m.ownerDocument).filter(function () {
                    return !this.form
                })
            }
        }
        return o
    };
    f.widget("ui.button", {version: "1.10.3", defaultElement: "<button>", options: {disabled: null, text: true, label: null, icons: {primary: null, secondary: null}}, _create: function () {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j);
        if (typeof this.options.disabled !== "boolean") {
            this.options.disabled = !!this.element.prop("disabled")
        } else {
            this.element.prop("disabled", this.options.disabled)
        }
        this._determineButtonType();
        this.hasTitle = !!this.buttonElement.attr("title");
        var o = this, m = this.options, p = this.type === "checkbox" || this.type === "radio", n = !p ? "ui-state-active" : "", l = "ui-state-focus";
        if (m.label === null) {
            m.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
        }
        this._hoverable(this.buttonElement);
        this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace,function () {
            if (m.disabled) {
                return
            }
            if (this === k) {
                f(this).addClass("ui-state-active")
            }
        }).bind("mouseleave" + this.eventNamespace,function () {
            if (m.disabled) {
                return
            }
            f(this).removeClass(n)
        }).bind("click" + this.eventNamespace, function (q) {
            if (m.disabled) {
                q.preventDefault();
                q.stopImmediatePropagation()
            }
        });
        this.element.bind("focus" + this.eventNamespace,function () {
            o.buttonElement.addClass(l)
        }).bind("blur" + this.eventNamespace, function () {
            o.buttonElement.removeClass(l)
        });
        if (p) {
            this.element.bind("change" + this.eventNamespace, function () {
                if (h) {
                    return
                }
                o.refresh()
            });
            this.buttonElement.bind("mousedown" + this.eventNamespace,function (q) {
                if (m.disabled) {
                    return
                }
                h = false;
                e = q.pageX;
                a = q.pageY
            }).bind("mouseup" + this.eventNamespace, function (q) {
                if (m.disabled) {
                    return
                }
                if (e !== q.pageX || a !== q.pageY) {
                    h = true
                }
            })
        }
        if (this.type === "checkbox") {
            this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (m.disabled || h) {
                    return false
                }
            })
        } else {
            if (this.type === "radio") {
                this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (m.disabled || h) {
                        return false
                    }
                    f(this).addClass("ui-state-active");
                    o.buttonElement.attr("aria-pressed", "true");
                    var q = o.element[0];
                    d(q).not(q).map(function () {
                        return f(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                })
            } else {
                this.buttonElement.bind("mousedown" + this.eventNamespace,function () {
                    if (m.disabled) {
                        return false
                    }
                    f(this).addClass("ui-state-active");
                    k = this;
                    o.document.one("mouseup", function () {
                        k = null
                    })
                }).bind("mouseup" + this.eventNamespace,function () {
                    if (m.disabled) {
                        return false
                    }
                    f(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace,function (q) {
                    if (m.disabled) {
                        return false
                    }
                    if (q.keyCode === f.ui.keyCode.SPACE || q.keyCode === f.ui.keyCode.ENTER) {
                        f(this).addClass("ui-state-active")
                    }
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                    f(this).removeClass("ui-state-active")
                });
                if (this.buttonElement.is("a")) {
                    this.buttonElement.keyup(function (q) {
                        if (q.keyCode === f.ui.keyCode.SPACE) {
                            f(this).click()
                        }
                    })
                }
            }
        }
        this._setOption("disabled", m.disabled);
        this._resetButton()
    }, _determineButtonType: function () {
        var l, n, m;
        if (this.element.is("[type=checkbox]")) {
            this.type = "checkbox"
        } else {
            if (this.element.is("[type=radio]")) {
                this.type = "radio"
            } else {
                if (this.element.is("input")) {
                    this.type = "input"
                } else {
                    this.type = "button"
                }
            }
        }
        if (this.type === "checkbox" || this.type === "radio") {
            l = this.element.parents().last();
            n = "label[for='" + this.element.attr("id") + "']";
            this.buttonElement = l.find(n);
            if (!this.buttonElement.length) {
                l = l.length ? l.siblings() : this.element.siblings();
                this.buttonElement = l.filter(n);
                if (!this.buttonElement.length) {
                    this.buttonElement = l.find(n)
                }
            }
            this.element.addClass("ui-helper-hidden-accessible");
            m = this.element.is(":checked");
            if (m) {
                this.buttonElement.addClass("ui-state-active")
            }
            this.buttonElement.prop("aria-pressed", m)
        } else {
            this.buttonElement = this.element
        }
    }, widget: function () {
        return this.buttonElement
    }, _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible");
        this.buttonElement.removeClass(i + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
        if (!this.hasTitle) {
            this.buttonElement.removeAttr("title")
        }
    }, _setOption: function (l, m) {
        this._super(l, m);
        if (l === "disabled") {
            if (m) {
                this.element.prop("disabled", true)
            } else {
                this.element.prop("disabled", false)
            }
            return
        }
        this._resetButton()
    }, refresh: function () {
        var l = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        if (l !== this.options.disabled) {
            this._setOption("disabled", l)
        }
        if (this.type === "radio") {
            d(this.element[0]).each(function () {
                if (f(this).is(":checked")) {
                    f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                } else {
                    f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }
            })
        } else {
            if (this.type === "checkbox") {
                if (this.element.is(":checked")) {
                    this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                } else {
                    this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                }
            }
        }
    }, _resetButton: function () {
        if (this.type === "input") {
            if (this.options.label) {
                this.element.val(this.options.label)
            }
            return
        }
        var p = this.buttonElement.removeClass(g), n = f("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(), m = this.options.icons, l = m.primary && m.secondary, o = [];
        if (m.primary || m.secondary) {
            if (this.options.text) {
                o.push("ui-button-text-icon" + (l ? "s" : (m.primary ? "-primary" : "-secondary")))
            }
            if (m.primary) {
                p.prepend("<span class='ui-button-icon-primary ui-icon " + m.primary + "'></span>")
            }
            if (m.secondary) {
                p.append("<span class='ui-button-icon-secondary ui-icon " + m.secondary + "'></span>")
            }
            if (!this.options.text) {
                o.push(l ? "ui-button-icons-only" : "ui-button-icon-only");
                if (!this.hasTitle) {
                    p.attr("title", f.trim(n))
                }
            }
        } else {
            o.push("ui-button-text-only")
        }
        p.addClass(o.join(" "))
    }});
    f.widget("ui.buttonset", {version: "1.10.3", options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"}, _create: function () {
        this.element.addClass("ui-buttonset")
    }, _init: function () {
        this.refresh()
    }, _setOption: function (l, m) {
        if (l === "disabled") {
            this.buttons.button("option", l, m)
        }
        this._super(l, m)
    }, refresh: function () {
        var l = this.element.css("direction") === "rtl";
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
            return f(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(l ? "ui-corner-left" : "ui-corner-right").end().end()
    }, _destroy: function () {
        this.element.removeClass("ui-buttonset");
        this.buttons.map(function () {
            return f(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }})
}(jQuery));
(function (e, g) {
    e.extend(e.ui, {datepicker: {version: "1.10.3"}});
    var f = "datepicker", c;

    function b() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: ""};
        this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false};
        e.extend(this._defaults, this.regional[""]);
        this.dpDiv = d(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    e.extend(b.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (h) {
        a(this._defaults, h || {});
        return this
    }, _attachDatepicker: function (k, h) {
        var l, j, i;
        l = k.nodeName.toLowerCase();
        j = (l === "div" || l === "span");
        if (!k.id) {
            this.uuid += 1;
            k.id = "dp" + this.uuid
        }
        i = this._newInst(e(k), j);
        i.settings = e.extend({}, h || {});
        if (l === "input") {
            this._connectDatepicker(k, i)
        } else {
            if (j) {
                this._inlineDatepicker(k, i)
            }
        }
    }, _newInst: function (i, h) {
        var j = i[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return{id: j, input: i, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: h, dpDiv: (!h ? this.dpDiv : d(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
    }, _connectDatepicker: function (j, i) {
        var h = e(j);
        i.append = e([]);
        i.trigger = e([]);
        if (h.hasClass(this.markerClassName)) {
            return
        }
        this._attachments(h, i);
        h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
        this._autoSize(i);
        e.data(j, f, i);
        if (i.settings.disabled) {
            this._disableDatepicker(j)
        }
    }, _attachments: function (j, m) {
        var i, l, h, n = this._get(m, "appendText"), k = this._get(m, "isRTL");
        if (m.append) {
            m.append.remove()
        }
        if (n) {
            m.append = e("<span class='" + this._appendClass + "'>" + n + "</span>");
            j[k ? "before" : "after"](m.append)
        }
        j.unbind("focus", this._showDatepicker);
        if (m.trigger) {
            m.trigger.remove()
        }
        i = this._get(m, "showOn");
        if (i === "focus" || i === "both") {
            j.focus(this._showDatepicker)
        }
        if (i === "button" || i === "both") {
            l = this._get(m, "buttonText");
            h = this._get(m, "buttonImage");
            m.trigger = e(this._get(m, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({src: h, alt: l, title: l}) : e("<button type='button'></button>").addClass(this._triggerClass).html(!h ? l : e("<img/>").attr({src: h, alt: l, title: l})));
            j[k ? "before" : "after"](m.trigger);
            m.trigger.click(function () {
                if (e.datepicker._datepickerShowing && e.datepicker._lastInput === j[0]) {
                    e.datepicker._hideDatepicker()
                } else {
                    if (e.datepicker._datepickerShowing && e.datepicker._lastInput !== j[0]) {
                        e.datepicker._hideDatepicker();
                        e.datepicker._showDatepicker(j[0])
                    } else {
                        e.datepicker._showDatepicker(j[0])
                    }
                }
                return false
            })
        }
    }, _autoSize: function (o) {
        if (this._get(o, "autoSize") && !o.inline) {
            var l, j, k, n, m = new Date(2009, 12 - 1, 20), h = this._get(o, "dateFormat");
            if (h.match(/[DM]/)) {
                l = function (i) {
                    j = 0;
                    k = 0;
                    for (n = 0; n < i.length; n++) {
                        if (i[n].length > j) {
                            j = i[n].length;
                            k = n
                        }
                    }
                    return k
                };
                m.setMonth(l(this._get(o, (h.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                m.setDate(l(this._get(o, (h.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - m.getDay())
            }
            o.input.attr("size", this._formatDate(o, m).length)
        }
    }, _inlineDatepicker: function (i, h) {
        var j = e(i);
        if (j.hasClass(this.markerClassName)) {
            return
        }
        j.addClass(this.markerClassName).append(h.dpDiv);
        e.data(i, f, h);
        this._setDate(h, this._getDefaultDate(h), true);
        this._updateDatepicker(h);
        this._updateAlternate(h);
        if (h.settings.disabled) {
            this._disableDatepicker(i)
        }
        h.dpDiv.css("display", "block")
    }, _dialogDatepicker: function (o, i, m, j, n) {
        var h, r, l, q, p, k = this._dialogInst;
        if (!k) {
            this.uuid += 1;
            h = "dp" + this.uuid;
            this._dialogInput = e("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>");
            this._dialogInput.keydown(this._doKeyDown);
            e("body").append(this._dialogInput);
            k = this._dialogInst = this._newInst(this._dialogInput, false);
            k.settings = {};
            e.data(this._dialogInput[0], f, k)
        }
        a(k.settings, j || {});
        i = (i && i.constructor === Date ? this._formatDate(k, i) : i);
        this._dialogInput.val(i);
        this._pos = (n ? (n.length ? n : [n.pageX, n.pageY]) : null);
        if (!this._pos) {
            r = document.documentElement.clientWidth;
            l = document.documentElement.clientHeight;
            q = document.documentElement.scrollLeft || document.body.scrollLeft;
            p = document.documentElement.scrollTop || document.body.scrollTop;
            this._pos = [(r / 2) - 100 + q, (l / 2) - 150 + p]
        }
        this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
        k.settings.onSelect = m;
        this._inDialog = true;
        this.dpDiv.addClass(this._dialogClass);
        this._showDatepicker(this._dialogInput[0]);
        if (e.blockUI) {
            e.blockUI(this.dpDiv)
        }
        e.data(this._dialogInput[0], f, k);
        return this
    }, _destroyDatepicker: function (j) {
        var k, h = e(j), i = e.data(j, f);
        if (!h.hasClass(this.markerClassName)) {
            return
        }
        k = j.nodeName.toLowerCase();
        e.removeData(j, f);
        if (k === "input") {
            i.append.remove();
            i.trigger.remove();
            h.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
        } else {
            if (k === "div" || k === "span") {
                h.removeClass(this.markerClassName).empty()
            }
        }
    }, _enableDatepicker: function (k) {
        var l, j, h = e(k), i = e.data(k, f);
        if (!h.hasClass(this.markerClassName)) {
            return
        }
        l = k.nodeName.toLowerCase();
        if (l === "input") {
            k.disabled = false;
            i.trigger.filter("button").each(function () {
                this.disabled = false
            }).end().filter("img").css({opacity: "1.0", cursor: ""})
        } else {
            if (l === "div" || l === "span") {
                j = h.children("." + this._inlineClass);
                j.children().removeClass("ui-state-disabled");
                j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
            }
        }
        this._disabledInputs = e.map(this._disabledInputs, function (m) {
            return(m === k ? null : m)
        })
    }, _disableDatepicker: function (k) {
        var l, j, h = e(k), i = e.data(k, f);
        if (!h.hasClass(this.markerClassName)) {
            return
        }
        l = k.nodeName.toLowerCase();
        if (l === "input") {
            k.disabled = true;
            i.trigger.filter("button").each(function () {
                this.disabled = true
            }).end().filter("img").css({opacity: "0.5", cursor: "default"})
        } else {
            if (l === "div" || l === "span") {
                j = h.children("." + this._inlineClass);
                j.children().addClass("ui-state-disabled");
                j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
            }
        }
        this._disabledInputs = e.map(this._disabledInputs, function (m) {
            return(m === k ? null : m)
        });
        this._disabledInputs[this._disabledInputs.length] = k
    }, _isDisabledDatepicker: function (j) {
        if (!j) {
            return false
        }
        for (var h = 0; h < this._disabledInputs.length; h++) {
            if (this._disabledInputs[h] === j) {
                return true
            }
        }
        return false
    }, _getInst: function (i) {
        try {
            return e.data(i, f)
        } catch (h) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (n, i, m) {
        var j, h, l, o, k = this._getInst(n);
        if (arguments.length === 2 && typeof i === "string") {
            return(i === "defaults" ? e.extend({}, e.datepicker._defaults) : (k ? (i === "all" ? e.extend({}, k.settings) : this._get(k, i)) : null))
        }
        j = i || {};
        if (typeof i === "string") {
            j = {};
            j[i] = m
        }
        if (k) {
            if (this._curInst === k) {
                this._hideDatepicker()
            }
            h = this._getDateDatepicker(n, true);
            l = this._getMinMaxDate(k, "min");
            o = this._getMinMaxDate(k, "max");
            a(k.settings, j);
            if (l !== null && j.dateFormat !== g && j.minDate === g) {
                k.settings.minDate = this._formatDate(k, l)
            }
            if (o !== null && j.dateFormat !== g && j.maxDate === g) {
                k.settings.maxDate = this._formatDate(k, o)
            }
            if ("disabled" in j) {
                if (j.disabled) {
                    this._disableDatepicker(n)
                } else {
                    this._enableDatepicker(n)
                }
            }
            this._attachments(e(n), k);
            this._autoSize(k);
            this._setDate(k, h);
            this._updateAlternate(k);
            this._updateDatepicker(k)
        }
    }, _changeDatepicker: function (j, h, i) {
        this._optionDatepicker(j, h, i)
    }, _refreshDatepicker: function (i) {
        var h = this._getInst(i);
        if (h) {
            this._updateDatepicker(h)
        }
    }, _setDateDatepicker: function (j, h) {
        var i = this._getInst(j);
        if (i) {
            this._setDate(i, h);
            this._updateDatepicker(i);
            this._updateAlternate(i)
        }
    }, _getDateDatepicker: function (j, h) {
        var i = this._getInst(j);
        if (i && !i.inline) {
            this._setDateFromField(i, h)
        }
        return(i ? this._getDate(i) : null)
    }, _doKeyDown: function (k) {
        var i, h, m, l = e.datepicker._getInst(k.target), n = true, j = l.dpDiv.is(".ui-datepicker-rtl");
        l._keyEvent = true;
        if (e.datepicker._datepickerShowing) {
            switch (k.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker();
                    n = false;
                    break;
                case 13:
                    m = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", l.dpDiv);
                    if (m[0]) {
                        e.datepicker._selectDay(k.target, l.selectedMonth, l.selectedYear, m[0])
                    }
                    i = e.datepicker._get(l, "onSelect");
                    if (i) {
                        h = e.datepicker._formatDate(l);
                        i.apply((l.input ? l.input[0] : null), [h, l])
                    } else {
                        e.datepicker._hideDatepicker()
                    }
                    return false;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(k.target, (k.ctrlKey ? -e.datepicker._get(l, "stepBigMonths") : -e.datepicker._get(l, "stepMonths")), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(k.target, (k.ctrlKey ? +e.datepicker._get(l, "stepBigMonths") : +e.datepicker._get(l, "stepMonths")), "M");
                    break;
                case 35:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._clearDate(k.target)
                    }
                    n = k.ctrlKey || k.metaKey;
                    break;
                case 36:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._gotoToday(k.target)
                    }
                    n = k.ctrlKey || k.metaKey;
                    break;
                case 37:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._adjustDate(k.target, (j ? +1 : -1), "D")
                    }
                    n = k.ctrlKey || k.metaKey;
                    if (k.originalEvent.altKey) {
                        e.datepicker._adjustDate(k.target, (k.ctrlKey ? -e.datepicker._get(l, "stepBigMonths") : -e.datepicker._get(l, "stepMonths")), "M")
                    }
                    break;
                case 38:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._adjustDate(k.target, -7, "D")
                    }
                    n = k.ctrlKey || k.metaKey;
                    break;
                case 39:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._adjustDate(k.target, (j ? -1 : +1), "D")
                    }
                    n = k.ctrlKey || k.metaKey;
                    if (k.originalEvent.altKey) {
                        e.datepicker._adjustDate(k.target, (k.ctrlKey ? +e.datepicker._get(l, "stepBigMonths") : +e.datepicker._get(l, "stepMonths")), "M")
                    }
                    break;
                case 40:
                    if (k.ctrlKey || k.metaKey) {
                        e.datepicker._adjustDate(k.target, +7, "D")
                    }
                    n = k.ctrlKey || k.metaKey;
                    break;
                default:
                    n = false
            }
        } else {
            if (k.keyCode === 36 && k.ctrlKey) {
                e.datepicker._showDatepicker(this)
            } else {
                n = false
            }
        }
        if (n) {
            k.preventDefault();
            k.stopPropagation()
        }
    }, _doKeyPress: function (j) {
        var i, h, k = e.datepicker._getInst(j.target);
        if (e.datepicker._get(k, "constrainInput")) {
            i = e.datepicker._possibleChars(e.datepicker._get(k, "dateFormat"));
            h = String.fromCharCode(j.charCode == null ? j.keyCode : j.charCode);
            return j.ctrlKey || j.metaKey || (h < " " || !i || i.indexOf(h) > -1)
        }
    }, _doKeyUp: function (j) {
        var h, k = e.datepicker._getInst(j.target);
        if (k.input.val() !== k.lastVal) {
            try {
                h = e.datepicker.parseDate(e.datepicker._get(k, "dateFormat"), (k.input ? k.input.val() : null), e.datepicker._getFormatConfig(k));
                if (h) {
                    e.datepicker._setDateFromField(k);
                    e.datepicker._updateAlternate(k);
                    e.datepicker._updateDatepicker(k)
                }
            } catch (i) {
            }
        }
        return true
    }, _showDatepicker: function (i) {
        i = i.target || i;
        if (i.nodeName.toLowerCase() !== "input") {
            i = e("input", i.parentNode)[0]
        }
        if (e.datepicker._isDisabledDatepicker(i) || e.datepicker._lastInput === i) {
            return
        }
        var k, o, j, m, n, h, l;
        k = e.datepicker._getInst(i);
        if (e.datepicker._curInst && e.datepicker._curInst !== k) {
            e.datepicker._curInst.dpDiv.stop(true, true);
            if (k && e.datepicker._datepickerShowing) {
                e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
            }
        }
        o = e.datepicker._get(k, "beforeShow");
        j = o ? o.apply(i, [i, k]) : {};
        if (j === false) {
            return
        }
        a(k.settings, j);
        k.lastVal = null;
        e.datepicker._lastInput = i;
        e.datepicker._setDateFromField(k);
        if (e.datepicker._inDialog) {
            i.value = ""
        }
        if (!e.datepicker._pos) {
            e.datepicker._pos = e.datepicker._findPos(i);
            e.datepicker._pos[1] += i.offsetHeight
        }
        m = false;
        e(i).parents().each(function () {
            m |= e(this).css("position") === "fixed";
            return !m
        });
        n = {left: e.datepicker._pos[0], top: e.datepicker._pos[1]};
        e.datepicker._pos = null;
        k.dpDiv.empty();
        k.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
        e.datepicker._updateDatepicker(k);
        n = e.datepicker._checkOffset(k, n, m);
        k.dpDiv.css({position: (e.datepicker._inDialog && e.blockUI ? "static" : (m ? "fixed" : "absolute")), display: "none", left: n.left + "px", top: n.top + "px"});
        if (!k.inline) {
            h = e.datepicker._get(k, "showAnim");
            l = e.datepicker._get(k, "duration");
            k.dpDiv.zIndex(e(i).zIndex() + 1);
            e.datepicker._datepickerShowing = true;
            if (e.effects && e.effects.effect[h]) {
                k.dpDiv.show(h, e.datepicker._get(k, "showOptions"), l)
            } else {
                k.dpDiv[h || "show"](h ? l : null)
            }
            if (e.datepicker._shouldFocusInput(k)) {
                k.input.focus()
            }
            e.datepicker._curInst = k
        }
    }, _updateDatepicker: function (j) {
        this.maxRows = 4;
        c = j;
        j.dpDiv.empty().append(this._generateHTML(j));
        this._attachHandlers(j);
        j.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var l, h = this._getNumberOfMonths(j), k = h[1], i = 17;
        j.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
        if (k > 1) {
            j.dpDiv.addClass("ui-datepicker-multi-" + k).css("width", (i * k) + "em")
        }
        j.dpDiv[(h[0] !== 1 || h[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
        j.dpDiv[(this._get(j, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
        if (j === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(j)) {
            j.input.focus()
        }
        if (j.yearshtml) {
            l = j.yearshtml;
            setTimeout(function () {
                if (l === j.yearshtml && j.yearshtml) {
                    j.dpDiv.find("select.ui-datepicker-year:first").replaceWith(j.yearshtml)
                }
                l = j.yearshtml = null
            }, 0)
        }
    }, _shouldFocusInput: function (h) {
        return h.input && h.input.is(":visible") && !h.input.is(":disabled") && !h.input.is(":focus")
    }, _checkOffset: function (m, k, j) {
        var l = m.dpDiv.outerWidth(), p = m.dpDiv.outerHeight(), o = m.input ? m.input.outerWidth() : 0, h = m.input ? m.input.outerHeight() : 0, n = document.documentElement.clientWidth + (j ? 0 : e(document).scrollLeft()), i = document.documentElement.clientHeight + (j ? 0 : e(document).scrollTop());
        k.left -= (this._get(m, "isRTL") ? (l - o) : 0);
        k.left -= (j && k.left === m.input.offset().left) ? e(document).scrollLeft() : 0;
        k.top -= (j && k.top === (m.input.offset().top + h)) ? e(document).scrollTop() : 0;
        k.left -= Math.min(k.left, (k.left + l > n && n > l) ? Math.abs(k.left + l - n) : 0);
        k.top -= Math.min(k.top, (k.top + p > i && i > p) ? Math.abs(p + h) : 0);
        return k
    }, _findPos: function (k) {
        var h, j = this._getInst(k), i = this._get(j, "isRTL");
        while (k && (k.type === "hidden" || k.nodeType !== 1 || e.expr.filters.hidden(k))) {
            k = k[i ? "previousSibling" : "nextSibling"]
        }
        h = e(k).offset();
        return[h.left, h.top]
    }, _hideDatepicker: function (j) {
        var i, m, l, h, k = this._curInst;
        if (!k || (j && k !== e.data(j, f))) {
            return
        }
        if (this._datepickerShowing) {
            i = this._get(k, "showAnim");
            m = this._get(k, "duration");
            l = function () {
                e.datepicker._tidyDialog(k)
            };
            if (e.effects && (e.effects.effect[i] || e.effects[i])) {
                k.dpDiv.hide(i, e.datepicker._get(k, "showOptions"), m, l)
            } else {
                k.dpDiv[(i === "slideDown" ? "slideUp" : (i === "fadeIn" ? "fadeOut" : "hide"))]((i ? m : null), l)
            }
            if (!i) {
                l()
            }
            this._datepickerShowing = false;
            h = this._get(k, "onClose");
            if (h) {
                h.apply((k.input ? k.input[0] : null), [(k.input ? k.input.val() : ""), k])
            }
            this._lastInput = null;
            if (this._inDialog) {
                this._dialogInput.css({position: "absolute", left: "0", top: "-100px"});
                if (e.blockUI) {
                    e.unblockUI();
                    e("body").append(this.dpDiv)
                }
            }
            this._inDialog = false
        }
    }, _tidyDialog: function (h) {
        h.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (i) {
        if (!e.datepicker._curInst) {
            return
        }
        var h = e(i.target), j = e.datepicker._getInst(h[0]);
        if (((h[0].id !== e.datepicker._mainDivId && h.parents("#" + e.datepicker._mainDivId).length === 0 && !h.hasClass(e.datepicker.markerClassName) && !h.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && !(e.datepicker._inDialog && e.blockUI))) || (h.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== j)) {
            e.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (l, k, j) {
        var i = e(l), h = this._getInst(i[0]);
        if (this._isDisabledDatepicker(i[0])) {
            return
        }
        this._adjustInstDate(h, k + (j === "M" ? this._get(h, "showCurrentAtPos") : 0), j);
        this._updateDatepicker(h)
    }, _gotoToday: function (k) {
        var h, j = e(k), i = this._getInst(j[0]);
        if (this._get(i, "gotoCurrent") && i.currentDay) {
            i.selectedDay = i.currentDay;
            i.drawMonth = i.selectedMonth = i.currentMonth;
            i.drawYear = i.selectedYear = i.currentYear
        } else {
            h = new Date();
            i.selectedDay = h.getDate();
            i.drawMonth = i.selectedMonth = h.getMonth();
            i.drawYear = i.selectedYear = h.getFullYear()
        }
        this._notifyChange(i);
        this._adjustDate(j)
    }, _selectMonthYear: function (l, h, k) {
        var j = e(l), i = this._getInst(j[0]);
        i["selected" + (k === "M" ? "Month" : "Year")] = i["draw" + (k === "M" ? "Month" : "Year")] = parseInt(h.options[h.selectedIndex].value, 10);
        this._notifyChange(i);
        this._adjustDate(j)
    }, _selectDay: function (m, k, h, l) {
        var i, j = e(m);
        if (e(l).hasClass(this._unselectableClass) || this._isDisabledDatepicker(j[0])) {
            return
        }
        i = this._getInst(j[0]);
        i.selectedDay = i.currentDay = e("a", l).html();
        i.selectedMonth = i.currentMonth = k;
        i.selectedYear = i.currentYear = h;
        this._selectDate(m, this._formatDate(i, i.currentDay, i.currentMonth, i.currentYear))
    }, _clearDate: function (i) {
        var h = e(i);
        this._selectDate(h, "")
    }, _selectDate: function (l, h) {
        var i, k = e(l), j = this._getInst(k[0]);
        h = (h != null ? h : this._formatDate(j));
        if (j.input) {
            j.input.val(h)
        }
        this._updateAlternate(j);
        i = this._get(j, "onSelect");
        if (i) {
            i.apply((j.input ? j.input[0] : null), [h, j])
        } else {
            if (j.input) {
                j.input.trigger("change")
            }
        }
        if (j.inline) {
            this._updateDatepicker(j)
        } else {
            this._hideDatepicker();
            this._lastInput = j.input[0];
            if (typeof(j.input[0]) !== "object") {
                j.input.focus()
            }
            this._lastInput = null
        }
    }, _updateAlternate: function (l) {
        var k, j, h, i = this._get(l, "altField");
        if (i) {
            k = this._get(l, "altFormat") || this._get(l, "dateFormat");
            j = this._getDate(l);
            h = this.formatDate(k, j, this._getFormatConfig(l));
            e(i).each(function () {
                e(this).val(h)
            })
        }
    }, noWeekends: function (i) {
        var h = i.getDay();
        return[(h > 0 && h < 6), ""]
    }, iso8601Week: function (h) {
        var i, j = new Date(h.getTime());
        j.setDate(j.getDate() + 4 - (j.getDay() || 7));
        i = j.getTime();
        j.setMonth(0);
        j.setDate(1);
        return Math.floor(Math.round((i - j) / 86400000) / 7) + 1
    }, parseDate: function (x, s, z) {
        if (x == null || s == null) {
            throw"Invalid arguments"
        }
        s = (typeof s === "object" ? s.toString() : s + "");
        if (s === "") {
            return null
        }
        var k, u, i, y = 0, n = (z ? z.shortYearCutoff : null) || this._defaults.shortYearCutoff, j = (typeof n !== "string" ? n : new Date().getFullYear() % 100 + parseInt(n, 10)), q = (z ? z.dayNamesShort : null) || this._defaults.dayNamesShort, B = (z ? z.dayNames : null) || this._defaults.dayNames, h = (z ? z.monthNamesShort : null) || this._defaults.monthNamesShort, l = (z ? z.monthNames : null) || this._defaults.monthNames, m = -1, C = -1, w = -1, p = -1, v = false, A, r = function (E) {
            var F = (k + 1 < x.length && x.charAt(k + 1) === E);
            if (F) {
                k++
            }
            return F
        }, D = function (G) {
            var E = r(G), H = (G === "@" ? 14 : (G === "!" ? 20 : (G === "y" && E ? 4 : (G === "o" ? 3 : 2)))), I = new RegExp("^\\d{1," + H + "}"), F = s.substring(y).match(I);
            if (!F) {
                throw"Missing number at position " + y
            }
            y += F[0].length;
            return parseInt(F[0], 10)
        }, o = function (F, G, I) {
            var E = -1, H = e.map(r(F) ? I : G,function (K, J) {
                return[
                    [J, K]
                ]
            }).sort(function (K, J) {
                return -(K[1].length - J[1].length)
            });
            e.each(H, function (K, L) {
                var J = L[1];
                if (s.substr(y, J.length).toLowerCase() === J.toLowerCase()) {
                    E = L[0];
                    y += J.length;
                    return false
                }
            });
            if (E !== -1) {
                return E + 1
            } else {
                throw"Unknown name at position " + y
            }
        }, t = function () {
            if (s.charAt(y) !== x.charAt(k)) {
                throw"Unexpected literal at position " + y
            }
            y++
        };
        for (k = 0; k < x.length; k++) {
            if (v) {
                if (x.charAt(k) === "'" && !r("'")) {
                    v = false
                } else {
                    t()
                }
            } else {
                switch (x.charAt(k)) {
                    case"d":
                        w = D("d");
                        break;
                    case"D":
                        o("D", q, B);
                        break;
                    case"o":
                        p = D("o");
                        break;
                    case"m":
                        C = D("m");
                        break;
                    case"M":
                        C = o("M", h, l);
                        break;
                    case"y":
                        m = D("y");
                        break;
                    case"@":
                        A = new Date(D("@"));
                        m = A.getFullYear();
                        C = A.getMonth() + 1;
                        w = A.getDate();
                        break;
                    case"!":
                        A = new Date((D("!") - this._ticksTo1970) / 10000);
                        m = A.getFullYear();
                        C = A.getMonth() + 1;
                        w = A.getDate();
                        break;
                    case"'":
                        if (r("'")) {
                            t()
                        } else {
                            v = true
                        }
                        break;
                    default:
                        t()
                }
            }
        }
        if (y < s.length) {
            i = s.substr(y);
            if (!/^\s+/.test(i)) {
                throw"Extra/unparsed characters found in date: " + i
            }
        }
        if (m === -1) {
            m = new Date().getFullYear()
        } else {
            if (m < 100) {
                m += new Date().getFullYear() - new Date().getFullYear() % 100 + (m <= j ? 0 : -100)
            }
        }
        if (p > -1) {
            C = 1;
            w = p;
            do {
                u = this._getDaysInMonth(m, C - 1);
                if (w <= u) {
                    break
                }
                C++;
                w -= u
            } while (true)
        }
        A = this._daylightSavingAdjust(new Date(m, C - 1, w));
        if (A.getFullYear() !== m || A.getMonth() + 1 !== C || A.getDate() !== w) {
            throw"Invalid date"
        }
        return A
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000), formatDate: function (q, k, l) {
        if (!k) {
            return""
        }
        var s, t = (l ? l.dayNamesShort : null) || this._defaults.dayNamesShort, i = (l ? l.dayNames : null) || this._defaults.dayNames, o = (l ? l.monthNamesShort : null) || this._defaults.monthNamesShort, m = (l ? l.monthNames : null) || this._defaults.monthNames, r = function (u) {
            var v = (s + 1 < q.length && q.charAt(s + 1) === u);
            if (v) {
                s++
            }
            return v
        }, h = function (w, x, u) {
            var v = "" + x;
            if (r(w)) {
                while (v.length < u) {
                    v = "0" + v
                }
            }
            return v
        }, n = function (u, w, v, x) {
            return(r(u) ? x[w] : v[w])
        }, j = "", p = false;
        if (k) {
            for (s = 0; s < q.length; s++) {
                if (p) {
                    if (q.charAt(s) === "'" && !r("'")) {
                        p = false
                    } else {
                        j += q.charAt(s)
                    }
                } else {
                    switch (q.charAt(s)) {
                        case"d":
                            j += h("d", k.getDate(), 2);
                            break;
                        case"D":
                            j += n("D", k.getDay(), t, i);
                            break;
                        case"o":
                            j += h("o", Math.round((new Date(k.getFullYear(), k.getMonth(), k.getDate()).getTime() - new Date(k.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case"m":
                            j += h("m", k.getMonth() + 1, 2);
                            break;
                        case"M":
                            j += n("M", k.getMonth(), o, m);
                            break;
                        case"y":
                            j += (r("y") ? k.getFullYear() : (k.getYear() % 100 < 10 ? "0" : "") + k.getYear() % 100);
                            break;
                        case"@":
                            j += k.getTime();
                            break;
                        case"!":
                            j += k.getTime() * 10000 + this._ticksTo1970;
                            break;
                        case"'":
                            if (r("'")) {
                                j += "'"
                            } else {
                                p = true
                            }
                            break;
                        default:
                            j += q.charAt(s)
                    }
                }
            }
        }
        return j
    }, _possibleChars: function (l) {
        var k, j = "", i = false, h = function (m) {
            var n = (k + 1 < l.length && l.charAt(k + 1) === m);
            if (n) {
                k++
            }
            return n
        };
        for (k = 0; k < l.length; k++) {
            if (i) {
                if (l.charAt(k) === "'" && !h("'")) {
                    i = false
                } else {
                    j += l.charAt(k)
                }
            } else {
                switch (l.charAt(k)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        j += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        if (h("'")) {
                            j += "'"
                        } else {
                            i = true
                        }
                        break;
                    default:
                        j += l.charAt(k)
                }
            }
        }
        return j
    }, _get: function (i, h) {
        return i.settings[h] !== g ? i.settings[h] : this._defaults[h]
    }, _setDateFromField: function (m, j) {
        if (m.input.val() === m.lastVal) {
            return
        }
        var h = this._get(m, "dateFormat"), o = m.lastVal = m.input ? m.input.val() : null, n = this._getDefaultDate(m), i = n, k = this._getFormatConfig(m);
        try {
            i = this.parseDate(h, o, k) || n
        } catch (l) {
            o = (j ? "" : o)
        }
        m.selectedDay = i.getDate();
        m.drawMonth = m.selectedMonth = i.getMonth();
        m.drawYear = m.selectedYear = i.getFullYear();
        m.currentDay = (o ? i.getDate() : 0);
        m.currentMonth = (o ? i.getMonth() : 0);
        m.currentYear = (o ? i.getFullYear() : 0);
        this._adjustInstDate(m)
    }, _getDefaultDate: function (h) {
        return this._restrictMinMax(h, this._determineDate(h, this._get(h, "defaultDate"), new Date()))
    }, _determineDate: function (l, i, m) {
        var k = function (o) {
            var n = new Date();
            n.setDate(n.getDate() + o);
            return n
        }, j = function (u) {
            try {
                return e.datepicker.parseDate(e.datepicker._get(l, "dateFormat"), u, e.datepicker._getFormatConfig(l))
            } catch (t) {
            }
            var o = (u.toLowerCase().match(/^c/) ? e.datepicker._getDate(l) : null) || new Date(), p = o.getFullYear(), s = o.getMonth(), n = o.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, q = r.exec(u);
            while (q) {
                switch (q[2] || "d") {
                    case"d":
                    case"D":
                        n += parseInt(q[1], 10);
                        break;
                    case"w":
                    case"W":
                        n += parseInt(q[1], 10) * 7;
                        break;
                    case"m":
                    case"M":
                        s += parseInt(q[1], 10);
                        n = Math.min(n, e.datepicker._getDaysInMonth(p, s));
                        break;
                    case"y":
                    case"Y":
                        p += parseInt(q[1], 10);
                        n = Math.min(n, e.datepicker._getDaysInMonth(p, s));
                        break
                }
                q = r.exec(u)
            }
            return new Date(p, s, n)
        }, h = (i == null || i === "" ? m : (typeof i === "string" ? j(i) : (typeof i === "number" ? (isNaN(i) ? m : k(i)) : new Date(i.getTime()))));
        h = (h && h.toString() === "Invalid Date" ? m : h);
        if (h) {
            h.setHours(0);
            h.setMinutes(0);
            h.setSeconds(0);
            h.setMilliseconds(0)
        }
        return this._daylightSavingAdjust(h)
    }, _daylightSavingAdjust: function (h) {
        if (!h) {
            return null
        }
        h.setHours(h.getHours() > 12 ? h.getHours() + 2 : 0);
        return h
    }, _setDate: function (n, k, m) {
        var h = !k, j = n.selectedMonth, l = n.selectedYear, i = this._restrictMinMax(n, this._determineDate(n, k, new Date()));
        n.selectedDay = n.currentDay = i.getDate();
        n.drawMonth = n.selectedMonth = n.currentMonth = i.getMonth();
        n.drawYear = n.selectedYear = n.currentYear = i.getFullYear();
        if ((j !== n.selectedMonth || l !== n.selectedYear) && !m) {
            this._notifyChange(n)
        }
        this._adjustInstDate(n);
        if (n.input) {
            n.input.val(h ? "" : this._formatDate(n))
        }
    }, _getDate: function (i) {
        var h = (!i.currentYear || (i.input && i.input.val() === "") ? null : this._daylightSavingAdjust(new Date(i.currentYear, i.currentMonth, i.currentDay)));
        return h
    }, _attachHandlers: function (i) {
        var h = this._get(i, "stepMonths"), j = "#" + i.id.replace(/\\\\/g, "\\");
        i.dpDiv.find("[data-handler]").map(function () {
            var k = {prev: function () {
                e.datepicker._adjustDate(j, -h, "M")
            }, next: function () {
                e.datepicker._adjustDate(j, +h, "M")
            }, hide: function () {
                e.datepicker._hideDatepicker()
            }, today: function () {
                e.datepicker._gotoToday(j)
            }, selectDay: function () {
                e.datepicker._selectDay(j, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                return false
            }, selectMonth: function () {
                e.datepicker._selectMonthYear(j, this, "M");
                return false
            }, selectYear: function () {
                e.datepicker._selectMonthYear(j, this, "Y");
                return false
            }};
            e(this).bind(this.getAttribute("data-event"), k[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (X) {
        var A, z, S, K, l, ab, V, O, ae, I, ai, s, u, t, i, aa, q, D, ad, Q, aj, C, H, r, m, T, M, P, N, p, F, v, W, Z, k, ac, ag, L, w, Y = new Date(), B = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth(), Y.getDate())), af = this._get(X, "isRTL"), ah = this._get(X, "showButtonPanel"), R = this._get(X, "hideIfNoPrevNext"), G = this._get(X, "navigationAsDateFormat"), x = this._getNumberOfMonths(X), o = this._get(X, "showCurrentAtPos"), J = this._get(X, "stepMonths"), E = (x[0] !== 1 || x[1] !== 1), j = this._daylightSavingAdjust((!X.currentDay ? new Date(9999, 9, 9) : new Date(X.currentYear, X.currentMonth, X.currentDay))), n = this._getMinMaxDate(X, "min"), y = this._getMinMaxDate(X, "max"), h = X.drawMonth - o, U = X.drawYear;
        if (h < 0) {
            h += 12;
            U--
        }
        if (y) {
            A = this._daylightSavingAdjust(new Date(y.getFullYear(), y.getMonth() - (x[0] * x[1]) + 1, y.getDate()));
            A = (n && A < n ? n : A);
            while (this._daylightSavingAdjust(new Date(U, h, 1)) > A) {
                h--;
                if (h < 0) {
                    h = 11;
                    U--
                }
            }
        }
        X.drawMonth = h;
        X.drawYear = U;
        z = this._get(X, "prevText");
        z = (!G ? z : this.formatDate(z, this._daylightSavingAdjust(new Date(U, h - J, 1)), this._getFormatConfig(X)));
        S = (this._canAdjustMonth(X, -1, U, h) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + z + "'><span class='ui-icon ui-icon-circle-triangle-" + (af ? "e" : "w") + "'>" + z + "</span></a>" : (R ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + z + "'><span class='ui-icon ui-icon-circle-triangle-" + (af ? "e" : "w") + "'>" + z + "</span></a>"));
        K = this._get(X, "nextText");
        K = (!G ? K : this.formatDate(K, this._daylightSavingAdjust(new Date(U, h + J, 1)), this._getFormatConfig(X)));
        l = (this._canAdjustMonth(X, +1, U, h) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + K + "'><span class='ui-icon ui-icon-circle-triangle-" + (af ? "w" : "e") + "'>" + K + "</span></a>" : (R ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + K + "'><span class='ui-icon ui-icon-circle-triangle-" + (af ? "w" : "e") + "'>" + K + "</span></a>"));
        ab = this._get(X, "currentText");
        V = (this._get(X, "gotoCurrent") && X.currentDay ? j : B);
        ab = (!G ? ab : this.formatDate(ab, V, this._getFormatConfig(X)));
        O = (!X.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(X, "closeText") + "</button>" : "");
        ae = (ah) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (af ? O : "") + (this._isInRange(X, V) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ab + "</button>" : "") + (af ? "" : O) + "</div>" : "";
        I = parseInt(this._get(X, "firstDay"), 10);
        I = (isNaN(I) ? 0 : I);
        ai = this._get(X, "showWeek");
        s = this._get(X, "dayNames");
        u = this._get(X, "dayNamesMin");
        t = this._get(X, "monthNames");
        i = this._get(X, "monthNamesShort");
        aa = this._get(X, "beforeShowDay");
        q = this._get(X, "showOtherMonths");
        D = this._get(X, "selectOtherMonths");
        ad = this._getDefaultDate(X);
        Q = "";
        aj;
        for (C = 0; C < x[0]; C++) {
            H = "";
            this.maxRows = 4;
            for (r = 0; r < x[1]; r++) {
                m = this._daylightSavingAdjust(new Date(U, h, X.selectedDay));
                T = " ui-corner-all";
                M = "";
                if (E) {
                    M += "<div class='ui-datepicker-group";
                    if (x[1] > 1) {
                        switch (r) {
                            case 0:
                                M += " ui-datepicker-group-first";
                                T = " ui-corner-" + (af ? "right" : "left");
                                break;
                            case x[1] - 1:
                                M += " ui-datepicker-group-last";
                                T = " ui-corner-" + (af ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle";
                                T = "";
                                break
                        }
                    }
                    M += "'>"
                }
                M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && C === 0 ? (af ? l : S) : "") + (/all|right/.test(T) && C === 0 ? (af ? S : l) : "") + this._generateMonthYearHeader(X, h, U, n, y, C > 0 || r > 0, t, i) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                P = (ai ? "<th class='ui-datepicker-week-col'>" + this._get(X, "weekHeader") + "</th>" : "");
                for (aj = 0; aj < 7; aj++) {
                    N = (aj + I) % 7;
                    P += "<th" + ((aj + I + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + s[N] + "'>" + u[N] + "</span></th>"
                }
                M += P + "</tr></thead><tbody>";
                p = this._getDaysInMonth(U, h);
                if (U === X.selectedYear && h === X.selectedMonth) {
                    X.selectedDay = Math.min(X.selectedDay, p)
                }
                F = (this._getFirstDayOfMonth(U, h) - I + 7) % 7;
                v = Math.ceil((F + p) / 7);
                W = (E ? this.maxRows > v ? this.maxRows : v : v);
                this.maxRows = W;
                Z = this._daylightSavingAdjust(new Date(U, h, 1 - F));
                for (k = 0; k < W; k++) {
                    M += "<tr>";
                    ac = (!ai ? "" : "<td class='ui-datepicker-week-col'>" + this._get(X, "calculateWeek")(Z) + "</td>");
                    for (aj = 0; aj < 7; aj++) {
                        ag = (aa ? aa.apply((X.input ? X.input[0] : null), [Z]) : [true, ""]);
                        L = (Z.getMonth() !== h);
                        w = (L && !D) || !ag[0] || (n && Z < n) || (y && Z > y);
                        ac += "<td class='" + ((aj + I + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + ((Z.getTime() === m.getTime() && h === X.selectedMonth && X._keyEvent) || (ad.getTime() === Z.getTime() && ad.getTime() === m.getTime()) ? " " + this._dayOverClass : "") + (w ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !q ? "" : " " + ag[1] + (Z.getTime() === j.getTime() ? " " + this._currentClass : "") + (Z.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!L || q) && ag[2] ? " title='" + ag[2].replace(/'/g, "&#39;") + "'" : "") + (w ? "" : " data-handler='selectDay' data-event='click' data-month='" + Z.getMonth() + "' data-year='" + Z.getFullYear() + "'") + ">" + (L && !q ? "&#xa0;" : (w ? "<span class='ui-state-default'>" + Z.getDate() + "</span>" : "<a class='ui-state-default" + (Z.getTime() === B.getTime() ? " ui-state-highlight" : "") + (Z.getTime() === j.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + Z.getDate() + "</a>")) + "</td>";
                        Z.setDate(Z.getDate() + 1);
                        Z = this._daylightSavingAdjust(Z)
                    }
                    M += ac + "</tr>"
                }
                h++;
                if (h > 11) {
                    h = 0;
                    U++
                }
                M += "</tbody></table>" + (E ? "</div>" + ((x[0] > 0 && r === x[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                H += M
            }
            Q += H
        }
        Q += ae;
        X._keyEvent = false;
        return Q
    }, _generateMonthYearHeader: function (l, j, t, n, r, u, p, h) {
        var y, i, z, w, m, v, s, o, k = this._get(l, "changeMonth"), A = this._get(l, "changeYear"), B = this._get(l, "showMonthAfterYear"), q = "<div class='ui-datepicker-title'>", x = "";
        if (u || !k) {
            x += "<span class='ui-datepicker-month'>" + p[j] + "</span>"
        } else {
            y = (n && n.getFullYear() === t);
            i = (r && r.getFullYear() === t);
            x += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
            for (z = 0; z < 12; z++) {
                if ((!y || z >= n.getMonth()) && (!i || z <= r.getMonth())) {
                    x += "<option value='" + z + "'" + (z === j ? " selected='selected'" : "") + ">" + h[z] + "</option>"
                }
            }
            x += "</select>"
        }
        if (!B) {
            q += x + (u || !(k && A) ? "&#xa0;" : "")
        }
        if (!l.yearshtml) {
            l.yearshtml = "";
            if (u || !A) {
                q += "<span class='ui-datepicker-year'>" + t + "</span>"
            } else {
                w = this._get(l, "yearRange").split(":");
                m = new Date().getFullYear();
                v = function (D) {
                    var C = (D.match(/c[+\-].*/) ? t + parseInt(D.substring(1), 10) : (D.match(/[+\-].*/) ? m + parseInt(D, 10) : parseInt(D, 10)));
                    return(isNaN(C) ? m : C)
                };
                s = v(w[0]);
                o = Math.max(s, v(w[1] || ""));
                s = (n ? Math.max(s, n.getFullYear()) : s);
                o = (r ? Math.min(o, r.getFullYear()) : o);
                l.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                for (; s <= o; s++) {
                    l.yearshtml += "<option value='" + s + "'" + (s === t ? " selected='selected'" : "") + ">" + s + "</option>"
                }
                l.yearshtml += "</select>";
                q += l.yearshtml;
                l.yearshtml = null
            }
        }
        q += this._get(l, "yearSuffix");
        if (B) {
            q += (u || !(k && A) ? "&#xa0;" : "") + x
        }
        q += "</div>";
        return q
    }, _adjustInstDate: function (k, n, m) {
        var j = k.drawYear + (m === "Y" ? n : 0), l = k.drawMonth + (m === "M" ? n : 0), h = Math.min(k.selectedDay, this._getDaysInMonth(j, l)) + (m === "D" ? n : 0), i = this._restrictMinMax(k, this._daylightSavingAdjust(new Date(j, l, h)));
        k.selectedDay = i.getDate();
        k.drawMonth = k.selectedMonth = i.getMonth();
        k.drawYear = k.selectedYear = i.getFullYear();
        if (m === "M" || m === "Y") {
            this._notifyChange(k)
        }
    }, _restrictMinMax: function (k, i) {
        var j = this._getMinMaxDate(k, "min"), l = this._getMinMaxDate(k, "max"), h = (j && i < j ? j : i);
        return(l && h > l ? l : h)
    }, _notifyChange: function (i) {
        var h = this._get(i, "onChangeMonthYear");
        if (h) {
            h.apply((i.input ? i.input[0] : null), [i.selectedYear, i.selectedMonth + 1, i])
        }
    }, _getNumberOfMonths: function (i) {
        var h = this._get(i, "numberOfMonths");
        return(h == null ? [1, 1] : (typeof h === "number" ? [1, h] : h))
    }, _getMinMaxDate: function (i, h) {
        return this._determineDate(i, this._get(i, h + "Date"), null)
    }, _getDaysInMonth: function (h, i) {
        return 32 - this._daylightSavingAdjust(new Date(h, i, 32)).getDate()
    }, _getFirstDayOfMonth: function (h, i) {
        return new Date(h, i, 1).getDay()
    }, _canAdjustMonth: function (k, m, j, l) {
        var h = this._getNumberOfMonths(k), i = this._daylightSavingAdjust(new Date(j, l + (m < 0 ? m : h[0] * h[1]), 1));
        if (m < 0) {
            i.setDate(this._getDaysInMonth(i.getFullYear(), i.getMonth()))
        }
        return this._isInRange(k, i)
    }, _isInRange: function (l, j) {
        var i, o, k = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), p = null, m = null, n = this._get(l, "yearRange");
        if (n) {
            i = n.split(":");
            o = new Date().getFullYear();
            p = parseInt(i[0], 10);
            m = parseInt(i[1], 10);
            if (i[0].match(/[+\-].*/)) {
                p += o
            }
            if (i[1].match(/[+\-].*/)) {
                m += o
            }
        }
        return((!k || j.getTime() >= k.getTime()) && (!h || j.getTime() <= h.getTime()) && (!p || j.getFullYear() >= p) && (!m || j.getFullYear() <= m))
    }, _getFormatConfig: function (h) {
        var i = this._get(h, "shortYearCutoff");
        i = (typeof i !== "string" ? i : new Date().getFullYear() % 100 + parseInt(i, 10));
        return{shortYearCutoff: i, dayNamesShort: this._get(h, "dayNamesShort"), dayNames: this._get(h, "dayNames"), monthNamesShort: this._get(h, "monthNamesShort"), monthNames: this._get(h, "monthNames")}
    }, _formatDate: function (k, h, l, j) {
        if (!h) {
            k.currentDay = k.selectedDay;
            k.currentMonth = k.selectedMonth;
            k.currentYear = k.selectedYear
        }
        var i = (h ? (typeof h === "object" ? h : this._daylightSavingAdjust(new Date(j, l, h))) : this._daylightSavingAdjust(new Date(k.currentYear, k.currentMonth, k.currentDay)));
        return this.formatDate(this._get(k, "dateFormat"), i, this._getFormatConfig(k))
    }});
    function d(i) {
        var h = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return i.delegate(h, "mouseout",function () {
            e(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                e(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                e(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(h, "mouseover", function () {
            if (!e.datepicker._isDisabledDatepicker(c.inline ? i.parent()[0] : c.input[0])) {
                e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                e(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                    e(this).addClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") !== -1) {
                    e(this).addClass("ui-datepicker-next-hover")
                }
            }
        })
    }

    function a(j, i) {
        e.extend(j, i);
        for (var h in i) {
            if (i[h] == null) {
                j[h] = i[h]
            }
        }
        return j
    }

    e.fn.datepicker = function (i) {
        if (!this.length) {
            return this
        }
        if (!e.datepicker.initialized) {
            e(document).mousedown(e.datepicker._checkExternalClick);
            e.datepicker.initialized = true
        }
        if (e("#" + e.datepicker._mainDivId).length === 0) {
            e("body").append(e.datepicker.dpDiv)
        }
        var h = Array.prototype.slice.call(arguments, 1);
        if (typeof i === "string" && (i === "isDisabled" || i === "getDate" || i === "widget")) {
            return e.datepicker["_" + i + "Datepicker"].apply(e.datepicker, [this[0]].concat(h))
        }
        if (i === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return e.datepicker["_" + i + "Datepicker"].apply(e.datepicker, [this[0]].concat(h))
        }
        return this.each(function () {
            typeof i === "string" ? e.datepicker["_" + i + "Datepicker"].apply(e.datepicker, [this].concat(h)) : e.datepicker._attachDatepicker(this, i)
        })
    };
    e.datepicker = new b();
    e.datepicker.initialized = false;
    e.datepicker.uuid = new Date().getTime();
    e.datepicker.version = "1.10.3"
})(jQuery);
(function (c, d) {
    var a = {buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true}, b = {maxHeight: true, maxWidth: true, minHeight: true, minWidth: true};
    c.widget("ui.dialog", {version: "1.10.3", options: {appendTo: "body", autoOpen: true, buttons: [], closeOnEscape: true, closeText: "close", dialogClass: "", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: {my: "center", at: "center", of: window, collision: "fit", using: function (f) {
        var e = c(this).css(f).offset().top;
        if (e < 0) {
            c(this).css("top", f.top - e)
        }
    }}, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null}, _create: function () {
        this.originalCss = {display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height};
        this.originalPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)};
        this.originalTitle = this.element.attr("title");
        this.options.title = this.options.title || this.originalTitle;
        this._createWrapper();
        this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
        this._createTitlebar();
        this._createButtonPane();
        if (this.options.draggable && c.fn.draggable) {
            this._makeDraggable()
        }
        if (this.options.resizable && c.fn.resizable) {
            this._makeResizable()
        }
        this._isOpen = false
    }, _init: function () {
        if (this.options.autoOpen) {
            this.open()
        }
    }, _appendTo: function () {
        var e = this.options.appendTo;
        if (e && (e.jquery || e.nodeType)) {
            return c(e)
        }
        return this.document.find(e || "body").eq(0)
    }, _destroy: function () {
        var f, e = this.originalPosition;
        this._destroyOverlay();
        this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
        this.uiDialog.stop(true, true).remove();
        if (this.originalTitle) {
            this.element.attr("title", this.originalTitle)
        }
        f = e.parent.children().eq(e.index);
        if (f.length && f[0] !== this.element[0]) {
            f.before(this.element)
        } else {
            e.parent.append(this.element)
        }
    }, widget: function () {
        return this.uiDialog
    }, disable: c.noop, enable: c.noop, close: function (f) {
        var e = this;
        if (!this._isOpen || this._trigger("beforeClose", f) === false) {
            return
        }
        this._isOpen = false;
        this._destroyOverlay();
        if (!this.opener.filter(":focusable").focus().length) {
            c(this.document[0].activeElement).blur()
        }
        this._hide(this.uiDialog, this.options.hide, function () {
            e._trigger("close", f)
        })
    }, isOpen: function () {
        return this._isOpen
    }, moveToTop: function () {
        this._moveToTop()
    }, _moveToTop: function (g, e) {
        var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
        if (f && !e) {
            this._trigger("focus", g)
        }
        return f
    }, open: function () {
        var e = this;
        if (this._isOpen) {
            if (this._moveToTop()) {
                this._focusTabbable()
            }
            return
        }
        this._isOpen = true;
        this.opener = c(this.document[0].activeElement);
        this._size();
        this._position();
        this._createOverlay();
        this._moveToTop(null, true);
        this._show(this.uiDialog, this.options.show, function () {
            e._focusTabbable();
            e._trigger("focus")
        });
        this._trigger("open")
    }, _focusTabbable: function () {
        var e = this.element.find("[autofocus]");
        if (!e.length) {
            e = this.element.find(":tabbable")
        }
        if (!e.length) {
            e = this.uiDialogButtonPane.find(":tabbable")
        }
        if (!e.length) {
            e = this.uiDialogTitlebarClose.filter(":tabbable")
        }
        if (!e.length) {
            e = this.uiDialog
        }
        e.eq(0).focus()
    }, _keepFocus: function (e) {
        function f() {
            var h = this.document[0].activeElement, g = this.uiDialog[0] === h || c.contains(this.uiDialog[0], h);
            if (!g) {
                this._focusTabbable()
            }
        }

        e.preventDefault();
        f.call(this);
        this._delay(f)
    }, _createWrapper: function () {
        this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1, role: "dialog"}).appendTo(this._appendTo());
        this._on(this.uiDialog, {keydown: function (g) {
            if (this.options.closeOnEscape && !g.isDefaultPrevented() && g.keyCode && g.keyCode === c.ui.keyCode.ESCAPE) {
                g.preventDefault();
                this.close(g);
                return
            }
            if (g.keyCode !== c.ui.keyCode.TAB) {
                return
            }
            var f = this.uiDialog.find(":tabbable"), h = f.filter(":first"), e = f.filter(":last");
            if ((g.target === e[0] || g.target === this.uiDialog[0]) && !g.shiftKey) {
                h.focus(1);
                g.preventDefault()
            } else {
                if ((g.target === h[0] || g.target === this.uiDialog[0]) && g.shiftKey) {
                    e.focus(1);
                    g.preventDefault()
                }
            }
        }, mousedown: function (e) {
            if (this._moveToTop(e)) {
                this._focusTabbable()
            }
        }});
        if (!this.element.find("[aria-describedby]").length) {
            this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        }
    }, _createTitlebar: function () {
        var e;
        this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
        this._on(this.uiDialogTitlebar, {mousedown: function (f) {
            if (!c(f.target).closest(".ui-dialog-titlebar-close")) {
                this.uiDialog.focus()
            }
        }});
        this.uiDialogTitlebarClose = c("<button></button>").button({label: this.options.closeText, icons: {primary: "ui-icon-closethick"}, text: false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
        this._on(this.uiDialogTitlebarClose, {click: function (f) {
            f.preventDefault();
            this.close(f)
        }});
        e = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
        this._title(e);
        this.uiDialog.attr({"aria-labelledby": e.attr("id")})
    }, _title: function (e) {
        if (!this.options.title) {
            e.html("&#160;")
        }
        e.text(this.options.title)
    }, _createButtonPane: function () {
        this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
        this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
        this._createButtons()
    }, _createButtons: function () {
        var f = this, e = this.options.buttons;
        this.uiDialogButtonPane.remove();
        this.uiButtonSet.empty();
        if (c.isEmptyObject(e) || (c.isArray(e) && !e.length)) {
            this.uiDialog.removeClass("ui-dialog-buttons");
            return
        }
        c.each(e, function (g, h) {
            var i, j;
            h = c.isFunction(h) ? {click: h, text: g} : h;
            h = c.extend({type: "button"}, h);
            i = h.click;
            h.click = function () {
                i.apply(f.element[0], arguments)
            };
            j = {icons: h.icons, text: h.showText};
            delete h.icons;
            delete h.showText;
            c("<button></button>", h).button(j).appendTo(f.uiButtonSet)
        });
        this.uiDialog.addClass("ui-dialog-buttons");
        this.uiDialogButtonPane.appendTo(this.uiDialog)
    }, _makeDraggable: function () {
        var g = this, f = this.options;

        function e(h) {
            return{position: h.position, offset: h.offset}
        }

        this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (h, i) {
            c(this).addClass("ui-dialog-dragging");
            g._blockFrames();
            g._trigger("dragStart", h, e(i))
        }, drag: function (h, i) {
            g._trigger("drag", h, e(i))
        }, stop: function (h, i) {
            f.position = [i.position.left - g.document.scrollLeft(), i.position.top - g.document.scrollTop()];
            c(this).removeClass("ui-dialog-dragging");
            g._unblockFrames();
            g._trigger("dragStop", h, e(i))
        }})
    }, _makeResizable: function () {
        var j = this, h = this.options, i = h.resizable, e = this.uiDialog.css("position"), g = typeof i === "string" ? i : "n,e,s,w,se,sw,ne,nw";

        function f(k) {
            return{originalPosition: k.originalPosition, originalSize: k.originalSize, position: k.position, size: k.size}
        }

        this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: h.maxWidth, maxHeight: h.maxHeight, minWidth: h.minWidth, minHeight: this._minHeight(), handles: g, start: function (k, l) {
            c(this).addClass("ui-dialog-resizing");
            j._blockFrames();
            j._trigger("resizeStart", k, f(l))
        }, resize: function (k, l) {
            j._trigger("resize", k, f(l))
        }, stop: function (k, l) {
            h.height = c(this).height();
            h.width = c(this).width();
            c(this).removeClass("ui-dialog-resizing");
            j._unblockFrames();
            j._trigger("resizeStop", k, f(l))
        }}).css("position", e)
    }, _minHeight: function () {
        var e = this.options;
        return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
    }, _position: function () {
        var e = this.uiDialog.is(":visible");
        if (!e) {
            this.uiDialog.show()
        }
        this.uiDialog.position(this.options.position);
        if (!e) {
            this.uiDialog.hide()
        }
    }, _setOptions: function (g) {
        var h = this, f = false, e = {};
        c.each(g, function (i, j) {
            h._setOption(i, j);
            if (i in a) {
                f = true
            }
            if (i in b) {
                e[i] = j
            }
        });
        if (f) {
            this._size();
            this._position()
        }
        if (this.uiDialog.is(":data(ui-resizable)")) {
            this.uiDialog.resizable("option", e)
        }
    }, _setOption: function (g, h) {
        var f, i, e = this.uiDialog;
        if (g === "dialogClass") {
            e.removeClass(this.options.dialogClass).addClass(h)
        }
        if (g === "disabled") {
            return
        }
        this._super(g, h);
        if (g === "appendTo") {
            this.uiDialog.appendTo(this._appendTo())
        }
        if (g === "buttons") {
            this._createButtons()
        }
        if (g === "closeText") {
            this.uiDialogTitlebarClose.button({label: "" + h})
        }
        if (g === "draggable") {
            f = e.is(":data(ui-draggable)");
            if (f && !h) {
                e.draggable("destroy")
            }
            if (!f && h) {
                this._makeDraggable()
            }
        }
        if (g === "position") {
            this._position()
        }
        if (g === "resizable") {
            i = e.is(":data(ui-resizable)");
            if (i && !h) {
                e.resizable("destroy")
            }
            if (i && typeof h === "string") {
                e.resizable("option", "handles", h)
            }
            if (!i && h !== false) {
                this._makeResizable()
            }
        }
        if (g === "title") {
            this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
        }
    }, _size: function () {
        var e, g, h, f = this.options;
        this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0});
        if (f.minWidth > f.width) {
            f.width = f.minWidth
        }
        e = this.uiDialog.css({height: "auto", width: f.width}).outerHeight();
        g = Math.max(0, f.minHeight - e);
        h = typeof f.maxHeight === "number" ? Math.max(0, f.maxHeight - e) : "none";
        if (f.height === "auto") {
            this.element.css({minHeight: g, maxHeight: h, height: "auto"})
        } else {
            this.element.height(Math.max(0, f.height - e))
        }
        if (this.uiDialog.is(":data(ui-resizable)")) {
            this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }, _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
            var e = c(this);
            return c("<div>").css({position: "absolute", width: e.outerWidth(), height: e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
        })
    }, _unblockFrames: function () {
        if (this.iframeBlocks) {
            this.iframeBlocks.remove();
            delete this.iframeBlocks
        }
    }, _allowInteraction: function (e) {
        if (c(e.target).closest(".ui-dialog").length) {
            return true
        }
        return !!c(e.target).closest(".ui-datepicker").length
    }, _createOverlay: function () {
        if (!this.options.modal) {
            return
        }
        var f = this, e = this.widgetFullName;
        if (!c.ui.dialog.overlayInstances) {
            this._delay(function () {
                if (c.ui.dialog.overlayInstances) {
                    this.document.bind("focusin.dialog", function (g) {
                        if (!f._allowInteraction(g)) {
                            g.preventDefault();
                            c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
                        }
                    })
                }
            })
        }
        this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
        this._on(this.overlay, {mousedown: "_keepFocus"});
        c.ui.dialog.overlayInstances++
    }, _destroyOverlay: function () {
        if (!this.options.modal) {
            return
        }
        if (this.overlay) {
            c.ui.dialog.overlayInstances--;
            if (!c.ui.dialog.overlayInstances) {
                this.document.unbind("focusin.dialog")
            }
            this.overlay.remove();
            this.overlay = null
        }
    }});
    c.ui.dialog.overlayInstances = 0;
    if (c.uiBackCompat !== false) {
        c.widget("ui.dialog", c.ui.dialog, {_position: function () {
            var f = this.options.position, g = [], h = [0, 0], e;
            if (f) {
                if (typeof f === "string" || (typeof f === "object" && "0" in f)) {
                    g = f.split ? f.split(" ") : [f[0], f[1]];
                    if (g.length === 1) {
                        g[1] = g[0]
                    }
                    c.each(["left", "top"], function (k, j) {
                        if (+g[k] === g[k]) {
                            h[k] = g[k];
                            g[k] = j
                        }
                    });
                    f = {my: g[0] + (h[0] < 0 ? h[0] : "+" + h[0]) + " " + g[1] + (h[1] < 0 ? h[1] : "+" + h[1]), at: g.join(" ")}
                }
                f = c.extend({}, c.ui.dialog.prototype.options.position, f)
            } else {
                f = c.ui.dialog.prototype.options.position
            }
            e = this.uiDialog.is(":visible");
            if (!e) {
                this.uiDialog.show()
            }
            this.uiDialog.position(f);
            if (!e) {
                this.uiDialog.hide()
            }
        }})
    }
}(jQuery));
(function (b, d) {
    var a = /up|down|vertical/, c = /up|left|vertical|horizontal/;
    b.effects.effect.blind = function (g, m) {
        var h = b(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], n = b.effects.setMode(h, g.mode || "hide"), r = g.direction || "up", j = a.test(r), i = j ? "height" : "width", p = j ? "top" : "left", t = c.test(r), l = {}, s = n === "show", f, e, k;
        if (h.parent().is(".ui-effects-wrapper")) {
            b.effects.save(h.parent(), q)
        } else {
            b.effects.save(h, q)
        }
        h.show();
        f = b.effects.createWrapper(h).css({overflow: "hidden"});
        e = f[i]();
        k = parseFloat(f.css(p)) || 0;
        l[i] = s ? e : 0;
        if (!t) {
            h.css(j ? "bottom" : "right", 0).css(j ? "top" : "left", "auto").css({position: "absolute"});
            l[p] = s ? k : e + k
        }
        if (s) {
            f.css(i, 0);
            if (!t) {
                f.css(p, k + e)
            }
        }
        f.animate(l, {duration: g.duration, easing: g.easing, queue: false, complete: function () {
            if (n === "hide") {
                h.hide()
            }
            b.effects.restore(h, q);
            b.effects.removeWrapper(h);
            m()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.bounce = function (m, l) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(c, m.mode || "effect"), j = k === "hide", v = k === "show", w = m.direction || "up", e = m.distance, h = m.times || 5, x = h * 2 + (v || j ? 1 : 0), u = m.duration / x, p = m.easing, f = (w === "up" || w === "down") ? "top" : "left", n = (w === "up" || w === "left"), t, g, s, q = c.queue(), r = q.length;
        if (v || j) {
            d.push("opacity")
        }
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        if (!e) {
            e = c[f === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (v) {
            s = {opacity: 1};
            s[f] = 0;
            c.css("opacity", 0).css(f, n ? -e * 2 : e * 2).animate(s, u, p)
        }
        if (j) {
            e = e / Math.pow(2, h - 1)
        }
        s = {};
        s[f] = 0;
        for (t = 0; t < h; t++) {
            g = {};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p).animate(s, u, p);
            e = j ? e * 2 : e / 2
        }
        if (j) {
            g = {opacity: 0};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p)
        }
        c.queue(function () {
            if (j) {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            l()
        });
        if (r > 1) {
            q.splice.apply(q, [1, 0].concat(q.splice(r, x + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.clip = function (f, i) {
        var g = a(this), m = ["position", "top", "bottom", "left", "right", "height", "width"], l = a.effects.setMode(g, f.mode || "hide"), p = l === "show", n = f.direction || "vertical", k = n === "vertical", q = k ? "height" : "width", j = k ? "top" : "left", h = {}, d, e, c;
        a.effects.save(g, m);
        g.show();
        d = a.effects.createWrapper(g).css({overflow: "hidden"});
        e = (g[0].tagName === "IMG") ? d : g;
        c = e[q]();
        if (p) {
            e.css(q, 0);
            e.css(j, c / 2)
        }
        h[q] = p ? c : 0;
        h[j] = p ? 0 : c / 2;
        e.animate(h, {queue: false, duration: f.duration, easing: f.easing, complete: function () {
            if (!p) {
                g.hide()
            }
            a.effects.restore(g, m);
            a.effects.removeWrapper(g);
            i()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.drop = function (d, h) {
        var e = a(this), j = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], i = a.effects.setMode(e, d.mode || "hide"), l = i === "show", k = d.direction || "left", f = (k === "up" || k === "down") ? "top" : "left", m = (k === "up" || k === "left") ? "pos" : "neg", g = {opacity: l ? 1 : 0}, c;
        a.effects.save(e, j);
        e.show();
        a.effects.createWrapper(e);
        c = d.distance || e[f === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (l) {
            e.css("opacity", 0).css(f, m === "pos" ? -c : c)
        }
        g[f] = (l ? (m === "pos" ? "+=" : "-=") : (m === "pos" ? "-=" : "+=")) + c;
        e.animate(g, {queue: false, duration: d.duration, easing: d.easing, complete: function () {
            if (i === "hide") {
                e.hide()
            }
            a.effects.restore(e, j);
            a.effects.removeWrapper(e);
            h()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.explode = function (s, r) {
        var k = s.pieces ? Math.round(Math.sqrt(s.pieces)) : 3, d = k, c = a(this), m = a.effects.setMode(c, s.mode || "hide"), w = m === "show", g = c.show().css("visibility", "hidden").offset(), t = Math.ceil(c.outerWidth() / d), q = Math.ceil(c.outerHeight() / k), h = [], v, u, e, p, n, l;

        function x() {
            h.push(this);
            if (h.length === k * d) {
                f()
            }
        }

        for (v = 0; v < k; v++) {
            p = g.top + v * q;
            l = v - (k - 1) / 2;
            for (u = 0; u < d; u++) {
                e = g.left + u * t;
                n = u - (d - 1) / 2;
                c.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -u * t, top: -v * q}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: t, height: q, left: e + (w ? n * t : 0), top: p + (w ? l * q : 0), opacity: w ? 0 : 1}).animate({left: e + (w ? 0 : n * t), top: p + (w ? 0 : l * q), opacity: w ? 1 : 0}, s.duration || 500, s.easing, x)
            }
        }
        function f() {
            c.css({visibility: "visible"});
            a(h).remove();
            if (!w) {
                c.hide()
            }
            r()
        }
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.fade = function (f, c) {
        var d = a(this), e = a.effects.setMode(d, f.mode || "toggle");
        d.animate({opacity: e}, {queue: false, duration: f.duration, easing: f.easing, complete: c})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.fold = function (e, i) {
        var f = a(this), n = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(f, e.mode || "hide"), r = k === "show", l = k === "hide", t = e.size || 15, m = /([0-9]+)%/.exec(t), s = !!e.horizFirst, j = r !== s, g = j ? ["width", "height"] : ["height", "width"], h = e.duration / 2, d, c, q = {}, p = {};
        a.effects.save(f, n);
        f.show();
        d = a.effects.createWrapper(f).css({overflow: "hidden"});
        c = j ? [d.width(), d.height()] : [d.height(), d.width()];
        if (m) {
            t = parseInt(m[1], 10) / 100 * c[l ? 0 : 1]
        }
        if (r) {
            d.css(s ? {height: 0, width: t} : {height: t, width: 0})
        }
        q[g[0]] = r ? c[0] : t;
        p[g[1]] = r ? c[1] : 0;
        d.animate(q, h, e.easing).animate(p, h, e.easing, function () {
            if (l) {
                f.hide()
            }
            a.effects.restore(f, n);
            a.effects.removeWrapper(f);
            i()
        })
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.highlight = function (h, c) {
        var e = a(this), d = ["backgroundImage", "backgroundColor", "opacity"], g = a.effects.setMode(e, h.mode || "show"), f = {backgroundColor: e.css("backgroundColor")};
        if (g === "hide") {
            f.opacity = 0
        }
        a.effects.save(e, d);
        e.show().css({backgroundImage: "none", backgroundColor: h.color || "#ffff99"}).animate(f, {queue: false, duration: h.duration, easing: h.easing, complete: function () {
            if (g === "hide") {
                e.hide()
            }
            a.effects.restore(e, d);
            c()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.pulsate = function (c, g) {
        var e = a(this), k = a.effects.setMode(e, c.mode || "show"), p = k === "show", l = k === "hide", q = (p || k === "hide"), m = ((c.times || 5) * 2) + (q ? 1 : 0), f = c.duration / m, n = 0, j = e.queue(), d = j.length, h;
        if (p || !e.is(":visible")) {
            e.css("opacity", 0).show();
            n = 1
        }
        for (h = 1; h < m; h++) {
            e.animate({opacity: n}, f, c.easing);
            n = 1 - n
        }
        e.animate({opacity: n}, f, c.easing);
        e.queue(function () {
            if (l) {
                e.hide()
            }
            g()
        });
        if (d > 1) {
            j.splice.apply(j, [1, 0].concat(j.splice(d, m + 1)))
        }
        e.dequeue()
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.puff = function (j, c) {
        var h = a(this), i = a.effects.setMode(h, j.mode || "hide"), f = i === "hide", g = parseInt(j.percent, 10) || 150, e = g / 100, d = {height: h.height(), width: h.width(), outerHeight: h.outerHeight(), outerWidth: h.outerWidth()};
        a.extend(j, {effect: "scale", queue: false, fade: true, mode: i, complete: c, percent: f ? g : 100, from: f ? d : {height: d.height * e, width: d.width * e, outerHeight: d.outerHeight * e, outerWidth: d.outerWidth * e}});
        h.effect(j)
    };
    a.effects.effect.scale = function (c, f) {
        var d = a(this), l = a.extend(true, {}, c), g = a.effects.setMode(d, c.mode || "effect"), h = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (g === "hide" ? 0 : 100)), j = c.direction || "both", k = c.origin, e = {height: d.height(), width: d.width(), outerHeight: d.outerHeight(), outerWidth: d.outerWidth()}, i = {y: j !== "horizontal" ? (h / 100) : 1, x: j !== "vertical" ? (h / 100) : 1};
        l.effect = "size";
        l.queue = false;
        l.complete = f;
        if (g !== "effect") {
            l.origin = k || ["middle", "center"];
            l.restore = true
        }
        l.from = c.from || (g === "show" ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : e);
        l.to = {height: e.height * i.y, width: e.width * i.x, outerHeight: e.outerHeight * i.y, outerWidth: e.outerWidth * i.x};
        if (l.fade) {
            if (g === "show") {
                l.from.opacity = 0;
                l.to.opacity = 1
            }
            if (g === "hide") {
                l.from.opacity = 1;
                l.to.opacity = 0
            }
        }
        d.effect(l)
    };
    a.effects.effect.size = function (l, k) {
        var q, i, j, c = a(this), p = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], m = ["width", "height", "overflow"], g = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = a.effects.setMode(c, l.mode || "effect"), r = l.restore || h !== "effect", v = l.scale || "both", t = l.origin || ["middle", "center"], u = c.css("position"), e = r ? p : n, f = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        if (h === "show") {
            c.show()
        }
        q = {height: c.height(), width: c.width(), outerHeight: c.outerHeight(), outerWidth: c.outerWidth()};
        if (l.mode === "toggle" && h === "show") {
            c.from = l.to || f;
            c.to = l.from || q
        } else {
            c.from = l.from || (h === "show" ? f : q);
            c.to = l.to || (h === "hide" ? f : q)
        }
        j = {from: {y: c.from.height / q.height, x: c.from.width / q.width}, to: {y: c.to.height / q.height, x: c.to.width / q.width}};
        if (v === "box" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(s);
                c.from = a.effects.setTransition(c, s, j.from.y, c.from);
                c.to = a.effects.setTransition(c, s, j.to.y, c.to)
            }
            if (j.from.x !== j.to.x) {
                e = e.concat(d);
                c.from = a.effects.setTransition(c, d, j.from.x, c.from);
                c.to = a.effects.setTransition(c, d, j.to.x, c.to)
            }
        }
        if (v === "content" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(g).concat(m);
                c.from = a.effects.setTransition(c, g, j.from.y, c.from);
                c.to = a.effects.setTransition(c, g, j.to.y, c.to)
            }
        }
        a.effects.save(c, e);
        c.show();
        a.effects.createWrapper(c);
        c.css("overflow", "hidden").css(c.from);
        if (t) {
            i = a.effects.getBaseline(t, q);
            c.from.top = (q.outerHeight - c.outerHeight()) * i.y;
            c.from.left = (q.outerWidth - c.outerWidth()) * i.x;
            c.to.top = (q.outerHeight - c.to.outerHeight) * i.y;
            c.to.left = (q.outerWidth - c.to.outerWidth) * i.x
        }
        c.css(c.from);
        if (v === "content" || v === "both") {
            s = s.concat(["marginTop", "marginBottom"]).concat(g);
            d = d.concat(["marginLeft", "marginRight"]);
            m = p.concat(s).concat(d);
            c.find("*[width]").each(function () {
                var w = a(this), o = {height: w.height(), width: w.width(), outerHeight: w.outerHeight(), outerWidth: w.outerWidth()};
                if (r) {
                    a.effects.save(w, m)
                }
                w.from = {height: o.height * j.from.y, width: o.width * j.from.x, outerHeight: o.outerHeight * j.from.y, outerWidth: o.outerWidth * j.from.x};
                w.to = {height: o.height * j.to.y, width: o.width * j.to.x, outerHeight: o.height * j.to.y, outerWidth: o.width * j.to.x};
                if (j.from.y !== j.to.y) {
                    w.from = a.effects.setTransition(w, s, j.from.y, w.from);
                    w.to = a.effects.setTransition(w, s, j.to.y, w.to)
                }
                if (j.from.x !== j.to.x) {
                    w.from = a.effects.setTransition(w, d, j.from.x, w.from);
                    w.to = a.effects.setTransition(w, d, j.to.x, w.to)
                }
                w.css(w.from);
                w.animate(w.to, l.duration, l.easing, function () {
                    if (r) {
                        a.effects.restore(w, m)
                    }
                })
            })
        }
        c.animate(c.to, {queue: false, duration: l.duration, easing: l.easing, complete: function () {
            if (c.to.opacity === 0) {
                c.css("opacity", c.from.opacity)
            }
            if (h === "hide") {
                c.hide()
            }
            a.effects.restore(c, e);
            if (!r) {
                if (u === "static") {
                    c.css({position: "relative", top: c.to.top, left: c.to.left})
                } else {
                    a.each(["top", "left"], function (o, w) {
                        c.css(w, function (y, A) {
                            var z = parseInt(A, 10), x = o ? c.to.left : c.to.top;
                            if (A === "auto") {
                                return x + "px"
                            }
                            return z + x + "px"
                        })
                    })
                }
            }
            a.effects.removeWrapper(c);
            k()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.shake = function (l, k) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], j = a.effects.setMode(c, l.mode || "effect"), u = l.direction || "left", e = l.distance || 20, h = l.times || 3, v = h * 2 + 1, q = Math.round(l.duration / v), g = (u === "up" || u === "down") ? "top" : "left", f = (u === "up" || u === "left"), t = {}, s = {}, r = {}, p, m = c.queue(), n = m.length;
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        t[g] = (f ? "-=" : "+=") + e;
        s[g] = (f ? "+=" : "-=") + e * 2;
        r[g] = (f ? "-=" : "+=") + e * 2;
        c.animate(t, q, l.easing);
        for (p = 1; p < h; p++) {
            c.animate(s, q, l.easing).animate(r, q, l.easing)
        }
        c.animate(s, q, l.easing).animate(t, q / 2, l.easing).queue(function () {
            if (j === "hide") {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            k()
        });
        if (n > 1) {
            m.splice.apply(m, [1, 0].concat(m.splice(n, v + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.slide = function (e, i) {
        var f = a(this), k = ["position", "top", "bottom", "left", "right", "width", "height"], j = a.effects.setMode(f, e.mode || "show"), m = j === "show", l = e.direction || "left", g = (l === "up" || l === "down") ? "top" : "left", d = (l === "up" || l === "left"), c, h = {};
        a.effects.save(f, k);
        f.show();
        c = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true);
        a.effects.createWrapper(f).css({overflow: "hidden"});
        if (m) {
            f.css(g, d ? (isNaN(c) ? "-" + c : -c) : c)
        }
        h[g] = (m ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
        f.animate(h, {queue: false, duration: e.duration, easing: e.easing, complete: function () {
            if (j === "hide") {
                f.hide()
            }
            a.effects.restore(f, k);
            a.effects.removeWrapper(f);
            i()
        }})
    }
})(jQuery);
(function (a, b) {
    a.effects.effect.transfer = function (d, h) {
        var f = a(this), k = a(d.to), n = k.css("position") === "fixed", j = a("body"), l = n ? j.scrollTop() : 0, m = n ? j.scrollLeft() : 0, c = k.offset(), g = {top: c.top - l, left: c.left - m, height: k.innerHeight(), width: k.innerWidth()}, i = f.offset(), e = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top: i.top - l, left: i.left - m, height: f.innerHeight(), width: f.innerWidth(), position: n ? "fixed" : "absolute"}).animate(g, d.duration, d.easing, function () {
            e.remove();
            h()
        })
    }
})(jQuery);
(function (a, b) {
    a.widget("ui.menu", {version: "1.10.3", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
        this.activeMenu = this.element;
        this.mouseHandled = false;
        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, a.proxy(function (c) {
            if (this.options.disabled) {
                c.preventDefault()
            }
        }, this));
        if (this.options.disabled) {
            this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
        }
        this._on({"mousedown .ui-menu-item > a": function (c) {
            c.preventDefault()
        }, "click .ui-state-disabled > a": function (c) {
            c.preventDefault()
        }, "click .ui-menu-item:has(a)": function (c) {
            var d = a(c.target).closest(".ui-menu-item");
            if (!this.mouseHandled && d.not(".ui-state-disabled").length) {
                this.mouseHandled = true;
                this.select(c);
                if (d.has(".ui-menu").length) {
                    this.expand(c)
                } else {
                    if (!this.element.is(":focus")) {
                        this.element.trigger("focus", [true]);
                        if (this.active && this.active.parents(".ui-menu").length === 1) {
                            clearTimeout(this.timer)
                        }
                    }
                }
            }
        }, "mouseenter .ui-menu-item": function (c) {
            var d = a(c.currentTarget);
            d.siblings().children(".ui-state-active").removeClass("ui-state-active");
            this.focus(c, d)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, c) {
            var d = this.active || this.element.children(".ui-menu-item").eq(0);
            if (!c) {
                this.focus(e, d)
            }
        }, blur: function (c) {
            this._delay(function () {
                if (!a.contains(this.element[0], this.document[0].activeElement)) {
                    this.collapseAll(c)
                }
            })
        }, keydown: "_keydown"});
        this.refresh();
        this._on(this.document, {click: function (c) {
            if (!a(c.target).closest(".ui-menu").length) {
                this.collapseAll(c)
            }
            this.mouseHandled = false
        }})
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
        this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var c = a(this);
            if (c.data("ui-menu-submenu-carat")) {
                c.remove()
            }
        });
        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    }, _keydown: function (i) {
        var d, h, j, g, f, c = true;

        function e(k) {
            return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        switch (i.keyCode) {
            case a.ui.keyCode.PAGE_UP:
                this.previousPage(i);
                break;
            case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(i);
                break;
            case a.ui.keyCode.HOME:
                this._move("first", "first", i);
                break;
            case a.ui.keyCode.END:
                this._move("last", "last", i);
                break;
            case a.ui.keyCode.UP:
                this.previous(i);
                break;
            case a.ui.keyCode.DOWN:
                this.next(i);
                break;
            case a.ui.keyCode.LEFT:
                this.collapse(i);
                break;
            case a.ui.keyCode.RIGHT:
                if (this.active && !this.active.is(".ui-state-disabled")) {
                    this.expand(i)
                }
                break;
            case a.ui.keyCode.ENTER:
            case a.ui.keyCode.SPACE:
                this._activate(i);
                break;
            case a.ui.keyCode.ESCAPE:
                this.collapse(i);
                break;
            default:
                c = false;
                h = this.previousFilter || "";
                j = String.fromCharCode(i.keyCode);
                g = false;
                clearTimeout(this.filterTimer);
                if (j === h) {
                    g = true
                } else {
                    j = h + j
                }
                f = new RegExp("^" + e(j), "i");
                d = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return f.test(a(this).children("a").text())
                });
                d = g && d.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : d;
                if (!d.length) {
                    j = String.fromCharCode(i.keyCode);
                    f = new RegExp("^" + e(j), "i");
                    d = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return f.test(a(this).children("a").text())
                    })
                }
                if (d.length) {
                    this.focus(i, d);
                    if (d.length > 1) {
                        this.previousFilter = j;
                        this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1000)
                    } else {
                        delete this.previousFilter
                    }
                } else {
                    delete this.previousFilter
                }
        }
        if (c) {
            i.preventDefault()
        }
    }, _activate: function (c) {
        if (!this.active.is(".ui-state-disabled")) {
            if (this.active.children("a[aria-haspopup='true']").length) {
                this.expand(c)
            } else {
                this.select(c)
            }
        }
    }, refresh: function () {
        var e, d = this.options.icons.submenu, c = this.element.find(this.options.menus);
        c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
            var h = a(this), g = h.prev("a"), f = a("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", true);
            g.attr("aria-haspopup", "true").prepend(f);
            h.attr("aria-labelledby", g.attr("id"))
        });
        e = c.add(this.element);
        e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all1").attr({tabIndex: -1, role: this._itemRole()});
        e.children(":not(.ui-menu-item)").each(function () {
            var f = a(this);
            if (!/[^\-\u2014\u2013\s]/.test(f.text())) {
                f.addClass("ui-widget-content ui-menu-divider")
            }
        });
        e.children(".ui-state-disabled").attr("aria-disabled", "true");
        if (this.active && !a.contains(this.element[0], this.active[0])) {
            this.blur()
        }
    }, _itemRole: function () {
        return{menu: "menuitem", listbox: "option"}[this.options.role]
    }, _setOption: function (c, d) {
        if (c === "icons") {
            this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
        }
        this._super(c, d)
    }, focus: function (d, c) {
        var f, e;
        this.blur(d, d && d.type === "focus");
        this._scrollIntoView(c);
        this.active = c.first();
        e = this.active.children("a").addClass("ui-state-focus");
        if (this.options.role) {
            this.element.attr("aria-activedescendant", e.attr("id"))
        }
        this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
        if (d && d.type === "keydown") {
            this._close()
        } else {
            this.timer = this._delay(function () {
                this._close()
            }, this.delay)
        }
        f = c.children(".ui-menu");
        if (f.length && (/^mouse/.test(d.type))) {
            this._startOpening(f)
        }
        this.activeMenu = c.parent();
        this._trigger("focus", d, {item: c})
    }, _scrollIntoView: function (f) {
        var i, e, g, c, d, h;
        if (this._hasScroll()) {
            i = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
            e = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
            g = f.offset().top - this.activeMenu.offset().top - i - e;
            c = this.activeMenu.scrollTop();
            d = this.activeMenu.height();
            h = f.height();
            if (g < 0) {
                this.activeMenu.scrollTop(c + g)
            } else {
                if (g + h > d) {
                    this.activeMenu.scrollTop(c + g - d + h)
                }
            }
        }
    }, blur: function (d, c) {
        if (!c) {
            clearTimeout(this.timer)
        }
        if (!this.active) {
            return
        }
        this.active.children("a").removeClass("ui-state-focus");
        this.active = null;
        this._trigger("blur", d, {item: this.active})
    }, _startOpening: function (c) {
        clearTimeout(this.timer);
        if (c.attr("aria-hidden") !== "true") {
            return
        }
        this.timer = this._delay(function () {
            this._close();
            this._open(c)
        }, this.delay)
    }, _open: function (d) {
        var c = a.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer);
        this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true");
        d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
    }, collapseAll: function (d, c) {
        clearTimeout(this.timer);
        this.timer = this._delay(function () {
            var e = c ? this.element : a(d && d.target).closest(this.element.find(".ui-menu"));
            if (!e.length) {
                e = this.element
            }
            this._close(e);
            this.blur(d);
            this.activeMenu = e
        }, this.delay)
    }, _close: function (c) {
        if (!c) {
            c = this.active ? this.active.parent() : this.element
        }
        c.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    }, collapse: function (d) {
        var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        if (c && c.length) {
            this._close();
            this.focus(d, c)
        }
    }, expand: function (d) {
        var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        if (c && c.length) {
            this._open(c.parent());
            this._delay(function () {
                this.focus(d, c)
            })
        }
    }, next: function (c) {
        this._move("next", "first", c)
    }, previous: function (c) {
        this._move("prev", "last", c)
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, _move: function (f, d, e) {
        var c;
        if (this.active) {
            if (f === "first" || f === "last") {
                c = this.active[f === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
            } else {
                c = this.active[f + "All"](".ui-menu-item").eq(0)
            }
        }
        if (!c || !c.length || !this.active) {
            c = this.activeMenu.children(".ui-menu-item")[d]()
        }
        this.focus(e, c)
    }, nextPage: function (e) {
        var d, f, c;
        if (!this.active) {
            this.next(e);
            return
        }
        if (this.isLastItem()) {
            return
        }
        if (this._hasScroll()) {
            f = this.active.offset().top;
            c = this.element.height();
            this.active.nextAll(".ui-menu-item").each(function () {
                d = a(this);
                return d.offset().top - f - c < 0
            });
            this.focus(e, d)
        } else {
            this.focus(e, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
        }
    }, previousPage: function (e) {
        var d, f, c;
        if (!this.active) {
            this.next(e);
            return
        }
        if (this.isFirstItem()) {
            return
        }
        if (this._hasScroll()) {
            f = this.active.offset().top;
            c = this.element.height();
            this.active.prevAll(".ui-menu-item").each(function () {
                d = a(this);
                return d.offset().top - f + c > 0
            });
            this.focus(e, d)
        } else {
            this.focus(e, this.activeMenu.children(".ui-menu-item").first())
        }
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    }, select: function (c) {
        this.active = this.active || a(c.target).closest(".ui-menu-item");
        var d = {item: this.active};
        if (!this.active.has(".ui-menu").length) {
            this.collapseAll(c, true)
        }
        this._trigger("select", c, d)
    }})
}(jQuery));
(function (e, c) {
    e.ui = e.ui || {};
    var j, k = Math.max, o = Math.abs, m = Math.round, d = /left|center|right/, h = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, b = /%$/, g = e.fn.position;

    function n(r, q, p) {
        return[parseFloat(r[0]) * (b.test(r[0]) ? q / 100 : 1), parseFloat(r[1]) * (b.test(r[1]) ? p / 100 : 1)]
    }

    function i(p, q) {
        return parseInt(e.css(p, q), 10) || 0
    }

    function f(q) {
        var p = q[0];
        if (p.nodeType === 9) {
            return{width: q.width(), height: q.height(), offset: {top: 0, left: 0}}
        }
        if (e.isWindow(p)) {
            return{width: q.width(), height: q.height(), offset: {top: q.scrollTop(), left: q.scrollLeft()}}
        }
        if (p.preventDefault) {
            return{width: 0, height: 0, offset: {top: p.pageY, left: p.pageX}}
        }
        return{width: q.outerWidth(), height: q.outerHeight(), offset: q.offset()}
    }

    e.position = {scrollbarWidth: function () {
        if (j !== c) {
            return j
        }
        var q, p, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = s.children()[0];
        e("body").append(s);
        q = r.offsetWidth;
        s.css("overflow", "scroll");
        p = r.offsetWidth;
        if (q === p) {
            p = s[0].clientWidth
        }
        s.remove();
        return(j = q - p)
    }, getScrollInfo: function (t) {
        var s = t.isWindow ? "" : t.element.css("overflow-x"), r = t.isWindow ? "" : t.element.css("overflow-y"), q = s === "scroll" || (s === "auto" && t.width < t.element[0].scrollWidth), p = r === "scroll" || (r === "auto" && t.height < t.element[0].scrollHeight);
        return{width: p ? e.position.scrollbarWidth() : 0, height: q ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (q) {
        var r = e(q || window), p = e.isWindow(r[0]);
        return{element: r, isWindow: p, offset: r.offset() || {left: 0, top: 0}, scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop(), width: p ? r.width() : r.outerWidth(), height: p ? r.height() : r.outerHeight()}
    }};
    e.fn.position = function (z) {
        if (!z || !z.of) {
            return g.apply(this, arguments)
        }
        z = e.extend({}, z);
        var A, w, u, y, t, p, v = e(z.of), s = e.position.getWithinInfo(z.within), q = e.position.getScrollInfo(s), x = (z.collision || "flip").split(" "), r = {};
        p = f(v);
        if (v[0].preventDefault) {
            z.at = "left top"
        }
        w = p.width;
        u = p.height;
        y = p.offset;
        t = e.extend({}, y);
        e.each(["my", "at"], function () {
            var D = (z[this] || "").split(" "), C, B;
            if (D.length === 1) {
                D = d.test(D[0]) ? D.concat(["center"]) : h.test(D[0]) ? ["center"].concat(D) : ["center", "center"]
            }
            D[0] = d.test(D[0]) ? D[0] : "center";
            D[1] = h.test(D[1]) ? D[1] : "center";
            C = a.exec(D[0]);
            B = a.exec(D[1]);
            r[this] = [C ? C[0] : 0, B ? B[0] : 0];
            z[this] = [l.exec(D[0])[0], l.exec(D[1])[0]]
        });
        if (x.length === 1) {
            x[1] = x[0]
        }
        if (z.at[0] === "right") {
            t.left += w
        } else {
            if (z.at[0] === "center") {
                t.left += w / 2
            }
        }
        if (z.at[1] === "bottom") {
            t.top += u
        } else {
            if (z.at[1] === "center") {
                t.top += u / 2
            }
        }
        A = n(r.at, w, u);
        t.left += A[0];
        t.top += A[1];
        return this.each(function () {
            var C, L, E = e(this), G = E.outerWidth(), D = E.outerHeight(), F = i(this, "marginLeft"), B = i(this, "marginTop"), K = G + F + i(this, "marginRight") + q.width, J = D + B + i(this, "marginBottom") + q.height, H = e.extend({}, t), I = n(r.my, E.outerWidth(), E.outerHeight());
            if (z.my[0] === "right") {
                H.left -= G
            } else {
                if (z.my[0] === "center") {
                    H.left -= G / 2
                }
            }
            if (z.my[1] === "bottom") {
                H.top -= D
            } else {
                if (z.my[1] === "center") {
                    H.top -= D / 2
                }
            }
            H.left += I[0];
            H.top += I[1];
            if (!e.support.offsetFractions) {
                H.left = m(H.left);
                H.top = m(H.top)
            }
            C = {marginLeft: F, marginTop: B};
            e.each(["left", "top"], function (N, M) {
                if (e.ui.position[x[N]]) {
                    e.ui.position[x[N]][M](H, {targetWidth: w, targetHeight: u, elemWidth: G, elemHeight: D, collisionPosition: C, collisionWidth: K, collisionHeight: J, offset: [A[0] + I[0], A[1] + I[1]], my: z.my, at: z.at, within: s, elem: E})
                }
            });
            if (z.using) {
                L = function (P) {
                    var R = y.left - H.left, O = R + w - G, Q = y.top - H.top, N = Q + u - D, M = {target: {element: v, left: y.left, top: y.top, width: w, height: u}, element: {element: E, left: H.left, top: H.top, width: G, height: D}, horizontal: O < 0 ? "left" : R > 0 ? "right" : "center", vertical: N < 0 ? "top" : Q > 0 ? "bottom" : "middle"};
                    if (w < G && o(R + O) < w) {
                        M.horizontal = "center"
                    }
                    if (u < D && o(Q + N) < u) {
                        M.vertical = "middle"
                    }
                    if (k(o(R), o(O)) > k(o(Q), o(N))) {
                        M.important = "horizontal"
                    } else {
                        M.important = "vertical"
                    }
                    z.using.call(this, P, M)
                }
            }
            E.offset(e.extend(H, {using: L}))
        })
    };
    e.ui.position = {fit: {left: function (t, s) {
        var r = s.within, v = r.isWindow ? r.scrollLeft : r.offset.left, x = r.width, u = t.left - s.collisionPosition.marginLeft, w = v - u, q = u + s.collisionWidth - x - v, p;
        if (s.collisionWidth > x) {
            if (w > 0 && q <= 0) {
                p = t.left + w + s.collisionWidth - x - v;
                t.left += w - p
            } else {
                if (q > 0 && w <= 0) {
                    t.left = v
                } else {
                    if (w > q) {
                        t.left = v + x - s.collisionWidth
                    } else {
                        t.left = v
                    }
                }
            }
        } else {
            if (w > 0) {
                t.left += w
            } else {
                if (q > 0) {
                    t.left -= q
                } else {
                    t.left = k(t.left - u, t.left)
                }
            }
        }
    }, top: function (s, r) {
        var q = r.within, w = q.isWindow ? q.scrollTop : q.offset.top, x = r.within.height, u = s.top - r.collisionPosition.marginTop, v = w - u, t = u + r.collisionHeight - x - w, p;
        if (r.collisionHeight > x) {
            if (v > 0 && t <= 0) {
                p = s.top + v + r.collisionHeight - x - w;
                s.top += v - p
            } else {
                if (t > 0 && v <= 0) {
                    s.top = w
                } else {
                    if (v > t) {
                        s.top = w + x - r.collisionHeight
                    } else {
                        s.top = w
                    }
                }
            }
        } else {
            if (v > 0) {
                s.top += v
            } else {
                if (t > 0) {
                    s.top -= t
                } else {
                    s.top = k(s.top - u, s.top)
                }
            }
        }
    }}, flip: {left: function (v, u) {
        var t = u.within, z = t.offset.left + t.scrollLeft, C = t.width, r = t.isWindow ? t.scrollLeft : t.offset.left, w = v.left - u.collisionPosition.marginLeft, A = w - r, q = w + u.collisionWidth - C - r, y = u.my[0] === "left" ? -u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0, B = u.at[0] === "left" ? u.targetWidth : u.at[0] === "right" ? -u.targetWidth : 0, s = -2 * u.offset[0], p, x;
        if (A < 0) {
            p = v.left + y + B + s + u.collisionWidth - C - z;
            if (p < 0 || p < o(A)) {
                v.left += y + B + s
            }
        } else {
            if (q > 0) {
                x = v.left - u.collisionPosition.marginLeft + y + B + s - r;
                if (x > 0 || o(x) < q) {
                    v.left += y + B + s
                }
            }
        }
    }, top: function (u, t) {
        var s = t.within, B = s.offset.top + s.scrollTop, C = s.height, p = s.isWindow ? s.scrollTop : s.offset.top, w = u.top - t.collisionPosition.marginTop, y = w - p, v = w + t.collisionHeight - C - p, z = t.my[1] === "top", x = z ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, D = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, r = -2 * t.offset[1], A, q;
        if (y < 0) {
            q = u.top + x + D + r + t.collisionHeight - C - B;
            if ((u.top + x + D + r) > y && (q < 0 || q < o(y))) {
                u.top += x + D + r
            }
        } else {
            if (v > 0) {
                A = u.top - t.collisionPosition.marginTop + x + D + r - p;
                if ((u.top + x + D + r) > v && (A > 0 || o(A) < v)) {
                    u.top += x + D + r
                }
            }
        }
    }}, flipfit: {left: function () {
        e.ui.position.flip.left.apply(this, arguments);
        e.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        e.ui.position.flip.top.apply(this, arguments);
        e.ui.position.fit.top.apply(this, arguments)
    }}};
    (function () {
        var t, v, q, s, r, p = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(p ? "div" : "body");
        q = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
        if (p) {
            e.extend(q, {position: "absolute", left: "-1000px", top: "-1000px"})
        }
        for (r in q) {
            t.style[r] = q[r]
        }
        t.appendChild(u);
        v = p || document.documentElement;
        v.insertBefore(t, v.firstChild);
        u.style.cssText = "position: absolute; left: 10.7432222px;";
        s = e(u).offset().left;
        e.support.offsetFractions = s > 10 && s < 11;
        t.innerHTML = "";
        v.removeChild(t)
    })()
}(jQuery));
(function (a, b) {
    a.widget("ui.progressbar", {version: "1.10.3", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
        this.oldValue = this.options.value = this._constrainedValue();
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min});
        this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
        this._refreshValue()
    }, _destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.valueDiv.remove()
    }, value: function (c) {
        if (c === b) {
            return this.options.value
        }
        this.options.value = this._constrainedValue(c);
        this._refreshValue()
    }, _constrainedValue: function (c) {
        if (c === b) {
            c = this.options.value
        }
        this.indeterminate = c === false;
        if (typeof c !== "number") {
            c = 0
        }
        return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, c))
    }, _setOptions: function (c) {
        var d = c.value;
        delete c.value;
        this._super(c);
        this.options.value = this._constrainedValue(d);
        this._refreshValue()
    }, _setOption: function (c, d) {
        if (c === "max") {
            d = Math.max(this.min, d)
        }
        this._super(c, d)
    }, _percentage: function () {
        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, _refreshValue: function () {
        var d = this.options.value, c = this._percentage();
        this.valueDiv.toggle(this.indeterminate || d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
        this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
        if (this.indeterminate) {
            this.element.removeAttr("aria-valuenow");
            if (!this.overlayDiv) {
                this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
            }
        } else {
            this.element.attr({"aria-valuemax": this.options.max, "aria-valuenow": d});
            if (this.overlayDiv) {
                this.overlayDiv.remove();
                this.overlayDiv = null
            }
        }
        if (this.oldValue !== d) {
            this.oldValue = d;
            this._trigger("change")
        }
        if (d === this.options.max) {
            this._trigger("complete")
        }
    }})
})(jQuery);
(function (b, c) {
    var a = 5;
    b.widget("ui.slider", b.ui.mouse, {version: "1.10.3", widgetEventPrefix: "slide", options: {animate: false, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, _create: function () {
        this._keySliding = false;
        this._mouseSliding = false;
        this._animateOff = true;
        this._handleIndex = null;
        this._detectOrientation();
        this._mouseInit();
        this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
        this._refresh();
        this._setOption("disabled", this.options.disabled);
        this._animateOff = false
    }, _refresh: function () {
        this._createRange();
        this._createHandles();
        this._setupEvents();
        this._refreshValue()
    }, _createHandles: function () {
        var g, d, e = this.options, j = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", f = [];
        d = (e.values && e.values.length) || 1;
        if (j.length > d) {
            j.slice(d).remove();
            j = j.slice(0, d)
        }
        for (g = j.length; g < d; g++) {
            f.push(h)
        }
        this.handles = j.add(b(f.join("")).appendTo(this.element));
        this.handle = this.handles.eq(0);
        this.handles.each(function (k) {
            b(this).data("ui-slider-handle-index", k)
        })
    }, _createRange: function () {
        var d = this.options, e = "";
        if (d.range) {
            if (d.range === true) {
                if (!d.values) {
                    d.values = [this._valueMin(), this._valueMin()]
                } else {
                    if (d.values.length && d.values.length !== 2) {
                        d.values = [d.values[0], d.values[0]]
                    } else {
                        if (b.isArray(d.values)) {
                            d.values = d.values.slice(0)
                        }
                    }
                }
            }
            if (!this.range || !this.range.length) {
                this.range = b("<div></div>").appendTo(this.element);
                e = "ui-slider-range ui-widget-header ui-corner-all"
            } else {
                this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""})
            }
            this.range.addClass(e + ((d.range === "min" || d.range === "max") ? " ui-slider-range-" + d.range : ""))
        } else {
            this.range = b([])
        }
    }, _setupEvents: function () {
        var d = this.handles.add(this.range).filter("a");
        this._off(d);
        this._on(d, this._handleEvents);
        this._hoverable(d);
        this._focusable(d)
    }, _destroy: function () {
        this.handles.remove();
        this.range.remove();
        this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
        this._mouseDestroy()
    }, _mouseCapture: function (f) {
        var j, m, e, h, l, n, i, d, k = this, g = this.options;
        if (g.disabled) {
            return false
        }
        this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()};
        this.elementOffset = this.element.offset();
        j = {x: f.pageX, y: f.pageY};
        m = this._normValueFromMouse(j);
        e = this._valueMax() - this._valueMin() + 1;
        this.handles.each(function (o) {
            var p = Math.abs(m - k.values(o));
            if ((e > p) || (e === p && (o === k._lastChangedValue || k.values(o) === g.min))) {
                e = p;
                h = b(this);
                l = o
            }
        });
        n = this._start(f, l);
        if (n === false) {
            return false
        }
        this._mouseSliding = true;
        this._handleIndex = l;
        h.addClass("ui-state-active").focus();
        i = h.offset();
        d = !b(f.target).parents().addBack().is(".ui-slider-handle");
        this._clickOffset = d ? {left: 0, top: 0} : {left: f.pageX - i.left - (h.width() / 2), top: f.pageY - i.top - (h.height() / 2) - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)};
        if (!this.handles.hasClass("ui-state-hover")) {
            this._slide(f, l, m)
        }
        this._animateOff = true;
        return true
    }, _mouseStart: function () {
        return true
    }, _mouseDrag: function (f) {
        var d = {x: f.pageX, y: f.pageY}, e = this._normValueFromMouse(d);
        this._slide(f, this._handleIndex, e);
        return false
    }, _mouseStop: function (d) {
        this.handles.removeClass("ui-state-active");
        this._mouseSliding = false;
        this._stop(d, this._handleIndex);
        this._change(d, this._handleIndex);
        this._handleIndex = null;
        this._clickOffset = null;
        this._animateOff = false;
        return false
    }, _detectOrientation: function () {
        this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (e) {
        var d, h, g, f, i;
        if (this.orientation === "horizontal") {
            d = this.elementSize.width;
            h = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
        } else {
            d = this.elementSize.height;
            h = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
        }
        g = (h / d);
        if (g > 1) {
            g = 1
        }
        if (g < 0) {
            g = 0
        }
        if (this.orientation === "vertical") {
            g = 1 - g
        }
        f = this._valueMax() - this._valueMin();
        i = this._valueMin() + g * f;
        return this._trimAlignValue(i)
    }, _start: function (f, e) {
        var d = {handle: this.handles[e], value: this.value()};
        if (this.options.values && this.options.values.length) {
            d.value = this.values(e);
            d.values = this.values()
        }
        return this._trigger("start", f, d)
    }, _slide: function (h, g, f) {
        var d, e, i;
        if (this.options.values && this.options.values.length) {
            d = this.values(g ? 0 : 1);
            if ((this.options.values.length === 2 && this.options.range === true) && ((g === 0 && f > d) || (g === 1 && f < d))) {
                f = d
            }
            if (f !== this.values(g)) {
                e = this.values();
                e[g] = f;
                i = this._trigger("slide", h, {handle: this.handles[g], value: f, values: e});
                d = this.values(g ? 0 : 1);
                if (i !== false) {
                    this.values(g, f, true)
                }
            }
        } else {
            if (f !== this.value()) {
                i = this._trigger("slide", h, {handle: this.handles[g], value: f});
                if (i !== false) {
                    this.value(f)
                }
            }
        }
    }, _stop: function (f, e) {
        var d = {handle: this.handles[e], value: this.value()};
        if (this.options.values && this.options.values.length) {
            d.value = this.values(e);
            d.values = this.values()
        }
        this._trigger("stop", f, d)
    }, _change: function (f, e) {
        if (!this._keySliding && !this._mouseSliding) {
            var d = {handle: this.handles[e], value: this.value()};
            if (this.options.values && this.options.values.length) {
                d.value = this.values(e);
                d.values = this.values()
            }
            this._lastChangedValue = e;
            this._trigger("change", f, d)
        }
    }, value: function (d) {
        if (arguments.length) {
            this.options.value = this._trimAlignValue(d);
            this._refreshValue();
            this._change(null, 0);
            return
        }
        return this._value()
    }, values: function (e, h) {
        var g, d, f;
        if (arguments.length > 1) {
            this.options.values[e] = this._trimAlignValue(h);
            this._refreshValue();
            this._change(null, e);
            return
        }
        if (arguments.length) {
            if (b.isArray(arguments[0])) {
                g = this.options.values;
                d = arguments[0];
                for (f = 0; f < g.length; f += 1) {
                    g[f] = this._trimAlignValue(d[f]);
                    this._change(null, f)
                }
                this._refreshValue()
            } else {
                if (this.options.values && this.options.values.length) {
                    return this._values(e)
                } else {
                    return this.value()
                }
            }
        } else {
            return this._values()
        }
    }, _setOption: function (e, f) {
        var d, g = 0;
        if (e === "range" && this.options.range === true) {
            if (f === "min") {
                this.options.value = this._values(0);
                this.options.values = null
            } else {
                if (f === "max") {
                    this.options.value = this._values(this.options.values.length - 1);
                    this.options.values = null
                }
            }
        }
        if (b.isArray(this.options.values)) {
            g = this.options.values.length
        }
        b.Widget.prototype._setOption.apply(this, arguments);
        switch (e) {
            case"orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case"value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case"values":
                this._animateOff = true;
                this._refreshValue();
                for (d = 0; d < g; d += 1) {
                    this._change(null, d)
                }
                this._animateOff = false;
                break;
            case"min":
            case"max":
                this._animateOff = true;
                this._refreshValue();
                this._animateOff = false;
                break;
            case"range":
                this._animateOff = true;
                this._refresh();
                this._animateOff = false;
                break
        }
    }, _value: function () {
        var d = this.options.value;
        d = this._trimAlignValue(d);
        return d
    }, _values: function (d) {
        var g, f, e;
        if (arguments.length) {
            g = this.options.values[d];
            g = this._trimAlignValue(g);
            return g
        } else {
            if (this.options.values && this.options.values.length) {
                f = this.options.values.slice();
                for (e = 0; e < f.length; e += 1) {
                    f[e] = this._trimAlignValue(f[e])
                }
                return f
            } else {
                return[]
            }
        }
    }, _trimAlignValue: function (g) {
        if (g <= this._valueMin()) {
            return this._valueMin()
        }
        if (g >= this._valueMax()) {
            return this._valueMax()
        }
        var d = (this.options.step > 0) ? this.options.step : 1, f = (g - this._valueMin()) % d, e = g - f;
        if (Math.abs(f) * 2 >= d) {
            e += (f > 0) ? d : (-d)
        }
        return parseFloat(e.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var i, h, l, j, m, g = this.options.range, f = this.options, k = this, e = (!this._animateOff) ? f.animate : false, d = {};
        if (this.options.values && this.options.values.length) {
            this.handles.each(function (n) {
                h = (k.values(n) - k._valueMin()) / (k._valueMax() - k._valueMin()) * 100;
                d[k.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
                b(this).stop(1, 1)[e ? "animate" : "css"](d, f.animate);
                if (k.options.range === true) {
                    if (k.orientation === "horizontal") {
                        if (n === 0) {
                            k.range.stop(1, 1)[e ? "animate" : "css"]({left: h + "%"}, f.animate)
                        }
                        if (n === 1) {
                            k.range[e ? "animate" : "css"]({width: (h - i) + "%"}, {queue: false, duration: f.animate})
                        }
                    } else {
                        if (n === 0) {
                            k.range.stop(1, 1)[e ? "animate" : "css"]({bottom: (h) + "%"}, f.animate)
                        }
                        if (n === 1) {
                            k.range[e ? "animate" : "css"]({height: (h - i) + "%"}, {queue: false, duration: f.animate})
                        }
                    }
                }
                i = h
            })
        } else {
            l = this.value();
            j = this._valueMin();
            m = this._valueMax();
            h = (m !== j) ? (l - j) / (m - j) * 100 : 0;
            d[this.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
            this.handle.stop(1, 1)[e ? "animate" : "css"](d, f.animate);
            if (g === "min" && this.orientation === "horizontal") {
                this.range.stop(1, 1)[e ? "animate" : "css"]({width: h + "%"}, f.animate)
            }
            if (g === "max" && this.orientation === "horizontal") {
                this.range[e ? "animate" : "css"]({width: (100 - h) + "%"}, {queue: false, duration: f.animate})
            }
            if (g === "min" && this.orientation === "vertical") {
                this.range.stop(1, 1)[e ? "animate" : "css"]({height: h + "%"}, f.animate)
            }
            if (g === "max" && this.orientation === "vertical") {
                this.range[e ? "animate" : "css"]({height: (100 - h) + "%"}, {queue: false, duration: f.animate})
            }
        }
    }, _handleEvents: {keydown: function (h) {
        var i, f, e, g, d = b(h.target).data("ui-slider-handle-index");
        switch (h.keyCode) {
            case b.ui.keyCode.HOME:
            case b.ui.keyCode.END:
            case b.ui.keyCode.PAGE_UP:
            case b.ui.keyCode.PAGE_DOWN:
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                h.preventDefault();
                if (!this._keySliding) {
                    this._keySliding = true;
                    b(h.target).addClass("ui-state-active");
                    i = this._start(h, d);
                    if (i === false) {
                        return
                    }
                }
                break
        }
        g = this.options.step;
        if (this.options.values && this.options.values.length) {
            f = e = this.values(d)
        } else {
            f = e = this.value()
        }
        switch (h.keyCode) {
            case b.ui.keyCode.HOME:
                e = this._valueMin();
                break;
            case b.ui.keyCode.END:
                e = this._valueMax();
                break;
            case b.ui.keyCode.PAGE_UP:
                e = this._trimAlignValue(f + ((this._valueMax() - this._valueMin()) / a));
                break;
            case b.ui.keyCode.PAGE_DOWN:
                e = this._trimAlignValue(f - ((this._valueMax() - this._valueMin()) / a));
                break;
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
                if (f === this._valueMax()) {
                    return
                }
                e = this._trimAlignValue(f + g);
                break;
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                if (f === this._valueMin()) {
                    return
                }
                e = this._trimAlignValue(f - g);
                break
        }
        this._slide(h, d, e)
    }, click: function (d) {
        d.preventDefault()
    }, keyup: function (e) {
        var d = b(e.target).data("ui-slider-handle-index");
        if (this._keySliding) {
            this._keySliding = false;
            this._stop(e, d);
            this._change(e, d);
            b(e.target).removeClass("ui-state-active")
        }
    }}})
}(jQuery));
(function (b) {
    function a(c) {
        return function () {
            var d = this.element.val();
            c.apply(this, arguments);
            this._refresh();
            if (d !== this.element.val()) {
                this._trigger("change")
            }
        }
    }

    b.widget("ui.spinner", {version: "1.10.3", defaultElement: "<input>", widgetEventPrefix: "spin", options: {culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
        this._setOption("max", this.options.max);
        this._setOption("min", this.options.min);
        this._setOption("step", this.options.step);
        this._value(this.element.val(), true);
        this._draw();
        this._on(this._events);
        this._refresh();
        this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _getCreateOptions: function () {
        var c = {}, d = this.element;
        b.each(["min", "max", "step"], function (e, f) {
            var g = d.attr(f);
            if (g !== undefined && g.length) {
                c[f] = g
            }
        });
        return c
    }, _events: {keydown: function (c) {
        if (this._start(c) && this._keydown(c)) {
            c.preventDefault()
        }
    }, keyup: "_stop", focus: function () {
        this.previous = this.element.val()
    }, blur: function (c) {
        if (this.cancelBlur) {
            delete this.cancelBlur;
            return
        }
        this._stop();
        this._refresh();
        if (this.previous !== this.element.val()) {
            this._trigger("change", c)
        }
    }, mousewheel: function (c, d) {
        if (!d) {
            return
        }
        if (!this.spinning && !this._start(c)) {
            return false
        }
        this._spin((d > 0 ? 1 : -1) * this.options.step, c);
        clearTimeout(this.mousewheelTimer);
        this.mousewheelTimer = this._delay(function () {
            if (this.spinning) {
                this._stop(c)
            }
        }, 100);
        c.preventDefault()
    }, "mousedown .ui-spinner-button": function (d) {
        var c;
        c = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
        function e() {
            var f = this.element[0] === this.document[0].activeElement;
            if (!f) {
                this.element.focus();
                this.previous = c;
                this._delay(function () {
                    this.previous = c
                })
            }
        }

        d.preventDefault();
        e.call(this);
        this.cancelBlur = true;
        this._delay(function () {
            delete this.cancelBlur;
            e.call(this)
        });
        if (this._start(d) === false) {
            return
        }
        this._repeat(null, b(d.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, d)
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (c) {
        if (!b(c.currentTarget).hasClass("ui-state-active")) {
            return
        }
        if (this._start(c) === false) {
            return false
        }
        this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
    }, "mouseleave .ui-spinner-button": "_stop"}, _draw: function () {
        var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton");
        this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
        if (this.buttons.height() > Math.ceil(c.height() * 0.5) && c.height() > 0) {
            c.height(c.height())
        }
        if (this.options.disabled) {
            this.disable()
        }
    }, _keydown: function (d) {
        var c = this.options, e = b.ui.keyCode;
        switch (d.keyCode) {
            case e.UP:
                this._repeat(null, 1, d);
                return true;
            case e.DOWN:
                this._repeat(null, -1, d);
                return true;
            case e.PAGE_UP:
                this._repeat(null, c.page, d);
                return true;
            case e.PAGE_DOWN:
                this._repeat(null, -c.page, d);
                return true
        }
        return false
    }, _uiSpinnerHtml: function () {
        return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    }, _buttonHtml: function () {
        return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
    }, _start: function (c) {
        if (!this.spinning && this._trigger("start", c) === false) {
            return false
        }
        if (!this.counter) {
            this.counter = 1
        }
        this.spinning = true;
        return true
    }, _repeat: function (d, c, e) {
        d = d || 500;
        clearTimeout(this.timer);
        this.timer = this._delay(function () {
            this._repeat(40, c, e)
        }, d);
        this._spin(c * this.options.step, e)
    }, _spin: function (d, c) {
        var e = this.value() || 0;
        if (!this.counter) {
            this.counter = 1
        }
        e = this._adjustValue(e + d * this._increment(this.counter));
        if (!this.spinning || this._trigger("spin", c, {value: e}) !== false) {
            this._value(e);
            this.counter++
        }
    }, _increment: function (c) {
        var d = this.options.incremental;
        if (d) {
            return b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1)
        }
        return 1
    }, _precision: function () {
        var c = this._precisionOf(this.options.step);
        if (this.options.min !== null) {
            c = Math.max(c, this._precisionOf(this.options.min))
        }
        return c
    }, _precisionOf: function (d) {
        var e = d.toString(), c = e.indexOf(".");
        return c === -1 ? 0 : e.length - c - 1
    }, _adjustValue: function (e) {
        var d, f, c = this.options;
        d = c.min !== null ? c.min : 0;
        f = e - d;
        f = Math.round(f / c.step) * c.step;
        e = d + f;
        e = parseFloat(e.toFixed(this._precision()));
        if (c.max !== null && e > c.max) {
            return c.max
        }
        if (c.min !== null && e < c.min) {
            return c.min
        }
        return e
    }, _stop: function (c) {
        if (!this.spinning) {
            return
        }
        clearTimeout(this.timer);
        clearTimeout(this.mousewheelTimer);
        this.counter = 0;
        this.spinning = false;
        this._trigger("stop", c)
    }, _setOption: function (c, d) {
        if (c === "culture" || c === "numberFormat") {
            var e = this._parse(this.element.val());
            this.options[c] = d;
            this.element.val(this._format(e));
            return
        }
        if (c === "max" || c === "min" || c === "step") {
            if (typeof d === "string") {
                d = this._parse(d)
            }
        }
        if (c === "icons") {
            this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
        }
        this._super(c, d);
        if (c === "disabled") {
            if (d) {
                this.element.prop("disabled", true);
                this.buttons.button("disable")
            } else {
                this.element.prop("disabled", false);
                this.buttons.button("enable")
            }
        }
    }, _setOptions: a(function (c) {
        this._super(c);
        this._value(this.element.val())
    }), _parse: function (c) {
        if (typeof c === "string" && c !== "") {
            c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c
        }
        return c === "" || isNaN(c) ? null : c
    }, _format: function (c) {
        if (c === "") {
            return""
        }
        return window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
    }, _refresh: function () {
        this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
    }, _value: function (e, c) {
        var d;
        if (e !== "") {
            d = this._parse(e);
            if (d !== null) {
                if (!c) {
                    d = this._adjustValue(d)
                }
                e = this._format(d)
            }
        }
        this.element.val(e);
        this._refresh()
    }, _destroy: function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.uiSpinner.replaceWith(this.element)
    }, stepUp: a(function (c) {
        this._stepUp(c)
    }), _stepUp: function (c) {
        if (this._start()) {
            this._spin((c || 1) * this.options.step);
            this._stop()
        }
    }, stepDown: a(function (c) {
        this._stepDown(c)
    }), _stepDown: function (c) {
        if (this._start()) {
            this._spin((c || 1) * -this.options.step);
            this._stop()
        }
    }, pageUp: a(function (c) {
        this._stepUp((c || 1) * this.options.page)
    }), pageDown: a(function (c) {
        this._stepDown((c || 1) * this.options.page)
    }), value: function (c) {
        if (!arguments.length) {
            return this._parse(this.element.val())
        }
        a(this._value).call(this, c)
    }, widget: function () {
        return this.uiSpinner
    }})
}(jQuery));
(function (c, e) {
    var a = 0, f = /#.*$/;

    function d() {
        return ++a
    }

    function b(g) {
        return g.hash.length > 1 && decodeURIComponent(g.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
    }

    c.widget("ui.tabs", {version: "1.10.3", delay: 300, options: {active: null, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function () {
        var h = this, g = this.options;
        this.running = false;
        this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", g.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,function (i) {
            if (c(this).is(".ui-state-disabled")) {
                i.preventDefault()
            }
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
            if (c(this).closest("li").is(".ui-state-disabled")) {
                this.blur()
            }
        });
        this._processTabs();
        g.active = this._initialActive();
        if (c.isArray(g.disabled)) {
            g.disabled = c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function (i) {
                return h.tabs.index(i)
            }))).sort()
        }
        if (this.options.active !== false && this.anchors.length) {
            this.active = this._findActive(g.active)
        } else {
            this.active = c()
        }
        this._refresh();
        if (this.active.length) {
            this.load(g.active)
        }
    }, _initialActive: function () {
        var h = this.options.active, g = this.options.collapsible, i = location.hash.substring(1);
        if (h === null) {
            if (i) {
                this.tabs.each(function (j, k) {
                    if (c(k).attr("aria-controls") === i) {
                        h = j;
                        return false
                    }
                })
            }
            if (h === null) {
                h = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
            }
            if (h === null || h === -1) {
                h = this.tabs.length ? 0 : false
            }
        }
        if (h !== false) {
            h = this.tabs.index(this.tabs.eq(h));
            if (h === -1) {
                h = g ? false : 0
            }
        }
        if (!g && h === false && this.anchors.length) {
            h = 0
        }
        return h
    }, _getCreateEventData: function () {
        return{tab: this.active, panel: !this.active.length ? c() : this._getPanelForTab(this.active)}
    }, _tabKeydown: function (i) {
        var h = c(this.document[0].activeElement).closest("li"), g = this.tabs.index(h), j = true;
        if (this._handlePageNav(i)) {
            return
        }
        switch (i.keyCode) {
            case c.ui.keyCode.RIGHT:
            case c.ui.keyCode.DOWN:
                g++;
                break;
            case c.ui.keyCode.UP:
            case c.ui.keyCode.LEFT:
                j = false;
                g--;
                break;
            case c.ui.keyCode.END:
                g = this.anchors.length - 1;
                break;
            case c.ui.keyCode.HOME:
                g = 0;
                break;
            case c.ui.keyCode.SPACE:
                i.preventDefault();
                clearTimeout(this.activating);
                this._activate(g);
                return;
            case c.ui.keyCode.ENTER:
                i.preventDefault();
                clearTimeout(this.activating);
                this._activate(g === this.options.active ? false : g);
                return;
            default:
                return
        }
        i.preventDefault();
        clearTimeout(this.activating);
        g = this._focusNextTab(g, j);
        if (!i.ctrlKey) {
            h.attr("aria-selected", "false");
            this.tabs.eq(g).attr("aria-selected", "true");
            this.activating = this._delay(function () {
                this.option("active", g)
            }, this.delay)
        }
    }, _panelKeydown: function (g) {
        if (this._handlePageNav(g)) {
            return
        }
        if (g.ctrlKey && g.keyCode === c.ui.keyCode.UP) {
            g.preventDefault();
            this.active.focus()
        }
    }, _handlePageNav: function (g) {
        if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_UP) {
            this._activate(this._focusNextTab(this.options.active - 1, false));
            return true
        }
        if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_DOWN) {
            this._activate(this._focusNextTab(this.options.active + 1, true));
            return true
        }
    }, _findNextTab: function (h, i) {
        var g = this.tabs.length - 1;

        function j() {
            if (h > g) {
                h = 0
            }
            if (h < 0) {
                h = g
            }
            return h
        }

        while (c.inArray(j(), this.options.disabled) !== -1) {
            h = i ? h + 1 : h - 1
        }
        return h
    }, _focusNextTab: function (g, h) {
        g = this._findNextTab(g, h);
        this.tabs.eq(g).focus();
        return g
    }, _setOption: function (g, h) {
        if (g === "active") {
            this._activate(h);
            return
        }
        if (g === "disabled") {
            this._setupDisabled(h);
            return
        }
        this._super(g, h);
        if (g === "collapsible") {
            this.element.toggleClass("ui-tabs-collapsible", h);
            if (!h && this.options.active === false) {
                this._activate(0)
            }
        }
        if (g === "event") {
            this._setupEvents(h)
        }
        if (g === "heightStyle") {
            this._setupHeightStyle(h)
        }
    }, _tabId: function (g) {
        return g.attr("aria-controls") || "ui-tabs-" + d()
    }, _sanitizeSelector: function (g) {
        return g ? g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    }, refresh: function () {
        var h = this.options, g = this.tablist.children(":has(a[href])");
        h.disabled = c.map(g.filter(".ui-state-disabled"), function (i) {
            return g.index(i)
        });
        this._processTabs();
        if (h.active === false || !this.anchors.length) {
            h.active = false;
            this.active = c()
        } else {
            if (this.active.length && !c.contains(this.tablist[0], this.active[0])) {
                if (this.tabs.length === h.disabled.length) {
                    h.active = false;
                    this.active = c()
                } else {
                    this._activate(this._findNextTab(Math.max(0, h.active - 1), false))
                }
            } else {
                h.active = this.tabs.index(this.active)
            }
        }
        this._refresh()
    }, _refresh: function () {
        this._setupDisabled(this.options.disabled);
        this._setupEvents(this.options.event);
        this._setupHeightStyle(this.options.heightStyle);
        this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1});
        this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"});
        if (!this.active.length) {
            this.tabs.eq(0).attr("tabIndex", 0)
        } else {
            this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0});
            this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})
        }
    }, _processTabs: function () {
        var g = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
        this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1});
        this.anchors = this.tabs.map(function () {
            return c("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1});
        this.panels = c();
        this.anchors.each(function (n, l) {
            var h, j, m, k = c(l).uniqueId().attr("id"), o = c(l).closest("li"), p = o.attr("aria-controls");
            if (b(l)) {
                h = l.hash;
                j = g.element.find(g._sanitizeSelector(h))
            } else {
                m = g._tabId(o);
                h = "#" + m;
                j = g.element.find(h);
                if (!j.length) {
                    j = g._createPanel(m);
                    j.insertAfter(g.panels[n - 1] || g.tablist)
                }
                j.attr("aria-live", "polite")
            }
            if (j.length) {
                g.panels = g.panels.add(j)
            }
            if (p) {
                o.data("ui-tabs-aria-controls", p)
            }
            o.attr({"aria-controls": h.substring(1), "aria-labelledby": k});
            j.attr("aria-labelledby", k)
        });
        this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    }, _getList: function () {
        return this.element.find("ol,ul").eq(0)
    }, _createPanel: function (g) {
        return c("<div>").attr("id", g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
    }, _setupDisabled: function (j) {
        if (c.isArray(j)) {
            if (!j.length) {
                j = false
            } else {
                if (j.length === this.anchors.length) {
                    j = true
                }
            }
        }
        for (var h = 0, g; (g = this.tabs[h]); h++) {
            if (j === true || c.inArray(h, j) !== -1) {
                c(g).addClass("ui-state-disabled").attr("aria-disabled", "true")
            } else {
                c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
            }
        }
        this.options.disabled = j
    }, _setupEvents: function (h) {
        var g = {click: function (i) {
            i.preventDefault()
        }};
        if (h) {
            c.each(h.split(" "), function (j, i) {
                g[i] = "_eventHandler"
            })
        }
        this._off(this.anchors.add(this.tabs).add(this.panels));
        this._on(this.anchors, g);
        this._on(this.tabs, {keydown: "_tabKeydown"});
        this._on(this.panels, {keydown: "_panelKeydown"});
        this._focusable(this.tabs);
        this._hoverable(this.tabs)
    }, _setupHeightStyle: function (g) {
        var i, h = this.element.parent();
        if (g === "fill") {
            i = h.height();
            i -= this.element.outerHeight() - this.element.height();
            this.element.siblings(":visible").each(function () {
                var k = c(this), j = k.css("position");
                if (j === "absolute" || j === "fixed") {
                    return
                }
                i -= k.outerHeight(true)
            });
            this.element.children().not(this.panels).each(function () {
                i -= c(this).outerHeight(true)
            });
            this.panels.each(function () {
                c(this).height(Math.max(0, i - c(this).innerHeight() + c(this).height()))
            }).css("overflow", "auto")
        } else {
            if (g === "auto") {
                i = 0;
                this.panels.each(function () {
                    i = Math.max(i, c(this).height("").height())
                }).height(i)
            }
        }
    }, _eventHandler: function (g) {
        var p = this.options, k = this.active, l = c(g.currentTarget), j = l.closest("li"), n = j[0] === k[0], h = n && p.collapsible, i = h ? c() : this._getPanelForTab(j), m = !k.length ? c() : this._getPanelForTab(k), o = {oldTab: k, oldPanel: m, newTab: h ? c() : j, newPanel: i};
        g.preventDefault();
        if (j.hasClass("ui-state-disabled") || j.hasClass("ui-tabs-loading") || this.running || (n && !p.collapsible) || (this._trigger("beforeActivate", g, o) === false)) {
            return
        }
        p.active = h ? false : this.tabs.index(j);
        this.active = n ? c() : j;
        if (this.xhr) {
            this.xhr.abort()
        }
        if (!m.length && !i.length) {
            c.error("jQuery UI Tabs: Mismatching fragment identifier.")
        }
        if (i.length) {
            this.load(this.tabs.index(j), g)
        }
        this._toggle(g, o)
    }, _toggle: function (m, l) {
        var k = this, g = l.newPanel, j = l.oldPanel;
        this.running = true;
        function i() {
            k.running = false;
            k._trigger("activate", m, l)
        }

        function h() {
            l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
            if (g.length && k.options.show) {
                k._show(g, k.options.show, i)
            } else {
                g.show();
                i()
            }
        }

        if (j.length && this.options.hide) {
            this._hide(j, this.options.hide, function () {
                l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                h()
            })
        } else {
            l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
            j.hide();
            h()
        }
        j.attr({"aria-expanded": "false", "aria-hidden": "true"});
        l.oldTab.attr("aria-selected", "false");
        if (g.length && j.length) {
            l.oldTab.attr("tabIndex", -1)
        } else {
            if (g.length) {
                this.tabs.filter(function () {
                    return c(this).attr("tabIndex") === 0
                }).attr("tabIndex", -1)
            }
        }
        g.attr({"aria-expanded": "true", "aria-hidden": "false"});
        l.newTab.attr({"aria-selected": "true", tabIndex: 0})
    }, _activate: function (h) {
        var g, i = this._findActive(h);
        if (i[0] === this.active[0]) {
            return
        }
        if (!i.length) {
            i = this.active
        }
        g = i.find(".ui-tabs-anchor")[0];
        this._eventHandler({target: g, currentTarget: g, preventDefault: c.noop})
    }, _findActive: function (g) {
        return g === false ? c() : this.tabs.eq(g)
    }, _getIndex: function (g) {
        if (typeof g === "string") {
            g = this.anchors.index(this.anchors.filter("[href$='" + g + "']"))
        }
        return g
    }, _destroy: function () {
        if (this.xhr) {
            this.xhr.abort()
        }
        this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
        this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
        this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
        this.tabs.add(this.panels).each(function () {
            if (c.data(this, "ui-tabs-destroy")) {
                c(this).remove()
            } else {
                c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }
        });
        this.tabs.each(function () {
            var g = c(this), h = g.data("ui-tabs-aria-controls");
            if (h) {
                g.attr("aria-controls", h).removeData("ui-tabs-aria-controls")
            } else {
                g.removeAttr("aria-controls")
            }
        });
        this.panels.show();
        if (this.options.heightStyle !== "content") {
            this.panels.css("height", "")
        }
    }, enable: function (g) {
        var h = this.options.disabled;
        if (h === false) {
            return
        }
        if (g === e) {
            h = false
        } else {
            g = this._getIndex(g);
            if (c.isArray(h)) {
                h = c.map(h, function (i) {
                    return i !== g ? i : null
                })
            } else {
                h = c.map(this.tabs, function (i, j) {
                    return j !== g ? j : null
                })
            }
        }
        this._setupDisabled(h)
    }, disable: function (g) {
        var h = this.options.disabled;
        if (h === true) {
            return
        }
        if (g === e) {
            h = true
        } else {
            g = this._getIndex(g);
            if (c.inArray(g, h) !== -1) {
                return
            }
            if (c.isArray(h)) {
                h = c.merge([g], h).sort()
            } else {
                h = [g]
            }
        }
        this._setupDisabled(h)
    }, load: function (i, m) {
        i = this._getIndex(i);
        var l = this, j = this.tabs.eq(i), h = j.find(".ui-tabs-anchor"), g = this._getPanelForTab(j), k = {tab: j, panel: g};
        if (b(h[0])) {
            return
        }
        this.xhr = c.ajax(this._ajaxSettings(h, m, k));
        if (this.xhr && this.xhr.statusText !== "canceled") {
            j.addClass("ui-tabs-loading");
            g.attr("aria-busy", "true");
            this.xhr.success(function (n) {
                setTimeout(function () {
                    g.html(n);
                    l._trigger("load", m, k)
                }, 1)
            }).complete(function (o, n) {
                setTimeout(function () {
                    if (n === "abort") {
                        l.panels.stop(false, true)
                    }
                    j.removeClass("ui-tabs-loading");
                    g.removeAttr("aria-busy");
                    if (o === l.xhr) {
                        delete l.xhr
                    }
                }, 1)
            })
        }
    }, _ajaxSettings: function (g, j, i) {
        var h = this;
        return{url: g.attr("href"), beforeSend: function (l, k) {
            return h._trigger("beforeLoad", j, c.extend({jqXHR: l, ajaxSettings: k}, i))
        }}
    }, _getPanelForTab: function (g) {
        var h = c(g).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + h))
    }})
})(jQuery);
(function (d) {
    var b = 0;

    function c(f, g) {
        var e = (f.attr("aria-describedby") || "").split(/\s+/);
        e.push(g);
        f.data("ui-tooltip-id", g).attr("aria-describedby", d.trim(e.join(" ")))
    }

    function a(g) {
        var h = g.data("ui-tooltip-id"), f = (g.attr("aria-describedby") || "").split(/\s+/), e = d.inArray(h, f);
        if (e !== -1) {
            f.splice(e, 1)
        }
        g.removeData("ui-tooltip-id");
        f = d.trim(f.join(" "));
        if (f) {
            g.attr("aria-describedby", f)
        } else {
            g.removeAttr("aria-describedby")
        }
    }

    d.widget("ui.tooltip", {version: "1.10.3", options: {content: function () {
        var e = d(this).attr("title") || "";
        return d("<a>").text(e).html()
    }, hide: true, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: true, tooltipClass: null, track: false, close: null, open: null}, _create: function () {
        this._on({mouseover: "open", focusin: "open"});
        this.tooltips = {};
        this.parents = {};
        if (this.options.disabled) {
            this._disable()
        }
    }, _setOption: function (e, g) {
        var f = this;
        if (e === "disabled") {
            this[g ? "_disable" : "_enable"]();
            this.options[e] = g;
            return
        }
        this._super(e, g);
        if (e === "content") {
            d.each(this.tooltips, function (i, h) {
                f._updateContent(h)
            })
        }
    }, _disable: function () {
        var e = this;
        d.each(this.tooltips, function (h, f) {
            var g = d.Event("blur");
            g.target = g.currentTarget = f[0];
            e.close(g, true)
        });
        this.element.find(this.options.items).addBack().each(function () {
            var f = d(this);
            if (f.is("[title]")) {
                f.data("ui-tooltip-title", f.attr("title")).attr("title", "")
            }
        })
    }, _enable: function () {
        this.element.find(this.options.items).addBack().each(function () {
            var e = d(this);
            if (e.data("ui-tooltip-title")) {
                e.attr("title", e.data("ui-tooltip-title"))
            }
        })
    }, open: function (f) {
        var e = this, g = d(f ? f.target : this.element).closest(this.options.items);
        if (!g.length || g.data("ui-tooltip-id")) {
            return
        }
        if (g.attr("title")) {
            g.data("ui-tooltip-title", g.attr("title"))
        }
        g.data("ui-tooltip-open", true);
        if (f && f.type === "mouseover") {
            g.parents().each(function () {
                var i = d(this), h;
                if (i.data("ui-tooltip-open")) {
                    h = d.Event("blur");
                    h.target = h.currentTarget = this;
                    e.close(h, true)
                }
                if (i.attr("title")) {
                    i.uniqueId();
                    e.parents[this.id] = {element: this, title: i.attr("title")};
                    i.attr("title", "")
                }
            })
        }
        this._updateContent(g, f)
    }, _updateContent: function (j, i) {
        var h, e = this.options.content, g = this, f = i ? i.type : null;
        if (typeof e === "string") {
            return this._open(i, j, e)
        }
        h = e.call(j[0], function (k) {
            if (!j.data("ui-tooltip-open")) {
                return
            }
            g._delay(function () {
                if (i) {
                    i.type = f
                }
                this._open(i, j, k)
            })
        });
        if (h) {
            this._open(i, j, h)
        }
    }, _open: function (i, k, h) {
        var j, g, f, l = d.extend({}, this.options.position);
        if (!h) {
            return
        }
        j = this._find(k);
        if (j.length) {
            j.find(".ui-tooltip-content").html(h);
            return
        }
        if (k.is("[title]")) {
            if (i && i.type === "mouseover") {
                k.attr("title", "")
            } else {
                k.removeAttr("title")
            }
        }
        j = this._tooltip(k);
        c(k, j.attr("id"));
        j.find(".ui-tooltip-content").html(h);
        function e(m) {
            l.of = m;
            if (j.is(":hidden")) {
                return
            }
            j.position(l)
        }

        if (this.options.track && i && /^mouse/.test(i.type)) {
            this._on(this.document, {mousemove: e});
            e(i)
        } else {
            j.position(d.extend({of: k}, this.options.position))
        }
        j.hide();
        this._show(j, this.options.show);
        if (this.options.show && this.options.show.delay) {
            f = this.delayedShow = setInterval(function () {
                if (j.is(":visible")) {
                    e(l.of);
                    clearInterval(f)
                }
            }, d.fx.interval)
        }
        this._trigger("open", i, {tooltip: j});
        g = {keyup: function (m) {
            if (m.keyCode === d.ui.keyCode.ESCAPE) {
                var n = d.Event(m);
                n.currentTarget = k[0];
                this.close(n, true)
            }
        }, remove: function () {
            this._removeTooltip(j)
        }};
        if (!i || i.type === "mouseover") {
            g.mouseleave = "close"
        }
        if (!i || i.type === "focusin") {
            g.focusout = "close"
        }
        this._on(true, k, g)
    }, close: function (f) {
        var e = this, h = d(f ? f.currentTarget : this.element), g = this._find(h);
        if (this.closing) {
            return
        }
        clearInterval(this.delayedShow);
        if (h.data("ui-tooltip-title")) {
            h.attr("title", h.data("ui-tooltip-title"))
        }
        a(h);
        g.stop(true);
        this._hide(g, this.options.hide, function () {
            e._removeTooltip(d(this))
        });
        h.removeData("ui-tooltip-open");
        this._off(h, "mouseleave focusout keyup");
        if (h[0] !== this.element[0]) {
            this._off(h, "remove")
        }
        this._off(this.document, "mousemove");
        if (f && f.type === "mouseleave") {
            d.each(this.parents, function (j, i) {
                d(i.element).attr("title", i.title);
                delete e.parents[j]
            })
        }
        this.closing = true;
        this._trigger("close", f, {tooltip: g});
        this.closing = false
    }, _tooltip: function (e) {
        var g = "ui-tooltip-" + b++, f = d("<div>").attr({id: g, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
        d("<div>").addClass("ui-tooltip-content").appendTo(f);
        f.appendTo(this.document[0].body);
        this.tooltips[g] = e;
        return f
    }, _find: function (e) {
        var f = e.data("ui-tooltip-id");
        return f ? d("#" + f) : d()
    }, _removeTooltip: function (e) {
        e.remove();
        delete this.tooltips[e.attr("id")]
    }, _destroy: function () {
        var e = this;
        d.each(this.tooltips, function (h, f) {
            var g = d.Event("blur");
            g.target = g.currentTarget = f[0];
            e.close(g, true);
            d("#" + h).remove();
            if (f.data("ui-tooltip-title")) {
                f.attr("title", f.data("ui-tooltip-title"));
                f.removeData("ui-tooltip-title")
            }
        })
    }})
}(jQuery));
var swfobject = function () {
    var aq = "undefined", aD = "object", ab = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", aE = "application/x-shockwave-flash", ac = "SWFObjectExprInst", ax = "onreadystatechange", af = window, aL = document, aB = navigator, aa = false, Z = [aN], aG = [], ag = [], al = [], aJ, ad, ap, at, ak = false, aU = false, aH, an, aI = true, ah = function () {
        var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq, e = aB.userAgent.toLowerCase(), c = aB.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(e), j = c ? /mac/.test(c) : /mac/.test(e), g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, d = !+"\v1", f = [0, 0, 0], k = null;
        if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            k = aB.plugins[ab].description;
            if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                d = false;
                k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof af.ActiveXObject != aq) {
                try {
                    var i = new ActiveXObject(X);
                    if (i) {
                        k = i.GetVariable("$version");
                        if (k) {
                            d = true;
                            k = k.split(" ")[1].split(",");
                            f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)]
                        }
                    }
                } catch (b) {
                }
            }
        }
        return{w3: a, pv: f, wk: g, ie: d, win: h, mac: j}
    }(), aK = function () {
        if (!ah.w3) {
            return
        }
        if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
            aP()
        }
        if (!ak) {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("DOMContentLoaded", aP, false)
            }
            if (ah.ie && ah.win) {
                aL.attachEvent(ax, function () {
                    if (aL.readyState == "complete") {
                        aL.detachEvent(ax, arguments.callee);
                        aP()
                    }
                });
                if (af == top) {
                    (function () {
                        if (ak) {
                            return
                        }
                        try {
                            aL.documentElement.doScroll("left")
                        } catch (a) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        aP()
                    })()
                }
            }
            if (ah.wk) {
                (function () {
                    if (ak) {
                        return
                    }
                    if (!/loaded|complete/.test(aL.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    aP()
                })()
            }
            aC(aP)
        }
    }();

    function aP() {
        if (ak) {
            return
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b)
        } catch (a) {
            return
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]()
        }
    }

    function aj(a) {
        if (ak) {
            a()
        } else {
            Z[Z.length] = a
        }
    }

    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false)
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false)
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a)
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function () {
                            b();
                            a()
                        }
                    } else {
                        af.onload = a
                    }
                }
            }
        }
    }

    function aN() {
        if (aa) {
            Y()
        } else {
            am()
        }
    }

    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0;
            (function () {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                d.removeChild(b);
                a = null;
                am()
            })()
        } else {
            am()
        }
    }

    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {success: false, id: c};
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a)
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value")
                                    }
                                }
                                ae(e, f, c, l)
                            } else {
                                aF(i);
                                if (l) {
                                    l(a)
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b
                        }
                        l(a)
                    }
                }
            }
        }
    }

    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a
                }
            }
        }
        return d
    }

    function au() {
        return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
    }

    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {success: false, id: h};
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null
            } else {
                aJ = a;
                ad = h
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310"
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137"
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX" : "PlugIn", c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c
            } else {
                d.flashvars = c
            }
            if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                (function () {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            aA(f, d, h)
        }
    }

    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none";
            (function () {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            a.parentNode.replaceChild(aO(a), a)
        }
    }

    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true))
                        }
                    }
                }
            }
        }
        return d
    }

    function aA(e, g, c) {
        var d, a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i]
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"'
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />'
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id)
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k])
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k])
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l])
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b
            }
        }
        return d
    }

    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a)
    }

    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none";
                (function () {
                    if (b.readyState == 4) {
                        aT(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                b.parentNode.removeChild(b)
            }
        }
    }

    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }

    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a)
        } catch (b) {
        }
        return c
    }

    function ar(a) {
        return aL.createElement(a)
    }

    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b]
    }

    function ao(a) {
        var b = ah.pv, c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return(b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false
    }

    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return
        }
        var g = (a && typeof a == "string") ? a : "screen";
        if (c) {
            aH = null;
            an = null
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = g
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f)
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"))
            }
        }
    }

    function ay(a, c) {
        if (!aI) {
            return
        }
        var b = c ? "visible" : "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b
        } else {
            az("#" + a, "visibility:" + b)
        }
    }

    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b
    }

    var aR = function () {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function () {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2])
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c])
                }
                for (var e in ah) {
                    ah[e] = null
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null
                }
                swfobject = null
            })
        }
    }();
    return{registerObject: function (a, e, c, b) {
        if (ah.w3 && a && e) {
            var d = {};
            d.id = a;
            d.swfVersion = e;
            d.expressInstall = c;
            d.callbackFn = b;
            aG[aG.length] = d;
            ay(a, false)
        } else {
            if (b) {
                b({success: false, id: a})
            }
        }
    }, getObjectById: function (a) {
        if (ah.w3) {
            return av(a)
        }
    }, embedSWF: function (k, e, h, f, c, a, b, i, g, j) {
        var d = {success: false, id: e};
        if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
            ay(e, false);
            aj(function () {
                h += "";
                f += "";
                var q = {};
                if (g && typeof g === aD) {
                    for (var o in g) {
                        q[o] = g[o]
                    }
                }
                q.data = k;
                q.width = h;
                q.height = f;
                var n = {};
                if (i && typeof i === aD) {
                    for (var p in i) {
                        n[p] = i[p]
                    }
                }
                if (b && typeof b === aD) {
                    for (var l in b) {
                        if (typeof n.flashvars != aq) {
                            n.flashvars += "&" + l + "=" + b[l]
                        } else {
                            n.flashvars = l + "=" + b[l]
                        }
                    }
                }
                if (ao(c)) {
                    var m = aA(q, n, e);
                    if (q.id == e) {
                        ay(e, true)
                    }
                    d.success = true;
                    d.ref = m
                } else {
                    if (a && au()) {
                        q.data = a;
                        ae(q, n, e, j);
                        return
                    } else {
                        ay(e, true)
                    }
                }
                if (j) {
                    j(d)
                }
            })
        } else {
            if (j) {
                j(d)
            }
        }
    }, switchOffAutoHideShow: function () {
        aI = false
    }, ua: ah, getFlashPlayerVersion: function () {
        return{major: ah.pv[0], minor: ah.pv[1], release: ah.pv[2]}
    }, hasFlashPlayerVersion: ao, createSWF: function (a, b, c) {
        if (ah.w3) {
            return aA(a, b, c)
        } else {
            return undefined
        }
    }, showExpressInstall: function (b, a, d, c) {
        if (ah.w3 && au()) {
            ae(b, a, d, c)
        }
    }, removeSWF: function (a) {
        if (ah.w3) {
            aw(a)
        }
    }, createCSS: function (b, a, c, d) {
        if (ah.w3) {
            az(b, a, c, d)
        }
    }, addDomLoadEvent: aj, addLoadEvent: aC, getQueryParamValue: function (b) {
        var a = aL.location.search || aL.location.hash;
        if (a) {
            if (/\?/.test(a)) {
                a = a.split("?")[1]
            }
            if (b == null) {
                return ai(a)
            }
            var c = a.split("&");
            for (var d = 0; d < c.length; d++) {
                if (c[d].substring(0, c[d].indexOf("=")) == b) {
                    return ai(c[d].substring((c[d].indexOf("=") + 1)))
                }
            }
        }
        return""
    }, expressInstallCallback: function () {
        if (aU) {
            var a = aS(ac);
            if (a && aJ) {
                a.parentNode.replaceChild(aJ, a);
                if (ad) {
                    ay(ad, true);
                    if (ah.ie && ah.win) {
                        aJ.style.display = "block"
                    }
                }
                if (ap) {
                    ap(at)
                }
            }
            aU = false
        }
    }}
}();
$(document).ready(function () {
    function d(e) {
        return e.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }

    var c = d(location.pathname);
    var b = a("html", "body");
    $("a[href*=#]").not(".NotScroll").each(function () {
        var f = d(this.pathname) || c;
        if (c == f && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, "")) {
            var e = $(this.hash), g = this.hash;
            if (g && e.length > 0) {
                var h = e.offset().top;
                $(this).click(function (i) {
                    i.preventDefault();
                    $(b).animate({scrollTop: h}, 400, function () {
                        location.hash = g
                    })
                })
            }
        }
    });
    function a(h) {
        for (var g = 0, k = arguments.length; g < k; g++) {
            var j = arguments[g], e = $(j);
            if (e.scrollTop() > 0) {
                return j
            } else {
                e.scrollTop(1);
                var f = e.scrollTop() > 0;
                e.scrollTop(0);
                if (f) {
                    return j
                }
            }
        }
        return[]
    }
});
var topbarHTML = "";
var allFlashLink = {};
function initTopbarFlatForm(a, e, d, c, b) {
    topbarHTML = '<div id="boxTop">     <div id="box"> <div z2-width="1000" z2-height="40"  z2-zoneid="1030450863421216477"  class="z2-zads-zone" ></div></div></div>';
    jQuery("#" + a).append(topbarHTML)
}
jQuery(document).ready(function () {
    var b = location.href;
    var a = b.match(/:\/\/(.[^/]+)/)[1].split(".");
    if (a[1] == "360game") {
    } else {
        (function (g, c, h) {
            var f, e = g.getElementsByTagName(c)[0];
            if (g.getElementById(h)) {
                return
            }
            f = g.createElement(c);
            f.type = "text/javascript";
            f.async = true;
            f.id = h;
            f.src = "http://static.adtimaserver.vn/resource/js/zads-base-mod.js";
            e.parentNode.insertBefore(f, e)
        }(document, "script", "z2-jssdk"))
    }
});
var IE6 = jQuery.browser.msie && jQuery.browser.version == 6;
function createOverlayPopup(e) {
    if (jQuery("#overlays").length > 0) {
        return
    }
    var d = jQuery('<div id="overlays">');
    var a = jQuery(window).width() / 2;
    var c = jQuery(window).height() / 2;
    var b = jQuery(window).scrollTop();
    jQuery("body").append(d);
    if (IE6) {
        d.css({width: jQuery(document).width() - 18, height: jQuery(document).height(), position: "absolute", top: 0, left: 0, zIndex: 900, background: "#000000", opacity: 0})
    } else {
        d.css({width: jQuery(document).width(), height: jQuery(document).height(), position: "absolute", top: 0, left: 0, zIndex: 900, background: "#000000", opacity: 0})
    }
    d.fadeTo("fast", 0.7, function () {
        jQuery("#" + e).css({display: "block", top: c + b - jQuery("#" + e).height() / 2, left: a - jQuery("#" + e).width() / 2})
    });
    jQuery(window).resize(function () {
        var h = jQuery(window).height() / 2;
        var f = jQuery(window).width() / 2;
        var g = jQuery(window).scrollTop();
        if (IE6) {
            d.css({width: jQuery(document).width() - 18})
        } else {
            d.css({width: jQuery(document).width()})
        }
        jQuery("#" + e).css({top: h + g - jQuery("#" + e).height() / 2, left: f - jQuery("#" + e).width() / 2})
    });
    if (jQuery("#fbPopupMenu_" + e).find("li.Hilite").hasClass("ha")) {
        autoPlay(jQuery("#img_" + e), e)
    }
    jQuery(d).bind("click", function () {
        closePopup(e);
        return false
    });
    jQuery("#fbclose_" + e).bind("click", function () {
        closePopup(e);
        return false
    });
    jQuery("#" + e + " .PopupCloseBtn").bind("click", function () {
        closePopup(e);
        return false
    })
}
function closePopup(a) {
    jQuery("#" + a).css({display: "none"});
    jQuery("#overlays").fadeOut("fast", function () {
        jQuery("#overlays").remove();
        jQuery("#" + a).css({display: "none"})
    });
    if (a == "MusicOverlays") {
        jQuery("#" + a).remove()
    }
}
function topBarTracking() {
    _gaq.push(["_trackEvent", "Top Bar", "Vui Game 20112012", productCode]);
    window.open("http://vuigame.vn", "_blank")
}
function replaceTracking() {
    var a = jQuery("a");
    jQuery.each(a, function (c, d) {
        for (var b in specialLink) {
            allFlashLink[b] = specialLink[b].linkFlash
        }
    })
}
function getCookieMAS(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
}
function trackLink(d, c) {
};
var ga = (function (g) {
    var d = {"Tai khoan": "id.zing.vn", "Nap the": "pay.zing.vn"};
    var c = "";
    var h = "";

    function b(j) {
        return decodeURI((RegExp(j + "=(.+?)(&|$)").exec(g.location.search) || [, null])[1])
    }

    function a(j) {
        return j.replace(/([a-z])([A-Z])/g, "$1 $2")
    }

    function f(j) {
        return j.replace(/^[a-z]/, function (k) {
            return k.toUpperCase()
        })
    }

    function i(j) {
        j = a(j);
        j = j.toLowerCase();
        j = f(j);
        return j
    }

    function e(k, l) {
        var j = $(k).attr("onclick");
        l = i(l);
        c = a(c);
        h = a(h);
        j = j == undefined ? "" : j;
        if (j.indexOf("_gaq.push") < 0) {
            $(k).attr("onclick", j += ";_gaq.push(['_trackEvent', '" + l + "', '" + c + "', '" + h + "', 1]);")
        }
    }

    jQuery(document).ready(function () {
        if (typeof _gaq !== "undefined") {
            ga.init()
        }
    });
    return{init: function () {
        var j = this;
        c = b("utm_campaign");
        h = b("utm_medium");
        var k = document.body.className.match(/\bGaMedium[^\s]+\b/);
        c = c == "null" ? "NoCampaign" : c.split("_")[0];
        h = (h != "null") ? h : "NoMedium";
        if (k != null && k.length) {
            h = k[0].replace("GaMedium", "")
        }
        $("a, area").each(function () {
            var n = this.className.match(/\bGaCategory[^\s]+\b/);
            var l = this.href;
            if (n) {
                var o = n[0].replace("GaCategory", "");
                e(this, o)
            } else {
                if (jQuery(this).is("#ppregister_link")) {
                    e(this, "Dang ky")
                }
                for (var m in d) {
                    if (l.indexOf(d[m]) >= 0) {
                        e(this, m)
                    }
                }
            }
        })
    }}
})(window, undefined);
var adZoneIds = {};
function AdsTrueClick() {
    this.searchAdzoneId = function (b) {
        var a = adZoneIds[b];
        if (a == undefined) {
            return false
        } else {
            return a
        }
    };
    this.showAdsBanner = function (b) {
        var a = this.searchAdzoneId(b);
        this.displayAd(a, b + "_temp", b)
    };
    this.displayAd = function (b, c, a) {
        if (!$("#" + c).attr("id") || !$("#" + a).attr("id")) {
            return false
        }
        if (!b) {
            return
        }
        $("#" + c).css("display", "none");
        this.displayZone(b);
        $(document).ready(function () {
            if ($("#" + c).height() > 0) {
                $("#" + a).height($("#" + c).height());
                var f = $("#" + a).offset();
                var e = f.top + "px";
                var d = f.left + "px";
                $("#" + c).css("left", d);
                $("#" + c).css("top", e);
                $("#" + c).css("position", "absolute");
                $("#" + c).css("display", "block")
            }
        })
    };
    this.displayZone = function (a) {
        if (!a) {
            return
        }
        var b = (location.protocol == "https:" ? "https://123link.ad.zing.vn/www/delivery/ajs.php" : "http://123link.ad.zing.vn/www/delivery/ajs.php");
        var c = Math.floor(Math.random() * 99999999999);
        if (!document.MAX_used) {
            document.MAX_used = ","
        }
        document.write("<script type='text/javascript' src='" + b);
        document.write("?zoneid=" + a);
        document.write("&amp;cb=" + c);
        if (document.MAX_used != ",") {
            document.write("&amp;exclude=" + document.MAX_used)
        }
        document.write(document.charset ? "&amp;charset=" + document.charset : (document.characterSet ? "&amp;charset=" + document.characterSet : ""));
        document.write("&amp;loc=" + escape(window.location));
        if (document.referrer) {
            document.write("&amp;referer=" + escape(document.referrer))
        }
        if (document.context) {
            document.write("&context=" + escape(document.context))
        }
        if (document.mmm_fo) {
            document.write("&amp;mmm_fo=1")
        }
        document.write("'>    <\/script>  ")
    };
    this.isGoogleBanner = function () {
        var b = "";
        var d = window.location.search.substring(1);
        var e = document.body.className.match(/\bGaMedium[^\s]+\b/);
        if (e != null && e.length) {
            b = e[0].replace("GaMedium", "")
        }
        var c = document.referrer;
        if (c != null && c.length) {
            c = c.match(/:\/\/(.[^/]+)/)[1]
        } else {
            c = ""
        }
        var a = window.location.pathname.split("index.html");
        if (d.indexOf("utm_source") > -1 && d.indexOf("utm_medium") > -1 && d.indexOf("utm_term") > -1 && d.indexOf("utm_content") > -1 && d.indexOf("utm_campaign") > -1) {
            if ((a[1] == "intro") || (b == "LandingPage")) {
                return true
            }
        }
        if (c == "www.google.com" || c == "google.com" || c == "www.google.com.vn" || c == "google.com.vn") {
            if ((a[1] == "intro") || (b == "LandingPage")) {
                return true
            }
        }
        return false
    };
    this.showBannerTopBar1 = function () {
        var a = this.isGoogleBanner();
        if (!a) {
            this.showAdsBanner("advTopBar1")
        } else {
            if (jQuery("#topbar").length > 0) {
                jQuery("#topbar").hide()
            }
            return false
        }
    }
}
var objAds = new AdsTrueClick;
var isIE6 = jQuery.browser.msie && jQuery.browser.version == 6;
var xmlObjAds;
var CodeProduct = "";
var CookieProduct = "";
var CookieBottomProduct = "";
var CookieBottomProductIdlogin = "";
jQuery(window).load(function () {
    var c = jQuery("#cookiesTime").length > 0 && jQuery("#cookiesTime").val() != "" && !isNaN(jQuery("#cookiesTime").val()) ? parseFloat(jQuery("#cookiesTime").val()) : 120;
    var a = jQuery("#cookiesTimeBottom").length > 0 && jQuery("#cookiesTimeBottom").val() != "" && !isNaN(jQuery("#cookiesTimeBottom").val()) ? parseFloat(jQuery("#cookiesTimeBottom").val()) : 120;
    var b = initAdsBanner(CodeProduct, CookieProduct, c);
    if (!b) {
        initAdsBannerBottom(CodeProduct, CookieBottomProduct, a);
        initAdsBannerBottomIL(CodeProduct, CookieBottomProductIdlogin, a)
    }
});
function initAdsBanner(c, e, f) {
    var b = new CookieTime();
    if (b.MethodGetCookie(e) == null || b.MethodGetCookie(e) == "") {
        var a = 60000 * f;
        var d = new BannerPopup();
        return d.MethodBannerPopup(c, a)
    }
    return false
}
function initAdsBannerBottom(d, c, e) {
    var f = new CookieTime();
    if (f.MethodGetCookie(c) == null || f.MethodGetCookie(c) == "") {
        var b = 60000 * e;
        var a = new BannerPopupBottom();
        a.MethodBannerPopupBottom(d, b)
    }
}
function initAdsBannerBottomIL(b, c, f) {
    var e = new CookieTime();
    if (e.MethodGetCookie(c) == null || e.MethodGetCookie(c) == "") {
        var a = 60000 * f;
        var d = new BannerPopupBottomIdLogin();
        d.MethodBannerPopupBottom(b, a)
    }
}
BannerPopup = function () {
    this.MethodOverlay = function () {
        var e = jQuery(window).scrollTop();
        var d = jQuery(window).height();
        var a = jQuery(window).width();
        var b = jQuery(document).height();
        var f = jQuery("#bannerPopup").height();
        var c = jQuery("#bannerPopup").width();
        jQuery("#thewindowbackground").css({height: b, width: a});
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopup").stop().animate({top: e + (d - f > 0 ? (d - f) / 2 : 0)}, 400)
            } else {
                jQuery("#bannerPopup").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopup").css({top: d - f > 0 ? (d - f) / 2 : 0, left: (a - c) / 2});
        jQuery(window).resize(function () {
            e = jQuery(window).scrollTop();
            d = jQuery(window).height();
            a = jQuery(window).width();
            jQuery("#thewindowbackground").css({height: b, width: a});
            if (isIE6) {
                jQuery("#bannerPopup").css({top: e + (d - f > 0 ? (d - f) / 2 : 0), left: (a - c) / 2})
            } else {
                jQuery("#bannerPopup").css({top: d - f > 0 ? (d - f) / 2 : 0, left: (a - c) / 2})
            }
        });
        jQuery(window).scroll(function () {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopup").stop().animate({top: e + (d - f > 0 ? (d - f) / 2 : 0)}, 400)
                } else {
                    jQuery("#bannerPopup").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopup").removeClass("fixedBanner");
                jQuery("#bannerPopup").css({top: d - f > 0 ? (d - f) / 2 : 0})
            }
        })
    };
    this.ClosePopup = function (b) {
        jQuery("#thewindowbackground").css("display", "none");
        jQuery("#bannerPopup").css("display", "none");
        var a = new CookieTime();
        a.MethodSetCookie(CodeProduct + "_Cookie", CodeProduct, b)
    };
    this.checkDate = function (a, b) {
    };
    this.MethodBannerPopup = function (g, b) {
        var e = this;
        var d = jQuery("#bannerPopup > div > a > img").attr("alt");
        if (d == "" || d == undefined) {
            d = g + "_popupcenter"
        }
        if ((jQuery("#bannerPopup > div > a > img").length > 0) || (jQuery("#bannerPopup  embed").length > 0)) {
            e.MethodOverlay();
            var a = jQuery("#typePopup").length > 0 && jQuery("#typePopup").val() != "" && !isNaN(jQuery("#typePopup").val()) ? parseFloat(jQuery("#typePopup").val()) : 0;
            if (jQuery("#bannerPopup > div > a > img").length > 0) {
                var c = jQuery("#bannerPopup img").attr("src");
                var f = c.substr(c.length - 3, 3);
                if (f == "png" || f == "PNG" || a == 1) {
                    jQuery("#bannerPopup").css({background: "none"})
                }
            }
            jQuery("#bannerPopup > div > a").click(function () {
                e.ClosePopup(b);
                _gaq.push(["_trackEvent", "Banner Popup", "Click", d])
            });
            jQuery("#thewindowbackground").click(function () {
                e.ClosePopup(b);
                _gaq.push(["_trackEvent", "Banner Popup", "Close - Black", d])
            });
            jQuery("#bannerPopup > div > a > img").click(function () {
                _gaq.push(["_trackEvent", "Banner Popup", "Img", d])
            });
            jQuery("#btClose").click(function () {
                e.ClosePopup(b);
                _gaq.push(["_trackEvent", "Banner Popup", "Close - Button", d]);
                return false
            });
            jQuery("#popupBtnClose").click(function () {
                if (jQuery("#chkClose").is(":checked")) {
                    var h = jQuery("#cookiesTimeSecond").length > 0 && jQuery("#cookiesTimeSecond").val() != "" && !isNaN(jQuery("#cookiesTimeSecond").val()) ? parseFloat(jQuery("#cookiesTimeSecond").val()) : 120;
                    b = 60000 * h
                }
                e.ClosePopup(b);
                _gaq.push(["_trackEvent", "Banner Popup", "Close - Button Lan hai", d]);
                return false
            });
            jQuery("#thewindowbackground").css({display: "block"});
            jQuery("#bannerPopup").css({display: "block"});
            return true
        }
    };
    return this
};
BannerPopupBottom = function () {
    this.MouseScroll = function () {
        var f = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            f = f - jQuery(".MenuFooter").height()
        }
        var b = jQuery(window).width();
        var e = jQuery(window).scrollTop();
        var c = jQuery(document).height();
        var g = jQuery("#bannerPopupBottom").outerHeight();
        var d = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({height: c, width: b});
        jQuery("#bannerPopupBottom").css({top: f - g - 2, right: 0});
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({top: e + f - g - 2}, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({top: f - g - 2});
        jQuery(window).resize(function () {
            e = jQuery(window).scrollTop();
            f = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                f = f - jQuery(".MenuFooter").height()
            }
            b = jQuery(window).width();
            jQuery("#thewindowbackground").css({height: c, width: b});
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({top: e + f - g - 2})
            } else {
                jQuery("#bannerPopupBottom").css({top: f - g - 2})
            }
        });
        jQuery(window).scroll(function () {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({top: e + f - g - 2}, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({top: f - g - 2})
            }
        });
        jQuery(window).load(function () {
            var h = jQuery(document).height();
            jQuery("#thewindowbackground").css({height: h})
        })
    };
    this.checkDate = function (b, c) {
    };
    this.ClosePopupBottom = function () {
        jQuery("#bannerPopupBottom").css("display", "none")
    };
    this.MethodBannerPopupBottom = function (e, b) {
        var d = this;
        var c = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (c == "" || c == undefined) {
            c = e + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            d.MouseScroll();
            jQuery("#btCloseBottom").click(function () {
                d.ClosePopupBottom();
                _gaq.push(["_trackEvent", "Banner Popup Bottom", "Close", c]);
                var f = new CookieTime();
                f.MethodSetCookie(e + "_CookieBottom", e, b);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function () {
                _gaq.push(["_trackEvent", "Banner Popup Bottom", "Img", c])
            });
            jQuery("#bannerPopupBottom").css({display: "block"})
        }
    };
    var a = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 30000);
    return this
};
BannerPopupBottomIdLogin = function () {
    this.MouseScroll = function () {
        var f = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            f = f - jQuery(".MenuFooter").height()
        }
        var b = jQuery(window).width();
        var e = jQuery(window).scrollTop();
        var c = jQuery(document).height();
        var g = jQuery("#bannerPopupBottom").outerHeight();
        var d = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({height: c, width: b});
        jQuery("#bannerPopupBottom").css({top: f - g - 2, right: 0});
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({top: e + f - g - 2}, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({top: f - g - 2});
        jQuery(window).resize(function () {
            e = jQuery(window).scrollTop();
            f = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                f = f - jQuery(".MenuFooter").height()
            }
            b = jQuery(window).width();
            jQuery("#thewindowbackground").css({height: c, width: b});
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({top: e + f - g - 2})
            } else {
                jQuery("#bannerPopupBottom").css({top: f - g - 2})
            }
        });
        jQuery(window).scroll(function () {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({top: e + f - g - 2}, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({top: f - g - 2})
            }
        });
        jQuery(window).load(function () {
            var h = jQuery(document).height();
            jQuery("#thewindowbackground").css({height: h})
        })
    };
    this.checkDate = function (b, c) {
    };
    this.ClosePopupBottom = function () {
        jQuery("#bannerPopupBottom").css("display", "none")
    };
    this.MethodBannerPopupBottom = function (e, b) {
        var d = this;
        var c = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (c == "" || c == undefined) {
            c = e + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            d.MouseScroll();
            jQuery("#btCloseBottom").click(function () {
                d.ClosePopupBottom();
                _gaq.push(["Banner Popup Bottom", "Close", c]);
                var f = new CookieTime();
                f.MethodSetCookie(e + "_CookieBottom2", e, b);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function () {
                _gaq.push(["Banner Popup Bottom", "Img", c])
            });
            jQuery("#bannerPopupBottom").css({display: "block"})
        }
    };
    var a = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 30000);
    return this
};
CookieTime = function () {
    var a = 0;
    this.MethodGetCookie = function (b) {
        if (document.cookie.length > 0) {
            CookieStart = document.cookie.indexOf(b + "=");
            if (CookieStart != -1) {
                CookieStart = CookieStart + b.length + 1;
                CookieEnd = document.cookie.indexOf(";", CookieStart);
                if (CookieEnd == -1) {
                    CookieEnd = document.cookie.length
                }
                return unescape(document.cookie.substring(CookieStart, CookieEnd))
            }
        }
        return""
    };
    this.MethodSetCookie = function (c, d, b) {
        var e = new Date();
        e.setTime(e.getTime() + b);
        document.cookie = c + "=" + escape(d) + ((b == null) ? "" : ";expires=" + e.toUTCString())
    }
}; 
