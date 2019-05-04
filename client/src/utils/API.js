import axios from "axios";

export default {
  // Gets all books
  getBook: function() {
    return axios.get("/api/default");
  },
  // Gets the book with the given id
  getBooks: function(id) {
    return axios.get("/api/saved");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  }
};
// get "/api/default" - get default book to load componentDidMount();

// get "/api/books" - get book collection from MongoDB

// post "api/books" - create new book in MongoDB

// delete "api/books/:id" - delete from database ObjectId(_id)

// get "*" express.static("client/build/index.html")
