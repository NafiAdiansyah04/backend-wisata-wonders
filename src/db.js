const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://nafiadiansyah04:pikk040903@cluster0.1h0rj5s.mongodb.net/<nama_database>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Jika perlu, tambahkan opsi lain seperti useCreateIndex dan useFindAndModify
    });
    console.log('Connection to database succeeded.');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit process with error
  }
};

module.exports = connectToDatabase;
