// let delay = s => new Promise((resolve) => setTimeout(resolve, s*1000))

// delay(2).then(() => console.log("2 sec delay"))
// delay(3).then(() => console.log("3 sec delay"))
// delay(5).then(() => console.log("5 sec delay"))
// delay(1).then(() => console.log("1 sec delay"))
// delay(2).then(() => console.log("2 sec delay"))
// delay(4).then(() => console.log("4 sec delay"))

// let p1 = Promise.resolve("resolved") //for instant make promise resolved
// console.log(p1)
// p1.then(res => console.log(res))

// let p2 = Promise.reject("rejected") //for instant make promise rejected
// p2.catch(v => console.log(v))

// let p1 = Promise.resolve("One")
// let p2 = Promise.resolve("Two")
// // let p3 = Promise.resolve("Three")
// let p3 = Promise.reject("Rejected")
// // to show the all promise data at once then we have to use Promise.all() method but to use .all() method we have to make and array of those promises that i want to show, but make sure all promise data should be resolved if one data is rejected then it will show rejected for all also untill complet the all task of promise we have to wait it will return all togather

// let proArr = [p1, p2, p3]
// Promise.all(proArr)
//     .then((arr) => console.log(arr))
//     .catch(e => console.log(e)) //if one promise rejected then all rejecte


let p1 = new Promise(resolve => {
    setTimeout(resolve, 4000, "One");
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, "Two");
})
let p3 = new Promise(resolve => {
    setTimeout(resolve, 5000, "Three");
})

let proArr = [p1,p2,p3]
Promise.all(proArr)
.then(res => console.log(res))

//as like race fast come win other of all are reject
Promise.race(proArr)
    .then(res => console.log(res))