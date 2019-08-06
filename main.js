// Query Selectors

const welcomeScreen = document.getElementById('welcome-screen');
const welcomeParagraph = document.getElementById('welcome-paragraph');
const myForm = document.getElementById('my-form');
const userScoreOutput = document.getElementById('user-score');
const computerScoreOutput = document.getElementById('computer-score');
const playersNameOutput = document.getElementById('player-name'); 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userChoiceOutput = document.getElementById('user-output');
const computerChoiceOutput = document.getElementById('computer-output');
const resultOutput = document.getElementById('result-output');


// Declare Variables

let userName = prompt("Please enter your name: ");
let winningScore ;

// Functions

function completeDOM() {
    window.addEventListener('DOMContentLoaded', (e) => {
        console.log("Dom fully loaded and parsed");
    })
}

function writeWelcome() {
    welcomeParagraph.innerHTML = `Welcome, ${userName}, to <br>Rock, Paper, Scissors.<br><br>Please enter the score you would like to play to below.<br><br>After that, you know the deal...`
}

// function getWinningScore() {
//     myForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         winningScore = parseInt(document.getElementById('round-input').value);

//         console.log(winningScore);
//     })
// }


