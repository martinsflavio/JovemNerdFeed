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
  let totalNewArticles = 0;

  JNScrap.scrape( jovemNerdArticles =>{

    console.log(jovemNerdArticles);

  });
});
///////////////////////////////////////////////////

/* GET list all Articles. */
router.get('/articles/all', (req, res, next) => {
  console.log('all');

  Article.findArticles({},(err, articles) => {

    if (err) {
      res.render('error',err);
    } else {
      let response = {
        title   :'Jovem Nerd Scraper',
        message : 'All Articles',
        body    : articles
      };
      res.render('index', response);
    }

  })

});
///////////////////////////////////////////////////
module.exports = router;
