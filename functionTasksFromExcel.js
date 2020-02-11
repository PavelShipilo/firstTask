//Функция сложения двух чисел
function sum(a, b) {
	let sum = a + b;
	return sum;
}
//alert(sum(2,3));

// Фнукция опредления имени(если имя  ваше, то привет + имя)
function isYourName(name) {
	let myName = 'Pavel';
	if (name == myName) {
		return 'привет ' + name;
	}
}
//alert(isYourName('Pavel'));

//Функция вычесления типа аргумента и вывод в консоль
function argumentType(argument) {
	console.log(typeof argument);
}
argumentType('dsfdsf');

//Задание 4 Функция выбора четных элементов массива(возвращает новый массив)

function qwe(numbers) {
	let res = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 == 0 && numbers[i] != 0) res.push(numbers[i]);
	}
	return res;
}

let numbers = [4, 9, 2, 11, 8, 90, 0];
let res = qwe(numbers);
alert(res);
