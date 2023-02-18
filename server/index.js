import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
// environment variables
dotenv.config();

// express app
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// ROUTES
app.use('/posts', postRoutes);
app.use('/', (req, res) => {
  res.send('Hello to Memories API');
});

// db connection
const PORT = process.env.PORT ?? 5000;
mongoose.set('strictQuery', true);
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    app.listen(PORT, () => console.log(`server  running on port ${PORT}`));
  } catch (error) {
    console.log({ message: error.message });
  }
};

start();
