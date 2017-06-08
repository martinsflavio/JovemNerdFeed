'use strict';

const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let ArticleSchema, Article;


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
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;

