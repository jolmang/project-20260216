let numberHistory = [];

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

  // Add to history
  if (numberHistory.length >= 5) {
    numberHistory = [sortedNumbers]; // Reset history with the new entry
  } else {
    numberHistory.push(sortedNumbers);
  }
  updateHistoryDisplay();
});

function updateHistoryDisplay() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = ''; // Clear previous history

  numberHistory.forEach((entry, index) => {
    const historyEntryDiv = document.createElement('div');
    historyEntryDiv.classList.add('history-entry');

    const entryHeader = document.createElement('h3');
    entryHeader.textContent = `Generation ${index + 1}`;
    historyEntryDiv.appendChild(entryHeader);

    const numbersDiv = document.createElement('div');
    numbersDiv.classList.add('history-numbers');
    entry.forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = number;
      numbersDiv.appendChild(numberElement);
    });
    historyEntryDiv.appendChild(numbersDiv);
    historyList.appendChild(historyEntryDiv);
  });
}