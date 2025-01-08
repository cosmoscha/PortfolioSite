import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

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
    origin: ['https://rivercha.dev', 'http://localhost:5174'],
    credentials: true
}));

app.use(express.json());
app.use('/api', projectRoutes);
app.use('/api', projectRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});



//const express = require('express');
//const cors = require('cors');
//const dotenv = require('dotenv');
//const projectRoutes = require('./routes/projects.js');
//const aboutRoutes = require('./routes/about.js');
//dotenv.config();
//const app = express();
//const PORT = process.env.PORT || 3000;
//
//// Add request logging
//app.use((req, res, next) => {
//    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
//    next();
//});
//
//app.use(cors({
//    origin: ['https://rivercha.dev', 'http://rivercha.dev'],
//    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//    credentials: true
//}));
//
//app.use(express.json());
//
//// Add a test endpoint
//app.get('/api/test', (req, res) => {
//    res.json({ status: 'ok', message: 'Server is running' });
//});
//
//app.use('/api', projectRoutes);
//app.use('/api', aboutRoutes);
//
//// Add error handling
//app.use((err, req, res, next) => {
//    console.error('Error:', err);
//    res.status(500).json({
//        error: 'Server error',
//        details: err.message
//    });
//});
//
//app.listen(PORT, () => {
//    console.log(`Server started at ${new Date().toISOString()}`);
//    console.log(`Server running on port ${PORT}`);
//    console.log('Environment:', process.env.NODE_ENV);
//});
//
//module.exports = app;