var Rect = function(h,w){
    this.height = h
    this.width = w

    this.test = function(){
        console.log("Method working!")
        this.print()
    }

    this.print = function(){
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)
    }
}

// var obj1 = new Rect(50,60)
// obj1.test()

//manually new keyword implementation
function myNew(constructor){
    var emptyobj = {}
    Object.setPrototypeOf(emptyobj, constructor.prototype)
    var argArray = Array.prototype.slice.apply(arguments)
    constructor.apply(emptyobj, argArray.slice(1))

    return emptyobj
}

var obj2 = myNew(Rect, 100, 200)
obj2.test()