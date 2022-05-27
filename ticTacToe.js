//---------------------------------------Variable Declarations and Setting Initial Values-----------------------------------------------------

//initializing start values of global variables
let turnCount = 1; 
let isGameOver=false;
let computerScore=0;
let userScore=0;
let computerLetter='O';
let userLetter='X';
let whoWon = '';
let userMessage = document.getElementById('user-message');

//declaring square variables
let square1 = document.getElementById('square-1');
let square2 = document.getElementById('square-2');
let square3 = document.getElementById('square-3');
let square4 = document.getElementById('square-4');
let square5 = document.getElementById('square-5');
let square6 = document.getElementById('square-6');
let square7 = document.getElementById('square-7');
let square8 = document.getElementById('square-8');
let square9 = document.getElementById('square-9');


//setting scoreboard values
document.getElementById('actual-user-score').innerHTML = `${userScore}`;
document.getElementById('actual-computer-score').innerHTML = `${computerScore}`;

//setting user message
userMessage.innerHTML= `You play ${userLetter}!`;

//--------------------------------------------Functions that check conditions of game being over----------------------------------------------


//determines who is playing the letter that won, and updates score accordingly
function determineWinner(letter) {
    if(letter === computerLetter) {
        whoWon = 'The Computer';
        computerScore ++;
        document.getElementById('actual-computer-score').innerHTML = `${computerScore}`;
    } else if(letter === userLetter) {
        whoWon = 'You';
        userScore ++;
        document.getElementById('actual-user-score').innerHTML = `${userScore}`;
    }
}

