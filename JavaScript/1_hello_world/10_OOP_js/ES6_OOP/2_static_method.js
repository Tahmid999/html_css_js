//in normal class we have to create an object of that class then we can use method of that class but what if i want to use a method of a class without creating an object of that class then this is static method

class Person{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    print(){
        console.log("i am print method")
    }

    static create(string){
        let person = JSON.parse(string)
        return new Person(person.name, person.email)
    }

}

let str = '{"name": "Tahmidur Rahman", "email": "tahmid@gmail.com" }'

// in that case we don't have to create by new keyword
let p1 = Person.create(str)
console.log(p1)
console.log(p1.name)
p1.print()
