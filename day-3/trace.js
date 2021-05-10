function a() {
    b()
}

function b() {
    c()
}

function c() {
    console.trace()
}

a()

setTimeout(() => console.log('executed'), 2000)

