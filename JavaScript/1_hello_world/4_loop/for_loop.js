// for (var i=0; i<100; i++) {
//     console.log((i+1))
// }


var sum =0
var str = ''
for(var i =1; i<=10; i++) {
    // console.log(i + ' + ')
    sum += i
    str += i

    if (i < 10) {
        
        str += " + "
    }
    
    if (i==10) {
        console.log(str + " = " + sum)
    }
}
