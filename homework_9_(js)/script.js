'use strict'

const fibonacci = function makeFibonacciFunction() {
	let a = 0;
	let b = 1;

	return function() {
		let result = a + b;
		console.log(a)
		a = b;
		b = result;
	}; 
}();


fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();