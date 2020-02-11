//1. Есть объект a с набором свойств, объект b должен унаследовать свойства a.
let animal = {
	eats: true
};
let rabbit = {
	jumps: true
};

rabbit.__proto__ = animal;
