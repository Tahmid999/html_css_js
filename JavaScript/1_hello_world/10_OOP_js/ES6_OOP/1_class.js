// all method or functions are under __proto__ but what if i want this under property, then we simply creat that function on constructor by "this.another = function () {}" or out side constructor "function_name = function(){}"


class Reactangle {
    constructor(weidth, height){
        this.weidth = weidth
        this.height = height
        this.another = function(){
            console.log("I am a property method1")
        }
    }

    name = 'Tahmidur Rahman'

    another2 = function(){
        console.log("I am a property method2")
    }

    draw(){
        console.log("I am drawing...")
    }

    calc(){
        let res = ((this.weidth * this.height) * 0.5)
        return res
    }
}

// if i want to implement a function of a class in outside then i can implement like this
Reactangle.prototype.print = function() {
    console.log("I am print function")
}

let react1 = new Reactangle(5,4)
react1.draw()
console.log(react1.calc())

console.log(react1.name)
react1.another()
react1.another2()

react1.print()