var obj = {
    height: 10,
    width: 50,

    print: function()
    {
        console.log("Hello, i am print method")
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)

    }

}

obj.print()