var obj = {}

var obj1 = new Object()

obj.__proto__ === obj1.__proto__ //will show true in console

Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj1) //same

var arr = []

//arr --> Array(0) --> Object() //muilti level inheritance