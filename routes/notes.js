const express  = require('express'),
    router   = express.Router();

const Controllers = require('../controllers');


/* POST */
router.post('/create', (req, res, next) => {

  Controllers.notes.create(req.body, (err, results) => {
    if (err) {
      return res.status(500).render('error', {err: err});
    } else {
      return res.redirect('/articles');
    }
  });

});
///////////////////////////////////////////////////

/* DELETE */
router.delete('/delete', (req, res, next) => {



  Controllers.notes.destroy(req.body, (err, results) => {
    if (err) {
      return res.status(500).render('error', {err: err});
    } else {
      return res.redirect('/articles');
    }
  });

});
///////////////////////////////////////////////////



module.exports = router;