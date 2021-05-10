// timeout
// console.log('hello')
// setTimeout(() => {
//     console.log('timer executed')
// }, 0)
// console.log('world')

// // setImmediate
// console.log('hello')
// setImmediate(() => {
//     console.log('timer executed')
// })
// console.log('world')

// nextTick
// console.log('hello')
// setTimeout(() => {
//     console.log('timer executed')
// }, 0)
// process.nextTick(() => console.log('next tick'))
// console.log('world')

// nextTick
// console.log('hello')
// const timer = setTimeout(() => {
//     console.log('timer executed')
// }, 0)
// process.nextTick(() => clearTimeout(timer))
// console.log('world')

// setInterval
setInterval(() => {
    console.log('hello')
}, 1000)
