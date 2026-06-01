
const rockButton = document.createElement("button");
rockButton.textContent="Rock";
document.body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent="Paper";
document.body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent="Scissors";
document.body.appendChild(scissorsButton);

rockButton.addEventListener('click',()=>{
    playRound("rock");
});

paperButton.addEventListener('click',()=>{
    playRound("paper");
});

scissorsButton.addEventListener('click',()=>{
    playRound('scissors');
});



function getComputerChoice(){
let n=Math.random();
if(n<1/3) return "rock";
else if(n<2/3) return "paper";
else return "scissors";
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice){

if(humanScore>=5 || computerScore>=5)
    return;

const computerChoice=getComputerChoice();

let result;

if(humanChoice===computerChoice){
    result="draw";
}

else if(
     (humanChoice==="rock" && computerChoice==="scissors") ||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper")
){
result="human";
humanScore++;
}
else{
    result="computer";
    computerScore++;
}

const resultDiv = document.querySelector('#result');

if(result==="human")
    resultDiv.textContent="You win this round!";
else if(result==="computer")
    resultDiv.textContent="You lose."

const score = document.querySelector('#score');
score.textContent=`Human: ${humanScore} Computer: ${computerScore} `;

if(humanScore>=5){
    resultDiv.textContent="You win the game!";
    return;
}

if(computerScore>=5){
    resultDiv.textContent="Computer wins the game!";
    return;
}

}

function game(){
    let humanScore=0;
let computerScore=0;

/*for(let i=0;i<5;i++){
    const human=getHumanChoice();
    const computer=getComputerChoice();

    const result=playRound(human,computer);

    if(result==="human")
        humanScore++;
    else if( result==="computer")
        computerScore++;
}*/

    //console.log("FINAL SCORE:",humanScore,computerScore);

  
}

game()

