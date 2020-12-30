addEventListener('install', event => {
	event.waitUntil(
		caches.open('simple-sw-v1').then(cache => cache.add('index.html'))
	);
});

addEventListener('fetch', event=>{
	event.respondWith(
		caches.match(event.request).then(response => response || fetch(event.request))
	);
});