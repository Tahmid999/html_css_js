
// long process
// function add(){
//     let sum = 0

//     for(let i=0; i<arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(add(1,2,3,4,5))

// Rest and spread operator. one thing rest operator shound be assign on as last parameter of a function, otherwise it will show an error
function add(...rest){
    // let sum = 0
    // for(let i =0; i<rest.length; i++){
    //     sum += rest[i]
    // }
    // return sum

    // console.log(Object.getPrototypeOf(a)) // rest operator allow all array method

    return rest.reduce((a,b) => a+b)

}
console.log(add(1,2,3,4,5))

let arr = [1,3,5]
console.log(arr)
console.log(...arr) // outside the function it will become spread operator

//copy object with referance
let obj = {
    a: 10,
    b: 50,
    c: 60,
    name: `Tahmid`
}

let obj2 = obj
obj2.a = 1000
console.log(obj2 === obj) //ture
console.log(obj.a) // it will change the key value of parent obj


//copy object without referance by using spread operator
let obj3 = {
    ...obj
}
obj3.name = 'Siam'

console.log(obj3 === obj) //false
console.log(obj3)
console.log(obj.name) // it will not change the key value of parent obj