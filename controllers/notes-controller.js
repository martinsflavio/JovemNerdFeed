'use strict';

const Notes    = require('../models/notesModel'),
      Articles = require('../models/articlesModel');


module.exports = {
  find (query, cb) {
    Notes.find(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  findById (query, cb) {
    Notes.findById(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  update (query, update, cb) {
    Notes.findByIdAndUpdate(query, update, {new: true}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  create (query, cb) {

    const entry = new Notes({body:query.body});

      entry.save((err, docs) => {
      if (err) {
        cb(err, null);
      } else {
        Articles.findOneAndUpdate({_id: query.articleId},{$push: {notes: docs._id}}, (err, docs) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, docs);
          }
        });
      }
    });
  },
  destroy (query, cb) {
    Notes.findByIdAndRemove({_id:query._id}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },

  // ERROR HANDLER
  errorHandler (err, docs, cb)  {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  },
  controller: 'Notes'
  /////////////////////////
};

