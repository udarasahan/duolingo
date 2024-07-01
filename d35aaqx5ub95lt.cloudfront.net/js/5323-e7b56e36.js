"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [5323], {
        82882: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => v
            });
            var a = s(27378),
                i = s(80715),
                n = s(35867),
                r = s(24886),
                l = s(80150),
                d = s(53278),
                o = s(42659),
                c = s(93540);
            const u = s.p + "images/fa63bd0c7948d107816b3d44bd7b11f7.svg";
            var m = s(50548),
                _ = s(76530),
                p = s(23275),
                b = s(18804),
                g = s(79465);
            const v = () => {
                const {
                    fadeOut: e,
                    isVisible: t,
                    options: {
                        alphabetId: s,
                        courseId: v,
                        gateId: f
                    }
                } = (0, l.Z)("CONFIRM_SKIP_ALPHABET_GATE"), k = (0, m.k6)(), h = (0, b.tX)(), y = (0, b.Fx)(c.HF);
                if (!y) throw Error("Cannot render skip alphabet gate drawer without path.");
                const E = (0, _.Z)((() => {
                    var e;
                    return null === (e = (0, p.m8)(y, (e => "alphabet_gate" === e.type && "active" === e.state))) || void 0 === e ? void 0 : e.level
                }), []);
                if (!E) throw Error("Cannot render skip alphabet gate drawer without an active alphabet gate in the path.");
                const Z = (0, _.Z)((() => {
                        var e;
                        return null === (e = (0, p.m8)(y, (e => "locked" === e.state))) || void 0 === e ? void 0 : e.level
                    }), []),
                    N = (0, b.Fx)(o.Oz),
                    w = async () => {
                        (0, g.track)("character_gate_drawer_tapped_learn", {
                            alphabet_id: s,
                            gate_id: f
                        }), await e(), h({
                            activeAlphabetId: s,
                            fromLanguage: N.fromLanguage,
                            learningLanguage: N.learningLanguage,
                            type: "characters/SET_ACTIVE_TAB"
                        }), k.push("/characters")
                    };
                return a.useEffect((() => {
                    (0, g.track)("character_gate_drawer_shown", {
                        alphabet_id: s,
                        gate_id: f
                    })
                }), []), a.createElement(r.Z, {
                    isVisible: t,
                    onDismiss: e,
                    onEnter: w,
                    submitting: !1
                }, a.createElement(n.Z, {
                    ctaContent: `Learn ${s}`,
                    description: `We recommend that you learn ${s} before moving on. But if you already know ${s}, you can skip ahead.`,
                    dismissContent: `I already know ${s}`,
                    image: a.createElement("img", {
                        alt: "",
                        className: "_3HM8S",
                        src: u
                    }),
                    onCtaClick: w,
                    onDismiss: () => {
                        (0, g.track)("character_gate_drawer_tapped_skip", {
                            alphabet_id: s,
                            gate_id: f
                        }), (0, i.dC)((() => {
                            h({
                                id: void 0,
                                section: void 0,
                                type: "SET_HOME_PAGE_POPOVER"
                            }), h({
                                alphabetId: s,
                                courseId: v,
                                gateId: f,
                                type: "characters/SKIP_ALPHABET_GATE"
                            }), h((0, d.$l)((0, p.P6)(E, Z, {
                                isPathVisible: !0
                            })))
                        })), e()
                    },
                    submitting: !1,
                    title: "Are you sure?"
                }))
            }
        },
        35867: (e, t, s) => {
            s.d(t, {
                Z: () => b
            });
            var a = s(60042),
                i = s.n(a),
                n = s(27378),
                r = s(36666),
                l = s(60876),
                d = s(20518),
                o = s(22186),
                c = s(42659);
            const u = {
                _button: "_1yKZz",
                "cta-button": "_3LkPJ _1yKZz",
                description: "_3OWkn",
                "dark-plus": "_2aX4E",
                "dark-super": "_2npgo",
                "dark-gold": "_34XTp",
                "dismiss-mobile": "fhtPK _1Toip",
                "dismiss-desktop": "_3Lflf _1yKZz",
                "dismiss-mobile-plus": "_1a4IB UhE80",
                "dismiss-desktop-plus": "mP_HY _3Lflf _1yKZz",
                "dismiss-mobile-dark-plus": "_3gJ8s _3Mtgw",
                "dismiss-desktop-dark-plus": "Pzm9H _1yKZz _1S2uf",
                "dismiss-mobile-red": "Lf641 fhtPK _1Toip",
                "dismiss-desktop-red": "_1wMvQ _3Lflf _1yKZz",
                "dismiss-mobile-super": "_2Yuyd _2h7HV",
                "dismiss-desktop-super": "YSBV7 _3Lflf _1yKZz",
                "dismiss-mobile-dark-super": "_2cg8P _3ysIe",
                "dismiss-desktop-dark-super": "_2xWuG _1yKZz _1ntfu",
                "dismiss-mobile-dark-max": "GtupF _2a0lQ",
                "dismiss-desktop-dark-max": "_24WBQ _1yKZz _1ntfu",
                "dismiss-mobile-dark-gold": "_2Ge_Y _3Mtgw",
                "dismiss-desktop-dark-gold": "v2aHv _1yKZz undefined",
                grid: "_1fZrK",
                "has-description": "_25RZD",
                "has-dismiss": "eDTjy",
                "has-image": "_3tWO8",
                "badge-container": "_3pNSu",
                "image-container": "_17QsQ",
                "left-bottom": "_2fYus",
                "right-top": "_3pyCk",
                title: "_2ac0P"
            };
            var m = s(30033),
                _ = s(67173),
                p = s(18804);
            const b = ({
                badgeType: e,
                className: t,
                ctaContent: s,
                description: a,
                disabled: b,
                dismissButtonClassName: g,
                dismissContent: v,
                dismissDisabled: f,
                image: k,
                onCtaClick: h,
                onDismiss: y,
                style: E,
                submitting: Z,
                title: N,
                titleClassName: w
            }) => {
                const C = (0, p.Fx)(c.$4),
                    L = "super" === e ? n.createElement("div", {
                        className: u["badge-container"]
                    }, n.createElement(d.Z, null)) : "max" === e ? n.createElement("div", {
                        className: u["badge-container"]
                    }, n.createElement(o.Z, null)) : null;
                return n.createElement("div", {
                    className: i()(u.grid, E ? u[E] : void 0, {
                        [u["has-description"]]: a,
                        [u["has-dismiss"]]: v,
                        [u["has-image"]]: k
                    }, t)
                }, L, k ? n.createElement("div", {
                    className: u["image-container"]
                }, k) : null, n.createElement("span", {
                    className: i()(u.title, w)
                }, N), a ? n.createElement("span", {
                    className: u.description
                }, a) : null, n.createElement("div", {
                    className: u["right-top"]
                }, n.createElement(l.Z, {
                    customStyle: u["cta-button"],
                    disabled: b,
                    onClick: h,
                    style: "dark-max" === E ? "max-gradient" : E,
                    submitting: Z
                }, s)), v ? n.createElement("div", {
                    className: u["left-bottom"]
                }, n.createElement(r.Z, {
                    className: null != g ? g : u[`dismiss-${C?"desktop":"mobile"}${E?`-${E}`:""}`],
                    disabled: null != f ? f : b || Z,
                    onClick: y,
                    unstyledDisabled: !0,
                    variant: C ? "stroke" : "text",
                    ...(0, m._q)(_.V.NotificationDrawerNoThanksButton)
                }, v)) : null)
            }
        },
        60876: (e, t, s) => {
            s.d(t, {
                Z: () => p
            });
            var a = s(60042),
                i = s.n(a),
                n = s(27378),
                r = s(30751);
            const l = {
                primary: "_3PkMt",
                disabled: "_38vb3",
                shiny: "_2fPnD",
                secondary: "_18biF"
            };
            var d = s(57104);
            const o = n.forwardRef((({
                className: e,
                shiny: t,
                state: s,
                variant: a = "primary",
                ...i
            }, o) => {
                const c = (() => {
                    switch (a) {
                        case "primary":
                            return "primary";
                        case "secondary":
                            return "link";
                        default:
                            throw Error(`Unrecognized variant: ${a}`)
                    }
                })();
                return n.createElement(d.Z, { ...i,
                    className: (0, r.Z)(l[a], {
                        [l.disabled]: "disabled" === s,
                        [l.shiny]: t
                    }, e),
                    ref: o,
                    state: s,
                    variant: c
                })
            }));
            var c = s(36666);
            const u = {
                "button-red": "_3GwKF _3S8jJ",
                "button-max": "_3rAKF undefined",
                "button-stroked": "_2Mpv0 _1kDit",
                "button-super": "_2Irkk _3b8r8",
                "button-dark-super": "_24bjY _19taU",
                "button-dark-gold": "_2tzoA _2JGBA",
                "standard-layout": "_11ql8"
            };
            var m = s(30033),
                _ = s(67173);
            const p = ({
                children: e,
                customStyle: t,
                disabled: s,
                onClick: a,
                style: r,
                submitting: l
            }) => "max-gradient" === r ? n.createElement(o, {
                className: null != t ? t : u["standard-layout"],
                onClick: a,
                state: l ? "loading" : s ? "disabled" : "enabled",
                ...(0, m._q)(_.V.NotificationButton)
            }, e) : n.createElement(c.Z, {
                className: i()(r ? u[`button-${r}`] : void 0, null != t ? t : u["standard-layout"]),
                disabled: s,
                onClick: a,
                submitting: l,
                variant: "stroked" === r ? "stroke" : "solid",
                ...(0, m._q)(_.V.NotificationButton)
            }, e)
        },
        24886: (e, t, s) => {
            s.d(t, {
                z: () => u,
                Z: () => m
            });
            var a = s(60042),
                i = s.n(a),
                n = s(27378),
                r = s(31542),
                l = s(2580),
                d = s(3732);
            var o = s(3731),
                c = s(26506);
            const u = 400,
                m = ({
                    children: e,
                    contentClassName: t,
                    className: s,
                    disableTypeToSelect: a = !0,
                    isVisible: u,
                    onDismiss: m,
                    onEnter: _,
                    submitting: p
                }) => {
                    const b = n.useRef(),
                        g = n.useRef();
                    return b.current = m, g.current = _, n.useEffect((() => {
                        if (u) {
                            const e = e => {
                                var t, s;
                                "Enter" === e.key ? null === (t = g.current) || void 0 === t || t.call(g) : "Escape" === e.key && (null === (s = b.current) || void 0 === s || s.call(b))
                            };
                            return c.U.disableListeners(), a && c._.disableListeners(), document.addEventListener("keydown", e), () => {
                                c.U.enableListeners(), a && c._.enableListeners(), document.removeEventListener("keydown", e)
                            }
                        }
                    }), [a, u]), (0, o.H)(u, !0), (0, r.createPortal)(n.createElement(l.ZP, {
                        disabled: !u
                    }, n.createElement(d.Z, {
                        animateOnMount: u,
                        className: i()("_19idO", s),
                        isVisible: u,
                        onDismiss: p ? void 0 : m
                    }, n.createElement("div", {
                        className: i()("_3qIEH", t)
                    }, e))), document.getElementById("overlays"))
                }
        },
        80150: (e, t, s) => {
            s.d(t, {
                Z: () => l
            });
            var a = s(27378),
                i = s(24886),
                n = s(50498),
                r = s(18804);
            const l = e => {
                const t = (0, r.tX)(),
                    s = (0, r.Fx)((e => e.ui.drawer)),
                    [l] = a.useState(s);
                return {
                    fadeOut: async () => {
                        t({
                            options: void 0,
                            type: "TOGGLE_DRAWER"
                        }), await (0, n._v)(i.z)
                    },
                    isVisible: (null == s ? void 0 : s.name) === e,
                    options: l
                }
            }
        },
        20518: (e, t, s) => {
            s.d(t, {
                Z: () => d
            });
            var a = s(27378);
            const i = s.p + "images/super/83778a6adcd153c79ac8434f992f6252.svg";
            var n = s(30016),
                r = s(30033),
                l = s(67173);
            const d = ({
                className: e,
                outline: t = !1,
                width: s = 87
            }) => a.createElement("img", {
                className: e,
                height: .26436781609195403 * s,
                src: t ? i : n,
                width: s,
                ...(0, r._q)(l.V.PlusOfferLogo)
            })
        },
        22186: (e, t, s) => {
            s.d(t, {
                Z: () => n
            });
            var a = s(27378);
            const i = s.p + "images/max/928d0b52c29baf3b499d937c0ef85d06.svg",
                n = ({
                    className: e
                }) => a.createElement("img", {
                    className: e,
                    height: 23,
                    src: i
                })
        },
        76530: (e, t, s) => {
            s.d(t, {
                Z: () => i
            });
            var a = s(27378);
            const i = (e, t) => {
                const s = a.useRef();
                var i, n;
                return void 0 !== s.current && (i = t, n = s.current.lastDeps, i && n && i.length === n.length && i.every(((e, t) => Object.is(e, n[t])))) || (s.current = {
                    lastDeps: t,
                    lastValue: e()
                }), s.current.lastValue
            }
        },
        3732: (e, t, s) => {
            s.d(t, {
                Z: () => d
            });
            var a = s(30751),
                i = s(27378),
                n = s(40892);
            const r = {
                "slid-in": "LrHmv",
                "slid-out": "_2x6yk",
                "sliding-in": "_19BgO",
                "slide-in": "q-MLq",
                "sliding-out": "_2U88J",
                "slide-out": "_3w9d4",
                wrap: "_1VYts"
            };
            var l = s(63169);
            const d = ({
                animateOnMount: e,
                children: t,
                className: s,
                isVisible: d,
                onDismiss: o
            }) => {
                const [c, u] = i.useState(e ? d ? "sliding-in" : "sliding-out" : d ? "slid-in" : "slid-out"), m = i.useRef(null);
                return (0, l.Z)({
                    disabled: "slid-in" !== c,
                    onClick: () => null == o ? void 0 : o(),
                    ref: m
                }), (0, n.G)((() => {
                    u(d ? "sliding-in" : "sliding-out")
                }), [d]), "slid-out" === c ? null : i.createElement("div", {
                    className: (0, a.Z)(r.wrap, r[c], s),
                    onAnimationEnd: e => {
                        e.target === m.current && u((e => "sliding-in" === e ? "slid-in" : "slid-out"))
                    },
                    ref: m
                }, t)
            }
        },
        40892: (e, t, s) => {
            s.d(t, {
                G: () => i,
                r: () => n
            });
            var a = s(27378);
            const i = (e, t) => {
                    const s = a.useRef(!1);
                    a.useEffect((() => {
                        if (s.current) return e();
                        s.current = !0
                    }), t)
                },
                n = (e = void 0, t = 500) => {
                    const [s, i] = a.useState(e), n = a.useRef();
                    return [s, a.useCallback((e => {
                        n.current && clearTimeout(n.current), void 0 === e || "boolean" == typeof e && !1 === e ? n.current = setTimeout((() => i(e)), t) : i(e)
                    }), [t, s])]
                }
        },
        30016: (e, t, s) => {
            e.exports = s.p + "images/super/2e50c3e8358914df5285dc8cf45d0b4c.svg"
        }
    }
]);