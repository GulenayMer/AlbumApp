const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
  image: { type: String, required: true },
  information: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date,  default: Date.now,},
});

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
