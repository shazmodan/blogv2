import 'whatwg-fetch'; 
  
const apiUrl = '/api/';

const loadArticles = () => {
    console.log("fetch", fetch);
    const url = apiUrl + 'articles';
    const promise = new Promise((resolve, reject) => {
        fetch(url, (error, meta, body) => {
            if (error) console.log('error: ', error);
            else {
                resolve(body);
            }
        });
    }).then((result) => (JSON.parse(result) || {}));
    return promise;
};

const loadArticle = (name) => {
    const url = apiUrl + 'article/' + name;
    const promise = new Promise((resolve, reject) => {
        fetch(url, (error, meta, body) => {
            if (error) console.log('error: ', error);
            else {
                resolve(body);
            }
        });
    }).then((result) => (JSON.parse(result) || {}));
    return promise;
};