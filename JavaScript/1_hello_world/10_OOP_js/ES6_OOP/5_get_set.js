
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


    //get set section
    get redius(){
        // console.log(_redius.get(this))
        return _redius.get(this)
    }

    set redius(r){
        _redius.set(this, r)
    }

}

let circle1 = new Circle(5)
// console.log(circle1.redius) //not accessable
// circle1.print() //not accessable

circle1.test()
circle1.redius = 10
console.log(circle1.redius)

