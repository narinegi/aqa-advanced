const users = [
    {name: "Narine", email: "hello@gmail.com", age:98, city:"London"},
    {name: "Emma", email: "qatest@gmail.com", age:23, city: "London"},
]
for (const {name,email,age,city} of users) {
    console.log(`${name} is ${age} years old and her email is ${email} and she lives in ${city}`)
}



