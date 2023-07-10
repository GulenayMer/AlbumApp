const express = require("express");
//import middlewares
const {cloudinaryUpload} = require("../middlewares/cloudinary-upload");
const upload = require("../middlewares/multer-upload");
///import the Control Functions
const { createImage, getImages } = require("../controllers/image");

///Create the Router
const albumRouter = express.Router();

///CRUD Operations
albumRouter.post("/", upload.single("image"), cloudinaryUpload, createImage);//////CREATE
albumRouter.get("/", getImages);//////READ
// albumRouter.get("/:id", getAlbum);
// albumRouter.put("/:id", updateAlbum);
// albumRouter.delete("/:id", deleteAlbum);

module.exports = albumRouter;
