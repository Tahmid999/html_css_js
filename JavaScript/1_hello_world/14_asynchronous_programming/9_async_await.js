// function mypromise(){
//     return Promise.resolve("I am promise")
// }
// console.log(mypromise())

// now we don't have to return promise manually
// async function test() {
//     return "I am also a promise"
// }
// console.log(test())
// test().then(v => console.log(v))

//even we don't have write then() method to get promise response in a async function
// let p1 = new Promise(resolove => {
//     setTimeout(resolove, 3000, "I am a promise")
// })

// p1.then(v => console.log(v))

//just instead of then() things store the promise in a variable with await, and we can use await only in async function
// async function myAsyncFun(){
//     // let res =await p1
//     // console.log(res)
//     console.log(await p1)
// }
// myAsyncFun()


//another beutifull example
async function myFetch(url){
    //to handle error it's better to work with try catch
    try{
        let res = await fetch(url)
        console.log(res)

        let data = await res.json()
        console.log(data)

        //just extra 
        let name = data.map(v => v.name)
        console.log(name)
    }catch(e){
        console.log(e.message)
    }
}

myFetch("https://jsonplaceholder.typicode.com/users")


//more example with promise.all()
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll(promisesArr)
{
    let res = await Promise.all(promisesArr)
    console.log(res)
}
promiseAll(promises)

