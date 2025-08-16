function sum(a,b)
{
    return a+b
}

function ran(a, b , func)
{
    var c = a + b
    var d = a - b

    // function muiltiply(a, b)
    // {
    //     var e = func(a,b)
    //     return (c*d*e)
    // }

    return function(){
        var e = func(a,b)
        return c*d*e
    }
}

var muilt = ran(5, 4, sum)
console.log(muilt())



