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
    round = 1;


    const btn = document.querySelectorAll('button');
    const combatLog = document.querySelector('#selections');
    const cpuPoints = document.querySelector('#cpu-score');
    const playerPoints = document.querySelector('#your-score');

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            playRound(e.target.value);
        });
    });

        function playRound(playerSelection) {

            console.log('You chose:', playerSelection);

            const combatRound = document.createElement('div');
            const roundNum = document.createElement('div');
            roundNum.className = 'round';    
                        
            roundNum.textContent = 'Round: ' + round; 
            combatLog.appendChild(roundNum);      

            const computerSelection = getComputerChoice();        

            function getComputerChoice() {
                const computerChoices = ["Paper", "Scissors", "Rock"];
                const randomSelection = Math.floor(Math.random()* computerChoices.length);
                return computerChoices[randomSelection];
            }
            console.log('The computer chose:', computerSelection);  

            const combatRoundResult = document.createElement('div');
            combatRoundResult.className = 'results';

            if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Scissors'))  {
                console.log('You lose', computerSelection, 'beats', playerSelection);
                cpuScore++;
                round++;
                document.querySelector('#cpu-score h4').innerText = cpuScore;
                combatRoundResult.textContent = '>> You lost!';     

            } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
                console.log('You win!');
                playerScore++;
                round++;
                document.querySelector('#your-score h4').innerText = playerScore;
                combatRoundResult.textContent = '>> You win!';               
            } else {
                console.log('You tied. Play again.');
                combatRoundResult.textContent = '>> TIE! Replay next round.';                  
                }
            console.log('Your score:', playerScore, 'Computer Score:', cpuScore); 


            combatRound.textContent = 'You chose: ' + playerSelection + '. Bob chose: ' + computerSelection + '.';

            combatLog.appendChild(combatRound);
            combatLog.appendChild(combatRoundResult);    
            if (playerScore == 5 || cpuScore == 5) {
                if (playerScore == 5) {
                    document.querySelector('#choiceBox div').innerText = 'You win! Game Over.';
                    createBtn();
                } else {
                    document.querySelector('#choiceBox div').innerText = 'You LOSE! Game Over.';
                    createBtn();
                }
            } else {

            }
            
            function createBtn() {
                let refreshButton = document.createElement('input');
                refreshButton.type = "button";
                refreshButton.value = "Click To Play Again";
                refreshButton.className = "refresh";
                refreshButton.onclick = function() { window.location.reload(); };

                let selectPlacement = document.querySelector('#choiceBox div');
                selectPlacement.appendChild(refreshButton);

            }

            /*
            
            function caseFix(playerInput) {
                let firstLetter = playerInput[0].toUpperCase();
                let lowerCase = playerInput.toLowerCase();
                return firstLetter + lowerCase.slice(1);
            }*/

               
        /*}  // your code here!
        console.log(playRound());

        if (playerScore == 3 || cpuScore == 3) {
            if (playerScore == 3) {
                console.log('You scored', playerScore, 'You win the match! Refresh to play again.')
            } else {
                console.log('You lost! Your opponent scored', cpuScore, 'Refresh to try again.')
            }           
        } else {
            game();
        */}/*

    console.log(game());*/