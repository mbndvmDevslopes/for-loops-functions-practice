// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let accountHolders = [];
  for (let i = 0; i < array.length; i++) {
    for (let character in array[i].name){
      if (array[i].name[character].toLowerCase() === letter) {  //fails if toLowerCase not used
        accountHolders.push(array[i].name);
        break;
      }
    }
  }
  return accountHolders;
 }


 //getClientsWithLetterInName(bankAccounts, 'c')
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function




















/* export  function getClientsWithLetterInName(array, letter) {
  let accountHolders = [];
  for (let i =0; i < array.length; i++) {
    let clientName = array[i].name.split('');
    
    for (let z=0; z<clientName.length; z++) {
      if (clientName[z].toLowerCase() === letter.toLowerCase()) {
       accountHolders.push(array[i].name);
        break;
      } 
  }
}
return accountHolders;

 } */