"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [4463], {
        51695: () => {
            const e = [];
            e.push(["CSS Container Query Units", () => CSS.supports("(width: 1cqw)")]), e.push(["CSS Large/Small/Dynamic Viewport Units", () => CSS.supports("(width: 1lvh)") && CSS.supports("(width: 1svh)") && CSS.supports("(width: 1dvh)")]), e.push(["CSS property: aspect-ratio", () => CSS.supports("(aspect-ratio: 16 / 9)")]), e.push(["PushManager", () => "PushManager" in window]), e.push(["ServiceWorker", () => "serviceWorker" in navigator]), e.push(["ServiceWorkerRegistration.showNotification", () => "showNotification" in window.ServiceWorkerRegistration.prototype]), e.push(["SpeechRecognition", () => "SpeechRecognition" in window]), e.push(["webkitSpeechRecognition", () => "webkitSpeechRecognition" in window]), e.push(["regexpLookbehind", () => new Function("return /(?<=\\d{4}-)\\d{2}/u.exec('2020-01-01')[0] === '01'")()]), e.push(["BigInt", () => "BigInt" in window && new Function("return typeof 123n === 'bigint'")()]), e.push(["nullishCoalescing", () => {
                const e = new Function("return (a, b) => a ?? b")();
                return 0 === e(0, 1) && 1 === e(null, 1) && 1 === e(void 0, 1)
            }]), e.push(["optionalChaining", () => {
                const e = new Function("return (a) => a?.b")();
                return 1 === e({
                    b: 1
                }) && void 0 === e({})
            }]), e.push(["dynamicImport", () => new Function("return import('data:text/javascript;base64,Cg==') instanceof Promise")()]), e.push(["stringMatchAll", () => "matchAll" in String.prototype]), e.push(["promiseAllSettled", () => "allSettled" in Promise]), e.push(["numericSeparators", () => new Function("return 1_000_000 === 1000000")()]), e.push(["promiseAny", () => "any" in Promise]), e.push(["logicalAssignmentOperators", () => {
                const e = new Function("return (a, b) => { a ??= b; return a; }")();
                return 0 === e(0, 10) && 10 === e(null, 10) && 10 === e(void 0, 10)
            }]), e.push(["stringReplaceAll", () => "replaceAll" in String.prototype]), e.push(["privateClassFields", () => 1 === new Function("return new class { #a = 1; getA() { return this.#a; } }")().getA()]), e.push(["weakRefAndRegistry", () => "function" == typeof WeakRef && "function" == typeof FinalizationRegistry]), e.push(["weakRefOfSymbol", () => {
                try {
                    return new WeakRef(Symbol()), !0
                } catch {
                    return !1
                }
            }]), e.push(["cssLayers", () => void 0 !== window.CSSLayerBlockRule]), e.push(["subgrid", () => CSS.supports("grid-template-rows: subgrid")]), e.push(["AbortSignal.reason", () => {
                const e = new AbortController;
                return e.abort(), e.signal.reason instanceof DOMException
            }]), e.push(["AbortSignal.throwIfAborted", () => "function" == typeof(new AbortController).signal.throwIfAborted]), e.push(["CompressionStream", () => "CompressionStream" in window]), e.push(["CSS pseudo class: :has()", () => CSS.supports("selector(:has(+ *))")]), window.duo.supportedFeatures = e.map((([e, n]) => {
                try {
                    return n() ? e : `no-${e}`
                } catch (n) {
                    return console.error(n), `no-${e}`
                }
            }));
            const n = [];
            n.push(["ES2018", ["regexpLookbehind"]]), n.push(["ES2020", ["BigInt", "nullishCoalescing", "optionalChaining", "dynamicImport", "stringMatchAll", "promiseAllSettled", "logicalAssignmentOperators"]]), n.push(["ES2021", ["numericSeparators", "promiseAny", "stringReplaceAll"]]), window.duo.supportedFeatures.push(...n.map((([e, n]) => n.every((e => window.duo.supportedFeatures.includes(e))) ? e : `no-${e}`)))
        }
    },
    e => {
        e(e.s = 51695)
    }
]);