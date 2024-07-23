let userscore = 0 ;
let compscore = 0 ;

const choice = document.querySelectorAll(".option");
const msg = document.querySelector("#mssg");

const userscorepara =document.querySelector("#user");
const compscorepara =document.querySelector("#comp");

const gencompchoice = () => {
    const options = ["rock", "paper" ,"scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawgame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game draw. Play again!";
    msg.style.backgroundColor = "navy";
};

const showwinner = (userwin , userchoice , compchoice) => {
    if(userwin){
        userscore++ ;
        userscorepara.innerText = userscore;
        console.log("You win!");
        msg.innerText = `Wohoo! You Win.Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `ahh! You lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log(`User Choice ${userchoice}`);
    const compchoice = gencompchoice();
    console.log(`Comp Choice ${compchoice}`);

    if( userchoice === compchoice) {
        //draw
        drawgame();
    }

    else 
    {
        let userwin = true ;

        if ( userchoice =="scissor"){
            //rock , paper
            userwin = compchoice === "rock" ? false : true ;
        }
        else if ( userchoice === "rock"){
            //scissor , paper
            userwin = compchoice === "scissor" ? true :false ;
        }
        else{
            //rock , scissor 
            userwin = compchoice === "scissor" ? false : true ;
        }
        showwinner(userwin ,userchoice ,compchoice);
    }
    
}

choice.forEach( (option) => {
  
    option.addEventListener("click" , () => {
        const userchoice = option.getAttribute("id");
        playgame(userchoice );
    });

});