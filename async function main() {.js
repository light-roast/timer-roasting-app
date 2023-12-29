const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  
async function main() {
  const numbers = await rl.question('Please enter something: ', (userInput) => {
    // Display the user's input
    console.log('You entered:', userInput);
  
    // Close the readline interface
    rl.close();
  });

  let arrOne = [];
  let arrTwo = [];
  let currentNumber = "";

  for (let i = 0; i < numbers.length; i++) {
    if (!isNaN(numbers[i]) || numbers[i] === '.') {
      // Continue building the current number
      currentNumber += numbers[i];
    } else if (numbers[i] === ',') {
      // If a comma is encountered, push the current number to arrOne
      arrOne.push(Number(currentNumber));
      currentNumber = ""; // Reset the current number
    } else if (numbers[i] === '/') {
      // If a slash is encountered, push the current number to arrTwo
      if (currentNumber !== "") {
        arrTwo.push(Number(currentNumber));
        currentNumber = ""; // Reset the current number
      }
    }
  }

  // Don't forget to push the last number in each array
  if (currentNumber !== "") {
    arrOne.push(Number(currentNumber));
    arrTwo.push(Number(currentNumber));
  }

  // Now arrOne and arrTwo should contain the desired arrays
  console.log("Array One:", arrOne);
  console.log("Array Two:", arrTwo)
}
// Example usage
main();