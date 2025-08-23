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
// obj2.print()

//check web
console.log(obj1.hasOwnProperty('width')) //true
console.log(obj2.hasOwnProperty("getwidth")) //true
console.log(obj2.hasOwnProperty("print")) //false, because print function is a parent property of Square object

console.log(Object.keys(obj1))
console.log(Object.keys(Square.prototype))

//to get all method prototype use for in loop
for(var i in obj1){
    console.log(i)
}

