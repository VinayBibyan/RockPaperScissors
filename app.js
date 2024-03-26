let userScore=0;
let compScore=0;

let msg = document.querySelector(".msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
let restartBtn = document.querySelector(".restart-btn");
let compRock = document.querySelector("#compRock");
let compPaper = document.querySelector("#compPaper");
let compScissor = document.querySelector("#compScissor");
const choices = document.querySelectorAll(".choice");
const compChoiceContainer = document.querySelectorAll(".compChoiceContainer");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame=(userChoice)=>{
    const compChoice = getCompChoice();
    dispCompChoice(compChoice);
    // console.log("user = ", userChoice);
    // console.log("computer = ", compChoice);
    if(userChoice===compChoice){
        console.log("draw game");
        msg.innerText="Game draw!";
        msg.removeAttribute("class");
        msg.classList.add("draw");
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissor"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    
    updateScore();
}

const dispCompChoice=(compChoice)=>{
    removeBorder();
    if(compChoice==="rock"){
        compRock.classList.add("borderClass");
    }else if(compChoice==="paper"){
        compPaper.classList.add("borderClass");
    }else{
        compScissor.classList.add("borderClass");
    }
}

const removeBorder=()=>{
    compRock.classList.remove("borderClass");
    compPaper.classList.remove("borderClass");
    compScissor.classList.remove("borderClass");
}

const getCompChoice=()=>{
    let opt=["rock", "paper", "scissor"];
    let randIndex=Math.floor(Math.random()*3);
    return opt[randIndex];
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="You win the game!";
        msg.removeAttribute("class");
        msg.classList.add("userWin");
        userScore++;
    }else{
        console.log("you lose");
        msg.innerText="Computer win the game!";
        msg.removeAttribute("class");
        msg.classList.add("compWin");
        compScore++;
    }
}

const updateScore=()=>{
    uScore.innerText=userScore;
    cScore.innerText=compScore;
}

restartBtn.addEventListener("click",()=>{
    userScore=0; 
    compScore=0;
    uScore.innerText=userScore;
    cScore.innerText=compScore;
    msg.innerText="Pick your move";
    msg.removeAttribute("class");
    msg.classList.add("msg");
    removeBorder();
})