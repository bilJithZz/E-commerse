const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: Number,
    url:String,
    name: String,
    gadegt:String,
    description: String,
    dumyprice:Number,
    price: Number,
    catagorie:String,
    detail:String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
