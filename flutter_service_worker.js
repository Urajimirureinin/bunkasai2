'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "a4e1fe5d1af71f1ec5e619023adf9ff8",
"index.html": "156f79424a540e119ceb60a2d740a69a",
"/": "156f79424a540e119ceb60a2d740a69a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "de1db5921cc627ad50bfcf0ecfd74aca",
"version.json": "162a02033ecc4546f6042ce486cee8b0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "eca56fb8636cdcba885d84166b98c4ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/images/32.png": "e4d59193e87f0a627656a732593b6dc6",
"assets/images/3.png": "7327c4344c32fc636a7782c4b67688e3",
"assets/images/54.png": "aac5d9eea6861d517ab4db5bfdcd3671",
"assets/images/5.png": "5127fd1cb8e7a61b3210ff26a3af0ee6",
"assets/images/10.png": "f6c3dbf191627d933240f298c39f11ce",
"assets/images/19.png": "95d334aa9f54e30979c96083bbfa4651",
"assets/images/47.png": "50481dd78f0685780aa4fbe256c72fa9",
"assets/images/52.png": "fa2117fcf86a5517ee292f0eb8c3220f",
"assets/images/53.png": "295f762770073e40991c53f087d3b7b3",
"assets/images/31.png": "d6e42e2389edb6c2e3bec173974a568f",
"assets/images/8.png": "bebf05b5b4228d0665633e15e0ccf89a",
"assets/images/37.png": "4b7c16acfa35ffd4231e42a38e395306",
"assets/images/34.png": "8949d9a2b941805f0adf08c6b5b448f3",
"assets/images/49.png": "99b984d30439b4c30e0561f2fe37a65b",
"assets/images/43.png": "18c95fc597fc8c136c4fa33157946234",
"assets/images/35.png": "f1ff89e6b93ad0449432aac9f08acd0d",
"assets/images/41.png": "f9ef6abda2a2af726a3c83514cc7ac1d",
"assets/images/28.png": "5084727f69e9580f12aad747ddba0241",
"assets/images/40.png": "60376aba0f8ceb284c054bf2ec3aba35",
"assets/images/22.png": "246d28569bb06b0d80d11444081c6369",
"assets/images/4.png": "1715178b0f017d554ed7ad85a2cb6af0",
"assets/images/36.png": "8091d7740b5e0595fbeb0d42ff83b8c3",
"assets/images/6.png": "8d59a6484d22d036fd07af5009a022c2",
"assets/images/24.png": "2eda2179fa5f28687d971b779af6bd34",
"assets/images/11.png": "1d0866fa5754f05ee7bb135fbc347457",
"assets/images/50.png": "eed8c10d1b0b91c43d9e27b33a1f0330",
"assets/images/27.png": "fb0ccc3c66d7ee743bd09d5cccf7f866",
"assets/images/1.png": "35e08347b878365733d5b36724865431",
"assets/images/30.png": "b578a62097114753d78f24a62550e568",
"assets/images/46.png": "239cf81bdcd6b40e7a03f7dddf6c1adf",
"assets/images/9.png": "edef695a7ff2cae7030a83825d97e3b0",
"assets/images/2.png": "cc0f79bab82bf262fdd5094a0ce09076",
"assets/images/29.png": "d38972962834c5c47b9b8825ee52125a",
"assets/images/18.png": "82400df2822afcdedd8b6d9455902fcc",
"assets/images/48.png": "99b984d30439b4c30e0561f2fe37a65b",
"assets/images/12.png": "4c879a35aa0cc64c077c1b92fc883b93",
"assets/images/14.png": "aedf46faf6255745bed3a76776e22e07",
"assets/images/20.png": "37166ad19de67305d8c28425892ce22a",
"assets/images/25.png": "5a57e592f604622e9f0cf05417a176e7",
"assets/images/26.png": "f3fcfb9b46575c2cdbde79b9d688a588",
"assets/images/21.png": "14a84b7a8f0f25a90b4bdee683b6ddeb",
"assets/images/42.png": "565bd7f2d55a0dee17c089f27785d65e",
"assets/images/7.png": "83589a17a289a37f40aa051455c959db",
"assets/images/17.png": "f0f44a4841bf2a3b31fa4e0f19d795d5",
"assets/images/51.png": "95142a2d88126913c1de343e0c64ef24",
"assets/images/38.png": "e63ee3185c4036fe81f23f15e379d0cd",
"assets/images/39.png": "402e47f85adc29bbfcc30e7cfa60579f",
"assets/images/45.png": "61f0d516533490e64947f177f62b6016",
"assets/images/44.png": "4451a2517a26be35cc8313e73c3244a3",
"assets/images/33.png": "82f082c5cea50adfb723130d5caa9fd9",
"assets/images/13.png": "a786ff5ea46696989f864e0bac9dba11",
"assets/images/23.png": "65e61a667b5faa1c3d8fd0f59a0de901",
"assets/images/15.png": "9641462dd42558d02219b18a8704937d",
"assets/images/16.png": "7019b999f6e320c3d546f1a0f14cfe6d",
"assets/AssetManifest.bin.json": "20f4bbac47164569022683fa584c6711",
"assets/AssetManifest.bin": "2ab59d8c7c1ad41025c7dee5ab587ee8",
"flutter_bootstrap.js": "226cdc9b8c840cd3d3f210bed3daa84c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
