if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"72b68f035035420a31a3f4d04191e8a0","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"72b68f035035420a31a3f4d04191e8a0","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"74d7a274b69cd0cd27a1a7d40a023702","url":"static/js/1.ebd4a9d5.chunk.js"},{"revision":"7ba2fbdb86ee3c7b499e12ac7e542459","url":"static/js/11.7f850e28.chunk.js"},{"revision":"9e5063b2384e27c19c10b6315c54f96a","url":"static/js/12.4f1b816e.chunk.js"},{"revision":"ca1a124525ddfba6b3804f5b13278ff6","url":"static/js/13.1470790d.chunk.js"},{"revision":"c080ce4cced160a7638b4b816028f625","url":"static/js/14.b7e1dec0.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"0a772e82609191d2a299856b7a260a74","url":"static/js/16.8e8f0c75.chunk.js"},{"revision":"7908097ed67f78c99c2f26a08fcb1402","url":"static/js/17.268d14f5.chunk.js"},{"revision":"fd664fce75cbfc19d5095000863fc540","url":"static/js/18.f61c1082.chunk.js"},{"revision":"c9353573f1cffbf5b1cb8a94db77b90e","url":"static/js/19.56ceaf37.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"fd93066d90d28fc0a37c67a0661c8830","url":"static/js/20.dc576eef.chunk.js"},{"revision":"a4b3f2497efa17b19f58d70b89225e91","url":"static/js/21.c06ad188.chunk.js"},{"revision":"b5187108143d7b43c70d02758ccd7252","url":"static/js/22.1f80e96b.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"80e880b22fe6ac5c7c3c2d549d295a11","url":"static/js/24.8d35a62f.chunk.js"},{"revision":"058fe1e5dfabfd83dcc14e9e652194b4","url":"static/js/25.6aa6b59c.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"19954e9187230abd62baf6498ac9b92c","url":"static/js/27.11f8f9e1.chunk.js"},{"revision":"979c7b2800fa3b0533ea55ee3408982d","url":"static/js/28.5df38c84.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"5c9b006da365cf3d9630b84fd6d51fb6","url":"static/js/3.1f87328b.chunk.js"},{"revision":"f9dcae5bf06d3a1b8f84846c76c0a668","url":"static/js/30.b2d64692.chunk.js"},{"revision":"9b231336668ed03ec4c793f33143c84c","url":"static/js/31.6747e7f6.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"2b167a4ef00b136961344710d7d041f6","url":"static/js/34.ba45a35f.chunk.js"},{"revision":"b9dbf937cf6b681d0f297208524792b8","url":"static/js/35.500fed01.chunk.js"},{"revision":"dcd9663698ed2d6dfa5fbe6e99c5cce1","url":"static/js/36.bcd77977.chunk.js"},{"revision":"1dd7d66b768ba330782bd4e4d83d925a","url":"static/js/37.c035c177.chunk.js"},{"revision":"41e277d7f515c615920faffa0ab1fa77","url":"static/js/38.2a304594.chunk.js"},{"revision":"1b4ec1e90fb5ab762d2f7703caaeefed","url":"static/js/39.d1182d34.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"0f49f2e008cdf9510a6de27809afbfae","url":"static/js/40.83a671a2.chunk.js"},{"revision":"ee068ec0941b781cf3bf02077bd8cea0","url":"static/js/41.bd5bff4f.chunk.js"},{"revision":"335a115e239896eab0006158b94646ed","url":"static/js/42.e8c7936a.chunk.js"},{"revision":"0102ae3f664861609a6997c6ac984e4c","url":"static/js/43.5dcfca9e.chunk.js"},{"revision":"cc011859ccc48106f0f519763552e58d","url":"static/js/44.6a6d2518.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"03c1b6b363468a906b72a413530465da","url":"static/js/5.f2987268.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"b1da01022e788925e153df6ffb1d93bc","url":"static/js/8.5b568cae.chunk.js"},{"revision":"7cbe793c2cfdb9710f5dff372e3d03fb","url":"static/js/main.dbb7bd1e.chunk.js"},{"revision":"68674865453eda9399d7f644e1e329d3","url":"static/js/runtime-main.21c4005a.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
