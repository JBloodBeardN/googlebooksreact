const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  link: String
});

const SavedBooks = mongoose.model("SavedBooks", bookSchema);

module.exports = SavedBooks;