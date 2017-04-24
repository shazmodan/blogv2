const fetchUrl = require('fetch').fetchUrl;
const Promise = require('promise');
const fs = require('fs');

const baseUrl = 'http://localhost:8080';
const articleIndex = '/databases/blog/indexes/articleIndex';
const filePath = __dirname + '/articles.json';

module.exports = class ArticleProvider {

    loadArticlesAsync(numberOfArticles) {
        const query = '?start=0&pageSize=' + numberOfArticles + '&sort=-publishDate'
        const url = baseUrl + articleIndex + query;
        const promise = new Promise((resolve, reject) => {
            fetchUrl(url, (error, meta, body) => {
                if (error) console.log('error: ', error);
                else {
                    resolve(body);
                }
            });
        }).then((result) => (JSON.parse(result) || {}));
        return promise;
    };

    loadSingleArticleAsync(name) {
        const query = '?query=name:' + encodeURI(name) + '&start=0&pageSize=1';
        const url = baseUrl + articleIndex + query;
        const promise = new Promise((resolve, reject) => {
            fetchUrl(url, (error, meta, body) => {
                if (error) console.log('error: ', error);
                else {
                    resolve(body);
                }
            });
        }).then((result) => (JSON.parse(result) || {}));
        return promise;
    };

    loadArticlesFromFileAsync() {
        const promise = new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        }).then((result) => JSON.parse(result) || {});
        return promise;
    };

    loadSingleArticleFromFileAsync(name) {
        const promise = new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        }).then((result) => this.extractArticleFromText(result, name));
        return promise;
    };

    extractArticleFromText(text, name) {
        const object = JSON.parse(text) || {};
        const articles = object.articles;
        const article = articles.find(x => x.name === name) || {};
        return article;
    }  
}