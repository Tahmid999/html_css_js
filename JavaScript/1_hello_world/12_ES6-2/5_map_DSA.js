// map is a DS that have key and value pair and in js object have also key and value but we can't let anything be key. In map DS we can let anything as key like number, letter, bullian whatever


let map = new Map([
    ['a', 10],
    ['b', 20],
    [true, 30]
])

map.set('c', 40)
map.set({name:"Tahmid"}, 50) //we can set keys as object bull whatever in map

console.log(map)  
console.log(map.size)

map.delete('c')
console.log(map)

console.log(map.get(true))
console.log(map.get('b'))

console.log(map.has('b'))

console.log(map.keys())
console.log(map.values())

for(let [k,v] of map)
{
    console.log([v,k])
}

map.forEach((v,k) => {
    console.log(k,v)
})



