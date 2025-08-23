function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}


function Shape(color){
    this.color = color
}

Shape.prototype.common = function(){
    console.log(this.color)
    console.log("I am common method!")
}

function Square(w,color){
    Shape.call(this, color)
    this.width = w
}

function Circle(r, color){
    Shape.call(this, color)
    this.radius = r
}

extend(Shape, Square)
extend(Shape, Circle)

Square.prototype.common = function(){
    console.log("I am common from square and i am overriden")
}
Circle.prototype.common = function(){
    console.log("I am common from circle and i am overriden")
}

Square.prototype.print = function(){
    console.log(this.width)
}
Circle.prototype.print = function(){
    console.log(this.radius)
}


var sqr = new Square(50, "Ash")
var circle = new Circle(10, 'red')

// sqr.print()
// sqr.common()
// circle.print()
// circle.common()

var s = new Square(100, 'Green')
var c = new Circle(20, "yellow")
var shape = new Shape("Red")

var arr = [shape,s,c]
for(var i of arr){
    i.common()
}

console.log(c instanceof Circle)
console.log(c instanceof Shape)
console.log(c instanceof Square)
console.log(s instanceof Square)
console.log(shape instanceof Shape)


