//import statements

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  postCount: Number
});

//model
const User = mongoose.model('user', UserSchema);

//export model
module.exports = User;
//model represents all of the data in a single mongodb
