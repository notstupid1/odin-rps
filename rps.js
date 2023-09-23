function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];

    let rand = Math.floor((Math.random() *10)) % 3;

    return choices[rand];
}

function playRound (comp_choice, player_choice) {

    switch (comp_choice) {

        case "Rock":
            if(player_choice === "Paper") return 1;
            else if(player_choice === "Scissor") return -1;
            else return 0;

        case "Paper":
            if(player_choice === "Scissor") return 1;
            else if(player_choice === "Rock") return -1;
            else return 0;

        case "Scissor":
            if(player_choice === "Rock") return 1;
            else if(player_choice === "Paper") return -1;
            else return 0;
    }
}

function playGame(player_choice){

    if (times > 5) {
        return;
    }

    let score;

    let comp_choice = getComputerChoice();

    score = playRound(comp_choice, player_choice);
    if (score === 1) ++player_win;
    if (score === -1) ++comp_win;
    if (score === 0) console.log("Tie");

    times++;
    console.log(score);
    console.log(player_win, comp_win);

    if (player_win > comp_win) return "You Win!";
    else if (player_win === comp_win) return "Tie!";
    else return "You Lose!";
}
let times = 0;
let player_win = 0;
let comp_win = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener("click", () => {let player_choice = "Rock"; playGame(player_choice)});
paper.addEventListener("click", () => {let player_choice = "Paper"; playGame(player_choice)});
scissor.addEventListener("click", () => {let player_choice = "Scissor"; playGame(player_choice)});