const mongoose = require('mongoose');
const categorySchema = require('./category.model');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);