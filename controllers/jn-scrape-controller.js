'use strict';

const request   = require('request'),
      cheerio   = require('cheerio');


const JovemNerdScrap = {
    scrape: function(cb) {
      request("https://jovemnerd.com.br/", (error, response, html) => {
        let $ = cheerio.load(html);
        let articleList = [];

        $("article h2").each(function (i, element) {
          let result = {};
          result.title = $(this).children("a").text();
          result.link = $(this).children("a").attr("href");
          articleList.push(result);
        });

       cb(articleList);

      });
    }
};


module.exports = JovemNerdScrap;