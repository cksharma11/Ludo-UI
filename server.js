const Next = require('next');
const fastify = require('fastify')({ logger: true });
const fetch = require('isomorphic-unfetch');
const fastifyCookie = require('fastify-cookie');
const bodyParser = require('fastify-formbody');
const routes = require('./routes/routes');

const { API_PORT = 8080 } = process.env;
const PORT = process.env.UI_PORT || 3033;
const dev = process.env.NODE_ENV !== 'production';

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
// deepu sharma 353@gmail.com
// 62 27 .VEER
fastify.post('/createGame', (req, res) => {
  const { hostName, numberOfPlayers } = req.body;
  fetch(`http://localhost:8080/createGame`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
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
      res.send(fetchedResponse);
    });
});

fastify.post('/joinGame', (req, res) => {
  const { playerName, gameId } = req.body;
  fetch(`http://10.0.0.5:${API_PORT}/joinGame`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      playerName,
      gameId
    })
  })
    .then((fetchedResponse) => fetchedResponse.json())
    .then(({ hasJoined }) => {
      res.send(hasJoined);
      // if (hasJoined) {
      //   res.setCookie('gameId', gameId);
      //   res.setCookie('playerId', playerId);
      //   res.send(JSON.stringify({ hasJoined: true }));
      // }
      // res.send(res.send(JSON.stringify({ hasJoined: false })));
    });
});

const start = () => {
  // eslint-disable-next-line no-console
  fastify.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

start();
