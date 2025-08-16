// First Class Function
function sum(a, b)
{
    return a+b
}

// 1. A Function can be Stored in a Variable
var ans = sum

console.log(ans(5,5))

console.log(sum(5,5))

// 2. A Function can be Stored in an Array
var arr = [ans, 1, 5]

console.log(arr)
console.log(arr[0](6,6))


// 3. A Function can be Stored in an Object
var obj = {
    fun: sum,
    x: 100
}

console.log(obj)
console.log(obj.fun(10,10))
console.log(obj["fun"](10,10))


// // 4. We can Create Function as Need
setTimeout(function () {
    console.log("hello i am here ...")
}, 200)



// 5. We can Pass Function as an Arguments

// 6. We can return Functions from Another Function