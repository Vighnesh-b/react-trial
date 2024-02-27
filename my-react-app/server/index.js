import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';



dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  });
  
const app = express();

app.use(express.json())


app.use('/', authRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
