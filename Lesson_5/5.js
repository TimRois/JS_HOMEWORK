function isEpty(obj) {
  var count = 0;
  for (key in obj) {
    count++;
  }
  return count > 0 ? false : true;
}
var myObj = { name: "andrey", age: 23, gender: "male" };
console.log(isEpty(myObj));
console.log("___________________");

var x,
  n,
  resultParseX = true,
  resultParseN = true;

function pow(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}
x = prompt("Введите число x", "");
while (resultParseX != false || x < 1) {
  resultParseX = parseInt(x);
  resultParseX = Number.isNaN(resultParseX);
  if (resultParseX == true || x < 1) {
    alert("Введите пожалуйста целое положительное число");
    x = prompt("Введите число x", "");
  }
}
n = prompt("Введите число n", "");
while (resultParseN != false || n < 1) {
  resultParseN = parseInt(n);
  resultParseN = Number.isNaN(resultParseN);
  if (resultParseN == true || n < 1) {
    alert("Введите пожалуйста целое положительное число");
    n = prompt("Введите число n", "");
  }
}
console.log(pow(x, n));
console.log("___________________");

function sumToFirst(n) {
  var result = 0;
  for (var i = 0; i <= n; i++) {
    result = result + i;
  }
  return result;
}
console.log(sumToFirst(5));

function sumToSecond(n) {
  var sum = 0;
  sum = sum + n;
  if (n >= 1) {
    return sum + sumToSecond(n - 1);
  } else {
    return sum;
  }
}
console.log(sumToSecond(5));

function sumToThird(n) {
  var s;
  return (s = ((1 + n) * n) / 2);
}
console.log(sumToThird(5));
console.log("___________________");

/* Какой вариант решения самый быстрый? 
 Ответ : наверное, через формулу, т.к  выполняется минимальное количество действий 
Самый медленный?
Ответ : наверное с циклом, т.к цикл идет по всем значения, и чем больше цикл, тем больше время
Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?
Ответ : мне кажется нет, т.к будет переполнение памяти. Выполняя текущую функцию в рекурсии, 
все функции, которые вызывались до нее в рекурсии, будут храниться в памяти.
*/

function treeSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && isNaN(arr[i]) === false) {
      sum = sum + +arr[i];
    } else if (
      typeof arr[i] === "object" &&
      arr[i] !== null &&
      arr.length > 0
    ) {
      sum = sum + treeSum(arr[i]);
    }
  }
  return sum;
}
myArr = [5, 7, "", null, NaN, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
console.log(treeSum(myArr));
