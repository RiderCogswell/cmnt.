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
]
