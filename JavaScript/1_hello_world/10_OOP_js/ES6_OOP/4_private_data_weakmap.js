
// in this case we can simply make a weakmap of that function or variable to make private, then in this case we have to work with weakmap property to set or get data

const _redius = new WeakMap()
const _print = new WeakMap()
class Circle{
    constructor(redius){
        _redius.set(this, redius)

        // must use arrow function to get or work with that private data in private method
        _print.set(this, () => {
            console.log(_redius.get(this))
        })
    }


    test(){
        console.log("I am test function")
        _print.get(this)()
    }
}

let circle1 = new Circle(5)
// console.log(circle1.redius) //not accessable
// circle1.print() //not accessable

circle1.test()

