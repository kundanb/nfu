const express = require("express");
const { join } = require("path");
const multer = require("multer");
const { lookup } = require("dns");
const { hostname } = require("os");

const app = express();

app.use(express.static(join(__dirname, "../public")));

const uploader = multer({
  storage: multer.diskStorage({
    destination: process.cwd(),
    filename: (_, file, cb) => {
      cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
  }),
}).any();

app.post("/upload", uploader, (req, res) => {
  res.redirect("/?uploaded");
});

const PORT = process.argv[2] || 1792;

app.listen(PORT, () => {
  lookup(hostname(), (_, addr) => {
    console.log("----------------------------------------");
    console.log(`NFU Server started at http://${addr}:${PORT}`);
    console.log("----------------------------------------");
  });
});
