import riot from 'riot';
import route from 'riot-route';
import './app.tag';
import './article-list.tag';
import './blog-article.tag';

riot.mount('*');

route.start(true);
route.base('/');

route('/', () => {
    riot.mount('#app', 'article-list');
});

route('/*', () => {
    riot.mount('#app', 'blog-article');
});

route('/*/', () => {
    riot.mount('#app', 'blog-article');
});