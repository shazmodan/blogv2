const fetchUrl = require('fetch').fetchUrl;
const Promise = require('promise');

const baseUrl = 'http://localhost:8080';
const articleIndex = '/databases/blog/indexes/articleIndex';

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
}