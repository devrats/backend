import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userDataRoutes from './routes/dataRoutes.js';
import { connectToDB } from './connection.js';
config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/data', userDataRoutes);

connectToDB();

app.listen(5000, () => console.log('Server running on port 5000'));