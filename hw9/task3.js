
const car1= {
    brand: "Aston Martin",
    model: "DB5",
    year: 2023,

}
const car2= {
    brand: "BMW",
    model: "X7",
    owner: "Narine Ilnytska",

}


const car3 = {...car1.brand.model.year,...car2.brand.model.owner}
console.log(car3)
