const express  = require('express'),
    router   = express.Router();

const Controllers = require('../controllers');


/* GET */
router.get('/', (req, res, next) => {

  Controllers.articles.find({}, (err, results) => {
    if (err) {
      return res.status(500).render('err', {err: err});
    } else {
      return res.render('./pages/saved-articles', {success: results});
    }
  });

});
///////////////////////////////////////////////////

/* POST */
router.post('/create', (req, res, next) => {

  Controllers.articles.create(req.body, (err, results) => {
    if (err) {
      return res.status(500).render('error', {err: err});
    } else {
      return res.redirect('/scrape');
    }
  });

});
///////////////////////////////////////////////////

/* DELETE */
router.delete('/delete', (req, res, next) => {

  Controllers.articles.destroy(req.body._id, (err, results) => {
    if (err) {
      return res.status(500).render('error', {err: err});
    } else {
      return res.redirect('/articles');
    }
  })

});
///////////////////////////////////////////////////



module.exports = router;