function normalSum(a,b,c)
{
    return a+b+c
}

var ans1 = normalSum(10,20,30)
console.log(ans1)


// currying
function curryingSum(a)
{
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


var ans2 = curryingSum(10)(50)(40)
console.log(ans2)