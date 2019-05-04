const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
// mongo
// mongoose
// express
// react-router-dom
// react
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI || "mongodb://<remoteConnect>:<TESTER1>@ds151416.mlab.com:51416/heroku_03xvsklj");
 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

// get "/api/books" - get book collection from MongoDB

// post "api/books" - create new book in MongoDB

// delete "api/books/:id" - delete from database ObjectId(_id)

// get "*" express.static("client/build/index.html")
