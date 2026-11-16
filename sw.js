var V='nd3d-v2',CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
 if(e.request.method!=='GET')return;
 e.respondWith(caches.open(V).then(function(c){return c.match(e.request).then(function(hit){
  var net=fetch(e.request).then(function(r){if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());return r;}).catch(function(){return hit;});
  return hit||net;});}));
});
