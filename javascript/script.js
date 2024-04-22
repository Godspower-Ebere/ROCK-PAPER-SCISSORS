var display=document.getElementById("display");

var rules=document.getElementById("rules");
var close=document.getElementById("close");
var close2=document.getElementById("close2");

var rockimg=document.getElementById("rock");
var paperimg=document.getElementById("paper");
var scissorsimg=document.getElementById("scissors");

var playerchoice="";
var computerchoice="";

var computernum=0;
var scores=0;
var result="";
var score=document.getElementById("score");

var game=document.getElementById("game");
var picked=document.getElementById("picked");

var playerimg=document.getElementById("playerimg");
var computerimg=document.getElementById("computerimg");
var check=document.getElementById("check");
var show=document.getElementById("show");

var play=document.getElementById("play");
rules.addEventListener("click",()=>{
    display.style.display="flex";
})
close.addEventListener("click",()=>{
    display.style.display="none";
})
close2.addEventListener("click",()=>{
    display.style.display="none";
})
rockimg.addEventListener("click",()=>{
    playerchoice="rock";
    if (window.innerWidth<=1000){
        playerimg.classList.add("mobilerock");
    }
    else{
        playerimg.classList.add("rock");
    }
    
    computernum=Math.floor(Math.random()*3)+1;
    if (computernum===1){
        computerchoice="scissors";
    }
    if (computernum===2){
        computerchoice="scissors";
    }
    if (computernum===3){
        computerchoice="paper";
    }
     if(computerchoice==="paper"){
        scores --;
        if(scores<0){
            scores=0;
        }
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilepaper");
        }
        else{
            computerimg.classList.add("paper");
        }
        computerimg.src="images/icon-paper.svg";

        score.textContent=scores;

        result="YOU LOSE";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            computerimg.style.display="block";
        },1000)
        setTimeout(function(){
            show.style.display="block";
        },2000)
        

        playerimg.src="images/icon-rock.svg";
        check.textContent=result;
    }
    if(computerchoice==="scissors"){
        scores +=1;
        computerimg.src="images/icon-scissors.svg";
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilescissors");
        }
        else{
            computerimg.classList.add("scissors");
        }
        score.textContent=scores;

        result="YOU WIN";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            computerimg.style.display="block";
        },1000)
        setTimeout(function(){
            show.style.display="block";
        },2000)
        

        playerimg.src="images/icon-rock.svg";
        check.textContent=result;
    }
    
})
paperimg.addEventListener("click",()=>{
    playerchoice="paper";
    if (window.innerWidth<=1000){
        playerimg.classList.add("mobilepaper");
    }
    else{
        playerimg.classList.add("paper");
    }
    
    computernum=Math.floor(Math.random()*3)+1;
    if (computernum===1){
        computerchoice="rock";
    }
    if (computernum===2){
        computerchoice="rock";
    }
    if (computernum===3){
        computerchoice="scissors";
    }
    if(computerchoice==="rock"){
        scores+=1;
        computerimg.src="images/icon-rock.svg";
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilerock");
        }
        else{
            computerimg.classList.add("rock");
        }
       
        score.textContent=scores;

        result="YOU WIN";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            show.style.display="block";
        },2000);
        setTimeout(function(){
            computerimg.style.display="block";
        },1000);

        playerimg.src="images/icon-paper.svg";
        check.textContent=result;
    }
    if(computerchoice==="scissors"){
        scores --;
        if(scores<0){
            scores=0;
        }
        computerimg.src="images/icon-scissors.svg";
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilescissors");
        }
        else{
            computerimg.classList.add("scissors");
        }

        score.textContent=scores;

        result="YOU LOSE";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            computerimg.style.display="block";
        },1000)
        setTimeout(function(){
            show.style.display="block";
        },2000)
        

        playerimg.src="images/icon-paper.svg";
        check.textContent=result;
    }
})
scissorsimg.addEventListener("click",()=>{
    playerchoice="scissors";
    if (window.innerWidth<=1000){
        playerimg.classList.add("mobilescissors");
    }
    else{
        playerimg.classList.add("scissors");
    }
    
    computernum=Math.floor(Math.random()*3)+1;
    if (computernum===1){
        computerchoice="rock";
    }
    if (computernum===2){
        computerchoice="paper";
    }
    if (computernum===3){
        computerchoice="paper";
    }
    if(computerchoice==="rock"){
        scores --;
        if(scores<0){
            scores=0;
        }
        computerimg.src="images/icon-rock.svg";
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilerock");
        }
        else{
            computerimg.classList.add("rock");
        }

        score.textContent=scores;

        result="YOU LOSE";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            show.style.display="block";
        },2000);
        setTimeout(function(){
            computerimg.style.display="block";
        },1000);

        playerimg.src="images/icon-scissors.svg";
        check.textContent=result;
    }
    if(computerchoice==="paper"){
        scores+=1;
        
        computerimg.src="images/icon-paper.svg";
        if (window.innerWidth<=1000){
            computerimg.classList.add("mobilepaper");
        }
        else{
            computerimg.classList.add("paper");
        }

        score.textContent=scores;

        result="YOU WIN";
        game.style.display="none";
        picked.style.display="flex";
        setTimeout(function(){
            computerimg.style.display="block";
        },1000)
        setTimeout(function(){
            show.style.display="block";
        },2000)
        

        playerimg.src="images/icon-scissors.svg";
        check.textContent=result;
    }
})

play.addEventListener("click",()=>{
    game.style.display="flex";
    picked.style.display="none";
    show.style.display="none";
    computerimg.style.display="none";
    computerimg.classList.remove("scissors");
    computerimg.classList.remove("paper");
    computerimg.classList.remove("rock");

    playerimg.classList.remove("scissors");
    playerimg.classList.remove("paper");
    playerimg.classList.remove("rock");

    playerimg.classList.remove("mobilescissors");
    playerimg.classList.remove("mobilepaper");
    playerimg.classList.remove("mobilerock");
})
