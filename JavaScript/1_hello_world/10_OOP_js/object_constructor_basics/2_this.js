var obj = {
    height: 10,
    width: 50,
    
    test: function(){
        console.log("this is test function")
        this.print()
    },

    print: function()
    {
        console.log("Hello, i am print method")
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)

    }

}

obj.test()

function random(){
    console.log(this)
    obj.print()
}

// random() // will show window object
// new random() // will show random function as object

var obj2 = {
    height: 40,
    width: 100,

    print2: obj.print
}

console.log(obj2)
obj2.print2()