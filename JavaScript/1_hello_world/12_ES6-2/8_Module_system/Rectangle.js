import Shape from "./Shape.js"

class Rectangle extends Shape {
    constructor(color, height, weight)
    {
        super(color)
        this.height = height
        this.weight = weight
    }

    draw(){
        console.log("I am draw from Rectangle")
    }

    claculate(){
        return 0.5 * (this.height * this.weight)
    }
}

export default Rectangle