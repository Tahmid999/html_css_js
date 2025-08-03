var arr = [3, 9, 8, 4, 1, 10]

// arr.push(15) //add value to last index
// arr.unshift(15) // add value to first index
arr.splice(2, 0, 15) // add value to any position 

// arr.pop() // delete last value
// arr.shift() //delete first vlaue
arr.splice(3,1) //delete value at any position

console.log(arr)