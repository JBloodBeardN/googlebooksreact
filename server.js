var express = require("express");

// mongo
// mongoose
// express
// react-router-dom
// react

var mongoose = require ("mongoose")

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI || "mongodb://<remoteConnect>:<TESTER1>@ds151416.mlab.com:51416/heroku_03xvsklj");
 

// get "/api/books" - get book collection from MongoDB

// post "api/books" - create new book in MongoDB

// delete "api/books/:id" - delete from database ObjectId(_id)

// get "*" express.static("client/build/index.html")
