'use strict'

var op;

function sel_ligth(sel_id) {
	document.getElementById('plus').classList.remove('light');
	document.getElementById('minus').classList.remove('light');
	document.getElementById('times').classList.remove('light');
	document.getElementById('divide').classList.remove('light');

	document.getElementById(sel_id).classList.add('light');

	switch (sel_id) {
		case 'plus':
			op = '+'
			break;
		case 'minus':
			op = '-'
			break;
		case 'times':
			op = '*'
			break;
		case 'divide':
			op = '/'
			break;
	}
}

document.getElementById('num2').addEventListener('keydown', function(e) {
	if (e.keyCode  === 13) {
		func()
	}
})

function func() {
	var result;
	var num1_str = String(document.getElementById('num1').value);
	var num2_str = String(document.getElementById('num2').value);

	if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
		document.getElementById('result').innerHTML = 'Первое число не указано';
		return;
	}
	if ((num2_str.length == 0) || (num2_str.indexOf(' ') != -1)) {
		document.getElementById('result').innerHTML = 'Второе число не указано';
		return;
	}

	let num1 = Number(num1_str)
	let num2 = Number(num2_str)

	if (isNaN(num1)) {
		document.getElementById('result').innerHTML = 'Некорректный ввод';
		return;
	}
	if (isNaN(num2)) {
	document.getElementById('result').innerHTML = 'Некорректный ввод';
	return;	
	}

	if ((num2 == 0) && (op == '/')) {
		document.getElementById('result').innerHTML = 'На ноль делить нельзя';
		return;
	}

	switch (op) {
		case '+':
			result = num1 + num2; 
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;	
		default: result = 'Не введен знак'		
	}

	document.getElementById('result').innerHTML = result;

}

