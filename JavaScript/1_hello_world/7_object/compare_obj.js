var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}

console.log(obj1 === obj2) //false because memory address defferent
console.log(obj1 == obj2) //false because memory address defferent

if ((obj1.a === obj2.a) && (obj1.b === obj2.b)) {
    console.log("They are same")
}
else
    console.log("Not same")



console.log(JSON.stringify(obj1)) //all membar converted to string

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) //now true