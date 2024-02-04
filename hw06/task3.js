
function checkOrder (available, ordered) {
    let message;
    {
        if (available < ordered) {
            message = "Your order is too large, we don’t have enough goods.";
        } else if (ordered === 0) {
            message = "Your order is empty";

        } else {
            message = "Your order is accepted";

        }
        return message;
    }
}
console.log(checkOrder(12,12));


