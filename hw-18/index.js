// Задание 1
function getSum(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}

console.log(getSum(100))

// Задание 2
function creditOverpayment(creditAmount) {
  let creditYears = 5
  let creditPercent = 0.17
  clientOverpayment = creditAmount * creditPercent * creditYears
  return clientOverpayment
}
console.log(creditOverpayment(120000))

// Задание 3
function trimString(string, from, to) {
  return string.slice(from, to)
}

console.log(trimString('ElinaDobrutskaya', 3, 7))

// Задание 4
function getSumNumbers(num) {
  let str = String(num)
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i])
  }
  return sum
}

console.log(getSumNumbers(2021))

// Задание 5
function getSum(a, b) {
  if (a === b) {
    return a
  }
  let sum = 0
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

console.log(getSum(2, 4))

// Задание 6
function fooBoo(isTrue, foo, boo) {
  if (isTrue) {
    foo()
  } else {
    boo()
  }
}

function foo() {
  console.log('foo')
}

function boo() {
  console.log('boo')
}

fooBoo(true, foo, boo)
fooBoo(false, foo, boo)