const Image = require("../models/image");

const createImage = async (req, res) => {
  try {
    const { imageUrl, information, category } = req.body;
    const image = await Image.create({
      imageUrl: req.file.filename,
      information,
      category,
      createdAt,
    });

    res.status(201).json(image);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


const getImages = async (req, res) => {
  try {
    const { imageUrl, info, category } = req.body;
    const image = await Image.find({});

    res.status(200).json(image);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


module.exports = {
  createImage, getImages
}