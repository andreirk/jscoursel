
/**! Обьекты
// 1
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// Работать должно так:
*/


function isEmpty(obj) {
	var counter = 0;
  for (var key in obj){
  		counter++;
  }
  return counter == 0;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false


// 2
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

// Если объект пустой, то результат должен быть 0.

// Например:
"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function selarySum (salaries) {
	var sum = 0;
	for (var key in salaries){
		sum += salaries[key];
	}
	return sum;
}
alert(selarySum(salaries))



// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

// Например:
function maxSalary(salaries){
	var max = 0;
	for (var key in salaries){
		if (salaries[key] > max){
			max = salaries[key];
		}
	}
	return max == 0 ? 'нет сотрудников' : max;
}

alert(maxSalary(salaries));


// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

/*
	Создайте функцию multiplyNumeric, 
	которая получает объект и умножает все численные свойства на 2. Например:
	multiplyNumeric(menu);

	 после вызова
	menu = {
	  width: 400,
	  height: 600,
  title: "My menu"
};
*/
function multiplyNumeric(menu){
	sum = 0;
	for (var key in menu){
		if isNumeric(menu[key]){
			menu[key] *= 2;
		}
	}
}

alert(menu);
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}