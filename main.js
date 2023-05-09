function getComputerChoice(min, max){
    // const number = Math.floor(Math.random() * 3) + 1;
    const number = Math.floor(Math.random() * (max-min+1)) + min;
    return number;
    if (number === 1)return "Rock";
    else if (number === 2) return "Paper";
    else return "Scissors";
};

for(i = 0; i <= 50; i++){
    console.log(getComputerChoice(2,5))
}