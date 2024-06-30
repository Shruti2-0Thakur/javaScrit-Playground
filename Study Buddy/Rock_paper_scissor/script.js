// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playWithFriendBtn = document.getElementById('play-with-friend');
    const playWithSystemBtn = document.getElementById('play-with-system');
    const gameArea = document.querySelector('.game-area');
    const player1Buttons = document.querySelectorAll('.player1 .choice');
    const player2Buttons = document.querySelectorAll('.player2 .choice');
    const resultText = document.getElementById('result-text');

    let player1Choice = '';
    let player2Choice = '';
    let gameMode = '';

    playWithFriendBtn.addEventListener('click', () => {
        gameMode = 'friend';
        gameArea.style.display = 'flex';
    });

    playWithSystemBtn.addEventListener('click', () => {
        gameMode = 'system';
        gameArea.style.display = 'flex';
        document.querySelector('.player2 h2').textContent = 'System';
        player2Buttons.forEach(button => button.style.display = 'none');
    });

    player1Buttons.forEach(button => {
        button.addEventListener('click', () => {
            player1Choice = button.getAttribute('data-choice');
            if (gameMode === 'system') {
                player2Choice = getRandomChoice();
                displayResult();
            }
        });
    });

    player2Buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (gameMode === 'friend') {
                player2Choice = button.getAttribute('data-choice');
                displayResult();
            }
        });
    });

    function getRandomChoice() {
        const choices = ['stone', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function displayResult() {
        let result = '';
        if (player1Choice === player2Choice) {
            result = 'It\'s a draw!';
        } else if ((player1Choice === 'stone' && player2Choice === 'scissors') ||
                   (player1Choice === 'paper' && player2Choice === 'stone') ||
                   (player1Choice === 'scissors' && player2Choice === 'paper')) {
            result = 'Player 1 wins!';
        } else {
            result = 'Player 2 wins!';
        }
        resultText.textContent = result;
    }
});
