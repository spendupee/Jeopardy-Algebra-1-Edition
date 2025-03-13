document.addEventListener("DOMContentLoaded", () => {
    // Game state with 6 players
    let gameState = {
        players: [
            { id: 1, name: "Player 1", score: 0 },
            { id: 2, name: "Player 2", score: 0 },
            { id: 3, name: "Player 3", score: 0 },
            { id: 4, name: "Player 4", score: 0 },
            { id: 5, name: "Player 5", score: 0 },
            { id: 6, name: "Player 6", score: 0 }
        ],
        currentQuestion: null,
        answeredQuestions: {},
        timer: 25,
        timeLeft: 25
    };

    // DOM elements
    const gameBoard = document.getElementById("game-board");
    const scoreDisplay = document.getElementById("score-display");
    const modal = document.getElementById("modal");
    const modalQuestion = document.getElementById("modal-question");
    const gameStatus = document.getElementById("game-status");
    const closeModal = document.getElementById("close-modal");
    const timeLeftSpan = document.getElementById("time-left");
    const answerInputDiv = document.getElementById("answer-input");

    let timerInterval;
    let boardQuestions = {};

    // Add event listener for "Show Answer" button
    document.getElementById("show-answer-btn").addEventListener("click", () => {
        document.getElementById("modal-answer").style.display = "block";
    });

    // Initialize game
    function initializeGame() {
        setupGameBoard();
        updateScores();
        updateGameStatus();
    }

    function setupGameBoard() {
    // Get all category keys from questions.js
    const allCategories = Object.keys(questions);

    // Ensure there are at least 6 categories to avoid errors
    if (allCategories.length < 6) {
        console.error("Not enough categories! Expected at least 6, got", allCategories.length);
        return;
    }

    // Shuffle all categories and select the first 6
    shuffle(allCategories);
    const categories = allCategories.slice(0, 6);

    // Define point values for the 5 questions per category
    const pointValues = [100, 200, 300, 400, 500];

    // Assign questions to the board for the selected categories
    boardQuestions = {};
    categories.forEach(category => {
        const shuffled = [...questions[category]];
        shuffle(shuffled);
        boardQuestions[category] = shuffled.slice(0, 5);
    });

    // Clear the game board
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";

    // Add category headers
    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.textContent = category;
        gameBoard.appendChild(categoryDiv);
    });

    // Add question cells
    for (let row = 0; row < 5; row++) {
        categories.forEach(category => {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.textContent = pointValues[row];
            cell.dataset.category = category;
            cell.dataset.points = pointValues[row];
            cell.dataset.index = row;
            const key = `${category}-${row}`;
            if (gameState.answeredQuestions[key]) {
                cell.classList.add("used");
                cell.textContent = "Used";
            } else {
                cell.addEventListener("click", () => handleCellClick(cell, key));
            }
            gameBoard.appendChild(cell);
        });
    }
}

    // Handle cell click
    function handleCellClick(cell, key) {
        if (gameState.answeredQuestions[key]) return;

        cell.classList.add("used");
        cell.textContent = "Used";
        const cat = cell.dataset.category;
        const idx = parseInt(cell.dataset.index);
        const q = boardQuestions[cat][idx];

        gameState.currentQuestion = {
            category: cat,
            index: idx,
            points: parseInt(cell.dataset.points),
            question: q.question,
            answer: q.answer
        };

        modalQuestion.textContent = q.question;
        document.getElementById("answer-text").textContent = q.answer;
        document.getElementById("modal-answer").style.display = "none"; // Hide answer initially
        answerInputDiv.innerHTML = "";
        gameState.players.forEach(player => {
            const playerDiv = document.createElement("div");
            playerDiv.className = "player-score-control";
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <button class="subtract-btn" data-player-id="${player.id}">-</button>
                <button class="add-btn" data-player-id="${player.id}">+</button>
            `;
            answerInputDiv.appendChild(playerDiv);
        });
        modal.style.display = "block";
        gameState.answeredQuestions[key] = true;

        startTimer();
        updateGameStatus();
    }

    // Start timer
    function startTimer() {
        gameState.timeLeft = gameState.timer;
        timeLeftSpan.textContent = gameState.timeLeft;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            gameState.timeLeft--;
            timeLeftSpan.textContent = gameState.timeLeft;
            if (gameState.timeLeft <= 0) {
                clearInterval(timerInterval);
                document.getElementById("modal-answer").style.display = "block"; // Show answer when time runs out
            }
        }, 1000);
    }

    // Update scores with editable player names
    function updateScores() {
        scoreDisplay.innerHTML = gameState.players.map(player => 
            `<div class="score">
                <span class="player-name" data-player-id="${player.id}">${player.name}</span>: ${player.score}
            </div>`
        ).join("");
    }

    // Update game status
    function updateGameStatus() {
        gameStatus.textContent = "Select a question from the board.";
    }

    // Handle score adjustments
    answerInputDiv.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("add-btn") || target.classList.contains("subtract-btn")) {
            const playerId = parseInt(target.dataset.playerId);
            const player = gameState.players.find(p => p.id === playerId);
            const points = gameState.currentQuestion.points;
            if (target.classList.contains("add-btn")) {
                player.score += points;
            } else {
                player.score -= points;
            }
            updateScores();
        }
    });

    // Handle renaming players on double-click
    scoreDisplay.addEventListener("dblclick", (event) => {
        if (event.target.classList.contains("player-name")) {
            const playerId = parseInt(event.target.dataset.playerId);
            const newName = prompt("Enter new name for player:", event.target.textContent);
            if (newName) { // Only update if a name is provided
                const player = gameState.players.find(p => p.id === playerId);
                player.name = newName;
                updateScores(); // Refresh the score display
            }
        }
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        clearInterval(timerInterval);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            clearInterval(timerInterval);
        }
    });

    // Shuffle array helper
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Start the game
    initializeGame();
});