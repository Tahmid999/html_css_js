var arr = [ 
    [2,1,5,6], 
    [41,25,87,96], 
    [9,7,2,30], 
    [4,2,3,6] 
]

for(var i=0; i<arr.length; i++)
{
    var str = ""
    for(var j=0; j<arr[i].length; j++)
        {
        str += arr[i][j] + " "
    }
    console.log(str)
    // console.log()
    str = ""
}