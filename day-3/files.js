const fs = require('fs')
const fsp = require('fs/promises')

fs.readFile('./day-3/dummy.txt', (err, data) => {
    console.log(data.toString())
})

async function readFile(path) {
    const fileData = await fsp.readFile(path)
}
