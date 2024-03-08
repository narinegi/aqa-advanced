const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of numbers) {
	if (num > 0) {
		positiveCount++;
		continue;
	} else if (num < 0) {
		negativeCount++;
		continue;
	} else zeroCount++;
}

console.log(`Positive Count: ${positiveCount}`);
console.log(`Negative Count: ${negativeCount}`);
console.log(`Zero Count: ${zeroCount}`);
