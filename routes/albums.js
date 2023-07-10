const express = require("express");
///import the Control Functions
const {
  createAlbum,
  //getAlbum,
  //getAlbums,
 // updateAlbum,
 //deleteAlbum,
} = require("../controllers/albums");

///Create the Router
const albumRouter = express.Router();

///CRUD Operations
albumRouter.post("/", createAlbum);
// albumRouter.get("/", getAlbums);
// albumRouter.get("/:id", getAlbum);
// albumRouter.put("/:id", updateAlbum);
// albumRouter.delete("/:id", deleteAlbum);

module.exports = albumRouter;
