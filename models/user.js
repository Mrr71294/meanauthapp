const mongoose = require('mongoose');
const bcrypt = require('mongoose');
const config = require('./config/database');

//USER Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    require: true
  },
  username: {
  type: String,
  require: true
  },
  password: {
    type: String,
    require: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username};
  User.findOne(query, callback);
};
