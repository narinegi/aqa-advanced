const person = {
	name: 'Alice',
	greet: function () {
		console.log(`Hello, ${this.name}`);
	},
};

const person2 = {
	name: 'Peter',
};

//person.greet()
person.greet.call(person2);

function Peerson(name, age) {
	this.name = name;
	this.age = age;
}
const user1 = new Peerson('Peter', 23);
console.log(user1);

//(function sayBye(names){
//console.log(`Bye ${names}`)
//})("Peterr")
