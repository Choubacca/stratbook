/* models/User.js */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
  @schema UserSchema
  @prop username: String
  @prop email: String
  @prop password: String
  @prop platform: String
  @prop team_code: String
  @prop status: String
  @prop verified: Boolean
*/
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  team_code: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  verified: {
    type: Boolean,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
