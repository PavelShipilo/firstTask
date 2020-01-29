//Функция сложения двух чисел
function sum(a,b){
let sum = a + b;
return sum;
}
//alert(sum(2,3));

// Фнукция опредления имени(если имя  ваше, то привет + имя)
function isYourName(name){
let myName = 'Pavel';
if (name == myName){
return 'привет ' + name;
}
}
//alert(isYourName('Pavel'));

//Функция вычесления типа аргумента и вывод в консоль
function argumentType(argument){
console.log(typeof argument);
}
argumentType('dsfdsf');