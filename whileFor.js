//https://learn.javascript.ru/while-for
/*Какое последнее значение выведет этот код? Почему?
let i = 3;

while (i) {
  alert( i-- );
}
*/
// Ответ: 1, т.к. как только i == 0, условие перестанет выполняться

/* Задание 2
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?

Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );

Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );
*/
//Решение
1) 1, 2, 3, 4;
2) 1, 2, 3, 4, 5

/* Задание 3
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?
Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );

Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );
*\
//Решение
1) 0,1,2,3,4
2) 0,1,2,3,4
//так как в цикле for сначала выполниться тело цикла, потом шаг, потом проверяется условие, для результата не важно что будет в шаге (инкремент или декремент)

/* Задание 4. При помощи цикла for выведите чётные числа от 2 до 10.*/
//Решение
for (i = 2, i <= 10, i++)
{
	if (i % 2 == 0)
	{
		alert(i);
	}
}
/*Задание 5
Замените for на while
важность: 5
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
//Решение
let i = 0;
while (i < 3)
{
	alert(`number ${i}!`);
	++i;
}
//Задание 6
/*Повторять цикл, пока ввод неверен
важность: 5
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/
//Решение
let enteredNum;
do {
	enteredNum = prompt("Введите число", '');
} while (enteredNum <= 100 && enteredNum);
//Задание 7
/*Вывести простые числа
  важность: 3
  Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
  Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
  Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
  Напишите код, который выводит все простые числа из интервала от 2 до n.
  Для n = 10 результат должен быть 2,3,5,7.
  P.S. Код также должен легко модифицироваться для любых других интервалов.*/
//Решение
let flag = true;
for (let i = 2; i <= 10; i++)
{
	for (let j = 2; j < i; j++)
	{
		if (i % j == 0) flag = false;
	}
	if (flag == true) alert(i);
	flag = true;
}