let arr = [1,2,3,5]

let sqrarr = arr.map(v => v*v)

console.log(sqrarr)

function assyncMap(arr, callback){
    return arr.map(v => {
        setTimeout(() => callback(v), 0)
    })
}

let quibarr =assyncMap(arr, function(v){
    console.log(v)
}) 
console.log(quibarr)