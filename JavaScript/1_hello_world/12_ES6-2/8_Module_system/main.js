// to use it on html page must use type attribute as module in <script> tag

import Rectangle from "./Rectangle.js"
import Shape from './Shape.js'

//to get all function use * sign
// import * as func from './func.js'

//to use or get specific function use {func_name}
import {mult, div}  from './func.js'

let rect1 = new Rectangle('red', 4, 5)
console.log(rect1.claculate())
rect1.draw()

let shape1 = new Shape("Blue")
shape1.draw()

// console.log(func.add(5,5))
// console.log(func.sub(5,5))
console.log(mult(5,5))
console.log(div(5,5))