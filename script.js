let playerInput = prompt('Choose Your Destiny: Paper, Scissors, or Rock', '');
let cpuChoice = computerSelection();
let playerChoice = caseFix(playerInput);

function computerSelection() {
    const computerChoices = ["Paper", "Scissors", "Rock"];
    const randomSelection = Math.floor(Math.random()* computerChoices.length);
    return computerChoices[randomSelection];
}

function caseFix(playerInput) {
    let firstLetter = playerInput[0].toUpperCase();
    let lowerCase = playerInput.toLowerCase();
    return firstLetter + lowerCase.slice(1);
}
console.log('You chose:', caseFix(playerInput));


function scoring() {

    console.log('The computer chose:', cpuChoice);

    if ((playerChoice == 'Rock' && cpuChoice == 'Paper') || (playerChoice == 'Scissors' && cpuChoice == 'Rock') || (playerChoice == 'Paper' && cpuChoice == 'Scissors'))  {
        console.log('You lose');
    } else if ((playerChoice == 'Rock' && cpuChoice == 'Scissors') || (playerChoice == 'Scissors' && cpuChoice == 'Paper') || (playerChoice == 'Paper' && cpuChoice == 'Rock')) {
        console.log('You win!');
    } else {
        console.log('You tie');
    }
}
console.log(scoring());