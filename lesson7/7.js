//function hof (callback){
  //  console.log("High order function")
   // callback()
//}
//const sayHello = () => console.log("Hello From Callback")
//hof(sayHello)

function processPayment(onSuccess, onFailure){
  try{
      if ((Date.now() %2 ===0)){
          throw  new Error( "Error Payment")
      }
      onSuccess()
  }catch (e) {
      onFailure(e)
  }

}

function onPaymentSuccess(){
    console.log("Payment Processed")
}

function onPaymentFailure(error) {
    console.log("Payment Error")
}
processPayment(onPaymentSuccess, onPaymentFailure)