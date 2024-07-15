let prizeDoor;
let userChoice;
let prizeAmount;
let totalPrize = 0;

function initGame() {
    prizeDoor = Math.floor(Math.random() * 3) + 1;
    prizeAmount = (Math.floor(Math.random() * 2) + 5) * 10; // Random prize between 50 and 100
    userChoice = null;
    document.getElementById('message').textContent = "Choose a door!";
    resetDoors();
}

function resetDoors() {
    for (let i = 1; i <= 3; i++) {
        let door = document.getElementById(`door${i}`);
        door.textContent = `Door ${i}`;
        door.style.backgroundColor = '#c3a3f1';
        door.style.cursor = 'pointer';
    }
}

function chooseDoor(doorNumber) {
    userChoice = doorNumber;
    endGame();
}

function endGame() {
    let message;
    if (userChoice === prizeDoor) {
        message = `Congratulations! You won a prize of ${prizeAmount}.`;
        totalPrize += prizeAmount;
        document.getElementById('totalPrize').textContent = `Total Prize: ${totalPrize}`;
    } else {
        message = `Sorry, the prize was behind Door ${prizeDoor}.`;
    }

    document.getElementById('message').textContent = message;

    for (let i = 1; i <= 3; i++) {
        let door = document.getElementById(`door${i}`);
        door.style.cursor = 'default';
        if (i === prizeDoor) {
            door.textContent = `Prize: ${prizeAmount}`;
            door.style.backgroundColor = '#6414e9';
        }
    }

    // Display the end message
    document.getElementById('endMessage').textContent = "Thank you for playing!";
}

window.onload = initGame;
