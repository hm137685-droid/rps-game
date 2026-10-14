let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//tie
const drawGame=()=>{
  console.log("game was draw:");
  msg.innerText="Game was draw,play again";
    msg.style.backgroundColor="#081b31";
}
//check winner
const showWinner=(userWin,userChoice,ComChoice)=>{
if(userWin){
userScore ++;
userScorePara.innerText=userScore;
  console.log("you win");
  msg.innerText=`you win! your ${userChoice} beats ${ComChoice}`;
  msg.style.backgroundColor="green";
}else{
  compScore ++;
compScorePara.innerText=compScore;
  console.log("you loss");
   msg.innerText=`you lost. computer ${ComChoice} beats your ${userChoice} `;
   msg.style.backgroundColor="red";
}
}

//generate user choice
const playGame=(userChoice)=>{
  console.log("user choice =",userChoice);
  //to call computerChoice fn
  const ComChoice=genComChoice();
  console.log("computer choice =",ComChoice);
  //fighting
  if (userChoice === ComChoice) {
    //draw game
    drawGame();
  }
  else {
    let userWin=true;
    if(userChoice ==="rock"){
      //scissors,paper
      userWin=ComChoice ==="paper"? false:true;
    } else if(userChoice === "paper"){
      //rock,scissors
      userWin=ComChoice === "scissors"? false:true;
        } else{
          //rock,paper
          userWin=ComChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,ComChoice)
  }
};
//generate computer choice
const genComChoice=()=>{
  const options=["rock","paper","scissors"];
 const randomIdx= Math.floor(Math.random ()*3);
 return options[randomIdx];
}




choices.forEach((choice) =>{
  const userChoice=  choice.getAttribute("id");
    choice.addEventListener("click",() =>{
     playGame(userChoice);
    });
});