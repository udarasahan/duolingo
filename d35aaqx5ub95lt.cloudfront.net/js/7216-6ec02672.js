"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [7216], {
        3732: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a(30751),
                r = a(27378),
                l = a(40892);
            const o = {
                "slid-in": "LrHmv",
                "slid-out": "_2x6yk",
                "sliding-in": "_19BgO",
                "slide-in": "q-MLq",
                "sliding-out": "_2U88J",
                "slide-out": "_3w9d4",
                wrap: "_1VYts"
            };
            var s = a(63169);
            const i = ({
                animateOnMount: e,
                children: t,
                className: a,
                isVisible: i,
                onDismiss: c
            }) => {
                const [u, d] = r.useState(e ? i ? "sliding-in" : "sliding-out" : i ? "slid-in" : "slid-out"), p = r.useRef(null);
                return (0, s.Z)({
                    disabled: "slid-in" !== u,
                    onClick: () => null == c ? void 0 : c(),
                    ref: p
                }), (0, l.G)((() => {
                    d(i ? "sliding-in" : "sliding-out")
                }), [i]), "slid-out" === u ? null : r.createElement("div", {
                    className: (0, n.Z)(o.wrap, o[u], a),
                    onAnimationEnd: e => {
                        e.target === p.current && d((e => "sliding-in" === e ? "slid-in" : "slid-out"))
                    },
                    ref: p
                }, t)
            }
        },
        45051: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a(30751),
                r = a(27378),
                l = a(47301);
            const o = {
                "_popover-positioned": "_5udHN",
                picker: "_3WI9_",
                "popover-align-end": "_2kP79 _5udHN",
                "popover-align-start": "_2m1-x _5udHN",
                wrap: "_1Vbcj",
                "wrap-align-popover": "CIABl _1Vbcj"
            };
            var s = a(38585),
                i = a(3463),
                c = a(41460),
                u = a(39241);
            const d = r.forwardRef((({
                className: e,
                formatDate: t,
                hasError: a,
                helperText: d,
                id: p,
                labelText: m,
                parseDate: v,
                popoverPosition: g = "start",
                state: h = "enabled",
                style: f,
                unstyledFocus: _,
                ...b
            }, Z) => {
                const {
                    max: y,
                    min: E,
                    mode: k,
                    onChange: N,
                    other: w,
                    value: S
                } = b, D = (0, u.Z)(), C = r.useRef(null), [T, x] = r.useState(), [M, I] = r.useState(!1), A = S ? t ? t(S) : S.toLocaleDateString() : "", P = e => {
                    "Enter" === e.key ? (L(T), x(void 0), e.preventDefault()) : "Escape" === e.key && M && (I(!1), e.preventDefault())
                }, L = e => {
                    if (void 0 !== e)
                        if (e.trim()) {
                            let t = v ? v(e) : new Date(e);
                            isNaN(t.valueOf()) || (void 0 !== y && t > y ? t = y : void 0 !== E && t < E && (t = E), null == N || N({
                                keepOpen: !1,
                                newValue: t,
                                other: "range-end" === k && void 0 !== w && t < w || "range-start" === k && void 0 !== w && t > w ? t : w
                            }))
                        } else null == N || N({
                            keepOpen: !1,
                            newValue: void 0,
                            other: w
                        })
                }, O = "string" == typeof g ? {
                    className: o[`popover-align-${g}`],
                    direction: "down",
                    manualPositioning: !0
                } : g;
                return r.createElement("div", {
                    className: (0, n.Z)(o["wrap" + ("string" == typeof g ? "-align-popover" : "")], e),
                    onBlur: e => {
                        var t;
                        (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (L(T), x(void 0)), e.currentTarget.contains(e.relatedTarget) || I(!1)
                    },
                    style: f
                }, r.createElement(i.Z, {
                    hasError: a,
                    helperText: d,
                    id: p,
                    inputType: "date",
                    labelText: m,
                    onClear: () => {
                        C.current && (C.current.focus(), C.current.value = "", x(""))
                    },
                    state: h,
                    unstyledFocus: _
                }, (e => r.createElement("input", {
                    "aria-controls": D,
                    "aria-haspopup": "grid",
                    className: e.className,
                    disabled: "disabled" === h,
                    id: e.id,
                    onChange: e => x(e.target.value),
                    onClick: () => I(!0),
                    onFocus: () => I(!0),
                    onKeyDown: P,
                    ref: (0, l.Z)([C, Z]),
                    type: "text",
                    value: null != T ? T : A
                }))), M ? r.createElement(c.Z, {
                    onKeyDown: e => {
                        var t;
                        "Escape" === e.key && (null === (t = C.current) || void 0 === t || t.focus(), I(!1), e.preventDefault())
                    },
                    stem: "none",
                    zIndex: 1,
                    ...O
                }, r.createElement(s.Z, { ...b,
                    className: o.picker,
                    id: D,
                    onChange: e => {
                        var t;
                        null == N || N(e), e.keepOpen || (null === (t = C.current) || void 0 === t || t.focus(), I(!1))
                    }
                })) : null)
            }))
        },
        38585: (e, t, a) => {
            a.d(t, {
                Z: () => g
            });
            var n = a(30751),
                r = a(27378),
                l = a(64502);
            const o = a.p + "vendor/060066c9c4e3e22934e40d4cb6965265.svg",
                s = a.p + "vendor/135efaa5a370cf94472823ee1d6c83a8.svg",
                i = {
                    _date: "_2PBgA",
                    "track-end": "_1pkj2",
                    "track-start": "_3ItUE",
                    button: "_2m9Ri",
                    "button-hovered": "_29LYx _2m9Ri",
                    "date-future": "_2Po87 _2PBgA",
                    "date-past": "_2kbaZ _2PBgA",
                    "track-colored": "_2jYES _1L32C",
                    "date-other": "_3OwAt _2PBgA",
                    "date-selected": "_2feWZ _2PBgA",
                    day: "hImsu",
                    grid: "_1vJDi",
                    month: "_1bw8Z",
                    nav: "_1nfNx",
                    "nav-button": "X8qHS",
                    "nav-button-icon-flipped": "_1aCh4",
                    track: "_1L32C",
                    "track-hovered": "_2c-Yl _1L32C",
                    wrap: "_2ru7A",
                    "wrap-large": "_5gSsp _2ru7A",
                    "wrap-small": "_2mMkF _2ru7A"
                };
            var c = a(36666);
            const u = 864e5,
                d = ["S", "M", "T", "W", "T", "F", "S"],
                p = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                m = e => new Date(e.getFullYear(), e.getMonth(), e.getDate()),
                v = (e, t) => 40 - new Date(e, t, 40).getDate(),
                g = r.forwardRef((({
                    className: e,
                    disabled: t = !1,
                    id: a,
                    localizedDays: g = d,
                    localizedMonths: h = p,
                    max: f,
                    min: _,
                    mode: b = "single",
                    onChange: Z,
                    other: y,
                    size: E,
                    startOfWeek: k = 0,
                    style: N,
                    value: w
                }, S) => {
                    const D = "dark" === (0, l.Fg)(),
                        [C, T] = r.useState(),
                        [x, M] = r.useState((null != w ? w : new Date).getMonth()),
                        [I, A] = r.useState((null != w ? w : new Date).getFullYear()),
                        P = r.useMemo((() => d.map(((e, t) => g[(t + k) % 7]))), [g, k]),
                        L = r.useMemo((() => ((e, t, {
                            startOfWeek: a = 0
                        }) => {
                            const n = t < 11 ? t + 1 : 0,
                                r = t < 11 ? e : e + 1,
                                l = t > 0 ? t - 1 : 11,
                                o = t > 0 ? e : e - 1,
                                s = v(e, t),
                                i = v(o, l);
                            let c = new Date(e, t).getDay();
                            c -= a > c ? a - 7 : a;
                            const u = [];
                            for (let a = 0; a < 6; a++)
                                for (let p = 0; p < d.length; p++) {
                                    const m = a * d.length + p - c,
                                        v = m < 0 ? l : m >= s ? n : t,
                                        g = (m < 0 ? i + m : m % s) + 1,
                                        h = v === l ? o : v === n ? r : e;
                                    u.push(new Date(h, v, g))
                                }
                            return u
                        })(I, x, {
                            startOfWeek: k
                        })), [x, k, I]),
                        O = v(I, x),
                        R = null == C ? void 0 : C.valueOf(),
                        U = void 0 === f ? void 0 : m(f).valueOf(),
                        B = void 0 === _ ? void 0 : m(_).valueOf(),
                        F = void 0 === y ? void 0 : m(y).valueOf(),
                        z = void 0 === w ? void 0 : m(w).valueOf(),
                        [K, G] = ((e, t, a) => {
                            if (void 0 !== t && void 0 !== a) {
                                if ("range" === e || "single" === e) return t > a ? [a, t] : [t, a];
                                if ("range-end" === e && t > a) return [a, t];
                                if ("range-start" === e && t < a) return [t, a]
                            }
                            return [void 0, void 0]
                        })(b, "single" === b ? z : null != R ? R : z, F),
                        H = (e, t) => {
                            null == Z || Z({
                                keepOpen: t,
                                newValue: e,
                                other: "single" === b ? void 0 : "range-end" === b && void 0 !== y && e < y || "range-start" === b && void 0 !== y && e > y ? e : y
                            })
                        };
                    return r.createElement("div", {
                        className: (0, n.Z)(i["wrap" + (E ? `-${E}` : "")], e),
                        id: a,
                        onKeyDown: e => {
                            if (z) {
                                const t = e => {
                                    H(e, !0), M(e.getMonth()), A(e.getFullYear())
                                };
                                switch (e.key) {
                                    case "ArrowDown":
                                        t(new Date(z + 6048e5));
                                        break;
                                    case "ArrowLeft":
                                        t(new Date(z - u));
                                        break;
                                    case "ArrowRight":
                                        t(new Date(z + u));
                                        break;
                                    case "ArrowUp":
                                        t(new Date(z - 6048e5));
                                        break;
                                    case " ":
                                    case "Enter":
                                        H(new Date(z), !1);
                                        break;
                                    default:
                                        return
                                }
                                e.preventDefault()
                            }
                        },
                        ref: S,
                        style: N,
                        tabIndex: t ? -1 : 0
                    }, r.createElement("nav", {
                        className: i.nav
                    }, r.createElement(c.Z, {
                        className: i["nav-button"],
                        disabled: t,
                        onClick: () => {
                            M(x > 0 ? x - 1 : 11), A(x > 0 ? I : I - 1)
                        },
                        tabIndex: -1,
                        type: "button"
                    }, r.createElement("img", {
                        src: D ? o : s
                    })), r.createElement("span", {
                        className: i.month
                    }, h[x], " ", I), r.createElement(c.Z, {
                        className: i["nav-button"],
                        disabled: t,
                        onClick: () => {
                            M(x < 11 ? x + 1 : 0), A(x < 11 ? I : I + 1)
                        },
                        tabIndex: -1,
                        type: "button"
                    }, r.createElement("img", {
                        className: i["nav-button-icon-flipped"],
                        src: D ? o : s
                    }))), r.createElement("div", {
                        className: i.grid
                    }, P.map(((e, t) => r.createElement("span", {
                        className: i.day,
                        key: t
                    }, e))), L.map(((e, a) => {
                        const l = e.valueOf(),
                            o = e > new Date(I, x, O),
                            s = e < new Date(I, x),
                            c = void 0 !== K && void 0 !== G && l >= K && l <= G,
                            u = c && (l === G || (a + 1) % d.length == 0),
                            p = c && (l === K || (a + 1) % d.length == 1),
                            m = l === z && ("single" === b || void 0 === R || R === z) || l === F;
                        return r.createElement("button", {
                            className: i["button" + (l === R ? "-hovered" : "")],
                            disabled: t || void 0 !== U && l > U || void 0 !== B && l < B,
                            key: a,
                            onClick: () => H(e, !1),
                            onMouseEnter: () => T(e),
                            onMouseLeave: () => T(void 0),
                            tabIndex: -1,
                            type: "button"
                        }, r.createElement("span", {
                            className: (0, n.Z)({
                                [i.track]: !c,
                                [i["track" + ("single" !== b && void 0 !== R && R !== z ? "-hovered" : "-colored")]]: c,
                                [i["track-end"]]: u,
                                [i["track-start"]]: p
                            })
                        }, r.createElement("span", {
                            className: i[m ? "date-selected" : o ? "date-future" : s ? "date-past" : "date-other"]
                        }, e.getDate())))
                    }))))
                }))
        },
        99975: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a(30751),
                r = a(27378);
            const l = {
                "_popover-positioned": "Eggi4",
                input: "_3_P9Z",
                picker: "_2zM5S",
                "popover-align-end": "_3Tk2q Eggi4",
                "popover-align-start": "_32TKd Eggi4",
                wrap: "_3zL2v",
                "wrap-align-popover": "_3IcC4 _3zL2v"
            };
            var o = a(30134),
                s = a(38585),
                i = a(41460),
                c = a(55079),
                u = a(39241);
            const d = ({
                className: e,
                formatDate: t,
                icon: a,
                popoverPosition: d = "start",
                type: p,
                ...m
            }) => {
                const {
                    disabled: v,
                    onChange: g,
                    value: h
                } = m, f = (0, u.Z)(), _ = r.useRef(null), b = r.useRef(null), [Z, y] = r.useState(!1), E = h ? t ? t(h) : h.toLocaleDateString() : "";
                r.useLayoutEffect((() => {
                    var e;
                    Z && (null === (e = b.current) || void 0 === e || e.focus())
                }), [Z]);
                const k = "string" == typeof d ? {
                    className: l[`popover-align-${d}`],
                    direction: "down",
                    manualPositioning: !0
                } : d;
                return r.createElement("div", {
                    className: l["wrap" + ("string" == typeof d ? "-align-popover" : "")],
                    onBlur: e => {
                        e.currentTarget.contains(e.relatedTarget) || y(!1)
                    },
                    onKeyDown: e => {
                        var t;
                        "Escape" === e.key && (null === (t = _.current) || void 0 === t || t.focus(), y(!1), e.preventDefault())
                    }
                }, r.createElement(c.Z, {
                    caretFacesUp: Z,
                    className: e,
                    disabled: v,
                    icon: a,
                    isEmpty: !h,
                    text: E,
                    type: p
                }, r.createElement("button", {
                    "aria-controls": f,
                    "aria-haspopup": "grid",
                    className: (0, n.Z)(l.input, o.Z.input),
                    disabled: v,
                    onClick: () => y(!Z),
                    ref: _,
                    type: "button"
                })), Z ? r.createElement(i.Z, {
                    stem: "none",
                    zIndex: 1,
                    ...k
                }, r.createElement(s.Z, { ...m,
                    className: l.picker,
                    id: f,
                    onChange: e => {
                        var t;
                        null == g || g(e), e.keepOpen || (null === (t = _.current) || void 0 === t || t.focus(), y(!1))
                    },
                    ref: b
                })) : null)
            }
        },
        92475: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(30751),
                r = a(27378);
            var l = a(35533),
                o = a(87011);
            const s = ({
                className: e,
                disabled: t,
                items: a,
                onChange: s,
                style: i,
                value: c
            }) => {
                const u = r.useRef([]),
                    d = (e, t) => null == s ? void 0 : s({
                        value: "remove" === e ? void 0 : t[0]
                    }),
                    {
                        getTabFocusIndex: p,
                        handleKeyDown: m,
                        handleKeyUp: v,
                        setTabFocusIndex: g
                    } = (0, o.Z)({
                        filteredItems: a.map(((e, t) => ({
                            index: t,
                            item: {}
                        }))),
                        itemRefs: u,
                        multiple: !1,
                        onChange: d,
                        selectedIndices: void 0 === c ? [] : [c]
                    }),
                    h = e => d(c === e ? "remove" : "add", [e]);
                if (0 === a.length) throw Error("A GoalPicker must have at least one item.");
                return r.createElement("ul", {
                    "aria-disabled": !0 === t,
                    className: (0, n.Z)("_3Qigj", e),
                    role: "listbox",
                    style: i
                }, a.map(((e, a) => r.createElement(l.Z, { ...e,
                    disabled: t,
                    highlightText: [
                        [0, e.text.length - 1]
                    ],
                    key: a,
                    onClick: () => h(a),
                    onFocus: () => g(a),
                    onKeyDown: e => m(a, e),
                    onKeyUp: e => v(a, e),
                    onToggle: () => h(a),
                    ref: e => u.current[a] = e,
                    selected: c === a,
                    selectedStyle: "scale",
                    tabIndex: a !== p() || t ? -1 : 0
                }))))
            }
        },
        91647: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var n = a(30751),
                r = a(27378);
            const l = a.p + "vendor/0af648eaf3f937ada51bcfa49c20535b.svg",
                o = a.p + "vendor/db215c4f7257340232b2a82fb99777f1.svg";
            var s = a(93611),
                i = a(36666);
            const c = ({
                buttonType: e = "dots",
                className: t,
                linkComponent: a,
                logo: c,
                onToggle: u,
                style: d
            }) => r.createElement("div", {
                className: (0, n.Z)("_2CauR", t),
                style: d
            }, r.createElement("nav", {
                className: "_1Tfp5"
            }, c ? r.createElement(a, {
                className: "_3Wirc",
                href: c.href,
                onClick: c.onClick
            }, r.createElement("img", {
                alt: c.alt,
                className: "_1uHE6",
                src: c.src
            })) : r.createElement("div", {
                className: "_2ZvSZ"
            }), r.createElement(i.Z, {
                className: "_20pmE",
                onClick: u
            }, "dots" === e ? r.createElement(s.Z, {
                className: "_1eLxP",
                guaranteedSafeSrc: o
            }) : r.createElement(s.Z, {
                className: "_3mXVY",
                guaranteedSafeSrc: l
            }))))
        },
        37773: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n = a(30751),
                r = a(27378),
                l = a(30134);
            const o = {
                "_popover-positioned": "Ba117",
                bubble: "_1sptG",
                input: "ELSyi",
                list: "_6rAO0",
                popover: "_1fYDA",
                "popover-align-end": "_24ka- Ba117 _1fYDA",
                "popover-align-start": "NewR2 Ba117 _1fYDA",
                wrap: "_2-mGr",
                "wrap-align-popover": "JzsXl _2-mGr"
            };
            var s = a(41635),
                i = a(41460),
                c = a(55079),
                u = a(63169),
                d = a(39241);
            const p = ({
                className: e,
                disabled: t,
                initialItems: a,
                highlightDescription: p,
                highlightText: m,
                items: v,
                match: g,
                multiple: h,
                onChange: f,
                onClose: _,
                onOpen: b,
                popoverPosition: Z = "start",
                selectedIconOverride: y,
                selectedIndices: E,
                showSearch: k,
                style: N,
                text: w,
                type: S
            }) => {
                var D, C;
                const T = (0, d.Z)(),
                    [x, M] = r.useState(!1),
                    [I, A] = r.useState(""),
                    P = r.useRef(null),
                    L = r.useRef(null),
                    O = r.useRef(null);
                (0, u.Z)({
                    disabled: !x,
                    onClick: () => M(!1),
                    ref: L
                });
                const {
                    onBlur: R,
                    onMouseDown: U
                } = (e => {
                    const t = r.useRef(null),
                        a = r.useRef();
                    return {
                        onBlur: e => (e => {
                            var t;
                            const a = null !== (t = e.relatedTarget) && void 0 !== t ? t : e.clickTarget;
                            e.currentTarget.contains(a) || M(!1)
                        })({ ...e,
                            clickTarget: t.current
                        }),
                        onMouseDown: e => {
                            t.current = e.target, clearTimeout(a.current), a.current = setTimeout((() => t.current = null), 0)
                        }
                    }
                })();
                r.useLayoutEffect((() => {
                    var e;
                    x && (null === (e = O.current) || void 0 === e || e.focus())
                }), [x]), r.useEffect((() => {
                    x ? null == b || b() : null == _ || _()
                }), [x]);
                const B = "string" == typeof Z ? {
                    className: o[`popover-align-${Z}`],
                    direction: "down",
                    manualPositioning: !0,
                    zIndex: 1
                } : { ...Z,
                    className: (0, n.Z)(o.popover, Z.className)
                };
                return r.createElement("div", {
                    className: o["wrap" + ("string" == typeof Z ? "-align-popover" : "")],
                    onBlur: R,
                    onKeyDown: e => {
                        var t;
                        "Escape" === e.key && (null === (t = P.current) || void 0 === t || t.focus(), M(!1))
                    },
                    onMouseDown: U,
                    ref: L,
                    style: N
                }, r.createElement(c.Z, {
                    caretFacesUp: x,
                    className: e,
                    disabled: t,
                    icon: null != y ? y : h || null === (C = v[null !== (D = E[0]) && void 0 !== D ? D : -1]) || void 0 === C ? void 0 : C.icon,
                    isEmpty: !E.length,
                    text: null != w ? w : E.map((e => v[e].text)).join(", "),
                    type: S
                }, r.createElement("button", {
                    "aria-controls": T,
                    "aria-haspopup": "listbox",
                    className: (0, n.Z)(o.input, l.Z.input),
                    disabled: t,
                    onClick: () => M((e => !e && v.length > 0)),
                    ref: P,
                    type: "button"
                })), x ? r.createElement(i.Z, {
                    innerClassName: o.bubble,
                    stem: "none",
                    ...B
                }, r.createElement(s.Z, {
                    className: o.list,
                    highlightDescription: p,
                    highlightText: m,
                    id: T,
                    inPopover: !0,
                    initialItems: a,
                    items: v,
                    match: g,
                    multiple: h,
                    onChange: e => {
                        var t;
                        null == f || f(e), h || (null === (t = P.current) || void 0 === t || t.focus(), M(!1))
                    },
                    onQueryChange: e => A(e.value),
                    query: I,
                    ref: O,
                    scrollable: !0,
                    selectedIndices: E,
                    showSearch: k
                })) : null)
            }
        },
        98530: (e, t, a) => {
            a.d(t, {
                Z: () => v
            });
            var n = a(30751),
                r = a(27378),
                l = a(64502);
            const o = a.p + "vendor/32e5c698a32c6891c95d20afdf3536a8.svg",
                s = a.p + "vendor/a8f29b543aa7f77ce1720b4817a23836.svg",
                i = a.p + "vendor/ad1a0fe5dbc9f175daede35b6253aaf0.svg",
                c = a.p + "vendor/119fb208358eab504f058a1769e95a65.svg",
                u = a.p + "vendor/8e10e3b1ff199c7d6006e7476db687b0.svg",
                d = {
                    "_icon-link": "_1wdTM",
                    container: "_2fKiz",
                    icon: "_2JUsh",
                    "icon-facebook": "_2NqaL _1wdTM",
                    "icon-instagram": "_2_62S _1wdTM",
                    "icon-linkedin": "_3eItM _1wdTM",
                    "icon-tiktok": "_1GAfC _1wdTM",
                    dark: "_3cN1O",
                    "icon-twitter": "GQzDa _1wdTM",
                    logo: "_3PRTl",
                    "logo-link": "GeU4L",
                    page: "_2UEyb",
                    "page-active": "_2E77a _2UEyb",
                    separator: "_1bYU1",
                    spacer: "vJMDq",
                    wrap: "_3HgvQ"
                };
            var p = a(93611);
            const m = [{
                    href: "https://facebook.com/duolingo",
                    src: o,
                    type: "facebook"
                }, {
                    href: "https://instagram.com/duolingo",
                    src: s,
                    type: "instagram"
                }, {
                    href: "https://www.linkedin.com/company/duolingo",
                    src: i,
                    type: "linkedin"
                }, {
                    href: "https://www.tiktok.com/@duolingo?lang=en",
                    src: c,
                    type: "tiktok"
                }, {
                    href: "https://twitter.com/duolingo",
                    src: u,
                    type: "twitter"
                }],
                v = ({
                    className: e,
                    linkComponent: t,
                    logo: a,
                    showSocialIcons: o,
                    style: s,
                    tabs: i
                }) => {
                    const c = (0, l.Fg)();
                    return r.createElement("div", {
                        className: (0, n.Z)(d.container, e),
                        style: s
                    }, r.createElement("nav", {
                        className: d.wrap
                    }, a ? r.createElement(t, {
                        className: d["logo-link"],
                        href: a.href,
                        onClick: a.onClick
                    }, r.createElement("img", {
                        alt: a.alt,
                        className: d.logo,
                        src: a.src
                    })) : r.createElement("div", {
                        className: d.spacer
                    }), i.map((e => r.createElement(t, {
                        className: e.isActive ? d["page-active"] : d.page,
                        href: e.href,
                        key: e.name,
                        onClick: e.onClick
                    }, e.name))), o ? r.createElement("div", {
                        className: d.separator
                    }) : null, o ? m.map((e => r.createElement(t, {
                        className: (0, n.Z)(d[`icon-${e.type}`], {
                            [d.dark]: "dark" === c
                        }),
                        href: e.href,
                        key: e.src
                    }, r.createElement(p.Z, {
                        className: d.icon,
                        guaranteedSafeSrc: e.src
                    })))) : null))
                }
        },
        13709: (e, t, a) => {
            a.r(t), a.d(t, {
                AvatarImg: () => n.Z,
                AvatarStack: () => p,
                AvatarStackStringId: () => c,
                BottomDrawer: () => m.Z,
                Card: () => v.Z,
                CoursesMenu: () => G.Z,
                DateInput: () => g.Z,
                DatePicker: () => f.Z,
                DateSelect: () => h.Z,
                DimmedOverlay: () => _.Z,
                ExperimentsContext: () => ne.Z,
                Fade: () => b.Z,
                Flag: () => Z.Z,
                GenericSideTabBar: () => y.Z,
                GoalPicker: () => E.Z,
                InlineSVG: () => k.Z,
                LOADING_SCREEN_ANIMATION: () => D.l,
                LetterAvatar: () => N.Z,
                LingotsMenu: () => H.Z,
                List: () => w.Z,
                LoadingDots: () => S.Z,
                LoadingScreen: () => D.Z,
                LoadingScreenStringId: () => D.R,
                LottieAnimation: () => C.Z,
                MaxBadge: () => Y.Z,
                MenuAnchor: () => V.Z,
                MobileNavBar: () => T.Z,
                Popover: () => u.Z,
                PrefersReducedMotionContext: () => re.Z,
                ProgressBar: () => x.Z,
                RadioGroup: () => M.Z,
                SVGSprite: () => F.Z,
                SearchSuggestions: () => L,
                Select: () => O.Z,
                SelectList: () => R.Z,
                SideTabBar: () => q.Z,
                Spotlight: () => U.Z,
                SpotlightWithPopover: () => B.Z,
                StreakMenu: () => W.Z,
                SuperBadge: () => J.Z,
                TabbedTopbar: () => z.Z,
                ThemeContext: () => le.ZP,
                ThemeProvider: () => K.Z,
                Topbar: () => Q.ZP,
                TopbarLingotsContext: () => oe.Z,
                TopbarStringId: () => j.R,
                directionFromPopperPlacement: () => u.h,
                useAwaitedValue: () => $.Z,
                useClickOutside: () => A.Z,
                useColor: () => le.rd,
                useColors: () => le.cI,
                useFade: () => X.Z,
                useMediaQuery: () => ee.Z,
                usePreferredColorScheme: () => te.Z,
                useSpotlightLocation: () => ae.Z,
                useTheme: () => le.Fg
            });
            var n = a(32579),
                r = a(30751),
                l = a(27378);
            const o = "baz2b",
                s = "JXx78",
                i = "_43SWx";
            var c, u = a(41460);
            ! function(e) {
                e[e.PLUS_NUM = 0] = "PLUS_NUM", e[e.AND_NUM_OTHERS = 1] = "AND_NUM_OTHERS"
            }(c || (c = {}));
            const d = ({
                    children: e,
                    hasPopovers: t,
                    localizer: a,
                    maxOverflowNamesCount: n,
                    popoverDirection: r,
                    users: s
                }) => {
                    const [d, p] = l.useState(!1), m = s.filter((e => !!e.name || !!e.username));
                    return t ? l.createElement("li", {
                        className: o,
                        onMouseEnter: () => p(!0),
                        onMouseLeave: () => p(!1)
                    }, e, d ? l.createElement(u.Z, {
                        direction: r,
                        innerClassName: "_2hlE0",
                        stemClassName: "i25Rq",
                        zIndex: 1
                    }, (n ? m.slice(0, n) : m).map((e => {
                        var t;
                        return l.createElement("span", {
                            className: i,
                            key: e.id
                        }, l.createElement("p", null, null !== (t = e.name) && void 0 !== t ? t : e.username))
                    })), n && m.slice(n).length > 0 ? l.createElement("span", {
                        className: i
                    }, l.createElement("p", null, a(c.AND_NUM_OTHERS, {
                        num: m.slice(n).length
                    }))) : null) : null) : l.createElement("li", {
                        className: o
                    }, e)
                },
                p = ({
                    avatarDisplaySize: e,
                    avatarSize: t = "small",
                    className: a,
                    hasPopovers: o = !1,
                    localizer: i,
                    maxFaceCount: u,
                    maxOverflowNamesCount: p,
                    popoverDirection: m = "up",
                    style: v,
                    users: g
                }) => {
                    const h = null != e ? e : n.D[t],
                        f = g.slice(u);
                    return l.createElement("ul", {
                        className: (0, r.Z)("_3asxr", a),
                        style: v
                    }, g.slice(0, u).map((a => l.createElement(d, {
                        hasPopovers: o,
                        key: a.id,
                        localizer: i,
                        popoverDirection: m,
                        users: [a]
                    }, l.createElement(n.Z, {
                        className: s,
                        displaySize: e,
                        size: t,
                        user: a
                    })))), f.length > 0 ? l.createElement(d, {
                        hasPopovers: o,
                        localizer: i,
                        maxOverflowNamesCount: p,
                        popoverDirection: m,
                        users: f
                    }, l.createElement("div", {
                        className: (0, r.Z)(s, "_2HiAy"),
                        style: {
                            height: h,
                            width: h
                        }
                    }, i(c.PLUS_NUM, {
                        num: f.length
                    }))) : null)
                };
            var m = a(3732),
                v = a(93563),
                g = a(45051),
                h = a(99975),
                f = a(38585),
                _ = a(97390),
                b = a(57491),
                Z = a(2559),
                y = a(20069),
                E = a(92475),
                k = a(93611),
                N = a(57052),
                w = a(41635),
                S = a(93030),
                D = a(95411),
                C = a(13797),
                T = a(91647),
                x = a(6154),
                M = a(48535);
            var I = a(89046),
                A = a(63169),
                P = a(39241);
            const L = l.forwardRef((({
                className: e,
                disabled: t,
                initialItems: a,
                items: n,
                highlightDescription: o,
                highlightText: s,
                match: i,
                onChange: c,
                onKeyDown: u,
                onKeyUp: d,
                onMouseUp: p,
                onSelect: m,
                placeholder: v,
                query: g,
                style: h,
                value: f
            }, _) => {
                const b = (0, P.Z)(),
                    [Z, y] = l.useState(!1),
                    E = l.useRef(null),
                    k = l.useRef(null);
                return (0, A.Z)({
                    disabled: !Z,
                    onClick: () => y(!1),
                    ref: E
                }), l.useImperativeHandle(_, (() => ({
                    getSearchEl: () => {
                        var e, t;
                        return null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.getSearchEl()) && void 0 !== t ? t : null
                    }
                })), []), l.createElement("div", {
                    className: (0, r.Z)("_2ZE5v", e),
                    onBlur: e => {
                        const t = e.relatedTarget;
                        e.currentTarget.contains(t) || y(!1)
                    },
                    onFocus: () => y(!0),
                    onKeyDown: u,
                    onKeyUp: d,
                    onMouseUp: p,
                    ref: E,
                    style: h
                }, l.createElement(I.Z, {
                    "aria-controls": b,
                    "aria-haspopup": "listbox",
                    className: "_3WHvK",
                    tabIndex: -1,
                    type: "search"
                }), l.createElement(w.Z, {
                    className: "_1Zk-_",
                    disabled: t,
                    displayQuery: f,
                    highlightDescription: o,
                    highlightText: s,
                    id: b,
                    initialItems: a,
                    items: Z ? n : [],
                    match: i,
                    onChange: e => {
                        var t;
                        null == m || m({
                            value: n[e.selectedIndices[0]]
                        }), null === (t = k.current) || void 0 === t || t.focus()
                    },
                    onQueryChange: c,
                    query: null != g ? g : f,
                    ref: k,
                    scrollable: !0,
                    searchPlaceholder: v,
                    selectedIndices: [],
                    showSearch: !0
                }))
            }));
            var O = a(71211),
                R = a(37773),
                U = a(92459),
                B = a(76320),
                F = a(78211),
                z = a(98530),
                K = a(68744),
                G = a(95786),
                H = a(43798),
                Y = a(49966),
                V = a(18733),
                q = a(21110),
                W = a(9071),
                J = a(83195),
                Q = a(58009),
                j = a(83467),
                $ = a(61429),
                X = a(91374),
                ee = a(26119),
                te = a(3192),
                ae = a(90402),
                ne = a(36099),
                re = a(27272),
                le = a(64502),
                oe = a(86251)
        }
    }
]);