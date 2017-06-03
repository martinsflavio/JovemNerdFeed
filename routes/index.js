const express  = require('express'),
      router   = express.Router();

const JNScrap = require('../controllers/jn-scrape-controller'),
      Article = require('../controllers/article-controller');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Jovem Nerd Scraper' });
});


router.get('/scrape', (req, res, next) => {
  JNScrap.scrape( result =>{
    result.forEach(articleToSave => {
      Article.add(articleToSave, savedArticle => {
        console.log(savedArticle);
        console.log('----------');
      });
    });


    let response = {
      title   :'Jovem Nerd Scraper',
      message : 'Scrape Complete!',
      body    : result
    };

    res.render('index', response);
  });
});


router.get('/articles/all', (req, res, next) => {
  Article.find({},(err, articles) => {
    if (err) {res.render('err',err);}

    console.log(articles);
  })
});

module.exports = router;
