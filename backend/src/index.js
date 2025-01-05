import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Debug log to check if env vars are loaded
console.log('Environment Variables Check:', {
    AWS_CLIENT_ID: process.env.AWS_CLIENT_ID ? 'Set' : 'Not Set',
    AWS_CLIENT_SECRET: process.env.AWS_CLIENT_SECRET ? 'Set' : 'Not Set',
    AWS_USERNAME: process.env.AWS_USERNAME ? 'Set' : 'Not Set',
    AWS_PASSWORD: process.env.AWS_PASSWORD ? 'Set' : 'Not Set'
});

const app = express();

const PORT = 3001;  // Changed to 3001 to avoid conflicts
const HOST = 'localhost';

app.use(cors({
    origin: ['https://rivercha.dev', 'http://localhost:5173'],
    credentials: true
}));

app.use(express.json());
app.use('/api', projectRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});