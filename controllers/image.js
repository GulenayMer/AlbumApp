const Image = require("../models/image");
const fs = require("fs")

const createImage = async (req, res) => {
  try {
    const { information, category, createdAt } = req.body;
    console.log(req.file)
    const image = await Image.create({

      image: req.file.secure_url,
      information,
      category,
      createdAt,
    });

    fs.unlinkSync(req.file.localPath)
    
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