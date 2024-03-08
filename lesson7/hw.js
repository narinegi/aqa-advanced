function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
		throw new Error('Please provide valid values');
	}
	return numerator / denominator;
}

try {
	const output1 = divide(6, 2);
	console.log('Result1:', output1);
} catch (e) {
	console.log('An Error has been encountered. Please check the values', e);
}

try {
	const output2 = divide(1, 0);
	console.log('Result2:', output2);
} catch (e) {
	console.log('An Error has been encountered. Please check the values', e);
}

try {
	const output3 = divide('zyx', 0.2);
	console.log('Result3:', output33);
} catch (e) {
	console.log('An Error has been encountered. Please check the values', e);
} finally {
	console.log('Finally');
}
