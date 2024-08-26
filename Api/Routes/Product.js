const express = require('express');
const Product = require('../Model/ProductSchema'); // Import Product model
const router = new express.Router(); // Initialize router

// Define route to get products
router.get('/getproduct', async (req, res) => {
    try {
        
        const productData = await Product.find(); 
         res.status(200).json(productData);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

//get particular data


    router.get("/products/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const singleProduct = await Product.findOne({ productId: id }); // Replace 'productId' with your custom field name
            if (!singleProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(singleProduct);
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    });
    


module.exports = router;
