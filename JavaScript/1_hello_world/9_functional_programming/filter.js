var arr = [2,3,5,7,13,12,8,17,15,20]

var ans = arr.filter(function(val)
{
    return ((val % 2) === 0)
})

console.log(arr)
console.log(ans)

// implimentation

// normal abstruct function
// function myFilter(arr)
// {
//     var res = []
//     for(var i = 0; i< arr.length; i++)
//     {
//         if (arr[i] % 2 === 1) {
            
//             res.push(arr[i])
//         }
//     }
//     return res
// }

function myFilter(arr, call_back)
{
    var res = []
    for(var i = 0; i< arr.length; i++)
    {
        if (call_back(arr[i])) {
            
            res.push(arr[i])
        }
    }
    return res
}

var ansOdd = myFilter(arr, function(val)
{
   return val % 2 === 1
})

console.log(arr)
console.log(ansOdd)

var filtereven = myFilter(arr, function(val)
{
    return val % 2 === 0
})

console.log(filtereven)