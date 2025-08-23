
//working like as class, factory pattern
var createRect = function(h,w){
    return {
        height: h,
        width: w,

        print: function(){
            console.log("My height is: " + this.height)
            console.log("My width is: " + this.width)
        },

        test: function(){
            console.log("Method working!")
            this.print()
        }
    }
}

var obj1 = createRect(10,20)
obj1.test()

var obj2 = createRect(100,300)
obj2.test()