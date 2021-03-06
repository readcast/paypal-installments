window.installmentsModal = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    };
    __webpack_require__.t = function(value, mode) {
        1 & mode && (value = __webpack_require__(value));
        if (8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return {}.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "setupInstallments", (function() {
        return setupInstallments;
    }));
    var n, preact_module_u, preact_module_i, preact_module_t, preact_module_o, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function s(n, l) {
        for (var u in l) n[u] = l[u];
        return n;
    }
    function preact_module_a(n) {
        var l = n.parentNode;
        l && l.removeChild(n);
    }
    function h(n, l, u) {
        var i, t, o, r = arguments, f = {};
        for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
        if (arguments.length > 3) for (u = [ u ], o = 3; o < arguments.length; o++) u.push(r[o]);
        if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
        return v(n, f, i, t, null);
    }
    function v(l, u, i, t, o) {
        var r = {
            type: l,
            props: u,
            key: i,
            ref: t,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: o
        };
        return null == o && (r.__v = r), null != n.vnode && n.vnode(r), r;
    }
    function p(n) {
        return n.children;
    }
    function d(n, l) {
        this.props = n, this.context = l;
    }
    function _(n, l) {
        if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
        return "function" == typeof n.type ? _(n) : null;
    }
    function w(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
                n.__e = n.__c.base = u.__e;
                break;
            }
            return w(n);
        }
    }
    function k(l) {
        (!l.__d && (l.__d = !0) && preact_module_u.push(l) && !g.__r++ || preact_module_t !== n.debounceRendering) && ((preact_module_t = n.debounceRendering) || preact_module_i)(g);
    }
    function g() {
        for (var n; g.__r = preact_module_u.length; ) n = preact_module_u.sort((function(n, l) {
            return n.__v.__b - l.__v.__b;
        })), preact_module_u = [], n.some((function(n) {
            var l, u, i, t, o, r, f;
            n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, 
            t = $(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null != o.__h ? [ r ] : null, u, null == r ? _(o) : r, o.__h), 
            j(u, o), t != r && w(o)));
        }));
    }
    function m(n, l, u, i, t, o, r, c, s, h) {
        var y, d, w, k, g, m, b, A = i && i.__k || e, P = A.length;
        for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
            children: k
        }, null, null, null) : null != k.__e || null != k.__c ? v(k.type, k.props, k.key, null, k.__v) : k)) {
            if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0; else for (d = 0; d < P; d++) {
                if ((w = A[d]) && k.key == w.key && k.type === w.type) {
                    A[d] = void 0;
                    break;
                }
                w = null;
            }
            g = $(n, k, w = w || f, t, o, r, c, s, h), (d = k.ref) && w.ref != d && (b || (b = []), 
            w.ref && b.push(w.ref, null, k), b.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), 
            s = x(n, k, w, A, r, g, s), h || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
        }
        if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--; ) null != r[y] && preact_module_a(r[y]);
        for (y = P; y--; ) null != A[y] && L(A[y], A[y]);
        if (b) for (y = 0; y < b.length; y++) I(b[y], b[++y], b[++y]);
    }
    function x(n, l, u, i, t, o, r) {
        var f, e, c;
        if (void 0 !== l.__d) f = l.__d, l.__d = void 0; else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), 
        f = null; else {
            for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;
            n.insertBefore(o, r), f = r;
        }
        return void 0 !== f ? f : o.nextSibling;
    }
    function P(n, l, u) {
        "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
    }
    function C(n, l, u, i, t) {
        var o, r, f;
        if (t && "className" == l && (l = "class"), "style" === l) if ("string" == typeof u) n.style.cssText = u; else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
            if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
        } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), 
        (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, 
        f = o ? N : z, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
    function z(l) {
        this.l[l.type + !1](n.event ? n.event(l) : l);
    }
    function N(l) {
        this.l[l.type + !0](n.event ? n.event(l) : l);
    }
    function T(n, l, u) {
        var i, t;
        for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && T(t, l, u), 
        l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
    }
    function $(l, u, i, t, o, r, f, e, c) {
        var a, h, v, y, _, w, k, g, b, x, A, P = u.type;
        if (void 0 !== u.constructor) return null;
        null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [ e ]), (a = n.__b) && a(u);
        try {
            n: if ("function" == typeof P) {
                if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, 
                i.__c ? k = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(g, x) : (u.__c = h = new d(g, x), 
                h.constructor = P, h.render = M), b && b.sub(h), h.props = g, h.state || (h.state = {}), 
                h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), 
                null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), 
                s(h.__s, P.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), 
                null != h.componentDidMount && h.__h.push(h.componentDidMount); else {
                    if (null == P.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), 
                    !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
                        h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, 
                        u.__k = i.__k, h.__h.length && f.push(h), T(u, e, l);
                        break n;
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push((function() {
                        h.componentDidUpdate(y, _, w);
                    }));
                }
                h.context = x, h.props = g, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, 
                h.__P = l, a = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), 
                v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(y, _)), 
                A = null != a && a.type == p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [ A ], u, i, t, o, r, f, e, c), 
                h.base = u.__e, u.__h = null, h.__h.length && f.push(h), k && (h.__E = h.__ = null), 
                h.__e = !1;
            } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = H(i.__e, u, i, t, o, r, f, c);
            (a = n.diffed) && a(u);
        } catch (l) {
            u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), 
            n.__e(l, u, i);
        }
        return u.__e;
    }
    function j(l, u) {
        n.__c && n.__c(u, l), l.some((function(u) {
            try {
                l = u.__h, u.__h = [], l.some((function(n) {
                    n.call(u);
                }));
            } catch (l) {
                n.__e(l, u.__v);
            }
        }));
    }
    function H(n, l, u, i, t, o, r, c) {
        var s, a, h, v, y, p = u.props, d = l.props;
        if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
            n = a, o[s] = null;
            break;
        }
        if (null == n) {
            if (null === l.type) return document.createTextNode(d);
            n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
                is: d.is
            }), o = null, c = !1;
        }
        if (null === l.type) p === d || c && n.data === d || (n.data = d); else {
            if (null != o && (o = e.slice.call(n.childNodes)), h = (p = u.props || f).dangerouslySetInnerHTML, 
            v = d.dangerouslySetInnerHTML, !c) {
                if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
                (v || h) && (v && (h && v.__html == h.__html || v.__html === n.innerHTML) || (n.innerHTML = v && v.__html || ""));
            }
            (function(n, l, u, i, t) {
                var o;
                for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);
                for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
            })(n, d, p, t, c), v ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [ s ], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), 
            c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && C(n, "value", s, p.value, !1), 
            "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
        }
        return n;
    }
    function I(l, u, i) {
        try {
            "function" == typeof l ? l(u) : l.current = u;
        } catch (l) {
            n.__e(l, i);
        }
    }
    function L(l, u, i) {
        var t, o, r;
        if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), 
        i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, 
        null != (t = l.__c)) {
            if (t.componentWillUnmount) try {
                t.componentWillUnmount();
            } catch (l) {
                n.__e(l, u);
            }
            t.base = t.__P = null;
        }
        if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
        null != o && preact_module_a(o);
    }
    function M(n, l, u) {
        return this.constructor(n, u);
    }
    n = {
        __e: function(n, l) {
            for (var u, i, t, o = l.__h; l = l.__; ) if ((u = l.__c) && !u.__) try {
                if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), 
                t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), 
                t) return l.__h = o, u.__E = u;
            } catch (l) {
                n = l;
            }
            throw n;
        }
    }, d.prototype.setState = function(n, l) {
        var u;
        u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), 
        "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), 
        k(this));
    }, d.prototype.forceUpdate = function(n) {
        this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
    }, d.prototype.render = p, preact_module_u = [], preact_module_i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
    g.__r = 0, preact_module_o = f;
    var hooks_module_t, hooks_module_u, hooks_module_r, hooks_module_o = 0, hooks_module_i = [], hooks_module_c = n.__r, hooks_module_f = n.diffed, hooks_module_e = n.__c, hooks_module_a = n.unmount;
    function hooks_module_v(t, r) {
        n.__h && n.__h(hooks_module_u, t, hooks_module_o || r), hooks_module_o = 0;
        var i = hooks_module_u.__H || (hooks_module_u.__H = {
            __: [],
            __h: []
        });
        return t >= i.__.length && i.__.push({}), i.__[t];
    }
    function hooks_module_m(n) {
        return hooks_module_o = 1, function(n, r, o) {
            var i = hooks_module_v(hooks_module_t++, 2);
            return i.t = n, i.__c || (i.__ = [ hooks_module_k(void 0, r), function(n) {
                var t = i.t(i.__[0], n);
                i.__[0] !== t && (i.__ = [ t, i.__[1] ], i.__c.setState({}));
            } ], i.__c = hooks_module_u), i.__;
        }(hooks_module_k, n);
    }
    function hooks_module_y(r, o) {
        var i = hooks_module_v(hooks_module_t++, 3);
        !n.__s && function(n, t) {
            return !n || n.length !== t.length || t.some((function(t, u) {
                return t !== n[u];
            }));
        }(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__H.__h.push(i));
    }
    function hooks_module_q() {
        hooks_module_i.some((function(t) {
            if (t.__P) try {
                t.__H.__h.forEach(hooks_module_b), t.__H.__h.forEach(hooks_module_g), t.__H.__h = [];
            } catch (u) {
                return t.__H.__h = [], n.__e(u, t.__v), !0;
            }
        })), hooks_module_i = [];
    }
    n.__r = function(n) {
        hooks_module_c && hooks_module_c(n), hooks_module_t = 0;
        var r = (hooks_module_u = n.__c).__H;
        r && (r.__h.forEach(hooks_module_b), r.__h.forEach(hooks_module_g), r.__h = []);
    }, n.diffed = function(t) {
        hooks_module_f && hooks_module_f(t);
        var u = t.__c;
        u && u.__H && u.__H.__h.length && (1 !== hooks_module_i.push(u) && hooks_module_r === n.requestAnimationFrame || ((hooks_module_r = n.requestAnimationFrame) || function(n) {
            var t, u = function() {
                clearTimeout(r), hooks_module_x && cancelAnimationFrame(t), setTimeout(n);
            }, r = setTimeout(u, 100);
            hooks_module_x && (t = requestAnimationFrame(u));
        })(hooks_module_q));
    }, n.__c = function(t, u) {
        u.some((function(t) {
            try {
                t.__h.forEach(hooks_module_b), t.__h = t.__h.filter((function(n) {
                    return !n.__ || hooks_module_g(n);
                }));
            } catch (r) {
                u.some((function(n) {
                    n.__h && (n.__h = []);
                })), u = [], n.__e(r, t.__v);
            }
        })), hooks_module_e && hooks_module_e(t, u);
    }, n.unmount = function(t) {
        hooks_module_a && hooks_module_a(t);
        var u = t.__c;
        if (u && u.__H) try {
            u.__H.__.forEach(hooks_module_b);
        } catch (t) {
            n.__e(t, u.__v);
        }
    };
    var hooks_module_x = "function" == typeof requestAnimationFrame;
    function hooks_module_b(n) {
        "function" == typeof n.u && n.u();
    }
    function hooks_module_g(n) {
        n.u = n.__();
    }
    function hooks_module_k(n, t) {
        return "function" == typeof t ? t(n) : t;
    }
    function utils_isPromise(item) {
        try {
            if (!item) return !1;
            if ("undefined" != typeof Promise && item instanceof Promise) return !0;
            if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
            if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
            var _toString = {}.toString;
            if (_toString) {
                var name = _toString.call(item);
                if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
            }
            if ("function" == typeof item.then) return !0;
        } catch (err) {
            return !1;
        }
        return !1;
    }
    var dispatchedErrors = [];
    var possiblyUnhandledPromiseHandlers = [];
    var activeCount = 0;
    var flushPromise;
    function flushActive() {
        if (!activeCount && flushPromise) {
            var promise = flushPromise;
            flushPromise = null;
            promise.resolve();
        }
    }
    function startActive() {
        activeCount += 1;
    }
    function endActive() {
        activeCount -= 1;
        flushActive();
    }
    var promise_ZalgoPromise = function() {
        function ZalgoPromise(handler) {
            var _this = this;
            this.resolved = void 0;
            this.rejected = void 0;
            this.errorHandled = void 0;
            this.value = void 0;
            this.error = void 0;
            this.handlers = void 0;
            this.dispatching = void 0;
            this.stack = void 0;
            this.resolved = !1;
            this.rejected = !1;
            this.errorHandled = !1;
            this.handlers = [];
            if (handler) {
                var _result;
                var _error;
                var resolved = !1;
                var rejected = !1;
                var isAsync = !1;
                startActive();
                try {
                    handler((function(res) {
                        if (isAsync) _this.resolve(res); else {
                            resolved = !0;
                            _result = res;
                        }
                    }), (function(err) {
                        if (isAsync) _this.reject(err); else {
                            rejected = !0;
                            _error = err;
                        }
                    }));
                } catch (err) {
                    endActive();
                    this.reject(err);
                    return;
                }
                endActive();
                isAsync = !0;
                resolved ? this.resolve(_result) : rejected && this.reject(_error);
            }
        }
        var _proto = ZalgoPromise.prototype;
        _proto.resolve = function(result) {
            if (this.resolved || this.rejected) return this;
            if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
            this.resolved = !0;
            this.value = result;
            this.dispatch();
            return this;
        };
        _proto.reject = function(error) {
            var _this2 = this;
            if (this.resolved || this.rejected) return this;
            if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
            if (!error) {
                var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                error = new Error("Expected reject to be called with Error, got " + _err);
            }
            this.rejected = !0;
            this.error = error;
            this.errorHandled || setTimeout((function() {
                _this2.errorHandled || function(err, promise) {
                    if (-1 === dispatchedErrors.indexOf(err)) {
                        dispatchedErrors.push(err);
                        setTimeout((function() {
                            throw err;
                        }), 1);
                        for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                    }
                }(error, _this2);
            }), 1);
            this.dispatch();
            return this;
        };
        _proto.asyncReject = function(error) {
            this.errorHandled = !0;
            this.reject(error);
            return this;
        };
        _proto.dispatch = function() {
            var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
            if (!this.dispatching && (resolved || rejected)) {
                this.dispatching = !0;
                startActive();
                var chain = function(firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        secondPromise.resolve(res);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < handlers.length; i++) {
                    var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                    var _result2 = void 0;
                    if (resolved) try {
                        _result2 = onSuccess ? onSuccess(this.value) : this.value;
                    } catch (err) {
                        promise.reject(err);
                        continue;
                    } else if (rejected) {
                        if (!onError) {
                            promise.reject(this.error);
                            continue;
                        }
                        try {
                            _result2 = onError(this.error);
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        }
                    }
                    if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                        _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
                        _result2.errorHandled = !0;
                    } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                }
                handlers.length = 0;
                this.dispatching = !1;
                endActive();
            }
        };
        _proto.then = function(onSuccess, onError) {
            if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
            if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
            var promise = new ZalgoPromise;
            this.handlers.push({
                promise: promise,
                onSuccess: onSuccess,
                onError: onError
            });
            this.errorHandled = !0;
            this.dispatch();
            return promise;
        };
        _proto.catch = function(onError) {
            return this.then(void 0, onError);
        };
        _proto.finally = function(onFinally) {
            if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
            return this.then((function(result) {
                return ZalgoPromise.try(onFinally).then((function() {
                    return result;
                }));
            }), (function(err) {
                return ZalgoPromise.try(onFinally).then((function() {
                    throw err;
                }));
            }));
        };
        _proto.timeout = function(time, err) {
            var _this3 = this;
            if (this.resolved || this.rejected) return this;
            var timeout = setTimeout((function() {
                _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
            }), time);
            return this.then((function(result) {
                clearTimeout(timeout);
                return result;
            }));
        };
        _proto.toPromise = function() {
            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
        };
        ZalgoPromise.resolve = function(value) {
            return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                return value.then(resolve, reject);
            })) : (new ZalgoPromise).resolve(value);
        };
        ZalgoPromise.reject = function(error) {
            return (new ZalgoPromise).reject(error);
        };
        ZalgoPromise.asyncReject = function(error) {
            return (new ZalgoPromise).asyncReject(error);
        };
        ZalgoPromise.all = function(promises) {
            var promise = new ZalgoPromise;
            var count = promises.length;
            var results = [];
            if (!count) {
                promise.resolve(results);
                return promise;
            }
            var chain = function(i, firstPromise, secondPromise) {
                return firstPromise.then((function(res) {
                    results[i] = res;
                    0 == (count -= 1) && promise.resolve(results);
                }), (function(err) {
                    secondPromise.reject(err);
                }));
            };
            for (var i = 0; i < promises.length; i++) {
                var prom = promises[i];
                if (prom instanceof ZalgoPromise) {
                    if (prom.resolved) {
                        results[i] = prom.value;
                        count -= 1;
                        continue;
                    }
                } else if (!utils_isPromise(prom)) {
                    results[i] = prom;
                    count -= 1;
                    continue;
                }
                chain(i, ZalgoPromise.resolve(prom), promise);
            }
            0 === count && promise.resolve(results);
            return promise;
        };
        ZalgoPromise.hash = function(promises) {
            var result = {};
            var awaitPromises = [];
            var _loop = function(key) {
                if (promises.hasOwnProperty(key)) {
                    var value = promises[key];
                    utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                        result[key] = res;
                    }))) : result[key] = value;
                }
            };
            for (var key in promises) _loop(key);
            return ZalgoPromise.all(awaitPromises).then((function() {
                return result;
            }));
        };
        ZalgoPromise.map = function(items, method) {
            return ZalgoPromise.all(items.map(method));
        };
        ZalgoPromise.onPossiblyUnhandledException = function(handler) {
            return function(handler) {
                possiblyUnhandledPromiseHandlers.push(handler);
                return {
                    cancel: function() {
                        possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                    }
                };
            }(handler);
        };
        ZalgoPromise.try = function(method, context, args) {
            if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
            var result;
            startActive();
            try {
                result = method.apply(context, args || []);
            } catch (err) {
                endActive();
                return ZalgoPromise.reject(err);
            }
            endActive();
            return ZalgoPromise.resolve(result);
        };
        ZalgoPromise.delay = function(_delay) {
            return new ZalgoPromise((function(resolve) {
                setTimeout(resolve, _delay);
            }));
        };
        ZalgoPromise.isPromise = function(value) {
            return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
        };
        ZalgoPromise.flush = function() {
            return function(Zalgo) {
                var promise = flushPromise = flushPromise || new Zalgo;
                flushActive();
                return promise;
            }(ZalgoPromise);
        };
        return ZalgoPromise;
    }();
    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }).apply(this, arguments);
    }
    var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
    function isAboutProtocol(win) {
        void 0 === win && (win = window);
        return "about:" === win.location.protocol;
    }
    function canReadFromWindow(win) {
        try {
            return !0;
        } catch (err) {}
        return !1;
    }
    function getActualDomain(win) {
        void 0 === win && (win = window);
        var location = win.location;
        if (!location) throw new Error("Can not read window location");
        var protocol = location.protocol;
        if (!protocol) throw new Error("Can not read window protocol");
        if ("file:" === protocol) return "file://";
        if ("about:" === protocol) {
            var parent = function(win) {
                void 0 === win && (win = window);
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }(win);
            return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
        }
        var host = location.host;
        if (!host) throw new Error("Can not read window host");
        return protocol + "//" + host;
    }
    function getDomain(win) {
        void 0 === win && (win = window);
        var domain = getActualDomain(win);
        return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
    }
    var iframeWindows = [];
    var iframeFrames = [];
    function isWindowClosed(win, allowMock) {
        void 0 === allowMock && (allowMock = !0);
        try {
            if (win === window) return !1;
        } catch (err) {
            return !0;
        }
        try {
            if (!win) return !0;
        } catch (err) {
            return !0;
        }
        try {
            if (win.closed) return !0;
        } catch (err) {
            return !err || err.message !== IE_WIN_ACCESS_ERROR;
        }
        if (allowMock && function(win) {
            if (!function(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }(win)) return !1;
            try {
                if (win === window) return !0;
                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                if (getDomain(window) === getDomain(win)) return !0;
            } catch (err) {}
            return !1;
        }(win)) try {
            if (win.mockclosed) return !0;
        } catch (err) {}
        try {
            if (!win.parent || !win.top) return !0;
        } catch (err) {}
        var iframeIndex = function(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }(iframeWindows, win);
        if (-1 !== iframeIndex) {
            var frame = iframeFrames[iframeIndex];
            if (frame && function(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                    var parent = frame;
                    for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                    if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                }
                return !1;
            }(frame)) return !0;
        }
        return !1;
    }
    function isWindow(obj) {
        try {
            if (obj === window) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if ("[object Window]" === {}.toString.call(obj)) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (window.Window && obj instanceof window.Window) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.self === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.parent === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.top === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
        } catch (err) {
            return !0;
        }
        try {
            if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
        } catch (err) {}
        return !1;
    }
    function util_safeIndexOf(collection, item) {
        for (var i = 0; i < collection.length; i++) try {
            if (collection[i] === item) return i;
        } catch (err) {}
        return -1;
    }
    var weakmap_CrossDomainSafeWeakMap = function() {
        function CrossDomainSafeWeakMap() {
            this.name = void 0;
            this.weakmap = void 0;
            this.keys = void 0;
            this.values = void 0;
            this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
            if (function() {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                    var testWeakMap = new WeakMap;
                    var testKey = {};
                    Object.freeze(testKey);
                    testWeakMap.set(testKey, "__testvalue__");
                    return "__testvalue__" === testWeakMap.get(testKey);
                } catch (err) {
                    return !1;
                }
            }()) try {
                this.weakmap = new WeakMap;
            } catch (err) {}
            this.keys = [];
            this.values = [];
        }
        var _proto = CrossDomainSafeWeakMap.prototype;
        _proto._cleanupClosedWindows = function() {
            var weakmap = this.weakmap;
            var keys = this.keys;
            for (var i = 0; i < keys.length; i++) {
                var value = keys[i];
                if (isWindow(value) && isWindowClosed(value)) {
                    if (weakmap) try {
                        weakmap.delete(value);
                    } catch (err) {}
                    keys.splice(i, 1);
                    this.values.splice(i, 1);
                    i -= 1;
                }
            }
        };
        _proto.isSafeToReadWrite = function(key) {
            return !isWindow(key);
        };
        _proto.set = function(key, value) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                weakmap.set(key, value);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var name = this.name;
                var entry = key[name];
                entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                    value: [ key, value ],
                    writable: !0
                });
                return;
            } catch (err) {}
            this._cleanupClosedWindows();
            var keys = this.keys;
            var values = this.values;
            var index = util_safeIndexOf(keys, key);
            if (-1 === index) {
                keys.push(key);
                values.push(value);
            } else values[index] = value;
        };
        _proto.get = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                if (weakmap.has(key)) return weakmap.get(key);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                return entry && entry[0] === key ? entry[1] : void 0;
            } catch (err) {}
            this._cleanupClosedWindows();
            var index = util_safeIndexOf(this.keys, key);
            if (-1 !== index) return this.values[index];
        };
        _proto.delete = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                weakmap.delete(key);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                entry && entry[0] === key && (entry[0] = entry[1] = void 0);
            } catch (err) {}
            this._cleanupClosedWindows();
            var keys = this.keys;
            var index = util_safeIndexOf(keys, key);
            if (-1 !== index) {
                keys.splice(index, 1);
                this.values.splice(index, 1);
            }
        };
        _proto.has = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                if (weakmap.has(key)) return !0;
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                return !(!entry || entry[0] !== key);
            } catch (err) {}
            this._cleanupClosedWindows();
            return -1 !== util_safeIndexOf(this.keys, key);
        };
        _proto.getOrSet = function(key, getter) {
            if (this.has(key)) return this.get(key);
            var value = getter();
            this.set(key, value);
            return value;
        };
        return CrossDomainSafeWeakMap;
    }();
    function uniqueID() {
        var chars = "0123456789abcdef";
        return "xxxxxxxxxx".replace(/./g, (function() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        })) + "_" + function(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            })));
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
            throw new Error("Can not find window.btoa or Buffer");
        }((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
    var objectIDs;
    function serializeArgs(args) {
        try {
            return JSON.stringify([].slice.call(args), (function(subkey, val) {
                return "function" == typeof val ? "memoize[" + function(obj) {
                    objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                    if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                    var uid = objectIDs.get(obj);
                    if (!uid) {
                        uid = typeof obj + ":" + uniqueID();
                        objectIDs.set(obj, uid);
                    }
                    return uid;
                }(val) + "]" : val;
            }));
        } catch (err) {
            throw new Error("Arguments not serializable -- can not be used to memoize");
        }
    }
    var memoizedFunctions = [];
    function memoize(method, options) {
        var _this = this;
        void 0 === options && (options = {});
        var cacheMap = new weakmap_CrossDomainSafeWeakMap;
        var memoizedFunction = function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, (function() {
                return {};
            }));
            var key = serializeArgs(args);
            var cacheTime = options.time;
            cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime && delete cache[key];
            if (cache[key]) return cache[key].value;
            var time = Date.now();
            var value = method.apply(this, arguments);
            cache[key] = {
                time: time,
                value: value
            };
            return cache[key].value;
        };
        memoizedFunction.reset = function() {
            cacheMap.delete(options.thisNamespace ? _this : method);
        };
        memoizedFunctions.push(memoizedFunction);
        return function(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }(memoizedFunction, (options.name || (fn = method).name || fn.__name__ || fn.displayName || "anonymous") + "::memoized");
        var fn;
    }
    memoize.clear = function() {
        for (var _i2 = 0; _i2 < memoizedFunctions.length; _i2++) memoizedFunctions[_i2].reset();
    };
    memoize((function(obj) {
        if (Object.values) return Object.values(obj);
        var result = [];
        for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
        return result;
    }));
    Error;
    function isDocumentReady() {
        return Boolean(document.body) && "complete" === document.readyState;
    }
    function isDocumentInteractive() {
        return Boolean(document.body) && "interactive" === document.readyState;
    }
    memoize((function() {
        return new promise_ZalgoPromise((function(resolve) {
            if (isDocumentReady() || isDocumentInteractive()) return resolve();
            var interval = setInterval((function() {
                if (isDocumentReady() || isDocumentInteractive()) {
                    clearInterval(interval);
                    return resolve();
                }
            }), 10);
        }));
    }));
    var currentScript = "undefined" != typeof document ? document.currentScript : null;
    var getCurrentScript = memoize((function() {
        if (currentScript) return currentScript;
        if (currentScript = function() {
            try {
                var stack = function() {
                    try {
                        throw new Error("_");
                    } catch (err) {
                        return err.stack || "";
                    }
                }();
                var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                var scriptLocation = stackDetails && stackDetails[1];
                if (!scriptLocation) return;
                for (var _i20 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i20 < _Array$prototype$slic2.length; _i20++) {
                    var script = _Array$prototype$slic2[_i20];
                    if (script.src && script.src === scriptLocation) return script;
                }
            } catch (err) {}
        }()) return currentScript;
        throw new Error("Can not determine current script");
    }));
    var currentUID = uniqueID();
    memoize((function() {
        var script;
        try {
            script = getCurrentScript();
        } catch (err) {
            return currentUID;
        }
        var uid = script.getAttribute("data-uid");
        if (uid && "string" == typeof uid) return uid;
        uid = uniqueID();
        script.setAttribute("data-uid", uid);
        return uid;
    }));
    function Installments(_ref) {
        var data = _ref.data, cspNonce = _ref.cspNonce, close = _ref.close, content = _ref.content;
        var _useState = hooks_module_m(null), selectedOption = _useState[0], setSelectedOption = _useState[1];
        var _useState2 = hooks_module_m(null), selectedIndex = _useState2[0], setSelectedIndex = _useState2[1];
        var renderContent = function(line, dataObj) {
            return line.replace(/{([^{]+)}/g, (function(match, key) {
                return void 0 !== dataObj[key] ? dataObj[key] : "";
            }));
        };
        return h(p, null, h("style", {
            nonce: cspNonce
        }, "\n                    .installments {\n                        outline-style: none;\n                        padding-bottom: 20px;\n                        position: relative;\n                    }\n\n                    .installments .header {\n                        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2);\n                        padding-right: 50px;\n                        position: relative;\n                    }\n\n                    .installments h3 {\n                        padding: 15px 20px;\n                        margin:0;\n                        font-weight: normal;\n                        font-size: 1em;\n                    }\n\n                    .installments button {\n                        background: #fff;\n                        border: none;\n                    }\n\n                    .installments ul {\n                        margin:0;\n                        padding:0;\n                    }\n                    .installments li {\n                        padding: 0 10px;\n                    }\n                    .installments li .list-wrap {\n                        border: 1px solid #fff;\n                        border-bottom-color: #ccc;\n                        padding: 13px;\n                        display: flex;\n                        text-decoration: none;\n                        color: inherit;\n                        width: 100%;\n                        text-align: left;\n                        align-items: inherit;\n                        font-size: 1em;\n                        font-family: inherit;\n                        cursor: pointer;\n                    }\n                    .installments li .list-wrap:hover {\n                        background: #F6F7FA;\n                    }\n                    .installments li .list-wrap:active {\n                        border:1px solid #000;\n                    }\n                    .installments li.selected .list-wrap {\n                        background: #F6F7FA;\n                    }\n                    .installments .months {\n                        align-items: center;\n                        display: flex;\n                        width: 50px;\n                        position: relative;\n                    }\n                    .installments .months:after {\n                        content: \"\";\n                        width: 1px;\n                        top: 0;\n                        bottom: 0;\n                        background: #ccc;\n                        position: absolute;\n                        right: 15px;\n                    }\n                    .installments .details {\n                        font-size: 0.9em;\n                    }\n                    .installments .details .price {\n                        display: block;\n                        font-weight:bold;\n                        margin-bottom:6px;\n                    }\n\n                    .installments .agree-info {\n                        font-size: 0.9em;\n                        text-align: center;\n                        padding: 0 10px;\n                    }\n                    \n                    .installments .btn-container {\n                        text-align: center;\n                        padding: 15px;\n                    }\n                    .installments .pay-btn{\n                        border: 0;\n                        background: #2C2E2F;\n                        padding: 10px 20px;\n                        border-radius: 25px;\n                        line-height: 1.5em;\n                        color: #fff;\n                        font-weight: bold;\n                        font-size: 1em;\n                        transition: background-color 240ms ease;\n                        cursor: pointer;\n                    }\n                    .installments .pay-btn:hover,\n                    .installments .pay-btn:focus {\n                        filter: brightness(1.2);\n                        outline: 0;\n                    }\n                    .installments .pay-btn:active,\n                    .installments .pay-btn:focus {\n                        text-decoration: underline;                    \n                    }\n                    .installments .pay-btn .amount{\n                        margin-left:5px;\n                    }\n\n                    .installments .close-btn {\n                        position: absolute;\n                        right: 11px;\n                        top: 11px;\n                        width: 26px;\n                        height: 26px;\n                        opacity: 0.6;\n                        z-index: 1;\n                        cursor: pointer;\n                    }\n                    .installments .close-btn:hover {\n                        opacity: 1;\n                    }\n                    .installments .close-btn:before, \n                    .installments .close-btn:after {\n                        position: absolute;\n                        left: 12px;\n                        content: ' ';\n                        height: 16px;\n                        width: 2px;\n                        background-color: #000;\n                        transform: rotate(45deg);\n                        top: 5px;\n                    }\n                    .installments .close-btn:after {\n                        transform: rotate(-45deg);\n                    }\n                "), h("div", {
            class: "installments"
        }, h("button", {
            class: "close-btn",
            onClick: function() {
                close();
                return data.onClose();
            },
            "aria-label": "close",
            type: "button"
        }), h("div", {
            className: "header"
        }, h("h3", {
            className: "title"
        }, content.header)), h("ul", {
            id: "installments-list"
        }, data.options.map((function(option, i) {
            return h("li", {
                className: selectedIndex === i ? "selected" : ""
            }, h("button", {
                type: "button",
                class: "list-wrap",
                onClick: function(event) {
                    !function(event, option, index) {
                        event.preventDefault();
                        setSelectedOption(option);
                        setSelectedIndex(index);
                        option.onSelect(option);
                    }(event, option, i);
                }
            }, h("div", {
                className: "months"
            }, option.term, "x"), h("div", {
                className: "details"
            }, h("span", {
                className: "price"
            }, 1 === option.term ? option.percent ? renderContent(content.monthly1xWithDiscount, {
                percent: Number(option.percent)
            }) : content.monthly1x : renderContent(content.monthly, option)), h("span", {
                className: "total"
            }, renderContent(1 === option.term && option.percent ? content.totalWithDiscount : content.totalAmount, option)))));
        }))), h("div", {
            className: "btn-container"
        }, h("button", {
            type: "button",
            className: "pay-btn",
            onClick: function() {
                close();
                return data.onPay(selectedOption);
            }
        }, renderContent(content.payLabel, {
            payAmount: selectedOption ? selectedOption.totalAmount : data.cartAmount
        }))), h("div", {
            className: "agree-info"
        }, content.disclaimer)));
    }
    function Page(_ref) {
        var cspNonce = _ref.cspNonce, content = _ref.content;
        var _useXProps = function() {
            var _useState = hooks_module_m(window.xprops), xprops = _useState[0], setXProps = _useState[1];
            hooks_module_y((function() {
                return xprops.onProps((function(newProps) {
                    setXProps(_extends({}, newProps));
                }));
            }), []);
            return _extends({}, xprops);
        }(), data = _useXProps.data, close = _useXProps.close;
        var _useState = hooks_module_m(!1), visible = _useState[0], setVisible = _useState[1];
        hooks_module_y((function() {
            var hasOptions = Boolean(data && data.options && data.options.length);
            setVisible(hasOptions);
        }), [ data ]);
        return h(p, null, h("style", {
            nonce: cspNonce
        }, "\n                    * {\n                        box-sizing: border-box;\n                    }\n\n                    html, body {\n                        margin: 0;\n                        padding: 0;\n                        font-family: Helvetica, sans-serif;\n                        font-size: 14px;\n                    }\n\n                    body {\n                        width: 100%;\n                        overflow:auto;\n                    }\n                "), visible ? h(Installments, {
            data: data,
            cspNonce: cspNonce,
            close: close,
            content: content
        }) : null);
    }
    function setupInstallments(_ref2) {
        !function(l, u, i) {
            var t, r, c;
            n.__ && n.__(l, u), r = (t = i === preact_module_o) ? null : u.__k, l = h(p, null, [ l ]), 
            c = [], $(u, u.__k = l, r || f, f, void 0 !== u.ownerSVGElement, r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, f, t), 
            j(c, l);
        }(h(Page, {
            cspNonce: _ref2.cspNonce,
            content: _ref2.content
        }), function() {
            var body = document.body;
            if (!body) throw new Error("Document body not found");
            return body;
        }());
    }
} ]);