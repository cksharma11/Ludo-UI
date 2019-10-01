const Next = require('next');
const fastify = require('fastify')();
const fetch = require('isomorphic-unfetch');
const fastifyCookie = require('fastify-cookie');
const bodyParser = require('fastify-formbody');
const routes = require('./routes/routes');
const { API_URL, POST_CALL_CONFIG } = require('./utils/utils');

const PORT = process.env.PORT || process.env.UI_PORT || 3030;
const dev = process.env.NODE_ENV !== 'production';

const logger = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.url);
  next();
};

fastify.register(bodyParser);
fastify.register(fastifyCookie);
fastify.use(logger);
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
  fetch(`${API_URL}/createGame`, {
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
  fetch(`${API_URL}/joinGame`, {
    ...POST_CALL_CONFIG,
    body: JSON.stringify({
      playerName,
      gameId
    })
  })
    .then((fetchedResponse) => fetchedResponse.json())
    .then(({ hasJoined, playerId }) => {
      if (hasJoined) {
        res.setCookie('gameId', gameId);
        res.setCookie('playerId', playerId);
        return res.redirect('/waitingArea');
      }
      return res.redirect('/');
    });
});

fastify.post('/loadGame', (req, res) => {
  const { playerId, gameId } = req.body;
  fetch(`${API_URL}/loadGame`, {
    ...POST_CALL_CONFIG,
    body: JSON.stringify({
      playerId,
      gameId
    })
  })
    .then((fetchedResponse) => fetchedResponse.json())
    .then(({ isStarted }) => {
      if (isStarted) {
        res.setCookie('gameId', gameId);
        res.setCookie('playerId', playerId);
        return res.redirect('/game');
      }
      return res.redirect('/');
    });
});

const start = () => {
  fastify.listen(PORT, '0.0.0.0', () =>
    // eslint-disable-next-line no-console
    console.log(`App Server is running on ${PORT}`)
  );
};

start();
