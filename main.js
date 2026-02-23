const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const historySlots = document.querySelectorAll('.history-slot');

// Get a reference to the Firestore database service
const db = firebase.firestore();
const lotteryCollection = db.collection('lottery_tickets');

let filledSlots = 0;
let generatedGames = [];

function renderSlots() {
    historySlots.forEach((slot, index) => {
        slot.innerHTML = ''; // Clear slot
        if (index < filledSlots) {
            const game = generatedGames[index];
            
            const header = document.createElement('h3');
            header.textContent = `Game ${index + 1}`;

            const numbersDiv = document.createElement('div');
            numbersDiv.classList.add('history-numbers');

            game.forEach(number => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('number');
                numberElement.textContent = number;
                numbersDiv.appendChild(numberElement);
            });
            
            slot.appendChild(header);
            slot.appendChild(numbersDiv);
        } else {
            slot.innerHTML = '<span class="history-placeholder">Empty</span>';
        }
    });
}

function updateButtonState() {
    if (filledSlots === 5) {
        generateBtn.textContent = 'Reset & Save';
        generateBtn.classList.add('reset-mode');
    } else {
        generateBtn.textContent = 'Generate Numbers';
        generateBtn.classList.remove('reset-mode');
    }
}

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function resetGame() {
    filledSlots = 0;
    generatedGames = [];
    numbersContainer.innerHTML = '';
    renderSlots();
    updateButtonState();
}

async function saveAndReset() {
    if (generatedGames.length !== 5) return;

    // Create an object to hold the data in a Firestore-friendly way
    const dataToSave = {
        createdAt: new Date()
    };

    // Add each game as a separate field, e.g., game1, game2, ...
    generatedGames.forEach((game, index) => {
        dataToSave[`game${index + 1}`] = game;
    });

    try {
        await lotteryCollection.add(dataToSave);
        alert('Successfully saved the 5-game set!');
        resetGame();
    } catch (error) {
        console.error("Error saving the ticket: ", error);
        // Display the actual error message in the alert
        alert(`Failed to save the game set. Error: ${error.message}`);
    }
}

generateBtn.addEventListener('click', () => {
    if (filledSlots < 5) {
        const newNumbers = generateNumbers();
        generatedGames.push(newNumbers);
        filledSlots++;
        
        // Display current generated numbers
        numbersContainer.innerHTML = '';
        newNumbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numbersContainer.appendChild(numberElement);
        });

        renderSlots();
        updateButtonState();
    } else {
        saveAndReset();
    }
});

// Initial setup
renderSlots();