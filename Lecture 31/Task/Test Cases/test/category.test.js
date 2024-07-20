const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

const Product = require('../product.model');
const Category = require('../category.model'); 
const connectDB = require('../db');

describe('Category Model', () => {
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

  describe('Create Category', () => {
    it('should create a new category', async () => {
      const category = new Category({ categoryName: 'Electronics' });
      await category.save();

      const categories = await Category.find({});
      expect(categories).to.have.lengthOf(1);
      expect(categories[0].categoryName).to.equal('Electronics');
    });
  });

  describe('Read Category', () => {
    it('should find a category by ID', async () => {
      const category = new Category({ categoryName: 'Books' });
      await category.save();

      const foundCategory = await Category.findById(category._id);
      expect(foundCategory.categoryName).to.equal('Books');
    });
  });

  describe('Update Category', () => {
    it('should update a category name', async () => {
      const category = new Category({ categoryName: 'Clothing' });
      await category.save();

      category.categoryName = 'Fashion';
      await category.save();

      const updatedCategory = await Category.findById(category._id);
      expect(updatedCategory.categoryName).to.equal('Fashion');
    });
  });

  describe('Delete Category', () => {
    it('should delete a category', async () => {
      const category = new Category({ categoryName: 'Toys' });
      await category.save();

      await Category.deleteOne({ _id: category._id });

      const deletedCategory = await Category.findById(category._id);
      expect(deletedCategory).to.be.null;
    });
  });
});
