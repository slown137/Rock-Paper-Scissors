var userChoice = prompt("Rock, Paper, or Scissors?");

console.log(userChoice);
console.log(typeof userChoice);

var inputCheck = function(input) {
    if (input != "Rock" || "Paper" || "Scissors") {
        alert("Please choose Rock, Paper, or Scissors")
    } else {
        confirm(`You choose ${input}`)
    };  
};

inputCheck(userChoice);

var computerRNG = Math.random();
console.log(computerRNG);

if (computerRNG < 0.34) {
    computerChoice = 'Rock';
} else if  (computerRNG <= 0.67) {
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors';
};

console.log(computerChoice);


var compare = function(user, cpu) {
    if (user === cpu) {
        alert('You and the computer tied! Try again')
    } else if (user === 'Rock' && cpu === 'Paper') {
        alert('Computer chose Paper, you lose!');
    } else if (user === 'Rock' && cpu === 'Scissors') {
        alert('Computer chose Scissors, you win!');
    } else if (user === 'Paper' && cpu === 'Rock') {
        alert('Computer chose Rock, you win!');
    } else if (user === 'Paper' && cpu === 'Scissors') {
        alert('Computer chose Scissors, you lose!');
    } else if (user === 'Scissors' && cpu === 'Paper') {
        alert('Computer chose Paper, you Win!');
    } else if (user === 'Scissors' && cpu === 'Rock') {
        alert('Computer chose Rock, you Lose');
    };
};

compare(userChoice, computerChoice);


// var tryAgain = confirm('Would you like to try again?');

// if (tryAgain === true) {
    
// }


