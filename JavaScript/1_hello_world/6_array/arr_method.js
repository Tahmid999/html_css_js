var arr = [8,4,6,9]
var arr2 = [10,9,7,5]

console.log(arr)
console.log(arr.join(" | "))

// arr.fill("goru")
// arr.fill(true)
console.log(arr)

var arr3 = arr.concat(arr2)
console.log(arr3)
console.log(Array.isArray(arr3))



var a = [10,9,8]
// var b = a // it will copy value with the referance
// b[1] = 100
// console.log(a)
// console.log(b)

var b = Array.from(a) //copy a array without referance
b[1] = 100
console.log(a)
console.log(b)



