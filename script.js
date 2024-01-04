/*let playerInput = prompt('Choose Your Destiny: Paper, Scissors, or Rock', '');
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
        console.log('You tied. Play again.');

    }
}
console.log(scoring());*/



/*function playRound(playerSelection, computerSelection) {
    let playerInput = prompt('Choose Your Destiny: Paper, Scissors, or Rock', '');
    const playerSelection = caseFix(playerInput);
    const computerSelection = getComputerChoice();

    function getcomputerChoice() {
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
    
        if ((playerSelection == 'Rock' && cpuChoice == 'Paper') || (playerSelection == 'Scissors' && cpuChoice == 'Rock') || (playerSelection == 'Paper' && cpuChoice == 'Scissors'))  {
            console.log('You lose');
        } else if ((playerSelection == 'Rock' && cpuChoice == 'Scissors') || (playerSelection == 'Scissors' && cpuChoice == 'Paper') || (playerSelection == 'Paper' && cpuChoice == 'Rock')) {
            console.log('You win!');
        } else {
            console.log('You tied. Play again.');
            playRound();
        }
    }
  }
  console.log(playRound(playerSelection, computerSelection));*/

    playerScore = 0;
    cpuScore = 0;

    function game() {


        function playRound() {

        let playerInput = prompt('Choose Your Destiny: Paper, Scissors, or Rock', '');
        const playerSelection = caseFix(playerInput);
        const computerSelection = getComputerChoice();        

            function getComputerChoice() {
                const computerChoices = ["Paper", "Scissors", "Rock"];
                const randomSelection = Math.floor(Math.random()* computerChoices.length);
                return computerChoices[randomSelection];
            }
            console.log('The computer chose:', computerSelection);
            
            function caseFix(playerInput) {
                let firstLetter = playerInput[0].toUpperCase();
                let lowerCase = playerInput.toLowerCase();
                return firstLetter + lowerCase.slice(1);
            }

            if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Scissors'))  {
                console.log('You lose', computerSelection, 'beats', playerSelection);
                cpuScore++;
            } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
                console.log('You win!');
                playerScore++;
            } else {
                console.log('You tied. Play again.');
                playRound();
                }
            console.log('Your score:', playerScore, 'Computer Score:', cpuScore)                
        }  // your code here!
        console.log(playRound());

        if (playerScore == 3 || cpuScore == 3) {
            if (playerScore == 3) {
                console.log('You scored', playerScore, 'You win the match! Refresh to play again.')
            } else {
                console.log('You lost! Your opponent scored', cpuScore, 'Refresh to try again.')
            }           
        } else {
            game();
        }

    }
    console.log(game());