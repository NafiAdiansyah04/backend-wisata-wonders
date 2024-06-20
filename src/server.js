const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3030,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Menangani permintaan favicon dengan respons kosong
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: (request, h) => {
      return h.response('').code(204);
    }
  });

  await server.start();
  console.log(`Server running in ${server.info.uri}`);
};

init();
