// try catch method use to remove red error that can't handled by normal if else statement

function makeToword(s){
    
    try {

        let str = s.trim()
        let words = str.split(" ")
        return words

    } catch(e){
        // console.log(e)
        // console.log(e.message)
        // console.dir(e)
        console.log("Invelid text")
    }


    // let str = s.trim()
    // let words = str.split(" ")
    // return words
}

// console.log(makeToword("    Hello, I   am    Tahmid     "))
console.log(makeToword(86))




// i can use trycatch every where not necessery to use it only in a function. and finally block can exicute both time either after try block exicute neither after catch block exicute.
// even we can use catch block without passing any parameter
try {
    console.log("I am 1")
    console.log("I am 2")
    throw new Error("I am error, next exicution stoped!")
    console.log("I am 3")
    console.log("I am 4")
    
} catch (error) {
    console.log(error,message)
} finally {
    console.log("I am finally block")
}