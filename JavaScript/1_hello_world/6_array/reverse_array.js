var arr = [4,8,7,2,1,3,5]

var s = 0
var e = arr.length-1
var temp

while (s<=e) {
    temp = arr[s]
    arr[s] = arr[e]
    arr[e] = temp
    s++
    e--
}

// arr.reverse();

console.log(arr)