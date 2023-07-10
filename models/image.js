const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  image: { type: String, required: true },
  information: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date,  default: Date.now,},
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
