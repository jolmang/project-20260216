document.getElementById('generate-btn').addEventListener('click', () => {
  const numbersContainer = document.getElementById('numbers-container');
  numbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  for (const number of sortedNumbers) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  }
});