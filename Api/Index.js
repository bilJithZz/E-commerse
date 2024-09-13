const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRouter = require('./Routes/Register');
const productRouter = require('./Routes/Product');
const defaultdata = require('./Routes/Products');
const stripe = require("stripe")("sk_test_51PyT0OP5tTERlggvFJMW0tMLhdNY4hiNhZ5zbkpVF9xJpggQ4JXRVOKCI4rOzY4q9go3SWgntcoXAdDsA9hAjuA100eQiYY2IQ");

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

app.post("/api/create-checkout", async (req, res) => {
    try {
       
        const { products } = req.body;
        console.log(products)

        if (!Array.isArray(products)) {
            return res.status(400).send('Invalid request body: products should be an array');
        }

        const line_items = products.map((product) => ({
            price_data: {
                currency: "inr", 
                product_data: {
                    name: product.name, 
                },
                unit_amount: product.price * 100, 
            },
            quantity: product.quantity,
        }));


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: line_items,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

       
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});


// defaultdata();
