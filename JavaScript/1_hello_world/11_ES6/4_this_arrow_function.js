function random(){
    console.log(this)
}

random()

// let obj = {
//     name: "Tahmid",
//     print: function(){
//         console.log(this.name) 
//         setTimeout(function(){
//             console.log(`hellow, ${this.name}`) //now inside setime fuction this not accessing the object property by function
//         },1000)
//     }
// }

//we can solve this problem by arrow function
let obj = {
    name: "Tahmid",
    print: function () {
        console.log(this.name) 

        setTimeout(() =>{
            console.log(`hellow, ${this.name}`)
        },1000)
    }
}

obj.print()