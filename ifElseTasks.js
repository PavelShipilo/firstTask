//Задание 1. Выведется ли alert?
if ("0") {
  alert( 'Привет' );
}
// Ответ всегда будет выводиться, так как "0" при логическом преобраовании будет иметь значение true

//Задание 2. Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let javascriptOfficialName = prompt('Какое «официальное» название JavaScript?', '');
if(javascriptOfficialName == 'ECMAScript') {
alert('Верно!');
} else {
alert('Не знаете? ECMAScript!');
}

/*Задание 3. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.*/
let yourNumber = prompt('Введитен число', ''); //переменная называется неочень, но я не придумал ничего лучше, так как смысловой нагрузки здесь не так уж и много
 if (yourNumber > 0){
 alert(1);
 } else if (yourNumber < 0){
 alert(-1);
 } else {
 alert(0);
 }

/* Задание 4. Перепишите if с использованием условного оператора '?'
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */
//Решение:
let result = (a + b < 4) ? 'Мало' : 'Много';

/* Задание 5. Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */



