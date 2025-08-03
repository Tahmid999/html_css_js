var addition = function(x,y){
    return (x+y)
} //annonymous function

setTimeout(function(){
    console.log("after 3 sec ")
}, 3000)

// var temp = addition
// console.log(temp(30,20))

var temp = addition(30,20)
console.log(temp)

