const Next = require('next');
const fastify = require('fastify')({ logger: true });
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3033;
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

const start = () => {
  // eslint-disable-next-line no-console
  fastify.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

start();
