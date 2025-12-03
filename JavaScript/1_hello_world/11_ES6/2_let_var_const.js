// const a = 10
// a = 100 // not changeable
// console.log(a)


if(true){
    var x = 50
}
console.log(x) // accessable

//but, if we declare variable by let then we can't get access of that variable outside the statement as like other language.
if (true) {
    let y = 100
    console.log(y)
}

// console.log(y) //not accessable

//before let we used an altenative that is EEFe
(function(){
    var a = 10
    console.log(a)
})()

console.log(a)