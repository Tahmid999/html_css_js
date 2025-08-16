var arr = [1,2,55,3,4,5]

var sum = arr.reduce(function(prev, current)
{
    return prev + current
}, 100)

console.log(sum)

var max = arr.reduce(function(prev, current)
{
    return Math.max(prev, current)
})

console.log(max)


// implimentation

function myreduce(arr, call_back, acc)
{
    for(var i = 0; i< arr.length; i++)
    {
        acc = call_back(acc, arr[i])
    }
    return acc
}

var sum1 = myreduce(arr, function(prev, curr)
{
    return prev + curr
}, 100)

console.log(sum1)

var max1 = myreduce(arr, function(prev, curr)
{
    return Math.max(prev, curr)
}, arr[0])

console.log(max1)

var min = myreduce(arr, function(prev, curr)
{
    return Math.min(prev, curr)
}, arr[0])

console.log(min)