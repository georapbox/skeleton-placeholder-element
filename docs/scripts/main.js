const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../dist/skeleton-placeholder-defined.js' : 'https://unpkg.com/@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder-defined.js';

import(componentUrl).catch(err => {
  console.error(err);
});
