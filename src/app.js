const express = require('express');
const client = require('prom-client'); // 👈 Add this
const productRoutes = require('../routes/productRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();

// --- PROMETHEUS CONFIGURATION START ---

// Enable collection of default Node.js metrics (CPU, memory, GC, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// Expose the metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// --- PROMETHEUS CONFIGURATION END ---


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