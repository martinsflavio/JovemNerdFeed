'use strict';

const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let NoteSchema, Note;


NoteSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

Note = mongoose.model("Note", NoteSchema);


module.exports = Note;