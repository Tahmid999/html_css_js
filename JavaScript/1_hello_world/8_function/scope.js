var a = "Tahmid"

if (true) {
    if (true) {
        if (true) {
            var b = "I am b"
        }
    }
}

console.log(a)
console.log(b) //yes i can get access of b, because in js we can create a block by only creating function

function test()
{
    var a = 10
    var y = 100
    function inner()
    {
        var a = 50
        var x = 10
        console.log(a)
        console.log(x)
        console.log(y) //yes access posible
    }
    console.log(a)
    // console.log(x) //no access, because x in a block
    inner()
}
test()
// console.log(y) ////no access, because x in a block
console.log(a)