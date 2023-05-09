function getComputerChoice(min, max){
    // const number = Math.floor(Math.random() * 3) + 1;
    const number = Math.floor(Math.random() * (max-min+1)) + min;
    return number;
    if (number === 1)return "Rock";
    else if (number === 2) return "Paper";
    else return "Scissors";
};



var playerSelection

function game(compSelection, playerSelection){

    var loseAndWin = ""
    var playerWin = 0;
    var computerWin = 0;

    for (i=0; i<5; i++){
        var playerSelection = prompt("Your turn:")
        var compSelection = getComputerChoice(1, 3)

        if (compSelection==="Paper" && playerSelection==="Rock"){
            computerWin++
            loseAndWin = "You Lose! Paper beats Rock"
            console.log(loseAndWin)
        } else if (compSelection==="Paper" && playerSelection==="Scissors"){
            playerWin++
            loseAndWin = "You Win! Scissors beats Paper"
            console.log(loseAndWin)
        } else if (compSelection==="Rock" && playerSelection==="Scissors"){
            computerWin++
            loseAndWin = "You Lose! Rock beats Scissors"
            console.log(loseAndWin)
        } else if (compSelection==="Rock" && playerSelection==="Paper"){
            playerWin++
            loseAndWin = "You Win! Paper beats Rock"
            console.log(loseAndWin)
        } else if (compSelection==="Scissors" && playerSelection==="Paper"){
            computerWin++
            loseAndWin = "You Lose! Scissors beats Paper"
            console.log(loseAndWin)
        } else if (compSelection==="Scissors" && playerSelection==="Rock"){
            playerWin++
            loseAndWin = "You Win! Rock beats Scissors"
            console.log(loseAndWin)
        }
    }

    if(computerWin===5){
        return "You Lost! Computer: " + computerWin + "/nYou: " + playerWin
    } else if(playerWin===5) {return "You Won! You: " + playerWin + " Computer: " + computerWin}
}

console.log(game(getComputerChoice(1, 3), playerSelection))