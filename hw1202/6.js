const numbersArray = [1,10,14,2,4,5,43,34]
const newNumArray = [...numbersArray];
newNumArray.sort((a, b) => a - b);
console.log(numbersArray, "Initial Array")
console.log(newNumArray, "Sorted Array")