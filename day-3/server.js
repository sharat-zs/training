const http = require('http')
const fs = require('fs')
const fsp = require('fs/promises')

const server = http.createServer((_req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    setTimeout(() => res.end('Hello World'), 1000)
})

const fileServer = http.createServer((req, res) => {
    fsp.readFile('./dummy.txt').then((data) => res.end(data))
})

const streamingFileServer = http.createServer((req, res) => {
    const readableStream = fs.createReadStream('./day-3/dummy.txt')
    readableStream.pipe(res)
})

streamingFileServer.listen(3000, () => console.log('server started'))
