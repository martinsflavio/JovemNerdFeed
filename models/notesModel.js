'use strict';

const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let NoteSchema, Notes;


NoteSchema = new Schema({
  // Just a string
  body: {
    type: String,
    require: true
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

Notes = mongoose.model("Notes", NoteSchema);


module.exports = Notes;