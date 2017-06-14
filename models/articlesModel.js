'use strict';

const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let ArticleSchema, Articles;


ArticleSchema = new Schema({
  category: {
    type: String
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notes"
    }
  ]
});


Articles = mongoose.model("Articles", ArticleSchema);


module.exports = Articles;

