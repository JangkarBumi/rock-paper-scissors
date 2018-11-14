function computerPick() {
    var myArray = [
       "Rock",
       "Paper",
       "Scissors"
     ];
     

const pick = myArray[Math.floor(Math.random()*myArray.length)];
return pick
}


function playRound(playerSelection , computerSelection ){

    if(playerSelection ==  computerSelection){
        result = 'Its a tie! '
    } else if ( playerSelection == 'rock' && computerSelection == 'scissors') {
          result = 'You won! Your rock crushed the scissors!'
     } else if ( playerSelection == 'rock' && computerSelection == 'paper') {
        result =  'You lose! Paper can fly above your rock';
    }
    
if ( playerSelection == 'paper' && computerSelection == 'scissors') {
    result =  'You lose! Scissors cut right through your paper';
     } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result =  'You won! Paper can fly above the rock';
    }

if ( playerSelection == 'scissors' && computerSelection == 'paper') {
    result =  'You won! your scissors cut right through the paper';
     } else if ( playerSelection == 'scissors' && computerSelection == 'rock') {
        result =  'You lose! The rock crushed your scissors';
    }
return result
}

/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end. */

function game() {

    let computerPoints = 0;
    let humanPoints = 0;

    for(let i = 0;i<5;i++) {
        playRound(playerSelection = window.prompt('Are you feeling lucky? Just type rock, paper or scissors').toLowerCase(), computerSelection = computerPick().toLowerCase())
   
        console.log(result)
        
        if( result.includes('won')) {
            humanPoints += 100;
        } else if (result.includes('tie')) {
            computerPoints + 0;
        } else {
            computerPoints += 100;
        }

        
    }
    if(computerPoints == humanPoints) {
        console.log('We are just as smart as you! Humans: '+humanPoints+' points ' +'Machine: '+ computerPoints+' points' )
    }
   else if( computerPoints > humanPoints) {
        console.log ('Nothing will stop us! Humans: '+humanPoints+' points ' +'Machine: '+ computerPoints+' points')
     } else {
         console.log ('You win this time! We will return! Humans: '+humanPoints+' points ' +'Machine: '+ computerPoints+' points')
     }
  
}