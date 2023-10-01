// Get the span element
var numberSpan = document.getElementById('y');

// Define the target number (7 in this case)
var targetNumber = 7;

// Define the interval in milliseconds for the animation
var interval = 150; // 100ms for example, you can adjust this to your preference

// Define the current number (starting from 0)
var currentNumber = 0;

// Function to update the number in the span element
export const updateNumber = () => {
  // Increment the current number
  currentNumber++;
  
  // Update the content of the span element
  if (numberSpan.textContent)
  {
    numberSpan.textContent = currentNumber;
  }

  
  // Check if the current number has reached the target number
  if (currentNumber === targetNumber) {
    clearInterval(numberInterval); // Stop the interval when target number is reached
  }
};

// Start the interval to update the number
var numberInterval = setInterval(updateNumber, interval);