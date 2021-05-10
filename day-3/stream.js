const Stream = require('stream')

// const readableStream = new Stream.Readable({
//     read() { }
// })

// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')

const duplex = new Stream.Duplex()

const transform = new Stream.Transform()
transform._transform = (chunk, encoding, callback) => {
    console.log(chunk.toString().toUpperCase())
    callback()
}
transform.push('hi')
transform.end()

// readableStream.on('readable', () => {
//     console.log(readableStream.read().toString())
// })
