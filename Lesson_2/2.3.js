var num = prompt("Введите числo", "");
var addition = prompt("Сколько прибавить к предыдущему результату", "");
var subtraction = prompt("Сколько вычесть от предыдущего результата", "");
var multiplication = prompt("На сколько умножить предыдущий результат", "");
var division = prompt("На сколько поделить предыдущий результат", "");
var result =
  ((parseInt(num) + parseInt(addition) - subtraction) * multiplication) /
  division;
alert(
  "Формула: ((" +
    num +
    "+" +
    addition +
    ")-" +
    subtraction +
    ")*" +
    multiplication +
    "/" +
    division
);
alert("Результат: " + result);

console.log("_________________");

var login = prompt("Введите ваш логин", "");
if (
  login == "admin" ||
  login == "Admin" ||
  login == "админ" ||
  login == "Админ"
) {
  var password = prompt("Введите ваш пароль", "");
  if (password == "Чёрный Властелин") alert("Добро пожаловать!");
  else if (password == null) alert("Вход отменен");
  else alert("Пароль неверный");
} else if (login == null) alert("Вход отменен");
else alert("Я вас не знаю");

console.log("_________________");

var login = prompt("Введите ваш логин", "");
var message;
message =
  login === "Вася"
    ? "Привет"
    : login === "Директор"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";
alert(message);
console.log(message);

console.log("_________________");

var firstName,
  secondName,
  middleName,
  age,
  sex,
  resultParse = true,
  pension;

firstName = prompt("Введите ваше имя", "");
while (!firstName) {
  firstName = prompt("Вы не ввели имя. Пожалуйста, введите ваше имя", "");
}

secondName = prompt("Введите вашу фамилию", "");
while (!secondName) {
  secondName = prompt(
    "Вы не ввели фамилию. Пожалуйста, введите вашу фамилию",
    ""
  );
}

middleName = prompt("Введите ваше отчество", "");
while (!middleName) {
  middleName = prompt(
    "Вы не ввели отчество. Пожалуйста, введите ваше отчество",
    ""
  );
}

age = prompt("Введите ваш возраст", "");
while (!age || resultParse != false) {
  if (!age) {
    age = prompt("Вы не ввели возраст. Введите ваш возраст", "");
  } else {
    resultParse = parseInt(age);
    resultParse = Number.isNaN(resultParse);
    if (resultParse === true) {
      age = prompt("Вы ввели буквы, введите возраст числом", "");
    } else {
      while (age <= 5 || age > 100) {
        if (age <= 5 || age > 100) {
          age = prompt("Введите число больше 5 и меньше 100", "");
        }
      }
    }
  }
}

sex = confirm("Вы мужчина ?");
pension =
  sex === true && age >= 63
    ? "Да"
    : sex === true && age < 63
    ? "Нет"
    : sex === false && age >= 58
    ? "Да"
    : sex === false && age < 58
    ? "Нет"
    : "";
sex = sex === true ? "мужской" : "женский";

alert(
  "Ваше ФИО: " +
    firstName +
    " " +
    secondName +
    " " +
    middleName +
    " \n " +
    "Ваш возраст в годах: " +
    age +
    "\n" +
    "Ваш возраст в днях: " +
    age * 365 +
    "\n" +
    "Через 5 лет вам будет: " +
    (parseInt(age) + parseInt(5)) +
    "\n" +
    "Ваш пол: " +
    sex +
    "\n" +
    "Вы на пенсии: " +
    pension
);

console.log("имя: " + firstName);
console.log("фамилия: " + secondName);
console.log("отчество: " + middleName);
console.log("возраст: " + age);
console.log("пол: " + sex);
