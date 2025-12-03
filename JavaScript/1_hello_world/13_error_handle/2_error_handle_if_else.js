function converToInt(v){
    let result = Number.parseInt(v)
    if (!result) {
       return "provide an actual number"
    }

    return result
}

console.log(converToInt('45'))