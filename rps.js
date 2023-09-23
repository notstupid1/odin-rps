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

    let list_item = [];

    let score;
    let win_status = "";

    let comp_choice = getComputerChoice();

    score = playRound(comp_choice, player_choice);
    if (score === 1) {++player_win; win_status = "You Win!";}
    if (score === -1) {++comp_win; win_status = "You Lose!"}
    if (score === 0) {win_status = "Tie"};

    list_item[times] = document.createElement('li');
    list_item[times].textContent = win_status;
    list.appendChild(list_item[times]);

    times++;
    hNumCount.textContent = player_win;
    cNumCount.textContent = comp_win;

    if (player_win >= max_times || comp_win >= max_times) {
        if (player_win > comp_win) final_score.textContent = "You Won!";
        else if (player_win < comp_win) final_score.textContent = "You Lose!";
        else final_score.textContent = "It's a Tie!";
    }
}
let max_times = 5;
let times = 0;
let player_win = 0;
let comp_win = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

let list = document.querySelector('#list');
let hNumCount = document.querySelector('#human-num');
let cNumCount = document.querySelector('#comp-num');
let final_score = document.querySelector('#final-score');
rock.addEventListener("click", 
        () => {let player_choice = "Rock"; 
        (player_win < max_times || comp_win < max_times) ? playGame(player_choice) : null;});
paper.addEventListener("click", 
        () => {let player_choice = "Paper"; 
        (player_win < max_times || comp_win < max_times) ? playGame(player_choice) : null;});
scissor.addEventListener("click", 
        () => {let player_choice = "Scissor"; 
        (player_win < max_times || comp_win < max_times) ? playGame(player_choice) : null;});