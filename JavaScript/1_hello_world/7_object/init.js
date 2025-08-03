// var test = {}

// test.x = 5


// console.log(test)
// console.log(typeof test)

var obj = {
    x: 10,
    y: 100
}

obj.y = 1000 //update value
obj.z = 10000

console.log(obj)
console.log(obj.x)

delete obj.y //to delete 
console.log(obj)



var access = 'z'
console.log(obj[access]) //array method to access
console.log(obj['x']) //array method to access


var obj1 = Object()
obj1.a = 50
console.log(obj1)

var obj2 = new Object()
obj2.a = 60
console.log(obj2)

var obj3 = {
    Section: 'A',
    roll: [100,101,102,103,104,106]
}

console.log(obj3["roll"])
console.log(obj3.roll[4])

