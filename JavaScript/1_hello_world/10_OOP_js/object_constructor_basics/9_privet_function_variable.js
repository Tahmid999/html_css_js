
var Rect = function(h,w){
    this.height = h
    this.width = w

    //we can create privet property by creating just variable inside like var or let

    //this object is now privet
    var point = {
        x: 10,
        y: -2
    }

    var random = 500

    // now inside the function this keyword will not work until we bind this on the function
    var print = function(){
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)
    }.bind(this)

    this.test = function(){
        console.log("Method working!")
        console.log("point x: " + point.x + " and point y: " + point.y)
        console.log("random number is: " + random)
        print()
    }
}

var obj1 = new Rect(50,60)
// obj1.print() //not accessable
obj1.test()