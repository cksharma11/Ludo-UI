const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 8080;

fastify.get('/', (req, res) => {
  res.send('Hello Hello!');
});

const start = () => {
  fastify.listen(PORT);
  fastify.log.info(`Server listening on ${PORT}`);
};

start();
