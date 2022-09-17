const { Router } = require("express");
const router = Router();
const {getGenre} = require("../controllers/genreController.js");


router.get("/", getGenre);

module.exports = router;