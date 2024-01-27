const users = ['Olga', 'Sandr', 'Mary', 'Mike']
function checkForCopyItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return `Hello, ${item}!`
    }
  }
  return 'Nobody at home))'
}
console.log(checkForCopyItem(users, 'Mike'))






const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function checkForCopyItem(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
  return 'Ooops, number is under 10'
}
console.log(checkForCopyItem(numbers))





function calc(firstNumber, secondNumber, operator) {
  if (operator === 'plus') {
    console.log(firstNumber + secondNumber)
  } else if (operator === 'minus') {
    console.log(firstNumber - secondNumber)
  } else if (operator === 'multiply') {
    console.log(firstNumber * secondNumber)
  } else if (operator === 'division') {
    console.log(firstNumber / secondNumber)
  }
}
console.log(calc(20, 10, 'division'))


