// 2. Give an example of using multiple callback functions in a single function in JavaScript

function squareNumbers(number) {
    console.log(`Squared number = ${number * number}`)
  }
  
  function addNumbers(number1, number2) {
    return number1 + number2
  }
  
  function useCallbackForNumbers(callbackAdd, callbackSquare) {
    const sumOfNumbers = callbackAdd(arguments[2], arguments[3])
    callbackSquare(sumOfNumbers)
  }
  
  useCallbackForNumbers(addNumbers, squareNumbers, 2, 3)