self.addEventListener("fetch", e => {
    // TODO(renspoesse): as part of https://duolingo.atlassian.net/browse/DEL-1779 we need
    //  a service worker with a fetch handler to meet the minimum PWA criteria. We should
    //  probably also use that handler to serve an offline page, if that gives a better
    //  user experience. This is tracked by https://duolingo.atlassian.net/browse/DLAW-3938.
});