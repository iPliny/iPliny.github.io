(() => {
  const prefix = '/costco-price-jp';
  const path = window.location.pathname;
  if (path !== prefix && !path.startsWith(prefix + '/')) return;
  const target = new URL('https://costco.crawlsnek.com/');
  target.pathname = path.slice(prefix.length) || '/';
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
