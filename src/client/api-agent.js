import 'whatwg-fetch'; 

// export function loadArticles() {

// }

export const loadArticles = () => {
    console.log("fetch loadArticles!", fetch);
    const url = '/api/articles';
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json.articles || {})
        .catch((ex) => {
            console.log('parsing failed', ex)
            return {};
        });
};

export const loadArticle = (name) => {
    const url = '/api/article/' + name;
    return fetch(url)
        .then((response) => response.json())
        .catch((ex) =>  {
            console.log('parsing failed', ex)
            return {};
        });
};
