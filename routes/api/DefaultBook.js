const router = require("express").Router();
const DefaultBookController = require("../../controllers/DefaultBookController");

// Matches with "/api/books"
router.route("/")
  .get(DefaultBookController.findAll);

module.exports = router;
