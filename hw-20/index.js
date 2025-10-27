//Задание 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//Задание 2
const animals = ['monkey', 'dog', 'cat']
let lastIndex = animals.length - 1
console.log(animals[lastIndex])

//Задание 3
const numbers = [5, 43, 63, 23, 90]

while(numbers.length>0){
    numbers.pop()
}
console.log(numbers)

numbers.length = 0
console.log(numbers)

//Задание 4
const students = ['Polina', 'Dasha', 'Masha']
let lastPerson = students.length - 1
let firstPerson = students.pop(lastPerson)
let addStudent = students.push('Borya')
let deletePerson = students.shift()
let addFirst = students.unshift('Andrey')

console.log(students)

//Задание 5
const cats = ['Gachito', 'Tom', 'Batman']

for(let i = 0;i < cats.length; i++){
    let element = cats[i]  
    console.log(element)
}

for(let element of cats){
    console.log(element)
}

//Задание 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const finishArray = evenNumbers.concat(oddNumbers)
console.log(finishArray[8])

//Задание 7
const binary = [0, 0, 0, 0];
console.log(binary.join(1));