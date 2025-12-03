let a = 100, b = 50

let obj = {
    // a: a,
    // b: b,
    // print: function(){
    //     console.log(this)
    // }

    // can also written like this
    a,
    b,
    print(){
        console.log(this)
    }

}

console.log(obj)
obj.print()