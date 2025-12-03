let person = {
    name: "Tahmid",
    email: "example@gmail.com",
    address: {
        city: 'Dhaka',
        post: 1204
    }
}

// let name = person.name
// let email = person.email

// console.log(name + email)

// Destructureing method, inside {} name should be same as object key otherwise it will show error
// let {name, email, address} = person

// multilevel object destructureing
let {name, email, address: {city, post}} = person
console.log(name, email, city, post)

// we can do this with an array but it's not usefull that much
// let arr = [1,4,5,6,8]

// // must use [] for array and {} for object
// // let [first, second ] = arr
// // let [first, second, third, fourth, fifth ] = arr
// let [first, second, , , fifth ] = arr
// console.log(first, second, fifth)