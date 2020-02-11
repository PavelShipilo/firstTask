/*Задание 1
Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/
//Решение
let user = {};
user.name = 'Jhon';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/*Задание 2
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/
// Решение
let schedule = {};

function isEmpty(schedule) {
	for (let prop in schedule) {
		return false;
	}
	return true;
}
alert(isEmpty(schedule));

/*Задание 3
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";*/
//Решение: да, можно. присвоить новое значение переменной user нельзя, но изменять сам объект можно.

/*Задание 4
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/
//Решение
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};
let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}
alert(sum);

/*Задание 5
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
//Решение.
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(menu) {
	for (key in menu) {

		if (typeof menu[key] == 'number') {
			menu[key] *= 2;
		}
	}
};

alert(menu);
