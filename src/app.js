const express = require('express');
const cors = require('cors');
const path = require('path');

// Routes
const productRoutes = require('../routes/productRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
