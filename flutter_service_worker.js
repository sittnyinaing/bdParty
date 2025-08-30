'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da112cb97fc3229a763e8cbb72dc2f18",
"assets/AssetManifest.bin.json": "c623ddff43319585038523d4b67b5abe",
"assets/AssetManifest.json": "15f21978b7978b4c44b29a076bde0e43",
"assets/assets/1s64exwAD8.json": "a9ae47d847a7c6b55641cd58def40b2c",
"assets/assets/animation/bdcake.json": "a870f736732b91530f38b476bfbb51fd",
"assets/assets/animation/bd_cake.json": "a9ae47d847a7c6b55641cd58def40b2c",
"assets/assets/profile/bubu.jpg": "c74a3a30b1004444d3e9367a1b913f19",
"assets/assets/profile/bubu0.jpg": "6f56020904a2c532e3fed7524920cd31",
"assets/assets/profile/bubu00.jpg": "1195158407565b7e4c8841e0b6f09e17",
"assets/assets/profile/bubu1.jpg": "646981158e43d4d45387c57671d66bb4",
"assets/assets/profile/bubu2.jpg": "49ff8171fbe27f962da31e9c05f7f0c5",
"assets/assets/profile/dudu1.jpg": "8f240e40366be245e1dd66aa4a3ef8a4",
"assets/assets/profile/dudu2.jpg": "0046937ed9f231cd96f5ac260eacbebb",
"assets/assets/profile/dudu3.jpg": "dee25d97ce4a8a13449f15cbe79feb6b",
"assets/assets/profile/dudu4.jpg": "8ac76610a98cc2c9803c9e72841933c2",
"assets/assets/profile/female_profile1.png": "076ee05e793bab75ebe28d2e1751e80d",
"assets/assets/profile/female_profile2.png": "311c6b62f7b8c34a29450e4181b8a1b6",
"assets/assets/profile/female_profile3.png": "9d9deeca66a05bfc518761236acb10c2",
"assets/assets/profile/hbd_mp.ogg": "03d108822ed471280e6e981eb464099f",
"assets/assets/profile/koko.png": "763804af363338cccab31484d521467d",
"assets/assets/profile/koko_dad.png": "0b0d475cd215a15aa69d1da4305c3a57",
"assets/assets/profile/koko_nyi.png": "27ad8325046086abb124b175266d0c40",
"assets/assets/profile/plp.png": "b2b2ee884f9085f78bda47b8acd12f88",
"assets/assets/profile/thelthel_dad.png": "1c5df932195d8d8857311b55fffd4093",
"assets/assets/test.json": "b87ce0240f37691240c4548ad3fe8ca9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "11c1c6867516d18a500ac5fd40d4297a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "058f52d2abcf2bbb0931d313bad7dcbf",
"canvaskit/canvaskit.wasm": "dc7b8282640d82094e68366e9943f221",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "2a8d882fef194e39e7328b1f7a1e1233",
"canvaskit/chromium/canvaskit.wasm": "76ae9f5fcb88580645f492fa03adaae9",
"canvaskit/skwasm.js": "bb7f9a4f8e1315e306e274ee39c92280",
"canvaskit/skwasm.js.symbols": "7613e204387e08b5220567c9b810b164",
"canvaskit/skwasm.wasm": "938d077e899a56a3ddd8e9a4be5e3ea5",
"canvaskit/skwasm_heavy.js": "ff62b0ccde0d87bb610723a5276bfcfc",
"canvaskit/skwasm_heavy.js.symbols": "1a9ad6d477ea21d47338a3473640155f",
"canvaskit/skwasm_heavy.wasm": "f0815c12f204f8a8b97a2fa3defb4f21",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"flutter_bootstrap.js": "73aa955f1a49121b41fbc73d855374d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "053427fa0719643f3d083152b9e16b11",
"/": "053427fa0719643f3d083152b9e16b11",
"main.dart.js": "b3e802a2ff9af1969e87e4581e0550de",
"main.dart.mjs": "5fa7c7049563a549838064cf774af820",
"main.dart.wasm": "1001fe2467441f525ee8dad3304b46ef",
"manifest.json": "14cb3c3b9dab78692b6fb508b88864a1",
"version.json": "ed2ca6968bdae2aabb850d27e040eb74"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
