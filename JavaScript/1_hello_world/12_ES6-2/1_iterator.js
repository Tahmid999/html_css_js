// iterator nothing but an object that have next method and it can return value and go to the next iteration


const arr = [1,5,3]

// i can't control this iteration, once it start it will iterate till end of the logic
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }

//custom iterator function/method with old js

// function createIterator(collection)
// {
//     let i = 0
//     return{
//         next(){
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)
// console.log(iterate)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

//above this portion is too much hard

//custom iterator function/method with new es6 js, because in es6 every iterable object have iterator property inbuild.

//not all objects are by default iterable spacelly actual obj like "let obj = {}", but every objects are iterable if we somehow add Symbol.iterator property on that object

let iterate = arr[Symbol.iterator]() //cheking this object is iterable or not
console.log(iterate)

let str = 'TOM'
let iterate_txt = str[Symbol.iterator]()
console.log(iterate_txt)

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

console.log(iterate_txt.next())
console.log(iterate_txt.next())
console.log(iterate_txt.next())
console.log(iterate_txt.next())
