const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

const User = require('../user.model');
const connectDB = require('../db');

describe('User Model', () => {
  before(async () => {
    await connectDB();
  });

  after(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({}); 
  });

  describe('Create User', () => {
    it('should create a new user', async () => {
      const user = new User({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123'
      });
      await user.save();

      const users = await User.find({});
      expect(users).to.have.lengthOf(1);
      expect(users[0].name).to.equal('John Doe');
    });
  });

  describe('Read User', () => {
    it('should find a user by ID', async () => {
      const user = new User({
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password456'
      });
      await user.save();

      const foundUser = await User.findById(user._id);
      expect(foundUser.name).to.equal('Jane Smith');
    });
  });

  describe('Update User', () => {
    it('should update a user\'s country', async () => {
      const user = new User({
        name: 'Mike Jones',
        email: 'mike.jones@example.com',
        password: 'password789',
        country: 'USA'
      });
      await user.save();

      user.country = 'Canada';
      await user.save();

      const updatedUser = await User.findById(user._id);
      expect(updatedUser.country).to.equal('Canada');
    });
  });

  describe('Delete User', () => {
    it('should delete a user', async () => {
      const user = new User({
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        password: 'password012'
      });
      await user.save();

      await User.deleteOne({ _id: user._id });

      const deletedUser = await User.findById(user._id);
      expect(deletedUser).to.be.null;
    });
  });
});
