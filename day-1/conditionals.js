const x = { a: 'b' }
const y = { a: 'b' }
const z = x
const val = 0
function doSomething() {
    console.log('exec')
    return { a: 'b' }
}

if (true && doSomething()) {
    console.log('truthy')
} else {
    console.log('falsy')
}


