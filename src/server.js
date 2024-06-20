const Hapi = require('@hapi/hapi');
const connectToDatabase = require('./db'); // Ganti dengan lokasi file koneksi Anda
const ArticleRoutes = require('./routes/articleRoutes');
const EventRoutes = require('./routes/eventRoutes');

const init = async () => {
  await connectToDatabase(); // Memanggil fungsi koneksi database

  const server = Hapi.server({
    port: process.env.PORT || 3030,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(ArticleRoutes);
  server.route(EventRoutes);

  try {
    await server.start();
    console.log(`Server running at ${server.info.uri}`);
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1); // Exit process with error
  }
};

init();
