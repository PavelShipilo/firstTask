//Сложение различных типов
let a = 1 + 1;//2
console.log(a);
let b = 1 + ' text';//'1 text'
console.log(b);
let c = 1 + true;//2
console.log(c);
let d = 1 + null;//1
console.log(d);
let e = 1 + undefined;//NaN
console.log(e);
let a1 = 'sad ' + 'but true';//'sad but true'
console.log(a1);
let a2 = 'sad' + false;//'sadfalse'
console.log(a2);
let a3 = 'sad' + null;//'sadnull'
console.log(a3);
let a4 = 'sad' + undefined;//'sadundefined'
console.log(a4);
let b1 = true + false;//1
console.log(b1);
let b2 = true + null;//1
console.log(1);
let b3 = true + undefined;//NaN
console.log(b3);
let c1 = null + null;//0
console.log(c1);
let c2 = null + undefined;//NaN
console.log(c2);
let d1= undefined + undefined;//NaN
console.log(d1);

//Умножение типов
let f = 1 * 1;//1
console.log(f);
let g = 2 * 'fgdgdf12'//NaN
console.log(g);
let h = 2 * '12';//24
console.log(h);
let j = 2 * false;//0
console.log(j);
let k = 2 * null;//0
console.log(k);
let l = 2 * undefined;//NaN
console.log(l);
let f1 = 'sad ' * 'but true';//NaN
console.log(f1);
let f2 = 'sad' * false;//NaN
console.log(f2);
let f3 = 'sad' * null;//NaN
console.log(f3);
let f4 = 'sad' * undefined;//NaN
console.log(f4);
let g1 = true * false;//0
console.log(g1);
let g2 = true * null;//0
console.log(g2);
let g3 = true * undefined;//NaN
console.log(g3);
let h1 = null * null;//0
console.log(h1);
let h2 = null * undefined;//NaN
console.log(h2);
let j1= undefined * undefined;//NaN
console.log(j1);

//Деление типов
let m = 4 / 0; //Infinity
console.log(m);
let n = 4 / '66lil peep'; //NaN
console.log(n);
let o = 4 / true; // 4
console.log(o);
let p = -4 / null; // -Infinity
console.log(p);
let q = 4 / undefined; // NaN
console.log(q);
let m1 = '15' / '3'; //5
console.log(m1);
let m2 = 'lil' / false; // NaN
console.log(m2);
let m3 = 'peep' / null; // NaN
console.log(m3);
let m4 = 'peep' / undefined; // NaN
console.log(m4)
let n1 = true / false; // Infinity
console.log(n1);
let n2 = true / null; // Infinity
console.log(n2);
let n3 = false / undefined; // NaN
console.log(n3);
let o1 = null / null; //NaN, я думал Infinity
console.log(o1);
let o2 = null / undefined; // NaN
console.log(o2);
let p1 = undefined / undefined; //NaN
console.log(o2);

// Вычитание типов
let r = 4 - 1;//3
console.log(r);
let s = 4 - '2';//2
console.log(s);
let t = 4 - false;//4
console.log(t);
let u = 4 - null;//4
console.log(u);
let v = 4 - undefined;//NaN
console.log(v);
let r1 = 'text' - 'no';//NaN
console.log(r1);
let r2 = 'text' - true; // NaN
console.log(r2);
let r3 = '123' - null; // 123
console.log(r3);
let r4 = '123' - undefined; //NaN
console.log(r4);
let s1 = true - false;//1
console.log(s1);
let s2 = true - null;// 1
console.log(s2);
let s3 = false - undefined;//NaN
console.log(s3);
let t1 = null - null;//0
console.log(t1);
let t2 = null - undefined; //NaN
console.log(t2);
let u1 = undefined - undefined; //NaN
console.log(u1);

//Явное преобразование все в строку
console.log(typeof String(12));//'12'
console.log(typeof String(true));//'true'
console.log(typeof String(null));//'null'
console.log(typeof String(undefined));//'undefined'

//Явное преобразование все в число
alert(Number('12'));//12
alert(Number(true));//1
alert(Number(null));//0
alert(Number(undefined));//NaN

// Явное логическое преобразование
alert(Boolean('12'));//true
alert(Boolean(1));//true
alert(Boolean(undefined));//false
alert(Boolean(null));//false
alert(Boolean(NaN));//false
alert(Boolean(0));//false
alert(Boolean('0'));//true
alert(Boolean(' '));//true