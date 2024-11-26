const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  MobileNumber: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = {
  UserModel,
};
