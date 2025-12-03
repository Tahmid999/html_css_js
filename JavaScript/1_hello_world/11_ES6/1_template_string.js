// var name = "Tahmidur Rahman
// muhtadee
// " //not work

// var new_template_str = `Hey, 
//       what's going

//     on guess!`

// console.log(new_template_str)
// console.log(new_template_str.trim())

var age = 20
var name = `Tahmidur Rahman`

// ${} inside brcket we can do ternary operation and can call function or can use variable

console.log("My name is " + name + " and I am " + age + " years Old!")

console.log(`My name is ${name} and I am ${age} years old!`)

console.log(`My name is ${name} and I am ${age} years old!. I am ${age <=17 ? `not` : ``} adult.`)

console.log(name.padStart(20, '*'))
console.log(name.padEnd(20, '@'))
console.log(name.repeat(3))
