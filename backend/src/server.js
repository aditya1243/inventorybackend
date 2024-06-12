const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
