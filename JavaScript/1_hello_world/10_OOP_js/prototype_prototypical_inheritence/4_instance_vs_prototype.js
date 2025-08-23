function Square(w){
    this.width = w

    // this.print = function(){
    //     console.log(this.width)
    // }.bind(this)
    this.getwidth = function(){
        console.log("from getwidth() is: " + this.width)
        // this.print() //accessing prototype membar's data
    }
}

Square.prototype = {
    print: function(){
        console.log(this.width) //prototype can access the instance's membar data similarly vice-versa
        // this.getwidth() //accessing instance membar's data
    },
    toString: function(){
        return "My width is: " + this.width
    }
}

var obj1 = new Square(50)
// obj1.print()
var obj2 = new Square(100)
// obj2.print()

//check web, print() function are copying for each and every object in the memory

// obj1
// obj2
// obj2.toString()

//solution
//now print() function is created as prototype not copy
// obj1.print()
// obj2.toString()
// obj1.getwidth()
obj2.print()

