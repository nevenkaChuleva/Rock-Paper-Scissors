// Declaring all the buttons
let startButton = $(".start");
let rockButton = $(".rock");
let paperButton = $(".paper");
let scissorsButton = $(".scissors");
let next = $(".next");
let end = $(".end");

// Views/Parts
let midGame = $("#mid-game");
let startOfGame = $("#start-of-game");
let endOfGame = $("#end-game");

// Pictures
let userRock = $('.userRock');
let userPaper = $('.userPaper');
let userScissors = $('.userScissors');
let compRock = $('.compRock');
let compPaper = $('.compPaper');
let compScissors = $('.compScissors');

// Array for the computer choice
let Rock = "Rock";
let Paper = "Paper";
let Scissors = "Scissors";
let choicesList = [Rock, Paper, Scissors];

// Placeholders
let outcome = $('.outcome');
let winner = $('.winner');
let userPointsPlace = $('.userPoints');
let compPointsPlace = $('.compPoints');
let thanks = $('.thanks');
let result = $('#result');

// Other
let userChoice; 
let computerChoice;
let userPoints = 0;
let compPoints = 0;
let round = 0;





// Button clicks
startButton.on('click', function(){
    startOfGame.hide();
    midGame.show();
});

rockButton.on('click', function(){
    startOfGame.hide();
    userChoice = "Rock";
    Pictures(userRock, userScissors, userPaper);
    compChoose();
});

paperButton.on('click', function(){
    startOfGame.hide();
    userChoice = "Paper";
    Pictures(userPaper, userScissors, userRock);
    compChoose();
});

scissorsButton.on('click', function(){
    startOfGame.hide();
    userChoice = "Scissors";
    Pictures(userScissors, userPaper, userRock);
    compChoose();
});

next.on('click', function(){
    endOfGame.hide();
    midGame.show();
});

end.on('click', function(){
    round = 0;
    endOfGame.hide();
    thanks.show();
});




// Helpful Methods  
function clearCounter(){
    compPoints = 0;
    userPoints = 0;
}

function Pictures(show, hide, hide2){
    show.show();
    hide.hide();
    hide2.hide();
}

function EndText(outcomeText, winnerText){
    outcome.text(`${outcomeText}`);
    winner.text(`${winnerText}`);
}

function Winner(outcomeTop, outcomeLeft, winnerTop, winnerLeft, winnerColor){
    outcome.css({top: `${outcomeTop}%`, left: `${outcomeLeft}%`, position:'absolute'});
    winner.css({top: `${winnerTop}%`, left: `${winnerLeft}%`, position:'absolute', "color" : `${winnerColor}`});
}




function compChoose(){
    round++

    // Computer randomly choosing 
    computerChoice = choicesList[Math.floor(Math.random()*choicesList.length)];
        
    midGame.hide();
    endOfGame.show();
    
    switch(userChoice) {
        case "Rock":
            if (computerChoice == Rock){
                // The place where the texts should be and what color
                Winner(50, 36.5, 63, 38.5, "white");
                // Which picture should be shown and which should be hidden
                Pictures(compRock, compScissors, compPaper);
                // Result 
                EndText("Both chose Rock!", "Neither wins a point.");
            } else if (computerChoice == Paper) {
                Winner(50, 36, 63, 36, "red");
                EndText(`${computerChoice} beats ${userChoice}.`, "The computer wins a point!")
                Pictures(compPaper, compScissors, compRock);
                compPoints++;
            } else if (computerChoice == Scissors){
                Winner(50, 35, 63, 40, "green");
                EndText(`${userChoice} beats ${computerChoice}.`, "You win a point!")
                Pictures(compScissors, compPaper, compRock);
                userPoints++;
            }
        break;
        case "Paper":
            if (computerChoice == Paper){
                Winner(50, 36.5, 63, 38.5, "white");
                Pictures(compPaper, compScissors, compRock);
                EndText("Both chose Paper!", "Neither wins a point.")
            } else if (computerChoice == Rock) {
                Winner(50, 36.5, 63, 40, "green");              
                Pictures(compRock, compScissors, compPaper);
                EndText(`${userChoice} beats ${computerChoice}.`, "You win a point!")
                userPoints++;
            } else if (computerChoice == Scissors){
                Winner(50, 35, 63, 36, "red");
                Pictures(compScissors, compPaper, compRock);
                EndText(`${computerChoice} beats ${userChoice}.`, "The computer wins a point!")
                compPoints++;
            }
        break;
        case "Scissors":
            if (computerChoice == Scissors){
                Winner(50, 36.5, 63, 38.5, "white");
                Pictures(compScissors, compPaper, compRock);
                EndText("Both chose Scissors!", "Neither wins a point.");
            } else if (computerChoice == Paper) {
                Winner(50, 36.5, 63, 40, "green"); 
                Pictures(compPaper, compScissors, compRock);
                EndText(`${userChoice} beats ${computerChoice}.`, "You win a point!")               
                userPoints++;
            } else if (computerChoice == Rock){
                Winner(50, 35, 63, 36, "red");
                Pictures(compRock, compScissors, compPaper);
                EndText(`${computerChoice} beats ${userChoice}.`, "The computer wins a point!");
                compPoints++;
            }
        break;    
        default:
            console.log("Something went wrong");
    }
    userPointsPlace.text("Your points: " + userPoints);
    compPointsPlace.text("Computer points: " + compPoints);
}