const express  = require('express'),
      router   = express.Router();

const JNScrap = require('../controllers/jn-scrape-controller'),
      Article = require('../controllers/article-controller');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Jovem Nerd Scraper' });
});
///////////////////////////////////////////////////

/* GET scrape. */
router.get('/scrape', (req, res, next) => {

  JNScrap.scrape( articles =>{
    res.render('./pages/scrapes',{body:articles});
  });


});
///////////////////////////////////////////////////

/* GET Save Article. */
router.post('/save', (req, res, next) => {
  //TODO VALIDATE OBJ BEFORE SAVE INTO DB

  Article.add(req.body, (err,savedArticle) => {
    if (err) {
      if(err.code === 11000) {
        console.log('Article saved already!');
      } else {
        res.render('error',err);
      }
    } else {
      console.log(savedArticle);
    }

  });
});
///////////////////////////////////////////////////

/* GET list all Articles. */
router.get('/all', (req, res, next) => {

  Article.findArticles({},(err, articles) => {

    if (err) {
      res.render('error',err);
    } else {
      res.render('./pages/saved-articles', {body:articles});
    }

  });

});
///////////////////////////////////////////////////

/* DELETE  Article. */
router.delete('/delete', (req, res, next) => {

  Article.destroy(req.body._id, (err, deletedArticle) => {
    if (err) {
      res.render('error',err);
    } else {
      res.redirect('/all');
      console.log(deletedArticle);
    }

  });

});
///////////////////////////////////////////////////
module.exports = router;
