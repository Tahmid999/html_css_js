
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

    //okey but not recommended
    this.getmethod = function(){
        console.log(point)
    }
    this.setmethod = function(x, y){
        point.x = x
        point.y = y
        return point
    }

    //instead of above we can use this for get and set
    Object.defineProperty(this, 'point', {
        get: function(){
            return point
        },
        set: function(value){
            point = value
        }
    })
}

var obj1 = new Rect(50,60)
// obj1.print() //not accessable
obj1.test()
// obj1.getmethod()
// console.log(obj1.setmethod(100,-500))
// obj1.test()

obj1.point = {
    x: 50,
    y: -26
}
console.log(obj1.point)