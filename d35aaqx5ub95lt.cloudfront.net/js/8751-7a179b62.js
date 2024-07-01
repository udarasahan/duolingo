"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [8751], {
        63245: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            const n = {
                "tab-container": "_3y3La",
                "active-tab": "_215lB"
            }
        },
        28720: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            const n = {
                _wrap: "_1tN9D",
                mobile: "_1AHWk _1tN9D",
                desktop: "_19VYi _1tN9D",
                "_flex-row-center": "hJxva",
                content: "_3IiUo",
                "desktop-side-bar": "k5-BJ",
                element: "te5zl hJxva",
                "menu-anchor": "_2JsCs hJxva",
                menu: "_22o_V",
                "highlighted-tab": "_20E00",
                "stat-menu-anchor": "SmUBm _2JsCs hJxva",
                "content-fewer-stats": "_3VN46 _3IiUo",
                _stat: "nHkUv",
                "streak-icon-container": "i6euo",
                "streak-icon": "_3bjMi",
                "streak-icon-dark": "_24qIR _3bjMi",
                "streak-alert-icon": "_1G4D6",
                "streak-stat": "_19pR_ nHkUv",
                "lingot-icon": "_2vH7x",
                "lingot-stat": "_31LtN nHkUv",
                "gem-stat": "_3FYAH nHkUv",
                "grey-fade-stat": "_3BLez nHkUv",
                "gray-stat": "_16PBx nHkUv",
                "overflow-menu": "_2cCwQ",
                "overflow-menu-entry": "_2wPBH",
                "overflow-menu-entry-icon": "_353py",
                "overflow-menu-entry-label": "_1rwKz",
                "tab-label": "uy5ux",
                "tab-label-more": "_3nAzl uy5ux",
                "tab-entry": "_3dFik",
                active: "Ybzwc",
                "tab-icon": "_3k3p3",
                "tab-icon-container": "_1RARC",
                "topbar-dot": "_2-l5F",
                "stat-menu-topbar-dot": "mWylF _2-l5F",
                "desktop-tab-bar-mistakes-dot": "_1mRFY",
                "more-menu-icon": "_2p2FF _3k3p3",
                "tab-spacer": "_27CuN",
                "more-menu-entry": "_2t7vF hJxva",
                "more-menu-entry-icon": "NGeH5",
                "more-menu-entry-label": "_3_dc_",
                "avatar-icon": "_18tRM",
                "avatar-bell-container": "_2TeNw",
                "bell-icon": "_1z0H3",
                overlay: "_2Jlki",
                "overlay-visible": "M3u-m _2Jlki",
                "tab-callout-overlay": "_3OKZq _2Jlki",
                "tab-callout-overlay-visible": "_28BTC M3u-m _2Jlki",
                "tab-callout-overlay-no-top-bar": "_3UlQ5",
                "more-menu-entry-beta-label": "fyDJE",
                "overflow-menu-entry-beta-label": "_2wF-T",
                "duolingo-icon-container": "_2O7zi",
                "duolingo-icon": "_2DRlG",
                "go-super-text": "_1-iRK",
                "go-super-container": "_2kogU"
            }
        },
        95786: (e, t, a) => {
            a.d(t, {
                Z: () => b
            });
            var n = a(30751),
                i = a(27378),
                s = a(64502),
                o = a(2559),
                l = a(41460),
                r = a(87011),
                c = a(39241);
            const d = a.p + "vendor/1c0b95704aa6d688b63359d1bce589b1.svg",
                m = a.p + "vendor/449465bd011a98bf7188792196ae499d.svg";
            var u = a(38706),
                v = a(83467);
            const b = ({
                courses: e,
                currentCourse: t,
                id: a,
                isMobile: b,
                localizer: f,
                onCourseClick: E,
                onHideMenu: p,
                showHeader: g,
                zIndex: _
            }) => {
                const h = "dark" === (0, s.Fg)(),
                    N = (0, c.Z)(),
                    T = i.useRef([]),
                    I = [],
                    k = [];
                for (const a of e) a.fromLanguageId === t.fromLanguageId ? I.push(a) : k.push(a);
                const y = [...I, ...k],
                    R = y.length,
                    w = e => {
                        E(e === R ? "add-new-course" : y[e])
                    },
                    {
                        getTabFocusIndex: C,
                        handleKeyDown: O,
                        handleKeyUp: Z,
                        setTabFocusIndex: M
                    } = (0, r.Z)({
                        filteredItems: [...y.map(((e, t) => ({
                            index: t,
                            item: {}
                        }))), {
                            index: R,
                            item: {}
                        }],
                        itemRefs: T,
                        multiple: !1,
                        onChange: (e, [t]) => {
                            "add" === e && w(t)
                        },
                        selectedIndices: []
                    });
                i.useLayoutEffect((() => {
                    const e = T.current[C()];
                    null == e || e.focus()
                }), []);
                const S = y.map(((e, a) => i.createElement("div", {
                        className: (0, n.Z)(g ? "_2RTI5" : "_3HqrI", t.courseId === e.courseId ? g ? "_3wKuC" : "_2qp11" : void 0),
                        key: e.courseId,
                        onClick: () => w(a),
                        onFocus: () => M(a),
                        onKeyDown: e => O(a, e),
                        onKeyUp: e => Z(a, e),
                        ref: e => T.current[a] = e,
                        role: "menuitem",
                        tabIndex: a === C() ? 0 : -1
                    }, i.createElement("span", {
                        className: "_33SnL"
                    }, i.createElement(o.Z, {
                        className: "_3Z-qR",
                        lang: e.learningLanguageId,
                        size: 40
                    }), i.createElement(o.Z, {
                        className: (0, n.Z)("UKf11", e.fromLanguageId === t.fromLanguageId ? "_1PP8C" : null),
                        lang: e.fromLanguageId,
                        size: 40
                    })), e.learningLanguageName))),
                    A = i.createElement("div", {
                        className: g ? "_2XsEf" : "_1Cg2z",
                        "data-test": "add-new-course",
                        onClick: () => w(R),
                        onFocus: () => M(R),
                        onKeyDown: e => O(R, e),
                        onKeyUp: e => Z(R, e),
                        ref: e => T.current[R] = e,
                        role: "menuitem",
                        tabIndex: R === C() ? 0 : -1
                    }, i.createElement("img", {
                        className: "_2_fhn",
                        src: h ? d : m
                    }), i.createElement("span", {
                        className: "W2GSA"
                    }, f(b ? v.R.COURSES : v.R.NAV_ADD_COURSE))),
                    D = i.createElement("div", {
                        className: "_2CU3K",
                        id: N
                    }, f(v.R.MY_COURSES)),
                    U = i.createElement("div", {
                        "aria-labelledby": g ? N : void 0,
                        "aria-orientation": b ? "horizontal" : "vertical",
                        className: "q1yRl",
                        "data-test": "courses-menu-content",
                        id: a,
                        onKeyDown: e => {
                            "Escape" === e.key && p()
                        },
                        role: "menu",
                        tabIndex: -1
                    }, g ? D : null, b ? S : i.createElement("div", {
                        className: g ? "_2Xp7p" : "B3o4W"
                    }, S), A);
                return b ? i.createElement(u.Z, {
                    className: "_3U42u",
                    onCloseDrawer: p
                }, U) : i.createElement(l.Z, {
                    direction: "down",
                    innerClassName: "_1sDll",
                    zIndex: _
                }, U)
            }
        },
        43798: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var n = a(30751),
                i = a(27378),
                s = a(95931),
                o = a(41460);
            const l = a.p + "vendor/33b35ed687f7caabe24c79829a1b98a3.svg",
                r = a.p + "vendor/436937e73053354e10bf1bdd079597b6.svg";
            var c = a(38706),
                d = a(58009),
                m = a(83467);
            const u = ({
                courses: e,
                isMobile: t,
                currencyAmount: a,
                linkComponent: u,
                localizer: v,
                onHideMenu: b,
                onTabClick: f,
                zIndex: E,
                showGems: p
            }) => {
                const g = (0, d.C8)({
                        courses: e
                    }),
                    _ = i.createElement("div", {
                        className: "_1k2xg _3Cz1F",
                        "data-test": "lingots-menu-content"
                    }, i.createElement("img", {
                        className: "_2D2Kl",
                        src: p ? l : r
                    }), i.createElement("div", {
                        className: "_2ZIr7"
                    }, i.createElement("h2", null, v(p ? m.R.GEMS : m.R.LINGOTS)), i.createElement("p", null, p ? v(m.R.YOU_HAVE_NUM_GEMS, {
                        num: a
                    }) : v(m.R.YOU_HAVE_LINGOTS, {
                        num_rupees: a
                    })), i.createElement(u, { ...(0, d.o8)(g.filter((e => "shop" === e.id))[0], f),
                        className: (0, n.Z)((0, s.yO)({
                            color: "macaw",
                            variant: "text-no-padding"
                        }), "AAp_9")
                    }, v(m.R.GO_TO_SHOP))));
                return t ? i.createElement(c.Z, {
                    onCloseDrawer: b
                }, _) : i.createElement(o.Z, {
                    direction: "down",
                    offset: -115,
                    zIndex: E
                }, _)
            }
        },
        49966: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n = a(30751),
                i = a(27378);
            const s = a.p + "vendor/43ae4670b321ea3e5807b2a983864d18.svg",
                o = ({
                    className: e
                }) => i.createElement("img", {
                    className: (0, n.Z)("_3q9Ab", e),
                    src: s
                })
        },
        18733: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a(27378);
            const i = ({
                children: e,
                className: t,
                hideMenu: a,
                isMobile: i,
                popupId: s,
                popupType: o,
                showMenu: l,
                toggleMenu: r
            }) => n.createElement("span", {
                "aria-controls": s,
                "aria-haspopup": o,
                className: t,
                onClick: () => r(),
                onKeyDown: e => {
                    " " !== e.key && "Enter" !== e.key || (r(), e.preventDefault())
                },
                onMouseEnter: () => !i && l(),
                onMouseLeave: () => !i && a(),
                role: "button",
                tabIndex: 0
            }, e)
        },
        38706: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(30751),
                i = a(27378);
            const s = e => i.createElement(i.Fragment, null, i.createElement("div", {
                className: "_90Qjk"
            }), i.createElement("div", {
                className: (0, n.Z)("_2nfEi", e.className)
            }, i.createElement("div", {
                className: "_2TgqW"
            }, e.children), i.createElement("div", {
                className: "_2ZlJs",
                onClick: () => e.onCloseDrawer()
            })))
        },
        85917: (e, t, a) => {
            a.d(t, {
                gi: () => u,
                DP: () => v,
                ZP: () => E
            });
            var n = a(30751),
                i = a(27378),
                s = a(51862),
                o = a(36666),
                l = a(57052),
                r = a(41460),
                c = a(72492);
            const d = {
                "_flex-row-center": "_2khdA",
                "_notification-icon": "_2EJzw",
                "profile-menu": "PxWQM",
                "_profile-menu-padding": "_2iE-l",
                "profile-menu-title": "_2vufB _2iE-l",
                "profile-menu-see-all": "jf-lB",
                "profile-menu-entry": "_1h3iW _2iE-l",
                "notification-menu-header": "_2pGZY _2iE-l",
                "notification-menu-header-title": "_2Nr7Q",
                "notification-menu-entry": "_1aynm _2khdA _2iE-l",
                "notification-menu-entry-content": "x59h- _2khdA",
                "notification-avatar": "I8PZa _2EJzw",
                "notification-message": "_2IA96",
                "notification-follow-button": "_2Vme6",
                "notification-unfollow-button": "_7eHQL",
                "notification-streak-icon": "_39yks _2EJzw",
                "red-dot": "_3oDq0"
            };
            var m = a(83467);
            const u = [{
                    label: m.R.CREATE_PROFILE,
                    testingTag: "create-account-button",
                    type: "create_profile",
                    visibility: ["trial"]
                }, {
                    label: m.R.YOUR_PROFILE,
                    testingTag: "profile-button",
                    type: "profile",
                    visibility: ["normal", "admin"]
                }, {
                    label: m.R.FRIEND_UPDATES,
                    testingTag: "friend-updates-button",
                    type: "friend_updates",
                    visibility: ["normal", "admin"]
                }, {
                    label: m.R.NAV_SETTINGS,
                    testingTag: "settings-button",
                    type: "settings",
                    visibility: ["trial", "normal", "admin"]
                }, {
                    label: m.R.FREE_SUPER_DUOLINGO,
                    testingTag: "free-plus-button",
                    type: "free_super",
                    visibility: ["normal", "admin"]
                }, {
                    label: m.R.NAV_HELP,
                    testingTag: "help-button",
                    type: "help",
                    visibility: ["trial", "normal", "admin"]
                }, {
                    label: m.R.ADMIN,
                    testingTag: "admin-button",
                    type: "admin",
                    visibility: ["admin"]
                }, {
                    label: m.R.SIGN_IN,
                    testingTag: "sign-in-button",
                    type: "sign_in",
                    visibility: ["trial"]
                }, {
                    label: m.R.LOGOUT,
                    testingTag: "logout-button",
                    type: "logout",
                    visibility: ["normal", "admin"]
                }],
                v = (e, t, a) => [t ? "trial" : "normal", ...a ? ["admin"] : []].filter((t => e.visibility.includes(t))).length > 0,
                b = {
                    postprocess: e => e.replace('href="/', 'href="https://www.duolingo.com/')
                },
                f = (e, t, a) => e.includes("default_") ? i.createElement(l.Z, {
                    className: d["notification-avatar"],
                    id: t,
                    name: void 0,
                    size: 40,
                    style: "colored",
                    username: a
                }) : i.createElement("img", {
                    className: (0, n.Z)(d["notification-avatar"], s.q),
                    src: e.includes("duolingo") ? `${e}/medium` : e
                }),
                E = ({
                    isAdminUser: e,
                    isTrialUser: t,
                    localizer: a,
                    notifications: l,
                    onFollowClick: u,
                    onProfileClick: E,
                    onViewAllNotifications: p,
                    profileMenuEntries: g,
                    showReferralOffer: _,
                    zIndex: h
                }) => i.createElement(r.Z, {
                    direction: "down",
                    offset: -30,
                    zIndex: h
                }, i.createElement("div", {
                    className: d["profile-menu"],
                    "data-test": "account-menu-content"
                }, l && l.length > 0 && [i.createElement("div", {
                    className: d["notification-menu-header"],
                    key: "notifications-header"
                }, i.createElement("div", {
                    className: d["notification-menu-header-title"]
                }, a(m.R.NOTIFICATION_SETTINGS_HEADER)), p ? i.createElement(o.Z, {
                    color: "macaw",
                    onClick: p,
                    variant: "text-no-padding"
                }, a(m.R.SEE_ALL)) : null), i.createElement("div", {
                    key: "notifications"
                }, l.slice(0, 3).map((e => ((e, t, a) => {
                    switch (e.type) {
                        case "accepted_invite":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, f(e.avatar, e.userId, e.username), i.createElement("span", {
                                className: (0, n.Z)(d["notification-message"], s.q)
                            }, e.invited ? a(m.R.ACCEPTED_INVITE, {
                                username: e.username
                            }) : a(m.R.ACCEPTED_FRIEND_INVITE, {
                                "#inviter": "",
                                "/inviter": "",
                                username: e.username
                            }, b)));
                        case "comment":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, f(e.avatar, e.userId, e.username), i.createElement("span", {
                                className: (0, n.Z)(d["notification-message"], s.q)
                            }, a(m.R.COMMENTED_ON_YOUR_POST, {
                                comment_title: e.commentTitle,
                                url: e.commentHref,
                                username: e.username
                            }, b)));
                        case "follow":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, f(e.avatar, e.userId, e.username), i.createElement("span", {
                                className: (0, n.Z)(d["notification-message"], s.q)
                            }, a(m.R.ADDED_YOU_AS_FRIEND, {
                                username: e.username
                            }, b)), t ? i.createElement(o.Z, {
                                className: d[e.isFollowing ? "notification-unfollow-button" : "notification-follow-button"],
                                color: e.isFollowing ? void 0 : "hare",
                                onClick: a => {
                                    a.stopPropagation(), t(e)
                                },
                                variant: "stroke"
                            }, a(e.isFollowing ? m.R.FOLLOWING : m.R.FOLLOW)) : null);
                        case "pass":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, f(e.avatar, e.userId, e.username), i.createElement("span", {
                                className: (0, n.Z)(d["notification-message"], s.q)
                            }, a(m.R.PASSED_YOU_IN_XP, {
                                username: e.username
                            }, b)));
                        case "streak":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, i.createElement("img", {
                                className: d["notification-streak-icon"],
                                src: c
                            }), i.createElement("span", {
                                className: d["notification-message"]
                            }, a(m.R.REACH_STREAK, {
                                num_rupees: e.lingots,
                                streak_days: e.streakDays
                            })));
                        case "streak_wager":
                            return i.createElement("div", {
                                className: d["notification-menu-entry"],
                                key: e.id
                            }, i.createElement("img", {
                                className: d["notification-streak-icon"],
                                src: c
                            }), i.createElement("span", {
                                className: d["notification-message"]
                            }, a("won" === e.status ? m.R.WON_WAGER : m.R.LOST_WAGER)));
                        default:
                            throw Error(`Unrecognized notification type: ${e.type}`)
                    }
                })(e, u, a))))], i.createElement("div", {
                    className: d["profile-menu-title"],
                    "data-test": "account-button",
                    key: "profile-header"
                }, a(m.R.SETTINGS_NAV_ACCOUNT)), g.filter((a => v(a, t, e) && ("free_super" !== a.type || _))).map((e => i.createElement(o.Z, {
                    className: d["profile-menu-entry"],
                    "data-test": e.testingTag,
                    key: e.type,
                    onClick: () => E(e.type)
                }, a(e.label), e.hasUpdate ? i.createElement("div", {
                    className: d["red-dot"]
                }) : null)))))
        },
        9071: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var n = a(27378),
                i = a(41460);
            const s = "fUv9a";
            var o = a(38706);
            const l = ({
                children: e,
                isMobile: t,
                onHideMenu: a,
                zIndex: l
            }) => t ? n.createElement(o.Z, {
                onCloseDrawer: a
            }, n.createElement("div", {
                className: s
            }, e)) : n.createElement(i.Z, {
                direction: "down",
                zIndex: l
            }, n.createElement("div", {
                className: s
            }, e))
        },
        83195: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n = a(30751),
                i = a(27378);
            const s = a.p + "vendor/a0ee30fa22ca3d00e9e5db913b1965b5.svg",
                o = ({
                    className: e
                }) => i.createElement("img", {
                    className: (0, n.Z)("xmaX7", e),
                    src: s
                })
        },
        94579: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var n = a(30751),
                i = a(27378),
                s = a(41460);
            const o = "_1_AVR",
                l = ({
                    direction: e,
                    offset: t,
                    onRequestClose: a,
                    subtitle: l,
                    style: r,
                    title: c,
                    zIndex: d
                }) => i.createElement(s.Z, {
                    className: "up" === e ? "_3bSpb" : "down" === e ? "_2nQ1D" : "left" === e ? "_1Z2Ut" : "jEFqH",
                    direction: e,
                    innerClassName: (0, n.Z)(o, "_20JaH _2-2Xo"),
                    offset: t,
                    onRequestClose: a,
                    stemClassName: o,
                    style: r,
                    zIndex: d
                }, i.createElement("h2", null, c), i.createElement("p", null, l))
        },
        76805: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(30751),
                i = a(27378);
            const s = ({
                className: e
            }) => i.createElement("div", {
                className: (0, n.Z)("_17ohR", e)
            })
        },
        98688: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(30751),
                i = a(27378);
            const s = ({
                className: e,
                numMistakes: t
            }) => i.createElement("div", {
                className: (0, n.Z)("_2ZK0t", e, {
                    _3KvAX: t < 10
                })
            }, Math.min(t, 99))
        },
        58009: (e, t, a) => {
            a.d(t, {
                ES: () => ye,
                O2: () => Ie,
                ZP: () => xe,
                o8: () => Re,
                C8: () => Te,
                Ji: () => Ne
            });
            var n = a(30751),
                i = a(27378),
                s = a(64502),
                o = a(86251),
                l = a(12725);
            const r = a.p + "vendor/c14ff18739c64dea10117d38eaa88d31.svg",
                c = a.p + "vendor/f02cb7fdaf6da4044f1529f76cf11d44.svg",
                d = a.p + "vendor/fc7fe1add68668e8fea431f2d4fcc00f.svg",
                m = a.p + "vendor/10e0dac5aaa0acc2860363d246f79852.svg",
                u = a.p + "vendor/3b4928101472fce4e9edac920c1b3817.svg",
                v = a.p + "vendor/db14663cd80350dd9dfa0a48aa429e20.svg",
                b = a.p + "vendor/bf1a6559d201e921c6158cb22be2b08b.svg",
                f = a.p + "vendor/e0c10f45179b606b54fa00ff7db64475.svg",
                E = a.p + "vendor/597da4049ec7b1ee932d1b95ca424e0d.svg",
                p = a.p + "vendor/0172b83513c04cbae78c47adafaf93e7.svg",
                g = a.p + "vendor/80a60f598d6a6b0493aeb4d7b93fc0e3.svg",
                _ = a.p + "vendor/67d10f6da0da935b37dc659775acb335.svg",
                h = a.p + "vendor/6793432722e61b6dd0e3ffd4d0fd0115.svg",
                N = a.p + "vendor/6828cbd4377d9da8f1509243861ed5ee.svg",
                T = a.p + "vendor/b05052818a7e6be25b105c93e13bb21d.svg",
                I = a.p + "vendor/15c1980864708c091a57c1cce4d4bfb7.svg",
                k = {
                    ar: {
                        active: c,
                        inactive: r
                    },
                    el: {
                        active: m,
                        inactive: d
                    },
                    en: {
                        active: u,
                        inactive: u
                    },
                    he: {
                        active: b,
                        inactive: v
                    },
                    hi: {
                        active: E,
                        inactive: f
                    },
                    ja: {
                        active: g,
                        inactive: p
                    },
                    ko: {
                        active: h,
                        inactive: _
                    },
                    ru: {
                        active: T,
                        inactive: N
                    },
                    uk: {
                        active: T,
                        inactive: N
                    },
                    yi: {
                        active: b,
                        inactive: v
                    },
                    zh: {
                        active: a.p + "vendor/4da9ffe4b0e9abc3a9a5d6b6aa8ce93d.svg",
                        inactive: I
                    }
                };
            var y = a(40892),
                R = a(51862),
                w = a(2559),
                C = a(57052),
                O = a(41460),
                Z = a(76320),
                M = a(90402),
                S = a(53051);
            const A = a.p + "vendor/9f37b02e05570946fc3c4b4b27951155.svg",
                D = a.p + "vendor/45c14e05be9c1af1d7d0b54c6eed7eee.svg",
                U = a.p + "vendor/3a7b3f1819107e1a0adc5783f6e0b0b6.svg",
                x = a.p + "vendor/d2fdcae41227d71ad532e3efecea9241.svg",
                L = a.p + "vendor/77a8198c60820721c1c28243e13e0419.svg";
            var z = a(72492);
            const P = a.p + "vendor/e13ce9eaf8c71db338bd1a7a79f9eb9e.svg",
                H = a.p + "vendor/216de84c3ed1b2cf7fb9ce5dffdfcaf1.svg",
                F = a.p + "vendor/229bad8c68e2c7af16befdeb89e6cc7b.svg",
                G = a.p + "vendor/ba95e6081679d9d7e8c132da5cfce1ec.svg",
                V = a.p + "vendor/398e4298a3b39ce566050e5c041949ef.svg",
                B = a.p + "vendor/38dc6a042b0de3f6aeb44ff2aa70de73.svg",
                W = a.p + "vendor/370fcb90c3a2c5ac61054ec05418dd59.svg",
                q = a.p + "vendor/bd24e39fa36d0100ed811e559f8aedce.svg",
                Y = a.p + "vendor/ca9178510134b4b0893dbac30b6670aa.svg",
                K = a.p + "vendor/3ecfa690d76a0eed2d64102ddce26abc.svg",
                J = a.p + "vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg",
                $ = a.p + "vendor/afd732ddeb734e568050b9e0608c2352.svg",
                j = a.p + "vendor/98480ac9dacf6c24829ca9950e4283f7.svg",
                Q = a.p + "vendor/1b1cd78bb18355520272001ab68171a3.svg",
                X = a.p + "vendor/5187f6694476a769d4a4e28149867e3e.svg",
                ee = a.p + "vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg",
                te = a.p + "vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
                ae = a.p + "vendor/51976061967bbd42a71591e56216adfb.svg",
                ne = a.p + "vendor/3390675b86eeeab0b4119ccfcb5b186e.svg",
                ie = a.p + "vendor/0e58a94dda219766d98c7796b910beee.svg",
                se = a.p + "vendor/784035717e2ff1d448c0f6cc4efc89fb.svg";
            var oe = a(63245),
                le = a(28720),
                re = a(95786),
                ce = a(43798),
                de = a(49966),
                me = a(18733),
                ue = a(38706);
            var ve = a(94579),
                be = a(76805),
                fe = a(98688);
            const Ee = ({
                activeTab: e,
                activeTabInteractive: t,
                courses: a,
                highlightedElement: s,
                isPracticeHub: o,
                learnNavigatesToSections: l,
                linkComponent: r,
                numMistakes: c,
                onTabClick: d,
                showTab: m,
                tabsWithDot: u,
                username: v,
                zIndex: b
            }) => {
                const f = Te({
                    courses: a,
                    isPracticeHub: o,
                    learnNavigatesToSections: l
                });
                return i.createElement("ul", {
                    className: "_1q45n",
                    style: {
                        zIndex: b
                    }
                }, i.createElement("div", {
                    className: (0, n.Z)(le.Z["tab-callout-overlay"], {
                        [le.Z["overlay-visible"]]: "tab" === (null == s ? void 0 : s.type)
                    }),
                    style: {
                        zIndex: b
                    }
                }), f.filter((e => e.isMobileTab && m(e.id))).map((a => i.createElement("li", {
                    className: "_3VukX",
                    key: a.id,
                    style: "tab" === (null == s ? void 0 : s.type) && a.id === s.tabId ? {
                        zIndex: b
                    } : void 0
                }, ((a, n) => {
                    const s = Re(a, d, v);
                    return a.id !== e || t ? i.createElement(r, {
                        className: "_15g-I _3ve9U",
                        ...s
                    }, n) : i.createElement("div", {
                        className: "_3ve9U",
                        "data-test": s["data-test"],
                        key: s.key
                    }, n)
                })(a, i.createElement("span", {
                    className: (0, n.Z)({
                        _3qwTK: "tab" === (null == s ? void 0 : s.type) && a.id === s.tabId
                    })
                }, i.createElement("div", {
                    className: (0, n.Z)("_1OoIV", {
                        [oe.Z["active-tab"]]: a.id === e,
                        [oe.Z["tab-container"]]: !0
                    })
                }, i.createElement("img", {
                    className: "_3OU34",
                    src: a.activeIconUrl
                }), (null == u ? void 0 : u.includes(a.id)) ? i.createElement(be.Z, {
                    className: "_3663u"
                }) : null, c && "review" === a.id ? i.createElement(fe.Z, {
                    className: "_2jNNO",
                    numMistakes: c
                }) : null))), "tab" === (null == s ? void 0 : s.type) && a.id === s.tabId ? i.createElement(ve.Z, {
                    direction: "up",
                    offset: s.popoverOffsetMobile,
                    onRequestClose: s.onRequestClose,
                    subtitle: s.messageSubtitle,
                    title: s.messageTitle,
                    zIndex: b
                }) : null))))
            };
            var pe = a(85917),
                ge = a(9071),
                _e = a(83195),
                he = a(83467);
            const Ne = /forum|9000/.test(window.location.host) ? "https://www.duolingo.com" : "",
                Te = ({
                    courses: e,
                    isPracticeHub: t,
                    showOverflowTabInSideTabs: a,
                    learnNavigatesToSections: n
                }) => {
                    var i;
                    const s = e.find((e => e.isCurrent)),
                        o = (e => {
                            var t;
                            return null !== (t = k[e]) && void 0 !== t ? t : k.ja
                        })(null !== (i = null == s ? void 0 : s.learningLanguageId) && void 0 !== i ? i : "ja");
                    return [{
                        activeIconUrl: se,
                        href: n ? `${Ne}/sections` : `${Ne}/learn`,
                        id: "learn",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.LEARN,
                        testingTag: "home-nav"
                    }, {
                        activeIconUrl: null == o ? void 0 : o.active,
                        href: `${Ne}/characters`,
                        id: "alphabets",
                        isBeta: !1,
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: (() => {
                            switch (null == s ? void 0 : s.learningLanguageId) {
                                case "en":
                                    return he.R.SOUNDS;
                                case "ja":
                                case "zh":
                                    return he.R.CHARACTERS;
                                default:
                                    return he.R.LETTERS
                            }
                        })(),
                        testingTag: "characters-nav"
                    }, t ? {
                        activeIconUrl: X,
                        href: `${Ne}/practice-hub`,
                        id: "practice-hub",
                        isBeta: !1,
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.PRACTICE,
                        testingTag: "practice-hub-nav"
                    } : {
                        activeIconUrl: ae,
                        href: `${Ne}/review`,
                        id: "review",
                        isBeta: !1,
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.REVIEW,
                        testingTag: "review-nav"
                    }, {
                        activeIconUrl: Y,
                        href: `${Ne}/leaderboard`,
                        id: "leagues",
                        isBeta: !1,
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.LEADERBOARD,
                        testingTag: "leaderboard-nav"
                    }, {
                        activeIconUrl: te,
                        href: `${Ne}/quests`,
                        id: "quests",
                        isBeta: !1,
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.QUESTS,
                        testingTag: "quests-nav"
                    }, {
                        activeIconUrl: ie,
                        href: `${Ne}/shop`,
                        id: "shop",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.SHOP,
                        testingTag: "shop-nav"
                    }, {
                        activeIconUrl: ie,
                        href: `${Ne}/shop`,
                        id: "shop-overflow",
                        isDesktopTab: !1,
                        isInOverflowMenu: !0,
                        isMobileTab: !1,
                        label: he.R.SHOP,
                        testingTag: "shop-nav"
                    }, {
                        activeIconUrl: ee,
                        href: `${Ne}/`,
                        id: "profile",
                        isDesktopTab: null != a && a,
                        isInOverflowMenu: !1,
                        isMobileTab: !0,
                        label: he.R.PROFILE,
                        testingTag: "profile-tab"
                    }, {
                        activeIconUrl: W,
                        href: "https://abc.duolingo.com",
                        id: "abc",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !1,
                        label: he.R.ABC
                    }, {
                        activeIconUrl: K,
                        href: "https://www.duolingo.com/math",
                        id: "math",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !1,
                        label: he.R.MATH
                    }, {
                        activeIconUrl: ne,
                        href: "https://schools.duolingo.com/",
                        id: "schools-main",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !1,
                        label: he.R.SCHOOLS,
                        testingTag: "schools-main-nav"
                    }, {
                        activeIconUrl: J,
                        id: "more",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !1,
                        label: he.R.MORE,
                        testingTag: "more-nav"
                    }, {
                        activeIconUrl: q,
                        href: "https://podcast.duolingo.com/",
                        id: "podcast",
                        isDesktopTab: !1,
                        isInOverflowMenu: !0,
                        isMobileTab: !1,
                        label: he.R.PODCAST,
                        testingTag: "podcast-nav"
                    }, {
                        activeIconUrl: ne,
                        href: "https://schools.duolingo.com/",
                        id: "schools-overflow",
                        isDesktopTab: !1,
                        isInOverflowMenu: !0,
                        isMobileTab: !1,
                        label: he.R.SCHOOLS,
                        testingTag: "schools-overflow-nav"
                    }, {
                        activeIconUrl: q,
                        href: "https://podcast.duolingo.com/",
                        id: "podcast-main",
                        isDesktopTab: !0,
                        isInOverflowMenu: !1,
                        isMobileTab: !1,
                        label: he.R.PODCAST,
                        testingTag: "podcast-main-nav"
                    }]
                },
                Ie = ["abc", "alphabets", "leagues", "learn", "math", "more", "podcast", "podcast-main", "practice-hub", "profile", "quests", "review", "schools-main", "schools-overflow", "shop", "shop-overflow"],
                ke = 10,
                ye = "//s3.amazonaws.com/duolingo-images/avatar/default_2",
                Re = (e, t, a, n, i) => {
                    let s = e.href;
                    if ("podcast" === e.id && n) {
                        const e = n.find((e => e.isCurrent));
                        e && ("es" === e.learningLanguageId ? s += "spanish" : "fr" === e.learningLanguageId && (s += "french"))
                    } else "profile" === e.id && (s += a ? `profile/${a}` : "learn?sign-up");
                    const o = i && s && !(s.startsWith("/") || s.startsWith(window.location.origin));
                    return {
                        "data-test": e.testingTag,
                        href: s,
                        key: e.id,
                        onClick: () => t(e.id),
                        ...o ? {
                            rel: "noopener noreferrer",
                            target: "_blank"
                        } : {}
                    }
                },
                we = (e, t) => "label" in t ? e(t.label) : t.labelText,
                Ce = (e, t, a, n, s, o, l, r) => {
                    const c = t.find((e => e.isCurrent));
                    return c ? i.createElement("div", {
                        className: le.Z.element,
                        "data-test": "courses-menu"
                    }, i.createElement(me.Z, {
                        className: le.Z["stat-menu-anchor"],
                        hideMenu: () => l(void 0),
                        isMobile: a,
                        showMenu: () => l(n ? void 0 : "courses"),
                        toggleMenu: () => l("courses" === s || n ? void 0 : "courses")
                    }, i.createElement(w.Z, {
                        lang: c.learningLanguageId,
                        size: 46
                    }), "courses" === s ? i.createElement(re.Z, {
                        courses: t,
                        currentCourse: c,
                        isMobile: a,
                        localizer: e,
                        onCourseClick: o,
                        onHideMenu: () => l(void 0),
                        showHeader: !1,
                        zIndex: r + ke
                    }) : null)) : null
                },
                Oe = (e, t, a, n, s, o, l, r, c, d, m) => {
                    const u = d && "path" === l;
                    return i.createElement("div", {
                        className: le.Z.element,
                        "data-test": "streak-menu"
                    }, i.createElement(me.Z, {
                        className: le.Z["stat-menu-anchor"],
                        hideMenu: () => s(void 0),
                        isMobile: a,
                        showMenu: () => {
                            null == m || m(), c && s("streak")
                        },
                        toggleMenu: () => {
                            "streak" === n ? s(void 0) : (null == m || m(), c && s("streak"))
                        }
                    }, i.createElement("div", {
                        className: le.Z["streak-icon-container"]
                    }, i.createElement("img", {
                        className: u ? le.Z["streak-icon-dark"] : le.Z["streak-icon"],
                        "data-test": e ? "imageStreak" : "imageStreakEmpty",
                        src: e ? V : void 0 === l ? G : u ? H : F
                    }), r ? i.createElement("img", {
                        className: le.Z["streak-alert-icon"],
                        src: P
                    }) : null), i.createElement("span", {
                        className: le.Z[e ? "streak-stat" : void 0 === l || u ? "gray-stat" : "grey-fade-stat"],
                        "data-test": "streak-stat"
                    }, t), c && "streak" === n ? i.createElement(ge.Z, {
                        isMobile: a,
                        onHideMenu: () => s(void 0),
                        zIndex: o + ke
                    }, c) : null))
                },
                Ze = (e, t, a, n, s, o, l, r, c, d, m, u, v) => {
                    const b = v && "path" === m;
                    return i.createElement("div", {
                        className: le.Z.element,
                        "data-test": "lingot-menu"
                    }, i.createElement(me.Z, {
                        className: le.Z["stat-menu-anchor"],
                        hideMenu: () => r(void 0),
                        isMobile: o,
                        showMenu: () => r("lingots"),
                        toggleMenu: () => r("lingots" === l ? void 0 : "lingots")
                    }, i.createElement("img", {
                        className: le.Z["lingot-icon"],
                        ref: a,
                        src: t ? u ? D : z : void 0 === m ? L : b ? U : x
                    }), i.createElement("span", {
                        className: le.Z[t ? u ? "gem-stat" : "lingot-stat" : void 0 === m || b ? "gray-stat" : "grey-fade-stat"],
                        "data-test": "lingot-stat"
                    }, t), "lingots" === l ? i.createElement(ce.Z, {
                        courses: d,
                        currencyAmount: t,
                        isMobile: o,
                        linkComponent: n,
                        localizer: e,
                        onHideMenu: () => r(void 0),
                        onTabClick: s,
                        showGems: u,
                        zIndex: c + ke
                    }) : null))
                },
                Me = (e, t, a, n, s, o) => i.createElement("div", {
                    className: le.Z["stat-menu-anchor"],
                    "data-test": "premium-logo"
                }, i.createElement(t, {
                    className: le.Z.link,
                    href: `${Ne}/settings/super`,
                    ..."spotlight" === (null == a ? void 0 : a.type) && "super" === a.element ? {
                        onClick: a.onRequestClose,
                        ref: n
                    } : {}
                }, !0 === o ? i.createElement(be.Z, {
                    className: le.Z["stat-menu-topbar-dot"]
                }) : null, "max" === s ? i.createElement(de.Z, null) : i.createElement(_e.Z, null))),
                Se = e => {
                    const {
                        courses: t,
                        isPracticeHub: a,
                        learnNavigatesToSections: s
                    } = e, o = e.tabCustomizationHook ? e.tabCustomizationHook(Te({
                        courses: t,
                        isPracticeHub: a,
                        learnNavigatesToSections: s
                    })) : Te({
                        courses: t,
                        isPracticeHub: a,
                        learnNavigatesToSections: s
                    });
                    return i.createElement(i.Fragment, null, ((e, t, a, s, o, l, r, c, d, m, u, v, b, f = !0, E) => s.map(((s, p) => {
                        const g = (0, n.Z)(le.Z.element, le.Z["tab-entry"], s.id === t ? le.Z.active : void 0),
                            _ = "tab" === (null == v ? void 0 : v.type) && v.tabId === s.id;
                        return ["more" === s.id ? i.createElement("div", { ...Re(s, r, d, m),
                            className: g
                        }, i.createElement(me.Z, {
                            className: le.Z["menu-anchor"],
                            hideMenu: () => c(void 0),
                            isMobile: !1,
                            showMenu: () => c("more"),
                            toggleMenu: () => c(l ? void 0 : "more")
                        }, i.createElement("div", {
                            className: le.Z["tab-icon-container"]
                        }, i.createElement("img", {
                            className: le.Z["more-menu-icon"],
                            src: s.activeIconUrl
                        })), i.createElement("span", {
                            className: le.Z["tab-label-more"]
                        }, we(e, s)), "more" === l && o ? i.createElement(O.Z, {
                            direction: "down",
                            zIndex: u + ke
                        }, o.map((t => i.createElement(a, { ...Re(t, r, d, m),
                            className: le.Z["more-menu-entry"],
                            key: t.id
                        }, i.createElement("img", {
                            className: le.Z["more-menu-entry-icon"],
                            src: t.activeIconUrl
                        }), i.createElement("div", {
                            className: le.Z["more-menu-entry-label"]
                        }, we(e, t)), t.isBeta ? i.createElement("div", {
                            className: le.Z["more-menu-entry-beta-label"]
                        }, e(he.R.BETA_LABEL)) : null)))) : null)) : i.createElement("div", {
                            className: g,
                            key: s.id
                        }, (e => {
                            const n = Re(s, r, d, m);
                            return s.id !== t || f ? i.createElement(a, { ...n
                            }, e) : i.createElement("div", {
                                "data-test": n["data-test"],
                                key: n.key
                            }, e)
                        })(i.createElement("span", {
                            className: (0, n.Z)(le.Z["menu-anchor"], oe.Z["tab-container"], {
                                [le.Z["highlighted-tab"]]: _,
                                [oe.Z["active-tab"]]: s.id === t
                            }),
                            style: _ ? {
                                zIndex: u + 20
                            } : void 0
                        }, i.createElement("div", {
                            className: le.Z["tab-icon-container"]
                        }, i.createElement("img", {
                            className: le.Z["tab-icon"],
                            src: s.activeIconUrl
                        }), (null == b ? void 0 : b.includes(s.id)) ? i.createElement(be.Z, {
                            className: le.Z["topbar-dot"]
                        }) : null, E && "review" === s.id ? i.createElement(fe.Z, {
                            className: le.Z["desktop-tab-bar-mistakes-dot"],
                            numMistakes: E
                        }) : null), i.createElement("span", {
                            className: le.Z["tab-label"]
                        }, we(e, s)))), _ && "tab" === (null == v ? void 0 : v.type) ? i.createElement(ve.Z, {
                            direction: "down",
                            offset: v.popoverOffset,
                            onRequestClose: v.onRequestClose,
                            subtitle: v.messageSubtitle,
                            title: v.messageTitle,
                            zIndex: u + 20
                        }) : null), i.createElement("div", {
                            className: le.Z["tab-spacer"],
                            key: `tab-spacer-${p}`
                        })]
                    })))(e.localizer, e.activeTab, e.linkComponent, o.filter((t => t.isDesktopTab && e.showTab(t.id))), "more" === e.activeMenu ? o.filter((t => t.isInOverflowMenu && e.showTab(t.id))) : void 0, e.activeMenu, e.onTabClick, e.setActiveMenu, e.username, e.courses, e.zIndex, e.highlightedElement, e.tabsWithDot, e.activeTabInteractive, e.numMistakes))
                },
                Ae = e => {
                    var t, a, s;
                    const r = null !== (a = null === (t = i.useContext(o.Z)) || void 0 === t ? void 0 : t.refCallback) && void 0 !== a ? a : null;
                    return i.createElement(i.Fragment, null, Ce(e.localizer, e.courses, !1, e.isZombieMode, e.activeMenu, e.onCourseClick, e.setActiveMenu, e.zIndex), Oe(e.xpGoalMetToday, e.streak, !1, e.activeMenu, e.setActiveMenu, e.zIndex, void 0, e.streakCallout, e.xpStats, void 0, e.onStreakMenuClick), Ze(e.localizer, e.lingots, r, e.linkComponent, e.onTabClick, !1, e.activeMenu, e.setActiveMenu, e.zIndex, e.courses, void 0, e.showGems), void 0 === e.premiumType ? void 0 === e.onClickGoSuper ? null : (c = e.localizer, d = e.onClickGoSuper, i.createElement("a", {
                        className: (0, n.Z)(le.Z.element, le.Z["go-super-container"]),
                        "data-test": "premium-logo",
                        onClick: d
                    }, i.createElement("img", {
                        src: B
                    }), i.createElement("span", {
                        className: le.Z["go-super-text"]
                    }, c(he.R.GO_SUPER)))) : Me(e.localizer, e.linkComponent, e.highlightedElement, e.spotlightTargetRef, e.premiumType, e.showFamilyPlanWeeklyReportDot), ((e, t, a, s, o, r, c, d, m, u, v, b, f, E, p, g, _, h, N) => {
                        const T = l.h2.test(a) ? i.createElement("span", null, i.createElement(C.Z, {
                                name: m,
                                size: 36,
                                style: "ghost",
                                username: u
                            })) : i.createElement("img", {
                                className: (0, n.Z)(le.Z["avatar-icon"], R.q),
                                src: a.includes("duolingo") ? `${a}/medium` : a
                            }),
                            I = b.map((e => ({ ...e,
                                hasUpdate: f.includes(e.type)
                            })));
                        return i.createElement("div", {
                            className: le.Z.element,
                            "data-test": "profile-dropdown"
                        }, i.createElement(me.Z, {
                            className: le.Z["stat-menu-anchor"],
                            hideMenu: () => h(void 0),
                            isMobile: !1,
                            showMenu: () => {
                                null == E || E(), h("profile")
                            },
                            toggleMenu: () => h("profile" === v ? void 0 : "profile")
                        }, i.createElement("div", {
                            className: le.Z["avatar-bell-container"]
                        }, T, d ? i.createElement("img", {
                            className: le.Z["bell-icon"],
                            src: A
                        }) : null), "profile" === v ? i.createElement(pe.ZP, {
                            isAdminUser: o,
                            isTrialUser: s,
                            linkComponent: t,
                            localizer: e,
                            notifications: c,
                            onFollowClick: _,
                            onProfileClick: g,
                            onViewAllNotifications: p,
                            profileMenuEntries: I,
                            showReferralOffer: r,
                            zIndex: N + ke
                        }) : null))
                    })(e.localizer, e.linkComponent, e.avatarUrl || ye, !e.username, e.isAdminUser, e.showReferralOffer, e.notifications, e.showNotificationBell, e.name, e.username, e.activeMenu, pe.gi.filter((t => e.showMenuEntry(t.type))), null !== (s = e.menuEntriesWithDot) && void 0 !== s ? s : [], e.onDismissNotificationBell, e.onViewAllNotifications, e.onProfileMenuEntryClick, e.onFollowClick, e.setActiveMenu, e.zIndex));
                    var c, d
                },
                De = e => {
                    var t;
                    return i.createElement("div", {
                        className: (0, n.Z)(le.Z.desktop, e.className, e.showSideTabBar ? le.Z["desktop-side-bar"] : void 0),
                        style: {
                            zIndex: e.zIndex
                        }
                    }, i.createElement("div", {
                        className: le.Z["tab-callout-overlay" + ("tab" === (null === (t = e.highlightedElement) || void 0 === t ? void 0 : t.type) ? "-visible" : "")],
                        style: {
                            zIndex: e.zIndex + ke + 1
                        }
                    }), i.createElement("div", {
                        className: le.Z[e.premiumType ? "content" : "content-fewer-stats"]
                    }, e.showSideTabBar ? i.createElement(e.linkComponent, {
                        className: le.Z["duolingo-icon-container"],
                        href: `${Ne}/learn`
                    }, i.createElement("img", {
                        className: le.Z["duolingo-icon"],
                        src: S
                    })) : i.createElement(Se, { ...e
                    }), i.createElement(Ae, { ...e
                    })))
                },
                Ue = e => {
                    var t, a;
                    const {
                        courses: l,
                        isPracticeHub: r,
                        heartsIcon: c,
                        heartsDropdown: d
                    } = e, m = "dark" === (0, s.Fg)(), u = !!c && !!d, v = e.tabCustomizationHook ? e.tabCustomizationHook(Te({
                        courses: l,
                        isPracticeHub: r
                    })) : Te({
                        courses: l,
                        isPracticeHub: r
                    }), b = null !== (a = null === (t = i.useContext(o.Z)) || void 0 === t ? void 0 : t.refCallback) && void 0 !== a ? a : null, f = (() => {
                        switch (e.mobileDisplayStyle) {
                            case "gilded":
                                return $;
                            case "legendary":
                            case "path":
                                return Q;
                            default:
                                return j
                        }
                    })();
                    return i.createElement("div", {
                        className: (0, n.Z)(le.Z.mobile, e.className),
                        style: {
                            zIndex: e.zIndex
                        }
                    }, i.createElement("div", {
                        className: le.Z.content
                    }, Ce(e.localizer, e.courses, !0, e.isZombieMode, e.activeMenu, e.onCourseClick, e.setActiveMenu, e.zIndex), Oe(e.xpGoalMetToday, e.streak, !0, e.activeMenu, e.setActiveMenu, e.zIndex, e.mobileDisplayStyle, e.streakCallout, e.xpStats, m, e.onStreakMenuClick), Ze(e.localizer, e.lingots, b, e.linkComponent, e.onTabClick, !0, e.activeMenu, e.setActiveMenu, e.zIndex, e.courses, e.mobileDisplayStyle, e.showGems, m), void 0 === e.premiumType ? null : Me(e.localizer, e.linkComponent, e.highlightedElement, e.spotlightTargetRef, e.premiumType, e.showFamilyPlanWeeklyReportDot), u && void 0 === e.premiumType ? ((e, t, a, n) => i.createElement("div", {
                        className: le.Z.element,
                        "data-test": "hearts-menu"
                    }, i.createElement(me.Z, {
                        className: le.Z["stat-menu-anchor"],
                        hideMenu: () => a(void 0),
                        isMobile: !0,
                        showMenu: () => a("hearts"),
                        toggleMenu: () => a("hearts" === n ? void 0 : "hearts")
                    }, e, "hearts" === n ? i.createElement(ue.Z, {
                        onCloseDrawer: () => a(void 0)
                    }, t) : null)))(c, d, e.setActiveMenu, e.activeMenu) : ((e, t, a, n, s, o, l, r, c) => i.createElement("div", {
                        className: le.Z.element
                    }, i.createElement(me.Z, {
                        className: le.Z["menu-anchor"],
                        hideMenu: () => o(void 0),
                        isMobile: !0,
                        showMenu: () => o("overflow"),
                        toggleMenu: () => o("overflow" === n ? void 0 : "overflow")
                    }, i.createElement("img", {
                        className: le.Z["tab-icon"],
                        src: c
                    }), "overflow" === n && a ? i.createElement(ue.Z, {
                        onCloseDrawer: () => o(void 0)
                    }, i.createElement("div", {
                        className: le.Z["overflow-menu"]
                    }, a.map((a => i.createElement(t, { ...Re(a, s, l, r),
                        className: le.Z["overflow-menu-entry"],
                        key: a.id
                    }, i.createElement("img", {
                        className: le.Z["overflow-menu-entry-icon"],
                        src: a.activeIconUrl
                    }), i.createElement("div", {
                        className: le.Z["overflow-menu-entry-label"]
                    }, we(e, a)), a.isBeta ? i.createElement("div", {
                        className: le.Z["overflow-menu-entry-beta-label"]
                    }, e(he.R.BETA_LABEL)) : null))))) : null)))(e.localizer, e.linkComponent, "overflow" === e.activeMenu ? v.filter((t => t.isInOverflowMenu && e.showTab(t.id))) : void 0, e.activeMenu, e.onTabClick, e.setActiveMenu, e.username, e.courses, f)))
                },
                xe = e => {
                    const {
                        activeTab: t,
                        highlightedElement: a,
                        isDesktop: n,
                        learnNavigatesToSections: s,
                        linkComponent: o,
                        onOverlayClosed: l,
                        onOverlayOpened: r,
                        showBottomOnMobile: c,
                        showTab: d,
                        showTopOnMobile: m,
                        tabsWithDot: u,
                        tracker: v,
                        username: b,
                        zIndex: f,
                        zIndexOverlay: E
                    } = e, [p, g] = (0, y.r)(), _ = i.useRef(), h = p && !a && (n || m), N = e => {
                        Ie.includes(e) && v("tab_tapped", {
                            tab_name: e
                        })
                    };
                    i.useEffect((() => {
                        _.current = l
                    })), i.useEffect((() => {
                        if (h) return null == r || r(), () => {
                            var e;
                            return null === (e = _.current) || void 0 === e ? void 0 : e.call(_)
                        }
                    }), [h]);
                    const T = "spotlight" === (null == a ? void 0 : a.type),
                        {
                            spotlightLocation: I,
                            spotlightTargetRef: k
                        } = (0, M.Z)(T),
                        R = "spotlight" === (null == a ? void 0 : a.type) ? a : void 0;
                    return i.createElement(i.Fragment, null, i.createElement("div", {
                        className: le.Z["overlay" + (h ? "-visible" : "")],
                        style: {
                            zIndex: f
                        }
                    }), i.createElement(Z.Z, {
                        direction: "down",
                        isVisible: T,
                        offset: n ? null == R ? void 0 : R.popoverOffset : null == R ? void 0 : R.popoverOffsetMobile,
                        onRequestClose: null == R ? void 0 : R.onRequestClose,
                        popoverClassName: null == R ? void 0 : R.popoverClassName,
                        zIndex: E,
                        ...I,
                        r: I.r + 12
                    }, null == R ? void 0 : R.popoverContent), n ? i.createElement(De, {
                        activeMenu: p,
                        onTabClick: N,
                        setActiveMenu: g,
                        spotlightTargetRef: k,
                        ...e
                    }) : i.createElement(i.Fragment, null, m ? i.createElement(Ue, {
                        activeMenu: p,
                        onTabClick: N,
                        setActiveMenu: g,
                        spotlightTargetRef: k,
                        ...e
                    }) : null, c ? i.createElement(Ee, {
                        activeTab: t,
                        activeTabInteractive: e.activeTabInteractive,
                        courses: e.courses,
                        highlightedElement: a,
                        isPracticeHub: e.isPracticeHub,
                        learnNavigatesToSections: s,
                        linkComponent: o,
                        numMistakes: e.numMistakes,
                        onTabClick: N,
                        showTab: d,
                        tabsWithDot: u,
                        username: b,
                        zIndex: f
                    }) : null))
                }
        },
        83467: (e, t, a) => {
            var n;
            a.d(t, {
                    R: () => n
                }),
                function(e) {
                    e[e.ABC = 0] = "ABC", e[e.ACCEPTED_FRIEND_INVITE = 1] = "ACCEPTED_FRIEND_INVITE", e[e.ACCEPTED_INVITE = 2] = "ACCEPTED_INVITE", e[e.ADDED_YOU_AS_FRIEND = 3] = "ADDED_YOU_AS_FRIEND", e[e.ADMIN = 4] = "ADMIN", e[e.BETA_LABEL = 5] = "BETA_LABEL", e[e.CHARACTERS = 6] = "CHARACTERS", e[e.COMMENTED_ON_YOUR_POST = 7] = "COMMENTED_ON_YOUR_POST", e[e.COURSES = 8] = "COURSES", e[e.CREATE_PROFILE = 9] = "CREATE_PROFILE", e[e.FOLLOW = 10] = "FOLLOW", e[e.FOLLOWING = 11] = "FOLLOWING", e[e.FREE_SUPER_DUOLINGO = 12] = "FREE_SUPER_DUOLINGO", e[e.FRIEND_UPDATES = 13] = "FRIEND_UPDATES", e[e.GO_TO_SHOP = 14] = "GO_TO_SHOP", e[e.LEADERBOARD = 15] = "LEADERBOARD", e[e.LEARN = 16] = "LEARN", e[e.LETTERS = 17] = "LETTERS", e[e.LINGOTS = 18] = "LINGOTS", e[e.LOGOUT = 19] = "LOGOUT", e[e.LOST_WAGER = 20] = "LOST_WAGER", e[e.PRACTICE = 21] = "PRACTICE", e[e.REVIEW = 22] = "REVIEW", e[e.MATH = 23] = "MATH", e[e.MORE = 24] = "MORE", e[e.MY_COURSES = 25] = "MY_COURSES", e[e.NAV_ADD_COURSE = 26] = "NAV_ADD_COURSE", e[e.NAV_HELP = 27] = "NAV_HELP", e[e.NAV_SETTINGS = 28] = "NAV_SETTINGS", e[e.NOTIFICATION_SETTINGS_HEADER = 29] = "NOTIFICATION_SETTINGS_HEADER", e[e.PASSED_YOU_IN_XP = 30] = "PASSED_YOU_IN_XP", e[e.PODCAST = 31] = "PODCAST", e[e.PROFILE = 32] = "PROFILE", e[e.QUESTS = 33] = "QUESTS", e[e.REACH_STREAK = 34] = "REACH_STREAK", e[e.SCHOOLS = 35] = "SCHOOLS", e[e.SEE_ALL = 36] = "SEE_ALL", e[e.SETTINGS_NAV_ACCOUNT = 37] = "SETTINGS_NAV_ACCOUNT", e[e.SHOP = 38] = "SHOP", e[e.SIGN_IN = 39] = "SIGN_IN", e[e.SOUNDS = 40] = "SOUNDS", e[e.WON_WAGER = 41] = "WON_WAGER", e[e.YOU_HAVE_LINGOTS = 42] = "YOU_HAVE_LINGOTS", e[e.YOU_HAVE_NUM_GEMS = 43] = "YOU_HAVE_NUM_GEMS", e[e.YOUR_PROFILE = 44] = "YOUR_PROFILE", e[e.GEMS = 45] = "GEMS", e[e.GO_SUPER = 46] = "GO_SUPER"
                }(n || (n = {}))
        },
        87011: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(27378),
                i = a(12725);
            const s = ({
                filteredItems: e,
                itemRefs: t,
                multiple: a,
                onChange: s,
                selectedIndices: o
            }) => {
                var l;
                const [r, c] = n.useState(null !== (l = o[0]) && void 0 !== l ? l : 0), d = n.useRef(-1), m = (t, a = -1) => {
                    switch (t) {
                        case "after":
                            {
                                const t = e.findIndex((({
                                    index: e,
                                    item: t
                                }) => !t.disabled && e > a));
                                return t > -1 ? t : m("first")
                            }
                        case "before":
                            {
                                const t = (0, i.qr)(e, (({
                                    index: e,
                                    item: t
                                }) => !t.disabled && e < a));
                                return t > -1 ? t : m("last")
                            }
                        case "first":
                            return e.findIndex((({
                                item: e
                            }) => !e.disabled));
                        case "last":
                            return (0, i.qr)(e, (({
                                item: e
                            }) => !e.disabled));
                        default:
                            throw Error(`Unrecognized direction: ${t}`)
                    }
                };
                return {
                    getFocusableIndex: m,
                    getTabFocusIndex: () => e.some((({
                        index: e,
                        item: t
                    }) => e === r && !t.disabled)) ? r : m("first"),
                    handleKeyDown: (n, i) => {
                        var l, r, c, u, v, b, f, E, p, g, _, h;
                        if (" " === i.key || "Enter" === i.key) s(o.includes(n) ? "remove" : "add", [n]);
                        else if ("ArrowDown" === i.key) null === (r = null === (l = t.current) || void 0 === l ? void 0 : l[m("after", n)]) || void 0 === r || r.focus();
                        else if ("ArrowLeft" === i.key) null === (u = null === (c = t.current) || void 0 === c ? void 0 : c[m("before", n)]) || void 0 === u || u.focus();
                        else if ("ArrowRight" === i.key) null === (b = null === (v = t.current) || void 0 === v ? void 0 : v[m("after", n)]) || void 0 === b || b.focus();
                        else if ("ArrowUp" === i.key) null === (E = null === (f = t.current) || void 0 === f ? void 0 : f[m("before", n)]) || void 0 === E || E.focus();
                        else if ("End" === i.key) null === (g = null === (p = t.current) || void 0 === p ? void 0 : p[m("last")]) || void 0 === g || g.focus();
                        else if ("Home" === i.key) null === (h = null === (_ = t.current) || void 0 === _ ? void 0 : _[m("first")]) || void 0 === h || h.focus();
                        else if ("Shift" === i.key) d.current = n;
                        else {
                            if ("a" !== i.key || !i.ctrlKey || !a) return; {
                                const t = e.some((({
                                    index: e,
                                    item: t
                                }) => !t.disabled && !o.includes(e)));
                                s(t ? "add" : "remove", e.filter((({
                                    item: e
                                }) => !e.disabled)).map((({
                                    index: e
                                }) => e)))
                            }
                        }
                        i.preventDefault()
                    },
                    handleKeyUp: (e, t) => {
                        "Shift" === t.key && (d.current = -1, t.preventDefault())
                    },
                    rangeAnchorRef: d,
                    setTabFocusIndex: c
                }
            }
        },
        90402: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a(27378);
            const i = e => {
                const t = n.useRef(null),
                    [a, i] = n.useReducer(((e, t) => {
                        return n = t, (a = e).cx === n.cx && a.cy === n.cy && a.height === n.height && a.r === n.r && a.width === n.width ? e : t;
                        var a, n
                    }), {
                        cx: 0,
                        cy: 0,
                        height: 0,
                        r: 0,
                        width: 0
                    }),
                    s = () => {
                        if (t.current) {
                            const e = t.current.getBoundingClientRect();
                            i({
                                cx: e.x + e.width / 2,
                                cy: e.y + e.height / 2,
                                height: window.innerHeight,
                                r: e.width / 2,
                                width: window.innerWidth
                            })
                        }
                    };
                return n.useLayoutEffect((() => {
                    e && s()
                })), n.useEffect((() => {
                    if (e) return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
                }), [e]), {
                    spotlightLocation: a,
                    spotlightTargetRef: t
                }
            }
        },
        86251: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            const n = a(27378).createContext(void 0)
        },
        40892: (e, t, a) => {
            a.d(t, {
                G: () => i,
                r: () => s
            });
            var n = a(27378);
            const i = (e, t) => {
                    const a = n.useRef(!1);
                    n.useEffect((() => {
                        if (a.current) return e();
                        a.current = !0
                    }), t)
                },
                s = (e = void 0, t = 500) => {
                    const [a, i] = n.useState(e), s = n.useRef();
                    return [a, n.useCallback((e => {
                        s.current && clearTimeout(s.current), void 0 === e || "boolean" == typeof e && !1 === e ? s.current = setTimeout((() => i(e)), t) : i(e)
                    }), [t, a])]
                }
        },
        53051: (e, t, a) => {
            e.exports = a.p + "vendor/70a4be81077a8037698067f583816ff9.svg"
        },
        72492: (e, t, a) => {
            e.exports = a.p + "vendor/aed279fcbad509208b45ca7a17f3e8dc.svg"
        }
    }
]);