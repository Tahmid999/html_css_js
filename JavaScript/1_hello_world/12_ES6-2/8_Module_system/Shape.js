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

export default Shape