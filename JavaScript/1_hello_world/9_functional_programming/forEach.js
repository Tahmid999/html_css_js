var arr = [2,5,4,3,6]

var sum = 0

arr.forEach(function(value, index, arr)
{
    console.log(value, index, arr)
    sum += value
})

console.log(sum)


// for each implementation


// this function are hiding from the user
function forEach(arr, call_back)
{
    for(var i =0; i<arr.length; i++)
    {
        // console.log(arr[i])
        call_back(arr[i], i, arr)
    }
}

var sum2 = 0

forEach(arr, function(value, index, arr)
{
    console.log(value, index, arr)
    sum2 += value
})

console.log(sum2)

