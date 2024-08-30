const url = window.location.href;
const isLocalhost = url.includes('127.0.0.1') || url.includes('localhost');
const componentUrl = isLocalhost ? '../../dist/skeleton-placeholder.js' : '../lib/skeleton-placeholder.js';

document.addEventListener('DOMContentLoaded', () => {
  window.hljs.highlightAll();
});

try {
  const { SkeletonPlaceholder } = await import(componentUrl);
  SkeletonPlaceholder.defineCustomElement();
} catch (error) {
  console.error(error);
}
