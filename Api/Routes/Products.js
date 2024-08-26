
const ProductsData = require('../Model/ProductData/ProductData');
const Product = require('../Model/ProductSchema');

const defaultdata = async (req,res) => {
    try {
        if (!ProductsData || ProductsData.length === 0) {
            throw new Error('No product data available');
        }
        const storeProduct = await Product.insertMany(ProductsData);
       
        res.status(200).json(storeProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = defaultdata;
