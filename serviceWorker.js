const cacheBuilder = {
  version: "version 1.0.0",
  assets: [
    "index.html",
    "event.html",
    "contact.html",
    "about.html",
    "./Resources",
    "config.js",
    "logo.png",
  ],
};
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheBuilder.version)
      .then((cache) => {
        cache.addAll(cacheBuilder.assets).catch((er) => console.log(er));
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((version) => {
      return Promise.all(
        version.map((cache) => {
          if (cache !== cacheBuilder.version) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
