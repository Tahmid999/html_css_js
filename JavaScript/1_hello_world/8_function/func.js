function hello()
{
    console.log("Hello, I am a function")
}

function add()
{
    var a = 5, b =10
    console.log(a+b)
}

function add2(a,b)
{
    var result = a + b
    return result
}

function arrSum(arr)
{
    var sum =0
    for(var i=0; i<arr.length; i++)
    {
        sum += arr[i]
    }
    console.log(sum)
}

hello()
add()
console.log(add2(10,10))


var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]
var arr3 = [11,12,13,14,15,16]

arrSum(arr1)
arrSum(arr2)
arrSum(arr3)