var styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-Ролл");
console.log(styles);
styles[styles.length - 2] = "Классикa";
console.log(styles);
var removeEl = styles.shift();
console.log(styles);
alert(removeEl);
styles.unshift("Рэп", "Регги");
console.log(styles);
console.log("________________");

for (var i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (var i = 2; i <= 10; i++) {
  if (i % 2 != 0) {
    continue;
  } else console.log(i);
}
console.log("________________");

var mas = [];
var sum = 0;

console.log(mas);

while (true) {
  var container = prompt("Введите ваше значение", "");
  resultParse = parseInt(container);
  resultParse = Number.isNaN(resultParse);
  if (container == "" || container === null || resultParse === true) {
    break;
  }
  mas.push(container);
  console.log(mas);
}

for (var i = 0; i < mas.length; i++) {
  sum = sum + +mas[i];
}
alert(sum);
console.log("________________");
