let x = {}
let y = { firstName: undefined, lastName: undefined }
let z = { firstName: 'harry', lastName: 'potter', parents: { father: 'james' } }

let a = Object.create({})
z = Object.create(y)
z.parents = { father: 'james' }

console.log(z.parents.father)
console.log(y['firstName'])