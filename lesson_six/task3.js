let message;
function checkOrder(available, ordered) {
	if (available < ordered) {
		message = 'Your order is too large, we don’t have enough goods.';
		return message;
	} else if (ordered === 0) {
		message = 'Your order is empty';
		return message;
	} else {
		message = 'Your order is accepted';
		return message;
	}
}

console.log(checkOrder(12, 12));
