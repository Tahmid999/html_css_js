// Main Class/Parent Class
function Shape(){

}

//main class prototype, this prototype will be inherit to all other classes
Shape.prototype.shape = function(){
    console.log("I am shape method!")
}

// Shape.prototype = {
//     shape: function(){
//         console.log("I am shape method!, I am common method or parent method of every class")
//     }
// }

//Class-1
function Square(w){
    this.width = w
}

//Class-2
function Circle(r){
    this.redius = r
}

//I want to use Shape on Square. So now i have to inherit shape on square
// write now flow is: shape -> Shape -> Object
//                    sqr -> Square -> Object
// But I want      :  sqr -> Square -> Shape -> Object


// Creating Prototypical Inheritance
Square.prototype = Object.create(Shape.prototype)

//check web
console.log(new Square.prototype.constructor()) //but this is Square class or constructor. So it have to show Square {} constructor. Because of inheritated from Shape constructor the defalult constructor replaced by inheritated constructor. it means after inheritance the child class or constructor's all prototype will be reset. to fix this we have to reset constructor to default

// reset constructor to default
Square.prototype.constructor = Square

console.log(new Square.prototype.constructor())



//If we create a new prototype of child class like this or by = sign then all previous inheritance and constructor will be gone, so to fix this problem we have to create child's prototype by . method it's means that this class prototype is now extending not reset.

// Square.prototype = {
//     test: function(){

//     }
// }

// Note: first of all create inheritance then create prototype 
Square.prototype.print = function(){
    console.log("My width is: " + this.width)
}

Square.prototype.test = function(){
    
}


// Creating Prototypical Inheritance
Circle.prototype = Object.create(Shape.prototype)

// before constructor was Shape {}
console.log(new Circle.prototype.constructor())

// after: now constructor reseted to dafault which is Circle {}
Circle.prototype.constructor = Circle
console.log(new Circle.prototype.constructor())

// Flow is: circle -> Circle -> Shape -> Object

Circle.prototype.print = function(){
    console.log("My radius is: " + this.redius)
}

var sqr = new Square(69)
var shape = new Shape()
var circle = new Circle(50)



sqr.print()
sqr.shape()
circle.print()
circle.shape()


// note: more than 3 level inheritance is not recommended or we can say it's not manegable, instead of we can use composition
