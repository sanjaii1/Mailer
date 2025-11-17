const express = require('express');
const cors = require('cors');
require('dotenv').config();
const serverModule = require('./server.js');

console.log('serverModule:', serverModule);
console.log('handleContact type:', typeof serverModule.handleContact);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/contact', serverModule.handleContact);
app.options('/api/contact', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');      
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Mailer API is running' });
});

// Start server
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;