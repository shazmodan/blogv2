const express = require('express');
const app = express();
const compression = require('compression')
const ArticleProvider = require('./articleProvider');
const articleProvider = new ArticleProvider();
const cache = require('memory-cache');
const cacheDurationMs = 3600 * 1000; //one hour = 3600s, 1 sec = 1000ms

// Enable gzip compression.
app.use(compression()) 

// Store all static files here.
app.use('/static', express.static('./src/static/', {
  maxAge: 86400000
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const articleUrl = '/api/article/';
app.get(articleUrl + ':name', (req, res) => {
  let url = articleUrl + req.params.name;
  let cachedArticle = cache.get(url);
  if (cachedArticle !== null) {
    res.send(cachedArticle);
    return;
  }

  const promise = articleProvider.loadSingleArticleFromFileAsync(req.params.name);
  //const promise = articleProvider.loadSingleArticleAsync(req.params.name);
  promise.then((result) => {
    if (result === null) {
      res.sendStatus(404);
    }
    cache.put(url, result, cacheDurationMs);
    res.send(result);
  });
});

const articlesUrl = '/api/articles/';
app.get(articlesUrl, (req, res) => {
  let cachedArticles = cache.get(articlesUrl);
  if (cachedArticles !== null) {
    res.send(cachedArticles);
    return;
  }

  const promise = articleProvider.loadArticlesFromFileAsync();
  // const promise = articleProvider.loadArticlesAsync(5);
  promise.then((result) => {
    if (result === null) {
      res.sendStatus(404);
    }
    cache.put(articlesUrl, result, cacheDurationMs);
    res.send(result);
  });
});

// Match everything that does NOT contain a dot (.) (such as .css and .js etc.)
// And let client side router handle it.
app.get(/^[^.]+$/, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('Blog app listening on port 3000!');
});