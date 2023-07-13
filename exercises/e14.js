
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]


export function getClientsWithWrongBalance(array) {
  let unbalancedAccounts = [];
  
  for (let i = 0; i < array.length; i++){
    let withdrawalSum = 0;
    let depositSum = 0;
    if (!array[i].deposits) {
      depositSum = 0;
    } else {
        for (let z= 0; z < array[i].deposits.length; z++) {
          depositSum += array[i].deposits[z];
        }
    }
    if (!array[i].withdrawals) {
      withdrawalSum = 0;
    } else {
      for (let z= 0; z < array[i].withdrawals.length; z++) {
      withdrawalSum += array[i].withdrawals[z];
      }
    }
    if (array[i].balance !== (depositSum - withdrawalSum)) {
      unbalancedAccounts.push(array[i]);
    }
  }
  return unbalancedAccounts;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
