


function checkForSurname(item) {
    return `Hello, ${item}!`
}
console.log(checkForSurname('max'))


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function checkForCopyItem(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}
(checkForCopyItem(numbers))




function calc(firstNumber, secondNumber, operator) {
    let res;
    if (operator === 'plus') {
        res = firstNumber + secondNumber
    } else if (operator === 'minus') {
        res = firstNumber - secondNumber
    } else if (operator === 'multiply') {
        res = firstNumber * secondNumber
    } else if (operator === 'division') {
        res = firstNumber / secondNumber
    }
    return res;
}
let res = calc(20, 10, 'multiply');
console.log(res)