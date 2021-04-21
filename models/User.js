const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  likesList: [],
  date: {
    type: Date,
    default: Date.now,
  },
  watchList: [],
});
//when movie is clicked, querry database
//Get id of movie,add id to watch list array
//
//in the post
module.exports = User = mongoose.model("user", UserSchema);
