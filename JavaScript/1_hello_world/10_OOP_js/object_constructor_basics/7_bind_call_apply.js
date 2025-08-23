// function random(){
//     console.log(this)
//     console.log(this.a + this.b)
// }

// random()

// random.call({a: 10, b:10})
// random.apply({a:20, b:30})

function random(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

random.call({a: 10, b:10}, 20,30)
// random.apply({a:20, b:30}, 50,10) // will show error

//apply() method expect that after the defined object it will take parameter or argument as array

random.apply({a:10, b:50}, [50,10])

// var testblind = random.bind({a: 10, b:20}, 30,40)
// testblind()

//general rule of useing blind()

var testblind = random.bind({a:10, b: 30})
testblind(40,20) //by this way we can customize the argument anytime
