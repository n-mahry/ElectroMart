const express = require('express');
const productRoutes = require('../routes/productRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Serve static frontend files from "public" folder
app.use(express.static('public'));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to ElectroMart API 🚀');
});

module.exports = app;
