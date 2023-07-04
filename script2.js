// 2.Write a logic to print all prime number from 2 to 50

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimeNumbers(start, end) {
    let primeNumbers = [];
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  }
  
  // Example usage:
  let primeNums = printPrimeNumbers(2, 50);
  console.log(primeNums);
