class Customerror extends Error{
    constructor(msg){
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Customerror)
        }
    }
}


try {
    console.log("I am 1")
    console.log("I am 2")
    throw new Customerror("I am your custom error")
    console.log("I am 3")
    console.log("I am 4")
} catch(e){
    console.dir(e)
    console.log(e.message)
}