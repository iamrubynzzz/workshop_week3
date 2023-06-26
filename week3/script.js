//declaring variables
let winMsg = 'Victory';  
let loseMsg = 'Defeat';
let tieMsg = 'tie';
let moveList = ['Rock','Paper','Scissors'];  //list of possible moves
let statusDisplay = document.querySelector('#status-head');   //display element for the status of game
let moveDisplays = document.querySelectorAll('.move-display h2');   //display element for player and computer moves
let buttons = document.querySelectorAll('button');


// function to calculate result
function calcResult(move1, move2) {
  if (move1 == move2)    //if both the moves are same, display tie message
  {
    statusDisplay.textContent = 'Tie'
    moveDisplays[0].textContent = 'You played ' + moveList[move1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
  }  
  else if ( move1 == 0  && move2 == 2 )  //rock wins over scissors
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[2];
    moveDisplays[1].textContent = 'Computer played ' + moveList[1];

  }
  else if ( move1 == 1 && move2 == 0 )  // paper wins over rock
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[0];

  }
  else if ( move1 == 2 && move2 == 1  )  //scissors wins over paper
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[0];
    moveDisplays[1].textContent = 'Computer played ' + moveList[2];

  }
  else{   
    statusDisplay.textContent = loseMsg;           //if none of the above conditions satisfy, display lose message
    moveDisplays[0].textContent = 'You played ' + moveList[move1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
  }
  //hide the play button and display the play again button
  buttons[0].style = 'display:none'
  buttons[2].style = 'display:none'
  buttons[1].style = 'display:none'
  buttons[3].textContent = 'Play Again!'
  buttons[3].style = 'display:block'
  buttons[3].addEventListener('click',startGame)
  moveDisplays[0].style = 'display:block'
  moveDisplays[1].style = 'display:block'


}


//function to randomly generate a move by computer
function randomMove() {
  return Math.floor(Math.random() * 3);
}


//function to start a game
function startGame() {
  statusDisplay.textContent = 'Choose!';    //display choose as the initial status of game

  //set the buttons for each move and add event listener
  for (let i = 0;i<buttons.length;i++){
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = 'inline-block';
    buttons[i].addEventListener("click",endGame); 
  
  }
//hide unnecessary buttons
  buttons[3].style = 'display:none'
  moveDisplays[0].style = 'display:none'
  moveDisplays[1].style = 'display:none'
  

}

//function to end game
function endGame(event) {
  let userMove =moveList.indexOf(event.target.textContent);
  let compMove = randomMove();
  console.log(compMove);
  calcResult(userMove,compMove);
}

startGame();
