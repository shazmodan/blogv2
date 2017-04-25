import riot from 'riot';
import route from 'riot-route';
import hljs from 'highlight.js'

import { loadArticles, loadArticle } from './api-agent.js';

import './article-list.tag';
import './blog-article.tag';
import './raw.tag';

// const monkey = {
//     sayHello: function() { console.log("hello monkey") }
// };

// riot.mixin('monkey', monkey);

riot.mixin('highlight', hljs);

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