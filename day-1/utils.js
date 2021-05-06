const x = [1, 2, 3, 4]

// map, filter, reduce, indexOf, find, findIndex
const y = x.reduce((prevVal, currentVal) => prevVal + currentVal, 0)

console.log(x.findIndex(i => { i === 3; return undefined }))
