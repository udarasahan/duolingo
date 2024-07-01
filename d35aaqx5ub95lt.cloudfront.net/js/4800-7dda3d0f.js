"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [4800], {
        97873: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var s = a(27378);
            const n = a.p + "images/gems/76cbc4f5cb7dfe46aa85b82d788ff4d5.svg";
            var i = a(67172);
            const r = {
                    noBorder: n,
                    whiteBorder: i
                },
                c = ({
                    type: e,
                    size: t = 32,
                    className: a,
                    amount: n
                }) => {
                    const i = s.createElement("img", {
                        className: a,
                        src: r[e],
                        style: {
                            height: t,
                            width: t
                        }
                    });
                    return void 0 === n ? i : s.createElement("div", {
                        className: "_2ALir"
                    }, i, s.createElement("div", {
                        className: "_1xgBw"
                    }, n))
                }
        },
        71347: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => l
            });
            var s = a(27378),
                n = a(24886),
                i = a(80150),
                r = a(17764),
                c = a(79465);
            const l = () => {
                const {
                    fadeOut: e,
                    isVisible: t,
                    options: {
                        sessionIndex: a,
                        price: l,
                        origin: o,
                        url: d
                    }
                } = (0, i.Z)("LEGENDARY_WITH_GEMS"), m = {
                    lesson_index: a,
                    origin: o,
                    price: l
                };
                return s.createElement(n.Z, {
                    isVisible: t,
                    onDismiss: () => {
                        (0, c.track)("final_level_purchase_drawer_dismiss", m), e()
                    },
                    submitting: !1
                }, s.createElement(r.Z, {
                    isModal: !1,
                    onDismiss: e,
                    origin: o,
                    price: l,
                    sessionIndex: a,
                    skillUrl: d
                }))
            }
        },
        24886: (e, t, a) => {
            a.d(t, {
                z: () => m,
                Z: () => u
            });
            var s = a(60042),
                n = a.n(s),
                i = a(27378),
                r = a(31542),
                c = a(2580),
                l = a(3732);
            var o = a(3731),
                d = a(26506);
            const m = 400,
                u = ({
                    children: e,
                    contentClassName: t,
                    className: a,
                    disableTypeToSelect: s = !0,
                    isVisible: m,
                    onDismiss: u,
                    onEnter: _,
                    submitting: p
                }) => {
                    const g = i.useRef(),
                        v = i.useRef();
                    return g.current = u, v.current = _, i.useEffect((() => {
                        if (m) {
                            const e = e => {
                                var t, a;
                                "Enter" === e.key ? null === (t = v.current) || void 0 === t || t.call(v) : "Escape" === e.key && (null === (a = g.current) || void 0 === a || a.call(g))
                            };
                            return d.U.disableListeners(), s && d._.disableListeners(), document.addEventListener("keydown", e), () => {
                                d.U.enableListeners(), s && d._.enableListeners(), document.removeEventListener("keydown", e)
                            }
                        }
                    }), [s, m]), (0, o.H)(m, !0), (0, r.createPortal)(i.createElement(c.ZP, {
                        disabled: !m
                    }, i.createElement(l.Z, {
                        animateOnMount: m,
                        className: n()("_19idO", a),
                        isVisible: m,
                        onDismiss: p ? void 0 : u
                    }, i.createElement("div", {
                        className: n()("_3qIEH", t)
                    }, e))), document.getElementById("overlays"))
                }
        },
        80150: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var s = a(27378),
                n = a(24886),
                i = a(50498),
                r = a(18804);
            const c = e => {
                const t = (0, r.tX)(),
                    a = (0, r.Fx)((e => e.ui.drawer)),
                    [c] = s.useState(a);
                return {
                    fadeOut: async () => {
                        t({
                            options: void 0,
                            type: "TOGGLE_DRAWER"
                        }), await (0, i._v)(n.z)
                    },
                    isVisible: (null == a ? void 0 : a.name) === e,
                    options: c
                }
            }
        },
        17764: (e, t, a) => {
            a.d(t, {
                Z: () => y
            });
            var s = a(60042),
                n = a.n(s),
                i = a(27378),
                r = a(36666),
                c = a(97873),
                l = a(42659),
                o = a(80164);
            const d = a.p + "images/legendary/129c507919446daf3c3a8f143c884cfe.svg",
                m = a.p + "images/legendary/a6547c5724d89704c47aff917a8c83da.svg";
            var u = a(11919);
            const _ = {
                container: "_1wpKJ",
                _gems: "f7wRz",
                "_gems-filled": "_2bg9k f7wRz",
                "_top-right-corner": "_3K2Bu",
                "gems-corner-filled": "_1vBEh _2bg9k f7wRz _3K2Bu",
                "gems-corner-empty": "_2N_mp f7wRz _3K2Bu",
                header: "_18XBD",
                content: "_3EOcm",
                "content-modal": "_31cUy _3EOcm",
                subtitle: "FT_m7",
                "cta-buttons": "N_8LD",
                "cta-button": "_25-h-",
                "cta-button-modal": "_3IwsC _25-h-",
                "cta-button-gap": "_34gxT",
                "cta-trophy": "_3Dw6H",
                "cta-button-main-text": "_2-V3h",
                "super-cta-cap": "_3goLf",
                "super-cta-free-trial": "_3XJ5p",
                "no-thanks": "_2fNWI",
                "no-thanks-modal": "_3f3xO _2fNWI",
                "cta-button-grayscale": "_2KGtz",
                "text-nyp-overlay": "_138TP"
            };
            var p = a(30033),
                g = a(67173),
                v = a(50548),
                f = a(8654),
                E = a(2439),
                b = a(18804),
                k = a(79465);
            const y = ({
                isModal: e,
                onDismiss: t,
                origin: a,
                price: s,
                sessionIndex: y,
                skillUrl: h
            }) => {
                const N = (0, b.tX)(),
                    w = (0, v.k6)(),
                    x = (0, v.TH)(),
                    L = (0, b.Fx)(o.y1),
                    Z = (0, b.Fx)(l.np).gemsConfig.gems,
                    R = Z >= s,
                    T = {
                        lesson_index: y,
                        origin: a,
                        price: s
                    };
                return i.useEffect((() => {
                    (0, k.track)("final_level_purchase_drawer_show", T), (0, k.track)("premium_ad_show", {
                        iap_context: "final_level"
                    })
                }), []), i.createElement("div", {
                    className: _.container
                }, i.createElement("div", {
                    className: _["gems-corner-" + (Z ? "filled" : "empty")]
                }, i.createElement(c.Z, {
                    amount: Z,
                    type: "noBorder"
                })), i.createElement("div", {
                    className: e ? _["content-modal"] : _.content
                }, i.createElement("h2", {
                    className: _.header
                }, (0, f._i)(34312)), i.createElement("div", {
                    className: _.subtitle
                }, (0, f._i)(36559)), i.createElement("div", {
                    className: _["cta-buttons"]
                }, i.createElement(r.Z, {
                    className: n()(e ? _["cta-button-modal"] : _["cta-button"], {
                        [_["cta-button-grayscale"]]: !R
                    }),
                    ...(0, p._q)(g.V.LegendaryPaywallLingotsCTA),
                    disabled: !R,
                    onClick: async () => {
                        (0, k.track)("final_level_purchase_drawer_gems_tap", {
                            lesson_index: y,
                            origin: a,
                            price: s
                        }), await t(), N({
                            options: void 0,
                            type: "TOGGLE_MODAL"
                        }), x.pathname === h ? N({
                            type: "PLAYER_REMOUNT"
                        }) : w.push(h)
                    },
                    variant: "stroke"
                }, i.createElement("img", {
                    className: _["cta-trophy"],
                    src: d
                }), i.createElement("span", {
                    className: _["cta-button-main-text"]
                }, (0, f._i)(34314)), i.createElement(c.Z, {
                    amount: s,
                    type: "noBorder"
                })), i.createElement("div", {
                    className: _["cta-button-gap"]
                }), i.createElement(r.Z, {
                    className: e ? _["cta-button-modal"] : _["cta-button"],
                    onClick: async () => {
                        (0, k.track)("final_level_purchase_drawer_plus_tap", T), await t(), (0, E.jF)({
                            didClickFreeTrial: L,
                            trackingProps: {
                                iap_context: "final_level"
                            }
                        }, N)
                    },
                    variant: "stroke"
                }, i.createElement("div", {
                    className: _["super-cta-cap"]
                }, i.createElement("img", {
                    src: u
                })), i.createElement("img", {
                    className: _["cta-trophy"],
                    src: m
                }), i.createElement("span", {
                    className: _["cta-button-main-text"]
                }, (0, f._i)(34315)), i.createElement("span", {
                    className: _["super-cta-free-trial"]
                }, L ? (0, f._i)(5655) : (0, f._i)(34199))))), i.createElement(r.Z, {
                    className: e ? _["no-thanks-modal"] : _["no-thanks"],
                    onClick: () => {
                        e || (0, k.track)("final_level_purchase_drawer_dismiss", T), t()
                    },
                    variant: e ? "text" : "stroke"
                }, (0, f._i)(2586)))
            }
        },
        3732: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var s = a(30751),
                n = a(27378),
                i = a(40892);
            const r = {
                "slid-in": "LrHmv",
                "slid-out": "_2x6yk",
                "sliding-in": "_19BgO",
                "slide-in": "q-MLq",
                "sliding-out": "_2U88J",
                "slide-out": "_3w9d4",
                wrap: "_1VYts"
            };
            var c = a(63169);
            const l = ({
                animateOnMount: e,
                children: t,
                className: a,
                isVisible: l,
                onDismiss: o
            }) => {
                const [d, m] = n.useState(e ? l ? "sliding-in" : "sliding-out" : l ? "slid-in" : "slid-out"), u = n.useRef(null);
                return (0, c.Z)({
                    disabled: "slid-in" !== d,
                    onClick: () => null == o ? void 0 : o(),
                    ref: u
                }), (0, i.G)((() => {
                    m(l ? "sliding-in" : "sliding-out")
                }), [l]), "slid-out" === d ? null : n.createElement("div", {
                    className: (0, s.Z)(r.wrap, r[d], a),
                    onAnimationEnd: e => {
                        e.target === u.current && m((e => "sliding-in" === e ? "slid-in" : "slid-out"))
                    },
                    ref: u
                }, t)
            }
        },
        40892: (e, t, a) => {
            a.d(t, {
                G: () => n,
                r: () => i
            });
            var s = a(27378);
            const n = (e, t) => {
                    const a = s.useRef(!1);
                    s.useEffect((() => {
                        if (a.current) return e();
                        a.current = !0
                    }), t)
                },
                i = (e = void 0, t = 500) => {
                    const [a, n] = s.useState(e), i = s.useRef();
                    return [a, s.useCallback((e => {
                        i.current && clearTimeout(i.current), void 0 === e || "boolean" == typeof e && !1 === e ? i.current = setTimeout((() => n(e)), t) : n(e)
                    }), [t, a])]
                }
        },
        67172: (e, t, a) => {
            e.exports = a.p + "images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
        },
        11919: (e, t, a) => {
            e.exports = a.p + "images/super/909c294519d4c56502a70c6f58a48e6a.svg"
        }
    }
]);