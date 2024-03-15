let userscore=0;
let compscore=0;

const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");
const game=document.querySelector(".game");
const userimg=document.querySelector(".game .userside img");
const compimg=document.querySelector(".game .compside img");
const reset=document.querySelector("#reset");

reset.addEventListener("click",()=>{
    game.classList.add("hide");
    userscore=0;
    compscore=0;
    usersc.innerText=0;
    compsc.innerText=0;
    msg.innerText="PLAY your TURN";
    msg.style.backgroundColor="black";
})

getCompChoice=()=>{
    options=["rock","paper","scissors"];
    let rndmidx=Math.floor(Math.random()*3);
    return options[rndmidx];
}

userwon=()=>{
    msg.innerText="USER WON";
    userscore++;
    usersc.innerText= userscore;
    msg.style.backgroundColor="green";

    
    
}

compwon=()=>{
    msg.innerText="COMPUTER WON";
    compscore++;
    compsc.innerText= compscore;
    msg.style.backgroundColor="red";
    game.classList.remove("hide");
    
}

playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    let compchoice=getCompChoice();
    compchoiceimage=compchoice+".png";
        compimg.setAttribute("src",compchoiceimage);


    console.log("computer choice = ",compchoice);
    if(userchoice===compchoice){
        msg.innerText="GAME IS DRAW";
        game.classList.remove("hide");
        msg.style.backgroundColor="black";

    }
    else{
        if(userchoice=="rock"){
            if(compchoice=="paper"){
            compwon();
            }
            else{
            userwon();
            }
        }

        if(userchoice=="paper"){
            if(compchoice=="scissors"){
                compwon();
            }
            else{
                userwon();
            }
        }

        if(userchoice=="scissors"){
            if(compchoice=="rock"){
                compwon();
            }
            else{
                userwon();
            }
        }
    }
}


const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        userchoiceimage=userchoice+".png";
        game.classList.remove("hide");
        userimg.setAttribute("src",userchoiceimage);
        playgame(userchoice);
        
    })
})