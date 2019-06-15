const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add({
  name: 'home',
  pattern: '/',
  page: 'home'
});

routes.add({
  name: 'createGame',
  pattern: '/createGame',
  page: 'createGame'
});

routes.add({
  name: 'joinGame',
  pattern: '/joinGame',
  page: 'joinGame'
});

module.exports = routes;
