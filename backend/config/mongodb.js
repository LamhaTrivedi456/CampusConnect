import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGO_URI}`;
    console.log("Connecting to MongoDB URI:", uri); // Debugging
    await mongoose.connect(uri);

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit if there's an error
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
