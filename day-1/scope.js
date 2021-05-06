function createHello() {
    const greeting = 'hello'
    return function (name) {
        return {
            dummmy: greeting + name
        }
    }
}

