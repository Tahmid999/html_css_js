
//parent class
class Shape {
    constructor(color)
    {
        this.color = color
    }

    draw(){
        console.log("I am draw method!")
        console.log(this.color)
    }
}


//child class, for inheritance just write "extra Parent_class_name" after child class name
// also in constructor use super() fuction before child constructor veriable declare
class Rectangle extends Shape{
    constructor(color, height, weight) {
        super(color)
        this.height = height
        this.weight = weight
    }

    //i can also make method or function overriding
    draw(){
        console.log("I am draw from Rectangle")
    }

    claculate(){
        return 0.5 * (this.height * this.weight)
    }
}

class Circle extends Rectangle {
    constructor(radius){
        super()
        this.radius = radius
    }

    calc(){
        return 3.1416*this.radius*this.radius
    }
}

let rect1 = new Rectangle('red',5,4)
console.log(rect1.claculate())
rect1.draw()

let shape1 = new Shape('yellow')
shape1.draw()

let c1 = new Circle(4.5)
c1.draw()