/** 
 * onetrust-banner-sdk
 * v202404.1.0
 * by OneTrust LLC
 * Copyright 2024 
 */
! function() {
    "use strict";
    var x = function(e, t) {
        return (x = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(e, t) {
                e.__proto__ = t
            } : function(e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }))(e, t)
    };

    function D(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function o() {
            this.constructor = e
        }
        x(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
    var H, R = function() {
        return (R = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function u(e, s, a, l) {
        return new(a = a || Promise)(function(o, t) {
            function n(e) {
                try {
                    i(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(e) {
                try {
                    i(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                    e(t)
                })).then(n, r)
            }
            i((l = l.apply(e, s || [])).next())
        })
    }

    function F(n, r) {
        var i, s, a, l = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
            c = {
                next: e(0),
                throw: e(1),
                return: e(2)
            };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function e(o) {
            return function(e) {
                var t = [o, e];
                if (i) throw new TypeError("Generator is already executing.");
                for (; l = c && t[c = 0] ? 0 : l;) try {
                    if (i = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;
                    switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            return l.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            l.label++, s = t[1], t = [0];
                            continue;
                        case 7:
                            t = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) l.label = t[1];
                            else if (6 === t[0] && l.label < a[1]) l.label = a[1], a = t;
                            else {
                                if (!(a && l.label < a[2])) {
                                    a[2] && l.ops.pop(), l.trys.pop();
                                    continue
                                }
                                l.label = a[2], l.ops.push(t)
                            }
                    }
                    t = r.call(n, l)
                } catch (e) {
                    t = [6, e], s = 0
                } finally {
                    i = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function M() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        for (var n = Array(e), r = 0, t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }(e = H = H || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var q = setTimeout;

    function U(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function j() {}

    function z(e) {
        if (!(this instanceof z)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Q(e, this)
    }

    function K(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 === o._state ? o._deferreds.push(n) : (o._handled = !0, z._immediateFn(function() {
            var e, t = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null === t)(1 === o._state ? W : J)(n.promise, o._value);
            else {
                try {
                    e = t(o._value)
                } catch (e) {
                    return void J(n.promise, e)
                }
                W(n.promise, e)
            }
        }))
    }

    function W(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof z) return t._state = 3, t._value = e, void Y(t);
                if ("function" == typeof o) return void Q((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, Y(t)
        } catch (e) {
            J(t, e)
        }
        var n, r
    }

    function J(e, t) {
        e._state = 2, e._value = t, Y(e)
    }

    function Y(e) {
        2 === e._state && 0 === e._deferreds.length && z._immediateFn(function() {
            e._handled || z._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) K(e, e._deferreds[t]);
        e._deferreds = null
    }

    function X(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function Q(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, W(t, e))
            }, function(e) {
                o || (o = !0, J(t, e))
            })
        } catch (e) {
            o || (o = !0, J(t, e))
        }
    }

    function Z() {}
    z.prototype.catch = function(e) {
        return this.then(null, e)
    }, z.prototype.then = function(e, t) {
        var o = new this.constructor(j);
        return K(this, new X(e, t, o)), o
    }, z.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, z.all = function(t) {
        return new z(function(r, i) {
            if (!U(t)) return i(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length) return r([]);
            var a = s.length;
            for (var e = 0; e < s.length; e++) ! function t(o, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function(e) {
                            t(o, e)
                        }, i)
                    }
                    s[o] = e, 0 == --a && r(s)
                } catch (e) {
                    i(e)
                }
            }(e, s[e])
        })
    }, z.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === z ? t : new z(function(e) {
            e(t)
        })
    }, z.reject = function(o) {
        return new z(function(e, t) {
            t(o)
        })
    }, z.race = function(r) {
        return new z(function(e, t) {
            if (!U(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) z.resolve(r[o]).then(e, t)
        })
    }, z._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        q(e, 0)
    }, z._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }, Z.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, Z.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 !== r) {
                    var i, s, a = t[1] || 0;
                    for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                        if (e === (s = n[i]) || e != e && s != s) return !0;
                        i++
                    }
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t
                } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return !((t = "number" != typeof t ? 0 : t) + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), n = arguments[2], n = void 0 === n ? o : n >> 0, i = n < 0 ? Math.max(o + n, 0) : Math.min(n, o); r < i;) t[r] = e, r++;
                return t
            }
        })
    }, Z.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, Z.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, Z.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = z)
    };
    var $, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, me, Se, ve, ke, be, Pe, Te, Ae, Ie, Le, _e, Ee, Oe, Ve, Be, we, Ge, Ne = new Z,
        p = ((e = $ = $ || {})[e.Unknown = 0] = "Unknown", e[e.BannerCloseButton = 1] = "BannerCloseButton", e[e.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", e[e.AcceptAll = 3] = "AcceptAll", e[e.RejectAll = 4] = "RejectAll", e[e.BannerSaveSettings = 5] = "BannerSaveSettings", e[e.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (e = ee = ee || {})[e.Banner = 1] = "Banner", e[e.PC = 2] = "PC", e[e.API = 3] = "API", (e = te = te || {}).AcceptAll = "AcceptAll", e.RejectAll = "RejectAll", e.UpdateConsent = "UpdateConsent", (e = oe = oe || {})[e.Purpose = 1] = "Purpose", e[e.SpecialFeature = 2] = "SpecialFeature", (e = ne = ne || {}).Legal = "legal", e.UserFriendly = "user_friendly", (e = re = re || {}).Top = "top", e.Bottom = "bottom", (e = ie = ie || {})[e.Banner = 0] = "Banner", e[e.PrefCenterHome = 1] = "PrefCenterHome", e[e.VendorList = 2] = "VendorList", e[e.CookieList = 3] = "CookieList", e[e.IabIllustrations = 4] = "IabIllustrations", (e = se = se || {})[e.RightArrow = 39] = "RightArrow", e[e.LeftArrow = 37] = "LeftArrow", (e = ae = ae || {}).AfterTitle = "AfterTitle", e.AfterDescription = "AfterDescription", e.AfterDPD = "AfterDPD", (e = le = le || {}).PlusMinus = "Plusminus", e.Caret = "Caret", e.NoAccordion = "NoAccordion", (e = ce = ce || {}).Consent = "Consent", e.LI = "LI", e.AddtlConsent = "AddtlConsent", (e = de = de || {}).Iab1Pub = "eupubconsent", e.Iab2Pub = "eupubconsent-v2", e.Iab1Eu = "euconsent", e.Iab2Eu = "euconsent-v2", (e = ue = ue || {})[e.Disabled = 0] = "Disabled", e[e.Consent = 1] = "Consent", e[e.LegInt = 2] = "LegInt", (e = pe = pe || {})[e["Banner - Allow All"] = 1] = "Banner - Allow All", e[e["Banner - Reject All"] = 2] = "Banner - Reject All", e[e["Banner - Close"] = 3] = "Banner - Close", e[e["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", e[e["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", e[e["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", e[e["GPC value changed"] = 7] = "GPC value changed", (e = he = he || {}).Active = "1", e.InActive = "0", (e = ge = ge || {}).Host = "Host", e.GenVendor = "GenVen", (e = Ce = Ce || {})[e.Host = 1] = "Host", e[e.GenVen = 2] = "GenVen", e[e.HostAndGenVen = 3] = "HostAndGenVen", (e = ye = ye || {})[e.minDays = 1] = "minDays", e[e.maxDays = 30] = "maxDays", e[e.maxYear = 31536e3] = "maxYear", e[e.maxSecToDays = 86400] = "maxSecToDays", (e = fe = fe || {})[e.RTL = 0] = "RTL", e[e.LTR = 1] = "LTR", (e = me = me || {})[e.GoogleVendor = 1] = "GoogleVendor", e[e.GeneralVendor = 2] = "GeneralVendor", (e = Lt = Lt || {})[e.Days = 1] = "Days", e[e.Weeks = 7] = "Weeks", e[e.Months = 30] = "Months", e[e.Years = 365] = "Years", (e = Se = Se || {}).Checkbox = "Checkbox", e.Toggle = "Toggle", (e = ve = ve || {}).SlideIn = "Slide_In", e.FadeIn = "Fade_In", e.RemoveAnimation = "Remove_Animation", (e = ke = ke || {}).Link = "Link", e.Icon = "Icon", (e = be = be || {}).consent = "consent", e.set = "set", (e = Pe = Pe || {}).update = "update", e.default = "default", e.ads_data_redaction = "ads_data_redaction", (e = Te = Te || {}).analytics_storage = "analytics_storage", e.ad_storage = "ad_storage", e.functionality_storage = "functionality_storage", e.personalization_storage = "personalization_storage", e.security_storage = "security_storage", e.ad_user_data = "ad_user_data", e.ad_personalization = "ad_personalization", e.region = "region", e.wait_for_update = "wait_for_update", (e = Ae = Ae || {}).granted = "granted", e.denied = "denied", 0, (e = Ie = Ie || {}).OBJECT_TO_LI = "ObjectToLI", e.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (e = Le = Le || {}).cookies = "cookies", e.vendors = "vendors", (e = _e = _e || {}).GDPR = "GDPR", e.CCPA = "CCPA", e.IAB2 = "IAB2", e.IAB2V2 = "IAB2V2", e.GENERIC = "GENERIC", e.LGPD = "LGPD", e.GENERIC_PROMPT = "GENERIC_PROMPT", e.CPRA = "CPRA", e.CDPA = "CDPA", e.USNATIONAL = "USNATIONAL", e.CUSTOM = "CUSTOM", e.COLORADO = "COLORADO", e.CONNECTICUT = "CTDPA", e.UCPA = "UCPA", (e = Ee = Ee || {}).Name = "OTGPPConsent", e[e.ChunkSize = 4e3] = "ChunkSize", e.ChunkCountParam = "GPPCookiesCount", (e = Oe = Oe || {}).MspaCoveredTransaction = "IsMSPAEnabled", e.MspaOptOutOptionMode = "Opt-Out", e.MspaServiceProviderMode = "Service Provider", 0, (e = Ve = Ve || {}).GpcSegmentType = "GpcSegmentType", e.Gpc = "Gpc", (e = Be = Be || {}).SensitiveDataProcessing = "SensitiveDataProcessing", e.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents", (e = we = we || {}).CPRA = "uscav1", e.CCPA = "uscav1", e.CDPA = "usvav1", e.USNATIONAL = "usnatv1", e.COLORADO = "uscov1", e.CTDPA = "usctv1", e.UCPA = "usutv1", e.IAB2V2 = "tcfeuv2", (e = Ge = Ge || {})[e.CPRA = 8] = "CPRA", e[e.CCPA = 8] = "CCPA", e[e.CDPA = 9] = "CDPA", e[e.USNATIONAL = 7] = "USNATIONAL", e[e.COLORADO = 10] = "COLORADO", e[e.UCPA = 11] = "UCPA", e[e.CTDPA = 12] = "CTDPA", e[e.IAB2V2 = 2] = "IAB2V2", 0, 0, 0, 0, 0, {
            AWAITING_RE_CONSENT: "AwaitingReconsent",
            CONSENT_ID: "consentId",
            GEO_LOCATION: "geolocation",
            INTERACTION_COUNT: "interactionCount",
            IS_IAB_GLOBAL: "isIABGlobal",
            NOT_LANDING_PAGE: "NotLandingPage",
            GEO: "geo",
            GPC_ENABLED: "isGpcEnabled",
            GPC_Browser_Flag: "browserGpcFlag",
            IS_ANONYMOUS_CONSENT: "isAnonUser",
            IDENTIFIER_TYPE: "identifierType",
            PREV_USER_CONSENT: "iType",
            INTERACTION_TYPE: "intType",
            GROUPS: "groups",
            HEALTH_SIGNATURE_AUTHORIZATION: "healthAuth"
        }),
        S = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview",
            GPP_CONSENT: Ee.Name
        },
        xe = "CONFIRMED",
        De = "OPT_OUT",
        He = "NO_CHOICE",
        Re = "NOTGIVEN",
        Fe = "NO_OPT_OUT",
        m = {
            ALWAYS_INACTIVE: "always inactive",
            ALWAYS_ACTIVE: "always active",
            ACTIVE: "active",
            INACTIVE_LANDING_PAGE: "inactive landingpage",
            INACTIVE: "inactive",
            IMPLIED_CONSENT: "implied consent",
            GPC: "gpc",
            DNT: "dnt"
        },
        Me = "LOCAL",
        qe = "TEST",
        Ue = "LOCAL_TEST",
        je = "data-document-language",
        ze = "data-language",
        Ke = "otCookieSettingsButton.json",
        We = "otCookieSettingsButtonRtl.json",
        Je = "otCenterRounded",
        Ye = "otFlat",
        Xe = "otFloatingRoundedCorner",
        Qe = "otFloatingFlat",
        Ze = "otFloatingRoundedIcon",
        $e = "otFloatingRounded",
        et = "otChoicesBanner",
        tt = "otNoBanner",
        ot = "otPcCenter",
        nt = "otPcList",
        rt = "otPcPanel",
        it = "otPcPopup",
        st = "otPcTab",
        at = "hidebanner",
        lt = ((e = {})[Lt.Days] = "PCenterVendorListLifespanDay", e[Lt.Weeks] = "LfSpnWk", e[Lt.Months] = "PCenterVendorListLifespanMonth", e[Lt.Years] = "LfSpnYr", e),
        ct = "DNAC",
        dt = "Category",
        ut = "Host",
        pt = "General Vendor",
        ht = "VendorService",
        gt = "aria-label",
        Ct = "aria-hidden",
        yt = "BRANCH",
        ft = "COOKIE",
        mt = "IAB2V2_SPL_PURPOSE",
        St = "IAB2V2_FEATURE",
        vt = "IAB2V2_SPL_FEATURE",
        kt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_FEATURE", "IAB2V2_STACK"],
        bt = ["COOKIE", "BRANCH", "IAB2_STACK", "IAB2V2_STACK"],
        Pt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_FEATURE"],
        Tt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_PURPOSE"],
        At = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        v = new function() {};

    function d(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            return e ? (";" !== (e = e.trim()).charAt(e.length - 1) && (e += ";"), e.trim()) : null
        }
        var i = n(e.getAttribute("style")),
            s = n(t),
            t = "",
            t = o && i ? function() {
                for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                        return 0 !== e.length
                    }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                    var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                    t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
                }
                return o
            }() : s;
        e.setAttribute("style", t)
    }

    function It() {}
    It.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
        return e
    }, It.prototype.arrToStr = function(e) {
        return e.toString()
    }, It.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }, It.prototype.strToMap = function(e) {
        if (!e) return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }, It.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes();) t.removeChild(t.lastChild)
    }, It.prototype.show = function(e) {
        e = document.getElementById(e);
        e && d(e, "display: block;", !0)
    }, It.prototype.remove = function(e) {
        e = document.getElementById(e);
        e && e.parentNode && e.parentNode.removeChild(e)
    }, It.prototype.appendTo = function(e, t) {
        var o, e = document.getElementById(e);
        e && ((o = document.createElement("div")).innerHTML = t, e.appendChild(o))
    }, It.prototype.contains = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
        return !1
    }, It.prototype.indexOf = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o] === t) return o;
        return -1
    }, It.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, It.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, It.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }, It.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }), t
    }, It.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }, It.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }, It.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }, It.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
            else e.parentElement.removeChild(e)
    }, It.prototype.getRelativeURL = function(e, t, o) {
        return void 0 === o && (o = !1), t ? (t = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", ""), o ? t : t + ".js") : e
    }, It.prototype.setCheckedAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
    }, It.prototype.setDisabledAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }, It.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
    }, It.prototype.calculateCookieLifespan = function(e) {
        return e < 0 ? L.LifespanTypeText : (e = Math.floor(e / ye.maxSecToDays)) < ye.minDays ? "< 1 " + L.PCenterVendorListLifespanDay : e < ye.maxDays ? e + " " + L.PCenterVendorListLifespanDays : 1 === (e = Math.floor(e / ye.maxDays)) ? e + " " + L.PCenterVendorListLifespanMonth : e + " " + L.PCenterVendorListLifespanMonths
    }, It.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }, It.prototype.customQuerySelector = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }, It.prototype.customQuerySelectorAll = function(t) {
        return function(e) {
            return t.querySelectorAll(e)
        }
    };
    var k, b = new It,
        Lt = (_t.prototype.removeAlertBox = function() {
            null !== this.getCookie(S.ALERT_BOX_CLOSED) && this.setCookie(S.ALERT_BOX_CLOSED, "", 0, !0)
        }, _t.prototype.removeIab1 = function() {
            null !== this.getCookie(de.Iab1Pub) && this.setCookie(de.Iab1Pub, "", 0, !0)
        }, _t.prototype.removeIab2 = function() {
            null !== this.getCookie(de.Iab2Pub) && this.setCookie(de.Iab2Pub, "", 0, !0)
        }, _t.prototype.removeAddtlStr = function() {
            null !== this.getCookie(S.ADDITIONAL_CONSENT_STRING) && this.setCookie(S.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, _t.prototype.removeVariant = function() {
            null !== this.getCookie(S.SELECTED_VARIANT) && this.setCookie(S.SELECTED_VARIANT, "", 0, !0)
        }, _t.prototype.removeOptanon = function() {
            null !== this.getCookie(S.OPTANON_CONSENT) && this.setCookie(S.OPTANON_CONSENT, "", 0, !0)
        }, _t.prototype.removePreview = function() {
            null !== this.getCookie(S.OT_PREVIEW) && this.setCookie(S.OT_PREVIEW, "", 0, !0)
        }, _t.prototype.removeAllCookies = function() {
            this.removeIab1(), this.removeIab2(), this.removePreview(), this.removeOptanon(), this.removeVariant(), this.removeAlertBox(), this.removeAddtlStr(), this.removeAmpStorage()
        }, _t.prototype.writeCookieParam = function(e, t, o, n) {
            var r, i, s, a = {},
                l = this.getCookie(e);
            if (l)
                for (i = l.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), a[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            a[t] = o;
            l = v.moduleInitializer.TenantFeatures;
            l && l.CookieV2CookieDateTimeInISO ? a.datestamp = (new Date).toISOString() : a.datestamp = (new Date).toString(), a.version = _.otSDKVersion, o = this.param(a), this.setCookie(e, o, L.ReconsentFrequencyDays)
        }, _t.prototype.readCookieParam = function(e, t, o) {
            var n, r, i, s, e = this.getCookie(e);
            if (e) {
                for (r = {}, i = e.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }, _t.prototype.getCookie = function(e) {
            if (v && v.moduleInitializer && v.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (_.isAMP && (_.ampData = JSON.parse(localStorage.getItem(_.dataDomainId)) || {}, _.ampData)) return _.ampData[e] || null;
            for (var o, n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
                for (o = r[i];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
            }
            return null
        }, _t.prototype.setAmpStorage = function() {
            window.localStorage.setItem(_.dataDomainId, JSON.stringify(_.ampData))
        }, _t.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(_.dataDomainId)
        }, _t.prototype.handleAmp = function(e, t) {
            "" !== t ? _.ampData[e] = t : delete _.ampData[e], 0 === Object.keys(_.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, _t.prototype.setCookie = function(e, t, o, n, r) {
            var i, s, a, l, c;
            void 0 === n && (n = !1), void 0 === r && (r = new Date), _.isAMP ? this.handleAmp(e, t) : (i = void 0, i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "", o = "", (s = (n = v.moduleInitializer) && n.Domain ? n.Domain.split("/") : []).length <= 1 ? s[1] = "" : o = s.slice(1).join("/"), a = "Samesite=Lax", n.CookieSameSiteNoneEnabled && (a = "Samesite=None; Secure"), l = n.ScriptType === qe || n.ScriptType === Ue, _.isPreview || !l && !n.MobileSDK ? (c = t + i + "; path=/" + o + "; domain=." + s[0] + "; " + a, document.cookie = e + "=" + c) : (c = t + i + "; path=/; " + a, n.MobileSDK ? this.setCookieDataObj({
                name: e,
                value: t,
                expires: i,
                date: r,
                domainAndPath: s
            }) : document.cookie = e + "=" + c))
        }, _t.prototype.setCookieDataObj = function(t) {
            var e;
            t && (_.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? _.otCookieData = window.OneTrust.otCookieData : _.otCookieData = []), -1 < (e = b.findIndex(_.otCookieData, function(e) {
                return e.name === t.name
            })) ? _.otCookieData[e] = t : _.otCookieData.push(t))
        }, _t.prototype.getCookieDataObj = function(t) {
            _.otCookieData && 0 !== _.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? _.otCookieData = window.OneTrust.otCookieData : _.otCookieData = []);
            var e = b.findIndex(_.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = _.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (_.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, _t.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, _t);

    function _t() {}
    var P, T, Et = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title h3",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Leg_Claim: ".ot-ven-legclaim-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Ot = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Leg_Claim: ".vendor-legclaim-link",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Vt = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2_FEATURE",
                Pur: "IAB2_PURPOSE",
                Spl_Ft: "IAB2_SPL_FEATURE",
                Spl_Pur: "IAB2_SPL_PURPOSE",
                Stack: "IAB2_STACK"
            },
            IdPatterns: {
                Pur: "IABV2_",
                Ft: "IFEV2_",
                Spl_Pur: "ISPV2_",
                Spl_Ft: "ISFV2_"
            }
        },
        Bt = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2V2_FEATURE",
                Pur: "IAB2V2_PURPOSE",
                Spl_Ft: "IAB2V2_SPL_FEATURE",
                Spl_Pur: "IAB2V2_SPL_PURPOSE",
                Stack: "IAB2V2_STACK"
            },
            IdPatterns: {
                Pur: "IAB2V2_",
                Ft: "IFE2V2_",
                Spl_Pur: "ISP2V2_",
                Spl_Ft: "ISF2V2_"
            }
        };
    i.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }, i.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }, i.inArray = function(e, t) {
        return t.indexOf(e)
    }, i.ajax = function(e) {
        var t = null,
            o = new XMLHttpRequest,
            n = e.type,
            r = e.url,
            i = (e.dataType, e.contentType),
            s = e.data,
            a = e.success,
            l = e.token,
            t = e.error,
            e = e.sync;
        o.open(n, r, !e), o.setRequestHeader("Content-Type", i), l && o.setRequestHeader("Authorization", l), o.withCredentials = !1, o.onload = function() {
            var e;
            200 <= this.status && this.status < 400 ? (e = JSON.parse(this.responseText), a(e)) : t({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, o.onerror = function(e) {
            t(e)
        }, "post" === n.toLowerCase() || "put" === n.toLowerCase() ? o.send(s) : o.send()
    }, i.prevNextHelper = function(o, e, n) {
        var r = [];

        function i(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            i(o, e, n)
        }) : i(o, e, n), r
    }, i.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }, i.isNodeList = function(e) {
        e = Object.prototype.toString.call(e);
        return "[object NodeList]" === e || "[object Array]" === e
    }, i.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60), 1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) d(this.el[o], "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ", !0);
        var n = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (d(t.el[e], "display: none;", !0), clearInterval(n), "optanon-popup-bg" === t.el[e].id) && t.el[e].removeAttribute("style")
        }, e);
        return this
    }, i.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) d(this.el[e], "display: none;", !0), this.el[e].setAttribute(Ct, !0);
        else i.isNodeList(this.el) || (d(this.el, "display: none;", !0), this.el.setAttribute(Ct, !0));
        return this
    }, i.prototype.show = function(e) {
        if (void 0 === e && (e = "block"), 1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) d(this.el[t], "display: " + e + ";", !0), this.el[t].removeAttribute(Ct);
        else i.isNodeList(this.el) || (d(this.el, "display: " + e + ";", !0), this.el.removeAttribute(Ct));
        return this
    }, i.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
        else this.el.parentNode.removeChild(this.el);
        return this
    }, i.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":")) return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++) d(this.el[t], e)
            } else {
                if (!e.includes(":")) return this.el.style[e];
                d(this.el, e)
            }
        return this
    }, i.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        return this
    }, i.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }, i.prototype.on = function(r, i, s) {
        var e = this;
        if ("string" != typeof i)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                    case "load":
                        window.onload = i;
                        break;
                    case "resize":
                        window.onresize = i;
                        break;
                    case "scroll":
                        window.onscroll = i
                } else if (this.el && 1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i);
                else this.el && this.el instanceof Element && this.el.addEventListener(r, i);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
            case "load":
                window.onload = s;
                break;
            case "resize":
                window.onresize = s;
                break;
            case "scroll":
                window.onscroll = s
        } else {
            var a = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                    Nt["" + r + i] && delete Nt["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
            else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted) && this.el instanceof Element && (Nt["" + r + i] || (Nt["" + r + i] = !0, this.el.addEventListener(r, a)))
        }
        return this
    }, i.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
        else this.el.removeEventListener(e, t);
        return this
    }, i.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
            });
        else {
            var r = function(e) {
                e.stopPropagation(), o(), n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }, i.prototype.trigger = function(e) {
        e = new CustomEvent(e, {
            customEvent: "yes"
        });
        return this.el.dispatchEvent(e), this
    }, i.prototype.focus = function() {
        return (1 <= this.el.length ? this.el[0] : this.el).focus(), this
    }, i.prototype.attr = function(e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
    }, i.prototype.html = function(e) {
        if (null == e) return (1 <= this.el.length ? this.el[0] : this.el).innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
        else this.el.innerHTML = e;
        return this
    }, i.prototype.append = function(e) {
        if ("string" != typeof e || e.includes("<") || e.includes(">"))
            if (Array.isArray(e)) {
                var o = this;
                Array.prototype.forEach.call(e, function(e, t) {
                    document.querySelector(o.selector).appendChild(new i(e, "ce").el)
                })
            } else {
                if ("string" == typeof e || Array.isArray(e)) return this.appendHtmlElement(e);
                if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(e);
                else if (1 <= e.length)
                    for (var t = 0; t < e.length; t++) this.selector.appendChild(e[t]);
                else this.selector.appendChild(e)
            }
        else this.el.insertAdjacentText("beforeend", e);
        return this
    }, i.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o) return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o) return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }, i.prototype.data = function(o, n) {
        if (!(this.el.length < 1)) {
            if (!(1 <= this.el.length)) return r(this.el, n);
            Array.prototype.forEach.call(this.el, function(e, t) {
                r(e, n)
            })
        }
        return this;

        function r(e, t) {
            if (!t) return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
    }, i.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
        return e ? (t = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px", o = "number" == typeof e ? e : parseInt(e.toString().split(t)[0]), (t && "px" === t || "%" === t || "em" === t || "rem" === t) && (0 < o ? d(this.el, "height: " + (a + o + t) + ";", !0) : "auto" === e && d(this.el, "height: " + e + ";", !0)), this) : this.selector === document ? i : this.el.clientHeight - a
    }, i.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
    }, i.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }, i.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
    }, i.prototype.animate = function(e, t) {
        var o, n, r, i, s = this;
        this.el = document.querySelector(this.selector);
        for (o in e) n = o, i = r = void 0, r = parseInt(e[n]), i = e[n].split(parseInt(e[n]))[1] ? e[n].split(parseInt(e[n]))[1] : "px", r = s.createKeyFrameAnimation(n, s.el, r, i), (i = document.head.querySelector("#onetrust-style")) ? i.innerHTML += r : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = r, document.head.appendChild(i)), s.addWebKitAnimation(n, t);
        return this
    }, i.prototype.scrollTop = function() {
        return this.el.scrollTop
    }, i.prototype.appendHtmlElement = function(o) {
        var n, r, e;
        return "string" == typeof this.selector ? document.querySelector(this.selector).appendChild(new i(o, "ce").el) : this.useEl ? (n = document.createDocumentFragment(), (r = !(!o.includes("<th") && !o.includes("<td"))) && (e = o.split(" ")[0].split("<")[1], n.appendChild(document.createElement(e)), n.firstChild.innerHTML = o), Array.prototype.forEach.call(this.el, function(e, t) {
            r ? e.appendChild(n.firstChild) : e.appendChild(new i(o, "ce").el)
        })) : this.selector.appendChild(new i(o, "ce").el), this
    }, i.prototype.createKeyFrameAnimation = function(e, t, o, n) {
        return "\n        @keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-webkit-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-moz-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        "
    }, i.prototype.addWebKitAnimation = function(e, t) {
        (i.browser().type = i.browser().version <= 8) ? d(this.el, "top" === e ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + t + "ms ease-out forwards;"): d(this.el, "\n                animation-name: " + ("top" === e ? "slide-up-custom" : "slide-down-custom") + ";\n                animation-duration: " + t + "ms;\n                animation-fill-mode: forwards;\n                animation-timing-function: ease-out;\n            ", !0)
    };
    var wt = i;

    function i(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = i.browser().type.toLowerCase(),
                    n = i.browser().version;
                n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o ? ((n = document.implementation.createHTMLDocument()).body.innerHTML = e, this.el = n.body.children[0]) : (o = document.createRange().createContextualFragment(e), this.el = o.firstChild), this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function A(e, t) {
        return new wt(e, t = void 0 === t ? "" : t)
    }
    var Gt, Nt = {},
        e = (xt.prototype.getDataLanguageCulture = function() {
            var e = y.getStubAttr(ze);
            return e ? this.checkAndTansformLangCodeWithUnderdscore(e) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, xt.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, xt.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = "";
            if (I.langSwitcherPldr) {
                var t = b.convertKeyValueLowerCase(I.langSwitcherPldr),
                    o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        } else 2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }, xt.prototype.getUserLanguage = function() {
            return I.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, xt.prototype.isValidLanguage = function(e, t) {
            var o = b.convertKeyValueLowerCase(I.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }, xt.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t, o = I.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
            } else e = this.getDataLanguageCulture();
            return _.lang = e, _.consentLanguage = e.substr(0, 2), t = I.canUseConditionalLogic ? I.bannerDataParentURL + "/" + o.Id + "/" + I.Condition.Id + "/" + e : I.bannerDataParentURL + "/" + o.Id + "/" + e, t = I.multiVariantTestingEnabled ? I.bannerDataParentURL + "/" + o.Id + "/variants/" + I.selectedVariant.Id + "/" + e : t
        }, xt.prototype.populateLangSwitcherPlhdr = function() {
            var e, t, o, n = I.getRegionRule();
            n && (e = n.Variants, I.multiVariantTestingEnabled && e ? (o = void 0, (t = k.getCookie(S.SELECTED_VARIANT)) && (o = e[b.findIndex(e, function(e) {
                return e.Id === t
            })]), t && o || (o = e[Math.floor(Math.random() * e.length)]), I.langSwitcherPldr = o.LanguageSwitcherPlaceholder, I.selectedVariant = o) : I.canUseConditionalLogic ? I.langSwitcherPldr = I.Condition.LanguageSwitcherPlaceholder : I.langSwitcherPldr = n.LanguageSwitcherPlaceholder)
        }, xt);

    function xt() {}
    Rt.prototype.getLangJson = function(e) {
        var t;
        return void 0 === e && (e = null), I.previewMode ? (t = JSON.parse(window.sessionStorage.getItem("otPreviewData")), Promise.resolve(t.langJson)) : (t = Gt.getLangJsonUrl(e)) ? Dt.otFetch(t + ".json") : Promise.resolve(null)
    }, Rt.prototype.getPersistentCookieSvg = function(e) {
        e = e || L.cookiePersistentLogo;
        return e ? Dt.otFetch(e, !0) : Promise.resolve(null)
    }, Rt.prototype.fetchGvlObj = function() {
        var e = v.moduleInitializer.IabV2Data.globalVendorListUrl;
        return "IAB2V2" === I.getRegionRuleType() && (e = v.moduleInitializer.Iab2V2Data.globalVendorListUrl), this.otFetch(e)
    }, Rt.prototype.fetchGoogleVendors = function() {
        var e = y.updateCorrectIABUrl(v.moduleInitializer.GoogleData.googleVendorListUrl);
        return y.checkMobileOfflineRequest(y.getBannerVersionUrl()) ? y.otFetchOfflineFile(b.getRelativeURL(e, !0)) : (I.mobileOnlineURL.push(e), this.otFetch(e))
    }, Rt.prototype.getStorageDisclosure = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, Rt.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            y.jsonp(y.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, Rt.prototype.loadGPP = function() {
        return new Promise(function(e) {
            y.jsonp(y.getBannerVersionUrl() + "/otGPP.js", e, e)
        })
    }, Rt.prototype.getCSBtnContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.useRTL ? fe.RTL : fe.LTR, _.csBtnAsset[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/" + (L.useRTL ? We : Ke), n = _.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, _.csBtnAsset[t]]
                }
            })
        })
    }, Rt.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.useRTL ? fe.RTL : fe.LTR, _.pcAsset[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl(), L.PCTemplateUpgrade && (o += "/v2"), o = o + "/" + I.pcName + (L.useRTL ? "Rtl" : "") + ".json", n = _.pcAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, _.pcAsset[t]]
                }
            })
        })
    }, Rt.prototype.getBannerContent = function(s, a) {
        return void 0 === s && (s = !1), void 0 === a && (a = null), u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (t = L.useRTL ? fe.RTL : fe.LTR, o = a || Gt.getDataLanguageCulture(), _.bAsset[t] && !s) return [3, 2];
                        if (i = I.getRegionRule(), n = void 0, v.fp.CookieV2SSR) {
                            if (I.previewMode) return r = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(r.bLayout)];
                            n = I.bannerDataParentURL + "/" + i.Id, I.canUseConditionalLogic && (n += "/" + I.Condition.Id), n += "/bLayout-" + o + ".json"
                        } else n = y.getBannerSDKAssestsUrl() + ("/" + I.bannerName + (L.useRTL ? "Rtl" : "")) + ".json";
                        return r = _.bAsset, i = t, [4, this.otFetch(n)];
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, _.bAsset[t]]
                }
            })
        })
    }, Rt.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.useRTL ? fe.RTL : fe.LTR, _.cStyles[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otCommonStyles" + (L.useRTL ? "Rtl" : "") + ".css", n = _.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, _.cStyles[t]]
                }
            })
        })
    }, Rt.prototype.getSyncNtfyContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.useRTL ? fe.RTL : fe.LTR, _.syncNtfyContent[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otSyncNotification" + (L.useRTL ? "Rtl" : "") + ".json", n = _.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, _.syncNtfyContent[t]]
                }
            })
        })
    }, Rt.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: _.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(_.consentApi, n, e, e)
        })
    }, Rt.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, Rt.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), u(this, void 0, void 0, function() {
            var t, o, n = this;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return y.checkMobileOfflineRequest(r) ? [4, y.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), I.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return (t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials")) ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, Rt.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), i.withCredentials = !1, t)
            for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function() {
            var e;
            200 <= this.status && this.status < 400 && this.responseText ? (e = void 0, e = r ? this.responseText : JSON.parse(this.responseText), o(e)) : n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, i.onerror = function(e) {
            n(e)
        }, i.send()
    };
    var Dt, Ht = Rt;

    function Rt() {}
    Mt.prototype.addLogoUrls = function() {
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) || (I.mobileOnlineURL.push(y.updateCorrectUrl(L.optanonLogo)), I.mobileOnlineURL.push(y.updateCorrectUrl(L.oneTrustFtrLogo)))
    }, Mt.prototype.getCookieLabel = function(e, t, o) {
        var n;
        return void 0 === o && (o = !0), e ? (n = e.Name, t ? '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + L.NewWinTxt + "</span>\n                </a>\n            " : n) : ""
    }, Mt.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }, Mt.prototype.getBannerVersionUrl = function() {
        var e = I.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + v.moduleInitializer.Version
    }, Mt.prototype.checkMobileOfflineRequest = function(e) {
        return v.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
    }, Mt.prototype.updateCorrectIABUrl = function(e) {
        var t, o = v.moduleInitializer.ScriptType;
        return o !== Me && o !== Ue || (o = b.getURL(e), (t = (t = I.bannerScriptElement) && t.getAttribute("src") ? b.getURL(t.getAttribute("src")) : null) && o && t.hostname !== o.hostname && (e = (e = (t = "" + I.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, t.hostname))), e
    }, Mt.prototype.updateCorrectUrl = function(e, t) {
        if ((void 0 === t && (t = !1), I.previewMode) && new RegExp("^data:image/").test(e)) return e;
        var o = b.getURL(e),
            n = I.bannerScriptElement,
            n = n && n.getAttribute("src") ? b.getURL(n.getAttribute("src")) : null;
        if (n && o && n.hostname !== o.hostname) {
            var r = v.moduleInitializer.ScriptType;
            if (r === Me || r === Ue) {
                if (t) return e;
                e = (n = I.bannerDataParentURL + "/" + I.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else e = null == (r = e) ? void 0 : r.replace(o.hostname, n.hostname)
        }
        return e
    }, Mt.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        for (var i = _.oneTrustIABConsent, s = !0, a = (r = r || _.groupsConsent, 0);

            function() {
                var e, t, o = n.SubGroups[a];
                o.Status !== m.ALWAYS_ACTIVE && (o.Type === ft ? (-1 < (t = b.findIndex(r, function(e) {
                    return e.split(":")[0] === o.CustomGroupId
                })) && "0" === r[t].split(":")[1] || !r.length) && (s = !1) : (e = o.Type === T.GroupTypes.Spl_Ft ? i.specialFeatures : i.purpose, (-1 < (t = b.findIndex(e, function(e) {
                    return e.split(":")[0] === o.IabGrpId
                })) && "false" === e[t].split(":")[1] || !e.length) && (s = !1))), a++
            }(), s && a < n.SubGroups.length;);
        return s
    }, Mt.prototype.otFetchOfflineFile = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return n = n.replace(".json", ".js"), t = n.split("/"), t = t[t.length - 1], o = t.split(".js")[0], [4, new Promise(function(e) {
                            function t() {
                                e(window[o])
                            }
                            y.jsonp(n, t, t)
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, Mt.prototype.jsonp = function(e, t, o) {
        y.checkMobileOfflineRequest(e) || I.mobileOnlineURL.push(e);
        var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];

        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }, n.onload = i, n.onerror = function() {
            o()
        }, n.type = "text/javascript", n.async = !0, n.src = e, _.crossOrigin && n.setAttribute("crossorigin", _.crossOrigin), r.appendChild(n)
    }, Mt.prototype.isCookiePolicyPage = function(e) {
        for (var t = !1, o = b.removeURLPrefixes(window.location.href), n = A("<div></div>", "ce").el, r = (A(n).html(e), n.querySelectorAll("a")), i = 0; i < r.length; i++)
            if (b.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }, Mt.prototype.isBannerVisible = function() {
        var e = !1,
            t = document.getElementById("onetrust-banner-sdk");
        return e = t && t.getAttribute("style") ? -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none") : e
    }, Mt.prototype.hideBanner = function() {
        var e = this;
        _.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : A("#onetrust-banner-sdk").fadeOut(400)
    }, Mt.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }, Mt.prototype.getDuration = function(e) {
        var t, o = e.Length,
            e = e.DurationType;
        return o && 0 !== parseInt(o) ? (o = parseInt(o), e ? (t = 1 < (o = this.round_to_precision(o / e, .5)) ? lt[e] + "s" : lt[e], L.LifespanDurationText && 1 === e && (t = "LifespanDurationText"), o + " " + L[t]) : this.getDurationText(o)) : L.LfSpanSecs
    }, Mt.prototype.isDateCurrent = function(e) {
        var e = e.split("/"),
            t = parseInt(e[1]),
            o = parseInt(e[0]),
            e = parseInt(e[2]),
            n = new Date,
            r = n.getDate(),
            i = n.getFullYear(),
            n = n.getMonth() + 1;
        return i < e || e === i && n < o || e === i && o === n && r <= t
    }, Mt.prototype.insertFooterLogo = function(e) {
        var t = A(e).el;
        if (t.length && L.oneTrustFtrLogo) {
            var o = y.updateCorrectUrl(L.oneTrustFtrLogo);
            y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = b.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img"),
                    i = "Powered by OneTrust " + L.NewWinTxt;
                A(t[n]).attr("href", L.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), A(t[n]).attr("aria-label", i)
            }
        }
    }, Mt.prototype.getUTCFormattedDate = function(e) {
        e = new Date(e);
        return e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + e.getUTCDate().toString().toString().padStart(2, "0") + " " + e.getUTCHours() + ":" + e.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + e.getUTCSeconds().toString().toString().padStart(2, "0")
    }, Mt.prototype.getDurationText = function(e) {
        return 365 <= e ? (e = this.round_to_precision(e /= 365, .5)) + " " + (1 < e ? L.LfSpnYrs : L.LfSpnYr) : L.LifespanDurationText ? e + " " + L.LifespanDurationText : e + " " + (1 < e ? L.PCenterVendorListLifespanDays : L.PCenterVendorListLifespanDay)
    }, Mt.prototype.round_to_precision = function(e, t) {
        e = +e + (void 0 === t ? .5 : t / 2);
        return e - e % (void 0 === t ? 1 : +t)
    }, Mt.prototype.isOptOutEnabled = function() {
        return L.PCTemplateUpgrade ? _.genVenOptOutEnabled : L.allowHostOptOut
    }, Mt.prototype.findUserType = function(e) {
        _.isKeyboardUser = !(!e || 0 !== e.detail)
    }, Mt.prototype.getCSSPropsFromString = function(e) {
        var t, o;
        return e ? (t = e.length, o = {}, (e = e.endsWith(";") ? e.substring(0, t - 1) : e).trim().split(";").forEach(function(e) {
            e = e.trim().toString().split(":"), e = JSON.parse('{ "' + e[0].trim() + '" : "' + e[1].trim() + '" }');
            o = Object.assign(o, e)
        }), o) : {}
    }, Mt.prototype.setCloseIcon = function(e) {
        var t = y.updateCorrectUrl(L.OTCloseBtnLogo),
            e = A(e);
        e.length && d(e.el, 'background-image: url("' + t + '")', !0)
    }, Mt.prototype.createOptOutSignalElement = function(e, t) {
        var e = e(t ? "#ot-pc-content" : "#onetrust-policy"),
            o = document.createElement("div"),
            n = (o.classList.add("ot-optout-signal"), document.createElement("div")),
            r = (n.classList.add("ot-optout-icon"), document.createElement("span"));
        return r.innerText = t ? L.PCOptOutSignalText : L.BOptOutSignalText, o.append(n), o.append(r), null != (t = e) && t.prepend(o), this.applyGuardLogo(), o
    }, Mt.prototype.applyGuardLogo = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = L.OTCloseBtnLogo, n = o.indexOf("static/"), t = o.replace(o.slice(n + 7), "ot_guard_logo.svg")), (o = v.moduleInitializer.ScriptType) !== Me && o !== Ue || (t = y.updateCorrectUrl(t)), [4, Dt.getPersistentCookieSvg(t)];
                    case 1:
                        return n = e.sent(), A(".ot-optout-icon").html(n), [2]
                }
            })
        })
    }, Mt.prototype.updateTCString = function() {
        var e = h.iabStringSDK().tcString().encode(_.tcModel);
        _.cmpApi.update(e, !1)
    }, Mt.prototype.replaceTextFromString = function(e, t, o) {
        return t.split(e).join(o)
    }, Mt.prototype.getStubQueryParam = function(e) {
        var t = I.stubUrl || window.otStubData && window.otStubData.stubUrl;
        return !t || (t = t.split("?")).length < 2 ? null : new URLSearchParams(t[1]).get(e)
    }, Mt.prototype.getStubAttr = function(e) {
        var t = I.bannerScriptElement,
            t = t && t.getAttribute(e);
        return t || y.getStubQueryParam(e)
    };
    var y, Ft = Mt;

    function Mt() {}
    t.prototype.getPurposeOneGrpId = function() {
        return T.IdPatterns.Pur + "1"
    }, t.prototype.setRegionRule = function(e) {
        this.rule = e
    }, t.prototype.getRegionRule = function() {
        return this.rule
    }, t.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, t.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition : this.rule).UseGoogleVendors
    }, t.prototype.initVariables = function() {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, t.prototype.init = function(e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), L.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), this.populateGPCBrowserSignal(), L.GoogleConsent.GCEnable && this.initGCM()
    }, t.prototype.getGPCSignal = function() {
        navigator.globalPrivacyControl ? this.gpcEnabled = !0 : this.gpcEnabled = !1
    }, t.prototype.isValidConsentNoticeGroup = function(e, t) {
        var o, n, r, i, s;
        return !!e.ShowInPopup && (o = this.isGroupHasCookies(e), i = r = n = !1, null != (s = e) && s.Parent || (e.SubGroups.length && (n = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
        }), r = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
        }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
            return -1 === kt.indexOf(e.Type)
        }))), s = e.SubGroups.some(function(e) {
            return -1 < kt.indexOf(e.Type)
        }), (-1 < kt.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)), this.isValidGroup(o, e, n, r, i))
    }, t.prototype.isValidGroup = function(e, t, o, n, r) {
        var i = _.showVendorService && t.VendorServices && t.VendorServices.length;
        return e || -1 < kt.indexOf(t.Type) || o || n || r || i
    }, t.prototype.isGroupHasCookies = function(e) {
        return e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length
    }, t.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf(T.IdPatterns.Spl_Pur) ? e = e.replace(T.IdPatterns.Spl_Pur, "") : -1 < e.indexOf(T.IdPatterns.Pur) ? e = e.replace(T.IdPatterns.Pur, "") : -1 < e.indexOf(T.IdPatterns.Ft) ? e = e.replace(T.IdPatterns.Ft, "") : -1 < e.indexOf(T.IdPatterns.Spl_Ft) && (e = e.replace(T.IdPatterns.Spl_Ft, "")), e
    }, t.prototype.isIabGrpAndNonConsentable = function(e) {
        var t = T.GroupTypes;
        return !this.isIab2orv2Template && -1 < kt.indexOf(e.Type) || this.isIab2orv2Template && (e.Type === t.Pur || e.Type === t.Stack) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === t.Spl_Ft && !e.HasConsentOptOut
    }, t.prototype.setTcfPurposeParentMapForGrp = function(e) {
        var t = T.GroupTypes;
        if (this.isTcfV2Template && e.Parent) switch (e.Type) {
            case t.Pur:
                this.tcfParentMap.pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Pur:
                this.tcfParentMap.spl_pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Ft:
                this.tcfParentMap.ft.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Ft:
                this.tcfParentMap.spl_ft.set(parseInt(e.IabGrpId), e.Parent)
        }
    }, t.prototype.populateGroups = function(e, r) {
        var i = this,
            s = {},
            a = [],
            l = T.GroupTypes,
            t = (e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (i.setHealthSignatureDataIntoGroup(r, e), void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !i.isIabGrpAndNonConsentable(e)) {
                    if (t !== I.getPurposeOneGrpId() || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, i.isIab2orv2Template && -1 < kt.indexOf(e.Type)) {
                        var o = i.extractGroupIdForIabGroup(t),
                            n = (i.iabGrpIdMap[t] = o, e.IabGrpId = o, {
                                description: e.GroupDescription,
                                descriptionLegal: e.DescriptionLegal,
                                id: Number(o),
                                name: e.GroupName
                            });
                        switch (e.Type) {
                            case l.Pur:
                                i.iabGroups.purposes[o] = n;
                                break;
                            case l.Spl_Pur:
                                i.iabGroups.specialPurposes[o] = n;
                                break;
                            case l.Ft:
                                i.iabGroups.features[o] = n;
                                break;
                            case l.Spl_Ft:
                                i.iabGroups.specialFeatures[o] = n
                        }
                    }
                    i.setTcfPurposeParentMapForGrp(e)
                }
            }), a.forEach(function(e) {
                s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < kt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
            }), []);
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }, t.prototype.setHealthSignatureDataIntoGroup = function(e, t) {
        this.requireSignatureEnabled && e.RequireSignatureCID === t.CustomGroupId && (t.needsHealthSignature = !0, "1" === k.readCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION)) && (t.healthSignatureId = k.readCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID))
    }, t.prototype.isGrpConsentable = function(e) {
        var t = T.GroupTypes;
        return e.Type === t.Cookie || e.Type === t.Pur || e.Type === t.Spl_Ft
    }, t.prototype.initGrpVar = function(e) {
        var o = this,
            n = !0,
            r = !0;
        e.forEach(function(e) {
            M([e], e.SubGroups).forEach(function(e) {
                var t;
                o.isGrpConsentable(e) && (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < bt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < Pt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === bt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = m.INACTIVE), (t = o.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status.toLowerCase()) !== m.ACTIVE && t !== m.INACTIVE_LANDING_PAGE && t !== m.DNT || (n = !1), t !== m.INACTIVE_LANDING_PAGE && t !== m.ALWAYS_ACTIVE && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, t.prototype.domainDataMapper = function(e) {
        this.requireSignatureEnabled = (null == (t = v.fp) ? void 0 : t.CookieV2SubmitPurpose) && e.IsRequireSignatureEnabled;
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            AlwaysInactiveText: e.AlwaysInactiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime,
                GCAdUserData: e.GCAdUserData,
                GCAdPersonalization: e.GCAdPersonalization
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (t = e.OverridenGoogleVendors) ? t : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || Se.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound,
            UseNonStandardStacks: e.UseNonStandardStacks,
            RequireSignatureCID: e.RequireSignatureCID,
            IsRequireSignatureEnabled: e.IsRequireSignatureEnabled,
            PCRequireSignatureHelpText: e.PCRequireSignatureHelpText,
            PCRequireSignatureFieldLabel: e.PCRequireSignatureFieldLabel,
            PCRequireSignatureHeaderText: e.PCRequireSignatureHeaderText,
            PCRequireSignatureHeaderDesc: e.PCRequireSignatureHeaderDesc,
            PCRequireSignatureRejectBtnText: e.PCRequireSignatureRejectBtnText,
            PCRequireSignatureConfirmBtnText: e.PCRequireSignatureConfirmBtnText
        };
        this.setPCDomainData(t, e), this.setAdditionalTechnologies(t, e), this.setVendorServiceConfigData(t, e), this.setDomainCommonDataDefaults(t, e), this.setDomainPCDataDefaults(t, e), this.setGppData(t, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== le.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), v.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), L = R(R({}, L), t)
    }, t.prototype.setGppData = function(e, t) {
        e.GPPPurposes = R({}, t.GPPPurposes), e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable, e.IsGPPEnabled = t.IsGPPEnabled, e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable, e.IsMSPAEnabled = t.IsMSPAEnabled, e.MSPAOptionMode = t.MSPAOptionMode, e.UseGPPUSNational = t.UseGPPUSNational
    }, t.prototype.setPCDomainData = function(e, t) {
        e.PCAccordionStyle = le.Caret, e.PCActiveText = t.PCActiveText, e.PCCloseButtonType = t.PCCloseButtonType, e.PCContinueText = t.PCContinueText, e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader, e.PCCookiePolicyText = t.PCCookiePolicyText, e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText, e.PCenterApplyFiltersText = t.PCenterApplyFiltersText, e.PCenterBackText = t.PCenterBackText, e.PCenterCancelFiltersText = t.PCenterCancelFiltersText, e.PCenterClearFiltersText = t.PCenterClearFiltersText, e.PCenterCookiesListText = t.PCenterCookiesListText, e.PCenterEnableAccordion = t.PCenterEnableAccordion, e.PCenterFilterText = t.PCenterFilterText, e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText, e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText, e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText, e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton, e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText, e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText, e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText, e.PCenterUserIdTitleText = t.PCenterUserIdTitleText, e.PCenterVendorListDescText = t.PCenterVendorListDescText, e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure, e.PCenterVendorListLifespan = t.PCenterVendorListLifespan, e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay, e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays, e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth, e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths, e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage, e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain, e.PCVLSDomainsUsed = t.PCVLSDomainsUsed, e.PCVLSUse = t.PCVLSUse, e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier, e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes, e.PCenterVendorListStorageType = t.PCenterVendorListStorageType, e.PCenterVendorsListText = t.PCenterVendorsListText, e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText, e.PCGoogleVendorsText = t.PCGoogleVendorsText, e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition, e.PCGrpDescType = t.PCGrpDescType, e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText, e.PCIABVendorsText = t.PCIABVendorsText, e.PCIABVendorLegIntClaimText = t.PCIABVendorLegIntClaimText, e.PCVListDataDeclarationText = t.PCVListDataDeclarationText, e.PCVListDataRetentionText = t.PCVListDataRetentionText, e.PCVListStdRetentionText = t.PCVListStdRetentionText, e.IABDataCategories = t.IABDataCategories, e.PCInactiveText = t.PCInactiveText, e.PCIllusText = t.PCIllusText, e.PCLogoAria = t.PCLogoScreenReader, e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert, e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader, e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert, e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable, e.PCTemplateUpgrade = t.PCTemplateUpgrade, e.PCVendorFullLegalText = t.PCVendorFullLegalText, e.PCViewCookiesText = t.PCViewCookiesText, e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        }, e.PCenterVendorListLinkText = t.PCenterVendorListLinkText, e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel, e.PreferenceCenterPosition = t.PreferenceCenterPosition, e.PCVendorsCountText = t.PCVendorsCountText, e.PCVendorsCountFeatureText = t.PCVendorsCountFeatureText, e.PCVendorsCountSpcFeatureText = t.PCVendorsCountSpcFeatureText, e.PCVendorsCountSpcPurposeText = t.PCVendorsCountSpcPurposeText
    }, t.prototype.setVendorServiceConfigData = function(e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }, t.prototype.setAdditionalTechnologies = function(e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }, t.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.CookiesDescText = t.CookiesDescText || "Description", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, t.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, t.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e), L = R(R({}, L), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, t.prototype.cookieListMapper = function(e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech, e.TTLShowTechDesc = t.TTLShowTechDesc
    }, t.prototype.setPublicDomainData = function(n) {
        this.pubDomainData = {
            AboutCookiesText: n.AboutCookiesText,
            AboutLink: n.AboutLink,
            AboutText: n.AboutText,
            ActiveText: n.ActiveText,
            AddLinksToCookiepedia: n.AddLinksToCookiepedia,
            AlertAllowCookiesText: n.AlertAllowCookiesText,
            AlertCloseText: n.AlertCloseText,
            AlertLayout: n.AlertLayout,
            AlertMoreInfoText: n.AlertMoreInfoText,
            AlertNoticeText: n.AlertNoticeText,
            AllowAllText: n.PreferenceCenterConfirmText,
            AlwaysActiveText: n.AlwaysActiveText,
            AlwaysInactiveText: n.AlwaysInactiveText,
            BAnimation: n.BAnimation,
            BannerCloseButtonText: n.BannerCloseButtonText,
            BannerDPDDescription: n.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: n.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: n.BannerDPDTitle || "",
            BannerFeatureDescription: n.BannerFeatureDescription,
            BannerFeatureTitle: n.BannerFeatureTitle,
            BannerIABPartnersLink: n.BannerIABPartnersLink,
            BannerInformationDescription: n.BannerInformationDescription,
            BannerInformationTitle: n.BannerInformationTitle,
            BannerPosition: n.BannerPosition,
            BannerPurposeDescription: n.BannerPurposeDescription,
            BannerPurposeTitle: n.BannerPurposeTitle,
            BannerRejectAllButtonText: n.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: n.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: n.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: n.BannerShowRejectAllButton,
            BannerTitle: n.BannerTitle,
            BCategoryContainerColor: n.BCategoryContainerColor,
            BCategoryStyle: n.BCategoryStyle,
            BCategoryStyleColor: n.BCategoryStyleColor,
            BCloseButtonType: n.BCloseButtonType,
            BContinueText: n.BContinueText,
            BInitialFocus: n.BInitialFocus,
            BInitialFocusLinkAndButton: n.BInitialFocusLinkAndButton,
            BLineBreakColor: n.BLineBreakColor,
            BRejectConsentType: n.BRejectConsentType,
            BSaveBtnColor: n.BSaveBtnColor,
            BSaveBtnTxt: n.BSaveBtnText,
            BShowSaveBtn: n.BShowSaveBtn,
            CategoriesText: n.CategoriesText,
            cctId: n.cctId,
            ChoicesBanner: n.ChoicesBanner,
            CloseShouldAcceptAllCookies: n.CloseShouldAcceptAllCookies,
            CloseText: n.CloseText,
            ConfirmText: n.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: n.ConsentModel
            },
            CookieListDescription: n.CookieListDescription,
            CookieListTitle: n.CookieListTitle,
            CookieSettingButtonText: n.CookieSettingButtonText,
            CookiesText: n.CookiesText,
            CookiesDescText: n.CookiesDescText,
            CookiesUsedText: n.CookiesUsedText,
            CustomJs: n.CustomJs,
            Domain: v.moduleInitializer.Domain,
            FooterDescriptionText: n.FooterDescriptionText,
            ForceConsent: n.ForceConsent,
            GeneralVendors: n.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: n.GCAdStorage,
                GCAnalyticsStorage: n.GCAnalyticsStorage,
                GCEnable: n.GCEnable,
                GCFunctionalityStorage: n.GCFunctionalityStorage,
                GCPersonalizationStorage: n.GCPersonalizationStorage,
                GCRedactEnable: n.GCRedactEnable,
                GCSecurityStorage: n.GCSecurityStorage,
                GCWaitTime: n.GCWaitTime,
                GCAdUserData: n.GCAdUserData,
                GCAdPersonalization: n.GCAdPersonalization
            },
            Groups: null,
            HideToolbarCookieList: n.HideToolbarCookieList,
            IabType: n.IabType,
            InactiveText: n.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: n.IsConsentLoggingEnabled,
            IsIABEnabled: n.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: n.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: n.IsLifespanEnabled,
            Language: n.Language,
            LastReconsentDate: n.LastReconsentDate,
            LifespanDurationText: n.LifespanDurationText,
            LifespanText: n.LifespanText,
            LifespanTypeText: n.LifespanTypeText,
            MainInfoText: n.MainInfoText,
            MainText: n.MainText,
            ManagePreferenceText: n.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: n.NextPageAcceptAllCookies,
            NextPageCloseBanner: n.NextPageCloseBanner,
            NoBanner: n.NoBanner,
            OnClickAcceptAllCookies: n.OnClickAcceptAllCookies,
            OnClickCloseBanner: n.OnClickCloseBanner,
            OverridenGoogleVendors: n.OverridenGoogleVendors,
            PCAccordionStyle: le.Caret,
            PCCloseButtonType: n.PCCloseButtonType,
            PCContinueText: n.PCContinueText,
            PCenterAllowAllConsentText: n.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: n.PCenterApplyFiltersText,
            PCenterBackText: n.PCenterBackText,
            PCenterCancelFiltersText: n.PCenterCancelFiltersText,
            PCenterClearFiltersText: n.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: n.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: n.PCenterCookiesListText,
            PCenterEnableAccordion: n.PCenterEnableAccordion,
            PCenterExpandToViewText: n.PCenterExpandToViewText,
            PCenterFilterAppliedAria: n.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: n.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: n.PCenterFilterText,
            PCenterRejectAllButtonText: n.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: n.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: n.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: n.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: n.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: n.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: n.PCenterUserIdTitleText,
            PCenterVendorListDescText: n.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: n.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: n.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: n.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: n.PCFirstPartyCookieListText,
            PCGoogleVendorsText: n.PCGoogleVendorsText,
            PCGrpDescLinkPosition: n.PCGrpDescLinkPosition,
            PCGrpDescType: n.PCGrpDescType,
            PCIABVendorsText: n.PCIABVendorsText,
            PCIABVendorLegIntClaimText: n.PCIABVendorLegIntClaimText,
            PCVListDataDeclarationText: n.PCVListDataDeclarationText,
            PCVListDataRetentionText: n.PCVListDataRetentionText,
            PCVListStdRetentionText: n.PCVListStdRetentionText,
            IABDataCategories: n.IABDataCategories,
            PCLogoAria: n.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: n.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: n.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: n.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: n.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: n.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: n.PCTemplateUpgrade,
            PCVendorFullLegalText: n.PCVendorFullLegalText,
            PCViewCookiesText: n.PCViewCookiesText,
            PCLayout: {
                Center: n.Center,
                List: n.List,
                Panel: n.Panel,
                Popup: n.Popup,
                Tab: n.Tab
            },
            PCenterVendorListLinkText: n.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: n.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: n.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: n.PCenterImprintLinkText,
            PCenterImprintLinkUrl: n.PCenterImprintLinkUrl,
            PreferenceCenterPosition: n.PreferenceCenterPosition,
            ScrollAcceptAllCookies: n.ScrollAcceptAllCookies,
            ScrollCloseBanner: n.ScrollCloseBanner,
            ShowAlertNotice: n.ShowAlertNotice,
            showBannerCloseButton: n.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: n.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: n.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(n.PCTemplateUpgrade),
            VendorConsentModel: n.VendorConsentModel,
            VendorLevelOptOut: n.IsIabEnabled,
            VendorListText: n.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, n.PCTemplateUpgrade && (n.Center || n.Panel) && n.PCAccordionStyle !== le.NoAccordion && (this.pubDomainData.PCAccordionStyle = n.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = n.PCAccordionStyle !== le.NoAccordion;
        var r = [];
        n.Groups.forEach(function(e) {
            var t, o;
            !n.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)), o = null == (o = e.Hosts) ? void 0 : o.reduce(function(e, t) {
                return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
            }, []), (t = e.Cookies).push.apply(t, o), r.push(e))
        }), this.pubDomainData.Groups = r
    }, t.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, t.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (I.gcmUpdateCallback = e.listener)
        })
    }, t.prototype.setDomainElementAttributes = function() {
        var e;
        this.bannerScriptElement && ((e = y.getStubAttr(je)) && this.setUseDocumentLanguage("true" === e), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html")) && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html"))
    }, t.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }, t.prototype.setPcName = function() {
        var e = L.PCLayout;
        e.Center ? this.pcName = ot : e.Panel ? this.pcName = rt : e.Popup ? this.pcName = it : e.List ? this.pcName = nt : e.Tab && (this.pcName = st)
    }, t.prototype.setBannerName = function() {
        L.Flat ? this.bannerName = Ye : L.FloatingRoundedCorner ? this.bannerName = Xe : L.FloatingFlat ? this.bannerName = Qe : L.FloatingRounded ? this.bannerName = $e : L.FloatingRoundedIcon ? this.bannerName = Ze : L.CenterRounded ? this.bannerName = Je : L.ChoicesBanner ? this.bannerName = et : L.NoBanner && (this.bannerName = tt)
    }, t.prototype.populateGPCSignal = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, p.GPC_ENABLED),
            t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, k.writeCookieParam(S.OPTANON_CONSENT, p.GPC_ENABLED, t)
    }, t.prototype.populateGPCBrowserSignal = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, p.GPC_Browser_Flag),
            t = this.gpcEnabled ? "1" : "0";
        this.gpcBrowserValueChanged = e !== t, k.writeCookieParam(S.OPTANON_CONSENT, p.GPC_Browser_Flag, t)
    }, t.prototype.initGCM = function() {
        var o = [],
            e = (Object.keys(this.rule.States).forEach(function(t) {
                I.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            }), I.rule.Countries.map(function(e) {
                return e.toUpperCase()
            }));
        I.gcmCountries = e.concat(o)
    };
    var qt = t;

    function t() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.gpcBrowserValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.tcf2ActiveVendors = {
            all: 0,
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map,
            stack: new Map
        }, this.tcfParentMap = {
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map
        }
    }
    var I, L = {};

    function Ut() {
        this.otSDKVersion = "202404.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.gpcConsentTxn = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map, this.showTrackingTech = !1, this.currentTrackingTech = {}
    }
    Ut.prototype.getVendorsInDomain = function() {
        var e, t;
        return _._vendorsInDomain || (e = new Map, t = null != (t = L.Groups) ? t : [], _.setVendorServicesMap(t, e), _._vendorsInDomain = e), _._vendorsInDomain
    }, Ut.prototype.setVendorServicesMap = function(e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && _.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s],
                    c = Object.assign({}, i);
                delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
            }
        }
    }, Ut.prototype.clearVendorsInDomain = function() {
        _._vendorsInDomain = null
    }, Ut.prototype.checkVendorConsent = function(e) {
        return _.vendorsSetting[e] && _.vendorsSetting[e].consent
    };
    var _ = new Ut;

    function o() {}
    o.prototype.initializeBannerVariables = function(e) {
        var t = e.DomainData;
        I.iabType = t.IabType, t = t.PCTemplateUpgrade, P = t ? Et : Ot, t = I.iabType, T = "IAB2" === t ? Vt : Bt, I.init(e), _.showGeneralVendors = L.GeneralVendorsEnabled && L.PCTemplateUpgrade, _.showVendorService = v.fp.CookieV2VendorServiceScript && L.VendorServiceConfig.PCVSEnable && !I.isIab2orv2Template && L.PCTemplateUpgrade, _.vsIsActiveAndOptOut = _.showVendorService && L.VendorServiceConfig.PCVSOptOut, _.showTrackingTech = v.fp.CookieV2TrackingTechPrefCenter && L.AdditionalTechnologiesConfig.PCShowTrackingTech, _.genVenOptOutEnabled = _.showGeneralVendors && L.GenVenOptOut, y.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
    }, o.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        L.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }, o.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = L.GlobalRestrictions,
            i = L.OverriddenVendors;
        switch (L.Publisher.restrictions[o] || (L.Publisher.restrictions[o] = {}), i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
            case ue.Disabled:
                (n ? i[t].disabledCP : i[t].disabledLIP).push(o), L.Publisher.restrictions[o][t] = ue.Disabled;
                break;
            case ue.Consent:
                n ? (i[t].consent = !0, L.Publisher.restrictions[o][t] = ue.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                break;
            case ue.LegInt:
                n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, L.Publisher.restrictions[o][t] = ue.LegInt);
                break;
            case void 0:
                n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }, o.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? L.OverriddenVendors[t].legInt = !0 : L.OverriddenVendors[t].consent = !0, L.Publisher.restrictions[o][t] = n ? ue.LegInt : ue.Consent) : L.Publisher.restrictions[o][t] = ue.Disabled
    }, o.prototype.getActivePurposesForVendor = function(e, t) {
        var o = L.OverriddenVendors[t] && L.OverriddenVendors[t].disabledCP,
            n = L.OverriddenVendors[t] && L.OverriddenVendors[t].disabledLIP,
            o = o ? this.removeElementsFromArray(e.purposes, L.OverriddenVendors[t].disabledCP) || [] : e.purposes || [],
            n = n ? this.removeElementsFromArray(e.legIntPurposes, L.OverriddenVendors[t].disabledLIP) || [] : e.legIntPurposes || [],
            t = M(o, n, e.flexiblePurposes || []);
        return new Set(t)
    }, o.prototype.canInferGCMSettingsFromTCString = function() {
        return I.isTcfV2Template && L.GoogleConsent.GCEnable
    }, o.prototype.shouldOverrideTCData = function() {
        var e = this.canInferGCMSettingsFromTCString();
        return L.UseGoogleVendors || e
    }, o.prototype.setActiveVendorCount = function(e, t) {
        var o, n;
        "IAB2V2" === I.getRegionRuleType() && (o = new Set, n = I.tcf2ActiveVendors, this.getActivePurposesForVendor(e, t).forEach(function(e) {
            var t = n.pur.get(e) || 0;
            n.pur.set(e, t + 1), I.tcfParentMap.pur.get(e) && o.add(I.tcfParentMap.pur.get(e))
        }), e.specialPurposes && e.specialPurposes.forEach(function(e) {
            var t = n.spl_pur.get(e) || 0;
            n.spl_pur.set(e, t + 1), I.tcfParentMap.spl_pur.get(e) && o.add(I.tcfParentMap.spl_pur.get(e))
        }), e.features && e.features.forEach(function(e) {
            var t = n.ft.get(e) || 0;
            n.ft.set(e, t + 1), I.tcfParentMap.ft.get(e) && o.add(I.tcfParentMap.ft.get(e))
        }), e.specialFeatures && e.specialFeatures.forEach(function(e) {
            var t = n.spl_ft.get(e) || 0;
            n.spl_ft.set(e, t + 1), I.tcfParentMap.spl_ft.get(e) && o.add(I.tcfParentMap.spl_ft.get(e))
        }), o.forEach(function(e) {
            var t = n.stack.get(e) || 0;
            n.stack.set(e, t + 1)
        }))
    }, o.prototype.isVendorInvalid = function(e, t) {
        var o = !1,
            n = !e.purposes.length && !e.flexiblePurposes.length,
            r = (L.OverriddenVendors[t] && !L.OverriddenVendors[t].consent && (n = !0), !0);
        return I.legIntSettings.PAllowLI && e.legIntPurposes.length && (!L.OverriddenVendors[t] || L.OverriddenVendors[t].legInt) && (r = !1), o = !n || !r || e.specialPurposes.length || e.features.length || e.specialFeatures.length ? o : !0
    }, o.prototype.removeInActiveVendorsForTcf = function(r) {
        var i = this,
            s = _.iabData.vendorListVersion,
            e = L.Publisher,
            a = L.GlobalRestrictionEnabled;
        0 !== Object.keys(e).length && e && Object.keys(e.restrictions).length;
        Object.keys(r.vendors).forEach(function(t) {
            var o = r.vendors[t],
                e = !1,
                n = i.getVendorGVLVersion(o),
                n = (s < n && (L.NewVendorsInactiveEnabled ? (i.initializeVendorInOverriddenVendors(t, !1), e = !0) : a && (o.purposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                }))), L.OverriddenVendors[t] && !L.OverriddenVendors[t].active && (e = !0), -1 < L.Vendors.indexOf(Number(t)) && (e = !0), i.isVendorInvalid(o, t));
            (e = e || n) && delete r.vendors[t], e || i.setActiveVendorCount(o, t)
        })
    }, o.prototype.getVendorGVLVersion = function(e) {
        return I.isTcfV2Template ? e.iab2V2GVLVersion : e.iab2GVLVersion
    }, o.prototype.removeElementsFromArray = function(e, t) {
        return e.filter(function(e) {
            return !t.includes(e)
        })
    }, o.prototype.setPublisherRestrictions = function() {
        var i, t, s, a, e = L.Publisher;
        e && e.restrictions && (i = this.iabStringSDK(), t = e.restrictions, s = _.iabData, a = _.oneTrustIABConsent.vendorList.vendors, Object.keys(t).forEach(function(o) {
            var n, r = t[o],
                e = I.iabGroups.purposes[o];
            e && (n = {
                description: e.description,
                purposeId: e.id,
                purposeName: e.name
            }), Object.keys(r).forEach(function(e) {
                var t;
                _.vendorsSetting[e] && (t = _.vendorsSetting[e].arrIndex, 1 === r[e] && -1 === a[e].purposes.indexOf(Number(o)) ? s.vendors[t].purposes.push(n) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(o)) && s.vendors[t].legIntPurposes.push(n), t = i.purposeRestriction(Number(o), r[e]), _.tcModel.publisherRestrictions.add(Number(e), t))
            })
        }))
    }, o.prototype.populateVendorListTCF = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.iabStringSDK(), o = _.iabData, n = y.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), y.checkMobileOfflineRequest(y.getBannerVersionUrl())) ? [3, 1] : (I.mobileOnlineURL.push(n), i = t.gvl(n, _.gvlObj), [3, 3]);
                    case 1:
                        return a = (s = t).gvl, l = [null], [4, y.otFetchOfflineFile(b.getRelativeURL(n, !0))];
                    case 2:
                        i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                    case 3:
                        return e.trys.push([3, 5, , 6]), [4, i.changeLanguage(_.consentLanguage)];
                    case 4:
                        return e.sent(), [3, 6];
                    case 5:
                        return e.sent(), [3, 6];
                    case 6:
                        return this.removeInActiveVendorsForTcf(i), I.tcf2ActiveVendors.all = Object.keys(i.vendors).length, _.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = _, [4, t.tcModel(i)];
                    case 7:
                        c.tcModel = e.sent(), r && this.setPublisherRestrictions(), _.tcModel.cmpId = parseInt(o.cmpId), I.isTcfV2Template && (_.tcModel.useNonStandardTexts = L.UseNonStandardStacks), _.tcModel.cmpVersion = parseInt(o.cmpVersion);
                        try {
                            _.tcModel.consentLanguage = _.consentLanguage
                        } catch (e) {
                            _.tcModel.consentLanguage = "EN"
                        }
                        return _.tcModel.consentScreen = parseInt(o.consentScreen), _.tcModel.isServiceSpecific = r, _.tcModel.purposeOneTreatment = I.purposeOneTreatment, L.PublisherCC ? _.tcModel.publisherCountryCode = L.PublisherCC : _.userLocation.country && (_.tcModel.publisherCountryCode = _.userLocation.country), _.cmpApi = t.cmpApi(_.tcModel.cmpId, _.tcModel.cmpVersion, r, this.shouldOverrideTCData() ? {
                            getTCData: this.overrideTCData,
                            getInAppTCData: this.overrideTCData
                        } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                }
            })
        })
    }, o.prototype.resetTCModel = function() {
        var e, t, o = this.iabStringSDK(),
            n = _.tcModel.clone();
        n.unsetAll(), I.legIntSettings.PAllowLI && (e = I.consentableIabGrps.filter(function(e) {
            return e.HasLegIntOptOut && e.Type === T.GroupTypes.Pur
        }).map(function(e) {
            return parseInt(I.iabGrpIdMap[e.CustomGroupId])
        }), t = Object.keys(_.vendorsSetting).filter(function(e) {
            return _.vendorsSetting[e].legInt
        }).map(function(e) {
            return parseInt(e)
        }), n.purposeLegitimateInterests.set(e), n.vendorLegitimateInterests.set(t), n.isServiceSpecific) && n.publisherLegitimateInterests.set(e), _.cmpApi.update(o.tcString().encode(n), !0)
    }, o.prototype.overrideTCData = function(e, t, o) {
        var n = h.canInferGCMSettingsFromTCString();
        t && t.tcString && (L.UseGoogleVendors && (t.addtlConsent = "" + _.addtlConsentVersion + (_.isAddtlConsent ? _.addtlVendors.vendorConsent.join(".") : "")), n) && (t.enableAdvertiserConsentMode = !0), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }, o.prototype.setIabData = function() {
        _.iabData = I.isTcfV2Template ? v.moduleInitializer.Iab2V2Data : v.moduleInitializer.IabV2Data, _.iabData.consentLanguage = _.consentLanguage
    }, o.prototype.assignIABDataWithGlobalVendorList = function(r) {
        var i = this,
            s = L.OverriddenVendors,
            a = (_.iabData.vendorListVersion = r.vendorListVersion, _.iabData.vendors = [], L.IABDataCategories);
        Object.keys(r.vendors).forEach(function(n) {
            _.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {},
                t = r.vendors[n],
                o = (e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, i.setIAB2VendorData(t, e), e.cookieMaxAge = b.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length);
            I.legIntSettings.PAllowLI && !i.vendorShouldNotHaveLegInt(s, t, n) || (_.vendorsSetting[n].legInt = !1), I.legIntSettings.PAllowLI && o && (_.vendorsSetting[n].specialPurposesOnly = !0), (!s[n] || s[n].consent) && (s[n] || t.purposes.length || t.flexiblePurposes.length) && (t.purposes.length || t.flexiblePurposes.length) || (_.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                var t, e = I.iabGroups.features[e];
                return t = e ? {
                    description: e.description,
                    featureId: e.id,
                    featureName: e.name
                } : t
            }), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                t = I.iabGroups.specialFeatures[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }), e
            }, []), i.mapDataDeclarationForVendor(r.vendors[n], e, a), i.mapDataRetentionForVendor(r.vendors[n], e), e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                var o = I.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledCP && -1 !== s[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = I.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledLIP && -1 !== s[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                var t, e = I.iabGroups.specialPurposes[e];
                return t = e ? {
                    description: e.description,
                    purposeId: e.id,
                    purposeName: e.name
                } : t
            }), _.iabData.vendors.push(e), _.vendorsSetting[n].arrIndex = _.iabData.vendors.length - 1
        })
    }, o.prototype.mapDataDeclarationForVendor = function(e, t, n) {
        var o;
        I.isTcfV2Template && null != (o = e.dataDeclaration) && o.length && (t.dataDeclaration = e.dataDeclaration.reduce(function(e, t) {
            var o = n.find(function(e) {
                return e.Id === t
            });
            return o && e.push({
                Description: o.Description,
                Id: o.Id,
                Name: o.Name
            }), e
        }, []))
    }, o.prototype.mapDataRetentionForVendor = function(o, n) {
        var e;
        n.dataRetention = {}, I.isTcfV2Template && o.dataRetention && (null !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && void 0 !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && (n.dataRetention = {
            stdRetention: o.dataRetention.stdRetention
        }), Object.keys(null == (e = o.dataRetention) ? void 0 : e.purposes).length && (n.dataRetention.purposes = JSON.parse(JSON.stringify(o.dataRetention.purposes)), Object.keys(o.dataRetention.purposes).forEach(function(e) {
            var t = I.iabGroups.purposes[e];
            t && (n.dataRetention.purposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.purposes[e]
            })
        })), Object.keys(null == (e = o.dataRetention) ? void 0 : e.specialPurposes).length) && (n.dataRetention.specialPurposes = JSON.parse(JSON.stringify(o.dataRetention.specialPurposes)), Object.keys(o.dataRetention.specialPurposes).forEach(function(e) {
            var t = I.iabGroups.specialPurposes[e];
            t && (n.dataRetention.specialPurposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.specialPurposes[e]
            })
        }))
    }, o.prototype.vendorShouldNotHaveLegInt = function(e, t, o) {
        var n = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
        return (e[o] && !e[o].legInt || !e[o] && !t.legIntPurposes.length) && !n
    }, o.prototype.setIAB2VendorData = function(e, t) {
        var o, n, r;
        I.isTcfV2Template && (n = _.lang, r = (r = e.urls.find(function(e) {
            return e.langId === n
        })) || e.urls[0], t.vendorPrivacyUrl = (null == (o = r) ? void 0 : o.privacy) || "", t.legIntClaim = (null == (o = r) ? void 0 : o.legIntClaim) || "", null != (r = e.dataDeclaration) && r.length && (t.dataDeclaration = e.dataDeclaration), e.DataRetention) && (t.DataRetention = e.DataRetention)
    }, o.prototype.populateIABCookies = function() {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (!this.isIABCrossConsentEnabled()) return [3, 5];
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(S.EU_CONSENT, "", 0, !0)];
                    case 2:
                        return e.sent(), [3, 4];
                    case 3:
                        return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        h.needReconsent() || this.setIABCookieData(), e.label = 6;
                    case 6:
                        return [2]
                }
            })
        })
    }, o.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = L.iabThirdPartyConsentUrl;
        try {
            if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }, o.prototype.setIABCookieData = function() {
        _.oneTrustIABConsent.IABCookieValue = k.getCookie(S.EU_PUB_CONSENT)
    }, o.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (d(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                    o.onload = function() {
                        I.thirdPartyiFrameResolve(), I.thirdPartyiFrameLoaded = !0, e()
                    }, o.onerror = function() {
                        throw I.thirdPartyiFrameResolve(), I.thirdPartyiFrameLoaded = !0, e(), new URIError
                    }
                })])
            })
        })
    }, o.prototype.setIABVendor = function(o, n) {
        var t;
        void 0 === o && (o = !0), void 0 === n && (n = !1), _.iabData.vendors.forEach(function(e) {
            var t, e = e.vendorId;
            I.legIntSettings.PAllowLI ? (t = void 0, t = (n || !!_.vendorsSetting[e].consent) && o, _.oneTrustIABConsent.vendors.push(e.toString() + ":" + t), _.oneTrustIABConsent.legIntVendors.push(e.toString() + ":" + _.vendorsSetting[e].legInt)) : (_.oneTrustIABConsent.legIntVendors = [], _.oneTrustIABConsent.vendors.push(e.toString() + ":" + o))
        }), L.UseGoogleVendors && (t = _.addtlVendors, Object.keys(_.addtlVendorsList).forEach(function(e) {
            o && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
        }))
    }, o.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        L.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(L.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }, o.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }, o.prototype.getIABCrossConsentflagData = function() {
        return k.readCookieParam(S.OPTANON_CONSENT, p.IS_IAB_GLOBAL)
    }, o.prototype.setGeolocationInCookies = function() {
        var e, t = k.readCookieParam(S.OPTANON_CONSENT, p.GEO_LOCATION);
        _.userLocation && !t && this.isAlertBoxClosedAndValid() ? (e = _.userLocation.country + ";" + _.userLocation.state, this.setUpdateGeolocationCookiesData(e)) : this.reconsentRequired() && t && this.setUpdateGeolocationCookiesData("")
    }, o.prototype.iabStringSDK = function() {
        var e = v.moduleInitializer.otIABModuleData;
        if (L.IsIabEnabled && e) return {
            gvl: e.tcfSdkRef.gvl,
            tcModel: e.tcfSdkRef.tcModel,
            tcString: e.tcfSdkRef.tcString,
            cmpApi: e.tcfSdkRef.cmpApi,
            purposeRestriction: e.tcfSdkRef.purposeRestriction
        }
    }, o.prototype.setUpdateGeolocationCookiesData = function(e) {
        k.writeCookieParam(S.OPTANON_CONSENT, p.GEO_LOCATION, e)
    }, o.prototype.reconsentRequired = function() {
        return (v.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }, o.prototype.awaitingReconsent = function() {
        return "true" === k.readCookieParam(S.OPTANON_CONSENT, p.AWAITING_RE_CONSENT)
    }, o.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate(),
            t = L.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }, o.prototype.updateCrossConsentCookie = function(e) {
        k.writeCookieParam(S.OPTANON_CONSENT, p.IS_IAB_GLOBAL, e)
    }, o.prototype.alertBoxCloseDate = function() {
        return k.getCookie(S.ALERT_BOX_CLOSED)
    }, o.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }, o.prototype.generateLegIntButtonElements = function(e, t, o) {
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + (o = void 0 === o ? !1 : o) + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + L.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? I.legIntSettings.PObjectLegIntText : I.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + L.pcButtonColor + "; " + (e ? "display:none;" : "") + '"\n                    >\n                        ' + I.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }, o.prototype.syncAlertBoxCookie = function(e) {
        var t = L.ReconsentFrequencyDays;
        k.setCookie(S.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }, o.prototype.syncCookieExpiry = function() {
        var e, t, o;
        _.syncRequired && (e = L.ReconsentFrequencyDays, t = k.getCookie(S.ALERT_BOX_CLOSED), o = k.getCookie(S.OPTANON_CONSENT), k.setCookie(S.OPTANON_CONSENT, o, e, !1, new Date(t)), h.needReconsent() && k.removeAlertBox(), (o = k.getCookie(S.EU_PUB_CONSENT)) && (h.isIABCrossConsentEnabled() ? k.removeIab2() : k.setCookie(S.EU_PUB_CONSENT, o, e, !1, new Date(t))), o = k.getCookie(S.ADDITIONAL_CONSENT_STRING)) && k.setCookie(S.ADDITIONAL_CONSENT_STRING, o, e, !1, new Date(t))
    }, o.prototype.syncOtPreviewCookie = function() {
        var e = k.getCookie(S.OT_PREVIEW);
        e && k.setCookie(S.OT_PREVIEW, e, 1, !1)
    }, o.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied", {
            OTConsentApplied: "yes"
        }))
    };
    var E, h = new o,
        jt = function() {};
    Xt.prototype.isAlwaysActiveGroup = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE)
    }, Xt.prototype.getGrpStatus = function(e) {
        return e && e.Status ? I.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status : ""
    }, Xt.prototype.getParentGroup = function(t) {
        var e;
        return t && 0 < (e = L.Groups.filter(function(e) {
            return e.OptanonGroupId === t
        })).length ? e[0] : null
    }, Xt.prototype.checkIfGroupHasConsent = function(t) {
        var e = _.groupsConsent,
            o = b.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Xt.prototype.checkIsActiveByDefault = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE) || t === m.INACTIVE_LANDING_PAGE || t === m.ACTIVE || t === m.DNT && !I.DNTEnabled
    }, Xt.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = L.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = M(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, Xt.prototype.isSoftOptInGrp = function(e) {
        return !!e && (e = e && !e.Parent ? e : C.getParentGroup(e.Parent), "inactive landingpage" === C.getGrpStatus(e).toLowerCase())
    }, Xt.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === C.getGrpStatus(e).toLowerCase()
    }, Xt.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, Xt.prototype.getVSById = function(e) {
        return _.getVendorsInDomain().get(e)
    }, Xt.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return t = _.getVendorsInDomain().has(e) ? _.getVendorsInDomain().get(e).groupRef : t
    };
    var C, zt, Kt, Wt, Jt, Yt = Xt;

    function Xt() {}(s = zt = zt || {}).SaleOptOut = "SaleOptOutCID", s.SharingOptOut = "SharingOptOutCID", s.PersonalDataConsents = "PersonalDataCID", (s = Kt = Kt || {}).SharingOptOutNotice = "SharingOptOutCID", s.SaleOptOutNotice = "SaleOptOutCID", s.SensitiveDataLimitUseNotice = "SensitivePICID || SensitiveSICID || GeolocationCID || RREPInfoCID || CommunicationCID || GeneticCID|| BiometricCID || HealthCID || SexualOrientationCID", (s = Wt = Wt || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID", s.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID", (s = Jt = Jt || {}).SensitiveDataProcessing1 = "SensitivePICID", s.SensitiveDataProcessing2 = "SensitiveSICID", s.SensitiveDataProcessing3 = "GeolocationCID", s.SensitiveDataProcessing4 = "RREPInfoCID", s.SensitiveDataProcessing5 = "CommunicationCID", s.SensitiveDataProcessing6 = "GeneticCID", s.SensitiveDataProcessing7 = "BiometricCID", s.SensitiveDataProcessing8 = "HealthCID", s.SensitiveDataProcessing9 = "SexualOrientationCID";
    $t.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", v.moduleInitializer.CookieV2CSPEnabled && _.nonce && e.setAttribute("nonce", _.nonce)), G.commonStyles && (t += G.commonStyles), G.bannerGroup && (t += G.bannerGroup.css, v.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), L.bannerCustomCSS) && (t += L.bannerCustomCSS), G.preferenceCenterGroup && (t = (t += G.preferenceCenterGroup.css) + this.addCustomPreferenceCenterCSS()), G.cookieListGroup && !v.fp.CookieV2TrackingTechnologies && (t = (t += G.cookieListGroup.css) + this.addCustomCookieListCSS()), L.cookiePersistentLogo && !L.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + y.updateCorrectUrl(L.cookiePersistentLogo) + "')}"), this.processedCSS = t, I.ignoreInjectingHtmlCss || (e.textContent = t, A(document.head).append(e))
    }, $t.prototype.setButonColor = function() {
        var e, t = L.pcButtonColor,
            o = L.pcButtonTextColor,
            n = L.pcLegIntButtonColor,
            r = L.pcLegIntButtonTextColor,
            i = "";
        return (t || o) && (e = I.pcName === nt ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + P.P_Li_Hdr + "{\n                    border-color: " + t + ";\n                }" : "", i = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (o ? "color: " + o + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + P.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + e + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (n ? "background-color: " + n + ";" : "") + "\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n            }"), i
    }, $t.prototype.setFocusBorderColor = function() {
        var e = "",
            t = L.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"), e
    }, $t.prototype.setCloseIconColor = function() {
        var e = "";
        return L.PCCloseButtonType === ke.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + L.PCContinueColor + "}"), e
    }, $t.prototype.setTabLayoutStyles = function() {
        var e = "",
            t = L.pcMenuColor,
            o = L.pcMenuHighLightColor;
        return I.pcName === st && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"), o) && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + P.P_Active_Menu + " {\n                    background-color: " + o + "\n                }"), e
    }, $t.prototype.setFocusIfTemplateUpgrade = function() {
        var e = "",
            t = L.PCFocusBorderColor;
        return !L.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"), e
    }, $t.prototype.setExtLnkUrl = function() {
        var e = "",
            t = y.updateCorrectUrl(L.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,  #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk{\n                    background-image: url('" + t + "');\n                }\n            "), e
    }, $t.prototype.setCustomCss = function() {
        var e = "";
        return L.pcCustomCSS && (e += L.pcCustomCSS), e
    };
    var Qt, Zt = $t;

    function $t() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = L.backgroundColor,
                t = L.buttonColor,
                o = L.textColor,
                n = L.buttonTextColor,
                r = L.bannerMPButtonColor,
                i = L.bannerMPButtonTextColor,
                s = L.bannerAccordionBackgroundColor,
                a = L.BSaveBtnColor,
                l = L.BCategoryContainerColor,
                c = L.BLineBreakColor,
                d = L.BCategoryStyleColor,
                u = L.bannerLinksTextColor,
                p = L.BFocusBorderColor,
                o = "\n        " + (I.bannerName === Qe ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            return (t || n) && (o += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p && (o += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) && (o += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !L.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), I.bannerName === et && (r = i = t = u = s = void 0, d && (i = "background-color: " + d + ";", r = "border-color: " + d + ";"), p && (o += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), o += "#onetrust-banner-sdk .ot-bnr-save-handler {" + (s = a ? "color: " + n + ";border-color: " + n + ";background-color: " + a + ";" : s) + "}#onetrust-banner-sdk .ot-cat-lst {" + (u = l ? "background-color: " + l + ";" : u) + "}#onetrust-banner-sdk .ot-cat-bdr {" + (t = c ? "border-color: " + c + ";" : t) + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + i + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + r + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"), L.BCloseButtonType === ke.Link && (o += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + L.BContinueColor + "}"), o
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = L.pcBackgroundColor,
                t = L.pcTextColor,
                o = L.pcLinksTextColor,
                n = L.PCenterEnableAccordion,
                r = L.pcAccordionBackgroundColor,
                e = "\n            " + (e ? (I.pcName === nt ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + P.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + P.P_Search_Cntr + ",\n                " + (n && I.pcName === nt ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + P.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Title + ":after\n                " + (v.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_Container + " " + P.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Ven_Leg_Claim + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Acc_Header + " " + P.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Content + " " + P.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Container + P.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " " + P.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + ",\n                    " + (v.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " " + P.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return (e += Qt.setButonColor()) + Qt.setFocusBorderColor() + Qt.setCloseIconColor() + Qt.setTabLayoutStyles() + Qt.setTabLayoutStyles() + Qt.setFocusIfTemplateUpgrade() + Qt.setExtLnkUrl() + Qt.setCustomCss()
        }, this.addCustomCookieListCSS = function() {
            var e = L.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                e = "\n                " + (L.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + L.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (L.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + L.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (L.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + L.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (L.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + L.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && L.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + L.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return L.cookieListCustomCss && (e += L.cookieListCustomCss), e
        }
    }
    oo.prototype.getAllowAllButton = function() {
        return A("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, oo.prototype.getSelectedVendors = function() {
        return A("#onetrust-pc-sdk " + P.P_Tgl_Cntr + " .ot-checkbox input:checked")
    };
    var eo, to = oo;

    function oo() {}
    io.prototype.isIabCookieValid = function() {
        var e = null;
        return null !== (e = I.isIab2orv2Template ? k.getCookie("eupubconsent-v2") : e)
    }, io.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (k.removeAlertBox(), k.removeIab1())
    }, io.prototype.initializeIABModule = function() {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return L.IsIabEnabled ? (v.moduleInitializer.otIABModuleData = window.otIabModule, h.setIabData(), [4, h.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), h.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), h.populateIABCookies(), L.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        k.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, io.prototype.removeInActiveAddtlVendors = function() {
        var e, t = L.OverridenGoogleVendors;
        for (e in _.addtlVendorsList) t && t[e] && !t[e].active && delete _.addtlVendorsList[e]
    }, io.prototype.getIABConsentData = function() {
        var e = _.oneTrustIABConsent,
            t = h.iabStringSDK().tcString(),
            o = (_.tcModel.unsetAllPurposeConsents(), _.tcModel.unsetAllVendorConsents(), _.tcModel.unsetAllVendorLegitimateInterests(), _.tcModel.unsetAllSpecialFeatureOptins(), _.tcModel.unsetAllPurposeLegitimateInterests(), _.tcModel.publisherConsents.empty(), _.tcModel.publisherLegitimateInterests.empty(), _.tcModel.purposeConsents.set(b.getActiveIdArray(e.purpose)), _.tcModel.publisherConsents.set(b.getActiveIdArray(e.purpose)), I.legIntSettings.PAllowLI ? b.getActiveIdArray(e.legimateInterest) : []),
            o = (_.tcModel.purposeLegitimateInterests.set(o), _.tcModel.publisherLegitimateInterests.set(o), _.tcModel.vendorConsents.set(b.getActiveIdArray(b.distinctArray(e.vendors))), I.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), _.tcModel.vendorLegitimateInterests.set(b.getActiveIdArray(b.distinctArray(e.legIntVendors))), _.tcModel.specialFeatureOptins.set(b.getActiveIdArray(e.specialFeatures)), new Date),
            e = new Date(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), 0, 0, 0),
            o = (_.tcModel.lastUpdated = e, _.tcModel.created = e, t.encode(_.tcModel));
        return _.cmpApi.update(o, !1), o
    }, io.prototype.decodeTCString = function(e) {
        return h.iabStringSDK().tcString().decode(e)
    }, io.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, io.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, io.prototype.populateVendorAndPurposeFromCookieData = function() {
        var n = _.oneTrustIABConsent,
            e = no.decodeTCString(n.IABCookieValue),
            t = T.GroupTypes,
            r = {},
            i = {},
            s = (I.iabGrps.forEach(function(e) {
                e.Type === t.Pur ? r[I.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === t.Spl_Ft && (i[I.iabGrpIdMap[e.CustomGroupId]] = e)
            }), []);
        this.syncVendorConsent(e), s = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            _.vendorsSetting[t] && _.vendorsSetting[t].legInt || !e || (s.push(t), o = !1), n.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(s), s = [], e.purposeConsents.forEach(function(e, o) {
            var t = e,
                e = (!(r[o] && r[o].HasConsentOptOut) && e && (s.push(o), t = !1), b.findIndex(n.purpose, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.purpose.push(o + ":" + t) : n.purpose[e] = o + ":" + t
        }), e.purposeConsents.unset(s), e.publisherConsents.unset(s), s = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e,
                e = (!(i[o] && i[o].HasConsentOptOut) && e && (s.push(o), t = !1), b.findIndex(n.specialFeatures, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.specialFeatures.push(o + ":" + t) : n.specialFeatures[e] = o + ":" + t
        }), e.specialFeatureOptins.unset(s), this.syncPurAndPubLegInt(e, r), this.syncBundleAndStack(), e.gvl = _.tcModel.gvl, e.isServiceSpecific = !h.isIABCrossConsentEnabled(), _.tcModel = e, h.isAlertBoxClosedAndValid() ? _.cmpApi.update(n.IABCookieValue, !1) : h.resetTCModel()
    }, io.prototype.syncVendorConsent = function(e) {
        var n = [],
            r = _.oneTrustIABConsent;
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            _.vendorsSetting[t] && _.vendorsSetting[t].consent || !e || (n.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(n)
    }, io.prototype.syncPurAndPubLegInt = function(e, n) {
        var r = [],
            i = _.oneTrustIABConsent;
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e,
                e = (!(n[o] && n[o].HasLegIntOptOut && I.legIntSettings.PAllowLI) && e && (r.push(o), t = !1), b.findIndex(i.legimateInterest, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? i.legimateInterest.push(o + ":" + t) : i.legimateInterest[e] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(r), e.publisherLegitimateInterests.unset(r)
    }, io.prototype.syncBundleAndStack = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            n = (_.groupsConsent = b.strToArr(e), T.GroupTypes);
        L.Groups.forEach(function(t) {
            var e, o;
            t.Type !== n.Bundle && t.Type !== n.Stack || (o = y.isBundleOrStackActive(t), e = b.findIndex(_.groupsConsent, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            }), o = t.CustomGroupId + ":" + Number(o), -1 < e ? _.groupsConsent[e] = o : _.groupsConsent.push(o))
        }), k.writeCookieParam(S.OPTANON_CONSENT, "groups", _.groupsConsent.join(","))
    }, io.prototype.populateGoogleConsent = function() {
        var e;
        L.UseGoogleVendors && (e = k.getCookie(S.ADDITIONAL_CONSENT_STRING)) && (_.isAddtlConsent = !0, _.addtlVendors.vendorConsent = e.replace(_.addtlConsentVersion, "").split("."))
    }, io.prototype.isInitIABCookieData = function(e) {
        return "init" === e || h.needReconsent()
    }, io.prototype.updateFromGlobalConsent = function(e) {
        var t = _.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], no.populateVendorAndPurposeFromCookieData(), k.setCookie(S.EU_PUB_CONSENT, "", -1)
    };
    var no, ro = io;

    function io() {}
    ao.prototype.loadBanner = function() {
        v.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? A(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            A(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? A(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            A(window).trigger("otloadbanner")
        }), I.pubDomainData.IsBannerLoaded = !0
    }, ao.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        g.consentChangedEventMap[t] || (g.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, ao.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        v.moduleInitializer.GATrackToggle && ("AS" === v.moduleInitializer.GATrackAssignedCategory || "" === v.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + v.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !I.ignoreGoogleAnlyticsCall && r && (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n), r = window[I.otDataLayer.name], !I.otDataLayer.ignore) && void 0 !== r && r && r.constructor === Array && ("function" == typeof window.gtag ? window.gtag("event", "trackOptanonEvent", {
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }) : r.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }))
    }, ao.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString(),
            e = (e ? k.setCookie(S.ALERT_BOX_CLOSED, t, L.ReconsentFrequencyDays) : k.setCookie(S.ALERT_BOX_CLOSED, t, 0), A(".onetrust-pc-dark-filter").el[0]);
        e && "none" !== getComputedStyle(e).getPropertyValue("display") && A(".onetrust-pc-dark-filter").fadeOut(400)
    }, ao.prototype.updateConsentFromCookie = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                return t ? (no.isInitIABCookieData(t) || no.updateFromGlobalConsent(t), "init" === t && (k.removeIab1(), h.isAlertBoxClosedAndValid() && h.resetTCModel(), k.removeAlertBox())) : (h.resetTCModel(), h.updateCrossConsentCookie(!1), h.setIABCookieData()), g.assetPromise.then(function() {
                    g.loadBanner()
                }), [2]
            })
        })
    };
    var g, so = ao;

    function ao() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var lo, co = "groups",
        uo = "hosts",
        po = "genVendors",
        ho = "vs",
        go = (Co.prototype.writeHstParam = function(e, t) {
            k.writeCookieParam(e, "hosts", b.arrToStr((t = void 0 === t ? null : t) || _.hostsConsent))
        }, Co.prototype.writeGenVenCookieParam = function(e) {
            var t = L.GeneralVendors,
                o = _.genVendorsConsent,
                n = "";
            t.forEach(function(e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), k.writeCookieParam(e, "genVendors", n)
        }, Co.prototype.writeVSConsentCookieParam = function(e) {
            var o = "";
            _.vsConsent.forEach(function(e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), k.writeCookieParam(e, ho, o)
        }, Co.prototype.updateGroupsInCookie = function(e, t) {
            k.writeCookieParam(e, "groups", b.arrToStr((t = void 0 === t ? null : t) || _.groupsConsent))
        }, Co.prototype.writeGrpParam = function(e, t) {
            this.updateGroupsInCookie(e, t = void 0 === t ? null : t), L.IsIabEnabled && h.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, Co.prototype.insertOrUpdateIabCookies = function() {
            var e, t = _.oneTrustIABConsent;
            t.purpose && t.vendors && (_.isAddtlConsent = L.UseGoogleVendors, t.IABCookieValue = no.getIABConsentData(), e = L.ReconsentFrequencyDays, h.isIABCrossConsentEnabled() ? h.setIAB3rdPartyCookie(S.EU_CONSENT, t.IABCookieValue, e, !1) : (k.setCookie(S.EU_PUB_CONSENT, t.IABCookieValue, e), L.UseGoogleVendors && k.setCookie(S.ADDITIONAL_CONSENT_STRING, "" + _.addtlConsentVersion + _.addtlVendors.vendorConsent.join("."), e)))
        }, Co);

    function Co() {}
    mo.prototype.initGenVendorConsent = function() {
        var e, t, n = this;
        L.GenVenOptOut ? (e = I.consentableGrps, (t = k.readCookieParam(S.OPTANON_CONSENT, "genVendors")) ? (_.genVendorsConsent = {}, t.split(",").forEach(function(e) {
            e && "1" === (e = e.split(":"))[1] && (_.genVendorsConsent[e[0]] = !0)
        })) : (_.genVendorsConsent = {}, e.forEach(function(e) {
            var o = _.syncRequired ? C.checkIfGroupHasConsent(e) : C.checkIsActiveByDefault(e);
            e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                _.genVendorsConsent[e] = t || o
            })
        }))) : (_.genVendorsConsent = {}, lo.writeGenVenCookieParam(S.OPTANON_CONSENT))
    }, mo.prototype.populateGenVendorLists = function() {
        I.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (C.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                _.alwaysActiveGenVendors.push(e)
            }) : C.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                _.optInGenVendors.push(e)
            }) : C.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                _.optInGenVendors.includes(e) || _.softOptInGenVendors.push(e)
            }))
        })
    }, mo.prototype.updateGenVendorStatus = function(e, t) {
        _.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, mo.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return _.alwaysActiveGenVendors.includes(e)
    };
    var yo, fo = mo;

    function mo() {}
    ko.prototype.synchroniseCookieGroupData = function(e) {
        var t = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            n = b.strToArr(t),
            r = b.strToArr(t.replace(/:0|:1/g, "")),
            t = h.needReconsent(),
            i = !1,
            s = !1,
            a = T.GroupTypes;
        e.forEach(function(e) {
            var t, o = e.CustomGroupId;
            e.Type !== a.Bundle && e.Type !== a.Stack && (-1 === b.indexOf(r, o) ? (i = !0, t = C.checkIsActiveByDefault(e), s = !0, n.push(o + (t ? ":1" : ":0"))) : I.gpcEnabled && e.IsGpcEnabled && I.gpcValueChanged && -1 < (t = n.indexOf(o + ":1")) && (s = !0, _.gpcConsentTxn = !0, n[t] = o + ":0"))
        }), s = this.updateConsentForBundleGrps(e, n, r, s, t), (s = this.removeRedundantGrpsFromCookie(n, t, s)) && (_.fireOnetrustGrp = !0, lo.updateGroupsInCookie(S.OPTANON_CONSENT, n), _.syncRequired) && i && k.removeAlertBox()
    }, ko.prototype.removeRedundantGrpsFromCookie = function(e, o, t) {
        for (var n = e.length, r = t; n--;) ! function() {
            var t = e[n].replace(/:0|:1/g, "");
            L.Groups.some(function(e) {
                return (!o || e.Type !== T.GroupTypes.Stack) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                    return e.CustomGroupId === t
                }))
            }) || (r = !0, e.splice(n, 1))
        }();
        return r
    }, ko.prototype.updateConsentForBundleGrps = function(e, n, r, t, i) {
        var s = t,
            a = T.GroupTypes;
        return e.forEach(function(e) {
            var t = e.Type === a.Bundle || e.Type === a.Stack,
                o = e.CustomGroupId;
            t && (-1 === b.indexOf(r, o) ? (t = y.isBundleOrStackActive(e, n), s = !0, n.push(o + (t ? ":1" : ":0"))) : (i && "false" === h.getIABCrossConsentflagData() || I.gpcEnabled && I.gpcValueChanged || _.syncRequired) && (t = y.isBundleOrStackActive(e, n), -1 < (e = n.indexOf(o + ":" + (t ? "0" : "1")))) && (s = !0, n[e] = o + (t ? ":1" : ":0")))
        }), s
    }, ko.prototype.groupHasConsent = function(t) {
        var e = b.strToArr(k.readCookieParam(S.OPTANON_CONSENT, "groups")),
            o = b.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, ko.prototype.synchroniseCookieHostData = function() {
        for (var n = this, e = k.readCookieParam(S.OPTANON_CONSENT, "hosts"), r = b.strToArr(e), i = b.strToArr(e.replace(/:0|:1/g, "")), s = !1, o = (L.Groups.forEach(function(e) {
                M(e.SubGroups, [e]).forEach(function(o) {
                    o.Hosts.length && o.Hosts.forEach(function(e) {
                        var t; - 1 === b.indexOf(i, e.HostId) && (s = !0, t = _.syncRequired ? n.groupHasConsent(o) : C.checkIsActiveByDefault(o), r.push(e.HostId + (t ? ":1" : ":0")))
                    })
                })
            }), r.length); o--;) ! function() {
            var t = r[o].replace(/:0|:1/g, "");
            L.Groups.some(function(e) {
                return M(e.SubGroups, [e]).some(function(e) {
                    return e.Hosts.some(function(e) {
                        return e.HostId === t
                    })
                })
            }) || (s = !0, r.splice(o, 1))
        }();
        s && (_.fireOnetrustGrp = !0, lo.writeHstParam(S.OPTANON_CONSENT, r))
    }, ko.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, ko.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            yo.updateGenVendorStatus(e, t)
        })
    }, ko.prototype.updateHostStatus = function(t, e) {
        var o = b.findIndex(_.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        }); - 1 < o && (e = e || this.isHostPartOfAlwaysActiveGroup(t.HostId), _.hostsConsent[o] = t.HostId + ":" + (e ? "1" : "0"))
    }, ko.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return _.oneTrustAlwaysActiveHosts.includes(e)
    };
    var So, vo = ko;

    function ko() {}
    var bo, Po = "OneTrust Cookie Consent",
        To = "Banner Auto Close",
        Ao = "Banner Close Button",
        Io = "Banner - Continue without Accepting",
        Lo = "Banner - Confirm",
        _o = "Preferences Close Button",
        Eo = "Preference Center Opened From Banner",
        Oo = "Preference Center Opened From Button",
        Vo = "Preference Center Opened From Function",
        Bo = "Preferences Save Settings",
        wo = "Vendors List Opened From Function",
        Go = "Floating Cookie Settings Open Button",
        No = "Floating Cookie Settings Close Button",
        xo = "Preferences Toggle On",
        Do = "Preferences Toggle Off",
        Ho = "General Vendor Toggle On",
        Ro = "General Vendor Toggle Off",
        Fo = "Host Toggle On",
        Mo = "Host Toggle Off",
        qo = "Preferences Legitimate Interest Objection",
        Uo = "Preferences Legitimate Interest Remove Objection",
        jo = "IAB Vendor Toggle ON",
        zo = "IAB Vendor Toggle Off",
        Ko = "IAB Vendor Legitimate Interest Objection",
        Wo = "IAB Vendor Legitimate Interest Remove Objection",
        Jo = "Vendor Service Toggle On",
        Yo = "Vendor Service Toggle Off",
        Xo = (Qo.prototype.setBannerFocus = function() {
            var e = Array.prototype.slice.call(A("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
                t = Array.prototype.slice.call(A('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
                o = Array.prototype.slice.call(A("#onetrust-banner-sdk .ot-bnr-save-handler").el),
                n = Array.prototype.slice.call(A("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
                r = Array.prototype.concat.call(Array.prototype.slice.call(A("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(A("#onetrust-banner-sdk .ot-cat-lst button").el), e),
                r = Array.prototype.concat.call(t, r),
                i = Array.prototype.slice.call(A("#onetrust-banner-sdk .onetrust-close-btn-handler").el),
                e = (I.bannerName === Qe && (r = Array.prototype.concat.call(e, t)), Array.prototype.slice.call(A("#onetrust-banner-sdk #onetrust-accept-btn-handler").el)),
                t = Array.prototype.slice.call(A("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
                o = Array.prototype.concat.call(o, e, t, n),
                n = ((I.bannerName !== Ye || L.IsIabEnabled) && I.bannerName !== Je && I.bannerName !== $e || (o = Array.prototype.concat.call(n, t, e)), Array.prototype.slice.call(A("#onetrust-banner-sdk .ot-gv-list-handler").el));
            I.bannerName === et ? (r = Array.prototype.concat.call(n, r), o = Array.prototype.slice.call(A("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, n), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(A("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(A("#onetrust-banner-sdk .banner-option-input").el), o, Array.prototype.slice.call(A("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i), this.banner = A("#onetrust-banner-sdk").el[0], (L.BInitialFocus || L.BInitialFocusLinkAndButton || L.ForceConsent) && (L.BInitialFocus ? this.banner : this.bannerEl[0]).focus()
        }, Qo.prototype.handleBannerFocus = function(e, t) {
            var o = e.target,
                n = bo.bannerEl,
                r = n.indexOf(o),
                i = n.length - 1,
                s = null;
            if (this.handleBannerFocusBodyReset(t, r, i)) y.resetFocusToBody();
            else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
            else
                for (; !s;) {
                    var a = void 0;
                    0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
                }
            s && (e.preventDefault(), s.focus())
        }, Qo.prototype.handleBannerFocusBodyReset = function(e, t, o) {
            return !(L.ForceConsent || !L.BInitialFocus && !L.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
        }, Qo.prototype.handleInitialBannerFocus = function(e, t, o, n) {
            return e && L.ForceConsent ? n = t[o] : e || (n = t[0]), n
        }, Qo.prototype.setPCFocus = function(e) {
            if (e && !(e.length <= 0)) {
                for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
                this.setFirstAndLast(e);
                var o = L.ShowPreferenceCenterCloseButton,
                    n = o ? this.getElementForFocus(e, L.PCLayout.Popup ? 2 : 1, !0) : null,
                    r = {
                        preventScroll: !0
                    };
                this.firstItem ? (o ? n : this.firstItem).focus(r) : e[0].focus(), this.firstItem && A(this.firstItem).on("keydown", bo.firstItemHandler), this.lastItem && A(this.lastItem).on("keydown", bo.lastItemHandler)
            }
        }, Qo.prototype.setFirstAndLast = function(e) {
            this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
        }, Qo.prototype.setLastItem = function() {
            var e = this.getPCElements(),
                e = this.getElementForFocus(e, e.length - 1, !1);
            e !== this.lastItem && (A(this.lastItem).off("keydown", bo.lastItemHandler), this.lastItem = e, A(e).on("keydown", bo.lastItemHandler))
        }, Qo.prototype.getPCElements = function() {
            var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + P.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
            return _.pcLayer === ie.CookieList ? e += " ,#onetrust-pc-sdk " + P.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(A(e).el)
        }, Qo.prototype.getActiveTab = function() {
            return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
        }, Qo.prototype.getElementForFocus = function(e, t, o) {
            for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
            return n
        }, Qo.prototype.handleFocusTabLayoutExceptClosePC = function(e) {
            var t = "close-pc-btn-handler" === e.target.id && (13 === e.keyCode || 32 === e.keyCode || "Enter" === e.code || "Space" === e.code);
            L.PCLayout.Tab && _.pcLayer === ie.PrefCenterHome && !t && (t = bo.getActiveTab()) && (e.preventDefault(), t.focus())
        }, Qo.prototype.firstItemHandler = function(e) {
            var t = document.getElementById("onetrust-banner-sdk");
            9 === e.keyCode && e.shiftKey && bo.firstItem !== t ? (e.preventDefault(), bo.lastItem.focus()) : L.ShowPreferenceCenterCloseButton ? this.handleFocusTabLayoutExceptClosePC(e) : !L.PCLayout.Tab || _.pcLayer !== ie.PrefCenterHome || 37 !== e.keyCode && 39 !== e.keyCode || (t = bo.getActiveTab()) && A(t).on("keydown", bo.firstItemHandler)
        }, Qo.prototype.lastItemHandler = function(e) {
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), e = _.pcLayer === ie.VendorList || _.pcLayer === ie.CookieList, (L.PCLayout.Tab && _.isPCVisible && !L.ShowPreferenceCenterCloseButton && !e ? bo.getActiveTab() : bo.firstItem).focus())
        }, Qo);

    function Qo() {
        this.bannerEl = []
    }
    $o.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + P.P_Category_Grp + " " + P.P_Category_Item + ":not(.ot-vnd-item)")
    }, $o.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1);
        for (var r = (e = I.pcName === st && L.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && s || (b.setCheckedAttribute(null, r[i], o), r[i] && L.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? L.PCActiveText : L.PCInactiveText))
        }
        I.legIntSettings.PAllowLI && I.legIntSettings.PShowLegIntBtn && t.Type === T.GroupTypes.Pur && t.HasLegIntOptOut && !n && f.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, $o.prototype.toogleAllSubGrpElements = function(e, t) {
        var o;
        e.ShowSubgroup ? (o = e.CustomGroupId, o = this.getGroupElementByOptanonGroupId(o.toString()), f.toogleSubGroupElement(o, t, e.IsLegIntToggle)) : this.updateHiddenSubGroupData(e, t)
    }, $o.prototype.isSubGrpLegIntEnabled = function(e, t) {
        return I.legIntSettings.PAllowLI && I.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && t.ShowSubgroupToggle
    }, $o.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1);
        for (var r = (e = I.pcName === st && L.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll("li" + P.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = C.getGroupById(r[i].getAttribute("data-optanongroupid")),
                a = s.OptanonGroupId,
                l = C.getParentGroup(s.Parent),
                l = (this.isSubGrpLegIntEnabled(s, l) && o && f.updateLegIntBtnElement(r[i], t), o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']"),
                a = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + l);
            b.setCheckedAttribute(null, a, t), a && L.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? L.PCActiveText : L.PCInactiveText), n || (s.IsLegIntToggle = o, f.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, So.toggleGroupHosts(s, t), _.genVenOptOutEnabled && So.toggleGroupGenVendors(s, t))
        }
    }, $o.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === T.GroupTypes.Pur ? t ? Uo : qo : t ? xo : Do;
        g.triggerGoogleAnalyticsEvent(Po, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, $o.prototype.setInputID = function(e, t, o, n, r) {
        A(e).attr("id", t), A(e).attr("name", t), A(e).data("optanonGroupId", o), b.setCheckedAttribute(null, e, n), A(e).attr("aria-labelledby", r)
    }, $o.prototype.updateEnabledGroupData = function(e) {
        var t, o; - 1 < Pt.indexOf(e.Type) ? this.updateIabGroupData(e, !0) : (t = f.getGroupVariable(), -1 !== (o = b.indexOf(t, e.CustomGroupId + ":0")) && (t[o] = e.CustomGroupId + ":1"))
    }, $o.prototype.updateDisabledGroupData = function(e) {
        var t, o; - 1 < Pt.indexOf(e.Type) ? this.updateIabGroupData(e, !1) : e.Status !== m.ALWAYS_ACTIVE && (t = f.getGroupVariable(), -1 !== (o = b.indexOf(t, e.CustomGroupId + ":1"))) && (t[o] = e.CustomGroupId + ":0")
    }, $o.prototype.updateIabGroupData = function(e, t) {
        var o;
        e.Type === T.GroupTypes.Spl_Ft ? this.updateIabSpecialFeatureData(e.IabGrpId, t) : (o = e.IsLegIntToggle ? _.vendors.selectedLegInt : _.vendors.selectedPurpose, this.updateIabPurposeData(e.IabGrpId, t, o))
    }, $o.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return f.isGroupActive(e)
        })
    }, $o.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return f.IsGroupInActive(e)
        })
    }, $o.prototype.toggleGroupHtmlElement = function(e, t, o) {
        I.legIntSettings.PAllowLI && I.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && (e = document.querySelector("[data-el-id=" + t + "]")) && this.updateLegIntBtnElement(e, o);
        e = A("#ot-group-id-" + t).el[0];
        b.setCheckedAttribute(null, e, o), e && L.PCShowConsentLabels && (e.parentElement.querySelector(".ot-label-status").innerHTML = o ? L.PCActiveText : L.PCInactiveText)
    }, $o.prototype.updateLegIntBtnElement = function(e, t) {
        var o = I.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            e = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, d(e, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, $o.prototype.isGroupActive = function(e) {
        e = -1 < Pt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== wt.inArray(e.CustomGroupId + ":1", f.getGroupVariable());
        return e
    }, $o.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, $o.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o = null != e && void 0 !== e,
            n = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            r = _.groupsConsent.join(","),
            i = k.readCookieParam(S.OPTANON_CONSENT, "hosts"),
            s = _.hostsConsent.join(",");
        if (t) return !0;
        n === r && i === s || G.ensureHtmlGroupDataInitialised();
        var a = [];
        if (_.showGeneralVendors)
            for (var l = 0, c = Object.entries(_.genVendorsConsent); l < c.length; l++) {
                var d = c[l],
                    u = d[0],
                    d = d[1];
                a.push(u + ":" + (d ? "1" : "0"))
            }
        _.showVendorService && _.vsConsent.forEach(function(e, t) {
            a.push(t + ":" + (e ? "1" : "0"))
        });
        t = _.groupsConsent.concat(_.hostsConsent).concat(a), n = b.contains(t, e + ":1"), r = this.doesHostExist(e), i = this.doesGroupExist(e), s = !1, _.showGeneralVendors ? s = this.doesGenVendorExist(e) : _.showVendorService && (s = this.doesVendorServiceExist(e)), t = !(!r && !s) || n && G.canSoftOptInInsertForGroup(e);
        return !(!o || !(n && t || !i && !r && !s))
    }, $o.prototype.setAllowAllButton = function() {
        var t = 0,
            e = L.Groups.some(function(e) {
                if (-1 === Tt.indexOf(e.Type)) return f.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return f.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = eo.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), bo.lastItem && bo.setLastItem(), e
    }, $o.prototype.isAnyGroupOptedOut = function() {
        for (var e = !1, t = 0, o = L.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === f.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }, $o.prototype.getGroupVariable = function() {
        return _.groupsConsent
    }, $o.prototype.IsGroupInActive = function(e) {
        e = -1 < Pt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Tt.indexOf(e.Type)) && -1 === wt.inArray(e.CustomGroupId + ":1", f.getGroupVariable());
        return e
    }, $o.prototype.updateIabPurposeData = function(t, e, o) {
        var n = b.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[-1 === n ? Number(t) : n] = t + ":" + e
    }, $o.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = -1 === (o = b.findIndex(_.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        })) ? Number(t) : o;
        _.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, $o.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + P.P_Category_Grp + " " + P.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, $o.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            f.toggleGrpStatus(e, t), So.toggleGroupHosts(e, t), _.genVenOptOutEnabled && So.toggleGroupGenVendors(e, t)
        })
    }, $o.prototype.isIabPurposeActive = function(e) {
        var t = e.Type === T.GroupTypes.Spl_Ft ? _.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? _.vendors.selectedLegInt : _.vendors.selectedPurpose;
        return wt.inArray(e.IabGrpId + ":true", t)
    }, $o.prototype.doesGroupExist = function(e) {
        return !!C.getGroupById(e)
    }, $o.prototype.doesHostExist = function(e) {
        var t = _.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, $o.prototype.doesGenVendorExist = function(t) {
        return !!L.GeneralVendors && !!L.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }, $o.prototype.doesVendorServiceExist = function(e) {
        return _.getVendorsInDomain().has(e)
    };
    var f, Zo = $o;

    function $o() {}
    var en, tn, on = "#onetrust-banner-sdk",
        nn = ".banner_logo",
        rn = "#onetrust-pc-sdk",
        sn = (an.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (tn.pushPageDown(on), A(window).on("resize", function() {
                "none" !== A(on).css("display") && tn.pushPageDown(on)
            }))
        }, an.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, an.prototype.addOTCssPropertiesToBody = function(e, t) {
            var o = tn.getCssData(e, t);
            _.customerStyles.set(e, o), tn.setStylesOnBody(t), e === en.PC && tn.setStylesOnHtml(t)
        }, an.prototype.removeAddedOTCssStyles = function(e) {
            void 0 === e && (e = en.Banner);
            var t = _.customerStyles.get(e);
            t ? (tn.setStylesOnBody(t.customerBodyCSS), tn.setStylesOnHtml(t.customerHtmlCSS), _.customerStyles.delete(e)) : 0 < _.customerStyles.size && _.customerStyles.forEach(function(e, t) {
                return tn.removeAddedOTCssStyles(t)
            })
        }, an.prototype.getCssData = function(e, t) {
            var o, n, r = A("body").el[0],
                i = A("html").el[0],
                s = {},
                a = {},
                e = _.customerStyles.get(e),
                a = e ? (o = e.scriptBodyCSS, n = e.customerBodyCSS, e = e.customerHtmlCSS, r.style.top !== o.top && (n.top = r.style.top), r.style.position !== o.position && (n.position = r.style.position), r.style.overflow !== o.overflow && (n.overflow = r.style.overflow), i.style.overflow !== o.overflow && (e.overflow = i.style.overflow), s = n, e) : (s = {
                    top: r.style.top,
                    position: r.style.position,
                    overflow: r.style.overflow
                }, {
                    overflow: i.style.overflow
                });
            return {
                scriptBodyCSS: t,
                customerBodyCSS: s,
                customerHtmlCSS: a
            }
        }, an.prototype.setStylesOnBody = function(e) {
            var t = A("body").el[0];
            tn.setStylesOnHtmlElement(t, e)
        }, an.prototype.setStylesOnHtml = function(e) {
            var t = A("html").el[0];
            tn.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }, an.prototype.setStylesOnHtmlElement = function(e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n],
                    s = i[0],
                    i = i[1];
                i ? o += s + ": " + i + ";" : e.style.removeProperty(s)
            }
            o && d(e, o, !0)
        }, an.prototype.pushPageDown = function(e) {
            var t = A(e).height() + "px",
                e = (A(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "), _.isPCVisible ? en.PC : en.Banner),
                t = {
                    position: "relative",
                    top: t
                };
            _.isPCVisible && (t.overflow = "hidden"), tn.addOTCssPropertiesToBody(e, t)
        }, an);

    function an() {}(s = en = en || {}).Banner = "Banner", s.PC = "PC";
    dn.prototype.showConsentNotice = function() {
        var e, t, o;
        !L.NoBanner || L.ForceConsent ? A(".onetrust-pc-dark-filter").removeClass("ot-hide") : A(".onetrust-pc-dark-filter").addClass("ot-hide"), A("" + ln.ONETRUST_PC_SDK).removeClass("ot-hide"), v.isV2Template && this.closePCText(!0), I.pcName === rt && (A("" + ln.ONETRUST_PC_SDK).el[0].classList.contains("ot-animated") || A("" + ln.ONETRUST_PC_SDK).addClass("ot-animated"), e = L.PreferenceCenterPosition, t = (o = L.useRTL) ? "right" : "left", o = o ? "left" : "right", A("" + ln.ONETRUST_PC_SDK).el[0].classList.contains("ot-slide-out-" + ("right" === e ? o : t)) && A("" + ln.ONETRUST_PC_SDK).removeClass("ot-slide-out-" + ("right" === e ? o : t)), A("" + ln.ONETRUST_PC_SDK).addClass("ot-slide-in-" + ("right" === e ? o : t))), f.setAllowAllButton(), bo.setPCFocus(bo.getPCElements()), L.NoBanner && L.ScrollCloseBanner || this.pcHasScroll(), this.handleBodyStylesForBannerPushdown()
    }, dn.prototype.hideConsentNoticeV2 = function() {
        var e, t, o;
        0 === A(this.ONETRUST_PC_SDK).length ? this.setFocusOnPage() : (v.isV2Template && this.closePCText(), L.ForceConsent && !y.isCookiePolicyPage(L.AlertNoticeText) && !h.isAlertBoxClosedAndValid() && L.ShowAlertNotice ? A("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : A("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(L.PCLayout.Panel ? 500 : 400), L.PCLayout.Panel && (e = L.PreferenceCenterPosition, t = (o = L.useRTL) ? "right" : "left", o = o ? "left" : "right", A("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? o : t)), A("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? o : t))), A("" + this.ONETRUST_PC_SDK).fadeOut(L.PCLayout.Panel ? 500 : 400), _.isPCVisible = !1, _.pcLayer = ie.Banner, this.setFocus())
    }, dn.prototype.setFocus = function() {
        var e;
        _.pcSource || h.isAlertBoxClosedAndValid() ? _.pcSource ? (_.pcSource.focus(), _.pcSource = null) : L.BInitialFocus ? y.resetFocusToBody() : this.setFocusOnPage() : (e = A("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0]) && e.focus()
    }, dn.prototype.handleBodyStylesForBannerPushdown = function() {
        I.pcName === st && I.pagePushedDown && "top" === L.BannerPosition && tn.addOTCssPropertiesToBody(en.PC, {})
    }, dn.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        _.isKeyboardUser && e.length && e[0].focus()
    }, dn.prototype.closePCText = function(e) {
        void 0 === e && (e = !1);
        var t = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
            o = L.AboutCookiesText;
        t && (t.innerText = e ? "" : o + (" " + L.pcDialogClose))
    }, dn.prototype.pcHasScroll = function() {
        var e = A(P.P_Grp_Container).el[0] || A("#onetrust-pc-sdk " + P.P_Content).el[0];
        e.scrollHeight > e.clientHeight && (this.bodyStyleChanged = !0, e = A("body")) && e.length && tn.addOTCssPropertiesToBody(en.PC, {
            overflow: "hidden"
        })
    }, dn.prototype.checkIfPcSdkContainerExist = function() {
        return !A("" + ln.ONETRUST_PC_SDK).length
    };
    var ln, cn = dn;

    function dn() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }
    hn.prototype.isLandingPage = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }, hn.prototype.setLandingPathParam = function(e) {
        k.writeCookieParam(S.OPTANON_CONSENT, "landingPath", e)
    };
    var un, pn = hn;

    function hn() {}
    yn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        _.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = C.getGrpStatus(C.getGroupById(t)).toLowerCase() === m.ALWAYS_ACTIVE;
            b.endsWith(e, ":1") && (G.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), _.hostsConsent.forEach(function(e) {
            b.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), _.showGeneralVendors && L.GenVenOptOut && L.GeneralVendors.forEach(function(e) {
            !_.genVendorsConsent[e.VendorCustomId] || _.softOptInGenVendors.includes(e.VendorCustomId) && un.isLandingPage() || n.push(e.VendorCustomId)
        });
        _.vsIsActiveAndOptOut && _.getVendorsInDomain().forEach(function(e) {
            _.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + b.arrToStr(n) + ",";
        L.GoogleConsent.GCEnable && !I.otDataLayer.ignore && this.updateGCMTags(n), window.OnetrustActiveGroups = t, window.OptanonActiveGroups = t, I.gcmUpdateCallback && I.gcmUpdateCallback(), I.otDataLayer.ignore || void 0 === this._window[I.otDataLayer.name] || this._window[I.otDataLayer.name].constructor !== Array ? !I.otDataLayer.ignore && I.otDataLayer.name && (this._window[I.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[I.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }), this._window[I.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })), this.dispatchEvents(e, n, t)
    }, yn.prototype.dispatchEvents = function(e, t, o) {
        !e && I.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
            detail: t
        }));
        var n, r, i = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            s = _.fireOnetrustGrp || !i || e || !I.gtmUpdatedinStub;
        s && (_.fireOnetrustGrp = !1, !I.otDataLayer.ignore && this._window[I.otDataLayer.name] && this._window[I.otDataLayer.name].constructor === Array && this._window[I.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, yn.prototype.categoryNotMapped = function(e) {
        return e !== ct && "" !== e
    }, yn.prototype.updateGCMTags = function(o) {
        var n, r = this,
            i = {},
            e = (this.canUpdateGCMCategories() && (e = [
                [L.GoogleConsent.GCAdStorage, Te.ad_storage],
                [L.GoogleConsent.GCAnalyticsStorage, Te.analytics_storage],
                [L.GoogleConsent.GCFunctionalityStorage, Te.functionality_storage],
                [L.GoogleConsent.GCPersonalizationStorage, Te.personalization_storage],
                [L.GoogleConsent.GCSecurityStorage, Te.security_storage]
            ], v.fp.CookieV2GCMDMA && (e.push([L.GoogleConsent.GCAdUserData, Te.ad_user_data]), e.push([L.GoogleConsent.GCAdPersonalization, Te.ad_personalization])), e.forEach(function(e) {
                var t;
                r.categoryNotMapped(e[0]) && (t = o.includes(e[0]) ? Ae.granted : Ae.denied, i[e[1]] = t)
            })), k.getCookie(S.ALERT_BOX_CLOSED)),
            t = I.getRegionRule().Global;
        "function" != typeof window.gtag && (n = this._window, window.gtag = function(e, t, o) {
            I.otDataLayer.ignore || (n[I.otDataLayer.name] ? n[I.otDataLayer.name].push(arguments) : n[I.otDataLayer.name] = [arguments])
        }), "function" == typeof window.gtag && (I.gcmDevIdSet || (window.gtag(be.set, "developer_id.dYWJhMj", !0), I.gcmDevIdSet = !0), e) && (t || (i[Te.region] = I.gcmCountries), 0 !== Object.keys(i).length) && window.gtag(be.consent, Pe.update, i)
    }, yn.prototype.canUpdateGCMCategories = function() {
        return L.GoogleConsent.GCAdStorage !== ct || L.GoogleConsent.GCAnalyticsStorage !== ct || L.GoogleConsent.GCFunctionalityStorage !== ct || L.GoogleConsent.GCPersonalizationStorage !== ct || L.GoogleConsent.GCSecurityStorage !== ct || L.GoogleConsent.GCAdUserData !== ct || L.GoogleConsent.GCAdPersonalization !== ct
    };
    var gn, Cn = yn;

    function yn() {
        this._window = window
    }
    Sn.prototype.updateFilterSelection = function(e) {
        o = (e = void 0 === e ? !1 : e) ? (t = _.filterByCategories, "data-optanongroupid") : (t = _.filterByIABCategories, "data-purposeid");
        for (var t, o, n = A("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o),
                i = -1 < t.indexOf(i);
            b.setCheckedAttribute(null, n[r], i)
        }
    }, Sn.prototype.cancelHostFilter = function() {
        for (var e = A("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"),
                o = 0 <= _.filterByCategories.indexOf(o);
            b.setCheckedAttribute(null, e[t], o)
        }
    }, Sn.prototype.updateHostFilterList = function() {
        for (var e = A("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-optanongroupid");
            e[t].checked && _.filterByCategories.indexOf(n) < 0 ? _.filterByCategories.push(n) : !e[t].checked && -1 < _.filterByCategories.indexOf(n) && (o = _.filterByCategories, _.filterByCategories.splice(o.indexOf(n), 1))
        }
        return _.filterByCategories
    }, Sn.prototype.InitializeHostList = function() {
        var e = P.P_Vendor_List + " " + P.P_Host_Cntr + " li";
        _.hosts.hostTemplate = A(e).el[0].cloneNode(!0), _.hosts.hostCookieTemplate = A(P.P_Vendor_List + " " + P.P_Host_Cntr + " " + P.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, Sn.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(R(R({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(R(R({}, e), {
                isActive: "always active" === C.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: ge.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, Sn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, Sn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName),
            n = (o.innerHTML = e.innerHTML, e.attributes);
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, Sn.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"),
            r = 0 <= e.className.indexOf("optanon-category"),
            i = (n && r ? o = this.getGroupElements(e.className, _.showVendorService) : n ? _.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (_.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1)), !0);
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!f.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }, Sn.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, Sn.prototype.getGroupElements = function(e, t) {
        return (t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i) : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i))[1].split("-")
    }, Sn.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]')),
            e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))),
            o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || []))));
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    };
    var fn, mn = Sn;

    function Sn() {}
    var vn, kn = "Banner",
        bn = "Preference Center",
        Pn = "API",
        Tn = "Close",
        An = "Allow All",
        In = "Reject All",
        Ln = "Confirm",
        _n = "Confirm",
        En = "Continue without Accepting",
        On = (Vn.prototype.init = function() {
            this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
        }, Vn.prototype.getContent = function() {
            return u(this, void 0, void 0, function() {
                return F(this, function(e) {
                    return [2, Dt.getSyncNtfyContent().then(function(e) {
                        _.syncNtfyGrp = {
                            name: e.name,
                            html: atob(e.html),
                            css: e.css
                        }
                    })]
                })
            })
        }, Vn.prototype.insertHtml = function() {
            this.removeHtml();

            function e(e) {
                return t.querySelector(e)
            }
            var t = document.createDocumentFragment(),
                o = document.createElement("div"),
                o = (A(o).html(_.syncNtfyGrp.html), o.querySelector(this.El)),
                n = (L.BannerRelativeFontSizesToggle && A(o).addClass("otRelFont"), L.useRTL && A(o).attr("dir", "rtl"), A(t).append(o), L.NtfyConfig),
                n = (this.initHtml("Sync", n.Sync, e, t.querySelector(this.El)), n.ShowCS ? A(e(".ot-pc-handler")).html(n.CSTxt) : (A(o).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr"))), document.createElement("div"));
            A(n).append(t), A("#onetrust-consent-sdk").append(n.firstChild)
        }, Vn.prototype.initHandler = function() {
            A(this.El + " .ot-sync-close-handler").on("click", function() {
                return vn.close()
            })
        }, Vn.prototype.showNty = function() {
            var e = A(this.El);
            e.css("bottom: -300px;"), e.animate({
                bottom: "1em;"
            }, 1e3), setTimeout(function() {
                e.css("bottom: 1rem;")
            }, 1e3), e.focus()
        }, Vn.prototype.changeState = function() {
            setTimeout(function() {
                vn.refreshState()
            }, 1500)
        }, Vn.prototype.refreshState = function() {
            function e(e) {
                return t.querySelector(e)
            }
            var t = A(this.El).el[0],
                o = (t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync"), L.NtfyConfig);
            this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && A(e(".ot-pc-handler")).addClass("ot-pc-link"), A(".ot-sync-btncntr").show("inline-block"), this.alignContent(), A(window).on("resize", function() {
                return vn.resizeEvent
            })), setTimeout(function() {
                vn.close()
            }, 1e3 * L.NtfyConfig.NtfyDuration)
        }, Vn.prototype.insertCss = function() {
            var e = document.getElementById("onetrust-style");
            e.innerHTML += _.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
        }, Vn.prototype.addCustomStyles = function() {
            var e = L.NtfyConfig,
                t = e.Sync,
                o = e.Complete,
                n = e.CSButton,
                r = e.CSLink;
            return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
        }, Vn.prototype.initHtml = function(e, t, o, n) {
            var r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
            t.ShowIcon ? (A(o("Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check")).show(), A(o(r)).hide(), A(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (A(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? A(o("#ot-sync-title")).html(t.Title) : A(o("#ot-sync-title")).hide(), t.Desc ? A(o(".ot-sync-desc")).html(t.Desc) : A(o(".ot-sync-desc")).hide(), t.ShowClose ? (A(o(".ot-sync-close-handler")).show("inline-block"), A(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (A(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
        }, Vn.prototype.close = function() {
            this.hideSyncNtfy(), y.resetFocusToBody()
        }, Vn.prototype.hideSyncNtfy = function() {
            L.NtfyConfig.ShowCS && window.removeEventListener("resize", vn.resizeEvent), A("#ot-sync-ntfy").fadeOut(400)
        }, Vn.prototype.removeHtml = function() {
            var e = A(this.El).el;
            e && b.removeChild(e)
        }, Vn.prototype.alignContent = function() {
            A(".ot-sync-btncntr").el[0].clientHeight > A(".ot-sync-titlecntr").el[0].clientHeight && (A(".ot-sync-titlecntr").addClass("ot-pos-abs"), A(".ot-sync-btncntr").addClass("ot-pos-rel"))
        }, Vn.prototype.resizeEvent = function() {
            window.innerWidth <= 896 && vn.alignContent()
        }, Vn);

    function Vn() {
        this.El = "#ot-sync-ntfy"
    }
    Gn.prototype.toggleVendorConsent = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : _.oneTrustIABConsent.vendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = A(P.P_Vendor_Container + " ." + P.P_Ven_Ctgl + ' [vendorid="' + t + '"]').el[0];
            t && b.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = A("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        n && (o = b.getActiveIdArray(b.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Et.P_Line_Through) : n.parentElement.classList.add(Et.P_Line_Through), b.setCheckedAttribute("", n, t))
    }, Gn.prototype.toggleVendorLi = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : _.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = A(P.P_Vendor_Container + " ." + P.P_Ven_Ltgl + ' [leg-vendorid="' + t + '"]').el[0];
            t && b.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = A("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        n && (o = b.getActiveIdArray(b.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Et.P_Line_Through) : n.parentElement.classList.add(Et.P_Line_Through), b.setCheckedAttribute("", n, t))
    }, Gn.prototype.updateVendorLegBtns = function(e) {
        (e = (e = void 0 === e ? [] : e).length ? e : _.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = A(P.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + t + '"]').el[0];
            t && f.updateLegIntBtnElement(t, "true" === e)
        })
    };
    var Bn, wn = Gn;

    function Gn() {}

    function Nn() {
        return (!I.isIab2orv2Template && L.PCTemplateUpgrade && L.PCCategoryStyle === Se.Toggle ? E.toggleEl : E.chkboxEl).cloneNode(!0)
    }
    Dn.prototype.setHtmlTemplate = function(e) {
        O.setInternalData(), O.rootHtml = e, O.cloneHtmlElements()
    }, Dn.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            n = (o.classList.add("ot-vs-list"), L.VendorServiceConfig.PCVSExpandGroup);
        return e.forEach(function(e, t) {
            e = O.createVendor(e.groupRef, e, n, "ot-vs-lst-id-" + t);
            o.appendChild(e)
        }), t.appendChild(o), t
    }, Dn.prototype.insertVendorServiceHtml = function(e, t) {
        var o;
        O.checkIfIsInvalid(e, t) || (o = document.createDocumentFragment(), O.setVendorContainer(o, e), O.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length ? (o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt"), e = t.children[1], I.pcName === st && (e = t.children[2]), t.insertBefore(o, e)) : t.appendChild(o))
    }, Dn.prototype.toggleVendorService = function(e, t, o, n) {
        e = C.getGroupById(e), t = C.getVSById(t);
        n = n || O.getVendorInputElement(t.CustomVendorServiceId), O.setVendorServiceState(n, t, o), o ? O.changeGroupState(e, o, O.isToggle) : O.checkGroupChildrenState(e) || O.changeGroupState(e, !1, O.isToggle)
    }, Dn.prototype.setVendorStateByGroup = function(e, t) {
        e = e.VendorServices;
        if (_.showVendorService && e)
            for (var o = 0, n = e; o < n.length; o++) {
                var r = n[o],
                    i = O.getVendorInputElement(r.CustomVendorServiceId);
                O.setVendorServiceState(i, r, t)
            }
    }, Dn.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            t = O.getVendorInputElement(t);
            O.changeVendorServiceUIState(t, e)
        })
    }, Dn.prototype.setVendorServiceState = function(e, t, o) {
        O.changeVendorServiceState(t, o), O.changeVendorServiceUIState(e, o);
        e = o ? Jo : Yo;
        g.triggerGoogleAnalyticsEvent(Po, e, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, Dn.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, Dn.prototype.consentAll = function(o) {
        _.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = C.isAlwaysActiveGroup(e.groupRef)), O.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, Dn.prototype.cloneHtmlElements = function() {
        var e, t, o, n, r = O.rootHtml.querySelector(this.MAIN_CONT_ELE);
        r && (e = r.querySelector(".ot-vnd-serv-hdr-cntr"), n = (o = (t = r.querySelector(".ot-vnd-lst-cont")).querySelector(".ot-vnd-item")).querySelector(".ot-vnd-info"), O.vendorLabelContainerClone = e.cloneNode(!0), r.removeChild(e), O.vendorInfoClone = n.cloneNode(!0), o.querySelector(".ot-vnd-info-cntr").removeChild(n), O.vendorItemClone = o.cloneNode(!0), t.removeChild(o), O.vendorListContainerClone = t.cloneNode(!0), r.removeChild(t), O.vendorServMainContainerClone = r.cloneNode(!0), O.rootHtml.removeChild(r))
    }, Dn.prototype.setInternalData = function() {
        O.isToggle = L.PCCategoryStyle === Se.Toggle;
        var e = L.VendorServiceConfig;
        O.stringTranslation = new Map, O.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), O.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), O.stringTranslation.set("Address", e.PCVSAddressText || "Address"), O.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), O.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), O.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), O.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), O.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), O.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), O.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), O.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, Dn.prototype.setVendorContainer = function(e, t) {
        var o = O.vendorServMainContainerClone.cloneNode(!0),
            t = (o.setAttribute("data-group-id", t.CustomGroupId), O.vendorLabelContainerClone.cloneNode(!0));
        t.querySelector(".ot-vnd-serv-hdr").innerHTML = L.VendorServiceConfig.PCVSListTitle, o.appendChild(t), e.appendChild(o)
    }, Dn.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = O.getVSFromGroupAndSubgroups(t), r = n.length, e = e.querySelector(this.MAIN_CONT_ELE), i = O.vendorListContainerClone.cloneNode(), s = L.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var a = O.createVendor(t, n[o], s);
            i.appendChild(a)
        }
        e.appendChild(i)
    }, Dn.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n = null != (o = e.VendorServices) ? o : [];
        if (t = void 0 === t ? !1 : t)
            for (var r = 0, i = null != (o = e.SubGroups) ? o : []; r < i.length; r++) {
                var s = null != (s = i[r].VendorServices) ? s : [];
                n.push.apply(n, s)
            }
        return n
    }, Dn.prototype.createVendor = function(e, t, o, n) {
        var r = O.vendorItemClone.cloneNode(!0),
            i = (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), L.PCAccordionStyle === le.NoAccordion ? (r.classList.remove("ot-accordion-layout"), (i = r.querySelector("button")) && r.removeChild(i)) : O.setExpandVendorList(r, o), O.setVendorHeader(e, t, r, n), r.querySelector(".ot-vnd-info-cntr"));
        return O.setVendorInfo(i, t), r
    }, Dn.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, Dn.prototype.setVendorHeader = function(e, t, o, n) {
        var r = L.PCShowAlwaysActiveToggle,
            i = "always active" === C.getGrpStatus(e).toLowerCase(),
            o = o.querySelector(".ot-acc-hdr"),
            s = (i && o.classList.add("ot-always-active-group"), null),
            e = (i && L.PCCategoryStyle === Se.Toggle || (s = O.setHeaderInputStyle(e, t, i, n)), O.setHeaderText(t, o)),
            n = (o.appendChild(e), O.getPositionForElement(L.PCAccordionStyle, O.isToggle)),
            t = n.positionIcon,
            e = n.positionInput;
        s && o.insertAdjacentElement(e, s), i && r && (n = O.getAlwaysActiveElement(), o.insertAdjacentElement("beforeend", n)), L.PCAccordionStyle !== le.NoAccordion && (e = O.setHeaderAccordionIcon(), o.insertAdjacentElement(t, e))
    }, Dn.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend",
            n = "beforeend";
        return {
            positionIcon: o = t && e === le.PlusMinus ? "afterbegin" : o,
            positionInput: n = t ? n : "afterbegin"
        }
    }, Dn.prototype.setHeaderAccordionIcon = function() {
        var e = (L.PCAccordionStyle === le.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0);
        return e
    }, Dn.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header"),
            n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, Dn.prototype.setHeaderInputStyle = function(e, t, o, n) {
        var r, i, s, a;
        return L.VendorServiceConfig.PCVSOptOut ? (e = C.checkIsActiveByDefault(e), r = !1, r = (i = _.vsConsent).has(t.CustomVendorServiceId) ? i.get(t.CustomVendorServiceId) : e, (i = Nn()).querySelector("input").classList.add("category-switch-handler"), e = i.querySelector("input"), a = t.CustomVendorServiceId, n = null != n ? n : "ot-vendor-id-" + a, s = "ot-vendor-header-id-" + a, A(e).attr("id", n), A(e).attr("name", n), A(e).attr("aria-labelledby", s), A(e).data("ot-vs-id", a), A(e).data("optanongroupid", t.groupRef.CustomGroupId), e.disabled = o, b.setCheckedAttribute(null, e, r), a = O.isToggle ? n : s, A(i.querySelector("label")).attr("for", a), A(i.querySelector(".ot-label-txt")).html(t.ServiceName), A(i.querySelector(".ot-switch-nob")).attr("aria-label", t.ServiceName), i) : null
    }, Dn.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = L.AlwaysActiveText, e
    }, Dn.prototype.setVendorInfo = function(e, t) {
        var o, n, r, i, s, a, l = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t) O.skipVendorInfoKey(o, t) || (n = t[o], (r = O.vendorInfoClone.cloneNode(!0)).dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId, i = r.querySelector(".ot-vnd-lbl"), s = r.querySelector(".ot-vnd-cnt"), i.innerHTML = O.getLocalizedString(o), l.includes(o) ? (s.remove(), a = document.createElement("a"), A(a).attr("href", n), A(a).attr("target", "_blank"), A(a).attr("rel", "noopener"), A(a).attr("aria-label", n + " " + L.NewWinTxt), a.classList.add("ot-vnd-cnt"), a.innerText = n, i.insertAdjacentElement("afterend", a)) : s.innerHTML = n, e.appendChild(r))
    }, Dn.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, Dn.prototype.getLocalizedString = function(e) {
        return O.stringTranslation.has(e) ? O.stringTranslation.get(e) : "DEFAULT"
    }, Dn.prototype.checkGroupChildrenState = function(e) {
        for (var t, o = 0, n = null != (t = e.SubGroups) ? t : []; o < n.length; o++) {
            var r = n[o];
            if (O.checkGroupChildrenState(r)) return !0
        }
        for (var i = 0, s = null != (t = e.VendorServices) ? t : []; i < s.length; i++) {
            var a = s[i];
            if (_.vsConsent.get(a.CustomVendorServiceId)) return !0
        }
        return !1
    }, Dn.prototype.changeVendorServiceState = function(e, t) {
        _.vsConsent.set(e.CustomVendorServiceId, t)
    }, Dn.prototype.changeVendorServiceUIState = function(e, t) {
        e && b.setCheckedAttribute(null, e, t)
    }, Dn.prototype.changeGroupState = function(e, t, o) {
        var n = C.getParentByGrp(e);
        f.toggleGrpStatus(e, t), O.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n && (e = O.checkGroupChildrenState(n), O.changeGroupState(n, e, o))
    }, Dn.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        n = document.querySelector((n ? "#ot-sub-group-id-" : "#ot-group-id-") + e);
        n && b.setCheckedAttribute(null, n, t)
    }, Dn.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, Dn.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    };
    var O, xn = Dn;

    function Dn() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }

    function Hn(e, t, o) {
        var n, r, i, s, a = "otGenericBackdrop",
            l = "#" + a,
            c = "ot-generic-modal-layer";

        function d(e) {
            e ? (A(l).removeClass("ot-hide"), A(l).el[0].removeAttribute("style")) : (A(l).fadeOut(400), A(l).addClass("ot-hide"))
        }
        for (s in (n = document.createElement("div")).classList.add(c), (i = document.createElement("div")).setAttribute("id", a), i.classList.add("onetrust-pc-dark-filter"), n.appendChild(i), (r = document.createElement("div")).classList.add("ot-general-modal"), r.setAttribute("id", null != e ? e : "genericModal"), n.appendChild(r), t) r.style[s] = t[s];
        return {
            dialogLayerHtml: n,
            modalHtml: r,
            closeModalHandler: function() {
                d(!1);
                var e = o.querySelector("." + c);
                o.removeChild(e)
            },
            openModalHandler: function() {
                d(!0)
            }
        }
    }
    Fn.getInstance = function() {
        return Fn.instance = Fn.instance ? Fn.instance : new Fn
    }, Fn.prototype.getHealthSignatureUIIfNeeded = function(e) {
        if ((void 0 === e && (e = !1), I.requireSignatureEnabled) && (this.healthSignatureGroup = L.Groups.find(function(e) {
                return e.needsHealthSignature
            }), this.healthSignatureGroup))
            if (I.healthSignatureGroup || e)
                if (I.healthSignatureData) this.setSignHealthDataIntoCookieGroup(I.healthSignatureData);
                else {
                    var t = f.isGroupActive(this.healthSignatureGroup),
                        o = "1" === k.readCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION);
                    if (!(e && t && o)) return this.showHealthSignatureModal(function() {}), this.healthSignatureElement
                }
        else(t = f.isGroupActive(this.healthSignatureGroup)) && ur.setDataSubjectIdV2(I.healthSignatureData), k.writeCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, t ? "1" : "");
        return null
    }, Fn.prototype.checkIfHealthSignatureNeeded = function(n) {
        var e, r = this;
        return void 0 === n && (n = !1), I.requireSignatureEnabled ? (this.healthSignatureGroup = L.Groups.find(function(e) {
            return e.needsHealthSignature
        }), this.healthSignatureGroup ? new Promise(function(e) {
            var t, o;
            I.healthSignatureGroup || n ? I.healthSignatureData ? (r.setSignHealthDataIntoCookieGroup(I.healthSignatureData), e()) : (o = f.isGroupActive(r.healthSignatureGroup), t = "1" === k.readCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION), n && o && t ? e() : r.showHealthSignatureModal(e)) : ((o = f.isGroupActive(r.healthSignatureGroup)) && ur.setDataSubjectIdV2(I.healthSignatureData), k.writeCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, o ? "1" : ""), e())
        }) : (e = "🛑 INVALID Cookie category: " + L.RequireSignatureCID, Promise.reject(e))) : Promise.resolve()
    }, Fn.prototype.getHealthSignatureComponent = function(e, t) {
        this.isModal = !1, this.langJson = L, this.parentElement = e, this.healthSignatureGroup = t;
        e = {
            errorMessage: this.langJson.PCRequireSignatureHelpText,
            inputLabelText: this.langJson.PCRequireSignatureFieldLabel
        }, t = '<form class="ot-signature-health-form" id="form">\n        <div class="ot-input-field-cont">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + e.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + e.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error">\n                ' + e.errorMessage + "\n            </span>\n        </div>\n    </form>", e = document.createElement("div");
        e.innerHTML = t, e.classList.add("ot-signature-health-group"), this.setConsentIdInput(e), this.healthSignatureElement = e, this.parentElement.appendChild(e), this.addEventHandlers()
    }, Fn.prototype.resetHealthSignatureData = function(e) {
        void 0 === e && (e = !1), I.requireSignatureEnabled && (I.healthSignatureData = "", I.healthSignatureGroup = null, e) && k.writeCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, "")
    }, Fn.prototype.setConsentIdInPC = function() {
        this.setConsentIdInput(null)
    }, Fn.prototype.setConsentIdInput = function(e) {
        var t;
        this.healthSignatureGroup && (k.readCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION) ? (t = (e || document).querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR)) && (e = "", f.isGroupActive(this.healthSignatureGroup) && (e = k.readCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID)), t.value = e) : (t = document.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR)) && (t.value = ""))
    }, Fn.prototype.showHealthSignatureModal = function(t) {
        var o = this;
        ln.hideConsentNoticeV2(), this.langJson = L, this.parentElement = document.querySelector(this.PARENT_SELECTOR), this.setMyHealthDataModal(function(e) {
            o.setSignHealthDataIntoCookieGroup(e), t()
        }, function() {
            f.toggleGroupHtmlElement(o.healthSignatureGroup, o.healthSignatureGroup.CustomGroupId, !1), t()
        })
    }, Fn.prototype.setMyHealthDataModal = function(e, t) {
        this.isModal = !0, this.acceptAllCallback = e, this.rejectAllCallback = t, this.configOptions = {
            mainTitle: this.healthSignatureGroup.GroupName,
            description: this.healthSignatureGroup.GroupDescription,
            subtitle: this.langJson.PCRequireSignatureHeaderText,
            ariaLabel: this.langJson.PCRequireSignatureHeaderDesc,
            errorMessage: this.langJson.PCRequireSignatureHelpText,
            subDescription: this.langJson.PCRequireSignatureHeaderDesc,
            inputLabelText: this.langJson.PCRequireSignatureFieldLabel,
            rejectButtonText: this.langJson.PCRequireSignatureRejectBtnText,
            acceptButtonText: this.langJson.PCRequireSignatureConfirmBtnText
        };
        e = document.createDocumentFragment(), t = this.createModal(e);
        this.healthSignatureElement = this.createHealtSignatureForm(t), this.parentElement.appendChild(e), this.setFocusOnInput(), this.hideErrorMessage(), this.addEventHandlers(), this.genericModal.openModalHandler()
    }, Fn.prototype.setSignHealthDataIntoCookieGroup = function(e) {
        e ? (ur.setDataSubjectIdV2(e), I.healthSignatureData = e, f.toggleGrpStatus(this.healthSignatureGroup, !0)) : (I.healthSignatureData = "", f.toggleGrpStatus(this.healthSignatureGroup, !1)), k.writeCookieParam(S.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, e ? "1" : "")
    }, Fn.prototype.createModal = function(e) {
        var t = this.setModalStyles();
        return this.genericModal = Hn(this.MODAL_ID_SELECTOR, t, this.parentElement), e.appendChild(this.genericModal.dialogLayerHtml), this.genericModal.modalHtml
    }, Fn.prototype.createHealtSignatureForm = function(e) {
        var t = '<div\n        class="ot-signature-health"\n        role="dialog"\n        aria-label="' + (t = this.configOptions).ariaLabel + '"\n        aria-describedby="otSignatureGroupDesc">\n        <section class="ot-signature-cont">\n            <h5 id="otSignatureSubtitle" class="ot-signature-subtitle">' + t.subtitle + '</h5>\n            <p class="ot-signarure-paragraph">' + t.subDescription + '</p>\n        </section>\n        <section class="ot-signature-cont">\n            <h4 id="otSignatureGroupTitle" class="ot-signature-group-title">' + t.mainTitle + '</h4>\n            <p id="otSignatureGroupDesc" class="ot-signarure-paragraph">' + t.description + '</p>\n        </section>\n        <form class="ot-signature-health-form" id="form">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + t.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + t.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error" aria-live="assertive">\n                ' + t.errorMessage + '\n            </span>\n        </form>\n        <div class="ot-signature-buttons-cont">\n            <button class="ot-signature-button reject">' + t.rejectButtonText + '</button>\n            <button class="ot-signature-button accept">' + t.acceptButtonText + "</button>\n        </div>\n    </div>",
            t = (e.innerHTML = t, this.setConsentIdInput(e), e.querySelector(this.ACCEPT_ALL_SELECTOR)),
            t = (this.setAcceptButtonsStyles(t), e.querySelector(this.REJECT_ALL_SELECTOR)),
            t = (this.setRejectButtonsStyles(t), e.querySelectorAll(this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR));
        return this.setParagraphStyles(t), e.querySelector(".ot-signature-health")
    }, Fn.prototype.addEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_ALL_SELECTOR).addEventListener("click", this.rejectAllListener.bind(this)), this.parentElement.querySelector(this.ACCEPT_ALL_SELECTOR).addEventListener("click", this.acceptAllListener.bind(this))) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).addEventListener("keyup", this.healthSignatureInputChanged.bind(this))
    }, Fn.prototype.removeModal = function() {
        this.removeEventHandlers(), this.genericModal.closeModalHandler()
    }, Fn.prototype.removeEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_ALL_SELECTOR).removeEventListener("click", this.rejectAllListener), this.parentElement.querySelector(this.ACCEPT_ALL_SELECTOR).removeEventListener("click", this.acceptAllListener)) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).removeEventListener("keyup", this.healthSignatureInputChanged)
    }, Fn.prototype.rejectAllListener = function() {
        this.removeModal(), this.rejectAllCallback && this.rejectAllCallback()
    }, Fn.prototype.acceptAllListener = function() {
        var e = this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).value;
        this.hideErrorMessage("" !== e), e && (this.removeModal(), this.acceptAllCallback(e))
    }, Fn.prototype.healthSignatureInputChanged = function(e) {
        I.healthSignatureData = e.target.value
    }, Fn.prototype.setModalStyles = function() {
        var e = {};
        return e.backgroundColor = this.langJson.pcBackgroundColor, e
    }, Fn.prototype.setParagraphStyles = function(e) {
        var t = this,
            o = {};
        o.color = this.langJson.textColor, e.forEach(function(e) {
            t.setStylesInElement(e, o)
        })
    }, Fn.prototype.hideErrorMessage = function(e) {
        void 0 === e && (e = !0), this.healthSignatureElement.querySelector(this.ERROR_MSG_SELECTOR).style.opacity = e ? "0" : "1"
    }, Fn.prototype.setFocusOnInput = function() {
        this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).focus()
    }, Fn.prototype.setRejectButtonsStyles = function(e) {
        var t = {};
        t.color = this.langJson.bannerMPButtonTextColor, t.borderColor = this.langJson.bannerMPButtonTextColor, t.backgroundColor = this.langJson.bannerMPButtonColor, this.setStylesInElement(e, t)
    }, Fn.prototype.setAcceptButtonsStyles = function(e) {
        var t = {};
        t.color = this.langJson.buttonTextColor, t.borderColor = this.langJson.buttonColor, t.backgroundColor = this.langJson.buttonColor, this.setStylesInElement(e, t)
    }, Fn.prototype.setStylesInElement = function(e, t) {
        for (var o in t) e.style[o] = t[o]
    };
    var Rn = Fn;

    function Fn() {
        this.PARENT_SELECTOR = "#onetrust-consent-sdk", this.MODAL_ID_SELECTOR = "#healthSignatureDataModal", this.ERROR_MSG_SELECTOR = "#otHealthSignatureErrorMesg", this.REJECT_ALL_SELECTOR = ".ot-signature-button.reject", this.ACCEPT_ALL_SELECTOR = ".ot-signature-button.accept", this.HEALTH_SIGNATURE_INPUT_SELECTOR = "#otHealthSignatureData", this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR = "p.ot-signarure-paragraph"
    }
    qn.prototype.updateDataSubjectTimestamp = function() {
        var e = h.alertBoxCloseDate(),
            e = e && y.getUTCFormattedDate(e);
        A(".ot-userid-timestamp").html(L.PCenterUserIdTimestampTitleText + ": " + e)
    }, qn.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, qn.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), v.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, qn.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this,
            i = (void 0 === e && (e = !1), un.setLandingPathParam(p.NOT_LANDING_PAGE), _.groupsConsent = [], _.hostsConsent = [], _.genVendorsConsent = {}, {});
        L.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            M(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && y.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    var t;
                    i[e.HostId] ? So.updateHostStatus(e, o) : (i[e.HostId] = !0, t = So.isHostPartOfAlwaysActiveGroup(e.HostId), _.hostsConsent.push(e.HostId + ":" + (t || o ? "1" : "0")))
                }), _.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    yo.updateGenVendorStatus(e, o)
                })
            })
        }), L.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), tn.removeAddedOTCssStyles(), ln.hideConsentNoticeV2(), lo.writeGrpParam(S.OPTANON_CONSENT), lo.writeHstParam(S.OPTANON_CONSENT), _.genVenOptOutEnabled && lo.writeGenVenCookieParam(S.OPTANON_CONSENT), _.vsIsActiveAndOptOut && lo.writeVSConsentCookieParam(S.OPTANON_CONSENT), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros(), this.executeOptanonWrapper()
    }, qn.prototype.getGroupStatus = function(e, t, o) {
        return e ? o.Status.toLowerCase() !== m.ALWAYS_INACTIVE : !!t && C.isAlwaysActiveGroup(o)
    }, qn.prototype.setGroupConsent = function(e, t) {
        var o; - 1 < bt.indexOf(t.Type) && (o = "", o = I.requireSignatureEnabled && t.needsHealthSignature ? I.healthSignatureData ? "1" : "0" : e && t.HasConsentOptOut ? "1" : "0", _.groupsConsent.push(t.CustomGroupId + ":" + o))
    }, qn.prototype.nextPageCloseBanner = function() {
        un.isLandingPage() || h.isAlertBoxClosedAndValid() || this.closeBanner(L.NextPageAcceptAllCookies)
    }, qn.prototype.rmScrollAndClickBodyEvents = function() {
        L.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), L.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, qn.prototype.onClickCloseBanner = function(e) {
        h.isAlertBoxClosedAndValid() || (g.triggerGoogleAnalyticsEvent(Po, To), this.closeBanner(L.OnClickAcceptAllCookies), e.stopPropagation()), V.rmScrollAndClickBodyEvents()
    }, qn.prototype.scrollCloseBanner = function() {
        var e = A(document).height() - A(window).height(),
            e = (0 === e && (e = A(window).height()), 100 * A(window).scrollTop() / e);
        25 < (e = e <= 0 ? 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight) : e) && !h.isAlertBoxClosedAndValid() && (!_.isPCVisible || L.NoBanner) ? (g.triggerGoogleAnalyticsEvent(Po, To), V.closeBanner(L.ScrollAcceptAllCookies), V.rmScrollAndClickBodyEvents()) : h.isAlertBoxClosedAndValid() && V.rmScrollAndClickBodyEvents()
    }, qn.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = C.getGroupById(o[n].getAttribute("data-optanongroupid"));
            I.requireSignatureEnabled && r.needsHealthSignature ? this.groupsClass.toggleGrpElements(o[n], r, !!I.healthSignatureData) : (this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0))
        }
        _.showVendorService && O.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), L.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, qn.prototype.rejectAll = function(e, t) {
        for (var o, n, r = (t = void 0 === t ? !1 : t) ? pe[5] : pe[2], i = this.groupsClass.getAllGroupElements(), s = null != (o = null == (o = v) ? void 0 : o.fp) && o.CookieV2RejectAll ? (n = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(n = !0), a = 0; a < i.length; a++) {
            var l = C.getGroupById(i[a].getAttribute("data-optanongroupid"));
            "always active" !== C.getGrpStatus(l).toLowerCase() && (f.toggleGrpElements(i[a], l, !1, s), this.groupsClass.toogleSubGroupElement(i[a], !1, !1, !0), !L.IsIabEnabled || L.IsIabEnabled && n) && this.groupsClass.toogleSubGroupElement(i[a], !1, !0, !0)
        }
        _.showVendorService && O.consentAll(!1), this.bannerActionsHandler(!1, !0, s), r !== _.consentInteractionType && this.consentTransactions(e, !1, t), L.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, s), s || this.updateVendorLegBtns(!1))
    }, qn.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && L.BannerShowRejectAllButton && L.BRejectConsentType === Ie.OBJECT_TO_LI || e && L.PCenterShowRejectAllButton && L.BRejectConsentType === Ie.OBJECT_TO_LI
    }, qn.prototype.initializeAllowLIRejectAll = function(e) {
        return L.IsIabEnabled && (!e && L.BannerShowRejectAllButton && L.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS || e && L.PCenterShowRejectAllButton && L.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS)
    }, qn.prototype.executeCustomScript = function() {
        L.CustomJs && new Function(L.CustomJs)()
    }, qn.prototype.updateConsentData = function(e) {
        un.setLandingPathParam(p.NOT_LANDING_PAGE), L.IsIabEnabled && !e && this.iab.saveVendorStatus(), lo.writeGrpParam(S.OPTANON_CONSENT), lo.writeHstParam(S.OPTANON_CONSENT), _.showGeneralVendors && L.GenVenOptOut && lo.writeGenVenCookieParam(S.OPTANON_CONSENT), _.vsIsActiveAndOptOut && lo.writeVSConsentCookieParam(S.OPTANON_CONSENT), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros()
    }, qn.prototype.close = function(e, t) {
        var o;
        void 0 === t && (t = ee.Banner), ln.hideConsentNoticeV2(), this.updateConsentData(e), L.IsConsentLoggingEnabled ? (e = t === ee.PC ? Ln : t === ee.Banner ? Tn : I.apiSource, o = t === ee.PC ? bn : t === ee.Banner ? kn : Pn, _.bannerCloseSource === $.ContinueWithoutAcceptingButton && (e = En), _.bannerCloseSource === $.BannerSaveSettings && (e = _n), oi.createConsentTxn(!1, o + " - " + e, t === ee.PC)) : h.dispatchConsentEvent(), this.executeOptanonWrapper()
    }, qn.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = _.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === _.srcExecGrps.indexOf(o) && _.srcExecGrps.push(o)
                }
                _.srcExecGrpsTemp = [];
                for (var n = 0, r = _.htmlExecGrpsTemp; n < r.length; n++) {
                    o = r[n]; - 1 === _.htmlExecGrps.indexOf(o) && _.htmlExecGrps.push(o)
                }
                _.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, qn.prototype.updateVendorLegBtns = function(e) {
        if (I.legIntSettings.PAllowLI && I.legIntSettings.PShowLegIntBtn)
            for (var t = A(P.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, qn.prototype.showFltgCkStgButton = function() {
        var e = A("#ot-sdk-btn-floating"),
            e = (e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), L.cookiePersistentLogo.includes("ot_guard_logo.svg") && A(V.fltgFrontBtnSvg).attr(Ct, ""), A(V.fltgBackBtnSvg).attr(Ct, "true"), document.querySelector(V.fltgBtnBackBtn)),
            t = document.querySelector(V.fltgBtnFrontBtn);
        t && (t.setAttribute(Ct, "false"), t.style.display = "block"), e && (e.setAttribute(Ct, "true"), e.style.display = "none")
    }, qn.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), oi && !e && L.IsConsentLoggingEnabled ? oi.createConsentTxn(!1, (o ? bn : kn) + " - " + (t ? An : In), o) : h.dispatchConsentEvent()
    }, qn.prototype.hideVendorsList = function() {
        ln.checkIfPcSdkContainerExist() || (L.PCTemplateUpgrade ? A("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide") : A("#onetrust-pc-sdk .ot-main-content").show(), A("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), A("#onetrust-pc-sdk " + P.P_Vendor_List).addClass("ot-hide"))
    }, qn.prototype.resetConsent = function() {
        var e = this;
        _.groupsConsent = JSON.parse(JSON.stringify(_.initialGroupsConsent)), _.hostsConsent = JSON.parse(JSON.stringify(_.initialHostConsent)), _.showGeneralVendors && (_.genVendorsConsent = JSON.parse(JSON.stringify(_.initialGenVendorsConsent))), _.vsIsActiveAndOptOut && (_.vsConsent = new Map(_.initialVendorsServiceConsent)), L.IsIabEnabled && (_.oneTrustIABConsent = JSON.parse(JSON.stringify(_.initialOneTrustIABConsent)), _.vendors = JSON.parse(JSON.stringify(_.initialVendors)), _.vendors.vendorTemplate = _.initialVendors.vendorTemplate), L.UseGoogleVendors && (_.addtlVendors = JSON.parse(JSON.stringify(_.initialAddtlVendors)), _.addtlVendorsList = JSON.parse(JSON.stringify(_.initialAddtlVendorsList))), setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }, qn.prototype.setLblTxtForTgl = function(e, t) {
        e = e.querySelector(".ot-label-status");
        L.PCShowConsentLabels && e && (e.innerHTML = t ? L.PCActiveText : L.PCInactiveText)
    }, qn.prototype.resetConsentUI = function() {
        var p = this;
        f.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = C.getGroupById(t),
                t = V.isGroupActive(o, t),
                n = T.GroupTypes;
            if (I.pcName === st && L.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid"))), p.setLblTxtForTgl(e, t), o.Type === yt || o.Type === n.Stack)
                for (var n = y.isBundleOrStackActive(o, _.initialGroupsConsent), r = e.querySelector('input[class*="category-switch-handler"]'), i = (b.setCheckedAttribute(null, r, n), e.querySelectorAll("li" + P.P_Subgrp_li)), s = 0; s < i.length; s++) {
                    var a = C.getGroupById(i[s].getAttribute("data-optanongroupid")),
                        l = a.OptanonGroupId,
                        l = V.isGroupActive(a, l),
                        c = i[s].querySelector('input[class*="cookie-subgroup-handler"]'),
                        d = i[s].querySelector(".ot-label-status"),
                        u = e.querySelector(".ot-label-status");
                    L.PCShowConsentLabels && d && (u.innerHTML = l ? L.PCActiveText : L.PCInactiveText), b.setCheckedAttribute(null, c, l), V.resetLegIntButton(a, i[s])
                } else {
                    r = e.querySelector('input[class*="category-switch-handler"]');
                    b.setCheckedAttribute(null, r, t), V.resetLegIntButton(o, e)
                }
        }), L.IsIabEnabled && Bn.toggleVendorConsent(), this.resetGenVenUI(), this.resetGoogleVenUI(), _.vsIsActiveAndOptOut && O.resetVendorUIState(_.vsConsent)
    }, qn.prototype.resetGenVenUI = function() {
        var e = A("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (_.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("gn-vid"),
                    i = Boolean(_.genVendorsConsent[r]);
                b.setCheckedAttribute("", n, i), yo.updateGenVendorStatus(r, i)
            }
            N.genVenSelectAllTglEvent()
        }
    }, qn.prototype.resetGoogleVenUI = function() {
        var e = A("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (L.UseGoogleVendors && e && e.length)
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("addtl-vid");
                _.addtlVendorsList[r] && (r = Boolean(_.addtlVendors.vendorSelected[r]), b.setCheckedAttribute("", n, r))
            }
    }, qn.prototype.isGroupActive = function(e, t) {
        var o;
        return e.IabGrpId ? (o = void 0, o = e.Type === T.GroupTypes.Spl_Ft ? _.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? _.initialVendors.selectedLegInt : _.initialVendors.selectedPurpose, -1 !== wt.inArray(e.IabGrpId + ":true", o)) : -1 !== wt.inArray(t + ":1", _.initialGroupsConsent)
    }, qn.prototype.resetLegIntButton = function(e, t) {
        var o;
        I.legIntSettings.PAllowLI && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && I.legIntSettings.PShowLegIntBtn && (o = !0, -1 < _.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), f.updateLegIntBtnElement(t, o))
    }, qn.prototype.handleTogglesOnSingularConsentUpdate = function(e, t) {
        if (this.closeOptanonAlertBox(), e === dt)
            for (var s = this, o = 0, n = t; o < n.length; o++) {
                var r = n[o];
                ! function(e, t) {
                    for (var o = C.getGroupById(e), n = s.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                        var i = C.getGroupById(n[r].getAttribute("data-optanongroupid"));
                        if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                            w.toggleV2Category(null, i, t, i.CustomGroupId);
                            break
                        }
                        i = i.SubGroups.find(function(e) {
                            return e.OptanonGroupId === o.OptanonGroupId
                        });
                        i && w.toggleSubCategory(null, i.CustomGroupId, t, i.CustomGroupId)
                    }
                }(c = r.id, d = r.isEnabled)
            } else if (e === ht)
                for (var i = 0, a = t; i < a.length; i++) {
                    var l = a[i],
                        c = l.id,
                        d = l.isEnabled,
                        l = C.getGrpByVendorId(c);
                    l && O.toggleVendorService(l.CustomGroupId, c, d)
                }
        this.close(!1, ee.API)
    };
    var V, Mn = qn;

    function qn() {
        var n = this;
        this.iab = N, this.groupsClass = f, this.fltgBackBtnSvg = ".ot-floating-button__back svg", this.fltgFrontBtnSvg = ".ot-floating-button__front svg", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.closeOptanonAlertBox = function() {
            var e;
            y.hideBanner(), A(document).off("keydown", w.closePCWhenEscPressed), L.NtfyConfig.ShowNtfy && vn.hideSyncNtfy(), I.isOptInMode || !I.isOptInMode && !h.isAlertBoxClosedAndValid() ? (g.setAlertBoxClosed(!0), L.PCTemplateUpgrade && L.PCenterUserIdTitleText && L.IsConsentLoggingEnabled && n.updateDataSubjectTimestamp()) : h.isAlertBoxClosedAndValid() && (e = A(".onetrust-pc-dark-filter").el[0]) && "none" !== getComputedStyle(e).getPropertyValue("display") && A(".onetrust-pc-dark-filter").fadeOut(400), G.csBtnGroup && n.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || V.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (V.closeOptanonAlertBox(), v.moduleInitializer.MobileSDK) ? (window.OneTrust.Close(), [3, 5]) : [3, 1];
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Rn.getInstance().checkIfHealthSignatureNeeded()];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return t = e.sent(), console.error(t), [3, 4];
                        case 4:
                            t = _.bannerCloseSource === $.ConfirmChoiceButton ? ee.PC : ee.Banner, V.close(o, t), e.label = 5;
                        case 5:
                            return [2, !1]
                    }
                })
            })
        }, this.allowAllEventHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            A(document).off("keydown", w.shiftBannerFocus), t = o ? "Preferences Allow All" : "Banner Accept Cookies", g.triggerGoogleAnalyticsEvent(Po, t), o && I.requireSignatureEnabled && (ln.hideConsentNoticeV2(), this.closeOptanonAlertBox()), e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Rn.getInstance().checkIfHealthSignatureNeeded(!0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return t = e.sent(), console.error(t), [3, 4];
                        case 4:
                            return this.allowAllEvent(!1, o), this.hideVendorsList(), [2]
                    }
                })
            })
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), V.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1), A(document).off("keydown", w.shiftBannerFocus), g.triggerGoogleAnalyticsEvent(Po, e ? "Preferences Reject All" : "Banner Reject All"), Rn.getInstance().resetHealthSignatureData(!0), v.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (n.rejectAllEvent(!1, e), n.hideVendorsList())
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), !h.isIABCrossConsentEnabled() || I.thirdPartyiFrameLoaded ? n.rejectAll(e, t) : I.thirdPartyiFramePromise.then(function() {
                n.rejectAll(e, t)
            })
        }
    }
    zn.prototype.setFilterList = function(o) {
        var n = this,
            r = A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Option).el[0].cloneNode(!0);
        A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html(""), (v.isV2Template || L.PCLayout.Popup) && A("#onetrust-pc-sdk #filter-cancel-handler").html(L.PCenterCancelFiltersText || "Cancel"), !v.isV2Template && L.PCLayout.Popup || (A("#onetrust-pc-sdk " + P.P_Clr_Fltr_Txt).html(L.PCenterClearFiltersText), A("#filter-btn-handler").el[0].setAttribute("aria-label", L.PCenterFilterText)), A("#onetrust-pc-sdk #filter-apply-handler").html(L.PCenterApplyFiltersText), o ? I.consentableGrps.forEach(function(e) {
            var t = _.cookieListType === Ce.GenVen || _.cookieListType === Ce.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length;
            t && n.filterGroupOptionSetter(r, e, o)
        }) : I.iabGrps.forEach(function(e) {
            n.filterGroupOptionSetter(r, e, o)
        })
    }, zn.prototype.setFilterListByGroup = function(e, t) {
        var o, n = this;
        !e || e.length <= 0 ? A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html("") : (o = A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Option).el[0].cloneNode(!0), A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html(""), (v.isV2Template || L.PCLayout.Popup) && A("#onetrust-pc-sdk #filter-cancel-handler").html(L.PCenterCancelFiltersText || "Cancel"), !v.isV2Template && L.PCLayout.Popup || (A("#onetrust-pc-sdk " + P.P_Clr_Fltr_Txt).html(L.PCenterClearFiltersText), A("#filter-btn-handler").el[0].setAttribute("aria-label", L.PCenterFilterText)), A("#onetrust-pc-sdk #filter-apply-handler").html(L.PCenterApplyFiltersText), e.forEach(function(e) {
            n.filterGroupOptionSetter(o, e, t)
        }))
    }, zn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            e = e.cloneNode(!0);
        A(P.P_Fltr_Modal + " " + P.P_Fltr_Options).append(e), A(e.querySelector("input")).attr("id", r), A(e.querySelector("label")).attr("for", r), (v.isV2Template ? A(e.querySelector(P.P_Label_Txt)) : A(e.querySelector("label span"))).html(t.GroupName), A(e.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    };
    var Un, jn = zn;

    function zn() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    Jn.prototype.showParagraph = function(e) {
        var t = R({}, e),
            o = t.listTitle,
            n = t.htmlFragment,
            t = t.paragrphContainerSelector;
        Kn.options = e, Kn.hideOtherHtmlElements(e), Kn.setParagraphTitle(o), Kn.addItemListToRootElement(n, t)
    }, Jn.prototype.hideParagraphUI = function() {
        var e = R({}, Kn.options),
            t = e.showFooter;
        e.showSearchBox || (null != (e = Kn.checkboxesContainerEle) && e.classList.remove("ot-hide"), null != (e = Kn.searchInputContainerEle) && e.classList.remove("ot-hide"), null != (e = Kn.listHotsVendorsContainerEle) && e.classList.remove("ot-hide")), t || null != (e = Kn.footerButtonContainerEle) && e.classList.remove("ot-hide"), Kn.rootEle.removeChild(Kn.paragraphContainerEle)
    }, Jn.prototype.addItemListToRootElement = function(e, t) {
        var o = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_List);
        Kn.rootEle = o.querySelector(this.MAIN_CONT_ELE), Kn.rootEle.appendChild(e), Kn.paragraphContainerEle = Kn.rootEle.querySelector(t)
    }, Jn.prototype.setParagraphTitle = function(e) {
        document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title).innerHTML = e
    }, Jn.prototype.hideOtherHtmlElements = function(e) {
        var e = R({}, e),
            t = e.showFooter,
            e = e.showSearchBox,
            o = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_List),
            o = (!e && o && (Kn.checkboxesContainerEle = o.querySelector(this.SEL_BLK_ELE), Kn.searchInputContainerEle = o.querySelector(this.LST_SUBHDR_ELE), Kn.listHotsVendorsContainerEle = o.querySelector(this.SDK_ROW_ELE), null != (e = Kn.checkboxesContainerEle) && e.classList.add("ot-hide"), null != (o = Kn.searchInputContainerEle) && o.classList.add("ot-hide"), null != (e = Kn.listHotsVendorsContainerEle)) && e.classList.add("ot-hide"), document.querySelector("#onetrust-pc-sdk .ot-pc-footer .ot-btn-container"));
        !t && o && (Kn.footerButtonContainerEle = o, null != (e = Kn.footerButtonContainerEle)) && e.classList.add("ot-hide")
    };
    var Kn, Wn = Jn;

    function Jn() {
        this.SDK_ROW_ELE = ".ot-sdk-row", this.SEL_BLK_ELE = "#ot-sel-blk", this.MAIN_CONT_ELE = "#ot-lst-cnt", this.LST_SUBHDR_ELE = ".ot-lst-subhdr"
    }
    Qn.prototype.showIllustrations = function(e, t) {
        e = Yn.insertParagraphContainer(e, t), t = {
            showFooter: !1,
            showSearchBox: !1,
            listTitle: L.PCIllusText,
            htmlFragment: e,
            paragrphContainerSelector: "." + this.PARAGRAPH_CONTAINER_ELE
        };
        Kn.showParagraph(t)
    }, Qn.prototype.hideUI = function() {
        Kn.hideParagraphUI()
    }, Qn.prototype.addIllustrationsLink = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = t.IabIllustrations && 0 < t.IabIllustrations.length;
        o && r && L.PCGrpDescType === ne.UserFriendly && (o = L.PCVendorFullLegalText + "&nbsp;", (r = document.createElement("button")).classList.add("ot-link-btn"), r.classList.add("ot-pgph-link"), r.setAttribute("aria-label", L.PCVendorFullLegalText), r.setAttribute("data-parent-id", t.CustomGroupId), n ? (r.classList.add("ot-pgph-link-subgroup"), e.appendChild(r)) : (o = "&nbsp;|&nbsp" + o, e.insertAdjacentElement("afterend", r)), r.innerHTML = o)
    }, Qn.prototype.insertParagraphContainer = function(e, t) {
        var o = document.createDocumentFragment(),
            n = document.createElement("div"),
            e = (n.classList.add(this.PARAGRAPH_CONTAINER_ELE), Yn.insertPurposeTitle(e)),
            r = (n.appendChild(e), document.createElement("div"));
        return r.classList.add("ot-paragraph-lst"), t.forEach(function(e, t) {
            e = Yn.insertDescriptionElement(e, t);
            r.appendChild(e)
        }), n.appendChild(r), o.appendChild(n), o
    }, Qn.prototype.insertPurposeTitle = function(e) {
        var t = document.createElement("h4"),
            e = (t.classList.add("ot-pgph-title"), document.createTextNode(e));
        return t.appendChild(e), t
    }, Qn.prototype.insertDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        return o.setAttribute("id", "ot-pgph-desc-id-" + t), o.classList.add("ot-pgph-desc"), o.innerText = e, o
    };
    var Yn, Xn = Qn;

    function Qn() {
        this.PARAGRAPH_CONTAINER_ELE = "ot-pgph-contr"
    }
    n.prototype.insertPcHtml = function() {
        B.jsonAddAboutCookies(L);
        var t = document.createDocumentFragment(),
            e = (G.preferenceCenterGroup && (o = document.createElement("div"), A(o).html(G.preferenceCenterGroup.html), o = o.querySelector("#onetrust-pc-sdk"), B.addClassesPerConfig(o), A(t).append(o), B.manageCloseButtons(o, o = function(e) {
                return t.querySelectorAll(e)
            }, n = function(e) {
                return t.querySelector(e)
            }), L.Language && L.Language.Culture && A(n("#onetrust-pc-sdk")).attr("lang", L.Language.Culture), B.addLogos(n, o), A(n(P.P_Title)).html(L.MainText), L.PCCloseButtonType === ke.Link && L.PCTemplateUpgrade && I.pcName === st && A(n(P.P_Title)).addClass("ot-pc-title-shrink"), L.PCTemplateUpgrade && A(n(rn + ' > div[role="alertdialog"]')).css("height: 100%;"), A(n(rn + ' > div[role="alertdialog"]')).attr(this._ariaLabel, L.MainText), L.PCRegionAriaLabel && (A(n("#onetrust-pc-sdk")).attr(this._ariaLabel, L.PCRegionAriaLabel), A(n("#onetrust-pc-sdk")).attr("role", "region")), I.pcName === st && (A(n(P.P_Privacy_Txt)).html(L.AboutCookiesText), A(n(P.P_Privacy_Hdr)).html(L.AboutCookiesText)), e = '<span class="ot-tcf2-vendor-count ot-text-bold tcf2-vcount">' + I.tcf2ActiveVendors.all.toString() + "</span>", e = y.replaceTextFromString("[VENDOR_NUMBER]", L.MainInfoText, e), A(n(P.P_Policy_Txt)).html(e), B.configureLinkFields(n), B.configureSubjectDataFields(n), B.configureButtons(n, o), B.setManagePreferenceText(n), B.initializePreferenceCenterGroups(n, t), B.removeListsWhenAppropriate(n), L.PCTemplateUpgrade) && B.setOptOutSignalNotification(n), document.createElement("iframe")),
            o = (e.setAttribute("class", "ot-text-resize"), e.setAttribute("sandbox", "allow-same-origin"), e.setAttribute("title", "onetrust-text-resize"), d(e, "position: absolute; top: -50000px; width: 100em;"), e.setAttribute(this._ariaHidden, "true"), A(t.querySelector("#onetrust-pc-sdk")).append(e), document.getElementById("onetrust-consent-sdk")),
            n = (A(o).append(t), I.ignoreInjectingHtmlCss || A(document.body).append(o), (L.showCookieList || _.showGeneralVendors) && fn.InitializeHostList(), P.P_Vendor_List + " " + P.P_Host_Cntr + " li"),
            e = A(n).el[0];
        e && b.removeChild(e)
    }, n.prototype.addClassesPerConfig = function(e) {
        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || A(e).addClass("ot-sdk-not-webkit"), L.useRTL && A(e).attr("dir", "rtl"), I.legIntSettings.PAllowLI && I.isIab2orv2Template && (A(e).addClass("ot-leg-opt-out"), I.legIntSettings.PShowLegIntBtn) && A(e).addClass("ot-leg-btn"), L.BannerRelativeFontSizesToggle && A(e).addClass("otRelFont"), L.PCShowConsentLabels && A(e).addClass("ot-tgl-with-label"), (L.UseGoogleVendors || _.showGeneralVendors) && A(e).addClass("ot-addtl-vendors"), "right" === L.PreferenceCenterPosition && A(e).addClass(L.useRTL ? "right-rtl" : "right")
    }, n.prototype.manageCloseButtons = function(e, t, o) {
        var n = A(t(P.P_Close_Btn)).el;
        if (L.ShowPreferenceCenterCloseButton) {
            L.CloseText || (L.CloseText = "Close Preference Center");
            for (var r = 0, i = n; r < i.length; r++) {
                var s = i[r];
                L.PCCloseButtonType === ke.Link && L.PCTemplateUpgrade ? (A(s).html(L.PCContinueText), A(e).addClass("ot-close-btn-link"), A(s).el.removeAttribute(this._ariaLabel)) : (A(s).el.setAttribute(this._ariaLabel, L.CloseText), y.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
            }
        } else
            for (var a = 0; a < n.length; a++) A(n[a].parentElement).el.removeChild(n[a])
    }, n.prototype.addLogos = function(e, t) {
        var o, n, e = e(P.P_Logo);
        e && L.optanonLogo && (o = y.updateCorrectUrl(L.optanonLogo), y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = b.getRelativeURL(o, !0, !0)), (n = document.createElement("img")).setAttribute("alt", L.PCLogoAria), n.setAttribute("src", o), e.append(n), L.PCLogoAria) && A(e).attr(this._ariaLabel, L.PCLogoAria), y.insertFooterLogo(t(".ot-pc-footer-logo a"))
    }, n.prototype.configureLinkFields = function(e) {
        var t;
        L.AboutText && A(e(P.P_Policy_Txt)).html(A(e(P.P_Policy_Txt)).html() + '\n            <br/><a href="' + L.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + L.PCCookiePolicyLinkScreenReader + '">' + L.AboutText + "</a>"), L.PCenterImprintLinkText && (L.AboutText || e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>"), (t = document.createElement("a")).classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = L.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, L.PCenterImprintLinkScreenReader), t.setAttribute("href", L.PCenterImprintLinkUrl), t.setAttribute("rel", "noopener"), t.setAttribute("target", "_blank"), e(P.P_Policy_Txt).appendChild(t)), L.PCenterVendorListLinkText && (t = !L.IsIabEnabled && _.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler", e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + t + '" aria-label="' + L.PCenterVendorListLinkAriaLabel + '">\n            ' + L.PCenterVendorListLinkText + "\n            </button>"))
    }, n.prototype.configureSubjectDataFields = function(e) {
        var t;
        L.PCTemplateUpgrade && L.PCenterUserIdTitleText && L.IsConsentLoggingEnabled && (t = k.readCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID), e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + L.PCenterUserIdTitleText + ": </span> " + t + "</div>"), L.PCenterUserIdDescriptionText && e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + L.PCenterUserIdDescriptionText + "</div>"), L.PCenterUserIdTimestampTitleText) && (t = (t = k.getCookie(S.ALERT_BOX_CLOSED)) && y.getUTCFormattedDate(t) || L.PCenterUserIdNotYetConsentedText, e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + L.PCenterUserIdTimestampTitleText + ": </span> " + t + "</div>"))
    }, n.prototype.setManagePreferenceText = function(e) {
        var e = e(P.P_Manage_Cookies_Txt),
            t = A(e);
        e && (t.html(L.ManagePreferenceText), L.ManagePreferenceText || t.attr(this._ariaHidden, !0))
    }, n.prototype.configureButtons = function(e, t) {
        L.ConfirmText.trim() ? A(e("#accept-recommended-btn-handler")).html(L.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
        for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) A(o[n]).html(L.AllowAllText);
        var r = t(".ot-pc-refuse-all-handler");
        if (L.PCenterShowRejectAllButton && L.PCenterRejectAllButtonText.trim())
            for (n = 0; n < r.length; n++) A(r[n]).html(L.PCenterRejectAllButtonText);
        else b.removeChild(r)
    }, n.prototype.removeListsWhenAppropriate = function(e) {
        var t;
        L.IsIabEnabled || (t = e(P.P_Vendor_Container)) && t.parentElement.removeChild(t), L.showCookieList || _.showGeneralVendors || (t = e(P.P_Host_Cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        A(r).html(t), A(r).attr("id", o), I.pcName === st && (e.querySelector(P.P_Category_Header).innerHTML = t, e.querySelector("" + P.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }, n.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0,
            r = (-1 < _.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1), h.generateLegIntButtonElements(r, t.OptanonGroupId)),
            t = (o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r), e.querySelector(".ot-remove-objection-handler"));
        t && d(t, t.getAttribute("data-style"))
    }, n.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var i = f.safeFormattedGroupDescription(t),
            s = e.querySelector("p:not(.ot-always-active)"),
            a = e.querySelector(P.P_Acc_Grp_Desc),
            s = s || a;
        return -1 < At.indexOf(t.Type) && o.PCGrpDescType === ne.Legal ? i = t.DescriptionLegal : s.classList.add("ot-category-desc"), I.legIntSettings.PAllowLI && !I.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? s.parentElement.classList.add("ot-leg-border-color") : b.removeChild(e.querySelector(P.P_Li_Hdr))), I.pcName !== st && s.setAttribute("id", n), A(s).html(i), t.Type === T.GroupTypes.Stack && b.removeChild(s), s
    }, n.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        E.toggleEl = A(e(".ot-tgl")).el.cloneNode(!0), E.arrowEl = A(e('#onetrust-pc-sdk [role="alertdialog"] > ' + P.P_Arrw_Cntr)).el.cloneNode(!0), E.subGrpEl = A(e(P.P_Sub_Grp_Cntr)).el.cloneNode(!0), E.vListEl = A(e(P.P_Ven_Lst_Cntr)).el.cloneNode(!0), E.cListEl = A(e(P.P_Host_Lst_cntr)).el.cloneNode(!0), E.chkboxEl = A(e(P.P_CBx_Cntr)).el.cloneNode(!0), E.accordionEl = A(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(I.pcName) && (E.plusMinusEl = A(e(".ot-plus-minus")).el.cloneNode(!0)), b.removeChild(e(".ot-tgl")), b.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + P.P_Arrw_Cntr)), b.removeChild(e(P.P_Sub_Grp_Cntr)), b.removeChild(e(P.P_Ven_Lst_Cntr)), b.removeChild(e(P.P_Host_Lst_cntr)), b.removeChild(e(P.P_CBx_Cntr)), b.removeChild(e(".ot-acc-cntr")), t.test(I.pcName) && b.removeChild(e(".ot-plus-minus"))
    }, n.prototype.insertSelectAllEls = function(e) {
        var e = e(P.P_Select_Cntr + " .ot-sel-all-chkbox"),
            t = _.showVendorService ? Nn() : E.chkboxEl.cloneNode(!0),
            t = (t.id = P.P_Sel_All_Host_El, t.querySelector("input").id = "select-all-hosts-groups-handler", t.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), A(e).append(t), _.showVendorService ? Nn() : E.chkboxEl.cloneNode(!0)),
            t = (t.id = P.P_Sel_All_Vendor_Consent_El, t.querySelector("input").id = "select-all-vendor-groups-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), A(e).append(t), _.showVendorService ? Nn() : E.chkboxEl.cloneNode(!0));
        t.id = P.P_Sel_All_Vendor_Leg_El, t.querySelector("input").id = "select-all-vendor-leg-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), A(e).append(t)
    }, n.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o, n = I.pcName,
            r = (v.isV2Template && (B.cloneOtHtmlEls(e), (r = E.chkboxEl.cloneNode(!0)).querySelector("input").classList.add("category-filter-handler"), A(e(P.P_Fltr_Modal + " " + P.P_Fltr_Option)).append(r), B.insertSelectAllEls(e)), A(e("#onetrust-pc-sdk " + P.P_Category_Grp))),
            i = (n === ot || n === rt || n === nt ? L.PCenterEnableAccordion ? b.removeChild(r.el.querySelector(P.P_Category_Item + ":not(.ot-accordion-layout)")) : b.removeChild(r.el.querySelector(P.P_Category_Item + ".ot-accordion-layout")) : n === st && (L.PCenterEnableAccordion = !1), e("#onetrust-pc-sdk " + P.P_Category_Item)),
            s = v.isV2Template ? E.subGrpEl.cloneNode(!0) : A(e(P.P_Sub_Grp_Cntr)),
            a = v.isV2Template ? null : A(e(P.P_Acc_Container + " " + P.P_Sub_Grp_Cntr));
        L.PCTemplateUpgrade && /otPcTab/.test(n) && (o = e(".ot-abt-tab").cloneNode(!0), b.removeChild(e(".ot-abt-tab"))), r.el.removeChild(i), B.setVendorListClass(e, i), B.setPCHeader(e, i), B.createHtmlForEachGroup({
            fm: e,
            fragment: t,
            categoryGroupTemplate: i,
            cookiePreferencesContainer: r,
            popupSubGrpContainer: a,
            subGrpContainer: s
        }), B.setPcTabLayout(e, t, o)
    }, n.prototype.getActiveVendorCount = function(e) {
        var t = parseInt(e.IabGrpId),
            o = 0;
        return e.Type === T.GroupTypes.Pur ? o = I.tcf2ActiveVendors.pur.get(t) : e.Type === T.GroupTypes.Ft ? o = I.tcf2ActiveVendors.ft.get(t) : e.Type === T.GroupTypes.Spl_Pur ? o = I.tcf2ActiveVendors.spl_pur.get(t) : e.Type === T.GroupTypes.Spl_Ft && (o = I.tcf2ActiveVendors.spl_ft.get(t)), o || 0
    }, n.prototype.getActiveVendorCountForStack = function(e) {
        return I.tcf2ActiveVendors.stack.get(e) || 0
    }, n.prototype.getVendorCountEl = function(e, t) {
        var o = "[VENDOR_NUMBER]",
            n = "";
        switch (t) {
            case St:
                n = L.PCVendorsCountFeatureText;
                break;
            case vt:
                n = L.PCVendorsCountSpcFeatureText;
                break;
            case mt:
                n = L.PCVendorsCountSpcPurposeText;
                break;
            default:
                n = L.PCVendorsCountText
        }
        return n && -1 < n.indexOf(o) ? '<span class="ot-pur-vdr-count"> ' + n.replace(o, e.toString()) + " </span>" : ""
    }, n.prototype.createHtmlForEachGroup = function(e) {
        var t = e.fm,
            o = e.fragment,
            n = e.categoryGroupTemplate,
            r = e.cookiePreferencesContainer,
            i = e.popupSubGrpContainer,
            s = e.subGrpContainer,
            e = L.Groups.filter(function(e) {
                return e.Order
            }),
            a = 0 === r.el.children.length;
        L.PCTemplateUpgrade && (_.showVendorService ? O.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : O.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
        for (var l = 0, c = e; l < c.length; l++) {
            var d = c[l],
                u = d.GroupName,
                p = d.CustomGroupId,
                u = B.appendVendorCountElement(d, u),
                h = n.cloneNode(!0),
                h = A(h).el,
                g = "ot-group-id-" + p,
                C = "ot-header-id-" + p,
                y = "ot-desc-id-" + p,
                f = "",
                p = (d.Status === m.ALWAYS_ACTIVE && (f = " ot-status-id-" + p), h.setAttribute("data-optanongroupid", p), h.querySelector("input,button")),
                p = (p && (p.setAttribute("aria-controls", y), p.setAttribute("aria-labelledby", C + f)), B.setParentGroupName(h, u, C, y), B.setPopupData(d, h), B.setParentGroupDescription(h, d, L, y, g)),
                f = (v.isV2Template ? B.setToggle(h, p, d, g, C) : B.setToggleProps(h, p, d, g, C), !!t("#onetrust-pc-sdk " + P.P_Category_Grp).querySelector(P.P_Category_Item)),
                u = (u = r.el.querySelectorAll(P.P_Category_Item + ":not(.ot-vnd-item)"))[u.length - 1],
                y = (a ? r.append(h) : f ? wt.insertAfter(h, u) : wt.insertAfter(h, r.el.querySelector(P.P_Li_Hdr) || r.el.querySelector("h3")), B.setSubGroupData(d, h, i, s), L.PCGrpDescLinkPosition === re.Top),
                g = (d.Type === T.GroupTypes.Stack && y && (p = h.querySelector(P.P_Sub_Grp_Cntr)), y ? p : null);
            B.setVendorListBtn(h, t, o, d, g, L), B.setHostListBtn(h, t, o, d), B.setVendorServiceData(d, h), B.appendHealthSignatureFormToGroup(d, h), _.dataGroupState.push(d)
        }
    }, n.prototype.appendHealthSignatureFormToGroup = function(e, t) {
        var o;
        I.requireSignatureEnabled && e.needsHealthSignature && (o = P.P_Acc_Container, L.PCLayout.Tab && (o = "#ot-desc-id-" + e.CustomGroupId), t = t.querySelector(o), Rn.getInstance().getHealthSignatureComponent(t, e))
    }, n.prototype.appendVendorCountElement = function(e, t) {
        var o, n, r = -1 < e.SubGroups.findIndex(function(e) {
            return e.IsIabPurpose
        });
        return I.isTcfV2Template && (e.IsIabPurpose || r) && (n = void 0, n = e.Type !== T.GroupTypes.Stack && e.Type !== T.GroupTypes.Bundle ? this.getActiveVendorCount(e) : (o = "", o = !e.IsIabPurpose && r ? e.CustomGroupId : e.IabGrpId, this.getActiveVendorCountForStack(o)), t += this.getVendorCountEl(n, e.Type)), t
    }, n.prototype.setPopupData = function(e, t) {
        I.pcName === it && (e.ShowVendorList && I.isIab2orv2Template ? (b.removeChild(t.querySelector("p:not(.ot-always-active)")), b.removeChild(t.querySelector(P.P_Acc_Txt + ":not(" + P.P_Acc_Container + ")")), e.SubGroups.length || v.isV2Template || b.removeChild(t.querySelector(P.P_Sub_Grp_Cntr))) : b.removeChild(t.querySelector(P.P_Acc_Container)))
    }, n.prototype.setVendorServiceData = function(e, t) {
        var o, n = I.pcName;
        _.showVendorService && L.VendorServiceConfig.PCVSCategoryView && (o = P.P_Acc_Txt, n === st && (o = P.P_Desc_Container), n = t.querySelector(o), L.PCAccordionStyle === le.NoAccordion && (n = t), O.insertVendorServiceHtml(e, n))
    }, n.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
    }, n.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
        var s, a, l = I.pcName;
        n.ShowVendorList ? (s = a = void 0, v.isV2Template ? a = (s = E.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : s = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, L.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), B.setIABLegalLink(a, n, i), v.isV2Template && (a = e, l === st ? a = e.querySelector("" + P.P_Desc_Container) : i.PCenterEnableAccordion && (a = e.querySelector(P.P_Acc_Txt)), a.insertAdjacentElement("beforeend", s)), r && r.insertAdjacentElement("beforebegin", s)) : v.isV2Template || (l !== rt && l !== ot || i.PCenterEnableAccordion ? (l === it || l === rt || l === ot && i.PCenterEnableAccordion) && (n = t("#vendor-list-container"), a = e.querySelector(P.P_Acc_Txt), n && o.querySelector("" + P.P_Content).removeChild(n), v.isV2Template || A(a).el.removeChild(a.querySelector(P.P_Ven_Lst_Cntr))) : b.removeChild(e.querySelector(P.P_Ven_Lst_Cntr)), l !== st && l !== nt) || (r = e.querySelector(P.P_Ven_Lst_Cntr)) && r.parentElement.removeChild(r)
    }, n.prototype.setIABLegalLink = function(e, t, o) {
        I.isTcfV2Template ? Yn.addIllustrationsLink(e, t, t.ShowVendorList) : o.PCGrpDescType === ne.UserFriendly && (e.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), e.insertAdjacentHTML("afterend", "<a href='" + L.IabLegalTextUrl + "?lang=" + _.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + o.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + L.NewWinTxt + "</span></a>"))
    }, n.prototype.setHostListBtn = function(e, t, o, n) {
        var r, i = I.pcName,
            s = !1,
            a = (L.showCookieList && (s = -1 < b.findIndex(M(n.SubGroups, [n]), function(e) {
                return -1 === kt.indexOf(e.Type) && e.FirstPartyCookies.length
            })), _.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length);
        !_.showVendorService && (L.showCookieList || _.showGeneralVendors) && (n.ShowHostList || s || a) ? (s = void 0, v.isV2Template ? (s = (a = E.cListEl.cloneNode(!0)).querySelector(".category-host-list-handler"), r = e, i === st ? r = e.querySelector("" + P.P_Desc_Container) : L.PCenterEnableAccordion && (r = e.querySelector(P.P_Acc_Txt)), r.insertAdjacentElement("beforeend", a)) : s = e.querySelector(".category-host-list-handler"), B.setcListHandler(s, n)) : B.setHostListVendorList(t, o, e)
    }, n.prototype.setcListHandler = function(e, t) {
        var o, n;
        e && (o = (n = B.setcListHeaderTitleAndScreenReader())[0], n = n[1], e.innerHTML = o + "&#x200E;", e.setAttribute(this._ariaLabel, n), e.setAttribute("data-parent-id", t.CustomGroupId))
    }, n.prototype.setcListHeaderTitleAndScreenReader = function() {
        var e, t = _.showTrackingTech ? (e = L.AdditionalTechnologiesConfig.PCTechDetailsText, L.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : _.showGeneralVendors ? (e = L.GroupGenVenListLabel, L.PCenterVendorListScreenReader) : (e = L.ThirdPartyCookieListText, L.PCOpensCookiesDetailsAlert);
        return [e, t]
    }, n.prototype.setHostListVendorList = function(e, t, o) {
        var n;
        I.pcName === it ? (e = e("#vendor-list-container"), n = o.querySelector(P.P_Acc_Txt), e && t.querySelector("" + P.P_Content).removeChild(e), n.querySelector(P.P_Host_Lst_cntr) && A(n).el.removeChild(n.querySelector(P.P_Host_Lst_cntr))) : (t = o.querySelector(P.P_Host_Lst_cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setSubGroupData = function(e, t, o, n) {
        var r;
        0 < e.SubGroups.length && e.ShowSubgroup && (r = I.pcName === it && e.ShowVendorList && I.isIab2orv2Template && !L.PCTemplateUpgrade, B.setSubGrps(e, r ? o : n, t, L))
    }, n.prototype.setSubGrps = function(t, o, n, r) {
        var e;
        I.pcName === it && t.ShowVendorList && I.isIab2orv2Template && !L.PCTemplateUpgrade && (e = n.querySelector(P.P_Sub_Grp_Cntr)).parentElement.removeChild(e), t.SubGroups.forEach(function(e) {
            B.setSubGroups({
                group: t,
                subgroup: e,
                grpEl: n,
                subGrpEl: o,
                json: r
            })
        })
    }, n.prototype.setSubGroups = function(e) {
        var t, o = e.group,
            n = e.subgroup,
            r = e.grpEl,
            i = e.subGrpEl,
            e = e.json,
            s = I.pcName,
            a = B.getRemoveConsentToggle(n),
            i = (v.isV2Template ? i : i.el).cloneNode(!0),
            l = i.querySelector(P.P_Subgp_ul),
            c = i.querySelector(P.P_Subgrp_li).cloneNode(!0),
            d = n.CustomGroupId,
            u = "ot-sub-group-id-" + d,
            p = C.getGrpStatus(n).toLowerCase(),
            h = c.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
            g = c.querySelector(P.P_Tgl_Cntr),
            d = (c.setAttribute("data-optanongroupid", d), v.isV2Template ? ((t = B.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", d), t.querySelector("input").classList.add("cookie-subgroup-handler"), t = t.cloneNode(!0), g.insertAdjacentElement("beforeend", t)) : (t = c.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", d), A(i.querySelector(P.P_Subgp_ul)).html(""), B.addSubgroupName(n, h), B.setDataIfVendorServiceEnabled(h, c, t), t.querySelector("input").setAttribute("id", u), t.querySelector("input").setAttribute(this._ariaLabel, n.GroupName), t.querySelector("label").setAttribute("for", u), B.setSubGroupDescription({
                json: e,
                group: o,
                subgroup: n,
                subGroupClone: c
            }), I.isTcfV2Template && Yn.addIllustrationsLink(c, n, o.ShowVendorList, !0), M(Pt, bt));
        o.ShowSubgroupToggle && -1 < d.indexOf(n.Type) ? B.setSubGroupToggle({
            id: u,
            subGroupClone: c,
            group: o,
            subgroup: n,
            toggleGroup: g
        }) : p === m.ALWAYS_ACTIVE && (o.ShowSubgroupToggle || -1 === Tt.indexOf(n.Type)) || (a = !0), B.setSubGroupsProperties({
            removeConsentToggle: a,
            subGroupToggle: t,
            subGroupClone: c,
            status: p,
            subgroup: n,
            grpEl: r,
            pcName: s,
            json: e,
            subGrpElClone: i,
            ulParentContainerEle: l
        })
    }, n.prototype.getRemoveConsentToggle = function(e) {
        var t = !1;
        return t = I.isIab2orv2Template && e.Type === T.GroupTypes.Pur && !e.HasConsentOptOut ? !0 : t
    }, n.prototype.addSubgroupName = function(e, t) {
        var o, n = e.GroupName;
        I.isTcfV2Template && e.IsIabPurpose && (o = this.getActiveVendorCount(e), n += this.getVendorCountEl(o, e.Type)), A(t).html(n)
    }, n.prototype.setDataIfVendorServiceEnabled = function(e, t, o) {
        var n;
        _.showVendorService && ((n = document.createElement("div")).classList.add("ot-acc-hdr"), e.classList.add("ot-cat-header"), n.appendChild(e), e = "afterbegin", L.PCCategoryStyle === Se.Toggle && (e = "beforeend"), n.insertAdjacentElement(e, o), t.removeChild(t.querySelector(P.P_Subgrp_Tgl_Cntr)), t.insertAdjacentElement("afterbegin", n))
    }, n.prototype.setSubGroupDescription = function(e) {
        var t, o = e.json,
            n = e.group,
            r = e.subgroup,
            e = e.subGroupClone,
            i = I.pcName,
            s = o.PCGrpDescType === ne.Legal,
            i = i === it && n.ShowVendorList && I.isIab2orv2Template,
            a = A(e.querySelector(P.P_Subgrp_Desc));
        i ? (t = r.DescriptionLegal && s ? r.DescriptionLegal : r.GroupDescription, a.html(t)) : (t = f.safeFormattedGroupDescription(r), i = !1, -1 < At.indexOf(r.Type) && s && (i = !0, t = r.DescriptionLegal), o.PCenterEnableAccordion && i || (a = A(e.querySelector("p"))), n.ShowSubGroupDescription ? a.html(t) : a.html(""))
    }, n.prototype.setSubGroupToggle = function(e) {
        var t = e.id,
            o = e.subGroupClone,
            n = e.group,
            r = e.subgroup,
            e = e.toggleGroup,
            i = f.isGroupActive(r),
            n = (B.setSubGroupActive({
                group: n,
                subgroup: r,
                subGroupClone: o
            }, i), e.querySelector(".ot-label-status"));
        L.PCShowConsentLabels ? n.innerHTML = i ? L.PCActiveText : L.PCInactiveText : b.removeChild(n), I.legIntSettings.PAllowLI && r.Type === T.GroupTypes.Pur && r.HasLegIntOptOut && (I.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(o, r) : (i = e.cloneNode(!0), e.insertAdjacentElement("afterend", i), n = i.querySelector(".ot-label-status"), (o = i.querySelector("input")).setAttribute("id", t + "-leg-out"), i.querySelector("label").setAttribute("for", t + "-leg-out"), r.IsLegIntToggle = !0, e = f.isGroupActive(r), L.PCShowConsentLabels ? n.innerHTML = e ? L.PCActiveText : L.PCInactiveText : b.removeChild(n), b.setCheckedAttribute(null, o, e), r.IsLegIntToggle = !1))
    }, n.prototype.setSubGroupActive = function(e, t) {
        var o;
        t && (t = e.group, o = e.subgroup, e = e.subGroupClone, t = C.getGrpStatus(t).toLowerCase(), e.querySelector("input").setAttribute("checked", ""), t === m.ALWAYS_ACTIVE) && -1 === At.indexOf(o.Type) && (e.querySelector("input").disabled = !0, e.querySelector("input").setAttribute("disabled", "true"))
    }, n.prototype.setSubGroupsProperties = function(e) {
        var t = e.removeConsentToggle,
            o = e.subGroupToggle,
            n = e.subGroupClone,
            r = e.status,
            i = e.subgroup,
            s = e.grpEl,
            a = e.pcName,
            l = e.json,
            c = e.subGrpElClone,
            e = e.ulParentContainerEle;
        t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(this._ariaHidden, "true")), r !== m.ALWAYS_ACTIVE && r !== m.ALWAYS_INACTIVE || t || (o && o.parentElement.removeChild(o), (t = n.querySelector(P.P_Tgl_Cntr)) && t.classList.add("ot-always-active-subgroup"), B.setAlwaysActive(n, !0, r === m.ALWAYS_INACTIVE)), "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && d(c, "display: none;"), A(e).append(n), v.isV2Template ? (o = s, "otPcTab" === a ? o = s.querySelector("" + P.P_Desc_Container) : l.PCenterEnableAccordion && (o = s.querySelector(P.P_Acc_Txt)), o.insertAdjacentElement("beforeend", c)) : (t = s.querySelector(P.P_Category_Item + " " + P.P_Ven_Lst_Cntr)) && t.insertAdjacentElement("beforebegin", c), _.showVendorService && L.VendorServiceConfig.PCVSCategoryView && O.insertVendorServiceHtml(i, e)
    }, n.prototype.getInputEleForCategory = function(e) {
        return _.showVendorService && L.PCCategoryStyle === Se.Checkbox && e.classList.add("ot-checkbox-consent"), B.getInputEle()
    }, n.prototype.getInputEle = function() {
        return !I.isIab2orv2Template && L.PCTemplateUpgrade ? Nn() : E.toggleEl.cloneNode(!0)
    }, n.prototype.setToggle = function(e, t, o, n, r) {
        var i = B.getInputEleForCategory(e),
            s = (i.querySelector("input").classList.add("category-switch-handler"), i.querySelector("input")),
            a = e.querySelector(P.P_Category_Header),
            l = f.isGroupActive(o),
            c = [m.ALWAYS_ACTIVE, m.ALWAYS_INACTIVE].includes(C.getGrpStatus(o).toLowerCase()),
            d = o.OptanonGroupId.toString(),
            u = T.GroupTypes,
            p = !0;
        !I.isIab2orv2Template || o.Type !== u.Pur && o.Type !== u.Stack || o.HasConsentOptOut || (p = !1), A(i.querySelector("label")).attr("for", n), A(i.querySelector(".ot-label-txt")).html(o.GroupName), A(i.querySelector(".ot-switch-nob")).attr("aria-label", o.GroupName);
        I.legIntSettings.PAllowLI && o.Type === u.Pur && o.HasLegIntOptOut && (I.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (u = i.cloneNode(!0), o.IsLegIntToggle = !0, t = f.isGroupActive(o), h = u.querySelector(".ot-label-status"), L.PCShowConsentLabels ? h.innerHTML = t ? L.PCActiveText : L.PCInactiveText : b.removeChild(h), o.IsLegIntToggle = !1, f.setInputID(u.querySelector("input"), n + "-leg-out", d, t, r), A(u.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", u)));
        var h = i.querySelector(".ot-label-status"),
            d = (L.PCShowConsentLabels ? h.innerHTML = l ? L.PCActiveText : L.PCInactiveText : b.removeChild(h), L.PCCategoryStyle === Se.Toggle);
        this.hideToggleContainer(c, p, d, i), p && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), B.setNoAccordionHeader(e, c)
    }, n.prototype.setNoAccordionHeader = function(e, t) {
        var o, n, r, i;
        !I.isIab2orv2Template && L.PCTemplateUpgrade && (o = L.PCCategoryStyle === Se.Checkbox, L.PCAccordionStyle === le.NoAccordion) && o && ((o = document.createElement("div")).classList.add("ot-acc-hdr"), n = e.querySelector(".ot-chkbox"), r = e.querySelector(".ot-always-active"), i = e.querySelector(P.P_Category_Header), n && o.appendChild(n), o.appendChild(i), t && o.appendChild(r), e.insertBefore(o, e.firstChild))
    }, n.prototype.hideToggleContainer = function(e, t, o, n) {
        !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
    }, n.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
        var s = "always active" === C.getGrpStatus(e).toLowerCase(),
            a = "always inactive" === C.getGrpStatus(e).toLowerCase(),
            l = L.PCCategoryStyle === Se.Toggle,
            c = e.OptanonGroupId.toString(),
            e = f.isGroupActive(e),
            d = t.querySelector(P.P_Category_Header);
        !I.isIab2orv2Template && L.PCTemplateUpgrade ? ((s || a) && L.PCShowAlwaysActiveToggle && (B.setAlwaysActive(t, !1, a), o.querySelector("input").setAttribute("disabled", "true")), s && l || B.insertAccordionInputHeader(d, o), f.setInputID(n, r, c, e, i), B.insertAccordionPointer(t, d)) : (B.insertAccordionPointer(t, d), s || a ? L.PCShowAlwaysActiveToggle && B.setAlwaysActive(t, !1, a) : (B.insertAccordionInputHeader(d, o), f.setInputID(n, r, c, e, i)))
    }, n.prototype.setOptOutSignalVisibility = function(e) {
        var t = I.gpcEnabled && I.gpcForAGrpEnabled,
            o = h.isAlertBoxClosedAndValid() && f.isAnyGroupOptedOut();
        L.PCShowOptOutSignal && (t || o || I.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
    }, n.prototype.setOptOutSignalNotification = function(e) {
        e = y.createOptOutSignalElement(e, !0);
        B.setOptOutSignalVisibility(e)
    }, n.prototype.insertAccordionInputHeader = function(e, t) {
        var o = B.getPositionForInputEle();
        e.insertAdjacentElement(o, t)
    }, n.prototype.getPositionForInputEle = function() {
        var e = "beforebegin";
        return e = !I.isIab2orv2Template && L.PCTemplateUpgrade && L.PCCategoryStyle !== Se.Toggle ? e : "afterend"
    }, n.prototype.insertAccordionPointer = function(e, t) {
        var o, n;
        e.classList.add("ot-vs-config"), L.PCenterEnableAccordion && (!I.isIab2orv2Template && L.PCTemplateUpgrade ? (e = e.querySelector(P.P_Acc_Header), o = n = void 0, n = (L.PCAccordionStyle === le.Caret ? (o = "beforeend", E.arrowEl) : (o = L.PCCategoryStyle === Se.Checkbox ? "beforeend" : "afterbegin", E.plusMinusEl)).cloneNode(!0), e.insertAdjacentElement(o, n)) : L.PCAccordionStyle === le.Caret ? t.insertAdjacentElement("afterend", E.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)))
    }, n.prototype.setToggleProps = function(e, t, o, n, r) {
        var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
            s = e.querySelectorAll("label"),
            a = f.isGroupActive(o),
            l = o.CustomGroupId,
            c = e.querySelector(".label-text");
        c && A(c).html(o.GroupName);
        for (var d, u, p, h, g = 0; g < i.length; g++) s[g] && A(s[g]).attr("for", n), 2 <= i.length && 0 === g ? A(i[g]).attr("id", n + "-toggle") : (d = this.canShowConsentToggle(o), this.canShowLegIntToggle(o) && (I.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (h = (u = e.querySelector(P.P_Tgl_Cntr + ":not(" + P.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")).cloneNode(!0), u.insertAdjacentElement("afterend", h), u = h.querySelector("input"), o.IsLegIntToggle = !0, p = f.isGroupActive(o), o.IsLegIntToggle = !1, f.setInputID(u, n + "-leg-out", l, p, r), A(h.querySelector("label")).attr("for", n + "-leg-out"), b.removeChild(h.querySelector(P.P_Arrw_Cntr)))), u = C.getGrpStatus(o).toLowerCase() === m.ALWAYS_ACTIVE, p = C.getGrpStatus(o).toLowerCase() === m.ALWAYS_INACTIVE, !u && d || (h = i[g].closest(".ot-toggle")) && (h.classList.add("ot-hide-tgl"), h.querySelector("input").setAttribute(this._ariaHidden, !0)), d && (u && B.setAlwaysActive(e, !1, p), f.setInputID(i[g], n, l, a, r)))
    }, n.prototype.canShowConsentToggle = function(e) {
        var t = !0,
            o = T.GroupTypes;
        return t = !I.isIab2orv2Template || e.Type !== o.Pur && e.Type !== o.Stack || e.HasConsentOptOut ? t : !1
    }, n.prototype.canShowLegIntToggle = function(e) {
        var t = T.GroupTypes;
        return I.legIntSettings.PAllowLI && e.Type === t.Pur && e.HasLegIntOptOut
    }, n.prototype.setAlwaysActive = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        var n, r = I.pcName;
        r === it || r === st || t ? (r = e.querySelector(P.P_Tgl_Cntr)) && r.insertAdjacentElement("afterbegin", A("<div class='ot-always-active'>" + (o ? L.AlwaysInactiveText : L.AlwaysActiveText) + "</div>", "ce").el) : (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(P.P_Category_Header)).id) ? void 0 : n.split("-")[3]), !v.isV2Template && L.PCenterEnableAccordion && (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(P.P_Arrw_Cntr)).id) ? void 0 : n.split("-")[3])), A(t).el.insertAdjacentElement("afterend", A('<div id="' + r + "\" class='ot-always-active'>" + (o ? L.AlwaysInactiveText : L.AlwaysActiveText) + "</div>", "ce").el)), L.PCenterEnableAccordion ? (n = e.querySelector(P.P_Acc_Header)) && n.classList.add("ot-always-active-group") : ((t = e.querySelector("" + P.P_Desc_Container)) && t.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group"))
    }, n.prototype.setPcTabLayout = function(e, t, o) {
        var n = e(".ot-tab-desc");
        "otPcTab" === I.pcName && (o && e("#onetrust-pc-sdk " + P.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && A(n).append(t.querySelectorAll("#onetrust-pc-sdk " + P.P_Desc_Container)), L.IsIabEnabled ? e(P.P_Desc_Container + " .category-vendors-list-handler").innerHTML = L.VendorListText + "&#x200E;" : (o = e(P.P_Desc_Container + " .category-vendors-list-handler")) && o.parentElement.removeChild(o))
    }, n.prototype.setVendorListClass = function(e, t) {
        v.isV2Template ? L.PCAccordionStyle === le.Caret && (A(e("#onetrust-pc-sdk " + P.P_Vendor_List)).addClass("ot-enbl-chr"), L.PCenterEnableAccordion) && A(e("#onetrust-pc-sdk " + P.P_Content)).addClass("ot-enbl-chr") : A(t.querySelector(P.P_Sub_Grp_Cntr)).remove()
    }, n.prototype.setPCHeader = function(e, t) {
        var o = I.pcName,
            n = e(P.P_Li_Hdr) || t.querySelector(P.P_Li_Hdr);
        I.legIntSettings.PAllowLI && I.grpContainLegalOptOut && I.isIab2orv2Template && !I.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = L.ConsentText, n.querySelector("span:last-child").innerText = L.LegitInterestText, v.isV2Template && (n.querySelector("span:first-child").innerText = L.PCenterConsentText, n.querySelector("span:last-child").innerText = L.PCenterLegIntColumnHeader), L.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (b.removeChild(e("#onetrust-pc-sdk " + P.P_Li_Hdr)), b.removeChild(t.querySelector(P.P_Li_Hdr)))
    };
    var B, Zn = n;

    function n() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }
    tr.prototype.showBanner = function() {
        var e = I.bannerName,
            t = A(this.El);
        _.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== Xe && e !== Ye && e !== $e ? t.css("display: block;") : L.BAnimation === ve.SlideIn ? this.slideInAnimation(t, e) : L.BAnimation === ve.FadeIn && t.addClass("ot-fade-in")
    }, tr.prototype.insertAlertHtml = function() {
        L.IsGPPEnabled && $r.setCmpDisplayStatus("visible");

        function e(e) {
            return t.querySelector(e)
        }
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            o = (A(o).html(G.bannerGroup.html), o.querySelector("#onetrust-banner-sdk"));
        this.setAriaModalForBanner(o), v.fp.CookieV2SSR ? (A(t).append(o), this.setBannerLinkAttributes(e), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(o, t, e, function(e) {
            return t.querySelectorAll(e)
        }), this.ssrAndNonSSRCommonHtml(t)
    }, tr.prototype.insertHtmlForNonSSRFlow = function(e, t, o, n) {
        var r, i, s = I.bannerName;
        G.bannerGroup && (L.BannerRelativeFontSizesToggle && A(e).addClass("otRelFont"), (L.BInitialFocus || L.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"), e.setAttribute("role", "main")), L.useRTL && A(e).attr("dir", "rtl"), I.isIab2orv2Template && L.BannerDPDDescription.length && A(e).addClass("ot-iab-2"), (r = L.BannerPosition) && ("bottom-left" === r ? A(e).addClass("ot-bottom-left") : "bottom-right" === r ? A(e).addClass("ot-bottom-right") : A(e).addClass(r)), A(t).append(e), this.setBannerData(o), r = this.setIAB2HtmlData(o), this.setAcceptAndRejectBtnHtml(o), t = this.htmlForBannerButtons(e, o, n), n = L.showBannerCloseButton, i = L.BCloseButtonType === ke.Link, this.setWidthForFlatBanner(o, r, t), n && s === Qe && I.isIab2orv2Template && !i && ((t = o(".banner-close-btn-container")).parentElement.removeChild(t), A(e).el.insertAdjacentElement("beforeEnd", t), A(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")), this.setBannerOptions(o, r), this.setBannerLogo(e, o))
    }, tr.prototype.setBannerOptions = function(e, t) {
        var o = this,
            n = I.bannerName,
            r = this.isCmpEnabled(),
            i = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            s = A(e(this._bannerOptionsSelector)).el;
        r ? (n === Ze ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i), n === et && t.el.insertAdjacentElement("beforeend", s)), A(window).on("resize", function() {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (I.bannerName === Qe && (s = A(e(".banner-options-card")).el), b.removeChild(s))
    }, tr.prototype.setWidthForFlatBanner = function(e, t, o) {
        var n = I.bannerName,
            r = L.showBannerCloseButton,
            i = this.hasNoActionButtons();
        n === Ye && (I.isIab2orv2Template && (t.removeClass("ot-sdk-eight"), L.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn), L.showBannerCookieSettings) && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler")), r && !i && I.isIab2orv2Template ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || !I.isIab2orv2Template || (t.addClass("ot-sdk-ten"), A(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"), A(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }, tr.prototype.hasNoActionButtons = function() {
        return !L.showBannerAcceptButton && !L.showBannerCookieSettings && !L.BannerShowRejectAllButton
    }, tr.prototype.htmlForBannerButtons = function(e, t, o) {
        var n = I.bannerName,
            r = (this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector)), L.showBannerCloseButton),
            i = A(o(".banner-close-button")).el,
            s = t("#onetrust-button-group"),
            a = L.BCloseButtonType === ke.Link;
        if (r)
            for (l = 0; l < i.length; l++) a ? (A(i[l]).html(L.BContinueText), A(e).addClass("ot-close-btn-link"), A(i[l]).addClass("ot-close-link"), A(i[l]).removeClass("onetrust-close-btn-ui"), A(i[l]).removeClass("ot-close-icon"), n !== Qe && n !== Ze || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement), A(i[l]).attr("tabindex", "1"))) : (y.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")), A(i[l]).el.setAttribute(gt, L.BannerCloseButtonText || "Close Cookie Banner"));
        else {
            for (var l = 0; l < i.length; l++) A(i[l].parentElement).el.removeChild(i[l]);
            n !== Ye && n !== Ze || b.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }, tr.prototype.setAcceptAndRejectBtnHtml = function(e) {
        var t = I.bannerName,
            e = (L.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), A(this._acceptBtn).html(L.AlertAllowCookiesText), t !== $e || L.showBannerCookieSettings || L.BannerShowRejectAllButton || A(this._acceptBtn.parentElement).addClass("accept-btn-only")) : b.removeChild(e("#onetrust-accept-btn-handler")), L.BannerShowRejectAllButton && L.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), A(this._rejectBtn).html(L.BannerRejectAllButtonText), e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (b.removeChild(e("#onetrust-reject-all-handler")), b.removeChild(e("#onetrust-reject-btn-container"))), A(e("#onetrust-pc-btn-handler")));
        L.showBannerCookieSettings ? (e.html(L.AlertMoreInfoText), L.BannerSettingsButtonDisplayLink && e.addClass("cookie-setting-link"), t !== $e || L.showBannerAcceptButton || e.addClass("cookie-settings-btn-only")) : b.removeChild(e.el)
    }, tr.prototype.setIAB2HtmlData = function(e) {
        var t = I.bannerName,
            o = (I.isIab2orv2Template && L.BannerDPDDescription.length && t !== et ? (A(e(".ot-dpd-container .ot-dpd-title")).html(L.BannerDPDTitle), A(e(".ot-dpd-container .ot-dpd-desc")).html(L.BannerDPDDescription.join(",&nbsp;"))) : b.removeChild(e(".ot-dpd-container")), A(e(this._otGrpContainerSelector))),
            t = (I.isIab2orv2Template && L.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e), I.isIab2orv2Template && L.BannerDPDDescription.length ? t !== et ? A(e(".ot-dpd-container .ot-dpd-desc")) : o : A(e($n.POLICY_TEXT_SELECTOR)));
        return L.IsIabEnabled && L.BannerIABPartnersLink && t.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + L.BannerIABPartnersLink + "\n        </button>"), o
    }, tr.prototype.setBannerData = function(e) {
        var t;
        L.BannerTitle ? (A(e("#onetrust-policy-title")).html(L.BannerTitle), A(e('[role="alertdialog"]')).attr(gt, L.BannerTitle)) : (b.removeChild(e("#onetrust-policy-title")), A(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), A(e('[role="alertdialog"]')).attr(gt, L.AriaPrivacy)), !L.IsIabEnabled && _.showGeneralVendors && L.BannerNonIABVendorListText && ((t = document.createElement("div")).setAttribute("id", "ot-gv-link-ctnr"), A(t).html('<button class="ot-link-btn ot-gv-list-handler">' + L.BannerNonIABVendorListText + "</button>"), A(e("#onetrust-policy")).el.appendChild(t)), A(e($n.POLICY_TEXT_SELECTOR)).html(L.AlertNoticeText), this.setBannerLinkAttributes(e)
    }, tr.prototype.setBannerLinkAttributes = function(e) {
        var t;
        A(e(this.cookiePolicyLinkSelector)).length && (L.BShowPolicyLink && L.BShowImprintLink ? ((t = A(e($n.POLICY_TEXT_SELECTOR + " a:first-of-type"))).attr(gt, L.BCookiePolicyLinkScreenReader), t.attr("rel", "noopener"), t.attr("target", "_blank"), (t = A(e($n.POLICY_TEXT_SELECTOR + " a:nth-of-type(2)"))).attr(gt, L.BImprintLinkScreenReader), t.attr("rel", "noopener"), t) : (t = A(e(this.cookiePolicyLinkSelector)), L.BShowPolicyLink ? t.attr(gt, L.BCookiePolicyLinkScreenReader) : L.BShowImprintLink && t.attr(gt, L.BImprintLinkScreenReader), t.attr("rel", "noopener"), t)).attr("target", "_blank")
    }, tr.prototype.isCmpEnabled = function() {
        return L.BannerPurposeTitle || L.BannerPurposeDescription || L.BannerFeatureTitle || L.BannerFeatureDescription || L.BannerInformationTitle || L.BannerInformationDescription
    }, tr.prototype.ssrAndNonSSRCommonHtml = function(t) {
        function e(e) {
            return t.querySelector(e)
        }
        var o, n = this,
            r = this.isCmpEnabled(),
            i = (this.setOptOutSignalNotification(e), "[VENDOR_NUMBER]"),
            s = A(e($n.POLICY_TEXT_SELECTOR)).html(),
            i = (I.isIab2orv2Template && -1 < s.indexOf(i) && (o = '<span class="ot-tcf2-vendor-count ot-text-bold">' + I.tcf2ActiveVendors.all.toString() + "</span>", s = y.replaceTextFromString(i, s, o), A(e($n.POLICY_TEXT_SELECTOR)).html(s)), L.BRegionAriaLabel && (A(e("#onetrust-banner-sdk")).attr("role", "region"), A(e("#onetrust-banner-sdk")).attr(gt, L.BRegionAriaLabel)), I.bannerName === et && v.moduleInitializer.IsSuppressPC && (_.dataGroupState = L.Groups.filter(function(e) {
                return e.Order
            })), I.bannerName === et && (this._fourBtns = L.BannerShowRejectAllButton && L.showBannerAcceptButton && L.showBannerCookieSettings && L.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), L.BShowSaveBtn ? A(this._saveBtn).html(L.BSaveBtnTxt) : (b.removeChild(this._saveBtn), this._saveBtn = null), y.insertFooterLogo(t.querySelectorAll(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
                n.setBannerBtn()
            }), this._fourBtns && A(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e)), document.createElement("div"));
        A(i).append(t), I.ignoreInjectingHtmlCss || (A("#onetrust-consent-sdk").append(i.firstChild), r && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, tr.prototype.setAriaModalForBanner = function(e) {
        L.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }, tr.prototype.setBnrBtnGrpAlignment = function() {
        var e = A(this._otGrpContainerSelector).el,
            t = A(this._btnGrpParentSelector).el,
            e = ((e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? A("#onetrust-banner-sdk").removeClass("vertical-align-content") : A("#onetrust-banner-sdk").addClass("vertical-align-content"), document.querySelector("#onetrust-button-group-parent button:first-of-type")),
            t = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        t && e && 1 < Math.abs(t.offsetTop - e.offsetTop) && A("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, tr.prototype.slideInAnimation = function(e, t) {
        t === Ye ? "bottom" === L.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), _.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), _.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), I.pagePushedDown && !tn.checkIsBrowserIE11OrBelow() ? tn.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), _.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), _.bnrAnimationInProg = !1
        }, 1e3))) : t !== Xe && t !== $e || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), _.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), _.bnrAnimationInProg = !1
        }, 2e3))
    }, tr.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (b.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (b.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), b.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), b.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), b.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, tr.prototype.setCmpBannerOptions = function(n, e) {
        var r = A(n("#banner-options .banner-option")).el.cloneNode(!0),
            i = (A(n(this._bannerOptionsSelector)).html(""), 1);
        e.forEach(function(e) {
            var t = r.cloneNode(!0),
                o = L[e.titleKey],
                e = L[e.descriptionKey];
            (o || e) && (t.querySelector(".banner-option-header :first-child").innerHTML = o, o = t.querySelector(".banner-option-details"), e ? (o.setAttribute("id", "option-details-" + i++), o.innerHTML = e) : o.parentElement.removeChild(o), A(n("#banner-options")).el.appendChild(t))
        })
    }, tr.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = this,
            s = A(r("#banner-options button")).el.cloneNode(!0),
            n = A(r(".banner-option-details")).el.cloneNode(!0);
        A(r(this._bannerOptionsSelector)).html(""), e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = L[e.titleKey],
                n = L[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, A(r(i._bannerOptionsSelector)).el.appendChild(t))
        }), e.forEach(function(e) {
            var t, o = L[e.descriptionKey];
            o && ((t = n.cloneNode(!0)).innerHTML = o, t.classList.add(e.identifier), A(r(i._bannerOptionsSelector)).el.appendChild(t))
        })
    }, tr.prototype.setBannerOptionContent = function() {
        var t = this;
        I.bannerName !== Ye && I.bannerName !== Ze || setTimeout(function() {
            var e;
            (window.innerWidth < 769 ? (e = A(t._bannerOptionsSelector).el[0], A(t._otGrpContainerSelector)) : (e = A(t._bannerOptionsSelector).el[0], I.bannerName === Ze ? A(".banner-content") : A("#onetrust-banner-sdk .ot-sdk-container"))).el[0].appendChild(e)
        })
    }, tr.prototype.setAdditionalDesc = function(e) {
        var t = L.BannerAdditionalDescPlacement,
            o = document.createElement("span"),
            n = (o.classList.add("ot-b-addl-desc"), o.innerHTML = L.BannerAdditionalDescription, e($n.POLICY_TEXT_SELECTOR));
        t === ae.AfterTitle ? n.insertAdjacentElement("beforeBegin", o) : t === ae.AfterDescription ? n.insertAdjacentElement("afterEnd", o) : t === ae.AfterDPD && (n = e(".ot-dpd-container .ot-dpd-desc"), (n = L.ChoicesBanner ? e(this._otGrpContainerSelector) : n).insertAdjacentElement("beforeEnd", o))
    }, tr.prototype.insertGrps = function(e) {
        var d = e(".ot-cat-item").cloneNode(!0),
            u = (b.removeChild(e(".ot-cat-item")), L.BCategoryStyle === Se.Checkbox ? b.removeChild(d.querySelector(".ot-tgl")) : (b.removeChild(d.querySelector(".ot-chkbox")), A(d).addClass("ot-cat-bdr")), e(".ot-cat-lst ul"));
        L.Groups.forEach(function(e) {
            var t = d.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r,
                s = "ot-bnr-hdr-id-" + r,
                a = -1 !== Tt.indexOf(e.Type),
                l = C.getGrpStatus(e).toLowerCase() === m.ALWAYS_ACTIVE || a,
                c = C.getGrpStatus(e).toLowerCase() === m.ALWAYS_INACTIVE || a,
                a = f.isGroupActive(e) || a,
                e = (A(o.querySelector("label")).attr("for", i), A(o.querySelector(".ot-label-txt")).html(e.GroupName), o.querySelector("input")),
                l = ((l || c) && (L.BCategoryStyle === Se.Toggle ? (b.removeChild(o), t.insertAdjacentElement("beforeend", A("<div class='ot-always-active'>" + (c ? L.AlwaysInactiveText : L.AlwaysActiveText) + "</div>", "ce").el)) : A(e).attr("disabled", !0)), e.classList.add("category-switch-handler"), f.setInputID(e, i, r, a, s), t.querySelector("h4"));
            A(l).html(n), A(l).attr("id", s), A(u).append(t)
        })
    }, tr.prototype.setBannerLogo = function(e, t) {
        var o, n;
        v.fp.CookieV2BannerLogo && L.BnrLogo && (o = t(nn), n = "afterend", I.bannerName === Ze && (o = t("#onetrust-cookie-btn"), n = "beforeend"), t = y.updateCorrectUrl(L.BnrLogo), A(e).addClass("ot-bnr-w-logo"), A(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + t + "'\n            title='" + L.BnrLogoAria + "'\n            alt='" + L.BnrLogoAria + "'/>"))
    }, tr.prototype.setOptOutSignalNotification = function(e) {
        var t = I.gpcEnabled && I.gpcForAGrpEnabled;
        L.BShowOptOutSignal && (t || I.previewMode) && y.createOptOutSignalElement(e, !1)
    };
    var $n, er = tr;

    function tr() {
        this.POLICY_TEXT_SELECTOR = "#onetrust-policy-text", this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1, this._bannerOptionsSelector = "#banner-options", this._btnGrpParentSelector = "#onetrust-button-group-parent", this._otGrpContainerSelector = "#onetrust-group-container", this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    nr.prototype.setHeaderConfig = function() {
        c.setHeader(), c.setSearchInput(), c.setHeaderUIConsent();
        var e = c.getGroupsForFilter();
        Un.setFilterListByGroup(e, !1)
    }, nr.prototype.filterVendorByString = function(e) {
        c.searchQuery = e, c.filterVendorByGroupOrQuery()
    }, nr.prototype.filterVendorByGroup = function(e) {
        c.filterGroups = e, c.filterVendorByGroupOrQuery()
    }, nr.prototype.showVSList = function() {
        c.removeListeners(), c.showEmptyResults(!1, ""), c.clearUIElementsInMain(), c.addVSList(_.getVendorsInDomain())
    }, nr.prototype.showEmptyResults = function(e, t) {
        e ? this.setNoResultsContent(t) : (A("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass("no-results"), (e = A("#onetrust-pc-sdk #no-results")).length && e.remove())
    }, nr.prototype.setNoResultsContent = function(e) {
        var t, o, n, r, i = A("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = document.createElement("div"), o = document.createElement("p"), n = document.createTextNode(" " + L.PCVendorNotFound + "."), r = document.createElement("span"), t.id = "no-results", r.id = "user-text", r.innerText = e, o.appendChild(r), o.appendChild(n), t.appendChild(o), A("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass("no-results"), A("#vendor-search-handler").el[0].setAttribute("aria-describedby", t.id), A("#onetrust-pc-sdk " + P.P_Vendor_Content).append(t);
        i.querySelector("span").innerText = e
    }, nr.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = A("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t],
                r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, nr.prototype.cancelFilter = function() {
        for (var e = 0, t = A("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e],
                n = o.getAttribute("data-optanongroupid"),
                n = 0 <= _.filterByCategories.indexOf(n);
            b.setCheckedAttribute(null, o, n)
        }
        var r = c.getGroupsFilter();
        c.filterVendorByGroup(r)
    }, nr.prototype.clearFilter = function() {
        c.searchQuery = "", c.filterGroups = []
    }, nr.prototype.toggleVendors = function(r) {
        _.getVendorsInDomain().forEach(function(e, t) {
            var o, n;
            C.isAlwaysActiveGroup(e.groupRef) || (o = document.getElementById("ot-vendor-id-" + t), n = document.getElementById("ot-vs-lst-id-" + t), O.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), O.toggleVendorService(e.groupRef.CustomGroupId, t, r, n))
        })
    }, nr.prototype.hideVendorList = function() {
        c.removeListeners(), c.clearUIElementsInMain()
    }, nr.prototype.addListeners = function() {
        A("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", c.toggleVendorHandler), A("#onetrust-pc-sdk").on("click", ".ot-vs-list", w.onCategoryItemToggle.bind(this))
    }, nr.prototype.removeListeners = function() {
        var e;
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", w.toggleGroupORVendorHandler)
        }), null != (e = document.querySelector("#onetrust-pc-sdk .ot-vs-list")) && e.removeEventListener("click", w.onCategoryItemToggle)
    }, nr.prototype.toggleVendorHandler = function(e) {
        w.toggleVendorFromListHandler(e), c.checkAllowAllCheckedValue()
    }, nr.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        _.getVendorsInDomain().forEach(function(e, t) {
            c.checkVendorConditions(e) && o.set(t, e)
        }), c.showEmptyResults(o.size <= 0, c.searchQuery), c.removeListeners(), c.clearUIElementsInMain(), c.addVSList(o)
    }, nr.prototype.checkVendorConditions = function(e) {
        return !("" !== c.searchQuery && e.ServiceName.toLowerCase().indexOf(c.searchQuery.toLowerCase()) < 0 || 0 < c.filterGroups.length && c.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, nr.prototype.addVSList = function(e) {
        var t = A("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"),
            e = O.getVendorListEle(e);
        t.append(e), c.addListeners()
    }, nr.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return _.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, nr.prototype.clearUIElementsInMain = function() {
        A("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr).html(""), A("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr).hide(), A("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Vendor_Container).html(""), A("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Vendor_Container).hide();
        var e = A("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, nr.prototype.setHeader = function() {
        var e = L.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title);
        t && (t.innerText = e)
    }, nr.prototype.setSearchInput = function() {
        var e = L.PCenterCookieListSearch,
            t = L.PCenterCookieSearchAriaLabel,
            o = A("#onetrust-pc-sdk " + P.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, nr.prototype.setHeaderUIConsent = function() {
        var e, t, o;
        A("#onetrust-pc-sdk " + P.P_Select_Cntr).addClass("ot-vnd-list-cnt"), A("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), L.PCCategoryStyle === Se.Toggle && (A("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), L.PCAccordionStyle === le.Caret) && A("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf"), A("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), A("#onetrust-pc-sdk " + P.P_Host_Cntr).hide(), A(P.P_Vendor_List + " #select-all-text-container").hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide(), A("#onetrust-pc-sdk " + P.P_Vendor_Container).show(), A("#onetrust-pc-sdk " + P.P_Select_Cntr).show(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).show("inline-block"), A("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass(P.P_Host_UI), A("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass(P.P_Host_Cnt), document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr") || ((e = document.createElement("h4")).className = "sel-all-hdr", e.textContent = (null == (t = L.VendorServiceConfig) ? void 0 : t.PCVSAllowAllText) || "PCVSAllowAllText", t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), o = L.PCCategoryStyle === Se.Checkbox ? "beforeend" : "afterbegin", t.insertAdjacentElement(o, e)), c.checkAllowAllCheckedValue()
    }, nr.prototype.checkAllowAllCheckedValue = function() {
        var t = !0,
            e = (_.vsConsent.forEach(function(e) {
                e || (t = !1)
            }), document.getElementById("#select-all-vendor-groups-handler"));
        b.setCheckedAttribute(null, e, t)
    };
    var c, or = nr;

    function nr() {
        this.searchQuery = "", this.filterGroups = []
    }
    r.prototype.initCookieSettingHandlers = function() {
        A(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, r.prototype.initFlgtCkStgBtnEventHandlers = function() {
        A(".ot-floating-button__open").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingOpenBtnClicked(e)
            }, 0)
        }), A(".ot-floating-button__close").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingCloseBtnClicked(e)
            }, 0)
        })
    }, r.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        A(w.fltgBtnSltr).addClass("ot-pc-open"), L.cookiePersistentLogo.includes("ot_guard_logo.svg") && A(w.fltgBtnFSltr).attr(Ct, "true"), A(w.fltgBtnBSltr).attr(Ct, ""), A(w.fltgBtnFrontBtn).el[0].setAttribute(Ct, !0), A(w.fltgBtnFrontBtn).el[0].style.display = "none", A(w.fltgBtnBackBtn).el[0].setAttribute(gt, L.AriaClosePreferences), A(w.fltgBtnBackBtn).el[0].setAttribute(Ct, !1), A(w.fltgBtnBackBtn).el[0].style.display = "block", g.triggerGoogleAnalyticsEvent(Po, Go), w.showCookieSettingsHandler(e)
    }, r.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        A(w.fltgBtnFrontBtn).el[0].setAttribute(gt, L.AriaOpenPreferences), A(w.fltgBtnFrontBtn).el[0].setAttribute(Ct, !1), A(w.fltgBtnFrontBtn).el[0].style.display = "block", A(w.fltgBtnBackBtn).el[0].setAttribute(Ct, !0), A(w.fltgBtnBackBtn).el[0].style.display = "none", e && (g.triggerGoogleAnalyticsEvent(Po, No), w.hideCookieSettingsHandler(e))
    }, r.prototype.initialiseLegIntBtnHandlers = function() {
        A(document).on("click", ".ot-obj-leg-btn-handler", w.onLegIntButtonClick), A(document).on("click", ".ot-remove-objection-handler", w.onLegIntButtonClick)
    }, r.prototype.initialiseAddtlVenHandler = function() {
        A("#onetrust-pc-sdk #ot-addtl-venlst").on("click", w.selectVendorsGroupHandler), A("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", w.selAllAdtlVenHandler)
    }, r.prototype.initializeGenVenHandlers = function() {
        A("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", w.genVendorToggled), A("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", w.genVendorDetails), A("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", w.selectAllGenVenHandler)
    }, r.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this,
            t = 37,
            o = 39;
        I.pcName === st && w.categoryMenuSwitchHandler(), A("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", function(e) {
            setTimeout(function() {
                w.bannerCloseButtonHandler(e)
            }, 0)
        }), A("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", function() {
            setTimeout(function() {
                V.allowAllEventHandler(!0)
            }, 0)
        }), A("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", function() {
            setTimeout(function() {
                V.rejectAllEventHandler(!0)
            }, 0)
        }), A("#onetrust-pc-sdk #close-pc-btn-handler").on("click", function(e) {
            setTimeout(function() {
                w.hideCookieSettingsHandler(e)
            }, 0)
        }), A(document).on("keydown", w.closePCWhenEscPressed), A("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", w.hideCookieSettingsHandler), A("#onetrust-pc-sdk .category-switch-handler").on("click", w.toggleGroupORVendorHandler), A("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", w.toggleSubCategory), A("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            I.pcName !== st || e.keyCode !== t && e.keyCode !== o || (L.PCTemplateUpgrade ? w.changeSelectedTabV2(e) : w.changeSelectedTab(e))
        }), A("" + w.PC_SELECTOR).on("click", P.P_Category_Item + " > input:first-child," + P.P_Category_Item + " > button:first-child", w.onCategoryItemToggle.bind(this)), (L.showCookieList || _.showGeneralVendors) && (A("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            setTimeout(function() {
                _.showGeneralVendors && L.showCookieList ? _.cookieListType = Ce.HostAndGenVen : _.showGeneralVendors ? _.cookieListType = Ce.GenVen : _.cookieListType = Ce.Host, w.pcLinkSource = e.target, w.loadCookieList(e.target)
            }, 0)
        }), y.isOptOutEnabled() ? (A("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", w.selectAllHostsGroupsHandler), A("#onetrust-pc-sdk " + P.P_Host_Cntr).on("click", w.selectHostsGroupHandler)) : A("#onetrust-pc-sdk " + P.P_Host_Cntr).on("click", w.toggleAccordionStatus)), w.addListenerWhenIabEnabled(), w.addEventListenerWhenIsHostOrVendorsAreEnabled(), w.adddListenerWhenNoBanner(), A("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return u(e, void 0, void 0, function() {
                return F(this, function(e) {
                    return _.cookieListType = Ce.GenVen, w.loadCookieList(t.target), [2]
                })
            })
        }), w.addListenerWhenVendorServices()
    }, r.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function() {
        var e;
        (L.IsIabEnabled || L.showCookieList || _.showGeneralVendors || _.showVendorService) && (A(document).on("click", ".back-btn-handler", w.backBtnHandler), w.addListenerSearchKeyEvent(), A("#onetrust-pc-sdk #filter-btn-handler").on("click", w.toggleVendorFiltersHandler), A("#onetrust-pc-sdk #filter-apply-handler").on("click", function() {
            setTimeout(function() {
                w.applyFilterHandler()
            }, 0)
        }), A("#onetrust-pc-sdk " + P.P_Fltr_Modal).on("click", w.tglFltrOptionHandler), !v.isV2Template && I.pcName !== it || A("#onetrust-pc-sdk #filter-cancel-handler").on("click", w.cancelFilterHandler), !v.isV2Template && I.pcName === it || A("#onetrust-pc-sdk #clear-filters-handler").on("click", w.clearFiltersHandler), v.isV2Template ? A("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), A("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
        }) : A("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), A("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
        }), e = A("#onetrust-pc-sdk .category-filter-handler").el, A(e[0]).on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), A("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
        }))
    }, r.prototype.addListenerSearchKeyEvent = function() {
        A(w.VENDOR_SEARCH_SELECTOR).on("keyup", function(e) {
            e = e.target.value.trim();
            w.currentSearchInput !== e && (_.showVendorService ? c.filterVendorByString(e) : w.isCookieList ? (N.searchHostList(e), _.showTrackingTech && w.addEventAdditionalTechnologies()) : (N.loadVendorList(e, []), L.UseGoogleVendors && N.searchVendors(N.googleSearchSelectors, _.addtlVendorsList, me.GoogleVendor, e), _.showGeneralVendors && L.GeneralVendors.length && N.searchVendors(N.genVendorSearchSelectors, L.GeneralVendors, me.GeneralVendor, e)), N.playSearchStatus(w.isCookieList), w.currentSearchInput = e)
        })
    }, r.prototype.addListenerWhenIabEnabled = function() {
        L.IsIabEnabled && (A("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            setTimeout(function() {
                w.pcLinkSource = e.target, w.showVendorsList(e.target)
            }, 0)
        }), A("#onetrust-pc-sdk .ot-pgph-link").on("click", function(e) {
            w.pcLinkSource = e.target, w.showIllustrations(e.target)
        }), A("#onetrust-pc-sdk " + P.P_Vendor_Container).on("click", w.selectVendorsGroupHandler), L.UseGoogleVendors || w.bindSelAllHandlers(), w.initialiseLegIntBtnHandlers())
    }, r.prototype.adddListenerWhenNoBanner = function() {
        L.NoBanner && (L.OnClickCloseBanner && document.body.addEventListener("click", V.bodyClickEvent), L.ScrollCloseBanner) && window.addEventListener("scroll", V.scrollCloseBanner)
    }, r.prototype.addListenerWhenVendorServices = function() {
        _.showVendorService && (w.bindSelAllHandlers(), A("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            setTimeout(function() {
                w.showVendorsList(null, !0)
            }, 0)
        }))
    }, r.prototype.bindSelAllHandlers = function() {
        A("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", w.selectAllVendorsLegIntHandler), A("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", w.SelectAllVendorConsentHandler)
    }, r.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), Rn.getInstance().resetHealthSignatureData(), g.triggerGoogleAnalyticsEvent(Po, _o), tn.removeAddedOTCssStyles(en.PC), ln.hideConsentNoticeV2(), A(document).off("keydown", w.closePCWhenEscPressed), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), !v.isV2Template && I.pcName !== it || w.closeFilter(!1), I.pcName === nt && A("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide"), V.hideVendorsList(), G.csBtnGroup && (A(w.fltgBtnSltr).removeClass("ot-pc-open"), w.floatingCookieSettingCloseBtnClicked(null)), w.confirmPC(e), V.resetConsent(), !1
    }, r.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            e = A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).el[0],
            o = e.classList.contains("line-through"),
            n = A("#onetrust-pc-sdk .host-checkbox-handler").el;
        b.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var r = 0; r < n.length; r++) n[r].getAttribute("disabled") || b.setCheckedAttribute(null, n[r], t);
        _.optanonHostList.forEach(function(e) {
            So.updateHostStatus(e, t)
        }), n.forEach(function(e) {
            yo.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), o && e.classList.remove("line-through")
    }, r.prototype.selectHostsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        null !== t && (o === ge.GenVendor ? (o = L.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name, g.triggerGoogleAnalyticsEvent(Po, n ? Ho : Ro, o + ": VEN_" + t), yo.updateGenVendorStatus(t, n)) : (o = b.findIndex(_.optanonHostList, function(e) {
            return e.HostId === t
        }), o = _.optanonHostList[o], w.toggleHostStatus(o, n)), b.setCheckedAttribute(null, e.target, n))
    }, r.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (I.pcName === nt && this.setPcListContainerHeight(), w.toggleAccordionStatus(e))
    }, r.prototype.toggleAccordionStatus = function(e) {
        var t, e = e.target;
        e && e.getAttribute("aria-expanded") && (t = "true" === e.getAttribute("aria-expanded") ? "false" : "true", e.setAttribute("aria-expanded", t))
    }, r.prototype.toggleHostStatus = function(e, t) {
        g.triggerGoogleAnalyticsEvent(Po, t ? Fo : Mo, e.HostName + ": H_" + e.HostId), So.updateHostStatus(e, t)
    }, r.prototype.toggleBannerOptions = function(e) {
        A(".banner-option-input").each(function(e) {
            A(e).el.setAttribute("aria-expanded", !1)
        }), w.toggleAccordionStatus(e)
    }, r.prototype.bannerCloseButtonHandler = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                return A(document).off("keydown", w.shiftBannerFocus), n && n.target && n.target.className && (-1 < (t = n.target.className).indexOf("save-preference-btn-handler") ? (_.bannerCloseSource = $.ConfirmChoiceButton, g.triggerGoogleAnalyticsEvent(Po, Bo)) : -1 < t.indexOf("banner-close-button") ? (_.bannerCloseSource = $.BannerCloseButton, o = Ao, -1 < t.indexOf("ot-close-link") && (o = Io, _.bannerCloseSource = $.ContinueWithoutAcceptingButton), g.triggerGoogleAnalyticsEvent(Po, o)) : -1 < t.indexOf("ot-bnr-save-handler") && (_.bannerCloseSource = $.BannerSaveSettings, g.triggerGoogleAnalyticsEvent(Po, Lo))), tn.removeAddedOTCssStyles(), V.hideVendorsList(), [2, V.bannerCloseButtonHandler()]
            })
        })
    }, r.prototype.onLegIntButtonClick = function(e) {
        var t, o, n;
        e && (n = "true" === (e = e.currentTarget).parentElement.getAttribute("is-vendor"), t = e.parentElement.getAttribute("data-group-id"), o = !e.classList.contains("ot-leg-int-enabled"), n ? w.onVendorToggle(t, ce.LI) : (n = C.getGroupById(t)).Parent ? w.updateSubGroupToggles(n, o, !0) : w.updateGroupToggles(n, o, !0), f.updateLegIntBtnElement(e.parentElement, o))
    }, r.prototype.updateGroupToggles = function(t, o, e) {
        So.toggleGroupHosts(t, o), _.genVenOptOutEnabled && So.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, w.toggleGroupStatus(t, o), t.SubGroups && t.SubGroups.length && (I.bannerName === et && v.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle, f.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, So.toggleGroupHosts(e, o), _.genVenOptOutEnabled && So.toggleGroupGenVendors(e, o), O.setVendorStateByGroup(e, o)
        }) : f.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function(e) {
            return O.setVendorStateByGroup(e, o)
        })), O.setVendorStateByGroup(t, o), this.allowAllVisible(f.setAllowAllButton()), t.IsLegIntToggle = !1
    }, r.prototype.toggleGroupStatus = function(e, t) {
        var o;
        I.requireSignatureEnabled && e.needsHealthSignature ? (o = !1, t ? (I.healthSignatureData && (o = !0), I.healthSignatureGroup = e) : I.healthSignatureGroup = null, f.toggleGrpStatus(e, o)) : f.toggleGrpStatus(e, t)
    }, r.prototype.updateSubGroupToggles = function(e, t, o) {
        So.toggleGroupHosts(e, t), _.genVenOptOutEnabled && So.toggleGroupGenVendors(e, t);
        var n = C.getGroupById(e.Parent),
            o = (e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle, f.isGroupActive(n));
        t ? (f.toggleGrpStatus(e, !0), f.isAllSubgroupsEnabled(n) && !o && (f.toggleGrpStatus(n, !0), So.toggleGroupHosts(n, t), _.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (f.toggleGrpStatus(e, !1), f.isAllSubgroupsDisabled(n) && o ? (f.toggleGrpStatus(n, !1), So.toggleGroupHosts(n, t), _.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (f.toggleGrpStatus(n, !1), So.toggleGroupHosts(n, !1), _.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(f.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, r.prototype.hideCategoryContainer = function(e) {
        this.isCookieList = e = void 0 === e ? !1 : e, w.addHideClassContainer(), _.showVendorService ? c.setHeaderConfig() : (e ? w.setCookieListTemplate() : w.setVendorListTemplate(), Un.setFilterList(e))
    }, r.prototype.setCookieListTemplate = function() {
        var e = v.isV2Template;
        A(P.P_Vendor_List + " #select-all-text-container").show("inline-block"), A("#onetrust-pc-sdk " + P.P_Host_Cntr).show(), y.isOptOutEnabled() ? A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).show("inline-block") : A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide(), A("#onetrust-pc-sdk " + P.P_Leg_Header).hide(), e || A("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).hide(), A("#onetrust-pc-sdk  " + P.P_Vendor_Container).hide(), (L.UseGoogleVendors || _.showGeneralVendors) && A("#onetrust-pc-sdk .ot-acc-cntr").hide(), A("#onetrust-pc-sdk " + P.P_Vendor_List).addClass(P.P_Host_UI), A("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass(P.P_Host_Cnt)
    }, r.prototype.setVendorListTemplate = function() {
        A("#onetrust-pc-sdk " + P.P_Vendor_Container).show(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).show("inline-block"), L.UseGoogleVendors && A("#onetrust-pc-sdk .ot-acc-cntr").show(), I.legIntSettings.PAllowLI && I.isIab2orv2Template ? (A("#onetrust-pc-sdk " + P.P_Select_Cntr).show(v.isV2Template ? void 0 : "inline-block"), A("#onetrust-pc-sdk " + P.P_Leg_Select_All).show("inline-block"), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).show("inline-block"), A(P.P_Vendor_List + " #select-all-text-container").hide(), I.legIntSettings.PShowLegIntBtn ? (A("#onetrust-pc-sdk " + P.P_Leg_Header).hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide()) : A("#onetrust-pc-sdk " + P.P_Leg_Header).show()) : (A("#onetrust-pc-sdk " + P.P_Select_Cntr).show(), A(P.P_Vendor_List + " #select-all-text-container").show("inline-block"), A("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide()), A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), A("#onetrust-pc-sdk " + P.P_Host_Cntr).hide(), A("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass(P.P_Host_UI), A("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass(P.P_Host_Cnt)
    }, r.prototype.showAllVendors = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), w.showVendorsList(null, !0), _.isPCVisible ? [3, 3] : [4, w.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, r.prototype.fetchAndSetupPC = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return v.moduleInitializer.IsSuppressPC && 0 === A("" + w.PC_SELECTOR).length ? [4, Dt.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), G.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, v.isV2Template = L.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (t = document.getElementById("onetrust-style")).innerHTML += G.preferenceCenterGroup.css, t.innerHTML += Qt.addCustomPreferenceCenterCSS(), B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), L.IsIabEnabled && N.InitializeVendorList(), e.label = 2;
                    case 2:
                        return 0 !== A("" + w.PC_SELECTOR).length && L.PCTemplateUpgrade && (t = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"), B.setOptOutSignalVisibility(t)), [2]
                }
            })
        })
    }, r.prototype.setVendorContent = function() {
        A("" + w.FILTER_COUNT_SELECTOR).text(_.filterByIABCategories.length.toString()), N.loadVendorList("", _.filterByIABCategories), L.UseGoogleVendors && (_.vendorDomInit ? N.resetAddtlVendors() : (N.initGoogleVendors(), A("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this)))), _.vendorDomInit || (_.vendorDomInit = !0, w.initialiseLegIntBtnHandlers(), L.UseGoogleVendors && (w.initialiseAddtlVenHandler(), w.bindSelAllHandlers())), _.showGeneralVendors && !_.genVendorDomInit && (_.genVendorDomInit = !0, N.initGenVendors(), w.initializeGenVenHandlers(), L.UseGoogleVendors || (w.bindSelAllHandlers(), A("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this))))
    }, r.prototype.addEventAdditionalTechnologies = function() {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (A(e).off("click", w.toggleAccordionStatus), A(e).on("click", w.toggleAccordionStatus))
    }, r.prototype.showVendorsList = function(e, t) {
        return void 0 === t && (t = !1), _.cookieListType = null, w.hideCategoryContainer(!1), tn.addOTCssPropertiesToBody(en.PC, {}), _.showVendorService ? c.showVSList() : (t || (t = e.getAttribute("data-parent-id")) && (t = C.getGroupById(t)) && (t = M(t.SubGroups, [t]).reduce(function(e, t) {
            return -1 < kt.indexOf(t.Type) && e.push(t.CustomGroupId), e
        }, []), _.filterByIABCategories = M(_.filterByIABCategories, t)), w.setVendorContent(), fn.updateFilterSelection(!1)), _.pcLayer = ie.VendorList, e && bo.setPCFocus(bo.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.showIllustrations = function(e) {
        e = e.getAttribute("data-parent-id"), e = C.getGroupById(e);
        _.cookieListType = null, _.pcLayer = ie.IabIllustrations, w.addHideClassContainer(), Yn.showIllustrations(e.GroupName, e.IabIllustrations), bo.setPCFocus(bo.getPCElements())
    }, r.prototype.addHideClassContainer = function() {
        var e = I.pcName;
        L.PCTemplateUpgrade ? A("#onetrust-pc-sdk " + P.P_Content).addClass("ot-hide") : A("#onetrust-pc-sdk .ot-main-content").hide(), A("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass("ot-hide"), e !== it && e !== nt && A("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), e === nt && d(A("" + w.PC_SELECTOR).el[0], 'height: "";', !0)
    }, r.prototype.loadCookieList = function(e) {
        _.filterByCategories = [], w.hideCategoryContainer(!0);
        var t, e = e && e.getAttribute("data-parent-id");
        return e && (t = C.getGroupById(e), _.filterByCategories.push(e), t.SubGroups.length) && t.SubGroups.forEach(function(e) {
            -1 === kt.indexOf(e.Type) && (e = e.CustomGroupId, _.filterByCategories.indexOf(e) < 0) && _.filterByCategories.push(e)
        }), N.loadHostList("", _.filterByCategories), _.showTrackingTech && w.addEventAdditionalTechnologies(), A("" + w.FILTER_COUNT_SELECTOR).text(_.filterByCategories.length.toString()), fn.updateFilterSelection(!0), _.pcLayer = ie.CookieList, bo.setPCFocus(bo.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = A(P.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            i = {};
        _.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            b.setCheckedAttribute(null, n[s], r), L.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? L.PCActiveText : L.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"),
                l = i[a];
            void 0 === l && (l = a), _.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), b.setCheckedAttribute(null, e.target, r)
    }, r.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = A("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = A("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) b.setCheckedAttribute(null, n[i], r), L.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? L.PCActiveText : L.PCInactiveText);
        r ? L.UseGoogleVendors && Object.keys(_.addtlVendorsList).forEach(function(e) {
            _.addtlVendors.vendorSelected[e] = !0
        }) : _.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, r.prototype.selectAllGenVenHandler = function(e) {
        e = e.target.checked;
        w.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", e)
    }, r.prototype.selectAllHandler = function(e, t, o) {
        for (var n = A(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = A(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && _.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (b.setDisabledAttribute(null, i[s], !0), b.setCheckedAttribute(null, i[s], !0)) : b.setCheckedAttribute(null, i[s], o), L.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? L.PCActiveText : L.PCInactiveText);
        o ? "googleven" === t && L.UseGoogleVendors ? Object.keys(_.addtlVendorsList).forEach(function(e) {
            _.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && _.showGeneralVendors && L.GeneralVendors.forEach(function(e) {
            _.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? _.addtlVendors.vendorSelected = {} : (_.genVendorsConsent = {}, _.alwaysActiveGenVendors.forEach(function(e) {
            _.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, r.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (_.showVendorService) c.toggleVendors(t);
        else {
            var o = A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = A(P.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                i = {};
            _.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                b.setCheckedAttribute(null, r[s], t), L.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? L.PCActiveText : L.PCInactiveText);
                var a = r[s].getAttribute("vendorid"),
                    l = i[a];
                void 0 === l && (l = a), _.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        b.setCheckedAttribute(null, e.target, t)
    }, r.prototype.onVendorToggle = function(o, e) {
        var t = _.vendors,
            n = _.addtlVendors,
            r = e === ce.LI ? t.selectedLegIntVendors : e === ce.AddtlConsent ? [] : t.selectedVendors,
            i = !1,
            s = Number(o);
        r.some(function(e, t) {
            e = e.split(":");
            if (e[0] === o) return s = t, i = "true" === e[1], !0
        }), e === ce.LI ? (g.triggerGoogleAnalyticsEvent(Po, i ? Ko : Wo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedLegIntVendors[s] = o + ":" + !i, I.legIntSettings.PShowLegIntBtn || N.vendorLegIntToggleEvent()) : e === ce.AddtlConsent ? (n.vendorSelected[o] ? delete n.vendorSelected[o] : n.vendorSelected[o] = !0, N.venAdtlSelAllTglEvent()) : (g.triggerGoogleAnalyticsEvent(Po, i ? zo : jo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedVendors[s] = o + ":" + !i, N.vendorsListEvent())
    }, r.prototype.onVendorDisclosure = function(o) {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = _.discVendors)[o].isFetched ? [3, 2] : (t[o].isFetched = !0, [4, Dt.getStorageDisclosure(t[o].disclosureUrl)]);
                    case 1:
                        t = e.sent(), N.updateVendorDisclosure(o, t), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, r.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && b.setCheckedAttribute(null, e.target, e.target.checked)
    }, r.prototype.selectVendorsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? w.onVendorToggle(t, ce.LI) : o ? w.onVendorToggle(o, ce.Consent) : n && w.onVendorToggle(n, ce.AddtlConsent), r && w.onVendorDisclosure(r), (t || o || n) && (b.setCheckedAttribute(null, e.target, e.target.checked), L.PCShowConsentLabels) && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? L.PCActiveText : L.PCInactiveText)
    }, r.prototype.toggleVendorFiltersHandler = function() {
        var e, t = !1,
            o = A("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0];
        switch (I.pcName) {
            case rt:
            case ot:
            case nt:
            case st:
                (t = "block" === o.style.display) ? w.closeFilter(): (e = A("#onetrust-pc-sdk " + P.P_Triangle).el[0], A(e).attr("style", "display: block;"), A(o).attr("style", "display: block;"), e = Array.prototype.slice.call(o.querySelectorAll("[href], input, button")), bo.setPCFocus(e));
                break;
            case it:
                896 < window.innerWidth || 896 < window.screen.height ? d(o, "width: 400px;", !0) : d(o, "height: 100%; width: 100%;"), o.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        v.isV2Template && !t && (A("#onetrust-pc-sdk").addClass("ot-shw-fltr"), A("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, r.prototype.clearFiltersHandler = function() {
        w.setAriaLabelforButtonInFilter(L.PCenterFilterClearedAria);
        for (var e = A("#onetrust-pc-sdk " + P.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) b.setCheckedAttribute(null, e[t], !1);
        w.isCookieList ? _.filterByCategories = [] : _.filterByIABCategories = []
    }, r.prototype.cancelFilterHandler = function() {
        _.showVendorService ? c.cancelFilter() : w.isCookieList ? fn.cancelHostFilter() : N.cancelVendorFilter(), w.closeFilter(), A("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.applyFilterHandler = function() {
        var e;
        w.setAriaLabelforButtonInFilter(L.PCenterFilterAppliedAria), _.showVendorService ? (e = c.getGroupsFilter(), c.filterVendorByGroup(e)) : w.isCookieList ? (e = fn.updateHostFilterList(), N.loadHostList("", e), _.showTrackingTech && w.addEventAdditionalTechnologies()) : (e = N.updateVendorFilterList(), N.loadVendorList("", e)), A("" + w.FILTER_COUNT_SELECTOR).text(String(e.length)), w.closeFilter(), A("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = _.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (_.isPCVisible ? o = document.getElementById(w.pcSDKSelector) : document.getElementById(w.bannerSelector) && (o = document.getElementById(w.bannerSelector)), !o) return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(gt, e), w.timeCallback && clearTimeout(w.timeCallback), w.timeCallback = setTimeout(function() {
            w.timeCallback = null, t.setAttribute(gt, "")
        }, 900)
    }, r.prototype.setPcListContainerHeight = function() {
        A("#onetrust-pc-sdk " + P.P_Content).el[0].classList.contains("ot-hide") ? d(A("" + w.PC_SELECTOR).el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !A("#onetrust-pc-sdk " + P.P_Content).el[0].scrollHeight || A("#onetrust-pc-sdk " + P.P_Content).el[0].scrollHeight >= e ? d(A("" + w.PC_SELECTOR).el[0], "height: " + e + "px;", !0) : d(A("" + w.PC_SELECTOR).el[0], "height: auto;", !0)
        })
    }, r.prototype.changeSelectedTab = function(e) {
        var t, o = A("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = A(o.el[0]);
        o.each(function(e, t) {
            A(e).el.classList.contains(P.P_Active_Menu) && (n = t, A(e).el.classList.remove(P.P_Active_Menu), r = A(e))
        }), e.keyCode === se.RightArrow ? t = n + 1 >= o.el.length ? A(o.el[0]) : A(o.el[n + 1]) : e.keyCode === se.LeftArrow && (t = A(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, r.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement,
            e = (e.keyCode === se.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === se.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild), t.querySelector(".category-menu-switch-handler"));
        e.focus(), this.groupTabClick(e)
    }, r.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = A("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, r.prototype.groupTabClick = function(e) {
        var t = A("#onetrust-pc-sdk " + P.P_Grp_Container).el[0],
            o = t.querySelector("." + P.P_Active_Menu),
            e = e.currentTarget || e,
            n = e.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(P.P_Active_Menu), t.querySelector(P.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + n).classList.remove("ot-hide"), e.setAttribute("tabindex", 0), e.setAttribute("aria-selected", !0), e.classList.add(P.P_Active_Menu)
    }, r.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + P.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + P.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(P.P_Active_Menu)
    }, r.prototype.closeFilter = function(e) {
        var t, o;
        void 0 === e && (e = !0), ln.checkIfPcSdkContainerExist() || (t = A("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0], o = A("#onetrust-pc-sdk " + P.P_Triangle).el[0], I.pcName === it ? 896 < window.innerWidth || 896 < window.screen.height ? d(t, "width: 0;", !0) : d(t, "height: 0;") : d(t, "display: none;"), o && A(o).attr("style", "display: none;"), v.isV2Template && A("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && bo.setFirstAndLast(bo.getPCElements()))
    }, r.prototype.setBackButtonFocus = function() {
        A("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, r.prototype.setSearchInputFocus = function() {
        A(w.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }, r.prototype.setCenterLayoutFooterHeight = function() {
        var e = w.pc;
        if (w.setMainContentHeight(), I.pcName === st && e) {
            var t = e.querySelectorAll("" + P.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + P.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + P.P_Desc_Container) && 640 < window.innerWidth && A(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, r.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1],
            i = L.PCLayout,
            r = (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), L.PCTemplateUpgrade || i.Center || (n = e.clientHeight - t.clientHeight - o.clientHeight - 3, L.PCTemplateUpgrade && !i.Tab && L.PCenterVendorListDescText && (n = n - ((r = A("#vdr-lst-dsc").el).length && r[0].clientHeight) - 10), d(e.querySelector("" + P.P_Vendor_List), "height: " + n + "px;", !0)), e.querySelector("" + P.P_Content));
        L.PCTemplateUpgrade && i.Center ? (n = 600 < window.innerWidth && 475 < window.innerHeight, !this.pcBodyHeight && n && (this.pcBodyHeight = r.scrollHeight), n ? (i = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20) > .8 * window.innerHeight || 0 === this.pcBodyHeight ? d(e, "height: " + .8 * window.innerHeight + "px;", !0) : d(e, "height: " + i + "px;", !0) : d(e, "height: 100%;", !0)) : d(e.querySelector("" + P.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, r.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && L.PCLayout.Tab && L.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, r.prototype.restorePc = function() {
        _.pcLayer === ie.CookieList ? (w.hideCategoryContainer(!0), N.loadHostList("", _.filterByCategories), _.showTrackingTech && w.addEventAdditionalTechnologies(), A("" + w.FILTER_COUNT_SELECTOR).text(_.filterByCategories.length.toString())) : _.pcLayer === ie.VendorList && (w.hideCategoryContainer(!1), w.setVendorContent()), _.isPCVisible = !1, w.toggleInfoDisplay(), _.pcLayer !== ie.VendorList && _.pcLayer !== ie.CookieList || (fn.updateFilterSelection(_.pcLayer === ie.CookieList), w.setBackButtonFocus(), bo.setPCFocus(bo.getPCElements()))
    }, r.prototype.toggleInfoDisplay = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return G.csBtnGroup && (A(w.fltgBtnSltr).addClass("ot-pc-open"), w.otGuardLogoPromise.then(function() {
                            L.cookiePersistentLogo.includes("ot_guard_logo.svg") && A(w.fltgBtnFSltr).attr(Ct, "true")
                        }), A(w.fltgBtnBSltr).attr(Ct, ""), A(w.fltgBtnBackBtn).el[0].style.display = "block"), [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), I.pcName === nt && this.setPcListContainerHeight(), void 0 !== _.pcLayer && _.pcLayer !== ie.Banner || (_.pcLayer = ie.PrefCenterHome), t = A("" + w.PC_SELECTOR).el[0], A(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), _.isPCVisible || (ln.showConsentNotice(), _.isPCVisible = !0, L.PCTemplateUpgrade && (this.pc = t, t = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = t && 0 < t.clientHeight, this.setCenterLayoutFooterHeight(), w.getResizeElement().addEventListener("resize", w.setCenterLayoutFooterHeight), window.addEventListener("resize", w.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), w.captureInitialConsent(), I.requireSignatureEnabled && Rn.getInstance().setConsentIdInPC(), [2]
                }
            })
        })
    }, r.prototype.close = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return L.BCloseButtonType === ke.Link ? _.bannerCloseSource = $.ContinueWithoutAcceptingButton : _.bannerCloseSource = $.BannerCloseButton, [4, V.bannerCloseButtonHandler(t)];
                    case 1:
                        return e.sent(), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), [2]
                }
            })
        })
    }, r.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, r.prototype.initializeAlartHtmlAndHandler = function() {
        _.skipAddingHTML = 0 < A("#onetrust-banner-sdk").length, _.skipAddingHTML || $n.insertAlertHtml(), this.initialiseAlertHandlers()
    }, r.prototype.initialiseAlertHandlers = function() {
        var e = this,
            t = ($n.showBanner(), L.ForceConsent && !y.isCookiePolicyPage(L.AlertNoticeText) && A(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), L.OnClickCloseBanner && document.body.addEventListener("click", V.bodyClickEvent), L.ScrollCloseBanner && (window.addEventListener("scroll", V.scrollCloseBanner), A(document).on("click", ".onetrust-close-btn-handler", V.rmScrollAndClickBodyEvents), A(document).on("click", "#onetrust-accept-btn-handler", V.rmScrollAndClickBodyEvents), A(document).on("click", "#accept-recommended-btn-handler", V.rmScrollAndClickBodyEvents)), this.addEventListnerForVendorsList(), L.FloatingRoundedIcon && A("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
                _.pcSource = e.currentTarget, w.showCookieSettingsHandler(e)
            }), A("#onetrust-banner-sdk .onetrust-close-btn-handler").on("click", function(e) {
                setTimeout(function() {
                    Rn.getInstance().resetHealthSignatureData(), w.bannerCloseButtonHandler(e)
                }, 0)
            }), A("#onetrust-banner-sdk .ot-bnr-save-handler").on("click", w.bannerCloseButtonHandler), A("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", function(e) {
                setTimeout(function() {
                    w.showCookieSettingsHandler(e)
                }, 0)
            }), A("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", function() {
                setTimeout(function() {
                    V.allowAllEventHandler(!1)
                }, 0)
            }), A("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", function() {
                setTimeout(function() {
                    V.rejectAllEventHandler(!1)
                }, 0)
            }), A("#onetrust-banner-sdk .banner-option-input").on("click", I.bannerName === Ze ? w.toggleBannerOptions : w.toggleAccordionStatus), A("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
                return u(e, void 0, void 0, function() {
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return _.cookieListType = Ce.GenVen, [4, w.fetchAndSetupPC()];
                            case 1:
                                return e.sent(), w.loadCookieList(t.target), w.showCookieSettingsHandler(t), [2]
                        }
                    })
                })
            }), A("#onetrust-banner-sdk .category-switch-handler").on("click", w.toggleBannerCategory), document.getElementById("onetrust-banner-sdk"));
        L.ForceConsent && t && "none" !== window.getComputedStyle(t).display && A(document).on("keydown", w.shiftBannerFocus), A("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || y.findUserType(e)
        })
    }, r.prototype.addEventListnerForVendorsList = function() {
        (L.IsIabEnabled || L.UseGoogleVendors || _.showGeneralVendors) && !_.showVendorService && A(document).on("click", ".onetrust-vendors-list-handler", function(e) {
            setTimeout(function() {
                w.showAllVendors(e)
            }, 0)
        })
    }, r.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, r.prototype.insertCookieSettingText = function(e) {
        void 0 === e && (e = !1);
        for (var t = L.CookieSettingButtonText, o = A(".ot-sdk-show-settings").el, n = A(".optanon-toggle-display").el, r = 0; r < o.length; r++) A(o[r]).text(t), A(n[r]).text(t);
        e ? (null != (e = document.querySelector(".ot-sdk-show-settings")) && e.addEventListener("click", this.cookiesSettingsBoundListener), null != (e = document.querySelector(".optanon-toggle-display")) && e.addEventListener("click", this.cookiesSettingsBoundListener)) : w.initCookieSettingHandlers()
    }, r.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid"),
            o = (yo.updateGenVendorStatus(t, e.target.checked), L.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            }).Name);
        g.triggerGoogleAnalyticsEvent(Po, e.target.checked ? Ho : Ro, o + ": VEN_" + t), N.genVenSelectAllTglEvent()
    }, r.prototype.genVendorDetails = function(e) {
        w.toggleAccordionStatus(e)
    }, r.prototype.confirmPC = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = h.isAlertBoxClosedAndValid(), L.NoBanner && L.ShowPreferenceCenterCloseButton && !t) ? [4, V.bannerCloseButtonHandler()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return o = y.isBannerVisible(), !v.moduleInitializer.MobileSDK || !t && o || w.closePreferenceCenter(n), [2]
                }
            })
        })
    }, r.prototype.captureInitialConsent = function() {
        _.initialGroupsConsent = JSON.parse(JSON.stringify(_.groupsConsent)), _.initialHostConsent = JSON.parse(JSON.stringify(_.hostsConsent)), _.showGeneralVendors && (_.initialGenVendorsConsent = JSON.parse(JSON.stringify(_.genVendorsConsent))), L.IsIabEnabled && (_.initialOneTrustIABConsent = JSON.parse(JSON.stringify(_.oneTrustIABConsent)), _.initialVendors = JSON.parse(JSON.stringify(_.vendors)), _.initialVendors.vendorTemplate = _.vendors.vendorTemplate), L.UseGoogleVendors && (_.initialAddtlVendorsList = JSON.parse(JSON.stringify(_.addtlVendorsList)), _.initialAddtlVendors = JSON.parse(JSON.stringify(_.addtlVendors))), _.vsIsActiveAndOptOut && (_.initialVendorsServiceConsent = new Map(_.vsConsent))
    };
    var w, rr = r;

    function r() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.PC_SELECTOR = "#onetrust-pc-sdk", this.FILTER_COUNT_SELECTOR = "#onetrust-pc-sdk #filter-count", this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler", this.isCookieList = !1, this.pc = null, this.currentSearchInput = "", this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }), this.closePCWhenEscPressed = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            27 === e.keyCode && t && o && ("block" === (t = A("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0]).style.display || "0px" < t.style.width ? (w.closeFilter(), A("#onetrust-pc-sdk #filter-btn-handler").focus()) : L.NoBanner && !L.ShowPreferenceCenterCloseButton || w.hideCookieSettingsHandler(), w.confirmPC()), (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && y.findUserType(e)
        }, this.showCookieSettingsHandler = function(n) {
            return u(t, void 0, void 0, function() {
                var t, o;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (o = document.getElementById(w.pcSDKSelector), o && "none" !== window.getComputedStyle(o).getPropertyValue("display")) ? [2] : (A(document).on("keydown", w.closePCWhenEscPressed), n && n.stopPropagation(), n && n.target && (o = n.target.className, t = "onetrust-pc-btn-handler" === n.target.id, o = "ot-sdk-show-settings" === o, (t || o) && (o = t ? Eo : Oo, g.triggerGoogleAnalyticsEvent(Po, o)), _.pcSource = n.target), [4, w.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return _.pcLayer === ie.IabIllustrations ? Yn.hideUI() : (_.showVendorService && c.hideVendorList(), _.showTrackingTech && (w.currentSearchInput = "")), V.hideVendorsList(), I.pcName === nt && (A("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide"), A("" + w.PC_SELECTOR).el[0].removeAttribute("style"), t.setPcListContainerHeight()), A("" + w.FILTER_COUNT_SELECTOR).text("0"), A(w.VENDOR_SEARCH_SELECTOR).length && (A(w.VENDOR_SEARCH_SELECTOR).el[0].value = ""), _.currentGlobalFilteredList = [], _.filterByCategories = [], _.filterByIABCategories = [], _.vendors.searchParam = "", w.closeFilter(), _.pcLayer = ie.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : bo.setPCFocus(bo.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget;
            t.dataset.otVsId ? w.toggleVendorServiceHandler.bind(this)(e) : t.dataset.optanongroupid && w.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                e = e.dataset.optanongroupid,
                n = document.getElementById("ot-vendor-id-" + o);
            O.toggleVendorService(e, o, t, n)
        }, this.toggleVendorServiceHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                n = e.dataset.optanongroupid,
                n = (O.toggleVendorService(n, o, t, e), C.getVSById(o));
            w.setAriaLabelforButtonInFilter(n.ServiceName)
        }, this.toggleV2Category = function(e, t, o, n) {
            t || (r = this.getAttribute("data-optanongroupid"), i = "function" == typeof this.getAttribute, a = b.findIndex(_.dataGroupState, function(e) {
                return i && e.CustomGroupId === r
            }), t = _.dataGroupState[a]), void 0 === o && (o = A(this).is(":checked")), L.ChoicesBanner && b.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n ? document.querySelector("#ot-group-id-" + n) && (b.setCheckedAttribute("#ot-group-id-" + n, null, o), s = document.querySelector("#ot-group-id-" + n)) : (b.setCheckedAttribute(null, s = this, o), s.parentElement.querySelector(".ot-switch-nob")), L.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? L.PCActiveText : L.PCInactiveText);
            var r, i, s, a = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateGroupToggles(t, o, a)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = b.findIndex(_.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                e = _.dataGroupState[e],
                o = A(t).is(":checked");
            w.toggleV2Category(null, e, o, e.CustomGroupId)
        }, this.shiftBannerFocus = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = !1;
            t && (o = "none" !== window.getComputedStyle(t).display), "Tab" !== e.code || o || bo.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, t = C.getGroupById(t),
                n = (void 0 === o && (o = A(this).is(":checked")), n ? (b.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : b.setCheckedAttribute(null, r = this, o), C.getParentGroup(t.Parent).ShowSubgroup),
                n = (L.PCShowConsentLabels && n && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? L.PCActiveText : L.PCInactiveText), this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out"));
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateSubGroupToggles(t, o, n), O.setVendorStateByGroup(t, o)
        }
    }
    ar.prototype.initialiseLandingPath = function() {
        var e = h.needReconsent();
        un.isLandingPage() ? un.setLandingPathParam(location.href) : e && !h.awaitingReconsent() ? (un.setLandingPathParam(location.href), k.writeCookieParam(S.OPTANON_CONSENT, p.AWAITING_RE_CONSENT, !0)) : (e || k.writeCookieParam(S.OPTANON_CONSENT, p.AWAITING_RE_CONSENT, !1), un.setLandingPathParam(p.NOT_LANDING_PAGE), I.isSoftOptInMode && !v.moduleInitializer.MobileSDK && g.setAlertBoxClosed(!0), L.NextPageCloseBanner && L.ShowAlertNotice && V.nextPageCloseBanner())
    };
    var ir, sr = ar;

    function ar() {}
    dr.prototype.insertCookiePolicyHtml = function() {
        if (A(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t, o, n = document.createDocumentFragment(),
                r = (G.cookieListGroup && (t = L.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2", o = document.createElement("div"), A(o).html(G.cookieListGroup.html), o.removeChild(o.querySelector(t)), e = o.querySelector(".ot-sdk-cookie-policy"), L.useRTL) && A(e).attr("dir", "rtl"), e.querySelector("#cookie-policy-title").innerHTML = L.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = L.CookieListDescription || "", e.querySelector("section")),
                i = e.querySelector("section tbody tr"),
                s = null,
                a = null;
            L.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), A(e).el.removeChild(e.querySelector("section.subgroup"))), A(e).el.removeChild(e.querySelector("section")), !A(this.COOKIE_POLICY_SELECTOR).length && A(this.OPTANON_POLICY_SELECTOR).length ? A(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (A(this.COOKIE_POLICY_SELECTOR).html(""), A(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = L.Groups; l < c.length; l++) {
                var d = c[l],
                    u = {
                        json: L,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: n
                    };
                if (L.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(u);
                else if (this.insertGroupHTML(u), d.ShowSubgroup)
                    for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                        var g = h[p],
                            g = {
                                json: L,
                                group: g,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: n
                            };
                        this.insertGroupHTML(g)
                    }
            }
        }
    }, dr.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = this,
            r = e.json,
            i = e.group,
            s = e.sectionTemplate,
            a = e.tableRowTemplate,
            l = e.cookieList,
            e = e.fragment,
            c = s.cloneNode(!0),
            s = i.SubGroups,
            d = (A(t("tbody")).html(""), i.Hosts.slice()),
            u = i.FirstPartyCookies.slice(),
            p = d.length || u.length ? i.GroupName : "",
            s = (i.ShowSubgroup && s.length ? (o = c.querySelector("section.ot-sdk-subgroup ul li"), s.forEach(function(e) {
                var t = o.cloneNode(!0);
                d = d.concat(e.Hosts), u = u.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (p += "," + e.GroupName), A(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), A(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(n.groupsClass.safeFormattedGroupDescription(e)), A(o.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(o)) : c.removeChild(c.querySelector("section.ot-sdk-subgroup")), L.TTLGroupByTech && (this.setCookieListHeaderOrder(c), this.setCookieListBodyOrder(a)), r.IsLifespanEnabled ? A(t("th.ot-life-span")).el.innerHTML = r.LifespanText : A(t("thead tr")).el.removeChild(A(t("th.ot-life-span")).el), A(t("th.ot-cookies")).el.innerHTML = r.CookiesText, A(t("th.ot-host")).el.innerHTML = r.CategoriesText, A(t("th.ot-cookies-type")).el.innerHTML = r.CookiesUsedText, A(t("th.ot-host-description")).el.innerHTML = r.CookiesDescText, this.transformFirstPartyCookies(u, d, i)),
            h = !1;
        (h = L.TTLGroupByTech ? L.TTLShowTechDesc : s.some(function(e) {
            return e.Description
        })) || A(t("thead tr")).el.removeChild(A(t("th.ot-host-description")).el), A(t(".ot-sdk-cookie-policy-group")).html(i.GroupName), A(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)), L.TTLGroupByTech ? this.insertCookieLineByLine({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }) : this.insertHostHtmlV2({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }), 0 === s.length ? c.removeChild(c.querySelector("table")) : A(t("caption")).el.innerHTML = p, A(l).append(c), A(e).append(l), A(this.COOKIE_POLICY_SELECTOR).append(e)
    }, dr.prototype.insertHostHtmlV2 = function(e) {
        for (var l, c = e.json, t = e.hosts, d = e.tableRowTemplate, u = e.showHostDescription, p = e.st, h = this, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = d.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (h.clearCookieRowElement(o), []), r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                var a = s[i],
                    a = ((l = a).IsSession ? n.push(c.LifespanTypeText) : n.push(y.getDuration(l)), l.Name);
                e.Type && (a = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + l.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + l.Name + " " + L.NewWinTxt + '">\n                        ' + l.Name + "\n                    </a>"), r.push(a)
            }
            h.setDataLabelAttribute(o, c), h.createCookieRowHtmlElement({
                host: e,
                subGroupCookie: l,
                trt: o,
                json: c,
                lifespanText: n.join(", "),
                hostType: r.join(", ")
            }), h.removeLifeSpanOrHostDescription(c, u, t, o), A(p("tbody")).append(t)
        }(n[o])
    }, dr.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return l.querySelector(e)
        }
        var o, n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            e = e.fragment,
            l = i.cloneNode(!0),
            i = (A(t("caption")).el.innerHTML = r.GroupName, A(t("tbody")).html(""), A(t("thead tr")), n.IsLifespanEnabled ? A(t("th.life-span")).el.innerHTML = n.LifespanText : A(t("thead tr")).el.removeChild(A(t("th.life-span")).el), A(t("th.cookies")).el.innerHTML = n.CookiesText, A(t("th.host")).el.innerHTML = n.CategoriesText, !1);
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? i = !0 : A(t("thead tr")).el.removeChild(A(t("th.host-description")).el), A(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), A(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            A(t(".cookies-used-header")).html(n.CookiesUsedText), A(t(".cookies-list")).html("");
            for (var c = 0; c < r.FirstPartyCookies.length; c++) o = r.FirstPartyCookies[c], A(t(".cookies-list")).append("<li> " + y.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else l.removeChild(t(".cookies-used-header")), l.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: i,
            st: t
        }), A(a).append(l), A(e).append(a), A(this.COOKIE_POLICY_SELECTOR).append(e)
    }, dr.prototype.insertHostHtmlV1 = function(e) {
        for (var l = e.json, t = e.hosts, c = e.tableRowTemplate, d = e.showHostDescription, u = e.st, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = c.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (A(o(".cookies-td ul")).html(""), A(o(".life-span-td ul")).html(""), A(o(".host-td")).html(""), A(o(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> "), 0), r = 0, i = e.Cookies; r < i.length; r++) {
                var s = i[r],
                    a = "",
                    a = s.IsSession ? l.LifespanTypeText : 0 === s.Length ? "<1 " + l.LifespanDurationText || l.PCenterVendorListLifespanDays : s.Length + " " + l.LifespanDurationText || l.PCenterVendorListLifespanDays,
                    a = l.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                A(o(".cookies-td ul")).append("<li> " + s.Name + " " + a + " </li>"), l.IsLifespanEnabled && (a = s.Length ? s.Length + " days" : "N/A", A(o(".life-span-td ul")).append("<li>" + a + "</li>")), 0 === n && (A(o(".host-td")).append('<span class="ot-mobile-border"></span>'), A(o(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + L.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
            }
            d || t.removeChild(o("td.host-description-td")), A(u("tbody")).append(t)
        }(n[o]);
        0 === t.length && A(u("table")).el.removeChild(A(u("thead")).el)
    }, dr.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this,
            r = t.slice(),
            t = (e.forEach(function(e) {
                n.populateHostGroup(e, r, L.firstPartyTxt)
            }), o.GeneralVendorsIds),
            e = (this.populateGenVendor(t, o, r), o.SubGroups || []);
        return e.length && e.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, dr.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = L.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                var t;
                e.category === o.GroupName && (t = e.isThirdParty ? "" : L.firstPartyTxt, r.populateHostGroup(e, n, t))
            })
        })
    }, dr.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }, dr.prototype.insertCookieLineByLine = function(e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
            for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                var u = d[c],
                    p = u.IsSession ? t.LifespanTypeText : y.getDuration(u),
                    h = u.Name,
                    g = (l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + L.NewWinTxt + '">' + h + "\n                    </a>"), n.cloneNode(!0)),
                    C = this.queryToHtmlElement(g);
                this.clearCookieRowElement(C), this.createCookieRowHtmlElement({
                    host: l,
                    subGroupCookie: u,
                    trt: C,
                    json: t,
                    lifespanText: p,
                    hostType: h
                }), this.removeLifeSpanOrHostDescription(t, r, g, C), A(i("tbody")).append(g)
            }
    }, dr.prototype.removeLifeSpanOrHostDescription = function(e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")), t || o.removeChild(n("td.ot-host-description-td"))
    }, dr.prototype.createCookieRowHtmlElement = function(e) {
        var t = e.host,
            o = e.subGroupCookie,
            n = e.trt,
            r = e.json,
            i = e.lifespanText,
            e = e.hostType,
            s = ".ot-host-td",
            r = (this.setDataLabelAttribute(n, r), A(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "), A(n(s)).append('<span class="ot-mobile-border"></span>'), t.DisplayName || t.HostName);
        A(n(s)).append(t.Type ? r : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + r + " " + L.NewWinTxt + '">\n                        ' + r + "\n                        </a>"), n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", e), n(".ot-life-span-td .ot-life-span-td-content").innerText = i, n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? L.firstPartyTxt : L.thirdPartyTxt
    }, dr.prototype.setDataLabelAttribute = function(e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText), e(".ot-cookies-td").setAttribute(o, t.CookiesText), e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText), e(".ot-life-span-td").setAttribute(o, t.LifespanText), e(".ot-host-description-td").setAttribute(o, t.CookiesDescText)
    }, dr.prototype.clearCookieRowElement = function(e) {
        A(e(".ot-cookies-td span")).text(""), A(e(".ot-life-span-td span")).text(""), A(e(".ot-cookies-type span")).text(""), A(e(".ot-cookies-td .ot-cookies-td-content")).html(""), A(e(".ot-host-td")).html("")
    }, dr.prototype.setCookieListHeaderOrder = function(e) {
        var e = e.querySelector("section table thead tr"),
            t = e.querySelector("th.ot-host"),
            o = e.querySelector("th.ot-cookies"),
            n = e.querySelector("th.ot-life-span"),
            r = e.querySelector("th.ot-cookies-type"),
            i = e.querySelector("th.ot-host-description");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, dr.prototype.setCookieListBodyOrder = function(e) {
        var t = e.querySelector("td.ot-host-td"),
            o = e.querySelector("td.ot-cookies-td"),
            n = e.querySelector("td.ot-life-span-td"),
            r = e.querySelector("td.ot-cookies-type"),
            i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, dr.prototype.queryToHtmlElement = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    };
    var lr, cr = dr;

    function dr() {
        this.groupsClass = f, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    hr.prototype.IsAlertBoxClosedAndValid = function() {
        return h.isAlertBoxClosedAndValid()
    }, hr.prototype.LoadBanner = function() {
        g.loadBanner()
    }, hr.prototype.Init = function(e) {
        void 0 === e && (e = !1), Ne.insertViewPortTag(), G.ensureHtmlGroupDataInitialised(), gn.updateGtmMacros(!1), ir.initialiseLandingPath(), e || Qt.initialiseCssReferences()
    }, hr.prototype.FetchAndDownloadPC = function() {
        w.fetchAndSetupPC()
    }, hr.prototype.ToggleInfoDisplay = function() {
        g.triggerGoogleAnalyticsEvent(Po, Vo), w.toggleInfoDisplay()
    }, hr.prototype.Close = function(e) {
        w.close(e)
    }, hr.prototype.AllowAll = function(e) {
        V.allowAllEvent(e)
    }, hr.prototype.RejectAll = function(e) {
        V.rejectAllEvent(e)
    }, hr.prototype.sendReceipt = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, p.INTERACTION_TYPE);
        oi.createConsentTxn(!1, e, !1, !0, !0)
    }, hr.prototype.setDataSubjectIdV2 = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = ""), e && e.trim() && (e = e.replace(/ /g, ""), k.writeCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID, e, !0), _.dsParams.isAnonymous = t), null != (e = o) && e.trim() && k.writeCookieParam(S.OPTANON_CONSENT, p.IDENTIFIER_TYPE, o.trim())
    }, hr.prototype.getDataSubjectId = function() {
        return k.readCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID, !0)
    }, hr.prototype.synchroniseCookieWithPayload = function(n) {
        var e = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            e = b.strToArr(e),
            r = [];
        e.forEach(function(e) {
            var e = e.split(":"),
                t = C.getGroupById(e[0]),
                o = b.findIndex(n, function(e) {
                    return e.Id === t.PurposeId
                }),
                o = n[o];
            o ? o.TransactionType === xe ? (r.push(e[0] + ":1"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !0, t.CustomGroupId) : w.toggleV2Category(null, t, !0, t.CustomGroupId)) : (r.push(e[0] + ":0"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !1, t.CustomGroupId) : w.toggleV2Category(null, t, !1, t.CustomGroupId)) : r.push(e[0] + ":" + e[1])
        }), lo.writeGrpParam(S.OPTANON_CONSENT, r)
    }, hr.prototype.getGeolocationData = function() {
        return _.userLocation
    }, hr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        g.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, hr.prototype.ReconsentGroups = function() {
        var n = !1,
            e = k.readCookieParam(S.OPTANON_CONSENT, "groups"),
            r = b.strToArr(e),
            i = b.strToArr(e.replace(/:0|:1/g, "")),
            s = !1,
            t = k.readCookieParam(S.OPTANON_CONSENT, "hosts"),
            a = b.strToArr(t),
            l = b.strToArr(t.replace(/:0|:1/g, "")),
            c = ["inactive", "inactive landingpage", "do not track"];
        e && (L.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = b.indexOf(i, t); - 1 !== o && (e = C.getGrpStatus(e).toLowerCase(), -1 < c.indexOf(e)) && (n = !0, r[o] = t + ("inactive landingpage" === e ? ":1" : ":0"))
            })
        }), n) && lo.writeGrpParam(S.OPTANON_CONSENT, r), t && (L.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t, o = b.indexOf(l, e.HostId); - 1 !== o && (t = C.getGrpStatus(n).toLowerCase(), -1 < c.indexOf(t)) && (s = !0, a[o] = e.HostId + ("inactive landingpage" === t ? ":1" : ":0"))
                })
            })
        }), s) && lo.writeHstParam(S.OPTANON_CONSENT, a)
    }, hr.prototype.SetAlertBoxClosed = function(e) {
        g.setAlertBoxClosed(e)
    }, hr.prototype.GetDomainData = function() {
        return I.pubDomainData
    }, hr.prototype.setGeoLocation = function(e, t) {
        _.userLocation = {
            country: e,
            state: t = void 0 === t ? "" : t
        }
    }, hr.prototype.changeLang = function(t) {
        var o;
        t !== _.lang && (o = v.moduleInitializer, Dt.getLangJson(t).then(function(e) {
            e ? (I.init(e), G.fetchAssets(t).then(function() {
                var e = document.getElementById("onetrust-style"),
                    e = (e && (e.textContent = ""), Qt.initialiseCssReferences(), o.IsSuppressPC && !_.isPCVisible || (b.removeChild(A("#onetrust-pc-sdk").el), _.vendorDomInit = !1, _.genVendorDomInit = !1, B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), L.IsIabEnabled && (h.assignIABDataWithGlobalVendorList(_.gvlObj), N.InitializeVendorList()), _.isPCVisible && w.restorePc()), !0);
                h.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || _.skipAddingHTML) || L.NoBanner || (b.removeChild(A("#onetrust-banner-sdk").el), w.initializeAlartHtmlAndHandler(), e = !1), ur.initCookiePolicyAndSettings(), b.removeChild(A("#ot-sdk-btn-floating").el), di.insertCSBtn(e), ur.processedHtml = null, ur.updateTCStringOnLangChange(t)
            })) : console.error("Language:" + t + " doesn't exist for the geo rule")
        }))
    }, hr.prototype.updateTCStringOnLangChange = function(e) {
        I.isIab2orv2Template && (_.consentLanguage = e, _.tcModel.consentLanguage = _.consentLanguage, _.tcModel.useNonStandardTexts = L.UseNonStandardStacks, h.isAlertBoxClosedAndValid() || y.updateTCString())
    }, hr.prototype.initCookiePolicyAndSettings = function(e) {
        var t;
        (e = void 0 === e ? !1 : e) && (null != (t = document.querySelector(".ot-sdk-show-settings")) && t.removeEventListener("click", w.cookiesSettingsBoundListener), null != (t = document.querySelector(".optanon-toggle-display"))) && t.removeEventListener("click", w.cookiesSettingsBoundListener), v.fp.CookieV2TrackingTechnologies ? di.insertTrackingTechnologies() : lr.insertCookiePolicyHtml(), w.insertCookieSettingText(e)
    }, hr.prototype.showVendorsList = function() {
        _.pcLayer !== ie.VendorList && (w.showAllVendors(), g.triggerGoogleAnalyticsEvent(Po, wo))
    }, hr.prototype.getTestLogData = function() {
        var e = L.Groups,
            t = I.pubDomainData,
            o = v.moduleInitializer.Version,
            o = (console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain || L.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name), null !== h.alertBoxCloseDate()),
            n = (console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑")), []),
            r = (e.forEach(function(e) {
                var t = "",
                    t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : f.isGroupActive(e) ? "Active" : "Inactive";
                n.push({
                    CustomGroupId: e.CustomGroupId,
                    GroupName: e.GroupName,
                    Status: t
                })
            }), console.groupCollapsed("Current Category Status"), console.table(n), console.groupEnd(), []),
            o = (t.GeneralVendors.forEach(function(e) {
                r.push({
                    CustomGroupId: e.VendorCustomId,
                    Name: e.Name,
                    Status: ur.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
                })
            }), console.groupCollapsed("General Vendor Ids"), console.table(r), console.groupEnd(), I.getRegionRule()),
            t = _.userLocation,
            i = v.moduleInitializer.GeoRuleGroupName,
            t = (I.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), _.userLocation.country && console.info("The Geolocation is " + t.country.toUpperCase()), console.info("The Geolocation rule is " + o.Name), console.info("The GeolocationRuleGroup is " + i), I.canUseConditionalLogic ? (console.info("The Condition name is " + I.Condition.Name), console.info("The TemplateName is " + I.Condition.TemplateName)) : console.info("The TemplateName is " + o.TemplateName), console.groupEnd(), e.filter(function(e) {
                return f.isGroupActive(e) && "COOKIE" === e.Type
            }));
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), t.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            e = ur.getAllFormatCookiesForAGroup(e);
            console.table(e, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, hr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
    }, hr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null == (e = e.Hosts) ? void 0 : e.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), t
    }, hr.prototype.updateSingularConsent = function(l, c) {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        for (e.sent(), I.apiSource = te.UpdateConsent, t = c.split(","), o = [], n = 0, r = t; n < r.length; n++) s = r[n], s = s.split(":"), i = s[0], s = s[1], a = Boolean(Number(s)), l === dt ? "always active" === C.getGrpStatus(C.getGroupById(i)) || (ur.updateConsentArray(_.groupsConsent, i, s), o.push({
                            id: i,
                            isEnabled: a
                        })) : l === ut ? ur.updateConsentArray(_.hostsConsent, i, s) : l === pt ? _.genVendorsConsent[i] = a : l === ht && o.push({
                            id: i,
                            isEnabled: a
                        });
                        return V.handleTogglesOnSingularConsentUpdate(l, o), [2]
                }
            })
        })
    }, hr.prototype.vendorServiceEnabled = function() {
        return _.showVendorService
    }, hr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"), I.gcmUpdateCallback = e
    }, hr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        }); - 1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    };
    var ur, pr = hr;

    function hr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return di.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (B.insertPcHtml(), $n.insertAlertHtml()), ur.processedHtml || (ur.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), ur.processedHtml
        }, this.getCSS = function() {
            return Qt.processedCSS
        }, this.setConsentProfile = function(e) {
            var t, o;
            e.customPayload && null != (t = o = e.customPayload) && t.Interaction && k.writeCookieParam(S.OPTANON_CONSENT, p.INTERACTION_COUNT, o.Interaction), ur.setDataSubjectIdV2(e.identifier, e.isAnonymous, e.identifierType), ur.synchroniseCookieWithPayload(e.purposes), V.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n,
                l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (f.canInsertForGroup(r, l) && !b.contains(_.srcExecGrps, r)) {
                _.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && b.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a) && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && b.show(t)
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        b.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        b.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n,
                s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (f.canInsertForGroup(r, s) && !b.contains(_.htmlExecGrps, r)) {
                if (_.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && b.empty(t), b.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && b.show(t), i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        b.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        b.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !f.canInsertForGroup(t)
        }
    }
    gr.prototype.getFieldsValues = function(e, t, o, n, r) {
        void 0 === r && (r = !1);
        e = this.getSectionFieldsMapping(e), t = this.getSectionFieldsMapping(t, !0), o = this.getDynamicFields(o, n), n = this.getMSPASectionFieldValue(), r = r ? this.getGpcSectionFieldValue() : {};
        return R(R(R(R(R({}, e), t), o), n), r)
    }, gr.prototype.getGpcSectionFieldValue = function() {
        var e = {};
        return e[Ve.GpcSegmentType] = 1, e[Ve.Gpc] = I.gpcEnabled, e
    }, gr.prototype.getMSPASectionFieldValue = function() {
        var e = {};
        return L.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1, L.MSPAOptionMode === Oe.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1, e.MspaOptOutOptionMode = 2) : L.MSPAOptionMode === Oe.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2, e.MspaServiceProviderMode = 0, e.MspaOptOutOptionMode = 0), e
    }, gr.prototype.getDynamicArrayFieldsValue = function(e, t) {
        for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = 1; i <= Object.keys(r).length; i++) n.push(r[e + i]);
        return o[e] = n, o
    }, gr.prototype.getDynamicFields = function(e, t) {
        var o, n = {};
        return L.IsGPPKnownChildApplicable && e && (o = this.getDynamicArrayFieldsValue(Be.KnownChildSensitiveDataConsents, e), n = R(R({}, n), o)), L.IsGPPDataProcessingApplicable && t && (o = this.getDynamicArrayFieldsValue(Be.SensitiveDataProcessing, t), n = R(R({}, n), o)), n
    }, gr.prototype.getSectionFieldsMapping = function(e, o) {
        var n = this,
            r = (void 0 === o && (o = !1), {});
        return Object.entries(e).forEach(function(e) {
            var t = e[0],
                e = e[1],
                e = n.evaluateValueOperators(e);
            r[t] = n.calculateFieldValue(e, o)
        }), r
    }, gr.prototype.evaluateValueOperators = function(e) {
        var t, o, n = "",
            r = [];
        return e && (t = e.split(" && "), o = e.split(" || "), r = (1 < t.length ? (n = "&&", t) : 1 < o.length ? (n = "||", o) : (n = "", [e])).map(function(e) {
            return L.GPPPurposes[e] || ""
        })), {
            values: r,
            operator: n
        }
    }, gr.prototype.calculateFieldValue = function(e, t) {
        var o;
        if (e.values.length) switch (e.operator) {
            case "&&":
                o = this.calculateAndFieldValue(e.values, t);
                break;
            case "||":
                o = this.calculateOrFieldValue(e.values, t);
                break;
            default:
                o = this.calculateSingleFieldValue(e.values[0], t)
        } else o = 0;
        return o
    }, gr.prototype.calculateOrFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.some(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, gr.prototype.calculateAndFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.every(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, gr.prototype.calculateSingleFieldValue = function(e, t) {
        return e && this.isValidGroup(e) ? (e = this.fieldValueCondition(e, t), this.calculateFieldValueFromBit(e, t)) : 0
    }, gr.prototype.isValidGroup = function(e) {
        e = e ? C.getGroupById(e) : null;
        return !!e && I.isValidConsentNoticeGroup(e, L.IsIabEnabled)
    }, gr.prototype.calculateFieldValueFromBit = function(e, t) {
        t = t ? e ? 1 : 0 : e ? 2 : 1;
        return t
    }, gr.prototype.isNotApplicable = function(e) {
        var t = this;
        return !e.some(function(e) {
            return Boolean(e) && t.isValidGroup(e)
        })
    }, gr.prototype.fieldValueCondition = function(e, t) {
        return t ? Boolean(e) : ur.isCategoryActive(e)
    };
    var s = gr;

    function gr() {}
    D(vr, Cr = s), vr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(zt, Kt, Wt, Jt, !0)
    };
    var Cr, yr, fr, mr, Sr = vr;

    function vr() {
        return null !== Cr && Cr.apply(this, arguments) || this
    }(l = yr = yr || {}).SaleOptOut = "SaleOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = fr = fr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = mr = mr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Tr, kr = s), Tr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(yr, fr, null, mr, !1)
    };
    var kr, br, Pr = Tr;

    function Tr() {
        return null !== kr && kr.apply(this, arguments) || this
    }(l = br = br || {}).Version = "version", l.CmpId = "cmpId", l.CmpVersion = "cmpVersion", l.ConsentScreen = "consentScreen", l.ConsentLanguage = "consentLanguage", l.VendorListVersion = "vendorListVersion", l.PolicyVersion = "policyVersion", l.IsServiceSpecific = "isServiceSpecific", l.UseNonStandardStacks = "useNonStandardTexts", l.PurposeOneTreatment = "purposeOneTreatment", l.PublisherCountryCode = "publisherCountryCode", l.NumCustomPurposes = "numCustomPurposes", l.VendorsAllowedSegmentType = "VendorsAllowedSegmentType", l.VendorsDisclosedSegmentType = "VendorsDisclosedSegmentType", l.PublisherPurposesSegmentType = "PublisherPurposesSegmentType";
    Or.prototype.getSectionFieldsValues = function() {
        for (var e = {}, t = 0, o = Object.keys(br); t < o.length; t++) {
            var n = o[t],
                r = br[n];
            _.tcModel && _.tcModel[r] && (e[n] = _.tcModel[r])
        }
        e.ConsentLanguage = null == (i = e.ConsentLanguage) ? void 0 : i.toString().toUpperCase();
        var i = this.setPurposesData();
        return R(R({}, e), i)
    }, Or.prototype.setPurposesData = function() {
        var e = {},
            t = _.oneTrustIABConsent,
            o = this.getConsentValuesFromPurpose(t.purpose),
            o = (e.PurposeConsents = o, e.PublisherConsents = o, I.legIntSettings.PAllowLI ? this.getConsentValuesFromPurpose(t.legimateInterest) : []);
        return e.PurposeLegitimateInterests = o, e.PublisherLegitimateInterests = o, e.VendorConsents = this.syncVendorConsent(_.tcModel.vendorConsents), I.legIntSettings.PAllowLI && !o.length && (t.legIntVendors = []), e.VendorLegitimateInterests = this.getConsentValuesFromPurpose(b.distinctArray(t.legIntVendors), !0, !0), e.SpecialFeatureOptins = this.getConsentValuesFromPurpose(t.specialFeatures), e
    }, Or.prototype.syncVendorConsent = function(e) {
        var e = e.clone(),
            o = [];
        return e.forEach(function(e, t) {
            _.vendorsSetting[t] && _.vendorsSetting[t].consent || !e || o.push(t)
        }), e.unset(o), Array.from(e.values())
    }, Or.prototype.getConsentValuesFromPurpose = function(e, t, o) {
        var n = (t = void 0 === t ? !1 : t) ? 0 : 1;
        return (o = void 0 === o ? !1 : o) && (e = e.filter(function(e) {
            return "true" === e.split(":")[1]
        })), t ? e.map(function(e) {
            return parseInt(e.split(":")[n])
        }) : e.map(function(e) {
            return "true" === e.split(":")[n]
        })
    };
    var Ar, Ir, Lr, _r, Er = Or;

    function Or() {}(l = Ar = Ar || {}).SaleOptOut = "SaleOptOutCID", l.SharingOptOut = "SharingOptOutCID", l.PersonalDataConsents = "PersonalDataCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = Ir = Ir || {}).SharingNotice = "SharingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.SharingOptOutNotice = "SharingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.SensitiveDataLimitUseNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Lr = Lr || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID", l.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID", (l = _r = _r || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID", l.SensitiveDataProcessing9 = "SensitivePICID", l.SensitiveDataProcessing10 = "SensitiveSICID", l.SensitiveDataProcessing11 = "UnionMembershipCID", l.SensitiveDataProcessing12 = "CommunicationCID";
    D(xr, Vr = s), xr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Ar, Ir, Lr, _r, !0)
    };
    var Vr, Br, wr, Gr, Nr = xr;

    function xr() {
        return null !== Vr && Vr.apply(this, arguments) || this
    }(l = Br = Br || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = wr = wr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Gr = Gr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID";
    D(Ur, Dr = s), Ur.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Br, wr, null, Gr, !0)
    };
    var Dr, Hr, Rr, Fr, Mr, qr = Ur;

    function Ur() {
        return null !== Dr && Dr.apply(this, arguments) || this
    }(l = Hr = Hr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = Rr = Rr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Fr = Fr || {}).KnownChildSensitiveDataConsents1 = "KnownChildProcessCID", l.KnownChildSensitiveDataConsents2 = "KnownChildSellPICID", l.KnownChildSensitiveDataConsents3 = "KnownChildSharePICID", (l = Mr = Mr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Yr, jr = s), Yr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Hr, Rr, Fr, Mr, !0)
    };
    var jr, zr, Kr, Wr, Jr = Yr;

    function Yr() {
        return null !== jr && jr.apply(this, arguments) || this
    }(l = zr = zr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = Kr = Kr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || SexualOrientationCID || ImmigrationCID || HealthCID || GeneticCID || BiometricCID || GeolocationCID", (l = Wr = Wr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "SexualOrientationCID", l.SensitiveDataProcessing4 = "ImmigrationCID", l.SensitiveDataProcessing5 = "HealthCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Zr, Xr = s), Zr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(zr, Kr, null, Wr, !1)
    };
    var Xr, Qr = Zr;

    function Zr() {
        return null !== Xr && Xr.apply(this, arguments) || this
    }
    ti.prototype.initGppConsent = function() {
        this.initTemplateAndSectionInstance(), this.cmpApi.setApplicableSections(this.getApplicableSections(this.gppTemplateApplied));
        var o, n, e = this.readGppCookies(),
            t = this.getCurrentSectionName(this.gppTemplateApplied),
            r = !1;
        e && (h.needReconsent() ? this.deleteAllGppCookies() : (this.cmpApi.setGppString(e), r = !0)), this.cmpApi.setSupportedAPIs((o = [], n = {}, Object.keys(Ge).forEach(function(e) {
            var t = {},
                e = (t[e] = Ge[e], Object.assign(t, n));
            n = e
        }), Object.keys(we).map(function(e) {
            return {
                name: e,
                value: we[e]
            }
        }).forEach(function(e) {
            e = n[e.name] + ":" + e.value;
            o.push(e)
        }), o.filter(function(e, t) {
            return o.indexOf(e) === t
        }))), this.cmpApi.setCmpStatus(null == (e = this.gppSDKRef) ? void 0 : e.cmpStatus.LOADED), this.cmpApi.setSignalStatus(null == (e = this.gppSDKRef) ? void 0 : e.signalStatus.READY), (t && !this.cmpApi.hasSection(t) || I.gpcBrowserValueChanged || _.grpsSynced && 0 < _.grpsSynced.length) && this.setOrUpdateGppSectionString(t, r), window.OneTrust.OnConsentChanged(this.updateGppConsentString)
    }, ti.prototype.initTemplateAndSectionInstance = function() {
        this.gppTemplateApplied = this.getGppTemplateApplied(), this.gppSection = this.getSectionInstance(this.gppTemplateApplied)
    }, ti.prototype.setCmpDisplayStatus = function(e) {
        var t;
        "visible" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.VISIBLE) : "hidden" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.HIDDEN) : "disabled" === e && this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.DISABLED)
    }, ti.prototype.setGppCookies = function(e, t) {
        t ? this.updateGppCookies(e) : (t = this.getCookiesChunk(e), e = Object.keys(t).length, this.writeGppCookies(e, t))
    }, ti.prototype.readGppCookies = function() {
        var e = Number(k.readCookieParam(S.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        if (e <= 1) return 0 === e ? "" : k.getCookie(S.GPP_CONSENT);
        for (var t = "", o = 1; o <= e; o++) var n = k.getCookie("" + Ee.Name + o),
            t = t.concat(n);
        return t
    }, ti.prototype.deleteGppCookies = function(e, t) {
        if (0 < e && (1 === e && (k.setCookie("" + Ee.Name, "", 0, !0), e++), e <= t))
            for (var o = e; o <= t; o++) k.setCookie("" + Ee.Name + o, "", 0, !0)
    }, ti.prototype.getSectionInstance = function(e) {
        var t;
        switch (e) {
            case _e.CPRA:
            case _e.CCPA:
                t = new Sr;
                break;
            case _e.CDPA:
                t = new Pr;
                break;
            case _e.USNATIONAL:
                t = new Nr;
                break;
            case _e.COLORADO:
                t = new qr;
                break;
            case _e.CONNECTICUT:
                t = new Jr;
                break;
            case _e.UCPA:
                t = new Qr;
                break;
            case _e.IAB2V2:
                t = new Er
        }
        return t
    }, ti.prototype.hasGPPSection = function() {
        return !!this.gppSection
    }, ti.prototype.getGppTemplateApplied = function() {
        return L.UseGPPUSNational ? _e.USNATIONAL : I.getRegionRuleType()
    }, ti.prototype.initGppSDK = function() {
        var e, t = Number.parseInt((null == (t = v.moduleInitializer.GppData) ? void 0 : t.cmpId) || "28");
        return null == (e = this.gppSDKRef) ? void 0 : e.gppCmpApi(t, 1.1)
    }, ti.prototype.setOrUpdateGppSectionString = function(o, e) {
        var n = this,
            t = this.gppSection.getSectionFieldsValues();
        Object.entries(t).forEach(function(e) {
            var t = e[0],
                e = e[1];
            n.cmpApi.setFieldValue(o, t, e)
        }), this.cmpApi.fireSectionChange(o), this.setGppCookies(this.cmpApi.getGppString(), e)
    }, ti.prototype.getCurrentSectionName = function(o) {
        var e, t = "",
            n = Object.entries(we).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, ti.prototype.getCurrentSectionId = function(o) {
        var e, t = 0,
            n = Object.entries(Ge).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, ti.prototype.updateGppCookies = function(e) {
        var e = this.getCookiesChunk(e),
            t = Object.keys(e).length,
            o = Number(k.readCookieParam(S.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.writeGppCookies(t, e), t < o && this.deleteGppCookies(t + 1, o)
    }, ti.prototype.deleteAllGppCookies = function() {
        var e = Number(k.readCookieParam(S.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.deleteGppCookies(1, e)
    }, ti.prototype.getCookiesChunk = function(e) {
        for (var t = {}, o = !1, n = e, r = 1; n.length;) {
            var i, s = void 0;
            n.length > Ee.ChunkSize ? s = Ee.ChunkSize : (s = n.length, o = 1 === r), o ? (t[Ee.Name] = n, n = "") : (i = n.slice(0, s), n = n.slice(s, n.length), t["" + Ee.Name + r] = i), r++
        }
        return t
    }, ti.prototype.writeGppCookies = function(e, t) {
        k.writeCookieParam(S.OPTANON_CONSENT, Ee.ChunkCountParam, e);
        for (var o = 0, n = Object.entries(t); o < n.length; o++) {
            var r = n[o],
                i = r[0],
                r = r[1];
            k.setCookie(i, r, L.ReconsentFrequencyDays)
        }
    }, ti.prototype.getSupportedAPIs = function() {
        return Object.values(we).filter(function(e, t, o) {
            return o.indexOf(e) === t
        })
    }, ti.prototype.getApplicableSections = function(e) {
        return [this.getCurrentSectionId(e)]
    };
    var $r, ei = ti;

    function ti() {
        var e, t = this;
        this.gppSDKRef = null == (e = window.otIabModule) ? void 0 : e.gppSdkRef, this.cmpApi = this.initGppSDK(), this.updateGppConsentString = function() {
            t.cmpApi.getCmpDisplayStatus() === (null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.VISIBLE) && t.cmpApi.setCmpDisplayStatus(null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.HIDDEN);
            var e = t.getCurrentSectionName(t.gppTemplateApplied);
            t.setOrUpdateGppSectionString(e, !0)
        }
    }
    ri.prototype.ensureConsentId = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = !1,
            r = !0,
            i = k.readCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID, !0),
            s = _.dsParams,
            a = (s && s.hasOwnProperty("isAnonymous") && (r = s.isAnonymous), s = k.readCookieParam(S.OPTANON_CONSENT, p.IDENTIFIER_TYPE, !1), this.updateConsentIntAttributes(r, s)),
            r = a.isAnonymous,
            s = a.idTypeUpdated,
            a = e || !t || o ? 0 : (n = !0, 1);
        return i ? (e = parseInt(k.readCookieParam(S.OPTANON_CONSENT, p.INTERACTION_COUNT), 10), isNaN(e) || (t && !o && ++e, a = e, n = !1)) : (i = b.generateUUID(), k.writeCookieParam(S.OPTANON_CONSENT, p.CONSENT_ID, i)), k.writeCookieParam(S.OPTANON_CONSENT, p.INTERACTION_COUNT, a), k.writeCookieParam(S.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT, r ? "1" : "0"), {
            id: i,
            count: a,
            addDfltInt: n,
            identifierType: s,
            isAnonymous: r
        }
    }, ri.prototype.isAuthUsr = function(e) {
        _.consentPreferences ? k.writeCookieParam(S.OPTANON_CONSENT, "iType", "") : k.writeCookieParam(S.OPTANON_CONSENT, "iType", "" + pe[e])
    }, ri.prototype.isBannerClosedByIconOrLink = function() {
        var e = _.bannerCloseSource;
        return e === $.BannerCloseButton || e === $.ContinueWithoutAcceptingButton
    }, ri.prototype.addCrossDeviceAttributes = function(e) {
        _.isV2Stub && (e.syncGroup = _.syncGrpId, I.isIab2orv2Template && !h.isIABCrossConsentEnabled() && (e.tcStringV2 = k.getCookie(S.EU_PUB_CONSENT)), L.UseGoogleVendors) && (e.gacString = k.getCookie(S.ADDITIONAL_CONSENT_STRING))
    }, ri.prototype.addAdvAnalyticsAttributes = function(e, t) {
        var o = C.getGroupById(L.AdvancedAnalyticsCategory);
        o && this.canSendAdvancedAnalytics(e.purposes, o) && (o = window.navigator.userAgent, e.dsDataElements = {
            InteractionType: t,
            Country: _ && _.userLocation && /^[a-zA-Z]{2}$/.test(_.userLocation.country) ? _.userLocation.country.toLowerCase() : "",
            UserAgent: o,
            ConsentModel: L.ConsentModel.Name
        })
    }, ri.prototype.canSendConsentReceipt = function(e, t, o) {
        return e || I.apiSource === te.UpdateConsent || _.consentInteractionType !== t || o
    }, ri.prototype.addGppStringAttribute = function(e) {
        L.IsGPPEnabled && $r.hasGPPSection() && $r.updateGppConsentString();
        var t = k.getCookie(S.GPP_CONSENT);
        t && (e.gppString = t)
    }, ri.prototype.addConsentStringToPayload = function(e) {
        var t, o, n;
        null != (t = v.moduleInitializer.TenantFeatures) && t.ConsentStoreConsentStrings && (t = k.getCookie(S.EU_PUB_CONSENT), o = I.getRegionRuleType(), n = I.isIab2orv2Template || "IABC" === o, L.IsGPPEnabled && e.hasOwnProperty("gppString") && e.gppString ? (e.consentString = {
            type: "gpp",
            content: e.gppString
        }, delete e.gppString) : n && t && (e.consentString = {
            type: "IABC" === o ? "tcfcanada" : "IAB2" !== o && "IAB2V2" !== o ? "" : "tcfeu",
            content: t
        }))
    }, ri.prototype.createConsentTxn = function(e, t, o, n, r) {
        void 0 === t && (t = ""), void 0 === o && (o = !1);
        var i = this.ensureConsentId(e, n = void 0 === n ? !0 : n, r = void 0 === r ? !1 : r),
            s = L.ConsentIntegration,
            a = window.navigator.userAgent,
            a = /OneTrustBot/.test(a);
        s.ConsentApi && s.RequestInformation && i.id && !a && (a = v.moduleInitializer, oi.noOptOutToogle = a.TenantFeatures.CookieV2NoOptOut, oi.isCloseByIconOrLink = this.isBannerClosedByIconOrLink(), i = {
            requestInformation: s.RequestInformation,
            identifier: i.id,
            identifierType: i.identifierType,
            customPayload: {
                Interaction: i.count,
                AddDefaultInteraction: i.addDfltInt
            },
            isAnonymous: i.isAnonymous,
            test: a.ScriptType === qe || a.ScriptType === Ue,
            purposes: this.getConsetPurposes(e),
            dsDataElements: {}
        }, this.handleReceiptsWhenSendReceiptIsEnabled(i, r, t), this.addCrossDeviceAttributes(i), this.addAdvAnalyticsAttributes(i, t), this.addGppStringAttribute(i), this.addConsentStringToPayload(i), !a.MobileSDK && n && i.purposes.length && (a = JSON.stringify(i), n = this.getAuthToken(), this.sendBeaconSupported(e, n) ? (navigator.sendBeacon(s.ConsentApi, a), h.dispatchConsentEvent()) : this.canSendConsentReceipt(o, t, r) && (_.isV2Stub && t && this.isAuthUsr(t), wt.ajax({
            url: s.ConsentApi,
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(i),
            sync: e,
            success: function() {
                h.dispatchConsentEvent()
            },
            error: function() {
                h.dispatchConsentEvent()
            },
            token: n
        }))), I.pubDomainData.ConsentIntegrationData = {
            consentApi: s.ConsentApi,
            consentPayload: i
        }), _.consentInteractionType = t, this.storeInteractionType(t)
    }, ri.prototype.storeInteractionType = function(e) {
        var t;
        null != (t = e) && t.length && (isNaN(e) && (e = pe[e]), k.writeCookieParam(S.OPTANON_CONSENT, p.INTERACTION_TYPE, e))
    }, ri.prototype.getAuthToken = function() {
        var e = null;
        return e = L.ConsentIntegration.EnableJWTAuthForKnownUsers && _.dsParams.id && _.dsParams.token ? _.dsParams.token : e
    }, ri.prototype.sendBeaconSupported = function(e, t) {
        return e && navigator.sendBeacon && !t
    }, ri.prototype.handleReceiptsWhenSendReceiptIsEnabled = function(e, t, o) {
        !_.isV2Stub && t && ((t = k.getCookie(S.ALERT_BOX_CLOSED)) && (e.interactionDate = t), o && (e.InteractionType = o), e.enableDataElementDateValidation = !0)
    }, ri.prototype.updateConsentIntAttributes = function(e, t) {
        var o, n = "";
        return !1 !== (null == (o = L.ConsentIntegration) ? void 0 : o.IdentifiedReceiptsAllowed) && _.isV2Stub || (e = !0, n = null == (o = L.ConsentIntegration) ? void 0 : o.DefaultAnonymousIdentifier), (_.isV2Stub || null != (o = L.ConsentIntegration) && o.IdentifiedReceiptsAllowed && !_.isV2Stub) && (e = (o = this.setAnonymityBasedOnKnownUserOrNot(e, t)).isAnonymous, n = o.idTypeUpdated), {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ri.prototype.setAnonymityBasedOnKnownUserOrNot = function(e, t) {
        var o, n = "",
            n = null != (o = _.dsParams) && o.id ? (e = !1, null != (o = t) && o.trim().length ? t : null == (o = L.ConsentIntegration) ? void 0 : o.DefaultIdentifier) : (e = !0, null == (t = L.ConsentIntegration) ? void 0 : t.DefaultAnonymousIdentifier);
        return {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ri.prototype.getGrpDetails = function(e, o) {
        var n = [];
        return e.forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = "true" === e[1] ? "1" : "0",
                t = oi.getOptanonIdForIabGroup(t, o);
            n.push(t + ":" + e)
        }), n
    }, ri.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === oe.Purpose ? o = T.IdPatterns.Pur + e : t === oe.SpecialFeature && (o = T.IdPatterns.Spl_Ft + e), o
    }, ri.prototype.getConsetPurposes = function(o) {
        var n = this,
            r = [],
            e = [],
            t = _.oneTrustIABConsent,
            i = t && t.purpose ? this.getGrpDetails(t.purpose, oe.Purpose) : [],
            s = t && t.specialFeatures ? this.getGrpDetails(t.specialFeatures, oe.SpecialFeature) : [],
            e = M(t.specialPurposes, t.features);
        return M(_.groupsConsent, i, s).forEach(function(e) {
            var e = e.split(":"),
                t = C.getGroupById(e[0]);
            t && t.PurposeId && (e = n.getTransactionType(t, e, o), r.push({
                Id: t.PurposeId,
                TransactionType: e.txnType
            }), n.setVSConsentByGroup(t, e).forEach(function(e) {
                return r.push(e)
            }))
        }), e.forEach(function(e) {
            e.purposeId && r.push({
                Id: e.purposeId,
                TransactionType: He
            })
        }), _.bannerCloseSource = $.Unknown, r
    }, ri.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return _.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? _.vsConsent.get(e.CustomVendorServiceId) ? xe : De : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, ri.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: He,
            useOwn: !1
        };
        return e.Status === m.ALWAYS_ACTIVE ? n.txnType = He : e.Status.toLowerCase() === m.ALWAYS_INACTIVE || e.Status === m.INACTIVE && oi.isCloseByIconOrLink || o ? n.txnType = Re : e.Status === m.ACTIVE && oi.isCloseByIconOrLink ? n.txnType = oi.noOptOutToogle ? Fe : xe : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, ri.prototype.getTxnType = function(e) {
        return "0" === e ? De : xe
    }, ri.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [xe, He];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, ri.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || e.Type === T.GroupTypes.Stack ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    };
    var oi, ni = ri;

    function ri() {}
    var G, ii = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        si = "opt-out",
        ai = (li.prototype.initializeFeaturesAndSpecialPurposes = function() {
            var t = this;
            _.oneTrustIABConsent.features = [], _.oneTrustIABConsent.specialPurposes = [], L.Groups.forEach(function(e) {
                t.checkAndPopulateFeatAndSplPur(e)
            })
        }, li.prototype.checkAndPopulateFeatAndSplPur = function(e) {
            var t, o = this,
                n = T.GroupTypes;
            e.Type !== n.Ft && e.Type !== n.Spl_Pur || ((t = {}).groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, (e.Type === n.Ft ? _.oneTrustIABConsent.features : _.oneTrustIABConsent.specialPurposes).push(t)), e.SubGroups && e.SubGroups.forEach(function(e) {
                o.checkAndPopulateFeatAndSplPur(e)
            })
        }, li.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(I.consentableGrps), L.showCookieList && y.isOptOutEnabled() ? this.initializeHostData(I.consentableGrps) : (_.hostsConsent = [], lo.writeHstParam(S.OPTANON_CONSENT))
        }, li.prototype.ensureHtmlGroupDataInitialised = function() {
            var e, t, o, n;
            this.initGrpsAndHosts(), _.showGeneralVendors && (yo.populateGenVendorLists(), yo.initGenVendorConsent()), L.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), _.vsIsActiveAndOptOut && this.initializeVendorsService(), h.setOrUpdate3rdPartyIABConsentFlag(), h.setGeolocationInCookies(), L.IsConsentLoggingEnabled && (e = window.OneTrust.dataSubjectParams || {}, t = k.readCookieParam(S.OPTANON_CONSENT, "iType"), o = "", n = !1, _.isV2Stub && e.id && e.token && (t || I.forceCreateTrxLocalConsentIsGreater) && (n = !0, o = pe[t]), oi.createConsentTxn(!1, o, !1, n))
        }, li.prototype.initializeVendorsService = function() {
            var o = h.isAlertBoxClosedAndValid(),
                e = k.readCookieParam(S.OPTANON_CONSENT, ho),
                n = b.strToMap(e);
            _.getVendorsInDomain().forEach(function(e, t) {
                n.has(t) || (e = !o && C.checkIsActiveByDefault(e.groupRef), n.set(t, e))
            }), _.vsConsent = n
        }, li.prototype.initializeGroupData = function(e) {
            var t;
            k.readCookieParam(S.OPTANON_CONSENT, co) ? (So.synchroniseCookieGroupData(e), t = k.readCookieParam(S.OPTANON_CONSENT, co), _.groupsConsent = b.strToArr(t), _.gpcConsentTxn && (L.IsConsentLoggingEnabled && oi.createConsentTxn(!1, "GPC value changed", !1, !0), _.gpcConsentTxn = !1, g.setAlertBoxClosed(!0))) : (_.groupsConsent = [], e.forEach(function(e) {
                _.groupsConsent.push("" + e.CustomGroupId + (C.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), L.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, li.prototype.initializeHostData = function(e) {
            var t, r;
            k.readCookieParam(S.OPTANON_CONSENT, "hosts") ? (So.synchroniseCookieHostData(), t = k.readCookieParam(S.OPTANON_CONSENT, "hosts"), _.hostsConsent = b.strToArr(t), e.forEach(function(e) {
                C.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    _.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            })) : (_.hostsConsent = [], r = {}, e.forEach(function(e) {
                var o = C.isAlwaysActiveGroup(e),
                    n = _.syncRequired ? So.groupHasConsent(e) : C.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    var t;
                    r[e.HostId] ? So.updateHostStatus(e, n) : (r[e.HostId] = !0, o && _.oneTrustAlwaysActiveHosts.push(e.HostId), t = So.isHostPartOfAlwaysActiveGroup(e.HostId), _.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0")))
                })
            }))
        }, li.prototype.consentDefaulCall = function() {
            var e = parseInt(k.readCookieParam(S.OPTANON_CONSENT, p.INTERACTION_COUNT), 10);
            !isNaN(e) && 0 !== e || (g.triggerGoogleAnalyticsEvent(Po, "Click", "No interaction"), L.IsConsentLoggingEnabled && oi.createConsentTxn(!0), window.removeEventListener("beforeunload", G.consentDefaulCall))
        }, li.prototype.fetchAssets = function(s) {
            return void 0 === s && (s = null), u(this, void 0, void 0, function() {
                var t, o, n, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = v.moduleInitializer, i = h.isAlertBoxClosedAndValid(), o = !!s, i = G.isFetchBanner(t.IsSuppressBanner, i), n = G.cookieSettingBtnPresent(), n = I.isIab2orv2Template ? L.PCShowPersistentCookiesHoverButton && (!L.PCenterDynamicRenderingEnable || L.PCenterDynamicRenderingEnable && !n) : L.PCShowPersistentCookiesHoverButton, r = "true" === _.urlParams.get(at), _.hideBanner = r, [4, Promise.all([!i || L.NoBanner || r ? Promise.resolve(null) : Dt.getBannerContent(o, s), !t.IsSuppressPC || _.isPCVisible ? Dt.getPcContent() : Promise.resolve(null), n ? Dt.getCSBtnContent() : Promise.resolve(null), Dt.getCommonStyles()])];
                        case 1:
                            return i = e.sent(), r = i[0], o = i[1], t = i[2], n = i[3], G.fetchContent(r, o, t, n), G.setCookieListGroupData(), [2]
                    }
                })
            })
        }, li.prototype.fetchContent = function(e, t, o, n) {
            var r;
            e && (r = e.html, v.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {
                name: e.name,
                html: r,
                css: e.css
            }), t && (this.preferenceCenterGroup = {
                name: t.name,
                html: atob(t.html),
                css: t.css
            }, v.isV2Template = L.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
                name: "CookieSettingsButton",
                html: atob(o.html),
                css: o.css
            }), n && (this.commonStyles = n)
        }, li.prototype.cookieSettingBtnPresent = function() {
            return A("#ot-sdk-btn").length || A(".ot-sdk-show-settings").length || A(".optanon-show-settings").length
        }, li.prototype.isFetchBanner = function(e, t) {
            return !e || L.ShowAlertNotice && !t && e && !A("#onetrust-banner-sdk").length
        }, li.prototype.setCookieListGroupData = function() {
            var e;
            v.fp.CookieV2TrackingTechnologies || (e = (new ii).assets(), G.cookieListGroup = {
                name: e.name,
                html: e.html,
                css: L.useRTL ? e.cssRTL : e.css
            })
        }, li.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            I.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, li.prototype.initializeIABData = function(o, n, r) {
            var i = this,
                e = (void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), _.oneTrustIABConsent),
                t = (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], _.addtlVendors),
                s = L.VendorConsentModel === si;
            t.vendorConsent = [], !e.IABCookieValue || o || n || h.reconsentRequired() ? (I.consentableIabGrps.forEach(function(e) {
                var t;
                n && !r ? i.setIABConsent(e, C.isAlwaysActiveGroup(e)) : r ? e.HasConsentOptOut && i.setIABConsent(e, !1) : (t = o && e.HasConsentOptOut, i.setIABConsent(e, t), e.Type === T.GroupTypes.Pur && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut)))
            }), L.IsIabEnabled && r && (_.oneTrustIABConsent.legimateInterest = _.vendors.selectedLegInt.slice()), t = o || !n && s, h.setIABVendor(t, r), !h.reconsentRequired() || o || n || h.resetTCModel()) : (this.initializeIabPurposeConsentOnReload(), no.populateGoogleConsent(), no.populateVendorAndPurposeFromCookieData())
        }, li.prototype.canSoftOptInInsertForGroup = function(e) {
            var e = C.getGroupById(e);
            if (e) return e = e && !e.Parent ? e : C.getParentGroup(e.Parent), "inactive landingpage" !== C.getGrpStatus(e).toLowerCase() || !un.isLandingPage()
        }, li.prototype.setIABConsent = function(e, t) {
            e.Type === T.GroupTypes.Spl_Ft ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, li.prototype.setIabPurposeConsent = function(o, n) {
            var r = !1;
            _.oneTrustIABConsent.purpose = _.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || _.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, li.prototype.setIabLegIntConsent = function(o, n) {
            var r = !1;
            _.oneTrustIABConsent.legimateInterest = _.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || _.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, li.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var r = !1;
            _.oneTrustIABConsent.specialFeatures = _.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || _.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, li);

    function li() {}
    a.prototype.getSearchQuery = function(e) {
        var t = this,
            e = e.trim().split(/\s+/g);
        return new RegExp(e.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, a.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, a.prototype.setGlobalFilteredList = function(e) {
        return _.currentGlobalFilteredList = e
    }, a.prototype.vendorHasPurpose = function(e, t) {
        var o = !1,
            n = parseInt(I.iabGrpIdMap[t]);
        return -1 < t.indexOf(T.IdPatterns.Ft) ? (e.features || []).forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Ft) ? e.specialFeatures.forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Pur) ? (e.specialPurposes || []).forEach(function(e) {
            e.purposeId === n && (o = !0)
        }) : (e.purposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        }), e.legIntPurposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        })), o
    }, a.prototype.filterList = function(t, e, o) {
        var n, r, i = o && o.length;
        return "" !== t || i ? (i && (i = A("#onetrust-pc-sdk " + P.P_Fltr_Options + " input").el.length, r = !(n = []), i !== o.length ? e.forEach(function(t) {
            r = !0, t.vendorName && o.forEach(function(e) {
                N.vendorHasPurpose(t, e) && n.push(t)
            })
        }) : n = e, r && (n = n.filter(function(e, t, o) {
            return o.indexOf(e) === t
        })), this.setGlobalFilteredList(n)), "" === t ? _.currentGlobalFilteredList : _.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })) : this.setGlobalFilteredList(e)
    }, a.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = _.vendors,
            o = (_.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, _.filterByIABCategories = [], fn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = _.filterByIABCategories, this.filterList(o.searchParam, o.list, t));
        A("#onetrust-pc-sdk " + P.P_Vendor_Content).el[0].scrollTop = 0, _.addtlVendorsList && 0 < Object.keys(_.addtlVendorsList).length && (this.hasGoogleVendors = !0), this.initVendorsData(e, o)
    }, a.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r, i, s = this.getSearchQuery(n),
                a = 0;
            for (r in t) r && (i = o === me.GoogleVendor ? r : t[r].VendorCustomId, i = A("" + e.vendorAccBtn + i).el[0].parentElement, s.lastIndex = 0, s.test(t[r][e.name]) ? (d(i, this._displayNull, !0), a++) : d(i, "display: none;", !0));
            0 === a ? (A(e.accId).hide(), o === me.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === me.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, A(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var l = A(" " + e.venListId + ' li[style^="display: none"]').el, c = 0; c < l.length; c++) d(l[c], this._displayNull, !0);
        n = A("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? b.setCheckedAttribute("", n, !0) : b.setCheckedAttribute("", n, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? n.parentElement.classList.add("line-through") : n.parentElement.classList.remove("line-through")
    }, a.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(_.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, a.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), L.GenVenOptOut && L.GeneralVendors && L.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, a.prototype.resetAddtlVendors = function() {
        N.searchVendors(N.googleSearchSelectors, _.addtlVendorsList, me.GoogleVendor), this.showConsentHeader()
    }, a.prototype.venAdtlSelAllTglEvent = function() {
        N.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, a.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: P.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        N.selectAllEventHandler(e)
    }, a.prototype.selectAllEventHandler = function(e) {
        for (var t = A(e.vendorsList).el, o = A(e.selAllCntr).el[0], n = A(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        b.setCheckedAttribute("", n, n.checked)
    }, a.prototype.vendorLegIntToggleEvent = function() {
        for (var e = A(P.P_Vendor_Container + ' li:not([style^="display: none"]) .' + P.P_Ven_Ltgl + " input").el, t = A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).el[0], o = A("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked)
    }, a.prototype.vendorsListEvent = function() {
        for (var e = A(P.P_Vendor_Container + ' li:not([style^="display: none"]) .' + P.P_Ven_Ctgl + " input").el, t = A("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).el[0], o = A("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked)
    }, a.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = A("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (A("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, a.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(P.P_Host_Cntr + " > li") : document.querySelectorAll(P.P_Vendor_Container + ' li:not([style$="none;"]),' + P.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = A('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, a.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r, i = A("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = N.getNoResultsFound(t), o = document.createElement("div"), n = document.createElement("p"), t = document.createTextNode(t), r = document.createElement("span"), o.id = "no-results", r.id = "user-text", r.innerText = e, n.appendChild(r), n.appendChild(t), o.appendChild(n), A("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass("no-results"), A("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), A("#onetrust-pc-sdk " + P.P_Vendor_Content).append(o);
        i.querySelector("span").innerText = e
    }, a.prototype.searchHostList = function(e) {
        var t = {},
            o = [];
        _.showTrackingTech ? (t = _.currentTrackingTech, o = (t = e ? N.getFilteredAdditionaTechtData(e, t) : t).Cookies) : (o = _.currentGlobalFilteredList, e && (o = this.searchList(e, o))), this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }, a.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, a.prototype.setListSearchValues = function(e) {
        var t = L.PCenterVendorSearchAriaLabel,
            o = L.PCenterVendorListSearch,
            n = L.PCenterVendorsListText,
            e = (e === Le.cookies && (t = L.PCenterCookieSearchAriaLabel, o = L.PCenterCookieListSearch, n = L.PCenterCookiesListText), _.cookieListType !== Ce.HostAndGenVen && _.cookieListType !== Ce.Host || !_.showTrackingTech || (n = L.AdditionalTechnologiesConfig.PCTrackingTechTitle), document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title).innerText = n, A("#onetrust-pc-sdk " + P.P_Vendor_Search_Input));
        e.el[0].placeholder = o, e.attr("aria-label", t)
    }, a.prototype.initHostData = function(e) {
        var t = e.searchString,
            o = e.cookiesList,
            e = e.addTechData,
            n = (_.optanonHostList = o, !1),
            r = (this.setBackBtnTxt(), A(P.P_Vendor_List + " #select-all-text-container p").html(L.PCenterAllowAllConsentText), N.getHostParentContainer()),
            i = o && 0 === o.length,
            s = (_.showTrackingTech && (i = 0 === e.LocalStorages.length && 0 === e.SessionStorages.length && (0 === e.Cookies.length || 0 === e.Cookies[0].Cookies.length)), _.cookieListType === Ce.Host);
        this.showEmptyResults(i, t, s), this.setHostListSearchValues(), A("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCenterCookieListFilterAria);
        A("#filter-btn-handler title").html(L.PCenterCookieListFilterAria), v.isV2Template && A("#ot-sel-blk span:first-child").html(L.PCenterAllowAllConsentText || L.ConsentText);
        for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
            var c = _.hosts.hostTemplate.cloneNode(!0),
                d = o[l].DisplayName || o[l].HostName;
            this.createHostAccordions(d, c, l), n = this.createHostCheckboxes(d, o, l, c, n), this.populateHostDataIntoDOMElements(c, o, d, l, a)
        }
        N.setCookiesInsideHostContainer(r, a, e);
        i = 1 === o.length && o[0].HostName === L.PCFirstPartyCookieListText;
        if (y.isOptOutEnabled() && !i) {
            b.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !n);
            for (var u = A("#onetrust-pc-sdk " + P.P_Host_Cntr + " .ot-host-tgl input").el, p = 0; p < u.length; p++) u[p].addEventListener("click", this.hostsListEvent);
            A("#onetrust-pc-sdk " + P.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else A("#onetrust-pc-sdk " + P.P_Select_Cntr).addClass("ot-hide")
    }, a.prototype.setCookiesInsideHostContainer = function(e, t, o) {
        var n, r;
        _.showTrackingTech && o ? 0 < (o = N.getAdditionalTechnologiesHtml(o)).children.length && ((n = o.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt")) && ((r = e.querySelector("ul" + P.P_Host_Cntr)).appendChild(t), n.appendChild(r)), e.appendChild(o)) : e.appendChild(t)
    }, a.prototype.getHostParentContainer = function() {
        var e = null;
        return _.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"), N.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr)).innerHTML = "", e
    }, a.prototype.removeTrackingTechAccorions = function() {
        var e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"),
            t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + P.P_Host_Cntr);
        if (t ? (t.innerHTML = "", e.appendChild(t)) : (t = e.querySelector("ul" + P.P_Host_Cntr)).innerHTML = "", e)
            for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                var r = o.item(n);
                e.removeChild(r)
            }
    }, a.prototype.setHostListSearchValues = function() {
        var e = I.pcName;
        L.GeneralVendorsEnabled && (v.isV2Template || e !== st) && this.setListSearchValues(Le.vendors), L.GeneralVendorsEnabled || !v.isV2Template && e === st || this.setListSearchValues(Le.cookies)
    }, a.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + P.P_Host_Bx),
            e = (n && b.setHtmlAttributes(n, {
                id: "host-" + o,
                name: "host-" + o,
                "aria-label": e + " " + L.PCViewCookiesText,
                "aria-controls": "ot-host-acc-txt-" + o
            }), t.querySelector(P.P_Acc_Txt));
        e && b.setHtmlAttributes(e, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }, a.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = y.isOptOutEnabled(),
            s = v.isV2Template,
            a = I.pcName;
        return !i || t[o].isFirstParty ? (i = n.querySelector(".ot-host-tgl")) && i.parentElement.removeChild(i) : (i = void 0, s ? ((i = E.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), i.querySelector("input").classList.add("host-checkbox-handler"), a === st ? n.querySelector(P.P_Host_Hdr).insertAdjacentElement("beforebegin", i) : n.querySelector(P.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)) : i = n.querySelector(".ot-host-tgl"), b.setHtmlAttributes(i.querySelector("input"), {
            id: "ot-host-chkbox-" + o,
            "aria-label": e,
            hostId: t[o].HostId,
            ckType: t[o].Type
        }), i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === ge.GenVendor ? _.genVendorsConsent[t[o].HostId] : -1 !== _.hostsConsent.indexOf(t[o].HostId + ":1")) ? (b.setCheckedAttribute(null, i.querySelector("input"), !0), t[o].isActive ? b.setDisabledAttribute(null, i.querySelector("input"), !0) : r = r || !0) : (r = !0, b.setCheckedAttribute(null, i.querySelector("input"), !1)), i.querySelector(P.P_Label_Txt).innerText = e), r
    }, a.prototype.populateHostDataIntoDOMElements = function(t, o, e, n, r) {
        var i, s = this,
            a = v.isV2Template,
            l = I.pcName,
            l = (L.PCAccordionStyle === le.PlusMinus ? t.querySelector(P.P_Acc_Header).insertAdjacentElement("afterbegin", E.plusMinusEl.cloneNode(!0)) : a && (i = E.arrowEl.cloneNode(!0), l === st ? t.querySelector(P.P_Host_View_Cookies).insertAdjacentElement("afterend", i) : t.querySelector(P.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)), L.AddLinksToCookiepedia && !o[n].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + o[n].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + L.NewWinTxt + "</span>\n                            </a>\n                        "), t.querySelector(P.P_Host_Title).innerHTML = e, t.querySelector(P.P_Host_Desc).innerHTML = o[n].Description, o[n].PrivacyPolicy && L.pcShowCookieHost && t.querySelector(P.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + o[n].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? L.PCGVenPolicyTxt : L.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + L.NewWinTxt + "</span></a>"), t.querySelector(P.P_Host_View_Cookies));
        return !_.showGeneralVendors || o[n].Cookies && o[n].Cookies.length ? L.PCViewCookiesText && (l.innerHTML = L.PCViewCookiesText) : (b.removeChild(l), A(t).addClass("ot-hide-acc")), o[n].Description && L.pcShowCookieHost || (i = t.querySelector(P.P_Host_Desc)).parentElement.removeChild(i), A(t.querySelector(P.P_Host_Opt)).html(""), null != (a = o[n].Cookies) && a.forEach(function(e) {
            e = s.getCookieElement(e, o[n]);
            A(t.querySelector(P.P_Host_Opt)).append(e)
        }), r.append(t), e
    }, a.prototype.hostsListEvent = function() {
        for (var e = A("#onetrust-pc-sdk " + P.P_Host_Cntr + " .ot-host-tgl input").el, t = A("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).el[0], o = A("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = A("#onetrust-pc-sdk " + P.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + L.PCenterSelectAllVendorsText)
    }, a.prototype.loadHostList = function(e, t) {
        var o = {},
            n = [],
            n = _.showTrackingTech ? (o = N.getAdditionalTechnologiesDataFromGroup(t), (_.currentTrackingTech = o).Cookies) : N.getCombinedCookieList(t);
        _.currentGlobalFilteredList = n, this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }, a.prototype.getCombinedCookieList = function(e) {
        var t, o = [],
            n = [];
        return _.cookieListType !== Ce.GenVen && (n = (t = N.getFirstsAndThirdCookisFromGroups(e)).firstPartyCookiesList, o = t.thirdPartyCookiesList, n.length) && o.unshift({
            HostName: L.PCFirstPartyCookieListText,
            DisplayName: L.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: n,
            Description: ""
        }), _.showGeneralVendors ? (t = this.getFilteredGenVendorsList(e), M(o, this.mapGenVendorListToHostFormat(t))) : o
    }, a.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: ge.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < _.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, a.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: ge.GenVendor
        }
    }, a.prototype.getFilteredGenVendorsList = function(t) {
        var e, o = [],
            n = [];
        return t.length ? (L.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                    o.push(e)
                })
            })
        }), e = L.GeneralVendors, o.length ? e.filter(function(e) {
            if (-1 < o.indexOf(e.VendorCustomId)) return e
        }) : n) : L.GeneralVendors
    }, a.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            t = _.vendors.list;
        if (this.setBackBtnTxt(), A(P.P_Vendor_List + " #select-all-text-container p").html(L.PCenterAllowAllConsentText), N.setConsentLegIntAndHeaderText(), A("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCenterVendorListFilterAria), A("#onetrust-pc-sdk #filter-btn-handler title").html(L.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), N.hideOrShowVendorList(n), A("#onetrust-pc-sdk " + P.P_Vendor_Container + " ." + P.P_Ven_Bx).length !== t.length && this.attachVendorsToDOM(), n.length !== t.length) t.forEach(function(e) {
            var t = A(P.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? d(t, "display: none;", !0) : d(t, o._displayNull, !0)
        });
        else
            for (var r = A(P.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < r.length; i++) d(r[i], this._displayNull, !0);
        !v.isV2Template && I.pcName === st || this.setListSearchValues(Le.vendors);
        e = document.querySelector("#vdr-lst-dsc");
        !e && L.PCenterVendorListDescText && ((e = document.createElement("p")).id = "vdr-lst-dsc", A(e).html(L.PCenterVendorListDescText), I.pcName !== st && I.pcName !== nt ? (t = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title_Elm)) && t.insertAdjacentElement("afterend", e) : (t = document.querySelector(P.P_Vendor_Content + " .ot-sdk-row")) && t.insertAdjacentElement("beforebegin", e)), A("#onetrust-pc-sdk " + P.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), I.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, a.prototype.setConsentLegIntAndHeaderText = function() {
        v.isV2Template && (A("#ot-sel-blk span:first-child").html(L.PCenterAllowAllConsentText || L.ConsentText), A("#ot-sel-blk span:last-child").html(L.LegitInterestText), A("#onetrust-pc-sdk " + P.P_Cnsnt_Header).html(L.PCenterAllowAllConsentText), I.legIntSettings.PAllowLI && !I.legIntSettings.PShowLegIntBtn && A("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(L.PCenterLegitInterestText), I.legIntSettings.PAllowLI && !I.legIntSettings.PShowLegIntBtn || d(A("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }, a.prototype.hideOrShowVendorList = function(e) {
        0 === e.length ? A("#ot-lst-cnt .ot-acc-cntr").hide() : A("#ot-lst-cnt .ot-acc-cntr").show(), _.showTrackingTech && N.removeTrackingTechAccorions()
    }, a.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = A(P.P_Vendor_Container + " " + P.P_Tgl_Cntr).el, n = 0; n < o.length; n++) {
            var r = o[n].querySelector("." + P.P_Ven_Ctgl + " input"),
                i = o[n].querySelector("." + P.P_Ven_Ltgl + " input");
            t ? (r && b.setCheckedAttribute("", r, !1), i && b.setCheckedAttribute("", i, !0)) : (r && b.setCheckedAttribute("", r, e), i && b.setCheckedAttribute("", i, e))
        }
        var s = A("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0],
            s = (s && (s.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", s, !!t || e)), A("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0]);
        s && (s.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", s, !t && e)), L.UseGoogleVendors && (t ? this.updateGoogleCheckbox(!1) : this.updateGoogleCheckbox(e)), _.showGeneralVendors && L.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, a.prototype.updateGenVenCheckbox = function(e) {
        for (var t = A(P.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) b.setCheckedAttribute("", t[o], e);
        var n = A("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", n, e))
    }, a.prototype.updateGoogleCheckbox = function(e) {
        for (var t = A("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) b.setCheckedAttribute("", t[o], e);
        var n = A("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", n, e))
    }, a.prototype.updateVendorDisclosure = function(e, t) {
        var r, i, e = A(P.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        t && t.disclosures && (r = e.querySelector(P.P_Ven_Dets), (e = (i = e.querySelector(P.P_Ven_Disc).cloneNode(!0)).cloneNode(!0)).innerHTML = "<p><b>" + L.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", e), t.disclosures.forEach(function(e) {
            var t, o = i.cloneNode(!0),
                n = "<p>" + L.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
            e.type && (n += "<p>" + L.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds && (t = b.calculateCookieLifespan(e.maxAgeSeconds), n += "<p>" + L.PCenterVendorListLifespan + " </p> <p>" + t + " </p>"), e.domain && (n += "<p>" + L.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (n += "<p>" + L.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function(e) {
                e = null == (e = I.iabGroups.purposes[e]) ? void 0 : e.name;
                e && (n += ' <p class="disc-pur">' + e + " </p>")
            }), n += "</div>"), o.innerHTML = n, r.insertAdjacentElement("beforeend", o)
        }), this.updateDomainsUsageInDisclosures(t, i, r))
    }, a.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        var t;
        e.domains && e.domains.length && ((t = n.cloneNode(!0)).innerHTML = "<p><b>" + L.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function(e) {
            var t, o = n.cloneNode(!0);
            e.domain && (t = "<p>" + L.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + L.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
        }))
    }, a.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, a.prototype.setVdrConsentTglOrChbox = function(e, t, o, n, r, i) {
        var s, a, l = _.vendorsSetting[e],
            t = t.cloneNode(!0);
        l.consent && (t.classList.add(P.P_Ven_Ctgl), l = -1 !== wt.inArray(e + ":true", _.vendors.selectedVendors), s = t.querySelector("input"), v.isV2Template && (s.classList.add("vendor-checkbox-handler"), a = t.querySelector(this.LABEL_STATUS), L.PCShowConsentLabels ? a.innerHTML = l ? L.PCActiveText : L.PCInactiveText : b.removeChild(a)), b.setCheckedAttribute("", s, l), b.setHtmlAttributes(s, {
            id: P.P_Vendor_CheckBx + "-" + i,
            vendorid: e,
            "aria-label": o
        }), t.querySelector("label").setAttribute("for", P.P_Vendor_CheckBx + "-" + i), t.querySelector(P.P_Label_Txt).textContent = o, I.pcName === st ? L.PCTemplateUpgrade ? n.insertAdjacentElement("beforeend", t) : A(n).append(t) : n.insertBefore(t, r))
    }, a.prototype.setVndrLegIntTglTxt = function(e, t) {
        e = e.querySelector(this.LABEL_STATUS);
        L.PCShowConsentLabels ? e.innerHTML = t ? L.PCActiveText : L.PCInactiveText : b.removeChild(e)
    }, a.prototype.setVdrLegIntTglOrChbx = function(e, t, o, n, r, i, s) {
        var a, l, c = _.vendorsSetting[e],
            o = o.cloneNode(!0);
        c.legInt && !c.specialPurposesOnly && (a = -1 !== wt.inArray(e + ":true", _.vendors.selectedLegIntVendors), I.legIntSettings.PShowLegIntBtn ? (l = h.generateLegIntButtonElements(a, e, !0), t.querySelector(P.P_Acc_Txt).insertAdjacentHTML("beforeend", l), (l = t.querySelector(".ot-remove-objection-handler")) && d(l, l.getAttribute("data-style"))) : (l = o.querySelector("input"), v.isV2Template && (l.classList.add("vendor-checkbox-handler"), this.setVndrLegIntTglTxt(o, a)), o.classList.add(P.P_Ven_Ltgl), l.classList.remove("vendor-checkbox-handler"), l.classList.add("vendor-leg-checkbox-handler"), b.setCheckedAttribute("", l, a), b.setHtmlAttributes(l, {
            id: P.P_Vendor_LegCheckBx + "-" + r,
            "leg-vendorid": e,
            "aria-label": n
        }), o.querySelector("label").setAttribute("for", P.P_Vendor_LegCheckBx + "-" + r), o.querySelector(P.P_Label_Txt).textContent = n, t.querySelector("." + P.P_Ven_Ctgl) && (i = t.querySelector("." + P.P_Ven_Ctgl)), I.pcName !== st || s.children.length ? s.insertBefore(o, i) : A(s).append(o), c.consent || I.pcName !== st || o.classList.add(P.P_Ven_Ltgl_Only)))
    }, a.prototype.setVndrSplPurSection = function(e, t) {
        var o = this,
            n = e.querySelector(".spl-purpose"),
            e = e.querySelector(".spl-purpose-grp"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), I.isIab2orv2Template && t.specialPurposes.forEach(function(e) {
            A(r.querySelector(o.CONSENT_CATEGORY)).text(e.purposeName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialPurposes.length ? n.parentElement.removeChild(n) : A(n.querySelector("p")).text(L.SpecialPurposesText)
    }, a.prototype.setVndrFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-feature"),
            e = e.querySelector(".vendor-feature-group"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), A(n.querySelector("p")).text(L.FeaturesText), t.features.forEach(function(e) {
            A(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.features.length && n.parentElement.removeChild(n)
    }, a.prototype.setVndrSplFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-spl-feature"),
            e = e.querySelector(".vendor-spl-feature-grp"),
            r = e.cloneNode(!0);
        n.parentElement.removeChild(e), I.isIab2orv2Template && t.specialFeatures.forEach(function(e) {
            A(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialFeatures.length ? n.parentElement.removeChild(n) : A(n.querySelector("p")).text(L.SpecialFeaturesText)
    }, a.prototype.setVndrAccTxt = function(e, t) {
        t = t.querySelector(P.P_Acc_Txt);
        t && b.setHtmlAttributes(t, {
            id: "IAB-ACC-TXT" + e,
            "aria-labelledby": "IAB-ACC-TXT" + e,
            role: "region"
        })
    }, a.prototype.setVndrDisclosure = function(e, t, o) {
        t.deviceStorageDisclosureUrl && (b.setHtmlAttributes(o, {
            "disc-vid": e
        }), _.discVendors[e] = {
            isFetched: !1,
            disclosureUrl: t.deviceStorageDisclosureUrl
        })
    }, a.prototype.setVndrListSelectAllChkBoxs = function() {
        var e = A("#onetrust-pc-sdk " + P.P_Sel_All_Vendor_Consent_Handler).el[0],
            e = (e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCenterSelectAllVendorsText + " " + L.LegitInterestText), A("#onetrust-pc-sdk " + P.P_Sel_All_Vendor_Leg_Handler).el[0]);
        e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCenterSelectAllVendorsText + " " + L.ConsentText)
    }, a.prototype.setVndrConsentPurposes = function(e, t, o) {
        var n = this,
            r = e.querySelector(".vendor-consent-group"),
            i = e.querySelector(".vendor-option-purpose"),
            s = r.cloneNode(!0),
            a = e.querySelector(".legitimate-interest"),
            l = !1;
        return r.parentElement.removeChild(r), t.consent && (A(i.querySelector("p")).text(L.ConsentPurposesText), o.purposes.forEach(function(e) {
            A(s.querySelector(n.CONSENT_CATEGORY)).text(e.purposeName);
            e = s.querySelector(".consent-status");
            e && s.removeChild(e), a.insertAdjacentHTML("beforebegin", s.outerHTML), l = !0
        })), t.consent || i.parentElement.removeChild(i), l
    }, a.prototype.getVndrTglCntr = function(e) {
        return v.isV2Template ? E.chkboxEl.cloneNode(!0) : e.querySelector(".ot-checkbox")
    }, a.prototype.attachVendorsToDOM = function() {
        for (var u, p, h = this, g = _.vendors.list, C = _.vendors.vendorTemplate.cloneNode(!0), y = (_.discVendors = {}, v.isV2Template && (u = C.querySelector(".ot-ven-pur").cloneNode(!0), p = C.querySelector(P.P_Ven_Disc).cloneNode(!0), A(C.querySelector(".ot-ven-dets")).html("")), document.createDocumentFragment()), f = this, e = 0; e < g.length; e++) ! function(e) {
            var t, o, n = C.cloneNode(!0),
                r = g[e].vendorId,
                i = g[e].vendorName,
                s = n.querySelector("." + P.P_Ven_Bx),
                a = _.vendorsSetting[r],
                l = (b.setHtmlAttributes(s, {
                    id: "IAB" + r,
                    name: "IAB" + r,
                    "aria-controls": "IAB-ACC-TXT" + r,
                    "aria-label": i
                }), s.nextElementSibling.setAttribute("for", "IAB" + r), n.querySelector(P.P_Ven_Name).innerText = i, f.updateIABLinksDOM(g[e], n), f.getVndrTglCntr(n)),
                c = n.querySelector(P.P_Tgl_Cntr),
                d = (v.isV2Template || l.parentElement.removeChild(l), n.querySelector(P.P_Arrw_Cntr));
            f.setVdrConsentTglOrChbox(r, l, i, c, d, e), f.setVdrLegIntTglOrChbx(r, n, l, i, e, d, c), v.isV2Template && (c.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0)), L.PCAccordionStyle !== le.Caret) && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), f.setVndrAccTxt(r, n), f.setVndrDisclosure(r, g[e], s), v.isV2Template ? f.populateVendorDetailsHtml(n, u, g[e], p) : (t = n.querySelector(".legitimate-interest"), l = n.querySelector(".legitimate-interest-group"), o = l.cloneNode(!0), p = n.querySelector(P.P_Ven_Disc), i = n.querySelector(P.P_Ven_Dets), d = p.cloneNode(!0), p.parentElement.removeChild(p), f.attachVendorDisclosure(d, g[e]), i.insertAdjacentElement("afterbegin", d), f.setVndrConsentPurposes(n, a, g[e]), c = o.querySelector(".vendor-opt-out-handler"), I.isIab2orv2Template && c.parentElement.removeChild(c), l.parentElement.removeChild(l), a.legInt && (A(t.querySelector("p")).text(L.LegitimateInterestPurposesText), I.legIntSettings.PAllowLI) && I.isIab2orv2Template && g[e].legIntPurposes.forEach(function(e) {
                A(o.querySelector(h.CONSENT_CATEGORY)).text(e.purposeName), t.insertAdjacentHTML("afterend", o.outerHTML)
            }), a.legInt || t.parentElement.removeChild(t), f.setVndrSplPurSection(n, g[e]), f.setVndrFtSection(n, g[e]), f.setVndrSplFtSection(n, g[e]), (r = s.parentElement.querySelector(".vendor-purposes p")).parentElement.removeChild(r)), y.appendChild(n), f.setVndrListSelectAllChkBoxs()
        }(e);
        document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Container).append(y)
    }, a.prototype.updateIABLinksDOM = function(e, t) {
        var o = e.vendorName,
            n = t.querySelector(P.P_Ven_Link),
            t = t.querySelector(P.P_Ven_Leg_Claim),
            r = I.isTcfV2Template ? e.vendorPrivacyUrl : e.policyUrl;
        b.setHtmlAttributes(n, {
            href: r,
            rel: "noopener",
            target: "_blank"
        }), n.innerHTML = L.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + L.NewWinTxt + "</span>", n.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), I.isTcfV2Template && e.legIntClaim && 0 < L.PCIABVendorLegIntClaimText.trim().length ? (b.setHtmlAttributes(t, {
            href: e.legIntClaim,
            rel: "noopener",
            target: "_blank"
        }), t.innerHTML = L.PCIABVendorLegIntClaimText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + L.NewWinTxt + "</span>", t.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>")) : t.remove()
    }, a.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r, i, s, a, l, c, d, u, e = e.querySelector(".ot-ven-dets"),
            p = _.vendorsSetting[o.vendorId],
            n = n.cloneNode(!0);
        this.attachVendorDisclosure(n, o), e.insertAdjacentElement("beforeEnd", n), I.isTcfV2Template && null != (n = o.dataDeclaration) && n.length && (n = t.cloneNode(!0), r = "<h4>" + L.PCVListDataDeclarationText + "</h4>", r += "<ul>", o.dataDeclaration.forEach(function(e) {
            r += "<li><p>" + e.Name + "</p></li>"
        }), r += "</ul>", n.innerHTML = r, e.insertAdjacentElement("beforeEnd", n)), I.isTcfV2Template && null !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && void 0 !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && (n = t.cloneNode(!0), c = 1 === o.dataRetention.stdRetention ? L.PCenterVendorListLifespanDay : L.PCenterVendorListLifespanDays, s = "<h4>" + L.PCVListDataRetentionText + "</h4>", s += "<li><p>" + L.PCVListStdRetentionText + " (" + o.dataRetention.stdRetention + " " + c + ")</p></li>", n.innerHTML = s, e.insertAdjacentElement("beforeEnd", n)), p.consent && (c = t.cloneNode(!0), i = "<h4>" + L.ConsentPurposesText + "</h4>", i += "<ul>", o.purposes.forEach(function(e) {
            var t;
            i += "<li><p>" + e.purposeName, I.isTcfV2Template && null != (t = o.dataRetention) && t.purposes && o.dataRetention.purposes[e.purposeId] && (e = 1 === (t = o.dataRetention.purposes[e.purposeId].retention) ? L.PCenterVendorListLifespanDay : L.PCenterVendorListLifespanDays, i += " (" + t + " " + e + ")"), i += "</p></li>"
        }), i += "</ul>", c.innerHTML = i, e.insertAdjacentElement("beforeEnd", c)), p.legInt && o.legIntPurposes.length && (s = t.cloneNode(!0), a = "<h4>" + L.LegitimateInterestPurposesText + "</h4>", a += "<ul>", o.legIntPurposes.forEach(function(e) {
            a += "<li><p>" + e.purposeName + "</p></li>"
        }), a += "</ul>", s.innerHTML = a, e.insertAdjacentElement("beforeEnd", s)), I.isIab2orv2Template && o.specialPurposes.length && (n = t.cloneNode(!0), l = "<h4>" + L.SpecialPurposesText + "</h4>", l += "<ul>", o.specialPurposes.forEach(function(e) {
            var t;
            l += "<li><p>" + e.purposeName, I.isTcfV2Template && null != (t = o.dataRetention) && t.specialPurposes && o.dataRetention.specialPurposes[e.purposeId] && (e = 1 === (t = o.dataRetention.specialPurposes[e.purposeId].retention) ? L.PCenterVendorListLifespanDay : L.PCenterVendorListLifespanDays, l += " (" + t + " " + e + ")"), l += "</p></li>"
        }), l += "</ul>", n.innerHTML = l, e.insertAdjacentElement("beforeEnd", n)), o.features.length && (c = t.cloneNode(!0), d = "<h4>" + L.FeaturesText + "</h4>", d += "<ul>", o.features.forEach(function(e) {
            d += "<li><p>" + e.featureName + "</p></li>"
        }), d += "</ul>", c.innerHTML = d, e.insertAdjacentElement("beforeEnd", c)), I.isIab2orv2Template && o.specialFeatures.length && (p = t.cloneNode(!0), u = "<h4>" + L.SpecialFeaturesText + "</h4>", u += "<ul>", o.specialFeatures.forEach(function(e) {
            u += "<li><p>" + e.featureName + "</p></li>"
        }), u += "</ul>", p.innerHTML = u, e.insertAdjacentElement("beforeEnd", p))
    }, a.prototype.InitializeVendorList = function() {
        var e;
        _.vendors.list = _.iabData ? _.iabData.vendors : null, _.vendors.vendorTemplate = A(P.P_Vendor_Container + " li").el[0].cloneNode(!0), A("#onetrust-pc-sdk " + P.P_Vendor_Container).html(""), v.isV2Template || I.pcName !== st || (e = _.vendors.vendorTemplate.querySelectorAll(P.P_Acc_Header), (e = I.legIntSettings.PAllowLI && I.isIab2orv2Template ? e[0] : e[1]).parentElement.removeChild(e))
    }, a.prototype.cancelVendorFilter = function() {
        for (var e = A("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"),
                o = 0 <= _.filterByIABCategories.indexOf(o);
            b.setCheckedAttribute(null, e[t], o)
        }
    }, a.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + L.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + L.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, a.prototype.updateVendorFilterList = function() {
        for (var e = A("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-purposeid");
            e[t].checked && _.filterByIABCategories.indexOf(n) < 0 ? _.filterByIABCategories.push(n) : !e[t].checked && -1 < _.filterByIABCategories.indexOf(n) && (o = _.filterByIABCategories, _.filterByIABCategories.splice(o.indexOf(n), 1))
        }
        return _.filterByIABCategories
    }, a.prototype.saveVendorStatus = function() {
        var e = _.vendors,
            t = _.oneTrustIABConsent,
            t = (t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice(), _.addtlVendors);
        t.vendorConsent = Object.keys(t.vendorSelected)
    }, a.prototype.updateIabVariableReference = function() {
        var e = _.oneTrustIABConsent,
            t = _.vendors,
            o = (t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice(), _.addtlVendors);
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, a.prototype.allowAllhandler = function() {
        G.initializeIABData(!0, !1)
    }, a.prototype.rejectAllHandler = function(e) {
        G.initializeIABData(!1, !0, e = void 0 === e ? !1 : e)
    }, a.prototype.populateAddtlVendors = function(e) {
        var t, o, n, r, i, s, a, l = (L.PCAccordionStyle === le.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0),
            c = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            d = c.cloneNode(!0),
            c = (b.removeChild(d.querySelector("#ot-selall-hostcntr")), b.removeChild(c.querySelector("#ot-selall-vencntr")), b.removeChild(c.querySelector("#ot-selall-licntr")), E.accordionEl.cloneNode(!0)),
            c = (c.classList.add("ot-iab-acc"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + L.PCIABVendorsText + "</div>"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", d), c.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", A("#ot-ven-lst").el[0]), A("#ot-lst-cnt .ot-sdk-column").append(c), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCIABVendorsText), this.iabAccInit = !0, d.cloneNode(!0)),
            u = (b.removeChild(c.querySelector("#ot-selall-licntr")), c.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", c.querySelector("input").id = "ot-selall-adtlven-handler", c.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler"), E.accordionEl.cloneNode(!0)),
            p = (u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), u.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + L.PCGoogleVendorsText + "</div>"), u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", c), u.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), u.classList.add("ot-adtlv-acc"), u.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCGoogleVendorsText), _.vendors.vendorTemplate.cloneNode(!0));
        for (t in p.querySelector("button").classList.remove("ot-ven-box"), p.querySelector("button").classList.add("ot-addtl-venbox"), b.removeChild(p.querySelector(".ot-acc-txt")), e) e[t] && (o = p.cloneNode(!0), n = e[t].name, o.querySelector(P.P_Ven_Name).innerText = n, r = o.querySelector("button"), b.setHtmlAttributes(r, {
            id: "Adtl-IAB" + t
        }), b.setHtmlAttributes(o.querySelector(P.P_Ven_Link), {
            href: e[t].policyUrl,
            rel: "noopener",
            target: "_blank"
        }), o.querySelector(P.P_Ven_Link).innerHTML = L.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + L.NewWinTxt + "</span>", (r = E.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), r.classList.add("ot-ven-adtlctgl"), i = Boolean(_.addtlVendors.vendorSelected[t]), (s = r.querySelector("input")).classList.add("ot-addtlven-chkbox-handler"), a = r.querySelector(this.LABEL_STATUS), L.PCShowConsentLabels ? a.innerHTML = i ? L.PCActiveText : L.PCInactiveText : b.removeChild(a), b.setCheckedAttribute("", s, i), b.setHtmlAttributes(s, {
            id: "ot-addtlven-chkbox-" + t,
            "addtl-vid": t,
            "aria-label": n
        }), r.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + t), r.querySelector(P.P_Label_Txt).textContent = n, a = o.querySelector(P.P_Tgl_Cntr), A(a).append(r), a.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0)), L.PCAccordionStyle !== le.Caret && o.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), this.checkIfLegLinkRemove(o), A(u.querySelector("#ot-addtl-venlst")).append(o));
        A("#ot-lst-cnt .ot-sdk-column").append(u), A("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            b.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, a.prototype.populateGeneralVendors = function() {
        var e, t, o, c, d, u, p = this,
            n = L.GeneralVendors,
            r = document.querySelector(".ot-gv-acc"),
            h = !!r;
        n.length ? (this.hasGenVendors = !0, r && A(r).show(), e = (L.PCAccordionStyle === le.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0), this.iabAccInit || this.addIabAccordion(), (t = document.createElement("div")).setAttribute("class", "ot-sel-all-chkbox"), o = E.chkboxEl.cloneNode(!0), o.id = "ot-selall-gnvencntr", o.querySelector("input").id = "ot-selall-gnven-handler", o.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), A(t).append(o), c = E.accordionEl.cloneNode(!0), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + L.PCenterGeneralVendorsText + "</div>"), L.GenVenOptOut && c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t), c.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), c.classList.add("ot-gv-acc"), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCenterGeneralVendorsText), d = _.vendors.vendorTemplate.cloneNode(!0), d.querySelector("button").classList.remove("ot-ven-box"), d.querySelector("button").classList.add("ot-gv-venbox"), A(d.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && A("" + P.P_Gven_List).html(""), u = !0, n.forEach(function(e) {
            var t, o, n = p.mapGenVendorToHostFormat(e),
                r = d.cloneNode(!0),
                i = e.VendorCustomId,
                s = e.Name,
                a = r.querySelector(P.P_Ven_Link),
                l = (r.querySelector(P.P_Ven_Name).innerText = s, r.querySelector("button"));
            b.setHtmlAttributes(l, {
                id: "Gn-" + i
            }), e.PrivacyPolicyUrl ? (b.setHtmlAttributes(a, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }), a.innerHTML = L.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + L.NewWinTxt + "</span>") : a.classList.add("ot-hide"), p.addDescriptionElement(a, e.Description), L.GenVenOptOut && ((l = E.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), l.classList.add("ot-ven-gvctgl"), a = Boolean(_.genVendorsConsent[i]), (t = l.querySelector("input")).classList.add("ot-gnven-chkbox-handler"), o = l.querySelector(p.LABEL_STATUS), L.PCShowConsentLabels ? o.innerHTML = a ? L.PCActiveText : L.PCInactiveText : b.removeChild(o), b.setCheckedAttribute("", t, a), b.setHtmlAttributes(t, {
                id: "ot-gnven-chkbox-" + i,
                "gn-vid": i,
                "aria-label": s
            }), yo.isGenVenPartOfAlwaysActiveGroup(i) ? b.setDisabledAttribute(null, t, !0) : u = !1, l.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + i), l.querySelector(P.P_Label_Txt).textContent = s, o = r.querySelector(P.P_Tgl_Cntr), A(o).append(l), o.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0))), L.PCAccordionStyle !== le.Caret && r.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), e.Cookies.length || A(r).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                e = p.getCookieElement(e, n);
                A(r.querySelector(".ot-host-opt")).append(e)
            }), p.checkIfLegLinkRemove(r), A(h ? "" + P.P_Gven_List : c.querySelector("" + P.P_Gven_List)).append(r)
        }), h || A("#ot-lst-cnt .ot-sdk-column").append(c), A("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            b.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), u && b.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)) : (this.hasGenVendors = !1, r && A(r).hide())
    }, a.prototype.addIabAccordion = function() {
        var e = (L.PCAccordionStyle === le.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0),
            t = (b.removeChild(o.querySelector("#ot-selall-hostcntr")), b.removeChild(t.querySelector("#ot-selall-vencntr")), b.removeChild(t.querySelector("#ot-selall-licntr")), E.accordionEl.cloneNode(!0));
        t.classList.add("ot-iab-acc"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), t.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + L.PCIABVendorsText + "</div>"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), t.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", A("#ot-ven-lst").el[0]), A("#ot-lst-cnt .ot-sdk-column").append(t), t.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, L.PCIABVendorsText), this.iabAccInit = !0
    }, a.prototype.showConsentHeader = function() {
        var e = I.legIntSettings;
        A("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || A("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, a.prototype.setBackBtnTxt = function() {
        (v.isV2Template ? (A(P.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, L.PCenterBackText), A(P.P_Vendor_List + " .back-btn-handler title")) : A(P.P_Vendor_List + " .back-btn-handler .pc-back-button-text")).html(L.PCenterBackText)
    }, a.prototype.getCookieElement = function(e, t) {
        var o = _.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (n.classList.remove("cookie-name-container"), A(o).html(""), e.Name),
            i = (L.AddLinksToCookiepedia && t.isFirstParty && (r = y.getCookieLabel(e, L.AddLinksToCookiepedia)), n.cloneNode(!0));
        return i.classList.add(P.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = L.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, A(o).append(i), L.pcShowCookieHost && ((r = n.cloneNode(!0)).classList.add(P.P_c_Host), r.querySelector("div:nth-child(1)").innerHTML = L.pcCListHost, r.querySelector("div:nth-child(2)").innerHTML = e.Host, A(o).append(r)), L.pcShowCookieDuration && ((i = n.cloneNode(!0)).classList.add(P.P_c_Duration), i.querySelector("div:nth-child(1)").innerHTML = L.pcCListDuration, i.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? L.LifespanTypeText : y.getDuration(e), A(o).append(i)), L.pcShowCookieType && (r = t.Type === ge.GenVendor ? !e.isThirdParty : t.isFirstParty, (i = n.cloneNode(!0)).classList.add(P.P_c_Type), i.querySelector("div:nth-child(1)").innerHTML = L.pcCListType, i.querySelector("div:nth-child(2)").innerHTML = r ? L.firstPartyTxt : L.thirdPartyTxt, A(o).append(i)), L.pcShowCookieCategory && (r = void 0, r = t.Type === ge.GenVendor ? e.category : (t.isFirstParty ? e : t).groupName) && ((i = n.cloneNode(!0)).classList.add(P.P_c_Category), i.querySelector("div:nth-child(1)").innerHTML = L.pcCListCategory, i.querySelector("div:nth-child(2)").innerHTML = r, A(o).append(i)), L.pcShowCookieDescription && e.description && ((t = n.cloneNode(!0)).classList.add(P.P_c_Desc), t.querySelector("div:nth-child(1)").innerHTML = L.pcCListDescription, t.querySelector("div:nth-child(2)").innerHTML = e.description, A(o).append(t)), o
    }, a.prototype.getNoResultsFound = function(e) {
        e = _.showTrackingTech ? L.PCTechNotFound : e ? L.PCHostNotFound : L.PCVendorNotFound;
        return " " + e + "."
    }, a.prototype.getAdditionalTechnologiesHtml = function(e) {
        var t = document.createDocumentFragment(),
            o = L.AdditionalTechnologiesConfig,
            n = 0 < e.Cookies.length;
        return (n = n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME ? 0 < e.Cookies[0].Cookies.length : n) && ((n = N.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1)).classList.add(this.TECH_COOKIES_SELECTOR), t.appendChild(n)), 0 < e.LocalStorages.length && ((n = N.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel)).classList.add("tech-local"), N.setSessionLocalStorageTemplate(n, e.LocalStorages, L.AdditionalTechnologiesConfig.PCLocalStorageDurationText), t.appendChild(n)), 0 < e.SessionStorages.length && ((n = N.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText)).classList.add("tech-session"), N.setSessionLocalStorageTemplate(n, e.SessionStorages, L.AdditionalTechnologiesConfig.PCSessionStorageDurationText), t.appendChild(n)), t
    }, a.prototype.getMainAccordionContainer = function(e, t, o) {
        void 0 === o && (o = !0);
        var n = N.getAccordionStyleElement(),
            r = E.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t), o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'), r.cloneNode(!0)
    }, a.prototype.setSessionLocalStorageTemplate = function(e, t, o) {
        var n = _.hosts.hostTemplate.cloneNode(!0),
            r = (b.removeChild(n.querySelector(".ot-a scc-txt")), e.querySelector(".ot-acc-txt " + P.P_Host_Cntr));
        r.removeAttribute("style"), r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i],
                a = N.getSessionLocalStorageElement(a, o);
            r.append(a)
        }
    }, a.prototype.getSessionLocalStorageElement = function(e, t) {
        var o = _.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (A(o).html(""), N.createKeyValueDivEle(n, P.P_c_Name, L.pcCListName, e.Name)),
            r = (A(o).append(r), N.createKeyValueDivEle(n, P.P_c_Host, L.pcCListHost, e.Host)),
            r = (A(o).append(r), N.createKeyValueDivEle(n, P.P_c_Duration, L.pcCListDuration, t)),
            t = (A(o).append(r), N.createKeyValueDivEle(n, P.P_c_Desc, L.pcCListDescription, e.description));
        return A(o).append(t), o
    }, a.prototype.createKeyValueDivEle = function(e, t, o, n) {
        e = e.cloneNode(!0);
        return e.classList.add(t), e.querySelector("div:nth-child(1)").innerHTML = o, e.querySelector("div:nth-child(2)").innerHTML = n, e
    }, a.prototype.getAdditionalTechnologiesDataFromGroup = function(e) {
        for (var t, o = [], n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, r = 0, i = N.getGroupsFromFilter(e); r < i.length; r++) {
            var s = i[r],
                a = fn.getCookiesForGroup(s),
                o = M(o, null != (t = a.firstPartyCookiesList) ? t : []);
            n.Cookies = M(n.Cookies, a.thirdPartyCookiesList), n.LocalStorages = M(n.LocalStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.LocalStorages) ? a : []), n.SessionStorages = M(n.SessionStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.SessionStorages) ? a : [])
        }
        return o.length && n.Cookies.unshift({
            HostName: L.PCFirstPartyCookieListText,
            DisplayName: L.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: o,
            Description: ""
        }), n
    }, a.prototype.getFirstsAndThirdCookisFromGroups = function(e) {
        var t = [],
            o = [];
        return N.getGroupsFromFilter(e).forEach(function(e) {
            e = fn.getCookiesForGroup(e);
            t = M(t, e.firstPartyCookiesList), o = M(o, e.thirdPartyCookiesList)
        }), {
            firstPartyCookiesList: t,
            thirdPartyCookiesList: o
        }
    }, a.prototype.getGroupsFromFilter = function(t) {
        var o = [];
        return L.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                (!t || !t.length || -1 !== t.indexOf(e.CustomGroupId)) && o.push(e)
            })
        }), o
    }, a.prototype.getAccordionStyleElement = function() {
        return (L.PCAccordionStyle === le.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0)
    }, a.prototype.getFilteredAdditionaTechtData = function(e, t) {
        var o, n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            },
            r = this.getSearchQuery(e),
            e = JSON.parse(JSON.stringify(t));
        return e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((o = e.Cookies.shift()).Cookies = null == (t = o.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        })), n.Cookies = null == (t = e.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.DisplayName || e.HostName)
        }), o && 0 < o.Cookies.length && n.Cookies.unshift(o), n.LocalStorages = null == (t = e.LocalStorages) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n.SessionStorages = null == (o = e.SessionStorages) ? void 0 : o.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n
    }, a.prototype.checkIfLegLinkRemove = function(e) {
        I.isTcfV2Template && e.querySelector(P.P_Ven_Leg_Claim).remove()
    };
    var N, ci = a;

    function a() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.TECH_COOKIES_SELECTOR = "tech-cookies", this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group", this.LABEL_STATUS = ".ot-label-status", this.CONSENT_CATEGORY = ".consent-category", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    pi.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), v.moduleInitializer.CookieSPAEnabled ? A(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : A(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, pi.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += G.csBtnGroup.css;
        var t = document.createElement("div"),
            t = (A(t).html(G.csBtnGroup.html), t.querySelector("#ot-sdk-btn-floating"));
        e && t && A(t).removeClass("ot-hide"), A("#onetrust-consent-sdk").append(t), L.cookiePersistentLogo && (L.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : A(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, pi.prototype.applyPersistentSvgOnDOM = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Dt.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), A(this.FLOATING_COOKIE_FRONT_BTN).html(t), w.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, pi.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !un.isLandingPage() && "true" === k.readCookieParam(S.OPTANON_CONSENT, p.AWAITING_RE_CONSENT) && this.checkForRefreshCloseImplied()
    }, pi.prototype.isImpliedConsent = function() {
        return L.ConsentModel && "implied consent" === L.ConsentModel.Name.toLowerCase()
    }, pi.prototype.checkForRefreshCloseImplied = function() {
        V.closeOptanonAlertBox(), V.close(!0)
    }, pi.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && d(e, "display: none;")
    }, pi.prototype.shouldShowBanner = function(e) {
        return L.ShowAlertNotice && !e && !L.NoBanner && !_.hideBanner
    }, pi.prototype.shouldShowPc = function(e) {
        return L.ShowAlertNotice && !e && L.NoBanner
    }, pi.prototype.windowLoadBanner = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (this.core.substitutePlainTextScriptTags(), t = v.moduleInitializer, A("#onetrust-consent-sdk").length ? o = document.getElementById("onetrust-consent-sdk") : (o = document.createElement("div"), A(o).attr("id", "onetrust-consent-sdk"), A(document.body).append(o)), A(".onetrust-pc-dark-filter").length || (n = document.createElement("div"), A(n).attr("class", "onetrust-pc-dark-filter"), A(n).attr("class", "ot-hide"), A(n).attr("class", "ot-fade-in"), o.firstChild ? o.insertBefore(n, o.firstChild) : A(o).append(n)), L.IsIabEnabled && this.iab.updateIabVariableReference(), n = h.isAlertBoxClosedAndValid(), r = this.shouldShowBanner(n), i = this.shouldShowPc(n), _.ntfyRequired ? (this.hideCustomHtml(), vn.init(), vn.changeState()) : (r ? w.initializeAlartHtmlAndHandler() : (L.IsGPPEnabled && $r.setCmpDisplayStatus("disabled"), this.hideCustomHtml()), w.addEventListnerForVendorsList()), t.IsSuppressPC || (B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), L.IsIabEnabled && this.iab.InitializeVendorList()), this.prepopulateCookieOrVendorPageTitle(), this.initializeHbbTvScript(), this.insertCSBtn(!r), i) ? [4, w.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return w.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(i), di.insertTrackigTechOrCookiePolicy(), V.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(r), [2]
                }
            })
        })
    }, pi.prototype.prepopulateCookieOrVendorPageTitle = function() {
        v.isV2Template && (L.GeneralVendorsEnabled ? this.iab.setListSearchValues(Le.vendors) : this.iab.setListSearchValues(Le.cookies))
    }, pi.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = A(this.FLOATING_COOKIE_BTN),
            o = A(this.FLOATING_COOKIE_FRONT_BTN),
            n = A(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("data-title", L.CookieSettingButtonText), o.el[0].setAttribute(gt, L.AriaOpenPreferences), n.el[0].setAttribute(gt, L.AriaClosePreferences), e ? (o.el[0].setAttribute(Ct, !0), o.el[0].style.display = "none") : (n.el[0].setAttribute(Ct, !0), n.el[0].style.display = "none"))
    }, pi.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        k.readCookieParam(S.OPTANON_CONSENT, co) || lo.writeGrpParam(S.OPTANON_CONSENT), k.readCookieParam(S.OPTANON_CONSENT, uo) || lo.writeHstParam(S.OPTANON_CONSENT), _.showGeneralVendors && !k.readCookieParam(S.OPTANON_CONSENT, po) && lo.writeGenVenCookieParam(S.OPTANON_CONSENT), _.vsIsActiveAndOptOut && !k.readCookieParam(S.OPTANON_CONSENT, ho) && lo.writeVSConsentCookieParam(S.OPTANON_CONSENT), e && bo.setBannerFocus()
    }, pi.prototype.initializeHbbTvScript = function() {
        var e;
        v.moduleInitializer.RemoteActionsEnabled && ((e = document.getElementById("hbbtv")) && e.remove(), (e = document.createElement("script")).id = "hbbtv", e.src = _.storageBaseURL + "/scripttemplates/" + v.moduleInitializer.Version + "/hbbtv.js", e.type = "text/javascript", A(document.body).append(e))
    }, pi.prototype.insertCSBtn = function(e) {
        G.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), w.initFlgtCkStgBtnEventHandlers())
    }, pi.prototype.insertTrackingTechnologies = function() {
        var e;
        A("#ot-sdk-cookie-policy, #optanon-cookie-policy").length && (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml ? window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, L, A) : ((e = document.createElement("script")).id = "cookie-policy-script", e.onload = function() {
            return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, L, A)
        }, e.type = "text/javascript", e.src = _.storageBaseURL + "/scripttemplates/" + v.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)))
    }, pi.prototype.insertTrackigTechOrCookiePolicy = function() {
        v.fp.CookieV2TrackingTechnologies ? di.insertTrackingTechnologies() : lr.insertCookiePolicyHtml()
    };
    var di, ui = pi;

    function pi() {
        this.iab = N, this.core = fn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    D(yi, hi = pr), yi.prototype.Close = function(e) {
        V.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.RejectAll = function(e) {
        V.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.AllowAll = function(e) {
        V.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.ToggleInfoDisplay = function() {
        w.toggleInfoDisplay()
    };
    var hi, gi, Ci = yi;

    function yi() {
        var e = null !== hi && hi.apply(this, arguments) || this;
        return e.mobileOnlineURL = I.mobileOnlineURL, e
    }
    Si.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (_.dsParams.id = e.trim(), ur.setDataSubjectIdV2(e)) : e = _.dsParams.id, o && (_.dsParams.isAnonymous = o), t = t || _.dsParams.token, e && t && Dt.getConsentProfile(e, t).then(function(e) {
            return fi.consentProfileCallback(e)
        })
    }, Si.prototype.checkCarryOverAnonConsentForIAB = function() {
        var e, t, o = _.consentPreferences;
        !o || o.preferences.length <= 0 || null == (t = I.consentableIabGrps) || !t.length || (t = I.checkLocalConsentForIabPurposes, (null == (e = v.fp) ? void 0 : e.MobileAuthenticatedConsents) && I.carryOverAnonymousConsent && t ? (t = (e = this.checkLatestConsentDate()).islocalConsentLatest, e = e.consentedDate, t ? I.forceCreateTrxLocalConsentIsGreater = !0 : (k.writeCookieParam(S.OPTANON_CONSENT, p.PREV_USER_CONSENT, ""), (t = o.syncGroups[_.syncGrpId]) && (t.tcStringV2 && (_.isIabSynced = !0, _.syncRequired = !0, k.setCookie(S.EU_PUB_CONSENT, t.tcStringV2, L.ReconsentFrequencyDays, !1, e)), t.gacString) && (_.isGacSynced = !0, _.syncRequired = !0, k.setCookie(S.ADDITIONAL_CONSENT_STRING, t.gacString, L.ReconsentFrequencyDays, !1, e)))) : null != (o = v.fp) && o.MobileAuthenticatedConsents && !I.carryOverAnonymousConsent && k.writeCookieParam(S.OPTANON_CONSENT, p.PREV_USER_CONSENT, ""))
    }, Si.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = C = k.getCookie(S.ALERT_BOX_CLOSED),
            n = !1,
            r = !0,
            i = !1,
            s = b.strToArr(k.readCookieParam(S.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var a = 0, l = e.preferences; a < l.length; a++) {
                var c = l[a],
                    d = c.status === H[H.NO_CONSENT],
                    u = I.domainGrps[c.id];
                if (u)
                    if (-1 < _.grpsSynced.indexOf(u) && (_.syncedValidGrp = !0), d && s.length) {
                        for (var p = -1, h = 0; h < s.length; h++)
                            if (s[h].split(":")[0] === u) {
                                p = h;
                                break
                            } - 1 < p && (s.splice(p, 1), _.grpsSynced.push(u))
                    } else if (!d && (!C || new Date(c.lastInteractionDate) > new Date(o))) {
                    var g = this.getConsentValue(c.status),
                        i = !0,
                        C = c.lastInteractionDate;
                    if (!t && this.isCookieGroup(u)) {
                        for (var y = u + ":" + g, f = -1, h = 0; h < s.length; h++) {
                            var m = s[h].split(":");
                            if (m[0] === u) {
                                m[1] !== g && (s[h] = y, n = !0), f = h;
                                break
                            }
                        } - 1 === f && (s.push(y), n = !0)
                    }
                }
            } else r = !1;
        return {
            alertBoxCookieVal: C,
            groupsConsent: s,
            profileFound: r,
            syncRequired: n,
            syncOnlyDate: i = i && !n
        }
    }, Si.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case H[H.ACTIVE]:
            case H[H.ALWAYS_ACTIVE]:
                t = he.Active;
                break;
            case H[H.EXPIRED]:
            case H[H.OPT_OUT]:
            case H[H.PENDING]:
            case H[H.WITHDRAWN]:
                t = he.InActive
        }
        return t
    }, Si.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2|IAB2V2|IFE2V2|ISP2V2|ISF2V2/.test(e)
    }, Si.prototype.hideBannerAndPc = function() {
        var e = y.isBannerVisible();
        e && y.hideBanner(), (e || _.isPCVisible) && (tn.removeAddedOTCssStyles(), ln.hideConsentNoticeV2())
    }, Si.prototype.setOptanonConsentCookie = function(e, t) {
        var o;
        e.syncRequired && (k.writeCookieParam(S.OPTANON_CONSENT, "groups", e.groupsConsent.toString()), o = k.getCookie(S.OPTANON_CONSENT), k.setCookie(S.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal)))
    }, Si.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[_.syncGrpId] && o.syncGroups[_.syncGrpId].tcStringV2 ? k.getCookie(S.EU_PUB_CONSENT) !== o.syncGroups[_.syncGrpId].tcStringV2 && (e.syncRequired = !0, k.setCookie(S.EU_PUB_CONSENT, o.syncGroups[_.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, Si.prototype.setAddtlVendorsCookie = function(e, t) {
        L.UseGoogleVendors && !k.getCookie(S.ADDITIONAL_CONSENT_STRING) && k.setCookie(S.ADDITIONAL_CONSENT_STRING, _.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal))
    }, Si.prototype.createTrans = function() {
        var e = k.readCookieParam(S.OPTANON_CONSENT, "iType");
        oi.createConsentTxn(!1, pe[e], !1, !0)
    }, Si.prototype.updateGrpsDom = function() {
        for (var e = 0, t = f.getAllGroupElements(); e < t.length; e++) ! function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = C.getGroupById(t),
                n = !0,
                r = b.findIndex(_.groupsConsent, function(e) {
                    return e.split(":")[0] === t
                }); - 1 < r && _.groupsConsent[r].split(":")[1] === he.InActive && (n = !1), f.toggleGrpElements(e, o, n), f.toogleSubGroupElement(e, n, !1, !0), f.toogleSubGroupElement(e, n, !0, !0)
        }(t[e])
    }, Si.prototype.updateVendorsDom = function() {
        L.IsIabEnabled && (N.updateIabVariableReference(), Bn.toggleVendorConsent(), I.legIntSettings.PAllowLI) && (I.legIntSettings.PShowLegIntBtn ? Bn.updateVendorLegBtns() : Bn.toggleVendorLi())
    }, Si.prototype.consentProfileCallback = function(r) {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.syncPreferences(r), o = L.ReconsentFrequencyDays, n = h.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), L.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (h.syncAlertBoxCookie(t.alertBoxCookieVal), h.syncCookieExpiry()), t.syncRequired && t.profileFound) ? (_.syncRequired = t.syncRequired, h.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), G.initGrpsAndHosts(), !n && L.NtfyConfig.ShowNtfy && h.isAlertBoxClosedAndValid() ? [4, vn.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), vn.init(), vn.changeState(), e.label = 2;
                    case 2:
                        return L.IsIabEnabled && (h.setIABCookieData(), no.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), un.setLandingPathParam(p.NOT_LANDING_PAGE), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros(!0), V.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, Si.prototype.checkLatestConsentDate = function() {
        var e = k.getCookie(S.ALERT_BOX_CLOSED),
            e = new Date(e),
            t = I.serverLatestDateForCookies,
            o = this.getLastesConsentDateFromIabConsent();
        return o && e < o ? (k.setCookie(S.ALERT_BOX_CLOSED, o = o < t ? t : o, L.ReconsentFrequencyDays, !1, o), {
            islocalConsentLatest: !1,
            consentedDate: o
        }) : e < t ? (k.setCookie(S.ALERT_BOX_CLOSED, t, L.ReconsentFrequencyDays, !1, t), {
            islocalConsentLatest: !1,
            consentedDate: t
        }) : {
            islocalConsentLatest: !0,
            consentedDate: e
        }
    }, Si.prototype.getLastesConsentDateFromIabConsent = function() {
        for (var e = _.consentPreferences, t = I.consentableIabGrps.reduce(function(e, t) {
                return e[t.PurposeId] = t, e
            }, {}), o = null, n = 0, r = e.preferences; n < r.length; n++) {
            var i = r[n];
            t[i.id.toUpperCase()] && (i = new Date(i.lastInteractionDate), !o || o < i) && (o = i)
        }
        return o
    };
    var fi, mi = Si;

    function Si() {}
    bi.prototype.removeCookies = function() {
        k.removePreview(), k.removeOptanon(), k.removeAlertBox(), k.removeIab2(), k.removeAddtlStr(), k.removeVariant(), _.isPreview && vi.setPreviewCookie(), _.urlParams.get("otreset") && _.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + _.urlParams.toString() + window.location.hash;
        vi.replaceHistory(e)
    }, bi.prototype.setPreviewCookie = function() {
        var e = new Date,
            t = (e.setTime(e.getTime() + 864e5), _.geoFromUrl ? "&geo=" + _.geoFromUrl : ""),
            e = "expiry=" + e.toISOString() + t;
        k.setCookie(S.OT_PREVIEW, e, 1, !1)
    }, bi.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return vi.onMessage(e)
        })
    }, bi.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, bi.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === vi.CLEAR_COOKIES && (vi.removeCookies(), e.source) && e.source.postMessage && e.source.postMessage(vi.CLEARED_COOKIES, e.origin)
    };
    var vi, ki, l = bi;

    function bi() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    Ne.initPolyfill(), k = new Lt, y = new Ft, I = new qt, Gt = new e, vi = new l, (s = window.otStubData) && (v.moduleInitializer = s.domainData, v.fp = v.moduleInitializer.TenantFeatures, _.isAMP = s.isAmp, _.dataDomainId = s.domainId, _.isPreview = s.isPreview, _.urlParams = s.urlParams, _.isV2Stub = s.isV2Stub || !1, I.gtmUpdatedinStub = s.gtmUpdated, s.isReset ? vi.removeCookies() : s.isPreview && vi.setPreviewCookie(), I.setBannerScriptElement(s.stubElement), I.setRegionRule(s.regionRule), v.fp.CookieV2TargetedTemplates && (I.conditionalLogicEnabled = !(null == (ki = I.getRegionRule().Conditions) || !ki.length), I.conditionalLogicEnabled) && (function() {
            for (var e = I.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                if (function(e) {
                        if (e) return e = window.atob(e), Function('"use strict"; return ' + e)()
                    }(e.Conditions[t].Expression)) return I.Condition = e.Conditions[t]
            } catch (e) {
                console.warn(e);
                continue
            }
            I.allConditionsFailed = !0
        }(), I.canUseConditionalLogic = !I.allConditionsFailed), _.userLocation = s.userLocation, _.crossOrigin = s.crossOrigin, I.bannerDataParentURL = s.bannerBaseDataURL, I.mobileOnlineURL = M(I.mobileOnlineURL, s.mobileOnlineURL), ki = I.getRegionRule(), I.multiVariantTestingEnabled = v.moduleInitializer.MultiVariantTestingEnabled && 0 < ki.Variants.length && y.isDateCurrent(ki.TestEndTime), I.otDataLayer = s.otDataLayer, _.grpsSynced = s.grpsSynced || [], _.isIabSynced = s.isIabSynced, _.isGacSynced = s.isGacSynced, _.syncRequired = s.isIabSynced || s.isGacSynced || s.grpsSynced && 0 < s.grpsSynced.length, _.consentPreferences = s.preferences, _.syncGrpId = s.syncGrpId, _.consentApi = s.consentApi, _.tenantId = s.tenantId, _.geoFromUrl = s.geoFromUrl, _.nonce = s.nonce, _.setAttributePolyfillIsActive = s.setAttributePolyfillIsActive, _.storageBaseURL = s.storageBaseURL, _.identifierType = s.identifierType, I.previewMode = s.previewMode, I.prevUserWasAnon = s.prevUserWasAnon, I.userHasProfile = s.userHasProfile, I.serverLatestDateForCookies = s.serverLatestDateForCookies, I.carryOverAnonymousConsent = s.domainData.AuthenticatedConsent, I.checkLocalConsentForIabPurposes = s.checkLocalConsentForIabPurposes, I.forceCreateTrxLocalConsentIsGreater = s.forceCreateTrxLocalConsentIsGreater, I.stubUrl = s.stubUrl, Gt.populateLangSwitcherPlhdr(), window.otStubData = {
            userLocation: _.userLocation
        }, window.OneTrustStub = null),
        function() {
            u(this, void 0, void 0, function() {
                var r, i, s, a;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (C = new Yt, f = new Zo, eo = new to, N = new ci, fn = new mn, V = new Mn, w = new rr, B = new Zn, $n = new er, di = new ui, v.fp.CookieV2TrackingTechnologies || (lr = new cr), Qt = new Zt, yo = new fo, G = new ai, gn = new Cn, ir = new sr, g = new so, E = new jt, fi = new mi, Bn = new wn, Dt = new Ht, bo = new Xo, ln = new cn, O = new xn, Kn = new Wn, Yn = new Xn, c = new or, v.moduleInitializer.MobileSDK ? gi = new Ci : ur = new pr, no = new ro, o = k.getCookie(S.ALERT_BOX_CLOSED), n = k.getCookie(S.OPTANON_CONSENT), o && !n && k.removeAlertBox(), I.setGCMcallback(), a = I.getRegionRule(), a = (I.canUseConditionalLogic ? I.Condition : a).UseGoogleVendors, I.isIab2orv2Template = "IAB2" === I.getRegionRuleType() || "IAB2V2" === I.getRegionRuleType(), I.isTcfV2Template = "IAB2V2" === I.getRegionRuleType(), I.isIab2orv2Template) ? [4, Promise.all([Dt.getLangJson(), Dt.fetchGvlObj(), a ? Dt.fetchGoogleVendors() : Promise.resolve(null), Dt.loadCMP()])] : [3, 2];
                        case 1:
                            return a = e.sent(), r = a[0], i = a[1], s = a[2], _.gvlObj = i, _.addtlVendorsList = s ? s.vendors : null, [3, 4];
                        case 2:
                            return [4, Dt.getLangJson()];
                        case 3:
                            r = e.sent(), e.label = 4;
                        case 4:
                            return r.DomainData.IsGPPEnabled ? [4, Dt.loadGPP()] : [3, 6];
                        case 5:
                            e.sent(), $r = new ei, e.label = 6;
                        case 6:
                            var t;
                            return function(d) {
                                u(this, void 0, void 0, function() {
                                    var l, c;
                                    return F(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                    var t, o = v.moduleInitializer.MobileSDK;
                                                    t = o ? gi : ur;
                                                    var n = {
                                                        AllowAll: t.AllowAll,
                                                        BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                        Close: t.Close,
                                                        getCSS: t.getCSS,
                                                        GetDomainData: t.GetDomainData,
                                                        getGeolocationData: t.getGeolocationData,
                                                        getHTML: t.getHTML,
                                                        Init: t.Init,
                                                        InitializeBanner: t.InitializeBanner,
                                                        initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                        InsertHtml: t.InsertHtml,
                                                        InsertScript: t.InsertScript,
                                                        IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                        IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                        LoadBanner: t.LoadBanner,
                                                        OnConsentChanged: g.OnConsentChanged,
                                                        ReconsentGroups: t.ReconsentGroups,
                                                        RejectAll: t.RejectAll,
                                                        SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                        setGeoLocation: t.setGeoLocation,
                                                        ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                        TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                        useGeoLocationService: t.useGeoLocationService,
                                                        FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                        changeLanguage: t.changeLang,
                                                        testLog: t.getTestLogData,
                                                        UpdateConsent: t.updateSingularConsent,
                                                        IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                        UpdateGCM: t.updateGCM
                                                    };
                                                    e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, _.isV2Stub ? n.syncConsentProfile = fi.syncConsentProfile : n.SendReceipt = t.sendReceipt);
                                                    o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = _.otCookieData);
                                                    e.IsIabEnabled && (n.updateConsentFromCookies = g.updateConsentFromCookie, n.getPingRequest = no.getPingRequestForTcf, n.getVendorConsentsRequestV2 = no.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                    return n
                                                }(d.DomainData)), h.initializeBannerVariables(d), fi.checkCarryOverAnonConsentForIAB(), lo = new go, So = new vo, oi = new ni, tn = new sn, un = new pn, Un = new jn, vn = new On;
                                                var t, o, n, r = window.OTExternalConsent,
                                                    i = (r && r.consentedDate && (r.groups || r.tcString || r.addtlString) && (t = [], (i = r.groups.split(",")).forEach(function(e) {
                                                        e = e.split(":");
                                                        t.push({
                                                            lastInteractionDate: r.consentedDate,
                                                            status: "1" === e[1] ? H[H.ACTIVE] : H[H.OPT_OUT],
                                                            id: e[0]
                                                        }), _.grpsSynced.push(e[0])
                                                    }), _.consentPreferences = {
                                                        preferences: t,
                                                        syncGroups: null
                                                    }, _.syncRequired = !0, lo.updateGroupsInCookie(S.OPTANON_CONSENT, i), k.setCookie(S.ALERT_BOX_CLOSED, r.consentedDate, 365), r.tcString && (_.isIabSynced = !0, k.setCookie(S.EU_PUB_CONSENT, r.tcString, 365)), r.addtlString) && (_.isGacSynced = !0, k.setCookie(S.ADDITIONAL_CONSENT_STRING, "" + r.addtlString, 365)), _.isPreview && (h.syncOtPreviewCookie(), vi.bindStopPreviewEvent()), l = fi.syncPreferences(_.consentPreferences, !0), (_.syncRequired || l.syncRequired) && h.syncAlertBoxCookie(l.alertBoxCookieVal), h.syncCookieExpiry(), d),
                                                    s = window.OneTrust.dataSubjectParams || {},
                                                    a = ((_.dsParams = s).id && ur.setDataSubjectIdV2(s.id, s.isAnonymous, s.identifierType), i),
                                                    s = null == (i = s.identifierType) ? void 0 : i.trim();
                                                return _.isV2Stub && (o = void 0, n = null == (n = _.identifierType) ? void 0 : n.trim(), o = n || s || (null == (n = a.CommonData.ConsentIntegration) ? void 0 : n.DefaultIdentifier), k.writeCookieParam(S.OPTANON_CONSENT, p.IDENTIFIER_TYPE, o)), I.multiVariantTestingEnabled && I.selectedVariant && k.setCookie(S.SELECTED_VARIANT, I.selectedVariant.Id, L.ReconsentFrequencyDays), [4, no.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), d.DomainData.IsGPPEnabled && $r.initGppConsent(), [4, G.fetchAssets()];
                                            case 2:
                                                return (e.sent(), di.initBanner(), g.assetResolve(!0), Qt.initialiseCssReferences(), c = h.isIABCrossConsentEnabled(), (_.syncedValidGrp || _.isIabSynced || _.isGacSynced) && !c && L.NtfyConfig.ShowNtfy && h.isAlertBoxClosedAndValid()) ? (_.ntfyRequired = !0, [4, vn.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return c || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(r), v.moduleInitializer.WebFormIntegrationEnabled && v.moduleInitializer.WebFormSrcUrl && (o = window.otStubData, n = document.createElement("script"), t = v.moduleInitializer.WebFormSrcUrl, n.type = "text/javascript", n.src = t, n.setAttribute("dataId", v.moduleInitializer.TenantGuid), n.setAttribute("worker", v.moduleInitializer.WebFormWorkerUrl), o.charset && n.setAttribute("charset", o.charset), o.crossOrigin && n.setAttribute("crossorigin", o.crossOrigin), document.querySelector('script[src="' + t + '"]') || document.getElementsByTagName("head")[0].appendChild(n)), [2]
                    }
                    var o, n
                })
            })
        }()
}();