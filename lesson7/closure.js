//function makeCounter (startValue){
// let value = startValue

//  return function (){
//    console.log(value)
//   value ++
//}
//}
//const count = makeCounter(1)
//count()

//function multiplier(factor){
//   return function(x){
//      return x * factor;
//  }
//}
//const double = multiplier(2)
//console.log(double(5));
//console.log(double(7));

function countToZero(startValue) {
	console.log(startValue);
	if (startValue > 0) {
		countToZero(startValue - 1);
	}
}
countToZero(3);
