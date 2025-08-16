
// don't have user end edit feature
// function calc(a,b)
// {
//     var c = a + b
//     var d = a - b
//     var result = sum(c,d)

//     return result
// }

function calc(a,b, call_back)
{
    var c = a + b
    var d = a - b
    var result = call_back(c,d)

    return result
}

function sum(a,b)
{
    return a+b
}

// var ans = calc(3,4)
// console.log(ans)

var ans2 = calc(3,4, sum)
console.log(ans2)

var ans3 = calc(5,7, function(a,b) { 

    return a-b
})
console.log(ans3)


var ans4 = calc(1,2, function(a,b)
{
    // console.log(a,b) //3 , -1

    return a*b
})

console.log(ans4)