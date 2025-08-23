
// 1st letter of a constructor pattern declareation should be capital, this is a normal name convention practice 

var Rect = function(h,w){
    this.height = h
    this.width = w

    this.print = function(){
        console.log("My height is: " + this.height)
        console.log("My width is: " + this.width)
    }

    this.test = function(){
        console.log("Method working!")
        this.print()
    }
}

//without new keyword it will show error because constructor not returning any object like before and inside constructor have this keyword and we know this keyword is for object but constructor not returning object like before. So, we have to use new keyword before creating any object of that constructor

//basically new keyword create an empty object, then bind that empty object to the constructor's function. That's why this keyword works then
var rect1 = new Rect(10,30) 
rect1.test()
var rect2 = new Rect(100,500)
rect2.test()