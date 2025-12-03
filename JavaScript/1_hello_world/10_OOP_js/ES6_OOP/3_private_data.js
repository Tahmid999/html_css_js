
// which function or variable i want private just make a symbol of them and in the class declare that variable or function in [_name]

const _redius = Symbol()
const _print = Symbol()
class Circle{
    constructor(redius){
        this[_redius] = redius
    }

    [_print](){
        console.log("I am print function")
    }

    test(){
        console.log("I am test function")
    }
}

let circle1 = new Circle(5)
// console.log(circle1.redius) //not accessable
// circle1.print() //not accessable

//but by this way it's not fully private i can even access this
let key = Object.getOwnPropertySymbols(circle1)[0]
console.log(key)
console.log(circle1[key]) // :)
