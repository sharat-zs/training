class Person {
    constructor(name) {
        this.name = name
    }
}

function PersonFunc(name) {
    this.name = name
}

const obj = new Person('harry')
const objFunc = new PersonFunc('harry')

const somethingPrivate = () => {
    // do something
}

class Employee extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
        this._age = age
        somethingPrivate()
    }

    get designation() {
        return this.age
    }

    set designation(val) {
        this.designation = val
    }

    static isActive(name) {
        return true
    }
}

function createEmployee(Clss) {
    return new Clss()
}

const employee = createEmployee(Employee)

Employee.isActive('harry')

const emp = new Employee('harry', 23)

module.exports = Employee
