(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Xu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function _1(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function (r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function () {
                return e[r]
            }
        })
    }), n
}
var rd = {
        exports: {}
    },
    Xo = {},
    id = {
        exports: {}
    },
    ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi = Symbol.for("react.element"),
    N1 = Symbol.for("react.portal"),
    P1 = Symbol.for("react.fragment"),
    T1 = Symbol.for("react.strict_mode"),
    z1 = Symbol.for("react.profiler"),
    I1 = Symbol.for("react.provider"),
    b1 = Symbol.for("react.context"),
    R1 = Symbol.for("react.forward_ref"),
    L1 = Symbol.for("react.suspense"),
    M1 = Symbol.for("react.memo"),
    O1 = Symbol.for("react.lazy"),
    vs = Symbol.iterator;

function j1(e) {
    return e === null || typeof e != "object" ? null : (e = vs && e[vs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var od = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    ld = Object.assign,
    ad = {};

function Pr(e, t, n) {
    this.props = e, this.context = t, this.refs = ad, this.updater = n || od
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Pr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ud() {}
ud.prototype = Pr.prototype;

function Gu(e, t, n) {
    this.props = e, this.context = t, this.refs = ad, this.updater = n || od
}
var Zu = Gu.prototype = new ud;
Zu.constructor = Gu;
ld(Zu, Pr.prototype);
Zu.isPureReactComponent = !0;
var Cs = Array.isArray,
    sd = Object.prototype.hasOwnProperty,
    Ju = {
        current: null
    },
    cd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function fd(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) sd.call(t, r) && !cd.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Fi,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Ju.current
    }
}

function H1(e, t) {
    return {
        $$typeof: Fi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function e0(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fi
}

function U1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Es = /\/+/g;

function Cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? U1("" + e.key) : t.toString(36)
}

function lo(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Fi:
                case N1:
                    l = !0
            }
    }
    if (l) return l = e, i = i(l), e = r === "" ? "." + Cl(l, 0) : r, Cs(i) ? (n = "", e != null && (n = e.replace(Es, "$&/") + "/"), lo(i, t, n, "", function (s) {
        return s
    })) : i != null && (e0(i) && (i = H1(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Es, "$&/") + "/") + e)), t.push(i)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Cs(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Cl(o, a);
            l += lo(o, t, n, u, i)
        } else if (u = j1(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + Cl(o, a++), l += lo(o, t, n, u, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Mi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return lo(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }), r
}

function V1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var je = {
        current: null
    },
    ao = {
        transition: null
    },
    $1 = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: ao,
        ReactCurrentOwner: Ju
    };

function dd() {
    throw Error("act(...) is not supported in production builds of React.")
}
ee.Children = {
    map: Mi,
    forEach: function (e, t, n) {
        Mi(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Mi(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return Mi(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!e0(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ee.Component = Pr;
ee.Fragment = P1;
ee.Profiler = z1;
ee.PureComponent = Gu;
ee.StrictMode = T1;
ee.Suspense = L1;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
ee.act = dd;
ee.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ld({}, e.props),
        i = e.key,
        o = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, l = Ju.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) sd.call(t, u) && !cd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a
    }
    return {
        $$typeof: Fi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
};
ee.createContext = function (e) {
    return e = {
        $$typeof: b1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: I1,
        _context: e
    }, e.Consumer = e
};
ee.createElement = fd;
ee.createFactory = function (e) {
    var t = fd.bind(null, e);
    return t.type = e, t
};
ee.createRef = function () {
    return {
        current: null
    }
};
ee.forwardRef = function (e) {
    return {
        $$typeof: R1,
        render: e
    }
};
ee.isValidElement = e0;
ee.lazy = function (e) {
    return {
        $$typeof: O1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: V1
    }
};
ee.memo = function (e, t) {
    return {
        $$typeof: M1,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ee.startTransition = function (e) {
    var t = ao.transition;
    ao.transition = {};
    try {
        e()
    } finally {
        ao.transition = t
    }
};
ee.unstable_act = dd;
ee.useCallback = function (e, t) {
    return je.current.useCallback(e, t)
};
ee.useContext = function (e) {
    return je.current.useContext(e)
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
    return je.current.useDeferredValue(e)
};
ee.useEffect = function (e, t) {
    return je.current.useEffect(e, t)
};
ee.useId = function () {
    return je.current.useId()
};
ee.useImperativeHandle = function (e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
};
ee.useInsertionEffect = function (e, t) {
    return je.current.useInsertionEffect(e, t)
};
ee.useLayoutEffect = function (e, t) {
    return je.current.useLayoutEffect(e, t)
};
ee.useMemo = function (e, t) {
    return je.current.useMemo(e, t)
};
ee.useReducer = function (e, t, n) {
    return je.current.useReducer(e, t, n)
};
ee.useRef = function (e) {
    return je.current.useRef(e)
};
ee.useState = function (e) {
    return je.current.useState(e)
};
ee.useSyncExternalStore = function (e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
};
ee.useTransition = function () {
    return je.current.useTransition()
};
ee.version = "18.3.1";
id.exports = ee;
var de = id.exports;
const Va = Xu(de);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1 = de,
    q1 = Symbol.for("react.element"),
    Q1 = Symbol.for("react.fragment"),
    K1 = Object.prototype.hasOwnProperty,
    Y1 = W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    X1 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function pd(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) K1.call(t, r) && !X1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: q1,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Y1.current
    }
}
Xo.Fragment = Q1;
Xo.jsx = pd;
Xo.jsxs = pd;
rd.exports = Xo;
var b = rd.exports,
    hd = {
        exports: {}
    },
    ut = {},
    xd = {
        exports: {}
    },
    gd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(L, V) {
        var B = L.length;
        L.push(V);
        e: for (; 0 < B;) {
            var T = B - 1 >>> 1,
                z = L[T];
            if (0 < i(z, V)) L[T] = V, L[B] = z, B = T;
            else break e
        }
    }

    function n(L) {
        return L.length === 0 ? null : L[0]
    }

    function r(L) {
        if (L.length === 0) return null;
        var V = L[0],
            B = L.pop();
        if (B !== V) {
            L[0] = B;
            e: for (var T = 0, z = L.length, w = z >>> 1; T < w;) {
                var R = 2 * (T + 1) - 1,
                    te = L[R],
                    q = R + 1,
                    ce = L[q];
                if (0 > i(te, B)) q < z && 0 > i(ce, te) ? (L[T] = ce, L[q] = B, T = q) : (L[T] = te, L[R] = B, T = R);
                else if (q < z && 0 > i(ce, B)) L[T] = ce, L[q] = B, T = q;
                else break e
            }
        }
        return V
    }

    function i(L, V) {
        var B = L.sortIndex - V.sortIndex;
        return B !== 0 ? B : L.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var l = Date,
            a = l.now();
        e.unstable_now = function () {
            return l.now() - a
        }
    }
    var u = [],
        s = [],
        c = 1,
        h = null,
        f = 3,
        d = !1,
        m = !1,
        y = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function x(L) {
        for (var V = n(s); V !== null;) {
            if (V.callback === null) r(s);
            else if (V.startTime <= L) r(s), V.sortIndex = V.expirationTime, t(u, V);
            else break;
            V = n(s)
        }
    }

    function v(L) {
        if (y = !1, x(L), !m)
            if (n(u) !== null) m = !0, W(k);
            else {
                var V = n(s);
                V !== null && Q(v, V.startTime - L)
            }
    }

    function k(L, V) {
        m = !1, y && (y = !1, g(D), D = -1), d = !0;
        var B = f;
        try {
            for (x(V), h = n(u); h !== null && (!(h.expirationTime > V) || L && !F());) {
                var T = h.callback;
                if (typeof T == "function") {
                    h.callback = null, f = h.priorityLevel;
                    var z = T(h.expirationTime <= V);
                    V = e.unstable_now(), typeof z == "function" ? h.callback = z : h === n(u) && r(u), x(V)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var w = !0;
            else {
                var R = n(s);
                R !== null && Q(v, R.startTime - V), w = !1
            }
            return w
        } finally {
            h = null, f = B, d = !1
        }
    }
    var E = !1,
        S = null,
        D = -1,
        N = 5,
        A = -1;

    function F() {
        return !(e.unstable_now() - A < N)
    }

    function _() {
        if (S !== null) {
            var L = e.unstable_now();
            A = L;
            var V = !0;
            try {
                V = S(!0, L)
            } finally {
                V ? P() : (E = !1, S = null)
            }
        } else E = !1
    }
    var P;
    if (typeof p == "function") P = function () {
        p(_)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            j = U.port2;
        U.port1.onmessage = _, P = function () {
            j.postMessage(null)
        }
    } else P = function () {
        C(_, 0)
    };

    function W(L) {
        S = L, E || (E = !0, P())
    }

    function Q(L, V) {
        D = C(function () {
            L(e.unstable_now())
        }, V)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (L) {
        L.callback = null
    }, e.unstable_continueExecution = function () {
        m || d || (m = !0, W(k))
    }, e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < L ? Math.floor(1e3 / L) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return f
    }, e.unstable_getFirstCallbackNode = function () {
        return n(u)
    }, e.unstable_next = function (L) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var V = 3;
                break;
            default:
                V = f
        }
        var B = f;
        f = V;
        try {
            return L()
        } finally {
            f = B
        }
    }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (L, V) {
        switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
        }
        var B = f;
        f = L;
        try {
            return V()
        } finally {
            f = B
        }
    }, e.unstable_scheduleCallback = function (L, V, B) {
        var T = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? T + B : T) : B = T, L) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
        }
        return z = B + z, L = {
            id: c++,
            callback: V,
            priorityLevel: L,
            startTime: B,
            expirationTime: z,
            sortIndex: -1
        }, B > T ? (L.sortIndex = B, t(s, L), n(u) === null && L === n(s) && (y ? (g(D), D = -1) : y = !0, Q(v, B - T))) : (L.sortIndex = z, t(u, L), m || d || (m = !0, W(k))), L
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function (L) {
        var V = f;
        return function () {
            var B = f;
            f = V;
            try {
                return L.apply(this, arguments)
            } finally {
                f = B
            }
        }
    }
})(gd);
xd.exports = gd;
var G1 = xd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1 = de,
    at = G1;

function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var md = new Set,
    si = {};

function Wn(e, t) {
    Cr(e, t), Cr(e + "Capture", t)
}

function Cr(e, t) {
    for (si[e] = t, e = 0; e < t.length; e++) md.add(t[e])
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    $a = Object.prototype.hasOwnProperty,
    J1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ws = {},
    ks = {};

function ex(e) {
    return $a.call(ks, e) ? !0 : $a.call(ws, e) ? !1 : J1.test(e) ? ks[e] = !0 : (ws[e] = !0, !1)
}

function tx(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function nx(e, t, n, r) {
    if (t === null || typeof t > "u" || tx(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function He(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Ne[e] = new He(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Ne[t] = new He(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ne[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ne[e] = new He(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Ne[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ne[e] = new He(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Ne[e] = new He(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ne[e] = new He(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Ne[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var t0 = /[\-:]([a-z])/g;

function n0(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(t0, n0);
    Ne[t] = new He(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(t0, n0);
    Ne[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(t0, n0);
    Ne[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ne[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ne.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ne[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function r0(e, t, n, r) {
    var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nx(t, n, i, r) && (n = null), r || i === null ? ex(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Kt = Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Oi = Symbol.for("react.element"),
    er = Symbol.for("react.portal"),
    tr = Symbol.for("react.fragment"),
    i0 = Symbol.for("react.strict_mode"),
    Wa = Symbol.for("react.profiler"),
    yd = Symbol.for("react.provider"),
    vd = Symbol.for("react.context"),
    o0 = Symbol.for("react.forward_ref"),
    qa = Symbol.for("react.suspense"),
    Qa = Symbol.for("react.suspense_list"),
    l0 = Symbol.for("react.memo"),
    on = Symbol.for("react.lazy"),
    Cd = Symbol.for("react.offscreen"),
    Bs = Symbol.iterator;

function Rr(e) {
    return e === null || typeof e != "object" ? null : (e = Bs && e[Bs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var me = Object.assign,
    El;

function qr(e) {
    if (El === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        El = t && t[1] || ""
    }
    return `
` + El + e
}
var wl = !1;

function kl(e, t) {
    if (!e || wl) return "";
    wl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var i = s.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a];) a--;
            for (; 1 <= l && 0 <= a; l--, a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--, a--, 0 > a || i[l] !== o[a]) {
                                var u = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        wl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? qr(e) : ""
}

function rx(e) {
    switch (e.tag) {
        case 5:
            return qr(e.type);
        case 16:
            return qr("Lazy");
        case 13:
            return qr("Suspense");
        case 19:
            return qr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = kl(e.type, !1), e;
        case 11:
            return e = kl(e.type.render, !1), e;
        case 1:
            return e = kl(e.type, !0), e;
        default:
            return ""
    }
}

function Ka(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case tr:
            return "Fragment";
        case er:
            return "Portal";
        case Wa:
            return "Profiler";
        case i0:
            return "StrictMode";
        case qa:
            return "Suspense";
        case Qa:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case vd:
            return (e.displayName || "Context") + ".Consumer";
        case yd:
            return (e._context.displayName || "Context") + ".Provider";
        case o0:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case l0:
            return t = e.displayName || null, t !== null ? t : Ka(e.type) || "Memo";
        case on:
            t = e._payload, e = e._init;
            try {
                return Ka(e(t))
            } catch {}
    }
    return null
}

function ix(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ka(t);
        case 8:
            return t === i0 ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Cn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Ed(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function ox(e) {
    var t = Ed(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (l) {
                r = "" + l, o.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (l) {
                r = "" + l
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ji(e) {
    e._valueTracker || (e._valueTracker = ox(e))
}

function wd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ed(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Eo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ya(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ss(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Cn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function kd(e, t) {
    t = t.checked, t != null && r0(e, "checked", t, !1)
}

function Xa(e, t) {
    kd(e, t);
    var n = Cn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ga(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ga(e, t.type, Cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function As(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ga(e, t, n) {
    (t !== "number" || Eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Qr = Array.isArray;

function dr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Cn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Za(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ds(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(M(92));
            if (Qr(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Cn(n)
    }
}

function Bd(e, t) {
    var n = Cn(t.value),
        r = Cn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Fs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Sd(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ja(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Sd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Hi, Ad = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Hi = Hi || document.createElement("div"), Hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ci(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Gr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    lx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function (e) {
    lx.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Gr[t] = Gr[e]
    })
});

function Dd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gr.hasOwnProperty(e) && Gr[e] ? ("" + t).trim() : t + "px"
}

function Fd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Dd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var ax = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function eu(e, t) {
    if (t) {
        if (ax[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62))
    }
}

function tu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var nu = null;

function a0(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ru = null,
    pr = null,
    hr = null;

function _s(e) {
    if (e = Pi(e)) {
        if (typeof ru != "function") throw Error(M(280));
        var t = e.stateNode;
        t && (t = tl(t), ru(e.stateNode, e.type, t))
    }
}

function _d(e) {
    pr ? hr ? hr.push(e) : hr = [e] : pr = e
}

function Nd() {
    if (pr) {
        var e = pr,
            t = hr;
        if (hr = pr = null, _s(e), t)
            for (e = 0; e < t.length; e++) _s(t[e])
    }
}

function Pd(e, t) {
    return e(t)
}

function Td() {}
var Bl = !1;

function zd(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
        return Pd(e, t, n)
    } finally {
        Bl = !1, (pr !== null || hr !== null) && (Td(), Nd())
    }
}

function fi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = tl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n
}
var iu = !1;
if ($t) try {
    var Lr = {};
    Object.defineProperty(Lr, "passive", {
        get: function () {
            iu = !0
        }
    }), window.addEventListener("test", Lr, Lr), window.removeEventListener("test", Lr, Lr)
} catch {
    iu = !1
}

function ux(e, t, n, r, i, o, l, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (c) {
        this.onError(c)
    }
}
var Zr = !1,
    wo = null,
    ko = !1,
    ou = null,
    sx = {
        onError: function (e) {
            Zr = !0, wo = e
        }
    };

function cx(e, t, n, r, i, o, l, a, u) {
    Zr = !1, wo = null, ux.apply(sx, arguments)
}

function fx(e, t, n, r, i, o, l, a, u) {
    if (cx.apply(this, arguments), Zr) {
        if (Zr) {
            var s = wo;
            Zr = !1, wo = null
        } else throw Error(M(198));
        ko || (ko = !0, ou = s)
    }
}

function qn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Id(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ns(e) {
    if (qn(e) !== e) throw Error(M(188))
}

function dx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = qn(e), t === null) throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Ns(i), e;
                if (o === r) return Ns(i), t;
                o = o.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var l = !1, a = i.child; a;) {
                if (a === n) {
                    l = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    l = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a;) {
                    if (a === n) {
                        l = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        l = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!l) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t
}

function bd(e) {
    return e = dx(e), e !== null ? Rd(e) : null
}

function Rd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Rd(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ld = at.unstable_scheduleCallback,
    Ps = at.unstable_cancelCallback,
    px = at.unstable_shouldYield,
    hx = at.unstable_requestPaint,
    ve = at.unstable_now,
    xx = at.unstable_getCurrentPriorityLevel,
    u0 = at.unstable_ImmediatePriority,
    Md = at.unstable_UserBlockingPriority,
    Bo = at.unstable_NormalPriority,
    gx = at.unstable_LowPriority,
    Od = at.unstable_IdlePriority,
    Go = null,
    bt = null;

function mx(e) {
    if (bt && typeof bt.onCommitFiberRoot == "function") try {
        bt.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : Cx,
    yx = Math.log,
    vx = Math.LN2;

function Cx(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yx(e) / vx | 0) | 0
}
var Ui = 64,
    Vi = 4194304;

function Kr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function So(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var a = l & ~i;
        a !== 0 ? r = Kr(a) : (o &= l, o !== 0 && (r = Kr(o)))
    } else l = n & ~i, l !== 0 ? r = Kr(l) : o !== 0 && (r = Kr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - At(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Ex(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function wx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var l = 31 - At(o),
            a = 1 << l,
            u = i[l];
        u === -1 ? (!(a & n) || a & r) && (i[l] = Ex(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function lu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function jd() {
    var e = Ui;
    return Ui <<= 1, !(Ui & 4194240) && (Ui = 64), e
}

function Sl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function _i(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = n
}

function kx(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - At(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function s0(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - At(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var le = 0;

function Hd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ud, c0, Vd, $d, Wd, au = !1,
    $i = [],
    dn = null,
    pn = null,
    hn = null,
    di = new Map,
    pi = new Map,
    an = [],
    Bx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ts(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            dn = null;
            break;
        case "dragenter":
        case "dragleave":
            pn = null;
            break;
        case "mouseover":
        case "mouseout":
            hn = null;
            break;
        case "pointerover":
        case "pointerout":
            di.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            pi.delete(t.pointerId)
    }
}

function Mr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = Pi(t), t !== null && c0(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Sx(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return dn = Mr(dn, e, t, n, r, i), !0;
        case "dragenter":
            return pn = Mr(pn, e, t, n, r, i), !0;
        case "mouseover":
            return hn = Mr(hn, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return di.set(o, Mr(di.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, pi.set(o, Mr(pi.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function qd(e) {
    var t = bn(e.target);
    if (t !== null) {
        var n = qn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Id(n), t !== null) {
                    e.blockedOn = t, Wd(e.priority, function () {
                        Vd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            nu = r, n.target.dispatchEvent(r), nu = null
        } else return t = Pi(n), t !== null && c0(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function zs(e, t, n) {
    uo(e) && n.delete(t)
}

function Ax() {
    au = !1, dn !== null && uo(dn) && (dn = null), pn !== null && uo(pn) && (pn = null), hn !== null && uo(hn) && (hn = null), di.forEach(zs), pi.forEach(zs)
}

function Or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, au || (au = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, Ax)))
}

function hi(e) {
    function t(i) {
        return Or(i, e)
    }
    if (0 < $i.length) {
        Or($i[0], e);
        for (var n = 1; n < $i.length; n++) {
            var r = $i[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (dn !== null && Or(dn, e), pn !== null && Or(pn, e), hn !== null && Or(hn, e), di.forEach(t), pi.forEach(t), n = 0; n < an.length; n++) r = an[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < an.length && (n = an[0], n.blockedOn === null);) qd(n), n.blockedOn === null && an.shift()
}
var xr = Kt.ReactCurrentBatchConfig,
    Ao = !0;

function Dx(e, t, n, r) {
    var i = le,
        o = xr.transition;
    xr.transition = null;
    try {
        le = 1, f0(e, t, n, r)
    } finally {
        le = i, xr.transition = o
    }
}

function Fx(e, t, n, r) {
    var i = le,
        o = xr.transition;
    xr.transition = null;
    try {
        le = 4, f0(e, t, n, r)
    } finally {
        le = i, xr.transition = o
    }
}

function f0(e, t, n, r) {
    if (Ao) {
        var i = uu(e, t, n, r);
        if (i === null) bl(e, t, r, Do, n), Ts(e, r);
        else if (Sx(i, e, t, n, r)) r.stopPropagation();
        else if (Ts(e, r), t & 4 && -1 < Bx.indexOf(e)) {
            for (; i !== null;) {
                var o = Pi(i);
                if (o !== null && Ud(o), o = uu(e, t, n, r), o === null && bl(e, t, r, Do, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else bl(e, t, r, null, n)
    }
}
var Do = null;

function uu(e, t, n, r) {
    if (Do = null, e = a0(r), e = bn(e), e !== null)
        if (t = qn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Id(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Do = e, null
}

function Qd(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (xx()) {
                case u0:
                    return 1;
                case Md:
                    return 4;
                case Bo:
                case gx:
                    return 16;
                case Od:
                    return 536870912;
                default:
                    return 16
            }
            default:
                return 16
    }
}
var sn = null,
    d0 = null,
    so = null;

function Kd() {
    if (so) return so;
    var e, t = d0,
        n = t.length,
        r, i = "value" in sn ? sn.value : sn.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
    return so = i.slice(e, 1 < r ? 1 - r : void 0)
}

function co(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Wi() {
    return !0
}

function Is() {
    return !1
}

function st(e) {
    function t(n, r, i, o, l) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Wi : Is, this.isPropagationStopped = Is, this
    }
    return me(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wi)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wi)
        },
        persist: function () {},
        isPersistent: Wi
    }), t
}
var Tr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    p0 = st(Tr),
    Ni = me({}, Tr, {
        view: 0,
        detail: 0
    }),
    _x = st(Ni),
    Al, Dl, jr, Zo = me({}, Ni, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: h0,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (Al = e.screenX - jr.screenX, Dl = e.screenY - jr.screenY) : Dl = Al = 0, jr = e), Al)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Dl
        }
    }),
    bs = st(Zo),
    Nx = me({}, Zo, {
        dataTransfer: 0
    }),
    Px = st(Nx),
    Tx = me({}, Ni, {
        relatedTarget: 0
    }),
    Fl = st(Tx),
    zx = me({}, Tr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Ix = st(zx),
    bx = me({}, Tr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Rx = st(bx),
    Lx = me({}, Tr, {
        data: 0
    }),
    Rs = st(Lx),
    Mx = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Ox = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    jx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Hx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jx[e]) ? !!t[e] : !1
}

function h0() {
    return Hx
}
var Ux = me({}, Ni, {
        key: function (e) {
            if (e.key) {
                var t = Mx[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = co(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ox[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: h0,
        charCode: function (e) {
            return e.type === "keypress" ? co(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Vx = st(Ux),
    $x = me({}, Zo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Ls = st($x),
    Wx = me({}, Ni, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: h0
    }),
    qx = st(Wx),
    Qx = me({}, Tr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Kx = st(Qx),
    Yx = me({}, Zo, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Xx = st(Yx),
    Gx = [9, 13, 27, 32],
    x0 = $t && "CompositionEvent" in window,
    Jr = null;
$t && "documentMode" in document && (Jr = document.documentMode);
var Zx = $t && "TextEvent" in window && !Jr,
    Yd = $t && (!x0 || Jr && 8 < Jr && 11 >= Jr),
    Ms = " ",
    Os = !1;

function Xd(e, t) {
    switch (e) {
        case "keyup":
            return Gx.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Gd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var nr = !1;

function Jx(e, t) {
    switch (e) {
        case "compositionend":
            return Gd(t);
        case "keypress":
            return t.which !== 32 ? null : (Os = !0, Ms);
        case "textInput":
            return e = t.data, e === Ms && Os ? null : e;
        default:
            return null
    }
}

function eg(e, t) {
    if (nr) return e === "compositionend" || !x0 && Xd(e, t) ? (e = Kd(), so = d0 = sn = null, nr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Yd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var tg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tg[e.type] : t === "textarea"
}

function Zd(e, t, n, r) {
    _d(r), t = Fo(t, "onChange"), 0 < t.length && (n = new p0("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var ei = null,
    xi = null;

function ng(e) {
    sp(e, 0)
}

function Jo(e) {
    var t = or(e);
    if (wd(t)) return e
}

function rg(e, t) {
    if (e === "change") return t
}
var Jd = !1;
if ($t) {
    var _l;
    if ($t) {
        var Nl = "oninput" in document;
        if (!Nl) {
            var Hs = document.createElement("div");
            Hs.setAttribute("oninput", "return;"), Nl = typeof Hs.oninput == "function"
        }
        _l = Nl
    } else _l = !1;
    Jd = _l && (!document.documentMode || 9 < document.documentMode)
}

function Us() {
    ei && (ei.detachEvent("onpropertychange", ep), xi = ei = null)
}

function ep(e) {
    if (e.propertyName === "value" && Jo(xi)) {
        var t = [];
        Zd(t, xi, e, a0(e)), zd(ng, t)
    }
}

function ig(e, t, n) {
    e === "focusin" ? (Us(), ei = t, xi = n, ei.attachEvent("onpropertychange", ep)) : e === "focusout" && Us()
}

function og(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Jo(xi)
}

function lg(e, t) {
    if (e === "click") return Jo(t)
}

function ag(e, t) {
    if (e === "input" || e === "change") return Jo(t)
}

function ug(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ft = typeof Object.is == "function" ? Object.is : ug;

function gi(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!$a.call(t, i) || !Ft(e[i], t[i])) return !1
    }
    return !0
}

function Vs(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function $s(e, t) {
    var n = Vs(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Vs(n)
    }
}

function tp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function np() {
    for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Eo(e.document)
    }
    return t
}

function g0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function sg(e) {
    var t = np(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && tp(n.ownerDocument.documentElement, n)) {
        if (r !== null && g0(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = $s(n, o);
                var l = $s(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var cg = $t && "documentMode" in document && 11 >= document.documentMode,
    rr = null,
    su = null,
    ti = null,
    cu = !1;

function Ws(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu || rr == null || rr !== Eo(r) || (r = rr, "selectionStart" in r && g0(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), ti && gi(ti, r) || (ti = r, r = Fo(su, "onSelect"), 0 < r.length && (t = new p0("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = rr)))
}

function qi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var ir = {
        animationend: qi("Animation", "AnimationEnd"),
        animationiteration: qi("Animation", "AnimationIteration"),
        animationstart: qi("Animation", "AnimationStart"),
        transitionend: qi("Transition", "TransitionEnd")
    },
    Pl = {},
    rp = {};
$t && (rp = document.createElement("div").style, "AnimationEvent" in window || (delete ir.animationend.animation, delete ir.animationiteration.animation, delete ir.animationstart.animation), "TransitionEvent" in window || delete ir.transitionend.transition);

function el(e) {
    if (Pl[e]) return Pl[e];
    if (!ir[e]) return e;
    var t = ir[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in rp) return Pl[e] = t[n];
    return e
}
var ip = el("animationend"),
    op = el("animationiteration"),
    lp = el("animationstart"),
    ap = el("transitionend"),
    up = new Map,
    qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function wn(e, t) {
    up.set(e, t), Wn(t, [e])
}
for (var Tl = 0; Tl < qs.length; Tl++) {
    var zl = qs[Tl],
        fg = zl.toLowerCase(),
        dg = zl[0].toUpperCase() + zl.slice(1);
    wn(fg, "on" + dg)
}
wn(ip, "onAnimationEnd");
wn(op, "onAnimationIteration");
wn(lp, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(ap, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    pg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));

function Qs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fx(r, t, void 0, e), e.currentTarget = null
}

function sp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l],
                        u = a.instance,
                        s = a.currentTarget;
                    if (a = a.listener, u !== o && i.isPropagationStopped()) break e;
                    Qs(i, a, s), o = u
                } else
                    for (l = 0; l < r.length; l++) {
                        if (a = r[l], u = a.instance, s = a.currentTarget, a = a.listener, u !== o && i.isPropagationStopped()) break e;
                        Qs(i, a, s), o = u
                    }
        }
    }
    if (ko) throw e = ou, ko = !1, ou = null, e
}

function fe(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (cp(t, e, 2, !1), n.add(r))
}

function Il(e, t, n) {
    var r = 0;
    t && (r |= 4), cp(n, e, r, t)
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);

function mi(e) {
    if (!e[Qi]) {
        e[Qi] = !0, md.forEach(function (n) {
            n !== "selectionchange" && (pg.has(n) || Il(n, !1, e), Il(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Qi] || (t[Qi] = !0, Il("selectionchange", !1, t))
    }
}

function cp(e, t, n, r) {
    switch (Qd(t)) {
        case 1:
            var i = Dx;
            break;
        case 4:
            i = Fx;
            break;
        default:
            i = f0
    }
    n = i.bind(null, t, n, e), i = void 0, !iu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function bl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var u = l.tag;
                    if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    l = l.return
                }
            for (; a !== null;) {
                if (l = bn(a), l === null) return;
                if (u = l.tag, u === 5 || u === 6) {
                    r = o = l;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    zd(function () {
        var s = o,
            c = a0(n),
            h = [];
        e: {
            var f = up.get(e);
            if (f !== void 0) {
                var d = p0,
                    m = e;
                switch (e) {
                    case "keypress":
                        if (co(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        d = Vx;
                        break;
                    case "focusin":
                        m = "focus", d = Fl;
                        break;
                    case "focusout":
                        m = "blur", d = Fl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        d = Fl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        d = bs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        d = Px;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        d = qx;
                        break;
                    case ip:
                    case op:
                    case lp:
                        d = Ix;
                        break;
                    case ap:
                        d = Kx;
                        break;
                    case "scroll":
                        d = _x;
                        break;
                    case "wheel":
                        d = Xx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        d = Rx;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        d = Ls
                }
                var y = (t & 4) !== 0,
                    C = !y && e === "scroll",
                    g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var p = s, x; p !== null;) {
                    x = p;
                    var v = x.stateNode;
                    if (x.tag === 5 && v !== null && (x = v, g !== null && (v = fi(p, g), v != null && y.push(yi(p, v, x)))), C) break;
                    p = p.return
                }
                0 < y.length && (f = new d(f, m, null, n, c), h.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", f && n !== nu && (m = n.relatedTarget || n.fromElement) && (bn(m) || m[Wt])) break e;
                if ((d || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, d ? (m = n.relatedTarget || n.toElement, d = s, m = m ? bn(m) : null, m !== null && (C = qn(m), m !== C || m.tag !== 5 && m.tag !== 6) && (m = null)) : (d = null, m = s), d !== m)) {
                    if (y = bs, v = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ls, v = "onPointerLeave", g = "onPointerEnter", p = "pointer"), C = d == null ? f : or(d), x = m == null ? f : or(m), f = new y(v, p + "leave", d, n, c), f.target = C, f.relatedTarget = x, v = null, bn(c) === s && (y = new y(g, p + "enter", m, n, c), y.target = x, y.relatedTarget = C, v = y), C = v, d && m) t: {
                        for (y = d, g = m, p = 0, x = y; x; x = Zn(x)) p++;
                        for (x = 0, v = g; v; v = Zn(v)) x++;
                        for (; 0 < p - x;) y = Zn(y),
                        p--;
                        for (; 0 < x - p;) g = Zn(g),
                        x--;
                        for (; p--;) {
                            if (y === g || g !== null && y === g.alternate) break t;
                            y = Zn(y), g = Zn(g)
                        }
                        y = null
                    }
                    else y = null;
                    d !== null && Ks(h, f, d, y, !1), m !== null && C !== null && Ks(h, C, m, y, !0)
                }
            }
            e: {
                if (f = s ? or(s) : window, d = f.nodeName && f.nodeName.toLowerCase(), d === "select" || d === "input" && f.type === "file") var k = rg;
                else if (js(f))
                    if (Jd) k = ag;
                    else {
                        k = og;
                        var E = ig
                    }
                else(d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = lg);
                if (k && (k = k(e, s))) {
                    Zd(h, k, n, c);
                    break e
                }
                E && E(e, f, s),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Ga(f, "number", f.value)
            }
            switch (E = s ? or(s) : window, e) {
                case "focusin":
                    (js(E) || E.contentEditable === "true") && (rr = E, su = s, ti = null);
                    break;
                case "focusout":
                    ti = su = rr = null;
                    break;
                case "mousedown":
                    cu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    cu = !1, Ws(h, n, c);
                    break;
                case "selectionchange":
                    if (cg) break;
                case "keydown":
                case "keyup":
                    Ws(h, n, c)
            }
            var S;
            if (x0) e: {
                switch (e) {
                    case "compositionstart":
                        var D = "onCompositionStart";
                        break e;
                    case "compositionend":
                        D = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        D = "onCompositionUpdate";
                        break e
                }
                D = void 0
            }
            else nr ? Xd(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");D && (Yd && n.locale !== "ko" && (nr || D !== "onCompositionStart" ? D === "onCompositionEnd" && nr && (S = Kd()) : (sn = c, d0 = "value" in sn ? sn.value : sn.textContent, nr = !0)), E = Fo(s, D), 0 < E.length && (D = new Rs(D, e, null, n, c), h.push({
                event: D,
                listeners: E
            }), S ? D.data = S : (S = Gd(n), S !== null && (D.data = S)))),
            (S = Zx ? Jx(e, n) : eg(e, n)) && (s = Fo(s, "onBeforeInput"), 0 < s.length && (c = new Rs("onBeforeInput", "beforeinput", null, n, c), h.push({
                event: c,
                listeners: s
            }), c.data = S))
        }
        sp(h, t)
    })
}

function yi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Fo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = fi(e, n), o != null && r.unshift(yi(e, o, i)), o = fi(e, t), o != null && r.push(yi(e, o, i))), e = e.return
    }
    return r
}

function Zn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ks(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && s !== null && (a = s, i ? (u = fi(n, o), u != null && l.unshift(yi(n, u, a))) : i || (u = fi(n, o), u != null && l.push(yi(n, u, a)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var hg = /\r\n?/g,
    xg = /\u0000|\uFFFD/g;

function Ys(e) {
    return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(xg, "")
}

function Ki(e, t, n) {
    if (t = Ys(t), Ys(e) !== t && n) throw Error(M(425))
}

function _o() {}
var fu = null,
    du = null;

function pu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var hu = typeof setTimeout == "function" ? setTimeout : void 0,
    gg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xs = typeof Promise == "function" ? Promise : void 0,
    mg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xs < "u" ? function (e) {
        return Xs.resolve(null).then(e).catch(yg)
    } : hu;

function yg(e) {
    setTimeout(function () {
        throw e
    })
}

function Rl(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), hi(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    hi(t)
}

function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Gs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var zr = Math.random().toString(36).slice(2),
    zt = "__reactFiber$" + zr,
    vi = "__reactProps$" + zr,
    Wt = "__reactContainer$" + zr,
    xu = "__reactEvents$" + zr,
    vg = "__reactListeners$" + zr,
    Cg = "__reactHandles$" + zr;

function bn(e) {
    var t = e[zt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Wt] || n[zt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Gs(e); e !== null;) {
                    if (n = e[zt]) return n;
                    e = Gs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Pi(e) {
    return e = e[zt] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33))
}

function tl(e) {
    return e[vi] || null
}
var gu = [],
    lr = -1;

function kn(e) {
    return {
        current: e
    }
}

function pe(e) {
    0 > lr || (e.current = gu[lr], gu[lr] = null, lr--)
}

function ue(e, t) {
    lr++, gu[lr] = e.current, e.current = t
}
var En = {},
    Ie = kn(En),
    Qe = kn(!1),
    jn = En;

function Er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return En;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Ke(e) {
    return e = e.childContextTypes, e != null
}

function No() {
    pe(Qe), pe(Ie)
}

function Zs(e, t, n) {
    if (Ie.current !== En) throw Error(M(168));
    ue(Ie, t), ue(Qe, n)
}

function fp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(M(108, ix(e) || "Unknown", i));
    return me({}, n, r)
}

function Po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, jn = Ie.current, ue(Ie, e), ue(Qe, Qe.current), !0
}

function Js(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? (e = fp(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, pe(Qe), pe(Ie), ue(Ie, e)) : pe(Qe), ue(Qe, n)
}
var jt = null,
    nl = !1,
    Ll = !1;

function dp(e) {
    jt === null ? jt = [e] : jt.push(e)
}

function Eg(e) {
    nl = !0, dp(e)
}

function Bn() {
    if (!Ll && jt !== null) {
        Ll = !0;
        var e = 0,
            t = le;
        try {
            var n = jt;
            for (le = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            jt = null, nl = !1
        } catch (i) {
            throw jt !== null && (jt = jt.slice(e + 1)), Ld(u0, Bn), i
        } finally {
            le = t, Ll = !1
        }
    }
    return null
}
var ar = [],
    ur = 0,
    To = null,
    zo = 0,
    pt = [],
    ht = 0,
    Hn = null,
    Ht = 1,
    Ut = "";

function Tn(e, t) {
    ar[ur++] = zo, ar[ur++] = To, To = e, zo = t
}

function pp(e, t, n) {
    pt[ht++] = Ht, pt[ht++] = Ut, pt[ht++] = Hn, Hn = e;
    var r = Ht;
    e = Ut;
    var i = 32 - At(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - At(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Ht = 1 << 32 - At(t) + i | n << i | r, Ut = o + e
    } else Ht = 1 << o | n << i | r, Ut = e
}

function m0(e) {
    e.return !== null && (Tn(e, 1), pp(e, 1, 0))
}

function y0(e) {
    for (; e === To;) To = ar[--ur], ar[ur] = null, zo = ar[--ur], ar[ur] = null;
    for (; e === Hn;) Hn = pt[--ht], pt[ht] = null, Ut = pt[--ht], pt[ht] = null, Ht = pt[--ht], pt[ht] = null
}
var lt = null,
    it = null,
    he = !1,
    St = null;

function hp(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ec(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, it = xn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, it = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Hn !== null ? {
                id: Ht,
                overflow: Ut
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, it = null, !0) : !1;
        default:
            return !1
    }
}

function mu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function yu(e) {
    if (he) {
        var t = it;
        if (t) {
            var n = t;
            if (!ec(e, t)) {
                if (mu(e)) throw Error(M(418));
                t = xn(n.nextSibling);
                var r = lt;
                t && ec(e, t) ? hp(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, lt = e)
            }
        } else {
            if (mu(e)) throw Error(M(418));
            e.flags = e.flags & -4097 | 2, he = !1, lt = e
        }
    }
}

function tc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e
}

function Yi(e) {
    if (e !== lt) return !1;
    if (!he) return tc(e), he = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !pu(e.type, e.memoizedProps)), t && (t = it)) {
        if (mu(e)) throw xp(), Error(M(418));
        for (; t;) hp(e, t), t = xn(t.nextSibling)
    }
    if (tc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else it = lt ? xn(e.stateNode.nextSibling) : null;
    return !0
}

function xp() {
    for (var e = it; e;) e = xn(e.nextSibling)
}

function wr() {
    it = lt = null, he = !1
}

function v0(e) {
    St === null ? St = [e] : St.push(e)
}
var wg = Kt.ReactCurrentBatchConfig;

function Hr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (l) {
                var a = i.refs;
                l === null ? delete a[o] : a[o] = l
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e))
    }
    return e
}

function Xi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function nc(e) {
    var t = e._init;
    return t(e._payload)
}

function gp(e) {
    function t(g, p) {
        if (e) {
            var x = g.deletions;
            x === null ? (g.deletions = [p], g.flags |= 16) : x.push(p)
        }
    }

    function n(g, p) {
        if (!e) return null;
        for (; p !== null;) t(g, p), p = p.sibling;
        return null
    }

    function r(g, p) {
        for (g = new Map; p !== null;) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
        return g
    }

    function i(g, p) {
        return g = vn(g, p), g.index = 0, g.sibling = null, g
    }

    function o(g, p, x) {
        return g.index = x, e ? (x = g.alternate, x !== null ? (x = x.index, x < p ? (g.flags |= 2, p) : x) : (g.flags |= 2, p)) : (g.flags |= 1048576, p)
    }

    function l(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function a(g, p, x, v) {
        return p === null || p.tag !== 6 ? (p = $l(x, g.mode, v), p.return = g, p) : (p = i(p, x), p.return = g, p)
    }

    function u(g, p, x, v) {
        var k = x.type;
        return k === tr ? c(g, p, x.props.children, v, x.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === on && nc(k) === p.type) ? (v = i(p, x.props), v.ref = Hr(g, p, x), v.return = g, v) : (v = yo(x.type, x.key, x.props, null, g.mode, v), v.ref = Hr(g, p, x), v.return = g, v)
    }

    function s(g, p, x, v) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== x.containerInfo || p.stateNode.implementation !== x.implementation ? (p = Wl(x, g.mode, v), p.return = g, p) : (p = i(p, x.children || []), p.return = g, p)
    }

    function c(g, p, x, v, k) {
        return p === null || p.tag !== 7 ? (p = On(x, g.mode, v, k), p.return = g, p) : (p = i(p, x), p.return = g, p)
    }

    function h(g, p, x) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = $l("" + p, g.mode, x), p.return = g, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Oi:
                    return x = yo(p.type, p.key, p.props, null, g.mode, x), x.ref = Hr(g, null, p), x.return = g, x;
                case er:
                    return p = Wl(p, g.mode, x), p.return = g, p;
                case on:
                    var v = p._init;
                    return h(g, v(p._payload), x)
            }
            if (Qr(p) || Rr(p)) return p = On(p, g.mode, x, null), p.return = g, p;
            Xi(g, p)
        }
        return null
    }

    function f(g, p, x, v) {
        var k = p !== null ? p.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number") return k !== null ? null : a(g, p, "" + x, v);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Oi:
                    return x.key === k ? u(g, p, x, v) : null;
                case er:
                    return x.key === k ? s(g, p, x, v) : null;
                case on:
                    return k = x._init, f(g, p, k(x._payload), v)
            }
            if (Qr(x) || Rr(x)) return k !== null ? null : c(g, p, x, v, null);
            Xi(g, x)
        }
        return null
    }

    function d(g, p, x, v, k) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return g = g.get(x) || null, a(p, g, "" + v, k);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Oi:
                    return g = g.get(v.key === null ? x : v.key) || null, u(p, g, v, k);
                case er:
                    return g = g.get(v.key === null ? x : v.key) || null, s(p, g, v, k);
                case on:
                    var E = v._init;
                    return d(g, p, x, E(v._payload), k)
            }
            if (Qr(v) || Rr(v)) return g = g.get(x) || null, c(p, g, v, k, null);
            Xi(p, v)
        }
        return null
    }

    function m(g, p, x, v) {
        for (var k = null, E = null, S = p, D = p = 0, N = null; S !== null && D < x.length; D++) {
            S.index > D ? (N = S, S = null) : N = S.sibling;
            var A = f(g, S, x[D], v);
            if (A === null) {
                S === null && (S = N);
                break
            }
            e && S && A.alternate === null && t(g, S), p = o(A, p, D), E === null ? k = A : E.sibling = A, E = A, S = N
        }
        if (D === x.length) return n(g, S), he && Tn(g, D), k;
        if (S === null) {
            for (; D < x.length; D++) S = h(g, x[D], v), S !== null && (p = o(S, p, D), E === null ? k = S : E.sibling = S, E = S);
            return he && Tn(g, D), k
        }
        for (S = r(g, S); D < x.length; D++) N = d(S, g, D, x[D], v), N !== null && (e && N.alternate !== null && S.delete(N.key === null ? D : N.key), p = o(N, p, D), E === null ? k = N : E.sibling = N, E = N);
        return e && S.forEach(function (F) {
            return t(g, F)
        }), he && Tn(g, D), k
    }

    function y(g, p, x, v) {
        var k = Rr(x);
        if (typeof k != "function") throw Error(M(150));
        if (x = k.call(x), x == null) throw Error(M(151));
        for (var E = k = null, S = p, D = p = 0, N = null, A = x.next(); S !== null && !A.done; D++, A = x.next()) {
            S.index > D ? (N = S, S = null) : N = S.sibling;
            var F = f(g, S, A.value, v);
            if (F === null) {
                S === null && (S = N);
                break
            }
            e && S && F.alternate === null && t(g, S), p = o(F, p, D), E === null ? k = F : E.sibling = F, E = F, S = N
        }
        if (A.done) return n(g, S), he && Tn(g, D), k;
        if (S === null) {
            for (; !A.done; D++, A = x.next()) A = h(g, A.value, v), A !== null && (p = o(A, p, D), E === null ? k = A : E.sibling = A, E = A);
            return he && Tn(g, D), k
        }
        for (S = r(g, S); !A.done; D++, A = x.next()) A = d(S, g, D, A.value, v), A !== null && (e && A.alternate !== null && S.delete(A.key === null ? D : A.key), p = o(A, p, D), E === null ? k = A : E.sibling = A, E = A);
        return e && S.forEach(function (_) {
            return t(g, _)
        }), he && Tn(g, D), k
    }

    function C(g, p, x, v) {
        if (typeof x == "object" && x !== null && x.type === tr && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Oi:
                    e: {
                        for (var k = x.key, E = p; E !== null;) {
                            if (E.key === k) {
                                if (k = x.type, k === tr) {
                                    if (E.tag === 7) {
                                        n(g, E.sibling), p = i(E, x.props.children), p.return = g, g = p;
                                        break e
                                    }
                                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === on && nc(k) === E.type) {
                                    n(g, E.sibling), p = i(E, x.props), p.ref = Hr(g, E, x), p.return = g, g = p;
                                    break e
                                }
                                n(g, E);
                                break
                            } else t(g, E);
                            E = E.sibling
                        }
                        x.type === tr ? (p = On(x.props.children, g.mode, v, x.key), p.return = g, g = p) : (v = yo(x.type, x.key, x.props, null, g.mode, v), v.ref = Hr(g, p, x), v.return = g, g = v)
                    }
                    return l(g);
                case er:
                    e: {
                        for (E = x.key; p !== null;) {
                            if (p.key === E)
                                if (p.tag === 4 && p.stateNode.containerInfo === x.containerInfo && p.stateNode.implementation === x.implementation) {
                                    n(g, p.sibling), p = i(p, x.children || []), p.return = g, g = p;
                                    break e
                                } else {
                                    n(g, p);
                                    break
                                }
                            else t(g, p);
                            p = p.sibling
                        }
                        p = Wl(x, g.mode, v),
                        p.return = g,
                        g = p
                    }
                    return l(g);
                case on:
                    return E = x._init, C(g, p, E(x._payload), v)
            }
            if (Qr(x)) return m(g, p, x, v);
            if (Rr(x)) return y(g, p, x, v);
            Xi(g, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, p !== null && p.tag === 6 ? (n(g, p.sibling), p = i(p, x), p.return = g, g = p) : (n(g, p), p = $l(x, g.mode, v), p.return = g, g = p), l(g)) : n(g, p)
    }
    return C
}
var kr = gp(!0),
    mp = gp(!1),
    Io = kn(null),
    bo = null,
    sr = null,
    C0 = null;

function E0() {
    C0 = sr = bo = null
}

function w0(e) {
    var t = Io.current;
    pe(Io), e._currentValue = t
}

function vu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function gr(e, t) {
    bo = e, C0 = sr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null)
}

function yt(e) {
    var t = e._currentValue;
    if (C0 !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, sr === null) {
            if (bo === null) throw Error(M(308));
            sr = e, bo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else sr = sr.next = e;
    return t
}
var Rn = null;

function k0(e) {
    Rn === null ? Rn = [e] : Rn.push(e)
}

function yp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, k0(t)) : (n.next = i.next, i.next = n), t.interleaved = n, qt(e, r)
}

function qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var ln = !1;

function B0(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function vp(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, re & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, qt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, k0(r)) : (t.next = i.next, i.next = t), r.interleaved = t, qt(e, n)
}

function fo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, s0(e, n)
    }
}

function rc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ro(e, t, n, r) {
    var i = e.updateQueue;
    ln = !1;
    var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a,
            s = u.next;
        u.next = null, l === null ? o = s : l.next = s, l = u;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = i.baseState;
        l = 0, c = s = u = null, a = o;
        do {
            var f = a.lane,
                d = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var m = e,
                        y = a;
                    switch (f = t, d = n, y.tag) {
                        case 1:
                            if (m = y.payload, typeof m == "function") {
                                h = m.call(d, h, f);
                                break e
                            }
                            h = m;
                            break e;
                        case 3:
                            m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = y.payload, f = typeof m == "function" ? m.call(d, h, f) : m, f == null) break e;
                            h = me({}, h, f);
                            break e;
                        case 2:
                            ln = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a))
            } else d = {
                eventTime: d,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (s = c = d, u = h) : c = c.next = d, l |= f;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (u = h), i.baseState = u, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do l |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Vn |= l, e.lanes = l, e.memoizedState = h
    }
}

function ic(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
                i.call(r)
            }
        }
}
var Ti = {},
    Rt = kn(Ti),
    Ci = kn(Ti),
    Ei = kn(Ti);

function Ln(e) {
    if (e === Ti) throw Error(M(174));
    return e
}

function S0(e, t) {
    switch (ue(Ei, t), ue(Ci, e), ue(Rt, Ti), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ja(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ja(t, e)
    }
    pe(Rt), ue(Rt, t)
}

function Br() {
    pe(Rt), pe(Ci), pe(Ei)
}

function Cp(e) {
    Ln(Ei.current);
    var t = Ln(Rt.current),
        n = Ja(t, e.type);
    t !== n && (ue(Ci, e), ue(Rt, n))
}

function A0(e) {
    Ci.current === e && (pe(Rt), pe(Ci))
}
var xe = kn(0);

function Lo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ml = [];

function D0() {
    for (var e = 0; e < Ml.length; e++) Ml[e]._workInProgressVersionPrimary = null;
    Ml.length = 0
}
var po = Kt.ReactCurrentDispatcher,
    Ol = Kt.ReactCurrentBatchConfig,
    Un = 0,
    ge = null,
    we = null,
    Se = null,
    Mo = !1,
    ni = !1,
    wi = 0,
    kg = 0;

function Pe() {
    throw Error(M(321))
}

function F0(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ft(e[n], t[n])) return !1;
    return !0
}

function _0(e, t, n, r, i, o) {
    if (Un = o, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, po.current = e === null || e.memoizedState === null ? Dg : Fg, e = n(r, i), ni) {
        o = 0;
        do {
            if (ni = !1, wi = 0, 25 <= o) throw Error(M(301));
            o += 1, Se = we = null, t.updateQueue = null, po.current = _g, e = n(r, i)
        } while (ni)
    }
    if (po.current = Oo, t = we !== null && we.next !== null, Un = 0, Se = we = ge = null, Mo = !1, t) throw Error(M(300));
    return e
}

function N0() {
    var e = wi !== 0;
    return wi = 0, e
}

function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? ge.memoizedState = Se = e : Se = Se.next = e, Se
}

function vt() {
    if (we === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = we.next;
    var t = Se === null ? ge.memoizedState : Se.next;
    if (t !== null) Se = t, we = e;
    else {
        if (e === null) throw Error(M(310));
        we = e, e = {
            memoizedState: we.memoizedState,
            baseState: we.baseState,
            baseQueue: we.baseQueue,
            queue: we.queue,
            next: null
        }, Se === null ? ge.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}

function ki(e, t) {
    return typeof t == "function" ? t(e) : t
}

function jl(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = we,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next, o.next = l
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = l = null,
            u = null,
            s = o;
        do {
            var c = s.lane;
            if ((Un & c) === c) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var h = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (a = u = h, l = r) : u = u.next = h, ge.lanes |= c, Vn |= c
            }
            s = s.next
        } while (s !== null && s !== o);
        u === null ? l = r : u.next = a, Ft(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, ge.lanes |= o, Vn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Hl(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do o = e(o, l.action), l = l.next; while (l !== i);
        Ft(o, t.memoizedState) || (qe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Ep() {}

function wp(e, t) {
    var n = ge,
        r = vt(),
        i = t(),
        o = !Ft(r.memoizedState, i);
    if (o && (r.memoizedState = i, qe = !0), r = r.queue, P0(Sp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048, Bi(9, Bp.bind(null, n, r, i, t), void 0, null), Ae === null) throw Error(M(349));
        Un & 30 || kp(n, t, i)
    }
    return i
}

function kp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Bp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ap(t) && Dp(e)
}

function Sp(e, t, n) {
    return n(function () {
        Ap(t) && Dp(e)
    })
}

function Ap(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ft(e, n)
    } catch {
        return !0
    }
}

function Dp(e) {
    var t = qt(e, 1);
    t !== null && Dt(t, e, 1, -1)
}

function oc(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ag.bind(null, ge, e), [t.memoizedState, e]
}

function Bi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Fp() {
    return vt().memoizedState
}

function ho(e, t, n, r) {
    var i = Pt();
    ge.flags |= e, i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r)
}

function rl(e, t, n, r) {
    var i = vt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (we !== null) {
        var l = we.memoizedState;
        if (o = l.destroy, r !== null && F0(r, l.deps)) {
            i.memoizedState = Bi(t, n, o, r);
            return
        }
    }
    ge.flags |= e, i.memoizedState = Bi(1 | t, n, o, r)
}

function lc(e, t) {
    return ho(8390656, 8, e, t)
}

function P0(e, t) {
    return rl(2048, 8, e, t)
}

function _p(e, t) {
    return rl(4, 2, e, t)
}

function Np(e, t) {
    return rl(4, 4, e, t)
}

function Pp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function Tp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, rl(4, 4, Pp.bind(null, t, e), n)
}

function T0() {}

function zp(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && F0(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ip(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && F0(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function bp(e, t, n) {
    return Un & 21 ? (Ft(n, t) || (n = jd(), ge.lanes |= n, Vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n)
}

function Bg(e, t) {
    var n = le;
    le = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ol.transition;
    Ol.transition = {};
    try {
        e(!1), t()
    } finally {
        le = n, Ol.transition = r
    }
}

function Rp() {
    return vt().memoizedState
}

function Sg(e, t, n) {
    var r = yn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Lp(e)) Mp(t, n);
    else if (n = yp(e, t, n, r), n !== null) {
        var i = Oe();
        Dt(n, e, r, i), Op(n, t, r)
    }
}

function Ag(e, t, n) {
    var r = yn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Lp(e)) Mp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var l = t.lastRenderedState,
                a = o(l, n);
            if (i.hasEagerState = !0, i.eagerState = a, Ft(a, l)) {
                var u = t.interleaved;
                u === null ? (i.next = i, k0(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = yp(e, t, i, r), n !== null && (i = Oe(), Dt(n, e, r, i), Op(n, t, r))
    }
}

function Lp(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}

function Mp(e, t) {
    ni = Mo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Op(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, s0(e, n)
    }
}
var Oo = {
        readContext: yt,
        useCallback: Pe,
        useContext: Pe,
        useEffect: Pe,
        useImperativeHandle: Pe,
        useInsertionEffect: Pe,
        useLayoutEffect: Pe,
        useMemo: Pe,
        useReducer: Pe,
        useRef: Pe,
        useState: Pe,
        useDebugValue: Pe,
        useDeferredValue: Pe,
        useTransition: Pe,
        useMutableSource: Pe,
        useSyncExternalStore: Pe,
        useId: Pe,
        unstable_isNewReconciler: !1
    },
    Dg = {
        readContext: yt,
        useCallback: function (e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: yt,
        useEffect: lc,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, ho(4194308, 4, Pp.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return ho(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return ho(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = Pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Sg.bind(null, ge, e), [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Pt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: oc,
        useDebugValue: T0,
        useDeferredValue: function (e) {
            return Pt().memoizedState = e
        },
        useTransition: function () {
            var e = oc(!1),
                t = e[0];
            return e = Bg.bind(null, e[1]), Pt().memoizedState = e, [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ge,
                i = Pt();
            if (he) {
                if (n === void 0) throw Error(M(407));
                n = n()
            } else {
                if (n = t(), Ae === null) throw Error(M(349));
                Un & 30 || kp(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, lc(Sp.bind(null, r, o, e), [e]), r.flags |= 2048, Bi(9, Bp.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function () {
            var e = Pt(),
                t = Ae.identifierPrefix;
            if (he) {
                var n = Ut,
                    r = Ht;
                n = (r & ~(1 << 32 - At(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = kg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Fg = {
        readContext: yt,
        useCallback: zp,
        useContext: yt,
        useEffect: P0,
        useImperativeHandle: Tp,
        useInsertionEffect: _p,
        useLayoutEffect: Np,
        useMemo: Ip,
        useReducer: jl,
        useRef: Fp,
        useState: function () {
            return jl(ki)
        },
        useDebugValue: T0,
        useDeferredValue: function (e) {
            var t = vt();
            return bp(t, we.memoizedState, e)
        },
        useTransition: function () {
            var e = jl(ki)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ep,
        useSyncExternalStore: wp,
        useId: Rp,
        unstable_isNewReconciler: !1
    },
    _g = {
        readContext: yt,
        useCallback: zp,
        useContext: yt,
        useEffect: P0,
        useImperativeHandle: Tp,
        useInsertionEffect: _p,
        useLayoutEffect: Np,
        useMemo: Ip,
        useReducer: Hl,
        useRef: Fp,
        useState: function () {
            return Hl(ki)
        },
        useDebugValue: T0,
        useDeferredValue: function (e) {
            var t = vt();
            return we === null ? t.memoizedState = e : bp(t, we.memoizedState, e)
        },
        useTransition: function () {
            var e = Hl(ki)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ep,
        useSyncExternalStore: wp,
        useId: Rp,
        unstable_isNewReconciler: !1
    };

function kt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Cu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var il = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? qn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Oe(),
            i = yn(e),
            o = Vt(r, i);
        o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (Dt(t, e, i, r), fo(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Oe(),
            i = yn(e),
            o = Vt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (Dt(t, e, i, r), fo(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Oe(),
            r = yn(e),
            i = Vt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = gn(e, i, r), t !== null && (Dt(t, e, r, n), fo(t, e, r))
    }
};

function ac(e, t, n, r, i, o, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !gi(n, r) || !gi(i, o) : !0
}

function jp(e, t, n) {
    var r = !1,
        i = En,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = yt(o) : (i = Ke(t) ? jn : Ie.current, r = t.contextTypes, o = (r = r != null) ? Er(e, i) : En), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = il, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function uc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && il.enqueueReplaceState(t, t.state, null)
}

function Eu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, B0(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = yt(o) : (o = Ke(t) ? jn : Ie.current, i.context = Er(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Cu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && il.enqueueReplaceState(i, i.state, null), Ro(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Sr(e, t) {
    try {
        var n = "",
            r = t;
        do n += rx(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Ul(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function wu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Ng = typeof WeakMap == "function" ? WeakMap : Map;

function Hp(e, t, n) {
    n = Vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        Ho || (Ho = !0, Tu = r), wu(e, t)
    }, n
}

function Up(e, t, n) {
    n = Vt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            wu(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        wu(e, t), typeof r != "function" && (mn === null ? mn = new Set([this]) : mn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ng;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = $g.bind(null, e, t, n), t.then(e, e))
}

function cc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function fc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e)
}
var Pg = Kt.ReactCurrentOwner,
    qe = !1;

function Me(e, t, n, r) {
    t.child = e === null ? mp(t, null, n, r) : kr(t, e.child, n, r)
}

function dc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return gr(t, i), r = _0(e, t, n, r, o, i), n = N0(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Qt(e, t, i)) : (he && n && m0(t), t.flags |= 1, Me(e, t, r, i), t.child)
}

function pc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !j0(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vp(e, t, o, r, i)) : (e = yo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : gi, n(l, r) && e.ref === t.ref) return Qt(e, t, i)
    }
    return t.flags |= 1, e = vn(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Vp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (gi(o, r) && e.ref === t.ref)
            if (qe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (qe = !0);
            else return t.lanes = e.lanes, Qt(e, t, i)
    }
    return ku(e, t, n, r, i)
}

function $p(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ue(fr, rt), rt |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ue(fr, rt), rt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, ue(fr, rt), rt |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ue(fr, rt), rt |= r;
    return Me(e, t, i, n), t.child
}

function Wp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ku(e, t, n, r, i) {
    var o = Ke(n) ? jn : Ie.current;
    return o = Er(t, o), gr(t, i), n = _0(e, t, n, r, o, i), r = N0(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Qt(e, t, i)) : (he && r && m0(t), t.flags |= 1, Me(e, t, n, i), t.child)
}

function hc(e, t, n, r, i) {
    if (Ke(n)) {
        var o = !0;
        Po(t)
    } else o = !1;
    if (gr(t, i), t.stateNode === null) xo(e, t), jp(t, n, r), Eu(t, n, r, i), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            a = t.memoizedProps;
        l.props = a;
        var u = l.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = yt(s) : (s = Ke(n) ? jn : Ie.current, s = Er(t, s));
        var c = n.getDerivedStateFromProps,
            h = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || u !== s) && uc(t, l, r, s), ln = !1;
        var f = t.memoizedState;
        l.state = f, Ro(t, r, l, i), u = t.memoizedState, a !== r || f !== u || Qe.current || ln ? (typeof c == "function" && (Cu(t, n, c, r), u = t.memoizedState), (a = ln || ac(t, n, a, r, f, u, s)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, vp(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : kt(t.type, a), l.props = s, h = t.pendingProps, f = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = yt(u) : (u = Ke(n) ? jn : Ie.current, u = Er(t, u));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== h || f !== u) && uc(t, l, r, u), ln = !1, f = t.memoizedState, l.state = f, Ro(t, r, l, i);
        var m = t.memoizedState;
        a !== h || f !== m || Qe.current || ln ? (typeof d == "function" && (Cu(t, n, d, r), m = t.memoizedState), (s = ln || ac(t, n, s, r, f, m, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = u, r = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Bu(e, t, n, r, o, i)
}

function Bu(e, t, n, r, i, o) {
    Wp(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Js(t, n, !1), Qt(e, t, o);
    r = t.stateNode, Pg.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = kr(t, e.child, null, o), t.child = kr(t, null, a, o)) : Me(e, t, a, o), t.memoizedState = r.state, i && Js(t, n, !0), t.child
}

function qp(e) {
    var t = e.stateNode;
    t.pendingContext ? Zs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zs(e, t.context, !1), S0(e, t.containerInfo)
}

function xc(e, t, n, r, i) {
    return wr(), v0(i), t.flags |= 256, Me(e, t, n, r), t.child
}
var Su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Au(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Qp(e, t, n) {
    var r = t.pendingProps,
        i = xe.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ue(xe, i & 1), e === null) return yu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = al(l, r, 0, null), e = On(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Au(n), t.memoizedState = Su, e) : z0(t, l));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Tg(e, t, l, r, a, i, n);
    if (o) {
        o = r.fallback, l = t.mode, i = e.child, a = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = vn(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = vn(a, o) : (o = On(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Au(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Su, r
    }
    return o = e.child, e = o.sibling, r = vn(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function z0(e, t) {
    return t = al({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Gi(e, t, n, r) {
    return r !== null && v0(r), kr(t, e.child, null, n), e = z0(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Tg(e, t, n, r, i, o, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ul(Error(M(422))), Gi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = al({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = On(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && kr(t, e.child, null, l), t.child.memoizedState = Au(l), t.memoizedState = Su, o);
    if (!(t.mode & 1)) return Gi(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(M(419)), r = Ul(o, r, void 0), Gi(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0, qe || a) {
        if (r = Ae, r !== null) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, qt(e, i), Dt(r, e, i, -1))
        }
        return O0(), r = Ul(Error(M(421))), Gi(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, it = xn(i.nextSibling), lt = t, he = !0, St = null, e !== null && (pt[ht++] = Ht, pt[ht++] = Ut, pt[ht++] = Hn, Ht = e.id, Ut = e.overflow, Hn = t), t = z0(t, r.children), t.flags |= 4096, t)
}

function gc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), vu(e.return, t, n)
}

function Vl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Kp(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Me(e, t, r.children, n), r = xe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
            else if (e.tag === 19) gc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ue(xe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Lo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Vl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Lo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Vl(t, !0, n, null, o);
            break;
        case "together":
            Vl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function xo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function zg(e, t, n) {
    switch (t.tag) {
        case 3:
            qp(t), wr();
            break;
        case 5:
            Cp(t);
            break;
        case 1:
            Ke(t.type) && Po(t);
            break;
        case 4:
            S0(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ue(Io, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ue(xe, xe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qp(e, t, n) : (ue(xe, xe.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
            ue(xe, xe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Kp(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ue(xe, xe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, $p(e, t, n)
    }
    return Qt(e, t, n)
}
var Yp, Du, Xp, Gp;
Yp = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Du = function () {};
Xp = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Ln(Rt.current);
        var o = null;
        switch (n) {
            case "input":
                i = Ya(e, i), r = Ya(e, r), o = [];
                break;
            case "select":
                i = me({}, i, {
                    value: void 0
                }), r = me({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = Za(e, i), r = Za(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _o)
        }
        eu(n, r);
        var l;
        n = null;
        for (s in i)
            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var a = i[s];
                    for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (si.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (a = i != null ? i[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
                if (s === "style")
                    if (a) {
                        for (l in a) !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), n[l] = u[l])
                    } else n || (o || (o = []), o.push(s, n)), n = u;
            else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (si.hasOwnProperty(s) ? (u != null && s === "onScroll" && fe("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u))
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
Gp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Ur(e, t) {
    if (!he) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ig(e, t, n) {
    var r = t.pendingProps;
    switch (y0(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Te(t), null;
        case 1:
            return Ke(t.type) && No(), Te(t), null;
        case 3:
            return r = t.stateNode, Br(), pe(Qe), pe(Ie), D0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (bu(St), St = null))), Du(e, t), Te(t), null;
        case 5:
            A0(t);
            var i = Ln(Ei.current);
            if (n = t.type, e !== null && t.stateNode != null) Xp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return Te(t), null
                }
                if (e = Ln(Rt.current), Yi(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[zt] = t, r[vi] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            fe("cancel", r), fe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            fe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Yr.length; i++) fe(Yr[i], r);
                            break;
                        case "source":
                            fe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            fe("error", r), fe("load", r);
                            break;
                        case "details":
                            fe("toggle", r);
                            break;
                        case "input":
                            Ss(r, o), fe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, fe("invalid", r);
                            break;
                        case "textarea":
                            Ds(r, o), fe("invalid", r)
                    }
                    eu(n, o), i = null;
                    for (var l in o)
                        if (o.hasOwnProperty(l)) {
                            var a = o[l];
                            l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Ki(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Ki(r.textContent, a, e), i = ["children", "" + a]) : si.hasOwnProperty(l) && a != null && l === "onScroll" && fe("scroll", r)
                        } switch (n) {
                        case "input":
                            ji(r), As(r, o, !0);
                            break;
                        case "textarea":
                            ji(r), Fs(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = _o)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[zt] = t, e[vi] = r, Yp(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = tu(n, r), n) {
                            case "dialog":
                                fe("cancel", e), fe("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                fe("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Yr.length; i++) fe(Yr[i], e);
                                i = r;
                                break;
                            case "source":
                                fe("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                fe("error", e), fe("load", e), i = r;
                                break;
                            case "details":
                                fe("toggle", e), i = r;
                                break;
                            case "input":
                                Ss(e, r), i = Ya(e, r), fe("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = me({}, r, {
                                    value: void 0
                                }), fe("invalid", e);
                                break;
                            case "textarea":
                                Ds(e, r), i = Za(e, r), fe("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        eu(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? Fd(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ad(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ci(e, u) : typeof u == "number" && ci(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (si.hasOwnProperty(o) ? u != null && o === "onScroll" && fe("scroll", e) : u != null && r0(e, o, u, l))
                            } switch (n) {
                            case "input":
                                ji(e), As(e, r, !1);
                                break;
                            case "textarea":
                                ji(e), Fs(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Cn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? dr(e, !!r.multiple, o, !1) : r.defaultValue != null && dr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = _o)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Te(t), null;
        case 6:
            if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (n = Ln(Ei.current), Ln(Rt.current), Yi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[zt] = t, (o = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
                        case 3:
                            Ki(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ki(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[zt] = t, t.stateNode = r
            }
            return Te(t), null;
        case 13:
            if (pe(xe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (he && it !== null && t.mode & 1 && !(t.flags & 128)) xp(), wr(), t.flags |= 98560, o = !1;
                else if (o = Yi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(M(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));
                        o[zt] = t
                    } else wr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Te(t), o = !1
                } else St !== null && (bu(St), St = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || xe.current & 1 ? ke === 0 && (ke = 3) : O0())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
        case 4:
            return Br(), Du(e, t), e === null && mi(t.stateNode.containerInfo), Te(t), null;
        case 10:
            return w0(t.type._context), Te(t), null;
        case 17:
            return Ke(t.type) && No(), Te(t), null;
        case 19:
            if (pe(xe), o = t.memoizedState, o === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
                if (r) Ur(o, !1);
                else {
                    if (ke !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = Lo(e), l !== null) {
                                for (t.flags |= 128, Ur(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ue(xe, xe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && ve() > Ar && (t.flags |= 128, r = !0, Ur(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Lo(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ur(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !he) return Te(t), null
                    } else 2 * ve() - o.renderingStartTime > Ar && n !== 1073741824 && (t.flags |= 128, r = !0, Ur(o, !1), t.lanes = 4194304);
                o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ve(), t.sibling = null, n = xe.current, ue(xe, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
        case 22:
        case 23:
            return M0(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, t.tag))
}

function bg(e, t) {
    switch (y0(t), t.tag) {
        case 1:
            return Ke(t.type) && No(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Br(), pe(Qe), pe(Ie), D0(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return A0(t), null;
        case 13:
            if (pe(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(M(340));
                wr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return pe(xe), null;
        case 4:
            return Br(), null;
        case 10:
            return w0(t.type._context), null;
        case 22:
        case 23:
            return M0(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Zi = !1,
    ze = !1,
    Rg = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;

function cr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ye(e, t, r)
        } else n.current = null
}

function Fu(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var mc = !1;

function Lg(e, t) {
    if (fu = Ao, e = np(), g0(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    a = -1,
                    u = -1,
                    s = 0,
                    c = 0,
                    h = e,
                    f = null;
                t: for (;;) {
                    for (var d; h !== n || i !== 0 && h.nodeType !== 3 || (a = l + i), h !== o || r !== 0 && h.nodeType !== 3 || (u = l + r), h.nodeType === 3 && (l += h.nodeValue.length), (d = h.firstChild) !== null;) f = h, h = d;
                    for (;;) {
                        if (h === e) break t;
                        if (f === n && ++s === i && (a = l), f === o && ++c === r && (u = l), (d = h.nextSibling) !== null) break;
                        h = f, f = h.parentNode
                    }
                    h = d
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (du = {
            focusedElem: e,
            selectionRange: n
        }, Ao = !1, $ = t; $ !== null;)
        if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
        else
            for (; $ !== null;) {
                t = $;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var y = m.memoizedProps,
                                    C = m.memoizedState,
                                    g = t.stateNode,
                                    p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : kt(t.type, y), C);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                    }
                } catch (v) {
                    ye(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, $ = e;
                    break
                }
                $ = t.return
            }
    return m = mc, mc = !1, m
}

function ri(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Fu(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function ol(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function _u(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Zp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[zt], delete t[vi], delete t[xu], delete t[vg], delete t[Cg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function yc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Jp(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Nu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _o));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Nu(e, t, n), e = e.sibling; e !== null;) Nu(e, t, n), e = e.sibling
}

function Pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Pu(e, t, n), e = e.sibling; e !== null;) Pu(e, t, n), e = e.sibling
}
var Fe = null,
    Bt = !1;

function nn(e, t, n) {
    for (n = n.child; n !== null;) eh(e, t, n), n = n.sibling
}

function eh(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function") try {
        bt.onCommitFiberUnmount(Go, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ze || cr(n, t);
        case 6:
            var r = Fe,
                i = Bt;
            Fe = null, nn(e, t, n), Fe = r, Bt = i, Fe !== null && (Bt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
            break;
        case 18:
            Fe !== null && (Bt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? Rl(e.parentNode, n) : e.nodeType === 1 && Rl(e, n), hi(e)) : Rl(Fe, n.stateNode));
            break;
        case 4:
            r = Fe, i = Bt, Fe = n.stateNode.containerInfo, Bt = !0, nn(e, t, n), Fe = r, Bt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        l = o.destroy;
                    o = o.tag, l !== void 0 && (o & 2 || o & 4) && Fu(n, t, l), i = i.next
                } while (i !== r)
            }
            nn(e, t, n);
            break;
        case 1:
            if (!ze && (cr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ye(n, t, a)
            }
            nn(e, t, n);
            break;
        case 21:
            nn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, nn(e, t, n), ze = r) : nn(e, t, n);
            break;
        default:
            nn(e, t, n)
    }
}

function vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Rg), t.forEach(function (r) {
            var i = qg.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    l = t,
                    a = l;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Fe = a.stateNode, Bt = !1;
                            break e;
                        case 3:
                            Fe = a.stateNode.containerInfo, Bt = !0;
                            break e;
                        case 4:
                            Fe = a.stateNode.containerInfo, Bt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Fe === null) throw Error(M(160));
                eh(o, l, i), Fe = null, Bt = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (s) {
                ye(i, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) th(t, e), t = t.sibling
}

function th(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (wt(t, e), Nt(e), r & 4) {
                try {
                    ri(3, e, e.return), ol(3, e)
                } catch (y) {
                    ye(e, e.return, y)
                }
                try {
                    ri(5, e, e.return)
                } catch (y) {
                    ye(e, e.return, y)
                }
            }
            break;
        case 1:
            wt(t, e), Nt(e), r & 512 && n !== null && cr(n, n.return);
            break;
        case 5:
            if (wt(t, e), Nt(e), r & 512 && n !== null && cr(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    ci(i, "")
                } catch (y) {
                    ye(e, e.return, y)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && kd(i, o), tu(a, l);
                    var s = tu(a, o);
                    for (l = 0; l < u.length; l += 2) {
                        var c = u[l],
                            h = u[l + 1];
                        c === "style" ? Fd(i, h) : c === "dangerouslySetInnerHTML" ? Ad(i, h) : c === "children" ? ci(i, h) : r0(i, c, h, s)
                    }
                    switch (a) {
                        case "input":
                            Xa(i, o);
                            break;
                        case "textarea":
                            Bd(i, o);
                            break;
                        case "select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var d = o.value;
                            d != null ? dr(i, !!o.multiple, d, !1) : f !== !!o.multiple && (o.defaultValue != null ? dr(i, !!o.multiple, o.defaultValue, !0) : dr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[vi] = o
                } catch (y) {
                    ye(e, e.return, y)
                }
            }
            break;
        case 6:
            if (wt(t, e), Nt(e), r & 4) {
                if (e.stateNode === null) throw Error(M(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (y) {
                    ye(e, e.return, y)
                }
            }
            break;
        case 3:
            if (wt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                hi(t.containerInfo)
            } catch (y) {
                ye(e, e.return, y)
            }
            break;
        case 4:
            wt(t, e), Nt(e);
            break;
        case 13:
            wt(t, e), Nt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (R0 = ve())), r & 4 && vc(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (s = ze) || c, wt(t, e), ze = s) : wt(t, e), Nt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
                    for ($ = e, c = e.child; c !== null;) {
                        for (h = $ = c; $ !== null;) {
                            switch (f = $, d = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ri(4, f, f.return);
                                    break;
                                case 1:
                                    cr(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                        } catch (y) {
                                            ye(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    cr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Ec(h);
                                        continue
                                    }
                            }
                            d !== null ? (d.return = f, $ = d) : Ec(h)
                        }
                        c = c.sibling
                    }
                e: for (c = null, h = e;;) {
                    if (h.tag === 5) {
                        if (c === null) {
                            c = h;
                            try {
                                i = h.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Dd("display", l))
                            } catch (y) {
                                ye(e, e.return, y)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (c === null) try {
                            h.stateNode.nodeValue = s ? "" : h.memoizedProps
                        } catch (y) {
                            ye(e, e.return, y)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        c === h && (c = null), h = h.return
                    }
                    c === h && (c = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            wt(t, e), Nt(e), r & 4 && vc(e);
            break;
        case 21:
            break;
        default:
            wt(t, e), Nt(e)
    }
}

function Nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Jp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (ci(i, ""), r.flags &= -33);
                    var o = yc(e);
                    Pu(e, o, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        a = yc(e);
                    Nu(e, a, l);
                    break;
                default:
                    throw Error(M(161))
            }
        }
        catch (u) {
            ye(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Mg(e, t, n) {
    $ = e, nh(e)
}

function nh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null;) {
        var i = $,
            o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Zi;
            if (!l) {
                var a = i.alternate,
                    u = a !== null && a.memoizedState !== null || ze;
                a = Zi;
                var s = ze;
                if (Zi = l, (ze = u) && !s)
                    for ($ = i; $ !== null;) l = $, u = l.child, l.tag === 22 && l.memoizedState !== null ? wc(i) : u !== null ? (u.return = l, $ = u) : wc(i);
                for (; o !== null;) $ = o, nh(o), o = o.sibling;
                $ = i, Zi = a, ze = s
            }
            Cc(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, $ = o) : Cc(e)
    }
}

function Cc(e) {
    for (; $ !== null;) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || ol(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && ic(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ic(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var c = s.memoizedState;
                                if (c !== null) {
                                    var h = c.dehydrated;
                                    h !== null && hi(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                }
                ze || t.flags & 512 && _u(t)
            } catch (f) {
                ye(t, t.return, f)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, $ = n;
            break
        }
        $ = t.return
    }
}

function Ec(e) {
    for (; $ !== null;) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, $ = n;
            break
        }
        $ = t.return
    }
}

function wc(e) {
    for (; $ !== null;) {
        var t = $;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ol(4, t)
                    } catch (u) {
                        ye(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ye(t, i, u)
                        }
                    }
                    var o = t.return;
                    try {
                        _u(t)
                    } catch (u) {
                        ye(t, o, u)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        _u(t)
                    } catch (u) {
                        ye(t, l, u)
                    }
            }
        } catch (u) {
            ye(t, t.return, u)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, $ = a;
            break
        }
        $ = t.return
    }
}
var Og = Math.ceil,
    jo = Kt.ReactCurrentDispatcher,
    I0 = Kt.ReactCurrentOwner,
    mt = Kt.ReactCurrentBatchConfig,
    re = 0,
    Ae = null,
    Ee = null,
    _e = 0,
    rt = 0,
    fr = kn(0),
    ke = 0,
    Si = null,
    Vn = 0,
    ll = 0,
    b0 = 0,
    ii = null,
    We = null,
    R0 = 0,
    Ar = 1 / 0,
    Ot = null,
    Ho = !1,
    Tu = null,
    mn = null,
    Ji = !1,
    cn = null,
    Uo = 0,
    oi = 0,
    zu = null,
    go = -1,
    mo = 0;

function Oe() {
    return re & 6 ? ve() : go !== -1 ? go : go = ve()
}

function yn(e) {
    return e.mode & 1 ? re & 2 && _e !== 0 ? _e & -_e : wg.transition !== null ? (mo === 0 && (mo = jd()), mo) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qd(e.type)), e) : 1
}

function Dt(e, t, n, r) {
    if (50 < oi) throw oi = 0, zu = null, Error(M(185));
    _i(e, n, r), (!(re & 2) || e !== Ae) && (e === Ae && (!(re & 2) && (ll |= n), ke === 4 && un(e, _e)), Ye(e, r), n === 1 && re === 0 && !(t.mode & 1) && (Ar = ve() + 500, nl && Bn()))
}

function Ye(e, t) {
    var n = e.callbackNode;
    wx(e, t);
    var r = So(e, e === Ae ? _e : 0);
    if (r === 0) n !== null && Ps(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ps(n), t === 1) e.tag === 0 ? Eg(kc.bind(null, e)) : dp(kc.bind(null, e)), mg(function () {
            !(re & 6) && Bn()
        }), n = null;
        else {
            switch (Hd(r)) {
                case 1:
                    n = u0;
                    break;
                case 4:
                    n = Md;
                    break;
                case 16:
                    n = Bo;
                    break;
                case 536870912:
                    n = Od;
                    break;
                default:
                    n = Bo
            }
            n = ch(n, rh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function rh(e, t) {
    if (go = -1, mo = 0, re & 6) throw Error(M(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = So(e, e === Ae ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Vo(e, r);
    else {
        t = r;
        var i = re;
        re |= 2;
        var o = oh();
        (Ae !== e || _e !== t) && (Ot = null, Ar = ve() + 500, Mn(e, t));
        do try {
            Ug();
            break
        } catch (a) {
            ih(e, a)
        }
        while (!0);
        E0(), jo.current = o, re = i, Ee !== null ? t = 0 : (Ae = null, _e = 0, t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (i = lu(e), i !== 0 && (r = i, t = Iu(e, i))), t === 1) throw n = Si, Mn(e, 0), un(e, r), Ye(e, ve()), n;
        if (t === 6) un(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !jg(i) && (t = Vo(e, r), t === 2 && (o = lu(e), o !== 0 && (r = o, t = Iu(e, o))), t === 1)) throw n = Si, Mn(e, 0), un(e, r), Ye(e, ve()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    zn(e, We, Ot);
                    break;
                case 3:
                    if (un(e, r), (r & 130023424) === r && (t = R0 + 500 - ve(), 10 < t)) {
                        if (So(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Oe(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = hu(zn.bind(null, e, We, Ot), t);
                        break
                    }
                    zn(e, We, Ot);
                    break;
                case 4:
                    if (un(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var l = 31 - At(r);
                        o = 1 << l, l = t[l], l > i && (i = l), r &= ~o
                    }
                    if (r = i, r = ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Og(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = hu(zn.bind(null, e, We, Ot), r);
                        break
                    }
                    zn(e, We, Ot);
                    break;
                case 5:
                    zn(e, We, Ot);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Ye(e, ve()), e.callbackNode === n ? rh.bind(null, e) : null
}

function Iu(e, t) {
    var n = ii;
    return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = Vo(e, t), e !== 2 && (t = We, We = n, t !== null && bu(t)), e
}

function bu(e) {
    We === null ? We = e : We.push.apply(We, e)
}

function jg(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ft(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function un(e, t) {
    for (t &= ~b0, t &= ~ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - At(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function kc(e) {
    if (re & 6) throw Error(M(327));
    mr();
    var t = So(e, 0);
    if (!(t & 1)) return Ye(e, ve()), null;
    var n = Vo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = lu(e);
        r !== 0 && (t = r, n = Iu(e, r))
    }
    if (n === 1) throw n = Si, Mn(e, 0), un(e, t), Ye(e, ve()), n;
    if (n === 6) throw Error(M(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, zn(e, We, Ot), Ye(e, ve()), null
}

function L0(e, t) {
    var n = re;
    re |= 1;
    try {
        return e(t)
    } finally {
        re = n, re === 0 && (Ar = ve() + 500, nl && Bn())
    }
}

function $n(e) {
    cn !== null && cn.tag === 0 && !(re & 6) && mr();
    var t = re;
    re |= 1;
    var n = mt.transition,
        r = le;
    try {
        if (mt.transition = null, le = 1, e) return e()
    } finally {
        le = r, mt.transition = n, re = t, !(re & 6) && Bn()
    }
}

function M0() {
    rt = fr.current, pe(fr)
}

function Mn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gg(n)), Ee !== null)
        for (n = Ee.return; n !== null;) {
            var r = n;
            switch (y0(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && No();
                    break;
                case 3:
                    Br(), pe(Qe), pe(Ie), D0();
                    break;
                case 5:
                    A0(r);
                    break;
                case 4:
                    Br();
                    break;
                case 13:
                    pe(xe);
                    break;
                case 19:
                    pe(xe);
                    break;
                case 10:
                    w0(r.type._context);
                    break;
                case 22:
                case 23:
                    M0()
            }
            n = n.return
        }
    if (Ae = e, Ee = e = vn(e.current, null), _e = rt = t, ke = 0, Si = null, b0 = ll = Vn = 0, We = ii = null, Rn !== null) {
        for (t = 0; t < Rn.length; t++)
            if (n = Rn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i, r.next = l
                }
                n.pending = r
            } Rn = null
    }
    return e
}

function ih(e, t) {
    do {
        var n = Ee;
        try {
            if (E0(), po.current = Oo, Mo) {
                for (var r = ge.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Mo = !1
            }
            if (Un = 0, Se = we = ge = null, ni = !1, wi = 0, I0.current = null, n === null || n.return === null) {
                ke = 1, Si = t, Ee = null;
                break
            }
            e: {
                var o = e,
                    l = n.return,
                    a = n,
                    u = t;
                if (t = _e, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u,
                        c = a,
                        h = c.tag;
                    if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var d = cc(l);
                    if (d !== null) {
                        d.flags &= -257, fc(d, l, a, o, t), d.mode & 1 && sc(o, s, t), t = d, u = s;
                        var m = t.updateQueue;
                        if (m === null) {
                            var y = new Set;
                            y.add(u), t.updateQueue = y
                        } else m.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            sc(o, s, t), O0();
                            break e
                        }
                        u = Error(M(426))
                    }
                } else if (he && a.mode & 1) {
                    var C = cc(l);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256), fc(C, l, a, o, t), v0(Sr(u, a));
                        break e
                    }
                }
                o = u = Sr(u, a),
                ke !== 4 && (ke = 2),
                ii === null ? ii = [o] : ii.push(o),
                o = l;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var g = Hp(o, u, t);
                            rc(o, g);
                            break e;
                        case 1:
                            a = u;
                            var p = o.type,
                                x = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (mn === null || !mn.has(x)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var v = Up(o, a, t);
                                rc(o, v);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ah(n)
        } catch (k) {
            t = k, Ee === n && n !== null && (Ee = n = n.return);
            continue
        }
        break
    } while (!0)
}

function oh() {
    var e = jo.current;
    return jo.current = Oo, e === null ? Oo : e
}

function O0() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ae === null || !(Vn & 268435455) && !(ll & 268435455) || un(Ae, _e)
}

function Vo(e, t) {
    var n = re;
    re |= 2;
    var r = oh();
    (Ae !== e || _e !== t) && (Ot = null, Mn(e, t));
    do try {
        Hg();
        break
    } catch (i) {
        ih(e, i)
    }
    while (!0);
    if (E0(), re = n, jo.current = r, Ee !== null) throw Error(M(261));
    return Ae = null, _e = 0, ke
}

function Hg() {
    for (; Ee !== null;) lh(Ee)
}

function Ug() {
    for (; Ee !== null && !px();) lh(Ee)
}

function lh(e) {
    var t = sh(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps, t === null ? ah(e) : Ee = t, I0.current = null
}

function ah(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = bg(n, t), n !== null) {
                n.flags &= 32767, Ee = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ke = 6, Ee = null;
                return
            }
        } else if (n = Ig(n, t, rt), n !== null) {
            Ee = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ee = t;
            return
        }
        Ee = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}

function zn(e, t, n) {
    var r = le,
        i = mt.transition;
    try {
        mt.transition = null, le = 1, Vg(e, t, n, r)
    } finally {
        mt.transition = i, le = r
    }
    return null
}

function Vg(e, t, n, r) {
    do mr(); while (cn !== null);
    if (re & 6) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (kx(e, o), e === Ae && (Ee = Ae = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ji || (Ji = !0, ch(Bo, function () {
            return mr(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = mt.transition, mt.transition = null;
        var l = le;
        le = 1;
        var a = re;
        re |= 4, I0.current = null, Lg(e, n), th(n, e), sg(du), Ao = !!fu, du = fu = null, e.current = n, Mg(n), hx(), re = a, le = l, mt.transition = o
    } else e.current = n;
    if (Ji && (Ji = !1, cn = e, Uo = i), o = e.pendingLanes, o === 0 && (mn = null), mx(n.stateNode), Ye(e, ve()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ho) throw Ho = !1, e = Tu, Tu = null, e;
    return Uo & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === zu ? oi++ : (oi = 0, zu = e) : oi = 0, Bn(), null
}

function mr() {
    if (cn !== null) {
        var e = Hd(Uo),
            t = mt.transition,
            n = le;
        try {
            if (mt.transition = null, le = 16 > e ? 16 : e, cn === null) var r = !1;
            else {
                if (e = cn, cn = null, Uo = 0, re & 6) throw Error(M(331));
                var i = re;
                for (re |= 4, $ = e.current; $ !== null;) {
                    var o = $,
                        l = o.child;
                    if ($.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for ($ = s; $ !== null;) {
                                    var c = $;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ri(8, c, o)
                                    }
                                    var h = c.child;
                                    if (h !== null) h.return = c, $ = h;
                                    else
                                        for (; $ !== null;) {
                                            c = $;
                                            var f = c.sibling,
                                                d = c.return;
                                            if (Zp(c), c === s) {
                                                $ = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = d, $ = f;
                                                break
                                            }
                                            $ = d
                                        }
                                }
                            }
                            var m = o.alternate;
                            if (m !== null) {
                                var y = m.child;
                                if (y !== null) {
                                    m.child = null;
                                    do {
                                        var C = y.sibling;
                                        y.sibling = null, y = C
                                    } while (y !== null)
                                }
                            }
                            $ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null) l.return = o, $ = l;
                    else e: for (; $ !== null;) {
                        if (o = $, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ri(9, o, o.return)
                        }
                        var g = o.sibling;
                        if (g !== null) {
                            g.return = o.return, $ = g;
                            break e
                        }
                        $ = o.return
                    }
                }
                var p = e.current;
                for ($ = p; $ !== null;) {
                    l = $;
                    var x = l.child;
                    if (l.subtreeFlags & 2064 && x !== null) x.return = l, $ = x;
                    else e: for (l = p; $ !== null;) {
                        if (a = $, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ol(9, a)
                            }
                        } catch (k) {
                            ye(a, a.return, k)
                        }
                        if (a === l) {
                            $ = null;
                            break e
                        }
                        var v = a.sibling;
                        if (v !== null) {
                            v.return = a.return, $ = v;
                            break e
                        }
                        $ = a.return
                    }
                }
                if (re = i, Bn(), bt && typeof bt.onPostCommitFiberRoot == "function") try {
                    bt.onPostCommitFiberRoot(Go, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            le = n, mt.transition = t
        }
    }
    return !1
}

function Bc(e, t, n) {
    t = Sr(n, t), t = Hp(e, t, 1), e = gn(e, t, 1), t = Oe(), e !== null && (_i(e, 1, t), Ye(e, t))
}

function ye(e, t, n) {
    if (e.tag === 3) Bc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Bc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
                    e = Sr(n, e), e = Up(t, e, 1), t = gn(t, e, 1), e = Oe(), t !== null && (_i(t, 1, e), Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}

function $g(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (_e & n) === n && (ke === 4 || ke === 3 && (_e & 130023424) === _e && 500 > ve() - R0 ? Mn(e, 0) : b0 |= n), Ye(e, t)
}

function uh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Vi, Vi <<= 1, !(Vi & 130023424) && (Vi = 4194304)) : t = 1);
    var n = Oe();
    e = qt(e, t), e !== null && (_i(e, t, n), Ye(e, n))
}

function Wg(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), uh(e, n)
}

function qg(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(t), uh(e, n)
}
var sh;
sh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current) qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, zg(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else qe = !1, he && t.flags & 1048576 && pp(t, zo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            xo(e, t), e = t.pendingProps;
            var i = Er(t, Ie.current);
            gr(t, n), i = _0(null, t, r, e, i, n);
            var o = N0();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (o = !0, Po(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, B0(t), i.updater = il, t.stateNode = i, i._reactInternals = t, Eu(t, r, e, n), t = Bu(null, t, r, !0, o, n)) : (t.tag = 0, he && o && m0(t), Me(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (xo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Kg(r), e = kt(r, e), i) {
                    case 0:
                        t = ku(null, t, r, e, n);
                        break e;
                    case 1:
                        t = hc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = dc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = pc(null, t, r, kt(r.type, e), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : kt(r, i), ku(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : kt(r, i), hc(e, t, r, i, n);
        case 3:
            e: {
                if (qp(t), e === null) throw Error(M(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                vp(e, t),
                Ro(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Sr(Error(M(423)), t), t = xc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Sr(Error(M(424)), t), t = xc(e, t, r, n, i);
                    break e
                } else
                    for (it = xn(t.stateNode.containerInfo.firstChild), lt = t, he = !0, St = null, n = mp(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (wr(), r === i) {
                        t = Qt(e, t, n);
                        break e
                    }
                    Me(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Cp(t), e === null && yu(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, pu(r, i) ? l = null : o !== null && pu(r, o) && (t.flags |= 32), Wp(e, t), Me(e, t, l, n), t.child;
        case 6:
            return e === null && yu(t), null;
        case 13:
            return Qp(e, t, n);
        case 4:
            return S0(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kr(t, null, r, n) : Me(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : kt(r, i), dc(e, t, r, i, n);
        case 7:
            return Me(e, t, t.pendingProps, n), t.child;
        case 8:
            return Me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ue(Io, r._currentValue), r._currentValue = l, o !== null)
                    if (Ft(o.value, l)) {
                        if (o.children === i.children && !Qe.current) {
                            t = Qt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                l = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Vt(-1, n & -n), u.tag = 2;
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var c = s.pending;
                                                c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), vu(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (l = o.return, l === null) throw Error(M(341));
                                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), vu(l, n, t), l = o.sibling
                            } else l = o.child;
                            if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (o = l.sibling, o !== null) {
                                        o.return = l.return, l = o;
                                        break
                                    }
                                    l = l.return
                                }
                            o = l
                        }
                Me(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, gr(t, n), i = yt(i), r = r(i), t.flags |= 1, Me(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = kt(r, t.pendingProps), i = kt(r.type, i), pc(e, t, r, i, n);
        case 15:
            return Vp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : kt(r, i), xo(e, t), t.tag = 1, Ke(r) ? (e = !0, Po(t)) : e = !1, gr(t, n), jp(t, r, i), Eu(t, r, i, n), Bu(null, t, r, !0, e, n);
        case 19:
            return Kp(e, t, n);
        case 22:
            return $p(e, t, n)
    }
    throw Error(M(156, t.tag))
};

function ch(e, t) {
    return Ld(e, t)
}

function Qg(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function gt(e, t, n, r) {
    return new Qg(e, t, n, r)
}

function j0(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Kg(e) {
    if (typeof e == "function") return j0(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === o0) return 11;
        if (e === l0) return 14
    }
    return 2
}

function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function yo(e, t, n, r, i, o) {
    var l = 2;
    if (r = e, typeof e == "function") j0(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case tr:
            return On(n.children, i, o, t);
        case i0:
            l = 8, i |= 8;
            break;
        case Wa:
            return e = gt(12, n, t, i | 2), e.elementType = Wa, e.lanes = o, e;
        case qa:
            return e = gt(13, n, t, i), e.elementType = qa, e.lanes = o, e;
        case Qa:
            return e = gt(19, n, t, i), e.elementType = Qa, e.lanes = o, e;
        case Cd:
            return al(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case yd:
                    l = 10;
                    break e;
                case vd:
                    l = 9;
                    break e;
                case o0:
                    l = 11;
                    break e;
                case l0:
                    l = 14;
                    break e;
                case on:
                    l = 16, r = null;
                    break e
            }
            throw Error(M(130, e == null ? e : typeof e, ""))
    }
    return t = gt(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function On(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e
}

function al(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = Cd, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function $l(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e
}

function Wl(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Yg(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sl(0), this.expirationTimes = Sl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function H0(e, t, n, r, i, o, l, a, u) {
    return e = new Yg(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = gt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, B0(o), e
}

function Xg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: er,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function fh(e) {
    if (!e) return En;
    e = e._reactInternals;
    e: {
        if (qn(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ke(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n)) return fp(e, n, t)
    }
    return t
}

function dh(e, t, n, r, i, o, l, a, u) {
    return e = H0(n, r, !0, e, i, o, l, a, u), e.context = fh(null), n = e.current, r = Oe(), i = yn(n), o = Vt(r, i), o.callback = t ?? null, gn(n, o, i), e.current.lanes = i, _i(e, i, r), Ye(e, r), e
}

function ul(e, t, n, r) {
    var i = t.current,
        o = Oe(),
        l = yn(i);
    return n = fh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(o, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(i, t, l), e !== null && (Dt(e, i, l, o), fo(e, i, l)), l
}

function $o(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Sc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function U0(e, t) {
    Sc(e, t), (e = e.alternate) && Sc(e, t)
}

function Gg() {
    return null
}
var ph = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function V0(e) {
    this._internalRoot = e
}
sl.prototype.render = V0.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    ul(e, t, null, null)
};
sl.prototype.unmount = V0.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $n(function () {
            ul(null, e, null, null)
        }), t[Wt] = null
    }
};

function sl(e) {
    this._internalRoot = e
}
sl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = $d();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
        an.splice(n, 0, e), n === 0 && qd(e)
    }
};

function $0(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ac() {}

function Zg(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var s = $o(l);
                o.call(s)
            }
        }
        var l = dh(t, r, e, 0, null, !1, !1, "", Ac);
        return e._reactRootContainer = l, e[Wt] = l.current, mi(e.nodeType === 8 ? e.parentNode : e), $n(), l
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var s = $o(u);
            a.call(s)
        }
    }
    var u = H0(e, 0, !1, null, null, !1, !1, "", Ac);
    return e._reactRootContainer = u, e[Wt] = u.current, mi(e.nodeType === 8 ? e.parentNode : e), $n(function () {
        ul(t, u, n, r)
    }), u
}

function fl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var u = $o(l);
                a.call(u)
            }
        }
        ul(t, l, e, i)
    } else l = Zg(n, t, e, i, r);
    return $o(l)
}
Ud = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Kr(t.pendingLanes);
                n !== 0 && (s0(t, n | 1), Ye(t, ve()), !(re & 6) && (Ar = ve() + 500, Bn()))
            }
            break;
        case 13:
            $n(function () {
                var r = qt(e, 1);
                if (r !== null) {
                    var i = Oe();
                    Dt(r, e, 1, i)
                }
            }), U0(e, 1)
    }
};
c0 = function (e) {
    if (e.tag === 13) {
        var t = qt(e, 134217728);
        if (t !== null) {
            var n = Oe();
            Dt(t, e, 134217728, n)
        }
        U0(e, 134217728)
    }
};
Vd = function (e) {
    if (e.tag === 13) {
        var t = yn(e),
            n = qt(e, t);
        if (n !== null) {
            var r = Oe();
            Dt(n, e, t, r)
        }
        U0(e, t)
    }
};
$d = function () {
    return le
};
Wd = function (e, t) {
    var n = le;
    try {
        return le = e, t()
    } finally {
        le = n
    }
};
ru = function (e, t, n) {
    switch (t) {
        case "input":
            if (Xa(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = tl(r);
                        if (!i) throw Error(M(90));
                        wd(r), Xa(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Bd(e, n);
            break;
        case "select":
            t = n.value, t != null && dr(e, !!n.multiple, t, !1)
    }
};
Pd = L0;
Td = $n;
var Jg = {
        usingClientEntryPoint: !1,
        Events: [Pi, or, tl, _d, Nd, L0]
    },
    Vr = {
        findFiberByHostInstance: bn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    em = {
        bundleType: Vr.bundleType,
        version: Vr.version,
        rendererPackageName: Vr.rendererPackageName,
        rendererConfig: Vr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = bd(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Vr.findFiberByHostInstance || Gg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eo.isDisabled && eo.supportsFiber) try {
        Go = eo.inject(em), bt = eo
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jg;
ut.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$0(t)) throw Error(M(200));
    return Xg(e, t, null, n)
};
ut.createRoot = function (e, t) {
    if (!$0(e)) throw Error(M(299));
    var n = !1,
        r = "",
        i = ph;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = H0(e, 1, !1, null, null, n, !1, r, i), e[Wt] = t.current, mi(e.nodeType === 8 ? e.parentNode : e), new V0(t)
};
ut.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
    return e = bd(t), e = e === null ? null : e.stateNode, e
};
ut.flushSync = function (e) {
    return $n(e)
};
ut.hydrate = function (e, t, n) {
    if (!cl(t)) throw Error(M(200));
    return fl(null, e, t, !0, n)
};
ut.hydrateRoot = function (e, t, n) {
    if (!$0(e)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        l = ph;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = dh(t, null, e, 1, n ?? null, i, !1, o, l), e[Wt] = t.current, mi(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new sl(t)
};
ut.render = function (e, t, n) {
    if (!cl(t)) throw Error(M(200));
    return fl(null, e, t, !1, n)
};
ut.unmountComponentAtNode = function (e) {
    if (!cl(e)) throw Error(M(40));
    return e._reactRootContainer ? ($n(function () {
        fl(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Wt] = null
        })
    }), !0) : !1
};
ut.unstable_batchedUpdates = L0;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!cl(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return fl(e, t, n, !1, r)
};
ut.version = "18.3.1-next-f1338f8080-20240426";

function hh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)
    } catch (e) {
        console.error(e)
    }
}
hh(), hd.exports = ut;
var tm = hd.exports,
    xh, Dc = tm;
xh = Dc.createRoot, Dc.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nm = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    Ue = (e, t) => {
        const n = de.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: l,
            className: a = "",
            children: u,
            ...s
        }, c) => de.createElement("svg", {
            ref: c,
            ...nm,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: l ? Number(o) * 24 / Number(i) : o,
            className: ["lucide", `lucide-${rm(e)}`, a].join(" "),
            ...s
        }, [...t.map(([h, f]) => de.createElement(h, f)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = Ue("Bold", [["path", {
    d: "M14 12a4 4 0 0 0 0-8H6v8",
    key: "v2sylx"
}], ["path", {
    d: "M15 20a4 4 0 0 0 0-8H6v8Z",
    key: "1ef5ya"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = Ue("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = Ue("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = Ue("Heading", [["path", {
    d: "M6 12h12",
    key: "8npq4p"
}], ["path", {
    d: "M6 20V4",
    key: "1w1bmo"
}], ["path", {
    d: "M18 20V4",
    key: "o2hl4u"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Ue("Italic", [["line", {
    x1: "19",
    x2: "10",
    y1: "4",
    y2: "4",
    key: "15jd3p"
}], ["line", {
    x1: "14",
    x2: "5",
    y1: "20",
    y2: "20",
    key: "bu0au3"
}], ["line", {
    x1: "15",
    x2: "9",
    y1: "4",
    y2: "20",
    key: "uljnxc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = Ue("List", [["line", {
    x1: "8",
    x2: "21",
    y1: "6",
    y2: "6",
    key: "7ey8pc"
}], ["line", {
    x1: "8",
    x2: "21",
    y1: "12",
    y2: "12",
    key: "rjfblc"
}], ["line", {
    x1: "8",
    x2: "21",
    y1: "18",
    y2: "18",
    key: "c3b1m8"
}], ["line", {
    x1: "3",
    x2: "3.01",
    y1: "6",
    y2: "6",
    key: "1g7gq3"
}], ["line", {
    x1: "3",
    x2: "3.01",
    y1: "12",
    y2: "12",
    key: "1pjlvk"
}], ["line", {
    x1: "3",
    x2: "3.01",
    y1: "18",
    y2: "18",
    key: "28t2mc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = Ue("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = Ue("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Ue("QrCode", [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = Ue("Quote", [["path", {
    d: "M17 6H3",
    key: "16j9eg"
}], ["path", {
    d: "M21 12H8",
    key: "scolzb"
}], ["path", {
    d: "M21 18H8",
    key: "1wfozv"
}], ["path", {
    d: "M3 12v6",
    key: "fv4c87"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Ue("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = Ue("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = Ue("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = Ue("Wrench", [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = Ue("X", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]]),
    ym = ({
        notes: e,
        selectedNoteId: t,
        onNoteSelect: n,
        onNewNote: r,
        onSearch: i
    }) => {
        const [o, l] = Va.useState(window.innerWidth >= 768);
        return Va.useEffect(() => {
            const a = () => {
                l(window.innerWidth >= 768)
            };
            return window.addEventListener("resize", a), () => window.removeEventListener("resize", a)
        }, []), b.jsxs(b.Fragment, {
            children: [b.jsx("button", {
                onClick: () => l(!o),
                className: "md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-50 rounded-lg shadow-md",
                children: b.jsx(sm, {
                    className: "w-5 h-5 text-gray-600"
                })
            }), b.jsx("aside", {
                className: `${o?"translate-x-0":"-translate-x-full"} fixed md:static w-64 h-screen border-r border-gray-200 bg-gray-50/80 backdrop-blur-lg transition-transform z-40 md:translate-x-0`,
                children: b.jsxs("div", {
                    className: "p-4",
                    children: [b.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [b.jsx("h2", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "Notas"
                        }), b.jsx("button", {
                            onClick: r,
                            className: "p-2 rounded-full hover:bg-gray-100 transition-colors",
                            "aria-label": "Nova nota",
                            children: b.jsx(cm, {
                                className: "w-5 h-5 text-gray-600"
                            })
                        })]
                    }), b.jsxs("div", {
                        className: "relative mb-4",
                        children: [b.jsx(hm, {
                            className: "absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                        }), b.jsx("input", {
                            type: "text",
                            placeholder: "Pesquisar",
                            onChange: a => i(a.target.value),
                            className: "w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
                        })]
                    }), b.jsx("div", {
                        className: "space-y-2",
                        children: e.map(a => b.jsxs("button", {
                            onClick: () => {
                                n(a.id), window.innerWidth < 768 && l(!1)
                            },
                            className: `w-full text-left p-3 rounded-lg transition-colors ${t===a.id?"bg-gray-200":"hover:bg-gray-100"}`,
                            children: [b.jsx("h3", {
                                className: "font-medium text-gray-800 truncate",
                                children: a.title
                            }), b.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: new Date(a.updatedAt).toLocaleDateString("pt-BR")
                            })]
                        }, a.id))
                    })]
                })
            })]
        })
    },
    vm = ({
        onBold: e,
        onItalic: t,
        onDelete: n,
        onGenerateQR: r,
        onHeading: i,
        onList: o,
        onQuote: l,
        hasSelectedNote: a
    }) => a ? b.jsxs("div", {
        className: "h-12 px-2 md:px-4 border-b border-gray-200 bg-gray-50/80 backdrop-blur-lg flex items-center space-x-1 md:space-x-2 overflow-x-auto",
        children: [b.jsx("button", {
            onClick: e,
            className: "p-2 rounded hover:bg-gray-100 transition-colors",
            "aria-label": "Negrito",
            title: "Negrito",
            children: b.jsx(im, {
                className: "w-4 h-4 text-gray-600"
            })
        }), b.jsx("button", {
            onClick: t,
            className: "p-2 rounded hover:bg-gray-100 transition-colors",
            "aria-label": "Itálico",
            title: "Itálico",
            children: b.jsx(am, {
                className: "w-4 h-4 text-gray-600"
            })
        }), b.jsx("button", {
            onClick: i,
            className: "p-2 rounded hover:bg-gray-100 transition-colors",
            "aria-label": "Título",
            title: "Título",
            children: b.jsx(lm, {
                className: "w-4 h-4 text-gray-600"
            })
        }), b.jsx("button", {
            onClick: o,
            className: "p-2 rounded hover:bg-gray-100 transition-colors",
            "aria-label": "Lista",
            title: "Lista",
            children: b.jsx(um, {
                className: "w-4 h-4 text-gray-600"
            })
        }), b.jsx("button", {
            onClick: l,
            className: "p-2 rounded hover:bg-gray-100 transition-colors",
            "aria-label": "Citação",
            title: "Citação",
            children: b.jsx(dm, {
                className: "w-4 h-4 text-gray-600"
            })
        }), b.jsx("div", {
            className: "flex-1"
        }), b.jsx("button", {
            onClick: n,
            className: "p-2 rounded hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700",
            "aria-label": "Excluir nota",
            title: "Excluir nota",
            children: b.jsx(xm, {
                className: "w-4 h-4"
            })
        }), b.jsxs("button", {
            onClick: r,
            className: "flex items-center px-3 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors text-sm text-gray-700 whitespace-nowrap",
            title: "Gerar QR Code",
            children: [b.jsx(fm, {
                className: "w-4 h-4 mr-2"
            }), b.jsx("span", {
                className: "hidden md:inline",
                children: "Gerar QR Code"
            }), b.jsx("span", {
                className: "md:hidden",
                children: "QR"
            })]
        })]
    }) : null;

function Cm(e, t) {
    const n = {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
const Em = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    wm = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    km = {};

function Fc(e, t) {
    return (km.jsx ? wm : Em).test(e)
}
const Bm = /[ \t\n\f\r]/g;

function Sm(e) {
    return typeof e == "object" ? e.type === "text" ? _c(e.value) : !1 : _c(e)
}

function _c(e) {
    return e.replace(Bm, "") === ""
}
class zi {
    constructor(t, n, r) {
        this.property = t, this.normal = n, r && (this.space = r)
    }
}
zi.prototype.property = {};
zi.prototype.normal = {};
zi.prototype.space = null;

function gh(e, t) {
    const n = {},
        r = {};
    let i = -1;
    for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
    return new zi(n, r, t)
}

function Ru(e) {
    return e.toLowerCase()
}
class Ct {
    constructor(t, n) {
        this.property = t, this.attribute = n
    }
}
Ct.prototype.space = null;
Ct.prototype.boolean = !1;
Ct.prototype.booleanish = !1;
Ct.prototype.overloadedBoolean = !1;
Ct.prototype.number = !1;
Ct.prototype.commaSeparated = !1;
Ct.prototype.spaceSeparated = !1;
Ct.prototype.commaOrSpaceSeparated = !1;
Ct.prototype.mustUseProperty = !1;
Ct.prototype.defined = !1;
let Am = 0;
const G = Qn(),
    Ce = Qn(),
    mh = Qn(),
    O = Qn(),
    ae = Qn(),
    yr = Qn(),
    nt = Qn();

function Qn() {
    return 2 ** ++Am
}
const Lu = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: G,
        booleanish: Ce,
        commaOrSpaceSeparated: nt,
        commaSeparated: yr,
        number: O,
        overloadedBoolean: mh,
        spaceSeparated: ae
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ql = Object.keys(Lu);
class q0 extends Ct {
    constructor(t, n, r, i) {
        let o = -1;
        if (super(t, n), Nc(this, "space", i), typeof r == "number")
            for (; ++o < ql.length;) {
                const l = ql[o];
                Nc(this, ql[o], (r & Lu[l]) === Lu[l])
            }
    }
}
q0.prototype.defined = !0;

function Nc(e, t, n) {
    n && (e[t] = n)
}
const Dm = {}.hasOwnProperty;

function Ir(e) {
    const t = {},
        n = {};
    let r;
    for (r in e.properties)
        if (Dm.call(e.properties, r)) {
            const i = e.properties[r],
                o = new q0(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Ru(r)] = r, n[Ru(o.attribute)] = r
        } return new zi(t, n, e.space)
}
const yh = Ir({
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase()
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    vh = Ir({
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase()
        },
        properties: {
            xmlLang: null,
            xmlBase: null,
            xmlSpace: null
        }
    });

function Ch(e, t) {
    return t in e ? e[t] : t
}

function Eh(e, t) {
    return Ch(e, t.toLowerCase())
}
const wh = Ir({
        space: "xmlns",
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        transform: Eh,
        properties: {
            xmlns: null,
            xmlnsXLink: null
        }
    }),
    kh = Ir({
        transform(e, t) {
            return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: Ce,
            ariaAutoComplete: null,
            ariaBusy: Ce,
            ariaChecked: Ce,
            ariaColCount: O,
            ariaColIndex: O,
            ariaColSpan: O,
            ariaControls: ae,
            ariaCurrent: null,
            ariaDescribedBy: ae,
            ariaDetails: null,
            ariaDisabled: Ce,
            ariaDropEffect: ae,
            ariaErrorMessage: null,
            ariaExpanded: Ce,
            ariaFlowTo: ae,
            ariaGrabbed: Ce,
            ariaHasPopup: null,
            ariaHidden: Ce,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: ae,
            ariaLevel: O,
            ariaLive: null,
            ariaModal: Ce,
            ariaMultiLine: Ce,
            ariaMultiSelectable: Ce,
            ariaOrientation: null,
            ariaOwns: ae,
            ariaPlaceholder: null,
            ariaPosInSet: O,
            ariaPressed: Ce,
            ariaReadOnly: Ce,
            ariaRelevant: null,
            ariaRequired: Ce,
            ariaRoleDescription: ae,
            ariaRowCount: O,
            ariaRowIndex: O,
            ariaRowSpan: O,
            ariaSelected: Ce,
            ariaSetSize: O,
            ariaSort: null,
            ariaValueMax: O,
            ariaValueMin: O,
            ariaValueNow: O,
            ariaValueText: null,
            role: null
        }
    }),
    Fm = Ir({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: Eh,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: yr,
            acceptCharset: ae,
            accessKey: ae,
            action: null,
            allow: null,
            allowFullScreen: G,
            allowPaymentRequest: G,
            allowUserMedia: G,
            alt: null,
            as: null,
            async: G,
            autoCapitalize: null,
            autoComplete: ae,
            autoFocus: G,
            autoPlay: G,
            blocking: ae,
            capture: null,
            charSet: null,
            checked: G,
            cite: null,
            className: ae,
            cols: O,
            colSpan: null,
            content: null,
            contentEditable: Ce,
            controls: G,
            controlsList: ae,
            coords: O | yr,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: G,
            defer: G,
            dir: null,
            dirName: null,
            disabled: G,
            download: mh,
            draggable: Ce,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: G,
            formTarget: null,
            headers: ae,
            height: O,
            hidden: G,
            high: O,
            href: null,
            hrefLang: null,
            htmlFor: ae,
            httpEquiv: ae,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: G,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: G,
            itemId: null,
            itemProp: ae,
            itemRef: ae,
            itemScope: G,
            itemType: ae,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: G,
            low: O,
            manifest: null,
            max: null,
            maxLength: O,
            media: null,
            method: null,
            min: null,
            minLength: O,
            multiple: G,
            muted: G,
            name: null,
            nonce: null,
            noModule: G,
            noValidate: G,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: G,
            optimum: O,
            pattern: null,
            ping: ae,
            placeholder: null,
            playsInline: G,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: G,
            referrerPolicy: null,
            rel: ae,
            required: G,
            reversed: G,
            rows: O,
            rowSpan: O,
            sandbox: ae,
            scope: null,
            scoped: G,
            seamless: G,
            selected: G,
            shadowRootClonable: G,
            shadowRootDelegatesFocus: G,
            shadowRootMode: null,
            shape: null,
            size: O,
            sizes: null,
            slot: null,
            span: O,
            spellCheck: Ce,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: O,
            step: null,
            style: null,
            tabIndex: O,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: G,
            useMap: null,
            value: Ce,
            width: O,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: ae,
            axis: null,
            background: null,
            bgColor: null,
            border: O,
            borderColor: null,
            bottomMargin: O,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: G,
            declare: G,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: O,
            leftMargin: O,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: O,
            marginWidth: O,
            noResize: G,
            noHref: G,
            noShade: G,
            noWrap: G,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: O,
            rules: null,
            scheme: null,
            scrolling: Ce,
            standby: null,
            summary: null,
            text: null,
            topMargin: O,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: O,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: G,
            disableRemotePlayback: G,
            prefix: null,
            property: null,
            results: O,
            security: null,
            unselectable: null
        }
    }),
    _m = Ir({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: Ch,
        properties: {
            about: nt,
            accentHeight: O,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: O,
            amplitude: O,
            arabicForm: null,
            ascent: O,
            attributeName: null,
            attributeType: null,
            azimuth: O,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: O,
            by: null,
            calcMode: null,
            capHeight: O,
            className: ae,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: O,
            diffuseConstant: O,
            direction: null,
            display: null,
            dur: null,
            divisor: O,
            dominantBaseline: null,
            download: G,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: O,
            enableBackground: null,
            end: null,
            event: null,
            exponent: O,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: O,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: yr,
            g2: yr,
            glyphName: yr,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: O,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: O,
            horizOriginX: O,
            horizOriginY: O,
            id: null,
            ideographic: O,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: O,
            k: O,
            k1: O,
            k2: O,
            k3: O,
            k4: O,
            kernelMatrix: nt,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: O,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: O,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: O,
            overlineThickness: O,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: O,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: ae,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: O,
            pointsAtY: O,
            pointsAtZ: O,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: nt,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: nt,
            rev: nt,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: nt,
            requiredFeatures: nt,
            requiredFonts: nt,
            requiredFormats: nt,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: O,
            specularExponent: O,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: O,
            strikethroughThickness: O,
            string: null,
            stroke: null,
            strokeDashArray: nt,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: O,
            strokeOpacity: O,
            strokeWidth: null,
            style: null,
            surfaceScale: O,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: nt,
            tabIndex: O,
            tableValues: null,
            target: null,
            targetX: O,
            targetY: O,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: nt,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: O,
            underlineThickness: O,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: O,
            values: null,
            vAlphabetic: O,
            vMathematical: O,
            vectorEffect: null,
            vHanging: O,
            vIdeographic: O,
            version: null,
            vertAdvY: O,
            vertOriginX: O,
            vertOriginY: O,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: O,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    Nm = /^data[-\w.:]+$/i,
    Pc = /-[a-z]/g,
    Pm = /[A-Z]/g;

function Tm(e, t) {
    const n = Ru(t);
    let r = t,
        i = Ct;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && Nm.test(t)) {
        if (t.charAt(4) === "-") {
            const o = t.slice(5).replace(Pc, Im);
            r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
        } else {
            const o = t.slice(4);
            if (!Pc.test(o)) {
                let l = o.replace(Pm, zm);
                l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l
            }
        }
        i = q0
    }
    return new i(r, t)
}

function zm(e) {
    return "-" + e.toLowerCase()
}

function Im(e) {
    return e.charAt(1).toUpperCase()
}
const bm = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    Rm = gh([vh, yh, wh, kh, Fm], "html"),
    Q0 = gh([vh, yh, wh, kh, _m], "svg");

function Lm(e) {
    return e.join(" ").trim()
}
var Bh = {},
    Tc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    Mm = /\n/g,
    Om = /^\s*/,
    jm = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    Hm = /^:\s*/,
    Um = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    Vm = /^[;\s]*/,
    $m = /^\s+|\s+$/g,
    Wm = `
`,
    zc = "/",
    Ic = "*",
    In = "",
    qm = "comment",
    Qm = "declaration",
    Km = function (e, t) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        t = t || {};
        var n = 1,
            r = 1;

        function i(m) {
            var y = m.match(Mm);
            y && (n += y.length);
            var C = m.lastIndexOf(Wm);
            r = ~C ? m.length - C : r + m.length
        }

        function o() {
            var m = {
                line: n,
                column: r
            };
            return function (y) {
                return y.position = new l(m), s(), y
            }
        }

        function l(m) {
            this.start = m, this.end = {
                line: n,
                column: r
            }, this.source = t.source
        }
        l.prototype.content = e;

        function a(m) {
            var y = new Error(t.source + ":" + n + ":" + r + ": " + m);
            if (y.reason = m, y.filename = t.source, y.line = n, y.column = r, y.source = e, !t.silent) throw y
        }

        function u(m) {
            var y = m.exec(e);
            if (y) {
                var C = y[0];
                return i(C), e = e.slice(C.length), y
            }
        }

        function s() {
            u(Om)
        }

        function c(m) {
            var y;
            for (m = m || []; y = h();) y !== !1 && m.push(y);
            return m
        }

        function h() {
            var m = o();
            if (!(zc != e.charAt(0) || Ic != e.charAt(1))) {
                for (var y = 2; In != e.charAt(y) && (Ic != e.charAt(y) || zc != e.charAt(y + 1));) ++y;
                if (y += 2, In === e.charAt(y - 1)) return a("End of comment missing");
                var C = e.slice(2, y - 2);
                return r += 2, i(C), e = e.slice(y), r += 2, m({
                    type: qm,
                    comment: C
                })
            }
        }

        function f() {
            var m = o(),
                y = u(jm);
            if (y) {
                if (h(), !u(Hm)) return a("property missing ':'");
                var C = u(Um),
                    g = m({
                        type: Qm,
                        property: bc(y[0].replace(Tc, In)),
                        value: C ? bc(C[0].replace(Tc, In)) : In
                    });
                return u(Vm), g
            }
        }

        function d() {
            var m = [];
            c(m);
            for (var y; y = f();) y !== !1 && (m.push(y), c(m));
            return m
        }
        return s(), d()
    };

function bc(e) {
    return e ? e.replace($m, In) : In
}
var Ym = Z && Z.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Bh, "__esModule", {
    value: !0
});
var Rc = Bh.default = Gm,
    Xm = Ym(Km);

function Gm(e, t) {
    var n = null;
    if (!e || typeof e != "string") return n;
    var r = (0, Xm.default)(e),
        i = typeof t == "function";
    return r.forEach(function (o) {
        if (o.type === "declaration") {
            var l = o.property,
                a = o.value;
            i ? t(l, a, o) : a && (n = n || {}, n[l] = a)
        }
    }), n
}
const Zm = Rc.default || Rc,
    Sh = Ah("end"),
    K0 = Ah("start");

function Ah(e) {
    return t;

    function t(n) {
        const r = n && n.position && n.position[e] || {};
        if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
            line: r.line,
            column: r.column,
            offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
        }
    }
}

function Jm(e) {
    const t = K0(e),
        n = Sh(e);
    if (t && n) return {
        start: t,
        end: n
    }
}

function li(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Lc(e.position) : "start" in e || "end" in e ? Lc(e) : "line" in e || "column" in e ? Mu(e) : ""
}

function Mu(e) {
    return Mc(e && e.line) + ":" + Mc(e && e.column)
}

function Lc(e) {
    return Mu(e && e.start) + "-" + Mu(e && e.end)
}

function Mc(e) {
    return e && typeof e == "number" ? e : 1
}
class be extends Error {
    constructor(t, n, r) {
        super(), typeof n == "string" && (r = n, n = void 0);
        let i = "",
            o = {},
            l = !1;
        if (n && ("line" in n && "column" in n ? o = {
                place: n
            } : "start" in n && "end" in n ? o = {
                place: n
            } : "type" in n ? o = {
                ancestors: [n],
                place: n.position
            } : o = {
                ...n
            }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
            const u = r.indexOf(":");
            u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1))
        }
        if (!o.place && o.ancestors && o.ancestors) {
            const u = o.ancestors[o.ancestors.length - 1];
            u && (o.place = u.position)
        }
        const a = o.place && "start" in o.place ? o.place.start : o.place;
        this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = li(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url
    }
}
be.prototype.file = "";
be.prototype.name = "";
be.prototype.reason = "";
be.prototype.message = "";
be.prototype.stack = "";
be.prototype.column = void 0;
be.prototype.line = void 0;
be.prototype.ancestors = void 0;
be.prototype.cause = void 0;
be.prototype.fatal = void 0;
be.prototype.place = void 0;
be.prototype.ruleId = void 0;
be.prototype.source = void 0;
const Y0 = {}.hasOwnProperty,
    ey = new Map,
    ty = /[A-Z]/g,
    ny = /-([a-z])/g,
    ry = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    iy = new Set(["td", "th"]),
    Dh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

function oy(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const n = t.filePath || void 0;
    let r;
    if (t.development) {
        if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        r = py(n, t.jsxDEV)
    } else {
        if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        r = dy(n, t.jsx, t.jsxs)
    }
    const i = {
            Fragment: t.Fragment,
            ancestors: [],
            components: t.components || {},
            create: r,
            elementAttributeNameCase: t.elementAttributeNameCase || "react",
            evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
            filePath: n,
            ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
            passKeys: t.passKeys !== !1,
            passNode: t.passNode || !1,
            schema: t.space === "svg" ? Q0 : Rm,
            stylePropertyNameCase: t.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
        },
        o = Fh(i, e, void 0);
    return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
        children: o || void 0
    }, void 0)
}

function Fh(e, t, n) {
    if (t.type === "element") return ly(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return ay(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return sy(e, t, n);
    if (t.type === "mdxjsEsm") return uy(e, t);
    if (t.type === "root") return cy(e, t, n);
    if (t.type === "text") return fy(e, t)
}

function ly(e, t, n) {
    const r = e.schema;
    let i = r;
    t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Q0, e.schema = i), e.ancestors.push(t);
    const o = Nh(e, t.tagName, !1),
        l = hy(e, t);
    let a = G0(e, t);
    return ry.has(t.tagName) && (a = a.filter(function (u) {
        return typeof u == "string" ? !Sm(u) : !0
    })), _h(e, l, o, t), X0(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n)
}

function ay(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        const r = t.data.estree.body[0];
        return r.type, e.evaluater.evaluateExpression(r.expression)
    }
    Ai(e, t.position)
}

function uy(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    Ai(e, t.position)
}

function sy(e, t, n) {
    const r = e.schema;
    let i = r;
    t.name === "svg" && r.space === "html" && (i = Q0, e.schema = i), e.ancestors.push(t);
    const o = t.name === null ? e.Fragment : Nh(e, t.name, !0),
        l = xy(e, t),
        a = G0(e, t);
    return _h(e, l, o, t), X0(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n)
}

function cy(e, t, n) {
    const r = {};
    return X0(r, G0(e, t)), e.create(t, e.Fragment, r, n)
}

function fy(e, t) {
    return t.value
}

function _h(e, t, n, r) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r)
}

function X0(e, t) {
    if (t.length > 0) {
        const n = t.length > 1 ? t : t[0];
        n && (e.children = n)
    }
}

function dy(e, t, n) {
    return r;

    function r(i, o, l, a) {
        const s = Array.isArray(l.children) ? n : t;
        return a ? s(o, l, a) : s(o, l)
    }
}

function py(e, t) {
    return n;

    function n(r, i, o, l) {
        const a = Array.isArray(o.children),
            u = K0(r);
        return t(i, o, l, a, {
            columnNumber: u ? u.column - 1 : void 0,
            fileName: e,
            lineNumber: u ? u.line : void 0
        }, void 0)
    }
}

function hy(e, t) {
    const n = {};
    let r, i;
    for (i in t.properties)
        if (i !== "children" && Y0.call(t.properties, i)) {
            const o = gy(e, i, t.properties[i]);
            if (o) {
                const [l, a] = o;
                e.tableCellAlignToStyle && l === "align" && typeof a == "string" && iy.has(t.tagName) ? r = a : n[l] = a
            }
        } if (r) {
        const o = n.style || (n.style = {});
        o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r
    }
    return n
}

function xy(e, t) {
    const n = {};
    for (const r of t.attributes)
        if (r.type === "mdxJsxExpressionAttribute")
            if (r.data && r.data.estree && e.evaluater) {
                const o = r.data.estree.body[0];
                o.type;
                const l = o.expression;
                l.type;
                const a = l.properties[0];
                a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument))
            } else Ai(e, t.position);
    else {
        const i = r.name;
        let o;
        if (r.value && typeof r.value == "object")
            if (r.value.data && r.value.data.estree && e.evaluater) {
                const a = r.value.data.estree.body[0];
                a.type, o = e.evaluater.evaluateExpression(a.expression)
            } else Ai(e, t.position);
        else o = r.value === null ? !0 : r.value;
        n[i] = o
    }
    return n
}

function G0(e, t) {
    const n = [];
    let r = -1;
    const i = e.passKeys ? new Map : ey;
    for (; ++r < t.children.length;) {
        const o = t.children[r];
        let l;
        if (e.passKeys) {
            const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
            if (u) {
                const s = i.get(u) || 0;
                l = u + "-" + s, i.set(u, s + 1)
            }
        }
        const a = Fh(e, o, l);
        a !== void 0 && n.push(a)
    }
    return n
}

function gy(e, t, n) {
    const r = Tm(e.schema, t);
    if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
        if (Array.isArray(n) && (n = r.commaSeparated ? Cm(n) : Lm(n)), r.property === "style") {
            let i = typeof n == "object" ? n : my(e, String(n));
            return e.stylePropertyNameCase === "css" && (i = yy(i)), ["style", i]
        }
        return [e.elementAttributeNameCase === "react" && r.space ? bm[r.property] || r.property : r.attribute, n]
    }
}

function my(e, t) {
    const n = {};
    try {
        Zm(t, r)
    } catch (i) {
        if (!e.ignoreInvalidStyle) {
            const o = i,
                l = new be("Cannot parse `style` attribute", {
                    ancestors: e.ancestors,
                    cause: o,
                    ruleId: "style",
                    source: "hast-util-to-jsx-runtime"
                });
            throw l.file = e.filePath || void 0, l.url = Dh + "#cannot-parse-style-attribute", l
        }
    }
    return n;

    function r(i, o) {
        let l = i;
        l.slice(0, 2) !== "--" && (l.slice(0, 4) === "-ms-" && (l = "ms-" + l.slice(4)), l = l.replace(ny, Cy)), n[l] = o
    }
}

function Nh(e, t, n) {
    let r;
    if (!n) r = {
        type: "Literal",
        value: t
    };
    else if (t.includes(".")) {
        const i = t.split(".");
        let o = -1,
            l;
        for (; ++o < i.length;) {
            const a = Fc(i[o]) ? {
                type: "Identifier",
                name: i[o]
            } : {
                type: "Literal",
                value: i[o]
            };
            l = l ? {
                type: "MemberExpression",
                object: l,
                property: a,
                computed: !!(o && a.type === "Literal"),
                optional: !1
            } : a
        }
        r = l
    } else r = Fc(t) && !/^[a-z]/.test(t) ? {
        type: "Identifier",
        name: t
    } : {
        type: "Literal",
        value: t
    };
    if (r.type === "Literal") {
        const i = r.value;
        return Y0.call(e.components, i) ? e.components[i] : i
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    Ai(e)
}

function Ai(e, t) {
    const n = new be("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: t,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw n.file = e.filePath || void 0, n.url = Dh + "#cannot-handle-mdx-estrees-without-createevaluater", n
}

function yy(e) {
    const t = {};
    let n;
    for (n in e) Y0.call(e, n) && (t[vy(n)] = e[n]);
    return t
}

function vy(e) {
    let t = e.replace(ty, Ey);
    return t.slice(0, 3) === "ms-" && (t = "-" + t), t
}

function Cy(e, t) {
    return t.toUpperCase()
}

function Ey(e) {
    return "-" + e.toLowerCase()
}
const Ql = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
    },
    wy = {};

function ky(e, t) {
    const n = wy,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return Ph(e, r, i)
}

function Ph(e, t, n) {
    if (By(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Oc(e.children, t, n)
    }
    return Array.isArray(e) ? Oc(e, t, n) : ""
}

function Oc(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = Ph(e[i], t, n);
    return r.join("")
}

function By(e) {
    return !!(e && typeof e == "object")
}
const jc = document.createElement("i");

function Z0(e) {
    const t = "&" + e + ";";
    jc.innerHTML = t;
    const n = jc.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}

function Lt(e, t, n, r) {
    const i = e.length;
    let o = 0,
        l;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) l = Array.from(r), l.unshift(t, n), e.splice(...l);
    else
        for (n && e.splice(t, n); o < r.length;) l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4
}

function xt(e, t) {
    return e.length > 0 ? (Lt(e, e.length, 0, t), e) : t
}
const Hc = {}.hasOwnProperty;

function Sy(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length;) Ay(t, e[n]);
    return t
}

function Ay(e, t) {
    let n;
    for (n in t) {
        const i = (Hc.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            o = t[n];
        let l;
        if (o)
            for (l in o) {
                Hc.call(i, l) || (i[l] = []);
                const a = o[l];
                Dy(i[l], Array.isArray(a) ? a : a ? [a] : [])
            }
    }
}

function Dy(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
    Lt(e, 0, 0, r)
}

function Th(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
}

function vr(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const It = Sn(/[A-Za-z]/),
    ot = Sn(/[\dA-Za-z]/),
    Fy = Sn(/[#-'*+\--9=?A-Z^-~]/);

function Ou(e) {
    return e !== null && (e < 32 || e === 127)
}
const ju = Sn(/\d/),
    _y = Sn(/[\dA-Fa-f]/),
    Ny = Sn(/[!-/:-@[-`{-~]/);

function Y(e) {
    return e !== null && e < -2
}

function Xe(e) {
    return e !== null && (e < 0 || e === 32)
}

function ie(e) {
    return e === -2 || e === -1 || e === 32
}
const Py = Sn(new RegExp("\\p{P}|\\p{S}", "u")),
    Ty = Sn(/\s/);

function Sn(e) {
    return t;

    function t(n) {
        return n !== null && n > -1 && e.test(String.fromCharCode(n))
    }
}

function br(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length;) {
        const o = e.charCodeAt(n);
        let l = "";
        if (o === 37 && ot(e.charCodeAt(n + 1)) && ot(e.charCodeAt(n + 2))) i = 2;
        else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
        else if (o > 55295 && o < 57344) {
            const a = e.charCodeAt(n + 1);
            o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�"
        } else l = String.fromCharCode(o);
        l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0)
    }
    return t.join("") + e.slice(r)
}

function se(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return l;

    function l(u) {
        return ie(u) ? (e.enter(n), a(u)) : t(u)
    }

    function a(u) {
        return ie(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u))
    }
}
const zy = {
    tokenize: Iy
};

function Iy(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;

    function r(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), se(e, t, "linePrefix")
    }

    function i(a) {
        return e.enter("paragraph"), o(a)
    }

    function o(a) {
        const u = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        return n && (n.next = u), n = u, l(a)
    }

    function l(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return
        }
        return Y(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l)
    }
}
const by = {
        tokenize: Ry
    },
    Uc = {
        tokenize: Ly
    };

function Ry(e) {
    const t = this,
        n = [];
    let r = 0,
        i, o, l;
    return a;

    function a(x) {
        if (r < n.length) {
            const v = n[r];
            return t.containerState = v[1], e.attempt(v[0].continuation, u, s)(x)
        }
        return s(x)
    }

    function u(x) {
        if (r++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && p();
            const v = t.events.length;
            let k = v,
                E;
            for (; k--;)
                if (t.events[k][0] === "exit" && t.events[k][1].type === "chunkFlow") {
                    E = t.events[k][1].end;
                    break
                } g(r);
            let S = v;
            for (; S < t.events.length;) t.events[S][1].end = {
                ...E
            }, S++;
            return Lt(t.events, k + 1, 0, t.events.slice(v)), t.events.length = S, s(x)
        }
        return a(x)
    }

    function s(x) {
        if (r === n.length) {
            if (!i) return f(x);
            if (i.currentConstruct && i.currentConstruct.concrete) return m(x);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(Uc, c, h)(x)
    }

    function c(x) {
        return i && p(), g(r), f(x)
    }

    function h(x) {
        return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(x)
    }

    function f(x) {
        return t.containerState = {}, e.attempt(Uc, d, m)(x)
    }

    function d(x) {
        return r++, n.push([t.currentConstruct, t.containerState]), f(x)
    }

    function m(x) {
        if (x === null) {
            i && p(), g(0), e.consume(x);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            _tokenizer: i,
            contentType: "flow",
            previous: o
        }), y(x)
    }

    function y(x) {
        if (x === null) {
            C(e.exit("chunkFlow"), !0), g(0), e.consume(x);
            return
        }
        return Y(x) ? (e.consume(x), C(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(x), y)
    }

    function C(x, v) {
        const k = t.sliceStream(x);
        if (v && k.push(null), x.previous = o, o && (o.next = x), o = x, i.defineSkip(x.start), i.write(k), t.parser.lazy[x.start.line]) {
            let E = i.events.length;
            for (; E--;)
                if (i.events[E][1].start.offset < l && (!i.events[E][1].end || i.events[E][1].end.offset > l)) return;
            const S = t.events.length;
            let D = S,
                N, A;
            for (; D--;)
                if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
                    if (N) {
                        A = t.events[D][1].end;
                        break
                    }
                    N = !0
                } for (g(r), E = S; E < t.events.length;) t.events[E][1].end = {
                ...A
            }, E++;
            Lt(t.events, D + 1, 0, t.events.slice(S)), t.events.length = E
        }
    }

    function g(x) {
        let v = n.length;
        for (; v-- > x;) {
            const k = n[v];
            t.containerState = k[1], k[0].exit.call(t, e)
        }
        n.length = x
    }

    function p() {
        i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function Ly(e, t, n) {
    return se(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Vc(e) {
    if (e === null || Xe(e) || Ty(e)) return 1;
    if (Py(e)) return 2
}

function J0(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const o = e[i].resolveAll;
        o && !r.includes(o) && (t = o(t, n), r.push(o))
    }
    return t
}
const Hu = {
    name: "attention",
    resolveAll: My,
    tokenize: Oy
};

function My(e, t) {
    let n = -1,
        r, i, o, l, a, u, s, c;
    for (; ++n < e.length;)
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                    u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const h = {
                            ...e[r][1].end
                        },
                        f = {
                            ...e[n][1].start
                        };
                    $c(h, -u), $c(f, u), l = {
                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                        start: h,
                        end: {
                            ...e[r][1].end
                        }
                    }, a = {
                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                        start: {
                            ...e[n][1].start
                        },
                        end: f
                    }, o = {
                        type: u > 1 ? "strongText" : "emphasisText",
                        start: {
                            ...e[r][1].end
                        },
                        end: {
                            ...e[n][1].start
                        }
                    }, i = {
                        type: u > 1 ? "strong" : "emphasis",
                        start: {
                            ...l.start
                        },
                        end: {
                            ...a.end
                        }
                    }, e[r][1].end = {
                        ...l.start
                    }, e[n][1].start = {
                        ...a.end
                    }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = xt(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = xt(s, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), s = xt(s, J0(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = xt(s, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = xt(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Lt(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
                    break
                }
        } for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e
}

function Oy(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Vc(r);
    let o;
    return l;

    function l(u) {
        return o = u, e.enter("attentionSequence"), a(u)
    }

    function a(u) {
        if (u === o) return e.consume(u), a;
        const s = e.exit("attentionSequence"),
            c = Vc(u),
            h = !c || c === 2 && i || n.includes(u),
            f = !i || i === 2 && c || n.includes(r);
        return s._open = !!(o === 42 ? h : h && (i || !f)), s._close = !!(o === 42 ? f : f && (c || !h)), t(u)
    }
}

function $c(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
const jy = {
    name: "autolink",
    tokenize: Hy
};

function Hy(e, t, n) {
    let r = 0;
    return i;

    function i(d) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
    }

    function o(d) {
        return It(d) ? (e.consume(d), l) : d === 64 ? n(d) : s(d)
    }

    function l(d) {
        return d === 43 || d === 45 || d === 46 || ot(d) ? (r = 1, a(d)) : s(d)
    }

    function a(d) {
        return d === 58 ? (e.consume(d), r = 0, u) : (d === 43 || d === 45 || d === 46 || ot(d)) && r++ < 32 ? (e.consume(d), a) : (r = 0, s(d))
    }

    function u(d) {
        return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Ou(d) ? n(d) : (e.consume(d), u)
    }

    function s(d) {
        return d === 64 ? (e.consume(d), c) : Fy(d) ? (e.consume(d), s) : n(d)
    }

    function c(d) {
        return ot(d) ? h(d) : n(d)
    }

    function h(d) {
        return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(d)
    }

    function f(d) {
        if ((d === 45 || ot(d)) && r++ < 63) {
            const m = d === 45 ? f : h;
            return e.consume(d), m
        }
        return n(d)
    }
}
const dl = {
    partial: !0,
    tokenize: Uy
};

function Uy(e, t, n) {
    return r;

    function r(o) {
        return ie(o) ? se(e, i, "linePrefix")(o) : i(o)
    }

    function i(o) {
        return o === null || Y(o) ? t(o) : n(o)
    }
}
const zh = {
    continuation: {
        tokenize: $y
    },
    exit: Wy,
    name: "blockQuote",
    tokenize: Vy
};

function Vy(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        if (l === 62) {
            const a = r.containerState;
            return a.open || (e.enter("blockQuote", {
                _container: !0
            }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o
        }
        return n(l)
    }

    function o(l) {
        return ie(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l))
    }
}

function $y(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return ie(l) ? se(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l)
    }

    function o(l) {
        return e.attempt(zh, t, n)(l)
    }
}

function Wy(e) {
    e.exit("blockQuote")
}
const Ih = {
    name: "characterEscape",
    tokenize: qy
};

function qy(e, t, n) {
    return r;

    function r(o) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
    }

    function i(o) {
        return Ny(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
    }
}
const bh = {
    name: "characterReference",
    tokenize: Qy
};

function Qy(e, t, n) {
    const r = this;
    let i = 0,
        o, l;
    return a;

    function a(h) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), u
    }

    function u(h) {
        return h === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(h), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = ot, c(h))
    }

    function s(h) {
        return h === 88 || h === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(h), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = _y, c) : (e.enter("characterReferenceValue"), o = 7, l = ju, c(h))
    }

    function c(h) {
        if (h === 59 && i) {
            const f = e.exit("characterReferenceValue");
            return l === ot && !Z0(r.sliceSerialize(f)) ? n(h) : (e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return l(h) && i++ < o ? (e.consume(h), c) : n(h)
    }
}
const Wc = {
        partial: !0,
        tokenize: Yy
    },
    qc = {
        concrete: !0,
        name: "codeFenced",
        tokenize: Ky
    };

function Ky(e, t, n) {
    const r = this,
        i = {
            partial: !0,
            tokenize: k
        };
    let o = 0,
        l = 0,
        a;
    return u;

    function u(E) {
        return s(E)
    }

    function s(E) {
        const S = r.events[r.events.length - 1];
        return o = S && S[1].type === "linePrefix" ? S[2].sliceSerialize(S[1], !0).length : 0, a = E, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(E)
    }

    function c(E) {
        return E === a ? (l++, e.consume(E), c) : l < 3 ? n(E) : (e.exit("codeFencedFenceSequence"), ie(E) ? se(e, h, "whitespace")(E) : h(E))
    }

    function h(E) {
        return E === null || Y(E) ? (e.exit("codeFencedFence"), r.interrupt ? t(E) : e.check(Wc, y, v)(E)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), f(E))
    }

    function f(E) {
        return E === null || Y(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), h(E)) : ie(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), se(e, d, "whitespace")(E)) : E === 96 && E === a ? n(E) : (e.consume(E), f)
    }

    function d(E) {
        return E === null || Y(E) ? h(E) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), m(E))
    }

    function m(E) {
        return E === null || Y(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), h(E)) : E === 96 && E === a ? n(E) : (e.consume(E), m)
    }

    function y(E) {
        return e.attempt(i, v, C)(E)
    }

    function C(E) {
        return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), g
    }

    function g(E) {
        return o > 0 && ie(E) ? se(e, p, "linePrefix", o + 1)(E) : p(E)
    }

    function p(E) {
        return E === null || Y(E) ? e.check(Wc, y, v)(E) : (e.enter("codeFlowValue"), x(E))
    }

    function x(E) {
        return E === null || Y(E) ? (e.exit("codeFlowValue"), p(E)) : (e.consume(E), x)
    }

    function v(E) {
        return e.exit("codeFenced"), t(E)
    }

    function k(E, S, D) {
        let N = 0;
        return A;

        function A(j) {
            return E.enter("lineEnding"), E.consume(j), E.exit("lineEnding"), F
        }

        function F(j) {
            return E.enter("codeFencedFence"), ie(j) ? se(E, _, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(j) : _(j)
        }

        function _(j) {
            return j === a ? (E.enter("codeFencedFenceSequence"), P(j)) : D(j)
        }

        function P(j) {
            return j === a ? (N++, E.consume(j), P) : N >= l ? (E.exit("codeFencedFenceSequence"), ie(j) ? se(E, U, "whitespace")(j) : U(j)) : D(j)
        }

        function U(j) {
            return j === null || Y(j) ? (E.exit("codeFencedFence"), S(j)) : D(j)
        }
    }
}

function Yy(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o)
    }

    function o(l) {
        return r.parser.lazy[r.now().line] ? n(l) : t(l)
    }
}
const Kl = {
        name: "codeIndented",
        tokenize: Gy
    },
    Xy = {
        partial: !0,
        tokenize: Zy
    };

function Gy(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.enter("codeIndented"), se(e, o, "linePrefix", 5)(s)
    }

    function o(s) {
        const c = r.events[r.events.length - 1];
        return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(s) : n(s)
    }

    function l(s) {
        return s === null ? u(s) : Y(s) ? e.attempt(Xy, l, u)(s) : (e.enter("codeFlowValue"), a(s))
    }

    function a(s) {
        return s === null || Y(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a)
    }

    function u(s) {
        return e.exit("codeIndented"), t(s)
    }
}

function Zy(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return r.parser.lazy[r.now().line] ? n(l) : Y(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : se(e, o, "linePrefix", 5)(l)
    }

    function o(l) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : Y(l) ? i(l) : n(l)
    }
}
const Jy = {
    name: "codeText",
    previous: t2,
    resolve: e2,
    tokenize: n2
};

function e2(e) {
    let t = e.length - 4,
        n = 3,
        r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t;)
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break
            }
    }
    for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function t2(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function n2(e, t, n) {
    let r = 0,
        i, o;
    return l;

    function l(h) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(h)
    }

    function a(h) {
        return h === 96 ? (e.consume(h), r++, a) : (e.exit("codeTextSequence"), u(h))
    }

    function u(h) {
        return h === null ? n(h) : h === 32 ? (e.enter("space"), e.consume(h), e.exit("space"), u) : h === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(h)) : Y(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(h))
    }

    function s(h) {
        return h === null || h === 32 || h === 96 || Y(h) ? (e.exit("codeTextData"), u(h)) : (e.consume(h), s)
    }

    function c(h) {
        return h === 96 ? (e.consume(h), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(h)) : (o.type = "codeTextData", s(h))
    }
}
class r2 {
    constructor(t) {
        this.left = t ? [...t] : [], this.right = []
    }
    get(t) {
        if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0), this.right.pop()
    }
    slice(t, n) {
        const r = n ?? Number.POSITIVE_INFINITY;
        return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse())
    }
    splice(t, n, r) {
        const i = n || 0;
        this.setCursor(Math.trunc(t));
        const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return r && $r(this.left, r), o.reverse()
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
    }
    push(t) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t)
    }
    pushMany(t) {
        this.setCursor(Number.POSITIVE_INFINITY), $r(this.left, t)
    }
    unshift(t) {
        this.setCursor(0), this.right.push(t)
    }
    unshiftMany(t) {
        this.setCursor(0), $r(this.right, t.reverse())
    }
    setCursor(t) {
        if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
            if (t < this.left.length) {
                const n = this.left.splice(t, Number.POSITIVE_INFINITY);
                $r(this.right, n.reverse())
            } else {
                const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
                $r(this.left, n.reverse())
            }
    }
}

function $r(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else
        for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
}

function Rh(e) {
    const t = {};
    let n = -1,
        r, i, o, l, a, u, s;
    const c = new r2(e);
    for (; ++n < c.length;) {
        for (; n in t;) n = t[n];
        if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
            for (; ++o < u.length && u[o][1].type !== "content";) u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, i2(c, n)), n = t[n], s = !0);
        else if (r[1]._container) {
            for (o = n, i = void 0; o-- && (l = c.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank");) l[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
            i && (r[1].end = {
                ...c.get(i)[1].start
            }, a = c.slice(i, n), a.unshift(r), c.splice(i, n - i + 1, a))
        }
    }
    return Lt(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s
}

function i2(e, t) {
    const n = e.get(t)[1],
        r = e.get(t)[2];
    let i = t - 1;
    const o = [],
        l = n._tokenizer || r.parser[n.contentType](n.start),
        a = l.events,
        u = [],
        s = {};
    let c, h, f = -1,
        d = n,
        m = 0,
        y = 0;
    const C = [y];
    for (; d;) {
        for (; e.get(++i)[1] !== d;);
        o.push(i), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), h && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), h = d, d = d.next
    }
    for (d = n; ++f < a.length;) a[f][0] === "exit" && a[f - 1][0] === "enter" && a[f][1].type === a[f - 1][1].type && a[f][1].start.line !== a[f][1].end.line && (y = f + 1, C.push(y), d._tokenizer = void 0, d.previous = void 0, d = d.next);
    for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : C.pop(), f = C.length; f--;) {
        const g = a.slice(C[f], C[f + 1]),
            p = o.pop();
        u.push([p, p + g.length - 1]), e.splice(p, 2, g)
    }
    for (u.reverse(), f = -1; ++f < u.length;) s[m + u[f][0]] = m + u[f][1], m += u[f][1] - u[f][0] - 1;
    return s
}
const o2 = {
        resolve: a2,
        tokenize: u2
    },
    l2 = {
        partial: !0,
        tokenize: s2
    };

function a2(e) {
    return Rh(e), e
}

function u2(e, t) {
    let n;
    return r;

    function r(a) {
        return e.enter("content"), n = e.enter("chunkContent", {
            contentType: "content"
        }), i(a)
    }

    function i(a) {
        return a === null ? o(a) : Y(a) ? e.check(l2, l, o)(a) : (e.consume(a), i)
    }

    function o(a) {
        return e.exit("chunkContent"), e.exit("content"), t(a)
    }

    function l(a) {
        return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        }), n = n.next, i
    }
}

function s2(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), se(e, o, "linePrefix")
    }

    function o(l) {
        if (l === null || Y(l)) return n(l);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l)
    }
}

function Lh(e, t, n, r, i, o, l, a, u) {
    const s = u || Number.POSITIVE_INFINITY;
    let c = 0;
    return h;

    function h(g) {
        return g === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(g), e.exit(o), f) : g === null || g === 32 || g === 41 || Ou(g) ? n(g) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), y(g))
    }

    function f(g) {
        return g === 62 ? (e.enter(o), e.consume(g), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), d(g))
    }

    function d(g) {
        return g === 62 ? (e.exit("chunkString"), e.exit(a), f(g)) : g === null || g === 60 || Y(g) ? n(g) : (e.consume(g), g === 92 ? m : d)
    }

    function m(g) {
        return g === 60 || g === 62 || g === 92 ? (e.consume(g), d) : d(g)
    }

    function y(g) {
        return !c && (g === null || g === 41 || Xe(g)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(g)) : c < s && g === 40 ? (e.consume(g), c++, y) : g === 41 ? (e.consume(g), c--, y) : g === null || g === 32 || g === 40 || Ou(g) ? n(g) : (e.consume(g), g === 92 ? C : y)
    }

    function C(g) {
        return g === 40 || g === 41 || g === 92 ? (e.consume(g), y) : y(g)
    }
}

function Mh(e, t, n, r, i, o) {
    const l = this;
    let a = 0,
        u;
    return s;

    function s(d) {
        return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(o), c
    }

    function c(d) {
        return a > 999 || d === null || d === 91 || d === 93 && !u || d === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(d) : d === 93 ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : Y(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
            contentType: "string"
        }), h(d))
    }

    function h(d) {
        return d === null || d === 91 || d === 93 || Y(d) || a++ > 999 ? (e.exit("chunkString"), c(d)) : (e.consume(d), u || (u = !ie(d)), d === 92 ? f : h)
    }

    function f(d) {
        return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, h) : h(d)
    }
}

function Oh(e, t, n, r, i, o) {
    let l;
    return a;

    function a(f) {
        return f === 34 || f === 39 || f === 40 ? (e.enter(r), e.enter(i), e.consume(f), e.exit(i), l = f === 40 ? 41 : f, u) : n(f)
    }

    function u(f) {
        return f === l ? (e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : (e.enter(o), s(f))
    }

    function s(f) {
        return f === l ? (e.exit(o), u(l)) : f === null ? n(f) : Y(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), se(e, s, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), c(f))
    }

    function c(f) {
        return f === l || f === null || Y(f) ? (e.exit("chunkString"), s(f)) : (e.consume(f), f === 92 ? h : c)
    }

    function h(f) {
        return f === l || f === 92 ? (e.consume(f), c) : c(f)
    }
}

function ai(e, t) {
    let n;
    return r;

    function r(i) {
        return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ie(i) ? se(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}
const c2 = {
        name: "definition",
        tokenize: d2
    },
    f2 = {
        partial: !0,
        tokenize: p2
    };

function d2(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(d) {
        return e.enter("definition"), l(d)
    }

    function l(d) {
        return Mh.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(d)
    }

    function a(d) {
        return i = vr(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), u) : n(d)
    }

    function u(d) {
        return Xe(d) ? ai(e, s)(d) : s(d)
    }

    function s(d) {
        return Lh(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(d)
    }

    function c(d) {
        return e.attempt(f2, h, h)(d)
    }

    function h(d) {
        return ie(d) ? se(e, f, "whitespace")(d) : f(d)
    }

    function f(d) {
        return d === null || Y(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d)
    }
}

function p2(e, t, n) {
    return r;

    function r(a) {
        return Xe(a) ? ai(e, i)(a) : n(a)
    }

    function i(a) {
        return Oh(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a)
    }

    function o(a) {
        return ie(a) ? se(e, l, "whitespace")(a) : l(a)
    }

    function l(a) {
        return a === null || Y(a) ? t(a) : n(a)
    }
}
const h2 = {
    name: "hardBreakEscape",
    tokenize: x2
};

function x2(e, t, n) {
    return r;

    function r(o) {
        return e.enter("hardBreakEscape"), e.consume(o), i
    }

    function i(o) {
        return Y(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o)
    }
}
const g2 = {
    name: "headingAtx",
    resolve: m2,
    tokenize: y2
};

function m2(e, t) {
    let n = e.length - 2,
        r = 3,
        i, o;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[n][1].end
    }, o = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text"
    }, Lt(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e
}

function y2(e, t, n) {
    let r = 0;
    return i;

    function i(c) {
        return e.enter("atxHeading"), o(c)
    }

    function o(c) {
        return e.enter("atxHeadingSequence"), l(c)
    }

    function l(c) {
        return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || Xe(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c)
    }

    function a(c) {
        return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || Y(c) ? (e.exit("atxHeading"), t(c)) : ie(c) ? se(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), s(c))
    }

    function u(c) {
        return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), a(c))
    }

    function s(c) {
        return c === null || c === 35 || Xe(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), s)
    }
}
const v2 = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    Qc = ["pre", "script", "style", "textarea"],
    C2 = {
        concrete: !0,
        name: "htmlFlow",
        resolveTo: k2,
        tokenize: B2
    },
    E2 = {
        partial: !0,
        tokenize: A2
    },
    w2 = {
        partial: !0,
        tokenize: S2
    };

function k2(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function B2(e, t, n) {
    const r = this;
    let i, o, l, a, u;
    return s;

    function s(w) {
        return c(w)
    }

    function c(w) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(w), h
    }

    function h(w) {
        return w === 33 ? (e.consume(w), f) : w === 47 ? (e.consume(w), o = !0, y) : w === 63 ? (e.consume(w), i = 3, r.interrupt ? t : B) : It(w) ? (e.consume(w), l = String.fromCharCode(w), C) : n(w)
    }

    function f(w) {
        return w === 45 ? (e.consume(w), i = 2, d) : w === 91 ? (e.consume(w), i = 5, a = 0, m) : It(w) ? (e.consume(w), i = 4, r.interrupt ? t : B) : n(w)
    }

    function d(w) {
        return w === 45 ? (e.consume(w), r.interrupt ? t : B) : n(w)
    }

    function m(w) {
        const R = "CDATA[";
        return w === R.charCodeAt(a++) ? (e.consume(w), a === R.length ? r.interrupt ? t : _ : m) : n(w)
    }

    function y(w) {
        return It(w) ? (e.consume(w), l = String.fromCharCode(w), C) : n(w)
    }

    function C(w) {
        if (w === null || w === 47 || w === 62 || Xe(w)) {
            const R = w === 47,
                te = l.toLowerCase();
            return !R && !o && Qc.includes(te) ? (i = 1, r.interrupt ? t(w) : _(w)) : v2.includes(l.toLowerCase()) ? (i = 6, R ? (e.consume(w), g) : r.interrupt ? t(w) : _(w)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(w) : o ? p(w) : x(w))
        }
        return w === 45 || ot(w) ? (e.consume(w), l += String.fromCharCode(w), C) : n(w)
    }

    function g(w) {
        return w === 62 ? (e.consume(w), r.interrupt ? t : _) : n(w)
    }

    function p(w) {
        return ie(w) ? (e.consume(w), p) : A(w)
    }

    function x(w) {
        return w === 47 ? (e.consume(w), A) : w === 58 || w === 95 || It(w) ? (e.consume(w), v) : ie(w) ? (e.consume(w), x) : A(w)
    }

    function v(w) {
        return w === 45 || w === 46 || w === 58 || w === 95 || ot(w) ? (e.consume(w), v) : k(w)
    }

    function k(w) {
        return w === 61 ? (e.consume(w), E) : ie(w) ? (e.consume(w), k) : x(w)
    }

    function E(w) {
        return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? n(w) : w === 34 || w === 39 ? (e.consume(w), u = w, S) : ie(w) ? (e.consume(w), E) : D(w)
    }

    function S(w) {
        return w === u ? (e.consume(w), u = null, N) : w === null || Y(w) ? n(w) : (e.consume(w), S)
    }

    function D(w) {
        return w === null || w === 34 || w === 39 || w === 47 || w === 60 || w === 61 || w === 62 || w === 96 || Xe(w) ? k(w) : (e.consume(w), D)
    }

    function N(w) {
        return w === 47 || w === 62 || ie(w) ? x(w) : n(w)
    }

    function A(w) {
        return w === 62 ? (e.consume(w), F) : n(w)
    }

    function F(w) {
        return w === null || Y(w) ? _(w) : ie(w) ? (e.consume(w), F) : n(w)
    }

    function _(w) {
        return w === 45 && i === 2 ? (e.consume(w), W) : w === 60 && i === 1 ? (e.consume(w), Q) : w === 62 && i === 4 ? (e.consume(w), T) : w === 63 && i === 3 ? (e.consume(w), B) : w === 93 && i === 5 ? (e.consume(w), V) : Y(w) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(E2, z, P)(w)) : w === null || Y(w) ? (e.exit("htmlFlowData"), P(w)) : (e.consume(w), _)
    }

    function P(w) {
        return e.check(w2, U, z)(w)
    }

    function U(w) {
        return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), j
    }

    function j(w) {
        return w === null || Y(w) ? P(w) : (e.enter("htmlFlowData"), _(w))
    }

    function W(w) {
        return w === 45 ? (e.consume(w), B) : _(w)
    }

    function Q(w) {
        return w === 47 ? (e.consume(w), l = "", L) : _(w)
    }

    function L(w) {
        if (w === 62) {
            const R = l.toLowerCase();
            return Qc.includes(R) ? (e.consume(w), T) : _(w)
        }
        return It(w) && l.length < 8 ? (e.consume(w), l += String.fromCharCode(w), L) : _(w)
    }

    function V(w) {
        return w === 93 ? (e.consume(w), B) : _(w)
    }

    function B(w) {
        return w === 62 ? (e.consume(w), T) : w === 45 && i === 2 ? (e.consume(w), B) : _(w)
    }

    function T(w) {
        return w === null || Y(w) ? (e.exit("htmlFlowData"), z(w)) : (e.consume(w), T)
    }

    function z(w) {
        return e.exit("htmlFlow"), t(w)
    }
}

function S2(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return Y(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l)
    }

    function o(l) {
        return r.parser.lazy[r.now().line] ? n(l) : t(l)
    }
}

function A2(e, t, n) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(dl, t, n)
    }
}
const D2 = {
    name: "htmlText",
    tokenize: F2
};

function F2(e, t, n) {
    const r = this;
    let i, o, l;
    return a;

    function a(B) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(B), u
    }

    function u(B) {
        return B === 33 ? (e.consume(B), s) : B === 47 ? (e.consume(B), k) : B === 63 ? (e.consume(B), x) : It(B) ? (e.consume(B), D) : n(B)
    }

    function s(B) {
        return B === 45 ? (e.consume(B), c) : B === 91 ? (e.consume(B), o = 0, m) : It(B) ? (e.consume(B), p) : n(B)
    }

    function c(B) {
        return B === 45 ? (e.consume(B), d) : n(B)
    }

    function h(B) {
        return B === null ? n(B) : B === 45 ? (e.consume(B), f) : Y(B) ? (l = h, Q(B)) : (e.consume(B), h)
    }

    function f(B) {
        return B === 45 ? (e.consume(B), d) : h(B)
    }

    function d(B) {
        return B === 62 ? W(B) : B === 45 ? f(B) : h(B)
    }

    function m(B) {
        const T = "CDATA[";
        return B === T.charCodeAt(o++) ? (e.consume(B), o === T.length ? y : m) : n(B)
    }

    function y(B) {
        return B === null ? n(B) : B === 93 ? (e.consume(B), C) : Y(B) ? (l = y, Q(B)) : (e.consume(B), y)
    }

    function C(B) {
        return B === 93 ? (e.consume(B), g) : y(B)
    }

    function g(B) {
        return B === 62 ? W(B) : B === 93 ? (e.consume(B), g) : y(B)
    }

    function p(B) {
        return B === null || B === 62 ? W(B) : Y(B) ? (l = p, Q(B)) : (e.consume(B), p)
    }

    function x(B) {
        return B === null ? n(B) : B === 63 ? (e.consume(B), v) : Y(B) ? (l = x, Q(B)) : (e.consume(B), x)
    }

    function v(B) {
        return B === 62 ? W(B) : x(B)
    }

    function k(B) {
        return It(B) ? (e.consume(B), E) : n(B)
    }

    function E(B) {
        return B === 45 || ot(B) ? (e.consume(B), E) : S(B)
    }

    function S(B) {
        return Y(B) ? (l = S, Q(B)) : ie(B) ? (e.consume(B), S) : W(B)
    }

    function D(B) {
        return B === 45 || ot(B) ? (e.consume(B), D) : B === 47 || B === 62 || Xe(B) ? N(B) : n(B)
    }

    function N(B) {
        return B === 47 ? (e.consume(B), W) : B === 58 || B === 95 || It(B) ? (e.consume(B), A) : Y(B) ? (l = N, Q(B)) : ie(B) ? (e.consume(B), N) : W(B)
    }

    function A(B) {
        return B === 45 || B === 46 || B === 58 || B === 95 || ot(B) ? (e.consume(B), A) : F(B)
    }

    function F(B) {
        return B === 61 ? (e.consume(B), _) : Y(B) ? (l = F, Q(B)) : ie(B) ? (e.consume(B), F) : N(B)
    }

    function _(B) {
        return B === null || B === 60 || B === 61 || B === 62 || B === 96 ? n(B) : B === 34 || B === 39 ? (e.consume(B), i = B, P) : Y(B) ? (l = _, Q(B)) : ie(B) ? (e.consume(B), _) : (e.consume(B), U)
    }

    function P(B) {
        return B === i ? (e.consume(B), i = void 0, j) : B === null ? n(B) : Y(B) ? (l = P, Q(B)) : (e.consume(B), P)
    }

    function U(B) {
        return B === null || B === 34 || B === 39 || B === 60 || B === 61 || B === 96 ? n(B) : B === 47 || B === 62 || Xe(B) ? N(B) : (e.consume(B), U)
    }

    function j(B) {
        return B === 47 || B === 62 || Xe(B) ? N(B) : n(B)
    }

    function W(B) {
        return B === 62 ? (e.consume(B), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(B)
    }

    function Q(B) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(B), e.exit("lineEnding"), L
    }

    function L(B) {
        return ie(B) ? se(e, V, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : V(B)
    }

    function V(B) {
        return e.enter("htmlTextData"), l(B)
    }
}
const es = {
        name: "labelEnd",
        resolveAll: T2,
        resolveTo: z2,
        tokenize: I2
    },
    _2 = {
        tokenize: b2
    },
    N2 = {
        tokenize: R2
    },
    P2 = {
        tokenize: L2
    };

function T2(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length;) {
        const r = e[t][1];
        if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
            const i = r.type === "labelImage" ? 4 : 2;
            r.type = "data", t += i
        }
    }
    return e.length !== n.length && Lt(e, 0, e.length, n), e
}

function z2(e, t) {
    let n = e.length,
        r = 0,
        i, o, l, a;
    for (; n--;)
        if (i = e[n][1], o) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (l) {
        if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (l = n);
    const u = {
            type: e[o][1].type === "labelLink" ? "link" : "image",
            start: {
                ...e[o][1].start
            },
            end: {
                ...e[e.length - 1][1].end
            }
        },
        s = {
            type: "label",
            start: {
                ...e[o][1].start
            },
            end: {
                ...e[l][1].end
            }
        },
        c = {
            type: "labelText",
            start: {
                ...e[o + r + 2][1].end
            },
            end: {
                ...e[l - 2][1].start
            }
        };
    return a = [["enter", u, t], ["enter", s, t]], a = xt(a, e.slice(o + 1, o + r + 3)), a = xt(a, [["enter", c, t]]), a = xt(a, J0(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = xt(a, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]]), a = xt(a, e.slice(l + 1)), a = xt(a, [["exit", u, t]]), Lt(e, o, e.length, a), e
}

function I2(e, t, n) {
    const r = this;
    let i = r.events.length,
        o, l;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            o = r.events[i][1];
            break
        } return a;

    function a(f) {
        return o ? o._inactive ? h(f) : (l = r.parser.defined.includes(vr(r.sliceSerialize({
            start: o.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(f)
    }

    function u(f) {
        return f === 40 ? e.attempt(_2, c, l ? c : h)(f) : f === 91 ? e.attempt(N2, c, l ? s : h)(f) : l ? c(f) : h(f)
    }

    function s(f) {
        return e.attempt(P2, c, h)(f)
    }

    function c(f) {
        return t(f)
    }

    function h(f) {
        return o._balanced = !0, n(f)
    }
}

function b2(e, t, n) {
    return r;

    function r(h) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), i
    }

    function i(h) {
        return Xe(h) ? ai(e, o)(h) : o(h)
    }

    function o(h) {
        return h === 41 ? c(h) : Lh(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(h)
    }

    function l(h) {
        return Xe(h) ? ai(e, u)(h) : c(h)
    }

    function a(h) {
        return n(h)
    }

    function u(h) {
        return h === 34 || h === 39 || h === 40 ? Oh(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(h) : c(h)
    }

    function s(h) {
        return Xe(h) ? ai(e, c)(h) : c(h)
    }

    function c(h) {
        return h === 41 ? (e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), e.exit("resource"), t) : n(h)
    }
}

function R2(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return Mh.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a)
    }

    function o(a) {
        return r.parser.defined.includes(vr(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a)
    }

    function l(a) {
        return n(a)
    }
}

function L2(e, t, n) {
    return r;

    function r(o) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
    }

    function i(o) {
        return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
    }
}
const M2 = {
    name: "labelStartImage",
    resolveAll: es.resolveAll,
    tokenize: O2
};

function O2(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o
    }

    function o(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a)
    }

    function l(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
    }
}
const j2 = {
    name: "labelStartLink",
    resolveAll: es.resolveAll,
    tokenize: H2
};

function H2(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o
    }

    function o(l) {
        return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l)
    }
}
const Yl = {
    name: "lineEnding",
    tokenize: U2
};

function U2(e, t) {
    return n;

    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), se(e, t, "linePrefix")
    }
}
const vo = {
    name: "thematicBreak",
    tokenize: V2
};

function V2(e, t, n) {
    let r = 0,
        i;
    return o;

    function o(s) {
        return e.enter("thematicBreak"), l(s)
    }

    function l(s) {
        return i = s, a(s)
    }

    function a(s) {
        return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || Y(s)) ? (e.exit("thematicBreak"), t(s)) : n(s)
    }

    function u(s) {
        return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), ie(s) ? se(e, a, "whitespace")(s) : a(s))
    }
}
const $e = {
        continuation: {
            tokenize: Q2
        },
        exit: Y2,
        name: "list",
        tokenize: q2
    },
    $2 = {
        partial: !0,
        tokenize: X2
    },
    W2 = {
        partial: !0,
        tokenize: K2
    };

function q2(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        l = 0;
    return a;

    function a(d) {
        const m = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
        if (m === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : ju(d)) {
            if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
                    _container: !0
                })), m === "listUnordered") return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(vo, n, s)(d) : s(d);
            if (!r.interrupt || d === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(d)
        }
        return n(d)
    }

    function u(d) {
        return ju(d) && ++l < 10 ? (e.consume(d), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), s(d)) : n(d)
    }

    function s(d) {
        return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(dl, r.interrupt ? n : c, e.attempt($2, f, h))
    }

    function c(d) {
        return r.containerState.initialBlankLine = !0, o++, f(d)
    }

    function h(d) {
        return ie(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), f) : n(d)
    }

    function f(d) {
        return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d)
    }
}

function Q2(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(dl, i, o);

    function i(a) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, se(e, t, "listItemIndent", r.containerState.size + 1)(a)
    }

    function o(a) {
        return r.containerState.furtherBlankLines || !ie(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(W2, t, l)(a))
    }

    function l(a) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, se(e, e.attempt($e, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
    }
}

function K2(e, t, n) {
    const r = this;
    return se(e, i, "listItemIndent", r.containerState.size + 1);

    function i(o) {
        const l = r.events[r.events.length - 1];
        return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o)
    }
}

function Y2(e) {
    e.exit(this.containerState.type)
}

function X2(e, t, n) {
    const r = this;
    return se(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

    function i(o) {
        const l = r.events[r.events.length - 1];
        return !ie(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
    }
}
const Kc = {
    name: "setextUnderline",
    resolveTo: G2,
    tokenize: Z2
};

function G2(e, t) {
    let n = e.length,
        r, i, o;
    for (; n--;)
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break
            }
            e[n][1].type === "paragraph" && (i = n)
        } else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
    const l = {
        type: "setextHeading",
        start: {
            ...e[i][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
        ...e[o][1].end
    }) : e[r][1] = l, e.push(["exit", l, t]), e
}

function Z2(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(s) {
        let c = r.events.length,
            h;
        for (; c--;)
            if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
                h = r.events[c][1].type === "paragraph";
                break
            } return !r.parser.lazy[r.now().line] && (r.interrupt || h) ? (e.enter("setextHeadingLine"), i = s, l(s)) : n(s)
    }

    function l(s) {
        return e.enter("setextHeadingLineSequence"), a(s)
    }

    function a(s) {
        return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), ie(s) ? se(e, u, "lineSuffix")(s) : u(s))
    }

    function u(s) {
        return s === null || Y(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s)
    }
}
const J2 = {
    tokenize: ev
};

function ev(e) {
    const t = this,
        n = e.attempt(dl, r, e.attempt(this.parser.constructs.flowInitial, i, se(e, e.attempt(this.parser.constructs.flow, i, e.attempt(o2, i)), "linePrefix")));
    return n;

    function r(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
    }

    function i(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
    }
}
const tv = {
        resolveAll: Hh()
    },
    nv = jh("string"),
    rv = jh("text");

function jh(e) {
    return {
        resolveAll: Hh(e === "text" ? iv : void 0),
        tokenize: t
    };

    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            o = n.attempt(i, l, a);
        return l;

        function l(c) {
            return s(c) ? o(c) : a(c)
        }

        function a(c) {
            if (c === null) {
                n.consume(c);
                return
            }
            return n.enter("data"), n.consume(c), u
        }

        function u(c) {
            return s(c) ? (n.exit("data"), o(c)) : (n.consume(c), u)
        }

        function s(c) {
            if (c === null) return !0;
            const h = i[c];
            let f = -1;
            if (h)
                for (; ++f < h.length;) {
                    const d = h[f];
                    if (!d.previous || d.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function Hh(e) {
    return t;

    function t(n, r) {
        let i = -1,
            o;
        for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
        return e ? e(n, r) : n
    }
}

function iv(e, t) {
    let n = 0;
    for (; ++n <= e.length;)
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let o = i.length,
                l = -1,
                a = 0,
                u;
            for (; o--;) {
                const s = i[o];
                if (typeof s == "string") {
                    for (l = s.length; s.charCodeAt(l - 1) === 32;) a++, l--;
                    if (l) break;
                    l = -1
                } else if (s === -2) u = !0, a++;
                else if (s !== -1) {
                    o++;
                    break
                }
            }
            if (a) {
                const s = {
                    type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        _bufferIndex: o ? l : r.start._bufferIndex + l,
                        _index: r.start._index + o,
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a
                    },
                    end: {
                        ...r.end
                    }
                };
                r.end = {
                    ...s.start
                }, r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2)
            }
            n++
        } return e
}
const ov = {
        42: $e,
        43: $e,
        45: $e,
        48: $e,
        49: $e,
        50: $e,
        51: $e,
        52: $e,
        53: $e,
        54: $e,
        55: $e,
        56: $e,
        57: $e,
        62: zh
    },
    lv = {
        91: c2
    },
    av = {
        [-2]: Kl,
        [-1]: Kl,
        32: Kl
    },
    uv = {
        35: g2,
        42: vo,
        45: [Kc, vo],
        60: C2,
        61: Kc,
        95: vo,
        96: qc,
        126: qc
    },
    sv = {
        38: bh,
        92: Ih
    },
    cv = {
        [-5]: Yl,
        [-4]: Yl,
        [-3]: Yl,
        33: M2,
        38: bh,
        42: Hu,
        60: [jy, D2],
        91: j2,
        92: [h2, Ih],
        93: es,
        95: Hu,
        96: Jy
    },
    fv = {
        null: [Hu, tv]
    },
    dv = {
        null: [42, 95]
    },
    pv = {
        null: []
    },
    hv = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: dv,
        contentInitial: lv,
        disable: pv,
        document: ov,
        flow: uv,
        flowInitial: av,
        insideSpan: fv,
        string: sv,
        text: cv
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function xv(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    };
    const i = {},
        o = [];
    let l = [],
        a = [];
    const u = {
            attempt: S(k),
            check: S(E),
            consume: p,
            enter: x,
            exit: v,
            interrupt: S(E, {
                interrupt: !0
            })
        },
        s = {
            code: null,
            containerState: {},
            defineSkip: y,
            events: [],
            now: m,
            parser: e,
            previous: null,
            sliceSerialize: f,
            sliceStream: d,
            write: h
        };
    let c = t.tokenize.call(s, u);
    return t.resolveAll && o.push(t), s;

    function h(F) {
        return l = xt(l, F), C(), l[l.length - 1] !== null ? [] : (D(t, 0), s.events = J0(o, s.events, s), s.events)
    }

    function f(F, _) {
        return mv(d(F), _)
    }

    function d(F) {
        return gv(l, F)
    }

    function m() {
        const {
            _bufferIndex: F,
            _index: _,
            line: P,
            column: U,
            offset: j
        } = r;
        return {
            _bufferIndex: F,
            _index: _,
            line: P,
            column: U,
            offset: j
        }
    }

    function y(F) {
        i[F.line] = F.column, A()
    }

    function C() {
        let F;
        for (; r._index < l.length;) {
            const _ = l[r._index];
            if (typeof _ == "string")
                for (F = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === F && r._bufferIndex < _.length;) g(_.charCodeAt(r._bufferIndex));
            else g(_)
        }
    }

    function g(F) {
        c = c(F)
    }

    function p(F) {
        Y(F) ? (r.line++, r.column = 1, r.offset += F === -3 ? 2 : 1, A()) : F !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = F
    }

    function x(F, _) {
        const P = _ || {};
        return P.type = F, P.start = m(), s.events.push(["enter", P, s]), a.push(P), P
    }

    function v(F) {
        const _ = a.pop();
        return _.end = m(), s.events.push(["exit", _, s]), _
    }

    function k(F, _) {
        D(F, _.from)
    }

    function E(F, _) {
        _.restore()
    }

    function S(F, _) {
        return P;

        function P(U, j, W) {
            let Q, L, V, B;
            return Array.isArray(U) ? z(U) : "tokenize" in U ? z([U]) : T(U);

            function T(q) {
                return ce;

                function ce(K) {
                    const ft = K !== null && q[K],
                        Ge = K !== null && q.null,
                        Yt = [...Array.isArray(ft) ? ft : ft ? [ft] : [], ...Array.isArray(Ge) ? Ge : Ge ? [Ge] : []];
                    return z(Yt)(K)
                }
            }

            function z(q) {
                return Q = q, L = 0, q.length === 0 ? W : w(q[L])
            }

            function w(q) {
                return ce;

                function ce(K) {
                    return B = N(), V = q, q.partial || (s.currentConstruct = q), q.name && s.parser.constructs.disable.null.includes(q.name) ? te() : q.tokenize.call(_ ? Object.assign(Object.create(s), _) : s, u, R, te)(K)
                }
            }

            function R(q) {
                return F(V, B), j
            }

            function te(q) {
                return B.restore(), ++L < Q.length ? w(Q[L]) : W
            }
        }
    }

    function D(F, _) {
        F.resolveAll && !o.includes(F) && o.push(F), F.resolve && Lt(s.events, _, s.events.length - _, F.resolve(s.events.slice(_), s)), F.resolveTo && (s.events = F.resolveTo(s.events, s))
    }

    function N() {
        const F = m(),
            _ = s.previous,
            P = s.currentConstruct,
            U = s.events.length,
            j = Array.from(a);
        return {
            from: U,
            restore: W
        };

        function W() {
            r = F, s.previous = _, s.currentConstruct = P, s.events.length = U, a = j, A()
        }
    }

    function A() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function gv(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        o = t.end._bufferIndex;
    let l;
    if (n === i) l = [e[n].slice(r, o)];
    else {
        if (l = e.slice(n, i), r > -1) {
            const a = l[0];
            typeof a == "string" ? l[0] = a.slice(r) : l.shift()
        }
        o > 0 && l.push(e[i].slice(0, o))
    }
    return l
}

function mv(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length;) {
        const o = e[n];
        let l;
        if (typeof o == "string") l = o;
        else switch (o) {
            case -5: {
                l = "\r";
                break
            }
            case -4: {
                l = `
`;
                break
            }
            case -3: {
                l = `\r
`;
                break
            }
            case -2: {
                l = t ? " " : "	";
                break
            }
            case -1: {
                if (!t && i) continue;
                l = " ";
                break
            }
            default:
                l = String.fromCharCode(o)
        }
        i = o === -2, r.push(l)
    }
    return r.join("")
}

function yv(e) {
    const r = {
        constructs: Sy([hv, ...(e || {}).extensions || []]),
        content: i(zy),
        defined: [],
        document: i(by),
        flow: i(J2),
        lazy: {},
        string: i(nv),
        text: i(rv)
    };
    return r;

    function i(o) {
        return l;

        function l(a) {
            return xv(r, o, a)
        }
    }
}

function vv(e) {
    for (; !Rh(e););
    return e
}
const Yc = /[\0\t\n\r]/g;

function Cv() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;

    function i(o, l, a) {
        const u = [];
        let s, c, h, f, d;
        for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), h = 0, t = "", n && (o.charCodeAt(0) === 65279 && h++, n = void 0); h < o.length;) {
            if (Yc.lastIndex = h, s = Yc.exec(o), f = s && s.index !== void 0 ? s.index : o.length, d = o.charCodeAt(f), !s) {
                t = o.slice(h);
                break
            }
            if (d === 10 && h === f && r) u.push(-3), r = void 0;
            else switch (r && (u.push(-5), r = void 0), h < f && (u.push(o.slice(h, f)), e += f - h), d) {
                case 0: {
                    u.push(65533), e++;
                    break
                }
                case 9: {
                    for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c;) u.push(-1);
                    break
                }
                case 10: {
                    u.push(-4), e = 1;
                    break
                }
                default:
                    r = !0, e = 1
            }
            h = f + 1
        }
        return a && (r && u.push(-5), t && u.push(t), u.push(null)), u
    }
}
const Ev = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function wv(e) {
    return e.replace(Ev, kv)
}

function kv(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            o = i === 120 || i === 88;
        return Th(n.slice(o ? 2 : 1), o ? 16 : 10)
    }
    return Z0(n) || e
}
const Uh = {}.hasOwnProperty;

function Bv(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), Sv(n)(vv(yv(n).document().write(Cv()(e, t, !0))))
}

function Sv(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: o(Xn),
            autolinkProtocol: N,
            autolinkEmail: N,
            atxHeading: o(_n),
            blockQuote: o(Ge),
            characterEscape: N,
            characterReference: N,
            codeFenced: o(Yt),
            codeFencedFenceInfo: l,
            codeFencedFenceMeta: l,
            codeIndented: o(Yt, l),
            codeText: o(Fn, l),
            codeTextData: N,
            data: N,
            codeFlowValue: N,
            definition: o(Ze),
            definitionDestinationString: l,
            definitionLabelString: l,
            definitionTitleString: l,
            emphasis: o(Re),
            hardBreakEscape: o(Xt),
            hardBreakTrailing: o(Xt),
            htmlFlow: o(Nn, l),
            htmlFlowData: N,
            htmlText: o(Nn, l),
            htmlTextData: N,
            image: o(Pn),
            label: l,
            link: o(Xn),
            listItem: o(Je),
            listItemValue: f,
            listOrdered: o(Gt, h),
            listUnordered: o(Gt),
            paragraph: o(Ve),
            reference: w,
            referenceString: l,
            resourceDestinationString: l,
            resourceTitleString: l,
            setextHeading: o(_n),
            strong: o(_t),
            thematicBreak: o(Li)
        },
        exit: {
            atxHeading: u(),
            atxHeadingSequence: k,
            autolink: u(),
            autolinkEmail: ft,
            autolinkProtocol: K,
            blockQuote: u(),
            characterEscapeValue: A,
            characterReferenceMarkerHexadecimal: te,
            characterReferenceMarkerNumeric: te,
            characterReferenceValue: q,
            characterReference: ce,
            codeFenced: u(C),
            codeFencedFence: y,
            codeFencedFenceInfo: d,
            codeFencedFenceMeta: m,
            codeFlowValue: A,
            codeIndented: u(g),
            codeText: u(j),
            codeTextData: A,
            data: A,
            definition: u(),
            definitionDestinationString: v,
            definitionLabelString: p,
            definitionTitleString: x,
            emphasis: u(),
            hardBreakEscape: u(_),
            hardBreakTrailing: u(_),
            htmlFlow: u(P),
            htmlFlowData: A,
            htmlText: u(U),
            htmlTextData: A,
            image: u(Q),
            label: V,
            labelText: L,
            lineEnding: F,
            link: u(W),
            listItem: u(),
            listOrdered: u(),
            listUnordered: u(),
            paragraph: u(),
            referenceString: R,
            resourceDestinationString: B,
            resourceTitleString: T,
            resource: z,
            setextHeading: u(D),
            setextHeadingLineSequence: S,
            setextHeadingText: E,
            strong: u(),
            thematicBreak: u()
        }
    };
    Vh(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;

    function r(I) {
        let H = {
            type: "root",
            children: []
        };
        const X = {
                stack: [H],
                tokenStack: [],
                config: t,
                enter: a,
                exit: s,
                buffer: l,
                resume: c,
                data: n
            },
            J = [];
        let oe = -1;
        for (; ++oe < I.length;)
            if (I[oe][1].type === "listOrdered" || I[oe][1].type === "listUnordered")
                if (I[oe][0] === "enter") J.push(oe);
                else {
                    const Be = J.pop();
                    oe = i(I, Be, oe)
                } for (oe = -1; ++oe < I.length;) {
            const Be = t[I[oe][0]];
            Uh.call(Be, I[oe][1].type) && Be[I[oe][1].type].call(Object.assign({
                sliceSerialize: I[oe][2].sliceSerialize
            }, X), I[oe][1])
        }
        if (X.tokenStack.length > 0) {
            const Be = X.tokenStack[X.tokenStack.length - 1];
            (Be[1] || Xc).call(X, void 0, Be[0])
        }
        for (H.position = {
                start: rn(I.length > 0 ? I[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: rn(I.length > 0 ? I[I.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, oe = -1; ++oe < t.transforms.length;) H = t.transforms[oe](H) || H;
        return H
    }

    function i(I, H, X) {
        let J = H - 1,
            oe = -1,
            Be = !1,
            et, Et, Zt, Jt;
        for (; ++J <= X;) {
            const Le = I[J];
            switch (Le[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote": {
                    Le[0] === "enter" ? oe++ : oe--, Jt = void 0;
                    break
                }
                case "lineEndingBlank": {
                    Le[0] === "enter" && (et && !Jt && !oe && !Zt && (Zt = J), Jt = void 0);
                    break
                }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    Jt = void 0
            }
            if (!oe && Le[0] === "enter" && Le[1].type === "listItemPrefix" || oe === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
                if (et) {
                    let en = J;
                    for (Et = void 0; en--;) {
                        const dt = I[en];
                        if (dt[1].type === "lineEnding" || dt[1].type === "lineEndingBlank") {
                            if (dt[0] === "exit") continue;
                            Et && (I[Et][1].type = "lineEndingBlank", Be = !0), dt[1].type = "lineEnding", Et = en
                        } else if (!(dt[1].type === "linePrefix" || dt[1].type === "blockQuotePrefix" || dt[1].type === "blockQuotePrefixWhitespace" || dt[1].type === "blockQuoteMarker" || dt[1].type === "listItemIndent")) break
                    }
                    Zt && (!Et || Zt < Et) && (et._spread = !0), et.end = Object.assign({}, Et ? I[Et][1].start : Le[1].end), I.splice(Et || J, 0, ["exit", et, Le[2]]), J++, X++
                }
                if (Le[1].type === "listItemPrefix") {
                    const en = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, Le[1].start),
                        end: void 0
                    };
                    et = en, I.splice(J, 0, ["enter", en, Le[2]]), J++, X++, Zt = void 0, Jt = !0
                }
            }
        }
        return I[H][1]._spread = Be, X
    }

    function o(I, H) {
        return X;

        function X(J) {
            a.call(this, I(J), J), H && H.call(this, J)
        }
    }

    function l() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function a(I, H, X) {
        this.stack[this.stack.length - 1].children.push(I), this.stack.push(I), this.tokenStack.push([H, X || void 0]), I.position = {
            start: rn(H.start),
            end: void 0
        }
    }

    function u(I) {
        return H;

        function H(X) {
            I && I.call(this, X), s.call(this, X)
        }
    }

    function s(I, H) {
        const X = this.stack.pop(),
            J = this.tokenStack.pop();
        if (J) J[0].type !== I.type && (H ? H.call(this, I, J[0]) : (J[1] || Xc).call(this, I, J[0]));
        else throw new Error("Cannot close `" + I.type + "` (" + li({
            start: I.start,
            end: I.end
        }) + "): it’s not open");
        X.position.end = rn(I.end)
    }

    function c() {
        return ky(this.stack.pop())
    }

    function h() {
        this.data.expectingFirstListItemValue = !0
    }

    function f(I) {
        if (this.data.expectingFirstListItemValue) {
            const H = this.stack[this.stack.length - 2];
            H.start = Number.parseInt(this.sliceSerialize(I), 10), this.data.expectingFirstListItemValue = void 0
        }
    }

    function d() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.lang = I
    }

    function m() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.meta = I
    }

    function y() {
        this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
    }

    function C() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.value = I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
    }

    function g() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.value = I.replace(/(\r?\n|\r)$/g, "")
    }

    function p(I) {
        const H = this.resume(),
            X = this.stack[this.stack.length - 1];
        X.label = H, X.identifier = vr(this.sliceSerialize(I)).toLowerCase()
    }

    function x() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.title = I
    }

    function v() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.url = I
    }

    function k(I) {
        const H = this.stack[this.stack.length - 1];
        if (!H.depth) {
            const X = this.sliceSerialize(I).length;
            H.depth = X
        }
    }

    function E() {
        this.data.setextHeadingSlurpLineEnding = !0
    }

    function S(I) {
        const H = this.stack[this.stack.length - 1];
        H.depth = this.sliceSerialize(I).codePointAt(0) === 61 ? 1 : 2
    }

    function D() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }

    function N(I) {
        const X = this.stack[this.stack.length - 1].children;
        let J = X[X.length - 1];
        (!J || J.type !== "text") && (J = Gn(), J.position = {
            start: rn(I.start),
            end: void 0
        }, X.push(J)), this.stack.push(J)
    }

    function A(I) {
        const H = this.stack.pop();
        H.value += this.sliceSerialize(I), H.position.end = rn(I.end)
    }

    function F(I) {
        const H = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const X = H.children[H.children.length - 1];
            X.position.end = rn(I.end), this.data.atHardBreak = void 0;
            return
        }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(H.type) && (N.call(this, I), A.call(this, I))
    }

    function _() {
        this.data.atHardBreak = !0
    }

    function P() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.value = I
    }

    function U() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.value = I
    }

    function j() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.value = I
    }

    function W() {
        const I = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const H = this.data.referenceType || "shortcut";
            I.type += "Reference", I.referenceType = H, delete I.url, delete I.title
        } else delete I.identifier, delete I.label;
        this.data.referenceType = void 0
    }

    function Q() {
        const I = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const H = this.data.referenceType || "shortcut";
            I.type += "Reference", I.referenceType = H, delete I.url, delete I.title
        } else delete I.identifier, delete I.label;
        this.data.referenceType = void 0
    }

    function L(I) {
        const H = this.sliceSerialize(I),
            X = this.stack[this.stack.length - 2];
        X.label = wv(H), X.identifier = vr(H).toLowerCase()
    }

    function V() {
        const I = this.stack[this.stack.length - 1],
            H = this.resume(),
            X = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0, X.type === "link") {
            const J = I.children;
            X.children = J
        } else X.alt = H
    }

    function B() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.url = I
    }

    function T() {
        const I = this.resume(),
            H = this.stack[this.stack.length - 1];
        H.title = I
    }

    function z() {
        this.data.inReference = void 0
    }

    function w() {
        this.data.referenceType = "collapsed"
    }

    function R(I) {
        const H = this.resume(),
            X = this.stack[this.stack.length - 1];
        X.label = H, X.identifier = vr(this.sliceSerialize(I)).toLowerCase(), this.data.referenceType = "full"
    }

    function te(I) {
        this.data.characterReferenceType = I.type
    }

    function q(I) {
        const H = this.sliceSerialize(I),
            X = this.data.characterReferenceType;
        let J;
        X ? (J = Th(H, X === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : J = Z0(H);
        const oe = this.stack[this.stack.length - 1];
        oe.value += J
    }

    function ce(I) {
        const H = this.stack.pop();
        H.position.end = rn(I.end)
    }

    function K(I) {
        A.call(this, I);
        const H = this.stack[this.stack.length - 1];
        H.url = this.sliceSerialize(I)
    }

    function ft(I) {
        A.call(this, I);
        const H = this.stack[this.stack.length - 1];
        H.url = "mailto:" + this.sliceSerialize(I)
    }

    function Ge() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function Yt() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function Fn() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function Ze() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function Re() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function _n() {
        return {
            type: "heading",
            depth: 0,
            children: []
        }
    }

    function Xt() {
        return {
            type: "break"
        }
    }

    function Nn() {
        return {
            type: "html",
            value: ""
        }
    }

    function Pn() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function Xn() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Gt(I) {
        return {
            type: "list",
            ordered: I.type === "listOrdered",
            start: null,
            spread: I._spread,
            children: []
        }
    }

    function Je(I) {
        return {
            type: "listItem",
            spread: I._spread,
            checked: null,
            children: []
        }
    }

    function Ve() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function _t() {
        return {
            type: "strong",
            children: []
        }
    }

    function Gn() {
        return {
            type: "text",
            value: ""
        }
    }

    function Li() {
        return {
            type: "thematicBreak"
        }
    }
}

function rn(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function Vh(e, t) {
    let n = -1;
    for (; ++n < t.length;) {
        const r = t[n];
        Array.isArray(r) ? Vh(e, r) : Av(e, r)
    }
}

function Av(e, t) {
    let n;
    for (n in t)
        if (Uh.call(t, n)) switch (n) {
            case "canContainEols": {
                const r = t[n];
                r && e[n].push(...r);
                break
            }
            case "transforms": {
                const r = t[n];
                r && e[n].push(...r);
                break
            }
            case "enter":
            case "exit": {
                const r = t[n];
                r && Object.assign(e[n], r);
                break
            }
        }
}

function Xc(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + li({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + li({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + li({
        start: t.start,
        end: t.end
    }) + ") is still open")
}

function Dv(e) {
    const t = this;
    t.parser = n;

    function n(r) {
        return Bv(r, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || []
        })
    }
}

function Fv(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function _v(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(t, n), [e.applyData(t, n), {
        type: "text",
        value: `
`
    }]
}

function Nv(e, t) {
    const n = t.value ? t.value + `
` : "",
        r = {};
    t.lang && (r.className = ["language-" + t.lang]);
    let i = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
            type: "text",
            value: n
        }]
    };
    return t.meta && (i.data = {
        meta: t.meta
    }), e.patch(t, i), i = e.applyData(t, i), i = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [i]
    }, e.patch(t, i), i
}

function Pv(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Tv(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function zv(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        r = String(t.identifier).toUpperCase(),
        i = br(r.toLowerCase()),
        o = e.footnoteOrder.indexOf(r);
    let l, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
    const u = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + n + "fn-" + i,
            id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"]
        },
        children: [{
            type: "text",
            value: String(l)
        }]
    };
    e.patch(t, u);
    const s = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [u]
    };
    return e.patch(t, s), e.applyData(t, s)
}

function Iv(e, t) {
    const n = {
        type: "element",
        tagName: "h" + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function bv(e, t) {
    if (e.options.allowDangerousHtml) {
        const n = {
            type: "raw",
            value: t.value
        };
        return e.patch(t, n), e.applyData(t, n)
    }
}

function $h(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
        type: "text",
        value: "![" + t.alt + r
    }];
    const i = e.all(t),
        o = i[0];
    o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
        type: "text",
        value: "["
    });
    const l = i[i.length - 1];
    return l && l.type === "text" ? l.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function Rv(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return $h(e, t);
    const i = {
        src: br(r.url || ""),
        alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
    };
    return e.patch(t, o), e.applyData(t, o)
}

function Lv(e, t) {
    const n = {
        src: br(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    return e.patch(t, r), e.applyData(t, r)
}

function Mv(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [n]
    };
    return e.patch(t, r), e.applyData(t, r)
}

function Ov(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return $h(e, t);
    const i = {
        href: br(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "a",
        properties: i,
        children: e.all(t)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function jv(e, t) {
    const n = {
        href: br(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r)
}

function Hv(e, t, n) {
    const r = e.all(t),
        i = n ? Uv(n) : Wh(t),
        o = {},
        l = [];
    if (typeof t.checked == "boolean") {
        const c = r[0];
        let h;
        c && c.type === "element" && c.tagName === "p" ? h = c : (h = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(h)), h.children.length > 0 && h.children.unshift({
            type: "text",
            value: " "
        }), h.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            },
            children: []
        }), o.className = ["task-list-item"]
    }
    let a = -1;
    for (; ++a < r.length;) {
        const c = r[a];
        (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({
            type: "text",
            value: `
`
        }), c.type === "element" && c.tagName === "p" && !i ? l.push(...c.children) : l.push(c)
    }
    const u = r[r.length - 1];
    u && (i || u.type !== "element" || u.tagName !== "p") && l.push({
        type: "text",
        value: `
`
    });
    const s = {
        type: "element",
        tagName: "li",
        properties: o,
        children: l
    };
    return e.patch(t, s), e.applyData(t, s)
}

function Uv(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length;) t = Wh(n[r])
    }
    return t
}

function Wh(e) {
    const t = e.spread;
    return t ?? e.children.length > 1
}

function Vv(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
        const l = r[i];
        if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    const o = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function $v(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Wv(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function qv(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Qv(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const l = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], l), i.push(l)
    }
    if (n.length > 0) {
        const l = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0)
            },
            a = K0(t.children[1]),
            u = Sh(t.children[t.children.length - 1]);
        a && u && (l.position = {
            start: a,
            end: u
        }), i.push(l)
    }
    const o = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function Kv(e, t, n) {
    const r = n ? n.children : void 0,
        o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        l = n && n.type === "table" ? n.align : void 0,
        a = l ? l.length : t.children.length;
    let u = -1;
    const s = [];
    for (; ++u < a;) {
        const h = t.children[u],
            f = {},
            d = l ? l[u] : void 0;
        d && (f.align = d);
        let m = {
            type: "element",
            tagName: o,
            properties: f,
            children: []
        };
        h && (m.children = e.all(h), e.patch(h, m), m = e.applyData(h, m)), s.push(m)
    }
    const c = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(s, !0)
    };
    return e.patch(t, c), e.applyData(t, c)
}

function Yv(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const Gc = 9,
    Zc = 32;

function Xv(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const o = [];
    for (; r;) o.push(Jc(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return o.push(Jc(t.slice(i), i > 0, !1)), o.join("")
}

function Jc(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let o = e.codePointAt(r);
        for (; o === Gc || o === Zc;) r++, o = e.codePointAt(r)
    }
    if (n) {
        let o = e.codePointAt(i - 1);
        for (; o === Gc || o === Zc;) i--, o = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function Gv(e, t) {
    const n = {
        type: "text",
        value: Xv(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Zv(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(t, n), e.applyData(t, n)
}
const Jv = {
    blockquote: Fv,
    break: _v,
    code: Nv,
    delete: Pv,
    emphasis: Tv,
    footnoteReference: zv,
    heading: Iv,
    html: bv,
    imageReference: Rv,
    image: Lv,
    inlineCode: Mv,
    linkReference: Ov,
    link: jv,
    listItem: Hv,
    list: Vv,
    paragraph: $v,
    root: Wv,
    strong: qv,
    table: Qv,
    tableCell: Yv,
    tableRow: Kv,
    text: Gv,
    thematicBreak: Zv,
    toml: to,
    yaml: to,
    definition: to,
    footnoteDefinition: to
};

function to() {}
const qh = -1,
    pl = 0,
    Wo = 1,
    qo = 2,
    ts = 3,
    ns = 4,
    rs = 5,
    is = 6,
    Qh = 7,
    Kh = 8,
    ef = typeof self == "object" ? self : globalThis,
    e4 = (e, t) => {
        const n = (i, o) => (e.set(o, i), i),
            r = i => {
                if (e.has(i)) return e.get(i);
                const [o, l] = t[i];
                switch (o) {
                    case pl:
                    case qh:
                        return n(l, i);
                    case Wo: {
                        const a = n([], i);
                        for (const u of l) a.push(r(u));
                        return a
                    }
                    case qo: {
                        const a = n({}, i);
                        for (const [u, s] of l) a[r(u)] = r(s);
                        return a
                    }
                    case ts:
                        return n(new Date(l), i);
                    case ns: {
                        const {
                            source: a,
                            flags: u
                        } = l;
                        return n(new RegExp(a, u), i)
                    }
                    case rs: {
                        const a = n(new Map, i);
                        for (const [u, s] of l) a.set(r(u), r(s));
                        return a
                    }
                    case is: {
                        const a = n(new Set, i);
                        for (const u of l) a.add(r(u));
                        return a
                    }
                    case Qh: {
                        const {
                            name: a,
                            message: u
                        } = l;
                        return n(new ef[a](u), i)
                    }
                    case Kh:
                        return n(BigInt(l), i);
                    case "BigInt":
                        return n(Object(BigInt(l)), i)
                }
                return n(new ef[o](l), i)
            };
        return r
    },
    tf = e => e4(new Map, e)(0),
    Jn = "",
    {
        toString: t4
    } = {},
    {
        keys: n4
    } = Object,
    Wr = e => {
        const t = typeof e;
        if (t !== "object" || !e) return [pl, t];
        const n = t4.call(e).slice(8, -1);
        switch (n) {
            case "Array":
                return [Wo, Jn];
            case "Object":
                return [qo, Jn];
            case "Date":
                return [ts, Jn];
            case "RegExp":
                return [ns, Jn];
            case "Map":
                return [rs, Jn];
            case "Set":
                return [is, Jn]
        }
        return n.includes("Array") ? [Wo, n] : n.includes("Error") ? [Qh, n] : [qo, n]
    },
    no = ([e, t]) => e === pl && (t === "function" || t === "symbol"),
    r4 = (e, t, n, r) => {
        const i = (l, a) => {
                const u = r.push(l) - 1;
                return n.set(a, u), u
            },
            o = l => {
                if (n.has(l)) return n.get(l);
                let [a, u] = Wr(l);
                switch (a) {
                    case pl: {
                        let c = l;
                        switch (u) {
                            case "bigint":
                                a = Kh, c = l.toString();
                                break;
                            case "function":
                            case "symbol":
                                if (e) throw new TypeError("unable to serialize " + u);
                                c = null;
                                break;
                            case "undefined":
                                return i([qh], l)
                        }
                        return i([a, c], l)
                    }
                    case Wo: {
                        if (u) return i([u, [...l]], l);
                        const c = [],
                            h = i([a, c], l);
                        for (const f of l) c.push(o(f));
                        return h
                    }
                    case qo: {
                        if (u) switch (u) {
                            case "BigInt":
                                return i([u, l.toString()], l);
                            case "Boolean":
                            case "Number":
                            case "String":
                                return i([u, l.valueOf()], l)
                        }
                        if (t && "toJSON" in l) return o(l.toJSON());
                        const c = [],
                            h = i([a, c], l);
                        for (const f of n4(l))(e || !no(Wr(l[f]))) && c.push([o(f), o(l[f])]);
                        return h
                    }
                    case ts:
                        return i([a, l.toISOString()], l);
                    case ns: {
                        const {
                            source: c,
                            flags: h
                        } = l;
                        return i([a, {
                            source: c,
                            flags: h
                        }], l)
                    }
                    case rs: {
                        const c = [],
                            h = i([a, c], l);
                        for (const [f, d] of l)(e || !(no(Wr(f)) || no(Wr(d)))) && c.push([o(f), o(d)]);
                        return h
                    }
                    case is: {
                        const c = [],
                            h = i([a, c], l);
                        for (const f of l)(e || !no(Wr(f))) && c.push(o(f));
                        return h
                    }
                }
                const {
                    message: s
                } = l;
                return i([a, {
                    name: u,
                    message: s
                }], l)
            };
        return o
    },
    nf = (e, {
        json: t,
        lossy: n
    } = {}) => {
        const r = [];
        return r4(!(t || n), !!t, new Map, r)(e), r
    },
    Qo = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? tf(nf(e, t)) : structuredClone(e) : (e, t) => tf(nf(e, t));

function i4(e, t) {
    const n = [{
        type: "text",
        value: "↩"
    }];
    return t > 1 && n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
            type: "text",
            value: String(t)
        }]
    }), n
}

function o4(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
}

function l4(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        n = e.options.footnoteBackContent || i4,
        r = e.options.footnoteBackLabel || o4,
        i = e.options.footnoteLabel || "Footnotes",
        o = e.options.footnoteLabelTagName || "h2",
        l = e.options.footnoteLabelProperties || {
            className: ["sr-only"]
        },
        a = [];
    let u = -1;
    for (; ++u < e.footnoteOrder.length;) {
        const s = e.footnoteById.get(e.footnoteOrder[u]);
        if (!s) continue;
        const c = e.all(s),
            h = String(s.identifier).toUpperCase(),
            f = br(h.toLowerCase());
        let d = 0;
        const m = [],
            y = e.footnoteCounts.get(h);
        for (; y !== void 0 && ++d <= y;) {
            m.length > 0 && m.push({
                type: "text",
                value: " "
            });
            let p = typeof n == "string" ? n : n(u, d);
            typeof p == "string" && (p = {
                type: "text",
                value: p
            }), m.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + t + "fnref-" + f + (d > 1 ? "-" + d : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof r == "string" ? r : r(u, d),
                    className: ["data-footnote-backref"]
                },
                children: Array.isArray(p) ? p : [p]
            })
        }
        const C = c[c.length - 1];
        if (C && C.type === "element" && C.tagName === "p") {
            const p = C.children[C.children.length - 1];
            p && p.type === "text" ? p.value += " " : C.children.push({
                type: "text",
                value: " "
            }), C.children.push(...m)
        } else c.push(...m);
        const g = {
            type: "element",
            tagName: "li",
            properties: {
                id: t + "fn-" + f
            },
            children: e.wrap(c, !0)
        };
        e.patch(s, g), a.push(g)
    }
    if (a.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: o,
            properties: {
                ...Qo(l),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: i
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(a, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}
const Yh = function (e) {
    if (e == null) return c4;
    if (typeof e == "function") return hl(e);
    if (typeof e == "object") return Array.isArray(e) ? a4(e) : u4(e);
    if (typeof e == "string") return s4(e);
    throw new Error("Expected function, string, or object as test")
};

function a4(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length;) t[n] = Yh(e[n]);
    return hl(r);

    function r(...i) {
        let o = -1;
        for (; ++o < t.length;)
            if (t[o].apply(this, i)) return !0;
        return !1
    }
}

function u4(e) {
    const t = e;
    return hl(n);

    function n(r) {
        const i = r;
        let o;
        for (o in e)
            if (i[o] !== t[o]) return !1;
        return !0
    }
}

function s4(e) {
    return hl(t);

    function t(n) {
        return n && n.type === e
    }
}

function hl(e) {
    return t;

    function t(n, r, i) {
        return !!(f4(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0))
    }
}

function c4() {
    return !0
}

function f4(e) {
    return e !== null && typeof e == "object" && "type" in e
}
const Xh = [],
    d4 = !0,
    rf = !1,
    p4 = "skip";

function h4(e, t, n, r) {
    let i;
    typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
    const o = Yh(i),
        l = r ? -1 : 1;
    a(e, void 0, [])();

    function a(u, s, c) {
        const h = u && typeof u == "object" ? u : {};
        if (typeof h.type == "string") {
            const d = typeof h.tagName == "string" ? h.tagName : typeof h.name == "string" ? h.name : void 0;
            Object.defineProperty(f, "name", {
                value: "node (" + (u.type + (d ? "<" + d + ">" : "")) + ")"
            })
        }
        return f;

        function f() {
            let d = Xh,
                m, y, C;
            if ((!t || o(u, s, c[c.length - 1] || void 0)) && (d = x4(n(u, c)), d[0] === rf)) return d;
            if ("children" in u && u.children) {
                const g = u;
                if (g.children && d[0] !== p4)
                    for (y = (r ? g.children.length : -1) + l, C = c.concat(g); y > -1 && y < g.children.length;) {
                        const p = g.children[y];
                        if (m = a(p, y, C)(), m[0] === rf) return m;
                        y = typeof m[1] == "number" ? m[1] : y + l
                    }
            }
            return d
        }
    }
}

function x4(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [d4, e] : e == null ? Xh : [e]
}

function Gh(e, t, n, r) {
    let i, o, l;
    typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), h4(e, o, a, i);

    function a(u, s) {
        const c = s[s.length - 1],
            h = c ? c.children.indexOf(u) : void 0;
        return l(u, h, c)
    }
}
const Uu = {}.hasOwnProperty,
    g4 = {};

function m4(e, t) {
    const n = t || g4,
        r = new Map,
        i = new Map,
        o = new Map,
        l = {
            ...Jv,
            ...n.handlers
        },
        a = {
            all: s,
            applyData: v4,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: o,
            footnoteOrder: [],
            handlers: l,
            one: u,
            options: n,
            patch: y4,
            wrap: E4
        };
    return Gh(e, function (c) {
        if (c.type === "definition" || c.type === "footnoteDefinition") {
            const h = c.type === "definition" ? r : i,
                f = String(c.identifier).toUpperCase();
            h.has(f) || h.set(f, c)
        }
    }), a;

    function u(c, h) {
        const f = c.type,
            d = a.handlers[f];
        if (Uu.call(a.handlers, f) && d) return d(a, c, h);
        if (a.options.passThrough && a.options.passThrough.includes(f)) {
            if ("children" in c) {
                const {
                    children: y,
                    ...C
                } = c, g = Qo(C);
                return g.children = a.all(c), g
            }
            return Qo(c)
        }
        return (a.options.unknownHandler || C4)(a, c, h)
    }

    function s(c) {
        const h = [];
        if ("children" in c) {
            const f = c.children;
            let d = -1;
            for (; ++d < f.length;) {
                const m = a.one(f[d], c);
                if (m) {
                    if (d && f[d - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = of (m.value)), !Array.isArray(m) && m.type === "element")) {
                        const y = m.children[0];
                        y && y.type === "text" && (y.value = of (y.value))
                    }
                    Array.isArray(m) ? h.push(...m) : h.push(m)
                }
            }
        }
        return h
    }
}

function y4(e, t) {
    e.position && (t.position = Jm(e))
}

function v4(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            o = e.data.hProperties;
        if (typeof r == "string")
            if (n.type === "element") n.tagName = r;
            else {
                const l = "children" in n ? n.children : [n];
                n = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children: l
                }
            } n.type === "element" && o && Object.assign(n.properties, Qo(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
    }
    return n
}

function C4(e, t) {
    const n = t.data || {},
        r = "value" in t && !(Uu.call(n, "hProperties") || Uu.call(n, "hChildren")) ? {
            type: "text",
            value: t.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t)
        };
    return e.patch(t, r), e.applyData(t, r)
}

function E4(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && n.push({
        type: "text",
        value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: "text",
        value: `
`
    }), n
}

function of (e) {
    let t = 0,
        n = e.charCodeAt(t);
    for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
    return e.slice(t)
}

function lf(e, t) {
    const n = m4(e, t),
        r = n.one(e, void 0),
        i = l4(n),
        o = Array.isArray(r) ? {
            type: "root",
            children: r
        } : r || {
            type: "root",
            children: []
        };
    return i && o.children.push({
        type: "text",
        value: `
`
    }, i), o
}

function w4(e, t) {
    return e && "run" in e ? async function (n, r) {
        const i = lf(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    }: function (n, r) {
        return lf(n, {
            file: r,
            ...e || t
        })
    }
}

function af(e) {
    if (e) throw e
}
var Co = Object.prototype.hasOwnProperty,
    Zh = Object.prototype.toString,
    uf = Object.defineProperty,
    sf = Object.getOwnPropertyDescriptor,
    cf = function (t) {
        return typeof Array.isArray == "function" ? Array.isArray(t) : Zh.call(t) === "[object Array]"
    },
    ff = function (t) {
        if (!t || Zh.call(t) !== "[object Object]") return !1;
        var n = Co.call(t, "constructor"),
            r = t.constructor && t.constructor.prototype && Co.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || Co.call(t, i)
    },
    df = function (t, n) {
        uf && n.name === "__proto__" ? uf(t, n.name, {
            enumerable: !0,
            configurable: !0,
            value: n.newValue,
            writable: !0
        }) : t[n.name] = n.newValue
    },
    pf = function (t, n) {
        if (n === "__proto__")
            if (Co.call(t, n)) {
                if (sf) return sf(t, n).value
            } else return;
        return t[n]
    },
    k4 = function e() {
        var t, n, r, i, o, l, a = arguments[0],
            u = 1,
            s = arguments.length,
            c = !1;
        for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, u = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); u < s; ++u)
            if (t = arguments[u], t != null)
                for (n in t) r = pf(a, n), i = pf(t, n), a !== i && (c && i && (ff(i) || (o = cf(i))) ? (o ? (o = !1, l = r && cf(r) ? r : []) : l = r && ff(r) ? r : {}, df(a, {
                    name: n,
                    newValue: e(c, l, i)
                })) : typeof i < "u" && df(a, {
                    name: n,
                    newValue: i
                }));
        return a
    };
const Xl = Xu(k4);

function Vu(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function B4() {
    const e = [],
        t = {
            run: n,
            use: r
        };
    return t;

    function n(...i) {
        let o = -1;
        const l = i.pop();
        if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
        a(null, ...i);

        function a(u, ...s) {
            const c = e[++o];
            let h = -1;
            if (u) {
                l(u);
                return
            }
            for (; ++h < i.length;)(s[h] === null || s[h] === void 0) && (s[h] = i[h]);
            i = s, c ? S4(c, a)(...s) : l(null, ...s)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t
    }
}

function S4(e, t) {
    let n;
    return r;

    function r(...l) {
        const a = e.length > l.length;
        let u;
        a && l.push(i);
        try {
            u = e.apply(this, l)
        } catch (s) {
            const c = s;
            if (a && n) throw c;
            return i(c)
        }
        a || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u))
    }

    function i(l, ...a) {
        n || (n = !0, t(l, ...a))
    }

    function o(l) {
        i(null, l)
    }
}
const Tt = {
    basename: A4,
    dirname: D4,
    extname: F4,
    join: _4,
    sep: "/"
};

function A4(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Ii(e);
    let n = 0,
        r = -1,
        i = e.length,
        o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--;)
            if (e.codePointAt(i) === 47) {
                if (o) {
                    n = i + 1;
                    break
                }
            } else r < 0 && (o = !0, r = i + 1);
        return r < 0 ? "" : e.slice(n, r)
    }
    if (t === e) return "";
    let l = -1,
        a = t.length - 1;
    for (; i--;)
        if (e.codePointAt(i) === 47) {
            if (o) {
                n = i + 1;
                break
            }
        } else l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
    return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r)
}

function D4(e) {
    if (Ii(e), e.length === 0) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n;)
        if (e.codePointAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else r || (r = !0);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t)
}

function F4(e) {
    Ii(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        o = 0,
        l;
    for (; t--;) {
        const a = e.codePointAt(t);
        if (a === 47) {
            if (l) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (l = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
    }
    return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function _4(...e) {
    let t = -1,
        n;
    for (; ++t < e.length;) Ii(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : N4(n)
}

function N4(e) {
    Ii(e);
    const t = e.codePointAt(0) === 47;
    let n = P4(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function P4(e, t) {
    let n = "",
        r = 0,
        i = -1,
        o = 0,
        l = -1,
        a, u;
    for (; ++l <= e.length;) {
        if (l < e.length) a = e.codePointAt(l);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(i === l - 1 || o === 1))
                if (i !== l - 1 && o === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
                                u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = l, o = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
                } else n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
            i = l, o = 0
        } else a === 46 && o > -1 ? o++ : o = -1
    }
    return n
}

function Ii(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const T4 = {
    cwd: z4
};

function z4() {
    return "/"
}

function $u(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
}

function I4(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!$u(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = "ERR_INVALID_ARG_TYPE", t
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw t.code = "ERR_INVALID_URL_SCHEME", t
    }
    return b4(e)
}

function b4(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length;)
        if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
            const r = t.codePointAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        } return decodeURIComponent(t)
}
const Gl = ["history", "path", "basename", "stem", "extname", "dirname"];
class Jh {
    constructor(t) {
        let n;
        t ? $u(t) ? n = {
            path: t
        } : typeof t == "string" || R4(t) ? n = {
            value: t
        } : n = t : n = {}, this.cwd = "cwd" in n ? "" : T4.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let r = -1;
        for (; ++r < Gl.length;) {
            const o = Gl[r];
            o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o])
        }
        let i;
        for (i in n) Gl.includes(i) || (this[i] = n[i])
    }
    get basename() {
        return typeof this.path == "string" ? Tt.basename(this.path) : void 0
    }
    set basename(t) {
        Jl(t, "basename"), Zl(t, "basename"), this.path = Tt.join(this.dirname || "", t)
    }
    get dirname() {
        return typeof this.path == "string" ? Tt.dirname(this.path) : void 0
    }
    set dirname(t) {
        hf(this.basename, "dirname"), this.path = Tt.join(t || "", this.basename)
    }
    get extname() {
        return typeof this.path == "string" ? Tt.extname(this.path) : void 0
    }
    set extname(t) {
        if (Zl(t, "extname"), hf(this.dirname, "extname"), t) {
            if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = Tt.join(this.dirname, this.stem + (t || ""))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(t) {
        $u(t) && (t = I4(t)), Jl(t, "path"), this.path !== t && this.history.push(t)
    }
    get stem() {
        return typeof this.path == "string" ? Tt.basename(this.path, this.extname) : void 0
    }
    set stem(t) {
        Jl(t, "stem"), Zl(t, "stem"), this.path = Tt.join(this.dirname || "", t + (this.extname || ""))
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw i.fatal = !0, i
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return i.fatal = void 0, i
    }
    message(t, n, r) {
        const i = new be(t, n, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    toString(t) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value)
    }
}

function Zl(e, t) {
    if (e && e.includes(Tt.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Tt.sep + "`")
}

function Jl(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty")
}

function hf(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function R4(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const L4 = function (e) {
        const r = this.constructor.prototype,
            i = r[e],
            o = function () {
                return i.apply(o, arguments)
            };
        return Object.setPrototypeOf(o, r), o
    },
    M4 = {}.hasOwnProperty;
class os extends L4 {
    constructor() {
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = B4()
    }
    copy() {
        const t = new os;
        let n = -1;
        for (; ++n < this.attachers.length;) {
            const r = this.attachers[n];
            t.use(...r)
        }
        return t.data(Xl(!0, {}, this.namespace)), t
    }
    data(t, n) {
        return typeof t == "string" ? arguments.length === 2 ? (na("data", this.frozen), this.namespace[t] = n, this) : M4.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (na("data", this.frozen), this.namespace = t, this) : this.namespace
    }
    freeze() {
        if (this.frozen) return this;
        const t = this;
        for (; ++this.freezeIndex < this.attachers.length;) {
            const [n, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = n.call(t, ...r);
            typeof i == "function" && this.transformers.use(i)
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
    }
    parse(t) {
        this.freeze();
        const n = ro(t),
            r = this.parser || this.Parser;
        return ea("parse", r), r(String(n), n)
    }
    process(t, n) {
        const r = this;
        return this.freeze(), ea("process", this.parser || this.Parser), ta("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);

        function i(o, l) {
            const a = ro(t),
                u = r.parse(a);
            r.run(u, a, function (c, h, f) {
                if (c || !h || !f) return s(c);
                const d = h,
                    m = r.stringify(d, f);
                H4(m) ? f.value = m : f.result = m, s(c, f)
            });

            function s(c, h) {
                c || !h ? l(c) : o ? o(h) : n(void 0, h)
            }
        }
    }
    processSync(t) {
        let n = !1,
            r;
        return this.freeze(), ea("processSync", this.parser || this.Parser), ta("processSync", this.compiler || this.Compiler), this.process(t, i), gf("processSync", "process", n), r;

        function i(o, l) {
            n = !0, af(o), r = l
        }
    }
    run(t, n, r) {
        xf(t), this.freeze();
        const i = this.transformers;
        return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);

        function o(l, a) {
            const u = ro(n);
            i.run(t, u, s);

            function s(c, h, f) {
                const d = h || t;
                c ? a(c) : l ? l(d) : r(void 0, d, f)
            }
        }
    }
    runSync(t, n) {
        let r = !1,
            i;
        return this.run(t, n, o), gf("runSync", "run", r), i;

        function o(l, a) {
            af(l), i = a, r = !0
        }
    }
    stringify(t, n) {
        this.freeze();
        const r = ro(n),
            i = this.compiler || this.Compiler;
        return ta("stringify", i), xf(t), i(t, r)
    }
    use(t, ...n) {
        const r = this.attachers,
            i = this.namespace;
        if (na("use", this.frozen), t != null)
            if (typeof t == "function") u(t, n);
            else if (typeof t == "object") Array.isArray(t) ? a(t) : l(t);
        else throw new TypeError("Expected usable value, not `" + t + "`");
        return this;

        function o(s) {
            if (typeof s == "function") u(s, []);
            else if (typeof s == "object")
                if (Array.isArray(s)) {
                    const [c, ...h] = s;
                    u(c, h)
                } else l(s);
            else throw new TypeError("Expected usable value, not `" + s + "`")
        }

        function l(s) {
            if (!("plugins" in s) && !("settings" in s)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            a(s.plugins), s.settings && (i.settings = Xl(!0, i.settings, s.settings))
        }

        function a(s) {
            let c = -1;
            if (s != null)
                if (Array.isArray(s))
                    for (; ++c < s.length;) {
                        const h = s[c];
                        o(h)
                    } else throw new TypeError("Expected a list of plugins, not `" + s + "`")
        }

        function u(s, c) {
            let h = -1,
                f = -1;
            for (; ++h < r.length;)
                if (r[h][0] === s) {
                    f = h;
                    break
                } if (f === -1) r.push([s, ...c]);
            else if (c.length > 0) {
                let [d, ...m] = c;
                const y = r[f][1];
                Vu(y) && Vu(d) && (d = Xl(!0, y, d)), r[f] = [s, d, ...m]
            }
        }
    }
}
const O4 = new os().freeze();

function ea(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
}

function ta(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
}

function na(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function xf(e) {
    if (!Vu(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function gf(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function ro(e) {
    return j4(e) ? e : new Jh(e)
}

function j4(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function H4(e) {
    return typeof e == "string" || U4(e)
}

function U4(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const V4 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    mf = [],
    yf = {
        allowDangerousHtml: !0
    },
    $4 = /^(https?|ircs?|mailto|xmpp)$/i,
    W4 = [{
        from: "astPlugins",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement"
    }, {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements"
    }, {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements"
    }, {
        from: "escapeHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "includeElementIndex",
        id: "#remove-includeelementindex"
    }, {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex"
    }, {
        from: "linkTarget",
        id: "remove-linktarget"
    }, {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins"
    }, {
        from: "rawSourcePos",
        id: "#remove-rawsourcepos"
    }, {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components"
    }, {
        from: "source",
        id: "change-source-to-children",
        to: "children"
    }, {
        from: "sourcePos",
        id: "#remove-sourcepos"
    }, {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }, {
        from: "transformLinkUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }];

function q4(e) {
    const t = e.allowedElements,
        n = e.allowElement,
        r = e.children || "",
        i = e.className,
        o = e.components,
        l = e.disallowedElements,
        a = e.rehypePlugins || mf,
        u = e.remarkPlugins || mf,
        s = e.remarkRehypeOptions ? {
            ...e.remarkRehypeOptions,
            ...yf
        } : yf,
        c = e.skipHtml,
        h = e.unwrapDisallowed,
        f = e.urlTransform || Q4,
        d = O4().use(Dv).use(u).use(w4, s).use(a),
        m = new Jh;
    typeof r == "string" && (m.value = r);
    for (const p of W4) Object.hasOwn(e, p.from) && ("" + p.from + (p.to ? "use `" + p.to + "` instead" : "remove it") + V4 + p.id, void 0);
    const y = d.parse(m);
    let C = d.runSync(y, m);
    return i && (C = {
        type: "element",
        tagName: "div",
        properties: {
            className: i
        },
        children: C.type === "root" ? C.children : [C]
    }), Gh(C, g), oy(C, {
        Fragment: b.Fragment,
        components: o,
        ignoreInvalidStyle: !0,
        jsx: b.jsx,
        jsxs: b.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function g(p, x, v) {
        if (p.type === "raw" && v && typeof x == "number") return c ? v.children.splice(x, 1) : v.children[x] = {
            type: "text",
            value: p.value
        }, x;
        if (p.type === "element") {
            let k;
            for (k in Ql)
                if (Object.hasOwn(Ql, k) && Object.hasOwn(p.properties, k)) {
                    const E = p.properties[k],
                        S = Ql[k];
                    (S === null || S.includes(p.tagName)) && (p.properties[k] = f(String(E || ""), k, p))
                }
        }
        if (p.type === "element") {
            let k = t ? !t.includes(p.tagName) : l ? l.includes(p.tagName) : !1;
            if (!k && n && typeof x == "number" && (k = !n(p, x, v)), k && v && typeof x == "number") return h && p.children ? v.children.splice(x, 1, ...p.children) : v.children.splice(x, 1), x
        }
    }
}

function Q4(e) {
    const t = e.indexOf(":"),
        n = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
    return t < 0 || i > -1 && t > i || n > -1 && t > n || r > -1 && t > r || $4.test(e.slice(0, t)) ? e : ""
}
const K4 = ({
        note: e,
        onChange: t,
        onTitleChange: n
    }) => e ? b.jsxs("div", {
        className: "flex-1 p-4 md:p-6 overflow-auto custom-scrollbar",
        children: [b.jsx("input", {
            type: "text",
            value: e.title,
            onChange: r => n(r.target.value),
            placeholder: "Insira um título...",
            className: "w-full text-xl md:text-2xl font-semibold mb-4 bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
        }), b.jsxs("div", {
            className: "flex flex-col md:grid md:grid-cols-2 gap-4 h-[calc(100vh-200px)]",
            children: [b.jsx("textarea", {
                value: e.content,
                onChange: r => t(r.target.value),
                placeholder: "Digite sua nota aqui usando Markdown...",
                className: "w-full h-[50vh] md:h-full resize-none bg-transparent border-none outline-none custom-scrollbar font-mono text-sm text-gray-700"
            }), b.jsx("div", {
                className: "prose prose-sm max-w-none overflow-auto custom-scrollbar bg-gray-50/50 rounded-lg p-4 h-[50vh] md:h-full",
                children: b.jsx(q4, {
                    children: e.content
                })
            })]
        })]
    }) : b.jsx("div", {
        className: "flex-1 flex items-center justify-center text-gray-500",
        children: "Selecione ou crie uma nota para começar"
    }),
    Y4 = ({
        qrCode: e,
        onClose: t,
        onDownload: n
    }) => b.jsx("div", {
        className: "fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50",
        children: b.jsxs("div", {
            className: "bg-gray-50 rounded-lg p-6 max-w-md w-full mx-4",
            children: [b.jsxs("div", {
                className: "flex justify-between items-center mb-4",
                children: [b.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "QR Code da Nota"
                }), b.jsx("button", {
                    onClick: t,
                    className: "p-1 hover:bg-gray-100 rounded-full",
                    children: b.jsx(mm, {
                        className: "w-5 h-5 text-gray-600"
                    })
                })]
            }), b.jsx("div", {
                className: "flex justify-center items-center mb-4",
                children: b.jsx("div", {
                    className: "w-64 h-64",
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })
            }), b.jsxs("button", {
                onClick: n,
                className: "w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-50 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors",
                children: [b.jsx(om, {
                    className: "w-4 h-4"
                }), "Baixar QR Code"]
            })]
        })
    }),
    X4 = (e, t) => {
        const n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            r = "0123456789",
            i = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        let o = "";
        t.letra && (o += n), t.número && (o += r), t.especial && (o += i), o === "" && (o = n);
        let l = "";
        for (let a = 0; a < e; a++) l += o.charAt(Math.floor(Math.random() * o.length));
        return l
    },
    G4 = e => {
        let t = 0;
        return e.length >= 12 && t++, e.match(/[a-z]/) && e.match(/[A-Z]/) && t++, e.match(/\d/) && t++, e.match(/[^a-zA-Z\d]/) && t++, e.length >= 16 && t++, {
            score: t,
            label: ["Fraca", "Razoável", "Boa", "Forte", "Excelente"][t - 1] || "Muito Fraca"
        }
    },
    Z4 = () => {
        const [e, t] = de.useState(""), [n, r] = de.useState(16), [i, o] = de.useState({
            letra: !0,
            número: !0,
            especial: !1
        }), [l, a] = de.useState({
            score: 0,
            label: ""
        }), u = de.useCallback(() => {
            const c = X4(n, i);
            t(c), a(G4(c))
        }, [n, i]);
        Va.useEffect(() => {
            u()
        }, [u]);
        const s = () => {
            navigator.clipboard.writeText(e)
        };
        return b.jsxs("div", {
            className: "tool-card",
            children: [b.jsx("h3", {
                className: "text-gray-800 font-semibold mb-4",
                children: "Gerador de Senhas"
            }), b.jsxs("div", {
                className: "relative mb-4",
                children: [b.jsx("input", {
                    type: "text",
                    value: e,
                    readOnly: !0,
                    className: "w-full bg-gray-100/50 rounded-lg py-2 px-3 pr-20 text-gray-700 font-mono text-sm"
                }), b.jsxs("div", {
                    className: "absolute right-1 top-1 flex gap-1",
                    children: [b.jsx("button", {
                        onClick: u,
                        className: "p-1 rounded hover:bg-gray-200/50 text-gray-600",
                        title: "Gerar nova senha",
                        children: b.jsx(pm, {
                            className: "w-4 h-4"
                        })
                    }), b.jsx("button", {
                        onClick: s,
                        className: "p-1 rounded hover:bg-gray-200/50 text-gray-600",
                        title: "Copiar senha",
                        children: b.jsx(W0, {
                            className: "w-4 h-4"
                        })
                    })]
                })]
            }), b.jsxs("div", {
                className: "space-y-3 mb-4",
                children: [b.jsxs("div", {
                    children: [b.jsxs("label", {
                        className: "text-sm text-gray-600 mb-1 block",
                        children: ["Tamanho: ", n]
                    }), b.jsx("input", {
                        type: "range",
                        min: "4",
                        max: "32",
                        value: n,
                        onChange: c => r(Number(c.target.value)),
                        className: "w-full accent-gray-600"
                    })]
                }), b.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: Object.entries(i).map(([c, h]) => b.jsxs("label", {
                        className: "flex items-center gap-2",
                        children: [b.jsx("input", {
                            type: "checkbox",
                            checked: h,
                            onChange: () => o(f => ({
                                ...f,
                                [c]: !h
                            })),
                            className: "appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-gray-600 checked:border-gray-600 focus:outline-none focus:ring-0 transition-colors cursor-pointer"
                        }), b.jsx("span", {
                            className: "text-sm text-gray-700 capitalize",
                            children: c
                        })]
                    }, c))
                })]
            }), b.jsxs("div", {
                className: "flex items-center gap-2",
                children: [b.jsx("div", {
                    className: "flex-1 h-1.5 bg-gray-200/50 rounded-full overflow-hidden",
                    children: b.jsx("div", {
                        className: `h-full transition-all ${l.score<=2?"bg-gray-400":l.score<=3?"bg-gray-600":"bg-gray-800"}`,
                        style: {
                            width: `${l.score/4*100}%`
                        }
                    })
                }), b.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: l.label
                })]
            })]
        })
    };
var e1 = {
    exports: {}
};

function J4(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ra = {
    exports: {}
};
const e8 = {},
    t8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: e8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    n8 = _1(t8);
var vf;

function ne() {
    return vf || (vf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r()
        })(Z, function () {
            var n = n || function (r, i) {
                var o;
                if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof Z < "u" && Z.crypto && (o = Z.crypto), !o && typeof J4 == "function") try {
                    o = n8
                } catch {}
                var l = function () {
                        if (o) {
                            if (typeof o.getRandomValues == "function") try {
                                return o.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                            if (typeof o.randomBytes == "function") try {
                                return o.randomBytes(4).readInt32LE()
                            } catch {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    },
                    a = Object.create || function () {
                        function p() {}
                        return function (x) {
                            var v;
                            return p.prototype = x, v = new p, p.prototype = null, v
                        }
                    }(),
                    u = {},
                    s = u.lib = {},
                    c = s.Base = function () {
                        return {
                            extend: function (p) {
                                var x = a(this);
                                return p && x.mixIn(p), (!x.hasOwnProperty("init") || this.init === x.init) && (x.init = function () {
                                    x.$super.init.apply(this, arguments)
                                }), x.init.prototype = x, x.$super = this, x
                            },
                            create: function () {
                                var p = this.extend();
                                return p.init.apply(p, arguments), p
                            },
                            init: function () {},
                            mixIn: function (p) {
                                for (var x in p) p.hasOwnProperty(x) && (this[x] = p[x]);
                                p.hasOwnProperty("toString") && (this.toString = p.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(),
                    h = s.WordArray = c.extend({
                        init: function (p, x) {
                            p = this.words = p || [], x != i ? this.sigBytes = x : this.sigBytes = p.length * 4
                        },
                        toString: function (p) {
                            return (p || d).stringify(this)
                        },
                        concat: function (p) {
                            var x = this.words,
                                v = p.words,
                                k = this.sigBytes,
                                E = p.sigBytes;
                            if (this.clamp(), k % 4)
                                for (var S = 0; S < E; S++) {
                                    var D = v[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                                    x[k + S >>> 2] |= D << 24 - (k + S) % 4 * 8
                                } else
                                    for (var N = 0; N < E; N += 4) x[k + N >>> 2] = v[N >>> 2];
                            return this.sigBytes += E, this
                        },
                        clamp: function () {
                            var p = this.words,
                                x = this.sigBytes;
                            p[x >>> 2] &= 4294967295 << 32 - x % 4 * 8, p.length = r.ceil(x / 4)
                        },
                        clone: function () {
                            var p = c.clone.call(this);
                            return p.words = this.words.slice(0), p
                        },
                        random: function (p) {
                            for (var x = [], v = 0; v < p; v += 4) x.push(l());
                            return new h.init(x, p)
                        }
                    }),
                    f = u.enc = {},
                    d = f.Hex = {
                        stringify: function (p) {
                            for (var x = p.words, v = p.sigBytes, k = [], E = 0; E < v; E++) {
                                var S = x[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                                k.push((S >>> 4).toString(16)), k.push((S & 15).toString(16))
                            }
                            return k.join("")
                        },
                        parse: function (p) {
                            for (var x = p.length, v = [], k = 0; k < x; k += 2) v[k >>> 3] |= parseInt(p.substr(k, 2), 16) << 24 - k % 8 * 4;
                            return new h.init(v, x / 2)
                        }
                    },
                    m = f.Latin1 = {
                        stringify: function (p) {
                            for (var x = p.words, v = p.sigBytes, k = [], E = 0; E < v; E++) {
                                var S = x[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                                k.push(String.fromCharCode(S))
                            }
                            return k.join("")
                        },
                        parse: function (p) {
                            for (var x = p.length, v = [], k = 0; k < x; k++) v[k >>> 2] |= (p.charCodeAt(k) & 255) << 24 - k % 4 * 8;
                            return new h.init(v, x)
                        }
                    },
                    y = f.Utf8 = {
                        stringify: function (p) {
                            try {
                                return decodeURIComponent(escape(m.stringify(p)))
                            } catch {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (p) {
                            return m.parse(unescape(encodeURIComponent(p)))
                        }
                    },
                    C = s.BufferedBlockAlgorithm = c.extend({
                        reset: function () {
                            this._data = new h.init, this._nDataBytes = 0
                        },
                        _append: function (p) {
                            typeof p == "string" && (p = y.parse(p)), this._data.concat(p), this._nDataBytes += p.sigBytes
                        },
                        _process: function (p) {
                            var x, v = this._data,
                                k = v.words,
                                E = v.sigBytes,
                                S = this.blockSize,
                                D = S * 4,
                                N = E / D;
                            p ? N = r.ceil(N) : N = r.max((N | 0) - this._minBufferSize, 0);
                            var A = N * S,
                                F = r.min(A * 4, E);
                            if (A) {
                                for (var _ = 0; _ < A; _ += S) this._doProcessBlock(k, _);
                                x = k.splice(0, A), v.sigBytes -= F
                            }
                            return new h.init(x, F)
                        },
                        clone: function () {
                            var p = c.clone.call(this);
                            return p._data = this._data.clone(), p
                        },
                        _minBufferSize: 0
                    });
                s.Hasher = C.extend({
                    cfg: c.extend(),
                    init: function (p) {
                        this.cfg = this.cfg.extend(p), this.reset()
                    },
                    reset: function () {
                        C.reset.call(this), this._doReset()
                    },
                    update: function (p) {
                        return this._append(p), this._process(), this
                    },
                    finalize: function (p) {
                        p && this._append(p);
                        var x = this._doFinalize();
                        return x
                    },
                    blockSize: 16,
                    _createHelper: function (p) {
                        return function (x, v) {
                            return new p.init(v).finalize(x)
                        }
                    },
                    _createHmacHelper: function (p) {
                        return function (x, v) {
                            return new g.HMAC.init(p, v).finalize(x)
                        }
                    }
                });
                var g = u.algo = {};
                return u
            }(Math);
            return n
        })
    }(ra)), ra.exports
}
var ia = {
        exports: {}
    },
    Cf;

function xl() {
    return Cf || (Cf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.Base,
                    a = o.WordArray,
                    u = i.x64 = {};
                u.Word = l.extend({
                    init: function (s, c) {
                        this.high = s, this.low = c
                    }
                }), u.WordArray = l.extend({
                    init: function (s, c) {
                        s = this.words = s || [], c != r ? this.sigBytes = c : this.sigBytes = s.length * 8
                    },
                    toX32: function () {
                        for (var s = this.words, c = s.length, h = [], f = 0; f < c; f++) {
                            var d = s[f];
                            h.push(d.high), h.push(d.low)
                        }
                        return a.create(h, this.sigBytes)
                    },
                    clone: function () {
                        for (var s = l.clone.call(this), c = s.words = this.words.slice(0), h = c.length, f = 0; f < h; f++) c[f] = c[f].clone();
                        return s
                    }
                })
            }(), n
        })
    }(ia)), ia.exports
}
var oa = {
        exports: {}
    },
    Ef;

function r8() {
    return Ef || (Ef = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function () {
                if (typeof ArrayBuffer == "function") {
                    var r = n,
                        i = r.lib,
                        o = i.WordArray,
                        l = o.init,
                        a = o.init = function (u) {
                            if (u instanceof ArrayBuffer && (u = new Uint8Array(u)), (u instanceof Int8Array || typeof Uint8ClampedArray < "u" && u instanceof Uint8ClampedArray || u instanceof Int16Array || u instanceof Uint16Array || u instanceof Int32Array || u instanceof Uint32Array || u instanceof Float32Array || u instanceof Float64Array) && (u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength)), u instanceof Uint8Array) {
                                for (var s = u.byteLength, c = [], h = 0; h < s; h++) c[h >>> 2] |= u[h] << 24 - h % 4 * 8;
                                l.call(this, c, s)
                            } else l.apply(this, arguments)
                        };
                    a.prototype = o
                }
            }(), n.lib.WordArray
        })
    }(oa)), oa.exports
}
var la = {
        exports: {}
    },
    wf;

function i8() {
    return wf || (wf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = r.enc;
                l.Utf16 = l.Utf16BE = {
                    stringify: function (u) {
                        for (var s = u.words, c = u.sigBytes, h = [], f = 0; f < c; f += 2) {
                            var d = s[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
                            h.push(String.fromCharCode(d))
                        }
                        return h.join("")
                    },
                    parse: function (u) {
                        for (var s = u.length, c = [], h = 0; h < s; h++) c[h >>> 1] |= u.charCodeAt(h) << 16 - h % 2 * 16;
                        return o.create(c, s * 2)
                    }
                }, l.Utf16LE = {
                    stringify: function (u) {
                        for (var s = u.words, c = u.sigBytes, h = [], f = 0; f < c; f += 2) {
                            var d = a(s[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
                            h.push(String.fromCharCode(d))
                        }
                        return h.join("")
                    },
                    parse: function (u) {
                        for (var s = u.length, c = [], h = 0; h < s; h++) c[h >>> 1] |= a(u.charCodeAt(h) << 16 - h % 2 * 16);
                        return o.create(c, s * 2)
                    }
                };

                function a(u) {
                    return u << 8 & 4278255360 | u >>> 8 & 16711935
                }
            }(), n.enc.Utf16
        })
    }(la)), la.exports
}
var aa = {
        exports: {}
    },
    kf;

function Kn() {
    return kf || (kf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = r.enc;
                l.Base64 = {
                    stringify: function (u) {
                        var s = u.words,
                            c = u.sigBytes,
                            h = this._map;
                        u.clamp();
                        for (var f = [], d = 0; d < c; d += 3)
                            for (var m = s[d >>> 2] >>> 24 - d % 4 * 8 & 255, y = s[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, C = s[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, g = m << 16 | y << 8 | C, p = 0; p < 4 && d + p * .75 < c; p++) f.push(h.charAt(g >>> 6 * (3 - p) & 63));
                        var x = h.charAt(64);
                        if (x)
                            for (; f.length % 4;) f.push(x);
                        return f.join("")
                    },
                    parse: function (u) {
                        var s = u.length,
                            c = this._map,
                            h = this._reverseMap;
                        if (!h) {
                            h = this._reverseMap = [];
                            for (var f = 0; f < c.length; f++) h[c.charCodeAt(f)] = f
                        }
                        var d = c.charAt(64);
                        if (d) {
                            var m = u.indexOf(d);
                            m !== -1 && (s = m)
                        }
                        return a(u, s, h)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };

                function a(u, s, c) {
                    for (var h = [], f = 0, d = 0; d < s; d++)
                        if (d % 4) {
                            var m = c[u.charCodeAt(d - 1)] << d % 4 * 2,
                                y = c[u.charCodeAt(d)] >>> 6 - d % 4 * 2,
                                C = m | y;
                            h[f >>> 2] |= C << 24 - f % 4 * 8, f++
                        } return o.create(h, f)
                }
            }(), n.enc.Base64
        })
    }(aa)), aa.exports
}
var ua = {
        exports: {}
    },
    Bf;

function o8() {
    return Bf || (Bf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = r.enc;
                l.Base64url = {
                    stringify: function (u, s) {
                        s === void 0 && (s = !0);
                        var c = u.words,
                            h = u.sigBytes,
                            f = s ? this._safe_map : this._map;
                        u.clamp();
                        for (var d = [], m = 0; m < h; m += 3)
                            for (var y = c[m >>> 2] >>> 24 - m % 4 * 8 & 255, C = c[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, g = c[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, p = y << 16 | C << 8 | g, x = 0; x < 4 && m + x * .75 < h; x++) d.push(f.charAt(p >>> 6 * (3 - x) & 63));
                        var v = f.charAt(64);
                        if (v)
                            for (; d.length % 4;) d.push(v);
                        return d.join("")
                    },
                    parse: function (u, s) {
                        s === void 0 && (s = !0);
                        var c = u.length,
                            h = s ? this._safe_map : this._map,
                            f = this._reverseMap;
                        if (!f) {
                            f = this._reverseMap = [];
                            for (var d = 0; d < h.length; d++) f[h.charCodeAt(d)] = d
                        }
                        var m = h.charAt(64);
                        if (m) {
                            var y = u.indexOf(m);
                            y !== -1 && (c = y)
                        }
                        return a(u, c, f)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                };

                function a(u, s, c) {
                    for (var h = [], f = 0, d = 0; d < s; d++)
                        if (d % 4) {
                            var m = c[u.charCodeAt(d - 1)] << d % 4 * 2,
                                y = c[u.charCodeAt(d)] >>> 6 - d % 4 * 2,
                                C = m | y;
                            h[f >>> 2] |= C << 24 - f % 4 * 8, f++
                        } return o.create(h, f)
                }
            }(), n.enc.Base64url
        })
    }(ua)), ua.exports
}
var sa = {
        exports: {}
    },
    Sf;

function Yn() {
    return Sf || (Sf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.WordArray,
                    a = o.Hasher,
                    u = i.algo,
                    s = [];
                (function () {
                    for (var y = 0; y < 64; y++) s[y] = r.abs(r.sin(y + 1)) * 4294967296 | 0
                })();
                var c = u.MD5 = a.extend({
                    _doReset: function () {
                        this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function (y, C) {
                        for (var g = 0; g < 16; g++) {
                            var p = C + g,
                                x = y[p];
                            y[p] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360
                        }
                        var v = this._hash.words,
                            k = y[C + 0],
                            E = y[C + 1],
                            S = y[C + 2],
                            D = y[C + 3],
                            N = y[C + 4],
                            A = y[C + 5],
                            F = y[C + 6],
                            _ = y[C + 7],
                            P = y[C + 8],
                            U = y[C + 9],
                            j = y[C + 10],
                            W = y[C + 11],
                            Q = y[C + 12],
                            L = y[C + 13],
                            V = y[C + 14],
                            B = y[C + 15],
                            T = v[0],
                            z = v[1],
                            w = v[2],
                            R = v[3];
                        T = h(T, z, w, R, k, 7, s[0]), R = h(R, T, z, w, E, 12, s[1]), w = h(w, R, T, z, S, 17, s[2]), z = h(z, w, R, T, D, 22, s[3]), T = h(T, z, w, R, N, 7, s[4]), R = h(R, T, z, w, A, 12, s[5]), w = h(w, R, T, z, F, 17, s[6]), z = h(z, w, R, T, _, 22, s[7]), T = h(T, z, w, R, P, 7, s[8]), R = h(R, T, z, w, U, 12, s[9]), w = h(w, R, T, z, j, 17, s[10]), z = h(z, w, R, T, W, 22, s[11]), T = h(T, z, w, R, Q, 7, s[12]), R = h(R, T, z, w, L, 12, s[13]), w = h(w, R, T, z, V, 17, s[14]), z = h(z, w, R, T, B, 22, s[15]), T = f(T, z, w, R, E, 5, s[16]), R = f(R, T, z, w, F, 9, s[17]), w = f(w, R, T, z, W, 14, s[18]), z = f(z, w, R, T, k, 20, s[19]), T = f(T, z, w, R, A, 5, s[20]), R = f(R, T, z, w, j, 9, s[21]), w = f(w, R, T, z, B, 14, s[22]), z = f(z, w, R, T, N, 20, s[23]), T = f(T, z, w, R, U, 5, s[24]), R = f(R, T, z, w, V, 9, s[25]), w = f(w, R, T, z, D, 14, s[26]), z = f(z, w, R, T, P, 20, s[27]), T = f(T, z, w, R, L, 5, s[28]), R = f(R, T, z, w, S, 9, s[29]), w = f(w, R, T, z, _, 14, s[30]), z = f(z, w, R, T, Q, 20, s[31]), T = d(T, z, w, R, A, 4, s[32]), R = d(R, T, z, w, P, 11, s[33]), w = d(w, R, T, z, W, 16, s[34]), z = d(z, w, R, T, V, 23, s[35]), T = d(T, z, w, R, E, 4, s[36]), R = d(R, T, z, w, N, 11, s[37]), w = d(w, R, T, z, _, 16, s[38]), z = d(z, w, R, T, j, 23, s[39]), T = d(T, z, w, R, L, 4, s[40]), R = d(R, T, z, w, k, 11, s[41]), w = d(w, R, T, z, D, 16, s[42]), z = d(z, w, R, T, F, 23, s[43]), T = d(T, z, w, R, U, 4, s[44]), R = d(R, T, z, w, Q, 11, s[45]), w = d(w, R, T, z, B, 16, s[46]), z = d(z, w, R, T, S, 23, s[47]), T = m(T, z, w, R, k, 6, s[48]), R = m(R, T, z, w, _, 10, s[49]), w = m(w, R, T, z, V, 15, s[50]), z = m(z, w, R, T, A, 21, s[51]), T = m(T, z, w, R, Q, 6, s[52]), R = m(R, T, z, w, D, 10, s[53]), w = m(w, R, T, z, j, 15, s[54]), z = m(z, w, R, T, E, 21, s[55]), T = m(T, z, w, R, P, 6, s[56]), R = m(R, T, z, w, B, 10, s[57]), w = m(w, R, T, z, F, 15, s[58]), z = m(z, w, R, T, L, 21, s[59]), T = m(T, z, w, R, N, 6, s[60]), R = m(R, T, z, w, W, 10, s[61]), w = m(w, R, T, z, S, 15, s[62]), z = m(z, w, R, T, U, 21, s[63]), v[0] = v[0] + T | 0, v[1] = v[1] + z | 0, v[2] = v[2] + w | 0, v[3] = v[3] + R | 0
                    },
                    _doFinalize: function () {
                        var y = this._data,
                            C = y.words,
                            g = this._nDataBytes * 8,
                            p = y.sigBytes * 8;
                        C[p >>> 5] |= 128 << 24 - p % 32;
                        var x = r.floor(g / 4294967296),
                            v = g;
                        C[(p + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, C[(p + 64 >>> 9 << 4) + 14] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, y.sigBytes = (C.length + 1) * 4, this._process();
                        for (var k = this._hash, E = k.words, S = 0; S < 4; S++) {
                            var D = E[S];
                            E[S] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360
                        }
                        return k
                    },
                    clone: function () {
                        var y = a.clone.call(this);
                        return y._hash = this._hash.clone(), y
                    }
                });

                function h(y, C, g, p, x, v, k) {
                    var E = y + (C & g | ~C & p) + x + k;
                    return (E << v | E >>> 32 - v) + C
                }

                function f(y, C, g, p, x, v, k) {
                    var E = y + (C & p | g & ~p) + x + k;
                    return (E << v | E >>> 32 - v) + C
                }

                function d(y, C, g, p, x, v, k) {
                    var E = y + (C ^ g ^ p) + x + k;
                    return (E << v | E >>> 32 - v) + C
                }

                function m(y, C, g, p, x, v, k) {
                    var E = y + (g ^ (C | ~p)) + x + k;
                    return (E << v | E >>> 32 - v) + C
                }
                i.MD5 = a._createHelper(c), i.HmacMD5 = a._createHmacHelper(c)
            }(Math), n.MD5
        })
    }(sa)), sa.exports
}
var ca = {
        exports: {}
    },
    Af;

function t1() {
    return Af || (Af = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = i.Hasher,
                    a = r.algo,
                    u = [],
                    s = a.SHA1 = l.extend({
                        _doReset: function () {
                            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function (c, h) {
                            for (var f = this._hash.words, d = f[0], m = f[1], y = f[2], C = f[3], g = f[4], p = 0; p < 80; p++) {
                                if (p < 16) u[p] = c[h + p] | 0;
                                else {
                                    var x = u[p - 3] ^ u[p - 8] ^ u[p - 14] ^ u[p - 16];
                                    u[p] = x << 1 | x >>> 31
                                }
                                var v = (d << 5 | d >>> 27) + g + u[p];
                                p < 20 ? v += (m & y | ~m & C) + 1518500249 : p < 40 ? v += (m ^ y ^ C) + 1859775393 : p < 60 ? v += (m & y | m & C | y & C) - 1894007588 : v += (m ^ y ^ C) - 899497514, g = C, C = y, y = m << 30 | m >>> 2, m = d, d = v
                            }
                            f[0] = f[0] + d | 0, f[1] = f[1] + m | 0, f[2] = f[2] + y | 0, f[3] = f[3] + C | 0, f[4] = f[4] + g | 0
                        },
                        _doFinalize: function () {
                            var c = this._data,
                                h = c.words,
                                f = this._nDataBytes * 8,
                                d = c.sigBytes * 8;
                            return h[d >>> 5] |= 128 << 24 - d % 32, h[(d + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), h[(d + 64 >>> 9 << 4) + 15] = f, c.sigBytes = h.length * 4, this._process(), this._hash
                        },
                        clone: function () {
                            var c = l.clone.call(this);
                            return c._hash = this._hash.clone(), c
                        }
                    });
                r.SHA1 = l._createHelper(s), r.HmacSHA1 = l._createHmacHelper(s)
            }(), n.SHA1
        })
    }(ca)), ca.exports
}
var fa = {
        exports: {}
    },
    Df;

function ls() {
    return Df || (Df = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.WordArray,
                    a = o.Hasher,
                    u = i.algo,
                    s = [],
                    c = [];
                (function () {
                    function d(g) {
                        for (var p = r.sqrt(g), x = 2; x <= p; x++)
                            if (!(g % x)) return !1;
                        return !0
                    }

                    function m(g) {
                        return (g - (g | 0)) * 4294967296 | 0
                    }
                    for (var y = 2, C = 0; C < 64;) d(y) && (C < 8 && (s[C] = m(r.pow(y, 1 / 2))), c[C] = m(r.pow(y, 1 / 3)), C++), y++
                })();
                var h = [],
                    f = u.SHA256 = a.extend({
                        _doReset: function () {
                            this._hash = new l.init(s.slice(0))
                        },
                        _doProcessBlock: function (d, m) {
                            for (var y = this._hash.words, C = y[0], g = y[1], p = y[2], x = y[3], v = y[4], k = y[5], E = y[6], S = y[7], D = 0; D < 64; D++) {
                                if (D < 16) h[D] = d[m + D] | 0;
                                else {
                                    var N = h[D - 15],
                                        A = (N << 25 | N >>> 7) ^ (N << 14 | N >>> 18) ^ N >>> 3,
                                        F = h[D - 2],
                                        _ = (F << 15 | F >>> 17) ^ (F << 13 | F >>> 19) ^ F >>> 10;
                                    h[D] = A + h[D - 7] + _ + h[D - 16]
                                }
                                var P = v & k ^ ~v & E,
                                    U = C & g ^ C & p ^ g & p,
                                    j = (C << 30 | C >>> 2) ^ (C << 19 | C >>> 13) ^ (C << 10 | C >>> 22),
                                    W = (v << 26 | v >>> 6) ^ (v << 21 | v >>> 11) ^ (v << 7 | v >>> 25),
                                    Q = S + W + P + c[D] + h[D],
                                    L = j + U;
                                S = E, E = k, k = v, v = x + Q | 0, x = p, p = g, g = C, C = Q + L | 0
                            }
                            y[0] = y[0] + C | 0, y[1] = y[1] + g | 0, y[2] = y[2] + p | 0, y[3] = y[3] + x | 0, y[4] = y[4] + v | 0, y[5] = y[5] + k | 0, y[6] = y[6] + E | 0, y[7] = y[7] + S | 0
                        },
                        _doFinalize: function () {
                            var d = this._data,
                                m = d.words,
                                y = this._nDataBytes * 8,
                                C = d.sigBytes * 8;
                            return m[C >>> 5] |= 128 << 24 - C % 32, m[(C + 64 >>> 9 << 4) + 14] = r.floor(y / 4294967296), m[(C + 64 >>> 9 << 4) + 15] = y, d.sigBytes = m.length * 4, this._process(), this._hash
                        },
                        clone: function () {
                            var d = a.clone.call(this);
                            return d._hash = this._hash.clone(), d
                        }
                    });
                i.SHA256 = a._createHelper(f), i.HmacSHA256 = a._createHmacHelper(f)
            }(Math), n.SHA256
        })
    }(fa)), fa.exports
}
var da = {
        exports: {}
    },
    Ff;

function l8() {
    return Ff || (Ff = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), ls())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = r.algo,
                    a = l.SHA256,
                    u = l.SHA224 = a.extend({
                        _doReset: function () {
                            this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                        },
                        _doFinalize: function () {
                            var s = a._doFinalize.call(this);
                            return s.sigBytes -= 4, s
                        }
                    });
                r.SHA224 = a._createHelper(u), r.HmacSHA224 = a._createHmacHelper(u)
            }(), n.SHA224
        })
    }(da)), da.exports
}
var pa = {
        exports: {}
    },
    _f;

function n1() {
    return _f || (_f = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), xl())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.Hasher,
                    l = r.x64,
                    a = l.Word,
                    u = l.WordArray,
                    s = r.algo;

                function c() {
                    return a.create.apply(a, arguments)
                }
                var h = [c(1116352408, 3609767458), c(1899447441, 602891725), c(3049323471, 3964484399), c(3921009573, 2173295548), c(961987163, 4081628472), c(1508970993, 3053834265), c(2453635748, 2937671579), c(2870763221, 3664609560), c(3624381080, 2734883394), c(310598401, 1164996542), c(607225278, 1323610764), c(1426881987, 3590304994), c(1925078388, 4068182383), c(2162078206, 991336113), c(2614888103, 633803317), c(3248222580, 3479774868), c(3835390401, 2666613458), c(4022224774, 944711139), c(264347078, 2341262773), c(604807628, 2007800933), c(770255983, 1495990901), c(1249150122, 1856431235), c(1555081692, 3175218132), c(1996064986, 2198950837), c(2554220882, 3999719339), c(2821834349, 766784016), c(2952996808, 2566594879), c(3210313671, 3203337956), c(3336571891, 1034457026), c(3584528711, 2466948901), c(113926993, 3758326383), c(338241895, 168717936), c(666307205, 1188179964), c(773529912, 1546045734), c(1294757372, 1522805485), c(1396182291, 2643833823), c(1695183700, 2343527390), c(1986661051, 1014477480), c(2177026350, 1206759142), c(2456956037, 344077627), c(2730485921, 1290863460), c(2820302411, 3158454273), c(3259730800, 3505952657), c(3345764771, 106217008), c(3516065817, 3606008344), c(3600352804, 1432725776), c(4094571909, 1467031594), c(275423344, 851169720), c(430227734, 3100823752), c(506948616, 1363258195), c(659060556, 3750685593), c(883997877, 3785050280), c(958139571, 3318307427), c(1322822218, 3812723403), c(1537002063, 2003034995), c(1747873779, 3602036899), c(1955562222, 1575990012), c(2024104815, 1125592928), c(2227730452, 2716904306), c(2361852424, 442776044), c(2428436474, 593698344), c(2756734187, 3733110249), c(3204031479, 2999351573), c(3329325298, 3815920427), c(3391569614, 3928383900), c(3515267271, 566280711), c(3940187606, 3454069534), c(4118630271, 4000239992), c(116418474, 1914138554), c(174292421, 2731055270), c(289380356, 3203993006), c(460393269, 320620315), c(685471733, 587496836), c(852142971, 1086792851), c(1017036298, 365543100), c(1126000580, 2618297676), c(1288033470, 3409855158), c(1501505948, 4234509866), c(1607167915, 987167468), c(1816402316, 1246189591)],
                    f = [];
                (function () {
                    for (var m = 0; m < 80; m++) f[m] = c()
                })();
                var d = s.SHA512 = o.extend({
                    _doReset: function () {
                        this._hash = new u.init([new a.init(1779033703, 4089235720), new a.init(3144134277, 2227873595), new a.init(1013904242, 4271175723), new a.init(2773480762, 1595750129), new a.init(1359893119, 2917565137), new a.init(2600822924, 725511199), new a.init(528734635, 4215389547), new a.init(1541459225, 327033209)])
                    },
                    _doProcessBlock: function (m, y) {
                        for (var C = this._hash.words, g = C[0], p = C[1], x = C[2], v = C[3], k = C[4], E = C[5], S = C[6], D = C[7], N = g.high, A = g.low, F = p.high, _ = p.low, P = x.high, U = x.low, j = v.high, W = v.low, Q = k.high, L = k.low, V = E.high, B = E.low, T = S.high, z = S.low, w = D.high, R = D.low, te = N, q = A, ce = F, K = _, ft = P, Ge = U, Yt = j, Fn = W, Ze = Q, Re = L, _n = V, Xt = B, Nn = T, Pn = z, Xn = w, Gt = R, Je = 0; Je < 80; Je++) {
                            var Ve, _t, Gn = f[Je];
                            if (Je < 16) _t = Gn.high = m[y + Je * 2] | 0, Ve = Gn.low = m[y + Je * 2 + 1] | 0;
                            else {
                                var Li = f[Je - 15],
                                    I = Li.high,
                                    H = Li.low,
                                    X = (I >>> 1 | H << 31) ^ (I >>> 8 | H << 24) ^ I >>> 7,
                                    J = (H >>> 1 | I << 31) ^ (H >>> 8 | I << 24) ^ (H >>> 7 | I << 25),
                                    oe = f[Je - 2],
                                    Be = oe.high,
                                    et = oe.low,
                                    Et = (Be >>> 19 | et << 13) ^ (Be << 3 | et >>> 29) ^ Be >>> 6,
                                    Zt = (et >>> 19 | Be << 13) ^ (et << 3 | Be >>> 29) ^ (et >>> 6 | Be << 26),
                                    Jt = f[Je - 7],
                                    Le = Jt.high,
                                    en = Jt.low,
                                    dt = f[Je - 16],
                                    C1 = dt.high,
                                    ps = dt.low;
                                Ve = J + en, _t = X + Le + (Ve >>> 0 < J >>> 0 ? 1 : 0), Ve = Ve + Zt, _t = _t + Et + (Ve >>> 0 < Zt >>> 0 ? 1 : 0), Ve = Ve + ps, _t = _t + C1 + (Ve >>> 0 < ps >>> 0 ? 1 : 0), Gn.high = _t, Gn.low = Ve
                            }
                            var E1 = Ze & _n ^ ~Ze & Nn,
                                hs = Re & Xt ^ ~Re & Pn,
                                w1 = te & ce ^ te & ft ^ ce & ft,
                                k1 = q & K ^ q & Ge ^ K & Ge,
                                B1 = (te >>> 28 | q << 4) ^ (te << 30 | q >>> 2) ^ (te << 25 | q >>> 7),
                                xs = (q >>> 28 | te << 4) ^ (q << 30 | te >>> 2) ^ (q << 25 | te >>> 7),
                                S1 = (Ze >>> 14 | Re << 18) ^ (Ze >>> 18 | Re << 14) ^ (Ze << 23 | Re >>> 9),
                                A1 = (Re >>> 14 | Ze << 18) ^ (Re >>> 18 | Ze << 14) ^ (Re << 23 | Ze >>> 9),
                                gs = h[Je],
                                D1 = gs.high,
                                ms = gs.low,
                                tt = Gt + A1,
                                tn = Xn + S1 + (tt >>> 0 < Gt >>> 0 ? 1 : 0),
                                tt = tt + hs,
                                tn = tn + E1 + (tt >>> 0 < hs >>> 0 ? 1 : 0),
                                tt = tt + ms,
                                tn = tn + D1 + (tt >>> 0 < ms >>> 0 ? 1 : 0),
                                tt = tt + Ve,
                                tn = tn + _t + (tt >>> 0 < Ve >>> 0 ? 1 : 0),
                                ys = xs + k1,
                                F1 = B1 + w1 + (ys >>> 0 < xs >>> 0 ? 1 : 0);
                            Xn = Nn, Gt = Pn, Nn = _n, Pn = Xt, _n = Ze, Xt = Re, Re = Fn + tt | 0, Ze = Yt + tn + (Re >>> 0 < Fn >>> 0 ? 1 : 0) | 0, Yt = ft, Fn = Ge, ft = ce, Ge = K, ce = te, K = q, q = tt + ys | 0, te = tn + F1 + (q >>> 0 < tt >>> 0 ? 1 : 0) | 0
                        }
                        A = g.low = A + q, g.high = N + te + (A >>> 0 < q >>> 0 ? 1 : 0), _ = p.low = _ + K, p.high = F + ce + (_ >>> 0 < K >>> 0 ? 1 : 0), U = x.low = U + Ge, x.high = P + ft + (U >>> 0 < Ge >>> 0 ? 1 : 0), W = v.low = W + Fn, v.high = j + Yt + (W >>> 0 < Fn >>> 0 ? 1 : 0), L = k.low = L + Re, k.high = Q + Ze + (L >>> 0 < Re >>> 0 ? 1 : 0), B = E.low = B + Xt, E.high = V + _n + (B >>> 0 < Xt >>> 0 ? 1 : 0), z = S.low = z + Pn, S.high = T + Nn + (z >>> 0 < Pn >>> 0 ? 1 : 0), R = D.low = R + Gt, D.high = w + Xn + (R >>> 0 < Gt >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function () {
                        var m = this._data,
                            y = m.words,
                            C = this._nDataBytes * 8,
                            g = m.sigBytes * 8;
                        y[g >>> 5] |= 128 << 24 - g % 32, y[(g + 128 >>> 10 << 5) + 30] = Math.floor(C / 4294967296), y[(g + 128 >>> 10 << 5) + 31] = C, m.sigBytes = y.length * 4, this._process();
                        var p = this._hash.toX32();
                        return p
                    },
                    clone: function () {
                        var m = o.clone.call(this);
                        return m._hash = this._hash.clone(), m
                    },
                    blockSize: 1024 / 32
                });
                r.SHA512 = o._createHelper(d), r.HmacSHA512 = o._createHmacHelper(d)
            }(), n.SHA512
        })
    }(pa)), pa.exports
}
var ha = {
        exports: {}
    },
    Nf;

function a8() {
    return Nf || (Nf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), xl(), n1())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.x64,
                    o = i.Word,
                    l = i.WordArray,
                    a = r.algo,
                    u = a.SHA512,
                    s = a.SHA384 = u.extend({
                        _doReset: function () {
                            this._hash = new l.init([new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428)])
                        },
                        _doFinalize: function () {
                            var c = u._doFinalize.call(this);
                            return c.sigBytes -= 16, c
                        }
                    });
                r.SHA384 = u._createHelper(s), r.HmacSHA384 = u._createHmacHelper(s)
            }(), n.SHA384
        })
    }(ha)), ha.exports
}
var xa = {
        exports: {}
    },
    Pf;

function u8() {
    return Pf || (Pf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), xl())
        })(Z, function (n) {
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.WordArray,
                    a = o.Hasher,
                    u = i.x64,
                    s = u.Word,
                    c = i.algo,
                    h = [],
                    f = [],
                    d = [];
                (function () {
                    for (var C = 1, g = 0, p = 0; p < 24; p++) {
                        h[C + 5 * g] = (p + 1) * (p + 2) / 2 % 64;
                        var x = g % 5,
                            v = (2 * C + 3 * g) % 5;
                        C = x, g = v
                    }
                    for (var C = 0; C < 5; C++)
                        for (var g = 0; g < 5; g++) f[C + 5 * g] = g + (2 * C + 3 * g) % 5 * 5;
                    for (var k = 1, E = 0; E < 24; E++) {
                        for (var S = 0, D = 0, N = 0; N < 7; N++) {
                            if (k & 1) {
                                var A = (1 << N) - 1;
                                A < 32 ? D ^= 1 << A : S ^= 1 << A - 32
                            }
                            k & 128 ? k = k << 1 ^ 113 : k <<= 1
                        }
                        d[E] = s.create(S, D)
                    }
                })();
                var m = [];
                (function () {
                    for (var C = 0; C < 25; C++) m[C] = s.create()
                })();
                var y = c.SHA3 = a.extend({
                    cfg: a.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function () {
                        for (var C = this._state = [], g = 0; g < 25; g++) C[g] = new s.init;
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                    },
                    _doProcessBlock: function (C, g) {
                        for (var p = this._state, x = this.blockSize / 2, v = 0; v < x; v++) {
                            var k = C[g + 2 * v],
                                E = C[g + 2 * v + 1];
                            k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
                            var S = p[v];
                            S.high ^= E, S.low ^= k
                        }
                        for (var D = 0; D < 24; D++) {
                            for (var N = 0; N < 5; N++) {
                                for (var A = 0, F = 0, _ = 0; _ < 5; _++) {
                                    var S = p[N + 5 * _];
                                    A ^= S.high, F ^= S.low
                                }
                                var P = m[N];
                                P.high = A, P.low = F
                            }
                            for (var N = 0; N < 5; N++)
                                for (var U = m[(N + 4) % 5], j = m[(N + 1) % 5], W = j.high, Q = j.low, A = U.high ^ (W << 1 | Q >>> 31), F = U.low ^ (Q << 1 | W >>> 31), _ = 0; _ < 5; _++) {
                                    var S = p[N + 5 * _];
                                    S.high ^= A, S.low ^= F
                                }
                            for (var L = 1; L < 25; L++) {
                                var A, F, S = p[L],
                                    V = S.high,
                                    B = S.low,
                                    T = h[L];
                                T < 32 ? (A = V << T | B >>> 32 - T, F = B << T | V >>> 32 - T) : (A = B << T - 32 | V >>> 64 - T, F = V << T - 32 | B >>> 64 - T);
                                var z = m[f[L]];
                                z.high = A, z.low = F
                            }
                            var w = m[0],
                                R = p[0];
                            w.high = R.high, w.low = R.low;
                            for (var N = 0; N < 5; N++)
                                for (var _ = 0; _ < 5; _++) {
                                    var L = N + 5 * _,
                                        S = p[L],
                                        te = m[L],
                                        q = m[(N + 1) % 5 + 5 * _],
                                        ce = m[(N + 2) % 5 + 5 * _];
                                    S.high = te.high ^ ~q.high & ce.high, S.low = te.low ^ ~q.low & ce.low
                                }
                            var S = p[0],
                                K = d[D];
                            S.high ^= K.high, S.low ^= K.low
                        }
                    },
                    _doFinalize: function () {
                        var C = this._data,
                            g = C.words;
                        this._nDataBytes * 8;
                        var p = C.sigBytes * 8,
                            x = this.blockSize * 32;
                        g[p >>> 5] |= 1 << 24 - p % 32, g[(r.ceil((p + 1) / x) * x >>> 5) - 1] |= 128, C.sigBytes = g.length * 4, this._process();
                        for (var v = this._state, k = this.cfg.outputLength / 8, E = k / 8, S = [], D = 0; D < E; D++) {
                            var N = v[D],
                                A = N.high,
                                F = N.low;
                            A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, S.push(F), S.push(A)
                        }
                        return new l.init(S, k)
                    },
                    clone: function () {
                        for (var C = a.clone.call(this), g = C._state = this._state.slice(0), p = 0; p < 25; p++) g[p] = g[p].clone();
                        return C
                    }
                });
                i.SHA3 = a._createHelper(y), i.HmacSHA3 = a._createHmacHelper(y)
            }(Math), n.SHA3
        })
    }(xa)), xa.exports
}
var ga = {
        exports: {}
    },
    Tf;

function s8() {
    return Tf || (Tf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            /** @preserve
            			(c) 2012 by Cédric Mesnil. All rights reserved.

            			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

            			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

            			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            			*/
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.WordArray,
                    a = o.Hasher,
                    u = i.algo,
                    s = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    c = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    h = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    f = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    d = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    m = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                    y = u.RIPEMD160 = a.extend({
                        _doReset: function () {
                            this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function (E, S) {
                            for (var D = 0; D < 16; D++) {
                                var N = S + D,
                                    A = E[N];
                                E[N] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360
                            }
                            var F = this._hash.words,
                                _ = d.words,
                                P = m.words,
                                U = s.words,
                                j = c.words,
                                W = h.words,
                                Q = f.words,
                                L, V, B, T, z, w, R, te, q, ce;
                            w = L = F[0], R = V = F[1], te = B = F[2], q = T = F[3], ce = z = F[4];
                            for (var K, D = 0; D < 80; D += 1) K = L + E[S + U[D]] | 0, D < 16 ? K += C(V, B, T) + _[0] : D < 32 ? K += g(V, B, T) + _[1] : D < 48 ? K += p(V, B, T) + _[2] : D < 64 ? K += x(V, B, T) + _[3] : K += v(V, B, T) + _[4], K = K | 0, K = k(K, W[D]), K = K + z | 0, L = z, z = T, T = k(B, 10), B = V, V = K, K = w + E[S + j[D]] | 0, D < 16 ? K += v(R, te, q) + P[0] : D < 32 ? K += x(R, te, q) + P[1] : D < 48 ? K += p(R, te, q) + P[2] : D < 64 ? K += g(R, te, q) + P[3] : K += C(R, te, q) + P[4], K = K | 0, K = k(K, Q[D]), K = K + ce | 0, w = ce, ce = q, q = k(te, 10), te = R, R = K;
                            K = F[1] + B + q | 0, F[1] = F[2] + T + ce | 0, F[2] = F[3] + z + w | 0, F[3] = F[4] + L + R | 0, F[4] = F[0] + V + te | 0, F[0] = K
                        },
                        _doFinalize: function () {
                            var E = this._data,
                                S = E.words,
                                D = this._nDataBytes * 8,
                                N = E.sigBytes * 8;
                            S[N >>> 5] |= 128 << 24 - N % 32, S[(N + 64 >>> 9 << 4) + 14] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, E.sigBytes = (S.length + 1) * 4, this._process();
                            for (var A = this._hash, F = A.words, _ = 0; _ < 5; _++) {
                                var P = F[_];
                                F[_] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360
                            }
                            return A
                        },
                        clone: function () {
                            var E = a.clone.call(this);
                            return E._hash = this._hash.clone(), E
                        }
                    });

                function C(E, S, D) {
                    return E ^ S ^ D
                }

                function g(E, S, D) {
                    return E & S | ~E & D
                }

                function p(E, S, D) {
                    return (E | ~S) ^ D
                }

                function x(E, S, D) {
                    return E & D | S & ~D
                }

                function v(E, S, D) {
                    return E ^ (S | ~D)
                }

                function k(E, S) {
                    return E << S | E >>> 32 - S
                }
                i.RIPEMD160 = a._createHelper(y), i.HmacRIPEMD160 = a._createHmacHelper(y)
            }(), n.RIPEMD160
        })
    }(ga)), ga.exports
}
var ma = {
        exports: {}
    },
    zf;

function as() {
    return zf || (zf = 1, function (e, t) {
        (function (n, r) {
            e.exports = r(ne())
        })(Z, function (n) {
            (function () {
                var r = n,
                    i = r.lib,
                    o = i.Base,
                    l = r.enc,
                    a = l.Utf8,
                    u = r.algo;
                u.HMAC = o.extend({
                    init: function (s, c) {
                        s = this._hasher = new s.init, typeof c == "string" && (c = a.parse(c));
                        var h = s.blockSize,
                            f = h * 4;
                        c.sigBytes > f && (c = s.finalize(c)), c.clamp();
                        for (var d = this._oKey = c.clone(), m = this._iKey = c.clone(), y = d.words, C = m.words, g = 0; g < h; g++) y[g] ^= 1549556828, C[g] ^= 909522486;
                        d.sigBytes = m.sigBytes = f, this.reset()
                    },
                    reset: function () {
                        var s = this._hasher;
                        s.reset(), s.update(this._iKey)
                    },
                    update: function (s) {
                        return this._hasher.update(s), this
                    },
                    finalize: function (s) {
                        var c = this._hasher,
                            h = c.finalize(s);
                        c.reset();
                        var f = c.finalize(this._oKey.clone().concat(h));
                        return f
                    }
                })
            })()
        })
    }(ma)), ma.exports
}
var ya = {
        exports: {}
    },
    If;

function c8() {
    return If || (If = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), ls(), as())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.Base,
                    l = i.WordArray,
                    a = r.algo,
                    u = a.SHA256,
                    s = a.HMAC,
                    c = a.PBKDF2 = o.extend({
                        cfg: o.extend({
                            keySize: 128 / 32,
                            hasher: u,
                            iterations: 25e4
                        }),
                        init: function (h) {
                            this.cfg = this.cfg.extend(h)
                        },
                        compute: function (h, f) {
                            for (var d = this.cfg, m = s.create(d.hasher, h), y = l.create(), C = l.create([1]), g = y.words, p = C.words, x = d.keySize, v = d.iterations; g.length < x;) {
                                var k = m.update(f).finalize(C);
                                m.reset();
                                for (var E = k.words, S = E.length, D = k, N = 1; N < v; N++) {
                                    D = m.finalize(D), m.reset();
                                    for (var A = D.words, F = 0; F < S; F++) E[F] ^= A[F]
                                }
                                y.concat(k), p[0]++
                            }
                            return y.sigBytes = x * 4, y
                        }
                    });
                r.PBKDF2 = function (h, f, d) {
                    return c.create(d).compute(h, f)
                }
            }(), n.PBKDF2
        })
    }(ya)), ya.exports
}
var va = {
        exports: {}
    },
    bf;

function An() {
    return bf || (bf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), t1(), as())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.Base,
                    l = i.WordArray,
                    a = r.algo,
                    u = a.MD5,
                    s = a.EvpKDF = o.extend({
                        cfg: o.extend({
                            keySize: 128 / 32,
                            hasher: u,
                            iterations: 1
                        }),
                        init: function (c) {
                            this.cfg = this.cfg.extend(c)
                        },
                        compute: function (c, h) {
                            for (var f, d = this.cfg, m = d.hasher.create(), y = l.create(), C = y.words, g = d.keySize, p = d.iterations; C.length < g;) {
                                f && m.update(f), f = m.update(c).finalize(h), m.reset();
                                for (var x = 1; x < p; x++) f = m.finalize(f), m.reset();
                                y.concat(f)
                            }
                            return y.sigBytes = g * 4, y
                        }
                    });
                r.EvpKDF = function (c, h, f) {
                    return s.create(f).compute(c, h)
                }
            }(), n.EvpKDF
        })
    }(va)), va.exports
}
var Ca = {
        exports: {}
    },
    Rf;

function De() {
    return Rf || (Rf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), An())
        })(Z, function (n) {
            n.lib.Cipher || function (r) {
                var i = n,
                    o = i.lib,
                    l = o.Base,
                    a = o.WordArray,
                    u = o.BufferedBlockAlgorithm,
                    s = i.enc;
                s.Utf8;
                var c = s.Base64,
                    h = i.algo,
                    f = h.EvpKDF,
                    d = o.Cipher = u.extend({
                        cfg: l.extend(),
                        createEncryptor: function (A, F) {
                            return this.create(this._ENC_XFORM_MODE, A, F)
                        },
                        createDecryptor: function (A, F) {
                            return this.create(this._DEC_XFORM_MODE, A, F)
                        },
                        init: function (A, F, _) {
                            this.cfg = this.cfg.extend(_), this._xformMode = A, this._key = F, this.reset()
                        },
                        reset: function () {
                            u.reset.call(this), this._doReset()
                        },
                        process: function (A) {
                            return this._append(A), this._process()
                        },
                        finalize: function (A) {
                            A && this._append(A);
                            var F = this._doFinalize();
                            return F
                        },
                        keySize: 128 / 32,
                        ivSize: 128 / 32,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function () {
                            function A(F) {
                                return typeof F == "string" ? N : E
                            }
                            return function (F) {
                                return {
                                    encrypt: function (_, P, U) {
                                        return A(P).encrypt(F, _, P, U)
                                    },
                                    decrypt: function (_, P, U) {
                                        return A(P).decrypt(F, _, P, U)
                                    }
                                }
                            }
                        }()
                    });
                o.StreamCipher = d.extend({
                    _doFinalize: function () {
                        var A = this._process(!0);
                        return A
                    },
                    blockSize: 1
                });
                var m = i.mode = {},
                    y = o.BlockCipherMode = l.extend({
                        createEncryptor: function (A, F) {
                            return this.Encryptor.create(A, F)
                        },
                        createDecryptor: function (A, F) {
                            return this.Decryptor.create(A, F)
                        },
                        init: function (A, F) {
                            this._cipher = A, this._iv = F
                        }
                    }),
                    C = m.CBC = function () {
                        var A = y.extend();
                        A.Encryptor = A.extend({
                            processBlock: function (_, P) {
                                var U = this._cipher,
                                    j = U.blockSize;
                                F.call(this, _, P, j), U.encryptBlock(_, P), this._prevBlock = _.slice(P, P + j)
                            }
                        }), A.Decryptor = A.extend({
                            processBlock: function (_, P) {
                                var U = this._cipher,
                                    j = U.blockSize,
                                    W = _.slice(P, P + j);
                                U.decryptBlock(_, P), F.call(this, _, P, j), this._prevBlock = W
                            }
                        });

                        function F(_, P, U) {
                            var j, W = this._iv;
                            W ? (j = W, this._iv = r) : j = this._prevBlock;
                            for (var Q = 0; Q < U; Q++) _[P + Q] ^= j[Q]
                        }
                        return A
                    }(),
                    g = i.pad = {},
                    p = g.Pkcs7 = {
                        pad: function (A, F) {
                            for (var _ = F * 4, P = _ - A.sigBytes % _, U = P << 24 | P << 16 | P << 8 | P, j = [], W = 0; W < P; W += 4) j.push(U);
                            var Q = a.create(j, P);
                            A.concat(Q)
                        },
                        unpad: function (A) {
                            var F = A.words[A.sigBytes - 1 >>> 2] & 255;
                            A.sigBytes -= F
                        }
                    };
                o.BlockCipher = d.extend({
                    cfg: d.cfg.extend({
                        mode: C,
                        padding: p
                    }),
                    reset: function () {
                        var A;
                        d.reset.call(this);
                        var F = this.cfg,
                            _ = F.iv,
                            P = F.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? A = P.createEncryptor : (A = P.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == A ? this._mode.init(this, _ && _.words) : (this._mode = A.call(P, this, _ && _.words), this._mode.__creator = A)
                    },
                    _doProcessBlock: function (A, F) {
                        this._mode.processBlock(A, F)
                    },
                    _doFinalize: function () {
                        var A, F = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (F.pad(this._data, this.blockSize), A = this._process(!0)) : (A = this._process(!0), F.unpad(A)), A
                    },
                    blockSize: 128 / 32
                });
                var x = o.CipherParams = l.extend({
                        init: function (A) {
                            this.mixIn(A)
                        },
                        toString: function (A) {
                            return (A || this.formatter).stringify(this)
                        }
                    }),
                    v = i.format = {},
                    k = v.OpenSSL = {
                        stringify: function (A) {
                            var F, _ = A.ciphertext,
                                P = A.salt;
                            return P ? F = a.create([1398893684, 1701076831]).concat(P).concat(_) : F = _, F.toString(c)
                        },
                        parse: function (A) {
                            var F, _ = c.parse(A),
                                P = _.words;
                            return P[0] == 1398893684 && P[1] == 1701076831 && (F = a.create(P.slice(2, 4)), P.splice(0, 4), _.sigBytes -= 16), x.create({
                                ciphertext: _,
                                salt: F
                            })
                        }
                    },
                    E = o.SerializableCipher = l.extend({
                        cfg: l.extend({
                            format: k
                        }),
                        encrypt: function (A, F, _, P) {
                            P = this.cfg.extend(P);
                            var U = A.createEncryptor(_, P),
                                j = U.finalize(F),
                                W = U.cfg;
                            return x.create({
                                ciphertext: j,
                                key: _,
                                iv: W.iv,
                                algorithm: A,
                                mode: W.mode,
                                padding: W.padding,
                                blockSize: A.blockSize,
                                formatter: P.format
                            })
                        },
                        decrypt: function (A, F, _, P) {
                            P = this.cfg.extend(P), F = this._parse(F, P.format);
                            var U = A.createDecryptor(_, P).finalize(F.ciphertext);
                            return U
                        },
                        _parse: function (A, F) {
                            return typeof A == "string" ? F.parse(A, this) : A
                        }
                    }),
                    S = i.kdf = {},
                    D = S.OpenSSL = {
                        execute: function (A, F, _, P, U) {
                            if (P || (P = a.random(64 / 8)), U) var j = f.create({
                                keySize: F + _,
                                hasher: U
                            }).compute(A, P);
                            else var j = f.create({
                                keySize: F + _
                            }).compute(A, P);
                            var W = a.create(j.words.slice(F), _ * 4);
                            return j.sigBytes = F * 4, x.create({
                                key: j,
                                iv: W,
                                salt: P
                            })
                        }
                    },
                    N = o.PasswordBasedCipher = E.extend({
                        cfg: E.cfg.extend({
                            kdf: D
                        }),
                        encrypt: function (A, F, _, P) {
                            P = this.cfg.extend(P);
                            var U = P.kdf.execute(_, A.keySize, A.ivSize, P.salt, P.hasher);
                            P.iv = U.iv;
                            var j = E.encrypt.call(this, A, F, U.key, P);
                            return j.mixIn(U), j
                        },
                        decrypt: function (A, F, _, P) {
                            P = this.cfg.extend(P), F = this._parse(F, P.format);
                            var U = P.kdf.execute(_, A.keySize, A.ivSize, F.salt, P.hasher);
                            P.iv = U.iv;
                            var j = E.decrypt.call(this, A, F, U.key, P);
                            return j
                        }
                    })
            }()
        })
    }(Ca)), Ca.exports
}
var Ea = {
        exports: {}
    },
    Lf;

function f8() {
    return Lf || (Lf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.mode.CFB = function () {
                var r = n.lib.BlockCipherMode.extend();
                r.Encryptor = r.extend({
                    processBlock: function (o, l) {
                        var a = this._cipher,
                            u = a.blockSize;
                        i.call(this, o, l, u, a), this._prevBlock = o.slice(l, l + u)
                    }
                }), r.Decryptor = r.extend({
                    processBlock: function (o, l) {
                        var a = this._cipher,
                            u = a.blockSize,
                            s = o.slice(l, l + u);
                        i.call(this, o, l, u, a), this._prevBlock = s
                    }
                });

                function i(o, l, a, u) {
                    var s, c = this._iv;
                    c ? (s = c.slice(0), this._iv = void 0) : s = this._prevBlock, u.encryptBlock(s, 0);
                    for (var h = 0; h < a; h++) o[l + h] ^= s[h]
                }
                return r
            }(), n.mode.CFB
        })
    }(Ea)), Ea.exports
}
var wa = {
        exports: {}
    },
    Mf;

function d8() {
    return Mf || (Mf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.mode.CTR = function () {
                var r = n.lib.BlockCipherMode.extend(),
                    i = r.Encryptor = r.extend({
                        processBlock: function (o, l) {
                            var a = this._cipher,
                                u = a.blockSize,
                                s = this._iv,
                                c = this._counter;
                            s && (c = this._counter = s.slice(0), this._iv = void 0);
                            var h = c.slice(0);
                            a.encryptBlock(h, 0), c[u - 1] = c[u - 1] + 1 | 0;
                            for (var f = 0; f < u; f++) o[l + f] ^= h[f]
                        }
                    });
                return r.Decryptor = i, r
            }(), n.mode.CTR
        })
    }(wa)), wa.exports
}
var ka = {
        exports: {}
    },
    Of;

function p8() {
    return Of || (Of = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            /** @preserve
             * Counter block mode compatible with  Dr Brian Gladman fileenc.c
             * derived from CryptoJS.mode.CTR
             * Jan Hruby jhruby.web@gmail.com
             */
            return n.mode.CTRGladman = function () {
                var r = n.lib.BlockCipherMode.extend();

                function i(a) {
                    if ((a >> 24 & 255) === 255) {
                        var u = a >> 16 & 255,
                            s = a >> 8 & 255,
                            c = a & 255;
                        u === 255 ? (u = 0, s === 255 ? (s = 0, c === 255 ? c = 0 : ++c) : ++s) : ++u, a = 0, a += u << 16, a += s << 8, a += c
                    } else a += 1 << 24;
                    return a
                }

                function o(a) {
                    return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a
                }
                var l = r.Encryptor = r.extend({
                    processBlock: function (a, u) {
                        var s = this._cipher,
                            c = s.blockSize,
                            h = this._iv,
                            f = this._counter;
                        h && (f = this._counter = h.slice(0), this._iv = void 0), o(f);
                        var d = f.slice(0);
                        s.encryptBlock(d, 0);
                        for (var m = 0; m < c; m++) a[u + m] ^= d[m]
                    }
                });
                return r.Decryptor = l, r
            }(), n.mode.CTRGladman
        })
    }(ka)), ka.exports
}
var Ba = {
        exports: {}
    },
    jf;

function h8() {
    return jf || (jf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.mode.OFB = function () {
                var r = n.lib.BlockCipherMode.extend(),
                    i = r.Encryptor = r.extend({
                        processBlock: function (o, l) {
                            var a = this._cipher,
                                u = a.blockSize,
                                s = this._iv,
                                c = this._keystream;
                            s && (c = this._keystream = s.slice(0), this._iv = void 0), a.encryptBlock(c, 0);
                            for (var h = 0; h < u; h++) o[l + h] ^= c[h]
                        }
                    });
                return r.Decryptor = i, r
            }(), n.mode.OFB
        })
    }(Ba)), Ba.exports
}
var Sa = {
        exports: {}
    },
    Hf;

function x8() {
    return Hf || (Hf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.mode.ECB = function () {
                var r = n.lib.BlockCipherMode.extend();
                return r.Encryptor = r.extend({
                    processBlock: function (i, o) {
                        this._cipher.encryptBlock(i, o)
                    }
                }), r.Decryptor = r.extend({
                    processBlock: function (i, o) {
                        this._cipher.decryptBlock(i, o)
                    }
                }), r
            }(), n.mode.ECB
        })
    }(Sa)), Sa.exports
}
var Aa = {
        exports: {}
    },
    Uf;

function g8() {
    return Uf || (Uf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.pad.AnsiX923 = {
                pad: function (r, i) {
                    var o = r.sigBytes,
                        l = i * 4,
                        a = l - o % l,
                        u = o + a - 1;
                    r.clamp(), r.words[u >>> 2] |= a << 24 - u % 4 * 8, r.sigBytes += a
                },
                unpad: function (r) {
                    var i = r.words[r.sigBytes - 1 >>> 2] & 255;
                    r.sigBytes -= i
                }
            }, n.pad.Ansix923
        })
    }(Aa)), Aa.exports
}
var Da = {
        exports: {}
    },
    Vf;

function m8() {
    return Vf || (Vf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.pad.Iso10126 = {
                pad: function (r, i) {
                    var o = i * 4,
                        l = o - r.sigBytes % o;
                    r.concat(n.lib.WordArray.random(l - 1)).concat(n.lib.WordArray.create([l << 24], 1))
                },
                unpad: function (r) {
                    var i = r.words[r.sigBytes - 1 >>> 2] & 255;
                    r.sigBytes -= i
                }
            }, n.pad.Iso10126
        })
    }(Da)), Da.exports
}
var Fa = {
        exports: {}
    },
    $f;

function y8() {
    return $f || ($f = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.pad.Iso97971 = {
                pad: function (r, i) {
                    r.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(r, i)
                },
                unpad: function (r) {
                    n.pad.ZeroPadding.unpad(r), r.sigBytes--
                }
            }, n.pad.Iso97971
        })
    }(Fa)), Fa.exports
}
var _a = {
        exports: {}
    },
    Wf;

function v8() {
    return Wf || (Wf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.pad.ZeroPadding = {
                pad: function (r, i) {
                    var o = i * 4;
                    r.clamp(), r.sigBytes += o - (r.sigBytes % o || o)
                },
                unpad: function (r) {
                    for (var i = r.words, o = r.sigBytes - 1, o = r.sigBytes - 1; o >= 0; o--)
                        if (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
                            r.sigBytes = o + 1;
                            break
                        }
                }
            }, n.pad.ZeroPadding
        })
    }(_a)), _a.exports
}
var Na = {
        exports: {}
    },
    qf;

function C8() {
    return qf || (qf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return n.pad.NoPadding = {
                pad: function () {},
                unpad: function () {}
            }, n.pad.NoPadding
        })
    }(Na)), Na.exports
}
var Pa = {
        exports: {}
    },
    Qf;

function E8() {
    return Qf || (Qf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), De())
        })(Z, function (n) {
            return function (r) {
                var i = n,
                    o = i.lib,
                    l = o.CipherParams,
                    a = i.enc,
                    u = a.Hex,
                    s = i.format;
                s.Hex = {
                    stringify: function (c) {
                        return c.ciphertext.toString(u)
                    },
                    parse: function (c) {
                        var h = u.parse(c);
                        return l.create({
                            ciphertext: h
                        })
                    }
                }
            }(), n.format.Hex
        })
    }(Pa)), Pa.exports
}
var Ta = {
        exports: {}
    },
    Kf;

function w8() {
    return Kf || (Kf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.BlockCipher,
                    l = r.algo,
                    a = [],
                    u = [],
                    s = [],
                    c = [],
                    h = [],
                    f = [],
                    d = [],
                    m = [],
                    y = [],
                    C = [];
                (function () {
                    for (var x = [], v = 0; v < 256; v++) v < 128 ? x[v] = v << 1 : x[v] = v << 1 ^ 283;
                    for (var k = 0, E = 0, v = 0; v < 256; v++) {
                        var S = E ^ E << 1 ^ E << 2 ^ E << 3 ^ E << 4;
                        S = S >>> 8 ^ S & 255 ^ 99, a[k] = S, u[S] = k;
                        var D = x[k],
                            N = x[D],
                            A = x[N],
                            F = x[S] * 257 ^ S * 16843008;
                        s[k] = F << 24 | F >>> 8, c[k] = F << 16 | F >>> 16, h[k] = F << 8 | F >>> 24, f[k] = F;
                        var F = A * 16843009 ^ N * 65537 ^ D * 257 ^ k * 16843008;
                        d[S] = F << 24 | F >>> 8, m[S] = F << 16 | F >>> 16, y[S] = F << 8 | F >>> 24, C[S] = F, k ? (k = D ^ x[x[x[A ^ D]]], E ^= x[x[E]]) : k = E = 1
                    }
                })();
                var g = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    p = l.AES = o.extend({
                        _doReset: function () {
                            var x;
                            if (!(this._nRounds && this._keyPriorReset === this._key)) {
                                for (var v = this._keyPriorReset = this._key, k = v.words, E = v.sigBytes / 4, S = this._nRounds = E + 6, D = (S + 1) * 4, N = this._keySchedule = [], A = 0; A < D; A++) A < E ? N[A] = k[A] : (x = N[A - 1], A % E ? E > 6 && A % E == 4 && (x = a[x >>> 24] << 24 | a[x >>> 16 & 255] << 16 | a[x >>> 8 & 255] << 8 | a[x & 255]) : (x = x << 8 | x >>> 24, x = a[x >>> 24] << 24 | a[x >>> 16 & 255] << 16 | a[x >>> 8 & 255] << 8 | a[x & 255], x ^= g[A / E | 0] << 24), N[A] = N[A - E] ^ x);
                                for (var F = this._invKeySchedule = [], _ = 0; _ < D; _++) {
                                    var A = D - _;
                                    if (_ % 4) var x = N[A];
                                    else var x = N[A - 4];
                                    _ < 4 || A <= 4 ? F[_] = x : F[_] = d[a[x >>> 24]] ^ m[a[x >>> 16 & 255]] ^ y[a[x >>> 8 & 255]] ^ C[a[x & 255]]
                                }
                            }
                        },
                        encryptBlock: function (x, v) {
                            this._doCryptBlock(x, v, this._keySchedule, s, c, h, f, a)
                        },
                        decryptBlock: function (x, v) {
                            var k = x[v + 1];
                            x[v + 1] = x[v + 3], x[v + 3] = k, this._doCryptBlock(x, v, this._invKeySchedule, d, m, y, C, u);
                            var k = x[v + 1];
                            x[v + 1] = x[v + 3], x[v + 3] = k
                        },
                        _doCryptBlock: function (x, v, k, E, S, D, N, A) {
                            for (var F = this._nRounds, _ = x[v] ^ k[0], P = x[v + 1] ^ k[1], U = x[v + 2] ^ k[2], j = x[v + 3] ^ k[3], W = 4, Q = 1; Q < F; Q++) {
                                var L = E[_ >>> 24] ^ S[P >>> 16 & 255] ^ D[U >>> 8 & 255] ^ N[j & 255] ^ k[W++],
                                    V = E[P >>> 24] ^ S[U >>> 16 & 255] ^ D[j >>> 8 & 255] ^ N[_ & 255] ^ k[W++],
                                    B = E[U >>> 24] ^ S[j >>> 16 & 255] ^ D[_ >>> 8 & 255] ^ N[P & 255] ^ k[W++],
                                    T = E[j >>> 24] ^ S[_ >>> 16 & 255] ^ D[P >>> 8 & 255] ^ N[U & 255] ^ k[W++];
                                _ = L, P = V, U = B, j = T
                            }
                            var L = (A[_ >>> 24] << 24 | A[P >>> 16 & 255] << 16 | A[U >>> 8 & 255] << 8 | A[j & 255]) ^ k[W++],
                                V = (A[P >>> 24] << 24 | A[U >>> 16 & 255] << 16 | A[j >>> 8 & 255] << 8 | A[_ & 255]) ^ k[W++],
                                B = (A[U >>> 24] << 24 | A[j >>> 16 & 255] << 16 | A[_ >>> 8 & 255] << 8 | A[P & 255]) ^ k[W++],
                                T = (A[j >>> 24] << 24 | A[_ >>> 16 & 255] << 16 | A[P >>> 8 & 255] << 8 | A[U & 255]) ^ k[W++];
                            x[v] = L, x[v + 1] = V, x[v + 2] = B, x[v + 3] = T
                        },
                        keySize: 256 / 32
                    });
                r.AES = o._createHelper(p)
            }(), n.AES
        })
    }(Ta)), Ta.exports
}
var za = {
        exports: {}
    },
    Yf;

function k8() {
    return Yf || (Yf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    l = i.BlockCipher,
                    a = r.algo,
                    u = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                    s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                    c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                    h = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        50331648: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }],
                    f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                    d = a.DES = l.extend({
                        _doReset: function () {
                            for (var g = this._key, p = g.words, x = [], v = 0; v < 56; v++) {
                                var k = u[v] - 1;
                                x[v] = p[k >>> 5] >>> 31 - k % 32 & 1
                            }
                            for (var E = this._subKeys = [], S = 0; S < 16; S++) {
                                for (var D = E[S] = [], N = c[S], v = 0; v < 24; v++) D[v / 6 | 0] |= x[(s[v] - 1 + N) % 28] << 31 - v % 6, D[4 + (v / 6 | 0)] |= x[28 + (s[v + 24] - 1 + N) % 28] << 31 - v % 6;
                                D[0] = D[0] << 1 | D[0] >>> 31;
                                for (var v = 1; v < 7; v++) D[v] = D[v] >>> (v - 1) * 4 + 3;
                                D[7] = D[7] << 5 | D[7] >>> 27
                            }
                            for (var A = this._invSubKeys = [], v = 0; v < 16; v++) A[v] = E[15 - v]
                        },
                        encryptBlock: function (g, p) {
                            this._doCryptBlock(g, p, this._subKeys)
                        },
                        decryptBlock: function (g, p) {
                            this._doCryptBlock(g, p, this._invSubKeys)
                        },
                        _doCryptBlock: function (g, p, x) {
                            this._lBlock = g[p], this._rBlock = g[p + 1], m.call(this, 4, 252645135), m.call(this, 16, 65535), y.call(this, 2, 858993459), y.call(this, 8, 16711935), m.call(this, 1, 1431655765);
                            for (var v = 0; v < 16; v++) {
                                for (var k = x[v], E = this._lBlock, S = this._rBlock, D = 0, N = 0; N < 8; N++) D |= h[N][((S ^ k[N]) & f[N]) >>> 0];
                                this._lBlock = S, this._rBlock = E ^ D
                            }
                            var A = this._lBlock;
                            this._lBlock = this._rBlock, this._rBlock = A, m.call(this, 1, 1431655765), y.call(this, 8, 16711935), y.call(this, 2, 858993459), m.call(this, 16, 65535), m.call(this, 4, 252645135), g[p] = this._lBlock, g[p + 1] = this._rBlock
                        },
                        keySize: 64 / 32,
                        ivSize: 64 / 32,
                        blockSize: 64 / 32
                    });

                function m(g, p) {
                    var x = (this._lBlock >>> g ^ this._rBlock) & p;
                    this._rBlock ^= x, this._lBlock ^= x << g
                }

                function y(g, p) {
                    var x = (this._rBlock >>> g ^ this._lBlock) & p;
                    this._lBlock ^= x, this._rBlock ^= x << g
                }
                r.DES = l._createHelper(d);
                var C = a.TripleDES = l.extend({
                    _doReset: function () {
                        var g = this._key,
                            p = g.words;
                        if (p.length !== 2 && p.length !== 4 && p.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var x = p.slice(0, 2),
                            v = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4),
                            k = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
                        this._des1 = d.createEncryptor(o.create(x)), this._des2 = d.createEncryptor(o.create(v)), this._des3 = d.createEncryptor(o.create(k))
                    },
                    encryptBlock: function (g, p) {
                        this._des1.encryptBlock(g, p), this._des2.decryptBlock(g, p), this._des3.encryptBlock(g, p)
                    },
                    decryptBlock: function (g, p) {
                        this._des3.decryptBlock(g, p), this._des2.encryptBlock(g, p), this._des1.decryptBlock(g, p)
                    },
                    keySize: 192 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });
                r.TripleDES = l._createHelper(C)
            }(), n.TripleDES
        })
    }(za)), za.exports
}
var Ia = {
        exports: {}
    },
    Xf;

function B8() {
    return Xf || (Xf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.StreamCipher,
                    l = r.algo,
                    a = l.RC4 = o.extend({
                        _doReset: function () {
                            for (var c = this._key, h = c.words, f = c.sigBytes, d = this._S = [], m = 0; m < 256; m++) d[m] = m;
                            for (var m = 0, y = 0; m < 256; m++) {
                                var C = m % f,
                                    g = h[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                                y = (y + d[m] + g) % 256;
                                var p = d[m];
                                d[m] = d[y], d[y] = p
                            }
                            this._i = this._j = 0
                        },
                        _doProcessBlock: function (c, h) {
                            c[h] ^= u.call(this)
                        },
                        keySize: 256 / 32,
                        ivSize: 0
                    });

                function u() {
                    for (var c = this._S, h = this._i, f = this._j, d = 0, m = 0; m < 4; m++) {
                        h = (h + 1) % 256, f = (f + c[h]) % 256;
                        var y = c[h];
                        c[h] = c[f], c[f] = y, d |= c[(c[h] + c[f]) % 256] << 24 - m * 8
                    }
                    return this._i = h, this._j = f, d
                }
                r.RC4 = o._createHelper(a);
                var s = l.RC4Drop = a.extend({
                    cfg: a.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function () {
                        a._doReset.call(this);
                        for (var c = this.cfg.drop; c > 0; c--) u.call(this)
                    }
                });
                r.RC4Drop = o._createHelper(s)
            }(), n.RC4
        })
    }(Ia)), Ia.exports
}
var ba = {
        exports: {}
    },
    Gf;

function S8() {
    return Gf || (Gf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.StreamCipher,
                    l = r.algo,
                    a = [],
                    u = [],
                    s = [],
                    c = l.Rabbit = o.extend({
                        _doReset: function () {
                            for (var f = this._key.words, d = this.cfg.iv, m = 0; m < 4; m++) f[m] = (f[m] << 8 | f[m] >>> 24) & 16711935 | (f[m] << 24 | f[m] >>> 8) & 4278255360;
                            var y = this._X = [f[0], f[3] << 16 | f[2] >>> 16, f[1], f[0] << 16 | f[3] >>> 16, f[2], f[1] << 16 | f[0] >>> 16, f[3], f[2] << 16 | f[1] >>> 16],
                                C = this._C = [f[2] << 16 | f[2] >>> 16, f[0] & 4294901760 | f[1] & 65535, f[3] << 16 | f[3] >>> 16, f[1] & 4294901760 | f[2] & 65535, f[0] << 16 | f[0] >>> 16, f[2] & 4294901760 | f[3] & 65535, f[1] << 16 | f[1] >>> 16, f[3] & 4294901760 | f[0] & 65535];
                            this._b = 0;
                            for (var m = 0; m < 4; m++) h.call(this);
                            for (var m = 0; m < 8; m++) C[m] ^= y[m + 4 & 7];
                            if (d) {
                                var g = d.words,
                                    p = g[0],
                                    x = g[1],
                                    v = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360,
                                    k = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360,
                                    E = v >>> 16 | k & 4294901760,
                                    S = k << 16 | v & 65535;
                                C[0] ^= v, C[1] ^= E, C[2] ^= k, C[3] ^= S, C[4] ^= v, C[5] ^= E, C[6] ^= k, C[7] ^= S;
                                for (var m = 0; m < 4; m++) h.call(this)
                            }
                        },
                        _doProcessBlock: function (f, d) {
                            var m = this._X;
                            h.call(this), a[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16, a[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16, a[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16, a[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
                            for (var y = 0; y < 4; y++) a[y] = (a[y] << 8 | a[y] >>> 24) & 16711935 | (a[y] << 24 | a[y] >>> 8) & 4278255360, f[d + y] ^= a[y]
                        },
                        blockSize: 128 / 32,
                        ivSize: 64 / 32
                    });

                function h() {
                    for (var f = this._X, d = this._C, m = 0; m < 8; m++) u[m] = d[m];
                    d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
                    for (var m = 0; m < 8; m++) {
                        var y = f[m] + d[m],
                            C = y & 65535,
                            g = y >>> 16,
                            p = ((C * C >>> 17) + C * g >>> 15) + g * g,
                            x = ((y & 4294901760) * y | 0) + ((y & 65535) * y | 0);
                        s[m] = p ^ x
                    }
                    f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
                }
                r.Rabbit = o._createHelper(c)
            }(), n.Rabbit
        })
    }(ba)), ba.exports
}
var Ra = {
        exports: {}
    },
    Zf;

function A8() {
    return Zf || (Zf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.StreamCipher,
                    l = r.algo,
                    a = [],
                    u = [],
                    s = [],
                    c = l.RabbitLegacy = o.extend({
                        _doReset: function () {
                            var f = this._key.words,
                                d = this.cfg.iv,
                                m = this._X = [f[0], f[3] << 16 | f[2] >>> 16, f[1], f[0] << 16 | f[3] >>> 16, f[2], f[1] << 16 | f[0] >>> 16, f[3], f[2] << 16 | f[1] >>> 16],
                                y = this._C = [f[2] << 16 | f[2] >>> 16, f[0] & 4294901760 | f[1] & 65535, f[3] << 16 | f[3] >>> 16, f[1] & 4294901760 | f[2] & 65535, f[0] << 16 | f[0] >>> 16, f[2] & 4294901760 | f[3] & 65535, f[1] << 16 | f[1] >>> 16, f[3] & 4294901760 | f[0] & 65535];
                            this._b = 0;
                            for (var C = 0; C < 4; C++) h.call(this);
                            for (var C = 0; C < 8; C++) y[C] ^= m[C + 4 & 7];
                            if (d) {
                                var g = d.words,
                                    p = g[0],
                                    x = g[1],
                                    v = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360,
                                    k = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360,
                                    E = v >>> 16 | k & 4294901760,
                                    S = k << 16 | v & 65535;
                                y[0] ^= v, y[1] ^= E, y[2] ^= k, y[3] ^= S, y[4] ^= v, y[5] ^= E, y[6] ^= k, y[7] ^= S;
                                for (var C = 0; C < 4; C++) h.call(this)
                            }
                        },
                        _doProcessBlock: function (f, d) {
                            var m = this._X;
                            h.call(this), a[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16, a[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16, a[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16, a[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
                            for (var y = 0; y < 4; y++) a[y] = (a[y] << 8 | a[y] >>> 24) & 16711935 | (a[y] << 24 | a[y] >>> 8) & 4278255360, f[d + y] ^= a[y]
                        },
                        blockSize: 128 / 32,
                        ivSize: 64 / 32
                    });

                function h() {
                    for (var f = this._X, d = this._C, m = 0; m < 8; m++) u[m] = d[m];
                    d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
                    for (var m = 0; m < 8; m++) {
                        var y = f[m] + d[m],
                            C = y & 65535,
                            g = y >>> 16,
                            p = ((C * C >>> 17) + C * g >>> 15) + g * g,
                            x = ((y & 4294901760) * y | 0) + ((y & 65535) * y | 0);
                        s[m] = p ^ x
                    }
                    f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
                }
                r.RabbitLegacy = o._createHelper(c)
            }(), n.RabbitLegacy
        })
    }(Ra)), Ra.exports
}
var La = {
        exports: {}
    },
    Jf;

function D8() {
    return Jf || (Jf = 1, function (e, t) {
        (function (n, r, i) {
            e.exports = r(ne(), Kn(), Yn(), An(), De())
        })(Z, function (n) {
            return function () {
                var r = n,
                    i = r.lib,
                    o = i.BlockCipher,
                    l = r.algo;
                const a = 16,
                    u = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
                    s = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
                var c = {
                    pbox: [],
                    sbox: []
                };

                function h(C, g) {
                    let p = g >> 24 & 255,
                        x = g >> 16 & 255,
                        v = g >> 8 & 255,
                        k = g & 255,
                        E = C.sbox[0][p] + C.sbox[1][x];
                    return E = E ^ C.sbox[2][v], E = E + C.sbox[3][k], E
                }

                function f(C, g, p) {
                    let x = g,
                        v = p,
                        k;
                    for (let E = 0; E < a; ++E) x = x ^ C.pbox[E], v = h(C, x) ^ v, k = x, x = v, v = k;
                    return k = x, x = v, v = k, v = v ^ C.pbox[a], x = x ^ C.pbox[a + 1], {
                        left: x,
                        right: v
                    }
                }

                function d(C, g, p) {
                    let x = g,
                        v = p,
                        k;
                    for (let E = a + 1; E > 1; --E) x = x ^ C.pbox[E], v = h(C, x) ^ v, k = x, x = v, v = k;
                    return k = x, x = v, v = k, v = v ^ C.pbox[1], x = x ^ C.pbox[0], {
                        left: x,
                        right: v
                    }
                }

                function m(C, g, p) {
                    for (let S = 0; S < 4; S++) {
                        C.sbox[S] = [];
                        for (let D = 0; D < 256; D++) C.sbox[S][D] = s[S][D]
                    }
                    let x = 0;
                    for (let S = 0; S < a + 2; S++) C.pbox[S] = u[S] ^ g[x], x++, x >= p && (x = 0);
                    let v = 0,
                        k = 0,
                        E = 0;
                    for (let S = 0; S < a + 2; S += 2) E = f(C, v, k), v = E.left, k = E.right, C.pbox[S] = v, C.pbox[S + 1] = k;
                    for (let S = 0; S < 4; S++)
                        for (let D = 0; D < 256; D += 2) E = f(C, v, k), v = E.left, k = E.right, C.sbox[S][D] = v, C.sbox[S][D + 1] = k;
                    return !0
                }
                var y = l.Blowfish = o.extend({
                    _doReset: function () {
                        if (this._keyPriorReset !== this._key) {
                            var C = this._keyPriorReset = this._key,
                                g = C.words,
                                p = C.sigBytes / 4;
                            m(c, g, p)
                        }
                    },
                    encryptBlock: function (C, g) {
                        var p = f(c, C[g], C[g + 1]);
                        C[g] = p.left, C[g + 1] = p.right
                    },
                    decryptBlock: function (C, g) {
                        var p = d(c, C[g], C[g + 1]);
                        C[g] = p.left, C[g + 1] = p.right
                    },
                    blockSize: 64 / 32,
                    keySize: 128 / 32,
                    ivSize: 64 / 32
                });
                r.Blowfish = o._createHelper(y)
            }(), n.Blowfish
        })
    }(La)), La.exports
}(function (e, t) {
    (function (n, r, i) {
        e.exports = r(ne(), xl(), r8(), i8(), Kn(), o8(), Yn(), t1(), ls(), l8(), n1(), a8(), u8(), s8(), as(), c8(), An(), De(), f8(), d8(), p8(), h8(), x8(), g8(), m8(), y8(), v8(), C8(), E8(), w8(), k8(), B8(), S8(), A8(), D8())
    })(Z, function (n) {
        return n
    })
})(e1);
var F8 = e1.exports;
const Wu = Xu(F8),
    _8 = (e, t) => {
        if (!e || !t) throw new Error("Mensagem e chave são obrigatórias");
        return Wu.AES.encrypt(e, t).toString()
    },
    N8 = (e, t) => {
        if (!e || !t) throw new Error("Mensagem e chave são obrigatórias");
        return Wu.AES.decrypt(e, t).toString(Wu.enc.Utf8)
    },
    P8 = () => {
        const [e, t] = de.useState(""), [n, r] = de.useState(""), [i, o] = de.useState(""), [l, a] = de.useState("encrypt"), u = () => {
            try {
                const c = l === "encrypt" ? _8(e, n) : N8(e, n);
                o(c)
            } catch {
                o("Erro ao processar mensagem")
            }
        }, s = () => {
            navigator.clipboard.writeText(i)
        };
        return b.jsxs("div", {
            className: "tool-card",
            children: [b.jsx("h3", {
                className: "text-gray-800 font-semibold mb-4",
                children: "Criptografia"
            }), b.jsxs("div", {
                className: "space-y-4",
                children: [b.jsxs("div", {
                    children: [b.jsxs("div", {
                        className: "flex gap-2 mb-2",
                        children: [b.jsx("button", {
                            onClick: () => a("encrypt"),
                            className: `flex-1 py-1 px-3 rounded-lg text-sm ${l==="encrypt"?"bg-gray-200/70 text-gray-800":"bg-gray-100/50 text-gray-600 hover:bg-gray-200/50"}`,
                            children: "Criptografar"
                        }), b.jsx("button", {
                            onClick: () => a("decrypt"),
                            className: `flex-1 py-1 px-3 rounded-lg text-sm ${l==="decrypt"?"bg-gray-200/70 text-gray-800":"bg-gray-100/50 text-gray-600 hover:bg-gray-200/50"}`,
                            children: "Descriptografar"
                        })]
                    }), b.jsx("textarea", {
                        value: e,
                        onChange: c => t(c.target.value),
                        placeholder: l === "encrypt" ? "Digite a mensagem..." : "Cole a mensagem criptografada...",
                        className: "w-full h-20 bg-gray-100/50 rounded-lg p-2 text-gray-700 text-sm resize-none mb-2 custom-scrollbar"
                    }), b.jsx("input", {
                        type: "password",
                        value: n,
                        onChange: c => r(c.target.value),
                        placeholder: "Chave de criptografia",
                        className: "w-full bg-gray-100/50 rounded-lg py-2 px-3 text-gray-700 text-sm mb-2"
                    }), b.jsx("button", {
                        onClick: u,
                        className: "w-full bg-gray-200/70 hover:bg-gray-300/70 text-gray-800 rounded-lg py-2 text-sm transition-colors",
                        children: l === "encrypt" ? "Criptografar" : "Descriptografar"
                    })]
                }), i && b.jsxs("div", {
                    className: "relative",
                    children: [b.jsx("textarea", {
                        value: i,
                        readOnly: !0,
                        className: "w-full h-20 bg-gray-100/50 rounded-lg p-2 text-gray-700 text-sm resize-none pr-8 custom-scrollbar"
                    }), b.jsx("button", {
                        onClick: s,
                        className: "absolute right-2 top-2 p-1 rounded hover:bg-gray-200/50 text-gray-600",
                        title: "Copiar resultado",
                        children: b.jsx(W0, {
                            className: "w-4 h-4"
                        })
                    })]
                })]
            })]
        })
    },
    T8 = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        " ": "/"
    },
    z8 = e => e.toUpperCase().split("").map(t => T8[t] || t).join(" ").replace(/\s+/g, " "),
    I8 = async (e, t) => {
        const l = u => {
                const s = t.createOscillator(),
                    c = t.createGain();
                return s.connect(c), c.connect(t.destination), s.frequency.value = 800, c.gain.value = .1, s.start(), new Promise(h => {
                    setTimeout(() => {
                        s.stop(), h()
                    }, u)
                })
            },
            a = u => new Promise(s => setTimeout(s, u));
        for (const u of e) {
            switch (u) {
                case ".":
                    await l(60);
                    break;
                case "-":
                    await l(180);
                    break;
                case " ":
                    await a(60 * 3);
                    break;
                case "/":
                    await a(60 * 7);
                    break
            }
            await a(60)
        }
    }, b8 = () => {
        const [e, t] = de.useState(""), [n, r] = de.useState(!1), i = de.useRef(null), o = z8(e), l = async () => {
            if (!(!o || n)) {
                r(!0);
                try {
                    i.current || (i.current = new AudioContext), await I8(o, i.current)
                } catch (u) {
                    console.error("Error playing morse code:", u)
                }
                r(!1)
            }
        }, a = () => {
            navigator.clipboard.writeText(o)
        };
        return b.jsxs("div", {
            className: "tool-card",
            children: [b.jsx("h3", {
                className: "text-gray-800 font-semibold mb-4",
                children: "Código Morse"
            }), b.jsxs("div", {
                className: "space-y-4",
                children: [b.jsx("textarea", {
                    value: e,
                    onChange: u => t(u.target.value),
                    placeholder: "Digite o texto...",
                    className: "w-full h-20 bg-gray-100/50 rounded-lg p-2 text-gray-700 text-sm resize-none custom-scrollbar"
                }), b.jsxs("div", {
                    className: "relative",
                    children: [b.jsx("textarea", {
                        value: o,
                        readOnly: !0,
                        placeholder: "Código Morse...",
                        className: "w-full h-20 bg-gray-100/50 rounded-lg p-2 text-gray-700 font-mono text-sm resize-none pr-8 custom-scrollbar"
                    }), b.jsx("button", {
                        onClick: a,
                        className: "absolute right-2 top-2 p-1 rounded hover:bg-gray-200/50 text-gray-600",
                        title: "Copiar código morse",
                        children: b.jsx(W0, {
                            className: "w-4 h-4"
                        })
                    })]
                }), b.jsx("button", {
                    onClick: l,
                    disabled: !o || n,
                    className: `w-full py-2 px-4 rounded-lg text-sm ${n?"bg-gray-300/50 text-gray-600 cursor-not-allowed":"bg-gray-200/70 hover:bg-gray-300/70 text-gray-800"}`,
                    children: n ? "Reproduzindo..." : "Reproduzir"
                })]
            })]
        })
    }, R8 = () => b.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        children: [b.jsx(Z4, {}), b.jsx(P8, {}), b.jsx(b8, {})]
    }), L8 = () => {
        const [e, t] = de.useState(!1);
        return b.jsxs(b.Fragment, {
            children: [b.jsx("button", {
                onClick: () => t(!0),
                className: "fixed bottom-6 right-6 p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-colors",
                "aria-label": "Abrir ferramentas",
                children: b.jsx(gm, {
                    className: "w-5 h-5 text-gray-50"
                })
            }), e && b.jsx("div", {
                className: "fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: b.jsxs("div", {
                    className: "bg-gray-50 rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-auto",
                    children: [b.jsxs("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [b.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800",
                            children: "Ferramentas"
                        }), b.jsx("button", {
                            onClick: () => t(!1),
                            className: "p-2 hover:bg-gray-100 rounded-lg text-gray-600",
                            children: "Fechar"
                        })]
                    }), b.jsx(R8, {})]
                })
            })]
        })
    }, r1 = "notes-app-data", M8 = {
        id: Date.now().toString(),
        title: "Bem-vindo ao Editor de Notas",
        content: `# Guia de Markdown

Olá! Este é um guia rápido de como usar Markdown para formatar suas notas.

## Títulos
Use # para criar títulos:
# Título 1
## Título 2
### Título 3

## Formatação de Texto
- **Negrito**: Use **dois asteriscos**
- *Itálico*: Use *um asterisco*
- ~~Riscado~~: Use ~~dois tils~~

## Listas
### Lista não ordenada:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Lista numerada:
1. Primeiro item
2. Segundo item
3. Terceiro item

## Links e Imagens
[Link](https://exemplo.com)

## Citações
> Esta é uma citação.
> Você pode usar múltiplas linhas.

## Código
\`\`\`javascript
console.log('Olá, mundo!');
\`\`\`

Experimente estas formatações editando esta nota!`,
        createdAt: new Date,
        updatedAt: new Date
    }, Xr = e => {
        localStorage.setItem(r1, JSON.stringify(e))
    }, O8 = () => {
        const e = localStorage.getItem(r1);
        if (!e) {
            const t = [M8];
            return Xr(t), t
        }
        return JSON.parse(e)
    };
var bi = {},
    j8 = function () {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    i1 = {},
    ct = {};
let us;
const H8 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
ct.getSymbolSize = function (t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17
};
ct.getSymbolTotalCodewords = function (t) {
    return H8[t]
};
ct.getBCHDigit = function (e) {
    let t = 0;
    for (; e !== 0;) t++, e >>>= 1;
    return t
};
ct.setToSJISFunction = function (t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    us = t
};
ct.isKanjiModeEnabled = function () {
    return typeof us < "u"
};
ct.toSJIS = function (t) {
    return us(t)
};
var gl = {};
(function (e) {
    e.L = {
        bit: 1
    }, e.M = {
        bit: 0
    }, e.Q = {
        bit: 3
    }, e.H = {
        bit: 2
    };

    function t(n) {
        if (typeof n != "string") throw new Error("Param is not a string");
        switch (n.toLowerCase()) {
            case "l":
            case "low":
                return e.L;
            case "m":
            case "medium":
                return e.M;
            case "q":
            case "quartile":
                return e.Q;
            case "h":
            case "high":
                return e.H;
            default:
                throw new Error("Unknown EC Level: " + n)
        }
    }
    e.isValid = function (r) {
        return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
    }, e.from = function (r, i) {
        if (e.isValid(r)) return r;
        try {
            return t(r)
        } catch {
            return i
        }
    }
})(gl);

function o1() {
    this.buffer = [], this.length = 0
}
o1.prototype = {
    get: function (e) {
        const t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
    },
    put: function (e, t) {
        for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
    },
    getLengthInBits: function () {
        return this.length
    },
    putBit: function (e) {
        const t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var U8 = o1;

function Ri(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
Ri.prototype.set = function (e, t, n, r) {
    const i = e * this.size + t;
    this.data[i] = n, r && (this.reservedBit[i] = !0)
};
Ri.prototype.get = function (e, t) {
    return this.data[e * this.size + t]
};
Ri.prototype.xor = function (e, t, n) {
    this.data[e * this.size + t] ^= n
};
Ri.prototype.isReserved = function (e, t) {
    return this.reservedBit[e * this.size + t]
};
var V8 = Ri,
    l1 = {};
(function (e) {
    const t = ct.getSymbolSize;
    e.getRowColCoords = function (r) {
        if (r === 1) return [];
        const i = Math.floor(r / 7) + 2,
            o = t(r),
            l = o === 145 ? 26 : Math.ceil((o - 13) / (2 * i - 2)) * 2,
            a = [o - 7];
        for (let u = 1; u < i - 1; u++) a[u] = a[u - 1] - l;
        return a.push(6), a.reverse()
    }, e.getPositions = function (r) {
        const i = [],
            o = e.getRowColCoords(r),
            l = o.length;
        for (let a = 0; a < l; a++)
            for (let u = 0; u < l; u++) a === 0 && u === 0 || a === 0 && u === l - 1 || a === l - 1 && u === 0 || i.push([o[a], o[u]]);
        return i
    }
})(l1);
var a1 = {};
const $8 = ct.getSymbolSize,
    ed = 7;
a1.getPositions = function (t) {
    const n = $8(t);
    return [[0, 0], [n - ed, 0], [0, n - ed]]
};
var u1 = {};
(function (e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const t = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    e.isValid = function (i) {
        return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7
    }, e.from = function (i) {
        return e.isValid(i) ? parseInt(i, 10) : void 0
    }, e.getPenaltyN1 = function (i) {
        const o = i.size;
        let l = 0,
            a = 0,
            u = 0,
            s = null,
            c = null;
        for (let h = 0; h < o; h++) {
            a = u = 0, s = c = null;
            for (let f = 0; f < o; f++) {
                let d = i.get(h, f);
                d === s ? a++ : (a >= 5 && (l += t.N1 + (a - 5)), s = d, a = 1), d = i.get(f, h), d === c ? u++ : (u >= 5 && (l += t.N1 + (u - 5)), c = d, u = 1)
            }
            a >= 5 && (l += t.N1 + (a - 5)), u >= 5 && (l += t.N1 + (u - 5))
        }
        return l
    }, e.getPenaltyN2 = function (i) {
        const o = i.size;
        let l = 0;
        for (let a = 0; a < o - 1; a++)
            for (let u = 0; u < o - 1; u++) {
                const s = i.get(a, u) + i.get(a, u + 1) + i.get(a + 1, u) + i.get(a + 1, u + 1);
                (s === 4 || s === 0) && l++
            }
        return l * t.N2
    }, e.getPenaltyN3 = function (i) {
        const o = i.size;
        let l = 0,
            a = 0,
            u = 0;
        for (let s = 0; s < o; s++) {
            a = u = 0;
            for (let c = 0; c < o; c++) a = a << 1 & 2047 | i.get(s, c), c >= 10 && (a === 1488 || a === 93) && l++, u = u << 1 & 2047 | i.get(c, s), c >= 10 && (u === 1488 || u === 93) && l++
        }
        return l * t.N3
    }, e.getPenaltyN4 = function (i) {
        let o = 0;
        const l = i.data.length;
        for (let u = 0; u < l; u++) o += i.data[u];
        return Math.abs(Math.ceil(o * 100 / l / 5) - 10) * t.N4
    };

    function n(r, i, o) {
        switch (r) {
            case e.Patterns.PATTERN000:
                return (i + o) % 2 === 0;
            case e.Patterns.PATTERN001:
                return i % 2 === 0;
            case e.Patterns.PATTERN010:
                return o % 3 === 0;
            case e.Patterns.PATTERN011:
                return (i + o) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(o / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return i * o % 2 + i * o % 3 === 0;
            case e.Patterns.PATTERN110:
                return (i * o % 2 + i * o % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (i * o % 3 + (i + o) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + r)
        }
    }
    e.applyMask = function (i, o) {
        const l = o.size;
        for (let a = 0; a < l; a++)
            for (let u = 0; u < l; u++) o.isReserved(u, a) || o.xor(u, a, n(i, u, a))
    }, e.getBestMask = function (i, o) {
        const l = Object.keys(e.Patterns).length;
        let a = 0,
            u = 1 / 0;
        for (let s = 0; s < l; s++) {
            o(s), e.applyMask(s, i);
            const c = e.getPenaltyN1(i) + e.getPenaltyN2(i) + e.getPenaltyN3(i) + e.getPenaltyN4(i);
            e.applyMask(s, i), c < u && (u = c, a = s)
        }
        return a
    }
})(u1);
var ml = {};
const fn = gl,
    io = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    oo = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
ml.getBlocksCount = function (t, n) {
    switch (n) {
        case fn.L:
            return io[(t - 1) * 4 + 0];
        case fn.M:
            return io[(t - 1) * 4 + 1];
        case fn.Q:
            return io[(t - 1) * 4 + 2];
        case fn.H:
            return io[(t - 1) * 4 + 3];
        default:
            return
    }
};
ml.getTotalCodewordsCount = function (t, n) {
    switch (n) {
        case fn.L:
            return oo[(t - 1) * 4 + 0];
        case fn.M:
            return oo[(t - 1) * 4 + 1];
        case fn.Q:
            return oo[(t - 1) * 4 + 2];
        case fn.H:
            return oo[(t - 1) * 4 + 3];
        default:
            return
    }
};
var s1 = {},
    yl = {};
const ui = new Uint8Array(512),
    Ko = new Uint8Array(256);
(function () {
    let t = 1;
    for (let n = 0; n < 255; n++) ui[n] = t, Ko[t] = n, t <<= 1, t & 256 && (t ^= 285);
    for (let n = 255; n < 512; n++) ui[n] = ui[n - 255]
})();
yl.log = function (t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return Ko[t]
};
yl.exp = function (t) {
    return ui[t]
};
yl.mul = function (t, n) {
    return t === 0 || n === 0 ? 0 : ui[Ko[t] + Ko[n]]
};
(function (e) {
    const t = yl;
    e.mul = function (r, i) {
        const o = new Uint8Array(r.length + i.length - 1);
        for (let l = 0; l < r.length; l++)
            for (let a = 0; a < i.length; a++) o[l + a] ^= t.mul(r[l], i[a]);
        return o
    }, e.mod = function (r, i) {
        let o = new Uint8Array(r);
        for (; o.length - i.length >= 0;) {
            const l = o[0];
            for (let u = 0; u < i.length; u++) o[u] ^= t.mul(i[u], l);
            let a = 0;
            for (; a < o.length && o[a] === 0;) a++;
            o = o.slice(a)
        }
        return o
    }, e.generateECPolynomial = function (r) {
        let i = new Uint8Array([1]);
        for (let o = 0; o < r; o++) i = e.mul(i, new Uint8Array([1, t.exp(o)]));
        return i
    }
})(s1);
const c1 = s1;

function ss(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
ss.prototype.initialize = function (t) {
    this.degree = t, this.genPoly = c1.generateECPolynomial(this.degree)
};
ss.prototype.encode = function (t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const n = new Uint8Array(t.length + this.degree);
    n.set(t);
    const r = c1.mod(n, this.genPoly),
        i = this.degree - r.length;
    if (i > 0) {
        const o = new Uint8Array(this.degree);
        return o.set(r, i), o
    }
    return r
};
var W8 = ss,
    f1 = {},
    Dn = {},
    cs = {};
cs.isValid = function (t) {
    return !isNaN(t) && t >= 1 && t <= 40
};
var Mt = {};
const d1 = "[0-9]+",
    q8 = "[A-Z $%*+\\-./:]+";
let Di = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Di = Di.replace(/u/g, "\\u");
const Q8 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Di + `)(?:.|[\r
]))+`;
Mt.KANJI = new RegExp(Di, "g");
Mt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Mt.BYTE = new RegExp(Q8, "g");
Mt.NUMERIC = new RegExp(d1, "g");
Mt.ALPHANUMERIC = new RegExp(q8, "g");
const K8 = new RegExp("^" + Di + "$"),
    Y8 = new RegExp("^" + d1 + "$"),
    X8 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Mt.testKanji = function (t) {
    return K8.test(t)
};
Mt.testNumeric = function (t) {
    return Y8.test(t)
};
Mt.testAlphanumeric = function (t) {
    return X8.test(t)
};
(function (e) {
    const t = cs,
        n = Mt;
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {
        bit: -1
    }, e.getCharCountIndicator = function (o, l) {
        if (!o.ccBits) throw new Error("Invalid mode: " + o);
        if (!t.isValid(l)) throw new Error("Invalid version: " + l);
        return l >= 1 && l < 10 ? o.ccBits[0] : l < 27 ? o.ccBits[1] : o.ccBits[2]
    }, e.getBestModeForData = function (o) {
        return n.testNumeric(o) ? e.NUMERIC : n.testAlphanumeric(o) ? e.ALPHANUMERIC : n.testKanji(o) ? e.KANJI : e.BYTE
    }, e.toString = function (o) {
        if (o && o.id) return o.id;
        throw new Error("Invalid mode")
    }, e.isValid = function (o) {
        return o && o.bit && o.ccBits
    };

    function r(i) {
        if (typeof i != "string") throw new Error("Param is not a string");
        switch (i.toLowerCase()) {
            case "numeric":
                return e.NUMERIC;
            case "alphanumeric":
                return e.ALPHANUMERIC;
            case "kanji":
                return e.KANJI;
            case "byte":
                return e.BYTE;
            default:
                throw new Error("Unknown mode: " + i)
        }
    }
    e.from = function (o, l) {
        if (e.isValid(o)) return o;
        try {
            return r(o)
        } catch {
            return l
        }
    }
})(Dn);
(function (e) {
    const t = ct,
        n = ml,
        r = gl,
        i = Dn,
        o = cs,
        l = 7973,
        a = t.getBCHDigit(l);

    function u(f, d, m) {
        for (let y = 1; y <= 40; y++)
            if (d <= e.getCapacity(y, m, f)) return y
    }

    function s(f, d) {
        return i.getCharCountIndicator(f, d) + 4
    }

    function c(f, d) {
        let m = 0;
        return f.forEach(function (y) {
            const C = s(y.mode, d);
            m += C + y.getBitsLength()
        }), m
    }

    function h(f, d) {
        for (let m = 1; m <= 40; m++)
            if (c(f, m) <= e.getCapacity(m, d, i.MIXED)) return m
    }
    e.from = function (d, m) {
        return o.isValid(d) ? parseInt(d, 10) : m
    }, e.getCapacity = function (d, m, y) {
        if (!o.isValid(d)) throw new Error("Invalid QR Code version");
        typeof y > "u" && (y = i.BYTE);
        const C = t.getSymbolTotalCodewords(d),
            g = n.getTotalCodewordsCount(d, m),
            p = (C - g) * 8;
        if (y === i.MIXED) return p;
        const x = p - s(y, d);
        switch (y) {
            case i.NUMERIC:
                return Math.floor(x / 10 * 3);
            case i.ALPHANUMERIC:
                return Math.floor(x / 11 * 2);
            case i.KANJI:
                return Math.floor(x / 13);
            case i.BYTE:
            default:
                return Math.floor(x / 8)
        }
    }, e.getBestVersionForData = function (d, m) {
        let y;
        const C = r.from(m, r.M);
        if (Array.isArray(d)) {
            if (d.length > 1) return h(d, C);
            if (d.length === 0) return 1;
            y = d[0]
        } else y = d;
        return u(y.mode, y.getLength(), C)
    }, e.getEncodedBits = function (d) {
        if (!o.isValid(d) || d < 7) throw new Error("Invalid QR Code version");
        let m = d << 12;
        for (; t.getBCHDigit(m) - a >= 0;) m ^= l << t.getBCHDigit(m) - a;
        return d << 12 | m
    }
})(f1);
var p1 = {};
const qu = ct,
    h1 = 1335,
    G8 = 21522,
    td = qu.getBCHDigit(h1);
p1.getEncodedBits = function (t, n) {
    const r = t.bit << 3 | n;
    let i = r << 10;
    for (; qu.getBCHDigit(i) - td >= 0;) i ^= h1 << qu.getBCHDigit(i) - td;
    return (r << 10 | i) ^ G8
};
var x1 = {};
const Z8 = Dn;

function Dr(e) {
    this.mode = Z8.NUMERIC, this.data = e.toString()
}
Dr.getBitsLength = function (t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
Dr.prototype.getLength = function () {
    return this.data.length
};
Dr.prototype.getBitsLength = function () {
    return Dr.getBitsLength(this.data.length)
};
Dr.prototype.write = function (t) {
    let n, r, i;
    for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), i = parseInt(r, 10), t.put(i, 10);
    const o = this.data.length - n;
    o > 0 && (r = this.data.substr(n), i = parseInt(r, 10), t.put(i, o * 3 + 1))
};
var J8 = Dr;
const e3 = Dn,
    Ma = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function Fr(e) {
    this.mode = e3.ALPHANUMERIC, this.data = e
}
Fr.getBitsLength = function (t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
Fr.prototype.getLength = function () {
    return this.data.length
};
Fr.prototype.getBitsLength = function () {
    return Fr.getBitsLength(this.data.length)
};
Fr.prototype.write = function (t) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
        let r = Ma.indexOf(this.data[n]) * 45;
        r += Ma.indexOf(this.data[n + 1]), t.put(r, 11)
    }
    this.data.length % 2 && t.put(Ma.indexOf(this.data[n]), 6)
};
var t3 = Fr;
const n3 = Dn;

function _r(e) {
    this.mode = n3.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
}
_r.getBitsLength = function (t) {
    return t * 8
};
_r.prototype.getLength = function () {
    return this.data.length
};
_r.prototype.getBitsLength = function () {
    return _r.getBitsLength(this.data.length)
};
_r.prototype.write = function (e) {
    for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var r3 = _r;
const i3 = Dn,
    o3 = ct;

function Nr(e) {
    this.mode = i3.KANJI, this.data = e
}
Nr.getBitsLength = function (t) {
    return t * 13
};
Nr.prototype.getLength = function () {
    return this.data.length
};
Nr.prototype.getBitsLength = function () {
    return Nr.getBitsLength(this.data.length)
};
Nr.prototype.write = function (e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
        let n = o3.toSJIS(this.data[t]);
        if (n >= 33088 && n <= 40956) n -= 33088;
        else if (n >= 57408 && n <= 60351) n -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
        n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
    }
};
var l3 = Nr,
    g1 = {
        exports: {}
    };
(function (e) {
    var t = {
        single_source_shortest_paths: function (n, r, i) {
            var o = {},
                l = {};
            l[r] = 0;
            var a = t.PriorityQueue.make();
            a.push(r, 0);
            for (var u, s, c, h, f, d, m, y, C; !a.empty();) {
                u = a.pop(), s = u.value, h = u.cost, f = n[s] || {};
                for (c in f) f.hasOwnProperty(c) && (d = f[c], m = h + d, y = l[c], C = typeof l[c] > "u", (C || y > m) && (l[c] = m, a.push(c, m), o[c] = s))
            }
            if (typeof i < "u" && typeof l[i] > "u") {
                var g = ["Could not find a path from ", r, " to ", i, "."].join("");
                throw new Error(g)
            }
            return o
        },
        extract_shortest_path_from_predecessor_list: function (n, r) {
            for (var i = [], o = r; o;) i.push(o), n[o], o = n[o];
            return i.reverse(), i
        },
        find_path: function (n, r, i) {
            var o = t.single_source_shortest_paths(n, r, i);
            return t.extract_shortest_path_from_predecessor_list(o, i)
        },
        PriorityQueue: {
            make: function (n) {
                var r = t.PriorityQueue,
                    i = {},
                    o;
                n = n || {};
                for (o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                return i.queue = [], i.sorter = n.sorter || r.default_sorter, i
            },
            default_sorter: function (n, r) {
                return n.cost - r.cost
            },
            push: function (n, r) {
                var i = {
                    value: n,
                    cost: r
                };
                this.queue.push(i), this.queue.sort(this.sorter)
            },
            pop: function () {
                return this.queue.shift()
            },
            empty: function () {
                return this.queue.length === 0
            }
        }
    };
    e.exports = t
})(g1);
var a3 = g1.exports;
(function (e) {
    const t = Dn,
        n = J8,
        r = t3,
        i = r3,
        o = l3,
        l = Mt,
        a = ct,
        u = a3;

    function s(g) {
        return unescape(encodeURIComponent(g)).length
    }

    function c(g, p, x) {
        const v = [];
        let k;
        for (;
            (k = g.exec(x)) !== null;) v.push({
            data: k[0],
            index: k.index,
            mode: p,
            length: k[0].length
        });
        return v
    }

    function h(g) {
        const p = c(l.NUMERIC, t.NUMERIC, g),
            x = c(l.ALPHANUMERIC, t.ALPHANUMERIC, g);
        let v, k;
        return a.isKanjiModeEnabled() ? (v = c(l.BYTE, t.BYTE, g), k = c(l.KANJI, t.KANJI, g)) : (v = c(l.BYTE_KANJI, t.BYTE, g), k = []), p.concat(x, v, k).sort(function (S, D) {
            return S.index - D.index
        }).map(function (S) {
            return {
                data: S.data,
                mode: S.mode,
                length: S.length
            }
        })
    }

    function f(g, p) {
        switch (p) {
            case t.NUMERIC:
                return n.getBitsLength(g);
            case t.ALPHANUMERIC:
                return r.getBitsLength(g);
            case t.KANJI:
                return o.getBitsLength(g);
            case t.BYTE:
                return i.getBitsLength(g)
        }
    }

    function d(g) {
        return g.reduce(function (p, x) {
            const v = p.length - 1 >= 0 ? p[p.length - 1] : null;
            return v && v.mode === x.mode ? (p[p.length - 1].data += x.data, p) : (p.push(x), p)
        }, [])
    }

    function m(g) {
        const p = [];
        for (let x = 0; x < g.length; x++) {
            const v = g[x];
            switch (v.mode) {
                case t.NUMERIC:
                    p.push([v, {
                        data: v.data,
                        mode: t.ALPHANUMERIC,
                        length: v.length
                    }, {
                        data: v.data,
                        mode: t.BYTE,
                        length: v.length
                    }]);
                    break;
                case t.ALPHANUMERIC:
                    p.push([v, {
                        data: v.data,
                        mode: t.BYTE,
                        length: v.length
                    }]);
                    break;
                case t.KANJI:
                    p.push([v, {
                        data: v.data,
                        mode: t.BYTE,
                        length: s(v.data)
                    }]);
                    break;
                case t.BYTE:
                    p.push([{
                        data: v.data,
                        mode: t.BYTE,
                        length: s(v.data)
                    }])
            }
        }
        return p
    }

    function y(g, p) {
        const x = {},
            v = {
                start: {}
            };
        let k = ["start"];
        for (let E = 0; E < g.length; E++) {
            const S = g[E],
                D = [];
            for (let N = 0; N < S.length; N++) {
                const A = S[N],
                    F = "" + E + N;
                D.push(F), x[F] = {
                    node: A,
                    lastCount: 0
                }, v[F] = {};
                for (let _ = 0; _ < k.length; _++) {
                    const P = k[_];
                    x[P] && x[P].node.mode === A.mode ? (v[P][F] = f(x[P].lastCount + A.length, A.mode) - f(x[P].lastCount, A.mode), x[P].lastCount += A.length) : (x[P] && (x[P].lastCount = A.length), v[P][F] = f(A.length, A.mode) + 4 + t.getCharCountIndicator(A.mode, p))
                }
            }
            k = D
        }
        for (let E = 0; E < k.length; E++) v[k[E]].end = 0;
        return {
            map: v,
            table: x
        }
    }

    function C(g, p) {
        let x;
        const v = t.getBestModeForData(g);
        if (x = t.from(p, v), x !== t.BYTE && x.bit < v.bit) throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(x) + `.
 Suggested mode is: ` + t.toString(v));
        switch (x === t.KANJI && !a.isKanjiModeEnabled() && (x = t.BYTE), x) {
            case t.NUMERIC:
                return new n(g);
            case t.ALPHANUMERIC:
                return new r(g);
            case t.KANJI:
                return new o(g);
            case t.BYTE:
                return new i(g)
        }
    }
    e.fromArray = function (p) {
        return p.reduce(function (x, v) {
            return typeof v == "string" ? x.push(C(v, null)) : v.data && x.push(C(v.data, v.mode)), x
        }, [])
    }, e.fromString = function (p, x) {
        const v = h(p, a.isKanjiModeEnabled()),
            k = m(v),
            E = y(k, x),
            S = u.find_path(E.map, "start", "end"),
            D = [];
        for (let N = 1; N < S.length - 1; N++) D.push(E.table[S[N]].node);
        return e.fromArray(d(D))
    }, e.rawSplit = function (p) {
        return e.fromArray(h(p, a.isKanjiModeEnabled()))
    }
})(x1);
const vl = ct,
    Oa = gl,
    u3 = U8,
    s3 = V8,
    c3 = l1,
    f3 = a1,
    Qu = u1,
    Ku = ml,
    d3 = W8,
    Yo = f1,
    p3 = p1,
    h3 = Dn,
    ja = x1;

function x3(e, t) {
    const n = e.size,
        r = f3.getPositions(t);
    for (let i = 0; i < r.length; i++) {
        const o = r[i][0],
            l = r[i][1];
        for (let a = -1; a <= 7; a++)
            if (!(o + a <= -1 || n <= o + a))
                for (let u = -1; u <= 7; u++) l + u <= -1 || n <= l + u || (a >= 0 && a <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? e.set(o + a, l + u, !0, !0) : e.set(o + a, l + u, !1, !0))
    }
}

function g3(e) {
    const t = e.size;
    for (let n = 8; n < t - 8; n++) {
        const r = n % 2 === 0;
        e.set(n, 6, r, !0), e.set(6, n, r, !0)
    }
}

function m3(e, t) {
    const n = c3.getPositions(t);
    for (let r = 0; r < n.length; r++) {
        const i = n[r][0],
            o = n[r][1];
        for (let l = -2; l <= 2; l++)
            for (let a = -2; a <= 2; a++) l === -2 || l === 2 || a === -2 || a === 2 || l === 0 && a === 0 ? e.set(i + l, o + a, !0, !0) : e.set(i + l, o + a, !1, !0)
    }
}

function y3(e, t) {
    const n = e.size,
        r = Yo.getEncodedBits(t);
    let i, o, l;
    for (let a = 0; a < 18; a++) i = Math.floor(a / 3), o = a % 3 + n - 8 - 3, l = (r >> a & 1) === 1, e.set(i, o, l, !0), e.set(o, i, l, !0)
}

function Ha(e, t, n) {
    const r = e.size,
        i = p3.getEncodedBits(t, n);
    let o, l;
    for (o = 0; o < 15; o++) l = (i >> o & 1) === 1, o < 6 ? e.set(o, 8, l, !0) : o < 8 ? e.set(o + 1, 8, l, !0) : e.set(r - 15 + o, 8, l, !0), o < 8 ? e.set(8, r - o - 1, l, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, l, !0) : e.set(8, 15 - o - 1, l, !0);
    e.set(r - 8, 8, 1, !0)
}

function v3(e, t) {
    const n = e.size;
    let r = -1,
        i = n - 1,
        o = 7,
        l = 0;
    for (let a = n - 1; a > 0; a -= 2)
        for (a === 6 && a--;;) {
            for (let u = 0; u < 2; u++)
                if (!e.isReserved(i, a - u)) {
                    let s = !1;
                    l < t.length && (s = (t[l] >>> o & 1) === 1), e.set(i, a - u, s), o--, o === -1 && (l++, o = 7)
                } if (i += r, i < 0 || n <= i) {
                i -= r, r = -r;
                break
            }
        }
}

function C3(e, t, n) {
    const r = new u3;
    n.forEach(function (u) {
        r.put(u.mode.bit, 4), r.put(u.getLength(), h3.getCharCountIndicator(u.mode, e)), u.write(r)
    });
    const i = vl.getSymbolTotalCodewords(e),
        o = Ku.getTotalCodewordsCount(e, t),
        l = (i - o) * 8;
    for (r.getLengthInBits() + 4 <= l && r.put(0, 4); r.getLengthInBits() % 8 !== 0;) r.putBit(0);
    const a = (l - r.getLengthInBits()) / 8;
    for (let u = 0; u < a; u++) r.put(u % 2 ? 17 : 236, 8);
    return E3(r, e, t)
}

function E3(e, t, n) {
    const r = vl.getSymbolTotalCodewords(t),
        i = Ku.getTotalCodewordsCount(t, n),
        o = r - i,
        l = Ku.getBlocksCount(t, n),
        a = r % l,
        u = l - a,
        s = Math.floor(r / l),
        c = Math.floor(o / l),
        h = c + 1,
        f = s - c,
        d = new d3(f);
    let m = 0;
    const y = new Array(l),
        C = new Array(l);
    let g = 0;
    const p = new Uint8Array(e.buffer);
    for (let S = 0; S < l; S++) {
        const D = S < u ? c : h;
        y[S] = p.slice(m, m + D), C[S] = d.encode(y[S]), m += D, g = Math.max(g, D)
    }
    const x = new Uint8Array(r);
    let v = 0,
        k, E;
    for (k = 0; k < g; k++)
        for (E = 0; E < l; E++) k < y[E].length && (x[v++] = y[E][k]);
    for (k = 0; k < f; k++)
        for (E = 0; E < l; E++) x[v++] = C[E][k];
    return x
}

function w3(e, t, n, r) {
    let i;
    if (Array.isArray(e)) i = ja.fromArray(e);
    else if (typeof e == "string") {
        let s = t;
        if (!s) {
            const c = ja.rawSplit(e);
            s = Yo.getBestVersionForData(c, n)
        }
        i = ja.fromString(e, s || 40)
    } else throw new Error("Invalid data");
    const o = Yo.getBestVersionForData(i, n);
    if (!o) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = o;
    else if (t < o) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`);
    const l = C3(t, n, i),
        a = vl.getSymbolSize(t),
        u = new s3(a);
    return x3(u, t), g3(u), m3(u, t), Ha(u, n, 0), t >= 7 && y3(u, t), v3(u, l), isNaN(r) && (r = Qu.getBestMask(u, Ha.bind(null, u, n))), Qu.applyMask(r, u), Ha(u, n, r), {
        modules: u,
        version: t,
        errorCorrectionLevel: n,
        maskPattern: r,
        segments: i
    }
}
i1.create = function (t, n) {
    if (typeof t > "u" || t === "") throw new Error("No input text");
    let r = Oa.M,
        i, o;
    return typeof n < "u" && (r = Oa.from(n.errorCorrectionLevel, Oa.M), i = Yo.from(n.version), o = Qu.from(n.maskPattern), n.toSJISFunc && vl.setToSJISFunction(n.toSJISFunc)), w3(t, i, r, o)
};
var m1 = {},
    fs = {};
(function (e) {
    function t(n) {
        if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
        let r = n.slice().replace("#", "").split("");
        if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + n);
        (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function (o) {
            return [o, o]
        }))), r.length === 6 && r.push("F", "F");
        const i = parseInt(r.join(""), 16);
        return {
            r: i >> 24 & 255,
            g: i >> 16 & 255,
            b: i >> 8 & 255,
            a: i & 255,
            hex: "#" + r.slice(0, 6).join("")
        }
    }
    e.getOptions = function (r) {
        r || (r = {}), r.color || (r.color = {});
        const i = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin,
            o = r.width && r.width >= 21 ? r.width : void 0,
            l = r.scale || 4;
        return {
            width: o,
            scale: o ? 4 : l,
            margin: i,
            color: {
                dark: t(r.color.dark || "#262626"),
                light: t(r.color.light || "#f9f9f9")
            },
            type: r.type,
            rendererOpts: r.rendererOpts || {}
        }
    }, e.getScale = function (r, i) {
        return i.width && i.width >= r + i.margin * 2 ? i.width / (r + i.margin * 2) : i.scale
    }, e.getImageWidth = function (r, i) {
        const o = e.getScale(r, i);
        return Math.floor((r + i.margin * 2) * o)
    }, e.qrToImageData = function (r, i, o) {
        const l = i.modules.size,
            a = i.modules.data,
            u = e.getScale(l, o),
            s = Math.floor((l + o.margin * 2) * u),
            c = o.margin * u,
            h = [o.color.light, o.color.dark];
        for (let f = 0; f < s; f++)
            for (let d = 0; d < s; d++) {
                let m = (f * s + d) * 4,
                    y = o.color.light;
                if (f >= c && d >= c && f < s - c && d < s - c) {
                    const C = Math.floor((f - c) / u),
                        g = Math.floor((d - c) / u);
                    y = h[a[C * l + g] ? 1 : 0]
                }
                r[m++] = y.r, r[m++] = y.g, r[m++] = y.b, r[m] = y.a
            }
    }
})(fs);
(function (e) {
    const t = fs;

    function n(i, o, l) {
        i.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px"
    }

    function r() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    e.render = function (o, l, a) {
        let u = a,
            s = l;
        typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (s = r()), u = t.getOptions(u);
        const c = t.getImageWidth(o.modules.size, u),
            h = s.getContext("2d"),
            f = h.createImageData(c, c);
        return t.qrToImageData(f.data, o, u), n(h, s, c), h.putImageData(f, 0, 0), s
    }, e.renderToDataURL = function (o, l, a) {
        let u = a;
        typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
        const s = e.render(o, l, u),
            c = u.type || "image/png",
            h = u.rendererOpts || {};
        return s.toDataURL(c, h.quality)
    }
})(m1);
var y1 = {};
const k3 = fs;

function nd(e, t) {
    const n = e.a / 255,
        r = t + '="' + e.hex + '"';
    return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}

function Ua(e, t, n) {
    let r = e + t;
    return typeof n < "u" && (r += " " + n), r
}

function B3(e, t, n) {
    let r = "",
        i = 0,
        o = !1,
        l = 0;
    for (let a = 0; a < e.length; a++) {
        const u = Math.floor(a % t),
            s = Math.floor(a / t);
        !u && !o && (o = !0), e[a] ? (l++, a > 0 && u > 0 && e[a - 1] || (r += o ? Ua("M", u + n, .5 + s + n) : Ua("m", i, 0), i = 0, o = !1), u + 1 < t && e[a + 1] || (r += Ua("h", l), l = 0)) : i++
    }
    return r
}
y1.render = function (t, n, r) {
    const i = k3.getOptions(n),
        o = t.modules.size,
        l = t.modules.data,
        a = o + i.margin * 2,
        u = i.color.light.a ? "<path " + nd(i.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "",
        s = "<path " + nd(i.color.dark, "stroke") + ' d="' + B3(l, o, i.margin) + '"/>',
        c = 'viewBox="0 0 ' + a + " " + a + '"',
        f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + u + s + `</svg>
`;
    return typeof r == "function" && r(null, f), f
};
const S3 = j8,
    Yu = i1,
    v1 = m1,
    A3 = y1;

function ds(e, t, n, r, i) {
    const o = [].slice.call(arguments, 1),
        l = o.length,
        a = typeof o[l - 1] == "function";
    if (!a && !S3()) throw new Error("Callback required as last argument");
    if (a) {
        if (l < 2) throw new Error("Too few arguments provided");
        l === 2 ? (i = n, n = t, t = r = void 0) : l === 3 && (t.getContext && typeof i > "u" ? (i = r, r = void 0) : (i = r, r = n, n = t, t = void 0))
    } else {
        if (l < 1) throw new Error("Too few arguments provided");
        return l === 1 ? (n = t, t = r = void 0) : l === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function (u, s) {
            try {
                const c = Yu.create(n, r);
                u(e(c, t, r))
            } catch (c) {
                s(c)
            }
        })
    }
    try {
        const u = Yu.create(n, r);
        i(null, e(u, t, r))
    } catch (u) {
        i(u)
    }
}
bi.create = Yu.create;
bi.toCanvas = ds.bind(null, v1.render);
bi.toDataURL = ds.bind(null, v1.renderToDataURL);
bi.toString = ds.bind(null, function (e, t, n) {
    return A3.render(e, n)
});
const D3 = async e => {
    try {
        return await bi.toString(e, {
            type: "svg",
            margin: 1,
            width: 256,
            color: {
                dark: "#262626",
                light: "#f9f9f9"
            }
        })
    } catch (t) {
        throw console.error("Erro ao gerar QR Code:", t), new Error("Não foi possível gerar o QR Code")
    }
};

function F3() {
    const [e, t] = de.useState([]), [n, r] = de.useState(null), [i, o] = de.useState([]), [l, a] = de.useState(null);
    de.useEffect(() => {
        var g;
        const C = O8();
        t(C), o(C), r(((g = C[0]) == null ? void 0 : g.id) || null)
    }, []);
    const u = () => {
            const C = {
                    id: Date.now().toString(),
                    title: "Insira um título...",
                    content: "",
                    createdAt: new Date,
                    updatedAt: new Date
                },
                g = [C, ...e];
            t(g), o(g), r(C.id), Xr(g)
        },
        s = C => {
            if (!n) return;
            const g = e.map(p => p.id === n ? {
                ...p,
                content: C,
                updatedAt: new Date
            } : p);
            t(g), o(g), Xr(g)
        },
        c = C => {
            if (!n) return;
            const g = e.map(p => p.id === n ? {
                ...p,
                title: C,
                updatedAt: new Date
            } : p);
            t(g), o(g), Xr(g)
        },
        h = C => {
            const g = e.filter(p => p.title.toLowerCase().includes(C.toLowerCase()) || p.content.toLowerCase().includes(C.toLowerCase()));
            o(g)
        },
        f = () => {
            var g;
            if (!n) return;
            const C = e.filter(p => p.id !== n);
            t(C), o(C), r(((g = C[0]) == null ? void 0 : g.id) || null), Xr(C)
        },
        d = async () => {
            const C = e.find(g => g.id === n);
            if (C) try {
                const g = await D3(C.content);
                a(g)
            } catch (g) {
                console.error("Erro ao gerar QR Code:", g)
            }
        }, m = () => {
            const C = e.find(v => v.id === n);
            if (!C || !l) return;
            const g = new Blob([l], {
                    type: "image/svg+xml"
                }),
                p = URL.createObjectURL(g),
                x = document.createElement("a");
            x.href = p, x.download = `nota-${C.title}.svg`, document.body.appendChild(x), x.click(), document.body.removeChild(x), URL.revokeObjectURL(p), a(null)
        }, y = e.find(C => C.id === n);
    return b.jsxs("div", {
        className: "flex h-screen bg-gray-50",
        children: [b.jsx(ym, {
            notes: i,
            selectedNoteId: n,
            onNoteSelect: r,
            onNewNote: u,
            onSearch: h
        }), b.jsxs("div", {
            className: "flex-1 flex flex-col",
            children: [b.jsx(vm, {
                onBold: () => {},
                onItalic: () => {},
                onHeading: () => {},
                onList: () => {},
                onQuote: () => {},
                onDelete: f,
                onGenerateQR: d,
                hasSelectedNote: !!y
            }), b.jsx(K4, {
                note: y,
                onChange: s,
                onTitleChange: c
            })]
        }), l && b.jsx(Y4, {
            qrCode: l,
            onClose: () => a(null),
            onDownload: m
        }), b.jsx(L8, {})]
    })
}
xh(document.getElementById("root")).render(b.jsx(de.StrictMode, {
    children: b.jsx(F3, {})
}));

