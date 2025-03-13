# Jeopardy - Classic 80s Edition

This is a web-based Jeopardy game inspired by the classic 1980s game show. It features a grid of categories and questions, a timer for each question, and a scoring system for multiple players. The game is styled to evoke the nostalgic feel of the 1980s, making it a fun and retro experience.

## Features

- **Interactive Game Board**: A grid displaying categories and point values.
- **Timer**: Each question has a countdown timer (default: 10 seconds).
- **"Show Answer" Button**: Reveal the correct answer on demand.
- **Scoring System**: Supports up to 6 players with manual score adjustments.
- **Customizable Player Names**: Personalize player names with a double-click.
- **Retro 1980s Styling**: A nostalgic design inspired by the era.

## Setup Instructions

To run the game, follow these simple steps:

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. No additional dependencies or setup are required—just start playing!

## How to Play

1. **Select a Question**: Click a cell on the game board to choose a question based on its point value.
2. **Read the Question**: The question appears in a modal window with a timer counting down from 10 seconds.
3. **Answer the Question**: Players must respond before the timer runs out; if it expires, the answer is automatically shown.
4. **Show Answer**: Click the "Show Answer" button to reveal the correct answer at any time.
5. **Adjust Scores**: Use the "+" and "-" buttons next to each player's name to update scores based on their answers.
6. **Close the Modal**: Click the "×" button to return to the game board; the used question will be marked as "Used."
7. **Rename Players**: Double-click a player's name in the score display to edit it.

## Customizing the Game

- **Timer**: Adjust the default 10-second timer by modifying the `timer` property in the `gameState` object within `script.js`.
- **Questions**: Customize categories and questions by editing the `questions.js` file to suit your preferences.
