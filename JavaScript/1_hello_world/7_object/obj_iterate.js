var obj = {
    a: 50, b:60, c:70, d:80
}

console.log('a' in obj) //is a is available in obj?

for(var i in obj)
{
    console.log(i)
    console.log(obj[i])
}

for(var i in obj) 
{
    if (i == 'a') {
        console.log("Yes found")
    }
}