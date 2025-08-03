function test(a,b,c)
{
    console.log(arguments)
    for(var i =0; i<arguments.length; i++)
    {
        console.log(arguments)
    }
    // console.log(JSON.stringify(arguments))
}

function sum()
{
    var sum = 0
    for(var i=0; i<arguments.length; i++)
    {
        sum += arguments[i]
    }
    console.log(sum)
}

test()
test(10,20,30)
sum(10,20,30,40,50,60,70)
sum(10,20,30)

//unlike the other language js don't need to decliar the number of parameter, js will automatically count, and we can get those value by arguments object