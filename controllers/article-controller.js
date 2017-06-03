'use strict';

const Article = require('../models/article'),
      db      = require('../db/mongo');

module.exports = {
  find: function(queryObj, cb) {
    db.Article.find(queryObj,(err,articles) => {
      if (err) {return cb(err);}
      return cb(articles);
    });
  },
  findById: function() {

  },
  add: function(articlesObj, cb) {
    let entry = new Article(articlesObj);

    entry.save((err, doc) => {
      if (err) {return cb(err);}

      cb(doc);
    });
  },
  update: function() {

  },
  destroy: function() {

  }
};
