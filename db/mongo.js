'use strict';

const mongoose  = require('mongoose');

mongoose.Promise = Promise;

// connect mongo_DB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", error => {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", () => {
  console.log("Mongoose connection successful.");
});

module.exports = db;