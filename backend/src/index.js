import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projects.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['https://rivercha.dev', 'http://localhost:5173'],
    credentials: true
}));

app.use(express.json());
app.use('/api', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});