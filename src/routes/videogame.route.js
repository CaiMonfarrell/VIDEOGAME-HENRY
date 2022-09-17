const { Router } = require("express");
const router = Router();
const {getVideogameDetail, deleteVideogame} = require('../controllers/videogameController.js');

router.get('/:id', getVideogameDetail)
router.delete('/:id', deleteVideogame)

module.exports = router;