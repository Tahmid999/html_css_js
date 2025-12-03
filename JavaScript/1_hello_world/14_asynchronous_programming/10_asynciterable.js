let asyncIterable = {
    [Symbol.asyncIterator](){
        let i = 0
        return {
            next(){
                if(i<5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
}

let promiseIt = asyncIterable[Symbol.asyncIterator]();

// console.log(promiseIt.next())
// async function promiseawait(){
//     console.log(await promiseIt.next())
//     console.log(await promiseIt.next())
//     console.log(await promiseIt.next())
//     console.log(await promiseIt.next())
//     console.log(await promiseIt.next())
//     console.log(await promiseIt.next())
// }

// promiseawait()

//using for of loop in async iterator
// (async function(){
//     for await (let res of asyncIterable){
//         console.log(res)
//     }
// })()


//we can also do generator task with async iterator
async function* myasyncGenerator(){
    let i = 15

    while(i<18)
    {
        yield await Promise.resolve(i++)
          
    }
}

;(async function(){
    for await (let res of myasyncGenerator()){
        console.log(res)
    }
})()




