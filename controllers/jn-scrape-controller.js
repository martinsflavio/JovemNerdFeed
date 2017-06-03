'use strict';

const request   = require('request'),
      cheerio   = require('cheerio');


const JovemNerdScrap = {
    scrape: function(cb) {
      request("https://jovemnerd.com.br/nerdnews/", (error, response, html) => {
        let $ = cheerio.load(html);
        let artList = [];

        $("article h2").each(function (i, element) {
          let result = {};
          result.title = $(this).children("a").text();
          result.link = $(this).children("a").attr("href");
          artList.push(result);
        });
        cb(artList);
      });
    }
};


module.exports = JovemNerdScrap;