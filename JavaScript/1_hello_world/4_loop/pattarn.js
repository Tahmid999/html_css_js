var n = 5

for(var i =1; i<=n; i++) {

    var str = ""

    for(var j = 1; j<=i; j++) {
        str += j + ' ' //for print in a single line
    }
    console.log(str)
}
console.log()
for(var i =n; i>=1; i--) {
    var str = ""
    for(var j=1; j<=i; j++) {
        str += j + ' '
    }
    console.log(str)
}