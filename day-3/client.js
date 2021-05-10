const http = require('http')

http.get({ protocol: 'https', host: 'example.com', path: '/' }, (res) => console.log(res))