//checks if game is over, updates isGameOver accordingly, displays winner in user message
function isGameFinished(){
    //row1 check
    if(square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML && square1.innerHTML) {
        isGameOver= true;
        determineWinner(square1.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //row 2 check
    } else if(square4.innerHTML === square5.innerHTML && square5.innerHTML === square6.innerHTML && square4.innerHTML) {
        isGameOver= true;
        determineWinner(square4.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //row 3 check
    } else if(square7.innerHTML === square8.innerHTML && square8.innerHTML === square9.innerHTML && square7.innerHTML) {
        isGameOver= true;
        determineWinner(square7.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //column 1 check
    } else if(square1.innerHTML === square4.innerHTML && square4.innerHTML === square7.innerHTML && square1.innerHTML) {
        isGameOver= true;
        determineWinner(square1.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //column 2 check
    } else if(square2.innerHTML === square5.innerHTML && square5.innerHTML === square8.innerHTML && square2.innerHTML) {
        isGameOver= true;
        determineWinner(square2.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //column 3 check
    } else if(square3.innerHTML === square6.innerHTML && square6.innerHTML === square9.innerHTML && square3.innerHTML) {
        isGameOver= true;
        determineWinner(square3.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //diagonal left to right check
    } else if(square1.innerHTML === square5.innerHTML && square5.innerHTML === square9.innerHTML && square1.innerHTML) {
        isGameOver= true;
        determineWinner(square1.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //diagonal right to left check
    } else if(square7.innerHTML === square5.innerHTML && square5.innerHTML === square3.innerHTML && square7.innerHTML) {
        isGameOver= true;
        determineWinner(square7.innerHTML);
        userMessage.innerHTML = `The game is over! ${whoWon} won!`;
    //tie check
    } else if(square1.innerHTML && square2.innerHTML && square3.innerHTML && square4.innerHTML && square5.innerHTML && square6.innerHTML
        && square7.innerHTML && square8.innerHTML && square9.innerHTML) {
        isGameOver=true;
        userMessage.innerHTML = "The game is over! It's a tie!";
    //continue turnCount
    } else {
        turnCount ++;
    }
}

//-----------------------------------------------Functions for resetting gameboard --------------------------------------------------

//clears letters from all squares
function clearLetters() {
    for(let i = 1; i < 10; i++) {
        document.getElementById('square-'+i).innerHTML = '';
    }
}
//switches who plays x and who plays o
function switchTeams(){
    switch(userLetter) {
        case 'X' :
            userLetter = 'O';
            break;
        case 'O' :
            userLetter = 'X';
            break;
        default :
            break;
    }
    switch(computerLetter) {
        case 'X' :
            computerLetter = 'O';
            break;
        case 'O' :
            computerLetter = 'X';
            break;
        default :
            break;
    }
}

/*resets turnCount and isGameOver, clears game board, switches the letters between user and computer, 
takes computer turn if necessary after resetting*/
function resetGame() {
    turnCount = 1;
    isGameOver= false;
    clearLetters();
    switchTeams();
    userMessage.innerHTML = `You play ${userLetter}!`
    if(computerLetter === 'X') {
        takeComputerTurn();
    }
}

//assign resetGame to reset button
document.getElementById('reset-button').onclick = resetGame;

//-------------------------------------------------------Functions for Taking a Computer Turn----------------------------------------

//adds a letter for computer, given the string id of the square to play in
function addComputerLetter(square){
    document.getElementById(square).innerHTML = `${computerLetter}`;
}

//determines if computer can win and returns winning square as string
function canComputerWin() {
    //row 1 checks
    if(square1.innerHTML===computerLetter && square1.innerHTML === square2.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    } else if(square1.innerHTML===computerLetter && square1.innerHTML === square3.innerHTML & square2.innerHTML === '') {
        return 'square-2';
    } else if(square2.innerHTML === computerLetter && square2.innerHTML === square3.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //row 2 checks
    } else  if(square4.innerHTML === computerLetter && square4.innerHTML === square5.innerHTML && square6.innerHTML === '') {
        return 'square-6';
    } else if(square4.innerHTML === computerLetter && square4.innerHTML === square6.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === computerLetter && square5.innerHTML === square6.innerHTML && square4.innerHTML === '') {
        return 'square-4';
    //row 3 checks
    } else  if(square7.innerHTML === computerLetter && square7.innerHTML === square8.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square7.innerHTML === computerLetter && square7.innerHTML === square9.innerHTML & square8.innerHTML === '') {
        return 'square-8';
    } else if(square8.innerHTML === computerLetter && square8.innerHTML === square9.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    //column 1 checks
    } else  if(square1.innerHTML === computerLetter && square1.innerHTML === square4.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    } else if(square1.innerHTML === computerLetter && square1.innerHTML === square7.innerHTML & square4.innerHTML === '') {
        return 'square-4';
    } else if(square4.innerHTML === computerLetter&& square4.innerHTML === square7.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //column 2 checks
    } else  if(square2.innerHTML ===computerLetter && square2.innerHTML === square5.innerHTML && square8.innerHTML === '') {
        return 'square-8';
    } else if(square2.innerHTML === computerLetter && square2.innerHTML === square8.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === computerLetter && square5.innerHTML === square8.innerHTML && square2.innerHTML === '') {
        return 'square-2';
    //column 3 checks
    } else  if(square3.innerHTML === computerLetter && square3.innerHTML === square6.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square3.innerHTML === computerLetter && square3.innerHTML === square9.innerHTML & square6.innerHTML === '') {
        return 'square-6';
    } else if(square6.innerHTML === computerLetter && square6.innerHTML === square9.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    //diagonal left to right checks
    } else  if(square1.innerHTML === computerLetter && square1.innerHTML === square5.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square1.innerHTML === computerLetter && square1.innerHTML === square9.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === computerLetter && square5.innerHTML === square9.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //diagonal right to left checks
    } else  if(square3.innerHTML === computerLetter && square3.innerHTML === square5.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    } else if(square3.innerHTML === computerLetter && square3.innerHTML === square7.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === computerLetter && square5.innerHTML === square7.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    //no win possibilities
    } else {
        return null;
    }
}

//determines if user can win, and returns winning square as string
function canUserWin() {
    //row 1 checks
    if(square1.innerHTML===userLetter && square1.innerHTML === square2.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    } else if(square1.innerHTML===userLetter && square1.innerHTML === square3.innerHTML & square2.innerHTML === '') {
        return 'square-2';
    } else if(square2.innerHTML === userLetter && square2.innerHTML === square3.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //row 2 checks
    } else  if(square4.innerHTML === userLetter && square4.innerHTML === square5.innerHTML && square6.innerHTML === '') {
        return 'square-6';
    } else if(square4.innerHTML === userLetter && square4.innerHTML === square6.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === userLetter && square5.innerHTML === square6.innerHTML && square4.innerHTML === '') {
        return 'square-4';
    //row 3 checks
    } else  if(square7.innerHTML === userLetter && square7.innerHTML === square8.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square7.innerHTML === userLetter && square7.innerHTML === square9.innerHTML & square8.innerHTML === '') {
        return 'square-8';
    } else if(square8.innerHTML === userLetter && square8.innerHTML === square9.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    //column 1 checks
    } else  if(square1.innerHTML === userLetter && square1.innerHTML === square4.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    } else if(square1.innerHTML === userLetter && square1.innerHTML === square7.innerHTML & square4.innerHTML === '') {
        return 'square-4';
    } else if(square4.innerHTML === userLetter && square4.innerHTML === square7.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //column 2 checks
    } else  if(square2.innerHTML ===userLetter && square2.innerHTML === square5.innerHTML && square8.innerHTML === '') {
        return 'square-8';
    } else if(square2.innerHTML === userLetter && square2.innerHTML === square8.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === userLetter && square5.innerHTML === square8.innerHTML && square2.innerHTML === '') {
        return 'square-2';
    //column 3 checks
    } else  if(square3.innerHTML === userLetter && square3.innerHTML === square6.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square3.innerHTML === userLetter && square3.innerHTML === square9.innerHTML & square6.innerHTML === '') {
        return 'square-6';
    } else if(square6.innerHTML === userLetter && square6.innerHTML === square9.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    //diagonal left to right checks
    } else  if(square1.innerHTML === userLetter && square1.innerHTML === square5.innerHTML && square9.innerHTML === '') {
        return 'square-9';
    } else if(square1.innerHTML === userLetter && square1.innerHTML === square9.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === userLetter && square5.innerHTML === square9.innerHTML && square1.innerHTML === '') {
        return 'square-1';
    //diagonal right to left checks
    } else  if(square3.innerHTML === userLetter && square3.innerHTML === square5.innerHTML && square7.innerHTML === '') {
        return 'square-7';
    } else if(square3.innerHTML === userLetter && square3.innerHTML === square7.innerHTML & square5.innerHTML === '') {
        return 'square-5';
    } else if(square5.innerHTML === userLetter && square5.innerHTML === square7.innerHTML && square3.innerHTML === '') {
        return 'square-3';
    //no win possibilities
    } else {
        return null;
    }
}

//returns string of first available square
function firstAvailableSquare() {
    for(let i=1; i< 10; i++) {
        if(!document.getElementById('square-'+i).innerHTML) {
            return 'square-'+i;
        }
    }
}

//takes easy turn for the computer, first 1-2 moves are random
function takeEasyTurn() {
   if(turnCount < 4) {
      let randomSquare = 'square-'+ (Math.floor(Math.random()*9)+1);
      while(document.getElementById(randomSquare).innerHTML) {
          randomSquare= 'square-'+ (Math.floor(Math.random()*9)+1);
      }
      addComputerLetter(randomSquare);
      turnCount++;

   } else {
      addComputerLetter(firstAvailableSquare());
      turnCount++;
   }
}

//takes a normal turn for the computer
function takeNormalTurn() {
    let humanErrorProbability = Math.floor(Math.random()*10);
    if(humanErrorProbability < 7) {
        takeHardTurn();
    } else if(humanErrorProbability >= 7) {
      let randomSquare = 'square-'+ (Math.floor(Math.random()*9) + 1);
      while(document.getElementById(randomSquare).innerHTML) {
        randomSquare= 'square-'+ (Math.floor(Math.random()*9) + 1);
      }
      addComputerLetter(randomSquare);
      isGameFinished();
      turnCount++;
    }
}

//takes a hard turn for the computer,user can only win as x, and there's only two moves that win
function takeHardTurn() {
    if(turnCount < 4){
        if(!square5.innerHTML) {
            addComputerLetter('square-5');
            turnCount ++;
        }  else if(!square1.innerHTML) {
            addComputerLetter('square-1');
            turnCount++;
        } else if(!square3.innerHTML) {
            addComputerLetter('square-3');
            turnCount++;
        } else if(!square7.innerHTML) {
            addComputerLetter('square-7');
            turnCount++;
        } else if(!square9.innerHTML) {
            addComputerLetter('square-9');
            turnCount++;
        }
    }  else if(turnCount  >= 4){
        if(canComputerWin()) {
            addComputerLetter(canComputerWin());
            isGameFinished();
        } else if(canUserWin()) {
            addComputerLetter(canUserWin());
            isGameFinished();
        } else {
            addComputerLetter(firstAvailableSquare());
            isGameFinished();
        }
    }
}

//takes an impossible turn
function takeImpossibleTurn() {
    if(turnCount < 4){
        if(!square5.innerHTML) {
            addComputerLetter('square-5');
            turnCount ++;
        }  else if(!square1.innerHTML) {
            addComputerLetter('square-1');
            turnCount++;
        } else if(!square3.innerHTML) {
            addComputerLetter('square-3');
            turnCount++;
        } else if(!square7.innerHTML) {
            addComputerLetter('square-7');
            turnCount++;
        } else if(!square9.innerHTML) {
            addComputerLetter('square-9');
            turnCount++;
        }
    } else if(turnCount === 4 && square3.innerHTML && square7.innerHTML){        // this is an added check for the one weak spot in hard mode
        addComputerLetter('square-8');
        turnCount++;
    } else if(turnCount  >= 4){
        if(canComputerWin()) {
            addComputerLetter(canComputerWin());
            isGameFinished();
        } else if(canUserWin()) {
            addComputerLetter(canUserWin());
            isGameFinished();
        } else {
            addComputerLetter(firstAvailableSquare());
            isGameFinished();
        }
    }
}

//takes computer turn, depending on which difficulty is checked off
function takeComputerTurn(){
    if(document.getElementById('easy').checked) {
        takeEasyTurn();
    } else if(document.getElementById('normal').checked) {
        takeNormalTurn();
    } else if(document.getElementById('hard').checked) {
        takeHardTurn();
    } else if(document.getElementById('actually-impossible').checked) {
        takeImpossibleTurn();
    }
}

//-----------------------------------------------------User Turn -------------------------------------------------------------------------
//adds user letter
function addUserLetter(e){
    if(isGameOver === true) {
        alert('The game is over. Press reset to play again!');
    } else if(e.target.innerHTML!==''){
        alert('This square already has another letter.Choose another square!');
    } else if(e.target.innerHTML === '') {
        e.target.innerHTML= `${userLetter}`;
        isGameFinished();
        if(!isGameOver) {
            takeComputerTurn();
        }
    }
   
}

//assigning onclick events to addLetter for each square
for(let i = 1; i < 10; i++){
    document.getElementById('square-'+i).onclick= addUserLetter;
}















