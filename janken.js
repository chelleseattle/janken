let choices = ["Rock", "Paper", "Scissors"];

game();

function game() {
    
    let playerWins = 0;
    let computerWins = 0; 

    let winner;

    while (playerWins < 5 && computerWins < 5) {

        winner = playJanken(getPlayerSelection(), computerPlay());
        if (winner == "tie") {
        } else if (winner == "computer") {
            computerWins++;
            console.log("computer win");
        } else {
            playerWins++;
            console.log("I won");
        }
    }

    if( playerWins == 5){
        console.log("You Won!")
    } else {
        console.log("You Lost!")
    }

}


function computerPlay() {

    let choiceNum = Math.floor(Math.random()*3);
    switch (choiceNum) {
        case 0:
            computerSelection = choices[0];
            break;
        case 1:
            computerSelection = choices[1];
            break;
        case 2:
            computerSelection = choices[2];
            break;
    }
    console.log(computerSelection);
    return computerSelection;
}

function playJanken(playerSelection, computerSelection) {
    let winner;

    if (playerSelection == computerSelection) {
        winner = "tie";
        return winner;
    }
    if (playerSelection == choices[0] && computerSelection == choices[1] ||
        playerSelection == choices[1] && computerSelection == choices[2] ||
        playerSelection == choices[2] && computerSelection == choices[0]) {
        winner = "computer"
    
    } else {
        winner = "player"
    }

    return winner;
}

function getPlayerSelection() {

    let playerSelection = prompt("Pick your poison:");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelection == choices[0] || playerSelection == choices[1] || playerSelection == choices[2] ) {
        console.log(playerSelection);
        return playerSelection;
    } else {
        prompt("Your choice was not valid, try again: "); 
        return getPlayerSelection(); 
    }

}
