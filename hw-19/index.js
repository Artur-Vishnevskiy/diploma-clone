//Задание 1
const user = {
    name: "Artur",
    age: 19
}
delete user.age;
console.log(user);

//Задание 2
const person = {
    car: true,
    nameCar: "BMW"
}
if ('car' in person && 'nameCar' in person) {
    console.log(true);
} else {
    console.log(false);
}

//Задание 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const key in student) {
    console.log(`${key}`);
}
for (const key in student) {
    console.log(`${student[key]}`);
}

//Задание 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}

console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)

// Задание 5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199,
}
let values = Object.values(salaries)
let sum = 0
for (const salary in salaries) {
  sum += salaries[salary]
}
let averageSallary = sum / values.length

console.log(averageSallary)

 // Задание 6
let login = prompt('Введите логин')
let password = prompt('Введите пароль')

const users = {
  login: prompt("Введит логин"),
  password: prompt("Введите пароль")
};

if (users.login === prompt("Повторите логин") && users.password === prompt("Повторите пароль")) {
  console.log("Добро пожаловать");
} else {
  console.log("Ошибка");
}
