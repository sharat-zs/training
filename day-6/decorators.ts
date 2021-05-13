import 'reflect-metadata'

/* eslint-disable no-param-reassign */
export class Person {
    @format('hello, %s')
    dummy: string

    constructor(readonly name: string, readonly age: number) {
        this.greet = this.greet.bind(this)
        this.dummy = 'dummmy'
    }

    @log()
    greet() {
        const formatString = getFormat(this, 'dummy')
        return formatString.replace('%s', this.dummy)
    }
}

function log() {
    return function (
        _target: any,
        _propertyName: any,
        descriptor: TypedPropertyDescriptor<() => string>
    ) {
        const method = descriptor.value
        if (!method) throw new Error('Should never happen, method not defined')
        descriptor.value = function () {
            console.log('method called')
            const res = method.call(this)
            return res
        }
    }
}

function format(formatString: string) {
    const formatMetadataKey = 'Format'
    return Reflect.metadata(formatMetadataKey, formatString)
}

function getFormat(target: any, propertyKey: string) {
    const formatMetadataKey = 'Format'
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
}

const person = new Person('harry', 18)
console.log(person.greet())
