var arr = [5,7,8,9,1,3,10,15,14,16]

var ans = arr.find(function(val){
    return val === 9
})

console.log(ans)

var ansindx = arr.findIndex(function(val){
    return val === 9
})

console.log(ansindx)


// implimentation
function myfind(arr, call_back)
{
    for(var i = 0; i<arr.length; i++)
    {
        if (call_back(arr[i])) {
            return i
        }
    }
}

var check = myfind(arr, function(val){
    return val === 10
})

console.log(check)

