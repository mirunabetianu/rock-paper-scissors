let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "computer".fontsize(3).sub();

function convertToWord(letter){
    switch (letter){
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
        default:
            return "Undefined";
    }
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer)
{
    userScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You won!`; 

    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500)
}

function lose(user, computer)
{
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lost...`;

    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500) 
}

function draw(user, computer)
{
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a draw!`;

    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 500)
}

function game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click', () => game("r")
    )

    paper_div.addEventListener('click', () => game("p")  
    )

    scissors_div.addEventListener('click', () => game("s")
    )
}
main();
