
function extend(Parent, Child){
    // create inheritance
    Child.prototype = Object.create(Parent.prototype)
    // reset constructor to default
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}

Shape.prototype.shape = function(){
    console.log("I am shape method!")
    console.log("My color is: " + this.color)
}

function Square(h,color){
    // Shape.call(this, color)
    // Shape.apply(this, [color])
    var getcolor = Shape.bind(this)
    getcolor(color)
    this.height = h
}

function Circle(r,color){
    Shape.call(this, color)
    this.radius = r
}

// same thing duplicateing for another class or constructor, instead of doing same thing over and over we can create a function that can create inheritance and reset the constructor this is called extend function
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

extend(Shape, Square)
extend(Shape, Circle)

Square.prototype.print = function(){
    console.log("My height is: " + this.height)
}
Circle.prototype.print = function(){
    console.log("My radius is: " + this.radius)
}

//this topic is called parent method overrideing
Circle.prototype.shape = function(){
    Shape.prototype.shape.call(this)
    console.log("I am shape from Shape and i am overriddene")
}

var sqr = new Square(55, 'Yellow')
var circle = new Circle(20, "Red")

sqr.print()
sqr.shape()
circle.print()
circle.shape()