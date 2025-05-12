
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/GuessTheLogo-Angular/home",
    "route": "/GuessTheLogo-Angular"
  },
  {
    "renderMode": 2,
    "route": "/GuessTheLogo-Angular/home"
  },
  {
    "renderMode": 2,
    "route": "/GuessTheLogo-Angular/logolevel"
  },
  {
    "renderMode": 2,
    "route": "/GuessTheLogo-Angular/gamewon"
  }
],
  assets: new Map([
['index.csr.html', {size: 1075, hash: '65a4832d49a81ea48d3721ecd17d9a5bfb561f1ef53d5ec7e05cebaf6684a4da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1432, hash: 'b19698b3ec738885b16cb1d26ba1e49d9ef031c1b3e91cb2a26193f0e9bc4ef7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['logolevel/index.html', {size: 7344, hash: '901c3c318ed2336d3815f9721ab42cd92cc7abf231c4ce6125df47293c05aafe', text: () => import('./assets-chunks/logolevel_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 5596, hash: '786a6ac00039466f459dcc6dd1148b568e984b62c867d6de45a69882be336cc2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['gamewon/index.html', {size: 6006, hash: '13d3147b6dddd500ba53fbcca769f0fddaeae381d0e696f1d746ec5f8db8c2e3', text: () => import('./assets-chunks/gamewon_index_html.mjs').then(m => m.default)}], 
['styles-VYCYOBS6.css', {size: 31, hash: '0yMW4+a3piQ', text: () => import('./assets-chunks/styles-VYCYOBS6_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
