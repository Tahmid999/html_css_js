function base(b)
{
    // function power(p)
    // {
    //     var result = Math.pow(b,p)
    //     return result
    // }


    // we can direct return the function
    return function(p)
    {
        var result = Math.pow(b,p)
        return result
    }
}

var ans = base(2)
console.log(ans(3)) //2^3
console.log(ans(10)) //2^10
console.log(ans(0)) //2^0
console.log(ans) //2^0