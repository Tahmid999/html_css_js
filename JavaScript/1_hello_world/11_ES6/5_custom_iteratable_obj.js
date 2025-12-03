let obj ={
    start: 0,
    end: 4,

    //making iteratable obj
    [Symbol.iterator]: function(){
        let currentValue = this.start
        let self = this
        return {
            next(){
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}

for(let i of obj){
    console.log(i) //now, obj is iterable
}

let it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())