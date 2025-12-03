//promise is use to handle assynchronous task, it's an constructor, take callback function with two callback function resolve and reject
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'One')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
})

// console.log(p1) //after 3 sec it will show fullfiled
// console.log(p2) //after 3 sec it will show fullfiled

// to get promise data we have to use then() method and to get error data have to use catch() mathod both take callback function or arrow function
p1.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})

//similarly
p2.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})


function getIphone(isTrue){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTrue) {
                resolve('You have got an Iphone!') //mainly this resolve data will get from then method usally one parameter
            } else {
                reject(new Error("You failed!")) //mainly this reject data will get from catch method usally one parameter
            }
        }, 3000);
    })

    return promise
}

// let iphone = getIphone(false)
let iphone = getIphone(true)

iphone.then((res) => {
    console.log(res)
})
.catch((e) => {
    console.log(e.message)
})