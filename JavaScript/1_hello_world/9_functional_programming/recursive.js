
function sum(n)
{
    if (n === 0) {
        return 0
    }
    return (n + sum(n-1))
}


console.log(sum(10))


// factorial of a number

function fact(n)
{
    if (n===0) {
        return 1
    }
    return (n * fact(n-1))
}

console.log(fact(5))
console.log(fact(6))
console.log(fact(7))


//sum of an array's element
var arr = [2,6,5,4,9,-20,6]

function arrSum(arr, lastindx)
{
    if (lastindx === 0) {
        return arr[lastindx]
    }
    return (arr[lastindx] + arrSum(arr, lastindx-1))
}

console.log(arrSum(arr, arr.length-1))