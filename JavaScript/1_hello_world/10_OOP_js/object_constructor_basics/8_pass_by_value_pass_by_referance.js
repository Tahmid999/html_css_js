
//pass by value or call by value
var a = 20
function change(a){
    a = a + 50
    console.log(a)
}

change(a)
console.log(a)


//pass by referance or call by referance
var obj = {
    a: 50,
    b: 30
}

function change2(obj){
    obj.a += 50
    obj.b += 20
    console.log(obj) 
}

change2(obj)
console.log(obj.a)
console.log(obj.b)