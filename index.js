const express = require("express");
const cors = require("cors");
require("dotenv/config");
/////////////////
//REQUIRE ROUTERS
const albumRouter = require("./routes/images");
require("./db");
//
//
const app = express();
const PORT = process.env.PORT || 3000;
//
//
/////////////
//MIDDLEWARES
app.use(cors());
//
//
app.use(express.static("public"));
app.use(express.json());
//
//
//////////////
//USING ROUTES
app.use("/images", albumRouter);


app.listen(PORT, () => {
  console.log(`Image Uploader App is Listening on http://localhost:${PORT}`);
});
