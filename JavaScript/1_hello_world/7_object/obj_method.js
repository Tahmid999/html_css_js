var obj = {
    x: 10, y:20, z:30, A: 40
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//copy object
// var obj2 = obj
// obj2.y = 100 //by this process it will change both y value like array

// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({}, obj)
obj2.y = 100

console.log(obj)
console.log(obj2)