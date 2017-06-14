'use strict';

const express  = require('express'),
      router   = express.Router();

const JNScraper = require('../controllers').jnscraper;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Jovem Nerd Scraper' });
});
///////////////////////////////////////////////////

/* GET scrape. */
router.get('/scrape', (req, res, next) => {

  JNScraper.scrape( articles =>{
    res.render('./pages/scrapes',{success: articles});
  });

});
///////////////////////////////////////////////////



module.exports = router;
