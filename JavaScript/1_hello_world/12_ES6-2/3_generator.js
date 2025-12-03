// by generator function we can make an object iterable
// simple just after function keyword add *

// by default normal object is not iterable but now we make it iterable by generator function
let obj = {
    start: 10,
    end: 12,

    [Symbol.iterator]: function* (){
        let currentValue = this.start
        while(currentValue <= this.end)
        {
            yield currentValue++ //yield means pause
        }
    }
}

let it = obj[Symbol.iterator]()

console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

//more example

let arr = [10,20,30]

// function * generator(){
//     yield 1
//     yield 2
//     yield 3
// }

// let it2 = generator()

// console.log(it2.next())
// console.log(it2.next())
// console.log(it2.next())
// console.log(it2.next())


function* generator(collection){
    for(let i =0; i< collection.length; i++)
    {
        yield collection[i]
    }

    // experiment purpose
    // for(let v of collection)
    // {
    //     yield v
    // }
}


let it3 = generator(arr)

console.log(it3.next())
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())