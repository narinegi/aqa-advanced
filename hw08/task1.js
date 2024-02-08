function handleNum(number,handleEven,handleOdd) {
if ( number % 2 === 0)
handleEven()
else {
handleOdd()
}
}function handleEven(){
 console.log("The Number is even")
}
function handleOdd(){
console.log("The Number is Odd")
}
handleNum(7,handleEven, handleOdd)
