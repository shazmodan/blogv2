import './css/hljs.css';
import './css/app-style.css';

import riot from 'riot';
import route from 'riot-route';
import hljs from 'highlight.js'

import { loadArticles, loadArticle } from './api-agent.js';

import './article-list.tag';
import './blog-article.tag';
import './raw.tag';
import './loading.tag';

riot.mixin('hljs', hljs);

route.start(true);
route.base('/');

route('/', () => {
    riot.mount('#app', 'article-list', { articles: loadArticles() });
});

route('/*', (slug) => {
    riot.mount('#app', 'blog-article', { article: loadArticle(slug) });
});

route('/*/', (slug) => {
    riot.mount('#app', 'blog-article', { article: loadArticle(slug) });
});