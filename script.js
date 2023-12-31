let playerChoice = prompt('Choose Your Destiny: Paper, Scissors, or Rock', '');
let cpuChoice = computerSelection();

function computerSelection() {
    const computerChoices = ["Paper", "Scissors", "Rock"];
    const randomSelection = Math.floor(Math.random()* computerChoices.length);
    return computerChoices[randomSelection];
}

function caseFix(playerChoice) {
    let firstLetter = playerChoice[0].toUpperCase();
    let lowerCase = playerChoice.toLowerCase();
    return firstLetter + lowerCase.slice(1);
}
console.log('You chose:', caseFix(playerChoice));


function scoring() {

    console.log(The cpuChoice);

    if (caseFix(playerChoice) == 'Rock' && cpuChoice == 'Paper') {
        console.log('You lose');
    } else if (caseFix(playerChoice) == 'Rock' && cpuChoice == 'Scissors') {
        console.log('You win!');
    } else {
        console.log('You tie');
    }
    if (caseFix(playerChoice) == 'Scissors' && cpuChoice == 'Rock') {
        console.log('You lose');
    } else if (caseFix(playerChoice) == 'Scissors' && cpuChoice == 'Paper') {
        console.log('You win!');
    } else {
        console.log('You tie');
    }
    if (caseFix(playerChoice) == 'Paper' && cpuChoice == 'Scissors') {
        console.log('You lose');
    } else if (caseFix(playerChoice) == 'Paper' && cpuChoice == 'Rock') {
        console.log('You win!');
    } else {
        console.log('You tie');
    }    
}
console.log(scoring());