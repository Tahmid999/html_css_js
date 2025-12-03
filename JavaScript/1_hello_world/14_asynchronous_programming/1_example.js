// js don't wait for other's task it will run a statement in speed ordar, fast completion fast output

console.log("Print one")

setTimeout(() => {
    console.log("Print two")

}, 3000)

console.log("Print three")

setTimeout(() => {
    console.log("Print four")
}, 0)

console.log("Print five")