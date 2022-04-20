// create by object literal
const person1 = {name: 'mark', age: 39}
console.log(person1)
// person1 is not "object" type
// person1 is "{name:string, age:number}" type.

// crate by Object.create
const person2 = Object.create({name:'mark', age:39})
console.log(person2)