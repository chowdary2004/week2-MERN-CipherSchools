const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

const Product = require('../product.model');
const Category = require('../category.model'); 
const connectDB = require('../db');

describe('Product Model', () => {
  before(async () => {
    await connectDB();
  });

  after(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
    await Category.deleteMany({});
  });

  const testCategory = new Category({ categoryName: 'Electronics' });
  testCategory.save();

  describe('Create Product', () => {
    it('should create a new product', async () => {
      const product = new Product({
        productName: 'Laptop',
        description: 'A powerful laptop for work and play.',
        price: 1299.99,
        category: testCategory._id, 
        quantity: 10
      });
      await product.save();

      const products = await Product.find({});
      expect(products).to.have.lengthOf(1);
      expect(products[0].productName).to.equal('Laptop');
    });
  });

  describe('Read Product', () => {
    it('should find a product by ID', async () => {
      const product = new Product({
        productName: 'Smartphone',
        description: 'A high-end smartphone with advanced features.',
        price: 799.99,
        category: testCategory._id,
        quantity: 20
      });
      await product.save();
  
      const foundProduct = await Product.findById(product._id);
      expect(foundProduct.productName).to.equal('Smartphone');
    });
  });

  describe('Update Product', () => {
    it('should update a product\'s price and quantity', async () => {
      const product = new Product({
        productName: 'Tablet',
        description: 'A versatile tablet for work and entertainment.',
        price: 399.99,
        category: testCategory._id,
        quantity: 5
      });
      await product.save();
  
      product.price = 449.99;
      product.quantity = 10;
      await product.save();
  
      const updatedProduct = await Product.findById(product._id);
      expect(updatedProduct.price).to.equal(449.99);
      expect(updatedProduct.quantity).to.equal(10);
    });
  });

  describe('Delete Product', () => {
    it('should delete a product', async () => {
      const product = new Product({
        productName: 'Headphones',
        description: 'Wireless headphones with noise cancellation.',
        price: 149.99,
        category: testCategory._id,
        quantity: 15
      });
      await product.save();
  
      await Product.deleteOne({ _id: product._id });
  
      const deletedProduct = await Product.findById(product._id);
      expect(deletedProduct).to.be.null;
    });
  });
  
});
