const payment_confirm = true
const mark = 70

function enroll (callback){
    console.log("Please complete your payment")

    setTimeout(function() {
        if(payment_confirm){
            callback()
        } else {
            console.log("payment failed!")
        }
    }, 2000);
}

function progress(callback){
    console.log("Course on progress....")

    setTimeout(() => {
        if(mark >= 80){
            callback()
        } else {
            console.log("you are not eligible for the certificate")
        }
    }, 3000);
}

function getcertificate(){
    console.log("your certificate is processing")

    setTimeout(() => {
        console.log("congo! here your certificate")
    }, 1000);
}

// all thinks meshup
// enroll()
// progress()
// getcertificate()

//also meshup
// enroll(progress)
// progress(getcertificate)


//in the preveous we call enroll function with callback function as parameter but callback function itself has no parameter so if make call with () that means it will call that function without callback parameter, to solve this we have to use annonimous function for indirect call
// enroll(function(){
//     progress(getcertificate)
// })

//now think in this example have only three step or functions, if there have more functions with callback then it's very hard to manage the system that's why callback method not good to handle assynchronous task





//doing same things with promise
function enroll (){
    console.log("Please complete your payment")

    let promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            if(payment_confirm){
                resolve()
            } else {
                reject("Payment Failed!")
            }
        }, 2000);

    })

    return promise
}


function progress(){
    console.log("Course on progress....")

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mark >= 80){
                resolve()
            } else {
                reject("you are not eligible for the certificate")
            }
        }, 3000);
    })

    return promise
}


function getcertificate(){
    console.log("your certificate is processing")

    let promise = new Promise((resolve) => {

        setTimeout(() => {
            resolve("congo! here your certificate")
        }, 1000);
    })

    return promise
}

// enroll()
//     .then(progress)
//     .then(getcertificate)
//     .then(res => console.log(res))
//     .catch(e => {
//         console.log(e)
//     })

//promise call with async await
;(async function(){
    try{
        await enroll()
        await progress()
        await getcertificate()
        console.log(await getcertificate())
    }catch(e){
        console.log(e)
    }
})()