//const temp = 100;
//if (temp>=100)
//{
 //   throw new Error("My Custom Error")
//}
//console.log("Finish")

//function calculateSum(num1, num2)
//{
    //console.log(`${num1} + ${num2} =  ${num1+ num2}`)
//}
//calculateSum(2,5)
//calculateSum(1,21)


//function calculateSum(num1, num2)
//{
    //const sum = num1 + num2
   // return sum
//}

//const result = calculateSum(1, 2)
//console.log("Result", result)

//const temp = 100;
//if (temp >=100)
//{
    //console.log("Water is boiling")
    //throw "My custom error"
   // throw new Error("New Error Custom")

//}

//console.log("Finish");

const temp = 11;
console.log("Start")
try {
    if (temp >= 100) {
        throw new Error("New Error Custom")
    }


} catch(e)
    {
        console.log("Some Error ALERT", e.message)
}

finally {

}{
    console.log("Block Finally")
}
console.log("Finish");
