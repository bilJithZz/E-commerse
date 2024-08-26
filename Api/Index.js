const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRouter = require('./Routes/Register');
const productRouter = require('./Routes/Product');
const defaultdata=require('./Routes/Products')


const app = express();
const PORT = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/Cart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});


app.use(cors()); 
app.use(express.json()); 


app.use('/cart', registerRouter); 
app.use('/product', productRouter); 


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

// defaultdata();




