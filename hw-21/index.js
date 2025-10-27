//Задание 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(number => console.log(number));

fibonacci.forEach(function(numbers){
    console.log(numbers);
})

//Задание 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const resultMap1 = users.map((user, index) => "member " + (index + 1) + ": " + user)
console.log(resultMap1);

const resultMap2 = users.map(function(users2, index2) {
    return ("member " + (index2 + 1) + ": " + users2);
})
console.log(resultMap2);

//Задание 3
const numbers = [7, -4, 32, -90, 54, 32, -21]

const resultNumber1 = numbers.filter(numb => numb >= 0);
console.log(resultNumber1);

const resultNumber2 = numbers.filter(function(number){
    return number >= 0;
})
console.log(resultNumber2);

//Задание 4
const fibonacci_2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
let value1 = 0;
const resultReduce1 = fibonacci_2.reduce((accum, number) => accum + number, value1);
console.log(resultReduce1);

const resultReduce2 = fibonacci_2.reduce(function(accum, number){
    return accum + number
})
console.log(resultReduce2);

//Задание 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const resultFind1 = numbers2.find(number => number % 2 === 0)
console.log(resultFind1);

const resultFind2 = numbers2.find(function(number){
    return number % 2 === 0;
})
console.log(resultFind2)