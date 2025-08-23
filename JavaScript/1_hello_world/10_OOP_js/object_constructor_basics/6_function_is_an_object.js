function proof(){
    console.log("Function is an object in javascript")
}

proof.constructor
console.log(proof.name, proof.length)

var Rect = new Function('h', 'w', `this.height = h
    this.width = w

    this.print = function(){
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)
    }

    this.test = function(){
        console.log("Method working!")
        this.print()
    }`
)

var obj1 = new Rect(4,5)
obj1
obj1.test()

