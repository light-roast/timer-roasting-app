async function main() {
  const numbers = (await readline.next()).value;
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
  console.log("Array Two:", arrTwo);
}

// Assuming you have a readline object
const readline = {
  async next() {
    // Implement this according to your environment, returning a promise with user input
  },
};

// Example usage
main();