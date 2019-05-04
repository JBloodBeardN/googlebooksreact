const router = require("express").Router();
const SavedBooksRoutes = require("./SavedBooks");
const DefaultBookRoutes = require("./DefaultBook");

// Book routes
router.use("/SavedBooks", SavedBooksRoutes);
router.use("/DefaultBook", DefaultBookRoutes);

module.exports = router;
