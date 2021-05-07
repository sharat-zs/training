function Person(name) {
    this.name = name
    this.age = 18
}

const person = Person('harry')

const x = {}
Person.apply(x, ['harry'])

const y = {
    name: undefined,
    Person: function (name) {
        this.name = name
    }
}

// Can't do this
const Arrow = () => {
    this.name = 'harry'
}
new Arrow()
