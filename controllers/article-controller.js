'use strict';

const Article = require('../models/article');

module.exports = {
  findArticles: function(queryObj, cb) {

    Article.find(queryObj,(err, doc) => {
      if (err) {return cb(err,false);}

        return cb(null, doc);
    });

  },
  findById: function() {

  },
  addNew: function(articlesObj, cb) {
    let entry = new Article(articlesObj);

    entry.save((err, savedDoc) => {
      if (err) {
        return cb(err, false);
      }
      cb(null, savedDoc);
    });
  },
  update: function() {

  },
  destroy: function(id, cb) {
    Article.findByIdAndRemove({ _id: id }, (err, doc) => {
      if (err) {return cb(err, false);}
      return cb(null,doc);
    });
  }
};
