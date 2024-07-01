"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [7937], {
        50893: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            const n = {
                "width-show-labels": "1160px",
                container: "_2Baa7",
                "_flex-row-center": "tabxr",
                content: "e1t8Z",
                element: "_2oYVz tabxr",
                "tab-height": "_2qgM4",
                "highlighted-tab": "vcNMY",
                "tab-label": "_1lWY6",
                "overflow-tab-label": "_2SacL _1lWY6",
                hoverable: "_1Wplc",
                "tab-icon": "_2Gc3B",
                "tab-icon-container": "yoxT0",
                "topbar-dot": "ZS9aU",
                "mistakes-dot": "_1GpfR",
                active: "_2LnhS",
                "tab-link": "NoWnK",
                "duolingo-link-container": "_3xTFo",
                "duolingo-link-container-streak-society": "_2KWMR _3xTFo",
                "duolingo-logo-link": "_1Mak3",
                "duolingo-logo": "_1Uajw",
                "duolingo-logo-streak-society": "_2gZ2- _1Uajw",
                "duolingo-logo-silhouette": "_1VbKd",
                "duolingo-logo-silhouette-streak-society": "_2i85C _1VbKd",
                "element-overflow-tab": "_1eqxb _2oYVz tabxr",
                "menu-overflow-tab": "_2JAtN _1eqxb _2oYVz tabxr",
                "overflow-tab-container": "_3HatJ",
                "overflow-menu-container": "Iutqw",
                "_overflow-entry": "yb-vp",
                "overflow-tab-entry": "_2VCvy yb-vp",
                "overflow-menu-entry": "_2np5u yb-vp",
                "overflow-tab-icon": "_3iWUs _2Gc3B",
                _avatar: "_3vim6",
                "avatar-icon": "_3RwFW _3vim6",
                "letter-avatar": "_3F136 _3vim6",
                "overflow-popover": "DlYrK",
                "tab-popover": "lTpj3"
            }
        },
        32579: (e, t, a) => {
            a.d(t, {
                D: () => s,
                Z: () => c
            });
            var n = a(30751),
                o = a(27378),
                l = a(12725),
                r = a(51862);
            var i = a(57052);
            const s = {
                    large: 63,
                    medium: 48,
                    small: 30,
                    xlarge: 77,
                    xxlarge: 90
                },
                c = ({
                    forceNoPicture: e = !1,
                    className: t,
                    displaySize: a,
                    size: c,
                    user: d,
                    isSelf: u = !1,
                    avatarsDisabled: v = !1
                }) => {
                    var m;
                    const b = d.picture ? `${d.picture}${c?`/${c}`:""}` : void 0,
                        f = null != a ? a : c ? s[c] : s.medium;
                    return !b || l.h2.test(b) || e || v ? o.createElement(i.Z, {
                        className: t,
                        id: d.id,
                        name: d.name,
                        size: f,
                        style: u && !e ? "ghost" : "colored",
                        username: d.username
                    }) : o.createElement("img", {
                        alt: null !== (m = d.name) && void 0 !== m ? m : d.username,
                        className: (0, n.Z)("_3gkik", r.q, t),
                        src: b,
                        style: {
                            height: f,
                            width: f
                        }
                    })
                }
        },
        93563: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var n = a(30751),
                o = a(27378),
                l = a(47301);
            var r = a(48535),
                i = a(14688);
            var s = a(17734);
            const c = o.forwardRef(((e, t) => {
                const {
                    children: a,
                    className: c,
                    disabled: d = !1,
                    onChange: u,
                    onClick: v,
                    onFocus: m,
                    onKeyDown: b,
                    onTouchStart: f,
                    role: g,
                    unstyledDisabled: h,
                    value: p,
                    ...w
                } = e, {
                    checked: E,
                    name: k,
                    radioGroupContext: Z,
                    ref: y,
                    roving: C,
                    tabIndex: T
                } = (e => {
                    var t;
                    const a = o.useContext(r.L),
                        n = o.useRef(null),
                        l = a ? a.value === e.value : !0 === e.checked,
                        s = a ? void 0 : e.name,
                        c = ((e, {
                            disabled: t,
                            selected: a
                        }) => {
                            const n = o.useContext(i.d);
                            return o.useEffect((() => {
                                if (n) return n.add(e), () => n.remove(e)
                            }), []), o.useEffect((() => {
                                if (n && t) return n.disable(e), () => n.enable(e)
                            }), [t]), o.useEffect((() => {
                                n && a && n.select(e)
                            }), [a]), {
                                onFocus: o.useCallback((() => null == n ? void 0 : n.focus(e)), [n, e]),
                                tabIndex: (null == n ? void 0 : n.tabFocusRef) !== e || t ? -1 : 0
                            }
                        })(n, {
                            disabled: "disabled" === e.state,
                            selected: l
                        });
                    return {
                        checked: l,
                        name: s,
                        radioGroupContext: a,
                        ref: n,
                        roving: c,
                        tabIndex: a ? c.tabIndex : null !== (t = e.tabIndex) && void 0 !== t ? t : "disabled" === e.state ? -1 : 0
                    }
                })({
                    checked: e.checked,
                    name: e.name,
                    state: d ? "disabled" : "enabled",
                    tabIndex: e.tabIndex,
                    value: p
                }), x = Z ? "radio" : e.role, N = (0, s.Z)(f), _ = () => {
                    null == u || u({
                        checked: "checkbox" !== x || !E
                    }), void 0 !== p && (null == Z || Z.onChange(p))
                };
                return o.useEffect((() => {
                    var e;
                    return null === (e = y.current) || void 0 === e || e.addEventListener("web-ui_select", _), () => {
                        var e;
                        return null === (e = y.current) || void 0 === e ? void 0 : e.removeEventListener("web-ui_select", _)
                    }
                }), []), o.useEffect((() => {
                    Z ? ("checkbox" === x && console.warn("A Card with a checkbox role should not be part of a RadioGroup."), void 0 === p && console.warn("Cards in a RadioGroup should specify the value property.")) : "radio" === x && console.warn("A Card with a radio role should be part of a RadioGroup.")
                })), o.createElement("div", {
                    "aria-checked": E,
                    "aria-disabled": d,
                    "aria-label": k,
                    className: (0, n.Z)("-XCTI", {
                        _3gk8O: E,
                        "_2R-aH": d,
                        _1VWfn: h
                    }, c),
                    onClick: e => {
                        d || _(), null == v || v(e)
                    },
                    onFocus: e => {
                        d || C.onFocus(), null == m || m(e)
                    },
                    onKeyDown: e => {
                        if (!d)
                            if (" " === e.key) _(), e.preventDefault();
                            else if (Z) {
                            switch (e.key) {
                                case "ArrowLeft":
                                case "ArrowUp":
                                    Z.previous(y);
                                    break;
                                case "ArrowDown":
                                case "ArrowRight":
                                    Z.next(y);
                                    break;
                                default:
                                    return
                            }
                            e.preventDefault()
                        }
                        null == b || b(e)
                    },
                    onTouchStart: N,
                    ref: (0, l.Z)([y, t]),
                    role: x,
                    tabIndex: T,
                    ...w
                }, a)
            }))
        },
        20069: (e, t, a) => {
            a.d(t, {
                Z: () => h
            });
            var n = a(30751),
                o = a(27378),
                l = a(40892),
                r = a(63245),
                i = a(50893),
                s = a(28720),
                c = a(36666),
                d = a(41460),
                u = a(18733),
                v = a(94579),
                m = a(76805),
                b = a(98688);
            const f = ({
                    localizer: e,
                    linkComponent: t,
                    activeTab: a,
                    activeTabInteractive: s = !0,
                    highlightedElement: f,
                    mainTabs: h,
                    overflowTabs: p,
                    overflowMenuEntries: w,
                    scrollOffset: E,
                    showTab: k,
                    zIndex: Z
                }) => {
                    const y = "more",
                        C = o.useRef(null),
                        T = o.useRef(null),
                        x = o.useRef(null),
                        [N, _] = (0, l.r)(),
                        [I, R] = o.useState(!1),
                        [S, z] = (0, l.r)(),
                        [M, U] = o.useState(0);
                    o.useLayoutEffect((() => {
                        var e;
                        N === y && C.current && (null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) >= window.innerHeight - 24 ? R(!0) : R(!1)
                    }), [N]), o.useLayoutEffect((() => {
                        var e, t;
                        U(null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== t ? t : 0)
                    }), [f]);
                    const D = "rtl" === document.dir,
                        W = t => "label" in t ? e(t.label) : t.labelText;
                    return o.createElement(o.Fragment, null, h.map((l => {
                        var h;
                        const R = "tab" === (null == f ? void 0 : f.type) && f.tabId === l.id,
                            U = o.createElement("span", {
                                className: (0, n.Z)(l.id === y ? i.Z["element-overflow-tab"] : i.Z.element, i.Z["tab-height"], r.Z["tab-container"], {
                                    [i.Z["highlighted-tab"]]: R,
                                    [r.Z["active-tab"]]: l.id === a,
                                    [i.Z.hoverable]: l.id !== a
                                }),
                                ref: l.id === y ? T : R ? x : void 0,
                                style: R ? {
                                    zIndex: Z + 100
                                } : void 0
                            }, o.createElement("div", {
                                className: i.Z["tab-icon-container"]
                            }, void 0 === l.iconUrl ? null !== (h = l.icon) && void 0 !== h ? h : null : o.createElement("img", {
                                className: i.Z["tab-icon"],
                                src: l.iconUrl
                            }), !0 === l.dot ? o.createElement(m.Z, {
                                className: i.Z["topbar-dot"]
                            }) : "number" == typeof l.dot ? o.createElement(b.Z, {
                                className: i.Z["mistakes-dot"],
                                numMistakes: l.dot
                            }) : null), o.createElement("span", {
                                className: i.Z["tab-label"]
                            }, W(l)), R && "tab" === (null == f ? void 0 : f.type) ? o.createElement(v.Z, {
                                direction: "right",
                                offset: f.popoverOffset,
                                onRequestClose: f.onRequestClose,
                                style: {
                                    left: D ? "unset" : M + 16,
                                    position: "fixed",
                                    right: D ? M + 16 : "unset",
                                    top: "unset",
                                    transform: "none"
                                },
                                subtitle: f.messageSubtitle,
                                title: f.messageTitle,
                                zIndex: Z + 100
                            }) : null, S !== l.id || l.id === y || R ? null : o.createElement("div", {
                                className: i.Z["tab-popover"],
                                style: {
                                    transform: `translateY(${-(null!=E?E:0)}px)`,
                                    zIndex: Z + 100
                                }
                            }, W(l)));
                        return o.createElement("div", {
                            className: (0, n.Z)({
                                [i.Z.active]: l.id === a
                            }),
                            key: l.id,
                            onMouseEnter: () => z(l.id),
                            onMouseLeave: () => z(void 0)
                        }, (L = l.id === y ? (a => {
                            var n, l, r, s, v, m, b;
                            return o.createElement(u.Z, {
                                className: i.Z["menu-overflow-tab"],
                                hideMenu: () => _(void 0),
                                isMobile: !1,
                                showMenu: () => _(y),
                                toggleMenu: () => _(N ? void 0 : y)
                            }, a, N === y ? o.createElement(d.Z, {
                                className: i.Z["overflow-popover"],
                                direction: D ? "left" : "right",
                                ref: C,
                                stem: "none",
                                style: {
                                    left: D ? T.current ? (null === (n = T.current) || void 0 === n ? void 0 : n.getBoundingClientRect().left) - 248 - 24 : 0 : null !== (r = null === (l = T.current) || void 0 === l ? void 0 : l.getBoundingClientRect().right) && void 0 !== r ? r : 0,
                                    position: "fixed",
                                    top: I ? window.innerHeight - 24 - (null !== (v = null === (s = C.current) || void 0 === s ? void 0 : s.getBoundingClientRect().height) && void 0 !== v ? v : 0) : (null !== (b = null === (m = T.current) || void 0 === m ? void 0 : m.getBoundingClientRect().top) && void 0 !== b ? b : 0) - 10,
                                    transform: "none"
                                },
                                zIndex: Z + g
                            }, void 0 !== p && p.length > 0 ? o.createElement("div", {
                                className: i.Z["overflow-tab-container"]
                            }, p.filter((e => void 0 === k || k(e.id))).map((e => {
                                var a;
                                return o.createElement(t, {
                                    className: i.Z["overflow-tab-entry"],
                                    "data-test": e.testingTag,
                                    href: e.href,
                                    key: e.id,
                                    onClick: e.onClick,
                                    rel: e.rel,
                                    target: e.target
                                }, void 0 === e.iconUrl ? null !== (a = e.icon) && void 0 !== a ? a : null : o.createElement("img", {
                                    className: i.Z["overflow-tab-icon"],
                                    src: e.iconUrl
                                }), o.createElement("span", {
                                    className: i.Z["overflow-tab-label"]
                                }, W(e)))
                            }))) : null, o.createElement("div", {
                                className: i.Z["overflow-menu-container"]
                            }, null == w ? void 0 : w.map((t => o.createElement(c.Z, {
                                className: i.Z["overflow-menu-entry"],
                                "data-test": t.testingTag,
                                key: t.type,
                                onClick: t.onClick
                            }, e(t.label)))))) : null)
                        })(U) : U, l.id === a && !s || l.id === y ? o.createElement("div", {
                            className: i.Z["tab-link"],
                            "data-test": l.testingTag
                        }, L) : o.createElement(t, {
                            className: i.Z["tab-link"],
                            "data-test": l.testingTag,
                            href: l.href,
                            key: l.id,
                            onClick: l.onClick,
                            rel: l.rel,
                            target: l.target
                        }, L)));
                        var L
                    })))
                },
                g = 10,
                h = ({
                    activeTab: e,
                    activeTabInteractive: t,
                    beforeTabs: a,
                    className: l,
                    highlightedElement: r,
                    linkComponent: c,
                    localizer: d,
                    mainTabs: u,
                    overflowMenuEntries: v,
                    overflowTabs: m,
                    showTab: b,
                    zIndex: h
                }) => {
                    const p = u.filter((e => !1 !== e.isDesktopTab && (void 0 === b || b(e.id))));
                    return o.createElement("div", {
                        className: (0, n.Z)(i.Z.container, l),
                        style: {
                            zIndex: "tab" === (null == r ? void 0 : r.type) ? h : void 0
                        }
                    }, o.createElement("div", {
                        className: (0, n.Z)(s.Z["tab-callout-overlay" + ("tab" === (null == r ? void 0 : r.type) ? "-visible" : "")], s.Z["tab-callout-overlay-no-top-bar"]),
                        style: {
                            zIndex: h + g + 1
                        }
                    }), null != a ? a : null, o.createElement("div", {
                        className: i.Z.content
                    }, o.createElement(f, {
                        activeTab: e,
                        activeTabInteractive: t,
                        highlightedElement: r,
                        linkComponent: c,
                        localizer: d,
                        mainTabs: p,
                        overflowMenuEntries: v,
                        overflowTabs: m,
                        showTab: b,
                        zIndex: h
                    })))
                }
        },
        48535: (e, t, a) => {
            a.d(t, {
                L: () => i,
                Z: () => s
            });
            var n = a(27378),
                o = a(47301),
                l = a(12725),
                r = a(14688);
            const i = n.createContext(void 0),
                s = n.forwardRef((({
                    children: e,
                    name: t,
                    onChange: a,
                    value: s,
                    ...c
                }, d) => {
                    const u = n.useRef(null),
                        v = n.useCallback(((e, t) => {
                            var a, n;
                            const o = Array.from(null !== (n = null === (a = u.current) || void 0 === a ? void 0 : a.querySelectorAll("[aria-disabled='false'][role='radio']")) && void 0 !== n ? n : []);
                            if (o.length) {
                                const a = o.findIndex((t => t.isSameNode(e.current))),
                                    n = o[(0, l.wQ)(a + t, o.length)];
                                n.dispatchEvent(new CustomEvent("web-ui_select")), n.focus()
                            }
                        }), [u]),
                        m = n.useMemo((() => ({
                            next: e => v(e, 1),
                            onChange: e => null == a ? void 0 : a({
                                value: e
                            }),
                            previous: e => v(e, -1),
                            value: s
                        })), [v, a, s]);
                    return n.createElement("div", {
                        "aria-label": t,
                        ref: (0, o.Z)([u, d]),
                        role: "radiogroup",
                        ...c
                    }, n.createElement(i.Provider, {
                        value: m
                    }, n.createElement(r.Z, null, e)))
                }))
        },
        14688: (e, t, a) => {
            a.d(t, {
                Z: () => l,
                d: () => o
            });
            var n = a(27378);
            const o = n.createContext(void 0),
                l = ({
                    children: e
                }) => {
                    const [t, a] = n.useState([]), [l, r] = n.useState([]), [i, s] = n.useState(), [c, d] = n.useState(), u = n.useMemo((() => ({
                        add: e => r((t => ((e, t) => {
                            var a;
                            if (!t.current) throw Error("Cannot insert an unmounted element.");
                            let n = e.length;
                            for (; n > 0; n--) {
                                const o = null === (a = e[n - 1]) || void 0 === a ? void 0 : a.current;
                                if (o && !(o.compareDocumentPosition(t.current) & Node.DOCUMENT_POSITION_PRECEDING)) break
                            }
                            const o = e.slice();
                            return o.splice(n, 0, t), o
                        })(t, e))),
                        disable: e => a((t => [...t, e])),
                        enable: e => a((t => t.filter((t => t !== e)))),
                        focus: e => d(e),
                        remove: e => {
                            a((t => t.filter((t => t !== e)))), r((t => t.filter((t => t !== e))))
                        },
                        select: e => s(e),
                        tabFocusRef: c
                    })), [c]), v = n.useContext(o);
                    return n.useEffect((() => {
                        c && !t.includes(c) && l.includes(c) || d(i && !t.includes(i) ? i : l.find((e => !t.includes(e))))
                    }), [t, l, i, c]), n.useEffect((() => {
                        v && console.warn("RovingTabIndexGroups cannot be nested.")
                    }), [v]), n.createElement(o.Provider, {
                        value: u
                    }, e)
                }
        },
        71211: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            var n = a(27378),
                o = a(30134),
                l = a(55079);
            const r = ({
                className: e,
                disabled: t,
                options: a,
                selectedIconOverride: r,
                text: i,
                type: s,
                value: c,
                ...d
            }) => {
                const u = a.find((e => e.value === c));
                return n.createElement(l.Z, {
                    className: e,
                    disabled: t,
                    icon: null != r ? r : null == u ? void 0 : u.icon,
                    isEmpty: !c,
                    text: null != i ? i : null == u ? void 0 : u.text,
                    type: s
                }, n.createElement("select", { ...d,
                    className: o.Z.input,
                    disabled: t,
                    value: c
                }, a.map(((e, t) => n.createElement("option", {
                    className: o.Z.option,
                    disabled: e.disabled,
                    key: t,
                    value: e.value
                }, e.text)))))
            }
        },
        21110: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n = a(30751),
                o = a(27378),
                l = a(12725),
                r = a(51862),
                i = a(20069),
                s = a(57052);
            const c = a.p + "vendor/3e1b30819460408f2874153396415044.svg",
                d = a.p + "vendor/f16e00b9a2363c9e37b004e61c885f1c.svg",
                u = a.p + "vendor/0cecd302cf0bcd0f73d51768feff75fe.svg";
            var v = a(53051),
                m = a(50893),
                b = a(85917),
                f = a(58009);
            const g = e => e.href && !(e.href.startsWith("/") || e.href.startsWith(window.location.origin)),
                h = ({
                    avatarUrl: e = f.ES,
                    courses: t,
                    isAdminUser: a,
                    isTrialUser: i,
                    tabs: c,
                    tabsWithDot: d,
                    name: u,
                    onProfileMenuEntryClick: v,
                    onTabClick: h,
                    profileMenuEntries: p,
                    showReferralOffer: w,
                    username: E
                }) => {
                    const k = c.find((e => "more" === e.id)),
                        Z = c.filter((e => "more" !== e.id));
                    c = k ? [...Z.filter((e => !g(e))), k] : Z;
                    const y = Z.filter((e => g(e))),
                        C = p.filter((e => (0, b.DP)(e, i, a) && ("free_super" !== e.type || w))).map((e => ({
                            className: m.Z["overflow-menu-entry"],
                            onClick: () => v(e.type),
                            ...e
                        }))),
                        T = (a, c) => {
                            const v = "profile" !== a.id || i ? o.createElement("img", {
                                className: m.Z[c ? "overflow-tab-icon" : "tab-icon"],
                                src: a.activeIconUrl
                            }) : l.h2.test(e) ? o.createElement("span", null, o.createElement(s.Z, {
                                className: m.Z["letter-avatar"],
                                name: u,
                                size: 32,
                                style: "ghost",
                                username: E
                            })) : o.createElement("img", {
                                className: (0, n.Z)(m.Z["avatar-icon"], r.q),
                                src: e.includes("duolingo") ? `${e}/medium` : e
                            });
                            return { ...a,
                                ...(0, f.o8)(a, h, E, t, !0),
                                dot: null == d ? void 0 : d.includes(a.id),
                                icon: v
                            }
                        };
                    return {
                        mainTabs: c.map((e => T(e, !1))),
                        overflowMenuEntries: C,
                        overflowTabs: y.map((e => T(e, !0)))
                    }
                },
                p = ({
                    activeTab: e,
                    activeTabInteractive: t,
                    avatarUrl: a,
                    courses: n,
                    className: l,
                    highlightedElement: r,
                    isAdminUser: s,
                    isPracticeHub: g,
                    learnNavigatesToSections: p,
                    linkComponent: w,
                    localizer: E,
                    name: k,
                    onProfileMenuEntryClick: Z,
                    showTab: y,
                    showReferralOffer: C,
                    tabsWithDot: T,
                    tracker: x,
                    tabCustomizationHook: N,
                    username: _,
                    zIndex: I,
                    ...R
                }) => {
                    const S = (N ? N((0, f.C8)({
                            courses: n,
                            isPracticeHub: g,
                            learnNavigatesToSections: p,
                            showOverflowTabInSideTabs: !0
                        })) : (0, f.C8)({
                            courses: n,
                            isPracticeHub: g,
                            learnNavigatesToSections: p,
                            showOverflowTabInSideTabs: !0
                        })).filter((e => e.isDesktopTab && y(e.id))),
                        z = o.createElement("div", {
                            className: R.showStreakSocietyLogo ? m.Z["duolingo-link-container-streak-society"] : m.Z["duolingo-link-container"]
                        }, o.createElement(w, {
                            className: m.Z["duolingo-logo-link"],
                            href: `${f.Ji}/learn`
                        }, R.showStreakSocietyLogo ? o.createElement("img", {
                            className: m.Z["duolingo-logo-streak-society"],
                            src: c
                        }) : o.createElement("img", {
                            className: m.Z["duolingo-logo"],
                            src: v
                        }), R.showStreakSocietyLogo ? o.createElement("img", {
                            className: m.Z["duolingo-logo-silhouette-streak-society"],
                            src: d
                        }) : o.createElement("img", {
                            className: m.Z["duolingo-logo-silhouette"],
                            src: u
                        }))),
                        M = b.gi.filter((e => R.showMenuEntry(e.type)));
                    return o.createElement(i.Z, {
                        activeTab: e,
                        activeTabInteractive: t,
                        beforeTabs: z,
                        className: l,
                        highlightedElement: r,
                        linkComponent: w,
                        localizer: E,
                        showTab: y,
                        zIndex: I,
                        ...h({
                            avatarUrl: a,
                            courses: n,
                            isAdminUser: s,
                            isTrialUser: void 0 === _,
                            name: k,
                            onProfileMenuEntryClick: Z,
                            onTabClick: e => {
                                f.O2.includes(e) && x("tab_tapped", {
                                    tab_name: e
                                }), R.onTabClick && R.onTabClick(e)
                            },
                            profileMenuEntries: M,
                            showReferralOffer: C,
                            tabs: S,
                            tabsWithDot: T,
                            username: _
                        })
                    })
                }
        }
    }
]);