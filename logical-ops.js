//Задание 1. Что выведет код ниже?
//alert( null || 2 || undefined );
//Решение
alert( null || 2 || undefined );//2, т.к. это первое верное значение

//Задача 2. Что выведет код ниже?
//alert( alert(1) || 2 || alert(3) );
//Решение
alert( alert(1) || 2 || alert(3) );//2

/*Задача 3. Что выведет код ниже?
alert( 1 && null && 2 ); */
//Решение
alert( 1 && null && 2 );// null, т.к. это первое неверное значение

/* Задача 4. Что выведет код ниже?
alert( alert(1) && alert(2) ); */
//Решение
alert( alert(1) && alert(2) );// 1