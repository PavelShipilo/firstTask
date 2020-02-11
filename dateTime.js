/*
Задание 1.
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.
*/
//Решение
let customDate = new Date(2012, 1, 20, 3, 12);
alert(customDate);

/*Задание 2
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/
//Решение
function getWeekDay(date) {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

	return days[date.getDay()];
}
let date = new Date(2012, 0, 3);

alert(getWeekDay(date));

/*Задание 2
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/
// Решение
function getLocalDay(date) {
	let day = date.getDay();
	if (day == 0) {
		day = 7;
	}
	return day;
}
/*
Задание 3
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/
//Решение
function getDateAgo(date, days) {
	let dateCopy = new Date(date);

	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
}

/*
Задание 4
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
//Решение
function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

/*
Задание 5
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
//Решение
function getSecondsToday() {
	let d = new Date();
	return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

/*
Задание 6
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
//Решение
function getSecondsTomorrow() {
	let d = new Date();
	let secondsInDay = 86400;
	let secondsToday = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
	return secondsInDay - secondsToday;
}
/*
Задание 7
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
//Решение
function formatDate(date) {
	let ms = new Date() - date;

	if (ms < 1000) {
		return 'прямо сейчас';
	}

	let sec = Math.floor(ms / 1000);

	if (sec < 60) {
		return sec + ' сек. назад';
	}

	let min = Math.floor(ms / 60000);

	if (min < 60) {
		return min + ' мин. назад'
	}
	let d = date;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	].map(component => component.slice(-2));

	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 30 * 1000)));

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date - 86400 * 1000)));
