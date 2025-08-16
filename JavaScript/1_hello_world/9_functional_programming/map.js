var arr = [45,90,60,30]

var sqrarr = arr.map(function(value, indx, arr)
{
    return (arr[indx] * arr[indx])
})

console.log(arr)
console.log(sqrarr)


// implemantation

// function mymap(arr, call_back)
// {
//     var res = []
//     for(var i =0; i < arr.length; i++)
//     {
//         var temp = arr[i] * arr[i]
//         res.push(temp)
//     }
//     return res
// }

// console.log(arr)
// console.log(mymap(arr))

// what if i want other calculation instead of square??, yes make call_back function that particular point where user need to edit

function mymap(arr, call_back)
{
    var res = []
    for(var i=0; i<arr.length; i++)
    {
        var temp = call_back(i)
        res.push(temp)
    }
    return res
}

var qube = mymap(arr, function(indx)
{
    // return (val * val * val)
    return (arr[indx] * arr[indx] * arr[indx])
})

console.log(arr)
console.log(qube)

var power_factor = mymap(arr, function(indx)
{
    return (Math.cos(arr[indx])) // pf = cos(theta)
})

console.log(arr)
console.log(power_factor)

