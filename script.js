/*
    function caseFix(playerInput) {
        let firstLetter = playerInput[0].toUpperCase();
        let lowerCase = playerInput.toLowerCase();
        return firstLetter + lowerCase.slice(1);
    }*/

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
}