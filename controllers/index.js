'use strict';
const Articles    = require('./articles-controller'),
      Notes       = require('./notes-controller'),
      JNScraper   = require('./jn-scrape-controller');


module.exports =  {
  articles: Articles,
  notes: Notes,
  jnscraper: JNScraper
};