if (!self.define) {
    let s, n = {};
    const i = (i, l) => (i = new URL(i + ".js","https://cdn.jsdelivr.net/gh/genizy/mc@b86773493d99fade697d7a75f260383def0b692f/data/1.21.4/").href,
    n[i] || new Promise((n => {
        if ("document"in self) {
            const s = document.createElement("script");
            s.src = i,
            s.crossOrigin = "anonymous",
            s.onload = n,
            document.head.appendChild(s)
        } else {
            fetch(i, { mode: 'cors', credentials: 'omit' }).then(res => res.text())
            .then(text => {
              const blob = new Blob([text], { type: 'application/javascript' });
              const url = URL.createObjectURL(blob);
              s = url;
              importScripts(url);
              n();
            })
            .catch(err => {
              console.error('Failed to load module:', i, err);
            });          
        }
    }
    )).then(( () => {
        let s = n[i];
        if (!s)
            throw new Error(`Module ${i} didn’t register its module`);
        return s
    }
    )));
    self.define = (l, e) => {
        const r = s || ("document"in self ? document.currentScript.src : "") || location.href;
        if (n[r])
            return;
        let t = {};
        const u = s => i(s, r)
          , a = {
            module: {
                uri: r
            },
            exports: t,
            require: u
        };
        n[r] = Promise.all(l.map((s => a[s] || u(s)))).then((s => (e(...s),
        t)))
    }
}
define(["./workbox-099bf95e"], (function(s) {
    "use strict";
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute([{
        url: "./index.html",
        revision: "2b0f510de57365af9e07c1224c26df9e"
    }, {
        url: "./background/panorama_5.png",
        revision: null
    }, {
        url: "./background/panorama_4.png",
        revision: null
    }, {
        url: "./background/panorama_3.png",
        revision: null
    }, {
        url: "./background/panorama_2.png",
        revision: null
    }, {
        url: "./background/panorama_1.png",
        revision: null
    }, {
        url: "./background/panorama_0.png",
        revision: null
    }, {
        url: "./favicon.png",
        revision: null
    }, {
        url: "./mesher.js",
        revision: "289b5feaa6846218725fcfb9517d2b4a"
    }, {
        url: "./manifest.json",
        revision: null
    }, {
        url: "./textures/entity/squid/squid.png",
        revision: null
    }, {
        url: "./sounds.js",
        revision: null
    }, {
        url: "./static/js/lib-react.46180ea1.js.LICENSE.txt",
        revision: null
    }, {
        url: "./static/js/lib-react.46180ea1.js",
        revision: null
    }, {
        url: "./static/js/lib-polyfill.a8e86b9b.js",
        revision: null
    }, {
        url: "./static/js/index.9c3002b0.js",
        revision: null
    }, {
        url: "./static/js/669.06cfda27.js.LICENSE.txt",
        revision: null
    }, {
        url: "./static/js/669.06cfda27.js",
        revision: null
    }, {
        url: "./static/js/async/978.93f3a6c1.js",
        revision: null
    }, {
        url: "./static/js/async/85.70334fe4.js",
        revision: null
    }, {
        url: "./static/js/async/709.4b72af91.js",
        revision: null
    }, {
        url: "./static/js/async/158.6830a120.js",
        revision: null
    }, {
        url: "./static/image/itemsAtlasLatest.272c38c2.png",
        revision: null
    }, {
        url: "./static/image/isles.91ea480d.png",
        revision: null
    }, {
        url: "./static/image/blocksAtlasLegacy.5c76823d.png",
        revision: null
    }, {
        url: "./static/image/blocksAtlasLatest.600e3ac0.png",
        revision: null
    }, {
        url: "./static/css/index.95c205e1.css",
        revision: null
    }, {
        url: "./static/css/669.11f84d4a.css",
        revision: null
    }], {})
}
));
//# sourceMappingURL=service-worker.js.map
