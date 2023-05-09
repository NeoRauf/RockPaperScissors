function getComputerChoice(min, max){
    // const number = Math.floor(Math.random() * 3) + 1;
    const number = Math.floor(Math.random() * (max-min+1)) + min;

    if (number === 1)return "Rock";
    else if (number === 2) return "Paper";
    else return "Scissors";
};



var playerSelection

function playRound(compSelection, playerSelection){

    var loseAndWin = ""
    var playerWin = 0;
    var computerWin = 0;

    for (i=0; i<5; i++){
        var playerSelection = prompt("Your turn:")
        var compSelection = getComputerChoice(1, 3)

        if (compSelection==="Paper" && playerSelection.toLowerCase()==="rock"){
            computerWin++
            loseAndWin = "You Lose! Paper beats Rock"
            console.log(loseAndWin)
        } else if (compSelection==="Paper" && playerSelection.toLowerCase()==="scissors"){
            playerWin++
            loseAndWin = "You Win! Scissors beats Paper"
            console.log(loseAndWin)
        } else if (compSelection==="Paper" && playerSelection.toLowerCase()==="paper"){
            loseAndWin = "Draw!"
            console.log(loseAndWin)
        } else if (compSelection==="Rock" && playerSelection.toLowerCase()==="scissors"){
            computerWin++
            loseAndWin = "You Lose! Rock beats Scissors"
            console.log(loseAndWin)
        } else if (compSelection==="Rock" && playerSelection.toLowerCase()==="paper"){
            playerWin++
            loseAndWin = "You Win! Paper beats Rock"
            console.log(loseAndWin)
        } else if (compSelection==="Rock" && playerSelection.toLowerCase()==="rock"){
            loseAndWin = "Draw!"
            console.log(loseAndWin)
        } else if (compSelection==="Scissors" && playerSelection.toLowerCase()==="paper"){
            computerWin++
            loseAndWin = "You Lose! Scissors beats Paper"
            console.log(loseAndWin)
        } else if (compSelection==="Scissors" && playerSelection.toLowerCase()==="rock"){
            playerWin++
            loseAndWin = "You Win! Rock beats Scissors"
            console.log(loseAndWin)
        } else if (compSelection==="Scissors" && playerSelection.toLowerCase()==="scissor"){
            loseAndWin = "Draw!"
            console.log(loseAndWin)
        }
    }

    if(computerWin>playerWin){
        return "You Lost! Computer: " + computerWin + "n/You: " + playerWin
    } else if(playerWin>computerWin) {return "You Won! You: " + playerWin + " Computer: " + computerWin}
    else{return "It's a draw!"}
}

console.log(playRound(getComputerChoice(1, 3), playerSelection))