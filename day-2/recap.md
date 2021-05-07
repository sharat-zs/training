## Hello World

console.log('hello world')

## Data Types

boolean, string, number, object, function, undefined, null

- boolean: true/false
- string: 'abc', "abc"
- number: 1, 1.00
- object: {a: 'b'}, Object.create({})

## Objects

```
let user = {
    firstName: 'harry'
    lastName: 'potter'
}
```

## Declaring Variables

```
let x = 5
const y = 5

// Older way
var z = 5
```

## Functions

Functions are like any other objects and can be passed around, returned like any
other objects

```
function hello(message) {
    console.log(message)
}
```

let hello = function(message){ console.log(message) }

```
const hello = (message) => console.log(message)

```

If we pass more number of arguments than declared in function definition, the
extra arguments are ignored

```
function hello(message){
    console.log(message)
}
hello('world', 'anything') //'anything' is ignored

```

If we pass less number of arguments than declared in function definition, the
arguments not passed are treated as undefined

```
function hello(message){
    console.log(message)
}
hello() // prints undefined

```

## Array

Arrays are also objects in javascript 
```
let arr = [1, 2, 3, 4,5]
arr.push(6)
```