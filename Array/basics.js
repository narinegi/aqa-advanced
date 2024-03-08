//const fruits = new Array()
//const fruits = ["apple", "pineapple", "banana", 111, true]
//console.log("fruits[]0",fruits[0])
//console.log(fruits.length)
//console.log(fruits[1])

//function hof (callback) {
//   console.log("High Order Function")
// callback()
//}
//const sayHello = () =>console.log("Hello from Callback")
//hof(sayHello)

function processPayment(onSuccess, onFailure) {
	try {
		if (Date.now() % 2 === 0) {
			throw new Error('Error Payment');
		}
		onSuccess();
	} catch (e) {
		onFailure(e);
	}
}
function onPaymentSuceess() {
	console.log('Payement has been proceessed');
}

function onPaymentError(error) {
	console.log(`Payment Error has happened":${error.message}`);
}

processPayment(onPaymentSuceess, onPaymentError);
