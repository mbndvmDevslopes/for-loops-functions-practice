
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let deposits = [];
  for (let i=0; i < array.length; i++){
    if (array[i].deposits) {
      
      for (let z=0; z < array[i].deposits.length; z++) {
  
        if(array[i].deposits[z] > 100) {
          deposits.push(array[i].deposits[z]);
        }
      }
    }
  }
return deposits;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
