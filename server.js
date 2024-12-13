const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Route to handle POST data from the frontend
app.post('/sendData', (req, res) => {
    const { name, price, sellerName, productID, description } = req.body;

    console.log('Data received:');
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Seller Name: ${sellerName}`);
    console.log(`Product ID: ${productID}`);
    console.log(`Description: ${description}`);

    res.status(200).send({ message: 'Data received successfully!' });
});

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
