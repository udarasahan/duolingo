(self.webpackChunk = self.webpackChunk || []).push([
    [5314], {
        75314: function(t, e, i) {
            "undefined" != typeof navigator && (t.exports = function() {
                "use strict";
                var t = "",
                    s = !1,
                    a = -999999,
                    r = function() {
                        return t
                    };

                function n(t) {
                    return document.createElement(t)
                }

                function h(t, e) {
                    var i, s, a = t.length;
                    for (i = 0; i < a; i += 1)
                        for (var r in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, r) && (e.prototype[r] = s[r])
                }
                var o = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, i = this.audios.length;
                                    for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    l = function() {
                        function t(t, e) {
                            var i, s = 0,
                                a = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    i = 1;
                                    break;
                                default:
                                    i = 1.1
                            }
                            for (s = 0; s < e; s += 1) a.push(i);
                            return a
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                        } : t
                    }();

                function p(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function f(t) {
                    return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, f(t)
                }
                var d = !0,
                    m = null,
                    c = "",
                    u = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    g = Math.pow,
                    y = Math.sqrt,
                    v = Math.floor,
                    b = (Math.max, Math.min),
                    _ = {};
                ! function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        i = e.length;
                    for (t = 0; t < i; t += 1) _[e[t]] = Math[e[t]]
                }(), _.random = Math.random, _.abs = function(t) {
                    if ("object" === f(t) && t.length) {
                        var e, i = p(t.length),
                            s = t.length;
                        for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                        return i
                    }
                    return Math.abs(t)
                };
                var k = 150,
                    P = Math.PI / 180,
                    A = .5519;

                function S(t, e, i, s) {
                    this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
                }

                function w(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function x(t, e, i, s) {
                    this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
                }

                function D(t, e, i) {
                    this.type = t, this.firstFrame = e, this.totalFrames = i
                }

                function C(t, e) {
                    this.type = t, this.target = e
                }

                function M(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function F(t) {
                    this.type = "configError", this.nativeError = t
                }
                var T, E = (T = 0, function() {
                    return c + "__lottie_element_" + (T += 1)
                });

                function I(t, e, i) {
                    var s, a, r, n, h, o, l, p;
                    switch (o = i * (1 - e), l = i * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - h) * e), n % 6) {
                        case 0:
                            s = i, a = p, r = o;
                            break;
                        case 1:
                            s = l, a = i, r = o;
                            break;
                        case 2:
                            s = o, a = i, r = p;
                            break;
                        case 3:
                            s = o, a = l, r = i;
                            break;
                        case 4:
                            s = p, a = o, r = i;
                            break;
                        case 5:
                            s = i, a = o, r = l
                    }
                    return [s, a, r]
                }

                function L(t, e, i) {
                    var s, a = Math.max(t, e, i),
                        r = Math.min(t, e, i),
                        n = a - r,
                        h = 0 === a ? 0 : n / a,
                        o = a / 255;
                    switch (a) {
                        case r:
                            s = 0;
                            break;
                        case t:
                            s = e - i + n * (e < i ? 6 : 0), s /= 6 * n;
                            break;
                        case e:
                            s = i - t + 2 * n, s /= 6 * n;
                            break;
                        case i:
                            s = t - e + 4 * n, s /= 6 * n
                    }
                    return [s, h, o]
                }

                function V(t, e) {
                    var i = L(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), I(i[0], i[1], i[2])
                }

                function z(t, e) {
                    var i = L(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), I(i[0], i[1], i[2])
                }

                function R(t, e) {
                    var i = L(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), I(i[0], i[1], i[2])
                }! function() {
                    var t, e, i = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e
                }();
                var N = function() {
                        return m
                    },
                    O = function(t) {
                        k = t
                    },
                    B = function() {
                        return k
                    };

                function q(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t)
                }

                function j(t) {
                    return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, j(t)
                }
                var W = function() {
                        var t, e, i = 1,
                            a = [],
                            r = {
                                onmessage: function() {},
                                postMessage: function(e) {
                                    t({
                                        data: e
                                    })
                                }
                            },
                            n = {
                                postMessage: function(t) {
                                    r.onmessage({
                                        data: t
                                    })
                                }
                            };

                        function h() {
                            e || (e = function(e) {
                                if (window.Worker && window.Blob && s) {
                                    var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                            type: "text/javascript"
                                        }),
                                        a = URL.createObjectURL(i);
                                    return new Worker(a)
                                }
                                return t = e, r
                            }((function(t) {
                                if (n.dataManager || (n.dataManager = function() {
                                        function t(a, r) {
                                            var n, h, o, l, p, d, m = a.length;
                                            for (h = 0; h < m; h += 1)
                                                if ("ks" in (n = a[h]) && !n.completed) {
                                                    if (n.completed = !0, n.hasMask) {
                                                        var c = n.masksProperties;
                                                        for (l = c.length, o = 0; o < l; o += 1)
                                                            if (c[o].pt.k.i) s(c[o].pt.k);
                                                            else
                                                                for (d = c[o].pt.k.length, p = 0; p < d; p += 1) c[o].pt.k[p].s && s(c[o].pt.k[p].s[0]), c[o].pt.k[p].e && s(c[o].pt.k[p].e[0])
                                                    }
                                                    0 === n.ty ? (n.layers = e(n.refId, r), t(n.layers, r)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && f(n)
                                                }
                                        }

                                        function e(t, e) {
                                            var i = function(t, e) {
                                                for (var i = 0, s = e.length; i < s;) {
                                                    if (e[i].id === t) return e[i];
                                                    i += 1
                                                }
                                                return null
                                            }(t, e);
                                            return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                                        }

                                        function i(t) {
                                            var e, a, r;
                                            for (e = t.length - 1; e >= 0; e -= 1)
                                                if ("sh" === t[e].ty)
                                                    if (t[e].ks.k.i) s(t[e].ks.k);
                                                    else
                                                        for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && s(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && s(t[e].ks.k[a].e[0]);
                                            else "gr" === t[e].ty && i(t[e].it)
                                        }

                                        function s(t) {
                                            var e, i = t.i.length;
                                            for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                        }

                                        function a(t, e) {
                                            var i = e ? e.split(".") : [100, 100, 100];
                                            return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                        }
                                        var r, n = function() {
                                                var t = [4, 4, 14];

                                                function e(t) {
                                                    var e, i, s, a = t.length;
                                                    for (e = 0; e < a; e += 1) 5 === t[e].ty && (void 0, s = (i = t[e]).t.d, i.t.d = {
                                                        k: [{
                                                            s,
                                                            t: 0
                                                        }]
                                                    })
                                                }
                                                return function(i) {
                                                    if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                        var s, r = i.assets.length;
                                                        for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                    }
                                                }
                                            }(),
                                            h = (r = [4, 7, 99], function(t) {
                                                if (t.chars && !a(r, t.v)) {
                                                    var e, s = t.chars.length;
                                                    for (e = 0; e < s; e += 1) {
                                                        var n = t.chars[e];
                                                        n.data && n.data.shapes && (i(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }, t.chars[e].t || (n.data.shapes.push({
                                                            ty: "no"
                                                        }), n.data.shapes[0].it.push({
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            },
                                                            sk: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            sa: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            ty: "tr"
                                                        })))
                                                    }
                                                }
                                            }),
                                            o = function() {
                                                var t = [5, 7, 15];

                                                function e(t) {
                                                    var e, i, s = t.length;
                                                    for (e = 0; e < s; e += 1) 5 === t[e].ty && (i = void 0, "number" == typeof(i = t[e].t.p).a && (i.a = {
                                                        a: 0,
                                                        k: i.a
                                                    }), "number" == typeof i.p && (i.p = {
                                                        a: 0,
                                                        k: i.p
                                                    }), "number" == typeof i.r && (i.r = {
                                                        a: 0,
                                                        k: i.r
                                                    }))
                                                }
                                                return function(i) {
                                                    if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                        var s, r = i.assets.length;
                                                        for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                    }
                                                }
                                            }(),
                                            l = function() {
                                                var t = [4, 1, 9];

                                                function e(t) {
                                                    var i, s, a, r = t.length;
                                                    for (i = 0; i < r; i += 1)
                                                        if ("gr" === t[i].ty) e(t[i].it);
                                                        else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                        if (t[i].c.k && t[i].c.k[0].i)
                                                            for (a = t[i].c.k.length, s = 0; s < a; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255);
                                                        else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                                }

                                                function i(t) {
                                                    var i, s = t.length;
                                                    for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                                }
                                                return function(e) {
                                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                        var s, r = e.assets.length;
                                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                    }
                                                }
                                            }(),
                                            p = function() {
                                                var t = [4, 4, 18];

                                                function e(t) {
                                                    var i, s, a;
                                                    for (i = t.length - 1; i >= 0; i -= 1)
                                                        if ("sh" === t[i].ty)
                                                            if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                            else
                                                                for (a = t[i].ks.k.length, s = 0; s < a; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                                    else "gr" === t[i].ty && e(t[i].it)
                                                }

                                                function i(t) {
                                                    var i, s, a, r, n, h, o = t.length;
                                                    for (s = 0; s < o; s += 1) {
                                                        if ((i = t[s]).hasMask) {
                                                            var l = i.masksProperties;
                                                            for (r = l.length, a = 0; a < r; a += 1)
                                                                if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                                                else
                                                                    for (h = l[a].pt.k.length, n = 0; n < h; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                                                        }
                                                        4 === i.ty && e(i.shapes)
                                                    }
                                                }
                                                return function(e) {
                                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                        var s, r = e.assets.length;
                                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                    }
                                                }
                                            }();

                                        function f(t) {
                                            0 === t.t.a.length && t.t.p
                                        }
                                        var d = {
                                            completeData: function(i) {
                                                i.__complete || (l(i), n(i), h(i), o(i), p(i), t(i.layers, i.assets), function(i, s) {
                                                    if (i) {
                                                        var a = 0,
                                                            r = i.length;
                                                        for (a = 0; a < r; a += 1) 1 === i[a].t && (i[a].data.layers = e(i[a].data.refId, s), t(i[a].data.layers, s))
                                                    }
                                                }(i.chars, i.assets), i.__complete = !0)
                                            }
                                        };
                                        return d.checkColors = l, d.checkChars = h, d.checkPathProperties = o, d.checkShapes = p, d.completeLayers = t, d
                                    }()), n.assetLoader || (n.assetLoader = function() {
                                        function t(t) {
                                            var e = t.getResponseHeader("content-type");
                                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === j(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                        }
                                        return {
                                            load: function(e, i, s, a) {
                                                var r, n = new XMLHttpRequest;
                                                try {
                                                    n.responseType = "json"
                                                } catch (t) {}
                                                n.onreadystatechange = function() {
                                                    if (4 === n.readyState)
                                                        if (200 === n.status) r = t(n), s(r);
                                                        else try {
                                                            r = t(n), s(r)
                                                        } catch (t) {
                                                            a && a(t)
                                                        }
                                                };
                                                try {
                                                    n.open(["G", "E", "T"].join(""), e, !0)
                                                } catch (t) {
                                                    n.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                                }
                                                n.send()
                                            }
                                        }
                                    }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.dataManager.completeData(e), n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                                else if ("complete" === t.data.type) {
                                    var e = t.data.animation;
                                    n.dataManager.completeData(e), n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                            })), e.onmessage = function(t) {
                                var e = t.data,
                                    i = e.id,
                                    s = a[i];
                                a[i] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
                            })
                        }

                        function o(t, e) {
                            var s = "processId_" + (i += 1);
                            return a[s] = {
                                onComplete: t,
                                onError: e
                            }, s
                        }
                        return {
                            loadAnimation: function(t, i, s) {
                                h();
                                var a = o(i, s);
                                e.postMessage({
                                    type: "loadAnimation",
                                    path: t,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: a
                                })
                            },
                            loadData: function(t, i, s) {
                                h();
                                var a = o(i, s);
                                e.postMessage({
                                    type: "loadData",
                                    path: t,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: a
                                })
                            },
                            completeAnimation: function(t, i, s) {
                                h();
                                var a = o(i, s);
                                e.postMessage({
                                    type: "complete",
                                    animation: t,
                                    id: a
                                })
                            }
                        }
                    }(),
                    X = function() {
                        var t = function() {
                            var t = n("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function s(t, e, i) {
                            var s = "";
                            if (t.e) s = t.p;
                            else if (e) {
                                var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), s = e + a
                            } else s = i, s += t.u ? t.u : "", s += t.p;
                            return s
                        }

                        function a(t) {
                            var e = 0,
                                i = setInterval(function() {
                                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                }.bind(this), 50)
                        }

                        function r(t) {
                            var e = {
                                    assetData: t
                                },
                                i = s(t, this.assetsPath, this.path);
                            return W.loadData(i, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function h() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = r.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return h.prototype = {
                            loadAssets: function(t, e) {
                                var i;
                                this.imagesLoadedCb = e;
                                var s = t.length;
                                for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                            },
                            setAssetsPath: function(t) {
                                this.assetsPath = t || ""
                            },
                            setPath: function(t) {
                                this.path = t || ""
                            },
                            loadedImages: function() {
                                return this.totalImages === this.loadedAssets
                            },
                            loadedFootages: function() {
                                return this.totalFootages === this.loadedFootagesCount
                            },
                            destroy: function() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            },
                            getAsset: function(t) {
                                for (var e = 0, i = this.images.length; e < i;) {
                                    if (this.images[e].assetData === t) return this.images[e].img;
                                    e += 1
                                }
                                return null
                            },
                            createImgData: function(e) {
                                var i = s(e, this.assetsPath, this.path),
                                    a = n("img");
                                a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                    r.img = t, this._imageLoaded()
                                }.bind(this), !1), a.src = i;
                                var r = {
                                    img: a,
                                    assetData: e
                                };
                                return r
                            },
                            createImageData: function(e) {
                                var i = s(e, this.assetsPath, this.path),
                                    a = q("image");
                                u ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                    r.img = t, this._imageLoaded()
                                }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                                var r = {
                                    img: a,
                                    assetData: e
                                };
                                return r
                            },
                            imageLoaded: e,
                            footageLoaded: i,
                            setCacheType: function(t, e) {
                                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }
                        }, h
                    }();

                function H() {}
                H.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var Y = function() {
                        function t(t) {
                            for (var e, i = t.split("\r\n"), s = {}, a = 0, r = 0; r < i.length; r += 1) 2 === (e = i[r].split(":")).length && (s[e[0]] = e[1].trim(), a += 1);
                            if (0 === a) throw new Error;
                            return s
                        }
                        return function(e) {
                            for (var i = [], s = 0; s < e.length; s += 1) {
                                var a = e[s],
                                    r = {
                                        time: a.tm,
                                        duration: a.dr
                                    };
                                try {
                                    r.payload = JSON.parse(e[s].cm)
                                } catch (i) {
                                    try {
                                        r.payload = t(e[s].cm)
                                    } catch (t) {
                                        r.payload = {
                                            name: e[s].cm
                                        }
                                    }
                                }
                                i.push(r)
                            }
                            return i
                        }
                    }(),
                    G = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, i = this.compositions.length; e < i;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    J = {};

                function K(t) {
                    return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, K(t)
                }
                var U = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = E(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = d, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = G(), this.imagePreloader = new X, this.audioController = o(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new S("drawnFrame", 0, 0, 0)
                };
                h([H], U), U.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                    var i = J[e];
                    this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), W.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, U.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, U.prototype.setupAnimation = function(t) {
                    W.completeAnimation(t, this.configAnimation)
                }, U.prototype.setData = function(t, e) {
                    e && "object" !== K(e) && (e = JSON.parse(e));
                    var i = {
                            wrapper: t,
                            animationData: e
                        },
                        s = t.attributes;
                    i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : function() {
                        if (J.canvas) return "canvas";
                        for (var t in J)
                            if (J[t]) return t;
                        return ""
                    }() || "canvas";
                    var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                    "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10));
                    var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                    i.autoplay = "false" !== r, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
                }, U.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, i, s = this.animationData.layers,
                        a = s.length,
                        r = t.layers,
                        n = r.length;
                    for (i = 0; i < n; i += 1)
                        for (e = 0; e < a;) {
                            if (s[e].id === r[i].id) {
                                s[e] = r[i];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, W.completeAnimation(this.animationData, this.onSegmentComplete)
                }, U.prototype.onSegmentComplete = function(t) {
                    this.animationData = t;
                    var e = N();
                    e && e.initExpressions(this), this.loadNextSegment()
                }, U.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, W.loadData(i, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, U.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, U.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, U.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, U.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Y(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, U.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, U.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var t = N();
                        t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, U.prototype.resize = function(t, e) {
                    var i = "number" == typeof t ? t : void 0,
                        s = "number" == typeof e ? e : void 0;
                    this.renderer.updateContainerSize(i, s)
                }, U.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, U.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, U.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, U.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, U.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, U.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, U.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, U.prototype.getMarkerData = function(t) {
                    for (var e, i = 0; i < this.markers.length; i += 1)
                        if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                    return null
                }, U.prototype.goToAndStop = function(t, e, i) {
                    if (!i || this.name === i) {
                        var s = Number(t);
                        if (isNaN(s)) {
                            var a = this.getMarkerData(t);
                            a && this.goToAndStop(a.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, U.prototype.goToAndPlay = function(t, e, i) {
                    if (!i || this.name === i) {
                        var s = Number(t);
                        if (isNaN(s)) {
                            var a = this.getMarkerData(t);
                            a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                        } else this.goToAndStop(s, e, i);
                        this.play()
                    }
                }, U.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            i = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, U.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, U.prototype.setSegment = function(t, e) {
                    var i = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                }, U.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === K(t[0])) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) this.segments.push(t[i])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, U.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, U.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, U.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, U.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, U.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, U.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, U.prototype.setLoop = function(t) {
                    this.loop = t
                }, U.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, U.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, U.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, U.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, U.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, U.prototype.getPath = function() {
                    return this.path
                }, U.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, U.prototype.getAssetData = function(t) {
                    for (var e = 0, i = this.assets.length; e < i;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, U.prototype.hide = function() {
                    this.renderer.hide()
                }, U.prototype.show = function() {
                    this.renderer.show()
                }, U.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, U.prototype.updateDocumentData = function(t, e, i) {
                    try {
                        this.renderer.getElementByPath(t).updateDocumentData(e, i)
                    } catch (t) {}
                }, U.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new S(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new x(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new w(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new D(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new C(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new S(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new x(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new w(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new D(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new C(t, this))
                }, U.prototype.triggerRenderFrameError = function(t) {
                    var e = new M(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, U.prototype.triggerConfigError = function(t) {
                    var e = new F(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var Z = function() {
                        var t = {},
                            e = [],
                            i = 0,
                            s = 0,
                            a = 0,
                            r = !0,
                            h = !1;

                        function o(t) {
                            for (var i = 0, a = t.target; i < s;) e[i].animation === a && (e.splice(i, 1), i -= 1, s -= 1, a.isPaused || f()), i += 1
                        }

                        function l(t, i) {
                            if (!t) return null;
                            for (var a = 0; a < s;) {
                                if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                                a += 1
                            }
                            var r = new U;
                            return d(r, t), r.setData(t, i), r
                        }

                        function p() {
                            a += 1, u()
                        }

                        function f() {
                            a -= 1
                        }

                        function d(t, i) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", p), t.addEventListener("_idle", f), e.push({
                                elem: i,
                                animation: t
                            }), s += 1
                        }

                        function m(t) {
                            var n, o = t - i;
                            for (n = 0; n < s; n += 1) e[n].animation.advanceTime(o);
                            i = t, a && !h ? window.requestAnimationFrame(m) : r = !0
                        }

                        function c(t) {
                            i = t, window.requestAnimationFrame(m)
                        }

                        function u() {
                            !h && a && r && (window.requestAnimationFrame(c), r = !1)
                        }
                        return t.registerAnimation = l, t.loadAnimation = function(t) {
                            var e = new U;
                            return d(e, null), e.setParams(t), e
                        }, t.setSpeed = function(t, i) {
                            var a;
                            for (a = 0; a < s; a += 1) e[a].animation.setSpeed(t, i)
                        }, t.setDirection = function(t, i) {
                            var a;
                            for (a = 0; a < s; a += 1) e[a].animation.setDirection(t, i)
                        }, t.play = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.play(t)
                        }, t.pause = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.pause(t)
                        }, t.stop = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.stop(t)
                        }, t.togglePause = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
                        }, t.searchAnimations = function(t, e, i) {
                            var s, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                r = a.length;
                            for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), l(a[s], t);
                            if (e && 0 === r) {
                                i || (i = "svg");
                                var h = document.getElementsByTagName("body")[0];
                                h.innerText = "";
                                var o = n("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), h.appendChild(o), l(o, t)
                            }
                        }, t.resize = function() {
                            var t;
                            for (t = 0; t < s; t += 1) e[t].animation.resize()
                        }, t.goToAndStop = function(t, i, a) {
                            var r;
                            for (r = 0; r < s; r += 1) e[r].animation.goToAndStop(t, i, a)
                        }, t.destroy = function(t) {
                            var i;
                            for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                        }, t.freeze = function() {
                            h = !0
                        }, t.unfreeze = function() {
                            h = !1, u()
                        }, t.setVolume = function(t, i) {
                            var a;
                            for (a = 0; a < s; a += 1) e[a].animation.setVolume(t, i)
                        }, t.mute = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.mute(t)
                        }, t.unmute = function(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
                        }, t.getRegisteredAnimations = function() {
                            var t, i = e.length,
                                s = [];
                            for (t = 0; t < i; t += 1) s.push(e[t].animation);
                            return s
                        }, t
                    }(),
                    Q = function() {
                        var t = {
                                getBezierEasing: function(t, i, s, a, r) {
                                    var n = r || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                                    if (e[n]) return e[n];
                                    var h = new l([t, i, s, a]);
                                    return e[n] = h, h
                                }
                            },
                            e = {},
                            i = .1,
                            s = "function" == typeof Float32Array;

                        function a(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function r(t, e) {
                            return 3 * e - 6 * t
                        }

                        function n(t) {
                            return 3 * t
                        }

                        function h(t, e, i) {
                            return ((a(e, i) * t + r(e, i)) * t + n(e)) * t
                        }

                        function o(t, e, i) {
                            return 3 * a(e, i) * t * t + 2 * r(e, i) * t + n(e)
                        }

                        function l(t) {
                            this._p = t, this._mSampleValues = s ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return l.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    i = this._p[1],
                                    s = this._p[2],
                                    a = this._p[3];
                                return this._precomputed || this._precompute(), e === i && s === a ? t : 0 === t ? 0 : 1 === t ? 1 : h(this._getTForX(t), i, a)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    i = this._p[2],
                                    s = this._p[3];
                                this._precomputed = !0, t === e && i === s || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], s = 0; s < 11; ++s) this._mSampleValues[s] = h(s * i, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], s = this._p[2], a = this._mSampleValues, r = 0, n = 1; 10 !== n && a[n] <= t; ++n) r += i;
                                var l = r + (t - a[--n]) / (a[n + 1] - a[n]) * i,
                                    p = o(l, e, s);
                                return p >= .001 ? function(t, e, i, s) {
                                    for (var a = 0; a < 4; ++a) {
                                        var r = o(e, i, s);
                                        if (0 === r) return e;
                                        e -= (h(e, i, s) - t) / r
                                    }
                                    return e
                                }(t, l, e, s) : 0 === p ? l : function(t, e, i, s, a) {
                                    var r, n, o = 0;
                                    do {
                                        (r = h(n = e + (i - e) / 2, s, a) - t) > 0 ? i = n : e = n
                                    } while (Math.abs(r) > 1e-7 && ++o < 10);
                                    return n
                                }(t, r, r + i, e, s)
                            }
                        }, t
                    }(),
                    $ = function(t) {
                        return t.concat(p(t.length))
                    },
                    tt = function(t, e, i) {
                        var s = 0,
                            a = t,
                            r = p(a);
                        return {
                            newElement: function() {
                                return s ? r[s -= 1] : e()
                            },
                            release: function(t) {
                                s === a && (r = $(r), a *= 2), i && i(t), r[s] = t, s += 1
                            }
                        }
                    },
                    et = tt(8, (function() {
                        return {
                            addedLength: 0,
                            percents: l("float32", B()),
                            lengths: l("float32", B())
                        }
                    })),
                    it = tt(8, (function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }), (function(t) {
                        var e, i = t.lengths.length;
                        for (e = 0; e < i; e += 1) et.release(t.lengths[e]);
                        t.lengths.length = 0
                    })),
                    st = function() {
                        var t = Math;

                        function e(t, e, i, s, a, r) {
                            var n = t * s + e * a + i * r - a * s - r * t - i * e;
                            return n > -.001 && n < .001
                        }
                        var i = function(t, e, i, s) {
                            var a, r, n, h, o, l, p = B(),
                                f = 0,
                                d = [],
                                m = [],
                                c = et.newElement();
                            for (n = i.length, a = 0; a < p; a += 1) {
                                for (o = a / (p - 1), l = 0, r = 0; r < n; r += 1) h = g(1 - o, 3) * t[r] + 3 * g(1 - o, 2) * o * i[r] + 3 * (1 - o) * g(o, 2) * s[r] + g(o, 3) * e[r], d[r] = h, null !== m[r] && (l += g(d[r] - m[r], 2)), m[r] = d[r];
                                l && (f += l = y(l)), c.percents[a] = o, c.lengths[a] = f
                            }
                            return c.addedLength = f, c
                        };

                        function s(t) {
                            this.segmentLength = 0, this.points = new Array(t)
                        }

                        function a(t, e) {
                            this.partialLength = t, this.point = e
                        }
                        var r, n = (r = {}, function(t, i, n, h) {
                            var o = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + h[0] + "_" + h[1]).replace(/\./g, "p");
                            if (!r[o]) {
                                var l, f, d, m, c, u, v, b = B(),
                                    _ = 0,
                                    k = null;
                                2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + h[0], i[1] + h[1]) && (b = 2);
                                var P = new s(b);
                                for (d = n.length, l = 0; l < b; l += 1) {
                                    for (v = p(d), c = l / (b - 1), u = 0, f = 0; f < d; f += 1) m = g(1 - c, 3) * t[f] + 3 * g(1 - c, 2) * c * (t[f] + n[f]) + 3 * (1 - c) * g(c, 2) * (i[f] + h[f]) + g(c, 3) * i[f], v[f] = m, null !== k && (u += g(v[f] - k[f], 2));
                                    _ += u = y(u), P.points[l] = new a(u, v), k = v
                                }
                                P.segmentLength = _, r[o] = P
                            }
                            return r[o]
                        });

                        function h(t, e) {
                            var i = e.percents,
                                s = e.lengths,
                                a = i.length,
                                r = v((a - 1) * t),
                                n = t * e.addedLength,
                                h = 0;
                            if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                            for (var o = s[r] > n ? -1 : 1, l = !0; l;)
                                if (s[r] <= n && s[r + 1] > n ? (h = (n - s[r]) / (s[r + 1] - s[r]), l = !1) : r += o, r < 0 || r >= a - 1) {
                                    if (r === a - 1) return i[r];
                                    l = !1
                                }
                            return i[r] + (i[r + 1] - i[r]) * h
                        }
                        var o = l("float32", 8);
                        return {
                            getSegmentsLength: function(t) {
                                var e, s = it.newElement(),
                                    a = t.c,
                                    r = t.v,
                                    n = t.o,
                                    h = t.i,
                                    o = t._length,
                                    l = s.lengths,
                                    p = 0;
                                for (e = 0; e < o - 1; e += 1) l[e] = i(r[e], r[e + 1], n[e], h[e + 1]), p += l[e].addedLength;
                                return a && o && (l[e] = i(r[e], r[0], n[e], h[0]), p += l[e].addedLength), s.totalLength = p, s
                            },
                            getNewSegment: function(e, i, s, a, r, n, l) {
                                r < 0 ? r = 0 : r > 1 && (r = 1);
                                var p, f = h(r, l),
                                    d = h(n = n > 1 ? 1 : n, l),
                                    m = e.length,
                                    c = 1 - f,
                                    u = 1 - d,
                                    g = c * c * c,
                                    y = f * c * c * 3,
                                    v = f * f * c * 3,
                                    b = f * f * f,
                                    _ = c * c * u,
                                    k = f * c * u + c * f * u + c * c * d,
                                    P = f * f * u + c * f * d + f * c * d,
                                    A = f * f * d,
                                    S = c * u * u,
                                    w = f * u * u + c * d * u + c * u * d,
                                    x = f * d * u + c * d * d + f * u * d,
                                    D = f * d * d,
                                    C = u * u * u,
                                    M = d * u * u + u * d * u + u * u * d,
                                    F = d * d * u + u * d * d + d * u * d,
                                    T = d * d * d;
                                for (p = 0; p < m; p += 1) o[4 * p] = t.round(1e3 * (g * e[p] + y * s[p] + v * a[p] + b * i[p])) / 1e3, o[4 * p + 1] = t.round(1e3 * (_ * e[p] + k * s[p] + P * a[p] + A * i[p])) / 1e3, o[4 * p + 2] = t.round(1e3 * (S * e[p] + w * s[p] + x * a[p] + D * i[p])) / 1e3, o[4 * p + 3] = t.round(1e3 * (C * e[p] + M * s[p] + F * a[p] + T * i[p])) / 1e3;
                                return o
                            },
                            getPointInSegment: function(e, i, s, a, r, n) {
                                var o = h(r, n),
                                    l = 1 - o;
                                return [t.round(1e3 * (l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * s[0] + (o * o * l + l * o * o + o * l * o) * a[0] + o * o * o * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * s[1] + (o * o * l + l * o * o + o * l * o) * a[1] + o * o * o * i[1])) / 1e3]
                            },
                            buildBezierData: n,
                            pointOnLine2D: e,
                            pointOnLine3D: function(i, s, a, r, n, h, o, l, p) {
                                if (0 === a && 0 === h && 0 === p) return e(i, s, r, n, o, l);
                                var f, d = t.sqrt(t.pow(r - i, 2) + t.pow(n - s, 2) + t.pow(h - a, 2)),
                                    m = t.sqrt(t.pow(o - i, 2) + t.pow(l - s, 2) + t.pow(p - a, 2)),
                                    c = t.sqrt(t.pow(o - r, 2) + t.pow(l - n, 2) + t.pow(p - h, 2));
                                return (f = d > m ? d > c ? d - m - c : c - m - d : c > m ? c - m - d : m - d - c) > -1e-4 && f < 1e-4
                            }
                        }
                    }(),
                    at = a,
                    rt = Math.abs;

                function nt(t, e) {
                    var i, s = this.offsetTime;
                    "multidimensional" === this.propType && (i = l("float32", this.pv.length));
                    for (var a, r, n, h, o, p, f, d, m, c = e.lastIndex, u = c, g = this.keyframes.length - 1, y = !0; y;) {
                        if (a = this.keyframes[u], r = this.keyframes[u + 1], u === g - 1 && t >= r.t - s) {
                            a.h && (a = r), c = 0;
                            break
                        }
                        if (r.t - s > t) {
                            c = u;
                            break
                        }
                        u < g - 1 ? u += 1 : (c = 0, y = !1)
                    }
                    n = this.keyframesMetadata[u] || {};
                    var v, b, _, k, A, S, w, x, D, C, M = r.t - s,
                        F = a.t - s;
                    if (a.to) {
                        n.bezierData || (n.bezierData = st.buildBezierData(a.s, r.s || a.e, a.to, a.ti));
                        var T = n.bezierData;
                        if (t >= M || t < F) {
                            var E = t >= M ? T.points.length - 1 : 0;
                            for (o = T.points[E].point.length, h = 0; h < o; h += 1) i[h] = T.points[E].point[h]
                        } else {
                            n.__fnct ? m = n.__fnct : (m = Q.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, n.__fnct = m), p = m((t - F) / (M - F));
                            var I, L = T.segmentLength * p,
                                V = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
                            for (d = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, y = !0, f = T.points.length; y;) {
                                if (V += T.points[d].partialLength, 0 === L || 0 === p || d === T.points.length - 1) {
                                    for (o = T.points[d].point.length, h = 0; h < o; h += 1) i[h] = T.points[d].point[h];
                                    break
                                }
                                if (L >= V && L < V + T.points[d + 1].partialLength) {
                                    for (I = (L - V) / T.points[d + 1].partialLength, o = T.points[d].point.length, h = 0; h < o; h += 1) i[h] = T.points[d].point[h] + (T.points[d + 1].point[h] - T.points[d].point[h]) * I;
                                    break
                                }
                                d < f - 1 ? d += 1 : y = !1
                            }
                            e._lastPoint = d, e._lastAddedLength = V - T.points[d].partialLength, e._lastKeyframeIndex = u
                        }
                    } else {
                        var z, R, N, O, B;
                        if (g = a.s.length, v = r.s || a.e, this.sh && 1 !== a.h) t >= M ? (i[0] = v[0], i[1] = v[1], i[2] = v[2]) : t <= F ? (i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2]) : (b = i, _ = function(t, e, i) {
                            var s, a, r, n, h, o = [],
                                l = t[0],
                                p = t[1],
                                f = t[2],
                                d = t[3],
                                m = e[0],
                                c = e[1],
                                u = e[2],
                                g = e[3];
                            return (a = l * m + p * c + f * u + d * g) < 0 && (a = -a, m = -m, c = -c, u = -u, g = -g), 1 - a > 1e-6 ? (s = Math.acos(a), r = Math.sin(s), n = Math.sin((1 - i) * s) / r, h = Math.sin(i * s) / r) : (n = 1 - i, h = i), o[0] = n * l + h * m, o[1] = n * p + h * c, o[2] = n * f + h * u, o[3] = n * d + h * g, o
                        }(ht(a.s), ht(v), (t - F) / (M - F)), k = _[0], A = _[1], S = _[2], w = _[3], x = Math.atan2(2 * A * w - 2 * k * S, 1 - 2 * A * A - 2 * S * S), D = Math.asin(2 * k * A + 2 * S * w), C = Math.atan2(2 * k * w - 2 * A * S, 1 - 2 * k * k - 2 * S * S), b[0] = x / P, b[1] = D / P, b[2] = C / P);
                        else
                            for (u = 0; u < g; u += 1) 1 !== a.h && (t >= M ? p = 1 : t < F ? p = 0 : (a.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[u] ? m = n.__fnct[u] : (z = void 0 === a.o.x[u] ? a.o.x[0] : a.o.x[u], R = void 0 === a.o.y[u] ? a.o.y[0] : a.o.y[u], N = void 0 === a.i.x[u] ? a.i.x[0] : a.i.x[u], O = void 0 === a.i.y[u] ? a.i.y[0] : a.i.y[u], m = Q.getBezierEasing(z, R, N, O).get, n.__fnct[u] = m)) : n.__fnct ? m = n.__fnct : (z = a.o.x, R = a.o.y, N = a.i.x, O = a.i.y, m = Q.getBezierEasing(z, R, N, O).get, a.keyframeMetadata = m), p = m((t - F) / (M - F)))), v = r.s || a.e, B = 1 === a.h ? a.s[u] : a.s[u] + (v[u] - a.s[u]) * p, "multidimensional" === this.propType ? i[u] = B : i = B
                    }
                    return e.lastIndex = c, i
                }

                function ht(t) {
                    var e = t[0] * P,
                        i = t[1] * P,
                        s = t[2] * P,
                        a = Math.cos(e / 2),
                        r = Math.cos(i / 2),
                        n = Math.cos(s / 2),
                        h = Math.sin(e / 2),
                        o = Math.sin(i / 2),
                        l = Math.sin(s / 2);
                    return [h * o * n + a * r * l, h * r * n + a * o * l, a * o * n - h * r * l, a * r * n - h * o * l]
                }

                function ot() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== at && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var s = this.interpolateValue(t, this._caching);
                        this.pv = s
                    }
                    return this._caching.lastFrame = t, this.pv
                }

                function lt(t) {
                    var e;
                    if ("unidimensional" === this.propType) e = t * this.mult, rt(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                    else
                        for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, rt(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
                }

                function pt() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function ft(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function dt(t, e, i, s) {
                    this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = pt, this.setVValue = lt, this.addEffect = ft
                }

                function mt(t, e, i, s) {
                    var a;
                    this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var r = e.k.length;
                    for (this.v = l("float32", r), this.pv = l("float32", r), this.vel = l("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = pt, this.setVValue = lt, this.addEffect = ft
                }

                function ct(t, e, i, s) {
                    this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                        lastFrame: at,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = at, this.pv = at, this._isFirstFrame = !0, this.getValue = pt, this.setVValue = lt, this.interpolateValue = nt, this.effectsSequence = [ot.bind(this)], this.addEffect = ft
                }

                function ut(t, e, i, s) {
                    var a;
                    this.propType = "multidimensional";
                    var r, n, h, o, p = e.k.length;
                    for (a = 0; a < p - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, n = e.k[a + 1].s, h = e.k[a].to, o = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && st.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + h[0], r[1] + h[1]) && st.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && st.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + h[0], r[1] + h[1], r[2] + h[2]) && st.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + o[0], n[1] + o[1], n[2] + o[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === h[0] && 0 === h[1] && 0 === o[0] && 0 === o[1] && (2 === r.length || r[2] === n[2] && 0 === h[2] && 0 === o[2]) && (e.k[a].to = null, e.k[a].ti = null));
                    this.effectsSequence = [ot.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = pt, this.setVValue = lt, this.interpolateValue = nt, this.frameId = -1;
                    var f = e.k[0].s.length;
                    for (this.v = l("float32", f), this.pv = l("float32", f), a = 0; a < f; a += 1) this.v[a] = at, this.pv[a] = at;
                    this._caching = {
                        lastFrame: at,
                        lastIndex: 0,
                        value: l("float32", f)
                    }, this.addEffect = ft
                }
                var gt = {
                    getProp: function(t, e, i, s, a) {
                        var r;
                        if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                            if ("number" == typeof e.k[0]) r = new mt(t, e, s, a);
                            else switch (i) {
                                case 0:
                                    r = new ct(t, e, s, a);
                                    break;
                                case 1:
                                    r = new ut(t, e, s, a)
                            } else r = new dt(t, e, s, a);
                        return r.effectsSequence.length && a.addDynamicProperty(r), r
                    }
                };

                function yt() {}
                yt.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var vt = tt(8, (function() {
                    return l("float32", 2)
                }));

                function bt() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = p(this._maxLength), this.o = p(this._maxLength), this.i = p(this._maxLength)
                }
                bt.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var i = 0; i < e;) this.v[i] = vt.newElement(), this.o[i] = vt.newElement(), this.i[i] = vt.newElement(), i += 1
                }, bt.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, bt.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(p(this._maxLength)), this.i = this.i.concat(p(this._maxLength)), this.o = this.o.concat(p(this._maxLength)), this._maxLength *= 2
                }, bt.prototype.setXYAt = function(t, e, i, s, a) {
                    var r;
                    switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                        case "v":
                            r = this.v;
                            break;
                        case "i":
                            r = this.i;
                            break;
                        case "o":
                            r = this.o;
                            break;
                        default:
                            r = []
                    }(!r[s] || r[s] && !a) && (r[s] = vt.newElement()), r[s][0] = t, r[s][1] = e
                }, bt.prototype.setTripleAt = function(t, e, i, s, a, r, n, h) {
                    this.setXYAt(t, e, "v", n, h), this.setXYAt(i, s, "o", n, h), this.setXYAt(a, r, "i", n, h)
                }, bt.prototype.reverse = function() {
                    var t = new bt;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        i = this.o,
                        s = this.i,
                        a = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                    var r, n = this._length - 1,
                        h = this._length;
                    for (r = a; r < h; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), n -= 1;
                    return t
                }, bt.prototype.length = function() {
                    return this._length
                };
                var _t, kt = ((_t = tt(4, (function() {
                    return new bt
                }), (function(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) vt.release(t.v[e]), vt.release(t.i[e]), vt.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                }))).clone = function(t) {
                    var e, i = _t.newElement(),
                        s = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }, _t);

                function Pt() {
                    this._length = 0, this._maxLength = 4, this.shapes = p(this._maxLength)
                }
                Pt.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(p(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, Pt.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) kt.release(this.shapes[t]);
                    this._length = 0
                };
                var At, St, wt, xt, Dt = (At = {
                        newShapeCollection: function() {
                            return St ? xt[St -= 1] : new Pt
                        },
                        release: function(t) {
                            var e, i = t._length;
                            for (e = 0; e < i; e += 1) kt.release(t.shapes[e]);
                            t._length = 0, St === wt && (xt = $(xt), wt *= 2), xt[St] = t, St += 1
                        }
                    }, St = 0, xt = p(wt = 4), At),
                    Ct = function() {
                        var t = -999999;

                        function e(t, e, i) {
                            var s, a, r, n, h, o, l, p, f, d = i.lastIndex,
                                m = this.keyframes;
                            if (t < m[0].t - this.offsetTime) s = m[0].s[0], r = !0, d = 0;
                            else if (t >= m[m.length - 1].t - this.offsetTime) s = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], r = !0;
                            else {
                                for (var c, u, g, y = d, v = m.length - 1, b = !0; b && (c = m[y], !((u = m[y + 1]).t - this.offsetTime > t));) y < v - 1 ? y += 1 : b = !1;
                                if (g = this.keyframesMetadata[y] || {}, d = y, !(r = 1 === c.h)) {
                                    if (t >= u.t - this.offsetTime) p = 1;
                                    else if (t < c.t - this.offsetTime) p = 0;
                                    else {
                                        var _;
                                        g.__fnct ? _ = g.__fnct : (_ = Q.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get, g.__fnct = _), p = _((t - (c.t - this.offsetTime)) / (u.t - this.offsetTime - (c.t - this.offsetTime)))
                                    }
                                    a = u.s ? u.s[0] : c.e[0]
                                }
                                s = c.s[0]
                            }
                            for (o = e._length, l = s.i[0].length, i.lastIndex = d, n = 0; n < o; n += 1)
                                for (h = 0; h < l; h += 1) f = r ? s.i[n][h] : s.i[n][h] + (a.i[n][h] - s.i[n][h]) * p, e.i[n][h] = f, f = r ? s.o[n][h] : s.o[n][h] + (a.o[n][h] - s.o[n][h]) * p, e.o[n][h] = f, f = r ? s.v[n][h] : s.v[n][h] + (a.v[n][h] - s.v[n][h]) * p, e.v[n][h] = f
                        }

                        function i() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                i = this.keyframes[0].t - this.offsetTime,
                                s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                a = this._caching.lastFrame;
                            return a !== t && (a < i && e < i || a > s && e > s) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function s() {
                            this.paths = this.localShapeCollection
                        }

                        function a(t) {
                            (function(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var i, s = t._length;
                                for (i = 0; i < s; i += 1)
                                    if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                return !0
                            })(this.v, t) || (this.v = kt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function r() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var i = this.effectsSequence.length;
                                        for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function n(t, e, i) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var a = 3 === i ? e.pt.k : e.ks.k;
                            this.v = kt.clone(a), this.pv = kt.clone(this.v), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(e, a, r) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === r ? a.pt.k : a.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var n = this.keyframes[0].s[0].i.length;
                            this.v = kt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = kt.clone(this.v), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [i.bind(this)]
                        }
                        n.prototype.interpolateShape = e, n.prototype.getValue = r, n.prototype.setVValue = a, n.prototype.addEffect = o, l.prototype.getValue = r, l.prototype.interpolateShape = e, l.prototype.setVValue = a, l.prototype.addEffect = o;
                        var p = function() {
                                var t = A;

                                function e(t, e) {
                                    this.v = kt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = gt.getProp(t, e.p, 1, 0, this), this.s = gt.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: s,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            i = this.p.v[1],
                                            s = this.s.v[0] / 2,
                                            a = this.s.v[1] / 2,
                                            r = 3 !== this.d,
                                            n = this.v;
                                        n.v[0][0] = e, n.v[0][1] = i - a, n.v[1][0] = r ? e + s : e - s, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + a, n.v[3][0] = r ? e - s : e + s, n.v[3][1] = i, n.i[0][0] = r ? e - s * t : e + s * t, n.i[0][1] = i - a, n.i[1][0] = r ? e + s : e - s, n.i[1][1] = i - a * t, n.i[2][0] = r ? e + s * t : e - s * t, n.i[2][1] = i + a, n.i[3][0] = r ? e - s : e + s, n.i[3][1] = i + a * t, n.o[0][0] = r ? e + s * t : e - s * t, n.o[0][1] = i - a, n.o[1][0] = r ? e + s : e - s, n.o[1][1] = i + a * t, n.o[2][0] = r ? e - s * t : e + s * t, n.o[2][1] = i + a, n.o[3][0] = r ? e - s : e + s, n.o[3][1] = i - a * t
                                    }
                                }, h([yt], e), e
                            }(),
                            f = function() {
                                function t(t, e) {
                                    this.v = kt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = gt.getProp(t, e.ir, 0, 0, this), this.is = gt.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = gt.getProp(t, e.pt, 0, 0, this), this.p = gt.getProp(t, e.p, 1, 0, this), this.r = gt.getProp(t, e.r, 0, P, this), this.or = gt.getProp(t, e.or, 0, 0, this), this.os = gt.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Dt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: s,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, i, s, a = 2 * Math.floor(this.pt.v),
                                            r = 2 * Math.PI / a,
                                            n = !0,
                                            h = this.or.v,
                                            o = this.ir.v,
                                            l = this.os.v,
                                            p = this.is.v,
                                            f = 2 * Math.PI * h / (2 * a),
                                            d = 2 * Math.PI * o / (2 * a),
                                            m = -Math.PI / 2;
                                        m += this.r.v;
                                        var c = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < a; t += 1) {
                                            i = n ? l : p, s = n ? f : d;
                                            var u = (e = n ? h : o) * Math.cos(m),
                                                g = e * Math.sin(m),
                                                y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                            u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * s * i * c, g - v * s * i * c, u + y * s * i * c, g + v * s * i * c, t, !0), n = !n, m += r * c
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            i = 2 * Math.PI / e,
                                            s = this.or.v,
                                            a = this.os.v,
                                            r = 2 * Math.PI * s / (4 * e),
                                            n = .5 * -Math.PI,
                                            h = 3 === this.data.d ? -1 : 1;
                                        for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var o = s * Math.cos(n),
                                                l = s * Math.sin(n),
                                                p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
                                                f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l);
                                            o += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(o, l, o - p * r * a * h, l - f * r * a * h, o + p * r * a * h, l + f * r * a * h, t, !0), n += i * h
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, h([yt], t), t
                            }(),
                            d = function() {
                                function t(t, e) {
                                    this.v = kt.newElement(), this.v.c = !0, this.localShapeCollection = Dt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = gt.getProp(t, e.p, 1, 0, this), this.s = gt.getProp(t, e.s, 1, 0, this), this.r = gt.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            s = this.s.v[1] / 2,
                                            a = b(i, s, this.r.v),
                                            r = a * (1 - A);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: s
                                }, h([yt], t), t
                            }(),
                            m = {
                                getShapeProp: function(t, e, i) {
                                    var s;
                                    return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new l(t, e, i) : new n(t, e, i) : 5 === i ? s = new d(t, e) : 6 === i ? s = new p(t, e) : 7 === i && (s = new f(t, e)), s.k && t.addDynamicProperty(s), s
                                },
                                getConstructorFunction: function() {
                                    return n
                                },
                                getKeyframedConstructorFunction: function() {
                                    return l
                                }
                            };
                        return m
                    }(),
                    Mt = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            i = Math.tan,
                            s = Math.round;

                        function a() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function r(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                a = e(i);
                            return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function n(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                a = e(i);
                            return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1)
                        }

                        function h(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                a = e(i);
                            return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1)
                        }

                        function o(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                a = e(i);
                            return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function p(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function f(t, e) {
                            return this.shear(i(t), i(e))
                        }

                        function d(s, a) {
                            var r = t(a),
                                n = e(a);
                            return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function m(t, e, i) {
                            return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                        }

                        function c(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = h, this.props[8] = o, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = d, this.props[13] = m, this.props[14] = c, this.props[15] = u, this
                        }

                        function u(t, e, i) {
                            return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                        }

                        function g(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                            var g = this.props;
                            if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === h && 0 === o && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * d, g[13] = g[13] * r + g[15] * m, g[14] = g[14] * p + g[15] * c, g[15] *= u, this._identityCalculated = !1, this;
                            var y = g[0],
                                v = g[1],
                                b = g[2],
                                _ = g[3],
                                k = g[4],
                                P = g[5],
                                A = g[6],
                                S = g[7],
                                w = g[8],
                                x = g[9],
                                D = g[10],
                                C = g[11],
                                M = g[12],
                                F = g[13],
                                T = g[14],
                                E = g[15];
                            return g[0] = y * t + v * a + b * o + _ * d, g[1] = y * e + v * r + b * l + _ * m, g[2] = y * i + v * n + b * p + _ * c, g[3] = y * s + v * h + b * f + _ * u, g[4] = k * t + P * a + A * o + S * d, g[5] = k * e + P * r + A * l + S * m, g[6] = k * i + P * n + A * p + S * c, g[7] = k * s + P * h + A * f + S * u, g[8] = w * t + x * a + D * o + C * d, g[9] = w * e + x * r + D * l + C * m, g[10] = w * i + x * n + D * p + C * c, g[11] = w * s + x * h + D * f + C * u, g[12] = M * t + F * a + T * o + E * d, g[13] = M * e + F * r + T * l + E * m, g[14] = M * i + F * n + T * p + E * c, g[15] = M * s + F * h + T * f + E * u, this._identityCalculated = !1, this
                        }

                        function y() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function v(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function b(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function _(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function k(t, e, i) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }
                        }

                        function P(t, e, i) {
                            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                        }

                        function A(t, e, i) {
                            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                        }

                        function S(t, e, i) {
                            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }

                        function w() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                i = -this.props[1] / t,
                                s = -this.props[4] / t,
                                a = this.props[0] / t,
                                r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                h = new Mt;
                            return h.props[0] = e, h.props[1] = i, h.props[4] = s, h.props[5] = a, h.props[12] = r, h.props[13] = n, h
                        }

                        function x(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function D(t) {
                            var e, i = t.length,
                                s = [];
                            for (e = 0; e < i; e += 1) s[e] = x(t[e]);
                            return s
                        }

                        function C(t, e, i) {
                            var s = l("float32", 6);
                            if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                            else {
                                var a = this.props[0],
                                    r = this.props[1],
                                    n = this.props[4],
                                    h = this.props[5],
                                    o = this.props[12],
                                    p = this.props[13];
                                s[0] = t[0] * a + t[1] * n + o, s[1] = t[0] * r + t[1] * h + p, s[2] = e[0] * a + e[1] * n + o, s[3] = e[0] * r + e[1] * h + p, s[4] = i[0] * a + i[1] * n + o, s[5] = i[0] * r + i[1] * h + p
                            }
                            return s
                        }

                        function M(t, e, i) {
                            return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                        }

                        function F(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var i = this.props;
                            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                        }

                        function T() {
                            for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += s(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                            return i
                        }

                        function E(t) {
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(1e4 * t) / 1e4 : t
                        }

                        function I() {
                            var t = this.props;
                            return "matrix(" + E(t[0]) + "," + E(t[1]) + "," + E(t[4]) + "," + E(t[5]) + "," + E(t[12]) + "," + E(t[13]) + ")"
                        }
                        return function() {
                            this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = f, this.skewFromAxis = d, this.shear = p, this.scale = m, this.setTransform = c, this.translate = u, this.transform = g, this.applyToPoint = k, this.applyToX = P, this.applyToY = A, this.applyToZ = S, this.applyToPointArray = M, this.applyToTriplePoints = C, this.applyToPointStringified = F, this.toCSS = T, this.to2dCSS = I, this.clone = b, this.cloneFromProps = _, this.equals = v, this.inversePoints = D, this.inversePoint = x, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = l("float32", 16), this.reset()
                        }
                    }();

                function Ft(t) {
                    return Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Ft(t)
                }
                var Tt = {};

                function Et() {
                    Z.searchAnimations()
                }
                Tt.play = Z.play, Tt.pause = Z.pause, Tt.setLocationHref = function(e) {
                    t = e
                }, Tt.togglePause = Z.togglePause, Tt.setSpeed = Z.setSpeed, Tt.setDirection = Z.setDirection, Tt.stop = Z.stop, Tt.searchAnimations = Et, Tt.registerAnimation = Z.registerAnimation, Tt.loadAnimation = function(t) {
                    return Z.loadAnimation(t)
                }, Tt.setSubframeRendering = function(t) {
                    ! function(t) {
                        d = !!t
                    }(t)
                }, Tt.resize = Z.resize, Tt.goToAndStop = Z.goToAndStop, Tt.destroy = Z.destroy, Tt.setQuality = function(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            O(200);
                            break;
                        default:
                        case "medium":
                            O(50);
                            break;
                        case "low":
                            O(10)
                    } else !isNaN(t) && t > 1 && O(t);
                    B()
                }, Tt.inBrowser = function() {
                    return "undefined" != typeof navigator
                }, Tt.installPlugin = function(t, e) {
                    "expressions" === t && (m = e)
                }, Tt.freeze = Z.freeze, Tt.unfreeze = Z.unfreeze, Tt.setVolume = Z.setVolume, Tt.mute = Z.mute, Tt.unmute = Z.unmute, Tt.getRegisteredAnimations = Z.getRegisteredAnimations, Tt.useWebWorker = function(t) {
                    s = !!t
                }, Tt.setIDPrefix = function(t) {
                    c = t
                }, Tt.__getFactory = function(t) {
                    switch (t) {
                        case "propertyFactory":
                            return gt;
                        case "shapePropertyFactory":
                            return Ct;
                        case "matrix":
                            return Mt;
                        default:
                            return null
                    }
                }, Tt.version = "5.11.0";
                var It = "",
                    Lt = document.getElementsByTagName("script"),
                    Vt = Lt[Lt.length - 1] || {
                        src: ""
                    };
                It = Vt.src ? Vt.src.replace(/^[^\?]+\??/, "") : "",
                    function(t) {
                        for (var e = It.split("&"), i = 0; i < e.length; i += 1) {
                            var s = e[i].split("=");
                            if ("renderer" == decodeURIComponent(s[0])) return decodeURIComponent(s[1])
                        }
                    }();
                var zt = setInterval((function() {
                    "complete" === document.readyState && (clearInterval(zt), Et())
                }), 100);
                try {
                    "object" === Ft(e) || i.amdO
                } catch (t) {}
                var Rt = function() {
                    var t = {},
                        e = {};
                    return t.registerModifier = function(t, i) {
                        e[t] || (e[t] = i)
                    }, t.getModifier = function(t, i, s) {
                        return new e[t](i, s)
                    }, t
                }();

                function Nt() {}

                function Ot() {}

                function Bt() {}
                Nt.prototype.initModifierProperties = function() {}, Nt.prototype.addShapeToModifier = function() {}, Nt.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: Dt.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, Nt.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = a, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, Nt.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, h([yt], Nt), h([Nt], Ot), Ot.prototype.initModifierProperties = function(t, e) {
                    this.s = gt.getProp(t, e.s, 0, .01, this), this.e = gt.getProp(t, e.e, 0, .01, this), this.o = gt.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, Ot.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, Ot.prototype.calculateShapeEdges = function(t, e, i, s, a) {
                    var r = [];
                    e <= 1 ? r.push({
                        s: t,
                        e
                    }) : t >= 1 ? r.push({
                        s: t - 1,
                        e: e - 1
                    }) : (r.push({
                        s: t,
                        e: 1
                    }), r.push({
                        s: 0,
                        e: e - 1
                    }));
                    var n, h, o = [],
                        l = r.length;
                    for (n = 0; n < l; n += 1) {
                        var p, f;
                        (h = r[n]).e * a < s || h.s * a > s + i || (p = h.s * a <= s ? 0 : (h.s * a - s) / i, f = h.e * a >= s + i ? 1 : (h.e * a - s) / i, o.push([p, f]))
                    }
                    return o.length || o.push([0, 0]), o
                }, Ot.prototype.releasePathsData = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) it.release(t[e]);
                    return t.length = 0, t
                }, Ot.prototype.processShapes = function(t) {
                    var e, i, s, a;
                    if (this._mdf || t) {
                        var r = this.o.v % 360 / 360;
                        if (r < 0 && (r += 1), (e = this.s.v > 1 ? 1 + r : this.s.v < 0 ? 0 + r : this.s.v + r) > (i = this.e.v > 1 ? 1 + r : this.e.v < 0 ? 0 + r : this.e.v + r)) {
                            var n = e;
                            e = i, i = n
                        }
                        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                    } else e = this.sValue, i = this.eValue;
                    var h, o, l, p, f, d = this.shapes.length,
                        m = 0;
                    if (i === e)
                        for (a = 0; a < d; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
                    else if (1 === i && 0 === e || 0 === i && 1 === e) {
                        if (this._mdf)
                            for (a = 0; a < d; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                    } else {
                        var c, u, g = [];
                        for (a = 0; a < d; a += 1)
                            if ((c = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (o = (s = c.shape.paths)._length, f = 0, !c.shape._mdf && c.pathsData.length) f = c.totalShapeLength;
                                else {
                                    for (l = this.releasePathsData(c.pathsData), h = 0; h < o; h += 1) p = st.getSegmentsLength(s.shapes[h]), l.push(p), f += p.totalLength;
                                    c.totalShapeLength = f, c.pathsData = l
                                }
                                m += f, c.shape._mdf = !0
                            } else c.shape.paths = c.localShapeCollection;
                        var y, v = e,
                            b = i,
                            _ = 0;
                        for (a = d - 1; a >= 0; a -= 1)
                            if ((c = this.shapes[a]).shape._mdf) {
                                for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && d > 1 ? (y = this.calculateShapeEdges(e, i, c.totalShapeLength, _, m), _ += c.totalShapeLength) : y = [
                                        [v, b]
                                    ], o = y.length, h = 0; h < o; h += 1) {
                                    v = y[h][0], b = y[h][1], g.length = 0, b <= 1 ? g.push({
                                        s: c.totalShapeLength * v,
                                        e: c.totalShapeLength * b
                                    }) : v >= 1 ? g.push({
                                        s: c.totalShapeLength * (v - 1),
                                        e: c.totalShapeLength * (b - 1)
                                    }) : (g.push({
                                        s: c.totalShapeLength * v,
                                        e: c.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: c.totalShapeLength * (b - 1)
                                    }));
                                    var k = this.addShapes(c, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                                var P = k.pop();
                                                this.addPaths(k, u), k = this.addShapes(c, g[1], P)
                                            } else this.addPaths(k, u), k = this.addShapes(c, g[1]);
                                        this.addPaths(k, u)
                                    }
                                }
                                c.shape.paths = u
                            }
                    }
                }, Ot.prototype.addPaths = function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1) e.addShape(t[i])
                }, Ot.prototype.addSegment = function(t, e, i, s, a, r, n) {
                    a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1)
                }, Ot.prototype.addSegmentFromArray = function(t, e, i, s) {
                    e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                }, Ot.prototype.addShapes = function(t, e, i) {
                    var s, a, r, n, h, o, l, p, f = t.pathsData,
                        d = t.shape.paths.shapes,
                        m = t.shape.paths._length,
                        c = 0,
                        u = [],
                        g = !0;
                    for (i ? (h = i._length, p = i._length) : (i = kt.newElement(), h = 0, p = 0), u.push(i), s = 0; s < m; s += 1) {
                        for (o = f[s].lengths, i.c = d[s].c, r = d[s].c ? o.length : o.length + 1, a = 1; a < r; a += 1)
                            if (c + (n = o[a - 1]).addedLength < e.s) c += n.addedLength, i.c = !1;
                            else {
                                if (c > e.e) {
                                    i.c = !1;
                                    break
                                }
                                e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[a], d[s].v[a], i, h, g), g = !1) : (l = st.getNewSegment(d[s].v[a - 1], d[s].v[a], d[s].o[a - 1], d[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1), c += n.addedLength, h += 1
                            }
                        if (d[s].c && o.length) {
                            if (n = o[a - 1], c <= e.e) {
                                var y = o[a - 1].addedLength;
                                e.s <= c && e.e >= c + y ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[0], d[s].v[0], i, h, g), g = !1) : (l = st.getNewSegment(d[s].v[a - 1], d[s].v[0], d[s].o[a - 1], d[s].i[0], (e.s - c) / y, (e.e - c) / y, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1)
                            } else i.c = !1;
                            c += n.addedLength, h += 1
                        }
                        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                        s < m - 1 && (i = kt.newElement(), g = !0, u.push(i), h = 0)
                    }
                    return u
                }, h([Nt], Bt), Bt.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = gt.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, Bt.prototype.processPath = function(t, e) {
                    var i = e / 100,
                        s = [0, 0],
                        a = t._length,
                        r = 0;
                    for (r = 0; r < a; r += 1) s[0] += t.v[r][0], s[1] += t.v[r][1];
                    s[0] /= a, s[1] /= a;
                    var n, h, o, l, p, f, d = kt.newElement();
                    for (d.c = t.c, r = 0; r < a; r += 1) n = t.v[r][0] + (s[0] - t.v[r][0]) * i, h = t.v[r][1] + (s[1] - t.v[r][1]) * i, o = t.o[r][0] + (s[0] - t.o[r][0]) * -i, l = t.o[r][1] + (s[1] - t.o[r][1]) * -i, p = t.i[r][0] + (s[0] - t.i[r][0]) * -i, f = t.i[r][1] + (s[1] - t.i[r][1]) * -i, d.setTripleAt(n, h, o, l, p, f, r);
                    return d
                }, Bt.prototype.processShapes = function(t) {
                    var e, i, s, a, r, n, h = this.shapes.length,
                        o = this.amount.v;
                    if (0 !== o)
                        for (i = 0; i < h; i += 1) {
                            if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o));
                            r.shape.paths = r.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var qt = function() {
                    var t = [0, 0];

                    function e(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Mt, this.pre = new Mt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = gt.getProp(t, e.p.x, 0, 0, this), this.py = gt.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = gt.getProp(t, e.p.z, 0, 0, this))) : this.p = gt.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = gt.getProp(t, e.rx, 0, P, this), this.ry = gt.getProp(t, e.ry, 0, P, this), this.rz = gt.getProp(t, e.rz, 0, P, this), e.or.k[0].ti) {
                                var s, a = e.or.k.length;
                                for (s = 0; s < a; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                            }
                            this.or = gt.getProp(t, e.or, 1, P, this), this.or.sh = !0
                        } else this.r = gt.getProp(t, e.r || {
                            k: 0
                        }, 0, P, this);
                        e.sk && (this.sk = gt.getProp(t, e.sk, 0, P, this), this.sa = gt.getProp(t, e.sa, 0, P, this)), this.a = gt.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = gt.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = gt.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return e.prototype = {
                        applyToMatrix: function(t) {
                            var e = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        },
                        getValue: function(e) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                    var i;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var s, a;
                                        if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            s = [], a = [];
                                            var r = this.px,
                                                n = this.py;
                                            r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (s[0] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / i, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (s[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [r.pv, n.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                        } else s = a = t;
                                        this.v.rotate(-Math.atan2(s[1] - a[1], s[0] - a[0]))
                                    }
                                    this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }
                                this.frameId = this.elem.globalData.frameId
                            }
                        },
                        precalculateMatrix: function() {
                            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                }
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                            }
                        },
                        autoOrient: function() {}
                    }, h([yt], e), e.prototype.addDynamicProperty = function(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }, e.prototype._addDynamicProperty = yt.prototype.addDynamicProperty, {
                        getTransformProperty: function(t, i, s) {
                            return new e(t, i, s)
                        }
                    }
                }();

                function jt() {}

                function Wt() {}

                function Xt(t, e) {
                    return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                }

                function Ht(t) {
                    return Math.abs(t) <= 1e-5
                }

                function Yt(t, e, i) {
                    return t * (1 - i) + e * i
                }

                function Gt(t, e, i) {
                    return [Yt(t[0], e[0], i), Yt(t[1], e[1], i)]
                }

                function Jt(t, e, i, s) {
                    return [3 * e - t - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
                }

                function Kt(t) {
                    return new Ut(t, t, t, t, !1)
                }

                function Ut(t, e, i, s, a) {
                    a && re(t, e) && (e = Gt(t, s, 1 / 3)), a && re(i, s) && (i = Gt(t, s, 2 / 3));
                    var r = Jt(t[0], e[0], i[0], s[0]),
                        n = Jt(t[1], e[1], i[1], s[1]);
                    this.a = [r[0], n[0]], this.b = [r[1], n[1]], this.c = [r[2], n[2]], this.d = [r[3], n[3]], this.points = [t, e, i, s]
                }

                function Zt(t, e) {
                    var i = t.points[0][e],
                        s = t.points[t.points.length - 1][e];
                    if (i > s) {
                        var a = s;
                        s = i, i = a
                    }
                    for (var r = function(t, e, i) {
                            if (0 === t) return [];
                            var s = e * e - 4 * t * i;
                            if (s < 0) return [];
                            var a = -e / (2 * t);
                            if (0 === s) return [a];
                            var r = Math.sqrt(s) / (2 * t);
                            return [a - r, a + r]
                        }(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < r.length; n += 1)
                        if (r[n] > 0 && r[n] < 1) {
                            var h = t.point(r[n])[e];
                            h < i ? i = h : h > s && (s = h)
                        }
                    return {
                        min: i,
                        max: s
                    }
                }

                function Qt(t, e, i) {
                    var s = t.boundingBox();
                    return {
                        cx: s.cx,
                        cy: s.cy,
                        width: s.width,
                        height: s.height,
                        bez: t,
                        t: (e + i) / 2,
                        t1: e,
                        t2: i
                    }
                }

                function $t(t) {
                    var e = t.bez.split(.5);
                    return [Qt(e[0], t.t1, t.t), Qt(e[1], t.t, t.t2)]
                }

                function te(t, e, i, s, a, r) {
                    var n, h;
                    if (n = t, h = e, 2 * Math.abs(n.cx - h.cx) < n.width + h.width && 2 * Math.abs(n.cy - h.cy) < n.height + h.height)
                        if (i >= r || t.width <= s && t.height <= s && e.width <= s && e.height <= s) a.push([t.t, e.t]);
                        else {
                            var o = $t(t),
                                l = $t(e);
                            te(o[0], l[0], i + 1, s, a, r), te(o[0], l[1], i + 1, s, a, r), te(o[1], l[0], i + 1, s, a, r), te(o[1], l[1], i + 1, s, a, r)
                        }
                }

                function ee(t, e) {
                    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                }

                function ie(t, e, i, s) {
                    var a = [t[0], t[1], 1],
                        r = [e[0], e[1], 1],
                        n = [i[0], i[1], 1],
                        h = [s[0], s[1], 1],
                        o = ee(ee(a, r), ee(n, h));
                    return Ht(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
                }

                function se(t, e, i) {
                    return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
                }

                function ae(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1])
                }

                function re(t, e) {
                    return Xt(t[0], e[0]) && Xt(t[1], e[1])
                }

                function ne() {}

                function he(t, e, i, s, a, r, n) {
                    var h = i - Math.PI / 2,
                        o = i + Math.PI / 2,
                        l = e[0] + Math.cos(i) * s * a,
                        p = e[1] - Math.sin(i) * s * a;
                    t.setTripleAt(l, p, l + Math.cos(h) * r, p - Math.sin(h) * r, l + Math.cos(o) * n, p - Math.sin(o) * n, t.length())
                }

                function oe(t, e, i, s, a, r, n) {
                    var h = function(t, e) {
                            var i, s, a, r, n = 0 === e ? t.length() - 1 : e - 1,
                                h = (e + 1) % t.length(),
                                o = (i = t.v[n], a = [(s = t.v[h])[0] - i[0], s[1] - i[1]], r = .5 * -Math.PI, [Math.cos(r) * a[0] - Math.sin(r) * a[1], Math.sin(r) * a[0] + Math.cos(r) * a[1]]);
                            return Math.atan2(0, 1) - Math.atan2(o[1], o[0])
                        }(e, i),
                        o = e.v[i % e._length],
                        l = e.v[0 === i ? e._length - 1 : i - 1],
                        p = e.v[(i + 1) % e._length],
                        f = 2 === r ? Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)) : 0,
                        d = 2 === r ? Math.sqrt(Math.pow(o[0] - p[0], 2) + Math.pow(o[1] - p[1], 2)) : 0;
                    he(t, e.v[i % e._length], h, n, s, d / (2 * (a + 1)), f / (2 * (a + 1)))
                }

                function le(t, e, i, s, a, r) {
                    for (var n = 0; n < s; n += 1) {
                        var h = (n + 1) / (s + 1),
                            o = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                            l = e.normalAngle(h);
                        he(t, e.point(h), l, r, i, o / (2 * (s + 1)), o / (2 * (s + 1))), r = -r
                    }
                    return r
                }

                function pe(t, e, i) {
                    var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [se(t, s, i), se(e, s, i)]
                }

                function fe(t, e) {
                    var i, s, a, r, n, h, o;
                    i = (o = pe(t.points[0], t.points[1], e))[0], s = o[1], a = (o = pe(t.points[1], t.points[2], e))[0], r = o[1], n = (o = pe(t.points[2], t.points[3], e))[0], h = o[1];
                    var l = ie(i, s, a, r);
                    null === l && (l = s);
                    var p = ie(n, h, a, r);
                    return null === p && (p = n), new Ut(i, l, p, h)
                }

                function de(t, e, i, s, a) {
                    var r = e.points[3],
                        n = i.points[0];
                    if (3 === s) return r;
                    if (re(r, n)) return r;
                    if (2 === s) {
                        var h = -e.tangentAngle(1),
                            o = -i.tangentAngle(0) + Math.PI,
                            l = ie(r, se(r, h + Math.PI / 2, 100), n, se(n, h + Math.PI / 2, 100)),
                            p = l ? ae(l, r) : ae(r, n) / 2,
                            f = se(r, h, 2 * p * A);
                        return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = se(n, o, 2 * p * A), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                    }
                    var d = ie(re(r, e.points[2]) ? e.points[0] : e.points[2], r, n, re(n, i.points[1]) ? i.points[3] : i.points[1]);
                    return d && ae(d, r) < a ? (t.setTripleAt(d[0], d[1], d[0], d[1], d[0], d[1], t.length()), d) : r
                }

                function me(t, e) {
                    var i = t.intersections(e);
                    return i.length && Xt(i[0][0], 1) && i.shift(), i.length ? i[0] : null
                }

                function ce(t, e) {
                    var i = t.slice(),
                        s = e.slice(),
                        a = me(t[t.length - 1], e[0]);
                    return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], s[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = me(t[0], e[e.length - 1])) ? [
                        [t[0].split(a[0])[0]],
                        [e[e.length - 1].split(a[1])[1]]
                    ] : [i, s]
                }

                function ue(t, e) {
                    var i, s, a, r, n = t.inflectionPoints();
                    if (0 === n.length) return [fe(t, e)];
                    if (1 === n.length || Xt(n[1], 1)) return i = (a = t.split(n[0]))[0], s = a[1], [fe(i, e), fe(s, e)];
                    i = (a = t.split(n[0]))[0];
                    var h = (n[1] - n[0]) / (1 - n[0]);
                    return r = (a = a[1].split(h))[0], s = a[1], [fe(i, e), fe(r, e), fe(s, e)]
                }

                function ge() {}

                function ye(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
                        case "italic":
                            s = "italic";
                            break;
                        case "bold":
                            i = "700";
                            break;
                        case "black":
                            i = "900";
                            break;
                        case "medium":
                            i = "500";
                            break;
                        case "regular":
                        case "normal":
                            i = "400";
                            break;
                        case "light":
                        case "thin":
                            i = "200"
                    }
                    return {
                        style: s,
                        weight: t.fWeight || i
                    }
                }
                h([Nt], jt), jt.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = gt.getProp(t, e.c, 0, null, this), this.o = gt.getProp(t, e.o, 0, null, this), this.tr = qt.getTransformProperty(t, e.tr, this), this.so = gt.getProp(t, e.tr.so, 0, .01, this), this.eo = gt.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Mt, this.rMatrix = new Mt, this.sMatrix = new Mt, this.tMatrix = new Mt, this.matrix = new Mt
                }, jt.prototype.applyTransforms = function(t, e, i, s, a, r) {
                    var n = r ? -1 : 1,
                        h = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
                        o = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                    t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / h : h, r ? 1 / o : o), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                }, jt.prototype.init = function(t, e, i, s) {
                    for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, jt.prototype.resetElements = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, jt.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, jt.prototype.changeGroupRender = function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                }, jt.prototype.processShapes = function(t) {
                    var e, i, s, a, r, n = !1;
                    if (this._mdf || t) {
                        var h, o = Math.ceil(this.c.v);
                        if (this._groups.length < o) {
                            for (; this._groups.length < o;) {
                                var l = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                l.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), n = !0
                        }
                        for (r = 0, s = 0; s <= this._groups.length - 1; s += 1) {
                            if (h = r < o, this._groups[s]._render = h, this.changeGroupRender(this._groups[s].it, h), !h) {
                                var p = this.elemsData[s].it,
                                    f = p[p.length - 1];
                                0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                            }
                            r += 1
                        }
                        this._currentCopies = o;
                        var d = this.o.v,
                            m = d % 1,
                            c = d > 0 ? Math.floor(d) : Math.ceil(d),
                            u = this.pMatrix.props,
                            g = this.rMatrix.props,
                            y = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, b, _ = 0;
                        if (d > 0) {
                            for (; _ < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                            m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, !1), _ += m)
                        } else if (d < 0) {
                            for (; _ > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                            m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, !0), _ -= m)
                        }
                        for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
                            if (b = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== _) {
                                for ((0 !== s && 1 === a || s !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                            _ += 1, r -= 1, s += a
                        }
                    } else
                        for (r = this._currentCopies, s = 0, a = 1; r;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, s += a;
                    return n
                }, jt.prototype.addShape = function() {}, h([Nt], Wt), Wt.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = gt.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, Wt.prototype.processPath = function(t, e) {
                    var i, s = kt.newElement();
                    s.c = t.c;
                    var a, r, n, h, o, l, p, f, d, m, c, u, g = t._length,
                        y = 0;
                    for (i = 0; i < g; i += 1) a = t.v[i], n = t.o[i], r = t.i[i], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== i && i !== g - 1 || t.c ? (h = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = c = a[0] + (h[0] - a[0]) * l, f = u = a[1] - (a[1] - h[1]) * l, d = p - (p - a[0]) * A, m = f - (f - a[1]) * A, s.setTripleAt(p, f, d, m, c, u, y), y += 1, h = i === g - 1 ? t.v[0] : t.v[i + 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = d = a[0] + (h[0] - a[0]) * l, f = m = a[1] + (h[1] - a[1]) * l, c = p - (p - a[0]) * A, u = f - (f - a[1]) * A, s.setTripleAt(p, f, d, m, c, u, y), y += 1) : (s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y), y += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                    return s
                }, Wt.prototype.processShapes = function(t) {
                    var e, i, s, a, r, n, h = this.shapes.length,
                        o = this.rd.v;
                    if (0 !== o)
                        for (i = 0; i < h; i += 1) {
                            if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o));
                            r.shape.paths = r.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, Ut.prototype.point = function(t) {
                    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                }, Ut.prototype.derivative = function(t) {
                    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                }, Ut.prototype.tangentAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[1], e[0])
                }, Ut.prototype.normalAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[0], e[1])
                }, Ut.prototype.inflectionPoints = function() {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (Ht(t)) return [];
                    var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                        i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                    if (i < 0) return [];
                    var s = Math.sqrt(i);
                    return Ht(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter((function(t) {
                        return t > 0 && t < 1
                    }))
                }, Ut.prototype.split = function(t) {
                    if (t <= 0) return [Kt(this.points[0]), this];
                    if (t >= 1) return [this, Kt(this.points[this.points.length - 1])];
                    var e = Gt(this.points[0], this.points[1], t),
                        i = Gt(this.points[1], this.points[2], t),
                        s = Gt(this.points[2], this.points[3], t),
                        a = Gt(e, i, t),
                        r = Gt(i, s, t),
                        n = Gt(a, r, t);
                    return [new Ut(this.points[0], e, a, n, !0), new Ut(n, r, s, this.points[3], !0)]
                }, Ut.prototype.bounds = function() {
                    return {
                        x: Zt(this, 0),
                        y: Zt(this, 1)
                    }
                }, Ut.prototype.boundingBox = function() {
                    var t = this.bounds();
                    return {
                        left: t.x.min,
                        right: t.x.max,
                        top: t.y.min,
                        bottom: t.y.max,
                        width: t.x.max - t.x.min,
                        height: t.y.max - t.y.min,
                        cx: (t.x.max + t.x.min) / 2,
                        cy: (t.y.max + t.y.min) / 2
                    }
                }, Ut.prototype.intersections = function(t, e, i) {
                    void 0 === e && (e = 2), void 0 === i && (i = 7);
                    var s = [];
                    return te(Qt(this, 0, 1), Qt(t, 0, 1), 0, e, s, i), s
                }, Ut.shapeSegment = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new Ut(t.v[e], t.o[e], t.i[i], t.v[i], !0)
                }, Ut.shapeSegmentInverted = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new Ut(t.v[i], t.i[i], t.o[e], t.v[e], !0)
                }, h([Nt], ne), ne.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amplitude = gt.getProp(t, e.s, 0, null, this), this.frequency = gt.getProp(t, e.r, 0, null, this), this.pointsType = gt.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ne.prototype.processPath = function(t, e, i, s) {
                    var a = t._length,
                        r = kt.newElement();
                    if (r.c = t.c, t.c || (a -= 1), 0 === a) return r;
                    var n = -1,
                        h = Ut.shapeSegment(t, 0);
                    oe(r, t, 0, e, i, s, n);
                    for (var o = 0; o < a; o += 1) n = le(r, h, e, i, s, -n), h = o !== a - 1 || t.c ? Ut.shapeSegment(t, (o + 1) % a) : null, oe(r, t, o + 1, e, i, s, n);
                    return r
                }, ne.prototype.processShapes = function(t) {
                    var e, i, s, a, r, n, h = this.shapes.length,
                        o = this.amplitude.v,
                        l = Math.max(0, Math.round(this.frequency.v)),
                        p = this.pointsType.v;
                    if (0 !== o)
                        for (i = 0; i < h; i += 1) {
                            if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o, l, p));
                            r.shape.paths = r.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, h([Nt], ge), ge.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = gt.getProp(t, e.a, 0, null, this), this.miterLimit = gt.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, ge.prototype.processPath = function(t, e, i, s) {
                    var a = kt.newElement();
                    a.c = t.c;
                    var r, n, h, o = t.length();
                    t.c || (o -= 1);
                    var l = [];
                    for (r = 0; r < o; r += 1) h = Ut.shapeSegment(t, r), l.push(ue(h, e));
                    if (!t.c)
                        for (r = o - 1; r >= 0; r -= 1) h = Ut.shapeSegmentInverted(t, r), l.push(ue(h, e));
                    l = function(t) {
                        for (var e, i = 1; i < t.length; i += 1) e = ce(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                        return t.length > 1 && (e = ce(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                    }(l);
                    var p = null,
                        f = null;
                    for (r = 0; r < l.length; r += 1) {
                        var d = l[r];
                        for (f && (p = de(a, f, d[0], i, s)), f = d[d.length - 1], n = 0; n < d.length; n += 1) h = d[n], p && re(h.points[0], p) ? a.setXYAt(h.points[1][0], h.points[1][1], "o", a.length() - 1) : a.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], a.length()), a.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], a.length()), p = h.points[3]
                    }
                    return l.length && de(a, f, l[0][0], i, s), a
                }, ge.prototype.processShapes = function(t) {
                    var e, i, s, a, r, n, h = this.shapes.length,
                        o = this.amount.v,
                        l = this.miterLimit.v,
                        p = this.lineJoin;
                    if (0 !== o)
                        for (i = 0; i < h; i += 1) {
                            if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o, p, l));
                            r.shape.paths = r.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var ve = function() {
                    var t = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        e = [];
                    e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                        s = [65039, 8205];

                    function a(t, e) {
                        var i = n("span");
                        i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                        var s = n("span");
                        s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                        var a = s.offsetWidth;
                        return s.style.fontFamily = function(t) {
                            var e, i = t.split(","),
                                s = i.length,
                                a = [];
                            for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                            return a.join(",")
                        }(t) + ", " + e, {
                            node: s,
                            w: a,
                            parent: i
                        }
                    }

                    function r(t, e) {
                        var i, s = document.body && e ? "svg" : "canvas",
                            a = ye(t);
                        if ("svg" === s) {
                            var r = q("text");
                            r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", a.style), r.setAttribute("font-weight", a.weight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), i = r
                        } else {
                            var n = new OffscreenCanvas(500, 500).getContext("2d");
                            n.font = a.style + " " + a.weight + " 100px " + t.fFamily, i = n
                        }
                        return {
                            measureText: function(t) {
                                return "svg" === s ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                            }
                        }
                    }
                    var h = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    h.isModifier = function(t, e) {
                        var s = t.toString(16) + e.toString(16);
                        return -1 !== i.indexOf(s)
                    }, h.isZeroWidthJoiner = function(t, e) {
                        return e ? t === s[0] && e === s[1] : t === s[1]
                    }, h.isCombinedCharacter = function(t) {
                        return -1 !== e.indexOf(t)
                    };
                    var o = {
                        addChars: function(t) {
                            if (t) {
                                var e;
                                this.chars || (this.chars = []);
                                var i, s, a = t.length,
                                    r = this.chars.length;
                                for (e = 0; e < a; e += 1) {
                                    for (i = 0, s = !1; i < r;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                                    s || (this.chars.push(t[e]), r += 1)
                                }
                            }
                        },
                        addFonts: function(t, e) {
                            if (t) {
                                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                                    t.helper = r(t), t.cache = {}
                                })), void(this.fonts = t.list);
                                var i, s = t.list,
                                    h = s.length,
                                    o = h;
                                for (i = 0; i < h; i += 1) {
                                    var l, p, f = !0;
                                    if (s[i].loaded = !1, s[i].monoCase = a(s[i].fFamily, "monospace"), s[i].sansCase = a(s[i].fFamily, "sans-serif"), s[i].fPath) {
                                        if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                            if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (f = !1), f) {
                                                var d = n("style");
                                                d.setAttribute("f-forigin", s[i].fOrigin), d.setAttribute("f-origin", s[i].origin), d.setAttribute("f-family", s[i].fFamily), d.type = "text/css", d.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(d)
                                            }
                                        } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                            for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p += 1) - 1 !== l[p].href.indexOf(s[i].fPath) && (f = !1);
                                            if (f) {
                                                var m = n("link");
                                                m.setAttribute("f-forigin", s[i].fOrigin), m.setAttribute("f-origin", s[i].origin), m.type = "text/css", m.rel = "stylesheet", m.href = s[i].fPath, document.body.appendChild(m)
                                            }
                                        } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                            for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p += 1) s[i].fPath === l[p].src && (f = !1);
                                            if (f) {
                                                var c = n("link");
                                                c.setAttribute("f-forigin", s[i].fOrigin), c.setAttribute("f-origin", s[i].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", s[i].fPath), e.appendChild(c)
                                            }
                                        }
                                    } else s[i].loaded = !0, o -= 1;
                                    s[i].helper = r(s[i], e), s[i].cache = {}, this.fonts.push(s[i])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            } else this.isLoaded = !0
                        },
                        getCharData: function(e, i, s) {
                            for (var a = 0, r = this.chars.length; a < r;) {
                                if (this.chars[a].ch === e && this.chars[a].style === i && this.chars[a].fFamily === s) return this.chars[a];
                                a += 1
                            }
                            return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, s)), t
                        },
                        getFontByName: function(t) {
                            for (var e = 0, i = this.fonts.length; e < i;) {
                                if (this.fonts[e].fName === t) return this.fonts[e];
                                e += 1
                            }
                            return this.fonts[0]
                        },
                        measureText: function(t, e, i) {
                            var s = this.getFontByName(e),
                                a = t.charCodeAt(0);
                            if (!s.cache[a + 1]) {
                                var r = s.helper;
                                if (" " === t) {
                                    var n = r.measureText("|" + t + "|"),
                                        h = r.measureText("||");
                                    s.cache[a + 1] = (n - h) / 100
                                } else s.cache[a + 1] = r.measureText(t) / 100
                            }
                            return s.cache[a + 1] * i
                        },
                        checkLoadedFonts: function() {
                            var t, e, i, s = this.fonts.length,
                                a = s;
                            for (t = 0; t < s; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                            0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                        },
                        setIsLoaded: function() {
                            this.isLoaded = !0
                        }
                    };
                    return h.prototype = o, h
                }();

                function be(t) {
                    this.animationData = t
                }

                function _e() {}
                be.prototype.getProp = function(t) {
                    return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                }, _e.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var ke, Pe = (ke = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(t) {
                    return ke[t] || ""
                });

                function Ae(t, e, i) {
                    this.p = gt.getProp(e, t.v, 0, 0, i)
                }

                function Se(t, e, i) {
                    this.p = gt.getProp(e, t.v, 0, 0, i)
                }

                function we(t, e, i) {
                    this.p = gt.getProp(e, t.v, 1, 0, i)
                }

                function xe(t, e, i) {
                    this.p = gt.getProp(e, t.v, 1, 0, i)
                }

                function De(t, e, i) {
                    this.p = gt.getProp(e, t.v, 0, 0, i)
                }

                function Ce(t, e, i) {
                    this.p = gt.getProp(e, t.v, 0, 0, i)
                }

                function Me(t, e, i) {
                    this.p = gt.getProp(e, t.v, 0, 0, i)
                }

                function Fe() {
                    this.p = {}
                }

                function Te(t, e) {
                    var i, s = t.ef || [];
                    this.effectElements = [];
                    var a, r = s.length;
                    for (i = 0; i < r; i += 1) a = new Ee(s[i], e), this.effectElements.push(a)
                }

                function Ee(t, e) {
                    this.init(t, e)
                }

                function Ie() {}

                function Le() {}

                function Ve(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                }

                function ze(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                    var s = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? gt.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = gt.getProp(this, t.au && t.au.lv ? t.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function Re() {}

                function Ne() {}

                function Oe(t, e, i) {
                    this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var s, a, n = this.globalData.defs,
                        h = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = p(h), this.solidPath = "";
                    var o, l, f, d, m, c, u = this.masksProperties,
                        g = 0,
                        y = [],
                        v = E(),
                        b = "clipPath",
                        _ = "clip-path";
                    for (s = 0; s < h; s += 1)
                        if (("a" !== u[s].mode && "n" !== u[s].mode || u[s].inv || 100 !== u[s].o.k || u[s].o.x) && (b = "mask", _ = "mask"), "s" !== u[s].mode && "i" !== u[s].mode || 0 !== g ? f = null : ((f = q("rect")).setAttribute("fill", "#ffffff"), f.setAttribute("width", this.element.comp.data.w || 0), f.setAttribute("height", this.element.comp.data.h || 0), y.push(f)), a = q("path"), "n" === u[s].mode) this.viewData[s] = {
                            op: gt.getProp(this.element, u[s].o, 0, .01, this.element),
                            prop: Ct.getShapeProp(this.element, u[s], 3),
                            elem: a,
                            lastPath: ""
                        }, n.appendChild(a);
                        else {
                            var k;
                            if (g += 1, a.setAttribute("fill", "s" === u[s].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== u[s].x.k ? (b = "mask", _ = "mask", c = gt.getProp(this.element, u[s].x, 0, null, this.element), k = E(), (d = q("filter")).setAttribute("id", k), (m = q("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), d.appendChild(m), n.appendChild(d), a.setAttribute("stroke", "s" === u[s].mode ? "#000000" : "#ffffff")) : (m = null, c = null), this.storedData[s] = {
                                    elem: a,
                                    x: c,
                                    expan: m,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: k,
                                    lastRadius: 0
                                }, "i" === u[s].mode) {
                                l = y.length;
                                var P = q("g");
                                for (o = 0; o < l; o += 1) P.appendChild(y[o]);
                                var A = q("mask");
                                A.setAttribute("mask-type", "alpha"), A.setAttribute("id", v + "_" + g), A.appendChild(a), n.appendChild(A), P.setAttribute("mask", "url(" + r() + "#" + v + "_" + g + ")"), y.length = 0, y.push(P)
                            } else y.push(a);
                            u[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                elem: a,
                                lastPath: "",
                                op: gt.getProp(this.element, u[s].o, 0, .01, this.element),
                                prop: Ct.getShapeProp(this.element, u[s], 3),
                                invRect: f
                            }, this.viewData[s].prop.k || this.drawPath(u[s], this.viewData[s].prop.v, this.viewData[s])
                        }
                    for (this.maskElement = q(b), h = y.length, s = 0; s < h; s += 1) this.maskElement.appendChild(y[s]);
                    g > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(_, "url(" + r() + "#" + v + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                h([yt], Ee), Ee.prototype.getValue = Ee.prototype.iterateDynamicProperties, Ee.prototype.init = function(t, e) {
                    var i;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var s, a = this.data.ef.length,
                        r = this.data.ef;
                    for (i = 0; i < a; i += 1) {
                        switch (s = null, r[i].ty) {
                            case 0:
                                s = new Ae(r[i], e, this);
                                break;
                            case 1:
                                s = new Se(r[i], e, this);
                                break;
                            case 2:
                                s = new we(r[i], e, this);
                                break;
                            case 3:
                                s = new xe(r[i], e, this);
                                break;
                            case 4:
                            case 7:
                                s = new Me(r[i], e, this);
                                break;
                            case 10:
                                s = new De(r[i], e, this);
                                break;
                            case 11:
                                s = new Ce(r[i], e, this);
                                break;
                            case 5:
                                s = new Te(r[i], e, this);
                                break;
                            default:
                                s = new Fe(r[i], e, this)
                        }
                        s && this.effectElements.push(s)
                    }
                }, Ie.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var t = null;
                        if (t) {
                            var e = t("layer"),
                                i = t("effects"),
                                s = t("shape"),
                                a = t("text"),
                                r = t("comp");
                            this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var n = i.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = r(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var t = Pe(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, i) {
                        this.globalData = e, this.comp = i, this.data = t, this.layerId = E(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Te(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, Le.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var i, s = this.dynamicProperties.length;
                        for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, Ve.prototype.prepareFrame = function() {}, h([_e, Ie, Le], Ve), Ve.prototype.getBaseElement = function() {
                    return null
                }, Ve.prototype.renderFrame = function() {}, Ve.prototype.destroy = function() {}, Ve.prototype.initExpressions = function() {
                    var t = null;
                    if (t) {
                        var e = t("footage");
                        this.layerInterface = e(this)
                    }
                }, Ve.prototype.getFootageData = function() {
                    return this.footageData
                }, ze.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                    this._volume = this.lv.v[0];
                    var i = this._volume * this._volumeMultiplier;
                    this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
                }, h([_e, Ie, Le], ze), ze.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, ze.prototype.show = function() {}, ze.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, ze.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, ze.prototype.resume = function() {
                    this._canPlay = !0
                }, ze.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, ze.prototype.volume = function(t) {
                    this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                }, ze.prototype.getBaseElement = function() {
                    return null
                }, ze.prototype.destroy = function() {}, ze.prototype.sourceRectAtTime = function() {}, ze.prototype.initExpressions = function() {}, Re.prototype.checkLayers = function(t) {
                    var e, i, s = this.layers.length;
                    for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, Re.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                        default:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t)
                    }
                }, Re.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, Re.prototype.createAudio = function(t) {
                    return new ze(t, this.globalData, this)
                }, Re.prototype.createFootage = function(t) {
                    return new Ve(t, this.globalData, this)
                }, Re.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, Re.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var i, s = t.length,
                        a = this.layers.length;
                    for (e = 0; e < s; e += 1)
                        for (i = 0; i < a;) {
                            if (this.layers[i].id === t[e].id) {
                                this.layers[i] = t[e];
                                break
                            }
                            i += 1
                        }
                }, Re.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, Re.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, Re.prototype.buildElementParenting = function(t, e, i) {
                    for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
                }, Re.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, Re.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var s = this.createComp(t[e]);
                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                        }
                }, Re.prototype.getElementById = function(t) {
                    var e, i = this.elements.length;
                    for (e = 0; e < i; e += 1)
                        if (this.elements[e].data.ind === t) return this.elements[e];
                    return null
                }, Re.prototype.getElementByPath = function(t) {
                    var e, i = t.shift();
                    if ("number" == typeof i) e = this.elements[i];
                    else {
                        var s, a = this.elements.length;
                        for (s = 0; s < a; s += 1)
                            if (this.elements[s].data.nm === i) {
                                e = this.elements[s];
                                break
                            }
                    }
                    return 0 === t.length ? e : e.getElementByPath(t)
                }, Re.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new ve, this.globalData.slotManager = function(t) {
                        return new be(t)
                    }(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, Ne.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? qt.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Mt
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                i = 0,
                                s = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; i < s;) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var i, s = !0, a = this.comp; s;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : s = !1;
                        var r, n = e.length;
                        for (i = 0; i < n; i += 1) r = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                        return t
                    },
                    mHelper: new Mt
                }, Oe.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, Oe.prototype.renderFrame = function(t) {
                    var e, i = this.element.finalTransform.mat,
                        s = this.masksProperties.length;
                    for (e = 0; e < s; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var a = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + r() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, Oe.prototype.getMaskelement = function() {
                    return this.maskElement
                }, Oe.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                }, Oe.prototype.drawPath = function(t, e, i) {
                    var s, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                    if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                        var n = "";
                        i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r
                    }
                }, Oe.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var Be = function() {
                        var t = {
                            createFilter: function(t, e) {
                                var i = q("filter");
                                return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                            },
                            createAlphaToLuminanceFilter: function() {
                                var t = q("feColorMatrix");
                                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                            }
                        };
                        return t
                    }(),
                    qe = function() {
                        var t = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "undefined" != typeof OffscreenCanvas
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                    }(),
                    je = {},
                    We = "filter_result_";

                function Xe(t) {
                    var e, i, s = "SourceGraphic",
                        a = t.data.ef ? t.data.ef.length : 0,
                        n = E(),
                        h = Be.createFilter(n, !0),
                        o = 0;
                    for (this.filters = [], e = 0; e < a; e += 1) {
                        i = null;
                        var l = t.data.ef[e].ty;
                        je[l] && (i = new(0, je[l].effect)(h, t.effectsManager.effectElements[e], t, We + o, s), s = We + o, je[l].countsAsEffect && (o += 1)), i && this.filters.push(i)
                    }
                    o && (t.globalData.defs.appendChild(h), t.layerElement.setAttribute("filter", "url(" + r() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function He() {}

                function Ye() {}

                function Ge() {}

                function Je(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function Ke(t, e) {
                    this.elem = t, this.pos = e
                }

                function Ue() {}
                Xe.prototype.renderFrame = function(t) {
                    var e, i = this.filters.length;
                    for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                }, He.prototype = {
                    initRendererElement: function() {
                        this.layerElement = q("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = q("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            var e = q("g");
                            e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var i = q("clipPath"),
                                s = q("path");
                            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var a = E();
                            if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                var n = q("g");
                                n.setAttribute("clip-path", "url(" + r() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + r() + "#" + a + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new Oe(this.data, this, this.globalData), this.renderableEffectsManager = new Xe(this)
                    },
                    getMatte: function(t) {
                        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                            var e, i, s, a, n = this.layerId + "_" + t;
                            if (1 === t || 3 === t) {
                                var h = q("mask");
                                h.setAttribute("id", n), h.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(s), this.globalData.defs.appendChild(h), qe.maskType || 1 !== t || (h.setAttribute("mask-type", "luminance"), e = E(), i = Be.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(Be.createAlphaToLuminanceFilter()), (a = q("g")).appendChild(s), h.appendChild(a), a.setAttribute("filter", "url(" + r() + "#" + e + ")"))
                            } else if (2 === t) {
                                var o = q("mask");
                                o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                                var l = q("g");
                                o.appendChild(l), e = E(), i = Be.createFilter(e);
                                var p = q("feComponentTransfer");
                                p.setAttribute("in", "SourceGraphic"), i.appendChild(p);
                                var f = q("feFuncA");
                                f.setAttribute("type", "table"), f.setAttribute("tableValues", "1.0 0.0"), p.appendChild(f), this.globalData.defs.appendChild(i);
                                var d = q("rect");
                                d.setAttribute("width", this.comp.data.w), d.setAttribute("height", this.comp.data.h), d.setAttribute("x", "0"), d.setAttribute("y", "0"), d.setAttribute("fill", "#ffffff"), d.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + r() + "#" + e + ")"), l.appendChild(d), (s = q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(s), qe.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(Be.createAlphaToLuminanceFilter()), a = q("g"), l.appendChild(d), a.appendChild(this.layerElement), l.appendChild(a)), this.globalData.defs.appendChild(o)
                            }
                            this.matteMasks[t] = n
                        }
                        return this.matteMasks[t]
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + r() + "#" + t + ")")
                    }
                }, Ye.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, h([_e, function(t) {
                    function e() {}
                    return e.prototype = t, e
                }({
                    initElement: function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], Ge), h([Ie, Ne, He, Ye, Le, Ge], Je), Je.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = q("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, Je.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, Ue.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, i = this.shapeModifiers.length;
                        for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = this.shapeModifiers.length; 0 < e;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                            if (e[i].elem === t) return e[i].pos;
                            i += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var i = this.processedElements, s = i.length; s;)
                            if (i[s -= 1].elem === t) return void(i[s].pos = e);
                        i.push(new Ke(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                };
                var Ze = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    Qe = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function $e(t, e, i) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                    for (var s = 0, a = t.length; s < a;) {
                        if (t[s].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        s += 1
                    }
                }

                function ti(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = q("path"), this.msElem = null
                }

                function ei(t, e, i, s) {
                    var a;
                    this.elem = t, this.frameId = -1, this.dataProps = p(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = l("float32", e.length ? e.length - 1 : 0), this.dashoffset = l("float32", 1), this.initDynamicPropertyContainer(s);
                    var r, n = e.length || 0;
                    for (a = 0; a < n; a += 1) r = gt.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                        n: e[a].n,
                        p: r
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function ii(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = gt.getProp(t, e.o, 0, .01, this), this.w = gt.getProp(t, e.w, 0, null, this), this.d = new ei(t, e.d || {}, "svg", this), this.c = gt.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                }

                function si(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = gt.getProp(t, e.o, 0, .01, this), this.c = gt.getProp(t, e.c, 1, 255, this), this.style = i
                }

                function ai(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
                }

                function ri(t, e, i) {
                    this.data = e, this.c = l("uint8c", 4 * e.p);
                    var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = l("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = gt.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function ni(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                }

                function hi(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = gt.getProp(t, e.w, 0, null, this), this.d = new ei(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                }

                function oi() {
                    this.it = [], this.prevViewData = [], this.gr = q("g")
                }

                function li(t, e, i) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: i
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                $e.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, ti.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, ei.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            i = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, h([yt], ei), h([yt], ii), h([yt], si), h([yt], ai), ri.prototype.comparePoints = function(t, e) {
                    for (var i = 0, s = this.o.length / 2; i < s;) {
                        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                        i += 1
                    }
                    return !0
                }, ri.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, ri.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, i, s, a = 4 * this.data.p;
                        for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                        if (this.o.length)
                            for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                        this._mdf = !t
                    }
                }, h([yt], ri), ni.prototype.initGradientData = function(t, e, i) {
                    this.o = gt.getProp(t, e.o, 0, .01, this), this.s = gt.getProp(t, e.s, 1, null, this), this.e = gt.getProp(t, e.e, 1, null, this), this.h = gt.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = gt.getProp(t, e.a || {
                        k: 0
                    }, 0, P, this), this.g = new ri(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                }, ni.prototype.setGradientData = function(t, e) {
                    var i = E(),
                        s = q(1 === e.t ? "linearGradient" : "radialGradient");
                    s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                    var a, n, h, o = [];
                    for (h = 4 * e.g.p, n = 0; n < h; n += 4) a = q("stop"), s.appendChild(a), o.push(a);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + r() + "#" + i + ")"), this.gf = s, this.cst = o
                }, ni.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var i, s, a, n = q("mask"),
                            h = q("path");
                        n.appendChild(h);
                        var o = E(),
                            l = E();
                        n.setAttribute("id", l);
                        var p = q(1 === t.t ? "linearGradient" : "radialGradient");
                        p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var f = this.stops;
                        for (s = 4 * t.g.p; s < a; s += 2)(i = q("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(i), f.push(i);
                        h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + r() + "#" + o + ")"), "gs" === t.ty && (h.setAttribute("stroke-linecap", Ze[t.lc || 2]), h.setAttribute("stroke-linejoin", Qe[t.lj || 2]), 1 === t.lj && h.setAttribute("stroke-miterlimit", t.ml)), this.of = p, this.ms = n, this.ost = f, this.maskId = l, e.msElem = h
                    }
                }, h([yt], ni), h([ni, yt], hi);
                var pi = function(t, e, i, s) {
                        if (0 === e) return "";
                        var a, r = t.o,
                            n = t.i,
                            h = t.v,
                            o = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                        for (a = 1; a < e; a += 1) o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(h[a][0], h[a][1]);
                        return i && e && (o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]), o += "z"), o
                    },
                    fi = function() {
                        var t = new Mt,
                            e = new Mt;

                        function i(t, e, i) {
                            (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function s() {}

                        function a(i, s, a) {
                            var r, n, h, o, l, p, f, d, m, c, u, g = s.styles.length,
                                y = s.lvl;
                            for (p = 0; p < g; p += 1) {
                                if (o = s.sh._mdf || a, s.styles[p].lvl < y) {
                                    for (d = e.reset(), c = y - s.styles[p].lvl, u = s.transformers.length - 1; !o && c > 0;) o = s.transformers[u].mProps._mdf || o, c -= 1, u -= 1;
                                    if (o)
                                        for (c = y - s.styles[p].lvl, u = s.transformers.length - 1; c > 0;) m = s.transformers[u].mProps.v.props, d.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), c -= 1, u -= 1
                                } else d = t;
                                if (n = (f = s.sh.paths)._length, o) {
                                    for (h = "", r = 0; r < n; r += 1)(l = f.shapes[r]) && l._length && (h += pi(l, l._length, l.c, d));
                                    s.caches[p] = h
                                } else h = s.caches[p];
                                s.styles[p].d += !0 === i.hd ? "" : h, s.styles[p]._mdf = o || s.styles[p]._mdf
                            }
                        }

                        function r(t, e, i) {
                            var s = e.style;
                            (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + v(e.c.v[0]) + "," + v(e.c.v[1]) + "," + v(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function n(t, e, i) {
                            h(t, e, i), o(0, e, i)
                        }

                        function h(t, e, i) {
                            var s, a, r, n, h, o = e.gf,
                                l = e.g._hasOpacity,
                                p = e.s.v,
                                f = e.e.v;
                            if (e.o._mdf || i) {
                                var d = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(d, e.o.v)
                            }
                            if (e.s._mdf || i) {
                                var m = 1 === t.t ? "x1" : "cx",
                                    c = "x1" === m ? "y1" : "cy";
                                o.setAttribute(m, p[0]), o.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(c, p[1]))
                            }
                            if (e.g._cmdf || i) {
                                s = e.cst;
                                var u = e.g.c;
                                for (r = s.length, a = 0; a < r; a += 1)(n = s[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                            }
                            if (l && (e.g._omdf || i)) {
                                var g = e.g.o;
                                for (r = (s = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = s[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
                            }
                            if (1 === t.t)(e.e._mdf || i) && (o.setAttribute("x2", f[0]), o.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                            else if ((e.s._mdf || e.e._mdf || i) && (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), o.setAttribute("r", h), l && !e.g._collapsable && e.of.setAttribute("r", h)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                h || (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                    v = e.h.v;
                                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                var b = h * v,
                                    _ = Math.cos(y + e.a.v) * b + p[0],
                                    k = Math.sin(y + e.a.v) * b + p[1];
                                o.setAttribute("fx", _), o.setAttribute("fy", k), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", k))
                            }
                        }

                        function o(t, e, i) {
                            var s = e.style,
                                a = e.d;
                            a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + v(e.c.v[0]) + "," + v(e.c.v[1]) + "," + v(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return {
                            createRenderFunction: function(t) {
                                switch (t.ty) {
                                    case "fl":
                                        return r;
                                    case "gf":
                                        return h;
                                    case "gs":
                                        return n;
                                    case "st":
                                        return o;
                                    case "sh":
                                    case "el":
                                    case "rc":
                                    case "sr":
                                        return a;
                                    case "tr":
                                        return i;
                                    case "no":
                                        return s;
                                    default:
                                        return null
                                }
                            }
                        }
                    }();

                function di(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                }

                function mi(t, e, i, s, a, r) {
                    this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = r, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!i,
                        fc: !!s,
                        m: !0,
                        p: !0
                    }
                }

                function ci(t, e) {
                    this._frameId = a, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                h([Ie, Ne, He, Ue, Ye, Le, Ge], di), di.prototype.initSecondaryElement = function() {}, di.prototype.identityMatrix = new Mt, di.prototype.buildExpressionInterface = function() {}, di.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, di.prototype.filterUniqueShapes = function() {
                    var t, e, i, s, a = this.shapes.length,
                        r = this.stylesList.length,
                        n = [],
                        h = !1;
                    for (i = 0; i < r; i += 1) {
                        for (s = this.stylesList[i], h = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), h = e._isAnimated || h);
                        n.length > 1 && h && this.setShapesAsAnimated(n)
                    }
                }, di.prototype.setShapesAsAnimated = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                }, di.prototype.createStyleElement = function(t, e) {
                    var i, s = new ti(t, e),
                        a = s.pElem;
                    return "st" === t.ty ? i = new ii(this, t, s) : "fl" === t.ty ? i = new si(this, t, s) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? ni : hi)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + r() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new ai(this, t, s)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", Ze[t.lc || 2]), a.setAttribute("stroke-linejoin", Qe[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = Pe(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
                }, di.prototype.createGroupElement = function(t) {
                    var e = new oi;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = Pe(t.bm)), e
                }, di.prototype.createTransformElement = function(t, e) {
                    var i = qt.getTransformProperty(this, t, this),
                        s = new li(i, i.o, e);
                    return this.addToAnimatedContents(t, s), s
                }, di.prototype.createShapeElement = function(t, e, i) {
                    var s = 4;
                    "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                    var a = new $e(e, i, Ct.getShapeProp(this, t, s, this));
                    return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                }, di.prototype.addToAnimatedContents = function(t, e) {
                    for (var i = 0, s = this.animatedContents.length; i < s;) {
                        if (this.animatedContents[i].element === e) return;
                        i += 1
                    }
                    this.animatedContents.push({
                        fn: fi.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, di.prototype.setElementStyles = function(t) {
                    var e, i = t.styles,
                        s = this.stylesList.length;
                    for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                }, di.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, di.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                    var h, o, l, p, f, d, m = [].concat(r),
                        c = t.length - 1,
                        u = [],
                        g = [];
                    for (h = c; h >= 0; h -= 1) {
                        if ((d = this.searchProcessedElement(t[h])) ? e[h] = i[d - 1] : t[h]._render = n, "fl" === t[h].ty || "st" === t[h].ty || "gf" === t[h].ty || "gs" === t[h].ty || "no" === t[h].ty) d ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a), t[h]._render && e[h].style.pElem.parentNode !== s && s.appendChild(e[h].style.pElem), u.push(e[h].style);
                        else if ("gr" === t[h].ty) {
                            if (d)
                                for (l = e[h].it.length, o = 0; o < l; o += 1) e[h].prevViewData[o] = e[h].it[o];
                            else e[h] = this.createGroupElement(t[h]);
                            this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, m, n), t[h]._render && e[h].gr.parentNode !== s && s.appendChild(e[h].gr)
                        } else "tr" === t[h].ty ? (d || (e[h] = this.createTransformElement(t[h], s)), p = e[h].transform, m.push(p)) : "sh" === t[h].ty || "rc" === t[h].ty || "el" === t[h].ty || "sr" === t[h].ty ? (d || (e[h] = this.createShapeElement(t[h], m, a)), this.setElementStyles(e[h])) : "tm" === t[h].ty || "rd" === t[h].ty || "ms" === t[h].ty || "pb" === t[h].ty || "zz" === t[h].ty || "op" === t[h].ty ? (d ? (f = e[h]).closed = !1 : ((f = Rt.getModifier(t[h].ty)).init(this, t[h]), e[h] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[h].ty && (d ? (f = e[h]).closed = !0 : (f = Rt.getModifier(t[h].ty), e[h] = f, f.init(this, t, h, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                        this.addProcessedElement(t[h], h + 1)
                    }
                    for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
                    for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0
                }, di.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, di.prototype.renderShape = function() {
                    var t, e, i = this.animatedContents.length;
                    for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, di.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, mi.prototype.update = function(t, e, i, s, a, r) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var n = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !r.length || this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13] || (this.p = r, this._mdf.p = !0, n = !0), n
                }, ci.prototype.defaultBoxWidth = [0, 0], ci.prototype.copyData = function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, ci.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, ci.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, ci.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, ci.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, ci.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            i = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var s;
                            this.lock = !0, this._mdf = !1;
                            var a = this.effectsSequence.length,
                                r = t || this.data.d.k[this.keysIndex].s;
                            for (s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                            e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, ci.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                }, ci.prototype.buildFinalText = function(t) {
                    for (var e, i, s = [], a = 0, r = t.length, n = !1; a < r;) e = t.charCodeAt(a), ve.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 ? (n || ve.isModifier(e, i) ? (s[s.length - 1] += t.substr(a, 2), n = !1) : s.push(t.substr(a, 2)), a += 1) : s.push(t.charAt(a)) : e > 56319 ? (i = t.charCodeAt(a + 1), ve.isZeroWidthJoiner(e, i) ? (n = !0, s[s.length - 1] += t.substr(a, 2), a += 1) : s.push(t.charAt(a))) : ve.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(a), n = !0) : s.push(t.charAt(a)), a += 1;
                    return s
                }, ci.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, i, s, a, r, n, h, o = this.elem.globalData.fontManager,
                        l = this.data,
                        p = [],
                        f = 0,
                        d = l.m.g,
                        m = 0,
                        c = 0,
                        u = 0,
                        g = [],
                        y = 0,
                        v = 0,
                        b = o.getFontByName(t.f),
                        _ = 0,
                        k = ye(b);
                    t.fWeight = k.weight, t.fStyle = k.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                    var P, A = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var S, w, x = !0, D = t.sz[0], C = t.sz[1]; x;) {
                            S = 0, y = 0, i = (w = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
                            var M = -1;
                            for (e = 0; e < i; e += 1) P = w[e].charCodeAt(0), s = !1, " " === w[e] ? M = e : 13 !== P && 3 !== P || (y = 0, s = !0, S += t.finalLineHeight || 1.2 * t.finalSize), o.chars ? (h = o.getCharData(w[e], b.fStyle, b.fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(w[e], t.f, t.finalSize), y + _ > D && " " !== w[e] ? (-1 === M ? i += 1 : e = M, S += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, M === e ? 1 : 0, "\r"), M = -1, y = 0) : (y += _, y += A);
                            S += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && C < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, i = t.finalText.length, x = !1)
                        }
                    y = -A, _ = 0;
                    var F, T = 0;
                    for (e = 0; e < i; e += 1)
                        if (s = !1, 13 === (P = (F = t.finalText[e]).charCodeAt(0)) || 3 === P ? (T = 0, g.push(y), v = y > v ? y : v, y = -2 * A, a = "", s = !0, u += 1) : a = F, o.chars ? (h = o.getCharData(F, b.fStyle, o.getFontByName(t.f).fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(a, t.f, t.finalSize), " " === F ? T += _ + A : (y += _ + A + T, T = 0), p.push({
                                l: _,
                                an: _,
                                add: m,
                                n: s,
                                anIndexes: [],
                                val: a,
                                line: u,
                                animatorJustifyOffset: 0
                            }), 2 == d) {
                            if (m += _, "" === a || " " === a || e === i - 1) {
                                for ("" !== a && " " !== a || (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                                f += 1, m = 0
                            }
                        } else if (3 == d) {
                        if (m += _, "" === a || e === i - 1) {
                            for ("" === a && (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                            m = 0, f += 1
                        }
                    } else p[f].ind = f, p[f].extra = 0, f += 1;
                    if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = g;
                    var E, I, L, V, z = l.a;
                    n = z.length;
                    var R = [];
                    for (r = 0; r < n; r += 1) {
                        for ((E = z[r]).a.sc && (t.strokeColorAnim = !0), E.a.sw && (t.strokeWidthAnim = !0), (E.a.fc || E.a.fh || E.a.fs || E.a.fb) && (t.fillColorAnim = !0), V = 0, L = E.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[r] = V, (1 == L && "" !== I.val || 2 == L && "" !== I.val && " " !== I.val || 3 == L && (I.n || " " == I.val || e == i - 1) || 4 == L && (I.n || e == i - 1)) && (1 === E.s.rn && R.push(V), V += 1);
                        l.a[r].s.totalChars = V;
                        var N, O = -1;
                        if (1 === E.s.rn)
                            for (e = 0; e < i; e += 1) O != (I = p[e]).anIndexes[r] && (O = I.anIndexes[r], N = R.splice(Math.floor(Math.random() * R.length), 1)[0]), I.anIndexes[r] = N
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                }, ci.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var i = this.copyData({}, this.data.d.k[e].s);
                    i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
                }, ci.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, ci.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, ci.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var ui = function() {
                    var t = Math.max,
                        e = Math.min,
                        i = Math.floor;

                    function s(t, e) {
                        this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = gt.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in e ? gt.getProp(t, e.e, 0, 0, this) : {
                            v: 100
                        }, this.o = gt.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this), this.xe = gt.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = gt.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = gt.getProp(t, e.sm || {
                            k: 100
                        }, 0, 0, this), this.a = gt.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return s.prototype = {
                        getMult: function(s) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var a = 0,
                                r = 0,
                                n = 1,
                                h = 1;
                            this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : h = 1 + this.xe.v / 100;
                            var o = Q.getBezierEasing(a, r, n, h).get,
                                l = 0,
                                p = this.finalS,
                                f = this.finalE,
                                d = this.data.sh;
                            if (2 === d) l = o(l = f === p ? s >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                            else if (3 === d) l = o(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                            else if (4 === d) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (s - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = o(l);
                            else if (5 === d) {
                                if (f === p) l = 0;
                                else {
                                    var m = f - p,
                                        c = -m / 2 + (s = e(t(0, s + .5 - p), f - p)),
                                        u = m / 2;
                                    l = Math.sqrt(1 - c * c / (u * u))
                                }
                                l = o(l)
                            } else 6 === d ? (f === p ? l = 0 : (s = e(t(0, s + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (f - p))) / 2), l = o(l)) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1))), l = o(l));
                            if (100 !== this.sm.v) {
                                var g = .01 * this.sm.v;
                                0 === g && (g = 1e-8);
                                var y = .5 - .5 * g;
                                l < y ? l = 0 : (l = (l - y) / g) > 1 && (l = 1)
                            }
                            return l * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                i = this.o.v / e,
                                s = this.s.v / e + i,
                                a = this.e.v / e + i;
                            if (s > a) {
                                var r = s;
                                s = a, a = r
                            }
                            this.finalS = s, this.finalE = a
                        }
                    }, h([yt], s), {
                        getTextSelectorProp: function(t, e, i) {
                            return new s(t, e, i)
                        }
                    }
                }();

                function gi(t, e, i) {
                    var s = {
                            propType: !1
                        },
                        a = gt.getProp,
                        r = e.a;
                    this.a = {
                        r: r.r ? a(t, r.r, 0, P, i) : s,
                        rx: r.rx ? a(t, r.rx, 0, P, i) : s,
                        ry: r.ry ? a(t, r.ry, 0, P, i) : s,
                        sk: r.sk ? a(t, r.sk, 0, P, i) : s,
                        sa: r.sa ? a(t, r.sa, 0, P, i) : s,
                        s: r.s ? a(t, r.s, 1, .01, i) : s,
                        a: r.a ? a(t, r.a, 1, 0, i) : s,
                        o: r.o ? a(t, r.o, 0, .01, i) : s,
                        p: r.p ? a(t, r.p, 1, 0, i) : s,
                        sw: r.sw ? a(t, r.sw, 0, 0, i) : s,
                        sc: r.sc ? a(t, r.sc, 1, 0, i) : s,
                        fc: r.fc ? a(t, r.fc, 1, 0, i) : s,
                        fh: r.fh ? a(t, r.fh, 0, 0, i) : s,
                        fs: r.fs ? a(t, r.fs, 0, .01, i) : s,
                        fb: r.fb ? a(t, r.fb, 0, .01, i) : s,
                        t: r.t ? a(t, r.t, 0, 0, i) : s
                    }, this.s = ui.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                }

                function yi(t, e, i) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = p(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                }

                function vi() {}
                yi.prototype.searchProperties = function() {
                    var t, e, i = this._textData.a.length,
                        s = gt.getProp;
                    for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new gi(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: s(this._elem, this._textData.p.a, 0, 0, this),
                        f: s(this._elem, this._textData.p.f, 0, 0, this),
                        l: s(this._elem, this._textData.p.l, 0, 0, this),
                        r: s(this._elem, this._textData.p.r, 0, 0, this),
                        p: s(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                }, yi.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var i, s, a, r, n, h, o, l, p, f, d, m, c, u, g, y, v, b, _, k = this._moreOptions.alignment.v,
                            P = this._animatorsData,
                            A = this._textData,
                            S = this.mHelper,
                            w = this._renderType,
                            x = this.renderedLetters.length,
                            D = t.l;
                        if (this._hasMaskedPath) {
                            if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var C, M = _.v;
                                for (this._pathData.r.v && (M = M.reverse()), n = {
                                        tLength: 0,
                                        segments: []
                                    }, r = M._length - 1, y = 0, a = 0; a < r; a += 1) C = st.buildBezierData(M.v[a], M.v[a + 1], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[a + 1][0] - M.v[a + 1][0], M.i[a + 1][1] - M.v[a + 1][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength;
                                a = r, _.v.c && (C = st.buildBezierData(M.v[a], M.v[0], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength), this._pathData.pi = n
                            }
                            if (n = this._pathData.pi, h = this._pathData.f.v, d = 0, f = 1, l = 0, p = !0, u = n.segments, h < 0 && _.v.c)
                                for (n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength), f = (c = u[d = u.length - 1].points).length - 1; h < 0;) h += c[f].partialLength, (f -= 1) < 0 && (f = (c = u[d -= 1].points).length - 1);
                            m = (c = u[d].points)[f - 1], g = (o = c[f]).partialLength
                        }
                        r = D.length, i = 0, s = 0;
                        var F, T, E, I, L, N = 1.2 * t.finalSize * .714,
                            O = !0;
                        E = P.length;
                        var B, q, j, W, X, H, Y, G, J, K, U, Z, Q = -1,
                            $ = h,
                            tt = d,
                            et = f,
                            it = -1,
                            at = "",
                            rt = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var nt = 0,
                                ht = 0,
                                ot = 2 === t.j ? -.5 : -1,
                                lt = 0,
                                pt = !0;
                            for (a = 0; a < r; a += 1)
                                if (D[a].n) {
                                    for (nt && (nt += ht); lt < a;) D[lt].animatorJustifyOffset = nt, lt += 1;
                                    nt = 0, pt = !0
                                } else {
                                    for (T = 0; T < E; T += 1)(F = P[T].a).t.propType && (pt && 2 === t.j && (ht += F.t.v * ot), (L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars)).length ? nt += F.t.v * L[0] * ot : nt += F.t.v * L * ot);
                                    pt = !1
                                }
                            for (nt && (nt += ht); lt < a;) D[lt].animatorJustifyOffset = nt, lt += 1
                        }
                        for (a = 0; a < r; a += 1) {
                            if (S.reset(), W = 1, D[a].n) i = 0, s += t.yOffset, s += O ? 1 : 0, h = $, O = !1, this._hasMaskedPath && (f = et, m = (c = u[d = tt].points)[f - 1], g = (o = c[f]).partialLength, l = 0), at = "", U = "", J = "", Z = "", rt = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (it !== D[a].line) {
                                        switch (t.j) {
                                            case 1:
                                                h += y - t.lineWidths[D[a].line];
                                                break;
                                            case 2:
                                                h += (y - t.lineWidths[D[a].line]) / 2
                                        }
                                        it = D[a].line
                                    }
                                    Q !== D[a].ind && (D[Q] && (h += D[Q].extra), h += D[a].an / 2, Q = D[a].ind), h += k[0] * D[a].an * .005;
                                    var ft = 0;
                                    for (T = 0; T < E; T += 1)(F = P[T].a).p.propType && ((L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars)).length ? ft += F.p.v[0] * L[0] : ft += F.p.v[0] * L), F.a.propType && ((L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars)).length ? ft += F.a.v[0] * L[0] : ft += F.a.v[0] * L);
                                    for (p = !0, this._pathData.a.v && (h = .5 * D[0].an + (y - this._pathData.f.v - .5 * D[0].an - .5 * D[D.length - 1].an) * Q / (r - 1), h += this._pathData.f.v); p;) l + g >= h + ft || !c ? (v = (h + ft - l) / o.partialLength, q = m.point[0] + (o.point[0] - m.point[0]) * v, j = m.point[1] + (o.point[1] - m.point[1]) * v, S.translate(-k[0] * D[a].an * .005, -k[1] * N * .01), p = !1) : c && (l += o.partialLength, (f += 1) >= c.length && (f = 0, u[d += 1] ? c = u[d].points : _.v.c ? (f = 0, c = u[d = 0].points) : (l -= o.partialLength, c = null)), c && (m = o, g = (o = c[f]).partialLength));
                                    B = D[a].an / 2 - D[a].add, S.translate(-B, 0, 0)
                                } else B = D[a].an / 2 - D[a].add, S.translate(-B, 0, 0), S.translate(-k[0] * D[a].an * .005, -k[1] * N * .01, 0);
                                for (T = 0; T < E; T += 1)(F = P[T].a).t.propType && (L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? h += F.t.v * L[0] : h += F.t.v * L : L.length ? i += F.t.v * L[0] : i += F.t.v * L));
                                for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (X = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]), T = 0; T < E; T += 1)(F = P[T].a).a.propType && ((L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars)).length ? S.translate(-F.a.v[0] * L[0], -F.a.v[1] * L[1], F.a.v[2] * L[2]) : S.translate(-F.a.v[0] * L, -F.a.v[1] * L, F.a.v[2] * L));
                                for (T = 0; T < E; T += 1)(F = P[T].a).s.propType && ((L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars)).length ? S.scale(1 + (F.s.v[0] - 1) * L[0], 1 + (F.s.v[1] - 1) * L[1], 1) : S.scale(1 + (F.s.v[0] - 1) * L, 1 + (F.s.v[1] - 1) * L, 1));
                                for (T = 0; T < E; T += 1) {
                                    if (F = P[T].a, L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars), F.sk.propType && (L.length ? S.skewFromAxis(-F.sk.v * L[0], F.sa.v * L[1]) : S.skewFromAxis(-F.sk.v * L, F.sa.v * L)), F.r.propType && (L.length ? S.rotateZ(-F.r.v * L[2]) : S.rotateZ(-F.r.v * L)), F.ry.propType && (L.length ? S.rotateY(F.ry.v * L[1]) : S.rotateY(F.ry.v * L)), F.rx.propType && (L.length ? S.rotateX(F.rx.v * L[0]) : S.rotateX(F.rx.v * L)), F.o.propType && (L.length ? W += (F.o.v * L[0] - W) * L[0] : W += (F.o.v * L - W) * L), t.strokeWidthAnim && F.sw.propType && (L.length ? H += F.sw.v * L[0] : H += F.sw.v * L), t.strokeColorAnim && F.sc.propType)
                                        for (G = 0; G < 3; G += 1) L.length ? X[G] += (F.sc.v[G] - X[G]) * L[0] : X[G] += (F.sc.v[G] - X[G]) * L;
                                    if (t.fillColorAnim && t.fc) {
                                        if (F.fc.propType)
                                            for (G = 0; G < 3; G += 1) L.length ? Y[G] += (F.fc.v[G] - Y[G]) * L[0] : Y[G] += (F.fc.v[G] - Y[G]) * L;
                                        F.fh.propType && (Y = L.length ? R(Y, F.fh.v * L[0]) : R(Y, F.fh.v * L)), F.fs.propType && (Y = L.length ? V(Y, F.fs.v * L[0]) : V(Y, F.fs.v * L)), F.fb.propType && (Y = L.length ? z(Y, F.fb.v * L[0]) : z(Y, F.fb.v * L))
                                    }
                                }
                                for (T = 0; T < E; T += 1)(F = P[T].a).p.propType && (L = P[T].s.getMult(D[a].anIndexes[T], A.a[T].s.totalChars), this._hasMaskedPath ? L.length ? S.translate(0, F.p.v[1] * L[0], -F.p.v[2] * L[1]) : S.translate(0, F.p.v[1] * L, -F.p.v[2] * L) : L.length ? S.translate(F.p.v[0] * L[0], F.p.v[1] * L[1], -F.p.v[2] * L[2]) : S.translate(F.p.v[0] * L, F.p.v[1] * L, -F.p.v[2] * L));
                                if (t.strokeWidthAnim && (J = H < 0 ? 0 : H), t.strokeColorAnim && (K = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * Y[0]) + "," + Math.round(255 * Y[1]) + "," + Math.round(255 * Y[2]) + ")"), this._hasMaskedPath) {
                                    if (S.translate(0, -t.ls), S.translate(0, k[1] * N * .01 + s, 0), this._pathData.p.v) {
                                        b = (o.point[1] - m.point[1]) / (o.point[0] - m.point[0]);
                                        var dt = 180 * Math.atan(b) / Math.PI;
                                        o.point[0] < m.point[0] && (dt += 180), S.rotate(-dt * Math.PI / 180)
                                    }
                                    S.translate(q, j, 0), h -= k[0] * D[a].an * .005, D[a + 1] && Q !== D[a + 1].ind && (h += D[a].an / 2, h += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (S.translate(i, s, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            S.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]), 0, 0);
                                            break;
                                        case 2:
                                            S.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]) / 2, 0, 0)
                                    }
                                    S.translate(0, -t.ls), S.translate(B, 0, 0), S.translate(k[0] * D[a].an * .005, k[1] * N * .01, 0), i += D[a].l + .001 * t.tr * t.finalSize
                                }
                                "html" === w ? at = S.toCSS() : "svg" === w ? at = S.to2dCSS() : rt = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], Z = W
                            }
                            x <= a ? (I = new mi(Z, J, K, U, at, rt), this.renderedLetters.push(I), x += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(Z, J, K, U, at, rt) || this.lettersChangedFlag)
                        }
                    }
                }, yi.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, yi.prototype.mHelper = new Mt, yi.prototype.defaultPropsArray = [], h([yt], yi), vi.prototype.initElement = function(t, e, i) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new ci(this, t.t, this.dynamicProperties), this.textAnimator = new yi(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, vi.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, vi.prototype.createPathShape = function(t, e) {
                    var i, s, a = e.length,
                        r = "";
                    for (i = 0; i < a; i += 1) "sh" === e[i].ty && (s = e[i].ks.k, r += pi(s, s.i.length, !0, t));
                    return r
                }, vi.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, vi.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, vi.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, vi.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                    }
                    e.translate(s, a, 0)
                }, vi.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, vi.prototype.emptyProp = new mi, vi.prototype.destroy = function() {};
                var bi, _i = {
                    shapes: []
                };

                function ki(t, e, i) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                }

                function Pi(t, e, i) {
                    this.initElement(t, e, i)
                }

                function Ai(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                }

                function Si() {}

                function wi() {}

                function xi(t, e, i) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? p(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? gt.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function Di(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = q("svg");
                    var i = "";
                    if (e && e.title) {
                        var s = q("title"),
                            a = E();
                        s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a
                    }
                    if (e && e.description) {
                        var r = q("desc"),
                            n = E();
                        r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + n
                    }
                    i && this.svgElement.setAttribute("aria-labelledby", i);
                    var h = q("defs");
                    this.svgElement.appendChild(h);
                    var o = q("g");
                    this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: h,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }
                return h([Ie, Ne, He, Ye, Le, Ge, vi], ki), ki.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = q("text"))
                }, ki.prototype.buildTextContents = function(t) {
                    for (var e = 0, i = t.length, s = [], a = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(a), a = "") : a += t[e], e += 1;
                    return s.push(a), s
                }, ki.prototype.buildShapeData = function(t, e) {
                    if (t.shapes && t.shapes.length) {
                        var i = t.shapes[0];
                        if (i.it) {
                            var s = i.it[i.it.length - 1];
                            s.s && (s.s.k[0] = e, s.s.k[1] = e)
                        }
                    }
                    return t
                }, ki.prototype.buildNewText = function() {
                    var t, e;
                    this.addDynamicProperty(this);
                    var i = this.textProperty.currentData;
                    this.renderedLetters = p(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                    var s = this.globalData.fontManager.getFontByName(i.f);
                    if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", s.fFamily);
                        var a = i.fWeight,
                            r = i.fStyle;
                        this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
                    }
                    this.layerElement.setAttribute("aria-label", i.t);
                    var n, h = i.l || [],
                        o = !!this.globalData.fontManager.chars;
                    e = h.length;
                    var l = this.mHelper,
                        f = this.data.singleShape,
                        d = 0,
                        m = 0,
                        c = !0,
                        u = .001 * i.tr * i.finalSize;
                    if (!f || o || i.sz) {
                        var g, y = this.textSpans.length;
                        for (t = 0; t < e; t += 1) {
                            if (this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !o || !f || 0 === t) {
                                if (n = y > t ? this.textSpans[t].span : q(o ? "g" : "text"), y <= t) {
                                    if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, o) {
                                        var v = q("g");
                                        n.appendChild(v), this.textSpans[t].childSpan = v
                                    }
                                    this.textSpans[t].span = n, this.layerElement.appendChild(n)
                                }
                                n.style.display = "inherit"
                            }
                            if (l.reset(), f && (h[t].n && (d = -u, m += i.yOffset, m += c ? 1 : 0, c = !1), this.applyTextPropertiesToMatrix(i, l, h[t].line, d, m), d += h[t].l || 0, d += u), o) {
                                var b;
                                if (1 === (g = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) b = new xi(g.data, this.globalData, this);
                                else {
                                    var _ = _i;
                                    g.data && g.data.shapes && (_ = this.buildShapeData(g.data, i.finalSize)), b = new di(_, this.globalData, this)
                                }
                                if (this.textSpans[t].glyph) {
                                    var k = this.textSpans[t].glyph;
                                    this.textSpans[t].childSpan.removeChild(k.layerElement), k.destroy()
                                }
                                this.textSpans[t].glyph = b, b._debug = !0, b.prepareFrame(0), b.renderFrame(), this.textSpans[t].childSpan.appendChild(b.layerElement), 1 === g.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                            } else f && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = h[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        f && n && n.setAttribute("d", "")
                    } else {
                        var P = this.textContainer,
                            A = "start";
                        switch (i.j) {
                            case 1:
                                A = "end";
                                break;
                            case 2:
                                A = "middle";
                                break;
                            default:
                                A = "start"
                        }
                        P.setAttribute("text-anchor", A), P.setAttribute("letter-spacing", u);
                        var S = this.buildTextContents(i.finalText);
                        for (e = S.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || q("tspan")).textContent = S[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[t].span = n, m += i.finalLineHeight;
                        this.layerElement.appendChild(P)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, ki.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, ki.prototype.getValue = function() {
                    var t, e, i = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                }, ki.prototype.renderInnerContent = function() {
                    if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var i, s, a, r = this.textAnimator.renderedLetters,
                            n = this.textProperty.currentData.l;
                        for (e = n.length, t = 0; t < e; t += 1) n[t].n || (i = r[t], s = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
                    }
                }, h([Je], Pi), Pi.prototype.createContent = function() {
                    var t = q("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, Ai.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, Ai.prototype.renderFrame = function() {}, Ai.prototype.getBaseElement = function() {
                    return null
                }, Ai.prototype.destroy = function() {}, Ai.prototype.sourceRectAtTime = function() {}, Ai.prototype.hide = function() {}, h([Ie, Ne, Ye, Le], Ai), h([Re], Si), Si.prototype.createNull = function(t) {
                    return new Ai(t, this.globalData, this)
                }, Si.prototype.createShape = function(t) {
                    return new di(t, this.globalData, this)
                }, Si.prototype.createText = function(t) {
                    return new ki(t, this.globalData, this)
                }, Si.prototype.createImage = function(t) {
                    return new Je(t, this.globalData, this)
                }, Si.prototype.createSolid = function(t) {
                    return new Pi(t, this.globalData, this)
                }, Si.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var i = q("clipPath"),
                        s = q("rect");
                    s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                    var a = E();
                    i.setAttribute("id", a), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + r() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = p(t.layers.length)
                }, Si.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, Si.prototype.updateContainerSize = function() {}, Si.prototype.findIndexByInd = function(t) {
                    var e = 0,
                        i = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        if (this.layers[e].ind === t) return e;
                    return -1
                }, Si.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var i = this.createItem(this.layers[t]);
                        if (e[t] = i, N() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                            var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === s) return;
                            if (this.elements[s] && !0 !== this.elements[s]) {
                                var a = e[s].getMatte(this.layers[t].tt);
                                i.setMatte(a)
                            } else this.buildItem(s), this.addPendingElement(i)
                        }
                    }
                }, Si.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, i = this.elements.length; e < i;) {
                                if (this.elements[e] === t) {
                                    var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                        a = this.elements[s].getMatte(this.layers[e].tt);
                                    t.setMatte(a);
                                    break
                                }
                                e += 1
                            }
                    }
                }, Si.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, Si.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        for (var s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), a += 1;
                        s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                    }
                }, Si.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, Si.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, h([Ie, Ne, Ye, Le, Ge], wi), wi.prototype.initElement = function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, wi.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var i, s = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                    }
                }, wi.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, wi.prototype.setElements = function(t) {
                    this.elements = t
                }, wi.prototype.getElements = function() {
                    return this.elements
                }, wi.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, wi.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, h([Si, wi, He], xi), xi.prototype.createComp = function(t) {
                    return new xi(t, this.globalData, this)
                }, h([Si], Di), Di.prototype.createComp = function(t) {
                    return new xi(t, this.globalData, this)
                }, bi = Di, J.svg = bi, Rt.registerModifier("tm", Ot), Rt.registerModifier("pb", Bt), Rt.registerModifier("rp", jt), Rt.registerModifier("rd", Wt), Rt.registerModifier("zz", ne), Rt.registerModifier("op", ge), Tt
            }())
        }
    }
]);