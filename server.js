const Next = require('next');
const fastify = require('fastify')({ logger: true });
const fetch = require('isomorphic-unfetch');
const routes = require('./routes/routes');

const { API_PORT = 8080 } = process.env;
const PORT = process.env.UI_PORT || 3033;
const dev = process.env.NODE_ENV !== 'production';

fastify.register((plugin, options, next) => {
  const app = Next({ dev });
  const handler = routes.getRequestHandler(app);

  app
    .prepare()
    .then(() => {
      plugin.get('/*', async (req, reply) => {
        handler(req.req, reply.res);
        reply.sent = true; // eslint-disable-line no-param-reassign
      });

      next();
    })
    .catch((err) => next(err));
});

fastify.post('/createGame', (req, res) => {
  req.body = {
    hostName: 'A',
    numberOfPlayers: 2
  };
  const { hostname, numberOfPlayers } = req.body;
  fetch(`http://127.0.0.1:${API_PORT}/createGame`, {
    method: 'POST',
    body: {
      hostname,
      numberOfPlayers
    }
  })
    .then((fetchResponse) => fetchResponse.json())
    .then((fetchResponse) => res.send(fetchResponse));
});

const start = () => {
  // eslint-disable-next-line no-console
  fastify.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

start();
