const Next = require('next');
const fastify = require('fastify')({ logger: true });
const fetch = require('isomorphic-unfetch');
const fastifyCookie = require('fastify-cookie');
const bodyParser = require('fastify-formbody');
const routes = require('./routes/routes');

const { API_PORT = 8080 } = process.env;
const PORT = process.env.UI_PORT || 3033;
const dev = process.env.NODE_ENV !== 'production';

const POST_CALL_CONFIG = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

fastify.register(bodyParser);
fastify.register(fastifyCookie);
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
  const { hostName, numberOfPlayers } = req.body;
  fetch(`http://localhost:${API_PORT}/createGame`, {
    ...POST_CALL_CONFIG,
    body: JSON.stringify({
      hostName,
      numberOfPlayers
    })
  })
    .then((fetchedResponse) => fetchedResponse.json())
    .then((fetchedResponse) => {
      const { gameId, playerId } = fetchedResponse;
      res.setCookie('gameId', gameId);
      res.setCookie('playerId', playerId);
      res.redirect('/waitingArea');
    });
});

fastify.post('/joinGame', (req, res) => {
  const { playerName, gameId } = req.body;
  fetch(`http://localhost:${API_PORT}/joinGame`, {
    ...POST_CALL_CONFIG,
    body: JSON.stringify({
      playerName,
      gameId
    })
  })
    .then((fetchedResponse) => fetchedResponse.json())
    .then(({ hasJoined }) => {
      res.send(hasJoined);
    });
});

const start = () => {
  // eslint-disable-next-line no-console
  fastify.listen(PORT, () => console.log(`App Server is running on ${PORT}`));
};

start();
