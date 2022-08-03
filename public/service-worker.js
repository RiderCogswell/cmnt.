const APP_PREFIX = 'cmnt';
const VERSION = 'v1';
const CACHE_NAME = APP_PREFIX + VERSION;
const DATA_CACHE_NAME = 'data-cache-' + VERSION;

const FILES_TO_CACHE = [
  '/',
  './css/style.css',
  './views/layouts/main.handlebars',
  './views/dashboard.handlebars',
  './views/homepage.handlebars',
  './views/login.handlebars',
  './views/signup.handlebars',
  './js/comment.js',
  './js/delete-topic.js',
  './js/edit-topic.js',
  './js/login.js',
  './js/logout.js',
  './js/next-topic.js',
  './js/post.js',
  './js/prev-topic.js',
  './js/signup.js',
  './js/upvote.js',
  './manifest.json'
];

// cache resources
self.addEventListener('install', function(e) {
  // perform SW installation
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('installing cache : ' + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE)
    })
  );
});

// respond with cached resources
self.addEventListener('fetch', function(e) {
  // cache all get requests to /api routes
  if (e.request.url.includes('/api/')) {
    e.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(e.request)
          .then(response => {
            // if response good clone and store in cache
            if (response.status === 200) {
              cache.put(e.request.url, response.clone());
            }
            
            return response;
          })
          .catch(err => {
            return cache.match(e.request) // network request fails, get from cache
          })
      }).catch(err => console.log(err))
    );

    return;
  }

  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request).then(function(response) {
        if (response) {
          return response;
        } else if (e.request.headers.get('accept').includes('text/html')) {
          // return cached home page for all requests for html pages
          return caches.match('/')
        }
      })
    })
  )
});

// delete old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      let cacheKeepList = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      })
      cacheKeepList.push(CACHE_NAME);

      return Promise.all(keyList.map(function (key, i) {
        if (cacheKeepList.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i]);
        }
      }))
    })
  )
})