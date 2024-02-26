function printWithDelay(text, milliseconds)
{ setTimeout(() => {
    console.log(text)
}, milliseconds)
}
printWithDelay("After 2000ms", 2000);

