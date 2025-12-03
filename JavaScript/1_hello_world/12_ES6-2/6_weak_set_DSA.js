// if we import an object in a set and after that i suppose to be delete an object then in set this object not gonna be remove, it's will create a problem of memory leackge. To solve this problem here come weakset and we can only import objects on the weakset. and weakset have only 3 methods and it's not iterable

let a = {a: 10, b: 20}, b = {c: 30, d: 40}

// let set = new Set([a,b])
// console.log(set)

// a = null

// console.log(set) // even we make a null but it even accessable on set

// //profe of accessable
// let arr = [...set]
// console.log(arr)
// console.log(arr[0])



// here is the solve
let set_weak = new WeakSet([a,b]) //only take objects
console.log(set_weak)
a = null
console.log(set_weak.has(a)) //now it's removed
console.log(set_weak.has(b))
console.log(set_weak)



