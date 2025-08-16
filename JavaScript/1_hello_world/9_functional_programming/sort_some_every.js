var obj = [
    {
        name: "B",
        age: 18
    },
    {
        name: "C",
        age: 20
    },
    {
        name: "A",
        age: 24
    },
    {
        name: "E",
        age: 21
    },
    {
        name: "F",
        age: 19
    },
    {
        name: "D",
        age: 22
    }
]

var arr = [4,5,2,3,6, -8, 1, 3, -4, -5,-1,0, 2, 10]

//normal sort
// arr.sort()
// console.log(arr)

// obj.sort()
// console.log(obj)

//call back function method

arr.sort(function(a,b){

    //if i swap the condition then it will be decending order
    if (a > b) {
        // return 1
        return -1
    }
    else if (a < b) {
        // return -1
        return 1
    }
    else
        return 0
})

console.log(arr)

obj.sort(function(a,b){
    if (a.name > b.name) {
        return 1
    }
    else if (a.name < b.name) {
        return -1
    }
    else
        return 0
})
console.log(obj)

obj.sort(function(a,b){
    if (a.age > b.age) {
        return 1
    }
    else if (a.age < b.age) {
        return -1
    }
    else
        return 0
})
console.log(obj)

//if one element fill the condition then all becomes false
var res1 = arr.every(function(val){
    return val === 5
})
console.log(res1)

//if one element fill the condition then all becomes true
var res2 = arr.some(function(val){
    return val === 5
})
console.log(res2)