"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [8106], {
        95411: (e, t, n) => {
            n.d(t, {
                l: () => s,
                R: () => d,
                Z: () => f
            });
            var r = n(30751),
                a = n(27378),
                o = n(27272);
            const i = n.p + "vendor/fa3d16bb6533dc46e7703fe9dfe74d97.json",
                u = {
                    container: "_35_Wr",
                    lottie: "_2TQSH",
                    text: "TuzfC",
                    title: "_2XuVq",
                    wrap: "_2dohI",
                    "wrap-positioned": "_2DLSb _2dohI"
                };
            var c = n(57491),
                l = n(13797);
            const s = i;
            var d;
            ! function(e) {
                e[e.LOADING = 0] = "LOADING"
            }(d || (d = {}));
            const f = ({
                animationData: e,
                className: t,
                isVisible: n,
                localizer: s,
                manualPositioning: f,
                onFadedOut: p,
                text: m
            }) => {
                const h = (0, o.T)(),
                    g = a.useRef(),
                    v = a.useRef();
                return a.useEffect((() => {
                    g.current = p
                })), a.useEffect((() => {
                    if (v.current && !n) {
                        const e = setTimeout((() => {
                            var e;
                            return null === (e = g.current) || void 0 === e ? void 0 : e.call(g)
                        }), 250);
                        return () => clearTimeout(e)
                    }
                    v.current = n
                }), [n]), a.createElement(c.Z, {
                    animateOnMount: n,
                    duration: [500, 250],
                    isVisible: n
                }, a.createElement("div", {
                    className: (0, r.Z)(u["wrap" + (f ? "" : "-positioned")], t)
                }, a.createElement("div", {
                    className: u.container,
                    "data-test": "loading-screen"
                }, h ? null : a.createElement(l.Z, {
                    className: u.lottie,
                    isPlaying: !0,
                    loop: !0,
                    ...e ? {
                        animationData: e
                    } : {
                        path: i
                    }
                }), a.createElement("span", {
                    className: u.title
                }, s(d.LOADING)), m ? a.createElement("span", {
                    className: u.text
                }, m) : null)))
            }
        },
        13797: (e, t, n) => {
            n.d(t, {
                Z: () => H
            });
            var r = n(30751),
                a = n(75314),
                o = n.n(a),
                i = n(27378),
                u = "object" == typeof self && self.self === self && self || "object" == typeof n.g && n.g.global === n.g && n.g || Function("return this")() || {},
                c = Object.prototype,
                l = "undefined" != typeof Symbol ? Symbol.prototype : null,
                s = c.toString,
                d = c.hasOwnProperty,
                f = "undefined" != typeof ArrayBuffer,
                p = "undefined" != typeof DataView,
                m = Object.keys,
                h = f && ArrayBuffer.isView,
                g = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                v = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                b = Math.pow(2, 53) - 1;

            function y(e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            }
            y.VERSION = "1.13.6", y.prototype.value = function() {
                return this._wrapped
            }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
                return String(this._wrapped)
            };
            var _ = ("byteLength", function(e) {
                return null == e ? void 0 : e.byteLength
            });

            function w(e) {
                var t = "[object " + e + "]";
                return function(e) {
                    return s.call(e) === t
                }
            }
            var E = w("Function"),
                S = u.document && u.document.childNodes;
            "object" != typeof Int8Array && "function" != typeof S && (E = function(e) {
                return "function" == typeof e || !1
            });
            var k = E,
                N = w("ArrayBuffer"),
                R = w("Object"),
                j = p && R(new DataView(new ArrayBuffer(8)));
            "undefined" != typeof Map && R(new Map);
            var L, x = w("DataView"),
                D = j ? function(e) {
                    return null != e && k(e.getInt8) && N(e.buffer)
                } : x,
                O = (L = _, function(e) {
                    var t = L(e);
                    return "number" == typeof t && t >= 0 && t <= b
                }),
                P = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,
                $ = f ? function(e) {
                    return h ? h(e) && !D(e) : O(e) && P.test(s.call(e))
                } : (!1, function() {
                    return false
                });

            function A(e, t) {
                return null != e && d.call(e, t)
            }

            function I(e) {
                if (! function(e) {
                        var t = typeof e;
                        return "function" === t || "object" === t && !!e
                    }(e)) return [];
                if (m) return m(e);
                var t = [];
                for (var n in e) A(e, n) && t.push(n);
                return g && function(e, t) {
                    t = function(e) {
                        for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
                        return {
                            contains: function(e) {
                                return !0 === t[e]
                            },
                            push: function(n) {
                                return t[n] = !0, e.push(n)
                            }
                        }
                    }(t);
                    var n = v.length,
                        r = e.constructor,
                        a = k(r) && r.prototype || c,
                        o = "constructor";
                    for (A(e, o) && !t.contains(o) && t.push(o); n--;)(o = v[n]) in e && e[o] !== a[o] && !t.contains(o) && t.push(o)
                }(e, t), t
            }

            function B(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, _(e))
            }
            var T = "[object DataView]";

            function Z(e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var a = typeof e;
                return ("function" === a || "object" === a || "object" == typeof t) && M(e, t, n, r)
            }

            function M(e, t, n, r) {
                e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
                var a = s.call(e);
                if (a !== s.call(t)) return !1;
                if (j && "[object Object]" == a && D(e)) {
                    if (!D(t)) return !1;
                    a = T
                }
                switch (a) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object Symbol]":
                        return l.valueOf.call(e) === l.valueOf.call(t);
                    case "[object ArrayBuffer]":
                    case T:
                        return M(B(e), B(t), n, r)
                }
                var o = "[object Array]" === a;
                if (!o && $(e)) {
                    if (_(e) !== _(t)) return !1;
                    if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                    o = !0
                }
                if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var i = e.constructor,
                        u = t.constructor;
                    if (i !== u && !(k(i) && i instanceof i && k(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1
                }
                r = r || [];
                for (var c = (n = n || []).length; c--;)
                    if (n[c] === e) return r[c] === t;
                if (n.push(e), r.push(t), o) {
                    if ((c = e.length) !== t.length) return !1;
                    for (; c--;)
                        if (!Z(e[c], t[c], n, r)) return !1
                } else {
                    var d, f = I(e);
                    if (c = f.length, I(t).length !== c) return !1;
                    for (; c--;)
                        if (!A(t, d = f[c]) || !Z(e[d], t[d], n, r)) return !1
                }
                return n.pop(), r.pop(), !0
            }

            function V(e, t) {
                return Z(e, t)
            }
            var q = n(51862);
            const C = o().loadAnimation.bind(o()),
                H = i.forwardRef(((e, t) => {
                    const {
                        className: n,
                        direction: a = "forwards",
                        fetchData: o,
                        fillMode: u,
                        interruptKey: c,
                        isPlaying: l,
                        loadAnimation: s = C,
                        loop: d = !1,
                        loopSegment: f,
                        onComplete: p,
                        onCompleteLoop: m,
                        onDOMLoaded: h,
                        onDataFailed: g,
                        onDataReady: v,
                        onDestroy: b,
                        onDrawnFrame: y,
                        onEnterFrame: _,
                        onImagesLoaded: w,
                        onSegmentStart: E,
                        mainSegment: S,
                        renderSubframes: k = !0,
                        renderer: N = "svg",
                        speed: R = 1,
                        style: j
                    } = e, L = ((e, t, n = (async e => (await fetch(e)).json())) => {
                        const [r, a] = i.useState(t);
                        return i.useEffect((() => {
                            if (void 0 !== t || void 0 === e) return void(r !== t && a(t));
                            let o = !1;
                            return (async () => {
                                const t = await n(e);
                                o || a(t)
                            })(), () => {
                                o = !0
                            }
                        }), [t, e]), r
                    })("path" in e ? e.path : void 0, "path" in e ? void 0 : e.animationData, o), x = i.useRef(!1), [D, O] = i.useReducer((e => e + 1), 0), P = i.useRef(), $ = i.useRef(null), A = i.useRef(), I = i.useRef(), B = i.useRef(), T = i.useRef(), Z = i.useRef(), M = i.useRef(), H = i.useRef(), F = i.useRef(), J = i.useRef(), z = i.useRef(), U = i.useRef(), W = i.useRef(), G = i.useRef(), X = i.useRef(), Q = i.useRef(), K = ((e, t = ((e, t) => e === t)) => {
                        const [n, r] = i.useState(e);
                        return t(e, n) ? n : (r(e), e)
                    })(e.rendererSettings, V);
                    return i.useImperativeHandle(t, (() => ({
                        get animation() {
                            return P.current
                        },
                        get animationData() {
                            return L
                        },
                        get container() {
                            return $.current
                        }
                    })), [L]), i.useEffect((() => {
                        A.current = p, I.current = m, B.current = h, T.current = g, Z.current = v, M.current = b, H.current = y, F.current = _, J.current = w, z.current = E
                    })), i.useEffect((() => () => {
                        var e;
                        return null === (e = P.current) || void 0 === e ? void 0 : e.destroy()
                    }), []), i.useEffect((() => {
                        let e = P.current;
                        !L || !$.current || e && U.current === L && W.current === s && G.current === N && X.current === K ? e && (e.setDirection("backwards" === a ? -1 : 1), e.setLoop(d), e.setSpeed(R), e.setSubframe(k)) : (null == e || e.destroy(), e = s({
                            animationData: JSON.parse(JSON.stringify(L)),
                            autoplay: !1,
                            container: $.current,
                            loop: d,
                            renderer: N,
                            rendererSettings: K
                        }), e.setDirection("backwards" === a ? -1 : 1), e.setSpeed(R), e.setSubframe(k), e.addEventListener("DOMLoaded", (() => {
                            x.current = !0, O()
                        })), e.addEventListener("DOMLoaded", (() => {
                            var e;
                            return null === (e = B.current) || void 0 === e ? void 0 : e.call(B)
                        })), e.addEventListener("complete", (e => {
                            var t;
                            return null === (t = A.current) || void 0 === t ? void 0 : t.call(A, e)
                        })), e.addEventListener("data_failed", (() => {
                            var e;
                            return null === (e = T.current) || void 0 === e ? void 0 : e.call(T)
                        })), e.addEventListener("data_ready", (() => {
                            var e;
                            return null === (e = Z.current) || void 0 === e ? void 0 : e.call(Z)
                        })), e.addEventListener("destroy", (() => x.current = !1)), e.addEventListener("destroy", (e => {
                            var t;
                            return null === (t = M.current) || void 0 === t ? void 0 : t.call(M, e)
                        })), e.addEventListener("drawnFrame", (e => {
                            var t;
                            return null === (t = H.current) || void 0 === t ? void 0 : t.call(H, e)
                        })), e.addEventListener("enterFrame", (e => {
                            var t;
                            return null === (t = F.current) || void 0 === t ? void 0 : t.call(F, e)
                        })), e.addEventListener("loaded_images", (() => {
                            var e;
                            return null === (e = J.current) || void 0 === e ? void 0 : e.call(J)
                        })), e.addEventListener("loopComplete", (e => {
                            var t;
                            return null === (t = I.current) || void 0 === t ? void 0 : t.call(I, e)
                        })), e.addEventListener("segmentStart", (e => {
                            var t;
                            return null === (t = z.current) || void 0 === t ? void 0 : t.call(z, e)
                        })), P.current = e), U.current = L, W.current = s, G.current = N, X.current = K
                    }), [L, a, s, d, k, N, K, R]), i.useEffect((() => {
                        if (P.current && L && x.current) {
                            const {
                                ip: e,
                                op: t
                            } = L;
                            let n = [null != S ? S : [e, t]];
                            d && f && n.push(f), "backwards" === a && (n = n.map((([e, t]) => [t, e]))), P.current.playSegments(n, !0), l || P.current.pause(), Q.current = n
                        }
                    }), [D, a, null == f ? void 0 : f[0], null == f ? void 0 : f[1], null == S ? void 0 : S[0], null == S ? void 0 : S[1]]), i.useEffect((() => {
                        if (P.current && x.current && Q.current) {
                            const e = Q.current[Q.current.length - 1],
                                [t, n] = e,
                                r = "backwards" === a ? t - 1 - n : 0,
                                o = "backwards" === a ? 0 : n - 1 - t;
                            l ? P.current.goToAndPlay(r, !0) : "forwards" === u ? P.current.goToAndStop(o, !0) : P.current.goToAndStop(r, !0)
                        }
                    }), [D, a, c]), i.useEffect((() => {
                        P.current && x.current && (l ? P.current.play() : P.current.pause())
                    }), [D, l]), i.createElement("span", {
                        className: (0, r.Z)("RxQcJ", q.q, n),
                        ref: $,
                        style: j
                    })
                }))
        },
        6154: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(30751),
                a = n(27378),
                o = n(27272);
            const i = {
                "segmented-bar-gap-half-width": "2px",
                "segmented-highlight-border-width": "3px",
                juice: "_2EPb0",
                "juice-square": "_2eURI _2EPb0",
                "juice-inner": "_1WkV8 _2EPb0",
                "juice-inner-square": "_2ZGhU _1WkV8 _2EPb0",
                shine: "_1iBr3",
                "shine-square-filled": "_3Tjlf _1iBr3",
                _text: "_2tBP4",
                text: "_11c9H _2tBP4",
                "text-inner": "_1_Jmz _2tBP4",
                "text-inner-stroke": "WTnNH",
                "text-inner-unfilled": "ugyVc _1_Jmz _2tBP4",
                "text-with-checkpoints": "_3haMB _2tBP4",
                tip: "_3dSi9",
                wrap: "_1ivd5",
                "wrap-filled": "_3nszJ",
                "has-leftmost-checkpoint": "_3xsyY",
                "has-rightmost-checkpoint": "_387YW",
                checkpoint: "_2DDBP",
                "checkpoint-label": "_1sywe",
                "checkpoint-background-container": "_1y0Py",
                "square-end": "_2Hrdw",
                "segmented-highlight": "_2EcB5",
                "segmented-highlight-container": "_3ZPMX",
                "segmented-popover": "KSrZh",
                "segmented-popover-contents": "_2aGwb",
                "segmented-popover-stem": "_4uh04",
                "rounded-left": "_1u3r5",
                "rounded-right": "_3Wl8k",
                "has-segments": "_1o7fV",
                "checkpoint-background-empty": "_2wFQl",
                "checkpoint-background-filled": "_3fAvr",
                "checkpoint-background-pulse": "_36Rm_",
                "checkpoint-pulse": "_2JXTJ"
            };
            var u = n(41460);
            const c = i["segmented-bar-gap-half-width"],
                l = i["segmented-highlight-border-width"],
                s = ({
                    background: e,
                    currentNumerator: t,
                    denominator: n,
                    label: r,
                    numerator: u
                }) => {
                    const c = (0, o.T)(),
                        l = u / n * 100;
                    return a.createElement("div", {
                        className: i.checkpoint,
                        style: {
                            "--web-ui_internal_progress-bar-checkpoint-value": `${l}%`
                        }
                    }, a.createElement("div", {
                        className: i["checkpoint-background-container"]
                    }, null != e ? e : a.createElement("div", {
                        className: i["checkpoint-background" + (c || t !== u ? t < u ? "-empty" : "-filled" : "-pulse")]
                    })), r ? a.createElement("div", {
                        className: i["checkpoint-label"]
                    }, r) : null)
                },
                d = ({
                    checkpoints: e,
                    className: t,
                    denominator: n,
                    fillClassName: o,
                    height: d = 16,
                    innerText: f,
                    numerator: p,
                    numeratorSecondary: m,
                    onIncrease: h,
                    segments: g,
                    showInnerTextStroke: v,
                    squareEnd: b = !1,
                    style: y,
                    text: _,
                    tipElement: w
                }) => {
                    const E = a.useRef();
                    a.useEffect((() => {
                        void 0 !== E.current && p > E.current && (null == h || h()), E.current = p
                    }));
                    const S = Math.round(p / n * 100 * 100) / 100,
                        k = null == (e = null == e ? void 0 : e.slice().sort(((e, t) => e.numerator - t.numerator))) ? void 0 : e.some((e => 0 === e.numerator)),
                        N = null == e ? void 0 : e.some((e => e.numerator / n == 1)),
                        R = a.useMemo((() => {
                            if (void 0 === g) return;
                            const e = g.numSegments,
                                t = [];
                            for (let n = 0; n < e - 1; n++) {
                                const r = (() => {
                                        if (void 0 !== g.highlightedSegment) return "rtl" === document.dir ? e - 1 - g.highlightedSegment : g.highlightedSegment
                                    })(),
                                    a = n === r,
                                    o = n + 1 === r,
                                    i = (n + 1) / e * 100,
                                    u = `calc(${i}% - ${c})`,
                                    l = `calc(${i}% + ${c})`;
                                t.push(`${a?"":`${u} 100%, ${u} 0, `}${o?"":`${l} 0, ${l} 100%, `}`)
                            }
                            return `polygon(\n        0 0, ${g.highlightedSegment===("rtl"===document.dir?e-1:0)?"":"0 100%,"}\n        ${t.join("")}\n        100% 100%, 100% 0\n      )`
                        }), [null == g ? void 0 : g.numSegments, null == g ? void 0 : g.highlightedSegment]),
                        {
                            hasRoundedHighlightLeft: j,
                            hasRoundedHighlightRight: L
                        } = void 0 === g ? {
                            hasRoundedHighlightLeft: !1,
                            hasRoundedHighlightRight: !1
                        } : {
                            hasRoundedHighlightLeft: 0 === g.highlightedSegment,
                            hasRoundedHighlightRight: g.highlightedSegment === g.numSegments - 1
                        };
                    return a.createElement("div", {
                        "aria-valuemax": n,
                        "aria-valuemin": 0,
                        "aria-valuenow": p,
                        className: (0, r.Z)(t, {
                            [i["has-segments"]]: void 0 !== g
                        }),
                        role: "progressbar",
                        style: { ...y,
                            "--web-ui_internal_progress-bar-height": `${d}px`,
                            "--web-ui_internal_progress-bar-value": `${S}%`,
                            "--web-ui_internal_progress-bar-inner-value": void 0 === m ? "0%" : Math.round(m / n * 100 * 100) / 100 + "%"
                        }
                    }, void 0 === (null == g ? void 0 : g.highlightedSegment) ? null : a.createElement("div", {
                        className: i["segmented-highlight-container"],
                        style: {
                            "--web-ui_internal_progress-bar-segment-highlight-left": `calc(${g.highlightedSegment/g.numSegments*100}% + ${j?0:c})`,
                            "--web-ui_internal_progress-bar-segment-highlight-width": `calc(100% / ${g.numSegments} - 2 * ${l} - ${j||L?1:2} * ${c})`
                        }
                    }, void 0 === (null == g ? void 0 : g.popoverText) ? null : a.createElement(u.Z, {
                        className: i["segmented-popover"],
                        direction: "up",
                        innerClassName: i["segmented-popover-contents"],
                        manualPositioning: !0,
                        stemClassName: i["segmented-popover-stem"],
                        stemContainerStyle: {
                            left: "calc(50% - 5px)",
                            transform: "translateX(-50%) rotate(180deg)"
                        },
                        zIndex: 100
                    }, g.popoverText), a.createElement("div", {
                        className: (0, r.Z)(i["segmented-highlight"], {
                            [i["rounded-left"]]: j,
                            [i["rounded-right"]]: L
                        })
                    })), a.createElement("div", {
                        className: (0, r.Z)(i.wrap, {
                            [i["has-leftmost-checkpoint"]]: k,
                            [i["has-rightmost-checkpoint"]]: N,
                            [i["square-end"]]: b
                        }),
                        style: {
                            clipPath: R
                        }
                    }, f ? a.createElement("span", {
                        className: i["text-inner-unfilled"]
                    }, f) : null, a.createElement("div", {
                        className: (0, r.Z)(b || void 0 !== g ? i["juice-square"] : i.juice, o),
                        style: {
                            opacity: S > 0 ? 1 : 0
                        }
                    }, a.createElement("div", {
                        className: b || void 0 !== g ? i["juice-inner-square"] : i["juice-inner"]
                    }), a.createElement("div", {
                        className: b && p >= n ? i["shine-square-filled"] : i.shine
                    }), f ? a.createElement("span", {
                        className: (0, r.Z)(i["text-inner"], {
                            [i["text-inner-stroke"]]: v
                        })
                    }, f) : null), a.createElement("div", {
                        className: i["wrap-filled"],
                        style: {
                            opacity: S > 0 ? 1 : 0
                        }
                    }, _ ? a.createElement("span", {
                        className: i["text" + ((null == e ? void 0 : e.length) ? "-with-checkpoints" : "")]
                    }, _) : null, w ? a.createElement("div", {
                        className: i.tip
                    }, w) : null), null == e ? void 0 : e.map(((e, t) => a.createElement(s, {
                        currentNumerator: p,
                        denominator: n,
                        ...e,
                        key: t
                    })))))
                }
        }
    }
]);