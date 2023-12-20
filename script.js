function getComputerChoice() {
    const computerChoices = ["Paper", "Scissors", "Rock"];
    const randomSelection = Math.floor(Math.random()* computerChoices.length);
    return computerChoices[randomSelection];
}

console.log(getComputerChoice());