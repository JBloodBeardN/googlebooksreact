const router = require("express").Router();
const SavedBooksController = require("../../controllers/SavedSavedBooksController");

// Matches with "/api/books"
router.route("/saved")
  .get(SavedBooksController.findAll)
  .post(SavedBooksController.create);  

// Matches with "/api/books/:id"
router
  .route("saved/:id")
  .delete(SavedBooksController.remove);

module.exports = router;