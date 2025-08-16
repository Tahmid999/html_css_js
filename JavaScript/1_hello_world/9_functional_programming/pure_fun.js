
// It Returns the same result if given the same arguments
// It does not cause any observable side effects

function sqr(n){
    return n*n
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

// ===== sqr is a pure function =====

var point = {
    x: 100,
    y: -30
}

function pointPrint(point){
    point.x = 200
    point.y = 50

    console.log(point)
}

console.log(point)
pointPrint(point)
console.log(point) //x,y value have changed

// ==== pointPrint function is not a pure function ====