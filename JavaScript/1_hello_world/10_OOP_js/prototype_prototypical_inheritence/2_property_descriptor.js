var obj = {
    name: "Tahmid"
}

console.log(obj)

for(var i in obj){
    console.log(i)
}

console.log(Object.keys(obj))

var descriptor = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(descriptor)


var getobj = Object.getPrototypeOf(obj)
console.log(getobj)

// Object.defineProperty(obj, 'name', {

//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// obj.name = "tahmidur Rahman" //this will not write or save
