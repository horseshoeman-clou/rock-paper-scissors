function getComputerChoice(){
let n=Math.random();
if(n<1/3) return "rock";
else if(n<2/3) return "paper";
else return "scissors";
}


function getHumanChoice(){

let input= prompt("ROCK PAPER SCISSOR!!");
return input;
}

function playRound(humanChoice,computerChoice){
humanChoice=humanChoice.toLowerCase();

if(humanChoice===computerChoice){
    console.log("It's a draw");
    return "draw";
}

if(
     (humanChoice==="rock" && computerChoice==="scissors") ||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper")
){
    console.log("You win");
return "human";
}

console.log("you lose!");
return "computer";

}

function game(){
    let humanScore=0;
let computerScore=0;

for(let i=0;i<5;i++){
    const human=getHumanChoice();
    const computer=getComputerChoice();

    const result=playRound(human,computer);

    if(result==="human")
        humanScore++;
    else if( result==="computer")
        computerScore++;
}
    console.log("FINAL SCORE:",humanScore,computerScore);

  
}

game()
