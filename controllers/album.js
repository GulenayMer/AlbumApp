const Album = require("../models/album");

const createAlbum = async (req, res) => {
  try {
    const { image, info, category } = req.body;
    const album = await Album.create({
      image: req.file.filename,
      information,
      category,
      createdAt,
    });

    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


module.exports = {
  createAlbum
}