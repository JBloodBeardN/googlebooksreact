const router = require("express").Router();
const SavedBooksController = require("../../controllers/SavedSavedBooksController");

// Matches with "/api/books"
router.route("/")
  .get(SavedBooksController.findAll)
  .post(SavedBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(SavedBooksController.findById)
  .put(SavedBooksController.update)
  .delete(SavedBooksController.remove);

module.exports = router;

