var arr = [2,9,7,4,6,3,1,10,13,44]

var find = 11
var isfound = false

for(var i =0; i<arr.length; i++)
{
    if (arr[i] === find) {
        console.log("value found at position: " + (i+1))
        isfound = true
        break
    }
}
if (isfound === false) {
    
    console.log("value not found")
}