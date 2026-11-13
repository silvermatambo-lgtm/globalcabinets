/* Ultra Max 7 Pro Premium — change CACHE_VERSION when deploying a new client version.
   Same-origin static assets are cached; enquiries and external sites are NOT cached. */
const CACHE_VERSION = 'globalcabinets-v2';
const APP_CACHE = `${CACHE_VERSION}-static`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const ASSETS = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/faq',
  '/contact',
  '/privacy',
  '/offline',
  '/styles.css',
  '/premium.css',
  '/cabinetry.css',
  '/site-config.js',
  '/script.js',
  '/premium.js',
  '/chatbot.js',
  '/pwa.js',
  '/manifest.webmanifest',
  '/assets/brand-artwork.webp',
  '/assets/cabinet-mark.png',
  '/assets/company-poster.webp',
  '/assets/icon-180.png',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/assets/icon-maskable.png',
  '/assets/kitchen-grey.webp',
  '/assets/kitchen-install.webp',
  '/assets/kitchen-navy.webp',
  '/assets/kitchen-sink.webp',
  '/assets/kitchen-warm-mobile.webp',
  '/assets/kitchen-warm.webp',
  '/assets/kitchen-white.webp',
  '/assets/kitchen-wine.webp',
  '/assets/media-detail.webp',
  '/assets/media-open.webp',
  '/assets/media-wall.webp',
  '/assets/poster-kitchen.webp',
  '/assets/poster-media.webp',
  '/assets/poster-wardrobe.webp',
  '/assets/social.jpg',
  '/assets/wardrobe-grey.webp',
  '/assets/wardrobe-white.webp',
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(APP_CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('globalcabinets-') && ![APP_CACHE,PAGE_CACHE].includes(k)).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('message', event => { if (event.data?.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(request.mode==='navigate') {
    event.respondWith(fetch(request).then(response => {
      if(response.ok && response.type==='basic') {
        const copy=response.clone();event.waitUntil(caches.open(PAGE_CACHE).then(cache=>cache.put(request,copy)));
      }
      return response;
    }).catch(async()=> (await caches.match(request)) || (await caches.match('/offline'))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response=>{
    if(response.ok && response.type==='basic' && !url.pathname.endsWith('sw.js')) {
      const copy=response.clone();event.waitUntil(caches.open(APP_CACHE).then(cache=>cache.put(request,copy)));
    }
    return response;
  })));
});
