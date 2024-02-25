class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age +2;
    }
    greet() {
        console.log(`Hello my name is ${this.name} and i am ${this.age} years old`)

    }
}
const user = new Person("Narine", 35)
const user2 = new Person("Anna", 56)
user.greet()
user2.greet()