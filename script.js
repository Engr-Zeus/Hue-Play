// Define available colors
const colors = ['#FF5733', '#33FF57', '#5733FF', '#F4D03F', '#AF7AC5', '#F39C12'];
let targetColor = '';
let score = 0;

// Initialize game
function setUpGame(initialSetup = true) {
  targetColor = getRandomColor(); // Select a new target color

  // Ensure the color box updates
  const colorBox = document.getElementById('colorBox');
  colorBox.style.backgroundColor = targetColor;

  // If it's the first setup, assign colors to buttons
  if (initialSetup) {
    const buttons = document.querySelectorAll('.color-btn');
    buttons.forEach((button, index) => {
      button.style.backgroundColor = colors[index];
      button.onclick = () => checkGuess(colors[index]);
    });
  }

  // Reset game status message
  document.getElementById('gameStatus').textContent = 'Guess the correct color!';
}

// Get a random color from the list
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Check player's guess
function checkGuess(selectedColor) {
  const gameStatus = document.getElementById('gameStatus');
  if (selectedColor === targetColor) {
    gameStatus.textContent = 'Correct! Well done!';
    gameStatus.style.color = 'green';
    score++;

    // Update score and change only the color box
    document.getElementById('score').textContent = `Score: ${score}`;
    setTimeout(() => setUpGame(false), 1000); // Update only the color box
  } else {
    gameStatus.textContent = 'Wrong! Try again.';
    gameStatus.style.color = 'red';
  }
}

// Restart the game
function startNewGame() {
  score = 0;
  document.getElementById('score').textContent = 'Score: 0';
  setUpGame(); // Ensure a new color is selected and displayed
}

// Start the game when the page loads
window.onload = () => setUpGame();

// Attach event listener to restart button
document.getElementById('newGameButton').addEventListener('click', startNewGame);
