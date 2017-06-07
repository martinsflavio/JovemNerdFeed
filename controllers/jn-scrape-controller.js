'use strict';

const request   = require('request'),
      cheerio   = require('cheerio');


const JovemNerdScrap = {
    scrape: function(cb) {
      request("https://jovemnerd.com.br/", (error, response, html) => {
        const $ = cheerio.load(html);
        const content = $('#content');
        const articlesWrap = content.find('.entry-card__content');

        let articleList = [];

        articlesWrap.each(function (i, element) {

          let result = {};
          result.category = $(this).children("h3").find('a').text();
          result.title    = $(this).children("h2").text();
          result.link     = $(this).children('h2').find('a').attr('href');
          articleList.push(result);


        });

       cb(articleList);

      });
    }
};


module.exports = JovemNerdScrap;