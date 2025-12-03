// set is a DSA, which can carry only unique data not dublicate data allowed in set

let set = new Set([5,2,1])
set.add(3)
set.add(0)
set.add(2) //dublicate
set.add(1) //dublicate

console.log(set)
console.log(set.size)

set.delete(0)
console.log(set)

console.log(set.has(5)) // cheking 5 has on this set or not


console.log(set.keys())

let it = set.keys()

console.log(it.next())
console.log(it.next())

//set is iterable
for(let v of set){
    console.log(v)
}
