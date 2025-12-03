// same things like weakset
let a = {a: 10, b: 20}, b= {c: 30, d: 40}
let map_weak = new WeakMap([
    [a, 100],
    [b, 200]
])

console.log(map_weak)
a = null
console.log(map_weak.has(a))
console.log(map_weak.has(b))
