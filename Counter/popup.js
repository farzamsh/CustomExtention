document.addEventListener('DOMContentLoaded', function() {
  // Initialize count value
  let count = 0;
  const countDisplay = document.getElementById('countDisplay');

  // Update count display
  function updateCount() {
    countDisplay.textContent = count.toString();
  }

  // Increment count when the "+" button is clicked
  document.getElementById('incrementButton').addEventListener('click', function() {
    count++;
    updateCount();
  });

  // Decrement count when the "-" button is clicked
  document.getElementById('decrementButton').addEventListener('click', function() {
    count--;
    updateCount();
  });

  // Reset count to zero when the "Reset" button is clicked
  document.getElementById('resetButton').addEventListener('click', function() {
    count = 0;
    updateCount();
  });

  // Initial count display
  updateCount();
});
