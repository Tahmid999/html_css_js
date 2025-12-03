let obj = {
    a: 50,
    b: 60
}

// object to array
console.log(Object.entries(obj))

let arrtoObj = [
    ['a', 10],
    ['b', 60]
]

// array to object
console.log(Object.fromEntries(arrtoObj))