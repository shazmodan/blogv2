const contentful = require('contentful') //FIXME to ES6

const filePath = __dirname + '/contentful_ACCESS_TOKEN.json';

const loadContentfulConfiguration = () => {
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

const getContentfulClient = () => {

    const configuration = loadContentfulConfiguration();

    const client = contentful.createClient({
        space: configuration.spaceId,
        accessToken: contentDeliveryApiAccessToken,
    })

    return client;
}

const getEntries = () => {
    const client = getContentfulClient();
    console.log('\x1b[32m Fetching entries ... \x1b[32m')

    client.getEntries()
        .then((response) => {
            console.log('\x1b[32m Here are the first 100 entry IDs of your space .\n')
            console.log(response.items.map((item) => '\x1b[32m \t> ' + item.sys.id).join('\n'))
            console.log('\n \x1b[32m Want to go further? Feel free to check out this guide: \x1b[34m\x1b[4mhttps://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/')
            return response.items;
        })
        .catch((error) => {
            console.log('\x1b[31merror occured')
            console.log(error)
            return {};
        })
}


