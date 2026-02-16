const HISTORY_SIZE = 5;
const numberHistory = new Array(HISTORY_SIZE).fill(null);
let nextHistoryIndex = 0;

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

  // Fill one pre-created history slot per run.
  numberHistory[nextHistoryIndex] = sortedNumbers;
  nextHistoryIndex = (nextHistoryIndex + 1) % HISTORY_SIZE;
  updateHistoryDisplay();
});

function updateHistoryDisplay() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = ''; // Clear previous history

  numberHistory.forEach((entry, index) => {
    const historyEntryDiv = document.createElement('div');
    historyEntryDiv.classList.add('history-entry');

    const entryHeader = document.createElement('h3');
    entryHeader.textContent = `Slot ${index + 1}`;
    historyEntryDiv.appendChild(entryHeader);

    const numbersDiv = document.createElement('div');
    numbersDiv.classList.add('history-numbers');

    if (entry) {
      entry.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersDiv.appendChild(numberElement);
      });
    } else {
      const placeholder = document.createElement('span');
      placeholder.classList.add('history-placeholder');
      placeholder.textContent = 'Empty';
      numbersDiv.appendChild(placeholder);
    }

    historyEntryDiv.appendChild(numbersDiv);
    historyList.appendChild(historyEntryDiv);
  });
}

updateHistoryDisplay();
