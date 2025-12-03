// to solve asynchronous delay, i have to do all the task in the asynchronous function

// but but to handle asynchonous tasks there are three way
// Callback, Promise, Async Function

//to handle collection of async operation
// Async Iterator, For Await of Loop, Async Generator

function myname(name){
    
    // let result
    setTimeout(() => {
        let result = name
        console.log(result)
    }, 3000)

    // return result
}

let res = myname("Tahmid")
console.log(res)