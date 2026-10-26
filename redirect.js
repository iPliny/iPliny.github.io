(() => {
  const routes = [['/costco-price-jp', 'https://costco.crawlsnek.com/'], ['/ptt-iphone-tracker', 'https://macshop.crawlsnek.com/']];
  const path = window.location.pathname;
  const route = routes.find(([p]) => path === p || path.startsWith(p + '/'));
  if (!route) return;
  const [prefix, origin] = route;
  const target = new URL(origin);
  target.pathname = path.slice(prefix.length) || '/';
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
