import riot from 'riot';
import route from 'riot-route';
import './article-list.tag';
import './blog-article.tag';

riot.mount('*');

route.start(true);
route.base('/');

route('/', () => {
    riot.mount('#app', 'article-list');
});

route('/*', (slug) => {
    riot.mount('#app', 'blog-article', { articleName: slug });
});

route('/*/', (slug) => {
    riot.mount('#app', 'blog-article', { articleName: slug });
});