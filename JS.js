//1//
alert('Я JavaScript!')

//2//
let name, admin;
name = ('Джон');
admin = name;
alert(admin);

//3//
let name = prompt("Как вас зовут?", "");
alert(name);

//4//
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12

//5//
'use strict';

  let name = prompt('Какое "официальное" название JavaScript?', '');

  if (name == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }

//6//

let number = prompt('Введите число');
if (number > 0) {
	alert('1')
}
else if (number < 0) {
	alert('-1')
}
else {
	alert('0')
}

//7//
if (age >= 14 && age <= 90)

//8//
//С использованием !
if (!(age >= 14 && age <= 90))
//Без использования !
if (age < 14 || age > 90)

//9//
let user = prompt('Как вас зовут?', '');
let pass
if (user == 'Админ') {
	pass = prompt('Введите пароль', '');
	if (pass == 'Я главный') {
		alert('Здравствуйте!')
	} else if (pass == '' || pass == null) {
    	alert( 'Отмена' );
  	} else {
    	alert( 'Неверный пароль' );
  	}
} else if (user == '' || user == null) {
  	alert( 'Отменено' ); 
	}
  else {
  	alert( "Я вас не знаю" );
  }

//10//
let i;
for(i = 2; i <= 10; i++) {
	if(i % 2 == 0) {
		alert(i);
	}
}

//11//
let number;
do {
	number = prompt("Введите число, больше 100", 0)
} while (number <= 100 && number)

//12//
function min(a,b) {
	if(a < b) {
		return a;
	}
	else { 
		return b;
	{
{

//13//
function pow(x, n) {
	let res = x;
	for (let i = 1; i < n; i++) {
    res *= x;
  }
  return res;
}

let x = prompt('Число x', '');
let x = prompt('Степень', '');
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}