import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGODB_URI

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Using existing connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 20000,
    };

    console.log('Attempting to connect to MongoDB...');
    console.log('Connection string exists:', !!MONGO_URL);
    
    mongoose.set('strictQuery', false);
    
    cached.promise = mongoose.connect(MONGO_URL, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully!');
        return mongoose;
      })
      .catch(err => {
        console.error('MongoDB connection error details:', {
          name: err.name,
          message: err.message,
          code: err.code,
          codeName: err.codeName
        });
        throw err;
      });
  }
  
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Error establishing MongoDB connection:', error);
    throw error;
  }
}

export default dbConnect