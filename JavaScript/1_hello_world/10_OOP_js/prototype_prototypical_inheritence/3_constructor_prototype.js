var Person = function(name){
    this.name = name
}

var obj1 = new Person("Tahmid")

//check browser
console.log(Person.prototype) 
console.log(Object.getPrototypeOf(obj1) === Person.prototype)

Person.prototype.myName = "Tahmidur Rahman" //this myName value is now applicable for all object of Person
console.log(Person.prototype)
var obj2 = new Person("Siam")
console.log(Object.getPrototypeOf(obj2))

var arr = []
console.log(Object.getPrototypeOf(arr))
console.log(Object.getPrototypeOf(arr) === Array.prototype)

Array.prototype.myFunc = function(){} //this will avaiable for all arr because in js all things are act as object
console.log(Object.getPrototypeOf(arr))

var arr2 = []
console.log(Object.getPrototypeOf(arr2))

