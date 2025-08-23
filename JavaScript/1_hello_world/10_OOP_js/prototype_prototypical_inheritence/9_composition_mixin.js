
// ...source means rest of all it's ES6 syntex
function mixin(target, ...source){
    Object.assign(target.prototype, ...source)
}

var canEat = {
    eat: function(){
        console.log("Eatting...")
    }
}

var canWalk = {
    walk: function(){
        console.log("Walking...")
    }
}

var canSwim = {
    swim: function(){
        console.log("Swimming...")
    }
}

// canEat and canWalk is now inherited to person object litaral

// var person = Object.assign({}, canEat, canWalk)
// person.name = "Tahmid"
// console.log(person)
// console.log(person.name)
// person.eat()

// for Constructor
function Person(name){
    this.name = name
}

function Fish(name){
    this.name = name
}

// canEat and canWalk is now inherited to Person constructor in prototype

//this will be duplicate for other constructor to prevent this we can make a function that is called mixin
// Object.assign(Person.prototype, canEat, canWalk)
mixin(Person, canEat, canWalk)
mixin(Fish, canEat, canSwim) // without composition mixin it's be tough to inherit this level with raw prototypical inheritance method


var person1 = new Person("Tahmid")
var goldfish = new Fish("Gold Fish")

console.log(person1)
person1.eat()
person1.walk()

console.log(goldfish)
goldfish.eat()
goldfish.swim()
// goldfish.walk()// not work because walk() method are not inherited to Fish