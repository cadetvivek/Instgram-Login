const mongoose = require("mongoose");

const ConnectDB = mongoose.connect(
  "mongodb+srv://kushawahyogesh93:Yogesh@cluster0.j9tkecq.mongodb.net/instralogin?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = {
    ConnectDB
}