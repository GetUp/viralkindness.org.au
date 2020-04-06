import Head from 'next/head'

export default () => {
  return (
    <Head>
      <meta charset='utf-8' />
      <link rel='icon' href='https://viralkindness.org.au/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <meta
        name='description'
        content='#ViralKindness is a hub for the community care groups springing up across the country to support people in self-isolation during the coronavirus (COVID-19) crisis.'
      />
      <meta
        property='og:description'
        content='#ViralKindness is a hub for the community care groups springing up across the country to support people in self-isolation during the coronavirus (COVID-19) crisis.'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://viralkindness.org.au/share-graphic.png'
      />
      <meta property='og:url' content='https://viralkindness.org.au/' />
      <meta property='fb:app_id' content='138155566223' />
      <link
        rel='apple-touch-icon'
        href='https://viralkindness.org.au/logo192.png'
      />

      <meta
        property='og:title'
        content='#ViralKindness – We’re all in this together'
      />
      <title>#ViralKindness – We’re all in this together</title>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>

      {/* <script dangerouslySetInnerHTML={{ __html: `
        if (!/^localhost/.test(window.location.host)) {
          var _rollbarConfig = {
            accessToken: "75a5142100e74178819eb4eef7b55c16",
            captureUncaught: true,
            captureUnhandledRejections: true,
            payload: {
              environment: "production"
            }
          };
          // Rollbar Snippet
          !function (r) { function e(n) { if (o[n]) return o[n].exports; var t = o[n] = { exports: {}, id: n, loaded: !1 }; return r[n].call(t.exports, t, t.exports, e), t.loaded = !0, t.exports } var o = {}; return e.m = r, e.c = o, e.p = "", e(0) }([function (r, e, o) { "use strict"; var n = o(1), t = o(4); _rollbarConfig = _rollbarConfig || {}, _rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.4.6/rollbar.min.js", _rollbarConfig.async = void 0 === _rollbarConfig.async || _rollbarConfig.async; var a = n.setupShim(window, _rollbarConfig), l = t(_rollbarConfig); window.rollbar = n.Rollbar, a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, l) }, function (r, e, o) { "use strict"; function n(r) { return function () { try { return r.apply(this, arguments) } catch (r) { try { console.error("[Rollbar]: Internal error", r) } catch (r) { } } } } function t(r, e) { this.options = r, this._rollbarOldOnError = null; var o = s++; this.shimId = function () { return o }, "undefined" != typeof window && window._rollbarShims && (window._rollbarShims[o] = { handler: e, messages: [] }) } function a(r, e) { if (r) { var o = e.globalAlias || "Rollbar"; if ("object" == typeof r[o]) return r[o]; r._rollbarShims = {}, r._rollbarWrappedError = null; var t = new p(e); return n(function () { e.captureUncaught && (t._rollbarOldOnError = r.onerror, i.captureUncaughtExceptions(r, t, !0), i.wrapGlobals(r, t, !0)), e.captureUnhandledRejections && i.captureUnhandledRejections(r, t, !0); var n = e.autoInstrument; return e.enabled !== !1 && (void 0 === n || n === !0 || "object" == typeof n && n.network) && r.addEventListener && (r.addEventListener("load", t.captureLoad.bind(t)), r.addEventListener("DOMContentLoaded", t.captureDomContentLoaded.bind(t))), r[o] = t, t })() } } function l(r) { return n(function () { var e = this, o = Array.prototype.slice.call(arguments, 0), n = { shim: e, method: r, args: o, ts: new Date }; window._rollbarShims[this.shimId()].messages.push(n) }) } var i = o(2), s = 0, d = o(3), c = function (r, e) { return new t(r, e) }, p = d.bind(null, c); t.prototype.loadFull = function (r, e, o, t, a) { var l = function () { var e; if (void 0 === r._rollbarDidLoad) { e = new Error("rollbar.js did not load"); for (var o, n, t, l, i = 0; o = r._rollbarShims[i++];)for (o = o.messages || []; n = o.shift();)for (t = n.args || [], i = 0; i < t.length; ++i)if (l = t[i], "function" == typeof l) { l(e); break } } "function" == typeof a && a(e) }, i = !1, s = e.createElement("script"), d = e.getElementsByTagName("script")[0], c = d.parentNode; s.crossOrigin = "", s.src = t.rollbarJsUrl, o || (s.async = !0), s.onload = s.onreadystatechange = n(function () { if (!(i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) { s.onload = s.onreadystatechange = null; try { c.removeChild(s) } catch (r) { } i = !0, l() } }), c.insertBefore(s, d) }, t.prototype.wrap = function (r, e, o) { try { var n; if (n = "function" == typeof e ? e : function () { return e || {} }, "function" != typeof r) return r; if (r._isWrap) return r; if (!r._rollbar_wrapped && (r._rollbar_wrapped = function () { o && "function" == typeof o && o.apply(this, arguments); try { return r.apply(this, arguments) } catch (o) { var e = o; throw e && ("string" == typeof e && (e = new String(e)), e._rollbarContext = n() || {}, e._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError = e), e } }, r._rollbar_wrapped._isWrap = !0, r.hasOwnProperty)) for (var t in r) r.hasOwnProperty(t) && (r._rollbar_wrapped[t] = r[t]); return r._rollbar_wrapped } catch (e) { return r } }; for (var u = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(","), f = 0; f < u.length; ++f)t.prototype[u[f]] = l(u[f]); r.exports = { setupShim: a, Rollbar: p } }, function (r, e) { "use strict"; function o(r, e, o) { if (r) { var t; "function" == typeof e._rollbarOldOnError ? t = e._rollbarOldOnError : r.onerror && !r.onerror.belongsToShim && (t = r.onerror, e._rollbarOldOnError = t); var a = function () { var o = Array.prototype.slice.call(arguments, 0); n(r, e, t, o) }; a.belongsToShim = o, r.onerror = a } } function n(r, e, o, n) { r._rollbarWrappedError && (n[4] || (n[4] = r._rollbarWrappedError), n[5] || (n[5] = r._rollbarWrappedError._rollbarContext), r._rollbarWrappedError = null), e.handleUncaughtException.apply(e, n), o && o.apply(r, n) } function t(r, e, o) { if (r) { "function" == typeof r._rollbarURH && r._rollbarURH.belongsToShim && r.removeEventListener("unhandledrejection", r._rollbarURH); var n = function (r) { var o, n, t; try { o = r.reason } catch (r) { o = void 0 } try { n = r.promise } catch (r) { n = "[unhandledrejection] error getting `promise` from event" } try { t = r.detail, !o && t && (o = t.reason, n = t.promise) } catch (r) { t = "[unhandledrejection] error getting `detail` from event" } o || (o = "[unhandledrejection] error getting `reason` from event"), e && e.handleUnhandledRejection && e.handleUnhandledRejection(o, n) }; n.belongsToShim = o, r._rollbarURH = n, r.addEventListener("unhandledrejection", n) } } function a(r, e, o) { if (r) { var n, t, a = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","); for (n = 0; n < a.length; ++n)t = a[n], r[t] && r[t].prototype && l(e, r[t].prototype, o) } } function l(r, e, o) { if (e.hasOwnProperty && e.hasOwnProperty("addEventListener")) { for (var n = e.addEventListener; n._rollbarOldAdd && n.belongsToShim;)n = n._rollbarOldAdd; var t = function (e, o, t) { n.call(this, e, r.wrap(o), t) }; t._rollbarOldAdd = n, t.belongsToShim = o, e.addEventListener = t; for (var a = e.removeEventListener; a._rollbarOldRemove && a.belongsToShim;)a = a._rollbarOldRemove; var l = function (r, e, o) { a.call(this, r, e && e._rollbar_wrapped || e, o) }; l._rollbarOldRemove = a, l.belongsToShim = o, e.removeEventListener = l } } r.exports = { captureUncaughtExceptions: o, captureUnhandledRejections: t, wrapGlobals: a } }, function (r, e) { "use strict"; function o(r, e) { this.impl = r(e, this), this.options = e, n(o.prototype) } function n(r) { for (var e = function (r) { return function () { var e = Array.prototype.slice.call(arguments, 0); if (this.impl[r]) return this.impl[r].apply(this.impl, e) } }, o = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(","), n = 0; n < o.length; n++)r[o[n]] = e(o[n]) } o.prototype._swapAndProcessMessages = function (r, e) { this.impl = r(this.options); for (var o, n, t; o = e.shift();)n = o.method, t = o.args, this[n] && "function" == typeof this[n] && ("captureDomContentLoaded" === n || "captureLoad" === n ? this[n].apply(this, [t[0], o.ts]) : this[n].apply(this, t)); return this }, r.exports = o }, function (r, e) { "use strict"; r.exports = function (r) { return function (e) { if (!e && !window._rollbarInitialized) { r = r || {}; for (var o, n, t = r.globalAlias || "Rollbar", a = window.rollbar, l = function (r) { return new a(r) }, i = 0; o = window._rollbarShims[i++];)n || (n = o.handler), o.handler._swapAndProcessMessages(l, o.messages); window[t] = n, window._rollbarInitialized = !0 } } } }]);
          // End Rollbar Snippet `}} /> */}

      {/* <!-- Facebook Pixel Code -->
  <script>
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1500849123463803');
    fbq('track', 'PageView');
  </script> */}
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1500849123463803&ev=PageView&noscript=1'
        />
      </noscript>
    </Head>
  )
}
