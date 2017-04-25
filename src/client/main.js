import riot from 'riot';
import route from 'riot-route';

import { loadArticles, loadArticle } from './api-agent.js';

import './article-list.tag';
import './blog-article.tag';

// var monkey = {
//     sayHello: function() { console.log("hello monkey") }
// };

// riot.mixin('monkey', monkey);

route.start(true);
route.base('/');

route('/', () => {
    riot.mount('#app', 'article-list', { loadArticles: loadArticles });
});

route('/*', (slug) => {
    riot.mount('#app', 'blog-article', { articleName: slug, loadArticle: loadArticle });
});

route('/*/', (slug) => {
    riot.mount('#app', 'blog-article', { articleName: slug, loadArticle: loadArticle });
});